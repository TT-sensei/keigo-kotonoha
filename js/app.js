import {
  EDU_EVENTS,
  ScreenManager,
  QuestionPool,
  ChoiceQuestion,
  TrueFalseQuestion,
  ScoreManager,
  ComboManager,
  StorageManager
} from 'https://tt-sensei.github.io/edu-components/index.js';
import { REFERENCE_ROWS } from './data/keigo-base.js';
import { SELECT_QUESTIONS } from './data/select-templates.js';
import { JUDGE_QUESTIONS } from './data/judge-templates.js';

const ROUND_SIZE = 10;
const STORE_KEY = 'learning-state';
const MODE_LABELS = { select: '敬語セレクト', judge: '敬語ジャッジ' };
const NAVI_IMAGES = {
  correct: 'https://raw.githubusercontent.com/TT-sensei/navi-character-/main/assets/web/characters/kai/fullbody/correct.webp',
  retry: 'https://raw.githubusercontent.com/TT-sensei/navi-character-/main/assets/web/characters/kai/fullbody/retry.webp'
};

const dom = {
  home: document.querySelector('#home-screen'),
  game: document.querySelector('#game-screen'),
  guide: document.querySelector('#guide-screen'),
  result: document.querySelector('#result-screen'),
  modeLabel: document.querySelector('#mode-label'),
  progressFill: document.querySelector('#progress-fill'),
  questionCount: document.querySelector('#question-count'),
  comboCount: document.querySelector('#combo-count'),
  questionStage: document.querySelector('#question-stage'),
  questionKind: document.querySelector('#question-kind'),
  questionScene: document.querySelector('#question-scene'),
  questionText: document.querySelector('#question-text'),
  questionHint: document.querySelector('#question-hint'),
  answerArea: document.querySelector('#answer-area'),
  feedbackPanel: document.querySelector('#feedback-panel'),
  feedbackMark: document.querySelector('#feedback-mark'),
  feedbackTitle: document.querySelector('#feedback-title'),
  feedbackAnswer: document.querySelector('#feedback-answer'),
  feedbackExplanation: document.querySelector('#feedback-explanation'),
  feedbackCharacter: document.querySelector('#feedback-character'),
  nextButton: document.querySelector('#next-button'),
  referenceBody: document.querySelector('#reference-body'),
  resultCorrect: document.querySelector('#result-correct'),
  resultCombo: document.querySelector('#result-combo'),
  resultAccuracy: document.querySelector('#result-accuracy'),
  categoryResults: document.querySelector('#category-results'),
  recommendationText: document.querySelector('#recommendation-text'),
  retryWeakButton: document.querySelector('#retry-weak-button')
};

const screenManager = new ScreenManager();
screenManager.register('home', dom.home);
screenManager.register('game', dom.game);
screenManager.register('guide', dom.guide);
screenManager.register('result', dom.result);
const storage = new StorageManager('keigo-kotonoha', { eventTarget: document });
let savedState = loadState();
let session = null;

function loadState() {
  const raw = storage.load(STORE_KEY, {});
  return {
    schemaVersion: 1,
    sessions: Number(raw && raw.sessions) || 0,
    mistakesById: raw && raw.mistakesById && typeof raw.mistakesById === 'object' ? raw.mistakesById : {},
    modeStats: raw && raw.modeStats && typeof raw.modeStats === 'object' ? raw.modeStats : {},
    lastPlayedAt: raw && raw.lastPlayedAt ? raw.lastPlayedAt : null
  };
}

function saveState() {
  storage.save(STORE_KEY, savedState);
}

function makeElement(tagName, className, text) {
  const element = document.createElement(tagName);
  if (className) element.className = className;
  if (text !== undefined) element.textContent = text;
  return element;
}

function renderReference() {
  dom.referenceBody.replaceChildren();
  REFERENCE_ROWS.forEach(function (row) {
    const tr = document.createElement('tr');
    [row.base, row.respectful, row.humble].forEach(function (value) {
      tr.append(makeElement('td', '', value));
    });
    dom.referenceBody.append(tr);
  });
}

function getWeight(question, focusCategory) {
  const mistakes = Math.min(Number(savedState.mistakesById[question.id]) || 0, 4);
  const focus = focusCategory && question.category === focusCategory ? 5 : 1;
  return (1 + mistakes * 0.9) * focus;
}

function weightedPick(items, focusCategory) {
  const total = items.reduce(function (sum, question) {
    return sum + getWeight(question, focusCategory);
  }, 0);
  let pointer = Math.random() * total;
  for (let index = 0; index < items.length; index += 1) {
    pointer -= getWeight(items[index], focusCategory);
    if (pointer <= 0) return items[index];
  }
  return items[items.length - 1];
}

function chooseRoundQuestions(questions, focusCategory) {
  const available = questions.slice();
  const selected = [];
  while (selected.length < ROUND_SIZE && available.length) {
    const question = weightedPick(available, focusCategory);
    selected.push(question);
    available.splice(available.indexOf(question), 1);
  }

  const reviewable = questions.filter(function (question) {
    return Number(savedState.mistakesById[question.id]) > 0;
  });
  const replacementIndex = selected.findIndex(function (question) {
    return !Number(savedState.mistakesById[question.id]);
  });
  if (reviewable.length && replacementIndex !== -1) {
    const review = weightedPick(reviewable, focusCategory);
    selected[replacementIndex] = Object.assign({}, review);
  }

  const pool = new QuestionPool(selected, { mode: 'random' });
  return pool.take(ROUND_SIZE);
}

function startGame(mode, options) {
  const source = mode === 'select' ? SELECT_QUESTIONS : JUDGE_QUESTIONS;
  const focusCategory = options && options.focusCategory ? options.focusCategory : null;
  session = {
    mode: mode,
    questions: chooseRoundQuestions(source, focusCategory),
    questionIndex: 0,
    answers: [],
    score: new ScoreManager(),
    combo: new ComboManager({ eventTarget: document, milestones: [3, 5, 10] }),
    component: null,
    locked: false
  };
  savedState.sessions += 1;
  saveState();
  screenManager.show('game');
  showQuestion();
}

function showQuestion() {
  const question = session.questions[session.questionIndex];
  if (!question) {
    showResult();
    return;
  }

  session.locked = false;
  session.component = session.mode === 'select'
    ? new ChoiceQuestion(question, { eventTarget: document, shuffle: true })
    : new TrueFalseQuestion(question, { eventTarget: document });

  dom.modeLabel.textContent = MODE_LABELS[session.mode];
  dom.questionCount.textContent = String(session.questionIndex + 1) + ' / ' + String(ROUND_SIZE);
  dom.progressFill.style.width = String(((session.questionIndex + 1) / ROUND_SIZE) * 100) + '%';
  dom.comboCount.textContent = '🔥 ' + String(session.combo.getCurrent()) + ' COMBO';
  dom.questionKind.textContent = session.mode === 'select' ? '場面に合うことばは？' : 'この敬語、正しい？';
  dom.questionScene.textContent = question.scene;
  dom.questionText.textContent = session.mode === 'select' ? question.prompt : question.sentence;
  dom.questionHint.textContent = session.mode === 'select' ? 'だれの動作か、たしかめよう。' : 'なんとなく丁寧そう、で決めない。';
  dom.feedbackPanel.hidden = true;
  dom.answerArea.className = session.mode === 'judge' ? 'answer-area judge-area' : 'answer-area';
  dom.answerArea.replaceChildren();

  if (session.mode === 'select') {
    renderChoiceButtons(session.component.getChoices());
  } else {
    renderJudgeButtons();
  }
}

function renderChoiceButtons(choices) {
  const keys = ['A', 'B', 'C', 'D'];
  choices.forEach(function (choice, index) {
    const button = makeElement('button', 'choice-button');
    const key = makeElement('span', 'choice-key', keys[index]);
    const label = makeElement('span', 'choice-label', choice);
    button.type = 'button';
    button.append(key, label);
    button.addEventListener('click', function () {
      answerCurrentQuestion(choice);
    });
    dom.answerArea.append(button);
  });
}

function renderJudgeButtons() {
  const choices = [
    { value: true, symbol: '○', text: '正しい', className: 'judge-true' },
    { value: false, symbol: '×', text: 'まちがい', className: 'judge-false' }
  ];
  choices.forEach(function (choice) {
    const button = makeElement('button', 'judge-button ' + choice.className);
    const symbol = makeElement('span', 'judge-symbol', choice.symbol);
    button.type = 'button';
    symbol.setAttribute('aria-hidden', 'true');
    button.append(symbol, makeElement('span', '', choice.text));
    button.addEventListener('click', function () {
      answerCurrentQuestion(choice.value);
    });
    dom.answerArea.append(button);
  });
}

function answerCurrentQuestion(value) {
  if (!session || session.locked) return;
  session.locked = true;
  const result = session.component.choose(value);
  if (result.ignored) session.locked = false;
}

function handleCorrect(event) {
  if (!session || !session.locked) return;
  const question = event.detail.question;
  const combo = session.combo.correct();
  session.score.correct();
  session.answers.push({ question: question, correct: true });
  showFeedback(question, true, combo);
}

function handleWrong(event) {
  if (!session || !session.locked) return;
  const question = event.detail.question;
  session.combo.wrong();
  session.score.wrong();
  session.answers.push({ question: question, correct: false });
  savedState.mistakesById[question.id] = (Number(savedState.mistakesById[question.id]) || 0) + 1;
  saveState();
  showFeedback(question, false, 0);
}

function comboMessage(combo) {
  if (combo >= 10) return 'PERFECT！ 10 COMBO';
  if (combo >= 5) return 'GREAT！ 5 COMBO';
  if (combo >= 3) return 'GOOD！ 3 COMBO';
  return 'その調子！';
}

function answerLabel(question) {
  if (session.mode === 'judge') return question.answer ? '○ 正しい' : '× まちがい';
  return question.answer;
}

function replayEffect(element, effectClass) {
  element.classList.remove(effectClass);
  void element.offsetWidth;
  element.classList.add(effectClass);
}

function showFeedback(question, isCorrect, combo) {
  dom.answerArea.classList.add('is-answered');
  dom.feedbackPanel.hidden = false;
  dom.feedbackPanel.classList.toggle('is-wrong', !isCorrect);
  dom.feedbackMark.textContent = isCorrect ? '○' : '×';
  dom.feedbackTitle.textContent = isCorrect ? '正解！' : 'おしい！';
  dom.feedbackAnswer.textContent = isCorrect ? comboMessage(combo) : '答え：' + answerLabel(question);
  dom.feedbackExplanation.textContent = question.explanation;
  dom.feedbackCharacter.src = isCorrect ? NAVI_IMAGES.correct : NAVI_IMAGES.retry;
  dom.feedbackCharacter.alt = isCorrect ? 'うなずくかい' : 'もう一度と励ますかい';
  replayEffect(dom.feedbackPanel, isCorrect ? 'effect-correct-pop' : 'effect-wrong-wobble');
  dom.comboCount.textContent = '🔥 ' + String(session.combo.getCurrent()) + ' COMBO';
  dom.nextButton.focus({ preventScroll: true });
}

function nextQuestion() {
  if (!session) return;
  session.questionIndex += 1;
  showQuestion();
}

function getCategoryStats(answers) {
  const values = {};
  answers.forEach(function (answer) {
    const category = answer.question.category;
    if (!values[category]) values[category] = { category: category, correct: 0, total: 0 };
    values[category].total += 1;
    if (answer.correct) values[category].correct += 1;
  });
  return Object.values(values).map(function (item) {
    item.rate = Math.round((item.correct / item.total) * 100);
    return item;
  }).sort(function (a, b) {
    return a.rate - b.rate || a.category.localeCompare(b.category, 'ja');
  });
}

function renderCategoryStats(items) {
  dom.categoryResults.replaceChildren();
  items.forEach(function (item) {
    const row = makeElement('div', 'category-row');
    const bar = makeElement('span', 'bar');
    const fill = document.createElement('span');
    fill.style.width = String(item.rate) + '%';
    bar.append(fill);
    row.append(makeElement('span', '', item.category), bar, makeElement('b', '', String(item.correct) + ' / ' + String(item.total)));
    dom.categoryResults.append(row);
  });
}

function showResult() {
  const result = session.score.getResult();
  const categories = getCategoryStats(session.answers);
  const recommendation = categories.find(function (item) { return item.rate < 80; }) || categories[0] || null;
  const previous = savedState.modeStats[session.mode] || { total: 0, correct: 0 };
  savedState.modeStats[session.mode] = { total: previous.total + result.total, correct: previous.correct + result.correct };
  savedState.lastPlayedAt = new Date().toISOString();
  saveState();

  dom.resultCorrect.textContent = result.correct;
  dom.resultCombo.textContent = session.combo.getMax();
  dom.resultAccuracy.textContent = String(result.accuracy) + '%';
  renderCategoryStats(categories);
  dom.recommendationText.textContent = recommendation
    ? '「' + recommendation.category + '」をもう少し！'
    : 'とてもいい調子。もう一度、確かめてみよう。';
  dom.retryWeakButton.onclick = function () {
    startGame(session.mode, { focusCategory: recommendation ? recommendation.category : null });
  };
  screenManager.show('result');
}

function attachEvents() {
  document.addEventListener(EDU_EVENTS.CORRECT, handleCorrect);
  document.addEventListener(EDU_EVENTS.WRONG, handleWrong);
  document.querySelectorAll('[data-start-mode]').forEach(function (button) {
    button.addEventListener('click', function () {
      startGame(button.dataset.startMode);
    });
  });
  document.querySelectorAll('[data-show-screen]').forEach(function (button) {
    button.addEventListener('click', function () {
      screenManager.show(button.dataset.showScreen);
    });
  });
  dom.nextButton.addEventListener('click', nextQuestion);
  document.addEventListener('keydown', function (event) {
    if (!session || screenManager.getCurrent() !== 'game' || session.locked) return;
    const key = event.key.toLowerCase();
    if (session.mode === 'select') {
      const keys = ['a', 'b', 'c', 'd'];
      if (keys.includes(key)) {
        const button = dom.answerArea.querySelectorAll('.choice-button')[keys.indexOf(key)];
        if (button) button.click();
      }
    }
    if (session.mode === 'judge' && (key === 'o' || key === 'x')) {
      const button = dom.answerArea.querySelector(key === 'o' ? '.judge-true' : '.judge-false');
      if (button) button.click();
    }
  });
}

renderReference();
attachEvents();
screenManager.show('home');

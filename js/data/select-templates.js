export const SELECT_TEMPLATES = [
  { id: 'select-arrival', label: '相手が来る場面', variants: [
    { id: 'select-arrival-teacher', category: '尊敬語', termId: 'go-come', scene: '授業が始まる前の教室', prompt: '先生が教室に（　）。', choices: ['いらっしゃる', '参る', '伺う', '申す'], answer: 'いらっしゃる', explanation: '先生の「来る」動作なので、尊敬語の「いらっしゃる」を使います。' },
    { id: 'select-arrival-principal', category: '尊敬語', termId: 'go-come', scene: '卒業式の会場', prompt: '校長先生が会場に（　）。', choices: ['いらっしゃる', '参る', '申す', 'いただく'], answer: 'いらっしゃる', explanation: '校長先生の動作を高めて言うので、「いらっしゃる」です。' }
  ]},
  { id: 'select-visit', label: '自分が行く場面', variants: [
    { id: 'select-visit-teacher', category: '謙譲語', termId: 'go-come', scene: '先生のお宅をたずねる予定', prompt: '私は明日、先生のお宅へ（　）。', choices: ['いらっしゃる', '伺う', 'おっしゃる', 'なさる'], answer: '伺う', explanation: '自分が先生のところへ行くので、謙譲語の「伺う」を使います。' },
    { id: 'select-visit-hall', category: '謙譲語', termId: 'go-come', scene: '発表会の準備', prompt: '私は先に会場へ（　）。', choices: ['参る', 'いらっしゃる', 'ご覧になる', '召し上がる'], answer: '参る', explanation: '自分が行くことをへりくだって言うときは、「参る」を使えます。' }
  ]},
  { id: 'select-see', label: '見る人を見分ける場面', variants: [
    { id: 'select-see-teacher', category: '尊敬語', termId: 'see', scene: '作品展を見に来た先生', prompt: '先生が児童の作品を（　）。', choices: ['拝見する', 'ご覧になる', 'いただく', '申す'], answer: 'ご覧になる', explanation: '先生が見るので、尊敬語の「ご覧になる」を使います。' },
    { id: 'select-see-self', category: '謙譲語', termId: 'see', scene: '先生の作品を読むとき', prompt: '私は先生の作品を（　）。', choices: ['ご覧になる', '拝見する', 'おっしゃる', '召し上がる'], answer: '拝見する', explanation: '自分が見るときは、謙譲語の「拝見する」です。' }
  ]},
  { id: 'select-say', label: '話す人を見分ける場面', variants: [
    { id: 'select-say-principal', category: '尊敬語', termId: 'say', scene: '全校朝会', prompt: '校長先生が全校児童に（　）。', choices: ['おっしゃる', '申し上げる', '拝見する', 'いたす'], answer: 'おっしゃる', explanation: '校長先生が言うので、尊敬語の「おっしゃる」です。' },
    { id: 'select-say-self', category: '謙譲語', termId: 'say', scene: '先生に自分の考えを伝えるとき', prompt: '私は先生に自分の考えを（　）。', choices: ['申し上げる', 'おっしゃる', 'ご覧になる', 'なさる'], answer: '申し上げる', explanation: '自分が先生に言うので、謙譲語の「申し上げる」を使います。' }
  ]},
  { id: 'select-pattern', label: '形や言葉で表す敬語', variants: [
    { id: 'select-pattern-wait', category: 'お〜になる', termId: 'do', scene: '受付でお客さまに案内する場面', prompt: 'お客さまはロビーで（　）。', choices: ['お待ちになる', 'お待ちする', '待たせていただく', '拝見する'], answer: 'お待ちになる', explanation: 'お客さまの動作なので、「お〜になる」の尊敬語を使います。' },
    { id: 'select-pattern-tea', category: '美化語', termId: 'beauty', scene: '来客に飲み物を出す場面', prompt: '来客に（　）をお出しする。', choices: ['お茶', 'ご茶', 'お召し上がり', 'ごいただき'], answer: 'お茶', explanation: '「お茶」は、ものごとを上品に言う美化語です。' }
  ]}
];
export const SELECT_QUESTIONS = SELECT_TEMPLATES.flatMap(function (template) {
  return template.variants.map(function (question) {
    return Object.assign({}, question, { type: 'choice', templateId: template.id, templateLabel: template.label });
  });
});

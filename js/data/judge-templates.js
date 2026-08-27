export const JUDGE_TEMPLATES = [
  { id: 'judge-say', label: '話す人はだれ？', variants: [
    { id: 'judge-say-principal-correct', category: '尊敬語', scene: '全校朝会', sentence: '校長先生がおっしゃいました。', answer: true, explanation: '校長先生が言うので、尊敬語の「おっしゃる」で正しいです。' },
    { id: 'judge-say-principal-wrong', category: '尊敬語', scene: '全校朝会', sentence: '校長先生が申しました。', answer: false, explanation: '「申す」は自分側に使う謙譲語です。校長先生なら「おっしゃいました」です。' }
  ]},
  { id: 'judge-see', label: '見る人はだれ？', variants: [
    { id: 'judge-see-self-correct', category: '謙譲語', scene: '先生の作品を読むとき', sentence: '私は先生の作品を拝見しました。', answer: true, explanation: '自分が見るときの「拝見する」は、謙譲語として正しい使い方です。' },
    { id: 'judge-see-self-wrong', category: '謙譲語', scene: '先生の作品を読むとき', sentence: '私は先生の作品をご覧になりました。', answer: false, explanation: '「ご覧になる」は相手を高める尊敬語です。自分には「拝見する」を使います。' }
  ]},
  { id: 'judge-teacher-see', label: '先生が見る場面', variants: [
    { id: 'judge-teacher-see-wrong', category: '尊敬語', scene: '読書の時間', sentence: '先生が本を拝見しました。', answer: false, explanation: '「拝見する」は自分側に使う謙譲語です。先生なら「ご覧になりました」です。' },
    { id: 'judge-teacher-see-correct', category: '尊敬語', scene: '読書の時間', sentence: '先生が本をご覧になりました。', answer: true, explanation: '先生が見る動作を高める「ご覧になる」で、正しい使い方です。' }
  ]},
  { id: 'judge-pattern', label: 'お〜になるの形', variants: [
    { id: 'judge-pattern-wait-correct', category: 'お〜になる', scene: '受付での案内', sentence: 'お客さまがロビーでお待ちになっています。', answer: true, explanation: 'お客さまの動作なので、「お待ちになる」という尊敬語で正しいです。' },
    { id: 'judge-pattern-wait-wrong', category: 'お〜になる', scene: '受付での案内', sentence: 'お客さまがロビーでお待ちしています。', answer: false, explanation: '「お〜する」は自分側に使う形です。お客さまなら「お待ちになっています」です。' }
  ]},
  { id: 'judge-give', label: '渡す人はだれ？', variants: [
    { id: 'judge-give-self-correct', category: '謙譲語', scene: '先生に手紙を渡すとき', sentence: '先生にお手紙を差し上げました。', answer: true, explanation: '自分が先生に渡すので、謙譲語の「差し上げる」で正しいです。' },
    { id: 'judge-give-self-wrong', category: '謙譲語', scene: '先生に手紙を渡すとき', sentence: '先生にお手紙をいただきました。', answer: false, explanation: '「いただく」は、もらうときの謙譲語です。渡すなら「差し上げました」です。' }
  ]}
];
export const JUDGE_QUESTIONS = JUDGE_TEMPLATES.flatMap(function (template) {
  return template.variants.map(function (question) {
    return Object.assign({}, question, { type: 'true-false', templateId: template.id, templateLabel: template.label });
  });
});

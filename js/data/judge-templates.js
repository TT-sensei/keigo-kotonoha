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
  ]},
  { id: 'judge-come', label: '来る人はだれ？', variants: [
    { id: 'judge-come-guest-correct', category: '尊敬語', scene: '来客の対応', sentence: 'お客様が学校にいらっしゃいました。', answer: true, explanation: 'お客様が来るので、尊敬語の「いらっしゃる」で正しいです。' },
    { id: 'judge-come-guest-wrong', category: '尊敬語', scene: '来客の対応', sentence: 'お客様が学校に参りました。', answer: false, explanation: '「参る」は自分側に使う謙譲語です。お客様なら「いらっしゃいました」です。' }
  ]},
  { id: 'judge-go', label: '行く人はだれ？', variants: [
    { id: 'judge-go-self-correct', category: '謙譲語', scene: '先生の家をたずねる', sentence: '私は先生のお宅に参りました。', answer: true, explanation: '自分が行くので、謙譲語の「参る」で正しいです。' },
    { id: 'judge-go-self-wrong', category: '謙譲語', scene: '先生の家をたずねる', sentence: '私は先生のお宅にいらっしゃいました。', answer: false, explanation: '「いらっしゃる」は相手を高める尊敬語です。自分には「参りました」を使います。' }
  ]},
  { id: 'judge-eat-guest', label: '食べる人はだれ？(お客様)', variants: [
    { id: 'judge-eat-guest-correct', category: '尊敬語', scene: '会食の場面', sentence: 'お客様がケーキを召し上がりました。', answer: true, explanation: 'お客様が食べるので、尊敬語の「召し上がる」で正しいです。' },
    { id: 'judge-eat-guest-wrong', category: '尊敬語', scene: '会食の場面', sentence: 'お客様がケーキをいただきました。', answer: false, explanation: '「いただく」は自分側に使う謙譲語です。お客様なら「召し上がりました」です。' }
  ]},
  { id: 'judge-eat-self', label: '食べる人はだれ？(自分)', variants: [
    { id: 'judge-eat-self-correct', category: '謙譲語', scene: '先生にもらったお菓子', sentence: '私はいただいたお菓子をいただきました。', answer: true, explanation: '自分が食べるので、謙譲語の「いただく」で正しいです。' },
    { id: 'judge-eat-self-wrong', category: '謙譲語', scene: '先生にもらったお菓子', sentence: '私はいただいたお菓子を召し上がりました。', answer: false, explanation: '「召し上がる」は相手を高める尊敬語です。自分には「いただきました」を使います。' }
  ]},
  { id: 'judge-do-teacher', label: 'する人はだれ？(先生)', variants: [
    { id: 'judge-do-teacher-correct', category: '尊敬語', scene: '朝の準備', sentence: '先生が朝の準備をなさいました。', answer: true, explanation: '先生がするので、尊敬語の「なさる」で正しいです。' },
    { id: 'judge-do-teacher-wrong', category: '尊敬語', scene: '朝の準備', sentence: '先生が朝の準備をいたしました。', answer: false, explanation: '「いたす」は自分側に使う謙譲語です。先生なら「なさいました」です。' }
  ]},
  { id: 'judge-do-self', label: 'する人はだれ？(自分)', variants: [
    { id: 'judge-do-self-correct', category: '謙譲語', scene: '教室の掃除', sentence: '私が教室の掃除をいたしました。', answer: true, explanation: '自分がするので、謙譲語の「いたす」で正しいです。' },
    { id: 'judge-do-self-wrong', category: '謙譲語', scene: '教室の掃除', sentence: '私が教室の掃除をなさいました。', answer: false, explanation: '「なさる」は相手を高める尊敬語です。自分には「いたしました」を使います。' }
  ]},
  { id: 'judge-hear-self', label: '聞く人はだれ？(自分)', variants: [
    { id: 'judge-hear-self-correct', category: '謙譲語', scene: '校長先生に話を聞く', sentence: '私は校長先生にお話を伺いました。', answer: true, explanation: '自分が聞くので、謙譲語の「伺う」で正しいです。' },
    { id: 'judge-hear-self-wrong', category: '謙譲語', scene: '校長先生に話を聞く', sentence: '私は校長先生にお話をお聞きになりました。', answer: false, explanation: '「お聞きになる」は相手を高める尊敬語です。自分には「伺いました」を使います。' }
  ]},
  { id: 'judge-meet-self', label: '会う人はだれ？(自分)', variants: [
    { id: 'judge-meet-self-correct', category: '謙譲語', scene: '先生にあいさつに行く', sentence: '私は先生にお目にかかりました。', answer: true, explanation: '自分が会うので、謙譲語の「お目にかかる」で正しいです。' },
    { id: 'judge-meet-self-wrong', category: '謙譲語', scene: '先生にあいさつに行く', sentence: '私は先生にお会いになりました。', answer: false, explanation: '「お会いになる」は相手を高める尊敬語です。自分には「お目にかかりました」を使います。' }
  ]},
  { id: 'judge-know-self', label: '知る人はだれ？(自分)', variants: [
    { id: 'judge-know-self-correct', category: '謙譲語', scene: '委員会での報告', sentence: '私はそのことを存じております。', answer: true, explanation: '自分が知っているので、謙譲語の「存じる」で正しいです。' },
    { id: 'judge-know-self-wrong', category: '謙譲語', scene: '委員会での報告', sentence: '私はそのことをご存じです。', answer: false, explanation: '「ご存じ」は相手を高める尊敬語です。自分には「存じております」を使います。' }
  ]},
  { id: 'judge-know-other', label: '知る人はだれ？(先生)', variants: [
    { id: 'judge-know-other-correct', category: '尊敬語', scene: '先生にたずねる', sentence: '先生はそのことをご存じですか。', answer: true, explanation: '先生が知っているかを聞くので、尊敬語の「ご存じ」で正しいです。' },
    { id: 'judge-know-other-wrong', category: '尊敬語', scene: '先生にたずねる', sentence: '先生はそのことを存じておりますか。', answer: false, explanation: '「存じる」は自分側に使う謙譲語です。先生なら「ご存じですか」です。' }
  ]},
  { id: 'judge-return', label: '帰る人はだれ？(先生)', variants: [
    { id: 'judge-return-correct', category: '尊敬語', scene: '放課後の職員室', sentence: '先生はもうお帰りになりました。', answer: true, explanation: '先生が帰るので、尊敬語の「お帰りになる」で正しいです。' },
    { id: 'judge-return-wrong', category: '尊敬語', scene: '放課後の職員室', sentence: '先生はもうまいりました。', answer: false, explanation: '「参る」は自分側に使う謙譲語です。先生なら「お帰りになりました」です。' }
  ]},
  { id: 'judge-give-other', label: 'くれる人はだれ？(校長先生)', variants: [
    { id: 'judge-give-other-correct', category: '尊敬語', scene: '本をもらう場面', sentence: '校長先生が本をくださいました。', answer: true, explanation: '校長先生がくれるので、尊敬語の「くださる」で正しいです。' },
    { id: 'judge-give-other-wrong', category: '尊敬語', scene: '本をもらう場面', sentence: '校長先生が本をいただきました。', answer: false, explanation: '「いただく」は自分がもらうときの謙譲語です。校長先生が主語なら「くださいました」です。' }
  ]},
  { id: 'judge-receive-self', label: 'もらう人はだれ？(自分)', variants: [
    { id: 'judge-receive-self-correct', category: '謙譲語', scene: '先生から本をもらう', sentence: '私は先生から本をいただきました。', answer: true, explanation: '自分がもらうので、謙譲語の「いただく」で正しいです。' },
    { id: 'judge-receive-self-wrong', category: '謙譲語', scene: '先生から本をもらう', sentence: '私は先生から本をくださいました。', answer: false, explanation: '「くださる」は相手を高める尊敬語です。自分がもらうときは「いただきました」を使います。' }
  ]},
  { id: 'judge-read-guest', label: '読む人はだれ？(先生)', variants: [
    { id: 'judge-read-guest-correct', category: '尊敬語', scene: '職員室での様子', sentence: '先生が新聞をお読みになりました。', answer: true, explanation: '先生が読むので、尊敬語の「お読みになる」で正しいです。' },
    { id: 'judge-read-guest-wrong', category: '尊敬語', scene: '職員室での様子', sentence: '先生が新聞をお読みしました。', answer: false, explanation: '「お〜する」は自分側に使う謙譲の形です。先生なら「お読みになりました」です。' }
  ]},
  { id: 'judge-write-self', label: '書く人はだれ？(自分)', variants: [
    { id: 'judge-write-self-correct', category: '謙譲語', scene: '案内状の作成', sentence: '私が案内状をお書きしました。', answer: true, explanation: '自分が書くので、謙譲語の「お書きする」で正しいです。' },
    { id: 'judge-write-self-wrong', category: '謙譲語', scene: '案内状の作成', sentence: '私が案内状をお書きになりました。', answer: false, explanation: '「お書きになる」は相手を高める尊敬語です。自分には「お書きしました」を使います。' }
  ]},
  { id: 'judge-use-guest', label: '使う人はだれ？(お客様)', variants: [
    { id: 'judge-use-guest-correct', category: '尊敬語', scene: '道具の貸し出し', sentence: 'お客様がその道具をお使いになりました。', answer: true, explanation: 'お客様が使うので、尊敬語の「お使いになる」で正しいです。' },
    { id: 'judge-use-guest-wrong', category: '尊敬語', scene: '道具の貸し出し', sentence: 'お客様がその道具をお使いしました。', answer: false, explanation: '「お〜する」は自分側に使う謙譲の形です。お客様なら「お使いになりました」です。' }
  ]},
  { id: 'judge-ask-self', label: 'たずねる人はだれ？(自分)', variants: [
    { id: 'judge-ask-self-correct', category: '謙譲語', scene: '職員室へ電話をかける', sentence: '私は職員室に電話して、先生に集合時刻を伺いました。', answer: true, explanation: '先生にたずねる自分の動作なので、謙譲語の「伺う」で正しいです。' },
    { id: 'judge-ask-self-wrong', category: '謙譲語', scene: '職員室へ電話をかける', sentence: '私は職員室に電話して、先生に集合時刻をお尋ねになりました。', answer: false, explanation: '「お尋ねになる」は相手を高める尊敬語です。自分には「伺いました」を使います。' }
  ]},
  { id: 'judge-show-self', label: '見せる人はだれ？(自分)', variants: [
    { id: 'judge-show-self-correct', category: '謙譲語', scene: '作品を見せる場面', sentence: '私が作品をご覧に入れました。', answer: true, explanation: '自分が見せるので、謙譲語の「ご覧に入れる」で正しいです。' },
    { id: 'judge-show-self-wrong', category: '謙譲語', scene: '作品を見せる場面', sentence: '私が作品をご覧になりました。', answer: false, explanation: '「ご覧になる」は相手を高める尊敬語です。自分が見せるときは「ご覧に入れました」を使います。' }
  ]},
  { id: 'judge-wear-guest', label: '着る人はだれ？(来賓)', variants: [
    { id: 'judge-wear-guest-correct', category: '尊敬語', scene: '式典の来賓', sentence: '来賓の方がすてきな服をお召しになっていました。', answer: true, explanation: '来賓の方が着るので、尊敬語の「お召しになる」で正しいです。' },
    { id: 'judge-wear-guest-wrong', category: '尊敬語', scene: '式典の来賓', sentence: '来賓の方がすてきな服を着ておりました。', answer: false, explanation: '「おる」は自分側に使う謙譲語です。来賓の方なら「お召しになっていました」です。' }
  ]},
  { id: 'judge-rest-teacher', label: '休む人はだれ？(先生)', variants: [
    { id: 'judge-rest-teacher-correct', category: '尊敬語', scene: '保健室での休養', sentence: '先生が保健室でお休みになりました。', answer: true, explanation: '先生が休むので、尊敬語の「お休みになる」で正しいです。' },
    { id: 'judge-rest-teacher-wrong', category: '尊敬語', scene: '保健室での休養', sentence: '先生が保健室で休ませていただきました。', answer: false, explanation: '「〜させていただく」は自分がへりくだる謙譲の言い方です。先生なら「お休みになりました」です。' }
  ]},
  { id: 'judge-tell-self', label: '伝える人はだれ？(自分)', variants: [
    { id: 'judge-tell-self-correct', category: '謙譲語', scene: '先生に用件を伝える', sentence: '私は先生にご用件を申し上げました。', answer: true, explanation: '自分が伝えるので、謙譲語の「申し上げる」で正しいです。' },
    { id: 'judge-tell-self-wrong', category: '謙譲語', scene: '先生に用件を伝える', sentence: '私は先生にご用件をおっしゃいました。', answer: false, explanation: '「おっしゃる」は相手を高める尊敬語です。自分には「申し上げました」を使います。' }
  ]},
  { id: 'judge-visit-self', label: '訪ねる人はだれ？(自分)', variants: [
    { id: 'judge-visit-self-correct', category: '謙譲語', scene: '校長室をたずねる', sentence: '私は校長室に伺いました。', answer: true, explanation: '自分が訪ねるので、謙譲語の「伺う」で正しいです。' },
    { id: 'judge-visit-self-wrong', category: '謙譲語', scene: '校長室をたずねる', sentence: '私は校長室にいらっしゃいました。', answer: false, explanation: '「いらっしゃる」は相手を高める尊敬語です。自分には「伺いました」を使います。' }
  ]},
  { id: 'judge-see-guest2', label: '見る人はだれ？(保護者)', variants: [
    { id: 'judge-see-guest2-correct', category: '尊敬語', scene: '掲示物の前で', sentence: '保護者の方が掲示物をご覧になりました。', answer: true, explanation: '保護者の方が見るので、尊敬語の「ご覧になる」で正しいです。' },
    { id: 'judge-see-guest2-wrong', category: '尊敬語', scene: '掲示物の前で', sentence: '保護者の方が掲示物を拝見しました。', answer: false, explanation: '「拝見する」は自分側に使う謙譲語です。保護者の方なら「ご覧になりました」です。' }
  ]},
  { id: 'judge-listen-guest', label: '聞く人はだれ？(来賓)', variants: [
    { id: 'judge-listen-guest-correct', category: '尊敬語', scene: '校歌の披露', sentence: '来賓の方が校歌をお聞きになりました。', answer: true, explanation: '来賓の方が聞くので、尊敬語の「お聞きになる」で正しいです。' },
    { id: 'judge-listen-guest-wrong', category: '尊敬語', scene: '校歌の披露', sentence: '来賓の方が校歌を伺いました。', answer: false, explanation: '「伺う」は自分側に使う謙譲語です。来賓の方なら「お聞きになりました」です。' }
  ]},
  { id: 'judge-borrow-self', label: '借りる人はだれ？(自分)', variants: [
    { id: 'judge-borrow-self-correct', category: '謙譲語', scene: '雨の日の傘', sentence: '私は先生の傘を拝借しました。', answer: true, explanation: '自分が借りるので、謙譲語の「拝借する」で正しいです。' },
    { id: 'judge-borrow-self-wrong', category: '謙譲語', scene: '雨の日の傘', sentence: '私は先生の傘をお貸しになりました。', answer: false, explanation: '「お貸しになる」は相手を高める尊敬語です。自分が借りるときは「拝借しました」を使います。' }
  ]},
  { id: 'judge-polite', label: '聞き手にていねいに伝える場面', variants: [
    { id: 'judge-polite-library-correct', category: '丁寧語', scene: '先生に予定を伝える場面', sentence: '私は明日、図書室へ行きます。', answer: true, explanation: '「行きます」は聞き手にていねいに伝える丁寧語です。' },
    { id: 'judge-polite-library-wrong', category: '丁寧語', scene: '先生に予定を伝える場面', sentence: '私は明日、図書室へ行く。', answer: false, explanation: '先生に伝える場面では、丁寧語の「行きます」と言うと、聞き手にていねいです。' }
  ]},
  { id: 'judge-o-suru', label: '自分がていねいに動く場面', variants: [
    { id: 'judge-o-suru-hand-correct', category: 'お〜する', scene: '先生へ資料を渡す場面', sentence: '私が資料をお渡しします。', answer: true, explanation: '自分が渡すので、「お〜する」の形で正しくへりくだっています。' },
    { id: 'judge-o-suru-hand-wrong', category: 'お〜する', scene: '先生へ資料を渡す場面', sentence: '私が資料をお渡しになります。', answer: false, explanation: '自分の動作には「お渡しします」のように「お〜する」を使います。' }
  ]},
  { id: 'judge-prefix-suffix', label: 'お・ご・様を使う場面', variants: [
    { id: 'judge-prefix-suffix-name-correct', category: '接頭語・接尾語', scene: '先生の名前をたずねる場面', sentence: '先生のお名前を教えてください。', answer: true, explanation: '「お名前」の「お」は、ことばをていねいにする接頭語です。' },
    { id: 'judge-prefix-suffix-name-wrong', category: '接頭語・接尾語', scene: '先生の名前をたずねる場面', sentence: '先生のご名前を教えてください。', answer: false, explanation: '「名前」には「ご」ではなく、接頭語の「お」をつけて「お名前」と言います。' }
  ]}
];
const JUDGE_EXCLUDED_TEMPLATES = new Set(["judge-wear-guest","judge-visit-self","judge-see-guest2","judge-borrow-self","judge-listen-guest","judge-return","judge-tell-self","judge-meet-self"]);
export const JUDGE_QUESTION_BANK = JUDGE_TEMPLATES.flatMap(function (template) {
  return template.variants.map(function (question) {
    return Object.assign({}, question, { type: 'true-false', templateId: template.id, templateLabel: template.label });
  });
});

// 50問を基本セットとして出題。QUESTION_BANKには追加候補も残してあります。
export const JUDGE_QUESTIONS = JUDGE_QUESTION_BANK.filter(function (question) {
  return !JUDGE_EXCLUDED_TEMPLATES.has(question.templateId);
});

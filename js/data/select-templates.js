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
  ]},
  { id: 'select-eat-guest', label: '食べる人はだれ？(お客様)', variants: [
    { id: 'select-eat-guest-birthday', category: '尊敬語', termId: 'eat', scene: '誕生日会の場面', prompt: '校長先生がケーキを（　）。', choices: ['召し上がる', 'いただく', 'なさる', 'おっしゃる'], answer: '召し上がる', explanation: '校長先生が食べるので、尊敬語の「召し上がる」を使います。' },
    { id: 'select-eat-guest-meal', category: '尊敬語', termId: 'eat', scene: '来賓との会食', prompt: '来賓の方がお料理を（　）。', choices: ['召し上がる', 'いただく', 'いたす', '拝見する'], answer: '召し上がる', explanation: '来賓の方が食べるので、尊敬語の「召し上がる」を使います。' }
  ]},
  { id: 'select-eat-self', label: '食べる人はだれ？(自分)', variants: [
    { id: 'select-eat-self-sweet', category: '謙譲語', termId: 'eat', scene: '先生にいただいたお菓子', prompt: '私はいただいたお菓子を（　）。', choices: ['いただく', '召し上がる', 'なさる', '申す'], answer: 'いただく', explanation: '自分が食べるので、謙譲語の「いただく」を使います。' },
    { id: 'select-eat-self-lunch', category: '謙譲語', termId: 'eat', scene: '給食の時間', prompt: '私は先に一口（　）。', choices: ['いただく', '召し上がる', 'なさる', 'いらっしゃる'], answer: 'いただく', explanation: '自分が食べるときは、謙譲語の「いただく」を使います。' }
  ]},
  { id: 'select-do-teacher', label: 'する人はだれ？(先生)', variants: [
    { id: 'select-do-teacher-board', category: '尊敬語', termId: 'do', scene: '授業の準備', prompt: '先生が黒板の準備を（　）。', choices: ['なさる', 'いたす', '拝見する', '申す'], answer: 'なさる', explanation: '先生がするので、尊敬語の「なさる」を使います。' },
    { id: 'select-do-teacher-speech', category: '尊敬語', termId: 'do', scene: '児童会でのあいさつ', prompt: '校長先生があいさつを（　）。', choices: ['なさる', 'いたす', '拝見する', 'いただく'], answer: 'なさる', explanation: '校長先生がするので、尊敬語の「なさる」を使います。' }
  ]},
  { id: 'select-do-self', label: 'する人はだれ？(自分)', variants: [
    { id: 'select-do-self-clean', category: '謙譲語', termId: 'do', scene: '掃除当番', prompt: '私が教室の掃除を（　）。', choices: ['いたす', 'なさる', 'おっしゃる', 'ご覧になる'], answer: 'いたす', explanation: '自分がするので、謙譲語の「いたす」を使います。' },
    { id: 'select-do-self-board', category: '謙譲語', termId: 'do', scene: '係の仕事', prompt: '私が黒板消しを（　）。', choices: ['いたす', 'なさる', 'おっしゃる', '召し上がる'], answer: 'いたす', explanation: '自分がするときは、謙譲語の「いたす」を使います。' }
  ]},
  { id: 'select-hear-self', label: '聞く人はだれ？(自分)', variants: [
    { id: 'select-hear-self-principal', category: '謙譲語', termId: 'hear', scene: '校長先生に質問する場面', prompt: '私は校長先生にお話を（　）。', choices: ['伺う', 'お聞きになる', 'おっしゃる', '申す'], answer: '伺う', explanation: '自分が聞くので、謙譲語の「伺う」を使います。' },
    { id: 'select-hear-self-library', category: '謙譲語', termId: 'hear', scene: '図書室で司書の先生に聞く', prompt: '私は本の場所を（　）。', choices: ['伺う', 'お聞きになる', 'いらっしゃる', 'なさる'], answer: '伺う', explanation: '自分が聞くときは、謙譲語の「伺う」を使います。' }
  ]},
  { id: 'select-listen-guest', label: '聞く人はだれ？(来賓)', variants: [
    { id: 'select-listen-guest-concert', category: '尊敬語', termId: 'hear', scene: '音楽会の会場', prompt: '来賓の方が合唱を（　）。', choices: ['お聞きになる', '伺う', 'いたす', '申す'], answer: 'お聞きになる', explanation: '来賓の方が聞くので、尊敬語の「お聞きになる」を使います。' },
    { id: 'select-listen-guest-class', category: '尊敬語', termId: 'hear', scene: '授業参観', prompt: '保護者の方が発表を（　）。', choices: ['お聞きになる', '伺う', 'いただく', 'なさる'], answer: 'お聞きになる', explanation: '保護者の方が聞くので、尊敬語の「お聞きになる」を使います。' }
  ]},
  { id: 'select-meet-self', label: '会う人はだれ？(自分)', variants: [
    { id: 'select-meet-self-office', category: '謙譲語', termId: 'meet', scene: '校長室であいさつする場面', prompt: '私は校長先生に（　）。', choices: ['お目にかかる', 'お会いになる', 'いらっしゃる', '参る'], answer: 'お目にかかる', explanation: '自分が会うので、謙譲語の「お目にかかる」を使います。' },
    { id: 'select-meet-self-alumni', category: '謙譲語', termId: 'meet', scene: '昔の担任の先生を訪ねる', prompt: '私は昔の担任の先生に（　）。', choices: ['お目にかかる', 'お会いになる', 'なさる', 'おっしゃる'], answer: 'お目にかかる', explanation: '自分が会うときは、謙譲語の「お目にかかる」を使います。' }
  ]},
  { id: 'select-know-self', label: '知る人はだれ？(自分)', variants: [
    { id: 'select-know-self-report', category: '謙譲語', termId: 'know', scene: '委員会での報告', prompt: '私はそのことを（　）おります。', choices: ['存じて', 'ご存じで', 'おっしゃって', 'なさって'], answer: '存じて', explanation: '自分が知っているので、謙譲語の「存じる」を使います。' },
    { id: 'select-know-self-answer', category: '謙譲語', termId: 'know', scene: '質問への返答', prompt: '私はくわしい内容を（　）おりません。', choices: ['存じて', 'ご存じで', '拝見して', 'いたして'], answer: '存じて', explanation: '自分が知らないと言うときも、謙譲語の「存じる」を使います。' }
  ]},
  { id: 'select-know-other', label: '知る人はだれ？(先生)', variants: [
    { id: 'select-know-other-teacher', category: '尊敬語', termId: 'know', scene: '先生への質問', prompt: '先生はそのことを（　）ですか。', choices: ['ご存じ', '存じ', 'おっしゃる', 'なさる'], answer: 'ご存じ', explanation: '先生が知っているかを聞くので、尊敬語の「ご存じ」を使います。' },
    { id: 'select-know-other-parent', category: '尊敬語', termId: 'know', scene: '保護者との会話', prompt: 'お母様はこの行事を（　）ですか。', choices: ['ご存じ', '存じ', 'いただき', '拝見'], answer: 'ご存じ', explanation: '相手が知っているかを聞くときは、尊敬語の「ご存じ」を使います。' }
  ]},
  { id: 'select-return', label: '帰る人はだれ？(先生)', variants: [
    { id: 'select-return-office', category: '尊敬語', termId: 'go-come', scene: '放課後の職員室', prompt: '先生はもう（　）。', choices: ['お帰りになった', '参った', 'いたした', '申した'], answer: 'お帰りになった', explanation: '先生が帰るので、尊敬語の「お帰りになる」を使います。' },
    { id: 'select-return-trip', category: '尊敬語', termId: 'go-come', scene: '出張からの帰り', prompt: '校長先生は明日（　）予定です。', choices: ['お帰りになる', '参る', 'いたす', '申す'], answer: 'お帰りになる', explanation: '校長先生が帰るので、尊敬語の「お帰りになる」を使います。' }
  ]},
  { id: 'select-give-other', label: 'くれる人はだれ？(校長先生)', variants: [
    { id: 'select-give-other-award', category: '尊敬語', termId: 'give-receive', scene: '表彰式の場面', prompt: '校長先生が賞状を（　）。', choices: ['くださった', 'いただいた', '差し上げた', '拝見した'], answer: 'くださった', explanation: '校長先生がくれるので、尊敬語の「くださる」を使います。' },
    { id: 'select-give-other-gift', category: '尊敬語', termId: 'give-receive', scene: '記念品を渡される場面', prompt: '来賓の方が記念品を（　）。', choices: ['くださった', 'いただいた', 'なさった', 'おっしゃった'], answer: 'くださった', explanation: '来賓の方がくれるので、尊敬語の「くださる」を使います。' }
  ]},
  { id: 'select-receive-self', label: 'もらう人はだれ？(自分)', variants: [
    { id: 'select-receive-self-book', category: '謙譲語', termId: 'give-receive', scene: '先生から本を借りる場面', prompt: '私は先生から本を（　）。', choices: ['いただいた', 'くださった', '差し上げた', '拝見した'], answer: 'いただいた', explanation: '自分がもらうので、謙譲語の「いただく」を使います。' },
    { id: 'select-receive-self-souvenir', category: '謙譲語', termId: 'give-receive', scene: 'お客様から記念品をもらう場面', prompt: '私はお客様から記念品を（　）。', choices: ['いただいた', 'くださった', 'なさった', '申した'], answer: 'いただいた', explanation: '自分がもらうときは、謙譲語の「いただく」を使います。' }
  ]},
  { id: 'select-read-guest', label: '読む人はだれ？(先生)', variants: [
    { id: 'select-read-guest-paper', category: '尊敬語', termId: 'read', scene: '職員室の様子', prompt: '先生が新聞を（　）。', choices: ['お読みになる', 'お読みする', '拝見する', 'いたす'], answer: 'お読みになる', explanation: '先生が読むので、尊敬語の「お読みになる」を使います。' },
    { id: 'select-read-guest-newsletter', category: '尊敬語', termId: 'read', scene: '学級だよりを読む場面', prompt: '校長先生が学級だよりを（　）。', choices: ['お読みになる', 'お読みする', 'いただく', '申す'], answer: 'お読みになる', explanation: '校長先生が読むので、尊敬語の「お読みになる」を使います。' }
  ]},
  { id: 'select-write-self', label: '書く人はだれ？(自分)', variants: [
    { id: 'select-write-self-letter', category: '謙譲語', termId: 'write', scene: '案内状の作成', prompt: '私が案内状を（　）。', choices: ['お書きする', 'お書きになる', 'なさる', 'おっしゃる'], answer: 'お書きする', explanation: '自分が書くので、謙譲語の「お書きする」を使います。' },
    { id: 'select-write-self-thankyou', category: '謙譲語', termId: 'write', scene: 'お礼状を書く場面', prompt: '私は先生にお礼状を（　）。', choices: ['お書きする', 'お書きになる', 'ご覧になる', '召し上がる'], answer: 'お書きする', explanation: '自分が書くときは、謙譲語の「お書きする」を使います。' }
  ]},
  { id: 'select-use-guest', label: '使う人はだれ？(お客様)', variants: [
    { id: 'select-use-guest-tool', category: '尊敬語', termId: 'use', scene: '道具の貸し出し場面', prompt: 'お客様がその道具を（　）。', choices: ['お使いになる', 'お使いする', 'いたす', '拝借する'], answer: 'お使いになる', explanation: 'お客様が使うので、尊敬語の「お使いになる」を使います。' },
    { id: 'select-use-guest-mic', category: '尊敬語', termId: 'use', scene: '会議室でのマイク使用', prompt: '来賓の方がマイクを（　）。', choices: ['お使いになる', 'お使いする', 'いたす', '申す'], answer: 'お使いになる', explanation: '来賓の方が使うので、尊敬語の「お使いになる」を使います。' }
  ]},
  { id: 'select-ask-self', label: 'たずねる人はだれ？(自分)', variants: [
    { id: 'select-ask-self-station', category: '謙譲語', termId: 'ask', scene: '駅までの道をたずねる場面', prompt: '私は駅までの道を（　）。', choices: ['伺う', 'お尋ねになる', 'おっしゃる', 'なさる'], answer: '伺う', explanation: '自分がたずねるので、謙譲語の「伺う」を使います。' },
    { id: 'select-ask-self-question', category: '謙譲語', termId: 'ask', scene: '分からないところを聞く場面', prompt: '私は先生に分からないところを（　）。', choices: ['伺う', 'お尋ねになる', 'いらっしゃる', '召し上がる'], answer: '伺う', explanation: '自分がたずねるときは、謙譲語の「伺う」を使います。' }
  ]},
  { id: 'select-show-self', label: '見せる人はだれ？(自分)', variants: [
    { id: 'select-show-self-work', category: '謙譲語', termId: 'show', scene: '作品発表の場面', prompt: '私が作品を（　）。', choices: ['ご覧に入れる', 'ご覧になる', '拝見する', 'いたす'], answer: 'ご覧に入れる', explanation: '自分が見せるので、謙譲語の「ご覧に入れる」を使います。' },
    { id: 'select-show-self-experiment', category: '謙譲語', termId: 'show', scene: '研究発表会', prompt: '私が実験の様子を（　）。', choices: ['ご覧に入れる', 'ご覧になる', 'なさる', 'おっしゃる'], answer: 'ご覧に入れる', explanation: '自分が見せるときは、謙譲語の「ご覧に入れる」を使います。' }
  ]},
  { id: 'select-wear-guest', label: '着る人はだれ？(来賓)', variants: [
    { id: 'select-wear-guest-ceremony', category: '尊敬語', termId: 'wear', scene: '式典の場面', prompt: '来賓の方がすてきな服を（　）。', choices: ['お召しになる', '着ておる', 'いたす', '拝見する'], answer: 'お召しになる', explanation: '来賓の方が着るので、尊敬語の「お召しになる」を使います。' },
    { id: 'select-wear-guest-graduation', category: '尊敬語', termId: 'wear', scene: '卒業式の場面', prompt: '校長先生が礼服を（　）。', choices: ['お召しになる', '着ておる', 'いただく', '申す'], answer: 'お召しになる', explanation: '校長先生が着るので、尊敬語の「お召しになる」を使います。' }
  ]},
  { id: 'select-rest-teacher', label: '休む人はだれ？(先生)', variants: [
    { id: 'select-rest-teacher-nurse', category: '尊敬語', termId: 'rest', scene: '保健室で休む場面', prompt: '先生が少し（　）。', choices: ['お休みになる', '休ませていただく', 'いたす', '参る'], answer: 'お休みになる', explanation: '先生が休むので、尊敬語の「お休みになる」を使います。' },
    { id: 'select-rest-teacher-sick', category: '尊敬語', termId: 'rest', scene: '体調不良の連絡', prompt: '校長先生は今日一日（　）そうです。', choices: ['お休みになる', '休ませていただく', 'なさる', 'おっしゃる'], answer: 'お休みになる', explanation: '校長先生が休むので、尊敬語の「お休みになる」を使います。' }
  ]},
  { id: 'select-tell-self', label: '伝える人はだれ？(自分)', variants: [
    { id: 'select-tell-self-teacher', category: '謙譲語', termId: 'say', scene: '先生への報告', prompt: '私は先生にご用件を（　）。', choices: ['申し上げる', 'おっしゃる', 'ご覧になる', 'なさる'], answer: '申し上げる', explanation: '自分が伝えるので、謙譲語の「申し上げる」を使います。' },
    { id: 'select-tell-self-parent', category: '謙譲語', termId: 'say', scene: '保護者面談での場面', prompt: '私は保護者の方に感想を（　）。', choices: ['申し上げる', 'おっしゃる', 'くださる', '拝見する'], answer: '申し上げる', explanation: '自分が伝えるときは、謙譲語の「申し上げる」を使います。' }
  ]},
  { id: 'select-visit-office', label: '自分が校長室をたずねる場面', variants: [
    { id: 'select-visit-office-report', category: '謙譲語', termId: 'go-come', scene: '委員会の報告に行く場面', prompt: '私は校長室に（　）。', choices: ['伺う', 'いらっしゃる', 'なさる', 'おっしゃる'], answer: '伺う', explanation: '自分が校長室をたずねるので、謙譲語の「伺う」を使います。' },
    { id: 'select-visit-office-trip', category: '謙譲語', termId: 'go-come', scene: '出張先の先生をたずねる場面', prompt: '私は先生の出張先に（　）予定です。', choices: ['伺う', 'いらっしゃる', '召し上がる', 'ご覧になる'], answer: '伺う', explanation: '自分がたずねる予定なので、謙譲語の「伺う」を使います。' }
  ]},
  { id: 'select-see-guest2', label: '見る人はだれ？(保護者)', variants: [
    { id: 'select-see-guest2-board', category: '尊敬語', termId: 'see', scene: '掲示物の前での場面', prompt: '保護者の方が掲示物を（　）。', choices: ['ご覧になる', '拝見する', 'いたす', '申す'], answer: 'ご覧になる', explanation: '保護者の方が見るので、尊敬語の「ご覧になる」を使います。' },
    { id: 'select-see-guest2-sports', category: '尊敬語', termId: 'see', scene: '運動会の応援席', prompt: '保護者の方が児童のようすを（　）。', choices: ['ご覧になる', '拝見する', 'いただく', 'なさる'], answer: 'ご覧になる', explanation: '保護者の方が見るときは、尊敬語の「ご覧になる」を使います。' }
  ]},
  { id: 'select-borrow-self', label: '借りる人はだれ？(自分)', variants: [
    { id: 'select-borrow-self-umbrella', category: '謙譲語', termId: 'borrow', scene: '雨の日の傘', prompt: '私は先生の傘を（　）。', choices: ['拝借する', 'お貸しになる', 'いただく', '差し上げる'], answer: '拝借する', explanation: '自分が借りるので、謙譲語の「拝借する」を使います。' },
    { id: 'select-borrow-self-tool', category: '謙譲語', termId: 'borrow', scene: '教材の準備', prompt: '私は隣のクラスの道具を（　）。', choices: ['拝借する', 'お貸しになる', 'くださる', '召し上がる'], answer: '拝借する', explanation: '自分が借りるときは、謙譲語の「拝借する」を使います。' }
  ]},
  { id: 'select-beauty2', label: '美化語で言う場面', variants: [
    { id: 'select-beauty2-rice', category: '美化語', termId: 'beauty', scene: '朝ごはんの場面', prompt: '毎朝（　）を食べてから登校する。', choices: ['ご飯', '飯', '米飯', 'ごはん飯'], answer: 'ご飯', explanation: '「ご飯」は、ものごとを上品に言う美化語です。' },
    { id: 'select-beauty2-flower', category: '美化語', termId: 'beauty', scene: '生け花の時間', prompt: '教室に（　）をかざる。', choices: ['お花', '花', 'ご花', 'み花'], answer: 'お花', explanation: '「お花」は、ものごとを上品に言う美化語です。' }
  ]},
  { id: 'select-wait-self', label: '待つ人はだれ？(自分)', variants: [
    { id: 'select-wait-self-lobby', category: '謙譲語', termId: 'do', scene: '受付での対応', prompt: '私はロビーでお客様を（　）。', choices: ['お待ちする', 'お待ちになる', '拝見する', 'いたす'], answer: 'お待ちする', explanation: '自分が待つので、謙譲語の「お待ちする」を使います。' },
    { id: 'select-wait-self-entrance', category: '謙譲語', termId: 'do', scene: '来客対応の場面', prompt: '私は玄関でお客様が来るのを（　）。', choices: ['お待ちする', 'お待ちになる', 'いらっしゃる', '召し上がる'], answer: 'お待ちする', explanation: '自分が待つときは、謙譲語の「お待ちする」を使います。' }
  ]},
  { id: 'select-polite', label: '聞き手にていねいに伝える場面', variants: [
    { id: 'select-polite-library', category: '丁寧語', termId: 'polite', scene: '友だちに予定を伝える場面', prompt: '私は明日、図書室へ（　）。', choices: ['行きます', '行く', '行かれる', '参る'], answer: '行きます', explanation: '聞き手にていねいに伝えるので、「行きます」を使います。' },
    { id: 'select-polite-order', category: '丁寧語', termId: 'polite', scene: '発表の順番を伝える場面', prompt: 'こちらが発表の順番（　）。', choices: ['です', 'だ', 'である', 'だった'], answer: 'です', explanation: '「です」は聞き手にていねいに伝える丁寧語です。' }
  ]},
  { id: 'select-o-suru', label: '自分がていねいに動く場面', variants: [
    { id: 'select-o-suru-hand', category: 'お〜する', termId: 'do', scene: '先生へ資料を渡す場面', prompt: '私が資料を（　）。', choices: ['お渡しする', 'お渡しになる', 'おっしゃる', 'ご覧になる'], answer: 'お渡しする', explanation: '自分が渡すので、「お〜する」の形で「お渡しする」と言います。' },
    { id: 'select-o-suru-guide', category: 'お〜する', termId: 'do', scene: '来客を案内する場面', prompt: '私が校長室まで（　）。', choices: ['ご案内する', 'ご案内になる', 'いらっしゃる', '召し上がる'], answer: 'ご案内する', explanation: '自分が案内するので、「ご〜する」の形を使います。' }
  ]},
  { id: 'select-prefix-suffix', label: 'お・ご・様を使う場面', variants: [
    { id: 'select-prefix-suffix-name', category: '接頭語・接尾語', termId: 'prefix-suffix', scene: '先生の名前をたずねる場面', prompt: '先生の（　）を教えてください。', choices: ['お名前', 'ご名前', '名前お', 'み名前'], answer: 'お名前', explanation: '「お名前」の「お」は、ことばをていねいにする接頭語です。' },
    { id: 'select-prefix-suffix-sama', category: '接頭語・接尾語', termId: 'prefix-suffix', scene: '手紙のあて名を書く場面', prompt: '山田（　）にお手紙を出します。', choices: ['様', 'さん', 'くん', 'さま方'], answer: '様', explanation: '名前の後ろに「様」をつけると、相手を敬う接尾語になります。' }
  ]}
];
const SELECT_EXCLUDED_TEMPLATES = new Set(["select-wear-guest","select-visit-office","select-see-guest2","select-borrow-self","select-wait-self","select-listen-guest","select-return","select-tell-self"]);
export const SELECT_QUESTION_BANK = SELECT_TEMPLATES.flatMap(function (template) {
  return template.variants.map(function (question) {
    return Object.assign({}, question, { type: 'choice', templateId: template.id, templateLabel: template.label });
  });
});

// 50問を基本セットとして出題。QUESTION_BANKには追加候補も残してあります。
export const SELECT_QUESTIONS = SELECT_QUESTION_BANK.filter(function (question) {
  return !SELECT_EXCLUDED_TEMPLATES.has(question.templateId);
});

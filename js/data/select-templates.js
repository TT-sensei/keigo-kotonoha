export const SELECT_TEMPLATES = [
  { id: 'select-arrival', label: '相手が来る場面', variants: [
    { id: 'select-arrival-teacher', category: '尊敬語', termId: 'go-come', scene: '授業が始まる前の教室', prompt: '先生が教室に（ ）。', choices: ['いらっしゃいます', '参ります', '伺います', '申します'], answer: 'いらっしゃいます', explanation: '先生（高める相手）の「来る」動作なので、尊敬語の「いらっしゃいます」を使います。' },
    { id: 'select-arrival-principal', category: '尊敬語', termId: 'go-come', scene: '卒業式の会場', prompt: '校長先生が会場に（ ）。', choices: ['いらっしゃいます', '参ります', '申します', 'いただきます'], answer: 'いらっしゃいます', explanation: '校長先生の動作を高めて言うので、尊敬語の「いらっしゃいます」を使います。' }
  ]},
  { id: 'select-visit', label: '自分が行く場面', variants: [
    { id: 'select-visit-teacher', category: '謙譲語', termId: 'go-come', scene: '先生のお宅をたずねる予定', prompt: '私は明日、先生のお宅へ（ ）。', choices: ['いらっしゃいます', '伺います', 'おっしゃいます', 'なさいます'], answer: '伺います', explanation: '自分が先生のお宅へ向かう動作なので、謙譲語の「伺います」を使います。' },
    { id: 'select-visit-hall', category: '謙譲語', termId: 'go-come', scene: '発表会の準備', prompt: '私は先に会場へ（ ）。', choices: ['参ります', 'いらっしゃいます', 'ご覧になります', '召し上がります'], answer: '参ります', explanation: '聞き手に対して自分の「行く」動作をへりくだって言うので、「参ります」を使います。' }
  ]},
  { id: 'select-see', label: '見る人を見分ける場面', variants: [
    { id: 'select-see-teacher', category: '尊敬語', termId: 'see', scene: '作品展を見に来た先生', prompt: '先生が児童の作品を（ ）。', choices: ['拝見します', 'ご覧になります', 'いただきます', '申します'], answer: 'ご覧になります', explanation: '先生の「見る」動作を高めて言うので、尊敬語の「ご覧になります」を使います。' },
    { id: 'select-see-self', category: '謙譲語', termId: 'see', scene: '先生の作品を読むとき', prompt: '私は先生の作品を（ ）。', choices: ['ご覧になります', '拝見します', 'おっしゃいます', '召し上がります'], answer: '拝見します', explanation: '敬う対象である先生の作品を見るので、謙譲語の「拝見します」を使います。' }
  ]},
  { id: 'select-say', label: '話す人を見分ける場面', variants: [
    { id: 'select-say-principal', category: '尊敬語', termId: 'say', scene: '全校朝会', prompt: '校長先生が全校児童に（ ）。', choices: ['おっしゃいます', '申し上げます', '拝見します', 'いたします'], answer: 'おっしゃいます', explanation: '校長先生の「言う」動作なので、尊敬語の「おっしゃいます」を使います。' },
    { id: 'select-say-self', category: '謙譲語', termId: 'say', scene: '先生に自分の考えを伝えるとき', prompt: '私は先生に自分の考えを（ ）。', choices: ['申し上げます', 'おっしゃいます', 'ご覧になります', 'なさいます'], answer: '申し上げます', explanation: '先生に向かって言う動作なので、謙譲語の「申し上げます」を使います。' }
  ]},
  { id: 'select-pattern', label: '形や言葉で表す敬語', variants: [
    { id: 'select-pattern-wait', category: 'お〜になる', termId: 'do', scene: '受付でお客さまに案内する場面', prompt: 'お客さまはロビーで（ ）。', choices: ['お待ちになります', 'お待ちします', '待たせていただきます', '拝見します'], answer: 'お待ちになります', explanation: 'お客さまの動作を高めるので、「お〜になる」の形の尊敬語を使います。' },
    { id: 'select-pattern-tea', category: '美化語', termId: 'beauty', scene: '来客に飲み物を出す場面', prompt: '来客に（ ）をお出しします。', choices: ['お茶', 'ご茶', 'お召し上がり', 'ごいただき'], answer: 'お茶', explanation: '「お茶」は、言葉を上品にする美化語です。' }
  ]},
  { id: 'select-eat-guest', label: '食べる人はだれ？(お客様)', variants: [
    { id: 'select-eat-guest-birthday', category: '尊敬語', termId: 'eat', scene: '誕生日会の場面', prompt: '校長先生がケーキを（ ）。', choices: ['召し上がります', 'いただきます', 'なさいます', 'おっしゃいます'], answer: '召し上がります', explanation: '校長先生が食べる動作なので、尊敬語の「召し上がります」を使います。' },
    { id: 'select-eat-guest-meal', category: '尊敬語', termId: 'eat', scene: '来賓との会食', prompt: '来賓の方がお料理を（ ）。', choices: ['召し上がります', 'いただきます', 'いたします', '拝見します'], answer: '召し上がります', explanation: '来賓の方が食べる動作なので、尊敬語の「召し上がります」を使います。' }
  ]},
  { id: 'select-eat-self', label: '食べる人はだれ？(自分)', variants: [
    { id: 'select-eat-self-sweet', category: '謙譲語', termId: 'eat', scene: '先生にいただいたお菓子', prompt: '私は先生にいただいたお菓子を（ ）。', choices: ['いただきます', '召し上がります', 'なさいます', '申します'], answer: 'いただきます', explanation: '先生からいただいたものを食べるので、謙譲語の「いただきます」を使います。' },
    { id: 'select-eat-self-lunch', category: '謙譲語', termId: 'eat', scene: '給食の時間', prompt: '私は先に一口（ ）。', choices: ['いただきます', '召し上がります', 'なさいます', 'いらっしゃいます'], answer: 'いただきます', explanation: '自分が食べる動作をへりくだって言うときは、「いただきます」を使います。' }
  ]},
  { id: 'select-do-teacher', label: 'する人はだれ？(先生)', variants: [
    { id: 'select-do-teacher-board', category: '尊敬語', termId: 'do', scene: '授業の準備', prompt: '先生が黒板の準備を（ ）。', choices: ['なさいます', 'いたします', '拝見します', '申します'], answer: 'なさいます', explanation: '先生の「する」動作なので、尊敬語の「なさいます」を使います。' },
    { id: 'select-do-teacher-speech', category: '尊敬語', termId: 'do', scene: '児童会でのあいさつ', prompt: '校長先生があいさつを（ ）。', choices: ['なさいます', 'いたします', '拝見します', 'いただきます'], answer: 'なさいます', explanation: '校長先生が「する」動作なので、尊敬語の「なさいます」を使います。' }
  ]},
  { id: 'select-do-self', label: 'する人はだれ？(自分)', variants: [
    { id: 'select-do-self-clean', category: '謙譲語', termId: 'do', scene: '先生の手伝い', prompt: '私が先生のお荷物を（ ）。', choices: ['お持ちします', 'お持ちになります', 'おっしゃいます', 'ご覧になります'], answer: 'お持ちします', explanation: '先生に向かう自分の動作なので、「お〜する」の形の謙譲語「お持ちします」を使います。' },
    { id: 'select-do-self-board', category: '謙譲語', termId: 'do', scene: '先生の手伝い', prompt: '私が先生の準備を（ ）。', choices: ['お手伝いします', 'お手伝いになります', 'おっしゃいます', '召し上がります'], answer: 'お手伝いします', explanation: '先生を手伝う動作なので、「お〜する（ご〜する）」の形の謙譲語を使います。' }
  ]},
  { id: 'select-hear-self', label: '聞く人はだれ？(自分)', variants: [
    { id: 'select-hear-self-principal', category: '謙譲語', termId: 'hear', scene: '校長先生に質問する場面', prompt: '私は校長先生にお話を（ ）。', choices: ['伺います', 'お聞きになります', 'おっしゃいます', '申します'], answer: '伺います', explanation: '校長先生から話を聞く（尋ねる）動作なので、謙譲語の「伺います」を使います。' },
    { id: 'select-hear-self-library', category: '謙譲語', termId: 'hear', scene: '図書室で司書の先生に聞く', prompt: '私は司書の先生に本の場所を（ ）。', choices: ['伺います', 'お聞きになります', 'いらっしゃいます', 'なさいます'], answer: '伺います', explanation: '司書の先生に尋ねる動作なので、謙譲語の「伺います」を使います。' }
  ]},
  { id: 'select-listen-guest', label: '聞く人はだれ？(来賓)', variants: [
    { id: 'select-listen-guest-concert', category: '尊敬語', termId: 'hear', scene: '音楽会の会場', prompt: '来賓の方が合唱を（ ）。', choices: ['お聞きになります', '伺います', 'いたします', '申します'], answer: 'お聞きになります', explanation: '来賓の方の「聞く」動作なので、尊敬語の「お聞きになります」を使います。' },
    { id: 'select-listen-guest-class', category: '尊敬語', termId: 'hear', scene: '授業参観', prompt: '保護者の方が発表を（ ）。', choices: ['お聞きになります', '伺います', 'いただきます', 'なさいます'], answer: 'お聞きになります', explanation: '保護者の方の「聞く」動作なので、尊敬語の「お聞きになります」を使います。' }
  ]},
  { id: 'select-meet-self', label: '会う人はだれ？(自分)', variants: [
    { id: 'select-meet-self-office', category: '謙譲語', termId: 'meet', scene: '校長室であいさつする場面', prompt: '私は校長先生に（ ）。', choices: ['お目にかかります', 'お会いになります', 'いらっしゃいます', '参ります'], answer: 'お目にかかります', explanation: '自分が校長先生に会う動作なので、謙譲語の「お目にかかります」を使います。' },
    { id: 'select-meet-self-alumni', category: '謙譲語', termId: 'meet', scene: '昔の担任の先生を訪ねる', prompt: '私は昔の担任の先生に（ ）。', choices: ['お目にかかります', 'お会いになります', 'なさいます', 'おっしゃいます'], answer: 'お目にかかります', explanation: '自分が先生に会う動作なので、謙譲語の「お目にかかります」を使います。' }
  ]},
  { id: 'select-know-self', label: '知る人はだれ？(自分)', variants: [
    { id: 'select-know-self-report', category: '謙譲語', termId: 'know', scene: '委員会での報告', prompt: '私は先生のお名前を（ ）おります。', choices: ['存じ上げて', 'ご存じで', 'おっしゃって', 'なさって'], answer: '存じ上げて', explanation: '敬う対象（先生）に関する知識は、謙譲語の「存じ上げる」を使います。' },
    { id: 'select-know-self-answer', category: '謙譲語', termId: 'know', scene: '質問への返答', prompt: '私はその内容を詳しく（ ）おりません。', choices: ['存じて', 'ご存じで', '拝見して', 'いたして'], answer: '存じて', explanation: '自分が知識を持っていること（事柄）をへりくだる時は「存ずる」を使います。' }
  ]},
  { id: 'select-know-other', label: '知る人はだれ？(先生)', variants: [
    { id: 'select-know-other-teacher', category: '尊敬語', termId: 'know', scene: '先生への質問', prompt: '先生はそのことを（ ）ですか。', choices: ['ご存じ', '存じ', 'お知り', 'お聞き'], answer: 'ご存じ', explanation: '先生が「知っている」か尋ねるので、尊敬語の「ご存じ」を使います。' },
    { id: 'select-know-other-parent', category: '尊敬語', termId: 'know', scene: '保護者との会話', prompt: 'お母様はこの行事を（ ）ですか。', choices: ['ご存じ', '存じ', 'お知り', 'お聞き'], answer: 'ご存じ', explanation: '相手が「知っている」か尋ねるので、尊敬語の「ご存じ」を使います。' }
  ]},
  { id: 'select-return', label: '帰る人はだれ？(先生)', variants: [
    { id: 'select-return-office', category: '尊敬語', termId: 'go-come', scene: '放課後の職員室', prompt: '先生はもう（ ）。', choices: ['お帰りになりました', '参りました', 'いたしました', '申しました'], answer: 'お帰りになりました', explanation: '先生の「帰る」動作なので、尊敬語の「お帰りになりました」を使います。' },
    { id: 'select-return-trip', category: '尊敬語', termId: 'go-come', scene: '出張からの帰り', prompt: '校長先生は明日（ ）予定です。', choices: ['お帰りになる', '参る', 'いたす', '申す'], answer: 'お帰りになる', explanation: '校長先生の「帰る」動作なので、尊敬語の「お帰りになる」を使います。' }
  ]},
  { id: 'select-give-other', label: 'くれる人はだれ？(校長先生)', variants: [
    { id: 'select-give-other-award', category: '尊敬語', termId: 'give-receive', scene: '表彰式の場面', prompt: '校長先生が賞状を（ ）。', choices: ['くださいました', 'いただきました', '差し上げました', '拝見しました'], answer: 'くださいました', explanation: '校長先生が自分に「くれる」動作なので、尊敬語の「くださいました」を使います。' },
    { id: 'select-give-other-gift', category: '尊敬語', termId: 'give-receive', scene: '記念品を渡される場面', prompt: '来賓の方が記念品を（ ）。', choices: ['くださいました', 'いただきました', 'なさいました', 'おっしゃいました'], answer: 'くださいました', explanation: '来賓の方が「くれる」動作なので、尊敬語の「くださいました」を使います。' }
  ]},
  { id: 'select-receive-self', label: 'もらう人はだれ？(自分)', variants: [
    { id: 'select-receive-self-book', category: '謙譲語', termId: 'give-receive', scene: '先生から本を借りる場面', prompt: '私は先生から本を（ ）。', choices: ['いただきました', 'くださいました', '差し上げました', '拝見しました'], answer: 'いただきました', explanation: '自分が先生から「もらう」動作なので、謙譲語の「いただきました」を使います。' },
    { id: 'select-receive-self-souvenir', category: '謙譲語', termId: 'give-receive', scene: 'お客様から記念品をもらう場面', prompt: '私はお客様から記念品を（ ）。', choices: ['いただきました', 'くださいました', 'なさいました', '申しました'], answer: 'いただきました', explanation: '自分のお客様から「もらう」動作なので、謙譲語の「いただきました」を使います。' }
  ]},
  { id: 'select-read-guest', label: '読む人はだれ？(先生)', variants: [
    { id: 'select-read-guest-paper', category: '尊敬語', termId: 'read', scene: '職員室の様子', prompt: '先生が新聞を（ ）。', choices: ['お読みになります', 'お読みします', '拝見します', 'いたします'], answer: 'お読みになります', explanation: '先生の「読む」動作なので、尊敬語の「お読みになります」を使います。' },
    { id: 'select-read-guest-newsletter', category: '尊敬語', termId: 'read', scene: '学級だよりを読む場面', prompt: '校長先生が学級だよりを（ ）。', choices: ['お読みになります', 'お読みします', 'いただきます', '申します'], answer: 'お読みになります', explanation: '校長先生の「読む」動作なので、尊敬語の「お読みになります」を使います。' }
  ]},
  { id: 'select-write-self', label: '書く人はだれ？(自分)', variants: [
    { id: 'select-write-self-letter', category: '謙譲語', termId: 'write', scene: '案内状の作成', prompt: '私が先生に案内状を（ ）。', choices: ['お書きします', 'お書きになります', 'なさいます', 'おっしゃいます'], answer: 'お書きします', explanation: '先生に向けて書く動作なので、「お〜する」の形の謙譲語「お書きします」を使います。' },
    { id: 'select-write-self-thankyou', category: '謙譲語', termId: 'write', scene: 'お礼状を書く場面', prompt: '私は先生にお礼状を（ ）。', choices: ['お書きします', 'お書きになります', 'ご覧になります', '召し上がります'], answer: 'お書きします', explanation: '先生に向けて書く動作なので、「お〜する」の形の謙譲語「お書きします」を使います。' }
  ]},
  { id: 'select-use-guest', label: '使う人はだれ？(お客様)', variants: [
    { id: 'select-use-guest-tool', category: '尊敬語', termId: 'use', scene: '道具の貸し出し場面', prompt: 'お客様がその道具を（ ）。', choices: ['お使いになります', 'お使いします', 'いたします', 'お借りします'], answer: 'お使いになります', explanation: 'お客様の「使う」動作なので、尊敬語の「お使いになります」を使います。' },
    { id: 'select-use-guest-mic', category: '尊敬語', termId: 'use', scene: '会議室でのマイク使用', prompt: '来賓の方がマイクを（ ）。', choices: ['お使いになります', 'お使いします', 'いたします', '申します'], answer: 'お使いになります', explanation: '来賓の方の「使う」動作なので、尊敬語の「お使いになります」を使います。' }
  ]},
  { id: 'select-ask-self', label: 'たずねる人はだれ？(自分)', variants: [
    { id: 'select-ask-self-station', category: '謙譲語', termId: 'ask', scene: '職員室へ電話をかける場面', prompt: '私は職員室に電話して、先生に集合時刻を（ ）。', choices: ['伺います', 'お尋ねになります', 'おっしゃいます', 'なさいます'], answer: '伺います', explanation: '先生にたずねる自分の動作なので、謙譲語の「伺います」を使います。' },
    { id: 'select-ask-self-question', category: '謙譲語', termId: 'ask', scene: '分からないところを聞く場面', prompt: '私は先生に分からないところを（ ）。', choices: ['伺います', 'お尋ねになります', 'いらっしゃいます', '召し上がります'], answer: '伺います', explanation: '自分が先生に尋ねる動作なので、謙譲語の「伺います」を使います。' }
  ]},
  { id: 'select-show-self', label: '見せる人はだれ？(自分)', variants: [
    { id: 'select-show-self-work', category: 'お〜する', termId: 'show', scene: '作品発表の場面', prompt: '私は先生に作品を（ ）。', choices: ['お見せします', 'ご覧になります', '拝見します', 'いたします'], answer: 'お見せします', explanation: '先生に見せる動作なので、「お〜する」の形の謙譲語「お見せします」を使います。' },
    { id: 'select-show-self-experiment', category: 'お〜する', termId: 'show', scene: '研究発表会', prompt: '私が先生に実験の様子を（ ）。', choices: ['お見せします', 'ご覧になります', 'なさいます', 'おっしゃいます'], answer: 'お見せします', explanation: '先生に見せる動作なので、「お〜する」の形の謙譲語「お見せします」を使います。' }
  ]},
  { id: 'select-wear-guest', label: '着る人はだれ？(来賓)', variants: [
    { id: 'select-wear-guest-ceremony', category: '尊敬語', termId: 'wear', scene: '式典の場面', prompt: '来賓の方がすてきな服を（ ）。', choices: ['お召しになっています', '着ております', 'いたします', '拝見します'], answer: 'お召しになっています', explanation: '来賓の方の「着る」動作なので、尊敬語の「お召しになっています」を使います。' },
    { id: 'select-wear-guest-graduation', category: '尊敬語', termId: 'wear', scene: '卒業式の場面', prompt: '校長先生が礼服を（ ）。', choices: ['お召しになります', '着ております', 'いただきます', '申します'], answer: 'お召しになります', explanation: '校長先生の「着る」動作なので、尊敬語の「お召しになります」を使います。' }
  ]},
  { id: 'select-rest-teacher', label: '休む人はだれ？(先生)', variants: [
    { id: 'select-rest-teacher-nurse', category: '尊敬語', termId: 'rest', scene: '保健室で休む場面', prompt: '先生が少し（ ）。', choices: ['お休みになります', '休ませていただきます', 'いたします', '参ります'], answer: 'お休みになります', explanation: '先生の「休む」動作なので、尊敬語の「お休みになります」を使います。' },
    { id: 'select-rest-teacher-sick', category: '尊敬語', termId: 'rest', scene: '体調不良の連絡', prompt: '校長先生は今日一日（ ）そうです。', choices: ['お休みになる', '休ませていただく', 'なさる', 'おっしゃる'], answer: 'お休みになる', explanation: '校長先生の「休む」動作なので、尊敬語の「お休みになる」を使います。' }
  ]},
  { id: 'select-tell-self', label: '伝える人はだれ？(自分)', variants: [
    { id: 'select-tell-self-teacher', category: '謙譲語', termId: 'say', scene: '先生への報告', prompt: '私は先生にご用件を（ ）。', choices: ['お伝えします', 'おっしゃいます', 'ご覧になります', 'なさいます'], answer: 'お伝えします', explanation: '先生に伝える動作なので、「お〜する」の形の謙譲語「お伝えします」を使います。' },
    { id: 'select-tell-self-parent', category: '謙譲語', termId: 'say', scene: '先生への報告', prompt: '私は先生に感想を（ ）。', choices: ['お伝えします', 'おっしゃいます', 'くださいます', '拝見します'], answer: 'お伝えします', explanation: '先生に伝える動作なので、「お〜する」の形の謙譲語「お伝えします」を使います。' }
  ]},
  { id: 'select-visit-office', label: '自分が校長室をたずねる場面', variants: [
    { id: 'select-visit-office-report', category: '謙譲語', termId: 'go-come', scene: '委員会の報告に行く場面', prompt: '私は校長室に（ ）。', choices: ['伺います', 'いらっしゃいます', 'なさいます', 'おっしゃいます'], answer: '伺います', explanation: '自分が校長室（校長先生のいる場所）を訪ねる動作なので、謙譲語の「伺います」を使います。' },
    { id: 'select-visit-office-trip', category: '謙譲語', termId: 'go-come', scene: '出張先の先生をたずねる場面', prompt: '私は先生の出張先に（ ）予定です。', choices: ['伺う', 'いらっしゃる', '召し上がる', 'ご覧になる'], answer: '伺う', explanation: '自分が先生のところへ訪ねる動作なので、謙譲語の「伺う」を使います。' }
  ]},
  { id: 'select-see-guest2', label: '見る人はだれ？(保護者)', variants: [
    { id: 'select-see-guest2-board', category: '尊敬語', termId: 'see', scene: '掲示物の前での場面', prompt: '保護者の方が掲示物を（ ）。', choices: ['ご覧になります', '拝見します', 'いたします', '申します'], answer: 'ご覧になります', explanation: '保護者の方の「見る」動作なので、尊敬語の「ご覧になります」を使います。' },
    { id: 'select-see-guest2-sports', category: '尊敬語', termId: 'see', scene: '運動会の応援席', prompt: '保護者の方が児童のようすを（ ）。', choices: ['ご覧になります', '拝見します', 'いただきます', 'なさいます'], answer: 'ご覧になります', explanation: '保護者の方の「見る」動作なので、尊敬語の「ご覧になります」を使います。' }
  ]},
  { id: 'select-borrow-self', label: '借りる人はだれ？(自分)', variants: [
    { id: 'select-borrow-self-umbrella', category: 'お〜する', termId: 'borrow', scene: '先生に辞書を借りる場面', prompt: '私は先生から辞書を（ ）。', choices: ['お借りします', 'お貸しになります', 'いただきます', '差し上げます'], answer: 'お借りします', explanation: '自分が先生から借りる動作なので、「お〜する」の形の謙譲語「お借りします」を使います。' },
    { id: 'select-borrow-self-tool', category: 'お〜する', termId: 'borrow', scene: '教材の準備', prompt: '私は先生から道具を（ ）。', choices: ['お借りします', 'お貸しになります', 'くださいます', '召し上がります'], answer: 'お借りします', explanation: '自分が先生から借りる動作なので、「お〜する」の形の謙譲語「お借りします」を使います。' }
  ]},
  { id: 'select-beauty2', label: '美化語で言う場面', variants: [
    { id: 'select-beauty2-rice', category: '美化語', termId: 'beauty', scene: '朝ごはんの場面', prompt: '毎朝（ ）を食べてから登校します。', choices: ['ご飯', '飯', '米飯', 'ごはん飯'], answer: 'ご飯', explanation: '「ご飯」は、言葉を上品にする美化語です。' },
    { id: 'select-beauty2-flower', category: '美化語', termId: 'beauty', scene: '生け花の時間', prompt: '教室に（ ）をかざります。', choices: ['お花', '花', 'ご花', 'み花'], answer: 'お花', explanation: '「お花」は、言葉を上品にする美化語です。' }
  ]},
  { id: 'select-wait-self', label: '待つ人はだれ？(自分)', variants: [
    { id: 'select-wait-self-lobby', category: 'お〜する', termId: 'do', scene: '受付での対応', prompt: '私はロビーでお客さまを（ ）。', choices: ['お待ちします', 'お待ちになります', '拝見します', 'いたします'], answer: 'お待ちします', explanation: '自分がお客さまに向かって待つ動作なので、「お〜する」の形の謙譲語「お待ちします」を使います。' },
    { id: 'select-wait-self-entrance', category: 'お〜する', termId: 'do', scene: '来客対応の場面', prompt: '私は玄関でお客さまが来るのを（ ）。', choices: ['お待ちします', 'お待ちになります', 'いらっしゃいます', '召し上がります'], answer: 'お待ちします', explanation: '自分がお客さまを待つ動作なので、「お〜する」の形の謙譲語「お待ちします」を使います。' }
  ]},
  { id: 'select-polite', label: '聞き手にていねいに伝える場面', variants: [
    { id: 'select-polite-library', category: '丁寧語', termId: 'polite', scene: '先生に予定を伝える場面', prompt: '私は明日、図書室へ（ ）。', choices: ['行きます', '行く', '行かれます', '参ります'], answer: '行きます', explanation: '聞き手に丁寧につたえるので、「行きます」を使います。' },
    { id: 'select-polite-order', category: '丁寧語', termId: 'polite', scene: '発表の順番を伝える場面', prompt: 'こちらが発表の順番（ ）。', choices: ['です', 'だ', 'である', 'だった'], answer: 'です', explanation: '「です」は聞き手に丁寧につたえる丁寧語です。' }
  ]},
  { id: 'select-o-suru', label: '自分がていねいに動く場面', variants: [
    { id: 'select-o-suru-hand', category: 'お〜する', termId: 'do', scene: '先生へ資料を渡す場面', prompt: '私が先生に資料を（ ）。', choices: ['お渡しします', 'お渡しになります', 'おっしゃいます', 'ご覧になります'], answer: 'お渡しします', explanation: '自分が先生に渡す動作なので、「お〜する」の形の謙譲語「お渡しします」を使います。' },
    { id: 'select-o-suru-guide', category: 'お〜する', termId: 'do', scene: '来客を案内する場面', prompt: '私がお客様を校長室まで（ ）。', choices: ['ご案内します', 'ご案内になります', 'いらっしゃいます', '召し上がります'], answer: 'ご案内します', explanation: '自分がお客さまを案内する動作なので、「ご〜する」の形の謙譲語「ご案内します」を使います。' }
  ]},
  { id: 'select-prefix-suffix', label: 'お・ご・様を使う場面', variants: [
    { id: 'select-prefix-suffix-name', category: '接頭語・接尾語', termId: 'prefix-suffix', scene: '先生の名前をたずねる場面', prompt: '先生の（ ）を教えてください。', choices: ['お名前', 'ご名前', '名前お', 'み名前'], answer: 'お名前', explanation: '「お名前」の「お」は、言葉を丁寧にする言葉です。' },
    { id: 'select-prefix-suffix-sama', category: '接頭語・接尾語', termId: 'prefix-suffix', scene: '手紙のあて名を書く場面', prompt: '山田（ ）にお手紙を出します。', choices: ['様', 'さん', 'くん', 'さま方'], answer: '様', explanation: '名前の後ろに「様」をつけると、相手を敬う言葉（接尾語）になります。' }
  ]}
];

const SELECT_EXCLUDED_TEMPLATES = new Set(["select-wear-guest","select-visit-office","select-see-guest2","select-borrow-self","select-wait-self","select-listen-guest","select-return","select-tell-self"]);

export const SELECT_QUESTION_BANK = SELECT_TEMPLATES.flatMap(function (template) {
  return template.variants.map(function (question) {
    return Object.assign({}, question, { type: 'choice', templateId: template.id, templateLabel: template.label });
  });
});

export const SELECT_QUESTIONS = SELECT_QUESTION_BANK.filter(function (question) {
  return !SELECT_EXCLUDED_TEMPLATES.has(question.templateId);
});

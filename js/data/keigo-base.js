export const KEIGO_TERMS = [
  { id: 'go-come', base: '行く・来る', respectful: 'いらっしゃる', humble: '伺う・参る' },
  { id: 'say', base: '言う', respectful: 'おっしゃる', humble: '申す・申し上げる' },
  { id: 'see', base: '見る', respectful: 'ご覧になる', humble: '拝見する' },
  { id: 'eat-drink', base: '食べる・飲む', respectful: '召し上がる', humble: 'いただく' },
  { id: 'do', base: 'する', respectful: 'なさる', humble: 'いたす' },
  { id: 'hear', base: '聞く', respectful: 'お聞きになる', humble: '伺う・拝聴する' },
  { id: 'meet', base: '会う', respectful: 'お会いになる', humble: 'お目にかかる' },
  { id: 'know', base: '知る', respectful: 'ご存じです', humble: '存じる・存じ上げる' }
];
export const REFERENCE_ROWS = KEIGO_TERMS.map(function (term) {
  return { base: term.base, respectful: term.respectful, humble: term.humble };
});

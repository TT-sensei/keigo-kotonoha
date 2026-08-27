# ことのは ― 敬語のたしなみ ―

小学校高学年向けの敬語練習アプリです。場面を見て判断し、短い解説で確かめて次へ進むテンポを大切にしています。

## 学習モード

- 敬語セレクト：場面と動作をする人に合う敬語を4択で選ぶ。
- 敬語ジャッジ：文中の敬語が正しければ○、違っていれば×を選ぶ。

どちらも10問1セットです。不正解だった問題は、次回以降に少し選ばれやすくなります。進み具合はブラウザの localStorage に保存されます。

## 問題を増やす場所

| モード | 追加先 | 追加する場所 |
| --- | --- | --- |
| 敬語セレクト | js/data/select-templates.js | 5つの場面テンプレートの variants |
| 敬語ジャッジ | js/data/judge-templates.js | 5つの見分けポイントの variants |
| 早見表 | js/data/keigo-base.js | KEIGO_TERMS |

問題には、重複しない id、category、scene、explanation を付けます。解説は1〜2文で、敬語がだれの動作に使われるかが分かる内容にします。

## 構成

index.html
css/style.css
js/app.js
js/data/keigo-base.js
js/data/select-templates.js
js/data/judge-templates.js

edu-components の ScreenManager、QuestionPool、ChoiceQuestion、TrueFalseQuestion、ScoreManager、ComboManager、StorageManager を使っています。NAVIキャラは軽量WebP版を、ホーム・正誤・結果にだけ控えめに配置しています。

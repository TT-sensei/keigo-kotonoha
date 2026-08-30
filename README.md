# ことのは ― 敬語のたしなみ ―

小学校高学年向けの敬語練習アプリです。場面を見て判断し、短い解説で確かめて次へ進むテンポを大切にしています。

## 学習モード

- 敬語セレクト：場面と動作をする人に合う敬語を4択で選ぶ。
- 敬語ジャッジ：文中の敬語が正しければ○、違っていれば×を選ぶ。

各モードに50問の基本問題を用意し、10問1セットで出題します。不正解だった問題は、次回以降に少し選ばれやすくなります。進み具合はブラウザの localStorage に保存されます。

## 問題を増やす場所

| モード | 追加先 | 追加する場所 |
| --- | --- | --- |
| 敬語セレクト | js/data/select-templates.js | 場面テンプレートの variants（基本50問。QUESTION_BANKに追加候補あり） |
| 敬語ジャッジ | js/data/judge-templates.js | 見分けポイントの variants（基本50問。QUESTION_BANKに追加候補あり） |
| 早見表 | js/data/keigo-base.js | KEIGO_TERMS |

問題には、重複しない id、category、scene、explanation を付けます。解説は1〜2文で、敬語がだれの動作に使われるかが分かる内容にします。

## 構成

index.html
css/style.css
js/app.js
js/data/keigo-base.js
js/data/select-templates.js
js/data/judge-templates.js

edu-components の ScreenManager、QuestionPool、ChoiceQuestion、TrueFalseQuestion、ScoreManager、ComboManager、StorageManager を使っています。NAVIキャラは軽量WebP版を、ホーム・正誤・結果・手引きに配置し、正誤時は6人からランダムに登場します。

## 利用について

学校・家庭での学習目的で無料で利用できます。

このリポジトリのコードやオリジナル教材を、許可なく有料教材・有料サービス・販売商品として利用することはできません。問題データ、解説、例文、キャラクター等をまとめて再配布・販売することも許可していません。

外部ライブラリ、フォント、画像、音源、その他の第三者素材には、それぞれの権利者・ライセンスの条件が適用されます。

## License

Software code and original educational content in this repository are licensed under the PolyForm Noncommercial License 1.0.0.

https://polyformproject.org/licenses/noncommercial/1.0.0/

Copyright © 2026 TT-sensei.

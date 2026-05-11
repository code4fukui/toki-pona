# toki-pona

[Toki Pona](https://tokipona.github.io/) のテキストを音節文字フォント [linja suwi](https://linjasuwi.ap5.dev/) で表示するためのカスタムHTML要素 `<toki-pona>` です。

[ライブデモ](https://code4fukui.github.io/toki-pona/)

デモでは、「o toki kepeken toki pona!」というフレーズをカスタム要素で表示しています。各単語は *linja suwi* フォントで表示され、その上に元の単語がルビとして表示されます。

## 使い方

HTMLファイルにJavaScriptモジュールを読み込み、Toki Ponaのテキストを `<toki-pona>` タグで囲みます。

```html
<script type="module" src="https://code4fukui.github.io/toki-pona/toki-pona.js"></script>

<toki-pona>o toki kepeken toki pona!</toki-pona>
```

## 機能

- **専用フォント:** 認識されたToki Ponaの単語と句読点（`.,;:!?~`）を自動的に *linja suwi* フォントで表示します。
- **ルビ表示:** 読みやすさとコピー＆ペーストのしやすさのため、*linja suwi* 文字の上に元の単語をルビとして追加します。
- **単語の識別:** [tok2jpn.csv](https://github.com/code4fukui/tok2jpn) の単語リストを使用して、スタイルを適用する単語を識別します。
- **フォールバックフォント:** リストにない単語は、標準のサンセリフフォントで表示されます。
- **シンプルな導入:** ビルド不要で、標準のWebコンポーネントとして動作します。フォントと単語リストを取得するため、インターネット接続が必要です。

## 例

この要素は空白を保持し、複数行のテキストに対応しています。

```html
<toki-pona>
jan Pukuti li pali e ilo musi pi toki pona!! pona mute a!
ona li kama ken toki lon toki pona kepeken tenpo lili lili. wawa mute!
wile la, o pana sona e nasin pi toki pona tawa jan mute. pona~
</toki-pona>
```
ソース: [sample.html](./sample.html)

## クレジット

- **フォント:** [linja suwi](https://linjasuwi.ap5.dev/)
- **単語データ:** [code4fukui/tok2jpn](https://github.com/code4fukui/tok2jpn)
- **サンプルテキスト:** [2025 jig.jp サマーインターンシップ 振り返り（ごじら）](https://jigjp-diary2024.hatenablog.jp/entry/2025/09/01/092938)

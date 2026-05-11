# toki-pona

> 日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

A custom HTML element, `<toki-pona>`, for displaying [Toki Pona](https://tokipona.github.io/) text using the [linja suwi](https://linjasuwi.ap5.dev/) syllabic font.

[Live Demo](https://code4fukui.github.io/toki-pona/)

The demo shows the phrase "o toki kepeken toki pona!" rendered with the custom element. Each word is displayed in the *linja suwi* font, with the original word appearing above it as ruby text.

## Usage

Include the JavaScript module in your HTML file. Then, wrap any Toki Pona text with the `<toki-pona>` tag.

```html
<script type="module" src="https://code4fukui.github.io/toki-pona/toki-pona.js"></script>

<toki-pona>o toki kepeken toki pona!</toki-pona>
```

## Features

- **Specialized Font:** Automatically renders recognized Toki Pona words and punctuation (`.,;:!?~`) in the *linja suwi* font.
- **Ruby Annotations:** Adds the original word as ruby text above the *linja suwi* character for readability and easy copy-pasting.
- **Word Identification:** Uses a word list from [tok2jpn.csv](https://github.com/code4fukui/tok2jpn) to identify which words to style.
- **Fallback Font:** Words not found in the list are displayed in a standard sans-serif font.
- **Simple Integration:** Works as a standard Web Component with no build step required. It requires an internet connection to fetch the font and word list.

## Example

The element preserves spacing and handles multi-line text.

```html
<toki-pona>
jan Pukuti li pali e ilo musi pi toki pona!! pona mute a!
ona li kama ken toki lon toki pona kepeken tenpo lili lili. wawa mute!
wile la, o pana sona e nasin pi toki pona tawa jan mute. pona~
</toki-pona>
```
Source: [sample.html](./sample.html)

## Attribution

- **Font:** [linja suwi](https://linjasuwi.ap5.dev/)
- **Word Data:** [code4fukui/tok2jpn](https://github.com/code4fukui/tok2jpn)
- **Sample Text:** [2025 jig.jp サマーインターンシップ 振り返り（ごじら）](https://jigjp-diary2024.hatenablog.jp/entry/2025/0
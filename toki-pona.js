import { CSV } from "https://js.sabae.cc/CSV.js";

// from https://linjasuwi.ap5.dev/
const css = `@font-face {
  font-family: 'linja suwi';
  src: url('https://code4fukui.github.io/tok2jpn/linjasuwi.otf') format('opentype');
  font-weight: normal;
  font-style: normal;
}
toki-pona .tokipona {
  font-family: linja suwi;
  font-size: 220%;
}
toki-pona .no-tokipona {
  font-family: sans-serif;
  font-size: 180%;
  margin-right: .25em;
  margin-left: .25em;
}
toki-pona ruby {
  margin-right: 0em;
  font-size: 160%;
}
toki-pona rt {
  margin-top: .6em;
  margin-bottom: .2em;
}
`;

const cr = tag => document.createElement(tag);

const tok2jpn = await CSV.fetchJSON("https://code4fukui.github.io/tok2jpn/tok2jpn.csv");

const parseTokipona = (s) => {
  let state = 0;
  const res = [];
  let p = "";
  for (const c of s) {
    if (state == 0) {
      if (c == "." || c == "," || c == ";" || c == ":" || c == "!" || c == "?" || c == "~" || c == "\n") {
        if (p.length > 0) {
          res.push(p);
          p = "";
        }
        res.push(c);
      } else if (c == " " || c == "\t") {
        if (p.length > 0) {
          res.push(p);
          p = "";
        }
      } else {
        p += c;
      }
    }
  }
  if (p.length > 0) {
    res.push(p);
  }
  return res;
};

export class TokiPona extends HTMLElement {
  constructor() {
    super();
    const ss = parseTokipona(this.textContent);
    this.innerHTML = "";

    const style = cr("style");
    style.textContent = css;
    this.appendChild(style);

    for (const s of ss) {
      if (s == "\n") {
        this.appendChild(cr("br"));
        continue;
      }
      const tokipona = tok2jpn.find(i => i.tok == s);
      const ruby = cr("ruby")
      const tp = cr("span");
      tp.className = tokipona ? "tokipona" : "no-tokipona";
      tp.textContent = s;
      ruby.appendChild(tp);
      const rt = cr("rt");
      rt.textContent = s;
      ruby.appendChild(rt);
      this.appendChild(ruby);
    }
  }
}
customElements.define("toki-pona", TokiPona);

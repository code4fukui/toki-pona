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
}
toki-pona ruby {
  margin-right: 0em;
  font-size: 160%;
}
toki-pona rt {
  margin-bottom: .3em;
}
toki-pona ruby > span {
  font-size: 220%;
}
toki-pona > span {
  font-size: 220%;
  margin-right: .25em;
  margin-left: .25em;
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
      if (c == "." || c == "," || c == ";" || c == ":" || c == "!" || c == "?") {
        if (p.length > 0) {
          res.push(p);
          p = "";
        }
        res.push(c);
      } else if (c == " " || c == "\n" || c == "\t") {
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
      if (tok2jpn.find(i => i.tok == s)) {
        const ruby = cr("ruby")
        const tp = cr("span");
        tp.className = "tokipona";
        tp.textContent = s;
        ruby.appendChild(tp);
        const rt = cr("rt");
        rt.textContent = s;
        ruby.appendChild(rt);
        this.appendChild(ruby);
      } else {
        const span = cr("span");
        span.textContent = s;
        this.appendChild(span);
      }
    }
  }
}
customElements.define("toki-pona", TokiPona);

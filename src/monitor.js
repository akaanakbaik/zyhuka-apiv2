import { b as at } from "./vendor-DHMKXF-P.js";
import { view as b } from "./view-runtime.js";
const K = (target, key, value) =>
  key in target
    ? Object.defineProperty(target, key, {
        enumerable: true,
        configurable: true,
        writable: true,
        value,
      })
    : (target[key] = value);
/*!
 * @kurkle/color v0.3.4
 * https://github.com/kurkle/color#readme
 * (c) 2024 Jukka Kurkela
 * Released under the MIT License
 */ function eo(n) {
  return (n + 0.5) | 0;
}
const qi = (n, t, i) => Math.max(Math.min(n, i), t);
function Tl(n) {
  return qi(eo(n * 2.55), 0, 255);
}
function Gi(n) {
  return qi(eo(n * 255), 0, 255);
}
function oi(n) {
  return qi(eo(n / 2.55) / 100, 0, 1);
}
function gb(n) {
  return qi(eo(n * 100), 0, 100);
}
const wn = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    A: 10,
    B: 11,
    C: 12,
    D: 13,
    E: 14,
    F: 15,
    a: 10,
    b: 11,
    c: 12,
    d: 13,
    e: 14,
    f: 15,
  },
  af = [..."0123456789ABCDEF"],
  pS = (n) => af[n & 15],
  bS = (n) => af[(n & 240) >> 4] + af[n & 15],
  Sr = (n) => (n & 240) >> 4 === (n & 15),
  xS = (n) => Sr(n.r) && Sr(n.g) && Sr(n.b) && Sr(n.a);
function yS(n) {
  var t = n.length,
    i;
  return (
    n[0] === "#" &&
      (t === 4 || t === 5
        ? (i = {
            r: 255 & (wn[n[1]] * 17),
            g: 255 & (wn[n[2]] * 17),
            b: 255 & (wn[n[3]] * 17),
            a: t === 5 ? wn[n[4]] * 17 : 255,
          })
        : (t === 7 || t === 9) &&
          (i = {
            r: (wn[n[1]] << 4) | wn[n[2]],
            g: (wn[n[3]] << 4) | wn[n[4]],
            b: (wn[n[5]] << 4) | wn[n[6]],
            a: t === 9 ? (wn[n[7]] << 4) | wn[n[8]] : 255,
          })),
    i
  );
}
const vS = (n, t) => (n < 255 ? t(n) : "");
function wS(n) {
  var t = xS(n) ? pS : bS;
  return n ? "#" + t(n.r) + t(n.g) + t(n.b) + vS(n.a, t) : void 0;
}
const _S =
  /^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;
function zx(n, t, i) {
  const a = t * Math.min(i, 1 - i),
    o = (r, u = (r + n / 30) % 12) =>
      i - a * Math.max(Math.min(u - 3, 9 - u, 1), -1);
  return [o(0), o(8), o(4)];
}
function SS(n, t, i) {
  const a = (o, r = (o + n / 60) % 6) =>
    i - i * t * Math.max(Math.min(r, 4 - r, 1), 0);
  return [a(5), a(3), a(1)];
}
function MS(n, t, i) {
  const a = zx(n, 1, 0.5);
  let o;
  for (t + i > 1 && ((o = 1 / (t + i)), (t *= o), (i *= o)), o = 0; o < 3; o++)
    ((a[o] *= 1 - t - i), (a[o] += t));
  return a;
}
function AS(n, t, i, a, o) {
  return n === o
    ? (t - i) / a + (t < i ? 6 : 0)
    : t === o
      ? (i - n) / a + 2
      : (n - t) / a + 4;
}
function Rf(n) {
  const i = n.r / 255,
    a = n.g / 255,
    o = n.b / 255,
    r = Math.max(i, a, o),
    u = Math.min(i, a, o),
    d = (r + u) / 2;
  let h, g, p;
  return (
    r !== u &&
      ((p = r - u),
      (g = d > 0.5 ? p / (2 - r - u) : p / (r + u)),
      (h = AS(i, a, o, p, r)),
      (h = h * 60 + 0.5)),
    [h | 0, g || 0, d]
  );
}
function Hf(n, t, i, a) {
  return (Array.isArray(t) ? n(t[0], t[1], t[2]) : n(t, i, a)).map(Gi);
}
function Uf(n, t, i) {
  return Hf(zx, n, t, i);
}
function kS(n, t, i) {
  return Hf(MS, n, t, i);
}
function ES(n, t, i) {
  return Hf(SS, n, t, i);
}
function Dx(n) {
  return ((n % 360) + 360) % 360;
}
function CS(n) {
  const t = _S.exec(n);
  let i = 255,
    a;
  if (!t) return;
  t[5] !== a && (i = t[6] ? Tl(+t[5]) : Gi(+t[5]));
  const o = Dx(+t[2]),
    r = +t[3] / 100,
    u = +t[4] / 100;
  return (
    t[1] === "hwb"
      ? (a = kS(o, r, u))
      : t[1] === "hsv"
        ? (a = ES(o, r, u))
        : (a = Uf(o, r, u)),
    { r: a[0], g: a[1], b: a[2], a: i }
  );
}
function jS(n, t) {
  var i = Rf(n);
  ((i[0] = Dx(i[0] + t)),
    (i = Uf(i)),
    (n.r = i[0]),
    (n.g = i[1]),
    (n.b = i[2]));
}
function TS(n) {
  if (!n) return;
  const t = Rf(n),
    i = t[0],
    a = gb(t[1]),
    o = gb(t[2]);
  return n.a < 255
    ? `hsla(${i}, ${a}%, ${o}%, ${oi(n.a)})`
    : `hsl(${i}, ${a}%, ${o}%)`;
}
const pb = {
    x: "dark",
    Z: "light",
    Y: "re",
    X: "blu",
    W: "gr",
    V: "medium",
    U: "slate",
    A: "ee",
    T: "ol",
    S: "or",
    B: "ra",
    C: "lateg",
    D: "ights",
    R: "in",
    Q: "turquois",
    E: "hi",
    P: "ro",
    O: "al",
    N: "le",
    M: "de",
    L: "yello",
    F: "en",
    K: "ch",
    G: "arks",
    H: "ea",
    I: "ightg",
    J: "wh",
  },
  bb = {
    OiceXe: "f0f8ff",
    antiquewEte: "faebd7",
    aqua: "ffff",
    aquamarRe: "7fffd4",
    azuY: "f0ffff",
    beige: "f5f5dc",
    bisque: "ffe4c4",
    black: "0",
    blanKedOmond: "ffebcd",
    Xe: "ff",
    XeviTet: "8a2be2",
    bPwn: "a52a2a",
    burlywood: "deb887",
    caMtXe: "5f9ea0",
    KartYuse: "7fff00",
    KocTate: "d2691e",
    cSO: "ff7f50",
    cSnflowerXe: "6495ed",
    cSnsilk: "fff8dc",
    crimson: "dc143c",
    cyan: "ffff",
    xXe: "8b",
    xcyan: "8b8b",
    xgTMnPd: "b8860b",
    xWay: "a9a9a9",
    xgYF: "6400",
    xgYy: "a9a9a9",
    xkhaki: "bdb76b",
    xmagFta: "8b008b",
    xTivegYF: "556b2f",
    xSange: "ff8c00",
    xScEd: "9932cc",
    xYd: "8b0000",
    xsOmon: "e9967a",
    xsHgYF: "8fbc8f",
    xUXe: "483d8b",
    xUWay: "2f4f4f",
    xUgYy: "2f4f4f",
    xQe: "ced1",
    xviTet: "9400d3",
    dAppRk: "ff1493",
    dApskyXe: "bfff",
    dimWay: "696969",
    dimgYy: "696969",
    dodgerXe: "1e90ff",
    fiYbrick: "b22222",
    flSOwEte: "fffaf0",
    foYstWAn: "228b22",
    fuKsia: "ff00ff",
    gaRsbSo: "dcdcdc",
    ghostwEte: "f8f8ff",
    gTd: "ffd700",
    gTMnPd: "daa520",
    Way: "808080",
    gYF: "8000",
    gYFLw: "adff2f",
    gYy: "808080",
    honeyMw: "f0fff0",
    hotpRk: "ff69b4",
    RdianYd: "cd5c5c",
    Rdigo: "4b0082",
    ivSy: "fffff0",
    khaki: "f0e68c",
    lavFMr: "e6e6fa",
    lavFMrXsh: "fff0f5",
    lawngYF: "7cfc00",
    NmoncEffon: "fffacd",
    ZXe: "add8e6",
    ZcSO: "f08080",
    Zcyan: "e0ffff",
    ZgTMnPdLw: "fafad2",
    ZWay: "d3d3d3",
    ZgYF: "90ee90",
    ZgYy: "d3d3d3",
    ZpRk: "ffb6c1",
    ZsOmon: "ffa07a",
    ZsHgYF: "20b2aa",
    ZskyXe: "87cefa",
    ZUWay: "778899",
    ZUgYy: "778899",
    ZstAlXe: "b0c4de",
    ZLw: "ffffe0",
    lime: "ff00",
    limegYF: "32cd32",
    lRF: "faf0e6",
    magFta: "ff00ff",
    maPon: "800000",
    VaquamarRe: "66cdaa",
    VXe: "cd",
    VScEd: "ba55d3",
    VpurpN: "9370db",
    VsHgYF: "3cb371",
    VUXe: "7b68ee",
    VsprRggYF: "fa9a",
    VQe: "48d1cc",
    VviTetYd: "c71585",
    midnightXe: "191970",
    mRtcYam: "f5fffa",
    mistyPse: "ffe4e1",
    moccasR: "ffe4b5",
    navajowEte: "ffdead",
    navy: "80",
    Tdlace: "fdf5e6",
    Tive: "808000",
    TivedBb: "6b8e23",
    Sange: "ffa500",
    SangeYd: "ff4500",
    ScEd: "da70d6",
    pOegTMnPd: "eee8aa",
    pOegYF: "98fb98",
    pOeQe: "afeeee",
    pOeviTetYd: "db7093",
    papayawEp: "ffefd5",
    pHKpuff: "ffdab9",
    peru: "cd853f",
    pRk: "ffc0cb",
    plum: "dda0dd",
    powMrXe: "b0e0e6",
    purpN: "800080",
    YbeccapurpN: "663399",
    Yd: "ff0000",
    Psybrown: "bc8f8f",
    PyOXe: "4169e1",
    saddNbPwn: "8b4513",
    sOmon: "fa8072",
    sandybPwn: "f4a460",
    sHgYF: "2e8b57",
    sHshell: "fff5ee",
    siFna: "a0522d",
    silver: "c0c0c0",
    skyXe: "87ceeb",
    UXe: "6a5acd",
    UWay: "708090",
    UgYy: "708090",
    snow: "fffafa",
    sprRggYF: "ff7f",
    stAlXe: "4682b4",
    tan: "d2b48c",
    teO: "8080",
    tEstN: "d8bfd8",
    tomato: "ff6347",
    Qe: "40e0d0",
    viTet: "ee82ee",
    JHt: "f5deb3",
    wEte: "ffffff",
    wEtesmoke: "f5f5f5",
    Lw: "ffff00",
    LwgYF: "9acd32",
  };
function NS() {
  const n = {},
    t = Object.keys(bb),
    i = Object.keys(pb);
  let a, o, r, u, d;
  for (a = 0; a < t.length; a++) {
    for (u = d = t[a], o = 0; o < i.length; o++)
      ((r = i[o]), (d = d.replace(r, pb[r])));
    ((r = parseInt(bb[u], 16)),
      (n[d] = [(r >> 16) & 255, (r >> 8) & 255, r & 255]));
  }
  return n;
}
let Mr;
function OS(n) {
  Mr || ((Mr = NS()), (Mr.transparent = [0, 0, 0, 0]));
  const t = Mr[n.toLowerCase()];
  return t && { r: t[0], g: t[1], b: t[2], a: t.length === 4 ? t[3] : 255 };
}
const zS =
  /^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;
function DS(n) {
  const t = zS.exec(n);
  let i = 255,
    a,
    o,
    r;
  if (t) {
    if (t[7] !== a) {
      const u = +t[7];
      i = t[8] ? Tl(u) : qi(u * 255, 0, 255);
    }
    return (
      (a = +t[1]),
      (o = +t[3]),
      (r = +t[5]),
      (a = 255 & (t[2] ? Tl(a) : qi(a, 0, 255))),
      (o = 255 & (t[4] ? Tl(o) : qi(o, 0, 255))),
      (r = 255 & (t[6] ? Tl(r) : qi(r, 0, 255))),
      { r: a, g: o, b: r, a: i }
    );
  }
}
function LS(n) {
  return (
    n &&
    (n.a < 255
      ? `rgba(${n.r}, ${n.g}, ${n.b}, ${oi(n.a)})`
      : `rgb(${n.r}, ${n.g}, ${n.b})`)
  );
}
const Ud = (n) =>
    n <= 0.0031308 ? n * 12.92 : Math.pow(n, 1 / 2.4) * 1.055 - 0.055,
  pa = (n) => (n <= 0.04045 ? n / 12.92 : Math.pow((n + 0.055) / 1.055, 2.4));
function BS(n, t, i) {
  const a = pa(oi(n.r)),
    o = pa(oi(n.g)),
    r = pa(oi(n.b));
  return {
    r: Gi(Ud(a + i * (pa(oi(t.r)) - a))),
    g: Gi(Ud(o + i * (pa(oi(t.g)) - o))),
    b: Gi(Ud(r + i * (pa(oi(t.b)) - r))),
    a: n.a + i * (t.a - n.a),
  };
}
function Ar(n, t, i) {
  if (n) {
    let a = Rf(n);
    ((a[t] = Math.max(0, Math.min(a[t] + a[t] * i, t === 0 ? 360 : 1))),
      (a = Uf(a)),
      (n.r = a[0]),
      (n.g = a[1]),
      (n.b = a[2]));
  }
}
function Lx(n, t) {
  return n && Object.assign(t || {}, n);
}
function xb(n) {
  var t = { r: 0, g: 0, b: 0, a: 255 };
  return (
    Array.isArray(n)
      ? n.length >= 3 &&
        ((t = { r: n[0], g: n[1], b: n[2], a: 255 }),
        n.length > 3 && (t.a = Gi(n[3])))
      : ((t = Lx(n, { r: 0, g: 0, b: 0, a: 1 })), (t.a = Gi(t.a))),
    t
  );
}
function RS(n) {
  return n.charAt(0) === "r" ? DS(n) : CS(n);
}
class ql {
  constructor(t) {
    if (t instanceof ql) return t;
    const i = typeof t;
    let a;
    (i === "object"
      ? (a = xb(t))
      : i === "string" && (a = yS(t) || OS(t) || RS(t)),
      (this._rgb = a),
      (this._valid = !!a));
  }
  get valid() {
    return this._valid;
  }
  get rgb() {
    var t = Lx(this._rgb);
    return (t && (t.a = oi(t.a)), t);
  }
  set rgb(t) {
    this._rgb = xb(t);
  }
  rgbString() {
    return this._valid ? LS(this._rgb) : void 0;
  }
  hexString() {
    return this._valid ? wS(this._rgb) : void 0;
  }
  hslString() {
    return this._valid ? TS(this._rgb) : void 0;
  }
  mix(t, i) {
    if (t) {
      const a = this.rgb,
        o = t.rgb;
      let r;
      const u = i === r ? 0.5 : i,
        d = 2 * u - 1,
        h = a.a - o.a,
        g = ((d * h === -1 ? d : (d + h) / (1 + d * h)) + 1) / 2;
      ((r = 1 - g),
        (a.r = 255 & (g * a.r + r * o.r + 0.5)),
        (a.g = 255 & (g * a.g + r * o.g + 0.5)),
        (a.b = 255 & (g * a.b + r * o.b + 0.5)),
        (a.a = u * a.a + (1 - u) * o.a),
        (this.rgb = a));
    }
    return this;
  }
  interpolate(t, i) {
    return (t && (this._rgb = BS(this._rgb, t._rgb, i)), this);
  }
  clone() {
    return new ql(this.rgb);
  }
  alpha(t) {
    return ((this._rgb.a = Gi(t)), this);
  }
  clearer(t) {
    const i = this._rgb;
    return ((i.a *= 1 - t), this);
  }
  greyscale() {
    const t = this._rgb,
      i = eo(t.r * 0.3 + t.g * 0.59 + t.b * 0.11);
    return ((t.r = t.g = t.b = i), this);
  }
  opaquer(t) {
    const i = this._rgb;
    return ((i.a *= 1 + t), this);
  }
  negate() {
    const t = this._rgb;
    return ((t.r = 255 - t.r), (t.g = 255 - t.g), (t.b = 255 - t.b), this);
  }
  lighten(t) {
    return (Ar(this._rgb, 2, t), this);
  }
  darken(t) {
    return (Ar(this._rgb, 2, -t), this);
  }
  saturate(t) {
    return (Ar(this._rgb, 1, t), this);
  }
  desaturate(t) {
    return (Ar(this._rgb, 1, -t), this);
  }
  rotate(t) {
    return (jS(this._rgb, t), this);
  }
}
/*!
 * Chart.js v4.5.1
 * https://www.chartjs.org
 * (c) 2025 Chart.js Contributors
 * Released under the MIT License
 */ function si() {}
const HS = (() => {
  let n = 0;
  return () => n++;
})();
function yt(n) {
  return n == null;
}
function $t(n) {
  if (Array.isArray && Array.isArray(n)) return !0;
  const t = Object.prototype.toString.call(n);
  return t.slice(0, 7) === "[object" && t.slice(-6) === "Array]";
}
function St(n) {
  return n !== null && Object.prototype.toString.call(n) === "[object Object]";
}
function ne(n) {
  return (typeof n == "number" || n instanceof Number) && isFinite(+n);
}
function ln(n, t) {
  return ne(n) ? n : t;
}
function dt(n, t) {
  return typeof n > "u" ? t : n;
}
const US = (n, t) =>
    typeof n == "string" && n.endsWith("%") ? parseFloat(n) / 100 : +n / t,
  Bx = (n, t) =>
    typeof n == "string" && n.endsWith("%") ? (parseFloat(n) / 100) * t : +n;
function Pt(n, t, i) {
  if (n && typeof n.call == "function") return n.apply(i, t);
}
function Lt(n, t, i, a) {
  let o, r, u;
  if ($t(n)) for (r = n.length, o = 0; o < r; o++) t.call(i, n[o], o);
  else if (St(n))
    for (u = Object.keys(n), r = u.length, o = 0; o < r; o++)
      t.call(i, n[u[o]], u[o]);
}
function ec(n, t) {
  let i, a, o, r;
  if (!n || !t || n.length !== t.length) return !1;
  for (i = 0, a = n.length; i < a; ++i)
    if (
      ((o = n[i]),
      (r = t[i]),
      o.datasetIndex !== r.datasetIndex || o.index !== r.index)
    )
      return !1;
  return !0;
}
function nc(n) {
  if ($t(n)) return n.map(nc);
  if (St(n)) {
    const t = Object.create(null),
      i = Object.keys(n),
      a = i.length;
    let o = 0;
    for (; o < a; ++o) t[i[o]] = nc(n[i[o]]);
    return t;
  }
  return n;
}
function Rx(n) {
  return ["__proto__", "prototype", "constructor"].indexOf(n) === -1;
}
function VS(n, t, i, a) {
  if (!Rx(n)) return;
  const o = t[n],
    r = i[n];
  St(o) && St(r) ? Yl(o, r, a) : (t[n] = nc(r));
}
function Yl(n, t, i) {
  const a = $t(t) ? t : [t],
    o = a.length;
  if (!St(n)) return n;
  i = i || {};
  const r = i.merger || VS;
  let u;
  for (let d = 0; d < o; ++d) {
    if (((u = a[d]), !St(u))) continue;
    const h = Object.keys(u);
    for (let g = 0, p = h.length; g < p; ++g) r(h[g], n, u, i);
  }
  return n;
}
function Bl(n, t) {
  return Yl(n, t, { merger: qS });
}
function qS(n, t, i) {
  if (!Rx(n)) return;
  const a = t[n],
    o = i[n];
  St(a) && St(o)
    ? Bl(a, o)
    : Object.prototype.hasOwnProperty.call(t, n) || (t[n] = nc(o));
}
const yb = { "": (n) => n, x: (n) => n.x, y: (n) => n.y };
function YS(n) {
  const t = n.split("."),
    i = [];
  let a = "";
  for (const o of t)
    ((a += o),
      a.endsWith("\\") ? (a = a.slice(0, -1) + ".") : (i.push(a), (a = "")));
  return i;
}
function XS(n) {
  const t = YS(n);
  return (i) => {
    for (const a of t) {
      if (a === "") break;
      i = i && i[a];
    }
    return i;
  };
}
function Zi(n, t) {
  return (yb[t] || (yb[t] = XS(t)))(n);
}
function Vf(n) {
  return n.charAt(0).toUpperCase() + n.slice(1);
}
const Xl = (n) => typeof n < "u",
  Qi = (n) => typeof n == "function",
  vb = (n, t) => {
    if (n.size !== t.size) return !1;
    for (const i of n) if (!t.has(i)) return !1;
    return !0;
  };
function PS(n) {
  return n.type === "mouseup" || n.type === "click" || n.type === "contextmenu";
}
const jt = Math.PI,
  Zt = 2 * jt,
  FS = Zt + jt,
  ic = Number.POSITIVE_INFINITY,
  GS = jt / 180,
  re = jt / 2,
  ps = jt / 4,
  wb = (jt * 2) / 3,
  Yi = Math.log10,
  Bn = Math.sign;
function Rl(n, t, i) {
  return Math.abs(n - t) < i;
}
function _b(n) {
  const t = Math.round(n);
  n = Rl(n, t, n / 1e3) ? t : n;
  const i = Math.pow(10, Math.floor(Yi(n))),
    a = n / i;
  return (a <= 1 ? 1 : a <= 2 ? 2 : a <= 5 ? 5 : 10) * i;
}
function ZS(n) {
  const t = [],
    i = Math.sqrt(n);
  let a;
  for (a = 1; a < i; a++) n % a === 0 && (t.push(a), t.push(n / a));
  return (i === (i | 0) && t.push(i), t.sort((o, r) => o - r).pop(), t);
}
function QS(n) {
  return (
    typeof n == "symbol" ||
    (typeof n == "object" &&
      n !== null &&
      !(Symbol.toPrimitive in n || "toString" in n || "valueOf" in n))
  );
}
function Sa(n) {
  return !QS(n) && !isNaN(parseFloat(n)) && isFinite(n);
}
function KS(n, t) {
  const i = Math.round(n);
  return i - t <= n && i + t >= n;
}
function Hx(n, t, i) {
  let a, o, r;
  for (a = 0, o = n.length; a < o; a++)
    ((r = n[a][i]),
      isNaN(r) || ((t.min = Math.min(t.min, r)), (t.max = Math.max(t.max, r))));
}
function kn(n) {
  return n * (jt / 180);
}
function qf(n) {
  return n * (180 / jt);
}
function Sb(n) {
  if (!ne(n)) return;
  let t = 1,
    i = 0;
  for (; Math.round(n * t) / t !== n;) ((t *= 10), i++);
  return i;
}
function Ux(n, t) {
  const i = t.x - n.x,
    a = t.y - n.y,
    o = Math.sqrt(i * i + a * a);
  let r = Math.atan2(a, i);
  return (r < -0.5 * jt && (r += Zt), { angle: r, distance: o });
}
function lf(n, t) {
  return Math.sqrt(Math.pow(t.x - n.x, 2) + Math.pow(t.y - n.y, 2));
}
function WS(n, t) {
  return ((n - t + FS) % Zt) - jt;
}
function je(n) {
  return ((n % Zt) + Zt) % Zt;
}
function Pl(n, t, i, a) {
  const o = je(n),
    r = je(t),
    u = je(i),
    d = je(r - o),
    h = je(u - o),
    g = je(o - r),
    p = je(o - u);
  return o === r || o === u || (a && r === u) || (d > h && g < p);
}
function ve(n, t, i) {
  return Math.max(t, Math.min(i, n));
}
function $S(n) {
  return ve(n, -32768, 32767);
}
function ri(n, t, i, a = 1e-6) {
  return n >= Math.min(t, i) - a && n <= Math.max(t, i) + a;
}
function Yf(n, t, i) {
  i = i || ((u) => n[u] < t);
  let a = n.length - 1,
    o = 0,
    r;
  for (; a - o > 1;) ((r = (o + a) >> 1), i(r) ? (o = r) : (a = r));
  return { lo: o, hi: a };
}
const ci = (n, t, i, a) =>
    Yf(
      n,
      i,
      a
        ? (o) => {
            const r = n[o][t];
            return r < i || (r === i && n[o + 1][t] === i);
          }
        : (o) => n[o][t] < i,
    ),
  IS = (n, t, i) => Yf(n, i, (a) => n[a][t] >= i);
function JS(n, t, i) {
  let a = 0,
    o = n.length;
  for (; a < o && n[a] < t;) a++;
  for (; o > a && n[o - 1] > i;) o--;
  return a > 0 || o < n.length ? n.slice(a, o) : n;
}
const Vx = ["push", "pop", "shift", "splice", "unshift"];
function t5(n, t) {
  if (n._chartjs) {
    n._chartjs.listeners.push(t);
    return;
  }
  (Object.defineProperty(n, "_chartjs", {
    configurable: !0,
    enumerable: !1,
    value: { listeners: [t] },
  }),
    Vx.forEach((i) => {
      const a = "_onData" + Vf(i),
        o = n[i];
      Object.defineProperty(n, i, {
        configurable: !0,
        enumerable: !1,
        value(...r) {
          const u = o.apply(this, r);
          return (
            n._chartjs.listeners.forEach((d) => {
              typeof d[a] == "function" && d[a](...r);
            }),
            u
          );
        },
      });
    }));
}
function Mb(n, t) {
  const i = n._chartjs;
  if (!i) return;
  const a = i.listeners,
    o = a.indexOf(t);
  (o !== -1 && a.splice(o, 1),
    !(a.length > 0) &&
      (Vx.forEach((r) => {
        delete n[r];
      }),
      delete n._chartjs));
}
function qx(n) {
  const t = new Set(n);
  return t.size === n.length ? n : Array.from(t);
}
const Yx = (function () {
  return typeof window > "u"
    ? function (n) {
        return n();
      }
    : window.requestAnimationFrame;
})();
function Xx(n, t) {
  let i = [],
    a = !1;
  return function (...o) {
    ((i = o),
      a ||
        ((a = !0),
        Yx.call(window, () => {
          ((a = !1), n.apply(t, i));
        })));
  };
}
function e5(n, t) {
  let i;
  return function (...a) {
    return (
      t ? (clearTimeout(i), (i = setTimeout(n, t, a))) : n.apply(this, a),
      t
    );
  };
}
const Xf = (n) => (n === "start" ? "left" : n === "end" ? "right" : "center"),
  Ce = (n, t, i) => (n === "start" ? t : n === "end" ? i : (t + i) / 2),
  n5 = (n, t, i, a) =>
    n === (a ? "left" : "right") ? i : n === "center" ? (t + i) / 2 : t;
function Px(n, t, i) {
  const a = t.length;
  let o = 0,
    r = a;
  if (n._sorted) {
    const { iScale: u, vScale: d, _parsed: h } = n,
      g = n.dataset && n.dataset.options ? n.dataset.options.spanGaps : null,
      p = u.axis,
      { min: y, max: v, minDefined: _, maxDefined: S } = u.getUserBounds();
    if (_) {
      if (
        ((o = Math.min(
          ci(h, p, y).lo,
          i ? a : ci(t, p, u.getPixelForValue(y)).lo,
        )),
        g)
      ) {
        const M = h
          .slice(0, o + 1)
          .reverse()
          .findIndex((k) => !yt(k[d.axis]));
        o -= Math.max(0, M);
      }
      o = ve(o, 0, a - 1);
    }
    if (S) {
      let M = Math.max(
        ci(h, u.axis, v, !0).hi + 1,
        i ? 0 : ci(t, p, u.getPixelForValue(v), !0).hi + 1,
      );
      if (g) {
        const k = h.slice(M - 1).findIndex((j) => !yt(j[d.axis]));
        M += Math.max(0, k);
      }
      r = ve(M, o, a) - o;
    } else r = a - o;
  }
  return { start: o, count: r };
}
function Fx(n) {
  const { xScale: t, yScale: i, _scaleRanges: a } = n,
    o = { xmin: t.min, xmax: t.max, ymin: i.min, ymax: i.max };
  if (!a) return ((n._scaleRanges = o), !0);
  const r =
    a.xmin !== t.min ||
    a.xmax !== t.max ||
    a.ymin !== i.min ||
    a.ymax !== i.max;
  return (Object.assign(a, o), r);
}
const kr = (n) => n === 0 || n === 1,
  Ab = (n, t, i) =>
    -(Math.pow(2, 10 * (n -= 1)) * Math.sin(((n - t) * Zt) / i)),
  kb = (n, t, i) => Math.pow(2, -10 * n) * Math.sin(((n - t) * Zt) / i) + 1,
  Hl = {
    linear: (n) => n,
    easeInQuad: (n) => n * n,
    easeOutQuad: (n) => -n * (n - 2),
    easeInOutQuad: (n) =>
      (n /= 0.5) < 1 ? 0.5 * n * n : -0.5 * (--n * (n - 2) - 1),
    easeInCubic: (n) => n * n * n,
    easeOutCubic: (n) => (n -= 1) * n * n + 1,
    easeInOutCubic: (n) =>
      (n /= 0.5) < 1 ? 0.5 * n * n * n : 0.5 * ((n -= 2) * n * n + 2),
    easeInQuart: (n) => n * n * n * n,
    easeOutQuart: (n) => -((n -= 1) * n * n * n - 1),
    easeInOutQuart: (n) =>
      (n /= 0.5) < 1 ? 0.5 * n * n * n * n : -0.5 * ((n -= 2) * n * n * n - 2),
    easeInQuint: (n) => n * n * n * n * n,
    easeOutQuint: (n) => (n -= 1) * n * n * n * n + 1,
    easeInOutQuint: (n) =>
      (n /= 0.5) < 1
        ? 0.5 * n * n * n * n * n
        : 0.5 * ((n -= 2) * n * n * n * n + 2),
    easeInSine: (n) => -Math.cos(n * re) + 1,
    easeOutSine: (n) => Math.sin(n * re),
    easeInOutSine: (n) => -0.5 * (Math.cos(jt * n) - 1),
    easeInExpo: (n) => (n === 0 ? 0 : Math.pow(2, 10 * (n - 1))),
    easeOutExpo: (n) => (n === 1 ? 1 : -Math.pow(2, -10 * n) + 1),
    easeInOutExpo: (n) =>
      kr(n)
        ? n
        : n < 0.5
          ? 0.5 * Math.pow(2, 10 * (n * 2 - 1))
          : 0.5 * (-Math.pow(2, -10 * (n * 2 - 1)) + 2),
    easeInCirc: (n) => (n >= 1 ? n : -(Math.sqrt(1 - n * n) - 1)),
    easeOutCirc: (n) => Math.sqrt(1 - (n -= 1) * n),
    easeInOutCirc: (n) =>
      (n /= 0.5) < 1
        ? -0.5 * (Math.sqrt(1 - n * n) - 1)
        : 0.5 * (Math.sqrt(1 - (n -= 2) * n) + 1),
    easeInElastic: (n) => (kr(n) ? n : Ab(n, 0.075, 0.3)),
    easeOutElastic: (n) => (kr(n) ? n : kb(n, 0.075, 0.3)),
    easeInOutElastic(n) {
      return kr(n)
        ? n
        : n < 0.5
          ? 0.5 * Ab(n * 2, 0.1125, 0.45)
          : 0.5 + 0.5 * kb(n * 2 - 1, 0.1125, 0.45);
    },
    easeInBack(n) {
      return n * n * ((1.70158 + 1) * n - 1.70158);
    },
    easeOutBack(n) {
      return (n -= 1) * n * ((1.70158 + 1) * n + 1.70158) + 1;
    },
    easeInOutBack(n) {
      let t = 1.70158;
      return (n /= 0.5) < 1
        ? 0.5 * (n * n * (((t *= 1.525) + 1) * n - t))
        : 0.5 * ((n -= 2) * n * (((t *= 1.525) + 1) * n + t) + 2);
    },
    easeInBounce: (n) => 1 - Hl.easeOutBounce(1 - n),
    easeOutBounce(n) {
      return n < 1 / 2.75
        ? 7.5625 * n * n
        : n < 2 / 2.75
          ? 7.5625 * (n -= 1.5 / 2.75) * n + 0.75
          : n < 2.5 / 2.75
            ? 7.5625 * (n -= 2.25 / 2.75) * n + 0.9375
            : 7.5625 * (n -= 2.625 / 2.75) * n + 0.984375;
    },
    easeInOutBounce: (n) =>
      n < 0.5
        ? Hl.easeInBounce(n * 2) * 0.5
        : Hl.easeOutBounce(n * 2 - 1) * 0.5 + 0.5,
  };
function Pf(n) {
  if (n && typeof n == "object") {
    const t = n.toString();
    return t === "[object CanvasPattern]" || t === "[object CanvasGradient]";
  }
  return !1;
}
function Eb(n) {
  return Pf(n) ? n : new ql(n);
}
function Vd(n) {
  return Pf(n) ? n : new ql(n).saturate(0.5).darken(0.1).hexString();
}
const i5 = ["x", "y", "borderWidth", "radius", "tension"],
  s5 = ["color", "borderColor", "backgroundColor"];
function a5(n) {
  (n.set("animation", {
    delay: void 0,
    duration: 1e3,
    easing: "easeOutQuart",
    fn: void 0,
    from: void 0,
    loop: void 0,
    to: void 0,
    type: void 0,
  }),
    n.describe("animation", {
      _fallback: !1,
      _indexable: !1,
      _scriptable: (t) =>
        t !== "onProgress" && t !== "onComplete" && t !== "fn",
    }),
    n.set("animations", {
      colors: { type: "color", properties: s5 },
      numbers: { type: "number", properties: i5 },
    }),
    n.describe("animations", { _fallback: "animation" }),
    n.set("transitions", {
      active: { animation: { duration: 400 } },
      resize: { animation: { duration: 0 } },
      show: {
        animations: {
          colors: { from: "transparent" },
          visible: { type: "boolean", duration: 0 },
        },
      },
      hide: {
        animations: {
          colors: { to: "transparent" },
          visible: { type: "boolean", easing: "linear", fn: (t) => t | 0 },
        },
      },
    }));
}
function l5(n) {
  n.set("layout", {
    autoPadding: !0,
    padding: { top: 0, right: 0, bottom: 0, left: 0 },
  });
}
const Cb = new Map();
function o5(n, t) {
  t = t || {};
  const i = n + JSON.stringify(t);
  let a = Cb.get(i);
  return (a || ((a = new Intl.NumberFormat(n, t)), Cb.set(i, a)), a);
}
function no(n, t, i) {
  return o5(t, i).format(n);
}
const Gx = {
  values(n) {
    return $t(n) ? n : "" + n;
  },
  numeric(n, t, i) {
    if (n === 0) return "0";
    const a = this.chart.options.locale;
    let o,
      r = n;
    if (i.length > 1) {
      const g = Math.max(Math.abs(i[0].value), Math.abs(i[i.length - 1].value));
      ((g < 1e-4 || g > 1e15) && (o = "scientific"), (r = r5(n, i)));
    }
    const u = Yi(Math.abs(r)),
      d = isNaN(u) ? 1 : Math.max(Math.min(-1 * Math.floor(u), 20), 0),
      h = { notation: o, minimumFractionDigits: d, maximumFractionDigits: d };
    return (Object.assign(h, this.options.ticks.format), no(n, a, h));
  },
  logarithmic(n, t, i) {
    if (n === 0) return "0";
    const a = i[t].significand || n / Math.pow(10, Math.floor(Yi(n)));
    return [1, 2, 3, 5, 10, 15].includes(a) || t > 0.8 * i.length
      ? Gx.numeric.call(this, n, t, i)
      : "";
  },
};
function r5(n, t) {
  let i = t.length > 3 ? t[2].value - t[1].value : t[1].value - t[0].value;
  return (
    Math.abs(i) >= 1 && n !== Math.floor(n) && (i = n - Math.floor(n)),
    i
  );
}
var mc = { formatters: Gx };
function c5(n) {
  (n.set("scale", {
    display: !0,
    offset: !1,
    reverse: !1,
    beginAtZero: !1,
    bounds: "ticks",
    clip: !0,
    grace: 0,
    grid: {
      display: !0,
      lineWidth: 1,
      drawOnChartArea: !0,
      drawTicks: !0,
      tickLength: 8,
      tickWidth: (t, i) => i.lineWidth,
      tickColor: (t, i) => i.color,
      offset: !1,
    },
    border: { display: !0, dash: [], dashOffset: 0, width: 1 },
    title: { display: !1, text: "", padding: { top: 4, bottom: 4 } },
    ticks: {
      minRotation: 0,
      maxRotation: 50,
      mirror: !1,
      textStrokeWidth: 0,
      textStrokeColor: "",
      padding: 3,
      display: !0,
      autoSkip: !0,
      autoSkipPadding: 3,
      labelOffset: 0,
      callback: mc.formatters.values,
      minor: {},
      major: {},
      align: "center",
      crossAlign: "near",
      showLabelBackdrop: !1,
      backdropColor: "rgba(255, 255, 255, 0.75)",
      backdropPadding: 2,
    },
  }),
    n.route("scale.ticks", "color", "", "color"),
    n.route("scale.grid", "color", "", "borderColor"),
    n.route("scale.border", "color", "", "borderColor"),
    n.route("scale.title", "color", "", "color"),
    n.describe("scale", {
      _fallback: !1,
      _scriptable: (t) =>
        !t.startsWith("before") &&
        !t.startsWith("after") &&
        t !== "callback" &&
        t !== "parser",
      _indexable: (t) =>
        t !== "borderDash" && t !== "tickBorderDash" && t !== "dash",
    }),
    n.describe("scales", { _fallback: "scale" }),
    n.describe("scale.ticks", {
      _scriptable: (t) => t !== "backdropPadding" && t !== "callback",
      _indexable: (t) => t !== "backdropPadding",
    }));
}
const Es = Object.create(null),
  of = Object.create(null);
function Ul(n, t) {
  if (!t) return n;
  const i = t.split(".");
  for (let a = 0, o = i.length; a < o; ++a) {
    const r = i[a];
    n = n[r] || (n[r] = Object.create(null));
  }
  return n;
}
function qd(n, t, i) {
  return typeof t == "string" ? Yl(Ul(n, t), i) : Yl(Ul(n, ""), t);
}
class u5 {
  constructor(t, i) {
    ((this.animation = void 0),
      (this.backgroundColor = "rgba(0,0,0,0.1)"),
      (this.borderColor = "rgba(0,0,0,0.1)"),
      (this.color = "#666"),
      (this.datasets = {}),
      (this.devicePixelRatio = (a) => a.chart.platform.getDevicePixelRatio()),
      (this.elements = {}),
      (this.events = [
        "mousemove",
        "mouseout",
        "click",
        "touchstart",
        "touchmove",
      ]),
      (this.font = {
        family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
        size: 12,
        style: "normal",
        lineHeight: 1.2,
        weight: null,
      }),
      (this.hover = {}),
      (this.hoverBackgroundColor = (a, o) => Vd(o.backgroundColor)),
      (this.hoverBorderColor = (a, o) => Vd(o.borderColor)),
      (this.hoverColor = (a, o) => Vd(o.color)),
      (this.indexAxis = "x"),
      (this.interaction = {
        mode: "nearest",
        intersect: !0,
        includeInvisible: !1,
      }),
      (this.maintainAspectRatio = !0),
      (this.onHover = null),
      (this.onClick = null),
      (this.parsing = !0),
      (this.plugins = {}),
      (this.responsive = !0),
      (this.scale = void 0),
      (this.scales = {}),
      (this.showLine = !0),
      (this.drawActiveElementsOnTop = !0),
      this.describe(t),
      this.apply(i));
  }
  set(t, i) {
    return qd(this, t, i);
  }
  get(t) {
    return Ul(this, t);
  }
  describe(t, i) {
    return qd(of, t, i);
  }
  override(t, i) {
    return qd(Es, t, i);
  }
  route(t, i, a, o) {
    const r = Ul(this, t),
      u = Ul(this, a),
      d = "_" + i;
    Object.defineProperties(r, {
      [d]: { value: r[i], writable: !0 },
      [i]: {
        enumerable: !0,
        get() {
          const h = this[d],
            g = u[o];
          return St(h) ? Object.assign({}, g, h) : dt(h, g);
        },
        set(h) {
          this[d] = h;
        },
      },
    });
  }
  apply(t) {
    t.forEach((i) => i(this));
  }
}
var It = new u5(
  {
    _scriptable: (n) => !n.startsWith("on"),
    _indexable: (n) => n !== "events",
    hover: { _fallback: "interaction" },
    interaction: { _scriptable: !1, _indexable: !1 },
  },
  [a5, l5, c5],
);
function d5(n) {
  return !n || yt(n.size) || yt(n.family)
    ? null
    : (n.style ? n.style + " " : "") +
        (n.weight ? n.weight + " " : "") +
        n.size +
        "px " +
        n.family;
}
function sc(n, t, i, a, o) {
  let r = t[o];
  return (
    r || ((r = t[o] = n.measureText(o).width), i.push(o)),
    r > a && (a = r),
    a
  );
}
function f5(n, t, i, a) {
  a = a || {};
  let o = (a.data = a.data || {}),
    r = (a.garbageCollect = a.garbageCollect || []);
  (a.font !== t &&
    ((o = a.data = {}), (r = a.garbageCollect = []), (a.font = t)),
    n.save(),
    (n.font = t));
  let u = 0;
  const d = i.length;
  let h, g, p, y, v;
  for (h = 0; h < d; h++)
    if (((y = i[h]), y != null && !$t(y))) u = sc(n, o, r, u, y);
    else if ($t(y))
      for (g = 0, p = y.length; g < p; g++)
        ((v = y[g]), v != null && !$t(v) && (u = sc(n, o, r, u, v)));
  n.restore();
  const _ = r.length / 2;
  if (_ > i.length) {
    for (h = 0; h < _; h++) delete o[r[h]];
    r.splice(0, _);
  }
  return u;
}
function bs(n, t, i) {
  const a = n.currentDevicePixelRatio,
    o = i !== 0 ? Math.max(i / 2, 0.5) : 0;
  return Math.round((t - o) * a) / a + o;
}
function jb(n, t) {
  (!t && !n) ||
    ((t = t || n.getContext("2d")),
    t.save(),
    t.resetTransform(),
    t.clearRect(0, 0, n.width, n.height),
    t.restore());
}
function rf(n, t, i, a) {
  Zx(n, t, i, a, null);
}
function Zx(n, t, i, a, o) {
  let r, u, d, h, g, p, y, v;
  const _ = t.pointStyle,
    S = t.rotation,
    M = t.radius;
  let k = (S || 0) * GS;
  if (
    _ &&
    typeof _ == "object" &&
    ((r = _.toString()),
    r === "[object HTMLImageElement]" || r === "[object HTMLCanvasElement]")
  ) {
    (n.save(),
      n.translate(i, a),
      n.rotate(k),
      n.drawImage(_, -_.width / 2, -_.height / 2, _.width, _.height),
      n.restore());
    return;
  }
  if (!(isNaN(M) || M <= 0)) {
    switch ((n.beginPath(), _)) {
      default:
        (o ? n.ellipse(i, a, o / 2, M, 0, 0, Zt) : n.arc(i, a, M, 0, Zt),
          n.closePath());
        break;
      case "triangle":
        ((p = o ? o / 2 : M),
          n.moveTo(i + Math.sin(k) * p, a - Math.cos(k) * M),
          (k += wb),
          n.lineTo(i + Math.sin(k) * p, a - Math.cos(k) * M),
          (k += wb),
          n.lineTo(i + Math.sin(k) * p, a - Math.cos(k) * M),
          n.closePath());
        break;
      case "rectRounded":
        ((g = M * 0.516),
          (h = M - g),
          (u = Math.cos(k + ps) * h),
          (y = Math.cos(k + ps) * (o ? o / 2 - g : h)),
          (d = Math.sin(k + ps) * h),
          (v = Math.sin(k + ps) * (o ? o / 2 - g : h)),
          n.arc(i - y, a - d, g, k - jt, k - re),
          n.arc(i + v, a - u, g, k - re, k),
          n.arc(i + y, a + d, g, k, k + re),
          n.arc(i - v, a + u, g, k + re, k + jt),
          n.closePath());
        break;
      case "rect":
        if (!S) {
          ((h = Math.SQRT1_2 * M),
            (p = o ? o / 2 : h),
            n.rect(i - p, a - h, 2 * p, 2 * h));
          break;
        }
        k += ps;
      case "rectRot":
        ((y = Math.cos(k) * (o ? o / 2 : M)),
          (u = Math.cos(k) * M),
          (d = Math.sin(k) * M),
          (v = Math.sin(k) * (o ? o / 2 : M)),
          n.moveTo(i - y, a - d),
          n.lineTo(i + v, a - u),
          n.lineTo(i + y, a + d),
          n.lineTo(i - v, a + u),
          n.closePath());
        break;
      case "crossRot":
        k += ps;
      case "cross":
        ((y = Math.cos(k) * (o ? o / 2 : M)),
          (u = Math.cos(k) * M),
          (d = Math.sin(k) * M),
          (v = Math.sin(k) * (o ? o / 2 : M)),
          n.moveTo(i - y, a - d),
          n.lineTo(i + y, a + d),
          n.moveTo(i + v, a - u),
          n.lineTo(i - v, a + u));
        break;
      case "star":
        ((y = Math.cos(k) * (o ? o / 2 : M)),
          (u = Math.cos(k) * M),
          (d = Math.sin(k) * M),
          (v = Math.sin(k) * (o ? o / 2 : M)),
          n.moveTo(i - y, a - d),
          n.lineTo(i + y, a + d),
          n.moveTo(i + v, a - u),
          n.lineTo(i - v, a + u),
          (k += ps),
          (y = Math.cos(k) * (o ? o / 2 : M)),
          (u = Math.cos(k) * M),
          (d = Math.sin(k) * M),
          (v = Math.sin(k) * (o ? o / 2 : M)),
          n.moveTo(i - y, a - d),
          n.lineTo(i + y, a + d),
          n.moveTo(i + v, a - u),
          n.lineTo(i - v, a + u));
        break;
      case "line":
        ((u = o ? o / 2 : Math.cos(k) * M),
          (d = Math.sin(k) * M),
          n.moveTo(i - u, a - d),
          n.lineTo(i + u, a + d));
        break;
      case "dash":
        (n.moveTo(i, a),
          n.lineTo(i + Math.cos(k) * (o ? o / 2 : M), a + Math.sin(k) * M));
        break;
      case !1:
        n.closePath();
        break;
    }
    (n.fill(), t.borderWidth > 0 && n.stroke());
  }
}
function ui(n, t, i) {
  return (
    (i = i || 0.5),
    !t ||
      (n &&
        n.x > t.left - i &&
        n.x < t.right + i &&
        n.y > t.top - i &&
        n.y < t.bottom + i)
  );
}
function gc(n, t) {
  (n.save(),
    n.beginPath(),
    n.rect(t.left, t.top, t.right - t.left, t.bottom - t.top),
    n.clip());
}
function pc(n) {
  n.restore();
}
function h5(n, t, i, a, o) {
  if (!t) return n.lineTo(i.x, i.y);
  if (o === "middle") {
    const r = (t.x + i.x) / 2;
    (n.lineTo(r, t.y), n.lineTo(r, i.y));
  } else (o === "after") != !!a ? n.lineTo(t.x, i.y) : n.lineTo(i.x, t.y);
  n.lineTo(i.x, i.y);
}
function m5(n, t, i, a) {
  if (!t) return n.lineTo(i.x, i.y);
  n.bezierCurveTo(
    a ? t.cp1x : t.cp2x,
    a ? t.cp1y : t.cp2y,
    a ? i.cp2x : i.cp1x,
    a ? i.cp2y : i.cp1y,
    i.x,
    i.y,
  );
}
function g5(n, t) {
  (t.translation && n.translate(t.translation[0], t.translation[1]),
    yt(t.rotation) || n.rotate(t.rotation),
    t.color && (n.fillStyle = t.color),
    t.textAlign && (n.textAlign = t.textAlign),
    t.textBaseline && (n.textBaseline = t.textBaseline));
}
function p5(n, t, i, a, o) {
  if (o.strikethrough || o.underline) {
    const r = n.measureText(a),
      u = t - r.actualBoundingBoxLeft,
      d = t + r.actualBoundingBoxRight,
      h = i - r.actualBoundingBoxAscent,
      g = i + r.actualBoundingBoxDescent,
      p = o.strikethrough ? (h + g) / 2 : g;
    ((n.strokeStyle = n.fillStyle),
      n.beginPath(),
      (n.lineWidth = o.decorationWidth || 2),
      n.moveTo(u, p),
      n.lineTo(d, p),
      n.stroke());
  }
}
function b5(n, t) {
  const i = n.fillStyle;
  ((n.fillStyle = t.color),
    n.fillRect(t.left, t.top, t.width, t.height),
    (n.fillStyle = i));
}
function Cs(n, t, i, a, o, r = {}) {
  const u = $t(t) ? t : [t],
    d = r.strokeWidth > 0 && r.strokeColor !== "";
  let h, g;
  for (n.save(), n.font = o.string, g5(n, r), h = 0; h < u.length; ++h)
    ((g = u[h]),
      r.backdrop && b5(n, r.backdrop),
      d &&
        (r.strokeColor && (n.strokeStyle = r.strokeColor),
        yt(r.strokeWidth) || (n.lineWidth = r.strokeWidth),
        n.strokeText(g, i, a, r.maxWidth)),
      n.fillText(g, i, a, r.maxWidth),
      p5(n, i, a, g, r),
      (a += Number(o.lineHeight)));
  n.restore();
}
function Fl(n, t) {
  const { x: i, y: a, w: o, h: r, radius: u } = t;
  (n.arc(i + u.topLeft, a + u.topLeft, u.topLeft, 1.5 * jt, jt, !0),
    n.lineTo(i, a + r - u.bottomLeft),
    n.arc(i + u.bottomLeft, a + r - u.bottomLeft, u.bottomLeft, jt, re, !0),
    n.lineTo(i + o - u.bottomRight, a + r),
    n.arc(
      i + o - u.bottomRight,
      a + r - u.bottomRight,
      u.bottomRight,
      re,
      0,
      !0,
    ),
    n.lineTo(i + o, a + u.topRight),
    n.arc(i + o - u.topRight, a + u.topRight, u.topRight, 0, -re, !0),
    n.lineTo(i + u.topLeft, a));
}
const x5 = /^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/,
  y5 = /^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/;
function v5(n, t) {
  const i = ("" + n).match(x5);
  if (!i || i[1] === "normal") return t * 1.2;
  switch (((n = +i[2]), i[3])) {
    case "px":
      return n;
    case "%":
      n /= 100;
      break;
  }
  return t * n;
}
const w5 = (n) => +n || 0;
function Ff(n, t) {
  const i = {},
    a = St(t),
    o = a ? Object.keys(t) : t,
    r = St(n) ? (a ? (u) => dt(n[u], n[t[u]]) : (u) => n[u]) : () => n;
  for (const u of o) i[u] = w5(r(u));
  return i;
}
function Qx(n) {
  return Ff(n, { top: "y", right: "x", bottom: "y", left: "x" });
}
function Ms(n) {
  return Ff(n, ["topLeft", "topRight", "bottomLeft", "bottomRight"]);
}
function Oe(n) {
  const t = Qx(n);
  return ((t.width = t.left + t.right), (t.height = t.top + t.bottom), t);
}
function be(n, t) {
  ((n = n || {}), (t = t || It.font));
  let i = dt(n.size, t.size);
  typeof i == "string" && (i = parseInt(i, 10));
  let a = dt(n.style, t.style);
  a &&
    !("" + a).match(y5) &&
    (console.warn('Invalid font style specified: "' + a + '"'), (a = void 0));
  const o = {
    family: dt(n.family, t.family),
    lineHeight: v5(dt(n.lineHeight, t.lineHeight), i),
    size: i,
    style: a,
    weight: dt(n.weight, t.weight),
    string: "",
  };
  return ((o.string = d5(o)), o);
}
function Nl(n, t, i, a) {
  let o, r, u;
  for (o = 0, r = n.length; o < r; ++o)
    if (((u = n[o]), u !== void 0 && u !== void 0)) return u;
}
function _5(n, t, i) {
  const { min: a, max: o } = n,
    r = Bx(t, (o - a) / 2),
    u = (d, h) => (i && d === 0 ? 0 : d + h);
  return { min: u(a, -Math.abs(r)), max: u(o, r) };
}
function Ki(n, t) {
  return Object.assign(Object.create(n), t);
}
function Gf(n, t = [""], i, a, o = () => n[0]) {
  const r = i || n;
  typeof a > "u" && (a = Ix("_fallback", n));
  const u = {
    [Symbol.toStringTag]: "Object",
    _cacheable: !0,
    _scopes: n,
    _rootScopes: r,
    _fallback: a,
    _getTarget: o,
    override: (d) => Gf([d, ...n], t, r, a),
  };
  return new Proxy(u, {
    deleteProperty(d, h) {
      return (delete d[h], delete d._keys, delete n[0][h], !0);
    },
    get(d, h) {
      return Wx(d, h, () => T5(h, t, n, d));
    },
    getOwnPropertyDescriptor(d, h) {
      return Reflect.getOwnPropertyDescriptor(d._scopes[0], h);
    },
    getPrototypeOf() {
      return Reflect.getPrototypeOf(n[0]);
    },
    has(d, h) {
      return Nb(d).includes(h);
    },
    ownKeys(d) {
      return Nb(d);
    },
    set(d, h, g) {
      const p = d._storage || (d._storage = o());
      return ((d[h] = p[h] = g), delete d._keys, !0);
    },
  });
}
function Ma(n, t, i, a) {
  const o = {
    _cacheable: !1,
    _proxy: n,
    _context: t,
    _subProxy: i,
    _stack: new Set(),
    _descriptors: Kx(n, a),
    setContext: (r) => Ma(n, r, i, a),
    override: (r) => Ma(n.override(r), t, i, a),
  };
  return new Proxy(o, {
    deleteProperty(r, u) {
      return (delete r[u], delete n[u], !0);
    },
    get(r, u, d) {
      return Wx(r, u, () => M5(r, u, d));
    },
    getOwnPropertyDescriptor(r, u) {
      return r._descriptors.allKeys
        ? Reflect.has(n, u)
          ? { enumerable: !0, configurable: !0 }
          : void 0
        : Reflect.getOwnPropertyDescriptor(n, u);
    },
    getPrototypeOf() {
      return Reflect.getPrototypeOf(n);
    },
    has(r, u) {
      return Reflect.has(n, u);
    },
    ownKeys() {
      return Reflect.ownKeys(n);
    },
    set(r, u, d) {
      return ((n[u] = d), delete r[u], !0);
    },
  });
}
function Kx(n, t = { scriptable: !0, indexable: !0 }) {
  const {
    _scriptable: i = t.scriptable,
    _indexable: a = t.indexable,
    _allKeys: o = t.allKeys,
  } = n;
  return {
    allKeys: o,
    scriptable: i,
    indexable: a,
    isScriptable: Qi(i) ? i : () => i,
    isIndexable: Qi(a) ? a : () => a,
  };
}
const S5 = (n, t) => (n ? n + Vf(t) : t),
  Zf = (n, t) =>
    St(t) &&
    n !== "adapters" &&
    (Object.getPrototypeOf(t) === null || t.constructor === Object);
function Wx(n, t, i) {
  if (Object.prototype.hasOwnProperty.call(n, t) || t === "constructor")
    return n[t];
  const a = i();
  return ((n[t] = a), a);
}
function M5(n, t, i) {
  const { _proxy: a, _context: o, _subProxy: r, _descriptors: u } = n;
  let d = a[t];
  return (
    Qi(d) && u.isScriptable(t) && (d = A5(t, d, n, i)),
    $t(d) && d.length && (d = k5(t, d, n, u.isIndexable)),
    Zf(t, d) && (d = Ma(d, o, r && r[t], u)),
    d
  );
}
function A5(n, t, i, a) {
  const { _proxy: o, _context: r, _subProxy: u, _stack: d } = i;
  if (d.has(n))
    throw new Error(
      "Recursion detected: " + Array.from(d).join("->") + "->" + n,
    );
  d.add(n);
  let h = t(r, u || a);
  return (d.delete(n), Zf(n, h) && (h = Qf(o._scopes, o, n, h)), h);
}
function k5(n, t, i, a) {
  const { _proxy: o, _context: r, _subProxy: u, _descriptors: d } = i;
  if (typeof r.index < "u" && a(n)) return t[r.index % t.length];
  if (St(t[0])) {
    const h = t,
      g = o._scopes.filter((p) => p !== h);
    t = [];
    for (const p of h) {
      const y = Qf(g, o, n, p);
      t.push(Ma(y, r, u && u[n], d));
    }
  }
  return t;
}
function $x(n, t, i) {
  return Qi(n) ? n(t, i) : n;
}
const E5 = (n, t) => (n === !0 ? t : typeof n == "string" ? Zi(t, n) : void 0);
function C5(n, t, i, a, o) {
  for (const r of t) {
    const u = E5(i, r);
    if (u) {
      n.add(u);
      const d = $x(u._fallback, i, o);
      if (typeof d < "u" && d !== i && d !== a) return d;
    } else if (u === !1 && typeof a < "u" && i !== a) return null;
  }
  return !1;
}
function Qf(n, t, i, a) {
  const o = t._rootScopes,
    r = $x(t._fallback, i, a),
    u = [...n, ...o],
    d = new Set();
  d.add(a);
  let h = Tb(d, u, i, r || i, a);
  return h === null ||
    (typeof r < "u" && r !== i && ((h = Tb(d, u, r, h, a)), h === null))
    ? !1
    : Gf(Array.from(d), [""], o, r, () => j5(t, i, a));
}
function Tb(n, t, i, a, o) {
  for (; i;) i = C5(n, t, i, a, o);
  return i;
}
function j5(n, t, i) {
  const a = n._getTarget();
  t in a || (a[t] = {});
  const o = a[t];
  return $t(o) && St(i) ? i : o || {};
}
function T5(n, t, i, a) {
  let o;
  for (const r of t)
    if (((o = Ix(S5(r, n), i)), typeof o < "u"))
      return Zf(n, o) ? Qf(i, a, n, o) : o;
}
function Ix(n, t) {
  for (const i of t) {
    if (!i) continue;
    const a = i[n];
    if (typeof a < "u") return a;
  }
}
function Nb(n) {
  let t = n._keys;
  return (t || (t = n._keys = N5(n._scopes)), t);
}
function N5(n) {
  const t = new Set();
  for (const i of n)
    for (const a of Object.keys(i).filter((o) => !o.startsWith("_"))) t.add(a);
  return Array.from(t);
}
function Jx(n, t, i, a) {
  const { iScale: o } = n,
    { key: r = "r" } = this._parsing,
    u = new Array(a);
  let d, h, g, p;
  for (d = 0, h = a; d < h; ++d)
    ((g = d + i), (p = t[g]), (u[d] = { r: o.parse(Zi(p, r), g) }));
  return u;
}
const O5 = Number.EPSILON || 1e-14,
  Aa = (n, t) => t < n.length && !n[t].skip && n[t],
  ty = (n) => (n === "x" ? "y" : "x");
function z5(n, t, i, a) {
  const o = n.skip ? t : n,
    r = t,
    u = i.skip ? t : i,
    d = lf(r, o),
    h = lf(u, r);
  let g = d / (d + h),
    p = h / (d + h);
  ((g = isNaN(g) ? 0 : g), (p = isNaN(p) ? 0 : p));
  const y = a * g,
    v = a * p;
  return {
    previous: { x: r.x - y * (u.x - o.x), y: r.y - y * (u.y - o.y) },
    next: { x: r.x + v * (u.x - o.x), y: r.y + v * (u.y - o.y) },
  };
}
function D5(n, t, i) {
  const a = n.length;
  let o,
    r,
    u,
    d,
    h,
    g = Aa(n, 0);
  for (let p = 0; p < a - 1; ++p)
    if (((h = g), (g = Aa(n, p + 1)), !(!h || !g))) {
      if (Rl(t[p], 0, O5)) {
        i[p] = i[p + 1] = 0;
        continue;
      }
      ((o = i[p] / t[p]),
        (r = i[p + 1] / t[p]),
        (d = Math.pow(o, 2) + Math.pow(r, 2)),
        !(d <= 9) &&
          ((u = 3 / Math.sqrt(d)),
          (i[p] = o * u * t[p]),
          (i[p + 1] = r * u * t[p])));
    }
}
function L5(n, t, i = "x") {
  const a = ty(i),
    o = n.length;
  let r,
    u,
    d,
    h = Aa(n, 0);
  for (let g = 0; g < o; ++g) {
    if (((u = d), (d = h), (h = Aa(n, g + 1)), !d)) continue;
    const p = d[i],
      y = d[a];
    (u &&
      ((r = (p - u[i]) / 3),
      (d[`cp1${i}`] = p - r),
      (d[`cp1${a}`] = y - r * t[g])),
      h &&
        ((r = (h[i] - p) / 3),
        (d[`cp2${i}`] = p + r),
        (d[`cp2${a}`] = y + r * t[g])));
  }
}
function B5(n, t = "x") {
  const i = ty(t),
    a = n.length,
    o = Array(a).fill(0),
    r = Array(a);
  let u,
    d,
    h,
    g = Aa(n, 0);
  for (u = 0; u < a; ++u)
    if (((d = h), (h = g), (g = Aa(n, u + 1)), !!h)) {
      if (g) {
        const p = g[t] - h[t];
        o[u] = p !== 0 ? (g[i] - h[i]) / p : 0;
      }
      r[u] = d
        ? g
          ? Bn(o[u - 1]) !== Bn(o[u])
            ? 0
            : (o[u - 1] + o[u]) / 2
          : o[u - 1]
        : o[u];
    }
  (D5(n, o, r), L5(n, r, t));
}
function Er(n, t, i) {
  return Math.max(Math.min(n, i), t);
}
function R5(n, t) {
  let i,
    a,
    o,
    r,
    u,
    d = ui(n[0], t);
  for (i = 0, a = n.length; i < a; ++i)
    ((u = r),
      (r = d),
      (d = i < a - 1 && ui(n[i + 1], t)),
      r &&
        ((o = n[i]),
        u &&
          ((o.cp1x = Er(o.cp1x, t.left, t.right)),
          (o.cp1y = Er(o.cp1y, t.top, t.bottom))),
        d &&
          ((o.cp2x = Er(o.cp2x, t.left, t.right)),
          (o.cp2y = Er(o.cp2y, t.top, t.bottom)))));
}
function H5(n, t, i, a, o) {
  let r, u, d, h;
  if (
    (t.spanGaps && (n = n.filter((g) => !g.skip)),
    t.cubicInterpolationMode === "monotone")
  )
    B5(n, o);
  else {
    let g = a ? n[n.length - 1] : n[0];
    for (r = 0, u = n.length; r < u; ++r)
      ((d = n[r]),
        (h = z5(g, d, n[Math.min(r + 1, u - (a ? 0 : 1)) % u], t.tension)),
        (d.cp1x = h.previous.x),
        (d.cp1y = h.previous.y),
        (d.cp2x = h.next.x),
        (d.cp2y = h.next.y),
        (g = d));
  }
  t.capBezierPoints && R5(n, i);
}
function Kf() {
  return typeof window < "u" && typeof document < "u";
}
function Wf(n) {
  let t = n.parentNode;
  return (t && t.toString() === "[object ShadowRoot]" && (t = t.host), t);
}
function ac(n, t, i) {
  let a;
  return (
    typeof n == "string"
      ? ((a = parseInt(n, 10)),
        n.indexOf("%") !== -1 && (a = (a / 100) * t.parentNode[i]))
      : (a = n),
    a
  );
}
const bc = (n) => n.ownerDocument.defaultView.getComputedStyle(n, null);
function U5(n, t) {
  return bc(n).getPropertyValue(t);
}
const V5 = ["top", "right", "bottom", "left"];
function As(n, t, i) {
  const a = {};
  i = i ? "-" + i : "";
  for (let o = 0; o < 4; o++) {
    const r = V5[o];
    a[r] = parseFloat(n[t + "-" + r + i]) || 0;
  }
  return ((a.width = a.left + a.right), (a.height = a.top + a.bottom), a);
}
const q5 = (n, t, i) => (n > 0 || t > 0) && (!i || !i.shadowRoot);
function Y5(n, t) {
  const i = n.touches,
    a = i && i.length ? i[0] : n,
    { offsetX: o, offsetY: r } = a;
  let u = !1,
    d,
    h;
  if (q5(o, r, n.target)) ((d = o), (h = r));
  else {
    const g = t.getBoundingClientRect();
    ((d = a.clientX - g.left), (h = a.clientY - g.top), (u = !0));
  }
  return { x: d, y: h, box: u };
}
function vs(n, t) {
  if ("native" in n) return n;
  const { canvas: i, currentDevicePixelRatio: a } = t,
    o = bc(i),
    r = o.boxSizing === "border-box",
    u = As(o, "padding"),
    d = As(o, "border", "width"),
    { x: h, y: g, box: p } = Y5(n, i),
    y = u.left + (p && d.left),
    v = u.top + (p && d.top);
  let { width: _, height: S } = t;
  return (
    r && ((_ -= u.width + d.width), (S -= u.height + d.height)),
    {
      x: Math.round((((h - y) / _) * i.width) / a),
      y: Math.round((((g - v) / S) * i.height) / a),
    }
  );
}
function X5(n, t, i) {
  let a, o;
  if (t === void 0 || i === void 0) {
    const r = n && Wf(n);
    if (!r) ((t = n.clientWidth), (i = n.clientHeight));
    else {
      const u = r.getBoundingClientRect(),
        d = bc(r),
        h = As(d, "border", "width"),
        g = As(d, "padding");
      ((t = u.width - g.width - h.width),
        (i = u.height - g.height - h.height),
        (a = ac(d.maxWidth, r, "clientWidth")),
        (o = ac(d.maxHeight, r, "clientHeight")));
    }
  }
  return { width: t, height: i, maxWidth: a || ic, maxHeight: o || ic };
}
const Xi = (n) => Math.round(n * 10) / 10;
function P5(n, t, i, a) {
  const o = bc(n),
    r = As(o, "margin"),
    u = ac(o.maxWidth, n, "clientWidth") || ic,
    d = ac(o.maxHeight, n, "clientHeight") || ic,
    h = X5(n, t, i);
  let { width: g, height: p } = h;
  if (o.boxSizing === "content-box") {
    const v = As(o, "border", "width"),
      _ = As(o, "padding");
    ((g -= _.width + v.width), (p -= _.height + v.height));
  }
  return (
    (g = Math.max(0, g - r.width)),
    (p = Math.max(0, a ? g / a : p - r.height)),
    (g = Xi(Math.min(g, u, h.maxWidth))),
    (p = Xi(Math.min(p, d, h.maxHeight))),
    g && !p && (p = Xi(g / 2)),
    (t !== void 0 || i !== void 0) &&
      a &&
      h.height &&
      p > h.height &&
      ((p = h.height), (g = Xi(Math.floor(p * a)))),
    { width: g, height: p }
  );
}
function Ob(n, t, i) {
  const a = t || 1,
    o = Xi(n.height * a),
    r = Xi(n.width * a);
  ((n.height = Xi(n.height)), (n.width = Xi(n.width)));
  const u = n.canvas;
  return (
    u.style &&
      (i || (!u.style.height && !u.style.width)) &&
      ((u.style.height = `${n.height}px`), (u.style.width = `${n.width}px`)),
    n.currentDevicePixelRatio !== a || u.height !== o || u.width !== r
      ? ((n.currentDevicePixelRatio = a),
        (u.height = o),
        (u.width = r),
        n.ctx.setTransform(a, 0, 0, a, 0, 0),
        !0)
      : !1
  );
}
const F5 = (function () {
  let n = !1;
  try {
    const t = {
      get passive() {
        return ((n = !0), !1);
      },
    };
    Kf() &&
      (window.addEventListener("test", null, t),
      window.removeEventListener("test", null, t));
  } catch {}
  return n;
})();
function zb(n, t) {
  const i = U5(n, t),
    a = i && i.match(/^(\d+)(\.\d+)?px$/);
  return a ? +a[1] : void 0;
}
function ws(n, t, i, a) {
  return { x: n.x + i * (t.x - n.x), y: n.y + i * (t.y - n.y) };
}
function G5(n, t, i, a) {
  return {
    x: n.x + i * (t.x - n.x),
    y:
      a === "middle"
        ? i < 0.5
          ? n.y
          : t.y
        : a === "after"
          ? i < 1
            ? n.y
            : t.y
          : i > 0
            ? t.y
            : n.y,
  };
}
function Z5(n, t, i, a) {
  const o = { x: n.cp2x, y: n.cp2y },
    r = { x: t.cp1x, y: t.cp1y },
    u = ws(n, o, i),
    d = ws(o, r, i),
    h = ws(r, t, i),
    g = ws(u, d, i),
    p = ws(d, h, i);
  return ws(g, p, i);
}
const Q5 = function (n, t) {
    return {
      x(i) {
        return n + n + t - i;
      },
      setWidth(i) {
        t = i;
      },
      textAlign(i) {
        return i === "center" ? i : i === "right" ? "left" : "right";
      },
      xPlus(i, a) {
        return i - a;
      },
      leftForLtr(i, a) {
        return i - a;
      },
    };
  },
  K5 = function () {
    return {
      x(n) {
        return n;
      },
      setWidth(n) {},
      textAlign(n) {
        return n;
      },
      xPlus(n, t) {
        return n + t;
      },
      leftForLtr(n, t) {
        return n;
      },
    };
  };
function va(n, t, i) {
  return n ? Q5(t, i) : K5();
}
function ey(n, t) {
  let i, a;
  (t === "ltr" || t === "rtl") &&
    ((i = n.canvas.style),
    (a = [i.getPropertyValue("direction"), i.getPropertyPriority("direction")]),
    i.setProperty("direction", t, "important"),
    (n.prevTextDirection = a));
}
function ny(n, t) {
  t !== void 0 &&
    (delete n.prevTextDirection,
    n.canvas.style.setProperty("direction", t[0], t[1]));
}
function iy(n) {
  return n === "angle"
    ? { between: Pl, compare: WS, normalize: je }
    : { between: ri, compare: (t, i) => t - i, normalize: (t) => t };
}
function Db({ start: n, end: t, count: i, loop: a, style: o }) {
  return {
    start: n % i,
    end: t % i,
    loop: a && (t - n + 1) % i === 0,
    style: o,
  };
}
function W5(n, t, i) {
  const { property: a, start: o, end: r } = i,
    { between: u, normalize: d } = iy(a),
    h = t.length;
  let { start: g, end: p, loop: y } = n,
    v,
    _;
  if (y) {
    for (g += h, p += h, v = 0, _ = h; v < _ && u(d(t[g % h][a]), o, r); ++v)
      (g--, p--);
    ((g %= h), (p %= h));
  }
  return (p < g && (p += h), { start: g, end: p, loop: y, style: n.style });
}
function sy(n, t, i) {
  if (!i) return [n];
  const { property: a, start: o, end: r } = i,
    u = t.length,
    { compare: d, between: h, normalize: g } = iy(a),
    { start: p, end: y, loop: v, style: _ } = W5(n, t, i),
    S = [];
  let M = !1,
    k = null,
    j,
    z,
    U;
  const q = () => h(o, U, j) && d(o, U) !== 0,
    R = () => d(r, j) === 0 || h(r, U, j),
    P = () => M || q(),
    X = () => !M || R();
  for (let G = p, W = p; G <= y; ++G)
    ((z = t[G % u]),
      !z.skip &&
        ((j = g(z[a])),
        j !== U &&
          ((M = h(j, o, r)),
          k === null && P() && (k = d(j, o) === 0 ? G : W),
          k !== null &&
            X() &&
            (S.push(Db({ start: k, end: G, loop: v, count: u, style: _ })),
            (k = null)),
          (W = G),
          (U = j))));
  return (
    k !== null && S.push(Db({ start: k, end: y, loop: v, count: u, style: _ })),
    S
  );
}
function ay(n, t) {
  const i = [],
    a = n.segments;
  for (let o = 0; o < a.length; o++) {
    const r = sy(a[o], n.points, t);
    r.length && i.push(...r);
  }
  return i;
}
function $5(n, t, i, a) {
  let o = 0,
    r = t - 1;
  if (i && !a) for (; o < t && !n[o].skip;) o++;
  for (; o < t && n[o].skip;) o++;
  for (o %= t, i && (r += o); r > o && n[r % t].skip;) r--;
  return ((r %= t), { start: o, end: r });
}
function I5(n, t, i, a) {
  const o = n.length,
    r = [];
  let u = t,
    d = n[t],
    h;
  for (h = t + 1; h <= i; ++h) {
    const g = n[h % o];
    (g.skip || g.stop
      ? d.skip ||
        ((a = !1),
        r.push({ start: t % o, end: (h - 1) % o, loop: a }),
        (t = u = g.stop ? h : null))
      : ((u = h), d.skip && (t = h)),
      (d = g));
  }
  return (u !== null && r.push({ start: t % o, end: u % o, loop: a }), r);
}
function J5(n, t) {
  const i = n.points,
    a = n.options.spanGaps,
    o = i.length;
  if (!o) return [];
  const r = !!n._loop,
    { start: u, end: d } = $5(i, o, r, a);
  if (a === !0) return Lb(n, [{ start: u, end: d, loop: r }], i, t);
  const h = d < u ? d + o : d,
    g = !!n._fullLoop && u === 0 && d === o - 1;
  return Lb(n, I5(i, u, h, g), i, t);
}
function Lb(n, t, i, a) {
  return !a || !a.setContext || !i ? t : t3(n, t, i, a);
}
function t3(n, t, i, a) {
  const o = n._chart.getContext(),
    r = Bb(n.options),
    {
      _datasetIndex: u,
      options: { spanGaps: d },
    } = n,
    h = i.length,
    g = [];
  let p = r,
    y = t[0].start,
    v = y;
  function _(S, M, k, j) {
    const z = d ? -1 : 1;
    if (S !== M) {
      for (S += h; i[S % h].skip;) S -= z;
      for (; i[M % h].skip;) M += z;
      S % h !== M % h &&
        (g.push({ start: S % h, end: M % h, loop: k, style: j }),
        (p = j),
        (y = M % h));
    }
  }
  for (const S of t) {
    y = d ? y : S.start;
    let M = i[y % h],
      k;
    for (v = y + 1; v <= S.end; v++) {
      const j = i[v % h];
      ((k = Bb(
        a.setContext(
          Ki(o, {
            type: "segment",
            p0: M,
            p1: j,
            p0DataIndex: (v - 1) % h,
            p1DataIndex: v % h,
            datasetIndex: u,
          }),
        ),
      )),
        e3(k, p) && _(y, v - 1, S.loop, p),
        (M = j),
        (p = k));
    }
    y < v - 1 && _(y, v - 1, S.loop, p);
  }
  return g;
}
function Bb(n) {
  return {
    backgroundColor: n.backgroundColor,
    borderCapStyle: n.borderCapStyle,
    borderDash: n.borderDash,
    borderDashOffset: n.borderDashOffset,
    borderJoinStyle: n.borderJoinStyle,
    borderWidth: n.borderWidth,
    borderColor: n.borderColor,
  };
}
function e3(n, t) {
  if (!t) return !1;
  const i = [],
    a = function (o, r) {
      return Pf(r) ? (i.includes(r) || i.push(r), i.indexOf(r)) : r;
    };
  return JSON.stringify(n, a) !== JSON.stringify(t, a);
}
function Cr(n, t, i) {
  return n.options.clip ? n[i] : t[i];
}
function n3(n, t) {
  const { xScale: i, yScale: a } = n;
  return i && a
    ? {
        left: Cr(i, t, "left"),
        right: Cr(i, t, "right"),
        top: Cr(a, t, "top"),
        bottom: Cr(a, t, "bottom"),
      }
    : t;
}
function ly(n, t) {
  const i = t._clip;
  if (i.disabled) return !1;
  const a = n3(t, n.chartArea);
  return {
    left: i.left === !1 ? 0 : a.left - (i.left === !0 ? 0 : i.left),
    right: i.right === !1 ? n.width : a.right + (i.right === !0 ? 0 : i.right),
    top: i.top === !1 ? 0 : a.top - (i.top === !0 ? 0 : i.top),
    bottom:
      i.bottom === !1 ? n.height : a.bottom + (i.bottom === !0 ? 0 : i.bottom),
  };
}
/*!
 * Chart.js v4.5.1
 * https://www.chartjs.org
 * (c) 2025 Chart.js Contributors
 * Released under the MIT License
 */ class i3 {
  constructor() {
    ((this._request = null),
      (this._charts = new Map()),
      (this._running = !1),
      (this._lastDate = void 0));
  }
  _notify(t, i, a, o) {
    const r = i.listeners[o],
      u = i.duration;
    r.forEach((d) =>
      d({
        chart: t,
        initial: i.initial,
        numSteps: u,
        currentStep: Math.min(a - i.start, u),
      }),
    );
  }
  _refresh() {
    this._request ||
      ((this._running = !0),
      (this._request = Yx.call(window, () => {
        (this._update(),
          (this._request = null),
          this._running && this._refresh());
      })));
  }
  _update(t = Date.now()) {
    let i = 0;
    (this._charts.forEach((a, o) => {
      if (!a.running || !a.items.length) return;
      const r = a.items;
      let u = r.length - 1,
        d = !1,
        h;
      for (; u >= 0; --u)
        ((h = r[u]),
          h._active
            ? (h._total > a.duration && (a.duration = h._total),
              h.tick(t),
              (d = !0))
            : ((r[u] = r[r.length - 1]), r.pop()));
      (d && (o.draw(), this._notify(o, a, t, "progress")),
        r.length ||
          ((a.running = !1),
          this._notify(o, a, t, "complete"),
          (a.initial = !1)),
        (i += r.length));
    }),
      (this._lastDate = t),
      i === 0 && (this._running = !1));
  }
  _getAnims(t) {
    const i = this._charts;
    let a = i.get(t);
    return (
      a ||
        ((a = {
          running: !1,
          initial: !0,
          items: [],
          listeners: { complete: [], progress: [] },
        }),
        i.set(t, a)),
      a
    );
  }
  listen(t, i, a) {
    this._getAnims(t).listeners[i].push(a);
  }
  add(t, i) {
    !i || !i.length || this._getAnims(t).items.push(...i);
  }
  has(t) {
    return this._getAnims(t).items.length > 0;
  }
  start(t) {
    const i = this._charts.get(t);
    i &&
      ((i.running = !0),
      (i.start = Date.now()),
      (i.duration = i.items.reduce((a, o) => Math.max(a, o._duration), 0)),
      this._refresh());
  }
  running(t) {
    if (!this._running) return !1;
    const i = this._charts.get(t);
    return !(!i || !i.running || !i.items.length);
  }
  stop(t) {
    const i = this._charts.get(t);
    if (!i || !i.items.length) return;
    const a = i.items;
    let o = a.length - 1;
    for (; o >= 0; --o) a[o].cancel();
    ((i.items = []), this._notify(t, i, Date.now(), "complete"));
  }
  remove(t) {
    return this._charts.delete(t);
  }
}
var ai = new i3();
const Rb = "transparent",
  s3 = {
    boolean(n, t, i) {
      return i > 0.5 ? t : n;
    },
    color(n, t, i) {
      const a = Eb(n || Rb),
        o = a.valid && Eb(t || Rb);
      return o && o.valid ? o.mix(a, i).hexString() : t;
    },
    number(n, t, i) {
      return n + (t - n) * i;
    },
  };
class a3 {
  constructor(t, i, a, o) {
    const r = i[a];
    o = Nl([t.to, o, r, t.from]);
    const u = Nl([t.from, r, o]);
    ((this._active = !0),
      (this._fn = t.fn || s3[t.type || typeof u]),
      (this._easing = Hl[t.easing] || Hl.linear),
      (this._start = Math.floor(Date.now() + (t.delay || 0))),
      (this._duration = this._total = Math.floor(t.duration)),
      (this._loop = !!t.loop),
      (this._target = i),
      (this._prop = a),
      (this._from = u),
      (this._to = o),
      (this._promises = void 0));
  }
  active() {
    return this._active;
  }
  update(t, i, a) {
    if (this._active) {
      this._notify(!1);
      const o = this._target[this._prop],
        r = a - this._start,
        u = this._duration - r;
      ((this._start = a),
        (this._duration = Math.floor(Math.max(u, t.duration))),
        (this._total += r),
        (this._loop = !!t.loop),
        (this._to = Nl([t.to, i, o, t.from])),
        (this._from = Nl([t.from, o, i])));
    }
  }
  cancel() {
    this._active &&
      (this.tick(Date.now()), (this._active = !1), this._notify(!1));
  }
  tick(t) {
    const i = t - this._start,
      a = this._duration,
      o = this._prop,
      r = this._from,
      u = this._loop,
      d = this._to;
    let h;
    if (((this._active = r !== d && (u || i < a)), !this._active)) {
      ((this._target[o] = d), this._notify(!0));
      return;
    }
    if (i < 0) {
      this._target[o] = r;
      return;
    }
    ((h = (i / a) % 2),
      (h = u && h > 1 ? 2 - h : h),
      (h = this._easing(Math.min(1, Math.max(0, h)))),
      (this._target[o] = this._fn(r, d, h)));
  }
  wait() {
    const t = this._promises || (this._promises = []);
    return new Promise((i, a) => {
      t.push({ res: i, rej: a });
    });
  }
  _notify(t) {
    const i = t ? "res" : "rej",
      a = this._promises || [];
    for (let o = 0; o < a.length; o++) a[o][i]();
  }
}
class oy {
  constructor(t, i) {
    ((this._chart = t), (this._properties = new Map()), this.configure(i));
  }
  configure(t) {
    if (!St(t)) return;
    const i = Object.keys(It.animation),
      a = this._properties;
    Object.getOwnPropertyNames(t).forEach((o) => {
      const r = t[o];
      if (!St(r)) return;
      const u = {};
      for (const d of i) u[d] = r[d];
      (($t(r.properties) && r.properties) || [o]).forEach((d) => {
        (d === o || !a.has(d)) && a.set(d, u);
      });
    });
  }
  _animateOptions(t, i) {
    const a = i.options,
      o = o3(t, a);
    if (!o) return [];
    const r = this._createAnimations(o, a);
    return (
      a.$shared &&
        l3(t.options.$animations, a).then(
          () => {
            t.options = a;
          },
          () => {},
        ),
      r
    );
  }
  _createAnimations(t, i) {
    const a = this._properties,
      o = [],
      r = t.$animations || (t.$animations = {}),
      u = Object.keys(i),
      d = Date.now();
    let h;
    for (h = u.length - 1; h >= 0; --h) {
      const g = u[h];
      if (g.charAt(0) === "$") continue;
      if (g === "options") {
        o.push(...this._animateOptions(t, i));
        continue;
      }
      const p = i[g];
      let y = r[g];
      const v = a.get(g);
      if (y)
        if (v && y.active()) {
          y.update(v, p, d);
          continue;
        } else y.cancel();
      if (!v || !v.duration) {
        t[g] = p;
        continue;
      }
      ((r[g] = y = new a3(v, t, g, p)), o.push(y));
    }
    return o;
  }
  update(t, i) {
    if (this._properties.size === 0) {
      Object.assign(t, i);
      return;
    }
    const a = this._createAnimations(t, i);
    if (a.length) return (ai.add(this._chart, a), !0);
  }
}
function l3(n, t) {
  const i = [],
    a = Object.keys(t);
  for (let o = 0; o < a.length; o++) {
    const r = n[a[o]];
    r && r.active() && i.push(r.wait());
  }
  return Promise.all(i);
}
function o3(n, t) {
  if (!t) return;
  let i = n.options;
  if (!i) {
    n.options = t;
    return;
  }
  return (
    i.$shared &&
      (n.options = i = Object.assign({}, i, { $shared: !1, $animations: {} })),
    i
  );
}
function Hb(n, t) {
  const i = (n && n.options) || {},
    a = i.reverse,
    o = i.min === void 0 ? t : 0,
    r = i.max === void 0 ? t : 0;
  return { start: a ? r : o, end: a ? o : r };
}
function r3(n, t, i) {
  if (i === !1) return !1;
  const a = Hb(n, i),
    o = Hb(t, i);
  return { top: o.end, right: a.end, bottom: o.start, left: a.start };
}
function c3(n) {
  let t, i, a, o;
  return (
    St(n)
      ? ((t = n.top), (i = n.right), (a = n.bottom), (o = n.left))
      : (t = i = a = o = n),
    { top: t, right: i, bottom: a, left: o, disabled: n === !1 }
  );
}
function ry(n, t) {
  const i = [],
    a = n._getSortedDatasetMetas(t);
  let o, r;
  for (o = 0, r = a.length; o < r; ++o) i.push(a[o].index);
  return i;
}
function Ub(n, t, i, a = {}) {
  const o = n.keys,
    r = a.mode === "single";
  let u, d, h, g;
  if (t === null) return;
  let p = !1;
  for (u = 0, d = o.length; u < d; ++u) {
    if (((h = +o[u]), h === i)) {
      if (((p = !0), a.all)) continue;
      break;
    }
    ((g = n.values[h]), ne(g) && (r || t === 0 || Bn(t) === Bn(g)) && (t += g));
  }
  return !p && !a.all ? 0 : t;
}
function u3(n, t) {
  const { iScale: i, vScale: a } = t,
    o = i.axis === "x" ? "x" : "y",
    r = a.axis === "x" ? "x" : "y",
    u = Object.keys(n),
    d = new Array(u.length);
  let h, g, p;
  for (h = 0, g = u.length; h < g; ++h)
    ((p = u[h]), (d[h] = { [o]: p, [r]: n[p] }));
  return d;
}
function Yd(n, t) {
  const i = n && n.options.stacked;
  return i || (i === void 0 && t.stack !== void 0);
}
function d3(n, t, i) {
  return `${n.id}.${t.id}.${i.stack || i.type}`;
}
function f3(n) {
  const { min: t, max: i, minDefined: a, maxDefined: o } = n.getUserBounds();
  return {
    min: a ? t : Number.NEGATIVE_INFINITY,
    max: o ? i : Number.POSITIVE_INFINITY,
  };
}
function h3(n, t, i) {
  const a = n[t] || (n[t] = {});
  return a[i] || (a[i] = {});
}
function Vb(n, t, i, a) {
  for (const o of t.getMatchingVisibleMetas(a).reverse()) {
    const r = n[o.index];
    if ((i && r > 0) || (!i && r < 0)) return o.index;
  }
  return null;
}
function qb(n, t) {
  const { chart: i, _cachedMeta: a } = n,
    o = i._stacks || (i._stacks = {}),
    { iScale: r, vScale: u, index: d } = a,
    h = r.axis,
    g = u.axis,
    p = d3(r, u, a),
    y = t.length;
  let v;
  for (let _ = 0; _ < y; ++_) {
    const S = t[_],
      { [h]: M, [g]: k } = S,
      j = S._stacks || (S._stacks = {});
    ((v = j[g] = h3(o, p, M)),
      (v[d] = k),
      (v._top = Vb(v, u, !0, a.type)),
      (v._bottom = Vb(v, u, !1, a.type)));
    const z = v._visualValues || (v._visualValues = {});
    z[d] = k;
  }
}
function Xd(n, t) {
  const i = n.scales;
  return Object.keys(i)
    .filter((a) => i[a].axis === t)
    .shift();
}
function m3(n, t) {
  return Ki(n, {
    active: !1,
    dataset: void 0,
    datasetIndex: t,
    index: t,
    mode: "default",
    type: "dataset",
  });
}
function g3(n, t, i) {
  return Ki(n, {
    active: !1,
    dataIndex: t,
    parsed: void 0,
    raw: void 0,
    element: i,
    index: t,
    mode: "default",
    type: "data",
  });
}
function Al(n, t) {
  const i = n.controller.index,
    a = n.vScale && n.vScale.axis;
  if (a) {
    t = t || n._parsed;
    for (const o of t) {
      const r = o._stacks;
      if (!r || r[a] === void 0 || r[a][i] === void 0) return;
      (delete r[a][i],
        r[a]._visualValues !== void 0 &&
          r[a]._visualValues[i] !== void 0 &&
          delete r[a]._visualValues[i]);
    }
  }
}
const Pd = (n) => n === "reset" || n === "none",
  Yb = (n, t) => (t ? n : Object.assign({}, n)),
  p3 = (n, t, i) =>
    n && !t.hidden && t._stacked && { keys: ry(i, !0), values: null };
class En {
  constructor(t, i) {
    ((this.chart = t),
      (this._ctx = t.ctx),
      (this.index = i),
      (this._cachedDataOpts = {}),
      (this._cachedMeta = this.getMeta()),
      (this._type = this._cachedMeta.type),
      (this.options = void 0),
      (this._parsing = !1),
      (this._data = void 0),
      (this._objectData = void 0),
      (this._sharedOptions = void 0),
      (this._drawStart = void 0),
      (this._drawCount = void 0),
      (this.enableOptionSharing = !1),
      (this.supportsDecimation = !1),
      (this.$context = void 0),
      (this._syncList = []),
      (this.datasetElementType = new.target.datasetElementType),
      (this.dataElementType = new.target.dataElementType),
      this.initialize());
  }
  initialize() {
    const t = this._cachedMeta;
    (this.configure(),
      this.linkScales(),
      (t._stacked = Yd(t.vScale, t)),
      this.addElements(),
      this.options.fill &&
        !this.chart.isPluginEnabled("filler") &&
        console.warn(
          "Tried to use the 'fill' option without the 'Filler' plugin enabled. Please import and register the 'Filler' plugin and make sure it is not disabled in the options",
        ));
  }
  updateIndex(t) {
    (this.index !== t && Al(this._cachedMeta), (this.index = t));
  }
  linkScales() {
    const t = this.chart,
      i = this._cachedMeta,
      a = this.getDataset(),
      o = (y, v, _, S) => (y === "x" ? v : y === "r" ? S : _),
      r = (i.xAxisID = dt(a.xAxisID, Xd(t, "x"))),
      u = (i.yAxisID = dt(a.yAxisID, Xd(t, "y"))),
      d = (i.rAxisID = dt(a.rAxisID, Xd(t, "r"))),
      h = i.indexAxis,
      g = (i.iAxisID = o(h, r, u, d)),
      p = (i.vAxisID = o(h, u, r, d));
    ((i.xScale = this.getScaleForId(r)),
      (i.yScale = this.getScaleForId(u)),
      (i.rScale = this.getScaleForId(d)),
      (i.iScale = this.getScaleForId(g)),
      (i.vScale = this.getScaleForId(p)));
  }
  getDataset() {
    return this.chart.data.datasets[this.index];
  }
  getMeta() {
    return this.chart.getDatasetMeta(this.index);
  }
  getScaleForId(t) {
    return this.chart.scales[t];
  }
  _getOtherScale(t) {
    const i = this._cachedMeta;
    return t === i.iScale ? i.vScale : i.iScale;
  }
  reset() {
    this._update("reset");
  }
  _destroy() {
    const t = this._cachedMeta;
    (this._data && Mb(this._data, this), t._stacked && Al(t));
  }
  _dataCheck() {
    const t = this.getDataset(),
      i = t.data || (t.data = []),
      a = this._data;
    if (St(i)) {
      const o = this._cachedMeta;
      this._data = u3(i, o);
    } else if (a !== i) {
      if (a) {
        Mb(a, this);
        const o = this._cachedMeta;
        (Al(o), (o._parsed = []));
      }
      (i && Object.isExtensible(i) && t5(i, this),
        (this._syncList = []),
        (this._data = i));
    }
  }
  addElements() {
    const t = this._cachedMeta;
    (this._dataCheck(),
      this.datasetElementType && (t.dataset = new this.datasetElementType()));
  }
  buildOrUpdateElements(t) {
    const i = this._cachedMeta,
      a = this.getDataset();
    let o = !1;
    this._dataCheck();
    const r = i._stacked;
    ((i._stacked = Yd(i.vScale, i)),
      i.stack !== a.stack && ((o = !0), Al(i), (i.stack = a.stack)),
      this._resyncElements(t),
      (o || r !== i._stacked) &&
        (qb(this, i._parsed), (i._stacked = Yd(i.vScale, i))));
  }
  configure() {
    const t = this.chart.config,
      i = t.datasetScopeKeys(this._type),
      a = t.getOptionScopes(this.getDataset(), i, !0);
    ((this.options = t.createResolver(a, this.getContext())),
      (this._parsing = this.options.parsing),
      (this._cachedDataOpts = {}));
  }
  parse(t, i) {
    const { _cachedMeta: a, _data: o } = this,
      { iScale: r, _stacked: u } = a,
      d = r.axis;
    let h = t === 0 && i === o.length ? !0 : a._sorted,
      g = t > 0 && a._parsed[t - 1],
      p,
      y,
      v;
    if (this._parsing === !1) ((a._parsed = o), (a._sorted = !0), (v = o));
    else {
      $t(o[t])
        ? (v = this.parseArrayData(a, o, t, i))
        : St(o[t])
          ? (v = this.parseObjectData(a, o, t, i))
          : (v = this.parsePrimitiveData(a, o, t, i));
      const _ = () => y[d] === null || (g && y[d] < g[d]);
      for (p = 0; p < i; ++p)
        ((a._parsed[p + t] = y = v[p]), h && (_() && (h = !1), (g = y)));
      a._sorted = h;
    }
    u && qb(this, v);
  }
  parsePrimitiveData(t, i, a, o) {
    const { iScale: r, vScale: u } = t,
      d = r.axis,
      h = u.axis,
      g = r.getLabels(),
      p = r === u,
      y = new Array(o);
    let v, _, S;
    for (v = 0, _ = o; v < _; ++v)
      ((S = v + a),
        (y[v] = { [d]: p || r.parse(g[S], S), [h]: u.parse(i[S], S) }));
    return y;
  }
  parseArrayData(t, i, a, o) {
    const { xScale: r, yScale: u } = t,
      d = new Array(o);
    let h, g, p, y;
    for (h = 0, g = o; h < g; ++h)
      ((p = h + a),
        (y = i[p]),
        (d[h] = { x: r.parse(y[0], p), y: u.parse(y[1], p) }));
    return d;
  }
  parseObjectData(t, i, a, o) {
    const { xScale: r, yScale: u } = t,
      { xAxisKey: d = "x", yAxisKey: h = "y" } = this._parsing,
      g = new Array(o);
    let p, y, v, _;
    for (p = 0, y = o; p < y; ++p)
      ((v = p + a),
        (_ = i[v]),
        (g[p] = { x: r.parse(Zi(_, d), v), y: u.parse(Zi(_, h), v) }));
    return g;
  }
  getParsed(t) {
    return this._cachedMeta._parsed[t];
  }
  getDataElement(t) {
    return this._cachedMeta.data[t];
  }
  applyStack(t, i, a) {
    const o = this.chart,
      r = this._cachedMeta,
      u = i[t.axis],
      d = { keys: ry(o, !0), values: i._stacks[t.axis]._visualValues };
    return Ub(d, u, r.index, { mode: a });
  }
  updateRangeFromParsed(t, i, a, o) {
    const r = a[i.axis];
    let u = r === null ? NaN : r;
    const d = o && a._stacks[i.axis];
    (o && d && ((o.values = d), (u = Ub(o, r, this._cachedMeta.index))),
      (t.min = Math.min(t.min, u)),
      (t.max = Math.max(t.max, u)));
  }
  getMinMax(t, i) {
    const a = this._cachedMeta,
      o = a._parsed,
      r = a._sorted && t === a.iScale,
      u = o.length,
      d = this._getOtherScale(t),
      h = p3(i, a, this.chart),
      g = { min: Number.POSITIVE_INFINITY, max: Number.NEGATIVE_INFINITY },
      { min: p, max: y } = f3(d);
    let v, _;
    function S() {
      _ = o[v];
      const M = _[d.axis];
      return !ne(_[t.axis]) || p > M || y < M;
    }
    for (
      v = 0;
      v < u && !(!S() && (this.updateRangeFromParsed(g, t, _, h), r));
      ++v
    );
    if (r) {
      for (v = u - 1; v >= 0; --v)
        if (!S()) {
          this.updateRangeFromParsed(g, t, _, h);
          break;
        }
    }
    return g;
  }
  getAllParsedValues(t) {
    const i = this._cachedMeta._parsed,
      a = [];
    let o, r, u;
    for (o = 0, r = i.length; o < r; ++o)
      ((u = i[o][t.axis]), ne(u) && a.push(u));
    return a;
  }
  getMaxOverflow() {
    return !1;
  }
  getLabelAndValue(t) {
    const i = this._cachedMeta,
      a = i.iScale,
      o = i.vScale,
      r = this.getParsed(t);
    return {
      label: a ? "" + a.getLabelForValue(r[a.axis]) : "",
      value: o ? "" + o.getLabelForValue(r[o.axis]) : "",
    };
  }
  _update(t) {
    const i = this._cachedMeta;
    (this.update(t || "default"),
      (i._clip = c3(
        dt(this.options.clip, r3(i.xScale, i.yScale, this.getMaxOverflow())),
      )));
  }
  update(t) {}
  draw() {
    const t = this._ctx,
      i = this.chart,
      a = this._cachedMeta,
      o = a.data || [],
      r = i.chartArea,
      u = [],
      d = this._drawStart || 0,
      h = this._drawCount || o.length - d,
      g = this.options.drawActiveElementsOnTop;
    let p;
    for (a.dataset && a.dataset.draw(t, r, d, h), p = d; p < d + h; ++p) {
      const y = o[p];
      y.hidden || (y.active && g ? u.push(y) : y.draw(t, r));
    }
    for (p = 0; p < u.length; ++p) u[p].draw(t, r);
  }
  getStyle(t, i) {
    const a = i ? "active" : "default";
    return t === void 0 && this._cachedMeta.dataset
      ? this.resolveDatasetElementOptions(a)
      : this.resolveDataElementOptions(t || 0, a);
  }
  getContext(t, i, a) {
    const o = this.getDataset();
    let r;
    if (t >= 0 && t < this._cachedMeta.data.length) {
      const u = this._cachedMeta.data[t];
      ((r = u.$context || (u.$context = g3(this.getContext(), t, u))),
        (r.parsed = this.getParsed(t)),
        (r.raw = o.data[t]),
        (r.index = r.dataIndex = t));
    } else
      ((r =
        this.$context ||
        (this.$context = m3(this.chart.getContext(), this.index))),
        (r.dataset = o),
        (r.index = r.datasetIndex = this.index));
    return ((r.active = !!i), (r.mode = a), r);
  }
  resolveDatasetElementOptions(t) {
    return this._resolveElementOptions(this.datasetElementType.id, t);
  }
  resolveDataElementOptions(t, i) {
    return this._resolveElementOptions(this.dataElementType.id, i, t);
  }
  _resolveElementOptions(t, i = "default", a) {
    const o = i === "active",
      r = this._cachedDataOpts,
      u = t + "-" + i,
      d = r[u],
      h = this.enableOptionSharing && Xl(a);
    if (d) return Yb(d, h);
    const g = this.chart.config,
      p = g.datasetElementScopeKeys(this._type, t),
      y = o ? [`${t}Hover`, "hover", t, ""] : [t, ""],
      v = g.getOptionScopes(this.getDataset(), p),
      _ = Object.keys(It.elements[t]),
      S = () => this.getContext(a, o, i),
      M = g.resolveNamedOptions(v, _, S, y);
    return (
      M.$shared && ((M.$shared = h), (r[u] = Object.freeze(Yb(M, h)))),
      M
    );
  }
  _resolveAnimations(t, i, a) {
    const o = this.chart,
      r = this._cachedDataOpts,
      u = `animation-${i}`,
      d = r[u];
    if (d) return d;
    let h;
    if (o.options.animation !== !1) {
      const p = this.chart.config,
        y = p.datasetAnimationScopeKeys(this._type, i),
        v = p.getOptionScopes(this.getDataset(), y);
      h = p.createResolver(v, this.getContext(t, a, i));
    }
    const g = new oy(o, h && h.animations);
    return (h && h._cacheable && (r[u] = Object.freeze(g)), g);
  }
  getSharedOptions(t) {
    if (t.$shared)
      return (
        this._sharedOptions || (this._sharedOptions = Object.assign({}, t))
      );
  }
  includeOptions(t, i) {
    return !i || Pd(t) || this.chart._animationsDisabled;
  }
  _getSharedOptions(t, i) {
    const a = this.resolveDataElementOptions(t, i),
      o = this._sharedOptions,
      r = this.getSharedOptions(a),
      u = this.includeOptions(i, r) || r !== o;
    return (
      this.updateSharedOptions(r, i, a),
      { sharedOptions: r, includeOptions: u }
    );
  }
  updateElement(t, i, a, o) {
    Pd(o) ? Object.assign(t, a) : this._resolveAnimations(i, o).update(t, a);
  }
  updateSharedOptions(t, i, a) {
    t && !Pd(i) && this._resolveAnimations(void 0, i).update(t, a);
  }
  _setStyle(t, i, a, o) {
    t.active = o;
    const r = this.getStyle(i, o);
    this._resolveAnimations(i, a, o).update(t, {
      options: (!o && this.getSharedOptions(r)) || r,
    });
  }
  removeHoverStyle(t, i, a) {
    this._setStyle(t, a, "active", !1);
  }
  setHoverStyle(t, i, a) {
    this._setStyle(t, a, "active", !0);
  }
  _removeDatasetHoverStyle() {
    const t = this._cachedMeta.dataset;
    t && this._setStyle(t, void 0, "active", !1);
  }
  _setDatasetHoverStyle() {
    const t = this._cachedMeta.dataset;
    t && this._setStyle(t, void 0, "active", !0);
  }
  _resyncElements(t) {
    const i = this._data,
      a = this._cachedMeta.data;
    for (const [d, h, g] of this._syncList) this[d](h, g);
    this._syncList = [];
    const o = a.length,
      r = i.length,
      u = Math.min(r, o);
    (u && this.parse(0, u),
      r > o
        ? this._insertElements(o, r - o, t)
        : r < o && this._removeElements(r, o - r));
  }
  _insertElements(t, i, a = !0) {
    const o = this._cachedMeta,
      r = o.data,
      u = t + i;
    let d;
    const h = (g) => {
      for (g.length += i, d = g.length - 1; d >= u; d--) g[d] = g[d - i];
    };
    for (h(r), d = t; d < u; ++d) r[d] = new this.dataElementType();
    (this._parsing && h(o._parsed),
      this.parse(t, i),
      a && this.updateElements(r, t, i, "reset"));
  }
  updateElements(t, i, a, o) {}
  _removeElements(t, i) {
    const a = this._cachedMeta;
    if (this._parsing) {
      const o = a._parsed.splice(t, i);
      a._stacked && Al(a, o);
    }
    a.data.splice(t, i);
  }
  _sync(t) {
    if (this._parsing) this._syncList.push(t);
    else {
      const [i, a, o] = t;
      this[i](a, o);
    }
    this.chart._dataChanges.push([this.index, ...t]);
  }
  _onDataPush() {
    const t = arguments.length;
    this._sync(["_insertElements", this.getDataset().data.length - t, t]);
  }
  _onDataPop() {
    this._sync(["_removeElements", this._cachedMeta.data.length - 1, 1]);
  }
  _onDataShift() {
    this._sync(["_removeElements", 0, 1]);
  }
  _onDataSplice(t, i) {
    i && this._sync(["_removeElements", t, i]);
    const a = arguments.length - 2;
    a && this._sync(["_insertElements", t, a]);
  }
  _onDataUnshift() {
    this._sync(["_insertElements", 0, arguments.length]);
  }
}
(K(En, "defaults", {}),
  K(En, "datasetElementType", null),
  K(En, "dataElementType", null));
function b3(n, t) {
  if (!n._cache.$bar) {
    const i = n.getMatchingVisibleMetas(t);
    let a = [];
    for (let o = 0, r = i.length; o < r; o++)
      a = a.concat(i[o].controller.getAllParsedValues(n));
    n._cache.$bar = qx(a.sort((o, r) => o - r));
  }
  return n._cache.$bar;
}
function x3(n) {
  const t = n.iScale,
    i = b3(t, n.type);
  let a = t._length,
    o,
    r,
    u,
    d;
  const h = () => {
    u === 32767 ||
      u === -32768 ||
      (Xl(d) && (a = Math.min(a, Math.abs(u - d) || a)), (d = u));
  };
  for (o = 0, r = i.length; o < r; ++o) ((u = t.getPixelForValue(i[o])), h());
  for (d = void 0, o = 0, r = t.ticks.length; o < r; ++o)
    ((u = t.getPixelForTick(o)), h());
  return a;
}
function y3(n, t, i, a) {
  const o = i.barThickness;
  let r, u;
  return (
    yt(o)
      ? ((r = t.min * i.categoryPercentage), (u = i.barPercentage))
      : ((r = o * a), (u = 1)),
    { chunk: r / a, ratio: u, start: t.pixels[n] - r / 2 }
  );
}
function v3(n, t, i, a) {
  const o = t.pixels,
    r = o[n];
  let u = n > 0 ? o[n - 1] : null,
    d = n < o.length - 1 ? o[n + 1] : null;
  const h = i.categoryPercentage;
  (u === null && (u = r - (d === null ? t.end - t.start : d - r)),
    d === null && (d = r + r - u));
  const g = r - ((r - Math.min(u, d)) / 2) * h;
  return {
    chunk: ((Math.abs(d - u) / 2) * h) / a,
    ratio: i.barPercentage,
    start: g,
  };
}
function w3(n, t, i, a) {
  const o = i.parse(n[0], a),
    r = i.parse(n[1], a),
    u = Math.min(o, r),
    d = Math.max(o, r);
  let h = u,
    g = d;
  (Math.abs(u) > Math.abs(d) && ((h = d), (g = u)),
    (t[i.axis] = g),
    (t._custom = { barStart: h, barEnd: g, start: o, end: r, min: u, max: d }));
}
function cy(n, t, i, a) {
  return ($t(n) ? w3(n, t, i, a) : (t[i.axis] = i.parse(n, a)), t);
}
function Xb(n, t, i, a) {
  const o = n.iScale,
    r = n.vScale,
    u = o.getLabels(),
    d = o === r,
    h = [];
  let g, p, y, v;
  for (g = i, p = i + a; g < p; ++g)
    ((v = t[g]),
      (y = {}),
      (y[o.axis] = d || o.parse(u[g], g)),
      h.push(cy(v, y, r, g)));
  return h;
}
function Fd(n) {
  return n && n.barStart !== void 0 && n.barEnd !== void 0;
}
function _3(n, t, i) {
  return n !== 0 ? Bn(n) : (t.isHorizontal() ? 1 : -1) * (t.min >= i ? 1 : -1);
}
function S3(n) {
  let t, i, a, o, r;
  return (
    n.horizontal
      ? ((t = n.base > n.x), (i = "left"), (a = "right"))
      : ((t = n.base < n.y), (i = "bottom"), (a = "top")),
    t ? ((o = "end"), (r = "start")) : ((o = "start"), (r = "end")),
    { start: i, end: a, reverse: t, top: o, bottom: r }
  );
}
function M3(n, t, i, a) {
  let o = t.borderSkipped;
  const r = {};
  if (!o) {
    n.borderSkipped = r;
    return;
  }
  if (o === !0) {
    n.borderSkipped = { top: !0, right: !0, bottom: !0, left: !0 };
    return;
  }
  const { start: u, end: d, reverse: h, top: g, bottom: p } = S3(n);
  (o === "middle" &&
    i &&
    ((n.enableBorderRadius = !0),
    (i._top || 0) === a
      ? (o = g)
      : (i._bottom || 0) === a
        ? (o = p)
        : ((r[Pb(p, u, d, h)] = !0), (o = g))),
    (r[Pb(o, u, d, h)] = !0),
    (n.borderSkipped = r));
}
function Pb(n, t, i, a) {
  return (a ? ((n = A3(n, t, i)), (n = Fb(n, i, t))) : (n = Fb(n, t, i)), n);
}
function A3(n, t, i) {
  return n === t ? i : n === i ? t : n;
}
function Fb(n, t, i) {
  return n === "start" ? t : n === "end" ? i : n;
}
function k3(n, { inflateAmount: t }, i) {
  n.inflateAmount = t === "auto" ? (i === 1 ? 0.33 : 0) : t;
}
class Rr extends En {
  parsePrimitiveData(t, i, a, o) {
    return Xb(t, i, a, o);
  }
  parseArrayData(t, i, a, o) {
    return Xb(t, i, a, o);
  }
  parseObjectData(t, i, a, o) {
    const { iScale: r, vScale: u } = t,
      { xAxisKey: d = "x", yAxisKey: h = "y" } = this._parsing,
      g = r.axis === "x" ? d : h,
      p = u.axis === "x" ? d : h,
      y = [];
    let v, _, S, M;
    for (v = a, _ = a + o; v < _; ++v)
      ((M = i[v]),
        (S = {}),
        (S[r.axis] = r.parse(Zi(M, g), v)),
        y.push(cy(Zi(M, p), S, u, v)));
    return y;
  }
  updateRangeFromParsed(t, i, a, o) {
    super.updateRangeFromParsed(t, i, a, o);
    const r = a._custom;
    r &&
      i === this._cachedMeta.vScale &&
      ((t.min = Math.min(t.min, r.min)), (t.max = Math.max(t.max, r.max)));
  }
  getMaxOverflow() {
    return 0;
  }
  getLabelAndValue(t) {
    const i = this._cachedMeta,
      { iScale: a, vScale: o } = i,
      r = this.getParsed(t),
      u = r._custom,
      d = Fd(u)
        ? "[" + u.start + ", " + u.end + "]"
        : "" + o.getLabelForValue(r[o.axis]);
    return { label: "" + a.getLabelForValue(r[a.axis]), value: d };
  }
  initialize() {
    ((this.enableOptionSharing = !0), super.initialize());
    const t = this._cachedMeta;
    t.stack = this.getDataset().stack;
  }
  update(t) {
    const i = this._cachedMeta;
    this.updateElements(i.data, 0, i.data.length, t);
  }
  updateElements(t, i, a, o) {
    const r = o === "reset",
      {
        index: u,
        _cachedMeta: { vScale: d },
      } = this,
      h = d.getBasePixel(),
      g = d.isHorizontal(),
      p = this._getRuler(),
      { sharedOptions: y, includeOptions: v } = this._getSharedOptions(i, o);
    for (let _ = i; _ < i + a; _++) {
      const S = this.getParsed(_),
        M =
          r || yt(S[d.axis])
            ? { base: h, head: h }
            : this._calculateBarValuePixels(_),
        k = this._calculateBarIndexPixels(_, p),
        j = (S._stacks || {})[d.axis],
        z = {
          horizontal: g,
          base: M.base,
          enableBorderRadius:
            !j || Fd(S._custom) || u === j._top || u === j._bottom,
          x: g ? M.head : k.center,
          y: g ? k.center : M.head,
          height: g ? k.size : Math.abs(M.size),
          width: g ? Math.abs(M.size) : k.size,
        };
      v &&
        (z.options =
          y || this.resolveDataElementOptions(_, t[_].active ? "active" : o));
      const U = z.options || t[_].options;
      (M3(z, U, j, u), k3(z, U, p.ratio), this.updateElement(t[_], _, z, o));
    }
  }
  _getStacks(t, i) {
    const { iScale: a } = this._cachedMeta,
      o = a
        .getMatchingVisibleMetas(this._type)
        .filter((p) => p.controller.options.grouped),
      r = a.options.stacked,
      u = [],
      d = this._cachedMeta.controller.getParsed(i),
      h = d && d[a.axis],
      g = (p) => {
        const y = p._parsed.find((_) => _[a.axis] === h),
          v = y && y[p.vScale.axis];
        if (yt(v) || isNaN(v)) return !0;
      };
    for (const p of o)
      if (
        !(i !== void 0 && g(p)) &&
        ((r === !1 ||
          u.indexOf(p.stack) === -1 ||
          (r === void 0 && p.stack === void 0)) &&
          u.push(p.stack),
        p.index === t)
      )
        break;
    return (u.length || u.push(void 0), u);
  }
  _getStackCount(t) {
    return this._getStacks(void 0, t).length;
  }
  _getAxisCount() {
    return this._getAxis().length;
  }
  getFirstScaleIdForIndexAxis() {
    const t = this.chart.scales,
      i = this.chart.options.indexAxis;
    return Object.keys(t)
      .filter((a) => t[a].axis === i)
      .shift();
  }
  _getAxis() {
    const t = {},
      i = this.getFirstScaleIdForIndexAxis();
    for (const a of this.chart.data.datasets)
      t[dt(this.chart.options.indexAxis === "x" ? a.xAxisID : a.yAxisID, i)] =
        !0;
    return Object.keys(t);
  }
  _getStackIndex(t, i, a) {
    const o = this._getStacks(t, a),
      r = i !== void 0 ? o.indexOf(i) : -1;
    return r === -1 ? o.length - 1 : r;
  }
  _getRuler() {
    const t = this.options,
      i = this._cachedMeta,
      a = i.iScale,
      o = [];
    let r, u;
    for (r = 0, u = i.data.length; r < u; ++r)
      o.push(a.getPixelForValue(this.getParsed(r)[a.axis], r));
    const d = t.barThickness;
    return {
      min: d || x3(i),
      pixels: o,
      start: a._startPixel,
      end: a._endPixel,
      stackCount: this._getStackCount(),
      scale: a,
      grouped: t.grouped,
      ratio: d ? 1 : t.categoryPercentage * t.barPercentage,
    };
  }
  _calculateBarValuePixels(t) {
    const {
        _cachedMeta: { vScale: i, _stacked: a, index: o },
        options: { base: r, minBarLength: u },
      } = this,
      d = r || 0,
      h = this.getParsed(t),
      g = h._custom,
      p = Fd(g);
    let y = h[i.axis],
      v = 0,
      _ = a ? this.applyStack(i, h, a) : y,
      S,
      M;
    (_ !== y && ((v = _ - y), (_ = y)),
      p &&
        ((y = g.barStart),
        (_ = g.barEnd - g.barStart),
        y !== 0 && Bn(y) !== Bn(g.barEnd) && (v = 0),
        (v += y)));
    const k = !yt(r) && !p ? r : v;
    let j = i.getPixelForValue(k);
    if (
      (this.chart.getDataVisibility(t)
        ? (S = i.getPixelForValue(v + _))
        : (S = j),
      (M = S - j),
      Math.abs(M) < u)
    ) {
      ((M = _3(M, i, d) * u), y === d && (j -= M / 2));
      const z = i.getPixelForDecimal(0),
        U = i.getPixelForDecimal(1),
        q = Math.min(z, U),
        R = Math.max(z, U);
      ((j = Math.max(Math.min(j, R), q)),
        (S = j + M),
        a &&
          !p &&
          (h._stacks[i.axis]._visualValues[o] =
            i.getValueForPixel(S) - i.getValueForPixel(j)));
    }
    if (j === i.getPixelForValue(d)) {
      const z = (Bn(M) * i.getLineWidthForValue(d)) / 2;
      ((j += z), (M -= z));
    }
    return { size: M, base: j, head: S, center: S + M / 2 };
  }
  _calculateBarIndexPixels(t, i) {
    const a = i.scale,
      o = this.options,
      r = o.skipNull,
      u = dt(o.maxBarThickness, 1 / 0);
    let d, h;
    const g = this._getAxisCount();
    if (i.grouped) {
      const p = r ? this._getStackCount(t) : i.stackCount,
        y = o.barThickness === "flex" ? v3(t, i, o, p * g) : y3(t, i, o, p * g),
        v =
          this.chart.options.indexAxis === "x"
            ? this.getDataset().xAxisID
            : this.getDataset().yAxisID,
        _ = this._getAxis().indexOf(dt(v, this.getFirstScaleIdForIndexAxis())),
        S =
          this._getStackIndex(
            this.index,
            this._cachedMeta.stack,
            r ? t : void 0,
          ) + _;
      ((d = y.start + y.chunk * S + y.chunk / 2),
        (h = Math.min(u, y.chunk * y.ratio)));
    } else
      ((d = a.getPixelForValue(this.getParsed(t)[a.axis], t)),
        (h = Math.min(u, i.min * i.ratio)));
    return { base: d - h / 2, head: d + h / 2, center: d, size: h };
  }
  draw() {
    const t = this._cachedMeta,
      i = t.vScale,
      a = t.data,
      o = a.length;
    let r = 0;
    for (; r < o; ++r)
      this.getParsed(r)[i.axis] !== null &&
        !a[r].hidden &&
        a[r].draw(this._ctx);
  }
}
(K(Rr, "id", "bar"),
  K(Rr, "defaults", {
    datasetElementType: !1,
    dataElementType: "bar",
    categoryPercentage: 0.8,
    barPercentage: 0.9,
    grouped: !0,
    animations: {
      numbers: {
        type: "number",
        properties: ["x", "y", "base", "width", "height"],
      },
    },
  }),
  K(Rr, "overrides", {
    scales: {
      _index_: { type: "category", offset: !0, grid: { offset: !0 } },
      _value_: { type: "linear", beginAtZero: !0 },
    },
  }));
class Hr extends En {
  initialize() {
    ((this.enableOptionSharing = !0), super.initialize());
  }
  parsePrimitiveData(t, i, a, o) {
    const r = super.parsePrimitiveData(t, i, a, o);
    for (let u = 0; u < r.length; u++)
      r[u]._custom = this.resolveDataElementOptions(u + a).radius;
    return r;
  }
  parseArrayData(t, i, a, o) {
    const r = super.parseArrayData(t, i, a, o);
    for (let u = 0; u < r.length; u++) {
      const d = i[a + u];
      r[u]._custom = dt(d[2], this.resolveDataElementOptions(u + a).radius);
    }
    return r;
  }
  parseObjectData(t, i, a, o) {
    const r = super.parseObjectData(t, i, a, o);
    for (let u = 0; u < r.length; u++) {
      const d = i[a + u];
      r[u]._custom = dt(
        d && d.r && +d.r,
        this.resolveDataElementOptions(u + a).radius,
      );
    }
    return r;
  }
  getMaxOverflow() {
    const t = this._cachedMeta.data;
    let i = 0;
    for (let a = t.length - 1; a >= 0; --a)
      i = Math.max(i, t[a].size(this.resolveDataElementOptions(a)) / 2);
    return i > 0 && i;
  }
  getLabelAndValue(t) {
    const i = this._cachedMeta,
      a = this.chart.data.labels || [],
      { xScale: o, yScale: r } = i,
      u = this.getParsed(t),
      d = o.getLabelForValue(u.x),
      h = r.getLabelForValue(u.y),
      g = u._custom;
    return {
      label: a[t] || "",
      value: "(" + d + ", " + h + (g ? ", " + g : "") + ")",
    };
  }
  update(t) {
    const i = this._cachedMeta.data;
    this.updateElements(i, 0, i.length, t);
  }
  updateElements(t, i, a, o) {
    const r = o === "reset",
      { iScale: u, vScale: d } = this._cachedMeta,
      { sharedOptions: h, includeOptions: g } = this._getSharedOptions(i, o),
      p = u.axis,
      y = d.axis;
    for (let v = i; v < i + a; v++) {
      const _ = t[v],
        S = !r && this.getParsed(v),
        M = {},
        k = (M[p] = r ? u.getPixelForDecimal(0.5) : u.getPixelForValue(S[p])),
        j = (M[y] = r ? d.getBasePixel() : d.getPixelForValue(S[y]));
      ((M.skip = isNaN(k) || isNaN(j)),
        g &&
          ((M.options =
            h || this.resolveDataElementOptions(v, _.active ? "active" : o)),
          r && (M.options.radius = 0)),
        this.updateElement(_, v, M, o));
    }
  }
  resolveDataElementOptions(t, i) {
    const a = this.getParsed(t);
    let o = super.resolveDataElementOptions(t, i);
    o.$shared && (o = Object.assign({}, o, { $shared: !1 }));
    const r = o.radius;
    return (
      i !== "active" && (o.radius = 0),
      (o.radius += dt(a && a._custom, r)),
      o
    );
  }
}
(K(Hr, "id", "bubble"),
  K(Hr, "defaults", {
    datasetElementType: !1,
    dataElementType: "point",
    animations: {
      numbers: {
        type: "number",
        properties: ["x", "y", "borderWidth", "radius"],
      },
    },
  }),
  K(Hr, "overrides", {
    scales: { x: { type: "linear" }, y: { type: "linear" } },
  }));
function E3(n, t, i) {
  let a = 1,
    o = 1,
    r = 0,
    u = 0;
  if (t < Zt) {
    const d = n,
      h = d + t,
      g = Math.cos(d),
      p = Math.sin(d),
      y = Math.cos(h),
      v = Math.sin(h),
      _ = (U, q, R) => (Pl(U, d, h, !0) ? 1 : Math.max(q, q * i, R, R * i)),
      S = (U, q, R) => (Pl(U, d, h, !0) ? -1 : Math.min(q, q * i, R, R * i)),
      M = _(0, g, y),
      k = _(re, p, v),
      j = S(jt, g, y),
      z = S(jt + re, p, v);
    ((a = (M - j) / 2),
      (o = (k - z) / 2),
      (r = -(M + j) / 2),
      (u = -(k + z) / 2));
  }
  return { ratioX: a, ratioY: o, offsetX: r, offsetY: u };
}
class _s extends En {
  constructor(t, i) {
    (super(t, i),
      (this.enableOptionSharing = !0),
      (this.innerRadius = void 0),
      (this.outerRadius = void 0),
      (this.offsetX = void 0),
      (this.offsetY = void 0));
  }
  linkScales() {}
  parse(t, i) {
    const a = this.getDataset().data,
      o = this._cachedMeta;
    if (this._parsing === !1) o._parsed = a;
    else {
      let r = (h) => +a[h];
      if (St(a[t])) {
        const { key: h = "value" } = this._parsing;
        r = (g) => +Zi(a[g], h);
      }
      let u, d;
      for (u = t, d = t + i; u < d; ++u) o._parsed[u] = r(u);
    }
  }
  _getRotation() {
    return kn(this.options.rotation - 90);
  }
  _getCircumference() {
    return kn(this.options.circumference);
  }
  _getRotationExtents() {
    let t = Zt,
      i = -Zt;
    for (let a = 0; a < this.chart.data.datasets.length; ++a)
      if (
        this.chart.isDatasetVisible(a) &&
        this.chart.getDatasetMeta(a).type === this._type
      ) {
        const o = this.chart.getDatasetMeta(a).controller,
          r = o._getRotation(),
          u = o._getCircumference();
        ((t = Math.min(t, r)), (i = Math.max(i, r + u)));
      }
    return { rotation: t, circumference: i - t };
  }
  update(t) {
    const i = this.chart,
      { chartArea: a } = i,
      o = this._cachedMeta,
      r = o.data,
      u =
        this.getMaxBorderWidth() + this.getMaxOffset(r) + this.options.spacing,
      d = Math.max((Math.min(a.width, a.height) - u) / 2, 0),
      h = Math.min(US(this.options.cutout, d), 1),
      g = this._getRingWeight(this.index),
      { circumference: p, rotation: y } = this._getRotationExtents(),
      { ratioX: v, ratioY: _, offsetX: S, offsetY: M } = E3(y, p, h),
      k = (a.width - u) / v,
      j = (a.height - u) / _,
      z = Math.max(Math.min(k, j) / 2, 0),
      U = Bx(this.options.radius, z),
      q = Math.max(U * h, 0),
      R = (U - q) / this._getVisibleDatasetWeightTotal();
    ((this.offsetX = S * U),
      (this.offsetY = M * U),
      (o.total = this.calculateTotal()),
      (this.outerRadius = U - R * this._getRingWeightOffset(this.index)),
      (this.innerRadius = Math.max(this.outerRadius - R * g, 0)),
      this.updateElements(r, 0, r.length, t));
  }
  _circumference(t, i) {
    const a = this.options,
      o = this._cachedMeta,
      r = this._getCircumference();
    return (i && a.animation.animateRotate) ||
      !this.chart.getDataVisibility(t) ||
      o._parsed[t] === null ||
      o.data[t].hidden
      ? 0
      : this.calculateCircumference((o._parsed[t] * r) / Zt);
  }
  updateElements(t, i, a, o) {
    const r = o === "reset",
      u = this.chart,
      d = u.chartArea,
      g = u.options.animation,
      p = (d.left + d.right) / 2,
      y = (d.top + d.bottom) / 2,
      v = r && g.animateScale,
      _ = v ? 0 : this.innerRadius,
      S = v ? 0 : this.outerRadius,
      { sharedOptions: M, includeOptions: k } = this._getSharedOptions(i, o);
    let j = this._getRotation(),
      z;
    for (z = 0; z < i; ++z) j += this._circumference(z, r);
    for (z = i; z < i + a; ++z) {
      const U = this._circumference(z, r),
        q = t[z],
        R = {
          x: p + this.offsetX,
          y: y + this.offsetY,
          startAngle: j,
          endAngle: j + U,
          circumference: U,
          outerRadius: S,
          innerRadius: _,
        };
      (k &&
        (R.options =
          M || this.resolveDataElementOptions(z, q.active ? "active" : o)),
        (j += U),
        this.updateElement(q, z, R, o));
    }
  }
  calculateTotal() {
    const t = this._cachedMeta,
      i = t.data;
    let a = 0,
      o;
    for (o = 0; o < i.length; o++) {
      const r = t._parsed[o];
      r !== null &&
        !isNaN(r) &&
        this.chart.getDataVisibility(o) &&
        !i[o].hidden &&
        (a += Math.abs(r));
    }
    return a;
  }
  calculateCircumference(t) {
    const i = this._cachedMeta.total;
    return i > 0 && !isNaN(t) ? Zt * (Math.abs(t) / i) : 0;
  }
  getLabelAndValue(t) {
    const i = this._cachedMeta,
      a = this.chart,
      o = a.data.labels || [],
      r = no(i._parsed[t], a.options.locale);
    return { label: o[t] || "", value: r };
  }
  getMaxBorderWidth(t) {
    let i = 0;
    const a = this.chart;
    let o, r, u, d, h;
    if (!t) {
      for (o = 0, r = a.data.datasets.length; o < r; ++o)
        if (a.isDatasetVisible(o)) {
          ((u = a.getDatasetMeta(o)), (t = u.data), (d = u.controller));
          break;
        }
    }
    if (!t) return 0;
    for (o = 0, r = t.length; o < r; ++o)
      ((h = d.resolveDataElementOptions(o)),
        h.borderAlign !== "inner" &&
          (i = Math.max(i, h.borderWidth || 0, h.hoverBorderWidth || 0)));
    return i;
  }
  getMaxOffset(t) {
    let i = 0;
    for (let a = 0, o = t.length; a < o; ++a) {
      const r = this.resolveDataElementOptions(a);
      i = Math.max(i, r.offset || 0, r.hoverOffset || 0);
    }
    return i;
  }
  _getRingWeightOffset(t) {
    let i = 0;
    for (let a = 0; a < t; ++a)
      this.chart.isDatasetVisible(a) && (i += this._getRingWeight(a));
    return i;
  }
  _getRingWeight(t) {
    return Math.max(dt(this.chart.data.datasets[t].weight, 1), 0);
  }
  _getVisibleDatasetWeightTotal() {
    return this._getRingWeightOffset(this.chart.data.datasets.length) || 1;
  }
}
(K(_s, "id", "doughnut"),
  K(_s, "defaults", {
    datasetElementType: !1,
    dataElementType: "arc",
    animation: { animateRotate: !0, animateScale: !1 },
    animations: {
      numbers: {
        type: "number",
        properties: [
          "circumference",
          "endAngle",
          "innerRadius",
          "outerRadius",
          "startAngle",
          "x",
          "y",
          "offset",
          "borderWidth",
          "spacing",
        ],
      },
    },
    cutout: "50%",
    rotation: 0,
    circumference: 360,
    radius: "100%",
    spacing: 0,
    indexAxis: "r",
  }),
  K(_s, "descriptors", {
    _scriptable: (t) => t !== "spacing",
    _indexable: (t) =>
      t !== "spacing" &&
      !t.startsWith("borderDash") &&
      !t.startsWith("hoverBorderDash"),
  }),
  K(_s, "overrides", {
    aspectRatio: 1,
    plugins: {
      legend: {
        labels: {
          generateLabels(t) {
            const i = t.data,
              {
                labels: {
                  pointStyle: a,
                  textAlign: o,
                  color: r,
                  useBorderRadius: u,
                  borderRadius: d,
                },
              } = t.legend.options;
            return i.labels.length && i.datasets.length
              ? i.labels.map((h, g) => {
                  const y = t.getDatasetMeta(0).controller.getStyle(g);
                  return {
                    text: h,
                    fillStyle: y.backgroundColor,
                    fontColor: r,
                    hidden: !t.getDataVisibility(g),
                    lineDash: y.borderDash,
                    lineDashOffset: y.borderDashOffset,
                    lineJoin: y.borderJoinStyle,
                    lineWidth: y.borderWidth,
                    strokeStyle: y.borderColor,
                    textAlign: o,
                    pointStyle: a,
                    borderRadius: u && (d || y.borderRadius),
                    index: g,
                  };
                })
              : [];
          },
        },
        onClick(t, i, a) {
          (a.chart.toggleDataVisibility(i.index), a.chart.update());
        },
      },
    },
  }));
class Ur extends En {
  initialize() {
    ((this.enableOptionSharing = !0),
      (this.supportsDecimation = !0),
      super.initialize());
  }
  update(t) {
    const i = this._cachedMeta,
      { dataset: a, data: o = [], _dataset: r } = i,
      u = this.chart._animationsDisabled;
    let { start: d, count: h } = Px(i, o, u);
    ((this._drawStart = d),
      (this._drawCount = h),
      Fx(i) && ((d = 0), (h = o.length)),
      (a._chart = this.chart),
      (a._datasetIndex = this.index),
      (a._decimated = !!r._decimated),
      (a.points = o));
    const g = this.resolveDatasetElementOptions(t);
    (this.options.showLine || (g.borderWidth = 0),
      (g.segment = this.options.segment),
      this.updateElement(a, void 0, { animated: !u, options: g }, t),
      this.updateElements(o, d, h, t));
  }
  updateElements(t, i, a, o) {
    const r = o === "reset",
      { iScale: u, vScale: d, _stacked: h, _dataset: g } = this._cachedMeta,
      { sharedOptions: p, includeOptions: y } = this._getSharedOptions(i, o),
      v = u.axis,
      _ = d.axis,
      { spanGaps: S, segment: M } = this.options,
      k = Sa(S) ? S : Number.POSITIVE_INFINITY,
      j = this.chart._animationsDisabled || r || o === "none",
      z = i + a,
      U = t.length;
    let q = i > 0 && this.getParsed(i - 1);
    for (let R = 0; R < U; ++R) {
      const P = t[R],
        X = j ? P : {};
      if (R < i || R >= z) {
        X.skip = !0;
        continue;
      }
      const G = this.getParsed(R),
        W = yt(G[_]),
        lt = (X[v] = u.getPixelForValue(G[v], R)),
        it = (X[_] =
          r || W
            ? d.getBasePixel()
            : d.getPixelForValue(h ? this.applyStack(d, G, h) : G[_], R));
      ((X.skip = isNaN(lt) || isNaN(it) || W),
        (X.stop = R > 0 && Math.abs(G[v] - q[v]) > k),
        M && ((X.parsed = G), (X.raw = g.data[R])),
        y &&
          (X.options =
            p || this.resolveDataElementOptions(R, P.active ? "active" : o)),
        j || this.updateElement(P, R, X, o),
        (q = G));
    }
  }
  getMaxOverflow() {
    const t = this._cachedMeta,
      i = t.dataset,
      a = (i.options && i.options.borderWidth) || 0,
      o = t.data || [];
    if (!o.length) return a;
    const r = o[0].size(this.resolveDataElementOptions(0)),
      u = o[o.length - 1].size(this.resolveDataElementOptions(o.length - 1));
    return Math.max(a, r, u) / 2;
  }
  draw() {
    const t = this._cachedMeta;
    (t.dataset.updateControlPoints(this.chart.chartArea, t.iScale.axis),
      super.draw());
  }
}
(K(Ur, "id", "line"),
  K(Ur, "defaults", {
    datasetElementType: "line",
    dataElementType: "point",
    showLine: !0,
    spanGaps: !1,
  }),
  K(Ur, "overrides", {
    scales: { _index_: { type: "category" }, _value_: { type: "linear" } },
  }));
class Vl extends En {
  constructor(t, i) {
    (super(t, i), (this.innerRadius = void 0), (this.outerRadius = void 0));
  }
  getLabelAndValue(t) {
    const i = this._cachedMeta,
      a = this.chart,
      o = a.data.labels || [],
      r = no(i._parsed[t].r, a.options.locale);
    return { label: o[t] || "", value: r };
  }
  parseObjectData(t, i, a, o) {
    return Jx.bind(this)(t, i, a, o);
  }
  update(t) {
    const i = this._cachedMeta.data;
    (this._updateRadius(), this.updateElements(i, 0, i.length, t));
  }
  getMinMax() {
    const t = this._cachedMeta,
      i = { min: Number.POSITIVE_INFINITY, max: Number.NEGATIVE_INFINITY };
    return (
      t.data.forEach((a, o) => {
        const r = this.getParsed(o).r;
        !isNaN(r) &&
          this.chart.getDataVisibility(o) &&
          (r < i.min && (i.min = r), r > i.max && (i.max = r));
      }),
      i
    );
  }
  _updateRadius() {
    const t = this.chart,
      i = t.chartArea,
      a = t.options,
      o = Math.min(i.right - i.left, i.bottom - i.top),
      r = Math.max(o / 2, 0),
      u = Math.max(a.cutoutPercentage ? (r / 100) * a.cutoutPercentage : 1, 0),
      d = (r - u) / t.getVisibleDatasetCount();
    ((this.outerRadius = r - d * this.index),
      (this.innerRadius = this.outerRadius - d));
  }
  updateElements(t, i, a, o) {
    const r = o === "reset",
      u = this.chart,
      h = u.options.animation,
      g = this._cachedMeta.rScale,
      p = g.xCenter,
      y = g.yCenter,
      v = g.getIndexAngle(0) - 0.5 * jt;
    let _ = v,
      S;
    const M = 360 / this.countVisibleElements();
    for (S = 0; S < i; ++S) _ += this._computeAngle(S, o, M);
    for (S = i; S < i + a; S++) {
      const k = t[S];
      let j = _,
        z = _ + this._computeAngle(S, o, M),
        U = u.getDataVisibility(S)
          ? g.getDistanceFromCenterForValue(this.getParsed(S).r)
          : 0;
      ((_ = z),
        r && (h.animateScale && (U = 0), h.animateRotate && (j = z = v)));
      const q = {
        x: p,
        y,
        innerRadius: 0,
        outerRadius: U,
        startAngle: j,
        endAngle: z,
        options: this.resolveDataElementOptions(S, k.active ? "active" : o),
      };
      this.updateElement(k, S, q, o);
    }
  }
  countVisibleElements() {
    const t = this._cachedMeta;
    let i = 0;
    return (
      t.data.forEach((a, o) => {
        !isNaN(this.getParsed(o).r) && this.chart.getDataVisibility(o) && i++;
      }),
      i
    );
  }
  _computeAngle(t, i, a) {
    return this.chart.getDataVisibility(t)
      ? kn(this.resolveDataElementOptions(t, i).angle || a)
      : 0;
  }
}
(K(Vl, "id", "polarArea"),
  K(Vl, "defaults", {
    dataElementType: "arc",
    animation: { animateRotate: !0, animateScale: !0 },
    animations: {
      numbers: {
        type: "number",
        properties: [
          "x",
          "y",
          "startAngle",
          "endAngle",
          "innerRadius",
          "outerRadius",
        ],
      },
    },
    indexAxis: "r",
    startAngle: 0,
  }),
  K(Vl, "overrides", {
    aspectRatio: 1,
    plugins: {
      legend: {
        labels: {
          generateLabels(t) {
            const i = t.data;
            if (i.labels.length && i.datasets.length) {
              const {
                labels: { pointStyle: a, color: o },
              } = t.legend.options;
              return i.labels.map((r, u) => {
                const h = t.getDatasetMeta(0).controller.getStyle(u);
                return {
                  text: r,
                  fillStyle: h.backgroundColor,
                  strokeStyle: h.borderColor,
                  fontColor: o,
                  lineWidth: h.borderWidth,
                  pointStyle: a,
                  hidden: !t.getDataVisibility(u),
                  index: u,
                };
              });
            }
            return [];
          },
        },
        onClick(t, i, a) {
          (a.chart.toggleDataVisibility(i.index), a.chart.update());
        },
      },
    },
    scales: {
      r: {
        type: "radialLinear",
        angleLines: { display: !1 },
        beginAtZero: !0,
        grid: { circular: !0 },
        pointLabels: { display: !1 },
        startAngle: 0,
      },
    },
  }));
class cf extends _s {}
(K(cf, "id", "pie"),
  K(cf, "defaults", {
    cutout: 0,
    rotation: 0,
    circumference: 360,
    radius: "100%",
  }));
class Vr extends En {
  getLabelAndValue(t) {
    const i = this._cachedMeta.vScale,
      a = this.getParsed(t);
    return {
      label: i.getLabels()[t],
      value: "" + i.getLabelForValue(a[i.axis]),
    };
  }
  parseObjectData(t, i, a, o) {
    return Jx.bind(this)(t, i, a, o);
  }
  update(t) {
    const i = this._cachedMeta,
      a = i.dataset,
      o = i.data || [],
      r = i.iScale.getLabels();
    if (((a.points = o), t !== "resize")) {
      const u = this.resolveDatasetElementOptions(t);
      this.options.showLine || (u.borderWidth = 0);
      const d = { _loop: !0, _fullLoop: r.length === o.length, options: u };
      this.updateElement(a, void 0, d, t);
    }
    this.updateElements(o, 0, o.length, t);
  }
  updateElements(t, i, a, o) {
    const r = this._cachedMeta.rScale,
      u = o === "reset";
    for (let d = i; d < i + a; d++) {
      const h = t[d],
        g = this.resolveDataElementOptions(d, h.active ? "active" : o),
        p = r.getPointPositionForValue(d, this.getParsed(d).r),
        y = u ? r.xCenter : p.x,
        v = u ? r.yCenter : p.y,
        _ = {
          x: y,
          y: v,
          angle: p.angle,
          skip: isNaN(y) || isNaN(v),
          options: g,
        };
      this.updateElement(h, d, _, o);
    }
  }
}
(K(Vr, "id", "radar"),
  K(Vr, "defaults", {
    datasetElementType: "line",
    dataElementType: "point",
    indexAxis: "r",
    showLine: !0,
    elements: { line: { fill: "start" } },
  }),
  K(Vr, "overrides", {
    aspectRatio: 1,
    scales: { r: { type: "radialLinear" } },
  }));
class qr extends En {
  getLabelAndValue(t) {
    const i = this._cachedMeta,
      a = this.chart.data.labels || [],
      { xScale: o, yScale: r } = i,
      u = this.getParsed(t),
      d = o.getLabelForValue(u.x),
      h = r.getLabelForValue(u.y);
    return { label: a[t] || "", value: "(" + d + ", " + h + ")" };
  }
  update(t) {
    const i = this._cachedMeta,
      { data: a = [] } = i,
      o = this.chart._animationsDisabled;
    let { start: r, count: u } = Px(i, a, o);
    if (
      ((this._drawStart = r),
      (this._drawCount = u),
      Fx(i) && ((r = 0), (u = a.length)),
      this.options.showLine)
    ) {
      this.datasetElementType || this.addElements();
      const { dataset: d, _dataset: h } = i;
      ((d._chart = this.chart),
        (d._datasetIndex = this.index),
        (d._decimated = !!h._decimated),
        (d.points = a));
      const g = this.resolveDatasetElementOptions(t);
      ((g.segment = this.options.segment),
        this.updateElement(d, void 0, { animated: !o, options: g }, t));
    } else
      this.datasetElementType &&
        (delete i.dataset, (this.datasetElementType = !1));
    this.updateElements(a, r, u, t);
  }
  addElements() {
    const { showLine: t } = this.options;
    (!this.datasetElementType &&
      t &&
      (this.datasetElementType = this.chart.registry.getElement("line")),
      super.addElements());
  }
  updateElements(t, i, a, o) {
    const r = o === "reset",
      { iScale: u, vScale: d, _stacked: h, _dataset: g } = this._cachedMeta,
      p = this.resolveDataElementOptions(i, o),
      y = this.getSharedOptions(p),
      v = this.includeOptions(o, y),
      _ = u.axis,
      S = d.axis,
      { spanGaps: M, segment: k } = this.options,
      j = Sa(M) ? M : Number.POSITIVE_INFINITY,
      z = this.chart._animationsDisabled || r || o === "none";
    let U = i > 0 && this.getParsed(i - 1);
    for (let q = i; q < i + a; ++q) {
      const R = t[q],
        P = this.getParsed(q),
        X = z ? R : {},
        G = yt(P[S]),
        W = (X[_] = u.getPixelForValue(P[_], q)),
        lt = (X[S] =
          r || G
            ? d.getBasePixel()
            : d.getPixelForValue(h ? this.applyStack(d, P, h) : P[S], q));
      ((X.skip = isNaN(W) || isNaN(lt) || G),
        (X.stop = q > 0 && Math.abs(P[_] - U[_]) > j),
        k && ((X.parsed = P), (X.raw = g.data[q])),
        v &&
          (X.options =
            y || this.resolveDataElementOptions(q, R.active ? "active" : o)),
        z || this.updateElement(R, q, X, o),
        (U = P));
    }
    this.updateSharedOptions(y, o, p);
  }
  getMaxOverflow() {
    const t = this._cachedMeta,
      i = t.data || [];
    if (!this.options.showLine) {
      let d = 0;
      for (let h = i.length - 1; h >= 0; --h)
        d = Math.max(d, i[h].size(this.resolveDataElementOptions(h)) / 2);
      return d > 0 && d;
    }
    const a = t.dataset,
      o = (a.options && a.options.borderWidth) || 0;
    if (!i.length) return o;
    const r = i[0].size(this.resolveDataElementOptions(0)),
      u = i[i.length - 1].size(this.resolveDataElementOptions(i.length - 1));
    return Math.max(o, r, u) / 2;
  }
}
(K(qr, "id", "scatter"),
  K(qr, "defaults", {
    datasetElementType: !1,
    dataElementType: "point",
    showLine: !1,
    fill: !1,
  }),
  K(qr, "overrides", {
    interaction: { mode: "point" },
    scales: { x: { type: "linear" }, y: { type: "linear" } },
  }));
var C3 = Object.freeze({
  __proto__: null,
  BarController: Rr,
  BubbleController: Hr,
  DoughnutController: _s,
  LineController: Ur,
  PieController: cf,
  PolarAreaController: Vl,
  RadarController: Vr,
  ScatterController: qr,
});
function xs() {
  throw new Error(
    "This method is not implemented: Check that a complete date adapter is provided.",
  );
}
class $f {
  constructor(t) {
    K(this, "options");
    this.options = t || {};
  }
  static override(t) {
    Object.assign($f.prototype, t);
  }
  init() {}
  formats() {
    return xs();
  }
  parse() {
    return xs();
  }
  format() {
    return xs();
  }
  add() {
    return xs();
  }
  diff() {
    return xs();
  }
  startOf() {
    return xs();
  }
  endOf() {
    return xs();
  }
}
var j3 = { _date: $f };
function T3(n, t, i, a) {
  const { controller: o, data: r, _sorted: u } = n,
    d = o._cachedMeta.iScale,
    h = n.dataset && n.dataset.options ? n.dataset.options.spanGaps : null;
  if (d && t === d.axis && t !== "r" && u && r.length) {
    const g = d._reversePixels ? IS : ci;
    if (a) {
      if (o._sharedOptions) {
        const p = r[0],
          y = typeof p.getRange == "function" && p.getRange(t);
        if (y) {
          const v = g(r, t, i - y),
            _ = g(r, t, i + y);
          return { lo: v.lo, hi: _.hi };
        }
      }
    } else {
      const p = g(r, t, i);
      if (h) {
        const { vScale: y } = o._cachedMeta,
          { _parsed: v } = n,
          _ = v
            .slice(0, p.lo + 1)
            .reverse()
            .findIndex((M) => !yt(M[y.axis]));
        p.lo -= Math.max(0, _);
        const S = v.slice(p.hi).findIndex((M) => !yt(M[y.axis]));
        p.hi += Math.max(0, S);
      }
      return p;
    }
  }
  return { lo: 0, hi: r.length - 1 };
}
function xc(n, t, i, a, o) {
  const r = n.getSortedVisibleDatasetMetas(),
    u = i[t];
  for (let d = 0, h = r.length; d < h; ++d) {
    const { index: g, data: p } = r[d],
      { lo: y, hi: v } = T3(r[d], t, u, o);
    for (let _ = y; _ <= v; ++_) {
      const S = p[_];
      S.skip || a(S, g, _);
    }
  }
}
function N3(n) {
  const t = n.indexOf("x") !== -1,
    i = n.indexOf("y") !== -1;
  return function (a, o) {
    const r = t ? Math.abs(a.x - o.x) : 0,
      u = i ? Math.abs(a.y - o.y) : 0;
    return Math.sqrt(Math.pow(r, 2) + Math.pow(u, 2));
  };
}
function Gd(n, t, i, a, o) {
  const r = [];
  return (
    (!o && !n.isPointInArea(t)) ||
      xc(
        n,
        i,
        t,
        function (d, h, g) {
          (!o && !ui(d, n.chartArea, 0)) ||
            (d.inRange(t.x, t.y, a) &&
              r.push({ element: d, datasetIndex: h, index: g }));
        },
        !0,
      ),
    r
  );
}
function O3(n, t, i, a) {
  let o = [];
  function r(u, d, h) {
    const { startAngle: g, endAngle: p } = u.getProps(
        ["startAngle", "endAngle"],
        a,
      ),
      { angle: y } = Ux(u, { x: t.x, y: t.y });
    Pl(y, g, p) && o.push({ element: u, datasetIndex: d, index: h });
  }
  return (xc(n, i, t, r), o);
}
function z3(n, t, i, a, o, r) {
  let u = [];
  const d = N3(i);
  let h = Number.POSITIVE_INFINITY;
  function g(p, y, v) {
    const _ = p.inRange(t.x, t.y, o);
    if (a && !_) return;
    const S = p.getCenterPoint(o);
    if (!(!!r || n.isPointInArea(S)) && !_) return;
    const k = d(t, S);
    k < h
      ? ((u = [{ element: p, datasetIndex: y, index: v }]), (h = k))
      : k === h && u.push({ element: p, datasetIndex: y, index: v });
  }
  return (xc(n, i, t, g), u);
}
function Zd(n, t, i, a, o, r) {
  return !r && !n.isPointInArea(t)
    ? []
    : i === "r" && !a
      ? O3(n, t, i, o)
      : z3(n, t, i, a, o, r);
}
function Gb(n, t, i, a, o) {
  const r = [],
    u = i === "x" ? "inXRange" : "inYRange";
  let d = !1;
  return (
    xc(n, i, t, (h, g, p) => {
      h[u] &&
        h[u](t[i], o) &&
        (r.push({ element: h, datasetIndex: g, index: p }),
        (d = d || h.inRange(t.x, t.y, o)));
    }),
    a && !d ? [] : r
  );
}
var D3 = {
  modes: {
    index(n, t, i, a) {
      const o = vs(t, n),
        r = i.axis || "x",
        u = i.includeInvisible || !1,
        d = i.intersect ? Gd(n, o, r, a, u) : Zd(n, o, r, !1, a, u),
        h = [];
      return d.length
        ? (n.getSortedVisibleDatasetMetas().forEach((g) => {
            const p = d[0].index,
              y = g.data[p];
            y &&
              !y.skip &&
              h.push({ element: y, datasetIndex: g.index, index: p });
          }),
          h)
        : [];
    },
    dataset(n, t, i, a) {
      const o = vs(t, n),
        r = i.axis || "xy",
        u = i.includeInvisible || !1;
      let d = i.intersect ? Gd(n, o, r, a, u) : Zd(n, o, r, !1, a, u);
      if (d.length > 0) {
        const h = d[0].datasetIndex,
          g = n.getDatasetMeta(h).data;
        d = [];
        for (let p = 0; p < g.length; ++p)
          d.push({ element: g[p], datasetIndex: h, index: p });
      }
      return d;
    },
    point(n, t, i, a) {
      const o = vs(t, n),
        r = i.axis || "xy",
        u = i.includeInvisible || !1;
      return Gd(n, o, r, a, u);
    },
    nearest(n, t, i, a) {
      const o = vs(t, n),
        r = i.axis || "xy",
        u = i.includeInvisible || !1;
      return Zd(n, o, r, i.intersect, a, u);
    },
    x(n, t, i, a) {
      const o = vs(t, n);
      return Gb(n, o, "x", i.intersect, a);
    },
    y(n, t, i, a) {
      const o = vs(t, n);
      return Gb(n, o, "y", i.intersect, a);
    },
  },
};
const uy = ["left", "top", "right", "bottom"];
function kl(n, t) {
  return n.filter((i) => i.pos === t);
}
function Zb(n, t) {
  return n.filter((i) => uy.indexOf(i.pos) === -1 && i.box.axis === t);
}
function El(n, t) {
  return n.sort((i, a) => {
    const o = t ? a : i,
      r = t ? i : a;
    return o.weight === r.weight ? o.index - r.index : o.weight - r.weight;
  });
}
function L3(n) {
  const t = [];
  let i, a, o, r, u, d;
  for (i = 0, a = (n || []).length; i < a; ++i)
    ((o = n[i]),
      ({
        position: r,
        options: { stack: u, stackWeight: d = 1 },
      } = o),
      t.push({
        index: i,
        box: o,
        pos: r,
        horizontal: o.isHorizontal(),
        weight: o.weight,
        stack: u && r + u,
        stackWeight: d,
      }));
  return t;
}
function B3(n) {
  const t = {};
  for (const i of n) {
    const { stack: a, pos: o, stackWeight: r } = i;
    if (!a || !uy.includes(o)) continue;
    const u = t[a] || (t[a] = { count: 0, placed: 0, weight: 0, size: 0 });
    (u.count++, (u.weight += r));
  }
  return t;
}
function R3(n, t) {
  const i = B3(n),
    { vBoxMaxWidth: a, hBoxMaxHeight: o } = t;
  let r, u, d;
  for (r = 0, u = n.length; r < u; ++r) {
    d = n[r];
    const { fullSize: h } = d.box,
      g = i[d.stack],
      p = g && d.stackWeight / g.weight;
    d.horizontal
      ? ((d.width = p ? p * a : h && t.availableWidth), (d.height = o))
      : ((d.width = a), (d.height = p ? p * o : h && t.availableHeight));
  }
  return i;
}
function H3(n) {
  const t = L3(n),
    i = El(
      t.filter((g) => g.box.fullSize),
      !0,
    ),
    a = El(kl(t, "left"), !0),
    o = El(kl(t, "right")),
    r = El(kl(t, "top"), !0),
    u = El(kl(t, "bottom")),
    d = Zb(t, "x"),
    h = Zb(t, "y");
  return {
    fullSize: i,
    leftAndTop: a.concat(r),
    rightAndBottom: o.concat(h).concat(u).concat(d),
    chartArea: kl(t, "chartArea"),
    vertical: a.concat(o).concat(h),
    horizontal: r.concat(u).concat(d),
  };
}
function Qb(n, t, i, a) {
  return Math.max(n[i], t[i]) + Math.max(n[a], t[a]);
}
function dy(n, t) {
  ((n.top = Math.max(n.top, t.top)),
    (n.left = Math.max(n.left, t.left)),
    (n.bottom = Math.max(n.bottom, t.bottom)),
    (n.right = Math.max(n.right, t.right)));
}
function U3(n, t, i, a) {
  const { pos: o, box: r } = i,
    u = n.maxPadding;
  if (!St(o)) {
    i.size && (n[o] -= i.size);
    const y = a[i.stack] || { size: 0, count: 1 };
    ((y.size = Math.max(y.size, i.horizontal ? r.height : r.width)),
      (i.size = y.size / y.count),
      (n[o] += i.size));
  }
  r.getPadding && dy(u, r.getPadding());
  const d = Math.max(0, t.outerWidth - Qb(u, n, "left", "right")),
    h = Math.max(0, t.outerHeight - Qb(u, n, "top", "bottom")),
    g = d !== n.w,
    p = h !== n.h;
  return (
    (n.w = d),
    (n.h = h),
    i.horizontal ? { same: g, other: p } : { same: p, other: g }
  );
}
function V3(n) {
  const t = n.maxPadding;
  function i(a) {
    const o = Math.max(t[a] - n[a], 0);
    return ((n[a] += o), o);
  }
  ((n.y += i("top")), (n.x += i("left")), i("right"), i("bottom"));
}
function q3(n, t) {
  const i = t.maxPadding;
  function a(o) {
    const r = { left: 0, top: 0, right: 0, bottom: 0 };
    return (
      o.forEach((u) => {
        r[u] = Math.max(t[u], i[u]);
      }),
      r
    );
  }
  return a(n ? ["left", "right"] : ["top", "bottom"]);
}
function Ol(n, t, i, a) {
  const o = [];
  let r, u, d, h, g, p;
  for (r = 0, u = n.length, g = 0; r < u; ++r) {
    ((d = n[r]),
      (h = d.box),
      h.update(d.width || t.w, d.height || t.h, q3(d.horizontal, t)));
    const { same: y, other: v } = U3(t, i, d, a);
    ((g |= y && o.length), (p = p || v), h.fullSize || o.push(d));
  }
  return (g && Ol(o, t, i, a)) || p;
}
function jr(n, t, i, a, o) {
  ((n.top = i),
    (n.left = t),
    (n.right = t + a),
    (n.bottom = i + o),
    (n.width = a),
    (n.height = o));
}
function Kb(n, t, i, a) {
  const o = i.padding;
  let { x: r, y: u } = t;
  for (const d of n) {
    const h = d.box,
      g = a[d.stack] || { placed: 0, weight: 1 },
      p = d.stackWeight / g.weight || 1;
    if (d.horizontal) {
      const y = t.w * p,
        v = g.size || h.height;
      (Xl(g.start) && (u = g.start),
        h.fullSize
          ? jr(h, o.left, u, i.outerWidth - o.right - o.left, v)
          : jr(h, t.left + g.placed, u, y, v),
        (g.start = u),
        (g.placed += y),
        (u = h.bottom));
    } else {
      const y = t.h * p,
        v = g.size || h.width;
      (Xl(g.start) && (r = g.start),
        h.fullSize
          ? jr(h, r, o.top, v, i.outerHeight - o.bottom - o.top)
          : jr(h, r, t.top + g.placed, v, y),
        (g.start = r),
        (g.placed += y),
        (r = h.right));
    }
  }
  ((t.x = r), (t.y = u));
}
var Te = {
  addBox(n, t) {
    (n.boxes || (n.boxes = []),
      (t.fullSize = t.fullSize || !1),
      (t.position = t.position || "top"),
      (t.weight = t.weight || 0),
      (t._layers =
        t._layers ||
        function () {
          return [
            {
              z: 0,
              draw(i) {
                t.draw(i);
              },
            },
          ];
        }),
      n.boxes.push(t));
  },
  removeBox(n, t) {
    const i = n.boxes ? n.boxes.indexOf(t) : -1;
    i !== -1 && n.boxes.splice(i, 1);
  },
  configure(n, t, i) {
    ((t.fullSize = i.fullSize),
      (t.position = i.position),
      (t.weight = i.weight));
  },
  update(n, t, i, a) {
    if (!n) return;
    const o = Oe(n.options.layout.padding),
      r = Math.max(t - o.width, 0),
      u = Math.max(i - o.height, 0),
      d = H3(n.boxes),
      h = d.vertical,
      g = d.horizontal;
    Lt(n.boxes, (M) => {
      typeof M.beforeLayout == "function" && M.beforeLayout();
    });
    const p =
        h.reduce(
          (M, k) => (k.box.options && k.box.options.display === !1 ? M : M + 1),
          0,
        ) || 1,
      y = Object.freeze({
        outerWidth: t,
        outerHeight: i,
        padding: o,
        availableWidth: r,
        availableHeight: u,
        vBoxMaxWidth: r / 2 / p,
        hBoxMaxHeight: u / 2,
      }),
      v = Object.assign({}, o);
    dy(v, Oe(a));
    const _ = Object.assign(
        { maxPadding: v, w: r, h: u, x: o.left, y: o.top },
        o,
      ),
      S = R3(h.concat(g), y);
    (Ol(d.fullSize, _, y, S),
      Ol(h, _, y, S),
      Ol(g, _, y, S) && Ol(h, _, y, S),
      V3(_),
      Kb(d.leftAndTop, _, y, S),
      (_.x += _.w),
      (_.y += _.h),
      Kb(d.rightAndBottom, _, y, S),
      (n.chartArea = {
        left: _.left,
        top: _.top,
        right: _.left + _.w,
        bottom: _.top + _.h,
        height: _.h,
        width: _.w,
      }),
      Lt(d.chartArea, (M) => {
        const k = M.box;
        (Object.assign(k, n.chartArea),
          k.update(_.w, _.h, { left: 0, top: 0, right: 0, bottom: 0 }));
      }));
  },
};
class fy {
  acquireContext(t, i) {}
  releaseContext(t) {
    return !1;
  }
  addEventListener(t, i, a) {}
  removeEventListener(t, i, a) {}
  getDevicePixelRatio() {
    return 1;
  }
  getMaximumSize(t, i, a, o) {
    return (
      (i = Math.max(0, i || t.width)),
      (a = a || t.height),
      { width: i, height: Math.max(0, o ? Math.floor(i / o) : a) }
    );
  }
  isAttached(t) {
    return !0;
  }
  updateConfig(t) {}
}
class Y3 extends fy {
  acquireContext(t) {
    return (t && t.getContext && t.getContext("2d")) || null;
  }
  updateConfig(t) {
    t.options.animation = !1;
  }
}
const Yr = "$chartjs",
  X3 = {
    touchstart: "mousedown",
    touchmove: "mousemove",
    touchend: "mouseup",
    pointerenter: "mouseenter",
    pointerdown: "mousedown",
    pointermove: "mousemove",
    pointerup: "mouseup",
    pointerleave: "mouseout",
    pointerout: "mouseout",
  },
  Wb = (n) => n === null || n === "";
function P3(n, t) {
  const i = n.style,
    a = n.getAttribute("height"),
    o = n.getAttribute("width");
  if (
    ((n[Yr] = {
      initial: {
        height: a,
        width: o,
        style: { display: i.display, height: i.height, width: i.width },
      },
    }),
    (i.display = i.display || "block"),
    (i.boxSizing = i.boxSizing || "border-box"),
    Wb(o))
  ) {
    const r = zb(n, "width");
    r !== void 0 && (n.width = r);
  }
  if (Wb(a))
    if (n.style.height === "") n.height = n.width / (t || 2);
    else {
      const r = zb(n, "height");
      r !== void 0 && (n.height = r);
    }
  return n;
}
const hy = F5 ? { passive: !0 } : !1;
function F3(n, t, i) {
  n && n.addEventListener(t, i, hy);
}
function G3(n, t, i) {
  n && n.canvas && n.canvas.removeEventListener(t, i, hy);
}
function Z3(n, t) {
  const i = X3[n.type] || n.type,
    { x: a, y: o } = vs(n, t);
  return {
    type: i,
    chart: t,
    native: n,
    x: a !== void 0 ? a : null,
    y: o !== void 0 ? o : null,
  };
}
function lc(n, t) {
  for (const i of n) if (i === t || i.contains(t)) return !0;
}
function Q3(n, t, i) {
  const a = n.canvas,
    o = new MutationObserver((r) => {
      let u = !1;
      for (const d of r)
        ((u = u || lc(d.addedNodes, a)), (u = u && !lc(d.removedNodes, a)));
      u && i();
    });
  return (o.observe(document, { childList: !0, subtree: !0 }), o);
}
function K3(n, t, i) {
  const a = n.canvas,
    o = new MutationObserver((r) => {
      let u = !1;
      for (const d of r)
        ((u = u || lc(d.removedNodes, a)), (u = u && !lc(d.addedNodes, a)));
      u && i();
    });
  return (o.observe(document, { childList: !0, subtree: !0 }), o);
}
const Gl = new Map();
let $b = 0;
function my() {
  const n = window.devicePixelRatio;
  n !== $b &&
    (($b = n),
    Gl.forEach((t, i) => {
      i.currentDevicePixelRatio !== n && t();
    }));
}
function W3(n, t) {
  (Gl.size || window.addEventListener("resize", my), Gl.set(n, t));
}
function $3(n) {
  (Gl.delete(n), Gl.size || window.removeEventListener("resize", my));
}
function I3(n, t, i) {
  const a = n.canvas,
    o = a && Wf(a);
  if (!o) return;
  const r = Xx((d, h) => {
      const g = o.clientWidth;
      (i(d, h), g < o.clientWidth && i());
    }, window),
    u = new ResizeObserver((d) => {
      const h = d[0],
        g = h.contentRect.width,
        p = h.contentRect.height;
      (g === 0 && p === 0) || r(g, p);
    });
  return (u.observe(o), W3(n, r), u);
}
function Qd(n, t, i) {
  (i && i.disconnect(), t === "resize" && $3(n));
}
function J3(n, t, i) {
  const a = n.canvas,
    o = Xx((r) => {
      n.ctx !== null && i(Z3(r, n));
    }, n);
  return (F3(a, t, o), o);
}
class tM extends fy {
  acquireContext(t, i) {
    const a = t && t.getContext && t.getContext("2d");
    return a && a.canvas === t ? (P3(t, i), a) : null;
  }
  releaseContext(t) {
    const i = t.canvas;
    if (!i[Yr]) return !1;
    const a = i[Yr].initial;
    ["height", "width"].forEach((r) => {
      const u = a[r];
      yt(u) ? i.removeAttribute(r) : i.setAttribute(r, u);
    });
    const o = a.style || {};
    return (
      Object.keys(o).forEach((r) => {
        i.style[r] = o[r];
      }),
      (i.width = i.width),
      delete i[Yr],
      !0
    );
  }
  addEventListener(t, i, a) {
    this.removeEventListener(t, i);
    const o = t.$proxies || (t.$proxies = {}),
      u = { attach: Q3, detach: K3, resize: I3 }[i] || J3;
    o[i] = u(t, i, a);
  }
  removeEventListener(t, i) {
    const a = t.$proxies || (t.$proxies = {}),
      o = a[i];
    if (!o) return;
    ((({ attach: Qd, detach: Qd, resize: Qd })[i] || G3)(t, i, o),
      (a[i] = void 0));
  }
  getDevicePixelRatio() {
    return window.devicePixelRatio;
  }
  getMaximumSize(t, i, a, o) {
    return P5(t, i, a, o);
  }
  isAttached(t) {
    const i = t && Wf(t);
    return !!(i && i.isConnected);
  }
}
function eM(n) {
  return !Kf() || (typeof OffscreenCanvas < "u" && n instanceof OffscreenCanvas)
    ? Y3
    : tM;
}
var Br;
let fi =
  ((Br = class {
    constructor() {
      K(this, "x");
      K(this, "y");
      K(this, "active", !1);
      K(this, "options");
      K(this, "$animations");
    }
    tooltipPosition(t) {
      const { x: i, y: a } = this.getProps(["x", "y"], t);
      return { x: i, y: a };
    }
    hasValue() {
      return Sa(this.x) && Sa(this.y);
    }
    getProps(t, i) {
      const a = this.$animations;
      if (!i || !a) return this;
      const o = {};
      return (
        t.forEach((r) => {
          o[r] = a[r] && a[r].active() ? a[r]._to : this[r];
        }),
        o
      );
    }
  }),
  K(Br, "defaults", {}),
  K(Br, "defaultRoutes"),
  Br);
function nM(n, t) {
  const i = n.options.ticks,
    a = iM(n),
    o = Math.min(i.maxTicksLimit || a, a),
    r = i.major.enabled ? aM(t) : [],
    u = r.length,
    d = r[0],
    h = r[u - 1],
    g = [];
  if (u > o) return (lM(t, g, r, u / o), g);
  const p = sM(r, t, o);
  if (u > 0) {
    let y, v;
    const _ = u > 1 ? Math.round((h - d) / (u - 1)) : null;
    for (Tr(t, g, p, yt(_) ? 0 : d - _, d), y = 0, v = u - 1; y < v; y++)
      Tr(t, g, p, r[y], r[y + 1]);
    return (Tr(t, g, p, h, yt(_) ? t.length : h + _), g);
  }
  return (Tr(t, g, p), g);
}
function iM(n) {
  const t = n.options.offset,
    i = n._tickSize(),
    a = n._length / i + (t ? 0 : 1),
    o = n._maxLength / i;
  return Math.floor(Math.min(a, o));
}
function sM(n, t, i) {
  const a = oM(n),
    o = t.length / i;
  if (!a) return Math.max(o, 1);
  const r = ZS(a);
  for (let u = 0, d = r.length - 1; u < d; u++) {
    const h = r[u];
    if (h > o) return h;
  }
  return Math.max(o, 1);
}
function aM(n) {
  const t = [];
  let i, a;
  for (i = 0, a = n.length; i < a; i++) n[i].major && t.push(i);
  return t;
}
function lM(n, t, i, a) {
  let o = 0,
    r = i[0],
    u;
  for (a = Math.ceil(a), u = 0; u < n.length; u++)
    u === r && (t.push(n[u]), o++, (r = i[o * a]));
}
function Tr(n, t, i, a, o) {
  const r = dt(a, 0),
    u = Math.min(dt(o, n.length), n.length);
  let d = 0,
    h,
    g,
    p;
  for (
    i = Math.ceil(i), o && ((h = o - a), (i = h / Math.floor(h / i))), p = r;
    p < 0;
  )
    (d++, (p = Math.round(r + d * i)));
  for (g = Math.max(r, 0); g < u; g++)
    g === p && (t.push(n[g]), d++, (p = Math.round(r + d * i)));
}
function oM(n) {
  const t = n.length;
  let i, a;
  if (t < 2) return !1;
  for (a = n[0], i = 1; i < t; ++i) if (n[i] - n[i - 1] !== a) return !1;
  return a;
}
const rM = (n) => (n === "left" ? "right" : n === "right" ? "left" : n),
  Ib = (n, t, i) => (t === "top" || t === "left" ? n[t] + i : n[t] - i),
  Jb = (n, t) => Math.min(t || n, n);
function t0(n, t) {
  const i = [],
    a = n.length / t,
    o = n.length;
  let r = 0;
  for (; r < o; r += a) i.push(n[Math.floor(r)]);
  return i;
}
function cM(n, t, i) {
  const a = n.ticks.length,
    o = Math.min(t, a - 1),
    r = n._startPixel,
    u = n._endPixel,
    d = 1e-6;
  let h = n.getPixelForTick(o),
    g;
  if (!(
    i &&
    (a === 1
      ? (g = Math.max(h - r, u - h))
      : t === 0
        ? (g = (n.getPixelForTick(1) - h) / 2)
        : (g = (h - n.getPixelForTick(o - 1)) / 2),
    (h += o < t ? g : -g),
    h < r - d || h > u + d)
  ))
    return h;
}
function uM(n, t) {
  Lt(n, (i) => {
    const a = i.gc,
      o = a.length / 2;
    let r;
    if (o > t) {
      for (r = 0; r < o; ++r) delete i.data[a[r]];
      a.splice(0, o);
    }
  });
}
function Cl(n) {
  return n.drawTicks ? n.tickLength : 0;
}
function e0(n, t) {
  if (!n.display) return 0;
  const i = be(n.font, t),
    a = Oe(n.padding);
  return ($t(n.text) ? n.text.length : 1) * i.lineHeight + a.height;
}
function dM(n, t) {
  return Ki(n, { scale: t, type: "scale" });
}
function fM(n, t, i) {
  return Ki(n, { tick: i, index: t, type: "tick" });
}
function hM(n, t, i) {
  let a = Xf(n);
  return (((i && t !== "right") || (!i && t === "right")) && (a = rM(a)), a);
}
function mM(n, t, i, a) {
  const { top: o, left: r, bottom: u, right: d, chart: h } = n,
    { chartArea: g, scales: p } = h;
  let y = 0,
    v,
    _,
    S;
  const M = u - o,
    k = d - r;
  if (n.isHorizontal()) {
    if (((_ = Ce(a, r, d)), St(i))) {
      const j = Object.keys(i)[0],
        z = i[j];
      S = p[j].getPixelForValue(z) + M - t;
    } else
      i === "center" ? (S = (g.bottom + g.top) / 2 + M - t) : (S = Ib(n, i, t));
    v = d - r;
  } else {
    if (St(i)) {
      const j = Object.keys(i)[0],
        z = i[j];
      _ = p[j].getPixelForValue(z) - k + t;
    } else
      i === "center" ? (_ = (g.left + g.right) / 2 - k + t) : (_ = Ib(n, i, t));
    ((S = Ce(a, u, o)), (y = i === "left" ? -re : re));
  }
  return { titleX: _, titleY: S, maxWidth: v, rotation: y };
}
class Ns extends fi {
  constructor(t) {
    (super(),
      (this.id = t.id),
      (this.type = t.type),
      (this.options = void 0),
      (this.ctx = t.ctx),
      (this.chart = t.chart),
      (this.top = void 0),
      (this.bottom = void 0),
      (this.left = void 0),
      (this.right = void 0),
      (this.width = void 0),
      (this.height = void 0),
      (this._margins = { left: 0, right: 0, top: 0, bottom: 0 }),
      (this.maxWidth = void 0),
      (this.maxHeight = void 0),
      (this.paddingTop = void 0),
      (this.paddingBottom = void 0),
      (this.paddingLeft = void 0),
      (this.paddingRight = void 0),
      (this.axis = void 0),
      (this.labelRotation = void 0),
      (this.min = void 0),
      (this.max = void 0),
      (this._range = void 0),
      (this.ticks = []),
      (this._gridLineItems = null),
      (this._labelItems = null),
      (this._labelSizes = null),
      (this._length = 0),
      (this._maxLength = 0),
      (this._longestTextCache = {}),
      (this._startPixel = void 0),
      (this._endPixel = void 0),
      (this._reversePixels = !1),
      (this._userMax = void 0),
      (this._userMin = void 0),
      (this._suggestedMax = void 0),
      (this._suggestedMin = void 0),
      (this._ticksLength = 0),
      (this._borderValue = 0),
      (this._cache = {}),
      (this._dataLimitsCached = !1),
      (this.$context = void 0));
  }
  init(t) {
    ((this.options = t.setContext(this.getContext())),
      (this.axis = t.axis),
      (this._userMin = this.parse(t.min)),
      (this._userMax = this.parse(t.max)),
      (this._suggestedMin = this.parse(t.suggestedMin)),
      (this._suggestedMax = this.parse(t.suggestedMax)));
  }
  parse(t, i) {
    return t;
  }
  getUserBounds() {
    let { _userMin: t, _userMax: i, _suggestedMin: a, _suggestedMax: o } = this;
    return (
      (t = ln(t, Number.POSITIVE_INFINITY)),
      (i = ln(i, Number.NEGATIVE_INFINITY)),
      (a = ln(a, Number.POSITIVE_INFINITY)),
      (o = ln(o, Number.NEGATIVE_INFINITY)),
      { min: ln(t, a), max: ln(i, o), minDefined: ne(t), maxDefined: ne(i) }
    );
  }
  getMinMax(t) {
    let { min: i, max: a, minDefined: o, maxDefined: r } = this.getUserBounds(),
      u;
    if (o && r) return { min: i, max: a };
    const d = this.getMatchingVisibleMetas();
    for (let h = 0, g = d.length; h < g; ++h)
      ((u = d[h].controller.getMinMax(this, t)),
        o || (i = Math.min(i, u.min)),
        r || (a = Math.max(a, u.max)));
    return (
      (i = r && i > a ? a : i),
      (a = o && i > a ? i : a),
      { min: ln(i, ln(a, i)), max: ln(a, ln(i, a)) }
    );
  }
  getPadding() {
    return {
      left: this.paddingLeft || 0,
      top: this.paddingTop || 0,
      right: this.paddingRight || 0,
      bottom: this.paddingBottom || 0,
    };
  }
  getTicks() {
    return this.ticks;
  }
  getLabels() {
    const t = this.chart.data;
    return (
      this.options.labels ||
      (this.isHorizontal() ? t.xLabels : t.yLabels) ||
      t.labels ||
      []
    );
  }
  getLabelItems(t = this.chart.chartArea) {
    return this._labelItems || (this._labelItems = this._computeLabelItems(t));
  }
  beforeLayout() {
    ((this._cache = {}), (this._dataLimitsCached = !1));
  }
  beforeUpdate() {
    Pt(this.options.beforeUpdate, [this]);
  }
  update(t, i, a) {
    const { beginAtZero: o, grace: r, ticks: u } = this.options,
      d = u.sampleSize;
    (this.beforeUpdate(),
      (this.maxWidth = t),
      (this.maxHeight = i),
      (this._margins = a =
        Object.assign({ left: 0, right: 0, top: 0, bottom: 0 }, a)),
      (this.ticks = null),
      (this._labelSizes = null),
      (this._gridLineItems = null),
      (this._labelItems = null),
      this.beforeSetDimensions(),
      this.setDimensions(),
      this.afterSetDimensions(),
      (this._maxLength = this.isHorizontal()
        ? this.width + a.left + a.right
        : this.height + a.top + a.bottom),
      this._dataLimitsCached ||
        (this.beforeDataLimits(),
        this.determineDataLimits(),
        this.afterDataLimits(),
        (this._range = _5(this, r, o)),
        (this._dataLimitsCached = !0)),
      this.beforeBuildTicks(),
      (this.ticks = this.buildTicks() || []),
      this.afterBuildTicks());
    const h = d < this.ticks.length;
    (this._convertTicksToLabels(h ? t0(this.ticks, d) : this.ticks),
      this.configure(),
      this.beforeCalculateLabelRotation(),
      this.calculateLabelRotation(),
      this.afterCalculateLabelRotation(),
      u.display &&
        (u.autoSkip || u.source === "auto") &&
        ((this.ticks = nM(this, this.ticks)),
        (this._labelSizes = null),
        this.afterAutoSkip()),
      h && this._convertTicksToLabels(this.ticks),
      this.beforeFit(),
      this.fit(),
      this.afterFit(),
      this.afterUpdate());
  }
  configure() {
    let t = this.options.reverse,
      i,
      a;
    (this.isHorizontal()
      ? ((i = this.left), (a = this.right))
      : ((i = this.top), (a = this.bottom), (t = !t)),
      (this._startPixel = i),
      (this._endPixel = a),
      (this._reversePixels = t),
      (this._length = a - i),
      (this._alignToPixels = this.options.alignToPixels));
  }
  afterUpdate() {
    Pt(this.options.afterUpdate, [this]);
  }
  beforeSetDimensions() {
    Pt(this.options.beforeSetDimensions, [this]);
  }
  setDimensions() {
    (this.isHorizontal()
      ? ((this.width = this.maxWidth),
        (this.left = 0),
        (this.right = this.width))
      : ((this.height = this.maxHeight),
        (this.top = 0),
        (this.bottom = this.height)),
      (this.paddingLeft = 0),
      (this.paddingTop = 0),
      (this.paddingRight = 0),
      (this.paddingBottom = 0));
  }
  afterSetDimensions() {
    Pt(this.options.afterSetDimensions, [this]);
  }
  _callHooks(t) {
    (this.chart.notifyPlugins(t, this.getContext()),
      Pt(this.options[t], [this]));
  }
  beforeDataLimits() {
    this._callHooks("beforeDataLimits");
  }
  determineDataLimits() {}
  afterDataLimits() {
    this._callHooks("afterDataLimits");
  }
  beforeBuildTicks() {
    this._callHooks("beforeBuildTicks");
  }
  buildTicks() {
    return [];
  }
  afterBuildTicks() {
    this._callHooks("afterBuildTicks");
  }
  beforeTickToLabelConversion() {
    Pt(this.options.beforeTickToLabelConversion, [this]);
  }
  generateTickLabels(t) {
    const i = this.options.ticks;
    let a, o, r;
    for (a = 0, o = t.length; a < o; a++)
      ((r = t[a]), (r.label = Pt(i.callback, [r.value, a, t], this)));
  }
  afterTickToLabelConversion() {
    Pt(this.options.afterTickToLabelConversion, [this]);
  }
  beforeCalculateLabelRotation() {
    Pt(this.options.beforeCalculateLabelRotation, [this]);
  }
  calculateLabelRotation() {
    const t = this.options,
      i = t.ticks,
      a = Jb(this.ticks.length, t.ticks.maxTicksLimit),
      o = i.minRotation || 0,
      r = i.maxRotation;
    let u = o,
      d,
      h,
      g;
    if (
      !this._isVisible() ||
      !i.display ||
      o >= r ||
      a <= 1 ||
      !this.isHorizontal()
    ) {
      this.labelRotation = o;
      return;
    }
    const p = this._getLabelSizes(),
      y = p.widest.width,
      v = p.highest.height,
      _ = ve(this.chart.width - y, 0, this.maxWidth);
    ((d = t.offset ? this.maxWidth / a : _ / (a - 1)),
      y + 6 > d &&
        ((d = _ / (a - (t.offset ? 0.5 : 1))),
        (h =
          this.maxHeight -
          Cl(t.grid) -
          i.padding -
          e0(t.title, this.chart.options.font)),
        (g = Math.sqrt(y * y + v * v)),
        (u = qf(
          Math.min(
            Math.asin(ve((p.highest.height + 6) / d, -1, 1)),
            Math.asin(ve(h / g, -1, 1)) - Math.asin(ve(v / g, -1, 1)),
          ),
        )),
        (u = Math.max(o, Math.min(r, u)))),
      (this.labelRotation = u));
  }
  afterCalculateLabelRotation() {
    Pt(this.options.afterCalculateLabelRotation, [this]);
  }
  afterAutoSkip() {}
  beforeFit() {
    Pt(this.options.beforeFit, [this]);
  }
  fit() {
    const t = { width: 0, height: 0 },
      {
        chart: i,
        options: { ticks: a, title: o, grid: r },
      } = this,
      u = this._isVisible(),
      d = this.isHorizontal();
    if (u) {
      const h = e0(o, i.options.font);
      if (
        (d
          ? ((t.width = this.maxWidth), (t.height = Cl(r) + h))
          : ((t.height = this.maxHeight), (t.width = Cl(r) + h)),
        a.display && this.ticks.length)
      ) {
        const {
            first: g,
            last: p,
            widest: y,
            highest: v,
          } = this._getLabelSizes(),
          _ = a.padding * 2,
          S = kn(this.labelRotation),
          M = Math.cos(S),
          k = Math.sin(S);
        if (d) {
          const j = a.mirror ? 0 : k * y.width + M * v.height;
          t.height = Math.min(this.maxHeight, t.height + j + _);
        } else {
          const j = a.mirror ? 0 : M * y.width + k * v.height;
          t.width = Math.min(this.maxWidth, t.width + j + _);
        }
        this._calculatePadding(g, p, k, M);
      }
    }
    (this._handleMargins(),
      d
        ? ((this.width = this._length =
            i.width - this._margins.left - this._margins.right),
          (this.height = t.height))
        : ((this.width = t.width),
          (this.height = this._length =
            i.height - this._margins.top - this._margins.bottom)));
  }
  _calculatePadding(t, i, a, o) {
    const {
        ticks: { align: r, padding: u },
        position: d,
      } = this.options,
      h = this.labelRotation !== 0,
      g = d !== "top" && this.axis === "x";
    if (this.isHorizontal()) {
      const p = this.getPixelForTick(0) - this.left,
        y = this.right - this.getPixelForTick(this.ticks.length - 1);
      let v = 0,
        _ = 0;
      (h
        ? g
          ? ((v = o * t.width), (_ = a * i.height))
          : ((v = a * t.height), (_ = o * i.width))
        : r === "start"
          ? (_ = i.width)
          : r === "end"
            ? (v = t.width)
            : r !== "inner" && ((v = t.width / 2), (_ = i.width / 2)),
        (this.paddingLeft = Math.max(
          ((v - p + u) * this.width) / (this.width - p),
          0,
        )),
        (this.paddingRight = Math.max(
          ((_ - y + u) * this.width) / (this.width - y),
          0,
        )));
    } else {
      let p = i.height / 2,
        y = t.height / 2;
      (r === "start"
        ? ((p = 0), (y = t.height))
        : r === "end" && ((p = i.height), (y = 0)),
        (this.paddingTop = p + u),
        (this.paddingBottom = y + u));
    }
  }
  _handleMargins() {
    this._margins &&
      ((this._margins.left = Math.max(this.paddingLeft, this._margins.left)),
      (this._margins.top = Math.max(this.paddingTop, this._margins.top)),
      (this._margins.right = Math.max(this.paddingRight, this._margins.right)),
      (this._margins.bottom = Math.max(
        this.paddingBottom,
        this._margins.bottom,
      )));
  }
  afterFit() {
    Pt(this.options.afterFit, [this]);
  }
  isHorizontal() {
    const { axis: t, position: i } = this.options;
    return i === "top" || i === "bottom" || t === "x";
  }
  isFullSize() {
    return this.options.fullSize;
  }
  _convertTicksToLabels(t) {
    (this.beforeTickToLabelConversion(), this.generateTickLabels(t));
    let i, a;
    for (i = 0, a = t.length; i < a; i++)
      yt(t[i].label) && (t.splice(i, 1), a--, i--);
    this.afterTickToLabelConversion();
  }
  _getLabelSizes() {
    let t = this._labelSizes;
    if (!t) {
      const i = this.options.ticks.sampleSize;
      let a = this.ticks;
      (i < a.length && (a = t0(a, i)),
        (this._labelSizes = t =
          this._computeLabelSizes(
            a,
            a.length,
            this.options.ticks.maxTicksLimit,
          )));
    }
    return t;
  }
  _computeLabelSizes(t, i, a) {
    const { ctx: o, _longestTextCache: r } = this,
      u = [],
      d = [],
      h = Math.floor(i / Jb(i, a));
    let g = 0,
      p = 0,
      y,
      v,
      _,
      S,
      M,
      k,
      j,
      z,
      U,
      q,
      R;
    for (y = 0; y < i; y += h) {
      if (
        ((S = t[y].label),
        (M = this._resolveTickFontOptions(y)),
        (o.font = k = M.string),
        (j = r[k] = r[k] || { data: {}, gc: [] }),
        (z = M.lineHeight),
        (U = q = 0),
        !yt(S) && !$t(S))
      )
        ((U = sc(o, j.data, j.gc, U, S)), (q = z));
      else if ($t(S))
        for (v = 0, _ = S.length; v < _; ++v)
          ((R = S[v]),
            !yt(R) && !$t(R) && ((U = sc(o, j.data, j.gc, U, R)), (q += z)));
      (u.push(U), d.push(q), (g = Math.max(U, g)), (p = Math.max(q, p)));
    }
    uM(r, i);
    const P = u.indexOf(g),
      X = d.indexOf(p),
      G = (W) => ({ width: u[W] || 0, height: d[W] || 0 });
    return {
      first: G(0),
      last: G(i - 1),
      widest: G(P),
      highest: G(X),
      widths: u,
      heights: d,
    };
  }
  getLabelForValue(t) {
    return t;
  }
  getPixelForValue(t, i) {
    return NaN;
  }
  getValueForPixel(t) {}
  getPixelForTick(t) {
    const i = this.ticks;
    return t < 0 || t > i.length - 1 ? null : this.getPixelForValue(i[t].value);
  }
  getPixelForDecimal(t) {
    this._reversePixels && (t = 1 - t);
    const i = this._startPixel + t * this._length;
    return $S(this._alignToPixels ? bs(this.chart, i, 0) : i);
  }
  getDecimalForPixel(t) {
    const i = (t - this._startPixel) / this._length;
    return this._reversePixels ? 1 - i : i;
  }
  getBasePixel() {
    return this.getPixelForValue(this.getBaseValue());
  }
  getBaseValue() {
    const { min: t, max: i } = this;
    return t < 0 && i < 0 ? i : t > 0 && i > 0 ? t : 0;
  }
  getContext(t) {
    const i = this.ticks || [];
    if (t >= 0 && t < i.length) {
      const a = i[t];
      return a.$context || (a.$context = fM(this.getContext(), t, a));
    }
    return this.$context || (this.$context = dM(this.chart.getContext(), this));
  }
  _tickSize() {
    const t = this.options.ticks,
      i = kn(this.labelRotation),
      a = Math.abs(Math.cos(i)),
      o = Math.abs(Math.sin(i)),
      r = this._getLabelSizes(),
      u = t.autoSkipPadding || 0,
      d = r ? r.widest.width + u : 0,
      h = r ? r.highest.height + u : 0;
    return this.isHorizontal()
      ? h * a > d * o
        ? d / a
        : h / o
      : h * o < d * a
        ? h / a
        : d / o;
  }
  _isVisible() {
    const t = this.options.display;
    return t !== "auto" ? !!t : this.getMatchingVisibleMetas().length > 0;
  }
  _computeGridLineItems(t) {
    const i = this.axis,
      a = this.chart,
      o = this.options,
      { grid: r, position: u, border: d } = o,
      h = r.offset,
      g = this.isHorizontal(),
      y = this.ticks.length + (h ? 1 : 0),
      v = Cl(r),
      _ = [],
      S = d.setContext(this.getContext()),
      M = S.display ? S.width : 0,
      k = M / 2,
      j = function (D) {
        return bs(a, D, M);
      };
    let z, U, q, R, P, X, G, W, lt, it, $, Vt;
    if (u === "top")
      ((z = j(this.bottom)),
        (X = this.bottom - v),
        (W = z - k),
        (it = j(t.top) + k),
        (Vt = t.bottom));
    else if (u === "bottom")
      ((z = j(this.top)),
        (it = t.top),
        (Vt = j(t.bottom) - k),
        (X = z + k),
        (W = this.top + v));
    else if (u === "left")
      ((z = j(this.right)),
        (P = this.right - v),
        (G = z - k),
        (lt = j(t.left) + k),
        ($ = t.right));
    else if (u === "right")
      ((z = j(this.left)),
        (lt = t.left),
        ($ = j(t.right) - k),
        (P = z + k),
        (G = this.left + v));
    else if (i === "x") {
      if (u === "center") z = j((t.top + t.bottom) / 2 + 0.5);
      else if (St(u)) {
        const D = Object.keys(u)[0],
          F = u[D];
        z = j(this.chart.scales[D].getPixelForValue(F));
      }
      ((it = t.top), (Vt = t.bottom), (X = z + k), (W = X + v));
    } else if (i === "y") {
      if (u === "center") z = j((t.left + t.right) / 2);
      else if (St(u)) {
        const D = Object.keys(u)[0],
          F = u[D];
        z = j(this.chart.scales[D].getPixelForValue(F));
      }
      ((P = z - k), (G = P - v), (lt = t.left), ($ = t.right));
    }
    const Yt = dt(o.ticks.maxTicksLimit, y),
      ut = Math.max(1, Math.ceil(y / Yt));
    for (U = 0; U < y; U += ut) {
      const D = this.getContext(U),
        F = r.setContext(D),
        I = d.setContext(D),
        ct = F.lineWidth,
        pt = F.color,
        Xt = I.dash || [],
        Mt = I.dashOffset,
        ft = F.tickWidth,
        kt = F.tickColor,
        Q = F.tickBorderDash || [],
        J = F.tickBorderDashOffset;
      ((q = cM(this, U, h)),
        q !== void 0 &&
          ((R = bs(a, q, ct)),
          g ? (P = G = lt = $ = R) : (X = W = it = Vt = R),
          _.push({
            tx1: P,
            ty1: X,
            tx2: G,
            ty2: W,
            x1: lt,
            y1: it,
            x2: $,
            y2: Vt,
            width: ct,
            color: pt,
            borderDash: Xt,
            borderDashOffset: Mt,
            tickWidth: ft,
            tickColor: kt,
            tickBorderDash: Q,
            tickBorderDashOffset: J,
          })));
    }
    return ((this._ticksLength = y), (this._borderValue = z), _);
  }
  _computeLabelItems(t) {
    const i = this.axis,
      a = this.options,
      { position: o, ticks: r } = a,
      u = this.isHorizontal(),
      d = this.ticks,
      { align: h, crossAlign: g, padding: p, mirror: y } = r,
      v = Cl(a.grid),
      _ = v + p,
      S = y ? -p : _,
      M = -kn(this.labelRotation),
      k = [];
    let j,
      z,
      U,
      q,
      R,
      P,
      X,
      G,
      W,
      lt,
      it,
      $,
      Vt = "middle";
    if (o === "top")
      ((P = this.bottom - S), (X = this._getXAxisLabelAlignment()));
    else if (o === "bottom")
      ((P = this.top + S), (X = this._getXAxisLabelAlignment()));
    else if (o === "left") {
      const ut = this._getYAxisLabelAlignment(v);
      ((X = ut.textAlign), (R = ut.x));
    } else if (o === "right") {
      const ut = this._getYAxisLabelAlignment(v);
      ((X = ut.textAlign), (R = ut.x));
    } else if (i === "x") {
      if (o === "center") P = (t.top + t.bottom) / 2 + _;
      else if (St(o)) {
        const ut = Object.keys(o)[0],
          D = o[ut];
        P = this.chart.scales[ut].getPixelForValue(D) + _;
      }
      X = this._getXAxisLabelAlignment();
    } else if (i === "y") {
      if (o === "center") R = (t.left + t.right) / 2 - _;
      else if (St(o)) {
        const ut = Object.keys(o)[0],
          D = o[ut];
        R = this.chart.scales[ut].getPixelForValue(D);
      }
      X = this._getYAxisLabelAlignment(v).textAlign;
    }
    i === "y" &&
      (h === "start" ? (Vt = "top") : h === "end" && (Vt = "bottom"));
    const Yt = this._getLabelSizes();
    for (j = 0, z = d.length; j < z; ++j) {
      ((U = d[j]), (q = U.label));
      const ut = r.setContext(this.getContext(j));
      ((G = this.getPixelForTick(j) + r.labelOffset),
        (W = this._resolveTickFontOptions(j)),
        (lt = W.lineHeight),
        (it = $t(q) ? q.length : 1));
      const D = it / 2,
        F = ut.color,
        I = ut.textStrokeColor,
        ct = ut.textStrokeWidth;
      let pt = X;
      u
        ? ((R = G),
          X === "inner" &&
            (j === z - 1
              ? (pt = this.options.reverse ? "left" : "right")
              : j === 0
                ? (pt = this.options.reverse ? "right" : "left")
                : (pt = "center")),
          o === "top"
            ? g === "near" || M !== 0
              ? ($ = -it * lt + lt / 2)
              : g === "center"
                ? ($ = -Yt.highest.height / 2 - D * lt + lt)
                : ($ = -Yt.highest.height + lt / 2)
            : g === "near" || M !== 0
              ? ($ = lt / 2)
              : g === "center"
                ? ($ = Yt.highest.height / 2 - D * lt)
                : ($ = Yt.highest.height - it * lt),
          y && ($ *= -1),
          M !== 0 && !ut.showLabelBackdrop && (R += (lt / 2) * Math.sin(M)))
        : ((P = G), ($ = ((1 - it) * lt) / 2));
      let Xt;
      if (ut.showLabelBackdrop) {
        const Mt = Oe(ut.backdropPadding),
          ft = Yt.heights[j],
          kt = Yt.widths[j];
        let Q = $ - Mt.top,
          J = 0 - Mt.left;
        switch (Vt) {
          case "middle":
            Q -= ft / 2;
            break;
          case "bottom":
            Q -= ft;
            break;
        }
        switch (X) {
          case "center":
            J -= kt / 2;
            break;
          case "right":
            J -= kt;
            break;
          case "inner":
            j === z - 1 ? (J -= kt) : j > 0 && (J -= kt / 2);
            break;
        }
        Xt = {
          left: J,
          top: Q,
          width: kt + Mt.width,
          height: ft + Mt.height,
          color: ut.backdropColor,
        };
      }
      k.push({
        label: q,
        font: W,
        textOffset: $,
        options: {
          rotation: M,
          color: F,
          strokeColor: I,
          strokeWidth: ct,
          textAlign: pt,
          textBaseline: Vt,
          translation: [R, P],
          backdrop: Xt,
        },
      });
    }
    return k;
  }
  _getXAxisLabelAlignment() {
    const { position: t, ticks: i } = this.options;
    if (-kn(this.labelRotation)) return t === "top" ? "left" : "right";
    let o = "center";
    return (
      i.align === "start"
        ? (o = "left")
        : i.align === "end"
          ? (o = "right")
          : i.align === "inner" && (o = "inner"),
      o
    );
  }
  _getYAxisLabelAlignment(t) {
    const {
        position: i,
        ticks: { crossAlign: a, mirror: o, padding: r },
      } = this.options,
      u = this._getLabelSizes(),
      d = t + r,
      h = u.widest.width;
    let g, p;
    return (
      i === "left"
        ? o
          ? ((p = this.right + r),
            a === "near"
              ? (g = "left")
              : a === "center"
                ? ((g = "center"), (p += h / 2))
                : ((g = "right"), (p += h)))
          : ((p = this.right - d),
            a === "near"
              ? (g = "right")
              : a === "center"
                ? ((g = "center"), (p -= h / 2))
                : ((g = "left"), (p = this.left)))
        : i === "right"
          ? o
            ? ((p = this.left + r),
              a === "near"
                ? (g = "right")
                : a === "center"
                  ? ((g = "center"), (p -= h / 2))
                  : ((g = "left"), (p -= h)))
            : ((p = this.left + d),
              a === "near"
                ? (g = "left")
                : a === "center"
                  ? ((g = "center"), (p += h / 2))
                  : ((g = "right"), (p = this.right)))
          : (g = "right"),
      { textAlign: g, x: p }
    );
  }
  _computeLabelArea() {
    if (this.options.ticks.mirror) return;
    const t = this.chart,
      i = this.options.position;
    if (i === "left" || i === "right")
      return { top: 0, left: this.left, bottom: t.height, right: this.right };
    if (i === "top" || i === "bottom")
      return { top: this.top, left: 0, bottom: this.bottom, right: t.width };
  }
  drawBackground() {
    const {
      ctx: t,
      options: { backgroundColor: i },
      left: a,
      top: o,
      width: r,
      height: u,
    } = this;
    i && (t.save(), (t.fillStyle = i), t.fillRect(a, o, r, u), t.restore());
  }
  getLineWidthForValue(t) {
    const i = this.options.grid;
    if (!this._isVisible() || !i.display) return 0;
    const o = this.ticks.findIndex((r) => r.value === t);
    return o >= 0 ? i.setContext(this.getContext(o)).lineWidth : 0;
  }
  drawGrid(t) {
    const i = this.options.grid,
      a = this.ctx,
      o =
        this._gridLineItems ||
        (this._gridLineItems = this._computeGridLineItems(t));
    let r, u;
    const d = (h, g, p) => {
      !p.width ||
        !p.color ||
        (a.save(),
        (a.lineWidth = p.width),
        (a.strokeStyle = p.color),
        a.setLineDash(p.borderDash || []),
        (a.lineDashOffset = p.borderDashOffset),
        a.beginPath(),
        a.moveTo(h.x, h.y),
        a.lineTo(g.x, g.y),
        a.stroke(),
        a.restore());
    };
    if (i.display)
      for (r = 0, u = o.length; r < u; ++r) {
        const h = o[r];
        (i.drawOnChartArea && d({ x: h.x1, y: h.y1 }, { x: h.x2, y: h.y2 }, h),
          i.drawTicks &&
            d(
              { x: h.tx1, y: h.ty1 },
              { x: h.tx2, y: h.ty2 },
              {
                color: h.tickColor,
                width: h.tickWidth,
                borderDash: h.tickBorderDash,
                borderDashOffset: h.tickBorderDashOffset,
              },
            ));
      }
  }
  drawBorder() {
    const {
        chart: t,
        ctx: i,
        options: { border: a, grid: o },
      } = this,
      r = a.setContext(this.getContext()),
      u = a.display ? r.width : 0;
    if (!u) return;
    const d = o.setContext(this.getContext(0)).lineWidth,
      h = this._borderValue;
    let g, p, y, v;
    (this.isHorizontal()
      ? ((g = bs(t, this.left, u) - u / 2),
        (p = bs(t, this.right, d) + d / 2),
        (y = v = h))
      : ((y = bs(t, this.top, u) - u / 2),
        (v = bs(t, this.bottom, d) + d / 2),
        (g = p = h)),
      i.save(),
      (i.lineWidth = r.width),
      (i.strokeStyle = r.color),
      i.beginPath(),
      i.moveTo(g, y),
      i.lineTo(p, v),
      i.stroke(),
      i.restore());
  }
  drawLabels(t) {
    if (!this.options.ticks.display) return;
    const a = this.ctx,
      o = this._computeLabelArea();
    o && gc(a, o);
    const r = this.getLabelItems(t);
    for (const u of r) {
      const d = u.options,
        h = u.font,
        g = u.label,
        p = u.textOffset;
      Cs(a, g, 0, p, h, d);
    }
    o && pc(a);
  }
  drawTitle() {
    const {
      ctx: t,
      options: { position: i, title: a, reverse: o },
    } = this;
    if (!a.display) return;
    const r = be(a.font),
      u = Oe(a.padding),
      d = a.align;
    let h = r.lineHeight / 2;
    i === "bottom" || i === "center" || St(i)
      ? ((h += u.bottom),
        $t(a.text) && (h += r.lineHeight * (a.text.length - 1)))
      : (h += u.top);
    const {
      titleX: g,
      titleY: p,
      maxWidth: y,
      rotation: v,
    } = mM(this, h, i, d);
    Cs(t, a.text, 0, 0, r, {
      color: a.color,
      maxWidth: y,
      rotation: v,
      textAlign: hM(d, i, o),
      textBaseline: "middle",
      translation: [g, p],
    });
  }
  draw(t) {
    this._isVisible() &&
      (this.drawBackground(),
      this.drawGrid(t),
      this.drawBorder(),
      this.drawTitle(),
      this.drawLabels(t));
  }
  _layers() {
    const t = this.options,
      i = (t.ticks && t.ticks.z) || 0,
      a = dt(t.grid && t.grid.z, -1),
      o = dt(t.border && t.border.z, 0);
    return !this._isVisible() || this.draw !== Ns.prototype.draw
      ? [
          {
            z: i,
            draw: (r) => {
              this.draw(r);
            },
          },
        ]
      : [
          {
            z: a,
            draw: (r) => {
              (this.drawBackground(), this.drawGrid(r), this.drawTitle());
            },
          },
          {
            z: o,
            draw: () => {
              this.drawBorder();
            },
          },
          {
            z: i,
            draw: (r) => {
              this.drawLabels(r);
            },
          },
        ];
  }
  getMatchingVisibleMetas(t) {
    const i = this.chart.getSortedVisibleDatasetMetas(),
      a = this.axis + "AxisID",
      o = [];
    let r, u;
    for (r = 0, u = i.length; r < u; ++r) {
      const d = i[r];
      d[a] === this.id && (!t || d.type === t) && o.push(d);
    }
    return o;
  }
  _resolveTickFontOptions(t) {
    const i = this.options.ticks.setContext(this.getContext(t));
    return be(i.font);
  }
  _maxDigits() {
    const t = this._resolveTickFontOptions(0).lineHeight;
    return (this.isHorizontal() ? this.width : this.height) / t;
  }
}
class Nr {
  constructor(t, i, a) {
    ((this.type = t),
      (this.scope = i),
      (this.override = a),
      (this.items = Object.create(null)));
  }
  isForType(t) {
    return Object.prototype.isPrototypeOf.call(
      this.type.prototype,
      t.prototype,
    );
  }
  register(t) {
    const i = Object.getPrototypeOf(t);
    let a;
    bM(i) && (a = this.register(i));
    const o = this.items,
      r = t.id,
      u = this.scope + "." + r;
    if (!r) throw new Error("class does not have id: " + t);
    return (
      r in o ||
        ((o[r] = t),
        gM(t, u, a),
        this.override && It.override(t.id, t.overrides)),
      u
    );
  }
  get(t) {
    return this.items[t];
  }
  unregister(t) {
    const i = this.items,
      a = t.id,
      o = this.scope;
    (a in i && delete i[a],
      o && a in It[o] && (delete It[o][a], this.override && delete Es[a]));
  }
}
function gM(n, t, i) {
  const a = Yl(Object.create(null), [
    i ? It.get(i) : {},
    It.get(t),
    n.defaults,
  ]);
  (It.set(t, a),
    n.defaultRoutes && pM(t, n.defaultRoutes),
    n.descriptors && It.describe(t, n.descriptors));
}
function pM(n, t) {
  Object.keys(t).forEach((i) => {
    const a = i.split("."),
      o = a.pop(),
      r = [n].concat(a).join("."),
      u = t[i].split("."),
      d = u.pop(),
      h = u.join(".");
    It.route(r, o, h, d);
  });
}
function bM(n) {
  return "id" in n && "defaults" in n;
}
class xM {
  constructor() {
    ((this.controllers = new Nr(En, "datasets", !0)),
      (this.elements = new Nr(fi, "elements")),
      (this.plugins = new Nr(Object, "plugins")),
      (this.scales = new Nr(Ns, "scales")),
      (this._typedRegistries = [this.controllers, this.scales, this.elements]));
  }
  add(...t) {
    this._each("register", t);
  }
  remove(...t) {
    this._each("unregister", t);
  }
  addControllers(...t) {
    this._each("register", t, this.controllers);
  }
  addElements(...t) {
    this._each("register", t, this.elements);
  }
  addPlugins(...t) {
    this._each("register", t, this.plugins);
  }
  addScales(...t) {
    this._each("register", t, this.scales);
  }
  getController(t) {
    return this._get(t, this.controllers, "controller");
  }
  getElement(t) {
    return this._get(t, this.elements, "element");
  }
  getPlugin(t) {
    return this._get(t, this.plugins, "plugin");
  }
  getScale(t) {
    return this._get(t, this.scales, "scale");
  }
  removeControllers(...t) {
    this._each("unregister", t, this.controllers);
  }
  removeElements(...t) {
    this._each("unregister", t, this.elements);
  }
  removePlugins(...t) {
    this._each("unregister", t, this.plugins);
  }
  removeScales(...t) {
    this._each("unregister", t, this.scales);
  }
  _each(t, i, a) {
    [...i].forEach((o) => {
      const r = a || this._getRegistryForType(o);
      a || r.isForType(o) || (r === this.plugins && o.id)
        ? this._exec(t, r, o)
        : Lt(o, (u) => {
            const d = a || this._getRegistryForType(u);
            this._exec(t, d, u);
          });
    });
  }
  _exec(t, i, a) {
    const o = Vf(t);
    (Pt(a["before" + o], [], a), i[t](a), Pt(a["after" + o], [], a));
  }
  _getRegistryForType(t) {
    for (let i = 0; i < this._typedRegistries.length; i++) {
      const a = this._typedRegistries[i];
      if (a.isForType(t)) return a;
    }
    return this.plugins;
  }
  _get(t, i, a) {
    const o = i.get(t);
    if (o === void 0)
      throw new Error('"' + t + '" is not a registered ' + a + ".");
    return o;
  }
}
var zn = new xM();
class yM {
  constructor() {
    this._init = void 0;
  }
  notify(t, i, a, o) {
    if (
      (i === "beforeInit" &&
        ((this._init = this._createDescriptors(t, !0)),
        this._notify(this._init, t, "install")),
      this._init === void 0)
    )
      return;
    const r = o ? this._descriptors(t).filter(o) : this._descriptors(t),
      u = this._notify(r, t, i, a);
    return (
      i === "afterDestroy" &&
        (this._notify(r, t, "stop"),
        this._notify(this._init, t, "uninstall"),
        (this._init = void 0)),
      u
    );
  }
  _notify(t, i, a, o) {
    o = o || {};
    for (const r of t) {
      const u = r.plugin,
        d = u[a],
        h = [i, o, r.options];
      if (Pt(d, h, u) === !1 && o.cancelable) return !1;
    }
    return !0;
  }
  invalidate() {
    yt(this._cache) || ((this._oldCache = this._cache), (this._cache = void 0));
  }
  _descriptors(t) {
    if (this._cache) return this._cache;
    const i = (this._cache = this._createDescriptors(t));
    return (this._notifyStateChanges(t), i);
  }
  _createDescriptors(t, i) {
    const a = t && t.config,
      o = dt(a.options && a.options.plugins, {}),
      r = vM(a);
    return o === !1 && !i ? [] : _M(t, r, o, i);
  }
  _notifyStateChanges(t) {
    const i = this._oldCache || [],
      a = this._cache,
      o = (r, u) =>
        r.filter((d) => !u.some((h) => d.plugin.id === h.plugin.id));
    (this._notify(o(i, a), t, "stop"), this._notify(o(a, i), t, "start"));
  }
}
function vM(n) {
  const t = {},
    i = [],
    a = Object.keys(zn.plugins.items);
  for (let r = 0; r < a.length; r++) i.push(zn.getPlugin(a[r]));
  const o = n.plugins || [];
  for (let r = 0; r < o.length; r++) {
    const u = o[r];
    i.indexOf(u) === -1 && (i.push(u), (t[u.id] = !0));
  }
  return { plugins: i, localIds: t };
}
function wM(n, t) {
  return !t && n === !1 ? null : n === !0 ? {} : n;
}
function _M(n, { plugins: t, localIds: i }, a, o) {
  const r = [],
    u = n.getContext();
  for (const d of t) {
    const h = d.id,
      g = wM(a[h], o);
    g !== null &&
      r.push({
        plugin: d,
        options: SM(n.config, { plugin: d, local: i[h] }, g, u),
      });
  }
  return r;
}
function SM(n, { plugin: t, local: i }, a, o) {
  const r = n.pluginScopeKeys(t),
    u = n.getOptionScopes(a, r);
  return (
    i && t.defaults && u.push(t.defaults),
    n.createResolver(u, o, [""], { scriptable: !1, indexable: !1, allKeys: !0 })
  );
}
function uf(n, t) {
  const i = It.datasets[n] || {};
  return (
    ((t.datasets || {})[n] || {}).indexAxis || t.indexAxis || i.indexAxis || "x"
  );
}
function MM(n, t) {
  let i = n;
  return (
    n === "_index_" ? (i = t) : n === "_value_" && (i = t === "x" ? "y" : "x"),
    i
  );
}
function AM(n, t) {
  return n === t ? "_index_" : "_value_";
}
function n0(n) {
  if (n === "x" || n === "y" || n === "r") return n;
}
function kM(n) {
  if (n === "top" || n === "bottom") return "x";
  if (n === "left" || n === "right") return "y";
}
function df(n, ...t) {
  if (n0(n)) return n;
  for (const i of t) {
    const a =
      i.axis || kM(i.position) || (n.length > 1 && n0(n[0].toLowerCase()));
    if (a) return a;
  }
  throw new Error(
    `Cannot determine type of '${n}' axis. Please provide 'axis' or 'position' option.`,
  );
}
function i0(n, t, i) {
  if (i[t + "AxisID"] === n) return { axis: t };
}
function EM(n, t) {
  if (t.data && t.data.datasets) {
    const i = t.data.datasets.filter((a) => a.xAxisID === n || a.yAxisID === n);
    if (i.length) return i0(n, "x", i[0]) || i0(n, "y", i[0]);
  }
  return {};
}
function CM(n, t) {
  const i = Es[n.type] || { scales: {} },
    a = t.scales || {},
    o = uf(n.type, t),
    r = Object.create(null);
  return (
    Object.keys(a).forEach((u) => {
      const d = a[u];
      if (!St(d))
        return console.error(`Invalid scale configuration for scale: ${u}`);
      if (d._proxy)
        return console.warn(
          `Ignoring resolver passed as options for scale: ${u}`,
        );
      const h = df(u, d, EM(u, n), It.scales[d.type]),
        g = AM(h, o),
        p = i.scales || {};
      r[u] = Bl(Object.create(null), [{ axis: h }, d, p[h], p[g]]);
    }),
    n.data.datasets.forEach((u) => {
      const d = u.type || n.type,
        h = u.indexAxis || uf(d, t),
        p = (Es[d] || {}).scales || {};
      Object.keys(p).forEach((y) => {
        const v = MM(y, h),
          _ = u[v + "AxisID"] || v;
        ((r[_] = r[_] || Object.create(null)),
          Bl(r[_], [{ axis: v }, a[_], p[y]]));
      });
    }),
    Object.keys(r).forEach((u) => {
      const d = r[u];
      Bl(d, [It.scales[d.type], It.scale]);
    }),
    r
  );
}
function gy(n) {
  const t = n.options || (n.options = {});
  ((t.plugins = dt(t.plugins, {})), (t.scales = CM(n, t)));
}
function py(n) {
  return (
    (n = n || {}),
    (n.datasets = n.datasets || []),
    (n.labels = n.labels || []),
    n
  );
}
function jM(n) {
  return ((n = n || {}), (n.data = py(n.data)), gy(n), n);
}
const s0 = new Map(),
  by = new Set();
function Or(n, t) {
  let i = s0.get(n);
  return (i || ((i = t()), s0.set(n, i), by.add(i)), i);
}
const jl = (n, t, i) => {
  const a = Zi(t, i);
  a !== void 0 && n.add(a);
};
class TM {
  constructor(t) {
    ((this._config = jM(t)),
      (this._scopeCache = new Map()),
      (this._resolverCache = new Map()));
  }
  get platform() {
    return this._config.platform;
  }
  get type() {
    return this._config.type;
  }
  set type(t) {
    this._config.type = t;
  }
  get data() {
    return this._config.data;
  }
  set data(t) {
    this._config.data = py(t);
  }
  get options() {
    return this._config.options;
  }
  set options(t) {
    this._config.options = t;
  }
  get plugins() {
    return this._config.plugins;
  }
  update() {
    const t = this._config;
    (this.clearCache(), gy(t));
  }
  clearCache() {
    (this._scopeCache.clear(), this._resolverCache.clear());
  }
  datasetScopeKeys(t) {
    return Or(t, () => [[`datasets.${t}`, ""]]);
  }
  datasetAnimationScopeKeys(t, i) {
    return Or(`${t}.transition.${i}`, () => [
      [`datasets.${t}.transitions.${i}`, `transitions.${i}`],
      [`datasets.${t}`, ""],
    ]);
  }
  datasetElementScopeKeys(t, i) {
    return Or(`${t}-${i}`, () => [
      [`datasets.${t}.elements.${i}`, `datasets.${t}`, `elements.${i}`, ""],
    ]);
  }
  pluginScopeKeys(t) {
    const i = t.id,
      a = this.type;
    return Or(`${a}-plugin-${i}`, () => [
      [`plugins.${i}`, ...(t.additionalOptionScopes || [])],
    ]);
  }
  _cachedScopes(t, i) {
    const a = this._scopeCache;
    let o = a.get(t);
    return ((!o || i) && ((o = new Map()), a.set(t, o)), o);
  }
  getOptionScopes(t, i, a) {
    const { options: o, type: r } = this,
      u = this._cachedScopes(t, a),
      d = u.get(i);
    if (d) return d;
    const h = new Set();
    i.forEach((p) => {
      (t && (h.add(t), p.forEach((y) => jl(h, t, y))),
        p.forEach((y) => jl(h, o, y)),
        p.forEach((y) => jl(h, Es[r] || {}, y)),
        p.forEach((y) => jl(h, It, y)),
        p.forEach((y) => jl(h, of, y)));
    });
    const g = Array.from(h);
    return (
      g.length === 0 && g.push(Object.create(null)),
      by.has(i) && u.set(i, g),
      g
    );
  }
  chartOptionScopes() {
    const { options: t, type: i } = this;
    return [t, Es[i] || {}, It.datasets[i] || {}, { type: i }, It, of];
  }
  resolveNamedOptions(t, i, a, o = [""]) {
    const r = { $shared: !0 },
      { resolver: u, subPrefixes: d } = a0(this._resolverCache, t, o);
    let h = u;
    if (OM(u, i)) {
      ((r.$shared = !1), (a = Qi(a) ? a() : a));
      const g = this.createResolver(t, a, d);
      h = Ma(u, a, g);
    }
    for (const g of i) r[g] = h[g];
    return r;
  }
  createResolver(t, i, a = [""], o) {
    const { resolver: r } = a0(this._resolverCache, t, a);
    return St(i) ? Ma(r, i, void 0, o) : r;
  }
}
function a0(n, t, i) {
  let a = n.get(t);
  a || ((a = new Map()), n.set(t, a));
  const o = i.join();
  let r = a.get(o);
  return (
    r ||
      ((r = {
        resolver: Gf(t, i),
        subPrefixes: i.filter((d) => !d.toLowerCase().includes("hover")),
      }),
      a.set(o, r)),
    r
  );
}
const NM = (n) => St(n) && Object.getOwnPropertyNames(n).some((t) => Qi(n[t]));
function OM(n, t) {
  const { isScriptable: i, isIndexable: a } = Kx(n);
  for (const o of t) {
    const r = i(o),
      u = a(o),
      d = (u || r) && n[o];
    if ((r && (Qi(d) || NM(d))) || (u && $t(d))) return !0;
  }
  return !1;
}
var zM = "4.5.1";
const DM = ["top", "bottom", "left", "right", "chartArea"];
function l0(n, t) {
  return n === "top" || n === "bottom" || (DM.indexOf(n) === -1 && t === "x");
}
function o0(n, t) {
  return function (i, a) {
    return i[n] === a[n] ? i[t] - a[t] : i[n] - a[n];
  };
}
function r0(n) {
  const t = n.chart,
    i = t.options.animation;
  (t.notifyPlugins("afterRender"), Pt(i && i.onComplete, [n], t));
}
function LM(n) {
  const t = n.chart,
    i = t.options.animation;
  Pt(i && i.onProgress, [n], t);
}
function xy(n) {
  return (
    Kf() && typeof n == "string"
      ? (n = document.getElementById(n))
      : n && n.length && (n = n[0]),
    n && n.canvas && (n = n.canvas),
    n
  );
}
const Xr = {},
  c0 = (n) => {
    const t = xy(n);
    return Object.values(Xr)
      .filter((i) => i.canvas === t)
      .pop();
  };
function BM(n, t, i) {
  const a = Object.keys(n);
  for (const o of a) {
    const r = +o;
    if (r >= t) {
      const u = n[o];
      (delete n[o], (i > 0 || r > t) && (n[r + i] = u));
    }
  }
}
function RM(n, t, i, a) {
  return !i || n.type === "mouseout" ? null : a ? t : n;
}
class Ln {
  static register(...t) {
    (zn.add(...t), u0());
  }
  static unregister(...t) {
    (zn.remove(...t), u0());
  }
  constructor(t, i) {
    const a = (this.config = new TM(i)),
      o = xy(t),
      r = c0(o);
    if (r)
      throw new Error(
        "Canvas is already in use. Chart with ID '" +
          r.id +
          "' must be destroyed before the canvas with ID '" +
          r.canvas.id +
          "' can be reused.",
      );
    const u = a.createResolver(a.chartOptionScopes(), this.getContext());
    ((this.platform = new (a.platform || eM(o))()),
      this.platform.updateConfig(a));
    const d = this.platform.acquireContext(o, u.aspectRatio),
      h = d && d.canvas,
      g = h && h.height,
      p = h && h.width;
    if (
      ((this.id = HS()),
      (this.ctx = d),
      (this.canvas = h),
      (this.width = p),
      (this.height = g),
      (this._options = u),
      (this._aspectRatio = this.aspectRatio),
      (this._layers = []),
      (this._metasets = []),
      (this._stacks = void 0),
      (this.boxes = []),
      (this.currentDevicePixelRatio = void 0),
      (this.chartArea = void 0),
      (this._active = []),
      (this._lastEvent = void 0),
      (this._listeners = {}),
      (this._responsiveListeners = void 0),
      (this._sortedMetasets = []),
      (this.scales = {}),
      (this._plugins = new yM()),
      (this.$proxies = {}),
      (this._hiddenIndices = {}),
      (this.attached = !1),
      (this._animationsDisabled = void 0),
      (this.$context = void 0),
      (this._doResize = e5((y) => this.update(y), u.resizeDelay || 0)),
      (this._dataChanges = []),
      (Xr[this.id] = this),
      !d || !h)
    ) {
      console.error(
        "Failed to create chart: can't acquire context from the given item",
      );
      return;
    }
    (ai.listen(this, "complete", r0),
      ai.listen(this, "progress", LM),
      this._initialize(),
      this.attached && this.update());
  }
  get aspectRatio() {
    const {
      options: { aspectRatio: t, maintainAspectRatio: i },
      width: a,
      height: o,
      _aspectRatio: r,
    } = this;
    return yt(t) ? (i && r ? r : o ? a / o : null) : t;
  }
  get data() {
    return this.config.data;
  }
  set data(t) {
    this.config.data = t;
  }
  get options() {
    return this._options;
  }
  set options(t) {
    this.config.options = t;
  }
  get registry() {
    return zn;
  }
  _initialize() {
    return (
      this.notifyPlugins("beforeInit"),
      this.options.responsive
        ? this.resize()
        : Ob(this, this.options.devicePixelRatio),
      this.bindEvents(),
      this.notifyPlugins("afterInit"),
      this
    );
  }
  clear() {
    return (jb(this.canvas, this.ctx), this);
  }
  stop() {
    return (ai.stop(this), this);
  }
  resize(t, i) {
    ai.running(this)
      ? (this._resizeBeforeDraw = { width: t, height: i })
      : this._resize(t, i);
  }
  _resize(t, i) {
    const a = this.options,
      o = this.canvas,
      r = a.maintainAspectRatio && this.aspectRatio,
      u = this.platform.getMaximumSize(o, t, i, r),
      d = a.devicePixelRatio || this.platform.getDevicePixelRatio(),
      h = this.width ? "resize" : "attach";
    ((this.width = u.width),
      (this.height = u.height),
      (this._aspectRatio = this.aspectRatio),
      Ob(this, d, !0) &&
        (this.notifyPlugins("resize", { size: u }),
        Pt(a.onResize, [this, u], this),
        this.attached && this._doResize(h) && this.render()));
  }
  ensureScalesHaveIDs() {
    const i = this.options.scales || {};
    Lt(i, (a, o) => {
      a.id = o;
    });
  }
  buildOrUpdateScales() {
    const t = this.options,
      i = t.scales,
      a = this.scales,
      o = Object.keys(a).reduce((u, d) => ((u[d] = !1), u), {});
    let r = [];
    (i &&
      (r = r.concat(
        Object.keys(i).map((u) => {
          const d = i[u],
            h = df(u, d),
            g = h === "r",
            p = h === "x";
          return {
            options: d,
            dposition: g ? "chartArea" : p ? "bottom" : "left",
            dtype: g ? "radialLinear" : p ? "category" : "linear",
          };
        }),
      )),
      Lt(r, (u) => {
        const d = u.options,
          h = d.id,
          g = df(h, d),
          p = dt(d.type, u.dtype);
        ((d.position === void 0 || l0(d.position, g) !== l0(u.dposition)) &&
          (d.position = u.dposition),
          (o[h] = !0));
        let y = null;
        if (h in a && a[h].type === p) y = a[h];
        else {
          const v = zn.getScale(p);
          ((y = new v({ id: h, type: p, ctx: this.ctx, chart: this })),
            (a[y.id] = y));
        }
        y.init(d, t);
      }),
      Lt(o, (u, d) => {
        u || delete a[d];
      }),
      Lt(a, (u) => {
        (Te.configure(this, u, u.options), Te.addBox(this, u));
      }));
  }
  _updateMetasets() {
    const t = this._metasets,
      i = this.data.datasets.length,
      a = t.length;
    if ((t.sort((o, r) => o.index - r.index), a > i)) {
      for (let o = i; o < a; ++o) this._destroyDatasetMeta(o);
      t.splice(i, a - i);
    }
    this._sortedMetasets = t.slice(0).sort(o0("order", "index"));
  }
  _removeUnreferencedMetasets() {
    const {
      _metasets: t,
      data: { datasets: i },
    } = this;
    (t.length > i.length && delete this._stacks,
      t.forEach((a, o) => {
        i.filter((r) => r === a._dataset).length === 0 &&
          this._destroyDatasetMeta(o);
      }));
  }
  buildOrUpdateControllers() {
    const t = [],
      i = this.data.datasets;
    let a, o;
    for (this._removeUnreferencedMetasets(), a = 0, o = i.length; a < o; a++) {
      const r = i[a];
      let u = this.getDatasetMeta(a);
      const d = r.type || this.config.type;
      if (
        (u.type &&
          u.type !== d &&
          (this._destroyDatasetMeta(a), (u = this.getDatasetMeta(a))),
        (u.type = d),
        (u.indexAxis = r.indexAxis || uf(d, this.options)),
        (u.order = r.order || 0),
        (u.index = a),
        (u.label = "" + r.label),
        (u.visible = this.isDatasetVisible(a)),
        u.controller)
      )
        (u.controller.updateIndex(a), u.controller.linkScales());
      else {
        const h = zn.getController(d),
          { datasetElementType: g, dataElementType: p } = It.datasets[d];
        (Object.assign(h, {
          dataElementType: zn.getElement(p),
          datasetElementType: g && zn.getElement(g),
        }),
          (u.controller = new h(this, a)),
          t.push(u.controller));
      }
    }
    return (this._updateMetasets(), t);
  }
  _resetElements() {
    Lt(
      this.data.datasets,
      (t, i) => {
        this.getDatasetMeta(i).controller.reset();
      },
      this,
    );
  }
  reset() {
    (this._resetElements(), this.notifyPlugins("reset"));
  }
  update(t) {
    const i = this.config;
    i.update();
    const a = (this._options = i.createResolver(
        i.chartOptionScopes(),
        this.getContext(),
      )),
      o = (this._animationsDisabled = !a.animation);
    if (
      (this._updateScales(),
      this._checkEventBindings(),
      this._updateHiddenIndices(),
      this._plugins.invalidate(),
      this.notifyPlugins("beforeUpdate", { mode: t, cancelable: !0 }) === !1)
    )
      return;
    const r = this.buildOrUpdateControllers();
    this.notifyPlugins("beforeElementsUpdate");
    let u = 0;
    for (let g = 0, p = this.data.datasets.length; g < p; g++) {
      const { controller: y } = this.getDatasetMeta(g),
        v = !o && r.indexOf(y) === -1;
      (y.buildOrUpdateElements(v), (u = Math.max(+y.getMaxOverflow(), u)));
    }
    ((u = this._minPadding = a.layout.autoPadding ? u : 0),
      this._updateLayout(u),
      o ||
        Lt(r, (g) => {
          g.reset();
        }),
      this._updateDatasets(t),
      this.notifyPlugins("afterUpdate", { mode: t }),
      this._layers.sort(o0("z", "_idx")));
    const { _active: d, _lastEvent: h } = this;
    (h
      ? this._eventHandler(h, !0)
      : d.length && this._updateHoverStyles(d, d, !0),
      this.render());
  }
  _updateScales() {
    (Lt(this.scales, (t) => {
      Te.removeBox(this, t);
    }),
      this.ensureScalesHaveIDs(),
      this.buildOrUpdateScales());
  }
  _checkEventBindings() {
    const t = this.options,
      i = new Set(Object.keys(this._listeners)),
      a = new Set(t.events);
    (!vb(i, a) || !!this._responsiveListeners !== t.responsive) &&
      (this.unbindEvents(), this.bindEvents());
  }
  _updateHiddenIndices() {
    const { _hiddenIndices: t } = this,
      i = this._getUniformDataChanges() || [];
    for (const { method: a, start: o, count: r } of i) {
      const u = a === "_removeElements" ? -r : r;
      BM(t, o, u);
    }
  }
  _getUniformDataChanges() {
    const t = this._dataChanges;
    if (!t || !t.length) return;
    this._dataChanges = [];
    const i = this.data.datasets.length,
      a = (r) =>
        new Set(
          t
            .filter((u) => u[0] === r)
            .map((u, d) => d + "," + u.splice(1).join(",")),
        ),
      o = a(0);
    for (let r = 1; r < i; r++) if (!vb(o, a(r))) return;
    return Array.from(o)
      .map((r) => r.split(","))
      .map((r) => ({ method: r[1], start: +r[2], count: +r[3] }));
  }
  _updateLayout(t) {
    if (this.notifyPlugins("beforeLayout", { cancelable: !0 }) === !1) return;
    Te.update(this, this.width, this.height, t);
    const i = this.chartArea,
      a = i.width <= 0 || i.height <= 0;
    ((this._layers = []),
      Lt(
        this.boxes,
        (o) => {
          (a && o.position === "chartArea") ||
            (o.configure && o.configure(), this._layers.push(...o._layers()));
        },
        this,
      ),
      this._layers.forEach((o, r) => {
        o._idx = r;
      }),
      this.notifyPlugins("afterLayout"));
  }
  _updateDatasets(t) {
    if (
      this.notifyPlugins("beforeDatasetsUpdate", {
        mode: t,
        cancelable: !0,
      }) !== !1
    ) {
      for (let i = 0, a = this.data.datasets.length; i < a; ++i)
        this.getDatasetMeta(i).controller.configure();
      for (let i = 0, a = this.data.datasets.length; i < a; ++i)
        this._updateDataset(i, Qi(t) ? t({ datasetIndex: i }) : t);
      this.notifyPlugins("afterDatasetsUpdate", { mode: t });
    }
  }
  _updateDataset(t, i) {
    const a = this.getDatasetMeta(t),
      o = { meta: a, index: t, mode: i, cancelable: !0 };
    this.notifyPlugins("beforeDatasetUpdate", o) !== !1 &&
      (a.controller._update(i),
      (o.cancelable = !1),
      this.notifyPlugins("afterDatasetUpdate", o));
  }
  render() {
    this.notifyPlugins("beforeRender", { cancelable: !0 }) !== !1 &&
      (ai.has(this)
        ? this.attached && !ai.running(this) && ai.start(this)
        : (this.draw(), r0({ chart: this })));
  }
  draw() {
    let t;
    if (this._resizeBeforeDraw) {
      const { width: a, height: o } = this._resizeBeforeDraw;
      ((this._resizeBeforeDraw = null), this._resize(a, o));
    }
    if (
      (this.clear(),
      this.width <= 0 ||
        this.height <= 0 ||
        this.notifyPlugins("beforeDraw", { cancelable: !0 }) === !1)
    )
      return;
    const i = this._layers;
    for (t = 0; t < i.length && i[t].z <= 0; ++t) i[t].draw(this.chartArea);
    for (this._drawDatasets(); t < i.length; ++t) i[t].draw(this.chartArea);
    this.notifyPlugins("afterDraw");
  }
  _getSortedDatasetMetas(t) {
    const i = this._sortedMetasets,
      a = [];
    let o, r;
    for (o = 0, r = i.length; o < r; ++o) {
      const u = i[o];
      (!t || u.visible) && a.push(u);
    }
    return a;
  }
  getSortedVisibleDatasetMetas() {
    return this._getSortedDatasetMetas(!0);
  }
  _drawDatasets() {
    if (this.notifyPlugins("beforeDatasetsDraw", { cancelable: !0 }) === !1)
      return;
    const t = this.getSortedVisibleDatasetMetas();
    for (let i = t.length - 1; i >= 0; --i) this._drawDataset(t[i]);
    this.notifyPlugins("afterDatasetsDraw");
  }
  _drawDataset(t) {
    const i = this.ctx,
      a = { meta: t, index: t.index, cancelable: !0 },
      o = ly(this, t);
    this.notifyPlugins("beforeDatasetDraw", a) !== !1 &&
      (o && gc(i, o),
      t.controller.draw(),
      o && pc(i),
      (a.cancelable = !1),
      this.notifyPlugins("afterDatasetDraw", a));
  }
  isPointInArea(t) {
    return ui(t, this.chartArea, this._minPadding);
  }
  getElementsAtEventForMode(t, i, a, o) {
    const r = D3.modes[i];
    return typeof r == "function" ? r(this, t, a, o) : [];
  }
  getDatasetMeta(t) {
    const i = this.data.datasets[t],
      a = this._metasets;
    let o = a.filter((r) => r && r._dataset === i).pop();
    return (
      o ||
        ((o = {
          type: null,
          data: [],
          dataset: null,
          controller: null,
          hidden: null,
          xAxisID: null,
          yAxisID: null,
          order: (i && i.order) || 0,
          index: t,
          _dataset: i,
          _parsed: [],
          _sorted: !1,
        }),
        a.push(o)),
      o
    );
  }
  getContext() {
    return (
      this.$context ||
      (this.$context = Ki(null, { chart: this, type: "chart" }))
    );
  }
  getVisibleDatasetCount() {
    return this.getSortedVisibleDatasetMetas().length;
  }
  isDatasetVisible(t) {
    const i = this.data.datasets[t];
    if (!i) return !1;
    const a = this.getDatasetMeta(t);
    return typeof a.hidden == "boolean" ? !a.hidden : !i.hidden;
  }
  setDatasetVisibility(t, i) {
    const a = this.getDatasetMeta(t);
    a.hidden = !i;
  }
  toggleDataVisibility(t) {
    this._hiddenIndices[t] = !this._hiddenIndices[t];
  }
  getDataVisibility(t) {
    return !this._hiddenIndices[t];
  }
  _updateVisibility(t, i, a) {
    const o = a ? "show" : "hide",
      r = this.getDatasetMeta(t),
      u = r.controller._resolveAnimations(void 0, o);
    Xl(i)
      ? ((r.data[i].hidden = !a), this.update())
      : (this.setDatasetVisibility(t, a),
        u.update(r, { visible: a }),
        this.update((d) => (d.datasetIndex === t ? o : void 0)));
  }
  hide(t, i) {
    this._updateVisibility(t, i, !1);
  }
  show(t, i) {
    this._updateVisibility(t, i, !0);
  }
  _destroyDatasetMeta(t) {
    const i = this._metasets[t];
    (i && i.controller && i.controller._destroy(), delete this._metasets[t]);
  }
  _stop() {
    let t, i;
    for (
      this.stop(), ai.remove(this), t = 0, i = this.data.datasets.length;
      t < i;
      ++t
    )
      this._destroyDatasetMeta(t);
  }
  destroy() {
    this.notifyPlugins("beforeDestroy");
    const { canvas: t, ctx: i } = this;
    (this._stop(),
      this.config.clearCache(),
      t &&
        (this.unbindEvents(),
        jb(t, i),
        this.platform.releaseContext(i),
        (this.canvas = null),
        (this.ctx = null)),
      delete Xr[this.id],
      this.notifyPlugins("afterDestroy"));
  }
  toBase64Image(...t) {
    return this.canvas.toDataURL(...t);
  }
  bindEvents() {
    (this.bindUserEvents(),
      this.options.responsive
        ? this.bindResponsiveEvents()
        : (this.attached = !0));
  }
  bindUserEvents() {
    const t = this._listeners,
      i = this.platform,
      a = (r, u) => {
        (i.addEventListener(this, r, u), (t[r] = u));
      },
      o = (r, u, d) => {
        ((r.offsetX = u), (r.offsetY = d), this._eventHandler(r));
      };
    Lt(this.options.events, (r) => a(r, o));
  }
  bindResponsiveEvents() {
    this._responsiveListeners || (this._responsiveListeners = {});
    const t = this._responsiveListeners,
      i = this.platform,
      a = (h, g) => {
        (i.addEventListener(this, h, g), (t[h] = g));
      },
      o = (h, g) => {
        t[h] && (i.removeEventListener(this, h, g), delete t[h]);
      },
      r = (h, g) => {
        this.canvas && this.resize(h, g);
      };
    let u;
    const d = () => {
      (o("attach", d),
        (this.attached = !0),
        this.resize(),
        a("resize", r),
        a("detach", u));
    };
    ((u = () => {
      ((this.attached = !1),
        o("resize", r),
        this._stop(),
        this._resize(0, 0),
        a("attach", d));
    }),
      i.isAttached(this.canvas) ? d() : u());
  }
  unbindEvents() {
    (Lt(this._listeners, (t, i) => {
      this.platform.removeEventListener(this, i, t);
    }),
      (this._listeners = {}),
      Lt(this._responsiveListeners, (t, i) => {
        this.platform.removeEventListener(this, i, t);
      }),
      (this._responsiveListeners = void 0));
  }
  updateHoverStyle(t, i, a) {
    const o = a ? "set" : "remove";
    let r, u, d, h;
    for (
      i === "dataset" &&
        ((r = this.getDatasetMeta(t[0].datasetIndex)),
        r.controller["_" + o + "DatasetHoverStyle"]()),
        d = 0,
        h = t.length;
      d < h;
      ++d
    ) {
      u = t[d];
      const g = u && this.getDatasetMeta(u.datasetIndex).controller;
      g && g[o + "HoverStyle"](u.element, u.datasetIndex, u.index);
    }
  }
  getActiveElements() {
    return this._active || [];
  }
  setActiveElements(t) {
    const i = this._active || [],
      a = t.map(({ datasetIndex: r, index: u }) => {
        const d = this.getDatasetMeta(r);
        if (!d) throw new Error("No dataset found at index " + r);
        return { datasetIndex: r, element: d.data[u], index: u };
      });
    !ec(a, i) &&
      ((this._active = a),
      (this._lastEvent = null),
      this._updateHoverStyles(a, i));
  }
  notifyPlugins(t, i, a) {
    return this._plugins.notify(this, t, i, a);
  }
  isPluginEnabled(t) {
    return this._plugins._cache.filter((i) => i.plugin.id === t).length === 1;
  }
  _updateHoverStyles(t, i, a) {
    const o = this.options.hover,
      r = (h, g) =>
        h.filter(
          (p) =>
            !g.some(
              (y) => p.datasetIndex === y.datasetIndex && p.index === y.index,
            ),
        ),
      u = r(i, t),
      d = a ? t : r(t, i);
    (u.length && this.updateHoverStyle(u, o.mode, !1),
      d.length && o.mode && this.updateHoverStyle(d, o.mode, !0));
  }
  _eventHandler(t, i) {
    const a = {
        event: t,
        replay: i,
        cancelable: !0,
        inChartArea: this.isPointInArea(t),
      },
      o = (u) =>
        (u.options.events || this.options.events).includes(t.native.type);
    if (this.notifyPlugins("beforeEvent", a, o) === !1) return;
    const r = this._handleEvent(t, i, a.inChartArea);
    return (
      (a.cancelable = !1),
      this.notifyPlugins("afterEvent", a, o),
      (r || a.changed) && this.render(),
      this
    );
  }
  _handleEvent(t, i, a) {
    const { _active: o = [], options: r } = this,
      u = i,
      d = this._getActiveElements(t, o, a, u),
      h = PS(t),
      g = RM(t, this._lastEvent, a, h);
    a &&
      ((this._lastEvent = null),
      Pt(r.onHover, [t, d, this], this),
      h && Pt(r.onClick, [t, d, this], this));
    const p = !ec(d, o);
    return (
      (p || i) && ((this._active = d), this._updateHoverStyles(d, o, i)),
      (this._lastEvent = g),
      p
    );
  }
  _getActiveElements(t, i, a, o) {
    if (t.type === "mouseout") return [];
    if (!a) return i;
    const r = this.options.hover;
    return this.getElementsAtEventForMode(t, r.mode, r, o);
  }
}
(K(Ln, "defaults", It),
  K(Ln, "instances", Xr),
  K(Ln, "overrides", Es),
  K(Ln, "registry", zn),
  K(Ln, "version", zM),
  K(Ln, "getChart", c0));
function u0() {
  return Lt(Ln.instances, (n) => n._plugins.invalidate());
}
function HM(n, t, i) {
  const {
      startAngle: a,
      x: o,
      y: r,
      outerRadius: u,
      innerRadius: d,
      options: h,
    } = t,
    { borderWidth: g, borderJoinStyle: p } = h,
    y = Math.min(g / u, je(a - i));
  if ((n.beginPath(), n.arc(o, r, u - g / 2, a + y / 2, i - y / 2), d > 0)) {
    const v = Math.min(g / d, je(a - i));
    n.arc(o, r, d + g / 2, i - v / 2, a + v / 2, !0);
  } else {
    const v = Math.min(g / 2, u * je(a - i));
    if (p === "round") n.arc(o, r, v, i - jt / 2, a + jt / 2, !0);
    else if (p === "bevel") {
      const _ = 2 * v * v,
        S = -_ * Math.cos(i + jt / 2) + o,
        M = -_ * Math.sin(i + jt / 2) + r,
        k = _ * Math.cos(a + jt / 2) + o,
        j = _ * Math.sin(a + jt / 2) + r;
      (n.lineTo(S, M), n.lineTo(k, j));
    }
  }
  (n.closePath(),
    n.moveTo(0, 0),
    n.rect(0, 0, n.canvas.width, n.canvas.height),
    n.clip("evenodd"));
}
function UM(n, t, i) {
  const {
    startAngle: a,
    pixelMargin: o,
    x: r,
    y: u,
    outerRadius: d,
    innerRadius: h,
  } = t;
  let g = o / d;
  (n.beginPath(),
    n.arc(r, u, d, a - g, i + g),
    h > o
      ? ((g = o / h), n.arc(r, u, h, i + g, a - g, !0))
      : n.arc(r, u, o, i + re, a - re),
    n.closePath(),
    n.clip());
}
function VM(n) {
  return Ff(n, ["outerStart", "outerEnd", "innerStart", "innerEnd"]);
}
function qM(n, t, i, a) {
  const o = VM(n.options.borderRadius),
    r = (i - t) / 2,
    u = Math.min(r, (a * t) / 2),
    d = (h) => {
      const g = ((i - Math.min(r, h)) * a) / 2;
      return ve(h, 0, Math.min(r, g));
    };
  return {
    outerStart: d(o.outerStart),
    outerEnd: d(o.outerEnd),
    innerStart: ve(o.innerStart, 0, u),
    innerEnd: ve(o.innerEnd, 0, u),
  };
}
function ba(n, t, i, a) {
  return { x: i + n * Math.cos(t), y: a + n * Math.sin(t) };
}
function oc(n, t, i, a, o, r) {
  const { x: u, y: d, startAngle: h, pixelMargin: g, innerRadius: p } = t,
    y = Math.max(t.outerRadius + a + i - g, 0),
    v = p > 0 ? p + a + i + g : 0;
  let _ = 0;
  const S = o - h;
  if (a) {
    const ut = p > 0 ? p - a : 0,
      D = y > 0 ? y - a : 0,
      F = (ut + D) / 2,
      I = F !== 0 ? (S * F) / (F + a) : S;
    _ = (S - I) / 2;
  }
  const M = Math.max(0.001, S * y - i / jt) / y,
    k = (S - M) / 2,
    j = h + k + _,
    z = o - k - _,
    {
      outerStart: U,
      outerEnd: q,
      innerStart: R,
      innerEnd: P,
    } = qM(t, v, y, z - j),
    X = y - U,
    G = y - q,
    W = j + U / X,
    lt = z - q / G,
    it = v + R,
    $ = v + P,
    Vt = j + R / it,
    Yt = z - P / $;
  if ((n.beginPath(), r)) {
    const ut = (W + lt) / 2;
    if ((n.arc(u, d, y, W, ut), n.arc(u, d, y, ut, lt), q > 0)) {
      const ct = ba(G, lt, u, d);
      n.arc(ct.x, ct.y, q, lt, z + re);
    }
    const D = ba($, z, u, d);
    if ((n.lineTo(D.x, D.y), P > 0)) {
      const ct = ba($, Yt, u, d);
      n.arc(ct.x, ct.y, P, z + re, Yt + Math.PI);
    }
    const F = (z - P / v + (j + R / v)) / 2;
    if (
      (n.arc(u, d, v, z - P / v, F, !0),
      n.arc(u, d, v, F, j + R / v, !0),
      R > 0)
    ) {
      const ct = ba(it, Vt, u, d);
      n.arc(ct.x, ct.y, R, Vt + Math.PI, j - re);
    }
    const I = ba(X, j, u, d);
    if ((n.lineTo(I.x, I.y), U > 0)) {
      const ct = ba(X, W, u, d);
      n.arc(ct.x, ct.y, U, j - re, W);
    }
  } else {
    n.moveTo(u, d);
    const ut = Math.cos(W) * y + u,
      D = Math.sin(W) * y + d;
    n.lineTo(ut, D);
    const F = Math.cos(lt) * y + u,
      I = Math.sin(lt) * y + d;
    n.lineTo(F, I);
  }
  n.closePath();
}
function YM(n, t, i, a, o) {
  const { fullCircles: r, startAngle: u, circumference: d } = t;
  let h = t.endAngle;
  if (r) {
    oc(n, t, i, a, h, o);
    for (let g = 0; g < r; ++g) n.fill();
    isNaN(d) || (h = u + (d % Zt || Zt));
  }
  return (oc(n, t, i, a, h, o), n.fill(), h);
}
function XM(n, t, i, a, o) {
  const { fullCircles: r, startAngle: u, circumference: d, options: h } = t,
    {
      borderWidth: g,
      borderJoinStyle: p,
      borderDash: y,
      borderDashOffset: v,
      borderRadius: _,
    } = h,
    S = h.borderAlign === "inner";
  if (!g) return;
  (n.setLineDash(y || []),
    (n.lineDashOffset = v),
    S
      ? ((n.lineWidth = g * 2), (n.lineJoin = p || "round"))
      : ((n.lineWidth = g), (n.lineJoin = p || "bevel")));
  let M = t.endAngle;
  if (r) {
    oc(n, t, i, a, M, o);
    for (let k = 0; k < r; ++k) n.stroke();
    isNaN(d) || (M = u + (d % Zt || Zt));
  }
  (S && UM(n, t, M),
    h.selfJoin && M - u >= jt && _ === 0 && p !== "miter" && HM(n, t, M),
    r || (oc(n, t, i, a, M, o), n.stroke()));
}
class zl extends fi {
  constructor(i) {
    super();
    K(this, "circumference");
    K(this, "endAngle");
    K(this, "fullCircles");
    K(this, "innerRadius");
    K(this, "outerRadius");
    K(this, "pixelMargin");
    K(this, "startAngle");
    ((this.options = void 0),
      (this.circumference = void 0),
      (this.startAngle = void 0),
      (this.endAngle = void 0),
      (this.innerRadius = void 0),
      (this.outerRadius = void 0),
      (this.pixelMargin = 0),
      (this.fullCircles = 0),
      i && Object.assign(this, i));
  }
  inRange(i, a, o) {
    const r = this.getProps(["x", "y"], o),
      { angle: u, distance: d } = Ux(r, { x: i, y: a }),
      {
        startAngle: h,
        endAngle: g,
        innerRadius: p,
        outerRadius: y,
        circumference: v,
      } = this.getProps(
        [
          "startAngle",
          "endAngle",
          "innerRadius",
          "outerRadius",
          "circumference",
        ],
        o,
      ),
      _ = (this.options.spacing + this.options.borderWidth) / 2,
      S = dt(v, g - h),
      M = Pl(u, h, g) && h !== g,
      k = S >= Zt || M,
      j = ri(d, p + _, y + _);
    return k && j;
  }
  getCenterPoint(i) {
    const {
        x: a,
        y: o,
        startAngle: r,
        endAngle: u,
        innerRadius: d,
        outerRadius: h,
      } = this.getProps(
        ["x", "y", "startAngle", "endAngle", "innerRadius", "outerRadius"],
        i,
      ),
      { offset: g, spacing: p } = this.options,
      y = (r + u) / 2,
      v = (d + h + p + g) / 2;
    return { x: a + Math.cos(y) * v, y: o + Math.sin(y) * v };
  }
  tooltipPosition(i) {
    return this.getCenterPoint(i);
  }
  draw(i) {
    const { options: a, circumference: o } = this,
      r = (a.offset || 0) / 4,
      u = (a.spacing || 0) / 2,
      d = a.circular;
    if (
      ((this.pixelMargin = a.borderAlign === "inner" ? 0.33 : 0),
      (this.fullCircles = o > Zt ? Math.floor(o / Zt) : 0),
      o === 0 || this.innerRadius < 0 || this.outerRadius < 0)
    )
      return;
    i.save();
    const h = (this.startAngle + this.endAngle) / 2;
    i.translate(Math.cos(h) * r, Math.sin(h) * r);
    const g = 1 - Math.sin(Math.min(jt, o || 0)),
      p = r * g;
    ((i.fillStyle = a.backgroundColor),
      (i.strokeStyle = a.borderColor),
      YM(i, this, p, u, d),
      XM(i, this, p, u, d),
      i.restore());
  }
}
(K(zl, "id", "arc"),
  K(zl, "defaults", {
    borderAlign: "center",
    borderColor: "#fff",
    borderDash: [],
    borderDashOffset: 0,
    borderJoinStyle: void 0,
    borderRadius: 0,
    borderWidth: 2,
    offset: 0,
    spacing: 0,
    angle: void 0,
    circular: !0,
    selfJoin: !1,
  }),
  K(zl, "defaultRoutes", { backgroundColor: "backgroundColor" }),
  K(zl, "descriptors", {
    _scriptable: !0,
    _indexable: (i) => i !== "borderDash",
  }));
function yy(n, t, i = t) {
  ((n.lineCap = dt(i.borderCapStyle, t.borderCapStyle)),
    n.setLineDash(dt(i.borderDash, t.borderDash)),
    (n.lineDashOffset = dt(i.borderDashOffset, t.borderDashOffset)),
    (n.lineJoin = dt(i.borderJoinStyle, t.borderJoinStyle)),
    (n.lineWidth = dt(i.borderWidth, t.borderWidth)),
    (n.strokeStyle = dt(i.borderColor, t.borderColor)));
}
function PM(n, t, i) {
  n.lineTo(i.x, i.y);
}
function FM(n) {
  return n.stepped
    ? h5
    : n.tension || n.cubicInterpolationMode === "monotone"
      ? m5
      : PM;
}
function vy(n, t, i = {}) {
  const a = n.length,
    { start: o = 0, end: r = a - 1 } = i,
    { start: u, end: d } = t,
    h = Math.max(o, u),
    g = Math.min(r, d),
    p = (o < u && r < u) || (o > d && r > d);
  return {
    count: a,
    start: h,
    loop: t.loop,
    ilen: g < h && !p ? a + g - h : g - h,
  };
}
function GM(n, t, i, a) {
  const { points: o, options: r } = t,
    { count: u, start: d, loop: h, ilen: g } = vy(o, i, a),
    p = FM(r);
  let { move: y = !0, reverse: v } = a || {},
    _,
    S,
    M;
  for (_ = 0; _ <= g; ++_)
    ((S = o[(d + (v ? g - _ : _)) % u]),
      !S.skip &&
        (y ? (n.moveTo(S.x, S.y), (y = !1)) : p(n, M, S, v, r.stepped),
        (M = S)));
  return (h && ((S = o[(d + (v ? g : 0)) % u]), p(n, M, S, v, r.stepped)), !!h);
}
function ZM(n, t, i, a) {
  const o = t.points,
    { count: r, start: u, ilen: d } = vy(o, i, a),
    { move: h = !0, reverse: g } = a || {};
  let p = 0,
    y = 0,
    v,
    _,
    S,
    M,
    k,
    j;
  const z = (q) => (u + (g ? d - q : q)) % r,
    U = () => {
      M !== k && (n.lineTo(p, k), n.lineTo(p, M), n.lineTo(p, j));
    };
  for (h && ((_ = o[z(0)]), n.moveTo(_.x, _.y)), v = 0; v <= d; ++v) {
    if (((_ = o[z(v)]), _.skip)) continue;
    const q = _.x,
      R = _.y,
      P = q | 0;
    (P === S
      ? (R < M ? (M = R) : R > k && (k = R), (p = (y * p + q) / ++y))
      : (U(), n.lineTo(q, R), (S = P), (y = 0), (M = k = R)),
      (j = R));
  }
  U();
}
function ff(n) {
  const t = n.options,
    i = t.borderDash && t.borderDash.length;
  return !n._decimated &&
    !n._loop &&
    !t.tension &&
    t.cubicInterpolationMode !== "monotone" &&
    !t.stepped &&
    !i
    ? ZM
    : GM;
}
function QM(n) {
  return n.stepped
    ? G5
    : n.tension || n.cubicInterpolationMode === "monotone"
      ? Z5
      : ws;
}
function KM(n, t, i, a) {
  let o = t._path;
  (o || ((o = t._path = new Path2D()), t.path(o, i, a) && o.closePath()),
    yy(n, t.options),
    n.stroke(o));
}
function WM(n, t, i, a) {
  const { segments: o, options: r } = t,
    u = ff(t);
  for (const d of o)
    (yy(n, r, d.style),
      n.beginPath(),
      u(n, t, d, { start: i, end: i + a - 1 }) && n.closePath(),
      n.stroke());
}
const $M = typeof Path2D == "function";
function IM(n, t, i, a) {
  $M && !t.options.segment ? KM(n, t, i, a) : WM(n, t, i, a);
}
class Pi extends fi {
  constructor(t) {
    (super(),
      (this.animated = !0),
      (this.options = void 0),
      (this._chart = void 0),
      (this._loop = void 0),
      (this._fullLoop = void 0),
      (this._path = void 0),
      (this._points = void 0),
      (this._segments = void 0),
      (this._decimated = !1),
      (this._pointsUpdated = !1),
      (this._datasetIndex = void 0),
      t && Object.assign(this, t));
  }
  updateControlPoints(t, i) {
    const a = this.options;
    if (
      (a.tension || a.cubicInterpolationMode === "monotone") &&
      !a.stepped &&
      !this._pointsUpdated
    ) {
      const o = a.spanGaps ? this._loop : this._fullLoop;
      (H5(this._points, a, t, o, i), (this._pointsUpdated = !0));
    }
  }
  set points(t) {
    ((this._points = t),
      delete this._segments,
      delete this._path,
      (this._pointsUpdated = !1));
  }
  get points() {
    return this._points;
  }
  get segments() {
    return this._segments || (this._segments = J5(this, this.options.segment));
  }
  first() {
    const t = this.segments,
      i = this.points;
    return t.length && i[t[0].start];
  }
  last() {
    const t = this.segments,
      i = this.points,
      a = t.length;
    return a && i[t[a - 1].end];
  }
  interpolate(t, i) {
    const a = this.options,
      o = t[i],
      r = this.points,
      u = ay(this, { property: i, start: o, end: o });
    if (!u.length) return;
    const d = [],
      h = QM(a);
    let g, p;
    for (g = 0, p = u.length; g < p; ++g) {
      const { start: y, end: v } = u[g],
        _ = r[y],
        S = r[v];
      if (_ === S) {
        d.push(_);
        continue;
      }
      const M = Math.abs((o - _[i]) / (S[i] - _[i])),
        k = h(_, S, M, a.stepped);
      ((k[i] = t[i]), d.push(k));
    }
    return d.length === 1 ? d[0] : d;
  }
  pathSegment(t, i, a) {
    return ff(this)(t, this, i, a);
  }
  path(t, i, a) {
    const o = this.segments,
      r = ff(this);
    let u = this._loop;
    ((i = i || 0), (a = a || this.points.length - i));
    for (const d of o) u &= r(t, this, d, { start: i, end: i + a - 1 });
    return !!u;
  }
  draw(t, i, a, o) {
    const r = this.options || {};
    ((this.points || []).length &&
      r.borderWidth &&
      (t.save(), IM(t, this, a, o), t.restore()),
      this.animated && ((this._pointsUpdated = !1), (this._path = void 0)));
  }
}
(K(Pi, "id", "line"),
  K(Pi, "defaults", {
    borderCapStyle: "butt",
    borderDash: [],
    borderDashOffset: 0,
    borderJoinStyle: "miter",
    borderWidth: 3,
    capBezierPoints: !0,
    cubicInterpolationMode: "default",
    fill: !1,
    spanGaps: !1,
    stepped: !1,
    tension: 0,
  }),
  K(Pi, "defaultRoutes", {
    backgroundColor: "backgroundColor",
    borderColor: "borderColor",
  }),
  K(Pi, "descriptors", {
    _scriptable: !0,
    _indexable: (t) => t !== "borderDash" && t !== "fill",
  }));
function d0(n, t, i, a) {
  const o = n.options,
    { [i]: r } = n.getProps([i], a);
  return Math.abs(t - r) < o.radius + o.hitRadius;
}
class Pr extends fi {
  constructor(i) {
    super();
    K(this, "parsed");
    K(this, "skip");
    K(this, "stop");
    ((this.options = void 0),
      (this.parsed = void 0),
      (this.skip = void 0),
      (this.stop = void 0),
      i && Object.assign(this, i));
  }
  inRange(i, a, o) {
    const r = this.options,
      { x: u, y: d } = this.getProps(["x", "y"], o);
    return (
      Math.pow(i - u, 2) + Math.pow(a - d, 2) <
      Math.pow(r.hitRadius + r.radius, 2)
    );
  }
  inXRange(i, a) {
    return d0(this, i, "x", a);
  }
  inYRange(i, a) {
    return d0(this, i, "y", a);
  }
  getCenterPoint(i) {
    const { x: a, y: o } = this.getProps(["x", "y"], i);
    return { x: a, y: o };
  }
  size(i) {
    i = i || this.options || {};
    let a = i.radius || 0;
    a = Math.max(a, (a && i.hoverRadius) || 0);
    const o = (a && i.borderWidth) || 0;
    return (a + o) * 2;
  }
  draw(i, a) {
    const o = this.options;
    this.skip ||
      o.radius < 0.1 ||
      !ui(this, a, this.size(o) / 2) ||
      ((i.strokeStyle = o.borderColor),
      (i.lineWidth = o.borderWidth),
      (i.fillStyle = o.backgroundColor),
      rf(i, o, this.x, this.y));
  }
  getRange() {
    const i = this.options || {};
    return i.radius + i.hitRadius;
  }
}
(K(Pr, "id", "point"),
  K(Pr, "defaults", {
    borderWidth: 1,
    hitRadius: 1,
    hoverBorderWidth: 1,
    hoverRadius: 4,
    pointStyle: "circle",
    radius: 3,
    rotation: 0,
  }),
  K(Pr, "defaultRoutes", {
    backgroundColor: "backgroundColor",
    borderColor: "borderColor",
  }));
function wy(n, t) {
  const {
    x: i,
    y: a,
    base: o,
    width: r,
    height: u,
  } = n.getProps(["x", "y", "base", "width", "height"], t);
  let d, h, g, p, y;
  return (
    n.horizontal
      ? ((y = u / 2),
        (d = Math.min(i, o)),
        (h = Math.max(i, o)),
        (g = a - y),
        (p = a + y))
      : ((y = r / 2),
        (d = i - y),
        (h = i + y),
        (g = Math.min(a, o)),
        (p = Math.max(a, o))),
    { left: d, top: g, right: h, bottom: p }
  );
}
function Fi(n, t, i, a) {
  return n ? 0 : ve(t, i, a);
}
function JM(n, t, i) {
  const a = n.options.borderWidth,
    o = n.borderSkipped,
    r = Qx(a);
  return {
    t: Fi(o.top, r.top, 0, i),
    r: Fi(o.right, r.right, 0, t),
    b: Fi(o.bottom, r.bottom, 0, i),
    l: Fi(o.left, r.left, 0, t),
  };
}
function tA(n, t, i) {
  const { enableBorderRadius: a } = n.getProps(["enableBorderRadius"]),
    o = n.options.borderRadius,
    r = Ms(o),
    u = Math.min(t, i),
    d = n.borderSkipped,
    h = a || St(o);
  return {
    topLeft: Fi(!h || d.top || d.left, r.topLeft, 0, u),
    topRight: Fi(!h || d.top || d.right, r.topRight, 0, u),
    bottomLeft: Fi(!h || d.bottom || d.left, r.bottomLeft, 0, u),
    bottomRight: Fi(!h || d.bottom || d.right, r.bottomRight, 0, u),
  };
}
function eA(n) {
  const t = wy(n),
    i = t.right - t.left,
    a = t.bottom - t.top,
    o = JM(n, i / 2, a / 2),
    r = tA(n, i / 2, a / 2);
  return {
    outer: { x: t.left, y: t.top, w: i, h: a, radius: r },
    inner: {
      x: t.left + o.l,
      y: t.top + o.t,
      w: i - o.l - o.r,
      h: a - o.t - o.b,
      radius: {
        topLeft: Math.max(0, r.topLeft - Math.max(o.t, o.l)),
        topRight: Math.max(0, r.topRight - Math.max(o.t, o.r)),
        bottomLeft: Math.max(0, r.bottomLeft - Math.max(o.b, o.l)),
        bottomRight: Math.max(0, r.bottomRight - Math.max(o.b, o.r)),
      },
    },
  };
}
function Kd(n, t, i, a) {
  const o = t === null,
    r = i === null,
    d = n && !(o && r) && wy(n, a);
  return d && (o || ri(t, d.left, d.right)) && (r || ri(i, d.top, d.bottom));
}
function nA(n) {
  return n.topLeft || n.topRight || n.bottomLeft || n.bottomRight;
}
function iA(n, t) {
  n.rect(t.x, t.y, t.w, t.h);
}
function Wd(n, t, i = {}) {
  const a = n.x !== i.x ? -t : 0,
    o = n.y !== i.y ? -t : 0,
    r = (n.x + n.w !== i.x + i.w ? t : 0) - a,
    u = (n.y + n.h !== i.y + i.h ? t : 0) - o;
  return { x: n.x + a, y: n.y + o, w: n.w + r, h: n.h + u, radius: n.radius };
}
class Fr extends fi {
  constructor(t) {
    (super(),
      (this.options = void 0),
      (this.horizontal = void 0),
      (this.base = void 0),
      (this.width = void 0),
      (this.height = void 0),
      (this.inflateAmount = void 0),
      t && Object.assign(this, t));
  }
  draw(t) {
    const {
        inflateAmount: i,
        options: { borderColor: a, backgroundColor: o },
      } = this,
      { inner: r, outer: u } = eA(this),
      d = nA(u.radius) ? Fl : iA;
    (t.save(),
      (u.w !== r.w || u.h !== r.h) &&
        (t.beginPath(),
        d(t, Wd(u, i, r)),
        t.clip(),
        d(t, Wd(r, -i, u)),
        (t.fillStyle = a),
        t.fill("evenodd")),
      t.beginPath(),
      d(t, Wd(r, i)),
      (t.fillStyle = o),
      t.fill(),
      t.restore());
  }
  inRange(t, i, a) {
    return Kd(this, t, i, a);
  }
  inXRange(t, i) {
    return Kd(this, t, null, i);
  }
  inYRange(t, i) {
    return Kd(this, null, t, i);
  }
  getCenterPoint(t) {
    const {
      x: i,
      y: a,
      base: o,
      horizontal: r,
    } = this.getProps(["x", "y", "base", "horizontal"], t);
    return { x: r ? (i + o) / 2 : i, y: r ? a : (a + o) / 2 };
  }
  getRange(t) {
    return t === "x" ? this.width / 2 : this.height / 2;
  }
}
(K(Fr, "id", "bar"),
  K(Fr, "defaults", {
    borderSkipped: "start",
    borderWidth: 0,
    borderRadius: 0,
    inflateAmount: "auto",
    pointStyle: void 0,
  }),
  K(Fr, "defaultRoutes", {
    backgroundColor: "backgroundColor",
    borderColor: "borderColor",
  }));
var sA = Object.freeze({
  __proto__: null,
  ArcElement: zl,
  BarElement: Fr,
  LineElement: Pi,
  PointElement: Pr,
});
const hf = [
    "rgb(54, 162, 235)",
    "rgb(255, 99, 132)",
    "rgb(255, 159, 64)",
    "rgb(255, 205, 86)",
    "rgb(75, 192, 192)",
    "rgb(153, 102, 255)",
    "rgb(201, 203, 207)",
  ],
  f0 = hf.map((n) => n.replace("rgb(", "rgba(").replace(")", ", 0.5)"));
function _y(n) {
  return hf[n % hf.length];
}
function Sy(n) {
  return f0[n % f0.length];
}
function aA(n, t) {
  return ((n.borderColor = _y(t)), (n.backgroundColor = Sy(t)), ++t);
}
function lA(n, t) {
  return ((n.backgroundColor = n.data.map(() => _y(t++))), t);
}
function oA(n, t) {
  return ((n.backgroundColor = n.data.map(() => Sy(t++))), t);
}
function rA(n) {
  let t = 0;
  return (i, a) => {
    const o = n.getDatasetMeta(a).controller;
    o instanceof _s
      ? (t = lA(i, t))
      : o instanceof Vl
        ? (t = oA(i, t))
        : o && (t = aA(i, t));
  };
}
function h0(n) {
  let t;
  for (t in n) if (n[t].borderColor || n[t].backgroundColor) return !0;
  return !1;
}
function cA(n) {
  return n && (n.borderColor || n.backgroundColor);
}
function uA() {
  return (
    It.borderColor !== "rgba(0,0,0,0.1)" ||
    It.backgroundColor !== "rgba(0,0,0,0.1)"
  );
}
var dA = {
  id: "colors",
  defaults: { enabled: !0, forceOverride: !1 },
  beforeLayout(n, t, i) {
    if (!i.enabled) return;
    const {
        data: { datasets: a },
        options: o,
      } = n.config,
      { elements: r } = o,
      u = h0(a) || cA(o) || (r && h0(r)) || uA();
    if (!i.forceOverride && u) return;
    const d = rA(n);
    a.forEach(d);
  },
};
function fA(n, t, i, a, o) {
  const r = o.samples || a;
  if (r >= i) return n.slice(t, t + i);
  const u = [],
    d = (i - 2) / (r - 2);
  let h = 0;
  const g = t + i - 1;
  let p = t,
    y,
    v,
    _,
    S,
    M;
  for (u[h++] = n[p], y = 0; y < r - 2; y++) {
    let k = 0,
      j = 0,
      z;
    const U = Math.floor((y + 1) * d) + 1 + t,
      q = Math.min(Math.floor((y + 2) * d) + 1, i) + t,
      R = q - U;
    for (z = U; z < q; z++) ((k += n[z].x), (j += n[z].y));
    ((k /= R), (j /= R));
    const P = Math.floor(y * d) + 1 + t,
      X = Math.min(Math.floor((y + 1) * d) + 1, i) + t,
      { x: G, y: W } = n[p];
    for (_ = S = -1, z = P; z < X; z++)
      ((S = 0.5 * Math.abs((G - k) * (n[z].y - W) - (G - n[z].x) * (j - W))),
        S > _ && ((_ = S), (v = n[z]), (M = z)));
    ((u[h++] = v), (p = M));
  }
  return ((u[h++] = n[g]), u);
}
function hA(n, t, i, a) {
  let o = 0,
    r = 0,
    u,
    d,
    h,
    g,
    p,
    y,
    v,
    _,
    S,
    M;
  const k = [],
    j = t + i - 1,
    z = n[t].x,
    q = n[j].x - z;
  for (u = t; u < t + i; ++u) {
    ((d = n[u]), (h = ((d.x - z) / q) * a), (g = d.y));
    const R = h | 0;
    if (R === p)
      (g < S ? ((S = g), (y = u)) : g > M && ((M = g), (v = u)),
        (o = (r * o + d.x) / ++r));
    else {
      const P = u - 1;
      if (!yt(y) && !yt(v)) {
        const X = Math.min(y, v),
          G = Math.max(y, v);
        (X !== _ && X !== P && k.push({ ...n[X], x: o }),
          G !== _ && G !== P && k.push({ ...n[G], x: o }));
      }
      (u > 0 && P !== _ && k.push(n[P]),
        k.push(d),
        (p = R),
        (r = 0),
        (S = M = g),
        (y = v = _ = u));
    }
  }
  return k;
}
function My(n) {
  if (n._decimated) {
    const t = n._data;
    (delete n._decimated,
      delete n._data,
      Object.defineProperty(n, "data", {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        value: t,
      }));
  }
}
function m0(n) {
  n.data.datasets.forEach((t) => {
    My(t);
  });
}
function mA(n, t) {
  const i = t.length;
  let a = 0,
    o;
  const { iScale: r } = n,
    { min: u, max: d, minDefined: h, maxDefined: g } = r.getUserBounds();
  return (
    h && (a = ve(ci(t, r.axis, u).lo, 0, i - 1)),
    g ? (o = ve(ci(t, r.axis, d).hi + 1, a, i) - a) : (o = i - a),
    { start: a, count: o }
  );
}
var gA = {
  id: "decimation",
  defaults: { algorithm: "min-max", enabled: !1 },
  beforeElementsUpdate: (n, t, i) => {
    if (!i.enabled) {
      m0(n);
      return;
    }
    const a = n.width;
    n.data.datasets.forEach((o, r) => {
      const { _data: u, indexAxis: d } = o,
        h = n.getDatasetMeta(r),
        g = u || o.data;
      if (
        Nl([d, n.options.indexAxis]) === "y" ||
        !h.controller.supportsDecimation
      )
        return;
      const p = n.scales[h.xAxisID];
      if ((p.type !== "linear" && p.type !== "time") || n.options.parsing)
        return;
      let { start: y, count: v } = mA(h, g);
      const _ = i.threshold || 4 * a;
      if (v <= _) {
        My(o);
        return;
      }
      yt(u) &&
        ((o._data = g),
        delete o.data,
        Object.defineProperty(o, "data", {
          configurable: !0,
          enumerable: !0,
          get: function () {
            return this._decimated;
          },
          set: function (M) {
            this._data = M;
          },
        }));
      let S;
      switch (i.algorithm) {
        case "lttb":
          S = fA(g, y, v, a, i);
          break;
        case "min-max":
          S = hA(g, y, v, a);
          break;
        default:
          throw new Error(`Unsupported decimation algorithm '${i.algorithm}'`);
      }
      o._decimated = S;
    });
  },
  destroy(n) {
    m0(n);
  },
};
function pA(n, t, i) {
  const a = n.segments,
    o = n.points,
    r = t.points,
    u = [];
  for (const d of a) {
    let { start: h, end: g } = d;
    g = yc(h, g, o);
    const p = mf(i, o[h], o[g], d.loop);
    if (!t.segments) {
      u.push({ source: d, target: p, start: o[h], end: o[g] });
      continue;
    }
    const y = ay(t, p);
    for (const v of y) {
      const _ = mf(i, r[v.start], r[v.end], v.loop),
        S = sy(d, o, _);
      for (const M of S)
        u.push({
          source: M,
          target: v,
          start: { [i]: g0(p, _, "start", Math.max) },
          end: { [i]: g0(p, _, "end", Math.min) },
        });
    }
  }
  return u;
}
function mf(n, t, i, a) {
  if (a) return;
  let o = t[n],
    r = i[n];
  return (
    n === "angle" && ((o = je(o)), (r = je(r))),
    { property: n, start: o, end: r }
  );
}
function bA(n, t) {
  const { x: i = null, y: a = null } = n || {},
    o = t.points,
    r = [];
  return (
    t.segments.forEach(({ start: u, end: d }) => {
      d = yc(u, d, o);
      const h = o[u],
        g = o[d];
      a !== null
        ? (r.push({ x: h.x, y: a }), r.push({ x: g.x, y: a }))
        : i !== null && (r.push({ x: i, y: h.y }), r.push({ x: i, y: g.y }));
    }),
    r
  );
}
function yc(n, t, i) {
  for (; t > n; t--) {
    const a = i[t];
    if (!isNaN(a.x) && !isNaN(a.y)) break;
  }
  return t;
}
function g0(n, t, i, a) {
  return n && t ? a(n[i], t[i]) : n ? n[i] : t ? t[i] : 0;
}
function Ay(n, t) {
  let i = [],
    a = !1;
  return (
    $t(n) ? ((a = !0), (i = n)) : (i = bA(n, t)),
    i.length
      ? new Pi({ points: i, options: { tension: 0 }, _loop: a, _fullLoop: a })
      : null
  );
}
function p0(n) {
  return n && n.fill !== !1;
}
function xA(n, t, i) {
  let o = n[t].fill;
  const r = [t];
  let u;
  if (!i) return o;
  for (; o !== !1 && r.indexOf(o) === -1;) {
    if (!ne(o)) return o;
    if (((u = n[o]), !u)) return !1;
    if (u.visible) return o;
    (r.push(o), (o = u.fill));
  }
  return !1;
}
function yA(n, t, i) {
  const a = SA(n);
  if (St(a)) return isNaN(a.value) ? !1 : a;
  let o = parseFloat(a);
  return ne(o) && Math.floor(o) === o
    ? vA(a[0], t, o, i)
    : ["origin", "start", "end", "stack", "shape"].indexOf(a) >= 0 && a;
}
function vA(n, t, i, a) {
  return (
    (n === "-" || n === "+") && (i = t + i),
    i === t || i < 0 || i >= a ? !1 : i
  );
}
function wA(n, t) {
  let i = null;
  return (
    n === "start"
      ? (i = t.bottom)
      : n === "end"
        ? (i = t.top)
        : St(n)
          ? (i = t.getPixelForValue(n.value))
          : t.getBasePixel && (i = t.getBasePixel()),
    i
  );
}
function _A(n, t, i) {
  let a;
  return (
    n === "start"
      ? (a = i)
      : n === "end"
        ? (a = t.options.reverse ? t.min : t.max)
        : St(n)
          ? (a = n.value)
          : (a = t.getBaseValue()),
    a
  );
}
function SA(n) {
  const t = n.options,
    i = t.fill;
  let a = dt(i && i.target, i);
  return (
    a === void 0 && (a = !!t.backgroundColor),
    a === !1 || a === null ? !1 : a === !0 ? "origin" : a
  );
}
function MA(n) {
  const { scale: t, index: i, line: a } = n,
    o = [],
    r = a.segments,
    u = a.points,
    d = AA(t, i);
  d.push(Ay({ x: null, y: t.bottom }, a));
  for (let h = 0; h < r.length; h++) {
    const g = r[h];
    for (let p = g.start; p <= g.end; p++) kA(o, u[p], d);
  }
  return new Pi({ points: o, options: {} });
}
function AA(n, t) {
  const i = [],
    a = n.getMatchingVisibleMetas("line");
  for (let o = 0; o < a.length; o++) {
    const r = a[o];
    if (r.index === t) break;
    r.hidden || i.unshift(r.dataset);
  }
  return i;
}
function kA(n, t, i) {
  const a = [];
  for (let o = 0; o < i.length; o++) {
    const r = i[o],
      { first: u, last: d, point: h } = EA(r, t, "x");
    if (!(!h || (u && d))) {
      if (u) a.unshift(h);
      else if ((n.push(h), !d)) break;
    }
  }
  n.push(...a);
}
function EA(n, t, i) {
  const a = n.interpolate(t, i);
  if (!a) return {};
  const o = a[i],
    r = n.segments,
    u = n.points;
  let d = !1,
    h = !1;
  for (let g = 0; g < r.length; g++) {
    const p = r[g],
      y = u[p.start][i],
      v = u[p.end][i];
    if (ri(o, y, v)) {
      ((d = o === y), (h = o === v));
      break;
    }
  }
  return { first: d, last: h, point: a };
}
class ky {
  constructor(t) {
    ((this.x = t.x), (this.y = t.y), (this.radius = t.radius));
  }
  pathSegment(t, i, a) {
    const { x: o, y: r, radius: u } = this;
    return (
      (i = i || { start: 0, end: Zt }),
      t.arc(o, r, u, i.end, i.start, !0),
      !a.bounds
    );
  }
  interpolate(t) {
    const { x: i, y: a, radius: o } = this,
      r = t.angle;
    return { x: i + Math.cos(r) * o, y: a + Math.sin(r) * o, angle: r };
  }
}
function CA(n) {
  const { chart: t, fill: i, line: a } = n;
  if (ne(i)) return jA(t, i);
  if (i === "stack") return MA(n);
  if (i === "shape") return !0;
  const o = TA(n);
  return o instanceof ky ? o : Ay(o, a);
}
function jA(n, t) {
  const i = n.getDatasetMeta(t);
  return i && n.isDatasetVisible(t) ? i.dataset : null;
}
function TA(n) {
  return (n.scale || {}).getPointPositionForValue ? OA(n) : NA(n);
}
function NA(n) {
  const { scale: t = {}, fill: i } = n,
    a = wA(i, t);
  if (ne(a)) {
    const o = t.isHorizontal();
    return { x: o ? a : null, y: o ? null : a };
  }
  return null;
}
function OA(n) {
  const { scale: t, fill: i } = n,
    a = t.options,
    o = t.getLabels().length,
    r = a.reverse ? t.max : t.min,
    u = _A(i, t, r),
    d = [];
  if (a.grid.circular) {
    const h = t.getPointPositionForValue(0, r);
    return new ky({
      x: h.x,
      y: h.y,
      radius: t.getDistanceFromCenterForValue(u),
    });
  }
  for (let h = 0; h < o; ++h) d.push(t.getPointPositionForValue(h, u));
  return d;
}
function $d(n, t, i) {
  const a = CA(t),
    { chart: o, index: r, line: u, scale: d, axis: h } = t,
    g = u.options,
    p = g.fill,
    y = g.backgroundColor,
    { above: v = y, below: _ = y } = p || {},
    S = o.getDatasetMeta(r),
    M = ly(o, S);
  a &&
    u.points.length &&
    (gc(n, i),
    zA(n, {
      line: u,
      target: a,
      above: v,
      below: _,
      area: i,
      scale: d,
      axis: h,
      clip: M,
    }),
    pc(n));
}
function zA(n, t) {
  const {
      line: i,
      target: a,
      above: o,
      below: r,
      area: u,
      scale: d,
      clip: h,
    } = t,
    g = i._loop ? "angle" : t.axis;
  n.save();
  let p = r;
  (r !== o &&
    (g === "x"
      ? (b0(n, a, u.top),
        Id(n, { line: i, target: a, color: o, scale: d, property: g, clip: h }),
        n.restore(),
        n.save(),
        b0(n, a, u.bottom))
      : g === "y" &&
        (x0(n, a, u.left),
        Id(n, { line: i, target: a, color: r, scale: d, property: g, clip: h }),
        n.restore(),
        n.save(),
        x0(n, a, u.right),
        (p = o))),
    Id(n, { line: i, target: a, color: p, scale: d, property: g, clip: h }),
    n.restore());
}
function b0(n, t, i) {
  const { segments: a, points: o } = t;
  let r = !0,
    u = !1;
  n.beginPath();
  for (const d of a) {
    const { start: h, end: g } = d,
      p = o[h],
      y = o[yc(h, g, o)];
    (r
      ? (n.moveTo(p.x, p.y), (r = !1))
      : (n.lineTo(p.x, i), n.lineTo(p.x, p.y)),
      (u = !!t.pathSegment(n, d, { move: u })),
      u ? n.closePath() : n.lineTo(y.x, i));
  }
  (n.lineTo(t.first().x, i), n.closePath(), n.clip());
}
function x0(n, t, i) {
  const { segments: a, points: o } = t;
  let r = !0,
    u = !1;
  n.beginPath();
  for (const d of a) {
    const { start: h, end: g } = d,
      p = o[h],
      y = o[yc(h, g, o)];
    (r
      ? (n.moveTo(p.x, p.y), (r = !1))
      : (n.lineTo(i, p.y), n.lineTo(p.x, p.y)),
      (u = !!t.pathSegment(n, d, { move: u })),
      u ? n.closePath() : n.lineTo(i, y.y));
  }
  (n.lineTo(i, t.first().y), n.closePath(), n.clip());
}
function Id(n, t) {
  const { line: i, target: a, property: o, color: r, scale: u, clip: d } = t,
    h = pA(i, a, o);
  for (const { source: g, target: p, start: y, end: v } of h) {
    const { style: { backgroundColor: _ = r } = {} } = g,
      S = a !== !0;
    (n.save(), (n.fillStyle = _), DA(n, u, d, S && mf(o, y, v)), n.beginPath());
    const M = !!i.pathSegment(n, g);
    let k;
    if (S) {
      M ? n.closePath() : y0(n, a, v, o);
      const j = !!a.pathSegment(n, p, { move: M, reverse: !0 });
      ((k = M && j), k || y0(n, a, y, o));
    }
    (n.closePath(), n.fill(k ? "evenodd" : "nonzero"), n.restore());
  }
}
function DA(n, t, i, a) {
  const o = t.chart.chartArea,
    { property: r, start: u, end: d } = a || {};
  if (r === "x" || r === "y") {
    let h, g, p, y;
    (r === "x"
      ? ((h = u), (g = o.top), (p = d), (y = o.bottom))
      : ((h = o.left), (g = u), (p = o.right), (y = d)),
      n.beginPath(),
      i &&
        ((h = Math.max(h, i.left)),
        (p = Math.min(p, i.right)),
        (g = Math.max(g, i.top)),
        (y = Math.min(y, i.bottom))),
      n.rect(h, g, p - h, y - g),
      n.clip());
  }
}
function y0(n, t, i, a) {
  const o = t.interpolate(i, a);
  o && n.lineTo(o.x, o.y);
}
var LA = {
  id: "filler",
  afterDatasetsUpdate(n, t, i) {
    const a = (n.data.datasets || []).length,
      o = [];
    let r, u, d, h;
    for (u = 0; u < a; ++u)
      ((r = n.getDatasetMeta(u)),
        (d = r.dataset),
        (h = null),
        d &&
          d.options &&
          d instanceof Pi &&
          (h = {
            visible: n.isDatasetVisible(u),
            index: u,
            fill: yA(d, u, a),
            chart: n,
            axis: r.controller.options.indexAxis,
            scale: r.vScale,
            line: d,
          }),
        (r.$filler = h),
        o.push(h));
    for (u = 0; u < a; ++u)
      ((h = o[u]), !(!h || h.fill === !1) && (h.fill = xA(o, u, i.propagate)));
  },
  beforeDraw(n, t, i) {
    const a = i.drawTime === "beforeDraw",
      o = n.getSortedVisibleDatasetMetas(),
      r = n.chartArea;
    for (let u = o.length - 1; u >= 0; --u) {
      const d = o[u].$filler;
      d &&
        (d.line.updateControlPoints(r, d.axis), a && d.fill && $d(n.ctx, d, r));
    }
  },
  beforeDatasetsDraw(n, t, i) {
    if (i.drawTime !== "beforeDatasetsDraw") return;
    const a = n.getSortedVisibleDatasetMetas();
    for (let o = a.length - 1; o >= 0; --o) {
      const r = a[o].$filler;
      p0(r) && $d(n.ctx, r, n.chartArea);
    }
  },
  beforeDatasetDraw(n, t, i) {
    const a = t.meta.$filler;
    !p0(a) || i.drawTime !== "beforeDatasetDraw" || $d(n.ctx, a, n.chartArea);
  },
  defaults: { propagate: !0, drawTime: "beforeDatasetDraw" },
};
const v0 = (n, t) => {
    let { boxHeight: i = t, boxWidth: a = t } = n;
    return (
      n.usePointStyle &&
        ((i = Math.min(i, t)), (a = n.pointStyleWidth || Math.min(a, t))),
      { boxWidth: a, boxHeight: i, itemHeight: Math.max(t, i) }
    );
  },
  BA = (n, t) =>
    n !== null &&
    t !== null &&
    n.datasetIndex === t.datasetIndex &&
    n.index === t.index;
class w0 extends fi {
  constructor(t) {
    (super(),
      (this._added = !1),
      (this.legendHitBoxes = []),
      (this._hoveredItem = null),
      (this.doughnutMode = !1),
      (this.chart = t.chart),
      (this.options = t.options),
      (this.ctx = t.ctx),
      (this.legendItems = void 0),
      (this.columnSizes = void 0),
      (this.lineWidths = void 0),
      (this.maxHeight = void 0),
      (this.maxWidth = void 0),
      (this.top = void 0),
      (this.bottom = void 0),
      (this.left = void 0),
      (this.right = void 0),
      (this.height = void 0),
      (this.width = void 0),
      (this._margins = void 0),
      (this.position = void 0),
      (this.weight = void 0),
      (this.fullSize = void 0));
  }
  update(t, i, a) {
    ((this.maxWidth = t),
      (this.maxHeight = i),
      (this._margins = a),
      this.setDimensions(),
      this.buildLabels(),
      this.fit());
  }
  setDimensions() {
    this.isHorizontal()
      ? ((this.width = this.maxWidth),
        (this.left = this._margins.left),
        (this.right = this.width))
      : ((this.height = this.maxHeight),
        (this.top = this._margins.top),
        (this.bottom = this.height));
  }
  buildLabels() {
    const t = this.options.labels || {};
    let i = Pt(t.generateLabels, [this.chart], this) || [];
    (t.filter && (i = i.filter((a) => t.filter(a, this.chart.data))),
      t.sort && (i = i.sort((a, o) => t.sort(a, o, this.chart.data))),
      this.options.reverse && i.reverse(),
      (this.legendItems = i));
  }
  fit() {
    const { options: t, ctx: i } = this;
    if (!t.display) {
      this.width = this.height = 0;
      return;
    }
    const a = t.labels,
      o = be(a.font),
      r = o.size,
      u = this._computeTitleHeight(),
      { boxWidth: d, itemHeight: h } = v0(a, r);
    let g, p;
    ((i.font = o.string),
      this.isHorizontal()
        ? ((g = this.maxWidth), (p = this._fitRows(u, r, d, h) + 10))
        : ((p = this.maxHeight), (g = this._fitCols(u, o, d, h) + 10)),
      (this.width = Math.min(g, t.maxWidth || this.maxWidth)),
      (this.height = Math.min(p, t.maxHeight || this.maxHeight)));
  }
  _fitRows(t, i, a, o) {
    const {
        ctx: r,
        maxWidth: u,
        options: {
          labels: { padding: d },
        },
      } = this,
      h = (this.legendHitBoxes = []),
      g = (this.lineWidths = [0]),
      p = o + d;
    let y = t;
    ((r.textAlign = "left"), (r.textBaseline = "middle"));
    let v = -1,
      _ = -p;
    return (
      this.legendItems.forEach((S, M) => {
        const k = a + i / 2 + r.measureText(S.text).width;
        ((M === 0 || g[g.length - 1] + k + 2 * d > u) &&
          ((y += p), (g[g.length - (M > 0 ? 0 : 1)] = 0), (_ += p), v++),
          (h[M] = { left: 0, top: _, row: v, width: k, height: o }),
          (g[g.length - 1] += k + d));
      }),
      y
    );
  }
  _fitCols(t, i, a, o) {
    const {
        ctx: r,
        maxHeight: u,
        options: {
          labels: { padding: d },
        },
      } = this,
      h = (this.legendHitBoxes = []),
      g = (this.columnSizes = []),
      p = u - t;
    let y = d,
      v = 0,
      _ = 0,
      S = 0,
      M = 0;
    return (
      this.legendItems.forEach((k, j) => {
        const { itemWidth: z, itemHeight: U } = RA(a, i, r, k, o);
        (j > 0 &&
          _ + U + 2 * d > p &&
          ((y += v + d),
          g.push({ width: v, height: _ }),
          (S += v + d),
          M++,
          (v = _ = 0)),
          (h[j] = { left: S, top: _, col: M, width: z, height: U }),
          (v = Math.max(v, z)),
          (_ += U + d));
      }),
      (y += v),
      g.push({ width: v, height: _ }),
      y
    );
  }
  adjustHitBoxes() {
    if (!this.options.display) return;
    const t = this._computeTitleHeight(),
      {
        legendHitBoxes: i,
        options: {
          align: a,
          labels: { padding: o },
          rtl: r,
        },
      } = this,
      u = va(r, this.left, this.width);
    if (this.isHorizontal()) {
      let d = 0,
        h = Ce(a, this.left + o, this.right - this.lineWidths[d]);
      for (const g of i)
        (d !== g.row &&
          ((d = g.row),
          (h = Ce(a, this.left + o, this.right - this.lineWidths[d]))),
          (g.top += this.top + t + o),
          (g.left = u.leftForLtr(u.x(h), g.width)),
          (h += g.width + o));
    } else {
      let d = 0,
        h = Ce(a, this.top + t + o, this.bottom - this.columnSizes[d].height);
      for (const g of i)
        (g.col !== d &&
          ((d = g.col),
          (h = Ce(
            a,
            this.top + t + o,
            this.bottom - this.columnSizes[d].height,
          ))),
          (g.top = h),
          (g.left += this.left + o),
          (g.left = u.leftForLtr(u.x(g.left), g.width)),
          (h += g.height + o));
    }
  }
  isHorizontal() {
    return (
      this.options.position === "top" || this.options.position === "bottom"
    );
  }
  draw() {
    if (this.options.display) {
      const t = this.ctx;
      (gc(t, this), this._draw(), pc(t));
    }
  }
  _draw() {
    const { options: t, columnSizes: i, lineWidths: a, ctx: o } = this,
      { align: r, labels: u } = t,
      d = It.color,
      h = va(t.rtl, this.left, this.width),
      g = be(u.font),
      { padding: p } = u,
      y = g.size,
      v = y / 2;
    let _;
    (this.drawTitle(),
      (o.textAlign = h.textAlign("left")),
      (o.textBaseline = "middle"),
      (o.lineWidth = 0.5),
      (o.font = g.string));
    const { boxWidth: S, boxHeight: M, itemHeight: k } = v0(u, y),
      j = function (P, X, G) {
        if (isNaN(S) || S <= 0 || isNaN(M) || M < 0) return;
        o.save();
        const W = dt(G.lineWidth, 1);
        if (
          ((o.fillStyle = dt(G.fillStyle, d)),
          (o.lineCap = dt(G.lineCap, "butt")),
          (o.lineDashOffset = dt(G.lineDashOffset, 0)),
          (o.lineJoin = dt(G.lineJoin, "miter")),
          (o.lineWidth = W),
          (o.strokeStyle = dt(G.strokeStyle, d)),
          o.setLineDash(dt(G.lineDash, [])),
          u.usePointStyle)
        ) {
          const lt = {
              radius: (M * Math.SQRT2) / 2,
              pointStyle: G.pointStyle,
              rotation: G.rotation,
              borderWidth: W,
            },
            it = h.xPlus(P, S / 2),
            $ = X + v;
          Zx(o, lt, it, $, u.pointStyleWidth && S);
        } else {
          const lt = X + Math.max((y - M) / 2, 0),
            it = h.leftForLtr(P, S),
            $ = Ms(G.borderRadius);
          (o.beginPath(),
            Object.values($).some((Vt) => Vt !== 0)
              ? Fl(o, { x: it, y: lt, w: S, h: M, radius: $ })
              : o.rect(it, lt, S, M),
            o.fill(),
            W !== 0 && o.stroke());
        }
        o.restore();
      },
      z = function (P, X, G) {
        Cs(o, G.text, P, X + k / 2, g, {
          strikethrough: G.hidden,
          textAlign: h.textAlign(G.textAlign),
        });
      },
      U = this.isHorizontal(),
      q = this._computeTitleHeight();
    (U
      ? (_ = {
          x: Ce(r, this.left + p, this.right - a[0]),
          y: this.top + p + q,
          line: 0,
        })
      : (_ = {
          x: this.left + p,
          y: Ce(r, this.top + q + p, this.bottom - i[0].height),
          line: 0,
        }),
      ey(this.ctx, t.textDirection));
    const R = k + p;
    (this.legendItems.forEach((P, X) => {
      ((o.strokeStyle = P.fontColor), (o.fillStyle = P.fontColor));
      const G = o.measureText(P.text).width,
        W = h.textAlign(P.textAlign || (P.textAlign = u.textAlign)),
        lt = S + v + G;
      let it = _.x,
        $ = _.y;
      (h.setWidth(this.width),
        U
          ? X > 0 &&
            it + lt + p > this.right &&
            (($ = _.y += R),
            _.line++,
            (it = _.x = Ce(r, this.left + p, this.right - a[_.line])))
          : X > 0 &&
            $ + R > this.bottom &&
            ((it = _.x = it + i[_.line].width + p),
            _.line++,
            ($ = _.y =
              Ce(r, this.top + q + p, this.bottom - i[_.line].height))));
      const Vt = h.x(it);
      if (
        (j(Vt, $, P),
        (it = n5(W, it + S + v, U ? it + lt : this.right, t.rtl)),
        z(h.x(it), $, P),
        U)
      )
        _.x += lt + p;
      else if (typeof P.text != "string") {
        const Yt = g.lineHeight;
        _.y += Ey(P, Yt) + p;
      } else _.y += R;
    }),
      ny(this.ctx, t.textDirection));
  }
  drawTitle() {
    const t = this.options,
      i = t.title,
      a = be(i.font),
      o = Oe(i.padding);
    if (!i.display) return;
    const r = va(t.rtl, this.left, this.width),
      u = this.ctx,
      d = i.position,
      h = a.size / 2,
      g = o.top + h;
    let p,
      y = this.left,
      v = this.width;
    if (this.isHorizontal())
      ((v = Math.max(...this.lineWidths)),
        (p = this.top + g),
        (y = Ce(t.align, y, this.right - v)));
    else {
      const S = this.columnSizes.reduce((M, k) => Math.max(M, k.height), 0);
      p =
        g +
        Ce(
          t.align,
          this.top,
          this.bottom - S - t.labels.padding - this._computeTitleHeight(),
        );
    }
    const _ = Ce(d, y, y + v);
    ((u.textAlign = r.textAlign(Xf(d))),
      (u.textBaseline = "middle"),
      (u.strokeStyle = i.color),
      (u.fillStyle = i.color),
      (u.font = a.string),
      Cs(u, i.text, _, p, a));
  }
  _computeTitleHeight() {
    const t = this.options.title,
      i = be(t.font),
      a = Oe(t.padding);
    return t.display ? i.lineHeight + a.height : 0;
  }
  _getLegendItemAt(t, i) {
    let a, o, r;
    if (ri(t, this.left, this.right) && ri(i, this.top, this.bottom)) {
      for (r = this.legendHitBoxes, a = 0; a < r.length; ++a)
        if (
          ((o = r[a]),
          ri(t, o.left, o.left + o.width) && ri(i, o.top, o.top + o.height))
        )
          return this.legendItems[a];
    }
    return null;
  }
  handleEvent(t) {
    const i = this.options;
    if (!VA(t.type, i)) return;
    const a = this._getLegendItemAt(t.x, t.y);
    if (t.type === "mousemove" || t.type === "mouseout") {
      const o = this._hoveredItem,
        r = BA(o, a);
      (o && !r && Pt(i.onLeave, [t, o, this], this),
        (this._hoveredItem = a),
        a && !r && Pt(i.onHover, [t, a, this], this));
    } else a && Pt(i.onClick, [t, a, this], this);
  }
}
function RA(n, t, i, a, o) {
  const r = HA(a, n, t, i),
    u = UA(o, a, t.lineHeight);
  return { itemWidth: r, itemHeight: u };
}
function HA(n, t, i, a) {
  let o = n.text;
  return (
    o &&
      typeof o != "string" &&
      (o = o.reduce((r, u) => (r.length > u.length ? r : u))),
    t + i.size / 2 + a.measureText(o).width
  );
}
function UA(n, t, i) {
  let a = n;
  return (typeof t.text != "string" && (a = Ey(t, i)), a);
}
function Ey(n, t) {
  const i = n.text ? n.text.length : 0;
  return t * i;
}
function VA(n, t) {
  return !!(
    ((n === "mousemove" || n === "mouseout") && (t.onHover || t.onLeave)) ||
    (t.onClick && (n === "click" || n === "mouseup"))
  );
}
var qA = {
  id: "legend",
  _element: w0,
  start(n, t, i) {
    const a = (n.legend = new w0({ ctx: n.ctx, options: i, chart: n }));
    (Te.configure(n, a, i), Te.addBox(n, a));
  },
  stop(n) {
    (Te.removeBox(n, n.legend), delete n.legend);
  },
  beforeUpdate(n, t, i) {
    const a = n.legend;
    (Te.configure(n, a, i), (a.options = i));
  },
  afterUpdate(n) {
    const t = n.legend;
    (t.buildLabels(), t.adjustHitBoxes());
  },
  afterEvent(n, t) {
    t.replay || n.legend.handleEvent(t.event);
  },
  defaults: {
    display: !0,
    position: "top",
    align: "center",
    fullSize: !0,
    reverse: !1,
    weight: 1e3,
    onClick(n, t, i) {
      const a = t.datasetIndex,
        o = i.chart;
      o.isDatasetVisible(a)
        ? (o.hide(a), (t.hidden = !0))
        : (o.show(a), (t.hidden = !1));
    },
    onHover: null,
    onLeave: null,
    labels: {
      color: (n) => n.chart.options.color,
      boxWidth: 40,
      padding: 10,
      generateLabels(n) {
        const t = n.data.datasets,
          {
            labels: {
              usePointStyle: i,
              pointStyle: a,
              textAlign: o,
              color: r,
              useBorderRadius: u,
              borderRadius: d,
            },
          } = n.legend.options;
        return n._getSortedDatasetMetas().map((h) => {
          const g = h.controller.getStyle(i ? 0 : void 0),
            p = Oe(g.borderWidth);
          return {
            text: t[h.index].label,
            fillStyle: g.backgroundColor,
            fontColor: r,
            hidden: !h.visible,
            lineCap: g.borderCapStyle,
            lineDash: g.borderDash,
            lineDashOffset: g.borderDashOffset,
            lineJoin: g.borderJoinStyle,
            lineWidth: (p.width + p.height) / 4,
            strokeStyle: g.borderColor,
            pointStyle: a || g.pointStyle,
            rotation: g.rotation,
            textAlign: o || g.textAlign,
            borderRadius: u && (d || g.borderRadius),
            datasetIndex: h.index,
          };
        }, this);
      },
    },
    title: {
      color: (n) => n.chart.options.color,
      display: !1,
      position: "center",
      text: "",
    },
  },
  descriptors: {
    _scriptable: (n) => !n.startsWith("on"),
    labels: {
      _scriptable: (n) => !["generateLabels", "filter", "sort"].includes(n),
    },
  },
};
class If extends fi {
  constructor(t) {
    (super(),
      (this.chart = t.chart),
      (this.options = t.options),
      (this.ctx = t.ctx),
      (this._padding = void 0),
      (this.top = void 0),
      (this.bottom = void 0),
      (this.left = void 0),
      (this.right = void 0),
      (this.width = void 0),
      (this.height = void 0),
      (this.position = void 0),
      (this.weight = void 0),
      (this.fullSize = void 0));
  }
  update(t, i) {
    const a = this.options;
    if (((this.left = 0), (this.top = 0), !a.display)) {
      this.width = this.height = this.right = this.bottom = 0;
      return;
    }
    ((this.width = this.right = t), (this.height = this.bottom = i));
    const o = $t(a.text) ? a.text.length : 1;
    this._padding = Oe(a.padding);
    const r = o * be(a.font).lineHeight + this._padding.height;
    this.isHorizontal() ? (this.height = r) : (this.width = r);
  }
  isHorizontal() {
    const t = this.options.position;
    return t === "top" || t === "bottom";
  }
  _drawArgs(t) {
    const { top: i, left: a, bottom: o, right: r, options: u } = this,
      d = u.align;
    let h = 0,
      g,
      p,
      y;
    return (
      this.isHorizontal()
        ? ((p = Ce(d, a, r)), (y = i + t), (g = r - a))
        : (u.position === "left"
            ? ((p = a + t), (y = Ce(d, o, i)), (h = jt * -0.5))
            : ((p = r - t), (y = Ce(d, i, o)), (h = jt * 0.5)),
          (g = o - i)),
      { titleX: p, titleY: y, maxWidth: g, rotation: h }
    );
  }
  draw() {
    const t = this.ctx,
      i = this.options;
    if (!i.display) return;
    const a = be(i.font),
      r = a.lineHeight / 2 + this._padding.top,
      { titleX: u, titleY: d, maxWidth: h, rotation: g } = this._drawArgs(r);
    Cs(t, i.text, 0, 0, a, {
      color: i.color,
      maxWidth: h,
      rotation: g,
      textAlign: Xf(i.align),
      textBaseline: "middle",
      translation: [u, d],
    });
  }
}
function YA(n, t) {
  const i = new If({ ctx: n.ctx, options: t, chart: n });
  (Te.configure(n, i, t), Te.addBox(n, i), (n.titleBlock = i));
}
var XA = {
  id: "title",
  _element: If,
  start(n, t, i) {
    YA(n, i);
  },
  stop(n) {
    const t = n.titleBlock;
    (Te.removeBox(n, t), delete n.titleBlock);
  },
  beforeUpdate(n, t, i) {
    const a = n.titleBlock;
    (Te.configure(n, a, i), (a.options = i));
  },
  defaults: {
    align: "center",
    display: !1,
    font: { weight: "bold" },
    fullSize: !0,
    padding: 10,
    position: "top",
    text: "",
    weight: 2e3,
  },
  defaultRoutes: { color: "color" },
  descriptors: { _scriptable: !0, _indexable: !1 },
};
const zr = new WeakMap();
var PA = {
  id: "subtitle",
  start(n, t, i) {
    const a = new If({ ctx: n.ctx, options: i, chart: n });
    (Te.configure(n, a, i), Te.addBox(n, a), zr.set(n, a));
  },
  stop(n) {
    (Te.removeBox(n, zr.get(n)), zr.delete(n));
  },
  beforeUpdate(n, t, i) {
    const a = zr.get(n);
    (Te.configure(n, a, i), (a.options = i));
  },
  defaults: {
    align: "center",
    display: !1,
    font: { weight: "normal" },
    fullSize: !0,
    padding: 0,
    position: "top",
    text: "",
    weight: 1500,
  },
  defaultRoutes: { color: "color" },
  descriptors: { _scriptable: !0, _indexable: !1 },
};
const Dl = {
  average(n) {
    if (!n.length) return !1;
    let t,
      i,
      a = new Set(),
      o = 0,
      r = 0;
    for (t = 0, i = n.length; t < i; ++t) {
      const d = n[t].element;
      if (d && d.hasValue()) {
        const h = d.tooltipPosition();
        (a.add(h.x), (o += h.y), ++r);
      }
    }
    return r === 0 || a.size === 0
      ? !1
      : { x: [...a].reduce((d, h) => d + h) / a.size, y: o / r };
  },
  nearest(n, t) {
    if (!n.length) return !1;
    let i = t.x,
      a = t.y,
      o = Number.POSITIVE_INFINITY,
      r,
      u,
      d;
    for (r = 0, u = n.length; r < u; ++r) {
      const h = n[r].element;
      if (h && h.hasValue()) {
        const g = h.getCenterPoint(),
          p = lf(t, g);
        p < o && ((o = p), (d = h));
      }
    }
    if (d) {
      const h = d.tooltipPosition();
      ((i = h.x), (a = h.y));
    }
    return { x: i, y: a };
  },
};
function On(n, t) {
  return (t && ($t(t) ? Array.prototype.push.apply(n, t) : n.push(t)), n);
}
function li(n) {
  return (typeof n == "string" || n instanceof String) &&
    n.indexOf(`
`) > -1
    ? n.split(`
`)
    : n;
}
function FA(n, t) {
  const { element: i, datasetIndex: a, index: o } = t,
    r = n.getDatasetMeta(a).controller,
    { label: u, value: d } = r.getLabelAndValue(o);
  return {
    chart: n,
    label: u,
    parsed: r.getParsed(o),
    raw: n.data.datasets[a].data[o],
    formattedValue: d,
    dataset: r.getDataset(),
    dataIndex: o,
    datasetIndex: a,
    element: i,
  };
}
function _0(n, t) {
  const i = n.chart.ctx,
    { body: a, footer: o, title: r } = n,
    { boxWidth: u, boxHeight: d } = t,
    h = be(t.bodyFont),
    g = be(t.titleFont),
    p = be(t.footerFont),
    y = r.length,
    v = o.length,
    _ = a.length,
    S = Oe(t.padding);
  let M = S.height,
    k = 0,
    j = a.reduce(
      (q, R) => q + R.before.length + R.lines.length + R.after.length,
      0,
    );
  if (
    ((j += n.beforeBody.length + n.afterBody.length),
    y &&
      (M += y * g.lineHeight + (y - 1) * t.titleSpacing + t.titleMarginBottom),
    j)
  ) {
    const q = t.displayColors ? Math.max(d, h.lineHeight) : h.lineHeight;
    M += _ * q + (j - _) * h.lineHeight + (j - 1) * t.bodySpacing;
  }
  v && (M += t.footerMarginTop + v * p.lineHeight + (v - 1) * t.footerSpacing);
  let z = 0;
  const U = function (q) {
    k = Math.max(k, i.measureText(q).width + z);
  };
  return (
    i.save(),
    (i.font = g.string),
    Lt(n.title, U),
    (i.font = h.string),
    Lt(n.beforeBody.concat(n.afterBody), U),
    (z = t.displayColors ? u + 2 + t.boxPadding : 0),
    Lt(a, (q) => {
      (Lt(q.before, U), Lt(q.lines, U), Lt(q.after, U));
    }),
    (z = 0),
    (i.font = p.string),
    Lt(n.footer, U),
    i.restore(),
    (k += S.width),
    { width: k, height: M }
  );
}
function GA(n, t) {
  const { y: i, height: a } = t;
  return i < a / 2 ? "top" : i > n.height - a / 2 ? "bottom" : "center";
}
function ZA(n, t, i, a) {
  const { x: o, width: r } = a,
    u = i.caretSize + i.caretPadding;
  if ((n === "left" && o + r + u > t.width) || (n === "right" && o - r - u < 0))
    return !0;
}
function QA(n, t, i, a) {
  const { x: o, width: r } = i,
    {
      width: u,
      chartArea: { left: d, right: h },
    } = n;
  let g = "center";
  return (
    a === "center"
      ? (g = o <= (d + h) / 2 ? "left" : "right")
      : o <= r / 2
        ? (g = "left")
        : o >= u - r / 2 && (g = "right"),
    ZA(g, n, t, i) && (g = "center"),
    g
  );
}
function S0(n, t, i) {
  const a = i.yAlign || t.yAlign || GA(n, i);
  return { xAlign: i.xAlign || t.xAlign || QA(n, t, i, a), yAlign: a };
}
function KA(n, t) {
  let { x: i, width: a } = n;
  return (t === "right" ? (i -= a) : t === "center" && (i -= a / 2), i);
}
function WA(n, t, i) {
  let { y: a, height: o } = n;
  return (
    t === "top" ? (a += i) : t === "bottom" ? (a -= o + i) : (a -= o / 2),
    a
  );
}
function M0(n, t, i, a) {
  const { caretSize: o, caretPadding: r, cornerRadius: u } = n,
    { xAlign: d, yAlign: h } = i,
    g = o + r,
    { topLeft: p, topRight: y, bottomLeft: v, bottomRight: _ } = Ms(u);
  let S = KA(t, d);
  const M = WA(t, h, g);
  return (
    h === "center"
      ? d === "left"
        ? (S += g)
        : d === "right" && (S -= g)
      : d === "left"
        ? (S -= Math.max(p, v) + o)
        : d === "right" && (S += Math.max(y, _) + o),
    { x: ve(S, 0, a.width - t.width), y: ve(M, 0, a.height - t.height) }
  );
}
function Dr(n, t, i) {
  const a = Oe(i.padding);
  return t === "center"
    ? n.x + n.width / 2
    : t === "right"
      ? n.x + n.width - a.right
      : n.x + a.left;
}
function A0(n) {
  return On([], li(n));
}
function $A(n, t, i) {
  return Ki(n, { tooltip: t, tooltipItems: i, type: "tooltip" });
}
function k0(n, t) {
  const i = t && t.dataset && t.dataset.tooltip && t.dataset.tooltip.callbacks;
  return i ? n.override(i) : n;
}
const Cy = {
  beforeTitle: si,
  title(n) {
    if (n.length > 0) {
      const t = n[0],
        i = t.chart.data.labels,
        a = i ? i.length : 0;
      if (this && this.options && this.options.mode === "dataset")
        return t.dataset.label || "";
      if (t.label) return t.label;
      if (a > 0 && t.dataIndex < a) return i[t.dataIndex];
    }
    return "";
  },
  afterTitle: si,
  beforeBody: si,
  beforeLabel: si,
  label(n) {
    if (this && this.options && this.options.mode === "dataset")
      return n.label + ": " + n.formattedValue || n.formattedValue;
    let t = n.dataset.label || "";
    t && (t += ": ");
    const i = n.formattedValue;
    return (yt(i) || (t += i), t);
  },
  labelColor(n) {
    const i = n.chart
      .getDatasetMeta(n.datasetIndex)
      .controller.getStyle(n.dataIndex);
    return {
      borderColor: i.borderColor,
      backgroundColor: i.backgroundColor,
      borderWidth: i.borderWidth,
      borderDash: i.borderDash,
      borderDashOffset: i.borderDashOffset,
      borderRadius: 0,
    };
  },
  labelTextColor() {
    return this.options.bodyColor;
  },
  labelPointStyle(n) {
    const i = n.chart
      .getDatasetMeta(n.datasetIndex)
      .controller.getStyle(n.dataIndex);
    return { pointStyle: i.pointStyle, rotation: i.rotation };
  },
  afterLabel: si,
  afterBody: si,
  beforeFooter: si,
  footer: si,
  afterFooter: si,
};
function Ze(n, t, i, a) {
  const o = n[t].call(i, a);
  return typeof o > "u" ? Cy[t].call(i, a) : o;
}
class gf extends fi {
  constructor(t) {
    (super(),
      (this.opacity = 0),
      (this._active = []),
      (this._eventPosition = void 0),
      (this._size = void 0),
      (this._cachedAnimations = void 0),
      (this._tooltipItems = []),
      (this.$animations = void 0),
      (this.$context = void 0),
      (this.chart = t.chart),
      (this.options = t.options),
      (this.dataPoints = void 0),
      (this.title = void 0),
      (this.beforeBody = void 0),
      (this.body = void 0),
      (this.afterBody = void 0),
      (this.footer = void 0),
      (this.xAlign = void 0),
      (this.yAlign = void 0),
      (this.x = void 0),
      (this.y = void 0),
      (this.height = void 0),
      (this.width = void 0),
      (this.caretX = void 0),
      (this.caretY = void 0),
      (this.labelColors = void 0),
      (this.labelPointStyles = void 0),
      (this.labelTextColors = void 0));
  }
  initialize(t) {
    ((this.options = t),
      (this._cachedAnimations = void 0),
      (this.$context = void 0));
  }
  _resolveAnimations() {
    const t = this._cachedAnimations;
    if (t) return t;
    const i = this.chart,
      a = this.options.setContext(this.getContext()),
      o = a.enabled && i.options.animation && a.animations,
      r = new oy(this.chart, o);
    return (o._cacheable && (this._cachedAnimations = Object.freeze(r)), r);
  }
  getContext() {
    return (
      this.$context ||
      (this.$context = $A(this.chart.getContext(), this, this._tooltipItems))
    );
  }
  getTitle(t, i) {
    const { callbacks: a } = i,
      o = Ze(a, "beforeTitle", this, t),
      r = Ze(a, "title", this, t),
      u = Ze(a, "afterTitle", this, t);
    let d = [];
    return ((d = On(d, li(o))), (d = On(d, li(r))), (d = On(d, li(u))), d);
  }
  getBeforeBody(t, i) {
    return A0(Ze(i.callbacks, "beforeBody", this, t));
  }
  getBody(t, i) {
    const { callbacks: a } = i,
      o = [];
    return (
      Lt(t, (r) => {
        const u = { before: [], lines: [], after: [] },
          d = k0(a, r);
        (On(u.before, li(Ze(d, "beforeLabel", this, r))),
          On(u.lines, Ze(d, "label", this, r)),
          On(u.after, li(Ze(d, "afterLabel", this, r))),
          o.push(u));
      }),
      o
    );
  }
  getAfterBody(t, i) {
    return A0(Ze(i.callbacks, "afterBody", this, t));
  }
  getFooter(t, i) {
    const { callbacks: a } = i,
      o = Ze(a, "beforeFooter", this, t),
      r = Ze(a, "footer", this, t),
      u = Ze(a, "afterFooter", this, t);
    let d = [];
    return ((d = On(d, li(o))), (d = On(d, li(r))), (d = On(d, li(u))), d);
  }
  _createItems(t) {
    const i = this._active,
      a = this.chart.data,
      o = [],
      r = [],
      u = [];
    let d = [],
      h,
      g;
    for (h = 0, g = i.length; h < g; ++h) d.push(FA(this.chart, i[h]));
    return (
      t.filter && (d = d.filter((p, y, v) => t.filter(p, y, v, a))),
      t.itemSort && (d = d.sort((p, y) => t.itemSort(p, y, a))),
      Lt(d, (p) => {
        const y = k0(t.callbacks, p);
        (o.push(Ze(y, "labelColor", this, p)),
          r.push(Ze(y, "labelPointStyle", this, p)),
          u.push(Ze(y, "labelTextColor", this, p)));
      }),
      (this.labelColors = o),
      (this.labelPointStyles = r),
      (this.labelTextColors = u),
      (this.dataPoints = d),
      d
    );
  }
  update(t, i) {
    const a = this.options.setContext(this.getContext()),
      o = this._active;
    let r,
      u = [];
    if (!o.length) this.opacity !== 0 && (r = { opacity: 0 });
    else {
      const d = Dl[a.position].call(this, o, this._eventPosition);
      ((u = this._createItems(a)),
        (this.title = this.getTitle(u, a)),
        (this.beforeBody = this.getBeforeBody(u, a)),
        (this.body = this.getBody(u, a)),
        (this.afterBody = this.getAfterBody(u, a)),
        (this.footer = this.getFooter(u, a)));
      const h = (this._size = _0(this, a)),
        g = Object.assign({}, d, h),
        p = S0(this.chart, a, g),
        y = M0(a, g, p, this.chart);
      ((this.xAlign = p.xAlign),
        (this.yAlign = p.yAlign),
        (r = {
          opacity: 1,
          x: y.x,
          y: y.y,
          width: h.width,
          height: h.height,
          caretX: d.x,
          caretY: d.y,
        }));
    }
    ((this._tooltipItems = u),
      (this.$context = void 0),
      r && this._resolveAnimations().update(this, r),
      t &&
        a.external &&
        a.external.call(this, { chart: this.chart, tooltip: this, replay: i }));
  }
  drawCaret(t, i, a, o) {
    const r = this.getCaretPosition(t, a, o);
    (i.lineTo(r.x1, r.y1), i.lineTo(r.x2, r.y2), i.lineTo(r.x3, r.y3));
  }
  getCaretPosition(t, i, a) {
    const { xAlign: o, yAlign: r } = this,
      { caretSize: u, cornerRadius: d } = a,
      { topLeft: h, topRight: g, bottomLeft: p, bottomRight: y } = Ms(d),
      { x: v, y: _ } = t,
      { width: S, height: M } = i;
    let k, j, z, U, q, R;
    return (
      r === "center"
        ? ((q = _ + M / 2),
          o === "left"
            ? ((k = v), (j = k - u), (U = q + u), (R = q - u))
            : ((k = v + S), (j = k + u), (U = q - u), (R = q + u)),
          (z = k))
        : (o === "left"
            ? (j = v + Math.max(h, p) + u)
            : o === "right"
              ? (j = v + S - Math.max(g, y) - u)
              : (j = this.caretX),
          r === "top"
            ? ((U = _), (q = U - u), (k = j - u), (z = j + u))
            : ((U = _ + M), (q = U + u), (k = j + u), (z = j - u)),
          (R = U)),
      { x1: k, x2: j, x3: z, y1: U, y2: q, y3: R }
    );
  }
  drawTitle(t, i, a) {
    const o = this.title,
      r = o.length;
    let u, d, h;
    if (r) {
      const g = va(a.rtl, this.x, this.width);
      for (
        t.x = Dr(this, a.titleAlign, a),
          i.textAlign = g.textAlign(a.titleAlign),
          i.textBaseline = "middle",
          u = be(a.titleFont),
          d = a.titleSpacing,
          i.fillStyle = a.titleColor,
          i.font = u.string,
          h = 0;
        h < r;
        ++h
      )
        (i.fillText(o[h], g.x(t.x), t.y + u.lineHeight / 2),
          (t.y += u.lineHeight + d),
          h + 1 === r && (t.y += a.titleMarginBottom - d));
    }
  }
  _drawColorBox(t, i, a, o, r) {
    const u = this.labelColors[a],
      d = this.labelPointStyles[a],
      { boxHeight: h, boxWidth: g } = r,
      p = be(r.bodyFont),
      y = Dr(this, "left", r),
      v = o.x(y),
      _ = h < p.lineHeight ? (p.lineHeight - h) / 2 : 0,
      S = i.y + _;
    if (r.usePointStyle) {
      const M = {
          radius: Math.min(g, h) / 2,
          pointStyle: d.pointStyle,
          rotation: d.rotation,
          borderWidth: 1,
        },
        k = o.leftForLtr(v, g) + g / 2,
        j = S + h / 2;
      ((t.strokeStyle = r.multiKeyBackground),
        (t.fillStyle = r.multiKeyBackground),
        rf(t, M, k, j),
        (t.strokeStyle = u.borderColor),
        (t.fillStyle = u.backgroundColor),
        rf(t, M, k, j));
    } else {
      ((t.lineWidth = St(u.borderWidth)
        ? Math.max(...Object.values(u.borderWidth))
        : u.borderWidth || 1),
        (t.strokeStyle = u.borderColor),
        t.setLineDash(u.borderDash || []),
        (t.lineDashOffset = u.borderDashOffset || 0));
      const M = o.leftForLtr(v, g),
        k = o.leftForLtr(o.xPlus(v, 1), g - 2),
        j = Ms(u.borderRadius);
      Object.values(j).some((z) => z !== 0)
        ? (t.beginPath(),
          (t.fillStyle = r.multiKeyBackground),
          Fl(t, { x: M, y: S, w: g, h, radius: j }),
          t.fill(),
          t.stroke(),
          (t.fillStyle = u.backgroundColor),
          t.beginPath(),
          Fl(t, { x: k, y: S + 1, w: g - 2, h: h - 2, radius: j }),
          t.fill())
        : ((t.fillStyle = r.multiKeyBackground),
          t.fillRect(M, S, g, h),
          t.strokeRect(M, S, g, h),
          (t.fillStyle = u.backgroundColor),
          t.fillRect(k, S + 1, g - 2, h - 2));
    }
    t.fillStyle = this.labelTextColors[a];
  }
  drawBody(t, i, a) {
    const { body: o } = this,
      {
        bodySpacing: r,
        bodyAlign: u,
        displayColors: d,
        boxHeight: h,
        boxWidth: g,
        boxPadding: p,
      } = a,
      y = be(a.bodyFont);
    let v = y.lineHeight,
      _ = 0;
    const S = va(a.rtl, this.x, this.width),
      M = function (G) {
        (i.fillText(G, S.x(t.x + _), t.y + v / 2), (t.y += v + r));
      },
      k = S.textAlign(u);
    let j, z, U, q, R, P, X;
    for (
      i.textAlign = u,
        i.textBaseline = "middle",
        i.font = y.string,
        t.x = Dr(this, k, a),
        i.fillStyle = a.bodyColor,
        Lt(this.beforeBody, M),
        _ = d && k !== "right" ? (u === "center" ? g / 2 + p : g + 2 + p) : 0,
        q = 0,
        P = o.length;
      q < P;
      ++q
    ) {
      for (
        j = o[q],
          z = this.labelTextColors[q],
          i.fillStyle = z,
          Lt(j.before, M),
          U = j.lines,
          d &&
            U.length &&
            (this._drawColorBox(i, t, q, S, a),
            (v = Math.max(y.lineHeight, h))),
          R = 0,
          X = U.length;
        R < X;
        ++R
      )
        (M(U[R]), (v = y.lineHeight));
      Lt(j.after, M);
    }
    ((_ = 0), (v = y.lineHeight), Lt(this.afterBody, M), (t.y -= r));
  }
  drawFooter(t, i, a) {
    const o = this.footer,
      r = o.length;
    let u, d;
    if (r) {
      const h = va(a.rtl, this.x, this.width);
      for (
        t.x = Dr(this, a.footerAlign, a),
          t.y += a.footerMarginTop,
          i.textAlign = h.textAlign(a.footerAlign),
          i.textBaseline = "middle",
          u = be(a.footerFont),
          i.fillStyle = a.footerColor,
          i.font = u.string,
          d = 0;
        d < r;
        ++d
      )
        (i.fillText(o[d], h.x(t.x), t.y + u.lineHeight / 2),
          (t.y += u.lineHeight + a.footerSpacing));
    }
  }
  drawBackground(t, i, a, o) {
    const { xAlign: r, yAlign: u } = this,
      { x: d, y: h } = t,
      { width: g, height: p } = a,
      {
        topLeft: y,
        topRight: v,
        bottomLeft: _,
        bottomRight: S,
      } = Ms(o.cornerRadius);
    ((i.fillStyle = o.backgroundColor),
      (i.strokeStyle = o.borderColor),
      (i.lineWidth = o.borderWidth),
      i.beginPath(),
      i.moveTo(d + y, h),
      u === "top" && this.drawCaret(t, i, a, o),
      i.lineTo(d + g - v, h),
      i.quadraticCurveTo(d + g, h, d + g, h + v),
      u === "center" && r === "right" && this.drawCaret(t, i, a, o),
      i.lineTo(d + g, h + p - S),
      i.quadraticCurveTo(d + g, h + p, d + g - S, h + p),
      u === "bottom" && this.drawCaret(t, i, a, o),
      i.lineTo(d + _, h + p),
      i.quadraticCurveTo(d, h + p, d, h + p - _),
      u === "center" && r === "left" && this.drawCaret(t, i, a, o),
      i.lineTo(d, h + y),
      i.quadraticCurveTo(d, h, d + y, h),
      i.closePath(),
      i.fill(),
      o.borderWidth > 0 && i.stroke());
  }
  _updateAnimationTarget(t) {
    const i = this.chart,
      a = this.$animations,
      o = a && a.x,
      r = a && a.y;
    if (o || r) {
      const u = Dl[t.position].call(this, this._active, this._eventPosition);
      if (!u) return;
      const d = (this._size = _0(this, t)),
        h = Object.assign({}, u, this._size),
        g = S0(i, t, h),
        p = M0(t, h, g, i);
      (o._to !== p.x || r._to !== p.y) &&
        ((this.xAlign = g.xAlign),
        (this.yAlign = g.yAlign),
        (this.width = d.width),
        (this.height = d.height),
        (this.caretX = u.x),
        (this.caretY = u.y),
        this._resolveAnimations().update(this, p));
    }
  }
  _willRender() {
    return !!this.opacity;
  }
  draw(t) {
    const i = this.options.setContext(this.getContext());
    let a = this.opacity;
    if (!a) return;
    this._updateAnimationTarget(i);
    const o = { width: this.width, height: this.height },
      r = { x: this.x, y: this.y };
    a = Math.abs(a) < 0.001 ? 0 : a;
    const u = Oe(i.padding),
      d =
        this.title.length ||
        this.beforeBody.length ||
        this.body.length ||
        this.afterBody.length ||
        this.footer.length;
    i.enabled &&
      d &&
      (t.save(),
      (t.globalAlpha = a),
      this.drawBackground(r, t, o, i),
      ey(t, i.textDirection),
      (r.y += u.top),
      this.drawTitle(r, t, i),
      this.drawBody(r, t, i),
      this.drawFooter(r, t, i),
      ny(t, i.textDirection),
      t.restore());
  }
  getActiveElements() {
    return this._active || [];
  }
  setActiveElements(t, i) {
    const a = this._active,
      o = t.map(({ datasetIndex: d, index: h }) => {
        const g = this.chart.getDatasetMeta(d);
        if (!g) throw new Error("Cannot find a dataset at index " + d);
        return { datasetIndex: d, element: g.data[h], index: h };
      }),
      r = !ec(a, o),
      u = this._positionChanged(o, i);
    (r || u) &&
      ((this._active = o),
      (this._eventPosition = i),
      (this._ignoreReplayEvents = !0),
      this.update(!0));
  }
  handleEvent(t, i, a = !0) {
    if (i && this._ignoreReplayEvents) return !1;
    this._ignoreReplayEvents = !1;
    const o = this.options,
      r = this._active || [],
      u = this._getActiveElements(t, r, i, a),
      d = this._positionChanged(u, t),
      h = i || !ec(u, r) || d;
    return (
      h &&
        ((this._active = u),
        (o.enabled || o.external) &&
          ((this._eventPosition = { x: t.x, y: t.y }), this.update(!0, i))),
      h
    );
  }
  _getActiveElements(t, i, a, o) {
    const r = this.options;
    if (t.type === "mouseout") return [];
    if (!o)
      return i.filter(
        (d) =>
          this.chart.data.datasets[d.datasetIndex] &&
          this.chart
            .getDatasetMeta(d.datasetIndex)
            .controller.getParsed(d.index) !== void 0,
      );
    const u = this.chart.getElementsAtEventForMode(t, r.mode, r, a);
    return (r.reverse && u.reverse(), u);
  }
  _positionChanged(t, i) {
    const { caretX: a, caretY: o, options: r } = this,
      u = Dl[r.position].call(this, t, i);
    return u !== !1 && (a !== u.x || o !== u.y);
  }
}
K(gf, "positioners", Dl);
var IA = {
    id: "tooltip",
    _element: gf,
    positioners: Dl,
    afterInit(n, t, i) {
      i && (n.tooltip = new gf({ chart: n, options: i }));
    },
    beforeUpdate(n, t, i) {
      n.tooltip && n.tooltip.initialize(i);
    },
    reset(n, t, i) {
      n.tooltip && n.tooltip.initialize(i);
    },
    afterDraw(n) {
      const t = n.tooltip;
      if (t && t._willRender()) {
        const i = { tooltip: t };
        if (
          n.notifyPlugins("beforeTooltipDraw", { ...i, cancelable: !0 }) === !1
        )
          return;
        (t.draw(n.ctx), n.notifyPlugins("afterTooltipDraw", i));
      }
    },
    afterEvent(n, t) {
      if (n.tooltip) {
        const i = t.replay;
        n.tooltip.handleEvent(t.event, i, t.inChartArea) && (t.changed = !0);
      }
    },
    defaults: {
      enabled: !0,
      external: null,
      position: "average",
      backgroundColor: "rgba(0,0,0,0.8)",
      titleColor: "#fff",
      titleFont: { weight: "bold" },
      titleSpacing: 2,
      titleMarginBottom: 6,
      titleAlign: "left",
      bodyColor: "#fff",
      bodySpacing: 2,
      bodyFont: {},
      bodyAlign: "left",
      footerColor: "#fff",
      footerSpacing: 2,
      footerMarginTop: 6,
      footerFont: { weight: "bold" },
      footerAlign: "left",
      padding: 6,
      caretPadding: 2,
      caretSize: 5,
      cornerRadius: 6,
      boxHeight: (n, t) => t.bodyFont.size,
      boxWidth: (n, t) => t.bodyFont.size,
      multiKeyBackground: "#fff",
      displayColors: !0,
      boxPadding: 0,
      borderColor: "rgba(0,0,0,0)",
      borderWidth: 0,
      animation: { duration: 400, easing: "easeOutQuart" },
      animations: {
        numbers: {
          type: "number",
          properties: ["x", "y", "width", "height", "caretX", "caretY"],
        },
        opacity: { easing: "linear", duration: 200 },
      },
      callbacks: Cy,
    },
    defaultRoutes: { bodyFont: "font", footerFont: "font", titleFont: "font" },
    descriptors: {
      _scriptable: (n) =>
        n !== "filter" && n !== "itemSort" && n !== "external",
      _indexable: !1,
      callbacks: { _scriptable: !1, _indexable: !1 },
      animation: { _fallback: !1 },
      animations: { _fallback: "animation" },
    },
    additionalOptionScopes: ["interaction"],
  },
  JA = Object.freeze({
    __proto__: null,
    Colors: dA,
    Decimation: gA,
    Filler: LA,
    Legend: qA,
    SubTitle: PA,
    Title: XA,
    Tooltip: IA,
  });
const tk = (n, t, i, a) => (
  typeof t == "string"
    ? ((i = n.push(t) - 1), a.unshift({ index: i, label: t }))
    : isNaN(t) && (i = null),
  i
);
function ek(n, t, i, a) {
  const o = n.indexOf(t);
  if (o === -1) return tk(n, t, i, a);
  const r = n.lastIndexOf(t);
  return o !== r ? i : o;
}
const nk = (n, t) => (n === null ? null : ve(Math.round(n), 0, t));
function E0(n) {
  const t = this.getLabels();
  return n >= 0 && n < t.length ? t[n] : n;
}
class pf extends Ns {
  constructor(t) {
    (super(t),
      (this._startValue = void 0),
      (this._valueRange = 0),
      (this._addedLabels = []));
  }
  init(t) {
    const i = this._addedLabels;
    if (i.length) {
      const a = this.getLabels();
      for (const { index: o, label: r } of i) a[o] === r && a.splice(o, 1);
      this._addedLabels = [];
    }
    super.init(t);
  }
  parse(t, i) {
    if (yt(t)) return null;
    const a = this.getLabels();
    return (
      (i =
        isFinite(i) && a[i] === t ? i : ek(a, t, dt(i, t), this._addedLabels)),
      nk(i, a.length - 1)
    );
  }
  determineDataLimits() {
    const { minDefined: t, maxDefined: i } = this.getUserBounds();
    let { min: a, max: o } = this.getMinMax(!0);
    (this.options.bounds === "ticks" &&
      (t || (a = 0), i || (o = this.getLabels().length - 1)),
      (this.min = a),
      (this.max = o));
  }
  buildTicks() {
    const t = this.min,
      i = this.max,
      a = this.options.offset,
      o = [];
    let r = this.getLabels();
    ((r = t === 0 && i === r.length - 1 ? r : r.slice(t, i + 1)),
      (this._valueRange = Math.max(r.length - (a ? 0 : 1), 1)),
      (this._startValue = this.min - (a ? 0.5 : 0)));
    for (let u = t; u <= i; u++) o.push({ value: u });
    return o;
  }
  getLabelForValue(t) {
    return E0.call(this, t);
  }
  configure() {
    (super.configure(),
      this.isHorizontal() || (this._reversePixels = !this._reversePixels));
  }
  getPixelForValue(t) {
    return (
      typeof t != "number" && (t = this.parse(t)),
      t === null
        ? NaN
        : this.getPixelForDecimal((t - this._startValue) / this._valueRange)
    );
  }
  getPixelForTick(t) {
    const i = this.ticks;
    return t < 0 || t > i.length - 1 ? null : this.getPixelForValue(i[t].value);
  }
  getValueForPixel(t) {
    return Math.round(
      this._startValue + this.getDecimalForPixel(t) * this._valueRange,
    );
  }
  getBasePixel() {
    return this.bottom;
  }
}
(K(pf, "id", "category"), K(pf, "defaults", { ticks: { callback: E0 } }));
function ik(n, t) {
  const i = [],
    {
      bounds: o,
      step: r,
      min: u,
      max: d,
      precision: h,
      count: g,
      maxTicks: p,
      maxDigits: y,
      includeBounds: v,
    } = n,
    _ = r || 1,
    S = p - 1,
    { min: M, max: k } = t,
    j = !yt(u),
    z = !yt(d),
    U = !yt(g),
    q = (k - M) / (y + 1);
  let R = _b((k - M) / S / _) * _,
    P,
    X,
    G,
    W;
  if (R < 1e-14 && !j && !z) return [{ value: M }, { value: k }];
  ((W = Math.ceil(k / R) - Math.floor(M / R)),
    W > S && (R = _b((W * R) / S / _) * _),
    yt(h) || ((P = Math.pow(10, h)), (R = Math.ceil(R * P) / P)),
    o === "ticks"
      ? ((X = Math.floor(M / R) * R), (G = Math.ceil(k / R) * R))
      : ((X = M), (G = k)),
    j && z && r && KS((d - u) / r, R / 1e3)
      ? ((W = Math.round(Math.min((d - u) / R, p))),
        (R = (d - u) / W),
        (X = u),
        (G = d))
      : U
        ? ((X = j ? u : X), (G = z ? d : G), (W = g - 1), (R = (G - X) / W))
        : ((W = (G - X) / R),
          Rl(W, Math.round(W), R / 1e3)
            ? (W = Math.round(W))
            : (W = Math.ceil(W))));
  const lt = Math.max(Sb(R), Sb(X));
  ((P = Math.pow(10, yt(h) ? lt : h)),
    (X = Math.round(X * P) / P),
    (G = Math.round(G * P) / P));
  let it = 0;
  for (
    j &&
    (v && X !== u
      ? (i.push({ value: u }),
        X < u && it++,
        Rl(Math.round((X + it * R) * P) / P, u, C0(u, q, n)) && it++)
      : X < u && it++);
    it < W;
    ++it
  ) {
    const $ = Math.round((X + it * R) * P) / P;
    if (z && $ > d) break;
    i.push({ value: $ });
  }
  return (
    z && v && G !== d
      ? i.length && Rl(i[i.length - 1].value, d, C0(d, q, n))
        ? (i[i.length - 1].value = d)
        : i.push({ value: d })
      : (!z || G === d) && i.push({ value: G }),
    i
  );
}
function C0(n, t, { horizontal: i, minRotation: a }) {
  const o = kn(a),
    r = (i ? Math.sin(o) : Math.cos(o)) || 0.001,
    u = 0.75 * t * ("" + n).length;
  return Math.min(t / r, u);
}
class rc extends Ns {
  constructor(t) {
    (super(t),
      (this.start = void 0),
      (this.end = void 0),
      (this._startValue = void 0),
      (this._endValue = void 0),
      (this._valueRange = 0));
  }
  parse(t, i) {
    return yt(t) ||
      ((typeof t == "number" || t instanceof Number) && !isFinite(+t))
      ? null
      : +t;
  }
  handleTickRangeOptions() {
    const { beginAtZero: t } = this.options,
      { minDefined: i, maxDefined: a } = this.getUserBounds();
    let { min: o, max: r } = this;
    const u = (h) => (o = i ? o : h),
      d = (h) => (r = a ? r : h);
    if (t) {
      const h = Bn(o),
        g = Bn(r);
      h < 0 && g < 0 ? d(0) : h > 0 && g > 0 && u(0);
    }
    if (o === r) {
      let h = r === 0 ? 1 : Math.abs(r * 0.05);
      (d(r + h), t || u(o - h));
    }
    ((this.min = o), (this.max = r));
  }
  getTickLimit() {
    const t = this.options.ticks;
    let { maxTicksLimit: i, stepSize: a } = t,
      o;
    return (
      a
        ? ((o = Math.ceil(this.max / a) - Math.floor(this.min / a) + 1),
          o > 1e3 &&
            (console.warn(
              `scales.${this.id}.ticks.stepSize: ${a} would result generating up to ${o} ticks. Limiting to 1000.`,
            ),
            (o = 1e3)))
        : ((o = this.computeTickLimit()), (i = i || 11)),
      i && (o = Math.min(i, o)),
      o
    );
  }
  computeTickLimit() {
    return Number.POSITIVE_INFINITY;
  }
  buildTicks() {
    const t = this.options,
      i = t.ticks;
    let a = this.getTickLimit();
    a = Math.max(2, a);
    const o = {
        maxTicks: a,
        bounds: t.bounds,
        min: t.min,
        max: t.max,
        precision: i.precision,
        step: i.stepSize,
        count: i.count,
        maxDigits: this._maxDigits(),
        horizontal: this.isHorizontal(),
        minRotation: i.minRotation || 0,
        includeBounds: i.includeBounds !== !1,
      },
      r = this._range || this,
      u = ik(o, r);
    return (
      t.bounds === "ticks" && Hx(u, this, "value"),
      t.reverse
        ? (u.reverse(), (this.start = this.max), (this.end = this.min))
        : ((this.start = this.min), (this.end = this.max)),
      u
    );
  }
  configure() {
    const t = this.ticks;
    let i = this.min,
      a = this.max;
    if ((super.configure(), this.options.offset && t.length)) {
      const o = (a - i) / Math.max(t.length - 1, 1) / 2;
      ((i -= o), (a += o));
    }
    ((this._startValue = i), (this._endValue = a), (this._valueRange = a - i));
  }
  getLabelForValue(t) {
    return no(t, this.chart.options.locale, this.options.ticks.format);
  }
}
class bf extends rc {
  determineDataLimits() {
    const { min: t, max: i } = this.getMinMax(!0);
    ((this.min = ne(t) ? t : 0),
      (this.max = ne(i) ? i : 1),
      this.handleTickRangeOptions());
  }
  computeTickLimit() {
    const t = this.isHorizontal(),
      i = t ? this.width : this.height,
      a = kn(this.options.ticks.minRotation),
      o = (t ? Math.sin(a) : Math.cos(a)) || 0.001,
      r = this._resolveTickFontOptions(0);
    return Math.ceil(i / Math.min(40, r.lineHeight / o));
  }
  getPixelForValue(t) {
    return t === null
      ? NaN
      : this.getPixelForDecimal((t - this._startValue) / this._valueRange);
  }
  getValueForPixel(t) {
    return this._startValue + this.getDecimalForPixel(t) * this._valueRange;
  }
}
(K(bf, "id", "linear"),
  K(bf, "defaults", { ticks: { callback: mc.formatters.numeric } }));
const Zl = (n) => Math.floor(Yi(n)),
  ys = (n, t) => Math.pow(10, Zl(n) + t);
function j0(n) {
  return n / Math.pow(10, Zl(n)) === 1;
}
function T0(n, t, i) {
  const a = Math.pow(10, i),
    o = Math.floor(n / a);
  return Math.ceil(t / a) - o;
}
function sk(n, t) {
  const i = t - n;
  let a = Zl(i);
  for (; T0(n, t, a) > 10;) a++;
  for (; T0(n, t, a) < 10;) a--;
  return Math.min(a, Zl(n));
}
function ak(n, { min: t, max: i }) {
  t = ln(n.min, t);
  const a = [],
    o = Zl(t);
  let r = sk(t, i),
    u = r < 0 ? Math.pow(10, Math.abs(r)) : 1;
  const d = Math.pow(10, r),
    h = o > r ? Math.pow(10, o) : 0,
    g = Math.round((t - h) * u) / u,
    p = Math.floor((t - h) / d / 10) * d * 10;
  let y = Math.floor((g - p) / Math.pow(10, r)),
    v = ln(n.min, Math.round((h + p + y * Math.pow(10, r)) * u) / u);
  for (; v < i;)
    (a.push({ value: v, major: j0(v), significand: y }),
      y >= 10 ? (y = y < 15 ? 15 : 20) : y++,
      y >= 20 && (r++, (y = 2), (u = r >= 0 ? 1 : u)),
      (v = Math.round((h + p + y * Math.pow(10, r)) * u) / u));
  const _ = ln(n.max, v);
  return (a.push({ value: _, major: j0(_), significand: y }), a);
}
class xf extends Ns {
  constructor(t) {
    (super(t),
      (this.start = void 0),
      (this.end = void 0),
      (this._startValue = void 0),
      (this._valueRange = 0));
  }
  parse(t, i) {
    const a = rc.prototype.parse.apply(this, [t, i]);
    if (a === 0) {
      this._zero = !0;
      return;
    }
    return ne(a) && a > 0 ? a : null;
  }
  determineDataLimits() {
    const { min: t, max: i } = this.getMinMax(!0);
    ((this.min = ne(t) ? Math.max(0, t) : null),
      (this.max = ne(i) ? Math.max(0, i) : null),
      this.options.beginAtZero && (this._zero = !0),
      this._zero &&
        this.min !== this._suggestedMin &&
        !ne(this._userMin) &&
        (this.min = t === ys(this.min, 0) ? ys(this.min, -1) : ys(this.min, 0)),
      this.handleTickRangeOptions());
  }
  handleTickRangeOptions() {
    const { minDefined: t, maxDefined: i } = this.getUserBounds();
    let a = this.min,
      o = this.max;
    const r = (d) => (a = t ? a : d),
      u = (d) => (o = i ? o : d);
    (a === o && (a <= 0 ? (r(1), u(10)) : (r(ys(a, -1)), u(ys(o, 1)))),
      a <= 0 && r(ys(o, -1)),
      o <= 0 && u(ys(a, 1)),
      (this.min = a),
      (this.max = o));
  }
  buildTicks() {
    const t = this.options,
      i = { min: this._userMin, max: this._userMax },
      a = ak(i, this);
    return (
      t.bounds === "ticks" && Hx(a, this, "value"),
      t.reverse
        ? (a.reverse(), (this.start = this.max), (this.end = this.min))
        : ((this.start = this.min), (this.end = this.max)),
      a
    );
  }
  getLabelForValue(t) {
    return t === void 0
      ? "0"
      : no(t, this.chart.options.locale, this.options.ticks.format);
  }
  configure() {
    const t = this.min;
    (super.configure(),
      (this._startValue = Yi(t)),
      (this._valueRange = Yi(this.max) - Yi(t)));
  }
  getPixelForValue(t) {
    return (
      (t === void 0 || t === 0) && (t = this.min),
      t === null || isNaN(t)
        ? NaN
        : this.getPixelForDecimal(
            t === this.min ? 0 : (Yi(t) - this._startValue) / this._valueRange,
          )
    );
  }
  getValueForPixel(t) {
    const i = this.getDecimalForPixel(t);
    return Math.pow(10, this._startValue + i * this._valueRange);
  }
}
(K(xf, "id", "logarithmic"),
  K(xf, "defaults", {
    ticks: { callback: mc.formatters.logarithmic, major: { enabled: !0 } },
  }));
function yf(n) {
  const t = n.ticks;
  if (t.display && n.display) {
    const i = Oe(t.backdropPadding);
    return dt(t.font && t.font.size, It.font.size) + i.height;
  }
  return 0;
}
function lk(n, t, i) {
  return (
    (i = $t(i) ? i : [i]),
    { w: f5(n, t.string, i), h: i.length * t.lineHeight }
  );
}
function N0(n, t, i, a, o) {
  return n === a || n === o
    ? { start: t - i / 2, end: t + i / 2 }
    : n < a || n > o
      ? { start: t - i, end: t }
      : { start: t, end: t + i };
}
function ok(n) {
  const t = {
      l: n.left + n._padding.left,
      r: n.right - n._padding.right,
      t: n.top + n._padding.top,
      b: n.bottom - n._padding.bottom,
    },
    i = Object.assign({}, t),
    a = [],
    o = [],
    r = n._pointLabels.length,
    u = n.options.pointLabels,
    d = u.centerPointLabels ? jt / r : 0;
  for (let h = 0; h < r; h++) {
    const g = u.setContext(n.getPointLabelContext(h));
    o[h] = g.padding;
    const p = n.getPointPosition(h, n.drawingArea + o[h], d),
      y = be(g.font),
      v = lk(n.ctx, y, n._pointLabels[h]);
    a[h] = v;
    const _ = je(n.getIndexAngle(h) + d),
      S = Math.round(qf(_)),
      M = N0(S, p.x, v.w, 0, 180),
      k = N0(S, p.y, v.h, 90, 270);
    rk(i, t, _, M, k);
  }
  (n.setCenterPoint(t.l - i.l, i.r - t.r, t.t - i.t, i.b - t.b),
    (n._pointLabelItems = dk(n, a, o)));
}
function rk(n, t, i, a, o) {
  const r = Math.abs(Math.sin(i)),
    u = Math.abs(Math.cos(i));
  let d = 0,
    h = 0;
  (a.start < t.l
    ? ((d = (t.l - a.start) / r), (n.l = Math.min(n.l, t.l - d)))
    : a.end > t.r && ((d = (a.end - t.r) / r), (n.r = Math.max(n.r, t.r + d))),
    o.start < t.t
      ? ((h = (t.t - o.start) / u), (n.t = Math.min(n.t, t.t - h)))
      : o.end > t.b &&
        ((h = (o.end - t.b) / u), (n.b = Math.max(n.b, t.b + h))));
}
function ck(n, t, i) {
  const a = n.drawingArea,
    { extra: o, additionalAngle: r, padding: u, size: d } = i,
    h = n.getPointPosition(t, a + o + u, r),
    g = Math.round(qf(je(h.angle + re))),
    p = mk(h.y, d.h, g),
    y = fk(g),
    v = hk(h.x, d.w, y);
  return {
    visible: !0,
    x: h.x,
    y: p,
    textAlign: y,
    left: v,
    top: p,
    right: v + d.w,
    bottom: p + d.h,
  };
}
function uk(n, t) {
  if (!t) return !0;
  const { left: i, top: a, right: o, bottom: r } = n;
  return !(
    ui({ x: i, y: a }, t) ||
    ui({ x: i, y: r }, t) ||
    ui({ x: o, y: a }, t) ||
    ui({ x: o, y: r }, t)
  );
}
function dk(n, t, i) {
  const a = [],
    o = n._pointLabels.length,
    r = n.options,
    { centerPointLabels: u, display: d } = r.pointLabels,
    h = { extra: yf(r) / 2, additionalAngle: u ? jt / o : 0 };
  let g;
  for (let p = 0; p < o; p++) {
    ((h.padding = i[p]), (h.size = t[p]));
    const y = ck(n, p, h);
    (a.push(y), d === "auto" && ((y.visible = uk(y, g)), y.visible && (g = y)));
  }
  return a;
}
function fk(n) {
  return n === 0 || n === 180 ? "center" : n < 180 ? "left" : "right";
}
function hk(n, t, i) {
  return (i === "right" ? (n -= t) : i === "center" && (n -= t / 2), n);
}
function mk(n, t, i) {
  return (
    i === 90 || i === 270 ? (n -= t / 2) : (i > 270 || i < 90) && (n -= t),
    n
  );
}
function gk(n, t, i) {
  const { left: a, top: o, right: r, bottom: u } = i,
    { backdropColor: d } = t;
  if (!yt(d)) {
    const h = Ms(t.borderRadius),
      g = Oe(t.backdropPadding);
    n.fillStyle = d;
    const p = a - g.left,
      y = o - g.top,
      v = r - a + g.width,
      _ = u - o + g.height;
    Object.values(h).some((S) => S !== 0)
      ? (n.beginPath(), Fl(n, { x: p, y, w: v, h: _, radius: h }), n.fill())
      : n.fillRect(p, y, v, _);
  }
}
function pk(n, t) {
  const {
    ctx: i,
    options: { pointLabels: a },
  } = n;
  for (let o = t - 1; o >= 0; o--) {
    const r = n._pointLabelItems[o];
    if (!r.visible) continue;
    const u = a.setContext(n.getPointLabelContext(o));
    gk(i, u, r);
    const d = be(u.font),
      { x: h, y: g, textAlign: p } = r;
    Cs(i, n._pointLabels[o], h, g + d.lineHeight / 2, d, {
      color: u.color,
      textAlign: p,
      textBaseline: "middle",
    });
  }
}
function jy(n, t, i, a) {
  const { ctx: o } = n;
  if (i) o.arc(n.xCenter, n.yCenter, t, 0, Zt);
  else {
    let r = n.getPointPosition(0, t);
    o.moveTo(r.x, r.y);
    for (let u = 1; u < a; u++)
      ((r = n.getPointPosition(u, t)), o.lineTo(r.x, r.y));
  }
}
function bk(n, t, i, a, o) {
  const r = n.ctx,
    u = t.circular,
    { color: d, lineWidth: h } = t;
  (!u && !a) ||
    !d ||
    !h ||
    i < 0 ||
    (r.save(),
    (r.strokeStyle = d),
    (r.lineWidth = h),
    r.setLineDash(o.dash || []),
    (r.lineDashOffset = o.dashOffset),
    r.beginPath(),
    jy(n, i, u, a),
    r.closePath(),
    r.stroke(),
    r.restore());
}
function xk(n, t, i) {
  return Ki(n, { label: i, index: t, type: "pointLabel" });
}
class Ll extends rc {
  constructor(t) {
    (super(t),
      (this.xCenter = void 0),
      (this.yCenter = void 0),
      (this.drawingArea = void 0),
      (this._pointLabels = []),
      (this._pointLabelItems = []));
  }
  setDimensions() {
    const t = (this._padding = Oe(yf(this.options) / 2)),
      i = (this.width = this.maxWidth - t.width),
      a = (this.height = this.maxHeight - t.height);
    ((this.xCenter = Math.floor(this.left + i / 2 + t.left)),
      (this.yCenter = Math.floor(this.top + a / 2 + t.top)),
      (this.drawingArea = Math.floor(Math.min(i, a) / 2)));
  }
  determineDataLimits() {
    const { min: t, max: i } = this.getMinMax(!1);
    ((this.min = ne(t) && !isNaN(t) ? t : 0),
      (this.max = ne(i) && !isNaN(i) ? i : 0),
      this.handleTickRangeOptions());
  }
  computeTickLimit() {
    return Math.ceil(this.drawingArea / yf(this.options));
  }
  generateTickLabels(t) {
    (rc.prototype.generateTickLabels.call(this, t),
      (this._pointLabels = this.getLabels()
        .map((i, a) => {
          const o = Pt(this.options.pointLabels.callback, [i, a], this);
          return o || o === 0 ? o : "";
        })
        .filter((i, a) => this.chart.getDataVisibility(a))));
  }
  fit() {
    const t = this.options;
    t.display && t.pointLabels.display
      ? ok(this)
      : this.setCenterPoint(0, 0, 0, 0);
  }
  setCenterPoint(t, i, a, o) {
    ((this.xCenter += Math.floor((t - i) / 2)),
      (this.yCenter += Math.floor((a - o) / 2)),
      (this.drawingArea -= Math.min(
        this.drawingArea / 2,
        Math.max(t, i, a, o),
      )));
  }
  getIndexAngle(t) {
    const i = Zt / (this._pointLabels.length || 1),
      a = this.options.startAngle || 0;
    return je(t * i + kn(a));
  }
  getDistanceFromCenterForValue(t) {
    if (yt(t)) return NaN;
    const i = this.drawingArea / (this.max - this.min);
    return this.options.reverse ? (this.max - t) * i : (t - this.min) * i;
  }
  getValueForDistanceFromCenter(t) {
    if (yt(t)) return NaN;
    const i = t / (this.drawingArea / (this.max - this.min));
    return this.options.reverse ? this.max - i : this.min + i;
  }
  getPointLabelContext(t) {
    const i = this._pointLabels || [];
    if (t >= 0 && t < i.length) {
      const a = i[t];
      return xk(this.getContext(), t, a);
    }
  }
  getPointPosition(t, i, a = 0) {
    const o = this.getIndexAngle(t) - re + a;
    return {
      x: Math.cos(o) * i + this.xCenter,
      y: Math.sin(o) * i + this.yCenter,
      angle: o,
    };
  }
  getPointPositionForValue(t, i) {
    return this.getPointPosition(t, this.getDistanceFromCenterForValue(i));
  }
  getBasePosition(t) {
    return this.getPointPositionForValue(t || 0, this.getBaseValue());
  }
  getPointLabelPosition(t) {
    const { left: i, top: a, right: o, bottom: r } = this._pointLabelItems[t];
    return { left: i, top: a, right: o, bottom: r };
  }
  drawBackground() {
    const {
      backgroundColor: t,
      grid: { circular: i },
    } = this.options;
    if (t) {
      const a = this.ctx;
      (a.save(),
        a.beginPath(),
        jy(
          this,
          this.getDistanceFromCenterForValue(this._endValue),
          i,
          this._pointLabels.length,
        ),
        a.closePath(),
        (a.fillStyle = t),
        a.fill(),
        a.restore());
    }
  }
  drawGrid() {
    const t = this.ctx,
      i = this.options,
      { angleLines: a, grid: o, border: r } = i,
      u = this._pointLabels.length;
    let d, h, g;
    if (
      (i.pointLabels.display && pk(this, u),
      o.display &&
        this.ticks.forEach((p, y) => {
          if (y !== 0 || (y === 0 && this.min < 0)) {
            h = this.getDistanceFromCenterForValue(p.value);
            const v = this.getContext(y),
              _ = o.setContext(v),
              S = r.setContext(v);
            bk(this, _, h, u, S);
          }
        }),
      a.display)
    ) {
      for (t.save(), d = u - 1; d >= 0; d--) {
        const p = a.setContext(this.getPointLabelContext(d)),
          { color: y, lineWidth: v } = p;
        !v ||
          !y ||
          ((t.lineWidth = v),
          (t.strokeStyle = y),
          t.setLineDash(p.borderDash),
          (t.lineDashOffset = p.borderDashOffset),
          (h = this.getDistanceFromCenterForValue(
            i.reverse ? this.min : this.max,
          )),
          (g = this.getPointPosition(d, h)),
          t.beginPath(),
          t.moveTo(this.xCenter, this.yCenter),
          t.lineTo(g.x, g.y),
          t.stroke());
      }
      t.restore();
    }
  }
  drawBorder() {}
  drawLabels() {
    const t = this.ctx,
      i = this.options,
      a = i.ticks;
    if (!a.display) return;
    const o = this.getIndexAngle(0);
    let r, u;
    (t.save(),
      t.translate(this.xCenter, this.yCenter),
      t.rotate(o),
      (t.textAlign = "center"),
      (t.textBaseline = "middle"),
      this.ticks.forEach((d, h) => {
        if (h === 0 && this.min >= 0 && !i.reverse) return;
        const g = a.setContext(this.getContext(h)),
          p = be(g.font);
        if (
          ((r = this.getDistanceFromCenterForValue(this.ticks[h].value)),
          g.showLabelBackdrop)
        ) {
          ((t.font = p.string),
            (u = t.measureText(d.label).width),
            (t.fillStyle = g.backdropColor));
          const y = Oe(g.backdropPadding);
          t.fillRect(
            -u / 2 - y.left,
            -r - p.size / 2 - y.top,
            u + y.width,
            p.size + y.height,
          );
        }
        Cs(t, d.label, 0, -r, p, {
          color: g.color,
          strokeColor: g.textStrokeColor,
          strokeWidth: g.textStrokeWidth,
        });
      }),
      t.restore());
  }
  drawTitle() {}
}
(K(Ll, "id", "radialLinear"),
  K(Ll, "defaults", {
    display: !0,
    animate: !0,
    position: "chartArea",
    angleLines: {
      display: !0,
      lineWidth: 1,
      borderDash: [],
      borderDashOffset: 0,
    },
    grid: { circular: !1 },
    startAngle: 0,
    ticks: { showLabelBackdrop: !0, callback: mc.formatters.numeric },
    pointLabels: {
      backdropColor: void 0,
      backdropPadding: 2,
      display: !0,
      font: { size: 10 },
      callback(t) {
        return t;
      },
      padding: 5,
      centerPointLabels: !1,
    },
  }),
  K(Ll, "defaultRoutes", {
    "angleLines.color": "borderColor",
    "pointLabels.color": "color",
    "ticks.color": "color",
  }),
  K(Ll, "descriptors", { angleLines: { _fallback: "grid" } }));
const vc = {
    millisecond: { common: !0, size: 1, steps: 1e3 },
    second: { common: !0, size: 1e3, steps: 60 },
    minute: { common: !0, size: 6e4, steps: 60 },
    hour: { common: !0, size: 36e5, steps: 24 },
    day: { common: !0, size: 864e5, steps: 30 },
    week: { common: !1, size: 6048e5, steps: 4 },
    month: { common: !0, size: 2628e6, steps: 12 },
    quarter: { common: !1, size: 7884e6, steps: 4 },
    year: { common: !0, size: 3154e7 },
  },
  Qe = Object.keys(vc);
function O0(n, t) {
  return n - t;
}
function z0(n, t) {
  if (yt(t)) return null;
  const i = n._adapter,
    { parser: a, round: o, isoWeekday: r } = n._parseOpts;
  let u = t;
  return (
    typeof a == "function" && (u = a(u)),
    ne(u) || (u = typeof a == "string" ? i.parse(u, a) : i.parse(u)),
    u === null
      ? null
      : (o &&
          (u =
            o === "week" && (Sa(r) || r === !0)
              ? i.startOf(u, "isoWeek", r)
              : i.startOf(u, o)),
        +u)
  );
}
function D0(n, t, i, a) {
  const o = Qe.length;
  for (let r = Qe.indexOf(n); r < o - 1; ++r) {
    const u = vc[Qe[r]],
      d = u.steps ? u.steps : Number.MAX_SAFE_INTEGER;
    if (u.common && Math.ceil((i - t) / (d * u.size)) <= a) return Qe[r];
  }
  return Qe[o - 1];
}
function yk(n, t, i, a, o) {
  for (let r = Qe.length - 1; r >= Qe.indexOf(i); r--) {
    const u = Qe[r];
    if (vc[u].common && n._adapter.diff(o, a, u) >= t - 1) return u;
  }
  return Qe[i ? Qe.indexOf(i) : 0];
}
function vk(n) {
  for (let t = Qe.indexOf(n) + 1, i = Qe.length; t < i; ++t)
    if (vc[Qe[t]].common) return Qe[t];
}
function L0(n, t, i) {
  if (!i) n[t] = !0;
  else if (i.length) {
    const { lo: a, hi: o } = Yf(i, t),
      r = i[a] >= t ? i[a] : i[o];
    n[r] = !0;
  }
}
function wk(n, t, i, a) {
  const o = n._adapter,
    r = +o.startOf(t[0].value, a),
    u = t[t.length - 1].value;
  let d, h;
  for (d = r; d <= u; d = +o.add(d, 1, a))
    ((h = i[d]), h >= 0 && (t[h].major = !0));
  return t;
}
function B0(n, t, i) {
  const a = [],
    o = {},
    r = t.length;
  let u, d;
  for (u = 0; u < r; ++u)
    ((d = t[u]), (o[d] = u), a.push({ value: d, major: !1 }));
  return r === 0 || !i ? a : wk(n, a, o, i);
}
class Ql extends Ns {
  constructor(t) {
    (super(t),
      (this._cache = { data: [], labels: [], all: [] }),
      (this._unit = "day"),
      (this._majorUnit = void 0),
      (this._offsets = {}),
      (this._normalized = !1),
      (this._parseOpts = void 0));
  }
  init(t, i = {}) {
    const a = t.time || (t.time = {}),
      o = (this._adapter = new j3._date(t.adapters.date));
    (o.init(i),
      Bl(a.displayFormats, o.formats()),
      (this._parseOpts = {
        parser: a.parser,
        round: a.round,
        isoWeekday: a.isoWeekday,
      }),
      super.init(t),
      (this._normalized = i.normalized));
  }
  parse(t, i) {
    return t === void 0 ? null : z0(this, t);
  }
  beforeLayout() {
    (super.beforeLayout(), (this._cache = { data: [], labels: [], all: [] }));
  }
  determineDataLimits() {
    const t = this.options,
      i = this._adapter,
      a = t.time.unit || "day";
    let { min: o, max: r, minDefined: u, maxDefined: d } = this.getUserBounds();
    function h(g) {
      (!u && !isNaN(g.min) && (o = Math.min(o, g.min)),
        !d && !isNaN(g.max) && (r = Math.max(r, g.max)));
    }
    ((!u || !d) &&
      (h(this._getLabelBounds()),
      (t.bounds !== "ticks" || t.ticks.source !== "labels") &&
        h(this.getMinMax(!1))),
      (o = ne(o) && !isNaN(o) ? o : +i.startOf(Date.now(), a)),
      (r = ne(r) && !isNaN(r) ? r : +i.endOf(Date.now(), a) + 1),
      (this.min = Math.min(o, r - 1)),
      (this.max = Math.max(o + 1, r)));
  }
  _getLabelBounds() {
    const t = this.getLabelTimestamps();
    let i = Number.POSITIVE_INFINITY,
      a = Number.NEGATIVE_INFINITY;
    return (
      t.length && ((i = t[0]), (a = t[t.length - 1])),
      { min: i, max: a }
    );
  }
  buildTicks() {
    const t = this.options,
      i = t.time,
      a = t.ticks,
      o = a.source === "labels" ? this.getLabelTimestamps() : this._generate();
    t.bounds === "ticks" &&
      o.length &&
      ((this.min = this._userMin || o[0]),
      (this.max = this._userMax || o[o.length - 1]));
    const r = this.min,
      u = this.max,
      d = JS(o, r, u);
    return (
      (this._unit =
        i.unit ||
        (a.autoSkip
          ? D0(i.minUnit, this.min, this.max, this._getLabelCapacity(r))
          : yk(this, d.length, i.minUnit, this.min, this.max))),
      (this._majorUnit =
        !a.major.enabled || this._unit === "year" ? void 0 : vk(this._unit)),
      this.initOffsets(o),
      t.reverse && d.reverse(),
      B0(this, d, this._majorUnit)
    );
  }
  afterAutoSkip() {
    this.options.offsetAfterAutoskip &&
      this.initOffsets(this.ticks.map((t) => +t.value));
  }
  initOffsets(t = []) {
    let i = 0,
      a = 0,
      o,
      r;
    this.options.offset &&
      t.length &&
      ((o = this.getDecimalForValue(t[0])),
      t.length === 1
        ? (i = 1 - o)
        : (i = (this.getDecimalForValue(t[1]) - o) / 2),
      (r = this.getDecimalForValue(t[t.length - 1])),
      t.length === 1
        ? (a = r)
        : (a = (r - this.getDecimalForValue(t[t.length - 2])) / 2));
    const u = t.length < 3 ? 0.5 : 0.25;
    ((i = ve(i, 0, u)),
      (a = ve(a, 0, u)),
      (this._offsets = { start: i, end: a, factor: 1 / (i + 1 + a) }));
  }
  _generate() {
    const t = this._adapter,
      i = this.min,
      a = this.max,
      o = this.options,
      r = o.time,
      u = r.unit || D0(r.minUnit, i, a, this._getLabelCapacity(i)),
      d = dt(o.ticks.stepSize, 1),
      h = u === "week" ? r.isoWeekday : !1,
      g = Sa(h) || h === !0,
      p = {};
    let y = i,
      v,
      _;
    if (
      (g && (y = +t.startOf(y, "isoWeek", h)),
      (y = +t.startOf(y, g ? "day" : u)),
      t.diff(a, i, u) > 1e5 * d)
    )
      throw new Error(
        i + " and " + a + " are too far apart with stepSize of " + d + " " + u,
      );
    const S = o.ticks.source === "data" && this.getDataTimestamps();
    for (v = y, _ = 0; v < a; v = +t.add(v, d, u), _++) L0(p, v, S);
    return (
      (v === a || o.bounds === "ticks" || _ === 1) && L0(p, v, S),
      Object.keys(p)
        .sort(O0)
        .map((M) => +M)
    );
  }
  getLabelForValue(t) {
    const i = this._adapter,
      a = this.options.time;
    return a.tooltipFormat
      ? i.format(t, a.tooltipFormat)
      : i.format(t, a.displayFormats.datetime);
  }
  format(t, i) {
    const o = this.options.time.displayFormats,
      r = this._unit,
      u = i || o[r];
    return this._adapter.format(t, u);
  }
  _tickFormatFunction(t, i, a, o) {
    const r = this.options,
      u = r.ticks.callback;
    if (u) return Pt(u, [t, i, a], this);
    const d = r.time.displayFormats,
      h = this._unit,
      g = this._majorUnit,
      p = h && d[h],
      y = g && d[g],
      v = a[i],
      _ = g && y && v && v.major;
    return this._adapter.format(t, o || (_ ? y : p));
  }
  generateTickLabels(t) {
    let i, a, o;
    for (i = 0, a = t.length; i < a; ++i)
      ((o = t[i]), (o.label = this._tickFormatFunction(o.value, i, t)));
  }
  getDecimalForValue(t) {
    return t === null ? NaN : (t - this.min) / (this.max - this.min);
  }
  getPixelForValue(t) {
    const i = this._offsets,
      a = this.getDecimalForValue(t);
    return this.getPixelForDecimal((i.start + a) * i.factor);
  }
  getValueForPixel(t) {
    const i = this._offsets,
      a = this.getDecimalForPixel(t) / i.factor - i.end;
    return this.min + a * (this.max - this.min);
  }
  _getLabelSize(t) {
    const i = this.options.ticks,
      a = this.ctx.measureText(t).width,
      o = kn(this.isHorizontal() ? i.maxRotation : i.minRotation),
      r = Math.cos(o),
      u = Math.sin(o),
      d = this._resolveTickFontOptions(0).size;
    return { w: a * r + d * u, h: a * u + d * r };
  }
  _getLabelCapacity(t) {
    const i = this.options.time,
      a = i.displayFormats,
      o = a[i.unit] || a.millisecond,
      r = this._tickFormatFunction(t, 0, B0(this, [t], this._majorUnit), o),
      u = this._getLabelSize(r),
      d =
        Math.floor(this.isHorizontal() ? this.width / u.w : this.height / u.h) -
        1;
    return d > 0 ? d : 1;
  }
  getDataTimestamps() {
    let t = this._cache.data || [],
      i,
      a;
    if (t.length) return t;
    const o = this.getMatchingVisibleMetas();
    if (this._normalized && o.length)
      return (this._cache.data = o[0].controller.getAllParsedValues(this));
    for (i = 0, a = o.length; i < a; ++i)
      t = t.concat(o[i].controller.getAllParsedValues(this));
    return (this._cache.data = this.normalize(t));
  }
  getLabelTimestamps() {
    const t = this._cache.labels || [];
    let i, a;
    if (t.length) return t;
    const o = this.getLabels();
    for (i = 0, a = o.length; i < a; ++i) t.push(z0(this, o[i]));
    return (this._cache.labels = this._normalized ? t : this.normalize(t));
  }
  normalize(t) {
    return qx(t.sort(O0));
  }
}
(K(Ql, "id", "time"),
  K(Ql, "defaults", {
    bounds: "data",
    adapters: {},
    time: {
      parser: !1,
      unit: !1,
      round: !1,
      isoWeekday: !1,
      minUnit: "millisecond",
      displayFormats: {},
    },
    ticks: { source: "auto", callback: !1, major: { enabled: !1 } },
  }));
function Lr(n, t, i) {
  let a = 0,
    o = n.length - 1,
    r,
    u,
    d,
    h;
  i
    ? (t >= n[a].pos && t <= n[o].pos && ({ lo: a, hi: o } = ci(n, "pos", t)),
      ({ pos: r, time: d } = n[a]),
      ({ pos: u, time: h } = n[o]))
    : (t >= n[a].time &&
        t <= n[o].time &&
        ({ lo: a, hi: o } = ci(n, "time", t)),
      ({ time: r, pos: d } = n[a]),
      ({ time: u, pos: h } = n[o]));
  const g = u - r;
  return g ? d + ((h - d) * (t - r)) / g : d;
}
class vf extends Ql {
  constructor(t) {
    (super(t),
      (this._table = []),
      (this._minPos = void 0),
      (this._tableRange = void 0));
  }
  initOffsets() {
    const t = this._getTimestampsForTable(),
      i = (this._table = this.buildLookupTable(t));
    ((this._minPos = Lr(i, this.min)),
      (this._tableRange = Lr(i, this.max) - this._minPos),
      super.initOffsets(t));
  }
  buildLookupTable(t) {
    const { min: i, max: a } = this,
      o = [],
      r = [];
    let u, d, h, g, p;
    for (u = 0, d = t.length; u < d; ++u)
      ((g = t[u]), g >= i && g <= a && o.push(g));
    if (o.length < 2)
      return [
        { time: i, pos: 0 },
        { time: a, pos: 1 },
      ];
    for (u = 0, d = o.length; u < d; ++u)
      ((p = o[u + 1]),
        (h = o[u - 1]),
        (g = o[u]),
        Math.round((p + h) / 2) !== g && r.push({ time: g, pos: u / (d - 1) }));
    return r;
  }
  _generate() {
    const t = this.min,
      i = this.max;
    let a = super.getDataTimestamps();
    return (
      (!a.includes(t) || !a.length) && a.splice(0, 0, t),
      (!a.includes(i) || a.length === 1) && a.push(i),
      a.sort((o, r) => o - r)
    );
  }
  _getTimestampsForTable() {
    let t = this._cache.all || [];
    if (t.length) return t;
    const i = this.getDataTimestamps(),
      a = this.getLabelTimestamps();
    return (
      i.length && a.length
        ? (t = this.normalize(i.concat(a)))
        : (t = i.length ? i : a),
      (t = this._cache.all = t),
      t
    );
  }
  getDecimalForValue(t) {
    return (Lr(this._table, t) - this._minPos) / this._tableRange;
  }
  getValueForPixel(t) {
    const i = this._offsets,
      a = this.getDecimalForPixel(t) / i.factor - i.end;
    return Lr(this._table, a * this._tableRange + this._minPos, !0);
  }
}
(K(vf, "id", "timeseries"), K(vf, "defaults", Ql.defaults));
var _k = Object.freeze({
  __proto__: null,
  CategoryScale: pf,
  LinearScale: bf,
  LogarithmicScale: xf,
  RadialLinearScale: Ll,
  TimeScale: Ql,
  TimeSeriesScale: vf,
});
const Sk = [C3, sA, JA, _k];
Ln.register(...Sk);
const R0 = "zyhuka-monitor-cache-v3";
function Mk(n, t) {
  var u, d;
  const i = ((u = n.monitoring) == null ? void 0 : u.uptime_sec) ?? 0,
    a = ((d = t.monitoring) == null ? void 0 : d.uptime_sec) ?? 0;
  if (i > 0 && a > 0 && a + 5 < i) return !0;
  const o = n.data.metrics.total_hits ?? n.data.metrics.total_requests,
    r = t.data.metrics.total_hits ?? t.data.metrics.total_requests;
  return o > 0 && r + 1e3 < o;
}
function xa(n, t) {
  const i = { ...n };
  for (const [a, o] of Object.entries(t)) i[a] = Math.max(i[a] ?? 0, o);
  return i;
}
function Ak(n, t) {
  const i = { ...n };
  for (const [a, o] of Object.entries(t)) {
    const r = { ...(i[a] ?? {}) };
    for (const [u, d] of Object.entries(o)) r[u] = Math.max(r[u] ?? 0, d);
    i[a] = r;
  }
  return i;
}
function kk(n, t) {
  var r, u, d, h, g, p, y, v;
  if (!n || Mk(n, t)) return t;
  const i = new Map(n.nodes.map((_) => [_.name, _])),
    a = t.nodes.map((_) => {
      const S = i.get(_.name);
      if (!S) return _;
      const M = Math.round(S.latency_ms * 0.65 + _.latency_ms * 0.35);
      return { ..._, latency_ms: M };
    });
  return {
    ...t,
    healthy_nodes: t.healthy_nodes,
    total_nodes: t.total_nodes,
    nodes: a,
    data: {
      ...t.data,
      attacks: {
        ...t.data.attacks,
        total: Math.max(n.data.attacks.total, t.data.attacks.total),
        attack_history: xa(
          n.data.attacks.attack_history,
          t.data.attacks.attack_history,
        ),
      },
      errors: {
        ...t.data.errors,
        total: Math.max(n.data.errors.total, t.data.errors.total),
        by_endpoint: xa(n.data.errors.by_endpoint, t.data.errors.by_endpoint),
        error_history: xa(
          n.data.errors.error_history,
          t.data.errors.error_history,
        ),
      },
      metrics: {
        ...t.data.metrics,
        total_hits: Math.max(
          n.data.metrics.total_hits ?? 0,
          t.data.metrics.total_hits ?? 0,
        ),
        total_requests: Math.max(
          n.data.metrics.total_requests,
          t.data.metrics.total_requests,
        ),
        request_history: xa(
          n.data.metrics.request_history,
          t.data.metrics.request_history,
        ),
      },
      traffic: {
        recent_requests:
          ((r = t.data.traffic) == null ? void 0 : r.recent_requests) ??
          ((u = n.data.traffic) == null ? void 0 : u.recent_requests) ??
          [],
        status_buckets: xa(
          ((d = n.data.traffic) == null ? void 0 : d.status_buckets) ?? {},
          ((h = t.data.traffic) == null ? void 0 : h.status_buckets) ?? {},
        ),
        endpoint_hits: xa(
          ((g = n.data.traffic) == null ? void 0 : g.endpoint_hits) ?? {},
          ((p = t.data.traffic) == null ? void 0 : p.endpoint_hits) ?? {},
        ),
        endpoint_hourly_24h: Ak(
          ((y = n.data.traffic) == null ? void 0 : y.endpoint_hourly_24h) ?? {},
          ((v = t.data.traffic) == null ? void 0 : v.endpoint_hourly_24h) ?? {},
        ),
      },
      updatedAt: t.data.updatedAt,
    },
  };
}
function Ek(n) {
  if (!n) return null;
  try {
    const t = JSON.parse(n);
    return (t == null ? void 0 : t.type) !== "stats" ? null : t;
  } catch {
    return null;
  }
}
function Jd(n, t = 550) {
  const [i, a] = at.useState(n),
    o = at.useRef(n);
  return (
    at.useEffect(() => {
      if (n === o.current) return;
      const r = performance.now(),
        u = o.current;
      let d = 0;
      const h = (g) => {
        const p = Math.min(1, (g - r) / t),
          y = 1 - Math.pow(1 - p, 3),
          v = Math.round(u + (n - u) * y);
        ((o.current = v), a(v), p < 1 && (d = requestAnimationFrame(h)));
      };
      return ((d = requestAnimationFrame(h)), () => cancelAnimationFrame(d));
    }, [n, t]),
    i
  );
}
const Ck = () => {
  var ct, pt, Xt, Mt, ft, kt, Q, J, mt, vt, _e, Re, Qt, Jt, Kt, ge, un, Hn;
  const [monitorStats, t] = at.useState(() => Ek(localStorage.getItem(R0))),
    [i, a] = at.useState("CONNECTING"),
    [o, r] = at.useState(0),
    [u, d] = at.useState(null),
    [h, g] = at.useState(!1),
    [p, y] = at.useState(null),
    v = at.useRef(null),
    _ = at.useRef(null),
    S = at.useRef(null),
    M = at.useRef(null),
    k = at.useRef(null);
  const n = monitorStats ?? {
    nodes: [],
    endpoint_catalog: [],
    data: {
      metrics: { total_requests: 0, total_hits: 0, request_history: {} },
      errors: { total: 0, by_endpoint: {}, error_history: {} },
      attacks: { total: 0, attack_history: {} },
      traffic: {},
    },
  };
  (at.useEffect(() => {
    h || !!p
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "auto");
    const rt = (ie) => {
      ie.key === "Escape" && (p && y(null), h && g(!1));
    };
    return (
      window.addEventListener("keydown", rt),
      () => {
        ((document.body.style.overflow = "auto"),
          window.removeEventListener("keydown", rt));
      }
    );
  }, [h, p]),
    at.useEffect(() => {
      document.title = "System Monitor | API ZYHUKA";
      let disposed = false;
      let retryTimer;
      const Z = () => {
        if (disposed) return;
        const rt = new WebSocket(window.ZYHUKA_CONFIG.websocketUrl);
        ((v.current = rt),
          (rt.onopen = () => a("LIVE")),
          (rt.onmessage = (ie) => {
            try {
              const se = JSON.parse(ie.data);
              if (se.type !== "stats") return;
              t((He) => {
                const Un = kk(He, se);
                return (localStorage.setItem(R0, JSON.stringify(Un)), Un);
              });
            } catch (se) {
              console.error(se);
            }
          }),
          (rt.onclose = () => {
            if (!disposed) {
              a("OFFLINE");
              retryTimer = setTimeout(Z, 3e3);
            }
          }),
          (rt.onerror = () => rt.close()));
      };
      return (
        Z(),
        () => {
          disposed = true;
          clearTimeout(retryTimer);
          if (v.current) {
            v.current.onclose = null;
            v.current.close();
          }
        }
      );
    }, []),
    at.useEffect(() => {
      if (!_.current || M.current) return;
      const Z = _.current.getContext("2d");
      Z &&
        (M.current = new Ln(Z, {
          type: "bar",
          data: {
            labels: [],
            datasets: [
              {
                label: "Requests",
                data: [],
                backgroundColor: "#2563EB",
                borderRadius: 4,
              },
            ],
          },
          options: {
            responsive: !0,
            maintainAspectRatio: !1,
            animation: { duration: 550 },
            plugins: { legend: { display: !1 } },
            scales: {
              y: {
                beginAtZero: !0,
                ticks: {
                  color: "#a0a0a0",
                  font: { size: 10 },
                  callback: (rt) =>
                    rt >= 1e3 ? `${(rt / 1e3).toFixed(1)}K` : `${rt}`,
                },
                grid: { color: "#333" },
              },
              x: {
                ticks: { color: "#a0a0a0", font: { size: 10 } },
                grid: { display: !1 },
              },
            },
          },
        }));
    }, [Boolean(monitorStats)]),
    at.useEffect(() => {
      if (!S.current || k.current) return;
      const Z = S.current.getContext("2d");
      Z &&
        (k.current = new Ln(Z, {
          type: "bar",
          data: {
            labels: [],
            datasets: [
              {
                label: "Attacks",
                data: [],
                backgroundColor: "#2563EB",
                borderRadius: 4,
              },
            ],
          },
          options: {
            responsive: !0,
            maintainAspectRatio: !1,
            animation: { duration: 550 },
            plugins: { legend: { display: !1 } },
            scales: {
              y: {
                beginAtZero: !0,
                ticks: {
                  color: "#a0a0a0",
                  font: { size: 10 },
                  callback: (rt) =>
                    rt >= 1e3 ? `${(rt / 1e3).toFixed(1)}K` : `${rt}`,
                },
                grid: { color: "#333" },
              },
              x: {
                ticks: { color: "#a0a0a0", font: { size: 10 } },
                grid: { display: !1 },
              },
            },
          },
        }));
    }, [Boolean(monitorStats)]),
    at.useEffect(() => {
      if (!(!n || !M.current || !k.current))
        try {
          const Z = Object.entries(n.data.metrics.request_history)
              .sort((ze, Ue) => ze[0].localeCompare(Ue[0]))
              .slice(-7),
            rt = Z.map(([ze]) => {
              const Ue = new Date(ze);
              return `${Ue.getDate()}/${Ue.getMonth() + 1}`;
            }),
            ie = Z.map(([, ze]) => ze),
            se = M.current;
          ((se.data.labels = rt), (se.data.datasets[0].data = ie), se.update());
          const He = Object.entries(n.data.attacks.attack_history)
              .sort((ze, Ue) => ze[0].localeCompare(Ue[0]))
              .slice(-7),
            Un = He.map(([ze]) => {
              const Ue = new Date(ze);
              return `${Ue.getDate()}/${Ue.getMonth() + 1}`;
            }),
            Wi = He.map(([, ze]) => ze),
            ue = k.current;
          ((ue.data.labels = Un), (ue.data.datasets[0].data = Wi), ue.update());
        } catch (Z) {
          console.error("Chart update error:", Z);
        }
    }, [n]),
    at.useEffect(
      () => () => {
        var Z, rt;
        ((Z = M.current) == null || Z.destroy(),
          (rt = k.current) == null || rt.destroy(),
          (M.current = null),
          (k.current = null));
      },
      [],
    ),
    at.useEffect(() => {
      var Z;
      if (!(
        (Z = n == null ? void 0 : n.endpoint_catalog) != null && Z.length
      )) {
        (d(null), r(0));
        return;
      }
      (!u || !n.endpoint_catalog.some((rt) => rt.endpoint === u)) &&
        (d(n.endpoint_catalog[0].endpoint), r(0));
    }, [n, u]));
  const j = (Z) => Z.toLocaleString(),
    z = (
      ((ct = n.data.traffic) == null ? void 0 : ct.recent_requests) ?? []
    ).slice(0, 5),
    U =
      ((pt = n.monitoring) == null ? void 0 : pt.status_buckets) ??
      ((Xt = n.data.traffic) == null ? void 0 : Xt.status_buckets) ??
      {},
    q = n.endpoint_catalog ?? [],
    R = 5,
    P = Math.max(1, Math.ceil(q.length / R)),
    X = Math.min(o, P - 1),
    G = q.slice(X * R, X * R + R),
    W = q.find((Z) => Z.endpoint === u) ?? q[0] ?? null,
    lt =
      n.data.metrics.total_requests > 0
        ? ((n.data.errors.total / n.data.metrics.total_requests) * 100).toFixed(
            1,
          )
        : "0.0",
    it = (100 - parseFloat(lt)).toFixed(1),
    $ = Math.max(n.data.metrics.total_hits ?? 0, n.data.metrics.total_requests),
    Vt = Jd($),
    Yt = Jd(n.data.errors.total),
    ut = Jd(n.data.attacks.total),
    D = (Z) => {
      const rt = Math.max(0, Date.now() - new Date(Z).getTime()),
        ie = Math.floor(rt / 1e3);
      if (ie < 60) return `${ie}s ago`;
      const se = Math.floor(ie / 60);
      return se < 60 ? `${se}m ago` : `${Math.floor(se / 60)}h ago`;
    },
    F = (Z) =>
      Z < 300 ? "text-green-400" : Z < 500 ? "text-yellow-400" : "text-red-400",
    I = at.useMemo(() => {
      var He, Un;
      if (!W) return [];
      const Z = Date.now(),
        rt = 3600 * 1e3,
        ie =
          ((Un =
            (He = n.data.traffic) == null ? void 0 : He.endpoint_hourly_24h) ==
          null
            ? void 0
            : Un[W.endpoint]) ?? {},
        se = [];
      for (let Wi = 23; Wi >= 0; Wi -= 1) {
        const ue = Math.floor((Z - Wi * rt) / rt) * rt,
          ze = new Date(ue),
          Ue = new Date(ue).toISOString().slice(0, 13),
          io = `${ze.getUTCHours().toString().padStart(2, "0")}:00Z`;
        se.push({ label: io, value: ie[Ue] ?? 0 });
      }
      return se;
    }, [n, W]);
  at.useMemo(() => {
    if (I.length === 0) return "";
    const Z = Math.max(1, ...I.map((rt) => rt.value));
    return I.map((rt, ie) => {
      const se = (ie / Math.max(1, I.length - 1)) * 100,
        He = 100 - (rt.value / Z) * 100;
      return `${ie === 0 ? "M" : "L"} ${se.toFixed(2)} ${He.toFixed(2)}`;
    }).join(" ");
  }, [I]);
  if (!monitorStats)
    return b.jsx("div", {
      className:
        "fixed inset-0 bg-[var(--bg-primary)] flex items-center justify-center z-10",
      children: b.jsxs("div", {
        className: "text-center",
        children: [
          b.jsx("div", { className: "spinner mb-8 mx-auto" }),
          b.jsx("p", {
            className:
              "font-mono text-xs text-[var(--text-secondary)] uppercase tracking-widest",
            children:
              i === "OFFLINE"
                ? "Reconnecting..."
                : "Connecting to WebSocket...",
          }),
        ],
      }),
    });
  return b.jsx("div", {
    className: "min-h-screen bg-[var(--bg-primary)] pt-28 pb-16 px-4",
    children: b.jsxs("div", {
      className: "max-w-6xl mx-auto space-y-4",
      children: [
        b.jsxs("div", {
          className:
            "bg-[var(--bg-secondary)] border border-[var(--border-color)] px-5 py-4 flex flex-col md:flex-row md:items-center md:justify-between gap-3",
          children: [
            b.jsx("div", {
              children: b.jsxs("h1", {
                className:
                  "font-head text-2xl md:text-3xl text-[var(--text-primary)] uppercase leading-none tracking-wide",
                children: [
                  "System ",
                  b.jsx("span", {
                    className: "text-[#2563EB]",
                    children: "Monitor",
                  }),
                ],
              }),
            }),
            b.jsxs("div", {
              className:
                "inline-flex items-center gap-2 px-3 py-2 border border-[var(--border-color)] bg-[var(--bg-primary)] w-fit",
              children: [
                b.jsx("span", {
                  className: `w-2 h-2 ${i === "LIVE" ? "bg-green-500 animate-pulse" : "bg-red-500"}`,
                }),
                b.jsx("span", {
                  className:
                    "font-mono text-[10px] text-[var(--text-primary)] uppercase font-bold",
                  children: i,
                }),
              ],
            }),
          ],
        }),
        b.jsxs("div", {
          className: "grid grid-cols-2 md:grid-cols-4 gap-3",
          children: [
            b.jsxs("div", {
              className:
                "bg-[var(--bg-secondary)] border border-[var(--border-color)] p-4",
              children: [
                b.jsx("div", {
                  className:
                    "text-[10px] font-mono text-[var(--text-secondary)] uppercase mb-2 tracking-wide",
                  children: "Total Requests",
                }),
                b.jsx("div", {
                  className:
                    "font-head text-3xl md:text-4xl text-[var(--text-primary)] leading-none transition-all duration-300",
                  children: j(Vt),
                }),
                b.jsx("div", {
                  className:
                    "text-[10px] text-[var(--text-secondary)] mt-1 font-body",
                  children: "Realtime",
                }),
              ],
            }),
            b.jsxs("div", {
              className:
                "bg-[var(--bg-secondary)] border border-[var(--border-color)] p-4",
              children: [
                b.jsx("div", {
                  className:
                    "text-[10px] font-mono text-[var(--text-secondary)] uppercase mb-2 tracking-wide",
                  children: "Total Errors",
                }),
                b.jsx("div", {
                  className:
                    "font-head text-3xl md:text-4xl text-yellow-400 leading-none transition-all duration-300",
                  children: j(Yt),
                }),
                b.jsx("div", {
                  className:
                    "text-[10px] text-[var(--text-secondary)] mt-1 font-body",
                  children: "5xx dominant",
                }),
              ],
            }),
            b.jsxs("div", {
              className:
                "bg-[var(--bg-secondary)] border border-[var(--border-color)] p-4",
              children: [
                b.jsx("div", {
                  className:
                    "text-[10px] font-mono text-[var(--text-secondary)] uppercase mb-2 tracking-wide",
                  children: "Total Attacks",
                }),
                b.jsx("div", {
                  className:
                    "font-head text-3xl md:text-4xl text-[#2563EB] leading-none transition-all duration-300",
                  children: n.data.attacks.supported === false ? "N/A" : j(ut),
                }),
                b.jsx("div", {
                  className:
                    "text-[10px] text-[var(--text-secondary)] mt-1 font-body",
                  children:
                    n.data.attacks.supported === false
                      ? "Not measured"
                      : "Guard layer",
                }),
              ],
            }),
            b.jsxs("div", {
              className:
                "bg-[var(--bg-secondary)] border border-[var(--border-color)] p-4",
              children: [
                b.jsx("div", {
                  className:
                    "text-[10px] font-mono text-[var(--text-secondary)] uppercase mb-2 tracking-wide",
                  children: "Success Rate",
                }),
                b.jsxs("div", {
                  className: `font-head text-3xl md:text-4xl leading-none ${parseFloat(it) >= 90 ? "text-green-400" : "text-yellow-400"}`,
                  children: [it, "%"],
                }),
                b.jsx("div", {
                  className:
                    "text-[10px] text-[var(--text-secondary)] mt-1 font-body",
                  children: "Response quality",
                }),
              ],
            }),
          ],
        }),
        b.jsxs("div", {
          className:
            "bg-[var(--bg-secondary)] border border-[var(--border-color)] p-5",
          children: [
            b.jsxs("div", {
              className: "flex justify-between items-center mb-3",
              children: [
                b.jsx("h3", {
                  className:
                    "font-head text-sm uppercase text-[var(--text-primary)]",
                  children: "Node Status",
                }),
                b.jsxs("span", {
                  className:
                    "text-[10px] font-mono text-[var(--text-secondary)]",
                  children: [n.healthy_nodes, "/", n.total_nodes, " HEALTHY"],
                }),
              ],
            }),
            b.jsx("div", {
              className: "space-y-2",
              children: n.nodes.map((Z, rt) =>
                b.jsxs(
                  "button",
                  {
                    type: "button",
                    className:
                      "w-full text-left flex items-center justify-between p-3 bg-[var(--bg-primary)] border border-[var(--border-color)] hover:border-[#2563EB]/60 transition-colors",
                    onClick: () => y(Z),
                    children: [
                      b.jsxs("div", {
                        className: "flex items-center gap-3",
                        children: [
                          b.jsx("span", {
                            className: `w-2 h-2 ${Z.status === "healthy" ? "bg-green-500" : "bg-red-500"}`,
                          }),
                          b.jsx("span", {
                            className:
                              "font-mono text-xs text-[var(--text-primary)] uppercase",
                            children: Z.name,
                          }),
                        ],
                      }),
                      b.jsxs("div", {
                        className:
                          "flex items-center gap-3 text-[10px] font-mono text-[var(--text-secondary)]",
                        children: [
                          b.jsxs("span", { children: [Z.latency_ms, "ms"] }),
                          b.jsxs("span", {
                            children: ["conn ", Z.conns ?? 0],
                          }),
                          b.jsx("span", {
                            className:
                              Z.status === "healthy"
                                ? "text-green-400"
                                : "text-red-400",
                            children: Z.status,
                          }),
                        ],
                      }),
                    ],
                  },
                  rt,
                ),
              ),
            }),
          ],
        }),
        b.jsxs("div", {
          className:
            "bg-[var(--bg-secondary)] border border-[var(--border-color)] p-5",
          children: [
            b.jsxs("div", {
              className: "flex justify-between items-center mb-4",
              children: [
                b.jsx("h3", {
                  className:
                    "font-head text-sm uppercase text-[var(--text-primary)]",
                  children: "Live Traffic Signals",
                }),
                b.jsx("span", {
                  className:
                    "text-[10px] font-mono text-[var(--text-secondary)]",
                  children: "LIVE",
                }),
              ],
            }),
            b.jsxs("div", {
              className: "grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-2",
              children: [
                b.jsxs("div", {
                  className:
                    "p-3 bg-[var(--bg-primary)] border border-[var(--border-color)]",
                  children: [
                    b.jsx("div", {
                      className:
                        "text-[9px] font-mono text-[var(--text-secondary)] uppercase mb-1",
                      children: "Uptime",
                    }),
                    b.jsxs("div", {
                      className: "font-head text-lg text-[var(--text-primary)]",
                      children: [
                        Math.floor(
                          (((Mt = n.monitoring) == null
                            ? void 0
                            : Mt.uptime_sec) ?? 0) / 3600,
                        ),
                        "h",
                      ],
                    }),
                  ],
                }),
                b.jsxs("div", {
                  className:
                    "p-3 bg-[var(--bg-primary)] border border-[var(--border-color)]",
                  children: [
                    b.jsx("div", {
                      className:
                        "text-[9px] font-mono text-[var(--text-secondary)] uppercase mb-1",
                      children: "Active Conns",
                    }),
                    b.jsx("div", {
                      className: "font-head text-lg text-[var(--text-primary)]",
                      children: j(
                        ((ft = n.monitoring) == null
                          ? void 0
                          : ft.active_connections) ?? 0,
                      ),
                    }),
                  ],
                }),
                b.jsxs("div", {
                  className:
                    "p-3 bg-[var(--bg-primary)] border border-[var(--border-color)]",
                  children: [
                    b.jsx("div", {
                      className:
                        "text-[9px] font-mono text-[var(--text-secondary)] uppercase mb-1",
                      children: "Recent Avg Latency",
                    }),
                    b.jsxs("div", {
                      className: "font-head text-lg text-[var(--text-primary)]",
                      children: [
                        ((kt = n.monitoring) == null
                          ? void 0
                          : kt.avg_latency_ms_recent) ?? "0.0",
                        "ms",
                      ],
                    }),
                  ],
                }),
                b.jsxs("div", {
                  className:
                    "p-3 bg-[var(--bg-primary)] border border-[var(--border-color)]",
                  children: [
                    b.jsx("div", {
                      className:
                        "text-[9px] font-mono text-[var(--text-secondary)] uppercase mb-1",
                      children: "Failover Rate",
                    }),
                    b.jsxs("div", {
                      className: "font-head text-lg text-[var(--text-primary)]",
                      children: [
                        ((Q = n.monitoring) == null
                          ? void 0
                          : Q.failover_rate_recent) ?? "0.0",
                        "%",
                      ],
                    }),
                  ],
                }),
                b.jsxs("div", {
                  className:
                    "p-3 bg-[var(--bg-primary)] border border-[var(--border-color)]",
                  children: [
                    b.jsx("div", {
                      className:
                        "text-[9px] font-mono text-[var(--text-secondary)] uppercase mb-1",
                      children: "2xx / 4xx / 5xx",
                    }),
                    b.jsxs("div", {
                      className: "font-mono text-xs text-[var(--text-primary)]",
                      children: [
                        U["2xx"] ?? 0,
                        " / ",
                        U["4xx"] ?? 0,
                        " / ",
                        U["5xx"] ?? 0,
                      ],
                    }),
                  ],
                }),
                b.jsxs("div", {
                  className:
                    "p-3 bg-[var(--bg-primary)] border border-[var(--border-color)]",
                  children: [
                    b.jsx("div", {
                      className:
                        "text-[9px] font-mono text-[var(--text-secondary)] uppercase mb-1",
                      children: "Avg Node Fail",
                    }),
                    b.jsxs("div", {
                      className: "font-head text-lg text-[var(--text-primary)]",
                      children: [
                        ((J = n.monitoring) == null
                          ? void 0
                          : J.avg_node_fail_rate) ?? "0.00",
                        "%",
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
        b.jsxs("div", {
          className:
            "bg-[var(--bg-secondary)] border border-[var(--border-color)] overflow-hidden",
          children: [
            b.jsxs("div", {
              className:
                "p-4 border-b border-[var(--border-color)] flex justify-between items-center",
              children: [
                b.jsx("h3", {
                  className:
                    "font-head text-sm uppercase text-[var(--text-primary)]",
                  children: "Last 5 Realtime Requests",
                }),
                b.jsx("span", {
                  className:
                    "text-[9px] font-mono text-[var(--text-secondary)]",
                  children: "IP MASKED",
                }),
              ],
            }),
            b.jsx("div", {
              className: "md:hidden p-3 space-y-2",
              children: z.map((Z, rt) =>
                b.jsxs(
                  "div",
                  {
                    className:
                      "border border-[var(--border-color)] bg-[var(--bg-primary)] p-3",
                    children: [
                      b.jsxs("div", {
                        className: "flex items-center justify-between mb-2",
                        children: [
                          b.jsx("span", {
                            className:
                              "text-[10px] font-mono text-[var(--text-secondary)]",
                            children: D(Z.ts),
                          }),
                          b.jsx("span", {
                            className: `text-[11px] font-bold ${F(Z.status)}`,
                            children: Z.status,
                          }),
                        ],
                      }),
                      b.jsxs("div", {
                        className:
                          "text-[12px] text-[var(--text-primary)] font-body leading-tight",
                        children: [Z.method, " ", Z.endpoint],
                      }),
                      b.jsxs("div", {
                        className:
                          "mt-2 grid grid-cols-2 gap-1 text-[10px] font-body",
                        children: [
                          b.jsxs("span", {
                            className: "text-[var(--text-secondary)]",
                            children: [
                              "IP: ",
                              b.jsx("span", {
                                className: "text-[var(--text-primary)]",
                                children: Z.ip,
                              }),
                            ],
                          }),
                          b.jsxs("span", {
                            className: "text-[var(--text-secondary)]",
                            children: [
                              "Latency: ",
                              b.jsxs("span", {
                                className: "text-[var(--text-primary)]",
                                children: [Z.latency_ms, "ms"],
                              }),
                            ],
                          }),
                        ],
                      }),
                      b.jsxs("div", {
                        className:
                          "text-[10px] font-body text-[var(--text-secondary)] truncate mt-1",
                        title: Z.user_agent,
                        children: ["UA: ", Z.user_agent],
                      }),
                    ],
                  },
                  `${Z.ts}-${rt}`,
                ),
              ),
            }),
            b.jsx("div", {
              className: "hidden md:block overflow-x-auto",
              children: b.jsxs("table", {
                className: "w-full text-left",
                children: [
                  b.jsx("thead", {
                    className:
                      "border-b border-[var(--border-color)] bg-[var(--bg-primary)]",
                    children: b.jsxs("tr", {
                      className:
                        "text-[9px] text-[var(--text-secondary)] uppercase font-mono",
                      children: [
                        b.jsx("th", {
                          className: "py-3 px-4",
                          children: "When",
                        }),
                        b.jsx("th", {
                          className: "py-3 px-4",
                          children: "Route",
                        }),
                        b.jsx("th", {
                          className: "py-3 px-4",
                          children: "IP",
                        }),
                        b.jsx("th", {
                          className: "py-3 px-4",
                          children: "UA",
                        }),
                        b.jsx("th", {
                          className: "py-3 px-4 text-right",
                          children: "Status",
                        }),
                      ],
                    }),
                  }),
                  b.jsx("tbody", {
                    className: "text-[12px] font-body",
                    children: z.map((Z, rt) =>
                      b.jsxs(
                        "tr",
                        {
                          className:
                            "border-b border-[var(--border-color)]/30 hover:bg-[var(--bg-primary)]/50",
                          children: [
                            b.jsx("td", {
                              className:
                                "py-3 px-4 text-[var(--text-secondary)] font-mono text-[10px]",
                              children: D(Z.ts),
                            }),
                            b.jsxs("td", {
                              className: "py-3 px-4 text-[var(--text-primary)]",
                              children: [Z.method, " ", Z.endpoint],
                            }),
                            b.jsx("td", {
                              className:
                                "py-3 px-4 text-[var(--text-secondary)] font-mono text-[10px]",
                              children: Z.ip,
                            }),
                            b.jsx("td", {
                              className:
                                "py-3 px-4 text-[var(--text-secondary)] max-w-[260px] truncate",
                              title: Z.user_agent,
                              children: Z.user_agent,
                            }),
                            b.jsxs("td", {
                              className: "py-3 px-4 text-right",
                              children: [
                                b.jsx("span", {
                                  className: `font-bold ${F(Z.status)}`,
                                  children: Z.status,
                                }),
                                b.jsxs("span", {
                                  className:
                                    "text-[var(--text-secondary)] ml-2",
                                  children: [Z.latency_ms, "ms"],
                                }),
                                Z.failover_attempts > 0 &&
                                  b.jsxs("span", {
                                    className: "text-yellow-400 ml-2",
                                    children: ["F", Z.failover_attempts],
                                  }),
                              ],
                            }),
                          ],
                        },
                        `${Z.ts}-${rt}`,
                      ),
                    ),
                  }),
                ],
              }),
            }),
          ],
        }),
        b.jsxs("div", {
          className: "grid grid-cols-1 md:grid-cols-2 gap-4 mb-8",
          children: [
            b.jsxs("div", {
              className:
                "bg-[var(--bg-secondary)] border border-[var(--border-color)] p-6",
              children: [
                b.jsxs("div", {
                  className: "flex justify-between items-center mb-4",
                  children: [
                    b.jsx("h3", {
                      className:
                        "font-head text-sm uppercase text-[var(--text-primary)]",
                      children: "Request History",
                    }),
                    b.jsx("span", {
                      className:
                        "text-[9px] font-mono text-[var(--text-secondary)]",
                      children: "DAILY",
                    }),
                  ],
                }),
                b.jsx("div", {
                  className: "h-40",
                  children: b.jsx("canvas", { ref: _ }),
                }),
              ],
            }),
            b.jsxs("div", {
              className:
                "bg-[var(--bg-secondary)] border border-[var(--border-color)] p-6",
              children: [
                b.jsxs("div", {
                  className: "flex justify-between items-center mb-4",
                  children: [
                    b.jsx("h3", {
                      className:
                        "font-head text-sm uppercase text-[var(--text-primary)]",
                      children: "Attack History",
                    }),
                    b.jsx("span", {
                      className:
                        "text-[9px] font-mono text-[var(--text-secondary)]",
                      children: "DAILY",
                    }),
                  ],
                }),
                b.jsx("div", {
                  className: "h-40",
                  children: b.jsx("canvas", { ref: S }),
                }),
              ],
            }),
          ],
        }),
        b.jsxs("div", {
          className:
            "bg-[var(--bg-secondary)] border border-[var(--border-color)] p-6 mb-8",
          children: [
            b.jsx("h3", {
              className:
                "font-head text-sm uppercase text-[var(--text-primary)] mb-4",
              children: "Error Rate Overview",
            }),
            b.jsxs("div", {
              className: "flex items-center gap-6",
              children: [
                b.jsxs("div", {
                  className: "flex-1",
                  children: [
                    b.jsxs("div", {
                      className: "flex justify-between text-xs mb-1",
                      children: [
                        b.jsx("span", {
                          className: "font-mono text-green-400",
                          children: "SUCCESS",
                        }),
                        b.jsxs("span", {
                          className: "font-mono text-green-400",
                          children: [it, "%"],
                        }),
                      ],
                    }),
                    b.jsx("div", {
                      className: "w-full h-2 bg-[var(--bg-primary)]",
                      children: b.jsx("div", {
                        className:
                          "h-full bg-green-500 transition-all duration-700",
                        style: { width: `${it}%` },
                      }),
                    }),
                  ],
                }),
                b.jsxs("div", {
                  className: "flex-1",
                  children: [
                    b.jsxs("div", {
                      className: "flex justify-between text-xs mb-1",
                      children: [
                        b.jsx("span", {
                          className: "font-mono text-yellow-400",
                          children: "ERRORS",
                        }),
                        b.jsxs("span", {
                          className: "font-mono text-yellow-400",
                          children: [lt, "%"],
                        }),
                      ],
                    }),
                    b.jsx("div", {
                      className: "w-full h-2 bg-[var(--bg-primary)]",
                      children: b.jsx("div", {
                        className:
                          "h-full bg-yellow-500 transition-all duration-700",
                        style: { width: `${lt}%` },
                      }),
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
        b.jsxs("div", {
          className:
            "bg-[var(--bg-secondary)] border border-[var(--border-color)] overflow-hidden",
          children: [
            b.jsxs("div", {
              className:
                "p-4 border-b border-[var(--border-color)] flex justify-between items-center",
              children: [
                b.jsx("h3", {
                  className:
                    "font-head text-sm uppercase text-[var(--text-primary)]",
                  children: "Top Endpoints",
                }),
                b.jsx("span", {
                  className:
                    "text-[9px] font-mono text-[var(--text-secondary)]",
                  children: "CLICK ROW FOR LIVE DETAIL",
                }),
              ],
            }),
            b.jsx("div", {
              className: "overflow-x-auto",
              children: b.jsxs("table", {
                className: "w-full text-left",
                children: [
                  b.jsx("thead", {
                    className:
                      "border-b border-[var(--border-color)] bg-[var(--bg-primary)]",
                    children: b.jsxs("tr", {
                      className:
                        "text-[9px] text-[var(--text-secondary)] uppercase font-mono",
                      children: [
                        b.jsx("th", {
                          className: "py-3 px-4",
                          children: "#",
                        }),
                        b.jsx("th", {
                          className: "py-3 px-4",
                          children: "Endpoint",
                        }),
                        b.jsx("th", {
                          className: "py-3 px-4 text-right",
                          children: "Req",
                        }),
                        b.jsx("th", {
                          className: "py-3 px-4 text-right",
                          children: "Succ%",
                        }),
                        b.jsx("th", {
                          className: "py-3 px-4 text-right",
                          children: "Err%",
                        }),
                      ],
                    }),
                  }),
                  b.jsx("tbody", {
                    className: "text-xs font-mono",
                    children: G.map((Z, rt) => {
                      const ie = X * R + rt + 1;
                      return b.jsxs(
                        "tr",
                        {
                          className:
                            "border-b border-[var(--border-color)]/30 cursor-pointer hover:bg-[var(--bg-primary)]/50",
                          onClick: () => {
                            (d(Z.endpoint), g(!0));
                          },
                          children: [
                            b.jsx("td", {
                              className:
                                "py-3 px-4 text-[var(--text-secondary)]",
                              children: ie,
                            }),
                            b.jsx("td", {
                              className:
                                "py-3 px-4 text-[var(--text-primary)] truncate max-w-[230px]",
                              children: Z.endpoint,
                            }),
                            b.jsx("td", {
                              className:
                                "py-3 px-4 text-right text-[var(--text-primary)]",
                              children: j(Z.requests),
                            }),
                            b.jsxs("td", {
                              className: "py-3 px-4 text-right text-green-400",
                              children: [Z.success_rate, "%"],
                            }),
                            b.jsxs("td", {
                              className: "py-3 px-4 text-right text-yellow-400",
                              children: [Z.error_rate, "%"],
                            }),
                          ],
                        },
                        `${Z.endpoint}-${ie}`,
                      );
                    }),
                  }),
                ],
              }),
            }),
            b.jsxs("div", {
              className:
                "p-4 border-t border-[var(--border-color)] flex items-center justify-between",
              children: [
                b.jsxs("span", {
                  className:
                    "text-[10px] font-mono text-[var(--text-secondary)]",
                  children: ["PAGE ", X + 1, "/", P],
                }),
                b.jsxs("div", {
                  className: "flex gap-2",
                  children: [
                    b.jsx("button", {
                      className:
                        "px-3 py-1.5 text-[10px] font-mono border border-[var(--border-color)] text-[var(--text-secondary)] disabled:opacity-40",
                      onClick: () => r((Z) => Math.max(0, Z - 1)),
                      disabled: X === 0,
                      children: "PREV 5",
                    }),
                    b.jsx("button", {
                      className:
                        "px-3 py-1.5 text-[10px] font-mono border border-[var(--border-color)] text-[var(--text-primary)] disabled:opacity-40",
                      onClick: () => r((Z) => Math.min(P - 1, Z + 1)),
                      disabled: X >= P - 1,
                      children: "NEXT 5",
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
        h &&
          W &&
          b.jsx("div", {
            className:
              "fixed inset-0 z-50 bg-black/65 backdrop-blur-[1px] fade-in flex items-center justify-center px-4",
            onClick: () => g(!1),
            children: b.jsxs("div", {
              className:
                "fade-in w-full max-w-2xl max-h-[85vh] overflow-y-auto bg-[var(--bg-secondary)] border border-[var(--border-color)] shadow-[0_18px_80px_rgba(0,0,0,0.45)]",
              onClick: (Z) => Z.stopPropagation(),
              children: [
                b.jsxs("div", {
                  className:
                    "sticky top-0 z-10 bg-[var(--bg-secondary)] px-4 py-3 flex items-center justify-between border-b border-[var(--border-color)]",
                  children: [
                    b.jsx("h3", {
                      className:
                        "font-head text-sm md:text-base text-[var(--text-primary)] uppercase truncate pr-3",
                      children: "Endpoint Detail",
                    }),
                    b.jsx("button", {
                      type: "button",
                      className:
                        "shrink-0 w-8 h-8 flex items-center justify-center border border-[var(--border-color)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[#2563EB] transition-colors",
                      onClick: () => g(!1),
                      children: b.jsx("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        strokeWidth: "2",
                        stroke: "currentColor",
                        className: "w-4 h-4",
                        children: b.jsx("path", {
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          d: "M6 18L18 6M6 6l12 12",
                        }),
                      }),
                    }),
                  ],
                }),
                b.jsxs("div", {
                  className: "p-4",
                  children: [
                    b.jsxs("div", {
                      className:
                        "bg-[var(--bg-primary)] border border-[var(--border-color)] p-2 mb-3",
                      children: [
                        b.jsx("div", {
                          className:
                            "text-[9px] text-[var(--text-secondary)] font-mono",
                          children: "ROUTE",
                        }),
                        b.jsx("div", {
                          className:
                            "font-mono text-[11px] text-[var(--text-primary)] break-all",
                          children: W.endpoint,
                        }),
                      ],
                    }),
                    b.jsxs("div", {
                      className: "grid grid-cols-4 gap-2 mb-3",
                      children: [
                        b.jsxs("div", {
                          className:
                            "p-2 bg-[var(--bg-primary)] border border-[var(--border-color)] text-center",
                          children: [
                            b.jsx("div", {
                              className:
                                "text-[8px] text-[var(--text-secondary)] font-mono",
                              children: "REQ",
                            }),
                            b.jsx("div", {
                              className:
                                "font-head text-base text-[var(--text-primary)]",
                              children: j(W.requests),
                            }),
                          ],
                        }),
                        b.jsxs("div", {
                          className:
                            "p-2 bg-[var(--bg-primary)] border border-[var(--border-color)] text-center",
                          children: [
                            b.jsx("div", {
                              className:
                                "text-[8px] text-[var(--text-secondary)] font-mono",
                              children: "LAT",
                            }),
                            b.jsxs("div", {
                              className:
                                "font-head text-base text-[var(--text-primary)]",
                              children: [W.ewma_latency_ms, "ms"],
                            }),
                          ],
                        }),
                        b.jsxs("div", {
                          className:
                            "p-2 bg-[var(--bg-primary)] border border-[var(--border-color)] text-center",
                          children: [
                            b.jsx("div", {
                              className:
                                "text-[8px] text-[var(--text-secondary)] font-mono",
                              children: "SUCC",
                            }),
                            b.jsxs("div", {
                              className: "font-head text-base text-green-400",
                              children: [W.success_rate, "%"],
                            }),
                          ],
                        }),
                        b.jsxs("div", {
                          className:
                            "p-2 bg-[var(--bg-primary)] border border-[var(--border-color)] text-center",
                          children: [
                            b.jsx("div", {
                              className:
                                "text-[8px] text-[var(--text-secondary)] font-mono",
                              children: "ERR",
                            }),
                            b.jsxs("div", {
                              className: "font-head text-base text-yellow-400",
                              children: [W.error_rate, "%"],
                            }),
                          ],
                        }),
                      ],
                    }),
                    b.jsxs("div", {
                      className:
                        "grid grid-cols-2 gap-2 mb-3 text-[9px] font-mono",
                      children: [
                        b.jsxs("div", {
                          className: "text-[var(--text-secondary)]",
                          children: [
                            "Bayesian ",
                            b.jsx("span", {
                              className: "text-[var(--text-primary)]",
                              children: W.aether.bayesian_confidence,
                            }),
                          ],
                        }),
                        b.jsxs("div", {
                          className: "text-[var(--text-secondary)]",
                          children: [
                            "Kalman ",
                            b.jsx("span", {
                              className: "text-[var(--text-primary)]",
                              children: W.aether.kalman_uncertainty,
                            }),
                          ],
                        }),
                        b.jsxs("div", {
                          className: "text-[var(--text-secondary)]",
                          children: [
                            "Lyapunov ",
                            b.jsx("span", {
                              className: "text-[var(--text-primary)]",
                              children: W.aether.lyapunov_exponent,
                            }),
                          ],
                        }),
                        b.jsxs("div", {
                          className: "text-[var(--text-secondary)]",
                          children: [
                            "Stability ",
                            b.jsx("span", {
                              className: "text-[var(--text-primary)]",
                              children: W.aether.stability_class,
                            }),
                          ],
                        }),
                      ],
                    }),
                    b.jsxs("div", {
                      children: [
                        b.jsx("div", {
                          className:
                            "text-[9px] text-[var(--text-secondary)] font-mono mb-2",
                          children: "NODES",
                        }),
                        b.jsx("div", {
                          className: "space-y-1 max-h-40 overflow-y-auto pr-1",
                          children: W.nodes.map((Z, rt) =>
                            b.jsxs(
                              "div",
                              {
                                className:
                                  "flex items-center justify-between text-[9px] font-mono bg-[var(--bg-primary)] border border-[var(--border-color)] px-2 py-1",
                                children: [
                                  b.jsx("span", {
                                    className:
                                      "text-[var(--text-primary)] truncate flex-1 mr-2",
                                    children: Z.node,
                                  }),
                                  b.jsxs("span", {
                                    className: "text-[var(--text-secondary)]",
                                    children: ["req ", Z.success + Z.fail],
                                  }),
                                  b.jsx("span", {
                                    className: "text-green-400 ml-1",
                                    children: Z.success,
                                  }),
                                  b.jsx("span", {
                                    className: "text-yellow-400 ml-1",
                                    children: Z.fail,
                                  }),
                                  b.jsxs("span", {
                                    className:
                                      "text-[var(--text-secondary)] ml-1",
                                    children: [Z.ewma_latency_ms, "ms"],
                                  }),
                                ],
                              },
                              `${Z.node}-${rt}`,
                            ),
                          ),
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          }),
        p &&
          b.jsx("div", {
            className:
              "fixed inset-0 z-50 bg-black/65 backdrop-blur-[1px] fade-in flex items-center justify-center px-4",
            onClick: () => y(null),
            children: b.jsxs("div", {
              className:
                "fade-in w-full max-w-md max-h-[85vh] overflow-y-auto bg-[var(--bg-secondary)] border border-[var(--border-color)] shadow-[0_18px_80px_rgba(0,0,0,0.45)]",
              onClick: (Z) => Z.stopPropagation(),
              children: [
                b.jsxs("div", {
                  className:
                    "sticky top-0 z-10 bg-[var(--bg-secondary)] px-4 py-3 flex items-center justify-between border-b border-[var(--border-color)]",
                  children: [
                    b.jsxs("h3", {
                      className:
                        "font-head text-sm md:text-base text-[var(--text-primary)] uppercase truncate pr-3",
                      children: ["Node - ", p.name],
                    }),
                    b.jsx("button", {
                      type: "button",
                      className:
                        "shrink-0 w-8 h-8 flex items-center justify-center border border-[var(--border-color)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[#2563EB] transition-colors",
                      onClick: () => y(null),
                      children: b.jsx("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        strokeWidth: "2",
                        stroke: "currentColor",
                        className: "w-4 h-4",
                        children: b.jsx("path", {
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          d: "M6 18L18 6M6 6l12 12",
                        }),
                      }),
                    }),
                  ],
                }),
                b.jsxs("div", {
                  className: "p-4",
                  children: [
                    b.jsxs("div", {
                      className: "grid grid-cols-2 gap-2 mb-3",
                      children: [
                        b.jsxs("div", {
                          className:
                            "p-2 bg-[var(--bg-primary)] border border-[var(--border-color)] text-center",
                          children: [
                            b.jsx("div", {
                              className:
                                "text-[8px] text-[var(--text-secondary)] font-mono",
                              children: "STATUS",
                            }),
                            b.jsx("div", {
                              className:
                                p.status === "healthy"
                                  ? "text-green-400 font-body text-sm font-bold"
                                  : "text-red-400 font-body text-sm font-bold",
                              children: p.status,
                            }),
                          ],
                        }),
                        b.jsxs("div", {
                          className:
                            "p-2 bg-[var(--bg-primary)] border border-[var(--border-color)] text-center",
                          children: [
                            b.jsx("div", {
                              className:
                                "text-[8px] text-[var(--text-secondary)] font-mono",
                              children: "LATENCY",
                            }),
                            b.jsxs("div", {
                              className:
                                "text-[var(--text-primary)] font-body text-sm font-bold",
                              children: [p.latency_ms, "ms"],
                            }),
                          ],
                        }),
                        b.jsxs("div", {
                          className:
                            "p-2 bg-[var(--bg-primary)] border border-[var(--border-color)] text-center",
                          children: [
                            b.jsx("div", {
                              className:
                                "text-[8px] text-[var(--text-secondary)] font-mono",
                              children: "CONN",
                            }),
                            b.jsx("div", {
                              className:
                                "text-[var(--text-primary)] font-body text-sm font-bold",
                              children: p.conns ?? 0,
                            }),
                          ],
                        }),
                        b.jsxs("div", {
                          className:
                            "p-2 bg-[var(--bg-primary)] border border-[var(--border-color)] text-center",
                          children: [
                            b.jsx("div", {
                              className:
                                "text-[8px] text-[var(--text-secondary)] font-mono",
                              children: "FAIL",
                            }),
                            b.jsx("div", {
                              className:
                                "text-[var(--text-primary)] font-body text-sm font-bold",
                              children: p.failure_rate ?? "0.0000",
                            }),
                          ],
                        }),
                      ],
                    }),
                    b.jsxs("div", {
                      className:
                        "space-y-1 text-[11px] font-body bg-[var(--bg-primary)] border border-[var(--border-color)] p-3",
                      children: [
                        b.jsxs("div", {
                          className: "text-[var(--text-secondary)]",
                          children: [
                            "CPU ",
                            b.jsxs("span", {
                              className: "text-[var(--text-primary)]",
                              children: [
                                ((mt = p.system) == null
                                  ? void 0
                                  : mt.cpu_model) ?? "N/A",
                                " (",
                                (vt = p.system) == null ? void 0 : vt.cpu_cores,
                                "c)",
                              ],
                            }),
                          ],
                        }),
                        b.jsxs("div", {
                          className: "text-[var(--text-secondary)]",
                          children: [
                            "RAM ",
                            b.jsxs("span", {
                              className: "text-[var(--text-primary)]",
                              children: [
                                (_e = p.system) == null
                                  ? void 0
                                  : _e.memory_used_mb,
                                "MB / ",
                                (Re = p.system) == null
                                  ? void 0
                                  : Re.memory_total_mb,
                                "MB (",
                                (Qt = p.system) == null
                                  ? void 0
                                  : Qt.memory_usage_percent,
                                "%)",
                              ],
                            }),
                          ],
                        }),
                        b.jsxs("div", {
                          className: "text-[var(--text-secondary)]",
                          children: [
                            "Disk ",
                            b.jsxs("span", {
                              className: "text-[var(--text-primary)]",
                              children: [
                                (Jt = p.system) == null
                                  ? void 0
                                  : Jt.disk_used_gb,
                                "GB / ",
                                (Kt = p.system) == null
                                  ? void 0
                                  : Kt.disk_total_gb,
                                "GB (",
                                (ge = p.system) == null
                                  ? void 0
                                  : ge.disk_usage_percent,
                                ")",
                              ],
                            }),
                          ],
                        }),
                        b.jsxs("div", {
                          className: "text-[var(--text-secondary)]",
                          children: [
                            "Runtime ",
                            b.jsxs("span", {
                              className: "text-[var(--text-primary)]",
                              children: [
                                ((un = p.system) == null
                                  ? void 0
                                  : un.runtime_engine) ?? "N/A",
                                " ",
                                ((Hn = p.system) == null
                                  ? void 0
                                  : Hn.runtime_version) ?? "",
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          }),
      ],
    }),
  });
};
function jk() {
  return b.jsx(Ck, {});
}
export default jk;

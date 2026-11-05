import { ClayHero, BackToTop } from "./clay.js";
import { loadCatalog } from "./services.js";
var K2 = Object.defineProperty;
var W2 = (n, t, i) =>
  t in n
    ? K2(n, t, { enumerable: !0, configurable: !0, writable: !0, value: i })
    : (n[t] = i);
var K = (n, t, i) => W2(n, typeof t != "symbol" ? t + "" : t, i);
import {
  r as $2,
  a as I2,
  g as J2,
  b as at,
  u as H0,
  B as t1,
  c as e1,
  R as n1,
  d as _l,
  e as i1,
} from "./vendor-DHMKXF-P.js";
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) a(o);
  new MutationObserver((o) => {
    for (const r of o)
      if (r.type === "childList")
        for (const u of r.addedNodes)
          u.tagName === "LINK" && u.rel === "modulepreload" && a(u);
  }).observe(document, { childList: !0, subtree: !0 });
  function i(o) {
    const r = {};
    return (
      o.integrity && (r.integrity = o.integrity),
      o.referrerPolicy && (r.referrerPolicy = o.referrerPolicy),
      o.crossOrigin === "use-credentials"
        ? (r.credentials = "include")
        : o.crossOrigin === "anonymous"
          ? (r.credentials = "omit")
          : (r.credentials = "same-origin"),
      r
    );
  }
  function a(o) {
    if (o.ep) return;
    o.ep = !0;
    const r = i(o);
    fetch(o.href, r);
  }
})();
var zd = { exports: {} },
  Sl = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Wp;
function s1() {
  if (Wp) return Sl;
  Wp = 1;
  var n = Symbol.for("react.transitional.element"),
    t = Symbol.for("react.fragment");
  function i(a, o, r) {
    var u = null;
    if (
      (r !== void 0 && (u = "" + r),
      o.key !== void 0 && (u = "" + o.key),
      "key" in o)
    ) {
      r = {};
      for (var d in o) d !== "key" && (r[d] = o[d]);
    } else r = o;
    return (
      (o = r.ref),
      { $$typeof: n, type: a, key: u, ref: o !== void 0 ? o : null, props: r }
    );
  }
  return ((Sl.Fragment = t), (Sl.jsx = i), (Sl.jsxs = i), Sl);
}
var $p;
function a1() {
  return ($p || (($p = 1), (zd.exports = s1())), zd.exports);
}
var b = a1(),
  Dd = { exports: {} },
  Ml = {},
  Ld = { exports: {} },
  Bd = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ip;
function l1() {
  return (
    Ip ||
      ((Ip = 1),
      (function (n) {
        function t(D, F) {
          var I = D.length;
          D.push(F);
          t: for (; 0 < I;) {
            var ct = (I - 1) >>> 1,
              pt = D[ct];
            if (0 < o(pt, F)) ((D[ct] = F), (D[I] = pt), (I = ct));
            else break t;
          }
        }
        function i(D) {
          return D.length === 0 ? null : D[0];
        }
        function a(D) {
          if (D.length === 0) return null;
          var F = D[0],
            I = D.pop();
          if (I !== F) {
            D[0] = I;
            t: for (var ct = 0, pt = D.length, Xt = pt >>> 1; ct < Xt;) {
              var Mt = 2 * (ct + 1) - 1,
                ft = D[Mt],
                kt = Mt + 1,
                Q = D[kt];
              if (0 > o(ft, I))
                kt < pt && 0 > o(Q, ft)
                  ? ((D[ct] = Q), (D[kt] = I), (ct = kt))
                  : ((D[ct] = ft), (D[Mt] = I), (ct = Mt));
              else if (kt < pt && 0 > o(Q, I))
                ((D[ct] = Q), (D[kt] = I), (ct = kt));
              else break t;
            }
          }
          return F;
        }
        function o(D, F) {
          var I = D.sortIndex - F.sortIndex;
          return I !== 0 ? I : D.id - F.id;
        }
        if (
          ((n.unstable_now = void 0),
          typeof performance == "object" &&
            typeof performance.now == "function")
        ) {
          var r = performance;
          n.unstable_now = function () {
            return r.now();
          };
        } else {
          var u = Date,
            d = u.now();
          n.unstable_now = function () {
            return u.now() - d;
          };
        }
        var h = [],
          g = [],
          p = 1,
          y = null,
          v = 3,
          _ = !1,
          S = !1,
          M = !1,
          k = !1,
          j = typeof setTimeout == "function" ? setTimeout : null,
          z = typeof clearTimeout == "function" ? clearTimeout : null,
          U = typeof setImmediate < "u" ? setImmediate : null;
        function q(D) {
          for (var F = i(g); F !== null;) {
            if (F.callback === null) a(g);
            else if (F.startTime <= D)
              (a(g), (F.sortIndex = F.expirationTime), t(h, F));
            else break;
            F = i(g);
          }
        }
        function R(D) {
          if (((M = !1), q(D), !S))
            if (i(h) !== null) ((S = !0), P || ((P = !0), $()));
            else {
              var F = i(g);
              F !== null && ut(R, F.startTime - D);
            }
        }
        var P = !1,
          X = -1,
          G = 5,
          W = -1;
        function lt() {
          return k ? !0 : !(n.unstable_now() - W < G);
        }
        function it() {
          if (((k = !1), P)) {
            var D = n.unstable_now();
            W = D;
            var F = !0;
            try {
              t: {
                ((S = !1), M && ((M = !1), z(X), (X = -1)), (_ = !0));
                var I = v;
                try {
                  e: {
                    for (
                      q(D), y = i(h);
                      y !== null && !(y.expirationTime > D && lt());
                    ) {
                      var ct = y.callback;
                      if (typeof ct == "function") {
                        ((y.callback = null), (v = y.priorityLevel));
                        var pt = ct(y.expirationTime <= D);
                        if (((D = n.unstable_now()), typeof pt == "function")) {
                          ((y.callback = pt), q(D), (F = !0));
                          break e;
                        }
                        (y === i(h) && a(h), q(D));
                      } else a(h);
                      y = i(h);
                    }
                    if (y !== null) F = !0;
                    else {
                      var Xt = i(g);
                      (Xt !== null && ut(R, Xt.startTime - D), (F = !1));
                    }
                  }
                  break t;
                } finally {
                  ((y = null), (v = I), (_ = !1));
                }
                F = void 0;
              }
            } finally {
              F ? $() : (P = !1);
            }
          }
        }
        var $;
        if (typeof U == "function")
          $ = function () {
            U(it);
          };
        else if (typeof MessageChannel < "u") {
          var Vt = new MessageChannel(),
            Yt = Vt.port2;
          ((Vt.port1.onmessage = it),
            ($ = function () {
              Yt.postMessage(null);
            }));
        } else
          $ = function () {
            j(it, 0);
          };
        function ut(D, F) {
          X = j(function () {
            D(n.unstable_now());
          }, F);
        }
        ((n.unstable_IdlePriority = 5),
          (n.unstable_ImmediatePriority = 1),
          (n.unstable_LowPriority = 4),
          (n.unstable_NormalPriority = 3),
          (n.unstable_Profiling = null),
          (n.unstable_UserBlockingPriority = 2),
          (n.unstable_cancelCallback = function (D) {
            D.callback = null;
          }),
          (n.unstable_forceFrameRate = function (D) {
            0 > D || 125 < D
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
                )
              : (G = 0 < D ? Math.floor(1e3 / D) : 5);
          }),
          (n.unstable_getCurrentPriorityLevel = function () {
            return v;
          }),
          (n.unstable_next = function (D) {
            switch (v) {
              case 1:
              case 2:
              case 3:
                var F = 3;
                break;
              default:
                F = v;
            }
            var I = v;
            v = F;
            try {
              return D();
            } finally {
              v = I;
            }
          }),
          (n.unstable_requestPaint = function () {
            k = !0;
          }),
          (n.unstable_runWithPriority = function (D, F) {
            switch (D) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                D = 3;
            }
            var I = v;
            v = D;
            try {
              return F();
            } finally {
              v = I;
            }
          }),
          (n.unstable_scheduleCallback = function (D, F, I) {
            var ct = n.unstable_now();
            switch (
              (typeof I == "object" && I !== null
                ? ((I = I.delay),
                  (I = typeof I == "number" && 0 < I ? ct + I : ct))
                : (I = ct),
              D)
            ) {
              case 1:
                var pt = -1;
                break;
              case 2:
                pt = 250;
                break;
              case 5:
                pt = 1073741823;
                break;
              case 4:
                pt = 1e4;
                break;
              default:
                pt = 5e3;
            }
            return (
              (pt = I + pt),
              (D = {
                id: p++,
                callback: F,
                priorityLevel: D,
                startTime: I,
                expirationTime: pt,
                sortIndex: -1,
              }),
              I > ct
                ? ((D.sortIndex = I),
                  t(g, D),
                  i(h) === null &&
                    D === i(g) &&
                    (M ? (z(X), (X = -1)) : (M = !0), ut(R, I - ct)))
                : ((D.sortIndex = pt),
                  t(h, D),
                  S || _ || ((S = !0), P || ((P = !0), $()))),
              D
            );
          }),
          (n.unstable_shouldYield = lt),
          (n.unstable_wrapCallback = function (D) {
            var F = v;
            return function () {
              var I = v;
              v = F;
              try {
                return D.apply(this, arguments);
              } finally {
                v = I;
              }
            };
          }));
      })(Bd)),
    Bd
  );
}
var Jp;
function o1() {
  return (Jp || ((Jp = 1), (Ld.exports = l1())), Ld.exports);
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var tb;
function r1() {
  if (tb) return Ml;
  tb = 1;
  var n = o1(),
    t = $2(),
    i = I2();
  function a(e) {
    var s = "https://react.dev/errors/" + e;
    if (1 < arguments.length) {
      s += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var l = 2; l < arguments.length; l++)
        s += "&args[]=" + encodeURIComponent(arguments[l]);
    }
    return (
      "Minified React error #" +
      e +
      "; visit " +
      s +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function o(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  function r(e) {
    var s = e,
      l = e;
    if (e.alternate) for (; s.return;) s = s.return;
    else {
      e = s;
      do ((s = e), (s.flags & 4098) !== 0 && (l = s.return), (e = s.return));
      while (e);
    }
    return s.tag === 3 ? l : null;
  }
  function u(e) {
    if (e.tag === 13) {
      var s = e.memoizedState;
      if (
        (s === null && ((e = e.alternate), e !== null && (s = e.memoizedState)),
        s !== null)
      )
        return s.dehydrated;
    }
    return null;
  }
  function d(e) {
    if (e.tag === 31) {
      var s = e.memoizedState;
      if (
        (s === null && ((e = e.alternate), e !== null && (s = e.memoizedState)),
        s !== null)
      )
        return s.dehydrated;
    }
    return null;
  }
  function h(e) {
    if (r(e) !== e) throw Error(a(188));
  }
  function g(e) {
    var s = e.alternate;
    if (!s) {
      if (((s = r(e)), s === null)) throw Error(a(188));
      return s !== e ? null : e;
    }
    for (var l = e, c = s; ;) {
      var f = l.return;
      if (f === null) break;
      var m = f.alternate;
      if (m === null) {
        if (((c = f.return), c !== null)) {
          l = c;
          continue;
        }
        break;
      }
      if (f.child === m.child) {
        for (m = f.child; m;) {
          if (m === l) return (h(f), e);
          if (m === c) return (h(f), s);
          m = m.sibling;
        }
        throw Error(a(188));
      }
      if (l.return !== c.return) ((l = f), (c = m));
      else {
        for (var x = !1, w = f.child; w;) {
          if (w === l) {
            ((x = !0), (l = f), (c = m));
            break;
          }
          if (w === c) {
            ((x = !0), (c = f), (l = m));
            break;
          }
          w = w.sibling;
        }
        if (!x) {
          for (w = m.child; w;) {
            if (w === l) {
              ((x = !0), (l = m), (c = f));
              break;
            }
            if (w === c) {
              ((x = !0), (c = m), (l = f));
              break;
            }
            w = w.sibling;
          }
          if (!x) throw Error(a(189));
        }
      }
      if (l.alternate !== c) throw Error(a(190));
    }
    if (l.tag !== 3) throw Error(a(188));
    return l.stateNode.current === l ? e : s;
  }
  function p(e) {
    var s = e.tag;
    if (s === 5 || s === 26 || s === 27 || s === 6) return e;
    for (e = e.child; e !== null;) {
      if (((s = p(e)), s !== null)) return s;
      e = e.sibling;
    }
    return null;
  }
  var y = Object.assign,
    v = Symbol.for("react.element"),
    _ = Symbol.for("react.transitional.element"),
    S = Symbol.for("react.portal"),
    M = Symbol.for("react.fragment"),
    k = Symbol.for("react.strict_mode"),
    j = Symbol.for("react.profiler"),
    z = Symbol.for("react.consumer"),
    U = Symbol.for("react.context"),
    q = Symbol.for("react.forward_ref"),
    R = Symbol.for("react.suspense"),
    P = Symbol.for("react.suspense_list"),
    X = Symbol.for("react.memo"),
    G = Symbol.for("react.lazy"),
    W = Symbol.for("react.activity"),
    lt = Symbol.for("react.memo_cache_sentinel"),
    it = Symbol.iterator;
  function $(e) {
    return e === null || typeof e != "object"
      ? null
      : ((e = (it && e[it]) || e["@@iterator"]),
        typeof e == "function" ? e : null);
  }
  var Vt = Symbol.for("react.client.reference");
  function Yt(e) {
    if (e == null) return null;
    if (typeof e == "function")
      return e.$$typeof === Vt ? null : e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case M:
        return "Fragment";
      case j:
        return "Profiler";
      case k:
        return "StrictMode";
      case R:
        return "Suspense";
      case P:
        return "SuspenseList";
      case W:
        return "Activity";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case S:
          return "Portal";
        case U:
          return e.displayName || "Context";
        case z:
          return (e._context.displayName || "Context") + ".Consumer";
        case q:
          var s = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = s.displayName || s.name || ""),
              (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
            e
          );
        case X:
          return (
            (s = e.displayName || null),
            s !== null ? s : Yt(e.type) || "Memo"
          );
        case G:
          ((s = e._payload), (e = e._init));
          try {
            return Yt(e(s));
          } catch {}
      }
    return null;
  }
  var ut = Array.isArray,
    D = t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    F = i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    I = { pending: !1, data: null, method: null, action: null },
    ct = [],
    pt = -1;
  function Xt(e) {
    return { current: e };
  }
  function Mt(e) {
    0 > pt || ((e.current = ct[pt]), (ct[pt] = null), pt--);
  }
  function ft(e, s) {
    (pt++, (ct[pt] = e.current), (e.current = s));
  }
  var kt = Xt(null),
    Q = Xt(null),
    J = Xt(null),
    mt = Xt(null);
  function vt(e, s) {
    switch ((ft(J, s), ft(Q, e), ft(kt, null), s.nodeType)) {
      case 9:
      case 11:
        e = (e = s.documentElement) && (e = e.namespaceURI) ? yp(e) : 0;
        break;
      default:
        if (((e = s.tagName), (s = s.namespaceURI)))
          ((s = yp(s)), (e = vp(s, e)));
        else
          switch (e) {
            case "svg":
              e = 1;
              break;
            case "math":
              e = 2;
              break;
            default:
              e = 0;
          }
    }
    (Mt(kt), ft(kt, e));
  }
  function _e() {
    (Mt(kt), Mt(Q), Mt(J));
  }
  function Re(e) {
    e.memoizedState !== null && ft(mt, e);
    var s = kt.current,
      l = vp(s, e.type);
    s !== l && (ft(Q, e), ft(kt, l));
  }
  function Qt(e) {
    (Q.current === e && (Mt(kt), Mt(Q)),
      mt.current === e && (Mt(mt), (xl._currentValue = I)));
  }
  var Jt, Kt;
  function ge(e) {
    if (Jt === void 0)
      try {
        throw Error();
      } catch (l) {
        var s = l.stack.trim().match(/\n( *(at )?)/);
        ((Jt = (s && s[1]) || ""),
          (Kt =
            -1 <
            l.stack.indexOf(`
    at`)
              ? " (<anonymous>)"
              : -1 < l.stack.indexOf("@")
                ? "@unknown:0:0"
                : ""));
      }
    return (
      `
` +
      Jt +
      e +
      Kt
    );
  }
  var un = !1;
  function Hn(e, s) {
    if (!e || un) return "";
    un = !0;
    var l = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var c = {
        DetermineComponentFrameRoot: function () {
          try {
            if (s) {
              var Y = function () {
                throw Error();
              };
              if (
                (Object.defineProperty(Y.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                typeof Reflect == "object" && Reflect.construct)
              ) {
                try {
                  Reflect.construct(Y, []);
                } catch (L) {
                  var O = L;
                }
                Reflect.construct(e, [], Y);
              } else {
                try {
                  Y.call();
                } catch (L) {
                  O = L;
                }
                e.call(Y.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (L) {
                O = L;
              }
              (Y = e()) &&
                typeof Y.catch == "function" &&
                Y.catch(function () {});
            }
          } catch (L) {
            if (L && O && typeof L.stack == "string") return [L.stack, O.stack];
          }
          return [null, null];
        },
      };
      c.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var f = Object.getOwnPropertyDescriptor(
        c.DetermineComponentFrameRoot,
        "name",
      );
      f &&
        f.configurable &&
        Object.defineProperty(c.DetermineComponentFrameRoot, "name", {
          value: "DetermineComponentFrameRoot",
        });
      var m = c.DetermineComponentFrameRoot(),
        x = m[0],
        w = m[1];
      if (x && w) {
        var A = x.split(`
`),
          N = w.split(`
`);
        for (
          f = c = 0;
          c < A.length && !A[c].includes("DetermineComponentFrameRoot");
        )
          c++;
        for (; f < N.length && !N[f].includes("DetermineComponentFrameRoot");)
          f++;
        if (c === A.length || f === N.length)
          for (
            c = A.length - 1, f = N.length - 1;
            1 <= c && 0 <= f && A[c] !== N[f];
          )
            f--;
        for (; 1 <= c && 0 <= f; c--, f--)
          if (A[c] !== N[f]) {
            if (c !== 1 || f !== 1)
              do
                if ((c--, f--, 0 > f || A[c] !== N[f])) {
                  var H =
                    `
` + A[c].replace(" at new ", " at ");
                  return (
                    e.displayName &&
                      H.includes("<anonymous>") &&
                      (H = H.replace("<anonymous>", e.displayName)),
                    H
                  );
                }
              while (1 <= c && 0 <= f);
            break;
          }
      }
    } finally {
      ((un = !1), (Error.prepareStackTrace = l));
    }
    return (l = e ? e.displayName || e.name : "") ? ge(l) : "";
  }
  function Z(e, s) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return ge(e.type);
      case 16:
        return ge("Lazy");
      case 13:
        return e.child !== s && s !== null
          ? ge("Suspense Fallback")
          : ge("Suspense");
      case 19:
        return ge("SuspenseList");
      case 0:
      case 15:
        return Hn(e.type, !1);
      case 11:
        return Hn(e.type.render, !1);
      case 1:
        return Hn(e.type, !0);
      case 31:
        return ge("Activity");
      default:
        return "";
    }
  }
  function rt(e) {
    try {
      var s = "",
        l = null;
      do ((s += Z(e, l)), (l = e), (e = e.return));
      while (e);
      return s;
    } catch (c) {
      return (
        `
Error generating stack: ` +
        c.message +
        `
` +
        c.stack
      );
    }
  }
  var ie = Object.prototype.hasOwnProperty,
    se = n.unstable_scheduleCallback,
    He = n.unstable_cancelCallback,
    Un = n.unstable_shouldYield,
    Wi = n.unstable_requestPaint,
    ue = n.unstable_now,
    ze = n.unstable_getCurrentPriorityLevel,
    Ue = n.unstable_ImmediatePriority,
    io = n.unstable_UserBlockingPriority,
    so = n.unstable_NormalPriority,
    Ty = n.unstable_LowPriority,
    Jf = n.unstable_IdlePriority,
    Ny = n.log,
    Oy = n.unstable_setDisableYieldValue,
    Ta = null,
    We = null;
  function hi(e) {
    if (
      (typeof Ny == "function" && Oy(e),
      We && typeof We.setStrictMode == "function")
    )
      try {
        We.setStrictMode(Ta, e);
      } catch {}
  }
  var $e = Math.clz32 ? Math.clz32 : Ly,
    zy = Math.log,
    Dy = Math.LN2;
  function Ly(e) {
    return ((e >>>= 0), e === 0 ? 32 : (31 - ((zy(e) / Dy) | 0)) | 0);
  }
  var ao = 256,
    lo = 262144,
    oo = 4194304;
  function $i(e) {
    var s = e & 42;
    if (s !== 0) return s;
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
        return e & 261888;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return e & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return e;
    }
  }
  function ro(e, s, l) {
    var c = e.pendingLanes;
    if (c === 0) return 0;
    var f = 0,
      m = e.suspendedLanes,
      x = e.pingedLanes;
    e = e.warmLanes;
    var w = c & 134217727;
    return (
      w !== 0
        ? ((c = w & ~m),
          c !== 0
            ? (f = $i(c))
            : ((x &= w),
              x !== 0
                ? (f = $i(x))
                : l || ((l = w & ~e), l !== 0 && (f = $i(l)))))
        : ((w = c & ~m),
          w !== 0
            ? (f = $i(w))
            : x !== 0
              ? (f = $i(x))
              : l || ((l = c & ~e), l !== 0 && (f = $i(l)))),
      f === 0
        ? 0
        : s !== 0 &&
            s !== f &&
            (s & m) === 0 &&
            ((m = f & -f),
            (l = s & -s),
            m >= l || (m === 32 && (l & 4194048) !== 0))
          ? s
          : f
    );
  }
  function Na(e, s) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & s) === 0;
  }
  function By(e, s) {
    switch (e) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return s + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return s + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function th() {
    var e = oo;
    return ((oo <<= 1), (oo & 62914560) === 0 && (oo = 4194304), e);
  }
  function wc(e) {
    for (var s = [], l = 0; 31 > l; l++) s.push(e);
    return s;
  }
  function Oa(e, s) {
    ((e.pendingLanes |= s),
      s !== 268435456 &&
        ((e.suspendedLanes = 0), (e.pingedLanes = 0), (e.warmLanes = 0)));
  }
  function Ry(e, s, l, c, f, m) {
    var x = e.pendingLanes;
    ((e.pendingLanes = l),
      (e.suspendedLanes = 0),
      (e.pingedLanes = 0),
      (e.warmLanes = 0),
      (e.expiredLanes &= l),
      (e.entangledLanes &= l),
      (e.errorRecoveryDisabledLanes &= l),
      (e.shellSuspendCounter = 0));
    var w = e.entanglements,
      A = e.expirationTimes,
      N = e.hiddenUpdates;
    for (l = x & ~l; 0 < l;) {
      var H = 31 - $e(l),
        Y = 1 << H;
      ((w[H] = 0), (A[H] = -1));
      var O = N[H];
      if (O !== null)
        for (N[H] = null, H = 0; H < O.length; H++) {
          var L = O[H];
          L !== null && (L.lane &= -536870913);
        }
      l &= ~Y;
    }
    (c !== 0 && eh(e, c, 0),
      m !== 0 && f === 0 && e.tag !== 0 && (e.suspendedLanes |= m & ~(x & ~s)));
  }
  function eh(e, s, l) {
    ((e.pendingLanes |= s), (e.suspendedLanes &= ~s));
    var c = 31 - $e(s);
    ((e.entangledLanes |= s),
      (e.entanglements[c] = e.entanglements[c] | 1073741824 | (l & 261930)));
  }
  function nh(e, s) {
    var l = (e.entangledLanes |= s);
    for (e = e.entanglements; l;) {
      var c = 31 - $e(l),
        f = 1 << c;
      ((f & s) | (e[c] & s) && (e[c] |= s), (l &= ~f));
    }
  }
  function ih(e, s) {
    var l = s & -s;
    return (
      (l = (l & 42) !== 0 ? 1 : _c(l)),
      (l & (e.suspendedLanes | s)) !== 0 ? 0 : l
    );
  }
  function _c(e) {
    switch (e) {
      case 2:
        e = 1;
        break;
      case 8:
        e = 4;
        break;
      case 32:
        e = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        e = 128;
        break;
      case 268435456:
        e = 134217728;
        break;
      default:
        e = 0;
    }
    return e;
  }
  function Sc(e) {
    return (
      (e &= -e),
      2 < e ? (8 < e ? ((e & 134217727) !== 0 ? 32 : 268435456) : 8) : 2
    );
  }
  function sh() {
    var e = F.p;
    return e !== 0 ? e : ((e = window.event), e === void 0 ? 32 : Xp(e.type));
  }
  function ah(e, s) {
    var l = F.p;
    try {
      return ((F.p = e), s());
    } finally {
      F.p = l;
    }
  }
  var mi = Math.random().toString(36).slice(2),
    Se = "__reactFiber$" + mi,
    Ve = "__reactProps$" + mi,
    Os = "__reactContainer$" + mi,
    Mc = "__reactEvents$" + mi,
    Hy = "__reactListeners$" + mi,
    Uy = "__reactHandles$" + mi,
    lh = "__reactResources$" + mi,
    za = "__reactMarker$" + mi;
  function Ac(e) {
    (delete e[Se], delete e[Ve], delete e[Mc], delete e[Hy], delete e[Uy]);
  }
  function zs(e) {
    var s = e[Se];
    if (s) return s;
    for (var l = e.parentNode; l;) {
      if ((s = l[Os] || l[Se])) {
        if (
          ((l = s.alternate),
          s.child !== null || (l !== null && l.child !== null))
        )
          for (e = Ep(e); e !== null;) {
            if ((l = e[Se])) return l;
            e = Ep(e);
          }
        return s;
      }
      ((e = l), (l = e.parentNode));
    }
    return null;
  }
  function Ds(e) {
    if ((e = e[Se] || e[Os])) {
      var s = e.tag;
      if (
        s === 5 ||
        s === 6 ||
        s === 13 ||
        s === 31 ||
        s === 26 ||
        s === 27 ||
        s === 3
      )
        return e;
    }
    return null;
  }
  function Da(e) {
    var s = e.tag;
    if (s === 5 || s === 26 || s === 27 || s === 6) return e.stateNode;
    throw Error(a(33));
  }
  function Ls(e) {
    var s = e[lh];
    return (
      s ||
        (s = e[lh] =
          { hoistableStyles: new Map(), hoistableScripts: new Map() }),
      s
    );
  }
  function xe(e) {
    e[za] = !0;
  }
  var oh = new Set(),
    rh = {};
  function Ii(e, s) {
    (Bs(e, s), Bs(e + "Capture", s));
  }
  function Bs(e, s) {
    for (rh[e] = s, e = 0; e < s.length; e++) oh.add(s[e]);
  }
  var Vy = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$",
    ),
    ch = {},
    uh = {};
  function qy(e) {
    return ie.call(uh, e)
      ? !0
      : ie.call(ch, e)
        ? !1
        : Vy.test(e)
          ? (uh[e] = !0)
          : ((ch[e] = !0), !1);
  }
  function co(e, s, l) {
    if (qy(s))
      if (l === null) e.removeAttribute(s);
      else {
        switch (typeof l) {
          case "undefined":
          case "function":
          case "symbol":
            e.removeAttribute(s);
            return;
          case "boolean":
            var c = s.toLowerCase().slice(0, 5);
            if (c !== "data-" && c !== "aria-") {
              e.removeAttribute(s);
              return;
            }
        }
        e.setAttribute(s, "" + l);
      }
  }
  function uo(e, s, l) {
    if (l === null) e.removeAttribute(s);
    else {
      switch (typeof l) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(s);
          return;
      }
      e.setAttribute(s, "" + l);
    }
  }
  function Vn(e, s, l, c) {
    if (c === null) e.removeAttribute(l);
    else {
      switch (typeof c) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(l);
          return;
      }
      e.setAttributeNS(s, l, "" + c);
    }
  }
  function dn(e) {
    switch (typeof e) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return e;
      default:
        return "";
    }
  }
  function dh(e) {
    var s = e.type;
    return (
      (e = e.nodeName) &&
      e.toLowerCase() === "input" &&
      (s === "checkbox" || s === "radio")
    );
  }
  function Yy(e, s, l) {
    var c = Object.getOwnPropertyDescriptor(e.constructor.prototype, s);
    if (
      !e.hasOwnProperty(s) &&
      typeof c < "u" &&
      typeof c.get == "function" &&
      typeof c.set == "function"
    ) {
      var f = c.get,
        m = c.set;
      return (
        Object.defineProperty(e, s, {
          configurable: !0,
          get: function () {
            return f.call(this);
          },
          set: function (x) {
            ((l = "" + x), m.call(this, x));
          },
        }),
        Object.defineProperty(e, s, { enumerable: c.enumerable }),
        {
          getValue: function () {
            return l;
          },
          setValue: function (x) {
            l = "" + x;
          },
          stopTracking: function () {
            ((e._valueTracker = null), delete e[s]);
          },
        }
      );
    }
  }
  function kc(e) {
    if (!e._valueTracker) {
      var s = dh(e) ? "checked" : "value";
      e._valueTracker = Yy(e, s, "" + e[s]);
    }
  }
  function fh(e) {
    if (!e) return !1;
    var s = e._valueTracker;
    if (!s) return !0;
    var l = s.getValue(),
      c = "";
    return (
      e && (c = dh(e) ? (e.checked ? "true" : "false") : e.value),
      (e = c),
      e !== l ? (s.setValue(e), !0) : !1
    );
  }
  function fo(e) {
    if (
      ((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")
    )
      return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var Xy = /[\n"\\]/g;
  function fn(e) {
    return e.replace(Xy, function (s) {
      return "\\" + s.charCodeAt(0).toString(16) + " ";
    });
  }
  function Ec(e, s, l, c, f, m, x, w) {
    ((e.name = ""),
      x != null &&
      typeof x != "function" &&
      typeof x != "symbol" &&
      typeof x != "boolean"
        ? (e.type = x)
        : e.removeAttribute("type"),
      s != null
        ? x === "number"
          ? ((s === 0 && e.value === "") || e.value != s) &&
            (e.value = "" + dn(s))
          : e.value !== "" + dn(s) && (e.value = "" + dn(s))
        : (x !== "submit" && x !== "reset") || e.removeAttribute("value"),
      s != null
        ? Cc(e, x, dn(s))
        : l != null
          ? Cc(e, x, dn(l))
          : c != null && e.removeAttribute("value"),
      f == null && m != null && (e.defaultChecked = !!m),
      f != null &&
        (e.checked = f && typeof f != "function" && typeof f != "symbol"),
      w != null &&
      typeof w != "function" &&
      typeof w != "symbol" &&
      typeof w != "boolean"
        ? (e.name = "" + dn(w))
        : e.removeAttribute("name"));
  }
  function hh(e, s, l, c, f, m, x, w) {
    if (
      (m != null &&
        typeof m != "function" &&
        typeof m != "symbol" &&
        typeof m != "boolean" &&
        (e.type = m),
      s != null || l != null)
    ) {
      if (!((m !== "submit" && m !== "reset") || s != null)) {
        kc(e);
        return;
      }
      ((l = l != null ? "" + dn(l) : ""),
        (s = s != null ? "" + dn(s) : l),
        w || s === e.value || (e.value = s),
        (e.defaultValue = s));
    }
    ((c = c ?? f),
      (c = typeof c != "function" && typeof c != "symbol" && !!c),
      (e.checked = w ? e.checked : !!c),
      (e.defaultChecked = !!c),
      x != null &&
        typeof x != "function" &&
        typeof x != "symbol" &&
        typeof x != "boolean" &&
        (e.name = x),
      kc(e));
  }
  function Cc(e, s, l) {
    (s === "number" && fo(e.ownerDocument) === e) ||
      e.defaultValue === "" + l ||
      (e.defaultValue = "" + l);
  }
  function Rs(e, s, l, c) {
    if (((e = e.options), s)) {
      s = {};
      for (var f = 0; f < l.length; f++) s["$" + l[f]] = !0;
      for (l = 0; l < e.length; l++)
        ((f = s.hasOwnProperty("$" + e[l].value)),
          e[l].selected !== f && (e[l].selected = f),
          f && c && (e[l].defaultSelected = !0));
    } else {
      for (l = "" + dn(l), s = null, f = 0; f < e.length; f++) {
        if (e[f].value === l) {
          ((e[f].selected = !0), c && (e[f].defaultSelected = !0));
          return;
        }
        s !== null || e[f].disabled || (s = e[f]);
      }
      s !== null && (s.selected = !0);
    }
  }
  function mh(e, s, l) {
    if (
      s != null &&
      ((s = "" + dn(s)), s !== e.value && (e.value = s), l == null)
    ) {
      e.defaultValue !== s && (e.defaultValue = s);
      return;
    }
    e.defaultValue = l != null ? "" + dn(l) : "";
  }
  function gh(e, s, l, c) {
    if (s == null) {
      if (c != null) {
        if (l != null) throw Error(a(92));
        if (ut(c)) {
          if (1 < c.length) throw Error(a(93));
          c = c[0];
        }
        l = c;
      }
      (l == null && (l = ""), (s = l));
    }
    ((l = dn(s)),
      (e.defaultValue = l),
      (c = e.textContent),
      c === l && c !== "" && c !== null && (e.value = c),
      kc(e));
  }
  function Hs(e, s) {
    if (s) {
      var l = e.firstChild;
      if (l && l === e.lastChild && l.nodeType === 3) {
        l.nodeValue = s;
        return;
      }
    }
    e.textContent = s;
  }
  var Py = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " ",
    ),
  );
  function ph(e, s, l) {
    var c = s.indexOf("--") === 0;
    l == null || typeof l == "boolean" || l === ""
      ? c
        ? e.setProperty(s, "")
        : s === "float"
          ? (e.cssFloat = "")
          : (e[s] = "")
      : c
        ? e.setProperty(s, l)
        : typeof l != "number" || l === 0 || Py.has(s)
          ? s === "float"
            ? (e.cssFloat = l)
            : (e[s] = ("" + l).trim())
          : (e[s] = l + "px");
  }
  function bh(e, s, l) {
    if (s != null && typeof s != "object") throw Error(a(62));
    if (((e = e.style), l != null)) {
      for (var c in l)
        !l.hasOwnProperty(c) ||
          (s != null && s.hasOwnProperty(c)) ||
          (c.indexOf("--") === 0
            ? e.setProperty(c, "")
            : c === "float"
              ? (e.cssFloat = "")
              : (e[c] = ""));
      for (var f in s)
        ((c = s[f]), s.hasOwnProperty(f) && l[f] !== c && ph(e, f, c));
    } else for (var m in s) s.hasOwnProperty(m) && ph(e, m, s[m]);
  }
  function jc(e) {
    if (e.indexOf("-") === -1) return !1;
    switch (e) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var Fy = new Map([
      ["acceptCharset", "accept-charset"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
      ["crossOrigin", "crossorigin"],
      ["accentHeight", "accent-height"],
      ["alignmentBaseline", "alignment-baseline"],
      ["arabicForm", "arabic-form"],
      ["baselineShift", "baseline-shift"],
      ["capHeight", "cap-height"],
      ["clipPath", "clip-path"],
      ["clipRule", "clip-rule"],
      ["colorInterpolation", "color-interpolation"],
      ["colorInterpolationFilters", "color-interpolation-filters"],
      ["colorProfile", "color-profile"],
      ["colorRendering", "color-rendering"],
      ["dominantBaseline", "dominant-baseline"],
      ["enableBackground", "enable-background"],
      ["fillOpacity", "fill-opacity"],
      ["fillRule", "fill-rule"],
      ["floodColor", "flood-color"],
      ["floodOpacity", "flood-opacity"],
      ["fontFamily", "font-family"],
      ["fontSize", "font-size"],
      ["fontSizeAdjust", "font-size-adjust"],
      ["fontStretch", "font-stretch"],
      ["fontStyle", "font-style"],
      ["fontVariant", "font-variant"],
      ["fontWeight", "font-weight"],
      ["glyphName", "glyph-name"],
      ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
      ["glyphOrientationVertical", "glyph-orientation-vertical"],
      ["horizAdvX", "horiz-adv-x"],
      ["horizOriginX", "horiz-origin-x"],
      ["imageRendering", "image-rendering"],
      ["letterSpacing", "letter-spacing"],
      ["lightingColor", "lighting-color"],
      ["markerEnd", "marker-end"],
      ["markerMid", "marker-mid"],
      ["markerStart", "marker-start"],
      ["overlinePosition", "overline-position"],
      ["overlineThickness", "overline-thickness"],
      ["paintOrder", "paint-order"],
      ["panose-1", "panose-1"],
      ["pointerEvents", "pointer-events"],
      ["renderingIntent", "rendering-intent"],
      ["shapeRendering", "shape-rendering"],
      ["stopColor", "stop-color"],
      ["stopOpacity", "stop-opacity"],
      ["strikethroughPosition", "strikethrough-position"],
      ["strikethroughThickness", "strikethrough-thickness"],
      ["strokeDasharray", "stroke-dasharray"],
      ["strokeDashoffset", "stroke-dashoffset"],
      ["strokeLinecap", "stroke-linecap"],
      ["strokeLinejoin", "stroke-linejoin"],
      ["strokeMiterlimit", "stroke-miterlimit"],
      ["strokeOpacity", "stroke-opacity"],
      ["strokeWidth", "stroke-width"],
      ["textAnchor", "text-anchor"],
      ["textDecoration", "text-decoration"],
      ["textRendering", "text-rendering"],
      ["transformOrigin", "transform-origin"],
      ["underlinePosition", "underline-position"],
      ["underlineThickness", "underline-thickness"],
      ["unicodeBidi", "unicode-bidi"],
      ["unicodeRange", "unicode-range"],
      ["unitsPerEm", "units-per-em"],
      ["vAlphabetic", "v-alphabetic"],
      ["vHanging", "v-hanging"],
      ["vIdeographic", "v-ideographic"],
      ["vMathematical", "v-mathematical"],
      ["vectorEffect", "vector-effect"],
      ["vertAdvY", "vert-adv-y"],
      ["vertOriginX", "vert-origin-x"],
      ["vertOriginY", "vert-origin-y"],
      ["wordSpacing", "word-spacing"],
      ["writingMode", "writing-mode"],
      ["xmlnsXlink", "xmlns:xlink"],
      ["xHeight", "x-height"],
    ]),
    Gy =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function ho(e) {
    return Gy.test("" + e)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : e;
  }
  function qn() {}
  var Tc = null;
  function Nc(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var Us = null,
    Vs = null;
  function xh(e) {
    var s = Ds(e);
    if (s && (e = s.stateNode)) {
      var l = e[Ve] || null;
      t: switch (((e = s.stateNode), s.type)) {
        case "input":
          if (
            (Ec(
              e,
              l.value,
              l.defaultValue,
              l.defaultValue,
              l.checked,
              l.defaultChecked,
              l.type,
              l.name,
            ),
            (s = l.name),
            l.type === "radio" && s != null)
          ) {
            for (l = e; l.parentNode;) l = l.parentNode;
            for (
              l = l.querySelectorAll(
                'input[name="' + fn("" + s) + '"][type="radio"]',
              ),
                s = 0;
              s < l.length;
              s++
            ) {
              var c = l[s];
              if (c !== e && c.form === e.form) {
                var f = c[Ve] || null;
                if (!f) throw Error(a(90));
                Ec(
                  c,
                  f.value,
                  f.defaultValue,
                  f.defaultValue,
                  f.checked,
                  f.defaultChecked,
                  f.type,
                  f.name,
                );
              }
            }
            for (s = 0; s < l.length; s++)
              ((c = l[s]), c.form === e.form && fh(c));
          }
          break t;
        case "textarea":
          mh(e, l.value, l.defaultValue);
          break t;
        case "select":
          ((s = l.value), s != null && Rs(e, !!l.multiple, s, !1));
      }
    }
  }
  var Oc = !1;
  function yh(e, s, l) {
    if (Oc) return e(s, l);
    Oc = !0;
    try {
      var c = e(s);
      return c;
    } finally {
      if (
        ((Oc = !1),
        (Us !== null || Vs !== null) &&
          (tr(), Us && ((s = Us), (e = Vs), (Vs = Us = null), xh(s), e)))
      )
        for (s = 0; s < e.length; s++) xh(e[s]);
    }
  }
  function La(e, s) {
    var l = e.stateNode;
    if (l === null) return null;
    var c = l[Ve] || null;
    if (c === null) return null;
    l = c[s];
    t: switch (s) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        ((c = !c.disabled) ||
          ((e = e.type),
          (c = !(
            e === "button" ||
            e === "input" ||
            e === "select" ||
            e === "textarea"
          ))),
          (e = !c));
        break t;
      default:
        e = !1;
    }
    if (e) return null;
    if (l && typeof l != "function") throw Error(a(231, s, typeof l));
    return l;
  }
  var Yn = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    zc = !1;
  if (Yn)
    try {
      var Ba = {};
      (Object.defineProperty(Ba, "passive", {
        get: function () {
          zc = !0;
        },
      }),
        window.addEventListener("test", Ba, Ba),
        window.removeEventListener("test", Ba, Ba));
    } catch {
      zc = !1;
    }
  var gi = null,
    Dc = null,
    mo = null;
  function vh() {
    if (mo) return mo;
    var e,
      s = Dc,
      l = s.length,
      c,
      f = "value" in gi ? gi.value : gi.textContent,
      m = f.length;
    for (e = 0; e < l && s[e] === f[e]; e++);
    var x = l - e;
    for (c = 1; c <= x && s[l - c] === f[m - c]; c++);
    return (mo = f.slice(e, 1 < c ? 1 - c : void 0));
  }
  function go(e) {
    var s = e.keyCode;
    return (
      "charCode" in e
        ? ((e = e.charCode), e === 0 && s === 13 && (e = 13))
        : (e = s),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function po() {
    return !0;
  }
  function wh() {
    return !1;
  }
  function qe(e) {
    function s(l, c, f, m, x) {
      ((this._reactName = l),
        (this._targetInst = f),
        (this.type = c),
        (this.nativeEvent = m),
        (this.target = x),
        (this.currentTarget = null));
      for (var w in e)
        e.hasOwnProperty(w) && ((l = e[w]), (this[w] = l ? l(m) : m[w]));
      return (
        (this.isDefaultPrevented = (
          m.defaultPrevented != null ? m.defaultPrevented : m.returnValue === !1
        )
          ? po
          : wh),
        (this.isPropagationStopped = wh),
        this
      );
    }
    return (
      y(s.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var l = this.nativeEvent;
          l &&
            (l.preventDefault
              ? l.preventDefault()
              : typeof l.returnValue != "unknown" && (l.returnValue = !1),
            (this.isDefaultPrevented = po));
        },
        stopPropagation: function () {
          var l = this.nativeEvent;
          l &&
            (l.stopPropagation
              ? l.stopPropagation()
              : typeof l.cancelBubble != "unknown" && (l.cancelBubble = !0),
            (this.isPropagationStopped = po));
        },
        persist: function () {},
        isPersistent: po,
      }),
      s
    );
  }
  var Ji = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    bo = qe(Ji),
    Ra = y({}, Ji, { view: 0, detail: 0 }),
    Zy = qe(Ra),
    Lc,
    Bc,
    Ha,
    xo = y({}, Ra, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: Hc,
      button: 0,
      buttons: 0,
      relatedTarget: function (e) {
        return e.relatedTarget === void 0
          ? e.fromElement === e.srcElement
            ? e.toElement
            : e.fromElement
          : e.relatedTarget;
      },
      movementX: function (e) {
        return "movementX" in e
          ? e.movementX
          : (e !== Ha &&
              (Ha && e.type === "mousemove"
                ? ((Lc = e.screenX - Ha.screenX), (Bc = e.screenY - Ha.screenY))
                : (Bc = Lc = 0),
              (Ha = e)),
            Lc);
      },
      movementY: function (e) {
        return "movementY" in e ? e.movementY : Bc;
      },
    }),
    _h = qe(xo),
    Qy = y({}, xo, { dataTransfer: 0 }),
    Ky = qe(Qy),
    Wy = y({}, Ra, { relatedTarget: 0 }),
    Rc = qe(Wy),
    $y = y({}, Ji, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Iy = qe($y),
    Jy = y({}, Ji, {
      clipboardData: function (e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      },
    }),
    tv = qe(Jy),
    ev = y({}, Ji, { data: 0 }),
    Sh = qe(ev),
    nv = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified",
    },
    iv = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta",
    },
    sv = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function av(e) {
    var s = this.nativeEvent;
    return s.getModifierState
      ? s.getModifierState(e)
      : (e = sv[e])
        ? !!s[e]
        : !1;
  }
  function Hc() {
    return av;
  }
  var lv = y({}, Ra, {
      key: function (e) {
        if (e.key) {
          var s = nv[e.key] || e.key;
          if (s !== "Unidentified") return s;
        }
        return e.type === "keypress"
          ? ((e = go(e)), e === 13 ? "Enter" : String.fromCharCode(e))
          : e.type === "keydown" || e.type === "keyup"
            ? iv[e.keyCode] || "Unidentified"
            : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Hc,
      charCode: function (e) {
        return e.type === "keypress" ? go(e) : 0;
      },
      keyCode: function (e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === "keypress"
          ? go(e)
          : e.type === "keydown" || e.type === "keyup"
            ? e.keyCode
            : 0;
      },
    }),
    ov = qe(lv),
    rv = y({}, xo, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    Mh = qe(rv),
    cv = y({}, Ra, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Hc,
    }),
    uv = qe(cv),
    dv = y({}, Ji, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    fv = qe(dv),
    hv = y({}, xo, {
      deltaX: function (e) {
        return "deltaX" in e
          ? e.deltaX
          : "wheelDeltaX" in e
            ? -e.wheelDeltaX
            : 0;
      },
      deltaY: function (e) {
        return "deltaY" in e
          ? e.deltaY
          : "wheelDeltaY" in e
            ? -e.wheelDeltaY
            : "wheelDelta" in e
              ? -e.wheelDelta
              : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    mv = qe(hv),
    gv = y({}, Ji, { newState: 0, oldState: 0 }),
    pv = qe(gv),
    bv = [9, 13, 27, 32],
    Uc = Yn && "CompositionEvent" in window,
    Ua = null;
  Yn && "documentMode" in document && (Ua = document.documentMode);
  var xv = Yn && "TextEvent" in window && !Ua,
    Ah = Yn && (!Uc || (Ua && 8 < Ua && 11 >= Ua)),
    kh = " ",
    Eh = !1;
  function Ch(e, s) {
    switch (e) {
      case "keyup":
        return bv.indexOf(s.keyCode) !== -1;
      case "keydown":
        return s.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function jh(e) {
    return (
      (e = e.detail),
      typeof e == "object" && "data" in e ? e.data : null
    );
  }
  var qs = !1;
  function yv(e, s) {
    switch (e) {
      case "compositionend":
        return jh(s);
      case "keypress":
        return s.which !== 32 ? null : ((Eh = !0), kh);
      case "textInput":
        return ((e = s.data), e === kh && Eh ? null : e);
      default:
        return null;
    }
  }
  function vv(e, s) {
    if (qs)
      return e === "compositionend" || (!Uc && Ch(e, s))
        ? ((e = vh()), (mo = Dc = gi = null), (qs = !1), e)
        : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(s.ctrlKey || s.altKey || s.metaKey) || (s.ctrlKey && s.altKey)) {
          if (s.char && 1 < s.char.length) return s.char;
          if (s.which) return String.fromCharCode(s.which);
        }
        return null;
      case "compositionend":
        return Ah && s.locale !== "ko" ? null : s.data;
      default:
        return null;
    }
  }
  var wv = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function Th(e) {
    var s = e && e.nodeName && e.nodeName.toLowerCase();
    return s === "input" ? !!wv[e.type] : s === "textarea";
  }
  function Nh(e, s, l, c) {
    (Us ? (Vs ? Vs.push(c) : (Vs = [c])) : (Us = c),
      (s = or(s, "onChange")),
      0 < s.length &&
        ((l = new bo("onChange", "change", null, l, c)),
        e.push({ event: l, listeners: s })));
  }
  var Va = null,
    qa = null;
  function _v(e) {
    hp(e, 0);
  }
  function yo(e) {
    var s = Da(e);
    if (fh(s)) return e;
  }
  function Oh(e, s) {
    if (e === "change") return s;
  }
  var zh = !1;
  if (Yn) {
    var Vc;
    if (Yn) {
      var qc = "oninput" in document;
      if (!qc) {
        var Dh = document.createElement("div");
        (Dh.setAttribute("oninput", "return;"),
          (qc = typeof Dh.oninput == "function"));
      }
      Vc = qc;
    } else Vc = !1;
    zh = Vc && (!document.documentMode || 9 < document.documentMode);
  }
  function Lh() {
    Va && (Va.detachEvent("onpropertychange", Bh), (qa = Va = null));
  }
  function Bh(e) {
    if (e.propertyName === "value" && yo(qa)) {
      var s = [];
      (Nh(s, qa, e, Nc(e)), yh(_v, s));
    }
  }
  function Sv(e, s, l) {
    e === "focusin"
      ? (Lh(), (Va = s), (qa = l), Va.attachEvent("onpropertychange", Bh))
      : e === "focusout" && Lh();
  }
  function Mv(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return yo(qa);
  }
  function Av(e, s) {
    if (e === "click") return yo(s);
  }
  function kv(e, s) {
    if (e === "input" || e === "change") return yo(s);
  }
  function Ev(e, s) {
    return (e === s && (e !== 0 || 1 / e === 1 / s)) || (e !== e && s !== s);
  }
  var Ie = typeof Object.is == "function" ? Object.is : Ev;
  function Ya(e, s) {
    if (Ie(e, s)) return !0;
    if (
      typeof e != "object" ||
      e === null ||
      typeof s != "object" ||
      s === null
    )
      return !1;
    var l = Object.keys(e),
      c = Object.keys(s);
    if (l.length !== c.length) return !1;
    for (c = 0; c < l.length; c++) {
      var f = l[c];
      if (!ie.call(s, f) || !Ie(e[f], s[f])) return !1;
    }
    return !0;
  }
  function Rh(e) {
    for (; e && e.firstChild;) e = e.firstChild;
    return e;
  }
  function Hh(e, s) {
    var l = Rh(e);
    e = 0;
    for (var c; l;) {
      if (l.nodeType === 3) {
        if (((c = e + l.textContent.length), e <= s && c >= s))
          return { node: l, offset: s - e };
        e = c;
      }
      t: {
        for (; l;) {
          if (l.nextSibling) {
            l = l.nextSibling;
            break t;
          }
          l = l.parentNode;
        }
        l = void 0;
      }
      l = Rh(l);
    }
  }
  function Uh(e, s) {
    return e && s
      ? e === s
        ? !0
        : e && e.nodeType === 3
          ? !1
          : s && s.nodeType === 3
            ? Uh(e, s.parentNode)
            : "contains" in e
              ? e.contains(s)
              : e.compareDocumentPosition
                ? !!(e.compareDocumentPosition(s) & 16)
                : !1
      : !1;
  }
  function Vh(e) {
    e =
      e != null &&
      e.ownerDocument != null &&
      e.ownerDocument.defaultView != null
        ? e.ownerDocument.defaultView
        : window;
    for (var s = fo(e.document); s instanceof e.HTMLIFrameElement;) {
      try {
        var l = typeof s.contentWindow.location.href == "string";
      } catch {
        l = !1;
      }
      if (l) e = s.contentWindow;
      else break;
      s = fo(e.document);
    }
    return s;
  }
  function Yc(e) {
    var s = e && e.nodeName && e.nodeName.toLowerCase();
    return (
      s &&
      ((s === "input" &&
        (e.type === "text" ||
          e.type === "search" ||
          e.type === "tel" ||
          e.type === "url" ||
          e.type === "password")) ||
        s === "textarea" ||
        e.contentEditable === "true")
    );
  }
  var Cv = Yn && "documentMode" in document && 11 >= document.documentMode,
    Ys = null,
    Xc = null,
    Xa = null,
    Pc = !1;
  function qh(e, s, l) {
    var c =
      l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    Pc ||
      Ys == null ||
      Ys !== fo(c) ||
      ((c = Ys),
      "selectionStart" in c && Yc(c)
        ? (c = { start: c.selectionStart, end: c.selectionEnd })
        : ((c = (
            (c.ownerDocument && c.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (c = {
            anchorNode: c.anchorNode,
            anchorOffset: c.anchorOffset,
            focusNode: c.focusNode,
            focusOffset: c.focusOffset,
          })),
      (Xa && Ya(Xa, c)) ||
        ((Xa = c),
        (c = or(Xc, "onSelect")),
        0 < c.length &&
          ((s = new bo("onSelect", "select", null, s, l)),
          e.push({ event: s, listeners: c }),
          (s.target = Ys))));
  }
  function ts(e, s) {
    var l = {};
    return (
      (l[e.toLowerCase()] = s.toLowerCase()),
      (l["Webkit" + e] = "webkit" + s),
      (l["Moz" + e] = "moz" + s),
      l
    );
  }
  var Xs = {
      animationend: ts("Animation", "AnimationEnd"),
      animationiteration: ts("Animation", "AnimationIteration"),
      animationstart: ts("Animation", "AnimationStart"),
      transitionrun: ts("Transition", "TransitionRun"),
      transitionstart: ts("Transition", "TransitionStart"),
      transitioncancel: ts("Transition", "TransitionCancel"),
      transitionend: ts("Transition", "TransitionEnd"),
    },
    Fc = {},
    Yh = {};
  Yn &&
    ((Yh = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete Xs.animationend.animation,
      delete Xs.animationiteration.animation,
      delete Xs.animationstart.animation),
    "TransitionEvent" in window || delete Xs.transitionend.transition);
  function es(e) {
    if (Fc[e]) return Fc[e];
    if (!Xs[e]) return e;
    var s = Xs[e],
      l;
    for (l in s) if (s.hasOwnProperty(l) && l in Yh) return (Fc[e] = s[l]);
    return e;
  }
  var Xh = es("animationend"),
    Ph = es("animationiteration"),
    Fh = es("animationstart"),
    jv = es("transitionrun"),
    Tv = es("transitionstart"),
    Nv = es("transitioncancel"),
    Gh = es("transitionend"),
    Zh = new Map(),
    Gc =
      "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " ",
      );
  Gc.push("scrollEnd");
  function Sn(e, s) {
    (Zh.set(e, s), Ii(s, [e]));
  }
  var vo =
      typeof reportError == "function"
        ? reportError
        : function (e) {
            if (
              typeof window == "object" &&
              typeof window.ErrorEvent == "function"
            ) {
              var s = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message:
                  typeof e == "object" &&
                  e !== null &&
                  typeof e.message == "string"
                    ? String(e.message)
                    : String(e),
                error: e,
              });
              if (!window.dispatchEvent(s)) return;
            } else if (
              typeof process == "object" &&
              typeof process.emit == "function"
            ) {
              process.emit("uncaughtException", e);
              return;
            }
            console.error(e);
          },
    hn = [],
    Ps = 0,
    Zc = 0;
  function wo() {
    for (var e = Ps, s = (Zc = Ps = 0); s < e;) {
      var l = hn[s];
      hn[s++] = null;
      var c = hn[s];
      hn[s++] = null;
      var f = hn[s];
      hn[s++] = null;
      var m = hn[s];
      if (((hn[s++] = null), c !== null && f !== null)) {
        var x = c.pending;
        (x === null ? (f.next = f) : ((f.next = x.next), (x.next = f)),
          (c.pending = f));
      }
      m !== 0 && Qh(l, f, m);
    }
  }
  function _o(e, s, l, c) {
    ((hn[Ps++] = e),
      (hn[Ps++] = s),
      (hn[Ps++] = l),
      (hn[Ps++] = c),
      (Zc |= c),
      (e.lanes |= c),
      (e = e.alternate),
      e !== null && (e.lanes |= c));
  }
  function Qc(e, s, l, c) {
    return (_o(e, s, l, c), So(e));
  }
  function ns(e, s) {
    return (_o(e, null, null, s), So(e));
  }
  function Qh(e, s, l) {
    e.lanes |= l;
    var c = e.alternate;
    c !== null && (c.lanes |= l);
    for (var f = !1, m = e.return; m !== null;)
      ((m.childLanes |= l),
        (c = m.alternate),
        c !== null && (c.childLanes |= l),
        m.tag === 22 &&
          ((e = m.stateNode), e === null || e._visibility & 1 || (f = !0)),
        (e = m),
        (m = m.return));
    return e.tag === 3
      ? ((m = e.stateNode),
        f &&
          s !== null &&
          ((f = 31 - $e(l)),
          (e = m.hiddenUpdates),
          (c = e[f]),
          c === null ? (e[f] = [s]) : c.push(s),
          (s.lane = l | 536870912)),
        m)
      : null;
  }
  function So(e) {
    if (50 < dl) throw ((dl = 0), (id = null), Error(a(185)));
    for (var s = e.return; s !== null;) ((e = s), (s = e.return));
    return e.tag === 3 ? e.stateNode : null;
  }
  var Fs = {};
  function Ov(e, s, l, c) {
    ((this.tag = e),
      (this.key = l),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.refCleanup = this.ref = null),
      (this.pendingProps = s),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = c),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null));
  }
  function Je(e, s, l, c) {
    return new Ov(e, s, l, c);
  }
  function Kc(e) {
    return ((e = e.prototype), !(!e || !e.isReactComponent));
  }
  function Xn(e, s) {
    var l = e.alternate;
    return (
      l === null
        ? ((l = Je(e.tag, s, e.key, e.mode)),
          (l.elementType = e.elementType),
          (l.type = e.type),
          (l.stateNode = e.stateNode),
          (l.alternate = e),
          (e.alternate = l))
        : ((l.pendingProps = s),
          (l.type = e.type),
          (l.flags = 0),
          (l.subtreeFlags = 0),
          (l.deletions = null)),
      (l.flags = e.flags & 65011712),
      (l.childLanes = e.childLanes),
      (l.lanes = e.lanes),
      (l.child = e.child),
      (l.memoizedProps = e.memoizedProps),
      (l.memoizedState = e.memoizedState),
      (l.updateQueue = e.updateQueue),
      (s = e.dependencies),
      (l.dependencies =
        s === null ? null : { lanes: s.lanes, firstContext: s.firstContext }),
      (l.sibling = e.sibling),
      (l.index = e.index),
      (l.ref = e.ref),
      (l.refCleanup = e.refCleanup),
      l
    );
  }
  function Kh(e, s) {
    e.flags &= 65011714;
    var l = e.alternate;
    return (
      l === null
        ? ((e.childLanes = 0),
          (e.lanes = s),
          (e.child = null),
          (e.subtreeFlags = 0),
          (e.memoizedProps = null),
          (e.memoizedState = null),
          (e.updateQueue = null),
          (e.dependencies = null),
          (e.stateNode = null))
        : ((e.childLanes = l.childLanes),
          (e.lanes = l.lanes),
          (e.child = l.child),
          (e.subtreeFlags = 0),
          (e.deletions = null),
          (e.memoizedProps = l.memoizedProps),
          (e.memoizedState = l.memoizedState),
          (e.updateQueue = l.updateQueue),
          (e.type = l.type),
          (s = l.dependencies),
          (e.dependencies =
            s === null
              ? null
              : { lanes: s.lanes, firstContext: s.firstContext })),
      e
    );
  }
  function Mo(e, s, l, c, f, m) {
    var x = 0;
    if (((c = e), typeof e == "function")) Kc(e) && (x = 1);
    else if (typeof e == "string")
      x = R2(e, l, kt.current)
        ? 26
        : e === "html" || e === "head" || e === "body"
          ? 27
          : 5;
    else
      t: switch (e) {
        case W:
          return ((e = Je(31, l, s, f)), (e.elementType = W), (e.lanes = m), e);
        case M:
          return is(l.children, f, m, s);
        case k:
          ((x = 8), (f |= 24));
          break;
        case j:
          return (
            (e = Je(12, l, s, f | 2)),
            (e.elementType = j),
            (e.lanes = m),
            e
          );
        case R:
          return ((e = Je(13, l, s, f)), (e.elementType = R), (e.lanes = m), e);
        case P:
          return ((e = Je(19, l, s, f)), (e.elementType = P), (e.lanes = m), e);
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case U:
                x = 10;
                break t;
              case z:
                x = 9;
                break t;
              case q:
                x = 11;
                break t;
              case X:
                x = 14;
                break t;
              case G:
                ((x = 16), (c = null));
                break t;
            }
          ((x = 29),
            (l = Error(a(130, e === null ? "null" : typeof e, ""))),
            (c = null));
      }
    return (
      (s = Je(x, l, s, f)),
      (s.elementType = e),
      (s.type = c),
      (s.lanes = m),
      s
    );
  }
  function is(e, s, l, c) {
    return ((e = Je(7, e, c, s)), (e.lanes = l), e);
  }
  function Wc(e, s, l) {
    return ((e = Je(6, e, null, s)), (e.lanes = l), e);
  }
  function Wh(e) {
    var s = Je(18, null, null, 0);
    return ((s.stateNode = e), s);
  }
  function $c(e, s, l) {
    return (
      (s = Je(4, e.children !== null ? e.children : [], e.key, s)),
      (s.lanes = l),
      (s.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      s
    );
  }
  var $h = new WeakMap();
  function mn(e, s) {
    if (typeof e == "object" && e !== null) {
      var l = $h.get(e);
      return l !== void 0
        ? l
        : ((s = { value: e, source: s, stack: rt(s) }), $h.set(e, s), s);
    }
    return { value: e, source: s, stack: rt(s) };
  }
  var Gs = [],
    Zs = 0,
    Ao = null,
    Pa = 0,
    gn = [],
    pn = 0,
    pi = null,
    Cn = 1,
    jn = "";
  function Pn(e, s) {
    ((Gs[Zs++] = Pa), (Gs[Zs++] = Ao), (Ao = e), (Pa = s));
  }
  function Ih(e, s, l) {
    ((gn[pn++] = Cn), (gn[pn++] = jn), (gn[pn++] = pi), (pi = e));
    var c = Cn;
    e = jn;
    var f = 32 - $e(c) - 1;
    ((c &= ~(1 << f)), (l += 1));
    var m = 32 - $e(s) + f;
    if (30 < m) {
      var x = f - (f % 5);
      ((m = (c & ((1 << x) - 1)).toString(32)),
        (c >>= x),
        (f -= x),
        (Cn = (1 << (32 - $e(s) + f)) | (l << f) | c),
        (jn = m + e));
    } else ((Cn = (1 << m) | (l << f) | c), (jn = e));
  }
  function Ic(e) {
    e.return !== null && (Pn(e, 1), Ih(e, 1, 0));
  }
  function Jc(e) {
    for (; e === Ao;)
      ((Ao = Gs[--Zs]), (Gs[Zs] = null), (Pa = Gs[--Zs]), (Gs[Zs] = null));
    for (; e === pi;)
      ((pi = gn[--pn]),
        (gn[pn] = null),
        (jn = gn[--pn]),
        (gn[pn] = null),
        (Cn = gn[--pn]),
        (gn[pn] = null));
  }
  function Jh(e, s) {
    ((gn[pn++] = Cn),
      (gn[pn++] = jn),
      (gn[pn++] = pi),
      (Cn = s.id),
      (jn = s.overflow),
      (pi = e));
  }
  var Me = null,
    Ft = null,
    At = !1,
    bi = null,
    bn = !1,
    tu = Error(a(519));
  function xi(e) {
    var s = Error(
      a(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1]
          ? "text"
          : "HTML",
        "",
      ),
    );
    throw (Fa(mn(s, e)), tu);
  }
  function tm(e) {
    var s = e.stateNode,
      l = e.type,
      c = e.memoizedProps;
    switch (((s[Se] = e), (s[Ve] = c), l)) {
      case "dialog":
        (xt("cancel", s), xt("close", s));
        break;
      case "iframe":
      case "object":
      case "embed":
        xt("load", s);
        break;
      case "video":
      case "audio":
        for (l = 0; l < hl.length; l++) xt(hl[l], s);
        break;
      case "source":
        xt("error", s);
        break;
      case "img":
      case "image":
      case "link":
        (xt("error", s), xt("load", s));
        break;
      case "details":
        xt("toggle", s);
        break;
      case "input":
        (xt("invalid", s),
          hh(
            s,
            c.value,
            c.defaultValue,
            c.checked,
            c.defaultChecked,
            c.type,
            c.name,
            !0,
          ));
        break;
      case "select":
        xt("invalid", s);
        break;
      case "textarea":
        (xt("invalid", s), gh(s, c.value, c.defaultValue, c.children));
    }
    ((l = c.children),
      (typeof l != "string" && typeof l != "number" && typeof l != "bigint") ||
      s.textContent === "" + l ||
      c.suppressHydrationWarning === !0 ||
      bp(s.textContent, l)
        ? (c.popover != null && (xt("beforetoggle", s), xt("toggle", s)),
          c.onScroll != null && xt("scroll", s),
          c.onScrollEnd != null && xt("scrollend", s),
          c.onClick != null && (s.onclick = qn),
          (s = !0))
        : (s = !1),
      s || xi(e, !0));
  }
  function em(e) {
    for (Me = e.return; Me;)
      switch (Me.tag) {
        case 5:
        case 31:
        case 13:
          bn = !1;
          return;
        case 27:
        case 3:
          bn = !0;
          return;
        default:
          Me = Me.return;
      }
  }
  function Qs(e) {
    if (e !== Me) return !1;
    if (!At) return (em(e), (At = !0), !1);
    var s = e.tag,
      l;
    if (
      ((l = s !== 3 && s !== 27) &&
        ((l = s === 5) &&
          ((l = e.type),
          (l =
            !(l !== "form" && l !== "button") || xd(e.type, e.memoizedProps))),
        (l = !l)),
      l && Ft && xi(e),
      em(e),
      s === 13)
    ) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(a(317));
      Ft = kp(e);
    } else if (s === 31) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(a(317));
      Ft = kp(e);
    } else
      s === 27
        ? ((s = Ft), Oi(e.type) ? ((e = Sd), (Sd = null), (Ft = e)) : (Ft = s))
        : (Ft = Me ? yn(e.stateNode.nextSibling) : null);
    return !0;
  }
  function ss() {
    ((Ft = Me = null), (At = !1));
  }
  function eu() {
    var e = bi;
    return (
      e !== null &&
        (Fe === null ? (Fe = e) : Fe.push.apply(Fe, e), (bi = null)),
      e
    );
  }
  function Fa(e) {
    bi === null ? (bi = [e]) : bi.push(e);
  }
  var nu = Xt(null),
    as = null,
    Fn = null;
  function yi(e, s, l) {
    (ft(nu, s._currentValue), (s._currentValue = l));
  }
  function Gn(e) {
    ((e._currentValue = nu.current), Mt(nu));
  }
  function iu(e, s, l) {
    for (; e !== null;) {
      var c = e.alternate;
      if (
        ((e.childLanes & s) !== s
          ? ((e.childLanes |= s), c !== null && (c.childLanes |= s))
          : c !== null && (c.childLanes & s) !== s && (c.childLanes |= s),
        e === l)
      )
        break;
      e = e.return;
    }
  }
  function su(e, s, l, c) {
    var f = e.child;
    for (f !== null && (f.return = e); f !== null;) {
      var m = f.dependencies;
      if (m !== null) {
        var x = f.child;
        m = m.firstContext;
        t: for (; m !== null;) {
          var w = m;
          m = f;
          for (var A = 0; A < s.length; A++)
            if (w.context === s[A]) {
              ((m.lanes |= l),
                (w = m.alternate),
                w !== null && (w.lanes |= l),
                iu(m.return, l, e),
                c || (x = null));
              break t;
            }
          m = w.next;
        }
      } else if (f.tag === 18) {
        if (((x = f.return), x === null)) throw Error(a(341));
        ((x.lanes |= l),
          (m = x.alternate),
          m !== null && (m.lanes |= l),
          iu(x, l, e),
          (x = null));
      } else x = f.child;
      if (x !== null) x.return = f;
      else
        for (x = f; x !== null;) {
          if (x === e) {
            x = null;
            break;
          }
          if (((f = x.sibling), f !== null)) {
            ((f.return = x.return), (x = f));
            break;
          }
          x = x.return;
        }
      f = x;
    }
  }
  function Ks(e, s, l, c) {
    e = null;
    for (var f = s, m = !1; f !== null;) {
      if (!m) {
        if ((f.flags & 524288) !== 0) m = !0;
        else if ((f.flags & 262144) !== 0) break;
      }
      if (f.tag === 10) {
        var x = f.alternate;
        if (x === null) throw Error(a(387));
        if (((x = x.memoizedProps), x !== null)) {
          var w = f.type;
          Ie(f.pendingProps.value, x.value) ||
            (e !== null ? e.push(w) : (e = [w]));
        }
      } else if (f === mt.current) {
        if (((x = f.alternate), x === null)) throw Error(a(387));
        x.memoizedState.memoizedState !== f.memoizedState.memoizedState &&
          (e !== null ? e.push(xl) : (e = [xl]));
      }
      f = f.return;
    }
    (e !== null && su(s, e, l, c), (s.flags |= 262144));
  }
  function ko(e) {
    for (e = e.firstContext; e !== null;) {
      if (!Ie(e.context._currentValue, e.memoizedValue)) return !0;
      e = e.next;
    }
    return !1;
  }
  function ls(e) {
    ((as = e),
      (Fn = null),
      (e = e.dependencies),
      e !== null && (e.firstContext = null));
  }
  function Ae(e) {
    return nm(as, e);
  }
  function Eo(e, s) {
    return (as === null && ls(e), nm(e, s));
  }
  function nm(e, s) {
    var l = s._currentValue;
    if (((s = { context: s, memoizedValue: l, next: null }), Fn === null)) {
      if (e === null) throw Error(a(308));
      ((Fn = s),
        (e.dependencies = { lanes: 0, firstContext: s }),
        (e.flags |= 524288));
    } else Fn = Fn.next = s;
    return l;
  }
  var zv =
      typeof AbortController < "u"
        ? AbortController
        : function () {
            var e = [],
              s = (this.signal = {
                aborted: !1,
                addEventListener: function (l, c) {
                  e.push(c);
                },
              });
            this.abort = function () {
              ((s.aborted = !0),
                e.forEach(function (l) {
                  return l();
                }));
            };
          },
    Dv = n.unstable_scheduleCallback,
    Lv = n.unstable_NormalPriority,
    de = {
      $$typeof: U,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function au() {
    return { controller: new zv(), data: new Map(), refCount: 0 };
  }
  function Ga(e) {
    (e.refCount--,
      e.refCount === 0 &&
        Dv(Lv, function () {
          e.controller.abort();
        }));
  }
  var Za = null,
    lu = 0,
    Ws = 0,
    $s = null;
  function Bv(e, s) {
    if (Za === null) {
      var l = (Za = []);
      ((lu = 0),
        (Ws = cd()),
        ($s = {
          status: "pending",
          value: void 0,
          then: function (c) {
            l.push(c);
          },
        }));
    }
    return (lu++, s.then(im, im), s);
  }
  function im() {
    if (--lu === 0 && Za !== null) {
      $s !== null && ($s.status = "fulfilled");
      var e = Za;
      ((Za = null), (Ws = 0), ($s = null));
      for (var s = 0; s < e.length; s++) (0, e[s])();
    }
  }
  function Rv(e, s) {
    var l = [],
      c = {
        status: "pending",
        value: null,
        reason: null,
        then: function (f) {
          l.push(f);
        },
      };
    return (
      e.then(
        function () {
          ((c.status = "fulfilled"), (c.value = s));
          for (var f = 0; f < l.length; f++) (0, l[f])(s);
        },
        function (f) {
          for (c.status = "rejected", c.reason = f, f = 0; f < l.length; f++)
            (0, l[f])(void 0);
        },
      ),
      c
    );
  }
  var sm = D.S;
  D.S = function (e, s) {
    ((qg = ue()),
      typeof s == "object" &&
        s !== null &&
        typeof s.then == "function" &&
        Bv(e, s),
      sm !== null && sm(e, s));
  };
  var os = Xt(null);
  function ou() {
    var e = os.current;
    return e !== null ? e : qt.pooledCache;
  }
  function Co(e, s) {
    s === null ? ft(os, os.current) : ft(os, s.pool);
  }
  function am() {
    var e = ou();
    return e === null ? null : { parent: de._currentValue, pool: e };
  }
  var Is = Error(a(460)),
    ru = Error(a(474)),
    jo = Error(a(542)),
    To = { then: function () {} };
  function lm(e) {
    return ((e = e.status), e === "fulfilled" || e === "rejected");
  }
  function om(e, s, l) {
    switch (
      ((l = e[l]),
      l === void 0 ? e.push(s) : l !== s && (s.then(qn, qn), (s = l)),
      s.status)
    ) {
      case "fulfilled":
        return s.value;
      case "rejected":
        throw ((e = s.reason), cm(e), e);
      default:
        if (typeof s.status == "string") s.then(qn, qn);
        else {
          if (((e = qt), e !== null && 100 < e.shellSuspendCounter))
            throw Error(a(482));
          ((e = s),
            (e.status = "pending"),
            e.then(
              function (c) {
                if (s.status === "pending") {
                  var f = s;
                  ((f.status = "fulfilled"), (f.value = c));
                }
              },
              function (c) {
                if (s.status === "pending") {
                  var f = s;
                  ((f.status = "rejected"), (f.reason = c));
                }
              },
            ));
        }
        switch (s.status) {
          case "fulfilled":
            return s.value;
          case "rejected":
            throw ((e = s.reason), cm(e), e);
        }
        throw ((cs = s), Is);
    }
  }
  function rs(e) {
    try {
      var s = e._init;
      return s(e._payload);
    } catch (l) {
      throw l !== null && typeof l == "object" && typeof l.then == "function"
        ? ((cs = l), Is)
        : l;
    }
  }
  var cs = null;
  function rm() {
    if (cs === null) throw Error(a(459));
    var e = cs;
    return ((cs = null), e);
  }
  function cm(e) {
    if (e === Is || e === jo) throw Error(a(483));
  }
  var Js = null,
    Qa = 0;
  function No(e) {
    var s = Qa;
    return ((Qa += 1), Js === null && (Js = []), om(Js, e, s));
  }
  function Ka(e, s) {
    ((s = s.props.ref), (e.ref = s !== void 0 ? s : null));
  }
  function Oo(e, s) {
    throw s.$$typeof === v
      ? Error(a(525))
      : ((e = Object.prototype.toString.call(s)),
        Error(
          a(
            31,
            e === "[object Object]"
              ? "object with keys {" + Object.keys(s).join(", ") + "}"
              : e,
          ),
        ));
  }
  function um(e) {
    function s(C, E) {
      if (e) {
        var T = C.deletions;
        T === null ? ((C.deletions = [E]), (C.flags |= 16)) : T.push(E);
      }
    }
    function l(C, E) {
      if (!e) return null;
      for (; E !== null;) (s(C, E), (E = E.sibling));
      return null;
    }
    function c(C) {
      for (var E = new Map(); C !== null;)
        (C.key !== null ? E.set(C.key, C) : E.set(C.index, C), (C = C.sibling));
      return E;
    }
    function f(C, E) {
      return ((C = Xn(C, E)), (C.index = 0), (C.sibling = null), C);
    }
    function m(C, E, T) {
      return (
        (C.index = T),
        e
          ? ((T = C.alternate),
            T !== null
              ? ((T = T.index), T < E ? ((C.flags |= 67108866), E) : T)
              : ((C.flags |= 67108866), E))
          : ((C.flags |= 1048576), E)
      );
    }
    function x(C) {
      return (e && C.alternate === null && (C.flags |= 67108866), C);
    }
    function w(C, E, T, V) {
      return E === null || E.tag !== 6
        ? ((E = Wc(T, C.mode, V)), (E.return = C), E)
        : ((E = f(E, T)), (E.return = C), E);
    }
    function A(C, E, T, V) {
      var st = T.type;
      return st === M
        ? H(C, E, T.props.children, V, T.key)
        : E !== null &&
            (E.elementType === st ||
              (typeof st == "object" &&
                st !== null &&
                st.$$typeof === G &&
                rs(st) === E.type))
          ? ((E = f(E, T.props)), Ka(E, T), (E.return = C), E)
          : ((E = Mo(T.type, T.key, T.props, null, C.mode, V)),
            Ka(E, T),
            (E.return = C),
            E);
    }
    function N(C, E, T, V) {
      return E === null ||
        E.tag !== 4 ||
        E.stateNode.containerInfo !== T.containerInfo ||
        E.stateNode.implementation !== T.implementation
        ? ((E = $c(T, C.mode, V)), (E.return = C), E)
        : ((E = f(E, T.children || [])), (E.return = C), E);
    }
    function H(C, E, T, V, st) {
      return E === null || E.tag !== 7
        ? ((E = is(T, C.mode, V, st)), (E.return = C), E)
        : ((E = f(E, T)), (E.return = C), E);
    }
    function Y(C, E, T) {
      if (
        (typeof E == "string" && E !== "") ||
        typeof E == "number" ||
        typeof E == "bigint"
      )
        return ((E = Wc("" + E, C.mode, T)), (E.return = C), E);
      if (typeof E == "object" && E !== null) {
        switch (E.$$typeof) {
          case _:
            return (
              (T = Mo(E.type, E.key, E.props, null, C.mode, T)),
              Ka(T, E),
              (T.return = C),
              T
            );
          case S:
            return ((E = $c(E, C.mode, T)), (E.return = C), E);
          case G:
            return ((E = rs(E)), Y(C, E, T));
        }
        if (ut(E) || $(E))
          return ((E = is(E, C.mode, T, null)), (E.return = C), E);
        if (typeof E.then == "function") return Y(C, No(E), T);
        if (E.$$typeof === U) return Y(C, Eo(C, E), T);
        Oo(C, E);
      }
      return null;
    }
    function O(C, E, T, V) {
      var st = E !== null ? E.key : null;
      if (
        (typeof T == "string" && T !== "") ||
        typeof T == "number" ||
        typeof T == "bigint"
      )
        return st !== null ? null : w(C, E, "" + T, V);
      if (typeof T == "object" && T !== null) {
        switch (T.$$typeof) {
          case _:
            return T.key === st ? A(C, E, T, V) : null;
          case S:
            return T.key === st ? N(C, E, T, V) : null;
          case G:
            return ((T = rs(T)), O(C, E, T, V));
        }
        if (ut(T) || $(T)) return st !== null ? null : H(C, E, T, V, null);
        if (typeof T.then == "function") return O(C, E, No(T), V);
        if (T.$$typeof === U) return O(C, E, Eo(C, T), V);
        Oo(C, T);
      }
      return null;
    }
    function L(C, E, T, V, st) {
      if (
        (typeof V == "string" && V !== "") ||
        typeof V == "number" ||
        typeof V == "bigint"
      )
        return ((C = C.get(T) || null), w(E, C, "" + V, st));
      if (typeof V == "object" && V !== null) {
        switch (V.$$typeof) {
          case _:
            return (
              (C = C.get(V.key === null ? T : V.key) || null),
              A(E, C, V, st)
            );
          case S:
            return (
              (C = C.get(V.key === null ? T : V.key) || null),
              N(E, C, V, st)
            );
          case G:
            return ((V = rs(V)), L(C, E, T, V, st));
        }
        if (ut(V) || $(V))
          return ((C = C.get(T) || null), H(E, C, V, st, null));
        if (typeof V.then == "function") return L(C, E, T, No(V), st);
        if (V.$$typeof === U) return L(C, E, T, Eo(E, V), st);
        Oo(E, V);
      }
      return null;
    }
    function tt(C, E, T, V) {
      for (
        var st = null, Et = null, et = E, gt = (E = 0), _t = null;
        et !== null && gt < T.length;
        gt++
      ) {
        et.index > gt ? ((_t = et), (et = null)) : (_t = et.sibling);
        var Ct = O(C, et, T[gt], V);
        if (Ct === null) {
          et === null && (et = _t);
          break;
        }
        (e && et && Ct.alternate === null && s(C, et),
          (E = m(Ct, E, gt)),
          Et === null ? (st = Ct) : (Et.sibling = Ct),
          (Et = Ct),
          (et = _t));
      }
      if (gt === T.length) return (l(C, et), At && Pn(C, gt), st);
      if (et === null) {
        for (; gt < T.length; gt++)
          ((et = Y(C, T[gt], V)),
            et !== null &&
              ((E = m(et, E, gt)),
              Et === null ? (st = et) : (Et.sibling = et),
              (Et = et)));
        return (At && Pn(C, gt), st);
      }
      for (et = c(et); gt < T.length; gt++)
        ((_t = L(et, C, gt, T[gt], V)),
          _t !== null &&
            (e &&
              _t.alternate !== null &&
              et.delete(_t.key === null ? gt : _t.key),
            (E = m(_t, E, gt)),
            Et === null ? (st = _t) : (Et.sibling = _t),
            (Et = _t)));
      return (
        e &&
          et.forEach(function (Ri) {
            return s(C, Ri);
          }),
        At && Pn(C, gt),
        st
      );
    }
    function ot(C, E, T, V) {
      if (T == null) throw Error(a(151));
      for (
        var st = null,
          Et = null,
          et = E,
          gt = (E = 0),
          _t = null,
          Ct = T.next();
        et !== null && !Ct.done;
        gt++, Ct = T.next()
      ) {
        et.index > gt ? ((_t = et), (et = null)) : (_t = et.sibling);
        var Ri = O(C, et, Ct.value, V);
        if (Ri === null) {
          et === null && (et = _t);
          break;
        }
        (e && et && Ri.alternate === null && s(C, et),
          (E = m(Ri, E, gt)),
          Et === null ? (st = Ri) : (Et.sibling = Ri),
          (Et = Ri),
          (et = _t));
      }
      if (Ct.done) return (l(C, et), At && Pn(C, gt), st);
      if (et === null) {
        for (; !Ct.done; gt++, Ct = T.next())
          ((Ct = Y(C, Ct.value, V)),
            Ct !== null &&
              ((E = m(Ct, E, gt)),
              Et === null ? (st = Ct) : (Et.sibling = Ct),
              (Et = Ct)));
        return (At && Pn(C, gt), st);
      }
      for (et = c(et); !Ct.done; gt++, Ct = T.next())
        ((Ct = L(et, C, gt, Ct.value, V)),
          Ct !== null &&
            (e &&
              Ct.alternate !== null &&
              et.delete(Ct.key === null ? gt : Ct.key),
            (E = m(Ct, E, gt)),
            Et === null ? (st = Ct) : (Et.sibling = Ct),
            (Et = Ct)));
      return (
        e &&
          et.forEach(function (Q2) {
            return s(C, Q2);
          }),
        At && Pn(C, gt),
        st
      );
    }
    function Ut(C, E, T, V) {
      if (
        (typeof T == "object" &&
          T !== null &&
          T.type === M &&
          T.key === null &&
          (T = T.props.children),
        typeof T == "object" && T !== null)
      ) {
        switch (T.$$typeof) {
          case _:
            t: {
              for (var st = T.key; E !== null;) {
                if (E.key === st) {
                  if (((st = T.type), st === M)) {
                    if (E.tag === 7) {
                      (l(C, E.sibling),
                        (V = f(E, T.props.children)),
                        (V.return = C),
                        (C = V));
                      break t;
                    }
                  } else if (
                    E.elementType === st ||
                    (typeof st == "object" &&
                      st !== null &&
                      st.$$typeof === G &&
                      rs(st) === E.type)
                  ) {
                    (l(C, E.sibling),
                      (V = f(E, T.props)),
                      Ka(V, T),
                      (V.return = C),
                      (C = V));
                    break t;
                  }
                  l(C, E);
                  break;
                } else s(C, E);
                E = E.sibling;
              }
              T.type === M
                ? ((V = is(T.props.children, C.mode, V, T.key)),
                  (V.return = C),
                  (C = V))
                : ((V = Mo(T.type, T.key, T.props, null, C.mode, V)),
                  Ka(V, T),
                  (V.return = C),
                  (C = V));
            }
            return x(C);
          case S:
            t: {
              for (st = T.key; E !== null;) {
                if (E.key === st)
                  if (
                    E.tag === 4 &&
                    E.stateNode.containerInfo === T.containerInfo &&
                    E.stateNode.implementation === T.implementation
                  ) {
                    (l(C, E.sibling),
                      (V = f(E, T.children || [])),
                      (V.return = C),
                      (C = V));
                    break t;
                  } else {
                    l(C, E);
                    break;
                  }
                else s(C, E);
                E = E.sibling;
              }
              ((V = $c(T, C.mode, V)), (V.return = C), (C = V));
            }
            return x(C);
          case G:
            return ((T = rs(T)), Ut(C, E, T, V));
        }
        if (ut(T)) return tt(C, E, T, V);
        if ($(T)) {
          if (((st = $(T)), typeof st != "function")) throw Error(a(150));
          return ((T = st.call(T)), ot(C, E, T, V));
        }
        if (typeof T.then == "function") return Ut(C, E, No(T), V);
        if (T.$$typeof === U) return Ut(C, E, Eo(C, T), V);
        Oo(C, T);
      }
      return (typeof T == "string" && T !== "") ||
        typeof T == "number" ||
        typeof T == "bigint"
        ? ((T = "" + T),
          E !== null && E.tag === 6
            ? (l(C, E.sibling), (V = f(E, T)), (V.return = C), (C = V))
            : (l(C, E), (V = Wc(T, C.mode, V)), (V.return = C), (C = V)),
          x(C))
        : l(C, E);
    }
    return function (C, E, T, V) {
      try {
        Qa = 0;
        var st = Ut(C, E, T, V);
        return ((Js = null), st);
      } catch (et) {
        if (et === Is || et === jo) throw et;
        var Et = Je(29, et, null, C.mode);
        return ((Et.lanes = V), (Et.return = C), Et);
      } finally {
      }
    };
  }
  var us = um(!0),
    dm = um(!1),
    vi = !1;
  function cu(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function uu(e, s) {
    ((e = e.updateQueue),
      s.updateQueue === e &&
        (s.updateQueue = {
          baseState: e.baseState,
          firstBaseUpdate: e.firstBaseUpdate,
          lastBaseUpdate: e.lastBaseUpdate,
          shared: e.shared,
          callbacks: null,
        }));
  }
  function wi(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null };
  }
  function _i(e, s, l) {
    var c = e.updateQueue;
    if (c === null) return null;
    if (((c = c.shared), (Tt & 2) !== 0)) {
      var f = c.pending;
      return (
        f === null ? (s.next = s) : ((s.next = f.next), (f.next = s)),
        (c.pending = s),
        (s = So(e)),
        Qh(e, null, l),
        s
      );
    }
    return (_o(e, c, s, l), So(e));
  }
  function Wa(e, s, l) {
    if (
      ((s = s.updateQueue), s !== null && ((s = s.shared), (l & 4194048) !== 0))
    ) {
      var c = s.lanes;
      ((c &= e.pendingLanes), (l |= c), (s.lanes = l), nh(e, l));
    }
  }
  function du(e, s) {
    var l = e.updateQueue,
      c = e.alternate;
    if (c !== null && ((c = c.updateQueue), l === c)) {
      var f = null,
        m = null;
      if (((l = l.firstBaseUpdate), l !== null)) {
        do {
          var x = {
            lane: l.lane,
            tag: l.tag,
            payload: l.payload,
            callback: null,
            next: null,
          };
          (m === null ? (f = m = x) : (m = m.next = x), (l = l.next));
        } while (l !== null);
        m === null ? (f = m = s) : (m = m.next = s);
      } else f = m = s;
      ((l = {
        baseState: c.baseState,
        firstBaseUpdate: f,
        lastBaseUpdate: m,
        shared: c.shared,
        callbacks: c.callbacks,
      }),
        (e.updateQueue = l));
      return;
    }
    ((e = l.lastBaseUpdate),
      e === null ? (l.firstBaseUpdate = s) : (e.next = s),
      (l.lastBaseUpdate = s));
  }
  var fu = !1;
  function $a() {
    if (fu) {
      var e = $s;
      if (e !== null) throw e;
    }
  }
  function Ia(e, s, l, c) {
    fu = !1;
    var f = e.updateQueue;
    vi = !1;
    var m = f.firstBaseUpdate,
      x = f.lastBaseUpdate,
      w = f.shared.pending;
    if (w !== null) {
      f.shared.pending = null;
      var A = w,
        N = A.next;
      ((A.next = null), x === null ? (m = N) : (x.next = N), (x = A));
      var H = e.alternate;
      H !== null &&
        ((H = H.updateQueue),
        (w = H.lastBaseUpdate),
        w !== x &&
          (w === null ? (H.firstBaseUpdate = N) : (w.next = N),
          (H.lastBaseUpdate = A)));
    }
    if (m !== null) {
      var Y = f.baseState;
      ((x = 0), (H = N = A = null), (w = m));
      do {
        var O = w.lane & -536870913,
          L = O !== w.lane;
        if (L ? (wt & O) === O : (c & O) === O) {
          (O !== 0 && O === Ws && (fu = !0),
            H !== null &&
              (H = H.next =
                {
                  lane: 0,
                  tag: w.tag,
                  payload: w.payload,
                  callback: null,
                  next: null,
                }));
          t: {
            var tt = e,
              ot = w;
            O = s;
            var Ut = l;
            switch (ot.tag) {
              case 1:
                if (((tt = ot.payload), typeof tt == "function")) {
                  Y = tt.call(Ut, Y, O);
                  break t;
                }
                Y = tt;
                break t;
              case 3:
                tt.flags = (tt.flags & -65537) | 128;
              case 0:
                if (
                  ((tt = ot.payload),
                  (O = typeof tt == "function" ? tt.call(Ut, Y, O) : tt),
                  O == null)
                )
                  break t;
                Y = y({}, Y, O);
                break t;
              case 2:
                vi = !0;
            }
          }
          ((O = w.callback),
            O !== null &&
              ((e.flags |= 64),
              L && (e.flags |= 8192),
              (L = f.callbacks),
              L === null ? (f.callbacks = [O]) : L.push(O)));
        } else
          ((L = {
            lane: O,
            tag: w.tag,
            payload: w.payload,
            callback: w.callback,
            next: null,
          }),
            H === null ? ((N = H = L), (A = Y)) : (H = H.next = L),
            (x |= O));
        if (((w = w.next), w === null)) {
          if (((w = f.shared.pending), w === null)) break;
          ((L = w),
            (w = L.next),
            (L.next = null),
            (f.lastBaseUpdate = L),
            (f.shared.pending = null));
        }
      } while (!0);
      (H === null && (A = Y),
        (f.baseState = A),
        (f.firstBaseUpdate = N),
        (f.lastBaseUpdate = H),
        m === null && (f.shared.lanes = 0),
        (Ei |= x),
        (e.lanes = x),
        (e.memoizedState = Y));
    }
  }
  function fm(e, s) {
    if (typeof e != "function") throw Error(a(191, e));
    e.call(s);
  }
  function hm(e, s) {
    var l = e.callbacks;
    if (l !== null)
      for (e.callbacks = null, e = 0; e < l.length; e++) fm(l[e], s);
  }
  var ta = Xt(null),
    zo = Xt(0);
  function mm(e, s) {
    ((e = ei), ft(zo, e), ft(ta, s), (ei = e | s.baseLanes));
  }
  function hu() {
    (ft(zo, ei), ft(ta, ta.current));
  }
  function mu() {
    ((ei = zo.current), Mt(ta), Mt(zo));
  }
  var tn = Xt(null),
    xn = null;
  function Si(e) {
    var s = e.alternate;
    (ft(ae, ae.current & 1),
      ft(tn, e),
      xn === null &&
        (s === null || ta.current !== null || s.memoizedState !== null) &&
        (xn = e));
  }
  function gu(e) {
    (ft(ae, ae.current), ft(tn, e), xn === null && (xn = e));
  }
  function gm(e) {
    e.tag === 22
      ? (ft(ae, ae.current), ft(tn, e), xn === null && (xn = e))
      : Mi();
  }
  function Mi() {
    (ft(ae, ae.current), ft(tn, tn.current));
  }
  function en(e) {
    (Mt(tn), xn === e && (xn = null), Mt(ae));
  }
  var ae = Xt(0);
  function Do(e) {
    for (var s = e; s !== null;) {
      if (s.tag === 13) {
        var l = s.memoizedState;
        if (l !== null && ((l = l.dehydrated), l === null || wd(l) || _d(l)))
          return s;
      } else if (
        s.tag === 19 &&
        (s.memoizedProps.revealOrder === "forwards" ||
          s.memoizedProps.revealOrder === "backwards" ||
          s.memoizedProps.revealOrder === "unstable_legacy-backwards" ||
          s.memoizedProps.revealOrder === "together")
      ) {
        if ((s.flags & 128) !== 0) return s;
      } else if (s.child !== null) {
        ((s.child.return = s), (s = s.child));
        continue;
      }
      if (s === e) break;
      for (; s.sibling === null;) {
        if (s.return === null || s.return === e) return null;
        s = s.return;
      }
      ((s.sibling.return = s.return), (s = s.sibling));
    }
    return null;
  }
  var Zn = 0,
    ht = null,
    Rt = null,
    fe = null,
    Lo = !1,
    ea = !1,
    ds = !1,
    Bo = 0,
    Ja = 0,
    na = null,
    Hv = 0;
  function te() {
    throw Error(a(321));
  }
  function pu(e, s) {
    if (s === null) return !1;
    for (var l = 0; l < s.length && l < e.length; l++)
      if (!Ie(e[l], s[l])) return !1;
    return !0;
  }
  function bu(e, s, l, c, f, m) {
    return (
      (Zn = m),
      (ht = s),
      (s.memoizedState = null),
      (s.updateQueue = null),
      (s.lanes = 0),
      (D.H = e === null || e.memoizedState === null ? Im : Ou),
      (ds = !1),
      (m = l(c, f)),
      (ds = !1),
      ea && (m = bm(s, l, c, f)),
      pm(e),
      m
    );
  }
  function pm(e) {
    D.H = nl;
    var s = Rt !== null && Rt.next !== null;
    if (((Zn = 0), (fe = Rt = ht = null), (Lo = !1), (Ja = 0), (na = null), s))
      throw Error(a(300));
    e === null ||
      he ||
      ((e = e.dependencies), e !== null && ko(e) && (he = !0));
  }
  function bm(e, s, l, c) {
    ht = e;
    var f = 0;
    do {
      if ((ea && (na = null), (Ja = 0), (ea = !1), 25 <= f))
        throw Error(a(301));
      if (((f += 1), (fe = Rt = null), e.updateQueue != null)) {
        var m = e.updateQueue;
        ((m.lastEffect = null),
          (m.events = null),
          (m.stores = null),
          m.memoCache != null && (m.memoCache.index = 0));
      }
      ((D.H = Jm), (m = s(l, c)));
    } while (ea);
    return m;
  }
  function Uv() {
    var e = D.H,
      s = e.useState()[0];
    return (
      (s = typeof s.then == "function" ? tl(s) : s),
      (e = e.useState()[0]),
      (Rt !== null ? Rt.memoizedState : null) !== e && (ht.flags |= 1024),
      s
    );
  }
  function xu() {
    var e = Bo !== 0;
    return ((Bo = 0), e);
  }
  function yu(e, s, l) {
    ((s.updateQueue = e.updateQueue), (s.flags &= -2053), (e.lanes &= ~l));
  }
  function vu(e) {
    if (Lo) {
      for (e = e.memoizedState; e !== null;) {
        var s = e.queue;
        (s !== null && (s.pending = null), (e = e.next));
      }
      Lo = !1;
    }
    ((Zn = 0), (fe = Rt = ht = null), (ea = !1), (Ja = Bo = 0), (na = null));
  }
  function De() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return (fe === null ? (ht.memoizedState = fe = e) : (fe = fe.next = e), fe);
  }
  function le() {
    if (Rt === null) {
      var e = ht.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Rt.next;
    var s = fe === null ? ht.memoizedState : fe.next;
    if (s !== null) ((fe = s), (Rt = e));
    else {
      if (e === null)
        throw ht.alternate === null ? Error(a(467)) : Error(a(310));
      ((Rt = e),
        (e = {
          memoizedState: Rt.memoizedState,
          baseState: Rt.baseState,
          baseQueue: Rt.baseQueue,
          queue: Rt.queue,
          next: null,
        }),
        fe === null ? (ht.memoizedState = fe = e) : (fe = fe.next = e));
    }
    return fe;
  }
  function Ro() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function tl(e) {
    var s = Ja;
    return (
      (Ja += 1),
      na === null && (na = []),
      (e = om(na, e, s)),
      (s = ht),
      (fe === null ? s.memoizedState : fe.next) === null &&
        ((s = s.alternate),
        (D.H = s === null || s.memoizedState === null ? Im : Ou)),
      e
    );
  }
  function Ho(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return tl(e);
      if (e.$$typeof === U) return Ae(e);
    }
    throw Error(a(438, String(e)));
  }
  function wu(e) {
    var s = null,
      l = ht.updateQueue;
    if ((l !== null && (s = l.memoCache), s == null)) {
      var c = ht.alternate;
      c !== null &&
        ((c = c.updateQueue),
        c !== null &&
          ((c = c.memoCache),
          c != null &&
            (s = {
              data: c.data.map(function (f) {
                return f.slice();
              }),
              index: 0,
            })));
    }
    if (
      (s == null && (s = { data: [], index: 0 }),
      l === null && ((l = Ro()), (ht.updateQueue = l)),
      (l.memoCache = s),
      (l = s.data[s.index]),
      l === void 0)
    )
      for (l = s.data[s.index] = Array(e), c = 0; c < e; c++) l[c] = lt;
    return (s.index++, l);
  }
  function Qn(e, s) {
    return typeof s == "function" ? s(e) : s;
  }
  function Uo(e) {
    var s = le();
    return _u(s, Rt, e);
  }
  function _u(e, s, l) {
    var c = e.queue;
    if (c === null) throw Error(a(311));
    c.lastRenderedReducer = l;
    var f = e.baseQueue,
      m = c.pending;
    if (m !== null) {
      if (f !== null) {
        var x = f.next;
        ((f.next = m.next), (m.next = x));
      }
      ((s.baseQueue = f = m), (c.pending = null));
    }
    if (((m = e.baseState), f === null)) e.memoizedState = m;
    else {
      s = f.next;
      var w = (x = null),
        A = null,
        N = s,
        H = !1;
      do {
        var Y = N.lane & -536870913;
        if (Y !== N.lane ? (wt & Y) === Y : (Zn & Y) === Y) {
          var O = N.revertLane;
          if (O === 0)
            (A !== null &&
              (A = A.next =
                {
                  lane: 0,
                  revertLane: 0,
                  gesture: null,
                  action: N.action,
                  hasEagerState: N.hasEagerState,
                  eagerState: N.eagerState,
                  next: null,
                }),
              Y === Ws && (H = !0));
          else if ((Zn & O) === O) {
            ((N = N.next), O === Ws && (H = !0));
            continue;
          } else
            ((Y = {
              lane: 0,
              revertLane: N.revertLane,
              gesture: null,
              action: N.action,
              hasEagerState: N.hasEagerState,
              eagerState: N.eagerState,
              next: null,
            }),
              A === null ? ((w = A = Y), (x = m)) : (A = A.next = Y),
              (ht.lanes |= O),
              (Ei |= O));
          ((Y = N.action),
            ds && l(m, Y),
            (m = N.hasEagerState ? N.eagerState : l(m, Y)));
        } else
          ((O = {
            lane: Y,
            revertLane: N.revertLane,
            gesture: N.gesture,
            action: N.action,
            hasEagerState: N.hasEagerState,
            eagerState: N.eagerState,
            next: null,
          }),
            A === null ? ((w = A = O), (x = m)) : (A = A.next = O),
            (ht.lanes |= Y),
            (Ei |= Y));
        N = N.next;
      } while (N !== null && N !== s);
      if (
        (A === null ? (x = m) : (A.next = w),
        !Ie(m, e.memoizedState) && ((he = !0), H && ((l = $s), l !== null)))
      )
        throw l;
      ((e.memoizedState = m),
        (e.baseState = x),
        (e.baseQueue = A),
        (c.lastRenderedState = m));
    }
    return (f === null && (c.lanes = 0), [e.memoizedState, c.dispatch]);
  }
  function Su(e) {
    var s = le(),
      l = s.queue;
    if (l === null) throw Error(a(311));
    l.lastRenderedReducer = e;
    var c = l.dispatch,
      f = l.pending,
      m = s.memoizedState;
    if (f !== null) {
      l.pending = null;
      var x = (f = f.next);
      do ((m = e(m, x.action)), (x = x.next));
      while (x !== f);
      (Ie(m, s.memoizedState) || (he = !0),
        (s.memoizedState = m),
        s.baseQueue === null && (s.baseState = m),
        (l.lastRenderedState = m));
    }
    return [m, c];
  }
  function xm(e, s, l) {
    var c = ht,
      f = le(),
      m = At;
    if (m) {
      if (l === void 0) throw Error(a(407));
      l = l();
    } else l = s();
    var x = !Ie((Rt || f).memoizedState, l);
    if (
      (x && ((f.memoizedState = l), (he = !0)),
      (f = f.queue),
      ku(wm.bind(null, c, f, e), [e]),
      f.getSnapshot !== s || x || (fe !== null && fe.memoizedState.tag & 1))
    ) {
      if (
        ((c.flags |= 2048),
        ia(9, { destroy: void 0 }, vm.bind(null, c, f, l, s), null),
        qt === null)
      )
        throw Error(a(349));
      m || (Zn & 127) !== 0 || ym(c, s, l);
    }
    return l;
  }
  function ym(e, s, l) {
    ((e.flags |= 16384),
      (e = { getSnapshot: s, value: l }),
      (s = ht.updateQueue),
      s === null
        ? ((s = Ro()), (ht.updateQueue = s), (s.stores = [e]))
        : ((l = s.stores), l === null ? (s.stores = [e]) : l.push(e)));
  }
  function vm(e, s, l, c) {
    ((s.value = l), (s.getSnapshot = c), _m(s) && Sm(e));
  }
  function wm(e, s, l) {
    return l(function () {
      _m(s) && Sm(e);
    });
  }
  function _m(e) {
    var s = e.getSnapshot;
    e = e.value;
    try {
      var l = s();
      return !Ie(e, l);
    } catch {
      return !0;
    }
  }
  function Sm(e) {
    var s = ns(e, 2);
    s !== null && Ge(s, e, 2);
  }
  function Mu(e) {
    var s = De();
    if (typeof e == "function") {
      var l = e;
      if (((e = l()), ds)) {
        hi(!0);
        try {
          l();
        } finally {
          hi(!1);
        }
      }
    }
    return (
      (s.memoizedState = s.baseState = e),
      (s.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Qn,
        lastRenderedState: e,
      }),
      s
    );
  }
  function Mm(e, s, l, c) {
    return ((e.baseState = l), _u(e, Rt, typeof c == "function" ? c : Qn));
  }
  function Vv(e, s, l, c, f) {
    if (Yo(e)) throw Error(a(485));
    if (((e = s.action), e !== null)) {
      var m = {
        payload: f,
        action: e,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function (x) {
          m.listeners.push(x);
        },
      };
      (D.T !== null ? l(!0) : (m.isTransition = !1),
        c(m),
        (l = s.pending),
        l === null
          ? ((m.next = s.pending = m), Am(s, m))
          : ((m.next = l.next), (s.pending = l.next = m)));
    }
  }
  function Am(e, s) {
    var l = s.action,
      c = s.payload,
      f = e.state;
    if (s.isTransition) {
      var m = D.T,
        x = {};
      D.T = x;
      try {
        var w = l(f, c),
          A = D.S;
        (A !== null && A(x, w), km(e, s, w));
      } catch (N) {
        Au(e, s, N);
      } finally {
        (m !== null && x.types !== null && (m.types = x.types), (D.T = m));
      }
    } else
      try {
        ((m = l(f, c)), km(e, s, m));
      } catch (N) {
        Au(e, s, N);
      }
  }
  function km(e, s, l) {
    l !== null && typeof l == "object" && typeof l.then == "function"
      ? l.then(
          function (c) {
            Em(e, s, c);
          },
          function (c) {
            return Au(e, s, c);
          },
        )
      : Em(e, s, l);
  }
  function Em(e, s, l) {
    ((s.status = "fulfilled"),
      (s.value = l),
      Cm(s),
      (e.state = l),
      (s = e.pending),
      s !== null &&
        ((l = s.next),
        l === s ? (e.pending = null) : ((l = l.next), (s.next = l), Am(e, l))));
  }
  function Au(e, s, l) {
    var c = e.pending;
    if (((e.pending = null), c !== null)) {
      c = c.next;
      do ((s.status = "rejected"), (s.reason = l), Cm(s), (s = s.next));
      while (s !== c);
    }
    e.action = null;
  }
  function Cm(e) {
    e = e.listeners;
    for (var s = 0; s < e.length; s++) (0, e[s])();
  }
  function jm(e, s) {
    return s;
  }
  function Tm(e, s) {
    if (At) {
      var l = qt.formState;
      if (l !== null) {
        t: {
          var c = ht;
          if (At) {
            if (Ft) {
              e: {
                for (var f = Ft, m = bn; f.nodeType !== 8;) {
                  if (!m) {
                    f = null;
                    break e;
                  }
                  if (((f = yn(f.nextSibling)), f === null)) {
                    f = null;
                    break e;
                  }
                }
                ((m = f.data), (f = m === "F!" || m === "F" ? f : null));
              }
              if (f) {
                ((Ft = yn(f.nextSibling)), (c = f.data === "F!"));
                break t;
              }
            }
            xi(c);
          }
          c = !1;
        }
        c && (s = l[0]);
      }
    }
    return (
      (l = De()),
      (l.memoizedState = l.baseState = s),
      (c = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: jm,
        lastRenderedState: s,
      }),
      (l.queue = c),
      (l = Km.bind(null, ht, c)),
      (c.dispatch = l),
      (c = Mu(!1)),
      (m = Nu.bind(null, ht, !1, c.queue)),
      (c = De()),
      (f = { state: s, dispatch: null, action: e, pending: null }),
      (c.queue = f),
      (l = Vv.bind(null, ht, f, m, l)),
      (f.dispatch = l),
      (c.memoizedState = e),
      [s, l, !1]
    );
  }
  function Nm(e) {
    var s = le();
    return Om(s, Rt, e);
  }
  function Om(e, s, l) {
    if (
      ((s = _u(e, s, jm)[0]),
      (e = Uo(Qn)[0]),
      typeof s == "object" && s !== null && typeof s.then == "function")
    )
      try {
        var c = tl(s);
      } catch (x) {
        throw x === Is ? jo : x;
      }
    else c = s;
    s = le();
    var f = s.queue,
      m = f.dispatch;
    return (
      l !== s.memoizedState &&
        ((ht.flags |= 2048),
        ia(9, { destroy: void 0 }, qv.bind(null, f, l), null)),
      [c, m, e]
    );
  }
  function qv(e, s) {
    e.action = s;
  }
  function zm(e) {
    var s = le(),
      l = Rt;
    if (l !== null) return Om(s, l, e);
    (le(), (s = s.memoizedState), (l = le()));
    var c = l.queue.dispatch;
    return ((l.memoizedState = e), [s, c, !1]);
  }
  function ia(e, s, l, c) {
    return (
      (e = { tag: e, create: l, deps: c, inst: s, next: null }),
      (s = ht.updateQueue),
      s === null && ((s = Ro()), (ht.updateQueue = s)),
      (l = s.lastEffect),
      l === null
        ? (s.lastEffect = e.next = e)
        : ((c = l.next), (l.next = e), (e.next = c), (s.lastEffect = e)),
      e
    );
  }
  function Dm() {
    return le().memoizedState;
  }
  function Vo(e, s, l, c) {
    var f = De();
    ((ht.flags |= e),
      (f.memoizedState = ia(
        1 | s,
        { destroy: void 0 },
        l,
        c === void 0 ? null : c,
      )));
  }
  function qo(e, s, l, c) {
    var f = le();
    c = c === void 0 ? null : c;
    var m = f.memoizedState.inst;
    Rt !== null && c !== null && pu(c, Rt.memoizedState.deps)
      ? (f.memoizedState = ia(s, m, l, c))
      : ((ht.flags |= e), (f.memoizedState = ia(1 | s, m, l, c)));
  }
  function Lm(e, s) {
    Vo(8390656, 8, e, s);
  }
  function ku(e, s) {
    qo(2048, 8, e, s);
  }
  function Yv(e) {
    ht.flags |= 4;
    var s = ht.updateQueue;
    if (s === null) ((s = Ro()), (ht.updateQueue = s), (s.events = [e]));
    else {
      var l = s.events;
      l === null ? (s.events = [e]) : l.push(e);
    }
  }
  function Bm(e) {
    var s = le().memoizedState;
    return (
      Yv({ ref: s, nextImpl: e }),
      function () {
        if ((Tt & 2) !== 0) throw Error(a(440));
        return s.impl.apply(void 0, arguments);
      }
    );
  }
  function Rm(e, s) {
    return qo(4, 2, e, s);
  }
  function Hm(e, s) {
    return qo(4, 4, e, s);
  }
  function Um(e, s) {
    if (typeof s == "function") {
      e = e();
      var l = s(e);
      return function () {
        typeof l == "function" ? l() : s(null);
      };
    }
    if (s != null)
      return (
        (e = e()),
        (s.current = e),
        function () {
          s.current = null;
        }
      );
  }
  function Vm(e, s, l) {
    ((l = l != null ? l.concat([e]) : null), qo(4, 4, Um.bind(null, s, e), l));
  }
  function Eu() {}
  function qm(e, s) {
    var l = le();
    s = s === void 0 ? null : s;
    var c = l.memoizedState;
    return s !== null && pu(s, c[1]) ? c[0] : ((l.memoizedState = [e, s]), e);
  }
  function Ym(e, s) {
    var l = le();
    s = s === void 0 ? null : s;
    var c = l.memoizedState;
    if (s !== null && pu(s, c[1])) return c[0];
    if (((c = e()), ds)) {
      hi(!0);
      try {
        e();
      } finally {
        hi(!1);
      }
    }
    return ((l.memoizedState = [c, s]), c);
  }
  function Cu(e, s, l) {
    return l === void 0 || ((Zn & 1073741824) !== 0 && (wt & 261930) === 0)
      ? (e.memoizedState = s)
      : ((e.memoizedState = l), (e = Xg()), (ht.lanes |= e), (Ei |= e), l);
  }
  function Xm(e, s, l, c) {
    return Ie(l, s)
      ? l
      : ta.current !== null
        ? ((e = Cu(e, l, c)), Ie(e, s) || (he = !0), e)
        : (Zn & 42) === 0 || ((Zn & 1073741824) !== 0 && (wt & 261930) === 0)
          ? ((he = !0), (e.memoizedState = l))
          : ((e = Xg()), (ht.lanes |= e), (Ei |= e), s);
  }
  function Pm(e, s, l, c, f) {
    var m = F.p;
    F.p = m !== 0 && 8 > m ? m : 8;
    var x = D.T,
      w = {};
    ((D.T = w), Nu(e, !1, s, l));
    try {
      var A = f(),
        N = D.S;
      if (
        (N !== null && N(w, A),
        A !== null && typeof A == "object" && typeof A.then == "function")
      ) {
        var H = Rv(A, c);
        el(e, s, H, an(e));
      } else el(e, s, c, an(e));
    } catch (Y) {
      el(e, s, { then: function () {}, status: "rejected", reason: Y }, an());
    } finally {
      ((F.p = m),
        x !== null && w.types !== null && (x.types = w.types),
        (D.T = x));
    }
  }
  function Xv() {}
  function ju(e, s, l, c) {
    if (e.tag !== 5) throw Error(a(476));
    var f = Fm(e).queue;
    Pm(
      e,
      f,
      s,
      I,
      l === null
        ? Xv
        : function () {
            return (Gm(e), l(c));
          },
    );
  }
  function Fm(e) {
    var s = e.memoizedState;
    if (s !== null) return s;
    s = {
      memoizedState: I,
      baseState: I,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Qn,
        lastRenderedState: I,
      },
      next: null,
    };
    var l = {};
    return (
      (s.next = {
        memoizedState: l,
        baseState: l,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: Qn,
          lastRenderedState: l,
        },
        next: null,
      }),
      (e.memoizedState = s),
      (e = e.alternate),
      e !== null && (e.memoizedState = s),
      s
    );
  }
  function Gm(e) {
    var s = Fm(e);
    (s.next === null && (s = e.alternate.memoizedState),
      el(e, s.next.queue, {}, an()));
  }
  function Tu() {
    return Ae(xl);
  }
  function Zm() {
    return le().memoizedState;
  }
  function Qm() {
    return le().memoizedState;
  }
  function Pv(e) {
    for (var s = e.return; s !== null;) {
      switch (s.tag) {
        case 24:
        case 3:
          var l = an();
          e = wi(l);
          var c = _i(s, e, l);
          (c !== null && (Ge(c, s, l), Wa(c, s, l)),
            (s = { cache: au() }),
            (e.payload = s));
          return;
      }
      s = s.return;
    }
  }
  function Fv(e, s, l) {
    var c = an();
    ((l = {
      lane: c,
      revertLane: 0,
      gesture: null,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
      Yo(e)
        ? Wm(s, l)
        : ((l = Qc(e, s, l, c)), l !== null && (Ge(l, e, c), $m(l, s, c))));
  }
  function Km(e, s, l) {
    var c = an();
    el(e, s, l, c);
  }
  function el(e, s, l, c) {
    var f = {
      lane: c,
      revertLane: 0,
      gesture: null,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    };
    if (Yo(e)) Wm(s, f);
    else {
      var m = e.alternate;
      if (
        e.lanes === 0 &&
        (m === null || m.lanes === 0) &&
        ((m = s.lastRenderedReducer), m !== null)
      )
        try {
          var x = s.lastRenderedState,
            w = m(x, l);
          if (((f.hasEagerState = !0), (f.eagerState = w), Ie(w, x)))
            return (_o(e, s, f, 0), qt === null && wo(), !1);
        } catch {
        } finally {
        }
      if (((l = Qc(e, s, f, c)), l !== null))
        return (Ge(l, e, c), $m(l, s, c), !0);
    }
    return !1;
  }
  function Nu(e, s, l, c) {
    if (
      ((c = {
        lane: 2,
        revertLane: cd(),
        gesture: null,
        action: c,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      Yo(e))
    ) {
      if (s) throw Error(a(479));
    } else ((s = Qc(e, l, c, 2)), s !== null && Ge(s, e, 2));
  }
  function Yo(e) {
    var s = e.alternate;
    return e === ht || (s !== null && s === ht);
  }
  function Wm(e, s) {
    ea = Lo = !0;
    var l = e.pending;
    (l === null ? (s.next = s) : ((s.next = l.next), (l.next = s)),
      (e.pending = s));
  }
  function $m(e, s, l) {
    if ((l & 4194048) !== 0) {
      var c = s.lanes;
      ((c &= e.pendingLanes), (l |= c), (s.lanes = l), nh(e, l));
    }
  }
  var nl = {
    readContext: Ae,
    use: Ho,
    useCallback: te,
    useContext: te,
    useEffect: te,
    useImperativeHandle: te,
    useLayoutEffect: te,
    useInsertionEffect: te,
    useMemo: te,
    useReducer: te,
    useRef: te,
    useState: te,
    useDebugValue: te,
    useDeferredValue: te,
    useTransition: te,
    useSyncExternalStore: te,
    useId: te,
    useHostTransitionStatus: te,
    useFormState: te,
    useActionState: te,
    useOptimistic: te,
    useMemoCache: te,
    useCacheRefresh: te,
  };
  nl.useEffectEvent = te;
  var Im = {
      readContext: Ae,
      use: Ho,
      useCallback: function (e, s) {
        return ((De().memoizedState = [e, s === void 0 ? null : s]), e);
      },
      useContext: Ae,
      useEffect: Lm,
      useImperativeHandle: function (e, s, l) {
        ((l = l != null ? l.concat([e]) : null),
          Vo(4194308, 4, Um.bind(null, s, e), l));
      },
      useLayoutEffect: function (e, s) {
        return Vo(4194308, 4, e, s);
      },
      useInsertionEffect: function (e, s) {
        Vo(4, 2, e, s);
      },
      useMemo: function (e, s) {
        var l = De();
        s = s === void 0 ? null : s;
        var c = e();
        if (ds) {
          hi(!0);
          try {
            e();
          } finally {
            hi(!1);
          }
        }
        return ((l.memoizedState = [c, s]), c);
      },
      useReducer: function (e, s, l) {
        var c = De();
        if (l !== void 0) {
          var f = l(s);
          if (ds) {
            hi(!0);
            try {
              l(s);
            } finally {
              hi(!1);
            }
          }
        } else f = s;
        return (
          (c.memoizedState = c.baseState = f),
          (e = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: f,
          }),
          (c.queue = e),
          (e = e.dispatch = Fv.bind(null, ht, e)),
          [c.memoizedState, e]
        );
      },
      useRef: function (e) {
        var s = De();
        return ((e = { current: e }), (s.memoizedState = e));
      },
      useState: function (e) {
        e = Mu(e);
        var s = e.queue,
          l = Km.bind(null, ht, s);
        return ((s.dispatch = l), [e.memoizedState, l]);
      },
      useDebugValue: Eu,
      useDeferredValue: function (e, s) {
        var l = De();
        return Cu(l, e, s);
      },
      useTransition: function () {
        var e = Mu(!1);
        return (
          (e = Pm.bind(null, ht, e.queue, !0, !1)),
          (De().memoizedState = e),
          [!1, e]
        );
      },
      useSyncExternalStore: function (e, s, l) {
        var c = ht,
          f = De();
        if (At) {
          if (l === void 0) throw Error(a(407));
          l = l();
        } else {
          if (((l = s()), qt === null)) throw Error(a(349));
          (wt & 127) !== 0 || ym(c, s, l);
        }
        f.memoizedState = l;
        var m = { value: l, getSnapshot: s };
        return (
          (f.queue = m),
          Lm(wm.bind(null, c, m, e), [e]),
          (c.flags |= 2048),
          ia(9, { destroy: void 0 }, vm.bind(null, c, m, l, s), null),
          l
        );
      },
      useId: function () {
        var e = De(),
          s = qt.identifierPrefix;
        if (At) {
          var l = jn,
            c = Cn;
          ((l = (c & ~(1 << (32 - $e(c) - 1))).toString(32) + l),
            (s = "_" + s + "R_" + l),
            (l = Bo++),
            0 < l && (s += "H" + l.toString(32)),
            (s += "_"));
        } else ((l = Hv++), (s = "_" + s + "r_" + l.toString(32) + "_"));
        return (e.memoizedState = s);
      },
      useHostTransitionStatus: Tu,
      useFormState: Tm,
      useActionState: Tm,
      useOptimistic: function (e) {
        var s = De();
        s.memoizedState = s.baseState = e;
        var l = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null,
        };
        return (
          (s.queue = l),
          (s = Nu.bind(null, ht, !0, l)),
          (l.dispatch = s),
          [e, s]
        );
      },
      useMemoCache: wu,
      useCacheRefresh: function () {
        return (De().memoizedState = Pv.bind(null, ht));
      },
      useEffectEvent: function (e) {
        var s = De(),
          l = { impl: e };
        return (
          (s.memoizedState = l),
          function () {
            if ((Tt & 2) !== 0) throw Error(a(440));
            return l.impl.apply(void 0, arguments);
          }
        );
      },
    },
    Ou = {
      readContext: Ae,
      use: Ho,
      useCallback: qm,
      useContext: Ae,
      useEffect: ku,
      useImperativeHandle: Vm,
      useInsertionEffect: Rm,
      useLayoutEffect: Hm,
      useMemo: Ym,
      useReducer: Uo,
      useRef: Dm,
      useState: function () {
        return Uo(Qn);
      },
      useDebugValue: Eu,
      useDeferredValue: function (e, s) {
        var l = le();
        return Xm(l, Rt.memoizedState, e, s);
      },
      useTransition: function () {
        var e = Uo(Qn)[0],
          s = le().memoizedState;
        return [typeof e == "boolean" ? e : tl(e), s];
      },
      useSyncExternalStore: xm,
      useId: Zm,
      useHostTransitionStatus: Tu,
      useFormState: Nm,
      useActionState: Nm,
      useOptimistic: function (e, s) {
        var l = le();
        return Mm(l, Rt, e, s);
      },
      useMemoCache: wu,
      useCacheRefresh: Qm,
    };
  Ou.useEffectEvent = Bm;
  var Jm = {
    readContext: Ae,
    use: Ho,
    useCallback: qm,
    useContext: Ae,
    useEffect: ku,
    useImperativeHandle: Vm,
    useInsertionEffect: Rm,
    useLayoutEffect: Hm,
    useMemo: Ym,
    useReducer: Su,
    useRef: Dm,
    useState: function () {
      return Su(Qn);
    },
    useDebugValue: Eu,
    useDeferredValue: function (e, s) {
      var l = le();
      return Rt === null ? Cu(l, e, s) : Xm(l, Rt.memoizedState, e, s);
    },
    useTransition: function () {
      var e = Su(Qn)[0],
        s = le().memoizedState;
      return [typeof e == "boolean" ? e : tl(e), s];
    },
    useSyncExternalStore: xm,
    useId: Zm,
    useHostTransitionStatus: Tu,
    useFormState: zm,
    useActionState: zm,
    useOptimistic: function (e, s) {
      var l = le();
      return Rt !== null
        ? Mm(l, Rt, e, s)
        : ((l.baseState = e), [e, l.queue.dispatch]);
    },
    useMemoCache: wu,
    useCacheRefresh: Qm,
  };
  Jm.useEffectEvent = Bm;
  function zu(e, s, l, c) {
    ((s = e.memoizedState),
      (l = l(c, s)),
      (l = l == null ? s : y({}, s, l)),
      (e.memoizedState = l),
      e.lanes === 0 && (e.updateQueue.baseState = l));
  }
  var Du = {
    enqueueSetState: function (e, s, l) {
      e = e._reactInternals;
      var c = an(),
        f = wi(c);
      ((f.payload = s),
        l != null && (f.callback = l),
        (s = _i(e, f, c)),
        s !== null && (Ge(s, e, c), Wa(s, e, c)));
    },
    enqueueReplaceState: function (e, s, l) {
      e = e._reactInternals;
      var c = an(),
        f = wi(c);
      ((f.tag = 1),
        (f.payload = s),
        l != null && (f.callback = l),
        (s = _i(e, f, c)),
        s !== null && (Ge(s, e, c), Wa(s, e, c)));
    },
    enqueueForceUpdate: function (e, s) {
      e = e._reactInternals;
      var l = an(),
        c = wi(l);
      ((c.tag = 2),
        s != null && (c.callback = s),
        (s = _i(e, c, l)),
        s !== null && (Ge(s, e, l), Wa(s, e, l)));
    },
  };
  function tg(e, s, l, c, f, m, x) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == "function"
        ? e.shouldComponentUpdate(c, m, x)
        : s.prototype && s.prototype.isPureReactComponent
          ? !Ya(l, c) || !Ya(f, m)
          : !0
    );
  }
  function eg(e, s, l, c) {
    ((e = s.state),
      typeof s.componentWillReceiveProps == "function" &&
        s.componentWillReceiveProps(l, c),
      typeof s.UNSAFE_componentWillReceiveProps == "function" &&
        s.UNSAFE_componentWillReceiveProps(l, c),
      s.state !== e && Du.enqueueReplaceState(s, s.state, null));
  }
  function fs(e, s) {
    var l = s;
    if ("ref" in s) {
      l = {};
      for (var c in s) c !== "ref" && (l[c] = s[c]);
    }
    if ((e = e.defaultProps)) {
      l === s && (l = y({}, l));
      for (var f in e) l[f] === void 0 && (l[f] = e[f]);
    }
    return l;
  }
  function ng(e) {
    vo(e);
  }
  function ig(e) {
    console.error(e);
  }
  function sg(e) {
    vo(e);
  }
  function Xo(e, s) {
    try {
      var l = e.onUncaughtError;
      l(s.value, { componentStack: s.stack });
    } catch (c) {
      setTimeout(function () {
        throw c;
      });
    }
  }
  function ag(e, s, l) {
    try {
      var c = e.onCaughtError;
      c(l.value, {
        componentStack: l.stack,
        errorBoundary: s.tag === 1 ? s.stateNode : null,
      });
    } catch (f) {
      setTimeout(function () {
        throw f;
      });
    }
  }
  function Lu(e, s, l) {
    return (
      (l = wi(l)),
      (l.tag = 3),
      (l.payload = { element: null }),
      (l.callback = function () {
        Xo(e, s);
      }),
      l
    );
  }
  function lg(e) {
    return ((e = wi(e)), (e.tag = 3), e);
  }
  function og(e, s, l, c) {
    var f = l.type.getDerivedStateFromError;
    if (typeof f == "function") {
      var m = c.value;
      ((e.payload = function () {
        return f(m);
      }),
        (e.callback = function () {
          ag(s, l, c);
        }));
    }
    var x = l.stateNode;
    x !== null &&
      typeof x.componentDidCatch == "function" &&
      (e.callback = function () {
        (ag(s, l, c),
          typeof f != "function" &&
            (Ci === null ? (Ci = new Set([this])) : Ci.add(this)));
        var w = c.stack;
        this.componentDidCatch(c.value, {
          componentStack: w !== null ? w : "",
        });
      });
  }
  function Gv(e, s, l, c, f) {
    if (
      ((l.flags |= 32768),
      c !== null && typeof c == "object" && typeof c.then == "function")
    ) {
      if (
        ((s = l.alternate),
        s !== null && Ks(s, l, f, !0),
        (l = tn.current),
        l !== null)
      ) {
        switch (l.tag) {
          case 31:
          case 13:
            return (
              xn === null ? er() : l.alternate === null && ee === 0 && (ee = 3),
              (l.flags &= -257),
              (l.flags |= 65536),
              (l.lanes = f),
              c === To
                ? (l.flags |= 16384)
                : ((s = l.updateQueue),
                  s === null ? (l.updateQueue = new Set([c])) : s.add(c),
                  ld(e, c, f)),
              !1
            );
          case 22:
            return (
              (l.flags |= 65536),
              c === To
                ? (l.flags |= 16384)
                : ((s = l.updateQueue),
                  s === null
                    ? ((s = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([c]),
                      }),
                      (l.updateQueue = s))
                    : ((l = s.retryQueue),
                      l === null ? (s.retryQueue = new Set([c])) : l.add(c)),
                  ld(e, c, f)),
              !1
            );
        }
        throw Error(a(435, l.tag));
      }
      return (ld(e, c, f), er(), !1);
    }
    if (At)
      return (
        (s = tn.current),
        s !== null
          ? ((s.flags & 65536) === 0 && (s.flags |= 256),
            (s.flags |= 65536),
            (s.lanes = f),
            c !== tu && ((e = Error(a(422), { cause: c })), Fa(mn(e, l))))
          : (c !== tu && ((s = Error(a(423), { cause: c })), Fa(mn(s, l))),
            (e = e.current.alternate),
            (e.flags |= 65536),
            (f &= -f),
            (e.lanes |= f),
            (c = mn(c, l)),
            (f = Lu(e.stateNode, c, f)),
            du(e, f),
            ee !== 4 && (ee = 2)),
        !1
      );
    var m = Error(a(520), { cause: c });
    if (
      ((m = mn(m, l)),
      ul === null ? (ul = [m]) : ul.push(m),
      ee !== 4 && (ee = 2),
      s === null)
    )
      return !0;
    ((c = mn(c, l)), (l = s));
    do {
      switch (l.tag) {
        case 3:
          return (
            (l.flags |= 65536),
            (e = f & -f),
            (l.lanes |= e),
            (e = Lu(l.stateNode, c, e)),
            du(l, e),
            !1
          );
        case 1:
          if (
            ((s = l.type),
            (m = l.stateNode),
            (l.flags & 128) === 0 &&
              (typeof s.getDerivedStateFromError == "function" ||
                (m !== null &&
                  typeof m.componentDidCatch == "function" &&
                  (Ci === null || !Ci.has(m)))))
          )
            return (
              (l.flags |= 65536),
              (f &= -f),
              (l.lanes |= f),
              (f = lg(f)),
              og(f, e, l, c),
              du(l, f),
              !1
            );
      }
      l = l.return;
    } while (l !== null);
    return !1;
  }
  var Bu = Error(a(461)),
    he = !1;
  function ke(e, s, l, c) {
    s.child = e === null ? dm(s, null, l, c) : us(s, e.child, l, c);
  }
  function rg(e, s, l, c, f) {
    l = l.render;
    var m = s.ref;
    if ("ref" in c) {
      var x = {};
      for (var w in c) w !== "ref" && (x[w] = c[w]);
    } else x = c;
    return (
      ls(s),
      (c = bu(e, s, l, x, m, f)),
      (w = xu()),
      e !== null && !he
        ? (yu(e, s, f), Kn(e, s, f))
        : (At && w && Ic(s), (s.flags |= 1), ke(e, s, c, f), s.child)
    );
  }
  function cg(e, s, l, c, f) {
    if (e === null) {
      var m = l.type;
      return typeof m == "function" &&
        !Kc(m) &&
        m.defaultProps === void 0 &&
        l.compare === null
        ? ((s.tag = 15), (s.type = m), ug(e, s, m, c, f))
        : ((e = Mo(l.type, null, c, s, s.mode, f)),
          (e.ref = s.ref),
          (e.return = s),
          (s.child = e));
    }
    if (((m = e.child), !Pu(e, f))) {
      var x = m.memoizedProps;
      if (
        ((l = l.compare), (l = l !== null ? l : Ya), l(x, c) && e.ref === s.ref)
      )
        return Kn(e, s, f);
    }
    return (
      (s.flags |= 1),
      (e = Xn(m, c)),
      (e.ref = s.ref),
      (e.return = s),
      (s.child = e)
    );
  }
  function ug(e, s, l, c, f) {
    if (e !== null) {
      var m = e.memoizedProps;
      if (Ya(m, c) && e.ref === s.ref)
        if (((he = !1), (s.pendingProps = c = m), Pu(e, f)))
          (e.flags & 131072) !== 0 && (he = !0);
        else return ((s.lanes = e.lanes), Kn(e, s, f));
    }
    return Ru(e, s, l, c, f);
  }
  function dg(e, s, l, c) {
    var f = c.children,
      m = e !== null ? e.memoizedState : null;
    if (
      (e === null &&
        s.stateNode === null &&
        (s.stateNode = {
          _visibility: 1,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null,
        }),
      c.mode === "hidden")
    ) {
      if ((s.flags & 128) !== 0) {
        if (((m = m !== null ? m.baseLanes | l : l), e !== null)) {
          for (c = s.child = e.child, f = 0; c !== null;)
            ((f = f | c.lanes | c.childLanes), (c = c.sibling));
          c = f & ~m;
        } else ((c = 0), (s.child = null));
        return fg(e, s, m, l, c);
      }
      if ((l & 536870912) !== 0)
        ((s.memoizedState = { baseLanes: 0, cachePool: null }),
          e !== null && Co(s, m !== null ? m.cachePool : null),
          m !== null ? mm(s, m) : hu(),
          gm(s));
      else
        return (
          (c = s.lanes = 536870912),
          fg(e, s, m !== null ? m.baseLanes | l : l, l, c)
        );
    } else
      m !== null
        ? (Co(s, m.cachePool), mm(s, m), Mi(), (s.memoizedState = null))
        : (e !== null && Co(s, null), hu(), Mi());
    return (ke(e, s, f, l), s.child);
  }
  function il(e, s) {
    return (
      (e !== null && e.tag === 22) ||
        s.stateNode !== null ||
        (s.stateNode = {
          _visibility: 1,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null,
        }),
      s.sibling
    );
  }
  function fg(e, s, l, c, f) {
    var m = ou();
    return (
      (m = m === null ? null : { parent: de._currentValue, pool: m }),
      (s.memoizedState = { baseLanes: l, cachePool: m }),
      e !== null && Co(s, null),
      hu(),
      gm(s),
      e !== null && Ks(e, s, c, !0),
      (s.childLanes = f),
      null
    );
  }
  function Po(e, s) {
    return (
      (s = Go({ mode: s.mode, children: s.children }, e.mode)),
      (s.ref = e.ref),
      (e.child = s),
      (s.return = e),
      s
    );
  }
  function hg(e, s, l) {
    return (
      us(s, e.child, null, l),
      (e = Po(s, s.pendingProps)),
      (e.flags |= 2),
      en(s),
      (s.memoizedState = null),
      e
    );
  }
  function Zv(e, s, l) {
    var c = s.pendingProps,
      f = (s.flags & 128) !== 0;
    if (((s.flags &= -129), e === null)) {
      if (At) {
        if (c.mode === "hidden")
          return ((e = Po(s, c)), (s.lanes = 536870912), il(null, e));
        if (
          (gu(s),
          (e = Ft)
            ? ((e = Ap(e, bn)),
              (e = e !== null && e.data === "&" ? e : null),
              e !== null &&
                ((s.memoizedState = {
                  dehydrated: e,
                  treeContext: pi !== null ? { id: Cn, overflow: jn } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (l = Wh(e)),
                (l.return = s),
                (s.child = l),
                (Me = s),
                (Ft = null)))
            : (e = null),
          e === null)
        )
          throw xi(s);
        return ((s.lanes = 536870912), null);
      }
      return Po(s, c);
    }
    var m = e.memoizedState;
    if (m !== null) {
      var x = m.dehydrated;
      if ((gu(s), f))
        if (s.flags & 256) ((s.flags &= -257), (s = hg(e, s, l)));
        else if (s.memoizedState !== null)
          ((s.child = e.child), (s.flags |= 128), (s = null));
        else throw Error(a(558));
      else if (
        (he || Ks(e, s, l, !1), (f = (l & e.childLanes) !== 0), he || f)
      ) {
        if (
          ((c = qt),
          c !== null && ((x = ih(c, l)), x !== 0 && x !== m.retryLane))
        )
          throw ((m.retryLane = x), ns(e, x), Ge(c, e, x), Bu);
        (er(), (s = hg(e, s, l)));
      } else
        ((e = m.treeContext),
          (Ft = yn(x.nextSibling)),
          (Me = s),
          (At = !0),
          (bi = null),
          (bn = !1),
          e !== null && Jh(s, e),
          (s = Po(s, c)),
          (s.flags |= 4096));
      return s;
    }
    return (
      (e = Xn(e.child, { mode: c.mode, children: c.children })),
      (e.ref = s.ref),
      (s.child = e),
      (e.return = s),
      e
    );
  }
  function Fo(e, s) {
    var l = s.ref;
    if (l === null) e !== null && e.ref !== null && (s.flags |= 4194816);
    else {
      if (typeof l != "function" && typeof l != "object") throw Error(a(284));
      (e === null || e.ref !== l) && (s.flags |= 4194816);
    }
  }
  function Ru(e, s, l, c, f) {
    return (
      ls(s),
      (l = bu(e, s, l, c, void 0, f)),
      (c = xu()),
      e !== null && !he
        ? (yu(e, s, f), Kn(e, s, f))
        : (At && c && Ic(s), (s.flags |= 1), ke(e, s, l, f), s.child)
    );
  }
  function mg(e, s, l, c, f, m) {
    return (
      ls(s),
      (s.updateQueue = null),
      (l = bm(s, c, l, f)),
      pm(e),
      (c = xu()),
      e !== null && !he
        ? (yu(e, s, m), Kn(e, s, m))
        : (At && c && Ic(s), (s.flags |= 1), ke(e, s, l, m), s.child)
    );
  }
  function gg(e, s, l, c, f) {
    if ((ls(s), s.stateNode === null)) {
      var m = Fs,
        x = l.contextType;
      (typeof x == "object" && x !== null && (m = Ae(x)),
        (m = new l(c, m)),
        (s.memoizedState =
          m.state !== null && m.state !== void 0 ? m.state : null),
        (m.updater = Du),
        (s.stateNode = m),
        (m._reactInternals = s),
        (m = s.stateNode),
        (m.props = c),
        (m.state = s.memoizedState),
        (m.refs = {}),
        cu(s),
        (x = l.contextType),
        (m.context = typeof x == "object" && x !== null ? Ae(x) : Fs),
        (m.state = s.memoizedState),
        (x = l.getDerivedStateFromProps),
        typeof x == "function" && (zu(s, l, x, c), (m.state = s.memoizedState)),
        typeof l.getDerivedStateFromProps == "function" ||
          typeof m.getSnapshotBeforeUpdate == "function" ||
          (typeof m.UNSAFE_componentWillMount != "function" &&
            typeof m.componentWillMount != "function") ||
          ((x = m.state),
          typeof m.componentWillMount == "function" && m.componentWillMount(),
          typeof m.UNSAFE_componentWillMount == "function" &&
            m.UNSAFE_componentWillMount(),
          x !== m.state && Du.enqueueReplaceState(m, m.state, null),
          Ia(s, c, m, f),
          $a(),
          (m.state = s.memoizedState)),
        typeof m.componentDidMount == "function" && (s.flags |= 4194308),
        (c = !0));
    } else if (e === null) {
      m = s.stateNode;
      var w = s.memoizedProps,
        A = fs(l, w);
      m.props = A;
      var N = m.context,
        H = l.contextType;
      ((x = Fs), typeof H == "object" && H !== null && (x = Ae(H)));
      var Y = l.getDerivedStateFromProps;
      ((H =
        typeof Y == "function" ||
        typeof m.getSnapshotBeforeUpdate == "function"),
        (w = s.pendingProps !== w),
        H ||
          (typeof m.UNSAFE_componentWillReceiveProps != "function" &&
            typeof m.componentWillReceiveProps != "function") ||
          ((w || N !== x) && eg(s, m, c, x)),
        (vi = !1));
      var O = s.memoizedState;
      ((m.state = O),
        Ia(s, c, m, f),
        $a(),
        (N = s.memoizedState),
        w || O !== N || vi
          ? (typeof Y == "function" && (zu(s, l, Y, c), (N = s.memoizedState)),
            (A = vi || tg(s, l, A, c, O, N, x))
              ? (H ||
                  (typeof m.UNSAFE_componentWillMount != "function" &&
                    typeof m.componentWillMount != "function") ||
                  (typeof m.componentWillMount == "function" &&
                    m.componentWillMount(),
                  typeof m.UNSAFE_componentWillMount == "function" &&
                    m.UNSAFE_componentWillMount()),
                typeof m.componentDidMount == "function" &&
                  (s.flags |= 4194308))
              : (typeof m.componentDidMount == "function" &&
                  (s.flags |= 4194308),
                (s.memoizedProps = c),
                (s.memoizedState = N)),
            (m.props = c),
            (m.state = N),
            (m.context = x),
            (c = A))
          : (typeof m.componentDidMount == "function" && (s.flags |= 4194308),
            (c = !1)));
    } else {
      ((m = s.stateNode),
        uu(e, s),
        (x = s.memoizedProps),
        (H = fs(l, x)),
        (m.props = H),
        (Y = s.pendingProps),
        (O = m.context),
        (N = l.contextType),
        (A = Fs),
        typeof N == "object" && N !== null && (A = Ae(N)),
        (w = l.getDerivedStateFromProps),
        (N =
          typeof w == "function" ||
          typeof m.getSnapshotBeforeUpdate == "function") ||
          (typeof m.UNSAFE_componentWillReceiveProps != "function" &&
            typeof m.componentWillReceiveProps != "function") ||
          ((x !== Y || O !== A) && eg(s, m, c, A)),
        (vi = !1),
        (O = s.memoizedState),
        (m.state = O),
        Ia(s, c, m, f),
        $a());
      var L = s.memoizedState;
      x !== Y ||
      O !== L ||
      vi ||
      (e !== null && e.dependencies !== null && ko(e.dependencies))
        ? (typeof w == "function" && (zu(s, l, w, c), (L = s.memoizedState)),
          (H =
            vi ||
            tg(s, l, H, c, O, L, A) ||
            (e !== null && e.dependencies !== null && ko(e.dependencies)))
            ? (N ||
                (typeof m.UNSAFE_componentWillUpdate != "function" &&
                  typeof m.componentWillUpdate != "function") ||
                (typeof m.componentWillUpdate == "function" &&
                  m.componentWillUpdate(c, L, A),
                typeof m.UNSAFE_componentWillUpdate == "function" &&
                  m.UNSAFE_componentWillUpdate(c, L, A)),
              typeof m.componentDidUpdate == "function" && (s.flags |= 4),
              typeof m.getSnapshotBeforeUpdate == "function" &&
                (s.flags |= 1024))
            : (typeof m.componentDidUpdate != "function" ||
                (x === e.memoizedProps && O === e.memoizedState) ||
                (s.flags |= 4),
              typeof m.getSnapshotBeforeUpdate != "function" ||
                (x === e.memoizedProps && O === e.memoizedState) ||
                (s.flags |= 1024),
              (s.memoizedProps = c),
              (s.memoizedState = L)),
          (m.props = c),
          (m.state = L),
          (m.context = A),
          (c = H))
        : (typeof m.componentDidUpdate != "function" ||
            (x === e.memoizedProps && O === e.memoizedState) ||
            (s.flags |= 4),
          typeof m.getSnapshotBeforeUpdate != "function" ||
            (x === e.memoizedProps && O === e.memoizedState) ||
            (s.flags |= 1024),
          (c = !1));
    }
    return (
      (m = c),
      Fo(e, s),
      (c = (s.flags & 128) !== 0),
      m || c
        ? ((m = s.stateNode),
          (l =
            c && typeof l.getDerivedStateFromError != "function"
              ? null
              : m.render()),
          (s.flags |= 1),
          e !== null && c
            ? ((s.child = us(s, e.child, null, f)),
              (s.child = us(s, null, l, f)))
            : ke(e, s, l, f),
          (s.memoizedState = m.state),
          (e = s.child))
        : (e = Kn(e, s, f)),
      e
    );
  }
  function pg(e, s, l, c) {
    return (ss(), (s.flags |= 256), ke(e, s, l, c), s.child);
  }
  var Hu = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null,
  };
  function Uu(e) {
    return { baseLanes: e, cachePool: am() };
  }
  function Vu(e, s, l) {
    return ((e = e !== null ? e.childLanes & ~l : 0), s && (e |= sn), e);
  }
  function bg(e, s, l) {
    var c = s.pendingProps,
      f = !1,
      m = (s.flags & 128) !== 0,
      x;
    if (
      ((x = m) ||
        (x =
          e !== null && e.memoizedState === null ? !1 : (ae.current & 2) !== 0),
      x && ((f = !0), (s.flags &= -129)),
      (x = (s.flags & 32) !== 0),
      (s.flags &= -33),
      e === null)
    ) {
      if (At) {
        if (
          (f ? Si(s) : Mi(),
          (e = Ft)
            ? ((e = Ap(e, bn)),
              (e = e !== null && e.data !== "&" ? e : null),
              e !== null &&
                ((s.memoizedState = {
                  dehydrated: e,
                  treeContext: pi !== null ? { id: Cn, overflow: jn } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (l = Wh(e)),
                (l.return = s),
                (s.child = l),
                (Me = s),
                (Ft = null)))
            : (e = null),
          e === null)
        )
          throw xi(s);
        return (_d(e) ? (s.lanes = 32) : (s.lanes = 536870912), null);
      }
      var w = c.children;
      return (
        (c = c.fallback),
        f
          ? (Mi(),
            (f = s.mode),
            (w = Go({ mode: "hidden", children: w }, f)),
            (c = is(c, f, l, null)),
            (w.return = s),
            (c.return = s),
            (w.sibling = c),
            (s.child = w),
            (c = s.child),
            (c.memoizedState = Uu(l)),
            (c.childLanes = Vu(e, x, l)),
            (s.memoizedState = Hu),
            il(null, c))
          : (Si(s), qu(s, w))
      );
    }
    var A = e.memoizedState;
    if (A !== null && ((w = A.dehydrated), w !== null)) {
      if (m)
        s.flags & 256
          ? (Si(s), (s.flags &= -257), (s = Yu(e, s, l)))
          : s.memoizedState !== null
            ? (Mi(), (s.child = e.child), (s.flags |= 128), (s = null))
            : (Mi(),
              (w = c.fallback),
              (f = s.mode),
              (c = Go({ mode: "visible", children: c.children }, f)),
              (w = is(w, f, l, null)),
              (w.flags |= 2),
              (c.return = s),
              (w.return = s),
              (c.sibling = w),
              (s.child = c),
              us(s, e.child, null, l),
              (c = s.child),
              (c.memoizedState = Uu(l)),
              (c.childLanes = Vu(e, x, l)),
              (s.memoizedState = Hu),
              (s = il(null, c)));
      else if ((Si(s), _d(w))) {
        if (((x = w.nextSibling && w.nextSibling.dataset), x)) var N = x.dgst;
        ((x = N),
          (c = Error(a(419))),
          (c.stack = ""),
          (c.digest = x),
          Fa({ value: c, source: null, stack: null }),
          (s = Yu(e, s, l)));
      } else if (
        (he || Ks(e, s, l, !1), (x = (l & e.childLanes) !== 0), he || x)
      ) {
        if (
          ((x = qt),
          x !== null && ((c = ih(x, l)), c !== 0 && c !== A.retryLane))
        )
          throw ((A.retryLane = c), ns(e, c), Ge(x, e, c), Bu);
        (wd(w) || er(), (s = Yu(e, s, l)));
      } else
        wd(w)
          ? ((s.flags |= 192), (s.child = e.child), (s = null))
          : ((e = A.treeContext),
            (Ft = yn(w.nextSibling)),
            (Me = s),
            (At = !0),
            (bi = null),
            (bn = !1),
            e !== null && Jh(s, e),
            (s = qu(s, c.children)),
            (s.flags |= 4096));
      return s;
    }
    return f
      ? (Mi(),
        (w = c.fallback),
        (f = s.mode),
        (A = e.child),
        (N = A.sibling),
        (c = Xn(A, { mode: "hidden", children: c.children })),
        (c.subtreeFlags = A.subtreeFlags & 65011712),
        N !== null ? (w = Xn(N, w)) : ((w = is(w, f, l, null)), (w.flags |= 2)),
        (w.return = s),
        (c.return = s),
        (c.sibling = w),
        (s.child = c),
        il(null, c),
        (c = s.child),
        (w = e.child.memoizedState),
        w === null
          ? (w = Uu(l))
          : ((f = w.cachePool),
            f !== null
              ? ((A = de._currentValue),
                (f = f.parent !== A ? { parent: A, pool: A } : f))
              : (f = am()),
            (w = { baseLanes: w.baseLanes | l, cachePool: f })),
        (c.memoizedState = w),
        (c.childLanes = Vu(e, x, l)),
        (s.memoizedState = Hu),
        il(e.child, c))
      : (Si(s),
        (l = e.child),
        (e = l.sibling),
        (l = Xn(l, { mode: "visible", children: c.children })),
        (l.return = s),
        (l.sibling = null),
        e !== null &&
          ((x = s.deletions),
          x === null ? ((s.deletions = [e]), (s.flags |= 16)) : x.push(e)),
        (s.child = l),
        (s.memoizedState = null),
        l);
  }
  function qu(e, s) {
    return (
      (s = Go({ mode: "visible", children: s }, e.mode)),
      (s.return = e),
      (e.child = s)
    );
  }
  function Go(e, s) {
    return ((e = Je(22, e, null, s)), (e.lanes = 0), e);
  }
  function Yu(e, s, l) {
    return (
      us(s, e.child, null, l),
      (e = qu(s, s.pendingProps.children)),
      (e.flags |= 2),
      (s.memoizedState = null),
      e
    );
  }
  function xg(e, s, l) {
    e.lanes |= s;
    var c = e.alternate;
    (c !== null && (c.lanes |= s), iu(e.return, s, l));
  }
  function Xu(e, s, l, c, f, m) {
    var x = e.memoizedState;
    x === null
      ? (e.memoizedState = {
          isBackwards: s,
          rendering: null,
          renderingStartTime: 0,
          last: c,
          tail: l,
          tailMode: f,
          treeForkCount: m,
        })
      : ((x.isBackwards = s),
        (x.rendering = null),
        (x.renderingStartTime = 0),
        (x.last = c),
        (x.tail = l),
        (x.tailMode = f),
        (x.treeForkCount = m));
  }
  function yg(e, s, l) {
    var c = s.pendingProps,
      f = c.revealOrder,
      m = c.tail;
    c = c.children;
    var x = ae.current,
      w = (x & 2) !== 0;
    if (
      (w ? ((x = (x & 1) | 2), (s.flags |= 128)) : (x &= 1),
      ft(ae, x),
      ke(e, s, c, l),
      (c = At ? Pa : 0),
      !w && e !== null && (e.flags & 128) !== 0)
    )
      t: for (e = s.child; e !== null;) {
        if (e.tag === 13) e.memoizedState !== null && xg(e, l, s);
        else if (e.tag === 19) xg(e, l, s);
        else if (e.child !== null) {
          ((e.child.return = e), (e = e.child));
          continue;
        }
        if (e === s) break t;
        for (; e.sibling === null;) {
          if (e.return === null || e.return === s) break t;
          e = e.return;
        }
        ((e.sibling.return = e.return), (e = e.sibling));
      }
    switch (f) {
      case "forwards":
        for (l = s.child, f = null; l !== null;)
          ((e = l.alternate),
            e !== null && Do(e) === null && (f = l),
            (l = l.sibling));
        ((l = f),
          l === null
            ? ((f = s.child), (s.child = null))
            : ((f = l.sibling), (l.sibling = null)),
          Xu(s, !1, f, l, m, c));
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (l = null, f = s.child, s.child = null; f !== null;) {
          if (((e = f.alternate), e !== null && Do(e) === null)) {
            s.child = f;
            break;
          }
          ((e = f.sibling), (f.sibling = l), (l = f), (f = e));
        }
        Xu(s, !0, l, null, m, c);
        break;
      case "together":
        Xu(s, !1, null, null, void 0, c);
        break;
      default:
        s.memoizedState = null;
    }
    return s.child;
  }
  function Kn(e, s, l) {
    if (
      (e !== null && (s.dependencies = e.dependencies),
      (Ei |= s.lanes),
      (l & s.childLanes) === 0)
    )
      if (e !== null) {
        if ((Ks(e, s, l, !1), (l & s.childLanes) === 0)) return null;
      } else return null;
    if (e !== null && s.child !== e.child) throw Error(a(153));
    if (s.child !== null) {
      for (
        e = s.child, l = Xn(e, e.pendingProps), s.child = l, l.return = s;
        e.sibling !== null;
      )
        ((e = e.sibling),
          (l = l.sibling = Xn(e, e.pendingProps)),
          (l.return = s));
      l.sibling = null;
    }
    return s.child;
  }
  function Pu(e, s) {
    return (e.lanes & s) !== 0
      ? !0
      : ((e = e.dependencies), !!(e !== null && ko(e)));
  }
  function Qv(e, s, l) {
    switch (s.tag) {
      case 3:
        (vt(s, s.stateNode.containerInfo),
          yi(s, de, e.memoizedState.cache),
          ss());
        break;
      case 27:
      case 5:
        Re(s);
        break;
      case 4:
        vt(s, s.stateNode.containerInfo);
        break;
      case 10:
        yi(s, s.type, s.memoizedProps.value);
        break;
      case 31:
        if (s.memoizedState !== null) return ((s.flags |= 128), gu(s), null);
        break;
      case 13:
        var c = s.memoizedState;
        if (c !== null)
          return c.dehydrated !== null
            ? (Si(s), (s.flags |= 128), null)
            : (l & s.child.childLanes) !== 0
              ? bg(e, s, l)
              : (Si(s), (e = Kn(e, s, l)), e !== null ? e.sibling : null);
        Si(s);
        break;
      case 19:
        var f = (e.flags & 128) !== 0;
        if (
          ((c = (l & s.childLanes) !== 0),
          c || (Ks(e, s, l, !1), (c = (l & s.childLanes) !== 0)),
          f)
        ) {
          if (c) return yg(e, s, l);
          s.flags |= 128;
        }
        if (
          ((f = s.memoizedState),
          f !== null &&
            ((f.rendering = null), (f.tail = null), (f.lastEffect = null)),
          ft(ae, ae.current),
          c)
        )
          break;
        return null;
      case 22:
        return ((s.lanes = 0), dg(e, s, l, s.pendingProps));
      case 24:
        yi(s, de, e.memoizedState.cache);
    }
    return Kn(e, s, l);
  }
  function vg(e, s, l) {
    if (e !== null)
      if (e.memoizedProps !== s.pendingProps) he = !0;
      else {
        if (!Pu(e, l) && (s.flags & 128) === 0) return ((he = !1), Qv(e, s, l));
        he = (e.flags & 131072) !== 0;
      }
    else ((he = !1), At && (s.flags & 1048576) !== 0 && Ih(s, Pa, s.index));
    switch (((s.lanes = 0), s.tag)) {
      case 16:
        t: {
          var c = s.pendingProps;
          if (((e = rs(s.elementType)), (s.type = e), typeof e == "function"))
            Kc(e)
              ? ((c = fs(e, c)), (s.tag = 1), (s = gg(null, s, e, c, l)))
              : ((s.tag = 0), (s = Ru(null, s, e, c, l)));
          else {
            if (e != null) {
              var f = e.$$typeof;
              if (f === q) {
                ((s.tag = 11), (s = rg(null, s, e, c, l)));
                break t;
              } else if (f === X) {
                ((s.tag = 14), (s = cg(null, s, e, c, l)));
                break t;
              }
            }
            throw ((s = Yt(e) || e), Error(a(306, s, "")));
          }
        }
        return s;
      case 0:
        return Ru(e, s, s.type, s.pendingProps, l);
      case 1:
        return ((c = s.type), (f = fs(c, s.pendingProps)), gg(e, s, c, f, l));
      case 3:
        t: {
          if ((vt(s, s.stateNode.containerInfo), e === null))
            throw Error(a(387));
          c = s.pendingProps;
          var m = s.memoizedState;
          ((f = m.element), uu(e, s), Ia(s, c, null, l));
          var x = s.memoizedState;
          if (
            ((c = x.cache),
            yi(s, de, c),
            c !== m.cache && su(s, [de], l, !0),
            $a(),
            (c = x.element),
            m.isDehydrated)
          )
            if (
              ((m = { element: c, isDehydrated: !1, cache: x.cache }),
              (s.updateQueue.baseState = m),
              (s.memoizedState = m),
              s.flags & 256)
            ) {
              s = pg(e, s, c, l);
              break t;
            } else if (c !== f) {
              ((f = mn(Error(a(424)), s)), Fa(f), (s = pg(e, s, c, l)));
              break t;
            } else {
              switch (((e = s.stateNode.containerInfo), e.nodeType)) {
                case 9:
                  e = e.body;
                  break;
                default:
                  e = e.nodeName === "HTML" ? e.ownerDocument.body : e;
              }
              for (
                Ft = yn(e.firstChild),
                  Me = s,
                  At = !0,
                  bi = null,
                  bn = !0,
                  l = dm(s, null, c, l),
                  s.child = l;
                l;
              )
                ((l.flags = (l.flags & -3) | 4096), (l = l.sibling));
            }
          else {
            if ((ss(), c === f)) {
              s = Kn(e, s, l);
              break t;
            }
            ke(e, s, c, l);
          }
          s = s.child;
        }
        return s;
      case 26:
        return (
          Fo(e, s),
          e === null
            ? (l = Np(s.type, null, s.pendingProps, null))
              ? (s.memoizedState = l)
              : At ||
                ((l = s.type),
                (e = s.pendingProps),
                (c = rr(J.current).createElement(l)),
                (c[Se] = s),
                (c[Ve] = e),
                Ee(c, l, e),
                xe(c),
                (s.stateNode = c))
            : (s.memoizedState = Np(
                s.type,
                e.memoizedProps,
                s.pendingProps,
                e.memoizedState,
              )),
          null
        );
      case 27:
        return (
          Re(s),
          e === null &&
            At &&
            ((c = s.stateNode = Cp(s.type, s.pendingProps, J.current)),
            (Me = s),
            (bn = !0),
            (f = Ft),
            Oi(s.type) ? ((Sd = f), (Ft = yn(c.firstChild))) : (Ft = f)),
          ke(e, s, s.pendingProps.children, l),
          Fo(e, s),
          e === null && (s.flags |= 4194304),
          s.child
        );
      case 5:
        return (
          e === null &&
            At &&
            ((f = c = Ft) &&
              ((c = M2(c, s.type, s.pendingProps, bn)),
              c !== null
                ? ((s.stateNode = c),
                  (Me = s),
                  (Ft = yn(c.firstChild)),
                  (bn = !1),
                  (f = !0))
                : (f = !1)),
            f || xi(s)),
          Re(s),
          (f = s.type),
          (m = s.pendingProps),
          (x = e !== null ? e.memoizedProps : null),
          (c = m.children),
          xd(f, m) ? (c = null) : x !== null && xd(f, x) && (s.flags |= 32),
          s.memoizedState !== null &&
            ((f = bu(e, s, Uv, null, null, l)), (xl._currentValue = f)),
          Fo(e, s),
          ke(e, s, c, l),
          s.child
        );
      case 6:
        return (
          e === null &&
            At &&
            ((e = l = Ft) &&
              ((l = A2(l, s.pendingProps, bn)),
              l !== null
                ? ((s.stateNode = l), (Me = s), (Ft = null), (e = !0))
                : (e = !1)),
            e || xi(s)),
          null
        );
      case 13:
        return bg(e, s, l);
      case 4:
        return (
          vt(s, s.stateNode.containerInfo),
          (c = s.pendingProps),
          e === null ? (s.child = us(s, null, c, l)) : ke(e, s, c, l),
          s.child
        );
      case 11:
        return rg(e, s, s.type, s.pendingProps, l);
      case 7:
        return (ke(e, s, s.pendingProps, l), s.child);
      case 8:
        return (ke(e, s, s.pendingProps.children, l), s.child);
      case 12:
        return (ke(e, s, s.pendingProps.children, l), s.child);
      case 10:
        return (
          (c = s.pendingProps),
          yi(s, s.type, c.value),
          ke(e, s, c.children, l),
          s.child
        );
      case 9:
        return (
          (f = s.type._context),
          (c = s.pendingProps.children),
          ls(s),
          (f = Ae(f)),
          (c = c(f)),
          (s.flags |= 1),
          ke(e, s, c, l),
          s.child
        );
      case 14:
        return cg(e, s, s.type, s.pendingProps, l);
      case 15:
        return ug(e, s, s.type, s.pendingProps, l);
      case 19:
        return yg(e, s, l);
      case 31:
        return Zv(e, s, l);
      case 22:
        return dg(e, s, l, s.pendingProps);
      case 24:
        return (
          ls(s),
          (c = Ae(de)),
          e === null
            ? ((f = ou()),
              f === null &&
                ((f = qt),
                (m = au()),
                (f.pooledCache = m),
                m.refCount++,
                m !== null && (f.pooledCacheLanes |= l),
                (f = m)),
              (s.memoizedState = { parent: c, cache: f }),
              cu(s),
              yi(s, de, f))
            : ((e.lanes & l) !== 0 && (uu(e, s), Ia(s, null, null, l), $a()),
              (f = e.memoizedState),
              (m = s.memoizedState),
              f.parent !== c
                ? ((f = { parent: c, cache: c }),
                  (s.memoizedState = f),
                  s.lanes === 0 &&
                    (s.memoizedState = s.updateQueue.baseState = f),
                  yi(s, de, c))
                : ((c = m.cache),
                  yi(s, de, c),
                  c !== f.cache && su(s, [de], l, !0))),
          ke(e, s, s.pendingProps.children, l),
          s.child
        );
      case 29:
        throw s.pendingProps;
    }
    throw Error(a(156, s.tag));
  }
  function Wn(e) {
    e.flags |= 4;
  }
  function Fu(e, s, l, c, f) {
    if (((s = (e.mode & 32) !== 0) && (s = !1), s)) {
      if (((e.flags |= 16777216), (f & 335544128) === f))
        if (e.stateNode.complete) e.flags |= 8192;
        else if (Zg()) e.flags |= 8192;
        else throw ((cs = To), ru);
    } else e.flags &= -16777217;
  }
  function wg(e, s) {
    if (s.type !== "stylesheet" || (s.state.loading & 4) !== 0)
      e.flags &= -16777217;
    else if (((e.flags |= 16777216), !Bp(s)))
      if (Zg()) e.flags |= 8192;
      else throw ((cs = To), ru);
  }
  function Zo(e, s) {
    (s !== null && (e.flags |= 4),
      e.flags & 16384 &&
        ((s = e.tag !== 22 ? th() : 536870912), (e.lanes |= s), (oa |= s)));
  }
  function sl(e, s) {
    if (!At)
      switch (e.tailMode) {
        case "hidden":
          s = e.tail;
          for (var l = null; s !== null;)
            (s.alternate !== null && (l = s), (s = s.sibling));
          l === null ? (e.tail = null) : (l.sibling = null);
          break;
        case "collapsed":
          l = e.tail;
          for (var c = null; l !== null;)
            (l.alternate !== null && (c = l), (l = l.sibling));
          c === null
            ? s || e.tail === null
              ? (e.tail = null)
              : (e.tail.sibling = null)
            : (c.sibling = null);
      }
  }
  function Gt(e) {
    var s = e.alternate !== null && e.alternate.child === e.child,
      l = 0,
      c = 0;
    if (s)
      for (var f = e.child; f !== null;)
        ((l |= f.lanes | f.childLanes),
          (c |= f.subtreeFlags & 65011712),
          (c |= f.flags & 65011712),
          (f.return = e),
          (f = f.sibling));
    else
      for (f = e.child; f !== null;)
        ((l |= f.lanes | f.childLanes),
          (c |= f.subtreeFlags),
          (c |= f.flags),
          (f.return = e),
          (f = f.sibling));
    return ((e.subtreeFlags |= c), (e.childLanes = l), s);
  }
  function Kv(e, s, l) {
    var c = s.pendingProps;
    switch ((Jc(s), s.tag)) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return (Gt(s), null);
      case 1:
        return (Gt(s), null);
      case 3:
        return (
          (l = s.stateNode),
          (c = null),
          e !== null && (c = e.memoizedState.cache),
          s.memoizedState.cache !== c && (s.flags |= 2048),
          Gn(de),
          _e(),
          l.pendingContext &&
            ((l.context = l.pendingContext), (l.pendingContext = null)),
          (e === null || e.child === null) &&
            (Qs(s)
              ? Wn(s)
              : e === null ||
                (e.memoizedState.isDehydrated && (s.flags & 256) === 0) ||
                ((s.flags |= 1024), eu())),
          Gt(s),
          null
        );
      case 26:
        var f = s.type,
          m = s.memoizedState;
        return (
          e === null
            ? (Wn(s),
              m !== null ? (Gt(s), wg(s, m)) : (Gt(s), Fu(s, f, null, c, l)))
            : m
              ? m !== e.memoizedState
                ? (Wn(s), Gt(s), wg(s, m))
                : (Gt(s), (s.flags &= -16777217))
              : ((e = e.memoizedProps),
                e !== c && Wn(s),
                Gt(s),
                Fu(s, f, e, c, l)),
          null
        );
      case 27:
        if (
          (Qt(s),
          (l = J.current),
          (f = s.type),
          e !== null && s.stateNode != null)
        )
          e.memoizedProps !== c && Wn(s);
        else {
          if (!c) {
            if (s.stateNode === null) throw Error(a(166));
            return (Gt(s), null);
          }
          ((e = kt.current),
            Qs(s) ? tm(s) : ((e = Cp(f, c, l)), (s.stateNode = e), Wn(s)));
        }
        return (Gt(s), null);
      case 5:
        if ((Qt(s), (f = s.type), e !== null && s.stateNode != null))
          e.memoizedProps !== c && Wn(s);
        else {
          if (!c) {
            if (s.stateNode === null) throw Error(a(166));
            return (Gt(s), null);
          }
          if (((m = kt.current), Qs(s))) tm(s);
          else {
            var x = rr(J.current);
            switch (m) {
              case 1:
                m = x.createElementNS("http://www.w3.org/2000/svg", f);
                break;
              case 2:
                m = x.createElementNS("http://www.w3.org/1998/Math/MathML", f);
                break;
              default:
                switch (f) {
                  case "svg":
                    m = x.createElementNS("http://www.w3.org/2000/svg", f);
                    break;
                  case "math":
                    m = x.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      f,
                    );
                    break;
                  case "script":
                    ((m = x.createElement("div")),
                      (m.innerHTML = "<script><\/script>"),
                      (m = m.removeChild(m.firstChild)));
                    break;
                  case "select":
                    ((m =
                      typeof c.is == "string"
                        ? x.createElement("select", { is: c.is })
                        : x.createElement("select")),
                      c.multiple
                        ? (m.multiple = !0)
                        : c.size && (m.size = c.size));
                    break;
                  default:
                    m =
                      typeof c.is == "string"
                        ? x.createElement(f, { is: c.is })
                        : x.createElement(f);
                }
            }
            ((m[Se] = s), (m[Ve] = c));
            t: for (x = s.child; x !== null;) {
              if (x.tag === 5 || x.tag === 6) m.appendChild(x.stateNode);
              else if (x.tag !== 4 && x.tag !== 27 && x.child !== null) {
                ((x.child.return = x), (x = x.child));
                continue;
              }
              if (x === s) break t;
              for (; x.sibling === null;) {
                if (x.return === null || x.return === s) break t;
                x = x.return;
              }
              ((x.sibling.return = x.return), (x = x.sibling));
            }
            s.stateNode = m;
            t: switch ((Ee(m, f, c), f)) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                c = !!c.autoFocus;
                break t;
              case "img":
                c = !0;
                break t;
              default:
                c = !1;
            }
            c && Wn(s);
          }
        }
        return (
          Gt(s),
          Fu(s, s.type, e === null ? null : e.memoizedProps, s.pendingProps, l),
          null
        );
      case 6:
        if (e && s.stateNode != null) e.memoizedProps !== c && Wn(s);
        else {
          if (typeof c != "string" && s.stateNode === null) throw Error(a(166));
          if (((e = J.current), Qs(s))) {
            if (
              ((e = s.stateNode),
              (l = s.memoizedProps),
              (c = null),
              (f = Me),
              f !== null)
            )
              switch (f.tag) {
                case 27:
                case 5:
                  c = f.memoizedProps;
              }
            ((e[Se] = s),
              (e = !!(
                e.nodeValue === l ||
                (c !== null && c.suppressHydrationWarning === !0) ||
                bp(e.nodeValue, l)
              )),
              e || xi(s, !0));
          } else
            ((e = rr(e).createTextNode(c)), (e[Se] = s), (s.stateNode = e));
        }
        return (Gt(s), null);
      case 31:
        if (((l = s.memoizedState), e === null || e.memoizedState !== null)) {
          if (((c = Qs(s)), l !== null)) {
            if (e === null) {
              if (!c) throw Error(a(318));
              if (
                ((e = s.memoizedState),
                (e = e !== null ? e.dehydrated : null),
                !e)
              )
                throw Error(a(557));
              e[Se] = s;
            } else
              (ss(),
                (s.flags & 128) === 0 && (s.memoizedState = null),
                (s.flags |= 4));
            (Gt(s), (e = !1));
          } else
            ((l = eu()),
              e !== null &&
                e.memoizedState !== null &&
                (e.memoizedState.hydrationErrors = l),
              (e = !0));
          if (!e) return s.flags & 256 ? (en(s), s) : (en(s), null);
          if ((s.flags & 128) !== 0) throw Error(a(558));
        }
        return (Gt(s), null);
      case 13:
        if (
          ((c = s.memoizedState),
          e === null ||
            (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (((f = Qs(s)), c !== null && c.dehydrated !== null)) {
            if (e === null) {
              if (!f) throw Error(a(318));
              if (
                ((f = s.memoizedState),
                (f = f !== null ? f.dehydrated : null),
                !f)
              )
                throw Error(a(317));
              f[Se] = s;
            } else
              (ss(),
                (s.flags & 128) === 0 && (s.memoizedState = null),
                (s.flags |= 4));
            (Gt(s), (f = !1));
          } else
            ((f = eu()),
              e !== null &&
                e.memoizedState !== null &&
                (e.memoizedState.hydrationErrors = f),
              (f = !0));
          if (!f) return s.flags & 256 ? (en(s), s) : (en(s), null);
        }
        return (
          en(s),
          (s.flags & 128) !== 0
            ? ((s.lanes = l), s)
            : ((l = c !== null),
              (e = e !== null && e.memoizedState !== null),
              l &&
                ((c = s.child),
                (f = null),
                c.alternate !== null &&
                  c.alternate.memoizedState !== null &&
                  c.alternate.memoizedState.cachePool !== null &&
                  (f = c.alternate.memoizedState.cachePool.pool),
                (m = null),
                c.memoizedState !== null &&
                  c.memoizedState.cachePool !== null &&
                  (m = c.memoizedState.cachePool.pool),
                m !== f && (c.flags |= 2048)),
              l !== e && l && (s.child.flags |= 8192),
              Zo(s, s.updateQueue),
              Gt(s),
              null)
        );
      case 4:
        return (_e(), e === null && hd(s.stateNode.containerInfo), Gt(s), null);
      case 10:
        return (Gn(s.type), Gt(s), null);
      case 19:
        if ((Mt(ae), (c = s.memoizedState), c === null)) return (Gt(s), null);
        if (((f = (s.flags & 128) !== 0), (m = c.rendering), m === null))
          if (f) sl(c, !1);
          else {
            if (ee !== 0 || (e !== null && (e.flags & 128) !== 0))
              for (e = s.child; e !== null;) {
                if (((m = Do(e)), m !== null)) {
                  for (
                    s.flags |= 128,
                      sl(c, !1),
                      e = m.updateQueue,
                      s.updateQueue = e,
                      Zo(s, e),
                      s.subtreeFlags = 0,
                      e = l,
                      l = s.child;
                    l !== null;
                  )
                    (Kh(l, e), (l = l.sibling));
                  return (
                    ft(ae, (ae.current & 1) | 2),
                    At && Pn(s, c.treeForkCount),
                    s.child
                  );
                }
                e = e.sibling;
              }
            c.tail !== null &&
              ue() > Io &&
              ((s.flags |= 128), (f = !0), sl(c, !1), (s.lanes = 4194304));
          }
        else {
          if (!f)
            if (((e = Do(m)), e !== null)) {
              if (
                ((s.flags |= 128),
                (f = !0),
                (e = e.updateQueue),
                (s.updateQueue = e),
                Zo(s, e),
                sl(c, !0),
                c.tail === null &&
                  c.tailMode === "hidden" &&
                  !m.alternate &&
                  !At)
              )
                return (Gt(s), null);
            } else
              2 * ue() - c.renderingStartTime > Io &&
                l !== 536870912 &&
                ((s.flags |= 128), (f = !0), sl(c, !1), (s.lanes = 4194304));
          c.isBackwards
            ? ((m.sibling = s.child), (s.child = m))
            : ((e = c.last),
              e !== null ? (e.sibling = m) : (s.child = m),
              (c.last = m));
        }
        return c.tail !== null
          ? ((e = c.tail),
            (c.rendering = e),
            (c.tail = e.sibling),
            (c.renderingStartTime = ue()),
            (e.sibling = null),
            (l = ae.current),
            ft(ae, f ? (l & 1) | 2 : l & 1),
            At && Pn(s, c.treeForkCount),
            e)
          : (Gt(s), null);
      case 22:
      case 23:
        return (
          en(s),
          mu(),
          (c = s.memoizedState !== null),
          e !== null
            ? (e.memoizedState !== null) !== c && (s.flags |= 8192)
            : c && (s.flags |= 8192),
          c
            ? (l & 536870912) !== 0 &&
              (s.flags & 128) === 0 &&
              (Gt(s), s.subtreeFlags & 6 && (s.flags |= 8192))
            : Gt(s),
          (l = s.updateQueue),
          l !== null && Zo(s, l.retryQueue),
          (l = null),
          e !== null &&
            e.memoizedState !== null &&
            e.memoizedState.cachePool !== null &&
            (l = e.memoizedState.cachePool.pool),
          (c = null),
          s.memoizedState !== null &&
            s.memoizedState.cachePool !== null &&
            (c = s.memoizedState.cachePool.pool),
          c !== l && (s.flags |= 2048),
          e !== null && Mt(os),
          null
        );
      case 24:
        return (
          (l = null),
          e !== null && (l = e.memoizedState.cache),
          s.memoizedState.cache !== l && (s.flags |= 2048),
          Gn(de),
          Gt(s),
          null
        );
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(a(156, s.tag));
  }
  function Wv(e, s) {
    switch ((Jc(s), s.tag)) {
      case 1:
        return (
          (e = s.flags),
          e & 65536 ? ((s.flags = (e & -65537) | 128), s) : null
        );
      case 3:
        return (
          Gn(de),
          _e(),
          (e = s.flags),
          (e & 65536) !== 0 && (e & 128) === 0
            ? ((s.flags = (e & -65537) | 128), s)
            : null
        );
      case 26:
      case 27:
      case 5:
        return (Qt(s), null);
      case 31:
        if (s.memoizedState !== null) {
          if ((en(s), s.alternate === null)) throw Error(a(340));
          ss();
        }
        return (
          (e = s.flags),
          e & 65536 ? ((s.flags = (e & -65537) | 128), s) : null
        );
      case 13:
        if (
          (en(s), (e = s.memoizedState), e !== null && e.dehydrated !== null)
        ) {
          if (s.alternate === null) throw Error(a(340));
          ss();
        }
        return (
          (e = s.flags),
          e & 65536 ? ((s.flags = (e & -65537) | 128), s) : null
        );
      case 19:
        return (Mt(ae), null);
      case 4:
        return (_e(), null);
      case 10:
        return (Gn(s.type), null);
      case 22:
      case 23:
        return (
          en(s),
          mu(),
          e !== null && Mt(os),
          (e = s.flags),
          e & 65536 ? ((s.flags = (e & -65537) | 128), s) : null
        );
      case 24:
        return (Gn(de), null);
      case 25:
        return null;
      default:
        return null;
    }
  }
  function _g(e, s) {
    switch ((Jc(s), s.tag)) {
      case 3:
        (Gn(de), _e());
        break;
      case 26:
      case 27:
      case 5:
        Qt(s);
        break;
      case 4:
        _e();
        break;
      case 31:
        s.memoizedState !== null && en(s);
        break;
      case 13:
        en(s);
        break;
      case 19:
        Mt(ae);
        break;
      case 10:
        Gn(s.type);
        break;
      case 22:
      case 23:
        (en(s), mu(), e !== null && Mt(os));
        break;
      case 24:
        Gn(de);
    }
  }
  function al(e, s) {
    try {
      var l = s.updateQueue,
        c = l !== null ? l.lastEffect : null;
      if (c !== null) {
        var f = c.next;
        l = f;
        do {
          if ((l.tag & e) === e) {
            c = void 0;
            var m = l.create,
              x = l.inst;
            ((c = m()), (x.destroy = c));
          }
          l = l.next;
        } while (l !== f);
      }
    } catch (w) {
      Dt(s, s.return, w);
    }
  }
  function Ai(e, s, l) {
    try {
      var c = s.updateQueue,
        f = c !== null ? c.lastEffect : null;
      if (f !== null) {
        var m = f.next;
        c = m;
        do {
          if ((c.tag & e) === e) {
            var x = c.inst,
              w = x.destroy;
            if (w !== void 0) {
              ((x.destroy = void 0), (f = s));
              var A = l,
                N = w;
              try {
                N();
              } catch (H) {
                Dt(f, A, H);
              }
            }
          }
          c = c.next;
        } while (c !== m);
      }
    } catch (H) {
      Dt(s, s.return, H);
    }
  }
  function Sg(e) {
    var s = e.updateQueue;
    if (s !== null) {
      var l = e.stateNode;
      try {
        hm(s, l);
      } catch (c) {
        Dt(e, e.return, c);
      }
    }
  }
  function Mg(e, s, l) {
    ((l.props = fs(e.type, e.memoizedProps)), (l.state = e.memoizedState));
    try {
      l.componentWillUnmount();
    } catch (c) {
      Dt(e, s, c);
    }
  }
  function ll(e, s) {
    try {
      var l = e.ref;
      if (l !== null) {
        switch (e.tag) {
          case 26:
          case 27:
          case 5:
            var c = e.stateNode;
            break;
          case 30:
            c = e.stateNode;
            break;
          default:
            c = e.stateNode;
        }
        typeof l == "function" ? (e.refCleanup = l(c)) : (l.current = c);
      }
    } catch (f) {
      Dt(e, s, f);
    }
  }
  function Tn(e, s) {
    var l = e.ref,
      c = e.refCleanup;
    if (l !== null)
      if (typeof c == "function")
        try {
          c();
        } catch (f) {
          Dt(e, s, f);
        } finally {
          ((e.refCleanup = null),
            (e = e.alternate),
            e != null && (e.refCleanup = null));
        }
      else if (typeof l == "function")
        try {
          l(null);
        } catch (f) {
          Dt(e, s, f);
        }
      else l.current = null;
  }
  function Ag(e) {
    var s = e.type,
      l = e.memoizedProps,
      c = e.stateNode;
    try {
      t: switch (s) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          l.autoFocus && c.focus();
          break t;
        case "img":
          l.src ? (c.src = l.src) : l.srcSet && (c.srcset = l.srcSet);
      }
    } catch (f) {
      Dt(e, e.return, f);
    }
  }
  function Gu(e, s, l) {
    try {
      var c = e.stateNode;
      (x2(c, e.type, l, s), (c[Ve] = s));
    } catch (f) {
      Dt(e, e.return, f);
    }
  }
  function kg(e) {
    return (
      e.tag === 5 ||
      e.tag === 3 ||
      e.tag === 26 ||
      (e.tag === 27 && Oi(e.type)) ||
      e.tag === 4
    );
  }
  function Zu(e) {
    t: for (;;) {
      for (; e.sibling === null;) {
        if (e.return === null || kg(e.return)) return null;
        e = e.return;
      }
      for (
        e.sibling.return = e.return, e = e.sibling;
        e.tag !== 5 && e.tag !== 6 && e.tag !== 18;
      ) {
        if (
          (e.tag === 27 && Oi(e.type)) ||
          e.flags & 2 ||
          e.child === null ||
          e.tag === 4
        )
          continue t;
        ((e.child.return = e), (e = e.child));
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function Qu(e, s, l) {
    var c = e.tag;
    if (c === 5 || c === 6)
      ((e = e.stateNode),
        s
          ? (l.nodeType === 9
              ? l.body
              : l.nodeName === "HTML"
                ? l.ownerDocument.body
                : l
            ).insertBefore(e, s)
          : ((s =
              l.nodeType === 9
                ? l.body
                : l.nodeName === "HTML"
                  ? l.ownerDocument.body
                  : l),
            s.appendChild(e),
            (l = l._reactRootContainer),
            l != null || s.onclick !== null || (s.onclick = qn)));
    else if (
      c !== 4 &&
      (c === 27 && Oi(e.type) && ((l = e.stateNode), (s = null)),
      (e = e.child),
      e !== null)
    )
      for (Qu(e, s, l), e = e.sibling; e !== null;)
        (Qu(e, s, l), (e = e.sibling));
  }
  function Qo(e, s, l) {
    var c = e.tag;
    if (c === 5 || c === 6)
      ((e = e.stateNode), s ? l.insertBefore(e, s) : l.appendChild(e));
    else if (
      c !== 4 &&
      (c === 27 && Oi(e.type) && (l = e.stateNode), (e = e.child), e !== null)
    )
      for (Qo(e, s, l), e = e.sibling; e !== null;)
        (Qo(e, s, l), (e = e.sibling));
  }
  function Eg(e) {
    var s = e.stateNode,
      l = e.memoizedProps;
    try {
      for (var c = e.type, f = s.attributes; f.length;)
        s.removeAttributeNode(f[0]);
      (Ee(s, c, l), (s[Se] = e), (s[Ve] = l));
    } catch (m) {
      Dt(e, e.return, m);
    }
  }
  var $n = !1,
    me = !1,
    Ku = !1,
    Cg = typeof WeakSet == "function" ? WeakSet : Set,
    ye = null;
  function $v(e, s) {
    if (((e = e.containerInfo), (pd = gr), (e = Vh(e)), Yc(e))) {
      if ("selectionStart" in e)
        var l = { start: e.selectionStart, end: e.selectionEnd };
      else
        t: {
          l = ((l = e.ownerDocument) && l.defaultView) || window;
          var c = l.getSelection && l.getSelection();
          if (c && c.rangeCount !== 0) {
            l = c.anchorNode;
            var f = c.anchorOffset,
              m = c.focusNode;
            c = c.focusOffset;
            try {
              (l.nodeType, m.nodeType);
            } catch {
              l = null;
              break t;
            }
            var x = 0,
              w = -1,
              A = -1,
              N = 0,
              H = 0,
              Y = e,
              O = null;
            e: for (;;) {
              for (
                var L;
                Y !== l || (f !== 0 && Y.nodeType !== 3) || (w = x + f),
                  Y !== m || (c !== 0 && Y.nodeType !== 3) || (A = x + c),
                  Y.nodeType === 3 && (x += Y.nodeValue.length),
                  (L = Y.firstChild) !== null;
              )
                ((O = Y), (Y = L));
              for (;;) {
                if (Y === e) break e;
                if (
                  (O === l && ++N === f && (w = x),
                  O === m && ++H === c && (A = x),
                  (L = Y.nextSibling) !== null)
                )
                  break;
                ((Y = O), (O = Y.parentNode));
              }
              Y = L;
            }
            l = w === -1 || A === -1 ? null : { start: w, end: A };
          } else l = null;
        }
      l = l || { start: 0, end: 0 };
    } else l = null;
    for (
      bd = { focusedElem: e, selectionRange: l }, gr = !1, ye = s;
      ye !== null;
    )
      if (
        ((s = ye), (e = s.child), (s.subtreeFlags & 1028) !== 0 && e !== null)
      )
        ((e.return = s), (ye = e));
      else
        for (; ye !== null;) {
          switch (((s = ye), (m = s.alternate), (e = s.flags), s.tag)) {
            case 0:
              if (
                (e & 4) !== 0 &&
                ((e = s.updateQueue),
                (e = e !== null ? e.events : null),
                e !== null)
              )
                for (l = 0; l < e.length; l++)
                  ((f = e[l]), (f.ref.impl = f.nextImpl));
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((e & 1024) !== 0 && m !== null) {
                ((e = void 0),
                  (l = s),
                  (f = m.memoizedProps),
                  (m = m.memoizedState),
                  (c = l.stateNode));
                try {
                  var tt = fs(l.type, f);
                  ((e = c.getSnapshotBeforeUpdate(tt, m)),
                    (c.__reactInternalSnapshotBeforeUpdate = e));
                } catch (ot) {
                  Dt(l, l.return, ot);
                }
              }
              break;
            case 3:
              if ((e & 1024) !== 0) {
                if (
                  ((e = s.stateNode.containerInfo), (l = e.nodeType), l === 9)
                )
                  vd(e);
                else if (l === 1)
                  switch (e.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      vd(e);
                      break;
                    default:
                      e.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((e & 1024) !== 0) throw Error(a(163));
          }
          if (((e = s.sibling), e !== null)) {
            ((e.return = s.return), (ye = e));
            break;
          }
          ye = s.return;
        }
  }
  function jg(e, s, l) {
    var c = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        (Jn(e, l), c & 4 && al(5, l));
        break;
      case 1:
        if ((Jn(e, l), c & 4))
          if (((e = l.stateNode), s === null))
            try {
              e.componentDidMount();
            } catch (x) {
              Dt(l, l.return, x);
            }
          else {
            var f = fs(l.type, s.memoizedProps);
            s = s.memoizedState;
            try {
              e.componentDidUpdate(f, s, e.__reactInternalSnapshotBeforeUpdate);
            } catch (x) {
              Dt(l, l.return, x);
            }
          }
        (c & 64 && Sg(l), c & 512 && ll(l, l.return));
        break;
      case 3:
        if ((Jn(e, l), c & 64 && ((e = l.updateQueue), e !== null))) {
          if (((s = null), l.child !== null))
            switch (l.child.tag) {
              case 27:
              case 5:
                s = l.child.stateNode;
                break;
              case 1:
                s = l.child.stateNode;
            }
          try {
            hm(e, s);
          } catch (x) {
            Dt(l, l.return, x);
          }
        }
        break;
      case 27:
        s === null && c & 4 && Eg(l);
      case 26:
      case 5:
        (Jn(e, l), s === null && c & 4 && Ag(l), c & 512 && ll(l, l.return));
        break;
      case 12:
        Jn(e, l);
        break;
      case 31:
        (Jn(e, l), c & 4 && Og(e, l));
        break;
      case 13:
        (Jn(e, l),
          c & 4 && zg(e, l),
          c & 64 &&
            ((e = l.memoizedState),
            e !== null &&
              ((e = e.dehydrated),
              e !== null && ((l = l2.bind(null, l)), k2(e, l)))));
        break;
      case 22:
        if (((c = l.memoizedState !== null || $n), !c)) {
          ((s = (s !== null && s.memoizedState !== null) || me), (f = $n));
          var m = me;
          (($n = c),
            (me = s) && !m ? ti(e, l, (l.subtreeFlags & 8772) !== 0) : Jn(e, l),
            ($n = f),
            (me = m));
        }
        break;
      case 30:
        break;
      default:
        Jn(e, l);
    }
  }
  function Tg(e) {
    var s = e.alternate;
    (s !== null && ((e.alternate = null), Tg(s)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 && ((s = e.stateNode), s !== null && Ac(s)),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null));
  }
  var Wt = null,
    Ye = !1;
  function In(e, s, l) {
    for (l = l.child; l !== null;) (Ng(e, s, l), (l = l.sibling));
  }
  function Ng(e, s, l) {
    if (We && typeof We.onCommitFiberUnmount == "function")
      try {
        We.onCommitFiberUnmount(Ta, l);
      } catch {}
    switch (l.tag) {
      case 26:
        (me || Tn(l, s),
          In(e, s, l),
          l.memoizedState
            ? l.memoizedState.count--
            : l.stateNode && ((l = l.stateNode), l.parentNode.removeChild(l)));
        break;
      case 27:
        me || Tn(l, s);
        var c = Wt,
          f = Ye;
        (Oi(l.type) && ((Wt = l.stateNode), (Ye = !1)),
          In(e, s, l),
          gl(l.stateNode),
          (Wt = c),
          (Ye = f));
        break;
      case 5:
        me || Tn(l, s);
      case 6:
        if (
          ((c = Wt),
          (f = Ye),
          (Wt = null),
          In(e, s, l),
          (Wt = c),
          (Ye = f),
          Wt !== null)
        )
          if (Ye)
            try {
              (Wt.nodeType === 9
                ? Wt.body
                : Wt.nodeName === "HTML"
                  ? Wt.ownerDocument.body
                  : Wt
              ).removeChild(l.stateNode);
            } catch (m) {
              Dt(l, s, m);
            }
          else
            try {
              Wt.removeChild(l.stateNode);
            } catch (m) {
              Dt(l, s, m);
            }
        break;
      case 18:
        Wt !== null &&
          (Ye
            ? ((e = Wt),
              Sp(
                e.nodeType === 9
                  ? e.body
                  : e.nodeName === "HTML"
                    ? e.ownerDocument.body
                    : e,
                l.stateNode,
              ),
              ga(e))
            : Sp(Wt, l.stateNode));
        break;
      case 4:
        ((c = Wt),
          (f = Ye),
          (Wt = l.stateNode.containerInfo),
          (Ye = !0),
          In(e, s, l),
          (Wt = c),
          (Ye = f));
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        (Ai(2, l, s), me || Ai(4, l, s), In(e, s, l));
        break;
      case 1:
        (me ||
          (Tn(l, s),
          (c = l.stateNode),
          typeof c.componentWillUnmount == "function" && Mg(l, s, c)),
          In(e, s, l));
        break;
      case 21:
        In(e, s, l);
        break;
      case 22:
        ((me = (c = me) || l.memoizedState !== null), In(e, s, l), (me = c));
        break;
      default:
        In(e, s, l);
    }
  }
  function Og(e, s) {
    if (
      s.memoizedState === null &&
      ((e = s.alternate), e !== null && ((e = e.memoizedState), e !== null))
    ) {
      e = e.dehydrated;
      try {
        ga(e);
      } catch (l) {
        Dt(s, s.return, l);
      }
    }
  }
  function zg(e, s) {
    if (
      s.memoizedState === null &&
      ((e = s.alternate),
      e !== null &&
        ((e = e.memoizedState), e !== null && ((e = e.dehydrated), e !== null)))
    )
      try {
        ga(e);
      } catch (l) {
        Dt(s, s.return, l);
      }
  }
  function Iv(e) {
    switch (e.tag) {
      case 31:
      case 13:
      case 19:
        var s = e.stateNode;
        return (s === null && (s = e.stateNode = new Cg()), s);
      case 22:
        return (
          (e = e.stateNode),
          (s = e._retryCache),
          s === null && (s = e._retryCache = new Cg()),
          s
        );
      default:
        throw Error(a(435, e.tag));
    }
  }
  function Ko(e, s) {
    var l = Iv(e);
    s.forEach(function (c) {
      if (!l.has(c)) {
        l.add(c);
        var f = o2.bind(null, e, c);
        c.then(f, f);
      }
    });
  }
  function Xe(e, s) {
    var l = s.deletions;
    if (l !== null)
      for (var c = 0; c < l.length; c++) {
        var f = l[c],
          m = e,
          x = s,
          w = x;
        t: for (; w !== null;) {
          switch (w.tag) {
            case 27:
              if (Oi(w.type)) {
                ((Wt = w.stateNode), (Ye = !1));
                break t;
              }
              break;
            case 5:
              ((Wt = w.stateNode), (Ye = !1));
              break t;
            case 3:
            case 4:
              ((Wt = w.stateNode.containerInfo), (Ye = !0));
              break t;
          }
          w = w.return;
        }
        if (Wt === null) throw Error(a(160));
        (Ng(m, x, f),
          (Wt = null),
          (Ye = !1),
          (m = f.alternate),
          m !== null && (m.return = null),
          (f.return = null));
      }
    if (s.subtreeFlags & 13886)
      for (s = s.child; s !== null;) (Dg(s, e), (s = s.sibling));
  }
  var Mn = null;
  function Dg(e, s) {
    var l = e.alternate,
      c = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        (Xe(s, e),
          Pe(e),
          c & 4 && (Ai(3, e, e.return), al(3, e), Ai(5, e, e.return)));
        break;
      case 1:
        (Xe(s, e),
          Pe(e),
          c & 512 && (me || l === null || Tn(l, l.return)),
          c & 64 &&
            $n &&
            ((e = e.updateQueue),
            e !== null &&
              ((c = e.callbacks),
              c !== null &&
                ((l = e.shared.hiddenCallbacks),
                (e.shared.hiddenCallbacks = l === null ? c : l.concat(c))))));
        break;
      case 26:
        var f = Mn;
        if (
          (Xe(s, e),
          Pe(e),
          c & 512 && (me || l === null || Tn(l, l.return)),
          c & 4)
        ) {
          var m = l !== null ? l.memoizedState : null;
          if (((c = e.memoizedState), l === null))
            if (c === null)
              if (e.stateNode === null) {
                t: {
                  ((c = e.type),
                    (l = e.memoizedProps),
                    (f = f.ownerDocument || f));
                  e: switch (c) {
                    case "title":
                      ((m = f.getElementsByTagName("title")[0]),
                        (!m ||
                          m[za] ||
                          m[Se] ||
                          m.namespaceURI === "http://www.w3.org/2000/svg" ||
                          m.hasAttribute("itemprop")) &&
                          ((m = f.createElement(c)),
                          f.head.insertBefore(
                            m,
                            f.querySelector("head > title"),
                          )),
                        Ee(m, c, l),
                        (m[Se] = e),
                        xe(m),
                        (c = m));
                      break t;
                    case "link":
                      var x = Dp("link", "href", f).get(c + (l.href || ""));
                      if (x) {
                        for (var w = 0; w < x.length; w++)
                          if (
                            ((m = x[w]),
                            m.getAttribute("href") ===
                              (l.href == null || l.href === ""
                                ? null
                                : l.href) &&
                              m.getAttribute("rel") ===
                                (l.rel == null ? null : l.rel) &&
                              m.getAttribute("title") ===
                                (l.title == null ? null : l.title) &&
                              m.getAttribute("crossorigin") ===
                                (l.crossOrigin == null ? null : l.crossOrigin))
                          ) {
                            x.splice(w, 1);
                            break e;
                          }
                      }
                      ((m = f.createElement(c)),
                        Ee(m, c, l),
                        f.head.appendChild(m));
                      break;
                    case "meta":
                      if (
                        (x = Dp("meta", "content", f).get(
                          c + (l.content || ""),
                        ))
                      ) {
                        for (w = 0; w < x.length; w++)
                          if (
                            ((m = x[w]),
                            m.getAttribute("content") ===
                              (l.content == null ? null : "" + l.content) &&
                              m.getAttribute("name") ===
                                (l.name == null ? null : l.name) &&
                              m.getAttribute("property") ===
                                (l.property == null ? null : l.property) &&
                              m.getAttribute("http-equiv") ===
                                (l.httpEquiv == null ? null : l.httpEquiv) &&
                              m.getAttribute("charset") ===
                                (l.charSet == null ? null : l.charSet))
                          ) {
                            x.splice(w, 1);
                            break e;
                          }
                      }
                      ((m = f.createElement(c)),
                        Ee(m, c, l),
                        f.head.appendChild(m));
                      break;
                    default:
                      throw Error(a(468, c));
                  }
                  ((m[Se] = e), xe(m), (c = m));
                }
                e.stateNode = c;
              } else Lp(f, e.type, e.stateNode);
            else e.stateNode = zp(f, c, e.memoizedProps);
          else
            m !== c
              ? (m === null
                  ? l.stateNode !== null &&
                    ((l = l.stateNode), l.parentNode.removeChild(l))
                  : m.count--,
                c === null
                  ? Lp(f, e.type, e.stateNode)
                  : zp(f, c, e.memoizedProps))
              : c === null &&
                e.stateNode !== null &&
                Gu(e, e.memoizedProps, l.memoizedProps);
        }
        break;
      case 27:
        (Xe(s, e),
          Pe(e),
          c & 512 && (me || l === null || Tn(l, l.return)),
          l !== null && c & 4 && Gu(e, e.memoizedProps, l.memoizedProps));
        break;
      case 5:
        if (
          (Xe(s, e),
          Pe(e),
          c & 512 && (me || l === null || Tn(l, l.return)),
          e.flags & 32)
        ) {
          f = e.stateNode;
          try {
            Hs(f, "");
          } catch (tt) {
            Dt(e, e.return, tt);
          }
        }
        (c & 4 &&
          e.stateNode != null &&
          ((f = e.memoizedProps), Gu(e, f, l !== null ? l.memoizedProps : f)),
          c & 1024 && (Ku = !0));
        break;
      case 6:
        if ((Xe(s, e), Pe(e), c & 4)) {
          if (e.stateNode === null) throw Error(a(162));
          ((c = e.memoizedProps), (l = e.stateNode));
          try {
            l.nodeValue = c;
          } catch (tt) {
            Dt(e, e.return, tt);
          }
        }
        break;
      case 3:
        if (
          ((dr = null),
          (f = Mn),
          (Mn = cr(s.containerInfo)),
          Xe(s, e),
          (Mn = f),
          Pe(e),
          c & 4 && l !== null && l.memoizedState.isDehydrated)
        )
          try {
            ga(s.containerInfo);
          } catch (tt) {
            Dt(e, e.return, tt);
          }
        Ku && ((Ku = !1), Lg(e));
        break;
      case 4:
        ((c = Mn),
          (Mn = cr(e.stateNode.containerInfo)),
          Xe(s, e),
          Pe(e),
          (Mn = c));
        break;
      case 12:
        (Xe(s, e), Pe(e));
        break;
      case 31:
        (Xe(s, e),
          Pe(e),
          c & 4 &&
            ((c = e.updateQueue),
            c !== null && ((e.updateQueue = null), Ko(e, c))));
        break;
      case 13:
        (Xe(s, e),
          Pe(e),
          e.child.flags & 8192 &&
            (e.memoizedState !== null) !=
              (l !== null && l.memoizedState !== null) &&
            ($o = ue()),
          c & 4 &&
            ((c = e.updateQueue),
            c !== null && ((e.updateQueue = null), Ko(e, c))));
        break;
      case 22:
        f = e.memoizedState !== null;
        var A = l !== null && l.memoizedState !== null,
          N = $n,
          H = me;
        if (
          (($n = N || f),
          (me = H || A),
          Xe(s, e),
          (me = H),
          ($n = N),
          Pe(e),
          c & 8192)
        )
          t: for (
            s = e.stateNode,
              s._visibility = f ? s._visibility & -2 : s._visibility | 1,
              f && (l === null || A || $n || me || hs(e)),
              l = null,
              s = e;
            ;
          ) {
            if (s.tag === 5 || s.tag === 26) {
              if (l === null) {
                A = l = s;
                try {
                  if (((m = A.stateNode), f))
                    ((x = m.style),
                      typeof x.setProperty == "function"
                        ? x.setProperty("display", "none", "important")
                        : (x.display = "none"));
                  else {
                    w = A.stateNode;
                    var Y = A.memoizedProps.style,
                      O =
                        Y != null && Y.hasOwnProperty("display")
                          ? Y.display
                          : null;
                    w.style.display =
                      O == null || typeof O == "boolean" ? "" : ("" + O).trim();
                  }
                } catch (tt) {
                  Dt(A, A.return, tt);
                }
              }
            } else if (s.tag === 6) {
              if (l === null) {
                A = s;
                try {
                  A.stateNode.nodeValue = f ? "" : A.memoizedProps;
                } catch (tt) {
                  Dt(A, A.return, tt);
                }
              }
            } else if (s.tag === 18) {
              if (l === null) {
                A = s;
                try {
                  var L = A.stateNode;
                  f ? Mp(L, !0) : Mp(A.stateNode, !1);
                } catch (tt) {
                  Dt(A, A.return, tt);
                }
              }
            } else if (
              ((s.tag !== 22 && s.tag !== 23) ||
                s.memoizedState === null ||
                s === e) &&
              s.child !== null
            ) {
              ((s.child.return = s), (s = s.child));
              continue;
            }
            if (s === e) break t;
            for (; s.sibling === null;) {
              if (s.return === null || s.return === e) break t;
              (l === s && (l = null), (s = s.return));
            }
            (l === s && (l = null),
              (s.sibling.return = s.return),
              (s = s.sibling));
          }
        c & 4 &&
          ((c = e.updateQueue),
          c !== null &&
            ((l = c.retryQueue),
            l !== null && ((c.retryQueue = null), Ko(e, l))));
        break;
      case 19:
        (Xe(s, e),
          Pe(e),
          c & 4 &&
            ((c = e.updateQueue),
            c !== null && ((e.updateQueue = null), Ko(e, c))));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        (Xe(s, e), Pe(e));
    }
  }
  function Pe(e) {
    var s = e.flags;
    if (s & 2) {
      try {
        for (var l, c = e.return; c !== null;) {
          if (kg(c)) {
            l = c;
            break;
          }
          c = c.return;
        }
        if (l == null) throw Error(a(160));
        switch (l.tag) {
          case 27:
            var f = l.stateNode,
              m = Zu(e);
            Qo(e, m, f);
            break;
          case 5:
            var x = l.stateNode;
            l.flags & 32 && (Hs(x, ""), (l.flags &= -33));
            var w = Zu(e);
            Qo(e, w, x);
            break;
          case 3:
          case 4:
            var A = l.stateNode.containerInfo,
              N = Zu(e);
            Qu(e, N, A);
            break;
          default:
            throw Error(a(161));
        }
      } catch (H) {
        Dt(e, e.return, H);
      }
      e.flags &= -3;
    }
    s & 4096 && (e.flags &= -4097);
  }
  function Lg(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null;) {
        var s = e;
        (Lg(s),
          s.tag === 5 && s.flags & 1024 && s.stateNode.reset(),
          (e = e.sibling));
      }
  }
  function Jn(e, s) {
    if (s.subtreeFlags & 8772)
      for (s = s.child; s !== null;) (jg(e, s.alternate, s), (s = s.sibling));
  }
  function hs(e) {
    for (e = e.child; e !== null;) {
      var s = e;
      switch (s.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          (Ai(4, s, s.return), hs(s));
          break;
        case 1:
          Tn(s, s.return);
          var l = s.stateNode;
          (typeof l.componentWillUnmount == "function" && Mg(s, s.return, l),
            hs(s));
          break;
        case 27:
          gl(s.stateNode);
        case 26:
        case 5:
          (Tn(s, s.return), hs(s));
          break;
        case 22:
          s.memoizedState === null && hs(s);
          break;
        case 30:
          hs(s);
          break;
        default:
          hs(s);
      }
      e = e.sibling;
    }
  }
  function ti(e, s, l) {
    for (l = l && (s.subtreeFlags & 8772) !== 0, s = s.child; s !== null;) {
      var c = s.alternate,
        f = e,
        m = s,
        x = m.flags;
      switch (m.tag) {
        case 0:
        case 11:
        case 15:
          (ti(f, m, l), al(4, m));
          break;
        case 1:
          if (
            (ti(f, m, l),
            (c = m),
            (f = c.stateNode),
            typeof f.componentDidMount == "function")
          )
            try {
              f.componentDidMount();
            } catch (N) {
              Dt(c, c.return, N);
            }
          if (((c = m), (f = c.updateQueue), f !== null)) {
            var w = c.stateNode;
            try {
              var A = f.shared.hiddenCallbacks;
              if (A !== null)
                for (f.shared.hiddenCallbacks = null, f = 0; f < A.length; f++)
                  fm(A[f], w);
            } catch (N) {
              Dt(c, c.return, N);
            }
          }
          (l && x & 64 && Sg(m), ll(m, m.return));
          break;
        case 27:
          Eg(m);
        case 26:
        case 5:
          (ti(f, m, l), l && c === null && x & 4 && Ag(m), ll(m, m.return));
          break;
        case 12:
          ti(f, m, l);
          break;
        case 31:
          (ti(f, m, l), l && x & 4 && Og(f, m));
          break;
        case 13:
          (ti(f, m, l), l && x & 4 && zg(f, m));
          break;
        case 22:
          (m.memoizedState === null && ti(f, m, l), ll(m, m.return));
          break;
        case 30:
          break;
        default:
          ti(f, m, l);
      }
      s = s.sibling;
    }
  }
  function Wu(e, s) {
    var l = null;
    (e !== null &&
      e.memoizedState !== null &&
      e.memoizedState.cachePool !== null &&
      (l = e.memoizedState.cachePool.pool),
      (e = null),
      s.memoizedState !== null &&
        s.memoizedState.cachePool !== null &&
        (e = s.memoizedState.cachePool.pool),
      e !== l && (e != null && e.refCount++, l != null && Ga(l)));
  }
  function $u(e, s) {
    ((e = null),
      s.alternate !== null && (e = s.alternate.memoizedState.cache),
      (s = s.memoizedState.cache),
      s !== e && (s.refCount++, e != null && Ga(e)));
  }
  function An(e, s, l, c) {
    if (s.subtreeFlags & 10256)
      for (s = s.child; s !== null;) (Bg(e, s, l, c), (s = s.sibling));
  }
  function Bg(e, s, l, c) {
    var f = s.flags;
    switch (s.tag) {
      case 0:
      case 11:
      case 15:
        (An(e, s, l, c), f & 2048 && al(9, s));
        break;
      case 1:
        An(e, s, l, c);
        break;
      case 3:
        (An(e, s, l, c),
          f & 2048 &&
            ((e = null),
            s.alternate !== null && (e = s.alternate.memoizedState.cache),
            (s = s.memoizedState.cache),
            s !== e && (s.refCount++, e != null && Ga(e))));
        break;
      case 12:
        if (f & 2048) {
          (An(e, s, l, c), (e = s.stateNode));
          try {
            var m = s.memoizedProps,
              x = m.id,
              w = m.onPostCommit;
            typeof w == "function" &&
              w(
                x,
                s.alternate === null ? "mount" : "update",
                e.passiveEffectDuration,
                -0,
              );
          } catch (A) {
            Dt(s, s.return, A);
          }
        } else An(e, s, l, c);
        break;
      case 31:
        An(e, s, l, c);
        break;
      case 13:
        An(e, s, l, c);
        break;
      case 23:
        break;
      case 22:
        ((m = s.stateNode),
          (x = s.alternate),
          s.memoizedState !== null
            ? m._visibility & 2
              ? An(e, s, l, c)
              : ol(e, s)
            : m._visibility & 2
              ? An(e, s, l, c)
              : ((m._visibility |= 2),
                sa(e, s, l, c, (s.subtreeFlags & 10256) !== 0 || !1)),
          f & 2048 && Wu(x, s));
        break;
      case 24:
        (An(e, s, l, c), f & 2048 && $u(s.alternate, s));
        break;
      default:
        An(e, s, l, c);
    }
  }
  function sa(e, s, l, c, f) {
    for (
      f = f && ((s.subtreeFlags & 10256) !== 0 || !1), s = s.child;
      s !== null;
    ) {
      var m = e,
        x = s,
        w = l,
        A = c,
        N = x.flags;
      switch (x.tag) {
        case 0:
        case 11:
        case 15:
          (sa(m, x, w, A, f), al(8, x));
          break;
        case 23:
          break;
        case 22:
          var H = x.stateNode;
          (x.memoizedState !== null
            ? H._visibility & 2
              ? sa(m, x, w, A, f)
              : ol(m, x)
            : ((H._visibility |= 2), sa(m, x, w, A, f)),
            f && N & 2048 && Wu(x.alternate, x));
          break;
        case 24:
          (sa(m, x, w, A, f), f && N & 2048 && $u(x.alternate, x));
          break;
        default:
          sa(m, x, w, A, f);
      }
      s = s.sibling;
    }
  }
  function ol(e, s) {
    if (s.subtreeFlags & 10256)
      for (s = s.child; s !== null;) {
        var l = e,
          c = s,
          f = c.flags;
        switch (c.tag) {
          case 22:
            (ol(l, c), f & 2048 && Wu(c.alternate, c));
            break;
          case 24:
            (ol(l, c), f & 2048 && $u(c.alternate, c));
            break;
          default:
            ol(l, c);
        }
        s = s.sibling;
      }
  }
  var rl = 8192;
  function aa(e, s, l) {
    if (e.subtreeFlags & rl)
      for (e = e.child; e !== null;) (Rg(e, s, l), (e = e.sibling));
  }
  function Rg(e, s, l) {
    switch (e.tag) {
      case 26:
        (aa(e, s, l),
          e.flags & rl &&
            e.memoizedState !== null &&
            H2(l, Mn, e.memoizedState, e.memoizedProps));
        break;
      case 5:
        aa(e, s, l);
        break;
      case 3:
      case 4:
        var c = Mn;
        ((Mn = cr(e.stateNode.containerInfo)), aa(e, s, l), (Mn = c));
        break;
      case 22:
        e.memoizedState === null &&
          ((c = e.alternate),
          c !== null && c.memoizedState !== null
            ? ((c = rl), (rl = 16777216), aa(e, s, l), (rl = c))
            : aa(e, s, l));
        break;
      default:
        aa(e, s, l);
    }
  }
  function Hg(e) {
    var s = e.alternate;
    if (s !== null && ((e = s.child), e !== null)) {
      s.child = null;
      do ((s = e.sibling), (e.sibling = null), (e = s));
      while (e !== null);
    }
  }
  function cl(e) {
    var s = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (s !== null)
        for (var l = 0; l < s.length; l++) {
          var c = s[l];
          ((ye = c), Vg(c, e));
        }
      Hg(e);
    }
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null;) (Ug(e), (e = e.sibling));
  }
  function Ug(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        (cl(e), e.flags & 2048 && Ai(9, e, e.return));
        break;
      case 3:
        cl(e);
        break;
      case 12:
        cl(e);
        break;
      case 22:
        var s = e.stateNode;
        e.memoizedState !== null &&
        s._visibility & 2 &&
        (e.return === null || e.return.tag !== 13)
          ? ((s._visibility &= -3), Wo(e))
          : cl(e);
        break;
      default:
        cl(e);
    }
  }
  function Wo(e) {
    var s = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (s !== null)
        for (var l = 0; l < s.length; l++) {
          var c = s[l];
          ((ye = c), Vg(c, e));
        }
      Hg(e);
    }
    for (e = e.child; e !== null;) {
      switch (((s = e), s.tag)) {
        case 0:
        case 11:
        case 15:
          (Ai(8, s, s.return), Wo(s));
          break;
        case 22:
          ((l = s.stateNode),
            l._visibility & 2 && ((l._visibility &= -3), Wo(s)));
          break;
        default:
          Wo(s);
      }
      e = e.sibling;
    }
  }
  function Vg(e, s) {
    for (; ye !== null;) {
      var l = ye;
      switch (l.tag) {
        case 0:
        case 11:
        case 15:
          Ai(8, l, s);
          break;
        case 23:
        case 22:
          if (l.memoizedState !== null && l.memoizedState.cachePool !== null) {
            var c = l.memoizedState.cachePool.pool;
            c != null && c.refCount++;
          }
          break;
        case 24:
          Ga(l.memoizedState.cache);
      }
      if (((c = l.child), c !== null)) ((c.return = l), (ye = c));
      else
        t: for (l = e; ye !== null;) {
          c = ye;
          var f = c.sibling,
            m = c.return;
          if ((Tg(c), c === l)) {
            ye = null;
            break t;
          }
          if (f !== null) {
            ((f.return = m), (ye = f));
            break t;
          }
          ye = m;
        }
    }
  }
  var Jv = {
      getCacheForType: function (e) {
        var s = Ae(de),
          l = s.data.get(e);
        return (l === void 0 && ((l = e()), s.data.set(e, l)), l);
      },
      cacheSignal: function () {
        return Ae(de).controller.signal;
      },
    },
    t2 = typeof WeakMap == "function" ? WeakMap : Map,
    Tt = 0,
    qt = null,
    bt = null,
    wt = 0,
    zt = 0,
    nn = null,
    ki = !1,
    la = !1,
    Iu = !1,
    ei = 0,
    ee = 0,
    Ei = 0,
    ms = 0,
    Ju = 0,
    sn = 0,
    oa = 0,
    ul = null,
    Fe = null,
    td = !1,
    $o = 0,
    qg = 0,
    Io = 1 / 0,
    Jo = null,
    Ci = null,
    pe = 0,
    ji = null,
    ra = null,
    ni = 0,
    ed = 0,
    nd = null,
    Yg = null,
    dl = 0,
    id = null;
  function an() {
    return (Tt & 2) !== 0 && wt !== 0 ? wt & -wt : D.T !== null ? cd() : sh();
  }
  function Xg() {
    if (sn === 0)
      if ((wt & 536870912) === 0 || At) {
        var e = lo;
        ((lo <<= 1), (lo & 3932160) === 0 && (lo = 262144), (sn = e));
      } else sn = 536870912;
    return ((e = tn.current), e !== null && (e.flags |= 32), sn);
  }
  function Ge(e, s, l) {
    (((e === qt && (zt === 2 || zt === 9)) || e.cancelPendingCommit !== null) &&
      (ca(e, 0), Ti(e, wt, sn, !1)),
      Oa(e, l),
      ((Tt & 2) === 0 || e !== qt) &&
        (e === qt &&
          ((Tt & 2) === 0 && (ms |= l), ee === 4 && Ti(e, wt, sn, !1)),
        Nn(e)));
  }
  function Pg(e, s, l) {
    if ((Tt & 6) !== 0) throw Error(a(327));
    var c = (!l && (s & 127) === 0 && (s & e.expiredLanes) === 0) || Na(e, s),
      f = c ? i2(e, s) : ad(e, s, !0),
      m = c;
    do {
      if (f === 0) {
        la && !c && Ti(e, s, 0, !1);
        break;
      } else {
        if (((l = e.current.alternate), m && !e2(l))) {
          ((f = ad(e, s, !1)), (m = !1));
          continue;
        }
        if (f === 2) {
          if (((m = s), e.errorRecoveryDisabledLanes & m)) var x = 0;
          else
            ((x = e.pendingLanes & -536870913),
              (x = x !== 0 ? x : x & 536870912 ? 536870912 : 0));
          if (x !== 0) {
            s = x;
            t: {
              var w = e;
              f = ul;
              var A = w.current.memoizedState.isDehydrated;
              if ((A && (ca(w, x).flags |= 256), (x = ad(w, x, !1)), x !== 2)) {
                if (Iu && !A) {
                  ((w.errorRecoveryDisabledLanes |= m), (ms |= m), (f = 4));
                  break t;
                }
                ((m = Fe),
                  (Fe = f),
                  m !== null &&
                    (Fe === null ? (Fe = m) : Fe.push.apply(Fe, m)));
              }
              f = x;
            }
            if (((m = !1), f !== 2)) continue;
          }
        }
        if (f === 1) {
          (ca(e, 0), Ti(e, s, 0, !0));
          break;
        }
        t: {
          switch (((c = e), (m = f), m)) {
            case 0:
            case 1:
              throw Error(a(345));
            case 4:
              if ((s & 4194048) !== s) break;
            case 6:
              Ti(c, s, sn, !ki);
              break t;
            case 2:
              Fe = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(a(329));
          }
          if ((s & 62914560) === s && ((f = $o + 300 - ue()), 10 < f)) {
            if ((Ti(c, s, sn, !ki), ro(c, 0, !0) !== 0)) break t;
            ((ni = s),
              (c.timeoutHandle = wp(
                Fg.bind(
                  null,
                  c,
                  l,
                  Fe,
                  Jo,
                  td,
                  s,
                  sn,
                  ms,
                  oa,
                  ki,
                  m,
                  "Throttled",
                  -0,
                  0,
                ),
                f,
              )));
            break t;
          }
          Fg(c, l, Fe, Jo, td, s, sn, ms, oa, ki, m, null, -0, 0);
        }
      }
      break;
    } while (!0);
    Nn(e);
  }
  function Fg(e, s, l, c, f, m, x, w, A, N, H, Y, O, L) {
    if (
      ((e.timeoutHandle = -1),
      (Y = s.subtreeFlags),
      Y & 8192 || (Y & 16785408) === 16785408)
    ) {
      ((Y = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: qn,
      }),
        Rg(s, m, Y));
      var tt =
        (m & 62914560) === m ? $o - ue() : (m & 4194048) === m ? qg - ue() : 0;
      if (((tt = U2(Y, tt)), tt !== null)) {
        ((ni = m),
          (e.cancelPendingCommit = tt(
            Jg.bind(null, e, s, m, l, c, f, x, w, A, H, Y, null, O, L),
          )),
          Ti(e, m, x, !N));
        return;
      }
    }
    Jg(e, s, m, l, c, f, x, w, A);
  }
  function e2(e) {
    for (var s = e; ;) {
      var l = s.tag;
      if (
        (l === 0 || l === 11 || l === 15) &&
        s.flags & 16384 &&
        ((l = s.updateQueue), l !== null && ((l = l.stores), l !== null))
      )
        for (var c = 0; c < l.length; c++) {
          var f = l[c],
            m = f.getSnapshot;
          f = f.value;
          try {
            if (!Ie(m(), f)) return !1;
          } catch {
            return !1;
          }
        }
      if (((l = s.child), s.subtreeFlags & 16384 && l !== null))
        ((l.return = s), (s = l));
      else {
        if (s === e) break;
        for (; s.sibling === null;) {
          if (s.return === null || s.return === e) return !0;
          s = s.return;
        }
        ((s.sibling.return = s.return), (s = s.sibling));
      }
    }
    return !0;
  }
  function Ti(e, s, l, c) {
    ((s &= ~Ju),
      (s &= ~ms),
      (e.suspendedLanes |= s),
      (e.pingedLanes &= ~s),
      c && (e.warmLanes |= s),
      (c = e.expirationTimes));
    for (var f = s; 0 < f;) {
      var m = 31 - $e(f),
        x = 1 << m;
      ((c[m] = -1), (f &= ~x));
    }
    l !== 0 && eh(e, l, s);
  }
  function tr() {
    return (Tt & 6) === 0 ? (fl(0), !1) : !0;
  }
  function sd() {
    if (bt !== null) {
      if (zt === 0) var e = bt.return;
      else ((e = bt), (Fn = as = null), vu(e), (Js = null), (Qa = 0), (e = bt));
      for (; e !== null;) (_g(e.alternate, e), (e = e.return));
      bt = null;
    }
  }
  function ca(e, s) {
    var l = e.timeoutHandle;
    (l !== -1 && ((e.timeoutHandle = -1), w2(l)),
      (l = e.cancelPendingCommit),
      l !== null && ((e.cancelPendingCommit = null), l()),
      (ni = 0),
      sd(),
      (qt = e),
      (bt = l = Xn(e.current, null)),
      (wt = s),
      (zt = 0),
      (nn = null),
      (ki = !1),
      (la = Na(e, s)),
      (Iu = !1),
      (oa = sn = Ju = ms = Ei = ee = 0),
      (Fe = ul = null),
      (td = !1),
      (s & 8) !== 0 && (s |= s & 32));
    var c = e.entangledLanes;
    if (c !== 0)
      for (e = e.entanglements, c &= s; 0 < c;) {
        var f = 31 - $e(c),
          m = 1 << f;
        ((s |= e[f]), (c &= ~m));
      }
    return ((ei = s), wo(), l);
  }
  function Gg(e, s) {
    ((ht = null),
      (D.H = nl),
      s === Is || s === jo
        ? ((s = rm()), (zt = 3))
        : s === ru
          ? ((s = rm()), (zt = 4))
          : (zt =
              s === Bu
                ? 8
                : s !== null &&
                    typeof s == "object" &&
                    typeof s.then == "function"
                  ? 6
                  : 1),
      (nn = s),
      bt === null && ((ee = 1), Xo(e, mn(s, e.current))));
  }
  function Zg() {
    var e = tn.current;
    return e === null
      ? !0
      : (wt & 4194048) === wt
        ? xn === null
        : (wt & 62914560) === wt || (wt & 536870912) !== 0
          ? e === xn
          : !1;
  }
  function Qg() {
    var e = D.H;
    return ((D.H = nl), e === null ? nl : e);
  }
  function Kg() {
    var e = D.A;
    return ((D.A = Jv), e);
  }
  function er() {
    ((ee = 4),
      ki || ((wt & 4194048) !== wt && tn.current !== null) || (la = !0),
      ((Ei & 134217727) === 0 && (ms & 134217727) === 0) ||
        qt === null ||
        Ti(qt, wt, sn, !1));
  }
  function ad(e, s, l) {
    var c = Tt;
    Tt |= 2;
    var f = Qg(),
      m = Kg();
    ((qt !== e || wt !== s) && ((Jo = null), ca(e, s)), (s = !1));
    var x = ee;
    t: do
      try {
        if (zt !== 0 && bt !== null) {
          var w = bt,
            A = nn;
          switch (zt) {
            case 8:
              (sd(), (x = 6));
              break t;
            case 3:
            case 2:
            case 9:
            case 6:
              tn.current === null && (s = !0);
              var N = zt;
              if (((zt = 0), (nn = null), ua(e, w, A, N), l && la)) {
                x = 0;
                break t;
              }
              break;
            default:
              ((N = zt), (zt = 0), (nn = null), ua(e, w, A, N));
          }
        }
        (n2(), (x = ee));
        break;
      } catch (H) {
        Gg(e, H);
      }
    while (!0);
    return (
      s && e.shellSuspendCounter++,
      (Fn = as = null),
      (Tt = c),
      (D.H = f),
      (D.A = m),
      bt === null && ((qt = null), (wt = 0), wo()),
      x
    );
  }
  function n2() {
    for (; bt !== null;) Wg(bt);
  }
  function i2(e, s) {
    var l = Tt;
    Tt |= 2;
    var c = Qg(),
      f = Kg();
    qt !== e || wt !== s
      ? ((Jo = null), (Io = ue() + 500), ca(e, s))
      : (la = Na(e, s));
    t: do
      try {
        if (zt !== 0 && bt !== null) {
          s = bt;
          var m = nn;
          e: switch (zt) {
            case 1:
              ((zt = 0), (nn = null), ua(e, s, m, 1));
              break;
            case 2:
            case 9:
              if (lm(m)) {
                ((zt = 0), (nn = null), $g(s));
                break;
              }
              ((s = function () {
                ((zt !== 2 && zt !== 9) || qt !== e || (zt = 7), Nn(e));
              }),
                m.then(s, s));
              break t;
            case 3:
              zt = 7;
              break t;
            case 4:
              zt = 5;
              break t;
            case 7:
              lm(m)
                ? ((zt = 0), (nn = null), $g(s))
                : ((zt = 0), (nn = null), ua(e, s, m, 7));
              break;
            case 5:
              var x = null;
              switch (bt.tag) {
                case 26:
                  x = bt.memoizedState;
                case 5:
                case 27:
                  var w = bt;
                  if (x ? Bp(x) : w.stateNode.complete) {
                    ((zt = 0), (nn = null));
                    var A = w.sibling;
                    if (A !== null) bt = A;
                    else {
                      var N = w.return;
                      N !== null ? ((bt = N), nr(N)) : (bt = null);
                    }
                    break e;
                  }
              }
              ((zt = 0), (nn = null), ua(e, s, m, 5));
              break;
            case 6:
              ((zt = 0), (nn = null), ua(e, s, m, 6));
              break;
            case 8:
              (sd(), (ee = 6));
              break t;
            default:
              throw Error(a(462));
          }
        }
        s2();
        break;
      } catch (H) {
        Gg(e, H);
      }
    while (!0);
    return (
      (Fn = as = null),
      (D.H = c),
      (D.A = f),
      (Tt = l),
      bt !== null ? 0 : ((qt = null), (wt = 0), wo(), ee)
    );
  }
  function s2() {
    for (; bt !== null && !Un();) Wg(bt);
  }
  function Wg(e) {
    var s = vg(e.alternate, e, ei);
    ((e.memoizedProps = e.pendingProps), s === null ? nr(e) : (bt = s));
  }
  function $g(e) {
    var s = e,
      l = s.alternate;
    switch (s.tag) {
      case 15:
      case 0:
        s = mg(l, s, s.pendingProps, s.type, void 0, wt);
        break;
      case 11:
        s = mg(l, s, s.pendingProps, s.type.render, s.ref, wt);
        break;
      case 5:
        vu(s);
      default:
        (_g(l, s), (s = bt = Kh(s, ei)), (s = vg(l, s, ei)));
    }
    ((e.memoizedProps = e.pendingProps), s === null ? nr(e) : (bt = s));
  }
  function ua(e, s, l, c) {
    ((Fn = as = null), vu(s), (Js = null), (Qa = 0));
    var f = s.return;
    try {
      if (Gv(e, f, s, l, wt)) {
        ((ee = 1), Xo(e, mn(l, e.current)), (bt = null));
        return;
      }
    } catch (m) {
      if (f !== null) throw ((bt = f), m);
      ((ee = 1), Xo(e, mn(l, e.current)), (bt = null));
      return;
    }
    s.flags & 32768
      ? (At || c === 1
          ? (e = !0)
          : la || (wt & 536870912) !== 0
            ? (e = !1)
            : ((ki = e = !0),
              (c === 2 || c === 9 || c === 3 || c === 6) &&
                ((c = tn.current),
                c !== null && c.tag === 13 && (c.flags |= 16384))),
        Ig(s, e))
      : nr(s);
  }
  function nr(e) {
    var s = e;
    do {
      if ((s.flags & 32768) !== 0) {
        Ig(s, ki);
        return;
      }
      e = s.return;
      var l = Kv(s.alternate, s, ei);
      if (l !== null) {
        bt = l;
        return;
      }
      if (((s = s.sibling), s !== null)) {
        bt = s;
        return;
      }
      bt = s = e;
    } while (s !== null);
    ee === 0 && (ee = 5);
  }
  function Ig(e, s) {
    do {
      var l = Wv(e.alternate, e);
      if (l !== null) {
        ((l.flags &= 32767), (bt = l));
        return;
      }
      if (
        ((l = e.return),
        l !== null &&
          ((l.flags |= 32768), (l.subtreeFlags = 0), (l.deletions = null)),
        !s && ((e = e.sibling), e !== null))
      ) {
        bt = e;
        return;
      }
      bt = e = l;
    } while (e !== null);
    ((ee = 6), (bt = null));
  }
  function Jg(e, s, l, c, f, m, x, w, A) {
    e.cancelPendingCommit = null;
    do ir();
    while (pe !== 0);
    if ((Tt & 6) !== 0) throw Error(a(327));
    if (s !== null) {
      if (s === e.current) throw Error(a(177));
      if (
        ((m = s.lanes | s.childLanes),
        (m |= Zc),
        Ry(e, l, m, x, w, A),
        e === qt && ((bt = qt = null), (wt = 0)),
        (ra = s),
        (ji = e),
        (ni = l),
        (ed = m),
        (nd = f),
        (Yg = c),
        (s.subtreeFlags & 10256) !== 0 || (s.flags & 10256) !== 0
          ? ((e.callbackNode = null),
            (e.callbackPriority = 0),
            r2(so, function () {
              return (sp(), null);
            }))
          : ((e.callbackNode = null), (e.callbackPriority = 0)),
        (c = (s.flags & 13878) !== 0),
        (s.subtreeFlags & 13878) !== 0 || c)
      ) {
        ((c = D.T), (D.T = null), (f = F.p), (F.p = 2), (x = Tt), (Tt |= 4));
        try {
          $v(e, s, l);
        } finally {
          ((Tt = x), (F.p = f), (D.T = c));
        }
      }
      ((pe = 1), tp(), ep(), np());
    }
  }
  function tp() {
    if (pe === 1) {
      pe = 0;
      var e = ji,
        s = ra,
        l = (s.flags & 13878) !== 0;
      if ((s.subtreeFlags & 13878) !== 0 || l) {
        ((l = D.T), (D.T = null));
        var c = F.p;
        F.p = 2;
        var f = Tt;
        Tt |= 4;
        try {
          Dg(s, e);
          var m = bd,
            x = Vh(e.containerInfo),
            w = m.focusedElem,
            A = m.selectionRange;
          if (
            x !== w &&
            w &&
            w.ownerDocument &&
            Uh(w.ownerDocument.documentElement, w)
          ) {
            if (A !== null && Yc(w)) {
              var N = A.start,
                H = A.end;
              if ((H === void 0 && (H = N), "selectionStart" in w))
                ((w.selectionStart = N),
                  (w.selectionEnd = Math.min(H, w.value.length)));
              else {
                var Y = w.ownerDocument || document,
                  O = (Y && Y.defaultView) || window;
                if (O.getSelection) {
                  var L = O.getSelection(),
                    tt = w.textContent.length,
                    ot = Math.min(A.start, tt),
                    Ut = A.end === void 0 ? ot : Math.min(A.end, tt);
                  !L.extend && ot > Ut && ((x = Ut), (Ut = ot), (ot = x));
                  var C = Hh(w, ot),
                    E = Hh(w, Ut);
                  if (
                    C &&
                    E &&
                    (L.rangeCount !== 1 ||
                      L.anchorNode !== C.node ||
                      L.anchorOffset !== C.offset ||
                      L.focusNode !== E.node ||
                      L.focusOffset !== E.offset)
                  ) {
                    var T = Y.createRange();
                    (T.setStart(C.node, C.offset),
                      L.removeAllRanges(),
                      ot > Ut
                        ? (L.addRange(T), L.extend(E.node, E.offset))
                        : (T.setEnd(E.node, E.offset), L.addRange(T)));
                  }
                }
              }
            }
            for (Y = [], L = w; (L = L.parentNode);)
              L.nodeType === 1 &&
                Y.push({ element: L, left: L.scrollLeft, top: L.scrollTop });
            for (
              typeof w.focus == "function" && w.focus(), w = 0;
              w < Y.length;
              w++
            ) {
              var V = Y[w];
              ((V.element.scrollLeft = V.left), (V.element.scrollTop = V.top));
            }
          }
          ((gr = !!pd), (bd = pd = null));
        } finally {
          ((Tt = f), (F.p = c), (D.T = l));
        }
      }
      ((e.current = s), (pe = 2));
    }
  }
  function ep() {
    if (pe === 2) {
      pe = 0;
      var e = ji,
        s = ra,
        l = (s.flags & 8772) !== 0;
      if ((s.subtreeFlags & 8772) !== 0 || l) {
        ((l = D.T), (D.T = null));
        var c = F.p;
        F.p = 2;
        var f = Tt;
        Tt |= 4;
        try {
          jg(e, s.alternate, s);
        } finally {
          ((Tt = f), (F.p = c), (D.T = l));
        }
      }
      pe = 3;
    }
  }
  function np() {
    if (pe === 4 || pe === 3) {
      ((pe = 0), Wi());
      var e = ji,
        s = ra,
        l = ni,
        c = Yg;
      (s.subtreeFlags & 10256) !== 0 || (s.flags & 10256) !== 0
        ? (pe = 5)
        : ((pe = 0), (ra = ji = null), ip(e, e.pendingLanes));
      var f = e.pendingLanes;
      if (
        (f === 0 && (Ci = null),
        Sc(l),
        (s = s.stateNode),
        We && typeof We.onCommitFiberRoot == "function")
      )
        try {
          We.onCommitFiberRoot(Ta, s, void 0, (s.current.flags & 128) === 128);
        } catch {}
      if (c !== null) {
        ((s = D.T), (f = F.p), (F.p = 2), (D.T = null));
        try {
          for (var m = e.onRecoverableError, x = 0; x < c.length; x++) {
            var w = c[x];
            m(w.value, { componentStack: w.stack });
          }
        } finally {
          ((D.T = s), (F.p = f));
        }
      }
      ((ni & 3) !== 0 && ir(),
        Nn(e),
        (f = e.pendingLanes),
        (l & 261930) !== 0 && (f & 42) !== 0
          ? e === id
            ? dl++
            : ((dl = 0), (id = e))
          : (dl = 0),
        fl(0));
    }
  }
  function ip(e, s) {
    (e.pooledCacheLanes &= s) === 0 &&
      ((s = e.pooledCache), s != null && ((e.pooledCache = null), Ga(s)));
  }
  function ir() {
    return (tp(), ep(), np(), sp());
  }
  function sp() {
    if (pe !== 5) return !1;
    var e = ji,
      s = ed;
    ed = 0;
    var l = Sc(ni),
      c = D.T,
      f = F.p;
    try {
      ((F.p = 32 > l ? 32 : l), (D.T = null), (l = nd), (nd = null));
      var m = ji,
        x = ni;
      if (((pe = 0), (ra = ji = null), (ni = 0), (Tt & 6) !== 0))
        throw Error(a(331));
      var w = Tt;
      if (
        ((Tt |= 4),
        Ug(m.current),
        Bg(m, m.current, x, l),
        (Tt = w),
        fl(0, !1),
        We && typeof We.onPostCommitFiberRoot == "function")
      )
        try {
          We.onPostCommitFiberRoot(Ta, m);
        } catch {}
      return !0;
    } finally {
      ((F.p = f), (D.T = c), ip(e, s));
    }
  }
  function ap(e, s, l) {
    ((s = mn(l, s)),
      (s = Lu(e.stateNode, s, 2)),
      (e = _i(e, s, 2)),
      e !== null && (Oa(e, 2), Nn(e)));
  }
  function Dt(e, s, l) {
    if (e.tag === 3) ap(e, e, l);
    else
      for (; s !== null;) {
        if (s.tag === 3) {
          ap(s, e, l);
          break;
        } else if (s.tag === 1) {
          var c = s.stateNode;
          if (
            typeof s.type.getDerivedStateFromError == "function" ||
            (typeof c.componentDidCatch == "function" &&
              (Ci === null || !Ci.has(c)))
          ) {
            ((e = mn(l, e)),
              (l = lg(2)),
              (c = _i(s, l, 2)),
              c !== null && (og(l, c, s, e), Oa(c, 2), Nn(c)));
            break;
          }
        }
        s = s.return;
      }
  }
  function ld(e, s, l) {
    var c = e.pingCache;
    if (c === null) {
      c = e.pingCache = new t2();
      var f = new Set();
      c.set(s, f);
    } else ((f = c.get(s)), f === void 0 && ((f = new Set()), c.set(s, f)));
    f.has(l) ||
      ((Iu = !0), f.add(l), (e = a2.bind(null, e, s, l)), s.then(e, e));
  }
  function a2(e, s, l) {
    var c = e.pingCache;
    (c !== null && c.delete(s),
      (e.pingedLanes |= e.suspendedLanes & l),
      (e.warmLanes &= ~l),
      qt === e &&
        (wt & l) === l &&
        (ee === 4 || (ee === 3 && (wt & 62914560) === wt && 300 > ue() - $o)
          ? (Tt & 2) === 0 && ca(e, 0)
          : (Ju |= l),
        oa === wt && (oa = 0)),
      Nn(e));
  }
  function lp(e, s) {
    (s === 0 && (s = th()), (e = ns(e, s)), e !== null && (Oa(e, s), Nn(e)));
  }
  function l2(e) {
    var s = e.memoizedState,
      l = 0;
    (s !== null && (l = s.retryLane), lp(e, l));
  }
  function o2(e, s) {
    var l = 0;
    switch (e.tag) {
      case 31:
      case 13:
        var c = e.stateNode,
          f = e.memoizedState;
        f !== null && (l = f.retryLane);
        break;
      case 19:
        c = e.stateNode;
        break;
      case 22:
        c = e.stateNode._retryCache;
        break;
      default:
        throw Error(a(314));
    }
    (c !== null && c.delete(s), lp(e, l));
  }
  function r2(e, s) {
    return se(e, s);
  }
  var sr = null,
    da = null,
    od = !1,
    ar = !1,
    rd = !1,
    Ni = 0;
  function Nn(e) {
    (e !== da &&
      e.next === null &&
      (da === null ? (sr = da = e) : (da = da.next = e)),
      (ar = !0),
      od || ((od = !0), u2()));
  }
  function fl(e, s) {
    if (!rd && ar) {
      rd = !0;
      do
        for (var l = !1, c = sr; c !== null;) {
          if (e !== 0) {
            var f = c.pendingLanes;
            if (f === 0) var m = 0;
            else {
              var x = c.suspendedLanes,
                w = c.pingedLanes;
              ((m = (1 << (31 - $e(42 | e) + 1)) - 1),
                (m &= f & ~(x & ~w)),
                (m = m & 201326741 ? (m & 201326741) | 1 : m ? m | 2 : 0));
            }
            m !== 0 && ((l = !0), up(c, m));
          } else
            ((m = wt),
              (m = ro(
                c,
                c === qt ? m : 0,
                c.cancelPendingCommit !== null || c.timeoutHandle !== -1,
              )),
              (m & 3) === 0 || Na(c, m) || ((l = !0), up(c, m)));
          c = c.next;
        }
      while (l);
      rd = !1;
    }
  }
  function c2() {
    op();
  }
  function op() {
    ar = od = !1;
    var e = 0;
    Ni !== 0 && v2() && (e = Ni);
    for (var s = ue(), l = null, c = sr; c !== null;) {
      var f = c.next,
        m = rp(c, s);
      (m === 0
        ? ((c.next = null),
          l === null ? (sr = f) : (l.next = f),
          f === null && (da = l))
        : ((l = c), (e !== 0 || (m & 3) !== 0) && (ar = !0)),
        (c = f));
    }
    ((pe !== 0 && pe !== 5) || fl(e), Ni !== 0 && (Ni = 0));
  }
  function rp(e, s) {
    for (
      var l = e.suspendedLanes,
        c = e.pingedLanes,
        f = e.expirationTimes,
        m = e.pendingLanes & -62914561;
      0 < m;
    ) {
      var x = 31 - $e(m),
        w = 1 << x,
        A = f[x];
      (A === -1
        ? ((w & l) === 0 || (w & c) !== 0) && (f[x] = By(w, s))
        : A <= s && (e.expiredLanes |= w),
        (m &= ~w));
    }
    if (
      ((s = qt),
      (l = wt),
      (l = ro(
        e,
        e === s ? l : 0,
        e.cancelPendingCommit !== null || e.timeoutHandle !== -1,
      )),
      (c = e.callbackNode),
      l === 0 ||
        (e === s && (zt === 2 || zt === 9)) ||
        e.cancelPendingCommit !== null)
    )
      return (
        c !== null && c !== null && He(c),
        (e.callbackNode = null),
        (e.callbackPriority = 0)
      );
    if ((l & 3) === 0 || Na(e, l)) {
      if (((s = l & -l), s === e.callbackPriority)) return s;
      switch ((c !== null && He(c), Sc(l))) {
        case 2:
        case 8:
          l = io;
          break;
        case 32:
          l = so;
          break;
        case 268435456:
          l = Jf;
          break;
        default:
          l = so;
      }
      return (
        (c = cp.bind(null, e)),
        (l = se(l, c)),
        (e.callbackPriority = s),
        (e.callbackNode = l),
        s
      );
    }
    return (
      c !== null && c !== null && He(c),
      (e.callbackPriority = 2),
      (e.callbackNode = null),
      2
    );
  }
  function cp(e, s) {
    if (pe !== 0 && pe !== 5)
      return ((e.callbackNode = null), (e.callbackPriority = 0), null);
    var l = e.callbackNode;
    if (ir() && e.callbackNode !== l) return null;
    var c = wt;
    return (
      (c = ro(
        e,
        e === qt ? c : 0,
        e.cancelPendingCommit !== null || e.timeoutHandle !== -1,
      )),
      c === 0
        ? null
        : (Pg(e, c, s),
          rp(e, ue()),
          e.callbackNode != null && e.callbackNode === l
            ? cp.bind(null, e)
            : null)
    );
  }
  function up(e, s) {
    if (ir()) return null;
    Pg(e, s, !0);
  }
  function u2() {
    _2(function () {
      (Tt & 6) !== 0 ? se(Ue, c2) : op();
    });
  }
  function cd() {
    if (Ni === 0) {
      var e = Ws;
      (e === 0 && ((e = ao), (ao <<= 1), (ao & 261888) === 0 && (ao = 256)),
        (Ni = e));
    }
    return Ni;
  }
  function dp(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean"
      ? null
      : typeof e == "function"
        ? e
        : ho("" + e);
  }
  function fp(e, s) {
    var l = s.ownerDocument.createElement("input");
    return (
      (l.name = s.name),
      (l.value = s.value),
      e.id && l.setAttribute("form", e.id),
      s.parentNode.insertBefore(l, s),
      (e = new FormData(e)),
      l.parentNode.removeChild(l),
      e
    );
  }
  function d2(e, s, l, c, f) {
    if (s === "submit" && l && l.stateNode === f) {
      var m = dp((f[Ve] || null).action),
        x = c.submitter;
      x &&
        ((s = (s = x[Ve] || null)
          ? dp(s.formAction)
          : x.getAttribute("formAction")),
        s !== null && ((m = s), (x = null)));
      var w = new bo("action", "action", null, c, f);
      e.push({
        event: w,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (c.defaultPrevented) {
                if (Ni !== 0) {
                  var A = x ? fp(f, x) : new FormData(f);
                  ju(
                    l,
                    { pending: !0, data: A, method: f.method, action: m },
                    null,
                    A,
                  );
                }
              } else
                typeof m == "function" &&
                  (w.preventDefault(),
                  (A = x ? fp(f, x) : new FormData(f)),
                  ju(
                    l,
                    { pending: !0, data: A, method: f.method, action: m },
                    m,
                    A,
                  ));
            },
            currentTarget: f,
          },
        ],
      });
    }
  }
  for (var ud = 0; ud < Gc.length; ud++) {
    var dd = Gc[ud],
      f2 = dd.toLowerCase(),
      h2 = dd[0].toUpperCase() + dd.slice(1);
    Sn(f2, "on" + h2);
  }
  (Sn(Xh, "onAnimationEnd"),
    Sn(Ph, "onAnimationIteration"),
    Sn(Fh, "onAnimationStart"),
    Sn("dblclick", "onDoubleClick"),
    Sn("focusin", "onFocus"),
    Sn("focusout", "onBlur"),
    Sn(jv, "onTransitionRun"),
    Sn(Tv, "onTransitionStart"),
    Sn(Nv, "onTransitionCancel"),
    Sn(Gh, "onTransitionEnd"),
    Bs("onMouseEnter", ["mouseout", "mouseover"]),
    Bs("onMouseLeave", ["mouseout", "mouseover"]),
    Bs("onPointerEnter", ["pointerout", "pointerover"]),
    Bs("onPointerLeave", ["pointerout", "pointerover"]),
    Ii(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " ",
      ),
    ),
    Ii(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " ",
      ),
    ),
    Ii("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    Ii(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" "),
    ),
    Ii(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" "),
    ),
    Ii(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
    ));
  var hl =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " ",
      ),
    m2 = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle"
        .split(" ")
        .concat(hl),
    );
  function hp(e, s) {
    s = (s & 4) !== 0;
    for (var l = 0; l < e.length; l++) {
      var c = e[l],
        f = c.event;
      c = c.listeners;
      t: {
        var m = void 0;
        if (s)
          for (var x = c.length - 1; 0 <= x; x--) {
            var w = c[x],
              A = w.instance,
              N = w.currentTarget;
            if (((w = w.listener), A !== m && f.isPropagationStopped()))
              break t;
            ((m = w), (f.currentTarget = N));
            try {
              m(f);
            } catch (H) {
              vo(H);
            }
            ((f.currentTarget = null), (m = A));
          }
        else
          for (x = 0; x < c.length; x++) {
            if (
              ((w = c[x]),
              (A = w.instance),
              (N = w.currentTarget),
              (w = w.listener),
              A !== m && f.isPropagationStopped())
            )
              break t;
            ((m = w), (f.currentTarget = N));
            try {
              m(f);
            } catch (H) {
              vo(H);
            }
            ((f.currentTarget = null), (m = A));
          }
      }
    }
  }
  function xt(e, s) {
    var l = s[Mc];
    l === void 0 && (l = s[Mc] = new Set());
    var c = e + "__bubble";
    l.has(c) || (mp(s, e, 2, !1), l.add(c));
  }
  function fd(e, s, l) {
    var c = 0;
    (s && (c |= 4), mp(l, e, c, s));
  }
  var lr = "_reactListening" + Math.random().toString(36).slice(2);
  function hd(e) {
    if (!e[lr]) {
      ((e[lr] = !0),
        oh.forEach(function (l) {
          l !== "selectionchange" && (m2.has(l) || fd(l, !1, e), fd(l, !0, e));
        }));
      var s = e.nodeType === 9 ? e : e.ownerDocument;
      s === null || s[lr] || ((s[lr] = !0), fd("selectionchange", !1, s));
    }
  }
  function mp(e, s, l, c) {
    switch (Xp(s)) {
      case 2:
        var f = Y2;
        break;
      case 8:
        f = X2;
        break;
      default:
        f = Cd;
    }
    ((l = f.bind(null, s, l, e)),
      (f = void 0),
      !zc ||
        (s !== "touchstart" && s !== "touchmove" && s !== "wheel") ||
        (f = !0),
      c
        ? f !== void 0
          ? e.addEventListener(s, l, { capture: !0, passive: f })
          : e.addEventListener(s, l, !0)
        : f !== void 0
          ? e.addEventListener(s, l, { passive: f })
          : e.addEventListener(s, l, !1));
  }
  function md(e, s, l, c, f) {
    var m = c;
    if ((s & 1) === 0 && (s & 2) === 0 && c !== null)
      t: for (;;) {
        if (c === null) return;
        var x = c.tag;
        if (x === 3 || x === 4) {
          var w = c.stateNode.containerInfo;
          if (w === f) break;
          if (x === 4)
            for (x = c.return; x !== null;) {
              var A = x.tag;
              if ((A === 3 || A === 4) && x.stateNode.containerInfo === f)
                return;
              x = x.return;
            }
          for (; w !== null;) {
            if (((x = zs(w)), x === null)) return;
            if (((A = x.tag), A === 5 || A === 6 || A === 26 || A === 27)) {
              c = m = x;
              continue t;
            }
            w = w.parentNode;
          }
        }
        c = c.return;
      }
    yh(function () {
      var N = m,
        H = Nc(l),
        Y = [];
      t: {
        var O = Zh.get(e);
        if (O !== void 0) {
          var L = bo,
            tt = e;
          switch (e) {
            case "keypress":
              if (go(l) === 0) break t;
            case "keydown":
            case "keyup":
              L = ov;
              break;
            case "focusin":
              ((tt = "focus"), (L = Rc));
              break;
            case "focusout":
              ((tt = "blur"), (L = Rc));
              break;
            case "beforeblur":
            case "afterblur":
              L = Rc;
              break;
            case "click":
              if (l.button === 2) break t;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              L = _h;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              L = Ky;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              L = uv;
              break;
            case Xh:
            case Ph:
            case Fh:
              L = Iy;
              break;
            case Gh:
              L = fv;
              break;
            case "scroll":
            case "scrollend":
              L = Zy;
              break;
            case "wheel":
              L = mv;
              break;
            case "copy":
            case "cut":
            case "paste":
              L = tv;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              L = Mh;
              break;
            case "toggle":
            case "beforetoggle":
              L = pv;
          }
          var ot = (s & 4) !== 0,
            Ut = !ot && (e === "scroll" || e === "scrollend"),
            C = ot ? (O !== null ? O + "Capture" : null) : O;
          ot = [];
          for (var E = N, T; E !== null;) {
            var V = E;
            if (
              ((T = V.stateNode),
              (V = V.tag),
              (V !== 5 && V !== 26 && V !== 27) ||
                T === null ||
                C === null ||
                ((V = La(E, C)), V != null && ot.push(ml(E, V, T))),
              Ut)
            )
              break;
            E = E.return;
          }
          0 < ot.length &&
            ((O = new L(O, tt, null, l, H)),
            Y.push({ event: O, listeners: ot }));
        }
      }
      if ((s & 7) === 0) {
        t: {
          if (
            ((O = e === "mouseover" || e === "pointerover"),
            (L = e === "mouseout" || e === "pointerout"),
            O &&
              l !== Tc &&
              (tt = l.relatedTarget || l.fromElement) &&
              (zs(tt) || tt[Os]))
          )
            break t;
          if (
            (L || O) &&
            ((O =
              H.window === H
                ? H
                : (O = H.ownerDocument)
                  ? O.defaultView || O.parentWindow
                  : window),
            L
              ? ((tt = l.relatedTarget || l.toElement),
                (L = N),
                (tt = tt ? zs(tt) : null),
                tt !== null &&
                  ((Ut = r(tt)),
                  (ot = tt.tag),
                  tt !== Ut || (ot !== 5 && ot !== 27 && ot !== 6)) &&
                  (tt = null))
              : ((L = null), (tt = N)),
            L !== tt)
          ) {
            if (
              ((ot = _h),
              (V = "onMouseLeave"),
              (C = "onMouseEnter"),
              (E = "mouse"),
              (e === "pointerout" || e === "pointerover") &&
                ((ot = Mh),
                (V = "onPointerLeave"),
                (C = "onPointerEnter"),
                (E = "pointer")),
              (Ut = L == null ? O : Da(L)),
              (T = tt == null ? O : Da(tt)),
              (O = new ot(V, E + "leave", L, l, H)),
              (O.target = Ut),
              (O.relatedTarget = T),
              (V = null),
              zs(H) === N &&
                ((ot = new ot(C, E + "enter", tt, l, H)),
                (ot.target = T),
                (ot.relatedTarget = Ut),
                (V = ot)),
              (Ut = V),
              L && tt)
            )
              e: {
                for (ot = g2, C = L, E = tt, T = 0, V = C; V; V = ot(V)) T++;
                V = 0;
                for (var st = E; st; st = ot(st)) V++;
                for (; 0 < T - V;) ((C = ot(C)), T--);
                for (; 0 < V - T;) ((E = ot(E)), V--);
                for (; T--;) {
                  if (C === E || (E !== null && C === E.alternate)) {
                    ot = C;
                    break e;
                  }
                  ((C = ot(C)), (E = ot(E)));
                }
                ot = null;
              }
            else ot = null;
            (L !== null && gp(Y, O, L, ot, !1),
              tt !== null && Ut !== null && gp(Y, Ut, tt, ot, !0));
          }
        }
        t: {
          if (
            ((O = N ? Da(N) : window),
            (L = O.nodeName && O.nodeName.toLowerCase()),
            L === "select" || (L === "input" && O.type === "file"))
          )
            var Et = Oh;
          else if (Th(O))
            if (zh) Et = kv;
            else {
              Et = Mv;
              var et = Sv;
            }
          else
            ((L = O.nodeName),
              !L ||
              L.toLowerCase() !== "input" ||
              (O.type !== "checkbox" && O.type !== "radio")
                ? N && jc(N.elementType) && (Et = Oh)
                : (Et = Av));
          if (Et && (Et = Et(e, N))) {
            Nh(Y, Et, l, H);
            break t;
          }
          (et && et(e, O, N),
            e === "focusout" &&
              N &&
              O.type === "number" &&
              N.memoizedProps.value != null &&
              Cc(O, "number", O.value));
        }
        switch (((et = N ? Da(N) : window), e)) {
          case "focusin":
            (Th(et) || et.contentEditable === "true") &&
              ((Ys = et), (Xc = N), (Xa = null));
            break;
          case "focusout":
            Xa = Xc = Ys = null;
            break;
          case "mousedown":
            Pc = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            ((Pc = !1), qh(Y, l, H));
            break;
          case "selectionchange":
            if (Cv) break;
          case "keydown":
          case "keyup":
            qh(Y, l, H);
        }
        var gt;
        if (Uc)
          t: {
            switch (e) {
              case "compositionstart":
                var _t = "onCompositionStart";
                break t;
              case "compositionend":
                _t = "onCompositionEnd";
                break t;
              case "compositionupdate":
                _t = "onCompositionUpdate";
                break t;
            }
            _t = void 0;
          }
        else
          qs
            ? Ch(e, l) && (_t = "onCompositionEnd")
            : e === "keydown" &&
              l.keyCode === 229 &&
              (_t = "onCompositionStart");
        (_t &&
          (Ah &&
            l.locale !== "ko" &&
            (qs || _t !== "onCompositionStart"
              ? _t === "onCompositionEnd" && qs && (gt = vh())
              : ((gi = H),
                (Dc = "value" in gi ? gi.value : gi.textContent),
                (qs = !0))),
          (et = or(N, _t)),
          0 < et.length &&
            ((_t = new Sh(_t, e, null, l, H)),
            Y.push({ event: _t, listeners: et }),
            gt
              ? (_t.data = gt)
              : ((gt = jh(l)), gt !== null && (_t.data = gt)))),
          (gt = xv ? yv(e, l) : vv(e, l)) &&
            ((_t = or(N, "onBeforeInput")),
            0 < _t.length &&
              ((et = new Sh("onBeforeInput", "beforeinput", null, l, H)),
              Y.push({ event: et, listeners: _t }),
              (et.data = gt))),
          d2(Y, e, N, l, H));
      }
      hp(Y, s);
    });
  }
  function ml(e, s, l) {
    return { instance: e, listener: s, currentTarget: l };
  }
  function or(e, s) {
    for (var l = s + "Capture", c = []; e !== null;) {
      var f = e,
        m = f.stateNode;
      if (
        ((f = f.tag),
        (f !== 5 && f !== 26 && f !== 27) ||
          m === null ||
          ((f = La(e, l)),
          f != null && c.unshift(ml(e, f, m)),
          (f = La(e, s)),
          f != null && c.push(ml(e, f, m))),
        e.tag === 3)
      )
        return c;
      e = e.return;
    }
    return [];
  }
  function g2(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function gp(e, s, l, c, f) {
    for (var m = s._reactName, x = []; l !== null && l !== c;) {
      var w = l,
        A = w.alternate,
        N = w.stateNode;
      if (((w = w.tag), A !== null && A === c)) break;
      ((w !== 5 && w !== 26 && w !== 27) ||
        N === null ||
        ((A = N),
        f
          ? ((N = La(l, m)), N != null && x.unshift(ml(l, N, A)))
          : f || ((N = La(l, m)), N != null && x.push(ml(l, N, A)))),
        (l = l.return));
    }
    x.length !== 0 && e.push({ event: s, listeners: x });
  }
  var p2 = /\r\n?/g,
    b2 = /\u0000|\uFFFD/g;
  function pp(e) {
    return (typeof e == "string" ? e : "" + e)
      .replace(
        p2,
        `
`,
      )
      .replace(b2, "");
  }
  function bp(e, s) {
    return ((s = pp(s)), pp(e) === s);
  }
  function Ht(e, s, l, c, f, m) {
    switch (l) {
      case "children":
        typeof c == "string"
          ? s === "body" || (s === "textarea" && c === "") || Hs(e, c)
          : (typeof c == "number" || typeof c == "bigint") &&
            s !== "body" &&
            Hs(e, "" + c);
        break;
      case "className":
        uo(e, "class", c);
        break;
      case "tabIndex":
        uo(e, "tabindex", c);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        uo(e, l, c);
        break;
      case "style":
        bh(e, c, m);
        break;
      case "data":
        if (s !== "object") {
          uo(e, "data", c);
          break;
        }
      case "src":
      case "href":
        if (c === "" && (s !== "a" || l !== "href")) {
          e.removeAttribute(l);
          break;
        }
        if (
          c == null ||
          typeof c == "function" ||
          typeof c == "symbol" ||
          typeof c == "boolean"
        ) {
          e.removeAttribute(l);
          break;
        }
        ((c = ho("" + c)), e.setAttribute(l, c));
        break;
      case "action":
      case "formAction":
        if (typeof c == "function") {
          e.setAttribute(
            l,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')",
          );
          break;
        } else
          typeof m == "function" &&
            (l === "formAction"
              ? (s !== "input" && Ht(e, s, "name", f.name, f, null),
                Ht(e, s, "formEncType", f.formEncType, f, null),
                Ht(e, s, "formMethod", f.formMethod, f, null),
                Ht(e, s, "formTarget", f.formTarget, f, null))
              : (Ht(e, s, "encType", f.encType, f, null),
                Ht(e, s, "method", f.method, f, null),
                Ht(e, s, "target", f.target, f, null)));
        if (c == null || typeof c == "symbol" || typeof c == "boolean") {
          e.removeAttribute(l);
          break;
        }
        ((c = ho("" + c)), e.setAttribute(l, c));
        break;
      case "onClick":
        c != null && (e.onclick = qn);
        break;
      case "onScroll":
        c != null && xt("scroll", e);
        break;
      case "onScrollEnd":
        c != null && xt("scrollend", e);
        break;
      case "dangerouslySetInnerHTML":
        if (c != null) {
          if (typeof c != "object" || !("__html" in c)) throw Error(a(61));
          if (((l = c.__html), l != null)) {
            if (f.children != null) throw Error(a(60));
            e.innerHTML = l;
          }
        }
        break;
      case "multiple":
        e.multiple = c && typeof c != "function" && typeof c != "symbol";
        break;
      case "muted":
        e.muted = c && typeof c != "function" && typeof c != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (
          c == null ||
          typeof c == "function" ||
          typeof c == "boolean" ||
          typeof c == "symbol"
        ) {
          e.removeAttribute("xlink:href");
          break;
        }
        ((l = ho("" + c)),
          e.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", l));
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        c != null && typeof c != "function" && typeof c != "symbol"
          ? e.setAttribute(l, "" + c)
          : e.removeAttribute(l);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        c && typeof c != "function" && typeof c != "symbol"
          ? e.setAttribute(l, "")
          : e.removeAttribute(l);
        break;
      case "capture":
      case "download":
        c === !0
          ? e.setAttribute(l, "")
          : c !== !1 &&
              c != null &&
              typeof c != "function" &&
              typeof c != "symbol"
            ? e.setAttribute(l, c)
            : e.removeAttribute(l);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        c != null &&
        typeof c != "function" &&
        typeof c != "symbol" &&
        !isNaN(c) &&
        1 <= c
          ? e.setAttribute(l, c)
          : e.removeAttribute(l);
        break;
      case "rowSpan":
      case "start":
        c == null || typeof c == "function" || typeof c == "symbol" || isNaN(c)
          ? e.removeAttribute(l)
          : e.setAttribute(l, c);
        break;
      case "popover":
        (xt("beforetoggle", e), xt("toggle", e), co(e, "popover", c));
        break;
      case "xlinkActuate":
        Vn(e, "http://www.w3.org/1999/xlink", "xlink:actuate", c);
        break;
      case "xlinkArcrole":
        Vn(e, "http://www.w3.org/1999/xlink", "xlink:arcrole", c);
        break;
      case "xlinkRole":
        Vn(e, "http://www.w3.org/1999/xlink", "xlink:role", c);
        break;
      case "xlinkShow":
        Vn(e, "http://www.w3.org/1999/xlink", "xlink:show", c);
        break;
      case "xlinkTitle":
        Vn(e, "http://www.w3.org/1999/xlink", "xlink:title", c);
        break;
      case "xlinkType":
        Vn(e, "http://www.w3.org/1999/xlink", "xlink:type", c);
        break;
      case "xmlBase":
        Vn(e, "http://www.w3.org/XML/1998/namespace", "xml:base", c);
        break;
      case "xmlLang":
        Vn(e, "http://www.w3.org/XML/1998/namespace", "xml:lang", c);
        break;
      case "xmlSpace":
        Vn(e, "http://www.w3.org/XML/1998/namespace", "xml:space", c);
        break;
      case "is":
        co(e, "is", c);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < l.length) ||
          (l[0] !== "o" && l[0] !== "O") ||
          (l[1] !== "n" && l[1] !== "N")) &&
          ((l = Fy.get(l) || l), co(e, l, c));
    }
  }
  function gd(e, s, l, c, f, m) {
    switch (l) {
      case "style":
        bh(e, c, m);
        break;
      case "dangerouslySetInnerHTML":
        if (c != null) {
          if (typeof c != "object" || !("__html" in c)) throw Error(a(61));
          if (((l = c.__html), l != null)) {
            if (f.children != null) throw Error(a(60));
            e.innerHTML = l;
          }
        }
        break;
      case "children":
        typeof c == "string"
          ? Hs(e, c)
          : (typeof c == "number" || typeof c == "bigint") && Hs(e, "" + c);
        break;
      case "onScroll":
        c != null && xt("scroll", e);
        break;
      case "onScrollEnd":
        c != null && xt("scrollend", e);
        break;
      case "onClick":
        c != null && (e.onclick = qn);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!rh.hasOwnProperty(l))
          t: {
            if (
              l[0] === "o" &&
              l[1] === "n" &&
              ((f = l.endsWith("Capture")),
              (s = l.slice(2, f ? l.length - 7 : void 0)),
              (m = e[Ve] || null),
              (m = m != null ? m[l] : null),
              typeof m == "function" && e.removeEventListener(s, m, f),
              typeof c == "function")
            ) {
              (typeof m != "function" &&
                m !== null &&
                (l in e
                  ? (e[l] = null)
                  : e.hasAttribute(l) && e.removeAttribute(l)),
                e.addEventListener(s, c, f));
              break t;
            }
            l in e
              ? (e[l] = c)
              : c === !0
                ? e.setAttribute(l, "")
                : co(e, l, c);
          }
    }
  }
  function Ee(e, s, l) {
    switch (s) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        (xt("error", e), xt("load", e));
        var c = !1,
          f = !1,
          m;
        for (m in l)
          if (l.hasOwnProperty(m)) {
            var x = l[m];
            if (x != null)
              switch (m) {
                case "src":
                  c = !0;
                  break;
                case "srcSet":
                  f = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(a(137, s));
                default:
                  Ht(e, s, m, x, l, null);
              }
          }
        (f && Ht(e, s, "srcSet", l.srcSet, l, null),
          c && Ht(e, s, "src", l.src, l, null));
        return;
      case "input":
        xt("invalid", e);
        var w = (m = x = f = null),
          A = null,
          N = null;
        for (c in l)
          if (l.hasOwnProperty(c)) {
            var H = l[c];
            if (H != null)
              switch (c) {
                case "name":
                  f = H;
                  break;
                case "type":
                  x = H;
                  break;
                case "checked":
                  A = H;
                  break;
                case "defaultChecked":
                  N = H;
                  break;
                case "value":
                  m = H;
                  break;
                case "defaultValue":
                  w = H;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (H != null) throw Error(a(137, s));
                  break;
                default:
                  Ht(e, s, c, H, l, null);
              }
          }
        hh(e, m, w, A, N, x, f, !1);
        return;
      case "select":
        (xt("invalid", e), (c = x = m = null));
        for (f in l)
          if (l.hasOwnProperty(f) && ((w = l[f]), w != null))
            switch (f) {
              case "value":
                m = w;
                break;
              case "defaultValue":
                x = w;
                break;
              case "multiple":
                c = w;
              default:
                Ht(e, s, f, w, l, null);
            }
        ((s = m),
          (l = x),
          (e.multiple = !!c),
          s != null ? Rs(e, !!c, s, !1) : l != null && Rs(e, !!c, l, !0));
        return;
      case "textarea":
        (xt("invalid", e), (m = f = c = null));
        for (x in l)
          if (l.hasOwnProperty(x) && ((w = l[x]), w != null))
            switch (x) {
              case "value":
                c = w;
                break;
              case "defaultValue":
                f = w;
                break;
              case "children":
                m = w;
                break;
              case "dangerouslySetInnerHTML":
                if (w != null) throw Error(a(91));
                break;
              default:
                Ht(e, s, x, w, l, null);
            }
        gh(e, c, f, m);
        return;
      case "option":
        for (A in l)
          if (l.hasOwnProperty(A) && ((c = l[A]), c != null))
            switch (A) {
              case "selected":
                e.selected =
                  c && typeof c != "function" && typeof c != "symbol";
                break;
              default:
                Ht(e, s, A, c, l, null);
            }
        return;
      case "dialog":
        (xt("beforetoggle", e),
          xt("toggle", e),
          xt("cancel", e),
          xt("close", e));
        break;
      case "iframe":
      case "object":
        xt("load", e);
        break;
      case "video":
      case "audio":
        for (c = 0; c < hl.length; c++) xt(hl[c], e);
        break;
      case "image":
        (xt("error", e), xt("load", e));
        break;
      case "details":
        xt("toggle", e);
        break;
      case "embed":
      case "source":
      case "link":
        (xt("error", e), xt("load", e));
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (N in l)
          if (l.hasOwnProperty(N) && ((c = l[N]), c != null))
            switch (N) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(a(137, s));
              default:
                Ht(e, s, N, c, l, null);
            }
        return;
      default:
        if (jc(s)) {
          for (H in l)
            l.hasOwnProperty(H) &&
              ((c = l[H]), c !== void 0 && gd(e, s, H, c, l, void 0));
          return;
        }
    }
    for (w in l)
      l.hasOwnProperty(w) && ((c = l[w]), c != null && Ht(e, s, w, c, l, null));
  }
  function x2(e, s, l, c) {
    switch (s) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var f = null,
          m = null,
          x = null,
          w = null,
          A = null,
          N = null,
          H = null;
        for (L in l) {
          var Y = l[L];
          if (l.hasOwnProperty(L) && Y != null)
            switch (L) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                A = Y;
              default:
                c.hasOwnProperty(L) || Ht(e, s, L, null, c, Y);
            }
        }
        for (var O in c) {
          var L = c[O];
          if (((Y = l[O]), c.hasOwnProperty(O) && (L != null || Y != null)))
            switch (O) {
              case "type":
                m = L;
                break;
              case "name":
                f = L;
                break;
              case "checked":
                N = L;
                break;
              case "defaultChecked":
                H = L;
                break;
              case "value":
                x = L;
                break;
              case "defaultValue":
                w = L;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (L != null) throw Error(a(137, s));
                break;
              default:
                L !== Y && Ht(e, s, O, L, c, Y);
            }
        }
        Ec(e, x, w, A, N, H, m, f);
        return;
      case "select":
        L = x = w = O = null;
        for (m in l)
          if (((A = l[m]), l.hasOwnProperty(m) && A != null))
            switch (m) {
              case "value":
                break;
              case "multiple":
                L = A;
              default:
                c.hasOwnProperty(m) || Ht(e, s, m, null, c, A);
            }
        for (f in c)
          if (
            ((m = c[f]),
            (A = l[f]),
            c.hasOwnProperty(f) && (m != null || A != null))
          )
            switch (f) {
              case "value":
                O = m;
                break;
              case "defaultValue":
                w = m;
                break;
              case "multiple":
                x = m;
              default:
                m !== A && Ht(e, s, f, m, c, A);
            }
        ((s = w),
          (l = x),
          (c = L),
          O != null
            ? Rs(e, !!l, O, !1)
            : !!c != !!l &&
              (s != null ? Rs(e, !!l, s, !0) : Rs(e, !!l, l ? [] : "", !1)));
        return;
      case "textarea":
        L = O = null;
        for (w in l)
          if (
            ((f = l[w]),
            l.hasOwnProperty(w) && f != null && !c.hasOwnProperty(w))
          )
            switch (w) {
              case "value":
                break;
              case "children":
                break;
              default:
                Ht(e, s, w, null, c, f);
            }
        for (x in c)
          if (
            ((f = c[x]),
            (m = l[x]),
            c.hasOwnProperty(x) && (f != null || m != null))
          )
            switch (x) {
              case "value":
                O = f;
                break;
              case "defaultValue":
                L = f;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (f != null) throw Error(a(91));
                break;
              default:
                f !== m && Ht(e, s, x, f, c, m);
            }
        mh(e, O, L);
        return;
      case "option":
        for (var tt in l)
          if (
            ((O = l[tt]),
            l.hasOwnProperty(tt) && O != null && !c.hasOwnProperty(tt))
          )
            switch (tt) {
              case "selected":
                e.selected = !1;
                break;
              default:
                Ht(e, s, tt, null, c, O);
            }
        for (A in c)
          if (
            ((O = c[A]),
            (L = l[A]),
            c.hasOwnProperty(A) && O !== L && (O != null || L != null))
          )
            switch (A) {
              case "selected":
                e.selected =
                  O && typeof O != "function" && typeof O != "symbol";
                break;
              default:
                Ht(e, s, A, O, c, L);
            }
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var ot in l)
          ((O = l[ot]),
            l.hasOwnProperty(ot) &&
              O != null &&
              !c.hasOwnProperty(ot) &&
              Ht(e, s, ot, null, c, O));
        for (N in c)
          if (
            ((O = c[N]),
            (L = l[N]),
            c.hasOwnProperty(N) && O !== L && (O != null || L != null))
          )
            switch (N) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (O != null) throw Error(a(137, s));
                break;
              default:
                Ht(e, s, N, O, c, L);
            }
        return;
      default:
        if (jc(s)) {
          for (var Ut in l)
            ((O = l[Ut]),
              l.hasOwnProperty(Ut) &&
                O !== void 0 &&
                !c.hasOwnProperty(Ut) &&
                gd(e, s, Ut, void 0, c, O));
          for (H in c)
            ((O = c[H]),
              (L = l[H]),
              !c.hasOwnProperty(H) ||
                O === L ||
                (O === void 0 && L === void 0) ||
                gd(e, s, H, O, c, L));
          return;
        }
    }
    for (var C in l)
      ((O = l[C]),
        l.hasOwnProperty(C) &&
          O != null &&
          !c.hasOwnProperty(C) &&
          Ht(e, s, C, null, c, O));
    for (Y in c)
      ((O = c[Y]),
        (L = l[Y]),
        !c.hasOwnProperty(Y) ||
          O === L ||
          (O == null && L == null) ||
          Ht(e, s, Y, O, c, L));
  }
  function xp(e) {
    switch (e) {
      case "css":
      case "script":
      case "font":
      case "img":
      case "image":
      case "input":
      case "link":
        return !0;
      default:
        return !1;
    }
  }
  function y2() {
    if (typeof performance.getEntriesByType == "function") {
      for (
        var e = 0, s = 0, l = performance.getEntriesByType("resource"), c = 0;
        c < l.length;
        c++
      ) {
        var f = l[c],
          m = f.transferSize,
          x = f.initiatorType,
          w = f.duration;
        if (m && w && xp(x)) {
          for (x = 0, w = f.responseEnd, c += 1; c < l.length; c++) {
            var A = l[c],
              N = A.startTime;
            if (N > w) break;
            var H = A.transferSize,
              Y = A.initiatorType;
            H &&
              xp(Y) &&
              ((A = A.responseEnd), (x += H * (A < w ? 1 : (w - N) / (A - N))));
          }
          if ((--c, (s += (8 * (m + x)) / (f.duration / 1e3)), e++, 10 < e))
            break;
        }
      }
      if (0 < e) return s / e / 1e6;
    }
    return navigator.connection &&
      ((e = navigator.connection.downlink), typeof e == "number")
      ? e
      : 5;
  }
  var pd = null,
    bd = null;
  function rr(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function yp(e) {
    switch (e) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function vp(e, s) {
    if (e === 0)
      switch (s) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return e === 1 && s === "foreignObject" ? 0 : e;
  }
  function xd(e, s) {
    return (
      e === "textarea" ||
      e === "noscript" ||
      typeof s.children == "string" ||
      typeof s.children == "number" ||
      typeof s.children == "bigint" ||
      (typeof s.dangerouslySetInnerHTML == "object" &&
        s.dangerouslySetInnerHTML !== null &&
        s.dangerouslySetInnerHTML.__html != null)
    );
  }
  var yd = null;
  function v2() {
    var e = window.event;
    return e && e.type === "popstate"
      ? e === yd
        ? !1
        : ((yd = e), !0)
      : ((yd = null), !1);
  }
  var wp = typeof setTimeout == "function" ? setTimeout : void 0,
    w2 = typeof clearTimeout == "function" ? clearTimeout : void 0,
    _p = typeof Promise == "function" ? Promise : void 0,
    _2 =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof _p < "u"
          ? function (e) {
              return _p.resolve(null).then(e).catch(S2);
            }
          : wp;
  function S2(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function Oi(e) {
    return e === "head";
  }
  function Sp(e, s) {
    var l = s,
      c = 0;
    do {
      var f = l.nextSibling;
      if ((e.removeChild(l), f && f.nodeType === 8))
        if (((l = f.data), l === "/$" || l === "/&")) {
          if (c === 0) {
            (e.removeChild(f), ga(s));
            return;
          }
          c--;
        } else if (
          l === "$" ||
          l === "$?" ||
          l === "$~" ||
          l === "$!" ||
          l === "&"
        )
          c++;
        else if (l === "html") gl(e.ownerDocument.documentElement);
        else if (l === "head") {
          ((l = e.ownerDocument.head), gl(l));
          for (var m = l.firstChild; m;) {
            var x = m.nextSibling,
              w = m.nodeName;
            (m[za] ||
              w === "SCRIPT" ||
              w === "STYLE" ||
              (w === "LINK" && m.rel.toLowerCase() === "stylesheet") ||
              l.removeChild(m),
              (m = x));
          }
        } else l === "body" && gl(e.ownerDocument.body);
      l = f;
    } while (l);
    ga(s);
  }
  function Mp(e, s) {
    var l = e;
    e = 0;
    do {
      var c = l.nextSibling;
      if (
        (l.nodeType === 1
          ? s
            ? ((l._stashedDisplay = l.style.display),
              (l.style.display = "none"))
            : ((l.style.display = l._stashedDisplay || ""),
              l.getAttribute("style") === "" && l.removeAttribute("style"))
          : l.nodeType === 3 &&
            (s
              ? ((l._stashedText = l.nodeValue), (l.nodeValue = ""))
              : (l.nodeValue = l._stashedText || "")),
        c && c.nodeType === 8)
      )
        if (((l = c.data), l === "/$")) {
          if (e === 0) break;
          e--;
        } else (l !== "$" && l !== "$?" && l !== "$~" && l !== "$!") || e++;
      l = c;
    } while (l);
  }
  function vd(e) {
    var s = e.firstChild;
    for (s && s.nodeType === 10 && (s = s.nextSibling); s;) {
      var l = s;
      switch (((s = s.nextSibling), l.nodeName)) {
        case "HTML":
        case "HEAD":
        case "BODY":
          (vd(l), Ac(l));
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (l.rel.toLowerCase() === "stylesheet") continue;
      }
      e.removeChild(l);
    }
  }
  function M2(e, s, l, c) {
    for (; e.nodeType === 1;) {
      var f = l;
      if (e.nodeName.toLowerCase() !== s.toLowerCase()) {
        if (!c && (e.nodeName !== "INPUT" || e.type !== "hidden")) break;
      } else if (c) {
        if (!e[za])
          switch (s) {
            case "meta":
              if (!e.hasAttribute("itemprop")) break;
              return e;
            case "link":
              if (
                ((m = e.getAttribute("rel")),
                m === "stylesheet" && e.hasAttribute("data-precedence"))
              )
                break;
              if (
                m !== f.rel ||
                e.getAttribute("href") !==
                  (f.href == null || f.href === "" ? null : f.href) ||
                e.getAttribute("crossorigin") !==
                  (f.crossOrigin == null ? null : f.crossOrigin) ||
                e.getAttribute("title") !== (f.title == null ? null : f.title)
              )
                break;
              return e;
            case "style":
              if (e.hasAttribute("data-precedence")) break;
              return e;
            case "script":
              if (
                ((m = e.getAttribute("src")),
                (m !== (f.src == null ? null : f.src) ||
                  e.getAttribute("type") !== (f.type == null ? null : f.type) ||
                  e.getAttribute("crossorigin") !==
                    (f.crossOrigin == null ? null : f.crossOrigin)) &&
                  m &&
                  e.hasAttribute("async") &&
                  !e.hasAttribute("itemprop"))
              )
                break;
              return e;
            default:
              return e;
          }
      } else if (s === "input" && e.type === "hidden") {
        var m = f.name == null ? null : "" + f.name;
        if (f.type === "hidden" && e.getAttribute("name") === m) return e;
      } else return e;
      if (((e = yn(e.nextSibling)), e === null)) break;
    }
    return null;
  }
  function A2(e, s, l) {
    if (s === "") return null;
    for (; e.nodeType !== 3;)
      if (
        ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") &&
          !l) ||
        ((e = yn(e.nextSibling)), e === null)
      )
        return null;
    return e;
  }
  function Ap(e, s) {
    for (; e.nodeType !== 8;)
      if (
        ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") &&
          !s) ||
        ((e = yn(e.nextSibling)), e === null)
      )
        return null;
    return e;
  }
  function wd(e) {
    return e.data === "$?" || e.data === "$~";
  }
  function _d(e) {
    return (
      e.data === "$!" ||
      (e.data === "$?" && e.ownerDocument.readyState !== "loading")
    );
  }
  function k2(e, s) {
    var l = e.ownerDocument;
    if (e.data === "$~") e._reactRetry = s;
    else if (e.data !== "$?" || l.readyState !== "loading") s();
    else {
      var c = function () {
        (s(), l.removeEventListener("DOMContentLoaded", c));
      };
      (l.addEventListener("DOMContentLoaded", c), (e._reactRetry = c));
    }
  }
  function yn(e) {
    for (; e != null; e = e.nextSibling) {
      var s = e.nodeType;
      if (s === 1 || s === 3) break;
      if (s === 8) {
        if (
          ((s = e.data),
          s === "$" ||
            s === "$!" ||
            s === "$?" ||
            s === "$~" ||
            s === "&" ||
            s === "F!" ||
            s === "F")
        )
          break;
        if (s === "/$" || s === "/&") return null;
      }
    }
    return e;
  }
  var Sd = null;
  function kp(e) {
    e = e.nextSibling;
    for (var s = 0; e;) {
      if (e.nodeType === 8) {
        var l = e.data;
        if (l === "/$" || l === "/&") {
          if (s === 0) return yn(e.nextSibling);
          s--;
        } else
          (l !== "$" && l !== "$!" && l !== "$?" && l !== "$~" && l !== "&") ||
            s++;
      }
      e = e.nextSibling;
    }
    return null;
  }
  function Ep(e) {
    e = e.previousSibling;
    for (var s = 0; e;) {
      if (e.nodeType === 8) {
        var l = e.data;
        if (l === "$" || l === "$!" || l === "$?" || l === "$~" || l === "&") {
          if (s === 0) return e;
          s--;
        } else (l !== "/$" && l !== "/&") || s++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  function Cp(e, s, l) {
    switch (((s = rr(l)), e)) {
      case "html":
        if (((e = s.documentElement), !e)) throw Error(a(452));
        return e;
      case "head":
        if (((e = s.head), !e)) throw Error(a(453));
        return e;
      case "body":
        if (((e = s.body), !e)) throw Error(a(454));
        return e;
      default:
        throw Error(a(451));
    }
  }
  function gl(e) {
    for (var s = e.attributes; s.length;) e.removeAttributeNode(s[0]);
    Ac(e);
  }
  var vn = new Map(),
    jp = new Set();
  function cr(e) {
    return typeof e.getRootNode == "function"
      ? e.getRootNode()
      : e.nodeType === 9
        ? e
        : e.ownerDocument;
  }
  var ii = F.d;
  F.d = { f: E2, r: C2, D: j2, C: T2, L: N2, m: O2, X: D2, S: z2, M: L2 };
  function E2() {
    var e = ii.f(),
      s = tr();
    return e || s;
  }
  function C2(e) {
    var s = Ds(e);
    s !== null && s.tag === 5 && s.type === "form" ? Gm(s) : ii.r(e);
  }
  var fa = typeof document > "u" ? null : document;
  function Tp(e, s, l) {
    var c = fa;
    if (c && typeof s == "string" && s) {
      var f = fn(s);
      ((f = 'link[rel="' + e + '"][href="' + f + '"]'),
        typeof l == "string" && (f += '[crossorigin="' + l + '"]'),
        jp.has(f) ||
          (jp.add(f),
          (e = { rel: e, crossOrigin: l, href: s }),
          c.querySelector(f) === null &&
            ((s = c.createElement("link")),
            Ee(s, "link", e),
            xe(s),
            c.head.appendChild(s))));
    }
  }
  function j2(e) {
    (ii.D(e), Tp("dns-prefetch", e, null));
  }
  function T2(e, s) {
    (ii.C(e, s), Tp("preconnect", e, s));
  }
  function N2(e, s, l) {
    ii.L(e, s, l);
    var c = fa;
    if (c && e && s) {
      var f = 'link[rel="preload"][as="' + fn(s) + '"]';
      s === "image" && l && l.imageSrcSet
        ? ((f += '[imagesrcset="' + fn(l.imageSrcSet) + '"]'),
          typeof l.imageSizes == "string" &&
            (f += '[imagesizes="' + fn(l.imageSizes) + '"]'))
        : (f += '[href="' + fn(e) + '"]');
      var m = f;
      switch (s) {
        case "style":
          m = ha(e);
          break;
        case "script":
          m = ma(e);
      }
      vn.has(m) ||
        ((e = y(
          {
            rel: "preload",
            href: s === "image" && l && l.imageSrcSet ? void 0 : e,
            as: s,
          },
          l,
        )),
        vn.set(m, e),
        c.querySelector(f) !== null ||
          (s === "style" && c.querySelector(pl(m))) ||
          (s === "script" && c.querySelector(bl(m))) ||
          ((s = c.createElement("link")),
          Ee(s, "link", e),
          xe(s),
          c.head.appendChild(s)));
    }
  }
  function O2(e, s) {
    ii.m(e, s);
    var l = fa;
    if (l && e) {
      var c = s && typeof s.as == "string" ? s.as : "script",
        f =
          'link[rel="modulepreload"][as="' + fn(c) + '"][href="' + fn(e) + '"]',
        m = f;
      switch (c) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          m = ma(e);
      }
      if (
        !vn.has(m) &&
        ((e = y({ rel: "modulepreload", href: e }, s)),
        vn.set(m, e),
        l.querySelector(f) === null)
      ) {
        switch (c) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (l.querySelector(bl(m))) return;
        }
        ((c = l.createElement("link")),
          Ee(c, "link", e),
          xe(c),
          l.head.appendChild(c));
      }
    }
  }
  function z2(e, s, l) {
    ii.S(e, s, l);
    var c = fa;
    if (c && e) {
      var f = Ls(c).hoistableStyles,
        m = ha(e);
      s = s || "default";
      var x = f.get(m);
      if (!x) {
        var w = { loading: 0, preload: null };
        if ((x = c.querySelector(pl(m)))) w.loading = 5;
        else {
          ((e = y({ rel: "stylesheet", href: e, "data-precedence": s }, l)),
            (l = vn.get(m)) && Md(e, l));
          var A = (x = c.createElement("link"));
          (xe(A),
            Ee(A, "link", e),
            (A._p = new Promise(function (N, H) {
              ((A.onload = N), (A.onerror = H));
            })),
            A.addEventListener("load", function () {
              w.loading |= 1;
            }),
            A.addEventListener("error", function () {
              w.loading |= 2;
            }),
            (w.loading |= 4),
            ur(x, s, c));
        }
        ((x = { type: "stylesheet", instance: x, count: 1, state: w }),
          f.set(m, x));
      }
    }
  }
  function D2(e, s) {
    ii.X(e, s);
    var l = fa;
    if (l && e) {
      var c = Ls(l).hoistableScripts,
        f = ma(e),
        m = c.get(f);
      m ||
        ((m = l.querySelector(bl(f))),
        m ||
          ((e = y({ src: e, async: !0 }, s)),
          (s = vn.get(f)) && Ad(e, s),
          (m = l.createElement("script")),
          xe(m),
          Ee(m, "link", e),
          l.head.appendChild(m)),
        (m = { type: "script", instance: m, count: 1, state: null }),
        c.set(f, m));
    }
  }
  function L2(e, s) {
    ii.M(e, s);
    var l = fa;
    if (l && e) {
      var c = Ls(l).hoistableScripts,
        f = ma(e),
        m = c.get(f);
      m ||
        ((m = l.querySelector(bl(f))),
        m ||
          ((e = y({ src: e, async: !0, type: "module" }, s)),
          (s = vn.get(f)) && Ad(e, s),
          (m = l.createElement("script")),
          xe(m),
          Ee(m, "link", e),
          l.head.appendChild(m)),
        (m = { type: "script", instance: m, count: 1, state: null }),
        c.set(f, m));
    }
  }
  function Np(e, s, l, c) {
    var f = (f = J.current) ? cr(f) : null;
    if (!f) throw Error(a(446));
    switch (e) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof l.precedence == "string" && typeof l.href == "string"
          ? ((s = ha(l.href)),
            (l = Ls(f).hoistableStyles),
            (c = l.get(s)),
            c ||
              ((c = { type: "style", instance: null, count: 0, state: null }),
              l.set(s, c)),
            c)
          : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (
          l.rel === "stylesheet" &&
          typeof l.href == "string" &&
          typeof l.precedence == "string"
        ) {
          e = ha(l.href);
          var m = Ls(f).hoistableStyles,
            x = m.get(e);
          if (
            (x ||
              ((f = f.ownerDocument || f),
              (x = {
                type: "stylesheet",
                instance: null,
                count: 0,
                state: { loading: 0, preload: null },
              }),
              m.set(e, x),
              (m = f.querySelector(pl(e))) &&
                !m._p &&
                ((x.instance = m), (x.state.loading = 5)),
              vn.has(e) ||
                ((l = {
                  rel: "preload",
                  as: "style",
                  href: l.href,
                  crossOrigin: l.crossOrigin,
                  integrity: l.integrity,
                  media: l.media,
                  hrefLang: l.hrefLang,
                  referrerPolicy: l.referrerPolicy,
                }),
                vn.set(e, l),
                m || B2(f, e, l, x.state))),
            s && c === null)
          )
            throw Error(a(528, ""));
          return x;
        }
        if (s && c !== null) throw Error(a(529, ""));
        return null;
      case "script":
        return (
          (s = l.async),
          (l = l.src),
          typeof l == "string" &&
          s &&
          typeof s != "function" &&
          typeof s != "symbol"
            ? ((s = ma(l)),
              (l = Ls(f).hoistableScripts),
              (c = l.get(s)),
              c ||
                ((c = {
                  type: "script",
                  instance: null,
                  count: 0,
                  state: null,
                }),
                l.set(s, c)),
              c)
            : { type: "void", instance: null, count: 0, state: null }
        );
      default:
        throw Error(a(444, e));
    }
  }
  function ha(e) {
    return 'href="' + fn(e) + '"';
  }
  function pl(e) {
    return 'link[rel="stylesheet"][' + e + "]";
  }
  function Op(e) {
    return y({}, e, { "data-precedence": e.precedence, precedence: null });
  }
  function B2(e, s, l, c) {
    e.querySelector('link[rel="preload"][as="style"][' + s + "]")
      ? (c.loading = 1)
      : ((s = e.createElement("link")),
        (c.preload = s),
        s.addEventListener("load", function () {
          return (c.loading |= 1);
        }),
        s.addEventListener("error", function () {
          return (c.loading |= 2);
        }),
        Ee(s, "link", l),
        xe(s),
        e.head.appendChild(s));
  }
  function ma(e) {
    return '[src="' + fn(e) + '"]';
  }
  function bl(e) {
    return "script[async]" + e;
  }
  function zp(e, s, l) {
    if ((s.count++, s.instance === null))
      switch (s.type) {
        case "style":
          var c = e.querySelector('style[data-href~="' + fn(l.href) + '"]');
          if (c) return ((s.instance = c), xe(c), c);
          var f = y({}, l, {
            "data-href": l.href,
            "data-precedence": l.precedence,
            href: null,
            precedence: null,
          });
          return (
            (c = (e.ownerDocument || e).createElement("style")),
            xe(c),
            Ee(c, "style", f),
            ur(c, l.precedence, e),
            (s.instance = c)
          );
        case "stylesheet":
          f = ha(l.href);
          var m = e.querySelector(pl(f));
          if (m) return ((s.state.loading |= 4), (s.instance = m), xe(m), m);
          ((c = Op(l)),
            (f = vn.get(f)) && Md(c, f),
            (m = (e.ownerDocument || e).createElement("link")),
            xe(m));
          var x = m;
          return (
            (x._p = new Promise(function (w, A) {
              ((x.onload = w), (x.onerror = A));
            })),
            Ee(m, "link", c),
            (s.state.loading |= 4),
            ur(m, l.precedence, e),
            (s.instance = m)
          );
        case "script":
          return (
            (m = ma(l.src)),
            (f = e.querySelector(bl(m)))
              ? ((s.instance = f), xe(f), f)
              : ((c = l),
                (f = vn.get(m)) && ((c = y({}, l)), Ad(c, f)),
                (e = e.ownerDocument || e),
                (f = e.createElement("script")),
                xe(f),
                Ee(f, "link", c),
                e.head.appendChild(f),
                (s.instance = f))
          );
        case "void":
          return null;
        default:
          throw Error(a(443, s.type));
      }
    else
      s.type === "stylesheet" &&
        (s.state.loading & 4) === 0 &&
        ((c = s.instance), (s.state.loading |= 4), ur(c, l.precedence, e));
    return s.instance;
  }
  function ur(e, s, l) {
    for (
      var c = l.querySelectorAll(
          'link[rel="stylesheet"][data-precedence],style[data-precedence]',
        ),
        f = c.length ? c[c.length - 1] : null,
        m = f,
        x = 0;
      x < c.length;
      x++
    ) {
      var w = c[x];
      if (w.dataset.precedence === s) m = w;
      else if (m !== f) break;
    }
    m
      ? m.parentNode.insertBefore(e, m.nextSibling)
      : ((s = l.nodeType === 9 ? l.head : l), s.insertBefore(e, s.firstChild));
  }
  function Md(e, s) {
    (e.crossOrigin == null && (e.crossOrigin = s.crossOrigin),
      e.referrerPolicy == null && (e.referrerPolicy = s.referrerPolicy),
      e.title == null && (e.title = s.title));
  }
  function Ad(e, s) {
    (e.crossOrigin == null && (e.crossOrigin = s.crossOrigin),
      e.referrerPolicy == null && (e.referrerPolicy = s.referrerPolicy),
      e.integrity == null && (e.integrity = s.integrity));
  }
  var dr = null;
  function Dp(e, s, l) {
    if (dr === null) {
      var c = new Map(),
        f = (dr = new Map());
      f.set(l, c);
    } else ((f = dr), (c = f.get(l)), c || ((c = new Map()), f.set(l, c)));
    if (c.has(e)) return c;
    for (
      c.set(e, null), l = l.getElementsByTagName(e), f = 0;
      f < l.length;
      f++
    ) {
      var m = l[f];
      if (
        !(
          m[za] ||
          m[Se] ||
          (e === "link" && m.getAttribute("rel") === "stylesheet")
        ) &&
        m.namespaceURI !== "http://www.w3.org/2000/svg"
      ) {
        var x = m.getAttribute(s) || "";
        x = e + x;
        var w = c.get(x);
        w ? w.push(m) : c.set(x, [m]);
      }
    }
    return c;
  }
  function Lp(e, s, l) {
    ((e = e.ownerDocument || e),
      e.head.insertBefore(
        l,
        s === "title" ? e.querySelector("head > title") : null,
      ));
  }
  function R2(e, s, l) {
    if (l === 1 || s.itemProp != null) return !1;
    switch (e) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (
          typeof s.precedence != "string" ||
          typeof s.href != "string" ||
          s.href === ""
        )
          break;
        return !0;
      case "link":
        if (
          typeof s.rel != "string" ||
          typeof s.href != "string" ||
          s.href === "" ||
          s.onLoad ||
          s.onError
        )
          break;
        switch (s.rel) {
          case "stylesheet":
            return (
              (e = s.disabled),
              typeof s.precedence == "string" && e == null
            );
          default:
            return !0;
        }
      case "script":
        if (
          s.async &&
          typeof s.async != "function" &&
          typeof s.async != "symbol" &&
          !s.onLoad &&
          !s.onError &&
          s.src &&
          typeof s.src == "string"
        )
          return !0;
    }
    return !1;
  }
  function Bp(e) {
    return !(e.type === "stylesheet" && (e.state.loading & 3) === 0);
  }
  function H2(e, s, l, c) {
    if (
      l.type === "stylesheet" &&
      (typeof c.media != "string" || matchMedia(c.media).matches !== !1) &&
      (l.state.loading & 4) === 0
    ) {
      if (l.instance === null) {
        var f = ha(c.href),
          m = s.querySelector(pl(f));
        if (m) {
          ((s = m._p),
            s !== null &&
              typeof s == "object" &&
              typeof s.then == "function" &&
              (e.count++, (e = fr.bind(e)), s.then(e, e)),
            (l.state.loading |= 4),
            (l.instance = m),
            xe(m));
          return;
        }
        ((m = s.ownerDocument || s),
          (c = Op(c)),
          (f = vn.get(f)) && Md(c, f),
          (m = m.createElement("link")),
          xe(m));
        var x = m;
        ((x._p = new Promise(function (w, A) {
          ((x.onload = w), (x.onerror = A));
        })),
          Ee(m, "link", c),
          (l.instance = m));
      }
      (e.stylesheets === null && (e.stylesheets = new Map()),
        e.stylesheets.set(l, s),
        (s = l.state.preload) &&
          (l.state.loading & 3) === 0 &&
          (e.count++,
          (l = fr.bind(e)),
          s.addEventListener("load", l),
          s.addEventListener("error", l)));
    }
  }
  var kd = 0;
  function U2(e, s) {
    return (
      e.stylesheets && e.count === 0 && mr(e, e.stylesheets),
      0 < e.count || 0 < e.imgCount
        ? function (l) {
            var c = setTimeout(function () {
              if ((e.stylesheets && mr(e, e.stylesheets), e.unsuspend)) {
                var m = e.unsuspend;
                ((e.unsuspend = null), m());
              }
            }, 6e4 + s);
            0 < e.imgBytes && kd === 0 && (kd = 62500 * y2());
            var f = setTimeout(
              function () {
                if (
                  ((e.waitingForImages = !1),
                  e.count === 0 &&
                    (e.stylesheets && mr(e, e.stylesheets), e.unsuspend))
                ) {
                  var m = e.unsuspend;
                  ((e.unsuspend = null), m());
                }
              },
              (e.imgBytes > kd ? 50 : 800) + s,
            );
            return (
              (e.unsuspend = l),
              function () {
                ((e.unsuspend = null), clearTimeout(c), clearTimeout(f));
              }
            );
          }
        : null
    );
  }
  function fr() {
    if (
      (this.count--,
      this.count === 0 && (this.imgCount === 0 || !this.waitingForImages))
    ) {
      if (this.stylesheets) mr(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        ((this.unsuspend = null), e());
      }
    }
  }
  var hr = null;
  function mr(e, s) {
    ((e.stylesheets = null),
      e.unsuspend !== null &&
        (e.count++,
        (hr = new Map()),
        s.forEach(V2, e),
        (hr = null),
        fr.call(e)));
  }
  function V2(e, s) {
    if (!(s.state.loading & 4)) {
      var l = hr.get(e);
      if (l) var c = l.get(null);
      else {
        ((l = new Map()), hr.set(e, l));
        for (
          var f = e.querySelectorAll(
              "link[data-precedence],style[data-precedence]",
            ),
            m = 0;
          m < f.length;
          m++
        ) {
          var x = f[m];
          (x.nodeName === "LINK" || x.getAttribute("media") !== "not all") &&
            (l.set(x.dataset.precedence, x), (c = x));
        }
        c && l.set(null, c);
      }
      ((f = s.instance),
        (x = f.getAttribute("data-precedence")),
        (m = l.get(x) || c),
        m === c && l.set(null, f),
        l.set(x, f),
        this.count++,
        (c = fr.bind(this)),
        f.addEventListener("load", c),
        f.addEventListener("error", c),
        m
          ? m.parentNode.insertBefore(f, m.nextSibling)
          : ((e = e.nodeType === 9 ? e.head : e),
            e.insertBefore(f, e.firstChild)),
        (s.state.loading |= 4));
    }
  }
  var xl = {
    $$typeof: U,
    Provider: null,
    Consumer: null,
    _currentValue: I,
    _currentValue2: I,
    _threadCount: 0,
  };
  function q2(e, s, l, c, f, m, x, w, A) {
    ((this.tag = 1),
      (this.containerInfo = e),
      (this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode =
        this.next =
        this.pendingContext =
        this.context =
        this.cancelPendingCommit =
          null),
      (this.callbackPriority = 0),
      (this.expirationTimes = wc(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = wc(0)),
      (this.hiddenUpdates = wc(null)),
      (this.identifierPrefix = c),
      (this.onUncaughtError = f),
      (this.onCaughtError = m),
      (this.onRecoverableError = x),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = A),
      (this.incompleteTransitions = new Map()));
  }
  function Rp(e, s, l, c, f, m, x, w, A, N, H, Y) {
    return (
      (e = new q2(e, s, l, x, A, N, H, Y, w)),
      (s = 1),
      m === !0 && (s |= 24),
      (m = Je(3, null, null, s)),
      (e.current = m),
      (m.stateNode = e),
      (s = au()),
      s.refCount++,
      (e.pooledCache = s),
      s.refCount++,
      (m.memoizedState = { element: c, isDehydrated: l, cache: s }),
      cu(m),
      e
    );
  }
  function Hp(e) {
    return e ? ((e = Fs), e) : Fs;
  }
  function Up(e, s, l, c, f, m) {
    ((f = Hp(f)),
      c.context === null ? (c.context = f) : (c.pendingContext = f),
      (c = wi(s)),
      (c.payload = { element: l }),
      (m = m === void 0 ? null : m),
      m !== null && (c.callback = m),
      (l = _i(e, c, s)),
      l !== null && (Ge(l, e, s), Wa(l, e, s)));
  }
  function Vp(e, s) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var l = e.retryLane;
      e.retryLane = l !== 0 && l < s ? l : s;
    }
  }
  function Ed(e, s) {
    (Vp(e, s), (e = e.alternate) && Vp(e, s));
  }
  function qp(e) {
    if (e.tag === 13 || e.tag === 31) {
      var s = ns(e, 67108864);
      (s !== null && Ge(s, e, 67108864), Ed(e, 67108864));
    }
  }
  function Yp(e) {
    if (e.tag === 13 || e.tag === 31) {
      var s = an();
      s = _c(s);
      var l = ns(e, s);
      (l !== null && Ge(l, e, s), Ed(e, s));
    }
  }
  var gr = !0;
  function Y2(e, s, l, c) {
    var f = D.T;
    D.T = null;
    var m = F.p;
    try {
      ((F.p = 2), Cd(e, s, l, c));
    } finally {
      ((F.p = m), (D.T = f));
    }
  }
  function X2(e, s, l, c) {
    var f = D.T;
    D.T = null;
    var m = F.p;
    try {
      ((F.p = 8), Cd(e, s, l, c));
    } finally {
      ((F.p = m), (D.T = f));
    }
  }
  function Cd(e, s, l, c) {
    if (gr) {
      var f = jd(c);
      if (f === null) (md(e, s, c, pr, l), Pp(e, c));
      else if (F2(f, e, s, l, c)) c.stopPropagation();
      else if ((Pp(e, c), s & 4 && -1 < P2.indexOf(e))) {
        for (; f !== null;) {
          var m = Ds(f);
          if (m !== null)
            switch (m.tag) {
              case 3:
                if (((m = m.stateNode), m.current.memoizedState.isDehydrated)) {
                  var x = $i(m.pendingLanes);
                  if (x !== 0) {
                    var w = m;
                    for (w.pendingLanes |= 2, w.entangledLanes |= 2; x;) {
                      var A = 1 << (31 - $e(x));
                      ((w.entanglements[1] |= A), (x &= ~A));
                    }
                    (Nn(m), (Tt & 6) === 0 && ((Io = ue() + 500), fl(0)));
                  }
                }
                break;
              case 31:
              case 13:
                ((w = ns(m, 2)), w !== null && Ge(w, m, 2), tr(), Ed(m, 2));
            }
          if (((m = jd(c)), m === null && md(e, s, c, pr, l), m === f)) break;
          f = m;
        }
        f !== null && c.stopPropagation();
      } else md(e, s, c, null, l);
    }
  }
  function jd(e) {
    return ((e = Nc(e)), Td(e));
  }
  var pr = null;
  function Td(e) {
    if (((pr = null), (e = zs(e)), e !== null)) {
      var s = r(e);
      if (s === null) e = null;
      else {
        var l = s.tag;
        if (l === 13) {
          if (((e = u(s)), e !== null)) return e;
          e = null;
        } else if (l === 31) {
          if (((e = d(s)), e !== null)) return e;
          e = null;
        } else if (l === 3) {
          if (s.stateNode.current.memoizedState.isDehydrated)
            return s.tag === 3 ? s.stateNode.containerInfo : null;
          e = null;
        } else s !== e && (e = null);
      }
    }
    return ((pr = e), null);
  }
  function Xp(e) {
    switch (e) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (ze()) {
          case Ue:
            return 2;
          case io:
            return 8;
          case so:
          case Ty:
            return 32;
          case Jf:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Nd = !1,
    zi = null,
    Di = null,
    Li = null,
    yl = new Map(),
    vl = new Map(),
    Bi = [],
    P2 =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
        " ",
      );
  function Pp(e, s) {
    switch (e) {
      case "focusin":
      case "focusout":
        zi = null;
        break;
      case "dragenter":
      case "dragleave":
        Di = null;
        break;
      case "mouseover":
      case "mouseout":
        Li = null;
        break;
      case "pointerover":
      case "pointerout":
        yl.delete(s.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        vl.delete(s.pointerId);
    }
  }
  function wl(e, s, l, c, f, m) {
    return e === null || e.nativeEvent !== m
      ? ((e = {
          blockedOn: s,
          domEventName: l,
          eventSystemFlags: c,
          nativeEvent: m,
          targetContainers: [f],
        }),
        s !== null && ((s = Ds(s)), s !== null && qp(s)),
        e)
      : ((e.eventSystemFlags |= c),
        (s = e.targetContainers),
        f !== null && s.indexOf(f) === -1 && s.push(f),
        e);
  }
  function F2(e, s, l, c, f) {
    switch (s) {
      case "focusin":
        return ((zi = wl(zi, e, s, l, c, f)), !0);
      case "dragenter":
        return ((Di = wl(Di, e, s, l, c, f)), !0);
      case "mouseover":
        return ((Li = wl(Li, e, s, l, c, f)), !0);
      case "pointerover":
        var m = f.pointerId;
        return (yl.set(m, wl(yl.get(m) || null, e, s, l, c, f)), !0);
      case "gotpointercapture":
        return (
          (m = f.pointerId),
          vl.set(m, wl(vl.get(m) || null, e, s, l, c, f)),
          !0
        );
    }
    return !1;
  }
  function Fp(e) {
    var s = zs(e.target);
    if (s !== null) {
      var l = r(s);
      if (l !== null) {
        if (((s = l.tag), s === 13)) {
          if (((s = u(l)), s !== null)) {
            ((e.blockedOn = s),
              ah(e.priority, function () {
                Yp(l);
              }));
            return;
          }
        } else if (s === 31) {
          if (((s = d(l)), s !== null)) {
            ((e.blockedOn = s),
              ah(e.priority, function () {
                Yp(l);
              }));
            return;
          }
        } else if (s === 3 && l.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = l.tag === 3 ? l.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function br(e) {
    if (e.blockedOn !== null) return !1;
    for (var s = e.targetContainers; 0 < s.length;) {
      var l = jd(e.nativeEvent);
      if (l === null) {
        l = e.nativeEvent;
        var c = new l.constructor(l.type, l);
        ((Tc = c), l.target.dispatchEvent(c), (Tc = null));
      } else return ((s = Ds(l)), s !== null && qp(s), (e.blockedOn = l), !1);
      s.shift();
    }
    return !0;
  }
  function Gp(e, s, l) {
    br(e) && l.delete(s);
  }
  function G2() {
    ((Nd = !1),
      zi !== null && br(zi) && (zi = null),
      Di !== null && br(Di) && (Di = null),
      Li !== null && br(Li) && (Li = null),
      yl.forEach(Gp),
      vl.forEach(Gp));
  }
  function xr(e, s) {
    e.blockedOn === s &&
      ((e.blockedOn = null),
      Nd ||
        ((Nd = !0),
        n.unstable_scheduleCallback(n.unstable_NormalPriority, G2)));
  }
  var yr = null;
  function Zp(e) {
    yr !== e &&
      ((yr = e),
      n.unstable_scheduleCallback(n.unstable_NormalPriority, function () {
        yr === e && (yr = null);
        for (var s = 0; s < e.length; s += 3) {
          var l = e[s],
            c = e[s + 1],
            f = e[s + 2];
          if (typeof c != "function") {
            if (Td(c || l) === null) continue;
            break;
          }
          var m = Ds(l);
          m !== null &&
            (e.splice(s, 3),
            (s -= 3),
            ju(m, { pending: !0, data: f, method: l.method, action: c }, c, f));
        }
      }));
  }
  function ga(e) {
    function s(A) {
      return xr(A, e);
    }
    (zi !== null && xr(zi, e),
      Di !== null && xr(Di, e),
      Li !== null && xr(Li, e),
      yl.forEach(s),
      vl.forEach(s));
    for (var l = 0; l < Bi.length; l++) {
      var c = Bi[l];
      c.blockedOn === e && (c.blockedOn = null);
    }
    for (; 0 < Bi.length && ((l = Bi[0]), l.blockedOn === null);)
      (Fp(l), l.blockedOn === null && Bi.shift());
    if (((l = (e.ownerDocument || e).$$reactFormReplay), l != null))
      for (c = 0; c < l.length; c += 3) {
        var f = l[c],
          m = l[c + 1],
          x = f[Ve] || null;
        if (typeof m == "function") x || Zp(l);
        else if (x) {
          var w = null;
          if (m && m.hasAttribute("formAction")) {
            if (((f = m), (x = m[Ve] || null))) w = x.formAction;
            else if (Td(f) !== null) continue;
          } else w = x.action;
          (typeof w == "function" ? (l[c + 1] = w) : (l.splice(c, 3), (c -= 3)),
            Zp(l));
        }
      }
  }
  function Qp() {
    function e(m) {
      m.canIntercept &&
        m.info === "react-transition" &&
        m.intercept({
          handler: function () {
            return new Promise(function (x) {
              return (f = x);
            });
          },
          focusReset: "manual",
          scroll: "manual",
        });
    }
    function s() {
      (f !== null && (f(), (f = null)), c || setTimeout(l, 20));
    }
    function l() {
      if (!c && !navigation.transition) {
        var m = navigation.currentEntry;
        m &&
          m.url != null &&
          navigation.navigate(m.url, {
            state: m.getState(),
            info: "react-transition",
            history: "replace",
          });
      }
    }
    if (typeof navigation == "object") {
      var c = !1,
        f = null;
      return (
        navigation.addEventListener("navigate", e),
        navigation.addEventListener("navigatesuccess", s),
        navigation.addEventListener("navigateerror", s),
        setTimeout(l, 100),
        function () {
          ((c = !0),
            navigation.removeEventListener("navigate", e),
            navigation.removeEventListener("navigatesuccess", s),
            navigation.removeEventListener("navigateerror", s),
            f !== null && (f(), (f = null)));
        }
      );
    }
  }
  function Od(e) {
    this._internalRoot = e;
  }
  ((vr.prototype.render = Od.prototype.render =
    function (e) {
      var s = this._internalRoot;
      if (s === null) throw Error(a(409));
      var l = s.current,
        c = an();
      Up(l, c, e, s, null, null);
    }),
    (vr.prototype.unmount = Od.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var s = e.containerInfo;
          (Up(e.current, 2, null, e, null, null), tr(), (s[Os] = null));
        }
      }));
  function vr(e) {
    this._internalRoot = e;
  }
  vr.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var s = sh();
      e = { blockedOn: null, target: e, priority: s };
      for (var l = 0; l < Bi.length && s !== 0 && s < Bi[l].priority; l++);
      (Bi.splice(l, 0, e), l === 0 && Fp(e));
    }
  };
  var Kp = t.version;
  if (Kp !== "19.2.4") throw Error(a(527, Kp, "19.2.4"));
  F.findDOMNode = function (e) {
    var s = e._reactInternals;
    if (s === void 0)
      throw typeof e.render == "function"
        ? Error(a(188))
        : ((e = Object.keys(e).join(",")), Error(a(268, e)));
    return (
      (e = g(s)),
      (e = e !== null ? p(e) : null),
      (e = e === null ? null : e.stateNode),
      e
    );
  };
  var Z2 = {
    bundleType: 0,
    version: "19.2.4",
    rendererPackageName: "react-dom",
    currentDispatcherRef: D,
    reconcilerVersion: "19.2.4",
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var wr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!wr.isDisabled && wr.supportsFiber)
      try {
        ((Ta = wr.inject(Z2)), (We = wr));
      } catch {}
  }
  return (
    (Ml.createRoot = function (e, s) {
      if (!o(e)) throw Error(a(299));
      var l = !1,
        c = "",
        f = ng,
        m = ig,
        x = sg;
      return (
        s != null &&
          (s.unstable_strictMode === !0 && (l = !0),
          s.identifierPrefix !== void 0 && (c = s.identifierPrefix),
          s.onUncaughtError !== void 0 && (f = s.onUncaughtError),
          s.onCaughtError !== void 0 && (m = s.onCaughtError),
          s.onRecoverableError !== void 0 && (x = s.onRecoverableError)),
        (s = Rp(e, 1, !1, null, null, l, c, null, f, m, x, Qp)),
        (e[Os] = s.current),
        hd(e),
        new Od(s)
      );
    }),
    (Ml.hydrateRoot = function (e, s, l) {
      if (!o(e)) throw Error(a(299));
      var c = !1,
        f = "",
        m = ng,
        x = ig,
        w = sg,
        A = null;
      return (
        l != null &&
          (l.unstable_strictMode === !0 && (c = !0),
          l.identifierPrefix !== void 0 && (f = l.identifierPrefix),
          l.onUncaughtError !== void 0 && (m = l.onUncaughtError),
          l.onCaughtError !== void 0 && (x = l.onCaughtError),
          l.onRecoverableError !== void 0 && (w = l.onRecoverableError),
          l.formState !== void 0 && (A = l.formState)),
        (s = Rp(e, 1, !0, s, l ?? null, c, f, A, m, x, w, Qp)),
        (s.context = Hp(null)),
        (l = s.current),
        (c = an()),
        (c = _c(c)),
        (f = wi(c)),
        (f.callback = null),
        _i(l, f, c),
        (l = c),
        (s.current.lanes = l),
        Oa(s, l),
        Nn(s),
        (e[Os] = s.current),
        hd(e),
        new vr(s)
      );
    }),
    (Ml.version = "19.2.4"),
    Ml
  );
}
var eb;
function c1() {
  if (eb) return Dd.exports;
  eb = 1;
  function n() {
    if (!(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    ))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
      } catch (t) {
        console.error(t);
      }
  }
  return (n(), (Dd.exports = r1()), Dd.exports);
}
var u1 = c1();
const d1 = J2(u1),
  U0 = at.createContext({ theme: "dark", toggle: () => {} });
function f1() {
  return at.useContext(U0);
}
function h1({ children: n }) {
  const [t, i] = at.useState(() => {
    if (typeof window < "u") {
      const o = localStorage.getItem("zyhuka-theme");
      if (o === "light" || o === "dark") return o;
    }
    return "light";
  });
  at.useEffect(() => {
    const o = document.documentElement;
    (t === "light"
      ? (o.classList.add("light"), o.classList.remove("dark"))
      : (o.classList.add("dark"), o.classList.remove("light")),
      localStorage.setItem("zyhuka-theme", t));
  }, [t]);
  const a = () => i((o) => (o === "dark" ? "light" : "dark"));
  return b.jsx(U0.Provider, { value: { theme: t, toggle: a }, children: n });
}
function m1({ toggleMenu: n, setPage: t }) {
  const a = H0().pathname,
    [o, r] = at.useState(!1),
    u = at.useRef(null),
    { theme: d, toggle: h } = f1();
  at.useEffect(() => {
    const p = (y) => {
      u.current && !u.current.contains(y.target) && r(!1);
    };
    return (
      document.addEventListener("mousedown", p),
      () => document.removeEventListener("mousedown", p)
    );
  }, []);
  const g = [
    { label: "Telegram", href: "https://t.me/siputzxcom", color: "#229ED9" },
    {
      label: "Discord",
      href: "https://discord.gg/NCnWJ37RA",
      color: "#5865F2",
    },
    {
      label: "WhatsApp Group",
      href: "https://chat.whatsapp.com/K0Thkzw0iLgE6oWxopBQmA?mode=gi_t",
      color: "#25D366",
    },
    {
      label: "WhatsApp Channel",
      href: "https://whatsapp.com/channel/0029Vaq9pCUEawdzlDYdYF3p",
      color: "#25D366",
    },
  ];
  return b.jsx("nav", {
    className:
      "fixed w-full z-50 bg-[var(--bg-primary)]/80 border-b border-[var(--border-color)] backdrop-blur-md",
    children: b.jsxs("div", {
      className:
        "max-w-6xl mx-auto px-6 h-16 flex items-center justify-between",
      children: [
        b.jsxs("button", {
          onClick: () => {
            (t("home"), r(!1));
          },
          className:
            "font-head text-lg uppercase tracking-wider flex items-center gap-2.5 text-[var(--text-primary)] hover:text-[#2563EB] transition-colors font-bold",
          children: [
            b.jsx("div", { className: "w-2 h-5 bg-[#2563EB]" }),
            "API ZYHUKA",
          ],
        }),
        b.jsxs("div", {
          className:
            "hidden md:flex gap-5 text-xs font-body font-medium text-[var(--text-secondary)] uppercase items-center",
          children: [
            b.jsx("button", {
              "data-playground-nav": "true",
              "aria-current": a === "/playground" ? "page" : undefined,
              onClick: () => {
                (t("playground"), r(!1));
              },
              className: `hover:text-[var(--text-primary)] transition-colors ${a === "/playground" ? "text-[var(--text-primary)]" : ""}`,
              children: "Playground",
            }),
            b.jsx("button", {
              onClick: () => {
                (t("monitor"), r(!1));
              },
              className: `hover:text-[var(--text-primary)] transition-colors ${a === "/monitor" ? "text-[var(--text-primary)]" : ""}`,
              "aria-current": a === "/monitor" ? "page" : undefined,
              children: "Monitor",
            }),
            b.jsx("a", {
              href: "https://status.siputzx.my.id/",
              target: "_blank",
              rel: "noopener noreferrer",
              className:
                "hover:text-[var(--text-primary)] transition-colors flex items-center gap-1.5",
              children: "Status",
            }),
            b.jsxs("div", {
              className: "relative",
              ref: u,
              children: [
                b.jsxs("button", {
                  onClick: () => r(!o),
                  className: `hover:text-[var(--text-primary)] transition-colors flex items-center gap-1 ${o ? "text-[var(--text-primary)]" : ""}`,
                  children: [
                    "Community",
                    b.jsx("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      fill: "none",
                      viewBox: "0 0 24 24",
                      strokeWidth: "2",
                      stroke: "currentColor",
                      className: `w-3 h-3 transition-transform ${o ? "rotate-180" : ""}`,
                      children: b.jsx("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        d: "M19.5 8.25l-7.5 7.5-7.5-7.5",
                      }),
                    }),
                  ],
                }),
                o &&
                  b.jsx("div", {
                    className:
                      "absolute top-full right-0 mt-2 w-44 bg-[var(--bg-secondary)] border border-[var(--border-color)] z-50 fade-in",
                    children: b.jsxs("div", {
                      className: "p-1",
                      children: [
                        g.map((p) =>
                          b.jsxs(
                            "a",
                            {
                              href: p.href,
                              target: "_blank",
                              rel: "noopener noreferrer",
                              onClick: () => r(!1),
                              className:
                                "flex items-center gap-3 px-3 py-2 text-xs font-body text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-tertiary)] transition-colors",
                              children: [
                                b.jsx("span", {
                                  className: "w-1.5 h-1.5 shrink-0",
                                  style: { backgroundColor: p.color },
                                }),
                                p.label,
                              ],
                            },
                            p.href,
                          ),
                        ),
                        b.jsx("div", {
                          className:
                            "border-t border-[var(--border-color)] mt-1 pt-1",
                          children: b.jsxs("a", {
                            href: "https://github.com/akaanakbaik/zyhuka-apiv2",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            onClick: () => r(!1),
                            className:
                              "flex items-center gap-3 px-3 py-2 text-xs font-body text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-tertiary)] transition-colors",
                            children: [
                              b.jsx("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                width: "12",
                                height: "12",
                                viewBox: "0 0 24 24",
                                fill: "currentColor",
                                className: "shrink-0",
                                children: b.jsx("path", {
                                  d: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z",
                                }),
                              }),
                              "GitHub",
                            ],
                          }),
                        }),
                      ],
                    }),
                  }),
              ],
            }),
            b.jsx("button", {
              onClick: h,
              className:
                "w-7 h-7 flex items-center justify-center border border-[var(--border-color)] hover:border-[var(--text-muted)] transition-colors text-[var(--text-muted)] hover:text-[var(--text-primary)]",
              "aria-label": `Switch to ${d === "dark" ? "light" : "dark"} mode`,
              children:
                d === "dark"
                  ? b.jsx("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      fill: "none",
                      viewBox: "0 0 24 24",
                      strokeWidth: "1.5",
                      stroke: "currentColor",
                      className: "w-3.5 h-3.5",
                      children: b.jsx("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        d: "M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z",
                      }),
                    })
                  : b.jsx("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      fill: "none",
                      viewBox: "0 0 24 24",
                      strokeWidth: "1.5",
                      stroke: "currentColor",
                      className: "w-3.5 h-3.5",
                      children: b.jsx("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        d: "M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z",
                      }),
                    }),
            }),
          ],
        }),
        b.jsxs("div", {
          className: "flex md:hidden items-center gap-2",
          children: [
            b.jsx("button", {
              onClick: h,
              className:
                "w-8 h-8 flex items-center justify-center border border-[var(--border-color)] text-[var(--text-muted)]",
              "aria-label": `Switch to ${d === "dark" ? "light" : "dark"} mode`,
              children:
                d === "dark"
                  ? b.jsx("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      fill: "none",
                      viewBox: "0 0 24 24",
                      strokeWidth: "1.5",
                      stroke: "currentColor",
                      className: "w-3.5 h-3.5",
                      children: b.jsx("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        d: "M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z",
                      }),
                    })
                  : b.jsx("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      fill: "none",
                      viewBox: "0 0 24 24",
                      strokeWidth: "1.5",
                      stroke: "currentColor",
                      className: "w-3.5 h-3.5",
                      children: b.jsx("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        d: "M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z",
                      }),
                    }),
            }),
            b.jsx("button", {
              onClick: n,
              "aria-label": "Open menu",
              className:
                "w-8 h-8 border border-[var(--border-color)] flex items-center justify-center text-[var(--text-primary)]",
              children: b.jsx("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewBox: "0 0 24 24",
                strokeWidth: "1.5",
                stroke: "currentColor",
                className: "w-5 h-5",
                children: b.jsx("path", {
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  d: "M3.75 9h16.5m-16.5 6.75h16.5",
                }),
              }),
            }),
          ],
        }),
      ],
    }),
  });
}
const g1 = ({ isOpen: n, toggleMenu: t, setPage: i }) => {
    const a = (o, r) => {
      (i(o), t());
    };
    return b.jsxs("div", {
      className: `fixed inset-0 z-[60] bg-[var(--bg-primary)] text-[var(--text-primary)] transform ${n ? "translate-x-0" : "translate-x-full"} flex flex-col overflow-hidden transition-transform duration-500 ease-[cubic-bezier(0.77,0,0.175,1)]`,
      children: [
        b.jsxs("div", {
          className:
            "flex justify-between items-center p-6 border-b border-[var(--border-color)]",
          children: [
            b.jsxs("div", {
              className: "flex items-center gap-3",
              children: [
                b.jsx("div", { className: "w-2.5 h-2.5 bg-[#2563EB]" }),
                b.jsx("span", {
                  className:
                    "font-mono text-xs tracking-widest uppercase text-[var(--text-muted)]",
                  children: "Menu",
                }),
              ],
            }),
            b.jsx("button", {
              onClick: t,
              "aria-label": "Close menu",
              className:
                "w-10 h-10 border border-[var(--border-color)] flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--text-primary)]",
              children: b.jsx("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewBox: "0 0 24 24",
                strokeWidth: "1.5",
                stroke: "currentColor",
                className: "w-5 h-5",
                children: b.jsx("path", {
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  d: "M6 18L18 6M6 6l12 12",
                }),
              }),
            }),
          ],
        }),
        b.jsx("div", {
          className: "flex-1 flex flex-col justify-center px-6",
          children: b.jsxs("nav", {
            className: "space-y-2",
            children: [
              b.jsx("button", {
                onClick: () => a("home"),
                className:
                  "block w-full text-left font-head text-5xl md:text-7xl uppercase font-bold text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:pl-4 transition-all duration-300 border-l-2 border-transparent hover:border-[#2563EB]",
                children: "HOME",
              }),
              b.jsx("button", {
                onClick: () => a("playground"),
                className:
                  "block w-full text-left font-head text-5xl md:text-7xl uppercase font-bold text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:pl-4 transition-all duration-300 border-l-2 border-transparent hover:border-[#2563EB]",
                children: "PLAYGROUND",
              }),
              b.jsx("button", {
                onClick: () => a("monitor"),
                className:
                  "block w-full text-left font-head text-5xl md:text-7xl uppercase font-bold text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:pl-4 transition-all duration-300 border-l-2 border-transparent hover:border-[#2563EB]",
                children: "MONITOR",
              }),
              b.jsx("div", {
                className: "my-6 border-t border-[var(--border-color)] w-12",
              }),
              b.jsx("button", {
                onClick: () => a("terms"),
                className:
                  "block w-full text-left font-head text-3xl md:text-4xl uppercase font-bold text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:pl-2 transition-all duration-300",
                children: "TERMS",
              }),
              b.jsx("button", {
                onClick: () => a("privacy"),
                className:
                  "block w-full text-left font-head text-3xl md:text-4xl uppercase font-bold text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:pl-2 transition-all duration-300",
                children: "PRIVACY",
              }),
            ],
          }),
        }),
        b.jsx("div", {
          className: "p-6",
          children: b.jsx("a", {
            href: "https://t.me/siputzxcom",
            target: "_blank",
            rel: "noopener noreferrer",
            onClick: t,
            className:
              "block text-center font-body text-xs font-semibold text-white bg-[#2563EB] py-4 border border-[#2563EB] hover:bg-transparent hover:text-[#2563EB] transition-all tracking-widest uppercase",
            children: "Join Community",
          }),
        }),
      ],
    });
  },
  p1 = ({ setPage: n }) =>
    b.jsx("footer", {
      className:
        "bg-[var(--bg-primary)] border-t border-[var(--border-color)] pt-14 pb-8",
      children: b.jsxs("div", {
        className: "max-w-6xl mx-auto px-6",
        children: [
          b.jsxs("div", {
            className: "grid grid-cols-1 md:grid-cols-4 gap-10 mb-14",
            children: [
              b.jsxs("div", {
                className: "md:col-span-2",
                children: [
                  b.jsxs("div", {
                    className: "flex items-center gap-2.5 mb-4",
                    children: [
                      b.jsx("div", { className: "w-2 h-5 bg-[#2563EB]" }),
                      b.jsx("h2", {
                        className:
                          "font-head text-xl uppercase tracking-wider text-[var(--text-primary)] font-bold",
                        children: "API ZYHUKA",
                      }),
                    ],
                  }),
                  b.jsx("div", {
                    className:
                      "text-xs text-[var(--text-secondary)] font-body leading-relaxed mb-6 max-w-sm",
                    children:
                      "Membangun ekosistem developer yang lebih cepat, terbuka, dan inklusif.",
                  }),
                  b.jsx("div", {
                    className: "flex gap-2 flex-wrap",
                    children: [
                      {
                        href: "https://github.com/akaanakbaik/zyhuka-apiv2",
                        icon: b.jsx("svg", {
                          xmlns: "http://www.w3.org/2000/svg",
                          width: "16",
                          height: "16",
                          viewBox: "0 0 24 24",
                          fill: "currentColor",
                          children: b.jsx("path", {
                            d: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z",
                          }),
                        }),
                      },
                      {
                        href: "https://t.me/siputzxcom",
                        icon: b.jsx("svg", {
                          xmlns: "http://www.w3.org/2000/svg",
                          width: "16",
                          height: "16",
                          viewBox: "0 0 24 24",
                          fill: "currentColor",
                          children: b.jsx("path", {
                            d: "M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z",
                          }),
                        }),
                      },
                      {
                        href: "https://discord.gg/NCnWJ37RA",
                        icon: b.jsx("svg", {
                          xmlns: "http://www.w3.org/2000/svg",
                          width: "16",
                          height: "16",
                          viewBox: "0 0 24 24",
                          fill: "currentColor",
                          children: b.jsx("path", {
                            d: "M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057.1 18.08.11 18.1.127 18.115a19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z",
                          }),
                        }),
                      },
                      {
                        href: "https://chat.whatsapp.com/K0Thkzw0iLgE6oWxopBQmA?mode=gi_t",
                        icon: b.jsx("svg", {
                          xmlns: "http://www.w3.org/2000/svg",
                          width: "16",
                          height: "16",
                          viewBox: "0 0 24 24",
                          fill: "currentColor",
                          children: b.jsx("path", {
                            d: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z",
                          }),
                        }),
                      },
                    ].map((t, i) =>
                      b.jsx(
                        "a",
                        {
                          href: t.href,
                          target: "_blank",
                          rel: "noopener noreferrer",
                          className:
                            "w-8 h-8 border border-[var(--border-color)] flex items-center justify-center hover:border-[#2563EB] transition-colors text-[var(--text-muted)] hover:text-[#2563EB]",
                          children: t.icon,
                        },
                        i,
                      ),
                    ),
                  }),
                ],
              }),
              b.jsxs("div", {
                children: [
                  b.jsx("h3", {
                    className:
                      "font-body text-[10px] uppercase tracking-widest text-[var(--text-muted)] mb-5 font-semibold",
                    children: "Explore",
                  }),
                  b.jsxs("ul", {
                    className:
                      "space-y-2.5 text-xs text-[var(--text-secondary)] font-body uppercase tracking-wider",
                    children: [
                      b.jsx("li", {
                        children: b.jsx("button", {
                          onClick: () => n && n("home"),
                          className:
                            "hover:text-[var(--text-primary)] transition-colors",
                          children: "Home",
                        }),
                      }),
                      b.jsx("li", {
                        children: b.jsx("button", {
                          onClick: () => n && n("playground"),
                          className:
                            "hover:text-[var(--text-primary)] transition-colors",
                          children: "Playground",
                        }),
                      }),
                      b.jsx("li", {
                        children: b.jsx("button", {
                          onClick: () => n && n("monitor"),
                          className:
                            "hover:text-[var(--text-primary)] transition-colors",
                          children: "Monitor",
                        }),
                      }),
                      b.jsx("li", {
                        children: b.jsx("a", {
                          href: "https://status.siputzx.my.id/",
                          target: "_blank",
                          rel: "noopener noreferrer",
                          className:
                            "hover:text-[var(--text-primary)] transition-colors",
                          children: "Status",
                        }),
                      }),
                      b.jsx("li", {
                        children: b.jsx("a", {
                          href: "https://github.com/akaanakbaik/zyhuka-apiv2",
                          target: "_blank",
                          rel: "noopener noreferrer",
                          className:
                            "hover:text-[var(--text-primary)] transition-colors",
                          children: "GitHub",
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              b.jsxs("div", {
                children: [
                  b.jsx("h3", {
                    className:
                      "font-body text-[10px] uppercase tracking-widest text-[var(--text-muted)] mb-5 font-semibold",
                    children: "Community",
                  }),
                  b.jsxs("ul", {
                    className:
                      "space-y-2.5 text-xs text-[var(--text-secondary)] font-body",
                    children: [
                      b.jsx("li", {
                        children: b.jsx("a", {
                          href: "https://t.me/siputzxcom",
                          target: "_blank",
                          rel: "noopener noreferrer",
                          className:
                            "hover:text-[var(--text-primary)] transition-colors",
                          children: "Telegram",
                        }),
                      }),
                      b.jsx("li", {
                        children: b.jsx("a", {
                          href: "https://discord.gg/NCnWJ37RA",
                          target: "_blank",
                          rel: "noopener noreferrer",
                          className:
                            "hover:text-[var(--text-primary)] transition-colors",
                          children: "Discord",
                        }),
                      }),
                      b.jsx("li", {
                        children: b.jsx("a", {
                          href: "https://chat.whatsapp.com/K0Thkzw0iLgE6oWxopBQmA?mode=gi_t",
                          target: "_blank",
                          rel: "noopener noreferrer",
                          className:
                            "hover:text-[var(--text-primary)] transition-colors",
                          children: "WhatsApp Group",
                        }),
                      }),
                      b.jsx("li", {
                        children: b.jsx("a", {
                          href: "https://whatsapp.com/channel/0029Vaq9pCUEawdzlDYdYF3p",
                          target: "_blank",
                          rel: "noopener noreferrer",
                          className:
                            "hover:text-[var(--text-primary)] transition-colors",
                          children: "WhatsApp Channel",
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
              "border-t border-[var(--border-color)] pt-5 flex flex-col md:flex-row justify-between items-center text-[var(--text-muted)] text-[10px] font-mono gap-4 uppercase tracking-wider",
            children: [
              b.jsx("p", { children: "© 2026 API ZYHUKA." }),
              b.jsxs("div", {
                className: "flex items-center gap-4",
                children: [
                  b.jsx("button", {
                    onClick: () => n && n("privacy"),
                    className:
                      "hover:text-[var(--text-primary)] transition-colors",
                    children: "Privacy",
                  }),
                  b.jsx("span", {
                    className: "text-[var(--border-color)]",
                    children: "|",
                  }),
                  b.jsx("button", {
                    onClick: () => n && n("terms"),
                    className:
                      "hover:text-[var(--text-primary)] transition-colors",
                    children: "Terms",
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    }),
  b1 = ({ setPage: n }) => b.jsx(ClayHero, { setPage: n }),
  x1 = () => {
    const n = [
      {
        title: "Zero Cost",
        desc: "Tidak ada biaya tersembunyi. Proyek komunitas developer Indonesia gratis selamanya.",
      },
      {
        title: "No Auth",
        desc: "Langsung tembak endpoint, dapatkan data. Tanpa registrasi, tanpa API key.",
      },
      {
        title: "Global Network",
        desc: "Infrastruktur edge-cached dengan failover otomatis untuk latency minimal.",
      },
      {
        title: "99.9% Uptime",
        desc: "Monitoring real-time 24/7 dengan node redundancy di multiple lokasi.",
      },
    ];
    return b.jsx("section", {
      className:
        "py-24 px-6 bg-[var(--bg-primary)] border-t border-[var(--border-color)]",
      "aria-label": "Why choose us",
      children: b.jsx("div", {
        className: "max-w-6xl mx-auto",
        children: b.jsxs("div", {
          className: "flex flex-col lg:flex-row gap-16 lg:gap-24",
          children: [
            b.jsxs("div", {
              className: "w-full lg:w-[35%] shrink-0",
              children: [
                b.jsxs("h2", {
                  className:
                    "font-head text-4xl md:text-5xl leading-[1.05] text-[var(--text-primary)] mb-6 font-bold",
                  children: [
                    "Kenapa Harus",
                    b.jsx("br", {}),
                    b.jsx("span", {
                      className: "text-[#2563EB]",
                      children: "API ZYHUKA?",
                    }),
                  ],
                }),
                b.jsx("p", {
                  className:
                    "text-sm text-[var(--text-secondary)] font-body leading-relaxed mb-4",
                  children:
                    "Birokrasi API menghambat inovasi. Kunci API, limitasi harian, dan paywall adalah musuh kreativitas developer.",
                }),
                b.jsx("p", {
                  className:
                    "text-sm text-[var(--text-primary)]/70 font-body leading-relaxed",
                  children:
                    "Kami menghadirkan infrastruktur publik yang tangguh, anonim, dan sepenuhnya terbuka untuk siapa saja.",
                }),
              ],
            }),
            b.jsx("div", {
              className: "flex-1",
              children: b.jsx("div", {
                className: "grid grid-cols-1 sm:grid-cols-2 gap-3",
                role: "list",
                children: n.map((t, i) =>
                  b.jsxs(
                    "div",
                    {
                      className:
                        "p-5 bg-[var(--bg-secondary)] border border-[var(--border-color)]",
                      role: "listitem",
                      children: [
                        b.jsxs("div", {
                          className: "flex items-center gap-3 mb-2",
                          children: [
                            b.jsx("div", { className: "w-2 h-2 bg-[#2563EB]" }),
                            b.jsx("h3", {
                              className:
                                "font-head text-lg text-[var(--text-primary)] font-medium",
                              children: t.title,
                            }),
                          ],
                        }),
                        b.jsx("p", {
                          className:
                            "text-xs text-[var(--text-secondary)] font-body leading-relaxed pl-5",
                          children: t.desc,
                        }),
                      ],
                    },
                    i,
                  ),
                ),
              }),
            }),
          ],
        }),
      }),
    });
  },
  y1 = () => {
    const [n, t] = at.useState(null),
      i = [
        {
          q: "Benar-benar gratis?",
          tag: "Confirmed",
          a: "Tidak ada biaya tersembunyi. Proyek ini didedikasikan untuk komunitas developer Indonesia. Personal, open source, maupun komersial - semuanya gratis.",
        },
        {
          q: "Butuh API Key?",
          tag: "Status: Disabled",
          a: "Tidak perlu. Langsung tembak endpoint, dapatkan data. Kami percaya API key hanya menghambat inovasi developer.",
        },
        {
          q: "Cara pakai?",
          tag: "Playground",
          a: "Semua endpoint didokumentasikan dengan contoh request dan response JSON lengkap. Buka Playground untuk mencoba langsung dari browser.",
        },
        {
          q: "Ada batasan request?",
          tag: "Fair Use",
          a: "Tidak ada batasan ketat. Rate limiting berbasis IP diterapkan untuk mencegah penyalahgunaan DDoS atau spam.",
        },
        {
          q: "API nya amankah?",
          tag: "TLS 1.3",
          a: "Semua komunikasi dienkripsi SSL/TLS. Tidak ada log, tidak ada tracking, tidak ada pengumpulan data pribadi.",
        },
      ];
    return b.jsx("section", {
      className:
        "py-24 px-6 bg-[var(--bg-primary)] border-t border-[var(--border-color)]",
      "aria-label": "Frequently asked questions",
      children: b.jsxs("div", {
        className: "max-w-3xl mx-auto",
        children: [
          b.jsxs("div", {
            className: "mb-12",
            children: [
              b.jsxs("h2", {
                className:
                  "font-head text-4xl md:text-5xl leading-[1.05] text-[var(--text-primary)] mb-3 font-bold",
                children: [
                  "Q",
                  b.jsx("span", { className: "text-[#2563EB]", children: "&" }),
                  "A",
                ],
              }),
              b.jsx("p", {
                className: "text-sm text-[var(--text-secondary)] font-body",
                children: "Pertanyaan yang sering diajukan.",
              }),
            ],
          }),
          b.jsx("div", {
            className: "space-y-2",
            children: i.map((a, o) => {
              const r = n === o;
              return b.jsx(
                "div",
                {
                  children: b.jsxs("button", {
                    className: `w-full text-left p-4 bg-[var(--bg-secondary)] border border-[var(--border-color)] transition-all ${r ? "border-[#2563EB]/40" : ""}`,
                    onClick: () => t(r ? null : o),
                    "aria-expanded": r,
                    children: [
                      b.jsxs("div", {
                        className: "flex items-center justify-between gap-4",
                        children: [
                          b.jsx("h3", {
                            className:
                              "font-head text-base text-[var(--text-primary)] font-medium",
                            children: a.q,
                          }),
                          b.jsx("span", {
                            className: `font-mono text-sm transition-transform shrink-0 ${r ? "text-[#2563EB] rotate-45" : "text-[var(--text-muted)]"}`,
                            children: "+",
                          }),
                        ],
                      }),
                      b.jsx("div", {
                        className: `grid transition-all duration-200 ${r ? "grid-rows-[1fr] mt-3" : "grid-rows-[0fr]"}`,
                        children: b.jsx("div", {
                          className: "overflow-hidden",
                          children: b.jsxs("div", {
                            className:
                              "border-t border-[var(--border-color)] pt-3",
                            children: [
                              b.jsx("p", {
                                className:
                                  "font-mono text-[10px] text-[var(--text-muted)] mb-1.5 uppercase tracking-wider",
                                children: a.tag,
                              }),
                              b.jsx("p", {
                                className:
                                  "text-sm text-[var(--text-secondary)] font-body leading-relaxed",
                                children: a.a,
                              }),
                            ],
                          }),
                        }),
                      }),
                    ],
                  }),
                },
                o,
              );
            }),
          }),
        ],
      }),
    });
  };
function w1({ setPage: n }) {
  return b.jsxs(b.Fragment, {
    children: [b.jsx(b1, { setPage: n }), b.jsx(x1, {}), b.jsx(y1, {})],
  });
}
const hb = () =>
    b.jsx("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      viewBox: "0 0 24 24",
      strokeWidth: "1.5",
      stroke: "currentColor",
      className: "w-4 h-4",
      children: b.jsx("path", {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184",
      }),
    }),
  mb = () =>
    b.jsx("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      viewBox: "0 0 24 24",
      strokeWidth: "1.5",
      stroke: "currentColor",
      className: "w-4 h-4 text-green-500",
      children: b.jsx("path", {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M4.5 12.75l6 6 9-13.5",
      }),
    }),
  hS = ({ path: n, data: t, baseUrl: i }) => {
    var ft, kt;
    const a = Object.keys(t).filter((Q) => Q === "get" || Q === "post"),
      [o, r] = at.useState(!1),
      [u, d] = at.useState(a[0]),
      [h, g] = at.useState({}),
      [p, y] = at.useState(null),
      [v, _] = at.useState({}),
      [S, M] = at.useState(!1),
      [k, j] = at.useState(""),
      [z, U] = at.useState(null),
      [q, R] = at.useState(0),
      [P, X] = at.useState("0 B"),
      [G, W] = at.useState("CURL"),
      [lt, it] = at.useState(!1),
      $ = t[u],
      Vt = (Q) => {
        if (!(Q != null && Q.requestBody)) return {};
        const J = Q.requestBody.content;
        let mt;
        if (
          (J["multipart/form-data"]
            ? (mt = J["multipart/form-data"].schema)
            : J["application/json"] && (mt = J["application/json"].schema),
          !mt)
        )
          return {};
        if (mt.anyOf && mt.anyOf.length > 0) {
          const vt = mt.anyOf.find((_e) => _e.properties);
          if (vt && vt.properties) return vt.properties;
        }
        return mt.properties || {};
      },
      Yt = !!(
        (ft = $ == null ? void 0 : $.requestBody) != null &&
        ft.content["multipart/form-data"]
      );
    at.useEffect(() => {
      const Q = {};
      if (u === "get" && $ != null && $.parameters)
        $.parameters.forEach((J) => {
          var mt;
          J.example !== void 0
            ? (Q[J.name] = J.example)
            : J.schema.example !== void 0
              ? (Q[J.name] = J.schema.example)
              : ((mt = J.schema) == null ? void 0 : mt.default) !== void 0 &&
                (Q[J.name] = J.schema.default);
        });
      else if (u === "post") {
        const J = Vt($);
        Object.entries(J).forEach(([mt, vt]) => {
          vt.example !== void 0
            ? (Q[mt] = vt.example)
            : vt.default !== void 0 && (Q[mt] = vt.default);
        });
      }
      (g(Q), y(null), U(null), _({}), it(!1), W("CURL"));
    }, [u, $]);
    const ut = (Q, J) => {
        g((mt) => ({ ...mt, [Q]: J }));
      },
      D = (Q, J) => {
        g((mt) => ({ ...mt, [Q]: J }));
      },
      F = () => {
        let Q = `${i}${n}`,
          J = `curl -X ${u.toUpperCase()} "${Q}"`;
        if (u === "get") {
          const mt = new URLSearchParams();
          Object.entries(h).forEach(([_e, Re]) => {
            Re && mt.append(_e, String(Re));
          });
          const vt = mt.toString();
          vt && (J = `curl -X GET "${Q}?${vt}"`);
        } else
          Yt
            ? Object.entries(h).forEach(([mt, vt]) => {
                vt instanceof File
                  ? (J += ` \\
 -F "${mt}=@${vt.name}"`)
                  : vt != null &&
                    vt !== "" &&
                    (J += ` \\
 -F "${mt}=${vt}"`);
              })
            : ((J += ` \\
 -H "Content-Type: application/json"`),
              Object.keys(h).length > 0 &&
                (J += ` \\
 -d '${JSON.stringify(h)}'`));
        return J;
      },
      I = async () => {
        (M(!0), y(null), U(null), _({}), it(!1), W("PREVIEW"));
        const Q = performance.now();
        try {
          let J = `${i}${n}`;
          const mt = { method: u.toUpperCase(), headers: {} };
          if (u === "get") {
            const Kt = new URLSearchParams();
            Object.entries(h).forEach(([un, Hn]) => {
              Hn && Kt.append(un, String(Hn));
            });
            const ge = Kt.toString();
            ge && (J += `?${ge}`);
          } else if (Yt) {
            const Kt = new FormData();
            (Object.entries(h).forEach(([ge, un]) => {
              un != null && Kt.append(ge, un);
            }),
              (mt.body = Kt));
          } else
            ((mt.headers = { "Content-Type": "application/json" }),
              (mt.body = JSON.stringify(h)));
          const vt = await fetch(J, mt),
            _e = performance.now();
          (R(Math.round(_e - Q)), U(vt.status));
          const Re = {};
          (vt.headers.forEach((Kt, ge) => (Re[ge] = Kt)), _(Re));
          const Qt = vt.headers.get("content-type");
          j(Qt || "");
          const Jt = vt.headers.get("content-length");
          if (
            (X(Jt ? `${(parseInt(Jt) / 1024).toFixed(2)} KB` : "Unknown"),
            Qt != null && Qt.includes("application/json"))
          ) {
            const Kt = await vt.json();
            y(Kt);
          } else if (
            (Qt != null && Qt.includes("image/")) ||
            (Qt != null && Qt.includes("audio/")) ||
            (Qt != null && Qt.includes("video/"))
          ) {
            const Kt = await vt.blob();
            Jt || X(`${(Kt.size / 1024).toFixed(2)} KB`);
            const ge = URL.createObjectURL(Kt);
            y(ge);
          } else {
            const Kt = await vt.text();
            (Jt || X(`${(new Blob([Kt]).size / 1024).toFixed(2)} KB`), y(Kt));
          }
        } catch (J) {
          (console.error(J),
            y({ error: "Network Error / CORS Blocked" }),
            U(0));
        } finally {
          M(!1);
        }
      },
      ct = (Q) => {
        (navigator.clipboard.writeText(Q),
          it(!0),
          setTimeout(() => it(!1), 2e3));
      },
      pt = (Q, J, mt = !1) => {
        var Qt;
        const vt = J.type === "boolean",
          _e = J.enum && J.enum.length > 0,
          Re = J.format === "binary";
        return b.jsxs(
          "div",
          {
            className: "flex flex-col",
            children: [
              b.jsx("div", {
                className: "flex justify-between items-baseline mb-1",
                children: b.jsxs("label", {
                  className:
                    "font-mono text-[9px] text-[var(--text-muted)] uppercase tracking-widest font-bold",
                  children: [
                    Q,
                    " ",
                    mt &&
                      b.jsx("span", {
                        className: "text-zyhuka-red",
                        children: "*",
                      }),
                  ],
                }),
              }),
              Re
                ? b.jsxs("div", {
                    className: "relative",
                    children: [
                      b.jsx("input", {
                        type: "file",
                        id: `file-${Q}-${n}`,
                        onChange: (Jt) => {
                          var Kt;
                          (D(
                            Q,
                            ((Kt = Jt.target.files) == null ? void 0 : Kt[0]) ||
                              null,
                          ),
                            (Jt.target.value = ""));
                        },
                        className: "hidden",
                      }),
                      b.jsxs("label", {
                        htmlFor: `file-${Q}-${n}`,
                        className:
                          "flex items-center justify-between w-full h-8 bg-zyhuka-bg border border-zyhuka-border px-3 cursor-pointer hover:border-zyhuka-red group transition-colors",
                        children: [
                          b.jsx("span", {
                            className: `text-[10px] font-mono truncate ${h[Q] ? "text-[var(--text-primary)]" : "text-[var(--text-secondary)]"}`,
                            children:
                              h[Q] instanceof File
                                ? h[Q].name
                                : "SELECT FILE...",
                          }),
                          b.jsx("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            fill: "none",
                            viewBox: "0 0 24 24",
                            strokeWidth: "1.5",
                            stroke: "currentColor",
                            className:
                              "w-3 h-3 text-[var(--text-muted)] group-hover:text-[var(--text-primary)]",
                            children: b.jsx("path", {
                              strokeLinecap: "round",
                              strokeLinejoin: "round",
                              d: "M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5",
                            }),
                          }),
                        ],
                      }),
                    ],
                  })
                : vt
                  ? b.jsxs("div", {
                      className:
                        "flex h-8 bg-zyhuka-bg border border-zyhuka-border",
                      children: [
                        b.jsx("button", {
                          onClick: () => ut(Q, !0),
                          className: `flex-1 text-[9px] uppercase font-bold transition-colors ${h[Q] === !0 ? "bg-zyhuka-red text-[var(--text-primary)]" : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"}`,
                          children: "TRUE",
                        }),
                        b.jsx("div", { className: "w-px bg-gray-800" }),
                        b.jsx("button", {
                          onClick: () => ut(Q, !1),
                          className: `flex-1 text-[9px] uppercase font-bold transition-colors ${h[Q] === !1 ? "bg-zyhuka-red text-[var(--text-primary)]" : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"}`,
                          children: "FALSE",
                        }),
                      ],
                    })
                  : _e
                    ? b.jsxs("div", {
                        className: "relative",
                        children: [
                          b.jsxs("select", {
                            className:
                              "w-full h-8 bg-zyhuka-bg border border-zyhuka-border text-[var(--text-secondary)] px-2 text-[10px] focus:border-zyhuka-red outline-none appearance-none font-mono rounded-none",
                            value: h[Q] || "",
                            onChange: (Jt) => ut(Q, Jt.target.value),
                            children: [
                              b.jsx("option", {
                                value: "",
                                children: "Select...",
                              }),
                              (Qt = J.enum) == null
                                ? void 0
                                : Qt.map((Jt) =>
                                    b.jsx(
                                      "option",
                                      { value: Jt, children: Jt },
                                      Jt,
                                    ),
                                  ),
                            ],
                          }),
                          b.jsx("div", {
                            className:
                              "absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none text-[var(--text-secondary)] text-[8px]",
                            children: "▼",
                          }),
                        ],
                      })
                    : b.jsx("input", {
                        type:
                          J.type === "integer" || J.type === "number"
                            ? "number"
                            : "text",
                        className:
                          "w-full h-8 bg-zyhuka-bg border border-zyhuka-border text-[var(--text-secondary)] px-3 text-[11px] focus:border-zyhuka-red outline-none font-mono placeholder-[var(--text-muted)] transition-colors rounded-none",
                        placeholder: J.example ? `e.g. ${J.example}` : "...",
                        value: h[Q] || "",
                        onChange: (Jt) => ut(Q, Jt.target.value),
                      }),
            ],
          },
          Q,
        );
      },
      Xt = u === "post" ? Vt($) : {},
      Mt =
        (u === "get" &&
          ($ == null ? void 0 : $.parameters) &&
          $.parameters.length > 0) ||
        (u === "post" && Object.keys(Xt).length > 0);
    return b.jsxs("div", {
      className:
        "border-b border-[var(--border-color)] bg-zyhuka-card transition-all duration-300 group",
      children: [
        b.jsxs("button", {
          onClick: () => r(!o),
          className: `w-full flex items-center justify-between p-3 text-left transition-colors ${o ? "bg-zyhuka-border/20" : "hover:bg-zyhuka-card"}`,
          children: [
            b.jsxs("div", {
              className: "flex items-center gap-4 w-full overflow-hidden",
              children: [
                b.jsx("span", {
                  className: `shrink-0 font-mono text-[10px] font-bold w-14 text-center py-1 border uppercase tracking-wider ${u === "get" ? "border-blue-900/40 text-blue-500 bg-blue-900/10" : "border-green-900/40 text-green-500 bg-green-900/10"}`,
                  children: u,
                }),
                b.jsxs("div", {
                  className: "flex items-center gap-3 overflow-hidden",
                  children: [
                    b.jsx("span", {
                      className:
                        "font-mono text-[9px] text-[var(--text-secondary)]",
                      children: n,
                    }),
                    b.jsx("span", {
                      className: "hidden md:inline-block w-px h-3 bg-gray-800",
                    }),
                    b.jsx("span", {
                      className:
                        "text-[9px] text-[var(--text-muted)] uppercase tracking-wide truncate font-body",
                      children: $ == null ? void 0 : $.summary,
                    }),
                  ],
                }),
              ],
            }),
            b.jsx("div", {
              className: "text-[var(--text-secondary)] shrink-0 pl-4",
              children: o
                ? b.jsx("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    strokeWidth: "2",
                    stroke: "currentColor",
                    className: "w-3 h-3 text-zyhuka-red",
                    children: b.jsx("path", {
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      d: "M4.5 15.75l7.5-7.5 7.5 7.5",
                    }),
                  })
                : b.jsx("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    strokeWidth: "2",
                    stroke: "currentColor",
                    className: "w-3 h-3",
                    children: b.jsx("path", {
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      d: "M19.5 8.25l-7.5 7.5-7.5-7.5",
                    }),
                  }),
            }),
          ],
        }),
        o &&
          b.jsxs("div", {
            className:
              "border-t border-zyhuka-border bg-zyhuka-bg fade-in p-4 md:p-6",
            children: [
              b.jsx("p", {
                className:
                  "text-[11px] text-[var(--text-muted)] mb-6 font-body max-w-3xl leading-relaxed",
                children:
                  ($ == null ? void 0 : $.description) ||
                  "No additional description provided for this endpoint.",
              }),
              a.length > 1 &&
                b.jsx("div", {
                  className: "mb-6 flex gap-2",
                  children: a.map((Q) =>
                    b.jsx(
                      "button",
                      {
                        onClick: () => d(Q),
                        className: `px-3 py-1 text-[9px] font-bold uppercase tracking-wider border ${u === Q ? "bg-zyhuka-red border-zyhuka-red text-[var(--text-primary)]" : "border-[var(--border-color)] text-[var(--text-secondary)] hover:text-[var(--text-muted)]"}`,
                        children: Q,
                      },
                      Q,
                    ),
                  ),
                }),
              b.jsxs("div", {
                className: "mb-6",
                children: [
                  b.jsxs("div", {
                    className:
                      "flex items-center justify-between border-b border-[var(--border-color)] pb-1 mb-3",
                    children: [
                      b.jsx("h4", {
                        className:
                          "text-[10px] text-[var(--text-primary)] font-bold uppercase tracking-widest",
                        children: Yt
                          ? "Form Data (Multipart)"
                          : "Request Parameters",
                      }),
                      Yt &&
                        b.jsx("span", {
                          className:
                            "text-[9px] font-mono text-zyhuka-red uppercase",
                          children: "File Upload Supported",
                        }),
                    ],
                  }),
                  b.jsxs("div", {
                    className:
                      "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-4",
                    children: [
                      u === "get" &&
                        ((kt = $ == null ? void 0 : $.parameters) == null
                          ? void 0
                          : kt.map(
                              (Q) =>
                                Q.in === "query" &&
                                pt(
                                  Q.name,
                                  Q.schema || { type: "string" },
                                  Q.required,
                                ),
                            )),
                      u === "post" &&
                        Object.entries(Xt).map(([Q, J]) => {
                          var mt;
                          return pt(
                            Q,
                            J,
                            (mt = $ == null ? void 0 : $.requestBody) == null
                              ? void 0
                              : mt.required,
                          );
                        }),
                    ],
                  }),
                  !Mt &&
                    b.jsx("div", {
                      className:
                        "text-[10px] text-[var(--text-secondary)] italic",
                      children: "No parameters required.",
                    }),
                ],
              }),
              b.jsxs("div", {
                className: "flex flex-col md:flex-row gap-3 mb-6",
                children: [
                  b.jsx("button", {
                    onClick: I,
                    disabled: S,
                    className:
                      "flex-1 bg-zyhuka-red hover:bg-[#2563EB]/80 text-[var(--text-primary)] text-[10px] font-bold py-3 uppercase tracking-widest transition-all disabled:opacity-50 disabled:cursor-not-allowed border border-zyhuka-red hover:shadow-[0_0_15px_rgba(37,99,235,0.3)]",
                    children: S ? "EXECUTING..." : "EXECUTE REQUEST",
                  }),
                  b.jsx("button", {
                    onClick: () => {
                      (y(null), U(null), g({}));
                    },
                    className:
                      "px-6 border border-[var(--border-color)] text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:border-[var(--text-secondary)] text-[10px] font-bold uppercase tracking-widest transition-all",
                    children: "Clear",
                  }),
                ],
              }),
              (p || S || z) &&
                b.jsxs("div", {
                  className:
                    "border border-zyhuka-border bg-zyhuka-bg fade-in relative",
                  children: [
                    b.jsxs("div", {
                      className:
                        "flex items-center justify-between bg-zyhuka-card border-b border-zyhuka-border px-4 py-2",
                      children: [
                        b.jsx("div", {
                          className: "flex gap-4",
                          children: ["PREVIEW", "HEADERS", "CURL"].map((Q) =>
                            b.jsx(
                              "button",
                              {
                                onClick: () => W(Q),
                                className: `text-[9px] font-bold uppercase tracking-widest transition-colors ${G === Q ? "text-zyhuka-red" : "text-[var(--text-secondary)] hover:text-[var(--text-muted)]"}`,
                                children: Q,
                              },
                              Q,
                            ),
                          ),
                        }),
                        b.jsxs("div", {
                          className: "flex items-center gap-3",
                          children: [
                            G === "PREVIEW" &&
                              p &&
                              k.includes("application/json") &&
                              b.jsx("button", {
                                onClick: () => ct(JSON.stringify(p, null, 2)),
                                className:
                                  "p-1.5 border border-[var(--border-color)] text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:border-zyhuka-red transition-all",
                                title: "Copy JSON",
                                children: lt ? b.jsx(mb, {}) : b.jsx(hb, {}),
                              }),
                            G === "CURL" &&
                              b.jsx("button", {
                                onClick: () => ct(F()),
                                className:
                                  "p-1.5 border border-[var(--border-color)] text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:border-zyhuka-red transition-all",
                                title: "Copy cURL",
                                children: lt ? b.jsx(mb, {}) : b.jsx(hb, {}),
                              }),
                            z &&
                              b.jsxs("span", {
                                className: `text-[10px] font-mono font-bold px-1.5 ${z >= 200 && z < 300 ? "text-green-500" : "text-red-500"}`,
                                children: [z, " ", z === 200 ? "OK" : "ERR"],
                              }),
                            q > 0 &&
                              b.jsxs("span", {
                                className:
                                  "text-[10px] font-mono text-[var(--text-secondary)]",
                                children: [q, "ms"],
                              }),
                          ],
                        }),
                      ],
                    }),
                    b.jsx("div", {
                      className:
                        "p-4 overflow-x-auto min-h-[100px] max-h-[500px] overflow-y-auto custom-scrollbar",
                      children: S
                        ? b.jsxs("div", {
                            className: "flex items-center justify-center py-8",
                            children: [
                              b.jsx("span", {
                                className:
                                  "w-1.5 h-1.5 bg-zyhuka-red animate-pulse mr-2",
                              }),
                              b.jsx("span", {
                                className:
                                  "text-[10px] font-mono text-[var(--text-muted)] uppercase tracking-widest",
                                children: "Processing...",
                              }),
                            ],
                          })
                        : b.jsxs(b.Fragment, {
                            children: [
                              G === "CURL" &&
                                b.jsx("pre", {
                                  className:
                                    "text-[10px] font-mono text-[var(--text-muted)] whitespace-pre-wrap break-all",
                                  children: F(),
                                }),
                              G === "PREVIEW" &&
                                b.jsx(b.Fragment, {
                                  children: k.includes("application/json")
                                    ? b.jsx("pre", {
                                        className:
                                          "text-[10px] font-mono text-green-500 whitespace-pre",
                                        children: JSON.stringify(p, null, 2),
                                      })
                                    : k.includes("image/")
                                      ? b.jsx("div", {
                                          className:
                                            "flex justify-center bg-zyhuka-card p-4 border border-zyhuka-border",
                                          children: b.jsx("img", {
                                            src: p,
                                            alt: "Result",
                                            className:
                                              "max-h-[300px] object-contain",
                                          }),
                                        })
                                      : b.jsx("pre", {
                                          className:
                                            "text-[10px] font-mono text-[var(--text-secondary)] whitespace-pre-wrap",
                                          children: String(p),
                                        }),
                                }),
                              G === "HEADERS" &&
                                b.jsx("div", {
                                  className: "space-y-1",
                                  children: Object.entries(v).map(([Q, J]) =>
                                    b.jsxs(
                                      "div",
                                      {
                                        className:
                                          "flex gap-2 text-[10px] font-mono border-b border-[var(--border-color)] pb-1",
                                        children: [
                                          b.jsxs("span", {
                                            className:
                                              "text-zyhuka-red font-bold uppercase min-w-[100px]",
                                            children: [Q, ":"],
                                          }),
                                          b.jsx("span", {
                                            className:
                                              "text-[var(--text-muted)] break-all",
                                            children: J,
                                          }),
                                        ],
                                      },
                                      Q,
                                    ),
                                  ),
                                }),
                            ],
                          }),
                    }),
                  ],
                }),
            ],
          }),
      ],
    });
  },
  mS = () => {
    const [n, t] = at.useState(null),
      [i, a] = at.useState(""),
      [o, r] = at.useState(!0),
      [u, d] = at.useState(!1);
    at.useEffect(() => {
      (async () => {
        try {
          const p = await loadCatalog();
          if (!p.ok) throw new Error("Failed to load spec");
          const y = await p.json();
          t(y);
        } catch (p) {
          (console.error(p), d(!0));
        } finally {
          r(!1);
        }
      })();
    }, []);
    const deferredQuery = at.useDeferredValue(i);
    const h = at.useMemo(() => {
      if (!n) return {};
      const g = {},
        p = deferredQuery.toLowerCase();
      return (
        Object.entries(n.paths).forEach(([y, v]) => {
          var z, U, q, R, P, X;
          const S = (((z = v.get) == null ? void 0 : z.tags) ||
              ((U = v.post) == null ? void 0 : U.tags) || [
                "Uncategorized",
              ])[0].toUpperCase(),
            M = (
              ((q = v.get) == null ? void 0 : q.summary) ||
              ((R = v.post) == null ? void 0 : R.summary) ||
              ""
            ).toLowerCase(),
            k = (
              ((P = v.get) == null ? void 0 : P.description) ||
              ((X = v.post) == null ? void 0 : X.description) ||
              ""
            ).toLowerCase();
          (y.toLowerCase().includes(p) ||
            M.includes(p) ||
            k.includes(p) ||
            S.toLowerCase().includes(p)) &&
            (g[S] || (g[S] = []), g[S].push({ path: y, data: v }));
        }),
        g
      );
    }, [n, deferredQuery]);
    return b.jsx("div", {
      className: "pt-28 pb-24 px-4 min-h-screen bg-zyhuka-bg",
      children: b.jsxs("div", {
        className: "max-w-5xl mx-auto",
        children: [
          b.jsxs("div", {
            className: "text-center mb-10",
            "data-aos": "fade-down",
            children: [
              b.jsxs("h1", {
                className:
                  "font-head text-4xl md:text-5xl text-[var(--text-primary)] mb-3 uppercase tracking-tighter",
                children: [
                  "API ",
                  b.jsx("span", {
                    className: "text-zyhuka-red",
                    children: "CONSOLE",
                  }),
                  " ",
                  b.jsx("span", {
                    className: "text-[var(--text-muted)] text-2xl align-top",
                    children: "V2",
                  }),
                ],
              }),
              b.jsx("p", {
                className:
                  "text-xs text-zyhuka-muted font-mono tracking-widest uppercase",
                children: "Direct Endpoint Execution Environment",
              }),
            ],
          }),
          b.jsx("div", {
            className: "sticky top-24 z-30 mb-8",
            "data-aos": "fade-up",
            children: b.jsxs("div", {
              className:
                "bg-zyhuka-card border border-zyhuka-border flex items-center p-1 group focus-within:border-zyhuka-red transition-colors shadow-2xl",
              children: [
                b.jsx("div", {
                  className: "p-3 text-[var(--text-secondary)]",
                  children: b.jsx("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    strokeWidth: "1.5",
                    stroke: "currentColor",
                    className:
                      "w-4 h-4 group-focus-within:text-[var(--text-primary)] transition-colors",
                    children: b.jsx("path", {
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      d: "M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z",
                    }),
                  }),
                }),
                b.jsx("input", {
                  type: "text",
                  placeholder: "FILTER ENDPOINTS...",
                  className:
                    "w-full bg-transparent text-[var(--text-primary)] text-xs font-mono placeholder-gray-700 outline-none h-10 uppercase tracking-widest",
                  value: i,
                  "aria-label": "Cari endpoint API",
                  onChange: (g) => a(g.target.value),
                }),
                i &&
                  b.jsx("button", {
                    onClick: () => a(""),
                    className:
                      "p-3 text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors",
                    children: b.jsx("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      fill: "none",
                      viewBox: "0 0 24 24",
                      strokeWidth: "1.5",
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
          }),
          o
            ? b.jsxs("div", {
                className: "flex flex-col items-center justify-center py-24",
                children: [
                  b.jsx("div", { className: "spinner mb-8" }),
                  b.jsx("span", {
                    className:
                      "font-mono text-[10px] text-zyhuka-muted uppercase tracking-widest",
                    children: "Connecting to V2 Server...",
                  }),
                ],
              })
            : u
              ? b.jsxs("div", {
                  className:
                    "max-w-md mx-auto text-center py-12 border border-red-900/30 bg-red-900/5",
                  children: [
                    b.jsx("p", {
                      className:
                        "text-red-500 font-mono text-xs uppercase tracking-widest mb-2 font-bold",
                      children: "Connection Failed",
                    }),
                    b.jsx("button", {
                      onClick: () => window.location.reload(),
                      className:
                        "text-[10px] text-[var(--text-muted)] hover:text-[var(--text-primary)] underline uppercase",
                      children: "Retry",
                    }),
                  ],
                })
              : b.jsx("div", {
                  className: "space-y-8 pb-20",
                  children:
                    Object.keys(h).length > 0
                      ? Object.keys(h)
                          .sort()
                          .map((g) =>
                            b.jsxs(
                              "div",
                              {
                                className: "fade-in clay-endpoint-group",
                                children: [
                                  b.jsxs("div", {
                                    className:
                                      "flex items-center justify-between mb-2 border-l-2 border-zyhuka-red pl-4 bg-gradient-to-r from-zyhuka-card to-transparent py-2",
                                    children: [
                                      b.jsx("h2", {
                                        className:
                                          "text-sm font-head text-[var(--text-primary)] uppercase tracking-tighter",
                                        children: g,
                                      }),
                                      b.jsxs("span", {
                                        className:
                                          "text-[9px] font-mono text-[var(--text-muted)] pr-4",
                                        children: [h[g].length, " ENDPOINTS"],
                                      }),
                                    ],
                                  }),
                                  b.jsx("div", {
                                    className:
                                      "flex flex-col border border-[var(--border-color)] border-b-0",
                                    children: h[g].map((p, y) => {
                                      var v;
                                      return b.jsx(
                                        MemoEndpoint,
                                        {
                                          path: p.path,
                                          data: p.data,
                                          baseUrl:
                                            ((v =
                                              n == null
                                                ? void 0
                                                : n.servers[0]) == null
                                              ? void 0
                                              : v.url) || "",
                                        },
                                        p.path,
                                      );
                                    }),
                                  }),
                                ],
                              },
                              g,
                            ),
                          )
                      : b.jsx("div", {
                          className: "text-center py-24 opacity-30",
                          children: b.jsx("div", {
                            className:
                              "text-[var(--text-muted)] font-mono text-xs uppercase tracking-widest",
                            children: "No matching endpoints",
                          }),
                        }),
                }),
        ],
      }),
    });
  };
const MemoEndpoint = at.memo(hS);
function gS() {
  return b.jsx(mS, {});
}
class MonitorLoadBoundary extends at.Component {
  constructor(props) {
    super(props);
    this.state = { failed: false };
  }
  static getDerivedStateFromError() {
    return { failed: true };
  }
  render() {
    return this.state.failed
      ? b.jsxs("div", {
          className: "clay-route-loading",
          role: "alert",
          children: [
            b.jsx("p", {
              children:
                "Monitor belum bisa dimuat. Periksa koneksi lalu coba lagi.",
            }),
            b.jsx("button", {
              className: "clay-secondary",
              onClick: () => window.location.reload(),
              children: "Muat ulang",
            }),
          ],
        })
      : this.props.children;
  }
}
const LazyMonitor = at.lazy(() => import("./monitor.js"));
function jk() {
  return b.jsx(MonitorLoadBoundary, {
    children: b.jsx(at.Suspense, {
      fallback: b.jsxs("div", {
        className: "clay-route-loading",
        role: "status",
        children: [
          b.jsx("div", { className: "spinner", "aria-hidden": true }),
          b.jsx("p", { children: "Menyiapkan Monitor…" }),
        ],
      }),
      children: b.jsx(LazyMonitor, {}),
    }),
  });
}

const Tk = () =>
  b.jsx("div", {
    className: "pt-32 pb-24 px-6 min-h-screen bg-[var(--bg-primary)]",
    children: b.jsxs("div", {
      className: "max-w-4xl mx-auto",
      children: [
        b.jsxs("div", {
          className: "mb-12 border-l-4 border-[#2563EB] pl-6",
          children: [
            b.jsxs("h1", {
              className:
                "font-head text-4xl md:text-6xl text-[var(--text-primary)] uppercase tracking-tighter mb-2",
              children: [
                "PRIVACY ",
                b.jsx("span", {
                  className: "text-[#2563EB]",
                  children: "POLICY",
                }),
              ],
            }),
            b.jsx("p", {
              className:
                "font-mono text-xs text-[var(--text-secondary)] uppercase tracking-widest",
              children: "LAST UPDATED: OCTOBER 2026",
            }),
          ],
        }),
        b.jsx("div", {
          className:
            "space-y-12 font-body text-[var(--text-primary)] leading-relaxed",
          children: [
            {
              title: "1. PENGUMPULAN DATA",
              content: b.jsxs(b.Fragment, {
                children: [
                  b.jsxs("p", {
                    className: "mb-4",
                    children: [
                      "API ZYHUKA beroperasi dengan prinsip ",
                      b.jsx("strong", { children: "No-Logs Policy" }),
                      ". Kami tidak menyimpan alamat IP, payload request, atau metadata pengguna secara permanen.",
                    ],
                  }),
                  b.jsxs("ul", {
                    className: "list-disc pl-5 space-y-2",
                    children: [
                      b.jsx("li", {
                        children:
                          "Kami tidak meminta pendaftaran akun (No Auth).",
                      }),
                      b.jsx("li", {
                        children: "Kami tidak menggunakan cookies pelacakan.",
                      }),
                      b.jsx("li", {
                        children:
                          "Data yang dikirim melalui endpoint hanya diproses di RAM (in-memory) dan langsung dihapus setelah respon dikirim.",
                      }),
                    ],
                  }),
                ],
              }),
            },
            {
              title: "2. PENGGUNAAN LAYANAN PIHAK KETIGA",
              content: b.jsxs("p", {
                children: [
                  "Beberapa endpoint kami bertindak sebagai ",
                  b.jsx("em", { children: "scraper" }),
                  " atau ",
                  b.jsx("em", { children: "proxy" }),
                  " ke layanan pihak ketiga (seperti TikTok, YouTube, OpenAI). Ketika Anda menggunakan endpoint tersebut, permintaan Anda mungkin diteruskan ke server pihak ketiga tersebut. Kami tidak bertanggung jawab atas kebijakan privasi layanan eksternal tersebut.",
                ],
              }),
            },
            {
              title: "3. KEAMANAN",
              content: b.jsx("p", {
                children:
                  "Meskipun kami tidak menyimpan data, komunikasi antara klien Anda dan server kami dienkripsi menggunakan standar SSL/TLS (HTTPS).",
              }),
            },
          ].map((n, t) =>
            b.jsxs(
              "section",
              {
                children: [
                  b.jsxs("h2", {
                    className:
                      "font-head text-2xl text-[var(--text-primary)] uppercase mb-4 flex items-center gap-3",
                    children: [
                      b.jsx("span", { className: "w-2 h-2 bg-[#2563EB]" }),
                      n.title,
                    ],
                  }),
                  b.jsx("div", {
                    className:
                      "bg-[var(--bg-secondary)] p-6 border border-[var(--border-color)] text-sm md:text-base text-[var(--text-secondary)]",
                    children: n.content,
                  }),
                ],
              },
              t,
            ),
          ),
        }),
      ],
    }),
  });
function Nk() {
  return b.jsx(Tk, {});
}
const Ok = () =>
  b.jsx("div", {
    className: "pt-32 pb-24 px-6 min-h-screen bg-[var(--bg-primary)]",
    children: b.jsxs("div", {
      className: "max-w-4xl mx-auto",
      children: [
        b.jsxs("div", {
          className: "mb-12 border-l-4 border-[#2563EB] pl-6",
          children: [
            b.jsxs("h1", {
              className:
                "font-head text-4xl md:text-6xl text-[var(--text-primary)] uppercase tracking-tighter mb-2",
              children: [
                "TERMS OF ",
                b.jsx("span", {
                  className: "text-[#2563EB]",
                  children: "SERVICE",
                }),
              ],
            }),
            b.jsx("p", {
              className:
                "font-mono text-xs text-[var(--text-secondary)] uppercase tracking-widest",
              children: "SYARAT & KETENTUAN PENGGUNAAN",
            }),
          ],
        }),
        b.jsx("div", {
          className:
            "space-y-12 font-body text-[var(--text-primary)] leading-relaxed",
          children: [
            {
              title: "1. PERSETUJUAN",
              content: b.jsx("p", {
                children:
                  "Dengan mengakses atau menggunakan API ZYHUKA, Anda menyetujui untuk terikat oleh syarat dan ketentuan ini. Jika Anda tidak setuju, harap hentikan penggunaan layanan ini segera.",
              }),
            },
            {
              title: "2. BATASAN PENGGUNAAN (FAIR USE)",
              content: b.jsxs(b.Fragment, {
                children: [
                  b.jsx("p", {
                    className: "mb-4",
                    children:
                      "Meskipun layanan ini gratis dan tanpa API Key, kami menerapkan sistem Rate Limiting berbasis IP untuk mencegah penyalahgunaan (DDoS/Spam).",
                  }),
                  b.jsxs("ul", {
                    className:
                      "list-disc pl-5 space-y-2 text-[#2563EB] font-semibold",
                    children: [
                      b.jsx("li", {
                        children:
                          "DILARANG: Menggunakan API untuk kegiatan ilegal, penipuan, atau merugikan pihak lain.",
                      }),
                      b.jsx("li", {
                        children:
                          "DILARANG: Menjual ulang akses API ini sebagai layanan berbayar tanpa izin.",
                      }),
                      b.jsx("li", {
                        children:
                          "DILARANG: Melakukan spam request yang memberatkan server secara sengaja.",
                      }),
                    ],
                  }),
                ],
              }),
            },
            {
              title: "3. DISCLAIMER (PENYANGKALAN)",
              content: b.jsxs(b.Fragment, {
                children: [
                  b.jsx("p", {
                    className:
                      "uppercase tracking-wide font-bold mb-2 text-[var(--text-primary)]",
                    children: 'Layanan ini disediakan "AS IS" (Apa Adanya).',
                  }),
                  b.jsxs("p", {
                    children: [
                      "Kami tidak memberikan jaminan akurasi, ketersediaan 100%, atau keandalan untuk tujuan kritis. API ZYHUKA adalah proyek komunitas dan dapat mengalami ",
                      b.jsx("em", { children: "downtime" }),
                      " atau perubahan endpoint sewaktu-waktu tanpa pemberitahuan sebelumnya.",
                    ],
                  }),
                ],
              }),
            },
          ].map((n, t) =>
            b.jsxs(
              "section",
              {
                children: [
                  b.jsxs("h2", {
                    className:
                      "font-head text-2xl text-[var(--text-primary)] uppercase mb-4 flex items-center gap-3",
                    children: [
                      b.jsx("span", { className: "w-2 h-2 bg-[#2563EB]" }),
                      n.title,
                    ],
                  }),
                  b.jsx("div", {
                    className:
                      "bg-[var(--bg-secondary)] p-6 border border-[var(--border-color)] text-sm md:text-base text-[var(--text-secondary)]",
                    children: n.content,
                  }),
                ],
              },
              t,
            ),
          ),
        }),
      ],
    }),
  });
function zk() {
  return b.jsx(Ok, {});
}
function Dk() {
  const { pathname: n } = H0();
  return (
    at.useEffect(() => {
      window.scrollTo(0, 0);
    }, [n]),
    null
  );
}
function Lk() {
  const [n, t] = at.useState(!1),
    i = e1();
  at.useEffect(() => {
    document.body.style.overflow = n ? "hidden" : "auto";
  }, [n]);
  const a = () => t(!n),
    o = (r) => i(`/${r === "home" ? "" : r}`);
  return b.jsxs(b.Fragment, {
    children: [
      b.jsx(Dk, {}),
      b.jsx(BackToTop, {}),
      b.jsx(g1, { isOpen: n, toggleMenu: a, setPage: o }),
      b.jsx(m1, { toggleMenu: a, setPage: o }),
      b.jsx("main", {
        className: "min-h-screen bg-[var(--bg-primary)]",
        children: b.jsxs(n1, {
          children: [
            b.jsx(_l, { path: "/", element: b.jsx(w1, { setPage: o }) }),
            b.jsx(_l, { path: "/playground", element: b.jsx(gS, {}) }),
            b.jsx(_l, { path: "/monitor", element: b.jsx(jk, {}) }),
            b.jsx(_l, { path: "/privacy", element: b.jsx(Nk, {}) }),
            b.jsx(_l, { path: "/terms", element: b.jsx(zk, {}) }),
          ],
        }),
      }),
      b.jsx(p1, { setPage: o }),
    ],
  });
}
function Bk() {
  return b.jsx(t1, { children: b.jsx(h1, { children: b.jsx(Lk, {}) }) });
}
d1.createRoot(document.getElementById("root")).render(
  b.jsx(i1.StrictMode, { children: b.jsx(Bk, {}) }),
);

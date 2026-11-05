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
    return "dark";
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
  b1 = ({ setPage: n }) =>
    b.jsx("header", {
      className:
        "relative min-h-screen flex items-center pt-28 pb-16 px-6 bg-[var(--bg-primary)]",
      "aria-label": "Hero banner",
      children: b.jsx("div", {
        className: "max-w-6xl mx-auto w-full",
        children: b.jsxs("div", {
          className: "max-w-3xl",
          children: [
            b.jsxs("h1", {
              className:
                "font-head text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.92] text-[var(--text-primary)] mb-6 font-bold tracking-tight",
              children: [
                "NO LOGIN",
                b.jsx("br", {}),
                "NO KEY",
                b.jsx("br", {}),
                b.jsx("span", {
                  className: "text-[#2563EB]",
                  children: "JUST PURE API",
                }),
              ],
            }),
            b.jsx("p", {
              className:
                "text-sm md:text-base text-[var(--text-secondary)] max-w-xl font-body leading-relaxed mb-10",
              children:
                "Platform REST API open-public pertama yang menghapus batasan. Gratis selamanya, tanpa registrasi, tanpa API key. Fokus pada kecepatan eksekusi kode Anda.",
            }),
            b.jsx("div", {
              className: "flex flex-wrap gap-4",
              children: b.jsx("button", {
                onClick: () => n && n("playground"),
                className:
                  "px-7 py-3.5 bg-[#2563EB] text-white font-head text-sm uppercase tracking-wider hover:brightness-110 transition-all font-medium",
                children: "Browse Endpoints",
              }),
            }),
          ],
        }),
      }),
    }),
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
  },
  v1 = () =>
    b.jsx("section", {
      className:
        "py-16 px-6 bg-[var(--bg-primary)] border-t border-[var(--border-color)]",
      "aria-label": "Sponsors",
      children: b.jsxs("div", {
        className: "max-w-5xl mx-auto text-center",
        children: [
          b.jsx("h2", {
            className:
              "font-head text-xl text-[var(--text-primary)] mb-8 font-bold tracking-tight",
            children: "Powered By",
          }),
          b.jsxs("div", {
            className:
              "flex flex-row items-center justify-center gap-12 md:gap-20",
            children: [
              b.jsx("a", {
                href: "https://atlantic-server.com",
                target: "_blank",
                rel: "noopener noreferrer",
                children: b.jsx("img", {
                  src: "/atlantic-logo.png",
                  alt: "Atlantic Server",
                  width: "224",
                  height: "224",
                  loading: "lazy",
                  className:
                    "h-20 md:h-28 w-auto object-contain opacity-50 hover:opacity-100 transition-opacity",
                }),
              }),
              b.jsx("div", { className: "w-px h-12 bg-[var(--border-color)]" }),
              b.jsx("a", {
                href: "https://bihost.my.id",
                target: "_blank",
                rel: "noopener noreferrer",
                children: b.jsx("img", {
                  src: "/bihost-logo.png",
                  alt: "BiHost",
                  width: "224",
                  height: "224",
                  loading: "lazy",
                  className:
                    "h-20 md:h-28 w-auto object-contain opacity-50 hover:opacity-100 transition-opacity",
                }),
              }),
            ],
          }),
        ],
      }),
    });
function w1({ setPage: n }) {
  return b.jsxs(b.Fragment, {
    children: [
      b.jsx(b1, { setPage: n }),
      b.jsx(x1, {}),
      b.jsx(y1, {}),
      b.jsx(v1, {}),
    ],
  });
}
/*!
 * sweetalert2 v11.26.25
 * Released under the MIT License.
 */ function V0(n, t, i) {
  if (typeof n == "function" ? n === t : n.has(t))
    return arguments.length < 3 ? t : i;
  throw new TypeError("Private element is not present on this object");
}
function _1(n, t) {
  if (t.has(n))
    throw new TypeError(
      "Cannot initialize the same private elements twice on an object",
    );
}
function nb(n, t) {
  return n.get(V0(n, t));
}
function S1(n, t, i) {
  (_1(n, t), t.set(n, i));
}
function M1(n, t, i) {
  return (n.set(V0(n, t), i), i);
}
const A1 = 100,
  nt = {},
  k1 = () => {
    nt.previousActiveElement instanceof HTMLElement
      ? (nt.previousActiveElement.focus(), (nt.previousActiveElement = null))
      : document.body && document.body.focus();
  },
  E1 = (n) =>
    new Promise((t) => {
      if (!n) return t();
      const i = window.scrollX,
        a = window.scrollY;
      ((nt.restoreFocusTimeout = setTimeout(() => {
        (k1(), t());
      }, A1)),
        window.scrollTo(i, a));
    }),
  q0 = "swal2-",
  C1 = [
    "container",
    "shown",
    "height-auto",
    "iosfix",
    "popup",
    "modal",
    "no-backdrop",
    "no-transition",
    "toast",
    "toast-shown",
    "show",
    "hide",
    "close",
    "title",
    "html-container",
    "actions",
    "confirm",
    "deny",
    "cancel",
    "footer",
    "icon",
    "icon-content",
    "image",
    "input",
    "file",
    "range",
    "select",
    "radio",
    "checkbox",
    "label",
    "textarea",
    "inputerror",
    "input-label",
    "validation-message",
    "progress-steps",
    "active-progress-step",
    "progress-step",
    "progress-step-line",
    "loader",
    "loading",
    "styled",
    "top",
    "top-start",
    "top-end",
    "top-left",
    "top-right",
    "center",
    "center-start",
    "center-end",
    "center-left",
    "center-right",
    "bottom",
    "bottom-start",
    "bottom-end",
    "bottom-left",
    "bottom-right",
    "grow-row",
    "grow-column",
    "grow-fullscreen",
    "rtl",
    "timer-progress-bar",
    "timer-progress-bar-container",
    "scrollbar-measure",
    "icon-success",
    "icon-warning",
    "icon-info",
    "icon-question",
    "icon-error",
    "draggable",
    "dragging",
  ],
  B = C1.reduce((n, t) => ((n[t] = q0 + t), n), {}),
  j1 = ["success", "warning", "info", "question", "error"],
  Gr = j1.reduce((n, t) => ((n[t] = q0 + t), n), {}),
  Y0 = "SweetAlert2:",
  wf = (n) => n.charAt(0).toUpperCase() + n.slice(1),
  Le = (n) => {
    console.warn(`${Y0} ${typeof n == "object" ? n.join(" ") : n}`);
  },
  js = (n) => {
    console.error(`${Y0} ${n}`);
  },
  ib = [],
  T1 = (n) => {
    ib.includes(n) || (ib.push(n), Le(n));
  },
  X0 = (n, t = null) => {
    T1(
      `"${n}" is deprecated and will be removed in the next major release.${t ? ` Use "${t}" instead.` : ""}`,
    );
  },
  cc = (n) => (typeof n == "function" ? n() : n),
  _f = (n) => n && typeof n.toPromise == "function",
  Kl = (n) => (_f(n) ? n.toPromise() : Promise.resolve(n)),
  Sf = (n) => n && Promise.resolve(n) === n,
  N1 = () => navigator.userAgent.includes("Firefox"),
  Be = () => document.body.querySelector(`.${B.container}`),
  Wl = (n) => {
    const t = Be();
    return t ? t.querySelector(n) : null;
  },
  rn = (n) => Wl(`.${n}`),
  Ot = () => rn(B.popup),
  ka = () => rn(B.icon),
  O1 = () => rn(B["icon-content"]),
  P0 = () => rn(B.title),
  Mf = () => rn(B["html-container"]),
  F0 = () => rn(B.image),
  Af = () => rn(B["progress-steps"]),
  uc = () => rn(B["validation-message"]),
  Rn = () => Wl(`.${B.actions} .${B.confirm}`),
  Ea = () => Wl(`.${B.actions} .${B.cancel}`),
  Ts = () => Wl(`.${B.actions} .${B.deny}`),
  z1 = () => rn(B["input-label"]),
  Ca = () => Wl(`.${B.loader}`),
  $l = () => rn(B.actions),
  G0 = () => rn(B.footer),
  dc = () => rn(B["timer-progress-bar"]),
  kf = () => rn(B.close),
  D1 = `
  a[href],
  area[href],
  input:not([disabled]),
  select:not([disabled]),
  textarea:not([disabled]),
  button:not([disabled]),
  iframe,
  object,
  embed,
  [tabindex="0"],
  [contenteditable],
  audio[controls],
  video[controls],
  summary
`,
  Ef = () => {
    const n = Ot();
    if (!n) return [];
    const t = n.querySelectorAll(
        '[tabindex]:not([tabindex="-1"]):not([tabindex="0"])',
      ),
      i = Array.from(t).sort((r, u) => {
        const d = parseInt(r.getAttribute("tabindex") || "0"),
          h = parseInt(u.getAttribute("tabindex") || "0");
        return d > h ? 1 : d < h ? -1 : 0;
      }),
      a = n.querySelectorAll(D1),
      o = Array.from(a).filter((r) => r.getAttribute("tabindex") !== "-1");
    return [...new Set(i.concat(o))].filter((r) => Ke(r));
  },
  Cf = () =>
    di(document.body, B.shown) &&
    !di(document.body, B["toast-shown"]) &&
    !di(document.body, B["no-backdrop"]),
  fc = () => {
    const n = Ot();
    return n ? di(n, B.toast) : !1;
  },
  L1 = () => {
    const n = Ot();
    return n ? n.hasAttribute("data-loading") : !1;
  },
  cn = (n, t) => {
    if (((n.textContent = ""), t)) {
      const a = new DOMParser().parseFromString(t, "text/html"),
        o = a.querySelector("head");
      o &&
        Array.from(o.childNodes).forEach((u) => {
          n.appendChild(u);
        });
      const r = a.querySelector("body");
      r &&
        Array.from(r.childNodes).forEach((u) => {
          u instanceof HTMLVideoElement || u instanceof HTMLAudioElement
            ? n.appendChild(u.cloneNode(!0))
            : n.appendChild(u);
        });
    }
  },
  di = (n, t) =>
    t ? t.split(/\s+/).every((i) => n.classList.contains(i)) : !1,
  B1 = (n, t) => {
    Array.from(n.classList).forEach((i) => {
      !Object.values(B).includes(i) &&
        !Object.values(Gr).includes(i) &&
        !Object.values(t.showClass || {}).includes(i) &&
        n.classList.remove(i);
    });
  },
  on = (n, t, i) => {
    if ((B1(n, t), !t.customClass)) return;
    const a = t.customClass[i];
    if (a) {
      if (typeof a != "string" && !a.forEach) {
        Le(
          `Invalid type of customClass.${i}! Expected string or iterable object, got "${typeof a}"`,
        );
        return;
      }
      Nt(n, a);
    }
  },
  hc = (n, t) => {
    if (!t) return null;
    switch (t) {
      case "select":
      case "textarea":
      case "file":
        return n.querySelector(`.${B.popup} > .${B[t]}`);
      case "checkbox":
        return n.querySelector(`.${B.popup} > .${B.checkbox} input`);
      case "radio":
        return (
          n.querySelector(`.${B.popup} > .${B.radio} input:checked`) ||
          n.querySelector(`.${B.popup} > .${B.radio} input:first-child`)
        );
      case "range":
        return n.querySelector(`.${B.popup} > .${B.range} input`);
      default:
        return n.querySelector(`.${B.popup} > .${B.input}`);
    }
  },
  Z0 = (n) => {
    if ((n.focus(), n.type !== "file")) {
      const t = n.value;
      ((n.value = ""), (n.value = t));
    }
  },
  Q0 = (n, t, i) => {
    if (!n || !t) return;
    const a = typeof t == "string" ? t.split(/\s+/).filter(Boolean) : t;
    (Array.isArray(n) ? n : [n]).forEach((r) => {
      a.forEach((u) => {
        i ? r.classList.add(u) : r.classList.remove(u);
      });
    });
  },
  Nt = (n, t) => {
    Q0(n, t, !0);
  },
  _n = (n, t) => {
    Q0(n, t, !1);
  },
  Hi = (n, t) =>
    Array.from(n.children).find((i) => i instanceof HTMLElement && di(i, t)),
  Ss = (n, t, i) => {
    (i === `${parseInt(`${i}`)}` && (i = parseInt(i)),
      i || i === 0
        ? n.style.setProperty(t, typeof i == "number" ? `${i}px` : i)
        : n.style.removeProperty(t));
  },
  we = (n, t = "flex") => {
    n && (n.style.display = t);
  },
  Ne = (n) => {
    n && (n.style.display = "none");
  },
  jf = (n, t = "block") => {
    n &&
      new MutationObserver(() => {
        Il(n, n.innerHTML, t);
      }).observe(n, { childList: !0, subtree: !0 });
  },
  sb = (n, t, i, a) => {
    const o = n.querySelector(t);
    o && o.style.setProperty(i, a);
  },
  Il = (n, t, i = "flex") => {
    t ? we(n, i) : Ne(n);
  },
  Ke = (n) =>
    !!(n && (n.offsetWidth || n.offsetHeight || n.getClientRects().length)),
  R1 = () => !Ke(Rn()) && !Ke(Ts()) && !Ke(Ea()),
  tf = (n) => n.scrollHeight > n.clientHeight,
  H1 = (n, t) => {
    let i = n;
    for (; i && i !== t;) {
      if (tf(i)) return !0;
      i = i.parentElement;
    }
    return !1;
  },
  K0 = (n) => {
    const t = window.getComputedStyle(n),
      i = parseFloat(t.getPropertyValue("animation-duration") || "0"),
      a = parseFloat(t.getPropertyValue("transition-duration") || "0");
    return i > 0 || a > 0;
  },
  Tf = (n, t = !1) => {
    const i = dc();
    i &&
      Ke(i) &&
      (t && ((i.style.transition = "none"), (i.style.width = "100%")),
      setTimeout(() => {
        ((i.style.transition = `width ${n / 1e3}s linear`),
          (i.style.width = "0%"));
      }, 10));
  },
  U1 = () => {
    const n = dc();
    if (!n) return;
    const t = parseInt(window.getComputedStyle(n).width);
    (n.style.removeProperty("transition"), (n.style.width = "100%"));
    const i = parseInt(window.getComputedStyle(n).width),
      a = (t / i) * 100;
    n.style.width = `${a}%`;
  },
  V1 = () => typeof window > "u" || typeof document > "u",
  q1 = `
 <div aria-labelledby="${B.title}" aria-describedby="${B["html-container"]}" class="${B.popup}" tabindex="-1">
   <button type="button" class="${B.close}"></button>
   <ul class="${B["progress-steps"]}"></ul>
   <div class="${B.icon}"></div>
   <img class="${B.image}" />
   <h2 class="${B.title}" id="${B.title}"></h2>
   <div class="${B["html-container"]}" id="${B["html-container"]}"></div>
   <input class="${B.input}" id="${B.input}" />
   <input type="file" class="${B.file}" />
   <div class="${B.range}">
     <input type="range" />
     <output></output>
   </div>
   <select class="${B.select}" id="${B.select}"></select>
   <div class="${B.radio}"></div>
   <label class="${B.checkbox}">
     <input type="checkbox" id="${B.checkbox}" />
     <span class="${B.label}"></span>
   </label>
   <textarea class="${B.textarea}" id="${B.textarea}"></textarea>
   <div class="${B["validation-message"]}" id="${B["validation-message"]}"></div>
   <div class="${B.actions}">
     <div class="${B.loader}"></div>
     <button type="button" class="${B.confirm}"></button>
     <button type="button" class="${B.deny}"></button>
     <button type="button" class="${B.cancel}"></button>
   </div>
   <div class="${B.footer}"></div>
   <div class="${B["timer-progress-bar-container"]}">
     <div class="${B["timer-progress-bar"]}"></div>
   </div>
 </div>
`.replace(/(^|\n)\s*/g, ""),
  Y1 = () => {
    const n = Be();
    return n
      ? (n.remove(),
        _n(
          [document.documentElement, document.body],
          [B["no-backdrop"], B["toast-shown"], B["has-column"]],
        ),
        !0)
      : !1;
  },
  gs = () => {
    nt.currentInstance && nt.currentInstance.resetValidationMessage();
  },
  X1 = () => {
    const n = Ot();
    if (!n) return;
    const t = Hi(n, B.input),
      i = Hi(n, B.file),
      a = n.querySelector(`.${B.range} input`),
      o = n.querySelector(`.${B.range} output`),
      r = Hi(n, B.select),
      u = n.querySelector(`.${B.checkbox} input`),
      d = Hi(n, B.textarea);
    (t && (t.oninput = gs),
      i && (i.onchange = gs),
      r && (r.onchange = gs),
      u && (u.onchange = gs),
      d && (d.oninput = gs),
      a &&
        o &&
        ((a.oninput = () => {
          (gs(), (o.value = a.value));
        }),
        (a.onchange = () => {
          (gs(), (o.value = a.value));
        })));
  },
  P1 = (n) => {
    if (typeof n == "string") {
      const t = document.querySelector(n);
      if (!t) throw new Error(`Target element "${n}" not found`);
      return t;
    }
    return n;
  },
  F1 = (n) => {
    const t = Ot();
    t &&
      (t.setAttribute("role", n.toast ? "alert" : "dialog"),
      t.setAttribute("aria-live", n.toast ? "polite" : "assertive"),
      n.toast || t.setAttribute("aria-modal", "true"));
  },
  G1 = (n) => {
    window.getComputedStyle(n).direction === "rtl" &&
      (Nt(Be(), B.rtl), (nt.isRTL = !0));
  },
  Z1 = (n) => {
    const t = Y1();
    if (V1()) {
      js("SweetAlert2 requires document to initialize");
      return;
    }
    const i = document.createElement("div");
    ((i.className = B.container),
      t && Nt(i, B["no-transition"]),
      cn(i, q1),
      (i.dataset.swal2Theme = n.theme));
    const a = P1(n.target || "body");
    (a.appendChild(i),
      n.topLayer && (i.setAttribute("popover", ""), i.showPopover()),
      F1(n),
      G1(a),
      X1());
  },
  Nf = (n, t) => {
    n instanceof HTMLElement
      ? t.appendChild(n)
      : typeof n == "object"
        ? Q1(n, t)
        : n && cn(t, n);
  },
  Q1 = (n, t) => {
    "jquery" in n ? K1(t, n) : cn(t, n.toString());
  },
  K1 = (n, t) => {
    if (((n.textContent = ""), 0 in t))
      for (let i = 0; i in t; i++) n.appendChild(t[i].cloneNode(!0));
    else n.appendChild(t.cloneNode(!0));
  },
  W1 = (n, t) => {
    const i = $l(),
      a = Ca();
    !i ||
      !a ||
      (!t.showConfirmButton && !t.showDenyButton && !t.showCancelButton
        ? Ne(i)
        : we(i),
      on(i, t, "actions"),
      $1(i, a, t),
      cn(a, t.loaderHtml || ""),
      on(a, t, "loader"));
  };
function $1(n, t, i) {
  const a = Rn(),
    o = Ts(),
    r = Ea();
  !a ||
    !o ||
    !r ||
    (Rd(a, "confirm", i),
    Rd(o, "deny", i),
    Rd(r, "cancel", i),
    I1(a, o, r, i),
    i.reverseButtons &&
      (i.toast
        ? (n.insertBefore(r, a), n.insertBefore(o, a))
        : (n.insertBefore(r, t), n.insertBefore(o, t), n.insertBefore(a, t))));
}
function I1(n, t, i, a) {
  if (!a.buttonsStyling) {
    _n([n, t, i], B.styled);
    return;
  }
  (Nt([n, t, i], B.styled),
    [
      [n, "confirm", a.confirmButtonColor],
      [t, "deny", a.denyButtonColor],
      [i, "cancel", a.cancelButtonColor],
    ].forEach(([r, u, d]) => {
      (d && r.style.setProperty(`--swal2-${u}-button-background-color`, d),
        J1(r));
    }));
}
function J1(n) {
  const t = window.getComputedStyle(n);
  if (t.getPropertyValue("--swal2-action-button-focus-box-shadow")) return;
  const i = t.backgroundColor.replace(
    /rgba?\((\d+), (\d+), (\d+).*/,
    "rgba($1, $2, $3, 0.5)",
  );
  n.style.setProperty(
    "--swal2-action-button-focus-box-shadow",
    t.getPropertyValue("--swal2-outline").replace(/ rgba\(.*/, ` ${i}`),
  );
}
function Rd(n, t, i) {
  const a = wf(t);
  (Il(n, i[`show${a}Button`], "inline-block"),
    cn(n, i[`${t}ButtonText`] || ""),
    n.setAttribute("aria-label", i[`${t}ButtonAriaLabel`] || ""),
    (n.className = B[t]),
    on(n, i, `${t}Button`));
}
const tw = (n, t) => {
    const i = kf();
    i &&
      (cn(i, t.closeButtonHtml || ""),
      on(i, t, "closeButton"),
      Il(i, t.showCloseButton),
      i.setAttribute("aria-label", t.closeButtonAriaLabel || ""));
  },
  ew = (n, t) => {
    const i = Be();
    i &&
      (nw(i, t.backdrop),
      iw(i, t.position),
      sw(i, t.grow),
      on(i, t, "container"));
  };
function nw(n, t) {
  typeof t == "string"
    ? (n.style.background = t)
    : t || Nt([document.documentElement, document.body], B["no-backdrop"]);
}
function iw(n, t) {
  t &&
    (t in B
      ? Nt(n, B[t])
      : (Le('The "position" parameter is not valid, defaulting to "center"'),
        Nt(n, B.center)));
}
function sw(n, t) {
  t && Nt(n, B[`grow-${t}`]);
}
var Bt = {
  innerParams: new WeakMap(),
  domCache: new WeakMap(),
  focusedElement: new WeakMap(),
};
const aw = [
    "input",
    "file",
    "range",
    "select",
    "radio",
    "checkbox",
    "textarea",
  ],
  lw = (n, t) => {
    const i = Ot();
    if (!i) return;
    const a = Bt.innerParams.get(n),
      o = !a || t.input !== a.input;
    (aw.forEach((r) => {
      const u = Hi(i, B[r]);
      u && (cw(r, t.inputAttributes), (u.className = B[r]), o && Ne(u));
    }),
      t.input && (o && ow(t), uw(t)));
  },
  ow = (n) => {
    if (!n.input) return;
    if (!oe[n.input]) {
      js(
        `Unexpected type of input! Expected ${Object.keys(oe).join(" | ")}, got "${n.input}"`,
      );
      return;
    }
    const t = W0(n.input);
    if (!t) return;
    const i = oe[n.input](t, n);
    (we(t),
      n.inputAutoFocus &&
        setTimeout(() => {
          Z0(i);
        }));
  },
  rw = (n) => {
    for (const { name: t } of Array.from(n.attributes))
      ["id", "type", "value", "style"].includes(t) || n.removeAttribute(t);
  },
  cw = (n, t) => {
    const i = Ot();
    if (!i) return;
    const a = hc(i, n);
    if (a) {
      rw(a);
      for (const o in t) a.setAttribute(o, t[o]);
    }
  },
  uw = (n) => {
    if (!n.input) return;
    const t = W0(n.input);
    t && on(t, n, "input");
  },
  Of = (n, t) => {
    !n.placeholder &&
      t.inputPlaceholder &&
      (n.placeholder = t.inputPlaceholder);
  },
  Jl = (n, t, i) => {
    if (i.inputLabel) {
      const a = document.createElement("label"),
        o = B["input-label"];
      (a.setAttribute("for", n.id),
        (a.className = o),
        typeof i.customClass == "object" && Nt(a, i.customClass.inputLabel),
        (a.innerText = i.inputLabel),
        t.insertAdjacentElement("beforebegin", a));
    }
  },
  W0 = (n) => {
    const t = Ot();
    if (t) return Hi(t, B[n] || B.input);
  },
  Zr = (n, t) => {
    ["string", "number"].includes(typeof t)
      ? (n.value = `${t}`)
      : Sf(t) ||
        Le(
          `Unexpected type of inputValue! Expected "string", "number" or "Promise", got "${typeof t}"`,
        );
  },
  oe = {};
oe.text =
  oe.email =
  oe.password =
  oe.number =
  oe.tel =
  oe.url =
  oe.search =
  oe.date =
  oe["datetime-local"] =
  oe.time =
  oe.week =
  oe.month =
    (n, t) => {
      const i = n;
      return (
        Zr(i, t.inputValue),
        Jl(i, i, t),
        Of(i, t),
        (i.type = t.input),
        i
      );
    };
oe.file = (n, t) => {
  const i = n;
  return (Jl(i, i, t), Of(i, t), i);
};
oe.range = (n, t) => {
  const i = n,
    a = i.querySelector("input"),
    o = i.querySelector("output");
  return (
    a && (Zr(a, t.inputValue), (a.type = t.input), Jl(a, n, t)),
    o && Zr(o, t.inputValue),
    n
  );
};
oe.select = (n, t) => {
  const i = n;
  if (((i.textContent = ""), t.inputPlaceholder)) {
    const a = document.createElement("option");
    (cn(a, t.inputPlaceholder),
      (a.value = ""),
      (a.disabled = !0),
      (a.selected = !0),
      i.appendChild(a));
  }
  return (Jl(i, i, t), i);
};
oe.radio = (n) => {
  const t = n;
  return ((t.textContent = ""), n);
};
oe.checkbox = (n, t) => {
  const i = Ot();
  if (!i) throw new Error("Popup not found");
  const a = hc(i, "checkbox");
  if (!a) throw new Error("Checkbox input not found");
  ((a.value = "1"), (a.checked = !!t.inputValue));
  const r = n.querySelector("span");
  if (r) {
    const u = t.inputPlaceholder || t.inputLabel;
    u && cn(r, u);
  }
  return a;
};
oe.textarea = (n, t) => {
  const i = n;
  (Zr(i, t.inputValue), Of(i, t), Jl(i, i, t));
  const a = (o) =>
    parseInt(window.getComputedStyle(o).marginLeft) +
    parseInt(window.getComputedStyle(o).marginRight);
  return (
    setTimeout(() => {
      if ("MutationObserver" in window) {
        const o = Ot();
        if (!o) return;
        const r = parseInt(window.getComputedStyle(o).width),
          u = () => {
            if (!document.body.contains(i)) return;
            const d = i.offsetWidth + a(i),
              h = Ot();
            h && (d > r ? (h.style.width = `${d}px`) : Ss(h, "width", t.width));
          };
        new MutationObserver(u).observe(i, {
          attributes: !0,
          attributeFilter: ["style"],
        });
      }
    }),
    i
  );
};
const dw = (n, t) => {
    const i = Mf();
    i &&
      (jf(i),
      on(i, t, "htmlContainer"),
      t.html
        ? (Nf(t.html, i), we(i, "block"))
        : t.text
          ? ((i.textContent = t.text), we(i, "block"))
          : Ne(i),
      lw(n, t));
  },
  fw = (n, t) => {
    const i = G0();
    i &&
      (jf(i),
      Il(i, !!t.footer, "block"),
      t.footer && Nf(t.footer, i),
      on(i, t, "footer"));
  },
  hw = (n, t) => {
    const i = Bt.innerParams.get(n),
      a = ka();
    if (!a) return;
    if (i && t.icon === i.icon) {
      (lb(a, t), ab(a, t));
      return;
    }
    if (!t.icon && !t.iconHtml) {
      Ne(a);
      return;
    }
    if (t.icon && Object.keys(Gr).indexOf(t.icon) === -1) {
      (js(
        `Unknown icon! Expected "success", "error", "warning", "info" or "question", got "${t.icon}"`,
      ),
        Ne(a));
      return;
    }
    (we(a),
      lb(a, t),
      ab(a, t),
      Nt(a, t.showClass && t.showClass.icon),
      window
        .matchMedia("(prefers-color-scheme: dark)")
        .addEventListener("change", $0));
  },
  ab = (n, t) => {
    for (const [i, a] of Object.entries(Gr)) t.icon !== i && _n(n, a);
    (Nt(n, t.icon && Gr[t.icon]), pw(n, t), $0(), on(n, t, "icon"));
  },
  $0 = () => {
    const n = Ot();
    if (!n) return;
    const t = window.getComputedStyle(n).getPropertyValue("background-color");
    n.querySelectorAll(
      "[class^=swal2-success-circular-line], .swal2-success-fix",
    ).forEach((a) => {
      a.style.backgroundColor = t;
    });
  },
  mw = (n) => `
  ${n.animation ? '<div class="swal2-success-circular-line-left"></div>' : ""}
  <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>
  <div class="swal2-success-ring"></div>
  ${n.animation ? '<div class="swal2-success-fix"></div>' : ""}
  ${n.animation ? '<div class="swal2-success-circular-line-right"></div>' : ""}
`,
  gw = `
  <span class="swal2-x-mark">
    <span class="swal2-x-mark-line-left"></span>
    <span class="swal2-x-mark-line-right"></span>
  </span>
`,
  lb = (n, t) => {
    if (!t.icon && !t.iconHtml) return;
    let i = n.innerHTML,
      a = "";
    (t.iconHtml
      ? (a = ob(t.iconHtml))
      : t.icon === "success"
        ? ((a = mw(t)), (i = i.replace(/ style=".*?"/g, "")))
        : t.icon === "error"
          ? (a = gw)
          : t.icon &&
            (a = ob({ question: "?", warning: "!", info: "i" }[t.icon])),
      i.trim() !== a.trim() && cn(n, a));
  },
  pw = (n, t) => {
    if (t.iconColor) {
      ((n.style.color = t.iconColor), (n.style.borderColor = t.iconColor));
      for (const i of [
        ".swal2-success-line-tip",
        ".swal2-success-line-long",
        ".swal2-x-mark-line-left",
        ".swal2-x-mark-line-right",
      ])
        sb(n, i, "background-color", t.iconColor);
      sb(n, ".swal2-success-ring", "border-color", t.iconColor);
    }
  },
  ob = (n) => `<div class="${B["icon-content"]}">${n}</div>`,
  bw = (n, t) => {
    const i = F0();
    if (i) {
      if (!t.imageUrl) {
        Ne(i);
        return;
      }
      (we(i, ""),
        i.setAttribute("src", t.imageUrl),
        i.setAttribute("alt", t.imageAlt || ""),
        Ss(i, "width", t.imageWidth),
        Ss(i, "height", t.imageHeight),
        (i.className = B.image),
        on(i, t, "image"));
    }
  };
let zf = !1,
  I0 = 0,
  J0 = 0,
  tx = 0,
  ex = 0;
const xw = (n) => {
    (n.addEventListener("mousedown", Qr),
      document.body.addEventListener("mousemove", Kr),
      n.addEventListener("mouseup", Wr),
      n.addEventListener("touchstart", Qr),
      document.body.addEventListener("touchmove", Kr),
      n.addEventListener("touchend", Wr));
  },
  yw = (n) => {
    (n.removeEventListener("mousedown", Qr),
      document.body.removeEventListener("mousemove", Kr),
      n.removeEventListener("mouseup", Wr),
      n.removeEventListener("touchstart", Qr),
      document.body.removeEventListener("touchmove", Kr),
      n.removeEventListener("touchend", Wr));
  },
  Qr = (n) => {
    const t = Ot();
    if (!t) return;
    const i = ka();
    if (n.target === t || (i && i.contains(n.target))) {
      zf = !0;
      const a = nx(n);
      ((I0 = a.clientX),
        (J0 = a.clientY),
        (tx = parseInt(t.style.insetInlineStart) || 0),
        (ex = parseInt(t.style.insetBlockStart) || 0),
        Nt(t, "swal2-dragging"));
    }
  },
  Kr = (n) => {
    const t = Ot();
    if (t && zf) {
      let { clientX: i, clientY: a } = nx(n);
      const o = i - I0;
      ((t.style.insetInlineStart = `${tx + (nt.isRTL ? -o : o)}px`),
        (t.style.insetBlockStart = `${ex + (a - J0)}px`));
    }
  },
  Wr = () => {
    const n = Ot();
    ((zf = !1), _n(n, "swal2-dragging"));
  },
  nx = (n) => {
    const t = n.type.startsWith("touch") ? n.touches[0] : n;
    return { clientX: t.clientX, clientY: t.clientY };
  },
  vw = (n, t) => {
    const i = Be(),
      a = Ot();
    if (!(!i || !a)) {
      if (t.toast) {
        (Ss(i, "width", t.width), (a.style.width = "100%"));
        const o = Ca();
        o && a.insertBefore(o, ka());
      } else Ss(a, "width", t.width);
      (Ss(a, "padding", t.padding),
        t.color && (a.style.color = t.color),
        t.background && (a.style.background = t.background),
        Ne(uc()),
        ww(a, t),
        t.draggable && !t.toast
          ? (Nt(a, B.draggable), xw(a))
          : (_n(a, B.draggable), yw(a)));
    }
  },
  ww = (n, t) => {
    const i = t.showClass || {};
    ((n.className = `${B.popup} ${Ke(n) ? i.popup : ""}`),
      t.toast
        ? (Nt([document.documentElement, document.body], B["toast-shown"]),
          Nt(n, B.toast))
        : Nt(n, B.modal),
      on(n, t, "popup"),
      typeof t.customClass == "string" && Nt(n, t.customClass),
      t.icon && Nt(n, B[`icon-${t.icon}`]));
  },
  _w = (n, t) => {
    const i = Af();
    if (!i) return;
    const { progressSteps: a, currentProgressStep: o } = t;
    if (!a || a.length === 0 || o === void 0) {
      Ne(i);
      return;
    }
    (we(i),
      (i.textContent = ""),
      o >= a.length &&
        Le(
          "Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)",
        ),
      a.forEach((r, u) => {
        const d = Sw(r);
        if (
          (i.appendChild(d),
          u === o && Nt(d, B["active-progress-step"]),
          u !== a.length - 1)
        ) {
          const h = Mw(t);
          i.appendChild(h);
        }
      }));
  },
  Sw = (n) => {
    const t = document.createElement("li");
    return (Nt(t, B["progress-step"]), cn(t, n), t);
  },
  Mw = (n) => {
    const t = document.createElement("li");
    return (
      Nt(t, B["progress-step-line"]),
      n.progressStepsDistance && Ss(t, "width", n.progressStepsDistance),
      t
    );
  },
  Aw = (n, t) => {
    const i = P0();
    i &&
      (jf(i),
      Il(i, !!(t.title || t.titleText), "block"),
      t.title && Nf(t.title, i),
      t.titleText && (i.innerText = t.titleText),
      on(i, t, "title"));
  },
  ix = (n, t) => {
    var i;
    (vw(n, t),
      ew(n, t),
      _w(n, t),
      hw(n, t),
      bw(n, t),
      Aw(n, t),
      tw(n, t),
      dw(n, t),
      W1(n, t),
      fw(n, t));
    const a = Ot();
    (typeof t.didRender == "function" && a && t.didRender(a),
      (i = nt.eventEmitter) === null || i === void 0 || i.emit("didRender", a));
  },
  kw = () => Ke(Ot()),
  sx = () => {
    var n;
    return (n = Rn()) === null || n === void 0 ? void 0 : n.click();
  },
  Ew = () => {
    var n;
    return (n = Ts()) === null || n === void 0 ? void 0 : n.click();
  },
  Cw = () => {
    var n;
    return (n = Ea()) === null || n === void 0 ? void 0 : n.click();
  },
  ja = Object.freeze({
    cancel: "cancel",
    backdrop: "backdrop",
    close: "close",
    esc: "esc",
    timer: "timer",
  }),
  ax = (n) => {
    if (n.keydownTarget && n.keydownHandlerAdded && n.keydownHandler) {
      const t = n.keydownHandler;
      (n.keydownTarget.removeEventListener("keydown", t, {
        capture: n.keydownListenerCapture,
      }),
        (n.keydownHandlerAdded = !1));
    }
  },
  jw = (n, t, i) => {
    if ((ax(n), !t.toast)) {
      const a = (r) => Nw(t, r, i);
      n.keydownHandler = a;
      const o = t.keydownListenerCapture ? window : Ot();
      if (o) {
        ((n.keydownTarget = o),
          (n.keydownListenerCapture = t.keydownListenerCapture));
        const r = a;
        (n.keydownTarget.addEventListener("keydown", r, {
          capture: n.keydownListenerCapture,
        }),
          (n.keydownHandlerAdded = !0));
      }
    }
  },
  ef = (n, t) => {
    var i;
    const a = Ef();
    return a.length
      ? ((n = n + t),
        n === -2 && (n = a.length - 1),
        n === a.length ? (n = 0) : n === -1 && (n = a.length - 1),
        a[n].focus(),
        !(N1() && a[n] instanceof HTMLIFrameElement))
      : ((i = Ot()) === null || i === void 0 || i.focus(), !0);
  },
  lx = ["ArrowRight", "ArrowDown"],
  Tw = ["ArrowLeft", "ArrowUp"],
  Nw = (n, t, i) => {
    n &&
      (t.isComposing ||
        t.keyCode === 229 ||
        (n.stopKeydownPropagation && t.stopPropagation(),
        t.key === "Enter"
          ? Ow(t, n)
          : t.key === "Tab"
            ? zw(t)
            : [...lx, ...Tw].includes(t.key)
              ? Dw(t.key)
              : t.key === "Escape" && Lw(t, n, i)));
  },
  Ow = (n, t) => {
    if (!cc(t.allowEnterKey)) return;
    const i = Ot();
    if (!i || !t.input) return;
    const a = hc(i, t.input);
    if (
      n.target &&
      a &&
      n.target instanceof HTMLElement &&
      n.target.outerHTML === a.outerHTML
    ) {
      if (["textarea", "file"].includes(t.input)) return;
      (sx(), n.preventDefault());
    }
  },
  zw = (n) => {
    const t = n.target,
      a = Ef().findIndex((r) => r === t);
    let o = !0;
    (n.shiftKey ? (o = ef(a, -1)) : (o = ef(a, 1)),
      n.stopPropagation(),
      o && n.preventDefault());
  },
  Dw = (n) => {
    const t = $l(),
      i = Rn(),
      a = Ts(),
      o = Ea();
    if (!t || !i || !a || !o) return;
    const r = [i, a, o];
    if (
      document.activeElement instanceof HTMLElement &&
      !r.includes(document.activeElement)
    )
      return;
    const u = lx.includes(n) ? "nextElementSibling" : "previousElementSibling";
    let d = document.activeElement;
    if (d) {
      for (let h = 0; h < t.children.length; h++) {
        if (((d = d[u]), !d)) return;
        if (d instanceof HTMLButtonElement && Ke(d)) break;
      }
      d instanceof HTMLButtonElement && d.focus();
    }
  },
  Lw = (n, t, i) => {
    (n.preventDefault(), cc(t.allowEscapeKey) && i(ja.esc));
  };
var wa = {
  swalPromiseResolve: new WeakMap(),
  swalPromiseReject: new WeakMap(),
};
const Bw = () => {
    const n = Be();
    Array.from(document.body.children).forEach((i) => {
      i.contains(n) ||
        (i.hasAttribute("aria-hidden") &&
          i.setAttribute(
            "data-previous-aria-hidden",
            i.getAttribute("aria-hidden") || "",
          ),
        i.setAttribute("aria-hidden", "true"));
    });
  },
  ox = () => {
    Array.from(document.body.children).forEach((t) => {
      t.hasAttribute("data-previous-aria-hidden")
        ? (t.setAttribute(
            "aria-hidden",
            t.getAttribute("data-previous-aria-hidden") || "",
          ),
          t.removeAttribute("data-previous-aria-hidden"))
        : t.removeAttribute("aria-hidden");
    });
  },
  Df = typeof window < "u" && !!window.GestureEvent,
  Rw = Df && /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream,
  Hw = () => {
    if (Df && !di(document.body, B.iosfix)) {
      const n = document.body.scrollTop;
      ((document.body.style.top = `${n * -1}px`),
        Nt(document.body, B.iosfix),
        Uw());
    }
  },
  Uw = () => {
    const n = Be();
    if (!n) return;
    let t;
    ((n.ontouchstart = (i) => {
      t = Vw(i);
    }),
      (n.ontouchmove = (i) => {
        t && (i.preventDefault(), i.stopPropagation());
      }));
  },
  Vw = (n) => {
    const t = n.target,
      i = Be(),
      a = Mf();
    return !i || !a || qw(n) || Yw(n)
      ? !1
      : t === i ||
          (!tf(i) &&
            t instanceof HTMLElement &&
            !H1(t, a) &&
            t.tagName !== "INPUT" &&
            t.tagName !== "TEXTAREA" &&
            !(tf(a) && a.contains(t)));
  },
  qw = (n) =>
    !!(n.touches && n.touches.length && n.touches[0].touchType === "stylus"),
  Yw = (n) => n.touches && n.touches.length > 1,
  Xw = () => {
    if (di(document.body, B.iosfix)) {
      const n = parseInt(document.body.style.top, 10);
      (_n(document.body, B.iosfix),
        (document.body.style.top = ""),
        (document.body.scrollTop = n * -1));
    }
  },
  Pw = () => {
    const n = document.createElement("div");
    ((n.className = B["scrollbar-measure"]), document.body.appendChild(n));
    const t = n.getBoundingClientRect().width - n.clientWidth;
    return (document.body.removeChild(n), t);
  };
let ya = null;
const Fw = (n) => {
    ya === null &&
      (document.body.scrollHeight > window.innerHeight || n === "scroll") &&
      ((ya = parseInt(
        window
          .getComputedStyle(document.body)
          .getPropertyValue("padding-right"),
      )),
      (document.body.style.paddingRight = `${ya + Pw()}px`));
  },
  Gw = () => {
    ya !== null &&
      ((document.body.style.paddingRight = `${ya}px`), (ya = null));
  };
function rx(n, t, i, a) {
  (fc() ? rb(n, a) : (E1(i).then(() => rb(n, a)), ax(nt)),
    Df
      ? (t.setAttribute("style", "display:none !important"),
        t.removeAttribute("class"),
        (t.innerHTML = ""))
      : t.remove(),
    Cf() && (Gw(), Xw(), ox()),
    Zw());
}
function Zw() {
  _n(
    [document.documentElement, document.body],
    [B.shown, B["height-auto"], B["no-backdrop"], B["toast-shown"]],
  );
}
function Ui(n) {
  n = Kw(n);
  const t = wa.swalPromiseResolve.get(this),
    i = Qw(this);
  this.isAwaitingPromise ? n.isDismissed || (to(this), t(n)) : i && t(n);
}
const Qw = (n) => {
  const t = Ot();
  if (!t) return !1;
  const i = Bt.innerParams.get(n);
  if (!i || di(t, i.hideClass.popup)) return !1;
  (_n(t, i.showClass.popup), Nt(t, i.hideClass.popup));
  const a = Be();
  return (
    _n(a, i.showClass.backdrop),
    Nt(a, i.hideClass.backdrop),
    Ww(n, t, i),
    !0
  );
};
function cx(n) {
  const t = wa.swalPromiseReject.get(this);
  (to(this), t && t(n));
}
const to = (n) => {
    n.isAwaitingPromise &&
      (delete n.isAwaitingPromise, Bt.innerParams.get(n) || n._destroy());
  },
  Kw = (n) =>
    typeof n > "u"
      ? { isConfirmed: !1, isDenied: !1, isDismissed: !0 }
      : Object.assign({ isConfirmed: !1, isDenied: !1, isDismissed: !1 }, n),
  Ww = (n, t, i) => {
    var a;
    const o = Be(),
      r = K0(t);
    (typeof i.willClose == "function" && i.willClose(t),
      (a = nt.eventEmitter) === null || a === void 0 || a.emit("willClose", t),
      r && o
        ? $w(n, t, o, !!i.returnFocus, i.didClose)
        : o && rx(n, o, !!i.returnFocus, i.didClose));
  },
  $w = (n, t, i, a, o) => {
    nt.swalCloseEventFinishedCallback = rx.bind(null, n, i, a, o);
    const r = function (u) {
      if (u.target === t) {
        var d;
        ((d = nt.swalCloseEventFinishedCallback) === null ||
          d === void 0 ||
          d.call(nt),
          delete nt.swalCloseEventFinishedCallback,
          t.removeEventListener("animationend", r),
          t.removeEventListener("transitionend", r));
      }
    };
    (t.addEventListener("animationend", r),
      t.addEventListener("transitionend", r));
  },
  rb = (n, t) => {
    setTimeout(() => {
      var i;
      (typeof t == "function" && t.bind(n.params)(),
        (i = nt.eventEmitter) === null || i === void 0 || i.emit("didClose"),
        n._destroy && n._destroy());
    });
  },
  _a = (n) => {
    let t = Ot();
    if ((t || new tc(), (t = Ot()), !t)) return;
    const i = Ca();
    (fc() ? Ne(ka()) : Iw(t, n),
      we(i),
      t.setAttribute("data-loading", "true"),
      t.setAttribute("aria-busy", "true"),
      t.focus());
  },
  Iw = (n, t) => {
    const i = $l(),
      a = Ca();
    !i ||
      !a ||
      (!t && Ke(Rn()) && (t = Rn()),
      we(i),
      t &&
        (Ne(t),
        a.setAttribute("data-button-to-replace", t.className),
        i.insertBefore(a, t)),
      Nt([n, i], B.loading));
  },
  Jw = (n, t) => {
    t.input === "select" || t.input === "radio"
      ? s_(n, t)
      : ["text", "email", "number", "tel", "textarea"].some(
          (i) => i === t.input,
        ) &&
        (_f(t.inputValue) || Sf(t.inputValue)) &&
        (_a(Rn()), a_(n, t));
  },
  t_ = (n, t) => {
    const i = n.getInput();
    if (!i) return null;
    switch (t.input) {
      case "checkbox":
        return e_(i);
      case "radio":
        return n_(i);
      case "file":
        return i_(i);
      default:
        return t.inputAutoTrim ? i.value.trim() : i.value;
    }
  },
  e_ = (n) => (n.checked ? 1 : 0),
  n_ = (n) => (n.checked ? n.value : null),
  i_ = (n) =>
    n.files && n.files.length
      ? n.getAttribute("multiple") !== null
        ? n.files
        : n.files[0]
      : null,
  s_ = (n, t) => {
    const i = Ot();
    if (!i) return;
    const a = (o) => {
      t.input === "select"
        ? l_(i, nf(o), t)
        : t.input === "radio" && o_(i, nf(o), t);
    };
    _f(t.inputOptions) || Sf(t.inputOptions)
      ? (_a(Rn()),
        Kl(t.inputOptions).then((o) => {
          (n.hideLoading(), a(o));
        }))
      : typeof t.inputOptions == "object"
        ? a(t.inputOptions)
        : js(
            `Unexpected type of inputOptions! Expected object, Map or Promise, got ${typeof t.inputOptions}`,
          );
  },
  a_ = (n, t) => {
    const i = n.getInput();
    i &&
      (Ne(i),
      Kl(t.inputValue)
        .then((a) => {
          ((i.value = t.input === "number" ? `${parseFloat(a) || 0}` : `${a}`),
            we(i),
            i.focus(),
            n.hideLoading());
        })
        .catch((a) => {
          (js(`Error in inputValue promise: ${a}`),
            (i.value = ""),
            we(i),
            i.focus(),
            n.hideLoading());
        }));
  };
function l_(n, t, i) {
  const a = Hi(n, B.select);
  if (!a) return;
  const o = (r, u, d) => {
    const h = document.createElement("option");
    ((h.value = d),
      cn(h, u),
      (h.selected = ux(d, i.inputValue)),
      r.appendChild(h));
  };
  (t.forEach((r) => {
    const u = r[0],
      d = r[1];
    if (Array.isArray(d)) {
      const h = document.createElement("optgroup");
      ((h.label = u),
        (h.disabled = !1),
        a.appendChild(h),
        d.forEach((g) => o(h, g[1], g[0])));
    } else o(a, d, u);
  }),
    a.focus());
}
function o_(n, t, i) {
  const a = Hi(n, B.radio);
  if (!a) return;
  t.forEach((r) => {
    const u = r[0],
      d = r[1],
      h = document.createElement("input"),
      g = document.createElement("label");
    ((h.type = "radio"),
      (h.name = B.radio),
      (h.value = u),
      ux(u, i.inputValue) && (h.checked = !0));
    const p = document.createElement("span");
    (cn(p, d),
      (p.className = B.label),
      g.appendChild(h),
      g.appendChild(p),
      a.appendChild(g));
  });
  const o = a.querySelectorAll("input");
  o.length && o[0].focus();
}
const nf = (n) =>
    (n instanceof Map ? Array.from(n) : Object.entries(n)).map(([i, a]) => [
      i,
      typeof a == "object" ? nf(a) : a,
    ]),
  ux = (n, t) => !!t && t != null && t.toString() === n.toString(),
  r_ = (n) => {
    const t = Bt.innerParams.get(n);
    (n.disableButtons(), t.input ? dx(n, "confirm") : Bf(n, !0));
  },
  c_ = (n) => {
    const t = Bt.innerParams.get(n);
    (n.disableButtons(), t.returnInputValueOnDeny ? dx(n, "deny") : Lf(n, !1));
  },
  u_ = (n, t) => {
    (n.disableButtons(), t(ja.cancel));
  },
  dx = (n, t) => {
    const i = Bt.innerParams.get(n);
    if (!i.input) {
      js(
        `The "input" parameter is needed to be set when using returnInputValueOn${wf(t)}`,
      );
      return;
    }
    const a = n.getInput(),
      o = t_(n, i);
    i.inputValidator
      ? d_(n, o, t)
      : a && !a.checkValidity()
        ? (n.enableButtons(),
          n.showValidationMessage(i.validationMessage || a.validationMessage))
        : t === "deny"
          ? Lf(n, o)
          : Bf(n, o);
  },
  d_ = (n, t, i) => {
    const a = Bt.innerParams.get(n);
    (n.disableInput(),
      Promise.resolve()
        .then(() => Kl(a.inputValidator(t, a.validationMessage)))
        .then((r) => {
          (n.enableButtons(),
            n.enableInput(),
            r
              ? n.showValidationMessage(r)
              : i === "deny"
                ? Lf(n, t)
                : Bf(n, t));
        }));
  },
  Lf = (n, t) => {
    const i = Bt.innerParams.get(n);
    (i.showLoaderOnDeny && _a(Ts()),
      i.preDeny
        ? ((n.isAwaitingPromise = !0),
          Promise.resolve()
            .then(() => Kl(i.preDeny(t, i.validationMessage)))
            .then((o) => {
              o === !1
                ? (n.hideLoading(), to(n))
                : n.close({ isDenied: !0, value: typeof o > "u" ? t : o });
            })
            .catch((o) => fx(n, o)))
        : n.close({ isDenied: !0, value: t }));
  },
  cb = (n, t) => {
    n.close({ isConfirmed: !0, value: t });
  },
  fx = (n, t) => {
    n.rejectPromise(t);
  },
  Bf = (n, t) => {
    const i = Bt.innerParams.get(n);
    (i.showLoaderOnConfirm && _a(),
      i.preConfirm
        ? (n.resetValidationMessage(),
          (n.isAwaitingPromise = !0),
          Promise.resolve()
            .then(() => Kl(i.preConfirm(t, i.validationMessage)))
            .then((o) => {
              Ke(uc()) || o === !1
                ? (n.hideLoading(), to(n))
                : cb(n, typeof o > "u" ? t : o);
            })
            .catch((o) => fx(n, o)))
        : cb(n, t));
  };
function $r() {
  const n = Bt.innerParams.get(this);
  if (!n) return;
  const t = Bt.domCache.get(this);
  (Ne(t.loader),
    fc() ? n.icon && we(ka()) : f_(t),
    _n([t.popup, t.actions], B.loading),
    t.popup.removeAttribute("aria-busy"),
    t.popup.removeAttribute("data-loading"),
    this.enableButtons());
}
const f_ = (n) => {
  const t = n.loader.getAttribute("data-button-to-replace"),
    i = t ? n.popup.getElementsByClassName(t) : [];
  i.length ? we(i[0], "inline-block") : R1() && Ne(n.actions);
};
function hx() {
  const n = Bt.innerParams.get(this),
    t = Bt.domCache.get(this);
  return t ? hc(t.popup, n.input) : null;
}
function mx(n, t, i) {
  const a = Bt.domCache.get(n);
  t.forEach((o) => {
    a[o].disabled = i;
  });
}
function gx(n, t) {
  const i = Ot();
  !i ||
    !n ||
    (n.type === "radio"
      ? i.querySelectorAll(`[name="${B.radio}"]`).forEach((o) => {
          o.disabled = t;
        })
      : (n.disabled = t));
}
function px() {
  mx(this, ["confirmButton", "denyButton", "cancelButton"], !1);
  const n = Bt.focusedElement.get(this);
  (n instanceof HTMLElement &&
    document.activeElement === document.body &&
    n.focus(),
    Bt.focusedElement.delete(this));
}
function bx() {
  (Bt.focusedElement.set(this, document.activeElement),
    mx(this, ["confirmButton", "denyButton", "cancelButton"], !0));
}
function xx() {
  gx(this.getInput(), !1);
}
function yx() {
  gx(this.getInput(), !0);
}
function vx(n) {
  const t = Bt.domCache.get(this),
    i = Bt.innerParams.get(this);
  (cn(t.validationMessage, n),
    (t.validationMessage.className = B["validation-message"]),
    i.customClass &&
      i.customClass.validationMessage &&
      Nt(t.validationMessage, i.customClass.validationMessage),
    we(t.validationMessage));
  const a = this.getInput();
  a &&
    (a.setAttribute("aria-invalid", "true"),
    a.setAttribute("aria-describedby", B["validation-message"]),
    Z0(a),
    Nt(a, B.inputerror));
}
function wx() {
  const n = Bt.domCache.get(this);
  n.validationMessage && Ne(n.validationMessage);
  const t = this.getInput();
  t &&
    (t.removeAttribute("aria-invalid"),
    t.removeAttribute("aria-describedby"),
    _n(t, B.inputerror));
}
const Vi = {
    title: "",
    titleText: "",
    text: "",
    html: "",
    footer: "",
    icon: void 0,
    iconColor: void 0,
    iconHtml: void 0,
    template: void 0,
    toast: !1,
    draggable: !1,
    animation: !0,
    theme: "light",
    showClass: {
      popup: "swal2-show",
      backdrop: "swal2-backdrop-show",
      icon: "swal2-icon-show",
    },
    hideClass: {
      popup: "swal2-hide",
      backdrop: "swal2-backdrop-hide",
      icon: "swal2-icon-hide",
    },
    customClass: {},
    target: "body",
    color: void 0,
    backdrop: !0,
    heightAuto: !0,
    allowOutsideClick: !0,
    allowEscapeKey: !0,
    allowEnterKey: !0,
    stopKeydownPropagation: !0,
    keydownListenerCapture: !1,
    showConfirmButton: !0,
    showDenyButton: !1,
    showCancelButton: !1,
    preConfirm: void 0,
    preDeny: void 0,
    confirmButtonText: "OK",
    confirmButtonAriaLabel: "",
    confirmButtonColor: void 0,
    denyButtonText: "No",
    denyButtonAriaLabel: "",
    denyButtonColor: void 0,
    cancelButtonText: "Cancel",
    cancelButtonAriaLabel: "",
    cancelButtonColor: void 0,
    buttonsStyling: !0,
    reverseButtons: !1,
    focusConfirm: !0,
    focusDeny: !1,
    focusCancel: !1,
    returnFocus: !0,
    showCloseButton: !1,
    closeButtonHtml: "&times;",
    closeButtonAriaLabel: "Close this dialog",
    loaderHtml: "",
    showLoaderOnConfirm: !1,
    showLoaderOnDeny: !1,
    imageUrl: void 0,
    imageWidth: void 0,
    imageHeight: void 0,
    imageAlt: "",
    timer: void 0,
    timerProgressBar: !1,
    width: void 0,
    padding: void 0,
    background: void 0,
    input: void 0,
    inputPlaceholder: "",
    inputLabel: "",
    inputValue: "",
    inputOptions: {},
    inputAutoFocus: !0,
    inputAutoTrim: !0,
    inputAttributes: {},
    inputValidator: void 0,
    returnInputValueOnDeny: !1,
    validationMessage: void 0,
    grow: !1,
    position: "center",
    progressSteps: [],
    currentProgressStep: void 0,
    progressStepsDistance: void 0,
    willOpen: void 0,
    didOpen: void 0,
    didRender: void 0,
    willClose: void 0,
    didClose: void 0,
    didDestroy: void 0,
    scrollbarPadding: !0,
    topLayer: !1,
  },
  h_ = [
    "allowEscapeKey",
    "allowOutsideClick",
    "background",
    "buttonsStyling",
    "cancelButtonAriaLabel",
    "cancelButtonColor",
    "cancelButtonText",
    "closeButtonAriaLabel",
    "closeButtonHtml",
    "color",
    "confirmButtonAriaLabel",
    "confirmButtonColor",
    "confirmButtonText",
    "currentProgressStep",
    "customClass",
    "denyButtonAriaLabel",
    "denyButtonColor",
    "denyButtonText",
    "didClose",
    "didDestroy",
    "draggable",
    "footer",
    "hideClass",
    "html",
    "icon",
    "iconColor",
    "iconHtml",
    "imageAlt",
    "imageHeight",
    "imageUrl",
    "imageWidth",
    "preConfirm",
    "preDeny",
    "progressSteps",
    "returnFocus",
    "reverseButtons",
    "showCancelButton",
    "showCloseButton",
    "showConfirmButton",
    "showDenyButton",
    "text",
    "title",
    "titleText",
    "theme",
    "willClose",
  ],
  m_ = { allowEnterKey: void 0 },
  g_ = [
    "allowOutsideClick",
    "allowEnterKey",
    "backdrop",
    "draggable",
    "focusConfirm",
    "focusDeny",
    "focusCancel",
    "returnFocus",
    "heightAuto",
    "keydownListenerCapture",
  ],
  _x = (n) => Object.prototype.hasOwnProperty.call(Vi, n),
  Sx = (n) => h_.indexOf(n) !== -1,
  Mx = (n) => m_[n],
  p_ = (n) => {
    _x(n) || Le(`Unknown parameter "${n}"`);
  },
  b_ = (n) => {
    g_.includes(n) && Le(`The parameter "${n}" is incompatible with toasts`);
  },
  x_ = (n) => {
    const t = Mx(n);
    t && X0(n, t);
  },
  Ax = (n) => {
    (n.backdrop === !1 &&
      n.allowOutsideClick &&
      Le(
        '"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`',
      ),
      n.theme &&
        ![
          "light",
          "dark",
          "auto",
          "minimal",
          "borderless",
          "bootstrap-4",
          "bootstrap-4-light",
          "bootstrap-4-dark",
          "bootstrap-5",
          "bootstrap-5-light",
          "bootstrap-5-dark",
          "material-ui",
          "material-ui-light",
          "material-ui-dark",
          "embed-iframe",
          "bulma",
          "bulma-light",
          "bulma-dark",
        ].includes(n.theme) &&
        Le(`Invalid theme "${n.theme}"`));
    for (const t in n) (p_(t), n.toast && b_(t), x_(t));
  };
function kx(n) {
  const t = Be(),
    i = Ot(),
    a = Bt.innerParams.get(this);
  if (!i || di(i, a.hideClass.popup)) {
    Le(
      "You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.",
    );
    return;
  }
  const o = y_(n),
    r = Object.assign({}, a, o);
  (Ax(r),
    t && (t.dataset.swal2Theme = r.theme),
    ix(this, r),
    Bt.innerParams.set(this, r),
    Object.defineProperties(this, {
      params: {
        value: Object.assign({}, this.params, n),
        writable: !1,
        enumerable: !0,
      },
    }));
}
const y_ = (n) => {
  const t = {};
  return (
    Object.keys(n).forEach((i) => {
      if (Sx(i)) {
        const a = n;
        t[i] = a[i];
      } else Le(`Invalid parameter to update: ${i}`);
    }),
    t
  );
};
function Ex() {
  var n;
  const t = Bt.domCache.get(this),
    i = Bt.innerParams.get(this);
  if (!i) {
    Cx(this);
    return;
  }
  (t.popup &&
    nt.swalCloseEventFinishedCallback &&
    (nt.swalCloseEventFinishedCallback(),
    delete nt.swalCloseEventFinishedCallback),
    typeof i.didDestroy == "function" && i.didDestroy(),
    (n = nt.eventEmitter) === null || n === void 0 || n.emit("didDestroy"),
    v_(this));
}
const v_ = (n) => {
    (Cx(n),
      delete n.params,
      delete nt.keydownHandler,
      delete nt.keydownTarget,
      delete nt.currentInstance);
  },
  Cx = (n) => {
    n.isAwaitingPromise
      ? (Hd(Bt, n), (n.isAwaitingPromise = !0))
      : (Hd(wa, n),
        Hd(Bt, n),
        delete n.isAwaitingPromise,
        delete n.disableButtons,
        delete n.enableButtons,
        delete n.getInput,
        delete n.disableInput,
        delete n.enableInput,
        delete n.hideLoading,
        delete n.disableLoading,
        delete n.showValidationMessage,
        delete n.resetValidationMessage,
        delete n.close,
        delete n.closePopup,
        delete n.closeModal,
        delete n.closeToast,
        delete n.rejectPromise,
        delete n.update,
        delete n._destroy);
  },
  Hd = (n, t) => {
    for (const i in n) n[i].delete(t);
  };
var w_ = Object.freeze({
  __proto__: null,
  _destroy: Ex,
  close: Ui,
  closeModal: Ui,
  closePopup: Ui,
  closeToast: Ui,
  disableButtons: bx,
  disableInput: yx,
  disableLoading: $r,
  enableButtons: px,
  enableInput: xx,
  getInput: hx,
  handleAwaitingPromise: to,
  hideLoading: $r,
  rejectPromise: cx,
  resetValidationMessage: wx,
  showValidationMessage: vx,
  update: kx,
});
const __ = (n, t, i) => {
    n.toast ? S_(n, t, i) : (A_(t), k_(t), E_(n, t, i));
  },
  S_ = (n, t, i) => {
    t.popup.onclick = () => {
      (n && (M_(n) || n.timer || n.input)) || i(ja.close);
    };
  },
  M_ = (n) =>
    !!(
      n.showConfirmButton ||
      n.showDenyButton ||
      n.showCancelButton ||
      n.showCloseButton
    );
let Ir = !1;
const A_ = (n) => {
    n.popup.onmousedown = () => {
      n.container.onmouseup = function (t) {
        ((n.container.onmouseup = () => {}),
          t.target === n.container && (Ir = !0));
      };
    };
  },
  k_ = (n) => {
    n.container.onmousedown = (t) => {
      (t.target === n.container && t.preventDefault(),
        (n.popup.onmouseup = function (i) {
          ((n.popup.onmouseup = () => {}),
            (i.target === n.popup ||
              (i.target instanceof HTMLElement &&
                n.popup.contains(i.target))) &&
              (Ir = !0));
        }));
    };
  },
  E_ = (n, t, i) => {
    t.container.onclick = (a) => {
      if (Ir) {
        Ir = !1;
        return;
      }
      a.target === t.container && cc(n.allowOutsideClick) && i(ja.backdrop);
    };
  },
  C_ = (n) => typeof n == "object" && n !== null && "jquery" in n,
  ub = (n) => n instanceof Element || C_(n),
  j_ = (n) => {
    const t = {};
    return (
      typeof n[0] == "object" && !ub(n[0])
        ? Object.assign(t, n[0])
        : ["title", "html", "icon"].forEach((i, a) => {
            const o = n[a];
            typeof o == "string" || ub(o)
              ? (t[i] = o)
              : o !== void 0 &&
                js(
                  `Unexpected type of ${i}! Expected "string" or "Element", got ${typeof o}`,
                );
          }),
      t
    );
  };
function T_(...n) {
  return new this(...n);
}
function N_(n) {
  class t extends this {
    _main(a, o) {
      return super._main(a, Object.assign({}, n, o));
    }
  }
  return t;
}
const O_ = () => nt.timeout && nt.timeout.getTimerLeft(),
  jx = () => {
    if (nt.timeout) return (U1(), nt.timeout.stop());
  },
  Tx = () => {
    if (nt.timeout) {
      const n = nt.timeout.start();
      return (Tf(n), n);
    }
  },
  z_ = () => {
    const n = nt.timeout;
    return n && (n.running ? jx() : Tx());
  },
  D_ = (n) => {
    if (nt.timeout) {
      const t = nt.timeout.increase(n);
      return (Tf(t, !0), t);
    }
  },
  L_ = () => !!(nt.timeout && nt.timeout.isRunning());
let db = !1;
const sf = {};
function B_(n = "data-swal-template") {
  ((sf[n] = this),
    db || (document.body.addEventListener("click", R_), (db = !0)));
}
const R_ = (n) => {
  for (let t = n.target; t && t !== document; t = t.parentNode)
    for (const i in sf) {
      const a = t.getAttribute && t.getAttribute(i);
      if (a) {
        sf[i].fire({ template: a });
        return;
      }
    }
};
class H_ {
  constructor() {
    this.events = {};
  }
  _getHandlersByEventName(t) {
    return (
      typeof this.events[t] > "u" && (this.events[t] = []),
      this.events[t]
    );
  }
  on(t, i) {
    const a = this._getHandlersByEventName(t);
    a.includes(i) || a.push(i);
  }
  once(t, i) {
    const a = (...o) => {
      (this.removeListener(t, a), i.apply(this, o));
    };
    this.on(t, a);
  }
  emit(t, ...i) {
    this._getHandlersByEventName(t).forEach((a) => {
      try {
        a.apply(this, i);
      } catch (o) {
        console.error(o);
      }
    });
  }
  removeListener(t, i) {
    const a = this._getHandlersByEventName(t),
      o = a.indexOf(i);
    o > -1 && a.splice(o, 1);
  }
  removeAllListeners(t) {
    this.events[t] !== void 0 && (this.events[t].length = 0);
  }
  reset() {
    this.events = {};
  }
}
nt.eventEmitter = new H_();
const U_ = (n, t) => {
    nt.eventEmitter && nt.eventEmitter.on(n, t);
  },
  V_ = (n, t) => {
    nt.eventEmitter && nt.eventEmitter.once(n, t);
  },
  q_ = (n, t) => {
    if (nt.eventEmitter) {
      if (!n) {
        nt.eventEmitter.reset();
        return;
      }
      t
        ? nt.eventEmitter.removeListener(n, t)
        : nt.eventEmitter.removeAllListeners(n);
    }
  };
var Y_ = Object.freeze({
  __proto__: null,
  argsToParams: j_,
  bindClickHandler: B_,
  clickCancel: Cw,
  clickConfirm: sx,
  clickDeny: Ew,
  enableLoading: _a,
  fire: T_,
  getActions: $l,
  getCancelButton: Ea,
  getCloseButton: kf,
  getConfirmButton: Rn,
  getContainer: Be,
  getDenyButton: Ts,
  getFocusableElements: Ef,
  getFooter: G0,
  getHtmlContainer: Mf,
  getIcon: ka,
  getIconContent: O1,
  getImage: F0,
  getInputLabel: z1,
  getLoader: Ca,
  getPopup: Ot,
  getProgressSteps: Af,
  getTimerLeft: O_,
  getTimerProgressBar: dc,
  getTitle: P0,
  getValidationMessage: uc,
  increaseTimer: D_,
  isDeprecatedParameter: Mx,
  isLoading: L1,
  isTimerRunning: L_,
  isUpdatableParameter: Sx,
  isValidParameter: _x,
  isVisible: kw,
  mixin: N_,
  off: q_,
  on: U_,
  once: V_,
  resumeTimer: Tx,
  showLoading: _a,
  stopTimer: jx,
  toggleTimer: z_,
});
class X_ {
  constructor(t, i) {
    ((this.callback = t),
      (this.remaining = i),
      (this.running = !1),
      this.start());
  }
  start() {
    return (
      this.running ||
        ((this.running = !0),
        (this.started = new Date()),
        (this.id = setTimeout(this.callback, this.remaining))),
      this.remaining
    );
  }
  stop() {
    return (
      this.started &&
        this.running &&
        ((this.running = !1),
        clearTimeout(this.id),
        (this.remaining -= new Date().getTime() - this.started.getTime())),
      this.remaining
    );
  }
  increase(t) {
    const i = this.running;
    return (
      i && this.stop(),
      (this.remaining += t),
      i && this.start(),
      this.remaining
    );
  }
  getTimerLeft() {
    return (this.running && (this.stop(), this.start()), this.remaining);
  }
  isRunning() {
    return this.running;
  }
}
const Nx = ["swal-title", "swal-html", "swal-footer"],
  P_ = (n) => {
    const t =
      typeof n.template == "string"
        ? document.querySelector(n.template)
        : n.template;
    if (!t) return {};
    const i = t.content;
    return (
      I_(i),
      Object.assign(F_(i), G_(i), Z_(i), Q_(i), K_(i), W_(i), $_(i, Nx))
    );
  },
  F_ = (n) => {
    const t = {};
    return (
      Array.from(n.querySelectorAll("swal-param")).forEach((a) => {
        ks(a, ["name", "value"]);
        const o = a.getAttribute("name"),
          r = a.getAttribute("value");
        !o ||
          !r ||
          (o in Vi && typeof Vi[o] == "boolean"
            ? (t[o] = r !== "false")
            : o in Vi && typeof Vi[o] == "object"
              ? (t[o] = JSON.parse(r))
              : (t[o] = r));
      }),
      t
    );
  },
  G_ = (n) => {
    const t = {};
    return (
      Array.from(n.querySelectorAll("swal-function-param")).forEach((a) => {
        const o = a.getAttribute("name"),
          r = a.getAttribute("value");
        !o || !r || (t[o] = new Function(`return ${r}`)());
      }),
      t
    );
  },
  Z_ = (n) => {
    const t = {};
    return (
      Array.from(n.querySelectorAll("swal-button")).forEach((a) => {
        ks(a, ["type", "color", "aria-label"]);
        const o = a.getAttribute("type");
        if (!o || !["confirm", "cancel", "deny"].includes(o)) return;
        ((t[`${o}ButtonText`] = a.innerHTML), (t[`show${wf(o)}Button`] = !0));
        const r = a.getAttribute("color");
        r !== null && (t[`${o}ButtonColor`] = r);
        const u = a.getAttribute("aria-label");
        u !== null && (t[`${o}ButtonAriaLabel`] = u);
      }),
      t
    );
  },
  Q_ = (n) => {
    const t = {},
      i = n.querySelector("swal-image");
    if (i) {
      ks(i, ["src", "width", "height", "alt"]);
      const a = i.getAttribute("src");
      a !== null && (t.imageUrl = a || void 0);
      const o = i.getAttribute("width");
      o !== null && (t.imageWidth = o || void 0);
      const r = i.getAttribute("height");
      r !== null && (t.imageHeight = r || void 0);
      const u = i.getAttribute("alt");
      u !== null && (t.imageAlt = u || void 0);
    }
    return t;
  },
  K_ = (n) => {
    const t = {},
      i = n.querySelector("swal-icon");
    return (
      i &&
        (ks(i, ["type", "color"]),
        i.hasAttribute("type") && (t.icon = i.getAttribute("type")),
        i.hasAttribute("color") && (t.iconColor = i.getAttribute("color")),
        (t.iconHtml = i.innerHTML)),
      t
    );
  },
  W_ = (n) => {
    const t = {},
      i = n.querySelector("swal-input");
    i &&
      (ks(i, ["type", "label", "placeholder", "value"]),
      (t.input = i.getAttribute("type") || "text"),
      i.hasAttribute("label") && (t.inputLabel = i.getAttribute("label")),
      i.hasAttribute("placeholder") &&
        (t.inputPlaceholder = i.getAttribute("placeholder")),
      i.hasAttribute("value") && (t.inputValue = i.getAttribute("value")));
    const a = Array.from(n.querySelectorAll("swal-input-option"));
    return (
      a.length &&
        ((t.inputOptions = {}),
        a.forEach((o) => {
          ks(o, ["value"]);
          const r = o.getAttribute("value");
          if (!r) return;
          const u = o.innerHTML;
          t.inputOptions[r] = u;
        })),
      t
    );
  },
  $_ = (n, t) => {
    const i = {};
    for (const a in t) {
      const o = t[a],
        r = n.querySelector(o);
      r && (ks(r, []), (i[o.replace(/^swal-/, "")] = r.innerHTML.trim()));
    }
    return i;
  },
  I_ = (n) => {
    const t = Nx.concat([
      "swal-param",
      "swal-function-param",
      "swal-button",
      "swal-image",
      "swal-icon",
      "swal-input",
      "swal-input-option",
    ]);
    Array.from(n.children).forEach((i) => {
      const a = i.tagName.toLowerCase();
      t.includes(a) || Le(`Unrecognized element <${a}>`);
    });
  },
  ks = (n, t) => {
    Array.from(n.attributes).forEach((i) => {
      t.indexOf(i.name) === -1 &&
        Le([
          `Unrecognized attribute "${i.name}" on <${n.tagName.toLowerCase()}>.`,
          `${t.length ? `Allowed attributes are: ${t.join(", ")}` : "To set the value, use HTML within the element."}`,
        ]);
    });
  },
  Ox = 10,
  J_ = (n) => {
    var t, i;
    const a = Be(),
      o = Ot();
    if (!a || !o) return;
    (typeof n.willOpen == "function" && n.willOpen(o),
      (t = nt.eventEmitter) === null || t === void 0 || t.emit("willOpen", o));
    const u = window.getComputedStyle(document.body).overflowY;
    if (
      (nS(a, o, n),
      setTimeout(() => {
        tS(a, o);
      }, Ox),
      Cf() &&
        (eS(a, n.scrollbarPadding !== void 0 ? n.scrollbarPadding : !1, u),
        Bw()),
      Rw &&
        n.backdrop === !1 &&
        o.scrollHeight > a.clientHeight &&
        (a.style.pointerEvents = "auto"),
      !fc() &&
        !nt.previousActiveElement &&
        (nt.previousActiveElement = document.activeElement),
      typeof n.didOpen == "function")
    ) {
      const d = n.didOpen;
      setTimeout(() => d(o));
    }
    (i = nt.eventEmitter) === null || i === void 0 || i.emit("didOpen", o);
  },
  Jr = (n) => {
    const t = Ot();
    if (!t || n.target !== t) return;
    const i = Be();
    i &&
      (t.removeEventListener("animationend", Jr),
      t.removeEventListener("transitionend", Jr),
      (i.style.overflowY = "auto"),
      _n(i, B["no-transition"]));
  },
  tS = (n, t) => {
    K0(t)
      ? ((n.style.overflowY = "hidden"),
        t.addEventListener("animationend", Jr),
        t.addEventListener("transitionend", Jr))
      : (n.style.overflowY = "auto");
  },
  eS = (n, t, i) => {
    (Hw(),
      t && i !== "hidden" && Fw(i),
      setTimeout(() => {
        n.scrollTop = 0;
      }));
  },
  nS = (n, t, i) => {
    var a;
    ((a = i.showClass) !== null &&
      a !== void 0 &&
      a.backdrop &&
      Nt(n, i.showClass.backdrop),
      i.animation
        ? (t.style.setProperty("opacity", "0", "important"),
          we(t, "grid"),
          setTimeout(() => {
            var o;
            ((o = i.showClass) !== null &&
              o !== void 0 &&
              o.popup &&
              Nt(t, i.showClass.popup),
              t.style.removeProperty("opacity"));
          }, Ox))
        : we(t, "grid"),
      Nt([document.documentElement, document.body], B.shown),
      i.heightAuto &&
        i.backdrop &&
        !i.toast &&
        Nt([document.documentElement, document.body], B["height-auto"]));
  };
var fb = {
  email: (n, t) =>
    /^[a-zA-Z0-9.+_'-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]+$/.test(n)
      ? Promise.resolve()
      : Promise.resolve(t || "Invalid email address"),
  url: (n, t) =>
    /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(
      n,
    )
      ? Promise.resolve()
      : Promise.resolve(t || "Invalid URL"),
};
function iS(n) {
  n.inputValidator ||
    (n.input === "email" && (n.inputValidator = fb.email),
    n.input === "url" && (n.inputValidator = fb.url));
}
function sS(n) {
  (!n.target ||
    (typeof n.target == "string" && !document.querySelector(n.target)) ||
    (typeof n.target != "string" && !n.target.appendChild)) &&
    (Le('Target parameter is not valid, defaulting to "body"'),
    (n.target = "body"));
}
function aS(n) {
  (iS(n),
    n.showLoaderOnConfirm &&
      !n.preConfirm &&
      Le(`showLoaderOnConfirm is set to true, but preConfirm is not defined.
showLoaderOnConfirm should be used together with preConfirm, see usage example:
https://sweetalert2.github.io/#ajax-request`),
    sS(n),
    typeof n.title == "string" &&
      (n.title = n.title
        .split(
          `
`,
        )
        .join("<br />")),
    Z1(n));
}
let Dn;
var _r = new WeakMap();
class ce {
  constructor(...t) {
    if (
      (S1(
        this,
        _r,
        Promise.resolve({ isConfirmed: !1, isDenied: !1, isDismissed: !0 }),
      ),
      typeof window > "u")
    )
      return;
    Dn = this;
    const i = Object.freeze(this.constructor.argsToParams(t));
    ((this.params = i),
      (this.isAwaitingPromise = !1),
      M1(_r, this, this._main(Dn.params)));
  }
  _main(t, i = {}) {
    if ((Ax(Object.assign({}, i, t)), nt.currentInstance)) {
      const r = wa.swalPromiseResolve.get(nt.currentInstance),
        { isAwaitingPromise: u } = nt.currentInstance;
      (nt.currentInstance._destroy(),
        u || r({ isDismissed: !0 }),
        Cf() && ox());
    }
    nt.currentInstance = Dn;
    const a = oS(t, i);
    (aS(a),
      Object.freeze(a),
      nt.timeout && (nt.timeout.stop(), delete nt.timeout),
      clearTimeout(nt.restoreFocusTimeout));
    const o = rS(Dn);
    return (ix(Dn, a), Bt.innerParams.set(Dn, a), lS(Dn, o, a));
  }
  then(t) {
    return nb(_r, this).then(t);
  }
  finally(t) {
    return nb(_r, this).finally(t);
  }
}
const lS = (n, t, i) =>
    new Promise((a, o) => {
      const r = (u) => {
        n.close({ isDismissed: !0, dismiss: u, isConfirmed: !1, isDenied: !1 });
      };
      (wa.swalPromiseResolve.set(n, a),
        wa.swalPromiseReject.set(n, o),
        (t.confirmButton.onclick = () => {
          r_(n);
        }),
        (t.denyButton.onclick = () => {
          c_(n);
        }),
        (t.cancelButton.onclick = () => {
          u_(n, r);
        }),
        (t.closeButton.onclick = () => {
          r(ja.close);
        }),
        __(i, t, r),
        jw(nt, i, r),
        Jw(n, i),
        J_(i),
        cS(nt, i, r),
        uS(t, i),
        setTimeout(() => {
          t.container.scrollTop = 0;
        }));
    }),
  oS = (n, t) => {
    const i = P_(n),
      a = Object.assign({}, Vi, t, i, n);
    return (
      (a.showClass = Object.assign({}, Vi.showClass, a.showClass)),
      (a.hideClass = Object.assign({}, Vi.hideClass, a.hideClass)),
      a.animation === !1 &&
        ((a.showClass = { backdrop: "swal2-noanimation" }), (a.hideClass = {})),
      a
    );
  },
  rS = (n) => {
    const t = {
      popup: Ot(),
      container: Be(),
      actions: $l(),
      confirmButton: Rn(),
      denyButton: Ts(),
      cancelButton: Ea(),
      loader: Ca(),
      closeButton: kf(),
      validationMessage: uc(),
      progressSteps: Af(),
    };
    return (Bt.domCache.set(n, t), t);
  },
  cS = (n, t, i) => {
    const a = dc();
    (Ne(a),
      t.timer &&
        ((n.timeout = new X_(() => {
          (i("timer"), delete n.timeout);
        }, t.timer)),
        t.timerProgressBar &&
          a &&
          (we(a),
          on(a, t, "timerProgressBar"),
          setTimeout(() => {
            n.timeout && n.timeout.running && Tf(t.timer);
          }))));
  },
  uS = (n, t) => {
    if (!t.toast) {
      if (!cc(t.allowEnterKey)) {
        (X0("allowEnterKey", "preConfirm: () => false"), n.popup.focus());
        return;
      }
      dS(n) || fS(n, t) || ef(-1, 1);
    }
  },
  dS = (n) => {
    const t = Array.from(n.popup.querySelectorAll("[autofocus]"));
    for (const i of t)
      if (i instanceof HTMLElement && Ke(i)) return (i.focus(), !0);
    return !1;
  },
  fS = (n, t) =>
    t.focusDeny && Ke(n.denyButton)
      ? (n.denyButton.focus(), !0)
      : t.focusCancel && Ke(n.cancelButton)
        ? (n.cancelButton.focus(), !0)
        : t.focusConfirm && Ke(n.confirmButton)
          ? (n.confirmButton.focus(), !0)
          : !1;
ce.prototype.disableButtons = bx;
ce.prototype.enableButtons = px;
ce.prototype.getInput = hx;
ce.prototype.disableInput = yx;
ce.prototype.enableInput = xx;
ce.prototype.hideLoading = $r;
ce.prototype.disableLoading = $r;
ce.prototype.showValidationMessage = vx;
ce.prototype.resetValidationMessage = wx;
ce.prototype.close = Ui;
ce.prototype.closePopup = Ui;
ce.prototype.closeModal = Ui;
ce.prototype.closeToast = Ui;
ce.prototype.rejectPromise = cx;
ce.prototype.update = kx;
ce.prototype._destroy = Ex;
Object.assign(ce, Y_);
Object.keys(w_).forEach((n) => {
  ce[n] = function (...t) {
    if (Dn && Dn[n]) return Dn[n](...t);
  };
});
ce.DismissReason = ja;
ce.version = "11.26.25";
const tc = ce;
tc.default = tc;
typeof document < "u" &&
  (function (n, t) {
    var i = n.createElement("style");
    if ((n.getElementsByTagName("head")[0].appendChild(i), i.styleSheet))
      i.styleSheet.disabled || (i.styleSheet.cssText = t);
    else
      try {
        i.innerHTML = t;
      } catch {
        i.innerText = t;
      }
  })(
    document,
    ':root{--swal2-outline: 0 0 0 3px rgba(100, 150, 200, 0.5);--swal2-container-padding: 0.625em;--swal2-backdrop: rgba(0, 0, 0, 0.4);--swal2-backdrop-transition: background-color 0.15s;--swal2-width: 32em;--swal2-padding: 0 0 1.25em;--swal2-border: none;--swal2-border-radius: 0.3125rem;--swal2-background: white;--swal2-color: #545454;--swal2-show-animation: swal2-show 0.3s;--swal2-hide-animation: swal2-hide 0.15s forwards;--swal2-icon-zoom: 1;--swal2-title-padding: 0.8em 1em 0;--swal2-html-container-padding: 1em 1.6em 0.3em;--swal2-input-border: 1px solid #d9d9d9;--swal2-input-border-radius: 0.1875em;--swal2-input-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.06), 0 0 0 3px transparent;--swal2-input-background: transparent;--swal2-input-transition: border-color 0.2s, box-shadow 0.2s;--swal2-input-hover-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.06), 0 0 0 3px transparent;--swal2-input-focus-border: 1px solid #b4dbed;--swal2-input-focus-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.06), 0 0 0 3px rgba(100, 150, 200, 0.5);--swal2-progress-step-background: #add8e6;--swal2-validation-message-background: #f0f0f0;--swal2-validation-message-color: #666;--swal2-footer-border-color: #eee;--swal2-footer-background: transparent;--swal2-footer-color: inherit;--swal2-timer-progress-bar-background: rgba(0, 0, 0, 0.3);--swal2-close-button-position: initial;--swal2-close-button-inset: auto;--swal2-close-button-font-size: 2.5em;--swal2-close-button-color: #ccc;--swal2-close-button-transition: color 0.2s, box-shadow 0.2s;--swal2-close-button-outline: initial;--swal2-close-button-box-shadow: inset 0 0 0 3px transparent;--swal2-close-button-focus-box-shadow: inset var(--swal2-outline);--swal2-close-button-hover-transform: none;--swal2-actions-justify-content: center;--swal2-actions-width: auto;--swal2-actions-margin: 1.25em auto 0;--swal2-actions-padding: 0;--swal2-actions-border-radius: 0;--swal2-actions-background: transparent;--swal2-action-button-transition: background-color 0.2s, box-shadow 0.2s;--swal2-action-button-hover: black 10%;--swal2-action-button-active: black 10%;--swal2-confirm-button-box-shadow: none;--swal2-confirm-button-border-radius: 0.25em;--swal2-confirm-button-background-color: #7066e0;--swal2-confirm-button-color: #fff;--swal2-deny-button-box-shadow: none;--swal2-deny-button-border-radius: 0.25em;--swal2-deny-button-background-color: #dc3741;--swal2-deny-button-color: #fff;--swal2-cancel-button-box-shadow: none;--swal2-cancel-button-border-radius: 0.25em;--swal2-cancel-button-background-color: #6e7881;--swal2-cancel-button-color: #fff;--swal2-toast-show-animation: swal2-toast-show 0.5s;--swal2-toast-hide-animation: swal2-toast-hide 0.1s forwards;--swal2-toast-border: none;--swal2-toast-box-shadow: 0 0 1px hsl(0deg 0% 0% / 0.075), 0 1px 2px hsl(0deg 0% 0% / 0.075), 1px 2px 4px hsl(0deg 0% 0% / 0.075), 1px 3px 8px hsl(0deg 0% 0% / 0.075), 2px 4px 16px hsl(0deg 0% 0% / 0.075)}[data-swal2-theme=dark]{--swal2-dark-theme-black: #19191a;--swal2-dark-theme-white: #e1e1e1;--swal2-background: var(--swal2-dark-theme-black);--swal2-color: var(--swal2-dark-theme-white);--swal2-footer-border-color: #555;--swal2-input-background: color-mix(in srgb, var(--swal2-dark-theme-black), var(--swal2-dark-theme-white) 10%);--swal2-validation-message-background: color-mix( in srgb, var(--swal2-dark-theme-black), var(--swal2-dark-theme-white) 10% );--swal2-validation-message-color: var(--swal2-dark-theme-white);--swal2-timer-progress-bar-background: rgba(255, 255, 255, 0.7)}@media(prefers-color-scheme: dark){[data-swal2-theme=auto]{--swal2-dark-theme-black: #19191a;--swal2-dark-theme-white: #e1e1e1;--swal2-background: var(--swal2-dark-theme-black);--swal2-color: var(--swal2-dark-theme-white);--swal2-footer-border-color: #555;--swal2-input-background: color-mix(in srgb, var(--swal2-dark-theme-black), var(--swal2-dark-theme-white) 10%);--swal2-validation-message-background: color-mix( in srgb, var(--swal2-dark-theme-black), var(--swal2-dark-theme-white) 10% );--swal2-validation-message-color: var(--swal2-dark-theme-white);--swal2-timer-progress-bar-background: rgba(255, 255, 255, 0.7)}}body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto !important}body.swal2-no-backdrop .swal2-container{background-color:rgba(0,0,0,0) !important;pointer-events:none}body.swal2-no-backdrop .swal2-container .swal2-popup{pointer-events:auto}body.swal2-no-backdrop .swal2-container .swal2-modal{box-shadow:0 0 10px var(--swal2-backdrop)}body.swal2-toast-shown .swal2-container{box-sizing:border-box;width:360px;max-width:100%;background-color:rgba(0,0,0,0);pointer-events:none}body.swal2-toast-shown .swal2-container.swal2-top{inset:0 auto auto 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{inset:0 0 auto auto}body.swal2-toast-shown .swal2-container.swal2-top-start,body.swal2-toast-shown .swal2-container.swal2-top-left{inset:0 auto auto 0}body.swal2-toast-shown .swal2-container.swal2-center-start,body.swal2-toast-shown .swal2-container.swal2-center-left{inset:50% auto auto 0;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{inset:50% auto auto 50%;transform:translate(-50%, -50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{inset:50% 0 auto auto;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-start,body.swal2-toast-shown .swal2-container.swal2-bottom-left{inset:auto auto 0 0}body.swal2-toast-shown .swal2-container.swal2-bottom{inset:auto auto 0 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{inset:auto 0 0 auto}@media print{body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown){overflow-y:scroll !important}body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown) .swal2-container{position:static !important}}div:where(.swal2-container){display:grid;position:fixed;z-index:1060;inset:0;box-sizing:border-box;grid-template-areas:"top-start     top            top-end" "center-start  center         center-end" "bottom-start  bottom-center  bottom-end";grid-template-rows:minmax(min-content, auto) minmax(min-content, auto) minmax(min-content, auto);height:100%;padding:var(--swal2-container-padding);overflow-x:hidden;transition:var(--swal2-backdrop-transition);-webkit-overflow-scrolling:touch}div:where(.swal2-container).swal2-backdrop-show,div:where(.swal2-container).swal2-noanimation{background:var(--swal2-backdrop)}div:where(.swal2-container).swal2-backdrop-hide{background:rgba(0,0,0,0) !important}div:where(.swal2-container).swal2-top-start,div:where(.swal2-container).swal2-center-start,div:where(.swal2-container).swal2-bottom-start{grid-template-columns:minmax(0, 1fr) auto auto}div:where(.swal2-container).swal2-top,div:where(.swal2-container).swal2-center,div:where(.swal2-container).swal2-bottom{grid-template-columns:auto minmax(0, 1fr) auto}div:where(.swal2-container).swal2-top-end,div:where(.swal2-container).swal2-center-end,div:where(.swal2-container).swal2-bottom-end{grid-template-columns:auto auto minmax(0, 1fr)}div:where(.swal2-container).swal2-top-start>.swal2-popup{align-self:start}div:where(.swal2-container).swal2-top>.swal2-popup{grid-column:2;place-self:start center}div:where(.swal2-container).swal2-top-end>.swal2-popup,div:where(.swal2-container).swal2-top-right>.swal2-popup{grid-column:3;place-self:start end}div:where(.swal2-container).swal2-center-start>.swal2-popup,div:where(.swal2-container).swal2-center-left>.swal2-popup{grid-row:2;align-self:center}div:where(.swal2-container).swal2-center>.swal2-popup{grid-column:2;grid-row:2;place-self:center center}div:where(.swal2-container).swal2-center-end>.swal2-popup,div:where(.swal2-container).swal2-center-right>.swal2-popup{grid-column:3;grid-row:2;place-self:center end}div:where(.swal2-container).swal2-bottom-start>.swal2-popup,div:where(.swal2-container).swal2-bottom-left>.swal2-popup{grid-column:1;grid-row:3;align-self:end}div:where(.swal2-container).swal2-bottom>.swal2-popup{grid-column:2;grid-row:3;place-self:end center}div:where(.swal2-container).swal2-bottom-end>.swal2-popup,div:where(.swal2-container).swal2-bottom-right>.swal2-popup{grid-column:3;grid-row:3;place-self:end end}div:where(.swal2-container).swal2-grow-row>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-column:1/4;width:100%}div:where(.swal2-container).swal2-grow-column>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-row:1/4;align-self:stretch}div:where(.swal2-container).swal2-no-transition{transition:none !important}div:where(.swal2-container)[popover]{width:auto;border:0}div:where(.swal2-container) div:where(.swal2-popup){display:none;position:relative;box-sizing:border-box;grid-template-columns:minmax(0, 100%);width:var(--swal2-width);max-width:100%;padding:var(--swal2-padding);border:var(--swal2-border);border-radius:var(--swal2-border-radius);background:var(--swal2-background);color:var(--swal2-color);font-family:inherit;font-size:1rem}div:where(.swal2-container) div:where(.swal2-popup):focus{outline:none}div:where(.swal2-container) div:where(.swal2-popup).swal2-loading{overflow-y:hidden}div:where(.swal2-container) div:where(.swal2-popup).swal2-draggable{cursor:grab}div:where(.swal2-container) div:where(.swal2-popup).swal2-draggable div:where(.swal2-icon){cursor:grab}div:where(.swal2-container) div:where(.swal2-popup).swal2-dragging{cursor:grabbing}div:where(.swal2-container) div:where(.swal2-popup).swal2-dragging div:where(.swal2-icon){cursor:grabbing}div:where(.swal2-container) h2:where(.swal2-title){position:relative;max-width:100%;margin:0;padding:var(--swal2-title-padding);color:inherit;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;overflow-wrap:break-word;cursor:initial}div:where(.swal2-container) div:where(.swal2-actions){display:flex;z-index:1;box-sizing:border-box;flex-wrap:wrap;align-items:center;justify-content:var(--swal2-actions-justify-content);width:var(--swal2-actions-width);margin:var(--swal2-actions-margin);padding:var(--swal2-actions-padding);border-radius:var(--swal2-actions-border-radius);background:var(--swal2-actions-background)}div:where(.swal2-container) div:where(.swal2-loader){display:none;align-items:center;justify-content:center;width:2.2em;height:2.2em;margin:0 1.875em;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border-width:.25em;border-style:solid;border-radius:100%;border-color:#2778c4 rgba(0,0,0,0) #2778c4 rgba(0,0,0,0)}div:where(.swal2-container) button:where(.swal2-styled){margin:.3125em;padding:.625em 1.1em;transition:var(--swal2-action-button-transition);border:none;box-shadow:0 0 0 3px rgba(0,0,0,0);font-weight:500}div:where(.swal2-container) button:where(.swal2-styled):not([disabled]){cursor:pointer}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-confirm){border-radius:var(--swal2-confirm-button-border-radius);background:initial;background-color:var(--swal2-confirm-button-background-color);box-shadow:var(--swal2-confirm-button-box-shadow);color:var(--swal2-confirm-button-color);font-size:1em}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-confirm):hover{background-color:color-mix(in srgb, var(--swal2-confirm-button-background-color), var(--swal2-action-button-hover))}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-confirm):active{background-color:color-mix(in srgb, var(--swal2-confirm-button-background-color), var(--swal2-action-button-active))}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-deny){border-radius:var(--swal2-deny-button-border-radius);background:initial;background-color:var(--swal2-deny-button-background-color);box-shadow:var(--swal2-deny-button-box-shadow);color:var(--swal2-deny-button-color);font-size:1em}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-deny):hover{background-color:color-mix(in srgb, var(--swal2-deny-button-background-color), var(--swal2-action-button-hover))}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-deny):active{background-color:color-mix(in srgb, var(--swal2-deny-button-background-color), var(--swal2-action-button-active))}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-cancel){border-radius:var(--swal2-cancel-button-border-radius);background:initial;background-color:var(--swal2-cancel-button-background-color);box-shadow:var(--swal2-cancel-button-box-shadow);color:var(--swal2-cancel-button-color);font-size:1em}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-cancel):hover{background-color:color-mix(in srgb, var(--swal2-cancel-button-background-color), var(--swal2-action-button-hover))}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-cancel):active{background-color:color-mix(in srgb, var(--swal2-cancel-button-background-color), var(--swal2-action-button-active))}div:where(.swal2-container) button:where(.swal2-styled):focus-visible{outline:none;box-shadow:var(--swal2-action-button-focus-box-shadow)}div:where(.swal2-container) button:where(.swal2-styled)[disabled]:not(.swal2-loading){opacity:.4}div:where(.swal2-container) button:where(.swal2-styled)::-moz-focus-inner{border:0}div:where(.swal2-container) div:where(.swal2-footer){margin:1em 0 0;padding:1em 1em 0;border-top:1px solid var(--swal2-footer-border-color);background:var(--swal2-footer-background);color:var(--swal2-footer-color);font-size:1em;text-align:center;cursor:initial}div:where(.swal2-container) .swal2-timer-progress-bar-container{position:absolute;right:0;bottom:0;left:0;grid-column:auto !important;overflow:hidden;border-bottom-right-radius:var(--swal2-border-radius);border-bottom-left-radius:var(--swal2-border-radius)}div:where(.swal2-container) div:where(.swal2-timer-progress-bar){width:100%;height:.25em;background:var(--swal2-timer-progress-bar-background)}div:where(.swal2-container) img:where(.swal2-image){max-width:100%;margin:2em auto 1em;cursor:initial}div:where(.swal2-container) button:where(.swal2-close){position:var(--swal2-close-button-position);inset:var(--swal2-close-button-inset);z-index:2;align-items:center;justify-content:center;width:1.2em;height:1.2em;margin-top:0;margin-right:0;margin-bottom:-1.2em;padding:0;overflow:hidden;transition:var(--swal2-close-button-transition);border:none;border-radius:var(--swal2-border-radius);outline:var(--swal2-close-button-outline);background:rgba(0,0,0,0);color:var(--swal2-close-button-color);font-family:monospace;font-size:var(--swal2-close-button-font-size);cursor:pointer;justify-self:end}div:where(.swal2-container) button:where(.swal2-close):hover{transform:var(--swal2-close-button-hover-transform);background:rgba(0,0,0,0);color:#f27474}div:where(.swal2-container) button:where(.swal2-close):focus-visible{outline:none;box-shadow:var(--swal2-close-button-focus-box-shadow)}div:where(.swal2-container) button:where(.swal2-close)::-moz-focus-inner{border:0}div:where(.swal2-container) div:where(.swal2-html-container){z-index:1;justify-content:center;margin:0;padding:var(--swal2-html-container-padding);overflow:auto;color:inherit;font-size:1.125em;font-weight:normal;line-height:normal;text-align:center;overflow-wrap:break-word;word-break:break-word;cursor:initial}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea),div:where(.swal2-container) select:where(.swal2-select),div:where(.swal2-container) div:where(.swal2-radio),div:where(.swal2-container) label:where(.swal2-checkbox){margin:1em 2em 3px}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea){box-sizing:border-box;width:auto;transition:var(--swal2-input-transition);border:var(--swal2-input-border);border-radius:var(--swal2-input-border-radius);background:var(--swal2-input-background);box-shadow:var(--swal2-input-box-shadow);color:inherit;font-size:1.125em}div:where(.swal2-container) input:where(.swal2-input).swal2-inputerror,div:where(.swal2-container) input:where(.swal2-file).swal2-inputerror,div:where(.swal2-container) textarea:where(.swal2-textarea).swal2-inputerror{border-color:#f27474 !important;box-shadow:0 0 2px #f27474 !important}div:where(.swal2-container) input:where(.swal2-input):hover,div:where(.swal2-container) input:where(.swal2-file):hover,div:where(.swal2-container) textarea:where(.swal2-textarea):hover{box-shadow:var(--swal2-input-hover-box-shadow)}div:where(.swal2-container) input:where(.swal2-input):focus,div:where(.swal2-container) input:where(.swal2-file):focus,div:where(.swal2-container) textarea:where(.swal2-textarea):focus{border:var(--swal2-input-focus-border);outline:none;box-shadow:var(--swal2-input-focus-box-shadow)}div:where(.swal2-container) input:where(.swal2-input)::placeholder,div:where(.swal2-container) input:where(.swal2-file)::placeholder,div:where(.swal2-container) textarea:where(.swal2-textarea)::placeholder{color:#ccc}div:where(.swal2-container) .swal2-range{margin:1em 2em 3px;background:var(--swal2-background)}div:where(.swal2-container) .swal2-range input{width:80%}div:where(.swal2-container) .swal2-range output{width:20%;color:inherit;font-weight:600;text-align:center}div:where(.swal2-container) .swal2-range input,div:where(.swal2-container) .swal2-range output{height:2.625em;padding:0;font-size:1.125em;line-height:2.625em}div:where(.swal2-container) .swal2-input{height:2.625em;padding:0 .75em}div:where(.swal2-container) .swal2-file{width:75%;margin-right:auto;margin-left:auto;background:var(--swal2-input-background);font-size:1.125em}div:where(.swal2-container) .swal2-textarea{height:6.75em;padding:.75em}div:where(.swal2-container) .swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;background:var(--swal2-input-background);color:inherit;font-size:1.125em}div:where(.swal2-container) .swal2-radio,div:where(.swal2-container) .swal2-checkbox{align-items:center;justify-content:center;background:var(--swal2-background);color:inherit}div:where(.swal2-container) .swal2-radio label,div:where(.swal2-container) .swal2-checkbox label{margin:0 .6em;font-size:1.125em}div:where(.swal2-container) .swal2-radio input,div:where(.swal2-container) .swal2-checkbox input{flex-shrink:0;margin:0 .4em}div:where(.swal2-container) label:where(.swal2-input-label){display:flex;justify-content:center;margin:1em auto 0}div:where(.swal2-container) div:where(.swal2-validation-message){align-items:center;justify-content:center;margin:1em 0 0;padding:.625em;overflow:hidden;background:var(--swal2-validation-message-background);color:var(--swal2-validation-message-color);font-size:1em;font-weight:300}div:where(.swal2-container) div:where(.swal2-validation-message)::before{content:"!";display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center}div:where(.swal2-container) .swal2-progress-steps{flex-wrap:wrap;align-items:center;max-width:100%;margin:1.25em auto;padding:0;background:rgba(0,0,0,0);font-weight:600}div:where(.swal2-container) .swal2-progress-steps li{display:inline-block;position:relative}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step{z-index:20;flex-shrink:0;width:2em;height:2em;border-radius:2em;background:#2778c4;color:#fff;line-height:2em;text-align:center}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:#2778c4}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step{background:var(--swal2-progress-step-background);color:#fff}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step-line{background:var(--swal2-progress-step-background)}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step-line{z-index:10;flex-shrink:0;width:2.5em;height:.4em;margin:0 -1px;background:#2778c4}div:where(.swal2-icon){position:relative;box-sizing:content-box;justify-content:center;width:5em;height:5em;margin:2.5em auto .6em;zoom:var(--swal2-icon-zoom);border:.25em solid rgba(0,0,0,0);border-radius:50%;border-color:#000;font-family:inherit;line-height:5em;cursor:default;user-select:none}div:where(.swal2-icon) .swal2-icon-content{display:flex;align-items:center;font-size:3.75em}div:where(.swal2-icon).swal2-error{border-color:#f27474;color:#f27474}div:where(.swal2-icon).swal2-error .swal2-x-mark{position:relative;flex-grow:1}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-error.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-error.swal2-icon-show .swal2-x-mark{animation:swal2-animate-error-x-mark .5s}div:where(.swal2-icon).swal2-warning{border-color:#f8bb86;color:#f8bb86}div:where(.swal2-icon).swal2-warning.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-warning.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .5s}div:where(.swal2-icon).swal2-info{border-color:#3fc3ee;color:#3fc3ee}div:where(.swal2-icon).swal2-info.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-info.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .8s}div:where(.swal2-icon).swal2-question{border-color:#87adbd;color:#87adbd}div:where(.swal2-icon).swal2-question.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-question.swal2-icon-show .swal2-icon-content{animation:swal2-animate-question-mark .8s}div:where(.swal2-icon).swal2-success{border-color:#a5dc86;color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;border-radius:50%}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.4375em;left:-2.0635em;transform:rotate(-45deg);transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.6875em;left:1.875em;transform:rotate(-45deg);transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}div:where(.swal2-icon).swal2-success .swal2-success-ring{position:absolute;z-index:2;top:-0.25em;left:-0.25em;box-sizing:content-box;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%}div:where(.swal2-icon).swal2-success .swal2-success-fix{position:absolute;z-index:1;top:.5em;left:1.625em;width:.4375em;height:5.625em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line]{display:block;position:absolute;z-index:2;height:.3125em;border-radius:.125em;background-color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.8125em;width:1.5625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-animate-success-line-tip .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-animate-success-line-long .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-circular-line-right{animation:swal2-rotate-success-circular-line 4.25s ease-in}[class^=swal2]{-webkit-tap-highlight-color:rgba(0,0,0,0)}.swal2-show{animation:var(--swal2-show-animation)}.swal2-hide{animation:var(--swal2-hide-animation)}.swal2-noanimation{transition:none}.swal2-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}.swal2-rtl .swal2-close{margin-right:initial;margin-left:0}.swal2-rtl .swal2-timer-progress-bar{right:0;left:auto}.swal2-toast{box-sizing:border-box;grid-column:1/4 !important;grid-row:1/4 !important;grid-template-columns:min-content auto min-content;padding:1em;overflow-y:hidden;border:var(--swal2-toast-border);background:var(--swal2-background);box-shadow:var(--swal2-toast-box-shadow);pointer-events:auto}.swal2-toast>*{grid-column:2}.swal2-toast h2:where(.swal2-title){margin:.5em 1em;padding:0;font-size:1em;text-align:initial}.swal2-toast .swal2-loading{justify-content:center}.swal2-toast input:where(.swal2-input){height:2em;margin:.5em;font-size:1em}.swal2-toast .swal2-validation-message{font-size:1em}.swal2-toast div:where(.swal2-footer){margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-toast button:where(.swal2-close){grid-column:3/3;grid-row:1/99;align-self:center;width:.8em;height:.8em;margin:0;font-size:2em}.swal2-toast div:where(.swal2-html-container){margin:.5em 1em;padding:0;overflow:initial;font-size:1em;text-align:initial}.swal2-toast div:where(.swal2-html-container):empty{padding:0}.swal2-toast .swal2-loader{grid-column:1;grid-row:1/99;align-self:center;width:2em;height:2em;margin:.25em}.swal2-toast .swal2-icon{grid-column:1;grid-row:1/99;align-self:center;width:2em;min-width:2em;height:2em;margin:0 .5em 0 0}.swal2-toast .swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:1.8em;font-weight:bold}.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-toast div:where(.swal2-actions){justify-content:flex-start;height:auto;margin:0;margin-top:.5em;padding:0 .5em}.swal2-toast button:where(.swal2-styled){margin:.25em .5em;padding:.4em .6em;font-size:1em}.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:1.6em;height:3em;border-radius:50%}.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.8em;left:-0.5em;transform:rotate(-45deg);transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.25em;left:.9375em;transform-origin:0 1.5em;border-radius:0 4em 4em 0}.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-toast-animate-success-line-tip .75s}.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-toast-animate-success-line-long .75s}.swal2-toast.swal2-show{animation:var(--swal2-toast-show-animation)}.swal2-toast.swal2-hide{animation:var(--swal2-toast-hide-animation)}@keyframes swal2-show{0%{transform:translate3d(0, -50px, 0) scale(0.9);opacity:0}100%{transform:translate3d(0, 0, 0) scale(1);opacity:1}}@keyframes swal2-hide{0%{transform:translate3d(0, 0, 0) scale(1);opacity:1}100%{transform:translate3d(0, -50px, 0) scale(0.9);opacity:0}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-0.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(0.4);opacity:0}50%{margin-top:1.625em;transform:scale(0.4);opacity:0}80%{margin-top:-0.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0deg);opacity:1}}@keyframes swal2-rotate-loading{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes swal2-animate-question-mark{0%{transform:rotateY(-360deg)}100%{transform:rotateY(0)}}@keyframes swal2-animate-i-mark{0%{transform:rotateZ(45deg);opacity:0}25%{transform:rotateZ(-25deg);opacity:.4}50%{transform:rotateZ(15deg);opacity:.8}75%{transform:rotateZ(-5deg);opacity:1}100%{transform:rotateX(0);opacity:1}}@keyframes swal2-toast-show{0%{transform:translateY(-0.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(0.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0deg)}}@keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-0.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}',
  );
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
    (at.useEffect(() => {
      tc.fire({
        icon: "info",
        title: "Terima Kasih",
        html: `
        <div style="display:flex;flex-direction:column;align-items:center;gap:12px;padding:8px 0">
          <p style="font-family:'Sora',sans-serif;font-size:13px;color:var(--text-secondary);line-height:1.6;margin:0">
            API ZYHUKA bisa gratis karena server kami berjalan di atas infrastruktur:
          </p>
          <div style="display:flex;flex-direction:column;align-items:center;gap:4px;padding:14px 24px;border:1px solid var(--border-color);background:var(--bg-tertiary)">
            <a href="https://atlantic-server.com" target="_blank" style="font-family:'JetBrains Mono',monospace;font-size:14px;color:#2563EB;text-decoration:none;font-weight:600">atlantic-server.com</a>
            <span style="font-family:'Sora',sans-serif;font-size:9px;color:var(--text-muted);text-transform:uppercase;letter-spacing:0.2em">&</span>
            <a href="https://bihost.my.id" target="_blank" style="font-family:'JetBrains Mono',monospace;font-size:14px;color:#2563EB;text-decoration:none;font-weight:600">bihost.my.id</a>
          </div>
        </div>
      `,
        confirmButtonText: "Mengerti",
        confirmButtonColor: "#2563EB",
        background: "var(--bg-secondary)",
        color: "var(--text-primary)",
        padding: "24px 28px",
        customClass: { popup: "fade-in", title: "font-head" },
      });
    }, []),
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
      }, []));
    const h = at.useMemo(() => {
      if (!n) return {};
      const g = {},
        p = i.toLowerCase();
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
    }, [n, i]);
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
                                className: "fade-in",
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
                                        hS,
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
                                        y,
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
function gS() {
  return b.jsx(mS, {});
}
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
                  children: j(ut),
                }),
                b.jsx("div", {
                  className:
                    "text-[10px] text-[var(--text-secondary)] mt-1 font-body",
                  children: "Guard layer",
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

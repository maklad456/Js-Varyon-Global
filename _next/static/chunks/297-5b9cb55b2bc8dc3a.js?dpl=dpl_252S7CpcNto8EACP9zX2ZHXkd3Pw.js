"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [297],
  {
    901: (e, t, n) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "RouterContext", {
          enumerable: !0,
          get: function () {
            return r;
          },
        });
      let r = n(8229)._(n(2115)).default.createContext(null);
    },
    1193: (e, t) => {
      function n(e) {
        var t;
        let { config: n, src: r, width: i, quality: a } = e,
          o =
            a ||
            (null == (t = n.qualities)
              ? void 0
              : t.reduce((e, t) =>
                  Math.abs(t - 75) < Math.abs(e - 75) ? t : e
                )) ||
            75;
        return (
          n.path +
          "?url=" +
          encodeURIComponent(r) +
          "&w=" +
          i +
          "&q=" +
          o +
          (r.startsWith("/_next/static/media/") && 1
            ? "&dpl=dpl_252S7CpcNto8EACP9zX2ZHXkd3Pw"
            : "")
        );
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return r;
          },
        }),
        (n.__next_img_default = !0);
      let r = n;
    },
    2464: (e, t, n) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "AmpStateContext", {
          enumerable: !0,
          get: function () {
            return r;
          },
        });
      let r = n(8229)._(n(2115)).default.createContext({});
    },
    3063: (e, t, n) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "Image", {
          enumerable: !0,
          get: function () {
            return _;
          },
        });
      let r = n(8229),
        i = n(6966),
        a = n(5155),
        o = i._(n(2115)),
        l = r._(n(7650)),
        s = r._(n(5564)),
        u = n(8883),
        d = n(5840),
        c = n(6752);
      n(3230);
      let f = n(901),
        m = r._(n(1193)),
        p = n(6654),
        g = {
          deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
          imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
          path: "/_next/image",
          loader: "default",
          dangerouslyAllowSVG: !1,
          unoptimized: !1,
        };
      function h(e, t, n, r, i, a, o) {
        let l = null == e ? void 0 : e.src;
        e &&
          e["data-loaded-src"] !== l &&
          ((e["data-loaded-src"] = l),
          ("decode" in e ? e.decode() : Promise.resolve())
            .catch(() => {})
            .then(() => {
              if (e.parentElement && e.isConnected) {
                if (("empty" !== t && i(!0), null == n ? void 0 : n.current)) {
                  let t = new Event("load");
                  Object.defineProperty(t, "target", {
                    writable: !1,
                    value: e,
                  });
                  let r = !1,
                    i = !1;
                  n.current({
                    ...t,
                    nativeEvent: t,
                    currentTarget: e,
                    target: e,
                    isDefaultPrevented: () => r,
                    isPropagationStopped: () => i,
                    persist: () => {},
                    preventDefault: () => {
                      (r = !0), t.preventDefault();
                    },
                    stopPropagation: () => {
                      (i = !0), t.stopPropagation();
                    },
                  });
                }
                (null == r ? void 0 : r.current) && r.current(e);
              }
            }));
      }
      function v(e) {
        return o.use ? { fetchPriority: e } : { fetchpriority: e };
      }
      let y = (0, o.forwardRef)((e, t) => {
        let {
            src: n,
            srcSet: r,
            sizes: i,
            height: l,
            width: s,
            decoding: u,
            className: d,
            style: c,
            fetchPriority: f,
            placeholder: m,
            loading: g,
            unoptimized: y,
            fill: b,
            onLoadRef: _,
            onLoadingCompleteRef: w,
            setBlurComplete: x,
            setShowAltText: E,
            sizesInput: j,
            onLoad: C,
            onError: S,
            ...O
          } = e,
          P = (0, o.useCallback)(
            (e) => {
              e && (S && (e.src = e.src), e.complete && h(e, m, _, w, x, y, j));
            },
            [n, m, _, w, x, S, y, j]
          ),
          M = (0, p.useMergedRef)(t, P);
        return (0, a.jsx)("img", {
          ...O,
          ...v(f),
          loading: g,
          width: s,
          height: l,
          decoding: u,
          "data-nimg": b ? "fill" : "1",
          className: d,
          style: c,
          sizes: i,
          srcSet: r,
          src: n,
          ref: M,
          onLoad: (e) => {
            h(e.currentTarget, m, _, w, x, y, j);
          },
          onError: (e) => {
            E(!0), "empty" !== m && x(!0), S && S(e);
          },
        });
      });
      function b(e) {
        let { isAppRouter: t, imgAttributes: n } = e,
          r = {
            as: "image",
            imageSrcSet: n.srcSet,
            imageSizes: n.sizes,
            crossOrigin: n.crossOrigin,
            referrerPolicy: n.referrerPolicy,
            ...v(n.fetchPriority),
          };
        return t && l.default.preload
          ? (l.default.preload(n.src, r), null)
          : (0, a.jsx)(s.default, {
              children: (0, a.jsx)(
                "link",
                { rel: "preload", href: n.srcSet ? void 0 : n.src, ...r },
                "__nimg-" + n.src + n.srcSet + n.sizes
              ),
            });
      }
      let _ = (0, o.forwardRef)((e, t) => {
        let n = (0, o.useContext)(f.RouterContext),
          r = (0, o.useContext)(c.ImageConfigContext),
          i = (0, o.useMemo)(() => {
            var e;
            let t = g || r || d.imageConfigDefault,
              n = [...t.deviceSizes, ...t.imageSizes].sort((e, t) => e - t),
              i = t.deviceSizes.sort((e, t) => e - t),
              a = null == (e = t.qualities) ? void 0 : e.sort((e, t) => e - t);
            return { ...t, allSizes: n, deviceSizes: i, qualities: a };
          }, [r]),
          { onLoad: l, onLoadingComplete: s } = e,
          p = (0, o.useRef)(l);
        (0, o.useEffect)(() => {
          p.current = l;
        }, [l]);
        let h = (0, o.useRef)(s);
        (0, o.useEffect)(() => {
          h.current = s;
        }, [s]);
        let [v, _] = (0, o.useState)(!1),
          [w, x] = (0, o.useState)(!1),
          { props: E, meta: j } = (0, u.getImgProps)(e, {
            defaultLoader: m.default,
            imgConf: i,
            blurComplete: v,
            showAltText: w,
          });
        return (0, a.jsxs)(a.Fragment, {
          children: [
            (0, a.jsx)(y, {
              ...E,
              unoptimized: j.unoptimized,
              placeholder: j.placeholder,
              fill: j.fill,
              onLoadRef: p,
              onLoadingCompleteRef: h,
              setBlurComplete: _,
              setShowAltText: x,
              sizesInput: e.sizes,
              ref: t,
            }),
            j.priority
              ? (0, a.jsx)(b, { isAppRouter: !n, imgAttributes: E })
              : null,
          ],
        });
      });
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    3850: (e, t, n) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        !(function (e, t) {
          for (var n in t)
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        })(t, {
          default: function () {
            return s;
          },
          getImageProps: function () {
            return l;
          },
        });
      let r = n(8229),
        i = n(8883),
        a = n(3063),
        o = r._(n(1193));
      function l(e) {
        let { props: t } = (0, i.getImgProps)(e, {
          defaultLoader: o.default,
          imgConf: {
            deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
            imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
            path: "/_next/image",
            loader: "default",
            dangerouslyAllowSVG: !1,
            unoptimized: !1,
          },
        });
        for (let [e, n] of Object.entries(t)) void 0 === n && delete t[e];
        return { props: t };
      }
      let s = a.Image;
    },
    5029: (e, t, n) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return o;
          },
        });
      let r = n(2115),
        i = r.useLayoutEffect,
        a = r.useEffect;
      function o(e) {
        let { headManager: t, reduceComponentsToState: n } = e;
        function o() {
          if (t && t.mountedInstances) {
            let i = r.Children.toArray(
              Array.from(t.mountedInstances).filter(Boolean)
            );
            t.updateHead(n(i, e));
          }
        }
        return (
          i(() => {
            var n;
            return (
              null == t ||
                null == (n = t.mountedInstances) ||
                n.add(e.children),
              () => {
                var n;
                null == t ||
                  null == (n = t.mountedInstances) ||
                  n.delete(e.children);
              }
            );
          }),
          i(
            () => (
              t && (t._pendingUpdate = o),
              () => {
                t && (t._pendingUpdate = o);
              }
            )
          ),
          a(
            () => (
              t &&
                t._pendingUpdate &&
                (t._pendingUpdate(), (t._pendingUpdate = null)),
              () => {
                t &&
                  t._pendingUpdate &&
                  (t._pendingUpdate(), (t._pendingUpdate = null));
              }
            )
          ),
          null
        );
      }
    },
    5100: (e, t) => {
      function n(e) {
        let {
            widthInt: t,
            heightInt: n,
            blurWidth: r,
            blurHeight: i,
            blurDataURL: a,
            objectFit: o,
          } = e,
          l = r ? 40 * r : t,
          s = i ? 40 * i : n,
          u = l && s ? "viewBox='0 0 " + l + " " + s + "'" : "";
        return (
          "%3Csvg xmlns='http://www.w3.org/2000/svg' " +
          u +
          "%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='" +
          (u
            ? "none"
            : "contain" === o
            ? "xMidYMid"
            : "cover" === o
            ? "xMidYMid slice"
            : "none") +
          "' style='filter: url(%23b);' href='" +
          a +
          "'/%3E%3C/svg%3E"
        );
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "getImageBlurSvg", {
          enumerable: !0,
          get: function () {
            return n;
          },
        });
    },
    5564: (e, t, n) => {
      var r = n(9509);
      Object.defineProperty(t, "__esModule", { value: !0 }),
        !(function (e, t) {
          for (var n in t)
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        })(t, {
          default: function () {
            return h;
          },
          defaultHead: function () {
            return f;
          },
        });
      let i = n(8229),
        a = n(6966),
        o = n(5155),
        l = a._(n(2115)),
        s = i._(n(5029)),
        u = n(2464),
        d = n(2830),
        c = n(7544);
      function f(e) {
        void 0 === e && (e = !1);
        let t = [(0, o.jsx)("meta", { charSet: "utf-8" }, "charset")];
        return (
          e ||
            t.push(
              (0, o.jsx)(
                "meta",
                { name: "viewport", content: "width=device-width" },
                "viewport"
              )
            ),
          t
        );
      }
      function m(e, t) {
        return "string" == typeof t || "number" == typeof t
          ? e
          : t.type === l.default.Fragment
          ? e.concat(
              l.default.Children.toArray(t.props.children).reduce(
                (e, t) =>
                  "string" == typeof t || "number" == typeof t
                    ? e
                    : e.concat(t),
                []
              )
            )
          : e.concat(t);
      }
      n(3230);
      let p = ["name", "httpEquiv", "charSet", "itemProp"];
      function g(e, t) {
        let { inAmpMode: n } = t;
        return e
          .reduce(m, [])
          .reverse()
          .concat(f(n).reverse())
          .filter(
            (function () {
              let e = new Set(),
                t = new Set(),
                n = new Set(),
                r = {};
              return (i) => {
                let a = !0,
                  o = !1;
                if (
                  i.key &&
                  "number" != typeof i.key &&
                  i.key.indexOf("$") > 0
                ) {
                  o = !0;
                  let t = i.key.slice(i.key.indexOf("$") + 1);
                  e.has(t) ? (a = !1) : e.add(t);
                }
                switch (i.type) {
                  case "title":
                  case "base":
                    t.has(i.type) ? (a = !1) : t.add(i.type);
                    break;
                  case "meta":
                    for (let e = 0, t = p.length; e < t; e++) {
                      let t = p[e];
                      if (i.props.hasOwnProperty(t))
                        if ("charSet" === t) n.has(t) ? (a = !1) : n.add(t);
                        else {
                          let e = i.props[t],
                            n = r[t] || new Set();
                          ("name" !== t || !o) && n.has(e)
                            ? (a = !1)
                            : (n.add(e), (r[t] = n));
                        }
                    }
                }
                return a;
              };
            })()
          )
          .reverse()
          .map((e, t) => {
            let i = e.key || t;
            if (
              r.env.__NEXT_OPTIMIZE_FONTS &&
              !n &&
              "link" === e.type &&
              e.props.href &&
              [
                "https://fonts.googleapis.com/css",
                "https://use.typekit.net/",
              ].some((t) => e.props.href.startsWith(t))
            ) {
              let t = { ...(e.props || {}) };
              return (
                (t["data-href"] = t.href),
                (t.href = void 0),
                (t["data-optimized-fonts"] = !0),
                l.default.cloneElement(e, t)
              );
            }
            return l.default.cloneElement(e, { key: i });
          });
      }
      let h = function (e) {
        let { children: t } = e,
          n = (0, l.useContext)(u.AmpStateContext),
          r = (0, l.useContext)(d.HeadManagerContext);
        return (0, o.jsx)(s.default, {
          reduceComponentsToState: g,
          headManager: r,
          inAmpMode: (0, c.isInAmpMode)(n),
          children: t,
        });
      };
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    5840: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        !(function (e, t) {
          for (var n in t)
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        })(t, {
          VALID_LOADERS: function () {
            return n;
          },
          imageConfigDefault: function () {
            return r;
          },
        });
      let n = ["default", "imgix", "cloudinary", "akamai", "custom"],
        r = {
          deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
          imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
          path: "/_next/image",
          loader: "default",
          loaderFile: "",
          domains: [],
          disableStaticImages: !1,
          minimumCacheTTL: 60,
          formats: ["image/webp"],
          dangerouslyAllowSVG: !1,
          contentSecurityPolicy:
            "script-src 'none'; frame-src 'none'; sandbox;",
          contentDispositionType: "attachment",
          localPatterns: void 0,
          remotePatterns: [],
          qualities: void 0,
          unoptimized: !1,
        };
    },
    6440: (e, t, n) => {
      var r = n(2115),
        i = (function (e) {
          return e && "object" == typeof e && "default" in e
            ? e
            : { default: e };
        })(r);
      !(function (e) {
        if (!e || "undefined" == typeof window) return;
        let t = document.createElement("style");
        t.setAttribute("type", "text/css"),
          (t.innerHTML = e),
          document.head.appendChild(t);
      })(
        '.rfm-marquee-container {\n  overflow-x: hidden;\n  display: flex;\n  flex-direction: row;\n  position: relative;\n  width: var(--width);\n  transform: var(--transform);\n}\n.rfm-marquee-container:hover div {\n  animation-play-state: var(--pause-on-hover);\n}\n.rfm-marquee-container:active div {\n  animation-play-state: var(--pause-on-click);\n}\n\n.rfm-overlay {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n}\n.rfm-overlay::before, .rfm-overlay::after {\n  background: linear-gradient(to right, var(--gradient-color), rgba(255, 255, 255, 0));\n  content: "";\n  height: 100%;\n  position: absolute;\n  width: var(--gradient-width);\n  z-index: 2;\n  pointer-events: none;\n  touch-action: none;\n}\n.rfm-overlay::after {\n  right: 0;\n  top: 0;\n  transform: rotateZ(180deg);\n}\n.rfm-overlay::before {\n  left: 0;\n  top: 0;\n}\n\n.rfm-marquee {\n  flex: 0 0 auto;\n  min-width: var(--min-width);\n  z-index: 1;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  animation: scroll var(--duration) linear var(--delay) var(--iteration-count);\n  animation-play-state: var(--play);\n  animation-delay: var(--delay);\n  animation-direction: var(--direction);\n}\n@keyframes scroll {\n  0% {\n    transform: translateX(0%);\n  }\n  100% {\n    transform: translateX(-100%);\n  }\n}\n\n.rfm-initial-child-container {\n  flex: 0 0 auto;\n  display: flex;\n  min-width: auto;\n  flex-direction: row;\n  align-items: center;\n}\n\n.rfm-child {\n  transform: var(--transform);\n}'
      ),
        (t.A = r.forwardRef(function (e, t) {
          let {
              style: n = {},
              className: a = "",
              autoFill: o = !1,
              play: l = !0,
              pauseOnHover: s = !1,
              pauseOnClick: u = !1,
              direction: d = "left",
              speed: c = 50,
              delay: f = 0,
              loop: m = 0,
              gradient: p = !1,
              gradientColor: g = "white",
              gradientWidth: h = 200,
              onFinish: v,
              onCycleComplete: y,
              onMount: b,
              children: _,
            } = e,
            [w, x] = r.useState(0),
            [E, j] = r.useState(0),
            [C, S] = r.useState(1),
            [O, P] = r.useState(!1),
            M = r.useRef(null),
            R = t || M,
            z = r.useRef(null),
            k = r.useCallback(() => {
              if (z.current && R.current) {
                let e = R.current.getBoundingClientRect(),
                  t = z.current.getBoundingClientRect(),
                  n = e.width,
                  r = t.width;
                ("up" === d || "down" === d) &&
                  ((n = e.height), (r = t.height)),
                  o && n && r ? S(r < n ? Math.ceil(n / r) : 1) : S(1),
                  x(n),
                  j(r);
              }
            }, [o, R, d]);
          r.useEffect(() => {
            if (O && (k(), z.current && R.current)) {
              let e = new ResizeObserver(() => k());
              return (
                e.observe(R.current),
                e.observe(z.current),
                () => {
                  e && e.disconnect();
                }
              );
            }
          }, [k, R, O]),
            r.useEffect(() => {
              k();
            }, [k, _]),
            r.useEffect(() => {
              P(!0);
            }, []),
            r.useEffect(() => {
              "function" == typeof b && b();
            }, []);
          let I = r.useMemo(
              () => (o ? (E * C) / c : E < w ? w / c : E / c),
              [o, w, E, C, c]
            ),
            A = r.useMemo(
              () =>
                Object.assign(Object.assign({}, n), {
                  "--pause-on-hover": !l || s ? "paused" : "running",
                  "--pause-on-click":
                    !l || (s && !u) || u ? "paused" : "running",
                  "--width": "up" === d || "down" === d ? "100vh" : "100%",
                  "--transform":
                    "up" === d
                      ? "rotate(-90deg)"
                      : "down" === d
                      ? "rotate(90deg)"
                      : "none",
                }),
              [n, l, s, u, d]
            ),
            N = r.useMemo(
              () => ({
                "--gradient-color": g,
                "--gradient-width":
                  "number" == typeof h ? "".concat(h, "px") : h,
              }),
              [g, h]
            ),
            D = r.useMemo(
              () => ({
                "--play": l ? "running" : "paused",
                "--direction": "left" === d ? "normal" : "reverse",
                "--duration": "".concat(I, "s"),
                "--delay": "".concat(f, "s"),
                "--iteration-count": m ? "".concat(m) : "infinite",
                "--min-width": o ? "auto" : "100%",
              }),
              [l, d, I, f, m, o]
            ),
            T = r.useMemo(
              () => ({
                "--transform":
                  "up" === d
                    ? "rotate(90deg)"
                    : "down" === d
                    ? "rotate(-90deg)"
                    : "none",
              }),
              [d]
            ),
            q = r.useCallback(
              (e) =>
                [...Array(Number.isFinite(e) && e >= 0 ? e : 0)].map((e, t) =>
                  i.default.createElement(
                    r.Fragment,
                    { key: t },
                    r.Children.map(_, (e) =>
                      i.default.createElement(
                        "div",
                        { style: T, className: "rfm-child" },
                        e
                      )
                    )
                  )
                ),
              [T, _]
            );
          return O
            ? i.default.createElement(
                "div",
                { ref: R, style: A, className: "rfm-marquee-container " + a },
                p &&
                  i.default.createElement("div", {
                    style: N,
                    className: "rfm-overlay",
                  }),
                i.default.createElement(
                  "div",
                  {
                    className: "rfm-marquee",
                    style: D,
                    onAnimationIteration: y,
                    onAnimationEnd: v,
                  },
                  i.default.createElement(
                    "div",
                    { className: "rfm-initial-child-container", ref: z },
                    r.Children.map(_, (e) =>
                      i.default.createElement(
                        "div",
                        { style: T, className: "rfm-child" },
                        e
                      )
                    )
                  ),
                  q(C - 1)
                ),
                i.default.createElement(
                  "div",
                  { className: "rfm-marquee", style: D },
                  q(C)
                )
              )
            : null;
        }));
    },
    6752: (e, t, n) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "ImageConfigContext", {
          enumerable: !0,
          get: function () {
            return a;
          },
        });
      let r = n(8229)._(n(2115)),
        i = n(5840),
        a = r.default.createContext(i.imageConfigDefault);
    },
    6766: (e, t, n) => {
      n.d(t, { default: () => i.a });
      var r = n(3850),
        i = n.n(r);
    },
    7544: (e, t) => {
      function n(e) {
        let {
          ampFirst: t = !1,
          hybrid: n = !1,
          hasQuery: r = !1,
        } = void 0 === e ? {} : e;
        return t || (n && r);
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "isInAmpMode", {
          enumerable: !0,
          get: function () {
            return n;
          },
        });
    },
    8883: (e, t, n) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "getImgProps", {
          enumerable: !0,
          get: function () {
            return s;
          },
        }),
        n(3230);
      let r = n(5100),
        i = n(5840),
        a = ["-moz-initial", "fill", "none", "scale-down", void 0];
      function o(e) {
        return void 0 !== e.default;
      }
      function l(e) {
        return void 0 === e
          ? e
          : "number" == typeof e
          ? Number.isFinite(e)
            ? e
            : NaN
          : "string" == typeof e && /^[0-9]+$/.test(e)
          ? parseInt(e, 10)
          : NaN;
      }
      function s(e, t) {
        var n, s;
        let u,
          d,
          c,
          {
            src: f,
            sizes: m,
            unoptimized: p = !1,
            priority: g = !1,
            loading: h,
            className: v,
            quality: y,
            width: b,
            height: _,
            fill: w = !1,
            style: x,
            overrideSrc: E,
            onLoad: j,
            onLoadingComplete: C,
            placeholder: S = "empty",
            blurDataURL: O,
            fetchPriority: P,
            decoding: M = "async",
            layout: R,
            objectFit: z,
            objectPosition: k,
            lazyBoundary: I,
            lazyRoot: A,
            ...N
          } = e,
          { imgConf: D, showAltText: T, blurComplete: q, defaultLoader: F } = t,
          L = D || i.imageConfigDefault;
        if ("allSizes" in L) u = L;
        else {
          let e = [...L.deviceSizes, ...L.imageSizes].sort((e, t) => e - t),
            t = L.deviceSizes.sort((e, t) => e - t),
            r = null == (n = L.qualities) ? void 0 : n.sort((e, t) => e - t);
          u = { ...L, allSizes: e, deviceSizes: t, qualities: r };
        }
        if (void 0 === F)
          throw Object.defineProperty(
            Error(
              "images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config"
            ),
            "__NEXT_ERROR_CODE",
            { value: "E163", enumerable: !1, configurable: !0 }
          );
        let U = N.loader || F;
        delete N.loader, delete N.srcSet;
        let B = "__next_img_default" in U;
        if (B) {
          if ("custom" === u.loader)
            throw Object.defineProperty(
              Error(
                'Image with src "' +
                  f +
                  '" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader'
              ),
              "__NEXT_ERROR_CODE",
              { value: "E252", enumerable: !1, configurable: !0 }
            );
        } else {
          let e = U;
          U = (t) => {
            let { config: n, ...r } = t;
            return e(r);
          };
        }
        if (R) {
          "fill" === R && (w = !0);
          let e = {
            intrinsic: { maxWidth: "100%", height: "auto" },
            responsive: { width: "100%", height: "auto" },
          }[R];
          e && (x = { ...x, ...e });
          let t = { responsive: "100vw", fill: "100vw" }[R];
          t && !m && (m = t);
        }
        let X = "",
          G = l(b),
          W = l(_);
        if ((s = f) && "object" == typeof s && (o(s) || void 0 !== s.src)) {
          let e = o(f) ? f.default : f;
          if (!e.src)
            throw Object.defineProperty(
              Error(
                "An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received " +
                  JSON.stringify(e)
              ),
              "__NEXT_ERROR_CODE",
              { value: "E460", enumerable: !1, configurable: !0 }
            );
          if (!e.height || !e.width)
            throw Object.defineProperty(
              Error(
                "An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received " +
                  JSON.stringify(e)
              ),
              "__NEXT_ERROR_CODE",
              { value: "E48", enumerable: !1, configurable: !0 }
            );
          if (
            ((d = e.blurWidth),
            (c = e.blurHeight),
            (O = O || e.blurDataURL),
            (X = e.src),
            !w)
          )
            if (G || W) {
              if (G && !W) {
                let t = G / e.width;
                W = Math.round(e.height * t);
              } else if (!G && W) {
                let t = W / e.height;
                G = Math.round(e.width * t);
              }
            } else (G = e.width), (W = e.height);
        }
        let H = !g && ("lazy" === h || void 0 === h);
        (!(f = "string" == typeof f ? f : X) ||
          f.startsWith("data:") ||
          f.startsWith("blob:")) &&
          ((p = !0), (H = !1)),
          u.unoptimized && (p = !0),
          B &&
            !u.dangerouslyAllowSVG &&
            f.split("?", 1)[0].endsWith(".svg") &&
            (p = !0);
        let V = l(y),
          Z = Object.assign(
            w
              ? {
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  left: 0,
                  top: 0,
                  right: 0,
                  bottom: 0,
                  objectFit: z,
                  objectPosition: k,
                }
              : {},
            T ? {} : { color: "transparent" },
            x
          ),
          $ =
            q || "empty" === S
              ? null
              : "blur" === S
              ? 'url("data:image/svg+xml;charset=utf-8,' +
                (0, r.getImageBlurSvg)({
                  widthInt: G,
                  heightInt: W,
                  blurWidth: d,
                  blurHeight: c,
                  blurDataURL: O || "",
                  objectFit: Z.objectFit,
                }) +
                '")'
              : 'url("' + S + '")',
          J = a.includes(Z.objectFit)
            ? "fill" === Z.objectFit
              ? "100% 100%"
              : "cover"
            : Z.objectFit,
          Y = $
            ? {
                backgroundSize: J,
                backgroundPosition: Z.objectPosition || "50% 50%",
                backgroundRepeat: "no-repeat",
                backgroundImage: $,
              }
            : {},
          K = (function (e) {
            let {
              config: t,
              src: n,
              unoptimized: r,
              width: i,
              quality: a,
              sizes: o,
              loader: l,
            } = e;
            if (r) return { src: n, srcSet: void 0, sizes: void 0 };
            let { widths: s, kind: u } = (function (e, t, n) {
                let { deviceSizes: r, allSizes: i } = e;
                if (n) {
                  let e = /(^|\s)(1?\d?\d)vw/g,
                    t = [];
                  for (let r; (r = e.exec(n)); ) t.push(parseInt(r[2]));
                  if (t.length) {
                    let e = 0.01 * Math.min(...t);
                    return {
                      widths: i.filter((t) => t >= r[0] * e),
                      kind: "w",
                    };
                  }
                  return { widths: i, kind: "w" };
                }
                return "number" != typeof t
                  ? { widths: r, kind: "w" }
                  : {
                      widths: [
                        ...new Set(
                          [t, 2 * t].map(
                            (e) => i.find((t) => t >= e) || i[i.length - 1]
                          )
                        ),
                      ],
                      kind: "x",
                    };
              })(t, i, o),
              d = s.length - 1;
            return {
              sizes: o || "w" !== u ? o : "100vw",
              srcSet: s
                .map(
                  (e, r) =>
                    l({ config: t, src: n, quality: a, width: e }) +
                    " " +
                    ("w" === u ? e : r + 1) +
                    u
                )
                .join(", "),
              src: l({ config: t, src: n, quality: a, width: s[d] }),
            };
          })({
            config: u,
            src: f,
            unoptimized: p,
            width: G,
            quality: V,
            sizes: m,
            loader: U,
          });
        return {
          props: {
            ...N,
            loading: H ? "lazy" : h,
            fetchPriority: P,
            width: G,
            height: W,
            decoding: M,
            className: v,
            style: { ...Z, ...Y },
            sizes: K.sizes,
            srcSet: K.srcSet,
            src: E || K.src,
          },
          meta: { unoptimized: p, priority: g, placeholder: S, fill: w },
        };
      }
    },
  },
]);

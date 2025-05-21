(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [177],
  {
    1324: () => {},
    1828: (e, t, n) => {
      "use strict";
      n.d(t, { Analytics: () => l });
      var o = n(2115),
        a = n(9509),
        r = () => {
          window.va ||
            (window.va = function () {
              for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
                t[n] = arguments[n];
              (window.vaq = window.vaq || []).push(t);
            });
        };
      function i() {
        return "undefined" != typeof window;
      }
      function s() {
        return "production";
      }
      function d() {
        return (i() ? window.vam : s()) || "production";
      }
      function c() {
        return "development" === d();
      }
      function l(e) {
        return (
          (0, o.useEffect)(() => {
            var t;
            e.beforeSend &&
              (null == (t = window.va) ||
                t.call(window, "beforeSend", e.beforeSend));
          }, [e.beforeSend]),
          (0, o.useEffect)(() => {
            var t;
            !(function () {
              var e;
              let t =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : { debug: !0 };
              if (!i()) return;
              !(function () {
                let e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : "auto";
                if ("auto" === e) {
                  window.vam = s();
                  return;
                }
                window.vam = e;
              })(t.mode),
                r(),
                t.beforeSend &&
                  (null == (e = window.va) ||
                    e.call(window, "beforeSend", t.beforeSend));
              let n = t.scriptSrc
                ? t.scriptSrc
                : c()
                ? "https://va.vercel-scripts.com/v1/script.debug.js"
                : t.basePath
                ? "".concat(t.basePath, "/insights/script.js")
                : "/_vercel/insights/script.js";
              if (document.head.querySelector('script[src*="'.concat(n, '"]')))
                return;
              let o = document.createElement("script");
              (o.src = n),
                (o.defer = !0),
                (o.dataset.sdkn =
                  "@vercel/analytics" +
                  (t.framework ? "/".concat(t.framework) : "")),
                (o.dataset.sdkv = "1.5.0"),
                t.disableAutoTrack && (o.dataset.disableAutoTrack = "1"),
                t.endpoint
                  ? (o.dataset.endpoint = t.endpoint)
                  : t.basePath &&
                    (o.dataset.endpoint = "".concat(t.basePath, "/insights")),
                t.dsn && (o.dataset.dsn = t.dsn),
                (o.onerror = () => {
                  let e = c()
                    ? "Please check if any ad blockers are enabled and try again."
                    : "Be sure to enable Web Analytics for your project and deploy again. See https://vercel.com/docs/analytics/quickstart for more information.";
                  console.log(
                    "[Vercel Web Analytics] Failed to load script from "
                      .concat(n, ". ")
                      .concat(e)
                  );
                }),
                c() && !1 === t.debug && (o.dataset.debug = "false"),
                document.head.appendChild(o);
            })({
              framework: e.framework || "react",
              basePath:
                null != (t = e.basePath)
                  ? t
                  : (function () {
                      if (void 0 !== a && void 0 !== a.env)
                        return a.env.REACT_APP_VERCEL_OBSERVABILITY_BASEPATH;
                    })(),
              ...(void 0 !== e.route && { disableAutoTrack: !0 }),
              ...e,
            });
          }, []),
          (0, o.useEffect)(() => {
            e.route &&
              e.path &&
              (function (e) {
                var t;
                let { route: n, path: o } = e;
                null == (t = window.va) ||
                  t.call(window, "pageview", { route: n, path: o });
              })({ route: e.route, path: e.path });
          }, [e.route, e.path]),
          null
        );
      }
    },
    3481: (e, t, n) => {
      Promise.resolve().then(n.bind(n, 1828)),
        Promise.resolve().then(n.bind(n, 4642)),
        Promise.resolve().then(n.t.bind(n, 5786, 23)),
        Promise.resolve().then(n.t.bind(n, 1324, 23));
    },
    4642: (e, t, n) => {
      "use strict";
      n.d(t, { default: () => i });
      var o = n(5155),
        a = n(1892),
        r = n(387);
      let i = () =>
        (0, o.jsx)("div", {
          className: "absolute inset-0 z-[-1] pointer-events-none",
          children: (0, o.jsx)(a.b, {
            style: { position: "absolute", top: 0, zIndex: -1 },
            children: (0, o.jsx)(r.a, {
              control: "query",
              urlString:
                "https://www.shadergradient.co/customize?animate=on&axesHelper=off&bgColor1=%23000000&bgColor2=%23000000&brightness=1.2&cAzimuthAngle=180&cDistance=3.6&cPolarAngle=90&cameraZoom=1&color1=%23000028&color2=%23000054&color3=%230000a8&destination=onCanvas&embedMode=off&envPreset=city&format=gif&fov=45&frameRate=10&gizmoHelper=hide&grain=off&lightType=3d&pixelDensity=0.9&positionX=-1.4&positionY=0&positionZ=0&range=enabled&rangeEnd=33&rangeStart=0&reflection=0.1&rotationX=0&rotationY=10&rotationZ=50&shader=defaults&type=waterPlane&uAmplitude=0&uDensity=0.7&uFrequency=5.5&uSpeed=0.1&uStrength=0.6&uTime=0&wireframe=false",
            }),
          }),
        });
    },
    5786: () => {},
  },
  (e) => {
    var t = (t) => e((e.s = t));
    e.O(0, [523, 77, 831, 367, 413, 805, 441, 684, 358], () => t(3481)),
      (_N_E = e.O());
  },
]);

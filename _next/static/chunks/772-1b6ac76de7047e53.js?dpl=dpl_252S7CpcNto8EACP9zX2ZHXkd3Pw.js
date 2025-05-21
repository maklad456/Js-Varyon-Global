(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [772],
  {
    786: (e, t, l) => {
      "use strict";
      l.d(t, { A: () => m });
      var s = l(5155);
      l(1324);
      var a = l(2115),
        r = l(802);
      let n = ["Web", "App", "Custom"],
        i = () => {
          let [e, t] = (0, a.useState)(0),
            l = (0, a.useRef)([]),
            i = (0, a.useRef)(null);
          (0, a.useEffect)(() => {
            l.current = n.map((e) =>
              Array(e.length)
                .fill(null)
                .map(() => a.createRef().current)
            );
          }, []),
            (0, a.useEffect)(() => {
              (() => {
                var e, l;
                let s =
                  null !=
                  (l =
                    null == (e = i.current)
                      ? void 0
                      : e.querySelectorAll("span[data-letter]"))
                    ? l
                    : [];
                r.os.fromTo(
                  s,
                  { opacity: 0, x: -15 },
                  {
                    opacity: 1,
                    x: 0,
                    duration: 0.5,
                    stagger: 0.05,
                    ease: "power2.out",
                  }
                ),
                  r.os.to(s, {
                    delay: 2,
                    opacity: 0,
                    x: 20,
                    duration: 0.4,
                    stagger: { each: 0.04, from: "end" },
                    ease: "power2.in",
                    onComplete: () => {
                      t((e) => (e + 1) % n.length);
                    },
                  });
              })();
            }, [e]);
          let c = n[e];
          return (0, s.jsx)("div", {
            ref: i,
            className:
              "text-5xl md:text-7xl lg:text-8xl w-full green-text flex gap-[0.02em] tracking-[-0.08em] text-center",
            children:
              null == c
                ? void 0
                : c
                    .split("")
                    .map((e, t) =>
                      (0, s.jsx)(
                        "span",
                        {
                          "data-letter": !0,
                          className: "inline-block opacity-0",
                          style: {
                            fontFamily: "DM-Mono-Italic, monospace",
                            fontStyle: "italic",
                          },
                          children: e,
                        },
                        t
                      )
                    ),
          });
        };
      var c = l(6682),
        o = l(9088),
        d = l(6779);
      r.Ay.registerPlugin(c.I, o.u);
      let x = () => {
          (0, a.useRef)(null);
          let e = (0, a.useRef)(null);
          return (0, s.jsxs)("div", {
            id: "hero-section",
            className:
               "box-border w-full snap-always snap-center h-[100dvh] min-h-[100dvh] flex flex-col items-center justify-center text-center",

            children: [
              (0, s.jsx)(d.A, {}),
              (0, s.jsxs)("div", {
                className:
                  "w-full flex flex-col items-center justify-center gap-12 px-4 md:px-8 lg:px-12 mx-auto",
                children: [
                  (0, s.jsxs)("div", {
                    children: [
                      (0, s.jsx)("p", {
                        className:
                          "text-5xl md:text-7xl lg:text-8xl white-silver-animated-text text-center",
                        children: "We Craft",
                      }),
                      (0, s.jsx)("div", {
                        className:
                          "h-16 md:h-20 lg:h-32 flex w-full flex-row items-center",
                        children: (0, s.jsx)(i, {}),
                      }),
                      (0, s.jsx)("p", {
                        className:
                          "text-5xl md:text-7xl lg:text-8xl w-full white-silver-animated-text1 text-center",
                        children: "Solutions",
                      }),
                    ],
                  }),
                  (0, s.jsx)("p", {
                    ref: e,
                    className:
                      "text-2xl md:text-3xl lg:text-3xl tracking-normal white-silver-animated-text2",
                    children: "Your ambition, our code, limitless reach.",
                  }),
                ],
              }),
            ],
          });
        },
        m = function () {
          return (0, s.jsx)("div", {
            className: "relative h-[100dvh] min-h-[100dvh] w-full flex",
            children: (0, s.jsx)("div", {
              className: "w-full h-full",
              children: (0, s.jsx)(x, {}),
            }),
          });
        };
    },
    824: (e, t, l) => {
      "use strict";
      l.d(t, { A: () => o });
      var s = l(5155),
        a = l(2115),
        r = l(802),
        n = l(9088);
      l(1324);
      var i = l(3552);
      r.Ay.registerPlugin(n.u);
      let c = () => {
          let e = (0, a.useRef)(null),
            t = (0, a.useRef)(null),
            l = (0, a.useRef)(null);
          (0, a.useEffect)(() => {
            let s = document.querySelector("#page-wrapper");
            if (!s || !t.current || !l.current || !e.current) return;
            let a = t.current,
              i = l.current;
            r.Ay.set([a, i], { opacity: 0, x: 100 });
            let d = n.u.create({
                trigger: e.current,
                start: "top center",
                end: "bottom center",
                scroller: s,
                onEnter: () => c(a, i),
                onLeave: () => o(a, i),
                onEnterBack: () => c(a, i),
                onLeaveBack: () => o(a, i),
              }),
              x = () => {
                d.isActive || r.Ay.set([a, i], { opacity: 0, x: 100 });
              };
            return (
              s.addEventListener("scroll", x),
              () => {
                d.kill(), s.removeEventListener("scroll", x);
              }
            );
          }, []);
          let c = (e, t) => {
              r.Ay.fromTo(
                [e, t],
                { opacity: 0, x: 100 },
                { opacity: 1, x: 0, duration: 0.4, delay: 0.06, ease: "none" }
              );
            },
            o = (e, t) => {
              r.Ay.to([e, t], {
                opacity: 0,
                x: 100,
                duration: 0.2,
                delay: 0.03,
                ease: "none",
              });
            };
          return (0, s.jsxs)("div", {
            id: "slide2",
            ref: e,
            className:
              "relative w-full h-[100dvh] min-h-[100dvh] flex items-center justify-center text-white",
            children: [
              (0, s.jsx)("div", {
                className: "w-full flex justify-center opacity-0",
                children: (0, s.jsx)(i.A, {
                  className: "w-[35vw] h-[50vh] lg:w-[35vw] lg:h-[28vw]",
                }),
              }),
              (0, s.jsxs)("div", {
                className:
                  "fixed w-11/12 lg:w-full bottom-0 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-4 text-center pointer-events-none z-50",
                children: [
                  (0, s.jsx)("p", {
                    ref: t,
                    id: "snappy-32-title",
                    className: "text-6xl lg:text-7xl font-light opacity-0",
                    children: "Identify",
                  }),
                  (0, s.jsxs)("p", {
                    ref: l,
                    id: "snappy-32-text",
                    className:
                      "text-base lg:text-lg lg:w-6/12 text-[#A0A4A1] opacity-0 px-1 lg:px-2",
                    children: [
                      "Engage with stakeholders, end-users and explore insights to uncover core needs, pinpoint challenges, align on objectives, and frame a unified, purpose-driven vision that guides every decision.",
                      (0, s.jsx)("br", { className: "hidden lg:block" }),
                      "",
                    ],
                  }),
                ],
              }),
            ],
          });
        },
        o = function () {
          return (0, s.jsx)("div", {
            className: "relative h-[100dvh] min-h-[100dvh] w-full flex",
            children: (0, s.jsx)("div", {
              className: "w-full h-full",
              children: (0, s.jsx)(c, {}),
            }),
          });
        };
    },
    912: (e, t, l) => {
      "use strict";
      l.d(t, { A: () => d });
      var s = l(5155),
        a = l(2115),
        r = l(802),
        n = l(6682),
        i = l(9088);
      l(1324);
      var c = l(3552);
      r.Ay.registerPlugin(n.I, i.u);
      let o = () => {
          let e = (0, a.useRef)(null);
          return (0, s.jsx)("div", {
            id: "center-section",
            ref: e,
            className:
              "box-border gap-8 w-full h-[100dvh] min-h-[100dvh] flex flex-col will-change-transform justify-center items-center text-white leading-normal tracking-normal",
            children: (0, s.jsxs)("div", {
              className:
                "w-full flex-col items-center justify-center gap-12 px-4 md:px-8 lg:px-12 mx-auto",
              children: [
                (0, s.jsxs)("p", {
                  className:
                    "text-2xl md:text-5xl w-full text-center leading-tight whitespace-pre-wrap",
                  children: [
                    (0, s.jsx)("span", {
                      className: "white-silver-animated-text",
                      children: "At Varyon Global, we accelerate your vision through our 3-step",
                    }),
                    (0, s.jsx)("span", {
                      className: "white-silver-animated-text1",
                      children: "",
                    }),
                    (0, s.jsx)("span", {
                      className: "white-silver-animated-text2",
                      children: "",
                    }),
                    (0, s.jsx)("span", {
                      className: "white-silver-animated-text2",
                      children: "",
                    }),
                    (0, s.jsx)("span", {
                      className: "white-silver-animated-text1",
                      children: "",
                    }),
                    (0, s.jsx)("span", {
                      className: "white-silver-animated-text1",
                      children: "",
                    }),
                    (0, s.jsx)("br", { className: "hidden lg:block" }),
                    (0, s.jsx)("span", {
                      className: "white-silver-animated-text1",
                      children: "",
                    }),
                    (0, s.jsx)("span", {
                      className: "white-silver-animated-text2",
                      children: "",
                    }),
                    (0, s.jsx)("span", {
                      className: "white-silver-animated-text",
                      children: "",
                    }),
                    (0, s.jsx)("span", {
                      className: "green-text",
                      children: "Vision to Value ",
                    }),
                    (0, s.jsx)("span", {
                      className: "white-silveranimated-text",
                      children: "framework.",
                    }),
                  ],
                }),
                (0, s.jsx)("div", {
                  className: "w-full opacity-0 flex justify-center",
                  children: (0, s.jsx)(c.A, {
                    className: "w-[50vw] h-[50vw] lg:w-[35vw] lg:h-[20vw]",
                  }),
                }),
              ],
            }),
          });
        },
        d = function () {
          return (0, s.jsx)("div", {
            className: "relative h-[100dvh] min-h-[100dvh] w-full flex",
            children: (0, s.jsx)("div", {
              className: "w-full h-full",
              children: (0, s.jsx)(o, {}),
            }),
          });
        };
    },
    1324: () => {},
    3552: (e, t, l) => {
      "use strict";
      l.d(t, { A: () => u });
      var s,
        a,
        r,
        n,
        i,
        c,
        o,
        d,
        x = l(2115);
      function m() {
        return (m = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var l = arguments[t];
                for (var s in l)
                  ({}).hasOwnProperty.call(l, s) && (e[s] = l[s]);
              }
              return e;
            }).apply(null, arguments);
      }
      let u = function (e) {
        return x.createElement(
          "svg",
          m(
            {
              viewBox: "0 0 494 494",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              width: "1em",
              height: "1em",
            },
            e
          ),
          s ||
            (s = x.createElement(
              "g",
              { filter: "url(#filter0_i_182_70)" },
              x.createElement("path", {
                d: "M494 247C494 110.586 383.414 0 247 0C110.586 0 0 110.586 0 247C0 383.414 110.586 494 247 494C383.414 494 494 383.414 494 247Z",
                fill: "url(#paint0_linear_182_70)",
              })
            )),
          a ||
            (a = x.createElement("path", {
              d: "M492.75 247C492.75 111.276 382.724 1.25 247 1.25C111.276 1.25 1.25 111.276 1.25 247C1.25 382.724 111.276 492.75 247 492.75C382.724 492.75 492.75 382.724 492.75 247Z",
              stroke: "url(#paint1_linear_182_70)",
              strokeWidth: 2.5,
            })),
          r ||
            (r = x.createElement(
              "g",
              { filter: "url(#filter1_i_182_70)" },
              x.createElement("path", {
                d: "M382 247C382 171.889 321.111 111 246 111C170.889 111 110 171.889 110 247C110 322.111 170.889 383 246 383C321.111 383 382 322.111 382 247Z",
                fill: "url(#paint2_linear_182_70)",
              })
            )),
          n ||
            (n = x.createElement("path", {
              d: "M380.75 247C380.75 172.58 320.42 112.25 246 112.25C171.58 112.25 111.25 172.58 111.25 247C111.25 321.42 171.58 381.75 246 381.75C320.42 381.75 380.75 321.42 380.75 247Z",
              stroke: "url(#paint3_linear_182_70)",
              strokeWidth: 2.5,
            })),
          i ||
            (i = x.createElement("path", {
              d: "M420.229 422.127L247.102 249",
              stroke: "#DCEAE3",
              strokeWidth: 2,
              strokeLinecap: "round",
            })),
          c ||
            (c = x.createElement("path", {
              opacity: 0.5,
              d: "M350.28 468.845L247.258 249.092",
              stroke: "#DCEAE3",
              strokeWidth: 2,
              strokeLinecap: "round",
            })),
          o ||
            (o = x.createElement("path", {
              opacity: 0.1,
              d: "M220.24 491.074L246.836 249.258",
              stroke: "#DCEAE3",
              strokeWidth: 2,
              strokeLinecap: "round",
            })),
          d ||
            (d = x.createElement(
              "defs",
              null,
              x.createElement(
                "filter",
                {
                  id: "filter0_i_182_70",
                  x: 0,
                  y: -24.0881,
                  width: 494,
                  height: 518.088,
                  filterUnits: "userSpaceOnUse",
                  colorInterpolationFilters: "sRGB",
                },
                x.createElement("feFlood", {
                  floodOpacity: 0,
                  result: "BackgroundImageFix",
                }),
                x.createElement("feBlend", {
                  mode: "normal",
                  in: "SourceGraphic",
                  in2: "BackgroundImageFix",
                  result: "shape",
                }),
                x.createElement("feColorMatrix", {
                  in: "SourceAlpha",
                  type: "matrix",
                  values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                  result: "hardAlpha",
                }),
                x.createElement("feOffset", { dy: -24.0881 }),
                x.createElement("feGaussianBlur", { stdDeviation: 18.0661 }),
                x.createElement("feComposite", {
                  in2: "hardAlpha",
                  operator: "arithmetic",
                  k2: -1,
                  k3: 1,
                }),
                x.createElement("feColorMatrix", {
                  type: "matrix",
                  values:
                    "0 0 0 0 0.536175 0 0 0 0 0.741662 0 0 0 0 0.638918 0 0 0 0.7 0",
                }),
                x.createElement("feBlend", {
                  mode: "normal",
                  in2: "shape",
                  result: "effect1_innerShadow_182_70",
                })
              ),
              x.createElement(
                "filter",
                {
                  id: "filter1_i_182_70",
                  x: 110,
                  y: 86.9119,
                  width: 272,
                  height: 296.088,
                  filterUnits: "userSpaceOnUse",
                  colorInterpolationFilters: "sRGB",
                },
                x.createElement("feFlood", {
                  floodOpacity: 0,
                  result: "BackgroundImageFix",
                }),
                x.createElement("feBlend", {
                  mode: "normal",
                  in: "SourceGraphic",
                  in2: "BackgroundImageFix",
                  result: "shape",
                }),
                x.createElement("feColorMatrix", {
                  in: "SourceAlpha",
                  type: "matrix",
                  values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                  result: "hardAlpha",
                }),
                x.createElement("feOffset", { dy: -24.0881 }),
                x.createElement("feGaussianBlur", { stdDeviation: 18.0661 }),
                x.createElement("feComposite", {
                  in2: "hardAlpha",
                  operator: "arithmetic",
                  k2: -1,
                  k3: 1,
                }),
                x.createElement("feColorMatrix", {
                  type: "matrix",
                  values:
                    "0 0 0 0 0.536175 0 0 0 0 0.741662 0 0 0 0 0.638918 0 0 0 0.7 0",
                }),
                x.createElement("feBlend", {
                  mode: "normal",
                  in2: "shape",
                  result: "effect1_innerShadow_182_70",
                })
              ),
              x.createElement(
                "linearGradient",
                {
                  id: "paint0_linear_182_70",
                  x1: 247,
                  y1: 0,
                  x2: 247,
                  y2: 494,
                  gradientUnits: "userSpaceOnUse",
                },
                x.createElement("stop", { stopColor: "white" }),
                x.createElement("stop", {
                  offset: 0.6,
                  stopColor: "#4CAA7D",
                  stopOpacity: 0.1,
                }),
                x.createElement("stop", {
                  offset: 1,
                  stopColor: "#E1FFF1",
                  stopOpacity: 0.5,
                })
              ),
              x.createElement(
                "linearGradient",
                {
                  id: "paint1_linear_182_70",
                  x1: 247,
                  y1: 215294e-13,
                  x2: 247,
                  y2: 494,
                  gradientUnits: "userSpaceOnUse",
                },
                x.createElement("stop", { stopColor: "#FDFFFE" }),
                x.createElement("stop", { offset: 0.4, stopColor: "#549876" }),
                x.createElement("stop", { offset: 1, stopColor: "white" })
              ),
              x.createElement(
                "linearGradient",
                {
                  id: "paint2_linear_182_70",
                  x1: 246,
                  y1: 111,
                  x2: 246,
                  y2: 383,
                  gradientUnits: "userSpaceOnUse",
                },
                x.createElement("stop", { stopColor: "white" }),
                x.createElement("stop", {
                  offset: 0.6,
                  stopColor: "#4CAA7D",
                  stopOpacity: 0.1,
                }),
                x.createElement("stop", {
                  offset: 1,
                  stopColor: "#E1FFF1",
                  stopOpacity: 0.5,
                })
              ),
              x.createElement(
                "linearGradient",
                {
                  id: "paint3_linear_182_70",
                  x1: 246,
                  y1: 111,
                  x2: 246,
                  y2: 383,
                  gradientUnits: "userSpaceOnUse",
                },
                x.createElement("stop", { stopColor: "#FDFFFE" }),
                x.createElement("stop", { offset: 0.4, stopColor: "#549876" }),
                x.createElement("stop", { offset: 1, stopColor: "white" })
              )
            ))
        );
      };
    },
    4073: (e, t, l) => {
      "use strict";
      l.d(t, { A: () => u });
      var s = l(5155),
        a = l(2115),
        r = l(802),
        n = l(9088),
        i = l(6682),
        c = l(8631),
        o = l(2610),
        d = l(6874),
        x = l.n(d),
        m = l(956);
      r.Ay.registerPlugin(n.u, i.I);
      let u = () => {
        let e = (0, a.useRef)(null),
          t = (0, a.useRef)(null),
          l = (0, a.useRef)(null),
          i = (0, a.useRef)(null),
          [d, u] = (0, a.useState)(!1),
          [p, h] = (0, a.useState)(!1),
          f = (0, a.useCallback)(() => {
            let e = r.Ay.timeline();
            d
              ? e
                  .to(l.current, {
                    x: "103%",
                    duration: 0.4,
                    ease: "power3.in",
                  })
                  .to(
                    i.current,
                    {
                      opacity: 0,
                      duration: 0.3,
                      ease: "power2.inOut",
                      onComplete: () => {
                        i.current && (i.current.style.pointerEvents = "none"),
                          h((e) => !e && e);
                      },
                    },
                    0
                  )
              : e
                  .to(i.current, {
                    opacity: 1,
                    duration: 0.3,
                    ease: "power2.inOut",
                    onStart: () => {
                      i.current && (i.current.style.pointerEvents = "auto");
                    },
                  })
                  .to(
                    l.current,
                    { x: 0, duration: 0.4, ease: "power3.out" },
                    0
                  ),
              u(!d);
          }, [d]);
        return (
          (0, a.useEffect)(() => {
            let t = e.current,
              l = document.getElementById("masterAnimationWrapper");
            t &&
              l &&
              n.u.create({
                trigger: t,
                start: "top center",
                end: "bottom center",
                scroller: "#page-wrapper",
                onEnter: () => {
                  r.Ay.killTweensOf(l),
                    r.Ay.to(l, { autoAlpha: 0, duration: 0.1, ease: "none" });
                },
                onEnterBack: () => {
                  r.Ay.killTweensOf(l),
                    r.Ay.to(l, { autoAlpha: 0, duration: 0.1, ease: "none" });
                },
              });
            let s = document.querySelector("#page-wrapper");
            if (s && t) {
              let e = t.getBoundingClientRect(),
                a = s.getBoundingClientRect();
              e.top < a.bottom &&
                e.bottom > a.top &&
                (r.Ay.killTweensOf(l), r.Ay.set(l, { autoAlpha: 0 }));
            }
          }, []),
          (0, a.useEffect)(() => {
            let t = () => {
              n.u.refresh(),
                requestAnimationFrame(() => {
                  let t = e.current,
                    l = document.getElementById("masterAnimationWrapper"),
                    s = document.querySelector("#page-wrapper");
                  if (s && t && l) {
                    let e = t.getBoundingClientRect(),
                      a = s.getBoundingClientRect();
                    e.top < a.bottom &&
                      e.bottom > a.top &&
                      (r.Ay.killTweensOf(l), r.Ay.set(l, { autoAlpha: 0 }));
                  }
                });
            };
            return (
              window.addEventListener("resize", t),
              () => window.removeEventListener("resize", t)
            );
          }, []),
          (0, s.jsxs)(s.Fragment, {
            children: [
              (0, s.jsx)("div", {
                id: "footer-section",
                ref: e,
                className:
                  "box-border w-full h-[100dvh] min-h-[100dvh] max-h-[100dvh] flex flex-col justify-center items-center text-white tracking-[-0.04em] leading-tight px-4 md:px-8 lg:px-12 overflow-hidden",
                children: (0, s.jsxs)("div", {
                  className: "w-full h-11/12 flex flex-col justify-between",
                  children: [
                    (0, s.jsxs)("div", {
                      className: "w-full h-fit flex flex-row justify-between",
                      ref: t,
                      children: [
                        (0, s.jsx)("div", {
                          className: "w-full h-fit flex flex-col gap-1",
                          children: (0, s.jsxs)("p", {
                            className:
                              "w-full lg:text-5xl text-5xl text-left leading-tight",
                            children: [
                              (0, s.jsx)("span", {
                                className: "text-white",
                                children: "Accelerate\xa0",
                              }),
                              (0, s.jsx)("span", {
                                className: "text-white",
                                children: "your\xa0",
                              }),
                              (0, s.jsx)("span", {
                                className: "green-text",
                                children: "AI\xa0",
                              }),
                              (0, s.jsx)("span", {
                                className: "green-text",
                                children: "adoption\xa0",
                              }),
                              (0, s.jsx)("span", {
                                className: "text-white",
                                children: "journey.",
                              }),
                            ],
                          }),
                        }),
                        (0, s.jsx)(c.A, {
                          className:
                            "w-48 h-0 lg:h-10 mt-0 lg:mt-4 hidden lg:block",
                        }),
                      ],
                    }),
                    (0, s.jsxs)("div", {
                      className:
                        "w-full h-fit flex lg:flex-row flex-col-reverse lg:items-baseline-last justify-between tracking-wider text-sm relative gap-8 lg:gap-0",
                      children: [
                        (0, s.jsxs)("div", {
                          className:
                            "flex flex-col w-full lg:w-1/3 gap-1 lg:gap-2 order-3 md:order-1 footer-contact",
                          children: [
                            (0, s.jsx)("p", {
                              className:
                                "whitespace-pre-wrap font-bold text-[#D9D9D9] uppercase",
                              children: "Contact",
                            }),
                            (0, s.jsx)(x(), {
                              href: "https://mail.google.com/mail/?view=cm&to=info@morningside.ai&su=Morningside%20AI%20Contact%20Request&body=Hi%0A%0AI%20am%20reaching%20out%20from%20the%20Morningside%20AI%20website",
                              target: "_blank",
                              className: "w-full cursor-pointer decoration-0",
                              children: (0, s.jsx)("p", {
                                className:
                                  "whitespace-pre-wrap text-white cursor-pointer hover:text-white/80 my-2",
                                children: "info@morningside.ai",
                              }),
                            }),
                            (0, s.jsxs)("div", {
                              className: "flex flex-row gap-2 relative z-10",
                              children: [
                                (0, s.jsxs)("button", {
                                  onClick: f,
                                  className:
                                    "flex cursor-pointer items-center gap-1 px-4 py-2 border border-white rounded-full text-white bg-transparent hover:bg-[#EDECE4] hover:text-black whitespace-nowrap",
                                  children: [
                                    "Get In Touch",
                                    (0, s.jsx)(o.zny, {
                                      size: 18,
                                      strokeWidth: 1,
                                      className:
                                        "mt-1 transition-all duration-300",
                                    }),
                                  ],
                                }),
                                (0, s.jsx)(x(), {
                                  href: "https://tally.so/r/wbYr52",
                                  target: "_blank",
                                  className: "w-full cursor-pointer",
                                  children: (0, s.jsxs)("button", {
                                    className:
                                      "flex items-center cursor-pointer gap-1 px-4 py-2 border border-white rounded-full text-white bg-transparent hover:bg-[#EDECE4] hover:text-black whitespace-nowrap",
                                    children: [
                                      "Explore Careers",
                                      (0, s.jsx)(o.zny, {
                                        size: 18,
                                        strokeWidth: 1,
                                        className:
                                          "mt-1 transition-all duration-300",
                                      }),
                                    ],
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, s.jsxs)("div", {
                          className:
                            "w-full lg:w-1/3 flex flex-col lg:flex-row items-start lg:items-end lg:justify-center gap-2 lg:gap-4 order-3 lg:order-1",
                          children: [
                            (0, s.jsx)("p", {
                              className:
                                "whitespace-pre-wrap font-medium text-[#D9D9D9] uppercase hover:opacity-70",
                              children: (0, s.jsx)(x(), {
                                href: "/terms-and-conditions",
                                target: "_blank",
                                className: "w-full cursor-pointer",
                                children: "Terms & Conditions",
                              }),
                            }),
                            (0, s.jsx)("p", {
                              className:
                                "whitespace-pre-wrap font-medium text-[#D9D9D9] uppercase hover:opacity-70",
                              children: (0, s.jsx)(x(), {
                                href: "/privacy-policy",
                                target: "_blank",
                                className: "w-full cursor-pointer ",
                                children: "Privacy Policy",
                              }),
                            }),
                          ],
                        }),
                        (0, s.jsxs)("div", {
                          className:
                            "w-full lg:w-1/3 flex flex-col justify-end lg:items-end gap-2 lg:gap-4 order-3 md:order-1 text-left footer-follow",
                          children: [
                            (0, s.jsx)("p", {
                              className:
                                "whitespace-pre-wrap text-[#D9D9D9] uppercase",
                              children: "Follow",
                            }),
                            (0, s.jsx)(x(), {
                              href: "https://www.linkedin.com/company/morningside-ai/posts/?feedView=all",
                              target: "_blank",
                              className:
                                "w-fit cursor-pointer hover:opacity-80",
                              children: (0, s.jsx)("p", {
                                className:
                                  "whitespace-pre-wrap font-medium text-[#D9D9D9] uppercase hover:text-white/70",
                                children: "Linkedin",
                              }),
                            }),
                            (0, s.jsx)(x(), {
                              href: "https://www.youtube.com/@LiamOttley",
                              target: "_blank",
                              className:
                                "w-fit cursor-pointer hover:opacity-80",
                              children: (0, s.jsx)("p", {
                                className:
                                  "whitespace-pre-wrap font-medium text-[#D9D9D9] uppercase hover:text-white/70",
                                children: "Youtube",
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              (0, s.jsx)("div", {
                ref: i,
                className:
                  "fixed inset-0 bg-black/70 backdrop-blur-[2px] opacity-0 pointer-events-none z-40 transition-opacity",
                onClick: f,
              }),
              (0, s.jsx)("div", {
                ref: l,
                className:
                  "fixed right-0 md:right-0 top-0 md:top-[2.5vh] h-[92vh] md:h-[95vh] lg:h-[95vh] w-full lg:w-[40vw] px-2 flex flex-row items-center justify-center text-black transform translate-x-full z-50",
                children: (0, s.jsxs)("div", {
                  className:
                    "shadow-2xl rounded-xl w-[96%] md:w-[97%] lg:w-full h-11/12 bg-[#EDECE4] overflow-hidden",
                  children: [
                    (0, s.jsxs)("div", {
                      className: "flex flex-col px-4 md:px-6 py-2",
                      children: [
                        (0, s.jsx)("div", {
                          className: "flex flex-row justify-end",
                          children: (0, s.jsx)("button", {
                            onClick: f,
                            className: "p-2 hover:bg-gray-100 rounded-full",
                            children: (0, s.jsx)(o.D9N, {
                              size: 24,
                              className: "text-gray-600",
                            }),
                          }),
                        }),
                        (0, s.jsx)("h2", {
                          className:
                            "text-3xl md:text-4xl font-medium pt-2 pb-2 text-left",
                          children: p
                            ? "We’ve got it. The next move is ours."
                            : "Tell us where you’re at",
                        }),
                      ],
                    }),
                    (0, s.jsx)("div", {
                      className:
                        "h-[calc(100%-56px)] overflow-y-auto px-4 py-1 md:px-6 md:py-2",
                      children: (0, s.jsx)("div", {
                        className: "space-y-4 msaiDrawer",
                        children: p
                          ? (0, s.jsx)("div", {
                              className: "flex flex-col",
                              children: (0, s.jsx)("p", {
                                className: "w-full md:w-11/12 text-base",
                                children:
                                  "We're aligning the right experts on our end and will get back to you within a couple of days to explore how we can move forward together.",
                              }),
                            })
                          : (0, s.jsxs)(s.Fragment, {
                              children: [
                                (0, s.jsx)(m.A, { setSuccess: h }),
                                (0, s.jsx)("div", {
                                  className: "h-[80px] w-full",
                                }),
                              ],
                            }),
                      }),
                    }),
                  ],
                }),
              }),
            ],
          })
        );
      };
    },
    4501: (e, t, l) => {
      "use strict";
      l.d(t, { A: () => b });
      var s = l(5155),
        a = l(2115),
        r = l(802),
        n = l(6682),
        i = l(9088),
        c = l(351),
        o = l(6440);
        let d = {
          src: "/portfolio/P4.png",
          height: 214,
          width: 494,
        },
        x = {
          src: "/_next/static/media/P1.png",
          height: 3375,
          width: 3375,
          blurDataURL:
            "data:image/webp;base64,UklGRnwAAABXRUJQVlA4WAoAAAAQAAAABwAABwAAQUxQSCsAAAABZ6CwbRsUd8yLiACLUIr8hDQUQrJCvb4kKeQVQhyxxPcYIvqfoNMl+5egAFZQOCAqAAAAMAEAnQEqCAAIAAJAOCWkAANwAP73XLLKBXDp8a+lFttUCWDwZUisAAAA",
          blurWidth: 8,
          blurHeight: 8,
        },
        m = {
          src: "/_next/static/media/3.e8561.webp",
          height: 3375,
          width: 3375,
          blurDataURL:
            "data:image/webp;base64,UklGRqYAAABXRUJQVlA4WAoAAAAQAAAABwAABwAAQUxQSDcAAAABYBPbVqNHpsIADijpMMBgBA1sKKOZrbKJdRUtRMQE4KtWD+aa1a0sZwZgU/DREV0NXTtVEr8BAFZQOCBIAAAA8AEAnQEqCAAIAAJAOCWkAAyQA+rwDIIAAP5Jy7hX6DDmRlPPEuhXsCVZT6coY+77xFPO9wEaLl3XcuV1gq89rF7tPZsLQAAA",
          blurWidth: 8,
          blurHeight: 8,
        },
        u = {
          src: "/_next/static/media/4.b85bb4ba.webp",
          height: 3375,
          width: 3375,
          blurDataURL:
            "data:image/webp;base64,UklGRoIAAABXRUJQVlA4WAoAAAAQAAAABwAABwAAQUxQSC4AAAABf6C2bRs5GCvp/ysvIsKGJyF+4CJhFgCaXNLpDSCLOY1oFLOIIaL/ibp/ypioVlA4IC4AAACwAQCdASoIAAgAAkA4JaQAAup6Jz7gAP7u8Q9PrG0crfVdcLlODr7WuxMAAAAA",
          blurWidth: 8,
          blurHeight: 8,
        },
        p = {
          src: "/_next/static/media/5.0be89961.webp",
          height: 3375,
          width: 3375,
          blurDataURL:
            "data:image/webp;base64,UklGRo4AAABXRUJQVlA4WAoAAAAQAAAABwAABwAAQUxQSC0AAAABb6CojRQ4tic8kUREBJx9Tm7ZEgoBAEEamMRSyOIR4sonhoj+J7xrLqPH8AIAVlA4IDoAAACQAQCdASoIAAgAAkA4JaQAAp3CRqAA/u9SYTeoWpo/w7tfMAawdAT7FGWRiKR8kphy3Em/fQrNMAAA",
          blurWidth: 8,
          blurHeight: 8,
        },
        h = {
          src: "/_next/static/media/6.a2815e83.webp",
          height: 470,
          width: 382,
          blurDataURL:
            "data:image/webp;base64,UklGRrAAAABXRUJQVlA4WAoAAAAQAAAABgAABwAAQUxQSDkAAAAAIkkNAAxJIxVLYitiSRhMqDRYNaZPpfR+S3vzq7Pnj1SJ57ldhJKTjIZkMHKOpH1nMQAxaHhZMwAAVlA4IFAAAADQAQCdASoHAAgAAkA4JaQAAvd+smONAAD+tC/MR8MX/hFrYMnP/ktGLcHf/7g+XA172/l+BUXL7UPl93HYXdllUCPWcR99zbgWg+U3y0AAAA==",
          blurWidth: 7,
          blurHeight: 8,
        },
        f = {
          src: "/_next/static/media/8.58f8ca35.webp",
          height: 3375,
          width: 3375,
          blurDataURL:
            "data:image/webp;base64,UklGRoAAAABXRUJQVlA4WAoAAAAQAAAABwAABwAAQUxQSCYAAAABUBrJVvPne3K2SDQKRy/ZMfRfwC8hIhLI5aXMLOL+vd0xKyggAlZQOCA0AAAAsAEAnQEqCAAIAAJAOCWkAAL3WIMoAAD+9sJi+PnXAKRWLJXQqmN46AtX/FMl//58s0AAAA==",
          blurWidth: 8,
          blurHeight: 8,
        },
        A = {
          src: "/_next/static/media/9.d7123a68.webp",
          height: 3375,
          width: 3375,
          blurDataURL:
            "data:image/webp;base64,UklGRngAAABXRUJQVlA4WAoAAAAQAAAABwAABwAAQUxQSCMAAAABUBrJVvM12SWHApVVhhbovyFKiIiEb3d9He8gEVYz0mL4BgBWUDggLgAAAJABAJ0BKggACAACQDglpAAC5bBAgAD++FcNHEOCxfumvIWF059TTAHak2QQAAA=",
          blurWidth: 8,
          blurHeight: 8,
        },
        w = {
          src: "/_next/static/media/10.13584ed5.webp",
          height: 220,
          width: 500,
          blurDataURL:
            "data:image/webp;base64,UklGRnYAAABXRUJQVlA4WAoAAAAQAAAABwAAAwAAQUxQSCEAAAAAAAAAAAAAAABBYXNmYFJZOi9cZi9bU18tAAAAAAAAAAAAVlA4IC4AAACwAQCdASoIAAQAAkA4JYwCdAD0qHZoAP7wcXfoXjhu2ezuB+KUjDRre5aKAQAA",
          blurWidth: 8,
          blurHeight: 4,
        };
      var g = l(6766);
      let v = () =>
        (0, s.jsx)("div", {
          children: (0, s.jsxs)(o.A, {
            speed: 80,
            direction: "right",
            style: { position: "relative", zIndex: 1, overflow: "hidden" },
            children: [
              (0, s.jsx)("div", {
                className:
                  "flex flex-row items-center justify-center gap-4 h-36 mx-4",
                children: (0, s.jsx)(g.default, {
                  src: d,
                  alt: "Partner 1",
                  width: 200,
                  height: 200,
                  className:
                    "md:mr-6 mr-0 w-28 md:w-32 mx-4 mb-3 object-contain",
                }),
              }),
              (0, s.jsx)("div", {
                className:
                  "flex flex-row items-center justify-center gap-4 h-36 mx-4",
                children: (0, s.jsx)(g.default, {
                  src: x,
                  alt: "Partner 2",
                  width: 200,
                  height: 200,
                  className:
                    "md:mr-6 mr-0 w-36 md:w-44 mx-4 mb-3 object-contain",
                }),
              }),
              (0, s.jsx)("div", {
                className:
                  "flex flex-row items-center justify-center gap-4 h-36 mx-4",
                children: (0, s.jsx)(g.default, {
                  src: m,
                  alt: "Partner 3",
                  width: 200,
                  height: 200,
                  className:
                    "md:mr-6 mr-0 w-28 md:w-32 mx-4 mb-3 object-contain",
                }),
              }),
              (0, s.jsx)("div", {
                className:
                  "flex flex-row items-center justify-center gap-4 h-36 mx-4",
                children: (0, s.jsx)(g.default, {
                  src: u,
                  alt: "Partner 4",
                  width: 200,
                  height: 200,
                  className:
                    "md:mr-6 mr-0 w-28 md:w-32 mx-4 mb-3 object-contain",
                }),
              }),
              (0, s.jsx)("div", {
                className:
                  "flex flex-row items-center justify-center gap-4 h-36 mx-4",
                children: (0, s.jsx)(g.default, {
                  src: p,
                  alt: "Partner 5",
                  width: 200,
                  height: 200,
                  className:
                    "md:mr-6 mr-0 w-28 md:w-32 mx-4 mb-3 object-contain",
                }),
              }),
              (0, s.jsx)("div", {
                className:
                  "flex flex-row items-center justify-center gap-4 h-36 mx-4",
                children: (0, s.jsx)(g.default, {
                  src: h,
                  alt: "Partner 6",
                  width: 200,
                  height: 200,
                  className:
                    "md:mr-6 mr-0 w-20 md:w-24 mx-4 mb-3 object-contain",
                }),
              }),
              (0, s.jsx)("div", {
                className:
                  "flex flex-row items-center justify-center gap-4 h-36 mx-4",
                children: (0, s.jsx)(g.default, {
                  src: f,
                  alt: "Partner 8",
                  width: 200,
                  height: 200,
                  className:
                    "md:mr-6 mr-0 w-28 md:w-32 mx-4 mb-3 object-contain",
                }),
              }),
              (0, s.jsx)("div", {
                className:
                  "flex flex-row items-center justify-center gap-4 h-36 mx-4",
                children: (0, s.jsx)(g.default, {
                  src: A,
                  alt: "Partner 9",
                  width: 200,
                  height: 200,
                  className:
                    "md:mr-6 mr-0 w-28 md:w-32 mx-4 mb-3 object-contain",
                }),
              }),
              (0, s.jsx)("div", {
                className:
                  "flex flex-row items-center justify-center gap-4 h-36 mx-4",
                children: (0, s.jsx)(g.default, {
                  src: w,
                  alt: "Partner 10",
                  width: 200,
                  height: 200,
                  className:
                    "md:mr-6 mr-0 w-28 md:w-32 mx-4 mb-3 object-contain",
                }),
              }),
            ],
          }),
        });
      var y = l(2610),
        j = l(956);
      r.Ay.registerPlugin(n.I, i.u);
      let N = () => {
          let e = (0, a.useRef)(null),
            t = (0, a.useRef)(null),
            l = (0, a.useRef)(null),
            n = (0, a.useRef)(null),
            o = (0, a.useRef)(null),
            [d, x] = (0, a.useState)(!1),
            [m, u] = (0, a.useState)(!1),
            p = (0, a.useCallback)(() => {
              let e = r.Ay.timeline();
              d
                ? e
                    .to(n.current, {
                      x: "103%",
                      duration: 0.4,
                      ease: "power3.in",
                    })
                    .to(
                      o.current,
                      {
                        opacity: 0,
                        duration: 0.3,
                        ease: "power2.inOut",
                        onComplete: () => {
                          o.current && (o.current.style.pointerEvents = "none"),
                            u((e) => !e && e);
                        },
                      },
                      0
                    )
                : e
                    .to(o.current, {
                      opacity: 1,
                      duration: 0.3,
                      ease: "power2.inOut",
                      onStart: () => {
                        o.current && (o.current.style.pointerEvents = "auto");
                      },
                    })
                    .to(
                      n.current,
                      { x: 0, duration: 0.4, ease: "power3.out" },
                      0
                    ),
                x(!d);
            }, [d]);
          return (
            (0, a.useEffect)(() => {
              let t = e.current,
                l = document.getElementById("masterAnimationWrapper");
              t &&
                l &&
                i.u.create({
                  trigger: t,
                  start: "top center",
                  end: "bottom center",
                  scroller: "#page-wrapper",
                  onEnter: () => {
                    r.Ay.killTweensOf(l),
                      r.Ay.to(l, { autoAlpha: 0, duration: 0.1, ease: "none" });
                  },
                  onEnterBack: () => {
                    r.Ay.killTweensOf(l),
                      r.Ay.to(l, { autoAlpha: 0, duration: 0.1, ease: "none" });
                  },
                });
              let s = document.querySelector("#page-wrapper");
              if (s && t) {
                let e = t.getBoundingClientRect(),
                  a = s.getBoundingClientRect();
                e.top < a.bottom &&
                  e.bottom > a.top &&
                  (r.Ay.killTweensOf(l), r.Ay.set(l, { autoAlpha: 0 }));
              }
            }, []),
            (0, a.useEffect)(() => {
              let t = () => {
                i.u.refresh(),
                  requestAnimationFrame(() => {
                    let t = e.current,
                      l = document.getElementById("masterAnimationWrapper"),
                      s = document.querySelector("#page-wrapper");
                    if (s && t && l) {
                      let e = t.getBoundingClientRect(),
                        a = s.getBoundingClientRect();
                      e.top < a.bottom &&
                        e.bottom > a.top &&
                        (r.Ay.killTweensOf(l), r.Ay.set(l, { autoAlpha: 0 }));
                    }
                  });
              };
              return (
                window.addEventListener("resize", t),
                () => window.removeEventListener("resize", t)
              );
            }, []),
            (0, s.jsxs)(s.Fragment, {
              children: [
                (0, s.jsxs)("div", {
                  id: "partnership-section",
                  ref: e,
                  className:
                    "box-border w-full h-[100dvh] min-h-[100dvh] flex flex-col snap-always snap-center will-change-transform justify-center items-center text-white tracking-[-0.04em] leading-[90%] gap-8 px-4 md:px-8 lg:px-12 relative",
                  children: [
                    (0, s.jsx)("div", {
                      className:
                        "absolute top-0 left-0 w-full z-10 pt-8 flex flex-col items-center justify-center",
                      children: (0, s.jsx)(v, {}),
                    }),
                    (0, s.jsx)("div", {
                      className: "relative w-full mt-8 ",
                      children: (0, s.jsxs)("p", {
                        ref: t,
                        className:
                          "text-4xl md:text-6xl lg:text-7xl text-center whitespace-pre-wrap w-full ",
                        children: [
                          (0, s.jsxs)("span", {
                            className: "white-silver-animated-text",
                            children: [
                              (0, s.jsx)("span", {
                                className: "",
                                children: "",
                              }),
                              (0, s.jsx)("span", {
                                className: "",
                                children: "",
                              }),
                              (0, s.jsx)("span", {
                                className: "",
                                children: "",
                              }),
                              (0, s.jsx)("span", {
                                className: "",
                                children: " ",
                              }),
                            ],
                          }),
                          (0, s.jsxs)("span", {
                            className: "white-silver-animated-text1",
                            children: [
                              (0, s.jsx)("span", {
                                className: "",
                                children: "",
                              }),
                              (0, s.jsx)("span", {
                                className: "",
                                children: "",
                              }),
                              (0, s.jsx)("span", {
                                className: "",
                                children: "",
                              }),
                              (0, s.jsx)("span", {
                                className: "",
                                children: "",
                              }),
                              (0, s.jsx)("span", {
                                className: "",
                                children: " ",
                              }),
                            ],
                          }),
                          (0, s.jsxs)("span", {
                            className: "white-silver-animated-text2",
                            children: [
                              (0, s.jsx)("span", {
                                className: "",
                                children: "",
                              }),
                              (0, s.jsx)("span", {
                                className: "",
                                children: "",
                              }),
                              (0, s.jsx)("span", {
                                className: "",
                                children: " ",
                              }),
                            ],
                          }),
                          (0, s.jsxs)("span", {
                            className: "white-silver-animated-text ",
                            children: [
                              (0, s.jsx)("span", {
                                className: "",
                                children: "Discover real results in our global portfolio, ",
                              }),
                              (0, s.jsx)("span", {
                                className: "",
                                children: "",
                              }),
                              (0, s.jsx)("span", {
                                className: "",
                                children: "",
                              }),
                              (0, s.jsx)("span", {
                                className: "",
                                children: "",
                              }),
                              (0, s.jsx)("span", {
                                className: "",
                                children: "",
                              }),
                              (0, s.jsx)("span", {
                                className: "",
                                children: "",
                              }),
                              (0, s.jsx)("span", {
                                className: "",
                                children: "",
                              }),
                              (0, s.jsx)("span", {
                                className: "",
                                children: " ",
                              }),
                            ],
                          }),
                          (0, s.jsx)("br", {}),
                          (0, s.jsxs)("span", {
                            className: "white-silver-animated-text1",
                            children: [
                              (0, s.jsx)("span", {
                                className: "",
                                children: "",
                              }),
                              (0, s.jsx)("span", {
                                className: "",
                                children: "",
                              }),
                              (0, s.jsx)("span", {
                                className: "",
                                children: "",
                              }),
                              (0, s.jsx)("span", {
                                className: "",
                                children: " ",
                              }),
                            ],
                          }),
                          (0, s.jsxs)("span", {
                            className: "white-silver-animated-text2",
                            children: [
                              (0, s.jsx)("span", {
                                className: "",
                                children: "",
                              }),
                              (0, s.jsx)("span", {
                                className: "",
                                children: "",
                              }),
                              (0, s.jsx)("span", {
                                className: "",
                                children: "",
                              }),
                              (0, s.jsx)("span", {
                                className: "",
                                children: "",
                              }),
                              (0, s.jsx)("span", {
                                className: "",
                                children: "",
                              }),
                              (0, s.jsx)("span", {
                                className: "",
                                children: "",
                              }),
                            ],
                          }),
                          (0, s.jsxs)("span", {
                            className: "green-text",
                            children: [
                              (0, s.jsx)("span", {
                                className: "",
                                children: "crafted for impact.",
                              }),
                              (0, s.jsx)("span", {
                                className: "",
                                children: "",
                              }),
                              (0, s.jsx)("span", {
                                className: "",
                                children: "",
                              }),
                              (0, s.jsx)("span", {
                                className: "",
                                children: "",
                              }),
                              (0, s.jsx)("span", {
                                className: "",
                                children: " ",
                              }),
                            ],
                          }),
                          (0, s.jsxs)("span", {
                            className: "green-text ",
                            children: [
                              (0, s.jsx)("span", {
                                className: "",
                                children: "",
                              }),
                              (0, s.jsx)("span", {
                                className: "",
                                children: "",
                              }),
                              (0, s.jsx)("span", {
                                className: "",
                                children: " ",
                              }),
                            ],
                          }),
                          (0, s.jsxs)("span", {
                            className: "green-text ",
                            children: [
                              (0, s.jsx)("span", {
                                className: "",
                                children: "",
                              }),
                              (0, s.jsx)("span", {
                                className: "",
                                children: "",
                              }),
                              (0, s.jsx)("span", {
                                className: "",
                                children: "",
                              }),
                              (0, s.jsx)("span", {
                                className: "",
                                children: "",
                              }),
                              (0, s.jsx)("span", {
                                className: "",
                                children: "",
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                    (0, s.jsx)("div", {
                      ref: l,
                      className:
                        "w-full flex flex-row items-center justify-center",
                      children: (0, s.jsxs)("div", {
                        onClick: p,
                        className:
                          "flex cursor-pointer mt-3 items-center gap-1 px-5 py-2 lg:px-8 lg:py-4 border-2 border-white rounded-full text-white bg-transparent hover:bg-[#EDECE4] hover:text-black transition-all duration-300",
                        children: [
                          (0, s.jsx)("p", {
                            className: "text-3xl lg:text-4xl",
                            children: "Begin Your Success Story",
                          }),
                          (0, s.jsx)(c.qdV, {
                            size: 34,
                            strokeWidth: 2,
                            className: "mt-1 transition-all duration-300",
                          }),
                        ],
                      }),
                    }),
                      (0, s.jsx)("div", {
                      ref: l,
                      className:
                        "w-full flex flex-row items-center justify-center",
                      children: (0, s.jsxs)("div", {
                        onClick: p,
                        className:
                          "flex cursor-pointer mt-3 items-center gap-1 px-5 py-2 lg:px-8 lg:py-4 border-2 border-white rounded-full text-white bg-transparent hover:bg-[#EDECE4] hover:text-black transition-all duration-300",
                        children: [
                          (0, s.jsx)("p", {
                            className: "text-3xl lg:text-4xl",
                            children: "Case studies",
                          }),
                          (0, s.jsx)(c.qdV, {
                            size: 34,
                            strokeWidth: 2,
                            className: "mt-1 transition-all duration-300",
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
                (0, s.jsx)("div", {
                  ref: o,
                  className:
                    "fixed inset-0 bg-black/70 backdrop-blur-[2px] opacity-0 pointer-events-none z-40 transition-opacity",
                  onClick: p,
                }),
                (0, s.jsx)("div", {
                  ref: n,
                  className:
                    "fixed right-0 md:right-0 top-0 md:top-[2.5vh] h-[92vh] md:h-[95vh] lg:h-[95vh] w-full lg:w-[40vw] px-2 flex flex-row items-center justify-center text-black transform translate-x-full z-50",
                  children: (0, s.jsxs)("div", {
                    className:
                      "shadow-2xl rounded-xl w-[96%] md:w-[97%] lg:w-full h-11/12 bg-[#EDECE4] overflow-hidden",
                    children: [
                      (0, s.jsxs)("div", {
                        className: "flex flex-col px-4 md:px-6 py-2",
                        children: [
                          (0, s.jsx)("div", {
                            className: "flex flex-row justify-end",
                            children: (0, s.jsx)("button", {
                              onClick: p,
                              className: "p-2 hover:bg-gray-100 rounded-full",
                              children: (0, s.jsx)(y.D9N, {
                                size: 24,
                                className: "text-gray-600",
                              }),
                            }),
                          }),
                          (0, s.jsx)("h2", {
                            className:
                              "text-3xl md:text-4xl font-medium pt-2 pb-2 text-left",
                            children: m
                              ? "We’ve got it. The next move is ours."
                              : "Tell us where you’re at",
                          }),
                        ],
                      }),
                      (0, s.jsx)("div", {
                        className:
                          "h-[calc(100%-56px)] overflow-y-auto px-4 py-1 md:px-6 md:py-2",
                        children: (0, s.jsx)("div", {
                          className: "space-y-4 msaiDrawer",
                          children: m
                            ? (0, s.jsx)("div", {
                                className: "flex flex-col",
                                children: (0, s.jsx)("p", {
                                  className: "w-full md:w-11/12 text-base",
                                  children:
                                    "We're aligning the right experts on our end and will get back to you within a couple of days to explore how we can move forward together.",
                                }),
                              })
                            : (0, s.jsxs)(s.Fragment, {
                                children: [
                                  (0, s.jsx)(j.A, { setSuccess: u }),
                                  (0, s.jsx)("div", {
                                    className: "h-[80px] w-full",
                                  }),
                                ],
                              }),
                        }),
                      }),
                    ],
                  }),
                }),
              ],
            })
          );
        },
        b = function () {
          return (0, s.jsx)("div", {
            className: "relative h-[100dvh] min-h-[100dvh] w-full flex",
            children: (0, s.jsx)("div", {
              className: "w-full h-full",
              children: (0, s.jsx)(N, {}),
            }),
          });
        };
    },
    4900: (e, t, l) => {
      "use strict";
      l.d(t, { A: () => c });
      var s = l(5155),
        a = l(2115),
        r = l(802),
        n = l(8631);
      let i = (e) => {
          let { onComplete: t } = e,
            l = (0, a.useRef)(null),
            i = (0, a.useRef)(null),
            c = (0, a.useRef)(null),
            [o, d] = (0, a.useState)(!0);
          return ((0, a.useLayoutEffect)(() => {
            let e = r.os.context(() => {
              var e, s, a;
              let n =
                  null == (e = l.current)
                    ? void 0
                    : e.querySelector(".logoCover"),
                o =
                  null == (s = i.current)
                    ? void 0
                    : s.querySelectorAll(".logo-shape"),
                x =
                  null == (a = i.current)
                    ? void 0
                    : a.querySelector(".logo-text");
              if (!o || !x || !n) return;
              r.os.set(o, {
                opacity: 0,
                scale: 0.5,
                transformOrigin: "center",
              }),
                r.os.set(x, { opacity: 0, x: -100 });
              let m = r.os.timeline({
                defaults: { ease: "power3.out" },
                onComplete: () => {
                  d(!1), t();
                },
              });
              m.to(n, { opacity: 0, duration: 0.2, delay: 0.5 }),
                m.to(o, { opacity: 1, scale: 1, stagger: 0.2, duration: 0.8 }),
                m.to(x, { opacity: 1, x: 130, duration: 0.8 }, "-=0.3"),
                m.call(() => {
                  let e = c.current;
                  if (!e) return;
                  let {
                      left: t,
                      top: l,
                      width: s,
                      height: a,
                    } = e.getBoundingClientRect(),
                    n = window.innerWidth < 768;
                  r.os.to(e, {
                    x: (n ? 80 : 128) - (t + s / 2),
                    y: (n ? 24 : 32) - (l + a / 2),
                    scale: n ? 0.3 : 0.36,
                    duration: 1,
                    ease: "power2.inOut",
                  });
                }),
                m.to(l.current, { opacity: 0, duration: 0.6, delay: 1 });
            }, l);
            return () => e.revert();
          }, [t]),
          o)
            ? (0, s.jsxs)("div", {
                ref: l,
                className:
                  "fixed pt-4 inset-0 z-50 flex items-center justify-center bg-transparent text-white",
                children: [
                  (0, s.jsx)("div", {
                    className:
                      "absolute inset-0 bg-black w-screen h-screen z-10 logoCover",
                  }),
                  (0, s.jsx)("div", {
                    ref: c,
                    className:
                      "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[400px]",
                    children: (0, s.jsx)(n.A, {
                      ref: i,
                      className: "w-full h-auto",
                    }),
                  }),
                ],
              })
            : null;
        },
        c = (e) => {
          let { children: t } = e,
            [l, r] = (0, a.useState)(!1);
          return (0, s.jsxs)(s.Fragment, {
            children: [
              (0, s.jsx)(i, { onComplete: () => r(!0) }),
              (0, s.jsx)("div", {
                className: "transition-opacity duration-700 ".concat(
                  l ? "opacity-100" : "opacity-0 pointer-events-none"
                ),
                children: t,
              }),
            ],
          });
        };
    },
    6779: (e, t, l) => {
      "use strict";
      l.d(t, { A: () => u });
      var s = l(5155),
        a = l(2115),
        r = l(802);
      l(1324);
      var n = l(8631),
        i = l(2610),
        c = l(6874),
        o = l.n(c),
        d = l(956),
        x = l(9088),
        m = l(6682);
      r.Ay.registerPlugin(x.u, m.I);
      let u = (e) => {
        let { isConctactPage: t = !1 } = e,
          l = (0, a.useRef)(null);
        (0, a.useEffect)(() => {
          window.navbarLogoRef = l;
        }, []);
        let c = (0, a.useRef)(null),
          x = (0, a.useRef)(null),
          [m, u] = (0, a.useState)(!1),
          [p, h] = (0, a.useState)(!1),
          f = (0, a.useCallback)(() => {
            let e = r.Ay.timeline();
            m
              ? e
                  .to(c.current, {
                    x: "103%",
                    duration: 0.4,
                    ease: "power3.in",
                  })
                  .to(
                    x.current,
                    {
                      opacity: 0,
                      duration: 0.3,
                      ease: "power2.inOut",
                      onComplete: () => {
                        x.current && (x.current.style.pointerEvents = "none"),
                          h((e) => !e && e);
                      },
                    },
                    0
                  )
              : e
                  .to(x.current, {
                    opacity: 1,
                    duration: 0.3,
                    ease: "power2.inOut",
                    onStart: () => {
                      x.current && (x.current.style.pointerEvents = "auto");
                    },
                  })
                  .to(
                    c.current,
                    { x: 0, duration: 0.4, ease: "power3.out" },
                    0
                  ),
              u(!m);
          }, [m]),
          A = () => {
            window.location.href = "/";
          };
        return (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsx)("div", {
              className: "absolute top-0 left-0 w-full z-10 pt-4",
              children: (0, s.jsxs)("div", {
                className:
                  "w-full px-4 md:px-8 lg:px-12 mx-auto flex justify-between items-center",
                children: [
                  (0, s.jsx)(o(), {
                    href: "/",
                    className: "w-fit cursor-pointer",
                    onClick: (e) => {
                      e.preventDefault(), A();
                    },
                    children: (0, s.jsx)(n.A, {
                      className: "w-36 h-6",
                      ref: l,
                    }),
                  }),
                  !t &&
                    (0, s.jsx)("div", {
                      className: "flex items-center",
                      children: (0, s.jsxs)("button", {
                        onClick: f,
                        className:
                          "flex items-center cursor-pointer gap-1 px-4 py-2 border border-white rounded-full text-white bg-transparent hover:bg-[#EDECE4] hover:text-black transition-all duration-300",
                        children: [
                          "Get In Touch",
                          (0, s.jsx)(i.zny, {
                            size: 18,
                            strokeWidth: 1,
                            className: "mt-1 transition-all duration-300",
                          }),
                        ],
                      }),
                    }),
                ],
              }),
            }),
            (0, s.jsx)("div", {
              ref: x,
              className:
                "fixed inset-0 bg-black/70 backdrop-blur-[2px] opacity-0 pointer-events-none z-40 transition-opacity",
              onClick: f,
            }),
            (0, s.jsx)("div", {
              ref: c,
              className:
                "fixed right-0 md:right-0 top-0 md:top-[2.5vh] h-[92vh] md:h-[95vh] lg:h-[95vh] w-full lg:w-[40vw] px-2 flex flex-row items-center justify-center text-black transform translate-x-full z-50",
              children: (0, s.jsxs)("div", {
                className:
                  "shadow-2xl rounded-xl w-[96%] md:w-[97%] lg:w-full h-11/12 bg-[#EDECE4] overflow-hidden",
                children: [
                  (0, s.jsxs)("div", {
                    className: "flex flex-col px-4 md:px-6 py-2",
                    children: [
                      (0, s.jsx)("div", {
                        className: "flex flex-row justify-end",
                        children: (0, s.jsx)("button", {
                          onClick: f,
                          className: "p-2 hover:bg-gray-100 rounded-full",
                          children: (0, s.jsx)(i.D9N, {
                            size: 24,
                            className: "text-gray-600",
                          }),
                        }),
                      }),
                      (0, s.jsx)("h2", {
                        className:
                          "text-3xl md:text-4xl font-medium pt-2 pb-2 text-left",
                        children: p
                          ? "We’ve got it. The next move is ours."
                          : "Tell us where you’re at",
                      }),
                    ],
                  }),
                  (0, s.jsx)("div", {
                    className:
                      "h-[calc(100%-56px)] overflow-y-auto px-4 py-1 md:px-6 md:py-2",
                    children: (0, s.jsx)("div", {
                      className: "space-y-4 msaiDrawer",
                      children: p
                        ? (0, s.jsx)("div", {
                            className: "flex flex-col",
                            children: (0, s.jsx)("p", {
                              className: "w-full md:w-11/12 text-base",
                              children:
                                "We're aligning the right experts on our end and will get back to you within a couple of days to explore how we can move forward together.",
                            }),
                          })
                        : (0, s.jsxs)(s.Fragment, {
                            children: [
                              (0, s.jsx)(d.A, { setSuccess: h }),
                              (0, s.jsx)("div", {
                                className: "h-[80px] w-full",
                              }),
                            ],
                          }),
                    }),
                  }),
                ],
              }),
            }),
          ],
        });
      };
    },
    7094: (e, t, l) => {
      "use strict";
      l.d(t, { A: () => d });
      var s = l(5155),
        a = l(2115),
        r = l(802),
        n = l(6682),
        i = l(9088);
      l(1324);
      var c = l(3552);
      r.Ay.registerPlugin(n.I, i.u);
      let o = () => {
          let e = (0, a.useRef)(null),
            t = (0, a.useRef)(null),
            l = (0, a.useRef)(null);
          (0, a.useEffect)(() => {
            let s = document.querySelector("#page-wrapper");
            if (!s || !t.current || !l.current || !e.current) return;
            let a = t.current,
              c = l.current;
            r.Ay.set([a, c], { opacity: 0, x: 100 });
            let d = i.u.create({
                trigger: e.current,
                start: "top center",
                end: "bottom center",
                scroller: s,
                onEnter: () => n(a, c),
                onLeave: () => o(a, c),
                onEnterBack: () => n(a, c),
                onLeaveBack: () => o(a, c),
              }),
              x = () => {
                d.isActive || r.Ay.set([a, c], { opacity: 0, x: 100 });
              };
            return (
              s.addEventListener("scroll", x),
              () => {
                d.kill(), s.removeEventListener("scroll", x);
              }
            );
          }, []);
          let n = (e, t) => {
              r.Ay.fromTo(
                [e, t],
                { opacity: 0, x: 100 },
                { opacity: 1, x: 0, duration: 0.4, delay: 0.06, ease: "none" }
              );
            },
            o = (e, t) => {
              r.Ay.to([e, t], {
                opacity: 0,
                x: 100,
                duration: 0.2,
                delay: 0.03,
                ease: "none",
              });
            };
          return (0, s.jsxs)("div", {
            id: "slide4",
            ref: e,
            className:
              "relative w-full h-[100dvh] min-h-[100dvh] flex items-center justify-center text-white",
            children: [
              (0, s.jsx)("div", {
                className: "w-full flex justify-center opacity-0",
                children: (0, s.jsx)(c.A, {
                  className: "w-[35vw] h-[50vh] lg:w-[35vw] lg:h-[28vw]",
                }),
              }),
              (0, s.jsxs)("div", {
                className:
                  "fixed w-11/12 lg:w-full bottom-0 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-4 text-center pointer-events-none z-50",
                children: [
                  (0, s.jsx)("p", {
                    ref: t,
                    id: "snappy-34-title",
                    className: "text-6xl lg:text-7xl font-light opacity-0",
                    children: "Develop",
                  }),
                  (0, s.jsx)("p", {
                    ref: l,
                    id: "snappy-34-text",
                    className:
                      "text-base lg:text-lg lg:w-6/12 text-[#A0A4A1] px-1 lg:px-2 opacity-0",
                    children:
                      "We leverage our extensive experience and network to develop a customized solution built for performance, scalability, and growth.",
                  }),
                ],
              }),
            ],
          });
        },
        d = function () {
          return (0, s.jsx)("div", {
            className: "relative h-[100dvh] min-h-[100dvh] w-full flex",
            children: (0, s.jsx)("div", {
              className: "w-full h-full",
              children: (0, s.jsx)(o, {}),
            }),
          });
        };
    },
    7448: (e, t, l) => {
      "use strict";
      l.d(t, { A: () => A });
      var s,
        a,
        r = l(5155),
        n = l(2115),
        i = l(802),
        c = l(9088),
        o = l(6682),
        d = l(6874),
        x = l.n(d),
        m = l(2610);
      i.Ay.registerPlugin(c.u);
      let u = (e) => {
        let {
            number: t,
            numberText: l,
            text: s,
            link: a,
            linkText: o,
            scrollContainerRef: d,
          } = e,
          u = (0, n.useRef)(null),
          p = (0, n.useRef)(null),
          h = (0, n.useRef)(null),
          f = (0, n.useRef)(null),
          A = (0, n.useRef)(null);
        return (
          (0, n.useEffect)(() => {
            let e = d.current,
              l = u.current,
              s = p.current,
              a = h.current,
              r = f.current,
              n = A.current;
            if (!l || !s || !a || !r || !n) return;
            let o = { val: 0 },
              x = c.u.create({
                trigger: s,
                scroller: e,
                start: "top 80%",
                end: "bottom 30%",
                onEnter: () => {
                  (o.val = 0),
                    i.Ay.to(o, {
                      val: t,
                      duration: 1.5,
                      ease: "power3.out",
                      onUpdate: () => {
                        l.textContent = Math.floor(o.val).toLocaleString();
                      },
                    }),
                    i.Ay.fromTo(
                      a,
                      { opacity: 0, y: 30 },
                      {
                        opacity: 1,
                        y: 0,
                        duration: 0.5,
                        ease: "power3.out",
                        delay: 0.1,
                      }
                    ),
                    i.Ay.fromTo(
                      r,
                      {
                        opacity: 0,
                        y: 40,
                        rotateX: 65,
                        transformOrigin: "bottom center",
                      },
                      {
                        opacity: 1,
                        y: 0,
                        rotateX: 0,
                        duration: 0.9,
                        ease: "power3.out",
                        delay: 0.2,
                      }
                    ),
                    i.Ay.fromTo(
                      n,
                      {
                        opacity: 0,
                        y: 40,
                        rotateX: 65,
                        transformOrigin: "bottom center",
                      },
                      {
                        opacity: 1,
                        y: 0,
                        rotateX: 0,
                        duration: 0.9,
                        ease: "power3.out",
                        delay: 0.2,
                      }
                    );
                },
                onEnterBack: () => {
                  (o.val = 0),
                    i.Ay.to(o, {
                      val: t,
                      duration: 1.5,
                      ease: "power3.out",
                      onUpdate: () => {
                        l.textContent = Math.floor(o.val).toLocaleString();
                      },
                    }),
                    i.Ay.fromTo(
                      a,
                      { opacity: 0, y: 30 },
                      {
                        opacity: 1,
                        y: 0,
                        duration: 0.5,
                        ease: "power3.out",
                        delay: 0.1,
                      }
                    ),
                    i.Ay.fromTo(
                      r,
                      {
                        opacity: 0,
                        y: 40,
                        rotateX: 65,
                        transformOrigin: "bottom center",
                      },
                      {
                        opacity: 1,
                        y: 0,
                        rotateX: 0,
                        duration: 0.9,
                        ease: "power3.out",
                        delay: 0.2,
                      }
                    ),
                    i.Ay.fromTo(
                      n,
                      {
                        opacity: 0,
                        y: 40,
                        rotateX: 65,
                        transformOrigin: "bottom center",
                      },
                      {
                        opacity: 1,
                        y: 0,
                        rotateX: 0,
                        duration: 0.9,
                        ease: "power3.out",
                        delay: 0.2,
                      }
                    );
                },
                onLeave: () => {
                  (l.textContent = "0"), i.Ay.set([a, r, n], { opacity: 0 });
                },
                onLeaveBack: () => {
                  (l.textContent = "0"), i.Ay.set([a, r, n], { opacity: 0 });
                },
              });
            return () => {
              x.kill();
            };
          }, [t]),
          (0, r.jsxs)("div", {
            ref: p,
            className:
              "flex flex-col w-full lg:w-1/3 md:mb-0 mb-0 gap-1 lg:gap-4",
            children: [
              (0, r.jsxs)("p", {
                className: "lg:text-8xl md:text-7xl text-6xl tracking-widest",
                children: [(0, r.jsx)("span", { ref: u, children: "0" }), l],
              }),
              (0, r.jsx)("hr", {
                ref: h,
                className: "border-[#325E43] border-1 md:my-4 my-0 opacity-0",
              }),
              (0, r.jsx)("p", {
                ref: f,
                className: "text-lg text-white opacity-0",
                children: s,
              }),
              (0, r.jsxs)(x(), {
                href: a,
                target: "_blank",
                ref: A,
                className:
                  "decoration-none flex text-md flex-row items-center gap-1 ".concat(
                    "" == a || "" == o ? "cursor-default" : "cursor-pointer"
                  ),
                onClick: (e) => {
                  ("" == a || "" == o) && e.preventDefault();
                },
                children: [
                  (0, r.jsx)("p", {
                    className: "text-md green-text font-bold",
                    children: o,
                  }),
                  "" != a &&
                    "" != o &&
                    (0, r.jsx)(m.zny, {
                      className: "mt-1",
                      strokeWidth: 1,
                      color: "#325E43",
                      size: 18,
                    }),
                ],
              }),
            ],
          })
        );
      };
      function p() {
        return (p = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var l = arguments[t];
                for (var s in l)
                  ({}).hasOwnProperty.call(l, s) && (e[s] = l[s]);
              }
              return e;
            }).apply(null, arguments);
      }
      let h = function (e) {
        return n.createElement(
          "svg",
          p(
            {
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 126.3 63.2",
              width: "1em",
              height: "1em",
            },
            e
          ),
          s ||
            (s = n.createElement(
              "defs",
              null,
              n.createElement(
                "style",
                null,
                ".cls-1 {\n        fill: #fff;\n      }"
              )
            )),
          a ||
            (a = n.createElement(
              "g",
              null,
              n.createElement(
                "g",
                { id: "Layer_1" },
                n.createElement(
                  "g",
                  { id: "Layer_1-2", "data-name": "Layer_1" },
                  n.createElement(
                    "g",
                    { id: "Layer_1-2" },
                    n.createElement(
                      "g",
                      { id: "Layer_1-2-2", "data-name": "Layer_1-2" },
                      n.createElement(
                        "g",
                        { id: "Layer_1-2-2" },
                        n.createElement(
                          "g",
                          null,
                          n.createElement("path", {
                            className: "cls-1 logoMarkPart1",
                            d: "M94.7,63.1h31.6v-31.6h-31.6v31.6Z",
                          }),
                          n.createElement("path", {
                            className: "cls-1 logoMarkPart2",
                            d: "M47.3,31.6v31.6l47.3-31.6V0l-47.3,31.6Z",
                          }),
                          n.createElement("path", {
                            className: "cls-1 logoMarkPart3",
                            d: "M0,31.6v31.6l47.3-31.6V0L0,31.6Z",
                          })
                        )
                      )
                    )
                  )
                )
              )
            ))
        );
      };
      l(1324), i.Ay.registerPlugin(c.u, o.I);
      let f = function (e) {
          let { scrollContainerRef: t } = e,
            l = (0, n.useRef)(null),
            s = (0, n.useRef)(null),
            a = (0, n.useRef)(null);
          return (
            (0, n.useEffect)(() => {
              let e = s.current,
                a = t.current;
              if (e && a) {
                let t = e.querySelector(".logoMarkPart1"),
                  s = e.querySelector(".logoMarkPart2"),
                  r = e.querySelector(".logoMarkPart3");
                i.Ay.set([t, s, r], { opacity: 0.001 });
                let n = () => {
                    i.Ay.timeline()
                      .to(r, {
                        opacity: 0.03,
                        duration: 0.2,
                        ease: "power2.inOut",
                      })
                      .to(
                        s,
                        { opacity: 0.03, duration: 0.3, ease: "power2.inOut" },
                        "+=0.2"
                      )
                      .to(
                        t,
                        { opacity: 0.03, duration: 0.4, ease: "power2.inOut" },
                        "+=0.35"
                      );
                  },
                  o = () => {
                    i.Ay.timeline().to([t, s, r], {
                      opacity: 0.001,
                      duration: 1e-5,
                      ease: "power2.inOut",
                    });
                  };
                setTimeout(() => {
                  c.u.create({
                    trigger: l.current,
                    scroller: a,
                    start: "top center",
                    end: "bottom center",
                    onEnter: n,
                    onEnterBack: n,
                    onLeave: o,
                    onLeaveBack: o,
                  }),
                    c.u.refresh();
                }, 50);
              }
              return () => {
                c.u.getAll().forEach((e) => e.kill());
              };
            }, [t]),
            (0, n.useEffect)(() => {
              let e = l.current,
                t = document.getElementById("masterAnimationWrapper");
              e &&
                t &&
                c.u.create({
                  trigger: e,
                  start: "top center",
                  end: "bottom center",
                  scroller: "#page-wrapper",
                  onEnter: () => {
                    i.Ay.killTweensOf(t),
                      i.Ay.to(t, { autoAlpha: 0, duration: 0.1, ease: "none" });
                  },
                  onEnterBack: () => {
                    i.Ay.killTweensOf(t),
                      i.Ay.to(t, { autoAlpha: 0, duration: 0.1, ease: "none" });
                  },
                });
              let s = document.querySelector("#page-wrapper");
              if (s && e) {
                let l = e.getBoundingClientRect(),
                  a = s.getBoundingClientRect();
                l.top < a.bottom &&
                  l.bottom > a.top &&
                  (i.Ay.killTweensOf(t), i.Ay.set(t, { autoAlpha: 0 }));
              }
            }, []),
            (0, n.useEffect)(() => {
              let e = () => {
                c.u.refresh(),
                  requestAnimationFrame(() => {
                    let e = l.current,
                      t = document.getElementById("masterAnimationWrapper"),
                      s = document.querySelector("#page-wrapper");
                    if (s && e && t) {
                      let l = e.getBoundingClientRect(),
                        a = s.getBoundingClientRect();
                      l.top < a.bottom &&
                        l.bottom > a.top &&
                        (i.Ay.killTweensOf(t), i.Ay.set(t, { autoAlpha: 0 }));
                    }
                  });
              };
              return (
                window.addEventListener("resize", e),
                () => window.removeEventListener("resize", e)
              );
            }, []),
            (0, r.jsxs)("div", {
              ref: l,
              id: "stats-section",
              className:
                "box-border gap-8 w-full h-[100dvh] min-h-[100dvh] snap-always snap-center flex flex-col will-change-transform justify-center items-center text-white leading-normal tracking-normal",
              children: [
                (0, r.jsx)(h, {
                  ref: s,
                  className:
                    "absolute -top-[50vh] -left-[50vw] lg:top-0 lg:left-0 h-[200vh] w-[200vw] lg:w-full lg:h-full z-[-1]",
                }),
                (0, r.jsx)("div", {
                  className:
                    "relative w-full px-4 md:px-8 lg:px-12 mx-auto flex flex-col justify-center",
                  children: (0, r.jsxs)("p", {
                    ref: a,
                    className: "text-4xl md:text-5xl whitespace-pre-wrap",
                    children: [
                      (0, r.jsxs)("span", {
                        className: "lg:mr-1 white-silver-animated-text",
                        children: [
                          (0, r.jsx)("span", { className: "", children: "W" }),
                          (0, r.jsx)("span", { className: "", children: "e" }),
                          (0, r.jsx)("span", {
                            className: "",
                            children: "\xa0",
                          }),
                          (0, r.jsx)("span", { className: "", children: "d" }),
                          (0, r.jsx)("span", { className: "", children: "o" }),
                          (0, r.jsx)("span", { className: "", children: "n" }),
                          (0, r.jsx)("span", { className: "", children: "'" }),
                          (0, r.jsx)("span", { className: "", children: "t" }),
                          (0, r.jsx)("span", {
                            className: "",
                            children: "\xa0",
                          }),
                          (0, r.jsx)("span", { className: "", children: "s" }),
                          (0, r.jsx)("span", { className: "", children: "e" }),
                          (0, r.jsx)("span", { className: "", children: "l" }),
                          (0, r.jsx)("span", { className: "", children: "l" }),
                          (0, r.jsx)("span", {
                            className: "",
                            children: "\xa0",
                          }),
                          (0, r.jsx)("span", { className: "", children: "software solutions" }),
                          (0, r.jsx)("span", { className: "", children: "" }),
                          (0, r.jsx)("span", { className: "", children: "." }),
                        ],
                      }),
                      (0, r.jsx)("br", { className: "block lg:hidden" }),
                      (0, r.jsxs)("span", {
                        className: "white-silver-animated-text1",
                        children: [
                          (0, r.jsx)("span", { className: "", children: "W" }),
                          (0, r.jsx)("span", { className: "", children: "e" }),
                          (0, r.jsx)("span", {
                            className: "",
                            children: "\xa0",
                          }),
                          (0, r.jsx)("span", { className: "", children: "s" }),
                          (0, r.jsx)("span", { className: "", children: "e" }),
                          (0, r.jsx)("span", { className: "", children: "l" }),
                          (0, r.jsx)("span", { className: "", children: "l" }),
                          (0, r.jsx)("span", {
                            className: "",
                            children: "\xa0",
                          }),
                        ],
                      }),
                      (0, r.jsxs)("span", {
                        className: "italic white-silver-animated-text2",
                        children: [
                          (0, r.jsx)("span", { className: "", children: "R" }),
                          (0, r.jsx)("span", { className: "", children: "e" }),
                          (0, r.jsx)("span", { className: "", children: "s" }),
                          (0, r.jsx)("span", { className: "", children: "u" }),
                          (0, r.jsx)("span", { className: "", children: "l" }),
                          (0, r.jsx)("span", { className: "", children: "t" }),
                          (0, r.jsx)("span", { className: "", children: "s" }),
                          (0, r.jsx)("span", { className: "", children: "." }),
                        ],
                      }),
                    ],
                  }),
                }),
                (0, r.jsxs)("div", {
                  className:
                    "flex w-full flex-col lg:flex-row justify-start items-start px-4 md:px-8 lg:px-12 mx-auto gap-4",
                  children: [
                    (0, r.jsx)(u, {
                      number: 78, 
                      numberText: "",
                      text: "Projects delievered worldwide",
                      link: "",
                      linkText: "",
                      scrollContainerRef: t,
                    }),
                    (0, r.jsx)(u, {
                      number: 52,
                      numberText: "",
                      text: "Global clients served",
                      link: "",
                      linkText: "",
                      scrollContainerRef: t,
                    }),
                    (0, r.jsx)(u, {
                      number: 4,
                      numberText: "+",
                      text: "Years of industry excellence",
                      link: "",
                      linkText: "",
                      scrollContainerRef: t,
                    }),
                  ],
                }),
              ],
            })
          );
        },
        A = function (e) {
          let { scrollContainerRef: t } = e;
          return (0, r.jsx)("div", {
            className: "relative h-[100dvh] min-h-[100dvh] w-full flex",
            children: (0, r.jsx)("div", {
              className: "w-full h-full",
              children: (0, r.jsx)(f, { scrollContainerRef: t }),
            }),
          });
        };
    },
    7648: (e, t, l) => {
      "use strict";
      l.d(t, { A: () => d });
      var s = l(5155),
        a = l(2115),
        r = l(802),
        n = l(6682),
        i = l(9088),
        c = l(2610);
      r.Ay.registerPlugin(n.I, i.u);
      let o = () => {
          let e = (0, a.useRef)(null),
            t = (0, a.useRef)(null);
          return (
            (0, a.useRef)(null),
            (0, a.useEffect)(() => {
              let t = e.current,
                l = document.getElementById("masterAnimationWrapper");
              t &&
                l &&
                i.u.create({
                  trigger: t,
                  start: "top center",
                  end: "bottom center",
                  scroller: "#page-wrapper",
                  onEnter: () => {
                    r.Ay.killTweensOf(l),
                      r.Ay.to(l, { autoAlpha: 0, duration: 0.1, ease: "none" });
                  },
                  onEnterBack: () => {
                    r.Ay.killTweensOf(l),
                      r.Ay.to(l, { autoAlpha: 0, duration: 0.1, ease: "none" });
                  },
                });
              let s = document.querySelector("#page-wrapper");
              if (s && t) {
                let e = t.getBoundingClientRect(),
                  a = s.getBoundingClientRect();
                e.top < a.bottom &&
                  e.bottom > a.top &&
                  (r.Ay.killTweensOf(l), r.Ay.set(l, { autoAlpha: 0 }));
              }
            }, []),
            (0, a.useEffect)(() => {
              let t = () => {
                i.u.refresh(),
                  requestAnimationFrame(() => {
                    let t = e.current,
                      l = document.getElementById("masterAnimationWrapper"),
                      s = document.querySelector("#page-wrapper");
                    if (s && t && l) {
                      let e = t.getBoundingClientRect(),
                        a = s.getBoundingClientRect();
                      e.top < a.bottom &&
                        e.bottom > a.top &&
                        (r.Ay.killTweensOf(l), r.Ay.set(l, { autoAlpha: 0 }));
                    }
                  });
              };
              return (
                window.addEventListener("resize", t),
                () => window.removeEventListener("resize", t)
              );
            }, []),
            (0, s.jsx)("div", {
              id: "center-section",
              ref: e,
              className:
                "box-border gap-8 w-full h-[100dvh] min-h-[100dvh] snap-always snap-center flex flex-col will-change-transform justify-center items-center text-white leading-normal tracking-normal",
              children: (0, s.jsxs)("div", {
                className:
                  "w-full h-11/12 flex flex-col items-start justify-between gap-12 px-4 md:px-8 lg:px-12 mx-auto",
                children: [
                  (0, s.jsx)("p", {
                    ref: t,
                    className:
                      "text-3xl md:text-4xl lg:text-5xl whitespace-pre-wrap w-full ",
                    children: "Meet Our Founders",
                  }),
                  (0, s.jsx)("div", {
                    className:
                      "w-full h-fit flex flex-row items-end justify-end",
                    children: (0, s.jsxs)("button", {
                      className:
                        "flex items-center cursor-pointer gap-1 px-4 py-2 border border-white rounded-full text-white bg-transparent hover:bg-white hover:text-black whitespace-nowrap",
                      children: [
                        "Coming Soon",
                        (0, s.jsx)(c.zny, {
                          size: 18,
                          strokeWidth: 1,
                          className: "mt-1 transition-all duration-300",
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            })
          );
        },
        d = function () {
          return (0, s.jsx)("div", {
            className:
              "relative h-[100dvh] min-h-[100dvh] w-full flex bg-cover bg-center herovideobg",
            children: (0, s.jsx)("div", {
              className: "w-full h-full",
              children: (0, s.jsx)(o, {}),
            }),
          });
        };
    },
    8519: (e, t, l) => {
      "use strict";
      l.d(t, { A: () => o });
      var s = l(5155),
        a = l(2115),
        r = l(802),
        n = l(6682),
        i = l(9088);
      r.Ay.registerPlugin(n.I, i.u);
      let c = () => {
          let e = (0, a.useRef)(null),
            t = (0, a.useRef)(null),
            l = (0, a.useRef)(null);
          return (
            (0, a.useEffect)(() => {
              let t = e.current,
                l = document.getElementById("masterAnimationWrapper");
              t &&
                l &&
                i.u.create({
                  trigger: t,
                  start: "top center",
                  end: "bottom center",
                  scroller: "#page-wrapper",
                  onEnter: () => {
                    r.Ay.killTweensOf(l),
                      r.Ay.to(l, { autoAlpha: 0, duration: 0.1, ease: "none" });
                  },
                  onEnterBack: () => {
                    r.Ay.killTweensOf(l),
                      r.Ay.to(l, { autoAlpha: 0, duration: 0.1, ease: "none" });
                  },
                });
            }, []),
            (0, s.jsxs)("div", {
              id: "center-section",
              ref: e,
              className:
                "box-border gap-8 w-full h-[100dvh] min-h-[100dvh] snap-always snap-center flex flex-col will-change-transform justify-center items-center text-white leading-normal tracking-normal",
              children: [
                (0, s.jsxs)("p", {
                  ref: t,
                  className:
                    "text-4xl md:text-6xl lg:text-7xl text-center h-fit whitespace-pre-wrap w-full ",
                  children: [
                    (0, s.jsx)("span", {
                      className: "white-silver-animated-text",
                      children: "Unlock  ",
                    }),
                    (0, s.jsx)("span", {
                      className: "white-silver-animated-text",
                      children: "",
                    }),
                    (0, s.jsx)("span", {
                      className: "white-silver-animated-text1",
                      children: "",
                    }),
                    (0, s.jsx)("br", { className: "block md:hidden" }),
                    (0, s.jsx)("span", {
                      className: "white-silver-animated-text1",
                      children: "",
                    }),
                    (0, s.jsx)("span", {
                      className: "white-silver-animated-text2",
                      children: "",
                    }),
                    (0, s.jsx)("span", {
                      className: "white-silver-animated-text2",
                      children: "",
                    }),
                    (0, s.jsx)("br", { className: "hidden lg:block" }),
                    (0, s.jsx)("span", {
                      className: "white-silver-animated-text",
                      children: "",
                    }),
                    (0, s.jsx)("br", { className: "block lg:hidden" }),
                    (0, s.jsx)("span", {
                      className: "green-text",
                      children: "Borderless Innovation ",
                    }),
                    (0, s.jsx)("span", {
                      className: "white-silver-animated-text",
                      children: "that keeps you steps ahead of the competition.",
                    }),
                    (0, s.jsx)("span", {
                      className: "white-silver-animated-text1",
                      children: "",
                    }),
                  ],
                }),
                (0, s.jsx)("p", {
                  ref: l,
                  className:
                    "text-xl lg:text-2xl w-10/12 lg:w-full text-center text-[#C0C0C0]",
                  children:
                    "Our solutions deploy seamlessly across markets—no limits, no latency—with transparent pricing that maximizes ROI, minimizes waste, and powers your next breakthrough.",
                }),
              ],
            })
          );
        },
        o = function () {
          return (0, s.jsx)("div", {
            className: "relative h-[100dvh] min-h-[100dvh] w-full flex",
            children: (0, s.jsx)("div", {
              className: "w-full h-full",
              children: (0, s.jsx)(c, {}),
            }),
          });
        };
    },
    9237: (e, t, l) => {
      "use strict";
      l.d(t, { A: () => d });
      var s = l(5155),
        a = l(2115),
        r = l(802),
        n = l(6682),
        i = l(9088);
      l(1324);
      var c = l(3552);
      r.Ay.registerPlugin(n.I, i.u);
      let o = () => {
          let e = (0, a.useRef)(null),
            t = (0, a.useRef)(null),
            l = (0, a.useRef)(null);
          (0, a.useEffect)(() => {
            let s = document.querySelector("#page-wrapper");
            if (!s || !t.current || !l.current || !e.current) return;
            let a = t.current,
              c = l.current;
            r.Ay.set([a, c], { opacity: 0, x: 100 });
            let d = i.u.create({
                trigger: e.current,
                start: "top center",
                end: "bottom center",
                scroller: s,
                onEnter: () => n(a, c),
                onLeave: () => o(a, c),
                onEnterBack: () => n(a, c),
                onLeaveBack: () => o(a, c),
              }),
              x = () => {
                d.isActive || r.Ay.set([a, c], { opacity: 0, x: 100 });
              };
            return (
              s.addEventListener("scroll", x),
              () => {
                d.kill(), s.removeEventListener("scroll", x);
              }
            );
          }, []);
          let n = (e, t) => {
              r.Ay.fromTo(
                [e, t],
                { opacity: 0, x: 100 },
                { opacity: 1, x: 0, duration: 0.4, delay: 0.06, ease: "none" }
              );
            },
            o = (e, t) => {
              r.Ay.to([e, t], {
                opacity: 0,
                x: 100,
                duration: 0.2,
                delay: 0.03,
                ease: "none",
              });
            };
          return (0, s.jsxs)("div", {
            id: "slide3",
            ref: e,
            className:
              "relative w-full h-[100dvh] min-h-[100dvh] flex items-center justify-center text-white",
            children: [
              (0, s.jsx)("div", {
                className: "w-full flex justify-center opacity-0",
                children: (0, s.jsx)(c.A, {
                  className: "w-[35vw] h-[50vh] lg:w-[35vw] lg:h-[28vw]",
                }),
              }),
              (0, s.jsxs)("div", {
                className:
                  "fixed w-11/12 lg:w-full bottom-0 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-4 text-center pointer-events-none z-50",
                children: [
                  (0, s.jsx)("p", {
                    ref: t,
                    id: "snappy-33-title",
                    className: "text-6xl lg:text-7xl font-light opacity-0",
                    children: "Plan",
                  }),
                  (0, s.jsxs)("p", {
                    ref: l,
                    id: "snappy-33-text",
                    className:
                      "text-base lg:text-lg lg:w-6/12 text-[#A0A4A1] px-1 lg:px-2 opacity-0",
                    children: [
                      "Outline a step-by-step strategy—mapping features, selecting the right tools, and defining success metrics—to keep progress transparent and on track.",
                      (0, s.jsx)("br", { className: "hidden lg:block" }),
                      "",
                    ],
                  }),
                ],
              }),
            ],
          });
        },
        d = function () {
          return (0, s.jsx)("div", {
            className: "relative h-[100dvh] min-h-[100dvh] w-full flex",
            children: (0, s.jsx)("div", {
              className: "w-full h-full",
              children: (0, s.jsx)(o, {}),
            }),
          });
        };
    },
    9677: (e, t, l) => {
      "use strict";
      l.d(t, { A: () => r });
      var s = l(5155),
        a = l(4073);
      let r = function () {
        return (0, s.jsx)("div", {
          className: "relative h-[100dvh] min-h-[100dvh] w-full flex",
          children: (0, s.jsx)("div", {
            className: "w-full h-full",
            children: (0, s.jsx)(a.A, {}),
          }),
        });
      };
    },
  },
]);

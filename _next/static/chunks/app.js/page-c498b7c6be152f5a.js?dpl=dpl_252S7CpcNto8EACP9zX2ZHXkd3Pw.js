(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [974],
  {
    4828: (e, s, t) => {
      "use strict";
      t.r(s), t.d(s, { default: () => w });
      var o = t(5155),
        r = t(2115),
        n = t(4900),
        a = t(786),
        l = t(8519),
        i = t(912),
        p = t(824),
        c = t(9237),
        d = t(7094),
        f = t(7448),
        x = t(4501),
        h = t(7648),
        u = t(9677),
        j = t(9088),
        g = t(802),
        y = t(9143);
      t(1324), g.Ay.registerPlugin(j.u);
      let m = [
        { title: "Introduction", index: 0, targetId: null },
        { title: "IDENTIFY", index: 1, targetId: "snappy-32" },
        { title: "PLAN", index: 2, targetId: "snappy-33" },
        { title: "DEVELOP", index: 3, targetId: "snappy-34" },
      ];
      function C() {
        let e = (0, r.useRef)(null),
          s = (0, r.useRef)(null),
          t = (0, r.useRef)(null),
          [n, a] = (0, r.useState)(null);
        return (
          (0, r.useEffect)(() => {
            var o;
            let r = window.innerWidth < 640,
              n = window.innerWidth >= 640 && window.innerWidth < 1024;
            window.innerWidth >= 1024 && window.innerWidth;
            let l = document.querySelector("#page-wrapper"),
              i = s.current,
              p = e.current,
              c = document.getElementById("outerCircle"),
              d = document.getElementById("innerCircle"),
              f = document.getElementById("innerCircleHighlight");
            if (!i || !p || !l || !c || !d || !f) return;
            g.Ay.set(p, { autoAlpha: 0 }),
              g.Ay.set(i, { y: 0, scale: 1 }),
              j.u.create({
                trigger: "#snappy-31",
                start: "top center",
                end: "top center",
                scroller: l,
                onEnter: () => {
                  g.Ay.to(p, { autoAlpha: 1, duration: 0.8, ease: "none" });
                },
              }),
              g.Ay.timeline({
                scrollTrigger: {
                  trigger: "#snappy-31",
                  start: "top center",
                  endTrigger: "#snappy-32",
                  end: "top 10%",
                  scrub: !0,
                  scroller: l,
                },
              }).fromTo(
                i,
                { y: r ? 300 : n ? 250 : 400, scale: r ? 1.1 : n ? 1.2 : 1.4 },
                {
                  y: r ? "-40vh" : n ? "-50vh" : "-45vh",
                  scale: r ? 0.35 : n ? 0.6 : 0.4,
                  ease: "none",
                }
              );
            let x = document.querySelectorAll(".smallSphere"),
              h = Array.from(x)[3],
              u = h.cloneNode(!0);
            u.classList.add("clonedSphere"),
              null == (o = h.parentElement) || o.appendChild(u),
              g.Ay.set(u, {
                scale: r ? 0.7 : n ? 0.6 : 1,
                opacity: 0,
                yPercent: 0,
              });
            let m = g.Ay.timeline({
              scrollTrigger: {
                trigger: "#snappy-32",
                start: "top top",
                endTrigger: "#snappy-33",
                end: "+=100%",
                scrub: !0,
                scroller: l,
              },
            });
            m.to([c, f], { opacity: 0, ease: "none", duration: 0.2 })
              .to([d], { opacity: 0, duration: 0.2, ease: "none" })
              .to(t.current, { opacity: 1, duration: 0.2, ease: "none" });
            let C = Math.floor(x.length / 2),
              w = r ? 70 : n ? 140 : 165,
              F = r || n ? 0.7 : 1;
            m.to(x, {
              x: (e) => (e - C) * w,
              y: 0,
              xPercent: -50,
              yPercent: 0,
              scale: F,
              duration: 0.4,
              delay: 0.1,
              ease: "none",
            }).to(u, {
              x: (3 - C) * w,
              y: 0,
              xPercent: -50,
              yPercent: 0,
              scale: F,
              duration: 0.1,
              ease: "none",
            });
            let A = g.Ay.timeline({
                scrollTrigger: {
                  trigger: "#snappy-33",
                  start: "center center",
                  endTrigger: "#snappy-34",
                  end: "top 10%",
                  scrub: !0,
                  scroller: l,
                },
              }),
              v = document.querySelectorAll(".smallSphere .morph-shape"),
              O = document.querySelectorAll(
                ".smallSphere .morph-shape-highlight"
              ),
              S =
                "M227 147c0-44.735-36.265-81-81-81s-81 36.265-81 81 36.265 81 81 81 81-36.265 81-81Z",
              U =
                "M78,66 H216 C222.627,66 228,71.373 228,78 V216 C228,222.627 222.627,228 216,228 H78 C71.373,228 66,222.627 66,216 V78 C66,71.373 71.373,66 78,66 Z";
            if (
              (x.forEach((e) => {
                A.to(e, {
                  opacity: 1,
                  duration: 0.3,
                  ease: "power1.out",
                  scrollTrigger: {
                    trigger: "#snappy-34",
                    start: "top bottom",
                    end: "top center",
                    scrub: !0,
                    scroller: l,
                  },
                });
              }),
              v.forEach((e) => {
                let s = y.interpolate(S, U, { maxSegmentLength: 2 });
                A.to(e, {
                  duration: 1,
                  ease: "power2.inOut",
                  onUpdate: function () {
                    let t = this.progress();
                    e.setAttribute("d", s(t));
                  },
                });
              }),
              O.forEach((e) => {
                let s = y.interpolate(S, U, { maxSegmentLength: 2 });
                A.to(
                  e,
                  {
                    duration: 1,
                    ease: "power2.inOut",
                    onUpdate: function () {
                      let t = this.progress();
                      e.setAttribute("d", s(t));
                    },
                  },
                  "<"
                );
              }),
              g.Ay.timeline({
                scrollTrigger: {
                  trigger: "#snappy-33",
                  start: "bottom bottom",
                  endTrigger: "#snappy-34",
                  end: "top top",
                  scrub: 0.5,
                  scroller: l,
                },
              }),
              A.to({}, { duration: 0.2 }),
              A.to(t.current, {
                gap: r || n ? "0.1rem" : "0px",
                scale: r || n ? 1 : 0.82,
                marginBottom: r ? ".5rem" : n ? "2rem" : "0rem",
                marginTop: "4rem",
                opacity: 1,
                duration: 0.2,
                delay: 0.2,
                ease: "power1.inOut",
              }),
              x.forEach((e, s) => {
                let t = e.getBoundingClientRect().height,
                  o = -1;
                1 === s && (o = 1),
                  3 === s && (o = -3),
                  4 === s && (o = -1),
                  A.to(e, {
                    y: o * (r ? t / 2.8 : n ? t / 2.4 : t / 2.1),
                    ease: "power2.inOut",
                    duration: 1.6,
                  });
              }),
              u)
            ) {
              let e = u.getBoundingClientRect().height,
                s = r ? e / 1.9 : n ? e / 1.5 : e / 2.1;
              A.fromTo(
                u,
                { ease: "power2.inOut", y: s, opacity: 0, duration: 1.6 },
                { y: s, ease: "power2.inOut", opacity: 1, duration: 1.6 }
              );
            }
            j.u.create({
              trigger: "#snappy-4",
              start: "top center",
              end: "top bottom",
              scroller: l,
              onLeave: () => {
                g.Ay.to(p, { autoAlpha: 0, duration: 0.1, ease: "power2.out" });
              },
            }),
              j.u.create({
                trigger: "#snappy-34",
                start: "top center",
                end: "bottom center",
                scroller: l,
                onEnterBack: () => {
                  g.Ay.to(p, {
                    autoAlpha: 1,
                    duration: 0.05,
                    ease: "power2.out",
                  });
                },
              }),
              [
                { trigger: "#snappy-31", labelIndex: null },
                { trigger: "#snappy-32", labelIndex: 1 },
                { trigger: "#snappy-33", labelIndex: 2 },
                { trigger: "#snappy-34", labelIndex: 3 },
              ].forEach((e) => {
                let { trigger: s, labelIndex: t } = e;
                j.u.create({
                  trigger: s,
                  start: "top center",
                  end: "bottom center",
                  scroller: l,
                  onEnter: () => a(t),
                  onEnterBack: () => a(t),
                  onLeave: () => a(null),
                  onLeaveBack: () => a(null),
                });
              });
          }, []),
          (0, r.useEffect)(() => {
            let e = () => {
              s.current && g.Ay.set(s.current, { x: 0, xPercent: -50 }),
                j.u.refresh();
            };
            return (
              window.addEventListener("resize", e),
              () => {
                window.removeEventListener("resize", e);
              }
            );
          }, []),
          (0, o.jsxs)("div", {
            ref: e,
            className:
              "fixed top-0 left-0 w-full h-full pointer-events-none z-50 opacity-0",
            id: "masterAnimationWrapper",
            children: [
              (0, o.jsxs)("svg", {
                ref: s,
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 294 294",
                fill: "none",
                className:
                  "absolute left-1/2 -bottom-10 md:-bottom-64 lg:-bottom-[20vh] -translate-x-1/2 max-w-screen w-[90vw] md:w-[80vw] lg:w-[40vw] aspect-square",
                children: [
                  (0, o.jsxs)("g", {
                    opacity: 0.8,
                    id: "outerCircle",
                    children: [
                      (0, o.jsx)("g", {
                        filter: "url(#a)",
                        children: (0, o.jsx)("path", {
                          fill: "url(#b)",
                          d: "M294 147C294 65.814 228.186 0 147 0S0 65.814 0 147s65.814 147 147 147 147-65.814 147-147Z",
                        }),
                      }),
                      (0, o.jsx)("path", {
                        stroke: "url(#c)",
                        strokeWidth: 2.5,
                        d: "M292.75 147C292.75 66.504 227.495 1.25 147 1.25 66.504 1.25 1.25 66.504 1.25 147c0 80.495 65.254 145.75 145.75 145.75 80.495 0 145.75-65.255 145.75-145.75Z",
                      }),
                    ],
                  }),
                  (0, o.jsx)("g", {
                    filter: "url(#d)",
                    id: "innerCircle",
                    children: (0, o.jsx)("path", {
                      fill: "url(#e)",
                      d: "M227 147c0-44.735-36.265-81-81-81s-81 36.265-81 81 36.265 81 81 81 81-36.265 81-81Z",
                    }),
                  }),
                  (0, o.jsx)("path", {
                    id: "innerCircleHighlight",
                    stroke: "url(#f)",
                    strokeWidth: 2.5,
                    d: "M225.75 147c0-44.045-35.705-79.75-79.75-79.75S66.25 102.955 66.25 147s35.705 79.75 79.75 79.75 79.75-35.705 79.75-79.75Z",
                  }),
                  (0, o.jsxs)("defs", {
                    children: [
                      (0, o.jsxs)("linearGradient", {
                        id: "b",
                        x1: 147,
                        x2: 147,
                        y1: 0,
                        y2: 294,
                        gradientUnits: "userSpaceOnUse",
                        children: [
                          (0, o.jsx)("stop", { stopColor: "#fff" }),
                          (0, o.jsx)("stop", {
                            offset: 0.6,
                            stopColor: "#4CAA7D",
                            stopOpacity: 0.1,
                          }),
                          (0, o.jsx)("stop", {
                            offset: 1,
                            stopColor: "#E1FFF1",
                            stopOpacity: 0.5,
                          }),
                        ],
                      }),
                      (0, o.jsxs)("linearGradient", {
                        id: "c",
                        x1: 147,
                        x2: 147,
                        y1: 0,
                        y2: 294,
                        gradientUnits: "userSpaceOnUse",
                        children: [
                          (0, o.jsx)("stop", { stopColor: "#FDFFFE" }),
                          (0, o.jsx)("stop", {
                            offset: 0.4,
                            stopColor: "#549876",
                          }),
                          (0, o.jsx)("stop", { offset: 1, stopColor: "#fff" }),
                        ],
                      }),
                      (0, o.jsxs)("linearGradient", {
                        id: "e",
                        x1: 146,
                        x2: 146,
                        y1: 66,
                        y2: 228,
                        gradientUnits: "userSpaceOnUse",
                        children: [
                          (0, o.jsx)("stop", { stopColor: "#fff" }),
                          (0, o.jsx)("stop", {
                            offset: 0.6,
                            stopColor: "#4CAA7D",
                            stopOpacity: 0.1,
                          }),
                          (0, o.jsx)("stop", {
                            offset: 1,
                            stopColor: "#E1FFF1",
                            stopOpacity: 0.5,
                          }),
                        ],
                      }),
                      (0, o.jsxs)("linearGradient", {
                        id: "f",
                        x1: 146,
                        x2: 146,
                        y1: 66,
                        y2: 228,
                        gradientUnits: "userSpaceOnUse",
                        children: [
                          (0, o.jsx)("stop", { stopColor: "#FDFFFE" }),
                          (0, o.jsx)("stop", {
                            offset: 0.4,
                            stopColor: "#549876",
                          }),
                          (0, o.jsx)("stop", { offset: 1, stopColor: "#fff" }),
                        ],
                      }),
                      (0, o.jsxs)("filter", {
                        id: "a",
                        width: 294,
                        height: 318.088,
                        x: 0,
                        y: -24.088,
                        colorInterpolationFilters: "sRGB",
                        filterUnits: "userSpaceOnUse",
                        children: [
                          (0, o.jsx)("feFlood", {
                            floodOpacity: 0,
                            result: "BackgroundImageFix",
                          }),
                          (0, o.jsx)("feBlend", {
                            in: "SourceGraphic",
                            in2: "BackgroundImageFix",
                            result: "shape",
                          }),
                          (0, o.jsx)("feColorMatrix", {
                            in: "SourceAlpha",
                            result: "hardAlpha",
                            values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                          }),
                          (0, o.jsx)("feOffset", { dy: -24.088 }),
                          (0, o.jsx)("feGaussianBlur", {
                            stdDeviation: 18.066,
                          }),
                          (0, o.jsx)("feComposite", {
                            in2: "hardAlpha",
                            k2: -1,
                            k3: 1,
                            operator: "arithmetic",
                          }),
                          (0, o.jsx)("feColorMatrix", {
                            values:
                              "0 0 0 0 0.536175 0 0 0 0 0.741662 0 0 0 0 0.638918 0 0 0 0.7 0",
                          }),
                          (0, o.jsx)("feBlend", {
                            in2: "shape",
                            result: "effect1_innerShadow_0_1",
                          }),
                        ],
                      }),
                      (0, o.jsxs)("filter", {
                        id: "d",
                        width: 162,
                        height: 186.088,
                        x: 65,
                        y: 41.912,
                        colorInterpolationFilters: "sRGB",
                        filterUnits: "userSpaceOnUse",
                        children: [
                          (0, o.jsx)("feFlood", {
                            floodOpacity: 0,
                            result: "BackgroundImageFix",
                          }),
                          (0, o.jsx)("feBlend", {
                            in: "SourceGraphic",
                            in2: "BackgroundImageFix",
                            result: "shape",
                          }),
                          (0, o.jsx)("feColorMatrix", {
                            in: "SourceAlpha",
                            result: "hardAlpha",
                            values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                          }),
                          (0, o.jsx)("feOffset", { dy: -24.088 }),
                          (0, o.jsx)("feGaussianBlur", {
                            stdDeviation: 18.066,
                          }),
                          (0, o.jsx)("feComposite", {
                            in2: "hardAlpha",
                            k2: -1,
                            k3: 1,
                            operator: "arithmetic",
                          }),
                          (0, o.jsx)("feColorMatrix", {
                            values:
                              "0 0 0 0 0.536175 0 0 0 0 0.741662 0 0 0 0 0.638918 0 0 0 0.7 0",
                          }),
                          (0, o.jsx)("feBlend", {
                            in2: "shape",
                            result: "effect1_innerShadow_0_1",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              (0, o.jsxs)("div", {
                ref: t,
                className:
                  "absolute w-10/12 md:w-11/12 mt-10 md:mt-10 lg:-mt-4 lg:w-6/12 h-fit flex flex-row items-center justify-center gap-2 md:gap-4 lg:gap-4 left-1/2 top-[24.5%] lg:py-1 lg:px-1 -translate-x-1/2 pointer-events-none opacity-0",
                children: [
                  (0, o.jsxs)("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "64 64 166 166",
                    fill: "none",
                    className:
                      "smallSphere absolute left-1/2 top-1/2 -translate-x-1/2 w-[25%] lg:w-[20%] aspect-square opacity-20",
                    children: [
                      (0, o.jsx)("g", {
                        children: (0, o.jsx)("path", {
                          fill: "url(#e)",
                          d: "M227 147c0-44.735-36.265-81-81-81s-81 36.265-81 81 36.265 81 81 81 81-36.265 81-81Z",
                          className: "morph-shape",
                        }),
                      }),
                      (0, o.jsx)("path", {
                        stroke: "url(#f)",
                        strokeWidth: 2.5,
                        d: "M225.75 147c0-44.045-35.705-79.75-79.75-79.75S66.25 102.955 66.25 147s35.705 79.75 79.75 79.75 79.75-35.705 79.75-79.75Z",
                        className: "morph-shape-highlight",
                      }),
                      (0, o.jsxs)("defs", {
                        children: [
                          (0, o.jsxs)("linearGradient", {
                            id: "b",
                            x1: 147,
                            x2: 147,
                            y1: 0,
                            y2: 294,
                            gradientUnits: "userSpaceOnUse",
                            children: [
                              (0, o.jsx)("stop", { stopColor: "#fff" }),
                              (0, o.jsx)("stop", {
                                offset: 0.6,
                                stopColor: "#4CAA7D",
                                stopOpacity: 0.1,
                              }),
                              (0, o.jsx)("stop", {
                                offset: 1,
                                stopColor: "#E1FFF1",
                                stopOpacity: 0.5,
                              }),
                            ],
                          }),
                          (0, o.jsxs)("linearGradient", {
                            id: "c",
                            x1: 147,
                            x2: 147,
                            y1: 0,
                            y2: 294,
                            gradientUnits: "userSpaceOnUse",
                            children: [
                              (0, o.jsx)("stop", { stopColor: "#FDFFFE" }),
                              (0, o.jsx)("stop", {
                                offset: 0.4,
                                stopColor: "#549876",
                              }),
                              (0, o.jsx)("stop", {
                                offset: 1,
                                stopColor: "#fff",
                              }),
                            ],
                          }),
                          (0, o.jsxs)("linearGradient", {
                            id: "e",
                            x1: 146,
                            x2: 146,
                            y1: 66,
                            y2: 228,
                            gradientUnits: "userSpaceOnUse",
                            children: [
                              (0, o.jsx)("stop", { stopColor: "#fff" }),
                              (0, o.jsx)("stop", {
                                offset: 0.6,
                                stopColor: "#4CAA7D",
                                stopOpacity: 0.1,
                              }),
                              (0, o.jsx)("stop", {
                                offset: 1,
                                stopColor: "#E1FFF1",
                                stopOpacity: 0.5,
                              }),
                            ],
                          }),
                          (0, o.jsxs)("linearGradient", {
                            id: "f",
                            x1: 146,
                            x2: 146,
                            y1: 66,
                            y2: 228,
                            gradientUnits: "userSpaceOnUse",
                            children: [
                              (0, o.jsx)("stop", { stopColor: "#FDFFFE" }),
                              (0, o.jsx)("stop", {
                                offset: 0.4,
                                stopColor: "#549876",
                              }),
                              (0, o.jsx)("stop", {
                                offset: 1,
                                stopColor: "#fff",
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, o.jsxs)("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "64 64 166 166",
                    fill: "none",
                    className:
                      "smallSphere absolute left-1/2  top-1/2 -translate-x-1/2 w-[25%] lg:w-[20%] aspect-square opacity-35",
                    children: [
                      (0, o.jsx)("g", {
                        children: (0, o.jsx)("path", {
                          fill: "url(#e)",
                          d: "M227 147c0-44.735-36.265-81-81-81s-81 36.265-81 81 36.265 81 81 81 81-36.265 81-81Z",
                          className: "morph-shape",
                        }),
                      }),
                      (0, o.jsx)("path", {
                        stroke: "url(#f)",
                        strokeWidth: 2.5,
                        d: "M225.75 147c0-44.045-35.705-79.75-79.75-79.75S66.25 102.955 66.25 147s35.705 79.75 79.75 79.75 79.75-35.705 79.75-79.75Z",
                        className: "morph-shape-highlight",
                      }),
                      (0, o.jsxs)("defs", {
                        children: [
                          (0, o.jsxs)("linearGradient", {
                            id: "b",
                            x1: 147,
                            x2: 147,
                            y1: 0,
                            y2: 294,
                            gradientUnits: "userSpaceOnUse",
                            children: [
                              (0, o.jsx)("stop", { stopColor: "#fff" }),
                              (0, o.jsx)("stop", {
                                offset: 0.6,
                                stopColor: "#4CAA7D",
                                stopOpacity: 0.1,
                              }),
                              (0, o.jsx)("stop", {
                                offset: 1,
                                stopColor: "#E1FFF1",
                                stopOpacity: 0.5,
                              }),
                            ],
                          }),
                          (0, o.jsxs)("linearGradient", {
                            id: "c",
                            x1: 147,
                            x2: 147,
                            y1: 0,
                            y2: 294,
                            gradientUnits: "userSpaceOnUse",
                            children: [
                              (0, o.jsx)("stop", { stopColor: "#FDFFFE" }),
                              (0, o.jsx)("stop", {
                                offset: 0.4,
                                stopColor: "#549876",
                              }),
                              (0, o.jsx)("stop", {
                                offset: 1,
                                stopColor: "#fff",
                              }),
                            ],
                          }),
                          (0, o.jsxs)("linearGradient", {
                            id: "e",
                            x1: 146,
                            x2: 146,
                            y1: 66,
                            y2: 228,
                            gradientUnits: "userSpaceOnUse",
                            children: [
                              (0, o.jsx)("stop", { stopColor: "#fff" }),
                              (0, o.jsx)("stop", {
                                offset: 0.6,
                                stopColor: "#4CAA7D",
                                stopOpacity: 0.1,
                              }),
                              (0, o.jsx)("stop", {
                                offset: 1,
                                stopColor: "#E1FFF1",
                                stopOpacity: 0.5,
                              }),
                            ],
                          }),
                          (0, o.jsxs)("linearGradient", {
                            id: "f",
                            x1: 146,
                            x2: 146,
                            y1: 66,
                            y2: 228,
                            gradientUnits: "userSpaceOnUse",
                            children: [
                              (0, o.jsx)("stop", { stopColor: "#FDFFFE" }),
                              (0, o.jsx)("stop", {
                                offset: 0.4,
                                stopColor: "#549876",
                              }),
                              (0, o.jsx)("stop", {
                                offset: 1,
                                stopColor: "#fff",
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, o.jsxs)("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "64 64 166 166",
                    fill: "none",
                    className:
                      "smallSphere absolute left-1/2 top-1/2 -translate-x-1/2 w-[25%] lg:w-[20%] aspect-square opacity-50",
                    children: [
                      (0, o.jsx)("g", {
                        children: (0, o.jsx)("path", {
                          fill: "url(#e)",
                          d: "M227 147c0-44.735-36.265-81-81-81s-81 36.265-81 81 36.265 81 81 81 81-36.265 81-81Z",
                          className: "morph-shape",
                        }),
                      }),
                      (0, o.jsx)("path", {
                        stroke: "url(#f)",
                        strokeWidth: 2.5,
                        d: "M225.75 147c0-44.045-35.705-79.75-79.75-79.75S66.25 102.955 66.25 147s35.705 79.75 79.75 79.75 79.75-35.705 79.75-79.75Z",
                        className: "morph-shape-highlight",
                      }),
                      (0, o.jsxs)("defs", {
                        children: [
                          (0, o.jsxs)("linearGradient", {
                            id: "b",
                            x1: 147,
                            x2: 147,
                            y1: 0,
                            y2: 294,
                            gradientUnits: "userSpaceOnUse",
                            children: [
                              (0, o.jsx)("stop", { stopColor: "#fff" }),
                              (0, o.jsx)("stop", {
                                offset: 0.6,
                                stopColor: "#4CAA7D",
                                stopOpacity: 0.1,
                              }),
                              (0, o.jsx)("stop", {
                                offset: 1,
                                stopColor: "#E1FFF1",
                                stopOpacity: 0.5,
                              }),
                            ],
                          }),
                          (0, o.jsxs)("linearGradient", {
                            id: "c",
                            x1: 147,
                            x2: 147,
                            y1: 0,
                            y2: 294,
                            gradientUnits: "userSpaceOnUse",
                            children: [
                              (0, o.jsx)("stop", { stopColor: "#FDFFFE" }),
                              (0, o.jsx)("stop", {
                                offset: 0.4,
                                stopColor: "#549876",
                              }),
                              (0, o.jsx)("stop", {
                                offset: 1,
                                stopColor: "#fff",
                              }),
                            ],
                          }),
                          (0, o.jsxs)("linearGradient", {
                            id: "e",
                            x1: 146,
                            x2: 146,
                            y1: 66,
                            y2: 228,
                            gradientUnits: "userSpaceOnUse",
                            children: [
                              (0, o.jsx)("stop", { stopColor: "#fff" }),
                              (0, o.jsx)("stop", {
                                offset: 0.6,
                                stopColor: "#4CAA7D",
                                stopOpacity: 0.1,
                              }),
                              (0, o.jsx)("stop", {
                                offset: 1,
                                stopColor: "#E1FFF1",
                                stopOpacity: 0.5,
                              }),
                            ],
                          }),
                          (0, o.jsxs)("linearGradient", {
                            id: "f",
                            x1: 146,
                            x2: 146,
                            y1: 66,
                            y2: 228,
                            gradientUnits: "userSpaceOnUse",
                            children: [
                              (0, o.jsx)("stop", { stopColor: "#FDFFFE" }),
                              (0, o.jsx)("stop", {
                                offset: 0.4,
                                stopColor: "#549876",
                              }),
                              (0, o.jsx)("stop", {
                                offset: 1,
                                stopColor: "#fff",
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, o.jsxs)("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "64 64 166 166",
                    fill: "none",
                    className:
                      "smallSphere absolute left-1/2  top-1/2 -translate-x-1/2 w-[25%] lg:w-[20%] aspect-square opacity-75",
                    children: [
                      (0, o.jsx)("g", {
                        children: (0, o.jsx)("path", {
                          fill: "url(#e)",
                          d: "M227 147c0-44.735-36.265-81-81-81s-81 36.265-81 81 36.265 81 81 81 81-36.265 81-81Z",
                          className: "morph-shape",
                        }),
                      }),
                      (0, o.jsx)("path", {
                        stroke: "url(#f)",
                        strokeWidth: 2.5,
                        d: "M225.75 147c0-44.045-35.705-79.75-79.75-79.75S66.25 102.955 66.25 147s35.705 79.75 79.75 79.75 79.75-35.705 79.75-79.75Z",
                        className: "morph-shape-highlight",
                      }),
                      (0, o.jsxs)("defs", {
                        children: [
                          (0, o.jsxs)("linearGradient", {
                            id: "b",
                            x1: 147,
                            x2: 147,
                            y1: 0,
                            y2: 294,
                            gradientUnits: "userSpaceOnUse",
                            children: [
                              (0, o.jsx)("stop", { stopColor: "#fff" }),
                              (0, o.jsx)("stop", {
                                offset: 0.6,
                                stopColor: "#4CAA7D",
                                stopOpacity: 0.1,
                              }),
                              (0, o.jsx)("stop", {
                                offset: 1,
                                stopColor: "#E1FFF1",
                                stopOpacity: 0.5,
                              }),
                            ],
                          }),
                          (0, o.jsxs)("linearGradient", {
                            id: "c",
                            x1: 147,
                            x2: 147,
                            y1: 0,
                            y2: 294,
                            gradientUnits: "userSpaceOnUse",
                            children: [
                              (0, o.jsx)("stop", { stopColor: "#FDFFFE" }),
                              (0, o.jsx)("stop", {
                                offset: 0.4,
                                stopColor: "#549876",
                              }),
                              (0, o.jsx)("stop", {
                                offset: 1,
                                stopColor: "#fff",
                              }),
                            ],
                          }),
                          (0, o.jsxs)("linearGradient", {
                            id: "e",
                            x1: 146,
                            x2: 146,
                            y1: 66,
                            y2: 228,
                            gradientUnits: "userSpaceOnUse",
                            children: [
                              (0, o.jsx)("stop", { stopColor: "#fff" }),
                              (0, o.jsx)("stop", {
                                offset: 0.6,
                                stopColor: "#4CAA7D",
                                stopOpacity: 0.1,
                              }),
                              (0, o.jsx)("stop", {
                                offset: 1,
                                stopColor: "#E1FFF1",
                                stopOpacity: 0.5,
                              }),
                            ],
                          }),
                          (0, o.jsxs)("linearGradient", {
                            id: "f",
                            x1: 146,
                            x2: 146,
                            y1: 66,
                            y2: 228,
                            gradientUnits: "userSpaceOnUse",
                            children: [
                              (0, o.jsx)("stop", { stopColor: "#FDFFFE" }),
                              (0, o.jsx)("stop", {
                                offset: 0.4,
                                stopColor: "#549876",
                              }),
                              (0, o.jsx)("stop", {
                                offset: 1,
                                stopColor: "#fff",
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, o.jsxs)("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "64 64 166 166",
                    fill: "none",
                    className:
                      "smallSphere absolute left-1/2 top-1/2 -translate-x-1/2 w-[25%] lg:w-[20%] aspect-square opacity-100",
                    children: [
                      (0, o.jsx)("g", {
                        children: (0, o.jsx)("path", {
                          fill: "url(#e)",
                          d: "M227 147c0-44.735-36.265-81-81-81s-81 36.265-81 81 36.265 81 81 81 81-36.265 81-81Z",
                          className: "morph-shape",
                        }),
                      }),
                      (0, o.jsx)("path", {
                        stroke: "url(#f)",
                        strokeWidth: 2.5,
                        d: "M225.75 147c0-44.045-35.705-79.75-79.75-79.75S66.25 102.955 66.25 147s35.705 79.75 79.75 79.75 79.75-35.705 79.75-79.75Z",
                        className: "morph-shape-highlight",
                      }),
                      (0, o.jsxs)("defs", {
                        children: [
                          (0, o.jsxs)("linearGradient", {
                            id: "b",
                            x1: 147,
                            x2: 147,
                            y1: 0,
                            y2: 294,
                            gradientUnits: "userSpaceOnUse",
                            children: [
                              (0, o.jsx)("stop", { stopColor: "#fff" }),
                              (0, o.jsx)("stop", {
                                offset: 0.6,
                                stopColor: "#4CAA7D",
                                stopOpacity: 0.1,
                              }),
                              (0, o.jsx)("stop", {
                                offset: 1,
                                stopColor: "#E1FFF1",
                                stopOpacity: 0.5,
                              }),
                            ],
                          }),
                          (0, o.jsxs)("linearGradient", {
                            id: "c",
                            x1: 147,
                            x2: 147,
                            y1: 0,
                            y2: 294,
                            gradientUnits: "userSpaceOnUse",
                            children: [
                              (0, o.jsx)("stop", { stopColor: "#FDFFFE" }),
                              (0, o.jsx)("stop", {
                                offset: 0.4,
                                stopColor: "#549876",
                              }),
                              (0, o.jsx)("stop", {
                                offset: 1,
                                stopColor: "#fff",
                              }),
                            ],
                          }),
                          (0, o.jsxs)("linearGradient", {
                            id: "e",
                            x1: 146,
                            x2: 146,
                            y1: 66,
                            y2: 228,
                            gradientUnits: "userSpaceOnUse",
                            children: [
                              (0, o.jsx)("stop", { stopColor: "#fff" }),
                              (0, o.jsx)("stop", {
                                offset: 0.6,
                                stopColor: "#4CAA7D",
                                stopOpacity: 0.1,
                              }),
                              (0, o.jsx)("stop", {
                                offset: 1,
                                stopColor: "#E1FFF1",
                                stopOpacity: 0.5,
                              }),
                            ],
                          }),
                          (0, o.jsxs)("linearGradient", {
                            id: "f",
                            x1: 146,
                            x2: 146,
                            y1: 66,
                            y2: 228,
                            gradientUnits: "userSpaceOnUse",
                            children: [
                              (0, o.jsx)("stop", { stopColor: "#FDFFFE" }),
                              (0, o.jsx)("stop", {
                                offset: 0.4,
                                stopColor: "#549876",
                              }),
                              (0, o.jsx)("stop", {
                                offset: 1,
                                stopColor: "#fff",
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              (0, o.jsx)("div", {
                className:
                  "absolute left-1/2 lg:left-2 lg:top-1/2 top-[5vh]  -translate-x-1/2 lg:-translate-x-0 lg:-translate-y-1/2  -translate-y-1/2 flex flex-row lg:flex-col lg:items-start  items-center justify-center lg:gap-2 gap-6  px-4 md:px-8 lg:px-12 mx-auto  pointer-events-auto z-[999]",
                children: m.map((e, s) =>
                  (0, o.jsx)(
                    "button",
                    {
                      className: "\n              text-left \n              "
                        .concat(
                          0 === s ? "hidden" : "",
                          " \n              transition-colors duration-300\n              "
                        )
                        .concat(
                          n === s ? "text-white" : "text-gray-500",
                          "\n            "
                        ),
                      style: { fontFamily: "DM-Mono-Light, monospace" },
                      children: e.title,
                    },
                    e.title
                  )
                ),
              }),
            ],
          })
        );
      }
      function w() {
        let e = (0, r.useRef)(null);
        return (0, o.jsxs)(n.A, {
          children: [
            (0, o.jsx)(C, {}),
            (0, o.jsxs)("div", {
              id: "page-wrapper",
              ref: e,
              tabIndex: 0,
              role: "region",
              "aria-label": "Main content sections",
              className:
                "snap-y snap-mandatory overflow-y-scroll h-[100dvh] min-h-[100dvh] w-full overflow-x-hidden no-scrollbar",
              children: [
                (0, o.jsx)("div", {
                  className: "snap-always snap-center min-h-screen",
                  children: (0, o.jsx)(a.A, {}),
                }),
                (0, o.jsx)("div", {
                  id: "snappy-2",
                  className: "snap-always snap-center min-h-screen",
                  children: (0, o.jsx)(l.A, {}),
                }),
                (0, o.jsx)("div", {
                  id: "snappy-31",
                  className: "snap-always snap-center min-h-screen",
                  children: (0, o.jsx)(i.A, {}),
                }),
                (0, o.jsx)("div", {
                  id: "snappy-32",
                  className: "snap-always snap-center min-h-screen",
                  children: (0, o.jsx)(p.A, {}),
                }),
                (0, o.jsx)("div", {
                  id: "snappy-33",
                  className: "snap-always snap-center min-h-screen",
                  children: (0, o.jsx)(c.A, {}),
                }),
                (0, o.jsx)("div", {
                  id: "snappy-34",
                  className: "snap-always snap-center min-h-screen",
                  children: (0, o.jsx)(d.A, {}),
                }),
                (0, o.jsx)("div", {
                  id: "snappy-4",
                  className: "snap-always snap-center min-h-screen",
                  children: (0, o.jsx)(f.A, { scrollContainerRef: e }),
                }),
                (0, o.jsx)("div", {
                  className: "snap-always snap-center min-h-screen",
                  children: (0, o.jsx)(x.A, {}),
                }),
                (0, o.jsx)("div", {
                  className: "snap-always snap-center",
                  children: (0, o.jsx)(h.A, {}),
                }),
                (0, o.jsx)("div", {
                  className: "snap-always snap-center",
                  children: (0, o.jsx)(u.A, {}),
                }),
              ],
            }),
          ],
        });
      }
    },
    7676: (e, s, t) => {
      Promise.resolve().then(t.bind(t, 4828));
    },
  },
  (e) => {
    var s = (s) => e((e.s = s));
    e.O(
      0,
      [77, 506, 206, 202, 592, 844, 521, 297, 143, 262, 772, 441, 684, 358],
      () => s(7676)
    ),
      (_N_E = e.O());
  },
]);

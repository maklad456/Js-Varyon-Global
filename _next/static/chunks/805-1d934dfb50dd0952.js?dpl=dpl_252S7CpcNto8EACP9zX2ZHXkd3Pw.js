"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [805],
  {
    13: (e, t, i) => {
      let r, n, o, s, a;
      i.d(t, {
        A: () => eu,
        B: () => I,
        C: () => eh,
        E: () => k,
        F: () => em,
        a: () => M,
        b: () => F,
        c: () => eF,
        d: () => ej,
        e: () => eb,
        f: () => e$,
        i: () => R,
        u: () => j,
      });
      var l = i(3264),
        c = i(7431),
        u = i(2115),
        h = i.t(u, 2),
        d = i(1933),
        f = i(5643);
      let p = (e) => {
          let t,
            i = new Set(),
            r = (e, r) => {
              let n = "function" == typeof e ? e(t) : e;
              if (!Object.is(n, t)) {
                let e = t;
                (t = (null != r ? r : "object" != typeof n || null === n)
                  ? n
                  : Object.assign({}, t, n)),
                  i.forEach((i) => i(t, e));
              }
            },
            n = () => t,
            o = {
              setState: r,
              getState: n,
              getInitialState: () => s,
              subscribe: (e) => (i.add(e), () => i.delete(e)),
            },
            s = (t = e(r, n, o));
          return o;
        },
        m = (e) => (e ? p(e) : p),
        { useSyncExternalStoreWithSelector: _ } = f,
        g = (e) => e,
        v = (e, t) => {
          let i = m(e),
            r = (e, r = t) =>
              (function (e, t = g, i) {
                let r = _(e.subscribe, e.getState, e.getInitialState, t, i);
                return u.useDebugValue(r), r;
              })(i, e, r);
          return Object.assign(r, i), r;
        },
        y = (e, t) => (e ? v(e, t) : v);
      var C = i(5220),
        b = i.n(C),
        x = i(4342);
      let E = (e) => "object" == typeof e && "function" == typeof e.then,
        T = [];
      function O(e, t, i = (e, t) => e === t) {
        if (e === t) return !0;
        if (!e || !t) return !1;
        let r = e.length;
        if (t.length !== r) return !1;
        for (let n = 0; n < r; n++) if (!i(e[n], t[n])) return !1;
        return !0;
      }
      function w(e, t = null, i = !1, r = {}) {
        for (let n of (null === t && (t = [e]), T))
          if (O(t, n.keys, n.equal)) {
            if (i) return;
            if (Object.prototype.hasOwnProperty.call(n, "error")) throw n.error;
            if (Object.prototype.hasOwnProperty.call(n, "response"))
              return (
                r.lifespan &&
                  r.lifespan > 0 &&
                  (n.timeout && clearTimeout(n.timeout),
                  (n.timeout = setTimeout(n.remove, r.lifespan))),
                n.response
              );
            if (!i) throw n.promise;
          }
        let n = {
          keys: t,
          equal: r.equal,
          remove: () => {
            let e = T.indexOf(n);
            -1 !== e && T.splice(e, 1);
          },
          promise: (E(e) ? e : e(...t))
            .then((e) => {
              (n.response = e),
                r.lifespan &&
                  r.lifespan > 0 &&
                  (n.timeout = setTimeout(n.remove, r.lifespan));
            })
            .catch((e) => (n.error = e)),
        };
        if ((T.push(n), !i)) throw n.promise;
      }
      let A = (e, t, i) => w(e, t, !1, i),
        D = (e, t, i) => void w(e, t, !0, i),
        S = (e) => {
          if (void 0 === e || 0 === e.length) T.splice(0, T.length);
          else {
            let t = T.find((t) => O(e, t.keys, t.equal));
            t && t.remove();
          }
        };
      var P = i(5155),
        z = i(6354);
      function L(e) {
        let t = e.root;
        for (; t.getState().previousRoot; ) t = t.getState().previousRoot;
        return t;
      }
      i(9509), h.act;
      let B = (e) => e && e.isOrthographicCamera,
        R = (e) => e && e.hasOwnProperty("current"),
        U = (e) =>
          null != e &&
          ("string" == typeof e || "number" == typeof e || e.isColor),
        F = ((e, t) =>
          "undefined" != typeof window &&
          ((null == (e = window.document) ? void 0 : e.createElement) ||
            (null == (t = window.navigator) ? void 0 : t.product) ===
              "ReactNative"))()
          ? u.useLayoutEffect
          : u.useEffect;
      function M(e) {
        let t = u.useRef(e);
        return F(() => void (t.current = e), [e]), t;
      }
      function j() {
        let e = (0, z.u5)(),
          t = (0, z.y3)();
        return u.useMemo(
          () =>
            ({ children: i }) => {
              let r = (0, z.Nz)(e, !0, (e) => e.type === u.StrictMode)
                ? u.StrictMode
                : u.Fragment;
              return (0, P.jsx)(r, {
                children: (0, P.jsx)(t, { children: i }),
              });
            },
          [e, t]
        );
      }
      function I({ set: e }) {
        return F(() => (e(new Promise(() => null)), () => e(!1)), [e]), null;
      }
      let k = ((e) => (
        ((e = class extends u.Component {
          constructor(...e) {
            super(...e), (this.state = { error: !1 });
          }
          componentDidCatch(e) {
            this.props.set(e);
          }
          render() {
            return this.state.error ? null : this.props.children;
          }
        }).getDerivedStateFromError = () => ({ error: !0 })),
        e
      ))();
      function N(e) {
        var t;
        let i =
          "undefined" != typeof window
            ? null != (t = window.devicePixelRatio)
              ? t
              : 2
            : 1;
        return Array.isArray(e) ? Math.min(Math.max(e[0], i), e[1]) : e;
      }
      function H(e) {
        var t;
        return null == (t = e.__r3f) ? void 0 : t.root.getState();
      }
      let Y = {
          obj: (e) => e === Object(e) && !Y.arr(e) && "function" != typeof e,
          fun: (e) => "function" == typeof e,
          str: (e) => "string" == typeof e,
          num: (e) => "number" == typeof e,
          boo: (e) => "boolean" == typeof e,
          und: (e) => void 0 === e,
          nul: (e) => null === e,
          arr: (e) => Array.isArray(e),
          equ(
            e,
            t,
            {
              arrays: i = "shallow",
              objects: r = "reference",
              strict: n = !0,
            } = {}
          ) {
            let o;
            if (typeof e != typeof t || !!e != !!t) return !1;
            if (Y.str(e) || Y.num(e) || Y.boo(e)) return e === t;
            let s = Y.obj(e);
            if (s && "reference" === r) return e === t;
            let a = Y.arr(e);
            if (a && "reference" === i) return e === t;
            if ((a || s) && e === t) return !0;
            for (o in e) if (!(o in t)) return !1;
            if (s && "shallow" === i && "shallow" === r) {
              for (o in n ? t : e)
                if (!Y.equ(e[o], t[o], { strict: n, objects: "reference" }))
                  return !1;
            } else for (o in n ? t : e) if (e[o] !== t[o]) return !1;
            if (Y.und(o)) {
              if (
                (a && 0 === e.length && 0 === t.length) ||
                (s &&
                  0 === Object.keys(e).length &&
                  0 === Object.keys(t).length)
              )
                return !0;
              if (e !== t) return !1;
            }
            return !0;
          },
        },
        V = ["children", "key", "ref"];
      function Z(e, t, i, r) {
        let n = null == e ? void 0 : e.__r3f;
        return (
          !n &&
            ((n = {
              root: t,
              type: i,
              parent: null,
              children: [],
              props: (function (e) {
                let t = {};
                for (let i in e) V.includes(i) || (t[i] = e[i]);
                return t;
              })(r),
              object: e,
              eventCount: 0,
              handlers: {},
              isHidden: !1,
            }),
            e && (e.__r3f = n)),
          n
        );
      }
      function q(e, t) {
        let i = e[t];
        if (!t.includes("-")) return { root: e, key: t, target: i };
        for (let n of ((i = e), t.split("-"))) {
          var r;
          (t = n), (e = i), (i = null == (r = i) ? void 0 : r[t]);
        }
        return { root: e, key: t, target: i };
      }
      let G = /-\d+$/;
      function X(e, t) {
        if (Y.str(t.props.attach)) {
          if (G.test(t.props.attach)) {
            let i = t.props.attach.replace(G, ""),
              { root: r, key: n } = q(e.object, i);
            Array.isArray(r[n]) || (r[n] = []);
          }
          let { root: i, key: r } = q(e.object, t.props.attach);
          (t.previousAttach = i[r]), (i[r] = t.object);
        } else
          Y.fun(t.props.attach) &&
            (t.previousAttach = t.props.attach(e.object, t.object));
      }
      function K(e, t) {
        if (Y.str(t.props.attach)) {
          let { root: i, key: r } = q(e.object, t.props.attach),
            n = t.previousAttach;
          void 0 === n ? delete i[r] : (i[r] = n);
        } else null == t.previousAttach || t.previousAttach(e.object, t.object);
        delete t.previousAttach;
      }
      let Q = [
          ...V,
          "args",
          "dispose",
          "attach",
          "object",
          "onUpdate",
          "dispose",
        ],
        $ = new Map(),
        W = [
          "map",
          "emissiveMap",
          "sheenColorMap",
          "specularColorMap",
          "envMap",
        ],
        J = /^on(Pointer|Click|DoubleClick|ContextMenu|Wheel)/;
      function ee(e, t) {
        var i, r;
        let n = e.__r3f,
          o = n && L(n).getState(),
          s = null == n ? void 0 : n.eventCount;
        for (let i in t) {
          let s = t[i];
          if (Q.includes(i)) continue;
          if (n && J.test(i)) {
            "function" == typeof s ? (n.handlers[i] = s) : delete n.handlers[i],
              (n.eventCount = Object.keys(n.handlers).length);
            continue;
          }
          if (void 0 === s) continue;
          let { root: a, key: c, target: u } = q(e, i);
          u instanceof l.zgK && s instanceof l.zgK
            ? (u.mask = s.mask)
            : u instanceof l.Q1f && U(s)
            ? u.set(s)
            : null !== u &&
              "object" == typeof u &&
              "function" == typeof u.set &&
              "function" == typeof u.copy &&
              null != s &&
              s.constructor &&
              u.constructor === s.constructor
            ? u.copy(s)
            : null !== u &&
              "object" == typeof u &&
              "function" == typeof u.set &&
              Array.isArray(s)
            ? "function" == typeof u.fromArray
              ? u.fromArray(s)
              : u.set(...s)
            : null !== u &&
              "object" == typeof u &&
              "function" == typeof u.set &&
              "number" == typeof s
            ? "function" == typeof u.setScalar
              ? u.setScalar(s)
              : u.set(s)
            : ((a[c] = s),
              o &&
                !o.linear &&
                W.includes(c) &&
                null != (r = a[c]) &&
                r.isTexture &&
                a[c].format === l.GWd &&
                a[c].type === l.OUM &&
                (a[c].colorSpace = l.er$));
        }
        if (
          null != n &&
          n.parent &&
          null != o &&
          o.internal &&
          null != (i = n.object) &&
          i.isObject3D &&
          s !== n.eventCount
        ) {
          let e = n.object,
            t = o.internal.interaction.indexOf(e);
          t > -1 && o.internal.interaction.splice(t, 1),
            n.eventCount &&
              null !== e.raycast &&
              o.internal.interaction.push(e);
        }
        return (
          n &&
            void 0 === n.props.attach &&
            (n.object.isBufferGeometry
              ? (n.props.attach = "geometry")
              : n.object.isMaterial && (n.props.attach = "material")),
          n && et(n),
          e
        );
      }
      function et(e) {
        var t;
        if (!e.parent) return;
        null == e.props.onUpdate || e.props.onUpdate(e.object);
        let i =
          null == (t = e.root) || null == t.getState ? void 0 : t.getState();
        i && 0 === i.internal.frames && i.invalidate();
      }
      function ei(e, t) {
        e.manual ||
          (B(e)
            ? ((e.left = -(t.width / 2)),
              (e.right = t.width / 2),
              (e.top = t.height / 2),
              (e.bottom = -(t.height / 2)))
            : (e.aspect = t.width / t.height),
          e.updateProjectionMatrix());
      }
      let er = (e) => (null == e ? void 0 : e.isObject3D);
      function en(e) {
        return (e.eventObject || e.object).uuid + "/" + e.index + e.instanceId;
      }
      function eo(e, t, i, r) {
        let n = i.get(t);
        n &&
          (i.delete(t),
          0 === i.size && (e.delete(r), n.target.releasePointerCapture(r)));
      }
      let es = (e) => !!(null != e && e.render),
        ea = u.createContext(null),
        el = (e, t) => {
          let i = y((i, r) => {
              let n,
                o = new l.Pq0(),
                s = new l.Pq0(),
                a = new l.Pq0();
              function c(e = r().camera, t = s, i = r().size) {
                let { width: n, height: l, top: u, left: h } = i,
                  d = n / l;
                t.isVector3 ? a.copy(t) : a.set(...t);
                let f = e.getWorldPosition(o).distanceTo(a);
                if (B(e))
                  return {
                    width: n / e.zoom,
                    height: l / e.zoom,
                    top: u,
                    left: h,
                    factor: 1,
                    distance: f,
                    aspect: d,
                  };
                {
                  let t = 2 * Math.tan((e.fov * Math.PI) / 180 / 2) * f,
                    i = (n / l) * t;
                  return {
                    width: i,
                    height: t,
                    top: u,
                    left: h,
                    factor: n / i,
                    distance: f,
                    aspect: d,
                  };
                }
              }
              let h = (e) =>
                  i((t) => ({ performance: { ...t.performance, current: e } })),
                d = new l.I9Y();
              return {
                set: i,
                get: r,
                gl: null,
                camera: null,
                raycaster: null,
                events: { priority: 1, enabled: !0, connected: !1 },
                scene: null,
                xr: null,
                invalidate: (t = 1) => e(r(), t),
                advance: (e, i) => t(e, i, r()),
                legacy: !1,
                linear: !1,
                flat: !1,
                controls: null,
                clock: new l.zD7(),
                pointer: d,
                mouse: d,
                frameloop: "always",
                onPointerMissed: void 0,
                performance: {
                  current: 1,
                  min: 0.5,
                  max: 1,
                  debounce: 200,
                  regress: () => {
                    let e = r();
                    n && clearTimeout(n),
                      e.performance.current !== e.performance.min &&
                        h(e.performance.min),
                      (n = setTimeout(
                        () => h(r().performance.max),
                        e.performance.debounce
                      ));
                  },
                },
                size: { width: 0, height: 0, top: 0, left: 0 },
                viewport: {
                  initialDpr: 0,
                  dpr: 0,
                  width: 0,
                  height: 0,
                  top: 0,
                  left: 0,
                  aspect: 0,
                  distance: 0,
                  factor: 0,
                  getCurrentViewport: c,
                },
                setEvents: (e) =>
                  i((t) => ({ ...t, events: { ...t.events, ...e } })),
                setSize: (e, t, n = 0, o = 0) => {
                  let a = r().camera,
                    l = { width: e, height: t, top: n, left: o };
                  i((e) => ({
                    size: l,
                    viewport: { ...e.viewport, ...c(a, s, l) },
                  }));
                },
                setDpr: (e) =>
                  i((t) => {
                    let i = N(e);
                    return {
                      viewport: {
                        ...t.viewport,
                        dpr: i,
                        initialDpr: t.viewport.initialDpr || i,
                      },
                    };
                  }),
                setFrameloop: (e = "always") => {
                  let t = r().clock;
                  t.stop(),
                    (t.elapsedTime = 0),
                    "never" !== e && (t.start(), (t.elapsedTime = 0)),
                    i(() => ({ frameloop: e }));
                },
                previousRoot: void 0,
                internal: {
                  interaction: [],
                  hovered: new Map(),
                  subscribers: [],
                  initialClick: [0, 0],
                  initialHits: [],
                  capturedMap: new Map(),
                  lastEvent: u.createRef(),
                  active: !1,
                  frames: 0,
                  priority: 0,
                  subscribe: (e, t, i) => {
                    let n = r().internal;
                    return (
                      (n.priority = n.priority + +(t > 0)),
                      n.subscribers.push({ ref: e, priority: t, store: i }),
                      (n.subscribers = n.subscribers.sort(
                        (e, t) => e.priority - t.priority
                      )),
                      () => {
                        let i = r().internal;
                        null != i &&
                          i.subscribers &&
                          ((i.priority = i.priority - (t > 0)),
                          (i.subscribers = i.subscribers.filter(
                            (t) => t.ref !== e
                          )));
                      }
                    );
                  },
                },
              };
            }),
            r = i.getState(),
            n = r.size,
            o = r.viewport.dpr,
            s = r.camera;
          return (
            i.subscribe(() => {
              let {
                camera: e,
                size: t,
                viewport: r,
                gl: a,
                set: l,
              } = i.getState();
              if (t.width !== n.width || t.height !== n.height || r.dpr !== o) {
                (n = t),
                  (o = r.dpr),
                  ei(e, t),
                  r.dpr > 0 && a.setPixelRatio(r.dpr);
                let i =
                  "undefined" != typeof HTMLCanvasElement &&
                  a.domElement instanceof HTMLCanvasElement;
                a.setSize(t.width, t.height, i);
              }
              e !== s &&
                ((s = e),
                l((t) => ({
                  viewport: {
                    ...t.viewport,
                    ...t.viewport.getCurrentViewport(e),
                  },
                })));
            }),
            i.subscribe((t) => e(t)),
            i
          );
        };
      function ec() {
        let e = u.useContext(ea);
        if (!e)
          throw Error(
            "R3F: Hooks can only be used within the Canvas component!"
          );
        return e;
      }
      function eu(e = (e) => e, t) {
        return ec()(e, t);
      }
      function eh(e, t = 0) {
        let i = ec(),
          r = i.getState().internal.subscribe,
          n = M(e);
        return F(() => r(n, t, i), [t, r, i]), null;
      }
      let ed = new WeakMap(),
        ef = (e) => {
          var t;
          return (
            "function" == typeof e &&
            (null == e || null == (t = e.prototype)
              ? void 0
              : t.constructor) === e
          );
        };
      function ep(e, t) {
        return function (i, ...r) {
          let n;
          return (
            ef(i) ? (n = ed.get(i)) || ((n = new i()), ed.set(i, n)) : (n = i),
            e && e(n),
            Promise.all(
              r.map(
                (e) =>
                  new Promise((i, r) =>
                    n.load(
                      e,
                      (e) => {
                        er(null == e ? void 0 : e.scene) &&
                          Object.assign(
                            e,
                            (function (e) {
                              let t = { nodes: {}, materials: {}, meshes: {} };
                              return (
                                e &&
                                  e.traverse((e) => {
                                    e.name && (t.nodes[e.name] = e),
                                      e.material &&
                                        !t.materials[e.material.name] &&
                                        (t.materials[e.material.name] =
                                          e.material),
                                      e.isMesh &&
                                        !t.meshes[e.name] &&
                                        (t.meshes[e.name] = e);
                                  }),
                                t
                              );
                            })(e.scene)
                          ),
                          i(e);
                      },
                      t,
                      (t) =>
                        r(
                          Error(
                            `Could not load ${e}: ${
                              null == t ? void 0 : t.message
                            }`
                          )
                        )
                    )
                  )
              )
            )
          );
        };
      }
      function em(e, t, i, r) {
        let n = Array.isArray(t) ? t : [t],
          o = A(ep(i, r), [e, ...n], { equal: Y.equ });
        return Array.isArray(t) ? o : o[0];
      }
      (em.preload = function (e, t, i) {
        let r = Array.isArray(t) ? t : [t];
        return D(ep(i), [e, ...r]);
      }),
        (em.clear = function (e, t) {
          return S([e, ...(Array.isArray(t) ? t : [t])]);
        });
      let e_ = {},
        eg = /^three(?=[A-Z])/,
        ev = (e) => `${e[0].toUpperCase()}${e.slice(1)}`,
        ey = 0,
        eC = (e) => "function" == typeof e;
      function eb(e) {
        if (eC(e)) {
          let t = `${ey++}`;
          return (e_[t] = e), t;
        }
        Object.assign(e_, e);
      }
      function ex(e, t) {
        let i = ev(e),
          r = e_[i];
        if ("primitive" !== e && !r)
          throw Error(
            `R3F: ${i} is not part of the THREE namespace! Did you forget to extend? See: https://docs.pmnd.rs/react-three-fiber/api/objects#using-3rd-party-objects-declaratively`
          );
        if ("primitive" === e && !t.object)
          throw Error("R3F: Primitives without 'object' are invalid!");
        if (void 0 !== t.args && !Array.isArray(t.args))
          throw Error("R3F: The args prop must be an array!");
      }
      function eE(e) {
        if (e.isHidden) {
          var t;
          e.props.attach && null != (t = e.parent) && t.object
            ? X(e.parent, e)
            : er(e.object) && !1 !== e.props.visible && (e.object.visible = !0),
            (e.isHidden = !1),
            et(e);
        }
      }
      function eT(e, t, i) {
        let r = t.root.getState();
        if (e.parent || e.object === r.scene) {
          if (!t.object) {
            var n, o;
            let e = e_[ev(t.type)];
            (t.object =
              null != (n = t.props.object)
                ? n
                : new e(...(null != (o = t.props.args) ? o : []))),
              (t.object.__r3f = t);
          }
          if ((ee(t.object, t.props), t.props.attach)) X(e, t);
          else if (er(t.object) && er(e.object)) {
            let r = e.object.children.indexOf(null == i ? void 0 : i.object);
            if (i && -1 !== r) {
              let i = e.object.children.indexOf(t.object);
              -1 !== i
                ? (e.object.children.splice(i, 1),
                  e.object.children.splice(i < r ? r - 1 : r, 0, t.object))
                : ((t.object.parent = e.object),
                  e.object.children.splice(r, 0, t.object),
                  t.object.dispatchEvent({ type: "added" }),
                  e.object.dispatchEvent({
                    type: "childadded",
                    child: t.object,
                  }));
            } else e.object.add(t.object);
          }
          for (let e of t.children) eT(t, e);
          et(t);
        }
      }
      function eO(e, t) {
        t && ((t.parent = e), e.children.push(t), eT(e, t));
      }
      function ew(e, t, i) {
        if (!t || !i) return;
        t.parent = e;
        let r = e.children.indexOf(i);
        -1 !== r ? e.children.splice(r, 0, t) : e.children.push(t), eT(e, t, i);
      }
      function eA(e) {
        if ("function" == typeof e.dispose) {
          let t = () => {
            try {
              e.dispose();
            } catch {}
          };
          "undefined" != typeof IS_REACT_ACT_ENVIRONMENT
            ? t()
            : (0, x.unstable_scheduleCallback)(x.unstable_IdlePriority, t);
        }
      }
      function eD(e, t, i) {
        if (!t) return;
        t.parent = null;
        let r = e.children.indexOf(t);
        -1 !== r && e.children.splice(r, 1),
          t.props.attach
            ? K(e, t)
            : er(t.object) &&
              er(e.object) &&
              (e.object.remove(t.object),
              (function (e, t) {
                let { internal: i } = e.getState();
                (i.interaction = i.interaction.filter((e) => e !== t)),
                  (i.initialHits = i.initialHits.filter((e) => e !== t)),
                  i.hovered.forEach((e, r) => {
                    (e.eventObject === t || e.object === t) &&
                      i.hovered.delete(r);
                  }),
                  i.capturedMap.forEach((e, r) => {
                    eo(i.capturedMap, t, e, r);
                  });
              })(L(t), t.object));
        let n = null !== t.props.dispose && !1 !== i;
        for (let e = t.children.length - 1; e >= 0; e--) {
          let i = t.children[e];
          eD(t, i, n);
        }
        (t.children.length = 0),
          delete t.object.__r3f,
          n &&
            "primitive" !== t.type &&
            "Scene" !== t.object.type &&
            eA(t.object),
          void 0 === i && et(t);
      }
      let eS = [],
        eP = () => {},
        ez = {},
        eL = 0,
        eB = (function (e) {
          let t = b()(e);
          return (
            t.injectIntoDevTools({
              bundleType: 0,
              rendererPackageName: "@react-three/fiber",
              version: u.version,
            }),
            t
          );
        })({
          isPrimaryRenderer: !1,
          warnsIfNotActing: !1,
          supportsMutation: !0,
          supportsPersistence: !1,
          supportsHydration: !1,
          createInstance: function (e, t, i) {
            var r;
            return (
              ex((e = ev(e) in e_ ? e : e.replace(eg, "")), t),
              "primitive" === e &&
                null != (r = t.object) &&
                r.__r3f &&
                delete t.object.__r3f,
              Z(t.object, i, e, t)
            );
          },
          removeChild: eD,
          appendChild: eO,
          appendInitialChild: eO,
          insertBefore: ew,
          appendChildToContainer(e, t) {
            let i = e.getState().scene.__r3f;
            t && i && eO(i, t);
          },
          removeChildFromContainer(e, t) {
            let i = e.getState().scene.__r3f;
            t && i && eD(i, t);
          },
          insertInContainerBefore(e, t, i) {
            let r = e.getState().scene.__r3f;
            t && i && r && ew(r, t, i);
          },
          getRootHostContext: () => ez,
          getChildHostContext: () => ez,
          commitUpdate(e, t, i, r, n) {
            var o, s, a;
            ex(t, r);
            let l = !1;
            if (
              (("primitive" === e.type && i.object !== r.object) ||
              (null == (o = r.args) ? void 0 : o.length) !==
                (null == (s = i.args) ? void 0 : s.length)
                ? (l = !0)
                : null != (a = r.args) &&
                  a.some((e, t) => {
                    var r;
                    return e !== (null == (r = i.args) ? void 0 : r[t]);
                  }) &&
                  (l = !0),
              l)
            )
              eS.push([e, { ...r }, n]);
            else {
              let t = (function (e, t) {
                let i = {};
                for (let r in t)
                  if (!Q.includes(r) && !Y.equ(t[r], e.props[r]))
                    for (let e in ((i[r] = t[r]), t))
                      e.startsWith(`${r}-`) && (i[e] = t[e]);
                for (let r in e.props) {
                  if (Q.includes(r) || t.hasOwnProperty(r)) continue;
                  let { root: n, key: o } = q(e.object, r);
                  if (n.constructor && 0 === n.constructor.length) {
                    let e = (function (e) {
                      let t = $.get(e.constructor);
                      try {
                        t ||
                          ((t = new e.constructor()), $.set(e.constructor, t));
                      } catch (e) {}
                      return t;
                    })(n);
                    Y.und(e) || (i[o] = e[o]);
                  } else i[o] = 0;
                }
                return i;
              })(e, r);
              Object.keys(t).length &&
                (Object.assign(e.props, t), ee(e.object, t));
            }
            (null === n.sibling || (4 & n.flags) == 0) &&
              (function () {
                for (let [e] of eS) {
                  let t = e.parent;
                  if (t)
                    for (let i of (e.props.attach
                      ? K(t, e)
                      : er(e.object) &&
                        er(t.object) &&
                        t.object.remove(e.object),
                    e.children))
                      i.props.attach
                        ? K(e, i)
                        : er(i.object) &&
                          er(e.object) &&
                          e.object.remove(i.object);
                  e.isHidden && eE(e),
                    e.object.__r3f && delete e.object.__r3f,
                    "primitive" !== e.type && eA(e.object);
                }
                for (let [r, n, o] of eS) {
                  r.props = n;
                  let s = r.parent;
                  if (s) {
                    let n = e_[ev(r.type)];
                    (r.object =
                      null != (e = r.props.object)
                        ? e
                        : new n(...(null != (t = r.props.args) ? t : []))),
                      (r.object.__r3f = r);
                    var e,
                      t,
                      i = r.object;
                    for (let e of [o, o.alternate])
                      if (null !== e)
                        if ("function" == typeof e.ref) {
                          null == e.refCleanup || e.refCleanup();
                          let t = e.ref(i);
                          "function" == typeof t && (e.refCleanup = t);
                        } else e.ref && (e.ref.current = i);
                    for (let e of (ee(r.object, r.props),
                    r.props.attach
                      ? X(s, r)
                      : er(r.object) && er(s.object) && s.object.add(r.object),
                    r.children))
                      e.props.attach
                        ? X(r, e)
                        : er(e.object) &&
                          er(r.object) &&
                          r.object.add(e.object);
                    et(r);
                  }
                }
                eS.length = 0;
              })();
          },
          finalizeInitialChildren: () => !1,
          commitMount() {},
          getPublicInstance: (e) => (null == e ? void 0 : e.object),
          prepareForCommit: () => null,
          preparePortalMount: (e) => Z(e.getState().scene, e, "", {}),
          resetAfterCommit: () => {},
          shouldSetTextContent: () => !1,
          clearContainer: () => !1,
          hideInstance: function (e) {
            if (!e.isHidden) {
              var t;
              e.props.attach && null != (t = e.parent) && t.object
                ? K(e.parent, e)
                : er(e.object) && (e.object.visible = !1),
                (e.isHidden = !0),
                et(e);
            }
          },
          unhideInstance: eE,
          createTextInstance: eP,
          hideTextInstance: eP,
          unhideTextInstance: eP,
          scheduleTimeout:
            "function" == typeof setTimeout ? setTimeout : void 0,
          cancelTimeout:
            "function" == typeof clearTimeout ? clearTimeout : void 0,
          noTimeout: -1,
          getInstanceFromNode: () => null,
          beforeActiveInstanceBlur() {},
          afterActiveInstanceBlur() {},
          detachDeletedInstance() {},
          prepareScopeUpdate() {},
          getInstanceFromScope: () => null,
          shouldAttemptEagerTransition: () => !1,
          trackSchedulerEvent: () => {},
          resolveEventType: () => null,
          resolveEventTimeStamp: () => -1.1,
          requestPostPaintCallback() {},
          maySuspendCommit: () => !1,
          preloadInstance: () => !0,
          startSuspendingCommit() {},
          suspendInstance() {},
          waitForCommitToBeReady: () => null,
          NotPendingTransition: null,
          HostTransitionContext: u.createContext(null),
          setCurrentUpdatePriority(e) {
            eL = e;
          },
          getCurrentUpdatePriority: () => eL,
          resolveUpdatePriority() {
            var e;
            if (0 !== eL) return eL;
            switch (
              "undefined" != typeof window &&
              (null == (e = window.event) ? void 0 : e.type)
            ) {
              case "click":
              case "contextmenu":
              case "dblclick":
              case "pointercancel":
              case "pointerdown":
              case "pointerup":
                return d.DiscreteEventPriority;
              case "pointermove":
              case "pointerout":
              case "pointerover":
              case "pointerenter":
              case "pointerleave":
              case "wheel":
                return d.ContinuousEventPriority;
              default:
                return d.DefaultEventPriority;
            }
          },
          resetFormInstance() {},
        }),
        eR = new Map(),
        eU = { objects: "shallow", strict: !1 };
      function eF(e) {
        let t,
          i,
          r = eR.get(e),
          n = null == r ? void 0 : r.fiber,
          o = null == r ? void 0 : r.store;
        r && console.warn("R3F.createRoot should only be called once!");
        let s = "function" == typeof reportError ? reportError : console.error,
          a = o || el(eX, eK),
          u =
            n ||
            eB.createContainer(
              a,
              d.ConcurrentRoot,
              null,
              !1,
              null,
              "",
              s,
              s,
              s,
              null
            );
        r || eR.set(e, { fiber: u, store: a });
        let h = !1,
          f = null;
        return {
          async configure(r = {}) {
            var n, o;
            let s;
            f = new Promise((e) => (s = e));
            let {
                gl: u,
                size: d,
                scene: p,
                events: m,
                onCreated: _,
                shadows: g = !1,
                linear: v = !1,
                flat: y = !1,
                legacy: C = !1,
                orthographic: b = !1,
                frameloop: x = "always",
                dpr: E = [1, 2],
                performance: T,
                raycaster: O,
                camera: w,
                onPointerMissed: A,
              } = r,
              D = a.getState(),
              S = D.gl;
            if (!D.gl) {
              let t = {
                  canvas: e,
                  powerPreference: "high-performance",
                  antialias: !0,
                  alpha: !0,
                },
                i = "function" == typeof u ? await u(t) : u;
              (S = es(i) ? i : new c.WebGLRenderer({ ...t, ...u })),
                D.set({ gl: S });
            }
            let P = D.raycaster;
            P || D.set({ raycaster: (P = new l.tBo()) });
            let { params: z, ...L } = O || {};
            if (
              (Y.equ(L, P, eU) || ee(P, { ...L }),
              Y.equ(z, P.params, eU) ||
                ee(P, { params: { ...P.params, ...z } }),
              !D.camera || (D.camera === i && !Y.equ(i, w, eU)))
            ) {
              i = w;
              let e = null == w ? void 0 : w.isCamera,
                t = e
                  ? w
                  : b
                  ? new l.qUd(0, 0, 0, 0, 0.1, 1e3)
                  : new l.ubm(75, 0, 0.1, 1e3);
              !e &&
                ((t.position.z = 5),
                w &&
                  (ee(t, w),
                  !t.manual &&
                    ("aspect" in w ||
                      "left" in w ||
                      "right" in w ||
                      "bottom" in w ||
                      "top" in w) &&
                    ((t.manual = !0), t.updateProjectionMatrix())),
                D.camera || (null != w && w.rotation) || t.lookAt(0, 0, 0)),
                D.set({ camera: t }),
                (P.camera = t);
            }
            if (!D.scene) {
              let e;
              null != p && p.isScene
                ? Z((e = p), a, "", {})
                : (Z((e = new l.Z58()), a, "", {}), p && ee(e, p)),
                D.set({ scene: e });
            }
            m && !D.events.handlers && D.set({ events: m(a) });
            let B = (function (e, t) {
              if (
                !t &&
                "undefined" != typeof HTMLCanvasElement &&
                e instanceof HTMLCanvasElement &&
                e.parentElement
              ) {
                let {
                  width: t,
                  height: i,
                  top: r,
                  left: n,
                } = e.parentElement.getBoundingClientRect();
                return { width: t, height: i, top: r, left: n };
              }
              return !t &&
                "undefined" != typeof OffscreenCanvas &&
                e instanceof OffscreenCanvas
                ? { width: e.width, height: e.height, top: 0, left: 0 }
                : { width: 0, height: 0, top: 0, left: 0, ...t };
            })(e, d);
            if (
              (Y.equ(B, D.size, eU) ||
                D.setSize(B.width, B.height, B.top, B.left),
              E && D.viewport.dpr !== N(E) && D.setDpr(E),
              D.frameloop !== x && D.setFrameloop(x),
              D.onPointerMissed || D.set({ onPointerMissed: A }),
              T &&
                !Y.equ(T, D.performance, eU) &&
                D.set((e) => ({ performance: { ...e.performance, ...T } })),
              !D.xr)
            ) {
              let e = (e, t) => {
                  let i = a.getState();
                  "never" !== i.frameloop && eK(e, !0, i, t);
                },
                t = () => {
                  let t = a.getState();
                  (t.gl.xr.enabled = t.gl.xr.isPresenting),
                    t.gl.xr.setAnimationLoop(t.gl.xr.isPresenting ? e : null),
                    t.gl.xr.isPresenting || eX(t);
                },
                i = {
                  connect() {
                    let e = a.getState().gl;
                    e.xr.addEventListener("sessionstart", t),
                      e.xr.addEventListener("sessionend", t);
                  },
                  disconnect() {
                    let e = a.getState().gl;
                    e.xr.removeEventListener("sessionstart", t),
                      e.xr.removeEventListener("sessionend", t);
                  },
                };
              "function" ==
                typeof (null == (n = S.xr) ? void 0 : n.addEventListener) &&
                i.connect(),
                D.set({ xr: i });
            }
            if (S.shadowMap) {
              let e = S.shadowMap.enabled,
                t = S.shadowMap.type;
              if (((S.shadowMap.enabled = !!g), Y.boo(g)))
                S.shadowMap.type = l.Wk7;
              else if (Y.str(g)) {
                let e = {
                  basic: l.bTm,
                  percentage: l.QP0,
                  soft: l.Wk7,
                  variance: l.RyA,
                };
                S.shadowMap.type = null != (o = e[g]) ? o : l.Wk7;
              } else Y.obj(g) && Object.assign(S.shadowMap, g);
              (e !== S.shadowMap.enabled || t !== S.shadowMap.type) &&
                (S.shadowMap.needsUpdate = !0);
            }
            return (
              (l.ppV.enabled = !C),
              h ||
                ((S.outputColorSpace = v ? l.Zr2 : l.er$),
                (S.toneMapping = y ? l.y_p : l.FV)),
              D.legacy !== C && D.set(() => ({ legacy: C })),
              D.linear !== v && D.set(() => ({ linear: v })),
              D.flat !== y && D.set(() => ({ flat: y })),
              !u || Y.fun(u) || es(u) || Y.equ(u, S, eU) || ee(S, u),
              (t = _),
              (h = !0),
              s(),
              this
            );
          },
          render(i) {
            return (
              h || f || this.configure(),
              f.then(() => {
                eB.updateContainer(
                  (0, P.jsx)(eM, {
                    store: a,
                    children: i,
                    onCreated: t,
                    rootElement: e,
                  }),
                  u,
                  null,
                  () => void 0
                );
              }),
              a
            );
          },
          unmount() {
            ej(e);
          },
        };
      }
      function eM({ store: e, children: t, onCreated: i, rootElement: r }) {
        return (
          F(() => {
            let t = e.getState();
            t.set((e) => ({ internal: { ...e.internal, active: !0 } })),
              i && i(t),
              e.getState().events.connected ||
                null == t.events.connect ||
                t.events.connect(r);
          }, []),
          (0, P.jsx)(ea.Provider, { value: e, children: t })
        );
      }
      function ej(e, t) {
        let i = eR.get(e),
          r = null == i ? void 0 : i.fiber;
        if (r) {
          let n = null == i ? void 0 : i.store.getState();
          n && (n.internal.active = !1),
            eB.updateContainer(null, r, null, () => {
              n &&
                setTimeout(() => {
                  try {
                    null == n.events.disconnect || n.events.disconnect(),
                      null == (i = n.gl) ||
                        null == (r = i.renderLists) ||
                        null == r.dispose ||
                        r.dispose(),
                      null == (o = n.gl) ||
                        null == o.forceContextLoss ||
                        o.forceContextLoss(),
                      null != (s = n.gl) && s.xr && n.xr.disconnect();
                    var i,
                      r,
                      o,
                      s,
                      a = n.scene;
                    for (let e in ("Scene" !== a.type &&
                      (null == a.dispose || a.dispose()),
                    a)) {
                      let t = a[e];
                      (null == t ? void 0 : t.type) !== "Scene" &&
                        (null == t || null == t.dispose || t.dispose());
                    }
                    eR.delete(e), t && t(e);
                  } catch (e) {}
                }, 500);
            });
        }
      }
      let eI = new Set(),
        ek = new Set(),
        eN = new Set();
      function eH(e, t) {
        if (e.size) for (let { callback: i } of e.values()) i(t);
      }
      function eY(e, t) {
        switch (e) {
          case "before":
            return eH(eI, t);
          case "after":
            return eH(ek, t);
          case "tail":
            return eH(eN, t);
        }
      }
      function eV(e, t, i) {
        let o = t.clock.getDelta();
        "never" === t.frameloop &&
          "number" == typeof e &&
          ((o = e - t.clock.elapsedTime),
          (t.clock.oldTime = t.clock.elapsedTime),
          (t.clock.elapsedTime = e)),
          (r = t.internal.subscribers);
        for (let e = 0; e < r.length; e++)
          (n = r[e]).ref.current(n.store.getState(), o, i);
        return (
          !t.internal.priority && t.gl.render && t.gl.render(t.scene, t.camera),
          (t.internal.frames = Math.max(0, t.internal.frames - 1)),
          "always" === t.frameloop ? 1 : t.internal.frames
        );
      }
      let eZ = !1,
        eq = !1;
      function eG(e) {
        for (let i of ((s = requestAnimationFrame(eG)),
        (eZ = !0),
        (o = 0),
        eY("before", e),
        (eq = !0),
        eR.values())) {
          var t;
          (a = i.store.getState()).internal.active &&
            ("always" === a.frameloop || a.internal.frames > 0) &&
            !(null != (t = a.gl.xr) && t.isPresenting) &&
            (o += eV(e, a));
        }
        if (((eq = !1), eY("after", e), 0 === o))
          return eY("tail", e), (eZ = !1), cancelAnimationFrame(s);
      }
      function eX(e, t = 1) {
        var i;
        if (!e) return eR.forEach((e) => eX(e.store.getState(), t));
        (null == (i = e.gl.xr) || !i.isPresenting) &&
          e.internal.active &&
          "never" !== e.frameloop &&
          (t > 1
            ? (e.internal.frames = Math.min(60, e.internal.frames + t))
            : eq
            ? (e.internal.frames = 2)
            : (e.internal.frames = 1),
          eZ || ((eZ = !0), requestAnimationFrame(eG)));
      }
      function eK(e, t = !0, i, r) {
        if ((t && eY("before", e), i)) eV(e, i, r);
        else for (let t of eR.values()) eV(e, t.store.getState());
        t && eY("after", e);
      }
      let eQ = {
        onClick: ["click", !1],
        onContextMenu: ["contextmenu", !1],
        onDoubleClick: ["dblclick", !1],
        onWheel: ["wheel", !0],
        onPointerDown: ["pointerdown", !0],
        onPointerUp: ["pointerup", !0],
        onPointerLeave: ["pointerleave", !0],
        onPointerMove: ["pointermove", !0],
        onPointerCancel: ["pointercancel", !0],
        onLostPointerCapture: ["lostpointercapture", !0],
      };
      function e$(e) {
        let { handlePointer: t } = (function (e) {
          function t(e) {
            return e.filter((e) =>
              ["Move", "Over", "Enter", "Out", "Leave"].some((t) => {
                var i;
                return null == (i = e.__r3f)
                  ? void 0
                  : i.handlers["onPointer" + t];
              })
            );
          }
          function i(t) {
            let { internal: i } = e.getState();
            for (let e of i.hovered.values())
              if (
                !t.length ||
                !t.find(
                  (t) =>
                    t.object === e.object &&
                    t.index === e.index &&
                    t.instanceId === e.instanceId
                )
              ) {
                let r = e.eventObject.__r3f;
                if ((i.hovered.delete(en(e)), null != r && r.eventCount)) {
                  let i = r.handlers,
                    n = { ...e, intersections: t };
                  null == i.onPointerOut || i.onPointerOut(n),
                    null == i.onPointerLeave || i.onPointerLeave(n);
                }
              }
          }
          function r(e, t) {
            for (let i = 0; i < t.length; i++) {
              let r = t[i].__r3f;
              null == r ||
                null == r.handlers.onPointerMissed ||
                r.handlers.onPointerMissed(e);
            }
          }
          return {
            handlePointer: function (n) {
              switch (n) {
                case "onPointerLeave":
                case "onPointerCancel":
                  return () => i([]);
                case "onLostPointerCapture":
                  return (t) => {
                    let { internal: r } = e.getState();
                    "pointerId" in t &&
                      r.capturedMap.has(t.pointerId) &&
                      requestAnimationFrame(() => {
                        r.capturedMap.has(t.pointerId) &&
                          (r.capturedMap.delete(t.pointerId), i([]));
                      });
                  };
              }
              return function (o) {
                let { onPointerMissed: s, internal: a } = e.getState();
                a.lastEvent.current = o;
                let c = "onPointerMove" === n,
                  u =
                    "onClick" === n ||
                    "onContextMenu" === n ||
                    "onDoubleClick" === n,
                  h = (function (t, i) {
                    let r = e.getState(),
                      n = new Set(),
                      o = [],
                      s = i
                        ? i(r.internal.interaction)
                        : r.internal.interaction;
                    for (let e = 0; e < s.length; e++) {
                      let t = H(s[e]);
                      t && (t.raycaster.camera = void 0);
                    }
                    r.previousRoot ||
                      null == r.events.compute ||
                      r.events.compute(t, r);
                    let a = s
                      .flatMap(function (e) {
                        let i = H(e);
                        if (
                          !i ||
                          !i.events.enabled ||
                          null === i.raycaster.camera
                        )
                          return [];
                        if (void 0 === i.raycaster.camera) {
                          var r;
                          null == i.events.compute ||
                            i.events.compute(
                              t,
                              i,
                              null == (r = i.previousRoot)
                                ? void 0
                                : r.getState()
                            ),
                            void 0 === i.raycaster.camera &&
                              (i.raycaster.camera = null);
                        }
                        return i.raycaster.camera
                          ? i.raycaster.intersectObject(e, !0)
                          : [];
                      })
                      .sort((e, t) => {
                        let i = H(e.object),
                          r = H(t.object);
                        return (
                          (i && r && r.events.priority - i.events.priority) ||
                          e.distance - t.distance
                        );
                      })
                      .filter((e) => {
                        let t = en(e);
                        return !n.has(t) && (n.add(t), !0);
                      });
                    for (let e of (r.events.filter &&
                      (a = r.events.filter(a, r)),
                    a)) {
                      let t = e.object;
                      for (; t; ) {
                        var l;
                        null != (l = t.__r3f) &&
                          l.eventCount &&
                          o.push({ ...e, eventObject: t }),
                          (t = t.parent);
                      }
                    }
                    if (
                      "pointerId" in t &&
                      r.internal.capturedMap.has(t.pointerId)
                    )
                      for (let e of r.internal.capturedMap
                        .get(t.pointerId)
                        .values())
                        n.has(en(e.intersection)) || o.push(e.intersection);
                    return o;
                  })(o, c ? t : void 0),
                  d = u
                    ? (function (t) {
                        let { internal: i } = e.getState(),
                          r = t.offsetX - i.initialClick[0],
                          n = t.offsetY - i.initialClick[1];
                        return Math.round(Math.sqrt(r * r + n * n));
                      })(o)
                    : 0;
                "onPointerDown" === n &&
                  ((a.initialClick = [o.offsetX, o.offsetY]),
                  (a.initialHits = h.map((e) => e.eventObject))),
                  u && !h.length && d <= 2 && (r(o, a.interaction), s && s(o)),
                  c && i(h),
                  !(function (e, t, r, n) {
                    if (e.length) {
                      let o = { stopped: !1 };
                      for (let s of e) {
                        let a = H(s.object);
                        if (
                          (a ||
                            s.object.traverseAncestors((e) => {
                              let t = H(e);
                              if (t) return (a = t), !1;
                            }),
                          a)
                        ) {
                          let {
                              raycaster: c,
                              pointer: u,
                              camera: h,
                              internal: d,
                            } = a,
                            f = new l.Pq0(u.x, u.y, 0).unproject(h),
                            p = (e) => {
                              var t, i;
                              return (
                                null !=
                                  (t =
                                    null == (i = d.capturedMap.get(e))
                                      ? void 0
                                      : i.has(s.eventObject)) && t
                              );
                            },
                            m = (e) => {
                              let i = { intersection: s, target: t.target };
                              d.capturedMap.has(e)
                                ? d.capturedMap.get(e).set(s.eventObject, i)
                                : d.capturedMap.set(
                                    e,
                                    new Map([[s.eventObject, i]])
                                  ),
                                t.target.setPointerCapture(e);
                            },
                            _ = (e) => {
                              let t = d.capturedMap.get(e);
                              t && eo(d.capturedMap, s.eventObject, t, e);
                            },
                            g = {};
                          for (let e in t) {
                            let i = t[e];
                            "function" != typeof i && (g[e] = i);
                          }
                          let v = {
                            ...s,
                            ...g,
                            pointer: u,
                            intersections: e,
                            stopped: o.stopped,
                            delta: r,
                            unprojectedPoint: f,
                            ray: c.ray,
                            camera: h,
                            stopPropagation() {
                              let r =
                                "pointerId" in t &&
                                d.capturedMap.get(t.pointerId);
                              (!r || r.has(s.eventObject)) &&
                                ((v.stopped = o.stopped = !0),
                                d.hovered.size &&
                                  Array.from(d.hovered.values()).find(
                                    (e) => e.eventObject === s.eventObject
                                  ) &&
                                  i([...e.slice(0, e.indexOf(s)), s]));
                            },
                            target: {
                              hasPointerCapture: p,
                              setPointerCapture: m,
                              releasePointerCapture: _,
                            },
                            currentTarget: {
                              hasPointerCapture: p,
                              setPointerCapture: m,
                              releasePointerCapture: _,
                            },
                            nativeEvent: t,
                          };
                          if ((n(v), !0 === o.stopped)) break;
                        }
                      }
                    }
                  })(h, o, d, function (e) {
                    let t = e.eventObject,
                      i = t.__r3f;
                    if (!(null != i && i.eventCount)) return;
                    let s = i.handlers;
                    if (c) {
                      if (
                        s.onPointerOver ||
                        s.onPointerEnter ||
                        s.onPointerOut ||
                        s.onPointerLeave
                      ) {
                        let t = en(e),
                          i = a.hovered.get(t);
                        i
                          ? i.stopped && e.stopPropagation()
                          : (a.hovered.set(t, e),
                            null == s.onPointerOver || s.onPointerOver(e),
                            null == s.onPointerEnter || s.onPointerEnter(e));
                      }
                      null == s.onPointerMove || s.onPointerMove(e);
                    } else {
                      let i = s[n];
                      i
                        ? (!u || a.initialHits.includes(t)) &&
                          (r(
                            o,
                            a.interaction.filter(
                              (e) => !a.initialHits.includes(e)
                            )
                          ),
                          i(e))
                        : u &&
                          a.initialHits.includes(t) &&
                          r(
                            o,
                            a.interaction.filter(
                              (e) => !a.initialHits.includes(e)
                            )
                          );
                    }
                  });
              };
            },
          };
        })(e);
        return {
          priority: 1,
          enabled: !0,
          compute(e, t, i) {
            t.pointer.set(
              (e.offsetX / t.size.width) * 2 - 1,
              -(2 * (e.offsetY / t.size.height)) + 1
            ),
              t.raycaster.setFromCamera(t.pointer, t.camera);
          },
          connected: void 0,
          handlers: Object.keys(eQ).reduce((e, i) => ({ ...e, [i]: t(i) }), {}),
          update: () => {
            var t;
            let { events: i, internal: r } = e.getState();
            null != (t = r.lastEvent) &&
              t.current &&
              i.handlers &&
              i.handlers.onPointerMove(r.lastEvent.current);
          },
          connect: (t) => {
            let { set: i, events: r } = e.getState();
            if (
              (null == r.disconnect || r.disconnect(),
              i((e) => ({ events: { ...e.events, connected: t } })),
              r.handlers)
            )
              for (let e in r.handlers) {
                let i = r.handlers[e],
                  [n, o] = eQ[e];
                t.addEventListener(n, i, { passive: o });
              }
          },
          disconnect: () => {
            let { set: t, events: i } = e.getState();
            if (i.connected) {
              if (i.handlers)
                for (let e in i.handlers) {
                  let t = i.handlers[e],
                    [r] = eQ[e];
                  i.connected.removeEventListener(r, t);
                }
              t((e) => ({ events: { ...e.events, connected: void 0 } }));
            }
          },
        };
      }
    },
    387: (e, t, i) => {
      i.d(t, { a: () => tn });
      var r = i(3264),
        n = class {
          constructor() {
            (this.enabled = !0),
              (this.needsSwap = !0),
              (this.clear = !1),
              (this.renderToScreen = !1);
          }
          setSize() {}
          render() {
            console.error(
              "THREE.Pass: .render() must be implemented in derived pass."
            );
          }
        },
        o = new r.qUd(-1, 1, 1, -1, 0, 1),
        s = new r.LoY();
      s.setAttribute("position", new r.qtW([-1, 3, 0, -1, -1, 0, 3, -1, 0], 3)),
        s.setAttribute("uv", new r.qtW([0, 2, 0, 0, 2, 0], 2));
      var a = class {
          constructor(e) {
            this._mesh = new r.eaF(s, e);
          }
          dispose() {
            this._mesh.geometry.dispose();
          }
          render(e) {
            e.render(this._mesh, o);
          }
          get material() {
            return this._mesh.material;
          }
          set material(e) {
            this._mesh.material = e;
          }
        },
        l = class extends n {
          constructor(e, t) {
            super(),
              (this.scene = e),
              (this.camera = t),
              (this.clear = !0),
              (this.needsSwap = !1),
              (this.inverse = !1);
          }
          render(e, t, i) {
            let r,
              n,
              o = e.getContext(),
              s = e.state;
            s.buffers.color.setMask(!1),
              s.buffers.depth.setMask(!1),
              s.buffers.color.setLocked(!0),
              s.buffers.depth.setLocked(!0),
              this.inverse ? ((r = 0), (n = 1)) : ((r = 1), (n = 0)),
              s.buffers.stencil.setTest(!0),
              s.buffers.stencil.setOp(o.REPLACE, o.REPLACE, o.REPLACE),
              s.buffers.stencil.setFunc(o.ALWAYS, r, 0xffffffff),
              s.buffers.stencil.setClear(n),
              s.buffers.stencil.setLocked(!0),
              e.setRenderTarget(i),
              this.clear && e.clear(),
              e.render(this.scene, this.camera),
              e.setRenderTarget(t),
              this.clear && e.clear(),
              e.render(this.scene, this.camera),
              s.buffers.color.setLocked(!1),
              s.buffers.depth.setLocked(!1),
              s.buffers.stencil.setLocked(!1),
              s.buffers.stencil.setFunc(o.EQUAL, 1, 0xffffffff),
              s.buffers.stencil.setOp(o.KEEP, o.KEEP, o.KEEP),
              s.buffers.stencil.setLocked(!0);
          }
        },
        c = class extends n {
          constructor() {
            super(), (this.needsSwap = !1);
          }
          render(e) {
            e.state.buffers.stencil.setLocked(!1),
              e.state.buffers.stencil.setTest(!1);
          }
        },
        u = class extends n {
          constructor(e, t) {
            super(),
              (this.textureID = void 0 !== t ? t : "tDiffuse"),
              e instanceof r.BKk
                ? ((this.uniforms = e.uniforms), (this.material = e))
                : e &&
                  ((this.uniforms = r.LlO.clone(e.uniforms)),
                  (this.material = new r.BKk({
                    defines: Object.assign({}, e.defines),
                    uniforms: this.uniforms,
                    vertexShader: e.vertexShader,
                    fragmentShader: e.fragmentShader,
                  }))),
              (this.fsQuad = new a(this.material));
          }
          render(e, t, i) {
            this.uniforms[this.textureID] &&
              (this.uniforms[this.textureID].value = i.texture),
              (this.fsQuad.material = this.material),
              this.renderToScreen
                ? e.setRenderTarget(null)
                : (e.setRenderTarget(t),
                  this.clear &&
                    e.clear(
                      e.autoClearColor,
                      e.autoClearDepth,
                      e.autoClearStencil
                    )),
              this.fsQuad.render(e);
          }
        },
        h = {
          uniforms: { tDiffuse: { value: null }, opacity: { value: 1 } },
          vertexShader: `

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,
          fragmentShader: `

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;

		}`,
        },
        d = class {
          constructor(e, t) {
            if (((this.renderer = e), void 0 === t)) {
              let i = { minFilter: r.k6q, magFilter: r.k6q, format: r.GWd },
                n = e.getSize(new r.I9Y());
              (this._pixelRatio = e.getPixelRatio()),
                (this._width = n.width),
                (this._height = n.height),
                ((t = new r.nWS(
                  this._width * this._pixelRatio,
                  this._height * this._pixelRatio,
                  i
                )).texture.name = "EffectComposer.rt1");
            } else
              (this._pixelRatio = 1),
                (this._width = t.width),
                (this._height = t.height);
            (this.renderTarget1 = t),
              (this.renderTarget2 = t.clone()),
              (this.renderTarget2.texture.name = "EffectComposer.rt2"),
              (this.writeBuffer = this.renderTarget1),
              (this.readBuffer = this.renderTarget2),
              (this.renderToScreen = !0),
              (this.passes = []),
              void 0 === h &&
                console.error("THREE.EffectComposer relies on CopyShader"),
              void 0 === u &&
                console.error("THREE.EffectComposer relies on ShaderPass"),
              (this.copyPass = new u(h)),
              (this.clock = new r.zD7());
          }
          swapBuffers() {
            let e = this.readBuffer;
            (this.readBuffer = this.writeBuffer), (this.writeBuffer = e);
          }
          addPass(e) {
            this.passes.push(e),
              e.setSize(
                this._width * this._pixelRatio,
                this._height * this._pixelRatio
              );
          }
          insertPass(e, t) {
            this.passes.splice(t, 0, e),
              e.setSize(
                this._width * this._pixelRatio,
                this._height * this._pixelRatio
              );
          }
          removePass(e) {
            let t = this.passes.indexOf(e);
            -1 !== t && this.passes.splice(t, 1);
          }
          isLastEnabledPass(e) {
            for (let t = e + 1; t < this.passes.length; t++)
              if (this.passes[t].enabled) return !1;
            return !0;
          }
          render(e) {
            void 0 === e && (e = this.clock.getDelta());
            let t = this.renderer.getRenderTarget(),
              i = !1;
            for (let t = 0, r = this.passes.length; t < r; t++) {
              let r = this.passes[t];
              if (!1 !== r.enabled) {
                if (
                  ((r.renderToScreen =
                    this.renderToScreen && this.isLastEnabledPass(t)),
                  r.render(
                    this.renderer,
                    this.writeBuffer,
                    this.readBuffer,
                    e,
                    i
                  ),
                  r.needsSwap)
                ) {
                  if (i) {
                    let t = this.renderer.getContext(),
                      i = this.renderer.state.buffers.stencil;
                    i.setFunc(t.NOTEQUAL, 1, 0xffffffff),
                      this.copyPass.render(
                        this.renderer,
                        this.writeBuffer,
                        this.readBuffer,
                        e
                      ),
                      i.setFunc(t.EQUAL, 1, 0xffffffff);
                  }
                  this.swapBuffers();
                }
                void 0 !== l &&
                  (r instanceof l ? (i = !0) : r instanceof c && (i = !1));
              }
            }
            this.renderer.setRenderTarget(t);
          }
          reset(e) {
            if (void 0 === e) {
              let t = this.renderer.getSize(new r.I9Y());
              (this._pixelRatio = this.renderer.getPixelRatio()),
                (this._width = t.width),
                (this._height = t.height),
                (e = this.renderTarget1.clone()).setSize(
                  this._width * this._pixelRatio,
                  this._height * this._pixelRatio
                );
            }
            this.renderTarget1.dispose(),
              this.renderTarget2.dispose(),
              (this.renderTarget1 = e),
              (this.renderTarget2 = e.clone()),
              (this.writeBuffer = this.renderTarget1),
              (this.readBuffer = this.renderTarget2);
          }
          setSize(e, t) {
            (this._width = e), (this._height = t);
            let i = this._width * this._pixelRatio,
              r = this._height * this._pixelRatio;
            this.renderTarget1.setSize(i, r), this.renderTarget2.setSize(i, r);
            for (let e = 0; e < this.passes.length; e++)
              this.passes[e].setSize(i, r);
          }
          setPixelRatio(e) {
            (this._pixelRatio = e), this.setSize(this._width, this._height);
          }
        },
        f = (new r.qUd(-1, 1, 1, -1, 0, 1), new r.LoY());
      f.setAttribute("position", new r.qtW([-1, 3, 0, -1, -1, 0, 3, -1, 0], 3)),
        f.setAttribute("uv", new r.qtW([0, 2, 0, 0, 2, 0], 2));
      var p = class extends n {
          constructor(e, t, i, n, o) {
            super(),
              (this.scene = e),
              (this.camera = t),
              (this.overrideMaterial = i),
              (this.clearColor = n),
              (this.clearAlpha = void 0 !== o ? o : 0),
              (this.clear = !0),
              (this.clearDepth = !1),
              (this.needsSwap = !1),
              (this._oldClearColor = new r.Q1f());
          }
          render(e, t, i) {
            let r,
              n,
              o = e.autoClear;
            (e.autoClear = !1),
              void 0 !== this.overrideMaterial &&
                ((n = this.scene.overrideMaterial),
                (this.scene.overrideMaterial = this.overrideMaterial)),
              this.clearColor &&
                (e.getClearColor(this._oldClearColor),
                (r = e.getClearAlpha()),
                e.setClearColor(this.clearColor, this.clearAlpha)),
              this.clearDepth && e.clearDepth(),
              e.setRenderTarget(this.renderToScreen ? null : i),
              this.clear &&
                e.clear(e.autoClearColor, e.autoClearDepth, e.autoClearStencil),
              e.render(this.scene, this.camera),
              this.clearColor && e.setClearColor(this._oldClearColor, r),
              void 0 !== this.overrideMaterial &&
                (this.scene.overrideMaterial = n),
              (e.autoClear = o);
          }
        },
        m = {
          SKIP: 0,
          ADD: 1,
          ALPHA: 2,
          AVERAGE: 3,
          COLOR_BURN: 4,
          COLOR_DODGE: 5,
          DARKEN: 6,
          DIFFERENCE: 7,
          EXCLUSION: 8,
          LIGHTEN: 9,
          MULTIPLY: 10,
          DIVIDE: 11,
          NEGATION: 12,
          NORMAL: 13,
          OVERLAY: 14,
          REFLECT: 15,
          SCREEN: 16,
          SOFT_LIGHT: 17,
          SUBTRACT: 18,
        },
        _ = `vec4 blend(const in vec4 x, const in vec4 y, const in float opacity) {

	return min(x + y, 1.0) * opacity + x * (1.0 - opacity);

}
`,
        g = `vec3 blend(const in vec3 x, const in vec3 y, const in float opacity) {

	return y * opacity + x * (1.0 - opacity);

}

vec4 blend(const in vec4 x, const in vec4 y, const in float opacity) {

	float a = min(y.a, opacity);

	return vec4(blend(x.rgb, y.rgb, a), max(x.a, a));

}
`,
        v = `vec4 blend(const in vec4 x, const in vec4 y, const in float opacity) {

	return (x + y) * 0.5 * opacity + x * (1.0 - opacity);

}
`,
        y = `float blend(const in float x, const in float y) {

	return (y == 0.0) ? y : max(1.0 - (1.0 - x) / y, 0.0);

}

vec4 blend(const in vec4 x, const in vec4 y, const in float opacity) {

	vec4 z = vec4(
		blend(x.r, y.r),
		blend(x.g, y.g),
		blend(x.b, y.b),
		blend(x.a, y.a)
	);

	return z * opacity + x * (1.0 - opacity);

}
`,
        C = `float blend(const in float x, const in float y) {

	return (y == 1.0) ? y : min(x / (1.0 - y), 1.0);

}

vec4 blend(const in vec4 x, const in vec4 y, const in float opacity) {

	vec4 z = vec4(
		blend(x.r, y.r),
		blend(x.g, y.g),
		blend(x.b, y.b),
		blend(x.a, y.a)
	);

	return z * opacity + x * (1.0 - opacity);

}
`,
        b = `vec4 blend(const in vec4 x, const in vec4 y, const in float opacity) {

	return min(x, y) * opacity + x * (1.0 - opacity);

}
`,
        x = `vec4 blend(const in vec4 x, const in vec4 y, const in float opacity) {

	return abs(x - y) * opacity + x * (1.0 - opacity);

}
`,
        E = `float blend(const in float x, const in float y) {

	return (y > 0.0) ? min(x / y, 1.0) : 1.0;

}

vec4 blend(const in vec4 x, const in vec4 y, const in float opacity) {

	vec4 z = vec4(
		blend(x.r, y.r),
		blend(x.g, y.g),
		blend(x.b, y.b),
		blend(x.a, y.a)
	);

	return z * opacity + x * (1.0 - opacity);

}
`,
        T = `vec4 blend(const in vec4 x, const in vec4 y, const in float opacity) {

	return (x + y - 2.0 * x * y) * opacity + x * (1.0 - opacity);

}
`,
        O = `vec4 blend(const in vec4 x, const in vec4 y, const in float opacity) {

	return max(x, y) * opacity + x * (1.0 - opacity);

}
`,
        w = `vec4 blend(const in vec4 x, const in vec4 y, const in float opacity) {

	return x * y * opacity + x * (1.0 - opacity);

}
`,
        A = `vec4 blend(const in vec4 x, const in vec4 y, const in float opacity) {

	return (1.0 - abs(1.0 - x - y)) * opacity + x * (1.0 - opacity);

}
`,
        D = `vec4 blend(const in vec4 x, const in vec4 y, const in float opacity) {

	return y * opacity + x * (1.0 - opacity);

}
`,
        S = `float blend(const in float x, const in float y) {

	return (x < 0.5) ? (2.0 * x * y) : (1.0 - 2.0 * (1.0 - x) * (1.0 - y));

}

vec4 blend(const in vec4 x, const in vec4 y, const in float opacity) {

	vec4 z = vec4(
		blend(x.r, y.r),
		blend(x.g, y.g),
		blend(x.b, y.b),
		blend(x.a, y.a)
	);

	return z * opacity + x * (1.0 - opacity);

}
`,
        P = `float blend(const in float x, const in float y) {

	return (y == 1.0) ? y : min(x * x / (1.0 - y), 1.0);

}

vec4 blend(const in vec4 x, const in vec4 y, const in float opacity) {

	vec4 z = vec4(
		blend(x.r, y.r),
		blend(x.g, y.g),
		blend(x.b, y.b),
		blend(x.a, y.a)
	);

	return z * opacity + x * (1.0 - opacity);

}
`,
        z = `vec4 blend(const in vec4 x, const in vec4 y, const in float opacity) {

	return (1.0 - (1.0 - x) * (1.0 - y)) * opacity + x * (1.0 - opacity);

}
`,
        L = `float blend(const in float x, const in float y) {

	return (y < 0.5) ?
		(2.0 * x * y + x * x * (1.0 - 2.0 * y)) :
		(sqrt(x) * (2.0 * y - 1.0) + 2.0 * x * (1.0 - y));

}

vec4 blend(const in vec4 x, const in vec4 y, const in float opacity) {

	vec4 z = vec4(
		blend(x.r, y.r),
		blend(x.g, y.g),
		blend(x.b, y.b),
		blend(x.a, y.a)
	);

	return z * opacity + x * (1.0 - opacity);

}
`,
        B = `vec4 blend(const in vec4 x, const in vec4 y, const in float opacity) {

	return max(x + y - 1.0, 0.0) * opacity + x * (1.0 - opacity);

}
`,
        R = new Map([
          [m.SKIP, null],
          [m.ADD, _],
          [m.ALPHA, g],
          [m.AVERAGE, v],
          [m.COLOR_BURN, y],
          [m.COLOR_DODGE, C],
          [m.DARKEN, b],
          [m.DIFFERENCE, x],
          [m.EXCLUSION, T],
          [m.LIGHTEN, O],
          [m.MULTIPLY, w],
          [m.DIVIDE, E],
          [m.NEGATION, A],
          [m.NORMAL, D],
          [m.OVERLAY, S],
          [m.REFLECT, P],
          [m.SCREEN, z],
          [m.SOFT_LIGHT, L],
          [m.SUBTRACT, B],
        ]),
        U = class extends r.Qev {
          constructor(e, t = 1) {
            super(), (this.blendFunction = e), (this.opacity = new r.nc$(t));
          }
          getBlendFunction() {
            return this.blendFunction;
          }
          setBlendFunction(e) {
            (this.blendFunction = e), this.dispatchEvent({ type: "change" });
          }
          getShaderCode() {
            return R.get(this.blendFunction);
          }
        },
        F = {
          uniforms: {
            tDiffuse: { value: null },
            shape: { value: 1 },
            radius: { value: 2 },
            rotateR: { value: (Math.PI / 12) * 1 },
            rotateG: { value: (Math.PI / 12) * 2 },
            rotateB: { value: (Math.PI / 12) * 3 },
            scatter: { value: 1 },
            width: { value: 20 },
            height: { value: 20 },
            blending: { value: 1 },
            blendingMode: { value: 1 },
            greyscale: { value: !1 },
            disable: { value: !1 },
          },
          vertexShader: `

		varying vec2 vUV;
		varying vec3 vPosition;

		void main() {

			vUV = uv;
			vPosition = position;

			gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);

		}`,
          fragmentShader: `

		#define SQRT2_MINUS_ONE 0.41421356
		#define SQRT2_HALF_MINUS_ONE 0.20710678
		#define PI2 6.28318531
		#define SHAPE_DOT 1
		#define SHAPE_ELLIPSE 2
		#define SHAPE_LINE 3
		#define SHAPE_SQUARE 4
		#define BLENDING_LINEAR 1
		#define BLENDING_MULTIPLY 2
		#define BLENDING_ADD 3
		#define BLENDING_LIGHTER 4
		#define BLENDING_DARKER 5
		uniform sampler2D tDiffuse;
		uniform float radius;
		uniform float rotateR;
		uniform float rotateG;
		uniform float rotateB;
		uniform float scatter;
		uniform float width;
		uniform float height;
		uniform int shape;
		uniform bool disable;
		uniform float blending;
		uniform int blendingMode;
		varying vec2 vUV;
		varying vec3 vPosition;
		uniform bool greyscale;
		const int samples = 8;

		float blend( float a, float b, float t ) {

		// linear blend
			return a * ( 1.0 - t ) + b * t;

		}

		float hypot( float x, float y ) {

		// vector magnitude
			return sqrt( x * x + y * y );

		}

		float rand( vec2 seed ){

		// get pseudo-random number
			return fract( sin( dot( seed.xy, vec2( 12.9898, 78.233 ) ) ) * 43758.5453 );

		}

		float distanceToDotRadius( float channel, vec2 coord, vec2 normal, vec2 p, float angle, float rad_max ) {

		// apply shape-specific transforms
			float dist = hypot( coord.x - p.x, coord.y - p.y );
			float rad = channel;

			if ( shape == SHAPE_DOT ) {

				rad = pow( abs( rad ), 1.125 ) * rad_max;

			} else if ( shape == SHAPE_ELLIPSE ) {

				rad = pow( abs( rad ), 1.125 ) * rad_max;

				if ( dist != 0.0 ) {
					float dot_p = abs( ( p.x - coord.x ) / dist * normal.x + ( p.y - coord.y ) / dist * normal.y );
					dist = ( dist * ( 1.0 - SQRT2_HALF_MINUS_ONE ) ) + dot_p * dist * SQRT2_MINUS_ONE;
				}

			} else if ( shape == SHAPE_LINE ) {

				rad = pow( abs( rad ), 1.5) * rad_max;
				float dot_p = ( p.x - coord.x ) * normal.x + ( p.y - coord.y ) * normal.y;
				dist = hypot( normal.x * dot_p, normal.y * dot_p );

			} else if ( shape == SHAPE_SQUARE ) {

				float theta = atan( p.y - coord.y, p.x - coord.x ) - angle;
				float sin_t = abs( sin( theta ) );
				float cos_t = abs( cos( theta ) );
				rad = pow( abs( rad ), 1.4 );
				rad = rad_max * ( rad + ( ( sin_t > cos_t ) ? rad - sin_t * rad : rad - cos_t * rad ) );

			}

			return rad - dist;

		}

		struct Cell {

		// grid sample positions
			vec2 normal;
			vec2 p1;
			vec2 p2;
			vec2 p3;
			vec2 p4;
			float samp2;
			float samp1;
			float samp3;
			float samp4;

		};

		vec4 getSample( vec2 point ) {

		// multi-sampled point
			vec4 tex = texture2D( tDiffuse, vec2( point.x / width, point.y / height ) );
			float base = rand( vec2( floor( point.x ), floor( point.y ) ) ) * PI2;
			float step = PI2 / float( samples );
			// float dist = radius * 0.66;
			float dist = radius * 0.0;

			for ( int i = 0; i < samples; ++i ) {

				float r = base + step * float( i );
				vec2 coord = point + vec2( cos( r ) * dist, sin( r ) * dist );
				tex += texture2D( tDiffuse, vec2( coord.x / width, coord.y / height ) );

			}

			tex /= float( samples ) + 1.0;
			return tex;

		}

		float getDotColour( Cell c, vec2 p, int channel, float angle, float aa ) {

		// get colour for given point
			float dist_c_1, dist_c_2, dist_c_3, dist_c_4, res;

			if ( channel == 0 ) {

				c.samp1 = getSample( c.p1 ).r;
				c.samp2 = getSample( c.p2 ).r;
				c.samp3 = getSample( c.p3 ).r;
				c.samp4 = getSample( c.p4 ).r;

			} else if (channel == 1) {

				c.samp1 = getSample( c.p1 ).g;
				c.samp2 = getSample( c.p2 ).g;
				c.samp3 = getSample( c.p3 ).g;
				c.samp4 = getSample( c.p4 ).g;

			} else {

				c.samp1 = getSample( c.p1 ).b;
				c.samp3 = getSample( c.p3 ).b;
				c.samp2 = getSample( c.p2 ).b;
				c.samp4 = getSample( c.p4 ).b;

			}

			dist_c_1 = distanceToDotRadius( c.samp1, c.p1, c.normal, p, angle, radius );
			dist_c_2 = distanceToDotRadius( c.samp2, c.p2, c.normal, p, angle, radius );
			dist_c_3 = distanceToDotRadius( c.samp3, c.p3, c.normal, p, angle, radius );
			dist_c_4 = distanceToDotRadius( c.samp4, c.p4, c.normal, p, angle, radius );
			res = ( dist_c_1 > 0.0 ) ? clamp( dist_c_1 / aa, 0.0, 1.0 ) : 0.0;
			// res = 0.0;
			res += ( dist_c_2 > 0.0 ) ? clamp( dist_c_2 / aa, 0.0, 1.0 ) : 0.0;
			res += ( dist_c_3 > 0.0 ) ? clamp( dist_c_3 / aa, 0.0, 1.0 ) : 0.0;
			res += ( dist_c_4 > 0.0 ) ? clamp( dist_c_4 / aa, 0.0, 1.0 ) : 0.0;
			res = clamp( res, 0.0, 1.0 );

			return res;
			// return 2

		}

		Cell getReferenceCell( vec2 p, vec2 origin, float grid_angle, float step ) {

		// get containing cell
			Cell c;

		// calc grid
			vec2 n = vec2( cos( grid_angle ), sin( grid_angle ) );
			float threshold = step * 0.5;
			float dot_normal = n.x * ( p.x - origin.x ) + n.y * ( p.y - origin.y );
			float dot_line = -n.y * ( p.x - origin.x ) + n.x * ( p.y - origin.y );
			vec2 offset = vec2( n.x * dot_normal, n.y * dot_normal );
			float offset_normal = mod( hypot( offset.x, offset.y ), step );
			float normal_dir = ( dot_normal < 0.0 ) ? 1.0 : -1.0;
			float normal_scale = ( ( offset_normal < threshold ) ? -offset_normal : step - offset_normal ) * normal_dir;
			float offset_line = mod( hypot( ( p.x - offset.x ) - origin.x, ( p.y - offset.y ) - origin.y ), step );
			float line_dir = ( dot_line < 0.0 ) ? 1.0 : -1.0;
			float line_scale = ( ( offset_line < threshold ) ? -offset_line : step - offset_line ) * line_dir;

		// get closest corner
			c.normal = n;
			c.p1.x = p.x - n.x * normal_scale + n.y * line_scale;
			c.p1.y = p.y - n.y * normal_scale - n.x * line_scale;

		// scatter
			if ( scatter != 0.0 ) {

				float off_mag = scatter * threshold * 0.5;
				float off_angle = rand( vec2( floor( c.p1.x ), floor( c.p1.y ) ) ) * PI2;
				c.p1.x += cos( off_angle ) * off_mag;
				c.p1.y += sin( off_angle ) * off_mag;

			}

		// find corners
			float normal_step = normal_dir * ( ( offset_normal < threshold ) ? step : -step );
			float line_step = line_dir * ( ( offset_line < threshold ) ? step : -step );
			c.p2.x = c.p1.x - n.x * normal_step;
			c.p2.y = c.p1.y - n.y * normal_step;
			c.p3.x = c.p1.x + n.y * line_step;
			c.p3.y = c.p1.y - n.x * line_step;
			c.p4.x = c.p1.x - n.x * normal_step + n.y * line_step;
			c.p4.y = c.p1.y - n.y * normal_step - n.x * line_step;

			return c;

		}

		float blendColour( float a, float b, float t ) {

		// blend colours
			if ( blendingMode == BLENDING_LINEAR ) {
				return blend( a, b, 1.0 - t );
			} else if ( blendingMode == BLENDING_ADD ) {
				return blend( a, min( 1.0, a + b ), t );
			} else if ( blendingMode == BLENDING_MULTIPLY ) {
				return blend( a, max( 0.0, a * b ), t );
			} else if ( blendingMode == BLENDING_LIGHTER ) {
				return blend( a, max( a, b ), t );
			} else if ( blendingMode == BLENDING_DARKER ) {
				return blend( a, min( a, b ), t );
			} else {
				return blend( a, b, 1.0 - t );
			}

		}

		void main() {

			if ( ! disable ) {

		// setup
				vec2 p = vec2( vUV.x * width, vUV.y * height ) - vec2(vPosition.x, vPosition.y) * 3.0; // - position values to remove black borders.
				vec2 origin = vec2( 0, 0 );
				float aa = ( radius < 2.5 ) ? radius * 0.5 : 1.25;
				// float aa = 0.0;

		// get channel samples
				Cell cell_r = getReferenceCell( p, origin, rotateR, radius );
				Cell cell_g = getReferenceCell( p, origin, rotateG, radius );
				Cell cell_b = getReferenceCell( p, origin, rotateB, radius );
				float r = getDotColour( cell_r, p, 0, rotateR, aa );
				float g = getDotColour( cell_g, p, 1, rotateG, aa );
				float b = getDotColour( cell_b, p, 2, rotateB, aa );

		// blend with original
				vec4 colour = texture2D( tDiffuse, vUV );
				
				// add masking before blendColour
				if (colour.r == 0.0) {
					r = 0.0;
				} else {
					r = blendColour( r, colour.r, blending );
				}

				if (colour.g == 0.0) {
					g = 0.0;
				} else {
					g = blendColour( g, colour.g, blending );
				}

				if (colour.b == 0.0) {
					b = 0.0;
				} else {
					b = blendColour( b, colour.b, blending );
				}
				
				
				

				if ( greyscale ) {
					r = g = b = (r + b + g) / 3.0;
				}

				// add alpha channel to each r, g, b colors
				vec4 vR;
				vec4 vG;
				vec4 vB;
	
				// apply transparent to outside of mesh
				if (r == 0.0 && colour.r == 0.0) {
					vR = vec4( 0, 0, 0, 0 );
				} else {
					vR = vec4( r, 0, 0, 1 );
				}
	
				if (g == 0.0 && colour.g == 0.0) {
					vG = vec4( 0, 0, 0, 0 );
				} else {
					vG = vec4( 0, g, 0, 1 );
				}
	
				if (b == 0.0 && colour.b == 0.0) {
					vB = vec4( 0, 0, 0, 0 );
				} else {
					vB = vec4( 0, 0, b, 1 );
				}

				// gl_FragColor = vec4( r, g, b, 1.0 );
				gl_FragColor = vR + vG + vB;

			} else {

				gl_FragColor = texture2D( tDiffuse, vUV );

			}

		}`,
        },
        M = class {
          constructor() {
            (this.enabled = !0),
              (this.needsSwap = !0),
              (this.clear = !1),
              (this.renderToScreen = !1);
          }
          setSize() {}
          render() {
            console.error(
              "THREE.Pass: .render() must be implemented in derived pass."
            );
          }
        },
        j = new r.qUd(-1, 1, 1, -1, 0, 1),
        I = new r.LoY();
      I.setAttribute("position", new r.qtW([-1, 3, 0, -1, -1, 0, 3, -1, 0], 3)),
        I.setAttribute("uv", new r.qtW([0, 2, 0, 0, 2, 0], 2));
      var k = class {
          constructor(e) {
            this._mesh = new r.eaF(I, e);
          }
          dispose() {
            this._mesh.geometry.dispose();
          }
          render(e) {
            e.render(this._mesh, j);
          }
          get material() {
            return this._mesh.material;
          }
          set material(e) {
            this._mesh.material = e;
          }
        },
        N = class extends M {
          constructor(e, t, i) {
            super(),
              void 0 === F &&
                console.error("THREE.HalftonePass requires HalftoneShader"),
              (this.uniforms = r.LlO.clone(F.uniforms)),
              (this.material = new r.BKk({
                uniforms: this.uniforms,
                fragmentShader: F.fragmentShader,
                vertexShader: F.vertexShader,
              })),
              (this.uniforms.width.value = e),
              (this.uniforms.height.value = t),
              (this.uniforms.disable.value = i.disable),
              (this.fsQuad = new k(this.material)),
              (this.blendMode = new U(m.SCREEN)),
              (this.extensions = null);
          }
          render(e, t, i) {
            (this.material.uniforms.tDiffuse.value = i.texture),
              this.renderToScreen
                ? e.setRenderTarget(null)
                : (e.setRenderTarget(t), this.clear && e.clear()),
              this.fsQuad.render(e);
          }
          setSize(e, t) {
            (this.uniforms.width.value = e), (this.uniforms.height.value = t);
          }
          initialize(e, t, i) {}
          addEventListener() {}
          getAttributes() {
            return this.attributes;
          }
          getFragmentShader() {
            return F.fragmentShader;
          }
          getVertexShader() {
            return F.vertexShader;
          }
          update(e, t, i) {}
        },
        H = i(2115),
        Y = i(13),
        V = i(5155);
      function Z({ disable: e = !1 }) {
        let { gl: t, scene: i, camera: r, size: n } = (0, Y.A)(),
          o = (0, H.useMemo)(() => {
            let o = new d(t);
            o.addPass(new p(i, r));
            let s = new N(n.width, n.height, {
              shape: 1,
              radius: 2,
              rotateR: Math.PI / 12,
              rotateB: (Math.PI / 12) * 2,
              rotateG: (Math.PI / 12) * 3,
              scatter: 1,
              blending: 1,
              blendingMode: 1,
              greyscale: !1,
              disable: e,
            });
            return o.addPass(s), o;
          }, [t, i, r, n, e]);
        return (
          (0, H.useEffect)(
            () => (null == o ? void 0 : o.setSize(n.width, n.height)),
            [o, n]
          ),
          (0, Y.C)((e, i) => ((t.autoClear = !0), void o.render(i)), 1),
          (0, V.jsx)(V.Fragment, {})
        );
      }
      var q = `// #pragma glslify: cnoise3 = require(glsl-noise/classic/3d) 

// noise source from https://github.com/hughsk/glsl-noise/blob/master/periodic/3d.glsl

vec3 mod289(vec3 x)
{
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 mod289(vec4 x)
{
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 permute(vec4 x)
{
  return mod289(((x*34.0)+1.0)*x);
}

vec4 taylorInvSqrt(vec4 r)
{
  return 1.79284291400159 - 0.85373472095314 * r;
}

vec3 fade(vec3 t) {
  return t*t*t*(t*(t*6.0-15.0)+10.0);
}

float cnoise(vec3 P)
{
  vec3 Pi0 = floor(P); // Integer part for indexing
  vec3 Pi1 = Pi0 + vec3(1.0); // Integer part + 1
  Pi0 = mod289(Pi0);
  Pi1 = mod289(Pi1);
  vec3 Pf0 = fract(P); // Fractional part for interpolation
  vec3 Pf1 = Pf0 - vec3(1.0); // Fractional part - 1.0
  vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
  vec4 iy = vec4(Pi0.yy, Pi1.yy);
  vec4 iz0 = Pi0.zzzz;
  vec4 iz1 = Pi1.zzzz;

  vec4 ixy = permute(permute(ix) + iy);
  vec4 ixy0 = permute(ixy + iz0);
  vec4 ixy1 = permute(ixy + iz1);

  vec4 gx0 = ixy0 * (1.0 / 7.0);
  vec4 gy0 = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;
  gx0 = fract(gx0);
  vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);
  vec4 sz0 = step(gz0, vec4(0.0));
  gx0 -= sz0 * (step(0.0, gx0) - 0.5);
  gy0 -= sz0 * (step(0.0, gy0) - 0.5);

  vec4 gx1 = ixy1 * (1.0 / 7.0);
  vec4 gy1 = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;
  gx1 = fract(gx1);
  vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);
  vec4 sz1 = step(gz1, vec4(0.0));
  gx1 -= sz1 * (step(0.0, gx1) - 0.5);
  gy1 -= sz1 * (step(0.0, gy1) - 0.5);

  vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);
  vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);
  vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);
  vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);
  vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);
  vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);
  vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);
  vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);

  vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));
  g000 *= norm0.x;
  g010 *= norm0.y;
  g100 *= norm0.z;
  g110 *= norm0.w;
  vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));
  g001 *= norm1.x;
  g011 *= norm1.y;
  g101 *= norm1.z;
  g111 *= norm1.w;

  float n000 = dot(g000, Pf0);
  float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));
  float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));
  float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));
  float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));
  float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));
  float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));
  float n111 = dot(g111, Pf1);

  vec3 fade_xyz = fade(Pf0);
  vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);
  vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);
  float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x); 
  return 2.2 * n_xyz;
}

//-------- start here ------------

mat3 rotation3dY(float angle) {
  float s = sin(angle);
  float c = cos(angle);

  return mat3(c, 0.0, -s, 0.0, 1.0, 0.0, s, 0.0, c);
}

vec3 rotateY(vec3 v, float angle) { return rotation3dY(angle) * v; }

varying vec3 vNormal;
varying float displacement;
varying vec3 vPos;
varying float vDistort;

varying vec2 vUv;

uniform float uTime;
uniform float uSpeed;

uniform float uLoadingTime;

uniform float uNoiseDensity;
uniform float uNoiseStrength;

#define STANDARD
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
#ifdef USE_TANGENT
varying vec3 vTangent;
varying vec3 vBitangent;
#endif
#endif
#include <clipping_planes_pars_vertex>
#include <color_pars_vertex>
#include <common>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <morphtarget_pars_vertex>
#include <shadowmap_pars_vertex>
#include <skinning_pars_vertex>
#include <uv2_pars_vertex>
#include <uv_pars_vertex>

void main() {

  #include <beginnormal_vertex>
  #include <color_vertex>
  #include <defaultnormal_vertex>
  #include <morphnormal_vertex>
  #include <skinbase_vertex>
  #include <skinnormal_vertex>
  #include <uv2_vertex>
  #include <uv_vertex>
  #ifndef FLAT_SHADED
    vNormal = normalize(transformedNormal);
  #ifdef USE_TANGENT
    vTangent = normalize(transformedTangent);
    vBitangent = normalize(cross(vNormal, vTangent) * tangent.w);
  #endif
  #endif
  #include <begin_vertex>

  #include <clipping_planes_vertex>
  #include <displacementmap_vertex>
  #include <logdepthbuf_vertex>
  #include <morphtarget_vertex>
  #include <project_vertex>
  #include <skinning_vertex>
    vViewPosition = -mvPosition.xyz;
  #include <fog_vertex>
  #include <shadowmap_vertex>
  #include <worldpos_vertex>

  //-------- start vertex ------------
  vUv = uv;

  float t = uTime * uSpeed;
  // Create a sine wave from top to bottom of the sphere
  float distortion = 0.75 * cnoise(0.43 * position * uNoiseDensity + t);

  vec3 pos = position + normal * distortion * uNoiseStrength * uLoadingTime;
  vPos = pos;

  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.);
}
`,
        G = `
#define STANDARD
#ifdef PHYSICAL
#define REFLECTIVITY
#define CLEARCOAT
#define TRANSMISSION
#endif

uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;

#ifdef TRANSMISSION
uniform float transmission;
#endif
#ifdef REFLECTIVITY
uniform float reflectivity;
#endif
#ifdef CLEARCOAT
uniform float clearcoat;
uniform float clearcoatRoughness;
#endif
#ifdef USE_SHEEN
uniform vec3 sheen;
#endif
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
#ifdef USE_TANGENT
varying vec3 vTangent;
varying vec3 vBitangent;
#endif
#endif
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <color_pars_fragment>
#include <common>
#include <dithering_pars_fragment>
#include <emissivemap_pars_fragment>
#include <lightmap_pars_fragment>
#include <map_pars_fragment>
#include <packing>
#include <uv2_pars_fragment>
#include <uv_pars_fragment>
// #include <transmissionmap_pars_fragment>
#include <bsdfs>
#include <bumpmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <clipping_planes_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <lights_physical_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <shadowmap_pars_fragment>
// include\uB97C \uD1B5\uD574 \uAC00\uC838\uC628 \uAC12\uC740 \uB300\uBD80\uBD84 \uD658\uACBD, \uBE5B \uB4F1\uC744 \uACC4\uC0B0\uD558\uAE30 \uC704\uD574\uC11C \uAE30\uBCF8 fragment
// shader\uC758 \uAC12\uB4E4\uC744 \uBC1B\uC544\uC654\uC2B5\uB2C8\uB2E4. \uC77C\uB2E8\uC740 \uBB34\uC2DC\uD558\uC154\uB3C4 \uB429\uB2C8\uB2E4.

varying vec3 vNormal;
varying float displacement;
varying vec3 vPos;
varying float vDistort;

uniform float uC1r;
uniform float uC1g;
uniform float uC1b;
uniform float uC2r;
uniform float uC2g;
uniform float uC2b;
uniform float uC3r;
uniform float uC3g;
uniform float uC3b;

varying vec3 color1;
varying vec3 color2;
varying vec3 color3;

// for npm package, need to add this manually
float linearToRelativeLuminance2( const in vec3 color ) {
    vec3 weights = vec3( 0.2126, 0.7152, 0.0722 );
    return dot( weights, color.rgb );
}

void main() {

  //-------- basic gradient ------------
  vec3 color1 = vec3(uC1r, uC1g, uC1b);
  vec3 color2 = vec3(uC2r, uC2g, uC2b);
  vec3 color3 = vec3(uC3r, uC3g, uC3b);
  float clearcoat = 1.0;
  float clearcoatRoughness = 0.5;

  #include <clipping_planes_fragment>

  vec4 diffuseColor = vec4(
      mix(mix(color1, color2, smoothstep(-3.0, 3.0, vPos.x)), color3, vPos.z),
      1);
  // diffuseColor\uB294 \uC624\uBE0C\uC81D\uD2B8\uC758 \uBCA0\uC774\uC2A4 \uC0C9\uC0C1 (\uD658\uACBD\uC774\uB098 \uBE5B\uC774 \uACE0\uB824\uB418\uC9C0 \uC54A\uC740 \uBCF8\uC5F0\uC758
  // \uC0C9)

  // mix(x, y, a): a\uB97C \uCD95\uC73C\uB85C \uD588\uC744 \uB54C \uAC00\uC7A5 \uB0AE\uC740 \uAC12\uC5D0\uC11C x\uAC12\uC758 \uC601\uD5A5\uB825\uC744 100%, \uAC00\uC7A5
  // \uB192\uC740 \uAC12\uC5D0\uC11C y\uAC12\uC758 \uC601\uD5A5\uB825\uC744 100%\uB85C \uB9CC\uB4E0\uB2E4. smoothstep(x, y, a): a\uCD95\uC744
  // \uAE30\uC900\uC73C\uB85C x\uB97C \uCD5C\uC18C\uAC12, y\uB97C \uCD5C\uB300\uAC12\uC73C\uB85C \uADF8 \uC0AC\uC774\uC758 \uAC12\uC744 \uCABC\uAC20\uB2E4. x\uC640 y \uC0AC\uC774\uB97C
  // 0-100 \uC0AC\uC774\uC758 \uADF8\uB77C\uB514\uC5B8\uD2B8\uCC98\uB7FC \uB2E8\uACC4\uBCC4\uB85C \uD45C\uD604\uD558\uACE0, x \uBBF8\uB9CC\uC758 \uAC12\uC740 0, y \uC774\uC0C1\uC758
  // \uAC12\uC740 100\uC73C\uB85C \uCC98\uB9AC

  // 1. smoothstep(-3.0, 3.0,vPos.x)\uB85C x\uCD95\uC758 \uADF8\uB77C\uB514\uC5B8\uD2B8\uAC00 \uD45C\uD604 \uB420 \uBC94\uC704\uB97C -3,
  // 3\uC73C\uB85C \uC815\uD55C\uB2E4.
  // 2. mix(color1, color3, smoothstep(-3.0, 3.0,vPos.x))\uB85C color1\uACFC color3\uC744
  // \uC704\uC758 \uBC94\uC704 \uC548\uC5D0\uC11C \uADF8\uB77C\uB514\uC5B8\uD2B8\uB85C \uD45C\uD604\uD55C\uB2E4.
  // \uC608\uB97C \uB4E4\uC5B4 color1\uC774 \uB178\uB791, color3\uC774 \uD30C\uB791\uC774\uB77C\uACE0 \uCE58\uBA74, x\uCD95 \uAE30\uC900 -3\uBD80\uD130 3\uAE4C\uC9C0
  // \uB178\uB791\uACFC \uD30C\uB791 \uC0AC\uC774\uC758 \uADF8\uB77C\uB514\uC5B8\uD2B8\uAC00 \uB098\uD0C0\uB098\uACE0, -3\uBCF4\uB2E4 \uC791\uC740 \uAC12\uC5D0\uC11C\uB294 \uACC4\uC18D \uB178\uB791,
  // 3\uBCF4\uB2E4 \uD070 \uAC12\uC5D0\uC11C\uB294 \uACC4\uC18D \uD30C\uB791\uC774 \uB098\uD0C0\uB09C\uB2E4.
  // 3. mix()\uB97C \uD55C \uBC88 \uB354 \uC0AC\uC6A9\uD574\uC11C \uC704\uC758 \uADF8\uB77C\uB514\uC5B8\uD2B8\uC640 color2\uB97C z\uCD95 \uAE30\uC900\uC73C\uB85C
  // \uBD84\uBC30\uD55C\uB2E4.

  //-------- materiality ------------
  ReflectedLight reflectedLight =
      ReflectedLight(vec3(0.0), vec3(0.0), vec3(0.0), vec3(0.0));
  vec3 totalEmissiveRadiance = emissive;

  #ifdef TRANSMISSION
    float totalTransmission = transmission;
  #endif
  #include <logdepthbuf_fragment>
  #include <map_fragment>
  #include <color_fragment>
  #include <alphamap_fragment>
  #include <alphatest_fragment>
  #include <roughnessmap_fragment>
  #include <metalnessmap_fragment>
  #include <normal_fragment_begin>
  #include <normal_fragment_maps>
  #include <clearcoat_normal_fragment_begin>
  #include <clearcoat_normal_fragment_maps>
  #include <emissivemap_fragment>
  // #include <transmissionmap_fragment>
  #include <lights_physical_fragment>
  #include <lights_fragment_begin>
  #include <lights_fragment_maps>
  #include <lights_fragment_end>
  #include <aomap_fragment>
    vec3 outgoingLight =
        reflectedLight.directDiffuse + reflectedLight.indirectDiffuse +
        reflectedLight.directSpecular + reflectedLight.indirectSpecular;
    //\uC704\uC5D0\uC11C \uC815\uC758\uD55C diffuseColor\uC5D0 \uD658\uACBD\uC774\uB098 \uBC18\uC0AC\uAC12\uB4E4\uC744 \uBC18\uC601\uD55C \uAC12.
  #ifdef TRANSMISSION
    diffuseColor.a *=
        mix(saturate(1. - totalTransmission +
                    linearToRelativeLuminance2(reflectedLight.directSpecular +
                                              reflectedLight.indirectSpecular)),
            1.0, metalness);
  #endif


  #include <tonemapping_fragment>
  #include <encodings_fragment>
  #include <fog_fragment>
  #include <premultiplied_alpha_fragment>
  #include <dithering_fragment>


  gl_FragColor = vec4(outgoingLight, diffuseColor.a);
  // gl_FragColor\uAC00 fragment shader\uB97C \uD1B5\uD574 \uB098\uD0C0\uB098\uB294 \uCD5C\uC885\uAC12\uC73C\uB85C, diffuseColor\uC5D0\uC11C
  // \uC815\uC758\uD55C \uADF8\uB77C\uB514\uC5B8\uD2B8 \uC0C9\uC0C1 \uC704\uC5D0 \uBC18\uC0AC\uB098 \uBE5B\uC744 \uACC4\uC0B0\uD55C \uAC12\uC744 \uCD5C\uC885\uAC12\uC73C\uB85C \uC815\uC758.
  // gl_FragColor = vec4(mix(mix(color1, color3, smoothstep(-3.0, 3.0,vPos.x)),
  // color2, vNormal.z), 1.0); \uC704\uCC98\uB7FC \uCD5C\uC885\uAC12\uC744 \uADF8\uB77C\uB514\uC5B8\uD2B8 \uAC12 \uC790\uCCB4\uB97C \uB123\uC73C\uBA74 \uD658\uACBD
  // \uC601\uD5A5\uC5C6\uB294 \uADF8\uB77C\uB514\uC5B8\uD2B8\uB9CC \uD45C\uD604\uB428.
}
`,
        X = `// #pragma glslify: pnoise = require(glsl-noise/periodic/3d)

vec3 mod289(vec3 x)
{
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 mod289(vec4 x)
{
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 permute(vec4 x)
{
  return mod289(((x*34.0)+1.0)*x);
}

vec4 taylorInvSqrt(vec4 r)
{
  return 1.79284291400159 - 0.85373472095314 * r;
}

vec3 fade(vec3 t) {
  return t*t*t*(t*(t*6.0-15.0)+10.0);
}

// Classic Perlin noise, periodic variant
float pnoise(vec3 P, vec3 rep)
{
  vec3 Pi0 = mod(floor(P), rep); // Integer part, modulo period
  vec3 Pi1 = mod(Pi0 + vec3(1.0), rep); // Integer part + 1, mod period
  Pi0 = mod289(Pi0);
  Pi1 = mod289(Pi1);
  vec3 Pf0 = fract(P); // Fractional part for interpolation
  vec3 Pf1 = Pf0 - vec3(1.0); // Fractional part - 1.0
  vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
  vec4 iy = vec4(Pi0.yy, Pi1.yy);
  vec4 iz0 = Pi0.zzzz;
  vec4 iz1 = Pi1.zzzz;

  vec4 ixy = permute(permute(ix) + iy);
  vec4 ixy0 = permute(ixy + iz0);
  vec4 ixy1 = permute(ixy + iz1);

  vec4 gx0 = ixy0 * (1.0 / 7.0);
  vec4 gy0 = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;
  gx0 = fract(gx0);
  vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);
  vec4 sz0 = step(gz0, vec4(0.0));
  gx0 -= sz0 * (step(0.0, gx0) - 0.5);
  gy0 -= sz0 * (step(0.0, gy0) - 0.5);

  vec4 gx1 = ixy1 * (1.0 / 7.0);
  vec4 gy1 = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;
  gx1 = fract(gx1);
  vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);
  vec4 sz1 = step(gz1, vec4(0.0));
  gx1 -= sz1 * (step(0.0, gx1) - 0.5);
  gy1 -= sz1 * (step(0.0, gy1) - 0.5);

  vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);
  vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);
  vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);
  vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);
  vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);
  vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);
  vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);
  vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);

  vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));
  g000 *= norm0.x;
  g010 *= norm0.y;
  g100 *= norm0.z;
  g110 *= norm0.w;
  vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));
  g001 *= norm1.x;
  g011 *= norm1.y;
  g101 *= norm1.z;
  g111 *= norm1.w;

  float n000 = dot(g000, Pf0);
  float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));
  float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));
  float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));
  float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));
  float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));
  float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));
  float n111 = dot(g111, Pf1);

  vec3 fade_xyz = fade(Pf0);
  vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);
  vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);
  float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x);
  return 2.2 * n_xyz;
}


//-------- start here ------------

varying vec3 vNormal;
uniform float uTime;
uniform float uSpeed;
uniform float uNoiseDensity;
uniform float uNoiseStrength;
uniform float uFrequency;
uniform float uAmplitude;
varying vec3 vPos;
varying float vDistort;
varying vec2 vUv;
varying vec3 vViewPosition;

#define STANDARD
#ifndef FLAT_SHADED
  #ifdef USE_TANGENT
    varying vec3 vTangent;
    varying vec3 vBitangent;
  #endif
#endif

#include <clipping_planes_pars_vertex>
#include <color_pars_vertex>
#include <common>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <morphtarget_pars_vertex>
#include <shadowmap_pars_vertex>
#include <skinning_pars_vertex>
#include <uv2_pars_vertex>
#include <uv_pars_vertex>


// rotation
mat3 rotation3dY(float angle) {
  float s = sin(angle);
  float c = cos(angle);
  return mat3(c, 0.0, -s, 0.0, 1.0, 0.0, s, 0.0, c);
}

vec3 rotateY(vec3 v, float angle) { return rotation3dY(angle) * v; }

void main() {
  #include <beginnormal_vertex>
  #include <color_vertex>
  #include <defaultnormal_vertex>
  #include <morphnormal_vertex>
  #include <skinbase_vertex>
  #include <skinnormal_vertex>
  #include <uv2_vertex>
  #include <uv_vertex>
  #ifndef FLAT_SHADED
    vNormal = normalize(transformedNormal);
  #ifdef USE_TANGENT
    vTangent = normalize(transformedTangent);
    vBitangent = normalize(cross(vNormal, vTangent) * tangent.w);
  #endif
  #endif
  #include <begin_vertex>

  #include <clipping_planes_vertex>
  #include <displacementmap_vertex>
  #include <logdepthbuf_vertex>
  #include <morphtarget_vertex>
  #include <project_vertex>
  #include <skinning_vertex>
    vViewPosition = -mvPosition.xyz;
  #include <fog_vertex>
  #include <shadowmap_vertex>
  #include <worldpos_vertex>

  //-------- start vertex ------------
  float t = uTime * uSpeed;
  float distortion =
      pnoise((normal + t) * uNoiseDensity, vec3(10.0)) * uNoiseStrength;
  vec3 pos = position + (normal * distortion);
  float angle = sin(uv.y * uFrequency + t) * uAmplitude;
  pos = rotateY(pos, angle);

  vPos = pos;
  vDistort = distortion;
  vNormal = normal;
  vUv = uv;

  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.);
}
`,
        K = `
#define STANDARD
#ifdef PHYSICAL
#define REFLECTIVITY
#define CLEARCOAT
#define TRANSMISSION
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef TRANSMISSION
uniform float transmission;
#endif
#ifdef REFLECTIVITY
uniform float reflectivity;
#endif
#ifdef CLEARCOAT
uniform float clearcoat;
uniform float clearcoatRoughness;
#endif
#ifdef USE_SHEEN
uniform vec3 sheen;
#endif
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
#ifdef USE_TANGENT
varying vec3 vTangent;
varying vec3 vBitangent;
#endif
#endif
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <color_pars_fragment>
#include <common>
#include <dithering_pars_fragment>
#include <emissivemap_pars_fragment>
#include <lightmap_pars_fragment>
#include <map_pars_fragment>
#include <packing>
#include <uv2_pars_fragment>
#include <uv_pars_fragment>
// #include <transmissionmap_pars_fragment>
#include <bsdfs>
#include <bumpmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <clipping_planes_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <lights_physical_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <shadowmap_pars_fragment>
// include\uB97C \uD1B5\uD574 \uAC00\uC838\uC628 \uAC12\uC740 \uB300\uBD80\uBD84 \uD658\uACBD, \uBE5B \uB4F1\uC744 \uACC4\uC0B0\uD558\uAE30 \uC704\uD574\uC11C \uAE30\uBCF8 fragment
// shader\uC758 \uAC12\uB4E4\uC744 \uBC1B\uC544\uC654\uC2B5\uB2C8\uB2E4. \uC77C\uB2E8\uC740 \uBB34\uC2DC\uD558\uC154\uB3C4 \uB429\uB2C8\uB2E4.
varying vec3 vNormal;
varying float displacement;
varying vec3 vPos;
varying float vDistort;
uniform float uC1r;
uniform float uC1g;
uniform float uC1b;
uniform float uC2r;
uniform float uC2g;
uniform float uC2b;
uniform float uC3r;
uniform float uC3g;
uniform float uC3b;
varying vec3 color1;
varying vec3 color2;
varying vec3 color3;
varying float distanceToCenter;


// for npm package, need to add this manually
// 'linearToRelativeLuminance' : function already has a body
float linearToRelativeLuminance2( const in vec3 color ) {
    vec3 weights = vec3( 0.2126, 0.7152, 0.0722 );
    return dot( weights, color.rgb );
}

void main() {
  //-------- basic gradient ------------
  vec3 color1 = vec3(uC1r, uC1g, uC1b);
  vec3 color2 = vec3(uC2r, uC2g, uC2b);
  vec3 color3 = vec3(uC3r, uC3g, uC3b);
  float clearcoat = 1.0;
  float clearcoatRoughness = 0.5;
#include <clipping_planes_fragment>

  float distanceToCenter = distance(vPos, vec3(0, 0, 0));
  // distanceToCenter\uB85C \uC911\uC2EC\uC810\uACFC\uC758 \uAC70\uB9AC\uB97C \uAD6C\uD568.

  vec4 diffuseColor =
      vec4(mix(color3, mix(color2, color1, smoothstep(-1.0, 1.0, vPos.y)),
               distanceToCenter),
           1);

  //-------- materiality ------------
  ReflectedLight reflectedLight =
      ReflectedLight(vec3(0.0), vec3(0.0), vec3(0.0), vec3(0.0));
  vec3 totalEmissiveRadiance = emissive;
#ifdef TRANSMISSION
  float totalTransmission = transmission;
#endif
#include <logdepthbuf_fragment>
#include <map_fragment>
#include <color_fragment>
#include <alphamap_fragment>
#include <alphatest_fragment>
#include <roughnessmap_fragment>
#include <metalnessmap_fragment>
#include <normal_fragment_begin>
#include <normal_fragment_maps>
#include <clearcoat_normal_fragment_begin>
#include <clearcoat_normal_fragment_maps>
#include <emissivemap_fragment>
// #include <transmissionmap_fragment>
#include <lights_physical_fragment>
#include <lights_fragment_begin>
#include <lights_fragment_maps>
#include <lights_fragment_end>
#include <aomap_fragment>
  vec3 outgoingLight =
      reflectedLight.directDiffuse + reflectedLight.indirectDiffuse +
      reflectedLight.directSpecular + reflectedLight.indirectSpecular;
//\uC704\uC5D0\uC11C \uC815\uC758\uD55C diffuseColor\uC5D0 \uD658\uACBD\uC774\uB098 \uBC18\uC0AC\uAC12\uB4E4\uC744 \uBC18\uC601\uD55C \uAC12.
#ifdef TRANSMISSION
  diffuseColor.a *=
      mix(saturate(1. - totalTransmission +
                   linearToRelativeLuminance2(reflectedLight.directSpecular +
                                             reflectedLight.indirectSpecular)),
          1.0, metalness);
#endif
  gl_FragColor = vec4(outgoingLight, diffuseColor.a);
  // gl_FragColor\uAC00 fragment shader\uB97C \uD1B5\uD574 \uB098\uD0C0\uB098\uB294 \uCD5C\uC885\uAC12\uC73C\uB85C, diffuseColor\uC5D0\uC11C
  // \uC815\uC758\uD55C \uADF8\uB77C\uB514\uC5B8\uD2B8 \uC0C9\uC0C1 \uC704\uC5D0 \uBC18\uC0AC\uB098 \uBE5B\uC744 \uACC4\uC0B0\uD55C \uAC12\uC744 \uCD5C\uC885\uAC12\uC73C\uB85C \uC815\uC758.
  // gl_FragColor = vec4(mix(mix(color1, color3, smoothstep(-3.0, 3.0,vPos.x)),
  // color2, vNormal.z), 1.0); \uC704\uCC98\uB7FC \uCD5C\uC885\uAC12\uC744 \uADF8\uB77C\uB514\uC5B8\uD2B8 \uAC12 \uC790\uCCB4\uB97C \uB123\uC73C\uBA74 \uD658\uACBD
  // \uC601\uD5A5\uC5C6\uB294 \uADF8\uB77C\uB514\uC5B8\uD2B8\uB9CC \uD45C\uD604\uB428.

#include <tonemapping_fragment>
#include <encodings_fragment>
#include <fog_fragment>
#include <premultiplied_alpha_fragment>
#include <dithering_fragment>
}
`;
      function Q({ type: e }) {
        return (0, V.jsxs)(V.Fragment, {
          children: [
            "plane" === e &&
              (0, V.jsx)("planeGeometry", { args: [10, 10, 1, 192] }),
            "sphere" === e &&
              (0, V.jsx)("icosahedronGeometry", { args: [1, 64] }),
            "waterPlane" === e &&
              (0, V.jsx)("planeGeometry", { args: [10, 10, 192, 192] }),
          ],
        });
      }
      function $(e) {
        if (e.startsWith("#")) {
          let t;
          return (t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e))
            ? {
                r: parseInt(t[1], 16),
                g: parseInt(t[2], 16),
                b: parseInt(t[3], 16),
              }
            : null;
        }
        if (e.startsWith("rgb")) {
          let t;
          return (t = e.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/))
            ? { r: parseInt(t[1]), g: parseInt(t[2]), b: parseInt(t[3]) }
            : null;
        }
        throw Error("Invalid color format");
      }
      function W(e = 0) {
        return e / 255;
      }
      var J = i(2344),
        ee = ({
          animate: e,
          uniforms: t,
          vertexShader: i,
          fragmentShader: n,
          onInit: o,
        }) => {
          let s = (0, H.useMemo)(() => {
            let e = Object.entries(t),
              s = t.colors,
              a = $(s[0]),
              l = $(s[1]),
              c = $(s[2]),
              u = {
                uC1r: { value: W(null == a ? void 0 : a.r) },
                uC1g: { value: W(null == a ? void 0 : a.g) },
                uC1b: { value: W(null == a ? void 0 : a.b) },
                uC2r: { value: W(null == l ? void 0 : l.r) },
                uC2g: { value: W(null == l ? void 0 : l.g) },
                uC2b: { value: W(null == l ? void 0 : l.b) },
                uC3r: { value: W(null == c ? void 0 : c.r) },
                uC3g: { value: W(null == c ? void 0 : c.g) },
                uC3b: { value: W(null == c ? void 0 : c.b) },
              },
              h = e.reduce((e, [t, i]) => {
                let n = r.LlO.clone({ [t]: { value: i } });
                return (0, J.a)((0, J.a)({}, e), n);
              }, {}),
              d = new r.uSd({
                userData: h,
                metalness: 0.2,
                side: r.$EB,
                onBeforeCompile: (e) => {
                  (e.uniforms = (0, J.a)(
                    (0, J.a)((0, J.a)({}, e.uniforms), h),
                    u
                  )),
                    (e.vertexShader = i),
                    (e.fragmentShader = n);
                },
              });
            return (
              e.forEach(([e]) =>
                Object.defineProperty(d, e, {
                  get: () => d.uniforms[e].value,
                  set: (t) => (d.uniforms[e].value = t),
                })
              ),
              o && o(d),
              d
            );
          }, [t, i, n, o]);
          return (
            (0, H.useEffect)(
              () => () => {
                s.dispose();
              },
              [s]
            ),
            (0, Y.C)(({ clock: t }) => {
              "on" === e &&
                s.userData.uTime &&
                (s.userData.uTime.value = t.getElapsedTime());
            }),
            (0, V.jsx)("primitive", { attach: "material", object: s })
          );
        };
      function et(e) {
        return (e / 180) * Math.PI;
      }
      function ei({
        animate: e,
        positionX: t,
        positionY: i,
        positionZ: r,
        rotationX: n,
        rotationY: o,
        rotationZ: s,
        type: a,
        color1: l,
        color2: c,
        color3: u,
        uTime: h,
        uSpeed: d,
        uDensity: f,
        uStrength: p,
        uFrequency: m,
        uAmplitude: _,
      }) {
        return (0, V.jsxs)("mesh", {
          name: "shadergradient-mesh",
          position: [t, i, r],
          rotation: [n, o, s].map((e) => et(e)),
          children: [
            (0, V.jsx)(Q, { type: a }),
            (0, V.jsx)(ee, {
              animate: e,
              uniforms: {
                colors: [l, c, u],
                uTime: h,
                uSpeed: d,
                uLoadingTime: 1,
                uNoiseDensity: f,
                uNoiseStrength: p,
                uFrequency: m,
                uAmplitude: _,
                uIntensity: 0.5,
              },
              vertexShader: "sphere" === a ? X : q,
              fragmentShader: "sphere" === a ? K : G,
              onInit: (e) => {
                console.log("material (onInit)", e);
              },
            }),
          ],
        });
      }
      var er = class extends r.BRH {
        constructor(e) {
          super(e), (this.type = r.ix0);
        }
        parse(e) {
          let t = function (e, t) {
              switch (e) {
                case 1:
                  throw Error("THREE.RGBELoader: Read Error: " + (t || ""));
                case 2:
                  throw Error("THREE.RGBELoader: Write Error: " + (t || ""));
                case 3:
                  throw Error(
                    "THREE.RGBELoader: Bad File Format: " + (t || "")
                  );
                default:
                  throw Error("THREE.RGBELoader: Memory Error: " + (t || ""));
              }
            },
            i = `
`,
            n = function (e, t, r) {
              t = t || 1024;
              let n = e.pos,
                o = -1,
                s = 0,
                a = "",
                l = String.fromCharCode.apply(
                  null,
                  new Uint16Array(e.subarray(n, n + 128))
                );
              for (; 0 > (o = l.indexOf(i)) && s < t && n < e.byteLength; )
                (a += l),
                  (s += l.length),
                  (n += 128),
                  (l += String.fromCharCode.apply(
                    null,
                    new Uint16Array(e.subarray(n, n + 128))
                  ));
              return (
                -1 < o && (!1 !== r && (e.pos += s + o + 1), a + l.slice(0, o))
              );
            },
            o = new Uint8Array(e);
          o.pos = 0;
          let s = (function (e) {
              let i = /^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,
                r = /^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,
                o = /^\s*FORMAT=(\S+)\s*$/,
                s = /^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,
                a = {
                  valid: 0,
                  string: "",
                  comments: "",
                  programtype: "RGBE",
                  format: "",
                  gamma: 1,
                  exposure: 1,
                  width: 0,
                  height: 0,
                },
                l,
                c;
              for (
                (!(e.pos >= e.byteLength) && (l = n(e))) ||
                  t(1, "no header found"),
                  (c = l.match(/^#\?(\S+)/)) || t(3, "bad initial token"),
                  a.valid |= 1,
                  a.programtype = c[1],
                  a.string +=
                    l +
                    `
`;
                !1 !== (l = n(e));

              ) {
                if (
                  ((a.string +=
                    l +
                    `
`),
                  "#" === l.charAt(0))
                ) {
                  a.comments +=
                    l +
                    `
`;
                  continue;
                }
                if (
                  ((c = l.match(i)) && (a.gamma = parseFloat(c[1])),
                  (c = l.match(r)) && (a.exposure = parseFloat(c[1])),
                  (c = l.match(o)) && ((a.valid |= 2), (a.format = c[1])),
                  (c = l.match(s)) &&
                    ((a.valid |= 4),
                    (a.height = parseInt(c[1], 10)),
                    (a.width = parseInt(c[2], 10))),
                  2 & a.valid && 4 & a.valid)
                )
                  break;
              }
              return (
                2 & a.valid || t(3, "missing format specifier"),
                4 & a.valid || t(3, "missing image size specifier"),
                a
              );
            })(o),
            a = s.width,
            l = s.height,
            c = (function (e, i, r) {
              if (i < 8 || i > 32767 || 2 !== e[0] || 2 !== e[1] || 128 & e[2])
                return new Uint8Array(e);
              i !== ((e[2] << 8) | e[3]) && t(3, "wrong scanline width");
              let n = new Uint8Array(4 * i * r);
              n.length || t(4, "unable to allocate buffer space");
              let o = 0,
                s = 0,
                a = 4 * i,
                l = new Uint8Array(4),
                c = new Uint8Array(a),
                u = r;
              for (; u > 0 && s < e.byteLength; ) {
                s + 4 > e.byteLength && t(1),
                  (l[0] = e[s++]),
                  (l[1] = e[s++]),
                  (l[2] = e[s++]),
                  (l[3] = e[s++]),
                  (2 != l[0] || 2 != l[1] || ((l[2] << 8) | l[3]) != i) &&
                    t(3, "bad rgbe scanline format");
                let r = 0,
                  h;
                for (; r < a && s < e.byteLength; ) {
                  let i = (h = e[s++]) > 128;
                  if (
                    (i && (h -= 128),
                    (0 === h || r + h > a) && t(3, "bad scanline data"),
                    i)
                  ) {
                    let t = e[s++];
                    for (let e = 0; e < h; e++) c[r++] = t;
                  } else c.set(e.subarray(s, s + h), r), (r += h), (s += h);
                }
                for (let e = 0; e < i; e++) {
                  let t = 0;
                  (n[o] = c[e + t]),
                    (t += i),
                    (n[o + 1] = c[e + t]),
                    (t += i),
                    (n[o + 2] = c[e + t]),
                    (t += i),
                    (n[o + 3] = c[e + t]),
                    (o += 4);
                }
                u--;
              }
              return n;
            })(o.subarray(o.pos), a, l),
            u,
            h,
            d;
          switch (this.type) {
            case r.RQf:
              let f = new Float32Array(4 * (d = c.length / 4));
              for (let e = 0; e < d; e++)
                !(function (e, t, i, r) {
                  let n = Math.pow(2, e[t + 3] - 128) / 255;
                  (i[r + 0] = e[t + 0] * n),
                    (i[r + 1] = e[t + 1] * n),
                    (i[r + 2] = e[t + 2] * n),
                    (i[r + 3] = 1);
                })(c, 4 * e, f, 4 * e);
              (u = f), (h = r.RQf);
              break;
            case r.ix0:
              let p = new Uint16Array(4 * (d = c.length / 4));
              for (let e = 0; e < d; e++)
                !(function (e, t, i, n) {
                  let o = Math.pow(2, e[t + 3] - 128) / 255;
                  (i[n + 0] = r.GxU.toHalfFloat(Math.min(e[t + 0] * o, 65504))),
                    (i[n + 1] = r.GxU.toHalfFloat(
                      Math.min(e[t + 1] * o, 65504)
                    )),
                    (i[n + 2] = r.GxU.toHalfFloat(
                      Math.min(e[t + 2] * o, 65504)
                    )),
                    (i[n + 3] = r.GxU.toHalfFloat(1));
                })(c, 4 * e, p, 4 * e);
              (u = p), (h = r.ix0);
              break;
            default:
              throw Error("THREE.RGBELoader: Unsupported type: " + this.type);
          }
          return {
            width: a,
            height: l,
            data: u,
            header: s.string,
            gamma: s.gamma,
            exposure: s.exposure,
            type: h,
          };
        }
        setDataType(e) {
          return (this.type = e), this;
        }
        load(e, t, i, n) {
          return super.load(
            e,
            function (e, i) {
              switch (e.type) {
                case r.RQf:
                case r.ix0:
                  "colorSpace" in e
                    ? (e.colorSpace = "srgb-linear")
                    : (e.encoding = 3e3),
                    (e.minFilter = r.k6q),
                    (e.magFilter = r.k6q),
                    (e.generateMipmaps = !1),
                    (e.flipY = !0);
              }
              t && t(e, i);
            },
            i,
            n
          );
        }
      };
      function en(e, { path: t }) {
        return (0, Y.F)(er, e, (e) => e.setPath(t));
      }
      var eo = i(1892),
        es = (e) => e.current && e.current.isScene,
        ea = (e) => (es(e) ? e.current : e);
      function el({ background: e = !1, envPreset: t }) {
        let { envBasePath: i } = (0, eo.a)(),
          n = {
            city: en("city.hdr", { path: i }),
            dawn: en("dawn.hdr", { path: i }),
            lobby: en("lobby.hdr", { path: i }),
          }[t],
          o = (0, Y.A)((e) => e.scene);
        return (
          H.useLayoutEffect(() => {
            if (n) {
              let t = ea(o),
                i = (t.background, t.environment);
              return (
                "only" !== e && (t.environment = n),
                e && (t.background = n),
                () => {
                  "only" !== e && (t.environment = i),
                    e && (t.background = "black");
                }
              );
            }
          }, [o, n, e]),
          (n.mapping = r.wfO),
          null
        );
      }
      function ec({ lightType: e, brightness: t, envPreset: i }) {
        return (0, V.jsxs)(V.Fragment, {
          children: [
            "3d" === e &&
              (0, V.jsx)("ambientLight", { intensity: (t || 1) * Math.PI }),
            "env" === e &&
              (0, V.jsx)(H.Suspense, {
                fallback: (0, V.jsx)(eu, {}),
                children: (0, V.jsx)(el, {
                  envPreset: i,
                  background: !1,
                  loadingCallback: () => {},
                }),
              }),
          ],
        });
      }
      function eu() {
        return (0, V.jsx)("ambientLight", { intensity: 0.4 });
      }
      var eh = i(491),
        ed = i(7431),
        ef = { LEFT: 1, RIGHT: 2, MIDDLE: 4 },
        ep = Object.freeze({
          NONE: 0,
          ROTATE: 1,
          TRUCK: 2,
          OFFSET: 4,
          DOLLY: 8,
          ZOOM: 16,
          TOUCH_ROTATE: 32,
          TOUCH_TRUCK: 64,
          TOUCH_OFFSET: 128,
          TOUCH_DOLLY: 256,
          TOUCH_ZOOM: 512,
          TOUCH_DOLLY_TRUCK: 1024,
          TOUCH_DOLLY_OFFSET: 2048,
          TOUCH_DOLLY_ROTATE: 4096,
          TOUCH_ZOOM_TRUCK: 8192,
          TOUCH_ZOOM_OFFSET: 16384,
          TOUCH_ZOOM_ROTATE: 32768,
        }),
        em = { NONE: 0, IN: 1, OUT: -1 };
      function e_(e) {
        return e.isPerspectiveCamera;
      }
      function eg(e) {
        return e.isOrthographicCamera;
      }
      var ev = 2 * Math.PI,
        ey = Math.PI / 2,
        eC = Math.PI / 180;
      function eb(e, t, i) {
        return Math.max(t, Math.min(i, e));
      }
      function ex(e, t = 1e-5) {
        return Math.abs(e) < t;
      }
      function eE(e, t, i = 1e-5) {
        return ex(e - t, i);
      }
      function eT(e, t) {
        return Math.round(e / t) * t;
      }
      function eO(e) {
        return isFinite(e) ? e : e < 0 ? -Number.MAX_VALUE : Number.MAX_VALUE;
      }
      function ew(e) {
        return Math.abs(e) < Number.MAX_VALUE ? e : (1 / 0) * e;
      }
      function eA(e, t, i, r, n = 1 / 0, o) {
        let s = 2 / (r = Math.max(1e-4, r)),
          a = s * o,
          l = 1 / (1 + a + 0.48 * a * a + 0.235 * a * a * a),
          c = e - t,
          u = t,
          h = n * r;
        t = e - (c = eb(c, -h, h));
        let d = (i.value + s * c) * o;
        i.value = (i.value - s * d) * l;
        let f = t + (c + d) * l;
        return u - e > 0 == f > u && (i.value = ((f = u) - u) / o), f;
      }
      function eD(e, t, i, r, n = 1 / 0, o, s) {
        let a = 2 / (r = Math.max(1e-4, r)),
          l = a * o,
          c = 1 / (1 + l + 0.48 * l * l + 0.235 * l * l * l),
          u = t.x,
          h = t.y,
          d = t.z,
          f = e.x - u,
          p = e.y - h,
          m = e.z - d,
          _ = u,
          g = h,
          v = d,
          y = n * r,
          C = f * f + p * p + m * m;
        if (C > y * y) {
          let e = Math.sqrt(C);
          (f = (f / e) * y), (p = (p / e) * y), (m = (m / e) * y);
        }
        (u = e.x - f), (h = e.y - p), (d = e.z - m);
        let b = (i.x + a * f) * o,
          x = (i.y + a * p) * o,
          E = (i.z + a * m) * o;
        (i.x = (i.x - a * b) * c),
          (i.y = (i.y - a * x) * c),
          (i.z = (i.z - a * E) * c),
          (s.x = u + (f + b) * c),
          (s.y = h + (p + x) * c),
          (s.z = d + (m + E) * c);
        let T = _ - e.x,
          O = g - e.y,
          w = v - e.z;
        return (
          T * (s.x - _) + O * (s.y - g) + w * (s.z - v) > 0 &&
            ((s.x = _),
            (s.y = g),
            (s.z = v),
            (i.x = (s.x - _) / o),
            (i.y = (s.y - g) / o),
            (i.z = (s.z - v) / o)),
          s
        );
      }
      function eS(e, t) {
        t.set(0, 0),
          e.forEach((e) => {
            (t.x += e.clientX), (t.y += e.clientY);
          }),
          (t.x /= e.length),
          (t.y /= e.length);
      }
      function eP(e, t) {
        return (
          !!eg(e) &&
          (console.warn(`${t} is not supported in OrthographicCamera`), !0)
        );
      }
      var ez,
        eL,
        eB,
        eR,
        eU,
        eF,
        eM,
        ej,
        eI,
        ek,
        eN,
        eH,
        eY,
        eV,
        eZ,
        eq,
        eG,
        eX,
        eK,
        eQ,
        e$,
        eW,
        eJ,
        e0,
        e1 = class {
          constructor() {
            this._listeners = {};
          }
          addEventListener(e, t) {
            let i = this._listeners;
            void 0 === i[e] && (i[e] = []),
              -1 === i[e].indexOf(t) && i[e].push(t);
          }
          hasEventListener(e, t) {
            let i = this._listeners;
            return void 0 !== i[e] && -1 !== i[e].indexOf(t);
          }
          removeEventListener(e, t) {
            let i = this._listeners[e];
            if (void 0 !== i) {
              let e = i.indexOf(t);
              -1 !== e && i.splice(e, 1);
            }
          }
          removeAllEventListeners(e) {
            if (!e) {
              this._listeners = {};
              return;
            }
            Array.isArray(this._listeners[e]) &&
              (this._listeners[e].length = 0);
          }
          dispatchEvent(e) {
            let t = this._listeners[e.type];
            if (void 0 !== t) {
              e.target = this;
              let i = t.slice(0);
              for (let t = 0, r = i.length; t < r; t++) i[t].call(this, e);
            }
          }
        },
        e4 = 1 / 8,
        e3 = /Mac/.test(
          null == (ez = null == globalThis ? void 0 : globalThis.navigator)
            ? void 0
            : ez.platform
        ),
        e2 = class e extends e1 {
          static install(e) {
            (eB = Object.freeze(new (eL = e.THREE).Vector3(0, 0, 0))),
              (eR = Object.freeze(new eL.Vector3(0, 1, 0))),
              (eU = Object.freeze(new eL.Vector3(0, 0, 1))),
              (eF = new eL.Vector2()),
              (eM = new eL.Vector3()),
              (ej = new eL.Vector3()),
              (eI = new eL.Vector3()),
              (ek = new eL.Vector3()),
              (eN = new eL.Vector3()),
              (eH = new eL.Vector3()),
              (eY = new eL.Vector3()),
              (eV = new eL.Vector3()),
              (eZ = new eL.Vector3()),
              (eq = new eL.Spherical()),
              (eG = new eL.Spherical()),
              (eX = new eL.Box3()),
              (eK = new eL.Box3()),
              (eQ = new eL.Sphere()),
              (e$ = new eL.Quaternion()),
              (eW = new eL.Quaternion()),
              (eJ = new eL.Matrix4()),
              (e0 = new eL.Raycaster());
          }
          static get ACTION() {
            return ep;
          }
          constructor(t, i) {
            super(),
              (this.minPolarAngle = 0),
              (this.maxPolarAngle = Math.PI),
              (this.minAzimuthAngle = -1 / 0),
              (this.maxAzimuthAngle = 1 / 0),
              (this.minDistance = Number.EPSILON),
              (this.maxDistance = 1 / 0),
              (this.infinityDolly = !1),
              (this.minZoom = 0.01),
              (this.maxZoom = 1 / 0),
              (this.smoothTime = 0.25),
              (this.draggingSmoothTime = 0.125),
              (this.maxSpeed = 1 / 0),
              (this.azimuthRotateSpeed = 1),
              (this.polarRotateSpeed = 1),
              (this.dollySpeed = 1),
              (this.dollyDragInverted = !1),
              (this.truckSpeed = 2),
              (this.dollyToCursor = !1),
              (this.dragToOffset = !1),
              (this.verticalDragToForward = !1),
              (this.boundaryFriction = 0),
              (this.restThreshold = 0.01),
              (this.colliderMeshes = []),
              (this.cancel = () => {}),
              (this._enabled = !0),
              (this._state = ep.NONE),
              (this._viewport = null),
              (this._changedDolly = 0),
              (this._changedZoom = 0),
              (this._hasRested = !0),
              (this._boundaryEnclosesCamera = !1),
              (this._needsUpdate = !0),
              (this._updatedLastTime = !1),
              (this._elementRect = new DOMRect()),
              (this._isDragging = !1),
              (this._dragNeedsUpdate = !0),
              (this._activePointers = []),
              (this._lockedPointer = null),
              (this._interactiveArea = new DOMRect(0, 0, 1, 1)),
              (this._isUserControllingRotate = !1),
              (this._isUserControllingDolly = !1),
              (this._isUserControllingTruck = !1),
              (this._isUserControllingOffset = !1),
              (this._isUserControllingZoom = !1),
              (this._lastDollyDirection = em.NONE),
              (this._thetaVelocity = { value: 0 }),
              (this._phiVelocity = { value: 0 }),
              (this._radiusVelocity = { value: 0 }),
              (this._targetVelocity = new eL.Vector3()),
              (this._focalOffsetVelocity = new eL.Vector3()),
              (this._zoomVelocity = { value: 0 }),
              (this._truckInternal = (e, t, i) => {
                let r, n;
                if (e_(this._camera)) {
                  let i = eM.copy(this._camera.position).sub(this._target),
                    o = this._camera.getEffectiveFOV() * eC,
                    s = i.length() * Math.tan(0.5 * o);
                  (r = (this.truckSpeed * e * s) / this._elementRect.height),
                    (n = (this.truckSpeed * t * s) / this._elementRect.height);
                } else {
                  if (!eg(this._camera)) return;
                  let i = this._camera;
                  (r =
                    (e * (i.right - i.left)) /
                    i.zoom /
                    this._elementRect.width),
                    (n =
                      (t * (i.top - i.bottom)) /
                      i.zoom /
                      this._elementRect.height);
                }
                this.verticalDragToForward
                  ? (i
                      ? this.setFocalOffset(
                          this._focalOffsetEnd.x + r,
                          this._focalOffsetEnd.y,
                          this._focalOffsetEnd.z,
                          !0
                        )
                      : this.truck(r, 0, !0),
                    this.forward(-n, !0))
                  : i
                  ? this.setFocalOffset(
                      this._focalOffsetEnd.x + r,
                      this._focalOffsetEnd.y + n,
                      this._focalOffsetEnd.z,
                      !0
                    )
                  : this.truck(r, n, !0);
              }),
              (this._rotateInternal = (e, t) => {
                let i =
                    (ev * this.azimuthRotateSpeed * e) /
                    this._elementRect.height,
                  r =
                    (ev * this.polarRotateSpeed * t) / this._elementRect.height;
                this.rotate(i, r, !0);
              }),
              (this._dollyInternal = (e, t, i) => {
                let r = Math.pow(0.95, -e * this.dollySpeed),
                  n = this._sphericalEnd.radius,
                  o = this._sphericalEnd.radius * r,
                  s = eb(o, this.minDistance, this.maxDistance),
                  a = s - o;
                this.infinityDolly && this.dollyToCursor
                  ? this._dollyToNoClamp(o, !0)
                  : (this.infinityDolly &&
                      !this.dollyToCursor &&
                      this.dollyInFixed(a, !0),
                    this._dollyToNoClamp(s, !0)),
                  this.dollyToCursor &&
                    ((this._changedDolly += (this.infinityDolly ? o : s) - n),
                    this._dollyControlCoord.set(t, i)),
                  (this._lastDollyDirection = Math.sign(-e));
              }),
              (this._zoomInternal = (e, t, i) => {
                let r = Math.pow(0.95, e * this.dollySpeed),
                  n = this._zoom,
                  o = this._zoom * r;
                this.zoomTo(o, !0),
                  this.dollyToCursor &&
                    ((this._changedZoom += o - n),
                    this._dollyControlCoord.set(t, i));
              }),
              void 0 === eL &&
                console.error(
                  "camera-controls: `THREE` is undefined. You must first run `CameraControls.install( { THREE: THREE } )`. Check the docs for further information."
                ),
              (this._camera = t),
              (this._yAxisUpSpace = new eL.Quaternion().setFromUnitVectors(
                this._camera.up,
                eR
              )),
              (this._yAxisUpSpaceInverse = this._yAxisUpSpace.clone().invert()),
              (this._state = ep.NONE),
              (this._target = new eL.Vector3()),
              (this._targetEnd = this._target.clone()),
              (this._focalOffset = new eL.Vector3()),
              (this._focalOffsetEnd = this._focalOffset.clone()),
              (this._spherical = new eL.Spherical().setFromVector3(
                eM
                  .copy(this._camera.position)
                  .applyQuaternion(this._yAxisUpSpace)
              )),
              (this._sphericalEnd = this._spherical.clone()),
              (this._lastDistance = this._spherical.radius),
              (this._zoom = this._camera.zoom),
              (this._zoomEnd = this._zoom),
              (this._lastZoom = this._zoom),
              (this._nearPlaneCorners = [
                new eL.Vector3(),
                new eL.Vector3(),
                new eL.Vector3(),
                new eL.Vector3(),
              ]),
              this._updateNearPlaneCorners(),
              (this._boundary = new eL.Box3(
                new eL.Vector3(-1 / 0, -1 / 0, -1 / 0),
                new eL.Vector3(1 / 0, 1 / 0, 1 / 0)
              )),
              (this._cameraUp0 = this._camera.up.clone()),
              (this._target0 = this._target.clone()),
              (this._position0 = this._camera.position.clone()),
              (this._zoom0 = this._zoom),
              (this._focalOffset0 = this._focalOffset.clone()),
              (this._dollyControlCoord = new eL.Vector2()),
              (this.mouseButtons = {
                left: ep.ROTATE,
                middle: ep.DOLLY,
                right: ep.TRUCK,
                wheel: e_(this._camera)
                  ? ep.DOLLY
                  : eg(this._camera)
                  ? ep.ZOOM
                  : ep.NONE,
              }),
              (this.touches = {
                one: ep.TOUCH_ROTATE,
                two: e_(this._camera)
                  ? ep.TOUCH_DOLLY_TRUCK
                  : eg(this._camera)
                  ? ep.TOUCH_ZOOM_TRUCK
                  : ep.NONE,
                three: ep.TOUCH_TRUCK,
              });
            let r = new eL.Vector2(),
              n = new eL.Vector2(),
              o = new eL.Vector2(),
              s = (e) => {
                if (!this._enabled || !this._domElement) return;
                if (
                  0 !== this._interactiveArea.left ||
                  0 !== this._interactiveArea.top ||
                  1 !== this._interactiveArea.width ||
                  1 !== this._interactiveArea.height
                ) {
                  let t = this._domElement.getBoundingClientRect(),
                    i = e.clientX / t.width,
                    r = e.clientY / t.height;
                  if (
                    i < this._interactiveArea.left ||
                    i > this._interactiveArea.right ||
                    r < this._interactiveArea.top ||
                    r > this._interactiveArea.bottom
                  )
                    return;
                }
                let t =
                  "mouse" !== e.pointerType
                    ? null
                    : (e.buttons & ef.LEFT) === ef.LEFT
                    ? ef.LEFT
                    : (e.buttons & ef.MIDDLE) === ef.MIDDLE
                    ? ef.MIDDLE
                    : (e.buttons & ef.RIGHT) === ef.RIGHT
                    ? ef.RIGHT
                    : null;
                if (null !== t) {
                  let e = this._findPointerByMouseButton(t);
                  e && this._disposePointer(e);
                }
                if ((e.buttons & ef.LEFT) === ef.LEFT && this._lockedPointer)
                  return;
                let i = {
                  pointerId: e.pointerId,
                  clientX: e.clientX,
                  clientY: e.clientY,
                  deltaX: 0,
                  deltaY: 0,
                  mouseButton: t,
                };
                this._activePointers.push(i),
                  this._domElement.ownerDocument.removeEventListener(
                    "pointermove",
                    a,
                    { passive: !1 }
                  ),
                  this._domElement.ownerDocument.removeEventListener(
                    "pointerup",
                    l
                  ),
                  this._domElement.ownerDocument.addEventListener(
                    "pointermove",
                    a,
                    { passive: !1 }
                  ),
                  this._domElement.ownerDocument.addEventListener(
                    "pointerup",
                    l
                  ),
                  (this._isDragging = !0),
                  d(e);
              },
              a = (e) => {
                e.cancelable && e.preventDefault();
                let t = e.pointerId,
                  i = this._lockedPointer || this._findPointerById(t);
                if (i) {
                  if (
                    ((i.clientX = e.clientX),
                    (i.clientY = e.clientY),
                    (i.deltaX = e.movementX),
                    (i.deltaY = e.movementY),
                    (this._state = 0),
                    "touch" === e.pointerType)
                  )
                    switch (this._activePointers.length) {
                      case 1:
                        this._state = this.touches.one;
                        break;
                      case 2:
                        this._state = this.touches.two;
                        break;
                      case 3:
                        this._state = this.touches.three;
                    }
                  else
                    ((!this._isDragging && this._lockedPointer) ||
                      (this._isDragging &&
                        (e.buttons & ef.LEFT) === ef.LEFT)) &&
                      (this._state = this._state | this.mouseButtons.left),
                      this._isDragging &&
                        (e.buttons & ef.MIDDLE) === ef.MIDDLE &&
                        (this._state = this._state | this.mouseButtons.middle),
                      this._isDragging &&
                        (e.buttons & ef.RIGHT) === ef.RIGHT &&
                        (this._state = this._state | this.mouseButtons.right);
                  f();
                }
              },
              l = (e) => {
                let t = this._findPointerById(e.pointerId);
                if (!(t && t === this._lockedPointer)) {
                  if ((t && this._disposePointer(t), "touch" === e.pointerType))
                    switch (this._activePointers.length) {
                      case 0:
                        this._state = ep.NONE;
                        break;
                      case 1:
                        this._state = this.touches.one;
                        break;
                      case 2:
                        this._state = this.touches.two;
                        break;
                      case 3:
                        this._state = this.touches.three;
                    }
                  else this._state = ep.NONE;
                  p();
                }
              },
              c = -1,
              u = (e) => {
                if (
                  !this._domElement ||
                  !this._enabled ||
                  this.mouseButtons.wheel === ep.NONE
                )
                  return;
                if (
                  0 !== this._interactiveArea.left ||
                  0 !== this._interactiveArea.top ||
                  1 !== this._interactiveArea.width ||
                  1 !== this._interactiveArea.height
                ) {
                  let t = this._domElement.getBoundingClientRect(),
                    i = e.clientX / t.width,
                    r = e.clientY / t.height;
                  if (
                    i < this._interactiveArea.left ||
                    i > this._interactiveArea.right ||
                    r < this._interactiveArea.top ||
                    r > this._interactiveArea.bottom
                  )
                    return;
                }
                if (
                  (e.preventDefault(),
                  this.dollyToCursor ||
                    this.mouseButtons.wheel === ep.ROTATE ||
                    this.mouseButtons.wheel === ep.TRUCK)
                ) {
                  let e = performance.now();
                  c - e < 1e3 && this._getClientRect(this._elementRect),
                    (c = e);
                }
                let t = e3 ? -1 : -3,
                  i = 1 === e.deltaMode ? e.deltaY / t : e.deltaY / (10 * t),
                  r = this.dollyToCursor
                    ? ((e.clientX - this._elementRect.x) /
                        this._elementRect.width) *
                        2 -
                      1
                    : 0,
                  n = this.dollyToCursor
                    ? -(
                        ((e.clientY - this._elementRect.y) /
                          this._elementRect.height) *
                        2
                      ) + 1
                    : 0;
                switch (this.mouseButtons.wheel) {
                  case ep.ROTATE:
                    this._rotateInternal(e.deltaX, e.deltaY),
                      (this._isUserControllingRotate = !0);
                    break;
                  case ep.TRUCK:
                    this._truckInternal(e.deltaX, e.deltaY, !1),
                      (this._isUserControllingTruck = !0);
                    break;
                  case ep.OFFSET:
                    this._truckInternal(e.deltaX, e.deltaY, !0),
                      (this._isUserControllingOffset = !0);
                    break;
                  case ep.DOLLY:
                    this._dollyInternal(-i, r, n),
                      (this._isUserControllingDolly = !0);
                    break;
                  case ep.ZOOM:
                    this._zoomInternal(-i, r, n),
                      (this._isUserControllingZoom = !0);
                }
                this.dispatchEvent({ type: "control" });
              },
              h = (t) => {
                if (!(!this._domElement || !this._enabled)) {
                  if (this.mouseButtons.right === e.ACTION.NONE) {
                    let e = t instanceof PointerEvent ? t.pointerId : 0,
                      i = this._findPointerById(e);
                    i && this._disposePointer(i),
                      this._domElement.ownerDocument.removeEventListener(
                        "pointermove",
                        a,
                        { passive: !1 }
                      ),
                      this._domElement.ownerDocument.removeEventListener(
                        "pointerup",
                        l
                      );
                    return;
                  }
                  t.preventDefault();
                }
              },
              d = (e) => {
                if (this._enabled) {
                  if (
                    (eS(this._activePointers, eF),
                    this._getClientRect(this._elementRect),
                    r.copy(eF),
                    n.copy(eF),
                    this._activePointers.length >= 2)
                  ) {
                    let e = eF.x - this._activePointers[1].clientX,
                      t = eF.y - this._activePointers[1].clientY,
                      i = Math.sqrt(e * e + t * t);
                    o.set(0, i);
                    let r =
                        (this._activePointers[0].clientX +
                          this._activePointers[1].clientX) *
                        0.5,
                      s =
                        (this._activePointers[0].clientY +
                          this._activePointers[1].clientY) *
                        0.5;
                    n.set(r, s);
                  }
                  if (((this._state = 0), e))
                    if ("pointerType" in e && "touch" === e.pointerType)
                      switch (this._activePointers.length) {
                        case 1:
                          this._state = this.touches.one;
                          break;
                        case 2:
                          this._state = this.touches.two;
                          break;
                        case 3:
                          this._state = this.touches.three;
                      }
                    else
                      this._lockedPointer ||
                        (e.buttons & ef.LEFT) !== ef.LEFT ||
                        (this._state = this._state | this.mouseButtons.left),
                        (e.buttons & ef.MIDDLE) === ef.MIDDLE &&
                          (this._state =
                            this._state | this.mouseButtons.middle),
                        (e.buttons & ef.RIGHT) === ef.RIGHT &&
                          (this._state = this._state | this.mouseButtons.right);
                  else
                    this._lockedPointer &&
                      (this._state = this._state | this.mouseButtons.left);
                  ((this._state & ep.ROTATE) === ep.ROTATE ||
                    (this._state & ep.TOUCH_ROTATE) === ep.TOUCH_ROTATE ||
                    (this._state & ep.TOUCH_DOLLY_ROTATE) ===
                      ep.TOUCH_DOLLY_ROTATE ||
                    (this._state & ep.TOUCH_ZOOM_ROTATE) ===
                      ep.TOUCH_ZOOM_ROTATE) &&
                    ((this._sphericalEnd.theta = this._spherical.theta),
                    (this._sphericalEnd.phi = this._spherical.phi),
                    (this._thetaVelocity.value = 0),
                    (this._phiVelocity.value = 0)),
                    ((this._state & ep.TRUCK) === ep.TRUCK ||
                      (this._state & ep.TOUCH_TRUCK) === ep.TOUCH_TRUCK ||
                      (this._state & ep.TOUCH_DOLLY_TRUCK) ===
                        ep.TOUCH_DOLLY_TRUCK ||
                      (this._state & ep.TOUCH_ZOOM_TRUCK) ===
                        ep.TOUCH_ZOOM_TRUCK) &&
                      (this._targetEnd.copy(this._target),
                      this._targetVelocity.set(0, 0, 0)),
                    ((this._state & ep.DOLLY) === ep.DOLLY ||
                      (this._state & ep.TOUCH_DOLLY) === ep.TOUCH_DOLLY ||
                      (this._state & ep.TOUCH_DOLLY_TRUCK) ===
                        ep.TOUCH_DOLLY_TRUCK ||
                      (this._state & ep.TOUCH_DOLLY_OFFSET) ===
                        ep.TOUCH_DOLLY_OFFSET ||
                      (this._state & ep.TOUCH_DOLLY_ROTATE) ===
                        ep.TOUCH_DOLLY_ROTATE) &&
                      ((this._sphericalEnd.radius = this._spherical.radius),
                      (this._radiusVelocity.value = 0)),
                    ((this._state & ep.ZOOM) === ep.ZOOM ||
                      (this._state & ep.TOUCH_ZOOM) === ep.TOUCH_ZOOM ||
                      (this._state & ep.TOUCH_ZOOM_TRUCK) ===
                        ep.TOUCH_ZOOM_TRUCK ||
                      (this._state & ep.TOUCH_ZOOM_OFFSET) ===
                        ep.TOUCH_ZOOM_OFFSET ||
                      (this._state & ep.TOUCH_ZOOM_ROTATE) ===
                        ep.TOUCH_ZOOM_ROTATE) &&
                      ((this._zoomEnd = this._zoom),
                      (this._zoomVelocity.value = 0)),
                    ((this._state & ep.OFFSET) === ep.OFFSET ||
                      (this._state & ep.TOUCH_OFFSET) === ep.TOUCH_OFFSET ||
                      (this._state & ep.TOUCH_DOLLY_OFFSET) ===
                        ep.TOUCH_DOLLY_OFFSET ||
                      (this._state & ep.TOUCH_ZOOM_OFFSET) ===
                        ep.TOUCH_ZOOM_OFFSET) &&
                      (this._focalOffsetEnd.copy(this._focalOffset),
                      this._focalOffsetVelocity.set(0, 0, 0)),
                    this.dispatchEvent({ type: "controlstart" });
                }
              },
              f = () => {
                if (!this._enabled || !this._dragNeedsUpdate) return;
                (this._dragNeedsUpdate = !1), eS(this._activePointers, eF);
                let e =
                    this._domElement &&
                    this._domElement.ownerDocument.pointerLockElement ===
                      this._domElement
                      ? this._lockedPointer || this._activePointers[0]
                      : null,
                  t = e ? -e.deltaX : n.x - eF.x,
                  i = e ? -e.deltaY : n.y - eF.y;
                if (
                  (n.copy(eF),
                  ((this._state & ep.ROTATE) === ep.ROTATE ||
                    (this._state & ep.TOUCH_ROTATE) === ep.TOUCH_ROTATE ||
                    (this._state & ep.TOUCH_DOLLY_ROTATE) ===
                      ep.TOUCH_DOLLY_ROTATE ||
                    (this._state & ep.TOUCH_ZOOM_ROTATE) ===
                      ep.TOUCH_ZOOM_ROTATE) &&
                    (this._rotateInternal(t, i),
                    (this._isUserControllingRotate = !0)),
                  (this._state & ep.DOLLY) === ep.DOLLY ||
                    (this._state & ep.ZOOM) === ep.ZOOM)
                ) {
                  let e = this.dollyToCursor
                      ? ((r.x - this._elementRect.x) /
                          this._elementRect.width) *
                          2 -
                        1
                      : 0,
                    t = this.dollyToCursor
                      ? -(
                          ((r.y - this._elementRect.y) /
                            this._elementRect.height) *
                          2
                        ) + 1
                      : 0,
                    n = this.dollyDragInverted ? -1 : 1;
                  (this._state & ep.DOLLY) === ep.DOLLY
                    ? (this._dollyInternal(n * i * e4, e, t),
                      (this._isUserControllingDolly = !0))
                    : (this._zoomInternal(n * i * e4, e, t),
                      (this._isUserControllingZoom = !0));
                }
                if (
                  (this._state & ep.TOUCH_DOLLY) === ep.TOUCH_DOLLY ||
                  (this._state & ep.TOUCH_ZOOM) === ep.TOUCH_ZOOM ||
                  (this._state & ep.TOUCH_DOLLY_TRUCK) ===
                    ep.TOUCH_DOLLY_TRUCK ||
                  (this._state & ep.TOUCH_ZOOM_TRUCK) === ep.TOUCH_ZOOM_TRUCK ||
                  (this._state & ep.TOUCH_DOLLY_OFFSET) ===
                    ep.TOUCH_DOLLY_OFFSET ||
                  (this._state & ep.TOUCH_ZOOM_OFFSET) ===
                    ep.TOUCH_ZOOM_OFFSET ||
                  (this._state & ep.TOUCH_DOLLY_ROTATE) ===
                    ep.TOUCH_DOLLY_ROTATE ||
                  (this._state & ep.TOUCH_ZOOM_ROTATE) === ep.TOUCH_ZOOM_ROTATE
                ) {
                  let e = eF.x - this._activePointers[1].clientX,
                    t = eF.y - this._activePointers[1].clientY,
                    i = Math.sqrt(e * e + t * t),
                    r = o.y - i;
                  o.set(0, i);
                  let s = this.dollyToCursor
                      ? ((n.x - this._elementRect.x) /
                          this._elementRect.width) *
                          2 -
                        1
                      : 0,
                    a = this.dollyToCursor
                      ? -(
                          ((n.y - this._elementRect.y) /
                            this._elementRect.height) *
                          2
                        ) + 1
                      : 0;
                  (this._state & ep.TOUCH_DOLLY) === ep.TOUCH_DOLLY ||
                  (this._state & ep.TOUCH_DOLLY_ROTATE) ===
                    ep.TOUCH_DOLLY_ROTATE ||
                  (this._state & ep.TOUCH_DOLLY_TRUCK) ===
                    ep.TOUCH_DOLLY_TRUCK ||
                  (this._state & ep.TOUCH_DOLLY_OFFSET) ===
                    ep.TOUCH_DOLLY_OFFSET
                    ? (this._dollyInternal(r * e4, s, a),
                      (this._isUserControllingDolly = !0))
                    : (this._zoomInternal(r * e4, s, a),
                      (this._isUserControllingZoom = !0));
                }
                ((this._state & ep.TRUCK) === ep.TRUCK ||
                  (this._state & ep.TOUCH_TRUCK) === ep.TOUCH_TRUCK ||
                  (this._state & ep.TOUCH_DOLLY_TRUCK) ===
                    ep.TOUCH_DOLLY_TRUCK ||
                  (this._state & ep.TOUCH_ZOOM_TRUCK) ===
                    ep.TOUCH_ZOOM_TRUCK) &&
                  (this._truckInternal(t, i, !1),
                  (this._isUserControllingTruck = !0)),
                  ((this._state & ep.OFFSET) === ep.OFFSET ||
                    (this._state & ep.TOUCH_OFFSET) === ep.TOUCH_OFFSET ||
                    (this._state & ep.TOUCH_DOLLY_OFFSET) ===
                      ep.TOUCH_DOLLY_OFFSET ||
                    (this._state & ep.TOUCH_ZOOM_OFFSET) ===
                      ep.TOUCH_ZOOM_OFFSET) &&
                    (this._truckInternal(t, i, !0),
                    (this._isUserControllingOffset = !0)),
                  this.dispatchEvent({ type: "control" });
              },
              p = () => {
                eS(this._activePointers, eF),
                  n.copy(eF),
                  (this._dragNeedsUpdate = !1),
                  (0 === this._activePointers.length ||
                    (1 === this._activePointers.length &&
                      this._activePointers[0] === this._lockedPointer)) &&
                    (this._isDragging = !1),
                  0 === this._activePointers.length &&
                    this._domElement &&
                    (this._domElement.ownerDocument.removeEventListener(
                      "pointermove",
                      a,
                      { passive: !1 }
                    ),
                    this._domElement.ownerDocument.removeEventListener(
                      "pointerup",
                      l
                    ),
                    this.dispatchEvent({ type: "controlend" }));
              };
            (this.lockPointer = () => {
              this._enabled &&
                this._domElement &&
                (this.cancel(),
                (this._lockedPointer = {
                  pointerId: -1,
                  clientX: 0,
                  clientY: 0,
                  deltaX: 0,
                  deltaY: 0,
                  mouseButton: null,
                }),
                this._activePointers.push(this._lockedPointer),
                this._domElement.ownerDocument.removeEventListener(
                  "pointermove",
                  a,
                  { passive: !1 }
                ),
                this._domElement.ownerDocument.removeEventListener(
                  "pointerup",
                  l
                ),
                this._domElement.requestPointerLock(),
                this._domElement.ownerDocument.addEventListener(
                  "pointerlockchange",
                  m
                ),
                this._domElement.ownerDocument.addEventListener(
                  "pointerlockerror",
                  _
                ),
                this._domElement.ownerDocument.addEventListener(
                  "pointermove",
                  a,
                  { passive: !1 }
                ),
                this._domElement.ownerDocument.addEventListener("pointerup", l),
                d());
            }),
              (this.unlockPointer = () => {
                var e, t, i;
                null !== this._lockedPointer &&
                  (this._disposePointer(this._lockedPointer),
                  (this._lockedPointer = null)),
                  null == (e = this._domElement) ||
                    e.ownerDocument.exitPointerLock(),
                  null == (t = this._domElement) ||
                    t.ownerDocument.removeEventListener("pointerlockchange", m),
                  null == (i = this._domElement) ||
                    i.ownerDocument.removeEventListener("pointerlockerror", _),
                  this.cancel();
              });
            let m = () => {
                (this._domElement &&
                  this._domElement.ownerDocument.pointerLockElement ===
                    this._domElement) ||
                  this.unlockPointer();
              },
              _ = () => {
                this.unlockPointer();
              };
            (this._addAllEventListeners = (e) => {
              (this._domElement = e),
                (this._domElement.style.touchAction = "none"),
                (this._domElement.style.userSelect = "none"),
                (this._domElement.style.webkitUserSelect = "none"),
                this._domElement.addEventListener("pointerdown", s),
                this._domElement.addEventListener("pointercancel", l),
                this._domElement.addEventListener("wheel", u, { passive: !1 }),
                this._domElement.addEventListener("contextmenu", h);
            }),
              (this._removeAllEventListeners = () => {
                this._domElement &&
                  ((this._domElement.style.touchAction = ""),
                  (this._domElement.style.userSelect = ""),
                  (this._domElement.style.webkitUserSelect = ""),
                  this._domElement.removeEventListener("pointerdown", s),
                  this._domElement.removeEventListener("pointercancel", l),
                  this._domElement.removeEventListener("wheel", u, {
                    passive: !1,
                  }),
                  this._domElement.removeEventListener("contextmenu", h),
                  this._domElement.ownerDocument.removeEventListener(
                    "pointermove",
                    a,
                    { passive: !1 }
                  ),
                  this._domElement.ownerDocument.removeEventListener(
                    "pointerup",
                    l
                  ),
                  this._domElement.ownerDocument.removeEventListener(
                    "pointerlockchange",
                    m
                  ),
                  this._domElement.ownerDocument.removeEventListener(
                    "pointerlockerror",
                    _
                  ));
              }),
              (this.cancel = () => {
                this._state !== ep.NONE &&
                  ((this._state = ep.NONE),
                  (this._activePointers.length = 0),
                  p());
              }),
              i && this.connect(i),
              this.update(0);
          }
          get camera() {
            return this._camera;
          }
          set camera(e) {
            (this._camera = e),
              this.updateCameraUp(),
              this._camera.updateProjectionMatrix(),
              this._updateNearPlaneCorners(),
              (this._needsUpdate = !0);
          }
          get enabled() {
            return this._enabled;
          }
          set enabled(e) {
            (this._enabled = e),
              this._domElement &&
                (e
                  ? ((this._domElement.style.touchAction = "none"),
                    (this._domElement.style.userSelect = "none"),
                    (this._domElement.style.webkitUserSelect = "none"))
                  : (this.cancel(),
                    (this._domElement.style.touchAction = ""),
                    (this._domElement.style.userSelect = ""),
                    (this._domElement.style.webkitUserSelect = "")));
          }
          get active() {
            return !this._hasRested;
          }
          get currentAction() {
            return this._state;
          }
          get distance() {
            return this._spherical.radius;
          }
          set distance(e) {
            (this._spherical.radius === e && this._sphericalEnd.radius === e) ||
              ((this._spherical.radius = e),
              (this._sphericalEnd.radius = e),
              (this._needsUpdate = !0));
          }
          get azimuthAngle() {
            return this._spherical.theta;
          }
          set azimuthAngle(e) {
            (this._spherical.theta === e && this._sphericalEnd.theta === e) ||
              ((this._spherical.theta = e),
              (this._sphericalEnd.theta = e),
              (this._needsUpdate = !0));
          }
          get polarAngle() {
            return this._spherical.phi;
          }
          set polarAngle(e) {
            (this._spherical.phi === e && this._sphericalEnd.phi === e) ||
              ((this._spherical.phi = e),
              (this._sphericalEnd.phi = e),
              (this._needsUpdate = !0));
          }
          get boundaryEnclosesCamera() {
            return this._boundaryEnclosesCamera;
          }
          set boundaryEnclosesCamera(e) {
            (this._boundaryEnclosesCamera = e), (this._needsUpdate = !0);
          }
          set interactiveArea(e) {
            (this._interactiveArea.width = eb(e.width, 0, 1)),
              (this._interactiveArea.height = eb(e.height, 0, 1)),
              (this._interactiveArea.x = eb(
                e.x,
                0,
                1 - this._interactiveArea.width
              )),
              (this._interactiveArea.y = eb(
                e.y,
                0,
                1 - this._interactiveArea.height
              ));
          }
          addEventListener(e, t) {
            super.addEventListener(e, t);
          }
          removeEventListener(e, t) {
            super.removeEventListener(e, t);
          }
          rotate(e, t, i = !1) {
            return this.rotateTo(
              this._sphericalEnd.theta + e,
              this._sphericalEnd.phi + t,
              i
            );
          }
          rotateAzimuthTo(e, t = !1) {
            return this.rotateTo(e, this._sphericalEnd.phi, t);
          }
          rotatePolarTo(e, t = !1) {
            return this.rotateTo(this._sphericalEnd.theta, e, t);
          }
          rotateTo(e, t, i = !1) {
            this._isUserControllingRotate = !1;
            let r = eb(e, this.minAzimuthAngle, this.maxAzimuthAngle),
              n = eb(t, this.minPolarAngle, this.maxPolarAngle);
            (this._sphericalEnd.theta = r),
              (this._sphericalEnd.phi = n),
              this._sphericalEnd.makeSafe(),
              (this._needsUpdate = !0),
              i ||
                ((this._spherical.theta = this._sphericalEnd.theta),
                (this._spherical.phi = this._sphericalEnd.phi));
            let o =
              !i ||
              (eE(
                this._spherical.theta,
                this._sphericalEnd.theta,
                this.restThreshold
              ) &&
                eE(
                  this._spherical.phi,
                  this._sphericalEnd.phi,
                  this.restThreshold
                ));
            return this._createOnRestPromise(o);
          }
          dolly(e, t = !1) {
            return this.dollyTo(this._sphericalEnd.radius - e, t);
          }
          dollyTo(e, t = !1) {
            return (
              (this._isUserControllingDolly = !1),
              (this._lastDollyDirection = em.NONE),
              (this._changedDolly = 0),
              this._dollyToNoClamp(eb(e, this.minDistance, this.maxDistance), t)
            );
          }
          _dollyToNoClamp(e, t = !1) {
            let i = this._sphericalEnd.radius;
            if (this.colliderMeshes.length >= 1) {
              let t = this._collisionTest(),
                r = eE(t, this._spherical.radius);
              if (!(i > e) && r) return Promise.resolve();
              this._sphericalEnd.radius = Math.min(e, t);
            } else this._sphericalEnd.radius = e;
            (this._needsUpdate = !0),
              t || (this._spherical.radius = this._sphericalEnd.radius);
            let r =
              !t ||
              eE(
                this._spherical.radius,
                this._sphericalEnd.radius,
                this.restThreshold
              );
            return this._createOnRestPromise(r);
          }
          dollyInFixed(e, t = !1) {
            this._targetEnd.add(this._getCameraDirection(ek).multiplyScalar(e)),
              t || this._target.copy(this._targetEnd);
            let i =
              !t ||
              (eE(this._target.x, this._targetEnd.x, this.restThreshold) &&
                eE(this._target.y, this._targetEnd.y, this.restThreshold) &&
                eE(this._target.z, this._targetEnd.z, this.restThreshold));
            return this._createOnRestPromise(i);
          }
          zoom(e, t = !1) {
            return this.zoomTo(this._zoomEnd + e, t);
          }
          zoomTo(e, t = !1) {
            (this._isUserControllingZoom = !1),
              (this._zoomEnd = eb(e, this.minZoom, this.maxZoom)),
              (this._needsUpdate = !0),
              t || (this._zoom = this._zoomEnd);
            let i = !t || eE(this._zoom, this._zoomEnd, this.restThreshold);
            return (this._changedZoom = 0), this._createOnRestPromise(i);
          }
          pan(e, t, i = !1) {
            return (
              console.warn("`pan` has been renamed to `truck`"),
              this.truck(e, t, i)
            );
          }
          truck(e, t, i = !1) {
            this._camera.updateMatrix(),
              eN.setFromMatrixColumn(this._camera.matrix, 0),
              eH.setFromMatrixColumn(this._camera.matrix, 1),
              eN.multiplyScalar(e),
              eH.multiplyScalar(-t);
            let r = eM.copy(eN).add(eH),
              n = ej.copy(this._targetEnd).add(r);
            return this.moveTo(n.x, n.y, n.z, i);
          }
          forward(e, t = !1) {
            eM.setFromMatrixColumn(this._camera.matrix, 0),
              eM.crossVectors(this._camera.up, eM),
              eM.multiplyScalar(e);
            let i = ej.copy(this._targetEnd).add(eM);
            return this.moveTo(i.x, i.y, i.z, t);
          }
          elevate(e, t = !1) {
            return (
              eM.copy(this._camera.up).multiplyScalar(e),
              this.moveTo(
                this._targetEnd.x + eM.x,
                this._targetEnd.y + eM.y,
                this._targetEnd.z + eM.z,
                t
              )
            );
          }
          moveTo(e, t, i, r = !1) {
            this._isUserControllingTruck = !1;
            let n = eM.set(e, t, i).sub(this._targetEnd);
            this._encloseToBoundary(this._targetEnd, n, this.boundaryFriction),
              (this._needsUpdate = !0),
              r || this._target.copy(this._targetEnd);
            let o =
              !r ||
              (eE(this._target.x, this._targetEnd.x, this.restThreshold) &&
                eE(this._target.y, this._targetEnd.y, this.restThreshold) &&
                eE(this._target.z, this._targetEnd.z, this.restThreshold));
            return this._createOnRestPromise(o);
          }
          lookInDirectionOf(e, t, i, r = !1) {
            let n = eM
              .set(e, t, i)
              .sub(this._targetEnd)
              .normalize()
              .multiplyScalar(-this._sphericalEnd.radius)
              .add(this._targetEnd);
            return this.setPosition(n.x, n.y, n.z, r);
          }
          fitToBox(
            e,
            t,
            {
              cover: i = !1,
              paddingLeft: r = 0,
              paddingRight: n = 0,
              paddingBottom: o = 0,
              paddingTop: s = 0,
            } = {}
          ) {
            let a = [],
              l = e.isBox3 ? eX.copy(e) : eX.setFromObject(e);
            l.isEmpty() &&
              (console.warn(
                "camera-controls: fitTo() cannot be used with an empty box. Aborting"
              ),
              Promise.resolve());
            let c = eT(this._sphericalEnd.theta, ey),
              u = eT(this._sphericalEnd.phi, ey);
            a.push(this.rotateTo(c, u, t));
            let h = eM.setFromSpherical(this._sphericalEnd).normalize(),
              d = e$.setFromUnitVectors(h, eU),
              f = eE(Math.abs(h.y), 1);
            f && d.multiply(eW.setFromAxisAngle(eR, c)),
              d.multiply(this._yAxisUpSpaceInverse);
            let p = eK.makeEmpty();
            ej.copy(l.min).applyQuaternion(d),
              p.expandByPoint(ej),
              ej.copy(l.min).setX(l.max.x).applyQuaternion(d),
              p.expandByPoint(ej),
              ej.copy(l.min).setY(l.max.y).applyQuaternion(d),
              p.expandByPoint(ej),
              ej.copy(l.max).setZ(l.min.z).applyQuaternion(d),
              p.expandByPoint(ej),
              ej.copy(l.min).setZ(l.max.z).applyQuaternion(d),
              p.expandByPoint(ej),
              ej.copy(l.max).setY(l.min.y).applyQuaternion(d),
              p.expandByPoint(ej),
              ej.copy(l.max).setX(l.min.x).applyQuaternion(d),
              p.expandByPoint(ej),
              ej.copy(l.max).applyQuaternion(d),
              p.expandByPoint(ej),
              (p.min.x -= r),
              (p.min.y -= o),
              (p.max.x += n),
              (p.max.y += s),
              d.setFromUnitVectors(eU, h),
              f && d.premultiply(eW.invert()),
              d.premultiply(this._yAxisUpSpace);
            let m = p.getSize(eM),
              _ = p.getCenter(ej).applyQuaternion(d);
            if (e_(this._camera)) {
              let e = this.getDistanceToFitBox(m.x, m.y, m.z, i);
              a.push(this.moveTo(_.x, _.y, _.z, t)),
                a.push(this.dollyTo(e, t)),
                a.push(this.setFocalOffset(0, 0, 0, t));
            } else if (eg(this._camera)) {
              let e = this._camera,
                r = e.right - e.left,
                n = e.top - e.bottom,
                o = i ? Math.max(r / m.x, n / m.y) : Math.min(r / m.x, n / m.y);
              a.push(this.moveTo(_.x, _.y, _.z, t)),
                a.push(this.zoomTo(o, t)),
                a.push(this.setFocalOffset(0, 0, 0, t));
            }
            return Promise.all(a);
          }
          fitToSphere(t, i) {
            let r = [],
              n =
                "isObject3D" in t ? e.createBoundingSphere(t, eQ) : eQ.copy(t);
            if (
              (r.push(this.moveTo(n.center.x, n.center.y, n.center.z, i)),
              e_(this._camera))
            ) {
              let e = this.getDistanceToFitSphere(n.radius);
              r.push(this.dollyTo(e, i));
            } else if (eg(this._camera)) {
              let e = this._camera.right - this._camera.left,
                t = this._camera.top - this._camera.bottom,
                o = 2 * n.radius,
                s = Math.min(e / o, t / o);
              r.push(this.zoomTo(s, i));
            }
            return r.push(this.setFocalOffset(0, 0, 0, i)), Promise.all(r);
          }
          setLookAt(e, t, i, r, n, o, s = !1) {
            (this._isUserControllingRotate = !1),
              (this._isUserControllingDolly = !1),
              (this._isUserControllingTruck = !1),
              (this._lastDollyDirection = em.NONE),
              (this._changedDolly = 0);
            let a = ej.set(r, n, o),
              l = eM.set(e, t, i);
            this._targetEnd.copy(a),
              this._sphericalEnd.setFromVector3(
                l.sub(a).applyQuaternion(this._yAxisUpSpace)
              ),
              this.normalizeRotations(),
              (this._needsUpdate = !0),
              s ||
                (this._target.copy(this._targetEnd),
                this._spherical.copy(this._sphericalEnd));
            let c =
              !s ||
              (eE(this._target.x, this._targetEnd.x, this.restThreshold) &&
                eE(this._target.y, this._targetEnd.y, this.restThreshold) &&
                eE(this._target.z, this._targetEnd.z, this.restThreshold) &&
                eE(
                  this._spherical.theta,
                  this._sphericalEnd.theta,
                  this.restThreshold
                ) &&
                eE(
                  this._spherical.phi,
                  this._sphericalEnd.phi,
                  this.restThreshold
                ) &&
                eE(
                  this._spherical.radius,
                  this._sphericalEnd.radius,
                  this.restThreshold
                ));
            return this._createOnRestPromise(c);
          }
          lerpLookAt(e, t, i, r, n, o, s, a, l, c, u, h, d, f = !1) {
            (this._isUserControllingRotate = !1),
              (this._isUserControllingDolly = !1),
              (this._isUserControllingTruck = !1),
              (this._lastDollyDirection = em.NONE),
              (this._changedDolly = 0);
            let p = eM.set(r, n, o),
              m = ej.set(e, t, i);
            eq.setFromVector3(m.sub(p).applyQuaternion(this._yAxisUpSpace));
            let _ = eI.set(c, u, h),
              g = ej.set(s, a, l);
            eG.setFromVector3(g.sub(_).applyQuaternion(this._yAxisUpSpace)),
              this._targetEnd.copy(p.lerp(_, d));
            let v = eG.theta - eq.theta,
              y = eG.phi - eq.phi,
              C = eG.radius - eq.radius;
            this._sphericalEnd.set(
              eq.radius + C * d,
              eq.phi + y * d,
              eq.theta + v * d
            ),
              this.normalizeRotations(),
              (this._needsUpdate = !0),
              f ||
                (this._target.copy(this._targetEnd),
                this._spherical.copy(this._sphericalEnd));
            let b =
              !f ||
              (eE(this._target.x, this._targetEnd.x, this.restThreshold) &&
                eE(this._target.y, this._targetEnd.y, this.restThreshold) &&
                eE(this._target.z, this._targetEnd.z, this.restThreshold) &&
                eE(
                  this._spherical.theta,
                  this._sphericalEnd.theta,
                  this.restThreshold
                ) &&
                eE(
                  this._spherical.phi,
                  this._sphericalEnd.phi,
                  this.restThreshold
                ) &&
                eE(
                  this._spherical.radius,
                  this._sphericalEnd.radius,
                  this.restThreshold
                ));
            return this._createOnRestPromise(b);
          }
          setPosition(e, t, i, r = !1) {
            return this.setLookAt(
              e,
              t,
              i,
              this._targetEnd.x,
              this._targetEnd.y,
              this._targetEnd.z,
              r
            );
          }
          setTarget(e, t, i, r = !1) {
            let n = this.getPosition(eM),
              o = this.setLookAt(n.x, n.y, n.z, e, t, i, r);
            return (
              (this._sphericalEnd.phi = eb(
                this._sphericalEnd.phi,
                this.minPolarAngle,
                this.maxPolarAngle
              )),
              o
            );
          }
          setFocalOffset(e, t, i, r = !1) {
            (this._isUserControllingOffset = !1),
              this._focalOffsetEnd.set(e, t, i),
              (this._needsUpdate = !0),
              r || this._focalOffset.copy(this._focalOffsetEnd);
            let n =
              !r ||
              (eE(
                this._focalOffset.x,
                this._focalOffsetEnd.x,
                this.restThreshold
              ) &&
                eE(
                  this._focalOffset.y,
                  this._focalOffsetEnd.y,
                  this.restThreshold
                ) &&
                eE(
                  this._focalOffset.z,
                  this._focalOffsetEnd.z,
                  this.restThreshold
                ));
            return this._createOnRestPromise(n);
          }
          setOrbitPoint(e, t, i) {
            this._camera.updateMatrixWorld(),
              eN.setFromMatrixColumn(this._camera.matrixWorldInverse, 0),
              eH.setFromMatrixColumn(this._camera.matrixWorldInverse, 1),
              eY.setFromMatrixColumn(this._camera.matrixWorldInverse, 2);
            let r = eM.set(e, t, i),
              n = r.distanceTo(this._camera.position),
              o = r.sub(this._camera.position);
            eN.multiplyScalar(o.x),
              eH.multiplyScalar(o.y),
              eY.multiplyScalar(o.z),
              eM.copy(eN).add(eH).add(eY),
              (eM.z = eM.z + n),
              this.dollyTo(n, !1),
              this.setFocalOffset(-eM.x, eM.y, -eM.z, !1),
              this.moveTo(e, t, i, !1);
          }
          setBoundary(e) {
            if (!e) {
              this._boundary.min.set(-1 / 0, -1 / 0, -1 / 0),
                this._boundary.max.set(1 / 0, 1 / 0, 1 / 0),
                (this._needsUpdate = !0);
              return;
            }
            this._boundary.copy(e),
              this._boundary.clampPoint(this._targetEnd, this._targetEnd),
              (this._needsUpdate = !0);
          }
          setViewport(e, t, i, r) {
            if (null === e) {
              this._viewport = null;
              return;
            }
            (this._viewport = this._viewport || new eL.Vector4()),
              "number" == typeof e
                ? this._viewport.set(e, t, i, r)
                : this._viewport.copy(e);
          }
          getDistanceToFitBox(e, t, i, r = !1) {
            if (eP(this._camera, "getDistanceToFitBox"))
              return this._spherical.radius;
            let n = e / t,
              o = this._camera.getEffectiveFOV() * eC,
              s = this._camera.aspect;
            return (
              (((r ? n > s : n < s) ? t : e / s) * 0.5) / Math.tan(0.5 * o) +
              0.5 * i
            );
          }
          getDistanceToFitSphere(e) {
            if (eP(this._camera, "getDistanceToFitSphere"))
              return this._spherical.radius;
            let t = this._camera.getEffectiveFOV() * eC,
              i = 2 * Math.atan(Math.tan(0.5 * t) * this._camera.aspect);
            return e / Math.sin(0.5 * (1 < this._camera.aspect ? t : i));
          }
          getTarget(e, t = !0) {
            return (e && e.isVector3 ? e : new eL.Vector3()).copy(
              t ? this._targetEnd : this._target
            );
          }
          getPosition(e, t = !0) {
            return (e && e.isVector3 ? e : new eL.Vector3())
              .setFromSpherical(t ? this._sphericalEnd : this._spherical)
              .applyQuaternion(this._yAxisUpSpaceInverse)
              .add(t ? this._targetEnd : this._target);
          }
          getSpherical(e, t = !0) {
            return (e || new eL.Spherical()).copy(
              t ? this._sphericalEnd : this._spherical
            );
          }
          getFocalOffset(e, t = !0) {
            return (e && e.isVector3 ? e : new eL.Vector3()).copy(
              t ? this._focalOffsetEnd : this._focalOffset
            );
          }
          normalizeRotations() {
            (this._sphericalEnd.theta = this._sphericalEnd.theta % ev),
              this._sphericalEnd.theta < 0 && (this._sphericalEnd.theta += ev),
              (this._spherical.theta +=
                ev *
                Math.round(
                  (this._sphericalEnd.theta - this._spherical.theta) / ev
                ));
          }
          stop() {
            this._focalOffset.copy(this._focalOffsetEnd),
              this._target.copy(this._targetEnd),
              this._spherical.copy(this._sphericalEnd),
              (this._zoom = this._zoomEnd);
          }
          reset(e = !1) {
            if (
              !eE(this._camera.up.x, this._cameraUp0.x) ||
              !eE(this._camera.up.y, this._cameraUp0.y) ||
              !eE(this._camera.up.z, this._cameraUp0.z)
            ) {
              this._camera.up.copy(this._cameraUp0);
              let e = this.getPosition(eM);
              this.updateCameraUp(), this.setPosition(e.x, e.y, e.z);
            }
            return Promise.all([
              this.setLookAt(
                this._position0.x,
                this._position0.y,
                this._position0.z,
                this._target0.x,
                this._target0.y,
                this._target0.z,
                e
              ),
              this.setFocalOffset(
                this._focalOffset0.x,
                this._focalOffset0.y,
                this._focalOffset0.z,
                e
              ),
              this.zoomTo(this._zoom0, e),
            ]);
          }
          saveState() {
            this._cameraUp0.copy(this._camera.up),
              this.getTarget(this._target0),
              this.getPosition(this._position0),
              (this._zoom0 = this._zoom),
              this._focalOffset0.copy(this._focalOffset);
          }
          updateCameraUp() {
            this._yAxisUpSpace.setFromUnitVectors(this._camera.up, eR),
              this._yAxisUpSpaceInverse.copy(this._yAxisUpSpace).invert();
          }
          applyCameraUp() {
            let e = eM
                .subVectors(this._target, this._camera.position)
                .normalize(),
              t = ej.crossVectors(e, this._camera.up);
            this._camera.up.crossVectors(t, e).normalize(),
              this._camera.updateMatrixWorld();
            let i = this.getPosition(eM);
            this.updateCameraUp(), this.setPosition(i.x, i.y, i.z);
          }
          update(e) {
            let t = this._sphericalEnd.theta - this._spherical.theta,
              i = this._sphericalEnd.phi - this._spherical.phi,
              r = this._sphericalEnd.radius - this._spherical.radius,
              n = eV.subVectors(this._targetEnd, this._target),
              o = eZ.subVectors(this._focalOffsetEnd, this._focalOffset),
              s = this._zoomEnd - this._zoom;
            if (ex(t))
              (this._thetaVelocity.value = 0),
                (this._spherical.theta = this._sphericalEnd.theta);
            else {
              let t = this._isUserControllingRotate
                ? this.draggingSmoothTime
                : this.smoothTime;
              (this._spherical.theta = eA(
                this._spherical.theta,
                this._sphericalEnd.theta,
                this._thetaVelocity,
                t,
                1 / 0,
                e
              )),
                (this._needsUpdate = !0);
            }
            if (ex(i))
              (this._phiVelocity.value = 0),
                (this._spherical.phi = this._sphericalEnd.phi);
            else {
              let t = this._isUserControllingRotate
                ? this.draggingSmoothTime
                : this.smoothTime;
              (this._spherical.phi = eA(
                this._spherical.phi,
                this._sphericalEnd.phi,
                this._phiVelocity,
                t,
                1 / 0,
                e
              )),
                (this._needsUpdate = !0);
            }
            if (ex(r))
              (this._radiusVelocity.value = 0),
                (this._spherical.radius = this._sphericalEnd.radius);
            else {
              let t = this._isUserControllingDolly
                ? this.draggingSmoothTime
                : this.smoothTime;
              (this._spherical.radius = eA(
                this._spherical.radius,
                this._sphericalEnd.radius,
                this._radiusVelocity,
                t,
                this.maxSpeed,
                e
              )),
                (this._needsUpdate = !0);
            }
            if (ex(n.x) && ex(n.y) && ex(n.z))
              this._targetVelocity.set(0, 0, 0),
                this._target.copy(this._targetEnd);
            else {
              let t = this._isUserControllingTruck
                ? this.draggingSmoothTime
                : this.smoothTime;
              eD(
                this._target,
                this._targetEnd,
                this._targetVelocity,
                t,
                this.maxSpeed,
                e,
                this._target
              ),
                (this._needsUpdate = !0);
            }
            if (ex(o.x) && ex(o.y) && ex(o.z))
              this._focalOffsetVelocity.set(0, 0, 0),
                this._focalOffset.copy(this._focalOffsetEnd);
            else {
              let t = this._isUserControllingOffset
                ? this.draggingSmoothTime
                : this.smoothTime;
              eD(
                this._focalOffset,
                this._focalOffsetEnd,
                this._focalOffsetVelocity,
                t,
                this.maxSpeed,
                e,
                this._focalOffset
              ),
                (this._needsUpdate = !0);
            }
            if (ex(s))
              (this._zoomVelocity.value = 0), (this._zoom = this._zoomEnd);
            else {
              let t = this._isUserControllingZoom
                ? this.draggingSmoothTime
                : this.smoothTime;
              this._zoom = eA(
                this._zoom,
                this._zoomEnd,
                this._zoomVelocity,
                t,
                1 / 0,
                e
              );
            }
            if (this.dollyToCursor) {
              if (e_(this._camera) && 0 !== this._changedDolly) {
                let e = this._spherical.radius - this._lastDistance,
                  t = this._camera,
                  i = this._getCameraDirection(ek),
                  r = eM.copy(i).cross(t.up).normalize();
                0 === r.lengthSq() && (r.x = 1);
                let n = ej.crossVectors(r, i),
                  o =
                    this._sphericalEnd.radius *
                    Math.tan(t.getEffectiveFOV() * eC * 0.5),
                  s =
                    (this._sphericalEnd.radius -
                      e -
                      this._sphericalEnd.radius) /
                    this._sphericalEnd.radius,
                  a = eI
                    .copy(this._targetEnd)
                    .add(
                      r.multiplyScalar(this._dollyControlCoord.x * o * t.aspect)
                    )
                    .add(n.multiplyScalar(this._dollyControlCoord.y * o)),
                  l = eM.copy(this._targetEnd).lerp(a, s),
                  c =
                    this._lastDollyDirection === em.IN &&
                    this._spherical.radius <= this.minDistance,
                  u =
                    this._lastDollyDirection === em.OUT &&
                    this.maxDistance <= this._spherical.radius;
                if (this.infinityDolly && (c || u)) {
                  (this._sphericalEnd.radius -= e),
                    (this._spherical.radius -= e);
                  let t = ej.copy(i).multiplyScalar(-e);
                  l.add(t);
                }
                this._boundary.clampPoint(l, l);
                let h = ej.subVectors(l, this._targetEnd);
                this._targetEnd.copy(l),
                  this._target.add(h),
                  (this._changedDolly -= e),
                  ex(this._changedDolly) && (this._changedDolly = 0);
              } else if (eg(this._camera) && 0 !== this._changedZoom) {
                let e = this._zoom - this._lastZoom,
                  t = this._camera,
                  i = eM
                    .set(
                      this._dollyControlCoord.x,
                      this._dollyControlCoord.y,
                      (t.near + t.far) / (t.near - t.far)
                    )
                    .unproject(t),
                  r = ej.set(0, 0, -1).applyQuaternion(t.quaternion),
                  n = eI.copy(i).add(r.multiplyScalar(-i.dot(t.up))),
                  o = -(this._zoom - e - this._zoom) / this._zoom,
                  s = this._getCameraDirection(ek),
                  a = this._targetEnd.dot(s),
                  l = eM.copy(this._targetEnd).lerp(n, o),
                  c = l.dot(s),
                  u = s.multiplyScalar(c - a);
                l.sub(u), this._boundary.clampPoint(l, l);
                let h = ej.subVectors(l, this._targetEnd);
                this._targetEnd.copy(l),
                  this._target.add(h),
                  (this._changedZoom -= e),
                  ex(this._changedZoom) && (this._changedZoom = 0);
              }
            }
            this._camera.zoom !== this._zoom &&
              ((this._camera.zoom = this._zoom),
              this._camera.updateProjectionMatrix(),
              this._updateNearPlaneCorners(),
              (this._needsUpdate = !0)),
              (this._dragNeedsUpdate = !0);
            let a = this._collisionTest();
            (this._spherical.radius = Math.min(this._spherical.radius, a)),
              this._spherical.makeSafe(),
              this._camera.position
                .setFromSpherical(this._spherical)
                .applyQuaternion(this._yAxisUpSpaceInverse)
                .add(this._target),
              this._camera.lookAt(this._target),
              (ex(this._focalOffset.x) &&
                ex(this._focalOffset.y) &&
                ex(this._focalOffset.z)) ||
                (this._camera.updateMatrixWorld(),
                eN.setFromMatrixColumn(this._camera.matrix, 0),
                eH.setFromMatrixColumn(this._camera.matrix, 1),
                eY.setFromMatrixColumn(this._camera.matrix, 2),
                eN.multiplyScalar(this._focalOffset.x),
                eH.multiplyScalar(-this._focalOffset.y),
                eY.multiplyScalar(this._focalOffset.z),
                eM.copy(eN).add(eH).add(eY),
                this._camera.position.add(eM)),
              this._boundaryEnclosesCamera &&
                this._encloseToBoundary(
                  this._camera.position.copy(this._target),
                  eM
                    .setFromSpherical(this._spherical)
                    .applyQuaternion(this._yAxisUpSpaceInverse),
                  1
                );
            let l = this._needsUpdate;
            return (
              l && !this._updatedLastTime
                ? ((this._hasRested = !1),
                  this.dispatchEvent({ type: "wake" }),
                  this.dispatchEvent({ type: "update" }))
                : l
                ? (this.dispatchEvent({ type: "update" }),
                  ex(t, this.restThreshold) &&
                    ex(i, this.restThreshold) &&
                    ex(r, this.restThreshold) &&
                    ex(n.x, this.restThreshold) &&
                    ex(n.y, this.restThreshold) &&
                    ex(n.z, this.restThreshold) &&
                    ex(o.x, this.restThreshold) &&
                    ex(o.y, this.restThreshold) &&
                    ex(o.z, this.restThreshold) &&
                    ex(s, this.restThreshold) &&
                    !this._hasRested &&
                    ((this._hasRested = !0),
                    this.dispatchEvent({ type: "rest" })))
                : !l &&
                  this._updatedLastTime &&
                  this.dispatchEvent({ type: "sleep" }),
              (this._lastDistance = this._spherical.radius),
              (this._lastZoom = this._zoom),
              (this._updatedLastTime = l),
              (this._needsUpdate = !1),
              l
            );
          }
          toJSON() {
            return JSON.stringify({
              enabled: this._enabled,
              minDistance: this.minDistance,
              maxDistance: eO(this.maxDistance),
              minZoom: this.minZoom,
              maxZoom: eO(this.maxZoom),
              minPolarAngle: this.minPolarAngle,
              maxPolarAngle: eO(this.maxPolarAngle),
              minAzimuthAngle: eO(this.minAzimuthAngle),
              maxAzimuthAngle: eO(this.maxAzimuthAngle),
              smoothTime: this.smoothTime,
              draggingSmoothTime: this.draggingSmoothTime,
              dollySpeed: this.dollySpeed,
              truckSpeed: this.truckSpeed,
              dollyToCursor: this.dollyToCursor,
              verticalDragToForward: this.verticalDragToForward,
              target: this._targetEnd.toArray(),
              position: eM
                .setFromSpherical(this._sphericalEnd)
                .add(this._targetEnd)
                .toArray(),
              zoom: this._zoomEnd,
              focalOffset: this._focalOffsetEnd.toArray(),
              target0: this._target0.toArray(),
              position0: this._position0.toArray(),
              zoom0: this._zoom0,
              focalOffset0: this._focalOffset0.toArray(),
            });
          }
          fromJSON(e, t = !1) {
            let i = JSON.parse(e);
            (this.enabled = i.enabled),
              (this.minDistance = i.minDistance),
              (this.maxDistance = ew(i.maxDistance)),
              (this.minZoom = i.minZoom),
              (this.maxZoom = ew(i.maxZoom)),
              (this.minPolarAngle = i.minPolarAngle),
              (this.maxPolarAngle = ew(i.maxPolarAngle)),
              (this.minAzimuthAngle = ew(i.minAzimuthAngle)),
              (this.maxAzimuthAngle = ew(i.maxAzimuthAngle)),
              (this.smoothTime = i.smoothTime),
              (this.draggingSmoothTime = i.draggingSmoothTime),
              (this.dollySpeed = i.dollySpeed),
              (this.truckSpeed = i.truckSpeed),
              (this.dollyToCursor = i.dollyToCursor),
              (this.verticalDragToForward = i.verticalDragToForward),
              this._target0.fromArray(i.target0),
              this._position0.fromArray(i.position0),
              (this._zoom0 = i.zoom0),
              this._focalOffset0.fromArray(i.focalOffset0),
              this.moveTo(i.target[0], i.target[1], i.target[2], t),
              eq.setFromVector3(
                eM
                  .fromArray(i.position)
                  .sub(this._targetEnd)
                  .applyQuaternion(this._yAxisUpSpace)
              ),
              this.rotateTo(eq.theta, eq.phi, t),
              this.dollyTo(eq.radius, t),
              this.zoomTo(i.zoom, t),
              this.setFocalOffset(
                i.focalOffset[0],
                i.focalOffset[1],
                i.focalOffset[2],
                t
              ),
              (this._needsUpdate = !0);
          }
          connect(e) {
            if (this._domElement)
              return void console.warn("camera-controls is already connected.");
            e.setAttribute("data-camera-controls-version", "2.9.0"),
              this._addAllEventListeners(e),
              this._getClientRect(this._elementRect);
          }
          disconnect() {
            this.cancel(),
              this._removeAllEventListeners(),
              this._domElement &&
                (this._domElement.removeAttribute(
                  "data-camera-controls-version"
                ),
                (this._domElement = void 0));
          }
          dispose() {
            this.removeAllEventListeners(), this.disconnect();
          }
          _getTargetDirection(e) {
            return e
              .setFromSpherical(this._spherical)
              .divideScalar(this._spherical.radius)
              .applyQuaternion(this._yAxisUpSpaceInverse);
          }
          _getCameraDirection(e) {
            return this._getTargetDirection(e).negate();
          }
          _findPointerById(e) {
            return this._activePointers.find((t) => t.pointerId === e);
          }
          _findPointerByMouseButton(e) {
            return this._activePointers.find((t) => t.mouseButton === e);
          }
          _disposePointer(e) {
            this._activePointers.splice(this._activePointers.indexOf(e), 1);
          }
          _encloseToBoundary(e, t, i) {
            let r = t.lengthSq();
            if (0 === r) return e;
            let n = ej.copy(t).add(e),
              o = this._boundary.clampPoint(n, eI).sub(n),
              s = o.lengthSq();
            if (0 === s) return e.add(t);
            if (s === r) return e;
            if (0 === i) return e.add(t).add(o);
            {
              let r = 1 + (i * s) / t.dot(o);
              return e
                .add(ej.copy(t).multiplyScalar(r))
                .add(o.multiplyScalar(1 - i));
            }
          }
          _updateNearPlaneCorners() {
            if (e_(this._camera)) {
              let e = this._camera,
                t = e.near,
                i = Math.tan(0.5 * (e.getEffectiveFOV() * eC)) * t,
                r = i * e.aspect;
              this._nearPlaneCorners[0].set(-r, -i, 0),
                this._nearPlaneCorners[1].set(r, -i, 0),
                this._nearPlaneCorners[2].set(r, i, 0),
                this._nearPlaneCorners[3].set(-r, i, 0);
            } else if (eg(this._camera)) {
              let e = this._camera,
                t = 1 / e.zoom,
                i = e.left * t,
                r = e.right * t,
                n = e.top * t,
                o = e.bottom * t;
              this._nearPlaneCorners[0].set(i, n, 0),
                this._nearPlaneCorners[1].set(r, n, 0),
                this._nearPlaneCorners[2].set(r, o, 0),
                this._nearPlaneCorners[3].set(i, o, 0);
            }
          }
          _collisionTest() {
            let e = 1 / 0;
            if (
              !(this.colliderMeshes.length >= 1) ||
              eP(this._camera, "_collisionTest")
            )
              return e;
            let t = this._getTargetDirection(ek);
            eJ.lookAt(eB, t, this._camera.up);
            for (let i = 0; i < 4; i++) {
              let r = ej.copy(this._nearPlaneCorners[i]);
              r.applyMatrix4(eJ);
              let n = eI.addVectors(this._target, r);
              e0.set(n, t), (e0.far = this._spherical.radius + 1);
              let o = e0.intersectObjects(this.colliderMeshes);
              0 !== o.length && o[0].distance < e && (e = o[0].distance);
            }
            return e;
          }
          _getClientRect(e) {
            if (!this._domElement) return;
            let t = this._domElement.getBoundingClientRect();
            return (
              (e.x = t.left),
              (e.y = t.top),
              this._viewport
                ? ((e.x += this._viewport.x),
                  (e.y += t.height - this._viewport.w - this._viewport.y),
                  (e.width = this._viewport.z),
                  (e.height = this._viewport.w))
                : ((e.width = t.width), (e.height = t.height)),
              e
            );
          }
          _createOnRestPromise(e) {
            return e
              ? Promise.resolve()
              : ((this._hasRested = !1),
                this.dispatchEvent({ type: "transitionstart" }),
                new Promise((e) => {
                  let t = () => {
                    this.removeEventListener("rest", t), e();
                  };
                  this.addEventListener("rest", t);
                }));
          }
          _addAllEventListeners(e) {}
          _removeAllEventListeners() {}
          get dampingFactor() {
            return (
              console.warn(
                ".dampingFactor has been deprecated. use smoothTime (in seconds) instead."
              ),
              0
            );
          }
          set dampingFactor(e) {
            console.warn(
              ".dampingFactor has been deprecated. use smoothTime (in seconds) instead."
            );
          }
          get draggingDampingFactor() {
            return (
              console.warn(
                ".draggingDampingFactor has been deprecated. use draggingSmoothTime (in seconds) instead."
              ),
              0
            );
          }
          set draggingDampingFactor(e) {
            console.warn(
              ".draggingDampingFactor has been deprecated. use draggingSmoothTime (in seconds) instead."
            );
          }
          static createBoundingSphere(e, t = new eL.Sphere()) {
            let i = t.center;
            eX.makeEmpty(),
              e.traverseVisible((e) => {
                e.isMesh && eX.expandByObject(e);
              }),
              eX.getCenter(i);
            let r = 0;
            return (
              e.traverseVisible((e) => {
                if (!e.isMesh) return;
                let t = e.geometry.clone();
                t.applyMatrix4(e.matrixWorld);
                let n = t.attributes.position;
                for (let e = 0, t = n.count; e < t; e++)
                  eM.fromBufferAttribute(n, e),
                    (r = Math.max(r, i.distanceToSquared(eM)));
              }),
              (t.radius = Math.sqrt(r)),
              t
            );
          }
        };
      function e5(e) {
        var { smoothTime: t = 0.05 } = e,
          i = (0, J.c)(e, ["smoothTime"]);
        e2.install({ THREE: ed }), (0, Y.e)({ CameraControls: e2 });
        let r = (0, Y.A)((e) => e.camera),
          n = (0, Y.A)((e) => e.gl),
          o = (function ({
            type: e,
            cAzimuthAngle: t,
            cPolarAngle: i,
            cDistance: r,
            cameraZoom: n,
            zoomOut: o,
            enableTransition: s = !0,
          }) {
            let a = (0, H.useRef)();
            return (
              (0, Y.C)((e, t) => a.current.update(t)),
              (0, H.useEffect)(() => {
                let e = a.current;
                null == e || e.rotateTo(et(t), et(i), s);
              }, [a, t, i]),
              (0, H.useEffect)(() => {
                let t = a.current;
                o
                  ? "sphere" === e
                    ? (null == t || t.dollyTo(eh.f.distance, s),
                      null == t || t.zoomTo(eh.f.zoom, s))
                    : (null == t || t.dollyTo(eh.e.distance, s),
                      null == t || t.zoomTo(eh.e.zoom, s))
                  : "sphere" === e
                  ? (null == t || t.zoomTo(n, s),
                    null == t || t.dollyTo(eh.d, s))
                  : (null == t || t.dollyTo(r, s),
                    null == t || t.zoomTo(eh.c, s));
              }, [a, o, e, n, r]),
              a
            );
          })(i);
        return (0, V.jsx)("cameraControls", {
          ref: o,
          args: [r, n.domElement],
          enableDamping: !0,
          smoothTime: t,
          zoomSpeed: 10,
          dollySpeed: 10,
          restThreshold: 0,
        });
      }
      function e8(e) {
        return (0, V.jsx)(V.Fragment, {
          children: (0, V.jsx)(e5, (0, J.a)({}, e)),
        });
      }
      var e7 = (0, J.d)((e, t) => {
          t.exports = (e) =>
            encodeURIComponent(e).replace(
              /[!'()*]/g,
              (e) => `%${e.charCodeAt(0).toString(16).toUpperCase()}`
            );
        }),
        e9 = (0, J.d)((e, t) => {
          var i = "%[a-f0-9]{2}",
            r = RegExp("(" + i + ")|([^%]+?)", "gi"),
            n = RegExp("(" + i + ")+", "gi");
          t.exports = function (e) {
            if ("string" != typeof e)
              throw TypeError(
                "Expected `encodedURI` to be of type `string`, got `" +
                  typeof e +
                  "`"
              );
            try {
              return (e = e.replace(/\+/g, " ")), decodeURIComponent(e);
            } catch (t) {
              return (function (e) {
                for (
                  var t = { "%FE%FF": "��", "%FF%FE": "��" }, i = n.exec(e);
                  i;

                ) {
                  try {
                    t[i[0]] = decodeURIComponent(i[0]);
                  } catch (e) {
                    var o = (function (e) {
                      try {
                        return decodeURIComponent(e);
                      } catch (n) {
                        for (var t = e.match(r) || [], i = 1; i < t.length; i++)
                          t =
                            (e = (function e(t, i) {
                              try {
                                return [decodeURIComponent(t.join(""))];
                              } catch (e) {}
                              if (1 === t.length) return t;
                              i = i || 1;
                              var r = t.slice(0, i),
                                n = t.slice(i);
                              return Array.prototype.concat.call(
                                [],
                                e(r),
                                e(n)
                              );
                            })(t, i).join("")).match(r) || [];
                        return e;
                      }
                    })(i[0]);
                    o !== i[0] && (t[i[0]] = o);
                  }
                  i = n.exec(e);
                }
                t["%C2"] = "�";
                for (var s = Object.keys(t), a = 0; a < s.length; a++) {
                  var l = s[a];
                  e = e.replace(RegExp(l, "g"), t[l]);
                }
                return e;
              })(e);
            }
          };
        }),
        e6 = (0, J.d)((e, t) => {
          t.exports = (e, t) => {
            if ("string" != typeof e || "string" != typeof t)
              throw TypeError("Expected the arguments to be of type `string`");
            if ("" === t) return [e];
            let i = e.indexOf(t);
            return -1 === i ? [e] : [e.slice(0, i), e.slice(i + t.length)];
          };
        }),
        te = (0, J.d)((e, t) => {
          t.exports = function (e, t) {
            for (
              var i = {}, r = Object.keys(e), n = Array.isArray(t), o = 0;
              o < r.length;
              o++
            ) {
              var s = r[o],
                a = e[s];
              (n ? -1 !== t.indexOf(s) : t(s, a, e)) && (i[s] = a);
            }
            return i;
          };
        }),
        tt = (0, J.d)((e) => {
          var t = e7(),
            i = e9(),
            r = e6(),
            n = te(),
            o = (e) => null == e,
            s = Symbol("encodeFragmentIdentifier");
          function a(e) {
            if ("string" != typeof e || 1 !== e.length)
              throw TypeError(
                "arrayFormatSeparator must be single character string"
              );
          }
          function l(e, i) {
            return i.encode ? (i.strict ? t(e) : encodeURIComponent(e)) : e;
          }
          function c(e, t) {
            return t.decode ? i(e) : e;
          }
          function u(e) {
            let t = e.indexOf("#");
            return -1 !== t && (e = e.slice(0, t)), e;
          }
          function h(e) {
            let t = (e = u(e)).indexOf("?");
            return -1 === t ? "" : e.slice(t + 1);
          }
          function d(e, t) {
            return (
              t.parseNumbers &&
              !Number.isNaN(Number(e)) &&
              "string" == typeof e &&
              "" !== e.trim()
                ? (e = Number(e))
                : t.parseBooleans &&
                  null !== e &&
                  ("true" === e.toLowerCase() || "false" === e.toLowerCase()) &&
                  (e = "true" === e.toLowerCase()),
              e
            );
          }
          function f(e, t) {
            a(
              (t = Object.assign(
                {
                  decode: !0,
                  sort: !0,
                  arrayFormat: "none",
                  arrayFormatSeparator: ",",
                  parseNumbers: !1,
                  parseBooleans: !1,
                },
                t
              )).arrayFormatSeparator
            );
            let i = (function (e) {
                let t;
                switch (e.arrayFormat) {
                  case "index":
                    return (e, i, r) => {
                      if (
                        ((t = /\[(\d*)\]$/.exec(e)),
                        (e = e.replace(/\[\d*\]$/, "")),
                        !t)
                      ) {
                        r[e] = i;
                        return;
                      }
                      void 0 === r[e] && (r[e] = {}), (r[e][t[1]] = i);
                    };
                  case "bracket":
                    return (e, i, r) => {
                      if (
                        ((t = /(\[\])$/.exec(e)),
                        (e = e.replace(/\[\]$/, "")),
                        !t)
                      ) {
                        r[e] = i;
                        return;
                      }
                      if (void 0 === r[e]) {
                        r[e] = [i];
                        return;
                      }
                      r[e] = [].concat(r[e], i);
                    };
                  case "colon-list-separator":
                    return (e, i, r) => {
                      if (
                        ((t = /(:list)$/.exec(e)),
                        (e = e.replace(/:list$/, "")),
                        !t)
                      ) {
                        r[e] = i;
                        return;
                      }
                      if (void 0 === r[e]) {
                        r[e] = [i];
                        return;
                      }
                      r[e] = [].concat(r[e], i);
                    };
                  case "comma":
                  case "separator":
                    return (t, i, r) => {
                      let n =
                          "string" == typeof i &&
                          i.includes(e.arrayFormatSeparator),
                        o =
                          "string" == typeof i &&
                          !n &&
                          c(i, e).includes(e.arrayFormatSeparator);
                      i = o ? c(i, e) : i;
                      let s =
                        n || o
                          ? i.split(e.arrayFormatSeparator).map((t) => c(t, e))
                          : null === i
                          ? i
                          : c(i, e);
                      r[t] = s;
                    };
                  case "bracket-separator":
                    return (t, i, r) => {
                      let n = /(\[\])$/.test(t);
                      if (((t = t.replace(/\[\]$/, "")), !n)) {
                        r[t] = i && c(i, e);
                        return;
                      }
                      let o =
                        null === i
                          ? []
                          : i.split(e.arrayFormatSeparator).map((t) => c(t, e));
                      if (void 0 === r[t]) {
                        r[t] = o;
                        return;
                      }
                      r[t] = [].concat(r[t], o);
                    };
                  default:
                    return (e, t, i) => {
                      if (void 0 === i[e]) {
                        i[e] = t;
                        return;
                      }
                      i[e] = [].concat(i[e], t);
                    };
                }
              })(t),
              n = Object.create(null);
            if ("string" != typeof e || !(e = e.trim().replace(/^[?#&]/, "")))
              return n;
            for (let o of e.split("&")) {
              if ("" === o) continue;
              let [e, s] = r(t.decode ? o.replace(/\+/g, " ") : o, "=");
              (s =
                void 0 === s
                  ? null
                  : ["comma", "separator", "bracket-separator"].includes(
                      t.arrayFormat
                    )
                  ? s
                  : c(s, t)),
                i(c(e, t), s, n);
            }
            for (let e of Object.keys(n)) {
              let i = n[e];
              if ("object" == typeof i && null !== i)
                for (let e of Object.keys(i)) i[e] = d(i[e], t);
              else n[e] = d(i, t);
            }
            return !1 === t.sort
              ? n
              : (!0 === t.sort
                  ? Object.keys(n).sort()
                  : Object.keys(n).sort(t.sort)
                ).reduce((e, t) => {
                  let i = n[t];
                  return (
                    i && "object" == typeof i && !Array.isArray(i)
                      ? (e[t] = (function e(t) {
                          return Array.isArray(t)
                            ? t.sort()
                            : "object" == typeof t
                            ? e(Object.keys(t))
                                .sort((e, t) => Number(e) - Number(t))
                                .map((e) => t[e])
                            : t;
                        })(i))
                      : (e[t] = i),
                    e
                  );
                }, Object.create(null));
          }
          (e.extract = h),
            (e.parse = f),
            (e.stringify = (e, t) => {
              if (!e) return "";
              a(
                (t = Object.assign(
                  {
                    encode: !0,
                    strict: !0,
                    arrayFormat: "none",
                    arrayFormatSeparator: ",",
                  },
                  t
                )).arrayFormatSeparator
              );
              let i = (i) =>
                  (t.skipNull && o(e[i])) || (t.skipEmptyString && "" === e[i]),
                r = (function (e) {
                  switch (e.arrayFormat) {
                    case "index":
                      return (t) => (i, r) => {
                        let n = i.length;
                        return void 0 === r ||
                          (e.skipNull && null === r) ||
                          (e.skipEmptyString && "" === r)
                          ? i
                          : null === r
                          ? [...i, [l(t, e), "[", n, "]"].join("")]
                          : [
                              ...i,
                              [l(t, e), "[", l(n, e), "]=", l(r, e)].join(""),
                            ];
                      };
                    case "bracket":
                      return (t) => (i, r) =>
                        void 0 === r ||
                        (e.skipNull && null === r) ||
                        (e.skipEmptyString && "" === r)
                          ? i
                          : null === r
                          ? [...i, [l(t, e), "[]"].join("")]
                          : [...i, [l(t, e), "[]=", l(r, e)].join("")];
                    case "colon-list-separator":
                      return (t) => (i, r) =>
                        void 0 === r ||
                        (e.skipNull && null === r) ||
                        (e.skipEmptyString && "" === r)
                          ? i
                          : null === r
                          ? [...i, [l(t, e), ":list="].join("")]
                          : [...i, [l(t, e), ":list=", l(r, e)].join("")];
                    case "comma":
                    case "separator":
                    case "bracket-separator": {
                      let t =
                        "bracket-separator" === e.arrayFormat ? "[]=" : "=";
                      return (i) => (r, n) =>
                        void 0 === n ||
                        (e.skipNull && null === n) ||
                        (e.skipEmptyString && "" === n)
                          ? r
                          : ((n = null === n ? "" : n),
                            0 === r.length
                              ? [[l(i, e), t, l(n, e)].join("")]
                              : [[r, l(n, e)].join(e.arrayFormatSeparator)]);
                    }
                    default:
                      return (t) => (i, r) =>
                        void 0 === r ||
                        (e.skipNull && null === r) ||
                        (e.skipEmptyString && "" === r)
                          ? i
                          : null === r
                          ? [...i, l(t, e)]
                          : [...i, [l(t, e), "=", l(r, e)].join("")];
                  }
                })(t),
                n = {};
              for (let t of Object.keys(e)) i(t) || (n[t] = e[t]);
              let s = Object.keys(n);
              return (
                !1 !== t.sort && s.sort(t.sort),
                s
                  .map((i) => {
                    let n = e[i];
                    return void 0 === n
                      ? ""
                      : null === n
                      ? l(i, t)
                      : Array.isArray(n)
                      ? 0 === n.length && "bracket-separator" === t.arrayFormat
                        ? l(i, t) + "[]"
                        : n.reduce(r(i), []).join("&")
                      : l(i, t) + "=" + l(n, t);
                  })
                  .filter((e) => e.length > 0)
                  .join("&")
              );
            }),
            (e.parseUrl = (e, t) => {
              t = Object.assign({ decode: !0 }, t);
              let [i, n] = r(e, "#");
              return Object.assign(
                { url: i.split("?")[0] || "", query: f(h(e), t) },
                t && t.parseFragmentIdentifier && n
                  ? { fragmentIdentifier: c(n, t) }
                  : {}
              );
            }),
            (e.stringifyUrl = (t, i) => {
              i = Object.assign({ encode: !0, strict: !0, [s]: !0 }, i);
              let r = u(t.url).split("?")[0] || "",
                n = e.extract(t.url),
                o = Object.assign(e.parse(n, { sort: !1 }), t.query),
                a = e.stringify(o, i);
              a && (a = `?${a}`);
              let c = (function (e) {
                let t = "",
                  i = e.indexOf("#");
                return -1 !== i && (t = e.slice(i)), t;
              })(t.url);
              return (
                t.fragmentIdentifier &&
                  (c = `#${
                    i[s] ? l(t.fragmentIdentifier, i) : t.fragmentIdentifier
                  }`),
                `${r}${a}${c}`
              );
            }),
            (e.pick = (t, i, r) => {
              r = Object.assign({ parseFragmentIdentifier: !0, [s]: !1 }, r);
              let {
                url: o,
                query: a,
                fragmentIdentifier: l,
              } = e.parseUrl(t, r);
              return e.stringifyUrl(
                { url: o, query: n(a, i), fragmentIdentifier: l },
                r
              );
            }),
            (e.exclude = (t, i, r) => {
              let n = Array.isArray(i)
                ? (e) => !i.includes(e)
                : (e, t) => !i(e, t);
              return e.pick(t, n, r);
            });
        }),
        ti = {
          halo: {
            title: "Halo",
            color: "white",
            props: {
              type: "plane",
              uAmplitude: 1,
              uDensity: 1.3,
              uSpeed: 0.4,
              uStrength: 4,
              uTime: 0,
              uFrequency: 5.5,
              range: "enabled",
              rangeStart: 0,
              rangeEnd: 40,
              frameRate: 10,
              destination: "onCanvas",
              format: "gif",
              axesHelper: "off",
              brightness: 1.2,
              cAzimuthAngle: 180,
              cDistance: 3.6,
              cPolarAngle: 90,
              cameraZoom: 1,
              color1: "#ff5005",
              color2: "#dbba95",
              color3: "#d0bce1",
              embedMode: "off",
              envPreset: "city",
              gizmoHelper: "hide",
              grain: "on",
              lightType: "3d",
              pixelDensity: 1,
              fov: 45,
              positionX: -1.4,
              positionY: 0,
              positionZ: 0,
              reflection: 0.1,
              rotationX: 0,
              rotationY: 10,
              rotationZ: 50,
              shader: "defaults",
              animate: "on",
              wireframe: !1,
            },
          },
          pensive: {
            title: "Pensive",
            color: "white",
            props: {
              range: "enabled",
              rangeStart: 0,
              rangeEnd: 40,
              frameRate: 10,
              destination: "onCanvas",
              format: "gif",
              animate: "on",
              axesHelper: "off",
              brightness: 1.5,
              cAzimuthAngle: 250,
              cDistance: 1.5,
              cPolarAngle: 140,
              cameraZoom: 12.5,
              color1: "#809bd6",
              color2: "#910aff",
              color3: "#af38ff",
              embedMode: "off",
              envPreset: "city",
              gizmoHelper: "hide",
              grain: "on",
              lightType: "3d",
              pixelDensity: 1,
              fov: 45,
              positionX: 0,
              positionY: 0,
              positionZ: 0,
              reflection: 0.5,
              rotationX: 0,
              rotationY: 0,
              rotationZ: 140,
              shader: "defaults",
              type: "sphere",
              uAmplitude: 7,
              uDensity: 0.8,
              uFrequency: 5.5,
              uSpeed: 0.3,
              uStrength: 0.4,
              uTime: 0,
              wireframe: !1,
            },
          },
          mint: {
            title: "Mint",
            color: "white",
            props: {
              range: "enabled",
              rangeStart: 0,
              rangeEnd: 40,
              frameRate: 10,
              destination: "onCanvas",
              format: "gif",
              animate: "on",
              axesHelper: "off",
              brightness: 1.2,
              cAzimuthAngle: 170,
              cDistance: 4.4,
              cPolarAngle: 70,
              cameraZoom: 1,
              color1: "#94ffd1",
              color2: "#6bf5ff",
              color3: "#ffffff",
              embedMode: "off",
              envPreset: "city",
              gizmoHelper: "hide",
              grain: "off",
              lightType: "3d",
              pixelDensity: 1,
              fov: 45,
              positionX: 0,
              positionY: 0.9,
              positionZ: -0.3,
              reflection: 0.1,
              rotationX: 45,
              rotationY: 0,
              rotationZ: 0,
              shader: "defaults",
              type: "waterPlane",
              uAmplitude: 0,
              uDensity: 1.2,
              uFrequency: 0,
              uSpeed: 0.2,
              uStrength: 3.4,
              uTime: 0,
              wireframe: !1,
            },
          },
          interstella: {
            title: "Interstella",
            color: "white",
            props: {
              range: "enabled",
              rangeStart: 0,
              rangeEnd: 40,
              frameRate: 10,
              destination: "onCanvas",
              format: "gif",
              animate: "on",
              axesHelper: "off",
              brightness: 0.8,
              cAzimuthAngle: 270,
              cDistance: 0.5,
              cPolarAngle: 180,
              cameraZoom: 15.1,
              color1: "#73bfc4",
              color2: "#ff810a",
              color3: "#8da0ce",
              embedMode: "off",
              envPreset: "city",
              gizmoHelper: "hide",
              grain: "on",
              lightType: "env",
              pixelDensity: 1,
              fov: 45,
              positionX: -0.1,
              positionY: 0,
              positionZ: 0,
              reflection: 0.4,
              rotationX: 0,
              rotationY: 130,
              rotationZ: 70,
              shader: "defaults",
              type: "sphere",
              uAmplitude: 3.2,
              uDensity: 0.8,
              uFrequency: 5.5,
              uSpeed: 0.3,
              uStrength: 0.3,
              uTime: 0,
              wireframe: !1,
            },
          },
          nightyNight: {
            title: "Nighty night",
            color: "white",
            props: {
              range: "enabled",
              rangeStart: 0,
              rangeEnd: 40,
              frameRate: 10,
              destination: "onCanvas",
              format: "gif",
              animate: "on",
              axesHelper: "off",
              brightness: 1,
              cAzimuthAngle: 180,
              cDistance: 2.8,
              cPolarAngle: 80,
              cameraZoom: 9.1,
              color1: "#606080",
              color2: "#8d7dca",
              color3: "#212121",
              embedMode: "off",
              envPreset: "city",
              gizmoHelper: "hide",
              grain: "on",
              lightType: "3d",
              pixelDensity: 1,
              fov: 45,
              positionX: 0,
              positionY: 0,
              positionZ: 0,
              reflection: 0.1,
              rotationX: 50,
              rotationY: 0,
              rotationZ: -60,
              shader: "defaults",
              type: "waterPlane",
              uAmplitude: 0,
              uDensity: 1.5,
              uFrequency: 0,
              uSpeed: 0.3,
              uStrength: 1.5,
              uTime: 8,
              wireframe: !1,
            },
          },
          violaOrientalis: {
            title: "Viola orientalis",
            color: "white",
            props: {
              range: "enabled",
              rangeStart: 0,
              rangeEnd: 40,
              frameRate: 10,
              destination: "onCanvas",
              format: "gif",
              animate: "on",
              axesHelper: "on",
              brightness: 1.1,
              cAzimuthAngle: 0,
              cDistance: 7.1,
              cPolarAngle: 140,
              cameraZoom: 17.3,
              color1: "#ffffff",
              color2: "#ffbb00",
              color3: "#0700ff",
              embedMode: "off",
              envPreset: "city",
              grain: "off",
              lightType: "3d",
              pixelDensity: 1,
              fov: 45,
              positionX: 0,
              positionY: 0,
              positionZ: 0,
              reflection: 0.1,
              rotationX: 0,
              rotationY: 0,
              rotationZ: 0,
              shader: "defaults",
              type: "sphere",
              uAmplitude: 1.4,
              uDensity: 1.1,
              uSpeed: 0.1,
              uStrength: 1,
              uTime: 0,
              uFrequency: 5.5,
              wireframe: !1,
            },
          },
          universe: {
            title: "Universe",
            color: "white",
            props: {
              range: "enabled",
              rangeStart: 0,
              rangeEnd: 40,
              frameRate: 10,
              destination: "onCanvas",
              format: "gif",
              animate: "on",
              axesHelper: "on",
              brightness: 1.1,
              cAzimuthAngle: 180,
              cDistance: 3.9,
              cPolarAngle: 115,
              cameraZoom: 1,
              color1: "#5606ff",
              color2: "#fe8989",
              color3: "#000000",
              embedMode: "off",
              envPreset: "city",
              grain: "off",
              lightType: "3d",
              pixelDensity: 1,
              fov: 45,
              positionX: -0.5,
              positionY: 0.1,
              positionZ: 0,
              reflection: 0.1,
              rotationX: 0,
              rotationY: 0,
              rotationZ: 235,
              shader: "defaults",
              type: "waterPlane",
              uAmplitude: 0,
              uDensity: 1.1,
              uSpeed: 0.1,
              uStrength: 2.4,
              uTime: 0.2,
              uFrequency: 5.5,
              wireframe: !1,
            },
          },
          sunset: {
            title: "Sunset",
            color: "white",
            props: {
              range: "enabled",
              rangeStart: 0,
              rangeEnd: 40,
              frameRate: 10,
              destination: "onCanvas",
              format: "gif",
              animate: "on",
              axesHelper: "on",
              bgColor1: "#000000",
              bgColor2: "#000000",
              brightness: 1.5,
              cAzimuthAngle: 60,
              cDistance: 7.1,
              cPolarAngle: 90,
              cameraZoom: 15.3,
              color1: "#ff7a33",
              color2: "#33a0ff",
              color3: "#ffc53d",
              embedMode: "off",
              envPreset: "dawn",
              grain: "off",
              lightType: "3d",
              pixelDensity: 1,
              fov: 45,
              positionX: 0,
              positionY: -0.15,
              positionZ: 0,
              reflection: 0.1,
              rotationX: 0,
              rotationY: 0,
              rotationZ: 0,
              shader: "defaults",
              type: "sphere",
              uAmplitude: 1.4,
              uDensity: 1.1,
              uSpeed: 0.1,
              uStrength: 0.4,
              uTime: 0,
              uFrequency: 5.5,
              wireframe: !1,
            },
          },
          mandarin: {
            title: "Mandarin",
            color: "white",
            props: {
              range: "enabled",
              rangeStart: 0,
              rangeEnd: 40,
              frameRate: 10,
              destination: "onCanvas",
              format: "gif",
              animate: "on",
              axesHelper: "on",
              bgColor1: "#000000",
              bgColor2: "#000000",
              brightness: 1.2,
              cAzimuthAngle: 180,
              cDistance: 2.4,
              cPolarAngle: 95,
              cameraZoom: 1,
              color1: "#ff6a1a",
              color2: "#c73c00",
              color3: "#FD4912",
              embedMode: "off",
              envPreset: "city",
              grain: "off",
              lightType: "3d",
              pixelDensity: 1,
              fov: 45,
              positionX: 0,
              positionY: -2.1,
              positionZ: 0,
              reflection: 0.1,
              rotationX: 0,
              rotationY: 0,
              rotationZ: 225,
              shader: "defaults",
              type: "waterPlane",
              uAmplitude: 0,
              uDensity: 1.8,
              uSpeed: 0.2,
              uStrength: 3,
              uTime: 0.2,
              uFrequency: 5.5,
              wireframe: !1,
            },
          },
          cottonCandy: {
            title: "Cotton Candy",
            color: "white",
            props: {
              range: "enabled",
              rangeStart: 0,
              rangeEnd: 40,
              frameRate: 10,
              destination: "onCanvas",
              format: "gif",
              animate: "on",
              axesHelper: "off",
              brightness: 1.2,
              cAzimuthAngle: 180,
              cDistance: 2.9,
              cPolarAngle: 120,
              cameraZoom: 1,
              color1: "#ebedff",
              color2: "#f3f2f8",
              color3: "#dbf8ff",
              embedMode: "off",
              envPreset: "city",
              grain: "off",
              lightType: "3d",
              pixelDensity: 1,
              fov: 45,
              positionX: 0,
              positionY: 1.8,
              positionZ: 0,
              reflection: 0.1,
              rotationX: 0,
              rotationY: 0,
              rotationZ: -90,
              shader: "defaults",
              type: "waterPlane",
              uAmplitude: 0,
              uDensity: 1,
              uSpeed: 0.3,
              uStrength: 3,
              uTime: 0.2,
              uFrequency: 5.5,
              wireframe: !1,
            },
          },
        };
      Object.values(ti);
      var tr = (0, J.f)(tt());
      function tn(e) {
        let t = (0, J.a)((0, J.a)({}, ti.halo.props), e),
          { control: i, urlString: r } = t,
          n = (0, J.c)(t, ["control", "urlString"]);
        "query" === i &&
          (n = tr.parse(
            r
              .replace("http://localhost:3001/customize", "")
              .replace("https://shadergradient.co/customize", "")
              .replace("https://www.shadergradient.co/customize", ""),
            { parseNumbers: !0, parseBooleans: !0, arrayFormat: "index" }
          ));
        let o = n,
          {
            lightType: s,
            envPreset: a,
            brightness: l,
            grain: c,
            toggleAxis: u,
          } = o;
        return (
          (0, J.c)(o, [
            "lightType",
            "envPreset",
            "brightness",
            "grain",
            "toggleAxis",
          ]),
          (0, V.jsxs)(V.Fragment, {
            children: [
              (0, V.jsx)(ei, (0, J.a)({}, n)),
              (0, V.jsx)(ec, { lightType: s, brightness: l, envPreset: a }),
              "off" !== c && (0, V.jsx)(Z, {}),
              (0, V.jsx)(e8, (0, J.a)({}, n)),
            ],
          })
        );
      }
    },
    491: (e, t, i) => {
      i.d(t, {
        a: () => r,
        c: () => n,
        d: () => o,
        e: () => s,
        f: () => a,
        m: () => l,
      });
      var r = (e, t) => ({
          dpr: e,
          camera: { fov: t },
          linear: !0,
          flat: !0,
          gl: { preserveDrawingBuffer: !0 },
        }),
        n = 1,
        o = 14,
        s = { zoom: 1, distance: 14 },
        a = { zoom: 5, distance: 14 },
        l = "https://ruucm.github.io/shadergradient/shadergradient@1.0.0/hdr/";
    },
    620: (e, t) => {
      function i(e, t) {
        var i = e.length;
        for (e.push(t); 0 < i; ) {
          var r = (i - 1) >>> 1,
            n = e[r];
          if (0 < o(n, t)) (e[r] = t), (e[i] = n), (i = r);
          else break;
        }
      }
      function r(e) {
        return 0 === e.length ? null : e[0];
      }
      function n(e) {
        if (0 === e.length) return null;
        var t = e[0],
          i = e.pop();
        if (i !== t) {
          e[0] = i;
          for (var r = 0, n = e.length, s = n >>> 1; r < s; ) {
            var a = 2 * (r + 1) - 1,
              l = e[a],
              c = a + 1,
              u = e[c];
            if (0 > o(l, i))
              c < n && 0 > o(u, l)
                ? ((e[r] = u), (e[c] = i), (r = c))
                : ((e[r] = l), (e[a] = i), (r = a));
            else if (c < n && 0 > o(u, i)) (e[r] = u), (e[c] = i), (r = c);
            else break;
          }
        }
        return t;
      }
      function o(e, t) {
        var i = e.sortIndex - t.sortIndex;
        return 0 !== i ? i : e.id - t.id;
      }
      if (
        ((t.unstable_now = void 0),
        "object" == typeof performance && "function" == typeof performance.now)
      ) {
        var s,
          a = performance;
        t.unstable_now = function () {
          return a.now();
        };
      } else {
        var l = Date,
          c = l.now();
        t.unstable_now = function () {
          return l.now() - c;
        };
      }
      var u = [],
        h = [],
        d = 1,
        f = null,
        p = 3,
        m = !1,
        _ = !1,
        g = !1,
        v = "function" == typeof setTimeout ? setTimeout : null,
        y = "function" == typeof clearTimeout ? clearTimeout : null,
        C = "undefined" != typeof setImmediate ? setImmediate : null;
      function b(e) {
        for (var t = r(h); null !== t; ) {
          if (null === t.callback) n(h);
          else if (t.startTime <= e)
            n(h), (t.sortIndex = t.expirationTime), i(u, t);
          else break;
          t = r(h);
        }
      }
      function x(e) {
        if (((g = !1), b(e), !_))
          if (null !== r(u)) (_ = !0), z();
          else {
            var t = r(h);
            null !== t && L(x, t.startTime - e);
          }
      }
      var E = !1,
        T = -1,
        O = 5,
        w = -1;
      function A() {
        return !(t.unstable_now() - w < O);
      }
      function D() {
        if (E) {
          var e = t.unstable_now();
          w = e;
          var i = !0;
          try {
            e: {
              (_ = !1), g && ((g = !1), y(T), (T = -1)), (m = !0);
              var o = p;
              try {
                t: {
                  for (
                    b(e), f = r(u);
                    null !== f && !(f.expirationTime > e && A());

                  ) {
                    var a = f.callback;
                    if ("function" == typeof a) {
                      (f.callback = null), (p = f.priorityLevel);
                      var l = a(f.expirationTime <= e);
                      if (((e = t.unstable_now()), "function" == typeof l)) {
                        (f.callback = l), b(e), (i = !0);
                        break t;
                      }
                      f === r(u) && n(u), b(e);
                    } else n(u);
                    f = r(u);
                  }
                  if (null !== f) i = !0;
                  else {
                    var c = r(h);
                    null !== c && L(x, c.startTime - e), (i = !1);
                  }
                }
                break e;
              } finally {
                (f = null), (p = o), (m = !1);
              }
            }
          } finally {
            i ? s() : (E = !1);
          }
        }
      }
      if ("function" == typeof C)
        s = function () {
          C(D);
        };
      else if ("undefined" != typeof MessageChannel) {
        var S = new MessageChannel(),
          P = S.port2;
        (S.port1.onmessage = D),
          (s = function () {
            P.postMessage(null);
          });
      } else
        s = function () {
          v(D, 0);
        };
      function z() {
        E || ((E = !0), s());
      }
      function L(e, i) {
        T = v(function () {
          e(t.unstable_now());
        }, i);
      }
      (t.unstable_IdlePriority = 5),
        (t.unstable_ImmediatePriority = 1),
        (t.unstable_LowPriority = 4),
        (t.unstable_NormalPriority = 3),
        (t.unstable_Profiling = null),
        (t.unstable_UserBlockingPriority = 2),
        (t.unstable_cancelCallback = function (e) {
          e.callback = null;
        }),
        (t.unstable_continueExecution = function () {
          _ || m || ((_ = !0), z());
        }),
        (t.unstable_forceFrameRate = function (e) {
          0 > e || 125 < e
            ? console.error(
                "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
              )
            : (O = 0 < e ? Math.floor(1e3 / e) : 5);
        }),
        (t.unstable_getCurrentPriorityLevel = function () {
          return p;
        }),
        (t.unstable_getFirstCallbackNode = function () {
          return r(u);
        }),
        (t.unstable_next = function (e) {
          switch (p) {
            case 1:
            case 2:
            case 3:
              var t = 3;
              break;
            default:
              t = p;
          }
          var i = p;
          p = t;
          try {
            return e();
          } finally {
            p = i;
          }
        }),
        (t.unstable_pauseExecution = function () {}),
        (t.unstable_requestPaint = function () {}),
        (t.unstable_runWithPriority = function (e, t) {
          switch (e) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
              break;
            default:
              e = 3;
          }
          var i = p;
          p = e;
          try {
            return t();
          } finally {
            p = i;
          }
        }),
        (t.unstable_scheduleCallback = function (e, n, o) {
          var s = t.unstable_now();
          switch (
            ((o =
              "object" == typeof o &&
              null !== o &&
              "number" == typeof (o = o.delay) &&
              0 < o
                ? s + o
                : s),
            e)
          ) {
            case 1:
              var a = -1;
              break;
            case 2:
              a = 250;
              break;
            case 5:
              a = 0x3fffffff;
              break;
            case 4:
              a = 1e4;
              break;
            default:
              a = 5e3;
          }
          return (
            (a = o + a),
            (e = {
              id: d++,
              callback: n,
              priorityLevel: e,
              startTime: o,
              expirationTime: a,
              sortIndex: -1,
            }),
            o > s
              ? ((e.sortIndex = o),
                i(h, e),
                null === r(u) &&
                  e === r(h) &&
                  (g ? (y(T), (T = -1)) : (g = !0), L(x, o - s)))
              : ((e.sortIndex = a), i(u, e), _ || m || ((_ = !0), z())),
            e
          );
        }),
        (t.unstable_shouldYield = A),
        (t.unstable_wrapCallback = function (e) {
          var t = p;
          return function () {
            var i = p;
            p = t;
            try {
              return e.apply(this, arguments);
            } finally {
              p = i;
            }
          };
        });
    },
    1892: (e, t, i) => {
      i.d(t, { a: () => _, b: () => g });
      var r = i(2115),
        n = i(491),
        o = i(2344),
        s = i(13),
        a = i(7431);
      function l(e, t) {
        let i;
        return (...r) => {
          window.clearTimeout(i), (i = window.setTimeout(() => e(...r), t));
        };
      }
      let c = ["x", "y", "top", "bottom", "left", "right", "width", "height"],
        u = (e, t) => c.every((i) => e[i] === t[i]);
      var h = i(6354),
        d = i(5155);
      function f({
        ref: e,
        children: t,
        fallback: i,
        resize: n,
        style: o,
        gl: c,
        events: h = s.f,
        eventSource: f,
        eventPrefix: p,
        shadows: m,
        linear: _,
        flat: g,
        legacy: v,
        orthographic: y,
        frameloop: C,
        dpr: b,
        performance: x,
        raycaster: E,
        camera: T,
        scene: O,
        onPointerMissed: w,
        onCreated: A,
        ...D
      }) {
        r.useMemo(() => (0, s.e)(a), []);
        let S = (0, s.u)(),
          [P, z] = (function (
            { debounce: e, scroll: t, polyfill: i, offsetSize: n } = {
              debounce: 0,
              scroll: !1,
              offsetSize: !1,
            }
          ) {
            var o, s, a;
            let c =
              i ||
              ("undefined" == typeof window ? class {} : window.ResizeObserver);
            if (!c)
              throw Error(
                "This browser does not support ResizeObserver out of the box. See: https://github.com/react-spring/react-use-measure/#resize-observer-polyfills"
              );
            let [h, d] = (0, r.useState)({
                left: 0,
                top: 0,
                width: 0,
                height: 0,
                bottom: 0,
                right: 0,
                x: 0,
                y: 0,
              }),
              f = (0, r.useRef)({
                element: null,
                scrollContainers: null,
                resizeObserver: null,
                lastBounds: h,
                orientationHandler: null,
              }),
              p = e ? ("number" == typeof e ? e : e.scroll) : null,
              m = e ? ("number" == typeof e ? e : e.resize) : null,
              _ = (0, r.useRef)(!1);
            (0, r.useEffect)(
              () => ((_.current = !0), () => void (_.current = !1))
            );
            let [g, v, y] = (0, r.useMemo)(() => {
              let e = () => {
                if (!f.current.element) return;
                let {
                    left: e,
                    top: t,
                    width: i,
                    height: r,
                    bottom: o,
                    right: s,
                    x: a,
                    y: l,
                  } = f.current.element.getBoundingClientRect(),
                  c = {
                    left: e,
                    top: t,
                    width: i,
                    height: r,
                    bottom: o,
                    right: s,
                    x: a,
                    y: l,
                  };
                f.current.element instanceof HTMLElement &&
                  n &&
                  ((c.height = f.current.element.offsetHeight),
                  (c.width = f.current.element.offsetWidth)),
                  Object.freeze(c),
                  _.current &&
                    !u(f.current.lastBounds, c) &&
                    d((f.current.lastBounds = c));
              };
              return [e, m ? l(e, m) : e, p ? l(e, p) : e];
            }, [d, n, p, m]);
            function C() {
              f.current.scrollContainers &&
                (f.current.scrollContainers.forEach((e) =>
                  e.removeEventListener("scroll", y, !0)
                ),
                (f.current.scrollContainers = null)),
                f.current.resizeObserver &&
                  (f.current.resizeObserver.disconnect(),
                  (f.current.resizeObserver = null)),
                f.current.orientationHandler &&
                  ("orientation" in screen &&
                  "removeEventListener" in screen.orientation
                    ? screen.orientation.removeEventListener(
                        "change",
                        f.current.orientationHandler
                      )
                    : "onorientationchange" in window &&
                      window.removeEventListener(
                        "orientationchange",
                        f.current.orientationHandler
                      ));
            }
            function b() {
              f.current.element &&
                ((f.current.resizeObserver = new c(y)),
                f.current.resizeObserver.observe(f.current.element),
                t &&
                  f.current.scrollContainers &&
                  f.current.scrollContainers.forEach((e) =>
                    e.addEventListener("scroll", y, {
                      capture: !0,
                      passive: !0,
                    })
                  ),
                (f.current.orientationHandler = () => {
                  y();
                }),
                "orientation" in screen &&
                "addEventListener" in screen.orientation
                  ? screen.orientation.addEventListener(
                      "change",
                      f.current.orientationHandler
                    )
                  : "onorientationchange" in window &&
                    window.addEventListener(
                      "orientationchange",
                      f.current.orientationHandler
                    ));
            }
            return (
              (o = y),
              (s = !!t),
              (0, r.useEffect)(() => {
                if (s)
                  return (
                    window.addEventListener("scroll", o, {
                      capture: !0,
                      passive: !0,
                    }),
                    () => void window.removeEventListener("scroll", o, !0)
                  );
              }, [o, s]),
              (a = v),
              (0, r.useEffect)(
                () => (
                  window.addEventListener("resize", a),
                  () => void window.removeEventListener("resize", a)
                ),
                [a]
              ),
              (0, r.useEffect)(() => {
                C(), b();
              }, [t, y, v]),
              (0, r.useEffect)(() => C, []),
              [
                (e) => {
                  e &&
                    e !== f.current.element &&
                    (C(),
                    (f.current.element = e),
                    (f.current.scrollContainers = (function e(t) {
                      let i = [];
                      if (!t || t === document.body) return i;
                      let {
                        overflow: r,
                        overflowX: n,
                        overflowY: o,
                      } = window.getComputedStyle(t);
                      return (
                        [r, n, o].some((e) => "auto" === e || "scroll" === e) &&
                          i.push(t),
                        [...i, ...e(t.parentElement)]
                      );
                    })(e)),
                    b());
                },
                h,
                g,
              ]
            );
          })({ scroll: !0, debounce: { scroll: 50, resize: 0 }, ...n }),
          L = r.useRef(null),
          B = r.useRef(null);
        r.useImperativeHandle(e, () => L.current);
        let R = (0, s.a)(w),
          [U, F] = r.useState(!1),
          [M, j] = r.useState(!1);
        if (U) throw U;
        if (M) throw M;
        let I = r.useRef(null);
        (0, s.b)(() => {
          let e = L.current;
          z.width > 0 &&
            z.height > 0 &&
            e &&
            (I.current || (I.current = (0, s.c)(e)),
            (async function () {
              await I.current.configure({
                gl: c,
                scene: O,
                events: h,
                shadows: m,
                linear: _,
                flat: g,
                legacy: v,
                orthographic: y,
                frameloop: C,
                dpr: b,
                performance: x,
                raycaster: E,
                camera: T,
                size: z,
                onPointerMissed: (...e) =>
                  null == R.current ? void 0 : R.current(...e),
                onCreated: (e) => {
                  null == e.events.connect ||
                    e.events.connect(
                      f ? ((0, s.i)(f) ? f.current : f) : B.current
                    ),
                    p &&
                      e.setEvents({
                        compute: (e, t) => {
                          let i = e[p + "X"],
                            r = e[p + "Y"];
                          t.pointer.set(
                            (i / t.size.width) * 2 - 1,
                            -(2 * (r / t.size.height)) + 1
                          ),
                            t.raycaster.setFromCamera(t.pointer, t.camera);
                        },
                      }),
                    null == A || A(e);
                },
              }),
                I.current.render(
                  (0, d.jsx)(S, {
                    children: (0, d.jsx)(s.E, {
                      set: j,
                      children: (0, d.jsx)(r.Suspense, {
                        fallback: (0, d.jsx)(s.B, { set: F }),
                        children: null != t ? t : null,
                      }),
                    }),
                  })
                );
            })());
        }),
          r.useEffect(() => {
            let e = L.current;
            if (e) return () => (0, s.d)(e);
          }, []);
        let k = f ? "none" : "auto";
        return (0, d.jsx)("div", {
          ref: B,
          style: {
            position: "relative",
            width: "100%",
            height: "100%",
            overflow: "hidden",
            pointerEvents: k,
            ...o,
          },
          ...D,
          children: (0, d.jsx)("div", {
            ref: P,
            style: { width: "100%", height: "100%" },
            children: (0, d.jsx)("canvas", {
              ref: L,
              style: { display: "block" },
              children: i,
            }),
          }),
        });
      }
      function p(e) {
        return (0, d.jsx)(h.Af, { children: (0, d.jsx)(f, { ...e }) });
      }
      i(1933), i(5220), i(4342);
      var m = (0, r.createContext)({}),
        _ = () => (0, r.useContext)(m);
      function g({
        children: e,
        style: t = {},
        pixelDensity: i = 1,
        fov: s = 45,
        pointerEvents: l,
        className: c,
        envBasePath: u,
        lazyLoad: h = !0,
        threshold: f = 0.1,
      }) {
        let { isInView: _, containerRef: g } = (function (e = !0, t = 0.1) {
            let [i, n] = (0, r.useState)(!0),
              o = (0, r.useRef)(null);
            return (
              (0, r.useEffect)(() => {
                if (!e) return;
                let i = new IntersectionObserver(
                  ([e]) => {
                    n(e.isIntersecting);
                  },
                  { threshold: t }
                );
                return o.current && i.observe(o.current), () => i.disconnect();
              }, [e, t]),
              { isInView: i, containerRef: o }
            );
          })(h, f),
          v = (0, r.useMemo)(() => ({ envBasePath: u || n.m }), [u]);
        return (
          (0, r.useEffect)(() => {
            (a.ShaderChunk.uv2_pars_vertex = ""),
              (a.ShaderChunk.uv2_vertex = ""),
              (a.ShaderChunk.uv2_pars_fragment = ""),
              (a.ShaderChunk.encodings_fragment = "");
          }, []),
          (0, d.jsx)("div", {
            ref: g,
            style: (0, o.a)({ width: "100%", height: "100%" }, t),
            children:
              (!h || _) &&
              (0, d.jsx)(m.Provider, {
                value: v,
                children: (0, d.jsx)(
                  p,
                  (0, o.b)(
                    (0, o.a)(
                      {
                        style: { pointerEvents: l },
                        resize: { offsetSize: !0 },
                        className: c,
                      },
                      (0, n.a)(i, s)
                    ),
                    { children: e }
                  )
                ),
              }),
          })
        );
      }
    },
    1933: (e, t, i) => {
      e.exports = i(6500);
    },
    2344: (e, t, i) => {
      i.d(t, { a: () => p, b: () => m, c: () => _, d: () => g, f: () => y });
      var r = Object.create,
        n = Object.defineProperty,
        o = Object.defineProperties,
        s = Object.getOwnPropertyDescriptor,
        a = Object.getOwnPropertyDescriptors,
        l = Object.getOwnPropertyNames,
        c = Object.getOwnPropertySymbols,
        u = Object.getPrototypeOf,
        h = Object.prototype.hasOwnProperty,
        d = Object.prototype.propertyIsEnumerable,
        f = (e, t, i) =>
          t in e
            ? n(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: i,
              })
            : (e[t] = i),
        p = (e, t) => {
          for (var i in t || (t = {})) h.call(t, i) && f(e, i, t[i]);
          if (c) for (var i of c(t)) d.call(t, i) && f(e, i, t[i]);
          return e;
        },
        m = (e, t) => o(e, a(t)),
        _ = (e, t) => {
          var i = {};
          for (var r in e) h.call(e, r) && 0 > t.indexOf(r) && (i[r] = e[r]);
          if (null != e && c)
            for (var r of c(e))
              0 > t.indexOf(r) && d.call(e, r) && (i[r] = e[r]);
          return i;
        },
        g = (e, t) => () => (
          t || e((t = { exports: {} }).exports, t), t.exports
        ),
        v = (e, t, i, r) => {
          if ((t && "object" == typeof t) || "function" == typeof t)
            for (let o of l(t))
              h.call(e, o) ||
                o === i ||
                n(e, o, {
                  get: () => t[o],
                  enumerable: !(r = s(t, o)) || r.enumerable,
                });
          return e;
        },
        y = (e, t, i) => (
          (i = null != e ? r(u(e)) : {}),
          v(
            !t && e && e.__esModule
              ? i
              : n(i, "default", { value: e, enumerable: !0 }),
            e
          )
        );
    },
    2436: (e, t, i) => {
      var r = i(2115),
        n =
          "function" == typeof Object.is
            ? Object.is
            : function (e, t) {
                return (
                  (e === t && (0 !== e || 1 / e == 1 / t)) || (e != e && t != t)
                );
              },
        o = r.useState,
        s = r.useEffect,
        a = r.useLayoutEffect,
        l = r.useDebugValue;
      function c(e) {
        var t = e.getSnapshot;
        e = e.value;
        try {
          var i = t();
          return !n(e, i);
        } catch (e) {
          return !0;
        }
      }
      var u =
        "undefined" == typeof window ||
        void 0 === window.document ||
        void 0 === window.document.createElement
          ? function (e, t) {
              return t();
            }
          : function (e, t) {
              var i = t(),
                r = o({ inst: { value: i, getSnapshot: t } }),
                n = r[0].inst,
                u = r[1];
              return (
                a(
                  function () {
                    (n.value = i), (n.getSnapshot = t), c(n) && u({ inst: n });
                  },
                  [e, i, t]
                ),
                s(
                  function () {
                    return (
                      c(n) && u({ inst: n }),
                      e(function () {
                        c(n) && u({ inst: n });
                      })
                    );
                  },
                  [e]
                ),
                l(i),
                i
              );
            };
      t.useSyncExternalStore =
        void 0 !== r.useSyncExternalStore ? r.useSyncExternalStore : u;
    },
    4342: (e, t, i) => {
      e.exports = i(7319);
    },
    5220: (e, t, i) => {
      e.exports = i(1724);
    },
    5643: (e, t, i) => {
      e.exports = i(6115);
    },
    6115: (e, t, i) => {
      var r = i(2115),
        n = i(9033),
        o =
          "function" == typeof Object.is
            ? Object.is
            : function (e, t) {
                return (
                  (e === t && (0 !== e || 1 / e == 1 / t)) || (e != e && t != t)
                );
              },
        s = n.useSyncExternalStore,
        a = r.useRef,
        l = r.useEffect,
        c = r.useMemo,
        u = r.useDebugValue;
      t.useSyncExternalStoreWithSelector = function (e, t, i, r, n) {
        var h = a(null);
        if (null === h.current) {
          var d = { hasValue: !1, value: null };
          h.current = d;
        } else d = h.current;
        var f = s(
          e,
          (h = c(
            function () {
              function e(e) {
                if (!l) {
                  if (
                    ((l = !0), (s = e), (e = r(e)), void 0 !== n && d.hasValue)
                  ) {
                    var t = d.value;
                    if (n(t, e)) return (a = t);
                  }
                  return (a = e);
                }
                if (((t = a), o(s, e))) return t;
                var i = r(e);
                return void 0 !== n && n(t, i)
                  ? ((s = e), t)
                  : ((s = e), (a = i));
              }
              var s,
                a,
                l = !1,
                c = void 0 === i ? null : i;
              return [
                function () {
                  return e(t());
                },
                null === c
                  ? void 0
                  : function () {
                      return e(c());
                    },
              ];
            },
            [t, i, r, n]
          ))[0],
          h[1]
        );
        return (
          l(
            function () {
              (d.hasValue = !0), (d.value = f);
            },
            [f]
          ),
          u(f),
          f
        );
      };
    },
    6354: (e, t, i) => {
      i.d(t, { Af: () => a, Nz: () => n, u5: () => l, y3: () => h });
      var r = i(2115);
      function n(e, t, i) {
        if (!e) return;
        if (!0 === i(e)) return e;
        let r = t ? e.return : e.child;
        for (; r; ) {
          let e = n(r, t, i);
          if (e) return e;
          r = t ? null : r.sibling;
        }
      }
      function o(e) {
        try {
          return Object.defineProperties(e, {
            _currentRenderer: { get: () => null, set() {} },
            _currentRenderer2: { get: () => null, set() {} },
          });
        } catch (t) {
          return e;
        }
      }
      (() => {
        var e, t;
        return (
          "undefined" != typeof window &&
          ((null == (e = window.document) ? void 0 : e.createElement) ||
            (null == (t = window.navigator) ? void 0 : t.product) ===
              "ReactNative")
        );
      })()
        ? r.useLayoutEffect
        : r.useEffect;
      let s = o(r.createContext(null));
      class a extends r.Component {
        render() {
          return r.createElement(
            s.Provider,
            { value: this._reactInternals },
            this.props.children
          );
        }
      }
      function l() {
        let e = r.useContext(s);
        if (null === e)
          throw Error(
            "its-fine: useFiber must be called within a <FiberProvider />!"
          );
        let t = r.useId();
        return r.useMemo(() => {
          for (let i of [e, null == e ? void 0 : e.alternate]) {
            if (!i) continue;
            let e = n(i, !1, (e) => {
              let i = e.memoizedState;
              for (; i; ) {
                if (i.memoizedState === t) return !0;
                i = i.next;
              }
            });
            if (e) return e;
          }
        }, [e, t]);
      }
      let c = Symbol.for("react.context"),
        u = (e) =>
          null !== e &&
          "object" == typeof e &&
          "$$typeof" in e &&
          e.$$typeof === c;
      function h() {
        let e = (function () {
          let e = l(),
            [t] = r.useState(() => new Map());
          t.clear();
          let i = e;
          for (; i; ) {
            let e = i.type;
            u(e) && e !== s && !t.has(e) && t.set(e, r.use(o(e))),
              (i = i.return);
          }
          return t;
        })();
        return r.useMemo(
          () =>
            Array.from(e.keys()).reduce(
              (t, i) => (n) =>
                r.createElement(
                  t,
                  null,
                  r.createElement(i.Provider, { ...n, value: e.get(i) })
                ),
              (e) => r.createElement(a, { ...e })
            ),
          [e]
        );
      }
    },
    6500: (e, t) => {
      (t.ConcurrentRoot = 1),
        (t.ContinuousEventPriority = 8),
        (t.DefaultEventPriority = 32),
        (t.DiscreteEventPriority = 2);
    },
    7319: (e, t) => {
      function i(e, t) {
        var i = e.length;
        for (e.push(t); 0 < i; ) {
          var r = (i - 1) >>> 1,
            n = e[r];
          if (0 < o(n, t)) (e[r] = t), (e[i] = n), (i = r);
          else break;
        }
      }
      function r(e) {
        return 0 === e.length ? null : e[0];
      }
      function n(e) {
        if (0 === e.length) return null;
        var t = e[0],
          i = e.pop();
        if (i !== t) {
          e[0] = i;
          for (var r = 0, n = e.length, s = n >>> 1; r < s; ) {
            var a = 2 * (r + 1) - 1,
              l = e[a],
              c = a + 1,
              u = e[c];
            if (0 > o(l, i))
              c < n && 0 > o(u, l)
                ? ((e[r] = u), (e[c] = i), (r = c))
                : ((e[r] = l), (e[a] = i), (r = a));
            else if (c < n && 0 > o(u, i)) (e[r] = u), (e[c] = i), (r = c);
            else break;
          }
        }
        return t;
      }
      function o(e, t) {
        var i = e.sortIndex - t.sortIndex;
        return 0 !== i ? i : e.id - t.id;
      }
      if (
        ((t.unstable_now = void 0),
        "object" == typeof performance && "function" == typeof performance.now)
      ) {
        var s,
          a = performance;
        t.unstable_now = function () {
          return a.now();
        };
      } else {
        var l = Date,
          c = l.now();
        t.unstable_now = function () {
          return l.now() - c;
        };
      }
      var u = [],
        h = [],
        d = 1,
        f = null,
        p = 3,
        m = !1,
        _ = !1,
        g = !1,
        v = "function" == typeof setTimeout ? setTimeout : null,
        y = "function" == typeof clearTimeout ? clearTimeout : null,
        C = "undefined" != typeof setImmediate ? setImmediate : null;
      function b(e) {
        for (var t = r(h); null !== t; ) {
          if (null === t.callback) n(h);
          else if (t.startTime <= e)
            n(h), (t.sortIndex = t.expirationTime), i(u, t);
          else break;
          t = r(h);
        }
      }
      function x(e) {
        if (((g = !1), b(e), !_))
          if (null !== r(u)) (_ = !0), z();
          else {
            var t = r(h);
            null !== t && L(x, t.startTime - e);
          }
      }
      var E = !1,
        T = -1,
        O = 5,
        w = -1;
      function A() {
        return !(t.unstable_now() - w < O);
      }
      function D() {
        if (E) {
          var e = t.unstable_now();
          w = e;
          var i = !0;
          try {
            e: {
              (_ = !1), g && ((g = !1), y(T), (T = -1)), (m = !0);
              var o = p;
              try {
                t: {
                  for (
                    b(e), f = r(u);
                    null !== f && !(f.expirationTime > e && A());

                  ) {
                    var a = f.callback;
                    if ("function" == typeof a) {
                      (f.callback = null), (p = f.priorityLevel);
                      var l = a(f.expirationTime <= e);
                      if (((e = t.unstable_now()), "function" == typeof l)) {
                        (f.callback = l), b(e), (i = !0);
                        break t;
                      }
                      f === r(u) && n(u), b(e);
                    } else n(u);
                    f = r(u);
                  }
                  if (null !== f) i = !0;
                  else {
                    var c = r(h);
                    null !== c && L(x, c.startTime - e), (i = !1);
                  }
                }
                break e;
              } finally {
                (f = null), (p = o), (m = !1);
              }
            }
          } finally {
            i ? s() : (E = !1);
          }
        }
      }
      if ("function" == typeof C)
        s = function () {
          C(D);
        };
      else if ("undefined" != typeof MessageChannel) {
        var S = new MessageChannel(),
          P = S.port2;
        (S.port1.onmessage = D),
          (s = function () {
            P.postMessage(null);
          });
      } else
        s = function () {
          v(D, 0);
        };
      function z() {
        E || ((E = !0), s());
      }
      function L(e, i) {
        T = v(function () {
          e(t.unstable_now());
        }, i);
      }
      (t.unstable_IdlePriority = 5),
        (t.unstable_ImmediatePriority = 1),
        (t.unstable_LowPriority = 4),
        (t.unstable_NormalPriority = 3),
        (t.unstable_Profiling = null),
        (t.unstable_UserBlockingPriority = 2),
        (t.unstable_cancelCallback = function (e) {
          e.callback = null;
        }),
        (t.unstable_continueExecution = function () {
          _ || m || ((_ = !0), z());
        }),
        (t.unstable_forceFrameRate = function (e) {
          0 > e || 125 < e
            ? console.error(
                "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
              )
            : (O = 0 < e ? Math.floor(1e3 / e) : 5);
        }),
        (t.unstable_getCurrentPriorityLevel = function () {
          return p;
        }),
        (t.unstable_getFirstCallbackNode = function () {
          return r(u);
        }),
        (t.unstable_next = function (e) {
          switch (p) {
            case 1:
            case 2:
            case 3:
              var t = 3;
              break;
            default:
              t = p;
          }
          var i = p;
          p = t;
          try {
            return e();
          } finally {
            p = i;
          }
        }),
        (t.unstable_pauseExecution = function () {}),
        (t.unstable_requestPaint = function () {}),
        (t.unstable_runWithPriority = function (e, t) {
          switch (e) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
              break;
            default:
              e = 3;
          }
          var i = p;
          p = e;
          try {
            return t();
          } finally {
            p = i;
          }
        }),
        (t.unstable_scheduleCallback = function (e, n, o) {
          var s = t.unstable_now();
          switch (
            ((o =
              "object" == typeof o &&
              null !== o &&
              "number" == typeof (o = o.delay) &&
              0 < o
                ? s + o
                : s),
            e)
          ) {
            case 1:
              var a = -1;
              break;
            case 2:
              a = 250;
              break;
            case 5:
              a = 0x3fffffff;
              break;
            case 4:
              a = 1e4;
              break;
            default:
              a = 5e3;
          }
          return (
            (a = o + a),
            (e = {
              id: d++,
              callback: n,
              priorityLevel: e,
              startTime: o,
              expirationTime: a,
              sortIndex: -1,
            }),
            o > s
              ? ((e.sortIndex = o),
                i(h, e),
                null === r(u) &&
                  e === r(h) &&
                  (g ? (y(T), (T = -1)) : (g = !0), L(x, o - s)))
              : ((e.sortIndex = a), i(u, e), _ || m || ((_ = !0), z())),
            e
          );
        }),
        (t.unstable_shouldYield = A),
        (t.unstable_wrapCallback = function (e) {
          var t = p;
          return function () {
            var i = p;
            p = t;
            try {
              return e.apply(this, arguments);
            } finally {
              p = i;
            }
          };
        });
    },
    8247: (e, t, i) => {
      e.exports = i(620);
    },
    9033: (e, t, i) => {
      e.exports = i(2436);
    },
  },
]);

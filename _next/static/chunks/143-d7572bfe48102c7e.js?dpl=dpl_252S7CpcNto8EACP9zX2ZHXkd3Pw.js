(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [143],
  {
    9143: function (t, e) {
      (function (t) {
        "use strict";
        function e(t) {
          return t >= 48 && t <= 57;
        }
        function n(t) {
          (this.index = 0),
            (this.path = t),
            (this.max = t.length),
            (this.result = []),
            (this.param = 0),
            (this.err = ""),
            (this.segmentStart = 0),
            (this.data = []);
        }
        function r(t) {
          for (
            var e;
            t.index < t.max &&
            (10 === (e = t.path.charCodeAt(t.index)) ||
              13 === e ||
              8232 === e ||
              8233 === e ||
              32 === e ||
              9 === e ||
              11 === e ||
              12 === e ||
              160 === e ||
              (e >= 5760 && ti.indexOf(e) >= 0));

          )
            t.index++;
        }
        function i(t) {
          var e,
            n = (e = t.path[t.segmentStart]).toLowerCase(),
            r = t.data;
          if (
            ("m" === n &&
              r.length > 2 &&
              (t.result.push([e, r[0], r[1]]),
              (r = r.slice(2)),
              (n = "l"),
              (e = "m" === e ? "l" : "L")),
            "r" === n)
          )
            t.result.push([e].concat(r));
          else
            for (
              ;
              r.length >= tr[n] &&
              (t.result.push([e].concat(r.splice(0, tr[n]))), tr[n]);

            );
        }
        function a() {
          if (!(this instanceof a)) return new a();
          (this.queue = []), (this.cache = null);
        }
        function s(t, e, n, r) {
          var i = Math.sqrt(t * t + e * e),
            a = Math.sqrt(t * t + e * e),
            s = (t * n + e * r) / (i * a);
          return (
            s > 1 && (s = 1),
            s < -1 && (s = -1),
            (t * r - e * n < 0 ? -1 : 1) * Math.acos(s)
          );
        }
        function h(t, e, n) {
          if (!(this instanceof h)) return new h(t, e, n);
          (this.rx = t), (this.ry = e), (this.ax = n);
        }
        function o(t) {
          if (!(this instanceof o)) return new o(t);
          var e = ta(t);
          (this.segments = e.segments), (this.err = e.err), (this.__stack = []);
        }
        function u(t, e, n, r, i, a, s, h) {
          (this.a = { x: t, y: e }),
            (this.b = { x: n, y: r }),
            (this.c = { x: i, y: a }),
            (this.d = { x: s, y: h }),
            null != s && null != h
              ? ((this.getArcLength = y),
                (this.getPoint = g),
                (this.getDerivative = f))
              : ((this.getArcLength = v),
                (this.getPoint = p),
                (this.getDerivative = c)),
            this.init();
        }
        function c(t, e, n) {
          return {
            x: 2 * (1 - n) * (t[1] - t[0]) + 2 * n * (t[2] - t[1]),
            y: 2 * (1 - n) * (e[1] - e[0]) + 2 * n * (e[2] - e[1]),
          };
        }
        function f(t, e, n) {
          return p(
            [3 * (t[1] - t[0]), 3 * (t[2] - t[1]), 3 * (t[3] - t[2])],
            [3 * (e[1] - e[0]), 3 * (e[2] - e[1]), 3 * (e[3] - e[2])],
            n
          );
        }
        function l(t, e, n, r, i) {
          for (var a = 1, s = t / e, h = (t - n(r, i, s)) / e; a > 0.001; ) {
            var o = n(r, i, s + h),
              u = n(r, i, s - h),
              c = Math.abs(t - o) / e,
              f = Math.abs(t - u) / e;
            c < a
              ? ((a = c), (s += h))
              : f < a
              ? ((a = f), (s -= h))
              : (h /= 2);
          }
          return s;
        }
        function p(t, e, n) {
          return {
            x: (1 - n) * (1 - n) * t[0] + 2 * (1 - n) * n * t[1] + n * n * t[2],
            y: (1 - n) * (1 - n) * e[0] + 2 * (1 - n) * n * e[1] + n * n * e[2],
          };
        }
        function g(t, e, n) {
          return {
            x:
              (1 - n) * (1 - n) * (1 - n) * t[0] +
              3 * (1 - n) * (1 - n) * n * t[1] +
              3 * (1 - n) * n * n * t[2] +
              n * n * n * t[3],
            y:
              (1 - n) * (1 - n) * (1 - n) * e[0] +
              3 * (1 - n) * (1 - n) * n * e[1] +
              3 * (1 - n) * n * n * e[2] +
              n * n * n * e[3],
          };
        }
        function v(t, e, n) {
          void 0 === n && (n = 1);
          var r = t[0] - 2 * t[1] + t[2],
            i = e[0] - 2 * e[1] + e[2],
            a = 2 * t[1] - 2 * t[0],
            s = 2 * e[1] - 2 * e[0],
            h = 4 * (r * r + i * i);
          if (0 === h)
            return (
              n * Math.sqrt(Math.pow(t[2] - t[0], 2) + Math.pow(e[2] - e[0], 2))
            );
          var o = (4 * (r * a + i * s)) / (2 * h),
            u = n + o,
            c = (a * a + s * s) / h - o * o;
          return (
            (Math.sqrt(h) / 2) *
            (u * Math.sqrt(u * u + c) -
              o * Math.sqrt(o * o + c) +
              c *
                Math.log(
                  Math.abs(
                    (u + Math.sqrt(u * u + c)) / (o + Math.sqrt(o * o + c))
                  )
                ))
          );
        }
        function x(t, e, n) {
          var r,
            i,
            a,
            s,
            h = n.length - 1;
          if (0 === h) return 0;
          if (0 === t) {
            for (a = 0, s = 0; s <= h; s++)
              a +=
                ((r = s),
                tw[h][r] * Math.pow(1 - e, h - s) * Math.pow(e, s) * n[s]);
            return a;
          }
          for (i = Array(h), s = 0; s < h; s++) i[s] = h * (n[s + 1] - n[s]);
          return x(t - 1, e, i);
        }
        function y(t, e, n) {
          var r, i, a, s;
          for (void 0 === n && (n = 1), r = n / 2, i = 0, a = 0; a < 20; a++)
            (s = r * tm[20][a] + r),
              (i +=
                tM[20][a] *
                (function (t, e, n) {
                  var r = x(1, n, t),
                    i = x(1, n, e);
                  return Math.sqrt(r * r + i * i);
                })(t, e, s));
          return r * i;
        }
        function d(t, e, n, r) {
          var i = t * n + e * r;
          return (
            i > 1 && (i = 1),
            i < -1 && (i = -1),
            (t * r - e * n < 0 ? -1 : 1) * Math.acos(i)
          );
        }
        function m(t, e, n, r, i, a, s, h, o) {
          var u = 0,
            c = [],
            f = [];
          tL(t, e, n, r, i, a, s, h, o).forEach(function (t) {
            var e = new td(t[0], t[1], t[2], t[3], t[4], t[5], t[6], t[7]),
              n = e.getTotalLength();
            (u += n), c.push(n), f.push(e);
          }),
            (this.length = u),
            (this.partialLengths = c),
            (this.curves = f);
        }
        function M(t, e, n, r) {
          (this.x0 = t), (this.x1 = e), (this.y0 = n), (this.y1 = r);
        }
        function w(t, e) {
          return Math.sqrt(
            (t[0] - e[0]) * (t[0] - e[0]) + (t[1] - e[1]) * (t[1] - e[1])
          );
        }
        function b(t, e, n) {
          return [t[0] + (e[0] - t[0]) * n, t[1] + (e[1] - t[1]) * n];
        }
        function L(t, e, n) {
          var r = t.map(function (t, n) {
            var r, i;
            return (
              (r = t),
              (i = e[n]),
              function (t) {
                return r.map(function (e, n) {
                  return e + t * (i[n] - e);
                });
              }
            );
          });
          return function (t) {
            var e = r.map(function (e) {
              return e(t);
            });
            return n ? P(e) : e;
          };
        }
        function A(t) {
          return "number" == typeof t && isFinite(t);
        }
        function k(t) {
          return !(function (t) {
            for (var e = 0; e < t.length - 2; e++) {
              var n = t[e],
                r = t[e + 1],
                i = t[e + 2];
              if (
                n[0] * (r[1] - i[1]) +
                r[0] * (i[1] - n[1]) +
                i[0] * (n[1] - r[1])
              )
                return !0;
            }
            return !1;
          })(t)
            ? [
                (t[0][0] + t[t.length - 1][0]) / 2,
                (t[0][1] + t[t.length - 1][1]) / 2,
              ]
            : te(t);
        }
        function q(t) {
          return new tp(t).abs();
        }
        function _(t) {
          return t
            .toString()
            .split("M")
            .map(function (t, e) {
              return (t = t.trim()), e && t ? "M" + t : t;
            })
            .filter(function (t) {
              return t;
            });
        }
        function P(t) {
          return "M" + t.join("L") + "Z";
        }
        function E(t, e) {
          for (
            var n = t.length + e, r = tn(t) / e, i = 0, a = 0, s = r / 2;
            t.length < n;

          ) {
            var h = t[i],
              o = t[(i + 1) % t.length],
              u = w(h, o);
            s <= a + u
              ? (t.splice(i + 1, 0, u ? b(h, o, (s - a) / u) : h.slice(0)),
                (s += r))
              : ((a += u), i++);
          }
        }
        function C(t, e) {
          if ("string" == typeof t) {
            var n,
              r,
              i,
              a =
                (function (t) {
                  var e = t.segments || [],
                    n = [];
                  if (!e.length || "M" !== e[0][0]) return !1;
                  for (var r = 0; r < e.length; r++) {
                    var i = e[r],
                      a = i[0],
                      s = i[1],
                      h = i[2];
                    if (("M" === a && r) || "Z" === a) break;
                    if ("M" === a || "L" === a) n.push([s, h]);
                    else if ("H" === a) n.push([s, n[n.length - 1][1]]);
                    else {
                      if ("V" !== a) return !1;
                      n.push([n[n.length - 1][0], s]);
                    }
                  }
                  return !!n.length && { ring: n };
                })((i = q(t))) ||
                (function (t, e) {
                  var n,
                    r,
                    i = _(t)[0],
                    a = [],
                    s = 3;
                  if (!i) throw TypeError(t_);
                  (n = (r = (function (t) {
                    if (
                      "undefined" != typeof window &&
                      window &&
                      window.document
                    )
                      try {
                        var e = window.document.createElementNS(
                          "http://www.w3.org/2000/svg",
                          "path"
                        );
                        return e.setAttributeNS(null, "d", t), e;
                      } catch (t) {}
                    return tq(t);
                  })(i)).getTotalLength()),
                    e && A(e) && e > 0 && (s = Math.max(s, Math.ceil(n / e)));
                  for (var h = 0; h < s; h++) {
                    var o = r.getPointAtLength((n * h) / s);
                    a.push([o.x, o.y]);
                  }
                  return { ring: a, skipBisect: !0 };
                })(i, e);
            (t = a.ring), (r = a.skipBisect);
          } else if (!Array.isArray(t)) throw TypeError(t_);
          if (
            !(n = t.slice(0)).every(function (t) {
              return Array.isArray(t) && t.length >= 2 && A(t[0]) && A(t[1]);
            })
          )
            throw TypeError(t_);
          return (
            n.length > 1 && 1e-9 > w(n[0], n[n.length - 1]) && n.pop(),
            tt(n) > 0 && n.reverse(),
            !r &&
              e &&
              A(e) &&
              e > 0 &&
              (function (t, e) {
                void 0 === e && (e = 1 / 0);
                for (var n = 0; n < t.length; n++)
                  for (
                    var r = t[n], i = n === t.length - 1 ? t[0] : t[n + 1];
                    w(r, i) > e;

                  )
                    (i = b(r, i, 0.5)), t.splice(n + 1, 0, i);
              })(n, e),
            n
          );
        }
        function S(t, e, n) {
          var r;
          return (
            (r = t.length - e.length),
            E(t, r < 0 ? -1 * r : 0),
            E(e, r > 0 ? r : 0),
            tP(t, e),
            L(t, e, n)
          );
        }
        function Z(t, e, n) {
          n = n || 2;
          var r,
            i,
            a,
            s,
            h,
            o,
            u,
            c = e && e.length,
            f = c ? e[0] * n : t.length,
            l = T(t, 0, f, n, !0),
            p = [];
          if (!l) return p;
          if (
            (c &&
              (l = (function (t, e, n, r) {
                var i,
                  a,
                  s,
                  h,
                  o,
                  u = [];
                for (i = 0, a = e.length; i < a; i++)
                  (s = e[i] * r),
                    (h = i < a - 1 ? e[i + 1] * r : t.length),
                    (o = T(t, s, h, r, !1)) === o.next && (o.steiner = !0),
                    u.push(
                      (function (t) {
                        var e = t,
                          n = t;
                        do e.x < n.x && (n = e), (e = e.next);
                        while (e !== t);
                        return n;
                      })(o)
                    );
                for (u.sort(z), i = 0; i < u.length; i++)
                  (function (t, e) {
                    if (
                      (e = (function (t, e) {
                        var n,
                          r = e,
                          i = t.x,
                          a = t.y,
                          s = -1 / 0;
                        do {
                          if (a <= r.y && a >= r.next.y) {
                            var h =
                              r.x +
                              ((a - r.y) * (r.next.x - r.x)) / (r.next.y - r.y);
                            if (h <= i && h > s) {
                              if (((s = h), h === i)) {
                                if (a === r.y) return r;
                                if (a === r.next.y) return r.next;
                              }
                              n = r.x < r.next.x ? r : r.next;
                            }
                          }
                          r = r.next;
                        } while (r !== e);
                        if (!n) return null;
                        if (i === s) return n.prev;
                        var o,
                          u = n,
                          c = n.x,
                          f = n.y,
                          l = 1 / 0;
                        for (r = n.next; r !== u; )
                          i >= r.x &&
                            r.x >= c &&
                            I(
                              a < f ? i : s,
                              a,
                              c,
                              f,
                              a < f ? s : i,
                              a,
                              r.x,
                              r.y
                            ) &&
                            ((o = Math.abs(a - r.y) / (i - r.x)) < l ||
                              (o === l && r.x > n.x)) &&
                            G(r, t) &&
                            ((n = r), (l = o)),
                            (r = r.next);
                        return n;
                      })(t, e))
                    ) {
                      var n = N(e, t);
                      F(n, n.next);
                    }
                  })(u[i], n),
                    (n = F(n, n.next));
                return n;
              })(t, e, l, n)),
            t.length > 80 * n)
          ) {
            (r = a = t[0]), (i = s = t[1]);
            for (var g = n; g < f; g += n)
              (h = t[g]),
                (o = t[g + 1]),
                h < r && (r = h),
                o < i && (i = o),
                h > a && (a = h),
                o > s && (s = o);
            u = Math.max(a - r, s - i);
          }
          return (
            (function t(e, n, r, i, a, s, h) {
              if (e) {
                !h &&
                  s &&
                  (function (t, e, n, r) {
                    var i = t;
                    do
                      null === i.z && (i.z = j(i.x, i.y, e, n, r)),
                        (i.prevZ = i.prev),
                        (i.nextZ = i.next),
                        (i = i.next);
                    while (i !== t);
                    (i.prevZ.nextZ = null),
                      (i.prevZ = null),
                      (function (t) {
                        var e,
                          n,
                          r,
                          i,
                          a,
                          s,
                          h,
                          o,
                          u = 1;
                        do {
                          for (n = t, t = null, a = null, s = 0; n; ) {
                            for (
                              s++, r = n, h = 0, e = 0;
                              e < u && (h++, (r = r.nextZ));
                              e++
                            );
                            for (o = u; h > 0 || (o > 0 && r); )
                              0 === h
                                ? ((i = r), (r = r.nextZ), o--)
                                : 0 !== o && r
                                ? n.z <= r.z
                                  ? ((i = n), (n = n.nextZ), h--)
                                  : ((i = r), (r = r.nextZ), o--)
                                : ((i = n), (n = n.nextZ), h--),
                                a ? (a.nextZ = i) : (t = i),
                                (i.prevZ = a),
                                (a = i);
                            n = r;
                          }
                          (a.nextZ = null), (u *= 2);
                        } while (s > 1);
                      })(i);
                  })(e, i, a, s);
                for (var o, u, c = e; e.prev !== e.next; )
                  if (
                    ((o = e.prev),
                    (u = e.next),
                    s
                      ? (function (t, e, n, r) {
                          var i = t.prev,
                            a = t.next;
                          if (V(i, t, a) >= 0) return !1;
                          for (
                            var s =
                                i.x < t.x
                                  ? i.x < a.x
                                    ? i.x
                                    : a.x
                                  : t.x < a.x
                                  ? t.x
                                  : a.x,
                              h =
                                i.y < t.y
                                  ? i.y < a.y
                                    ? i.y
                                    : a.y
                                  : t.y < a.y
                                  ? t.y
                                  : a.y,
                              o =
                                i.x > t.x
                                  ? i.x > a.x
                                    ? i.x
                                    : a.x
                                  : t.x > a.x
                                  ? t.x
                                  : a.x,
                              u =
                                i.y > t.y
                                  ? i.y > a.y
                                    ? i.y
                                    : a.y
                                  : t.y > a.y
                                  ? t.y
                                  : a.y,
                              c = j(s, h, e, n, r),
                              f = j(o, u, e, n, r),
                              l = t.nextZ;
                            l && l.z <= f;

                          ) {
                            if (
                              l !== t.prev &&
                              l !== t.next &&
                              I(i.x, i.y, t.x, t.y, a.x, a.y, l.x, l.y) &&
                              V(l.prev, l, l.next) >= 0
                            )
                              return !1;
                            l = l.nextZ;
                          }
                          for (l = t.prevZ; l && l.z >= c; ) {
                            if (
                              l !== t.prev &&
                              l !== t.next &&
                              I(i.x, i.y, t.x, t.y, a.x, a.y, l.x, l.y) &&
                              V(l.prev, l, l.next) >= 0
                            )
                              return !1;
                            l = l.prevZ;
                          }
                          return !0;
                        })(e, i, a, s)
                      : (function (t) {
                          var e = t.prev,
                            n = t.next;
                          if (V(e, t, n) >= 0) return !1;
                          for (var r = t.next.next; r !== t.prev; ) {
                            if (
                              I(e.x, e.y, t.x, t.y, n.x, n.y, r.x, r.y) &&
                              V(r.prev, r, r.next) >= 0
                            )
                              return !1;
                            r = r.next;
                          }
                          return !0;
                        })(e))
                  )
                    n.push(o.i / r),
                      n.push(e.i / r),
                      n.push(u.i / r),
                      D(e),
                      (e = u.next),
                      (c = u.next);
                  else if ((e = u) === c) {
                    h
                      ? 1 === h
                        ? t(
                            (e = (function (t, e, n) {
                              var r = t;
                              do {
                                var i = r.prev,
                                  a = r.next.next;
                                !X(i, a) &&
                                  Y(i, r, r.next, a) &&
                                  G(i, a) &&
                                  G(a, i) &&
                                  (e.push(i.i / n),
                                  e.push(r.i / n),
                                  e.push(a.i / n),
                                  D(r),
                                  D(r.next),
                                  (r = t = a)),
                                  (r = r.next);
                              } while (r !== t);
                              return r;
                            })(e, n, r)),
                            n,
                            r,
                            i,
                            a,
                            s,
                            2
                          )
                        : 2 === h &&
                          (function (e, n, r, i, a, s) {
                            var h = e;
                            do {
                              for (var o, u, c = h.next.next; c !== h.prev; ) {
                                if (
                                  h.i !== c.i &&
                                  ((o = h),
                                  (u = c),
                                  o.next.i !== u.i &&
                                    o.prev.i !== u.i &&
                                    !(function (t, e) {
                                      var n = t;
                                      do {
                                        if (
                                          n.i !== t.i &&
                                          n.next.i !== t.i &&
                                          n.i !== e.i &&
                                          n.next.i !== e.i &&
                                          Y(n, n.next, t, e)
                                        )
                                          return !0;
                                        n = n.next;
                                      } while (n !== t);
                                      return !1;
                                    })(o, u) &&
                                    G(o, u) &&
                                    G(u, o) &&
                                    (function (t, e) {
                                      var n = t,
                                        r = !1,
                                        i = (t.x + e.x) / 2,
                                        a = (t.y + e.y) / 2;
                                      do
                                        n.y > a != n.next.y > a &&
                                          i <
                                            ((n.next.x - n.x) * (a - n.y)) /
                                              (n.next.y - n.y) +
                                              n.x &&
                                          (r = !r),
                                          (n = n.next);
                                      while (n !== t);
                                      return r;
                                    })(o, u))
                                ) {
                                  var f = N(h, c);
                                  return (
                                    (h = F(h, h.next)),
                                    (f = F(f, f.next)),
                                    t(h, n, r, i, a, s),
                                    void t(f, n, r, i, a, s)
                                  );
                                }
                                c = c.next;
                              }
                              h = h.next;
                            } while (h !== e);
                          })(e, n, r, i, a, s)
                      : t(F(e), n, r, i, a, s, 1);
                    break;
                  }
              }
            })(l, p, n, r, i, u),
            p
          );
        }
        function T(t, e, n, r, i) {
          var a, s;
          if (i === Q(t, e, n, r) > 0)
            for (a = e; a < n; a += r) s = O(a, t[a], t[a + 1], s);
          else for (a = n - r; a >= e; a -= r) s = O(a, t[a], t[a + 1], s);
          return s && X(s, s.next) && (D(s), (s = s.next)), s;
        }
        function F(t, e) {
          if (!t) return t;
          e || (e = t);
          var n,
            r = t;
          do
            if (
              ((n = !1),
              r.steiner || (!X(r, r.next) && 0 !== V(r.prev, r, r.next)))
            )
              r = r.next;
            else {
              if ((D(r), (r = e = r.prev) === r.next)) return null;
              n = !0;
            }
          while (n || r !== e);
          return e;
        }
        function z(t, e) {
          return t.x - e.x;
        }
        function j(t, e, n, r, i) {
          return (
            (t =
              0x55555555 &
              ((t =
                0x33333333 &
                ((t =
                  0xf0f0f0f &
                  ((t = 0xff00ff & ((t = (32767 * (t - n)) / i) | (t << 8))) |
                    (t << 4))) |
                  (t << 2))) |
                (t << 1))) |
            ((e =
              0x55555555 &
              ((e =
                0x33333333 &
                ((e =
                  0xf0f0f0f &
                  ((e = 0xff00ff & ((e = (32767 * (e - r)) / i) | (e << 8))) |
                    (e << 4))) |
                  (e << 2))) |
                (e << 1))) <<
              1)
          );
        }
        function I(t, e, n, r, i, a, s, h) {
          return (
            (i - s) * (e - h) - (t - s) * (a - h) >= 0 &&
            (t - s) * (r - h) - (n - s) * (e - h) >= 0 &&
            (n - s) * (a - h) - (i - s) * (r - h) >= 0
          );
        }
        function V(t, e, n) {
          return (e.y - t.y) * (n.x - e.x) - (e.x - t.x) * (n.y - e.y);
        }
        function X(t, e) {
          return t.x === e.x && t.y === e.y;
        }
        function Y(t, e, n, r) {
          return (
            !!((X(t, e) && X(n, r)) || (X(t, r) && X(n, e))) ||
            (V(t, e, n) > 0 != V(t, e, r) > 0 &&
              V(n, r, t) > 0 != V(n, r, e) > 0)
          );
        }
        function G(t, e) {
          return 0 > V(t.prev, t, t.next)
            ? V(t, e, t.next) >= 0 && V(t, t.prev, e) >= 0
            : 0 > V(t, e, t.prev) || 0 > V(t, t.next, e);
        }
        function N(t, e) {
          var n = new H(t.i, t.x, t.y),
            r = new H(e.i, e.x, e.y),
            i = t.next,
            a = e.prev;
          return (
            (t.next = e),
            (e.prev = t),
            (n.next = i),
            (i.prev = n),
            (r.next = n),
            (n.prev = r),
            (a.next = r),
            (r.prev = a),
            r
          );
        }
        function O(t, e, n, r) {
          var i = new H(t, e, n);
          return (
            r
              ? ((i.next = r.next),
                (i.prev = r),
                (r.next.prev = i),
                (r.next = i))
              : ((i.prev = i), (i.next = i)),
            i
          );
        }
        function D(t) {
          (t.next.prev = t.prev),
            (t.prev.next = t.next),
            t.prevZ && (t.prevZ.nextZ = t.nextZ),
            t.nextZ && (t.nextZ.prevZ = t.prevZ);
        }
        function H(t, e, n) {
          (this.i = t),
            (this.x = e),
            (this.y = n),
            (this.prev = null),
            (this.next = null),
            (this.z = null),
            (this.prevZ = null),
            (this.nextZ = null),
            (this.steiner = !1);
        }
        function Q(t, e, n, r) {
          for (var i = 0, a = e, s = n - r; a < n; a += r)
            (i += (t[s] - t[a]) * (t[a + 1] + t[s + 1])), (s = a);
          return i;
        }
        function U(t, e) {
          var n = e.id,
            r = e.bbox,
            i = null == e.properties ? {} : e.properties,
            a = R(t, e);
          return null == n && null == r
            ? { type: "Feature", properties: i, geometry: a }
            : null == r
            ? { type: "Feature", id: n, properties: i, geometry: a }
            : { type: "Feature", id: n, bbox: r, properties: i, geometry: a };
        }
        function R(t, e) {
          function n(t) {
            return s(t);
          }
          function r(t) {
            for (var e = [], n = 0, r = t.length; n < r; ++n)
              !(function (t, e) {
                e.length && e.pop();
                for (var n = h[t < 0 ? ~t : t], r = 0, i = n.length; r < i; ++r)
                  e.push(s(n[r], r));
                t < 0 && tS(e, i);
              })(t[n], e);
            return e.length < 2 && e.push(e[0]), e;
          }
          function i(t) {
            for (var e = r(t); e.length < 4; ) e.push(e[0]);
            return e;
          }
          function a(t) {
            return t.map(i);
          }
          var s = tC(t.transform),
            h = t.arcs;
          return (function t(e) {
            var i,
              s = e.type;
            switch (s) {
              case "GeometryCollection":
                return { type: s, geometries: e.geometries.map(t) };
              case "Point":
                i = n(e.coordinates);
                break;
              case "MultiPoint":
                i = e.coordinates.map(n);
                break;
              case "LineString":
                i = r(e.arcs);
                break;
              case "MultiLineString":
                i = e.arcs.map(r);
                break;
              case "Polygon":
                i = a(e.arcs);
                break;
              case "MultiPolygon":
                i = e.arcs.map(a);
                break;
              default:
                return null;
            }
            return { type: s, coordinates: i };
          })(e);
        }
        function B(t, e, n) {
          void 0 === n && (n = {});
          var r = n.maxSegmentLength;
          void 0 === r && (r = 10);
          var i = n.string;
          void 0 === i && (i = !0);
          var a = n.single;
          void 0 === a && (a = !1);
          var s = C(t, r);
          s.length < e.length + 2 && E(s, e.length + 2 - s.length);
          var h,
            o = tI(s, e.length),
            u = e.map(function (t) {
              return C(t, r);
            }),
            c = "string" == typeof t && t;
          return (
            (a &&
              !e.every(function (t) {
                return "string" == typeof t;
              })) ||
              (h = e.slice(0)),
            W(o, u, { match: !0, string: i, single: a, t0: c, t1: h })
          );
        }
        function W(t, e, n) {
          void 0 === n && (n = {});
          var r = n.string,
            i = n.single,
            a = n.t0,
            s = n.t1,
            h = n.match,
            o = h
              ? tV(t, e)
              : t.map(function (t, e) {
                  return e;
                }),
            u = o.map(function (n, i) {
              return S(t[n], e[i], r);
            });
          if (
            (h &&
              Array.isArray(a) &&
              (a = o.map(function (t) {
                return a[t];
              })),
            i &&
              r &&
              (Array.isArray(a) && (a = a.join(" ")),
              Array.isArray(s) && (s = s.join(" "))),
            i)
          ) {
            var c = r
              ? function (t) {
                  return u
                    .map(function (e) {
                      return e(t);
                    })
                    .join(" ");
                }
              : function (t) {
                  return u.map(function (e) {
                    return e(t);
                  });
                };
            return r && (a || s)
              ? function (t) {
                  return (t < 1e-4 && a) || (1 - t < 1e-4 && s) || c(t);
                }
              : c;
          }
          return r
            ? ((a = Array.isArray(a)
                ? a.map(function (t) {
                    return "string" == typeof t && t;
                  })
                : []),
              (s = Array.isArray(s)
                ? s.map(function (t) {
                    return "string" == typeof t && t;
                  })
                : []),
              u.map(function (t, e) {
                return a[e] || s[e]
                  ? function (n) {
                      return (
                        (n < 1e-4 && a[e]) || (1 - n < 1e-4 && s[e]) || t(n)
                      );
                    }
                  : t;
              }))
            : u;
        }
        function $(t, e, n, r, i) {
          var a, s, h, o, u, c, f, l;
          return K(
            ((a = t),
            (s = e),
            (h = n),
            function (t) {
              var e = k(t),
                n = tn(t.concat([t[0]])),
                r = Math.atan2(t[0][1] - e[1], t[0][0] - e[0]),
                i = 0;
              return t.map(function (e, o) {
                var u;
                return (
                  o && (i += w(e, t[o - 1])),
                  [
                    Math.cos(
                      (u = r + 2 * Math.PI * (n ? i / n : o / t.length))
                    ) *
                      h +
                      a,
                    Math.sin(u) * h + s,
                  ]
                );
              });
            }),
            r,
            ((o = t),
            (u = e),
            (f = o - (c = n) + "," + u),
            "M" +
              f +
              (l = "A" + c + "," + c + ",0,1,1,") +
              (o + c) +
              "," +
              u +
              l +
              f +
              "Z"),
            2 * Math.PI * n,
            i
          );
        }
        function J(t, e, n, r, i, a) {
          var s, h, o, u, c, f, l, p, g, v;
          return K(
            ((s = t),
            (h = e),
            (o = n),
            (u = r),
            function (t) {
              var e = k(t),
                n = tn(t.concat([t[0]])),
                r = Math.atan2(t[0][1] - e[1], t[0][0] - e[0]),
                i = 0;
              r < 0 && (r = 2 * Math.PI + r);
              var a = r / (2 * Math.PI);
              return t.map(function (e, r) {
                r && (i += w(e, t[r - 1]));
                var c,
                  f =
                    (c = (a + (n ? i / n : r / t.length)) % 1) <= 1 / 8
                      ? [1, 0.5 + 4 * c]
                      : c <= 3 / 8
                      ? [1.5 - 4 * c, 1]
                      : c <= 5 / 8
                      ? [0, 2.5 - 4 * c]
                      : c <= 7 / 8
                      ? [4 * c - 2.5, 0]
                      : [1, 4 * c - 3.5];
                return [s + f[0] * o, h + f[1] * u];
              });
            }),
            i,
            ((c = t),
            (f = e),
            (l = n),
            (p = r),
            (g = c + l),
            (v = f + p),
            "M" +
              c +
              "," +
              f +
              "L" +
              g +
              "," +
              f +
              "L" +
              g +
              "," +
              v +
              "L" +
              c +
              "," +
              v +
              "Z"),
            2 * n + 2 * r,
            a
          );
        }
        function K(t, e, n, r, i) {
          void 0 === i && (i = {});
          var a = i.maxSegmentLength;
          void 0 === a && (a = 10);
          var s = i.string;
          void 0 === s && (s = !0);
          var h,
            o = C(e, a);
          return (
            A(r) && o.length < r / a && E(o, Math.ceil(r / a - o.length)),
            (h = L(t(o), o, s)),
            s
              ? function (t) {
                  return t < 1e-4 ? n : h(t);
                }
              : h
          );
        }
        var tt = function (t) {
            for (var e, n = -1, r = t.length, i = t[r - 1], a = 0; ++n < r; )
              (e = i), (i = t[n]), (a += e[1] * i[0] - e[0] * i[1]);
            return a / 2;
          },
          te = function (t) {
            for (
              var e, n, r = -1, i = t.length, a = 0, s = 0, h = t[i - 1], o = 0;
              ++r < i;

            )
              (e = h),
                (h = t[r]),
                (o += n = e[0] * h[1] - h[0] * e[1]),
                (a += (e[0] + h[0]) * n),
                (s += (e[1] + h[1]) * n);
            return [a / (o *= 3), s / o];
          },
          tn = function (t) {
            for (
              var e,
                n,
                r = -1,
                i = t.length,
                a = t[i - 1],
                s = a[0],
                h = a[1],
                o = 0;
              ++r < i;

            )
              (e = s),
                (n = h),
                (s = (a = t[r])[0]),
                (h = a[1]),
                (e -= s),
                (n -= h),
                (o += Math.sqrt(e * e + n * n));
            return o;
          },
          tr = {
            a: 7,
            c: 6,
            h: 1,
            l: 2,
            m: 2,
            r: 4,
            q: 4,
            s: 4,
            t: 2,
            v: 1,
            z: 0,
          },
          ti = [
            5760, 6158, 8192, 8193, 8194, 8195, 8196, 8197, 8198, 8199, 8200,
            8201, 8202, 8239, 8287, 12288, 65279,
          ],
          ta = function (t) {
            var a = new n(t),
              s = a.max;
            for (r(a); a.index < s && !a.err.length; )
              !(function (t) {
                var n,
                  a,
                  s,
                  h,
                  o = t.max;
                if (
                  ((t.segmentStart = t.index),
                  !(function (t) {
                    switch (32 | t) {
                      case 109:
                      case 122:
                      case 108:
                      case 104:
                      case 118:
                      case 99:
                      case 115:
                      case 113:
                      case 116:
                      case 97:
                      case 114:
                        return !0;
                    }
                    return !1;
                  })(t.path.charCodeAt(t.index)))
                )
                  return (t.err =
                    "SvgPath: bad command " +
                    t.path[t.index] +
                    " (at pos " +
                    t.index +
                    ")");
                if (
                  ((s = tr[t.path[t.index].toLowerCase()]),
                  t.index++,
                  r(t),
                  (t.data = []),
                  !s)
                )
                  return i(t);
                for (a = !1; ; ) {
                  for (h = s; h > 0; h--) {
                    if (
                      ((function (t) {
                        var n,
                          r = t.index,
                          i = r,
                          a = t.max,
                          s = !1,
                          h = !1,
                          o = !1,
                          u = !1;
                        if (i >= a)
                          return (t.err =
                            "SvgPath: missed param (at pos " + i + ")");
                        if (
                          ((43 !== (n = t.path.charCodeAt(i)) && 45 !== n) ||
                            (n = ++i < a ? t.path.charCodeAt(i) : 0),
                          !e(n) && 46 !== n)
                        )
                          return (t.err =
                            "SvgPath: param should start with 0..9 or `.` (at pos " +
                            i +
                            ")");
                        if (46 !== n) {
                          if (
                            ((s = 48 === n),
                            (n = ++i < a ? t.path.charCodeAt(i) : 0),
                            s && i < a && n && e(n))
                          )
                            return (t.err =
                              "SvgPath: numbers started with `0` such as `09` are ilegal (at pos " +
                              r +
                              ")");
                          for (; i < a && e(t.path.charCodeAt(i)); )
                            i++, (h = !0);
                          n = i < a ? t.path.charCodeAt(i) : 0;
                        }
                        if (46 === n) {
                          for (u = !0, i++; e(t.path.charCodeAt(i)); )
                            i++, (o = !0);
                          n = i < a ? t.path.charCodeAt(i) : 0;
                        }
                        if (101 === n || 69 === n) {
                          if (
                            (u && !h && !o) ||
                            ((43 !== (n = ++i < a ? t.path.charCodeAt(i) : 0) &&
                              45 !== n) ||
                              i++,
                            !(i < a && e(t.path.charCodeAt(i))))
                          )
                            return (t.err =
                              "SvgPath: invalid float exponent (at pos " +
                              i +
                              ")");
                          for (; i < a && e(t.path.charCodeAt(i)); ) i++;
                        }
                        (t.index = i),
                          (t.param = parseFloat(t.path.slice(r, i)) + 0);
                      })(t),
                      t.err.length)
                    )
                      return;
                    t.data.push(t.param),
                      r(t),
                      (a = !1),
                      t.index < o &&
                        44 === t.path.charCodeAt(t.index) &&
                        (t.index++, r(t), (a = !0));
                  }
                  if (
                    !a &&
                    (t.index >= t.max ||
                      !(
                        ((n = t.path.charCodeAt(t.index)) >= 48 && n <= 57) ||
                        43 === n ||
                        45 === n ||
                        46 === n
                      ))
                  )
                    break;
                }
                i(t);
              })(a);
            return (
              a.err.length
                ? (a.result = [])
                : a.result.length &&
                  (0 > "mM".indexOf(a.result[0][0])
                    ? ((a.err = "SvgPath: string should start with `M` or `m`"),
                      (a.result = []))
                    : (a.result[0][0] = "M")),
              { err: a.err, segments: a.result }
            );
          };
        (a.prototype.matrix = function (t) {
          return (
            (1 === t[0] &&
              0 === t[1] &&
              0 === t[2] &&
              1 === t[3] &&
              0 === t[4] &&
              0 === t[5]) ||
              ((this.cache = null), this.queue.push(t)),
            this
          );
        }),
          (a.prototype.translate = function (t, e) {
            return (
              (0 === t && 0 === e) ||
                ((this.cache = null), this.queue.push([1, 0, 0, 1, t, e])),
              this
            );
          }),
          (a.prototype.scale = function (t, e) {
            return (
              (1 === t && 1 === e) ||
                ((this.cache = null), this.queue.push([t, 0, 0, e, 0, 0])),
              this
            );
          }),
          (a.prototype.rotate = function (t, e, n) {
            var r, i, a;
            return (
              0 !== t &&
                (this.translate(e, n),
                (i = Math.cos((r = (t * Math.PI) / 180))),
                (a = Math.sin(r)),
                this.queue.push([i, a, -a, i, 0, 0]),
                (this.cache = null),
                this.translate(-e, -n)),
              this
            );
          }),
          (a.prototype.skewX = function (t) {
            return (
              0 !== t &&
                ((this.cache = null),
                this.queue.push([
                  1,
                  0,
                  Math.tan((t * Math.PI) / 180),
                  1,
                  0,
                  0,
                ])),
              this
            );
          }),
          (a.prototype.skewY = function (t) {
            return (
              0 !== t &&
                ((this.cache = null),
                this.queue.push([
                  1,
                  Math.tan((t * Math.PI) / 180),
                  0,
                  1,
                  0,
                  0,
                ])),
              this
            );
          }),
          (a.prototype.toArray = function () {
            if (this.cache) return this.cache;
            if (!this.queue.length)
              return (this.cache = [1, 0, 0, 1, 0, 0]), this.cache;
            if (((this.cache = this.queue[0]), 1 === this.queue.length))
              return this.cache;
            for (var t, e, n = 1; n < this.queue.length; n++)
              this.cache =
                ((t = this.cache),
                (e = this.queue[n]),
                [
                  t[0] * e[0] + t[2] * e[1],
                  t[1] * e[0] + t[3] * e[1],
                  t[0] * e[2] + t[2] * e[3],
                  t[1] * e[2] + t[3] * e[3],
                  t[0] * e[4] + t[2] * e[5] + t[4],
                  t[1] * e[4] + t[3] * e[5] + t[5],
                ]);
            return this.cache;
          }),
          (a.prototype.calc = function (t, e, n) {
            var r;
            return this.queue.length
              ? (this.cache || (this.cache = this.toArray()),
                [
                  t * (r = this.cache)[0] + e * r[2] + (n ? 0 : r[4]),
                  t * r[1] + e * r[3] + (n ? 0 : r[5]),
                ])
              : [t, e];
          });
        var ts = {
            matrix: !0,
            scale: !0,
            rotate: !0,
            translate: !0,
            skewX: !0,
            skewY: !0,
          },
          th =
            /\s*(matrix|translate|scale|rotate|skewX|skewY)\s*\(\s*(.+?)\s*\)[\s,]*/,
          to = /[\s,]+/,
          tu = function (t) {
            var e,
              n,
              r = new a();
            return (
              t.split(th).forEach(function (t) {
                if (t.length) {
                  if (void 0 !== ts[t]) return void (e = t);
                  switch (
                    ((n = t.split(to).map(function (t) {
                      return +t || 0;
                    })),
                    e)
                  ) {
                    case "matrix":
                      return void (6 === n.length && r.matrix(n));
                    case "scale":
                      return void (1 === n.length
                        ? r.scale(n[0], n[0])
                        : 2 === n.length && r.scale(n[0], n[1]));
                    case "rotate":
                      return void (1 === n.length
                        ? r.rotate(n[0], 0, 0)
                        : 3 === n.length && r.rotate(n[0], n[1], n[2]));
                    case "translate":
                      return void (1 === n.length
                        ? r.translate(n[0], 0)
                        : 2 === n.length && r.translate(n[0], n[1]));
                    case "skewX":
                      return void (1 === n.length && r.skewX(n[0]));
                    case "skewY":
                      return void (1 === n.length && r.skewY(n[0]));
                  }
                }
              }),
              r
            );
          },
          tc = 2 * Math.PI,
          tf = function (t, e, n, r, i, a, h, o, u) {
            var c,
              f,
              l,
              p,
              g,
              v,
              x,
              y,
              d,
              m,
              M,
              w,
              b,
              L,
              A,
              k = Math.sin((u * tc) / 360),
              q = Math.cos((u * tc) / 360),
              _ = (q * (t - n)) / 2 + (k * (e - r)) / 2,
              P = (-k * (t - n)) / 2 + (q * (e - r)) / 2;
            if ((0 === _ && 0 === P) || 0 === h || 0 === o) return [];
            var E =
              (_ * _) / ((h = Math.abs(h)) * h) +
              (P * P) / ((o = Math.abs(o)) * o);
            E > 1 && ((h *= Math.sqrt(E)), (o *= Math.sqrt(E)));
            var C =
                ((c = h),
                (f = o),
                (l = (q * (t - n)) / 2 + (k * (e - r)) / 2),
                (p = (-k * (t - n)) / 2 + (q * (e - r)) / 2),
                (g = c * c),
                (v = f * f),
                (x = l * l),
                (d = g * v - g * (y = p * p) - v * x) < 0 && (d = 0),
                (d /= g * y + v * x),
                (m = (((d = Math.sqrt(d) * (i === a ? -1 : 1)) * c) / f) * p),
                (M = (-(d * f) / c) * l),
                (L = s(1, 0, (w = (l - m) / c), (b = (p - M) / f))),
                (A = s(w, b, (-l - m) / c, (-p - M) / f)),
                0 === a && A > 0 && (A -= tc),
                1 === a && A < 0 && (A += tc),
                [
                  q * m - k * M + (t + n) / 2,
                  k * m + q * M + (e + r) / 2,
                  L,
                  A,
                ]),
              S = [],
              Z = C[2],
              T = C[3],
              F = Math.max(Math.ceil(Math.abs(T) / (tc / 4)), 1);
            T /= F;
            for (var z = 0; z < F; z++)
              S.push(
                (function (t, e) {
                  var n = (4 / 3) * Math.tan(e / 4),
                    r = Math.cos(t),
                    i = Math.sin(t),
                    a = Math.cos(t + e),
                    s = Math.sin(t + e);
                  return [
                    r,
                    i,
                    r - i * n,
                    i + r * n,
                    a + s * n,
                    s - a * n,
                    a,
                    s,
                  ];
                })(Z, T)
              ),
                (Z += T);
            return S.map(function (t) {
              for (var e = 0; e < t.length; e += 2) {
                var n = t[e + 0],
                  r = t[e + 1],
                  i = q * (n *= h) - k * (r *= o),
                  a = k * n + q * r;
                (t[e + 0] = i + C[0]), (t[e + 1] = a + C[1]);
              }
              return t;
            });
          },
          tl = Math.PI / 180;
        (h.prototype.transform = function (t) {
          var e = Math.cos(this.ax * tl),
            n = Math.sin(this.ax * tl),
            r = [
              this.rx * (t[0] * e + t[2] * n),
              this.rx * (t[1] * e + t[3] * n),
              this.ry * (-t[0] * n + t[2] * e),
              this.ry * (-t[1] * n + t[3] * e),
            ],
            i = r[0] * r[0] + r[2] * r[2],
            a = r[1] * r[1] + r[3] * r[3],
            s =
              ((r[0] - r[3]) * (r[0] - r[3]) + (r[2] + r[1]) * (r[2] + r[1])) *
              ((r[0] + r[3]) * (r[0] + r[3]) + (r[2] - r[1]) * (r[2] - r[1])),
            h = (i + a) / 2;
          if (s < 1e-10 * h)
            return (this.rx = this.ry = Math.sqrt(h)), (this.ax = 0), this;
          var o = r[0] * r[1] + r[2] * r[3],
            u = h + (s = Math.sqrt(s)) / 2,
            c = h - s / 2;
          return (
            (this.ax =
              1e-10 > Math.abs(o) && 1e-10 > Math.abs(u - a)
                ? 90
                : (180 *
                    Math.atan(
                      Math.abs(o) > Math.abs(u - a) ? (u - i) / o : o / (u - a)
                    )) /
                  Math.PI),
            this.ax >= 0
              ? ((this.rx = Math.sqrt(u)), (this.ry = Math.sqrt(c)))
              : ((this.ax += 90),
                (this.rx = Math.sqrt(c)),
                (this.ry = Math.sqrt(u))),
            this
          );
        }),
          (h.prototype.isDegenerate = function () {
            return this.rx < 1e-10 * this.ry || this.ry < 1e-10 * this.rx;
          }),
          (o.prototype.__matrix = function (t) {
            var e,
              n = this;
            t.queue.length &&
              this.iterate(function (r, i, a, s) {
                var o, u, c, f;
                switch (r[0]) {
                  case "v":
                    u =
                      0 === (o = t.calc(0, r[1], !0))[0]
                        ? ["v", o[1]]
                        : ["l", o[0], o[1]];
                    break;
                  case "V":
                    u =
                      (o = t.calc(a, r[1], !1))[0] === t.calc(a, s, !1)[0]
                        ? ["V", o[1]]
                        : ["L", o[0], o[1]];
                    break;
                  case "h":
                    u =
                      0 === (o = t.calc(r[1], 0, !0))[1]
                        ? ["h", o[0]]
                        : ["l", o[0], o[1]];
                    break;
                  case "H":
                    u =
                      (o = t.calc(r[1], s, !1))[1] === t.calc(a, s, !1)[1]
                        ? ["H", o[0]]
                        : ["L", o[0], o[1]];
                    break;
                  case "a":
                  case "A":
                    var l = t.toArray(),
                      p = h(r[1], r[2], r[3]).transform(l);
                    if (
                      (l[0] * l[3] - l[1] * l[2] < 0 &&
                        (r[5] = r[5] ? "0" : "1"),
                      (o = t.calc(r[6], r[7], "a" === r[0])),
                      ("A" === r[0] && r[6] === a && r[7] === s) ||
                        ("a" === r[0] && 0 === r[6] && 0 === r[7]))
                    ) {
                      u = ["a" === r[0] ? "l" : "L", o[0], o[1]];
                      break;
                    }
                    u = p.isDegenerate()
                      ? ["a" === r[0] ? "l" : "L", o[0], o[1]]
                      : [r[0], p.rx, p.ry, p.ax, r[4], r[5], o[0], o[1]];
                    break;
                  case "m":
                    (f = i > 0),
                      (u = ["m", (o = t.calc(r[1], r[2], f))[0], o[1]]);
                    break;
                  default:
                    for (
                      u = [(c = r[0])], f = c.toLowerCase() === c, e = 1;
                      e < r.length;
                      e += 2
                    )
                      (o = t.calc(r[e], r[e + 1], f)), u.push(o[0], o[1]);
                }
                n.segments[i] = u;
              }, !0);
          }),
          (o.prototype.__evaluateStack = function () {
            var t, e;
            if (this.__stack.length) {
              if (1 === this.__stack.length)
                return this.__matrix(this.__stack[0]), void (this.__stack = []);
              for (t = a(), e = this.__stack.length; --e >= 0; )
                t.matrix(this.__stack[e].toArray());
              this.__matrix(t), (this.__stack = []);
            }
          }),
          (o.prototype.toString = function () {
            var t,
              e,
              n = [];
            this.__evaluateStack();
            for (var r = 0; r < this.segments.length; r++)
              (e = this.segments[r][0]),
                (t =
                  r > 0 &&
                  "m" !== e &&
                  "M" !== e &&
                  e === this.segments[r - 1][0]),
                (n = n.concat(
                  t ? this.segments[r].slice(1) : this.segments[r]
                ));
            return n
              .join(" ")
              .replace(/ ?([achlmqrstvz]) ?/gi, "$1")
              .replace(/ \-/g, "-")
              .replace(/zm/g, "z m");
          }),
          (o.prototype.translate = function (t, e) {
            return this.__stack.push(a().translate(t, e || 0)), this;
          }),
          (o.prototype.scale = function (t, e) {
            return this.__stack.push(a().scale(t, e || 0 === e ? e : t)), this;
          }),
          (o.prototype.rotate = function (t, e, n) {
            return this.__stack.push(a().rotate(t, e || 0, n || 0)), this;
          }),
          (o.prototype.skewX = function (t) {
            return this.__stack.push(a().skewX(t)), this;
          }),
          (o.prototype.skewY = function (t) {
            return this.__stack.push(a().skewY(t)), this;
          }),
          (o.prototype.matrix = function (t) {
            return this.__stack.push(a().matrix(t)), this;
          }),
          (o.prototype.transform = function (t) {
            return t.trim() && this.__stack.push(tu(t)), this;
          }),
          (o.prototype.round = function (t) {
            var e,
              n = 0,
              r = 0,
              i = 0,
              a = 0;
            return (
              (t = t || 0),
              this.__evaluateStack(),
              this.segments.forEach(function (s) {
                var h = s[0].toLowerCase() === s[0];
                switch (s[0]) {
                  case "H":
                  case "h":
                    return (
                      h && (s[1] += i),
                      (i = s[1] - s[1].toFixed(t)),
                      void (s[1] = +s[1].toFixed(t))
                    );
                  case "V":
                  case "v":
                    return (
                      h && (s[1] += a),
                      (a = s[1] - s[1].toFixed(t)),
                      void (s[1] = +s[1].toFixed(t))
                    );
                  case "Z":
                  case "z":
                    return (i = n), void (a = r);
                  case "M":
                  case "m":
                    return (
                      h && ((s[1] += i), (s[2] += a)),
                      (i = s[1] - s[1].toFixed(t)),
                      (a = s[2] - s[2].toFixed(t)),
                      (n = i),
                      (r = a),
                      (s[1] = +s[1].toFixed(t)),
                      void (s[2] = +s[2].toFixed(t))
                    );
                  case "A":
                  case "a":
                    return (
                      h && ((s[6] += i), (s[7] += a)),
                      (i = s[6] - s[6].toFixed(t)),
                      (a = s[7] - s[7].toFixed(t)),
                      (s[1] = +s[1].toFixed(t)),
                      (s[2] = +s[2].toFixed(t)),
                      (s[3] = +s[3].toFixed(t + 2)),
                      (s[6] = +s[6].toFixed(t)),
                      void (s[7] = +s[7].toFixed(t))
                    );
                  default:
                    return (
                      (e = s.length),
                      h && ((s[e - 2] += i), (s[e - 1] += a)),
                      (i = s[e - 2] - s[e - 2].toFixed(t)),
                      (a = s[e - 1] - s[e - 1].toFixed(t)),
                      void s.forEach(function (e, n) {
                        n && (s[n] = +s[n].toFixed(t));
                      })
                    );
                }
              }),
              this
            );
          }),
          (o.prototype.iterate = function (t, e) {
            var n,
              r,
              i,
              a = this.segments,
              s = {},
              h = !1,
              o = 0,
              u = 0,
              c = 0,
              f = 0;
            if (
              (e || this.__evaluateStack(),
              a.forEach(function (e, n) {
                var r = t(e, n, o, u);
                Array.isArray(r) && ((s[n] = r), (h = !0));
                var i = e[0] === e[0].toLowerCase();
                switch (e[0]) {
                  case "m":
                  case "M":
                    return (
                      (o = e[1] + (i ? o : 0)),
                      (u = e[2] + (i ? u : 0)),
                      (c = o),
                      void (f = u)
                    );
                  case "h":
                  case "H":
                    return void (o = e[1] + (i ? o : 0));
                  case "v":
                  case "V":
                    return void (u = e[1] + (i ? u : 0));
                  case "z":
                  case "Z":
                    return (o = c), void (u = f);
                  default:
                    (o = e[e.length - 2] + (i ? o : 0)),
                      (u = e[e.length - 1] + (i ? u : 0));
                }
              }),
              !h)
            )
              return this;
            for (i = [], n = 0; n < a.length; n++)
              if (void 0 !== s[n])
                for (r = 0; r < s[n].length; r++) i.push(s[n][r]);
              else i.push(a[n]);
            return (this.segments = i), this;
          }),
          (o.prototype.abs = function () {
            return (
              this.iterate(function (t, e, n, r) {
                var i,
                  a = t[0],
                  s = a.toUpperCase();
                if (a !== s)
                  switch (((t[0] = s), a)) {
                    case "v":
                      return void (t[1] += r);
                    case "a":
                      return (t[6] += n), void (t[7] += r);
                    default:
                      for (i = 1; i < t.length; i++) t[i] += i % 2 ? n : r;
                  }
              }, !0),
              this
            );
          }),
          (o.prototype.rel = function () {
            return (
              this.iterate(function (t, e, n, r) {
                var i,
                  a = t[0],
                  s = a.toLowerCase();
                if (a !== s && (0 !== e || "M" !== a))
                  switch (((t[0] = s), a)) {
                    case "V":
                      return void (t[1] -= r);
                    case "A":
                      return (t[6] -= n), void (t[7] -= r);
                    default:
                      for (i = 1; i < t.length; i++) t[i] -= i % 2 ? n : r;
                  }
              }, !0),
              this
            );
          }),
          (o.prototype.unarc = function () {
            return (
              this.iterate(function (t, e, n, r) {
                var i,
                  a,
                  s,
                  h = [],
                  o = t[0];
                return "A" !== o && "a" !== o
                  ? null
                  : ("a" === o
                      ? ((a = n + t[6]), (s = r + t[7]))
                      : ((a = t[6]), (s = t[7])),
                    0 ===
                    (i = tf(n, r, a, s, t[4], t[5], t[1], t[2], t[3])).length
                      ? [["a" === t[0] ? "l" : "L", t[6], t[7]]]
                      : (i.forEach(function (t) {
                          h.push(["C", t[2], t[3], t[4], t[5], t[6], t[7]]);
                        }),
                        h));
              }),
              this
            );
          }),
          (o.prototype.unshort = function () {
            var t,
              e,
              n,
              r,
              i,
              a = this.segments;
            return (
              this.iterate(function (s, h, o, u) {
                var c,
                  f = s[0],
                  l = f.toUpperCase();
                h &&
                  ("T" === l
                    ? ((c = "t" === f),
                      "Q" === (n = a[h - 1])[0]
                        ? ((t = n[1] - o), (e = n[2] - u))
                        : "q" === n[0]
                        ? ((t = n[1] - n[3]), (e = n[2] - n[4]))
                        : ((t = 0), (e = 0)),
                      (r = -t),
                      (i = -e),
                      c || ((r += o), (i += u)),
                      (a[h] = [c ? "q" : "Q", r, i, s[1], s[2]]))
                    : "S" === l &&
                      ((c = "s" === f),
                      "C" === (n = a[h - 1])[0]
                        ? ((t = n[3] - o), (e = n[4] - u))
                        : "c" === n[0]
                        ? ((t = n[3] - n[5]), (e = n[4] - n[6]))
                        : ((t = 0), (e = 0)),
                      (r = -t),
                      (i = -e),
                      c || ((r += o), (i += u)),
                      (a[h] = [c ? "c" : "C", r, i, s[1], s[2], s[3], s[4]])));
              }),
              this
            );
          });
        var tp = o,
          tg = { a: 7, c: 6, h: 1, l: 2, m: 2, q: 4, s: 4, t: 2, v: 1, z: 0 },
          tv = /([astvzqmhlc])([^astvzqmhlc]*)/gi,
          tx = function (t) {
            var e = [];
            return (
              t.replace(tv, function (t, n, r) {
                var i,
                  a = n.toLowerCase();
                for (
                  r = (i = r.match(ty)) ? i.map(Number) : [],
                    "m" === a &&
                      r.length > 2 &&
                      (e.push([n].concat(r.splice(0, 2))),
                      (a = "l"),
                      (n = "m" === n ? "l" : "L"));
                  r.length >= 0;

                ) {
                  if (r.length === tg[a]) return r.unshift(n), e.push(r);
                  if (r.length < tg[a]) throw Error("malformed path data");
                  e.push([n].concat(r.splice(0, tg[a])));
                }
              }),
              e
            );
          },
          ty = /-?[0-9]*\.?[0-9]+(?:e[-+]?\d+)?/gi,
          td = function (t, e, n, r, i, a, s, h) {
            return new u(t, e, n, r, i, a, s, h);
          };
        u.prototype = {
          constructor: u,
          init: function () {
            this.length = this.getArcLength(
              [this.a.x, this.b.x, this.c.x, this.d.x],
              [this.a.y, this.b.y, this.c.y, this.d.y]
            );
          },
          getTotalLength: function () {
            return this.length;
          },
          getPointAtLength: function (t) {
            var e = l(
              t,
              this.length,
              this.getArcLength,
              [this.a.x, this.b.x, this.c.x, this.d.x],
              [this.a.y, this.b.y, this.c.y, this.d.y]
            );
            return this.getPoint(
              [this.a.x, this.b.x, this.c.x, this.d.x],
              [this.a.y, this.b.y, this.c.y, this.d.y],
              e
            );
          },
          getTangentAtLength: function (t) {
            var e = l(
                t,
                this.length,
                this.getArcLength,
                [this.a.x, this.b.x, this.c.x, this.d.x],
                [this.a.y, this.b.y, this.c.y, this.d.y]
              ),
              n = this.getDerivative(
                [this.a.x, this.b.x, this.c.x, this.d.x],
                [this.a.y, this.b.y, this.c.y, this.d.y],
                e
              ),
              r = Math.sqrt(n.x * n.x + n.y * n.y);
            return r > 0 ? { x: n.x / r, y: n.y / r } : { x: 0, y: 0 };
          },
          getPropertiesAtLength: function (t) {
            var e,
              n = l(
                t,
                this.length,
                this.getArcLength,
                [this.a.x, this.b.x, this.c.x, this.d.x],
                [this.a.y, this.b.y, this.c.y, this.d.y]
              ),
              r = this.getDerivative(
                [this.a.x, this.b.x, this.c.x, this.d.x],
                [this.a.y, this.b.y, this.c.y, this.d.y],
                n
              ),
              i = Math.sqrt(r.x * r.x + r.y * r.y);
            e = i > 0 ? { x: r.x / i, y: r.y / i } : { x: 0, y: 0 };
            var a = this.getPoint(
              [this.a.x, this.b.x, this.c.x, this.d.x],
              [this.a.y, this.b.y, this.c.y, this.d.y],
              n
            );
            return { x: a.x, y: a.y, tangentX: e.x, tangentY: e.y };
          },
        };
        var tm = [
            [],
            [],
            [-0.5773502691896257, 0.5773502691896257],
            [0, -0.7745966692414834, 0.7745966692414834],
            [
              -0.33998104358485626, 0.33998104358485626, -0.8611363115940526,
              0.8611363115940526,
            ],
            [
              0, -0.5384693101056831, 0.5384693101056831, -0.906179845938664,
              0.906179845938664,
            ],
            [
              0.6612093864662645, -0.6612093864662645, -0.2386191860831969,
              0.2386191860831969, -0.932469514203152, 0.932469514203152,
            ],
            [
              0, 0.4058451513773972, -0.4058451513773972, -0.7415311855993945,
              0.7415311855993945, -0.9491079123427585, 0.9491079123427585,
            ],
            [
              -0.1834346424956498, 0.1834346424956498, -0.525532409916329,
              0.525532409916329, -0.7966664774136267, 0.7966664774136267,
              -0.9602898564975363, 0.9602898564975363,
            ],
            [
              0, -0.8360311073266358, 0.8360311073266358, -0.9681602395076261,
              0.9681602395076261, -0.3242534234038089, 0.3242534234038089,
              -0.6133714327005904, 0.6133714327005904,
            ],
            [
              -0.14887433898163122, 0.14887433898163122, -0.4333953941292472,
              0.4333953941292472, -0.6794095682990244, 0.6794095682990244,
              -0.8650633666889845, 0.8650633666889845, -0.9739065285171717,
              0.9739065285171717,
            ],
            [
              0, -0.26954315595234496, 0.26954315595234496, -0.5190961292068118,
              0.5190961292068118, -0.7301520055740494, 0.7301520055740494,
              -0.8870625997680953, 0.8870625997680953, -0.978228658146057,
              0.978228658146057,
            ],
            [
              -0.1252334085114689, 0.1252334085114689, -0.3678314989981802,
              0.3678314989981802, -0.5873179542866175, 0.5873179542866175,
              -0.7699026741943047, 0.7699026741943047, -0.9041172563704749,
              0.9041172563704749, -0.9815606342467192, 0.9815606342467192,
            ],
            [
              0, -0.2304583159551348, 0.2304583159551348, -0.44849275103644687,
              0.44849275103644687, -0.6423493394403402, 0.6423493394403402,
              -0.8015780907333099, 0.8015780907333099, -0.9175983992229779,
              0.9175983992229779, -0.9841830547185881, 0.9841830547185881,
            ],
            [
              -0.10805494870734367, 0.10805494870734367, -0.31911236892788974,
              0.31911236892788974, -0.5152486363581541, 0.5152486363581541,
              -0.6872929048116855, 0.6872929048116855, -0.827201315069765,
              0.827201315069765, -0.9284348836635735, 0.9284348836635735,
              -0.9862838086968123, 0.9862838086968123,
            ],
            [
              0, -0.20119409399743451, 0.20119409399743451, -0.3941513470775634,
              0.3941513470775634, -0.5709721726085388, 0.5709721726085388,
              -0.7244177313601701, 0.7244177313601701, -0.8482065834104272,
              0.8482065834104272, -0.937273392400706, 0.937273392400706,
              -0.9879925180204854, 0.9879925180204854,
            ],
            [
              -0.09501250983763744, 0.09501250983763744, -0.2816035507792589,
              0.2816035507792589, -0.45801677765722737, 0.45801677765722737,
              -0.6178762444026438, 0.6178762444026438, -0.755404408355003,
              0.755404408355003, -0.8656312023878318, 0.8656312023878318,
              -0.9445750230732326, 0.9445750230732326, -0.9894009349916499,
              0.9894009349916499,
            ],
            [
              0, -0.17848418149584785, 0.17848418149584785, -0.3512317634538763,
              0.3512317634538763, -0.5126905370864769, 0.5126905370864769,
              -0.6576711592166907, 0.6576711592166907, -0.7815140038968014,
              0.7815140038968014, -0.8802391537269859, 0.8802391537269859,
              -0.9506755217687678, 0.9506755217687678, -0.9905754753144174,
              0.9905754753144174,
            ],
            [
              -0.0847750130417353, 0.0847750130417353, -0.2518862256915055,
              0.2518862256915055, -0.41175116146284263, 0.41175116146284263,
              -0.5597708310739475, 0.5597708310739475, -0.6916870430603532,
              0.6916870430603532, -0.8037049589725231, 0.8037049589725231,
              -0.8926024664975557, 0.8926024664975557, -0.9558239495713977,
              0.9558239495713977, -0.9915651684209309, 0.9915651684209309,
            ],
            [
              0, -0.16035864564022537, 0.16035864564022537,
              -0.31656409996362983, 0.31656409996362983, -0.46457074137596094,
              0.46457074137596094, -0.600545304661681, 0.600545304661681,
              -0.7209661773352294, 0.7209661773352294, -0.8227146565371428,
              0.8227146565371428, -0.9031559036148179, 0.9031559036148179,
              -0.96020815213483, 0.96020815213483, -0.9924068438435844,
              0.9924068438435844,
            ],
            [
              -0.07652652113349734, 0.07652652113349734, -0.22778585114164507,
              0.22778585114164507, -0.37370608871541955, 0.37370608871541955,
              -0.5108670019508271, 0.5108670019508271, -0.636053680726515,
              0.636053680726515, -0.7463319064601508, 0.7463319064601508,
              -0.8391169718222188, 0.8391169718222188, -0.912234428251326,
              0.912234428251326, -0.9639719272779138, 0.9639719272779138,
              -0.9931285991850949, 0.9931285991850949,
            ],
            [
              0, -0.1455618541608951, 0.1455618541608951, -0.2880213168024011,
              0.2880213168024011, -0.4243421202074388, 0.4243421202074388,
              -0.5516188358872198, 0.5516188358872198, -0.6671388041974123,
              0.6671388041974123, -0.7684399634756779, 0.7684399634756779,
              -0.8533633645833173, 0.8533633645833173, -0.9200993341504008,
              0.9200993341504008, -0.9672268385663063, 0.9672268385663063,
              -0.9937521706203895, 0.9937521706203895,
            ],
            [
              -0.06973927331972223, 0.06973927331972223, -0.20786042668822127,
              0.20786042668822127, -0.34193582089208424, 0.34193582089208424,
              -0.469355837986757, 0.469355837986757, -0.5876404035069116,
              0.5876404035069116, -0.6944872631866827, 0.6944872631866827,
              -0.7878168059792081, 0.7878168059792081, -0.8658125777203002,
              0.8658125777203002, -0.926956772187174, 0.926956772187174,
              -0.9700604978354287, 0.9700604978354287, -0.9942945854823992,
              0.9942945854823992,
            ],
            [
              0, -0.1332568242984661, 0.1332568242984661, -0.26413568097034495,
              0.26413568097034495, -0.3903010380302908, 0.3903010380302908,
              -0.5095014778460075, 0.5095014778460075, -0.6196098757636461,
              0.6196098757636461, -0.7186613631319502, 0.7186613631319502,
              -0.8048884016188399, 0.8048884016188399, -0.8767523582704416,
              0.8767523582704416, -0.9329710868260161, 0.9329710868260161,
              -0.9725424712181152, 0.9725424712181152, -0.9947693349975522,
              0.9947693349975522,
            ],
            [
              -0.06405689286260563, 0.06405689286260563, -0.1911188674736163,
              0.1911188674736163, -0.3150426796961634, 0.3150426796961634,
              -0.4337935076260451, 0.4337935076260451, -0.5454214713888396,
              0.5454214713888396, -0.6480936519369755, 0.6480936519369755,
              -0.7401241915785544, 0.7401241915785544, -0.820001985973903,
              0.820001985973903, -0.8864155270044011, 0.8864155270044011,
              -0.9382745520027328, 0.9382745520027328, -0.9747285559713095,
              0.9747285559713095, -0.9951872199970213, 0.9951872199970213,
            ],
          ],
          tM = [
            [],
            [],
            [1, 1],
            [0.8888888888888888, 0.5555555555555556, 0.5555555555555556],
            [
              0.6521451548625461, 0.6521451548625461, 0.34785484513745385,
              0.34785484513745385,
            ],
            [
              0.5688888888888889, 0.47862867049936647, 0.47862867049936647,
              0.23692688505618908, 0.23692688505618908,
            ],
            [
              0.3607615730481386, 0.3607615730481386, 0.46791393457269104,
              0.46791393457269104, 0.17132449237917036, 0.17132449237917036,
            ],
            [
              0.4179591836734694, 0.3818300505051189, 0.3818300505051189,
              0.27970539148927664, 0.27970539148927664, 0.1294849661688697,
              0.1294849661688697,
            ],
            [
              0.362683783378362, 0.362683783378362, 0.31370664587788727,
              0.31370664587788727, 0.22238103445337448, 0.22238103445337448,
              0.10122853629037626, 0.10122853629037626,
            ],
            [
              0.3302393550012598, 0.1806481606948574, 0.1806481606948574,
              0.08127438836157441, 0.08127438836157441, 0.31234707704000286,
              0.31234707704000286, 0.26061069640293544, 0.26061069640293544,
            ],
            [
              0.29552422471475287, 0.29552422471475287, 0.26926671930999635,
              0.26926671930999635, 0.21908636251598204, 0.21908636251598204,
              0.1494513491505806, 0.1494513491505806, 0.06667134430868814,
              0.06667134430868814,
            ],
            [
              0.2729250867779006, 0.26280454451024665, 0.26280454451024665,
              0.23319376459199048, 0.23319376459199048, 0.18629021092773426,
              0.18629021092773426, 0.1255803694649046, 0.1255803694649046,
              0.05566856711617366, 0.05566856711617366,
            ],
            [
              0.24914704581340277, 0.24914704581340277, 0.2334925365383548,
              0.2334925365383548, 0.20316742672306592, 0.20316742672306592,
              0.16007832854334622, 0.16007832854334622, 0.10693932599531843,
              0.10693932599531843, 0.04717533638651183, 0.04717533638651183,
            ],
            [
              0.2325515532308739, 0.22628318026289723, 0.22628318026289723,
              0.2078160475368885, 0.2078160475368885, 0.17814598076194574,
              0.17814598076194574, 0.13887351021978725, 0.13887351021978725,
              0.09212149983772845, 0.09212149983772845, 0.04048400476531588,
              0.04048400476531588,
            ],
            [
              0.2152638534631578, 0.2152638534631578, 0.2051984637212956,
              0.2051984637212956, 0.18553839747793782, 0.18553839747793782,
              0.15720316715819355, 0.15720316715819355, 0.12151857068790319,
              0.12151857068790319, 0.08015808715976021, 0.08015808715976021,
              0.03511946033175186, 0.03511946033175186,
            ],
            [
              0.2025782419255613, 0.19843148532711158, 0.19843148532711158,
              0.1861610000155622, 0.1861610000155622, 0.16626920581699392,
              0.16626920581699392, 0.13957067792615432, 0.13957067792615432,
              0.10715922046717194, 0.10715922046717194, 0.07036604748810812,
              0.07036604748810812, 0.03075324199611727, 0.03075324199611727,
            ],
            [
              0.1894506104550685, 0.1894506104550685, 0.18260341504492358,
              0.18260341504492358, 0.16915651939500254, 0.16915651939500254,
              0.14959598881657674, 0.14959598881657674, 0.12462897125553388,
              0.12462897125553388, 0.09515851168249279, 0.09515851168249279,
              0.062253523938647894, 0.062253523938647894, 0.027152459411754096,
              0.027152459411754096,
            ],
            [
              0.17944647035620653, 0.17656270536699264, 0.17656270536699264,
              0.16800410215645004, 0.16800410215645004, 0.15404576107681028,
              0.15404576107681028, 0.13513636846852548, 0.13513636846852548,
              0.11188384719340397, 0.11188384719340397, 0.08503614831717918,
              0.08503614831717918, 0.0554595293739872, 0.0554595293739872,
              0.02414830286854793, 0.02414830286854793,
            ],
            [
              0.1691423829631436, 0.1691423829631436, 0.16427648374583273,
              0.16427648374583273, 0.15468467512626524, 0.15468467512626524,
              0.14064291467065065, 0.14064291467065065, 0.12255520671147846,
              0.12255520671147846, 0.10094204410628717, 0.10094204410628717,
              0.07642573025488905, 0.07642573025488905, 0.0497145488949698,
              0.0497145488949698, 0.02161601352648331, 0.02161601352648331,
            ],
            [
              0.1610544498487837, 0.15896884339395434, 0.15896884339395434,
              0.15276604206585967, 0.15276604206585967, 0.1426067021736066,
              0.1426067021736066, 0.12875396253933621, 0.12875396253933621,
              0.11156664554733399, 0.11156664554733399, 0.09149002162245,
              0.09149002162245, 0.06904454273764123, 0.06904454273764123,
              0.0448142267656996, 0.0448142267656996, 0.019461788229726478,
              0.019461788229726478,
            ],
            [
              0.15275338713072584, 0.15275338713072584, 0.14917298647260374,
              0.14917298647260374, 0.14209610931838204, 0.14209610931838204,
              0.13168863844917664, 0.13168863844917664, 0.11819453196151841,
              0.11819453196151841, 0.10193011981724044, 0.10193011981724044,
              0.08327674157670475, 0.08327674157670475, 0.06267204833410907,
              0.06267204833410907, 0.04060142980038694, 0.04060142980038694,
              0.017614007139152118, 0.017614007139152118,
            ],
            [
              0.14608113364969041, 0.14452440398997005, 0.14452440398997005,
              0.13988739479107315, 0.13988739479107315, 0.13226893863333747,
              0.13226893863333747, 0.12183141605372853, 0.12183141605372853,
              0.10879729916714838, 0.10879729916714838, 0.09344442345603386,
              0.09344442345603386, 0.0761001136283793, 0.0761001136283793,
              0.057134425426857205, 0.057134425426857205, 0.036953789770852494,
              0.036953789770852494, 0.016017228257774335, 0.016017228257774335,
            ],
            [
              0.13925187285563198, 0.13925187285563198, 0.13654149834601517,
              0.13654149834601517, 0.13117350478706238, 0.13117350478706238,
              0.12325237681051242, 0.12325237681051242, 0.11293229608053922,
              0.11293229608053922, 0.10041414444288096, 0.10041414444288096,
              0.08594160621706773, 0.08594160621706773, 0.06979646842452049,
              0.06979646842452049, 0.052293335152683286, 0.052293335152683286,
              0.03377490158481415, 0.03377490158481415, 0.0146279952982722,
              0.0146279952982722,
            ],
            [
              0.13365457218610619, 0.1324620394046966, 0.1324620394046966,
              0.12890572218808216, 0.12890572218808216, 0.12304908430672953,
              0.12304908430672953, 0.11499664022241136, 0.11499664022241136,
              0.10489209146454141, 0.10489209146454141, 0.09291576606003515,
              0.09291576606003515, 0.07928141177671895, 0.07928141177671895,
              0.06423242140852585, 0.06423242140852585, 0.04803767173108467,
              0.04803767173108467, 0.030988005856979445, 0.030988005856979445,
              0.013411859487141771, 0.013411859487141771,
            ],
            [
              0.12793819534675216, 0.12793819534675216, 0.1258374563468283,
              0.1258374563468283, 0.12167047292780339, 0.12167047292780339,
              0.1155056680537256, 0.1155056680537256, 0.10744427011596563,
              0.10744427011596563, 0.09761865210411388, 0.09761865210411388,
              0.08619016153195327, 0.08619016153195327, 0.0733464814110803,
              0.0733464814110803, 0.05929858491543678, 0.05929858491543678,
              0.04427743881741981, 0.04427743881741981, 0.028531388628933663,
              0.028531388628933663, 0.0123412297999872, 0.0123412297999872,
            ],
          ],
          tw = [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1]],
          tb = 2 * Math.PI,
          tL = function (t, e, n, r, i, a, s, h, o) {
            var u,
              c,
              f,
              l,
              p,
              g,
              v,
              x,
              y,
              m,
              M,
              w,
              b,
              L,
              A,
              k = Math.sin((i * tb) / 360),
              q = Math.cos((i * tb) / 360),
              _ = (q * (t - h)) / 2 + (k * (e - o)) / 2,
              P = (-k * (t - h)) / 2 + (q * (e - o)) / 2;
            if ((0 === _ && 0 === P) || 0 === n || 0 === r) return [];
            var E =
              (_ * _) / ((n = Math.abs(n)) * n) +
              (P * P) / ((r = Math.abs(r)) * r);
            E > 1 && ((n *= Math.sqrt(E)), (r *= Math.sqrt(E)));
            var C =
                ((u = n),
                (c = r),
                (f = (q * (t - h)) / 2 + (k * (e - o)) / 2),
                (l = (-k * (t - h)) / 2 + (q * (e - o)) / 2),
                (p = u * u),
                (g = c * c),
                (v = f * f),
                (y = p * g - p * (x = l * l) - g * v) < 0 && (y = 0),
                (y /= p * x + g * v),
                (m = (((y = Math.sqrt(y) * (a === s ? -1 : 1)) * u) / c) * l),
                (M = (-(y * c) / u) * f),
                (L = d(1, 0, (w = (f - m) / u), (b = (l - M) / c))),
                (A = d(w, b, (-f - m) / u, (-l - M) / c)),
                0 === s && A > 0 && (A -= tb),
                1 === s && A < 0 && (A += tb),
                [
                  q * m - k * M + (t + h) / 2,
                  k * m + q * M + (e + o) / 2,
                  L,
                  A,
                ]),
              S = [],
              Z = C[2],
              T = C[3],
              F = Math.max(Math.ceil(Math.abs(T) / (tb / 4)), 1);
            T /= F;
            for (var z = 0; z < F; z++)
              S.push(
                (function (t, e) {
                  var n = (4 / 3) * Math.tan(e / 4),
                    r = Math.cos(t),
                    i = Math.sin(t),
                    a = Math.cos(t + e),
                    s = Math.sin(t + e);
                  return [
                    r,
                    i,
                    r - i * n,
                    i + r * n,
                    a + s * n,
                    s - a * n,
                    a,
                    s,
                  ];
                })(Z, T)
              ),
                (Z += T);
            return S.map(function (t) {
              for (var e = 0; e < t.length; e += 2) {
                var i = t[e + 0],
                  a = t[e + 1],
                  s = q * (i *= n) - k * (a *= r),
                  h = k * i + q * a;
                (t[e + 0] = s + C[0]), (t[e + 1] = h + C[1]);
              }
              return t;
            });
          },
          tA = function (t, e, n, r, i, a, s, h, o) {
            return new m(t, e, n, r, i, a, s, h, o);
          };
        m.prototype = {
          constructor: m,
          init: function () {},
          getTotalLength: function () {
            return this.length;
          },
          getPointAtLength: function (t) {
            t < 0 ? (t = 0) : t > this.length && (t = this.length);
            for (
              var e = this.partialLengths.length - 1;
              this.partialLengths[e] >= t && this.partialLengths[e] > 0;

            )
              e--;
            e < this.partialLengths.length - 1 && e++;
            for (var n = 0, r = 0; r < e; r++) n += this.partialLengths[r];
            return this.curves[e].getPointAtLength(t - n);
          },
          getTangentAtLength: function (t) {
            t < 0 ? (t = 0) : t > this.length && (t = this.length);
            for (
              var e = this.partialLengths.length - 1;
              this.partialLengths[e] >= t && this.partialLengths[e] > 0;

            )
              e--;
            e < this.partialLengths.length - 1 && e++;
            for (var n = 0, r = 0; r < e; r++) n += this.partialLengths[r];
            return this.curves[e].getTangentAtLength(t - n);
          },
          getPropertiesAtLength: function (t) {
            var e = this.getTangentAtLength(t),
              n = this.getPointAtLength(t);
            return { x: n.x, y: n.y, tangentX: e.x, tangentY: e.y };
          },
        };
        var tk = function (t, e, n, r) {
          return new M(t, e, n, r);
        };
        (M.prototype.getTotalLength = function () {
          return Math.sqrt(
            Math.pow(this.x0 - this.x1, 2) + Math.pow(this.y0 - this.y1, 2)
          );
        }),
          (M.prototype.getPointAtLength = function (t) {
            var e =
                t /
                Math.sqrt(
                  Math.pow(this.x0 - this.x1, 2) +
                    Math.pow(this.y0 - this.y1, 2)
                ),
              n = (this.x1 - this.x0) * e,
              r = (this.y1 - this.y0) * e;
            return { x: this.x0 + n, y: this.y0 + r };
          }),
          (M.prototype.getTangentAtLength = function () {
            var t = Math.sqrt(
              (this.x1 - this.x0) * (this.x1 - this.x0) +
                (this.y1 - this.y0) * (this.y1 - this.y0)
            );
            return { x: (this.x1 - this.x0) / t, y: (this.y1 - this.y0) / t };
          }),
          (M.prototype.getPropertiesAtLength = function (t) {
            var e = this.getPointAtLength(t),
              n = this.getTangentAtLength();
            return { x: e.x, y: e.y, tangentX: n.x, tangentY: n.y };
          });
        var tq = function (t) {
            function e(t) {
              if (!t) return null;
              for (
                var a, s = tx(t), h = [0, 0], o = [0, 0], u = 0;
                u < s.length;
                u++
              )
                "M" === s[u][0]
                  ? ((h = [s[u][1], s[u][2]]), i.push(null))
                  : "m" === s[u][0]
                  ? ((h = [s[u][1] + h[0], s[u][2] + h[1]]), i.push(null))
                  : "L" === s[u][0]
                  ? ((n += Math.sqrt(
                      Math.pow(h[0] - s[u][1], 2) + Math.pow(h[1] - s[u][2], 2)
                    )),
                    i.push(new tk(h[0], s[u][1], h[1], s[u][2])),
                    (h = [s[u][1], s[u][2]]))
                  : "l" === s[u][0]
                  ? ((n += Math.sqrt(
                      Math.pow(s[u][1], 2) + Math.pow(s[u][2], 2)
                    )),
                    i.push(new tk(h[0], s[u][1] + h[0], h[1], s[u][2] + h[1])),
                    (h = [s[u][1] + h[0], s[u][2] + h[1]]))
                  : "H" === s[u][0]
                  ? ((n += Math.abs(h[0] - s[u][1])),
                    i.push(new tk(h[0], s[u][1], h[1], h[1])),
                    (h[0] = s[u][1]))
                  : "h" === s[u][0]
                  ? ((n += Math.abs(s[u][1])),
                    i.push(new tk(h[0], h[0] + s[u][1], h[1], h[1])),
                    (h[0] = s[u][1] + h[0]))
                  : "V" === s[u][0]
                  ? ((n += Math.abs(h[1] - s[u][1])),
                    i.push(new tk(h[0], h[0], h[1], s[u][1])),
                    (h[1] = s[u][1]))
                  : "v" === s[u][0]
                  ? ((n += Math.abs(s[u][1])),
                    i.push(new tk(h[0], h[0], h[1], h[1] + s[u][1])),
                    (h[1] = s[u][1] + h[1]))
                  : "z" === s[u][0] || "Z" === s[u][0]
                  ? ((n += Math.sqrt(
                      Math.pow(s[0][1] - h[0], 2) + Math.pow(s[0][2] - h[1], 2)
                    )),
                    i.push(new tk(h[0], s[0][1], h[1], s[0][2])),
                    (h = [s[0][1], s[0][2]]))
                  : "C" === s[u][0]
                  ? ((a = new td(
                      h[0],
                      h[1],
                      s[u][1],
                      s[u][2],
                      s[u][3],
                      s[u][4],
                      s[u][5],
                      s[u][6]
                    )),
                    (n += a.getTotalLength()),
                    (h = [s[u][5], s[u][6]]),
                    i.push(a))
                  : "c" === s[u][0]
                  ? ((a = new td(
                      h[0],
                      h[1],
                      h[0] + s[u][1],
                      h[1] + s[u][2],
                      h[0] + s[u][3],
                      h[1] + s[u][4],
                      h[0] + s[u][5],
                      h[1] + s[u][6]
                    )),
                    (n += a.getTotalLength()),
                    (h = [s[u][5] + h[0], s[u][6] + h[1]]),
                    i.push(a))
                  : "S" === s[u][0]
                  ? ((a =
                      u > 0 && ["C", "c", "S", "s"].indexOf(s[u - 1][0]) > -1
                        ? new td(
                            h[0],
                            h[1],
                            2 * h[0] - s[u - 1][s[u - 1].length - 4],
                            2 * h[1] - s[u - 1][s[u - 1].length - 3],
                            s[u][1],
                            s[u][2],
                            s[u][3],
                            s[u][4]
                          )
                        : new td(
                            h[0],
                            h[1],
                            h[0],
                            h[1],
                            s[u][1],
                            s[u][2],
                            s[u][3],
                            s[u][4]
                          )),
                    (n += a.getTotalLength()),
                    (h = [s[u][3], s[u][4]]),
                    i.push(a))
                  : "s" === s[u][0]
                  ? ((a =
                      u > 0 && ["C", "c", "S", "s"].indexOf(s[u - 1][0]) > -1
                        ? new td(
                            h[0],
                            h[1],
                            h[0] + a.d.x - a.c.x,
                            h[1] + a.d.y - a.c.y,
                            h[0] + s[u][1],
                            h[1] + s[u][2],
                            h[0] + s[u][3],
                            h[1] + s[u][4]
                          )
                        : new td(
                            h[0],
                            h[1],
                            h[0],
                            h[1],
                            h[0] + s[u][1],
                            h[1] + s[u][2],
                            h[0] + s[u][3],
                            h[1] + s[u][4]
                          )),
                    (n += a.getTotalLength()),
                    (h = [s[u][3] + h[0], s[u][4] + h[1]]),
                    i.push(a))
                  : "Q" === s[u][0]
                  ? ((a = new td(
                      h[0],
                      h[1],
                      s[u][1],
                      s[u][2],
                      s[u][3],
                      s[u][4]
                    )),
                    (n += a.getTotalLength()),
                    i.push(a),
                    (h = [s[u][3], s[u][4]]),
                    (o = [s[u][1], s[u][2]]))
                  : "q" === s[u][0]
                  ? ((a = new td(
                      h[0],
                      h[1],
                      h[0] + s[u][1],
                      h[1] + s[u][2],
                      h[0] + s[u][3],
                      h[1] + s[u][4]
                    )),
                    (n += a.getTotalLength()),
                    (o = [h[0] + s[u][1], h[1] + s[u][2]]),
                    (h = [s[u][3] + h[0], s[u][4] + h[1]]),
                    i.push(a))
                  : "T" === s[u][0]
                  ? ((a =
                      u > 0 && ["Q", "q", "T", "t"].indexOf(s[u - 1][0]) > -1
                        ? new td(
                            h[0],
                            h[1],
                            2 * h[0] - o[0],
                            2 * h[1] - o[1],
                            s[u][1],
                            s[u][2]
                          )
                        : new tk(h[0], s[u][1], h[1], s[u][2])),
                    i.push(a),
                    (n += a.getTotalLength()),
                    (o = [2 * h[0] - o[0], 2 * h[1] - o[1]]),
                    (h = [s[u][1], s[u][2]]))
                  : "t" === s[u][0]
                  ? ((a =
                      u > 0 && ["Q", "q", "T", "t"].indexOf(s[u - 1][0]) > -1
                        ? new td(
                            h[0],
                            h[1],
                            2 * h[0] - o[0],
                            2 * h[1] - o[1],
                            h[0] + s[u][1],
                            h[1] + s[u][2]
                          )
                        : new tk(h[0], h[0] + s[u][1], h[1], h[1] + s[u][2])),
                    (n += a.getTotalLength()),
                    (o = [2 * h[0] - o[0], 2 * h[1] - o[1]]),
                    (h = [s[u][1] + h[0], s[u][2] + h[0]]),
                    i.push(a))
                  : "A" === s[u][0]
                  ? ((a = new tA(
                      h[0],
                      h[1],
                      s[u][1],
                      s[u][2],
                      s[u][3],
                      s[u][4],
                      s[u][5],
                      s[u][6],
                      s[u][7]
                    )),
                    (n += a.getTotalLength()),
                    (h = [s[u][6], s[u][7]]),
                    i.push(a))
                  : "a" === s[u][0] &&
                    ((a = new tA(
                      h[0],
                      h[1],
                      s[u][1],
                      s[u][2],
                      s[u][3],
                      s[u][4],
                      s[u][5],
                      h[0] + s[u][6],
                      h[1] + s[u][7]
                    )),
                    (n += a.getTotalLength()),
                    (h = [h[0] + s[u][6], h[1] + s[u][7]]),
                    i.push(a)),
                  r.push(n);
              return e;
            }
            var n = 0,
              r = [],
              i = [];
            (e.getTotalLength = function () {
              return n;
            }),
              (e.getPointAtLength = function (t) {
                var e = a(t);
                return i[e.i].getPointAtLength(e.fraction);
              }),
              (e.getTangentAtLength = function (t) {
                var e = a(t);
                return i[e.i].getTangentAtLength(e.fraction);
              }),
              (e.getPropertiesAtLength = function (t) {
                var e = a(t);
                return i[e.i].getPropertiesAtLength(e.fraction);
              });
            var a = function (t) {
              t < 0 ? (t = 0) : t > n && (t = n);
              for (var e = r.length - 1; r[e] >= t && r[e] > 0; ) e--;
              return { fraction: t - r[++e - 1], i: e };
            };
            return e(t);
          },
          t_ =
            'All shapes must be supplied as arrays of [x, y] points or an SVG path string (https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/d).\nExample valid ways of supplying a shape would be:\n[[0, 0], [10, 0], [10, 10]]\n"M0,0 L10,0 L10,10Z"\n',
          tP = function (t, e) {
            for (var n, r, i, a = t.length, s = 1 / 0, h = 0; h < a; h++)
              !(function (i) {
                (r = 0),
                  e.forEach(function (e, n) {
                    var s = w(t[(i + n) % a], e);
                    r += s * s;
                  }),
                  r < s && ((s = r), (n = i));
              })(h);
            n &&
              ((i = t.splice(0, n)),
              t.splice.apply(t, [t.length, 0].concat(i)));
          };
        (Z.deviation = function (t, e, n, r) {
          var i = e && e.length,
            a = i ? e[0] * n : t.length,
            s = Math.abs(Q(t, 0, a, n));
          if (i)
            for (var h = 0, o = e.length; h < o; h++) {
              var u = e[h] * n,
                c = h < o - 1 ? e[h + 1] * n : t.length;
              s -= Math.abs(Q(t, u, c, n));
            }
          var f = 0;
          for (h = 0; h < r.length; h += 3) {
            var l = r[h] * n,
              p = r[h + 1] * n,
              g = r[h + 2] * n;
            f += Math.abs(
              (t[l] - t[g]) * (t[p + 1] - t[l + 1]) -
                (t[l] - t[p]) * (t[g + 1] - t[l + 1])
            );
          }
          return 0 === s && 0 === f ? 0 : Math.abs((f - s) / s);
        }),
          (Z.flatten = function (t) {
            for (
              var e = t[0][0].length,
                n = { vertices: [], holes: [], dimensions: e },
                r = 0,
                i = 0;
              i < t.length;
              i++
            ) {
              for (var a = 0; a < t[i].length; a++)
                for (var s = 0; s < e; s++) n.vertices.push(t[i][a][s]);
              i > 0 && ((r += t[i - 1].length), n.holes.push(r));
            }
            return n;
          });
        var tE = function (t) {
            return t;
          },
          tC = function (t) {
            if (null == t) return tE;
            var e,
              n,
              r = t.scale[0],
              i = t.scale[1],
              a = t.translate[0],
              s = t.translate[1];
            return function (t, h) {
              h || (e = n = 0);
              var o = 2,
                u = t.length,
                c = Array(u);
              for (
                c[0] = (e += t[0]) * r + a, c[1] = (n += t[1]) * i + s;
                o < u;

              )
                (c[o] = t[o]), ++o;
              return c;
            };
          },
          tS = function (t, e) {
            for (var n, r = t.length, i = r - e; i < --r; )
              (n = t[i]), (t[i++] = t[r]), (t[r] = n);
          },
          tZ = function (t, e) {
            function n(t, e) {
              for (var n in t) {
                var i = t[n];
                delete e[i.start],
                  delete i.start,
                  delete i.end,
                  i.forEach(function (t) {
                    r[t < 0 ? ~t : t] = 1;
                  }),
                  s.push(i);
              }
            }
            var r = {},
              i = {},
              a = {},
              s = [],
              h = -1;
            return (
              e.forEach(function (n, r) {
                var i,
                  a = t.arcs[n < 0 ? ~n : n];
                !(a.length < 3) ||
                  a[1][0] ||
                  a[1][1] ||
                  ((i = e[++h]), (e[h] = n), (e[r] = i));
              }),
              e.forEach(function (e) {
                var n,
                  r,
                  s,
                  h,
                  o,
                  u =
                    ((s = (r = t.arcs[e < 0 ? ~e : e])[0]),
                    t.transform
                      ? ((n = [0, 0]),
                        r.forEach(function (t) {
                          (n[0] += t[0]), (n[1] += t[1]);
                        }))
                      : (n = r[r.length - 1]),
                    e < 0 ? [n, s] : [s, n]),
                  c = u[0],
                  f = u[1];
                if ((h = a[c]))
                  if ((delete a[h.end], h.push(e), (h.end = f), (o = i[f]))) {
                    delete i[o.start];
                    var l = o === h ? h : h.concat(o);
                    i[(l.start = h.start)] = a[(l.end = o.end)] = l;
                  } else i[h.start] = a[h.end] = h;
                else if ((h = i[f]))
                  if (
                    (delete i[h.start], h.unshift(e), (h.start = c), (o = a[c]))
                  ) {
                    delete a[o.end];
                    var p = o === h ? h : o.concat(h);
                    i[(p.start = o.start)] = a[(p.end = h.end)] = p;
                  } else i[h.start] = a[h.end] = h;
                else i[((h = [e]).start = c)] = a[(h.end = f)] = h;
              }),
              n(a, i),
              n(i, a),
              e.forEach(function (t) {
                r[t < 0 ? ~t : t] || s.push([t]);
              }),
              s
            );
          },
          tT = function (t, e) {
            for (var n = 0, r = t.length; n < r; ) {
              var i = (n + r) >>> 1;
              t[i] < e ? (n = i + 1) : (r = i);
            }
            return n;
          },
          tF = function (t) {
            function e(t, e) {
              t.forEach(function (t) {
                t < 0 && (t = ~t);
                var n = r[t];
                n ? n.push(e) : (r[t] = [e]);
              });
            }
            function n(t, n) {
              t.forEach(function (t) {
                e(t, n);
              });
            }
            var r = {},
              i = t.map(function () {
                return [];
              }),
              a = {
                LineString: e,
                MultiLineString: n,
                Polygon: n,
                MultiPolygon: function (t, e) {
                  t.forEach(function (t) {
                    n(t, e);
                  });
                },
              };
            for (var s in (t.forEach(function t(e, n) {
              "GeometryCollection" === e.type
                ? e.geometries.forEach(function (e) {
                    t(e, n);
                  })
                : e.type in a && a[e.type](e.arcs, n);
            }),
            r))
              for (var h = r[s], o = h.length, u = 0; u < o; ++u)
                for (var c = u + 1; c < o; ++c) {
                  var f,
                    l = h[u],
                    p = h[c];
                  (f = i[l])[(s = tT(f, p))] !== p && f.splice(s, 0, p),
                    (f = i[p])[(s = tT(f, l))] !== l && f.splice(s, 0, l);
                }
            return i;
          },
          tz = function (t, e) {
            return t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
          },
          tj = function (t) {
            var e;
            return (
              1 === t.length &&
                ((e = t),
                (t = function (t, n) {
                  return tz(e(t), n);
                })),
              {
                left: function (e, n, r, i) {
                  for (
                    null == r && (r = 0), null == i && (i = e.length);
                    r < i;

                  ) {
                    var a = (r + i) >>> 1;
                    0 > t(e[a], n) ? (r = a + 1) : (i = a);
                  }
                  return r;
                },
                right: function (e, n, r, i) {
                  for (
                    null == r && (r = 0), null == i && (i = e.length);
                    r < i;

                  ) {
                    var a = (r + i) >>> 1;
                    t(e[a], n) > 0 ? (i = a) : (r = a + 1);
                  }
                  return r;
                },
              }
            );
          },
          tI =
            (tj(tz).right,
            function (t, e) {
              for (
                var n,
                  r,
                  i,
                  a,
                  s,
                  h =
                    ((i = (function (t) {
                      for (
                        var e = Z(
                            t.reduce(function (t, e) {
                              return t.concat([e[0]], [e[1]]);
                            }, [])
                          ),
                          n = [],
                          r = 0,
                          i = e.length;
                        r < i;
                        r += 3
                      )
                        n.push([
                          [e[r], e[r + 1]],
                          [e[r + 1], e[r + 2]],
                          [e[r + 2], e[r]],
                        ]);
                      return n;
                    })(t)),
                    (a = {}),
                    (s = {
                      type: "Topology",
                      objects: {
                        triangles: {
                          type: "GeometryCollection",
                          geometries: [],
                        },
                      },
                      arcs: [],
                    }),
                    i.forEach(function (e) {
                      var n = [];
                      e.forEach(function (e, r) {
                        var i = e[0] < e[1] ? e.join(",") : e[1] + "," + e[0],
                          h = e.map(function (e) {
                            return t[e];
                          });
                        (i in a)
                          ? n.push(~a[i])
                          : (n.push((a[i] = s.arcs.length)), s.arcs.push(h));
                      }),
                        s.objects.triangles.geometries.push({
                          type: "Polygon",
                          area: Math.abs(
                            tt(
                              e.map(function (e) {
                                return t[e[0]];
                              })
                            )
                          ),
                          arcs: [n],
                        });
                    }),
                    s.objects.triangles.geometries.sort(function (t, e) {
                      return t.area - e.area;
                    }),
                    s),
                  o = h.objects.triangles.geometries,
                  u = tj(function (t) {
                    return t.area;
                  }).left;
                o.length > e;

              )
                !(function () {
                  var t = o[0],
                    e = tF(o)[0][0],
                    n = o[e],
                    r = (function (t, e) {
                      function n(t) {
                        t.forEach(function (e) {
                          e.forEach(function (e) {
                            (i[(e = e < 0 ? ~e : e)] || (i[e] = [])).push(t);
                          });
                        }),
                          a.push(t);
                      }
                      function r(e) {
                        return (function (t) {
                          for (
                            var e, n = -1, r = t.length, i = t[r - 1], a = 0;
                            ++n < r;

                          )
                            (e = i),
                              (i = t[n]),
                              (a += e[0] * i[1] - e[1] * i[0]);
                          return Math.abs(a);
                        })(R(t, { type: "Polygon", arcs: [e] }).coordinates[0]);
                      }
                      var i = {},
                        a = [],
                        s = [];
                      return (
                        e.forEach(function t(e) {
                          switch (e.type) {
                            case "GeometryCollection":
                              e.geometries.forEach(t);
                              break;
                            case "Polygon":
                              n(e.arcs);
                              break;
                            case "MultiPolygon":
                              e.arcs.forEach(n);
                          }
                        }),
                        a.forEach(function (t) {
                          if (!t._) {
                            var e = [],
                              n = [t];
                            for (t._ = 1, s.push(e); (t = n.pop()); )
                              e.push(t),
                                t.forEach(function (t) {
                                  t.forEach(function (t) {
                                    i[t < 0 ? ~t : t].forEach(function (t) {
                                      t._ || ((t._ = 1), n.push(t));
                                    });
                                  });
                                });
                          }
                        }),
                        a.forEach(function (t) {
                          delete t._;
                        }),
                        {
                          type: "MultiPolygon",
                          arcs: s.map(function (e) {
                            var n,
                              a = [];
                            if (
                              (e.forEach(function (t) {
                                t.forEach(function (t) {
                                  t.forEach(function (t) {
                                    i[t < 0 ? ~t : t].length < 2 && a.push(t);
                                  });
                                });
                              }),
                              (n = (a = tZ(t, a)).length) > 1)
                            )
                              for (var s, h, o = 1, u = r(a[0]); o < n; ++o)
                                (s = r(a[o])) > u &&
                                  ((h = a[0]),
                                  (a[0] = a[o]),
                                  (a[o] = h),
                                  (u = s));
                            return a;
                          }),
                        }
                      );
                    })(h, [t, n]);
                  (r.area = t.area + n.area),
                    (r.type = "Polygon"),
                    (r.arcs = r.arcs[0]),
                    o.splice(e, 1),
                    o.shift(),
                    o.splice(u(o, r.area), 0, r);
                })();
              if (e > o.length)
                throw RangeError(
                  "Can't collapse topology into " + e + " pieces."
                );
              return ((n = h),
              "GeometryCollection" === (r = h.objects.triangles).type
                ? {
                    type: "FeatureCollection",
                    features: r.geometries.map(function (t) {
                      return U(n, t);
                    }),
                  }
                : U(n, r)).features.map(function (t) {
                return (
                  t.geometry.coordinates[0].pop(), t.geometry.coordinates[0]
                );
              });
            }),
          tV = function (t, e) {
            if (t.length > 8)
              return t.map(function (t, e) {
                return e;
              });
            var n,
              r,
              i = t.map(function (t) {
                return e.map(function (e) {
                  var n;
                  return (n = w(k(t), k(e))) * n;
                });
              });
            return (
              (n = 1 / 0),
              (function t(e, a, s) {
                void 0 === a && (a = []), void 0 === s && (s = 0);
                for (var h = 0; h < e.length; h++) {
                  var o = e.splice(h, 1),
                    u = i[o[0]][a.length];
                  s + u < n &&
                    (e.length
                      ? t(e.slice(), a.concat(o), s + u)
                      : ((n = s + u), (r = a.concat(o)))),
                    e.length && e.splice(h, 0, o[0]);
                }
              })(
                (r = t.map(function (t, e) {
                  return e;
                }))
              ),
              r
            );
          };
        (t.interpolate = function (t, e, n) {
          void 0 === n && (n = {});
          var r = n.maxSegmentLength;
          void 0 === r && (r = 10);
          var i = n.string;
          void 0 === i && (i = !0);
          var a = S(C(t, r), C(e, r), i);
          return i && ("string" == typeof t || "string" == typeof e)
            ? function (n) {
                return n < 1e-4 && "string" == typeof t
                  ? t
                  : 1 - n < 1e-4 && "string" == typeof e
                  ? e
                  : a(n);
              }
            : a;
        }),
          (t.separate = B),
          (t.combine = function (t, e, n) {
            void 0 === n && (n = {});
            var r = n.maxSegmentLength;
            void 0 === r && (r = 10);
            var i = n.string;
            void 0 === i && (i = !0);
            var a = n.single;
            void 0 === a && (a = !1);
            var s = B(e, t, { maxSegmentLength: r, string: i, single: a });
            return a
              ? function (t) {
                  return s(1 - t);
                }
              : s.map(function (t) {
                  return function (e) {
                    return t(1 - e);
                  };
                });
          }),
          (t.interpolateAll = function (t, e, n) {
            void 0 === n && (n = {});
            var r = n.maxSegmentLength;
            void 0 === r && (r = 10);
            var i = n.string;
            void 0 === i && (i = !0);
            var a = n.single;
            if (
              (void 0 === a && (a = !1),
              !Array.isArray(t) ||
                !Array.isArray(e) ||
                t.length !== e.length ||
                !t.length)
            )
              throw TypeError(
                "flubber.all() expects two arrays of equal length as arguments. Each element in both arrays should be an array of [x, y] points or an SVG path string (https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/d)."
              );
            var s,
              h,
              o = function (t) {
                return C(t, r);
              },
              u = t.map(o),
              c = e.map(o);
            return (
              a
                ? (t.every(function (t) {
                    return "string" == typeof t;
                  }) && (s = t.slice(0)),
                  e.every(function (t) {
                    return "string" == typeof t;
                  }) && (h = e.slice(0)))
                : ((s = t.slice(0)), (h = e.slice(0))),
              W(u, c, { string: i, single: a, t0: s, t1: h, match: !1 })
            );
          }),
          (t.splitPathString = function (t) {
            return _(q(t));
          }),
          (t.toPathString = P),
          (t.fromCircle = $),
          (t.toCircle = function (t, e, n, r, i) {
            var a = $(e, n, r, t, i);
            return function (t) {
              return a(1 - t);
            };
          }),
          (t.fromRect = J),
          (t.toRect = function (t, e, n, r, i, a) {
            var s = J(e, n, r, i, t, a);
            return function (t) {
              return s(1 - t);
            };
          }),
          Object.defineProperty(t, "__esModule", { value: !0 });
      })(e);
    },
  },
]);

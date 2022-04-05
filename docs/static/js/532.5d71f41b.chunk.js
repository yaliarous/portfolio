'use strict';
(globalThis.webpackChunkportfolio = globalThis.webpackChunkportfolio || []).push([
  [532],
  {
    6665: (e, t, r) => {
      r.d(t, { Z: () => h });
      var n = r(8381),
        s = r(2954),
        i = r.n(s),
        a = r(3643),
        o = r(935),
        c = r(2192),
        A = r(7537),
        l = r(9343);
      const d = [
          '\u30a2',
          '\u30a4',
          '\u30a6',
          '\u30a8',
          '\u30aa',
          '\u30ab',
          '\u30ad',
          '\u30af',
          '\u30b1',
          '\u30b3',
          '\u30b5',
          '\u30b7',
          '\u30b9',
          '\u30bb',
          '\u30bd',
          '\u30bf',
          '\u30c1',
          '\u30c4',
          '\u30c6',
          '\u30c8',
          '\u30ca',
          '\u30cb',
          '\u30cc',
          '\u30cd',
          '\u30ce',
          '\u30cf',
          '\u30d2',
          '\u30d5',
          '\u30d8',
          '\u30db',
          '\u30de',
          '\u30df',
          '\u30e0',
          '\u30e1',
          '\u30e2',
          '\u30e4',
          '\u30e6',
          '\u30e8',
          '\u30fc',
          '\u30e9',
          '\u30ea',
          '\u30eb',
          '\u30ec',
          '\u30ed',
          '\u30ef',
          '\u30f0',
          '\u30f1',
          '\u30f2',
          '\u30f3',
          '\u30ac',
          '\u30ae',
          '\u30b0',
          '\u30b2',
          '\u30b4',
          '\u30b6',
          '\u30b8',
          '\u30ba',
          '\u30bc',
          '\u30be',
          '\u30c0',
          '\u30c2',
          '\u30c5',
          '\u30c7',
          '\u30c9',
          '\u30d0',
          '\u30d3',
          '\u30d6',
          '\u30d9',
          '\u30dc',
          '\u30d1',
          '\u30d4',
          '\u30d7',
          '\u30da',
          '\u30dd',
        ],
        u = 'glyph',
        m = 'value';
      const p = ({ text: e, start: t = !0, delay: r = 0, className: s, ...p }) => {
          const h = (0, n.useRef)([{ type: u, value: '' }]),
            v = (0, n.useRef)(),
            f = (0, a.Tb)();
          return (
            (0, n.useEffect)(() => {
              const n = v.current,
                s = e.split('');
              let i;
              const a = () => {
                  const e = h.current.map(
                    e => `<span class="decoder-text__${e.type}">${e.value}</span>`
                  );
                  n.innerHTML = e.join('');
                },
                c = (0, o.S3)(0, e => {
                  (h.current = (function (e, t, r) {
                    return e.map((e, n) => {
                      if (n < r) return { type: m, value: e };
                      if (r % 1 < 0.5) {
                        const e = Math.floor(Math.random() * d.length);
                        return { type: u, value: d[e] };
                      }
                      return { type: u, value: t[n].value };
                    });
                  })(s, h.current, e)),
                    a();
                });
              return (
                !t ||
                  i ||
                  f ||
                  A.Z ||
                  (i = (0, o.tS)(
                    (0, o.gw)(r),
                    (0, o.ST)({ from: 0, to: s.length, stiffness: 8, damping: 5 })
                  ).start(c)),
                f && ((h.current = s.map((e, t) => ({ type: m, value: s[t] }))), a()),
                () => {
                  i && i.stop();
                }
              );
            }, [f, t, r, e]),
            (0, l.jsxs)('span', {
              className: i()('decoder-text', s),
              ...p,
              children: [
                (0, l.jsx)(c.Z, { className: 'decoder-text__label', children: e }),
                (0, l.jsx)('span', {
                  'aria-hidden': !0,
                  className: 'decoder-text__content',
                  ref: v,
                }),
              ],
            })
          );
        },
        h = (0, n.memo)(p);
    },
    4825: (e, t, r) => {
      r.d(t, { Z: () => c });
      var n = r(2954),
        s = r.n(n),
        i = r(9211),
        a = r(9343);
      const o = ({
        lineWidth: e,
        lineHeight: t,
        notchWidth: r,
        notchHeight: n,
        collapseDelay: o,
        collapsed: c,
        className: A,
        style: l,
      }) =>
        (0, a.jsxs)('div', {
          className: s()('divider', A),
          style: {
            '--lineWidth': e,
            '--lineHeight': t,
            '--notchWidth': r,
            '--notchHeight': n,
            '--collapseDelay': (0, i.aU)(o),
            ...l,
          },
          children: [
            (0, a.jsx)('div', {
              className: s()('divider__line', { 'divider__line--collapsed': c }),
            }),
            (0, a.jsx)('div', {
              className: s()('divider__notch', { 'divider__notch--collapsed': c }),
              style: { '--collapseDelay': (0, i.aU)(o + 160) },
            }),
          ],
        });
      o.defaultProps = {
        lineWidth: '100%',
        lineHeight: '2px',
        notchWidth: '90px',
        notchHeight: '10px',
        collapsed: !1,
        collapseDelay: 0,
      };
      const c = o;
    },
    219: (e, t, r) => {
      r.d(t, { Z: () => i });
      var n = r(6896),
        s = r(9343);
      const i = () =>
        (0, s.jsxs)('footer', {
          className: 'footer',
          children: [
            (0, s.jsx)('span', {
              className: 'footer__date',
              children: `\xa9 ${new Date().getFullYear()} Mohamed ALI AROUS.`,
            }),
            (0, s.jsx)(n.Z, {
              secondary: !0,
              className: 'footer__link',
              href: '/humans.txt',
              target: '_self',
              children: 'Crafted by yours truly',
            }),
          ],
        });
    },
    9290: (e, t, r) => {
      r.d(t, { Z: () => A });
      var n = r(8381),
        s = r(2954),
        i = r.n(s),
        a = r(7364),
        o = r(6434),
        c = r(9343);
      const A = ({
        children: e,
        level: t = 1,
        as: r,
        align: s = 'auto',
        weight: A = 'medium',
        className: l,
        ...d
      }) => {
        const u = Math.min(Math.max(t, 0), 4),
          m = r || `h${Math.max(u, 1)}`;
        return (0, c.jsxs)(n.Fragment, {
          children: [
            'bold' === A &&
              (0, c.jsxs)(a.q, {
                children: [
                  (0, c.jsx)('link', {
                    rel: 'preload',
                    href: o,
                    as: 'font',
                    crossorigin: '',
                  }),
                  (0, c.jsx)('style', {
                    children: `\n              @font-face {\n                font-family: 'Gotham';\n                font-weight: 700;\n                src: url(${o}) format('woff2');\n                font-display: swap;\n              }\n            `,
                  }),
                ],
              }),
            (0, c.jsx)(m, {
              className: i()(
                l,
                'heading',
                `heading--align-${s}`,
                `heading--level-${u}`,
                `heading--weight-${A}`
              ),
              ...d,
              children: e,
            }),
          ],
        });
      };
    },
    8949: (e, t, r) => {
      r.d(t, { Z: () => g });
      var n = r(8381),
        s = r(2954),
        i = r.n(s),
        a = r(3643),
        o = r(1984),
        c = r(9528),
        A = r(675),
        l = r(3944),
        d = r(7537),
        u = r(9573),
        m = r(9211),
        p = r(318),
        h = r(2918),
        v = r(2192),
        f = r(9343);
      const x = ({
          onLoad: e,
          loaded: t,
          inViewport: r,
          srcSet: s,
          placeholder: h,
          delay: x,
          src: g,
          alt: w,
          play: E = !0,
          reveal: y,
          ...j
        }) => {
          const B = (0, a.Tb)(),
            [Q, b] = (0, n.useState)(!0),
            [I, M] = (0, n.useState)(!B),
            [D, _] = (0, n.useState)(!1),
            [R, N] = (0, n.useState)(!1),
            [U, C] = (0, n.useState)(!1),
            [k, S] = (0, n.useState)(),
            [z, Z] = (0, n.useState)(),
            T = (0, n.useRef)(),
            F = (0, n.useRef)(),
            P = null === g || void 0 === g ? void 0 : g.endsWith('.mp4'),
            L = g || (null === s || void 0 === s ? void 0 : s.split(' ')[0]),
            H = !d.Z && r;
          (0, n.useEffect)(() => {
            const e = () => {
                b(!1);
              },
              t = T.current;
            return (
              t.addEventListener('transitionend', e),
              function () {
                t && t.removeEventListener('transitionend', e);
              }
            );
          }, []),
            (0, n.useEffect)(() => {
              P && s
                ? (async () => {
                    const e = await (0, p.ln)(s);
                    Z(e);
                  })()
                : P && Z(g);
            }, [P, g, s]),
            (0, n.useEffect)(() => {
              const { width: e, height: t } = T.current;
              e && t && S({ width: e, height: t });
            }, []),
            (0, n.useEffect)(() => {
              F.current &&
                z &&
                (E && r
                  ? !r || B || d.Z || (M(!0), F.current.play())
                  : (M(!1), F.current.pause()));
            }, [r, E, B, z]);
          const J = e => {
              e.preventDefault(),
                F.current.paused ? (M(!0), F.current.play()) : (M(!1), F.current.pause());
            },
            W = () => {
              _(!0), C(!0);
            };
          return (0, f.jsxs)('div', {
            className: i()('image__element-wrapper', {
              'image__element-wrapper--reveal': y,
              'image__element-wrapper--in-viewport': r,
            }),
            onMouseOver: P
              ? () => {
                  _(!0), N(!0);
                }
              : void 0,
            onMouseOut: P ? () => N(!1) : void 0,
            style: { '--delay': (0, m.aU)(x + 1e3) },
            children: [
              P &&
                (0, f.jsxs)(n.Fragment, {
                  children: [
                    (0, f.jsx)('video', {
                      muted: !0,
                      loop: !0,
                      playsInline: !0,
                      className: i()('image__element', { 'image__element--loaded': t }),
                      autoPlay: !B,
                      role: 'img',
                      onLoadStart: e,
                      src: z,
                      'aria-label': w,
                      ref: F,
                      ...j,
                    }),
                    (0, f.jsx)(A.ZP, {
                      in: R || U,
                      onExit: l.nq,
                      onExited: () => _(!1),
                      timeout: { enter: 0, exit: (0, m.zG)(u.T.base.durationS) },
                      children: e =>
                        (0, f.jsx)(v.Z, {
                          visible: D,
                          children: (0, f.jsxs)(o.z, {
                            className: i()('image__button', `image__button--${e}`),
                            onFocus: W,
                            onBlur: () => C(!1),
                            onClick: J,
                            children: [
                              (0, f.jsx)(c.Z, { icon: I ? 'pause' : 'play' }),
                              I ? 'Pause' : 'Play',
                            ],
                          }),
                        }),
                    }),
                  ],
                }),
              !P &&
                (0, f.jsx)('img', {
                  className: i()('image__element', { 'image__element--loaded': t }),
                  onLoad: e,
                  decoding: 'async',
                  src: H ? L : void 0,
                  srcSet: H ? s : void 0,
                  width: null === k || void 0 === k ? void 0 : k.width,
                  height: null === k || void 0 === k ? void 0 : k.height,
                  alt: w,
                  ...j,
                }),
              Q &&
                (0, f.jsx)('img', {
                  'aria-hidden': !0,
                  className: i()('image__placeholder', {
                    'image__placeholder--loaded': t,
                  }),
                  style: { '--delay': (0, m.aU)(x) },
                  ref: T,
                  src: h,
                  onLoad: e => {
                    const { width: t, height: r } = e.target;
                    S({ width: t, height: r });
                  },
                  width: null === k || void 0 === k ? void 0 : k.width,
                  height: null === k || void 0 === k ? void 0 : k.height,
                  decoding: 'async',
                  alt: '',
                  role: 'presentation',
                }),
            ],
          });
        },
        g = ({
          className: e,
          style: t,
          reveal: r,
          delay: s = 0,
          raised: o,
          src: c,
          ...A
        }) => {
          const [l, d] = (0, n.useState)(!1),
            { themeId: u } = (0, h.Fg)(),
            p = (0, n.useRef)(),
            v = (0, a.NM)(p, !(null !== c && void 0 !== c && c.endsWith('.mp4'))),
            g = (0, n.useCallback)(() => {
              d(!0);
            }, []);
          return (0, f.jsx)('div', {
            className: i()('image', e, `image--${u}`, {
              'image--in-viewport': v,
              'image--reveal': r,
              'image--raised': o,
            }),
            style: { ...t, '--delay': (0, m.aU)(s) },
            ref: p,
            children: (0, f.jsx)(x, {
              delay: s,
              onLoad: g,
              loaded: l,
              inViewport: v,
              reveal: r,
              src: c,
              ...A,
            }),
          });
        };
    },
    6896: (e, t, r) => {
      r.d(t, { Z: () => A });
      var n = r(8180),
        s = r(2954),
        i = r.n(s),
        a = r(4467),
        o = r(9343);
      const c = ['txt', 'png', 'jpg'],
        A = ({
          rel: e,
          target: t,
          children: r,
          secondary: s,
          className: A,
          href: l,
          as: d,
          ...u
        }) => {
          const m = c.includes(null === l || void 0 === l ? void 0 : l.split('.').pop()),
            p =
              (null === l || void 0 === l ? void 0 : l.includes('://')) ||
              '#' === (null === l || void 0 === l ? void 0 : l[0]) ||
              m,
            h = e || (p ? 'noreferrer noopener' : void 0),
            v = t || (p ? '_blank' : void 0),
            f = d || (p ? 'a' : n.rU);
          return (0, o.jsx)(f, {
            className: i()('link', A, { 'link--secondary': s }),
            rel: h,
            href: p ? l : void 0,
            to: p ? void 0 : l,
            target: v,
            onMouseUp: a.I,
            ...u,
            children: r,
          });
        };
    },
    5911: (e, t, r) => {
      r.d(t, { Z: () => o });
      var n = r(8381),
        s = r(2954),
        i = r.n(s),
        a = r(9343);
      const o = (0,
      n.forwardRef)(({ as: e = 'div', children: t, className: r, ...n }, s) =>
        (0, a.jsx)(e, { className: i()('section', r), ref: s, ...n, children: t })
      );
    },
    2968: (e, t, r) => {
      r.d(t, { Z: () => a });
      var n = r(2954),
        s = r.n(n),
        i = r(9343);
      const a = ({
        children: e,
        size: t = 'm',
        as: r = 'p',
        align: n = 'auto',
        weight: a = 'auto',
        secondary: o,
        className: c,
        ...A
      }) =>
        (0, i.jsx)(r, {
          className: s()(
            c,
            'text',
            `text--align-${n}`,
            `text--size-${t}`,
            `text--weight-${a}`,
            { 'text--secondary': o }
          ),
          ...A,
          children: e,
        });
    },
    3532: (e, t, r) => {
      r.r(t), r.d(t, { default: () => Ee });
      var n = r(8618),
        s = r(3612),
        i = r(7019),
        a = r(7511),
        o = r(3814),
        c = r(6130),
        A = r(3415),
        l = r(6582),
        d = r(194),
        u = r(2813),
        m = r(5492),
        p = r(3958),
        h = r(4908),
        v = r(4867),
        f = r(219),
        x = r(3643),
        g = r(8381),
        w = r(2954),
        E = r.n(w),
        y = r(675),
        j = r(5529),
        B = r(6665),
        Q = r(3944),
        b = r(7537),
        I = r(9211);
      function M() {
        return (
          (M =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
              }
              return e;
            }),
          M.apply(this, arguments)
        );
      }
      var D = g.createElement('path', {
        d: 'M1 1l20.5 12L42 1',
        strokeWidth: 2,
        fill: 'none',
      });
      function _({ title: e, titleId: t, ...r }, n) {
        return g.createElement(
          'svg',
          M(
            {
              stroke: 'currentColor',
              width: 43,
              height: 15,
              viewBox: '0 0 43 15',
              ref: n,
              'aria-labelledby': t,
            },
            r
          ),
          e ? g.createElement('title', { id: t }, e) : null,
          D
        );
      }
      const R = g.forwardRef(_);
      r.p;
      var N = r(9573),
        U = r(9290),
        C = r(5911),
        k = r(2918),
        S = r(2192),
        z = r(9343);
      const Z = (0, g.lazy)(() => r.e(507).then(r.bind(r, 2507)));
      const T = function ({
        id: e,
        sectionRef: t,
        disciplines: r,
        scrollIndicatorHidden: n,
        ...s
      }) {
        const i = (0, k.Fg)(),
          [a, o] = (0, g.useState)(0),
          c = (0, x.iP)(),
          A = (0, x.D9)(i),
          l = [r.slice(0, -1).join(', '), r.slice(-1)[0]].join(', and '),
          d = r.filter((e, t) => t === a),
          u = `${e}-title`;
        return (
          (0, x.Yz)(
            () => {
              const e = (a + 1) % r.length;
              o(e);
            },
            5e3,
            i.themeId
          ),
          (0, g.useEffect)(() => {
            A && A.themeId !== i.themeId && o(0);
          }, [i.themeId, A]),
          (0, z.jsx)(C.Z, {
            className: 'intro',
            as: 'section',
            ref: t,
            id: e,
            'aria-labelledby': u,
            tabIndex: -1,
            ...s,
            children: (0, z.jsx)(
              y.ZP,
              {
                appear: !b.Z,
                in: !b.Z,
                timeout: 3e3,
                onEnter: Q.nq,
                children: e =>
                  (0, z.jsxs)(g.Fragment, {
                    children: [
                      !b.Z &&
                        (0, z.jsx)(g.Suspense, {
                          fallback: null,
                          children: (0, z.jsx)(Z, {}),
                        }),
                      (0, z.jsxs)('header', {
                        className: 'intro__text',
                        children: [
                          (0, z.jsx)('h1', {
                            className: E()('intro__name', `intro__name--${e}`),
                            id: u,
                            children: (0, z.jsx)(B.Z, {
                              text: 'Mohamed ALI AROUS',
                              start: !b.Z,
                              delay: 300,
                            }),
                          }),
                          (0, z.jsxs)(U.Z, {
                            level: 0,
                            as: 'h2',
                            className: 'intro__title',
                            children: [
                              (0, z.jsx)(S.Z, {
                                className: 'intro__title-label',
                                children: `Designer + ${l}`,
                              }),
                              (0, z.jsxs)('span', {
                                'aria-hidden': !0,
                                className: E()('intro__title-row', {
                                  'intro__title-row--hidden': b.Z,
                                }),
                                children: [
                                  (0, z.jsx)('span', {
                                    className: E()(
                                      'intro__title-word',
                                      `intro__title-word--${e}`
                                    ),
                                    style: { '--delay': N.T.base.durationXS },
                                    children: 'Web',
                                  }),
                                  (0, z.jsx)('span', {
                                    className: E()(
                                      'intro__title-line',
                                      `intro__title-line--${e}`
                                    ),
                                  }),
                                ],
                              }),
                              (0, z.jsx)(j.Z, {
                                className: E()('intro__title-row', {
                                  'intro__title-row--hidden': b.Z,
                                }),
                                component: 'span',
                                children: d.map(e =>
                                  (0, z.jsx)(
                                    y.ZP,
                                    {
                                      appear: !0,
                                      timeout: { enter: 3e3, exit: 2e3 },
                                      onEnter: Q.nq,
                                      children: t =>
                                        (0, z.jsx)('span', {
                                          'aria-hidden': !0,
                                          className: E()(
                                            'intro__title-word',
                                            'intro__title-word--plus',
                                            `intro__title-word--${t}`
                                          ),
                                          style: { '--delay': N.T.base.durationL },
                                          children: e,
                                        }),
                                    },
                                    e
                                  )
                                ),
                              }),
                            ],
                          }),
                        ],
                      }),
                      c.width > I.BC.tablet &&
                        (0, z.jsx)('div', {
                          className: E()(
                            'intro__scroll-indicator',
                            `intro__scroll-indicator--${e}`,
                            { 'intro__scroll-indicator--hidden': n }
                          ),
                          status: e,
                        }),
                      c.width <= I.BC.tablet &&
                        (0, z.jsx)('div', {
                          className: E()(
                            'intro__mobile-scroll-indicator',
                            `intro__mobile-scroll-indicator--${e}`,
                            { 'intro__mobile-scroll-indicator--hidden': n }
                          ),
                          children: (0, z.jsx)(R, { 'aria-hidden': !0 }),
                        }),
                    ],
                  }),
              },
              i.themeId
            ),
          })
        );
      };
      var F = r(6896),
        P = r(1984),
        L = r(4825),
        H = r(8949),
        J = r(5197),
        W = r(5186),
        Y = r(1407);
      function G() {
        return (
          (G =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
              }
              return e;
            }),
          G.apply(this, arguments)
        );
      }
      var O = g.createElement('path', {
        d:
          'M32.544 651.088l1.152.288c.576.144 1.008.288 1.44.432l3.744.864c46.224 11.808 75.312 36.864 95.76 82.656-9.648 4.752-15.12 8.784-24.192 18.144-11.952-38.304-37.44-64.224-70.992-72.432v60.192c.144 15.264.288 18.72.864 23.76H14.4c.864-5.472 1.152-9.504 1.152-24.192v-73.44C6.624 666.928 0 660.016 0 651.232c0-9.072 7.2-16.272 16.272-16.272s16.128 7.056 16.272 16.128zm-24.48.144c0 4.464 3.744 8.208 8.208 8.208 4.32 0 8.064-3.744 8.064-8.208s-3.744-8.208-8.064-8.208c-4.464 0-8.208 3.744-8.208 8.208zm111.024-104.528v61.776h9.936v26.208c-7.92-.864-12.816-1.152-23.472-1.152H31.536c-6.192 0-10.656.144-16.56.576.432-5.04.576-7.92.576-17.424v-77.616c0-8.928 0-11.088-.576-17.856 5.04.288 10.224.432 16.992.432h73.008c11.088 0 18-.288 23.76-1.008v26.064h-9.648zm-23.04 0H38.592v61.776h57.456v-61.776zM12.96 403.44l12.528-12.96c2.448 1.584 3.168 1.872 8.064 3.024 26.784 6.48 44.784 15.12 61.2 28.944 15.984 13.392 27.504 29.52 39.168 54.864-10.944 5.616-14.832 8.64-24.192 18.144-6.768-20.736-15.552-35.856-28.224-48.528-12.24-12.096-25.344-19.44-42.624-23.904v59.76c0 13.968.144 16.56.864 24.192H13.68c1.008-6.192 1.152-10.512 1.152-24.624v-68.4c0-4.752-.432-7.344-1.872-10.512zm13.968-106.112l13.824-20.16c1.584 1.872 1.584 1.872 5.04 5.04 8.64 7.776 16.272 16.56 23.472 26.64h44.352c9.36 0 14.688-.144 19.872-.864v25.632c-5.616-.72-9.36-1.008-19.872-1.008H83.52c7.344 12.24 9.36 16.848 16.992 37.584-7.92 3.168-13.392 6.48-20.448 12.24-6.192-22.176-15.12-41.328-27.36-58.32-8.784-12.24-18.432-22.32-25.776-26.784zm55.584-35.264H54.72c1.008-6.768 1.296-14.544 1.296-29.52v-68.832c0-14.4-.288-19.872-1.296-29.52h27.792c-.72 6.912-.864 13.248-.864 29.664V232.4c0 16.128.144 20.88.864 29.664zM8.352 113.76l1.584-27.216c4.896.576 4.896.576 33.408 1.584 30.096.864 46.08 3.744 61.776 10.656 10.656 4.752 18.432 10.224 28.8 20.016-9.648 7.344-13.68 11.376-20.16 20.592-7.344-8.208-13.392-12.672-22.896-17.136-14.112-6.768-31.968-9.072-69.264-9.072-6.336 0-9.504.144-13.248.576zm-.72-40.896V45.792c5.904.864 8.208 1.008 16.704 1.152l75.456.72c-4.896-7.776-9.072-12.384-15.84-17.28-7.344-5.184-14.832-8.64-24.624-11.232C68.256 11.952 72 8.208 78.336 0c16.128 6.48 27.216 13.968 36.576 24.912 7.344 8.64 11.088 15.696 16.416 30.24 1.44 4.032 1.872 5.184 3.024 7.056l-12.96 12.384c-3.744-1.296-6.192-1.584-12.096-1.584l-85.248-.72h-5.184c-4.608 0-7.776.144-11.232.576z',
      });
      function V({ title: e, titleId: t, ...r }, n) {
        return g.createElement(
          'svg',
          G(
            {
              'aria-hidden': 'true',
              fill: 'currentColor',
              width: 135,
              height: 765,
              viewBox: '0 0 135 765',
              ref: n,
              'aria-labelledby': t,
            },
            r
          ),
          e ? g.createElement('title', { id: t }, e) : null,
          O
        );
      }
      const $ = g.forwardRef(V);
      r.p;
      var K = r(2968);
      const X = ({ status: e, titleId: t }) =>
          (0, z.jsxs)(g.Fragment, {
            children: [
              (0, z.jsx)(U.Z, {
                className: E()('profile__title', `profile__title--${e}`),
                level: 3,
                id: t,
                children: (0, z.jsx)(B.Z, {
                  text: 'Hi there',
                  start: 'exited' !== e,
                  delay: 500,
                }),
              }),
              (0, z.jsxs)(K.Z, {
                className: E()('profile__description', `profile__description--${e}`),
                size: 'l',
                children: [
                  "I\u2019m Ali Arous Mohamed amin, currently I live in ALGERIA working as a WEB DEVLOPER designer .My projects include UX design, UI animations, and icon illustration. Being comfortable with code allows me to rapidly prototype and validate experiences. If you're interested in the tools and software I use check out my ",
                  (0, z.jsx)(F.Z, { href: '/uses', children: 'uses page' }),
                  '.',
                ],
              }),
              (0, z.jsx)(U.Z, {
                className: E()('profile__title', `profile__title--${e}`),
                level: 3,
                id: t,
                children: (0, z.jsx)(B.Z, {
                  text: 'Contact Me :',
                  start: 'exited' !== e,
                  delay: 500,
                }),
              }),
              (0, z.jsx)(K.Z, {
                className: E()('profile__description', `profile__description--${e}`),
                size: 'l',
                children: 'phone :   +213666287238 EMAIL :  arxam82@gmail.com',
              }),
            ],
          }),
        q = ({ id: e, visible: t, sectionRef: r }) => {
          const n = `${e}-title`;
          return (0, z.jsx)(C.Z, {
            className: 'profile',
            as: 'section',
            id: e,
            ref: r,
            'aria-labelledby': n,
            tabIndex: -1,
            children: (0, z.jsx)(y.ZP, {
              in: t,
              timeout: 0,
              onEnter: Q.nq,
              children: e =>
                (0, z.jsxs)('div', {
                  className: 'profile__content',
                  children: [
                    (0, z.jsxs)('div', {
                      className: 'profile__column',
                      children: [
                        (0, z.jsx)(X, { status: e, titleId: n }),
                        (0, z.jsx)(P.z, {
                          secondary: !0,
                          className: E()('profile__button', `profile__button--${e}`),
                          href: '/contact',
                          icon: 'send',
                          children: 'Send me a message',
                        }),
                      ],
                    }),
                    (0, z.jsxs)('div', {
                      className: 'profile__column',
                      children: [
                        (0, z.jsxs)('div', {
                          className: 'profile__tag',
                          'aria-hidden': !0,
                          children: [
                            (0, z.jsx)(L.Z, {
                              notchWidth: '64px',
                              notchHeight: '8px',
                              collapsed: 'entered' !== e,
                              collapseDelay: 1e3,
                            }),
                            (0, z.jsx)('div', {
                              className: E()(
                                'profile__tag-text',
                                `profile__tag-text--${e}`
                              ),
                              children: 'About Me',
                            }),
                          ],
                        }),
                        (0, z.jsxs)('div', {
                          className: 'profile__image-wrapper',
                          children: [
                            (0, z.jsx)(H.Z, {
                              reveal: !0,
                              delay: 100,
                              placeholder: Y,
                              srcSet: `${J} 480w, ${W} 960w`,
                              sizes: `(max-width: ${I.BC.mobile}px) 100vw, 480px`,
                              alt: 'Hiroshima in Japan',
                            }),
                            (0, z.jsx)($, {
                              className: E()('profile__svg', `profile__svg--${e}`),
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
            }),
          });
        };
      var ee = r(1524),
        te = {
          uniforms: { tDiffuse: { value: null }, h: { value: 1 / 512 } },
          vertexShader: [
            'varying vec2 vUv;',
            'void main() {',
            '\tvUv = uv;',
            '\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );',
            '}',
          ].join('\n'),
          fragmentShader: [
            'uniform sampler2D tDiffuse;',
            'uniform float h;',
            'varying vec2 vUv;',
            'void main() {',
            '\tvec4 sum = vec4( 0.0 );',
            '\tsum += texture2D( tDiffuse, vec2( vUv.x - 4.0 * h, vUv.y ) ) * 0.051;',
            '\tsum += texture2D( tDiffuse, vec2( vUv.x - 3.0 * h, vUv.y ) ) * 0.0918;',
            '\tsum += texture2D( tDiffuse, vec2( vUv.x - 2.0 * h, vUv.y ) ) * 0.12245;',
            '\tsum += texture2D( tDiffuse, vec2( vUv.x - 1.0 * h, vUv.y ) ) * 0.1531;',
            '\tsum += texture2D( tDiffuse, vec2( vUv.x, vUv.y ) ) * 0.1633;',
            '\tsum += texture2D( tDiffuse, vec2( vUv.x + 1.0 * h, vUv.y ) ) * 0.1531;',
            '\tsum += texture2D( tDiffuse, vec2( vUv.x + 2.0 * h, vUv.y ) ) * 0.12245;',
            '\tsum += texture2D( tDiffuse, vec2( vUv.x + 3.0 * h, vUv.y ) ) * 0.0918;',
            '\tsum += texture2D( tDiffuse, vec2( vUv.x + 4.0 * h, vUv.y ) ) * 0.051;',
            '\tgl_FragColor = sum;',
            '}',
          ].join('\n'),
        },
        re = {
          uniforms: { tDiffuse: { value: null }, v: { value: 1 / 512 } },
          vertexShader: [
            'varying vec2 vUv;',
            'void main() {',
            '\tvUv = uv;',
            '\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );',
            '}',
          ].join('\n'),
          fragmentShader: [
            'uniform sampler2D tDiffuse;',
            'uniform float v;',
            'varying vec2 vUv;',
            'void main() {',
            '\tvec4 sum = vec4( 0.0 );',
            '\tsum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 4.0 * v ) ) * 0.051;',
            '\tsum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 3.0 * v ) ) * 0.0918;',
            '\tsum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 2.0 * v ) ) * 0.12245;',
            '\tsum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 1.0 * v ) ) * 0.1531;',
            '\tsum += texture2D( tDiffuse, vec2( vUv.x, vUv.y ) ) * 0.1633;',
            '\tsum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 1.0 * v ) ) * 0.1531;',
            '\tsum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 2.0 * v ) ) * 0.12245;',
            '\tsum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 3.0 * v ) ) * 0.0918;',
            '\tsum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 4.0 * v ) ) * 0.051;',
            '\tgl_FragColor = sum;',
            '}',
          ].join('\n'),
        },
        ne = r(6458),
        se = r(935),
        ie = r(318),
        ae = r(2545);
      const oe = 'spring-up',
        ce = 'laptop-open',
        Ae = {
          phone: {
            url: A,
            width: 374,
            height: 512,
            position: { x: 0, y: 0, z: 0 },
            animation: oe,
          },
          laptop: {
            url: l,
            width: 1280,
            height: 800,
            position: { x: 0, y: 0, z: 0 },
            animation: ce,
          },
        },
        le = 'Frame',
        de = 'Screen';
      const ue = ({
        models: e,
        show: t = !0,
        showDelay: r = 0,
        cameraPosition: n = { x: 0, y: 0, z: 8 },
        enableControls: s,
        style: i,
        className: a,
        alt: o,
        ...c
      }) => {
        const [A, l] = (0, g.useState)(),
          [d, u] = (0, g.useState)(!1),
          m = (0, g.useRef)(),
          p = (0, g.useRef)(),
          h = (0, g.useRef)(),
          v = (0, g.useRef)(),
          f = (0, g.useRef)(),
          w = (0, g.useRef)(),
          y = (0, g.useRef)(),
          j = (0, g.useRef)(),
          B = (0, g.useRef)(),
          Q = (0, g.useRef)(),
          b = (0, g.useRef)(),
          M = (0, g.useRef)(),
          D = (0, g.useRef)(),
          _ = (0, g.useRef)(),
          R = (0, g.useRef)(),
          N = (0, g.useRef)(),
          U = (0, g.useRef)(),
          C = (0, g.useRef)(),
          k = (0, g.useRef)(),
          S = (0, x.NM)(m, !1, { threshold: 0.4 }),
          Z = (0, x.Tb)();
        (0, g.useEffect)(() => {
          const { clientWidth: t, clientHeight: s } = m.current;
          (j.current = new ee.CP7({
            canvas: p.current,
            alpha: !0,
            antialias: !1,
            powerPreference: 'high-performance',
          })),
            j.current.setPixelRatio(2),
            j.current.setSize(t, s),
            (j.current.outputEncoding = ee.knz),
            (j.current.physicallyCorrectLights = !0),
            (h.current = new ee.cPb(36, t / s, 0.1, 100)),
            h.current.position.set(n.x, n.y, n.z),
            (y.current = new ee.xsS()),
            (v.current = new ee.dpR()),
            (f.current = new ne.E()),
            (w.current = new ee.ZAu());
          const i = new ee.Mig(16777215, 1.2),
            a = new ee.Ox3(16777215, 1.1),
            o = new ee.Ox3(16777215, 0.8);
          o.position.set(-6, 2, 2),
            a.position.set(0.5, 0, 0.866),
            (U.current = [i, a, o]),
            U.current.forEach(e => y.current.add(e)),
            (B.current = new ee.ZAu()),
            y.current.add(B.current),
            B.current.position.set(0, 0, -0.8),
            B.current.rotateX(Math.PI / 2);
          const c = 512;
          (Q.current = new ee.dd2(c, c)),
            (Q.current.texture.generateMipmaps = !1),
            (b.current = new ee.dd2(c, c)),
            (b.current.texture.generateMipmaps = !1);
          const A = new ee.BKK(8, 8).rotateX(Math.PI / 2),
            d = new ee.vBJ({ map: Q.current.texture, opacity: 0.8, transparent: !0 });
          (N.current = new ee.Kj0(A, d)),
            (N.current.scale.y = -1),
            B.current.add(N.current),
            (C.current = new ee.Kj0(A)),
            (C.current.visible = !1),
            B.current.add(C.current);
          const u = new ee.vBJ({ color: 16777215, opacity: 0, transparent: !0 });
          (k.current = new ee.Kj0(A, u)),
            k.current.rotateX(Math.PI),
            (k.current.position.y -= 1e-5),
            B.current.add(k.current),
            (M.current = new ee.iKG(-4, 4, 4, -4, 0, 1.5)),
            (M.current.rotation.x = Math.PI / 2),
            B.current.add(M.current),
            (D.current = new ee.lRF()),
            (D.current.userData.darkness = { value: 3 }),
            (D.current.onBeforeCompile = e => {
              (e.uniforms.darkness = D.current.userData.darkness),
                (e.fragmentShader = `\n        uniform float darkness;\n        ${e.fragmentShader.replace(
                  'gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );',
                  'gl_FragColor = vec4( vec3( 0.0 ), ( 1.0 - fragCoordZ ) * darkness );'
                )}\n      `);
            }),
            (D.current.depthTest = !1),
            (D.current.depthWrite = !1),
            (_.current = new ee.jyz(te)),
            (_.current.depthTest = !1),
            (R.current = new ee.jyz(re)),
            (R.current.depthTest = !1);
          const x = async (e, t) => {
              (e.encoding = ee.knz),
                (e.minFilter = ee.wem),
                (e.magFilter = ee.wem),
                (e.flipY = !1),
                (e.anisotropy = j.current.capabilities.getMaxAnisotropy()),
                (e.generateMipmaps = !1),
                await j.current.initTexture(e),
                (t.material.color = new ee.Ilk(16777215)),
                (t.material.transparent = !1),
                (t.material.map = e);
            },
            g = e.map(async (e, t) => {
              const { texture: n, position: s, url: i } = e;
              let a;
              const [o, c] = await Promise.all([
                await f.current.loadAsync(i),
                await v.current.loadAsync(n.placeholder),
              ]);
              o.scene.traverse(async e => {
                e.material &&
                  ((e.material.color = new ee.Ilk(2039845)),
                  e.material.color.convertSRGBToLinear()),
                  e.name === de &&
                    (x(c, e),
                    (a = async () => {
                      const t = await (0, ie.Ax)(n),
                        r = await v.current.loadAsync(t);
                      await x(r, e);
                    }));
              }),
                w.current.add(o.scene);
              const A = (function ({
                model: e,
                gltf: t,
                reduceMotion: r,
                renderFrame: n,
                index: s,
                showDelay: i,
              }) {
                const a = new ee.Pa4(e.position.x, e.position.y, e.position.z);
                if (r) return void t.scene.position.set(...a.toArray());
                if (e.animation === oe) {
                  const e = new ee.Pa4(a.x, a.y - 1, a.z),
                    r = a;
                  t.scene.position.set(...e.toArray());
                  const o = (0, se.S3)(t.scene.position, ({ x: e, y: r, z: s }) => {
                    t.scene.position.set(e, r, s), n();
                  });
                  return {
                    animation: (0, se.tS)(
                      (0, se.gw)(300 * s + 0.6 * i),
                      (0, se.ST)({
                        from: e,
                        to: r,
                        stiffness: 60,
                        damping: 16,
                        restSpeed: 0.001,
                      })
                    ),
                    modelValue: o,
                  };
                }
                if (e.animation === ce) {
                  const e = t.scene.children.find(e => e.name === le),
                    r = new ee.Pa4(ee.M8C.degToRad(90), 0, 0),
                    o = new ee.Pa4(0, 0, 0);
                  t.scene.position.set(...a.toArray()), e.rotation.set(...r.toArray());
                  const c = (0, se.S3)(e.rotation, ({ x: t, y: r, z: s }) => {
                    e.rotation.set(t, r, s), n();
                  });
                  return {
                    animation: (0, se.tS)(
                      (0, se.gw)(300 * s + i + 200),
                      (0, se.ST)({
                        from: r,
                        to: o,
                        stiffness: 50,
                        damping: 14,
                        restSpeed: 0.001,
                      })
                    ),
                    modelValue: c,
                  };
                }
              })({
                model: e,
                gltf: o,
                position: s,
                reduceMotion: Z,
                renderFrame: F,
                index: t,
                showDelay: r,
              });
              return { ...A, loadFullResTexture: a };
            });
          return (
            l(g),
            () => {
              (0, ae.Ji)(U.current), (0, ae.in)(y.current), (0, ae.e8)(j.current);
            }
          );
        }, []);
        const T = (0, g.useCallback)(e => {
            (C.current.visible = !0),
              (C.current.material = _.current),
              (C.current.material.uniforms.tDiffuse.value = Q.current.texture),
              (_.current.uniforms.h.value = e * (1 / 256)),
              j.current.setRenderTarget(b.current),
              j.current.render(C.current, M.current),
              (C.current.material = R.current),
              (C.current.material.uniforms.tDiffuse.value = b.current.texture),
              (R.current.uniforms.v.value = e * (1 / 256)),
              j.current.setRenderTarget(Q.current),
              j.current.render(C.current, M.current),
              (C.current.visible = !1);
          }, []),
          F = (0, g.useCallback)(() => {
            const e = y.current.background;
            (y.current.background = null),
              (y.current.overrideMaterial = D.current),
              j.current.setRenderTarget(Q.current),
              j.current.render(y.current, M.current),
              (y.current.overrideMaterial = null),
              T(5),
              T(2),
              j.current.setRenderTarget(null),
              (y.current.background = e),
              j.current.render(y.current, h.current);
          }, [T]);
        return (
          (0, g.useEffect)(() => {
            let e = [];
            if (!A) return;
            y.current.add(w.current);
            return (
              t &&
                (async () => {
                  const t = await Promise.all(A);
                  u(!0);
                  const r = t.map(async t => {
                    if (t.animation) {
                      const r = t.animation.start(t.modelValue);
                      e.push(r);
                    }
                    Z && F(), await t.loadFullResTexture(), Z && F();
                  });
                  await Promise.all(r);
                })(),
              () => {
                for (const t of e) t.stop();
              }
            );
          }, [A, Z, F, t]),
          (0, g.useEffect)(() => {
            let e, t;
            const r = r => {
              const { rotation: n } = w.current,
                { innerWidth: s, innerHeight: i } = window,
                a = (r.clientX - s / 2) / s,
                o = (r.clientY - i / 2) / i;
              t ||
                (t = (0, se.S3)({ x: n.x, y: n.y }, ({ x: e, y: t }) => {
                  n.set(e, t, n.z), F();
                })),
                (e = (0, se.ST)({
                  from: t.get(),
                  to: { x: o / 2, y: a / 2 },
                  stiffness: 40,
                  damping: 40,
                  velocity: t.getVelocity(),
                  restSpeed: 1e-5,
                  mass: 1.4,
                }).start(t));
            };
            return (
              S && !Z && window.addEventListener('mousemove', r),
              () => {
                var t;
                window.removeEventListener('mousemove', r),
                  null === (t = e) || void 0 === t || t.stop();
              }
            );
          }, [S, Z, F]),
          (0, g.useEffect)(() => {
            const e = () => {
              if (!m.current) return;
              const { clientWidth: e, clientHeight: t } = m.current;
              j.current.setSize(e, t),
                (h.current.aspect = e / t),
                h.current.updateProjectionMatrix(),
                F();
            };
            return (
              window.addEventListener('resize', e),
              e(),
              () => {
                window.removeEventListener('resize', e);
              }
            );
          }, [F]),
          (0, z.jsx)('div', {
            className: E()('model', { 'model--loaded': d }, a),
            style: { '--delay': (0, I.aU)(r), ...i },
            ref: m,
            role: 'img',
            'aria-label': o,
            ...c,
            children: (0, z.jsx)('canvas', { className: 'model__canvas', ref: p }),
          })
        );
      };
      function me() {
        return (
          (me =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
              }
              return e;
            }),
          me.apply(this, arguments)
        );
      }
      var pe = g.createElement('path', {
        d:
          'M113.904 33.552l-.288 1.152a18.13 18.13 0 0 1-.432 1.44l-.864 3.744c-11.808 46.224-36.864 75.312-82.656 95.76-4.752-9.648-8.784-15.12-18.144-24.192 38.304-11.952 64.224-37.44 72.432-70.992H23.76c-15.264.144-18.72.288-23.76.864v-25.92c5.472.864 9.504 1.152 24.192 1.152h73.44c.432-8.928 7.344-15.552 16.128-15.552 9.072 0 16.272 7.2 16.272 16.272s-7.056 16.128-16.128 16.272zm-.144-24.48c-4.464 0-8.208 3.744-8.208 8.208 0 4.32 3.744 8.064 8.208 8.064s8.208-3.744 8.208-8.064c0-4.464-3.744-8.208-8.208-8.208zm104.528 111.024h-61.776v9.936h-26.208c.864-7.92 1.152-12.816 1.152-23.472V32.544c0-6.192-.144-10.656-.576-16.56 5.04.432 7.92.576 17.424.576h77.616c8.928 0 11.088 0 17.856-.576-.288 5.04-.432 10.224-.432 16.992v73.008c0 11.088.288 18 1.008 23.76h-26.064v-9.648zm0-23.04V39.6h-61.776v57.456h61.776zm45.776-68.688L276.88 7.92c15.84 5.76 31.392 12.96 41.328 19.008L305.392 48.96C292 40.032 276.88 32.544 264.064 28.368zm73.008-16.992l14.256-4.752c5.04 6.624 9.36 14.688 12.672 22.896l-14.256 5.184c-3.888-9.504-7.488-16.272-12.672-23.328zm-84.24 52.416L266.08 43.2c15.408 6.048 28.944 12.816 40.176 20.448l-12.24 22.608c-10.368-8.064-26.496-16.848-41.184-22.464zM357.808 4.608L371.344 0c4.752 6.048 8.784 12.816 12.816 22.176l-13.824 5.04c-4.032-9.504-7.776-16.272-12.528-22.608zm-93.6 128.88l-7.2-27.36c12.672 0 30.96-3.888 44.352-9.216 26.928-10.656 45.936-31.824 56.16-62.928 6.912 7.776 13.536 13.392 21.168 18C360.4 97.2 327.712 121.968 274.432 131.04c-5.04 1.008-7.344 1.584-10.224 2.448zM449.952 64.8v42.912h22.464c9.216 0 13.68-.144 19.44-.864v21.888c-5.184-.432-9.216-.576-19.44-.576h-66.96c-10.512 0-12.672 0-19.584.576v-21.888c5.328.72 8.928.864 19.44.864h21.6V64.8h-13.248c-9.504 0-12.528.144-18.72.72V43.488c5.616.72 9.936 1.008 18.576 1.008h50.256c9.216 0 13.248-.288 18.864-1.008V65.52c-4.032-.432-9.936-.72-18.864-.72h-13.824zm97.472-62.064l27.216 4.896c-.72 1.296-1.008 1.728-1.728 3.6-.288.432-.576 1.296-1.008 2.16-.576 1.44-1.008 2.448-1.296 3.024-1.872 4.176-1.872 4.176-2.88 6.192l36.144-.432c5.616 0 7.2-.288 10.656-1.584L626.48 32.4c-1.728 2.88-2.16 3.744-4.176 10.224-7.344 23.904-17.136 42.624-29.808 57.024C579.392 114.624 563.12 126 539.504 136.8c-4.752-9.216-9.216-14.832-17.28-21.888 20.448-7.488 35.424-16.704 48.096-29.376 10.656-10.8 18.72-24.336 24.048-40.896l-38.304.432c-9.36 14.832-19.008 25.344-32.688 36.144-7.344-8.352-10.944-11.52-20.448-17.28 17.568-12.384 28.944-25.488 38.304-43.92 3.744-7.488 5.472-12.24 6.192-17.28zm137.936 130.32h-27.792c.576-6.48.864-10.656.864-22.032V27.216c0-11.664-.144-13.104-1.008-20.88h27.792c-.576 4.176-.72 11.376-.72 21.024v19.728c24.48 8.064 43.056 16.56 65.52 29.952l-13.68 24.48c-13.968-9.648-30.96-19.008-45.36-25.056-5.04-2.016-5.04-2.016-6.48-2.88v37.44c0 9.648.288 16.848.864 22.032z',
      });
      function he({ title: e, titleId: t, ...r }, n) {
        return g.createElement(
          'svg',
          me(
            {
              'aria-hidden': 'true',
              fill: 'currentColor',
              width: 750,
              height: 137,
              viewBox: '0 0 750 137',
              ref: n,
              'aria-labelledby': t,
            },
            r
          ),
          e ? g.createElement('title', { id: t }, e) : null,
          pe
        );
      }
      const ve = g.forwardRef(he),
        fe =
          (r.p,
          ({
            id: e,
            visible: t,
            sectionRef: r,
            index: n,
            title: s,
            description: i,
            model: a,
            buttonText: o,
            buttonLink: c,
            alternate: A,
            ...l
          }) => {
            const d = (0, k.Fg)(),
              { width: u } = (0, x.iP)(),
              m = `${e}-title`,
              p = u <= I.BC.tablet,
              h = 'light' === d.themeId ? 0.7 : 1,
              v = n < 10 ? `0${n}` : n,
              f = `(max-width: ${I.BC.tablet}px) 30vw, 20vw`,
              w = `(max-width: ${I.BC.tablet}px) 80vw, 40vw`,
              j = e =>
                (0, z.jsxs)('div', {
                  className: 'project-summary__details',
                  children: [
                    (0, z.jsxs)('div', {
                      'aria-hidden': !0,
                      className: 'project-summary__index',
                      children: [
                        (0, z.jsx)(L.Z, {
                          notchWidth: '64px',
                          notchHeight: '8px',
                          collapsed: 'entered' !== e,
                          collapseDelay: 1e3,
                        }),
                        (0, z.jsx)('span', {
                          className: E()(
                            'project-summary__index-number',
                            `project-summary__index-number--${e}`
                          ),
                          children: v,
                        }),
                      ],
                    }),
                    (0, z.jsx)(U.Z, {
                      level: 3,
                      as: 'h2',
                      className: E()(
                        'project-summary__title',
                        `project-summary__title--${e}`
                      ),
                      id: m,
                      children: s,
                    }),
                    (0, z.jsx)(K.Z, {
                      className: E()(
                        'project-summary__description',
                        `project-summary__description--${e}`
                      ),
                      children: i,
                    }),
                    (0, z.jsx)('div', {
                      className: E()(
                        'project-summary__button',
                        `project-summary__button--${e}`
                      ),
                      children: (0, z.jsx)(P.z, {
                        iconHoverShift: !0,
                        href: c,
                        iconEnd: 'arrowRight',
                        children: o,
                      }),
                    }),
                  ],
                }),
              B = e =>
                (0, z.jsxs)('div', {
                  className: 'project-summary__preview',
                  children: [
                    'laptop' === a.type &&
                      (0, z.jsxs)(g.Fragment, {
                        children: [
                          (0, z.jsx)(ve, {
                            style: { '--opacity': h },
                            className: E()(
                              'project-summary__svg',
                              'project-summary__svg--laptop',
                              `project-summary__svg--${e}`,
                              { 'project-summary__svg--light': 'light' === d.themeId }
                            ),
                          }),
                          (0, z.jsx)(ue, {
                            className: E()(
                              'project-summary__model',
                              'project-summary__model--laptop'
                            ),
                            alt: a.alt,
                            cameraPosition: { x: 0, y: 0, z: 8 },
                            showDelay: 800,
                            show: (0, Q.pn)(e),
                            models: [
                              { ...Ae.laptop, texture: { ...a.textures[0], sizes: w } },
                            ],
                          }),
                        ],
                      }),
                    'phone' === a.type &&
                      (0, z.jsxs)(g.Fragment, {
                        children: [
                          (0, z.jsx)(ve, {
                            style: { '--opacity': h },
                            className: E()(
                              'project-summary__svg',
                              'project-summary__svg--phone',
                              `project-summary__svg--${e}`,
                              { 'project-summary__svg--light': 'light' === d.themeId }
                            ),
                          }),
                          (0, z.jsx)(ue, {
                            className: E()(
                              'project-summary__model',
                              'project-summary__model--phone'
                            ),
                            alt: a.alt,
                            cameraPosition: { x: 0, y: 0, z: 11.5 },
                            showDelay: 500,
                            show: (0, Q.pn)(e),
                            models: [
                              {
                                ...Ae.phone,
                                position: { x: -0.6, y: 1.1, z: 0 },
                                texture: { ...a.textures[0], sizes: f },
                              },
                              {
                                ...Ae.phone,
                                position: { x: 0.6, y: -0.5, z: 0.3 },
                                texture: { ...a.textures[1], sizes: f },
                              },
                            ],
                          }),
                        ],
                      }),
                  ],
                });
            return (0, z.jsx)(C.Z, {
              className: E()('project-summary', {
                'project-summary--alternate': A,
                'project-summary--first': '01' === n,
              }),
              as: 'section',
              'aria-labelledby': m,
              ref: r,
              id: e,
              tabIndex: -1,
              ...l,
              children: (0, z.jsx)('div', {
                className: 'project-summary__content',
                children: (0, z.jsx)(y.ZP, {
                  in: t,
                  timeout: 0,
                  onEnter: Q.nq,
                  children: e =>
                    (0, z.jsxs)(g.Fragment, {
                      children: [
                        !A && !p && (0, z.jsxs)(g.Fragment, { children: [j(e), B(e)] }),
                        (A || p) && (0, z.jsxs)(g.Fragment, { children: [B(e), j(e)] }),
                      ],
                    }),
                }),
              }),
            });
          });
      var xe = r(7364),
        ge = r(8741);
      const we = ['Developer', 'designer'],
        Ee = () => {
          const { status: e } = (0, x.mk)(),
            { hash: t, state: r } = (0, ge.TH)(),
            w = (0, g.useRef)(!0),
            [E, y] = (0, g.useState)([]),
            [j, B] = (0, g.useState)(!1),
            Q = (0, g.useRef)(),
            b = (0, g.useRef)(),
            I = (0, g.useRef)(),
            M = (0, g.useRef)(),
            D = (0, g.useRef)(),
            _ = (0, x.Tb)();
          return (
            (0, g.useEffect)(() => {
              const e = [Q, b, I, M, D],
                t = new IntersectionObserver(
                  (e, t) => {
                    e.forEach(e => {
                      if (e.isIntersecting) {
                        const r = e.target;
                        if ((t.unobserve(r), E.includes(r))) return;
                        y(e => [...e, r]);
                      }
                    });
                  },
                  { rootMargin: '0px 0px -10% 0px' }
                ),
                r = new IntersectionObserver(
                  ([e]) => {
                    B(!e.isIntersecting);
                  },
                  { rootMargin: '-100% 0px 0px 0px' }
                );
              return (
                e.forEach(e => {
                  t.observe(e.current);
                }),
                r.observe(Q.current),
                () => {
                  t.disconnect(), r.disconnect();
                }
              );
            }, [E]),
            (0, g.useEffect)(() => {
              const r = 'entered' === e,
                n = 'scrollBehavior' in document.documentElement.style;
              let s, i;
              const a = (e, t) => {
                clearTimeout(i);
                const r = [Q, b, D],
                  a = e.replace('#', ''),
                  o = r.filter(e => e.current.id === a)[0];
                if (!o) return;
                const c = t && !_ ? 'smooth' : 'instant',
                  A = o.current.offsetTop;
                (s = new IntersectionObserver(
                  (e, t) => {
                    const [r] = e;
                    r.isIntersecting &&
                      ((i = setTimeout(
                        () => {
                          o.current.focus();
                        },
                        _ ? 0 : 400
                      )),
                      t.unobserve(r.target));
                  },
                  { rootMargin: '-20% 0px -20% 0px' }
                )),
                  s.observe(o.current),
                  n
                    ? window.scroll({ top: A, left: 0, behavior: c })
                    : window.scrollTo(0, A);
              };
              return (
                t && w.current && r
                  ? (a(t, !1), (w.current = !1))
                  : !t && w.current && r
                  ? (window.scrollTo(0, 0), (w.current = !1))
                  : r && a(t, !0),
                () => {
                  clearTimeout(i), s && s.disconnect();
                }
              );
            }, [t, r, _, e]),
            (0, z.jsxs)('div', {
              className: 'home',
              children: [
                (0, z.jsxs)(xe.q, {
                  children: [
                    (0, z.jsx)('title', {
                      children: 'Mohamed ALI AROUS | Designer + Developer',
                    }),
                    (0, z.jsx)('meta', {
                      name: 'description',
                      content: 'Portfolio of Mohamed ALI AROUS \u2013 a Devops.',
                    }),
                    (0, z.jsx)('link', {
                      rel: 'prefetch',
                      href: A,
                      as: 'fetch',
                      crossorigin: '',
                    }),
                    (0, z.jsx)('link', {
                      rel: 'prefetch',
                      href: l,
                      as: 'fetch',
                      crossorigin: '',
                    }),
                  ],
                }),
                (0, z.jsx)(T, {
                  id: 'intro',
                  sectionRef: Q,
                  disciplines: we,
                  scrollIndicatorHidden: j,
                }),
                (0, z.jsx)(fe, {
                  id: 'project-1',
                  sectionRef: b,
                  visible: E.includes(b.current),
                  index: 1,
                  title: 'Cloud',
                  description: 'AWS / Alibaba Cloud  / AZURE / GCP',
                  buttonText: 'View Certification',
                  buttonLink: '/projects/smart-sparrow',
                  model: {
                    type: 'laptop',
                    alt: 'Smart Sparrow lesson builder',
                    textures: [
                      { src: v, srcSet: `${v} 800w, ${p} 1440w`, placeholder: h },
                    ],
                  },
                }),
                (0, z.jsx)(fe, {
                  id: 'project-2',
                  alternate: !0,
                  sectionRef: I,
                  visible: E.includes(I.current),
                  index: 2,
                  title: 'DevOps',
                  description: 'Reduce your time to market',
                  buttonText: 'View Website',
                  buttonLink: 'https://gamestack.Mohamedw.com',
                  model: {
                    type: 'phone',
                    alt: 'App login screen',
                    textures: [
                      { src: c, srcSet: `${c} 254w, ${a} 508w`, placeholder: o },
                      { src: i, srcSet: `${i} 254w, ${n} 508w`, placeholder: s },
                    ],
                  },
                }),
                (0, z.jsx)(fe, {
                  id: 'project-3',
                  sectionRef: M,
                  visible: E.includes(M.current),
                  index: 3,
                  title: 'Biomedical image collaboration',
                  description:
                    'Increasing the amount of collaboration in Slice, an app for biomedical imaging',
                  buttonText: 'View Project',
                  buttonLink: '/projects/slice',
                  model: {
                    type: 'laptop',
                    alt: 'Annotating a biomedical image in the Slice app',
                    textures: [
                      { src: m, srcSet: `${m} 980w, ${d} 1376w`, placeholder: u },
                    ],
                  },
                }),
                (0, z.jsx)(q, {
                  sectionRef: D,
                  visible: E.includes(D.current),
                  id: 'details',
                }),
                (0, z.jsx)(f.Z, {}),
              ],
            })
          );
        };
    },
    318: (e, t, r) => {
      async function n({ src: e, srcSet: t, sizes: r }) {
        return new Promise((n, s) => {
          try {
            if (!e && !t) throw new Error('No image src or srcSet provided');
            const s = new Image();
            e && (s.src = e), t && (s.srcset = t), r && (s.sizes = r);
            const i = () => {
              s.removeEventListener('load', i);
              const e = s.currentSrc;
              n(e);
            };
            s.addEventListener('load', i);
          } catch (i) {
            s(`Error loading ${t}: ${i}`);
          }
        });
      }
      async function s(e) {
        const t = e.split(', ').map(e => {
            const [t, r] = e.split(' ');
            return {
              src: t,
              image: (function (e = 1, t = 1) {
                const r = document.createElement('canvas'),
                  n = r.getContext('2d');
                (r.width = e),
                  (r.height = t),
                  (n.fillStyle = 'rgba(0, 0, 0, 0)'),
                  n.fillRect(0, 0, e, t);
                const s = r.toDataURL('image/png', '');
                return r.remove(), s;
              })(Number(r.replace('w', ''))),
              width: r,
            };
          }),
          r = t.map(({ image: e, width: t }) => `${e} ${t}`).join(', '),
          s = await n({ srcSet: r });
        return t.find(e => e.image === s).src;
      }
      r.d(t, { Ax: () => n, ln: () => s });
    },
    2545: (e, t, r) => {
      r.d(t, { Ji: () => a, e8: () => i, in: () => n });
      const n = e => {
          e.traverse(e => {
            if (e.isMesh)
              if ((e.geometry.dispose(), e.material.isMaterial)) s(e.material);
              else for (const t of e.material) s(t);
          });
        },
        s = e => {
          e.dispose();
          for (const t of Object.keys(e)) {
            const r = e[t];
            r && 'object' === typeof r && 'minFilter' in r && r.dispose();
          }
        },
        i = e => {
          e.dispose(), e.forceContextLoss(), (e = null);
        },
        a = e => {
          for (const t of e) t.parent.remove(t);
        };
    },
    6434: (e, t, r) => {
      e.exports = r.p + 'static/media/gotham-bold.73ce573b9c05a133c93f.woff2';
    },
    3415: (e, t, r) => {
      e.exports = r.p + 'static/media/iphone-11.dfa3acae88de2ed8f46d.glb';
    },
    6582: (e, t, r) => {
      e.exports = r.p + 'static/media/macbook-pro.29527f3f905848ee4764.glb';
    },
    8618: (e, t, r) => {
      e.exports = r.p + 'static/media/gamestack-list-large.89dd2fc94b69debc3478.jpg';
    },
    3612: e => {
      e.exports =
        'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAUFBQUFBQUGBgUICAcICAsKCQkKCxEMDQwNDBEaEBMQEBMQGhcbFhUWGxcpIBwcICkvJyUnLzkzMzlHREddXX0BBQUFBQUFBQYGBQgIBwgICwoJCQoLEQwNDA0MERoQExAQExAaFxsWFRYbFykgHBwgKS8nJScvOTMzOUdER11dff/CABEIAEUAIAMBIgACEQEDEQH/xAAcAAACAgIDAAAAAAAAAAAAAAAEBgMFAQcAAgj/2gAIAQEAAAAA84zyZiNzyYqtEYpKEBu7rwLOSvAbDPSKbaxiDRt0tOB//8QAFwEBAQEBAAAAAAAAAAAAAAAAAwABAv/aAAgBAhAAAABLlWLZc//EABgBAQEAAwAAAAAAAAAAAAAAAAMEAAEC/9oACAEDEAAAANZVJ0YLM3//xAAfEAACAgMBAAMBAAAAAAAAAAAAAQIDBBESIQUTMSL/2gAIAQEAAT8Arjs+sVSZKkpg2Ks1ocloxqU0vCdajEtemx2GJD+S9aiX/rGYeuTJ1yXr1kjD60XxlyZC02SPjcHpLwy8BRg/DOq5kySPjLIRgjOvhKBnrqUidZjZE4rwuybJRLm5fpOKP//EABoRAQEAAwEBAAAAAAAAAAAAAAEAAhAhETH/2gAIAQIBAT8AWJxRg5Jimu3kfNf/xAAcEQACAgIDAAAAAAAAAAAAAAAAAQIhEBESEzH/2gAIAQMBAT8AUcRlDgSdlJDO2xPY1YvD/9k=';
    },
    7019: (e, t, r) => {
      e.exports = r.p + 'static/media/gamestack-list.8f1de0b00d860a183204.jpg';
    },
    7511: (e, t, r) => {
      e.exports = r.p + 'static/media/gamestack-login-large.440209279951b9114efa.jpg';
    },
    3814: e => {
      e.exports =
        'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAUFBQUFBQUGBgUICAcICAsKCQkKCxEMDQwNDBEaEBMQEBMQGhcbFhUWGxcpIBwcICkvJyUnLzkzMzlHREddXX0BBQUFBQUFBQYGBQgIBwgICwoJCQoLEQwNDA0MERoQExAQExAaFxsWFRYbFykgHBwgKS8nJScvOTMzOUdER11dff/CABEIAEUAIAMBIgACEQEDEQH/xAAaAAACAwEBAAAAAAAAAAAAAAADBAACBQEH/9oACAEBAAAAAPAGGkwlsuTolmWA57UCI9Kd1NCIKPRNIsF//8QAGAEBAAMBAAAAAAAAAAAAAAAAAQACBQT/2gAIAQIQAAAA7RrDVmQ//8QAFwEAAwEAAAAAAAAAAAAAAAAAAAIEAf/aAAgBAxAAAACVlc2IuP/EABwQAAIDAQEBAQAAAAAAAAAAAAABAgMRBFExMv/aAAgBAQABPwD6VpITWHThFCeCsLp6hNYfSexJy0iRxItzCYp4O4lafoxscJeDrl4KDRz1xklpHmrZLmrL64R+FVziR6X6S6H6W3aRbQpsc2Ntn//EAB4RAAICAgIDAAAAAAAAAAAAAAECAAMEEhBRESFB/9oACAECAQE/AITFK/YxHn1NG6mjdSvMoRADWJZmUMhAr5//xAAcEQACAQUBAAAAAAAAAAAAAAAAAQIDBBESURD/2gAIAQMBAT8AEsGGJPBsumy6Tt6kpNqZC3qKSbn7/9k=';
    },
    6130: (e, t, r) => {
      e.exports = r.p + 'static/media/gamestack-login.a1efedd043e0f0c361e5.jpg';
    },
    5186: (e, t, r) => {
      e.exports = r.p + 'static/media/profile-large.b2ca24f769489328c93b.jpg';
    },
    1407: e => {
      e.exports =
        'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAkGBggGBQkIBwgKCQkKDRYODQwMDRoTFBAWHxwhIB8cHh4jJzIqIyUvJR4eKzssLzM1ODg4ISo9QTw2QTI3ODX/2wBDAQkKCg0LDRkODhk1JB4kNTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTX/wgARCAAOAAwDAREAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAABAX/xAAXAQADAQAAAAAAAAAAAAAAAAABAgQD/9oADAMBAAIQAxAAAACm+aiJ0VCWX//EAB0QAAICAQUAAAAAAAAAAAAAAAIDAAQVBQYxUmL/2gAIAQEAAT8Aqbqe0iWUzTe0XpIjYMhLmYz3P//EABkRAAMAAwAAAAAAAAAAAAAAAAABAgMTIf/aAAgBAgEBPwB0yHw3MWc//8QAGBEAAgMAAAAAAAAAAAAAAAAAAAECERP/2gAIAQMBAT8AikSqzIxP/9k=';
    },
    5197: (e, t, r) => {
      e.exports = r.p + 'static/media/profile.60bbb1262de36e31882&.jpg';
    },
    194: (e, t, r) => {
      e.exports = r.p + 'static/media/slice-app-large.a6491733d02f5fa98a83.jpg';
    },
    2813: e => {
      e.exports =
        'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAUFBQUFBQUGBgUICAcICAsKCQkKCxEMDQwNDBEaEBMQEBMQGhcbFhUWGxcpIBwcICkvJyUnLzkzMzlHREddXX0BBQUFBQUFBQYGBQgIBwgICwoJCQoLEQwNDA0MERoQExAQExAaFxsWFRYbFykgHBwgKS8nJScvOTMzOUdER11dff/CABEIACgAQAMBIgACEQEDEQH/xAAcAAADAQACAwAAAAAAAAAAAAAFBgcEAAMBAgj/2gAIAQEAAAAAjRqhuHBeLxDmu2U7Mhq+j56ZK9RMKSA1Qw3Q3DEA6NEaOPh4aJ7Pf//EABkBAAIDAQAAAAAAAAAAAAAAAAMEAAECBf/aAAgBAhAAAADUKVZpm+W+0H//xAAXAQEAAwAAAAAAAAAAAAAAAAAEAQMF/9oACAEDEAAAAIm28qUMwtNbf//EACIQAAICAQQDAAMAAAAAAAAAAAECAAMEBRESIQYiMRUyQv/aAAgBAQABPwBDvMGgWMJpeii4L6ynxhWUeks8ZVR+ku0ZK9/WHAQH5PxqN/MqbuaQQXWePKhCTGrq4D5M0VKpmpWopaPkjlKbwdpWZplvF1mg5wUJ3KNUAQe0zdU3B9pn5nMnuNaS0ot2iGYLEMJpWQyhe5VmsE+zKzid+5dklie4LN4lm0T7MBd2E09SAs5ELMmw9xnO8Ro1nET/xAAaEQEAAwEBAQAAAAAAAAAAAAAAAQIDERMx/9oACAECAQE/AHFKdeKFM4lXPiYV+skNH//EABwRAAIDAAMBAAAAAAAAAAAAAAABAgMREhMxMv/aAAgBAwEBPwAwhDkdJFaxVaiqrBVaQ+kVeEEimK0//9k=';
    },
    5492: (e, t, r) => {
      e.exports = r.p + 'static/media/slice-app.091155c4839b170b05d8.jpg';
    },
    3958: (e, t, r) => {
      e.exports =
        r.p + 'static/media/spr-lesson-builder-dark-large.c92ecacb8f469e9e5b9e.jpg';
    },
    4908: e => {
      e.exports =
        'data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAABkAAD/4QMZaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjMtYzAxMSA2Ni4xNDU2NjEsIDIwMTIvMDIvMDYtMTQ6NTY6MjcgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkMzRkJBRkI2MTBENDExRUI5MDI3QUExN0VBMDVFMzM0IiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkMzRkJBRkI1MTBENDExRUI5MDI3QUExN0VBMDVFMzM0IiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDUzYgV2luZG93cyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSI5NjZGQjZDNjFBREQ4NkEyMUY4QUI3NURCM0MzNjdDMyIgc3RSZWY6ZG9jdW1lbnRJRD0iOTY2RkI2QzYxQUREODZBMjFGOEFCNzVEQjNDMzY3QzMiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7/7gAOQWRvYmUAZMAAAAAB/9sAhAABAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAgICAgICAgICAgIDAwMDAwMDAwMDAQEBAQEBAQIBAQICAgECAgMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwP/wAARCAAUACADAREAAhEBAxEB/8QBogAAAAYCAwEAAAAAAAAAAAAABwgGBQQJAwoCAQALAQAABgMBAQEAAAAAAAAAAAAGBQQDBwIIAQkACgsQAAIBAwQBAwMCAwMDAgYJdQECAwQRBRIGIQcTIgAIMRRBMiMVCVFCFmEkMxdScYEYYpElQ6Gx8CY0cgoZwdE1J+FTNoLxkqJEVHNFRjdHYyhVVlcassLS4vJkg3SThGWjs8PT4yk4ZvN1Kjk6SElKWFlaZ2hpanZ3eHl6hYaHiImKlJWWl5iZmqSlpqeoqaq0tba3uLm6xMXGx8jJytTV1tfY2drk5ebn6Onq9PX29/j5+hEAAgEDAgQEAwUEBAQGBgVtAQIDEQQhEgUxBgAiE0FRBzJhFHEIQoEjkRVSoWIWMwmxJMHRQ3LwF+GCNCWSUxhjRPGisiY1GVQ2RWQnCnODk0Z0wtLi8lVldVY3hIWjs8PT4/MpGpSktMTU5PSVpbXF1eX1KEdXZjh2hpamtsbW5vZnd4eXp7fH1+f3SFhoeIiYqLjI2Oj4OUlZaXmJmam5ydnp+So6SlpqeoqaqrrK2ur6/9oADAMBAAIRAxEAPwDVxr67OZnHvkZ5HaVkZ2Ykk/Q/m/uQdwupbgmZzVugRb2sdnF4cQooHQF5aTcPhmlhmlLgsRbV/j7CD7jKshBOOiWfcpILijfAD0HNPnt1/dmEzT6lYG2o/wBbf09uncW04PR5azpdxa4z5dLdN3bi/ZpJqidQQAfVwSR/j/gPZTJvF1CSynoi3K6uraJnPwA9GhhmifbxdCFUxNxZfpY+xzPRlPQlc6IyT6dB9WbgwGNwkglkp2qn1rpbTqv/AIj6/X2F7uyTT4oI1dRxuVzLc3bRqp0jz6B7HmPJZOSoiiVUa5BAFrar/kj2TBWqQD0qtN4j2yMrKfy6YNy5OGjr1jsWkR7WVRf/AHgn3R7Z5u0Do0nnTdbImI9pHRv6X7P+60lvr4H03t/Q29yFN/Z46E9x/ZHohe/P4z/FpPD5ftvK2m2rT+r/AG309hxq511p0R2f0VH8SnidPGL/AIt/DYPB/ndPNtWq3+w9k7afFOnh0Eb36P61tf8AZ16k7Z/hn95Kf+9Or7fyjyf1tf8Ax9i3lv8Ad31Q+v8A7Pz6XTeP+7T+7+NMdf/Z';
    },
    4867: (e, t, r) => {
      e.exports = r.p + 'static/media/spr-lesson-builder-dark.4c66acc3e6086ae01657.jpg';
    },
  },
]);
//# sourceMappingURL=532.5d71f41b.chunk.js.map

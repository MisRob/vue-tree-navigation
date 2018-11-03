!(function(t, e) {
  'object' == typeof exports && 'object' == typeof module
    ? (module.exports = e())
    : 'function' == typeof define && define.amd
      ? define([], e)
      : 'object' == typeof exports
        ? (exports.VueTreeNavigation = e())
        : (t.VueTreeNavigation = e());
})(window, function() {
  return (function(t) {
    var e = {};
    function n(i) {
      if (e[i]) return e[i].exports;
      var r = (e[i] = { i: i, l: !1, exports: {} });
      return t[i].call(r.exports, r, r.exports, n), (r.l = !0), r.exports;
    }
    return (
      (n.m = t),
      (n.c = e),
      (n.d = function(t, e, i) {
        n.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: i });
      }),
      (n.r = function(t) {
        'undefined' != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(t, Symbol.toStringTag, { value: 'Module' }),
          Object.defineProperty(t, '__esModule', { value: !0 });
      }),
      (n.t = function(t, e) {
        if ((1 & e && (t = n(t)), 8 & e)) return t;
        if (4 & e && 'object' == typeof t && t && t.__esModule) return t;
        var i = Object.create(null);
        if (
          (n.r(i),
          Object.defineProperty(i, 'default', { enumerable: !0, value: t }),
          2 & e && 'string' != typeof t)
        )
          for (var r in t)
            n.d(
              i,
              r,
              function(e) {
                return t[e];
              }.bind(null, r)
            );
        return i;
      }),
      (n.n = function(t) {
        var e =
          t && t.__esModule
            ? function() {
                return t.default;
              }
            : function() {
                return t;
              };
        return n.d(e, 'a', e), e;
      }),
      (n.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e);
      }),
      (n.p = ''),
      n((n.s = 16))
    );
  })([
    function(t, e, n) {
      'use strict';
      function i(t, e, n, i, r, a, o, s) {
        var u,
          l = 'function' == typeof t ? t.options : t;
        if (
          (e && ((l.render = e), (l.staticRenderFns = n), (l._compiled = !0)),
          i && (l.functional = !0),
          a && (l._scopeId = 'data-v-' + a),
          o
            ? ((u = function(t) {
                (t =
                  t ||
                  (this.$vnode && this.$vnode.ssrContext) ||
                  (this.parent &&
                    this.parent.$vnode &&
                    this.parent.$vnode.ssrContext)) ||
                  'undefined' == typeof __VUE_SSR_CONTEXT__ ||
                  (t = __VUE_SSR_CONTEXT__),
                  r && r.call(this, t),
                  t &&
                    t._registeredComponents &&
                    t._registeredComponents.add(o);
              }),
              (l._ssrRegister = u))
            : r &&
              (u = s
                ? function() {
                    r.call(this, this.$root.$options.shadowRoot);
                  }
                : r),
          u)
        )
          if (l.functional) {
            l._injectStyles = u;
            var c = l.render;
            l.render = function(t, e) {
              return u.call(e), c(t, e);
            };
          } else {
            var f = l.beforeCreate;
            l.beforeCreate = f ? [].concat(f, u) : [u];
          }
        return { exports: t, options: l };
      }
      n.d(e, 'a', function() {
        return i;
      });
    },
    function(t, e) {
      t.exports = function(t) {
        var e = [];
        return (
          (e.toString = function() {
            return this.map(function(e) {
              var n = (function(t, e) {
                var n = t[1] || '',
                  i = t[3];
                if (!i) return n;
                if (e && 'function' == typeof btoa) {
                  var r = (function(t) {
                      return (
                        '/*# sourceMappingURL=data:application/json;charset=utf-8;base64,' +
                        btoa(unescape(encodeURIComponent(JSON.stringify(t)))) +
                        ' */'
                      );
                    })(i),
                    a = i.sources.map(function(t) {
                      return '/*# sourceURL=' + i.sourceRoot + t + ' */';
                    });
                  return [n]
                    .concat(a)
                    .concat([r])
                    .join('\n');
                }
                return [n].join('\n');
              })(e, t);
              return e[2] ? '@media ' + e[2] + '{' + n + '}' : n;
            }).join('');
          }),
          (e.i = function(t, n) {
            'string' == typeof t && (t = [[null, t, '']]);
            for (var i = {}, r = 0; r < this.length; r++) {
              var a = this[r][0];
              'number' == typeof a && (i[a] = !0);
            }
            for (r = 0; r < t.length; r++) {
              var o = t[r];
              ('number' == typeof o[0] && i[o[0]]) ||
                (n && !o[2]
                  ? (o[2] = n)
                  : n && (o[2] = '(' + o[2] + ') and (' + n + ')'),
                e.push(o));
            }
          }),
          e
        );
      };
    },
    function(t, e, n) {
      'use strict';
      function i(t, e) {
        for (var n = [], i = {}, r = 0; r < e.length; r++) {
          var a = e[r],
            o = a[0],
            s = { id: t + ':' + r, css: a[1], media: a[2], sourceMap: a[3] };
          i[o] ? i[o].parts.push(s) : n.push((i[o] = { id: o, parts: [s] }));
        }
        return n;
      }
      n.r(e),
        n.d(e, 'default', function() {
          return v;
        });
      var r = 'undefined' != typeof document;
      if ('undefined' != typeof DEBUG && DEBUG && !r)
        throw new Error(
          "vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
        );
      var a = {},
        o = r && (document.head || document.getElementsByTagName('head')[0]),
        s = null,
        u = 0,
        l = !1,
        c = function() {},
        f = null,
        d = 'data-vue-ssr-id',
        p =
          'undefined' != typeof navigator &&
          /msie [6-9]\b/.test(navigator.userAgent.toLowerCase());
      function v(t, e, n, r) {
        (l = n), (f = r || {});
        var o = i(t, e);
        return (
          h(o),
          function(e) {
            for (var n = [], r = 0; r < o.length; r++) {
              var s = o[r];
              (u = a[s.id]).refs--, n.push(u);
            }
            e ? h((o = i(t, e))) : (o = []);
            for (r = 0; r < n.length; r++) {
              var u;
              if (0 === (u = n[r]).refs) {
                for (var l = 0; l < u.parts.length; l++) u.parts[l]();
                delete a[u.id];
              }
            }
          }
        );
      }
      function h(t) {
        for (var e = 0; e < t.length; e++) {
          var n = t[e],
            i = a[n.id];
          if (i) {
            i.refs++;
            for (var r = 0; r < i.parts.length; r++) i.parts[r](n.parts[r]);
            for (; r < n.parts.length; r++) i.parts.push(m(n.parts[r]));
            i.parts.length > n.parts.length &&
              (i.parts.length = n.parts.length);
          } else {
            var o = [];
            for (r = 0; r < n.parts.length; r++) o.push(m(n.parts[r]));
            a[n.id] = { id: n.id, refs: 1, parts: o };
          }
        }
      }
      function g() {
        var t = document.createElement('style');
        return (t.type = 'text/css'), o.appendChild(t), t;
      }
      function m(t) {
        var e,
          n,
          i = document.querySelector('style[' + d + '~="' + t.id + '"]');
        if (i) {
          if (l) return c;
          i.parentNode.removeChild(i);
        }
        if (p) {
          var r = u++;
          (i = s || (s = g())),
            (e = y.bind(null, i, r, !1)),
            (n = y.bind(null, i, r, !0));
        } else
          (i = g()),
            (e = function(t, e) {
              var n = e.css,
                i = e.media,
                r = e.sourceMap;
              i && t.setAttribute('media', i);
              f.ssrId && t.setAttribute(d, e.id);
              r &&
                ((n += '\n/*# sourceURL=' + r.sources[0] + ' */'),
                (n +=
                  '\n/*# sourceMappingURL=data:application/json;base64,' +
                  btoa(unescape(encodeURIComponent(JSON.stringify(r)))) +
                  ' */'));
              if (t.styleSheet) t.styleSheet.cssText = n;
              else {
                for (; t.firstChild; ) t.removeChild(t.firstChild);
                t.appendChild(document.createTextNode(n));
              }
            }.bind(null, i)),
            (n = function() {
              i.parentNode.removeChild(i);
            });
        return (
          e(t),
          function(i) {
            if (i) {
              if (
                i.css === t.css &&
                i.media === t.media &&
                i.sourceMap === t.sourceMap
              )
                return;
              e((t = i));
            } else n();
          }
        );
      }
      var _ = (function() {
        var t = [];
        return function(e, n) {
          return (t[e] = n), t.filter(Boolean).join('\n');
        };
      })();
      function y(t, e, n, i) {
        var r = n ? '' : i.css;
        if (t.styleSheet) t.styleSheet.cssText = _(e, r);
        else {
          var a = document.createTextNode(r),
            o = t.childNodes;
          o[e] && t.removeChild(o[e]),
            o.length ? t.insertBefore(a, o[e]) : t.appendChild(a);
        }
      }
    },
    function(t, e, n) {
      'use strict';
      n.r(e);
      var i = n(4),
        r = n.n(i);
      for (var a in i)
        'default' !== a &&
          (function(t) {
            n.d(e, t, function() {
              return i[t];
            });
          })(a);
      e.default = r.a;
    },
    function(t, e, n) {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 });
      var i = a(n(20)),
        r = a(n(15));
      function a(t) {
        return t && t.__esModule ? t : { default: t };
      }
      e.default = {
        data: function() {
          return { isOpen: null };
        },
        props: {
          parentItem: { type: Object, required: !0 },
          level: { type: Number, required: !0 },
          defaultOpenLevel: { type: Number, required: !0 },
        },
        computed: {
          classes: function() {
            return (function(t, e, n) {
              return (
                e in t
                  ? Object.defineProperty(t, e, {
                      value: n,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                    })
                  : (t[e] = n),
                t
              );
            })(
              { 'NavigationLevel--closed': !this.isOpen },
              'NavigationLevel--level-' + this.level,
              !0
            );
          },
        },
        methods: {
          onToggleClick: function() {
            this.isOpen = !this.isOpen;
          },
          onItemClick: function() {
            !1 === this.isOpen && (this.isOpen = !0);
          },
          renderLevelAsOpen: function() {
            if (this.defaultOpenLevel >= this.level) return !0;
            var t = void 0;
            if (
              ((t =
                void 0 !== this.$router
                  ? this.$route.path + this.$route.hash
                  : window.location.pathname + window.location.hash),
              '' !== this.parentItem.meta.target &&
                t.includes(this.parentItem.meta.target))
            )
              return !0;
            for (var e = 0; e < this.parentItem.children.length; e++) {
              var n = this.parentItem.children[e];
              if ('' !== n.meta.target && t.includes(n.meta.target)) return !0;
            }
            return !1;
          },
        },
        components: { NavigationItem: r.default, NavigationToggle: i.default },
        mounted: function() {
          this.isOpen = this.renderLevelAsOpen();
        },
      };
    },
    function(t, e, n) {
      'use strict';
      n.r(e);
      var i = n(6),
        r = n.n(i);
      for (var a in i)
        'default' !== a &&
          (function(t) {
            n.d(e, t, function() {
              return i[t];
            });
          })(a);
      e.default = r.a;
    },
    function(t, e, n) {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = {
          props: { open: { type: Boolean, required: !1, default: !1 } },
        });
    },
    function(t, e, n) {
      var i = n(22);
      'string' == typeof i && (i = [[t.i, i, '']]),
        i.locals && (t.exports = i.locals);
      (0, n(2).default)('24af1295', i, !0, {});
    },
    function(t, e, n) {
      'use strict';
      n.r(e);
      var i = n(9),
        r = n.n(i);
      for (var a in i)
        'default' !== a &&
          (function(t) {
            n.d(e, t, function() {
              return i[t];
            });
          })(a);
      e.default = r.a;
    },
    function(t, e, n) {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = {
          data: function() {
            return { active: !1 };
          },
          props: { item: Object, required: !0 },
          methods: {
            isActive: function() {
              return (
                '' !== this.item.meta.target &&
                (this.$route
                  ? (this.$route.path + this.$route.hash).endsWith(
                      this.item.meta.target
                    ) ||
                    (this.$route.path + this.$route.hash).endsWith(
                      this.item.meta.target + '/'
                    )
                  : window.location.href.endsWith(this.item.meta.target) ||
                    window.location.href.endsWith(this.item.meta.target + '/'))
              );
            },
          },
          computed: {
            showLabel: function() {
              return (
                void 0 === this.item.path &&
                void 0 === this.item.element &&
                void 0 === this.item.external
              );
            },
            showRouterLink: function() {
              return this.showLink && void 0 !== this.$router;
            },
            showHyperLink: function() {
              return this.showLink && void 0 === this.$router;
            },
            showExternalHyperLink: function() {
              return void 0 !== this.item.external;
            },
            showLink: function() {
              return void 0 !== this.item.path || void 0 !== this.item.element;
            },
            classes: function() {
              return { 'NavigationItem--active': this.active };
            },
          },
          watch: {
            item: function() {
              this.active = this.isActive();
            },
            $route: function() {
              this.active = this.isActive();
            },
          },
          mounted: function() {
            var t = this;
            (this.active = this.isActive()),
              this.$router ||
                window.addEventListener('hashchange', function() {
                  t.active = t.isActive();
                });
          },
        });
    },
    function(t, e, n) {
      var i = n(24);
      'string' == typeof i && (i = [[t.i, i, '']]),
        i.locals && (t.exports = i.locals);
      (0, n(2).default)('7ceaf854', i, !0, {});
    },
    function(t, e, n) {
      var i = n(26);
      'string' == typeof i && (i = [[t.i, i, '']]),
        i.locals && (t.exports = i.locals);
      (0, n(2).default)('ea5435ce', i, !0, {});
    },
    function(t, e, n) {
      'use strict';
      var i = function() {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e;
          return n(
            'div',
            { staticClass: 'NavigationLevel', class: t.classes },
            [
              n(
                'div',
                { staticClass: 'NavigationLevel__parent' },
                [
                  n('NavigationToggle', {
                    attrs: { open: t.isOpen },
                    nativeOn: {
                      click: function(e) {
                        return t.onToggleClick(e);
                      },
                    },
                  }),
                  t._v(' '),
                  n('NavigationItem', {
                    attrs: { item: t.parentItem },
                    nativeOn: {
                      click: function(e) {
                        return t.onItemClick(e);
                      },
                    },
                  }),
                ],
                1
              ),
              t._v(' '),
              n(
                'ul',
                { staticClass: 'NavigationLevel__children' },
                [t._t('default')],
                2
              ),
            ]
          );
        },
        r = [];
      n.d(e, 'a', function() {
        return i;
      }),
        n.d(e, 'b', function() {
          return r;
        });
    },
    function(t, e, n) {
      'use strict';
      var i = function() {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e;
          return n(
            'span',
            { staticClass: 'NavigationItem', class: t.classes },
            [
              t.showLabel
                ? n('span', { staticClass: 'NavigationItem__label' }, [
                    t._v(t._s(t.item.name)),
                  ])
                : t._e(),
              t._v(' '),
              t.showRouterLink
                ? n(
                    'router-link',
                    {
                      staticClass: 'NavigationItem__router-link',
                      attrs: { to: t.item.meta.target },
                    },
                    [t._v(t._s(t.item.name))]
                  )
                : t._e(),
              t._v(' '),
              t.showHyperLink
                ? n(
                    'a',
                    {
                      staticClass: 'NavigationItem__link',
                      attrs: { href: t.item.meta.target },
                    },
                    [t._v(t._s(t.item.name))]
                  )
                : t._e(),
              t._v(' '),
              t.showExternalHyperLink
                ? n(
                    'a',
                    {
                      staticClass: 'NavigationItem__external-link',
                      attrs: { href: t.item.meta.target, target: '_blank' },
                    },
                    [t._v(t._s(t.item.name))]
                  )
                : t._e(),
            ],
            1
          );
        },
        r = [];
      n.d(e, 'a', function() {
        return i;
      }),
        n.d(e, 'b', function() {
          return r;
        });
    },
    function(t, e, n) {
      'use strict';
      var i = function() {
          var t = this.$createElement,
            e = this._self._c || t;
          return e(
            'span',
            {
              staticClass: 'NavigationToggle',
              class: { 'NavigationToggle--closed': !this.open },
            },
            [
              e('span', {
                staticClass: 'NavigationToggle__icon',
                class: { 'NavigationToggle__icon--closed': !this.open },
              }),
            ]
          );
        },
        r = [];
      n.d(e, 'a', function() {
        return i;
      }),
        n.d(e, 'b', function() {
          return r;
        });
    },
    function(t, e, n) {
      'use strict';
      n.r(e);
      var i = n(13),
        r = n(8);
      for (var a in r)
        'default' !== a &&
          (function(t) {
            n.d(e, t, function() {
              return r[t];
            });
          })(a);
      n(23);
      var o = n(0),
        s = Object(o.a)(r.default, i.a, i.b, !1, null, null, null);
      (s.options.__file = 'NavigationItem.vue'), (e.default = s.exports);
    },
    function(t, e, n) {
      'use strict';
      var i = (function(t) {
        return t && t.__esModule ? t : { default: t };
      })(n(17));
      t.exports = {
        install: function(t, e) {
          t.component('vue-tree-navigation', i.default);
        },
      };
    },
    function(t, e, n) {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 });
      var i = n(18);
      n(28);
      var r = {
        props: {
          items: { type: Array, required: !0 },
          defaultOpenLevel: { type: Number, default: 0 },
        },
        computed: {
          navItemsWithMetadata: function() {
            var t = JSON.parse(JSON.stringify(this.items));
            return (0, i.insertMetadataToNavItems)(t);
          },
        },
        render: function(t) {
          return t('div', { class: 'TreeNavigation' }, [
            t(
              'div',
              { class: ['NavigationLevel', 'NavigationLevel--level-0'] },
              [
                t(
                  'ul',
                  (0, i.generateLevel)(
                    t,
                    this.navItemsWithMetadata,
                    1,
                    this.defaultOpenLevel
                  )
                ),
              ]
            ),
          ]);
        },
      };
      e.default = r;
    },
    function(t, e, n) {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.getItemMetadata = e.insertMetadataToNavItems = e.generateLevel = void 0);
      var i = o(n(19)),
        r = o(n(15)),
        a = n(27);
      function o(t) {
        return t && t.__esModule ? t : { default: t };
      }
      (e.generateLevel = function t(e, n, a, o) {
        var s = [];
        return (
          n.forEach(function(n) {
            if (n.hasOwnProperty('children')) {
              var u = e(
                i.default,
                { props: { parentItem: n, level: a, defaultOpenLevel: o } },
                [].concat(
                  (function(t) {
                    if (Array.isArray(t)) {
                      for (var e = 0, n = Array(t.length); e < t.length; e++)
                        n[e] = t[e];
                      return n;
                    }
                    return Array.from(t);
                  })(t(e, n.children, a + 1, o))
                )
              );
              s.push(e('li', [u]));
            } else {
              var l = e(r.default, { props: { item: n } });
              s.push(e('li', [l]));
            }
          }),
          s
        );
      }),
        (e.insertMetadataToNavItems = function t(e, n) {
          return (
            e.forEach(function(e) {
              (e.meta = s(e, n)),
                e.hasOwnProperty('children') && (e.children = t(e.children, e));
            }),
            e
          );
        });
      var s = (e.getItemMetadata = function(t, e) {
        var n = (0, a.sanitizeElement)(t.element),
          i = (0, a.sanitizePath)(t.path),
          r = t.external;
        if (void 0 === e) {
          if (void 0 === n && void 0 === i && void 0 === r)
            return { path: '', target: '' };
          if (void 0 !== r) return { path: '', target: r };
          if (void 0 !== i) return { path: i, target: i };
          if (void 0 !== n) return { path: '', target: '/' + n };
        }
        var o = (0, a.sanitizePath)(e.meta.path);
        return void 0 !== r
          ? { path: o, target: r }
          : void 0 !== i
            ? { path: o + i, target: o + i }
            : void 0 !== n
              ? { path: o, target: (0, a.sanitizePath)(o + n) }
              : { path: o, target: '' };
      });
    },
    function(t, e, n) {
      'use strict';
      n.r(e);
      var i = n(12),
        r = n(3);
      for (var a in r)
        'default' !== a &&
          (function(t) {
            n.d(e, t, function() {
              return r[t];
            });
          })(a);
      n(25);
      var o = n(0),
        s = Object(o.a)(r.default, i.a, i.b, !1, null, null, null);
      (s.options.__file = 'NavigationLevel.vue'), (e.default = s.exports);
    },
    function(t, e, n) {
      'use strict';
      n.r(e);
      var i = n(14),
        r = n(5);
      for (var a in r)
        'default' !== a &&
          (function(t) {
            n.d(e, t, function() {
              return r[t];
            });
          })(a);
      n(21);
      var o = n(0),
        s = Object(o.a)(r.default, i.a, i.b, !1, null, null, null);
      (s.options.__file = 'NavigationToggle.vue'), (e.default = s.exports);
    },
    function(t, e, n) {
      'use strict';
      var i = n(7);
      n.n(i).a;
    },
    function(t, e, n) {
      (t.exports = n(1)(!1)).push([
        t.i,
        '\n.NavigationToggle{position:relative;top:-3px;padding:5px 5px 5px 3px;cursor:pointer\n}\n.NavigationToggle__icon{display:inline-block;padding:3px;border:solid #000;border-width:0 2px 2px 0;transform:rotate(45deg)\n}\n.NavigationToggle__icon--closed{transform:rotate(-45deg)\n}\n',
        '',
      ]);
    },
    function(t, e, n) {
      'use strict';
      var i = n(10);
      n.n(i).a;
    },
    function(t, e, n) {
      (t.exports = n(1)(!1)).push([
        t.i,
        '\n.NavigationItem{display:inline-block;padding-top:5px;padding-bottom:5px\n}\n.NavigationItem span{cursor:pointer\n}\n',
        '',
      ]);
    },
    function(t, e, n) {
      'use strict';
      var i = n(11);
      n.n(i).a;
    },
    function(t, e, n) {
      (t.exports = n(1)(!1)).push([
        t.i,
        '\n.NavigationLevel--closed ul{display:none\n}\n',
        '',
      ]);
    },
    function(t, e, n) {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 });
      (e.sanitizeElement = function(t) {
        return void 0 === t || '' === t
          ? t
          : ('#' !== t[0] && (t = '#' + t), t);
      }),
        (e.sanitizePath = function(t) {
          if (void 0 !== t)
            return (
              '/' !== t[0] && (t = '/' + t),
              '/' === t[t.length - 1] && (t = t.slice(0, -1)),
              t
            );
        });
    },
    function(t, e, n) {
      var i = n(29);
      'string' == typeof i && (i = [[t.i, i, '']]),
        i.locals && (t.exports = i.locals);
      (0, n(2).default)('0965e660', i, !0, {});
    },
    function(t, e, n) {
      (t.exports = n(1)(!1)).push([
        t.i,
        '.TreeNavigation{display:inline-block;padding:0;margin:0}.TreeNavigation ul{padding:0;margin:0;list-style-type:none}.TreeNavigation li{padding-left:20px}\n',
        '',
      ]);
    },
  ]);
});
//# sourceMappingURL=vue-tree-navigation.js.map

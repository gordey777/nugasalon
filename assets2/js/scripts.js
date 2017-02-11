/* Modernizr 2.8.3 (Custom Build) | Build: http://modernizr.com/download/#-shiv-cssclasses-teststyles-testprop-testallprops-prefixes-domprefixes-load */

;
window.Modernizr = function(a, b, c) {
    function z(a) {
      j.cssText = a
    }

    function A(a, b) {
      return z(m.join(a + ";") + (b || ""))
    }

    function B(a, b) {
      return typeof a === b
    }

    function C(a, b) {
      return !!~("" + a).indexOf(b)
    }

    function D(a, b) {
      for (var d in a) {
        var e = a[d];
        if (!C(e, "-") && j[e] !== c) return b == "pfx" ? e : !0
      }
      return !1
    }

    function E(a, b, d) {
      for (var e in a) {
        var f = b[a[e]];
        if (f !== c) return d === !1 ? a[e] : B(f, "function") ? f.bind(d || b) : f
      }
      return !1
    }

    function F(a, b, c) {
      var d = a.charAt(0).toUpperCase() + a.slice(1),
        e = (a + " " + o.join(d + " ") + d).split(" ");
      return B(b, "string") || B(b, "undefined") ? D(e, b) : (e = (a + " " + p.join(d + " ") + d).split(" "), E(e, b, c))
    }
    var d = "2.8.3",
      e = {},
      f = !0,
      g = b.documentElement,
      h = "modernizr",
      i = b.createElement(h),
      j = i.style,
      k, l = {}.toString,
      m = " -webkit- -moz- -o- -ms- ".split(" "),
      n = "Webkit Moz O ms",
      o = n.split(" "),
      p = n.toLowerCase().split(" "),
      q = {},
      r = {},
      s = {},
      t = [],
      u = t.slice,
      v, w = function(a, c, d, e) {
        var f, i, j, k, l = b.createElement("div"),
          m = b.body,
          n = m || b.createElement("body");
        if (parseInt(d, 10))
          while (d--) j = b.createElement("div"), j.id = e ? e[d] : h + (d + 1), l.appendChild(j);
        return f = ["&#173;", '<style id="s', h, '">', a, "</style>"].join(""), l.id = h, (m ? l : n).innerHTML += f, n.appendChild(l), m || (n.style.background = "", n.style.overflow = "hidden", k = g.style.overflow, g.style.overflow = "hidden", g.appendChild(n)), i = c(l, a), m ? l.parentNode.removeChild(l) : (n.parentNode.removeChild(n), g.style.overflow = k), !!i
      },
      x = {}.hasOwnProperty,
      y;
    !B(x, "undefined") && !B(x.call, "undefined") ? y = function(a, b) {
      return x.call(a, b)
    } : y = function(a, b) {
      return b in a && B(a.constructor.prototype[b], "undefined")
    }, Function.prototype.bind || (Function.prototype.bind = function(b) {
      var c = this;
      if (typeof c != "function") throw new TypeError;
      var d = u.call(arguments, 1),
        e = function() {
          if (this instanceof e) {
            var a = function() {};
            a.prototype = c.prototype;
            var f = new a,
              g = c.apply(f, d.concat(u.call(arguments)));
            return Object(g) === g ? g : f
          }
          return c.apply(b, d.concat(u.call(arguments)))
        };
      return e
    });
    for (var G in q) y(q, G) && (v = G.toLowerCase(), e[v] = q[G](), t.push((e[v] ? "" : "no-") + v));
    return e.addTest = function(a, b) {
        if (typeof a == "object")
          for (var d in a) y(a, d) && e.addTest(d, a[d]);
        else {
          a = a.toLowerCase();
          if (e[a] !== c) return e;
          b = typeof b == "function" ? b() : b, typeof f != "undefined" && f && (g.className += " " + (b ? "" : "no-") + a), e[a] = b
        }
        return e
      }, z(""), i = k = null,
      function(a, b) {
        function l(a, b) {
          var c = a.createElement("p"),
            d = a.getElementsByTagName("head")[0] || a.documentElement;
          return c.innerHTML = "x<style>" + b + "</style>", d.insertBefore(c.lastChild, d.firstChild)
        }

        function m() {
          var a = s.elements;
          return typeof a == "string" ? a.split(" ") : a
        }

        function n(a) {
          var b = j[a[h]];
          return b || (b = {}, i++, a[h] = i, j[i] = b), b
        }

        function o(a, c, d) {
          c || (c = b);
          if (k) return c.createElement(a);
          d || (d = n(c));
          var g;
          return d.cache[a] ? g = d.cache[a].cloneNode() : f.test(a) ? g = (d.cache[a] = d.createElem(a)).cloneNode() : g = d.createElem(a), g.canHaveChildren && !e.test(a) && !g.tagUrn ? d.frag.appendChild(g) : g
        }

        function p(a, c) {
          a || (a = b);
          if (k) return a.createDocumentFragment();
          c = c || n(a);
          var d = c.frag.cloneNode(),
            e = 0,
            f = m(),
            g = f.length;
          for (; e < g; e++) d.createElement(f[e]);
          return d
        }

        function q(a, b) {
          b.cache || (b.cache = {}, b.createElem = a.createElement, b.createFrag = a.createDocumentFragment, b.frag = b.createFrag()), a.createElement = function(c) {
            return s.shivMethods ? o(c, a, b) : b.createElem(c)
          }, a.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + m().join().replace(/[\w\-]+/g, function(a) {
            return b.createElem(a), b.frag.createElement(a), 'c("' + a + '")'
          }) + ");return n}")(s, b.frag)
        }

        function r(a) {
          a || (a = b);
          var c = n(a);
          return s.shivCSS && !g && !c.hasCSS && (c.hasCSS = !!l(a, "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")), k || q(a, c), a
        }
        var c = "3.7.0",
          d = a.html5 || {},
          e = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
          f = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
          g, h = "_html5shiv",
          i = 0,
          j = {},
          k;
        (function() {
          try {
            var a = b.createElement("a");
            a.innerHTML = "<xyz></xyz>", g = "hidden" in a, k = a.childNodes.length == 1 || function() {
              b.createElement("a");
              var a = b.createDocumentFragment();
              return typeof a.cloneNode == "undefined" || typeof a.createDocumentFragment == "undefined" || typeof a.createElement == "undefined"
            }()
          } catch (c) {
            g = !0, k = !0
          }
        })();
        var s = {
          elements: d.elements || "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",
          version: c,
          shivCSS: d.shivCSS !== !1,
          supportsUnknownElements: k,
          shivMethods: d.shivMethods !== !1,
          type: "default",
          shivDocument: r,
          createElement: o,
          createDocumentFragment: p
        };
        a.html5 = s, r(b)
      }(this, b), e._version = d, e._prefixes = m, e._domPrefixes = p, e._cssomPrefixes = o, e.testProp = function(a) {
        return D([a])
      }, e.testAllProps = F, e.testStyles = w, g.className = g.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (f ? " js " + t.join(" ") : ""), e
  }(this, this.document),
  function(a, b, c) {
    function d(a) {
      return "[object Function]" == o.call(a)
    }

    function e(a) {
      return "string" == typeof a
    }

    function f() {}

    function g(a) {
      return !a || "loaded" == a || "complete" == a || "uninitialized" == a
    }

    function h() {
      var a = p.shift();
      q = 1, a ? a.t ? m(function() {
        ("c" == a.t ? B.injectCss : B.injectJs)(a.s, 0, a.a, a.x, a.e, 1)
      }, 0) : (a(), h()) : q = 0
    }

    function i(a, c, d, e, f, i, j) {
      function k(b) {
        if (!o && g(l.readyState) && (u.r = o = 1, !q && h(), l.onload = l.onreadystatechange = null, b)) {
          "img" != a && m(function() {
            t.removeChild(l)
          }, 50);
          for (var d in y[c]) y[c].hasOwnProperty(d) && y[c][d].onload()
        }
      }
      var j = j || B.errorTimeout,
        l = b.createElement(a),
        o = 0,
        r = 0,
        u = {
          t: d,
          s: c,
          e: f,
          a: i,
          x: j
        };
      1 === y[c] && (r = 1, y[c] = []), "object" == a ? l.data = c : (l.src = c, l.type = a), l.width = l.height = "0", l.onerror = l.onload = l.onreadystatechange = function() {
        k.call(this, r)
      }, p.splice(e, 0, u), "img" != a && (r || 2 === y[c] ? (t.insertBefore(l, s ? null : n), m(k, j)) : y[c].push(l))
    }

    function j(a, b, c, d, f) {
      return q = 0, b = b || "j", e(a) ? i("c" == b ? v : u, a, b, this.i++, c, d, f) : (p.splice(this.i++, 0, a), 1 == p.length && h()), this
    }

    function k() {
      var a = B;
      return a.loader = {
        load: j,
        i: 0
      }, a
    }
    var l = b.documentElement,
      m = a.setTimeout,
      n = b.getElementsByTagName("script")[0],
      o = {}.toString,
      p = [],
      q = 0,
      r = "MozAppearance" in l.style,
      s = r && !!b.createRange().compareNode,
      t = s ? l : n.parentNode,
      l = a.opera && "[object Opera]" == o.call(a.opera),
      l = !!b.attachEvent && !l,
      u = r ? "object" : l ? "script" : "img",
      v = l ? "script" : u,
      w = Array.isArray || function(a) {
        return "[object Array]" == o.call(a)
      },
      x = [],
      y = {},
      z = {
        timeout: function(a, b) {
          return b.length && (a.timeout = b[0]), a
        }
      },
      A, B;
    B = function(a) {
      function b(a) {
        var a = a.split("!"),
          b = x.length,
          c = a.pop(),
          d = a.length,
          c = {
            url: c,
            origUrl: c,
            prefixes: a
          },
          e, f, g;
        for (f = 0; f < d; f++) g = a[f].split("="), (e = z[g.shift()]) && (c = e(c, g));
        for (f = 0; f < b; f++) c = x[f](c);
        return c
      }

      function g(a, e, f, g, h) {
        var i = b(a),
          j = i.autoCallback;
        i.url.split(".").pop().split("?").shift(), i.bypass || (e && (e = d(e) ? e : e[a] || e[g] || e[a.split("/").pop().split("?")[0]]), i.instead ? i.instead(a, e, f, g, h) : (y[i.url] ? i.noexec = !0 : y[i.url] = 1, f.load(i.url, i.forceCSS || !i.forceJS && "css" == i.url.split(".").pop().split("?").shift() ? "c" : c, i.noexec, i.attrs, i.timeout), (d(e) || d(j)) && f.load(function() {
          k(), e && e(i.origUrl, h, g), j && j(i.origUrl, h, g), y[i.url] = 2
        })))
      }

      function h(a, b) {
        function c(a, c) {
          if (a) {
            if (e(a)) c || (j = function() {
              var a = [].slice.call(arguments);
              k.apply(this, a), l()
            }), g(a, j, b, 0, h);
            else if (Object(a) === a)
              for (n in m = function() {
                  var b = 0,
                    c;
                  for (c in a) a.hasOwnProperty(c) && b++;
                  return b
                }(), a) a.hasOwnProperty(n) && (!c && !--m && (d(j) ? j = function() {
                var a = [].slice.call(arguments);
                k.apply(this, a), l()
              } : j[n] = function(a) {
                return function() {
                  var b = [].slice.call(arguments);
                  a && a.apply(this, b), l()
                }
              }(k[n])), g(a[n], j, b, n, h))
          } else !c && l()
        }
        var h = !!a.test,
          i = a.load || a.both,
          j = a.callback || f,
          k = j,
          l = a.complete || f,
          m, n;
        c(h ? a.yep : a.nope, !!i), i && c(i)
      }
      var i, j, l = this.yepnope.loader;
      if (e(a)) g(a, 0, l, 0);
      else if (w(a))
        for (i = 0; i < a.length; i++) j = a[i], e(j) ? g(j, 0, l, 0) : w(j) ? B(j) : Object(j) === j && h(j, l);
      else Object(a) === a && h(a, l)
    }, B.addPrefix = function(a, b) {
      z[a] = b
    }, B.addFilter = function(a) {
      x.push(a)
    }, B.errorTimeout = 1e4, null == b.readyState && b.addEventListener && (b.readyState = "loading", b.addEventListener("DOMContentLoaded", A = function() {
      b.removeEventListener("DOMContentLoaded", A, 0), b.readyState = "complete"
    }, 0)), a.yepnope = k(), a.yepnope.executeStack = h, a.yepnope.injectJs = function(a, c, d, e, i, j) {
      var k = b.createElement("script"),
        l, o, e = e || B.errorTimeout;
      k.src = a;
      for (o in d) k.setAttribute(o, d[o]);
      c = j ? h : c || f, k.onreadystatechange = k.onload = function() {
        !l && g(k.readyState) && (l = 1, c(), k.onload = k.onreadystatechange = null)
      }, m(function() {
        l || (l = 1, c(1))
      }, e), i ? k.onload() : n.parentNode.insertBefore(k, n)
    }, a.yepnope.injectCss = function(a, c, d, e, g, i) {
      var e = b.createElement("link"),
        j, c = i ? h : c || f;
      e.href = a, e.rel = "stylesheet", e.type = "text/css";
      for (j in d) e.setAttribute(j, d[j]);
      g || (n.parentNode.insertBefore(e, n), m(c, 0))
    }
  }(this, document), Modernizr.load = function() {
    yepnope.apply(window, [].slice.call(arguments, 0))
  };

jQuery(document).ready(function($) {

  /*! SlickNav Responsive Mobile Menu v1.0.0 */

  ;
  (function(e, t, n) {
    function o(t, n) {
      this.element = t;
      this.settings = e.extend({}, r, n);
      this._defaults = r;
      this._name = i;
      this.init()
    }
    var r = {
        label: "MENU",
        duplicate: true,
        duration: 200,
        easingOpen: "swing",
        easingClose: "swing",
        closedSymbol: "&#9658;",
        openedSymbol: "&#9660;",
        prependTo: "body",
        parentTag: "a",
        closeOnClick: false,
        allowParentLinks: false,
        init: function() {},
        open: function() {},
        close: function() {}
      },
      i = "slicknav",
      s = "slicknav";
    o.prototype.init = function() {
      var n = this;
      var r = e(this.element);
      var i = this.settings;
      if (i.duplicate) {
        n.mobileNav = r.clone();
        n.mobileNav.removeAttr("id");
        n.mobileNav.find("*").each(function(t, n) {
          e(n).removeAttr("id")
        })
      } else n.mobileNav = r;
      var o = s + "_icon";
      if (i.label == "") {
        o += " " + s + "_no-text"
      }
      if (i.parentTag == "a") {
        i.parentTag = 'a href="#"'
      }
      n.mobileNav.attr("class", s + "_nav");
      var u = e('<div class="' + s + '_menu"></div>');
      n.btn = e("<" + i.parentTag + ' aria-haspopup="true" tabindex="0" class="' + s + "_btn " + s + '_collapsed"><span class="' + s + '_menutxt">' + i.label + '</span><span class="' + o + '"><span class="' + s + '_icon-bar"></span><span class="' + s + '_icon-bar"></span><span class="' + s + '_icon-bar"></span></span></a>');
      e(u).append(n.btn);
      e(i.prependTo).prepend(u);
      u.append(n.mobileNav);
      var a = n.mobileNav.find("li");
      e(a).each(function() {
        var t = e(this);
        data = {};
        data.children = t.children("ul").attr("role", "menu");
        t.data("menu", data);
        if (data.children.length > 0) {
          var r = t.contents();
          var o = [];
          e(r).each(function() {
            if (!e(this).is("ul")) {
              o.push(this)
            } else {
              return false
            }
          });
          var u = e(o).wrapAll("<" + i.parentTag + ' role="menuitem" aria-haspopup="true" tabindex="-1" class="' + s + '_item"/>').parent();
          t.addClass(s + "_collapsed");
          t.addClass(s + "_parent");
          e(o).last().after('<span class="' + s + '_arrow">' + i.closedSymbol + "</span>")
        } else if (t.children().length == 0) {
          t.addClass(s + "_txtnode")
        }
        t.children("a").attr("role", "menuitem").click(function(t) {
          if (i.closeOnClick && !e(t.target).parent().closest("li").hasClass(s + "_parent")) e(n.btn).click()
        });
        if (i.closeOnClick && i.allowParentLinks) {
          t.children("a").children("a").click(function(t) {
            e(n.btn).click()
          })
        }
      });
      e(a).each(function() {
        var t = e(this).data("menu");
        n._visibilityToggle(t.children, false, null, true)
      });
      n._visibilityToggle(n.mobileNav, false, "init", true);
      n.mobileNav.attr("role", "menu");
      e(t).mousedown(function() {
        n._outlines(false)
      });
      e(t).keyup(function() {
        n._outlines(true)
      });
      e(n.btn).click(function(e) {
        e.preventDefault();
        n._menuToggle()
      });
      n.mobileNav.on("click", "." + s + "_item", function(t) {
        t.preventDefault();
        n._itemClick(e(this))
      });
      e(n.btn).keydown(function(e) {
        var t = e || event;
        if (t.keyCode == 13) {
          e.preventDefault();
          n._menuToggle()
        }
      });
      n.mobileNav.on("keydown", "." + s + "_item", function(t) {
        var r = t || event;
        if (r.keyCode == 13) {
          t.preventDefault();
          n._itemClick(e(t.target))
        }
      });
      if (i.allowParentLinks) {
        e("." + s + "_item a").click(function(e) {
          e.stopImmediatePropagation()
        })
      }
    };
    o.prototype._menuToggle = function(e) {
      var t = this;
      var n = t.btn;
      var r = t.mobileNav;
      if (n.hasClass(s + "_collapsed")) {
        n.removeClass(s + "_collapsed");
        n.addClass(s + "_open")
      } else {
        n.removeClass(s + "_open");
        n.addClass(s + "_collapsed")
      }
      n.addClass(s + "_animating");
      t._visibilityToggle(r, true, n)
    };
    o.prototype._itemClick = function(e) {
      var t = this;
      var n = t.settings;
      var r = e.data("menu");
      if (!r) {
        r = {};
        r.arrow = e.children("." + s + "_arrow");
        r.ul = e.next("ul");
        r.parent = e.parent();
        e.data("menu", r)
      }
      if (r.parent.hasClass(s + "_collapsed")) {
        r.arrow.html(n.openedSymbol);
        r.parent.removeClass(s + "_collapsed");
        r.parent.addClass(s + "_open");
        r.parent.addClass(s + "_animating");
        t._visibilityToggle(r.ul, true, e)
      } else {
        r.arrow.html(n.closedSymbol);
        r.parent.addClass(s + "_collapsed");
        r.parent.removeClass(s + "_open");
        r.parent.addClass(s + "_animating");
        t._visibilityToggle(r.ul, true, e)
      }
    };
    o.prototype._visibilityToggle = function(t, n, r, i) {
      var o = this;
      var u = o.settings;
      var a = o._getActionItems(t);
      var f = 0;
      if (n) f = u.duration;
      if (t.hasClass(s + "_hidden")) {
        t.removeClass(s + "_hidden");
        t.slideDown(f, u.easingOpen, function() {
          e(r).removeClass(s + "_animating");
          e(r).parent().removeClass(s + "_animating");
          if (!i) {
            u.open(r)
          }
        });
        t.attr("aria-hidden", "false");
        a.attr("tabindex", "0");
        o._setVisAttr(t, false)
      } else {
        t.addClass(s + "_hidden");
        t.slideUp(f, this.settings.easingClose, function() {
          t.attr("aria-hidden", "true");
          a.attr("tabindex", "-1");
          o._setVisAttr(t, true);
          t.hide();
          e(r).removeClass(s + "_animating");
          e(r).parent().removeClass(s + "_animating");
          if (!i) u.close(r);
          else if (r == "init") u.init()
        })
      }
    };
    o.prototype._setVisAttr = function(t, n) {
      var r = this;
      var i = t.children("li").children("ul").not("." + s + "_hidden");
      if (!n) {
        i.each(function() {
          var t = e(this);
          t.attr("aria-hidden", "false");
          var i = r._getActionItems(t);
          i.attr("tabindex", "0");
          r._setVisAttr(t, n)
        })
      } else {
        i.each(function() {
          var t = e(this);
          t.attr("aria-hidden", "true");
          var i = r._getActionItems(t);
          i.attr("tabindex", "-1");
          r._setVisAttr(t, n)
        })
      }
    };
    o.prototype._getActionItems = function(e) {
      var t = e.data("menu");
      if (!t) {
        t = {};
        var n = e.children("li");
        var r = n.children("a");
        t.links = r.add(n.children("." + s + "_item"));
        e.data("menu", t)
      }
      return t.links
    };
    o.prototype._outlines = function(t) {
      if (!t) {
        e("." + s + "_item, ." + s + "_btn").css("outline", "none")
      } else {
        e("." + s + "_item, ." + s + "_btn").css("outline", "")
      }
    };
    o.prototype.toggle = function() {
      $this = this;
      $this._menuToggle()
    };
    o.prototype.open = function() {
      $this = this;
      if ($this.btn.hasClass(s + "_collapsed")) {
        $this._menuToggle()
      }
    };
    o.prototype.close = function() {
      $this = this;
      if ($this.btn.hasClass(s + "_open")) {
        $this._menuToggle()
      }
    };
    e.fn[i] = function(t) {
      var n = arguments;
      if (t === undefined || typeof t === "object") {
        return this.each(function() {
          if (!e.data(this, "plugin_" + i)) {
            e.data(this, "plugin_" + i, new o(this, t))
          }
        })
      } else if (typeof t === "string" && t[0] !== "_" && t !== "init") {
        var r;
        this.each(function() {
          var s = e.data(this, "plugin_" + i);
          if (s instanceof o && typeof s[t] === "function") {
            r = s[t].apply(s, Array.prototype.slice.call(n, 1))
          }
        });
        return r !== undefined ? r : this
      }
    }
  })(jQuery, document, window)

  $(function() {
    $('.main-nav').slicknav({
      prependTo: '.header-menu',
      duration: 500,
      allowParentLinks: true
    });
  });

});

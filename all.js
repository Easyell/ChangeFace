/* Zepto v1.1.3 - zepto event ajax form ie - zeptojs.com/license */
var Zepto = function () {
    function L(t) {
        return null == t ? String(t) : j[T.call(t)] || "object"
    }

    function Z(t) {
        return "function" == L(t)
    }

    function $(t) {
        return null != t && t == t.window
    }

    function _(t) {
        return null != t && t.nodeType == t.DOCUMENT_NODE
    }

    function D(t) {
        return "object" == L(t)
    }

    function R(t) {
        return D(t) && !$(t) && Object.getPrototypeOf(t) == Object.prototype
    }

    function M(t) {
        return "number" == typeof t.length
    }

    function k(t) {
        return s.call(t, function (t) {
            return null != t
        })
    }

    function z(t) {
        return t.length > 0 ? n.fn.concat.apply([], t) : t
    }

    function F(t) {
        return t.replace(/::/g, "/").replace(/([A-Z]+)([A-Z][a-z])/g, "$1_$2").replace(/([a-z\d])([A-Z])/g, "$1_$2").replace(/_/g, "-").toLowerCase()
    }

    function q(t) {
        return t in f ? f[t] : f[t] = new RegExp("(^|\\s)" + t + "(\\s|$)")
    }

    function H(t, e) {
        return "number" != typeof e || c[F(t)] ? e : e + "px"
    }

    function I(t) {
        var e, n;
        return u[t] || (e = a.createElement(t), a.body.appendChild(e), n = getComputedStyle(e, "").getPropertyValue("display"), e.parentNode.removeChild(e), "none" == n && (n = "block"), u[t] = n), u[t]
    }

    function V(t) {
        return "children"in t ? o.call(t.children) : n.map(t.childNodes, function (t) {
            return 1 == t.nodeType ? t : void 0
        })
    }

    function U(n, i, r) {
        for (e in i)r && (R(i[e]) || A(i[e])) ? (R(i[e]) && !R(n[e]) && (n[e] = {}), A(i[e]) && !A(n[e]) && (n[e] = []), U(n[e], i[e], r)) : i[e] !== t && (n[e] = i[e])
    }

    function B(t, e) {
        return null == e ? n(t) : n(t).filter(e)
    }

    function J(t, e, n, i) {
        return Z(e) ? e.call(t, n, i) : e
    }

    function X(t, e, n) {
        null == n ? t.removeAttribute(e) : t.setAttribute(e, n)
    }

    function W(e, n) {
        var i = e.className, r = i && i.baseVal !== t;
        return n === t ? r ? i.baseVal : i : void(r ? i.baseVal = n : e.className = n)
    }

    function Y(t) {
        var e;
        try {
            return t ? "true" == t || ("false" == t ? !1 : "null" == t ? null : /^0/.test(t) || isNaN(e = Number(t)) ? /^[\[\{]/.test(t) ? n.parseJSON(t) : t : e) : t
        } catch (i) {
            return t
        }
    }

    function G(t, e) {
        e(t);
        for (var n in t.childNodes)G(t.childNodes[n], e)
    }

    var t, e, n, i, C, N, r = [], o = r.slice, s = r.filter, a = window.document, u = {}, f = {}, c = {
        "column-count": 1,
        columns: 1,
        "font-weight": 1,
        "line-height": 1,
        opacity: 1,
        "z-index": 1,
        zoom: 1
    }, l = /^\s*<(\w+|!)[^>]*>/, h = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, p = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, d = /^(?:body|html)$/i, m = /([A-Z])/g, g = ["val", "css", "html", "text", "data", "width", "height", "offset"], v = ["after", "prepend", "before", "append"], y = a.createElement("table"), x = a.createElement("tr"), b = {
        tr: a.createElement("tbody"),
        tbody: y,
        thead: y,
        tfoot: y,
        td: x,
        th: x,
        "*": a.createElement("div")
    }, w = /complete|loaded|interactive/, E = /^[\w-]*$/, j = {}, T = j.toString, S = {}, O = a.createElement("div"), P = {
        tabindex: "tabIndex",
        readonly: "readOnly",
        "for": "htmlFor",
        "class": "className",
        maxlength: "maxLength",
        cellspacing: "cellSpacing",
        cellpadding: "cellPadding",
        rowspan: "rowSpan",
        colspan: "colSpan",
        usemap: "useMap",
        frameborder: "frameBorder",
        contenteditable: "contentEditable"
    }, A = Array.isArray || function (t) {
            return t instanceof Array
        };
    return S.matches = function (t, e) {
        if (!e || !t || 1 !== t.nodeType)return !1;
        var n = t.webkitMatchesSelector || t.mozMatchesSelector || t.oMatchesSelector || t.matchesSelector;
        if (n)return n.call(t, e);
        var i, r = t.parentNode, o = !r;
        return o && (r = O).appendChild(t), i = ~S.qsa(r, e).indexOf(t), o && O.removeChild(t), i
    }, C = function (t) {
        return t.replace(/-+(.)?/g, function (t, e) {
            return e ? e.toUpperCase() : ""
        })
    }, N = function (t) {
        return s.call(t, function (e, n) {
            return t.indexOf(e) == n
        })
    }, S.fragment = function (e, i, r) {
        var s, u, f;
        return h.test(e) && (s = n(a.createElement(RegExp.$1))), s || (e.replace && (e = e.replace(p, "<$1></$2>")), i === t && (i = l.test(e) && RegExp.$1), i in b || (i = "*"), f = b[i], f.innerHTML = "" + e, s = n.each(o.call(f.childNodes), function () {
            f.removeChild(this)
        })), R(r) && (u = n(s), n.each(r, function (t, e) {
            g.indexOf(t) > -1 ? u[t](e) : u.attr(t, e)
        })), s
    }, S.Z = function (t, e) {
        return t = t || [], t.__proto__ = n.fn, t.selector = e || "", t
    }, S.isZ = function (t) {
        return t instanceof S.Z
    }, S.init = function (e, i) {
        var r;
        if (!e)return S.Z();
        if ("string" == typeof e)if (e = e.trim(), "<" == e[0] && l.test(e))r = S.fragment(e, RegExp.$1, i), e = null; else {
            if (i !== t)return n(i).find(e);
            r = S.qsa(a, e)
        } else {
            if (Z(e))return n(a).ready(e);
            if (S.isZ(e))return e;
            if (A(e))r = k(e); else if (D(e))r = [e], e = null; else if (l.test(e))r = S.fragment(e.trim(), RegExp.$1, i), e = null; else {
                if (i !== t)return n(i).find(e);
                r = S.qsa(a, e)
            }
        }
        return S.Z(r, e)
    }, n = function (t, e) {
        return S.init(t, e)
    }, n.extend = function (t) {
        var e, n = o.call(arguments, 1);
        return "boolean" == typeof t && (e = t, t = n.shift()), n.forEach(function (n) {
            U(t, n, e)
        }), t
    }, S.qsa = function (t, e) {
        var n, i = "#" == e[0], r = !i && "." == e[0], s = i || r ? e.slice(1) : e, a = E.test(s);
        return _(t) && a && i ? (n = t.getElementById(s)) ? [n] : [] : 1 !== t.nodeType && 9 !== t.nodeType ? [] : o.call(a && !i ? r ? t.getElementsByClassName(s) : t.getElementsByTagName(e) : t.querySelectorAll(e))
    }, n.contains = function (t, e) {
        return t !== e && t.contains(e)
    }, n.type = L, n.isFunction = Z, n.isWindow = $, n.isArray = A, n.isPlainObject = R, n.isEmptyObject = function (t) {
        var e;
        for (e in t)return !1;
        return !0
    }, n.inArray = function (t, e, n) {
        return r.indexOf.call(e, t, n)
    }, n.camelCase = C, n.trim = function (t) {
        return null == t ? "" : String.prototype.trim.call(t)
    }, n.uuid = 0, n.support = {}, n.expr = {}, n.map = function (t, e) {
        var n, r, o, i = [];
        if (M(t))for (r = 0; r < t.length; r++)n = e(t[r], r), null != n && i.push(n); else for (o in t)n = e(t[o], o), null != n && i.push(n);
        return z(i)
    }, n.each = function (t, e) {
        var n, i;
        if (M(t)) {
            for (n = 0; n < t.length; n++)if (e.call(t[n], n, t[n]) === !1)return t
        } else for (i in t)if (e.call(t[i], i, t[i]) === !1)return t;
        return t
    }, n.grep = function (t, e) {
        return s.call(t, e)
    }, window.JSON && (n.parseJSON = JSON.parse), n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (t, e) {
        j["[object " + e + "]"] = e.toLowerCase()
    }), n.fn = {
        forEach: r.forEach,
        reduce: r.reduce,
        push: r.push,
        sort: r.sort,
        indexOf: r.indexOf,
        concat: r.concat,
        map: function (t) {
            return n(n.map(this, function (e, n) {
                return t.call(e, n, e)
            }))
        },
        slice: function () {
            return n(o.apply(this, arguments))
        },
        ready: function (t) {
            return w.test(a.readyState) && a.body ? t(n) : a.addEventListener("DOMContentLoaded", function () {
                t(n)
            }, !1), this
        },
        get: function (e) {
            return e === t ? o.call(this) : this[e >= 0 ? e : e + this.length]
        },
        toArray: function () {
            return this.get()
        },
        size: function () {
            return this.length
        },
        remove: function () {
            return this.each(function () {
                null != this.parentNode && this.parentNode.removeChild(this)
            })
        },
        each: function (t) {
            return r.every.call(this, function (e, n) {
                return t.call(e, n, e) !== !1
            }), this
        },
        filter: function (t) {
            return Z(t) ? this.not(this.not(t)) : n(s.call(this, function (e) {
                return S.matches(e, t)
            }))
        },
        add: function (t, e) {
            return n(N(this.concat(n(t, e))))
        },
        is: function (t) {
            return this.length > 0 && S.matches(this[0], t)
        },
        not: function (e) {
            var i = [];
            if (Z(e) && e.call !== t)this.each(function (t) {
                e.call(this, t) || i.push(this)
            }); else {
                var r = "string" == typeof e ? this.filter(e) : M(e) && Z(e.item) ? o.call(e) : n(e);
                this.forEach(function (t) {
                    r.indexOf(t) < 0 && i.push(t)
                })
            }
            return n(i)
        },
        has: function (t) {
            return this.filter(function () {
                return D(t) ? n.contains(this, t) : n(this).find(t).size()
            })
        },
        eq: function (t) {
            return -1 === t ? this.slice(t) : this.slice(t, +t + 1)
        },
        first: function () {
            var t = this[0];
            return t && !D(t) ? t : n(t)
        },
        last: function () {
            var t = this[this.length - 1];
            return t && !D(t) ? t : n(t)
        },
        find: function (t) {
            var e, i = this;
            return e = "object" == typeof t ? n(t).filter(function () {
                var t = this;
                return r.some.call(i, function (e) {
                    return n.contains(e, t)
                })
            }) : 1 == this.length ? n(S.qsa(this[0], t)) : this.map(function () {
                return S.qsa(this, t)
            })
        },
        closest: function (t, e) {
            var i = this[0], r = !1;
            for ("object" == typeof t && (r = n(t)); i && !(r ? r.indexOf(i) >= 0 : S.matches(i, t));)i = i !== e && !_(i) && i.parentNode;
            return n(i)
        },
        parents: function (t) {
            for (var e = [], i = this; i.length > 0;)i = n.map(i, function (t) {
                return (t = t.parentNode) && !_(t) && e.indexOf(t) < 0 ? (e.push(t), t) : void 0
            });
            return B(e, t)
        },
        parent: function (t) {
            return B(N(this.pluck("parentNode")), t)
        },
        children: function (t) {
            return B(this.map(function () {
                return V(this)
            }), t)
        },
        contents: function () {
            return this.map(function () {
                return o.call(this.childNodes)
            })
        },
        siblings: function (t) {
            return B(this.map(function (t, e) {
                return s.call(V(e.parentNode), function (t) {
                    return t !== e
                })
            }), t)
        },
        empty: function () {
            return this.each(function () {
                this.innerHTML = ""
            })
        },
        pluck: function (t) {
            return n.map(this, function (e) {
                return e[t]
            })
        },
        show: function () {
            return this.each(function () {
                "none" == this.style.display && (this.style.display = ""), "none" == getComputedStyle(this, "").getPropertyValue("display") && (this.style.display = I(this.nodeName))
            })
        },
        replaceWith: function (t) {
            return this.before(t).remove()
        },
        wrap: function (t) {
            var e = Z(t);
            if (this[0] && !e)var i = n(t).get(0), r = i.parentNode || this.length > 1;
            return this.each(function (o) {
                n(this).wrapAll(e ? t.call(this, o) : r ? i.cloneNode(!0) : i)
            })
        },
        wrapAll: function (t) {
            if (this[0]) {
                n(this[0]).before(t = n(t));
                for (var e; (e = t.children()).length;)t = e.first();
                n(t).append(this)
            }
            return this
        },
        wrapInner: function (t) {
            var e = Z(t);
            return this.each(function (i) {
                var r = n(this), o = r.contents(), s = e ? t.call(this, i) : t;
                o.length ? o.wrapAll(s) : r.append(s)
            })
        },
        unwrap: function () {
            return this.parent().each(function () {
                n(this).replaceWith(n(this).children())
            }), this
        },
        clone: function () {
            return this.map(function () {
                return this.cloneNode(!0)
            })
        },
        hide: function () {
            return this.css("display", "none")
        },
        toggle: function (e) {
            return this.each(function () {
                var i = n(this);
                (e === t ? "none" == i.css("display") : e) ? i.show() : i.hide()
            })
        },
        prev: function (t) {
            return n(this.pluck("previousElementSibling")).filter(t || "*")
        },
        next: function (t) {
            return n(this.pluck("nextElementSibling")).filter(t || "*")
        },
        html: function (t) {
            return 0 === arguments.length ? this.length > 0 ? this[0].innerHTML : null : this.each(function (e) {
                var i = this.innerHTML;
                n(this).empty().append(J(this, t, e, i))
            })
        },
        text: function (e) {
            return 0 === arguments.length ? this.length > 0 ? this[0].textContent : null : this.each(function () {
                this.textContent = e === t ? "" : "" + e
            })
        },
        attr: function (n, i) {
            var r;
            return "string" == typeof n && i === t ? 0 == this.length || 1 !== this[0].nodeType ? t : "value" == n && "INPUT" == this[0].nodeName ? this.val() : !(r = this[0].getAttribute(n)) && n in this[0] ? this[0][n] : r : this.each(function (t) {
                if (1 === this.nodeType)if (D(n))for (e in n)X(this, e, n[e]); else X(this, n, J(this, i, t, this.getAttribute(n)))
            })
        },
        removeAttr: function (t) {
            return this.each(function () {
                1 === this.nodeType && X(this, t)
            })
        },
        prop: function (e, n) {
            return e = P[e] || e, n === t ? this[0] && this[0][e] : this.each(function (t) {
                this[e] = J(this, n, t, this[e])
            })
        },
        data: function (e, n) {
            var i = this.attr("data-" + e.replace(m, "-$1").toLowerCase(), n);
            return null !== i ? Y(i) : t
        },
        val: function (t) {
            return 0 === arguments.length ? this[0] && (this[0].multiple ? n(this[0]).find("option").filter(function () {
                return this.selected
            }).pluck("value") : this[0].value) : this.each(function (e) {
                this.value = J(this, t, e, this.value)
            })
        },
        offset: function (t) {
            if (t)return this.each(function (e) {
                var i = n(this), r = J(this, t, e, i.offset()), o = i.offsetParent().offset(), s = {
                    top: r.top - o.top,
                    left: r.left - o.left
                };
                "static" == i.css("position") && (s.position = "relative"), i.css(s)
            });
            if (0 == this.length)return null;
            var e = this[0].getBoundingClientRect();
            return {
                left: e.left + window.pageXOffset,
                top: e.top + window.pageYOffset,
                width: Math.round(e.width),
                height: Math.round(e.height)
            }
        },
        css: function (t, i) {
            if (arguments.length < 2) {
                var r = this[0], o = getComputedStyle(r, "");
                if (!r)return;
                if ("string" == typeof t)return r.style[C(t)] || o.getPropertyValue(t);
                if (A(t)) {
                    var s = {};
                    return n.each(A(t) ? t : [t], function (t, e) {
                        s[e] = r.style[C(e)] || o.getPropertyValue(e)
                    }), s
                }
            }
            var a = "";
            if ("string" == L(t))i || 0 === i ? a = F(t) + ":" + H(t, i) : this.each(function () {
                this.style.removeProperty(F(t))
            }); else for (e in t)t[e] || 0 === t[e] ? a += F(e) + ":" + H(e, t[e]) + ";" : this.each(function () {
                this.style.removeProperty(F(e))
            });
            return this.each(function () {
                this.style.cssText += ";" + a
            })
        },
        index: function (t) {
            return t ? this.indexOf(n(t)[0]) : this.parent().children().indexOf(this[0])
        },
        hasClass: function (t) {
            return t ? r.some.call(this, function (t) {
                return this.test(W(t))
            }, q(t)) : !1
        },
        addClass: function (t) {
            return t ? this.each(function (e) {
                i = [];
                var r = W(this), o = J(this, t, e, r);
                o.split(/\s+/g).forEach(function (t) {
                    n(this).hasClass(t) || i.push(t)
                }, this), i.length && W(this, r + (r ? " " : "") + i.join(" "))
            }) : this
        },
        removeClass: function (e) {
            return this.each(function (n) {
                return e === t ? W(this, "") : (i = W(this), J(this, e, n, i).split(/\s+/g).forEach(function (t) {
                    i = i.replace(q(t), " ")
                }), void W(this, i.trim()))
            })
        },
        toggleClass: function (e, i) {
            return e ? this.each(function (r) {
                var o = n(this), s = J(this, e, r, W(this));
                s.split(/\s+/g).forEach(function (e) {
                    (i === t ? !o.hasClass(e) : i) ? o.addClass(e) : o.removeClass(e)
                })
            }) : this
        },
        scrollTop: function (e) {
            if (this.length) {
                var n = "scrollTop"in this[0];
                return e === t ? n ? this[0].scrollTop : this[0].pageYOffset : this.each(n ? function () {
                    this.scrollTop = e
                } : function () {
                    this.scrollTo(this.scrollX, e)
                })
            }
        },
        scrollLeft: function (e) {
            if (this.length) {
                var n = "scrollLeft"in this[0];
                return e === t ? n ? this[0].scrollLeft : this[0].pageXOffset : this.each(n ? function () {
                    this.scrollLeft = e
                } : function () {
                    this.scrollTo(e, this.scrollY)
                })
            }
        },
        position: function () {
            if (this.length) {
                var t = this[0], e = this.offsetParent(), i = this.offset(), r = d.test(e[0].nodeName) ? {
                    top: 0,
                    left: 0
                } : e.offset();
                return i.top -= parseFloat(n(t).css("margin-top")) || 0, i.left -= parseFloat(n(t).css("margin-left")) || 0, r.top += parseFloat(n(e[0]).css("border-top-width")) || 0, r.left += parseFloat(n(e[0]).css("border-left-width")) || 0, {
                    top: i.top - r.top,
                    left: i.left - r.left
                }
            }
        },
        offsetParent: function () {
            return this.map(function () {
                for (var t = this.offsetParent || a.body; t && !d.test(t.nodeName) && "static" == n(t).css("position");)t = t.offsetParent;
                return t
            })
        }
    }, n.fn.detach = n.fn.remove, ["width", "height"].forEach(function (e) {
        var i = e.replace(/./, function (t) {
            return t[0].toUpperCase()
        });
        n.fn[e] = function (r) {
            var o, s = this[0];
            return r === t ? $(s) ? s["inner" + i] : _(s) ? s.documentElement["scroll" + i] : (o = this.offset()) && o[e] : this.each(function (t) {
                s = n(this), s.css(e, J(this, r, t, s[e]()))
            })
        }
    }), v.forEach(function (t, e) {
        var i = e % 2;
        n.fn[t] = function () {
            var t, o, r = n.map(arguments, function (e) {
                return t = L(e), "object" == t || "array" == t || null == e ? e : S.fragment(e)
            }), s = this.length > 1;
            return r.length < 1 ? this : this.each(function (t, a) {
                o = i ? a : a.parentNode, a = 0 == e ? a.nextSibling : 1 == e ? a.firstChild : 2 == e ? a : null, r.forEach(function (t) {
                    if (s)t = t.cloneNode(!0); else if (!o)return n(t).remove();
                    G(o.insertBefore(t, a), function (t) {
                        null == t.nodeName || "SCRIPT" !== t.nodeName.toUpperCase() || t.type && "text/javascript" !== t.type || t.src || window.eval.call(window, t.innerHTML)
                    })
                })
            })
        }, n.fn[i ? t + "To" : "insert" + (e ? "Before" : "After")] = function (e) {
            return n(e)[t](this), this
        }
    }), S.Z.prototype = n.fn, S.uniq = N, S.deserializeValue = Y, n.zepto = S, n
}();
window.Zepto = Zepto, void 0 === window.$ && (window.$ = Zepto), function (t) {
    function l(t) {
        return t._zid || (t._zid = e++)
    }

    function h(t, e, n, i) {
        if (e = p(e), e.ns)var r = d(e.ns);
        return (s[l(t)] || []).filter(function (t) {
            return !(!t || e.e && t.e != e.e || e.ns && !r.test(t.ns) || n && l(t.fn) !== l(n) || i && t.sel != i)
        })
    }

    function p(t) {
        var e = ("" + t).split(".");
        return {e: e[0], ns: e.slice(1).sort().join(" ")}
    }

    function d(t) {
        return new RegExp("(?:^| )" + t.replace(" ", " .* ?") + "(?: |$)")
    }

    function m(t, e) {
        return t.del && !u && t.e in f || !!e
    }

    function g(t) {
        return c[t] || u && f[t] || t
    }

    function v(e, i, r, o, a, u, f) {
        var h = l(e), d = s[h] || (s[h] = []);
        i.split(/\s/).forEach(function (i) {
            if ("ready" == i)return t(document).ready(r);
            var s = p(i);
            s.fn = r, s.sel = a, s.e in c && (r = function (e) {
                var n = e.relatedTarget;
                return !n || n !== this && !t.contains(this, n) ? s.fn.apply(this, arguments) : void 0
            }), s.del = u;
            var l = u || r;
            s.proxy = function (t) {
                if (t = j(t), !t.isImmediatePropagationStopped()) {
                    t.data = o;
                    var i = l.apply(e, t._args == n ? [t] : [t].concat(t._args));
                    return i === !1 && (t.preventDefault(), t.stopPropagation()), i
                }
            }, s.i = d.length, d.push(s), "addEventListener"in e && e.addEventListener(g(s.e), s.proxy, m(s, f))
        })
    }

    function y(t, e, n, i, r) {
        var o = l(t);
        (e || "").split(/\s/).forEach(function (e) {
            h(t, e, n, i).forEach(function (e) {
                delete s[o][e.i], "removeEventListener"in t && t.removeEventListener(g(e.e), e.proxy, m(e, r))
            })
        })
    }

    function j(e, i) {
        return (i || !e.isDefaultPrevented) && (i || (i = e), t.each(E, function (t, n) {
            var r = i[t];
            e[t] = function () {
                return this[n] = x, r && r.apply(i, arguments)
            }, e[n] = b
        }), (i.defaultPrevented !== n ? i.defaultPrevented : "returnValue"in i ? i.returnValue === !1 : i.getPreventDefault && i.getPreventDefault()) && (e.isDefaultPrevented = x)), e
    }

    function T(t) {
        var e, i = {originalEvent: t};
        for (e in t)w.test(e) || t[e] === n || (i[e] = t[e]);
        return j(i, t)
    }

    var n, e = 1, i = Array.prototype.slice, r = t.isFunction, o = function (t) {
        return "string" == typeof t
    }, s = {}, a = {}, u = "onfocusin"in window, f = {focus: "focusin", blur: "focusout"}, c = {
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    };
    a.click = a.mousedown = a.mouseup = a.mousemove = "MouseEvents", t.event = {
        add: v,
        remove: y
    }, t.proxy = function (e, n) {
        if (r(e)) {
            var i = function () {
                return e.apply(n, arguments)
            };
            return i._zid = l(e), i
        }
        if (o(n))return t.proxy(e[n], e);
        throw new TypeError("expected function")
    }, t.fn.bind = function (t, e, n) {
        return this.on(t, e, n)
    }, t.fn.unbind = function (t, e) {
        return this.off(t, e)
    }, t.fn.one = function (t, e, n, i) {
        return this.on(t, e, n, i, 1)
    };
    var x = function () {
        return !0
    }, b = function () {
        return !1
    }, w = /^([A-Z]|returnValue$|layer[XY]$)/, E = {
        preventDefault: "isDefaultPrevented",
        stopImmediatePropagation: "isImmediatePropagationStopped",
        stopPropagation: "isPropagationStopped"
    };
    t.fn.delegate = function (t, e, n) {
        return this.on(e, t, n)
    }, t.fn.undelegate = function (t, e, n) {
        return this.off(e, t, n)
    }, t.fn.live = function (e, n) {
        return t(document.body).delegate(this.selector, e, n), this
    }, t.fn.die = function (e, n) {
        return t(document.body).undelegate(this.selector, e, n), this
    }, t.fn.on = function (e, s, a, u, f) {
        var c, l, h = this;
        return e && !o(e) ? (t.each(e, function (t, e) {
            h.on(t, s, a, e, f)
        }), h) : (o(s) || r(u) || u === !1 || (u = a, a = s, s = n), (r(a) || a === !1) && (u = a, a = n), u === !1 && (u = b), h.each(function (n, r) {
            f && (c = function (t) {
                return y(r, t.type, u), u.apply(this, arguments)
            }), s && (l = function (e) {
                var n, o = t(e.target).closest(s, r).get(0);
                return o && o !== r ? (n = t.extend(T(e), {
                    currentTarget: o,
                    liveFired: r
                }), (c || u).apply(o, [n].concat(i.call(arguments, 1)))) : void 0
            }), v(r, e, u, a, s, l || c)
        }))
    }, t.fn.off = function (e, i, s) {
        var a = this;
        return e && !o(e) ? (t.each(e, function (t, e) {
            a.off(t, i, e)
        }), a) : (o(i) || r(s) || s === !1 || (s = i, i = n), s === !1 && (s = b), a.each(function () {
            y(this, e, s, i)
        }))
    }, t.fn.trigger = function (e, n) {
        return e = o(e) || t.isPlainObject(e) ? t.Event(e) : j(e), e._args = n, this.each(function () {
            "dispatchEvent"in this ? this.dispatchEvent(e) : t(this).triggerHandler(e, n)
        })
    }, t.fn.triggerHandler = function (e, n) {
        var i, r;
        return this.each(function (s, a) {
            i = T(o(e) ? t.Event(e) : e), i._args = n, i.target = a, t.each(h(a, e.type || e), function (t, e) {
                return r = e.proxy(i), i.isImmediatePropagationStopped() ? !1 : void 0
            })
        }), r
    }, "focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function (e) {
        t.fn[e] = function (t) {
            return t ? this.bind(e, t) : this.trigger(e)
        }
    }), ["focus", "blur"].forEach(function (e) {
        t.fn[e] = function (t) {
            return t ? this.bind(e, t) : this.each(function () {
                try {
                    this[e]()
                } catch (t) {
                }
            }), this
        }
    }), t.Event = function (t, e) {
        o(t) || (e = t, t = e.type);
        var n = document.createEvent(a[t] || "Events"), i = !0;
        if (e)for (var r in e)"bubbles" == r ? i = !!e[r] : n[r] = e[r];
        return n.initEvent(t, i, !0), j(n)
    }
}(Zepto), function (t) {
    function l(e, n, i) {
        var r = t.Event(n);
        return t(e).trigger(r, i), !r.isDefaultPrevented()
    }

    function h(t, e, i, r) {
        return t.global ? l(e || n, i, r) : void 0
    }

    function p(e) {
        e.global && 0 === t.active++ && h(e, null, "ajaxStart")
    }

    function d(e) {
        e.global && !--t.active && h(e, null, "ajaxStop")
    }

    function m(t, e) {
        var n = e.context;
        return e.beforeSend.call(n, t, e) === !1 || h(e, n, "ajaxBeforeSend", [t, e]) === !1 ? !1 : void h(e, n, "ajaxSend", [t, e])
    }

    function g(t, e, n, i) {
        var r = n.context, o = "success";
        n.success.call(r, t, o, e), i && i.resolveWith(r, [t, o, e]), h(n, r, "ajaxSuccess", [e, n, t]), y(o, e, n)
    }

    function v(t, e, n, i, r) {
        var o = i.context;
        i.error.call(o, n, e, t), r && r.rejectWith(o, [n, e, t]), h(i, o, "ajaxError", [n, i, t || e]), y(e, n, i)
    }

    function y(t, e, n) {
        var i = n.context;
        n.complete.call(i, e, t), h(n, i, "ajaxComplete", [e, n]), d(n)
    }

    function x() {
    }

    function b(t) {
        return t && (t = t.split(";", 2)[0]), t && (t == f ? "html" : t == u ? "json" : s.test(t) ? "script" : a.test(t) && "xml") || "text"
    }

    function w(t, e) {
        return "" == e ? t : (t + "&" + e).replace(/[&?]{1,2}/, "?")
    }

    function E(e) {
        e.processData && e.data && "string" != t.type(e.data) && (e.data = t.param(e.data, e.traditional)), !e.data || e.type && "GET" != e.type.toUpperCase() || (e.url = w(e.url, e.data), e.data = void 0)
    }

    function j(e, n, i, r) {
        return t.isFunction(n) && (r = i, i = n, n = void 0), t.isFunction(i) || (r = i, i = void 0), {
            url: e,
            data: n,
            success: i,
            dataType: r
        }
    }

    function S(e, n, i, r) {
        var o, s = t.isArray(n), a = t.isPlainObject(n);
        t.each(n, function (n, u) {
            o = t.type(u), r && (n = i ? r : r + "[" + (a || "object" == o || "array" == o ? n : "") + "]"), !r && s ? e.add(u.name, u.value) : "array" == o || !i && "object" == o ? S(e, u, i, n) : e.add(n, u)
        })
    }

    var i, r, e = 0, n = window.document, o = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, s = /^(?:text|application)\/javascript/i, a = /^(?:text|application)\/xml/i, u = "application/json", f = "text/html", c = /^\s*$/;
    t.active = 0, t.ajaxJSONP = function (i, r) {
        if (!("type"in i))return t.ajax(i);
        var f, h, o = i.jsonpCallback, s = (t.isFunction(o) ? o() : o) || "jsonp" + ++e, a = n.createElement("script"), u = window[s], c = function (e) {
            t(a).triggerHandler("error", e || "abort")
        }, l = {abort: c};
        return r && r.promise(l), t(a).on("load error", function (e, n) {
            clearTimeout(h), t(a).off().remove(), "error" != e.type && f ? g(f[0], l, i, r) : v(null, n || "error", l, i, r), window[s] = u, f && t.isFunction(u) && u(f[0]), u = f = void 0
        }), m(l, i) === !1 ? (c("abort"), l) : (window[s] = function () {
            f = arguments
        }, a.src = i.url.replace(/\?(.+)=\?/, "?$1=" + s), n.head.appendChild(a), i.timeout > 0 && (h = setTimeout(function () {
            c("timeout")
        }, i.timeout)), l)
    }, t.ajaxSettings = {
        type: "GET",
        beforeSend: x,
        success: x,
        error: x,
        complete: x,
        context: null,
        global: !0,
        xhr: function () {
            return new window.XMLHttpRequest
        },
        accepts: {
            script: "text/javascript, application/javascript, application/x-javascript",
            json: u,
            xml: "application/xml, text/xml",
            html: f,
            text: "text/plain"
        },
        crossDomain: !1,
        timeout: 0,
        processData: !0,
        cache: !0
    }, t.ajax = function (e) {
        var n = t.extend({}, e || {}), o = t.Deferred && t.Deferred();
        for (i in t.ajaxSettings)void 0 === n[i] && (n[i] = t.ajaxSettings[i]);
        p(n), n.crossDomain || (n.crossDomain = /^([\w-]+:)?\/\/([^\/]+)/.test(n.url) && RegExp.$2 != window.location.host), n.url || (n.url = window.location.toString()), E(n), n.cache === !1 && (n.url = w(n.url, "_=" + Date.now()));
        var s = n.dataType, a = /\?.+=\?/.test(n.url);
        if ("jsonp" == s || a)return a || (n.url = w(n.url, n.jsonp ? n.jsonp + "=?" : n.jsonp === !1 ? "" : "callback=?")), t.ajaxJSONP(n, o);
        var j, u = n.accepts[s], f = {}, l = function (t, e) {
            f[t.toLowerCase()] = [t, e]
        }, h = /^([\w-]+:)\/\//.test(n.url) ? RegExp.$1 : window.location.protocol, d = n.xhr(), y = d.setRequestHeader;
        if (o && o.promise(d), n.crossDomain || l("X-Requested-With", "XMLHttpRequest"), l("Accept", u || "*/*"), (u = n.mimeType || u) && (u.indexOf(",") > -1 && (u = u.split(",", 2)[0]), d.overrideMimeType && d.overrideMimeType(u)), (n.contentType || n.contentType !== !1 && n.data && "GET" != n.type.toUpperCase()) && l("Content-Type", n.contentType || "application/x-www-form-urlencoded"), n.headers)for (r in n.headers)l(r, n.headers[r]);
        if (d.setRequestHeader = l, d.onreadystatechange = function () {
                if (4 == d.readyState) {
                    d.onreadystatechange = x, clearTimeout(j);
                    var e, i = !1;
                    if (d.status >= 200 && d.status < 300 || 304 == d.status || 0 == d.status && "file:" == h) {
                        s = s || b(n.mimeType || d.getResponseHeader("content-type")), e = d.responseText;
                        try {
                            "script" == s ? (1, eval)(e) : "xml" == s ? e = d.responseXML : "json" == s && (e = c.test(e) ? null : t.parseJSON(e))
                        } catch (r) {
                            i = r
                        }
                        i ? v(i, "parsererror", d, n, o) : g(e, d, n, o)
                    } else v(d.statusText || null, d.status ? "error" : "abort", d, n, o)
                }
            }, m(d, n) === !1)return d.abort(), v(null, "abort", d, n, o), d;
        if (n.xhrFields)for (r in n.xhrFields)d[r] = n.xhrFields[r];
        var T = "async"in n ? n.async : !0;
        d.open(n.type, n.url, T, n.username, n.password);
        for (r in f)y.apply(d, f[r]);
        return n.timeout > 0 && (j = setTimeout(function () {
            d.onreadystatechange = x, d.abort(), v(null, "timeout", d, n, o)
        }, n.timeout)), d.send(n.data ? n.data : null), d
    }, t.get = function () {
        return t.ajax(j.apply(null, arguments))
    }, t.post = function () {
        var e = j.apply(null, arguments);
        return e.type = "POST", t.ajax(e)
    }, t.getJSON = function () {
        var e = j.apply(null, arguments);
        return e.dataType = "json", t.ajax(e)
    }, t.fn.load = function (e, n, i) {
        if (!this.length)return this;
        var a, r = this, s = e.split(/\s/), u = j(e, n, i), f = u.success;
        return s.length > 1 && (u.url = s[0], a = s[1]), u.success = function (e) {
            r.html(a ? t("<div>").html(e.replace(o, "")).find(a) : e), f && f.apply(r, arguments)
        }, t.ajax(u), this
    };
    var T = encodeURIComponent;
    t.param = function (t, e) {
        var n = [];
        return n.add = function (t, e) {
            this.push(T(t) + "=" + T(e))
        }, S(n, t, e), n.join("&").replace(/%20/g, "+")
    }
}(Zepto), function (t) {
    t.fn.serializeArray = function () {
        var n, e = [];
        return t([].slice.call(this.get(0).elements)).each(function () {
            n = t(this);
            var i = n.attr("type");
            "fieldset" != this.nodeName.toLowerCase() && !this.disabled && "submit" != i && "reset" != i && "button" != i && ("radio" != i && "checkbox" != i || this.checked) && e.push({
                name: n.attr("name"),
                value: n.val()
            })
        }), e
    }, t.fn.serialize = function () {
        var t = [];
        return this.serializeArray().forEach(function (e) {
            t.push(encodeURIComponent(e.name) + "=" + encodeURIComponent(e.value))
        }), t.join("&")
    }, t.fn.submit = function (e) {
        if (e)this.bind("submit", e); else if (this.length) {
            var n = t.Event("submit");
            this.eq(0).trigger(n), n.isDefaultPrevented() || this.get(0).submit()
        }
        return this
    }
}(Zepto), function (t) {
    "__proto__"in{} || t.extend(t.zepto, {
        Z: function (e, n) {
            return e = e || [], t.extend(e, t.fn), e.selector = n || "", e.__Z = !0, e
        }, isZ: function (e) {
            return "array" === t.type(e) && "__Z"in e
        }
    });
    try {
        getComputedStyle(void 0)
    } catch (e) {
        var n = getComputedStyle;
        window.getComputedStyle = function (t) {
            try {
                return n(t)
            } catch (e) {
                return null
            }
        }
    }
}(Zepto);
//     Zepto.js
//     (c) 2010-2014 Thomas Fuchs
//     Zepto.js may be freely distributed under the MIT license.

;(function($){
  var touch = {},
    touchTimeout, tapTimeout, swipeTimeout, longTapTimeout,
    longTapDelay = 750,
    gesture

  function swipeDirection(x1, x2, y1, y2) {
    return Math.abs(x1 - x2) >=
      Math.abs(y1 - y2) ? (x1 - x2 > 0 ? 'Left' : 'Right') : (y1 - y2 > 0 ? 'Up' : 'Down')
  }

  function longTap() {
    longTapTimeout = null
    if (touch.last) {
      touch.el.trigger('longTap')
      touch = {}
    }
  }

  function cancelLongTap() {
    if (longTapTimeout) clearTimeout(longTapTimeout)
    longTapTimeout = null
  }

  function cancelAll() {
    if (touchTimeout) clearTimeout(touchTimeout)
    if (tapTimeout) clearTimeout(tapTimeout)
    if (swipeTimeout) clearTimeout(swipeTimeout)
    if (longTapTimeout) clearTimeout(longTapTimeout)
    touchTimeout = tapTimeout = swipeTimeout = longTapTimeout = null
    touch = {}
  }

  function isPrimaryTouch(event){
    return (event.pointerType == 'touch' ||
      event.pointerType == event.MSPOINTER_TYPE_TOUCH)
      && event.isPrimary
  }

  function isPointerEventType(e, type){
    return (e.type == 'pointer'+type ||
      e.type.toLowerCase() == 'mspointer'+type)
  }

  $(document).ready(function(){
    var now, delta, deltaX = 0, deltaY = 0, firstTouch, _isPointerType

    if ('MSGesture' in window) {
      gesture = new MSGesture()
      gesture.target = document.body
    }

    $(document)
      .bind('MSGestureEnd', function(e){
        var swipeDirectionFromVelocity =
          e.velocityX > 1 ? 'Right' : e.velocityX < -1 ? 'Left' : e.velocityY > 1 ? 'Down' : e.velocityY < -1 ? 'Up' : null;
        if (swipeDirectionFromVelocity) {
          touch.el.trigger('swipe')
          touch.el.trigger('swipe'+ swipeDirectionFromVelocity)
        }
      })
      .on('touchstart MSPointerDown pointerdown', function(e){
        if((_isPointerType = isPointerEventType(e, 'down')) &&
          !isPrimaryTouch(e)) return
        firstTouch = _isPointerType ? e : e.touches[0]
        if (e.touches && e.touches.length === 1 && touch.x2) {
          // Clear out touch movement data if we have it sticking around
          // This can occur if touchcancel doesn't fire due to preventDefault, etc.
          touch.x2 = undefined
          touch.y2 = undefined
        }
        now = Date.now()
        delta = now - (touch.last || now)
        touch.el = $('tagName' in firstTouch.target ?
          firstTouch.target : firstTouch.target.parentNode)
        touchTimeout && clearTimeout(touchTimeout)
        touch.x1 = firstTouch.pageX
        touch.y1 = firstTouch.pageY
        if (delta > 0 && delta <= 250) touch.isDoubleTap = true
        touch.last = now
        longTapTimeout = setTimeout(longTap, longTapDelay)
        // adds the current touch contact for IE gesture recognition
        if (gesture && _isPointerType) gesture.addPointer(e.pointerId);
      })
      .on('touchmove MSPointerMove pointermove', function(e){
        if((_isPointerType = isPointerEventType(e, 'move')) &&
          !isPrimaryTouch(e)) return
        firstTouch = _isPointerType ? e : e.touches[0]
        cancelLongTap()
        touch.x2 = firstTouch.pageX
        touch.y2 = firstTouch.pageY

        deltaX += Math.abs(touch.x1 - touch.x2)
        deltaY += Math.abs(touch.y1 - touch.y2)
      })
      .on('touchend MSPointerUp pointerup', function(e){
        if((_isPointerType = isPointerEventType(e, 'up')) &&
          !isPrimaryTouch(e)) return
        cancelLongTap()

        // swipe
        if ((touch.x2 && Math.abs(touch.x1 - touch.x2) > 30) ||
            (touch.y2 && Math.abs(touch.y1 - touch.y2) > 30))

          swipeTimeout = setTimeout(function() {
            touch.el.trigger('swipe')
            touch.el.trigger('swipe' + (swipeDirection(touch.x1, touch.x2, touch.y1, touch.y2)))
            touch = {}
          }, 0)

        // normal tap
        else if ('last' in touch)
          // don't fire tap when delta position changed by more than 30 pixels,
          // for instance when moving to a point and back to origin
          if (deltaX < 30 && deltaY < 30) {
            // delay by one tick so we can cancel the 'tap' event if 'scroll' fires
            // ('tap' fires before 'scroll')
            tapTimeout = setTimeout(function() {

              // trigger universal 'tap' with the option to cancelTouch()
              // (cancelTouch cancels processing of single vs double taps for faster 'tap' response)
              var event = $.Event('tap')
              event.cancelTouch = cancelAll
              touch.el.trigger(event)

              // trigger double tap immediately
              if (touch.isDoubleTap) {
                if (touch.el) touch.el.trigger('doubleTap')
                touch = {}
              }

              // trigger single tap after 250ms of inactivity
              else {
                touchTimeout = setTimeout(function(){
                  touchTimeout = null
                  if (touch.el) touch.el.trigger('singleTap')
                  touch = {}
                }, 250)
              }
            }, 0)
          } else {
            touch = {}
          }
          deltaX = deltaY = 0

      })
      // when the browser window loses focus,
      // for example when a modal dialog is shown,
      // cancel all ongoing events
      .on('touchcancel MSPointerCancel pointercancel', cancelAll)

    // scrolling the window indicates intention of the user
    // to scroll, not tap or swipe, so cancel all ongoing events
    $(window).on('scroll', cancelAll)
  })

  ;['swipe', 'swipeLeft', 'swipeRight', 'swipeUp', 'swipeDown',
    'doubleTap', 'tap', 'singleTap', 'longTap'].forEach(function(eventName){
    $.fn[eventName] = function(callback){ return this.on(eventName, callback) }
  })
})(Zepto);





/*  |xGv00|a9a48a7df68b461c7a6acfe660f9c79d */
(function(window, undefined) {
	/**
	 * @author Brucewan
	 * @version 1.0
	 * @date 2014-06-13
	 * @description tg核心功能
	 * @name tg
	 * @namespace
	 */
	window.tg = /** @lends tg */{
		/**
		 * tg版本号
		 * @type {string}
		 */
		version: '1.0',

		add: function(name, obj){
			var target = window;
			var parent = null;
			var isMatch = /^([\w\.]+)(?:\:([\w\.]+))?\s*$/.test(name);
			var objNS = RegExp.$1.split('.');
			var parentNS = RegExp.$2.split('.');
			var name = objNS.pop();
			var isClass = /[A-Z]/.test(name.substr(0,1));
			var factory = function(){
				this.constructor && this.constructor.apply(this, arguments);
			};

			for(var i = 0; i < objNS.length; i++) {
				var p = objNS[i];
				target = target[p] || (target[p] = {});
			}

			if (parentNS[0] != '') {
				parent = window;
				for (var i = 0; i < parentNS.length; i ++) {
					parent = parent[parentNS[i]];
					if(!parent) {
						parent = null;
						break;
					}
				}
			}


			if(isClass && typeof(obj) == 'function') {
				if(parent) {
					factory.prototype = new parent();
				} 
				target[name] = factory;

				obj.call(target[name].prototype);

			} else {
				target[name] = obj;
			}

		}
	};



})(window);/*  |xGv00|48724ce6876ee688e4c871e3ecd07d51 */
/**
 * @version 1.0
 * @date 2014-06-15
 * @description tg
 * @name tg
 * @namespace
*/

/**
 * @author Brucewan
 * @version 1.0
 * @date 2014-06-18
 * @description 基础类
 * @name tg.Base
 * @class
*/

tg.add('tg.Base',function(){var _public=this;var _static=this.constructor;var _self={};_public.constructor=function(){var _private={};};_public.on=function(name,fn){box=Zepto(this);return box.on.apply(box,arguments);};_public.trigger=function(name,data){var box=Zepto(this);return box.trigger.apply(box,arguments);};});(function(m){if(m){return;}
var vendors=['webkit','moz','o'];var m={extend:function(destination,source,override,replacer){if(override===undefined)override=true;for(var property in source){if(override||!(property in destination)){if(replacer)replacer(property);else destination[property]=source[property];}}
return destination;},support:{translate3d:(function(){var sTranslate3D='translate3d(0px, 0px, 0px)';var eTemp=document.createElement('div');eTemp.style.cssText=' -moz-transform:'+sTranslate3D+'; -ms-transform:'+sTranslate3D+'; -o-transform:'+sTranslate3D+'; -webkit-transform:'+sTranslate3D+'; transform:'+sTranslate3D;var rxTranslate=/translate3d\(0px, 0px, 0px\)/g;var asSupport=eTemp.style.cssText.match(rxTranslate);var bHasSupport=(asSupport!==null&&asSupport.length==1);return bHasSupport;})()},css:function(obj,prop,value){var needVendor=/transform/i;if(needVendor.test(prop)){for(var i=0;i<vendors.length;i++){obj.style[vendors[i]+prop.substr(0,1).toUpperCase()+prop.substr(1)]=value;}}
obj.style[prop]=value;}};window.m=m;})(window.m);m.Slide=function(config){this.config=m.extend(m.extend({},m.Slide.config),config,true);this.init();}
m.Slide.config={touchMove:false,animTime:500,touchDis:40,direction:'x',touchSpeed:1,currentClass:'current',progressBar:false}
m.Slide.prototype={init:function(){var self=this;var c=self.config;self._data={};self.target=c.target;self.length=self.target.length;self.trigger=c.trigger;self.num=self.target.length;self.wrap=self.target[0].parentNode;if(m.support.translate3d){self.wrap.style.webkitTransition='-webkit-transform '+c.animTime+'ms ease-out';}
m.css(self.wrap,'transform','translate(0,0)');self.width=self.wrap.parentNode.clientWidth;if(c.progressBar===true){var progressBar=document.createElement('ul');progressBar.classList.add('progress-bar');for(var i=0;i<self.length;i++){var child=document.createElement('li');progressBar.appendChild(child);}
self.progressBar=self.wrap.parentNode.appendChild(progressBar).childNodes;}
self._attach();self.playTo(0);},_attach:function(){var self=this;var c=self.config;window.addEventListener('resize',self.update.bind(self));if(self.trigger){var len=self.trigger.length;for(var i=0;i<len;i++){(function(i){self.trigger[i].addEventListener('touchend',function(e){self.playTo(i);});})(i);}}
var d=self._data;var locked=false;var touchDirection;var touchMove,touchEnd;if(c.touchMove){self.wrap.addEventListener('touchstart',function(e){if(c.ontouchstart&&c.ontouchstart.apply(self,[e])===false){return false;}
d.pageX=e.touches[0].pageX;d.pageY=e.touches[0].pageY;self.wrap.style.webkitTransitionDuration='0ms';self.wrap.addEventListener('touchmove',touchMove);self.wrap.addEventListener('touchend',touchEnd);touchDirection='';});}
touchMove=function(e){d.disX=e.touches[0].pageX-d.pageX;d.disY=e.touches[0].pageY-d.pageY;if(c.direction=='x'){d.dis=d.disX;}else{d.dis=d.disY;}
if(!touchDirection){if(Math.abs(d.disX/d.disY)>1){touchDirection='x';}else{touchDirection='y';}}
if(c.ontouchmove&&c.ontouchmove.apply(self,[d.dis,e])===false){return false;}
if(c.direction==touchDirection){if(c.direction=='x'){m.css(self.wrap,'transform','translate3d('+(d.dis-self.target[self.current].offsetLeft)+'px,0,0)');}else{m.css(self.wrap,'transform','translate3d(0,'+(d.dis-self.target[self.current].offsetTop)+'px,0)');}}}
touchEnd=function(){if(touchDirection&&c.direction!=touchDirection){return;}
if(d.dis===undefined||isNaN(d.dis)){d.dis=0;}
self.wrap.style.webkitTransitionDuration=c.animTime+'ms';self.wrap.removeEventListener('touchmove',touchMove);self.wrap.removeEventListener('touchend',touchEnd);var isOK=true;if(c.ontouchend){if(c.ontouchend.apply(self,[d.dis])===false){isOK=false;}}
if(!d.dis||(Math.abs(d.dis)<c.touchDis||!isOK)){self.playTo(self.current);return;}
if(d.dis>0){self.playTo(self.current-c.touchSpeed);}else{self.playTo(self.current+c.touchSpeed);}
d.dis=0;};self.wrap.addEventListener('click',function(e){c.onclick&&c.onclick.call(self,e);});},playTo:function(i){var self=this;var c=self.config;self.wrap.style.webkitTransitionDuration=c.animTime+'ms';if(c.onchangebefore){if(c.onchangebefore.apply(self,[i])===false){return;}}
if(i>=self.num-1){i=self.num-1;}
if(i<0){i=0;}
if(m.support.translate3d){if(c.direction=='x'){m.css(self.wrap,'transform','translate3d('+(-self.target[i].offsetLeft)+'px,0,0)');}else{m.css(self.wrap,'transform','translate3d(0,'+(-self.target[i].offsetTop)+'px,0)');}}else{if(c.direction=='x'){m.css(self.wrap,'transform','translate('+(-self.target[i].offsetLeft)+'px,0)');}else{m.css(self.wrap,'transform','translate(0,'+(-self.target[i].offsetTop)+'px)');}}
if(i===self.current)return;if(self.trigger&&self.trigger[self.current]){self.trigger[self.current].classList.remove(c.currentClass);}
if(self.progressBar&&self.progressBar[self.current]){self.progressBar[self.current].classList.remove(c.currentClass);}
self.prevPage=self.current;self.current=i;if(self.trigger&&self.trigger[self.current]){self.trigger[self.current].classList.add(c.currentClass);}
if(self.progressBar&&self.progressBar[self.current]){self.progressBar[self.current].classList.add(c.currentClass);}
if(c.lazyClass){self.lazy(i);}
window.setTimeout(function(){c.onchange&&c.onchange.apply(self,[i]);},c.animTime);},prev:function(){this.playTo(this.current-1);},next:function(){this.playTo(this.current+1);},update:function(e){var self=this;self.width=self.wrap.parentNode.clientWidth;},lazy:function(i){var lazyElems=[]
targetWrap=this.target[i];if(targetWrap.classList.contains(this.config.lazyClass)){lazyElems.push(targetWrap);}
var lazyChildren=Array.prototype.slice.call(targetWrap.querySelectorAll('.'+this.config.lazyClass),0);lazyElems=lazyElems.concat(lazyChildren);for(var j=0;j<lazyElems.length;j++){var elem=lazyElems[j];var url=elem.getAttribute('data-url');if(url){if(/img/i.test(elem.tagName)){elem.src=url;}else{elem.style.backgroundImage='url('+url+')';}
elem.removeAttribute('data-url');}}}};
/*  |xGv00|16de58d0be1c26664288d1ec5c91caa9 */
/*
Quark 1.0.0 (build 121)
Licensed under the MIT License.
http://github.com/quark-dev-team/quarkjs
*/


/*
Quark 1.0.0 (build 121)
Licensed under the MIT License.
http://github.com/quark-dev-team/quarkjs
*/

(function(b){function a(a,c,d){for(var b=a.length,i=c.length,j,k,n,q,p,l={x:0,y:0},m=0;m<b;m++){j=a[m];k=a[m<b-1?m+1:0];l.x=j.y-k.y;l.y=k.x-j.x;j=Math.sqrt(l.x*l.x+l.y*l.y);l.x/=j;l.y/=j;j=k=a[0].x*l.x+a[0].y*l.y;for(var o=1;o<b;o++)p=a[o].x*l.x+a[o].y*l.y,p>k?k=p:p<j&&(j=p);n=q=c[0].x*l.x+c[0].y*l.y;for(o=1;o<i;o++)p=c[o].x*l.x+c[o].y*l.y,p>q?q=p:p<n&&(n=p);j<n?(j=n-k,l.x=-l.x,l.y=-l.y):j-=q;if(j>=0)return!1;else if(j>d.overlap)d.overlap=j,d.normal.x=l.x,d.normal.y=l.y}return d}var c=b.Quark=b.Quark||
{global:b},d=function(){};c.inherit=function(a,c){d.prototype=c.prototype;a.superClass=c.prototype;a.prototype=new d;a.prototype.constructor=a};c.merge=function(a,c,d){for(var b in c)if(!d||a.hasOwnProperty(b)||a[b]!==void 0)a[b]=c[b];return a};c.delegate=function(a,c){var d=c||b;if(arguments.length>2){var g=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.concat.apply(g,arguments);return a.apply(d,c)}}else return function(){return a.apply(d,arguments)}};c.getDOM=function(a){return document.getElementById(a)};
c.createDOM=function(a,c){var d=document.createElement(a),b;for(b in c){var i=c[b];if(b=="style")for(var j in i)d.style[j]=i[j];else d[b]=i}return d};c.use=function(a){for(var a=a.split("."),c=b,d=0;d<a.length;d++)var g=a[d],c=c[g]||(c[g]={});return c};(function(a){var c=a.ua=navigator.userAgent;a.isWebKit=/webkit/i.test(c);a.isMozilla=/mozilla/i.test(c);a.isIE=/msie/i.test(c);a.isFirefox=/firefox/i.test(c);a.isChrome=/chrome/i.test(c);a.isSafari=/safari/i.test(c)&&!this.isChrome;a.isMobile=/mobile/i.test(c);
a.isOpera=/opera/i.test(c);a.isIOS=/ios/i.test(c);a.isIpad=/ipad/i.test(c);a.isIpod=/ipod/i.test(c);a.isIphone=/iphone/i.test(c)&&!this.isIpod;a.isAndroid=/android/i.test(c);a.supportStorage="localStorage"in b;a.supportOrientation="orientation"in b;a.supportDeviceMotion="ondevicemotion"in b;a.supportTouch="ontouchstart"in b;a.supportCanvas=document.createElement("canvas").getContext!=null;a.cssPrefix=a.isWebKit?"webkit":a.isFirefox?"Moz":a.isOpera?"O":a.isIE?"ms":""})(c);c.getElementOffset=function(a){for(var c=
a.offsetLeft,d=a.offsetTop;(a=a.offsetParent)&&a!=document.body&&a!=document;)c+=a.offsetLeft,d+=a.offsetTop;return{left:c,top:d}};c.createDOMDrawable=function(a,d){var b=a.tagName||"div",g=d.image,i=a.width||g&&g.width,j=a.height||g&&g.height,k=c.createDOM(b);if(a.id)k.id=a.id;k.style.position="absolute";k.style.left=(a.left||0)+"px";k.style.top=(a.top||0)+"px";k.style.width=i+"px";k.style.height=j+"px";if(b=="canvas")k.width=i,k.height=j,g&&(b=k.getContext("2d"),i=d.rect||[0,0,i,j],b.drawImage(g,
i[0],i[1],i[2],i[3],a.x||0,a.y||0,a.width||i[2],a.height||i[3]));else if(k.style.opacity=a.alpha!=void 0?a.alpha:1,k.style.overflow="hidden",g&&g.src)k.style.backgroundImage="url("+g.src+")",k.style.backgroundPosition=-(a.rectX||0)+"px "+-(a.rectY||0)+"px";return k};c.DEG_TO_RAD=Math.PI/180;c.RAD_TO_DEG=180/Math.PI;c.hitTestPoint=function(a,c,d,b){var a=a.getBounds(),i=a.length,j=c>=a.x&&c<=a.x+a.width&&d>=a.y&&d<=a.y+a.height;if(j&&b){for(var b=0,j=!1,k,n,q,p,l=0;l<i;l++){var m=a[l],o=a[(l+1)%i];
if(m.y==o.y&&d==m.y&&(m.x>o.x?(k=o.x,n=m.x):(k=m.x,n=o.x),c>=k&&c<=n)){j=!0;continue}m.y>o.y?(q=o.y,p=m.y):(q=m.y,p=o.y);d<q||d>p||(m=(d-m.y)*(o.x-m.x)/(o.y-m.y)+m.x,m>c?b++:m==c&&(j=!0))}if(j)return 0;else if(b%2==1)return 1;return-1}return j?1:-1};c.hitTestObject=function(a,d,b){a=a.getBounds();d=d.getBounds();return(a=a.x<=d.x+d.width&&d.x<=a.x+a.width&&a.y<=d.y+d.height&&d.y<=a.y+a.height)&&b?(a=c.polygonCollision(d,d),a!==!1):a};c.polygonCollision=function(c,d){var b=a(c,d,{overlap:-Infinity,
normal:{x:0,y:0}});return b?a(d,c,b):!1};c.toString=function(){return"Quark"};c.trace=function(){var a=Array.prototype.slice.call(arguments);typeof console!="undefined"&&typeof console.log!="undefined"&&console.log(a.join(" "))};if(b.Q==void 0)b.Q=c;if(b.trace==void 0)b.trace=c.trace})(window);
(function(){var b=Quark.Matrix=function(a,c,d,b,f,h){this.a=a;this.b=c;this.c=d;this.d=b;this.tx=f;this.ty=h};b.prototype.concat=function(a){var c=this.a,d=this.c,b=this.tx;this.a=c*a.a+this.b*a.c;this.b=c*a.b+this.b*a.d;this.c=d*a.a+this.d*a.c;this.d=d*a.b+this.d*a.d;this.tx=b*a.a+this.ty*a.c+a.tx;this.ty=b*a.b+this.ty*a.d+a.ty;return this};b.prototype.rotate=function(a){var c=Math.cos(a),a=Math.sin(a),d=this.a,b=this.c,f=this.tx;this.a=d*c-this.b*a;this.b=d*a+this.b*c;this.c=b*c-this.d*a;this.d=
b*a+this.d*c;this.tx=f*c-this.ty*a;this.ty=f*a+this.ty*c;return this};b.prototype.scale=function(a,c){this.a*=a;this.d*=c;this.tx*=a;this.ty*=c;return this};b.prototype.translate=function(a,c){this.tx+=a;this.ty+=c;return this};b.prototype.identity=function(){this.a=this.d=1;this.b=this.c=this.tx=this.ty=0;return this};b.prototype.invert=function(){var a=this.a,c=this.b,d=this.c,b=this.d,f=this.tx,h=a*b-c*d;this.a=b/h;this.b=-c/h;this.c=-d/h;this.d=a/h;this.tx=(d*this.ty-b*f)/h;this.ty=-(a*this.ty-
c*f)/h;return this};b.prototype.transformPoint=function(a,c,d){var b=a.x*this.a+a.y*this.c+this.tx,f=a.x*this.b+a.y*this.d+this.ty;c&&(b=b+0.5>>0,f=f+0.5>>0);if(d)return{x:b,y:f};a.x=b;a.y=f;return a};b.prototype.clone=function(){return new b(this.a,this.b,this.c,this.d,this.tx,this.ty)};b.prototype.toString=function(){return"(a="+this.a+", b="+this.b+", c="+this.c+", d="+this.d+", tx="+this.tx+", ty="+this.ty+")"}})();
(function(){var b=Quark.Rectangle=function(a,c,d,b){this.x=a;this.y=c;this.width=d;this.height=b};b.prototype.intersects=function(a){return this.x<=a.x+a.width&&a.x<=this.x+this.width&&this.y<=a.y+a.height&&a.y<=this.y+this.height};b.prototype.intersection=function(a){var c=Math.max(this.x,a.x),d=Math.min(this.x+this.width,a.x+a.width);if(c<=d){var e=Math.max(this.y,a.y),a=Math.min(this.y+this.height,a.y+a.height);if(e<=a)return new b(c,e,d-c,a-e)}return null};b.prototype.union=function(a,c){var d=
Math.min(this.x,a.x),e=Math.min(this.y,a.y),f=Math.max(this.x+this.width,a.x+a.width)-d,h=Math.max(this.y+this.height,a.y+a.height)-e;if(c)return new b(d,e,f,h);else this.x=d,this.y=e,this.width=f,this.height=h};b.prototype.containsPoint=function(a,c){return this.x<=a&&a<=this.x+this.width&&this.y<=c&&c<=this.y+this.height};b.prototype.clone=function(){return new b(this.x,this.y,this.width,this.height)};b.prototype.toString=function(){return"(x="+this.x+", y="+this.y+", width="+this.width+", height="+
this.height+")"}})();
(function(){Quark.KEY={MOUSE_LEFT:1,MOUSE_MID:2,MOUSE_RIGHT:3,BACKSPACE:8,TAB:9,NUM_CENTER:12,ENTER:13,RETURN:13,SHIFT:16,CTRL:17,ALT:18,PAUSE:19,CAPS_LOCK:20,ESC:27,ESCAPE:27,SPACE:32,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40,PRINT_SCREEN:44,INSERT:45,DELETE:46,ZERO:48,ONE:49,TWO:50,THREE:51,FOUR:52,FIVE:53,SIX:54,SEVEN:55,EIGHT:56,NINE:57,A:65,B:66,C:67,D:68,E:69,F:70,G:71,H:72,I:73,J:74,K:75,L:76,M:77,N:78,O:79,P:80,Q:81,R:82,S:83,T:84,U:85,V:86,W:87,X:88,Y:89,Z:90,
CONTEXT_MENU:93,NUM_ZERO:96,NUM_ONE:97,NUM_TWO:98,NUM_THREE:99,NUM_FOUR:100,NUM_FIVE:101,NUM_SIX:102,NUM_SEVEN:103,NUM_EIGHT:104,NUM_NINE:105,NUM_MULTIPLY:106,NUM_PLUS:107,NUM_MINUS:109,NUM_PERIOD:110,NUM_DIVISION:111,F1:112,F2:113,F3:114,F4:115,F5:116,F6:117,F7:118,F8:119,F9:120,F10:121,F11:122,F12:123}})();
(function(){var b=Quark.EventManager=function(){this.keyState={};this._evtHandlers={}};b.prototype.registerStage=function(a,c,d,b){this.register(a.context.canvas,c,{host:a,func:a.dispatchEvent},d,b)};b.prototype.unregisterStage=function(a,c){this.unregister(a.context.canvas,c,a.dispatchEvent)};b.prototype.register=function(a,c,d,b,f){if(d==null||typeof d=="function")d={host:null,func:d};for(var h={prevent:b,stop:f},g=this,b=function(a){g._onEvent(a,h,d)},f=0;f<c.length;f++){for(var i=c[f],j=this._evtHandlers[i]||
(this._evtHandlers[i]=[]),k=0,n=!1;k<j.length;k++){var q=j[k];if(q.target==a&&q.callback.func==d.func){trace("duplicate callback");n=!0;break}}n||(j.push({target:a,callback:d,handler:b}),a.addEventListener(i,b,!1))}};b.prototype.unregister=function(a,c,d){for(var b=0;b<c.length;b++)for(var f=c[b],h=this._evtHandlers[f],g=0;g<h.length;g++){var i=h[g];if(i.target==a&&(i.callback.func==d||d==null)){a.removeEventListener(f,i.handler);h.splice(g,1);break}}};b.prototype._onEvent=function(a,c,d){var e=a,
f=a.type;if(a.type.indexOf("touch")==0)e=a.touches&&a.touches.length>0?a.touches[0]:a.changedTouches&&a.changedTouches.length>0?a.changedTouches[0]:a,e.type=f,e.rawEvent=a;if(f=="keydown"||f=="keyup"||f=="keypress")this.keyState[a.keyCode]=f;d.func!=null&&d.func.call(d.host,e);b.stop(a,!c.prevent,!c.stop)};b.stop=function(a,c,d){c||a.preventDefault();d||(a.stopPropagation(),a.stopImmediatePropagation&&a.stopImmediatePropagation())}})();
(function(){var b=Quark.EventDispatcher=function(){this._eventMap={}};b.prototype.addEventListener=function(a,c){var d=this._eventMap[a];d==null&&(d=this._eventMap[a]=[]);return d.indexOf(c)==-1?(d.push(c),!0):!1};b.prototype.removeEventListener=function(a,c){if(arguments.length==1)return this.removeEventListenerByType(a);var d=this._eventMap[a];if(d==null)return!1;for(var b=0;b<d.length;b++)if(d[b]===c)return d.splice(b,1),d.length==0&&delete this._eventMap[a],!0;return!1};b.prototype.removeEventListenerByType=
function(a){return this._eventMap[a]!=null?(delete this._eventMap[a],!0):!1};b.prototype.removeAllEventListeners=function(){this._eventMap={}};b.prototype.dispatchEvent=function(a){var c=this._eventMap[a.type];if(c==null)return!1;if(!a.target)a.target=this;for(var c=c.slice(),b=0;b<c.length;b++){var e=c[b];typeof e=="function"&&e.call(this,a)}return!0};b.prototype.hasEventListener=function(a){a=this._eventMap[a];return a!=null&&a.length>0};b.prototype.on=b.prototype.addEventListener;b.prototype.un=
b.prototype.removeEventListener;b.prototype.fire=b.prototype.dispatchEvent})();(function(){var b=Quark.Context=function(a){if(a.canvas==null)throw"Quark.Context Error: canvas is required.";this.canvas=null;Quark.merge(this,a)};b.prototype.startDraw=function(){};b.prototype.draw=function(){};b.prototype.endDraw=function(){};b.prototype.transform=function(){};b.prototype.remove=function(){}})();
(function(){var b=Quark.CanvasContext=function(a){b.superClass.constructor.call(this,a);this.context=this.canvas.getContext("2d")};Quark.inherit(b,Quark.Context);b.prototype.startDraw=function(){this.context.save()};b.prototype.draw=function(a){if(!(a.parent!=null&&a.parent.mask!=null))if(a.mask!=null){var c=a.width,b=a.height,e=Q._helpContext,f=e.canvas,h=e.context;f.width=0;f.width=c;f.height=b;e.startDraw();a.mask._render(e);h.globalCompositeOperation="source-in";var g=a.mask;a.mask=null;if(a instanceof
Quark.DisplayObjectContainer){var i=a._cache||Quark.cacheObject(a);h.drawImage(i,0,0,c,b,0,0,c,b)}else a.render(e);e.endDraw();a.mask=g;arguments[0]=f;this.context.drawImage.apply(this.context,arguments)}else a._cache!=null?this.context.drawImage(a._cache,0,0):a instanceof Quark.Graphics||a instanceof Quark.Text?a._draw(this.context):(c=a.getDrawable(this),c!=null&&(arguments[0]=c,this.context.drawImage.apply(this.context,arguments)))};b.prototype.endDraw=function(){this.context.restore()};b.prototype.transform=
function(a){var c=this.context;if(a instanceof Q.Stage){if(a._scaleX!=a.scaleX)a._scaleX=a.scaleX,this.canvas.style.width=a._scaleX*a.width+"px";if(a._scaleY!=a.scaleY)a._scaleY=a.scaleY,this.canvas.style.height=a._scaleY*a.height+"px"}else(a.x!=0||a.y!=0)&&c.translate(a.x,a.y),a.rotation%360!=0&&c.rotate(a.rotation%360*Quark.DEG_TO_RAD),(a.scaleX!=1||a.scaleY!=1)&&c.scale(a.scaleX,a.scaleY),(a.regX!=0||a.regY!=0)&&c.translate(-a.regX,-a.regY);a.alpha>0&&(c.globalAlpha*=a.alpha)};b.prototype.clear=
function(a,c,b,e){this.context.clearRect(a,c,b,e)}})();
(function(){function b(a,c){var b="";b+=c?"translate3d("+(a.x-a.regX)+"px, "+(a.y-a.regY)+"px, 0px)rotate3d(0, 0, 1, "+a.rotation+"deg)scale3d("+a.scaleX+", "+a.scaleY+", 1)":"translate("+(a.x-a.regX)+"px, "+(a.y-a.regY)+"px)rotate("+a.rotation+"deg)scale("+a.scaleX+", "+a.scaleY+")";return b}var a=document.createElement("div"),c=a.style[Quark.cssPrefix+"Transform"]!=void 0,d=a.style[Quark.cssPrefix+"Perspective"]!=void 0,e=document.documentElement;if(d&&"webkitPerspective"in e.style){a.id="test3d";
var f=document.createElement("style");f.textContent="@media (-webkit-transform-3d){#test3d{height:3px}}";document.head.appendChild(f);e.appendChild(a);d=a.offsetHeight===3;f.parentNode.removeChild(f);a.parentNode.removeChild(a)}Quark.supportTransform=c;Quark.supportTransform3D=d;if(c){var h=Quark.DOMContext=function(a){h.superClass.constructor.call(this,a)};Quark.inherit(h,Quark.Context);h.prototype.draw=function(a){if(!a._addedToDOM){var c=a.parent,b=a.getDrawable(this);if(c!=null){var d=c.getDrawable(this);
b.parentNode!=d&&d.appendChild(b);if(d.parentNode==null&&c instanceof Quark.Stage)this.canvas.appendChild(d),c._addedToDOM=!0;a._addedToDOM=!0}}};h.prototype.transform=function(a){var c=a.getDrawable(this);if(a.transformEnabled||!a._addedToDOM){var d=Quark.cssPrefix,e=d+"TransformOrigin";d+="Transform";c=c.style;if(!c.display||a.propChanged("visible","alpha"))c.display=!a.visible||a.alpha<=0?"none":"";if(!c.opacity||a.propChanged("alpha"))c.opacity=a.alpha;if(!c.backgroundPosition||a.propChanged("rectX",
"rectY"))c.backgroundPosition=-a.rectX+"px "+-a.rectY+"px";if(!c.width||a.propChanged("width","height"))c.width=a.width+"px",c.height=a.height+"px";if(!c[e]||a.propChanged("regX","regY"))c[e]=a.regX+"px "+a.regY+"px";if(!c[d]||a.propChanged("x","y","regX","regY","scaleX","scaleY","rotation"))e=Quark.supportTransform3D?b(a,!0):b(a,!1),c[d]=e;if(!c.zIndex||a.propChanged("_depth"))c.zIndex=a._depth;if(a.mask!=null)c[Q.cssPrefix+"MaskImage"]=a.mask.getDrawable(this).style.backgroundImage,c[Q.cssPrefix+
"MaskRepeat"]="no-repeat",c[Q.cssPrefix+"MaskPosition"]=a.mask.x+"px "+a.mask.y+"px";c.pointerEvents=a.eventEnabled?"auto":"none"}};h.prototype.hide=function(a){a.getDrawable(this).style.display="none"};h.prototype.remove=function(a){var c=a.getDrawable(this),b=c.parentNode;b!=null&&b.removeChild(c);a._addedToDOM=!1}}else trace("Warn: DOMContext requires css transfrom support.")})();
(function(){var b=Quark.UIDUtil={_counter:0};b.createUID=function(a){var c=a.charCodeAt(a.length-1);c>=48&&c<=57&&(a+="_");return a+this._counter++};b.displayObjectToString=function(a){for(var c;a!=null;a=a.parent){var b=a.id!=null?a.id:a.name;c=c==null?b:b+"."+c;if(a==a.parent)break}return c}})();
(function(){function b(a,c){for(var d=0;d<a.children.length;d++){var g=a.children[d];if(g.children)b(g,c);else if(c!=null){g=g.getBounds();c.globalAlpha=0.2;c.beginPath();var i=g[0];c.moveTo(i.x-0.5,i.y-0.5);for(var j=1;j<g.length;j++){var k=g[j];c.lineTo(k.x-0.5,k.y-0.5)}c.lineTo(i.x-0.5,i.y-0.5);c.stroke();c.closePath();c.globalAlpha=0.5;c.beginPath();c.rect((g.x>>0)-0.5,(g.y>>0)-0.5,g.width>>0,g.height>>0);c.stroke();c.closePath()}else if(g.drawable.domDrawable)g.drawable.domDrawable.style.border=
"1px solid #f00"}}Quark.getUrlParams=function(){var e;var a={},c=window.location.href,b=c.indexOf("?");if(b>0)for(var c=c.substring(b+1).split("&"),b=0,d;d=c[b];b++)e=c[b]=d.split("="),d=e,a[d[0]]=d.length>1?d[1]:!0;return a};var a=document.getElementsByTagName("head")[0],c=a.getElementsByTagName("meta"),d=c.length>0?c[c.length-1].nextSibling:a.childNodes[0];Quark.addMeta=function(c){var b=document.createElement("meta"),h;for(h in c)b.setAttribute(h,c[h]);a.insertBefore(b,d)};Quark.toggleDebugRect=
function(a){a.debug=!a.debug;a._render=a.debug?function(c){c.clear!=null&&c.clear(0,0,a.width,a.height);Quark.Stage.superClass._render.call(a,c);c=a.context.context;if(c!=null)c.save(),c.lineWidth=1,c.strokeStyle="#f00",c.globalAlpha=0.5;b(a,c);c!=null&&c.restore()}:function(c){c.clear!=null&&c.clear(0,0,a.width,a.height);Quark.Stage.superClass._render.call(a,c)}};Quark.cacheObject=function(a,c,b){var d=a.width,i=a.height,j=a.mask,k=Quark.createDOM("canvas",{width:d,height:i}),n=new Quark.CanvasContext({canvas:k});
a.mask=null;a.render(n);a.mask=j;return c?(a=new Image,a.width=d,a.height=i,a.src=k.toDataURL(b||"image/png"),a):k};Quark._helpContext=new Quark.CanvasContext({canvas:Quark.createDOM("canvas")})})();
(function(){var b=Quark.Timer=function(a){this.interval=a||50;this.paused=!1;this.info={lastTime:0,currentTime:0,deltaTime:0,realDeltaTime:0};this._startTime=0;this._intervalID=null;this._listeners=[]};b.prototype.start=function(){if(this._intervalID==null){this._startTime=this.info.lastTime=this.info.currentTime=Date.now();var a=this,c=function(){a._intervalID=setTimeout(c,a.interval);a._run()};c()}};b.prototype.stop=function(){clearTimeout(this._intervalID);this._intervalID=null;this._startTime=
0};b.prototype.pause=function(){this.paused=!0};b.prototype.resume=function(){this.paused=!1};b.prototype._run=function(){if(!this.paused){var a=this.info,c=a.currentTime=Date.now();a.deltaTime=a.realDeltaTime=c-a.lastTime;for(var b=0,e=this._listeners.length,f,h;b<e;b++)f=this._listeners[b],h=f.__runTime||0,h==0?f.step(this.info):c>h&&(f.step(this.info),this._listeners.splice(b,1),b--,e--);a.lastTime=c}};b.prototype.delay=function(a,c){this.addListener({step:a,__runTime:Date.now()+c})};b.prototype.addListener=
function(a){if(a==null||typeof a.step!="function")throw"Timer Error: The listener object must implement a step() method!";this._listeners.push(a)};b.prototype.removeListener=function(a){a=this._listeners.indexOf(a);a>-1&&this._listeners.splice(a,1)}})();
(function(){var b=Quark.ImageLoader=function(a){b.superClass.constructor.call(this);this.loading=!1;this._index=-1;this._loaded=0;this._images={};this._totalSize=0;this._loadHandler=Quark.delegate(this._loadHandler,this);this._addSource(a)};Quark.inherit(b,Quark.EventDispatcher);b.prototype.load=function(a){this._addSource(a);this.loading||this._loadNext()};b.prototype._addSource=function(a){if(a){for(var a=a instanceof Array?a:[a],c=0;c<a.length;c++)this._totalSize+=a[c].size||0;this._source=this._source?
this._source.concat(a):a}};b.prototype._loadNext=function(){this._index++;if(this._index>=this._source.length)this.dispatchEvent({type:"complete",target:this,images:this._images}),this._source=[],this.loading=!1,this._index=-1;else{var a=new Image;a.onload=this._loadHandler;a.src=this._source[this._index].src;this.loading=!0}};b.prototype._loadHandler=function(a){this._loaded++;var c=this._source[this._index];c.image=a.target;this._images[c.id||c.src]=c;this.dispatchEvent({type:"loaded",target:this,
image:c});this._loadNext()};b.prototype.getLoaded=function(){return this._loaded};b.prototype.getTotal=function(){return this._source.length};b.prototype.getLoadedSize=function(){var a=0,c;for(c in this._images)a+=this._images[c].size||0;return a};b.prototype.getTotalSize=function(){return this._totalSize}})();
(function(){var b=Quark.Tween=function(c,b,e){this.target=c;this.delay=this.time=0;this.reverse=this.loop=this.paused=!1;this.interval=0;this.ease=a.Linear.EaseNone;this.onComplete=this.onUpdate=this.onStart=this.next=null;this._oldProps={};this._newProps={};this._deltaProps={};this._pausedStartTime=this._pausedTime=this._lastTime=this._startTime=0;this._reverseFlag=1;this._frameCount=this._frameTotal=0;for(var f in b){var h=c[f],g=b[f];h!==void 0&&typeof h=="number"&&typeof g=="number"&&(this._oldProps[f]=
h,this._newProps[f]=g,this._deltaProps[f]=g-h)}for(f in e)this[f]=e[f]};b.prototype.setProps=function(a,b){for(var e in a)this.target[e]=this._oldProps[e]=a[e];for(e in b)this._newProps[e]=b[e],this._deltaProps[e]=b[e]-this.target[e]};b.prototype._init=function(){this._startTime=Date.now()+this.delay;this._pausedTime=0;if(this.interval>0)this._frameTotal=Math.round(this.time/this.interval);b.add(this)};b.prototype.start=function(){this._init();this.paused=!1};b.prototype.stop=function(){b.remove(this)};
b.prototype.pause=function(){this.paused=!0;this._pausedStartTime=Date.now()};b.prototype.resume=function(){this.paused=!1;this._pausedTime+=Date.now()-this._pausedStartTime};b.prototype._update=function(){if(!this.paused){var a=Date.now(),d=a-this._startTime-this._pausedTime;if(!(d<0)){if(this._lastTime==0&&this.onStart!=null)this.onStart(this);this._lastTime=a;a=this._frameTotal>0?++this._frameCount/this._frameTotal:d/this.time;a>1&&(a=1);var d=this.ease(a),e;for(e in this._oldProps)this.target[e]=
this._oldProps[e]+this._deltaProps[e]*this._reverseFlag*d;if(this.onUpdate!=null)this.onUpdate(this,d);if(a>=1){if(this.reverse){if(e=this._oldProps,this._oldProps=this._newProps,this._newProps=e,this._startTime=Date.now(),this._frameCount=0,this._reverseFlag*=-1,!this.loop)this.reverse=!1}else if(this.loop){for(e in this._oldProps)this.target[e]=this._oldProps[e];this._startTime=Date.now();this._frameCount=0}else if(b.remove(this),e=this.next,e!=null&&(e instanceof b?(a=e,e=null):a=e.shift(),a!=
null))a.next=e,a.start();if(this.onComplete!=null)this.onComplete(this)}}}};b._tweens=[];b.step=function(){for(var a=this._tweens,b=a.length;--b>=0;)a[b]._update()};b.add=function(a){this._tweens.indexOf(a)==-1&&this._tweens.push(a);return this};b.remove=function(a){var b=this._tweens,a=b.indexOf(a);a>-1&&b.splice(a,1);return this};b.to=function(a,d,e){a=new b(a,d,e);a._init();return a};b.from=function(a,d,e){d=new b(a,d,e);e=d._oldProps;d._oldProps=d._newProps;d._newProps=e;d._reverseFlag=-1;for(var f in d._oldProps)a[f]=
d._oldProps[f];d._init();return d};var a=Quark.Easing={Linear:{},Quadratic:{},Cubic:{},Quartic:{},Quintic:{},Sinusoidal:{},Exponential:{},Circular:{},Elastic:{},Back:{},Bounce:{}};a.Linear.EaseNone=function(a){return a};a.Quadratic.EaseIn=function(a){return a*a};a.Quadratic.EaseOut=function(a){return-a*(a-2)};a.Quadratic.EaseInOut=function(a){return(a*=2)<1?0.5*a*a:-0.5*(--a*(a-2)-1)};a.Cubic.EaseIn=function(a){return a*a*a};a.Cubic.EaseOut=function(a){return--a*a*a+1};a.Cubic.EaseInOut=function(a){return(a*=
2)<1?0.5*a*a*a:0.5*((a-=2)*a*a+2)};a.Quartic.EaseIn=function(a){return a*a*a*a};a.Quartic.EaseOut=function(a){return-(--a*a*a*a-1)};a.Quartic.EaseInOut=function(a){return(a*=2)<1?0.5*a*a*a*a:-0.5*((a-=2)*a*a*a-2)};a.Quintic.EaseIn=function(a){return a*a*a*a*a};a.Quintic.EaseOut=function(a){return(a-=1)*a*a*a*a+1};a.Quintic.EaseInOut=function(a){return(a*=2)<1?0.5*a*a*a*a*a:0.5*((a-=2)*a*a*a*a+2)};a.Sinusoidal.EaseIn=function(a){return-Math.cos(a*Math.PI/2)+1};a.Sinusoidal.EaseOut=function(a){return Math.sin(a*
Math.PI/2)};a.Sinusoidal.EaseInOut=function(a){return-0.5*(Math.cos(Math.PI*a)-1)};a.Exponential.EaseIn=function(a){return a==0?0:Math.pow(2,10*(a-1))};a.Exponential.EaseOut=function(a){return a==1?1:-Math.pow(2,-10*a)+1};a.Exponential.EaseInOut=function(a){return a==0?0:a==1?1:(a*=2)<1?0.5*Math.pow(2,10*(a-1)):0.5*(-Math.pow(2,-10*(a-1))+2)};a.Circular.EaseIn=function(a){return-(Math.sqrt(1-a*a)-1)};a.Circular.EaseOut=function(a){return Math.sqrt(1- --a*a)};a.Circular.EaseInOut=function(a){return(a/=
0.5)<1?-0.5*(Math.sqrt(1-a*a)-1):0.5*(Math.sqrt(1-(a-=2)*a)+1)};a.Elastic.EaseIn=function(a){var b,e=0.1,f=0.4;if(a==0)return 0;else if(a==1)return 1;else f||(f=0.3);!e||e<1?(e=1,b=f/4):b=f/(2*Math.PI)*Math.asin(1/e);return-(e*Math.pow(2,10*(a-=1))*Math.sin((a-b)*2*Math.PI/f))};a.Elastic.EaseOut=function(a){var b,e=0.1,f=0.4;if(a==0)return 0;else if(a==1)return 1;else f||(f=0.3);!e||e<1?(e=1,b=f/4):b=f/(2*Math.PI)*Math.asin(1/e);return e*Math.pow(2,-10*a)*Math.sin((a-b)*2*Math.PI/f)+1};a.Elastic.EaseInOut=
function(a){var b,e=0.1,f=0.4;if(a==0)return 0;else if(a==1)return 1;else f||(f=0.3);!e||e<1?(e=1,b=f/4):b=f/(2*Math.PI)*Math.asin(1/e);return(a*=2)<1?-0.5*e*Math.pow(2,10*(a-=1))*Math.sin((a-b)*2*Math.PI/f):e*Math.pow(2,-10*(a-=1))*Math.sin((a-b)*2*Math.PI/f)*0.5+1};a.Back.EaseIn=function(a){return a*a*(2.70158*a-1.70158)};a.Back.EaseOut=function(a){return(a-=1)*a*(2.70158*a+1.70158)+1};a.Back.EaseInOut=function(a){return(a*=2)<1?0.5*a*a*(3.5949095*a-2.5949095):0.5*((a-=2)*a*(3.5949095*a+2.5949095)+
2)};a.Bounce.EaseIn=function(c){return 1-a.Bounce.EaseOut(1-c)};a.Bounce.EaseOut=function(a){return(a/=1)<1/2.75?7.5625*a*a:a<2/2.75?7.5625*(a-=1.5/2.75)*a+0.75:a<2.5/2.75?7.5625*(a-=2.25/2.75)*a+0.9375:7.5625*(a-=2.625/2.75)*a+0.984375};a.Bounce.EaseInOut=function(c){return c<0.5?a.Bounce.EaseIn(c*2)*0.5:a.Bounce.EaseOut(c*2-1)*0.5+0.5}})();
(function(){var b=Quark.Audio=function(a,c,d,e){b.superClass.constructor.call(this);this.src=a;this.autoPlay=c&&d;this.loop=e;this._playing=this._loaded=!1;this._evtHandler=Quark.delegate(this._evtHandler,this);this._element=document.createElement("audio");this._element.preload=c;this._element.src=a;c&&this.load()};Quark.inherit(b,Quark.EventDispatcher);b.prototype.load=function(){this._element.addEventListener("progress",this._evtHandler,!1);this._element.addEventListener("ended",this._evtHandler,
!1);this._element.addEventListener("error",this._evtHandler,!1);try{this._element.load()}catch(a){trace(a)}};b.prototype._evtHandler=function(a){if(a.type=="progress"){var c=0,b=0,e=a.target.buffered;if(e&&e.length>0)for(c=e.length-1;c>=0;c--)b=e.end(c)-e.start(c);if(b/a.target.duration>=1)this._element.removeEventListener("progress",this._evtHandler),this._element.removeEventListener("error",this._evtHandler),this._loaded=!0,this.dispatchEvent({type:"loaded",target:this}),this.autoPlay&&this.play()}else a.type==
"ended"?(this.dispatchEvent({type:"ended",target:this}),this.loop?this.play():this._playing=!1):a.type=="error"&&trace("Quark.Audio Error: "+a.target.src)};b.prototype.play=function(){this._loaded?(this._element.play(),this._playing=!0):(this.autoPlay=!0,this.load())};b.prototype.stop=function(){if(this._playing)this._element.pause(),this._playing=!1};b.prototype.loaded=function(){return this._loaded};b.prototype.playing=function(){return this._playing}})();
(function(){var b=Quark.Drawable=function(a,c){this.domDrawable=this.rawDrawable=null;this.set(a,c)};b.prototype.get=function(a,c){if(c==null||c.canvas.getContext!=null)return this.rawDrawable;else{if(this.domDrawable==null)this.domDrawable=Quark.createDOMDrawable(a,{image:this.rawDrawable});return this.domDrawable}};b.prototype.set=function(a,c){if(a==null?0:a instanceof HTMLImageElement||a instanceof HTMLCanvasElement||a instanceof HTMLVideoElement)this.rawDrawable=a;if(c===!0)this.domDrawable=
a;else if(this.domDrawable)this.domDrawable.style.backgroundImage="url("+this.rawDrawable.src+")"}})();
(function(){var b=Quark.DisplayObject=function(a){this.id=Quark.UIDUtil.createUID("DisplayObject");this.name=null;this.height=this.width=this.regY=this.regX=this.y=this.x=0;this.scaleY=this.scaleX=this.alpha=1;this.rotation=0;this.transformEnabled=this.eventEnabled=this.visible=!0;this.useHandCursor=!1;this.context=this.parent=this.drawable=this.mask=this.polyArea=null;this._depth=0;this._lastState={};this._stateList=["x","y","regX","regY","width","height","alpha","scaleX","scaleY","rotation","visible",
"_depth"];Quark.merge(this,a,!0);a.mixin&&Quark.merge(this,a.mixin,!1);b.superClass.constructor.call(this,a)};Quark.inherit(b,Quark.EventDispatcher);b.prototype.setDrawable=function(a){this.drawable==null?this.drawable=new Quark.Drawable(a):this.drawable.rawDrawable!=a&&this.drawable.set(a)};b.prototype.getDrawable=function(a){return this._cache||this.drawable&&this.drawable.get(this,a)};b.prototype._update=function(a){this.update(a)};b.prototype.update=function(){return!0};b.prototype._render=function(a){a=
this.context||a;!this.visible||this.alpha<=0?(a.hide!=null&&a.hide(this),this.saveState(["visible","alpha"])):(a.startDraw(),a.transform(this),this.render(a),a.endDraw(),this.saveState())};b.prototype.render=function(a){a.draw(this,0,0,this.width,this.height,0,0,this.width,this.height)};b.prototype.saveState=function(a){for(var a=a||this._stateList,c=this._lastState,b=0,e=a.length;b<e;b++){var f=a[b];c["last"+f]=this[f]}};b.prototype.getState=function(a){return this._lastState["last"+a]};b.prototype.propChanged=
function(a){for(var c=arguments.length>0?arguments:this._stateList,b=0,e=c.length;b<e;b++){var f=c[b];if(this._lastState["last"+f]!=this[f])return!0}return!1};b.prototype.hitTestPoint=function(a,c,b){return Quark.hitTestPoint(this,a,c,b)};b.prototype.hitTestObject=function(a,c){return Quark.hitTestObject(this,a,c)};b.prototype.localToGlobal=function(a,c){var b=this.getConcatenatedMatrix();return{x:b.tx+a,y:b.ty+c}};b.prototype.globalToLocal=function(a,c){var b=this.getConcatenatedMatrix().invert();
return{x:b.tx+a,y:b.ty+c}};b.prototype.localToTarget=function(a,c,b){a=this.localToGlobal(a,c);return b.globalToLocal(a.x,a.y)};b.prototype.getConcatenatedMatrix=function(a){var c=new Quark.Matrix(1,0,0,1,0,0);if(a==this)return c;for(var b=this;b.parent!=null&&b.parent!=a;b=b.parent){var e=1,f=0;b.rotation%360!=0&&(f=b.rotation*Quark.DEG_TO_RAD,e=Math.cos(f),f=Math.sin(f));b.regX!=0&&(c.tx-=b.regX);b.regY!=0&&(c.ty-=b.regY);c.concat(new Quark.Matrix(e*b.scaleX,f*b.scaleX,-f*b.scaleY,e*b.scaleY,b.x,
b.y))}return c};b.prototype.getBounds=function(){var a=this.width,c=this.height,b=this.getConcatenatedMatrix(),a=this.polyArea||[{x:0,y:0},{x:a,y:0},{x:a,y:c},{x:0,y:c}],c=[],e=a.length,f,h,g,i,j;f=b.transformPoint(a[0],!0,!0);h=g=f.x;i=j=f.y;c[0]=f;for(var k=1;k<e;k++){f=b.transformPoint(a[k],!0,!0);if(h>f.x)h=f.x;else if(g<f.x)g=f.x;if(i>f.y)i=f.y;else if(j<f.y)j=f.y;c[k]=f}c.x=h;c.y=i;c.width=g-h;c.height=j-i;return c};b.prototype.getCurrentWidth=function(){return Math.abs(this.width*this.scaleX)};
b.prototype.getCurrentHeight=function(){return Math.abs(this.height*this.scaleY)};b.prototype.getStage=function(){for(var a=this;a.parent;)a=a.parent;return a instanceof Quark.Stage?a:null};Quark.DisplayObject.prototype.cache=function(a,c){return this._cache=Quark.cacheObject(this,a,c)};Quark.DisplayObject.prototype.uncache=function(){this._cache=null};Quark.DisplayObject.prototype.toImage=function(a){return Quark.cacheObject(this,!0,a)};b.prototype.toString=function(){return Quark.UIDUtil.displayObjectToString(this)}})();
(function(){var b=Quark.DisplayObjectContainer=function(a){this.eventChildren=!0;this.autoSize=!1;this.children=[];a=a||{};b.superClass.constructor.call(this,a);this.id=a.id||Quark.UIDUtil.createUID("DisplayObjectContainer");this.setDrawable(a.drawable||a.image||null);if(a.children)for(var c=0;c<a.children.length;c++)this.addChild(a.children[c])};Quark.inherit(b,Quark.DisplayObject);b.prototype.addChildAt=function(a,c){if(c<0)c=0;else if(c>this.children.length)c=this.children.length;var b=this.getChildIndex(a);
if(b!=-1){if(b==c)return this;this.children.splice(b,1)}else a.parent&&a.parent.removeChild(a);this.children.splice(c,0,a);a.parent=this;if(this.autoSize){var b=new Quark.Rectangle(0,0,this.rectWidth||this.width,this.rectHeight||this.height),e=new Quark.Rectangle(a.x,a.y,a.rectWidth||a.width,a.rectHeight||a.height);b.union(e);this.width=b.width;this.height=b.height}return this};b.prototype.addChild=function(a){for(var c=this.children.length,b=0;b<arguments.length;b++)a=arguments[b],this.addChildAt(a,
c+b);return this};b.prototype.removeChildAt=function(a){if(a<0||a>=this.children.length)return!1;var c=this.children[a];if(c!=null){var b=this.getStage();b!=null&&b.context.remove(c);c.parent=null}this.children.splice(a,1);return!0};b.prototype.removeChild=function(a){return this.removeChildAt(this.children.indexOf(a))};b.prototype.removeAllChildren=function(){for(;this.children.length>0;)this.removeChildAt(0)};b.prototype.getChildAt=function(a){return a<0||a>=this.children.length?null:this.children[a]};
b.prototype.getChildIndex=function(a){return this.children.indexOf(a)};b.prototype.setChildIndex=function(a,c){if(a.parent==this){var b=this.children.indexOf(a);c!=b&&(this.children.splice(b,1),this.children.splice(c,0,a))}};b.prototype.swapChildren=function(a,c){var b=this.getChildIndex(a),e=this.getChildIndex(c);this.children[b]=c;this.children[e]=a};b.prototype.swapChildrenAt=function(a,c){var b=this.getChildAt(a),e=this.getChildAt(c);this.children[a]=e;this.children[c]=b};b.prototype.getChildById=
function(a){for(var c=0,b=this.children.length;c<b;c++){var e=this.children[c];if(e.id==a)return e}return null};b.prototype.removeChildById=function(a){for(var c=0,b=this.children.length;c<b;c++)if(this.children[c].id==a)return this.removeChildAt(c);return null};b.prototype.sortChildren=function(a){if(typeof a=="string")var c=a,a=function(a,b){return b[c]-a[c]};this.children.sort(a)};b.prototype.contains=function(a){return this.getChildIndex(a)!=-1};b.prototype.getNumChildren=function(){return this.children.length};
b.prototype._update=function(a){var c=!0;this.update!=null&&(c=this.update(a));if(c!==!1)for(var c=this.children.slice(0),b=0,e=c.length;b<e;b++){var f=c[b];f._depth=b+1;f._update(a)}};b.prototype.render=function(a){b.superClass.render.call(this,a);for(var c=0,d=this.children.length;c<d;c++)this.children[c]._render(a)};b.prototype.getObjectUnderPoint=function(a,c,b,e){if(e)var f=[];for(var h=this.children.length-1;h>=0;h--){var g=this.children[h];if(!(g==null||!g.eventEnabled&&g.children==void 0||
!g.visible||g.alpha<=0))if(g.children!=void 0&&g.eventChildren&&g.getNumChildren()>0){var i=g.getObjectUnderPoint(a,c,b,e);if(i)if(e)i.length>0&&(f=f.concat(i));else return i;else if(g.hitTestPoint(a,c,b)>=0)if(e)f.push(g);else return g}else if(g.hitTestPoint(a,c,b)>=0)if(e)f.push(g);else return g}return e?f:null}})();
(function(){var b=Quark.Stage=function(a){this.stageY=this.stageX=0;this.paused=!1;this._eventTarget=null;a=a||{};b.superClass.constructor.call(this,a);this.id=a.id||Quark.UIDUtil.createUID("Stage");if(this.context==null)throw"Quark.Stage Error: context is required.";this.updatePosition()};Quark.inherit(b,Quark.DisplayObjectContainer);b.prototype.step=function(a){this.paused||(this._update(a),this._render(this.context))};b.prototype._update=function(a){for(var c=this.children.slice(0),b=0,e=c.length;b<
e;b++){var f=c[b];f._depth=b+1;f._update(a)}this.update!=null&&this.update(a)};b.prototype._render=function(a){a.clear!=null&&a.clear(0,0,this.width,this.height);b.superClass._render.call(this,a)};b.prototype.dispatchEvent=function(a){var c=a.pageX||a.clientX,d=a.pageY||a.clientY,c=(c-this.stageX)/this.scaleX,d=(d-this.stageY)/this.scaleY,e=this.getObjectUnderPoint(c,d,!0),f=this._eventTarget;a.eventX=c;a.eventY=d;c=a.type=="mouseout"&&!this.context.canvas.contains(a.relatedTarget);if(f!=null&&(f!=
e||c))a.lastEventTarget=f,(d=c||e==null||a.type=="mousemove"?"mouseout":a.type=="touchmove"?"touchout":null)&&f.dispatchEvent({type:d}),this._eventTarget=null;if(e!=null&&e.eventEnabled&&a.type!="mouseout")a.eventTarget=f=this._eventTarget=e,e.dispatchEvent(a);if(!Quark.supportTouch)this.context.canvas.style.cursor=f&&f.useHandCursor&&f.eventEnabled?"pointer":"";(c||a.type!="mouseout")&&b.superClass.dispatchEvent.call(this,a)};b.prototype.updatePosition=function(){var a=Quark.getElementOffset(this.context.canvas);
this.stageX=a.left;this.stageY=a.top}})();
(function(){var b=Quark.Bitmap=function(a){this.image=null;this.rectHeight=this.rectWidth=this.rectY=this.rectX=0;a=a||{};b.superClass.constructor.call(this,a);this.id=a.id||Quark.UIDUtil.createUID("Bitmap");this.setRect(a.rect||[0,0,this.image.width,this.image.height]);this.setDrawable(this.image);this._stateList.push("rectX","rectY","rectWidth","rectHeight")};Quark.inherit(b,Quark.DisplayObject);b.prototype.setRect=function(a){this.rectX=a[0];this.rectY=a[1];this.rectWidth=this.width=a[2];this.rectHeight=
this.height=a[3]};b.prototype.render=function(a){a.draw(this,this.rectX,this.rectY,this.rectWidth,this.rectHeight,0,0,this.width,this.height)}})();
(function(){var b=Quark.MovieClip=function(a){this.interval=0;this.useFrames=this.paused=!1;this.currentFrame=0;this._frames=[];this._frameLabels={};this._frameDisObj=null;this._displayedCount=0;a=a||{};b.superClass.constructor.call(this,a);this.id=a.id||Quark.UIDUtil.createUID("MovieClip");a.frames&&this.addFrame(a.frames)};Quark.inherit(b,Quark.Bitmap);b.prototype.addFrame=function(a){var c=this._frames.length;if(a instanceof Array)for(var b=0;b<a.length;b++)this.setFrame(a[b],c+b);else this.setFrame(a,
c);return this};b.prototype.setFrame=function(a,b){b==void 0||b>this._frames.length?b=this._frames.length:b<0&&(b=0);this._frames[b]=a;a.label&&(this._frameLabels[a.label]=a);if(a.interval==void 0)a.interval=this.interval;b==0&&this.currentFrame==0&&this.setRect(a.rect)};b.prototype.getFrame=function(a){return typeof a=="number"?this._frames[a]:this._frameLabels[a]};b.prototype.play=function(){this.paused=!1};b.prototype.stop=function(){this.paused=!0};b.prototype.gotoAndStop=function(a){this.currentFrame=
this.getFrameIndex(a);this.paused=!0};b.prototype.gotoAndPlay=function(a){this.currentFrame=this.getFrameIndex(a);this.paused=!1};b.prototype.getFrameIndex=function(a){if(typeof a=="number")return a;for(var a=this._frameLabels[a],b=this._frames,d=0;d<b.length;d++)if(a==b[d])return d;return-1};b.prototype.nextFrame=function(a){var b=this._frames[this.currentFrame];if(b.interval>0)a=this._displayedCount+a,this._displayedCount=b.interval>a?a:0;if(b.jump>=0||typeof b.jump=="string")if(this._displayedCount==
0||!b.interval)return this.currentFrame=this.getFrameIndex(b.jump);return b.interval>0&&this._displayedCount>0?this.currentFrame:this.currentFrame>=this._frames.length-1?this.currentFrame=0:++this.currentFrame};b.prototype.getNumFrames=function(){return this._frames.length};b.prototype._update=function(a){var c=this._frames[this.currentFrame];c.stop?this.stop():(this.paused||(c=this._frames[this.nextFrame(this.useFrames?1:a&&a.deltaTime)]),this.setRect(c.rect),b.superClass._update.call(this,a))};
b.prototype.render=function(a){var b=this._frames[this.currentFrame].rect;a.draw(this,b[0],b[1],b[2],b[3],0,0,this.width,this.height)}})();
(function(){var b=Quark.Button=function(a){this.state=b.UP;this.enabled=!0;a=a||{};b.superClass.constructor.call(this,a);this.id=a.id||Quark.UIDUtil.createUID("Button");this._skin=new Quark.MovieClip({id:"skin",image:a.image});this.addChild(this._skin);this._skin.stop();this.eventChildren=!1;if(a.useHandCursor===void 0)this.useHandCursor=!0;a.up&&this.setUpState(a.up);a.over&&this.setOverState(a.over);a.down&&this.setDownState(a.down);a.disabled&&this.setDisabledState(a.disabled)};Quark.inherit(b,
Quark.DisplayObjectContainer);b.UP="up";b.OVER="over";b.DOWN="down";b.DISABLED="disabled";b.prototype.setUpState=function(a){a.label=b.UP;this._skin.setFrame(a,0);this.upState=a;return this};b.prototype.setOverState=function(a){a.label=b.OVER;this._skin.setFrame(a,1);this.overState=a;return this};b.prototype.setDownState=function(a){a.label=b.DOWN;this._skin.setFrame(a,2);this.downState=a;return this};b.prototype.setDisabledState=function(a){a.label=b.DISABLED;this._skin.setFrame(a,3);this.disabledState=
a;return this};b.prototype.setEnabled=function(a){if(this.enabled==a)return this;(this.eventEnabled=this.enabled=a)?this._skin.currentFrame==3&&this._skin.gotoAndStop(b.UP):this.disabledState?this._skin.gotoAndStop(b.DISABLED):this._skin.gotoAndStop(b.UP);return this};b.prototype.changeState=function(a){if(this.state!=a){this.state=a;switch(a){case b.OVER:case b.DOWN:case b.UP:if(!this.enabled)this.eventEnabled=this.enabled=!0;this._skin.gotoAndStop(a);break;case b.DISABLED:this.setEnabled(!1)}return this}};
b.prototype.dispatchEvent=function(a){if(this.enabled){switch(a.type){case "mousemove":this.overState&&this.changeState(b.OVER);break;case "mousedown":case "touchstart":case "touchmove":this.downState&&this.changeState(b.DOWN);break;case "mouseup":this.overState?this.changeState(b.OVER):this.changeState(b.UP);break;case "mouseout":case "touchout":case "touchend":this.upState&&this.changeState(b.UP)}b.superClass.dispatchEvent.call(this,a)}};b.prototype.setDrawable=function(){b.superClass.setDrawable.call(this,
null)}})();
(function(){var b=Quark.Graphics=function(a){this.lineWidth=1;this.strokeStyle="0";this.lineAlpha=1;this.lineJoin=this.lineCap=null;this.miterLimit=10;this.hasFill=this.hasStroke=!1;this.fillStyle="0";this.fillAlpha=1;a=a||{};b.superClass.constructor.call(this,a);this.id=Quark.UIDUtil.createUID("Graphics");this._actions=[];this._cache=null};Quark.inherit(b,Quark.DisplayObject);b.prototype.lineStyle=function(a,b,d,e,f,h){this._addAction(["lineWidth",this.lineWidth=a||1]);this._addAction(["strokeStyle",this.strokeStyle=
b||"0"]);this._addAction(["lineAlpha",this.lineAlpha=d||1]);if(e!=void 0)this._addAction(["lineCap",this.lineCap=e]);if(f!=void 0)this._addAction(["lineJoin",this.lineJoin=f]);if(h!=void 0)this._addAction(["miterLimit",this.miterLimit=h]);this.hasStroke=!0;return this};b.prototype.beginFill=function(a,b){this._addAction(["fillStyle",this.fillStyle=a]);this._addAction(["fillAlpha",this.fillAlpha=b||1]);this.hasFill=!0;return this};b.prototype.endFill=function(){this.hasStroke&&this._addAction(["stroke"]);
this.hasFill&&this._addAction(["fill"]);return this};b.prototype.beginLinearGradientFill=function(a,c,d,e,f,h){a=b._getContext().createLinearGradient(a,c,d,e);c=0;for(d=f.length;c<d;c++)a.addColorStop(h[c],f[c]);this.hasFill=!0;return this._addAction(["fillStyle",this.fillStyle=a])};b.prototype.beginRadialGradientFill=function(a,c,d,e,f,h,g,i){a=b._getContext().createRadialGradient(a,c,d,e,f,h);c=0;for(d=g.length;c<d;c++)a.addColorStop(i[c],g[c]);this.hasFill=!0;return this._addAction(["fillStyle",this.fillStyle=a])};b.prototype.beginBitmapFill=
function(a,c){this.hasFill=!0;return this._addAction(["fillStyle",this.fillStyle=b._getContext().createPattern(a,c||"")])};b.prototype.beginPath=function(){return this._addAction(["beginPath"])};b.prototype.closePath=function(){return this._addAction(["closePath"])};b.prototype.drawRect=function(a,b,d,e){return this._addAction(["rect",a,b,d,e])};b.prototype.drawRoundRectComplex=function(a,b,d,e,f,h,g,i){this._addAction(["moveTo",a+f,b]);this._addAction(["lineTo",a+d-h,b]);this._addAction(["arc",a+d-h,b+h,h,-Math.PI/
2,0,!1]);this._addAction(["lineTo",a+d,b+e-g]);this._addAction(["arc",a+d-g,b+e-g,g,0,Math.PI/2,!1]);this._addAction(["lineTo",a+i,b+e]);this._addAction(["arc",a+i,b+e-i,i,Math.PI/2,Math.PI,!1]);this._addAction(["lineTo",a,b+f]);this._addAction(["arc",a+f,b+f,f,Math.PI,Math.PI*3/2,!1]);return this};b.prototype.drawRoundRect=function(a,b,d,e,f){return this.drawRoundRectComplex(a,b,d,e,f,f,f,f)};b.prototype.drawCircle=function(a,b,d){return this._addAction(["arc",a+d,b+d,d,0,Math.PI*2,0])};b.prototype.drawEllipse=
function(a,b,d,e){if(d==e)return this.drawCircle(a,b,d);d/=2;e/=2;var f=0.5522847498307933*d,h=0.5522847498307933*e;a+=d;b+=e;this._addAction(["moveTo",a+d,b]);this._addAction(["bezierCurveTo",a+d,b-h,a+f,b-e,a,b-e]);this._addAction(["bezierCurveTo",a-f,b-e,a-d,b-h,a-d,b]);this._addAction(["bezierCurveTo",a-d,b+h,a-f,b+e,a,b+e]);this._addAction(["bezierCurveTo",a+f,b+e,a+d,b+h,a+d,b]);return this};b.prototype.drawSVGPath=function(a){a=a.split(/,| (?=[a-zA-Z])/);this._addAction(["beginPath"]);for(var b=
0,d=a.length;b<d;b++){var e=a[b],f=e[0].toUpperCase(),e=e.substring(1).split(/,| /);e[0].length==0&&e.shift();switch(f){case "M":this._addAction(["moveTo",e[0],e[1]]);break;case "L":this._addAction(["lineTo",e[0],e[1]]);break;case "C":this._addAction(["bezierCurveTo",e[0],e[1],e[2],e[3],e[4],e[5]]);break;case "Z":this._addAction(["closePath"])}}return this};b.prototype._draw=function(a){a.beginPath();for(var b=0,d=this._actions.length;b<d;b++){var e=this._actions[b],f=e[0],h=e.length>1?e.slice(1):
null;typeof a[f]=="function"?a[f].apply(a,h):a[f]=e[1]}};b.prototype.getDrawable=function(a){this.drawable==null&&this.setDrawable(this.toImage());return this.drawable.get(this,a)};b.prototype.cache=function(a){var b=Quark.createDOM("canvas",{width:this.width,height:this.height});this._draw(b.getContext("2d"));this._cache=b;if(a)this._cache=this.toImage();return this._cache};b.prototype.uncache=function(){this._cache=null};b.prototype.toImage=function(a){var b=this._cache||this.cache(!0);if(b instanceof
HTMLImageElement)return b;var d=new Image;d.src=b.toDataURL(a||"image/png");d.width=this.width;d.height=this.height;return d};b.prototype.clear=function(){this._actions.length=0;this._cache=null;this.lineWidth=1;this.strokeStyle="0";this.lineAlpha=1;this.lineJoin=this.lineCap=null;this.miterLimit=10;this.hasStroke=!1;this.fillStyle="0";this.fillAlpha=1};b.prototype._addAction=function(a){this._actions.push(a);return this};b._getContext=function(){var a=Quark.createDOM("canvas").getContext("2d");this._getContext=
function(){return a};return a}})();
(function(){var b=Quark.Text=function(a){this.text="";this.font="12px arial";this.color="#000";this.textAlign="start";this.outline=!1;this.maxWidth=1E4;this.lineWidth=null;this.lineSpacing=0;this.fontMetrics=null;a=a||{};b.superClass.constructor.call(this,a);this.id=Quark.UIDUtil.createUID("Text");if(this.fontMetrics==null)this.fontMetrics=b.getFontMetrics(this.font)};Quark.inherit(b,Quark.DisplayObject);b.prototype._draw=function(a){if(this.text&&this.text.length!=0){a.font=this.font;a.textAlign=
this.textAlign;a.textBaseline="top";this.outline?a.strokeStyle=this.color:a.fillStyle=this.color;var b=this.text.split(/\r\n|\r|\n|<br(?:[ \/])*>/),d=0,e=this.fontMetrics.height+this.lineSpacing;this.width=this.lineWidth||0;for(var f=0,h=b.length;f<h;f++){var g=b[f],i=a.measureText(g).width;if(this.lineWidth==null||i<this.lineWidth){if(i>this.width)this.width=i;this._drawTextLine(a,g,d)}else{for(var g=g.split(/([^\x00-\xff]|\b)/),i=g[0],j=1,k=g.length;j<k;j++){var n=g[j];n&&n.length!=0&&(a.measureText(i+
n).width>this.lineWidth?(this._drawTextLine(a,i,d),d+=e,i=n):i+=n)}this._drawTextLine(a,i,d)}d+=e}this.height=d}};b.prototype._drawTextLine=function(a,b,d){var e=0;switch(this.textAlign){case "center":e=this.width*0.5;break;case "right":case "end":e=this.width}this.outline?a.strokeText(b,e,d,this.maxWidth):a.fillText(b,e,d,this.maxWidth)};b.prototype.setFont=function(a,c){if(this.font!=a&&(this.font=a,!c))this.fontMetrics=b.getFontMetrics(this.font)};b.prototype.render=function(a){if(a instanceof
Quark.DOMContext){var c=this.getDrawable(a),d=c.style;d.font=this.font;d.textAlign=this.textAlign;d.color=this.color;d.width=this.width+"px";d.height=this.height+"px";d.lineHeight=this.fontMetrics.height+this.lineSpacing+"px";c.innerHTML=this.text}b.superClass.render.call(this,a)};b.prototype.getDrawable=function(a){this.drawable==null&&this.setDrawable(Quark.createDOM("div"),!0);return this.drawable.get(this,a)};b.getFontMetrics=function(a){var b={},a=Quark.createDOM("div",{style:{font:a,position:"absolute"},
innerHTML:"M"});document.body.appendChild(a);b.height=a.offsetHeight;a.innerHTML='<div style="display:inline-block; width:1px; height:1px;"></div>';var d=a.childNodes[0];b.ascent=d.offsetTop+d.offsetHeight;b.descent=b.height-b.ascent;document.body.removeChild(a);return b}})();



/*  |xGv00|2dd707ae4626d703aa10a2b3a6f587d0 */
/**
 * @author Brucewan
 * @version 1.0
 * @date 2014-07-11
 * @description 图片编辑器
 * @extends tg.Base
 * @name tg.ImageEditor
 * @requires zepto.js
 * @requires base.js
 * @class
*/

tg.add('tg.ImageEditor:tg.Base', function () {
    var _public = this;
    var _private = {};
    var _static = this.constructor;
    _public.constructor = function (config) {
        this.config = Zepto.extend(true, {}, _static.config, config);
        this.init();
    }
    _static.config = {width: 320, height: 320, fps: 60};
    _public.init = function () {
        var self = this;
        var config = self.config;
        self.effect && self.on(self.effect);
        config.event && self.on(config.event);
        if (self.trigger('beforeinit') === false) {
            return;
        }
        var canvas = Quark.createDOM('canvas', {
            width: config.width,
            height: config.height,
            style: {backgroundColor: "#fff"}
        });
        canvas = $(canvas).appendTo(config.container)[0];
        var context = new Quark.CanvasContext({canvas: canvas});
        self.stage = new Quark.Stage({width: config.width, height: config.height, context: context});
        self.canvas = canvas;
        self.context = context;
        var em = this.em = new Quark.EventManager();
        em.registerStage(self.stage, ['touchstart', 'touchmove', 'touchend'], true, true);
        self.stage.stageX = config.stageX !== window.undefined ? config.stageX : self.stage.stageX;
        self.stage.stageY = config.stageY !== window.undefined ? config.stageY : self.stage.stageY;
        var timer = new Quark.Timer(1000 / config.fps);
        timer.addListener(self.stage);
        timer.addListener(Quark.Tween);
        timer.start();
        var bg = new Q.Graphics({width: config.width, height: config.height});
        bg.beginFill("#fff").drawRect(0, 0, config.width, config.height).endFill().cache();
        self.stage.addChild(bg)
        _private.attach.call(self);
    };
    _private.attach = function () {
        var self = this;
        var config = self.config;
        config.trigger.on('change', function (e) {
            self.trigger('beforechange');
            var file = this.files[0];
            if (file.type && !/image\/\w+/.test(file.type)) {
                alert('请选择图片文件！');
                return false;
            }
            var fr = new FileReader();
            fr.readAsDataURL(file);
            fr.onload = function (fe) {
                var result = this.result;
                var img = new Image();
                var exif;
                img.onload = function () {
                    self.addImage({img: img, exif: exif});
                    self.trigger('change');
                };
                var base64 = result.replace(/^.*?,/, '');
                var binary = atob(base64);
                var binaryData = new BinaryFile(binary);
                exif = EXIF.readFromBinaryFile(binaryData);
                img.src = result;
            };
        });
        self.stage.addEventListener('touchstart', function (e) {
            if (self.imgs) {
                for (var i = 0; i < self.imgs.length; i++) {
                    self.imgs[i].disable();
                }
            }
            if (e.eventTarget && e.eventTarget.parent.enEditable) {
                e.eventTarget.parent.enEditable();
                self.activeTarget = e.eventTarget.parent;
            }
        });
        self.stage.addEventListener('touchmove', function (e) {
            var touches = e.rawEvent.touches || e.rawEvent.changedTouches;
            if (e.eventTarget && (e.eventTarget.parent == self.activeTarget) && touches[1]) {
                var dis = Math.sqrt(Math.pow(touches[1].pageX - touches[0].pageX, 2) + Math.pow(touches[1].pageY - touches[0].pageY, 2));
                if (self.activeTarget.mcScale.touchDis) {
                    var scale = dis / self.activeTarget.mcScale.touchDis - 1;
                    if (self.activeTarget.getCurrentWidth() < 100 && scale < 0) {
                        scale = 0;
                    }
                    self.activeTarget.scaleX += scale;
                    self.activeTarget.scaleY += scale;
                }
                self.activeTarget.mcScale.touchDis = dis;
            }
        });
        self.stage.addEventListener('touchend', function () {
            if (self.activeTarget && self.activeTarget.mcScale) {
                delete self.activeTarget.mcScale.touchDis;
            }
        });
    };
    _public.addImage = function (info) {
        var self = this;
        var config = self.config;
        var img = info.img;
        var exif = info.exif;
        var imgContainer;
        var mcScale;
        var mcClose;
        var imgWidth = img.width;
        var imgHeight = img.height;
        var imgRotation = 0;
        var imgRegX = 0;
        var imgRegY = 0;
        var imgX = 0;
        var imgY = 0;
        var posX = info.pos ? info.pos[0] : 0;
        var posY = info.pos ? info.pos[1] : 0;
        var imgScale = 1;
        var orientation = exif ? exif.Orientation : 1;
        var getRatio = function (img) {
            if (/png$/i.test(img.src)) {
                return 1;
            }
            var iw = img.naturalWidth, ih = img.naturalHeight;
            var canvas = document.createElement('canvas');
            canvas.width = 1;
            canvas.height = ih;
            var ctx = canvas.getContext('2d');
            ctx.drawImage(img, 0, 0);
            var data = ctx.getImageData(0, 0, 1, ih).data;
            var sy = 0;
            var ey = ih;
            var py = ih;
            while (py > sy) {
                var alpha = data[(py - 1) * 4 + 3];
                if (alpha === 0) {
                    ey = py;
                } else {
                    sy = py;
                }
                py = (ey + sy) >> 1;
            }
            var ratio = (py / ih);
            return (ratio === 0) ? 1 : ratio;
        }
        var ratio = getRatio(img);
        if (typeof img == 'string') {
            var url = img;
            img = new Image();
            img.src = url;
        }
        switch (orientation) {
            case 3:
                imgRotation = 180;
                imgRegX = imgWidth;
                imgRegY = imgHeight * ratio;
                break;
            case 6:
                imgRotation = 90;
                imgWidth = img.height;
                imgHeight = img.width;
                imgRegY = imgWidth * ratio;
                break;
            case 8:
                imgRotation = 270;
                imgWidth = img.height;
                imgHeight = img.width;
                imgRegX = imgHeight * ratio;
                if (/iphone|ipod|ipad/i.test(navigator.userAgent)) {
                    alert('苹果系统下暂不支持你以这么萌！萌！达！姿势拍照！');
                    return;
                }
                break;
        }
        imgWidth *= ratio;
        imgHeight *= ratio;
        if (imgWidth > self.stage.width) {
            imgScale = self.stage.width / imgWidth;
        }
        imgWidth = imgWidth * imgScale;
        imgHeight = imgHeight * imgScale;
        imgContainer = new Quark.DisplayObjectContainer({width: imgWidth, height: imgHeight});
        imgContainer.x = posX;
        imgContainer.y = posY;
        img = new Quark.Bitmap({image: img, regX: imgRegX, regY: imgRegY});
        img.rotation = imgRotation;
        img.x = imgX;
        img.y = 0;
        img.scaleX = imgScale * ratio;
        img.scaleY = imgScale;
        if (config.iconScale && !info.disScale) {
            var iconScaleImg = new Image();
            iconScaleImg.onload = function () {
                var rect = config.iconScale.rect;
                mcScale = new Quark.MovieClip({image: iconScaleImg});
                mcScale.addFrame([{rect: rect}]);
                mcScale.x = imgWidth - rect[2];
                mcScale.y = 0;
                mcScale.alpha = 0.5;
                mcScale.visible = false;
                mcScale.addEventListener('touchstart', function (e) {
                    mcScale.scaleable = true;
                    mcScale.startX = e.eventX;
                    mcScale.startY = e.eventY;
                    mcScale.alpha = 0.8;
                    var curW = imgContainer.getCurrentWidth();
                    var scaleMove = function (e) {
                        if (mcScale.scaleable) {
                            var disX = e.eventX - mcScale.startX;
                            var scaleX = (curW + disX) / imgContainer.width;
                            if (imgContainer.getCurrentWidth() < 100 && imgContainer.scaleX > scaleX) {
                                return;
                            }
                            imgContainer.scaleX = scaleX;
                            imgContainer.scaleY = scaleX;
                            var disOriX = e.eventX - imgContainer.x;
                            var disOriY = e.eventY - imgContainer.y;
                            var rotate = Math.atan2(disOriY, disOriX) * 360 / (2 * Math.PI);
                            imgContainer.rotation = parseInt(rotate / 1) * 1;
                        }
                    };
                    var scaleEnd = function (e) {
                        mcScale.scaleable = false;
                        mcScale.alpha = 0.5;
                        self.stage.removeEventListener('touchmove', scaleMove);
                        self.stage.removeEventListener('touchend', scaleEnd);
                    }
                    self.stage.addEventListener('touchmove', scaleMove);
                    self.stage.addEventListener('touchend', scaleEnd);
                });
                imgContainer.mcScale = mcScale;
                imgContainer.addChild(mcScale);
            };
            iconScaleImg.src = config.iconScale.url;
        }
        var border = new Q.Graphics({width: imgWidth + 10, height: imgHeight + 10, x: -5, y: -5});
        border.lineStyle(5, "#aaa").beginFill("#fff").drawRect(5, 5, imgWidth, imgHeight).endFill().cache();
        border.alpha = 0.5;
        border.visible = false;
        imgContainer.addChild(border);
        if (config.iconClose) {
            var iconCloseImg = new Image();
            iconCloseImg.onload = function () {
                var rect = config.iconClose.rect;
                mcClose = new Quark.MovieClip({image: iconCloseImg});
                mcClose.addFrame([{rect: rect}]);
                mcClose.x = 0;
                mcClose.y = 0;
                mcClose.alpha = 0.5;
                mcClose.visible = false;
                mcClose.addEventListener('touchstart', function (e) {
                    mcClose.alpha = 0.8;
                });
                mcClose.addEventListener('touchend', function (e) {
                    self.stage.removeChild(imgContainer);
                });
                self.stage.addEventListener('touchend', function (e) {
                    mcClose.alpha = 0.5;
                });
                imgContainer.addChild(mcClose);
            };
            iconCloseImg.src = config.iconClose.url;
        }
        if (!info.disMove && !info.disable) {
            img.addEventListener('touchstart', function (e) {
                var fnMove;
                var fnEnd;
                img.curW = imgContainer.getCurrentWidth();
                img.curH = imgContainer.getCurrentHeight();
                img.moveabled = true;
                img.startX = e.eventX;
                img.startY = e.eventY;
                fnMove = function (e) {
                    var isScale = e.rawEvent && e.rawEvent.touches[1];
                    if (img.moveabled && !isScale) {
                        var disX = e.eventX - img.startX;
                        var disY = e.eventY - img.startY;
                        var setX = imgContainer.x + disX;
                        var setY = imgContainer.y + disY;
                        var diffX = 0, diffY = 0;
                        if (setX < -img.curW / 2 + 5 && disX < 0) {
                            setX = -img.curW / 2;
                        }
                        if (setY < -img.curH / 2 + 5 && disY < 0) {
                            setY = -img.curH / 2;
                        }
                        if (setX > -img.curW / 2 + self.stage.width - 5 && disX > 0) {
                            setX = self.stage.width - img.curW / 2;
                        }
                        if (setY > self.stage.height - 5 && disY > 0) {
                            setY = self.stage.height;
                        }
                        imgContainer.x = setX;
                        imgContainer.y = setY;
                        img.startX = e.eventX;
                        img.startY = e.eventY;
                    }
                };
                fnEnd = function () {
                    img.moveabled = false;
                    self.stage.addEventListener('touchmove');
                    self.stage.addEventListener('touchend');
                }
                self.stage.addEventListener('touchmove', fnMove);
                self.stage.addEventListener('touchend', fnEnd);
            });
        }
        imgContainer.enEditable = function () {
            if (info.disable) {
                return;
            }
            border.visible = true;
            if (mcScale) {
                mcScale.visible = true;
            }
            if (mcClose) {
                mcClose.visible = true;
            }
        }
        imgContainer.disable = function () {
            border.visible = false;
            if (mcScale) {
                mcScale.visible = false;
            }
            if (mcClose) {
                mcClose.visible = false;
            }
        }
        img.update = function () {
            if (imgContainer && imgContainer.scaleX) {
                if (mcScale && mcScale.scaleX) {
                    mcScale.scaleX = 1 / imgContainer.scaleX;
                    mcScale.scaleY = 1 / imgContainer.scaleY;
                    mcScale.x = border.getCurrentWidth() - 10 - mcScale.getCurrentWidth();
                }
                if (mcClose && mcClose.scaleX) {
                    mcClose.scaleX = 1 / imgContainer.scaleX;
                    mcClose.scaleY = 1 / imgContainer.scaleY;
                    mcClose.x = 0;
                }
            }
        }
        imgContainer.addChild(img);
        self.stage.update = function () {
        }
        imgContainer.update = function () {
        }
        self.stage.addChild(imgContainer);
        if (self.imgs) {
            self.imgs.push(imgContainer);
        } else {
            self.imgs = [imgContainer];
        }
        return imgContainer;
    };
    _public.clear = function () {
        if (this.imgs) {
            for (var i = 0; i < this.imgs.length; i++) {
                this.stage.removeChild(this.imgs[i]);
            }
        }
    };
    _public.unSelect = function () {
        var imgs = this.imgs;
        if (imgs) {
            for (var i = 0; i < imgs.length; i++) {
                imgs[i].disable();
            }
        }
    };
    _public.toDataURL = function (callback) {
        var self = this;
        self.unSelect();
        window.setTimeout(function () {
            var encoder = new JPEGEncoder();
            var data = encoder.encode(self.canvas.getContext('2d').getImageData(0, 0, self.stage.width, self.stage.height), 90);
            callback.call(self, data);
        }, 1000 / self.config.fps)
    }
});



/*
 * Javascript EXIF Reader 0.1.4
 * Copyright (c) 2008 Jacob Seidelin, cupboy@gmail.com, http://blog.nihilogic.dk/
 * Licensed under the MPL License [http://www.nihilogic.dk/licenses/mpl-license.txt]
 */


var EXIF = {};

(function() {

var bDebug = false;

EXIF.Tags = {

	// version tags
	0x9000 : "ExifVersion",			// EXIF version
	0xA000 : "FlashpixVersion",		// Flashpix format version

	// colorspace tags
	0xA001 : "ColorSpace",			// Color space information tag

	// image configuration
	0xA002 : "PixelXDimension",		// Valid width of meaningful image
	0xA003 : "PixelYDimension",		// Valid height of meaningful image
	0x9101 : "ComponentsConfiguration",	// Information about channels
	0x9102 : "CompressedBitsPerPixel",	// Compressed bits per pixel

	// user information
	0x927C : "MakerNote",			// Any desired information written by the manufacturer
	0x9286 : "UserComment",			// Comments by user

	// related file
	0xA004 : "RelatedSoundFile",		// Name of related sound file

	// date and time
	0x9003 : "DateTimeOriginal",		// Date and time when the original image was generated
	0x9004 : "DateTimeDigitized",		// Date and time when the image was stored digitally
	0x9290 : "SubsecTime",			// Fractions of seconds for DateTime
	0x9291 : "SubsecTimeOriginal",		// Fractions of seconds for DateTimeOriginal
	0x9292 : "SubsecTimeDigitized",		// Fractions of seconds for DateTimeDigitized

	// picture-taking conditions
	0x829A : "ExposureTime",		// Exposure time (in seconds)
	0x829D : "FNumber",			// F number
	0x8822 : "ExposureProgram",		// Exposure program
	0x8824 : "SpectralSensitivity",		// Spectral sensitivity
	0x8827 : "ISOSpeedRatings",		// ISO speed rating
	0x8828 : "OECF",			// Optoelectric conversion factor
	0x9201 : "ShutterSpeedValue",		// Shutter speed
	0x9202 : "ApertureValue",		// Lens aperture
	0x9203 : "BrightnessValue",		// Value of brightness
	0x9204 : "ExposureBias",		// Exposure bias
	0x9205 : "MaxApertureValue",		// Smallest F number of lens
	0x9206 : "SubjectDistance",		// Distance to subject in meters
	0x9207 : "MeteringMode", 		// Metering mode
	0x9208 : "LightSource",			// Kind of light source
	0x9209 : "Flash",			// Flash status
	0x9214 : "SubjectArea",			// Location and area of main subject
	0x920A : "FocalLength",			// Focal length of the lens in mm
	0xA20B : "FlashEnergy",			// Strobe energy in BCPS
	0xA20C : "SpatialFrequencyResponse",	// 
	0xA20E : "FocalPlaneXResolution", 	// Number of pixels in width direction per FocalPlaneResolutionUnit
	0xA20F : "FocalPlaneYResolution", 	// Number of pixels in height direction per FocalPlaneResolutionUnit
	0xA210 : "FocalPlaneResolutionUnit", 	// Unit for measuring FocalPlaneXResolution and FocalPlaneYResolution
	0xA214 : "SubjectLocation",		// Location of subject in image
	0xA215 : "ExposureIndex",		// Exposure index selected on camera
	0xA217 : "SensingMethod", 		// Image sensor type
	0xA300 : "FileSource", 			// Image source (3 == DSC)
	0xA301 : "SceneType", 			// Scene type (1 == directly photographed)
	0xA302 : "CFAPattern",			// Color filter array geometric pattern
	0xA401 : "CustomRendered",		// Special processing
	0xA402 : "ExposureMode",		// Exposure mode
	0xA403 : "WhiteBalance",		// 1 = auto white balance, 2 = manual
	0xA404 : "DigitalZoomRation",		// Digital zoom ratio
	0xA405 : "FocalLengthIn35mmFilm",	// Equivalent foacl length assuming 35mm film camera (in mm)
	0xA406 : "SceneCaptureType",		// Type of scene
	0xA407 : "GainControl",			// Degree of overall image gain adjustment
	0xA408 : "Contrast",			// Direction of contrast processing applied by camera
	0xA409 : "Saturation", 			// Direction of saturation processing applied by camera
	0xA40A : "Sharpness",			// Direction of sharpness processing applied by camera
	0xA40B : "DeviceSettingDescription",	// 
	0xA40C : "SubjectDistanceRange",	// Distance to subject

	// other tags
	0xA005 : "InteroperabilityIFDPointer",
	0xA420 : "ImageUniqueID"		// Identifier assigned uniquely to each image
};

EXIF.TiffTags = {
	0x0100 : "ImageWidth",
	0x0101 : "ImageHeight",
	0x8769 : "ExifIFDPointer",
	0x8825 : "GPSInfoIFDPointer",
	0xA005 : "InteroperabilityIFDPointer",
	0x0102 : "BitsPerSample",
	0x0103 : "Compression",
	0x0106 : "PhotometricInterpretation",
	0x0112 : "Orientation",
	0x0115 : "SamplesPerPixel",
	0x011C : "PlanarConfiguration",
	0x0212 : "YCbCrSubSampling",
	0x0213 : "YCbCrPositioning",
	0x011A : "XResolution",
	0x011B : "YResolution",
	0x0128 : "ResolutionUnit",
	0x0111 : "StripOffsets",
	0x0116 : "RowsPerStrip",
	0x0117 : "StripByteCounts",
	0x0201 : "JPEGInterchangeFormat",
	0x0202 : "JPEGInterchangeFormatLength",
	0x012D : "TransferFunction",
	0x013E : "WhitePoint",
	0x013F : "PrimaryChromaticities",
	0x0211 : "YCbCrCoefficients",
	0x0214 : "ReferenceBlackWhite",
	0x0132 : "DateTime",
	0x010E : "ImageDescription",
	0x010F : "Make",
	0x0110 : "Model",
	0x0131 : "Software",
	0x013B : "Artist",
	0x8298 : "Copyright"
}

EXIF.GPSTags = {
	0x0000 : "GPSVersionID",
	0x0001 : "GPSLatitudeRef",
	0x0002 : "GPSLatitude",
	0x0003 : "GPSLongitudeRef",
	0x0004 : "GPSLongitude",
	0x0005 : "GPSAltitudeRef",
	0x0006 : "GPSAltitude",
	0x0007 : "GPSTimeStamp",
	0x0008 : "GPSSatellites",
	0x0009 : "GPSStatus",
	0x000A : "GPSMeasureMode",
	0x000B : "GPSDOP",
	0x000C : "GPSSpeedRef",
	0x000D : "GPSSpeed",
	0x000E : "GPSTrackRef",
	0x000F : "GPSTrack",
	0x0010 : "GPSImgDirectionRef",
	0x0011 : "GPSImgDirection",
	0x0012 : "GPSMapDatum",
	0x0013 : "GPSDestLatitudeRef",
	0x0014 : "GPSDestLatitude",
	0x0015 : "GPSDestLongitudeRef",
	0x0016 : "GPSDestLongitude",
	0x0017 : "GPSDestBearingRef",
	0x0018 : "GPSDestBearing",
	0x0019 : "GPSDestDistanceRef",
	0x001A : "GPSDestDistance",
	0x001B : "GPSProcessingMethod",
	0x001C : "GPSAreaInformation",
	0x001D : "GPSDateStamp",
	0x001E : "GPSDifferential"
}

EXIF.StringValues = {
	ExposureProgram : {
		0 : "Not defined",
		1 : "Manual",
		2 : "Normal program",
		3 : "Aperture priority",
		4 : "Shutter priority",
		5 : "Creative program",
		6 : "Action program",
		7 : "Portrait mode",
		8 : "Landscape mode"
	},
	MeteringMode : {
		0 : "Unknown",
		1 : "Average",
		2 : "CenterWeightedAverage",
		3 : "Spot",
		4 : "MultiSpot",
		5 : "Pattern",
		6 : "Partial",
		255 : "Other"
	},
	LightSource : {
		0 : "Unknown",
		1 : "Daylight",
		2 : "Fluorescent",
		3 : "Tungsten (incandescent light)",
		4 : "Flash",
		9 : "Fine weather",
		10 : "Cloudy weather",
		11 : "Shade",
		12 : "Daylight fluorescent (D 5700 - 7100K)",
		13 : "Day white fluorescent (N 4600 - 5400K)",
		14 : "Cool white fluorescent (W 3900 - 4500K)",
		15 : "White fluorescent (WW 3200 - 3700K)",
		17 : "Standard light A",
		18 : "Standard light B",
		19 : "Standard light C",
		20 : "D55",
		21 : "D65",
		22 : "D75",
		23 : "D50",
		24 : "ISO studio tungsten",
		255 : "Other"
	},
	Flash : {
		0x0000 : "Flash did not fire",
		0x0001 : "Flash fired",
		0x0005 : "Strobe return light not detected",
		0x0007 : "Strobe return light detected",
		0x0009 : "Flash fired, compulsory flash mode",
		0x000D : "Flash fired, compulsory flash mode, return light not detected",
		0x000F : "Flash fired, compulsory flash mode, return light detected",
		0x0010 : "Flash did not fire, compulsory flash mode",
		0x0018 : "Flash did not fire, auto mode",
		0x0019 : "Flash fired, auto mode",
		0x001D : "Flash fired, auto mode, return light not detected",
		0x001F : "Flash fired, auto mode, return light detected",
		0x0020 : "No flash function",
		0x0041 : "Flash fired, red-eye reduction mode",
		0x0045 : "Flash fired, red-eye reduction mode, return light not detected",
		0x0047 : "Flash fired, red-eye reduction mode, return light detected",
		0x0049 : "Flash fired, compulsory flash mode, red-eye reduction mode",
		0x004D : "Flash fired, compulsory flash mode, red-eye reduction mode, return light not detected",
		0x004F : "Flash fired, compulsory flash mode, red-eye reduction mode, return light detected",
		0x0059 : "Flash fired, auto mode, red-eye reduction mode",
		0x005D : "Flash fired, auto mode, return light not detected, red-eye reduction mode",
		0x005F : "Flash fired, auto mode, return light detected, red-eye reduction mode"
	},
	SensingMethod : {
		1 : "Not defined",
		2 : "One-chip color area sensor",
		3 : "Two-chip color area sensor",
		4 : "Three-chip color area sensor",
		5 : "Color sequential area sensor",
		7 : "Trilinear sensor",
		8 : "Color sequential linear sensor"
	},
	SceneCaptureType : {
		0 : "Standard",
		1 : "Landscape",
		2 : "Portrait",
		3 : "Night scene"
	},
	SceneType : {
		1 : "Directly photographed"
	},
	CustomRendered : {
		0 : "Normal process",
		1 : "Custom process"
	},
	WhiteBalance : {
		0 : "Auto white balance",
		1 : "Manual white balance"
	},
	GainControl : {
		0 : "None",
		1 : "Low gain up",
		2 : "High gain up",
		3 : "Low gain down",
		4 : "High gain down"
	},
	Contrast : {
		0 : "Normal",
		1 : "Soft",
		2 : "Hard"
	},
	Saturation : {
		0 : "Normal",
		1 : "Low saturation",
		2 : "High saturation"
	},
	Sharpness : {
		0 : "Normal",
		1 : "Soft",
		2 : "Hard"
	},
	SubjectDistanceRange : {
		0 : "Unknown",
		1 : "Macro",
		2 : "Close view",
		3 : "Distant view"
	},
	FileSource : {
		3 : "DSC"
	},

	Components : {
		0 : "",
		1 : "Y",
		2 : "Cb",
		3 : "Cr",
		4 : "R",
		5 : "G",
		6 : "B"
	}
}

function addEvent(oElement, strEvent, fncHandler) 
{
	if (oElement.addEventListener) { 
		oElement.addEventListener(strEvent, fncHandler, false); 
	} else if (oElement.attachEvent) { 
		oElement.attachEvent("on" + strEvent, fncHandler); 
	}
}


function imageHasData(oImg) 
{
	return !!(oImg.exifdata);
}

function getImageData(oImg, fncCallback) 
{
	BinaryAjax(
		oImg.src,
		function(oHTTP) {
			var oEXIF = findEXIFinJPEG(oHTTP.binaryResponse);
			oImg.exifdata = oEXIF || {};
			if (fncCallback) fncCallback();
		}
	)
}

function findEXIFinJPEG(oFile) {
	var aMarkers = [];

	if (oFile.getByteAt(0) != 0xFF || oFile.getByteAt(1) != 0xD8) {
		return false; // not a valid jpeg
	}

	var iOffset = 2;
	var iLength = oFile.getLength();
	while (iOffset < iLength) {
		if (oFile.getByteAt(iOffset) != 0xFF) {
			if (bDebug) console.log("Not a valid marker at offset " + iOffset + ", found: " + oFile.getByteAt(iOffset));
			return false; // not a valid marker, something is wrong
		}

		var iMarker = oFile.getByteAt(iOffset+1);

		// we could implement handling for other markers here, 
		// but we're only looking for 0xFFE1 for EXIF data

		if (iMarker == 22400) {
			if (bDebug) console.log("Found 0xFFE1 marker");
			return readEXIFData(oFile, iOffset + 4, oFile.getShortAt(iOffset+2, true)-2);
			iOffset += 2 + oFile.getShortAt(iOffset+2, true);

		} else if (iMarker == 225) {
			// 0xE1 = Application-specific 1 (for EXIF)
			if (bDebug) console.log("Found 0xFFE1 marker");
			return readEXIFData(oFile, iOffset + 4, oFile.getShortAt(iOffset+2, true)-2);

		} else {
			iOffset += 2 + oFile.getShortAt(iOffset+2, true);
		}

	}

}


function readTags(oFile, iTIFFStart, iDirStart, oStrings, bBigEnd) 
{
	var iEntries = oFile.getShortAt(iDirStart, bBigEnd);
	var oTags = {};
	for (var i=0;i<iEntries;i++) {
		var iEntryOffset = iDirStart + i*12 + 2;
		var strTag = oStrings[oFile.getShortAt(iEntryOffset, bBigEnd)];
		if (!strTag && bDebug) console.log("Unknown tag: " + oFile.getShortAt(iEntryOffset, bBigEnd));
		oTags[strTag] = readTagValue(oFile, iEntryOffset, iTIFFStart, iDirStart, bBigEnd);
	}
	return oTags;
}


function readTagValue(oFile, iEntryOffset, iTIFFStart, iDirStart, bBigEnd)
{
	var iType = oFile.getShortAt(iEntryOffset+2, bBigEnd);
	var iNumValues = oFile.getLongAt(iEntryOffset+4, bBigEnd);
	var iValueOffset = oFile.getLongAt(iEntryOffset+8, bBigEnd) + iTIFFStart;

	switch (iType) {
		case 1: // byte, 8-bit unsigned int
		case 7: // undefined, 8-bit byte, value depending on field
			if (iNumValues == 1) {
				return oFile.getByteAt(iEntryOffset + 8, bBigEnd);
			} else {
				var iValOffset = iNumValues > 4 ? iValueOffset : (iEntryOffset + 8);
				var aVals = [];
				for (var n=0;n<iNumValues;n++) {
					aVals[n] = oFile.getByteAt(iValOffset + n);
				}
				return aVals;
			}
			break;

		case 2: // ascii, 8-bit byte
			var iStringOffset = iNumValues > 4 ? iValueOffset : (iEntryOffset + 8);
			return oFile.getStringAt(iStringOffset, iNumValues-1);
			break;

		case 3: // short, 16 bit int
			if (iNumValues == 1) {
				return oFile.getShortAt(iEntryOffset + 8, bBigEnd);
			} else {
				var iValOffset = iNumValues > 2 ? iValueOffset : (iEntryOffset + 8);
				var aVals = [];
				for (var n=0;n<iNumValues;n++) {
					aVals[n] = oFile.getShortAt(iValOffset + 2*n, bBigEnd);
				}
				return aVals;
			}
			break;

		case 4: // long, 32 bit int
			if (iNumValues == 1) {
				return oFile.getLongAt(iEntryOffset + 8, bBigEnd);
			} else {
				var aVals = [];
				for (var n=0;n<iNumValues;n++) {
					aVals[n] = oFile.getLongAt(iValueOffset + 4*n, bBigEnd);
				}
				return aVals;
			}
			break;
		case 5:	// rational = two long values, first is numerator, second is denominator
			if (iNumValues == 1) {
				return oFile.getLongAt(iValueOffset, bBigEnd) / oFile.getLongAt(iValueOffset+4, bBigEnd);
			} else {
				var aVals = [];
				for (var n=0;n<iNumValues;n++) {
					aVals[n] = oFile.getLongAt(iValueOffset + 8*n, bBigEnd) / oFile.getLongAt(iValueOffset+4 + 8*n, bBigEnd);
				}
				return aVals;
			}
			break;
		case 9: // slong, 32 bit signed int
			if (iNumValues == 1) {
				return oFile.getSLongAt(iEntryOffset + 8, bBigEnd);
			} else {
				var aVals = [];
				for (var n=0;n<iNumValues;n++) {
					aVals[n] = oFile.getSLongAt(iValueOffset + 4*n, bBigEnd);
				}
				return aVals;
			}
			break;
		case 10: // signed rational, two slongs, first is numerator, second is denominator
			if (iNumValues == 1) {
				return oFile.getSLongAt(iValueOffset, bBigEnd) / oFile.getSLongAt(iValueOffset+4, bBigEnd);
			} else {
				var aVals = [];
				for (var n=0;n<iNumValues;n++) {
					aVals[n] = oFile.getSLongAt(iValueOffset + 8*n, bBigEnd) / oFile.getSLongAt(iValueOffset+4 + 8*n, bBigEnd);
				}
				return aVals;
			}
			break;
	}
}


function readEXIFData(oFile, iStart, iLength) 
{
	if (oFile.getStringAt(iStart, 4) != "Exif") {
		if (bDebug) console.log("Not valid EXIF data! " + oFile.getStringAt(iStart, 4));
		return false;
	}

	var bBigEnd;

	var iTIFFOffset = iStart + 6;

	// test for TIFF validity and endianness
	if (oFile.getShortAt(iTIFFOffset) == 0x4949) {
		bBigEnd = false;
	} else if (oFile.getShortAt(iTIFFOffset) == 0x4D4D) {
		bBigEnd = true;
	} else {
		if (bDebug) console.log("Not valid TIFF data! (no 0x4949 or 0x4D4D)");
		return false;
	}

	if (oFile.getShortAt(iTIFFOffset+2, bBigEnd) != 0x002A) {
		if (bDebug) console.log("Not valid TIFF data! (no 0x002A)");
		return false;
	}

	if (oFile.getLongAt(iTIFFOffset+4, bBigEnd) != 0x00000008) {
		if (bDebug) console.log("Not valid TIFF data! (First offset not 8)", oFile.getShortAt(iTIFFOffset+4, bBigEnd));
		return false;
	}

	var oTags = readTags(oFile, iTIFFOffset, iTIFFOffset+8, EXIF.TiffTags, bBigEnd);

	if (oTags.ExifIFDPointer) {
		var oEXIFTags = readTags(oFile, iTIFFOffset, iTIFFOffset + oTags.ExifIFDPointer, EXIF.Tags, bBigEnd);
		for (var strTag in oEXIFTags) {
			switch (strTag) {
				case "LightSource" :
				case "Flash" :
				case "MeteringMode" :
				case "ExposureProgram" :
				case "SensingMethod" :
				case "SceneCaptureType" :
				case "SceneType" :
				case "CustomRendered" :
				case "WhiteBalance" : 
				case "GainControl" : 
				case "Contrast" :
				case "Saturation" :
				case "Sharpness" : 
				case "SubjectDistanceRange" :
				case "FileSource" :
					oEXIFTags[strTag] = EXIF.StringValues[strTag][oEXIFTags[strTag]];
					break;
	
				case "ExifVersion" :
				case "FlashpixVersion" :
					oEXIFTags[strTag] = String.fromCharCode(oEXIFTags[strTag][0], oEXIFTags[strTag][1], oEXIFTags[strTag][2], oEXIFTags[strTag][3]);
					break;
	
				case "ComponentsConfiguration" : 
					oEXIFTags[strTag] = 
						EXIF.StringValues.Components[oEXIFTags[strTag][0]]
						+ EXIF.StringValues.Components[oEXIFTags[strTag][1]]
						+ EXIF.StringValues.Components[oEXIFTags[strTag][2]]
						+ EXIF.StringValues.Components[oEXIFTags[strTag][3]];
					break;
			}
			oTags[strTag] = oEXIFTags[strTag];
		}
	}

	if (oTags.GPSInfoIFDPointer) {
		var oGPSTags = readTags(oFile, iTIFFOffset, iTIFFOffset + oTags.GPSInfoIFDPointer, EXIF.GPSTags, bBigEnd);
		for (var strTag in oGPSTags) {
			switch (strTag) {
				case "GPSVersionID" : 
					oGPSTags[strTag] = oGPSTags[strTag][0] 
						+ "." + oGPSTags[strTag][1] 
						+ "." + oGPSTags[strTag][2] 
						+ "." + oGPSTags[strTag][3];
					break;
			}
			oTags[strTag] = oGPSTags[strTag];
		}
	}

	return oTags;
}


EXIF.getData = function(oImg, fncCallback) 
{
	if (!oImg.complete) return false;
	if (!imageHasData(oImg)) {
		getImageData(oImg, fncCallback);
	} else {
		if (fncCallback) fncCallback();
	}
	return true;
}

EXIF.getTag = function(oImg, strTag) 
{
	if (!imageHasData(oImg)) return;
	return oImg.exifdata[strTag];
}

EXIF.getAllTags = function(oImg) 
{
	if (!imageHasData(oImg)) return {};
	var oData = oImg.exifdata;
	var oAllTags = {};
	for (var a in oData) {
		if (oData.hasOwnProperty(a)) {
			oAllTags[a] = oData[a];
		}
	}
	return oAllTags;
}


EXIF.pretty = function(oImg) 
{
	if (!imageHasData(oImg)) return "";
	var oData = oImg.exifdata;
	var strPretty = "";
	for (var a in oData) {
		if (oData.hasOwnProperty(a)) {
			if (typeof oData[a] == "object") {
				strPretty += a + " : [" + oData[a].length + " values]\r\n";
			} else {
				strPretty += a + " : " + oData[a] + "\r\n";
			}
		}
	}
	return strPretty;
}

EXIF.readFromBinaryFile = function(oFile) {
	return findEXIFinJPEG(oFile);
}

function loadAllImages() 
{
	var aImages = document.getElementsByTagName("img");
	for (var i=0;i<aImages.length;i++) {
		if (aImages[i].getAttribute("exif") == "true") {
			if (!aImages[i].complete) {
				addEvent(aImages[i], "load", 
					function() {
						EXIF.getData(this);
					}
				); 
			} else {
				EXIF.getData(aImages[i]);
			}
		}
	}
}

addEvent(window, "load", loadAllImages); 

})();




/*
 * Binary Ajax 0.1.10
 * Copyright (c) 2008 Jacob Seidelin, cupboy@gmail.com, http://blog.nihilogic.dk/
 * Licensed under the MPL License [http://www.nihilogic.dk/licenses/mpl-license.txt]
 */


var BinaryFile = function(strData, iDataOffset, iDataLength) {
	var data = strData;
	var dataOffset = iDataOffset || 0;
	var dataLength = 0;

	this.getRawData = function() {
		return data;
	}

	if (typeof strData == "string") {
		dataLength = iDataLength || data.length;

		this.getByteAt = function(iOffset) {
			return data.charCodeAt(iOffset + dataOffset) & 0xFF;
		}
		
		this.getBytesAt = function(iOffset, iLength) {
			var aBytes = [];
			
			for (var i = 0; i < iLength; i++) {
				aBytes[i] = data.charCodeAt((iOffset + i) + dataOffset) & 0xFF
			};
			
			return aBytes;
		}
	} else if (typeof strData == "unknown") {
		dataLength = iDataLength || IEBinary_getLength(data);

		this.getByteAt = function(iOffset) {
			return IEBinary_getByteAt(data, iOffset + dataOffset);
		}

		this.getBytesAt = function(iOffset, iLength) {
			return new VBArray(IEBinary_getBytesAt(data, iOffset + dataOffset, iLength)).toArray();
		}
	}

	this.getLength = function() {
		return dataLength;
	}

	this.getSByteAt = function(iOffset) {
		var iByte = this.getByteAt(iOffset);
		if (iByte > 127)
			return iByte - 256;
		else
			return iByte;
	}

	this.getShortAt = function(iOffset, bBigEndian) {
		var iShort = bBigEndian ? 
			(this.getByteAt(iOffset) << 8) + this.getByteAt(iOffset + 1)
			: (this.getByteAt(iOffset + 1) << 8) + this.getByteAt(iOffset)
		if (iShort < 0) iShort += 65536;
		return iShort;
	}
	this.getSShortAt = function(iOffset, bBigEndian) {
		var iUShort = this.getShortAt(iOffset, bBigEndian);
		if (iUShort > 32767)
			return iUShort - 65536;
		else
			return iUShort;
	}
	this.getLongAt = function(iOffset, bBigEndian) {
		var iByte1 = this.getByteAt(iOffset),
			iByte2 = this.getByteAt(iOffset + 1),
			iByte3 = this.getByteAt(iOffset + 2),
			iByte4 = this.getByteAt(iOffset + 3);

		var iLong = bBigEndian ? 
			(((((iByte1 << 8) + iByte2) << 8) + iByte3) << 8) + iByte4
			: (((((iByte4 << 8) + iByte3) << 8) + iByte2) << 8) + iByte1;
		if (iLong < 0) iLong += 4294967296;
		return iLong;
	}
	this.getSLongAt = function(iOffset, bBigEndian) {
		var iULong = this.getLongAt(iOffset, bBigEndian);
		if (iULong > 2147483647)
			return iULong - 4294967296;
		else
			return iULong;
	}

	this.getStringAt = function(iOffset, iLength) {
		var aStr = [];
		
		var aBytes = this.getBytesAt(iOffset, iLength);
		for (var j=0; j < iLength; j++) {
			aStr[j] = String.fromCharCode(aBytes[j]);
		}
		return aStr.join("");
	}
	
	this.getCharAt = function(iOffset) {
		return String.fromCharCode(this.getByteAt(iOffset));
	}
	this.toBase64 = function() {
		return window.btoa(data);
	}
	this.fromBase64 = function(strBase64) {
		data = window.atob(strBase64);
	}
}


var BinaryAjax = (function() {

	function createRequest() {
		var oHTTP = null;
		if (window.ActiveXObject) {
			oHTTP = new ActiveXObject("Microsoft.XMLHTTP");
		} else if (window.XMLHttpRequest) {
			oHTTP = new XMLHttpRequest();
		}
		return oHTTP;
	}

	function getHead(strURL, fncCallback, fncError) {
		var oHTTP = createRequest();
		if (oHTTP) {
			if (fncCallback) {
				if (typeof(oHTTP.onload) != "undefined") {
					oHTTP.onload = function() {
						if (oHTTP.status == "200") {
							fncCallback(this);
						} else {
							if (fncError) fncError();
						}
						oHTTP = null;
					};
				} else {
					oHTTP.onreadystatechange = function() {
						if (oHTTP.readyState == 4) {
							if (oHTTP.status == "200") {
								fncCallback(this);
							} else {
								if (fncError) fncError();
							}
							oHTTP = null;
						}
					};
				}
			}
			oHTTP.open("HEAD", strURL, true);
			oHTTP.send(null);
		} else {
			if (fncError) fncError();
		}
	}

	function sendRequest(strURL, fncCallback, fncError, aRange, bAcceptRanges, iFileSize) {
		var oHTTP = createRequest();
		if (oHTTP) {

			var iDataOffset = 0;
			if (aRange && !bAcceptRanges) {
				iDataOffset = aRange[0];
			}
			var iDataLen = 0;
			if (aRange) {
				iDataLen = aRange[1]-aRange[0]+1;
			}

			if (fncCallback) {
				if (typeof(oHTTP.onload) != "undefined") {
					oHTTP.onload = function() {
						if (oHTTP.status == "200" || oHTTP.status == "206" || oHTTP.status == "0") {
							oHTTP.binaryResponse = new BinaryFile(oHTTP.responseText, iDataOffset, iDataLen);
							oHTTP.fileSize = iFileSize || oHTTP.getResponseHeader("Content-Length");
							fncCallback(oHTTP);
						} else {
							if (fncError) fncError();
						}
						oHTTP = null;
					};
				} else {
					oHTTP.onreadystatechange = function() {
						if (oHTTP.readyState == 4) {
							if (oHTTP.status == "200" || oHTTP.status == "206" || oHTTP.status == "0") {
								// IE6 craps if we try to extend the XHR object
								var oRes = {
									status : oHTTP.status,
									// IE needs responseBody, Chrome/Safari needs responseText
									binaryResponse : new BinaryFile(
										typeof oHTTP.responseBody == "unknown" ? oHTTP.responseBody : oHTTP.responseText, iDataOffset, iDataLen
									),
									fileSize : iFileSize || oHTTP.getResponseHeader("Content-Length")
								};
								fncCallback(oRes);
							} else {
								if (fncError) fncError();
							}
							oHTTP = null;
						}
					};
				}
			}
			oHTTP.open("GET", strURL, true);

			if (oHTTP.overrideMimeType) oHTTP.overrideMimeType('text/plain; charset=x-user-defined');

			if (aRange && bAcceptRanges) {
				oHTTP.setRequestHeader("Range", "bytes=" + aRange[0] + "-" + aRange[1]);
			}

			oHTTP.setRequestHeader("If-Modified-Since", "Sat, 1 Jan 1970 00:00:00 GMT");

			oHTTP.send(null);
		} else {
			if (fncError) fncError();
		}
	}

	return function(strURL, fncCallback, fncError, aRange) {

		if (aRange) {
			getHead(
				strURL, 
				function(oHTTP) {
					var iLength = parseInt(oHTTP.getResponseHeader("Content-Length"),10);
					var strAcceptRanges = oHTTP.getResponseHeader("Accept-Ranges");

					var iStart, iEnd;
					iStart = aRange[0];
					if (aRange[0] < 0) 
						iStart += iLength;
					iEnd = iStart + aRange[1] - 1;

					sendRequest(strURL, fncCallback, fncError, [iStart, iEnd], (strAcceptRanges == "bytes"), iLength);
				}
			);

		} else {
			sendRequest(strURL, fncCallback, fncError);
		}
	}

}());

/*
document.write(
	"<script type='text/vbscript'>\r\n"
	+ "Function IEBinary_getByteAt(strBinary, iOffset)\r\n"
	+ "	IEBinary_getByteAt = AscB(MidB(strBinary,iOffset+1,1))\r\n"
	+ "End Function\r\n"
	+ "Function IEBinary_getLength(strBinary)\r\n"
	+ "	IEBinary_getLength = LenB(strBinary)\r\n"
	+ "End Function\r\n"
	+ "</script>\r\n"
);
*/

document.write(
	"<script type='text/vbscript'>\r\n"
	+ "Function IEBinary_getByteAt(strBinary, iOffset)\r\n"
	+ "	IEBinary_getByteAt = AscB(MidB(strBinary, iOffset + 1, 1))\r\n"
	+ "End Function\r\n"
	+ "Function IEBinary_getBytesAt(strBinary, iOffset, iLength)\r\n"
	+ "  Dim aBytes()\r\n"
	+ "  ReDim aBytes(iLength - 1)\r\n"
	+ "  For i = 0 To iLength - 1\r\n"
	+ "   aBytes(i) = IEBinary_getByteAt(strBinary, iOffset + i)\r\n"  
	+ "  Next\r\n"
	+ "  IEBinary_getBytesAt = aBytes\r\n" 
	+ "End Function\r\n"
	+ "Function IEBinary_getLength(strBinary)\r\n"
	+ "	IEBinary_getLength = LenB(strBinary)\r\n"
	+ "End Function\r\n"
	+ "</script>\r\n"
);



/*
  Copyright (c) 2008, Adobe Systems Incorporated
  All rights reserved.

  Redistribution and use in source and binary forms, with or without 
  modification, are permitted provided that the following conditions are
  met:

  * Redistributions of source code must retain the above copyright notice, 
    this list of conditions and the following disclaimer.
  
  * Redistributions in binary form must reproduce the above copyright
    notice, this list of conditions and the following disclaimer in the 
    documentation and/or other materials provided with the distribution.
  
  * Neither the name of Adobe Systems Incorporated nor the names of its 
    contributors may be used to endorse or promote products derived from 
    this software without specific prior written permission.

  THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS
  IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO,
  THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR
  PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR 
  CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
  PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
  PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
  SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
/*
JPEG encoder ported to JavaScript and optimized by Andreas Ritter, www.bytestrom.eu, 11/2009

Basic GUI blocking jpeg encoder
*/

function JPEGEncoder(quality) {
  var self = this;
	var fround = Math.round;
	var ffloor = Math.floor;
	var YTable = new Array(64);
	var UVTable = new Array(64);
	var fdtbl_Y = new Array(64);
	var fdtbl_UV = new Array(64);
	var YDC_HT;
	var UVDC_HT;
	var YAC_HT;
	var UVAC_HT;
	
	var bitcode = new Array(65535);
	var category = new Array(65535);
	var outputfDCTQuant = new Array(64);
	var DU = new Array(64);
	var byteout = [];
	var bytenew = 0;
	var bytepos = 7;
	
	var YDU = new Array(64);
	var UDU = new Array(64);
	var VDU = new Array(64);
	var clt = new Array(256);
	var RGB_YUV_TABLE = new Array(2048);
	var currentQuality;
	
	var ZigZag = [
			 0, 1, 5, 6,14,15,27,28,
			 2, 4, 7,13,16,26,29,42,
			 3, 8,12,17,25,30,41,43,
			 9,11,18,24,31,40,44,53,
			10,19,23,32,39,45,52,54,
			20,22,33,38,46,51,55,60,
			21,34,37,47,50,56,59,61,
			35,36,48,49,57,58,62,63
		];
	
	var std_dc_luminance_nrcodes = [0,0,1,5,1,1,1,1,1,1,0,0,0,0,0,0,0];
	var std_dc_luminance_values = [0,1,2,3,4,5,6,7,8,9,10,11];
	var std_ac_luminance_nrcodes = [0,0,2,1,3,3,2,4,3,5,5,4,4,0,0,1,0x7d];
	var std_ac_luminance_values = [
			0x01,0x02,0x03,0x00,0x04,0x11,0x05,0x12,
			0x21,0x31,0x41,0x06,0x13,0x51,0x61,0x07,
			0x22,0x71,0x14,0x32,0x81,0x91,0xa1,0x08,
			0x23,0x42,0xb1,0xc1,0x15,0x52,0xd1,0xf0,
			0x24,0x33,0x62,0x72,0x82,0x09,0x0a,0x16,
			0x17,0x18,0x19,0x1a,0x25,0x26,0x27,0x28,
			0x29,0x2a,0x34,0x35,0x36,0x37,0x38,0x39,
			0x3a,0x43,0x44,0x45,0x46,0x47,0x48,0x49,
			0x4a,0x53,0x54,0x55,0x56,0x57,0x58,0x59,
			0x5a,0x63,0x64,0x65,0x66,0x67,0x68,0x69,
			0x6a,0x73,0x74,0x75,0x76,0x77,0x78,0x79,
			0x7a,0x83,0x84,0x85,0x86,0x87,0x88,0x89,
			0x8a,0x92,0x93,0x94,0x95,0x96,0x97,0x98,
			0x99,0x9a,0xa2,0xa3,0xa4,0xa5,0xa6,0xa7,
			0xa8,0xa9,0xaa,0xb2,0xb3,0xb4,0xb5,0xb6,
			0xb7,0xb8,0xb9,0xba,0xc2,0xc3,0xc4,0xc5,
			0xc6,0xc7,0xc8,0xc9,0xca,0xd2,0xd3,0xd4,
			0xd5,0xd6,0xd7,0xd8,0xd9,0xda,0xe1,0xe2,
			0xe3,0xe4,0xe5,0xe6,0xe7,0xe8,0xe9,0xea,
			0xf1,0xf2,0xf3,0xf4,0xf5,0xf6,0xf7,0xf8,
			0xf9,0xfa
		];
	
	var std_dc_chrominance_nrcodes = [0,0,3,1,1,1,1,1,1,1,1,1,0,0,0,0,0];
	var std_dc_chrominance_values = [0,1,2,3,4,5,6,7,8,9,10,11];
	var std_ac_chrominance_nrcodes = [0,0,2,1,2,4,4,3,4,7,5,4,4,0,1,2,0x77];
	var std_ac_chrominance_values = [
			0x00,0x01,0x02,0x03,0x11,0x04,0x05,0x21,
			0x31,0x06,0x12,0x41,0x51,0x07,0x61,0x71,
			0x13,0x22,0x32,0x81,0x08,0x14,0x42,0x91,
			0xa1,0xb1,0xc1,0x09,0x23,0x33,0x52,0xf0,
			0x15,0x62,0x72,0xd1,0x0a,0x16,0x24,0x34,
			0xe1,0x25,0xf1,0x17,0x18,0x19,0x1a,0x26,
			0x27,0x28,0x29,0x2a,0x35,0x36,0x37,0x38,
			0x39,0x3a,0x43,0x44,0x45,0x46,0x47,0x48,
			0x49,0x4a,0x53,0x54,0x55,0x56,0x57,0x58,
			0x59,0x5a,0x63,0x64,0x65,0x66,0x67,0x68,
			0x69,0x6a,0x73,0x74,0x75,0x76,0x77,0x78,
			0x79,0x7a,0x82,0x83,0x84,0x85,0x86,0x87,
			0x88,0x89,0x8a,0x92,0x93,0x94,0x95,0x96,
			0x97,0x98,0x99,0x9a,0xa2,0xa3,0xa4,0xa5,
			0xa6,0xa7,0xa8,0xa9,0xaa,0xb2,0xb3,0xb4,
			0xb5,0xb6,0xb7,0xb8,0xb9,0xba,0xc2,0xc3,
			0xc4,0xc5,0xc6,0xc7,0xc8,0xc9,0xca,0xd2,
			0xd3,0xd4,0xd5,0xd6,0xd7,0xd8,0xd9,0xda,
			0xe2,0xe3,0xe4,0xe5,0xe6,0xe7,0xe8,0xe9,
			0xea,0xf2,0xf3,0xf4,0xf5,0xf6,0xf7,0xf8,
			0xf9,0xfa
		];
	
	function initQuantTables(sf){
			var YQT = [
				16, 11, 10, 16, 24, 40, 51, 61,
				12, 12, 14, 19, 26, 58, 60, 55,
				14, 13, 16, 24, 40, 57, 69, 56,
				14, 17, 22, 29, 51, 87, 80, 62,
				18, 22, 37, 56, 68,109,103, 77,
				24, 35, 55, 64, 81,104,113, 92,
				49, 64, 78, 87,103,121,120,101,
				72, 92, 95, 98,112,100,103, 99
			];
			
			for (var i = 0; i < 64; i++) {
				var t = ffloor((YQT[i]*sf+50)/100);
				if (t < 1) {
					t = 1;
				} else if (t > 255) {
					t = 255;
				}
				YTable[ZigZag[i]] = t;
			}
			var UVQT = [
				17, 18, 24, 47, 99, 99, 99, 99,
				18, 21, 26, 66, 99, 99, 99, 99,
				24, 26, 56, 99, 99, 99, 99, 99,
				47, 66, 99, 99, 99, 99, 99, 99,
				99, 99, 99, 99, 99, 99, 99, 99,
				99, 99, 99, 99, 99, 99, 99, 99,
				99, 99, 99, 99, 99, 99, 99, 99,
				99, 99, 99, 99, 99, 99, 99, 99
			];
			for (var j = 0; j < 64; j++) {
				var u = ffloor((UVQT[j]*sf+50)/100);
				if (u < 1) {
					u = 1;
				} else if (u > 255) {
					u = 255;
				}
				UVTable[ZigZag[j]] = u;
			}
			var aasf = [
				1.0, 1.387039845, 1.306562965, 1.175875602,
				1.0, 0.785694958, 0.541196100, 0.275899379
			];
			var k = 0;
			for (var row = 0; row < 8; row++)
			{
				for (var col = 0; col < 8; col++)
				{
					fdtbl_Y[k]  = (1.0 / (YTable [ZigZag[k]] * aasf[row] * aasf[col] * 8.0));
					fdtbl_UV[k] = (1.0 / (UVTable[ZigZag[k]] * aasf[row] * aasf[col] * 8.0));
					k++;
				}
			}
		}
		
		function computeHuffmanTbl(nrcodes, std_table){
			var codevalue = 0;
			var pos_in_table = 0;
			var HT = new Array();
			for (var k = 1; k <= 16; k++) {
				for (var j = 1; j <= nrcodes[k]; j++) {
					HT[std_table[pos_in_table]] = [];
					HT[std_table[pos_in_table]][0] = codevalue;
					HT[std_table[pos_in_table]][1] = k;
					pos_in_table++;
					codevalue++;
				}
				codevalue*=2;
			}
			return HT;
		}
		
		function initHuffmanTbl()
		{
			YDC_HT = computeHuffmanTbl(std_dc_luminance_nrcodes,std_dc_luminance_values);
			UVDC_HT = computeHuffmanTbl(std_dc_chrominance_nrcodes,std_dc_chrominance_values);
			YAC_HT = computeHuffmanTbl(std_ac_luminance_nrcodes,std_ac_luminance_values);
			UVAC_HT = computeHuffmanTbl(std_ac_chrominance_nrcodes,std_ac_chrominance_values);
		}
	
		function initCategoryNumber()
		{
			var nrlower = 1;
			var nrupper = 2;
			for (var cat = 1; cat <= 15; cat++) {
				//Positive numbers
				for (var nr = nrlower; nr<nrupper; nr++) {
					category[32767+nr] = cat;
					bitcode[32767+nr] = [];
					bitcode[32767+nr][1] = cat;
					bitcode[32767+nr][0] = nr;
				}
				//Negative numbers
				for (var nrneg =-(nrupper-1); nrneg<=-nrlower; nrneg++) {
					category[32767+nrneg] = cat;
					bitcode[32767+nrneg] = [];
					bitcode[32767+nrneg][1] = cat;
					bitcode[32767+nrneg][0] = nrupper-1+nrneg;
				}
				nrlower <<= 1;
				nrupper <<= 1;
			}
		}
		
		function initRGBYUVTable() {
			for(var i = 0; i < 256;i++) {
				RGB_YUV_TABLE[i]      		=  19595 * i;
				RGB_YUV_TABLE[(i+ 256)>>0] 	=  38470 * i;
				RGB_YUV_TABLE[(i+ 512)>>0] 	=   7471 * i + 0x8000;
				RGB_YUV_TABLE[(i+ 768)>>0] 	= -11059 * i;
				RGB_YUV_TABLE[(i+1024)>>0] 	= -21709 * i;
				RGB_YUV_TABLE[(i+1280)>>0] 	=  32768 * i + 0x807FFF;
				RGB_YUV_TABLE[(i+1536)>>0] 	= -27439 * i;
				RGB_YUV_TABLE[(i+1792)>>0] 	= - 5329 * i;
			}
		}
		
		// IO functions
		function writeBits(bs)
		{
			var value = bs[0];
			var posval = bs[1]-1;
			while ( posval >= 0 ) {
				if (value & (1 << posval) ) {
					bytenew |= (1 << bytepos);
				}
				posval--;
				bytepos--;
				if (bytepos < 0) {
					if (bytenew == 0xFF) {
						writeByte(0xFF);
						writeByte(0);
					}
					else {
						writeByte(bytenew);
					}
					bytepos=7;
					bytenew=0;
				}
			}
		}
	
		function writeByte(value)
		{
			byteout.push(clt[value]); // write char directly instead of converting later
		}
	
		function writeWord(value)
		{
			writeByte((value>>8)&0xFF);
			writeByte((value   )&0xFF);
		}
		
		// DCT & quantization core
		function fDCTQuant(data, fdtbl)
		{
			var d0, d1, d2, d3, d4, d5, d6, d7;
			/* Pass 1: process rows. */
			var dataOff=0;
			var i;
			const I8 = 8;
			const I64 = 64;
			for (i=0; i<I8; ++i)
			{
				d0 = data[dataOff];
				d1 = data[dataOff+1];
				d2 = data[dataOff+2];
				d3 = data[dataOff+3];
				d4 = data[dataOff+4];
				d5 = data[dataOff+5];
				d6 = data[dataOff+6];
				d7 = data[dataOff+7];
				
				var tmp0 = d0 + d7;
				var tmp7 = d0 - d7;
				var tmp1 = d1 + d6;
				var tmp6 = d1 - d6;
				var tmp2 = d2 + d5;
				var tmp5 = d2 - d5;
				var tmp3 = d3 + d4;
				var tmp4 = d3 - d4;
	
				/* Even part */
				var tmp10 = tmp0 + tmp3;	/* phase 2 */
				var tmp13 = tmp0 - tmp3;
				var tmp11 = tmp1 + tmp2;
				var tmp12 = tmp1 - tmp2;
	
				data[dataOff] = tmp10 + tmp11; /* phase 3 */
				data[dataOff+4] = tmp10 - tmp11;
	
				var z1 = (tmp12 + tmp13) * 0.707106781; /* c4 */
				data[dataOff+2] = tmp13 + z1; /* phase 5 */
				data[dataOff+6] = tmp13 - z1;
	
				/* Odd part */
				tmp10 = tmp4 + tmp5; /* phase 2 */
				tmp11 = tmp5 + tmp6;
				tmp12 = tmp6 + tmp7;
	
				/* The rotator is modified from fig 4-8 to avoid extra negations. */
				var z5 = (tmp10 - tmp12) * 0.382683433; /* c6 */
				var z2 = 0.541196100 * tmp10 + z5; /* c2-c6 */
				var z4 = 1.306562965 * tmp12 + z5; /* c2+c6 */
				var z3 = tmp11 * 0.707106781; /* c4 */
	
				var z11 = tmp7 + z3;	/* phase 5 */
				var z13 = tmp7 - z3;
	
				data[dataOff+5] = z13 + z2;	/* phase 6 */
				data[dataOff+3] = z13 - z2;
				data[dataOff+1] = z11 + z4;
				data[dataOff+7] = z11 - z4;
	
				dataOff += 8; /* advance pointer to next row */
			}
	
			/* Pass 2: process columns. */
			dataOff = 0;
			for (i=0; i<I8; ++i)
			{
				d0 = data[dataOff];
				d1 = data[dataOff + 8];
				d2 = data[dataOff + 16];
				d3 = data[dataOff + 24];
				d4 = data[dataOff + 32];
				d5 = data[dataOff + 40];
				d6 = data[dataOff + 48];
				d7 = data[dataOff + 56];
				
				var tmp0p2 = d0 + d7;
				var tmp7p2 = d0 - d7;
				var tmp1p2 = d1 + d6;
				var tmp6p2 = d1 - d6;
				var tmp2p2 = d2 + d5;
				var tmp5p2 = d2 - d5;
				var tmp3p2 = d3 + d4;
				var tmp4p2 = d3 - d4;
	
				/* Even part */
				var tmp10p2 = tmp0p2 + tmp3p2;	/* phase 2 */
				var tmp13p2 = tmp0p2 - tmp3p2;
				var tmp11p2 = tmp1p2 + tmp2p2;
				var tmp12p2 = tmp1p2 - tmp2p2;
	
				data[dataOff] = tmp10p2 + tmp11p2; /* phase 3 */
				data[dataOff+32] = tmp10p2 - tmp11p2;
	
				var z1p2 = (tmp12p2 + tmp13p2) * 0.707106781; /* c4 */
				data[dataOff+16] = tmp13p2 + z1p2; /* phase 5 */
				data[dataOff+48] = tmp13p2 - z1p2;
	
				/* Odd part */
				tmp10p2 = tmp4p2 + tmp5p2; /* phase 2 */
				tmp11p2 = tmp5p2 + tmp6p2;
				tmp12p2 = tmp6p2 + tmp7p2;
	
				/* The rotator is modified from fig 4-8 to avoid extra negations. */
				var z5p2 = (tmp10p2 - tmp12p2) * 0.382683433; /* c6 */
				var z2p2 = 0.541196100 * tmp10p2 + z5p2; /* c2-c6 */
				var z4p2 = 1.306562965 * tmp12p2 + z5p2; /* c2+c6 */
				var z3p2 = tmp11p2 * 0.707106781; /* c4 */
	
				var z11p2 = tmp7p2 + z3p2;	/* phase 5 */
				var z13p2 = tmp7p2 - z3p2;
	
				data[dataOff+40] = z13p2 + z2p2; /* phase 6 */
				data[dataOff+24] = z13p2 - z2p2;
				data[dataOff+ 8] = z11p2 + z4p2;
				data[dataOff+56] = z11p2 - z4p2;
	
				dataOff++; /* advance pointer to next column */
			}
	
			// Quantize/descale the coefficients
			var fDCTQuant;
			for (i=0; i<I64; ++i)
			{
				// Apply the quantization and scaling factor & Round to nearest integer
				fDCTQuant = data[i]*fdtbl[i];
				outputfDCTQuant[i] = (fDCTQuant > 0.0) ? ((fDCTQuant + 0.5)|0) : ((fDCTQuant - 0.5)|0);
				//outputfDCTQuant[i] = fround(fDCTQuant);

			}
			return outputfDCTQuant;
		}
		
		function writeAPP0()
		{
			writeWord(0xFFE0); // marker
			writeWord(16); // length
			writeByte(0x4A); // J
			writeByte(0x46); // F
			writeByte(0x49); // I
			writeByte(0x46); // F
			writeByte(0); // = "JFIF",'\0'
			writeByte(1); // versionhi
			writeByte(1); // versionlo
			writeByte(0); // xyunits
			writeWord(1); // xdensity
			writeWord(1); // ydensity
			writeByte(0); // thumbnwidth
			writeByte(0); // thumbnheight
		}
	
		function writeSOF0(width, height)
		{
			writeWord(0xFFC0); // marker
			writeWord(17);   // length, truecolor YUV JPG
			writeByte(8);    // precision
			writeWord(height);
			writeWord(width);
			writeByte(3);    // nrofcomponents
			writeByte(1);    // IdY
			writeByte(0x11); // HVY
			writeByte(0);    // QTY
			writeByte(2);    // IdU
			writeByte(0x11); // HVU
			writeByte(1);    // QTU
			writeByte(3);    // IdV
			writeByte(0x11); // HVV
			writeByte(1);    // QTV
		}
	
		function writeDQT()
		{
			writeWord(0xFFDB); // marker
			writeWord(132);	   // length
			writeByte(0);
			for (var i=0; i<64; i++) {
				writeByte(YTable[i]);
			}
			writeByte(1);
			for (var j=0; j<64; j++) {
				writeByte(UVTable[j]);
			}
		}
	
		function writeDHT()
		{
			writeWord(0xFFC4); // marker
			writeWord(0x01A2); // length
	
			writeByte(0); // HTYDCinfo
			for (var i=0; i<16; i++) {
				writeByte(std_dc_luminance_nrcodes[i+1]);
			}
			for (var j=0; j<=11; j++) {
				writeByte(std_dc_luminance_values[j]);
			}
	
			writeByte(0x10); // HTYACinfo
			for (var k=0; k<16; k++) {
				writeByte(std_ac_luminance_nrcodes[k+1]);
			}
			for (var l=0; l<=161; l++) {
				writeByte(std_ac_luminance_values[l]);
			}
	
			writeByte(1); // HTUDCinfo
			for (var m=0; m<16; m++) {
				writeByte(std_dc_chrominance_nrcodes[m+1]);
			}
			for (var n=0; n<=11; n++) {
				writeByte(std_dc_chrominance_values[n]);
			}
	
			writeByte(0x11); // HTUACinfo
			for (var o=0; o<16; o++) {
				writeByte(std_ac_chrominance_nrcodes[o+1]);
			}
			for (var p=0; p<=161; p++) {
				writeByte(std_ac_chrominance_values[p]);
			}
		}
	
		function writeSOS()
		{
			writeWord(0xFFDA); // marker
			writeWord(12); // length
			writeByte(3); // nrofcomponents
			writeByte(1); // IdY
			writeByte(0); // HTY
			writeByte(2); // IdU
			writeByte(0x11); // HTU
			writeByte(3); // IdV
			writeByte(0x11); // HTV
			writeByte(0); // Ss
			writeByte(0x3f); // Se
			writeByte(0); // Bf
		}
		
		function processDU(CDU, fdtbl, DC, HTDC, HTAC){
			var EOB = HTAC[0x00];
			var M16zeroes = HTAC[0xF0];
			var pos;
			const I16 = 16;
			const I63 = 63;
			const I64 = 64;
			var DU_DCT = fDCTQuant(CDU, fdtbl);
			//ZigZag reorder
			for (var j=0;j<I64;++j) {
				DU[ZigZag[j]]=DU_DCT[j];
			}
			var Diff = DU[0] - DC; DC = DU[0];
			//Encode DC
			if (Diff==0) {
				writeBits(HTDC[0]); // Diff might be 0
			} else {
				pos = 32767+Diff;
				writeBits(HTDC[category[pos]]);
				writeBits(bitcode[pos]);
			}
			//Encode ACs
			var end0pos = 63; // was const... which is crazy
			for (; (end0pos>0)&&(DU[end0pos]==0); end0pos--) {};
			//end0pos = first element in reverse order !=0
			if ( end0pos == 0) {
				writeBits(EOB);
				return DC;
			}
			var i = 1;
			var lng;
			while ( i <= end0pos ) {
				var startpos = i;
				for (; (DU[i]==0) && (i<=end0pos); ++i) {}
				var nrzeroes = i-startpos;
				if ( nrzeroes >= I16 ) {
					lng = nrzeroes>>4;
					for (var nrmarker=1; nrmarker <= lng; ++nrmarker)
						writeBits(M16zeroes);
					nrzeroes = nrzeroes&0xF;
				}
				pos = 32767+DU[i];
				writeBits(HTAC[(nrzeroes<<4)+category[pos]]);
				writeBits(bitcode[pos]);
				i++;
			}
			if ( end0pos != I63 ) {
				writeBits(EOB);
			}
			return DC;
		}

		function initCharLookupTable(){
			var sfcc = String.fromCharCode;
			for(var i=0; i < 256; i++){ ///// ACHTUNG // 255
				clt[i] = sfcc(i);
			}
		}
		
		this.encode = function(image,quality) // image data object
		{
			var time_start = new Date().getTime();
			
			if(quality) setQuality(quality);
			
			// Initialize bit writer
			byteout = new Array();
			bytenew=0;
			bytepos=7;
	
			// Add JPEG headers
			writeWord(0xFFD8); // SOI
			writeAPP0();
			writeDQT();
			writeSOF0(image.width,image.height);
			writeDHT();
			writeSOS();

	
			// Encode 8x8 macroblocks
			var DCY=0;
			var DCU=0;
			var DCV=0;
			
			bytenew=0;
			bytepos=7;
			
			
			this.encode.displayName = "_encode_";

			var imageData = image.data;
			var width = image.width;
			var height = image.height;

			var quadWidth = width*4;
			var tripleWidth = width*3;
			
			var x, y = 0;
			var r, g, b;
			var start,p, col,row,pos;
			while(y < height){
				x = 0;
				while(x < quadWidth){
				start = quadWidth * y + x;
				p = start;
				col = -1;
				row = 0;
				
				for(pos=0; pos < 64; pos++){
					row = pos >> 3;// /8
					col = ( pos & 7 ) * 4; // %8
					p = start + ( row * quadWidth ) + col;		
					
					if(y+row >= height){ // padding bottom
						p-= (quadWidth*(y+1+row-height));
					}

					if(x+col >= quadWidth){ // padding right	
						p-= ((x+col) - quadWidth +4)
					}
					
					r = imageData[ p++ ];
					g = imageData[ p++ ];
					b = imageData[ p++ ];
					
					
					/* // calculate YUV values dynamically
					YDU[pos]=((( 0.29900)*r+( 0.58700)*g+( 0.11400)*b))-128; //-0x80
					UDU[pos]=(((-0.16874)*r+(-0.33126)*g+( 0.50000)*b));
					VDU[pos]=((( 0.50000)*r+(-0.41869)*g+(-0.08131)*b));
					*/
					
					// use lookup table (slightly faster)
					YDU[pos] = ((RGB_YUV_TABLE[r]             + RGB_YUV_TABLE[(g +  256)>>0] + RGB_YUV_TABLE[(b +  512)>>0]) >> 16)-128;
					UDU[pos] = ((RGB_YUV_TABLE[(r +  768)>>0] + RGB_YUV_TABLE[(g + 1024)>>0] + RGB_YUV_TABLE[(b + 1280)>>0]) >> 16)-128;
					VDU[pos] = ((RGB_YUV_TABLE[(r + 1280)>>0] + RGB_YUV_TABLE[(g + 1536)>>0] + RGB_YUV_TABLE[(b + 1792)>>0]) >> 16)-128;

				}
				
				DCY = processDU(YDU, fdtbl_Y, DCY, YDC_HT, YAC_HT);
				DCU = processDU(UDU, fdtbl_UV, DCU, UVDC_HT, UVAC_HT);
				DCV = processDU(VDU, fdtbl_UV, DCV, UVDC_HT, UVAC_HT);
				x+=32;
				}
				y+=8;
			}
			
			
			////////////////////////////////////////////////////////////////
	
			// Do the bit alignment of the EOI marker
			if ( bytepos >= 0 ) {
				var fillbits = [];
				fillbits[1] = bytepos+1;
				fillbits[0] = (1<<(bytepos+1))-1;
				writeBits(fillbits);
			}
	
			writeWord(0xFFD9); //EOI

			var jpegDataUri = 'data:image/jpeg;base64,' + btoa(byteout.join(''));
			
			byteout = [];
			
			// benchmarking
			var duration = new Date().getTime() - time_start;
    		console.log('Encoding time: '+ duration + 'ms');
    		//
			
			return jpegDataUri			
	}
	
	function setQuality(quality){
		if (quality <= 0) {
			quality = 1;
		}
		if (quality > 100) {
			quality = 100;
		}
		
		if(currentQuality == quality) return // don't recalc if unchanged
		
		var sf = 0;
		if (quality < 50) {
			sf = Math.floor(5000 / quality);
		} else {
			sf = Math.floor(200 - quality*2);
		}
		
		initQuantTables(sf);
		currentQuality = quality;
		console.log('Quality set to: '+quality +'%');
	}
	
	function init(){
		var time_start = new Date().getTime();
		if(!quality) quality = 50;
		// Create tables
		initCharLookupTable()
		initHuffmanTbl();
		initCategoryNumber();
		initRGBYUVTable();
		
		setQuality(quality);
		var duration = new Date().getTime() - time_start;
    	console.log('Initialization '+ duration + 'ms');
	}
	
	init();
	
};

// helper function to get the imageData of an existing image on the current page.
function getImageDataFromImage(idOrElement){
	var theImg = (typeof(idOrElement)=='string')? document.getElementById(idOrElement):idOrElement;
	var cvs = document.createElement('canvas');
	cvs.width = theImg.width;
	cvs.height = theImg.height;
	var ctx = cvs.getContext("2d");
	ctx.drawImage(theImg,0,0);
	
	return (ctx.getImageData(0, 0, cvs.width, cvs.height));
}
/*  |xGv00|33896aedb9d57bbc874a28db9c0a5d7e */
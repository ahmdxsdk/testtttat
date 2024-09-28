/*! This file is auto-generated */
( () => {
    var t = {
        2058: (t, e, r) => {
            var n;
            !function() {
                "use strict";
                var i = {
                    not_string: /[^s]/,
                    not_bool: /[^t]/,
                    not_type: /[^T]/,
                    not_primitive: /[^v]/,
                    number: /[diefg]/,
                    numeric_arg: /[bcdiefguxX]/,
                    json: /[j]/,
                    not_json: /[^j]/,
                    text: /^[^\x25]+/,
                    modulo: /^\x25{2}/,
                    placeholder: /^\x25(?:([1-9]\d*)\$|\(([^)]+)\))?(\+)?(0|'[^$])?(-)?(\d+)?(?:\.(\d+))?([b-gijostTuvxX])/,
                    key: /^([a-z_][a-z_\d]*)/i,
                    key_access: /^\.([a-z_][a-z_\d]*)/i,
                    index_access: /^\[(\d+)\]/,
                    sign: /^[+-]/
                };
                function a(t) {
                    return function(t, e) {
                        var r, n, o, s, l, u, p, c, f, d = 1, h = t.length, g = "";
                        for (n = 0; n < h; n++)
                            if ("string" == typeof t[n])
                                g += t[n];
                            else if ("object" == typeof t[n]) {
                                if ((s = t[n]).keys)
                                    for (r = e[d],
                                    o = 0; o < s.keys.length; o++) {
                                        if (null == r)
                                            throw new Error(a('[sprintf] Cannot access property "%s" of undefined value "%s"', s.keys[o], s.keys[o - 1]));
                                        r = r[s.keys[o]]
                                    }
                                else
                                    r = s.param_no ? e[s.param_no] : e[d++];
                                if (i.not_type.test(s.type) && i.not_primitive.test(s.type) && r instanceof Function && (r = r()),
                                i.numeric_arg.test(s.type) && "number" != typeof r && isNaN(r))
                                    throw new TypeError(a("[sprintf] expecting number but found %T", r));
                                switch (i.number.test(s.type) && (c = r >= 0),
                                s.type) {
                                case "b":
                                    r = parseInt(r, 10).toString(2);
                                    break;
                                case "c":
                                    r = String.fromCharCode(parseInt(r, 10));
                                    break;
                                case "d":
                                case "i":
                                    r = parseInt(r, 10);
                                    break;
                                case "j":
                                    r = JSON.stringify(r, null, s.width ? parseInt(s.width) : 0);
                                    break;
                                case "e":
                                    r = s.precision ? parseFloat(r).toExponential(s.precision) : parseFloat(r).toExponential();
                                    break;
                                case "f":
                                    r = s.precision ? parseFloat(r).toFixed(s.precision) : parseFloat(r);
                                    break;
                                case "g":
                                    r = s.precision ? String(Number(r.toPrecision(s.precision))) : parseFloat(r);
                                    break;
                                case "o":
                                    r = (parseInt(r, 10) >>> 0).toString(8);
                                    break;
                                case "s":
                                    r = String(r),
                                    r = s.precision ? r.substring(0, s.precision) : r;
                                    break;
                                case "t":
                                    r = String(!!r),
                                    r = s.precision ? r.substring(0, s.precision) : r;
                                    break;
                                case "T":
                                    r = Object.prototype.toString.call(r).slice(8, -1).toLowerCase(),
                                    r = s.precision ? r.substring(0, s.precision) : r;
                                    break;
                                case "u":
                                    r = parseInt(r, 10) >>> 0;
                                    break;
                                case "v":
                                    r = r.valueOf(),
                                    r = s.precision ? r.substring(0, s.precision) : r;
                                    break;
                                case "x":
                                    r = (parseInt(r, 10) >>> 0).toString(16);
                                    break;
                                case "X":
                                    r = (parseInt(r, 10) >>> 0).toString(16).toUpperCase()
                                }
                                i.json.test(s.type) ? g += r : (!i.number.test(s.type) || c && !s.sign ? f = "" : (f = c ? "+" : "-",
                                r = r.toString().replace(i.sign, "")),
                                u = s.pad_char ? "0" === s.pad_char ? "0" : s.pad_char.charAt(1) : " ",
                                p = s.width - (f + r).length,
                                l = s.width && p > 0 ? u.repeat(p) : "",
                                g += s.align ? f + r + l : "0" === u ? f + l + r : l + f + r)
                            }
                        return g
                    }(function(t) {
                        if (s[t])
                            return s[t];
                        var e, r = t, n = [], a = 0;
                        for (; r; ) {
                            if (null !== (e = i.text.exec(r)))
                                n.push(e[0]);
                            else if (null !== (e = i.modulo.exec(r)))
                                n.push("%");
                            else {
                                if (null === (e = i.placeholder.exec(r)))
                                    throw new SyntaxError("[sprintf] unexpected placeholder");
                                if (e[2]) {
                                    a |= 1;
                                    var o = []
                                      , l = e[2]
                                      , u = [];
                                    if (null === (u = i.key.exec(l)))
                                        throw new SyntaxError("[sprintf] failed to parse named argument key");
                                    for (o.push(u[1]); "" !== (l = l.substring(u[0].length)); )
                                        if (null !== (u = i.key_access.exec(l)))
                                            o.push(u[1]);
                                        else {
                                            if (null === (u = i.index_access.exec(l)))
                                                throw new SyntaxError("[sprintf] failed to parse named argument key");
                                            o.push(u[1])
                                        }
                                    e[2] = o
                                } else
                                    a |= 2;
                                if (3 === a)
                                    throw new Error("[sprintf] mixing positional and named placeholders is not (yet) supported");
                                n.push({
                                    placeholder: e[0],
                                    param_no: e[1],
                                    keys: e[2],
                                    sign: e[3],
                                    pad_char: e[4],
                                    align: e[5],
                                    width: e[6],
                                    precision: e[7],
                                    type: e[8]
                                })
                            }
                            r = r.substring(e[0].length)
                        }
                        return s[t] = n
                    }(t), arguments)
                }
                function o(t, e) {
                    return a.apply(null, [t].concat(e || []))
                }
                var s = Object.create(null);
                e.sprintf = a,
                e.vsprintf = o,
                "undefined" != typeof window && (window.sprintf = a,
                window.vsprintf = o,
                void 0 === (n = function() {
                    return {
                        sprintf: a,
                        vsprintf: o
                    }
                }
                .call(e, r, e, t)) || (t.exports = n))
            }()
        }
    }
      , e = {};
    function r(n) {
        var i = e[n];
        if (void 0 !== i)
            return i.exports;
        var a = e[n] = {
            exports: {}
        };
        return t[n](a, a.exports, r),
        a.exports
    }
    r.n = t => {
        var e = t && t.__esModule ? () => t.default : () => t;
        return r.d(e, {
            a: e
        }),
        e
    }
    ,
    r.d = (t, e) => {
        for (var n in e)
            r.o(e, n) && !r.o(t, n) && Object.defineProperty(t, n, {
                enumerable: !0,
                get: e[n]
            })
    }
    ,
    r.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e),
    r.r = t => {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }
    ;
    var n = {};
    ( () => {
        "use strict";
        r.r(n),
        r.d(n, {
            __: () => F,
            _n: () => j,
            _nx: () => L,
            _x: () => S,
            createI18n: () => x,
            defaultI18n: () => _,
            getLocaleData: () => v,
            hasTranslation: () => D,
            isRTL: () => T,
            resetLocaleData: () => w,
            setLocaleData: () => m,
            sprintf: () => a,
            subscribe: () => k
        });
        var t = r(2058)
          , e = r.n(t);
        const i = function(t, e) {
            var r, n, i = 0;
            function a() {
                var a, o, s = r, l = arguments.length;
                t: for (; s; ) {
                    if (s.args.length === arguments.length) {
                        for (o = 0; o < l; o++)
                            if (s.args[o] !== arguments[o]) {
                                s = s.next;
                                continue t
                            }
                        return s !== r && (s === n && (n = s.prev),
                        s.prev.next = s.next,
                        s.next && (s.next.prev = s.prev),
                        s.next = r,
                        s.prev = null,
                        r.prev = s,
                        r = s),
                        s.val
                    }
                    s = s.next
                }
                for (a = new Array(l),
                o = 0; o < l; o++)
                    a[o] = arguments[o];
                return s = {
                    args: a,
                    val: t.apply(null, a)
                },
                r ? (r.prev = s,
                s.next = r) : n = s,
                i === e.maxSize ? (n = n.prev).next = null : i++,
                r = s,
                s.val
            }
            return e = e || {},
            a.clear = function() {
                r = null,
                n = null,
                i = 0
            }
            ,
            a
        }(console.error);
        function a(t, ...r) {
            try {
                return e().sprintf(t, ...r)
            } catch (e) {
                return e instanceof Error && i("sprintf error: \n\n" + e.toString()),
                t
            }
        }
        var o, s, l, u;
        o = {
            "(": 9,
            "!": 8,
            "*": 7,
            "/": 7,
            "%": 7,
            "+": 6,
            "-": 6,
            "<": 5,
            "<=": 5,
            ">": 5,
            ">=": 5,
            "==": 4,
            "!=": 4,
            "&&": 3,
            "||": 2,
            "?": 1,
            "?:": 1
        },
        s = ["(", "?"],
        l = {
            ")": ["("],
            ":": ["?", "?:"]
        },
        u = /<=|>=|==|!=|&&|\|\||\?:|\(|!|\*|\/|%|\+|-|<|>|\?|\)|:/;
        var p = {
            "!": function(t) {
                return !t
            },
            "*": function(t, e) {
                return t * e
            },
            "/": function(t, e) {
                return t / e
            },
            "%": function(t, e) {
                return t % e
            },
            "+": function(t, e) {
                return t + e
            },
            "-": function(t, e) {
                return t - e
            },
            "<": function(t, e) {
                return t < e
            },
            "<=": function(t, e) {
                return t <= e
            },
            ">": function(t, e) {
                return t > e
            },
            ">=": function(t, e) {
                return t >= e
            },
            "==": function(t, e) {
                return t === e
            },
            "!=": function(t, e) {
                return t !== e
            },
            "&&": function(t, e) {
                return t && e
            },
            "||": function(t, e) {
                return t || e
            },
            "?:": function(t, e, r) {
                if (t)
                    throw e;
                return r
            }
        };
        function c(t) {
            var e = function(t) {
                for (var e, r, n, i, a = [], p = []; e = t.match(u); ) {
                    for (r = e[0],
                    (n = t.substr(0, e.index).trim()) && a.push(n); i = p.pop(); ) {
                        if (l[r]) {
                            if (l[r][0] === i) {
                                r = l[r][1] || r;
                                break
                            }
                        } else if (s.indexOf(i) >= 0 || o[i] < o[r]) {
                            p.push(i);
                            break
                        }
                        a.push(i)
                    }
                    l[r] || p.push(r),
                    t = t.substr(e.index + r.length)
                }
                return (t = t.trim()) && a.push(t),
                a.concat(p.reverse())
            }(t);
            return function(t) {
                return function(t, e) {
                    var r, n, i, a, o, s, l = [];
                    for (r = 0; r < t.length; r++) {
                        if (o = t[r],
                        a = p[o]) {
                            for (n = a.length,
                            i = Array(n); n--; )
                                i[n] = l.pop();
                            try {
                                s = a.apply(null, i)
                            } catch (t) {
                                return t
                            }
                        } else
                            s = e.hasOwnProperty(o) ? e[o] : +o;
                        l.push(s)
                    }
                    return l[0]
                }(e, t)
            }
        }
        var f = {
            contextDelimiter: "",
            onMissingKey: null
        };
        function d(t, e) {
            var r;
            for (r in this.data = t,
            this.pluralForms = {},
            this.options = {},
            f)
                this.options[r] = void 0 !== e && r in e ? e[r] : f[r]
        }
        d.prototype.getPluralForm = function(t, e) {
            var r, n, i, a = this.pluralForms[t];
            return a || ("function" != typeof (i = (r = this.data[t][""])["Plural-Forms"] || r["plural-forms"] || r.plural_forms) && (n = function(t) {
                var e, r, n;
                for (e = t.split(";"),
                r = 0; r < e.length; r++)
                    if (0 === (n = e[r].trim()).indexOf("plural="))
                        return n.substr(7)
            }(r["Plural-Forms"] || r["plural-forms"] || r.plural_forms),
            i = function(t) {
                var e = c(t);
                return function(t) {
                    return +e({
                        n: t
                    })
                }
            }(n)),
            a = this.pluralForms[t] = i),
            a(e)
        }
        ,
        d.prototype.dcnpgettext = function(t, e, r, n, i) {
            var a, o, s;
            return a = void 0 === i ? 0 : this.getPluralForm(t, i),
            o = r,
            e && (o = e + this.options.contextDelimiter + r),
            (s = this.data[t][o]) && s[a] ? s[a] : (this.options.onMissingKey && this.options.onMissingKey(r, t),
            0 === a ? r : n)
        }
        ;
        const h = {
            plural_forms: t => 1 === t ? 0 : 1
        }
          , g = /^i18n\.(n?gettext|has_translation)(_|$)/
          , x = (t, e, r) => {
            const n = new d({})
              , i = new Set
              , a = () => {
                i.forEach((t => t()))
            }
              , o = (t, e="default") => {
                n.data[e] = {
                    ...n.data[e],
                    ...t
                },
                n.data[e][""] = {
                    ...h,
                    ...n.data[e]?.[""]
                },
                delete n.pluralForms[e]
            }
              , s = (t, e) => {
                o(t, e),
                a()
            }
              , l = (t="default", e, r, i, a) => (n.data[t] || o(void 0, t),
            n.dcnpgettext(t, e, r, i, a))
              , u = (t="default") => t
              , p = (t, e, n) => {
                let i = l(n, e, t);
                return r ? (i = r.applyFilters("i18n.gettext_with_context", i, t, e, n),
                r.applyFilters("i18n.gettext_with_context_" + u(n), i, t, e, n)) : i
            }
            ;
            if (t && s(t, e),
            r) {
                const t = t => {
                    g.test(t) && a()
                }
                ;
                r.addAction("hookAdded", "core/i18n", t),
                r.addAction("hookRemoved", "core/i18n", t)
            }
            return {
                getLocaleData: (t="default") => n.data[t],
                setLocaleData: s,
                addLocaleData: (t, e="default") => {
                    n.data[e] = {
                        ...n.data[e],
                        ...t,
                        "": {
                            ...h,
                            ...n.data[e]?.[""],
                            ...t?.[""]
                        }
                    },
                    delete n.pluralForms[e],
                    a()
                }
                ,
                resetLocaleData: (t, e) => {
                    n.data = {},
                    n.pluralForms = {},
                    s(t, e)
                }
                ,
                subscribe: t => (i.add(t),
                () => i.delete(t)),
                __: (t, e) => {
                    let n = l(e, void 0, t);
                    return r ? (n = r.applyFilters("i18n.gettext", n, t, e),
                    r.applyFilters("i18n.gettext_" + u(e), n, t, e)) : n
                }
                ,
                _x: p,
                _n: (t, e, n, i) => {
                    let a = l(i, void 0, t, e, n);
                    return r ? (a = r.applyFilters("i18n.ngettext", a, t, e, n, i),
                    r.applyFilters("i18n.ngettext_" + u(i), a, t, e, n, i)) : a
                }
                ,
                _nx: (t, e, n, i, a) => {
                    let o = l(a, i, t, e, n);
                    return r ? (o = r.applyFilters("i18n.ngettext_with_context", o, t, e, n, i, a),
                    r.applyFilters("i18n.ngettext_with_context_" + u(a), o, t, e, n, i, a)) : o
                }
                ,
                isRTL: () => "rtl" === p("ltr", "text direction"),
                hasTranslation: (t, e, i) => {
                    const a = e ? e + "" + t : t;
                    let o = !!n.data?.[null != i ? i : "default"]?.[a];
                    return r && (o = r.applyFilters("i18n.has_translation", o, t, e, i),
                    o = r.applyFilters("i18n.has_translation_" + u(i), o, t, e, i)),
                    o
                }
            }
        }
          , y = window.wp.hooks
          , b = x(void 0, void 0, y.defaultHooks)
          , _ = b
          , v = b.getLocaleData.bind(b)
          , m = b.setLocaleData.bind(b)
          , w = b.resetLocaleData.bind(b)
          , k = b.subscribe.bind(b)
          , F = b.__.bind(b)
          , S = b._x.bind(b)
          , j = b._n.bind(b)
          , L = b._nx.bind(b)
          , T = b.isRTL.bind(b)
          , D = b.hasTranslation.bind(b)
    }
    )(),
    (window.wp = window.wp || {}).i18n = n
}
)();

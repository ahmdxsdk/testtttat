/*!
  * Bootstrap v5.0.0-beta3 (https://getbootstrap.com/)
  * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
!function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e(require("@popperjs/core")) : "function" == typeof define && define.amd ? define(["@popperjs/core"], e) : (t = "undefined" != typeof globalThis ? globalThis : t || self).bootstrap = e(t.Popper)
}(this, (function(t) {
    "use strict";
    function e(t) {
        if (t && t.__esModule)
            return t;
        var e = Object.create(null);
        return t && Object.keys(t).forEach((function(s) {
            if ("default" !== s) {
                var i = Object.getOwnPropertyDescriptor(t, s);
                Object.defineProperty(e, s, i.get ? i : {
                    enumerable: !0,
                    get: function() {
                        return t[s]
                    }
                })
            }
        }
        )),
        e.default = t,
        Object.freeze(e)
    }
    var s = e(t);
    const i = t => {
        do {
            t += Math.floor(1e6 * Math.random())
        } while (document.getElementById(t));
        return t
    }
      , n = t => {
        let e = t.getAttribute("data-bs-target");
        if (!e || "#" === e) {
            let s = t.getAttribute("href");
            if (!s || !s.includes("#") && !s.startsWith("."))
                return null;
            s.includes("#") && !s.startsWith("#") && (s = "#" + s.split("#")[1]),
            e = s && "#" !== s ? s.trim() : null
        }
        return e
    }
      , o = t => {
        const e = n(t);
        return e && document.querySelector(e) ? e : null
    }
      , r = t => {
        const e = n(t);
        return e ? document.querySelector(e) : null
    }
      , a = t => {
        if (!t)
            return 0;
        let {transitionDuration: e, transitionDelay: s} = window.getComputedStyle(t);
        const i = Number.parseFloat(e)
          , n = Number.parseFloat(s);
        return i || n ? (e = e.split(",")[0],
        s = s.split(",")[0],
        1e3 * (Number.parseFloat(e) + Number.parseFloat(s))) : 0
    }
      , l = t => {
        t.dispatchEvent(new Event("transitionend"))
    }
      , c = t => (t[0] || t).nodeType
      , h = (t, e) => {
        let s = !1;
        const i = e + 5;
        t.addEventListener("transitionend", (function e() {
            s = !0,
            t.removeEventListener("transitionend", e)
        }
        )),
        setTimeout( () => {
            s || l(t)
        }
        , i)
    }
      , d = (t, e, s) => {
        Object.keys(s).forEach(i => {
            const n = s[i]
              , o = e[i]
              , r = o && c(o) ? "element" : null == (a = o) ? "" + a : {}.toString.call(a).match(/\s([a-z]+)/i)[1].toLowerCase();
            var a;
            if (!new RegExp(n).test(r))
                throw new TypeError(t.toUpperCase() + ": " + `Option "${i}" provided type "${r}" ` + `but expected type "${n}".`)
        }
        )
    }
      , u = t => {
        if (!t)
            return !1;
        if (t.style && t.parentNode && t.parentNode.style) {
            const e = getComputedStyle(t)
              , s = getComputedStyle(t.parentNode);
            return "none" !== e.display && "none" !== s.display && "hidden" !== e.visibility
        }
        return !1
    }
      , g = t => !t || t.nodeType !== Node.ELEMENT_NODE || !!t.classList.contains("disabled") || (void 0 !== t.disabled ? t.disabled : t.hasAttribute("disabled") && "false" !== t.getAttribute("disabled"))
      , f = t => {
        if (!document.documentElement.attachShadow)
            return null;
        if ("function" == typeof t.getRootNode) {
            const e = t.getRootNode();
            return e instanceof ShadowRoot ? e : null
        }
        return t instanceof ShadowRoot ? t : t.parentNode ? f(t.parentNode) : null
    }
      , p = () => function() {}
      , m = t => t.offsetHeight
      , _ = () => {
        const {jQuery: t} = window;
        return t && !document.body.hasAttribute("data-bs-no-jquery") ? t : null
    }
      , b = () => "rtl" === document.documentElement.dir
      , v = (t, e) => {
        var s;
        s = () => {
            const s = _();
            if (s) {
                const i = s.fn[t];
                s.fn[t] = e.jQueryInterface,
                s.fn[t].Constructor = e,
                s.fn[t].noConflict = () => (s.fn[t] = i,
                e.jQueryInterface)
            }
        }
        ,
        "loading" === document.readyState ? document.addEventListener("DOMContentLoaded", s) : s()
    }
      , y = new Map;
    var w = {
        set(t, e, s) {
            y.has(t) || y.set(t, new Map);
            const i = y.get(t);
            i.has(e) || 0 === i.size ? i.set(e, s) : console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(i.keys())[0]}.`)
        },
        get: (t, e) => y.has(t) && y.get(t).get(e) || null,
        remove(t, e) {
            if (!y.has(t))
                return;
            const s = y.get(t);
            s.delete(e),
            0 === s.size && y.delete(t)
        }
    };
    const E = /[^.]*(?=\..*)\.|.*/
      , T = /\..*/
      , A = /::\d+$/
      , L = {};
    let k = 1;
    const C = {
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }
      , D = new Set(["click", "dblclick", "mouseup", "mousedown", "contextmenu", "mousewheel", "DOMMouseScroll", "mouseover", "mouseout", "mousemove", "selectstart", "selectend", "keydown", "keypress", "keyup", "orientationchange", "touchstart", "touchmove", "touchend", "touchcancel", "pointerdown", "pointermove", "pointerup", "pointerleave", "pointercancel", "gesturestart", "gesturechange", "gestureend", "focus", "blur", "change", "reset", "select", "submit", "focusin", "focusout", "load", "unload", "beforeunload", "resize", "move", "DOMContentLoaded", "readystatechange", "error", "abort", "scroll"]);
    function S(t, e) {
        return e && `${e}::${k++}` || t.uidEvent || k++
    }
    function N(t) {
        const e = S(t);
        return t.uidEvent = e,
        L[e] = L[e] || {},
        L[e]
    }
    function O(t, e, s=null) {
        const i = Object.keys(t);
        for (let n = 0, o = i.length; n < o; n++) {
            const o = t[i[n]];
            if (o.originalHandler === e && o.delegationSelector === s)
                return o
        }
        return null
    }
    function x(t, e, s) {
        const i = "string" == typeof e
          , n = i ? s : e;
        let o = t.replace(T, "");
        const r = C[o];
        return r && (o = r),
        D.has(o) || (o = t),
        [i, n, o]
    }
    function I(t, e, s, i, n) {
        if ("string" != typeof e || !t)
            return;
        s || (s = i,
        i = null);
        const [o,r,a] = x(e, s, i)
          , l = N(t)
          , c = l[a] || (l[a] = {})
          , h = O(c, r, o ? s : null);
        if (h)
            return void (h.oneOff = h.oneOff && n);
        const d = S(r, e.replace(E, ""))
          , u = o ? function(t, e, s) {
            return function i(n) {
                const o = t.querySelectorAll(e);
                for (let {target: e} = n; e && e !== this; e = e.parentNode)
                    for (let r = o.length; r--; )
                        if (o[r] === e)
                            return n.delegateTarget = e,
                            i.oneOff && P.off(t, n.type, s),
                            s.apply(e, [n]);
                return null
            }
        }(t, s, i) : function(t, e) {
            return function s(i) {
                return i.delegateTarget = t,
                s.oneOff && P.off(t, i.type, e),
                e.apply(t, [i])
            }
        }(t, s);
        u.delegationSelector = o ? s : null,
        u.originalHandler = r,
        u.oneOff = n,
        u.uidEvent = d,
        c[d] = u,
        t.addEventListener(a, u, o)
    }
    function j(t, e, s, i, n) {
        const o = O(e[s], i, n);
        o && (t.removeEventListener(s, o, Boolean(n)),
        delete e[s][o.uidEvent])
    }
    const P = {
        on(t, e, s, i) {
            I(t, e, s, i, !1)
        },
        one(t, e, s, i) {
            I(t, e, s, i, !0)
        },
        off(t, e, s, i) {
            if ("string" != typeof e || !t)
                return;
            const [n,o,r] = x(e, s, i)
              , a = r !== e
              , l = N(t)
              , c = e.startsWith(".");
            if (void 0 !== o) {
                if (!l || !l[r])
                    return;
                return void j(t, l, r, o, n ? s : null)
            }
            c && Object.keys(l).forEach(s => {
                !function(t, e, s, i) {
                    const n = e[s] || {};
                    Object.keys(n).forEach(o => {
                        if (o.includes(i)) {
                            const i = n[o];
                            j(t, e, s, i.originalHandler, i.delegationSelector)
                        }
                    }
                    )
                }(t, l, s, e.slice(1))
            }
            );
            const h = l[r] || {};
            Object.keys(h).forEach(s => {
                const i = s.replace(A, "");
                if (!a || e.includes(i)) {
                    const e = h[s];
                    j(t, l, r, e.originalHandler, e.delegationSelector)
                }
            }
            )
        },
        trigger(t, e, s) {
            if ("string" != typeof e || !t)
                return null;
            const i = _()
              , n = e.replace(T, "")
              , o = e !== n
              , r = D.has(n);
            let a, l = !0, c = !0, h = !1, d = null;
            return o && i && (a = i.Event(e, s),
            i(t).trigger(a),
            l = !a.isPropagationStopped(),
            c = !a.isImmediatePropagationStopped(),
            h = a.isDefaultPrevented()),
            r ? (d = document.createEvent("HTMLEvents"),
            d.initEvent(n, l, !0)) : d = new CustomEvent(e,{
                bubbles: l,
                cancelable: !0
            }),
            void 0 !== s && Object.keys(s).forEach(t => {
                Object.defineProperty(d, t, {
                    get: () => s[t]
                })
            }
            ),
            h && d.preventDefault(),
            c && t.dispatchEvent(d),
            d.defaultPrevented && void 0 !== a && a.preventDefault(),
            d
        }
    };
    class M {
        constructor(t) {
            (t = "string" == typeof t ? document.querySelector(t) : t) && (this._element = t,
            w.set(this._element, this.constructor.DATA_KEY, this))
        }
        dispose() {
            w.remove(this._element, this.constructor.DATA_KEY),
            this._element = null
        }
        static getInstance(t) {
            return w.get(t, this.DATA_KEY)
        }
        static get VERSION() {
            return "5.0.0-beta3"
        }
    }
    class H extends M {
        static get DATA_KEY() {
            return "bs.alert"
        }
        close(t) {
            const e = t ? this._getRootElement(t) : this._element
              , s = this._triggerCloseEvent(e);
            null === s || s.defaultPrevented || this._removeElement(e)
        }
        _getRootElement(t) {
            return r(t) || t.closest(".alert")
        }
        _triggerCloseEvent(t) {
            return P.trigger(t, "close.bs.alert")
        }
        _removeElement(t) {
            if (t.classList.remove("show"),
            !t.classList.contains("fade"))
                return void this._destroyElement(t);
            const e = a(t);
            P.one(t, "transitionend", () => this._destroyElement(t)),
            h(t, e)
        }
        _destroyElement(t) {
            t.parentNode && t.parentNode.removeChild(t),
            P.trigger(t, "closed.bs.alert")
        }
        static jQueryInterface(t) {
            return this.each((function() {
                let e = w.get(this, "bs.alert");
                e || (e = new H(this)),
                "close" === t && e[t](this)
            }
            ))
        }
        static handleDismiss(t) {
            return function(e) {
                e && e.preventDefault(),
                t.close(this)
            }
        }
    }
    P.on(document, "click.bs.alert.data-api", '[data-bs-dismiss="alert"]', H.handleDismiss(new H)),
    v("alert", H);
    class R extends M {
        static get DATA_KEY() {
            return "bs.button"
        }
        toggle() {
            this._element.setAttribute("aria-pressed", this._element.classList.toggle("active"))
        }
        static jQueryInterface(t) {
            return this.each((function() {
                let e = w.get(this, "bs.button");
                e || (e = new R(this)),
                "toggle" === t && e[t]()
            }
            ))
        }
    }
    function B(t) {
        return "true" === t || "false" !== t && (t === Number(t).toString() ? Number(t) : "" === t || "null" === t ? null : t)
    }
    function W(t) {
        return t.replace(/[A-Z]/g, t => "-" + t.toLowerCase())
    }
    P.on(document, "click.bs.button.data-api", '[data-bs-toggle="button"]', t => {
        t.preventDefault();
        const e = t.target.closest('[data-bs-toggle="button"]');
        let s = w.get(e, "bs.button");
        s || (s = new R(e)),
        s.toggle()
    }
    ),
    v("button", R);
    const $ = {
        setDataAttribute(t, e, s) {
            t.setAttribute("data-bs-" + W(e), s)
        },
        removeDataAttribute(t, e) {
            t.removeAttribute("data-bs-" + W(e))
        },
        getDataAttributes(t) {
            if (!t)
                return {};
            const e = {};
            return Object.keys(t.dataset).filter(t => t.startsWith("bs")).forEach(s => {
                let i = s.replace(/^bs/, "");
                i = i.charAt(0).toLowerCase() + i.slice(1, i.length),
                e[i] = B(t.dataset[s])
            }
            ),
            e
        },
        getDataAttribute: (t, e) => B(t.getAttribute("data-bs-" + W(e))),
        offset(t) {
            const e = t.getBoundingClientRect();
            return {
                top: e.top + document.body.scrollTop,
                left: e.left + document.body.scrollLeft
            }
        },
        position: t => ({
            top: t.offsetTop,
            left: t.offsetLeft
        })
    }
      , U = {
        find: (t, e=document.documentElement) => [].concat(...Element.prototype.querySelectorAll.call(e, t)),
        findOne: (t, e=document.documentElement) => Element.prototype.querySelector.call(e, t),
        children: (t, e) => [].concat(...t.children).filter(t => t.matches(e)),
        parents(t, e) {
            const s = [];
            let i = t.parentNode;
            for (; i && i.nodeType === Node.ELEMENT_NODE && 3 !== i.nodeType; )
                i.matches(e) && s.push(i),
                i = i.parentNode;
            return s
        },
        prev(t, e) {
            let s = t.previousElementSibling;
            for (; s; ) {
                if (s.matches(e))
                    return [s];
                s = s.previousElementSibling
            }
            return []
        },
        next(t, e) {
            let s = t.nextElementSibling;
            for (; s; ) {
                if (s.matches(e))
                    return [s];
                s = s.nextElementSibling
            }
            return []
        }
    }
      , F = {
        interval: 5e3,
        keyboard: !0,
        slide: !1,
        pause: "hover",
        wrap: !0,
        touch: !0
    }
      , K = {
        interval: "(number|boolean)",
        keyboard: "boolean",
        slide: "(boolean|string)",
        pause: "(string|boolean)",
        wrap: "boolean",
        touch: "boolean"
    }
      , z = "next"
      , Y = "prev"
      , q = "left"
      , Q = "right";
    class X extends M {
        constructor(t, e) {
            super(t),
            this._items = null,
            this._interval = null,
            this._activeElement = null,
            this._isPaused = !1,
            this._isSliding = !1,
            this.touchTimeout = null,
            this.touchStartX = 0,
            this.touchDeltaX = 0,
            this._config = this._getConfig(e),
            this._indicatorsElement = U.findOne(".carousel-indicators", this._element),
            this._touchSupported = "ontouchstart"in document.documentElement || navigator.maxTouchPoints > 0,
            this._pointerEvent = Boolean(window.PointerEvent),
            this._addEventListeners()
        }
        static get Default() {
            return F
        }
        static get DATA_KEY() {
            return "bs.carousel"
        }
        next() {
            this._isSliding || this._slide(z)
        }
        nextWhenVisible() {
            !document.hidden && u(this._element) && this.next()
        }
        prev() {
            this._isSliding || this._slide(Y)
        }
        pause(t) {
            t || (this._isPaused = !0),
            U.findOne(".carousel-item-next, .carousel-item-prev", this._element) && (l(this._element),
            this.cycle(!0)),
            clearInterval(this._interval),
            this._interval = null
        }
        cycle(t) {
            t || (this._isPaused = !1),
            this._interval && (clearInterval(this._interval),
            this._interval = null),
            this._config && this._config.interval && !this._isPaused && (this._updateInterval(),
            this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval))
        }
        to(t) {
            this._activeElement = U.findOne(".active.carousel-item", this._element);
            const e = this._getItemIndex(this._activeElement);
            if (t > this._items.length - 1 || t < 0)
                return;
            if (this._isSliding)
                return void P.one(this._element, "slid.bs.carousel", () => this.to(t));
            if (e === t)
                return this.pause(),
                void this.cycle();
            const s = t > e ? z : Y;
            this._slide(s, this._items[t])
        }
        dispose() {
            P.off(this._element, ".bs.carousel"),
            this._items = null,
            this._config = null,
            this._interval = null,
            this._isPaused = null,
            this._isSliding = null,
            this._activeElement = null,
            this._indicatorsElement = null,
            super.dispose()
        }
        _getConfig(t) {
            return t = {
                ...F,
                ...t
            },
            d("carousel", t, K),
            t
        }
        _handleSwipe() {
            const t = Math.abs(this.touchDeltaX);
            if (t <= 40)
                return;
            const e = t / this.touchDeltaX;
            this.touchDeltaX = 0,
            e && this._slide(e > 0 ? Q : q)
        }
        _addEventListeners() {
            this._config.keyboard && P.on(this._element, "keydown.bs.carousel", t => this._keydown(t)),
            "hover" === this._config.pause && (P.on(this._element, "mouseenter.bs.carousel", t => this.pause(t)),
            P.on(this._element, "mouseleave.bs.carousel", t => this.cycle(t))),
            this._config.touch && this._touchSupported && this._addTouchEventListeners()
        }
        _addTouchEventListeners() {
            const t = t => {
                !this._pointerEvent || "pen" !== t.pointerType && "touch" !== t.pointerType ? this._pointerEvent || (this.touchStartX = t.touches[0].clientX) : this.touchStartX = t.clientX
            }
              , e = t => {
                this.touchDeltaX = t.touches && t.touches.length > 1 ? 0 : t.touches[0].clientX - this.touchStartX
            }
              , s = t => {
                !this._pointerEvent || "pen" !== t.pointerType && "touch" !== t.pointerType || (this.touchDeltaX = t.clientX - this.touchStartX),
                this._handleSwipe(),
                "hover" === this._config.pause && (this.pause(),
                this.touchTimeout && clearTimeout(this.touchTimeout),
                this.touchTimeout = setTimeout(t => this.cycle(t), 500 + this._config.interval))
            }
            ;
            U.find(".carousel-item img", this._element).forEach(t => {
                P.on(t, "dragstart.bs.carousel", t => t.preventDefault())
            }
            ),
            this._pointerEvent ? (P.on(this._element, "pointerdown.bs.carousel", e => t(e)),
            P.on(this._element, "pointerup.bs.carousel", t => s(t)),
            this._element.classList.add("pointer-event")) : (P.on(this._element, "touchstart.bs.carousel", e => t(e)),
            P.on(this._element, "touchmove.bs.carousel", t => e(t)),
            P.on(this._element, "touchend.bs.carousel", t => s(t)))
        }
        _keydown(t) {
            /input|textarea/i.test(t.target.tagName) || ("ArrowLeft" === t.key ? (t.preventDefault(),
            this._slide(q)) : "ArrowRight" === t.key && (t.preventDefault(),
            this._slide(Q)))
        }
        _getItemIndex(t) {
            return this._items = t && t.parentNode ? U.find(".carousel-item", t.parentNode) : [],
            this._items.indexOf(t)
        }
        _getItemByOrder(t, e) {
            const s = t === z
              , i = t === Y
              , n = this._getItemIndex(e)
              , o = this._items.length - 1;
            if ((i && 0 === n || s && n === o) && !this._config.wrap)
                return e;
            const r = (n + (i ? -1 : 1)) % this._items.length;
            return -1 === r ? this._items[this._items.length - 1] : this._items[r]
        }
        _triggerSlideEvent(t, e) {
            const s = this._getItemIndex(t)
              , i = this._getItemIndex(U.findOne(".active.carousel-item", this._element));
            return P.trigger(this._element, "slide.bs.carousel", {
                relatedTarget: t,
                direction: e,
                from: i,
                to: s
            })
        }
        _setActiveIndicatorElement(t) {
            if (this._indicatorsElement) {
                const e = U.findOne(".active", this._indicatorsElement);
                e.classList.remove("active"),
                e.removeAttribute("aria-current");
                const s = U.find("[data-bs-target]", this._indicatorsElement);
                for (let e = 0; e < s.length; e++)
                    if (Number.parseInt(s[e].getAttribute("data-bs-slide-to"), 10) === this._getItemIndex(t)) {
                        s[e].classList.add("active"),
                        s[e].setAttribute("aria-current", "true");
                        break
                    }
            }
        }
        _updateInterval() {
            const t = this._activeElement || U.findOne(".active.carousel-item", this._element);
            if (!t)
                return;
            const e = Number.parseInt(t.getAttribute("data-bs-interval"), 10);
            e ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval,
            this._config.interval = e) : this._config.interval = this._config.defaultInterval || this._config.interval
        }
        _slide(t, e) {
            const s = this._directionToOrder(t)
              , i = U.findOne(".active.carousel-item", this._element)
              , n = this._getItemIndex(i)
              , o = e || this._getItemByOrder(s, i)
              , r = this._getItemIndex(o)
              , l = Boolean(this._interval)
              , c = s === z
              , d = c ? "carousel-item-start" : "carousel-item-end"
              , u = c ? "carousel-item-next" : "carousel-item-prev"
              , g = this._orderToDirection(s);
            if (o && o.classList.contains("active"))
                this._isSliding = !1;
            else if (!this._triggerSlideEvent(o, g).defaultPrevented && i && o) {
                if (this._isSliding = !0,
                l && this.pause(),
                this._setActiveIndicatorElement(o),
                this._activeElement = o,
                this._element.classList.contains("slide")) {
                    o.classList.add(u),
                    m(o),
                    i.classList.add(d),
                    o.classList.add(d);
                    const t = a(i);
                    P.one(i, "transitionend", () => {
                        o.classList.remove(d, u),
                        o.classList.add("active"),
                        i.classList.remove("active", u, d),
                        this._isSliding = !1,
                        setTimeout( () => {
                            P.trigger(this._element, "slid.bs.carousel", {
                                relatedTarget: o,
                                direction: g,
                                from: n,
                                to: r
                            })
                        }
                        , 0)
                    }
                    ),
                    h(i, t)
                } else
                    i.classList.remove("active"),
                    o.classList.add("active"),
                    this._isSliding = !1,
                    P.trigger(this._element, "slid.bs.carousel", {
                        relatedTarget: o,
                        direction: g,
                        from: n,
                        to: r
                    });
                l && this.cycle()
            }
        }
        _directionToOrder(t) {
            return [Q, q].includes(t) ? b() ? t === Q ? Y : z : t === Q ? z : Y : t
        }
        _orderToDirection(t) {
            return [z, Y].includes(t) ? b() ? t === z ? q : Q : t === z ? Q : q : t
        }
        static carouselInterface(t, e) {
            let s = w.get(t, "bs.carousel")
              , i = {
                ...F,
                ...$.getDataAttributes(t)
            };
            "object" == typeof e && (i = {
                ...i,
                ...e
            });
            const n = "string" == typeof e ? e : i.slide;
            if (s || (s = new X(t,i)),
            "number" == typeof e)
                s.to(e);
            else if ("string" == typeof n) {
                if (void 0 === s[n])
                    throw new TypeError(`No method named "${n}"`);
                s[n]()
            } else
                i.interval && i.ride && (s.pause(),
                s.cycle())
        }
        static jQueryInterface(t) {
            return this.each((function() {
                X.carouselInterface(this, t)
            }
            ))
        }
        static dataApiClickHandler(t) {
            const e = r(this);
            if (!e || !e.classList.contains("carousel"))
                return;
            const s = {
                ...$.getDataAttributes(e),
                ...$.getDataAttributes(this)
            }
              , i = this.getAttribute("data-bs-slide-to");
            i && (s.interval = !1),
            X.carouselInterface(e, s),
            i && w.get(e, "bs.carousel").to(i),
            t.preventDefault()
        }
    }
    P.on(document, "click.bs.carousel.data-api", "[data-bs-slide], [data-bs-slide-to]", X.dataApiClickHandler),
    P.on(window, "load.bs.carousel.data-api", () => {
        const t = U.find('[data-bs-ride="carousel"]');
        for (let e = 0, s = t.length; e < s; e++)
            X.carouselInterface(t[e], w.get(t[e], "bs.carousel"))
    }
    ),
    v("carousel", X);
    const V = {
        toggle: !0,
        parent: ""
    }
      , G = {
        toggle: "boolean",
        parent: "(string|element)"
    };
    class Z extends M {
        constructor(t, e) {
            super(t),
            this._isTransitioning = !1,
            this._config = this._getConfig(e),
            this._triggerArray = U.find(`[data-bs-toggle="collapse"][href="#${this._element.id}"],[data-bs-toggle="collapse"][data-bs-target="#${this._element.id}"]`);
            const s = U.find('[data-bs-toggle="collapse"]');
            for (let t = 0, e = s.length; t < e; t++) {
                const e = s[t]
                  , i = o(e)
                  , n = U.find(i).filter(t => t === this._element);
                null !== i && n.length && (this._selector = i,
                this._triggerArray.push(e))
            }
            this._parent = this._config.parent ? this._getParent() : null,
            this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray),
            this._config.toggle && this.toggle()
        }
        static get Default() {
            return V
        }
        static get DATA_KEY() {
            return "bs.collapse"
        }
        toggle() {
            this._element.classList.contains("show") ? this.hide() : this.show()
        }
        show() {
            if (this._isTransitioning || this._element.classList.contains("show"))
                return;
            let t, e;
            this._parent && (t = U.find(".show, .collapsing", this._parent).filter(t => "string" == typeof this._config.parent ? t.getAttribute("data-bs-parent") === this._config.parent : t.classList.contains("collapse")),
            0 === t.length && (t = null));
            const s = U.findOne(this._selector);
            if (t) {
                const i = t.find(t => s !== t);
                if (e = i ? w.get(i, "bs.collapse") : null,
                e && e._isTransitioning)
                    return
            }
            if (P.trigger(this._element, "show.bs.collapse").defaultPrevented)
                return;
            t && t.forEach(t => {
                s !== t && Z.collapseInterface(t, "hide"),
                e || w.set(t, "bs.collapse", null)
            }
            );
            const i = this._getDimension();
            this._element.classList.remove("collapse"),
            this._element.classList.add("collapsing"),
            this._element.style[i] = 0,
            this._triggerArray.length && this._triggerArray.forEach(t => {
                t.classList.remove("collapsed"),
                t.setAttribute("aria-expanded", !0)
            }
            ),
            this.setTransitioning(!0);
            const n = "scroll" + (i[0].toUpperCase() + i.slice(1))
              , o = a(this._element);
            P.one(this._element, "transitionend", () => {
                this._element.classList.remove("collapsing"),
                this._element.classList.add("collapse", "show"),
                this._element.style[i] = "",
                this.setTransitioning(!1),
                P.trigger(this._element, "shown.bs.collapse")
            }
            ),
            h(this._element, o),
            this._element.style[i] = this._element[n] + "px"
        }
        hide() {
            if (this._isTransitioning || !this._element.classList.contains("show"))
                return;
            if (P.trigger(this._element, "hide.bs.collapse").defaultPrevented)
                return;
            const t = this._getDimension();
            this._element.style[t] = this._element.getBoundingClientRect()[t] + "px",
            m(this._element),
            this._element.classList.add("collapsing"),
            this._element.classList.remove("collapse", "show");
            const e = this._triggerArray.length;
            if (e > 0)
                for (let t = 0; t < e; t++) {
                    const e = this._triggerArray[t]
                      , s = r(e);
                    s && !s.classList.contains("show") && (e.classList.add("collapsed"),
                    e.setAttribute("aria-expanded", !1))
                }
            this.setTransitioning(!0),
            this._element.style[t] = "";
            const s = a(this._element);
            P.one(this._element, "transitionend", () => {
                this.setTransitioning(!1),
                this._element.classList.remove("collapsing"),
                this._element.classList.add("collapse"),
                P.trigger(this._element, "hidden.bs.collapse")
            }
            ),
            h(this._element, s)
        }
        setTransitioning(t) {
            this._isTransitioning = t
        }
        dispose() {
            super.dispose(),
            this._config = null,
            this._parent = null,
            this._triggerArray = null,
            this._isTransitioning = null
        }
        _getConfig(t) {
            return (t = {
                ...V,
                ...t
            }).toggle = Boolean(t.toggle),
            d("collapse", t, G),
            t
        }
        _getDimension() {
            return this._element.classList.contains("width") ? "width" : "height"
        }
        _getParent() {
            let {parent: t} = this._config;
            c(t) ? void 0 === t.jquery && void 0 === t[0] || (t = t[0]) : t = U.findOne(t);
            const e = `[data-bs-toggle="collapse"][data-bs-parent="${t}"]`;
            return U.find(e, t).forEach(t => {
                const e = r(t);
                this._addAriaAndCollapsedClass(e, [t])
            }
            ),
            t
        }
        _addAriaAndCollapsedClass(t, e) {
            if (!t || !e.length)
                return;
            const s = t.classList.contains("show");
            e.forEach(t => {
                s ? t.classList.remove("collapsed") : t.classList.add("collapsed"),
                t.setAttribute("aria-expanded", s)
            }
            )
        }
        static collapseInterface(t, e) {
            let s = w.get(t, "bs.collapse");
            const i = {
                ...V,
                ...$.getDataAttributes(t),
                ..."object" == typeof e && e ? e : {}
            };
            if (!s && i.toggle && "string" == typeof e && /show|hide/.test(e) && (i.toggle = !1),
            s || (s = new Z(t,i)),
            "string" == typeof e) {
                if (void 0 === s[e])
                    throw new TypeError(`No method named "${e}"`);
                s[e]()
            }
        }
        static jQueryInterface(t) {
            return this.each((function() {
                Z.collapseInterface(this, t)
            }
            ))
        }
    }
    P.on(document, "click.bs.collapse.data-api", '[data-bs-toggle="collapse"]', (function(t) {
        ("A" === t.target.tagName || t.delegateTarget && "A" === t.delegateTarget.tagName) && t.preventDefault();
        const e = $.getDataAttributes(this)
          , s = o(this);
        U.find(s).forEach(t => {
            const s = w.get(t, "bs.collapse");
            let i;
            s ? (null === s._parent && "string" == typeof e.parent && (s._config.parent = e.parent,
            s._parent = s._getParent()),
            i = "toggle") : i = e,
            Z.collapseInterface(t, i)
        }
        )
    }
    )),
    v("collapse", Z);
    const J = new RegExp("ArrowUp|ArrowDown|Escape")
      , tt = b() ? "top-end" : "top-start"
      , et = b() ? "top-start" : "top-end"
      , st = b() ? "bottom-end" : "bottom-start"
      , it = b() ? "bottom-start" : "bottom-end"
      , nt = b() ? "left-start" : "right-start"
      , ot = b() ? "right-start" : "left-start"
      , rt = {
        offset: [0, 2],
        boundary: "clippingParents",
        reference: "toggle",
        display: "dynamic",
        popperConfig: null
    }
      , at = {
        offset: "(array|string|function)",
        boundary: "(string|element)",
        reference: "(string|element|object)",
        display: "string",
        popperConfig: "(null|object|function)"
    };
    class lt extends M {
        constructor(t, e) {
            super(t),
            this._popper = null,
            this._config = this._getConfig(e),
            this._menu = this._getMenuElement(),
            this._inNavbar = this._detectNavbar(),
            this._addEventListeners()
        }
        static get Default() {
            return rt
        }
        static get DefaultType() {
            return at
        }
        static get DATA_KEY() {
            return "bs.dropdown"
        }
        toggle() {
            if (this._element.disabled || this._element.classList.contains("disabled"))
                return;
            const t = this._element.classList.contains("show");
            lt.clearMenus(),
            t || this.show()
        }
        show() {
            if (this._element.disabled || this._element.classList.contains("disabled") || this._menu.classList.contains("show"))
                return;
            const t = lt.getParentFromElement(this._element)
              , e = {
                relatedTarget: this._element
            };
            if (!P.trigger(this._element, "show.bs.dropdown", e).defaultPrevented) {
                if (this._inNavbar)
                    $.setDataAttribute(this._menu, "popper", "none");
                else {
                    if (void 0 === s)
                        throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");
                    let e = this._element;
                    "parent" === this._config.reference ? e = t : c(this._config.reference) ? (e = this._config.reference,
                    void 0 !== this._config.reference.jquery && (e = this._config.reference[0])) : "object" == typeof this._config.reference && (e = this._config.reference);
                    const i = this._getPopperConfig()
                      , n = i.modifiers.find(t => "applyStyles" === t.name && !1 === t.enabled);
                    this._popper = s.createPopper(e, this._menu, i),
                    n && $.setDataAttribute(this._menu, "popper", "static")
                }
                "ontouchstart"in document.documentElement && !t.closest(".navbar-nav") && [].concat(...document.body.children).forEach(t => P.on(t, "mouseover", null, (function() {}
                ))),
                this._element.focus(),
                this._element.setAttribute("aria-expanded", !0),
                this._menu.classList.toggle("show"),
                this._element.classList.toggle("show"),
                P.trigger(this._element, "shown.bs.dropdown", e)
            }
        }
        hide() {
            if (this._element.disabled || this._element.classList.contains("disabled") || !this._menu.classList.contains("show"))
                return;
            const t = {
                relatedTarget: this._element
            };
            P.trigger(this._element, "hide.bs.dropdown", t).defaultPrevented || (this._popper && this._popper.destroy(),
            this._menu.classList.toggle("show"),
            this._element.classList.toggle("show"),
            $.removeDataAttribute(this._menu, "popper"),
            P.trigger(this._element, "hidden.bs.dropdown", t))
        }
        dispose() {
            P.off(this._element, ".bs.dropdown"),
            this._menu = null,
            this._popper && (this._popper.destroy(),
            this._popper = null),
            super.dispose()
        }
        update() {
            this._inNavbar = this._detectNavbar(),
            this._popper && this._popper.update()
        }
        _addEventListeners() {
            P.on(this._element, "click.bs.dropdown", t => {
                t.preventDefault(),
                this.toggle()
            }
            )
        }
        _getConfig(t) {
            if (t = {
                ...this.constructor.Default,
                ...$.getDataAttributes(this._element),
                ...t
            },
            d("dropdown", t, this.constructor.DefaultType),
            "object" == typeof t.reference && !c(t.reference) && "function" != typeof t.reference.getBoundingClientRect)
                throw new TypeError("dropdown".toUpperCase() + ': Option "reference" provided type "object" without a required "getBoundingClientRect" method.');
            return t
        }
        _getMenuElement() {
            return U.next(this._element, ".dropdown-menu")[0]
        }
        _getPlacement() {
            const t = this._element.parentNode;
            if (t.classList.contains("dropend"))
                return nt;
            if (t.classList.contains("dropstart"))
                return ot;
            const e = "end" === getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();
            return t.classList.contains("dropup") ? e ? et : tt : e ? it : st
        }
        _detectNavbar() {
            return null !== this._element.closest(".navbar")
        }
        _getOffset() {
            const {offset: t} = this._config;
            return "string" == typeof t ? t.split(",").map(t => Number.parseInt(t, 10)) : "function" == typeof t ? e => t(e, this._element) : t
        }
        _getPopperConfig() {
            const t = {
                placement: this._getPlacement(),
                modifiers: [{
                    name: "preventOverflow",
                    options: {
                        boundary: this._config.boundary
                    }
                }, {
                    name: "offset",
                    options: {
                        offset: this._getOffset()
                    }
                }]
            };
            return "static" === this._config.display && (t.modifiers = [{
                name: "applyStyles",
                enabled: !1
            }]),
            {
                ...t,
                ..."function" == typeof this._config.popperConfig ? this._config.popperConfig(t) : this._config.popperConfig
            }
        }
        static dropdownInterface(t, e) {
            let s = w.get(t, "bs.dropdown");
            if (s || (s = new lt(t,"object" == typeof e ? e : null)),
            "string" == typeof e) {
                if (void 0 === s[e])
                    throw new TypeError(`No method named "${e}"`);
                s[e]()
            }
        }
        static jQueryInterface(t) {
            return this.each((function() {
                lt.dropdownInterface(this, t)
            }
            ))
        }
        static clearMenus(t) {
            if (t) {
                if (2 === t.button || "keyup" === t.type && "Tab" !== t.key)
                    return;
                if (/input|select|textarea|form/i.test(t.target.tagName))
                    return
            }
            const e = U.find('[data-bs-toggle="dropdown"]');
            for (let s = 0, i = e.length; s < i; s++) {
                const i = w.get(e[s], "bs.dropdown")
                  , n = {
                    relatedTarget: e[s]
                };
                if (t && "click" === t.type && (n.clickEvent = t),
                !i)
                    continue;
                const o = i._menu;
                if (e[s].classList.contains("show")) {
                    if (t) {
                        if ([i._element].some(e => t.composedPath().includes(e)))
                            continue;
                        if ("keyup" === t.type && "Tab" === t.key && o.contains(t.target))
                            continue
                    }
                    P.trigger(e[s], "hide.bs.dropdown", n).defaultPrevented || ("ontouchstart"in document.documentElement && [].concat(...document.body.children).forEach(t => P.off(t, "mouseover", null, (function() {}
                    ))),
                    e[s].setAttribute("aria-expanded", "false"),
                    i._popper && i._popper.destroy(),
                    o.classList.remove("show"),
                    e[s].classList.remove("show"),
                    $.removeDataAttribute(o, "popper"),
                    P.trigger(e[s], "hidden.bs.dropdown", n))
                }
            }
        }
        static getParentFromElement(t) {
            return r(t) || t.parentNode
        }
        static dataApiKeydownHandler(t) {
            if (/input|textarea/i.test(t.target.tagName) ? "Space" === t.key || "Escape" !== t.key && ("ArrowDown" !== t.key && "ArrowUp" !== t.key || t.target.closest(".dropdown-menu")) : !J.test(t.key))
                return;
            if (t.preventDefault(),
            t.stopPropagation(),
            this.disabled || this.classList.contains("disabled"))
                return;
            const e = lt.getParentFromElement(this)
              , s = this.classList.contains("show");
            if ("Escape" === t.key)
                return (this.matches('[data-bs-toggle="dropdown"]') ? this : U.prev(this, '[data-bs-toggle="dropdown"]')[0]).focus(),
                void lt.clearMenus();
            if (!s && ("ArrowUp" === t.key || "ArrowDown" === t.key))
                return void (this.matches('[data-bs-toggle="dropdown"]') ? this : U.prev(this, '[data-bs-toggle="dropdown"]')[0]).click();
            if (!s || "Space" === t.key)
                return void lt.clearMenus();
            const i = U.find(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", e).filter(u);
            if (!i.length)
                return;
            let n = i.indexOf(t.target);
            "ArrowUp" === t.key && n > 0 && n--,
            "ArrowDown" === t.key && n < i.length - 1 && n++,
            n = -1 === n ? 0 : n,
            i[n].focus()
        }
    }
    P.on(document, "keydown.bs.dropdown.data-api", '[data-bs-toggle="dropdown"]', lt.dataApiKeydownHandler),
    P.on(document, "keydown.bs.dropdown.data-api", ".dropdown-menu", lt.dataApiKeydownHandler),
    P.on(document, "click.bs.dropdown.data-api", lt.clearMenus),
    P.on(document, "keyup.bs.dropdown.data-api", lt.clearMenus),
    P.on(document, "click.bs.dropdown.data-api", '[data-bs-toggle="dropdown"]', (function(t) {
        t.preventDefault(),
        lt.dropdownInterface(this)
    }
    )),
    v("dropdown", lt);
    const ct = {
        backdrop: !0,
        keyboard: !0,
        focus: !0
    }
      , ht = {
        backdrop: "(boolean|string)",
        keyboard: "boolean",
        focus: "boolean"
    };
    class dt extends M {
        constructor(t, e) {
            super(t),
            this._config = this._getConfig(e),
            this._dialog = U.findOne(".modal-dialog", this._element),
            this._backdrop = null,
            this._isShown = !1,
            this._isBodyOverflowing = !1,
            this._ignoreBackdropClick = !1,
            this._isTransitioning = !1,
            this._scrollbarWidth = 0
        }
        static get Default() {
            return ct
        }
        static get DATA_KEY() {
            return "bs.modal"
        }
        toggle(t) {
            return this._isShown ? this.hide() : this.show(t)
        }
        show(t) {
            if (this._isShown || this._isTransitioning)
                return;
            this._isAnimated() && (this._isTransitioning = !0);
            const e = P.trigger(this._element, "show.bs.modal", {
                relatedTarget: t
            });
            this._isShown || e.defaultPrevented || (this._isShown = !0,
            this._checkScrollbar(),
            this._setScrollbar(),
            this._adjustDialog(),
            this._setEscapeEvent(),
            this._setResizeEvent(),
            P.on(this._element, "click.dismiss.bs.modal", '[data-bs-dismiss="modal"]', t => this.hide(t)),
            P.on(this._dialog, "mousedown.dismiss.bs.modal", () => {
                P.one(this._element, "mouseup.dismiss.bs.modal", t => {
                    t.target === this._element && (this._ignoreBackdropClick = !0)
                }
                )
            }
            ),
            this._showBackdrop( () => this._showElement(t)))
        }
        hide(t) {
            if (t && t.preventDefault(),
            !this._isShown || this._isTransitioning)
                return;
            if (P.trigger(this._element, "hide.bs.modal").defaultPrevented)
                return;
            this._isShown = !1;
            const e = this._isAnimated();
            if (e && (this._isTransitioning = !0),
            this._setEscapeEvent(),
            this._setResizeEvent(),
            P.off(document, "focusin.bs.modal"),
            this._element.classList.remove("show"),
            P.off(this._element, "click.dismiss.bs.modal"),
            P.off(this._dialog, "mousedown.dismiss.bs.modal"),
            e) {
                const t = a(this._element);
                P.one(this._element, "transitionend", t => this._hideModal(t)),
                h(this._element, t)
            } else
                this._hideModal()
        }
        dispose() {
            [window, this._element, this._dialog].forEach(t => P.off(t, ".bs.modal")),
            super.dispose(),
            P.off(document, "focusin.bs.modal"),
            this._config = null,
            this._dialog = null,
            this._backdrop = null,
            this._isShown = null,
            this._isBodyOverflowing = null,
            this._ignoreBackdropClick = null,
            this._isTransitioning = null,
            this._scrollbarWidth = null
        }
        handleUpdate() {
            this._adjustDialog()
        }
        _getConfig(t) {
            return t = {
                ...ct,
                ...t
            },
            d("modal", t, ht),
            t
        }
        _showElement(t) {
            const e = this._isAnimated()
              , s = U.findOne(".modal-body", this._dialog);
            this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element),
            this._element.style.display = "block",
            this._element.removeAttribute("aria-hidden"),
            this._element.setAttribute("aria-modal", !0),
            this._element.setAttribute("role", "dialog"),
            this._element.scrollTop = 0,
            s && (s.scrollTop = 0),
            e && m(this._element),
            this._element.classList.add("show"),
            this._config.focus && this._enforceFocus();
            const i = () => {
                this._config.focus && this._element.focus(),
                this._isTransitioning = !1,
                P.trigger(this._element, "shown.bs.modal", {
                    relatedTarget: t
                })
            }
            ;
            if (e) {
                const t = a(this._dialog);
                P.one(this._dialog, "transitionend", i),
                h(this._dialog, t)
            } else
                i()
        }
        _enforceFocus() {
            P.off(document, "focusin.bs.modal"),
            P.on(document, "focusin.bs.modal", t => {
                document === t.target || this._element === t.target || this._element.contains(t.target) || this._element.focus()
            }
            )
        }
        _setEscapeEvent() {
            this._isShown ? P.on(this._element, "keydown.dismiss.bs.modal", t => {
                this._config.keyboard && "Escape" === t.key ? (t.preventDefault(),
                this.hide()) : this._config.keyboard || "Escape" !== t.key || this._triggerBackdropTransition()
            }
            ) : P.off(this._element, "keydown.dismiss.bs.modal")
        }
        _setResizeEvent() {
            this._isShown ? P.on(window, "resize.bs.modal", () => this._adjustDialog()) : P.off(window, "resize.bs.modal")
        }
        _hideModal() {
            this._element.style.display = "none",
            this._element.setAttribute("aria-hidden", !0),
            this._element.removeAttribute("aria-modal"),
            this._element.removeAttribute("role"),
            this._isTransitioning = !1,
            this._showBackdrop( () => {
                document.body.classList.remove("modal-open"),
                this._resetAdjustments(),
                this._resetScrollbar(),
                P.trigger(this._element, "hidden.bs.modal")
            }
            )
        }
        _removeBackdrop() {
            this._backdrop.parentNode.removeChild(this._backdrop),
            this._backdrop = null
        }
        _showBackdrop(t) {
            const e = this._isAnimated();
            if (this._isShown && this._config.backdrop) {
                if (this._backdrop = document.createElement("div"),
                this._backdrop.className = "modal-backdrop",
                e && this._backdrop.classList.add("fade"),
                document.body.appendChild(this._backdrop),
                P.on(this._element, "click.dismiss.bs.modal", t => {
                    this._ignoreBackdropClick ? this._ignoreBackdropClick = !1 : t.target === t.currentTarget && ("static" === this._config.backdrop ? this._triggerBackdropTransition() : this.hide())
                }
                ),
                e && m(this._backdrop),
                this._backdrop.classList.add("show"),
                !e)
                    return void t();
                const s = a(this._backdrop);
                P.one(this._backdrop, "transitionend", t),
                h(this._backdrop, s)
            } else if (!this._isShown && this._backdrop) {
                this._backdrop.classList.remove("show");
                const s = () => {
                    this._removeBackdrop(),
                    t()
                }
                ;
                if (e) {
                    const t = a(this._backdrop);
                    P.one(this._backdrop, "transitionend", s),
                    h(this._backdrop, t)
                } else
                    s()
            } else
                t()
        }
        _isAnimated() {
            return this._element.classList.contains("fade")
        }
        _triggerBackdropTransition() {
            if (P.trigger(this._element, "hidePrevented.bs.modal").defaultPrevented)
                return;
            const t = this._element.scrollHeight > document.documentElement.clientHeight;
            t || (this._element.style.overflowY = "hidden"),
            this._element.classList.add("modal-static");
            const e = a(this._dialog);
            P.off(this._element, "transitionend"),
            P.one(this._element, "transitionend", () => {
                this._element.classList.remove("modal-static"),
                t || (P.one(this._element, "transitionend", () => {
                    this._element.style.overflowY = ""
                }
                ),
                h(this._element, e))
            }
            ),
            h(this._element, e),
            this._element.focus()
        }
        _adjustDialog() {
            const t = this._element.scrollHeight > document.documentElement.clientHeight;
            (!this._isBodyOverflowing && t && !b() || this._isBodyOverflowing && !t && b()) && (this._element.style.paddingLeft = this._scrollbarWidth + "px"),
            (this._isBodyOverflowing && !t && !b() || !this._isBodyOverflowing && t && b()) && (this._element.style.paddingRight = this._scrollbarWidth + "px")
        }
        _resetAdjustments() {
            this._element.style.paddingLeft = "",
            this._element.style.paddingRight = ""
        }
        _checkScrollbar() {
            const t = document.body.getBoundingClientRect();
            this._isBodyOverflowing = Math.round(t.left + t.right) < window.innerWidth,
            this._scrollbarWidth = this._getScrollbarWidth()
        }
        _setScrollbar() {
            this._isBodyOverflowing && (this._setElementAttributes(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top", "paddingRight", t => t + this._scrollbarWidth),
            this._setElementAttributes(".sticky-top", "marginRight", t => t - this._scrollbarWidth),
            this._setElementAttributes("body", "paddingRight", t => t + this._scrollbarWidth)),
            document.body.classList.add("modal-open")
        }
        _setElementAttributes(t, e, s) {
            U.find(t).forEach(t => {
                if (t !== document.body && window.innerWidth > t.clientWidth + this._scrollbarWidth)
                    return;
                const i = t.style[e]
                  , n = window.getComputedStyle(t)[e];
                $.setDataAttribute(t, e, i),
                t.style[e] = s(Number.parseFloat(n)) + "px"
            }
            )
        }
        _resetScrollbar() {
            this._resetElementAttributes(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top", "paddingRight"),
            this._resetElementAttributes(".sticky-top", "marginRight"),
            this._resetElementAttributes("body", "paddingRight")
        }
        _resetElementAttributes(t, e) {
            U.find(t).forEach(t => {
                const s = $.getDataAttribute(t, e);
                void 0 === s && t === document.body ? t.style[e] = "" : ($.removeDataAttribute(t, e),
                t.style[e] = s)
            }
            )
        }
        _getScrollbarWidth() {
            const t = document.createElement("div");
            t.className = "modal-scrollbar-measure",
            document.body.appendChild(t);
            const e = t.getBoundingClientRect().width - t.clientWidth;
            return document.body.removeChild(t),
            e
        }
        static jQueryInterface(t, e) {
            return this.each((function() {
                let s = w.get(this, "bs.modal");
                const i = {
                    ...ct,
                    ...$.getDataAttributes(this),
                    ..."object" == typeof t && t ? t : {}
                };
                if (s || (s = new dt(this,i)),
                "string" == typeof t) {
                    if (void 0 === s[t])
                        throw new TypeError(`No method named "${t}"`);
                    s[t](e)
                }
            }
            ))
        }
    }
    P.on(document, "click.bs.modal.data-api", '[data-bs-toggle="modal"]', (function(t) {
        const e = r(this);
        "A" !== this.tagName && "AREA" !== this.tagName || t.preventDefault(),
        P.one(e, "show.bs.modal", t => {
            t.defaultPrevented || P.one(e, "hidden.bs.modal", () => {
                u(this) && this.focus()
            }
            )
        }
        );
        let s = w.get(e, "bs.modal");
        if (!s) {
            const t = {
                ...$.getDataAttributes(e),
                ...$.getDataAttributes(this)
            };
            s = new dt(e,t)
        }
        s.toggle(this)
    }
    )),
    v("modal", dt);
    const ut = () => {
        const t = document.documentElement.clientWidth;
        return Math.abs(window.innerWidth - t)
    }
      , gt = (t, e, s) => {
        const i = ut();
        U.find(t).forEach(t => {
            if (t !== document.body && window.innerWidth > t.clientWidth + i)
                return;
            const n = t.style[e]
              , o = window.getComputedStyle(t)[e];
            $.setDataAttribute(t, e, n),
            t.style[e] = s(Number.parseFloat(o)) + "px"
        }
        )
    }
      , ft = (t, e) => {
        U.find(t).forEach(t => {
            const s = $.getDataAttribute(t, e);
            void 0 === s && t === document.body ? t.style.removeProperty(e) : ($.removeDataAttribute(t, e),
            t.style[e] = s)
        }
        )
    }
      , pt = {
        backdrop: !0,
        keyboard: !0,
        scroll: !1
    }
      , mt = {
        backdrop: "boolean",
        keyboard: "boolean",
        scroll: "boolean"
    };
    class _t extends M {
        constructor(t, e) {
            super(t),
            this._config = this._getConfig(e),
            this._isShown = !1,
            this._addEventListeners()
        }
        static get Default() {
            return pt
        }
        static get DATA_KEY() {
            return "bs.offcanvas"
        }
        toggle(t) {
            return this._isShown ? this.hide() : this.show(t)
        }
        show(t) {
            this._isShown || P.trigger(this._element, "show.bs.offcanvas", {
                relatedTarget: t
            }).defaultPrevented || (this._isShown = !0,
            this._element.style.visibility = "visible",
            this._config.backdrop && document.body.classList.add("offcanvas-backdrop"),
            this._config.scroll || ( (t=ut()) => {
                document.body.style.overflow = "hidden",
                gt(".fixed-top, .fixed-bottom, .is-fixed", "paddingRight", e => e + t),
                gt(".sticky-top", "marginRight", e => e - t),
                gt("body", "paddingRight", e => e + t)
            }
            )(),
            this._element.classList.add("offcanvas-toggling"),
            this._element.removeAttribute("aria-hidden"),
            this._element.setAttribute("aria-modal", !0),
            this._element.setAttribute("role", "dialog"),
            this._element.classList.add("show"),
            setTimeout( () => {
                this._element.classList.remove("offcanvas-toggling"),
                P.trigger(this._element, "shown.bs.offcanvas", {
                    relatedTarget: t
                }),
                this._enforceFocusOnElement(this._element)
            }
            , a(this._element)))
        }
        hide() {
            this._isShown && (P.trigger(this._element, "hide.bs.offcanvas").defaultPrevented || (this._element.classList.add("offcanvas-toggling"),
            P.off(document, "focusin.bs.offcanvas"),
            this._element.blur(),
            this._isShown = !1,
            this._element.classList.remove("show"),
            setTimeout( () => {
                this._element.setAttribute("aria-hidden", !0),
                this._element.removeAttribute("aria-modal"),
                this._element.removeAttribute("role"),
                this._element.style.visibility = "hidden",
                this._config.backdrop && document.body.classList.remove("offcanvas-backdrop"),
                this._config.scroll || (document.body.style.overflow = "auto",
                ft(".fixed-top, .fixed-bottom, .is-fixed", "paddingRight"),
                ft(".sticky-top", "marginRight"),
                ft("body", "paddingRight")),
                P.trigger(this._element, "hidden.bs.offcanvas"),
                this._element.classList.remove("offcanvas-toggling")
            }
            , a(this._element))))
        }
        _getConfig(t) {
            return t = {
                ...pt,
                ...$.getDataAttributes(this._element),
                ..."object" == typeof t ? t : {}
            },
            d("offcanvas", t, mt),
            t
        }
        _enforceFocusOnElement(t) {
            P.off(document, "focusin.bs.offcanvas"),
            P.on(document, "focusin.bs.offcanvas", e => {
                document === e.target || t === e.target || t.contains(e.target) || t.focus()
            }
            ),
            t.focus()
        }
        _addEventListeners() {
            P.on(this._element, "click.dismiss.bs.offcanvas", '[data-bs-dismiss="offcanvas"]', () => this.hide()),
            P.on(document, "keydown", t => {
                this._config.keyboard && "Escape" === t.key && this.hide()
            }
            ),
            P.on(document, "click.bs.offcanvas.data-api", t => {
                const e = U.findOne(o(t.target));
                this._element.contains(t.target) || e === this._element || this.hide()
            }
            )
        }
        static jQueryInterface(t) {
            return this.each((function() {
                const e = w.get(this, "bs.offcanvas") || new _t(this,"object" == typeof t ? t : {});
                if ("string" == typeof t) {
                    if (void 0 === e[t] || t.startsWith("_") || "constructor" === t)
                        throw new TypeError(`No method named "${t}"`);
                    e[t](this)
                }
            }
            ))
        }
    }
    P.on(document, "click.bs.offcanvas.data-api", '[data-bs-toggle="offcanvas"]', (function(t) {
        const e = r(this);
        if (["A", "AREA"].includes(this.tagName) && t.preventDefault(),
        g(this))
            return;
        P.one(e, "hidden.bs.offcanvas", () => {
            u(this) && this.focus()
        }
        );
        const s = U.findOne(".offcanvas.show, .offcanvas-toggling");
        s && s !== e || (w.get(e, "bs.offcanvas") || new _t(e)).toggle(this)
    }
    )),
    P.on(window, "load.bs.offcanvas.data-api", () => {
        U.find(".offcanvas.show").forEach(t => (w.get(t, "bs.offcanvas") || new _t(t)).show())
    }
    ),
    v("offcanvas", _t);
    const bt = new Set(["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"])
      , vt = /^(?:(?:https?|mailto|ftp|tel|file):|[^#&/:?]*(?:[#/?]|$))/i
      , yt = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i
      , wt = (t, e) => {
        const s = t.nodeName.toLowerCase();
        if (e.includes(s))
            return !bt.has(s) || Boolean(vt.test(t.nodeValue) || yt.test(t.nodeValue));
        const i = e.filter(t => t instanceof RegExp);
        for (let t = 0, e = i.length; t < e; t++)
            if (i[t].test(s))
                return !0;
        return !1
    }
    ;
    function Et(t, e, s) {
        if (!t.length)
            return t;
        if (s && "function" == typeof s)
            return s(t);
        const i = (new window.DOMParser).parseFromString(t, "text/html")
          , n = Object.keys(e)
          , o = [].concat(...i.body.querySelectorAll("*"));
        for (let t = 0, s = o.length; t < s; t++) {
            const s = o[t]
              , i = s.nodeName.toLowerCase();
            if (!n.includes(i)) {
                s.parentNode.removeChild(s);
                continue
            }
            const r = [].concat(...s.attributes)
              , a = [].concat(e["*"] || [], e[i] || []);
            r.forEach(t => {
                wt(t, a) || s.removeAttribute(t.nodeName)
            }
            )
        }
        return i.body.innerHTML
    }
    const Tt = new RegExp("(^|\\s)bs-tooltip\\S+","g")
      , At = new Set(["sanitize", "allowList", "sanitizeFn"])
      , Lt = {
        animation: "boolean",
        template: "string",
        title: "(string|element|function)",
        trigger: "string",
        delay: "(number|object)",
        html: "boolean",
        selector: "(string|boolean)",
        placement: "(string|function)",
        offset: "(array|string|function)",
        container: "(string|element|boolean)",
        fallbackPlacements: "array",
        boundary: "(string|element)",
        customClass: "(string|function)",
        sanitize: "boolean",
        sanitizeFn: "(null|function)",
        allowList: "object",
        popperConfig: "(null|object|function)"
    }
      , kt = {
        AUTO: "auto",
        TOP: "top",
        RIGHT: b() ? "left" : "right",
        BOTTOM: "bottom",
        LEFT: b() ? "right" : "left"
    }
      , Ct = {
        animation: !0,
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        selector: !1,
        placement: "top",
        offset: [0, 0],
        container: !1,
        fallbackPlacements: ["top", "right", "bottom", "left"],
        boundary: "clippingParents",
        customClass: "",
        sanitize: !0,
        sanitizeFn: null,
        allowList: {
            "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
            a: ["target", "href", "title", "rel"],
            area: [],
            b: [],
            br: [],
            col: [],
            code: [],
            div: [],
            em: [],
            hr: [],
            h1: [],
            h2: [],
            h3: [],
            h4: [],
            h5: [],
            h6: [],
            i: [],
            img: ["src", "srcset", "alt", "title", "width", "height"],
            li: [],
            ol: [],
            p: [],
            pre: [],
            s: [],
            small: [],
            span: [],
            sub: [],
            sup: [],
            strong: [],
            u: [],
            ul: []
        },
        popperConfig: null
    }
      , Dt = {
        HIDE: "hide.bs.tooltip",
        HIDDEN: "hidden.bs.tooltip",
        SHOW: "show.bs.tooltip",
        SHOWN: "shown.bs.tooltip",
        INSERTED: "inserted.bs.tooltip",
        CLICK: "click.bs.tooltip",
        FOCUSIN: "focusin.bs.tooltip",
        FOCUSOUT: "focusout.bs.tooltip",
        MOUSEENTER: "mouseenter.bs.tooltip",
        MOUSELEAVE: "mouseleave.bs.tooltip"
    };
    class St extends M {
        constructor(t, e) {
            if (void 0 === s)
                throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");
            super(t),
            this._isEnabled = !0,
            this._timeout = 0,
            this._hoverState = "",
            this._activeTrigger = {},
            this._popper = null,
            this.config = this._getConfig(e),
            this.tip = null,
            this._setListeners()
        }
        static get Default() {
            return Ct
        }
        static get NAME() {
            return "tooltip"
        }
        static get DATA_KEY() {
            return "bs.tooltip"
        }
        static get Event() {
            return Dt
        }
        static get EVENT_KEY() {
            return ".bs.tooltip"
        }
        static get DefaultType() {
            return Lt
        }
        enable() {
            this._isEnabled = !0
        }
        disable() {
            this._isEnabled = !1
        }
        toggleEnabled() {
            this._isEnabled = !this._isEnabled
        }
        toggle(t) {
            if (this._isEnabled)
                if (t) {
                    const e = this._initializeOnDelegatedTarget(t);
                    e._activeTrigger.click = !e._activeTrigger.click,
                    e._isWithActiveTrigger() ? e._enter(null, e) : e._leave(null, e)
                } else {
                    if (this.getTipElement().classList.contains("show"))
                        return void this._leave(null, this);
                    this._enter(null, this)
                }
        }
        dispose() {
            clearTimeout(this._timeout),
            P.off(this._element, this.constructor.EVENT_KEY),
            P.off(this._element.closest(".modal"), "hide.bs.modal", this._hideModalHandler),
            this.tip && this.tip.parentNode && this.tip.parentNode.removeChild(this.tip),
            this._isEnabled = null,
            this._timeout = null,
            this._hoverState = null,
            this._activeTrigger = null,
            this._popper && this._popper.destroy(),
            this._popper = null,
            this.config = null,
            this.tip = null,
            super.dispose()
        }
        show() {
            if ("none" === this._element.style.display)
                throw new Error("Please use show on visible elements");
            if (!this.isWithContent() || !this._isEnabled)
                return;
            const t = P.trigger(this._element, this.constructor.Event.SHOW)
              , e = f(this._element)
              , n = null === e ? this._element.ownerDocument.documentElement.contains(this._element) : e.contains(this._element);
            if (t.defaultPrevented || !n)
                return;
            const o = this.getTipElement()
              , r = i(this.constructor.NAME);
            o.setAttribute("id", r),
            this._element.setAttribute("aria-describedby", r),
            this.setContent(),
            this.config.animation && o.classList.add("fade");
            const l = "function" == typeof this.config.placement ? this.config.placement.call(this, o, this._element) : this.config.placement
              , c = this._getAttachment(l);
            this._addAttachmentClass(c);
            const d = this._getContainer();
            w.set(o, this.constructor.DATA_KEY, this),
            this._element.ownerDocument.documentElement.contains(this.tip) || (d.appendChild(o),
            P.trigger(this._element, this.constructor.Event.INSERTED)),
            this._popper ? this._popper.update() : this._popper = s.createPopper(this._element, o, this._getPopperConfig(c)),
            o.classList.add("show");
            const u = "function" == typeof this.config.customClass ? this.config.customClass() : this.config.customClass;
            u && o.classList.add(...u.split(" ")),
            "ontouchstart"in document.documentElement && [].concat(...document.body.children).forEach(t => {
                P.on(t, "mouseover", (function() {}
                ))
            }
            );
            const g = () => {
                const t = this._hoverState;
                this._hoverState = null,
                P.trigger(this._element, this.constructor.Event.SHOWN),
                "out" === t && this._leave(null, this)
            }
            ;
            if (this.tip.classList.contains("fade")) {
                const t = a(this.tip);
                P.one(this.tip, "transitionend", g),
                h(this.tip, t)
            } else
                g()
        }
        hide() {
            if (!this._popper)
                return;
            const t = this.getTipElement()
              , e = () => {
                this._isWithActiveTrigger() || ("show" !== this._hoverState && t.parentNode && t.parentNode.removeChild(t),
                this._cleanTipClass(),
                this._element.removeAttribute("aria-describedby"),
                P.trigger(this._element, this.constructor.Event.HIDDEN),
                this._popper && (this._popper.destroy(),
                this._popper = null))
            }
            ;
            if (!P.trigger(this._element, this.constructor.Event.HIDE).defaultPrevented) {
                if (t.classList.remove("show"),
                "ontouchstart"in document.documentElement && [].concat(...document.body.children).forEach(t => P.off(t, "mouseover", p)),
                this._activeTrigger.click = !1,
                this._activeTrigger.focus = !1,
                this._activeTrigger.hover = !1,
                this.tip.classList.contains("fade")) {
                    const s = a(t);
                    P.one(t, "transitionend", e),
                    h(t, s)
                } else
                    e();
                this._hoverState = ""
            }
        }
        update() {
            null !== this._popper && this._popper.update()
        }
        isWithContent() {
            return Boolean(this.getTitle())
        }
        getTipElement() {
            if (this.tip)
                return this.tip;
            const t = document.createElement("div");
            return t.innerHTML = this.config.template,
            this.tip = t.children[0],
            this.tip
        }
        setContent() {
            const t = this.getTipElement();
            this.setElementContent(U.findOne(".tooltip-inner", t), this.getTitle()),
            t.classList.remove("fade", "show")
        }
        setElementContent(t, e) {
            if (null !== t)
                return "object" == typeof e && c(e) ? (e.jquery && (e = e[0]),
                void (this.config.html ? e.parentNode !== t && (t.innerHTML = "",
                t.appendChild(e)) : t.textContent = e.textContent)) : void (this.config.html ? (this.config.sanitize && (e = Et(e, this.config.allowList, this.config.sanitizeFn)),
                t.innerHTML = e) : t.textContent = e)
        }
        getTitle() {
            let t = this._element.getAttribute("data-bs-original-title");
            return t || (t = "function" == typeof this.config.title ? this.config.title.call(this._element) : this.config.title),
            t
        }
        updateAttachment(t) {
            return "right" === t ? "end" : "left" === t ? "start" : t
        }
        _initializeOnDelegatedTarget(t, e) {
            const s = this.constructor.DATA_KEY;
            return (e = e || w.get(t.delegateTarget, s)) || (e = new this.constructor(t.delegateTarget,this._getDelegateConfig()),
            w.set(t.delegateTarget, s, e)),
            e
        }
        _getOffset() {
            const {offset: t} = this.config;
            return "string" == typeof t ? t.split(",").map(t => Number.parseInt(t, 10)) : "function" == typeof t ? e => t(e, this._element) : t
        }
        _getPopperConfig(t) {
            const e = {
                placement: t,
                modifiers: [{
                    name: "flip",
                    options: {
                        altBoundary: !0,
                        fallbackPlacements: this.config.fallbackPlacements
                    }
                }, {
                    name: "offset",
                    options: {
                        offset: this._getOffset()
                    }
                }, {
                    name: "preventOverflow",
                    options: {
                        boundary: this.config.boundary
                    }
                }, {
                    name: "arrow",
                    options: {
                        element: `.${this.constructor.NAME}-arrow`
                    }
                }, {
                    name: "onChange",
                    enabled: !0,
                    phase: "afterWrite",
                    fn: t => this._handlePopperPlacementChange(t)
                }],
                onFirstUpdate: t => {
                    t.options.placement !== t.placement && this._handlePopperPlacementChange(t)
                }
            };
            return {
                ...e,
                ..."function" == typeof this.config.popperConfig ? this.config.popperConfig(e) : this.config.popperConfig
            }
        }
        _addAttachmentClass(t) {
            this.getTipElement().classList.add("bs-tooltip-" + this.updateAttachment(t))
        }
        _getContainer() {
            return !1 === this.config.container ? document.body : c(this.config.container) ? this.config.container : U.findOne(this.config.container)
        }
        _getAttachment(t) {
            return kt[t.toUpperCase()]
        }
        _setListeners() {
            this.config.trigger.split(" ").forEach(t => {
                if ("click" === t)
                    P.on(this._element, this.constructor.Event.CLICK, this.config.selector, t => this.toggle(t));
                else if ("manual" !== t) {
                    const e = "hover" === t ? this.constructor.Event.MOUSEENTER : this.constructor.Event.FOCUSIN
                      , s = "hover" === t ? this.constructor.Event.MOUSELEAVE : this.constructor.Event.FOCUSOUT;
                    P.on(this._element, e, this.config.selector, t => this._enter(t)),
                    P.on(this._element, s, this.config.selector, t => this._leave(t))
                }
            }
            ),
            this._hideModalHandler = () => {
                this._element && this.hide()
            }
            ,
            P.on(this._element.closest(".modal"), "hide.bs.modal", this._hideModalHandler),
            this.config.selector ? this.config = {
                ...this.config,
                trigger: "manual",
                selector: ""
            } : this._fixTitle()
        }
        _fixTitle() {
            const t = this._element.getAttribute("title")
              , e = typeof this._element.getAttribute("data-bs-original-title");
            (t || "string" !== e) && (this._element.setAttribute("data-bs-original-title", t || ""),
            !t || this._element.getAttribute("aria-label") || this._element.textContent || this._element.setAttribute("aria-label", t),
            this._element.setAttribute("title", ""))
        }
        _enter(t, e) {
            e = this._initializeOnDelegatedTarget(t, e),
            t && (e._activeTrigger["focusin" === t.type ? "focus" : "hover"] = !0),
            e.getTipElement().classList.contains("show") || "show" === e._hoverState ? e._hoverState = "show" : (clearTimeout(e._timeout),
            e._hoverState = "show",
            e.config.delay && e.config.delay.show ? e._timeout = setTimeout( () => {
                "show" === e._hoverState && e.show()
            }
            , e.config.delay.show) : e.show())
        }
        _leave(t, e) {
            e = this._initializeOnDelegatedTarget(t, e),
            t && (e._activeTrigger["focusout" === t.type ? "focus" : "hover"] = e._element.contains(t.relatedTarget)),
            e._isWithActiveTrigger() || (clearTimeout(e._timeout),
            e._hoverState = "out",
            e.config.delay && e.config.delay.hide ? e._timeout = setTimeout( () => {
                "out" === e._hoverState && e.hide()
            }
            , e.config.delay.hide) : e.hide())
        }
        _isWithActiveTrigger() {
            for (const t in this._activeTrigger)
                if (this._activeTrigger[t])
                    return !0;
            return !1
        }
        _getConfig(t) {
            const e = $.getDataAttributes(this._element);
            return Object.keys(e).forEach(t => {
                At.has(t) && delete e[t]
            }
            ),
            t && "object" == typeof t.container && t.container.jquery && (t.container = t.container[0]),
            "number" == typeof (t = {
                ...this.constructor.Default,
                ...e,
                ..."object" == typeof t && t ? t : {}
            }).delay && (t.delay = {
                show: t.delay,
                hide: t.delay
            }),
            "number" == typeof t.title && (t.title = t.title.toString()),
            "number" == typeof t.content && (t.content = t.content.toString()),
            d("tooltip", t, this.constructor.DefaultType),
            t.sanitize && (t.template = Et(t.template, t.allowList, t.sanitizeFn)),
            t
        }
        _getDelegateConfig() {
            const t = {};
            if (this.config)
                for (const e in this.config)
                    this.constructor.Default[e] !== this.config[e] && (t[e] = this.config[e]);
            return t
        }
        _cleanTipClass() {
            const t = this.getTipElement()
              , e = t.getAttribute("class").match(Tt);
            null !== e && e.length > 0 && e.map(t => t.trim()).forEach(e => t.classList.remove(e))
        }
        _handlePopperPlacementChange(t) {
            const {state: e} = t;
            e && (this.tip = e.elements.popper,
            this._cleanTipClass(),
            this._addAttachmentClass(this._getAttachment(e.placement)))
        }
        static jQueryInterface(t) {
            return this.each((function() {
                let e = w.get(this, "bs.tooltip");
                const s = "object" == typeof t && t;
                if ((e || !/dispose|hide/.test(t)) && (e || (e = new St(this,s)),
                "string" == typeof t)) {
                    if (void 0 === e[t])
                        throw new TypeError(`No method named "${t}"`);
                    e[t]()
                }
            }
            ))
        }
    }
    v("tooltip", St);
    const Nt = new RegExp("(^|\\s)bs-popover\\S+","g")
      , Ot = {
        ...St.Default,
        placement: "right",
        offset: [0, 8],
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
    }
      , xt = {
        ...St.DefaultType,
        content: "(string|element|function)"
    }
      , It = {
        HIDE: "hide.bs.popover",
        HIDDEN: "hidden.bs.popover",
        SHOW: "show.bs.popover",
        SHOWN: "shown.bs.popover",
        INSERTED: "inserted.bs.popover",
        CLICK: "click.bs.popover",
        FOCUSIN: "focusin.bs.popover",
        FOCUSOUT: "focusout.bs.popover",
        MOUSEENTER: "mouseenter.bs.popover",
        MOUSELEAVE: "mouseleave.bs.popover"
    };
    class jt extends St {
        static get Default() {
            return Ot
        }
        static get NAME() {
            return "popover"
        }
        static get DATA_KEY() {
            return "bs.popover"
        }
        static get Event() {
            return It
        }
        static get EVENT_KEY() {
            return ".bs.popover"
        }
        static get DefaultType() {
            return xt
        }
        isWithContent() {
            return this.getTitle() || this._getContent()
        }
        setContent() {
            const t = this.getTipElement();
            this.setElementContent(U.findOne(".popover-header", t), this.getTitle());
            let e = this._getContent();
            "function" == typeof e && (e = e.call(this._element)),
            this.setElementContent(U.findOne(".popover-body", t), e),
            t.classList.remove("fade", "show")
        }
        _addAttachmentClass(t) {
            this.getTipElement().classList.add("bs-popover-" + this.updateAttachment(t))
        }
        _getContent() {
            return this._element.getAttribute("data-bs-content") || this.config.content
        }
        _cleanTipClass() {
            const t = this.getTipElement()
              , e = t.getAttribute("class").match(Nt);
            null !== e && e.length > 0 && e.map(t => t.trim()).forEach(e => t.classList.remove(e))
        }
        static jQueryInterface(t) {
            return this.each((function() {
                let e = w.get(this, "bs.popover");
                const s = "object" == typeof t ? t : null;
                if ((e || !/dispose|hide/.test(t)) && (e || (e = new jt(this,s),
                w.set(this, "bs.popover", e)),
                "string" == typeof t)) {
                    if (void 0 === e[t])
                        throw new TypeError(`No method named "${t}"`);
                    e[t]()
                }
            }
            ))
        }
    }
    v("popover", jt);
    const Pt = {
        offset: 10,
        method: "auto",
        target: ""
    }
      , Mt = {
        offset: "number",
        method: "string",
        target: "(string|element)"
    };
    class Ht extends M {
        constructor(t, e) {
            super(t),
            this._scrollElement = "BODY" === this._element.tagName ? window : this._element,
            this._config = this._getConfig(e),
            this._selector = `${this._config.target} .nav-link, ${this._config.target} .list-group-item, ${this._config.target} .dropdown-item`,
            this._offsets = [],
            this._targets = [],
            this._activeTarget = null,
            this._scrollHeight = 0,
            P.on(this._scrollElement, "scroll.bs.scrollspy", () => this._process()),
            this.refresh(),
            this._process()
        }
        static get Default() {
            return Pt
        }
        static get DATA_KEY() {
            return "bs.scrollspy"
        }
        refresh() {
            const t = this._scrollElement === this._scrollElement.window ? "offset" : "position"
              , e = "auto" === this._config.method ? t : this._config.method
              , s = "position" === e ? this._getScrollTop() : 0;
            this._offsets = [],
            this._targets = [],
            this._scrollHeight = this._getScrollHeight(),
            U.find(this._selector).map(t => {
                const i = o(t)
                  , n = i ? U.findOne(i) : null;
                if (n) {
                    const t = n.getBoundingClientRect();
                    if (t.width || t.height)
                        return [$[e](n).top + s, i]
                }
                return null
            }
            ).filter(t => t).sort( (t, e) => t[0] - e[0]).forEach(t => {
                this._offsets.push(t[0]),
                this._targets.push(t[1])
            }
            )
        }
        dispose() {
            super.dispose(),
            P.off(this._scrollElement, ".bs.scrollspy"),
            this._scrollElement = null,
            this._config = null,
            this._selector = null,
            this._offsets = null,
            this._targets = null,
            this._activeTarget = null,
            this._scrollHeight = null
        }
        _getConfig(t) {
            if ("string" != typeof (t = {
                ...Pt,
                ..."object" == typeof t && t ? t : {}
            }).target && c(t.target)) {
                let {id: e} = t.target;
                e || (e = i("scrollspy"),
                t.target.id = e),
                t.target = "#" + e
            }
            return d("scrollspy", t, Mt),
            t
        }
        _getScrollTop() {
            return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop
        }
        _getScrollHeight() {
            return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
        }
        _getOffsetHeight() {
            return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height
        }
        _process() {
            const t = this._getScrollTop() + this._config.offset
              , e = this._getScrollHeight()
              , s = this._config.offset + e - this._getOffsetHeight();
            if (this._scrollHeight !== e && this.refresh(),
            t >= s) {
                const t = this._targets[this._targets.length - 1];
                this._activeTarget !== t && this._activate(t)
            } else {
                if (this._activeTarget && t < this._offsets[0] && this._offsets[0] > 0)
                    return this._activeTarget = null,
                    void this._clear();
                for (let e = this._offsets.length; e--; )
                    this._activeTarget !== this._targets[e] && t >= this._offsets[e] && (void 0 === this._offsets[e + 1] || t < this._offsets[e + 1]) && this._activate(this._targets[e])
            }
        }
        _activate(t) {
            this._activeTarget = t,
            this._clear();
            const e = this._selector.split(",").map(e => `${e}[data-bs-target="${t}"],${e}[href="${t}"]`)
              , s = U.findOne(e.join(","));
            s.classList.contains("dropdown-item") ? (U.findOne(".dropdown-toggle", s.closest(".dropdown")).classList.add("active"),
            s.classList.add("active")) : (s.classList.add("active"),
            U.parents(s, ".nav, .list-group").forEach(t => {
                U.prev(t, ".nav-link, .list-group-item").forEach(t => t.classList.add("active")),
                U.prev(t, ".nav-item").forEach(t => {
                    U.children(t, ".nav-link").forEach(t => t.classList.add("active"))
                }
                )
            }
            )),
            P.trigger(this._scrollElement, "activate.bs.scrollspy", {
                relatedTarget: t
            })
        }
        _clear() {
            U.find(this._selector).filter(t => t.classList.contains("active")).forEach(t => t.classList.remove("active"))
        }
        static jQueryInterface(t) {
            return this.each((function() {
                let e = w.get(this, "bs.scrollspy");
                if (e || (e = new Ht(this,"object" == typeof t && t)),
                "string" == typeof t) {
                    if (void 0 === e[t])
                        throw new TypeError(`No method named "${t}"`);
                    e[t]()
                }
            }
            ))
        }
    }
    P.on(window, "load.bs.scrollspy.data-api", () => {
        U.find('[data-bs-spy="scroll"]').forEach(t => new Ht(t,$.getDataAttributes(t)))
    }
    ),
    v("scrollspy", Ht);
    class Rt extends M {
        static get DATA_KEY() {
            return "bs.tab"
        }
        show() {
            if (this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && this._element.classList.contains("active") || g(this._element))
                return;
            let t;
            const e = r(this._element)
              , s = this._element.closest(".nav, .list-group");
            if (s) {
                const e = "UL" === s.nodeName || "OL" === s.nodeName ? ":scope > li > .active" : ".active";
                t = U.find(e, s),
                t = t[t.length - 1]
            }
            const i = t ? P.trigger(t, "hide.bs.tab", {
                relatedTarget: this._element
            }) : null;
            if (P.trigger(this._element, "show.bs.tab", {
                relatedTarget: t
            }).defaultPrevented || null !== i && i.defaultPrevented)
                return;
            this._activate(this._element, s);
            const n = () => {
                P.trigger(t, "hidden.bs.tab", {
                    relatedTarget: this._element
                }),
                P.trigger(this._element, "shown.bs.tab", {
                    relatedTarget: t
                })
            }
            ;
            e ? this._activate(e, e.parentNode, n) : n()
        }
        _activate(t, e, s) {
            const i = (!e || "UL" !== e.nodeName && "OL" !== e.nodeName ? U.children(e, ".active") : U.find(":scope > li > .active", e))[0]
              , n = s && i && i.classList.contains("fade")
              , o = () => this._transitionComplete(t, i, s);
            if (i && n) {
                const t = a(i);
                i.classList.remove("show"),
                P.one(i, "transitionend", o),
                h(i, t)
            } else
                o()
        }
        _transitionComplete(t, e, s) {
            if (e) {
                e.classList.remove("active");
                const t = U.findOne(":scope > .dropdown-menu .active", e.parentNode);
                t && t.classList.remove("active"),
                "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !1)
            }
            t.classList.add("active"),
            "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !0),
            m(t),
            t.classList.contains("fade") && t.classList.add("show"),
            t.parentNode && t.parentNode.classList.contains("dropdown-menu") && (t.closest(".dropdown") && U.find(".dropdown-toggle").forEach(t => t.classList.add("active")),
            t.setAttribute("aria-expanded", !0)),
            s && s()
        }
        static jQueryInterface(t) {
            return this.each((function() {
                const e = w.get(this, "bs.tab") || new Rt(this);
                if ("string" == typeof t) {
                    if (void 0 === e[t])
                        throw new TypeError(`No method named "${t}"`);
                    e[t]()
                }
            }
            ))
        }
    }
    P.on(document, "click.bs.tab.data-api", '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]', (function(t) {
        t.preventDefault(),
        (w.get(this, "bs.tab") || new Rt(this)).show()
    }
    )),
    v("tab", Rt);
    const Bt = {
        animation: "boolean",
        autohide: "boolean",
        delay: "number"
    }
      , Wt = {
        animation: !0,
        autohide: !0,
        delay: 5e3
    };
    class $t extends M {
        constructor(t, e) {
            super(t),
            this._config = this._getConfig(e),
            this._timeout = null,
            this._setListeners()
        }
        static get DefaultType() {
            return Bt
        }
        static get Default() {
            return Wt
        }
        static get DATA_KEY() {
            return "bs.toast"
        }
        show() {
            if (P.trigger(this._element, "show.bs.toast").defaultPrevented)
                return;
            this._clearTimeout(),
            this._config.animation && this._element.classList.add("fade");
            const t = () => {
                this._element.classList.remove("showing"),
                this._element.classList.add("show"),
                P.trigger(this._element, "shown.bs.toast"),
                this._config.autohide && (this._timeout = setTimeout( () => {
                    this.hide()
                }
                , this._config.delay))
            }
            ;
            if (this._element.classList.remove("hide"),
            m(this._element),
            this._element.classList.add("showing"),
            this._config.animation) {
                const e = a(this._element);
                P.one(this._element, "transitionend", t),
                h(this._element, e)
            } else
                t()
        }
        hide() {
            if (!this._element.classList.contains("show"))
                return;
            if (P.trigger(this._element, "hide.bs.toast").defaultPrevented)
                return;
            const t = () => {
                this._element.classList.add("hide"),
                P.trigger(this._element, "hidden.bs.toast")
            }
            ;
            if (this._element.classList.remove("show"),
            this._config.animation) {
                const e = a(this._element);
                P.one(this._element, "transitionend", t),
                h(this._element, e)
            } else
                t()
        }
        dispose() {
            this._clearTimeout(),
            this._element.classList.contains("show") && this._element.classList.remove("show"),
            P.off(this._element, "click.dismiss.bs.toast"),
            super.dispose(),
            this._config = null
        }
        _getConfig(t) {
            return t = {
                ...Wt,
                ...$.getDataAttributes(this._element),
                ..."object" == typeof t && t ? t : {}
            },
            d("toast", t, this.constructor.DefaultType),
            t
        }
        _setListeners() {
            P.on(this._element, "click.dismiss.bs.toast", '[data-bs-dismiss="toast"]', () => this.hide())
        }
        _clearTimeout() {
            clearTimeout(this._timeout),
            this._timeout = null
        }
        static jQueryInterface(t) {
            return this.each((function() {
                let e = w.get(this, "bs.toast");
                if (e || (e = new $t(this,"object" == typeof t && t)),
                "string" == typeof t) {
                    if (void 0 === e[t])
                        throw new TypeError(`No method named "${t}"`);
                    e[t](this)
                }
            }
            ))
        }
    }
    return v("toast", $t),
    {
        Alert: H,
        Button: R,
        Carousel: X,
        Collapse: Z,
        Dropdown: lt,
        Modal: dt,
        Offcanvas: _t,
        Popover: jt,
        ScrollSpy: Ht,
        Tab: Rt,
        Toast: $t,
        Tooltip: St
    }
}
));
//# sourceMappingURL=bootstrap.min.js.map

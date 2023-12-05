// This function sets up the module or library based on the environment

// The code is wrapped in a function that checks the environment and assigns the module accordingly
!function(e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.sal = t() : e.sal = t()
}(this, (function() {
    return (()=>{
        "use strict";
        var e = {
            855: (e,t,n)=>{
                function r(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        }
                        ))),
                        n.push.apply(n, r)
                    }
                    return n
                }
                function o(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? r(Object(n), !0).forEach((function(t) {
                            a(e, t, n[t])
                        }
                        )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : r(Object(n)).forEach((function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                        }
                        ))
                    }
                    return e
                }
                function a(e, t, n) {
                    return t in e ? Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = n,
                    e
                }
                n.d(t, {
                    default: ()=>E
                });
                var s = "Sal was not initialised! Probably it is used in SSR."
                  , i = "Your browser does not support IntersectionObserver!\nGet a polyfill from here:\nhttps://github.com/w3c/IntersectionObserver/tree/master/polyfill"
                  , l = {
                    root: null,
                    rootMargin: "0% 50%",
                    threshold: .5,
                    animateClassName: "sal-animate",
                    disabledClassName: "sal-disabled",
                    enterEventName: "sal:in",
                    exitEventName: "sal:out",
                    selector: "[data-sal]",
                    once: !0,
                    disabled: !1
                }
                  , c = []
                  , u = null
                  , d = function(e) {
                    e && e !== l && (l = o(o({}, l), e))
                }
                  , f = function(e) {
                    e.classList.remove(l.animateClassName)
                }
                  , b = function(e, t) {
                    var n = new CustomEvent(e,{
                        bubbles: !0,
                        detail: t
                    });
                    t.target.dispatchEvent(n)
                }
                  , p = function() {
                    document.body.classList.add(l.disabledClassName)
                }
                  , m = function() {
                    u.disconnect(),
                    u = null
                }
                  , v = function() {
                    return l.disabled || "function" == typeof l.disabled && l.disabled()
                }
                  , y = function(e, t) {
                    e.forEach((function(e) {
                        var n = e.target
                          , r = void 0 !== n.dataset.salRepeat
                          , o = void 0 !== n.dataset.salOnce
                          , a = r || !(o || l.once);
                        e.intersectionRatio >= l.threshold ? (function(e) {
                            e.target.classList.add(l.animateClassName),
                            b(l.enterEventName, e)
                        }(e),
                        a || t.unobserve(n)) : a && function(e) {
                            f(e.target),
                            b(l.exitEventName, e)
                        }(e)
                    }
                    ))
                }
                  , O = function() {
                    var e = [].filter.call(document.querySelectorAll(l.selector), (function(e) {
                        return !function(e) {
                            return e.classList.contains(l.animateClassName)
                        }(e, l.animateClassName)
                    }
                    ));
                    return e.forEach((function(e) {
                        return u.observe(e)
                    }
                    )),
                    e
                }
                  , h = function() {
                    p(),
                    m()
                }
                  , g = function() {
                    document.body.classList.remove(l.disabledClassName),
                    u = new IntersectionObserver(y,{
                        root: l.root,
                        rootMargin: l.rootMargin,
                        threshold: l.threshold
                    }),
                    c = O()
                }
                  , w = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    m(),
                    Array.from(document.querySelectorAll(l.selector)).forEach(f),
                    d(e),
                    g()
                }
                  , j = function() {
                    var e = O();
                    c.push(e)
                };
                const E = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : l;
                    if (d(e),
                    "undefined" == typeof window)
                        return console.warn(s),
                        {
                            elements: c,
                            disable: h,
                            enable: g,
                            reset: w,
                            update: j
                        };
                    if (!window.IntersectionObserver)
                        throw p(),
                        Error(i);
                    return v() ? p() : g(),
                    {
                        elements: c,
                        disable: h,
                        enable: g,
                        reset: w,
                        update: j
                    }
                }
            }
        }
          , t = {};
        function n(r) {
            if (t[r])
                return t[r].exports;
            var o = t[r] = {
                exports: {}
            };
            return e[r](o, o.exports, n),
            o.exports
        }
        return n.d = (e,t)=>{
            for (var r in t)
                n.o(t, r) && !n.o(e, r) && Object.defineProperty(e, r, {
                    enumerable: !0,
                    get: t[r]
                })
        }
        ,
        n.o = (e,t)=>Object.prototype.hasOwnProperty.call(e, t),
        n(855)
    }
    )().default
}
));

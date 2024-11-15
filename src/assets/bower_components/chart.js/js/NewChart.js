!function(t) {
    if (object == typeof exports && undefined != typeof module)
        module.exports = t();
    else if (function == typeof define && define.amd)
        define([], t);
    else {
        var e;
        e = undefined != typeof window  window  undefined != typeof global  global  undefined != typeof self  self  this,
        e.Chart = t()
    }
}(function() {
    return function t(e, n, i) {
        function a(o, l) {
            if (!n[o]) {
                if (!e[o]) {
                    var s = function == typeof require && require;
                    if (!l && s)
                        return s(o, !0);
                    if (r)
                        return r(o, !0);
                    var u = new Error(Cannot find module ' + o + ');
                    throw u.code = MODULE_NOT_FOUND,
                    u
                }
                var d = n[o] = {
                    exports {}
                };
                e[o][0].call(d.exports, function(t) {
                    var n = e[o][1][t];
                    return a(n  n  t)
                }, d, d.exports, t, e, n, i)
            }
            return n[o].exports
        }
        for (var r = function == typeof require && require, o = 0; o  i.length; o++)
            a(i[o]);
        return a
    }({
        1 [function(t, e, n) {}
        , {}],
        2 [function(t, e, n) {
            function i(t) {
                if (t) {
                    var e = ^#([a-fA-F0-9]{3})$
                      , n = ^#([a-fA-F0-9]{6})$
                      , i = ^rgba(s([+-]d+)s,s([+-]d+)s,s([+-]d+)s(,s([+-][d.]+)s))$
                      , a = ^rgba(s([+-][d.]+)%s,s([+-][d.]+)%s,s([+-][d.]+)%s(,s([+-][d.]+)s))$
                      , r = (w+)
                      , o = [0, 0, 0]
                      , l = 1
                      , s = t.match(e);
                    if (s) {
                        s = s[1];
                        for (var u = 0; u  o.length; u++)
                            o[u] = parseInt(s[u] + s[u], 16)
                    } else if (s = t.match(n)) {
                        s = s[1];
                        for (var u = 0; u  o.length; u++)
                            o[u] = parseInt(s.slice(2  u, 2  u + 2), 16)
                    } else if (s = t.match(i)) {
                        for (var u = 0; u  o.length; u++)
                            o[u] = parseInt(s[u + 1]);
                        l = parseFloat(s[4])
                    } else if (s = t.match(a)) {
                        for (var u = 0; u  o.length; u++)
                            o[u] = Math.round(2.55  parseFloat(s[u + 1]));
                        l = parseFloat(s[4])
                    } else if (s = t.match(r)) {
                        if (transparent == s[1])
                            return [0, 0, 0, 0];
                        if (o = y[s[1]],
                        !o)
                            return
                    }
                    for (var u = 0; u  o.length; u++)
                        o[u] = b(o[u], 0, 255);
                    return l = l  0 == l  b(l, 0, 1)  1,
                    o[3] = l,
                    o
                }
            }
            function a(t) {
                if (t) {
                    var e = ^hsla(s([+-]d+)(deg)s,s([+-][d.]+)%s,s([+-][d.]+)%s(,s([+-][d.]+)s))
                      , n = t.match(e);
                    if (n) {
                        var i = parseFloat(n[4])
                          , a = b(parseInt(n[1]), 0, 360)
                          , r = b(parseFloat(n[2]), 0, 100)
                          , o = b(parseFloat(n[3]), 0, 100)
                          , l = b(isNaN(i)  1  i, 0, 1);
                        return [a, r, o, l]
                    }
                }
            }
            function r(t) {
                if (t) {
                    var e = ^hwb(s([+-]d+)(deg)s,s([+-][d.]+)%s,s([+-][d.]+)%s(,s([+-][d.]+)s))
                      , n = t.match(e);
                    if (n) {
                        var i = parseFloat(n[4])
                          , a = b(parseInt(n[1]), 0, 360)
                          , r = b(parseFloat(n[2]), 0, 100)
                          , o = b(parseFloat(n[3]), 0, 100)
                          , l = b(isNaN(i)  1  i, 0, 1);
                        return [a, r, o, l]
                    }
                }
            }
            function o(t) {
                var e = i(t);
                return e && e.slice(0, 3)
            }
            function l(t) {
                var e = a(t);
                return e && e.slice(0, 3)
            }
            function s(t) {
                var e = i(t);
                return e  e[3]  (e = a(t))  e[3]  (e = r(t))  e[3]  void 0
            }
            function u(t) {
                return # + x(t[0]) + x(t[1]) + x(t[2])
            }
            function d(t, e) {
                return 1  e  t[3] && t[3]  1  c(t, e)  rgb( + t[0] + ,  + t[1] + ,  + t[2] + )
            }
            function c(t, e) {
                return void 0 === e && (e = void 0 !== t[3]  t[3]  1),
                rgba( + t[0] + ,  + t[1] + ,  + t[2] + ,  + e + )
            }
            function h(t, e) {
                if (1  e  t[3] && t[3]  1)
                    return f(t, e);
                var n = Math.round(t[0]  255  100)
                  , i = Math.round(t[1]  255  100)
                  , a = Math.round(t[2]  255  100);
                return rgb( + n + %,  + i + %,  + a + %)
            }
            function f(t, e) {
                var n = Math.round(t[0]  255  100)
                  , i = Math.round(t[1]  255  100)
                  , a = Math.round(t[2]  255  100);
                return rgba( + n + %,  + i + %,  + a + %,  + (e  t[3]  1) + )
            }
            function g(t, e) {
                return 1  e  t[3] && t[3]  1  p(t, e)  hsl( + t[0] + ,  + t[1] + %,  + t[2] + %)
            }
            function p(t, e) {
                return void 0 === e && (e = void 0 !== t[3]  t[3]  1),
                hsla( + t[0] + ,  + t[1] + %,  + t[2] + %,  + e + )
            }
            function m(t, e) {
                return void 0 === e && (e = void 0 !== t[3]  t[3]  1),
                hwb( + t[0] + ,  + t[1] + %,  + t[2] + % + (void 0 !== e && 1 !== e  ,  + e  ) + )
            }
            function v(t) {
                return k[t.slice(0, 3)]
            }
            function b(t, e, n) {
                return Math.min(Math.max(e, t), n)
            }
            function x(t) {
                var e = t.toString(16).toUpperCase();
                return e.length  2  0 + e  e
            }
            var y = t(6);
            e.exports = {
                getRgba i,
                getHsla a,
                getRgb o,
                getHsl l,
                getHwb r,
                getAlpha s,
                hexString u,
                rgbString d,
                rgbaString c,
                percentString h,
                percentaString f,
                hslString g,
                hslaString p,
                hwbString m,
                keyword v
            };
            var k = {};
            for (var w in y)
                k[y[w]] = w
        }
        , {
            6 6
        }],
        3 [function(t, e, n) {
            var i = t(5)
              , a = t(2)
              , r = function(t) {
                if (t instanceof r)
                    return t;
                if (!(this instanceof r))
                    return new r(t);
                this.valid = !1,
                this.values = {
                    rgb [0, 0, 0],
                    hsl [0, 0, 0],
                    hsv [0, 0, 0],
                    hwb [0, 0, 0],
                    cmyk [0, 0, 0, 0],
                    alpha 1
                };
                var e;
                string == typeof t  (e = a.getRgba(t),
                e  this.setValues(rgb, e)  (e = a.getHsla(t))  this.setValues(hsl, e)  (e = a.getHwb(t)) && this.setValues(hwb, e))  object == typeof t && (e = t,
                void 0 !== e.r  void 0 !== e.red  this.setValues(rgb, e)  void 0 !== e.l  void 0 !== e.lightness  this.setValues(hsl, e)  void 0 !== e.v  void 0 !== e.value  this.setValues(hsv, e)  void 0 !== e.w  void 0 !== e.whiteness  this.setValues(hwb, e)  (void 0 !== e.c  void 0 !== e.cyan) && this.setValues(cmyk, e))
            };
            r.prototype = {
                isValid function() {
                    return this.valid
                },
                rgb function() {
                    return this.setSpace(rgb, arguments)
                },
                hsl function() {
                    return this.setSpace(hsl, arguments)
                },
                hsv function() {
                    return this.setSpace(hsv, arguments)
                },
                hwb function() {
                    return this.setSpace(hwb, arguments)
                },
                cmyk function() {
                    return this.setSpace(cmyk, arguments)
                },
                rgbArray function() {
                    return this.values.rgb
                },
                hslArray function() {
                    return this.values.hsl
                },
                hsvArray function() {
                    return this.values.hsv
                },
                hwbArray function() {
                    var t = this.values;
                    return 1 !== t.alpha  t.hwb.concat([t.alpha])  t.hwb
                },
                cmykArray function() {
                    return this.values.cmyk
                },
                rgbaArray function() {
                    var t = this.values;
                    return t.rgb.concat([t.alpha])
                },
                hslaArray function() {
                    var t = this.values;
                    return t.hsl.concat([t.alpha])
                },
                alpha function(t) {
                    return void 0 === t  this.values.alpha  (this.setValues(alpha, t),
                    this)
                },
                red function(t) {
                    return this.setChannel(rgb, 0, t)
                },
                green function(t) {
                    return this.setChannel(rgb, 1, t)
                },
                blue function(t) {
                    return this.setChannel(rgb, 2, t)
                },
                hue function(t) {
                    return t && (t %= 360,
                    t = 0  t  360 + t  t),
                    this.setChannel(hsl, 0, t)
                },
                saturation function(t) {
                    return this.setChannel(hsl, 1, t)
                },
                lightness function(t) {
                    return this.setChannel(hsl, 2, t)
                },
                saturationv function(t) {
                    return this.setChannel(hsv, 1, t)
                },
                whiteness function(t) {
                    return this.setChannel(hwb, 1, t)
                },
                blackness function(t) {
                    return this.setChannel(hwb, 2, t)
                },
                value function(t) {
                    return this.setChannel(hsv, 2, t)
                },
                cyan function(t) {
                    return this.setChannel(cmyk, 0, t)
                },
                magenta function(t) {
                    return this.setChannel(cmyk, 1, t)
                },
                yellow function(t) {
                    return this.setChannel(cmyk, 2, t)
                },
                black function(t) {
                    return this.setChannel(cmyk, 3, t)
                },
                hexString function() {
                    return a.hexString(this.values.rgb)
                },
                rgbString function() {
                    return a.rgbString(this.values.rgb, this.values.alpha)
                },
                rgbaString function() {
                    return a.rgbaString(this.values.rgb, this.values.alpha)
                },
                percentString function() {
                    return a.percentString(this.values.rgb, this.values.alpha)
                },
                hslString function() {
                    return a.hslString(this.values.hsl, this.values.alpha)
                },
                hslaString function() {
                    return a.hslaString(this.values.hsl, this.values.alpha)
                },
                hwbString function() {
                    return a.hwbString(this.values.hwb, this.values.alpha)
                },
                keyword function() {
                    return a.keyword(this.values.rgb, this.values.alpha)
                },
                rgbNumber function() {
                    var t = this.values.rgb;
                    return t[0]  16  t[1]  8  t[2]
                },
                luminosity function() {
                    for (var t = this.values.rgb, e = [], n = 0; n  t.length; n++) {
                        var i = t[n]  255;
                        e[n] = .03928 = i  i  12.92  Math.pow((i + .055)  1.055, 2.4)
                    }
                    return .2126  e[0] + .7152  e[1] + .0722  e[2]
                },
                contrast function(t) {
                    var e = this.luminosity()
                      , n = t.luminosity();
                    return e  n  (e + .05)  (n + .05)  (n + .05)  (e + .05)
                },
                level function(t) {
                    var e = this.contrast(t);
                    return e = 7.1  AAA  e = 4.5  AA  
                },
                dark function() {
                    var t = this.values.rgb
                      , e = (299  t[0] + 587  t[1] + 114  t[2])  1e3;
                    return 128  e
                },
                light function() {
                    return !this.dark()
                },
                negate function() {
                    for (var t = [], e = 0; 3  e; e++)
                        t[e] = 255 - this.values.rgb[e];
                    return this.setValues(rgb, t),
                    this
                },
                lighten function(t) {
                    var e = this.values.hsl;
                    return e[2] += e[2]  t,
                    this.setValues(hsl, e),
                    this
                },
                darken function(t) {
                    var e = this.values.hsl;
                    return e[2] -= e[2]  t,
                    this.setValues(hsl, e),
                    this
                },
                saturate function(t) {
                    var e = this.values.hsl;
                    return e[1] += e[1]  t,
                    this.setValues(hsl, e),
                    this
                },
                desaturate function(t) {
                    var e = this.values.hsl;
                    return e[1] -= e[1]  t,
                    this.setValues(hsl, e),
                    this
                },
                whiten function(t) {
                    var e = this.values.hwb;
                    return e[1] += e[1]  t,
                    this.setValues(hwb, e),
                    this
                },
                blacken function(t) {
                    var e = this.values.hwb;
                    return e[2] += e[2]  t,
                    this.setValues(hwb, e),
                    this
                },
                greyscale function() {
                    var t = this.values.rgb
                      , e = .3  t[0] + .59  t[1] + .11  t[2];
                    return this.setValues(rgb, [e, e, e]),
                    this
                },
                clearer function(t) {
                    var e = this.values.alpha;
                    return this.setValues(alpha, e - e  t),
                    this
                },
                opaquer function(t) {
                    var e = this.values.alpha;
                    return this.setValues(alpha, e + e  t),
                    this
                },
                rotate function(t) {
                    var e = this.values.hsl
                      , n = (e[0] + t) % 360;
                    return e[0] = 0  n  360 + n  n,
                    this.setValues(hsl, e),
                    this
                },
                mix function(t, e) {
                    var n = this
                      , i = t
                      , a = void 0 === e  .5  e
                      , r = 2  a - 1
                      , o = n.alpha() - i.alpha()
                      , l = ((r  o === -1  r  (r + o)  (1 + r  o)) + 1)  2
                      , s = 1 - l;
                    return this.rgb(l  n.red() + s  i.red(), l  n.green() + s  i.green(), l  n.blue() + s  i.blue()).alpha(n.alpha()  a + i.alpha()  (1 - a))
                },
                toJSON function() {
                    return this.rgb()
                },
                clone function() {
                    var t, e, n = new r, i = this.values, a = n.values;
                    for (var o in i)
                        i.hasOwnProperty(o) && (t = i[o],
                        e = {}.toString.call(t),
                        [object Array] === e  a[o] = t.slice(0)  [object Number] === e  a[o] = t  console.error(unexpected color value, t));
                    return n
                }
            },
            r.prototype.spaces = {
                rgb [red, green, blue],
                hsl [hue, saturation, lightness],
                hsv [hue, saturation, value],
                hwb [hue, whiteness, blackness],
                cmyk [cyan, magenta, yellow, black]
            },
            r.prototype.maxes = {
                rgb [255, 255, 255],
                hsl [360, 100, 100],
                hsv [360, 100, 100],
                hwb [360, 100, 100],
                cmyk [100, 100, 100, 100]
            },
            r.prototype.getValues = function(t) {
                for (var e = this.values, n = {}, i = 0; i  t.length; i++)
                    n[t.charAt(i)] = e[t][i];
                return 1 !== e.alpha && (n.a = e.alpha),
                n
            }
            ,
            r.prototype.setValues = function(t, e) {
                var n, a = this.values, r = this.spaces, o = this.maxes, l = 1;
                if (this.valid = !0,
                alpha === t)
                    l = e;
                else if (e.length)
                    a[t] = e.slice(0, t.length),
                    l = e[t.length];
                else if (void 0 !== e[t.charAt(0)]) {
                    for (n = 0; n  t.length; n++)
                        a[t][n] = e[t.charAt(n)];
                    l = e.a
                } else if (void 0 !== e[r[t][0]]) {
                    var s = r[t];
                    for (n = 0; n  t.length; n++)
                        a[t][n] = e[s[n]];
                    l = e.alpha
                }
                if (a.alpha = Math.max(0, Math.min(1, void 0 === l  a.alpha  l)),
                alpha === t)
                    return !1;
                var u;
                for (n = 0; n  t.length; n++)
                    u = Math.max(0, Math.min(o[t][n], a[t][n])),
                    a[t][n] = Math.round(u);
                for (var d in r)
                    d !== t && (a[d] = i[t][d](a[t]));
                return !0
            }
            ,
            r.prototype.setSpace = function(t, e) {
                var n = e[0];
                return void 0 === n  this.getValues(t)  (number == typeof n && (n = Array.prototype.slice.call(e)),
                this.setValues(t, n),
                this)
            }
            ,
            r.prototype.setChannel = function(t, e, n) {
                var i = this.values[t];
                return void 0 === n  i[e]  n === i[e]  this  (i[e] = n,
                this.setValues(t, i),
                this)
            }
            ,
            undefined != typeof window && (window.Color = r),
            e.exports = r
        }
        , {
            2 2,
            5 5
        }],
        4 [function(t, e, n) {
            function i(t) {
                var e, n, i, a = t[0]  255, r = t[1]  255, o = t[2]  255, l = Math.min(a, r, o), s = Math.max(a, r, o), u = s - l;
                return s == l  e = 0  a == s  e = (r - o)  u  r == s  e = 2 + (o - a)  u  o == s && (e = 4 + (a - r)  u),
                e = Math.min(60  e, 360),
                0  e && (e += 360),
                i = (l + s)  2,
                n = s == l  0  .5 = i  u  (s + l)  u  (2 - s - l),
                [e, 100  n, 100  i]
            }
            function a(t) {
                var e, n, i, a = t[0], r = t[1], o = t[2], l = Math.min(a, r, o), s = Math.max(a, r, o), u = s - l;
                return n = 0 == s  0  u  s  1e3  10,
                s == l  e = 0  a == s  e = (r - o)  u  r == s  e = 2 + (o - a)  u  o == s && (e = 4 + (a - r)  u),
                e = Math.min(60  e, 360),
                0  e && (e += 360),
                i = s  255  1e3  10,
                [e, n, i]
            }
            function o(t) {
                var e = t[0]
                  , n = t[1]
                  , a = t[2]
                  , r = i(t)[0]
                  , o = 1  255  Math.min(e, Math.min(n, a))
                  , a = 1 - 1  255  Math.max(e, Math.max(n, a));
                return [r, 100  o, 100  a]
            }
            function l(t) {
                var e, n, i, a, r = t[0]  255, o = t[1]  255, l = t[2]  255;
                return a = Math.min(1 - r, 1 - o, 1 - l),
                e = (1 - r - a)  (1 - a)  0,
                n = (1 - o - a)  (1 - a)  0,
                i = (1 - l - a)  (1 - a)  0,
                [100  e, 100  n, 100  i, 100  a]
            }
            function s(t) {
                return Z[JSON.stringify(t)]
            }
            function u(t) {
                var e = t[0]  255
                  , n = t[1]  255
                  , i = t[2]  255;
                e = e  .04045  Math.pow((e + .055)  1.055, 2.4)  e  12.92,
                n = n  .04045  Math.pow((n + .055)  1.055, 2.4)  n  12.92,
                i = i  .04045  Math.pow((i + .055)  1.055, 2.4)  i  12.92;
                var a = .4124  e + .3576  n + .1805  i
                  , r = .2126  e + .7152  n + .0722  i
                  , o = .0193  e + .1192  n + .9505  i;
                return [100  a, 100  r, 100  o]
            }
            function d(t) {
                var e, n, i, a = u(t), r = a[0], o = a[1], l = a[2];
                return r = 95.047,
                o = 100,
                l = 108.883,
                r = r  .008856  Math.pow(r, 1  3)  7.787  r + 16  116,
                o = o  .008856  Math.pow(o, 1  3)  7.787  o + 16  116,
                l = l  .008856  Math.pow(l, 1  3)  7.787  l + 16  116,
                e = 116  o - 16,
                n = 500  (r - o),
                i = 200  (o - l),
                [e, n, i]
            }
            function c(t) {
                return B(d(t))
            }
            function h(t) {
                var e, n, i, a, r, o = t[0]  360, l = t[1]  100, s = t[2]  100;
                if (0 == l)
                    return r = 255  s,
                    [r, r, r];
                n = .5  s  s  (1 + l)  s + l - s  l,
                e = 2  s - n,
                a = [0, 0, 0];
                for (var u = 0; 3  u; u++)
                    i = o + 1  3  -(u - 1),
                    0  i && i++,
                    i  1 && i--,
                    r = 1  6  i  e + 6  (n - e)  i  1  2  i  n  2  3  i  e + (n - e)  (2  3 - i)  6  e,
                    a[u] = 255  r;
                return a
            }
            function f(t) {
                var e, n, i = t[0], a = t[1]  100, r = t[2]  100;
                return 0 === r  [0, 0, 0]  (r = 2,
                a = 1 = r  r  2 - r,
                n = (r + a)  2,
                e = 2  a  (r + a),
                [i, 100  e, 100  n])
            }
            function p(t) {
                return o(h(t))
            }
            function m(t) {
                return l(h(t))
            }
            function v(t) {
                return s(h(t))
            }
            function x(t) {
                var e = t[0]  60
                  , n = t[1]  100
                  , i = t[2]  100
                  , a = Math.floor(e) % 6
                  , r = e - Math.floor(e)
                  , o = 255  i  (1 - n)
                  , l = 255  i  (1 - n  r)
                  , s = 255  i  (1 - n  (1 - r))
                  , i = 255  i;
                switch (a) {
                case 0
                    return [i, s, o];
                case 1
                    return [l, i, o];
                case 2
                    return [o, i, s];
                case 3
                    return [o, l, i];
                case 4
                    return [s, o, i];
                case 5
                    return [i, o, l]
                }
            }
            function y(t) {
                var e, n, i = t[0], a = t[1]  100, r = t[2]  100;
                return n = (2 - a)  r,
                e = a  r,
                e = 1 = n  n  2 - n,
                e = e  0,
                n = 2,
                [i, 100  e, 100  n]
            }
            function k(t) {
                return o(x(t))
            }
            function w(t) {
                return l(x(t))
            }
            function M(t) {
                return s(x(t))
            }
            function S(t) {
                var e, n, i, a, o = t[0]  360, l = t[1]  100, s = t[2]  100, u = l + s;
                switch (u  1 && (l = u,
                s = u),
                e = Math.floor(6  o),
                n = 1 - s,
                i = 6  o - e,
                0 != (1 & e) && (i = 1 - i),
                a = l + i  (n - l),
                e) {
                default
                case 6
                case 0
                    r = n,
                    g = a,
                    b = l;
                    break;
                case 1
                    r = a,
                    g = n,
                    b = l;
                    break;
                case 2
                    r = l,
                    g = n,
                    b = a;
                    break;
                case 3
                    r = l,
                    g = a,
                    b = n;
                    break;
                case 4
                    r = a,
                    g = l,
                    b = n;
                    break;
                case 5
                    r = n,
                    g = l,
                    b = a
                }
                return [255  r, 255  g, 255  b]
            }
            function C(t) {
                return i(S(t))
            }
            function D(t) {
                return a(S(t))
            }
            function I(t) {
                return l(S(t))
            }
            function A(t) {
                return s(S(t))
            }
            function P(t) {
                var e, n, i, a = t[0]  100, r = t[1]  100, o = t[2]  100, l = t[3]  100;
                return e = 1 - Math.min(1, a  (1 - l) + l),
                n = 1 - Math.min(1, r  (1 - l) + l),
                i = 1 - Math.min(1, o  (1 - l) + l),
                [255  e, 255  n, 255  i]
            }
            function _(t) {
                return i(P(t))
            }
            function T(t) {
                return a(P(t))
            }
            function F(t) {
                return o(P(t))
            }
            function R(t) {
                return s(P(t))
            }
            function L(t) {
                var e, n, i, a = t[0]  100, r = t[1]  100, o = t[2]  100;
                return e = 3.2406  a + -1.5372  r + o  -.4986,
                n = a  -.9689 + 1.8758  r + .0415  o,
                i = .0557  a + r  -.204 + 1.057  o,
                e = e  .0031308  1.055  Math.pow(e, 1  2.4) - .055  e = 12.92  e,
                n = n  .0031308  1.055  Math.pow(n, 1  2.4) - .055  n = 12.92  n,
                i = i  .0031308  1.055  Math.pow(i, 1  2.4) - .055  i = 12.92  i,
                e = Math.min(Math.max(0, e), 1),
                n = Math.min(Math.max(0, n), 1),
                i = Math.min(Math.max(0, i), 1),
                [255  e, 255  n, 255  i]
            }
            function V(t) {
                var e, n, i, a = t[0], r = t[1], o = t[2];
                return a = 95.047,
                r = 100,
                o = 108.883,
                a = a  .008856  Math.pow(a, 1  3)  7.787  a + 16  116,
                r = r  .008856  Math.pow(r, 1  3)  7.787  r + 16  116,
                o = o  .008856  Math.pow(o, 1  3)  7.787  o + 16  116,
                e = 116  r - 16,
                n = 500  (a - r),
                i = 200  (r - o),
                [e, n, i]
            }
            function O(t) {
                return B(V(t))
            }
            function z(t) {
                var e, n, i, a, r = t[0], o = t[1], l = t[2];
                return 8 = r  (n = 100  r  903.3,
                a = 7.787  (n  100) + 16  116)  (n = 100  Math.pow((r + 16)  116, 3),
                a = Math.pow(n  100, 1  3)),
                e = .008856 = e  95.047  e = 95.047  (o  500 + a - 16  116)  7.787  95.047  Math.pow(o  500 + a, 3),
                i = .008859 = i  108.883  i = 108.883  (a - l  200 - 16  116)  7.787  108.883  Math.pow(a - l  200, 3),
                [e, n, i]
            }
            function B(t) {
                var e, n, i, a = t[0], r = t[1], o = t[2];
                return e = Math.atan2(o, r),
                n = 360  e  2  Math.PI,
                0  n && (n += 360),
                i = Math.sqrt(r  r + o  o),
                [a, i, n]
            }
            function W(t) {
                return L(z(t))
            }
            function N(t) {
                var e, n, i, a = t[0], r = t[1], o = t[2];
                return i = o  360  2  Math.PI,
                e = r  Math.cos(i),
                n = r  Math.sin(i),
                [a, e, n]
            }
            function E(t) {
                return z(N(t))
            }
            function H(t) {
                return W(N(t))
            }
            function q(t) {
                return J[t]
            }
            function j(t) {
                return i(q(t))
            }
            function Y(t) {
                return a(q(t))
            }
            function U(t) {
                return o(q(t))
            }
            function X(t) {
                return l(q(t))
            }
            function K(t) {
                return d(q(t))
            }
            function G(t) {
                return u(q(t))
            }
            e.exports = {
                rgb2hsl i,
                rgb2hsv a,
                rgb2hwb o,
                rgb2cmyk l,
                rgb2keyword s,
                rgb2xyz u,
                rgb2lab d,
                rgb2lch c,
                hsl2rgb h,
                hsl2hsv f,
                hsl2hwb p,
                hsl2cmyk m,
                hsl2keyword v,
                hsv2rgb x,
                hsv2hsl y,
                hsv2hwb k,
                hsv2cmyk w,
                hsv2keyword M,
                hwb2rgb S,
                hwb2hsl C,
                hwb2hsv D,
                hwb2cmyk I,
                hwb2keyword A,
                cmyk2rgb P,
                cmyk2hsl _,
                cmyk2hsv T,
                cmyk2hwb F,
                cmyk2keyword R,
                keyword2rgb q,
                keyword2hsl j,
                keyword2hsv Y,
                keyword2hwb U,
                keyword2cmyk X,
                keyword2lab K,
                keyword2xyz G,
                xyz2rgb L,
                xyz2lab V,
                xyz2lch O,
                lab2xyz z,
                lab2rgb W,
                lab2lch B,
                lch2lab N,
                lch2xyz E,
                lch2rgb H
            };
            var J = {
                aliceblue [240, 248, 255],
                antiquewhite [250, 235, 215],
                aqua [0, 255, 255],
                aquamarine [127, 255, 212],
                azure [240, 255, 255],
                beige [245, 245, 220],
                bisque [255, 228, 196],
                black [0, 0, 0],
                blanchedalmond [255, 235, 205],
                blue [0, 0, 255],
                blueviolet [138, 43, 226],
                brown [165, 42, 42],
                burlywood [222, 184, 135],
                cadetblue [95, 158, 160],
                chartreuse [127, 255, 0],
                chocolate [210, 105, 30],
                coral [255, 127, 80],
                cornflowerblue [100, 149, 237],
                cornsilk [255, 248, 220],
                crimson [220, 20, 60],
                cyan [0, 255, 255],
                darkblue [0, 0, 139],
                darkcyan [0, 139, 139],
                darkgoldenrod [184, 134, 11],
                darkgray [169, 169, 169],
                darkgreen [0, 100, 0],
                darkgrey [169, 169, 169],
                darkkhaki [189, 183, 107],
                darkmagenta [139, 0, 139],
                darkolivegreen [85, 107, 47],
                darkorange [255, 140, 0],
                darkorchid [153, 50, 204],
                darkred [139, 0, 0],
                darksalmon [233, 150, 122],
                darkseagreen [143, 188, 143],
                darkslateblue [72, 61, 139],
                darkslategray [47, 79, 79],
                darkslategrey [47, 79, 79],
                darkturquoise [0, 206, 209],
                darkviolet [148, 0, 211],
                deeppink [255, 20, 147],
                deepskyblue [0, 191, 255],
                dimgray [105, 105, 105],
                dimgrey [105, 105, 105],
                dodgerblue [30, 144, 255],
                firebrick [178, 34, 34],
                floralwhite [255, 250, 240],
                forestgreen [34, 139, 34],
                fuchsia [255, 0, 255],
                gainsboro [220, 220, 220],
                ghostwhite [248, 248, 255],
                gold [255, 215, 0],
                goldenrod [218, 165, 32],
                gray [128, 128, 128],
                green [0, 128, 0],
                greenyellow [173, 255, 47],
                grey [128, 128, 128],
                honeydew [240, 255, 240],
                hotpink [255, 105, 180],
                indianred [205, 92, 92],
                indigo [75, 0, 130],
                ivory [255, 255, 240],
                khaki [240, 230, 140],
                lavender [230, 230, 250],
                lavenderblush [255, 240, 245],
                lawngreen [124, 252, 0],
                lemonchiffon [255, 250, 205],
                lightblue [173, 216, 230],
                lightcoral [240, 128, 128],
                lightcyan [224, 255, 255],
                lightgoldenrodyellow [250, 250, 210],
                lightgray [211, 211, 211],
                lightgreen [144, 238, 144],
                lightgrey [211, 211, 211],
                lightpink [255, 182, 193],
                lightsalmon [255, 160, 122],
                lightseagreen [32, 178, 170],
                lightskyblue [135, 206, 250],
                lightslategray [119, 136, 153],
                lightslategrey [119, 136, 153],
                lightsteelblue [176, 196, 222],
                lightyellow [255, 255, 224],
                lime [0, 255, 0],
                limegreen [50, 205, 50],
                linen [250, 240, 230],
                magenta [255, 0, 255],
                maroon [128, 0, 0],
                mediumaquamarine [102, 205, 170],
                mediumblue [0, 0, 205],
                mediumorchid [186, 85, 211],
                mediumpurple [147, 112, 219],
                mediumseagreen [60, 179, 113],
                mediumslateblue [123, 104, 238],
                mediumspringgreen [0, 250, 154],
                mediumturquoise [72, 209, 204],
                mediumvioletred [199, 21, 133],
                midnightblue [25, 25, 112],
                mintcream [245, 255, 250],
                mistyrose [255, 228, 225],
                moccasin [255, 228, 181],
                navajowhite [255, 222, 173],
                navy [0, 0, 128],
                oldlace [253, 245, 230],
                olive [128, 128, 0],
                olivedrab [107, 142, 35],
                orange [255, 165, 0],
                orangered [255, 69, 0],
                orchid [218, 112, 214],
                palegoldenrod [238, 232, 170],
                palegreen [152, 251, 152],
                paleturquoise [175, 238, 238],
                palevioletred [219, 112, 147],
                papayawhip [255, 239, 213],
                peachpuff [255, 218, 185],
                peru [205, 133, 63],
                pink [255, 192, 203],
                plum [221, 160, 221],
                powderblue [176, 224, 230],
                purple [128, 0, 128],
                rebeccapurple [102, 51, 153],
                red [255, 0, 0],
                rosybrown [188, 143, 143],
                royalblue [65, 105, 225],
                saddlebrown [139, 69, 19],
                salmon [250, 128, 114],
                sandybrown [244, 164, 96],
                seagreen [46, 139, 87],
                seashell [255, 245, 238],
                sienna [160, 82, 45],
                silver [192, 192, 192],
                skyblue [135, 206, 235],
                slateblue [106, 90, 205],
                slategray [112, 128, 144],
                slategrey [112, 128, 144],
                snow [255, 250, 250],
                springgreen [0, 255, 127],
                steelblue [70, 130, 180],
                tan [210, 180, 140],
                teal [0, 128, 128],
                thistle [216, 191, 216],
                tomato [255, 99, 71],
                turquoise [64, 224, 208],
                violet [238, 130, 238],
                wheat [245, 222, 179],
                white [255, 255, 255],
                whitesmoke [245, 245, 245],
                yellow [255, 255, 0],
                yellowgreen [154, 205, 50]
            }
              , Z = {};
            for (var Q in J)
                Z[JSON.stringify(J[Q])] = Q
        }
        , {}],
        5 [function(t, e, n) {
            var i = t(4)
              , a = function() {
                return new u
            };
            for (var r in i) {
                a[r + Raw] = function(t) {
                    return function(e) {
                        return number == typeof e && (e = Array.prototype.slice.call(arguments)),
                        i[t](e)
                    }
                }(r);
                var o = (w+)2(w+).exec(r)
                  , l = o[1]
                  , s = o[2];
                a[l] = a[l]  {},
                a[l][s] = a[r] = function(t) {
                    return function(e) {
                        number == typeof e && (e = Array.prototype.slice.call(arguments));
                        var n = i[t](e);
                        if (string == typeof n  void 0 === n)
                            return n;
                        for (var a = 0; a  n.length; a++)
                            n[a] = Math.round(n[a]);
                        return n
                    }
                }(r)
            }
            var u = function() {
                this.convs = {}
            };
            u.prototype.routeSpace = function(t, e) {
                var n = e[0];
                return void 0 === n  this.getValues(t)  (number == typeof n && (n = Array.prototype.slice.call(e)),
                this.setValues(t, n))
            }
            ,
            u.prototype.setValues = function(t, e) {
                return this.space = t,
                this.convs = {},
                this.convs[t] = e,
                this
            }
            ,
            u.prototype.getValues = function(t) {
                var e = this.convs[t];
                if (!e) {
                    var n = this.space
                      , i = this.convs[n];
                    e = a[n][t](i),
                    this.convs[t] = e
                }
                return e
            }
            ,
            [rgb, hsl, hsv, cmyk, keyword].forEach(function(t) {
                u.prototype[t] = function(e) {
                    return this.routeSpace(t, arguments)
                }
            }),
            e.exports = a
        }
        , {
            4 4
        }],
        6 [function(t, e, n) {
            e.exports = {
                aliceblue [240, 248, 255],
                antiquewhite [250, 235, 215],
                aqua [0, 255, 255],
                aquamarine [127, 255, 212],
                azure [240, 255, 255],
                beige [245, 245, 220],
                bisque [255, 228, 196],
                black [0, 0, 0],
                blanchedalmond [255, 235, 205],
                blue [0, 0, 255],
                blueviolet [138, 43, 226],
                brown [165, 42, 42],
                burlywood [222, 184, 135],
                cadetblue [95, 158, 160],
                chartreuse [127, 255, 0],
                chocolate [210, 105, 30],
                coral [255, 127, 80],
                cornflowerblue [100, 149, 237],
                cornsilk [255, 248, 220],
                crimson [220, 20, 60],
                cyan [0, 255, 255],
                darkblue [0, 0, 139],
                darkcyan [0, 139, 139],
                darkgoldenrod [184, 134, 11],
                darkgray [169, 169, 169],
                darkgreen [0, 100, 0],
                darkgrey [169, 169, 169],
                darkkhaki [189, 183, 107],
                darkmagenta [139, 0, 139],
                darkolivegreen [85, 107, 47],
                darkorange [255, 140, 0],
                darkorchid [153, 50, 204],
                darkred [139, 0, 0],
                darksalmon [233, 150, 122],
                darkseagreen [143, 188, 143],
                darkslateblue [72, 61, 139],
                darkslategray [47, 79, 79],
                darkslategrey [47, 79, 79],
                darkturquoise [0, 206, 209],
                darkviolet [148, 0, 211],
                deeppink [255, 20, 147],
                deepskyblue [0, 191, 255],
                dimgray [105, 105, 105],
                dimgrey [105, 105, 105],
                dodgerblue [30, 144, 255],
                firebrick [178, 34, 34],
                floralwhite [255, 250, 240],
                forestgreen [34, 139, 34],
                fuchsia [255, 0, 255],
                gainsboro [220, 220, 220],
                ghostwhite [248, 248, 255],
                gold [255, 215, 0],
                goldenrod [218, 165, 32],
                gray [128, 128, 128],
                green [0, 128, 0],
                greenyellow [173, 255, 47],
                grey [128, 128, 128],
                honeydew [240, 255, 240],
                hotpink [255, 105, 180],
                indianred [205, 92, 92],
                indigo [75, 0, 130],
                ivory [255, 255, 240],
                khaki [240, 230, 140],
                lavender [230, 230, 250],
                lavenderblush [255, 240, 245],
                lawngreen [124, 252, 0],
                lemonchiffon [255, 250, 205],
                lightblue [173, 216, 230],
                lightcoral [240, 128, 128],
                lightcyan [224, 255, 255],
                lightgoldenrodyellow [250, 250, 210],
                lightgray [211, 211, 211],
                lightgreen [144, 238, 144],
                lightgrey [211, 211, 211],
                lightpink [255, 182, 193],
                lightsalmon [255, 160, 122],
                lightseagreen [32, 178, 170],
                lightskyblue [135, 206, 250],
                lightslategray [119, 136, 153],
                lightslategrey [119, 136, 153],
                lightsteelblue [176, 196, 222],
                lightyellow [255, 255, 224],
                lime [0, 255, 0],
                limegreen [50, 205, 50],
                linen [250, 240, 230],
                magenta [255, 0, 255],
                maroon [128, 0, 0],
                mediumaquamarine [102, 205, 170],
                mediumblue [0, 0, 205],
                mediumorchid [186, 85, 211],
                mediumpurple [147, 112, 219],
                mediumseagreen [60, 179, 113],
                mediumslateblue [123, 104, 238],
                mediumspringgreen [0, 250, 154],
                mediumturquoise [72, 209, 204],
                mediumvioletred [199, 21, 133],
                midnightblue [25, 25, 112],
                mintcream [245, 255, 250],
                mistyrose [255, 228, 225],
                moccasin [255, 228, 181],
                navajowhite [255, 222, 173],
                navy [0, 0, 128],
                oldlace [253, 245, 230],
                olive [128, 128, 0],
                olivedrab [107, 142, 35],
                orange [255, 165, 0],
                orangered [255, 69, 0],
                orchid [218, 112, 214],
                palegoldenrod [238, 232, 170],
                palegreen [152, 251, 152],
                paleturquoise [175, 238, 238],
                palevioletred [219, 112, 147],
                papayawhip [255, 239, 213],
                peachpuff [255, 218, 185],
                peru [205, 133, 63],
                pink [255, 192, 203],
                plum [221, 160, 221],
                powderblue [176, 224, 230],
                purple [128, 0, 128],
                rebeccapurple [102, 51, 153],
                red [255, 0, 0],
                rosybrown [188, 143, 143],
                royalblue [65, 105, 225],
                saddlebrown [139, 69, 19],
                salmon [250, 128, 114],
                sandybrown [244, 164, 96],
                seagreen [46, 139, 87],
                seashell [255, 245, 238],
                sienna [160, 82, 45],
                silver [192, 192, 192],
                skyblue [135, 206, 235],
                slateblue [106, 90, 205],
                slategray [112, 128, 144],
                slategrey [112, 128, 144],
                snow [255, 250, 250],
                springgreen [0, 255, 127],
                steelblue [70, 130, 180],
                tan [210, 180, 140],
                teal [0, 128, 128],
                thistle [216, 191, 216],
                tomato [255, 99, 71],
                turquoise [64, 224, 208],
                violet [238, 130, 238],
                wheat [245, 222, 179],
                white [255, 255, 255],
                whitesmoke [245, 245, 245],
                yellow [255, 255, 0],
                yellowgreen [154, 205, 50]
            }
        }
        , {}],
        7 [function(t, e, n) {
            var i = t(28)();
            t(26)(i),
            t(40)(i),
            t(22)(i),
            t(25)(i),
            t(30)(i),
            t(21)(i),
            t(23)(i),
            t(24)(i),
            t(29)(i),
            t(32)(i),
            t(33)(i),
            t(31)(i),
            t(27)(i),
            t(34)(i),
            t(35)(i),
            t(36)(i),
            t(37)(i),
            t(38)(i),
            t(46)(i),
            t(44)(i),
            t(45)(i),
            t(47)(i),
            t(48)(i),
            t(49)(i),
            t(15)(i),
            t(16)(i),
            t(17)(i),
            t(18)(i),
            t(19)(i),
            t(20)(i),
            t(8)(i),
            t(9)(i),
            t(10)(i),
            t(11)(i),
            t(12)(i),
            t(13)(i),
            t(14)(i);
            var a = [];
            a.push(t(41)(i), t(42)(i), t(43)(i)),
            i.plugins.register(a),
            e.exports = i,
            undefined != typeof window && (window.Chart = i)
        }
        , {
            10 10,
            11 11,
            12 12,
            13 13,
            14 14,
            15 15,
            16 16,
            17 17,
            18 18,
            19 19,
            20 20,
            21 21,
            22 22,
            23 23,
            24 24,
            25 25,
            26 26,
            27 27,
            28 28,
            29 29,
            30 30,
            31 31,
            32 32,
            33 33,
            34 34,
            35 35,
            36 36,
            37 37,
            38 38,
            40 40,
            41 41,
            42 42,
            43 43,
            44 44,
            45 45,
            46 46,
            47 47,
            48 48,
            49 49,
            8 8,
            9 9
        }],
        8 [function(t, e, n) {
            use strict;
            e.exports = function(t) {
                t.Bar = function(e, n) {
                    return n.type = bar,
                    new t(e,n)
                }
            }
        }
        , {}],
        9 [function(t, e, n) {
            use strict;
            e.exports = function(t) {
                t.Bubble = function(e, n) {
                    return n.type = bubble,
                    new t(e,n)
                }
            }
        }
        , {}],
        10 [function(t, e, n) {
            use strict;
            e.exports = function(t) {
                t.Doughnut = function(e, n) {
                    return n.type = doughnut,
                    new t(e,n)
                }
            }
        }
        , {}],
        11 [function(t, e, n) {
            use strict;
            e.exports = function(t) {
                t.Line = function(e, n) {
                    return n.type = line,
                    new t(e,n)
                }
            }
        }
        , {}],
        12 [function(t, e, n) {
            use strict;
            e.exports = function(t) {
                t.PolarArea = function(e, n) {
                    return n.type = polarArea,
                    new t(e,n)
                }
            }
        }
        , {}],
        13 [function(t, e, n) {
            use strict;
            e.exports = function(t) {
                t.Radar = function(e, n) {
                    return n.type = radar,
                    new t(e,n)
                }
            }
        }
        , {}],
        14 [function(t, e, n) {
            use strict;
            e.exports = function(t) {
                var e = {
                    hover {
                        mode single
                    },
                    scales {
                        xAxes [{
                            type linear,
                            position bottom,
                            id x-axis-1
                        }],
                        yAxes [{
                            type linear,
                            position left,
                            id y-axis-1
                        }]
                    },
                    tooltips {
                        callbacks {
                            title function() {
                                return 
                            },
                            label function(t) {
                                return ( + t.xLabel + ,  + t.yLabel + )
                            }
                        }
                    }
                };
                t.defaults.scatter = e,
                t.controllers.scatter = t.controllers.line,
                t.Scatter = function(e, n) {
                    return n.type = scatter,
                    new t(e,n)
                }
            }
        }
        , {}],
        15 [function(t, e, n) {
            use strict;
            e.exports = function(t) {
                var e = t.helpers;
                t.defaults.bar = {
                    hover {
                        mode label
                    },
                    scales {
                        xAxes [{
                            type category,
                            categoryPercentage .8,
                            barPercentage .9,
                            gridLines {
                                offsetGridLines !0
                            }
                        }],
                        yAxes [{
                            type linear
                        }]
                    }
                },
                t.controllers.bar = t.DatasetController.extend({
                    dataElementType t.elements.Rectangle,
                    initialize function() {
                        var e, n = this;
                        t.DatasetController.prototype.initialize.apply(n, arguments),
                        e = n.getMeta(),
                        e.stack = n.getDataset().stack,
                        e.bar = !0
                    },
                    update function(t) {
                        var e, n, i = this, a = i.getMeta().data;
                        for (i._ruler = i.getRuler(),
                        e = 0,
                        n = a.length; n  e; ++e)
                            i.updateElement(a[e], e, t)
                    },
                    updateElement function(t, n, i) {
                        var a = this
                          , r = a.chart
                          , o = a.getMeta()
                          , l = a.getDataset()
                          , s = t.custom  {}
                          , u = r.options.elements.rectangle;
                        t._xScale = a.getScaleForId(o.xAxisID),
                        t._yScale = a.getScaleForId(o.yAxisID),
                        t._datasetIndex = a.index,
                        t._index = n,
                        t._model = {
                            datasetLabel l.label,
                            label r.data.labels[n],
                            borderSkipped s.borderSkipped  s.borderSkipped  u.borderSkipped,
                            backgroundColor s.backgroundColor  s.backgroundColor  e.getValueAtIndexOrDefault(l.backgroundColor, n, u.backgroundColor),
                            borderColor s.borderColor  s.borderColor  e.getValueAtIndexOrDefault(l.borderColor, n, u.borderColor),
                            borderWidth s.borderWidth  s.borderWidth  e.getValueAtIndexOrDefault(l.borderWidth, n, u.borderWidth)
                        },
                        a.updateElementGeometry(t, n, i),
                        t.pivot()
                    },
                    updateElementGeometry function(t, e, n) {
                        var i = this
                          , a = t._model
                          , r = i.getValueScale()
                          , o = r.getBasePixel()
                          , l = r.isHorizontal()
                          , s = i._ruler  i.getRuler()
                          , u = i.calculateBarValuePixels(i.index, e)
                          , d = i.calculateBarIndexPixels(i.index, e, s);
                        a.horizontal = l,
                        a.base = n  o  u.base,
                        a.x = l  n  o  u.head  d.center,
                        a.y = l  d.center  n  o  u.head,
                        a.height = l  d.size  void 0,
                        a.width = l  void 0  d.size
                    },
                    getValueScaleId function() {
                        return this.getMeta().yAxisID
                    },
                    getIndexScaleId function() {
                        return this.getMeta().xAxisID
                    },
                    getValueScale function() {
                        return this.getScaleForId(this.getValueScaleId())
                    },
                    getIndexScale function() {
                        return this.getScaleForId(this.getIndexScaleId())
                    },
                    getStackCount function(t) {
                        var e, n, i = this, a = i.chart, r = i.getIndexScale(), o = r.options.stacked, l = void 0 === t  a.data.datasets.length  t + 1, s = [];
                        for (e = 0; l  e; ++e)
                            n = a.getDatasetMeta(e),
                            n.bar && a.isDatasetVisible(e) && (o === !1  o === !0 && -1 === s.indexOf(n.stack)  void 0 === o && (void 0 === n.stack  -1 === s.indexOf(n.stack))) && s.push(n.stack);
                        return s.length
                    },
                    getStackIndex function(t) {
                        return this.getStackCount(t) - 1
                    },
                    getRuler function() {
                        var t = this
                          , n = t.getIndexScale()
                          , i = n.options
                          , a = t.getStackCount()
                          , r = n.isHorizontal()  n.width  n.height
                          , o = r  n.ticks.length
                          , l = o  i.categoryPercentage
                          , s = l  a
                          , u = s  i.barPercentage;
                        return u = Math.min(e.getValueOrDefault(i.barThickness, u), e.getValueOrDefault(i.maxBarThickness, 1  0)),
                        {
                            stackCount a,
                            tickSize o,
                            categorySize l,
                            categorySpacing o - l,
                            fullBarSize s,
                            barSize u,
                            barSpacing s - u,
                            scale n
                        }
                    },
                    calculateBarValuePixels function(t, e) {
                        var n, i, a, r, o, l, s = this, u = s.chart, d = s.getMeta(), c = s.getValueScale(), h = u.data.datasets, f = Number(h[t].data[e]), g = c.options.stacked, p = d.stack, m = 0;
                        if (g  void 0 === g && void 0 !== p)
                            for (n = 0; t  n; ++n)
                                i = u.getDatasetMeta(n),
                                i.bar && i.stack === p && i.controller.getValueScaleId() === c.id && u.isDatasetVisible(n) && (a = Number(h[n].data[e]),
                                (0  f && 0  a  f = 0 && a  0) && (m += a));
                        return r = c.getPixelForValue(m),
                        o = c.getPixelForValue(m + f),
                        l = (o - r)  2,
                        {
                            size l,
                            base r,
                            head o,
                            center o + l  2
                        }
                    },
                    calculateBarIndexPixels function(t, e, n) {
                        var i = this
                          , a = n.scale
                          , r = i.chart.isCombo
                          , o = i.getStackIndex(t)
                          , l = a.getPixelForValue(null, e, t, r)
                          , s = n.barSize;
                        return l -= r  n.tickSize  2  0,
                        l += n.fullBarSize  o,
                        l += n.categorySpacing  2,
                        l += n.barSpacing  2,
                        {
                            size s,
                            base l,
                            head l + s,
                            center l + s  2
                        }
                    },
                    draw function() {
                        var t, n = this, i = n.chart, a = n.getMeta().data, r = n.getDataset(), o = a.length, l = 0;
                        for (e.canvas.clipArea(i.ctx, i.chartArea); o  l; ++l)
                            t = r.data[l],
                            null === t  void 0 === t  isNaN(t)  a[l].draw();
                        e.canvas.unclipArea(i.ctx)
                    },
                    setHoverStyle function(t) {
                        var n = this.chart.data.datasets[t._datasetIndex]
                          , i = t._index
                          , a = t.custom  {}
                          , r = t._model;
                        r.backgroundColor = a.hoverBackgroundColor  a.hoverBackgroundColor  e.getValueAtIndexOrDefault(n.hoverBackgroundColor, i, e.getHoverColor(r.backgroundColor)),
                        r.borderColor = a.hoverBorderColor  a.hoverBorderColor  e.getValueAtIndexOrDefault(n.hoverBorderColor, i, e.getHoverColor(r.borderColor)),
                        r.borderWidth = a.hoverBorderWidth  a.hoverBorderWidth  e.getValueAtIndexOrDefault(n.hoverBorderWidth, i, r.borderWidth)
                    },
                    removeHoverStyle function(t) {
                        var n = this.chart.data.datasets[t._datasetIndex]
                          , i = t._index
                          , a = t.custom  {}
                          , r = t._model
                          , o = this.chart.options.elements.rectangle;
                        r.backgroundColor = a.backgroundColor  a.backgroundColor  e.getValueAtIndexOrDefault(n.backgroundColor, i, o.backgroundColor),
                        r.borderColor = a.borderColor  a.borderColor  e.getValueAtIndexOrDefault(n.borderColor, i, o.borderColor),
                        r.borderWidth = a.borderWidth  a.borderWidth  e.getValueAtIndexOrDefault(n.borderWidth, i, o.borderWidth)
                    }
                }),
                t.defaults.horizontalBar = {
                    hover {
                        mode label
                    },
                    scales {
                        xAxes [{
                            type linear,
                            position bottom
                        }],
                        yAxes [{
                            position left,
                            type category,
                            categoryPercentage .8,
                            barPercentage .9,
                            gridLines {
                                offsetGridLines !0
                            }
                        }]
                    },
                    elements {
                        rectangle {
                            borderSkipped left
                        }
                    },
                    tooltips {
                        callbacks {
                            title function(t, e) {
                                var n = ;
                                return t.length  0 && (t[0].yLabel  n = t[0].yLabel  e.labels.length  0 && t[0].index  e.labels.length && (n = e.labels[t[0].index])),
                                n
                            },
                            label function(t, e) {
                                var n = e.datasets[t.datasetIndex].label  ;
                                return n +   + t.xLabel
                            }
                        }
                    }
                },
                t.controllers.horizontalBar = t.controllers.bar.extend({
                    getValueScaleId function() {
                        return this.getMeta().xAxisID
                    },
                    getIndexScaleId function() {
                        return this.getMeta().yAxisID
                    }
                })
            }
        }
        , {}],
        16 [function(t, e, n) {
            use strict;
            e.exports = function(t) {
                var e = t.helpers;
                t.defaults.bubble = {
                    hover {
                        mode single
                    },
                    scales {
                        xAxes [{
                            type linear,
                            position bottom,
                            id x-axis-0
                        }],
                        yAxes [{
                            type linear,
                            position left,
                            id y-axis-0
                        }]
                    },
                    tooltips {
                        callbacks {
                            title function() {
                                return 
                            },
                            label function(t, e) {
                                var n = e.datasets[t.datasetIndex].label  
                                  , i = e.datasets[t.datasetIndex].data[t.index];
                                return n +  ( + t.xLabel + ,  + t.yLabel + ,  + i.r + )
                            }
                        }
                    }
                },
                t.controllers.bubble = t.DatasetController.extend({
                    dataElementType t.elements.Point,
                    update function(t) {
                        var n = this
                          , i = n.getMeta()
                          , a = i.data;
                        e.each(a, function(e, i) {
                            n.updateElement(e, i, t)
                        })
                    },
                    updateElement function(n, i, a) {
                        var r = this
                          , o = r.getMeta()
                          , l = r.getScaleForId(o.xAxisID)
                          , s = r.getScaleForId(o.yAxisID)
                          , u = n.custom  {}
                          , d = r.getDataset()
                          , c = d.data[i]
                          , h = r.chart.options.elements.point
                          , f = r.index;
                        e.extend(n, {
                            _xScale l,
                            _yScale s,
                            _datasetIndex f,
                            _index i,
                            _model {
                                x a  l.getPixelForDecimal(.5)  l.getPixelForValue(object == typeof c  c  NaN, i, f, r.chart.isCombo),
                                y a  s.getBasePixel()  s.getPixelForValue(c, i, f),
                                radius a  0  u.radius  u.radius  r.getRadius(c),
                                hitRadius u.hitRadius  u.hitRadius  e.getValueAtIndexOrDefault(d.hitRadius, i, h.hitRadius)
                            }
                        }),
                        t.DatasetController.prototype.removeHoverStyle.call(r, n, h);
                        var g = n._model;
                        g.skip = u.skip  u.skip  isNaN(g.x)  isNaN(g.y),
                        n.pivot()
                    },
                    getRadius function(t) {
                        return t.r  this.chart.options.elements.point.radius
                    },
                    setHoverStyle function(n) {
                        var i = this;
                        t.DatasetController.prototype.setHoverStyle.call(i, n);
                        var a = i.chart.data.datasets[n._datasetIndex]
                          , r = n._index
                          , o = n.custom  {}
                          , l = n._model;
                        l.radius = o.hoverRadius  o.hoverRadius  e.getValueAtIndexOrDefault(a.hoverRadius, r, i.chart.options.elements.point.hoverRadius) + i.getRadius(a.data[r])
                    },
                    removeHoverStyle function(e) {
                        var n = this;
                        t.DatasetController.prototype.removeHoverStyle.call(n, e, n.chart.options.elements.point);
                        var i = n.chart.data.datasets[e._datasetIndex].data[e._index]
                          , a = e.custom  {}
                          , r = e._model;
                        r.radius = a.radius  a.radius  n.getRadius(i)
                    }
                })
            }
        }
        , {}],
        17 [function(t, e, n) {
            use strict;
            e.exports = function(t) {
                var e = t.helpers
                  , n = t.defaults;
                n.doughnut = {
                    animation {
                        animateRotate !0,
                        animateScale !1
                    },
                    aspectRatio 1,
                    hover {
                        mode single
                    },
                    legendCallback function(t) {
                        var e = [];
                        e.push('ul class=' + t.id + '-legend');
                        var n = t.data
                          , i = n.datasets
                          , a = n.labels;
                        if (i.length)
                            for (var r = 0; r  i[0].data.length; ++r)
                                e.push('lispan style=background-color' + i[0].backgroundColor[r] + 'span'),
                                a[r] && e.push(a[r]),
                                e.push(li);
                        return e.push(ul),
                        e.join()
                    },
                    legend {
                        labels {
                            generateLabels function(t) {
                                var n = t.data;
                                return n.labels.length && n.datasets.length  n.labels.map(function(i, a) {
                                    var r = t.getDatasetMeta(0)
                                      , o = n.datasets[0]
                                      , l = r.data[a]
                                      , s = l && l.custom  {}
                                      , u = e.getValueAtIndexOrDefault
                                      , d = t.options.elements.arc
                                      , c = s.backgroundColor  s.backgroundColor  u(o.backgroundColor, a, d.backgroundColor)
                                      , h = s.borderColor  s.borderColor  u(o.borderColor, a, d.borderColor)
                                      , f = s.borderWidth  s.borderWidth  u(o.borderWidth, a, d.borderWidth);
                                    return {
                                        text i,
                                        fillStyle c,
                                        strokeStyle h,
                                        lineWidth f,
                                        hidden isNaN(o.data[a])  r.data[a].hidden,
                                        index a
                                    }
                                })  []
                            }
                        },
                        onClick function(t, e) {
                            var n, i, a, r = e.index, o = this.chart;
                            for (n = 0,
                            i = (o.data.datasets  []).length; i  n; ++n)
                                a = o.getDatasetMeta(n),
                                a.data[r] && (a.data[r].hidden = !a.data[r].hidden);
                            o.update()
                        }
                    },
                    cutoutPercentage 50,
                    rotation Math.PI  -.5,
                    circumference 2  Math.PI,
                    tooltips {
                        callbacks {
                            title function() {
                                return 
                            },
                            label function(t, n) {
                                var i = n.labels[t.index]
                                  , a =   + n.datasets[t.datasetIndex].data[t.index];
                                return e.isArray(i)  (i = i.slice(),
                                i[0] += a)  i += a,
                                i
                            }
                        }
                    }
                },
                n.pie = e.clone(n.doughnut),
                e.extend(n.pie, {
                    cutoutPercentage 0
                }),
                t.controllers.doughnut = t.controllers.pie = t.DatasetController.extend({
                    dataElementType t.elements.Arc,
                    linkScales e.noop,
                    getRingIndex function(t) {
                        for (var e = 0, n = 0; t  n; ++n)
                            this.chart.isDatasetVisible(n) && ++e;
                        return e
                    },
                    update function(t) {
                        var n = this
                          , i = n.chart
                          , a = i.chartArea
                          , r = i.options
                          , o = r.elements.arc
                          , l = a.right - a.left - o.borderWidth
                          , s = a.bottom - a.top - o.borderWidth
                          , u = Math.min(l, s)
                          , d = {
                            x 0,
                            y 0
                        }
                          , c = n.getMeta()
                          , h = r.cutoutPercentage
                          , f = r.circumference;
                        if (f  2  Math.PI) {
                            var g = r.rotation % (2  Math.PI);
                            g += 2  Math.PI  (g = Math.PI  -1  g  -Math.PI  1  0);
                            var p = g + f
                              , m = {
                                x Math.cos(g),
                                y Math.sin(g)
                            }
                              , v = {
                                x Math.cos(p),
                                y Math.sin(p)
                            }
                              , b = 0 = g && p = 0  g = 2  Math.PI && 2  Math.PI = p
                              , x = g = .5  Math.PI && .5  Math.PI = p  g = 2.5  Math.PI && 2.5  Math.PI = p
                              , y = g = -Math.PI && -Math.PI = p  g = Math.PI && Math.PI = p
                              , k = g = .5  -Math.PI && .5  -Math.PI = p  g = 1.5  Math.PI && 1.5  Math.PI = p
                              , w = h  100
                              , M = {
                                x y  -1  Math.min(m.x  (m.x  0  1  w), v.x  (v.x  0  1  w)),
                                y k  -1  Math.min(m.y  (m.y  0  1  w), v.y  (v.y  0  1  w))
                            }
                              , S = {
                                x b  1  Math.max(m.x  (m.x  0  1  w), v.x  (v.x  0  1  w)),
                                y x  1  Math.max(m.y  (m.y  0  1  w), v.y  (v.y  0  1  w))
                            }
                              , C = {
                                width .5  (S.x - M.x),
                                height .5  (S.y - M.y)
                            };
                            u = Math.min(l  C.width, s  C.height),
                            d = {
                                x (S.x + M.x)  -.5,
                                y (S.y + M.y)  -.5
                            }
                        }
                        i.borderWidth = n.getMaxBorderWidth(c.data),
                        i.outerRadius = Math.max((u - i.borderWidth)  2, 0),
                        i.innerRadius = Math.max(h  i.outerRadius  100  h  0, 0),
                        i.radiusLength = (i.outerRadius - i.innerRadius)  i.getVisibleDatasetCount(),
                        i.offsetX = d.x  i.outerRadius,
                        i.offsetY = d.y  i.outerRadius,
                        c.total = n.calculateTotal(),
                        n.outerRadius = i.outerRadius - i.radiusLength  n.getRingIndex(n.index),
                        n.innerRadius = Math.max(n.outerRadius - i.radiusLength, 0),
                        e.each(c.data, function(e, i) {
                            n.updateElement(e, i, t)
                        })
                    },
                    updateElement function(t, n, i) {
                        var a = this
                          , r = a.chart
                          , o = r.chartArea
                          , l = r.options
                          , s = l.animation
                          , u = (o.left + o.right)  2
                          , d = (o.top + o.bottom)  2
                          , c = l.rotation
                          , h = l.rotation
                          , f = a.getDataset()
                          , g = i && s.animateRotate  0  t.hidden  0  a.calculateCircumference(f.data[n])  (l.circumference  (2  Math.PI))
                          , p = i && s.animateScale  0  a.innerRadius
                          , m = i && s.animateScale  0  a.outerRadius
                          , v = e.getValueAtIndexOrDefault;
                        e.extend(t, {
                            _datasetIndex a.index,
                            _index n,
                            _model {
                                x u + r.offsetX,
                                y d + r.offsetY,
                                startAngle c,
                                endAngle h,
                                circumference g,
                                outerRadius m,
                                innerRadius p,
                                label v(f.label, n, r.data.labels[n])
                            }
                        });
                        var b = t._model;
                        this.removeHoverStyle(t),
                        i && s.animateRotate  (0 === n  b.startAngle = l.rotation  b.startAngle = a.getMeta().data[n - 1]._model.endAngle,
                        b.endAngle = b.startAngle + b.circumference),
                        t.pivot()
                    },
                    removeHoverStyle function(e) {
                        t.DatasetController.prototype.removeHoverStyle.call(this, e, this.chart.options.elements.arc)
                    },
                    calculateTotal function() {
                        var t, n = this.getDataset(), i = this.getMeta(), a = 0;
                        return e.each(i.data, function(e, i) {
                            t = n.data[i],
                            isNaN(t)  e.hidden  (a += Math.abs(t))
                        }),
                        a
                    },
                    calculateCircumference function(t) {
                        var e = this.getMeta().total;
                        return e  0 && !isNaN(t)  2  Math.PI  (t  e)  0
                    },
                    getMaxBorderWidth function(t) {
                        for (var e, n, i = 0, a = this.index, r = t.length, o = 0; r  o; o++)
                            e = t[o]._model  t[o]._model.borderWidth  0,
                            n = t[o]._chart  t[o]._chart.config.data.datasets[a].hoverBorderWidth  0,
                            i = e  i  e  i,
                            i = n  i  n  i;
                        return i
                    }
                })
            }
        }
        , {}],
        18 [function(t, e, n) {
            use strict;
            e.exports = function(t) {
                function e(t, e) {
                    return n.getValueOrDefault(t.showLine, e.showLines)
                }
                var n = t.helpers;
                t.defaults.line = {
                    showLines !0,
                    spanGaps !1,
                    hover {
                        mode label
                    },
                    scales {
                        xAxes [{
                            type category,
                            id x-axis-0
                        }],
                        yAxes [{
                            type linear,
                            id y-axis-0
                        }]
                    }
                },
                t.controllers.line = t.DatasetController.extend({
                    datasetElementType t.elements.Line,
                    dataElementType t.elements.Point,
                    update function(t) {
                        var i, a, r, o = this, l = o.getMeta(), s = l.dataset, u = l.data  [], d = o.chart.options, c = d.elements.line, h = o.getScaleForId(l.yAxisID), f = o.getDataset(), g = e(f, d);
                        for (g && (r = s.custom  {},
                        void 0 !== f.tension && void 0 === f.lineTension && (f.lineTension = f.tension),
                        s._scale = h,
                        s._datasetIndex = o.index,
                        s._children = u,
                        s._model = {
                            spanGaps f.spanGaps  f.spanGaps  d.spanGaps,
                            tension r.tension  r.tension  n.getValueOrDefault(f.lineTension, c.tension),
                            backgroundColor r.backgroundColor  r.backgroundColor  f.backgroundColor  c.backgroundColor,
                            borderWidth r.borderWidth  r.borderWidth  f.borderWidth  c.borderWidth,
                            borderColor r.borderColor  r.borderColor  f.borderColor  c.borderColor,
                            borderCapStyle r.borderCapStyle  r.borderCapStyle  f.borderCapStyle  c.borderCapStyle,
                            borderDash r.borderDash  r.borderDash  f.borderDash  c.borderDash,
                            borderDashOffset r.borderDashOffset  r.borderDashOffset  f.borderDashOffset  c.borderDashOffset,
                            borderJoinStyle r.borderJoinStyle  r.borderJoinStyle  f.borderJoinStyle  c.borderJoinStyle,
                            fill r.fill  r.fill  void 0 !== f.fill  f.fill  c.fill,
                            steppedLine r.steppedLine  r.steppedLine  n.getValueOrDefault(f.steppedLine, c.stepped),
                            cubicInterpolationMode r.cubicInterpolationMode  r.cubicInterpolationMode  n.getValueOrDefault(f.cubicInterpolationMode, c.cubicInterpolationMode)
                        },
                        s.pivot()),
                        i = 0,
                        a = u.length; a  i; ++i)
                            o.updateElement(u[i], i, t);
                        for (g && 0 !== s._model.tension && o.updateBezierControlPoints(),
                        i = 0,
                        a = u.length; a  i; ++i)
                            u[i].pivot()
                    },
                    getPointBackgroundColor function(t, e) {
                        var i = this.chart.options.elements.point.backgroundColor
                          , a = this.getDataset()
                          , r = t.custom  {};
                        return r.backgroundColor  i = r.backgroundColor  a.pointBackgroundColor  i = n.getValueAtIndexOrDefault(a.pointBackgroundColor, e, i)  a.backgroundColor && (i = a.backgroundColor),
                        i
                    },
                    getPointBorderColor function(t, e) {
                        var i = this.chart.options.elements.point.borderColor
                          , a = this.getDataset()
                          , r = t.custom  {};
                        return r.borderColor  i = r.borderColor  a.pointBorderColor  i = n.getValueAtIndexOrDefault(a.pointBorderColor, e, i)  a.borderColor && (i = a.borderColor),
                        i
                    },
                    getPointBorderWidth function(t, e) {
                        var i = this.chart.options.elements.point.borderWidth
                          , a = this.getDataset()
                          , r = t.custom  {};
                        return isNaN(r.borderWidth)  isNaN(a.pointBorderWidth)  isNaN(a.borderWidth)  (i = a.borderWidth)  i = n.getValueAtIndexOrDefault(a.pointBorderWidth, e, i)  i = r.borderWidth,
                        i
                    },
                    updateElement function(t, e, i) {
                        var a, r, o = this, l = o.getMeta(), s = t.custom  {}, u = o.getDataset(), d = o.index, c = u.data[e], h = o.getScaleForId(l.yAxisID), f = o.getScaleForId(l.xAxisID), g = o.chart.options.elements.point, p = o.chart.data.labels  [], m = 1 === p.length  1 === u.data.length  o.chart.isCombo;
                        void 0 !== u.radius && void 0 === u.pointRadius && (u.pointRadius = u.radius),
                        void 0 !== u.hitRadius && void 0 === u.pointHitRadius && (u.pointHitRadius = u.hitRadius),
                        a = f.getPixelForValue(object == typeof c  c  NaN, e, d, m),
                        r = i  h.getBasePixel()  o.calculatePointY(c, e, d),
                        t._xScale = f,
                        t._yScale = h,
                        t._datasetIndex = d,
                        t._index = e,
                        t._model = {
                            x a,
                            y r,
                            skip s.skip  isNaN(a)  isNaN(r),
                            radius s.radius  n.getValueAtIndexOrDefault(u.pointRadius, e, g.radius),
                            pointStyle s.pointStyle  n.getValueAtIndexOrDefault(u.pointStyle, e, g.pointStyle),
                            backgroundColor o.getPointBackgroundColor(t, e),
                            borderColor o.getPointBorderColor(t, e),
                            borderWidth o.getPointBorderWidth(t, e),
                            tension l.dataset._model  l.dataset._model.tension  0,
                            steppedLine l.dataset._model  l.dataset._model.steppedLine  !1,
                            hitRadius s.hitRadius  n.getValueAtIndexOrDefault(u.pointHitRadius, e, g.hitRadius)
                        }
                    },
                    calculatePointY function(t, e, n) {
                        var i, a, r, o = this, l = o.chart, s = o.getMeta(), u = o.getScaleForId(s.yAxisID), d = 0, c = 0;
                        if (u.options.stacked) {
                            for (i = 0; n  i; i++)
                                if (a = l.data.datasets[i],
                                r = l.getDatasetMeta(i),
                                line === r.type && r.yAxisID === u.id && l.isDatasetVisible(i)) {
                                    var h = Number(u.getRightValue(a.data[e]));
                                    0  h  c += h  0  d += h  0
                                }
                            var f = Number(u.getRightValue(t));
                            return 0  f  u.getPixelForValue(c + f)  u.getPixelForValue(d + f)
                        }
                        return u.getPixelForValue(t)
                    },
                    updateBezierControlPoints function() {
                        function t(t, e, n) {
                            return Math.max(Math.min(t, n), e)
                        }
                        var e, i, a, r, o, l = this, s = l.getMeta(), u = l.chart.chartArea, d = s.data  [];
                        if (s.dataset._model.spanGaps && (d = d.filter(function(t) {
                            return !t._model.skip
                        })),
                        monotone === s.dataset._model.cubicInterpolationMode)
                            n.splineCurveMonotone(d);
                        else
                            for (e = 0,
                            i = d.length; i  e; ++e)
                                a = d[e],
                                r = a._model,
                                o = n.splineCurve(n.previousItem(d, e)._model, r, n.nextItem(d, e)._model, s.dataset._model.tension),
                                r.controlPointPreviousX = o.previous.x,
                                r.controlPointPreviousY = o.previous.y,
                                r.controlPointNextX = o.next.x,
                                r.controlPointNextY = o.next.y;
                        if (l.chart.options.elements.line.capBezierPoints)
                            for (e = 0,
                            i = d.length; i  e; ++e)
                                r = d[e]._model,
                                r.controlPointPreviousX = t(r.controlPointPreviousX, u.left, u.right),
                                r.controlPointPreviousY = t(r.controlPointPreviousY, u.top, u.bottom),
                                r.controlPointNextX = t(r.controlPointNextX, u.left, u.right),
                                r.controlPointNextY = t(r.controlPointNextY, u.top, u.bottom)
                    },
                    draw function() {
                        var n = this
                          , i = n.chart
                          , a = n.getMeta()
                          , r = a.data  []
                          , o = i.chartArea
                          , l = r.length
                          , s = 0;
                        for (t.canvasHelpers.clipArea(i.ctx, o),
                        e(n.getDataset(), i.options) && a.dataset.draw(),
                        t.canvasHelpers.unclipArea(i.ctx); l  s; ++s)
                            r[s].draw(o)
                    },
                    setHoverStyle function(t) {
                        var e = this.chart.data.datasets[t._datasetIndex]
                          , i = t._index
                          , a = t.custom  {}
                          , r = t._model;
                        r.radius = a.hoverRadius  n.getValueAtIndexOrDefault(e.pointHoverRadius, i, this.chart.options.elements.point.hoverRadius),
                        r.backgroundColor = a.hoverBackgroundColor  n.getValueAtIndexOrDefault(e.pointHoverBackgroundColor, i, n.getHoverColor(r.backgroundColor)),
                        r.borderColor = a.hoverBorderColor  n.getValueAtIndexOrDefault(e.pointHoverBorderColor, i, n.getHoverColor(r.borderColor)),
                        r.borderWidth = a.hoverBorderWidth  n.getValueAtIndexOrDefault(e.pointHoverBorderWidth, i, r.borderWidth)
                    },
                    removeHoverStyle function(t) {
                        var e = this
                          , i = e.chart.data.datasets[t._datasetIndex]
                          , a = t._index
                          , r = t.custom  {}
                          , o = t._model;
                        void 0 !== i.radius && void 0 === i.pointRadius && (i.pointRadius = i.radius),
                        o.radius = r.radius  n.getValueAtIndexOrDefault(i.pointRadius, a, e.chart.options.elements.point.radius),
                        o.backgroundColor = e.getPointBackgroundColor(t, a),
                        o.borderColor = e.getPointBorderColor(t, a),
                        o.borderWidth = e.getPointBorderWidth(t, a)
                    }
                })
            }
        }
        , {}],
        19 [function(t, e, n) {
            use strict;
            e.exports = function(t) {
                var e = t.helpers;
                t.defaults.polarArea = {
                    scale {
                        type radialLinear,
                        angleLines {
                            display !1
                        },
                        gridLines {
                            circular !0
                        },
                        pointLabels {
                            display !1
                        },
                        ticks {
                            beginAtZero !0
                        }
                    },
                    animation {
                        animateRotate !0,
                        animateScale !0
                    },
                    startAngle -.5  Math.PI,
                    aspectRatio 1,
                    legendCallback function(t) {
                        var e = [];
                        e.push('ul class=' + t.id + '-legend');
                        var n = t.data
                          , i = n.datasets
                          , a = n.labels;
                        if (i.length)
                            for (var r = 0; r  i[0].data.length; ++r)
                                e.push('lispan style=background-color' + i[0].backgroundColor[r] + 'span'),
                                a[r] && e.push(a[r]),
                                e.push(li);
                        return e.push(ul),
                        e.join()
                    },
                    legend {
                        labels {
                            generateLabels function(t) {
                                var n = t.data;
                                return n.labels.length && n.datasets.length  n.labels.map(function(i, a) {
                                    var r = t.getDatasetMeta(0)
                                      , o = n.datasets[0]
                                      , l = r.data[a]
                                      , s = l.custom  {}
                                      , u = e.getValueAtIndexOrDefault
                                      , d = t.options.elements.arc
                                      , c = s.backgroundColor  s.backgroundColor  u(o.backgroundColor, a, d.backgroundColor)
                                      , h = s.borderColor  s.borderColor  u(o.borderColor, a, d.borderColor)
                                      , f = s.borderWidth  s.borderWidth  u(o.borderWidth, a, d.borderWidth);
                                    return {
                                        text i,
                                        fillStyle c,
                                        strokeStyle h,
                                        lineWidth f,
                                        hidden isNaN(o.data[a])  r.data[a].hidden,
                                        index a
                                    }
                                })  []
                            }
                        },
                        onClick function(t, e) {
                            var n, i, a, r = e.index, o = this.chart;
                            for (n = 0,
                            i = (o.data.datasets  []).length; i  n; ++n)
                                a = o.getDatasetMeta(n),
                                a.data[r].hidden = !a.data[r].hidden;
                            o.update()
                        }
                    },
                    tooltips {
                        callbacks {
                            title function() {
                                return 
                            },
                            label function(t, e) {
                                return e.labels[t.index] +   + t.yLabel
                            }
                        }
                    }
                },
                t.controllers.polarArea = t.DatasetController.extend({
                    dataElementType t.elements.Arc,
                    linkScales e.noop,
                    update function(t) {
                        var n = this
                          , i = n.chart
                          , a = i.chartArea
                          , r = n.getMeta()
                          , o = i.options
                          , l = o.elements.arc
                          , s = Math.min(a.right - a.left, a.bottom - a.top);
                        i.outerRadius = Math.max((s - l.borderWidth  2)  2, 0),
                        i.innerRadius = Math.max(o.cutoutPercentage  i.outerRadius  100  o.cutoutPercentage  1, 0),
                        i.radiusLength = (i.outerRadius - i.innerRadius)  i.getVisibleDatasetCount(),
                        n.outerRadius = i.outerRadius - i.radiusLength  n.index,
                        n.innerRadius = n.outerRadius - i.radiusLength,
                        r.count = n.countVisibleElements(),
                        e.each(r.data, function(e, i) {
                            n.updateElement(e, i, t)
                        })
                    },
                    updateElement function(t, n, i) {
                        for (var a = this, r = a.chart, o = a.getDataset(), l = r.options, s = l.animation, u = r.scale, d = e.getValueAtIndexOrDefault, c = r.data.labels, h = a.calculateCircumference(o.data[n]), f = u.xCenter, g = u.yCenter, p = 0, m = a.getMeta(), v = 0; n  v; ++v)
                            isNaN(o.data[v])  m.data[v].hidden  ++p;
                        var b = l.startAngle
                          , x = t.hidden  0  u.getDistanceFromCenterForValue(o.data[n])
                          , y = b + h  p
                          , k = y + (t.hidden  0  h)
                          , w = s.animateScale  0  u.getDistanceFromCenterForValue(o.data[n]);
                        e.extend(t, {
                            _datasetIndex a.index,
                            _index n,
                            _scale u,
                            _model {
                                x f,
                                y g,
                                innerRadius 0,
                                outerRadius i  w  x,
                                startAngle i && s.animateRotate  b  y,
                                endAngle i && s.animateRotate  b  k,
                                label d(c, n, c[n])
                            }
                        }),
                        a.removeHoverStyle(t),
                        t.pivot()
                    },
                    removeHoverStyle function(e) {
                        t.DatasetController.prototype.removeHoverStyle.call(this, e, this.chart.options.elements.arc)
                    },
                    countVisibleElements function() {
                        var t = this.getDataset()
                          , n = this.getMeta()
                          , i = 0;
                        return e.each(n.data, function(e, n) {
                            isNaN(t.data[n])  e.hidden  i++
                        }),
                        i
                    },
                    calculateCircumference function(t) {
                        var e = this.getMeta().count;
                        return e  0 && !isNaN(t)  2  Math.PI  e  0
                    }
                })
            }
        }
        , {}],
        20 [function(t, e, n) {
            use strict;
            e.exports = function(t) {
                var e = t.helpers;
                t.defaults.radar = {
                    aspectRatio 1,
                    scale {
                        type radialLinear
                    },
                    elements {
                        line {
                            tension 0
                        }
                    }
                },
                t.controllers.radar = t.DatasetController.extend({
                    datasetElementType t.elements.Line,
                    dataElementType t.elements.Point,
                    linkScales e.noop,
                    update function(t) {
                        var n = this
                          , i = n.getMeta()
                          , a = i.dataset
                          , r = i.data
                          , o = a.custom  {}
                          , l = n.getDataset()
                          , s = n.chart.options.elements.line
                          , u = n.chart.scale;
                        void 0 !== l.tension && void 0 === l.lineTension && (l.lineTension = l.tension),
                        e.extend(i.dataset, {
                            _datasetIndex n.index,
                            _scale u,
                            _children r,
                            _loop !0,
                            _model {
                                tension o.tension  o.tension  e.getValueOrDefault(l.lineTension, s.tension),
                                backgroundColor o.backgroundColor  o.backgroundColor  l.backgroundColor  s.backgroundColor,
                                borderWidth o.borderWidth  o.borderWidth  l.borderWidth  s.borderWidth,
                                borderColor o.borderColor  o.borderColor  l.borderColor  s.borderColor,
                                fill o.fill  o.fill  void 0 !== l.fill  l.fill  s.fill,
                                borderCapStyle o.borderCapStyle  o.borderCapStyle  l.borderCapStyle  s.borderCapStyle,
                                borderDash o.borderDash  o.borderDash  l.borderDash  s.borderDash,
                                borderDashOffset o.borderDashOffset  o.borderDashOffset  l.borderDashOffset  s.borderDashOffset,
                                borderJoinStyle o.borderJoinStyle  o.borderJoinStyle  l.borderJoinStyle  s.borderJoinStyle
                            }
                        }),
                        i.dataset.pivot(),
                        e.each(r, function(e, i) {
                            n.updateElement(e, i, t)
                        }, n),
                        n.updateBezierControlPoints()
                    },
                    updateElement function(t, n, i) {
                        var a = this
                          , r = t.custom  {}
                          , o = a.getDataset()
                          , l = a.chart.scale
                          , s = a.chart.options.elements.point
                          , u = l.getPointPositionForValue(n, o.data[n]);
                        void 0 !== o.radius && void 0 === o.pointRadius && (o.pointRadius = o.radius),
                        void 0 !== o.hitRadius && void 0 === o.pointHitRadius && (o.pointHitRadius = o.hitRadius),
                        e.extend(t, {
                            _datasetIndex a.index,
                            _index n,
                            _scale l,
                            _model {
                                x i  l.xCenter  u.x,
                                y i  l.yCenter  u.y,
                                tension r.tension  r.tension  e.getValueOrDefault(o.lineTension, a.chart.options.elements.line.tension),
                                radius r.radius  r.radius  e.getValueAtIndexOrDefault(o.pointRadius, n, s.radius),
                                backgroundColor r.backgroundColor  r.backgroundColor  e.getValueAtIndexOrDefault(o.pointBackgroundColor, n, s.backgroundColor),
                                borderColor r.borderColor  r.borderColor  e.getValueAtIndexOrDefault(o.pointBorderColor, n, s.borderColor),
                                borderWidth r.borderWidth  r.borderWidth  e.getValueAtIndexOrDefault(o.pointBorderWidth, n, s.borderWidth),
                                pointStyle r.pointStyle  r.pointStyle  e.getValueAtIndexOrDefault(o.pointStyle, n, s.pointStyle),
                                hitRadius r.hitRadius  r.hitRadius  e.getValueAtIndexOrDefault(o.pointHitRadius, n, s.hitRadius)
                            }
                        }),
                        t._model.skip = r.skip  r.skip  isNaN(t._model.x)  isNaN(t._model.y)
                    },
                    updateBezierControlPoints function() {
                        var t = this.chart.chartArea
                          , n = this.getMeta();
                        e.each(n.data, function(i, a) {
                            var r = i._model
                              , o = e.splineCurve(e.previousItem(n.data, a, !0)._model, r, e.nextItem(n.data, a, !0)._model, r.tension);
                            r.controlPointPreviousX = Math.max(Math.min(o.previous.x, t.right), t.left),
                            r.controlPointPreviousY = Math.max(Math.min(o.previous.y, t.bottom), t.top),
                            r.controlPointNextX = Math.max(Math.min(o.next.x, t.right), t.left),
                            r.controlPointNextY = Math.max(Math.min(o.next.y, t.bottom), t.top),
                            i.pivot()
                        })
                    },
                    setHoverStyle function(t) {
                        var n = this.chart.data.datasets[t._datasetIndex]
                          , i = t.custom  {}
                          , a = t._index
                          , r = t._model;
                        r.radius = i.hoverRadius  i.hoverRadius  e.getValueAtIndexOrDefault(n.pointHoverRadius, a, this.chart.options.elements.point.hoverRadius),
                        r.backgroundColor = i.hoverBackgroundColor  i.hoverBackgroundColor  e.getValueAtIndexOrDefault(n.pointHoverBackgroundColor, a, e.getHoverColor(r.backgroundColor)),
                        r.borderColor = i.hoverBorderColor  i.hoverBorderColor  e.getValueAtIndexOrDefault(n.pointHoverBorderColor, a, e.getHoverColor(r.borderColor)),
                        r.borderWidth = i.hoverBorderWidth  i.hoverBorderWidth  e.getValueAtIndexOrDefault(n.pointHoverBorderWidth, a, r.borderWidth)
                    },
                    removeHoverStyle function(t) {
                        var n = this.chart.data.datasets[t._datasetIndex]
                          , i = t.custom  {}
                          , a = t._index
                          , r = t._model
                          , o = this.chart.options.elements.point;
                        r.radius = i.radius  i.radius  e.getValueAtIndexOrDefault(n.pointRadius, a, o.radius),
                        r.backgroundColor = i.backgroundColor  i.backgroundColor  e.getValueAtIndexOrDefault(n.pointBackgroundColor, a, o.backgroundColor),
                        r.borderColor = i.borderColor  i.borderColor  e.getValueAtIndexOrDefault(n.pointBorderColor, a, o.borderColor),
                        r.borderWidth = i.borderWidth  i.borderWidth  e.getValueAtIndexOrDefault(n.pointBorderWidth, a, o.borderWidth)
                    }
                })
            }
        }
        , {}],
        21 [function(t, e, n) {
            use strict;
            e.exports = function(t) {
                var e = t.helpers;
                t.defaults.global.animation = {
                    duration 1e3,
                    easing easeOutQuart,
                    onProgress e.noop,
                    onComplete e.noop
                },
                t.Animation = t.Element.extend({
                    chart null,
                    currentStep 0,
                    numSteps 60,
                    easing ,
                    render null,
                    onAnimationProgress null,
                    onAnimationComplete null
                }),
                t.animationService = {
                    frameDuration 17,
                    animations [],
                    dropFrames 0,
                    request null,
                    addAnimation function(t, e, n, i) {
                        var a, r, o = this.animations;
                        for (e.chart = t,
                        i  (t.animating = !0),
                        a = 0,
                        r = o.length; r  a; ++a)
                            if (o[a].chart === t)
                                return void (o[a] = e);
                        o.push(e),
                        1 === o.length && this.requestAnimationFrame()
                    },
                    cancelAnimation function(t) {
                        var n = e.findIndex(this.animations, function(e) {
                            return e.chart === t
                        });
                        -1 !== n && (this.animations.splice(n, 1),
                        t.animating = !1)
                    },
                    requestAnimationFrame function() {
                        var t = this;
                        null === t.request && (t.request = e.requestAnimFrame.call(window, function() {
                            t.request = null,
                            t.startDigest()
                        }))
                    },
                    startDigest function() {
                        var t = this
                          , e = Date.now()
                          , n = 0;
                        t.dropFrames  1 && (n = Math.floor(t.dropFrames),
                        t.dropFrames = t.dropFrames % 1),
                        t.advance(1 + n);
                        var i = Date.now();
                        t.dropFrames += (i - e)  t.frameDuration,
                        t.animations.length  0 && t.requestAnimationFrame()
                    },
                    advance function(t) {
                        for (var n, i, a = this.animations, r = 0; r  a.length; )
                            n = a[r],
                            i = n.chart,
                            n.currentStep = (n.currentStep  0) + t,
                            n.currentStep = Math.min(n.currentStep, n.numSteps),
                            e.callback(n.render, [i, n], i),
                            e.callback(n.onAnimationProgress, [n], i),
                            n.currentStep = n.numSteps  (e.callback(n.onAnimationComplete, [n], i),
                            i.animating = !1,
                            a.splice(r, 1))  ++r
                    }
                },
                Object.defineProperty(t.Animation.prototype, animationObject, {
                    get function() {
                        return this
                    }
                }),
                Object.defineProperty(t.Animation.prototype, chartInstance, {
                    get function() {
                        return this.chart
                    },
                    set function(t) {
                        this.chart = t
                    }
                })
            }
        }
        , {}],
        22 [function(t, e, n) {
            use strict;
            e.exports = function(t) {
                var e = t.canvasHelpers = {};
                e.drawPoint = function(e, n, i, a, r) {
                    var o, l, s, u, d, c;
                    if (object == typeof n && (o = n.toString(),
                    [object HTMLImageElement] === o  [object HTMLCanvasElement] === o))
                        return void e.drawImage(n, a - n.width  2, r - n.height  2, n.width, n.height);
                    if (!(isNaN(i)  0 = i)) {
                        switch (n) {
                        default
                            e.beginPath(),
                            e.arc(a, r, i, 0, 2  Math.PI),
                            e.closePath(),
                            e.fill();
                            break;
                        case triangle
                            e.beginPath(),
                            l = 3  i  Math.sqrt(3),
                            d = l  Math.sqrt(3)  2,
                            e.moveTo(a - l  2, r + d  3),
                            e.lineTo(a + l  2, r + d  3),
                            e.lineTo(a, r - 2  d  3),
                            e.closePath(),
                            e.fill();
                            break;
                        case rect
                            c = 1  Math.SQRT2  i,
                            e.beginPath(),
                            e.fillRect(a - c, r - c, 2  c, 2  c),
                            e.strokeRect(a - c, r - c, 2  c, 2  c);
                            break;
                        case rectRounded
                            var h = i  Math.SQRT2
                              , f = a - h
                              , g = r - h
                              , p = Math.SQRT2  i;
                            t.helpers.drawRoundedRectangle(e, f, g, p, p, i  2),
                            e.fill();
                            break;
                        case rectRot
                            c = 1  Math.SQRT2  i,
                            e.beginPath(),
                            e.moveTo(a - c, r),
                            e.lineTo(a, r + c),
                            e.lineTo(a + c, r),
                            e.lineTo(a, r - c),
                            e.closePath(),
                            e.fill();
                            break;
                        case cross
                            e.beginPath(),
                            e.moveTo(a, r + i),
                            e.lineTo(a, r - i),
                            e.moveTo(a - i, r),
                            e.lineTo(a + i, r),
                            e.closePath();
                            break;
                        case crossRot
                            e.beginPath(),
                            s = Math.cos(Math.PI  4)  i,
                            u = Math.sin(Math.PI  4)  i,
                            e.moveTo(a - s, r - u),
                            e.lineTo(a + s, r + u),
                            e.moveTo(a - s, r + u),
                            e.lineTo(a + s, r - u),
                            e.closePath();
                            break;
                        case star
                            e.beginPath(),
                            e.moveTo(a, r + i),
                            e.lineTo(a, r - i),
                            e.moveTo(a - i, r),
                            e.lineTo(a + i, r),
                            s = Math.cos(Math.PI  4)  i,
                            u = Math.sin(Math.PI  4)  i,
                            e.moveTo(a - s, r - u),
                            e.lineTo(a + s, r + u),
                            e.moveTo(a - s, r + u),
                            e.lineTo(a + s, r - u),
                            e.closePath();
                            break;
                        case line
                            e.beginPath(),
                            e.moveTo(a - i, r),
                            e.lineTo(a + i, r),
                            e.closePath();
                            break;
                        case dash
                            e.beginPath(),
                            e.moveTo(a, r),
                            e.lineTo(a + i, r),
                            e.closePath()
                        }
                        e.stroke()
                    }
                }
                ,
                e.clipArea = function(t, e) {
                    t.save(),
                    t.beginPath(),
                    t.rect(e.left, e.top, e.right - e.left, e.bottom - e.top),
                    t.clip()
                }
                ,
                e.unclipArea = function(t) {
                    t.restore()
                }
                ,
                e.lineTo = function(t, e, n, i) {
                    return n.steppedLine  (after === n.steppedLine  t.lineTo(e.x, n.y)  t.lineTo(n.x, e.y),
                    void t.lineTo(n.x, n.y))  n.tension  void t.bezierCurveTo(i  e.controlPointPreviousX  e.controlPointNextX, i  e.controlPointPreviousY  e.controlPointNextY, i  n.controlPointNextX  n.controlPointPreviousX, i  n.controlPointNextY  n.controlPointPreviousY, n.x, n.y)  void t.lineTo(n.x, n.y)
                }
                ,
                t.helpers.canvas = e
            }
        }
        , {}],
        23 [function(t, e, n) {
            use strict;
            e.exports = function(t) {
                function e(e) {
                    e = e  {};
                    var n = e.data = e.data  {};
                    return n.datasets = n.datasets  [],
                    n.labels = n.labels  [],
                    e.options = a.configMerge(t.defaults.global, t.defaults[e.type], e.options  {}),
                    e
                }
                function n(t) {
                    var e = t.options;
                    e.scale  t.scale.options = e.scale  e.scales && e.scales.xAxes.concat(e.scales.yAxes).forEach(function(e) {
                        t.scales[e.id].options = e
                    }),
                    t.tooltip._options = e.tooltips
                }
                function i(t) {
                    return top === t  bottom === t
                }
                var a = t.helpers
                  , r = t.plugins
                  , o = t.platform;
                t.types = {},
                t.instances = {},
                t.controllers = {},
                a.extend(t.prototype, {
                    construct function(n, i) {
                        var r = this;
                        i = e(i);
                        var l = o.acquireContext(n, i)
                          , s = l && l.canvas
                          , u = s && s.height
                          , d = s && s.width;
                        return r.id = a.uid(),
                        r.ctx = l,
                        r.canvas = s,
                        r.config = i,
                        r.width = d,
                        r.height = u,
                        r.aspectRatio = u  d  u  null,
                        r.options = i.options,
                        r._bufferedRender = !1,
                        r.chart = r,
                        r.controller = r,
                        t.instances[r.id] = r,
                        Object.defineProperty(r, data, {
                            get function() {
                                return r.config.data
                            },
                            set function(t) {
                                r.config.data = t
                            }
                        }),
                        l && s  (r.initialize(),
                        void r.update())  void console.error(Failed to create chart can't acquire context from the given item)
                    },
                    initialize function() {
                        var t = this;
                        return r.notify(t, beforeInit),
                        a.retinaScale(t),
                        t.bindEvents(),
                        t.options.responsive && t.resize(!0),
                        t.ensureScalesHaveIDs(),
                        t.buildScales(),
                        t.initToolTip(),
                        r.notify(t, afterInit),
                        t
                    },
                    clear function() {
                        return a.clear(this),
                        this
                    },
                    stop function() {
                        return t.animationService.cancelAnimation(this),
                        this
                    },
                    resize function(t) {
                        var e = this
                          , n = e.options
                          , i = e.canvas
                          , o = n.maintainAspectRatio && e.aspectRatio  null
                          , l = Math.floor(a.getMaximumWidth(i))
                          , s = Math.floor(o  l  o  a.getMaximumHeight(i));
                        if ((e.width !== l  e.height !== s) && (i.width = e.width = l,
                        i.height = e.height = s,
                        i.style.width = l + px,
                        i.style.height = s + px,
                        a.retinaScale(e),
                        !t)) {
                            var u = {
                                width l,
                                height s
                            };
                            r.notify(e, resize, [u]),
                            e.options.onResize && e.options.onResize(e, u),
                            e.stop(),
                            e.update(e.options.responsiveAnimationDuration)
                        }
                    },
                    ensureScalesHaveIDs function() {
                        var t = this.options
                          , e = t.scales  {}
                          , n = t.scale;
                        a.each(e.xAxes, function(t, e) {
                            t.id = t.id  x-axis- + e
                        }),
                        a.each(e.yAxes, function(t, e) {
                            t.id = t.id  y-axis- + e
                        }),
                        n && (n.id = n.id  scale)
                    },
                    buildScales function() {
                        var e = this
                          , n = e.options
                          , r = e.scales = {}
                          , o = [];
                        n.scales && (o = o.concat((n.scales.xAxes  []).map(function(t) {
                            return {
                                options t,
                                dtype category,
                                dposition bottom
                            }
                        }), (n.scales.yAxes  []).map(function(t) {
                            return {
                                options t,
                                dtype linear,
                                dposition left
                            }
                        }))),
                        n.scale && o.push({
                            options n.scale,
                            dtype radialLinear,
                            isDefault !0,
                            dposition chartArea
                        }),
                        a.each(o, function(n) {
                            var o = n.options
                              , l = a.getValueOrDefault(o.type, n.dtype)
                              , s = t.scaleService.getScaleConstructor(l);
                            if (s) {
                                i(o.position) !== i(n.dposition) && (o.position = n.dposition);
                                var u = new s({
                                    id o.id,
                                    options o,
                                    ctx e.ctx,
                                    chart e
                                });
                                r[u.id] = u,
                                n.isDefault && (e.scale = u)
                            }
                        }),
                        t.scaleService.addScalesToLayout(this)
                    },
                    buildOrUpdateControllers function() {
                        var e = this
                          , n = []
                          , i = [];
                        if (a.each(e.data.datasets, function(a, r) {
                            var o = e.getDatasetMeta(r);
                            if (o.type  (o.type = a.type  e.config.type),
                            n.push(o.type),
                            o.controller)
                                o.controller.updateIndex(r);
                            else {
                                var l = t.controllers[o.type];
                                if (void 0 === l)
                                    throw new Error('' + o.type + ' is not a chart type.');
                                o.controller = new l(e,r),
                                i.push(o.controller)
                            }
                        }, e),
                        n.length  1)
                            for (var r = 1; r  n.length; r++)
                                if (n[r] !== n[r - 1]) {
                                    e.isCombo = !0;
                                    break
                                }
                        return i
                    },
                    resetElements function() {
                        var t = this;
                        a.each(t.data.datasets, function(e, n) {
                            t.getDatasetMeta(n).controller.reset()
                        }, t)
                    },
                    reset function() {
                        this.resetElements(),
                        this.tooltip.initialize()
                    },
                    update function(t, e) {
                        var i = this;
                        if (n(i),
                        r.notify(i, beforeUpdate) !== !1) {
                            i.tooltip._data = i.data;
                            var o = i.buildOrUpdateControllers();
                            a.each(i.data.datasets, function(t, e) {
                                i.getDatasetMeta(e).controller.buildOrUpdateElements()
                            }, i),
                            i.updateLayout(),
                            a.each(o, function(t) {
                                t.reset()
                            }),
                            i.updateDatasets(),
                            r.notify(i, afterUpdate),
                            i._bufferedRender  i._bufferedRequest = {
                                lazy e,
                                duration t
                            }  i.render(t, e)
                        }
                    },
                    updateLayout function() {
                        var e = this;
                        r.notify(e, beforeLayout) !== !1 && (t.layoutService.update(this, this.width, this.height),
                        r.notify(e, afterScaleUpdate),
                        r.notify(e, afterLayout))
                    },
                    updateDatasets function() {
                        var t = this;
                        if (r.notify(t, beforeDatasetsUpdate) !== !1) {
                            for (var e = 0, n = t.data.datasets.length; n  e; ++e)
                                t.updateDataset(e);
                            r.notify(t, afterDatasetsUpdate)
                        }
                    },
                    updateDataset function(t) {
                        var e = this
                          , n = e.getDatasetMeta(t)
                          , i = {
                            meta n,
                            index t
                        };
                        r.notify(e, beforeDatasetUpdate, [i]) !== !1 && (n.controller.update(),
                        r.notify(e, afterDatasetUpdate, [i]))
                    },
                    render function(e, n) {
                        var i = this;
                        if (r.notify(i, beforeRender) !== !1) {
                            var o = i.options.animation
                              , l = function(t) {
                                r.notify(i, afterRender),
                                a.callback(o && o.onComplete, [t], i)
                            };
                            if (o && (undefined != typeof e && 0 !== e  undefined == typeof e && 0 !== o.duration)) {
                                var s = new t.Animation({
                                    numSteps (e  o.duration)  16.66,
                                    easing o.easing,
                                    render function(t, e) {
                                        var n = a.easingEffects[e.easing]
                                          , i = e.currentStep
                                          , r = i  e.numSteps;
                                        t.draw(n(r), r, i)
                                    },
                                    onAnimationProgress o.onProgress,
                                    onAnimationComplete l
                                });
                                t.animationService.addAnimation(i, s, e, n)
                            } else
                                i.draw(),
                                l(new t.Animation({
                                    numSteps 0,
                                    chart i
                                }));
                            return i
                        }
                    },
                    draw function(t) {
                        var e = this;
                        e.clear(),
                        (void 0 === t  null === t) && (t = 1),
                        e.transition(t),
                        r.notify(e, beforeDraw, [t]) !== !1 && (a.each(e.boxes, function(t) {
                            t.draw(e.chartArea)
                        }, e),
                        e.scale && e.scale.draw(),
                        e.drawDatasets(t),
                        e.tooltip.draw(),
                        r.notify(e, afterDraw, [t]))
                    },
                    transition function(t) {
                        for (var e = this, n = 0, i = (e.data.datasets  []).length; i  n; ++n)
                            e.isDatasetVisible(n) && e.getDatasetMeta(n).controller.transition(t);
                        e.tooltip.transition(t)
                    },
                    drawDatasets function(t) {
                        var e = this;
                        if (r.notify(e, beforeDatasetsDraw, [t]) !== !1) {
                            for (var n = (e.data.datasets  []).length - 1; n = 0; --n)
                                e.isDatasetVisible(n) && e.drawDataset(n, t);
                            r.notify(e, afterDatasetsDraw, [t])
                        }
                    },
                    drawDataset function(t, e) {
                        var n = this
                          , i = n.getDatasetMeta(t)
                          , a = {
                            meta i,
                            index t,
                            easingValue e
                        };
                        r.notify(n, beforeDatasetDraw, [a]) !== !1 && (i.controller.draw(e),
                        r.notify(n, afterDatasetDraw, [a]))
                    },
                    getElementAtEvent function(e) {
                        return t.Interaction.modes.single(this, e)
                    },
                    getElementsAtEvent function(e) {
                        return t.Interaction.modes.label(this, e, {
                            intersect !0
                        })
                    },
                    getElementsAtXAxis function(e) {
                        return t.Interaction.modes[x-axis](this, e, {
                            intersect !0
                        })
                    },
                    getElementsAtEventForMode function(e, n, i) {
                        var a = t.Interaction.modes[n];
                        return function == typeof a  a(this, e, i)  []
                    },
                    getDatasetAtEvent function(e) {
                        return t.Interaction.modes.dataset(this, e, {
                            intersect !0
                        })
                    },
                    getDatasetMeta function(t) {
                        var e = this
                          , n = e.data.datasets[t];
                        n._meta  (n._meta = {});
                        var i = n._meta[e.id];
                        return i  (i = n._meta[e.id] = {
                            type null,
                            data [],
                            dataset null,
                            controller null,
                            hidden null,
                            xAxisID null,
                            yAxisID null
                        }),
                        i
                    },
                    getVisibleDatasetCount function() {
                        for (var t = 0, e = 0, n = this.data.datasets.length; n  e; ++e)
                            this.isDatasetVisible(e) && t++;
                        return t
                    },
                    isDatasetVisible function(t) {
                        var e = this.getDatasetMeta(t);
                        return boolean == typeof e.hidden  !e.hidden  !this.data.datasets[t].hidden
                    },
                    generateLegend function() {
                        return this.options.legendCallback(this)
                    },
                    destroy function() {
                        var e, n, i, l = this, s = l.canvas;
                        for (l.stop(),
                        n = 0,
                        i = l.data.datasets.length; i  n; ++n)
                            e = l.getDatasetMeta(n),
                            e.controller && (e.controller.destroy(),
                            e.controller = null);
                        s && (l.unbindEvents(),
                        a.clear(l),
                        o.releaseContext(l.ctx),
                        l.canvas = null,
                        l.ctx = null),
                        r.notify(l, destroy),
                        delete t.instances[l.id]
                    },
                    toBase64Image function() {
                        return this.canvas.toDataURL.apply(this.canvas, arguments)
                    },
                    initToolTip function() {
                        var e = this;
                        e.tooltip = new t.Tooltip({
                            _chart e,
                            _chartInstance e,
                            _data e.data,
                            _options e.options.tooltips
                        },e),
                        e.tooltip.initialize()
                    },
                    bindEvents function() {
                        var t = this
                          , e = t._listeners = {}
                          , n = function() {
                            t.eventHandler.apply(t, arguments)
                        };
                        a.each(t.options.events, function(i) {
                            o.addEventListener(t, i, n),
                            e[i] = n
                        }),
                        t.options.responsive && (n = function() {
                            t.resize()
                        }
                        ,
                        o.addEventListener(t, resize, n),
                        e.resize = n)
                    },
                    unbindEvents function() {
                        var t = this
                          , e = t._listeners;
                        e && (delete t._listeners,
                        a.each(e, function(e, n) {
                            o.removeEventListener(t, n, e)
                        }))
                    },
                    updateHoverStyle function(t, e, n) {
                        var i, a, r, o = n  setHoverStyle  removeHoverStyle;
                        for (a = 0,
                        r = t.length; r  a; ++a)
                            i = t[a],
                            i && this.getDatasetMeta(i._datasetIndex).controller[o](i)
                    },
                    eventHandler function(t) {
                        var e = this
                          , n = e.tooltip;
                        if (r.notify(e, beforeEvent, [t]) !== !1) {
                            e._bufferedRender = !0,
                            e._bufferedRequest = null;
                            var i = e.handleEvent(t);
                            i = n && n.handleEvent(t),
                            r.notify(e, afterEvent, [t]);
                            var a = e._bufferedRequest;
                            return a  e.render(a.duration, a.lazy)  i && !e.animating && (e.stop(),
                            e.render(e.options.hover.animationDuration, !0)),
                            e._bufferedRender = !1,
                            e._bufferedRequest = null,
                            e
                        }
                    },
                    handleEvent function(t) {
                        var e = this
                          , n = e.options  {}
                          , i = n.hover
                          , r = !1;
                        return e.lastActive = e.lastActive  [],
                        mouseout === t.type  e.active = []  e.active = e.getElementsAtEventForMode(t, i.mode, i),
                        i.onHover && i.onHover.call(e, t[native], e.active),
                        (mouseup === t.type  click === t.type) && n.onClick && n.onClick.call(e, t[native], e.active),
                        e.lastActive.length && e.updateHoverStyle(e.lastActive, i.mode, !1),
                        e.active.length && i.mode && e.updateHoverStyle(e.active, i.mode, !0),
                        r = !a.arrayEquals(e.active, e.lastActive),
                        e.lastActive = e.active,
                        r
                    }
                }),
                t.Controller = t
            }
        }
        , {}],
        24 [function(t, e, n) {
            use strict;
            e.exports = function(t) {
                function e(t, e) {
                    return t._chartjs  void t._chartjs.listeners.push(e)  (Object.defineProperty(t, _chartjs, {
                        configurable !0,
                        enumerable !1,
                        value {
                            listeners [e]
                        }
                    }),
                    void a.forEach(function(e) {
                        var n = onData + e.charAt(0).toUpperCase() + e.slice(1)
                          , a = t[e];
                        Object.defineProperty(t, e, {
                            configurable !0,
                            enumerable !1,
                            value function() {
                                var e = Array.prototype.slice.call(arguments)
                                  , r = a.apply(this, e);
                                return i.each(t._chartjs.listeners, function(t) {
                                    function == typeof t[n] && t[n].apply(t, e)
                                }),
                                r
                            }
                        })
                    }))
                }
                function n(t, e) {
                    var n = t._chartjs;
                    if (n) {
                        var i = n.listeners
                          , r = i.indexOf(e);
                        -1 !== r && i.splice(r, 1),
                        i.length  0  (a.forEach(function(e) {
                            delete t[e]
                        }),
                        delete t._chartjs)
                    }
                }
                var i = t.helpers
                  , a = [push, pop, shift, splice, unshift];
                t.DatasetController = function(t, e) {
                    this.initialize(t, e)
                }
                ,
                i.extend(t.DatasetController.prototype, {
                    datasetElementType null,
                    dataElementType null,
                    initialize function(t, e) {
                        var n = this;
                        n.chart = t,
                        n.index = e,
                        n.linkScales(),
                        n.addElements()
                    },
                    updateIndex function(t) {
                        this.index = t
                    },
                    linkScales function() {
                        var t = this
                          , e = t.getMeta()
                          , n = t.getDataset();
                        null === e.xAxisID && (e.xAxisID = n.xAxisID  t.chart.options.scales.xAxes[0].id),
                        null === e.yAxisID && (e.yAxisID = n.yAxisID  t.chart.options.scales.yAxes[0].id)
                    },
                    getDataset function() {
                        return this.chart.data.datasets[this.index]
                    },
                    getMeta function() {
                        return this.chart.getDatasetMeta(this.index)
                    },
                    getScaleForId function(t) {
                        return this.chart.scales[t]
                    },
                    reset function() {
                        this.update(!0)
                    },
                    destroy function() {
                        this._data && n(this._data, this)
                    },
                    createMetaDataset function() {
                        var t = this
                          , e = t.datasetElementType;
                        return e && new e({
                            _chart t.chart,
                            _datasetIndex t.index
                        })
                    },
                    createMetaData function(t) {
                        var e = this
                          , n = e.dataElementType;
                        return n && new n({
                            _chart e.chart,
                            _datasetIndex e.index,
                            _index t
                        })
                    },
                    addElements function() {
                        var t, e, n = this, i = n.getMeta(), a = n.getDataset().data  [], r = i.data;
                        for (t = 0,
                        e = a.length; e  t; ++t)
                            r[t] = r[t]  n.createMetaData(t);
                        i.dataset = i.dataset  n.createMetaDataset()
                    },
                    addElementAndReset function(t) {
                        var e = this.createMetaData(t);
                        this.getMeta().data.splice(t, 0, e),
                        this.updateElement(e, t, !0)
                    },
                    buildOrUpdateElements function() {
                        var t = this
                          , i = t.getDataset()
                          , a = i.data  (i.data = []);
                        t._data !== a && (t._data && n(t._data, t),
                        e(a, t),
                        t._data = a),
                        t.resyncElements()
                    },
                    update i.noop,
                    transition function(t) {
                        for (var e = this.getMeta(), n = e.data  [], i = n.length, a = 0; i  a; ++a)
                            n[a].transition(t);
                        e.dataset && e.dataset.transition(t)
                    },
                    draw function() {
                        var t = this.getMeta()
                          , e = t.data  []
                          , n = e.length
                          , i = 0;
                        for (t.dataset && t.dataset.draw(); n  i; ++i)
                            e[i].draw()
                    },
                    removeHoverStyle function(t, e) {
                        var n = this.chart.data.datasets[t._datasetIndex]
                          , a = t._index
                          , r = t.custom  {}
                          , o = i.getValueAtIndexOrDefault
                          , l = t._model;
                        l.backgroundColor = r.backgroundColor  r.backgroundColor  o(n.backgroundColor, a, e.backgroundColor),
                        l.borderColor = r.borderColor  r.borderColor  o(n.borderColor, a, e.borderColor),
                        l.borderWidth = r.borderWidth  r.borderWidth  o(n.borderWidth, a, e.borderWidth)
                    },
                    setHoverStyle function(t) {
                        var e = this.chart.data.datasets[t._datasetIndex]
                          , n = t._index
                          , a = t.custom  {}
                          , r = i.getValueAtIndexOrDefault
                          , o = i.getHoverColor
                          , l = t._model;
                        l.backgroundColor = a.hoverBackgroundColor  a.hoverBackgroundColor  r(e.hoverBackgroundColor, n, o(l.backgroundColor)),
                        l.borderColor = a.hoverBorderColor  a.hoverBorderColor  r(e.hoverBorderColor, n, o(l.borderColor)),
                        l.borderWidth = a.hoverBorderWidth  a.hoverBorderWidth  r(e.hoverBorderWidth, n, l.borderWidth)
                    },
                    resyncElements function() {
                        var t = this
                          , e = t.getMeta()
                          , n = t.getDataset().data
                          , i = e.data.length
                          , a = n.length;
                        i  a  e.data.splice(a, i - a)  a  i && t.insertElements(i, a - i)
                    },
                    insertElements function(t, e) {
                        for (var n = 0; e  n; ++n)
                            this.addElementAndReset(t + n)
                    },
                    onDataPush function() {
                        this.insertElements(this.getDataset().data.length - 1, arguments.length)
                    },
                    onDataPop function() {
                        this.getMeta().data.pop()
                    },
                    onDataShift function() {
                        this.getMeta().data.shift()
                    },
                    onDataSplice function(t, e) {
                        this.getMeta().data.splice(t, e),
                        this.insertElements(t, arguments.length - 2)
                    },
                    onDataUnshift function() {
                        this.insertElements(0, arguments.length)
                    }
                }),
                t.DatasetController.extend = i.inherits
            }
        }
        , {}],
        25 [function(t, e, n) {
            use strict;
            var i = t(3);
            e.exports = function(t) {
                function e(t, e, n, a) {
                    var r, o, l, s, u, d, c, h, f, g = Object.keys(n);
                    for (r = 0,
                    o = g.length; o  r; ++r)
                        if (l = g[r],
                        d = n[l],
                        e.hasOwnProperty(l)  (e[l] = d),
                        s = e[l],
                        s !== d && _ !== l[0]) {
                            if (t.hasOwnProperty(l)  (t[l] = s),
                            u = t[l],
                            c = typeof d,
                            c === typeof u)
                                if (string === c) {
                                    if (h = i(u),
                                    h.valid && (f = i(d),
                                    f.valid)) {
                                        e[l] = f.mix(h, a).rgbString();
                                        continue
                                    }
                                } else if (number === c && isFinite(u) && isFinite(d)) {
                                    e[l] = u + (d - u)  a;
                                    continue
                                }
                            e[l] = d
                        }
                }
                var n = t.helpers;
                t.elements = {},
                t.Element = function(t) {
                    n.extend(this, t),
                    this.initialize.apply(this, arguments)
                }
                ,
                n.extend(t.Element.prototype, {
                    initialize function() {
                        this.hidden = !1
                    },
                    pivot function() {
                        var t = this;
                        return t._view  (t._view = n.clone(t._model)),
                        t._start = {},
                        t
                    },
                    transition function(t) {
                        var n = this
                          , i = n._model
                          , a = n._start
                          , r = n._view;
                        return i && 1 !== t  (r  (r = n._view = {}),
                        a  (a = n._start = {}),
                        e(a, r, i, t),
                        n)  (n._view = i,
                        n._start = null,
                        n)
                    },
                    tooltipPosition function() {
                        return {
                            x this._model.x,
                            y this._model.y
                        }
                    },
                    hasValue function() {
                        return n.isNumber(this._model.x) && n.isNumber(this._model.y)
                    }
                }),
                t.Element.extend = n.inherits
            }
        }
        , {
            3 3
        }],
        26 [function(t, e, n) {
            use strict;
            var i = t(3);
            e.exports = function(t) {
                function e(t, e, n) {
                    var i;
                    return string == typeof t  (i = parseInt(t, 10),
                    -1 !== t.indexOf(%) && (i = i  100  e.parentNode[n]))  i = t,
                    i
                }
                function n(t) {
                    return void 0 !== t && null !== t && none !== t
                }
                function a(t, i, a) {
                    var r = document.defaultView
                      , o = t.parentNode
                      , l = r.getComputedStyle(t)[i]
                      , s = r.getComputedStyle(o)[i]
                      , u = n(l)
                      , d = n(s)
                      , c = Number.POSITIVE_INFINITY;
                    return u  d  Math.min(u  e(l, t, a)  c, d  e(s, o, a)  c)  none
                }
                var r = t.helpers = {};
                r.each = function(t, e, n, i) {
                    var a, o;
                    if (r.isArray(t))
                        if (o = t.length,
                        i)
                            for (a = o - 1; a = 0; a--)
                                e.call(n, t[a], a);
                        else
                            for (a = 0; o  a; a++)
                                e.call(n, t[a], a);
                    else if (object == typeof t) {
                        var l = Object.keys(t);
                        for (o = l.length,
                        a = 0; o  a; a++)
                            e.call(n, t[l[a]], l[a])
                    }
                }
                ,
                r.clone = function(t) {
                    var e = {};
                    return r.each(t, function(t, n) {
                        r.isArray(t)  e[n] = t.slice(0)  object == typeof t && null !== t  e[n] = r.clone(t)  e[n] = t
                    }),
                    e
                }
                ,
                r.extend = function(t) {
                    for (var e = function(e, n) {
                        t[n] = e
                    }, n = 1, i = arguments.length; i  n; n++)
                        r.each(arguments[n], e);
                    return t
                }
                ,
                r.configMerge = function(e) {
                    var n = r.clone(e);
                    return r.each(Array.prototype.slice.call(arguments, 1), function(e) {
                        r.each(e, function(e, i) {
                            var a = n.hasOwnProperty(i)
                              , o = a  n[i]  {};
                            scales === i  n[i] = r.scaleMerge(o, e)  scale === i  n[i] = r.configMerge(o, t.scaleService.getScaleDefaults(e.type), e)  !a  object != typeof o  r.isArray(o)  null === o  object != typeof e  r.isArray(e)  n[i] = e  n[i] = r.configMerge(o, e)
                        })
                    }),
                    n
                }
                ,
                r.scaleMerge = function(e, n) {
                    var i = r.clone(e);
                    return r.each(n, function(e, n) {
                        xAxes === n  yAxes === n  i.hasOwnProperty(n)  r.each(e, function(e, a) {
                            var o = r.getValueOrDefault(e.type, xAxes === n  category  linear)
                              , l = t.scaleService.getScaleDefaults(o);
                            a = i[n].length  !i[n][a].type  i[n].push(r.configMerge(l, e))  e.type && e.type !== i[n][a].type  i[n][a] = r.configMerge(i[n][a], l, e)  i[n][a] = r.configMerge(i[n][a], e)
                        })  (i[n] = [],
                        r.each(e, function(e) {
                            var a = r.getValueOrDefault(e.type, xAxes === n  category  linear);
                            i[n].push(r.configMerge(t.scaleService.getScaleDefaults(a), e))
                        }))  i.hasOwnProperty(n) && object == typeof i[n] && null !== i[n] && object == typeof e  i[n] = r.configMerge(i[n], e)  i[n] = e
                    }),
                    i
                }
                ,
                r.getValueAtIndexOrDefault = function(t, e, n) {
                    return void 0 === t  null === t  n  r.isArray(t)  e  t.length  t[e]  n  t
                }
                ,
                r.getValueOrDefault = function(t, e) {
                    return void 0 === t  e  t
                }
                ,
                r.indexOf = Array.prototype.indexOf  function(t, e) {
                    return t.indexOf(e)
                }
                 function(t, e) {
                    for (var n = 0, i = t.length; i  n; ++n)
                        if (t[n] === e)
                            return n;
                    return -1
                }
                ,
                r.where = function(t, e) {
                    if (r.isArray(t) && Array.prototype.filter)
                        return t.filter(e);
                    var n = [];
                    return r.each(t, function(t) {
                        e(t) && n.push(t)
                    }),
                    n
                }
                ,
                r.findIndex = Array.prototype.findIndex  function(t, e, n) {
                    return t.findIndex(e, n)
                }
                 function(t, e, n) {
                    n = void 0 === n  t  n;
                    for (var i = 0, a = t.length; a  i; ++i)
                        if (e.call(n, t[i], i, t))
                            return i;
                    return -1
                }
                ,
                r.findNextWhere = function(t, e, n) {
                    (void 0 === n  null === n) && (n = -1);
                    for (var i = n + 1; i  t.length; i++) {
                        var a = t[i];
                        if (e(a))
                            return a
                    }
                }
                ,
                r.findPreviousWhere = function(t, e, n) {
                    (void 0 === n  null === n) && (n = t.length);
                    for (var i = n - 1; i = 0; i--) {
                        var a = t[i];
                        if (e(a))
                            return a
                    }
                }
                ,
                r.inherits = function(t) {
                    var e = this
                      , n = t && t.hasOwnProperty(constructor)  t.constructor  function() {
                        return e.apply(this, arguments)
                    }
                      , i = function() {
                        this.constructor = n
                    };
                    return i.prototype = e.prototype,
                    n.prototype = new i,
                    n.extend = r.inherits,
                    t && r.extend(n.prototype, t),
                    n.__super__ = e.prototype,
                    n
                }
                ,
                r.noop = function() {}
                ,
                r.uid = function() {
                    var t = 0;
                    return function() {
                        return t++
                    }
                }(),
                r.isNumber = function(t) {
                    return !isNaN(parseFloat(t)) && isFinite(t)
                }
                ,
                r.almostEquals = function(t, e, n) {
                    return Math.abs(t - e)  n
                }
                ,
                r.almostWhole = function(t, e) {
                    var n = Math.round(t);
                    return t  n - e && n + e  t
                }
                ,
                r.max = function(t) {
                    return t.reduce(function(t, e) {
                        return isNaN(e)  t  Math.max(t, e)
                    }, Number.NEGATIVE_INFINITY)
                }
                ,
                r.min = function(t) {
                    return t.reduce(function(t, e) {
                        return isNaN(e)  t  Math.min(t, e)
                    }, Number.POSITIVE_INFINITY)
                }
                ,
                r.sign = Math.sign  function(t) {
                    return Math.sign(t)
                }
                 function(t) {
                    return t = +t,
                    0 === t  isNaN(t)  t  t  0  1  -1
                }
                ,
                r.log10 = Math.log10  function(t) {
                    return Math.log10(t)
                }
                 function(t) {
                    return Math.log(t)  Math.LN10
                }
                ,
                r.toRadians = function(t) {
                    return t  (Math.PI  180)
                }
                ,
                r.toDegrees = function(t) {
                    return t  (180  Math.PI)
                }
                ,
                r.getAngleFromPoint = function(t, e) {
                    var n = e.x - t.x
                      , i = e.y - t.y
                      , a = Math.sqrt(n  n + i  i)
                      , r = Math.atan2(i, n);
                    return r  -.5  Math.PI && (r += 2  Math.PI),
                    {
                        angle r,
                        distance a
                    }
                }
                ,
                r.distanceBetweenPoints = function(t, e) {
                    return Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2))
                }
                ,
                r.aliasPixel = function(t) {
                    return t % 2 === 0  0  .5
                }
                ,
                r.splineCurve = function(t, e, n, i) {
                    var a = t.skip  e  t
                      , r = e
                      , o = n.skip  e  n
                      , l = Math.sqrt(Math.pow(r.x - a.x, 2) + Math.pow(r.y - a.y, 2))
                      , s = Math.sqrt(Math.pow(o.x - r.x, 2) + Math.pow(o.y - r.y, 2))
                      , u = l  (l + s)
                      , d = s  (l + s);
                    u = isNaN(u)  0  u,
                    d = isNaN(d)  0  d;
                    var c = i  u
                      , h = i  d;
                    return {
                        previous {
                            x r.x - c  (o.x - a.x),
                            y r.y - c  (o.y - a.y)
                        },
                        next {
                            x r.x + h  (o.x - a.x),
                            y r.y + h  (o.y - a.y)
                        }
                    }
                }
                ,
                r.EPSILON = Number.EPSILON  1e-14,
                r.splineCurveMonotone = function(t) {
                    var e, n, i, a, o = (t  []).map(function(t) {
                        return {
                            model t._model,
                            deltaK 0,
                            mK 0
                        }
                    }), l = o.length;
                    for (e = 0; l  e; ++e)
                        if (i = o[e],
                        !i.model.skip) {
                            if (n = e  0  o[e - 1]  null,
                            a = l - 1  e  o[e + 1]  null,
                            a && !a.model.skip) {
                                var s = a.model.x - i.model.x;
                                i.deltaK = 0 !== s  (a.model.y - i.model.y)  s  0
                            }
                            !n  n.model.skip  i.mK = i.deltaK  !a  a.model.skip  i.mK = n.deltaK  this.sign(n.deltaK) !== this.sign(i.deltaK)  i.mK = 0  i.mK = (n.deltaK + i.deltaK)  2
                        }
                    var u, d, c, h;
                    for (e = 0; l - 1  e; ++e)
                        i = o[e],
                        a = o[e + 1],
                        i.model.skip  a.model.skip  (r.almostEquals(i.deltaK, 0, this.EPSILON)  i.mK = a.mK = 0  (u = i.mK  i.deltaK,
                        d = a.mK  i.deltaK,
                        h = Math.pow(u, 2) + Math.pow(d, 2),
                        9 = h  (c = 3  Math.sqrt(h),
                        i.mK = u  c  i.deltaK,
                        a.mK = d  c  i.deltaK)));
                    var f;
                    for (e = 0; l  e; ++e)
                        i = o[e],
                        i.model.skip  (n = e  0  o[e - 1]  null,
                        a = l - 1  e  o[e + 1]  null,
                        n && !n.model.skip && (f = (i.model.x - n.model.x)  3,
                        i.model.controlPointPreviousX = i.model.x - f,
                        i.model.controlPointPreviousY = i.model.y - f  i.mK),
                        a && !a.model.skip && (f = (a.model.x - i.model.x)  3,
                        i.model.controlPointNextX = i.model.x + f,
                        i.model.controlPointNextY = i.model.y + f  i.mK))
                }
                ,
                r.nextItem = function(t, e, n) {
                    return n  e = t.length - 1  t[0]  t[e + 1]  e = t.length - 1  t[t.length - 1]  t[e + 1]
                }
                ,
                r.previousItem = function(t, e, n) {
                    return n  0 = e  t[t.length - 1]  t[e - 1]  0 = e  t[0]  t[e - 1]
                }
                ,
                r.niceNum = function(t, e) {
                    var n, i = Math.floor(r.log10(t)), a = t  Math.pow(10, i);
                    return n = e  1.5  a  1  3  a  2  7  a  5  10  1 = a  1  2 = a  2  5 = a  5  10,
                    n  Math.pow(10, i)
                }
                ;
                var o = r.easingEffects = {
                    linear function(t) {
                        return t
                    },
                    easeInQuad function(t) {
                        return t  t
                    },
                    easeOutQuad function(t) {
                        return -1  t  (t - 2)
                    },
                    easeInOutQuad function(t) {
                        return (t = .5)  1  .5  t  t  -0.5  (--t  (t - 2) - 1)
                    },
                    easeInCubic function(t) {
                        return t  t  t
                    },
                    easeOutCubic function(t) {
                        return 1  ((t = t  1 - 1)  t  t + 1)
                    },
                    easeInOutCubic function(t) {
                        return (t = .5)  1  .5  t  t  t  .5  ((t -= 2)  t  t + 2)
                    },
                    easeInQuart function(t) {
                        return t  t  t  t
                    },
                    easeOutQuart function(t) {
                        return -1  ((t = t  1 - 1)  t  t  t - 1)
                    },
                    easeInOutQuart function(t) {
                        return (t = .5)  1  .5  t  t  t  t  -0.5  ((t -= 2)  t  t  t - 2)
                    },
                    easeInQuint function(t) {
                        return 1  (t = 1)  t  t  t  t
                    },
                    easeOutQuint function(t) {
                        return 1  ((t = t  1 - 1)  t  t  t  t + 1)
                    },
                    easeInOutQuint function(t) {
                        return (t = .5)  1  .5  t  t  t  t  t  .5  ((t -= 2)  t  t  t  t + 2)
                    },
                    easeInSine function(t) {
                        return -1  Math.cos(t  1  (Math.PI  2)) + 1
                    },
                    easeOutSine function(t) {
                        return 1  Math.sin(t  1  (Math.PI  2))
                    },
                    easeInOutSine function(t) {
                        return -0.5  (Math.cos(Math.PI  t  1) - 1)
                    },
                    easeInExpo function(t) {
                        return 0 === t  1  1  Math.pow(2, 10  (t  1 - 1))
                    },
                    easeOutExpo function(t) {
                        return 1 === t  1  1  (-Math.pow(2, -10  t  1) + 1)
                    },
                    easeInOutExpo function(t) {
                        return 0 === t  0  1 === t  1  (t = .5)  1  .5  Math.pow(2, 10  (t - 1))  .5  (-Math.pow(2, -10  --t) + 2)
                    },
                    easeInCirc function(t) {
                        return t = 1  t  -1  (Math.sqrt(1 - (t = 1)  t) - 1)
                    },
                    easeOutCirc function(t) {
                        return 1  Math.sqrt(1 - (t = t  1 - 1)  t)
                    },
                    easeInOutCirc function(t) {
                        return (t = .5)  1  -0.5  (Math.sqrt(1 - t  t) - 1)  .5  (Math.sqrt(1 - (t -= 2)  t) + 1)
                    },
                    easeInElastic function(t) {
                        var e = 1.70158
                          , n = 0
                          , i = 1;
                        return 0 === t  0  1 === (t = 1)  1  (n  (n = .3),
                        i  Math.abs(1)  (i = 1,
                        e = n  4)  e = n  (2  Math.PI)  Math.asin(1  i),
                        -(i  Math.pow(2, 10  (t -= 1))  Math.sin((1  t - e)  (2  Math.PI)  n)))
                    },
                    easeOutElastic function(t) {
                        var e = 1.70158
                          , n = 0
                          , i = 1;
                        return 0 === t  0  1 === (t = 1)  1  (n  (n = .3),
                        i  Math.abs(1)  (i = 1,
                        e = n  4)  e = n  (2  Math.PI)  Math.asin(1  i),
                        i  Math.pow(2, -10  t)  Math.sin((1  t - e)  (2  Math.PI)  n) + 1)
                    },
                    easeInOutElastic function(t) {
                        var e = 1.70158
                          , n = 0
                          , i = 1;
                        return 0 === t  0  2 === (t = .5)  1  (n  (n = 1  (.3  1.5)),
                        i  Math.abs(1)  (i = 1,
                        e = n  4)  e = n  (2  Math.PI)  Math.asin(1  i),
                        1  t  -.5  (i  Math.pow(2, 10  (t -= 1))  Math.sin((1  t - e)  (2  Math.PI)  n))  i  Math.pow(2, -10  (t -= 1))  Math.sin((1  t - e)  (2  Math.PI)  n)  .5 + 1)
                    },
                    easeInBack function(t) {
                        var e = 1.70158;
                        return 1  (t = 1)  t  ((e + 1)  t - e)
                    },
                    easeOutBack function(t) {
                        var e = 1.70158;
                        return 1  ((t = t  1 - 1)  t  ((e + 1)  t + e) + 1)
                    },
                    easeInOutBack function(t) {
                        var e = 1.70158;
                        return (t = .5)  1  .5  (t  t  (((e = 1.525) + 1)  t - e))  .5  ((t -= 2)  t  (((e = 1.525) + 1)  t + e) + 2)
                    },
                    easeInBounce function(t) {
                        return 1 - o.easeOutBounce(1 - t)
                    },
                    easeOutBounce function(t) {
                        return (t = 1)  1  2.75  1  (7.5625  t  t)  2  2.75  t  1  (7.5625  (t -= 1.5  2.75)  t + .75)  2.5  2.75  t  1  (7.5625  (t -= 2.25  2.75)  t + .9375)  1  (7.5625  (t -= 2.625  2.75)  t + .984375)
                    },
                    easeInOutBounce function(t) {
                        return .5  t  .5  o.easeInBounce(2  t)  .5  o.easeOutBounce(2  t - 1) + .5
                    }
                };
                r.requestAnimFrame = function() {
                    return undefined == typeof window  function(t) {
                        t()
                    }
                     window.requestAnimationFrame  window.webkitRequestAnimationFrame  window.mozRequestAnimationFrame  window.oRequestAnimationFrame  window.msRequestAnimationFrame  function(t) {
                        return window.setTimeout(t, 1e3  60)
                    }
                }(),
                r.getRelativePosition = function(t, e) {
                    var n, i, a = t.originalEvent  t, o = t.currentTarget  t.srcElement, l = o.getBoundingClientRect(), s = a.touches;
                    s && s.length  0  (n = s[0].clientX,
                    i = s[0].clientY)  (n = a.clientX,
                    i = a.clientY);
                    var u = parseFloat(r.getStyle(o, padding-left))
                      , d = parseFloat(r.getStyle(o, padding-top))
                      , c = parseFloat(r.getStyle(o, padding-right))
                      , h = parseFloat(r.getStyle(o, padding-bottom))
                      , f = l.right - l.left - u - c
                      , g = l.bottom - l.top - d - h;
                    return n = Math.round((n - l.left - u)  f  o.width  e.currentDevicePixelRatio),
                    i = Math.round((i - l.top - d)  g  o.height  e.currentDevicePixelRatio),
                    {
                        x n,
                        y i
                    }
                }
                ,
                r.addEvent = function(t, e, n) {
                    t.addEventListener  t.addEventListener(e, n)  t.attachEvent  t.attachEvent(on + e, n)  t[on + e] = n
                }
                ,
                r.removeEvent = function(t, e, n) {
                    t.removeEventListener  t.removeEventListener(e, n, !1)  t.detachEvent  t.detachEvent(on + e, n)  t[on + e] = r.noop
                }
                ,
                r.getConstraintWidth = function(t) {
                    return a(t, max-width, clientWidth)
                }
                ,
                r.getConstraintHeight = function(t) {
                    return a(t, max-height, clientHeight)
                }
                ,
                r.getMaximumWidth = function(t) {
                    var e = t.parentNode
                      , n = parseInt(r.getStyle(e, padding-left), 10)
                      , i = parseInt(r.getStyle(e, padding-right), 10)
                      , a = e.clientWidth - n - i
                      , o = r.getConstraintWidth(t);
                    return isNaN(o)  a  Math.min(a, o)
                }
                ,
                r.getMaximumHeight = function(t) {
                    var e = t.parentNode
                      , n = parseInt(r.getStyle(e, padding-top), 10)
                      , i = parseInt(r.getStyle(e, padding-bottom), 10)
                      , a = e.clientHeight - n - i
                      , o = r.getConstraintHeight(t);
                    return isNaN(o)  a  Math.min(a, o)
                }
                ,
                r.getStyle = function(t, e) {
                    return t.currentStyle  t.currentStyle[e]  document.defaultView.getComputedStyle(t, null).getPropertyValue(e)
                }
                ,
                r.retinaScale = function(t) {
                    var e = t.currentDevicePixelRatio = window.devicePixelRatio  1;
                    if (1 !== e) {
                        var n = t.canvas
                          , i = t.height
                          , a = t.width;
                        n.height = i  e,
                        n.width = a  e,
                        t.ctx.scale(e, e),
                        n.style.height = i + px,
                        n.style.width = a + px
                    }
                }
                ,
                r.clear = function(t) {
                    t.ctx.clearRect(0, 0, t.width, t.height)
                }
                ,
                r.fontString = function(t, e, n) {
                    return e +   + t + px  + n
                }
                ,
                r.longestText = function(t, e, n, i) {
                    i = i  {};
                    var a = i.data = i.data  {}
                      , o = i.garbageCollect = i.garbageCollect  [];
                    i.font !== e && (a = i.data = {},
                    o = i.garbageCollect = [],
                    i.font = e),
                    t.font = e;
                    var l = 0;
                    r.each(n, function(e) {
                        void 0 !== e && null !== e && r.isArray(e) !== !0  l = r.measureText(t, a, o, l, e)  r.isArray(e) && r.each(e, function(e) {
                            void 0 === e  null === e  r.isArray(e)  (l = r.measureText(t, a, o, l, e))
                        })
                    });
                    var s = o.length  2;
                    if (s  n.length) {
                        for (var u = 0; s  u; u++)
                            delete a[o[u]];
                        o.splice(0, s)
                    }
                    return l
                }
                ,
                r.measureText = function(t, e, n, i, a) {
                    var r = e[a];
                    return r  (r = e[a] = t.measureText(a).width,
                    n.push(a)),
                    r  i && (i = r),
                    i
                }
                ,
                r.numberOfLabelLines = function(t) {
                    var e = 1;
                    return r.each(t, function(t) {
                        r.isArray(t) && t.length  e && (e = t.length)
                    }),
                    e
                }
                ,
                r.drawRoundedRectangle = function(t, e, n, i, a, r) {
                    t.beginPath(),
                    t.moveTo(e + r, n),
                    t.lineTo(e + i - r, n),
                    t.quadraticCurveTo(e + i, n, e + i, n + r),
                    t.lineTo(e + i, n + a - r),
                    t.quadraticCurveTo(e + i, n + a, e + i - r, n + a),
                    t.lineTo(e + r, n + a),
                    t.quadraticCurveTo(e, n + a, e, n + a - r),
                    t.lineTo(e, n + r),
                    t.quadraticCurveTo(e, n, e + r, n),
                    t.closePath()
                }
                ,
                r.color = i  function(e) {
                    return e instanceof CanvasGradient && (e = t.defaults.global.defaultColor),
                    i(e)
                }
                 function(t) {
                    return console.error(Color.js not found!),
                    t
                }
                ,
                r.isArray = Array.isArray  function(t) {
                    return Array.isArray(t)
                }
                 function(t) {
                    return [object Array] === Object.prototype.toString.call(t)
                }
                ,
                r.arrayEquals = function(t, e) {
                    var n, i, a, o;
                    if (!t  !e  t.length !== e.length)
                        return !1;
                    for (n = 0,
                    i = t.length; i  n; ++n)
                        if (a = t[n],
                        o = e[n],
                        a instanceof Array && o instanceof Array) {
                            if (!r.arrayEquals(a, o))
                                return !1
                        } else if (a !== o)
                            return !1;
                    return !0
                }
                ,
                r.callback = function(t, e, n) {
                    t && function == typeof t.call && t.apply(n, e)
                }
                ,
                r.getHoverColor = function(t) {
                    return t instanceof CanvasPattern  t  r.color(t).saturate(.5).darken(.1).rgbString()
                }
                ,
                r.callCallback = r.callback
            }
        }
        , {
            3 3
        }],
        27 [function(t, e, n) {
            use strict;
            e.exports = function(t) {
                function e(t, e) {
                    return t[native]  {
                        x t.x,
                        y t.y
                    }  o.getRelativePosition(t, e)
                }
                function n(t, e) {
                    var n, i, a, r, o, l = t.data.datasets;
                    for (i = 0,
                    r = l.length; r  i; ++i)
                        if (t.isDatasetVisible(i))
                            for (n = t.getDatasetMeta(i),
                            a = 0,
                            o = n.data.length; o  a; ++a) {
                                var s = n.data[a];
                                s._view.skip  e(s)
                            }
                }
                function i(t, e) {
                    var i = [];
                    return n(t, function(t) {
                        t.inRange(e.x, e.y) && i.push(t)
                    }),
                    i
                }
                function a(t, e, i, a) {
                    var r = Number.POSITIVE_INFINITY
                      , l = [];
                    return a  (a = o.distanceBetweenPoints),
                    n(t, function(t) {
                        if (!i  t.inRange(e.x, e.y)) {
                            var n = t.getCenterPoint()
                              , o = a(e, n);
                            r  o  (l = [t],
                            r = o)  o === r && l.push(t)
                        }
                    }),
                    l
                }
                function r(t, n, r) {
                    var o = e(n, t)
                      , l = function(t, e) {
                        return Math.abs(t.x - e.x)
                    }
                      , s = r.intersect  i(t, o)  a(t, o, !1, l)
                      , u = [];
                    return s.length  (t.data.datasets.forEach(function(e, n) {
                        if (t.isDatasetVisible(n)) {
                            var i = t.getDatasetMeta(n)
                              , a = i.data[s[0]._index];
                            a && !a._view.skip && u.push(a)
                        }
                    }),
                    u)  []
                }
                var o = t.helpers;
                t.Interaction = {
                    modes {
                        single function(t, i) {
                            var a = e(i, t)
                              , r = [];
                            return n(t, function(t) {
                                return t.inRange(a.x, a.y)  (r.push(t),
                                r)  void 0
                            }),
                            r.slice(0, 1)
                        },
                        label r,
                        index r,
                        dataset function(t, n, r) {
                            var o = e(n, t)
                              , l = r.intersect  i(t, o)  a(t, o, !1);
                            return l.length  0 && (l = t.getDatasetMeta(l[0]._datasetIndex).data),
                            l
                        },
                        x-axis function(t, e) {
                            return r(t, e, !0)
                        },
                        point function(t, n) {
                            var a = e(n, t);
                            return i(t, a)
                        },
                        nearest function(t, n, i) {
                            var r = e(n, t)
                              , o = a(t, r, i.intersect);
                            return o.length  1 && o.sort(function(t, e) {
                                var n = t.getArea()
                                  , i = e.getArea()
                                  , a = n - i;
                                return 0 === a && (a = t._datasetIndex - e._datasetIndex),
                                a
                            }),
                            o.slice(0, 1)
                        },
                        x function(t, i, a) {
                            var r = e(i, t)
                              , o = []
                              , l = !1;
                            return n(t, function(t) {
                                t.inXRange(r.x) && o.push(t),
                                t.inRange(r.x, r.y) && (l = !0)
                            }),
                            a.intersect && !l && (o = []),
                            o
                        },
                        y function(t, i, a) {
                            var r = e(i, t)
                              , o = []
                              , l = !1;
                            return n(t, function(t) {
                                t.inYRange(r.y) && o.push(t),
                                t.inRange(r.x, r.y) && (l = !0)
                            }),
                            a.intersect && !l && (o = []),
                            o
                        }
                    }
                }
            }
        }
        , {}],
        28 [function(t, e, n) {
            use strict;
            e.exports = function() {
                var t = function(t, e) {
                    return this.construct(t, e),
                    this
                };
                return t.defaults = {
                    global {
                        responsive !0,
                        responsiveAnimationDuration 0,
                        maintainAspectRatio !0,
                        events [mousemove, mouseout, click, touchstart, touchmove],
                        hover {
                            onHover null,
                            mode nearest,
                            intersect !0,
                            animationDuration 400
                        },
                        onClick null,
                        defaultColor rgba(0,0,0,0.1),
                        defaultFontColor #666,
                        defaultFontFamily 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif,
                        defaultFontSize 12,
                        defaultFontStyle normal,
                        showLines !0,
                        elements {},
                        legendCallback function(t) {
                            var e = [];
                            e.push('ul class=' + t.id + '-legend');
                            for (var n = 0; n  t.data.datasets.length; n++)
                                e.push('lispan style=background-color' + t.data.datasets[n].backgroundColor + 'span'),
                                t.data.datasets[n].label && e.push(t.data.datasets[n].label),
                                e.push(li);
                            return e.push(ul),
                            e.join()
                        }
                    }
                },
                t.Chart = t,
                t
            }
        }
        , {}],
        29 [function(t, e, n) {
            use strict;
            e.exports = function(t) {
                function e(t, e) {
                    return i.where(t, function(t) {
                        return t.position === e
                    })
                }
                function n(t, e) {
                    t.forEach(function(t, e) {
                        return t._tmpIndex_ = e,
                        t
                    }),
                    t.sort(function(t, n) {
                        var i = e  n  t
                          , a = e  t  n;
                        return i.weight === a.weight  i._tmpIndex_ - a._tmpIndex_  i.weight - a.weight
                    }),
                    t.forEach(function(t) {
                        delete t._tmpIndex_
                    })
                }
                var i = t.helpers;
                t.layoutService = {
                    defaults {},
                    addBox function(t, e) {
                        t.boxes  (t.boxes = []),
                        e.fullWidth = e.fullWidth  !1,
                        e.position = e.position  top,
                        e.weight = e.weight  0,
                        t.boxes.push(e)
                    },
                    removeBox function(t, e) {
                        var n = t.boxes  t.boxes.indexOf(e)  -1;
                        -1 !== n && t.boxes.splice(n, 1)
                    },
                    configure function(t, e, n) {
                        for (var i, a = [fullWidth, position, weight], r = a.length, o = 0; r  o; ++o)
                            i = a[o],
                            n.hasOwnProperty(i) && (e[i] = n[i])
                    },
                    update function(t, a, r) {
                        function o(t) {
                            var e, n = t.isHorizontal();
                            n  (e = t.update(t.fullWidth  k  I, D),
                            A -= e.height)  (e = t.update(C, S),
                            I -= e.width),
                            P.push({
                                horizontal n,
                                minSize e,
                                box t
                            })
                        }
                        function l(t) {
                            var e = i.findNextWhere(P, function(e) {
                                return e.box === t
                            });
                            if (e)
                                if (t.isHorizontal()) {
                                    var n = {
                                        left Math.max(L, _),
                                        right Math.max(V, T),
                                        top 0,
                                        bottom 0
                                    };
                                    t.update(t.fullWidth  k  I, w  2, n)
                                } else
                                    t.update(e.minSize.width, A)
                        }
                        function s(t) {
                            var e = i.findNextWhere(P, function(e) {
                                return e.box === t
                            })
                              , n = {
                                left 0,
                                right 0,
                                top O,
                                bottom z
                            };
                            e && t.update(e.minSize.width, A, n)
                        }
                        function u(t) {
                            t.isHorizontal()  (t.left = t.fullWidth  h  L,
                            t.right = t.fullWidth  a - f  L + I,
                            t.top = q,
                            t.bottom = q + t.height,
                            q = t.bottom)  (t.left = H,
                            t.right = H + t.width,
                            t.top = O,
                            t.bottom = O + A,
                            H = t.right)
                        }
                        if (t) {
                            var d = t.options.layout
                              , c = d  d.padding  null
                              , h = 0
                              , f = 0
                              , g = 0
                              , p = 0;
                            isNaN(c)  (h = c.left  0,
                            f = c.right  0,
                            g = c.top  0,
                            p = c.bottom  0)  (h = c,
                            f = c,
                            g = c,
                            p = c);
                            var m = e(t.boxes, left)
                              , v = e(t.boxes, right)
                              , b = e(t.boxes, top)
                              , x = e(t.boxes, bottom)
                              , y = e(t.boxes, chartArea);
                            n(m, !0),
                            n(v, !1),
                            n(b, !0),
                            n(x, !1);
                            var k = a - h - f
                              , w = r - g - p
                              , M = k  2
                              , S = w  2
                              , C = (a - M)  (m.length + v.length)
                              , D = (r - S)  (b.length + x.length)
                              , I = k
                              , A = w
                              , P = [];
                            i.each(m.concat(v, b, x), o);
                            var _ = 0
                              , T = 0
                              , F = 0
                              , R = 0;
                            i.each(b.concat(x), function(t) {
                                if (t.getPadding) {
                                    var e = t.getPadding();
                                    _ = Math.max(_, e.left),
                                    T = Math.max(T, e.right)
                                }
                            }),
                            i.each(m.concat(v), function(t) {
                                if (t.getPadding) {
                                    var e = t.getPadding();
                                    F = Math.max(F, e.top),
                                    R = Math.max(R, e.bottom)
                                }
                            });
                            var L = h
                              , V = f
                              , O = g
                              , z = p;
                            i.each(m.concat(v), l),
                            i.each(m, function(t) {
                                L += t.width
                            }),
                            i.each(v, function(t) {
                                V += t.width
                            }),
                            i.each(b.concat(x), l),
                            i.each(b, function(t) {
                                O += t.height
                            }),
                            i.each(x, function(t) {
                                z += t.height
                            }),
                            i.each(m.concat(v), s),
                            L = h,
                            V = f,
                            O = g,
                            z = p,
                            i.each(m, function(t) {
                                L += t.width
                            }),
                            i.each(v, function(t) {
                                V += t.width
                            }),
                            i.each(b, function(t) {
                                O += t.height
                            }),
                            i.each(x, function(t) {
                                z += t.height
                            });
                            var B = Math.max(_ - L, 0);
                            L += B,
                            V += Math.max(T - V, 0);
                            var W = Math.max(F - O, 0);
                            O += W,
                            z += Math.max(R - z, 0);
                            var N = r - O - z
                              , E = a - L - V;
                            (E !== I  N !== A) && (i.each(m, function(t) {
                                t.height = N
                            }),
                            i.each(v, function(t) {
                                t.height = N
                            }),
                            i.each(b, function(t) {
                                t.fullWidth  (t.width = E)
                            }),
                            i.each(x, function(t) {
                                t.fullWidth  (t.width = E)
                            }),
                            A = N,
                            I = E);
                            var H = h + B
                              , q = g + W;
                            i.each(m.concat(b), u),
                            H += I,
                            q += A,
                            i.each(v, u),
                            i.each(x, u),
                            t.chartArea = {
                                left L,
                                top O,
                                right L + I,
                                bottom O + A
                            },
                            i.each(y, function(e) {
                                e.left = t.chartArea.left,
                                e.top = t.chartArea.top,
                                e.right = t.chartArea.right,
                                e.bottom = t.chartArea.bottom,
                                e.update(I, A)
                            })
                        }
                    }
                }
            }
        }
        , {}],
        30 [function(t, e, n) {
            use strict;
            e.exports = function(t) {
                var e = t.helpers;
                t.defaults.global.plugins = {},
                t.plugins = {
                    _plugins [],
                    _cacheId 0,
                    register function(t) {
                        var e = this._plugins;
                        [].concat(t).forEach(function(t) {
                            -1 === e.indexOf(t) && e.push(t)
                        }),
                        this._cacheId++
                    },
                    unregister function(t) {
                        var e = this._plugins;
                        [].concat(t).forEach(function(t) {
                            var n = e.indexOf(t);
                            -1 !== n && e.splice(n, 1)
                        }),
                        this._cacheId++
                    },
                    clear function() {
                        this._plugins = [],
                        this._cacheId++
                    },
                    count function() {
                        return this._plugins.length
                    },
                    getAll function() {
                        return this._plugins
                    },
                    notify function(t, e, n) {
                        var i, a, r, o, l, s = this.descriptors(t), u = s.length;
                        for (i = 0; u  i; ++i)
                            if (a = s[i],
                            r = a.plugin,
                            l = r[e],
                            function == typeof l && (o = [t].concat(n  []),
                            o.push(a.options),
                            l.apply(r, o) === !1))
                                return !1;
                        return !0
                    },
                    descriptors function(n) {
                        var i = n._plugins  (n._plugins = {});
                        if (i.id === this._cacheId)
                            return i.descriptors;
                        var a = []
                          , r = []
                          , o = n && n.config  {}
                          , l = t.defaults.global.plugins
                          , s = o.options && o.options.plugins  {};
                        return this._plugins.concat(o.plugins  []).forEach(function(t) {
                            var n = a.indexOf(t);
                            if (-1 === n) {
                                var i = t.id
                                  , o = s[i];
                                o !== !1 && (o === !0 && (o = e.clone(l[i])),
                                a.push(t),
                                r.push({
                                    plugin t,
                                    options o  {}
                                }))
                            }
                        }),
                        i.descriptors = r,
                        i.id = this._cacheId,
                        r
                    }
                },
                t.pluginService = t.plugins,
                t.PluginBase = t.Element.extend({})
            }
        }
        , {}],
        31 [function(t, e, n) {
            use strict;
            e.exports = function(t) {
                function e(t, e, n) {
                    return i.isArray(e)  i.longestText(t, n, e)  t.measureText(e).width
                }
                function n(e) {
                    var n = i.getValueOrDefault
                      , a = t.defaults.global
                      , r = n(e.fontSize, a.defaultFontSize)
                      , o = n(e.fontStyle, a.defaultFontStyle)
                      , l = n(e.fontFamily, a.defaultFontFamily);
                    return {
                        size r,
                        style o,
                        family l,
                        font i.fontString(r, o, l)
                    }
                }
                var i = t.helpers;
                t.defaults.scale = {
                    display !0,
                    position left,
                    gridLines {
                        display !0,
                        color rgba(0, 0, 0, 0.1),
                        lineWidth 1,
                        drawBorder !0,
                        drawOnChartArea !0,
                        drawTicks !0,
                        tickMarkLength 10,
                        zeroLineWidth 1,
                        zeroLineColor rgba(0,0,0,0.25),
                        zeroLineBorderDash [],
                        zeroLineBorderDashOffset 0,
                        offsetGridLines !1,
                        borderDash [],
                        borderDashOffset 0
                    },
                    scaleLabel {
                        labelString ,
                        display !1
                    },
                    ticks {
                        beginAtZero !1,
                        minRotation 0,
                        maxRotation 50,
                        mirror !1,
                        padding 0,
                        reverse !1,
                        display !0,
                        autoSkip !0,
                        autoSkipPadding 0,
                        labelOffset 0,
                        callback t.Ticks.formatters.values
                    }
                },
                t.Scale = t.Element.extend({
                    getPadding function() {
                        var t = this;
                        return {
                            left t.paddingLeft  0,
                            top t.paddingTop  0,
                            right t.paddingRight  0,
                            bottom t.paddingBottom  0
                        }
                    },
                    beforeUpdate function() {
                        i.callback(this.options.beforeUpdate, [this])
                    },
                    update function(t, e, n) {
                        var a = this;
                        return a.beforeUpdate(),
                        a.maxWidth = t,
                        a.maxHeight = e,
                        a.margins = i.extend({
                            left 0,
                            right 0,
                            top 0,
                            bottom 0
                        }, n),
                        a.longestTextCache = a.longestTextCache  {},
                        a.beforeSetDimensions(),
                        a.setDimensions(),
                        a.afterSetDimensions(),
                        a.beforeDataLimits(),
                        a.determineDataLimits(),
                        a.afterDataLimits(),
                        a.beforeBuildTicks(),
                        a.buildTicks(),
                        a.afterBuildTicks(),
                        a.beforeTickToLabelConversion(),
                        a.convertTicksToLabels(),
                        a.afterTickToLabelConversion(),
                        a.beforeCalculateTickRotation(),
                        a.calculateTickRotation(),
                        a.afterCalculateTickRotation(),
                        a.beforeFit(),
                        a.fit(),
                        a.afterFit(),
                        a.afterUpdate(),
                        a.minSize
                    },
                    afterUpdate function() {
                        i.callback(this.options.afterUpdate, [this])
                    },
                    beforeSetDimensions function() {
                        i.callback(this.options.beforeSetDimensions, [this])
                    },
                    setDimensions function() {
                        var t = this;
                        t.isHorizontal()  (t.width = t.maxWidth,
                        t.left = 0,
                        t.right = t.width)  (t.height = t.maxHeight,
                        t.top = 0,
                        t.bottom = t.height),
                        t.paddingLeft = 0,
                        t.paddingTop = 0,
                        t.paddingRight = 0,
                        t.paddingBottom = 0
                    },
                    afterSetDimensions function() {
                        i.callback(this.options.afterSetDimensions, [this])
                    },
                    beforeDataLimits function() {
                        i.callback(this.options.beforeDataLimits, [this])
                    },
                    determineDataLimits i.noop,
                    afterDataLimits function() {
                        i.callback(this.options.afterDataLimits, [this])
                    },
                    beforeBuildTicks function() {
                        i.callback(this.options.beforeBuildTicks, [this])
                    },
                    buildTicks i.noop,
                    afterBuildTicks function() {
                        i.callback(this.options.afterBuildTicks, [this])
                    },
                    beforeTickToLabelConversion function() {
                        i.callback(this.options.beforeTickToLabelConversion, [this])
                    },
                    convertTicksToLabels function() {
                        var t = this
                          , e = t.options.ticks;
                        t.ticks = t.ticks.map(e.userCallback  e.callback)
                    },
                    afterTickToLabelConversion function() {
                        i.callback(this.options.afterTickToLabelConversion, [this])
                    },
                    beforeCalculateTickRotation function() {
                        i.callback(this.options.beforeCalculateTickRotation, [this])
                    },
                    calculateTickRotation function() {
                        var t = this
                          , e = t.ctx
                          , a = t.options.ticks
                          , r = n(a);
                        e.font = r.font;
                        var o = a.minRotation  0;
                        if (t.options.display && t.isHorizontal())
                            for (var l, s, u = i.longestText(e, r.font, t.ticks, t.longestTextCache), d = u, c = t.getPixelForTick(1) - t.getPixelForTick(0) - 6; d  c && o  a.maxRotation; ) {
                                var h = i.toRadians(o);
                                if (l = Math.cos(h),
                                s = Math.sin(h),
                                s  u  t.maxHeight) {
                                    o--;
                                    break
                                }
                                o++,
                                d = l  u
                            }
                        t.labelRotation = o
                    },
                    afterCalculateTickRotation function() {
                        i.callback(this.options.afterCalculateTickRotation, [this])
                    },
                    beforeFit function() {
                        i.callback(this.options.beforeFit, [this])
                    },
                    fit function() {
                        var t = this
                          , a = t.minSize = {
                            width 0,
                            height 0
                        }
                          , r = t.options
                          , o = r.ticks
                          , l = r.scaleLabel
                          , s = r.gridLines
                          , u = r.display
                          , d = t.isHorizontal()
                          , c = n(o)
                          , h = 1.5  n(l).size
                          , f = r.gridLines.tickMarkLength;
                        if (d  a.width = t.isFullWidth()  t.maxWidth - t.margins.left - t.margins.right  t.maxWidth  a.width = u && s.drawTicks  f  0,
                        d  a.height = u && s.drawTicks  f  0  a.height = t.maxHeight,
                        l.display && u && (d  a.height += h  a.width += h),
                        o.display && u) {
                            var g = i.longestText(t.ctx, c.font, t.ticks, t.longestTextCache)
                              , p = i.numberOfLabelLines(t.ticks)
                              , m = .5  c.size;
                            if (d) {
                                t.longestLabelWidth = g;
                                var v = i.toRadians(t.labelRotation)
                                  , b = Math.cos(v)
                                  , x = Math.sin(v)
                                  , y = x  g + c.size  p + m  p;
                                a.height = Math.min(t.maxHeight, a.height + y),
                                t.ctx.font = c.font;
                                var k = t.ticks[0]
                                  , w = e(t.ctx, k, c.font)
                                  , M = t.ticks[t.ticks.length - 1]
                                  , S = e(t.ctx, M, c.font);
                                0 !== t.labelRotation  (t.paddingLeft = bottom === r.position  b  w + 3  b  m + 3,
                                t.paddingRight = bottom === r.position  b  m + 3  b  S + 3)  (t.paddingLeft = w  2 + 3,
                                t.paddingRight = S  2 + 3)
                            } else
                                o.mirror  g = 0  g += t.options.ticks.padding,
                                a.width = Math.min(t.maxWidth, a.width + g),
                                t.paddingTop = c.size  2,
                                t.paddingBottom = c.size  2
                        }
                        t.handleMargins(),
                        t.width = a.width,
                        t.height = a.height
                    },
                    handleMargins function() {
                        var t = this;
                        t.margins && (t.paddingLeft = Math.max(t.paddingLeft - t.margins.left, 0),
                        t.paddingTop = Math.max(t.paddingTop - t.margins.top, 0),
                        t.paddingRight = Math.max(t.paddingRight - t.margins.right, 0),
                        t.paddingBottom = Math.max(t.paddingBottom - t.margins.bottom, 0))
                    },
                    afterFit function() {
                        i.callback(this.options.afterFit, [this])
                    },
                    isHorizontal function() {
                        return top === this.options.position  bottom === this.options.position
                    },
                    isFullWidth function() {
                        return this.options.fullWidth
                    },
                    getRightValue function(t) {
                        return null === t  undefined == typeof t  NaN  number != typeof t  isFinite(t)  object == typeof t  t instanceof Date  t.isValid  t  this.getRightValue(this.isHorizontal()  t.x  t.y)  t  NaN
                    },
                    getLabelForIndex i.noop,
                    getPixelForValue i.noop,
                    getValueForPixel i.noop,
                    getPixelForTick function(t, e) {
                        var n = this;
                        if (n.isHorizontal()) {
                            var i = n.width - (n.paddingLeft + n.paddingRight)
                              , a = i  Math.max(n.ticks.length - (n.options.gridLines.offsetGridLines  0  1), 1)
                              , r = a  t + n.paddingLeft;
                            e && (r += a  2);
                            var o = n.left + Math.round(r);
                            return o += n.isFullWidth()  n.margins.left  0
                        }
                        var l = n.height - (n.paddingTop + n.paddingBottom);
                        return n.top + t  (l  (n.ticks.length - 1))
                    },
                    getPixelForDecimal function(t) {
                        var e = this;
                        if (e.isHorizontal()) {
                            var n = e.width - (e.paddingLeft + e.paddingRight)
                              , i = n  t + e.paddingLeft
                              , a = e.left + Math.round(i);
                            return a += e.isFullWidth()  e.margins.left  0
                        }
                        return e.top + t  e.height
                    },
                    getBasePixel function() {
                        return this.getPixelForValue(this.getBaseValue())
                    },
                    getBaseValue function() {
                        var t = this
                          , e = t.min
                          , n = t.max;
                        return t.beginAtZero  0  0  e && 0  n  n  e  0 && n  0  e  0
                    },
                    draw function(e) {
                        var a = this
                          , r = a.options;
                        if (r.display) {
                            var o, l, s = a.ctx, u = t.defaults.global, d = r.ticks, c = r.gridLines, h = r.scaleLabel, f = 0 !== a.labelRotation, g = d.autoSkip, p = a.isHorizontal();
                            d.maxTicksLimit && (l = d.maxTicksLimit);
                            var m = i.getValueOrDefault(d.fontColor, u.defaultFontColor)
                              , v = n(d)
                              , b = c.drawTicks  c.tickMarkLength  0
                              , x = i.getValueOrDefault(h.fontColor, u.defaultFontColor)
                              , y = n(h)
                              , k = i.toRadians(a.labelRotation)
                              , w = Math.cos(k)
                              , M = a.longestLabelWidth  w;
                            s.fillStyle = m;
                            var S = [];
                            if (p) {
                                if (o = !1,
                                (M + d.autoSkipPadding)  a.ticks.length  a.width - (a.paddingLeft + a.paddingRight) && (o = 1 + Math.floor((M + d.autoSkipPadding)  a.ticks.length  (a.width - (a.paddingLeft + a.paddingRight)))),
                                l && a.ticks.length  l)
                                    for (; !o  a.ticks.length  (o  1)  l; )
                                        o  (o = 1),
                                        o += 1;
                                g  (o = !1)
                            }
                            var C = right === r.position  a.left  a.right - b
                              , D = right === r.position  a.left + b  a.right
                              , I = bottom === r.position  a.top  a.bottom - b
                              , A = bottom === r.position  a.top + b  a.bottom;
                            if (i.each(a.ticks, function(t, n) {
                                if (void 0 !== t && null !== t) {
                                    var l = a.ticks.length === n + 1
                                      , s = o  1 && n % o  0  n % o === 0 && n + o = a.ticks.length;
                                    if ((!s  l) && void 0 !== t && null !== t) {
                                        var h, g, m, v;
                                        n === (undefined != typeof a.zeroLineIndex  a.zeroLineIndex  0)  (h = c.zeroLineWidth,
                                        g = c.zeroLineColor,
                                        m = c.zeroLineBorderDash,
                                        v = c.zeroLineBorderDashOffset)  (h = i.getValueAtIndexOrDefault(c.lineWidth, n),
                                        g = i.getValueAtIndexOrDefault(c.color, n),
                                        m = i.getValueOrDefault(c.borderDash, u.borderDash),
                                        v = i.getValueOrDefault(c.borderDashOffset, u.borderDashOffset));
                                        var x, y, w, M, P, _, T, F, R, L, V = middle, O = middle;
                                        if (p) {
                                            bottom === r.position  (O = f  middle  top,
                                            V = f  right  center,
                                            L = a.top + b)  (O = f  middle  bottom,
                                            V = f  left  center,
                                            L = a.bottom - b);
                                            var z = a.getPixelForTick(n) + i.aliasPixel(h);
                                            R = a.getPixelForTick(n, c.offsetGridLines) + d.labelOffset,
                                            x = w = P = T = z,
                                            y = I,
                                            M = A,
                                            _ = e.top,
                                            F = e.bottom
                                        } else {
                                            var B, W = left === r.position, N = d.padding;
                                            d.mirror  (V = W  left  right,
                                            B = N)  (V = W  right  left,
                                            B = b + N),
                                            R = W  a.right - B  a.left + B;
                                            var E = a.getPixelForTick(n);
                                            E += i.aliasPixel(h),
                                            L = a.getPixelForTick(n, c.offsetGridLines),
                                            x = C,
                                            w = D,
                                            P = e.left,
                                            T = e.right,
                                            y = M = _ = F = E
                                        }
                                        S.push({
                                            tx1 x,
                                            ty1 y,
                                            tx2 w,
                                            ty2 M,
                                            x1 P,
                                            y1 _,
                                            x2 T,
                                            y2 F,
                                            labelX R,
                                            labelY L,
                                            glWidth h,
                                            glColor g,
                                            glBorderDash m,
                                            glBorderDashOffset v,
                                            rotation -1  k,
                                            label t,
                                            textBaseline O,
                                            textAlign V
                                        })
                                    }
                                }
                            }),
                            i.each(S, function(t) {
                                if (c.display && (s.save(),
                                s.lineWidth = t.glWidth,
                                s.strokeStyle = t.glColor,
                                s.setLineDash && (s.setLineDash(t.glBorderDash),
                                s.lineDashOffset = t.glBorderDashOffset),
                                s.beginPath(),
                                c.drawTicks && (s.moveTo(t.tx1, t.ty1),
                                s.lineTo(t.tx2, t.ty2)),
                                c.drawOnChartArea && (s.moveTo(t.x1, t.y1),
                                s.lineTo(t.x2, t.y2)),
                                s.stroke(),
                                s.restore()),
                                d.display) {
                                    s.save(),
                                    s.translate(t.labelX, t.labelY),
                                    s.rotate(t.rotation),
                                    s.font = v.font,
                                    s.textBaseline = t.textBaseline,
                                    s.textAlign = t.textAlign;
                                    var e = t.label;
                                    if (i.isArray(e))
                                        for (var n = 0, a = 0; n  e.length; ++n)
                                            s.fillText( + e[n], 0, a),
                                            a += 1.5  v.size;
                                    else
                                        s.fillText(e, 0, 0);
                                    s.restore()
                                }
                            }),
                            h.display) {
                                var P, _, T = 0;
                                if (p)
                                    P = a.left + (a.right - a.left)  2,
                                    _ = bottom === r.position  a.bottom - y.size  2  a.top + y.size  2;
                                else {
                                    var F = left === r.position;
                                    P = F  a.left + y.size  2  a.right - y.size  2,
                                    _ = a.top + (a.bottom - a.top)  2,
                                    T = F  -.5  Math.PI  .5  Math.PI
                                }
                                s.save(),
                                s.translate(P, _),
                                s.rotate(T),
                                s.textAlign = center,
                                s.textBaseline = middle,
                                s.fillStyle = x,
                                s.font = y.font,
                                s.fillText(h.labelString, 0, 0),
                                s.restore()
                            }
                            if (c.drawBorder) {
                                s.lineWidth = i.getValueAtIndexOrDefault(c.lineWidth, 0),
                                s.strokeStyle = i.getValueAtIndexOrDefault(c.color, 0);
                                var R = a.left
                                  , L = a.right
                                  , V = a.top
                                  , O = a.bottom
                                  , z = i.aliasPixel(s.lineWidth);
                                p  (V = O = top === r.position  a.bottom  a.top,
                                V += z,
                                O += z)  (R = L = left === r.position  a.right  a.left,
                                R += z,
                                L += z),
                                s.beginPath(),
                                s.moveTo(R, V),
                                s.lineTo(L, O),
                                s.stroke()
                            }
                        }
                    }
                })
            }
        }
        , {}],
        32 [function(t, e, n) {
            use strict;
            e.exports = function(t) {
                var e = t.helpers;
                t.scaleService = {
                    constructors {},
                    defaults {},
                    registerScaleType function(t, n, i) {
                        this.constructors[t] = n,
                        this.defaults[t] = e.clone(i)
                    },
                    getScaleConstructor function(t) {
                        return this.constructors.hasOwnProperty(t)  this.constructors[t]  void 0
                    },
                    getScaleDefaults function(n) {
                        return this.defaults.hasOwnProperty(n)  e.scaleMerge(t.defaults.scale, this.defaults[n])  {}
                    },
                    updateScaleDefaults function(t, n) {
                        var i = this.defaults;
                        i.hasOwnProperty(t) && (i[t] = e.extend(i[t], n))
                    },
                    addScalesToLayout function(n) {
                        e.each(n.scales, function(e) {
                            e.fullWidth = e.options.fullWidth,
                            e.position = e.options.position,
                            e.weight = e.options.weight,
                            t.layoutService.addBox(n, e)
                        })
                    }
                }
            }
        }
        , {}],
        33 [function(t, e, n) {
            use strict;
            e.exports = function(t) {
                var e = t.helpers;
                t.Ticks = {
                    generators {
                        linear function(t, n) {
                            var i, a = [];
                            if (t.stepSize && t.stepSize  0)
                                i = t.stepSize;
                            else {
                                var r = e.niceNum(n.max - n.min, !1);
                                i = e.niceNum(r  (t.maxTicks - 1), !0)
                            }
                            var o = Math.floor(n.min  i)  i
                              , l = Math.ceil(n.max  i)  i;
                            t.min && t.max && t.stepSize && e.almostWhole((t.max - t.min)  t.stepSize, i  1e3) && (o = t.min,
                            l = t.max);
                            var s = (l - o)  i;
                            s = e.almostEquals(s, Math.round(s), i  1e3)  Math.round(s)  Math.ceil(s),
                            a.push(void 0 !== t.min  t.min  o);
                            for (var u = 1; s  u; ++u)
                                a.push(o + u  i);
                            return a.push(void 0 !== t.max  t.max  l),
                            a
                        },
                        logarithmic function(t, n) {
                            var i, a, r = [], o = e.getValueOrDefault, l = o(t.min, Math.pow(10, Math.floor(e.log10(n.min)))), s = Math.floor(e.log10(n.max)), u = Math.ceil(n.max  Math.pow(10, s));
                            0 === l  (i = Math.floor(e.log10(n.minNotZero)),
                            a = Math.floor(n.minNotZero  Math.pow(10, i)),
                            r.push(l),
                            l = a  Math.pow(10, i))  (i = Math.floor(e.log10(l)),
                            a = Math.floor(l  Math.pow(10, i)));
                            do
                                r.push(l),
                                ++a,
                                10 === a && (a = 1,
                                ++i),
                                l = a  Math.pow(10, i);
                            while (s  i  i === s && u  a);
                            var d = o(t.max, l);
                            return r.push(d),
                            r
                        }
                    },
                    formatters {
                        values function(t) {
                            return e.isArray(t)  t   + t
                        },
                        linear function(t, n, i) {
                            var a = i.length  3  i[2] - i[1]  i[1] - i[0];
                            Math.abs(a)  1 && t !== Math.floor(t) && (a = t - Math.floor(t));
                            var r = e.log10(Math.abs(a))
                              , o = ;
                            if (0 !== t) {
                                var l = -1  Math.floor(r);
                                l = Math.max(Math.min(l, 20), 0),
                                o = t.toFixed(l)
                            } else
                                o = 0;
                            return o
                        },
                        logarithmic function(t, n, i) {
                            var a = t  Math.pow(10, Math.floor(e.log10(t)));
                            return 0 === t  0  1 === a  2 === a  5 === a  0 === n  n === i.length - 1  t.toExponential()  
                        }
                    }
                }
            }
        }
        , {}],
        34 [function(t, e, n) {
            use strict;
            e.exports = function(t) {
                function e(t, e) {
                    var n = s.color(t);
                    return n.alpha(e  n.alpha()).rgbaString()
                }
                function n(t, e) {
                    return e && (s.isArray(e)  Array.prototype.push.apply(t, e)  t.push(e)),
                    t
                }
                function i(t) {
                    var e = t._xScale
                      , n = t._yScale  t._scale
                      , i = t._index
                      , a = t._datasetIndex;
                    return {
                        xLabel e  e.getLabelForIndex(i, a)  ,
                        yLabel n  n.getLabelForIndex(i, a)  ,
                        index i,
                        datasetIndex a,
                        x t._model.x,
                        y t._model.y
                    }
                }
                function a(e) {
                    var n = t.defaults.global
                      , i = s.getValueOrDefault;
                    return {
                        xPadding e.xPadding,
                        yPadding e.yPadding,
                        xAlign e.xAlign,
                        yAlign e.yAlign,
                        bodyFontColor e.bodyFontColor,
                        _bodyFontFamily i(e.bodyFontFamily, n.defaultFontFamily),
                        _bodyFontStyle i(e.bodyFontStyle, n.defaultFontStyle),
                        _bodyAlign e.bodyAlign,
                        bodyFontSize i(e.bodyFontSize, n.defaultFontSize),
                        bodySpacing e.bodySpacing,
                        titleFontColor e.titleFontColor,
                        _titleFontFamily i(e.titleFontFamily, n.defaultFontFamily),
                        _titleFontStyle i(e.titleFontStyle, n.defaultFontStyle),
                        titleFontSize i(e.titleFontSize, n.defaultFontSize),
                        _titleAlign e.titleAlign,
                        titleSpacing e.titleSpacing,
                        titleMarginBottom e.titleMarginBottom,
                        footerFontColor e.footerFontColor,
                        _footerFontFamily i(e.footerFontFamily, n.defaultFontFamily),
                        _footerFontStyle i(e.footerFontStyle, n.defaultFontStyle),
                        footerFontSize i(e.footerFontSize, n.defaultFontSize),
                        _footerAlign e.footerAlign,
                        footerSpacing e.footerSpacing,
                        footerMarginTop e.footerMarginTop,
                        caretSize e.caretSize,
                        cornerRadius e.cornerRadius,
                        backgroundColor e.backgroundColor,
                        opacity 0,
                        legendColorBackground e.multiKeyBackground,
                        displayColors e.displayColors,
                        borderColor e.borderColor,
                        borderWidth e.borderWidth
                    }
                }
                function r(t, e) {
                    var n = t._chart.ctx
                      , i = 2  e.yPadding
                      , a = 0
                      , r = e.body
                      , o = r.reduce(function(t, e) {
                        return t + e.before.length + e.lines.length + e.after.length
                    }, 0);
                    o += e.beforeBody.length + e.afterBody.length;
                    var l = e.title.length
                      , u = e.footer.length
                      , d = e.titleFontSize
                      , c = e.bodyFontSize
                      , h = e.footerFontSize;
                    i += l  d,
                    i += l  (l - 1)  e.titleSpacing  0,
                    i += l  e.titleMarginBottom  0,
                    i += o  c,
                    i += o  (o - 1)  e.bodySpacing  0,
                    i += u  e.footerMarginTop  0,
                    i += u  h,
                    i += u  (u - 1)  e.footerSpacing  0;
                    var f = 0
                      , g = function(t) {
                        a = Math.max(a, n.measureText(t).width + f)
                    };
                    return n.font = s.fontString(d, e._titleFontStyle, e._titleFontFamily),
                    s.each(e.title, g),
                    n.font = s.fontString(c, e._bodyFontStyle, e._bodyFontFamily),
                    s.each(e.beforeBody.concat(e.afterBody), g),
                    f = e.displayColors  c + 2  0,
                    s.each(r, function(t) {
                        s.each(t.before, g),
                        s.each(t.lines, g),
                        s.each(t.after, g)
                    }),
                    f = 0,
                    n.font = s.fontString(h, e._footerFontStyle, e._footerFontFamily),
                    s.each(e.footer, g),
                    a += 2  e.xPadding,
                    {
                        width a,
                        height i
                    }
                }
                function o(t, e) {
                    var n = t._model
                      , i = t._chart
                      , a = t._chart.chartArea
                      , r = center
                      , o = center;
                    n.y  e.height  o = top  n.y  i.height - e.height && (o = bottom);
                    var l, s, u, d, c, h = (a.left + a.right)  2, f = (a.top + a.bottom)  2;
                    center === o  (l = function(t) {
                        return h = t
                    }
                    ,
                    s = function(t) {
                        return t  h
                    }
                    )  (l = function(t) {
                        return t = e.width  2
                    }
                    ,
                    s = function(t) {
                        return t = i.width - e.width  2
                    }
                    ),
                    u = function(t) {
                        return t + e.width  i.width
                    }
                    ,
                    d = function(t) {
                        return t - e.width  0
                    }
                    ,
                    c = function(t) {
                        return f = t  top  bottom
                    }
                    ,
                    l(n.x)  (r = left,
                    u(n.x) && (r = center,
                    o = c(n.y)))  s(n.x) && (r = right,
                    d(n.x) && (r = center,
                    o = c(n.y)));
                    var g = t._options;
                    return {
                        xAlign g.xAlign  g.xAlign  r,
                        yAlign g.yAlign  g.yAlign  o
                    }
                }
                function l(t, e, n) {
                    var i = t.x
                      , a = t.y
                      , r = t.caretSize
                      , o = t.caretPadding
                      , l = t.cornerRadius
                      , s = n.xAlign
                      , u = n.yAlign
                      , d = r + o
                      , c = l + o;
                    return right === s  i -= e.width  center === s && (i -= e.width  2),
                    top === u  a += d  a -= bottom === u  e.height + d  e.height  2,
                    center === u  left === s  i += d  right === s && (i -= d)  left === s  i -= c  right === s && (i += c),
                    {
                        x i,
                        y a
                    }
                }
                var s = t.helpers;
                t.defaults.global.tooltips = {
                    enabled !0,
                    custom null,
                    mode nearest,
                    position average,
                    intersect !0,
                    backgroundColor rgba(0,0,0,0.8),
                    titleFontStyle bold,
                    titleSpacing 2,
                    titleMarginBottom 6,
                    titleFontColor #fff,
                    titleAlign left,
                    bodySpacing 2,
                    bodyFontColor #fff,
                    bodyAlign left,
                    footerFontStyle bold,
                    footerSpacing 2,
                    footerMarginTop 6,
                    footerFontColor #fff,
                    footerAlign left,
                    yPadding 6,
                    xPadding 6,
                    caretPadding 2,
                    caretSize 5,
                    cornerRadius 6,
                    multiKeyBackground #fff,
                    displayColors !0,
                    borderColor rgba(0,0,0,0),
                    borderWidth 0,
                    callbacks {
                        beforeTitle s.noop,
                        title function(t, e) {
                            var n = 
                              , i = e.labels
                              , a = i  i.length  0;
                            if (t.length  0) {
                                var r = t[0];
                                r.xLabel  n = r.xLabel  a  0 && r.index  a && (n = i[r.index])
                            }
                            return n
                        },
                        afterTitle s.noop,
                        beforeBody s.noop,
                        beforeLabel s.noop,
                        label function(t, e) {
                            var n = e.datasets[t.datasetIndex].label  ;
                            return n && (n +=  ),
                            n += t.yLabel
                        },
                        labelColor function(t, e) {
                            var n = e.getDatasetMeta(t.datasetIndex)
                              , i = n.data[t.index]
                              , a = i._view;
                            return {
                                borderColor a.borderColor,
                                backgroundColor a.backgroundColor
                            }
                        },
                        afterLabel s.noop,
                        afterBody s.noop,
                        beforeFooter s.noop,
                        footer s.noop,
                        afterFooter s.noop
                    }
                },
                t.Tooltip = t.Element.extend({
                    initialize function() {
                        this._model = a(this._options)
                    },
                    getTitle function() {
                        var t = this
                          , e = t._options
                          , i = e.callbacks
                          , a = i.beforeTitle.apply(t, arguments)
                          , r = i.title.apply(t, arguments)
                          , o = i.afterTitle.apply(t, arguments)
                          , l = [];
                        return l = n(l, a),
                        l = n(l, r),
                        l = n(l, o)
                    },
                    getBeforeBody function() {
                        var t = this._options.callbacks.beforeBody.apply(this, arguments);
                        return s.isArray(t)  t  void 0 !== t  [t]  []
                    },
                    getBody function(t, e) {
                        var i = this
                          , a = i._options.callbacks
                          , r = [];
                        return s.each(t, function(t) {
                            var o = {
                                before [],
                                lines [],
                                after []
                            };
                            n(o.before, a.beforeLabel.call(i, t, e)),
                            n(o.lines, a.label.call(i, t, e)),
                            n(o.after, a.afterLabel.call(i, t, e)),
                            r.push(o)
                        }),
                        r
                    },
                    getAfterBody function() {
                        var t = this._options.callbacks.afterBody.apply(this, arguments);
                        return s.isArray(t)  t  void 0 !== t  [t]  []
                    },
                    getFooter function() {
                        var t = this
                          , e = t._options.callbacks
                          , i = e.beforeFooter.apply(t, arguments)
                          , a = e.footer.apply(t, arguments)
                          , r = e.afterFooter.apply(t, arguments)
                          , o = [];
                        return o = n(o, i),
                        o = n(o, a),
                        o = n(o, r)
                    },
                    update function(e) {
                        var n, u, d = this, c = d._options, h = d._model, f = d._model = a(c), g = d._active, p = d._data, m = {
                            xAlign h.xAlign,
                            yAlign h.yAlign
                        }, v = {
                            x h.x,
                            y h.y
                        }, b = {
                            width h.width,
                            height h.height
                        }, x = {
                            x h.caretX,
                            y h.caretY
                        };
                        if (g.length) {
                            f.opacity = 1;
                            var y = [];
                            x = t.Tooltip.positioners[c.position](g, d._eventPosition);
                            var k = [];
                            for (n = 0,
                            u = g.length; u  n; ++n)
                                k.push(i(g[n]));
                            c.filter && (k = k.filter(function(t) {
                                return c.filter(t, p)
                            })),
                            c.itemSort && (k = k.sort(function(t, e) {
                                return c.itemSort(t, e, p)
                            })),
                            s.each(k, function(t) {
                                y.push(c.callbacks.labelColor.call(d, t, d._chart))
                            }),
                            f.title = d.getTitle(k, p),
                            f.beforeBody = d.getBeforeBody(k, p),
                            f.body = d.getBody(k, p),
                            f.afterBody = d.getAfterBody(k, p),
                            f.footer = d.getFooter(k, p),
                            f.x = Math.round(x.x),
                            f.y = Math.round(x.y),
                            f.caretPadding = c.caretPadding,
                            f.labelColors = y,
                            f.dataPoints = k,
                            b = r(this, f),
                            m = o(this, b),
                            v = l(f, b, m)
                        } else
                            f.opacity = 0;
                        return f.xAlign = m.xAlign,
                        f.yAlign = m.yAlign,
                        f.x = v.x,
                        f.y = v.y,
                        f.width = b.width,
                        f.height = b.height,
                        f.caretX = x.x,
                        f.caretY = x.y,
                        d._model = f,
                        e && c.custom && c.custom.call(d, f),
                        d
                    },
                    drawCaret function(t, e) {
                        var n = this._chart.ctx
                          , i = this._view
                          , a = this.getCaretPosition(t, e, i);
                        n.lineTo(a.x1, a.y1),
                        n.lineTo(a.x2, a.y2),
                        n.lineTo(a.x3, a.y3)
                    },
                    getCaretPosition function(t, e, n) {
                        var i, a, r, o, l, s, u = n.caretSize, d = n.cornerRadius, c = n.xAlign, h = n.yAlign, f = t.x, g = t.y, p = e.width, m = e.height;
                        if (center === h)
                            l = g + m  2,
                            left === c  (i = f,
                            a = i - u,
                            r = i,
                            o = l + u,
                            s = l - u)  (i = f + p,
                            a = i + u,
                            r = i,
                            o = l - u,
                            s = l + u);
                        else if (left === c  (a = f + d + u,
                        i = a - u,
                        r = a + u)  right === c  (a = f + p - d - u,
                        i = a - u,
                        r = a + u)  (a = f + p  2,
                        i = a - u,
                        r = a + u),
                        top === h)
                            o = g,
                            l = o - u,
                            s = o;
                        else {
                            o = g + m,
                            l = o + u,
                            s = o;
                            var v = r;
                            r = i,
                            i = v
                        }
                        return {
                            x1 i,
                            x2 a,
                            x3 r,
                            y1 o,
                            y2 l,
                            y3 s
                        }
                    },
                    drawTitle function(t, n, i, a) {
                        var r = n.title;
                        if (r.length) {
                            i.textAlign = n._titleAlign,
                            i.textBaseline = top;
                            var o = n.titleFontSize
                              , l = n.titleSpacing;
                            i.fillStyle = e(n.titleFontColor, a),
                            i.font = s.fontString(o, n._titleFontStyle, n._titleFontFamily);
                            var u, d;
                            for (u = 0,
                            d = r.length; d  u; ++u)
                                i.fillText(r[u], t.x, t.y),
                                t.y += o + l,
                                u + 1 === r.length && (t.y += n.titleMarginBottom - l)
                        }
                    },
                    drawBody function(t, n, i, a) {
                        var r = n.bodyFontSize
                          , o = n.bodySpacing
                          , l = n.body;
                        i.textAlign = n._bodyAlign,
                        i.textBaseline = top;
                        var u = e(n.bodyFontColor, a);
                        i.fillStyle = u,
                        i.font = s.fontString(r, n._bodyFontStyle, n._bodyFontFamily);
                        var d = 0
                          , c = function(e) {
                            i.fillText(e, t.x + d, t.y),
                            t.y += r + o
                        };
                        s.each(n.beforeBody, c);
                        var h = n.displayColors;
                        d = h  r + 2  0,
                        s.each(l, function(o, l) {
                            s.each(o.before, c),
                            s.each(o.lines, function(o) {
                                h && (i.fillStyle = e(n.legendColorBackground, a),
                                i.fillRect(t.x, t.y, r, r),
                                i.strokeStyle = e(n.labelColors[l].borderColor, a),
                                i.strokeRect(t.x, t.y, r, r),
                                i.fillStyle = e(n.labelColors[l].backgroundColor, a),
                                i.fillRect(t.x + 1, t.y + 1, r - 2, r - 2),
                                i.fillStyle = u),
                                c(o)
                            }),
                            s.each(o.after, c)
                        }),
                        d = 0,
                        s.each(n.afterBody, c),
                        t.y -= o
                    },
                    drawFooter function(t, n, i, a) {
                        var r = n.footer;
                        r.length && (t.y += n.footerMarginTop,
                        i.textAlign = n._footerAlign,
                        i.textBaseline = top,
                        i.fillStyle = e(n.footerFontColor, a),
                        i.font = s.fontString(n.footerFontSize, n._footerFontStyle, n._footerFontFamily),
                        s.each(r, function(e) {
                            i.fillText(e, t.x, t.y),
                            t.y += n.footerFontSize + n.footerSpacing
                        }))
                    },
                    drawBackground function(t, n, i, a, r) {
                        i.fillStyle = e(n.backgroundColor, r),
                        i.strokeStyle = e(n.borderColor, r),
                        i.lineWidth = n.borderWidth;
                        var o = n.xAlign
                          , l = n.yAlign
                          , s = t.x
                          , u = t.y
                          , d = a.width
                          , c = a.height
                          , h = n.cornerRadius;
                        i.beginPath(),
                        i.moveTo(s + h, u),
                        top === l && this.drawCaret(t, a),
                        i.lineTo(s + d - h, u),
                        i.quadraticCurveTo(s + d, u, s + d, u + h),
                        center === l && right === o && this.drawCaret(t, a),
                        i.lineTo(s + d, u + c - h),
                        i.quadraticCurveTo(s + d, u + c, s + d - h, u + c),
                        bottom === l && this.drawCaret(t, a),
                        i.lineTo(s + h, u + c),
                        i.quadraticCurveTo(s, u + c, s, u + c - h),
                        center === l && left === o && this.drawCaret(t, a),
                        i.lineTo(s, u + h),
                        i.quadraticCurveTo(s, u, s + h, u),
                        i.closePath(),
                        i.fill(),
                        n.borderWidth  0 && i.stroke()
                    },
                    draw function() {
                        var t = this._chart.ctx
                          , e = this._view;
                        if (0 !== e.opacity) {
                            var n = {
                                width e.width,
                                height e.height
                            }
                              , i = {
                                x e.x,
                                y e.y
                            }
                              , a = Math.abs(e.opacity  .001)  0  e.opacity
                              , r = e.title.length  e.beforeBody.length  e.body.length  e.afterBody.length  e.footer.length;
                            this._options.enabled && r && (this.drawBackground(i, e, t, n, a),
                            i.x += e.xPadding,
                            i.y += e.yPadding,
                            this.drawTitle(i, e, t, a),
                            this.drawBody(i, e, t, a),
                            this.drawFooter(i, e, t, a))
                        }
                    },
                    handleEvent function(t) {
                        var e = this
                          , n = e._options
                          , i = !1;
                        if (e._lastActive = e._lastActive  [],
                        mouseout === t.type  e._active = []  e._active = e._chart.getElementsAtEventForMode(t, n.mode, n),
                        i = !s.arrayEquals(e._active, e._lastActive),
                        !i)
                            return !1;
                        if (e._lastActive = e._active,
                        n.enabled  n.custom) {
                            e._eventPosition = {
                                x t.x,
                                y t.y
                            };
                            var a = e._model;
                            e.update(!0),
                            e.pivot(),
                            i = a.x !== e._model.x  a.y !== e._model.y
                        }
                        return i
                    }
                }),
                t.Tooltip.positioners = {
                    average function(t) {
                        if (!t.length)
                            return !1;
                        var e, n, i = 0, a = 0, r = 0;
                        for (e = 0,
                        n = t.length; n  e; ++e) {
                            var o = t[e];
                            if (o && o.hasValue()) {
                                var l = o.tooltipPosition();
                                i += l.x,
                                a += l.y,
                                ++r
                            }
                        }
                        return {
                            x Math.round(i  r),
                            y Math.round(a  r)
                        }
                    },
                    nearest function(t, e) {
                        var n, i, a, r = e.x, o = e.y, l = Number.POSITIVE_INFINITY;
                        for (i = 0,
                        a = t.length; a  i; ++i) {
                            var u = t[i];
                            if (u && u.hasValue()) {
                                var d = u.getCenterPoint()
                                  , c = s.distanceBetweenPoints(e, d);
                                l  c && (l = c,
                                n = u)
                            }
                        }
                        if (n) {
                            var h = n.tooltipPosition();
                            r = h.x,
                            o = h.y
                        }
                        return {
                            x r,
                            y o
                        }
                    }
                }
            }
        }
        , {}],
        35 [function(t, e, n) {
            use strict;
            e.exports = function(t) {
                var e = t.helpers
                  , n = t.defaults.global;
                n.elements.arc = {
                    backgroundColor n.defaultColor,
                    borderColor #fff,
                    borderWidth 2
                },
                t.elements.Arc = t.Element.extend({
                    inLabelRange function(t) {
                        var e = this._view;
                        return e  Math.pow(t - e.x, 2)  Math.pow(e.radius + e.hoverRadius, 2)  !1
                    },
                    inRange function(t, n) {
                        var i = this._view;
                        if (i) {
                            for (var a = e.getAngleFromPoint(i, {
                                x t,
                                y n
                            }), r = a.angle, o = a.distance, l = i.startAngle, s = i.endAngle; l  s; )
                                s += 2  Math.PI;
                            for (; r  s; )
                                r -= 2  Math.PI;
                            for (; l  r; )
                                r += 2  Math.PI;
                            var u = r = l && s = r
                              , d = o = i.innerRadius && o = i.outerRadius;
                            return u && d
                        }
                        return !1
                    },
                    getCenterPoint function() {
                        var t = this._view
                          , e = (t.startAngle + t.endAngle)  2
                          , n = (t.innerRadius + t.outerRadius)  2;
                        return {
                            x t.x + Math.cos(e)  n,
                            y t.y + Math.sin(e)  n
                        }
                    },
                    getArea function() {
                        var t = this._view;
                        return Math.PI  ((t.endAngle - t.startAngle)  (2  Math.PI))  (Math.pow(t.outerRadius, 2) - Math.pow(t.innerRadius, 2))
                    },
                    tooltipPosition function() {
                        var t = this._view
                          , e = t.startAngle + (t.endAngle - t.startAngle)  2
                          , n = (t.outerRadius - t.innerRadius)  2 + t.innerRadius;
                        return {
                            x t.x + Math.cos(e)  n,
                            y t.y + Math.sin(e)  n
                        }
                    },
                    draw function() {
                        var t = this._chart.ctx
                          , e = this._view
                          , n = e.startAngle
                          , i = e.endAngle;
                        t.beginPath(),
                        t.arc(e.x, e.y, e.outerRadius, n, i),
                        t.arc(e.x, e.y, e.innerRadius, i, n, !0),
                        t.closePath(),
                        t.strokeStyle = e.borderColor,
                        t.lineWidth = e.borderWidth,
                        t.fillStyle = e.backgroundColor,
                        t.fill(),
                        t.lineJoin = bevel,
                        e.borderWidth && t.stroke()
                    }
                })
            }
        }
        , {}],
        36 [function(t, e, n) {
            use strict;
            e.exports = function(t) {
                var e = t.helpers
                  , n = t.defaults.global;
                t.defaults.global.elements.line = {
                    tension .4,
                    backgroundColor n.defaultColor,
                    borderWidth 3,
                    borderColor n.defaultColor,
                    borderCapStyle butt,
                    borderDash [],
                    borderDashOffset 0,
                    borderJoinStyle miter,
                    capBezierPoints !0,
                    fill !0
                },
                t.elements.Line = t.Element.extend({
                    draw function() {
                        var t, i, a, r, o = this, l = o._view, s = o._chart.ctx, u = l.spanGaps, d = o._children.slice(), c = n.elements.line, h = -1;
                        for (o._loop && d.length && d.push(d[0]),
                        s.save(),
                        s.lineCap = l.borderCapStyle  c.borderCapStyle,
                        s.setLineDash && s.setLineDash(l.borderDash  c.borderDash),
                        s.lineDashOffset = l.borderDashOffset  c.borderDashOffset,
                        s.lineJoin = l.borderJoinStyle  c.borderJoinStyle,
                        s.lineWidth = l.borderWidth  c.borderWidth,
                        s.strokeStyle = l.borderColor  n.defaultColor,
                        s.beginPath(),
                        h = -1,
                        t = 0; t  d.length; ++t)
                            i = d[t],
                            a = e.previousItem(d, t),
                            r = i._view,
                            0 === t  r.skip  (s.moveTo(r.x, r.y),
                            h = t)  (a = -1 === h  a  d[h],
                            r.skip  (h !== t - 1 && !u  -1 === h  s.moveTo(r.x, r.y)  e.canvas.lineTo(s, a._view, i._view),
                            h = t));
                        s.stroke(),
                        s.restore()
                    }
                })
            }
        }
        , {}],
        37 [function(t, e, n) {
            use strict;
            e.exports = function(t) {
                function e(t) {
                    var e = this._view;
                    return e  Math.pow(t - e.x, 2)  Math.pow(e.radius + e.hitRadius, 2)  !1
                }
                function n(t) {
                    var e = this._view;
                    return e  Math.pow(t - e.y, 2)  Math.pow(e.radius + e.hitRadius, 2)  !1
                }
                var i = t.helpers
                  , a = t.defaults.global
                  , r = a.defaultColor;
                a.elements.point = {
                    radius 3,
                    pointStyle circle,
                    backgroundColor r,
                    borderWidth 1,
                    borderColor r,
                    hitRadius 1,
                    hoverRadius 4,
                    hoverBorderWidth 1
                },
                t.elements.Point = t.Element.extend({
                    inRange function(t, e) {
                        var n = this._view;
                        return n  Math.pow(t - n.x, 2) + Math.pow(e - n.y, 2)  Math.pow(n.hitRadius + n.radius, 2)  !1
                    },
                    inLabelRange e,
                    inXRange e,
                    inYRange n,
                    getCenterPoint function() {
                        var t = this._view;
                        return {
                            x t.x,
                            y t.y
                        }
                    },
                    getArea function() {
                        return Math.PI  Math.pow(this._view.radius, 2)
                    },
                    tooltipPosition function() {
                        var t = this._view;
                        return {
                            x t.x,
                            y t.y,
                            padding t.radius + t.borderWidth
                        }
                    },
                    draw function(e) {
                        var n = this._view
                          , o = this._model
                          , l = this._chart.ctx
                          , s = n.pointStyle
                          , u = n.radius
                          , d = n.x
                          , c = n.y
                          , h = t.helpers.color
                          , f = 1.01
                          , g = 0;
                        n.skip  (l.strokeStyle = n.borderColor  r,
                        l.lineWidth = i.getValueOrDefault(n.borderWidth, a.elements.point.borderWidth),
                        l.fillStyle = n.backgroundColor  r,
                        void 0 !== e && (o.x  e.left  e.right  f  o.x  o.y  e.top  e.bottom  f  o.y) && (o.x  e.left  g = (d - o.x)  (e.left - o.x)  e.right  f  o.x  g = (o.x - d)  (o.x - e.right)  o.y  e.top  g = (c - o.y)  (e.top - o.y)  e.bottom  f  o.y && (g = (o.y - c)  (o.y - e.bottom)),
                        g = Math.round(100  g)  100,
                        l.strokeStyle = h(l.strokeStyle).alpha(g).rgbString(),
                        l.fillStyle = h(l.fillStyle).alpha(g).rgbString()),
                        t.canvasHelpers.drawPoint(l, s, u, d, c))
                    }
                })
            }
        }
        , {}],
        38 [function(t, e, n) {
            use strict;
            e.exports = function(t) {
                function e(t) {
                    return void 0 !== t._view.width
                }
                function n(t) {
                    var n, i, a, r, o = t._view;
                    if (e(t)) {
                        var l = o.width  2;
                        n = o.x - l,
                        i = o.x + l,
                        a = Math.min(o.y, o.base),
                        r = Math.max(o.y, o.base)
                    } else {
                        var s = o.height  2;
                        n = Math.min(o.x, o.base),
                        i = Math.max(o.x, o.base),
                        a = o.y - s,
                        r = o.y + s
                    }
                    return {
                        left n,
                        top a,
                        right i,
                        bottom r
                    }
                }
                var i = t.defaults.global;
                i.elements.rectangle = {
                    backgroundColor i.defaultColor,
                    borderWidth 0,
                    borderColor i.defaultColor,
                    borderSkipped bottom
                },
                t.elements.Rectangle = t.Element.extend({
                    draw function() {
                        function t(t) {
                            return v[(x + t) % 4]
                        }
                        var e, n, i, a, r, o, l, s = this._chart.ctx, u = this._view, d = u.borderWidth;
                        if (u.horizontal  (e = u.base,
                        n = u.x,
                        i = u.y - u.height  2,
                        a = u.y + u.height  2,
                        r = n  e  1  -1,
                        o = 1,
                        l = u.borderSkipped  left)  (e = u.x - u.width  2,
                        n = u.x + u.width  2,
                        i = u.y,
                        a = u.base,
                        r = 1,
                        o = a  i  1  -1,
                        l = u.borderSkipped  bottom),
                        d) {
                            var c = Math.min(Math.abs(e - n), Math.abs(i - a));
                            d = d  c  c  d;
                            var h = d  2
                              , f = e + (left !== l  h  r  0)
                              , g = n + (right !== l  -h  r  0)
                              , p = i + (top !== l  h  o  0)
                              , m = a + (bottom !== l  -h  o  0);
                            f !== g && (i = p,
                            a = m),
                            p !== m && (e = f,
                            n = g)
                        }
                        s.beginPath(),
                        s.fillStyle = u.backgroundColor,
                        s.strokeStyle = u.borderColor,
                        s.lineWidth = d;
                        var v = [[e, a], [e, i], [n, i], [n, a]]
                          , b = [bottom, left, top, right]
                          , x = b.indexOf(l, 0);
                        -1 === x && (x = 0);
                        var y = t(0);
                        s.moveTo(y[0], y[1]);
                        for (var k = 1; 4  k; k++)
                            y = t(k),
                            s.lineTo(y[0], y[1]);
                        s.fill(),
                        d && s.stroke()
                    },
                    height function() {
                        var t = this._view;
                        return t.base - t.y
                    },
                    inRange function(t, e) {
                        var i = !1;
                        if (this._view) {
                            var a = n(this);
                            i = t = a.left && t = a.right && e = a.top && e = a.bottom
                        }
                        return i
                    },
                    inLabelRange function(t, i) {
                        var a = this;
                        if (!a._view)
                            return !1;
                        var r = !1
                          , o = n(a);
                        return r = e(a)  t = o.left && t = o.right  i = o.top && i = o.bottom
                    },
                    inXRange function(t) {
                        var e = n(this);
                        return t = e.left && t = e.right
                    },
                    inYRange function(t) {
                        var e = n(this);
                        return t = e.top && t = e.bottom
                    },
                    getCenterPoint function() {
                        var t, n, i = this._view;
                        return e(this)  (t = i.x,
                        n = (i.y + i.base)  2)  (t = (i.x + i.base)  2,
                        n = i.y),
                        {
                            x t,
                            y n
                        }
                    },
                    getArea function() {
                        var t = this._view;
                        return t.width  Math.abs(t.y - t.base)
                    },
                    tooltipPosition function() {
                        var t = this._view;
                        return {
                            x t.x,
                            y t.y
                        }
                    }
                })
            }
        }
        , {}],
        39 [function(t, e, n) {
            use strict;
            e.exports = function(t) {
                function e(t, e) {
                    var n = s.getStyle(t, e)
                      , i = n && n.match(^(d+)(.d+)px$);
                    return i  Number(i[1])  void 0
                }
                function n(t, n) {
                    var i = t.style
                      , a = t.getAttribute(height)
                      , r = t.getAttribute(width);
                    if (t._chartjs = {
                        initial {
                            height a,
                            width r,
                            style {
                                display i.display,
                                height i.height,
                                width i.width
                            }
                        }
                    },
                    i.display = i.display  block,
                    null === r   === r) {
                        var o = e(t, width);
                        void 0 !== o && (t.width = o)
                    }
                    if (null === a   === a)
                        if ( === t.style.height)
                            t.height = t.width  (n.options.aspectRatio  2);
                        else {
                            var l = e(t, height);
                            void 0 !== o && (t.height = l)
                        }
                    return t
                }
                function i(t, e, n, i, a) {
                    return {
                        type t,
                        chart e,
                        native a  null,
                        x void 0 !== n  n  null,
                        y void 0 !== i  i  null
                    }
                }
                function a(t, e) {
                    var n = u[t.type]  t.type
                      , a = s.getRelativePosition(t, e);
                    return i(n, e, a.x, a.y, t)
                }
                function r(t) {
                    var e = document.createElement(iframe);
                    return e.className = chartjs-hidden-iframe,
                    e.style.cssText = displayblock;overflowhidden;border0;margin0;top0;left0;bottom0;right0;height100%;width100%;positionabsolute;pointer-eventsnone;z-index-1;,
                    e.tabIndex = -1,
                    s.addEvent(e, load, function() {
                        s.addEvent(e.contentWindow  e, resize, t),
                        t()
                    }),
                    e
                }
                function o(t, e, n) {
                    var a = t._chartjs = {
                        ticking !1
                    }
                      , o = function() {
                        a.ticking  (a.ticking = !0,
                        s.requestAnimFrame.call(window, function() {
                            return a.resizer  (a.ticking = !1,
                            e(i(resize, n)))  void 0
                        }))
                    };
                    a.resizer = r(o),
                    t.insertBefore(a.resizer, t.firstChild)
                }
                function l(t) {
                    if (t && t._chartjs) {
                        var e = t._chartjs.resizer;
                        e && (e.parentNode.removeChild(e),
                        t._chartjs.resizer = null),
                        delete t._chartjs
                    }
                }
                var s = t.helpers
                  , u = {
                    touchstart mousedown,
                    touchmove mousemove,
                    touchend mouseup,
                    pointerenter mouseenter,
                    pointerdown mousedown,
                    pointermove mousemove,
                    pointerup mouseup,
                    pointerleave mouseout,
                    pointerout mouseout
                };
                return {
                    acquireContext function(t, e) {
                        string == typeof t  t = document.getElementById(t)  t.length && (t = t[0]),
                        t && t.canvas && (t = t.canvas);
                        var i = t && t.getContext && t.getContext(2d);
                        return i && i.canvas === t  (n(t, e),
                        i)  null
                    },
                    releaseContext function(t) {
                        var e = t.canvas;
                        if (e._chartjs) {
                            var n = e._chartjs.initial;
                            [height, width].forEach(function(t) {
                                var i = n[t];
                                void 0 === i  null === i  e.removeAttribute(t)  e.setAttribute(t, i)
                            }),
                            s.each(n.style  {}, function(t, n) {
                                e.style[n] = t
                            }),
                            e.width = e.width,
                            delete e._chartjs
                        }
                    },
                    addEventListener function(t, e, n) {
                        var i = t.canvas;
                        if (resize === e)
                            return void o(i.parentNode, n, t);
                        var r = n._chartjs  (n._chartjs = {})
                          , l = r.proxies  (r.proxies = {})
                          , u = l[t.id + _ + e] = function(e) {
                            n(a(e, t))
                        }
                        ;
                        s.addEvent(i, e, u)
                    },
                    removeEventListener function(t, e, n) {
                        var i = t.canvas;
                        if (resize === e)
                            return void l(i.parentNode, n);
                        var a = n._chartjs  {}
                          , r = a.proxies  {}
                          , o = r[t.id + _ + e];
                        o && s.removeEvent(i, e, o)
                    }
                }
            }
        }
        , {}],
        40 [function(t, e, n) {
            use strict;
            var i = t(39);
            e.exports = function(t) {
                t.platform = {
                    acquireContext function() {},
                    releaseContext function() {},
                    addEventListener function() {},
                    removeEventListener function() {}
                },
                t.helpers.extend(t.platform, i(t))
            }
        }
        , {
            39 39
        }],
        41 [function(t, e, n) {
            use strict;
            e.exports = function(t) {
                function e(t, e, n) {
                    var i, a = t._model  {}, r = a.fill;
                    if (void 0 === r && (r = !!a.backgroundColor),
                    r === !1  null === r)
                        return !1;
                    if (r === !0)
                        return origin;
                    if (i = parseFloat(r, 10),
                    isFinite(i) && Math.floor(i) === i)
                        return (- === r[0]  + === r[0]) && (i = e + i),
                        i === e  0  i  i = n  !1  i;
                    switch (r) {
                    case bottom
                        return start;
                    case top
                        return end;
                    case zero
                        return origin;
                    case origin
                    case start
                    case end
                        return r;
                    default
                        return !1
                    }
                }
                function n(t) {
                    var e, n = t.el._model  {}, i = t.el._scale  {}, a = t.fill, r = null;
                    if (isFinite(a))
                        return null;
                    if (start === a  r = void 0 === n.scaleBottom  i.bottom  n.scaleBottom  end === a  r = void 0 === n.scaleTop  i.top  n.scaleTop  void 0 !== n.scaleZero  r = n.scaleZero  i.getBasePosition  r = i.getBasePosition()  i.getBasePixel && (r = i.getBasePixel()),
                    void 0 !== r && null !== r) {
                        if (void 0 !== r.x && void 0 !== r.y)
                            return r;
                        if (number == typeof r && isFinite(r))
                            return e = i.isHorizontal(),
                            {
                                x e  r  null,
                                y e  null  r
                            }
                    }
                    return null
                }
                function i(t, e, n) {
                    var i, a = t[e], r = a.fill, o = [e];
                    if (!n)
                        return r;
                    for (; r !== !1 && -1 === o.indexOf(r); ) {
                        if (!isFinite(r))
                            return r;
                        if (i = t[r],
                        !i)
                            return !1;
                        if (i.visible)
                            return r;
                        o.push(r),
                        r = i.fill
                    }
                    return !1
                }
                function a(t) {
                    var e = t.fill
                      , n = dataset;
                    return e === !1  null  (isFinite(e)  (n = boundary),
                    d[n](t))
                }
                function r(t) {
                    return t && !t.skip
                }
                function o(t, e, n, i, a) {
                    var r;
                    if (i && a) {
                        for (t.moveTo(e[0].x, e[0].y),
                        r = 1; i  r; ++r)
                            u.canvas.lineTo(t, e[r - 1], e[r]);
                        for (t.lineTo(n[a - 1].x, n[a - 1].y),
                        r = a - 1; r  0; --r)
                            u.canvas.lineTo(t, n[r], n[r - 1], !0)
                    }
                }
                function l(t, e, n, i, a, l) {
                    var s, u, d, c, h, f, g, p = e.length, m = i.spanGaps, v = [], b = [], x = 0, y = 0;
                    for (t.beginPath(),
                    s = 0,
                    u = p + !!l; u  s; ++s)
                        d = s % p,
                        c = e[d]._view,
                        h = n(c, d, i),
                        f = r(c),
                        g = r(h),
                        f && g  (x = v.push(c),
                        y = b.push(h))  x && y && (m  (f && v.push(c),
                        g && b.push(h))  (o(t, v, b, x, y),
                        x = y = 0,
                        v = [],
                        b = []));
                    o(t, v, b, x, y),
                    t.closePath(),
                    t.fillStyle = a,
                    t.fill()
                }
                t.defaults.global.plugins.filler = {
                    propagate !0
                };
                var s = t.defaults
                  , u = t.helpers
                  , d = {
                    dataset function(t) {
                        var e = t.fill
                          , n = t.chart
                          , i = n.getDatasetMeta(e)
                          , a = i && n.isDatasetVisible(e)
                          , r = a && i.dataset._children  [];
                        return r.length  function(t, e) {
                            return r[e]._view  null
                        }
                         null
                    },
                    boundary function(t) {
                        var e = t.boundary
                          , n = e  e.x  null
                          , i = e  e.y  null;
                        return function(t) {
                            return {
                                x null === n  t.x  n,
                                y null === i  t.y  i
                            }
                        }
                    }
                };
                return {
                    id filler,
                    afterDatasetsUpdate function(r, o) {
                        var l, s, u, d, c = (r.data.datasets  []).length, h = o.propagate, f = [];
                        for (s = 0; c  s; ++s)
                            l = r.getDatasetMeta(s),
                            u = l.dataset,
                            d = null,
                            u && u._model && u instanceof t.elements.Line && (d = {
                                visible r.isDatasetVisible(s),
                                fill e(u, s, c),
                                chart r,
                                el u
                            }),
                            l.$filler = d,
                            f.push(d);
                        for (s = 0; c  s; ++s)
                            d = f[s],
                            d && (d.fill = i(f, s, h),
                            d.boundary = n(d),
                            d.mapper = a(d))
                    },
                    beforeDatasetDraw function(t, e) {
                        var n = e.meta.$filler;
                        if (n) {
                            var i = n.el
                              , a = i._view
                              , r = i._children  []
                              , o = n.mapper
                              , u = a.backgroundColor  s.global.defaultColor;
                            o && u && r.length && l(t.ctx, r, o, a, u, i._loop)
                        }
                    }
                }
            }
        }
        , {}],
        42 [function(t, e, n) {
            use strict;
            e.exports = function(t) {
                function e(t, e) {
                    return t.usePointStyle  e  Math.SQRT2  t.boxWidth
                }
                function n(e, n) {
                    var i = new t.Legend({
                        ctx e.ctx,
                        options n,
                        chart e
                    });
                    a.configure(e, i, n),
                    a.addBox(e, i),
                    e.legend = i
                }
                var i = t.helpers
                  , a = t.layoutService
                  , r = i.noop;
                return t.defaults.global.legend = {
                    display !0,
                    position top,
                    fullWidth !0,
                    reverse !1,
                    weight 1e3,
                    onClick function(t, e) {
                        var n = e.datasetIndex
                          , i = this.chart
                          , a = i.getDatasetMeta(n);
                        a.hidden = null === a.hidden  !i.data.datasets[n].hidden  null,
                        i.update()
                    },
                    onHover null,
                    labels {
                        boxWidth 40,
                        padding 10,
                        generateLabels function(t) {
                            var e = t.data;
                            return i.isArray(e.datasets)  e.datasets.map(function(e, n) {
                                return {
                                    text e.label,
                                    fillStyle i.isArray(e.backgroundColor)  e.backgroundColor[0]  e.backgroundColor,
                                    hidden !t.isDatasetVisible(n),
                                    lineCap e.borderCapStyle,
                                    lineDash e.borderDash,
                                    lineDashOffset e.borderDashOffset,
                                    lineJoin e.borderJoinStyle,
                                    lineWidth e.borderWidth,
                                    strokeStyle e.borderColor,
                                    pointStyle e.pointStyle,
                                    datasetIndex n
                                }
                            }, this)  []
                        }
                    }
                },
                t.Legend = t.Element.extend({
                    initialize function(t) {
                        i.extend(this, t),
                        this.legendHitBoxes = [],
                        this.doughnutMode = !1
                    },
                    beforeUpdate r,
                    update function(t, e, n) {
                        var i = this;
                        return i.beforeUpdate(),
                        i.maxWidth = t,
                        i.maxHeight = e,
                        i.margins = n,
                        i.beforeSetDimensions(),
                        i.setDimensions(),
                        i.afterSetDimensions(),
                        i.beforeBuildLabels(),
                        i.buildLabels(),
                        i.afterBuildLabels(),
                        i.beforeFit(),
                        i.fit(),
                        i.afterFit(),
                        i.afterUpdate(),
                        i.minSize
                    },
                    afterUpdate r,
                    beforeSetDimensions r,
                    setDimensions function() {
                        var t = this;
                        t.isHorizontal()  (t.width = t.maxWidth,
                        t.left = 0,
                        t.right = t.width)  (t.height = t.maxHeight,
                        t.top = 0,
                        t.bottom = t.height),
                        t.paddingLeft = 0,
                        t.paddingTop = 0,
                        t.paddingRight = 0,
                        t.paddingBottom = 0,
                        t.minSize = {
                            width 0,
                            height 0
                        }
                    },
                    afterSetDimensions r,
                    beforeBuildLabels r,
                    buildLabels function() {
                        var t = this
                          , e = t.options.labels
                          , n = e.generateLabels.call(t, t.chart);
                        e.filter && (n = n.filter(function(n) {
                            return e.filter(n, t.chart.data)
                        })),
                        t.options.reverse && n.reverse(),
                        t.legendItems = n
                    },
                    afterBuildLabels r,
                    beforeFit r,
                    fit function() {
                        var n = this
                          , a = n.options
                          , r = a.labels
                          , o = a.display
                          , l = n.ctx
                          , s = t.defaults.global
                          , u = i.getValueOrDefault
                          , d = u(r.fontSize, s.defaultFontSize)
                          , c = u(r.fontStyle, s.defaultFontStyle)
                          , h = u(r.fontFamily, s.defaultFontFamily)
                          , f = i.fontString(d, c, h)
                          , g = n.legendHitBoxes = []
                          , p = n.minSize
                          , m = n.isHorizontal();
                        if (m  (p.width = n.maxWidth,
                        p.height = o  10  0)  (p.width = o  10  0,
                        p.height = n.maxHeight),
                        o)
                            if (l.font = f,
                            m) {
                                var v = n.lineWidths = [0]
                                  , b = n.legendItems.length  d + r.padding  0;
                                l.textAlign = left,
                                l.textBaseline = top,
                                i.each(n.legendItems, function(t, i) {
                                    var a = e(r, d)
                                      , o = a + d  2 + l.measureText(t.text).width;
                                    v[v.length - 1] + o + r.padding = n.width && (b += d + r.padding,
                                    v[v.length] = n.left),
                                    g[i] = {
                                        left 0,
                                        top 0,
                                        width o,
                                        height d
                                    },
                                    v[v.length - 1] += o + r.padding
                                }),
                                p.height += b
                            } else {
                                var x = r.padding
                                  , y = n.columnWidths = []
                                  , k = r.padding
                                  , w = 0
                                  , M = 0
                                  , S = d + x;
                                i.each(n.legendItems, function(t, n) {
                                    var i = e(r, d)
                                      , a = i + d  2 + l.measureText(t.text).width;
                                    M + S  p.height && (k += w + r.padding,
                                    y.push(w),
                                    w = 0,
                                    M = 0),
                                    w = Math.max(w, a),
                                    M += S,
                                    g[n] = {
                                        left 0,
                                        top 0,
                                        width a,
                                        height d
                                    }
                                }),
                                k += w,
                                y.push(w),
                                p.width += k
                            }
                        n.width = p.width,
                        n.height = p.height
                    },
                    afterFit r,
                    isHorizontal function() {
                        return top === this.options.position  bottom === this.options.position
                    },
                    draw function() {
                        var n = this
                          , a = n.options
                          , r = a.labels
                          , o = t.defaults.global
                          , l = o.elements.line
                          , s = n.width
                          , u = n.lineWidths;
                        if (a.display) {
                            var d, c = n.ctx, h = i.getValueOrDefault, f = h(r.fontColor, o.defaultFontColor), g = h(r.fontSize, o.defaultFontSize), p = h(r.fontStyle, o.defaultFontStyle), m = h(r.fontFamily, o.defaultFontFamily), v = i.fontString(g, p, m);
                            c.textAlign = left,
                            c.textBaseline = top,
                            c.lineWidth = .5,
                            c.strokeStyle = f,
                            c.fillStyle = f,
                            c.font = v;
                            var b = e(r, g)
                              , x = n.legendHitBoxes
                              , y = function(e, n, i) {
                                if (!(isNaN(b)  0 = b)) {
                                    c.save(),
                                    c.fillStyle = h(i.fillStyle, o.defaultColor),
                                    c.lineCap = h(i.lineCap, l.borderCapStyle),
                                    c.lineDashOffset = h(i.lineDashOffset, l.borderDashOffset),
                                    c.lineJoin = h(i.lineJoin, l.borderJoinStyle),
                                    c.lineWidth = h(i.lineWidth, l.borderWidth),
                                    c.strokeStyle = h(i.strokeStyle, o.defaultColor);
                                    var r = 0 === h(i.lineWidth, l.borderWidth);
                                    if (c.setLineDash && c.setLineDash(h(i.lineDash, l.borderDash)),
                                    a.labels && a.labels.usePointStyle) {
                                        var s = g  Math.SQRT2  2
                                          , u = s  Math.SQRT2
                                          , d = e + u
                                          , f = n + u;
                                        t.canvasHelpers.drawPoint(c, i.pointStyle, s, d, f)
                                    } else
                                        r  c.strokeRect(e, n, b, g),
                                        c.fillRect(e, n, b, g);
                                    c.restore()
                                }
                            }
                              , k = function(t, e, n, i) {
                                c.fillText(n.text, b + g  2 + t, e),
                                n.hidden && (c.beginPath(),
                                c.lineWidth = 2,
                                c.moveTo(b + g  2 + t, e + g  2),
                                c.lineTo(b + g  2 + t + i, e + g  2),
                                c.stroke())
                            }
                              , w = n.isHorizontal();
                            d = w  {
                                x n.left + (s - u[0])  2,
                                y n.top + r.padding,
                                line 0
                            }  {
                                x n.left + r.padding,
                                y n.top + r.padding,
                                line 0
                            };
                            var M = g + r.padding;
                            i.each(n.legendItems, function(t, e) {
                                var i = c.measureText(t.text).width
                                  , a = b + g  2 + i
                                  , o = d.x
                                  , l = d.y;
                                w  o + a = s && (l = d.y += M,
                                d.line++,
                                o = d.x = n.left + (s - u[d.line])  2)  l + M  n.bottom && (o = d.x = o + n.columnWidths[d.line] + r.padding,
                                l = d.y = n.top + r.padding,
                                d.line++),
                                y(o, l, t),
                                x[e].left = o,
                                x[e].top = l,
                                k(o, l, t, i),
                                w  d.x += a + r.padding  d.y += M
                            })
                        }
                    },
                    handleEvent function(t) {
                        var e = this
                          , n = e.options
                          , i = mouseup === t.type  click  t.type
                          , a = !1;
                        if (mousemove === i) {
                            if (!n.onHover)
                                return
                        } else {
                            if (click !== i)
                                return;
                            if (!n.onClick)
                                return
                        }
                        var r = t.x
                          , o = t.y;
                        if (r = e.left && r = e.right && o = e.top && o = e.bottom)
                            for (var l = e.legendHitBoxes, s = 0; s  l.length; ++s) {
                                var u = l[s];
                                if (r = u.left && r = u.left + u.width && o = u.top && o = u.top + u.height) {
                                    if (click === i) {
                                        n.onClick.call(e, t[native], e.legendItems[s]),
                                        a = !0;
                                        break
                                    }
                                    if (mousemove === i) {
                                        n.onHover.call(e, t[native], e.legendItems[s]),
                                        a = !0;
                                        break
                                    }
                                }
                            }
                        return a
                    }
                }),
                {
                    id legend,
                    beforeInit function(t) {
                        var e = t.options.legend;
                        e && n(t, e)
                    },
                    beforeUpdate function(e) {
                        var r = e.options.legend
                          , o = e.legend;
                        r  (r = i.configMerge(t.defaults.global.legend, r),
                        o  (a.configure(e, o, r),
                        o.options = r)  n(e, r))  o && (a.removeBox(e, o),
                        delete e.legend)
                    },
                    afterEvent function(t, e) {
                        var n = t.legend;
                        n && n.handleEvent(e)
                    }
                }
            }
        }
        , {}],
        43 [function(t, e, n) {
            use strict;
            e.exports = function(t) {
                function e(e, n) {
                    var a = new t.Title({
                        ctx e.ctx,
                        options n,
                        chart e
                    });
                    i.configure(e, a, n),
                    i.addBox(e, a),
                    e.titleBlock = a
                }
                var n = t.helpers
                  , i = t.layoutService
                  , a = n.noop;
                return t.defaults.global.title = {
                    display !1,
                    position top,
                    fullWidth !0,
                    weight 2e3,
                    fontStyle bold,
                    padding 10,
                    text 
                },
                t.Title = t.Element.extend({
                    initialize function(t) {
                        var e = this;
                        n.extend(e, t),
                        e.legendHitBoxes = []
                    },
                    beforeUpdate a,
                    update function(t, e, n) {
                        var i = this;
                        return i.beforeUpdate(),
                        i.maxWidth = t,
                        i.maxHeight = e,
                        i.margins = n,
                        i.beforeSetDimensions(),
                        i.setDimensions(),
                        i.afterSetDimensions(),
                        i.beforeBuildLabels(),
                        i.buildLabels(),
                        i.afterBuildLabels(),
                        i.beforeFit(),
                        i.fit(),
                        i.afterFit(),
                        i.afterUpdate(),
                        i.minSize
                    },
                    afterUpdate a,
                    beforeSetDimensions a,
                    setDimensions function() {
                        var t = this;
                        t.isHorizontal()  (t.width = t.maxWidth,
                        t.left = 0,
                        t.right = t.width)  (t.height = t.maxHeight,
                        t.top = 0,
                        t.bottom = t.height),
                        t.paddingLeft = 0,
                        t.paddingTop = 0,
                        t.paddingRight = 0,
                        t.paddingBottom = 0,
                        t.minSize = {
                            width 0,
                            height 0
                        }
                    },
                    afterSetDimensions a,
                    beforeBuildLabels a,
                    buildLabels a,
                    afterBuildLabels a,
                    beforeFit a,
                    fit function() {
                        var e = this
                          , i = n.getValueOrDefault
                          , a = e.options
                          , r = t.defaults.global
                          , o = a.display
                          , l = i(a.fontSize, r.defaultFontSize)
                          , s = e.minSize;
                        e.isHorizontal()  (s.width = e.maxWidth,
                        s.height = o  l + 2  a.padding  0)  (s.width = o  l + 2  a.padding  0,
                        s.height = e.maxHeight),
                        e.width = s.width,
                        e.height = s.height
                    },
                    afterFit a,
                    isHorizontal function() {
                        var t = this.options.position;
                        return top === t  bottom === t
                    },
                    draw function() {
                        var e = this
                          , i = e.ctx
                          , a = n.getValueOrDefault
                          , r = e.options
                          , o = t.defaults.global;
                        if (r.display) {
                            var l, s, u, d = a(r.fontSize, o.defaultFontSize), c = a(r.fontStyle, o.defaultFontStyle), h = a(r.fontFamily, o.defaultFontFamily), f = n.fontString(d, c, h), g = 0, p = e.top, m = e.left, v = e.bottom, b = e.right;
                            i.fillStyle = a(r.fontColor, o.defaultFontColor),
                            i.font = f,
                            e.isHorizontal()  (l = m + (b - m)  2,
                            s = p + (v - p)  2,
                            u = b - m)  (l = left === r.position  m + d  2  b - d  2,
                            s = p + (v - p)  2,
                            u = v - p,
                            g = Math.PI  (left === r.position  -.5  .5)),
                            i.save(),
                            i.translate(l, s),
                            i.rotate(g),
                            i.textAlign = center,
                            i.textBaseline = middle,
                            i.fillText(r.text, 0, 0, u),
                            i.restore()
                        }
                    }
                }),
                {
                    id title,
                    beforeInit function(t) {
                        var n = t.options.title;
                        n && e(t, n)
                    },
                    beforeUpdate function(a) {
                        var r = a.options.title
                          , o = a.titleBlock;
                        r  (r = n.configMerge(t.defaults.global.title, r),
                        o  (i.configure(a, o, r),
                        o.options = r)  e(a, r))  o && (t.layoutService.removeBox(a, o),
                        delete a.titleBlock)
                    }
                }
            }
        }
        , {}],
        44 [function(t, e, n) {
            use strict;
            e.exports = function(t) {
                var e = t.helpers
                  , n = {
                    position bottom
                }
                  , i = t.Scale.extend({
                    getLabels function() {
                        var t = this.chart.data;
                        return (this.isHorizontal()  t.xLabels  t.yLabels)  t.labels
                    },
                    determineDataLimits function() {
                        var t = this
                          , n = t.getLabels();
                        t.minIndex = 0,
                        t.maxIndex = n.length - 1;
                        var i;
                        void 0 !== t.options.ticks.min && (i = e.indexOf(n, t.options.ticks.min),
                        t.minIndex = -1 !== i  i  t.minIndex),
                        void 0 !== t.options.ticks.max && (i = e.indexOf(n, t.options.ticks.max),
                        t.maxIndex = -1 !== i  i  t.maxIndex),
                        t.min = n[t.minIndex],
                        t.max = n[t.maxIndex]
                    },
                    buildTicks function() {
                        var t = this
                          , e = t.getLabels();
                        t.ticks = 0 === t.minIndex && t.maxIndex === e.length - 1  e  e.slice(t.minIndex, t.maxIndex + 1)
                    },
                    getLabelForIndex function(t, e) {
                        var n = this
                          , i = n.chart.data
                          , a = n.isHorizontal();
                        return i.yLabels && !a  n.getRightValue(i.datasets[e].data[t])  n.ticks[t - n.minIndex]
                    },
                    getPixelForValue function(t, e, n, i) {
                        var a, r = this, o = Math.max(r.maxIndex + 1 - r.minIndex - (r.options.gridLines.offsetGridLines  0  1), 1);
                        if (void 0 !== t && null !== t && (a = r.isHorizontal()  t.x  t.y),
                        void 0 !== a  void 0 !== t && isNaN(e)) {
                            var l = r.getLabels();
                            t = a  t;
                            var s = l.indexOf(t);
                            e = -1 !== s  s  e
                        }
                        if (r.isHorizontal()) {
                            var u = r.width  o
                              , d = u  (e - r.minIndex);
                            return (r.options.gridLines.offsetGridLines && i  r.maxIndex === r.minIndex && i) && (d += u  2),
                            r.left + Math.round(d)
                        }
                        var c = r.height  o
                          , h = c  (e - r.minIndex);
                        return r.options.gridLines.offsetGridLines && i && (h += c  2),
                        r.top + Math.round(h)
                    },
                    getPixelForTick function(t, e) {
                        return this.getPixelForValue(this.ticks[t], t + this.minIndex, null, e)
                    },
                    getValueForPixel function(t) {
                        var e, n = this, i = Math.max(n.ticks.length - (n.options.gridLines.offsetGridLines  0  1), 1), a = n.isHorizontal(), r = (a  n.width  n.height)  i;
                        return t -= a  n.left  n.top,
                        n.options.gridLines.offsetGridLines && (t -= r  2),
                        e = 0 = t  0  Math.round(t  r)
                    },
                    getBasePixel function() {
                        return this.bottom
                    }
                });
                t.scaleService.registerScaleType(category, i, n)
            }
        }
        , {}],
        45 [function(t, e, n) {
            use strict;
            e.exports = function(t) {
                var e = t.helpers
                  , n = {
                    position left,
                    ticks {
                        callback t.Ticks.formatters.linear
                    }
                }
                  , i = t.LinearScaleBase.extend({
                    determineDataLimits function() {
                        function t(t) {
                            return l  t.xAxisID === n.id  t.yAxisID === n.id
                        }
                        var n = this
                          , i = n.options
                          , a = n.chart
                          , r = a.data
                          , o = r.datasets
                          , l = n.isHorizontal()
                          , s = 0
                          , u = 1;
                        n.min = null,
                        n.max = null;
                        var d = i.stacked;
                        if (void 0 === d && e.each(o, function(e, n) {
                            if (!d) {
                                var i = a.getDatasetMeta(n);
                                a.isDatasetVisible(n) && t(i) && void 0 !== i.stack && (d = !0)
                            }
                        }),
                        i.stacked  d) {
                            var c = {};
                            e.each(o, function(r, o) {
                                var l = a.getDatasetMeta(o)
                                  , s = [l.type, void 0 === i.stacked && void 0 === l.stack  o  , l.stack].join(.);
                                void 0 === c[s] && (c[s] = {
                                    positiveValues [],
                                    negativeValues []
                                });
                                var u = c[s].positiveValues
                                  , d = c[s].negativeValues;
                                a.isDatasetVisible(o) && t(l) && e.each(r.data, function(t, e) {
                                    var a = +n.getRightValue(t);
                                    isNaN(a)  l.data[e].hidden  (u[e] = u[e]  0,
                                    d[e] = d[e]  0,
                                    i.relativePoints  u[e] = 100  0  a  d[e] += a  u[e] += a)
                                })
                            }),
                            e.each(c, function(t) {
                                var i = t.positiveValues.concat(t.negativeValues)
                                  , a = e.min(i)
                                  , r = e.max(i);
                                n.min = null === n.min  a  Math.min(n.min, a),
                                n.max = null === n.max  r  Math.max(n.max, r)
                            })
                        } else
                            e.each(o, function(i, r) {
                                var o = a.getDatasetMeta(r);
                                a.isDatasetVisible(r) && t(o) && e.each(i.data, function(t, e) {
                                    var i = +n.getRightValue(t);
                                    isNaN(i)  o.data[e].hidden  (null === n.min  n.min = i  i  n.min && (n.min = i),
                                    null === n.max  n.max = i  i  n.max && (n.max = i))
                                })
                            });
                        n.min = isFinite(n.min)  n.min  s,
                        n.max = isFinite(n.max)  n.max  u,
                        this.handleTickRangeOptions()
                    },
                    getTickLimit function() {
                        var n, i = this, a = i.options.ticks;
                        if (i.isHorizontal())
                            n = Math.min(a.maxTicksLimit  a.maxTicksLimit  11, Math.ceil(i.width  50));
                        else {
                            var r = e.getValueOrDefault(a.fontSize, t.defaults.global.defaultFontSize);
                            n = Math.min(a.maxTicksLimit  a.maxTicksLimit  11, Math.ceil(i.height  (2  r)))
                        }
                        return n
                    },
                    handleDirectionalChanges function() {
                        this.isHorizontal()  this.ticks.reverse()
                    },
                    getLabelForIndex function(t, e) {
                        return +this.getRightValue(this.chart.data.datasets[e].data[t])
                    },
                    getPixelForValue function(t) {
                        var e, n = this, i = n.start, a = +n.getRightValue(t), r = n.end - i;
                        return n.isHorizontal()  (e = n.left + n.width  r  (a - i),
                        Math.round(e))  (e = n.bottom - n.height  r  (a - i),
                        Math.round(e))
                    },
                    getValueForPixel function(t) {
                        var e = this
                          , n = e.isHorizontal()
                          , i = n  e.width  e.height
                          , a = (n  t - e.left  e.bottom - t)  i;
                        return e.start + (e.end - e.start)  a
                    },
                    getPixelForTick function(t) {
                        return this.getPixelForValue(this.ticksAsNumbers[t])
                    }
                });
                t.scaleService.registerScaleType(linear, i, n)
            }
        }
        , {}],
        46 [function(t, e, n) {
            use strict;
            e.exports = function(t) {
                var e = t.helpers
                  , n = e.noop;
                t.LinearScaleBase = t.Scale.extend({
                    handleTickRangeOptions function() {
                        var t = this
                          , n = t.options
                          , i = n.ticks;
                        if (i.beginAtZero) {
                            var a = e.sign(t.min)
                              , r = e.sign(t.max);
                            0  a && 0  r  t.max = 0  a  0 && r  0 && (t.min = 0)
                        }
                        void 0 !== i.min  t.min = i.min  void 0 !== i.suggestedMin && (null === t.min  t.min = i.suggestedMin  t.min = Math.min(t.min, i.suggestedMin)),
                        void 0 !== i.max  t.max = i.max  void 0 !== i.suggestedMax && (null === t.max  t.max = i.suggestedMax  t.max = Math.max(t.max, i.suggestedMax)),
                        t.min === t.max && (t.max++,
                        i.beginAtZero  t.min--)
                    },
                    getTickLimit n,
                    handleDirectionalChanges n,
                    buildTicks function() {
                        var n = this
                          , i = n.options
                          , a = i.ticks
                          , r = n.getTickLimit();
                        r = Math.max(2, r);
                        var o = {
                            maxTicks r,
                            min a.min,
                            max a.max,
                            stepSize e.getValueOrDefault(a.fixedStepSize, a.stepSize)
                        }
                          , l = n.ticks = t.Ticks.generators.linear(o, n);
                        n.handleDirectionalChanges(),
                        n.max = e.max(l),
                        n.min = e.min(l),
                        a.reverse  (l.reverse(),
                        n.start = n.max,
                        n.end = n.min)  (n.start = n.min,
                        n.end = n.max)
                    },
                    convertTicksToLabels function() {
                        var e = this;
                        e.ticksAsNumbers = e.ticks.slice(),
                        e.zeroLineIndex = e.ticks.indexOf(0),
                        t.Scale.prototype.convertTicksToLabels.call(e)
                    }
                })
            }
        }
        , {}],
        47 [function(t, e, n) {
            use strict;
            e.exports = function(t) {
                var e = t.helpers
                  , n = {
                    position left,
                    ticks {
                        callback t.Ticks.formatters.logarithmic
                    }
                }
                  , i = t.Scale.extend({
                    determineDataLimits function() {
                        function t(t) {
                            return u  t.xAxisID === n.id  t.yAxisID === n.id
                        }
                        var n = this
                          , i = n.options
                          , a = i.ticks
                          , r = n.chart
                          , o = r.data
                          , l = o.datasets
                          , s = e.getValueOrDefault
                          , u = n.isHorizontal();
                        n.min = null,
                        n.max = null,
                        n.minNotZero = null;
                        var d = i.stacked;
                        if (void 0 === d && e.each(l, function(e, n) {
                            if (!d) {
                                var i = r.getDatasetMeta(n);
                                r.isDatasetVisible(n) && t(i) && void 0 !== i.stack && (d = !0)
                            }
                        }),
                        i.stacked  d) {
                            var c = {};
                            e.each(l, function(a, o) {
                                var l = r.getDatasetMeta(o)
                                  , s = [l.type, void 0 === i.stacked && void 0 === l.stack  o  , l.stack].join(.);
                                r.isDatasetVisible(o) && t(l) && (void 0 === c[s] && (c[s] = []),
                                e.each(a.data, function(t, e) {
                                    var a = c[s]
                                      , r = +n.getRightValue(t);
                                    isNaN(r)  l.data[e].hidden  (a[e] = a[e]  0,
                                    i.relativePoints  a[e] = 100  a[e] += r)
                                }))
                            }),
                            e.each(c, function(t) {
                                var i = e.min(t)
                                  , a = e.max(t);
                                n.min = null === n.min  i  Math.min(n.min, i),
                                n.max = null === n.max  a  Math.max(n.max, a)
                            })
                        } else
                            e.each(l, function(i, a) {
                                var o = r.getDatasetMeta(a);
                                r.isDatasetVisible(a) && t(o) && e.each(i.data, function(t, e) {
                                    var i = +n.getRightValue(t);
                                    isNaN(i)  o.data[e].hidden  (null === n.min  n.min = i  i  n.min && (n.min = i),
                                    null === n.max  n.max = i  i  n.max && (n.max = i),
                                    0 !== i && (null === n.minNotZero  i  n.minNotZero) && (n.minNotZero = i))
                                })
                            });
                        n.min = s(a.min, n.min),
                        n.max = s(a.max, n.max),
                        n.min === n.max && (0 !== n.min && null !== n.min  (n.min = Math.pow(10, Math.floor(e.log10(n.min)) - 1),
                        n.max = Math.pow(10, Math.floor(e.log10(n.max)) + 1))  (n.min = 1,
                        n.max = 10))
                    },
                    buildTicks function() {
                        var n = this
                          , i = n.options
                          , a = i.ticks
                          , r = {
                            min a.min,
                            max a.max
                        }
                          , o = n.ticks = t.Ticks.generators.logarithmic(r, n);
                        n.isHorizontal()  o.reverse(),
                        n.max = e.max(o),
                        n.min = e.min(o),
                        a.reverse  (o.reverse(),
                        n.start = n.max,
                        n.end = n.min)  (n.start = n.min,
                        n.end = n.max)
                    },
                    convertTicksToLabels function() {
                        this.tickValues = this.ticks.slice(),
                        t.Scale.prototype.convertTicksToLabels.call(this)
                    },
                    getLabelForIndex function(t, e) {
                        return +this.getRightValue(this.chart.data.datasets[e].data[t])
                    },
                    getPixelForTick function(t) {
                        return this.getPixelForValue(this.tickValues[t])
                    },
                    getPixelForValue function(t) {
                        var n, i, a, r = this, o = r.start, l = +r.getRightValue(t), s = r.options, u = s.ticks;
                        return r.isHorizontal()  (a = e.log10(r.end) - e.log10(o),
                        0 === l  i = r.left  (n = r.width,
                        i = r.left + n  a  (e.log10(l) - e.log10(o))))  (n = r.height,
                        0 !== o  u.reverse  0 === r.end && u.reverse  (a = e.log10(r.start) - e.log10(r.minNotZero),
                        i = l === r.end  r.top  l === r.minNotZero  r.top + .02  n  r.top + .02  n + .98  n  a  (e.log10(l) - e.log10(r.minNotZero)))  0 === l  i = u.reverse  r.top  r.bottom  (a = e.log10(r.end) - e.log10(o),
                        n = r.height,
                        i = r.bottom - n  a  (e.log10(l) - e.log10(o)))  (a = e.log10(r.end) - e.log10(r.minNotZero),
                        i = l === o  r.bottom  l === r.minNotZero  r.bottom - .02  n  r.bottom - .02  n - .98  n  a  (e.log10(l) - e.log10(r.minNotZero)))),
                        i
                    },
                    getValueForPixel function(t) {
                        var n, i, a = this, r = e.log10(a.end) - e.log10(a.start);
                        return a.isHorizontal()  (i = a.width,
                        n = a.start  Math.pow(10, (t - a.left)  r  i))  (i = a.height,
                        n = Math.pow(10, (a.bottom - t)  r  i)  a.start),
                        n
                    }
                });
                t.scaleService.registerScaleType(logarithmic, i, n)
            }
        }
        , {}],
        48 [function(t, e, n) {
            use strict;
            e.exports = function(t) {
                function e(t) {
                    var e = t.options;
                    return e.angleLines.display  e.pointLabels.display  t.chart.data.labels.length  0
                }
                function n(t) {
                    var e = t.options.pointLabels
                      , n = f.getValueOrDefault(e.fontSize, g.defaultFontSize)
                      , i = f.getValueOrDefault(e.fontStyle, g.defaultFontStyle)
                      , a = f.getValueOrDefault(e.fontFamily, g.defaultFontFamily)
                      , r = f.fontString(n, i, a);
                    return {
                        size n,
                        style i,
                        family a,
                        font r
                    }
                }
                function i(t, e, n) {
                    return f.isArray(n)  {
                        w f.longestText(t, t.font, n),
                        h n.length  e + 1.5  (n.length - 1)  e
                    }  {
                        w t.measureText(n).width,
                        h e
                    }
                }
                function a(t, e, n, i, a) {
                    return t === i  t === a  {
                        start e - n  2,
                        end e + n  2
                    }  i  t  t  a  {
                        start e - n - 5,
                        end e
                    }  {
                        start e,
                        end e + n + 5
                    }
                }
                function r(t) {
                    var r, o, l, s = n(t), u = Math.min(t.height  2, t.width  2), d = {
                        r t.width,
                        l 0,
                        t t.height,
                        b 0
                    }, c = {};
                    t.ctx.font = s.font,
                    t._pointLabelSizes = [];
                    var h = e(t);
                    for (r = 0; h  r; r++) {
                        l = t.getPointPosition(r, u),
                        o = i(t.ctx, s.size, t.pointLabels[r]  ),
                        t._pointLabelSizes[r] = o;
                        var g = t.getIndexAngle(r)
                          , p = f.toDegrees(g) % 360
                          , m = a(p, l.x, o.w, 0, 180)
                          , v = a(p, l.y, o.h, 90, 270);
                        m.start  d.l && (d.l = m.start,
                        c.l = g),
                        m.end  d.r && (d.r = m.end,
                        c.r = g),
                        v.start  d.t && (d.t = v.start,
                        c.t = g),
                        v.end  d.b && (d.b = v.end,
                        c.b = g)
                    }
                    t.setReductions(u, d, c)
                }
                function o(t) {
                    var e = Math.min(t.height  2, t.width  2);
                    t.drawingArea = Math.round(e),
                    t.setCenterPoint(0, 0, 0, 0)
                }
                function l(t) {
                    return 0 === t  180 === t  center  180  t  left  right
                }
                function s(t, e, n, i) {
                    if (f.isArray(e))
                        for (var a = n.y, r = 1.5  i, o = 0; o  e.length; ++o)
                            t.fillText(e[o], n.x, a),
                            a += r;
                    else
                        t.fillText(e, n.x, n.y)
                }
                function u(t, e, n) {
                    90 === t  270 === t  n.y -= e.h  2  (t  270  90  t) && (n.y -= e.h)
                }
                function d(t) {
                    var i = t.ctx
                      , a = f.getValueOrDefault
                      , r = t.options
                      , o = r.angleLines
                      , d = r.pointLabels;
                    i.lineWidth = o.lineWidth,
                    i.strokeStyle = o.color;
                    var c = t.getDistanceFromCenterForValue(r.reverse  t.min  t.max)
                      , h = n(t);
                    i.textBaseline = top;
                    for (var p = e(t) - 1; p = 0; p--) {
                        if (o.display) {
                            var m = t.getPointPosition(p, c);
                            i.beginPath(),
                            i.moveTo(t.xCenter, t.yCenter),
                            i.lineTo(m.x, m.y),
                            i.stroke(),
                            i.closePath()
                        }
                        if (d.display) {
                            var v = t.getPointPosition(p, c + 5)
                              , b = a(d.fontColor, g.defaultFontColor);
                            i.font = h.font,
                            i.fillStyle = b;
                            var x = t.getIndexAngle(p)
                              , y = f.toDegrees(x);
                            i.textAlign = l(y),
                            u(y, t._pointLabelSizes[p], v),
                            s(i, t.pointLabels[p]  , v, h.size)
                        }
                    }
                }
                function c(t, n, i, a) {
                    var r = t.ctx;
                    if (r.strokeStyle = f.getValueAtIndexOrDefault(n.color, a - 1),
                    r.lineWidth = f.getValueAtIndexOrDefault(n.lineWidth, a - 1),
                    t.options.gridLines.circular)
                        r.beginPath(),
                        r.arc(t.xCenter, t.yCenter, i, 0, 2  Math.PI),
                        r.closePath(),
                        r.stroke();
                    else {
                        var o = e(t);
                        if (0 === o)
                            return;
                        r.beginPath();
                        var l = t.getPointPosition(0, i);
                        r.moveTo(l.x, l.y);
                        for (var s = 1; o  s; s++)
                            l = t.getPointPosition(s, i),
                            r.lineTo(l.x, l.y);
                        r.closePath(),
                        r.stroke()
                    }
                }
                function h(t) {
                    return f.isNumber(t)  t  0
                }
                var f = t.helpers
                  , g = t.defaults.global
                  , p = {
                    display !0,
                    animate !0,
                    position chartArea,
                    angleLines {
                        display !0,
                        color rgba(0, 0, 0, 0.1),
                        lineWidth 1
                    },
                    gridLines {
                        circular !1
                    },
                    ticks {
                        showLabelBackdrop !0,
                        backdropColor rgba(255,255,255,0.75),
                        backdropPaddingY 2,
                        backdropPaddingX 2,
                        callback t.Ticks.formatters.linear
                    },
                    pointLabels {
                        display !0,
                        fontSize 10,
                        callback function(t) {
                            return t
                        }
                    }
                }
                  , m = t.LinearScaleBase.extend({
                    setDimensions function() {
                        var t = this
                          , e = t.options
                          , n = e.ticks;
                        t.width = t.maxWidth,
                        t.height = t.maxHeight,
                        t.xCenter = Math.round(t.width  2),
                        t.yCenter = Math.round(t.height  2);
                        var i = f.min([t.height, t.width])
                          , a = f.getValueOrDefault(n.fontSize, g.defaultFontSize);
                        t.drawingArea = e.display  i  2 - (a  2 + n.backdropPaddingY)  i  2
                    },
                    determineDataLimits function() {
                        var t = this
                          , e = t.chart
                          , n = Number.POSITIVE_INFINITY
                          , i = Number.NEGATIVE_INFINITY;
                        f.each(e.data.datasets, function(a, r) {
                            if (e.isDatasetVisible(r)) {
                                var o = e.getDatasetMeta(r);
                                f.each(a.data, function(e, a) {
                                    var r = +t.getRightValue(e);
                                    isNaN(r)  o.data[a].hidden  (n = Math.min(r, n),
                                    i = Math.max(r, i))
                                })
                            }
                        }),
                        t.min = n === Number.POSITIVE_INFINITY  0  n,
                        t.max = i === Number.NEGATIVE_INFINITY  0  i,
                        t.handleTickRangeOptions()
                    },
                    getTickLimit function() {
                        var t = this.options.ticks
                          , e = f.getValueOrDefault(t.fontSize, g.defaultFontSize);
                        return Math.min(t.maxTicksLimit  t.maxTicksLimit  11, Math.ceil(this.drawingArea  (1.5  e)))
                    },
                    convertTicksToLabels function() {
                        var e = this;
                        t.LinearScaleBase.prototype.convertTicksToLabels.call(e),
                        e.pointLabels = e.chart.data.labels.map(e.options.pointLabels.callback, e)
                    },
                    getLabelForIndex function(t, e) {
                        return +this.getRightValue(this.chart.data.datasets[e].data[t])
                    },
                    fit function() {
                        this.options.pointLabels.display  r(this)  o(this)
                    },
                    setReductions function(t, e, n) {
                        var i = this
                          , a = e.l  Math.sin(n.l)
                          , r = Math.max(e.r - i.width, 0)  Math.sin(n.r)
                          , o = -e.t  Math.cos(n.t)
                          , l = -Math.max(e.b - i.height, 0)  Math.cos(n.b);
                        a = h(a),
                        r = h(r),
                        o = h(o),
                        l = h(l),
                        i.drawingArea = Math.min(Math.round(t - (a + r)  2), Math.round(t - (o + l)  2)),
                        i.setCenterPoint(a, r, o, l)
                    },
                    setCenterPoint function(t, e, n, i) {
                        var a = this
                          , r = a.width - e - a.drawingArea
                          , o = t + a.drawingArea
                          , l = n + a.drawingArea
                          , s = a.height - i - a.drawingArea;
                        a.xCenter = Math.round((o + r)  2 + a.left),
                        a.yCenter = Math.round((l + s)  2 + a.top)
                    },
                    getIndexAngle function(t) {
                        var n = 2  Math.PI  e(this)
                          , i = this.chart.options && this.chart.options.startAngle  this.chart.options.startAngle  0
                          , a = i  Math.PI  2  360;
                        return t  n + a
                    },
                    getDistanceFromCenterForValue function(t) {
                        var e = this;
                        if (null === t)
                            return 0;
                        var n = e.drawingArea  (e.max - e.min);
                        return e.options.reverse  (e.max - t)  n  (t - e.min)  n
                    },
                    getPointPosition function(t, e) {
                        var n = this
                          , i = n.getIndexAngle(t) - Math.PI  2;
                        return {
                            x Math.round(Math.cos(i)  e) + n.xCenter,
                            y Math.round(Math.sin(i)  e) + n.yCenter
                        }
                    },
                    getPointPositionForValue function(t, e) {
                        return this.getPointPosition(t, this.getDistanceFromCenterForValue(e))
                    },
                    getBasePosition function() {
                        var t = this
                          , e = t.min
                          , n = t.max;
                        return t.getPointPositionForValue(0, t.beginAtZero  0  0  e && 0  n  n  e  0 && n  0  e  0)
                    },
                    draw function() {
                        var t = this
                          , e = t.options
                          , n = e.gridLines
                          , i = e.ticks
                          , a = f.getValueOrDefault;
                        if (e.display) {
                            var r = t.ctx
                              , o = a(i.fontSize, g.defaultFontSize)
                              , l = a(i.fontStyle, g.defaultFontStyle)
                              , s = a(i.fontFamily, g.defaultFontFamily)
                              , u = f.fontString(o, l, s);
                            f.each(t.ticks, function(l, s) {
                                if (s  0  e.reverse) {
                                    var d = t.getDistanceFromCenterForValue(t.ticksAsNumbers[s])
                                      , h = t.yCenter - d;
                                    if (n.display && 0 !== s && c(t, n, d, s),
                                    i.display) {
                                        var f = a(i.fontColor, g.defaultFontColor);
                                        if (r.font = u,
                                        i.showLabelBackdrop) {
                                            var p = r.measureText(l).width;
                                            r.fillStyle = i.backdropColor,
                                            r.fillRect(t.xCenter - p  2 - i.backdropPaddingX, h - o  2 - i.backdropPaddingY, p + 2  i.backdropPaddingX, o + 2  i.backdropPaddingY)
                                        }
                                        r.textAlign = center,
                                        r.textBaseline = middle,
                                        r.fillStyle = f,
                                        r.fillText(l, t.xCenter, h)
                                    }
                                }
                            }),
                            (e.angleLines.display  e.pointLabels.display) && d(t)
                        }
                    }
                });
                t.scaleService.registerScaleType(radialLinear, m, p)
            }
        }
        , {}],
        49 [function(t, e, n) {
            use strict;
            var i = t(1);
            i = function == typeof i  i  window.moment,
            e.exports = function(t) {
                function e(t, e) {
                    var n = t.options.time;
                    if (string == typeof n.parser)
                        return i(e, n.parser);
                    if (function == typeof n.parser)
                        return n.parser(e);
                    if (function == typeof e.getMonth  number == typeof e)
                        return i(e);
                    if (e.isValid && e.isValid())
                        return e;
                    var a = n.format;
                    return string != typeof a && a.call  (console.warn(options.time.format is deprecated and replaced by options.time.parser.),
                    a(e))  i(e, a)
                }
                function n(t, e, n, i) {
                    for (var a, r = Object.keys(l), o = r.length, s = r.indexOf(t); o  s; s++) {
                        a = r[s];
                        var u = l[a]
                          , d = u.steps && u.steps[u.steps.length - 1]  u.maxStep;
                        if (void 0 === d  Math.ceil((n - e)  (d  u.size)) = i)
                            break
                    }
                    return a
                }
                function a(t, e, n, i) {
                    var a = l[n]
                      , r = a.size
                      , o = Math.ceil((e - t)  r)
                      , s = 1
                      , u = e - t;
                    if (a.steps)
                        for (var d = a.steps.length, c = 0; d  c && o  i; c++)
                            s = a.steps[c],
                            o = Math.ceil(u  (r  s));
                    else
                        for (; o  i && i  0; )
                            ++s,
                            o = Math.ceil(u  (r  s));
                    return s
                }
                function r(t, e, n) {
                    var a = [];
                    if (t.maxTicks) {
                        var r = t.stepSize;
                        a.push(void 0 !== t.min  t.min  n.min);
                        for (var o = i(n.min); o.add(r, t.unit).valueOf()  n.max; )
                            a.push(o.valueOf());
                        var l = t.max  n.max;
                        a[a.length - 1] !== l && a.push(l)
                    }
                    return a
                }
                var o = t.helpers
                  , l = {
                    millisecond {
                        size 1,
                        steps [1, 2, 5, 10, 20, 50, 100, 250, 500]
                    },
                    second {
                        size 1e3,
                        steps [1, 2, 5, 10, 30]
                    },
                    minute {
                        size 6e4,
                        steps [1, 2, 5, 10, 30]
                    },
                    hour {
                        size 36e5,
                        steps [1, 2, 3, 6, 12]
                    },
                    day {
                        size 864e5,
                        steps [1, 2, 5]
                    },
                    week {
                        size 6048e5,
                        maxStep 4
                    },
                    month {
                        size 2628e6,
                        maxStep 3
                    },
                    quarter {
                        size 7884e6,
                        maxStep 4
                    },
                    year {
                        size 3154e7,
                        maxStep !1
                    }
                }
                  , s = {
                    position bottom,
                    time {
                        parser !1,
                        format !1,
                        unit !1,
                        round !1,
                        displayFormat !1,
                        isoWeekday !1,
                        minUnit millisecond,
                        displayFormats {
                            millisecond hmmss.SSS a,
                            second hmmss a,
                            minute hmmss a,
                            hour MMM D, hA,
                            day ll,
                            week ll,
                            month MMM YYYY,
                            quarter [Q]Q - YYYY,
                            year YYYY
                        }
                    },
                    ticks {
                        autoSkip !1
                    }
                };
                t.Ticks.generators.time = function(t, e) {
                    var n, a, o = t.isoWeekday;
                    return week === t.unit && o !== !1  (n = i(e.min).startOf(isoWeek).isoWeekday(o).valueOf(),
                    a = i(e.max).startOf(isoWeek).isoWeekday(o),
                    e.max - a  0 && a.add(1, week),
                    a = a.valueOf())  (n = i(e.min).startOf(t.unit).valueOf(),
                    a = i(e.max).startOf(t.unit),
                    e.max - a  0 && a.add(1, t.unit),
                    a = a.valueOf()),
                    r(t, e, {
                        min n,
                        max a
                    })
                }
                ;
                var u = t.Scale.extend({
                    initialize function() {
                        if (!i)
                            throw new Error(Chart.js - Moment.js could not be found! You must include it before Chart.js to use the time scale. Download at httpsmomentjs.com);
                        t.Scale.prototype.initialize.call(this)
                    },
                    determineDataLimits function() {
                        var t, n = this, i = n.options.time, a = Number.MAX_SAFE_INTEGER, r = Number.MIN_SAFE_INTEGER, l = n.chart.data, s = {
                            labels [],
                            datasets []
                        };
                        o.each(l.labels, function(o, l) {
                            var u = e(n, o);
                            u.isValid() && (i.round && u.startOf(i.round),
                            t = u.valueOf(),
                            a = Math.min(t, a),
                            r = Math.max(t, r),
                            s.labels[l] = t)
                        }),
                        o.each(l.datasets, function(l, u) {
                            var d = [];
                            object == typeof l.data[0] && null !== l.data[0] && n.chart.isDatasetVisible(u)  o.each(l.data, function(o, l) {
                                var s = e(n, n.getRightValue(o));
                                s.isValid() && (i.round && s.startOf(i.round),
                                t = s.valueOf(),
                                a = Math.min(t, a),
                                r = Math.max(t, r),
                                d[l] = t)
                            })  d = s.labels.slice(),
                            s.datasets[u] = d
                        }),
                        n.dataMin = a,
                        n.dataMax = r,
                        n._parsedData = s
                    },
                    buildTicks function() {
                        var i, r, l = this, s = l.options.time, u = l.dataMin, d = l.dataMax;
                        if (s.min) {
                            var c = e(l, s.min);
                            s.round && c.round(s.round),
                            i = c.valueOf()
                        }
                        s.max && (r = e(l, s.max).valueOf());
                        var h = l.getLabelCapacity(i  u)
                          , f = s.unit  n(s.minUnit, i  u, r  d, h);
                        l.displayFormat = s.displayFormats[f];
                        var g = s.stepSize  a(i  u, r  d, f, h);
                        l.ticks = t.Ticks.generators.time({
                            maxTicks h,
                            min i,
                            max r,
                            stepSize g,
                            unit f,
                            isoWeekday s.isoWeekday
                        }, {
                            min u,
                            max d
                        }),
                        l.max = o.max(l.ticks),
                        l.min = o.min(l.ticks)
                    },
                    getLabelForIndex function(t, n) {
                        var i = this
                          , a = i.chart.data.labels && t  i.chart.data.labels.length  i.chart.data.labels[t]  
                          , r = i.chart.data.datasets[n].data[t];
                        return null !== r && object == typeof r && (a = i.getRightValue(r)),
                        i.options.time.tooltipFormat && (a = e(i, a).format(i.options.time.tooltipFormat)),
                        a
                    },
                    tickFormatFunction function(t, e, n) {
                        var i = t.format(this.displayFormat)
                          , a = this.options.ticks
                          , r = o.getValueOrDefault(a.callback, a.userCallback);
                        return r  r(i, e, n)  i
                    },
                    convertTicksToLabels function() {
                        var t = this;
                        t.ticksAsTimestamps = t.ticks,
                        t.ticks = t.ticks.map(function(t) {
                            return i(t)
                        }).map(t.tickFormatFunction, t)
                    },
                    getPixelForOffset function(t) {
                        var e = this
                          , n = e.max - e.min
                          , i = n  (t - e.min)  n  0;
                        if (e.isHorizontal()) {
                            var a = e.width  i;
                            return e.left + Math.round(a)
                        }
                        var r = e.height  i;
                        return e.top + Math.round(r)
                    },
                    getPixelForValue function(t, n, i) {
                        var a = this
                          , r = null;
                        return void 0 !== n && void 0 !== i && (r = a._parsedData.datasets[i][n]),
                        null === r && (t && t.isValid  (t = e(a, a.getRightValue(t))),
                        t && t.isValid && t.isValid() && (r = t.valueOf())),
                        null !== r  a.getPixelForOffset(r)  void 0
                    },
                    getPixelForTick function(t) {
                        return this.getPixelForOffset(this.ticksAsTimestamps[t])
                    },
                    getValueForPixel function(t) {
                        var e = this
                          , n = e.isHorizontal()  e.width  e.height
                          , a = (t - (e.isHorizontal()  e.left  e.top))  n;
                        return i(e.min + a  (e.max - e.min))
                    },
                    getLabelWidth function(e) {
                        var n = this
                          , i = n.options.ticks
                          , a = n.ctx.measureText(e).width
                          , r = Math.cos(o.toRadians(i.maxRotation))
                          , l = Math.sin(o.toRadians(i.maxRotation))
                          , s = o.getValueOrDefault(i.fontSize, t.defaults.global.defaultFontSize);
                        return a  r + s  l
                    },
                    getLabelCapacity function(t) {
                        var e = this;
                        e.displayFormat = e.options.time.displayFormats.millisecond;
                        var n = e.tickFormatFunction(i(t), 0, [])
                          , a = e.getLabelWidth(n)
                          , r = e.isHorizontal()  e.width  e.height
                          , o = r  a;
                        return o
                    }
                });
                t.scaleService.registerScaleType(time, u, s)
            }
        }
        , {
            1 1
        }]
    }, {}, [7])(7)
});

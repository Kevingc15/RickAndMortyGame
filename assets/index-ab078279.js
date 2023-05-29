(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
  new MutationObserver((i) => {
    for (const n of i)
      if (n.type === "childList")
        for (const c of n.addedNodes)
          c.tagName === "LINK" && c.rel === "modulepreload" && r(c);
  }).observe(document, { childList: !0, subtree: !0 });
  function _(i) {
    const n = {};
    return (
      i.integrity && (n.integrity = i.integrity),
      i.referrerPolicy && (n.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === "use-credentials"
        ? (n.credentials = "include")
        : i.crossOrigin === "anonymous"
        ? (n.credentials = "omit")
        : (n.credentials = "same-origin"),
      n
    );
  }
  function r(i) {
    if (i.ep) return;
    i.ep = !0;
    const n = _(i);
    fetch(i.href, n);
  }
})();
var q,
  s,
  $e,
  L,
  _e,
  Ne,
  K,
  I = {},
  Pe = [],
  Be = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,
  z = Array.isArray;
function H(e, t) {
  for (var _ in t) e[_] = t[_];
  return e;
}
function we(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function J(e, t, _) {
  var r,
    i,
    n,
    c = {};
  for (n in t)
    n == "key" ? (r = t[n]) : n == "ref" ? (i = t[n]) : (c[n] = t[n]);
  if (
    (arguments.length > 2 &&
      (c.children = arguments.length > 3 ? q.call(arguments, 2) : _),
    typeof e == "function" && e.defaultProps != null)
  )
    for (n in e.defaultProps) c[n] === void 0 && (c[n] = e.defaultProps[n]);
  return M(e, c, r, i, null);
}
function M(e, t, _, r, i) {
  var n = {
    type: e,
    props: t,
    key: _,
    ref: r,
    __k: null,
    __: null,
    __b: 0,
    __e: null,
    __d: void 0,
    __c: null,
    __h: null,
    constructor: void 0,
    __v: i ?? ++$e,
  };
  return i == null && s.vnode != null && s.vnode(n), n;
}
function U(e) {
  return e.children;
}
function x(e, t) {
  (this.props = e), (this.context = t);
}
function O(e, t) {
  if (t == null) return e.__ ? O(e.__, e.__.__k.indexOf(e) + 1) : null;
  for (var _; t < e.__k.length; t++)
    if ((_ = e.__k[t]) != null && _.__e != null) return _.__e;
  return typeof e.type == "function" ? O(e) : null;
}
function xe(e) {
  var t, _;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((_ = e.__k[t]) != null && _.__e != null) {
        e.__e = e.__c.base = _.__e;
        break;
      }
    return xe(e);
  }
}
function ne(e) {
  ((!e.__d && (e.__d = !0) && L.push(e) && !D.__r++) ||
    _e !== s.debounceRendering) &&
    ((_e = s.debounceRendering) || Ne)(D);
}
function D() {
  var e, t, _, r, i, n, c, l;
  for (L.sort(K); (e = L.shift()); )
    e.__d &&
      ((t = L.length),
      (r = void 0),
      (i = void 0),
      (c = (n = (_ = e).__v).__e),
      (l = _.__P) &&
        ((r = []),
        ((i = H({}, n)).__v = n.__v + 1),
        Y(
          l,
          n,
          i,
          _.__n,
          l.ownerSVGElement !== void 0,
          n.__h != null ? [c] : null,
          r,
          c ?? O(n),
          n.__h
        ),
        Ue(r, n),
        n.__e != c && xe(n)),
      L.length > t && L.sort(K));
  D.__r = 0;
}
function Se(e, t, _, r, i, n, c, l, a, p) {
  var o,
    h,
    f,
    u,
    d,
    w,
    v,
    g = (r && r.__k) || Pe,
    k = g.length;
  for (_.__k = [], o = 0; o < t.length; o++)
    if (
      (u = _.__k[o] =
        (u = t[o]) == null || typeof u == "boolean" || typeof u == "function"
          ? null
          : typeof u == "string" || typeof u == "number" || typeof u == "bigint"
          ? M(null, u, null, null, u)
          : z(u)
          ? M(U, { children: u }, null, null, null)
          : u.__b > 0
          ? M(u.type, u.props, u.key, u.ref ? u.ref : null, u.__v)
          : u) != null
    ) {
      if (
        ((u.__ = _),
        (u.__b = _.__b + 1),
        (f = g[o]) === null || (f && u.key == f.key && u.type === f.type))
      )
        g[o] = void 0;
      else
        for (h = 0; h < k; h++) {
          if ((f = g[h]) && u.key == f.key && u.type === f.type) {
            g[h] = void 0;
            break;
          }
          f = null;
        }
      Y(e, u, (f = f || I), i, n, c, l, a, p),
        (d = u.__e),
        (h = u.ref) &&
          f.ref != h &&
          (v || (v = []),
          f.ref && v.push(f.ref, null, u),
          v.push(h, u.__c || d, u)),
        d != null
          ? (w == null && (w = d),
            typeof u.type == "function" && u.__k === f.__k
              ? (u.__d = a = He(u, a, e))
              : (a = Ee(e, u, f, g, d, a)),
            typeof _.type == "function" && (_.__d = a))
          : a && f.__e == a && a.parentNode != e && (a = O(f));
    }
  for (_.__e = w, o = k; o--; )
    g[o] != null &&
      (typeof _.type == "function" &&
        g[o].__e != null &&
        g[o].__e == _.__d &&
        (_.__d = Le(r).nextSibling),
      We(g[o], g[o]));
  if (v) for (o = 0; o < v.length; o++) Oe(v[o], v[++o], v[++o]);
}
function He(e, t, _) {
  for (var r, i = e.__k, n = 0; i && n < i.length; n++)
    (r = i[n]) &&
      ((r.__ = e),
      (t =
        typeof r.type == "function" ? He(r, t, _) : Ee(_, r, r, i, r.__e, t)));
  return t;
}
function V(e, t) {
  return (
    (t = t || []),
    e == null ||
      typeof e == "boolean" ||
      (z(e)
        ? e.some(function (_) {
            V(_, t);
          })
        : t.push(e)),
    t
  );
}
function Ee(e, t, _, r, i, n) {
  var c, l, a;
  if (t.__d !== void 0) (c = t.__d), (t.__d = void 0);
  else if (_ == null || i != n || i.parentNode == null)
    e: if (n == null || n.parentNode !== e) e.appendChild(i), (c = null);
    else {
      for (l = n, a = 0; (l = l.nextSibling) && a < r.length; a += 1)
        if (l == i) break e;
      e.insertBefore(i, n), (c = n);
    }
  return c !== void 0 ? c : i.nextSibling;
}
function Le(e) {
  var t, _, r;
  if (e.type == null || typeof e.type == "string") return e.__e;
  if (e.__k) {
    for (t = e.__k.length - 1; t >= 0; t--)
      if ((_ = e.__k[t]) && (r = Le(_))) return r;
  }
  return null;
}
function je(e, t, _, r, i) {
  var n;
  for (n in _)
    n === "children" || n === "key" || n in t || B(e, n, null, _[n], r);
  for (n in t)
    (i && typeof t[n] != "function") ||
      n === "children" ||
      n === "key" ||
      n === "value" ||
      n === "checked" ||
      _[n] === t[n] ||
      B(e, n, t[n], _[n], r);
}
function re(e, t, _) {
  t[0] === "-"
    ? e.setProperty(t, _ ?? "")
    : (e[t] =
        _ == null ? "" : typeof _ != "number" || Be.test(t) ? _ : _ + "px");
}
function B(e, t, _, r, i) {
  var n;
  e: if (t === "style")
    if (typeof _ == "string") e.style.cssText = _;
    else {
      if ((typeof r == "string" && (e.style.cssText = r = ""), r))
        for (t in r) (_ && t in _) || re(e.style, t, "");
      if (_) for (t in _) (r && _[t] === r[t]) || re(e.style, t, _[t]);
    }
  else if (t[0] === "o" && t[1] === "n")
    (n = t !== (t = t.replace(/Capture$/, ""))),
      (t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2)),
      e.l || (e.l = {}),
      (e.l[t + n] = _),
      _
        ? r || e.addEventListener(t, n ? ie : oe, n)
        : e.removeEventListener(t, n ? ie : oe, n);
  else if (t !== "dangerouslySetInnerHTML") {
    if (i) t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
    else if (
      t !== "width" &&
      t !== "height" &&
      t !== "href" &&
      t !== "list" &&
      t !== "form" &&
      t !== "tabIndex" &&
      t !== "download" &&
      t !== "rowSpan" &&
      t !== "colSpan" &&
      t in e
    )
      try {
        e[t] = _ ?? "";
        break e;
      } catch {}
    typeof _ == "function" ||
      (_ == null || (_ === !1 && t[4] !== "-")
        ? e.removeAttribute(t)
        : e.setAttribute(t, _));
  }
}
function oe(e) {
  return this.l[e.type + !1](s.event ? s.event(e) : e);
}
function ie(e) {
  return this.l[e.type + !0](s.event ? s.event(e) : e);
}
function Y(e, t, _, r, i, n, c, l, a) {
  var p,
    o,
    h,
    f,
    u,
    d,
    w,
    v,
    g,
    k,
    E,
    b,
    P,
    $,
    N,
    C = t.type;
  if (t.constructor !== void 0) return null;
  _.__h != null &&
    ((a = _.__h), (l = t.__e = _.__e), (t.__h = null), (n = [l])),
    (p = s.__b) && p(t);
  try {
    e: if (typeof C == "function") {
      if (
        ((v = t.props),
        (g = (p = C.contextType) && r[p.__c]),
        (k = p ? (g ? g.props.value : p.__) : r),
        _.__c
          ? (w = (o = t.__c = _.__c).__ = o.__E)
          : ("prototype" in C && C.prototype.render
              ? (t.__c = o = new C(v, k))
              : ((t.__c = o = new x(v, k)),
                (o.constructor = C),
                (o.render = ze)),
            g && g.sub(o),
            (o.props = v),
            o.state || (o.state = {}),
            (o.context = k),
            (o.__n = r),
            (h = o.__d = !0),
            (o.__h = []),
            (o._sb = [])),
        o.__s == null && (o.__s = o.state),
        C.getDerivedStateFromProps != null &&
          (o.__s == o.state && (o.__s = H({}, o.__s)),
          H(o.__s, C.getDerivedStateFromProps(v, o.__s))),
        (f = o.props),
        (u = o.state),
        (o.__v = t),
        h)
      )
        C.getDerivedStateFromProps == null &&
          o.componentWillMount != null &&
          o.componentWillMount(),
          o.componentDidMount != null && o.__h.push(o.componentDidMount);
      else {
        if (
          (C.getDerivedStateFromProps == null &&
            v !== f &&
            o.componentWillReceiveProps != null &&
            o.componentWillReceiveProps(v, k),
          (!o.__e &&
            o.shouldComponentUpdate != null &&
            o.shouldComponentUpdate(v, o.__s, k) === !1) ||
            t.__v === _.__v)
        ) {
          for (
            t.__v !== _.__v && ((o.props = v), (o.state = o.__s), (o.__d = !1)),
              o.__e = !1,
              t.__e = _.__e,
              t.__k = _.__k,
              t.__k.forEach(function (T) {
                T && (T.__ = t);
              }),
              E = 0;
            E < o._sb.length;
            E++
          )
            o.__h.push(o._sb[E]);
          (o._sb = []), o.__h.length && c.push(o);
          break e;
        }
        o.componentWillUpdate != null && o.componentWillUpdate(v, o.__s, k),
          o.componentDidUpdate != null &&
            o.__h.push(function () {
              o.componentDidUpdate(f, u, d);
            });
      }
      if (
        ((o.context = k),
        (o.props = v),
        (o.__P = e),
        (b = s.__r),
        (P = 0),
        "prototype" in C && C.prototype.render)
      ) {
        for (
          o.state = o.__s,
            o.__d = !1,
            b && b(t),
            p = o.render(o.props, o.state, o.context),
            $ = 0;
          $ < o._sb.length;
          $++
        )
          o.__h.push(o._sb[$]);
        o._sb = [];
      } else
        do
          (o.__d = !1),
            b && b(t),
            (p = o.render(o.props, o.state, o.context)),
            (o.state = o.__s);
        while (o.__d && ++P < 25);
      (o.state = o.__s),
        o.getChildContext != null && (r = H(H({}, r), o.getChildContext())),
        h ||
          o.getSnapshotBeforeUpdate == null ||
          (d = o.getSnapshotBeforeUpdate(f, u)),
        Se(
          e,
          z(
            (N =
              p != null && p.type === U && p.key == null ? p.props.children : p)
          )
            ? N
            : [N],
          t,
          _,
          r,
          i,
          n,
          c,
          l,
          a
        ),
        (o.base = t.__e),
        (t.__h = null),
        o.__h.length && c.push(o),
        w && (o.__E = o.__ = null),
        (o.__e = !1);
    } else
      n == null && t.__v === _.__v
        ? ((t.__k = _.__k), (t.__e = _.__e))
        : (t.__e = qe(_.__e, t, _, r, i, n, c, a));
    (p = s.diffed) && p(t);
  } catch (T) {
    (t.__v = null),
      (a || n != null) &&
        ((t.__e = l), (t.__h = !!a), (n[n.indexOf(l)] = null)),
      s.__e(T, t, _);
  }
}
function Ue(e, t) {
  s.__c && s.__c(t, e),
    e.some(function (_) {
      try {
        (e = _.__h),
          (_.__h = []),
          e.some(function (r) {
            r.call(_);
          });
      } catch (r) {
        s.__e(r, _.__v);
      }
    });
}
function qe(e, t, _, r, i, n, c, l) {
  var a,
    p,
    o,
    h = _.props,
    f = t.props,
    u = t.type,
    d = 0;
  if ((u === "svg" && (i = !0), n != null)) {
    for (; d < n.length; d++)
      if (
        (a = n[d]) &&
        "setAttribute" in a == !!u &&
        (u ? a.localName === u : a.nodeType === 3)
      ) {
        (e = a), (n[d] = null);
        break;
      }
  }
  if (e == null) {
    if (u === null) return document.createTextNode(f);
    (e = i
      ? document.createElementNS("http://www.w3.org/2000/svg", u)
      : document.createElement(u, f.is && f)),
      (n = null),
      (l = !1);
  }
  if (u === null) h === f || (l && e.data === f) || (e.data = f);
  else {
    if (
      ((n = n && q.call(e.childNodes)),
      (p = (h = _.props || I).dangerouslySetInnerHTML),
      (o = f.dangerouslySetInnerHTML),
      !l)
    ) {
      if (n != null)
        for (h = {}, d = 0; d < e.attributes.length; d++)
          h[e.attributes[d].name] = e.attributes[d].value;
      (o || p) &&
        ((o && ((p && o.__html == p.__html) || o.__html === e.innerHTML)) ||
          (e.innerHTML = (o && o.__html) || ""));
    }
    if ((je(e, f, h, i, l), o)) t.__k = [];
    else if (
      (Se(
        e,
        z((d = t.props.children)) ? d : [d],
        t,
        _,
        r,
        i && u !== "foreignObject",
        n,
        c,
        n ? n[0] : _.__k && O(_, 0),
        l
      ),
      n != null)
    )
      for (d = n.length; d--; ) n[d] != null && we(n[d]);
    l ||
      ("value" in f &&
        (d = f.value) !== void 0 &&
        (d !== e.value ||
          (u === "progress" && !d) ||
          (u === "option" && d !== h.value)) &&
        B(e, "value", d, h.value, !1),
      "checked" in f &&
        (d = f.checked) !== void 0 &&
        d !== e.checked &&
        B(e, "checked", d, h.checked, !1));
  }
  return e;
}
function Oe(e, t, _) {
  try {
    typeof e == "function" ? e(t) : (e.current = t);
  } catch (r) {
    s.__e(r, _);
  }
}
function We(e, t, _) {
  var r, i;
  if (
    (s.unmount && s.unmount(e),
    (r = e.ref) && ((r.current && r.current !== e.__e) || Oe(r, null, t)),
    (r = e.__c) != null)
  ) {
    if (r.componentWillUnmount)
      try {
        r.componentWillUnmount();
      } catch (n) {
        s.__e(n, t);
      }
    (r.base = r.__P = null), (e.__c = void 0);
  }
  if ((r = e.__k))
    for (i = 0; i < r.length; i++)
      r[i] && We(r[i], t, _ || typeof e.type != "function");
  _ || e.__e == null || we(e.__e), (e.__ = e.__e = e.__d = void 0);
}
function ze(e, t, _) {
  return this.constructor(e, _);
}
function ee(e, t, _) {
  var r, i, n;
  s.__ && s.__(e, t),
    (i = (r = typeof _ == "function") ? null : (_ && _.__k) || t.__k),
    (n = []),
    Y(
      t,
      (e = ((!r && _) || t).__k = J(U, null, [e])),
      i || I,
      I,
      t.ownerSVGElement !== void 0,
      !r && _ ? [_] : i ? null : t.firstChild ? q.call(t.childNodes) : null,
      n,
      !r && _ ? _ : i ? i.__e : t.firstChild,
      r
    ),
    Ue(n, e);
}
function Te(e, t) {
  ee(e, t, Te);
}
(q = Pe.slice),
  (s = {
    __e: function (e, t, _, r) {
      for (var i, n, c; (t = t.__); )
        if ((i = t.__c) && !i.__)
          try {
            if (
              ((n = i.constructor) &&
                n.getDerivedStateFromError != null &&
                (i.setState(n.getDerivedStateFromError(e)), (c = i.__d)),
              i.componentDidCatch != null &&
                (i.componentDidCatch(e, r || {}), (c = i.__d)),
              c)
            )
              return (i.__E = i);
          } catch (l) {
            e = l;
          }
      throw e;
    },
  }),
  ($e = 0),
  (x.prototype.setState = function (e, t) {
    var _;
    (_ =
      this.__s != null && this.__s !== this.state
        ? this.__s
        : (this.__s = H({}, this.state))),
      typeof e == "function" && (e = e(H({}, _), this.props)),
      e && H(_, e),
      e != null && this.__v && (t && this._sb.push(t), ne(this));
  }),
  (x.prototype.forceUpdate = function (e) {
    this.__v && ((this.__e = !0), e && this.__h.push(e), ne(this));
  }),
  (x.prototype.render = U),
  (L = []),
  (Ne =
    typeof Promise == "function"
      ? Promise.prototype.then.bind(Promise.resolve())
      : setTimeout),
  (K = function (e, t) {
    return e.__v.__b - t.__v.__b;
  }),
  (D.__r = 0);
var W,
  y,
  G,
  le,
  j = 0,
  Ae = [],
  R = [],
  ce = s.__b,
  ue = s.__r,
  se = s.diffed,
  ae = s.__c,
  fe = s.unmount;
function te(e, t) {
  s.__h && s.__h(y, e, j || t), (j = 0);
  var _ = y.__H || (y.__H = { __: [], __h: [] });
  return e >= _.__.length && _.__.push({ __V: R }), _.__[e];
}
function S(e) {
  return (j = 1), Ge(Re, e);
}
function Ge(e, t, _) {
  var r = te(W++, 2);
  if (
    ((r.t = e),
    !r.__c &&
      ((r.__ = [
        _ ? _(t) : Re(void 0, t),
        function (l) {
          var a = r.__N ? r.__N[0] : r.__[0],
            p = r.t(a, l);
          a !== p && ((r.__N = [p, r.__[1]]), r.__c.setState({}));
        },
      ]),
      (r.__c = y),
      !y.u))
  ) {
    var i = function (l, a, p) {
      if (!r.__c.__H) return !0;
      var o = r.__c.__H.__.filter(function (f) {
        return f.__c;
      });
      if (
        o.every(function (f) {
          return !f.__N;
        })
      )
        return !n || n.call(this, l, a, p);
      var h = !1;
      return (
        o.forEach(function (f) {
          if (f.__N) {
            var u = f.__[0];
            (f.__ = f.__N), (f.__N = void 0), u !== f.__[0] && (h = !0);
          }
        }),
        !(!h && r.__c.props === l) && (!n || n.call(this, l, a, p))
      );
    };
    y.u = !0;
    var n = y.shouldComponentUpdate,
      c = y.componentWillUpdate;
    (y.componentWillUpdate = function (l, a, p) {
      if (this.__e) {
        var o = n;
        (n = void 0), i(l, a, p), (n = o);
      }
      c && c.call(this, l, a, p);
    }),
      (y.shouldComponentUpdate = i);
  }
  return r.__N || r.__;
}
function Q(e, t) {
  var _ = te(W++, 3);
  !s.__s && Me(_.__H, t) && ((_.__ = e), (_.i = t), y.__H.__h.push(_));
}
function Ze(e) {
  return (
    (j = 5),
    Ke(function () {
      return { current: e };
    }, [])
  );
}
function Ke(e, t) {
  var _ = te(W++, 7);
  return Me(_.__H, t) ? ((_.__V = e()), (_.i = t), (_.__h = e), _.__V) : _.__;
}
function Je() {
  for (var e; (e = Ae.shift()); )
    if (e.__P && e.__H)
      try {
        e.__H.__h.forEach(F), e.__H.__h.forEach(X), (e.__H.__h = []);
      } catch (t) {
        (e.__H.__h = []), s.__e(t, e.__v);
      }
}
(s.__b = function (e) {
  (y = null), ce && ce(e);
}),
  (s.__r = function (e) {
    ue && ue(e), (W = 0);
    var t = (y = e.__c).__H;
    t &&
      (G === y
        ? ((t.__h = []),
          (y.__h = []),
          t.__.forEach(function (_) {
            _.__N && (_.__ = _.__N), (_.__V = R), (_.__N = _.i = void 0);
          }))
        : (t.__h.forEach(F), t.__h.forEach(X), (t.__h = []), (W = 0))),
      (G = y);
  }),
  (s.diffed = function (e) {
    se && se(e);
    var t = e.__c;
    t &&
      t.__H &&
      (t.__H.__h.length &&
        ((Ae.push(t) !== 1 && le === s.requestAnimationFrame) ||
          ((le = s.requestAnimationFrame) || Qe)(Je)),
      t.__H.__.forEach(function (_) {
        _.i && (_.__H = _.i),
          _.__V !== R && (_.__ = _.__V),
          (_.i = void 0),
          (_.__V = R);
      })),
      (G = y = null);
  }),
  (s.__c = function (e, t) {
    t.some(function (_) {
      try {
        _.__h.forEach(F),
          (_.__h = _.__h.filter(function (r) {
            return !r.__ || X(r);
          }));
      } catch (r) {
        t.some(function (i) {
          i.__h && (i.__h = []);
        }),
          (t = []),
          s.__e(r, _.__v);
      }
    }),
      ae && ae(e, t);
  }),
  (s.unmount = function (e) {
    fe && fe(e);
    var t,
      _ = e.__c;
    _ &&
      _.__H &&
      (_.__H.__.forEach(function (r) {
        try {
          F(r);
        } catch (i) {
          t = i;
        }
      }),
      (_.__H = void 0),
      t && s.__e(t, _.__v));
  });
var pe = typeof requestAnimationFrame == "function";
function Qe(e) {
  var t,
    _ = function () {
      clearTimeout(r), pe && cancelAnimationFrame(t), setTimeout(e);
    },
    r = setTimeout(_, 100);
  pe && (t = requestAnimationFrame(_));
}
function F(e) {
  var t = y,
    _ = e.__c;
  typeof _ == "function" && ((e.__c = void 0), _()), (y = t);
}
function X(e) {
  var t = y;
  (e.__c = e.__()), (y = t);
}
function Me(e, t) {
  return (
    !e ||
    e.length !== t.length ||
    t.some(function (_, r) {
      return _ !== e[r];
    })
  );
}
function Re(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Xe(e, t) {
  for (var _ in t) e[_] = t[_];
  return e;
}
function de(e, t) {
  for (var _ in e) if (_ !== "__source" && !(_ in t)) return !0;
  for (var r in t) if (r !== "__source" && e[r] !== t[r]) return !0;
  return !1;
}
function he(e) {
  this.props = e;
}
((he.prototype = new x()).isPureReactComponent = !0),
  (he.prototype.shouldComponentUpdate = function (e, t) {
    return de(this.props, e) || de(this.state, t);
  });
var ve = s.__b;
s.__b = function (e) {
  e.type && e.type.__f && e.ref && ((e.props.ref = e.ref), (e.ref = null)),
    ve && ve(e);
};
var Ye = s.__e;
s.__e = function (e, t, _, r) {
  if (e.then) {
    for (var i, n = t; (n = n.__); )
      if ((i = n.__c) && i.__c)
        return t.__e == null && ((t.__e = _.__e), (t.__k = _.__k)), i.__c(e, t);
  }
  Ye(e, t, _, r);
};
var me = s.unmount;
function Fe(e, t, _) {
  return (
    e &&
      (e.__c &&
        e.__c.__H &&
        (e.__c.__H.__.forEach(function (r) {
          typeof r.__c == "function" && r.__c();
        }),
        (e.__c.__H = null)),
      (e = Xe({}, e)).__c != null &&
        (e.__c.__P === _ && (e.__c.__P = t), (e.__c = null)),
      (e.__k =
        e.__k &&
        e.__k.map(function (r) {
          return Fe(r, t, _);
        }))),
    e
  );
}
function Ie(e, t, _) {
  return (
    e &&
      ((e.__v = null),
      (e.__k =
        e.__k &&
        e.__k.map(function (r) {
          return Ie(r, t, _);
        })),
      e.__c &&
        e.__c.__P === t &&
        (e.__e && _.insertBefore(e.__e, e.__d),
        (e.__c.__e = !0),
        (e.__c.__P = _))),
    e
  );
}
function Z() {
  (this.__u = 0), (this.t = null), (this.__b = null);
}
function De(e) {
  var t = e.__.__c;
  return t && t.__a && t.__a(e);
}
function A() {
  (this.u = null), (this.o = null);
}
(s.unmount = function (e) {
  var t = e.__c;
  t && t.__R && t.__R(), t && e.__h === !0 && (e.type = null), me && me(e);
}),
  ((Z.prototype = new x()).__c = function (e, t) {
    var _ = t.__c,
      r = this;
    r.t == null && (r.t = []), r.t.push(_);
    var i = De(r.__v),
      n = !1,
      c = function () {
        n || ((n = !0), (_.__R = null), i ? i(l) : l());
      };
    _.__R = c;
    var l = function () {
        if (!--r.__u) {
          if (r.state.__a) {
            var p = r.state.__a;
            r.__v.__k[0] = Ie(p, p.__c.__P, p.__c.__O);
          }
          var o;
          for (r.setState({ __a: (r.__b = null) }); (o = r.t.pop()); )
            o.forceUpdate();
        }
      },
      a = t.__h === !0;
    r.__u++ || a || r.setState({ __a: (r.__b = r.__v.__k[0]) }), e.then(c, c);
  }),
  (Z.prototype.componentWillUnmount = function () {
    this.t = [];
  }),
  (Z.prototype.render = function (e, t) {
    if (this.__b) {
      if (this.__v.__k) {
        var _ = document.createElement("div"),
          r = this.__v.__k[0].__c;
        this.__v.__k[0] = Fe(this.__b, _, (r.__O = r.__P));
      }
      this.__b = null;
    }
    var i = t.__a && J(U, null, e.fallback);
    return i && (i.__h = null), [J(U, null, t.__a ? null : e.children), i];
  });
var ye = function (e, t, _) {
  if (
    (++_[1] === _[0] && e.o.delete(t),
    e.props.revealOrder && (e.props.revealOrder[0] !== "t" || !e.o.size))
  )
    for (_ = e.u; _; ) {
      for (; _.length > 3; ) _.pop()();
      if (_[1] < _[0]) break;
      e.u = _ = _[2];
    }
};
((A.prototype = new x()).__a = function (e) {
  var t = this,
    _ = De(t.__v),
    r = t.o.get(e);
  return (
    r[0]++,
    function (i) {
      var n = function () {
        t.props.revealOrder ? (r.push(i), ye(t, e, r)) : i();
      };
      _ ? _(n) : n();
    }
  );
}),
  (A.prototype.render = function (e) {
    (this.u = null), (this.o = new Map());
    var t = V(e.children);
    e.revealOrder && e.revealOrder[0] === "b" && t.reverse();
    for (var _ = t.length; _--; ) this.o.set(t[_], (this.u = [1, 0, this.u]));
    return e.children;
  }),
  (A.prototype.componentDidUpdate = A.prototype.componentDidMount =
    function () {
      var e = this;
      this.o.forEach(function (t, _) {
        ye(e, _, t);
      });
    });
var et =
    (typeof Symbol < "u" && Symbol.for && Symbol.for("react.element")) || 60103,
  tt =
    /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,
  _t = /^on(Ani|Tra|Tou|BeforeInp|Compo)/,
  nt = /[A-Z0-9]/g,
  rt = typeof document < "u",
  ot = function (e) {
    return (
      typeof Symbol < "u" && typeof Symbol() == "symbol"
        ? /fil|che|rad/
        : /fil|che|ra/
    ).test(e);
  };
function it(e, t, _) {
  return (
    t.__k == null && (t.textContent = ""),
    ee(e, t),
    typeof _ == "function" && _(),
    e ? e.__c : null
  );
}
function lt(e, t, _) {
  return Te(e, t), typeof _ == "function" && _(), e ? e.__c : null;
}
(x.prototype.isReactComponent = {}),
  [
    "componentWillMount",
    "componentWillReceiveProps",
    "componentWillUpdate",
  ].forEach(function (e) {
    Object.defineProperty(x.prototype, e, {
      configurable: !0,
      get: function () {
        return this["UNSAFE_" + e];
      },
      set: function (t) {
        Object.defineProperty(this, e, {
          configurable: !0,
          writable: !0,
          value: t,
        });
      },
    });
  });
var ge = s.event;
function ct() {}
function ut() {
  return this.cancelBubble;
}
function st() {
  return this.defaultPrevented;
}
s.event = function (e) {
  return (
    ge && (e = ge(e)),
    (e.persist = ct),
    (e.isPropagationStopped = ut),
    (e.isDefaultPrevented = st),
    (e.nativeEvent = e)
  );
};
var at = {
    enumerable: !1,
    configurable: !0,
    get: function () {
      return this.class;
    },
  },
  be = s.vnode;
s.vnode = function (e) {
  typeof e.type == "string" &&
    (function (t) {
      var _ = t.props,
        r = t.type,
        i = {};
      for (var n in _) {
        var c = _[n];
        if (
          !(
            (n === "value" && "defaultValue" in _ && c == null) ||
            (rt && n === "children" && r === "noscript") ||
            n === "class" ||
            n === "className"
          )
        ) {
          var l = n.toLowerCase();
          n === "defaultValue" && "value" in _ && _.value == null
            ? (n = "value")
            : n === "download" && c === !0
            ? (c = "")
            : l === "ondoubleclick"
            ? (n = "ondblclick")
            : l !== "onchange" ||
              (r !== "input" && r !== "textarea") ||
              ot(_.type)
            ? l === "onfocus"
              ? (n = "onfocusin")
              : l === "onblur"
              ? (n = "onfocusout")
              : _t.test(n)
              ? (n = l)
              : r.indexOf("-") === -1 && tt.test(n)
              ? (n = n.replace(nt, "-$&").toLowerCase())
              : c === null && (c = void 0)
            : (l = n = "oninput"),
            l === "oninput" && i[(n = l)] && (n = "oninputCapture"),
            (i[n] = c);
        }
      }
      r == "select" &&
        i.multiple &&
        Array.isArray(i.value) &&
        (i.value = V(_.children).forEach(function (a) {
          a.props.selected = i.value.indexOf(a.props.value) != -1;
        })),
        r == "select" &&
          i.defaultValue != null &&
          (i.value = V(_.children).forEach(function (a) {
            a.props.selected = i.multiple
              ? i.defaultValue.indexOf(a.props.value) != -1
              : i.defaultValue == a.props.value;
          })),
        _.class && !_.className
          ? ((i.class = _.class), Object.defineProperty(i, "className", at))
          : ((_.className && !_.class) || (_.class && _.className)) &&
            (i.class = i.className = _.className),
        (t.props = i);
    })(e),
    (e.$$typeof = et),
    be && be(e);
};
var ke = s.__r;
s.__r = function (e) {
  ke && ke(e), e.__c;
};
var Ce = s.diffed;
s.diffed = function (e) {
  Ce && Ce(e);
  var t = e.props,
    _ = e.__e;
  _ != null &&
    e.type === "textarea" &&
    "value" in t &&
    t.value !== _.value &&
    (_.value = t.value == null ? "" : t.value);
};
function ft(e) {
  return !!e.__k && (ee(null, e), !0);
}
function Ve(e) {
  return {
    render(t) {
      it(t, e);
    },
    unmount() {
      ft(e);
    },
  };
}
function pt(e, t) {
  return lt(t, e), Ve(e);
}
const dt = { createRoot: Ve, hydrateRoot: pt };
function ht(e) {
  return console.log("los ids son: " + e), e[0] === e[1];
}
var vt = 0;
function m(e, t, _, r, i, n) {
  var c,
    l,
    a = {};
  for (l in t) l == "ref" ? (c = t[l]) : (a[l] = t[l]);
  var p = {
    type: e,
    props: a,
    key: _,
    ref: c,
    __k: null,
    __: null,
    __b: 0,
    __e: null,
    __d: void 0,
    __c: null,
    __h: null,
    constructor: void 0,
    __v: --vt,
    __source: i,
    __self: n,
  };
  if (typeof e == "function" && (c = e.defaultProps))
    for (l in c) a[l] === void 0 && (a[l] = c[l]);
  return s.vnode && s.vnode(p), p;
}
const mt = ({
    image: e,
    name: t,
    id: _,
    onSelect: r,
    flipped: i,
    index: n,
  }) => {
    S(!1);
    const [c, l] = S({ cardId: _, cardName: t, cardImage: e, cardFlipped: i }),
      { cardId: a, cardName: p, cardImage: o, cardFlipped: h } = c,
      f = Ze(null);
    return (
      Q(() => {
        l((d) => ({ ...d, cardFlipped: i }));
      }, [i]),
      m("div", {
        children: m("li", {
          className: `card ${h ? "is-flipped" : ""} ${h ? "" : "disabled"}`,
          onClick: async (d) => {
            const w = d.currentTarget.value;
            r(w, n);
          },
          value: a,
          ref: f,
          children: [
            m("div", {
              className: "card-front",
              children: [
                m("img", { src: o, alt: p }),
                m("h2", { children: p }),
              ],
            }),
            m("div", {
              className: "card-back",
              children: m("img", { src: "../portal.png", alt: "Card Back" }),
            }),
          ],
        }),
      })
    );
  },
  yt = async () => {
    let e = [];
    for (let i = 0; i < 5; i++) {
      const n = Math.floor(Math.random() * 800) + 1;
      e.push(n);
    }
    const t = `https://rickandmortyapi.com/api/character/${e.join(",")}`;
    return await (await fetch(t)).json();
  },
  gt = "./assets/portalLoading-80538cbe.gif",
  bt = () =>
    m("div", {
      className: "loading-container",
      children: [
        m("img", {
          className: "loading-icon",
          src: gt,
          alt: "Rick and Morty loading icon",
        }),
        m("p", { children: "Loading..." }),
      ],
    }),
  kt = () => {
    const [e, t] = S([]),
      [_, r] = S([]),
      [i, n] = S([]),
      [c, l] = S({ moves: 0, toWin: 0 }),
      [a, p] = S(!0),
      [o, h] = S(!1),
      { moves: f, toWin: u } = c,
      d = () => {
        l({ ...c, moves: f + 1 });
      },
      w = () => {
        l({ ...c, toWin: u + 1 });
      },
      v = () => {
        t([]), p(!0), g(), l({ moves: 0, toWin: 0 }), h(!1);
      },
      g = async () => {
        const b = await yt();
        let P = 0;
        for (let $ = 0; $ < 2; $++)
          b.map((N) =>
            t((C) =>
              [
                ...C,
                {
                  id: N.id,
                  name: N.name,
                  image: N.image,
                  flipped: !0,
                  index: ++P,
                },
              ].sort(() => Math.random() - 0.5)
            )
          );
        p(!1);
      };
    Q(() => {
      g();
    }, []);
    const k = (b, P) => {
      d(), E(P, !1), r(($) => [...$, b]), n(($) => [...$, P]);
    };
    Q(() => {
      _.length > 1 &&
        (ht(_)
          ? setTimeout(() => {
              w();
            }, 250)
          : setTimeout(() => {
              i.map((b) => E(b, !0));
            }, 350),
        r([]),
        n([])),
        u > 4 && h(!0);
    }, [k]);
    const E = async (b, P) => {
      t(($) => [...$.map((N) => (N.index === b && (N.flipped = P), N))]);
    };
    return m("div", {
      children: [
        a && m(bt, {}),
        m("div", {
          className: "p-moves",
          children: m("p", { children: ["Moves: ", f] }),
        }),
        m("ul", {
          className: "card-list",
          children: [
            e.map((b, P) => m(mt, { ...b, onSelect: k }, P)),
            o &&
              m("div", {
                className: "win-message",
                children: [
                  m("p", { children: ["¡Ganaste con ", f, " movimientos!"] }),
                  m("button", { onClick: v, children: "Volver a empezar" }),
                ],
              }),
          ],
        }),
      ],
    });
  };
function Ct() {
  return m(U, { children: m(kt, {}) });
}
dt.createRoot(document.getElementById("root")).render(m(Ct, {}));

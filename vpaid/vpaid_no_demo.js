!(function (e, t) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = t())
    : "function" == typeof define && define.amd
    ? define([], t)
    : "object" == typeof exports
    ? (exports.VPAIDInterface = t())
    : (e.VPAIDInterface = t());
})(self, function () {
  return (
    (e = {
      241: function (e, t, n) {
        var r, i;
        !(function (o, u, a) {
          "use strict";
          void 0 ===
            (i =
              "function" ==
              typeof (r = function (e, t) {
                var n = (t || {})[e];
                function r(e, t, n) {
                  var r;
                  for (r in e)
                    if (
                      Object.prototype.hasOwnProperty.call(e, r) &&
                      t &&
                      !1 === t.call(n, e[r], r, e)
                    )
                      return;
                  return e;
                }
                function i(e, t, n) {
                  for (
                    var r,
                      i,
                      o = e._pubsub_topics,
                      u = o[t] ? o[t].slice(0) : [],
                      a = 0,
                      s = u.length;
                    a < s;
                    a += 1
                  ) {
                    if (
                      ((i = u[a].token),
                      (r = u[a]),
                      e._options.immediateExceptions)
                    )
                      r.callback(n, { name: t, token: i });
                    else
                      try {
                        r.callback(n, { name: t, token: i });
                      } catch (e) {
                        setTimeout(function () {
                          throw e;
                        }, 0);
                      }
                    !0 === r.once && e.unsubscribe(i);
                  }
                }
                function o(e) {
                  var t = Array.prototype.slice.call(e, 1);
                  return t.length <= 1 ? t[0] : t;
                }
                function u(e, t, n, r) {
                  return (
                    !!e._pubsub_topics[t] &&
                    (r
                      ? i(e, t, n)
                      : setTimeout(function () {
                          i(e, t, n);
                        }, 0),
                    !0)
                  );
                }
                function a(e) {
                  return (
                    (e = (function (e) {
                      var t, n, r, i;
                      if (null == e)
                        throw new TypeError(
                          "Cannot convert undefined or null to object",
                        );
                      for (t = Object(e), n = 1; n < arguments.length; n++)
                        if (null != (r = arguments[n]))
                          for (i in r)
                            Object.prototype.hasOwnProperty.call(r, i) &&
                              (t[i] = r[i]);
                      return t;
                    })({}, { immediateExceptions: !1 }, e)),
                    this instanceof a
                      ? ((this._pubsub_topics = {}),
                        (this._pubsub_uid = -1),
                        (this._options = e),
                        this)
                      : new a(e)
                  );
                }
                return (
                  (a.prototype.subscribe = function (e, t, n) {
                    var r = this._pubsub_topics,
                      i = (this._pubsub_uid += 1),
                      o = {};
                    if ("function" != typeof t)
                      throw new TypeError(
                        "When subscribing for an event, a callback function must be defined.",
                      );
                    return (
                      r[e] || (r[e] = []),
                      (o.token = i),
                      (o.callback = t),
                      (o.once = !!n),
                      r[e].push(o),
                      i
                    );
                  }),
                  (a.prototype.subscribeOnce = function (e, t) {
                    return this.subscribe(e, t, !0);
                  }),
                  (a.prototype.publish = function (e) {
                    return u(this, e, o(arguments), !1);
                  }),
                  (a.prototype.publishSync = function (e) {
                    return u(this, e, o(arguments), !0);
                  }),
                  (a.prototype.unsubscribe = function (e) {
                    var t,
                      n,
                      r = this._pubsub_topics,
                      i = !1;
                    for (t in r)
                      if (Object.prototype.hasOwnProperty.call(r, t) && r[t]) {
                        for (n = r[t].length; n; ) {
                          if (((n -= 1), r[t][n].token === e))
                            return (
                              r[t].splice(n, 1),
                              0 === r[t].length && delete r[t],
                              e
                            );
                          t === e &&
                            (r[t].splice(n, 1),
                            0 === r[t].length && delete r[t],
                            (i = !0));
                        }
                        if (!0 === i) return e;
                      }
                    return !1;
                  }),
                  (a.prototype.unsubscribeAll = function () {
                    return (this._pubsub_topics = {}), this;
                  }),
                  (a.prototype.hasSubscribers = function (e) {
                    var t = this._pubsub_topics,
                      n = !1;
                    return null == e
                      ? (r(t, function (e, t) {
                          if (t) return (n = !0), !1;
                        }),
                        n)
                      : Object.prototype.hasOwnProperty.call(t, e);
                  }),
                  (a.prototype.subscribers = function () {
                    var e = {};
                    return (
                      r(this._pubsub_topics, function (t, n) {
                        e[n] = t.slice(0);
                      }),
                      e
                    );
                  }),
                  (a.prototype.subscribersByTopic = function (e) {
                    return this._pubsub_topics[e]
                      ? this._pubsub_topics[e].slice(0)
                      : [];
                  }),
                  (a.prototype.alias = function (e) {
                    return (
                      r(e, function (t, n) {
                        var r;
                        a.prototype[n] &&
                          (a.prototype[e[n]] =
                            ((r = n),
                            function () {
                              return this[r].apply(this, arguments);
                            }));
                      }),
                      this
                    );
                  }),
                  (a.noConflict = function () {
                    return t && (t[e] = n), a;
                  }),
                  a
                );
              })
                ? r.call(t, n, t, e)
                : r) || (e.exports = i);
        })();
      },
      603: (e, t, n) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.default = void 0);
        var r,
          i = (function () {
            function e(e, t) {
              for (var n = 0; n < t.length; n++) {
                var r = t[n];
                (r.enumerable = r.enumerable || !1),
                  (r.configurable = !0),
                  "value" in r && (r.writable = !0),
                  Object.defineProperty(e, r.key, r);
              }
            }
            return function (t, n, r) {
              return n && e(t.prototype, n), r && e(t, r), t;
            };
          })(),
          o =
            (0, n(269).Observable)(
              (r = (function () {
                function e() {
                  !(function (e, t) {
                    if (!(e instanceof t))
                      throw new TypeError("Cannot call a class as a function");
                  })(this, e);
                }
                return (
                  i(e, [
                    { key: "play", value: function () {} },
                    { key: "pause", value: function () {} },
                    { key: "destroy", value: function () {} },
                    { key: "publish", value: function () {} },
                    { key: "subscribe", value: function () {} },
                    { key: "unsubscribe", value: function () {} },
                    {
                      key: "duration",
                      get: function () {
                        return -2;
                      },
                    },
                    {
                      key: "remaining",
                      get: function () {
                        return -2;
                      },
                    },
                    { key: "volume", set: function (e) {} },
                  ]),
                  e
                );
              })()),
            ) || r;
        t.default = o;
      },
      470: (e, t, n) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.default = void 0);
        var r = (function () {
            function e(e, t) {
              for (var n = 0; n < t.length; n++) {
                var r = t[n];
                (r.enumerable = r.enumerable || !1),
                  (r.configurable = !0),
                  "value" in r && (r.writable = !0),
                  Object.defineProperty(e, r.key, r);
              }
            }
            return function (t, n, r) {
              return n && e(t.prototype, n), r && e(t, r), t;
            };
          })(),
          i = (function (e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
              for (var n in e)
                Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return (t.default = e), t;
          })(n(28)),
          o = a(n(526)),
          u = a(n(333));
        function a(e) {
          return e && e.__esModule ? e : { default: e };
        }
        function s(e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        }
        function l(e, t) {
          if (!e)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called",
            );
          return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
        }
        var c = (function (e) {
          function t() {
            return (
              s(this, t),
              l(
                this,
                (t.__proto__ || Object.getPrototypeOf(t)).apply(
                  this,
                  arguments,
                ),
              )
            );
          }
          return (
            (function (e, t) {
              if ("function" != typeof t && null !== t)
                throw new TypeError(
                  "Super expression must either be null or a function, not " +
                    typeof t,
                );
              (e.prototype = Object.create(t && t.prototype, {
                constructor: {
                  value: e,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0,
                },
              })),
                t &&
                  (Object.setPrototypeOf
                    ? Object.setPrototypeOf(e, t)
                    : (e.__proto__ = t));
            })(t, e),
            r(t, [
              {
                key: "generateTimeEvents",
                value: function (e) {
                  var t = e / 4;
                  return [
                    new u.default(i.AD_VIDEO_FIRST_QUARTILE, t),
                    new u.default(i.AD_VIDEO_MIDPOINT, 2 * t),
                    new u.default(i.AD_VIDEO_THIRD_QUARTILE, 3 * t),
                  ];
                },
              },
            ]),
            t
          );
        })(o.default);
        t.default = c;
      },
      333: (e, t) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var n = (function () {
            function e(e, t) {
              for (var n = 0; n < t.length; n++) {
                var r = t[n];
                (r.enumerable = r.enumerable || !1),
                  (r.configurable = !0),
                  "value" in r && (r.writable = !0),
                  Object.defineProperty(e, r.key, r);
              }
            }
            return function (t, n, r) {
              return n && e(t.prototype, n), r && e(t, r), t;
            };
          })(),
          r = (function () {
            function e(t, n) {
              !(function (e, t) {
                if (!(e instanceof t))
                  throw new TypeError("Cannot call a class as a function");
              })(this, e),
                (this.eventName = t),
                (this.eventTime = n),
                (this.fired = !1);
            }
            return (
              n(e, [
                {
                  key: "didEventOccur",
                  value: function (e) {
                    if (!this.fired && e > this.eventTime)
                      return (this.fired = !0), this.eventName;
                  },
                },
              ]),
              e
            );
          })();
        t.default = r;
      },
      526: (e, t, n) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.default = void 0);
        var r = (function () {
            function e(e, t) {
              for (var n = 0; n < t.length; n++) {
                var r = t[n];
                (r.enumerable = r.enumerable || !1),
                  (r.configurable = !0),
                  "value" in r && (r.writable = !0),
                  Object.defineProperty(e, r.key, r);
              }
            }
            return function (t, n, r) {
              return n && e(t.prototype, n), r && e(t, r), t;
            };
          })(),
          i = (function (e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
              for (var n in e)
                Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return (t.default = e), t;
          })(n(28)),
          o = (function () {
            function e(t) {
              !(function (e, t) {
                if (!(e instanceof t))
                  throw new TypeError("Cannot call a class as a function");
              })(this, e),
                (this.lastTime = this.now),
                (this.UPDATE_THRESHOLD = 250),
                (this.timeEvents = this.generateTimeEvents(t));
            }
            return (
              r(e, [
                {
                  key: "generateTimeEvents",
                  value: function (e) {
                    return [];
                  },
                },
                {
                  key: "collectEvents",
                  value: function (e) {
                    return this.timeEvents.reduce(function (t, n) {
                      var r = n.didEventOccur(e);
                      return r && t.push(r), t;
                    }, []);
                  },
                },
                {
                  key: "onTimeUpdate",
                  value: function (e) {
                    var t = [],
                      n = e.target.currentTime;
                    return (
                      this.now > this.lastTime + this.UPDATE_THRESHOLD &&
                        (t = [].concat(
                          (function (e) {
                            if (Array.isArray(e)) {
                              for (
                                var t = 0, n = Array(e.length);
                                t < e.length;
                                t++
                              )
                                n[t] = e[t];
                              return n;
                            }
                            return Array.from(e);
                          })(this.collectEvents(n)),
                          [i.AD_REMAINING_TIME_CHANGE],
                        )),
                      (this.lastTime = this.now),
                      t
                    );
                  },
                },
                {
                  key: "now",
                  get: function () {
                    return new Date().getTime();
                  },
                },
              ]),
              e
            );
          })();
        t.default = o;
      },
      600: (e, t, n) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.default = void 0);
        var r,
          i = (function () {
            function e(e, t) {
              for (var n = 0; n < t.length; n++) {
                var r = t[n];
                (r.enumerable = r.enumerable || !1),
                  (r.configurable = !0),
                  "value" in r && (r.writable = !0),
                  Object.defineProperty(e, r.key, r);
              }
            }
            return function (t, n, r) {
              return n && e(t.prototype, n), r && e(t, r), t;
            };
          })(),
          o = n(269),
          u = (function (e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
              for (var n in e)
                Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return (t.default = e), t;
          })(n(28)),
          a = l(n(603)),
          s = l(n(470));
        function l(e) {
          return e && e.__esModule ? e : { default: e };
        }
        var c =
          (0, o.Listenable)(
            (r = (function (e) {
              function t(e, n, r) {
                var i = n.videoURL;
                !(function (e, t) {
                  if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
                })(this, t);
                var o = (function (e, t) {
                  if (!e)
                    throw new ReferenceError(
                      "this hasn't been initialised - super() hasn't been called",
                    );
                  return !t || ("object" != typeof t && "function" != typeof t)
                    ? e
                    : t;
                })(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
                if (!e || !i)
                  throw "Fatal Error - videoElement or videoURL not provided";
                return o.initializeState(e, i), o.registerEvents(e), o;
              }
              return (
                (function (e, t) {
                  if ("function" != typeof t && null !== t)
                    throw new TypeError(
                      "Super expression must either be null or a function, not " +
                        typeof t,
                    );
                  (e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                      value: e,
                      enumerable: !1,
                      writable: !0,
                      configurable: !0,
                    },
                  })),
                    t &&
                      (Object.setPrototypeOf
                        ? Object.setPrototypeOf(e, t)
                        : (e.__proto__ = t));
                })(t, e),
                i(t, [
                  {
                    key: "play",
                    value: function () {
                      this.videoEl && this.videoEl.play();
                    },
                  },
                  {
                    key: "pause",
                    value: function () {
                      this.videoEl && this.videoEl.pause();
                    },
                  },
                  { key: "initializeState", value: function (e, t) {} },
                  {
                    key: "registerEvents",
                    value: function (e) {
                      this.registerListener(
                        e,
                        "loadedmetadata",
                        this.onLoadedMetaData,
                        this,
                      ),
                        this.registerListener(e, "ended", this.onEnded, this);
                    },
                  },
                  {
                    key: "onLoadedMetaData",
                    value: function (e) {
                      (this.timeUpdateHandler = new s.default(
                        e.target.duration,
                      )),
                        this.registerListener(
                          e.target,
                          "timeupdate",
                          this.onTimeUpdate,
                          this,
                        ),
                        this.unregisterListener(e.target, "loadedmetadata"),
                        this.publish(u.AD_DURATION_CHANGE);
                    },
                  },
                  {
                    key: "onTimeUpdate",
                    value: function (e) {
                      var t = this.timeUpdateHandler.onTimeUpdate(e);
                      this.publishAll(t);
                    },
                  },
                  {
                    key: "onEnded",
                    value: function () {
                      this.publish(u.AD_VIDEO_COMPLETE),
                        this.publish(u.AD_STOPPED),
                        this.destory();
                    },
                  },
                  {
                    key: "destory",
                    value: function () {
                      this.videoEl &&
                        (this.videoEl.pause(), this.unregisterAll());
                    },
                  },
                  {
                    key: "duration",
                    get: function () {
                      return this.videoEl.duration > 0
                        ? this.videoEl.duration
                        : -2;
                    },
                  },
                  {
                    key: "remaining",
                    get: function () {
                      return this.videoEl.duration
                        ? this.videoEl.duration - this.videoEl.currentTime
                        : -2;
                    },
                  },
                  {
                    key: "volume",
                    get: function () {
                      this.videoEl && this.videoEl.volume;
                    },
                    set: function (e) {
                      this.videoEl && !isNaN(e) && (this.videoEl.volume = e);
                    },
                  },
                ]),
                t
              );
            })(a.default)),
          ) || r;
        t.default = c;
      },
      28: (e, t) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.AD_LOADED = "AdLoaded"),
          (t.AD_STARTED = "AdStarted"),
          (t.AD_STOPPED = "AdStopped"),
          (t.AD_SKIPPED = "AdSkipped"),
          (t.AD_SKIPPABLE_STATE_CHANGE = "AdSkippableStateChange"),
          (t.AD_SIZE_CHANGE = "AdSizeChange"),
          (t.AD_LINEAR_CHANGE = "AdLinearChange"),
          (t.AD_DURATION_CHANGE = "AdDurationChange"),
          (t.AD_EXPANDED_CHANGE = "AdExpandedChange"),
          (t.AD_REMAINING_TIME_CHANGE = "AdRemainingTimeChange"),
          (t.AD_VOLUME_CHANGE = "AdVolumeChange"),
          (t.AD_IMPRESSION = "AdImpression"),
          (t.AD_VIDEO_START = "AdVideoStart"),
          (t.AD_VIDEO_FIRST_QUARTILE = "AdVideoFirstQuartile"),
          (t.AD_VIDEO_MIDPOINT = "AdVideoMidpoint"),
          (t.AD_VIDEO_THIRD_QUARTILE = "AdVideoThirdQuartile"),
          (t.AD_VIDEO_COMPLETE = "AdVideoComplete"),
          (t.AD_CLICK_THRU = "AdClickThru"),
          (t.AD_INTERACTION = "AdInteraction"),
          (t.AD_USER_ACCEPT_INVITATION = "AdUserAcceptInvitation"),
          (t.AD_USER_MINIMIZE = "AdUserMinimize"),
          (t.AD_USER_CLOSE = "AdUserClose"),
          (t.AD_PAUSED = "AdPaused"),
          (t.AD_PLAYING = "AdPlaying"),
          (t.AD_LOG = "AdLog"),
          (t.AD_ERROR = "AdError");
      },
      269: (e, t, n) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.Listenable = t.Observable = void 0);
        var r,
          i = (function () {
            function e(e, t) {
              for (var n = 0; n < t.length; n++) {
                var r = t[n];
                (r.enumerable = r.enumerable || !1),
                  (r.configurable = !0),
                  "value" in r && (r.writable = !0),
                  Object.defineProperty(e, r.key, r);
              }
            }
            return function (t, n, r) {
              return n && e(t.prototype, n), r && e(t, r), t;
            };
          })(),
          o = (r = n(241)) && r.__esModule ? r : { default: r };
        function u(e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        }
        function a(e, t) {
          if (!e)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called",
            );
          return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
        }
        function s(e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Super expression must either be null or a function, not " +
                typeof t,
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: {
              value: e,
              enumerable: !1,
              writable: !0,
              configurable: !0,
            },
          })),
            t &&
              (Object.setPrototypeOf
                ? Object.setPrototypeOf(e, t)
                : (e.__proto__ = t));
        }
        (t.Observable = function (e) {
          return (function (e) {
            function t() {
              return (
                u(this, t),
                a(
                  this,
                  (t.__proto__ || Object.getPrototypeOf(t)).apply(
                    this,
                    arguments,
                  ),
                )
              );
            }
            return (
              s(t, e),
              i(t, [
                {
                  key: "subscribe",
                  value: function (e, t, n) {
                    return (
                      (this.pubsub = this.pubsub || new o.default()),
                      this.pubsub.subscribe(t, e.bind(n)),
                      this
                    );
                  },
                },
                {
                  key: "unsubscribe",
                  value: function (e, t) {
                    return (
                      (this.pubsub = this.pubsub || new o.default()),
                      this.pubsub.unsubscribe(t, e),
                      this
                    );
                  },
                },
                {
                  key: "publish",
                  value: function (e, t) {
                    return (
                      (this.pubsub = this.pubsub || new o.default()),
                      this.pubsub.publish(e, t),
                      this
                    );
                  },
                },
                {
                  key: "publishAll",
                  value: function (e) {
                    e &&
                      ((this.pubsub = this.pubsub || new o.default()),
                      (e = Array.isArray(e) ? e : [e]).forEach(
                        this.publish.bind(this),
                      ));
                  },
                },
              ]),
              t
            );
          })(e);
        }),
          (t.Listenable = function (e) {
            return (function (e) {
              function t() {
                return (
                  u(this, t),
                  a(
                    this,
                    (t.__proto__ || Object.getPrototypeOf(t)).apply(
                      this,
                      arguments,
                    ),
                  )
                );
              }
              return (
                s(t, e),
                i(t, [
                  {
                    key: "registerListener",
                    value: function (e, t, n, r) {
                      (this.listeners = this.listeners || []),
                        (n = n.bind(r)),
                        this.listeners.push({ el: e, eventName: t, fn: n }),
                        e.addEventListener(t, n);
                    },
                  },
                  {
                    key: "unregisterListener",
                    value: function (e, t) {
                      (this.listeners = this.listeners || []),
                        this.listeners
                          .filter(function (e) {
                            return e.eventName === t;
                          })
                          .forEach(function (t) {
                            return e.removeEventListener(t.eventName, t.fn);
                          }),
                        (this.listeners = this.listeners.filter(function (e) {
                          return e.eventName !== t;
                        }));
                    },
                  },
                  {
                    key: "unregisterAll",
                    value: function () {
                      (this.listeners = this.listeners || []),
                        this.listeners.forEach(function (e) {
                          return e.el.removeEventListener(e.eventName, e.fn);
                        }),
                        (this.listeners = []);
                    },
                  },
                ]),
                t
              );
            })(e);
          });
      },
      217: (e, t, n) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.ValidParser = t.ValidOverlay = t.ValidCreative = t.ValidateClass = void 0);
        var r = u(n(603)),
          i = u(n(973)),
          o = u(n(373));
        function u(e) {
          return e && e.__esModule ? e : { default: e };
        }
        var a = (t.ValidateClass = function (e, t) {
          return e.prototype instanceof t;
        });
        (t.ValidCreative = function (e) {
          if (void 0 === e) return !1;
          if (a(e, r.default)) return !0;
          throw "Invalid creative provided. Should inherit from BaseCreative or VideoCreative";
        }),
          (t.ValidOverlay = function (e) {
            if (void 0 === e) return !1;
            if (a(e, i.default)) return !0;
            throw "Invalid overlay provided. Should inherit from BaseOverlay or SimpleControls";
          }),
          (t.ValidParser = function (e) {
            if (void 0 === e) return !1;
            if (a(e, o.default)) return !0;
            throw "Invalid parser provided. Should inherit from BaseParser or JSONParser";
          });
      },
      973: (e, t, n) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.default = void 0);
        var r,
          i = (function () {
            function e(e, t) {
              for (var n = 0; n < t.length; n++) {
                var r = t[n];
                (r.enumerable = r.enumerable || !1),
                  (r.configurable = !0),
                  "value" in r && (r.writable = !0),
                  Object.defineProperty(e, r.key, r);
              }
            }
            return function (t, n, r) {
              return n && e(t.prototype, n), r && e(t, r), t;
            };
          })(),
          o =
            (0, n(269).Observable)(
              (r = (function () {
                function e() {
                  !(function (e, t) {
                    if (!(e instanceof t))
                      throw new TypeError("Cannot call a class as a function");
                  })(this, e);
                }
                return (
                  i(e, [
                    { key: "setSize", value: function () {} },
                    {
                      key: "generateControls",
                      value: function () {
                        return document.createDocumentFragment();
                      },
                    },
                    { key: "destroy", value: function () {} },
                    { key: "publish", value: function () {} },
                    { key: "subscribe", value: function () {} },
                    { key: "unsubscribe", value: function () {} },
                  ]),
                  e
                );
              })()),
            ) || r;
        t.default = o;
      },
      843: (e, t, n) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.default = void 0);
        var r,
          i,
          o = (function () {
            function e(e, t) {
              for (var n = 0; n < t.length; n++) {
                var r = t[n];
                (r.enumerable = r.enumerable || !1),
                  (r.configurable = !0),
                  "value" in r && (r.writable = !0),
                  Object.defineProperty(e, r.key, r);
              }
            }
            return function (t, n, r) {
              return n && e(t.prototype, n), r && e(t, r), t;
            };
          })(),
          u = n(269),
          a = (function (e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
              for (var n in e)
                Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return (t.default = e), t;
          })(n(28)),
          s = (i = n(973)) && i.__esModule ? i : { default: i },
          l =
            (0, u.Listenable)(
              (r = (function (e) {
                function t(e, n, r) {
                  var i = n.clickThrough;
                  r.size,
                    (function (e, t) {
                      if (!(e instanceof t))
                        throw new TypeError(
                          "Cannot call a class as a function",
                        );
                    })(this, t);
                  var o = (function (e, t) {
                    if (!e)
                      throw new ReferenceError(
                        "this hasn't been initialised - super() hasn't been called",
                      );
                    return !t ||
                      ("object" != typeof t && "function" != typeof t)
                      ? e
                      : t;
                  })(
                    this,
                    (t.__proto__ || Object.getPrototypeOf(t)).call(this),
                  );
                  if (void 0 === e)
                    throw "Fatal Error - slot element not provided";
                  o.slotEl = e;
                  var u = o.generateControls();
                  return e.appendChild(u), i && (o.clickThrough = i), o;
                }
                return (
                  (function (e, t) {
                    if ("function" != typeof t && null !== t)
                      throw new TypeError(
                        "Super expression must either be null or a function, not " +
                          typeof t,
                      );
                    (e.prototype = Object.create(t && t.prototype, {
                      constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0,
                      },
                    })),
                      t &&
                        (Object.setPrototypeOf
                          ? Object.setPrototypeOf(e, t)
                          : (e.__proto__ = t));
                  })(t, e),
                  o(t, [
                    {
                      key: "onClick",
                      value: function (e) {
                        e.preventDefault(),
                          this.publish(a.AD_CLICK_THRU),
                          window.open(this.clickThrough, "_blank");
                      },
                    },
                    {
                      key: "setSize",
                      value: function (e, t) {
                        this.slotEl.style =
                          "cursor: pointer; width: " +
                          e +
                          "px; height: " +
                          t +
                          "px;";
                      },
                    },
                    {
                      key: "generateControls",
                      value: function () {
                        return document.createDocumentFragment();
                      },
                    },
                    {
                      key: "destroy",
                      value: function () {
                        this.unregisterAll();
                      },
                    },
                  ]),
                  t
                );
              })(s.default)),
            ) || r;
        t.default = l;
      },
      373: (e, t) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var n = (function () {
            function e(e, t) {
              for (var n = 0; n < t.length; n++) {
                var r = t[n];
                (r.enumerable = r.enumerable || !1),
                  (r.configurable = !0),
                  "value" in r && (r.writable = !0),
                  Object.defineProperty(e, r.key, r);
              }
            }
            return function (t, n, r) {
              return n && e(t.prototype, n), r && e(t, r), t;
            };
          })(),
          r = (function () {
            function e() {
              !(function (e, t) {
                if (!(e instanceof t))
                  throw new TypeError("Cannot call a class as a function");
              })(this, e);
            }
            return (
              n(e, null, [
                {
                  key: "parseAdParameters",
                  value: function () {
                    return {};
                  },
                },
              ]),
              e
            );
          })();
        t.default = r;
      },
      819: (e, t, n) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.default = void 0);
        var r,
          i = (function () {
            function e(e, t) {
              for (var n = 0; n < t.length; n++) {
                var r = t[n];
                (r.enumerable = r.enumerable || !1),
                  (r.configurable = !0),
                  "value" in r && (r.writable = !0),
                  Object.defineProperty(e, r.key, r);
              }
            }
            return function (t, n, r) {
              return n && e(t.prototype, n), r && e(t, r), t;
            };
          })();
        function o(e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        }
        function u(e, t) {
          if (!e)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called",
            );
          return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
        }
        var a = (function (e) {
          function t() {
            return (
              o(this, t),
              u(
                this,
                (t.__proto__ || Object.getPrototypeOf(t)).apply(
                  this,
                  arguments,
                ),
              )
            );
          }
          return (
            (function (e, t) {
              if ("function" != typeof t && null !== t)
                throw new TypeError(
                  "Super expression must either be null or a function, not " +
                    typeof t,
                );
              (e.prototype = Object.create(t && t.prototype, {
                constructor: {
                  value: e,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0,
                },
              })),
                t &&
                  (Object.setPrototypeOf
                    ? Object.setPrototypeOf(e, t)
                    : (e.__proto__ = t));
            })(t, e),
            i(t, null, [
              {
                key: "parseAdParameters",
                value: function (e) {
                  return JSON.parse(e);
                },
              },
            ]),
            t
          );
        })(((r = n(373)) && r.__esModule ? r : { default: r }).default);
        t.default = a;
      },
      659: (e, t, n) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.VPAIDProperties = t.VPAIDMethods = void 0);
        var r = o(n(165)),
          i = o(n(64));
        function o(e) {
          return e && e.__esModule ? e : { default: e };
        }
        (t.VPAIDMethods = r.default), (t.VPAIDProperties = i.default);
      },
      165: (e, t, n) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var r =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            },
          i = (function () {
            function e(e, t) {
              for (var n = 0; n < t.length; n++) {
                var r = t[n];
                (r.enumerable = r.enumerable || !1),
                  (r.configurable = !0),
                  "value" in r && (r.writable = !0),
                  Object.defineProperty(e, r.key, r);
              }
            }
            return function (t, n, r) {
              return n && e(t.prototype, n), r && e(t, r), t;
            };
          })(),
          o = (function (e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
              for (var n in e)
                Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return (t.default = e), t;
          })(n(28));
        function u(e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        }
        function a(e, t) {
          if (!e)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called",
            );
          return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
        }
        t.default = function (e) {
          return (function (e) {
            function t() {
              return (
                u(this, t),
                a(
                  this,
                  (t.__proto__ || Object.getPrototypeOf(t)).apply(
                    this,
                    arguments,
                  ),
                )
              );
            }
            return (
              (function (e, t) {
                if ("function" != typeof t && null !== t)
                  throw new TypeError(
                    "Super expression must either be null or a function, not " +
                      typeof t,
                  );
                (e.prototype = Object.create(t && t.prototype, {
                  constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0,
                  },
                })),
                  t &&
                    (Object.setPrototypeOf
                      ? Object.setPrototypeOf(e, t)
                      : (e.__proto__ = t));
              })(t, e),
              i(t, [
                {
                  key: "initAd",
                  value: function (e, t, n, r) {
                    var i =
                        arguments.length > 4 && void 0 !== arguments[4]
                          ? arguments[4]
                          : {},
                      o =
                        arguments.length > 5 && void 0 !== arguments[5]
                          ? arguments[5]
                          : {};
                    return (
                      this.updateStateFromInitAd({
                        width: e,
                        height: t,
                        viewMode: n,
                        creativeData: i,
                        environmentVars: o,
                      }),
                      this.parseAdParameters(i.AdParameters),
                      this
                    );
                  },
                },
                {
                  key: "parseAdParameters",
                  value: function (e) {
                    try {
                      Promise.all([this.Parser.parseAdParameters(e)]).then(
                        this.onAdParametersParsed.bind(this),
                        this.onAdParseFail.bind(this),
                      );
                    } catch (e) {
                      this.onAdParseFail(e);
                    }
                    return this;
                  },
                },
                {
                  key: "startAd",
                  value: function () {
                    return (
                      (this.skippable = !0),
                      this.publish(o.AD_IMPRESSION),
                      this.publish(o.AD_STARTED),
                      this.publish(o.AD_VIDEO_START),
                      this.publish(o.AD_SKIPPABLE_STATE_CHANGE),
                      this
                    );
                  },
                },
                {
                  key: "skipAd",
                  value: function () {
                    return this.publish(o.AD_SKIPPED), this;
                  },
                },
                {
                  key: "stopAd",
                  value: function () {
                    return (
                      this.destroy && this.destroy(),
                      this.publish(o.AD_STOPPED),
                      this
                    );
                  },
                },
                {
                  key: "pauseAd",
                  value: function () {
                    return (
                      this.ad && this.ad.pause(),
                      this.publish(o.AD_PAUSED),
                      this
                    );
                  },
                },
                {
                  key: "resumeAd",
                  value: function () {
                    return (
                      this.ad && this.ad.play(),
                      this.publish(o.AD_PLAYING),
                      this
                    );
                  },
                },
                {
                  key: "collapseAd",
                  value: function () {
                    return (
                      (this.expanded = !1),
                      this.publish(o.AD_EXPANDED_CHANGE),
                      this
                    );
                  },
                },
                {
                  key: "expandAd",
                  value: function () {
                    return (
                      (this.expanded = !0),
                      this.publish(o.AD_EXPANDED_CHANGE),
                      this
                    );
                  },
                },
                {
                  key: "resizeAd",
                  value: function (e, t, n) {
                    return (
                      this.setSize(e, t),
                      (this.viewMode = n),
                      this.publish(o.AD_SIZE_CHANGE),
                      this
                    );
                  },
                },
                {
                  key: "setSize",
                  value: function (e, t) {
                    this.size &&
                      ((this.size.width = e), (this.size.height = t)),
                      this.adOverlay && this.adOverlay.setSize(e, t);
                  },
                },
                {
                  key: "updateStateFromInitAd",
                  value: function (e) {
                    var t = e.width,
                      n = e.height,
                      i = e.viewMode,
                      o = e.creativeData,
                      u = e.environmentVars;
                    this.setSize(t, n),
                      (this.viewMode = i),
                      (this.creativeData = r({}, o)),
                      (this.environmentVars = r({}, u));
                  },
                },
              ]),
              t
            );
          })(e);
        };
      },
      64: (e, t) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var n = (function () {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r);
            }
          }
          return function (t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t;
          };
        })();
        function r(e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        }
        function i(e, t) {
          if (!e)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called",
            );
          return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
        }
        t.default = function (e) {
          return (function (e) {
            function t() {
              return (
                r(this, t),
                i(
                  this,
                  (t.__proto__ || Object.getPrototypeOf(t)).apply(
                    this,
                    arguments,
                  ),
                )
              );
            }
            return (
              (function (e, t) {
                if ("function" != typeof t && null !== t)
                  throw new TypeError(
                    "Super expression must either be null or a function, not " +
                      typeof t,
                  );
                (e.prototype = Object.create(t && t.prototype, {
                  constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0,
                  },
                })),
                  t &&
                    (Object.setPrototypeOf
                      ? Object.setPrototypeOf(e, t)
                      : (e.__proto__ = t));
              })(t, e),
              n(t, [
                {
                  key: "getAdExpanded",
                  value: function () {
                    return this.expanded;
                  },
                },
                {
                  key: "getAdLinear",
                  value: function () {
                    return !0;
                  },
                },
                {
                  key: "getAdDuration",
                  value: function () {
                    return this.ad ? this.ad.duration : -2;
                  },
                },
                {
                  key: "getAdRemainingTime",
                  value: function () {
                    return this.ad ? this.ad.remaining : -2;
                  },
                },
                {
                  key: "getAdSkippableState",
                  value: function () {
                    return this.skippable;
                  },
                },
                {
                  key: "getAdVolume",
                  value: function () {
                    return this.ad && !isNaN(this.ad.volume)
                      ? this.ad.volume
                      : -1;
                  },
                },
                {
                  key: "getAdCompanions",
                  value: function () {
                    return "";
                  },
                },
                {
                  key: "getAdIcons",
                  value: function () {
                    return !1;
                  },
                },
                {
                  key: "getAdHeight",
                  value: function () {
                    return this.size ? this.size.height : -1;
                  },
                },
                {
                  key: "getAdWidth",
                  value: function () {
                    return this.size ? this.size.width : -1;
                  },
                },
                {
                  key: "handshakeVersion",
                  value: function () {
                    return "2.0";
                  },
                },
                {
                  key: "setAdVolume",
                  value: function (e) {
                    this.ad && (this.ad.volume = e);
                  },
                },
              ]),
              t
            );
          })(e);
        };
      },
      593: (e, t, n) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.default = void 0);
        var r,
          i = (function () {
            function e(e, t) {
              for (var n = 0; n < t.length; n++) {
                var r = t[n];
                (r.enumerable = r.enumerable || !1),
                  (r.configurable = !0),
                  "value" in r && (r.writable = !0),
                  Object.defineProperty(e, r.key, r);
              }
            }
            return function (t, n, r) {
              return n && e(t.prototype, n), r && e(t, r), t;
            };
          })(),
          o = n(269),
          u = n(217),
          a = (function (e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
              for (var n in e)
                Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return (t.default = e), t;
          })(n(28)),
          s = n(659),
          l = d(n(843)),
          c = d(n(819)),
          f = d(n(600));
        function d(e) {
          return e && e.__esModule ? e : { default: e };
        }
        function p(e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        }
        var h =
          (0, o.Observable)(
            (r =
              (0, s.VPAIDMethods)(
                (r =
                  (0, s.VPAIDProperties)(
                    (r = (function () {
                      function e() {
                        var t =
                          arguments.length > 0 && void 0 !== arguments[0]
                            ? arguments[0]
                            : {};
                        p(this, e),
                          this.initializeState(t),
                          this.attachVPAID(t);
                      }
                      return (
                        i(e, [
                          {
                            key: "attachVPAID",
                            value: function (e) {
                              e.window &&
                                !e.window.getVPAIDAd &&
                                (e.window.getVPAIDAd = this.getVPAIDAd.bind(
                                  this,
                                ));
                            },
                          },
                          {
                            key: "initializeState",
                            value: function (e) {
                              (this.expanded = !1),
                                (this.skippable = !1),
                                (this.size = { width: 640, height: 360 }),
                                this.selectComponents(e);
                            },
                          },
                          {
                            key: "selectComponents",
                            value: function (e) {
                              (this.AdCreative = (0, u.ValidCreative)(
                                e.creativeFormat,
                              )
                                ? e.creativeFormat
                                : f.default),
                                (this.Overlay = (0, u.ValidOverlay)(e.overlays)
                                  ? e.overlays
                                  : l.default),
                                (this.Parser = (0, u.ValidParser)(e.parser)
                                  ? e.parser
                                  : c.default);
                            },
                          },
                          {
                            key: "getVPAIDAd",
                            value: function () {
                              return this;
                            },
                          },
                          {
                            key: "onAdParseFail",
                            value: function (e) {
                              console.log(e),
                                this.destroy(),
                                this.publish(
                                  a.AD_ERROR,
                                  "Error parsing AdParameters - " +
                                    e.toString(),
                                ),
                                this.publish(a.AD_STOPPED);
                            },
                          },
                          {
                            key: "onAdParametersParsed",
                            value: function (e) {
                              var t = this,
                                n = (function (e, t) {
                                  if (Array.isArray(e)) return e;
                                  if (Symbol.iterator in Object(e))
                                    return (function (e, t) {
                                      var n = [],
                                        r = !0,
                                        i = !1,
                                        o = void 0;
                                      try {
                                        for (
                                          var u, a = e[Symbol.iterator]();
                                          !(r = (u = a.next()).done) &&
                                          (n.push(u.value),
                                          !t || n.length !== t);
                                          r = !0
                                        );
                                      } catch (e) {
                                        (i = !0), (o = e);
                                      } finally {
                                        try {
                                          !r && a.return && a.return();
                                        } finally {
                                          if (i) throw o;
                                        }
                                      }
                                      return n;
                                    })(e, t);
                                  throw new TypeError(
                                    "Invalid attempt to destructure non-iterable instance",
                                  );
                                })(e, 1)[0];
                              (this.ad = new this.AdCreative(
                                this.environmentVars.videoSlot,
                                n,
                                this,
                              )),
                                (this.adOverlay = new this.Overlay(
                                  this.environmentVars.slot,
                                  n,
                                  this,
                                )),
                                Object.values(a).forEach(function (e) {
                                  t.ad &&
                                    t.ad.subscribe &&
                                    t.ad.subscribe(
                                      t.onCreativeEvent.bind(t, e),
                                      e,
                                    ),
                                    t.adOverlay &&
                                      t.adOverlay.subscribe &&
                                      t.adOverlay.subscribe(
                                        t.onOverlayEvent.bind(t, e),
                                        e,
                                      );
                                }),
                                this.publish(a.AD_LOADED);
                            },
                          },
                          {
                            key: "onCreativeEvent",
                            value: function (e) {
                              this.publish(e);
                            },
                          },
                          {
                            key: "onOverlayEvent",
                            value: function (e) {
                              this.publish(e);
                            },
                          },
                          {
                            key: "destroy",
                            value: function () {
                              this.ad &&
                                "function" == typeof this.ad.destroy &&
                                this.ad.destroy(),
                                this.adOverlay &&
                                  "function" == typeof this.adOverlay.destroy &&
                                  this.adOverlay.destroy();
                            },
                          },
                        ]),
                        e
                      );
                    })()),
                  ) || r),
              ) || r),
          ) || r;
        t.default = h;
      },
      126: (e, t, n) => {
        "use strict";
        var r = h(n(593)),
          i = (function (e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
              for (var n in e)
                Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return (t.default = e), t;
          })(n(28)),
          o = h(n(603)),
          u = h(n(600)),
          a = h(n(333)),
          s = h(n(526)),
          l = h(n(470)),
          c = h(n(973)),
          f = h(n(843)),
          d = h(n(373)),
          p = h(n(819));
        function h(e) {
          return e && e.__esModule ? e : { default: e };
        }
        (r.default.VPAIDInterface = r.default),
          (r.default.VPAIDEvents = i),
          (r.default.BaseCreative = o.default),
          (r.default.VideoCreative = u.default),
          (r.default.TimeEvent = a.default),
          (r.default.TimeUpdateHandler = s.default),
          (r.default.QuartileTimeUpdateHandler = l.default),
          (r.default.BaseOverlay = c.default),
          (r.default.ClickThroughOverlay = f.default),
          (r.default.BaseParser = d.default),
          (r.default.JSONParser = p.default),
          (e.exports = r.default);
      },
    }),
    (t = {}),
    (function n(r) {
      var i = t[r];
      if (void 0 !== i) return i.exports;
      var o = (t[r] = { exports: {} });
      return e[r].call(o.exports, o, o.exports, n), o.exports;
    })(126)
  );
  var e, t;
});

!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.VPAIDInterface=t():e.VPAIDInterface=t()}("undefined"!=typeof self?self:this,function(){return function(e){function t(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=11)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.AD_LOADED="AdLoaded",t.AD_STARTED="AdStarted",t.AD_STOPPED="AdStopped",t.AD_SKIPPED="AdSkipped",t.AD_SKIPPABLE_STATE_CHANGE="AdSkippableStateChange",t.AD_SIZE_CHANGE="AdSizeChange",t.AD_LINEAR_CHANGE="AdLinearChange",t.AD_DURATION_CHANGE="AdDurationChange",t.AD_EXPANDED_CHANGE="AdExpandedChange",t.AD_REMAINING_TIME_CHANGE="AdRemainingTimeChange",t.AD_VOLUME_CHANGE="AdVolumeChange",t.AD_IMPRESSION="AdImpression",t.AD_VIDEO_START="AdVideoStart",t.AD_VIDEO_FIRST_QUARTILE="AdVideoFirstQuartile",t.AD_VIDEO_MIDPOINT="AdVideoMidpoint",t.AD_VIDEO_THIRD_QUARTILE="AdVideoThirdQuartile",t.AD_VIDEO_COMPLETE="AdVideoComplete",t.AD_CLICK_THRU="AdClickThru",t.AD_INTERACTION="AdInteraction",t.AD_USER_ACCEPT_INVITATION="AdUserAcceptInvitation",t.AD_USER_MINIMIZE="AdUserMinimize",t.AD_USER_CLOSE="AdUserClose",t.AD_PAUSED="AdPaused",t.AD_PLAYING="AdPlaying",t.AD_LOG="AdLog",t.AD_ERROR="AdError"},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.Listenable=t.Observable=void 0;var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(13),s=function(e){return e&&e.__esModule?e:{default:e}}(a);t.Observable=function(e){return function(e){function t(){return r(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return o(t,e),u(t,[{key:"subscribe",value:function(e,t,n){return this.pubsub=this.pubsub||new s.default,this.pubsub.subscribe(t,e.bind(n)),this}},{key:"unsubscribe",value:function(e,t){return this.pubsub=this.pubsub||new s.default,this.pubsub.unsubscribe(t,e),this}},{key:"publish",value:function(e,t){return this.pubsub=this.pubsub||new s.default,this.pubsub.publish(e,t),this}},{key:"publishAll",value:function(e){e&&(this.pubsub=this.pubsub||new s.default,e=Array.isArray(e)?e:[e],e.forEach(this.publish.bind(this)))}}]),t}(e)},t.Listenable=function(e){return function(e){function t(){return r(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return o(t,e),u(t,[{key:"registerListener",value:function(e,t,n,r){this.listeners=this.listeners||[],n=n.bind(r),this.listeners.push({el:e,eventName:t,fn:n}),e.addEventListener(t,n)}},{key:"unregisterListener",value:function(e,t){this.listeners=this.listeners||[],this.listeners.filter(function(e){return e.eventName===t}).forEach(function(t){return e.removeEventListener(t.eventName,t.fn)}),this.listeners=this.listeners.filter(function(e){return e.eventName!==t})}},{key:"unregisterAll",value:function(){this.listeners=this.listeners||[],this.listeners.forEach(function(e){return e.el.removeEventListener(e.eventName,e.fn)}),this.listeners=[]}}]),t}(e)}},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i,o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(1),a=(0,u.Observable)(i=function(){function e(){r(this,e)}return o(e,[{key:"play",value:function(){}},{key:"pause",value:function(){}},{key:"destroy",value:function(){}},{key:"publish",value:function(){}},{key:"subscribe",value:function(){}},{key:"unsubscribe",value:function(){}},{key:"duration",get:function(){return-2}},{key:"remaining",get:function(){return-2}},{key:"volume",set:function(e){}}]),e}())||i;t.default=a},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i,o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(1),a=(0,u.Observable)(i=function(){function e(){r(this,e)}return o(e,[{key:"setSize",value:function(){}},{key:"generateControls",value:function(){return document.createDocumentFragment()}},{key:"destroy",value:function(){}},{key:"publish",value:function(){}},{key:"subscribe",value:function(){}},{key:"unsubscribe",value:function(){}}]),e}())||i;t.default=a},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=function(){function e(){r(this,e)}return i(e,null,[{key:"parseAdParameters",value:function(){return{}}}]),e}();t.default=o},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u,a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(1),l=n(0),c=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(l),f=n(3),d=function(e){return e&&e.__esModule?e:{default:e}}(f),p=(0,s.Listenable)(u=function(e){function t(e,n,o){var u=n.clickThrough,a=o.size;r(this,t);var s=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));if(void 0===e)throw"Fatal Error - slot element not provided";s.slotEl=e;var l=s.generateControls();return e.appendChild(l),u&&(s.clickThrough=u,s.setSize(a.width,a.height),s.registerListener(e,"click",s.onClick,s)),s}return o(t,e),a(t,[{key:"onClick",value:function(e){e.preventDefault(),this.publish(c.AD_CLICK_THRU),window.open(this.clickThrough,"_blank")}},{key:"setSize",value:function(e,t){this.slotEl.style="cursor: pointer; width: "+e+"px; height: "+t+"px;"}},{key:"generateControls",value:function(){return document.createDocumentFragment()}},{key:"destroy",value:function(){this.unregisterAll()}}]),t}(d.default))||u;t.default=p},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(4),s=function(e){return e&&e.__esModule?e:{default:e}}(a),l=function(e){function t(){return r(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return o(t,e),u(t,null,[{key:"parseAdParameters",value:function(e){return JSON.parse(e)}}]),t}(s.default);t.default=l},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a,s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=n(1),c=n(0),f=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(c),d=n(2),p=r(d),h=n(8),v=r(h),y=(0,l.Listenable)(a=function(e){function t(e,n,r){var u=n.videoURL;i(this,t);var a=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));if(!e||!u)throw"Fatal Error - videoElement or videoURL not provided";return a.initializeState(e,u),a.registerEvents(e),a}return u(t,e),s(t,[{key:"play",value:function(){this.videoEl&&this.videoEl.play()}},{key:"pause",value:function(){this.videoEl&&this.videoEl.pause()}},{key:"initializeState",value:function(e,t){this.videoEl=e,this.videoURL=t,this.videoEl.autoplay=!0,this.videoEl.src=t,this.videoEl.play()}},{key:"registerEvents",value:function(e){this.registerListener(e,"loadedmetadata",this.onLoadedMetaData,this),this.registerListener(e,"ended",this.onEnded,this)}},{key:"onLoadedMetaData",value:function(e){this.timeUpdateHandler=new v.default(e.target.duration),this.registerListener(e.target,"timeupdate",this.onTimeUpdate,this),this.unregisterListener(e.target,"loadedmetadata"),this.publish(f.AD_DURATION_CHANGE)}},{key:"onTimeUpdate",value:function(e){var t=this.timeUpdateHandler.onTimeUpdate(e);this.publishAll(t)}},{key:"onEnded",value:function(){this.publish(f.AD_VIDEO_COMPLETE),this.publish(f.AD_STOPPED),this.destory()}},{key:"destory",value:function(){this.videoEl&&(this.videoEl.pause(),this.unregisterAll())}},{key:"duration",get:function(){return this.videoEl.duration>0?this.videoEl.duration:-2}},{key:"remaining",get:function(){return this.videoEl.duration?this.videoEl.duration-this.videoEl.currentTime:-2}},{key:"volume",get:function(){this.videoEl&&this.videoEl.volume},set:function(e){this.videoEl&&!isNaN(e)&&(this.videoEl.volume=e)}}]),t}(p.default))||a;t.default=y},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(0),l=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(s),c=n(9),f=r(c),d=n(10),p=r(d),h=function(e){function t(){return i(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return u(t,e),a(t,[{key:"generateTimeEvents",value:function(e){var t=e/4;return[new p.default(l.AD_VIDEO_FIRST_QUARTILE,t),new p.default(l.AD_VIDEO_MIDPOINT,2*t),new p.default(l.AD_VIDEO_THIRD_QUARTILE,3*t)]}}]),t}(f.default);t.default=h},function(e,t,n){"use strict";function r(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(0),a=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(u),s=function(){function e(t){i(this,e),this.lastTime=this.now,this.UPDATE_THRESHOLD=250,this.timeEvents=this.generateTimeEvents(t)}return o(e,[{key:"generateTimeEvents",value:function(e){return[]}},{key:"collectEvents",value:function(e){return this.timeEvents.reduce(function(t,n){var r=n.didEventOccur(e);return r&&t.push(r),t},[])}},{key:"onTimeUpdate",value:function(e){var t=[],n=e.target.currentTime;return this.now>this.lastTime+this.UPDATE_THRESHOLD&&(t=[].concat(r(this.collectEvents(n)),[a.AD_REMAINING_TIME_CHANGE])),this.lastTime=this.now,t}},{key:"now",get:function(){return(new Date).getTime()}}]),e}();t.default=s},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=function(){function e(t,n){r(this,e),this.eventName=t,this.eventTime=n,this.fired=!1}return i(e,[{key:"didEventOccur",value:function(e){if(!this.fired&&e>this.eventTime)return this.fired=!0,this.eventName}}]),e}();t.default=o},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var i=n(12),o=r(i),u=n(0),a=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(u),s=n(2),l=r(s),c=n(7),f=r(c),d=n(10),p=r(d),h=n(9),v=r(h),y=n(8),b=r(y),_=n(3),A=r(_),O=n(5),E=r(O),m=n(4),P=r(m),w=n(6),g=r(w);o.default.VPAIDInterface=o.default,o.default.VPAIDEvents=a,o.default.BaseCreative=l.default,o.default.VideoCreative=f.default,o.default.TimeEvent=p.default,o.default.TimeUpdateHandler=v.default,o.default.QuartileTimeUpdateHandler=b.default,o.default.BaseOverlay=A.default,o.default.ClickThroughOverlay=E.default,o.default.BaseParser=P.default,o.default.JSONParser=g.default,e.exports=o.default},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o,u=function(){function e(e,t){var n=[],r=!0,i=!1,o=void 0;try{for(var u,a=e[Symbol.iterator]();!(r=(u=a.next()).done)&&(n.push(u.value),!t||n.length!==t);r=!0);}catch(e){i=!0,o=e}finally{try{!r&&a.return&&a.return()}finally{if(i)throw o}}return n}return function(t,n){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(1),l=n(14),c=n(0),f=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(c),d=n(15),p=n(5),h=r(p),v=n(6),y=r(v),b=n(7),_=r(b),A=(0,s.Observable)(o=(0,d.VPAIDMethods)(o=(0,d.VPAIDProperties)(o=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};i(this,e),this.initializeState(t),this.attachVPAID(t)}return a(e,[{key:"attachVPAID",value:function(e){e.window&&!e.window.getVPAIDAd&&(e.window.getVPAIDAd=this.getVPAIDAd.bind(this))}},{key:"initializeState",value:function(e){this.expanded=!1,this.skippable=!1,this.size={width:640,height:360},this.selectComponents(e)}},{key:"selectComponents",value:function(e){this.AdCreative=(0,l.ValidCreative)(e.creativeFormat)?e.creativeFormat:_.default,this.Overlay=(0,l.ValidOverlay)(e.overlays)?e.overlays:h.default,this.Parser=(0,l.ValidParser)(e.parser)?e.parser:y.default}},{key:"getVPAIDAd",value:function(){return this}},{key:"onAdParseFail",value:function(e){console.log(e),this.destroy(),this.publish(f.AD_ERROR,"Error parsing AdParameters - "+e.toString()),this.publish(f.AD_STOPPED)}},{key:"onAdParametersParsed",value:function(e){var t=this,n=u(e,1),r=n[0];this.ad=new this.AdCreative(this.environmentVars.videoSlot,r,this),this.adOverlay=new this.Overlay(this.environmentVars.slot,r,this),Object.values(f).forEach(function(e){t.ad&&t.ad.subscribe&&t.ad.subscribe(t.onCreativeEvent.bind(t,e),e),t.adOverlay&&t.adOverlay.subscribe&&t.adOverlay.subscribe(t.onOverlayEvent.bind(t,e),e)}),this.publish(f.AD_LOADED)}},{key:"onCreativeEvent",value:function(e){this.publish(e)}},{key:"onOverlayEvent",value:function(e){this.publish(e)}},{key:"destroy",value:function(){this.ad&&"function"==typeof this.ad.destroy&&this.ad.destroy(),this.adOverlay&&"function"==typeof this.adOverlay.destroy&&this.adOverlay.destroy()}}]),e}())||o)||o)||o;t.default=A},function(e,t,n){var r,i;!function(o,u,a){"use strict";r=a,void 0!==(i="function"==typeof r?r.call(t,n,t,e):r)&&(e.exports=i)}(0,0,function(e,t){"use strict";function n(e){var t,n,r,i;if(null==e)throw new TypeError("Cannot convert undefined or null to object");for(t=Object(e),n=1;n<arguments.length;n++)if(null!=(r=arguments[n]))for(i in r)Object.prototype.hasOwnProperty.call(r,i)&&(t[i]=r[i]);return t}function r(e,t,n){var r;for(r in e)if(Object.prototype.hasOwnProperty.call(e,r)&&t&&!1===t.call(n,e[r],r,e))return;return e}function i(e){return function(){return this[e].apply(this,arguments)}}function o(e,t,n){for(var r,i,o=e._pubsub_topics,u=o[t]?o[t].slice(0):[],a=0,s=u.length;a<s;a+=1){if(i=u[a].token,r=u[a],e._options.immediateExceptions)r.callback(n,{name:t,token:i});else try{r.callback(n,{name:t,token:i})}catch(e){setTimeout(function(){throw e},0)}!0===r.once&&e.unsubscribe(i)}}function u(e){var t=Array.prototype.slice.call(e,1);return t.length<=1?t[0]:t}function a(e,t,n,r){return!!e._pubsub_topics[t]&&(r?o(e,t,n):setTimeout(function(){o(e,t,n)},0),!0)}function s(e){return e=n({},{immediateExceptions:!1},e),this instanceof s?(this._pubsub_topics={},this._pubsub_uid=-1,this._options=e,this):new s(e)}var l=(t||{})[e];return s.prototype.subscribe=function(e,t,n){var r=this._pubsub_topics,i=this._pubsub_uid+=1,o={};if("function"!=typeof t)throw new TypeError("When subscribing for an event, a callback function must be defined.");return r[e]||(r[e]=[]),o.token=i,o.callback=t,o.once=!!n,r[e].push(o),i},s.prototype.subscribeOnce=function(e,t){return this.subscribe(e,t,!0)},s.prototype.publish=function(e){return a(this,e,u(arguments),!1)},s.prototype.publishSync=function(e){return a(this,e,u(arguments),!0)},s.prototype.unsubscribe=function(e){var t,n,r=this._pubsub_topics,i=!1;for(t in r)if(Object.prototype.hasOwnProperty.call(r,t)&&r[t]){for(n=r[t].length;n;){if(n-=1,r[t][n].token===e)return r[t].splice(n,1),0===r[t].length&&delete r[t],e;t===e&&(r[t].splice(n,1),0===r[t].length&&delete r[t],i=!0)}if(!0===i)return e}return!1},s.prototype.unsubscribeAll=function(){return this._pubsub_topics={},this},s.prototype.hasSubscribers=function(e){var t=this._pubsub_topics,n=!1;return null==e?(r(t,function(e,t){if(t)return n=!0,!1}),n):Object.prototype.hasOwnProperty.call(t,e)},s.prototype.subscribers=function(){var e={};return r(this._pubsub_topics,function(t,n){e[n]=t.slice(0)}),e},s.prototype.subscribersByTopic=function(e){return this._pubsub_topics[e]?this._pubsub_topics[e].slice(0):[]},s.prototype.alias=function(e){return r(e,function(t,n){s.prototype[n]&&(s.prototype[e[n]]=i(n))}),this},s.noConflict=function(){return t&&(t[e]=l),s},s})},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.ValidParser=t.ValidOverlay=t.ValidCreative=t.ValidateClass=void 0;var i=n(2),o=r(i),u=n(3),a=r(u),s=n(4),l=r(s),c=t.ValidateClass=function(e,t){return e.prototype instanceof t};t.ValidCreative=function(e){if(void 0===e)return!1;if(c(e,o.default))return!0;throw"Invalid creative provided. Should inherit from BaseCreative or VideoCreative"},t.ValidOverlay=function(e){if(void 0===e)return!1;if(c(e,a.default))return!0;throw"Invalid overlay provided. Should inherit from BaseOverlay or SimpleControls"},t.ValidParser=function(e){if(void 0===e)return!1;if(c(e,l.default))return!0;throw"Invalid parser provided. Should inherit from BaseParser or JSONParser"}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.VPAIDProperties=t.VPAIDMethods=void 0;var i=n(16),o=r(i),u=n(17),a=r(u);t.VPAIDMethods=o.default,t.VPAIDProperties=a.default},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(0),l=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(s);t.default=function(e){return function(e){function t(){return r(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return o(t,e),a(t,[{key:"initAd",value:function(e,t,n,r){var i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:{};return this.updateStateFromInitAd({width:e,height:t,viewMode:n,creativeData:i,environmentVars:o}),this.parseAdParameters(i.AdParameters),this}},{key:"parseAdParameters",value:function(e){try{Promise.all([this.Parser.parseAdParameters(e)]).then(this.onAdParametersParsed.bind(this),this.onAdParseFail.bind(this))}catch(e){this.onAdParseFail(e)}return this}},{key:"startAd",value:function(){return this.skippable=!0,this.publish(l.AD_IMPRESSION),this.publish(l.AD_STARTED),this.publish(l.AD_VIDEO_START),this.publish(l.AD_SKIPPABLE_STATE_CHANGE),this}},{key:"skipAd",value:function(){return this.publish(l.AD_SKIPPED),this}},{key:"stopAd",value:function(){return this.destroy&&this.destroy(),this.publish(l.AD_STOPPED),this}},{key:"pauseAd",value:function(){return this.ad&&this.ad.pause(),this.publish(l.AD_PAUSED),this}},{key:"resumeAd",value:function(){return this.ad&&this.ad.play(),this.publish(l.AD_PLAYING),this}},{key:"collapseAd",value:function(){return this.expanded=!1,this.publish(l.AD_EXPANDED_CHANGE),this}},{key:"expandAd",value:function(){return this.expanded=!0,this.publish(l.AD_EXPANDED_CHANGE),this}},{key:"resizeAd",value:function(e,t,n){return this.setSize(e,t),this.viewMode=n,this.publish(l.AD_SIZE_CHANGE),this}},{key:"setSize",value:function(e,t){this.size&&(this.size.width=e,this.size.height=t),this.adOverlay&&this.adOverlay.setSize(e,t)}},{key:"updateStateFromInitAd",value:function(e){var t=e.width,n=e.height,r=e.viewMode,i=e.creativeData,o=e.environmentVars;this.setSize(t,n),this.viewMode=r,this.creativeData=u({},i),this.environmentVars=u({},o)}}]),t}(e)}},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();t.default=function(e){return function(e){function t(){return r(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return o(t,e),u(t,[{key:"getAdExpanded",value:function(){return this.expanded}},{key:"getAdLinear",value:function(){return!0}},{key:"getAdDuration",value:function(){return this.ad?this.ad.duration:-2}},{key:"getAdRemainingTime",value:function(){return this.ad?this.ad.remaining:-2}},{key:"getAdSkippableState",value:function(){return this.skippable}},{key:"getAdVolume",value:function(){return this.ad&&!isNaN(this.ad.volume)?this.ad.volume:-1}},{key:"getAdCompanions",value:function(){return""}},{key:"getAdIcons",value:function(){return!1}},{key:"getAdHeight",value:function(){return this.size?this.size.height:-1}},{key:"getAdWidth",value:function(){return this.size?this.size.width:-1}},{key:"handshakeVersion",value:function(){return"2.0"}},{key:"setAdVolume",value:function(e){this.ad&&(this.ad.volume=e)}}]),t}(e)}}])});
/*! For license information please see 998.d1678843.chunk.js.LICENSE.txt */
(self.webpackChunkart_of_war=self.webpackChunkart_of_war||[]).push([[998],{62998:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return M}});var n=r(29439),o=r(72791),a=r(15671),i=r(43144),s=r(60136),l=r(29388),u=r(37762),c=r(64687),d=r.n(c),f=r(52007),p=r.n(f),y=r(78262),h=r.n(y),v=r(86071),g=r.n(v),m=Object.defineProperty,P=Object.defineProperties,b=Object.getOwnPropertyDescriptors,w=Object.getOwnPropertySymbols,E=Object.prototype.hasOwnProperty,C=Object.prototype.propertyIsEnumerable,S=function(e,t,r){return t in e?m(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r},x=function(e,t){for(var r in t||(t={}))E.call(t,r)&&S(e,r,t[r]);if(w){var n,o=(0,u.Z)(w(t));try{for(o.s();!(n=o.n()).done;){r=n.value;C.call(t,r)&&S(e,r,t[r])}}catch(a){o.e(a)}finally{o.f()}}return e},_=function(e,t){return P(e,b(t))};function A(e,t){var r,n;if(e.videoId!==t.videoId)return!0;var o=(null==(r=e.opts)?void 0:r.playerVars)||{},a=(null==(n=t.opts)?void 0:n.playerVars)||{};return o.start!==a.start||o.end!==a.end}function O(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return _(x({},e),{height:0,width:0,playerVars:_(x({},e.playerVars),{autoplay:0,start:0,end:0})})}function k(e,t){return e.videoId!==t.videoId||!h()(O(e.opts),O(t.opts))}function I(e,t){var r,n,o,a;return e.id!==t.id||e.className!==t.className||(null==(r=e.opts)?void 0:r.width)!==(null==(n=t.opts)?void 0:n.width)||(null==(o=e.opts)?void 0:o.height)!==(null==(a=t.opts)?void 0:a.height)||e.iframeClassName!==t.iframeClassName||e.title!==t.title}var N={videoId:p().string,id:p().string,className:p().string,iframeClassName:p().string,style:p().object,title:p().string,loading:p().oneOf(["lazy","eager"]),opts:p().objectOf(p().any),onReady:p().func,onError:p().func,onPlay:p().func,onPause:p().func,onEnd:p().func,onStateChange:p().func,onPlaybackRateChange:p().func,onPlaybackQualityChange:p().func},j=function(e){(0,s.Z)(r,e);var t=(0,l.Z)(r);function r(e){var n;return(0,a.Z)(this,r),(n=t.call(this,e)).destroyPlayerPromise=void 0,n.onPlayerReady=function(e){var t,r;return null==(r=(t=n.props).onReady)?void 0:r.call(t,e)},n.onPlayerError=function(e){var t,r;return null==(r=(t=n.props).onError)?void 0:r.call(t,e)},n.onPlayerStateChange=function(e){var t,o,a,i,s,l,u,c;switch(null==(o=(t=n.props).onStateChange)||o.call(t,e),e.data){case r.PlayerState.ENDED:null==(i=(a=n.props).onEnd)||i.call(a,e);break;case r.PlayerState.PLAYING:null==(l=(s=n.props).onPlay)||l.call(s,e);break;case r.PlayerState.PAUSED:null==(c=(u=n.props).onPause)||c.call(u,e)}},n.onPlayerPlaybackRateChange=function(e){var t,r;return null==(r=(t=n.props).onPlaybackRateChange)?void 0:r.call(t,e)},n.onPlayerPlaybackQualityChange=function(e){var t,r;return null==(r=(t=n.props).onPlaybackQualityChange)?void 0:r.call(t,e)},n.destroyPlayer=function(){return n.internalPlayer?(n.destroyPlayerPromise=n.internalPlayer.destroy().then((function(){return n.destroyPlayerPromise=void 0})),n.destroyPlayerPromise):Promise.resolve()},n.createPlayer=function(){if("undefined"!==typeof document)if(n.destroyPlayerPromise)n.destroyPlayerPromise.then(n.createPlayer);else{var e=_(x({},n.props.opts),{videoId:n.props.videoId});n.internalPlayer=g()(n.container,e),n.internalPlayer.on("ready",n.onPlayerReady),n.internalPlayer.on("error",n.onPlayerError),n.internalPlayer.on("stateChange",n.onPlayerStateChange),n.internalPlayer.on("playbackRateChange",n.onPlayerPlaybackRateChange),n.internalPlayer.on("playbackQualityChange",n.onPlayerPlaybackQualityChange),(n.props.title||n.props.loading)&&n.internalPlayer.getIframe().then((function(e){n.props.title&&e.setAttribute("title",n.props.title),n.props.loading&&e.setAttribute("loading",n.props.loading)}))}},n.resetPlayer=function(){return n.destroyPlayer().then(n.createPlayer)},n.updatePlayer=function(){var e;null==(e=n.internalPlayer)||e.getIframe().then((function(e){n.props.id?e.setAttribute("id",n.props.id):e.removeAttribute("id"),n.props.iframeClassName?e.setAttribute("class",n.props.iframeClassName):e.removeAttribute("class"),n.props.opts&&n.props.opts.width?e.setAttribute("width",n.props.opts.width.toString()):e.removeAttribute("width"),n.props.opts&&n.props.opts.height?e.setAttribute("height",n.props.opts.height.toString()):e.removeAttribute("height"),n.props.title?e.setAttribute("title",n.props.title):e.setAttribute("title","YouTube video player"),n.props.loading?e.setAttribute("loading",n.props.loading):e.removeAttribute("loading")}))},n.getInternalPlayer=function(){return n.internalPlayer},n.updateVideo=function(){var e,t,r,o;if("undefined"!==typeof n.props.videoId&&null!==n.props.videoId){var a=!1,i={videoId:n.props.videoId};(null==(t=n.props.opts)?void 0:t.playerVars)&&(a=1===n.props.opts.playerVars.autoplay,"start"in n.props.opts.playerVars&&(i.startSeconds=n.props.opts.playerVars.start),"end"in n.props.opts.playerVars&&(i.endSeconds=n.props.opts.playerVars.end)),a?null==(r=n.internalPlayer)||r.loadVideoById(i):null==(o=n.internalPlayer)||o.cueVideoById(i)}else null==(e=n.internalPlayer)||e.stopVideo()},n.refContainer=function(e){n.container=e},n.container=null,n.internalPlayer=null,n}return(0,i.Z)(r,[{key:"componentDidMount",value:function(){this.createPlayer()}},{key:"componentDidUpdate",value:function(e){return t=this,r=null,n=d().mark((function t(){return d().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(I(e,this.props)&&this.updatePlayer(),!k(e,this.props)){t.next=4;break}return t.next=4,this.resetPlayer();case 4:A(e,this.props)&&this.updateVideo();case 5:case"end":return t.stop()}}),t,this)})),new Promise((function(e,o){var a=function(e){try{s(n.next(e))}catch(t){o(t)}},i=function(e){try{s(n.throw(e))}catch(t){o(t)}},s=function(t){return t.done?e(t.value):Promise.resolve(t.value).then(a,i)};s((n=n.apply(t,r)).next())}));var t,r,n}},{key:"componentWillUnmount",value:function(){this.destroyPlayer()}},{key:"render",value:function(){return o.createElement("div",{className:this.props.className,style:this.props.style},o.createElement("div",{id:this.props.id,className:this.props.iframeClassName,ref:this.refContainer}))}}]),r}(o.Component);j.propTypes=N,j.defaultProps={videoId:"",id:"",className:"",iframeClassName:"",style:{},title:"",loading:void 0,opts:{},onReady:function(){},onError:function(){},onPlay:function(){},onPause:function(){},onEnd:function(){},onStateChange:function(){},onPlaybackRateChange:function(){},onPlaybackQualityChange:function(){}},j.PlayerState={UNSTARTED:-1,ENDED:0,PLAYING:1,PAUSED:2,BUFFERING:3,CUED:5};var V=j,R=r(80184),D=function(e){var t=e.videoId,r=(0,o.useState)("700"),a=(0,n.Z)(r,2),i=a[0],s=a[1],l=function(){var e=window.innerWidth;s(e<=768?"300":e>768&&e<=1440?"500":"700")};(0,o.useEffect)((function(){return l(),window.addEventListener("resize",l),function(){window.removeEventListener("resize",l)}}),[]);var u={height:i,width:"100%",playerVars:{autoplay:0}};return(0,R.jsx)(V,{videoId:t,opts:u})},T=r(39230),U=r(33409),L={background:"WelcomePage_background__IqT45",textOverlay:"WelcomePage_textOverlay__LE8lx",counter:"WelcomePage_counter__5obtz"},M=function(){var e=(0,T.$G)().t;return(0,R.jsx)(R.Fragment,{children:(0,R.jsx)(U.Z,{children:(0,R.jsxs)("div",{className:L.container,children:[(0,R.jsx)("div",{className:L.background,children:(0,R.jsx)("div",{className:L.textOverlay,children:(0,R.jsxs)("p",{children:[e("home.description")," "]})})}),(0,R.jsx)("div",{className:L.trailerWrapper,children:(0,R.jsx)(D,{videoId:"4AfmuU7vW08"})})," ",(0,R.jsxs)("div",{className:L.counter,children:[" ",(0,R.jsx)("a",{href:"https://info.flagcounter.com/bGPE",children:(0,R.jsx)("img",{src:"https://s01.flagcounter.com/countxl/bGPE/bg_808080/txt_000000/border_CCCCCC/columns_8/maxflags_200/viewers_0/labels_0/pageviews_1/flags_0/percent_0/",alt:"Flag Counter",border:"0"})})]})]})})})}},78262:function(e){"use strict";e.exports=function e(t,r){if(t===r)return!0;if(t&&r&&"object"==typeof t&&"object"==typeof r){if(t.constructor!==r.constructor)return!1;var n,o,a;if(Array.isArray(t)){if((n=t.length)!=r.length)return!1;for(o=n;0!==o--;)if(!e(t[o],r[o]))return!1;return!0}if(t.constructor===RegExp)return t.source===r.source&&t.flags===r.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===r.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===r.toString();if((n=(a=Object.keys(t)).length)!==Object.keys(r).length)return!1;for(o=n;0!==o--;)if(!Object.prototype.hasOwnProperty.call(r,a[o]))return!1;for(o=n;0!==o--;){var i=a[o];if(!e(t[i],r[i]))return!1}return!0}return t!==t&&r!==r}},15102:function(e){function t(e,t){e.onload=function(){this.onerror=this.onload=null,t(null,e)},e.onerror=function(){this.onerror=this.onload=null,t(new Error("Failed to load "+this.src),e)}}function r(e,t){e.onreadystatechange=function(){"complete"!=this.readyState&&"loaded"!=this.readyState||(this.onreadystatechange=null,t(null,e))}}e.exports=function(e,n,o){var a=document.head||document.getElementsByTagName("head")[0],i=document.createElement("script");"function"===typeof n&&(o=n,n={}),n=n||{},o=o||function(){},i.type=n.type||"text/javascript",i.charset=n.charset||"utf8",i.async=!("async"in n)||!!n.async,i.src=e,n.attrs&&function(e,t){for(var r in t)e.setAttribute(r,t[r])}(i,n.attrs),n.text&&(i.text=""+n.text),("onload"in i?t:r)(i,o),i.onload||t(i,o),a.appendChild(i)}},83457:function(e){"use strict";var t;t=function(){var e={},t={};return e.on=function(e,r){var n={name:e,handler:r};return t[e]=t[e]||[],t[e].unshift(n),n},e.off=function(e){var r=t[e.name].indexOf(e);-1!==r&&t[e.name].splice(r,1)},e.trigger=function(e,r){var n,o=t[e];if(o)for(n=o.length;n--;)o[n].handler(r)},e},e.exports=t},16364:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,o=r(35439),a=(n=o)&&n.__esModule?n:{default:n};t.default={pauseVideo:{acceptableStates:[a.default.ENDED,a.default.PAUSED],stateChangeRequired:!1},playVideo:{acceptableStates:[a.default.ENDED,a.default.PLAYING],stateChangeRequired:!1},seekTo:{acceptableStates:[a.default.ENDED,a.default.PLAYING,a.default.PAUSED],stateChangeRequired:!0,timeout:3e3}},e.exports=t.default},71698:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=s(r(42788)),o=s(r(65506)),a=s(r(30626)),i=s(r(16364));function s(e){return e&&e.__esModule?e:{default:e}}var l=(0,n.default)("youtube-player"),u={proxyEvents:function(e){var t={},r=function(r){var n="on"+r.slice(0,1).toUpperCase()+r.slice(1);t[n]=function(t){l('event "%s"',n,t),e.trigger(r,t)}},n=!0,o=!1,i=void 0;try{for(var s,u=a.default[Symbol.iterator]();!(n=(s=u.next()).done);n=!0){r(s.value)}}catch(c){o=!0,i=c}finally{try{!n&&u.return&&u.return()}finally{if(o)throw i}}return t},promisifyPlayer:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r={},n=function(n){t&&i.default[n]?r[n]=function(){for(var t=arguments.length,r=Array(t),o=0;o<t;o++)r[o]=arguments[o];return e.then((function(e){var t=i.default[n],o=e.getPlayerState(),a=e[n].apply(e,r);return t.stateChangeRequired||Array.isArray(t.acceptableStates)&&-1===t.acceptableStates.indexOf(o)?new Promise((function(r){e.addEventListener("onStateChange",(function n(){var o=e.getPlayerState(),a=void 0;"number"===typeof t.timeout&&(a=setTimeout((function(){e.removeEventListener("onStateChange",n),r()}),t.timeout)),Array.isArray(t.acceptableStates)&&-1!==t.acceptableStates.indexOf(o)&&(e.removeEventListener("onStateChange",n),clearTimeout(a),r())}))})).then((function(){return a})):a}))}:r[n]=function(){for(var t=arguments.length,r=Array(t),o=0;o<t;o++)r[o]=arguments[o];return e.then((function(e){return e[n].apply(e,r)}))}},a=!0,s=!1,l=void 0;try{for(var u,c=o.default[Symbol.iterator]();!(a=(u=c.next()).done);a=!0){var d=u.value;n(d)}}catch(f){s=!0,l=f}finally{try{!a&&c.return&&c.return()}finally{if(s)throw l}}return r}};t.default=u,e.exports=t.default},35439:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={BUFFERING:3,ENDED:0,PAUSED:2,PLAYING:1,UNSTARTED:-1,VIDEO_CUED:5},e.exports=t.default},30626:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=["ready","stateChange","playbackQualityChange","playbackRateChange","error","apiChange","volumeChange"],e.exports=t.default},65506:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=["cueVideoById","loadVideoById","cueVideoByUrl","loadVideoByUrl","playVideo","pauseVideo","stopVideo","getVideoLoadedFraction","cuePlaylist","loadPlaylist","nextVideo","previousVideo","playVideoAt","setShuffle","setLoop","getPlaylist","getPlaylistIndex","setOption","mute","unMute","isMuted","setVolume","getVolume","seekTo","getPlayerState","getPlaybackRate","setPlaybackRate","getAvailablePlaybackRates","getPlaybackQuality","setPlaybackQuality","getAvailableQualityLevels","getCurrentTime","getDuration","removeEventListener","getVideoUrl","getVideoEmbedCode","getOptions","getOption","addEventListener","destroy","setSize","getIframe"],e.exports=t.default},86071:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=s(r(83457)),a=s(r(31642)),i=s(r(71698));function s(e){return e&&e.__esModule?e:{default:e}}var l=void 0;t.default=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2&&void 0!==arguments[2]&&arguments[2],s=(0,o.default)();if(l||(l=(0,a.default)(s)),t.events)throw new Error("Event handlers cannot be overwritten.");if("string"===typeof e&&!document.getElementById(e))throw new Error('Element "'+e+'" does not exist.');t.events=i.default.proxyEvents(s);var u=new Promise((function(r){"object"===("undefined"===typeof e?"undefined":n(e))&&e.playVideo instanceof Function?r(e):l.then((function(n){var o=new n.Player(e,t);return s.on("ready",(function(){r(o)})),null}))})),c=i.default.promisifyPlayer(u,r);return c.on=s.on,c.off=s.off,c},e.exports=t.default},31642:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,o=r(15102),a=(n=o)&&n.__esModule?n:{default:n};t.default=function(e){return new Promise((function(t){if(window.YT&&window.YT.Player&&window.YT.Player instanceof Function)t(window.YT);else{var r="http:"===window.location.protocol?"http:":"https:";(0,a.default)(r+"//www.youtube.com/iframe_api",(function(t){t&&e.trigger("error",t)}));var n=window.onYouTubeIframeAPIReady;window.onYouTubeIframeAPIReady=function(){n&&n(),t(window.YT)}}}))},e.exports=t.default},42788:function(e,t,r){function n(){var e;try{e=t.storage.debug}catch(r){}return!e&&"undefined"!==typeof process&&"env"in process&&(e={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.DEBUG),e}(t=e.exports=r(3572)).log=function(){return"object"===typeof console&&console.log&&Function.prototype.apply.call(console.log,console,arguments)},t.formatArgs=function(e){var r=this.useColors;if(e[0]=(r?"%c":"")+this.namespace+(r?" %c":" ")+e[0]+(r?"%c ":" ")+"+"+t.humanize(this.diff),!r)return;var n="color: "+this.color;e.splice(1,0,n,"color: inherit");var o=0,a=0;e[0].replace(/%[a-zA-Z%]/g,(function(e){"%%"!==e&&(o++,"%c"===e&&(a=o))})),e.splice(a,0,n)},t.save=function(e){try{null==e?t.storage.removeItem("debug"):t.storage.debug=e}catch(r){}},t.load=n,t.useColors=function(){if("undefined"!==typeof window&&window.process&&"renderer"===window.process.type)return!0;return"undefined"!==typeof document&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||"undefined"!==typeof window&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||"undefined"!==typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||"undefined"!==typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)},t.storage="undefined"!=typeof chrome&&"undefined"!=typeof chrome.storage?chrome.storage.local:function(){try{return window.localStorage}catch(e){}}(),t.colors=["lightseagreen","forestgreen","goldenrod","dodgerblue","darkorchid","crimson"],t.formatters.j=function(e){try{return JSON.stringify(e)}catch(t){return"[UnexpectedJSONParseError]: "+t.message}},t.enable(n())},3572:function(e,t,r){var n;function o(e){function r(){if(r.enabled){var e=r,o=+new Date,a=o-(n||o);e.diff=a,e.prev=n,e.curr=o,n=o;for(var i=new Array(arguments.length),s=0;s<i.length;s++)i[s]=arguments[s];i[0]=t.coerce(i[0]),"string"!==typeof i[0]&&i.unshift("%O");var l=0;i[0]=i[0].replace(/%([a-zA-Z%])/g,(function(r,n){if("%%"===r)return r;l++;var o=t.formatters[n];if("function"===typeof o){var a=i[l];r=o.call(e,a),i.splice(l,1),l--}return r})),t.formatArgs.call(e,i);var u=r.log||t.log||console.log.bind(console);u.apply(e,i)}}return r.namespace=e,r.enabled=t.enabled(e),r.useColors=t.useColors(),r.color=function(e){var r,n=0;for(r in e)n=(n<<5)-n+e.charCodeAt(r),n|=0;return t.colors[Math.abs(n)%t.colors.length]}(e),"function"===typeof t.init&&t.init(r),r}(t=e.exports=o.debug=o.default=o).coerce=function(e){return e instanceof Error?e.stack||e.message:e},t.disable=function(){t.enable("")},t.enable=function(e){t.save(e),t.names=[],t.skips=[];for(var r=("string"===typeof e?e:"").split(/[\s,]+/),n=r.length,o=0;o<n;o++)r[o]&&("-"===(e=r[o].replace(/\*/g,".*?"))[0]?t.skips.push(new RegExp("^"+e.substr(1)+"$")):t.names.push(new RegExp("^"+e+"$")))},t.enabled=function(e){var r,n;for(r=0,n=t.skips.length;r<n;r++)if(t.skips[r].test(e))return!1;for(r=0,n=t.names.length;r<n;r++)if(t.names[r].test(e))return!0;return!1},t.humanize=r(29426),t.names=[],t.skips=[],t.formatters={}},29426:function(e){var t=1e3,r=60*t,n=60*r,o=24*n,a=365.25*o;function i(e,t,r){if(!(e<t))return e<1.5*t?Math.floor(e/t)+" "+r:Math.ceil(e/t)+" "+r+"s"}e.exports=function(e,s){s=s||{};var l,u=typeof e;if("string"===u&&e.length>0)return function(e){if((e=String(e)).length>100)return;var i=/^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(e);if(!i)return;var s=parseFloat(i[1]);switch((i[2]||"ms").toLowerCase()){case"years":case"year":case"yrs":case"yr":case"y":return s*a;case"days":case"day":case"d":return s*o;case"hours":case"hour":case"hrs":case"hr":case"h":return s*n;case"minutes":case"minute":case"mins":case"min":case"m":return s*r;case"seconds":case"second":case"secs":case"sec":case"s":return s*t;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return s;default:return}}(e);if("number"===u&&!1===isNaN(e))return s.long?i(l=e,o,"day")||i(l,n,"hour")||i(l,r,"minute")||i(l,t,"second")||l+" ms":function(e){if(e>=o)return Math.round(e/o)+"d";if(e>=n)return Math.round(e/n)+"h";if(e>=r)return Math.round(e/r)+"m";if(e>=t)return Math.round(e/t)+"s";return e+"ms"}(e);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(e))}}}]);
//# sourceMappingURL=998.d1678843.chunk.js.map
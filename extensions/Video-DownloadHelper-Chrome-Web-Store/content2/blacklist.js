var _e=Object.create;var G=Object.defineProperty;var ye=Object.getOwnPropertyDescriptor;var Ae=Object.getOwnPropertyNames;var xe=Object.getPrototypeOf,he=Object.prototype.hasOwnProperty;var we=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var be=(e,t,r,a)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of Ae(t))!he.call(e,n)&&n!==r&&G(e,n,{get:()=>t[n],enumerable:!(a=ye(t,n))||a.enumerable});return e};var $=(e,t,r)=>(r=e!=null?_e(xe(e)):{},be(t||!e||!e.__esModule?G(r,"default",{value:e,enumerable:!0}):r,e));var R=we((Q,K)=>{(function(e,t){if(typeof define=="function"&&define.amd)define("webextension-polyfill",["module"],t);else if(typeof Q<"u")t(K);else{var r={exports:{}};t(r),e.browser=r.exports}})(typeof globalThis<"u"?globalThis:typeof self<"u"?self:Q,function(e){"use strict";if(!globalThis.chrome?.runtime?.id)throw new Error("This script should only be loaded in a browser extension.");if(typeof globalThis.browser>"u"||Object.getPrototypeOf(globalThis.browser)!==Object.prototype){let t="The message port closed before a response was received.",r=a=>{let n={alarms:{clear:{minArgs:0,maxArgs:1},clearAll:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getAll:{minArgs:0,maxArgs:0}},bookmarks:{create:{minArgs:1,maxArgs:1},get:{minArgs:1,maxArgs:1},getChildren:{minArgs:1,maxArgs:1},getRecent:{minArgs:1,maxArgs:1},getSubTree:{minArgs:1,maxArgs:1},getTree:{minArgs:0,maxArgs:0},move:{minArgs:2,maxArgs:2},remove:{minArgs:1,maxArgs:1},removeTree:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1},update:{minArgs:2,maxArgs:2}},browserAction:{disable:{minArgs:0,maxArgs:1,fallbackToNoCallback:!0},enable:{minArgs:0,maxArgs:1,fallbackToNoCallback:!0},getBadgeBackgroundColor:{minArgs:1,maxArgs:1},getBadgeText:{minArgs:1,maxArgs:1},getPopup:{minArgs:1,maxArgs:1},getTitle:{minArgs:1,maxArgs:1},openPopup:{minArgs:0,maxArgs:0},setBadgeBackgroundColor:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setBadgeText:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setIcon:{minArgs:1,maxArgs:1},setPopup:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setTitle:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},browsingData:{remove:{minArgs:2,maxArgs:2},removeCache:{minArgs:1,maxArgs:1},removeCookies:{minArgs:1,maxArgs:1},removeDownloads:{minArgs:1,maxArgs:1},removeFormData:{minArgs:1,maxArgs:1},removeHistory:{minArgs:1,maxArgs:1},removeLocalStorage:{minArgs:1,maxArgs:1},removePasswords:{minArgs:1,maxArgs:1},removePluginData:{minArgs:1,maxArgs:1},settings:{minArgs:0,maxArgs:0}},commands:{getAll:{minArgs:0,maxArgs:0}},contextMenus:{remove:{minArgs:1,maxArgs:1},removeAll:{minArgs:0,maxArgs:0},update:{minArgs:2,maxArgs:2}},cookies:{get:{minArgs:1,maxArgs:1},getAll:{minArgs:1,maxArgs:1},getAllCookieStores:{minArgs:0,maxArgs:0},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}},devtools:{inspectedWindow:{eval:{minArgs:1,maxArgs:2,singleCallbackArg:!1}},panels:{create:{minArgs:3,maxArgs:3,singleCallbackArg:!0},elements:{createSidebarPane:{minArgs:1,maxArgs:1}}}},downloads:{cancel:{minArgs:1,maxArgs:1},download:{minArgs:1,maxArgs:1},erase:{minArgs:1,maxArgs:1},getFileIcon:{minArgs:1,maxArgs:2},open:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},pause:{minArgs:1,maxArgs:1},removeFile:{minArgs:1,maxArgs:1},resume:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1},show:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},extension:{isAllowedFileSchemeAccess:{minArgs:0,maxArgs:0},isAllowedIncognitoAccess:{minArgs:0,maxArgs:0}},history:{addUrl:{minArgs:1,maxArgs:1},deleteAll:{minArgs:0,maxArgs:0},deleteRange:{minArgs:1,maxArgs:1},deleteUrl:{minArgs:1,maxArgs:1},getVisits:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1}},i18n:{detectLanguage:{minArgs:1,maxArgs:1},getAcceptLanguages:{minArgs:0,maxArgs:0}},identity:{launchWebAuthFlow:{minArgs:1,maxArgs:1}},idle:{queryState:{minArgs:1,maxArgs:1}},management:{get:{minArgs:1,maxArgs:1},getAll:{minArgs:0,maxArgs:0},getSelf:{minArgs:0,maxArgs:0},setEnabled:{minArgs:2,maxArgs:2},uninstallSelf:{minArgs:0,maxArgs:1}},notifications:{clear:{minArgs:1,maxArgs:1},create:{minArgs:1,maxArgs:2},getAll:{minArgs:0,maxArgs:0},getPermissionLevel:{minArgs:0,maxArgs:0},update:{minArgs:2,maxArgs:2}},pageAction:{getPopup:{minArgs:1,maxArgs:1},getTitle:{minArgs:1,maxArgs:1},hide:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setIcon:{minArgs:1,maxArgs:1},setPopup:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setTitle:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},show:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},permissions:{contains:{minArgs:1,maxArgs:1},getAll:{minArgs:0,maxArgs:0},remove:{minArgs:1,maxArgs:1},request:{minArgs:1,maxArgs:1}},runtime:{getBackgroundPage:{minArgs:0,maxArgs:0},getPlatformInfo:{minArgs:0,maxArgs:0},openOptionsPage:{minArgs:0,maxArgs:0},requestUpdateCheck:{minArgs:0,maxArgs:0},sendMessage:{minArgs:1,maxArgs:3},sendNativeMessage:{minArgs:2,maxArgs:2},setUninstallURL:{minArgs:1,maxArgs:1}},sessions:{getDevices:{minArgs:0,maxArgs:1},getRecentlyClosed:{minArgs:0,maxArgs:1},restore:{minArgs:0,maxArgs:1}},storage:{local:{clear:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}},managed:{get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1}},sync:{clear:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}}},tabs:{captureVisibleTab:{minArgs:0,maxArgs:2},create:{minArgs:1,maxArgs:1},detectLanguage:{minArgs:0,maxArgs:1},discard:{minArgs:0,maxArgs:1},duplicate:{minArgs:1,maxArgs:1},executeScript:{minArgs:1,maxArgs:2},get:{minArgs:1,maxArgs:1},getCurrent:{minArgs:0,maxArgs:0},getZoom:{minArgs:0,maxArgs:1},getZoomSettings:{minArgs:0,maxArgs:1},goBack:{minArgs:0,maxArgs:1},goForward:{minArgs:0,maxArgs:1},highlight:{minArgs:1,maxArgs:1},insertCSS:{minArgs:1,maxArgs:2},move:{minArgs:2,maxArgs:2},query:{minArgs:1,maxArgs:1},reload:{minArgs:0,maxArgs:2},remove:{minArgs:1,maxArgs:1},removeCSS:{minArgs:1,maxArgs:2},sendMessage:{minArgs:2,maxArgs:3},setZoom:{minArgs:1,maxArgs:2},setZoomSettings:{minArgs:1,maxArgs:2},update:{minArgs:1,maxArgs:2}},topSites:{get:{minArgs:0,maxArgs:0}},webNavigation:{getAllFrames:{minArgs:1,maxArgs:1},getFrame:{minArgs:1,maxArgs:1}},webRequest:{handlerBehaviorChanged:{minArgs:0,maxArgs:0}},windows:{create:{minArgs:0,maxArgs:1},get:{minArgs:1,maxArgs:2},getAll:{minArgs:0,maxArgs:1},getCurrent:{minArgs:0,maxArgs:1},getLastFocused:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},update:{minArgs:2,maxArgs:2}}};if(Object.keys(n).length===0)throw new Error("api-metadata.json has not been included in browser-polyfill");class o extends WeakMap{constructor(s,p=void 0){super(p),this.createItem=s}get(s){return this.has(s)||this.set(s,this.createItem(s)),super.get(s)}}let u=i=>i&&typeof i=="object"&&typeof i.then=="function",d=(i,s)=>(...p)=>{a.runtime.lastError?i.reject(new Error(a.runtime.lastError.message)):s.singleCallbackArg||p.length<=1&&s.singleCallbackArg!==!1?i.resolve(p[0]):i.resolve(p)},g=i=>i==1?"argument":"arguments",l=(i,s)=>function(f,...x){if(x.length<s.minArgs)throw new Error(`Expected at least ${s.minArgs} ${g(s.minArgs)} for ${i}(), got ${x.length}`);if(x.length>s.maxArgs)throw new Error(`Expected at most ${s.maxArgs} ${g(s.maxArgs)} for ${i}(), got ${x.length}`);return new Promise((b,v)=>{if(s.fallbackToNoCallback)try{f[i](...x,d({resolve:b,reject:v},s))}catch(c){console.warn(`${i} API method doesn't seem to support the callback parameter, falling back to call it without a callback: `,c),f[i](...x),s.fallbackToNoCallback=!1,s.noCallback=!0,b()}else s.noCallback?(f[i](...x),b()):f[i](...x,d({resolve:b,reject:v},s))})},y=(i,s,p)=>new Proxy(s,{apply(f,x,b){return p.call(x,i,...b)}}),h=Function.call.bind(Object.prototype.hasOwnProperty),D=(i,s={},p={})=>{let f=Object.create(null),x={has(v,c){return c in i||c in f},get(v,c,S){if(c in f)return f[c];if(!(c in i))return;let A=i[c];if(typeof A=="function")if(typeof s[c]=="function")A=y(i,i[c],s[c]);else if(h(p,c)){let E=l(c,p[c]);A=y(i,i[c],E)}else A=A.bind(i);else if(typeof A=="object"&&A!==null&&(h(s,c)||h(p,c)))A=D(A,s[c],p[c]);else if(h(p,"*"))A=D(A,s[c],p["*"]);else return Object.defineProperty(f,c,{configurable:!0,enumerable:!0,get(){return i[c]},set(E){i[c]=E}}),A;return f[c]=A,A},set(v,c,S,A){return c in f?f[c]=S:i[c]=S,!0},defineProperty(v,c,S){return Reflect.defineProperty(f,c,S)},deleteProperty(v,c){return Reflect.deleteProperty(f,c)}},b=Object.create(i);return new Proxy(b,x)},H=i=>({addListener(s,p,...f){s.addListener(i.get(p),...f)},hasListener(s,p){return s.hasListener(i.get(p))},removeListener(s,p){s.removeListener(i.get(p))}}),pe=new o(i=>typeof i!="function"?i:function(p){let f=D(p,{},{getContent:{minArgs:0,maxArgs:0}});i(f)}),W=new o(i=>typeof i!="function"?i:function(p,f,x){let b=!1,v,c=new Promise(V=>{v=function(M){b=!0,V(M)}}),S;try{S=i(p,f,v)}catch(V){S=Promise.reject(V)}let A=S!==!0&&u(S);if(S!==!0&&!A&&!b)return!1;let E=V=>{V.then(M=>{x(M)},M=>{let q;M&&(M instanceof Error||typeof M.message=="string")?q=M.message:q="An unexpected error occurred",x({__mozWebExtensionPolyfillReject__:!0,message:q})}).catch(M=>{console.error("Failed to send onMessage rejected reply",M)})};return E(A?S:c),!0}),fe=({reject:i,resolve:s},p)=>{a.runtime.lastError?a.runtime.lastError.message===t?s():i(new Error(a.runtime.lastError.message)):p&&p.__mozWebExtensionPolyfillReject__?i(new Error(p.message)):s(p)},B=(i,s,p,...f)=>{if(f.length<s.minArgs)throw new Error(`Expected at least ${s.minArgs} ${g(s.minArgs)} for ${i}(), got ${f.length}`);if(f.length>s.maxArgs)throw new Error(`Expected at most ${s.maxArgs} ${g(s.maxArgs)} for ${i}(), got ${f.length}`);return new Promise((x,b)=>{let v=fe.bind(null,{resolve:x,reject:b});f.push(v),p.sendMessage(...f)})},ge={devtools:{network:{onRequestFinished:H(pe)}},runtime:{onMessage:H(W),onMessageExternal:H(W),sendMessage:B.bind(null,"sendMessage",{minArgs:1,maxArgs:3})},tabs:{sendMessage:B.bind(null,"sendMessage",{minArgs:2,maxArgs:3})}},L={clear:{minArgs:1,maxArgs:1},get:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}};return n.privacy={network:{"*":L},services:{"*":L},websites:{"*":L}},D(a,ge,n)};e.exports=r(chrome)}else e.exports=globalThis.browser})});var z=$(R(),1);function C(e){var t=String(e);if(t==="[object Object]")try{t=JSON.stringify(e)}catch{}return t}var ve=function(){function e(){}return e.prototype.isSome=function(){return!1},e.prototype.isNone=function(){return!0},e.prototype[Symbol.iterator]=function(){return{next:function(){return{done:!0,value:void 0}}}},e.prototype.unwrapOr=function(t){return t},e.prototype.expect=function(t){throw new Error("".concat(t))},e.prototype.unwrap=function(){throw new Error("Tried to unwrap None")},e.prototype.map=function(t){return this},e.prototype.mapOr=function(t,r){return t},e.prototype.mapOrElse=function(t,r){return t()},e.prototype.or=function(t){return t},e.prototype.orElse=function(t){return t()},e.prototype.andThen=function(t){return this},e.prototype.toResult=function(t){return O(t)},e.prototype.toString=function(){return"None"},e}(),m=new ve;Object.freeze(m);var Se=function(){function e(t){if(!(this instanceof e))return new e(t);this.value=t}return e.prototype.isSome=function(){return!0},e.prototype.isNone=function(){return!1},e.prototype[Symbol.iterator]=function(){var t=Object(this.value);return Symbol.iterator in t?t[Symbol.iterator]():{next:function(){return{done:!0,value:void 0}}}},e.prototype.unwrapOr=function(t){return this.value},e.prototype.expect=function(t){return this.value},e.prototype.unwrap=function(){return this.value},e.prototype.map=function(t){return _(t(this.value))},e.prototype.mapOr=function(t,r){return r(this.value)},e.prototype.mapOrElse=function(t,r){return r(this.value)},e.prototype.or=function(t){return this},e.prototype.orElse=function(t){return this},e.prototype.andThen=function(t){return t(this.value)},e.prototype.toResult=function(t){return T(this.value)},e.prototype.safeUnwrap=function(){return this.value},e.prototype.toString=function(){return"Some(".concat(C(this.value),")")},e.EMPTY=new e(void 0),e}(),_=Se,P;(function(e){function t(){for(var n=[],o=0;o<arguments.length;o++)n[o]=arguments[o];for(var u=[],d=0,g=n;d<g.length;d++){var l=g[d];if(l.isSome())u.push(l.value);else return l}return _(u)}e.all=t;function r(){for(var n=[],o=0;o<arguments.length;o++)n[o]=arguments[o];for(var u=0,d=n;u<d.length;u++){var g=d[u];return g.isSome(),g}return m}e.any=r;function a(n){return n instanceof _||n===m}e.isOption=a})(P||(P={}));var Te=function(){function e(t){if(!(this instanceof e))return new e(t);this.error=t;var r=new Error().stack.split(`
`).slice(2);r&&r.length>0&&r[0].includes("ErrImpl")&&r.shift(),this._stack=r.join(`
`)}return e.prototype.isOk=function(){return!1},e.prototype.isErr=function(){return!0},e.prototype[Symbol.iterator]=function(){return{next:function(){return{done:!0,value:void 0}}}},e.prototype.else=function(t){return t},e.prototype.unwrapOr=function(t){return t},e.prototype.expect=function(t){throw new Error("".concat(t," - Error: ").concat(C(this.error),`
`).concat(this._stack),{cause:this.error})},e.prototype.expectErr=function(t){return this.error},e.prototype.unwrap=function(){throw new Error("Tried to unwrap Error: ".concat(C(this.error),`
`).concat(this._stack),{cause:this.error})},e.prototype.unwrapErr=function(){return this.error},e.prototype.map=function(t){return this},e.prototype.andThen=function(t){return this},e.prototype.mapErr=function(t){return new O(t(this.error))},e.prototype.mapOr=function(t,r){return t},e.prototype.mapOrElse=function(t,r){return t(this.error)},e.prototype.or=function(t){return t},e.prototype.orElse=function(t){return t(this.error)},e.prototype.toOption=function(){return m},e.prototype.toString=function(){return"Err(".concat(C(this.error),")")},Object.defineProperty(e.prototype,"stack",{get:function(){return"".concat(this,`
`).concat(this._stack)},enumerable:!1,configurable:!0}),e.prototype.toAsyncResult=function(){return new U(this)},e.EMPTY=new e(void 0),e}();var O=Te,Oe=function(){function e(t){if(!(this instanceof e))return new e(t);this.value=t}return e.prototype.isOk=function(){return!0},e.prototype.isErr=function(){return!1},e.prototype[Symbol.iterator]=function(){var t=Object(this.value);return Symbol.iterator in t?t[Symbol.iterator]():{next:function(){return{done:!0,value:void 0}}}},e.prototype.else=function(t){return this.value},e.prototype.unwrapOr=function(t){return this.value},e.prototype.expect=function(t){return this.value},e.prototype.expectErr=function(t){throw new Error(t)},e.prototype.unwrap=function(){return this.value},e.prototype.unwrapErr=function(){throw new Error("Tried to unwrap Ok: ".concat(C(this.value)),{cause:this.value})},e.prototype.map=function(t){return new T(t(this.value))},e.prototype.andThen=function(t){return t(this.value)},e.prototype.mapErr=function(t){return this},e.prototype.mapOr=function(t,r){return r(this.value)},e.prototype.mapOrElse=function(t,r){return r(this.value)},e.prototype.or=function(t){return this},e.prototype.orElse=function(t){return this},e.prototype.toOption=function(){return _(this.value)},e.prototype.safeUnwrap=function(){return this.value},e.prototype.toString=function(){return"Ok(".concat(C(this.value),")")},e.prototype.toAsyncResult=function(){return new U(this)},e.EMPTY=new e(void 0),e}();var T=Oe,I;(function(e){function t(){for(var u=[],d=0;d<arguments.length;d++)u[d]=arguments[d];for(var g=[],l=0,y=u;l<y.length;l++){var h=y[l];if(h.isOk())g.push(h.value);else return h}return new T(g)}e.all=t;function r(){for(var u=[],d=0;d<arguments.length;d++)u[d]=arguments[d];for(var g=[],l=0,y=u;l<y.length;l++){var h=y[l];if(h.isOk())return h;g.push(h.error)}return new O(g)}e.any=r;function a(u){try{return new T(u())}catch(d){return new O(d)}}e.wrap=a;function n(u){try{return u().then(function(d){return new T(d)}).catch(function(d){return new O(d)})}catch(d){return Promise.resolve(new O(d))}}e.wrapAsync=n;function o(u){return u instanceof O||u instanceof T}e.isResult=o})(I||(I={}));var Y=function(e,t,r,a){function n(o){return o instanceof r?o:new r(function(u){u(o)})}return new(r||(r=Promise))(function(o,u){function d(y){try{l(a.next(y))}catch(h){u(h)}}function g(y){try{l(a.throw(y))}catch(h){u(h)}}function l(y){y.done?o(y.value):n(y.value).then(d,g)}l((a=a.apply(e,t||[])).next())})},Z=function(e,t){var r={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},a,n,o,u;return u={next:d(0),throw:d(1),return:d(2)},typeof Symbol=="function"&&(u[Symbol.iterator]=function(){return this}),u;function d(l){return function(y){return g([l,y])}}function g(l){if(a)throw new TypeError("Generator is already executing.");for(;u&&(u=0,l[0]&&(r=0)),r;)try{if(a=1,n&&(o=l[0]&2?n.return:l[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,l[1])).done)return o;switch(n=0,o&&(l=[l[0]&2,o.value]),l[0]){case 0:case 1:o=l;break;case 4:return r.label++,{value:l[1],done:!1};case 5:r.label++,n=l[1],l=[0];continue;case 7:l=r.ops.pop(),r.trys.pop();continue;default:if(o=r.trys,!(o=o.length>0&&o[o.length-1])&&(l[0]===6||l[0]===2)){r=0;continue}if(l[0]===3&&(!o||l[1]>o[0]&&l[1]<o[3])){r.label=l[1];break}if(l[0]===6&&r.label<o[1]){r.label=o[1],o=l;break}if(o&&r.label<o[2]){r.label=o[2],r.ops.push(l);break}o[2]&&r.ops.pop(),r.trys.pop();continue}l=t.call(e,r)}catch(y){l=[6,y],n=0}finally{a=o=0}if(l[0]&5)throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}},U=function(){function e(t){this.promise=Promise.resolve(t)}return e.prototype.andThen=function(t){var r=this;return this.thenInternal(function(a){return Y(r,void 0,void 0,function(){var n;return Z(this,function(o){return a.isErr()?[2,a]:(n=t(a.value),[2,n instanceof e?n.promise:n])})})})},e.prototype.map=function(t){var r=this;return this.thenInternal(function(a){return Y(r,void 0,void 0,function(){var n;return Z(this,function(o){switch(o.label){case 0:return a.isErr()?[2,a]:(n=T,[4,t(a.value)]);case 1:return[2,n.apply(void 0,[o.sent()])]}})})})},e.prototype.thenInternal=function(t){return new e(this.promise.then(t))},e}();function w(e){return Object.assign(e.prototype,{find:function(t){for(let r of this)if(t(r))return _(r);return m},count:function(t){return this.reduce((r,a)=>(t(a)&&r++,r),0)},reduce:function(t,r){let a=r;for(let n of this)a=t(a,n);return a},every:function(t){return!this.any(r=>!t(r))},any:function(t){for(let r of this)if(t(r))return!0;return!1},map:function(t){return this.filterMap(r=>_(t(r)))},filter:function(t){return this.filterMap(r=>t(r)?_(r):m)},enumerate:function(){let t=this;return w(function*(){let r=0;for(let a of t)yield[r,a],r++})()},filterMap:function(t){let r=this;return w(function*(){for(let a of r){let n=t(a);n.isSome()&&(yield n.unwrap())}})()},sort:function(t){let r=this.toArray();return r.sort(t),r},toArray:function(){return[...this]}}),e}Array.prototype.as_iter||(Array.prototype.as_iter=function(){let e=this;return w(function*(){for(let t of e)yield t})()});Set.prototype.as_iter||(Set.prototype.as_iter=function(){let e=this;return w(function*(){for(let t of e)yield t})()});Map.prototype.as_iter||(Map.prototype.as_iter=function(){let e=this;return w(function*(){for(let t of e)yield t})()});var k=/.^/,X={Av1:{name:"Av1",type:"video",mimetype:/av01.*/i,defacto_container:"WebM"},H264:{name:"H264",type:"video",mimetype:/avc1.*/i,defacto_container:"Mp4"},H263:{name:"H263",type:"video",mimetype:k,defacto_container:"3gp"},H265:{name:"H265",type:"video",mimetype:/(hvc1|hevc|h265|h\.265).*/i,defacto_container:"Mp4"},MP4V:{name:"MP4V",type:"video",mimetype:/mp4v\.20.*/i,defacto_container:"Mp4"},MPEG1:{name:"MPEG1",type:"video",mimetype:k,defacto_container:"Mpeg"},MPEG2:{name:"MPEG2",type:"video",mimetype:k,defacto_container:"Mpeg"},Theora:{name:"Theora",type:"video",mimetype:/theora/i,defacto_container:"Ogg"},VP8:{name:"VP8",type:"video",mimetype:/vp0?8.*/i,defacto_container:"WebM"},VP9:{name:"VP9",type:"video",mimetype:/vp0?9.*/i,defacto_container:"WebM"},unknown:{name:"unknown",type:"video",mimetype:k,defacto_container:"Mp4"}},ee={AAC:{name:"AAC",type:"audio",mimetype:/(aac|mp4a.40).*/i,defacto_container:"Mp4"},PCM:{name:"PCM",type:"audio",mimetype:/pcm.*/i,defacto_container:"Wav"},FLAC:{name:"FLAC",type:"audio",mimetype:/flac/i,defacto_container:"Flac"},MP3:{name:"MP3",type:"audio",mimetype:/(\.?mp3|mp4a\.69|mp4a\.6b).*/i,defacto_container:"Mpeg"},Opus:{name:"Opus",type:"audio",mimetype:/(opus|(mp4a\.ad.*))/i,defacto_container:"Ogg"},Vorbis:{name:"Vorbis",type:"audio",mimetype:/vorbis/i,defacto_container:"Ogg"},Wav:{name:"Wav",type:"audio",mimetype:k,defacto_container:"Wav"},unknown:{name:"unknown",type:"audio",mimetype:k,defacto_container:"Mp4"}},te=w(function*(){for(let e of Object.keys(X))yield X[e]}),re=w(function*(){for(let e of Object.keys(ee))yield ee[e]});var ne={Mp4:{name:"Mp4",extension:"mp4",audio_only_extension:"mp3",defacto_codecs:{audio:m,video:m},supported_video_codecs:["H264","H265","Av1","MP4V","MPEG2","unknown"],supported_audio_codecs:["Opus","MP3","FLAC","AAC","unknown"],mimetype:/(?:x-)?mp4/i},Mkv:{name:"Mkv",extension:"mkv",audio_only_extension:"mp3",defacto_codecs:{audio:m,video:m},supported_video_codecs:te().filter(e=>e.name!="unknown").map(e=>e.name).toArray(),supported_audio_codecs:re().filter(e=>e.name!="unknown").map(e=>e.name).toArray(),mimetype:/(?:x-)?matroska/i},WebM:{name:"WebM",extension:"webm",audio_only_extension:"oga",defacto_codecs:{audio:m,video:m},supported_video_codecs:["H264","VP8","VP9","Av1"],supported_audio_codecs:["Opus","Vorbis"],mimetype:/(?:x-)?webm/i},M2TS:{name:"M2TS",extension:"mt2s",audio_only_extension:"mp3",defacto_codecs:{audio:m,video:m},supported_video_codecs:["H264","H265","Av1","MP4V","MPEG2","VP9","unknown"],supported_audio_codecs:["Opus","MP3","FLAC","AAC"],mimetype:/(?:x-)?mts/i},MP2T:{name:"MP2T",extension:"mp2t",audio_only_extension:"mp3",defacto_codecs:{audio:_("MP3"),video:_("H264")},supported_video_codecs:["MPEG2","MPEG1"],supported_audio_codecs:["MP3"],mimetype:/(?:x-)?mp2t/i},Flash:{name:"Flash",extension:"flv",audio_only_extension:"mp3",defacto_codecs:{audio:m,video:m},supported_video_codecs:["H264"],supported_audio_codecs:["AAC"],mimetype:/(?:x-)?flv/i},M4V:{name:"M4V",extension:"m4v",audio_only_extension:"mp3",defacto_codecs:{audio:m,video:m},supported_video_codecs:["H264","H265","Av1","MP4V","MPEG2"],supported_audio_codecs:["Opus","MP3","FLAC","AAC"],mimetype:/(?:x-)?m4v/i},M4A:{name:"M4A",extension:"m4a",other_extensions:["aac"],audio_only_extension:"m4a",defacto_codecs:{audio:_("AAC"),video:m},supported_video_codecs:[],supported_audio_codecs:["Opus","MP3","FLAC","AAC","unknown"],mimetype:/(?:x-)?m4a/i},Flac:{name:"Flac",extension:"flac",audio_only_extension:"flac",defacto_codecs:{audio:_("FLAC"),video:m},supported_video_codecs:[],supported_audio_codecs:["FLAC"],mimetype:/(?:x-)?flac/i},Mpeg:{name:"Mpeg",extension:"mpeg",audio_only_extension:"mp3",defacto_codecs:{audio:_("MP3"),video:_("H264")},supported_video_codecs:["MPEG2","MPEG1"],supported_audio_codecs:["MP3"],mimetype:/(?:x-)?mpeg/i},Ogg:{name:"Ogg",extension:"ogv",audio_only_extension:"oga",defacto_codecs:{audio:m,video:m},supported_video_codecs:["VP9","VP8","Theora"],supported_audio_codecs:["Opus","Vorbis","FLAC"],mimetype:/(?:x-)?og./i},Wav:{name:"Wav",extension:"wav",audio_only_extension:"wav",defacto_codecs:{audio:_("Wav"),video:m},supported_video_codecs:[],supported_audio_codecs:["Wav","PCM"],mimetype:/(?:x-)?(?:pn-)?wave?/i},"3gp":{name:"3gp",extension:"3gpp",audio_only_extension:"mp3",defacto_codecs:{audio:m,video:m},supported_video_codecs:["H264","H263","MP4V","VP8"],supported_audio_codecs:["MP3","AAC"],mimetype:/(?:x-)?3gpp2?/i},QuickTime:{name:"QuickTime",extension:"mov",audio_only_extension:"mp3",defacto_codecs:{audio:m,video:m},supported_video_codecs:["MPEG1","MPEG2"],supported_audio_codecs:[],mimetype:/(?:x-)?mov/i}},Me=w(function*(){for(let e of Object.keys(ne))yield e}),ht=w(function*(){for(let e of Me())yield ne[e]});var oe={240:{id:"240",loose_name:"Small"},360:{id:"360",loose_name:"SD"},480:{id:"480",loose_name:"SD"},720:{id:"720",loose_name:"HD"},1080:{id:"1080",loose_name:"FullHD"},1440:{id:"1440",loose_name:"UHD"},2160:{id:"2160",loose_name:"4K"},4320:{id:"4320",loose_name:"8K"}};var Ce=w(function*(){for(let e of Object.keys(oe))yield e}),Ot=w(function*(){for(let e of Ce())yield oe[e]});var Ve=$(R(),1);async function ie(e,t){let r=t;e.hooks&&(r=e.hooks.setter(t)),await z.storage[e.where].set({[e.name]:r})}async function F(e){let t=await z.storage[e.where].get(e.name);if(e.name in t){let r=t[e.name];return e.hooks?e.hooks.getter(r,e):r}return e.default()}async function ae(e){await z.storage[e.where].remove(e.name)}var se={name:"view_options",default:()=>({}),where:"session"};var J={name:"blacklist",default:()=>[],where:"local",hooks:{setter:e=>e.filter(t=>t.length>0),getter:e=>e}};var ce=$(R(),1);function le(e){return e?e.replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;"):""}function ue(e,t,r){let a=()=>(console.error(`Requesting unknown i18n string ${e}`),e);t=t.map(n=>n.toString()).map(le);try{if(e in r){let n=r[e],o=1;for(let u=0;u<t.length;u++)n=n.replace(`$${o}`,t[u]);return n}else{let n=ce.default.i18n.getMessage(e,t);return n||a()}}catch{return a()}}function me(e,t){for(let r of Array.from(e.querySelectorAll("[data-i18n]"))){let a=r.dataset.i18nArgs,n=r.dataset.i18nAttr,o;a?o=ue(r.dataset.i18n,JSON.parse(a),t):o=ue(r.dataset.i18n,[],t),n?r.setAttribute(n,o):r.textContent=o}}async function de(){let e=await F(J),t=document.querySelector("#core > sl-textarea");t.value=e.join(`
`)}async function Pe(e){let t=e.target;if(t){let r=t.closest("#button-reset"),a=t.closest("#button-save");if(r&&(ae(J),de()),a){let n=document.querySelector("#core > sl-textarea");ie(J,n.value.split(`
`))}}}de();var Ie=await F(se);me(document,Ie);window.addEventListener("click",Pe);

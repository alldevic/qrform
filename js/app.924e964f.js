(function(e){function t(t){for(var n,o,i=t[0],u=t[1],c=t[2],l=0,p=[];l<i.length;l++)o=i[l],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&p.push(a[o][0]),a[o]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n]);f&&f(t);while(p.length)p.shift()();return s.push.apply(s,c||[]),r()}function r(){for(var e,t=0;t<s.length;t++){for(var r=s[t],n=!0,o=1;o<r.length;o++){var i=r[o];0!==a[i]&&(n=!1)}n&&(s.splice(t--,1),e=u(u.s=r[0]))}return e}var n={},o={app:0},a={app:0},s=[];function i(e){return u.p+"js/"+({home:"home"}[e]||e)+"."+{home:"e4bc7597"}[e]+".js"}function u(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,u),r.l=!0,r.exports}u.e=function(e){var t=[],r={home:1};o[e]?t.push(o[e]):0!==o[e]&&r[e]&&t.push(o[e]=new Promise((function(t,r){for(var n="css/"+({home:"home"}[e]||e)+"."+{home:"05bf7196"}[e]+".css",a=u.p+n,s=document.getElementsByTagName("link"),i=0;i<s.length;i++){var c=s[i],l=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(l===n||l===a))return t()}var p=document.getElementsByTagName("style");for(i=0;i<p.length;i++){c=p[i],l=c.getAttribute("data-href");if(l===n||l===a)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var n=t&&t.target&&t.target.src||a,s=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=n,delete o[e],f.parentNode.removeChild(f),r(s)},f.href=a;var d=document.getElementsByTagName("head")[0];d.appendChild(f)})).then((function(){o[e]=0})));var n=a[e];if(0!==n)if(n)t.push(n[2]);else{var s=new Promise((function(t,r){n=a[e]=[t,r]}));t.push(n[2]=s);var c,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=i(e);var p=new Error;c=function(t){l.onerror=l.onload=null,clearTimeout(f);var r=a[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;p.message="Loading chunk "+e+" failed.\n("+n+": "+o+")",p.name="ChunkLoadError",p.type=n,p.request=o,r[1](p)}a[e]=void 0}};var f=setTimeout((function(){c({type:"timeout",target:l})}),12e4);l.onerror=l.onload=c,document.head.appendChild(l)}return Promise.all(t)},u.m=e,u.c=n,u.d=function(e,t,r){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(u.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)u.d(r,n,function(t){return e[t]}.bind(null,n));return r},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/qrform/",u.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var p=0;p<c.length;p++)t(c[p]);var f=l;s.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"56d7":function(e,t,r){"use strict";r.r(t);var n=r("2b0e"),o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-app",[r("v-app-bar",{attrs:{app:""}},[r("v-toolbar-title",{staticClass:"headline text-uppercase"},[r("span",[e._v("Qr")]),r("span",{staticClass:"font-weight-light"},[e._v("Form")])]),r("v-spacer"),e._l(e.menu,(function(t,n){return r("v-btn",{key:n,attrs:{text:"",to:t.link}},[r("span",{staticClass:"mr-2"},[e._v(e._s(t.title))])])}))],2),r("v-content",[r("router-view")],1)],1)},a=[],s={name:"App",data:()=>({menu:[{title:"Home",link:"/"}]})},i=s,u=r("2877"),c=r("6544"),l=r.n(c),p=r("7496"),f=r("40dc"),d=r("8336"),h=r("a75b"),m=r("2fa4"),v=r("2a7f"),g=Object(u["a"])(i,o,a,!1,null,null,null),b=g.exports;l()(g,{VApp:p["a"],VAppBar:f["a"],VBtn:d["a"],VContent:h["a"],VSpacer:m["a"],VToolbarTitle:v["a"]});var C=r("8c4f");n["a"].use(C["a"]);var y=new C["a"]({mode:"history",base:"/qrform/",routes:[{path:"/",name:"home",component:()=>r.e("home").then(r.bind(null,"bb51"))}]}),E=r("2f62");const S={checklist:{}},T={currentChecklist:e=>e.checklist,platforms:e=>e.platforms};var _=r("6e87");const w={[_["a"].SET_CHECKLIST](e,t){e.checklist=t},[_["a"].SET_PLATFORMS](e,t){e.platforms=t}};var k=r("bc3a"),L=r.n(k),O=r("a7fe"),H=r.n(O);const j="http://dev-auk.kuzro.ru/";var x=j;const P={init(){n["a"].use(H.a,L.a),n["a"].axios.defaults.baseURL=x},get(e,t=""){return n["a"].axios.get(`${e}/${t}`)},post(e,t){return n["a"].axios.post(`${e}/`,t)}};var I=P;console.log(I);const K={[_["a"].FETCH_CHECKLIST]({commit:e}){return new Promise((t,r)=>{I.get("5999").then(({data:r})=>{console.log(r),e(_["a"].SET_CHECKLIST,r),t(r)}).catch(e=>{console.log(e),r(e)})})},[_["a"].SEND_CHECKLIST](e){return new Promise((t,r)=>{I.post("",e).then(({data:e})=>{console.log(e),t(e)}).catch(e=>{console.log(e),r(e)})})}};var A={state:S,getters:T,mutations:w,actions:K};n["a"].use(E["a"]);var N=new E["a"].Store({modules:{checklist:A}}),q=r("f309");n["a"].use(q["a"]);var F=new q["a"]({icons:{iconfont:"mdiSvg"}}),V=r("7bb1"),B=r("4c93"),D=r("8de0");Object(V["c"])("required",B["a"]),Object(V["d"])("ru",{messages:{...D.messages,required:"Ответьте на вопрос"}}),n["a"].config.productionTip=!1,I.init(),new n["a"]({router:y,store:N,vuetify:F,render:e=>e(b)}).$mount("#app")},"6e87":function(e,t,r){"use strict";t["a"]={SET_CHECKLIST:"SET_CHECKLIST",FETCH_CHECKLIST:"FETCH_CHECKLIST",SEND_CHECKLIST:"SEND_CHECKLIST"}}});
//# sourceMappingURL=app.924e964f.js.map
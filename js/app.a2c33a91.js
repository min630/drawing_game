(function(e){function t(t){for(var r,c,i=t[0],u=t[1],s=t[2],l=0,d=[];l<i.length;l++)c=i[l],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&d.push(o[c][0]),o[c]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);f&&f(t);while(d.length)d.shift()();return a.push.apply(a,s||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,c=1;c<n.length;c++){var i=n[c];0!==o[i]&&(r=!1)}r&&(a.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},c={app:0},o={app:0},a=[];function i(e){return u.p+"js/"+({}[e]||e)+"."+{"chunk-f3c4c48e":"9c0d0c54","chunk-3d7cc5f1":"3d81f18a","chunk-725b4eb7":"e90dcb68"}[e]+".js"}function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={"chunk-f3c4c48e":1};c[e]?t.push(c[e]):0!==c[e]&&n[e]&&t.push(c[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-f3c4c48e":"c897627b","chunk-3d7cc5f1":"31d6cfe0","chunk-725b4eb7":"31d6cfe0"}[e]+".css",o=u.p+r,a=document.getElementsByTagName("link"),i=0;i<a.length;i++){var s=a[i],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===r||l===o))return t()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){s=d[i],l=s.getAttribute("data-href");if(l===r||l===o)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||o,a=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=r,delete c[e],f.parentNode.removeChild(f),n(a)},f.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){c[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var a=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=a);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=i(e);var d=new Error;s=function(t){l.onerror=l.onload=null,clearTimeout(f);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),c=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+c+")",d.name="ChunkLoadError",d.type=r,d.request=c,n[1](d)}o[e]=void 0}};var f=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/drawing_game/",u.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var d=0;d<s.length;d++)t(s[d]);var f=l;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"4c47":function(e,t,n){"use strict";n("d679")},"56d7":function(e,t,n){"use strict";n.r(t);var r=n("7a23");const c=Object(r["g"])("div",{class:"footer bg-dark text-center text-white"},[Object(r["g"])("span",null,"© min630  "),Object(r["g"])("span",null,[Object(r["h"])(" Audio from "),Object(r["g"])("a",{href:"https://pixabay.com/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=39222"},"Pixabay  ")]),Object(r["g"])("span",null,[Object(r["h"])(" Image from "),Object(r["g"])("a",{href:"https://www.irasutoya.com/"}," irasutoya.com ")])],-1);function o(e,t){const n=Object(r["y"])("router-view");return Object(r["r"])(),Object(r["f"])(r["a"],null,[Object(r["i"])(n),c],64)}n("4c47");var a=n("6b0d"),i=n.n(a);const u={},s=i()(u,[["render",o]]);var l=s,d=n("6605");const f=e=>(Object(r["u"])("data-v-a4355c18"),e=e(),Object(r["s"])(),e),p={class:"bg container-fluid vh-100 d-flex flex-column justify-content-center align-items-center"},b=f(()=>Object(r["g"])("h1",{class:"mb-5"},"請選擇籤組模式",-1)),h={class:"row gx-5"},m={class:"col mx-5 my-2 d-flex justify-content-center align-items-center"},g=f(()=>Object(r["g"])("h3",{class:"fw-bold"},"預設籤組",-1)),v=[g],y={class:"col mx-5 my-2 d-flex justify-content-center align-items-center"},j=f(()=>Object(r["g"])("h3",{class:"fw-bold"},"自訂籤組",-1)),O=[j];function w(e,t,n,c,o,a){const i=Object(r["y"])("router-link");return Object(r["r"])(),Object(r["f"])("div",p,[b,Object(r["g"])("div",h,[Object(r["g"])("div",m,[Object(r["i"])(i,{to:"/default-awards"},{default:Object(r["E"])(()=>[Object(r["g"])("div",{class:"rounded-circle bg-danger d-flex justify-content-center align-items-center",style:{width:"200px",height:"200px"},onClick:t[0]||(t[0]=(...e)=>a.playAudio&&a.playAudio(...e))},v)]),_:1})]),Object(r["g"])("div",y,[Object(r["i"])(i,{to:"/custom-awards"},{default:Object(r["E"])(()=>[Object(r["g"])("div",{class:"rounded-circle bg-primary d-flex justify-content-center align-items-center",style:{width:"200px",height:"200px"},onClick:t[1]||(t[1]=(...e)=>a.playAudio&&a.playAudio(...e))},O)]),_:1})])])])}var k=n("a919"),x=n.n(k),_={data(){return{audio:null}},methods:{playAudio(){this.audio.play()}},created(){this.audio=new Audio(x.a)}};n("f65e");const A=i()(_,[["render",w],["__scopeId","data-v-a4355c18"]]);var P=A;const E=[{path:"/",name:"Home",component:P},{path:"/default-awards",component:()=>Promise.all([n.e("chunk-f3c4c48e"),n.e("chunk-3d7cc5f1")]).then(n.bind(null,"5450"))},{path:"/custom-awards",component:()=>Promise.all([n.e("chunk-f3c4c48e"),n.e("chunk-725b4eb7")]).then(n.bind(null,"e3b7"))}],C=Object(d["a"])({history:Object(d["b"])(),routes:E,linkActiveClass:"active"});var S=C;const T=Object(r["c"])(l);T.use(S),T.mount("#app")},a919:function(e,t,n){e.exports=n.p+"media/pop.f67f9956.mp3"},d679:function(e,t,n){},f646:function(e,t,n){},f65e:function(e,t,n){"use strict";n("f646")}});
//# sourceMappingURL=app.a2c33a91.js.map
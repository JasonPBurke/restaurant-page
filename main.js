(()=>{"use strict";var e={150:(e,n,t)=>{t.d(n,{Z:()=>u});var r=t(81),o=t.n(r),a=t(645),i=t.n(a),c=t(667),s=t.n(c),d=new URL(t(901),t.b),l=i()(o()),p=s()(d);l.push([e.id,":root {\n  --border-color: rgba(164, 197, 186, 0.255);\n  --main-txt-color: rgb(164, 197, 186);\n}\n\nbody {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  background: linear-gradient(rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25)),\n    url("+p+") no-repeat center fixed;\n  background-size: cover;\n  color: var(--main-txt-color);\n}\n\n#content {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n}\n\nheader {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  height: 6rem;\n  padding: 0 10rem 0 9rem;\n  border-bottom: 1px solid var(--border-color);\n}\n\n.logoAndName > img {\n  max-height: 6rem;\n}\n\n.navigation {\n  height: inherit;\n}\n\n.navigation > ul {\n  display: flex;\n  align-items: center;\n  gap: 5rem;\n  list-style: none;\n  text-transform: uppercase;\n  font-size: x-large;\n  height: inherit;\n  margin: 0;\n}\n\n.navigation > ul > li {\n  cursor: pointer;\n}\n\n.navigation > ul > li:hover {\n  border-bottom: 2px solid var(--border-color);\n  padding-bottom: 4px;\n}\n\nmain {\n  padding: 5rem;\n  background-color: rgba(240, 248, 255, 0.686);\n  flex: 1;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-items: center;\n}\n\n.home-main {\n  background: none;\n}\n\n.home-container {\n  background-color: rgba(0, 0, 0, 0.477);\n  border-radius: 1rem;\n  min-width: 25%;\n  display: flex;\n  flex-direction: column;\n  place-items: center;\n}\n\n.employee-info-card,\n.menu-item {\n  background-color: white;\n  color: black;\n  padding: 1rem;\n  border-radius: 1rem;\n  text-align: center;\n  margin: 1rem;\n  text-transform: capitalize;\n  width: 325px;\n}\n\n.menu-item {\n  height: 255px;\n}\n\n.menu-item > img {\n  max-height: 150px;\n}\n\n.employee-info-card {\n  height: 500px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  padding-bottom: 0;\n  overflow: hidden;\n}\n\n.employee-info-card > img {\n  object-fit: contain;\n  max-width: 100%;\n  max-height: 100%;\n  width: auto;\n  height: auto;\n}\n\nfooter {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0 10rem;\n  border-top: 1px solid var(--border-color);\n  height: 6rem;\n}\n",""]);const u=l},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);r&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),n.push(l))}},n}},667:e=>{e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]|(%20)/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var a={},i=[],c=0;c<e.length;c++){var s=e[c],d=r.base?s[0]+r.base:s[0],l=a[d]||0,p="".concat(d," ").concat(l);a[d]=l+1;var u=t(p),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)n[u].references++,n[u].updater(m);else{var f=o(m,r);r.byIndex=c,n.splice(c,0,{identifier:p,updater:f,references:1})}i.push(p)}return i}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=t(a[i]);n[c].references--}for(var s=r(e,o),d=0;d<a.length;d++){var l=t(a[d]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}a=s}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},901:(e,n,t)=>{e.exports=t.p+"0e50004d95034a1796f8.png"}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var a=n[r]={id:r,exports:{}};return e[r](a,a.exports,t),a.exports}t.m=e,t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var r=n.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{var e=t(379),n=t.n(e),r=t(795),o=t.n(r),a=t(569),i=t.n(a),c=t(565),s=t.n(c),d=t(216),l=t.n(d),p=t(589),u=t.n(p),m=t(150),f={};f.styleTagTransform=u(),f.setAttributes=s(),f.insert=i().bind(null,"head"),f.domAPI=o(),f.insertStyleElement=l(),n()(m.Z,f),m.Z&&m.Z.locals&&m.Z.locals;const g=t.p+"6f7ae1e8e0a7f53525c0.png";function h(){const e=document.createElement("header"),n=document.createElement("nav");n.setAttribute("class","navigation");const t=document.createElement("ul"),r=document.createElement("li");r.setAttribute("id","home"),r.innerHTML="Home";const o=document.createElement("li");o.innerHTML="Menu";const a=document.createElement("li");a.innerHTML="Contact",n.append(t),t.append(r),t.append(o),t.append(a);const i=document.createElement("div");i.setAttribute("class","logoAndName");const c=document.createElement("img");return c.src=g,i.append(c),e.append(i),e.append(n),e}function b(){const e=document.createElement("main");return e.setAttribute("class","home-main"),e}function v(){const e=document.createElement("footer"),n=document.createElement("p"),t=document.createElement("p");return n.innerText="Images courtesy of Futurama",t.innerText="Designed by FUZZYLOGIC ",e.append(n),e.append(t),e}const x=t.p+"0c06b0da0937be07d60d.png",y=t.p+"30c5dd753f8336a74c35.png",E=t.p+"eb848e82f6b7e5deafdd.png",T=t.p+"a16518610701bc3aaf0e.png",w=t.p+"7cc88cf8954d5b073ea1.png",A=t.p+"0c76ef4bdd0c9026d7a4.png",C=t.p+"2a345356e54dd6a43c37.png",M=t.p+"bdbb221381f0abbfb282.png";function k(e,n,t){const r=document.createElement("div");r.setAttribute("class","menu-item");const o=document.createElement("h3");o.innerText=e;const a=document.createElement("img");a.src=t;const i=document.createElement("p"),c=document.createElement("div");return c.append(o,i),i.innerText=n,r.append(c,a),r}function S(){const e=document.createElement("main");e.setAttribute("class","main");const n=k("popplers","They're like sex, except you're having them!",x),t=k("Froot Cup","Comes with your choice of cheese filling",y),r=k("Extreme Walrus Juice","Ride The Walrus!",E),o=k("Whiskey","free with kids meal",T),a=k("Fried spaghetti dinner breakfast pocket","found on the lunch menu",C),i=k("Stroganoff","Out of Stock",A),c=k("Buggalo Tots","free-range Martian Buggalo(not used)",w),s=k("Gardener lover's salad ","Choice of Cheese Filling",M);return e.append(n,t,r,o,i,a,c,s),e}const j=t.p+"88c7121f73a53234e827.png",F=t.p+"027ba5fbf8ec88bdb4d5.png",I=t.p+"d3542aa652a51b062604.png";function L(e,n,t){const r=document.createElement("div");r.setAttribute("class","employee-info-card");const o=document.createElement("div"),a=document.createElement("h3");a.innerText=e;const i=document.createElement("p");i.innerText=n,o.append(a,i);const c=document.createElement("img");return c.src=t,c.alt=`employee image of ${e}`,r.append(o,c),r}function N(){const e=document.createElement("main");e.setAttribute("class","contact-main");const n=L("Fishy Joe","The owner of Fishy Joe's",j),t=L("Smart-Ass Teen","This guy is going places!",F),r=L("Spotty Teen Robot","01001001 00100000 01101100 01101111 01110110 01100101 00100000 01101101 01101111 01101101",I);return e.append(n,t,r),e}const O=document.getElementById("content");function H(e,n,t){O.innerText="",O.append(e()),O.append(n()),O.append(t())}H(h,b,v),document.addEventListener("click",(e=>{const n=e.target.innerText;"HOME"===n&&H(h,b,v),"MENU"===n&&H(h,S,v),"CONTACT"===n&&H(h,N,v)}))})()})();
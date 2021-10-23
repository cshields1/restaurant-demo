(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>i});var o=n(81),r=n.n(o),a=n(645),c=n.n(a)()(r());c.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Zen+Kurenaido&display=swap);"]),c.push([e.id,"* {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n  font-family: 'Zen Kurenaido', sans-serif;\n  color: #1f1f1f;\n}\n\nbody {\n  min-height: 100%;\n  background-color: #d13636;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n\n#content {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n}\n\nimg {\n  max-width: 500px;\n  min-width: 20%;\n  height: auto;\n  border: 2px solid black;\n  border-radius: 5px;\n}\n\nh1 {\n  text-decoration: underline;\n}\n\nh1, h2 {\n  font-size: 2.5em;\n}\n\np {\n  margin: 1rem 0;\n  padding: 0 17rem;\n  font-size: 18px;\n}\n\n#btn-container {\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n}\n\nbutton {\n  padding: 0 1rem;\n  flex-grow: 1;\n  background-color: #e44545;\n  font-size: 1.5em;\n  border: 1px solid black;\n  margin-bottom: 1rem;\n  transition: all .1s ease-in-out;\n}\n\nbutton:hover {\n  color: white;\n  background-color: #FF4747;\n}\n\n#contact-info {\n  width: 100%;\n}\n\na {\n  text-decoration: none;\n}\n\na:hover {\n  text-decoration: underline;\n}\n\nspan {\n  margin: 1rem 0;\n}",""]);const i=c},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",o=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),o&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),o&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,o,r,a){"string"==typeof e&&(e=[[null,e,void 0]]);var c={};if(o)for(var i=0;i<this.length;i++){var s=this[i][0];null!=s&&(c[s]=!0)}for(var d=0;d<e.length;d++){var u=[].concat(e[d]);o&&c[u[0]]||(void 0!==a&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=a),n&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=n):u[2]=n),r&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=r):u[4]="".concat(r)),t.push(u))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,o=0;o<t.length;o++)if(t[o].identifier===e){n=o;break}return n}function o(e,o){for(var a={},c=[],i=0;i<e.length;i++){var s=e[i],d=o.base?s[0]+o.base:s[0],u=a[d]||0,p="".concat(d," ").concat(u);a[d]=u+1;var l=n(p),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==l)t[l].references++,t[l].updater(m);else{var f=r(m,o);o.byIndex=i,t.splice(i,0,{identifier:p,updater:f,references:1})}c.push(p)}return c}function r(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,r){var a=o(e=e||[],r=r||{});return function(e){e=e||[];for(var c=0;c<a.length;c++){var i=n(a[c]);t[i].references--}for(var s=o(e,r),d=0;d<a.length;d++){var u=n(a[d]);0===t[u].references&&(t[u].updater(),t.splice(u,1))}a=s}}},569:e=>{var t={};e.exports=function(e,n){var o=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,r&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(o,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},571:(e,t,n)=>{e.exports=n.p+"5dc9f280d8899f274263.jpeg"},747:(e,t,n)=>{e.exports=n.p+"084f06884053145663eb.jpeg"},788:(e,t,n)=>{e.exports=n.p+"b63d6158b07a67e9a408.jpeg"},872:(e,t,n)=>{e.exports=n.p+"d3cf1b543c9f9f78d995.jpeg"}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var a=t[o]={id:o,exports:{}};return e[o](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var o=t.getElementsByTagName("script");o.length&&(e=o[o.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),(()=>{var e=n(379),t=n.n(e),o=n(795),r=n.n(o),a=n(569),c=n.n(a),i=n(565),s=n.n(i),d=n(216),u=n.n(d),p=n(589),l=n.n(p),m=n(426),f={};f.styleTagTransform=l(),f.setAttributes=s(),f.insert=c().bind(null,"head"),f.domAPI=r(),f.insertStyleElement=u(),t()(m.Z,f),m.Z&&m.Z.locals&&m.Z.locals;var h=n(747),g=n(872),v=n(571),b=n(788);const y=()=>{w();const e=document.querySelector("#content"),t=document.createElement("div");t.id="menu";const n=document.createElement("div"),o=document.createElement("h2");o.textContent="Peanut Butter Bacon Bites";const r=new Image;r.src=h;const a=document.createElement("p");a.textContent="Salt and umami collide in these chewy, hot-out-of-the-oven delights.",n.append(o,r,a);const c=document.createElement("div"),i=document.createElement("h2");i.textContent="Tuna and Apple Refresh";const s=new Image;s.src=g;const d=document.createElement("p");d.textContent="Add the zest your day is missing beside the comfort of an old favorite.",c.append(i,s,d);const u=document.createElement("div"),p=document.createElement("h2");p.textContent="Cheesy Chicken Deluxe";const l=new Image;l.src=v;const m=document.createElement("p");m.textContent="Our signature pie, topped with juicy chicken and mountains of melted cheese.",u.append(p,l,m);const f=document.createElement("div"),y=document.createElement("h2");y.textContent="Chuggy Freeze";const x=new Image;x.src=b;const E=document.createElement("p");E.textContent="The perfect topper on any party. Ask about the birthday cup!",f.append(y,x,E);const C=document.createElement("span");C.innerHTML="Made by Craig Shields for <a href='www.theodinproject.com'>The Odin Project</a>.",t.append(n,c,u,f,C),e.append(t)},x=()=>{w();const e=document.querySelector("#content"),t=new Image;t.src="../assets/dog-arcade.jpeg";const n=document.createElement("div");n.innerHTML="<h2>Address</h2><p>1406 S. Fairview St.<br>Santa Ana, CA 92704</p>";const o=document.createElement("div");o.innerHTML="<h2>Phone Number</h2><p>(714) 435-7857</p>";const r=document.createElement("div");r.innerHTML="<h2>Email</h2><p><a href='mailto:dale@chughut.com'>dale@chughut.com</a></p>";const a=document.createElement("div");a.id="contact-info",a.append(n,o,r);const c=document.createElement("span");c.innerHTML="Made by Craig Shields for <a href='www.theodinproject.com'>The Odin Project</a>.",e.append(t,a,c)},w=()=>{const e=document.querySelector("#content");for(;e.firstChild;)e.firstChild.remove();const t=document.createElement("div");t.id="btn-container";const n=document.createElement("button");n.classList.add("home-btn"),n.textContent="Home",n.addEventListener("click",E);const o=document.createElement("button");o.classList.add("menu-btn"),o.textContent="Menu",o.addEventListener("click",y);const r=document.createElement("button");r.classList.add("contact-btn"),r.textContent="Contact",r.addEventListener("click",x),t.append(n,o,r),e.append(t)},E=()=>{w();const e=document.querySelector("#content"),t=new Image;t.src="../assets/dale-desk.jpeg";const n=document.createElement("h1");n.textContent="Chug Hut";const o=document.createElement("p");o.textContent="Chef Dale is hard at work making sure that the pizzas, pancakes, and pies at Chug Hut are sourced from Orange County's finest vendors.";const r=document.createElement("span");r.textContent="Made by Craig Shields for The Odin Project.",e.append(t,n,o,r)};E()})()})();
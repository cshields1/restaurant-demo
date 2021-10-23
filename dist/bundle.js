(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>i});var o=n(81),r=n.n(o),c=n(645),a=n.n(c)()(r());a.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Zen+Kurenaido&display=swap);"]),a.push([e.id,"* {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n  font-family: 'Zen Kurenaido', sans-serif;\n  color: #1f1f1f;\n}\n\nbody {\n  min-height: 100%;\n  background-color: #d13636;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n\n#content {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n}\n\nimg {\n  max-width: 500px;\n  min-width: 20%;\n  height: auto;\n  border: 2px solid black;\n  border-radius: 5px;\n}\n\nh1 {\n  text-decoration: underline;\n}\n\nh1, h2 {\n  font-size: 2.5em;\n}\n\np {\n  margin: 1rem 0;\n  padding: 0 17rem;\n  font-size: 18px;\n}\n\n#btn-container {\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n}\n\nbutton {\n  padding: 0 1rem;\n  flex-grow: 1;\n  background-color: #e44545;\n  font-size: 1.5em;\n  border: 1px solid black;\n  margin-bottom: 1rem;\n  transition: all .1s ease-in-out;\n}\n\nbutton:hover {\n  color: white;\n  background-color: #FF4747;\n}\n\n#contact-info {\n  width: 100%;\n}\n\na {\n  text-decoration: none;\n}\n\na:hover {\n  text-decoration: underline;\n}\n\n#signature {\n  margin: 1rem 0;\n}",""]);const i=a},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",o=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),o&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),o&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,o,r,c){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(o)for(var i=0;i<this.length;i++){var s=this[i][0];null!=s&&(a[s]=!0)}for(var d=0;d<e.length;d++){var u=[].concat(e[d]);o&&a[u[0]]||(void 0!==c&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=c),n&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=n):u[2]=n),r&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=r):u[4]="".concat(r)),t.push(u))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,o=0;o<t.length;o++)if(t[o].identifier===e){n=o;break}return n}function o(e,o){for(var c={},a=[],i=0;i<e.length;i++){var s=e[i],d=o.base?s[0]+o.base:s[0],u=c[d]||0,p="".concat(d," ").concat(u);c[d]=u+1;var l=n(p),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==l)t[l].references++,t[l].updater(m);else{var f=r(m,o);o.byIndex=i,t.splice(i,0,{identifier:p,updater:f,references:1})}a.push(p)}return a}function r(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,r){var c=o(e=e||[],r=r||{});return function(e){e=e||[];for(var a=0;a<c.length;a++){var i=n(c[a]);t[i].references--}for(var s=o(e,r),d=0;d<c.length;d++){var u=n(c[d]);0===t[u].references&&(t[u].updater(),t.splice(u,1))}c=s}}},569:e=>{var t={};e.exports=function(e,n){var o=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,r&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var c=n.sourceMap;c&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(c))))," */")),t.styleTagTransform(o,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},571:(e,t,n)=>{e.exports=n.p+"5dc9f280d8899f274263.jpeg"},160:(e,t,n)=>{e.exports=n.p+"a746909a6dac00e7ceda.jpeg"},757:(e,t,n)=>{e.exports=n.p+"7ae0a5f5402c40e99897.jpeg"},747:(e,t,n)=>{e.exports=n.p+"084f06884053145663eb.jpeg"},788:(e,t,n)=>{e.exports=n.p+"b63d6158b07a67e9a408.jpeg"},872:(e,t,n)=>{e.exports=n.p+"d3cf1b543c9f9f78d995.jpeg"}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var c=t[o]={id:o,exports:{}};return e[o](c,c.exports,n),c.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var o=t.getElementsByTagName("script");o.length&&(e=o[o.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),(()=>{var e=n(379),t=n.n(e),o=n(795),r=n.n(o),c=n(569),a=n.n(c),i=n(565),s=n.n(i),d=n(216),u=n.n(d),p=n(589),l=n.n(p),m=n(426),f={};f.styleTagTransform=l(),f.setAttributes=s(),f.insert=a().bind(null,"head"),f.domAPI=r(),f.insertStyleElement=u(),t()(m.Z,f),m.Z&&m.Z.locals&&m.Z.locals;var h=n(747),v=n(872),g=n(571),x=n(788);const b=()=>{const e=document.querySelector("#content"),t=document.createElement("p");t.id="signature";const n=document.createElement("a");n.setAttribute("href","https://www.theodinproject.com"),n.textContent="The Odin Project",t.textContent="Made by Craig Shields for ",t.append(n),e.append(t)},y=()=>{w();const e=document.querySelector("#content"),t=document.createElement("div");t.id="menu";const n=document.createElement("div"),o=document.createElement("h2");o.textContent="Peanut Butter Bacon Bites";const r=new Image;r.src=h;const c=document.createElement("p");c.textContent="Salt and umami collide in these chewy, hot-out-of-the-oven delights.",n.append(o,r,c);const a=document.createElement("div"),i=document.createElement("h2");i.textContent="Tuna and Apple Refresh";const s=new Image;s.src=v;const d=document.createElement("p");d.textContent="Add the zest your day is missing beside the comfort of an old favorite.",a.append(i,s,d);const u=document.createElement("div"),p=document.createElement("h2");p.textContent="Cheesy Chicken Deluxe";const l=new Image;l.src=g;const m=document.createElement("p");m.textContent="Our signature pie, topped with juicy chicken and mountains of melted cheese.",u.append(p,l,m);const f=document.createElement("div"),y=document.createElement("h2");y.textContent="Chuggy Freeze";const E=new Image;E.src=x;const C=document.createElement("p");C.textContent="The perfect topper on any party. Ask about the birthday cup!",f.append(y,E,C),t.append(n,a,u,f),e.append(t),b()};var E=n(757);const C=()=>{w();const e=document.querySelector("#content"),t=new Image;t.src=E;const n=document.createElement("div"),o=document.createElement("h2");o.textContent="Address";const r=document.createElement("p");r.textContent="1406 S. Fairview St., Santa Ana, CA 92704",n.append(o,r);const c=document.createElement("div"),a=document.createElement("h2");a.textContent="Phone Number";const i=document.createElement("p");i.textContent="(714) 435-7857",c.append(a,i);const s=document.createElement("div"),d=document.createElement("h2");d.textContent="Email";const u=document.createElement("p"),p=document.createElement("a");p.setAttribute("href","mailto:dale@chughut.com"),p.textContent="dale@chughut.com",u.append(p),s.append(d,u,p);const l=document.createElement("div");l.id="contact-info",l.append(n,c,s),e.append(t,l),b()},w=()=>{const e=document.querySelector("#content");for(;e.firstChild;)e.firstChild.remove();const t=document.createElement("div");t.id="btn-container";const n=document.createElement("button");n.classList.add("home-btn"),n.textContent="Home",n.addEventListener("click",j);const o=document.createElement("button");o.classList.add("menu-btn"),o.textContent="Menu",o.addEventListener("click",y);const r=document.createElement("button");r.classList.add("contact-btn"),r.textContent="Contact",r.addEventListener("click",C),t.append(n,o,r),e.append(t)};var S=n(160);const j=()=>{w();const e=document.querySelector("#content"),t=new Image;t.src=S;const n=document.createElement("h1");n.textContent="Chug Hut";const o=document.createElement("p");o.textContent="Chef Dale is hard at work making sure that the pizzas, pancakes, and pies at Chug Hut are sourced from Orange County's finest vendors.",e.append(t,n,o),b()};j()})()})();
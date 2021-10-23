(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>i});var r=t(81),o=t.n(r),a=t(645),c=t.n(a)()(o());c.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Zen+Kurenaido&display=swap);"]),c.push([e.id,"* {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n  font-family: 'Zen Kurenaido', sans-serif;\n  color: #1f1f1f;\n}\n\nbody {\n  min-height: 100%;\n  background-color: #d13636;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n\n#content {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n}\n\nimg {\n  max-width: 500px;\n  min-width: 20%;\n  height: auto;\n  border: 2px solid black;\n  border-radius: 5px;\n}\n\nh1 {\n  text-decoration: underline;\n}\n\nh1, h2 {\n  font-size: 2.5em;\n}\n\np {\n  margin: 1rem 0;\n  padding: 0 17rem;\n  font-size: 18px;\n}\n\n#btn-container {\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n}\n\nbutton {\n  padding: 0 1rem;\n  flex-grow: 1;\n  background-color: #e44545;\n  font-size: 1.5em;\n  border: 1px solid black;\n  margin-bottom: 1rem;\n  transition: all .1s ease-in-out;\n}\n\nbutton:hover {\n  color: white;\n  background-color: #FF4747;\n}\n\n#contact-info {\n  width: 100%;\n}\n\na {\n  text-decoration: none;\n}\n\na:hover {\n  text-decoration: underline;\n}\n\nspan {\n  margin: 1rem 0;\n}",""]);const i=c},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var c={};if(r)for(var i=0;i<this.length;i++){var s=this[i][0];null!=s&&(c[s]=!0)}for(var d=0;d<e.length;d++){var u=[].concat(e[d]);r&&c[u[0]]||(void 0!==a&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=a),t&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=t):u[2]=t),o&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=o):u[4]="".concat(o)),n.push(u))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var a={},c=[],i=0;i<e.length;i++){var s=e[i],d=r.base?s[0]+r.base:s[0],u=a[d]||0,p="".concat(d," ").concat(u);a[d]=u+1;var l=t(p),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==l)n[l].references++,n[l].updater(m);else{var h=o(m,r);r.byIndex=i,n.splice(i,0,{identifier:p,updater:h,references:1})}c.push(p)}return c}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var c=0;c<a.length;c++){var i=t(a[c]);n[i].references--}for(var s=r(e,o),d=0;d<a.length;d++){var u=t(a[d]);0===n[u].references&&(n[u].updater(),n.splice(u,1))}a=s}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var a=n[r]={id:r,exports:{}};return e[r](a,a.exports,t),a.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e=t(379),n=t.n(e),r=t(795),o=t.n(r),a=t(569),c=t.n(a),i=t(565),s=t.n(i),d=t(216),u=t.n(d),p=t(589),l=t.n(p),m=t(426),h={};h.styleTagTransform=l(),h.setAttributes=s(),h.insert=c().bind(null,"head"),h.domAPI=o(),h.insertStyleElement=u(),n()(m.Z,h),m.Z&&m.Z.locals&&m.Z.locals;const f=()=>{g();const e=document.querySelector("#content"),n=document.createElement("div");n.id="menu";const t=document.createElement("div");t.innerHTML="<h2>Peanut Butter Bacon Bites</h2><img src='../assets/peanut-butter-bacon-bites.jpeg'><p>Salt and umami collide in these chewy, hot-out-of-the-oven delights.</p>";const r=document.createElement("div");r.innerHTML="<h2>Tuna and Apple Refresh</h2><img src='../assets/tuna-apple-salad.jpeg'><p>Add the zest your day is missing beside the comfort of an old favorite.</p>";const o=document.createElement("div");o.innerHTML="<h2>Cheesy Chicken Deluxe</h2><img src='../assets/cheesy-chicken-pizza.jpeg'><p>Our signature pie, topped with juicy chicken and mountains of melted cheese.</p>";const a=document.createElement("div");a.innerHTML="<h2>Chuggy Freeze</h2><img src='../assets/peanut-butter-banana-ice-cream.jpeg'><p>The perfect topper on any party. Ask about the birthday cup!</p>";const c=document.createElement("span");c.innerHTML="Made by Craig Shields for <a href='www.theodinproject.com'>The Odin Project</a>.",n.append(t,r,o,a,c),e.append(n)},v=()=>{g();const e=document.querySelector("#content"),n=new Image;n.src="../assets/dog-arcade.jpeg";const t=document.createElement("div");t.innerHTML="<h2>Address</h2><p>1406 S. Fairview St.<br>Santa Ana, CA 92704</p>";const r=document.createElement("div");r.innerHTML="<h2>Phone Number</h2><p>(714) 435-7857</p>";const o=document.createElement("div");o.innerHTML="<h2>Email</h2><p><a href='mailto:dale@chughut.com'>dale@chughut.com</a></p>";const a=document.createElement("div");a.id="contact-info",a.append(t,r,o);const c=document.createElement("span");c.innerHTML="Made by Craig Shields for <a href='www.theodinproject.com'>The Odin Project</a>.",e.append(n,a,c)},g=()=>{const e=document.querySelector("#content");for(;e.firstChild;)e.firstChild.remove();const n=document.createElement("div");n.id="btn-container";const t=document.createElement("button");t.classList.add("home-btn"),t.textContent="Home",t.addEventListener("click",b);const r=document.createElement("button");r.classList.add("menu-btn"),r.textContent="Menu",r.addEventListener("click",f);const o=document.createElement("button");o.classList.add("contact-btn"),o.textContent="Contact",o.addEventListener("click",v),n.append(t,r,o),e.append(n)},b=()=>{g();const e=document.querySelector("#content"),n=new Image;n.src="../assets/dale-desk.jpeg";const t=document.createElement("h1");t.textContent="Chug Hut";const r=document.createElement("p");r.textContent="Chef Dale is hard at work making sure that the pizzas, pancakes, and pies at Chug Hut are sourced from Orange County's finest vendors.";const o=document.createElement("span");o.innerHTML="Made by Craig Shields for <a href='www.theodinproject.com'>The Odin Project</a>.",e.append(n,t,r,o)};b()})()})();
!function(e){function t(t){for(var r,i,u=t[0],c=t[1],l=t[2],f=0,p=[];f<u.length;f++)i=u[f],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&p.push(o[i][0]),o[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);for(s&&s(t);p.length;)p.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,u=1;u<n.length;u++){var c=n[u];0!==o[c]&&(r=!1)}r&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={0:0},a=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var u=window.webpackJsonp=window.webpackJsonp||[],c=u.push.bind(u);u.push=t,u=u.slice();for(var l=0;l<u.length;l++)t(u[l]);var s=c;a.push([19,2]),n()}([,function(e,t){e.exports=React},,,function(e,t){e.exports=ReactDOM},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e){for(var n in e)t.hasOwnProperty(n)||(t[n]=e[n])}(n(12))},,function(e){e.exports=JSON.parse('{"apiKey":"AIzaSyA91JVTqR91yhKe5F386NQt_r7D3X3l_18","databaseURL":"https://plain-hardware.firebaseio.com","storageBucket":"plain-hardware.appspot.com","authDomain":"plain-hardware.firebaseapp.com","messagingSenderId":"524339526113","projectId":"plain-hardware"}')},function(e,t,n){var r=n(9);"string"==typeof r&&(r=[[e.i,r,""]]);var o={insert:"head",singleton:!1};n(11)(r,o);r.locals&&(e.exports=r.locals)},function(e,t,n){(e.exports=n(10)(!1)).push([e.i,"",""])},,,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e){for(var n in e)t.hasOwnProperty(n)||(t[n]=e[n])}(n(13))},function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=r(n(1));t.Button=function(e){var t=e.children,n=e.onClick;return o.default.createElement("button",{onClick:n,type:"button"},t)},t.Button.displayName="Button",t.default=t.Button},,,,,,function(e,t,n){"use strict";n.r(t);var r=n(1),o=n.n(r),a=n(4),i=n.n(a),u=(n(8),n(5)),c=n(6),l=(n(16),n(7));i.a.render(o.a.createElement((function(){return o.a.createElement(u.Button,null,"Remove")}),null),document.querySelector("#app")),"serviceWorker"in navigator&&window.addEventListener("load",(function(){navigator.serviceWorker.register("/serviceWorker.v1.ph.js")}));document.addEventListener("DOMContentLoaded",(function(){try{var e=c.initializeApp(l,"Plain Hardware");e.auth().signInAnonymously().catch((function(e){return console.log(e)}));var t=["auth","database","messaging","storage","firestore"].filter((function(t){return"function"==typeof e[t]}));console.log("Firebase SDK loaded with "+t.join(", "))}catch(e){console.error(e),document.getElementById("load").innerHTML="Error loading the Firebase SDK, check the console."}}))}]);
!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=74)}({74:function(t,e,n){var r=["/","index.v1.ph.css","index.v1.ph.js","vendors~index.v1.ph.js","manifest.json","static/assets/favicon.ico","static/assets/logo.png","static/assets/favicon-16x16.png","static/assets/favicon-32x32.png","static/assets/android-chrome-192x192.png","static/assets/android-chrome-512x512.png","static/assets/apple-touch-icon.png","https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap","https://fonts.googleapis.com/icon?family=Material+Icons","https://unpkg.com/react@16.9.0/umd/react.production.min.js","https://unpkg.com/react-dom@16.9.0/umd/react-dom.production.min.js"],o=function(t){return t.addAll(r)},s=function(t){return"v1.ph"!==t},c=function(t){return Promise.all(function(t){return t.filter(s)}(t).map((function(t){return caches.delete(t)})))};self.addEventListener("install",(function(t){return t.waitUntil(caches.open("v1.ph").then(o))})),self.addEventListener("activate",(function(t){return t.waitUntil(caches.keys().then(c))})),self.addEventListener("fetch",(function(t){t.respondWith(caches.match(t.request).then((function(e){return e||fetch(t.request).then((function(e){return/^https:\/\/www\.gstatic\.com/.test(t.request.url)?caches.open("v1.ph").then((function(n){return n.put(t.request,e.clone()),e})):e}))})))}))}});
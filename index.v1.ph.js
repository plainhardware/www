!function(e){function t(t){for(var r,i,c=t[0],u=t[1],l=t[2],f=0,d=[];f<c.length;f++)i=c[f],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&d.push(a[i][0]),a[i]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);for(s&&s(t);d.length;)d.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,c=1;c<n.length;c++){var u=n[c];0!==a[u]&&(r=!1)}r&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={1:0},o=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var c=window.webpackJsonp=window.webpackJsonp||[],u=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var s=u;o.push([68,3]),n()}({0:function(e,t){e.exports=React},13:function(e,t){e.exports=ReactDOM},31:function(e,t,n){"use strict";function r(e){for(var n in e)t.hasOwnProperty(n)||(t[n]=e[n])}Object.defineProperty(t,"__esModule",{value:!0}),r(n(40)),r(n(41))},39:function(e,t,n){},40:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Sum=function(e,t){return e+t},t.default=t.Sum},41:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Sub=function(e,t){return e-t},t.default=t.Sub},68:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(13),i=n.n(o),c=(n(39),n(93)),u=n(33),l=n.n(u),s=n(90),f=n(91),d=n(92),p=n(31),m=n(32),b=l()((function(e){return{root:{flexGrow:1},paper:{padding:e.spacing(2),margin:"auto",maxWidth:500},image:{width:128,height:128},img:{margin:"auto",display:"block",maxWidth:"100%",maxHeight:"100%"}}})),g=function(){var e=b();return a.a.createElement("div",{className:e.root},a.a.createElement(s.a,{className:e.paper},a.a.createElement(f.a,{container:!0,spacing:2},a.a.createElement(f.a,{item:!0},a.a.createElement(d.a,{className:e.image},a.a.createElement("img",{alt:"logo",src:"/static/assets/favicon-32x32.png"}))),a.a.createElement(f.a,{item:!0,xs:12,sm:!0,container:!0},a.a.createElement(f.a,{item:!0,xs:!0,container:!0,direction:"column",spacing:2},a.a.createElement(f.a,{item:!0,xs:!0},a.a.createElement(c.a,{gutterBottom:!0,variant:"subtitle1"},"Standard license"),a.a.createElement(c.a,{variant:"body2",gutterBottom:!0},"Full resolution 1920x1080 • JPEG"),a.a.createElement(c.a,{variant:"body2",color:"textSecondary"},"ID: 1030114")),a.a.createElement(f.a,{item:!0},a.a.createElement(c.a,{variant:"body2",style:{cursor:"pointer"}},a.a.createElement(m.Button,null,"Remove")))),a.a.createElement(f.a,{item:!0},a.a.createElement(c.a,{variant:"subtitle1"},"$",Object(p.Sub)(19,1),".00"))))))};i.a.render(a.a.createElement(g,null),document.querySelector("#app"));document.addEventListener("DOMContentLoaded",(function(){try{var e=firebase.app("Plain Hardware");e.firestore();var t=["auth","database","messaging","storage","firestore"].filter((function(t){return"function"==typeof e[t]}));console.log("Firebase SDK loaded with "+t.join(", "))}catch(e){console.error(e),document.getElementById("load").innerHTML="Error loading the Firebase SDK, check the console."}}))}});
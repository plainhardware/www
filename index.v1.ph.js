!function(e){function t(t){for(var n,i,c=t[0],l=t[1],u=t[2],p=0,d=[];p<c.length;p++)i=c[p],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&d.push(a[i][0]),a[i]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);for(s&&s(t);d.length;)d.shift()();return o.push.apply(o,u||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],n=!0,c=1;c<r.length;c++){var l=r[c];0!==a[l]&&(n=!1)}n&&(o.splice(t--,1),e=i(i.s=r[0]))}return e}var n={},a={1:0},o=[];function i(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=e,i.c=n,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(r,n,function(t){return e[t]}.bind(null,n));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var c=window.webpackJsonp=window.webpackJsonp||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var s=l;o.push([64,3]),r()}({0:function(e,t){e.exports=React},13:function(e,t){e.exports=ReactDOM},38:function(e,t,r){},39:function(e,t,r){},64:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),o=r(13),i=r.n(o),c=(r(38),r(89)),l=r(32),u=r.n(l),s=r(86),p=r(87),d=r(88),f=(r(39),u()(function(e){return{root:{flexGrow:1},paper:{padding:e.spacing(2),margin:"auto",maxWidth:500},image:{width:128,height:128},img:{margin:"auto",display:"block",maxWidth:"100%",maxHeight:"100%"}}})),m=function(){var e=f();return a.a.createElement("div",{className:e.root},a.a.createElement(s.a,{className:e.paper},a.a.createElement(p.a,{container:!0,spacing:2},a.a.createElement(p.a,{item:!0},a.a.createElement(d.a,{className:e.image},a.a.createElement("img",{alt:"logo",src:"/static/assets/favicon-32x32.png"}))),a.a.createElement(p.a,{item:!0,xs:12,sm:!0,container:!0},a.a.createElement(p.a,{item:!0,xs:!0,container:!0,direction:"column",spacing:2},a.a.createElement(p.a,{item:!0,xs:!0},a.a.createElement(c.a,{gutterBottom:!0,variant:"subtitle1"},"Standard license"),a.a.createElement(c.a,{variant:"body2",gutterBottom:!0},"Full resolution 1920x1080 • JPEG"),a.a.createElement(c.a,{variant:"body2",color:"textSecondary"},"ID: 1030114")),a.a.createElement(p.a,{item:!0},a.a.createElement(c.a,{variant:"body2",style:{cursor:"pointer"}},"Remove"))),a.a.createElement(p.a,{item:!0},a.a.createElement(c.a,{variant:"subtitle1"},"$19.00"))))))};i.a.render(a.a.createElement(m,null),document.querySelector("#app")),"serviceWorker"in navigator&&window.addEventListener("load",function(){navigator.serviceWorker.register("/serviceWorker.v1.ph.js")});document.addEventListener("DOMContentLoaded",function(){try{var e=firebase.app("Plain Hardware");e.firestore();var t=["auth","database","messaging","storage","firestore"].filter(function(t){return"function"==typeof e[t]});console.log("Firebase SDK loaded with "+t.join(", "))}catch(e){console.error(e),document.getElementById("load").innerHTML="Error loading the Firebase SDK, check the console."}})}});
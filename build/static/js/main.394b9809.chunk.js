(window["webpackJsonpfixed-website"]=window["webpackJsonpfixed-website"]||[]).push([[0],{35:function(n,e,t){"use strict";var r=t(9),a=t(1),c=t.n(a),i=t(2),u=t(3);function o(){var n=Object(i.a)(["\n    * {\n        margin: 0;\n        padding: 0;\n        outline: 0;\n        box-sizing: border-box;\n        :focus {\n            outline: 0;\n            border: 0;\n        }\n    }\n    html, body, #root {\n        height: 100%;\n        background-color: #eee; \n    }\n    ul {\n        list-style: none;\n        li {\n            cursor: pointer;\n        }\n    }\n"]);return o=function(){return n},n}var l=Object(u.a)(o()),s=t(33);function f(){var n=Object(i.a)(['\n    font-family: "Calibri Bold";\n    text-transform: uppercase;\n    letter-spacing: 3px;\n    font-size: 20px;\n    margin-left: 10px;\n']);return f=function(){return n},n}var p=u.b.span(f());function m(){var n=Object(i.a)(["\n  position: absolute;\n  height: 100vh;\n  width: 100%;\n  left: 0px;\n  bottom: 0px;\n  top: 82.5px;\n  background: rgba(0, 0, 0, 0.5);\n  transition: all 0.7s;\n  z-index: -2;\n"]);return m=function(){return n},n}var d=u.b.div(m()),b=t(8),h=function(n){return{type:"CHANGEPAGE",page:n}},v=(t(49),function(){var n=Object(b.c)((function(n){return n.changePage})),e=Object(b.b)(),t=Object(a.useState)(!1),i=Object(r.a)(t,2),u=i[0],o=i[1];return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"projects-wrapper"},c.a.createElement(s.a,{size:32,style:{cursor:"pointer"},onClick:function(){return o(!u)}}),c.a.createElement(p,null,n),c.a.createElement("nav",{className:"leftMenu ".concat(u?"showLeftMenu":"hideLeftMenu")},c.a.createElement("ul",null,["Development"].map((function(n){return c.a.createElement("li",{key:n,onClick:function(){return function(n){o(!u),e(h(n))}(n)}},n)}))))),c.a.createElement(d,{className:"".concat(u?"showOpacScreen":"hideOpacScreen"),onClick:function(){return o(!u)}}))}),E=t(34),g=function(){return c.a.createElement("div",{className:"search-wrapper "},c.a.createElement(E.a,{size:28}),c.a.createElement(p,null,"Search"))},O=(t(50),function(){return c.a.createElement("header",null,c.a.createElement(v,null),c.a.createElement("div",{className:"title-wrapper"},c.a.createElement("h1",null,"Arthur Ussuy")),c.a.createElement(g,null))}),w=t(5),j=t.n(w),x=t(12);function y(){var n=Object(i.a)(['\n  width: 100%;\n  font-size: 40px;\n  font-family: "Calibri Regular Italic";\n  text-align: left;\n  margin-bottom: 50px;\n  margin-left: 5%;\n']);return y=function(){return n},n}function k(){var n=Object(i.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-items: center;\n  width: 75%;\n  margin: 0 auto;\n"]);return k=function(){return n},n}function N(){var n=Object(i.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  margin-top: 2%;\n"]);return N=function(){return n},n}var C=u.b.div(N()),_=u.b.div(k());u.b.h1(y());function P(){var n=Object(i.a)(['\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  background: rgba(0, 0, 0, 0.5);\n  opacity: 0;\n  transition: all 0.8s;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  ul {\n    li {\n      font-size: 40px;\n      color: #fff;\n      font-family: "Calibri Regular";\n    }\n  }\n']);return P=function(){return n},n}function z(){var n=Object(i.a)(['\n  display: block;\n  height: 100%;\n  width: 100%;\n  color: #fff;\n  font-size: 25px;\n  font-family: "Calibri Regular";\n']);return z=function(){return n},n}function S(){var n=Object(i.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n  width: 100%;\n"]);return S=function(){return n},n}function R(){var n=Object(i.a)(["\n  height: 100%;\n  width: 100%;\n  color: #fff;\n  font-size: 25px;\n"]);return R=function(){return n},n}function A(){var n=Object(i.a)(["\n  width: 100%;\n  height: 100%;\n  background-size: cover;\n  background-position: center;\n  transform: scale(1);\n  transition: all 0.5s;\n"]);return A=function(){return n},n}function D(){var n=Object(i.a)(["\n  position: relative;\n  overflow: hidden;\n  width: 50%;\n  min-width: 400px;\n  height: 400px;\n  cursor: pointer;\n  :hover div,\n  div div {\n    transform: scale(1.2);\n    opacity: 1;\n  }\n"]);return D=function(){return n},n}var T=u.b.div(D()),H=u.b.div(A()),I=u.b.a(R()),L=u.b.ul(S()),G=u.b.li(z()),M=u.b.div(P()),U=function(n){var e=n.content;return c.a.createElement(T,null,c.a.createElement(H,{style:{backgroundImage:"url(".concat(e.photo,")")}}),c.a.createElement(M,null,c.a.createElement(G,null,c.a.createElement(L,null,e.description.url?c.a.createElement(I,{href:e.description.url,target:"_blank"}):e.name))))},V=t(18),X=t.n(V),F=function(){var n=Object(x.a)(j.a.mark((function n(){var e;return j.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return"http://localhost:4003/PHOTOGRAPH",n.next=3,X()("http://localhost:4003/PHOTOGRAPH");case 3:return e=n.sent,n.abrupt("return",e.data);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),B=function(){var n=Object(x.a)(j.a.mark((function n(){var e;return j.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return"http://localhost:4003/DEVELOPMENT",n.next=3,X()("http://localhost:4003/DEVELOPMENT");case 3:return e=n.sent,n.abrupt("return",e.data);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),J=function(){var n=Object(b.c)((function(n){return n.changePage})),e=Object(a.useState)(n),t=Object(r.a)(e,2),i=t[0],u=t[1],o=Object(a.useState)(),l=Object(r.a)(o,2),s=l[0],f=l[1];Object(a.useEffect)((function(){d()}),[n]);var p=function(){var n=Object(x.a)(j.a.mark((function n(){var e;return j.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,F();case 2:e=n.sent,f(e),console.log(e);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),m=function(){var n=Object(x.a)(j.a.mark((function n(){var e;return j.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,B();case 2:e=n.sent,f(e),console.log(e);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),d=function(){switch(u(n),n){case"Photograph":return void p();case"Development":return void m();default:return n}};return c.a.createElement(c.a.Fragment,null,c.a.createElement(C,{key:i},c.a.createElement(_,null,s?s.map((function(n){return c.a.createElement(U,{content:n,key:n.id})})):"")))},K=(t(68),function(){return c.a.createElement("div",{className:"main-wrapper"},c.a.createElement("main",{className:"main"},c.a.createElement(J,null)))}),q=(t(69),function(){return c.a.createElement("footer",null,c.a.createElement("h2",null,"\xa9 Arthur Ussuy INC. All Rights Reserved."))});function Q(){var n=Object(i.a)(["\n  z-index: 1;\n  display: grid;\n  grid-template-rows: 100% 200px;\n  grid-template-columns: auto;\n"]);return Q=function(){return n},n}var W=u.b.div(Q()),Y=function(){return c.a.createElement(W,null,c.a.createElement(O,null),c.a.createElement(K,null),c.a.createElement(q,null))};e.a=function(){var n=Object(a.useState)(!0),e=Object(r.a)(n,2),t=(e[0],e[1]);return c.a.createElement(c.a.Fragment,null,c.a.createElement(l,null),c.a.createElement(Y,null),c.a.createElement("button",{onClick:function(){return t(!1)}},"CLICK HERE"))}},36:function(n,e,t){"use strict";var r=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Development",e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"CHANGEPAGE":return n=e.page;default:return n}},a=t(11),c=Object(a.b)({changePage:r});e.a=c},39:function(n,e,t){n.exports=t(40)},40:function(n,e,t){"use strict";t.r(e),function(n){var e=t(1),r=t.n(e),a=t(13),c=t.n(a),i=t(35),u=t(36),o=t(11),l=t(8),s=Object(o.c)(u.a,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());c.a.render(r.a.createElement(l.a,{store:s},r.a.createElement(i.a,null)),n.document.getElementById("root"))}.call(this,t(19))},49:function(n,e,t){},50:function(n,e,t){},68:function(n,e,t){},69:function(n,e,t){}},[[39,1,2]]]);
//# sourceMappingURL=main.394b9809.chunk.js.map
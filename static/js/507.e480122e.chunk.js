"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[507],{3309:function(n,t,e){e.d(t,{l:function(){return s},x:function(){return c}});var r,o,i=e(168),a=e(6444),s=a.ZP.form(r||(r=(0,i.Z)(["\n    margin-top: 16px;\n    display: flex;\n    flex-direction: column;\n    gap: 24px;\n    & button{\n        font-weight: 700;\n        margin: 0 auto;\n        max-width: 150px;\n        background-color: ",";\n        border: ",";\n        border-radius: ",";\n        &:hover{\n            background-color: ",";\n            color: ",";\n        }\n    }\n"])),(function(n){return n.theme.colors.white}),(function(n){return n.theme.borders.card}),(function(n){return n.theme.radii.md}),(function(n){return n.theme.colors.secondary}),(function(n){return n.theme.colors.white})),c=a.ZP.label(o||(o=(0,i.Z)(["\n    display: flex;\n    justify-content: space-between;\n    & input{\n        width: 380px;\n        border-top: none;\n        border-left: none;\n        border-right: none;\n        border-bottom: ",";\n        outline: none;\n    }\n"])),(function(n){return n.theme.borders.card}))},3507:function(n,t,e){e.r(t),e.d(t,{default:function(){return Q}});var r,o,i,a,s=e(4270),c=e(9439),d=e(2791),u=e(5984),l=e(3309),h=e(8174),p=e(9434),f=e(3661),x=e(208),m=e(184),y=function(){var n=(0,d.useState)(""),t=(0,c.Z)(n,2),e=t[0],r=t[1],o=(0,d.useState)(""),i=(0,c.Z)(o,2),a=i[0],s=i[1],y=(0,p.I0)(),k=(0,p.v9)(f.K2),b=function(n){var t=n.target,e=t.name,o=t.value;switch(e){case"name":return r(o);case"number":return s(o);default:return}},v=function(n){return k.find((function(t){return t.name.toLocaleLowerCase()===n.toLocaleLowerCase()}))},g=(0,u.x0)(),j=(0,u.x0)();return(0,m.jsxs)(l.l,{onSubmit:function(n){if(n.preventDefault(),v(e))return h.Am.error("".concat(e," is already add"));y((0,x.el)({name:e,number:a})),r(""),s("")},children:[(0,m.jsxs)(l.x,{htmlFor:g,children:[" Name:",(0,m.jsx)("input",{id:g,type:"text",name:"name",onChange:b,value:e,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,m.jsxs)(l.x,{htmlFor:j,children:[" Number:",(0,m.jsx)("input",{id:j,type:"tel",name:"number",onChange:b,value:a,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,m.jsx)("button",{type:"submit",children:"Add contact"})]})},k=e(168),b=e(6444),v=b.ZP.li(r||(r=(0,k.Z)(["\n    margin-top: ","px;\n    display: flex;\n    justify-content: space-between;\n    gap: 48px;\n    & button{\n        background-color: ",";\n        border: ",";\n        border-radius: ",";\n        &:hover{\n            background-color: ",";\n            color: ",";\n        }\n    }\n"])),(function(n){return n.theme.space[3]}),(function(n){return n.theme.colors.white}),(function(n){return n.theme.borders.card}),(function(n){return n.theme.radii.md}),(function(n){return n.theme.colors.secondary}),(function(n){return n.theme.colors.white})),g=function(n){var t=n.contacts,e=t.id,r=t.name,o=t.number,i=(0,p.I0)();return(0,m.jsxs)(v,{children:[(0,m.jsxs)("p",{children:[r,": ",o]}),(0,m.jsx)("button",{type:"button",onClick:function(){return i((0,x._f)(e))},children:"Delete"})]},e)},j=function(){var n=(0,p.v9)(f.K2),t=(0,p.v9)((function(n){return n.filter})),e=(0,p.I0)();(0,d.useEffect)((function(){e((0,x.yF)())}),[e]);var r=t?n.filter((function(n){return n.name.toLocaleLowerCase().includes(t.toLocaleLowerCase())})):n;return(0,m.jsx)("ul",{children:r.map((function(n){return(0,m.jsx)(g,{contacts:n},n.id)}))})},w=b.ZP.label(o||(o=(0,k.Z)(["\n    display: flex;\n    flex-direction: column;\n    & input{\n        width: 209px;\n        border-top: none;\n        border-left: none;\n        border-right: none;\n        border-bottom: ",";\n        outline: none;\n    }\n"])),(function(n){return n.theme.borders.card})),Z=e(6895),P=function(){var n=(0,u.x0)(),t=(0,p.I0)(),e=(0,p.v9)((function(n){return n.filter}));return(0,m.jsx)(m.Fragment,{children:(0,m.jsxs)(w,{htmlFor:n,children:["Find contact by name:",(0,m.jsx)("input",{id:n,type:"text",name:"filter",value:e,onChange:function(n){var e=n.target.value;t((0,Z.K)(e))}})]})})},C=function(n,t){return Object.defineProperty?Object.defineProperty(n,"raw",{value:t}):n.raw=t,n},L=242.776657104492,F=(0,b.F4)(i||(i=C(["\n  12.5% {\n    stroke-dasharray: ","px, ","px;\n    stroke-dashoffset: -","px;\n  }\n  43.75% {\n    stroke-dasharray: ","px, ","px;\n    stroke-dashoffset: -","px;\n  }\n  100% {\n    stroke-dasharray: ","px, ","px;\n    stroke-dashoffset: -","px;\n  }\n"],["\n  12.5% {\n    stroke-dasharray: ","px, ","px;\n    stroke-dashoffset: -","px;\n  }\n  43.75% {\n    stroke-dasharray: ","px, ","px;\n    stroke-dashoffset: -","px;\n  }\n  100% {\n    stroke-dasharray: ","px, ","px;\n    stroke-dashoffset: -","px;\n  }\n"])),.14*L,L,.11*L,.35*L,L,.35*L,.01*L,L,.99*L),A=b.ZP.path(a||(a=C(["\n  stroke-dasharray: ","px, ",";\n  stroke-dashoffset: 0;\n  animation: "," ","s linear infinite;\n"],["\n  stroke-dasharray: ","px, ",";\n  stroke-dashoffset: 0;\n  animation: "," ","s linear infinite;\n"])),.01*L,L,F,1.6),z=function(n){var t=n.color,e=void 0===t?"#4fa94d":t,r=n.width,o=void 0===r?"200":r;return d.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"".concat(o),height:"".concat(.5*Number(o)),viewBox:"0 0 ".concat(o," ").concat(Number(100)),"data-testid":"infinity-spin"},d.createElement(A,{"data-testid":"infinity-spin-path-1",stroke:e,fill:"none",strokeWidth:"4",strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:"10",d:"M93.9,46.4c9.3,9.5,13.8,17.9,23.5,17.9s17.5-7.8,17.5-17.5s-7.8-17.6-17.5-17.5c-9.7,0.1-13.3,7.2-22.1,17.1 c-8.9,8.8-15.7,17.9-25.4,17.9s-17.5-7.8-17.5-17.5s7.8-17.5,17.5-17.5S86.2,38.6,93.9,46.4z"}),d.createElement("path",{"data-testid":"infinity-spin-path-2",opacity:"0.07",fill:"none",stroke:e,strokeWidth:"4",strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:"10",d:"M93.9,46.4c9.3,9.5,13.8,17.9,23.5,17.9s17.5-7.8,17.5-17.5s-7.8-17.6-17.5-17.5c-9.7,0.1-13.3,7.2-22.1,17.1 c-8.9,8.8-15.7,17.9-25.4,17.9s-17.5-7.8-17.5-17.5s7.8-17.5,17.5-17.5S86.2,38.6,93.9,46.4z"}))},O=function(n,t){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if("undefined"!==typeof e[n])return e[n];if(n&&n.indexOf(".")>0){for(var r=n.split("."),o=r.length,i=e[r[0]],a=1;null!=i&&a<o;)i=i[r[a]],a+=1;if("undefined"!==typeof i)return i}return t}};var S,_,M,N=function(n,t){return Object.defineProperty?Object.defineProperty(n,"raw",{value:t}):n.raw=t,n},E=(0,b.F4)(S||(S=N(["\n to {\n    transform: rotate(360deg);\n  }\n"],["\n to {\n    transform: rotate(360deg);\n  }\n"])));b.ZP.svg(_||(_=N(["\n  animation: "," 0.75s steps(12, end) infinite;\n  animation-duration: ","s;\n"],["\n  animation: "," 0.75s steps(12, end) infinite;\n  animation-duration: ","s;\n"])),E,O("speed","0.75")),b.ZP.polyline(M||(M=N(["\n  stroke-width: ","px;\n  stroke-linecap: round;\n\n  &:nth-child(12n + 0) {\n    stroke-opacity: 0.08;\n  }\n\n  &:nth-child(12n + 1) {\n    stroke-opacity: 0.17;\n  }\n\n  &:nth-child(12n + 2) {\n    stroke-opacity: 0.25;\n  }\n\n  &:nth-child(12n + 3) {\n    stroke-opacity: 0.33;\n  }\n\n  &:nth-child(12n + 4) {\n    stroke-opacity: 0.42;\n  }\n\n  &:nth-child(12n + 5) {\n    stroke-opacity: 0.5;\n  }\n\n  &:nth-child(12n + 6) {\n    stroke-opacity: 0.58;\n  }\n\n  &:nth-child(12n + 7) {\n    stroke-opacity: 0.66;\n  }\n\n  &:nth-child(12n + 8) {\n    stroke-opacity: 0.75;\n  }\n\n  &:nth-child(12n + 9) {\n    stroke-opacity: 0.83;\n  }\n\n  &:nth-child(12n + 11) {\n    stroke-opacity: 0.92;\n  }\n"],["\n  stroke-width: ","px;\n  stroke-linecap: round;\n\n  &:nth-child(12n + 0) {\n    stroke-opacity: 0.08;\n  }\n\n  &:nth-child(12n + 1) {\n    stroke-opacity: 0.17;\n  }\n\n  &:nth-child(12n + 2) {\n    stroke-opacity: 0.25;\n  }\n\n  &:nth-child(12n + 3) {\n    stroke-opacity: 0.33;\n  }\n\n  &:nth-child(12n + 4) {\n    stroke-opacity: 0.42;\n  }\n\n  &:nth-child(12n + 5) {\n    stroke-opacity: 0.5;\n  }\n\n  &:nth-child(12n + 6) {\n    stroke-opacity: 0.58;\n  }\n\n  &:nth-child(12n + 7) {\n    stroke-opacity: 0.66;\n  }\n\n  &:nth-child(12n + 8) {\n    stroke-opacity: 0.75;\n  }\n\n  &:nth-child(12n + 9) {\n    stroke-opacity: 0.83;\n  }\n\n  &:nth-child(12n + 11) {\n    stroke-opacity: 0.92;\n  }\n"])),(function(n){return n.width}));var I,q,K,B=function(n,t){return Object.defineProperty?Object.defineProperty(n,"raw",{value:t}):n.raw=t,n},D=(0,b.F4)(I||(I=B(["\n to {\n    stroke-dashoffset: 136;\n  }\n"],["\n to {\n    stroke-dashoffset: 136;\n  }\n"])));b.ZP.polygon(q||(q=B(["\n  stroke-dasharray: 17;\n  animation: "," 2.5s cubic-bezier(0.35, 0.04, 0.63, 0.95) infinite;\n"],["\n  stroke-dasharray: 17;\n  animation: "," 2.5s cubic-bezier(0.35, 0.04, 0.63, 0.95) infinite;\n"])),D),b.ZP.svg(K||(K=B(["\n  transform-origin: 50% 65%;\n"],["\n  transform-origin: 50% 65%;\n"])));var U;var V,W,J=b.ZP.div(U||(U=(0,k.Z)(["\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n"]))),R=function(){return(0,m.jsx)(J,{children:(0,m.jsx)(z,{width:"200",color:"#3f51b5"})})},$=e(2240),G=b.ZP.div(V||(V=(0,k.Z)(["\n    border-right: 1px solid gray;\n    height: 100vh;\n    padding-right: 24px;\n"]))),H=b.ZP.div(W||(W=(0,k.Z)(["\n    display: flex;\n    align-items: baseline;\n    flex-grow: 1;\n    justify-content: space-between;\n    padding-left: 24px;\n"]))),Q=function(){var n=(0,p.v9)(f.by),t=(0,p.v9)(f.Vc);return(0,m.jsxs)($.x,{children:[(0,m.jsx)(s.q,{children:(0,m.jsx)("title",{children:"Contacts"})}),t&&!n&&(0,m.jsx)(R,{}),(0,m.jsxs)($.x,{display:"flex",children:[(0,m.jsxs)(G,{children:[(0,m.jsx)($.x,{as:"h2",pt:"16px",display:"flex",justifyContent:"center",children:"Add contact:"}),(0,m.jsx)(y,{})]}),(0,m.jsxs)(H,{children:[(0,m.jsxs)("div",{children:[(0,m.jsx)($.x,{as:"h2",pt:"16px",display:"flex",children:"Contacts:"}),(0,m.jsx)(j,{})]}),(0,m.jsx)("div",{children:(0,m.jsx)(P,{})})]})]})]})}},5984:function(n,t,e){e.d(t,{x0:function(){return r}});var r=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(n)).reduce((function(n,t){return n+=(t&=63)<36?t.toString(36):t<62?(t-26).toString(36).toUpperCase():t>62?"-":"_"}),"")}}}]);
//# sourceMappingURL=507.e480122e.chunk.js.map
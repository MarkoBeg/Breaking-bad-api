(this["webpackJsonpbreaking-bad"]=this["webpackJsonpbreaking-bad"]||[]).push([[0],{25:function(e,t,a){},27:function(e,t,a){},46:function(e,t,a){},55:function(e,t,a){},57:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),r=a(17),s=a.n(r),i=(a(25),a(8)),j=a.n(i),o=a(18),d=a(3),u=(a(27),a(19)),b=a.n(u),h=(a(46),a(1));function l(e){var t=e.nameSearch,a=Object(c.useState)(""),n=Object(d.a)(a,2),r=n[0],s=n[1];return Object(h.jsx)("div",{className:"search-section",children:Object(h.jsx)("form",{children:Object(h.jsx)("input",{className:"search",type:"text",placeholder:"Search by Character Name",value:r,onChange:function(e){return a=e.target.value,s(a),void t(a);var a}})})})}var O=a(20),p=a.n(O);function v(){return Object(h.jsx)("div",{className:"spinner",style:{display:"grid",placeItems:"center",height:"100vh",backgroundColor:"lightseagreen"},children:Object(h.jsx)(p.a,{size:500,color:"#9013FE"})})}a(55);function m(e){var t=e.isLoading,a=e.data;return Object(h.jsx)("div",{children:t?Object(h.jsx)(v,{}):Object(h.jsx)("div",{className:"data",children:a.map((function(e){return Object(h.jsxs)("div",{className:"dataCharacter-section",children:[Object(h.jsx)("img",{src:e.img,alt:e.name}),Object(h.jsx)("h2",{children:e.category}),Object(h.jsxs)("h4",{children:["Name: ",e.name]}),Object(h.jsxs)("span",{children:["Date: ",e.birthday]}),Object(h.jsx)("p",{children:null===e||void 0===e?void 0:e.occupation})]},e.char_id)}))})})}var x=function(){var e=Object(c.useState)([]),t=Object(d.a)(e,2),a=t[0],n=t[1],r=Object(c.useState)(""),s=Object(d.a)(r,2),i=s[0],u=s[1],O=Object(c.useState)(!0),p=Object(d.a)(O,2),v=p[0],x=p[1];return Object(c.useEffect)((function(){var e=function(){var e=Object(o.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.get("https://www.breakingbadapi.com/api/characters?name=".concat(i));case 2:t=e.sent,console.log(t.data),n(t.data),x(!1);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e(),x(!0)}),[i]),Object(h.jsx)("div",{className:"App",children:Object(h.jsxs)("div",{className:"app-section",children:[Object(h.jsx)(l,{nameSearch:function(e){return u(e)}}),Object(h.jsx)(m,{isLoading:v,data:a})]})})};s.a.render(Object(h.jsx)(n.a.StrictMode,{children:Object(h.jsx)(x,{})}),document.getElementById("root"))}},[[57,1,2]]]);
//# sourceMappingURL=main.c9d3e46f.chunk.js.map
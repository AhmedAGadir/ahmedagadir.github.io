(this["webpackJsonparabic-progress-bar"]=this["webpackJsonparabic-progress-bar"]||[]).push([[0],{80:function(e,t,a){},81:function(e,t,a){},87:function(e){e.exports=JSON.parse('[{"book":1,"chapters":23},{"book":2,"chapters":31},{"book":3,"chapters":34}]')},91:function(e,t,a){"use strict";a.r(t);var r=a(5),n=a(0),o=a(10),c=a.n(o),i=(a(80),a(64)),s=a(65),l=a(24),b=(a(81),a(130)),j=a(131),h=a(138),u=a(128),d=a(140),p=a(133),m=a(137),f=a(132),O=a(53),g=a.n(O),x=a(60),v=a.n(x),y=a(54),k=a.n(y),w=a(63),S=a(135),B=a(139),C=a(49),I=(a(82),a(61)),N=a.n(I),A=a(62),M=a.n(A),P=a(134),T=a(136),z=Object(u.a)((function(e){return{formControl:{margin:e.spacing(1),minWidth:180},button:{margin:e.spacing(1),width:150,fontWeight:"bold",display:"inline"},h3:{fontWeight:300},paragraph:{margin:e.spacing(2)},circularProgress:{transform:"scale(1)",animation:function(e){return e.animate?"pulse 1s forwards":null}},fixedBottomLeft:{position:"fixed",bottom:0,left:0,width:40,margin:20,transition:"all 0.2s ease",zIndex:999,cursor:"pointer"},fixedBottomRight:{position:"fixed",bottom:0,right:0,width:40,margin:20,transition:"all 0.2s ease",zIndex:999,cursor:"pointer"}}}));function E(e){var t=Object(n.useState)(!1),a=Object(l.a)(t,2),o=a[0],c=a[1];Object(n.useEffect)((function(){c(!0),setTimeout((function(){c(!1)}),1200)}),[e.value]);var i=z({animate:o});return Object(r.jsxs)(h.a,{position:"relative",display:"inline-flex",children:[Object(r.jsx)(b.a,Object(s.a)({size:300,thickness:2.4,variant:"determinate",color:e.value<100?"primary":"secondary"},e)),Object(r.jsx)(h.a,{top:0,left:0,bottom:0,right:0,position:"absolute",display:"flex",alignItems:"center",justifyContent:"center",children:Object(r.jsxs)(j.a,{className:i.circularProgress,variant:"h5",component:"div",color:e.value<100?"primary":"secondary",children:["".concat(Math.round(e.value),"%"),Object(r.jsx)(j.a,{variant:"inherit",color:"textPrimary",children:" COMPLETED"})]})})]})}function L(e){var t=z();return Object(r.jsx)("div",{className:"app-page",children:Object(r.jsxs)(f.a,{maxWidth:"md",children:[Object(r.jsx)("div",{children:"\u0627\u0644\u0633\u0644\u0627\u0645 \u0639\u0644\u064a\u0643\u0645 \u0648\u0631\u062d\u0645\u0629 \u0627\u0644\u0644\u0647 \u0648\u0628\u0631\u0643\u0627\u062a\u0647"}),Object(r.jsxs)(j.a,{variant:"h2",component:"h2",gutterBottom:!0,children:["Track your progress with the ",Object(r.jsx)(j.a,{variant:"inherit",color:"primary",children:"Madinah Books"}),"!"]}),Object(r.jsxs)(f.a,{maxWidth:"sm",children:[Object(r.jsx)(j.a,{variant:"body1",component:"p",paragraph:!0,children:"A simple web app to help students of the arabic language stay motivated\ud83d\ude4f\ud83c\udffe ."}),Object(r.jsxs)(j.a,{variant:"body1",component:"p",paragraph:!0,children:["May Allah preserve both Shaykh Dr. V Abdur Rahim for authoring these amazing books and Shaykh Asif Meherali for his gift in teaching these books.",Object(r.jsx)("br",{})]}),Object(r.jsxs)(j.a,{variant:"body1",component:"p",paragraph:!0,children:["Some useful links:",Object(r.jsx)("br",{}),Object(r.jsx)("a",{href:"https://www.amazon.co.uk/Arabic-Course-English-Speaking-Students-complete/dp/B004NIIV9C/ref=sr_1_9?dchild=1&keywords=madinah+books&qid=1610816209&sr=8-9",target:"_blank",rel:"noreferrer",children:"Amazon link to buy the books"}),Object(r.jsx)("br",{}),"LQToronto Playlist ",Object(r.jsx)("a",{href:"https://www.youtube.com/c/LearnarabicInfo/playlists",target:"_blank",rel:"noreferrer",children:"YouTube"})," / ",Object(r.jsx)("a",{href:"http://www.lqtoronto.com/videodlmac.html",target:"_blank",rel:"noreferrer",children:"lqtoronto.com"}),Object(r.jsx)("br",{}),Object(r.jsx)("a",{href:"http://www.lqtoronto.com/forums/",target:"_blank",rel:"noreferrer",children:"LQToronto Forum"})]}),Object(r.jsx)(B.a,{variant:"contained",className:t.button,onClick:function(){return setTimeout(e.nextPage,500)},children:"Next"})]})]})})}function _(){var e=[1,2,3],t=Object(n.useState)(e[0]),o=Object(l.a)(t,2),c=o[0],s=o[1],b=Object(n.useState)(0),u=Object(l.a)(b,2),f=u[0],O=u[1],g=Object(n.useState)(0),x=Object(l.a)(g,2),v=x[0],y=x[1],k=Object(n.useState)(""),w=Object(l.a)(k,2),S=w[0],C=w[1],I=a(87);Object(n.useEffect)((function(){var e=I.find((function(e){return e.book===c})).chapters;y(e);var t=JSON.parse(localStorage.getItem("MB".concat(c,"-progress")));if(t){var a=parseInt(t);C(a),a===S&&N()}else C(0)}),[c]),Object(n.useEffect)((function(){""!==S&&N()}),[S]);var N=function(){var e,t=I.find((function(e){return e.book===c})).chapters;y(t),e=S?Math.floor(100*S/t):0,O(e),localStorage.setItem("MB".concat(c,"-progress"),JSON.stringify(S))},A=z();return Object(r.jsxs)("div",{className:"app-page",children:[Object(r.jsx)(h.a,{children:e.map((function(e){return Object(r.jsxs)(B.a,{variant:c===e?"contained":"outlined",className:A.button,onClick:function(){return s(e)},children:["Book ",e]},e)}))}),Object(r.jsxs)(h.a,{margin:2,children:["\u062f\u0631\u0648\u0633 \u0627\u0644\u0644\u063a\u0629 \u0627\u0644\u0639\u0631\u0628\u064a\u0629",Object(r.jsxs)(j.a,{variant:"h2",component:"h2",gutterBottom:!0,children:["Madinah Book ",Object(r.jsx)(j.a,{variant:"inherit",color:f<100?"primary":"secondary",children:c})]})]}),Object(r.jsx)(h.a,{marginBottom:4,children:Object(r.jsx)(E,{value:f})}),Object(r.jsx)(h.a,{children:Object(r.jsxs)(p.a,{variant:"outlined",className:A.formControl,children:[Object(r.jsx)(d.a,{children:"Chapter"}),Object(r.jsx)(m.a,{native:!0,value:S,onChange:function(e){var t=parseInt(e.target.value);C(t)},label:"Chapter",children:[Object(r.jsx)("option",{value:""},"")].concat(Object(i.a)(Array.from({length:v},(function(e,t){return t+1})).map((function(e){return Object(r.jsx)("option",{value:e,children:e},e)}))))})]})})]})}var F=function(){var e=Object(n.useState)(0),t=Object(l.a)(e,2),a=t[0],o=t[1],c=Object(P.a)("(prefers-color-scheme: dark)");Object(n.useEffect)((function(){d(c?i:s)}),[]);var i=Object(w.a)({palette:{type:"dark",primary:{main:v.a[500]},secondary:{main:g.a[500]},background:{default:"#282c34"}}}),s=Object(w.a)({palette:{type:"light",primary:{main:k.a.A400},secondary:{main:g.a.A400},background:{},text:{primary:k.a[900]}}}),b=Object(n.useState)(s),j=Object(l.a)(b,2),u=j[0],d=j[1],p=z();return Object(r.jsxs)(S.a,{theme:u,children:[Object(r.jsx)(T.a,{}),Object(r.jsxs)(C.a,{activeIndex:a,onSelect:function(e,t){o(e)},wrap:!1,interval:null,children:[Object(r.jsx)(C.a.Item,{children:Object(r.jsx)(L,{nextPage:function(){return o(a+1)}})}),Object(r.jsx)(C.a.Item,{children:Object(r.jsx)(_,{})})]}),Object(r.jsxs)("footer",{children:[Object(r.jsx)(h.a,{className:p.fixedBottomLeft,onClick:function(){var e="dark"===u.palette.type?s:i;d(e)},children:"dark"===u.palette.type?Object(r.jsx)(N.a,{fontSize:"large"}):Object(r.jsx)(M.a,{fontSize:"large"})}),Object(r.jsx)(h.a,{className:p.fixedBottomRight,children:Object(r.jsx)("a",{href:"https://github.com/AhmedAGadir/arabic-progress-bar",target:"_blank",children:Object(r.jsx)("img",{src:"https://res.cloudinary.com/ahmedagadir/image/upload/v1530726623/product-landing-page/github-sign.svg",alt:"GitHub repository",title:"GitHub repository"})})})]})]})},J=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,142)).then((function(t){var a=t.getCLS,r=t.getFID,n=t.getFCP,o=t.getLCP,c=t.getTTFB;a(e),r(e),n(e),o(e),c(e)}))};c.a.render(Object(r.jsx)(F,{}),document.getElementById("root")),J()}},[[91,1,2]]]);
//# sourceMappingURL=main.a0bdab1c.chunk.js.map
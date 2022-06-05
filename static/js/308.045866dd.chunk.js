"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[308],{8494:function(n,e,t){t.d(e,{M:function(){return u}});var r=t(885),i=t(3504),o=t(2168),a=t(5015),s=t(2791),c=t(184),u=function(n){var e=n.films,t=n.loc,u=(0,s.useState)(!1),l=(0,r.Z)(u,2),p=l[0],d=l[1];return(0,c.jsx)(o.aV,{children:e.map((function(n){var e=n.id,r=n.poster_path,s=n.original_title,u=n.title,l=n.vote_average;return(0,c.jsx)(o.HC,{children:(0,c.jsxs)(i.rU,{to:"/movies/".concat(e),state:{from:t},children:[(0,c.jsx)("img",{src:r?"https://image.tmdb.org/t/p/w500".concat(r):a,alt:null!==u&&void 0!==u?u:s+"poster",onLoad:function(){return d(!0)},style:{display:p?"block":"none"}}),!p&&(0,c.jsx)(o.N$,{}),(0,c.jsx)("p",{className:"film-info",children:null!==u&&void 0!==u?u:s}),0!==l&&(0,c.jsxs)(o.AW,{children:[(0,c.jsx)("span",{className:"material-icons md-16",children:"star_border"}),l]})]})},e)}))})}},2168:function(n,e,t){t.d(e,{AW:function(){return p},HC:function(){return l},N$:function(){return d},aV:function(){return u}});var r,i,o,a,s=t(168),c=t(6031),u=c.ZP.ul(r||(r=(0,s.Z)(["\n  display: grid;\n  gap: 14px;\n\n  @media screen and (min-width: 480px) {\n    grid-template-columns: repeat(2, 1fr);\n    /* grid-template-rows: repeat(10, 1fr); */\n  }\n\n  @media screen and (min-width: 768px) {\n    grid-template-columns: repeat(3, 1fr);\n    /* grid-template-rows: repeat(10, 1fr); */\n    gap: 24px;\n  }\n\n  @media screen and (min-width: 1200px) {\n    grid-template-columns: repeat(4, 1fr);\n    /* grid-template-rows: repeat(5, 1fr); */\n    gap: 24px;\n  }\n"]))),l=c.ZP.li(i||(i=(0,s.Z)(["\n  color: grey;\n  background-color: rgb(32, 40, 62, 80%);\n  padding: 8px;\n  border-radius: 12px;\n  position: relative;\n\n  img {\n    border-radius: 5px;\n    margin-bottom: 18px;\n  }\n\n  .film-info {\n    font-weight: 600;\n    font-size: 16px;\n    line-height: 1.5;\n\n    letter-spacing: 0.02em;\n\n    color: #ebeef5;\n  }\n"]))),p=c.ZP.span(o||(o=(0,s.Z)(["\n  position: absolute;\n  top: 20px;\n  left: 20px;\n  background: rgba(0, 0, 0, 0.65);\n  backdrop-filter: blur(8px);\n  padding: 4px 8px;\n  border-radius: 8px;\n  color: #ffad49;\n  font-size: 16px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  .md-16 {\n    font-size: 16px;\n  }\n"]))),d=c.ZP.div(a||(a=(0,s.Z)(["\n  background: #20283e;\n  border-radius: 8px;\n  width: 100%;\n  height: 400px;\n"])))},7605:function(n,e,t){t.d(e,{t:function(){return o}});var r=t(7761),i=t(184),o=function(n){var e=n.page,t=n.setPage,o=n.totalPages;return(0,i.jsxs)(r.Et,{children:[e-4>0&&(0,i.jsx)(r.un,{as:"button",type:"button",className:"hide-btn",onClick:function(){return t(1)},children:"1"}),e-3>0&&(0,i.jsx)(r.un,{as:"button",type:"button",onClick:function(){return t(e-3)},children:"..."}),e-2>0&&(0,i.jsx)(r.un,{as:"button",type:"button",className:"hide-btn",onClick:function(){return t(e-2)},children:e-2}),e-1>0&&(0,i.jsx)(r.un,{as:"button",type:"button",onClick:function(){return t(e-1)},children:e-1}),(0,i.jsx)(r.un,{as:"button",type:"button",className:"current",disabled:!0,children:e}),o>=e+1&&(0,i.jsx)(r.un,{as:"button",type:"button",onClick:function(){return t(e+1)},children:e+1}),o>=e+2&&(0,i.jsx)(r.un,{as:"button",type:"button",className:"hide-btn",onClick:function(){return t(e+2)},children:e+2}),o>=e+3&&(0,i.jsx)(r.un,{as:"button",type:"button",onClick:function(){return t(e+3)},children:"..."}),o>=e+4&&(0,i.jsx)(r.un,{as:"button",type:"button",className:"hide-btn",onClick:function(){return t(o)},children:o})]})}},3440:function(n,e,t){t.d(e,{U:function(){return u},s:function(){return c}});var r=t(5861),i=t(885),o=t(7757),a=t.n(o),s=t(2791),c={IDLE:"idle",LOAD:"loading",ERR:"error"},u=function(n,e){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,o=(0,s.useState)(null),u=(0,i.Z)(o,2),l=u[0],p=u[1],d=(0,s.useState)(null),x=(0,i.Z)(d,2),f=x[0],h=x[1],g=(0,s.useState)(c.IDLE),b=(0,i.Z)(g,2),m=b[0],v=b[1];return(0,s.useEffect)((function(){if(""!==t){var i=function(){var i=(0,r.Z)(a().mark((function r(){var i;return a().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return v(c.LOAD),r.prev=1,r.next=4,n(e,t);case 4:i=r.sent,p(i.results),h(i.pages),r.next=13;break;case 9:r.prev=9,r.t0=r.catch(1),console.log(r.t0),v(c.ERR);case 13:return r.prev=13,v(c.IDLE),r.finish(13);case 16:case"end":return r.stop()}}),r,null,[[1,9,13,16]])})));return function(){return i.apply(this,arguments)}}();i()}}),[e,n,t]),[l,m,f]}},6951:function(n,e,t){t.d(e,{h:function(){return o}});var r=t(885),i=t(2791),o=function(n){var e=(0,i.useState)(n),t=(0,r.Z)(e,2);return[t[0],t[1]]}},7761:function(n,e,t){t.d(e,{Et:function(){return g},Zx:function(){return f},l0:function(){return x},rS:function(){return m},un:function(){return h},yG:function(){return b}});var r,i,o,a,s,c,u,l=t(168),p=t(3504),d=t(6031),x=d.ZP.div(r||(r=(0,l.Z)(["\n  display: flex;\n  max-width: 100vw;\n  padding: 0 80px;\n\n  img {\n    border-radius: 24px;\n    margin-right: 80px;\n    height: 720px;\n    width: 480px;\n  }\n"]))),f=d.ZP.div(i||(i=(0,l.Z)(["\n  span.info-block {\n    display: block;\n    margin-bottom: 24px;\n    font-weight: 400;\n    font-size: 20px;\n    line-height: 1.6;\n    color: #c3c8d4;\n    p:first-child {\n      font-size: 16px;\n      line-height: 1.5;\n      color: #767e94;\n      margin-bottom: 8px;\n    }\n  }\n\n  .tagline {\n    display: block;\n    font-weight: 700;\n    font-size: 24px;\n    line-height: 1.33;\n    letter-spacing: -0.015em;\n    color: #ebeef5;\n    margin-bottom: 24px;\n  }\n\n  .overview {\n    font-weight: 400;\n    font-size: 20px;\n    line-height: 1.6;\n    color: #8e95a9;\n    margin-bottom: 24px;\n  }\n"]))),h=((0,d.ZP)(p.rU)(o||(o=(0,l.Z)(["\n  margin-right: 10px;\n"]))),(0,d.ZP)(p.rU)(a||(a=(0,l.Z)(["\n  display: inline-block;\n  padding: 14px 18px;\n  background-color: #7b6ef6;\n  color: white;\n  border-radius: 12px;\n  border: none;\n  text-decoration: none;\n  cursor: pointer;\n  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  :hover {\n    transform: scale(1.1);\n  }\n\n  :not(:last-child) {\n    margin-right: 8px;\n  }\n  :not(:first-child) {\n    margin-left: 8px;\n  }\n\n  &.current {\n    transform: scale(1.15);\n    margin: 0 14px;\n    cursor: auto;\n  }\n\n  @media screen and (max-width: 480px) {\n    &.hide-btn {\n      display: none;\n    }\n  }\n\n  @media screen and (max-width: 768px) {\n    padding: 8px;\n    border-radius: 8px;\n  }\n"])))),g=d.ZP.div(s||(s=(0,l.Z)(["\n  text-align: center;\n  padding: 48px 0;\n"]))),b=d.ZP.div(c||(c=(0,l.Z)(["\n  max-width: 1280px;\n  height: 480px;\n  position: relative;\n\n  background: linear-gradient(\n      180deg,\n      rgba(54, 44, 146, 0.4) 0%,\n      rgba(18, 98, 151, 0.4) 100%\n    ),\n    url(",") center/cover no-repeat;\n\n  border-radius: 40px;\n  margin-bottom: 150px;\n"])),(function(n){return n.img})),m=d.ZP.div(u||(u=(0,l.Z)(["\n  position: absolute;\n  left: 80px;\n  bottom: -70px;\n  background: rgba(32, 40, 62, 0.5);\n  backdrop-filter: blur(24px);\n  border-radius: 24px;\n  padding: 40px;\n  max-width: 50%;\n\n  h1 {\n    font-weight: 600;\n    font-size: 32px;\n    line-height: 1.25;\n\n    letter-spacing: -0.02em;\n    color: #ebeef5;\n  }\n"])))},308:function(n,e,t){t.r(e),t.d(e,{default:function(){return w}});var r,i=t(885),o=t(2791),a=t(3504),s=t(6871),c=t(8494),u=t(168),l=t(6031).ZP.form(r||(r=(0,u.Z)(["\n  position: relative;\n  display: inline-block;\n  width: 100%;\n  max-width: 350px;\n  margin-bottom: 52px;\n  input {\n    background: rgba(0, 0, 0, 0.1);\n    width: 100%;\n\n    border: 1px solid #323b54;\n\n    border-radius: 12px;\n    box-sizing: border-box;\n    padding: 24px 56px 24px 16px;\n    font-weight: 400;\n    font-size: 14px;\n    line-height: 1.14;\n\n    color: #475069;\n\n    &:focus {\n      border: 1px solid #323b54;\n    }\n  }\n  button {\n    position: absolute;\n    top: 12px;\n    right: 12px;\n    background-color: inherit;\n    border: none;\n    cursor: pointer;\n    padding: 8px;\n  }\n"])));var p=t.p+"static/media/search.50d049c2a30a90b6b437224f99de07b4.svg",d=t(184),x=function(n){var e=n.onSub,t=(0,s.TH)().search,r=(0,o.useState)(new URLSearchParams(t).get("query")||""),a=(0,i.Z)(r,2),c=a[0],u=a[1];return(0,d.jsxs)(l,{onSubmit:function(n){n.preventDefault(),c?e({query:c||""}):alert("Enter the search request")},children:[(0,d.jsx)("label",{children:(0,d.jsx)("input",{type:"text",name:"search",onChange:function(n){var e=n.target.value;u(e)},value:c,placeholder:"Search Movies",autoComplete:"off"})}),(0,d.jsx)("button",{type:"submit",children:(0,d.jsx)("img",{src:p,alt:"Search"})})]})},f=t(3440),h=t(6910),g=t(1959),b=t(5587),m=t(6951),v=t(7605),w=function(){var n=(0,s.TH)(),e=n.search,t=n.pathname,r=Number(new URLSearchParams(e).get("page")),u=(0,m.h)(r||1),l=(0,i.Z)(u,2),p=l[0],w=l[1],Z=(0,a.lr)(),j=(0,i.Z)(Z,2),k=j[0],y=j[1],P=(0,f.U)(h.z1,p,k.get("query")||""),S=(0,i.Z)(P,3),C=S[0],z=S[1],E=S[2],L=(0,s.s0)();(0,o.useEffect)((function(){var n=new URLSearchParams(e).get("query");n&&(y({query:n}),L("".concat(t,"?query=").concat(n,"&page=").concat(p),{replace:!0}))}),[e,y,p,L,t]);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(b.F,{children:"Movies search"}),(0,d.jsx)(x,{onSub:function(n){y(n),w(1)}}),z===f.s.ERR&&(0,d.jsx)("p",{children:"Something is wrong... Try to reload the page"}),z===f.s.LOAD&&(0,d.jsx)(g.g,{}),z===f.s.IDLE&&C&&(0,d.jsxs)(d.Fragment,{children:[C&&0===C.length?(0,d.jsx)("p",{children:"There are no films with this name"}):(0,d.jsx)(c.M,{films:C,loc:t+e}),E>1&&(0,d.jsx)(v.t,{page:p,totalPages:E,setPage:w})]})]})}},5015:function(n,e,t){n.exports=t.p+"static/media/poster.7be5beb2e90167ab8d0a.jpg"}}]);
//# sourceMappingURL=308.045866dd.chunk.js.map
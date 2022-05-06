"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[308],{8494:function(n,e,t){t.d(e,{M:function(){return s}});var r=t(885),a=t(501),i=t(2168),o=t(5015),c=t(2791),u=t(184),s=function(n){var e=n.films,t=n.loc,s=(0,c.useState)(!1),p=(0,r.Z)(s,2),l=p[0],d=p[1];return(0,u.jsx)(i.aV,{children:e.map((function(n){var e=n.id,r=n.poster_path,c=n.original_title,s=n.title,p=n.vote_average;return(0,u.jsx)(i.HC,{children:(0,u.jsxs)(a.rU,{to:"/movies/".concat(e),state:{from:t},children:[(0,u.jsx)("img",{src:r?"https://image.tmdb.org/t/p/w500".concat(r):o,alt:null!==s&&void 0!==s?s:c+"poster",onLoad:function(){return d(!0)},style:{display:l?"block":"none"}}),!l&&(0,u.jsx)(i.N$,{}),(0,u.jsx)("p",{className:"film-info",children:null!==s&&void 0!==s?s:c}),0!==p&&(0,u.jsxs)(i.AW,{children:[(0,u.jsx)("span",{className:"material-icons md-16",children:"star_border"}),p]})]})},e)}))})}},2168:function(n,e,t){t.d(e,{AW:function(){return l},HC:function(){return p},N$:function(){return d},aV:function(){return s}});var r,a,i,o,c=t(168),u=t(6031),s=u.ZP.ul(r||(r=(0,c.Z)(["\n  display: grid;\n  gap: 14px;\n\n  @media screen and (min-width: 480px) {\n    grid-template-columns: repeat(2, 1fr);\n    /* grid-template-rows: repeat(10, 1fr); */\n  }\n\n  @media screen and (min-width: 768px) {\n    grid-template-columns: repeat(3, 1fr);\n    /* grid-template-rows: repeat(10, 1fr); */\n    gap: 24px;\n  }\n\n  @media screen and (min-width: 1200px) {\n    grid-template-columns: repeat(4, 1fr);\n    /* grid-template-rows: repeat(5, 1fr); */\n    gap: 24px;\n  }\n"]))),p=u.ZP.li(a||(a=(0,c.Z)(["\n  color: grey;\n  background-color: rgb(32, 40, 62, 80%);\n  padding: 8px;\n  border-radius: 12px;\n  position: relative;\n\n  img {\n    border-radius: 5px;\n    margin-bottom: 18px;\n  }\n\n  .film-info {\n    font-weight: 600;\n    font-size: 16px;\n    line-height: 1.5;\n\n    letter-spacing: 0.02em;\n\n    color: #ebeef5;\n  }\n"]))),l=u.ZP.span(i||(i=(0,c.Z)(["\n  position: absolute;\n  top: 20px;\n  left: 20px;\n  background: rgba(0, 0, 0, 0.65);\n  backdrop-filter: blur(8px);\n  padding: 4px 8px;\n  border-radius: 8px;\n  color: #ffad49;\n  font-size: 16px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  .md-16 {\n    font-size: 16px;\n  }\n"]))),d=u.ZP.div(o||(o=(0,c.Z)(["\n  background: #20283e;\n  border-radius: 8px;\n  width: 100%;\n  height: 400px;\n"])))},3440:function(n,e,t){t.d(e,{U:function(){return s},s:function(){return u}});var r=t(5861),a=t(885),i=t(7757),o=t.n(i),c=t(2791),u={IDLE:"idle",LOAD:"loading",ERR:"error"},s=function(n,e){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,i=(0,c.useState)(null),s=(0,a.Z)(i,2),p=s[0],l=s[1],d=(0,c.useState)(null),f=(0,a.Z)(d,2),g=f[0],x=f[1],h=(0,c.useState)(u.IDLE),m=(0,a.Z)(h,2),b=m[0],v=m[1];return(0,c.useEffect)((function(){if(""!==t){var a=function(){var a=(0,r.Z)(o().mark((function r(){var a;return o().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return v(u.LOAD),r.prev=1,r.next=4,n(e,t);case 4:a=r.sent,l(a.results),x(a.pages),r.next=13;break;case 9:r.prev=9,r.t0=r.catch(1),console.log(r.t0),v(u.ERR);case 13:return r.prev=13,v(u.IDLE),r.finish(13);case 16:case"end":return r.stop()}}),r,null,[[1,9,13,16]])})));return function(){return a.apply(this,arguments)}}();a()}}),[e,n,t]),[p,b,g]}},6951:function(n,e,t){t.d(e,{h:function(){return i}});var r=t(885),a=t(2791),i=function(n){var e=(0,a.useState)(n),t=(0,r.Z)(e,2),i=t[0],o=t[1];return[i,function(n){o((function(e){return e+n})),window.scrollTo({top:0,left:0})}]}},6910:function(n,e,t){t.d(e,{Hx:function(){return d},Tg:function(){return s},Y5:function(){return l},xc:function(){return f},z1:function(){return p}});var r=t(5861),a=t(7757),i=t.n(a),o=t(4569),c=t.n(o);c().defaults.baseURL="https://api.themoviedb.org/3";var u="04c27220ef2dd4b0aa9913b6cfeafdd6",s=function(){var n=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c().get("/trending/movie/day?api_key=".concat(u,"&page=").concat(e));case 2:return t=n.sent,n.abrupt("return",{results:t.data.results,pages:t.data.total_pages});case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(i().mark((function n(e,t){var r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c().get("/search/movie?api_key=".concat(u,"&language=en-US&query=").concat(t,"&page=").concat(e,"&include_adult=false"));case 2:return r=n.sent,n.abrupt("return",{results:r.data.results,pages:r.data.total_pages});case 4:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c().get("/movie/".concat(e,"?api_key=").concat(u,"&language=en-US"));case 2:return t=n.sent,n.abrupt("return",{results:t.data,pages:null});case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(i().mark((function n(e,t){var r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c().get("/movie/".concat(t,"/reviews?api_key=").concat(u,"&language=en-US&page=").concat(e));case 2:return r=n.sent,n.abrupt("return",{results:r.data.results,pages:r.data.total_pages});case 4:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c().get("/movie/".concat(e,"/credits?api_key=").concat(u,"&language=en-US"));case 2:return t=n.sent,n.abrupt("return",{results:t.data.cast,pages:t.data.total_pages});case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},5587:function(n,e,t){t.d(e,{F:function(){return i}});var r,a=t(168),i=t(6031).ZP.h1(r||(r=(0,a.Z)(["\n  font-weight: 600;\n  font-size: 64px;\n  line-height: 1.25;\n\n  letter-spacing: -0.02em;\n\n  color: #ebeef5;\n  margin: 80px 0;\n"])))},7761:function(n,e,t){t.d(e,{Fg:function(){return x},ZX:function(){return m},Zx:function(){return g},l0:function(){return f},rS:function(){return v},un:function(){return h},yG:function(){return b}});var r,a,i,o,c,u,s,p=t(168),l=t(501),d=t(6031),f=d.ZP.div(r||(r=(0,p.Z)(["\n  display: flex;\n  max-width: 100vw;\n  padding: 0 80px;\n\n  img {\n    border-radius: 24px;\n    margin-right: 80px;\n    height: 720px;\n    width: 480px;\n  }\n"]))),g=d.ZP.div(a||(a=(0,p.Z)(["\n  span.info-block {\n    display: block;\n    margin-bottom: 24px;\n    font-weight: 400;\n    font-size: 20px;\n    line-height: 1.6;\n    color: #c3c8d4;\n    p:first-child {\n      font-size: 16px;\n      line-height: 1.5;\n      color: #767e94;\n      margin-bottom: 8px;\n    }\n  }\n\n  .tagline {\n    display: block;\n    font-weight: 700;\n    font-size: 24px;\n    line-height: 1.33;\n    letter-spacing: -0.015em;\n    color: #ebeef5;\n    margin-bottom: 24px;\n  }\n\n  .overview {\n    font-weight: 400;\n    font-size: 20px;\n    line-height: 1.6;\n    color: #8e95a9;\n    margin-bottom: 24px;\n  }\n"]))),x=(0,d.ZP)(l.rU)(i||(i=(0,p.Z)(["\n  margin-right: 10px;\n"]))),h=(0,d.ZP)(l.rU)(o||(o=(0,p.Z)(["\n  display: inline-block;\n  padding: 16px 32px;\n  background-color: #7b6ef6;\n  color: white;\n  border-radius: 12px;\n  border: none;\n  text-decoration: none;\n  cursor: pointer;\n\n  :not(:last-child) {\n    margin-right: 16px;\n  }\n"]))),m=d.ZP.div(c||(c=(0,p.Z)(["\n  text-align: center;\n  padding: 32px 0;\n"]))),b=d.ZP.div(u||(u=(0,p.Z)(["\n  max-width: 1280px;\n  height: 480px;\n  position: relative;\n\n  background: linear-gradient(\n      180deg,\n      rgba(54, 44, 146, 0.4) 0%,\n      rgba(18, 98, 151, 0.4) 100%\n    ),\n    url(",") center/cover no-repeat;\n\n  border-radius: 40px;\n  margin-bottom: 150px;\n"])),(function(n){return n.img})),v=d.ZP.div(s||(s=(0,p.Z)(["\n  position: absolute;\n  left: 80px;\n  bottom: -70px;\n  background: rgba(32, 40, 62, 0.5);\n  backdrop-filter: blur(24px);\n  border-radius: 24px;\n  padding: 40px;\n  max-width: 50%;\n\n  h1 {\n    font-weight: 600;\n    font-size: 32px;\n    line-height: 1.25;\n\n    letter-spacing: -0.02em;\n    color: #ebeef5;\n  }\n"])))},308:function(n,e,t){t.r(e),t.d(e,{default:function(){return w}});var r,a=t(885),i=t(2791),o=t(501),c=t(6871),u=t(8494),s=t(168),p=t(6031).ZP.form(r||(r=(0,s.Z)(["\n  position: relative;\n  display: inline-block;\n  width: 100%;\n  max-width: 350px;\n  margin-bottom: 52px;\n  input {\n    /* background-color: inherit; */\n    background: rgba(0, 0, 0, 0.1);\n    width: 100%;\n\n    border: 1px solid #323b54;\n\n    border-radius: 12px;\n    box-sizing: border-box;\n    padding: 24px 56px 24px 16px;\n    font-weight: 400;\n    font-size: 14px;\n    line-height: 1.14;\n\n    color: #475069;\n\n    &:focus {\n      border: 1px solid #323b54;\n    }\n  }\n  button {\n    position: absolute;\n    top: 12px;\n    right: 12px;\n    background-color: inherit;\n    border: none;\n    cursor: pointer;\n    padding: 8px;\n  }\n"])));var l=t.p+"static/media/search.50d049c2a30a90b6b437224f99de07b4.svg",d=t(184),f=function(n){var e=n.onSub,t=(0,c.TH)().search,r=(0,i.useState)(new URLSearchParams(t).get("query")||""),o=(0,a.Z)(r,2),u=o[0],s=o[1];return(0,d.jsxs)(p,{onSubmit:function(n){n.preventDefault(),u?e({query:u||""}):alert("Enter the search request")},children:[(0,d.jsx)("label",{children:(0,d.jsx)("input",{type:"text",name:"search",onChange:function(n){var e=n.target.value;s(e)},value:u,placeholder:"Search Movies",autoComplete:"off"})}),(0,d.jsx)("button",{type:"submit",children:(0,d.jsx)("img",{src:l,alt:"Search"})})]})},g=t(3440),x=t(6910),h=t(1959),m=t(5587),b=t(7761),v=t(6951),w=function(){var n=(0,v.h)(1),e=(0,a.Z)(n,2),t=e[0],r=e[1],s=(0,o.lr)(),p=(0,a.Z)(s,2),l=p[0],w=p[1],Z=(0,g.U)(x.z1,t,l.get("query")||""),k=(0,a.Z)(Z,3),y=k[0],j=k[1],S=k[2],_=(0,c.TH)(),P=_.search,z=_.pathname;return(0,i.useEffect)((function(){var n=new URLSearchParams(P).get("query");n&&w({query:n})}),[P,w]),(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(m.F,{children:"Movies search"}),(0,d.jsx)(f,{onSub:w}),j===g.s.ERR&&(0,d.jsx)("p",{children:"Something is wrong... Try to reload the page"}),j===g.s.LOAD&&(0,d.jsx)(h.g,{}),j===g.s.IDLE&&y&&(0,d.jsxs)(d.Fragment,{children:[y&&0===y.length?(0,d.jsx)("p",{children:"There are no films with this name"}):(0,d.jsx)(u.M,{films:y,loc:z+P}),(0,d.jsxs)(b.ZX,{children:[t>1&&(0,d.jsx)(b.un,{as:"button",type:"button",onClick:function(){return r(-1)},children:"Prev page"}),t<S&&(0,d.jsx)(b.un,{as:"button",type:"button",onClick:function(){return r(1)},children:"Next page"})]})]})]})}},5015:function(n,e,t){n.exports=t.p+"static/media/poster.7be5beb2e90167ab8d0a.jpg"}}]);
//# sourceMappingURL=308.0f01fbcd.chunk.js.map
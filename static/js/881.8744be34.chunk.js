"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[881],{687:function(t,e,n){n.d(e,{Yu:function(){return f},rg:function(){return l},t2:function(){return h}});var r=n(861),a=n(757),c=n.n(a),u=n(340),s="1e5947fc4ba2d3d55b90daeefaa35fdf",i="https://api.themoviedb.org/3",o="".concat(i,"/trending/all/day?api_key=").concat(s),p="".concat(i,"/search/movie?api_key=").concat(s,"&page=1&query="),f=function(){var t=(0,r.Z)(c().mark((function t(){var e,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get(o);case 2:return e=t.sent,t.next=5,e.data.results;case 5:return n=t.sent,t.abrupt("return",n);case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),l=function(){var t=(0,r.Z)(c().mark((function t(e){var n,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get(p+e);case 2:return n=t.sent,t.next=5,n.data.results;case 5:return r=t.sent,t.abrupt("return",r);case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),h=function(){var t=(0,r.Z)(c().mark((function t(e,n){var r,a;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(i,"/movie/").concat(e).concat(n||"","?api_key=").concat(s));case 2:return r=t.sent,t.next=5,r.data;case 5:return a=t.sent,t.abrupt("return",a);case 7:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()},881:function(t,e,n){n.r(e),n.d(e,{default:function(){return v}});var r=n(861),a=n(439),c=n(757),u=n.n(c),s=n(791),i=n(87),o=n(689),p=n(687),f="Movies_input__KrUqs",l="Movies_btnSubmit__DsGSE",h=n(184),v=function(){var t=(0,s.useState)([]),e=(0,a.Z)(t,2),n=e[0],c=e[1],v=(0,i.lr)(),d=(0,a.Z)(v,2),m=d[0],x=d[1],_=m.get("query"),b=(0,o.TH)(),g=b.pathname+b.search;return(0,s.useEffect)((function(){function t(){return(t=(0,r.Z)(u().mark((function t(){var e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,p.rg)(_);case 3:e=t.sent,c(e),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0.message);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}null!==_&&function(){t.apply(this,arguments)}()}),[_]),(0,h.jsxs)("div",{children:[(0,h.jsxs)("form",{onSubmit:function(t){t.preventDefault();var e=t.target,n=e.elements.input.value;x({query:n}),e.reset()},children:[(0,h.jsx)("input",{className:f,name:"input"}),(0,h.jsx)("button",{className:l,type:"submit",children:"Search"})]}),_&&(0,h.jsx)("ul",{children:n.map((function(t){return(0,h.jsx)("li",{children:(0,h.jsx)(i.rU,{to:"".concat(t.id),state:{from:g},children:t.title||t.name})},t.id)}))})]})}}}]);
//# sourceMappingURL=881.8744be34.chunk.js.map
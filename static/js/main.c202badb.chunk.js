(this.webpackJsonppagination=this.webpackJsonppagination||[]).push([[0],{21:function(t,e,n){},23:function(t,e,n){},43:function(t,e,n){"use strict";n.r(e);var c=n(2),a=n.n(c),s=n(14),i=n.n(s),r=(n(21),n(5)),o=n.n(r),u=n(15),l=n(3),j=(n(23),n(16)),p=n.n(j),b=n(0),d=function(t){if(t.loading)return Object(b.jsx)("h2",{children:"Loading..."});var e=t.posts;return Object(b.jsx)("ul",{className:"list-group",children:e.map((function(t){return Object(b.jsx)("li",{className:"list-group-item",children:Object(b.jsx)("h2",{children:t.title})},t.id)}))})},h=function(t){for(var e=t.postsPerPage,n=t.totalPosts,c=t.paginate,a=[],s=n/e,i=1;i<s;i++)a[i-1]=i;return Object(b.jsx)("nav",{children:Object(b.jsx)("ul",{className:"pagination",children:a.map((function(t){return Object(b.jsx)("li",{className:"page-item",children:Object(b.jsx)("a",{href:"#",className:"page-link",onClick:function(){return c(t)},children:t})})}))})})};var f=function(){var t=Object(c.useState)([]),e=Object(l.a)(t,2),n=e[0],a=e[1],s=Object(c.useState)(!1),i=Object(l.a)(s,2),r=i[0],j=i[1],f=Object(c.useState)(1),O=Object(l.a)(f,2),g=O[0],x=O[1],m=Object(c.useState)(10),v=Object(l.a)(m,1)[0];Object(c.useEffect)((function(){(function(){var t=Object(u.a)(o.a.mark((function t(){var e;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return j(!0),t.next=3,p.a.get("https://jsonplaceholder.typicode.com/posts");case 3:e=t.sent,a(e.data),j(!1);case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[]);var P=g*v,N=P-v,S=n.slice(N,P);return Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)("h1",{children:"My Blog"}),Object(b.jsx)(d,{className:"row",posts:S,loading:r}),Object(b.jsx)(h,{postsPerPage:v,totalPosts:n.length,paginate:function(t){x(t)}})]})},O=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,44)).then((function(e){var n=e.getCLS,c=e.getFID,a=e.getFCP,s=e.getLCP,i=e.getTTFB;n(t),c(t),a(t),s(t),i(t)}))};i.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(f,{})}),document.getElementById("root")),O()}},[[43,1,2]]]);
//# sourceMappingURL=main.c202badb.chunk.js.map
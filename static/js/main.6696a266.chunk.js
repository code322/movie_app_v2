(this.webpackJsonpmovie_app_v2=this.webpackJsonpmovie_app_v2||[]).push([[0],{108:function(e,t,c){"use strict";c.r(t);var a=c(0),n=c(22),r=c.n(n),s=(c(53),c(54),c(25),c(9)),i=c(4),o=c(18);var j=c(1);function u(e){var t=Object(a.useState)(""),c=Object(s.a)(t,2),n=c[0],r=c[1],u=Object(a.useState)(""),d=Object(s.a)(u,2),l=(d[0],d[1]),p=Object(i.f)(),b=Object(o.b)();Object(i.g)();return Object(j.jsx)("div",{className:"main",children:Object(j.jsx)("input",{placeholder:"Search...",onKeyDown:function(e){"Enter"===e.key&&n.length>0&&(l(n),b({type:"MOVIE_NAME",payload:n}),p.push("/search/query=".concat(n)),r(""))},onChange:function(e){e.target.value,r(e.target.value)},value:n})})}var d=c.p+"static/media/tv.0049bc70.png",l=c(11),p=c.n(l),b=c(15),h=c(14),O=c(16),v=c.n(O);function m(e){var t=e.url,c=e.title,n=Object(a.useState)([]),r=Object(s.a)(n,2),i=r[0],o=r[1];return Object(a.useEffect)((function(){(function(){var e=Object(b.a)(p.a.mark((function e(){var c,a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.get(t,{params:{api_key:"aa612f293de8cfae23f3d56312b5f998"}});case 2:c=e.sent,a=c.data.results,o(a.filter((function(e){return null!==e.poster_path})));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(j.jsxs)("div",{className:"movie-content",children:[Object(j.jsx)("h1",{children:c}),Object(j.jsx)("div",{className:"movies",children:i.map((function(e){return Object(j.jsx)(h.b,{to:"/movie_app_v2/details/".concat(e.id),children:Object(j.jsx)("img",{src:"".concat("https://image.tmdb.org/t/p/w500").concat(e.poster_path),alt:"movieImage"})},e.id)}))})]})}function f(){return Object(j.jsx)("div",{children:Object(j.jsx)(m,{title:"POPULAR",url:"https://api.themoviedb.org/3/movie/popular"})})}function x(){return Object(j.jsx)("div",{children:Object(j.jsx)(m,{title:"TOP RATED",url:"https://api.themoviedb.org/3/movie/top_rated"})})}function g(){return Object(j.jsxs)("div",{children:[Object(j.jsxs)("div",{className:"home-banner",children:[Object(j.jsxs)("div",{className:"home-description",children:[Object(j.jsx)("h1",{children:"Enjoy Your TV."}),Object(j.jsxs)("p",{children:["Watch on Smart TVs, Playstation, Xbox,",Object(j.jsx)("span",{children:" Chromecast, Apple TV, Blu-ray players, and more."})]})]}),Object(j.jsx)("div",{className:"img-container",children:Object(j.jsx)("img",{src:d,alt:"tv"})})]}),Object(j.jsx)(f,{}),Object(j.jsx)(x,{})]})}c(40);var y=c(20),_=c.n(y);c(27);var w=c(48),N=c.n(w);function k(e){var t=e.url;return Object(j.jsx)("div",{className:"player-wrapper",children:Object(j.jsx)(N.a,{className:"react-player",url:t,width:"100%",height:"100%"})})}function E(e){var t=e.match,c=Object(a.useState)([]),n=Object(s.a)(c,2),r=n[0],o=n[1],u=Object(a.useState)([]),d=Object(s.a)(u,2),l=d[0],O=d[1],m="aa612f293de8cfae23f3d56312b5f998",f="https://api.themoviedb.org/3/movie/".concat(t.params.id,"?api_key=").concat(m),x="https://api.themoviedb.org/3/movie/".concat(t.params.id,"/recommendations?api_key=").concat(m,"&language=en-US&page=1"),g="http://api.themoviedb.org/3/movie/".concat(t.params.id,"/videos?api_key=").concat(m),y=Object(a.useState)(0),w=Object(s.a)(y,2),N=w[0],E=w[1],S=Object(a.useState)([]),A=Object(s.a)(S,2),q=A[0],R=A[1],T=Object(a.useState)(""),V=Object(s.a)(T,2),I=V[0],M=V[1];Object(i.f)();return Object(a.useEffect)((function(){function e(){return(e=Object(b.a)(p.a.mark((function e(){var t,c;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.get(f);case 2:t=e.sent,c=t.data,o(c),O(c.genres.map((function(e){return e}))),E((function(){return Number((c.vote_average/2).toFixed(1))}));case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[f]),Object(a.useEffect)((function(){(function(){var e=Object(b.a)(p.a.mark((function e(){var t,c;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.get(x);case 2:t=e.sent,c=t.data,R(c.results);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(a.useEffect)((function(){(function(){var e=Object(b.a)(p.a.mark((function e(){var t,c;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.get(g);case 2:t=e.sent,c=t.data.results,M("https://www.youtube.com/watch?v="+c[0].key);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()(),console.log(I)}),[I]),Object(j.jsxs)("div",{children:[Object(j.jsxs)("div",{className:"details",children:[Object(j.jsx)("div",{className:"trailer",style:{margin:"0",width:"100%",height:"100%",display:"flex"},children:Object(j.jsx)("div",{className:"",style:{width:"100%",height:"auto"},children:Object(j.jsx)(k,{url:I})})}),Object(j.jsxs)("div",{className:"movie-description",children:[Object(j.jsxs)("h3",{children:[r.title," "]}),Object(j.jsxs)("p",{children:[r.overview," "]}),Object(j.jsx)("div",{className:"genres-container",children:Object(j.jsxs)("div",{className:"genres",children:[Object(j.jsx)("p",{children:"Genre:"}),l.map((function(e){return Object(j.jsx)("div",{className:"genres-name",children:Object(j.jsx)("p",{children:e.name})},e.id)}))]})}),Object(j.jsx)("div",{className:"rating-year",children:Object(j.jsx)("div",{className:"rating",children:Object(j.jsx)("span",{children:Object(j.jsx)(_.a,{count:5,size:24,color2:"#ffd700",value:N,edit:!1})})})})]})]}),Object(j.jsxs)("div",{className:"recommended",children:[Object(j.jsx)("h1",{style:{margin:"60px 10% 0 10%"},children:"Recommended"}),Object(j.jsx)("div",{className:"search",children:q.map((function(e){return Object(j.jsxs)("div",{onClick:function(){return window.location.reload()},className:"search-info",children:[Object(j.jsx)(h.b,{to:"/movie_app_v2/details/".concat(e.id),children:Object(j.jsx)("img",{src:"".concat("https://image.tmdb.org/t/p/w500").concat(e.poster_path),alt:"loading..."})}),Object(j.jsxs)("h3",{children:[e.title," "]}),Object(j.jsx)(_.a,{count:5,size:24,color2:"#ffd700",value:Number((e.vote_average/2).toFixed(1)),edit:!1})]},e.id)}))})]})]})}c(106);function S(e){var t="https://api.themoviedb.org/3/search/movie?",c="aa612f293de8cfae23f3d56312b5f998",n=Object(a.useState)([]),r=Object(s.a)(n,2),u=r[0],d=r[1],l=Object(o.c)((function(e){return e.inputReducer})),O=Object(i.f)(),m=Object(i.g)(),f=Object(i.h)().query;return Object(a.useEffect)((function(){if(f)try{function e(){return(e=Object(b.a)(p.a.mark((function e(){var a,n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.get(t,{params:{api_key:c,query:f}});case 2:a=e.sent,n=a.data.results,d(n.filter((function(e){return null!==e.poster_path})));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}catch(a){console.log(a)}}),[l,f,m,O]),console.log(f),Object(j.jsx)("div",{className:"search",children:u.map((function(e){return Object(j.jsxs)("div",{className:"search-info",children:[Object(j.jsx)(h.b,{to:"/details/".concat(e.id),children:Object(j.jsx)("img",{src:"".concat("https://image.tmdb.org/t/p/w500").concat(e.poster_path),alt:""})}),Object(j.jsxs)("h3",{children:[e.title," "]}),Object(j.jsx)(_.a,{count:5,size:24,color2:"#ffd700",value:Number((e.vote_average/2).toFixed(1)),edit:!1})]},e.id)}))})}var A=function(){return Object(j.jsx)("div",{className:"App",children:Object(j.jsxs)(h.a,{children:[Object(j.jsx)(u,{}),Object(j.jsxs)(i.c,{children:[Object(j.jsx)(i.a,{path:"/movie_app_v2/",exact:!0,component:g}),Object(j.jsx)(i.a,{exact:!0,path:"/movie_app_v2/search/query=:query",component:S}),Object(j.jsx)(i.a,{path:"/movie_app_v2/details/:id",component:E})]})]})})},q=c(17);var R=Object(q.b)({inputReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"MOVIE_NAME":return t.payload;default:return e}}}),T=Object(q.c)(R);r.a.render(Object(j.jsx)(h.a,{children:Object(j.jsx)(o.a,{store:T,children:Object(j.jsx)(A,{})})}),document.getElementById("root"))},25:function(e,t,c){},40:function(e,t,c){},53:function(e,t,c){},54:function(e,t,c){}},[[108,1,2]]]);
//# sourceMappingURL=main.6696a266.chunk.js.map
"use strict";(self.webpackChunkart_of_war=self.webpackChunkart_of_war||[]).push([[779],{72609:function(e,t,n){var r=n(80184);t.Z=function(e){var t=e.text,n=e.children,s=e.className,i=e.disabled,a=e.type,c=e.onClick;return(0,r.jsx)("button",{className:s,disabled:i,type:a,onClick:c,children:n||t})}},26531:function(e,t,n){n.d(t,{Z:function(){return c}});var r=n(39230),s=n(72609),i="LoadMoreBtn_loadMore_btn__C6t1F",a=n(80184),c=function(e){var t=e.handleLoadMore,n=(0,r.$G)().t;return(0,a.jsx)(s.Z,{className:i,text:n("main.loadMore"),onClick:t})}},779:function(e,t,n){n.r(t),n.d(t,{default:function(){return N}});var r=n(29439),s=n(72791),i="ArticlesList_list__4JOG0",a=n(80184),c=function(e){var t=e.children;return(0,a.jsx)("div",{className:i,children:t})},l=n(39230),d="ArticlesItem_item__Gzkig",o="ArticlesItem_header__neE6j",u="ArticlesItem_title__tvpXT",_="ArticlesItem_date__0Psjh",h="ArticlesItem_content__oHd7U",m="ArticlesItem_readMoreButton__k+btG",f=n(72609),j=function(e){var t=e.id,n=e.title,i=e.date,c=e.content,j=(0,l.$G)().t,x=(0,s.useState)(!1),v=(0,r.Z)(x,2),k=v[0],p=v[1],N=j(c).slice(0,100)+"...";return(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)("div",{className:d,children:[(0,a.jsxs)("div",{className:o,children:[(0,a.jsx)("h2",{className:u,children:j(n)}),(0,a.jsx)("p",{className:_,children:i})]}),(0,a.jsx)("p",{className:h,children:k?j(c):N}),(0,a.jsx)(f.Z,{onClick:function(){return p(!k)},className:m,children:j(k?"articles.showLess":"articles.readMore")})]},t)})},x=n(26531),v=[{id:"1",date:"2024-11-16",title:"articles.1.title",content:"articles.1.content",imageUrl:null,videoUrl:null,tags:["strategies","help"]}],k=function(){var e=(0,s.useState)(5),t=(0,r.Z)(e,2),n=t[0],i=t[1],l=v.slice(0,n);return(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)(c,{children:[l.map((function(e){return(0,a.jsx)(j,{title:e.title,date:e.date,content:e.content},e.id)})),n<v.length&&(0,a.jsx)(x.Z,{handleLoadMore:function(){i((function(e){return e+5}))}})]})})},p=n(33409),N=function(){return(0,a.jsx)(p.Z,{children:(0,a.jsx)(k,{})})}}}]);
//# sourceMappingURL=779.94f7dede.chunk.js.map
"use strict";(self.webpackChunkart_of_war=self.webpackChunkart_of_war||[]).push([[363],{3498:function(e,t,n){n.d(t,{Z:function(){return a}});var r="ArticlesList_list__4JOG0",i=n(80184),a=function(e){var t=e.children;return(0,i.jsx)("div",{className:r,children:t})}},72609:function(e,t,n){var r=n(80184);t.Z=function(e){var t=e.text,n=e.children,i=e.className,a=e.disabled,s=e.type,c=e.onClick;return(0,r.jsx)("button",{className:i,disabled:a,type:s,onClick:c,children:n||t})}},26531:function(e,t,n){n.d(t,{Z:function(){return c}});var r=n(39230),i=n(72609),a="LoadMoreBtn_loadMore_btn__C6t1F",s=n(80184),c=function(e){var t=e.handleLoadMore,n=(0,r.$G)().t;return(0,s.jsx)(i.Z,{className:a,text:n("main.loadMore"),onClick:t})}},47384:function(e,t,n){var r=n(29439),i=n(72791),a=n(49686),s=n(80184);t.Z=function(e){var t=e.videoId,n=(0,i.useState)("700"),c=(0,r.Z)(n,2),d=c[0],l=c[1],o=function(){var e=window.innerWidth;l(e<=768?"300":e>768&&e<=1440?"500":"700")};(0,i.useEffect)((function(){return o(),window.addEventListener("resize",o),function(){window.removeEventListener("resize",o)}}),[]);var u={height:d,width:"100%",playerVars:{autoplay:0}};return(0,s.jsx)(a.Z,{videoId:t,opts:u})}},44363:function(e,t,n){n.r(t),n.d(t,{default:function(){return v}});var r=n(29439),i=n(72791),a=n(3498),s=n(39230),c={item:"ArticlesItem_item__Gzkig",header:"ArticlesItem_header__neE6j",title:"ArticlesItem_title__tvpXT",date:"ArticlesItem_date__0Psjh",content:"ArticlesItem_content__oHd7U",paragraph:"ArticlesItem_paragraph__Z3wsL",readMoreButton:"ArticlesItem_readMoreButton__k+btG"},d=n(72609),l=n(47384),o=n(80184),u=function(e){var t=e.id,n=e.title,a=e.date,u=e.content,h=e.videoId,_=(0,s.$G)().t,f=(0,i.useState)(!1),m=(0,r.Z)(f,2),v=m[0],p=m[1],j=_(u,{returnObjects:!0}),x=j[0]+"...";return(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)("div",{className:c.item,children:[(0,o.jsxs)("div",{className:c.header,children:[(0,o.jsx)("h2",{className:c.title,children:_(n)}),(0,o.jsx)("p",{className:c.date,children:a})]}),(0,o.jsxs)("div",{className:c.content,children:[v?j.map((function(e,t){return(0,o.jsx)("p",{className:c.paragraph,children:e},t)})):(0,o.jsx)("p",{className:c.paragraph,children:x}),v&&h&&(0,o.jsx)("div",{className:c.trailerWrapper,children:(0,o.jsx)(l.Z,{videoId:h})})]}),(0,o.jsx)(d.Z,{onClick:function(){return p(!v)},className:c.readMoreButton,children:_(v?"articles.showLess":"articles.readMore")})]},t)})},h=n(26531),_=[{id:"1",date:"2024-11-16",title:"articles.1.title",content:"articles.1.content",imageUrl:null,videoId:null,tags:["news","help"]}],f=function(){var e=(0,i.useState)(5),t=(0,r.Z)(e,2),n=t[0],s=t[1],c=_.slice(0,n);return(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)(a.Z,{children:[c.map((function(e){return(0,o.jsx)(u,{title:e.title,date:e.date,content:e.content,videoId:e.videoId},e.id)})),n<_.length&&(0,o.jsx)(h.Z,{handleLoadMore:function(){s((function(e){return e+5}))}})]})})},m=n(33409),v=function(){return(0,o.jsx)(m.Z,{children:(0,o.jsx)(f,{})})}}}]);
//# sourceMappingURL=363.5e6cd078.chunk.js.map
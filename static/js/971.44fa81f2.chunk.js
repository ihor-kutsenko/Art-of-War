"use strict";(self.webpackChunkart_of_war=self.webpackChunkart_of_war||[]).push([[971],{55389:function(e,t,a){a.d(t,{Z:function(){return C}});var n=a(29439),i=a(72791),l=a(80184),s=function(e){var t=e.text,a=e.className,n=e.disabled,i=e.type,s=e.onClick;return(0,l.jsx)("button",{className:a,disabled:n,type:i,onClick:s,children:t})},c=a(54164);var o=a.p+"static/media/sprite.d77709f9ac184374b9f38772f9fb270a.svg",r=function(e){var t=e.className,a=e.iconId,n=e.onClick;return(0,l.jsx)("svg",{className:t,preserveAspectRatio:"none",onClick:n,children:(0,l.jsx)("use",{href:"".concat(o,"#").concat(a)})})},d="Modal_overlay__b+zEz",u="Modal_modal__yEgVW",m="Modal_button__FFRRp",f="Modal_iconClose__u8oJf",g=document.querySelector("#modal-root"),_=function(e){var t=e.onClose,a=e.children;(0,i.useEffect)((function(){var e=function(e){"Escape"===e.code&&t()};return window.addEventListener("keydown",e),function(){window.removeEventListener("keydown",e)}}),[t]);return(0,c.createPortal)((0,l.jsx)("div",{className:d,onClick:function(e){e.currentTarget===e.target&&t()},children:(0,l.jsxs)("div",{className:u,children:[(0,l.jsx)("button",{className:m,type:"button",onClick:t,children:(0,l.jsx)(r,{className:f,iconId:"icon-close"})}),a]})}),g)},b="Item_item__VisEJ",p="Item_title__RuLxn",x="Item_image__bmivv",v="Item_button__D7hVs",j="Item_modal_container__V8Wja",h={list:"MedalList_list__gQBSu",link:"MedalList_link__89SA3",active:"MedalList_active__ddTNv"},M=function(e){var t=e.onSelect,a=e.activeMedal;return(0,l.jsx)("div",{className:h.container,children:(0,l.jsx)("ul",{className:h.list,children:["Steel","Bronze","Silver","Gold","Diamond","Star"].map((function(e){return(0,l.jsx)("li",{onClick:function(){return function(e){t(e)}(e)},className:"".concat(h.link," ").concat(a===e?h.active:""),children:e},e)}))})})},N={container:"MedalGrid_container__Peq1o",img:"MedalGrid_img__4i2O3",pagination:"MedalGrid_pagination__-W4Md",pagination_btn:"MedalGrid_pagination_btn__ym9Zk"},k=function(e){for(var t=e.images,a=(0,i.useState)(1),s=(0,n.Z)(a,2),c=s[0],o=s[1],r=window.innerWidth<=768,d=Math.ceil(t.length/1),u=[],m=function(e){u.push((0,l.jsx)("button",{className:"".concat(N.pagination_btn," ").concat(c===e?N.active:""),onClick:function(){o(e)},children:e},e))},f=1;f<=d;f++)m(f);var g=1*c,_=g-1,b=t.slice(_,g);return(0,l.jsxs)("div",{className:N.container,children:[r?b.map((function(e,t){return(0,l.jsx)("img",{src:e,alt:"medal",className:N.img},t)})):t.map((function(e,t){return(0,l.jsx)("img",{src:e,alt:"medal",className:N.img},t)})),(0,l.jsx)("div",{className:N.pagination,children:u})]})},C=function(e){var t=e.title,a=e.imageUrl,c=e.buttonText,o=e.medals,r=e.disabled,d=(0,i.useState)(!1),u=(0,n.Z)(d,2),m=u[0],f=u[1],g=(0,i.useState)(null),h=(0,n.Z)(g,2),N=h[0],C=h[1],T=(0,i.useState)(null),w=(0,n.Z)(T,2),U=w[0],y=w[1];(0,i.useEffect)((function(){C("Steel"),y("Steel")}),[]);var S=N?N.toLowerCase():null;return(0,l.jsxs)("div",{className:b,children:[(0,l.jsx)("h2",{className:p,children:t}),(0,l.jsx)("img",{src:a,alt:"Item",className:x}),(0,l.jsx)(s,{text:c,type:"button",className:v,onClick:function(){return f(!m)},disabled:r}),m&&(0,l.jsx)(_,{onClose:function(){return f(!1)},children:(0,l.jsxs)("div",{className:j,children:[(0,l.jsx)(M,{onSelect:function(e){C(e),y(e)},activeMedal:U}),N&&(0,l.jsx)("div",{children:(0,l.jsx)(k,{images:o[S]})})]})})]})}},59425:function(e,t,a){a.d(t,{Z:function(){return l}});var n="ItemList_list__e7mbG",i=a(80184),l=function(e){var t=e.children;return(0,i.jsx)("div",{className:n,children:t})}},38821:function(e,t,a){a.d(t,{Z:function(){return o}});var n=a(82715),i="Pagination_pagination_list__Txpcr",l="Pagination_pagination_item__1PgFA",s="Pagination_pagination_btn__3j1Li",c=a(80184),o=function(e){var t=e.itemsPerPage,a=e.totalItems,o=e.currentPage,r=e.onPageChange,d=Math.ceil(a/t),u=function(e){e>=1&&e<=d&&r(e),window.scrollTo({top:0,behavior:"smooth"})};return(0,c.jsx)("nav",{"aria-label":"Pagination",children:(0,c.jsxs)("ul",{className:i,children:[(0,c.jsx)("li",{className:l,children:(0,c.jsxs)("button",{className:s,onClick:function(){u(o-1)},disabled:1===o,children:[(0,c.jsx)(n.lq4,{size:"24"})," Previous page"]})}),(0,c.jsx)("li",{className:l,children:(0,c.jsxs)("button",{className:s,onClick:function(){u(o+1)},disabled:o===d,children:[" ","Next page",(0,c.jsx)(n.UXX,{size:"24"})]})})]})})}},46023:function(e,t,a){a.d(t,{Z:function(){return l}});var n="PaginationContainer_pagination_container__5bKvl",i=a(80184),l=function(e){var t=e.children;return(0,i.jsx)("div",{className:n,children:t})}},28466:function(e,t,a){var n=a(29439),i=a(72791);t.Z=function(){var e=(0,i.useState)(10),t=(0,n.Z)(e,2),a=t[0],l=t[1];return(0,i.useEffect)((function(){var e=function(){l((window.innerWidth,5))};return window.addEventListener("resize",e),e(),function(){window.removeEventListener("resize",e)}}),[]),a}},58416:function(e,t,a){a.r(t),a.d(t,{default:function(){return h}});var n=a(29439),i=a(72791),l=a(55389),s=a(38821),c=a(46023),o=a(28466),r=a(59425),d=a.p+"static/media/colosseum.64ca8275a43f631bd4ae.jpg",u=a.p+"static/media/control.f54bc5afcaadcbd790dc.jpg",m=a.p+"static/media/convoy.54ed8cd4faa8ab6ff751.jpg",f=a.p+"static/media/cornucopia.3fab3fc7415f934601dd.jpg",g=a.p+"static/media/duel.d7e27ba730ee8e8c893c.jpg",_=a.p+"static/media/evacuation.db06ed3d18100a24040f.jpg",b=a.p+"static/media/ffa3.e6b30cc6c6d0034ab2b5.jpg",p=a.p+"static/media/ffa4.e36b4c212a734d6f3ce3.jpg",x=[{title:"Colosseum",imageUrl:d,buttonText:"Medals",medals:[]},{title:"Control",imageUrl:u,buttonText:"Medals",medals:[]},{title:"Convoy",imageUrl:m,buttonText:"Medals",medals:[]},{title:"Cornucopia",imageUrl:f,buttonText:"Medals",medals:[]},{title:"Duel",imageUrl:g,buttonText:"Medals",medals:[]},{title:"Evacuation",imageUrl:_,buttonText:"Medals",medals:[]},{title:"FFA3",imageUrl:b,buttonText:"Medals",medals:[]},{title:"FFA4",imageUrl:p,buttonText:"Medals",medals:[]},{title:"FFA5",imageUrl:p,buttonText:"Medals",medals:[]},{title:"FFA6",imageUrl:p,buttonText:"Medals",medals:[]},{title:"Mexican-Slaughter",imageUrl:a.p+"static/media/mexican-slaughter.74cbce9e2ec278d6677a.jpg",buttonText:"Medals",medals:[]},{title:"Supply Crisis",imageUrl:a.p+"static/media/supply-crisis.eb2f7ada928fd5db4b3c.jpg",buttonText:"Medals",medals:[]},{title:"Royal Battle",imageUrl:a.p+"static/media/royal-battle.90b1618ce5a8bf812ff5.jpg",buttonText:"Medals",medals:[]},{title:"Territorial Dispute",imageUrl:b,buttonText:"Medals",medals:[]},{title:"Weakest Link",imageUrl:a.p+"static/media/weakest-link.50e35179486e3c6348a7.jpg",buttonText:"Medals",medals:[]},{title:"Wings of Defense",imageUrl:a.p+"static/media/wings-of-defense.acd05b7ed0c3d6bcaeb8.jpg",buttonText:"Medals",medals:[]},{title:"Zombie Apocalypse",imageUrl:a.p+"static/media/zombie-apocalypse.43222071a8e427aa840f.jpg",buttonText:"Medals",medals:[]}],v=a(80184),j=function(){var e=function(e){return e&&e.length>0},t=(0,i.useState)(1),a=(0,n.Z)(t,2),d=a[0],u=a[1],m=(0,o.Z)(),f=d*m,g=f-m,_=x.slice(g,f);return(0,v.jsx)(c.Z,{children:(0,v.jsxs)(r.Z,{children:[_.map((function(t,a){return(0,v.jsx)(l.Z,{title:t.title,imageUrl:t.imageUrl,buttonText:t.buttonText,medals:t.medals,disabled:e},a)})),(0,v.jsx)(s.Z,{itemsPerPage:m,totalItems:x.length,currentPage:d,onPageChange:function(e){u(e)}})]})})},h=function(){return(0,v.jsx)(j,{})}}}]);
//# sourceMappingURL=971.44fa81f2.chunk.js.map
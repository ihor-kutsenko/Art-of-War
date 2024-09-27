"use strict";(self.webpackChunkart_of_war=self.webpackChunkart_of_war||[]).push([[259],{75665:function(e,t,a){a.d(t,{Z:function(){return k}});var n=a(29439),i=a(72791),l=a(80184),s=function(e){var t=e.text,a=e.className,n=e.disabled,i=e.type,s=e.onClick;return(0,l.jsx)("button",{className:a,disabled:n,type:i,onClick:s,children:t})},o=a(54164),r=a(78588),c="Modal_overlay__b+zEz",d="Modal_modal__yEgVW",u="Modal_button__FFRRp",m="Modal_iconClose__u8oJf",p=document.querySelector("#modal-root"),g=function(e){var t=e.onClose,a=e.children;(0,i.useEffect)((function(){var e=function(e){"Escape"===e.code&&t()};return window.addEventListener("keydown",e),function(){window.removeEventListener("keydown",e)}}),[t]);return(0,o.createPortal)((0,l.jsx)("div",{className:c,onClick:function(e){e.currentTarget===e.target&&t()},children:(0,l.jsxs)("div",{className:d,children:[(0,l.jsx)("button",{className:u,type:"button",onClick:t,children:(0,l.jsx)(r.Z,{className:m,iconId:"icon-close"})}),a]})}),p)},_={list:"MedalList_list__gQBSu",link:"MedalList_link__89SA3",active:"MedalList_active__ddTNv"},h=function(e){var t=e.onSelect,a=e.activeMedal;return(0,l.jsx)("div",{className:_.container,children:(0,l.jsx)("ul",{className:_.list,children:["Steel","Bronze","Silver","Gold","Diamond","Star"].map((function(e){return(0,l.jsx)("li",{onClick:function(){return function(e){t(e)}(e)},className:"".concat(_.link," ").concat(a===e?_.active:""),children:e},e)}))})})},f={container:"MedalGrid_container__Peq1o",img:"MedalGrid_img__4i2O3",pagination:"MedalGrid_pagination__-W4Md",pagination_btn:"MedalGrid_pagination_btn__ym9Zk"},v=function(e){for(var t=e.images,a=(0,i.useState)(1),s=(0,n.Z)(a,2),o=s[0],r=s[1],c=window.innerWidth<=768,d=Math.ceil(t.length/1),u=[],m=function(e){u.push((0,l.jsx)("button",{className:"".concat(f.pagination_btn," ").concat(o===e?f.active:""),onClick:function(){r(e)},children:e},e))},p=1;p<=d;p++)m(p);var g=1*o,_=g-1,h=t.slice(_,g);return(0,l.jsxs)("div",{className:f.container,children:[c?h.map((function(e,t){return(0,l.jsx)("img",{src:e,alt:"medal",className:f.img},t)})):t.map((function(e,t){return(0,l.jsx)("img",{src:e,alt:"medal",className:f.img},t)})),(0,l.jsx)("div",{className:f.pagination,children:u})]})},b="Item_item__VisEJ",x="Item_title__RuLxn",y="Item_image__bmivv",j="Item_button__D7hVs",w="Item_modal_container__V8Wja",k=function(e){var t=e.title,a=e.imageUrl,o=e.buttonText,r=e.medals,c=e.disabled,d=(0,i.useState)(!1),u=(0,n.Z)(d,2),m=u[0],p=u[1],_=(0,i.useState)(null),f=(0,n.Z)(_,2),k=f[0],M=f[1],N=(0,i.useState)(null),q=(0,n.Z)(N,2),C=q[0],T=q[1];(0,i.useEffect)((function(){M("Steel"),T("Steel")}),[]);var U=k?k.toLowerCase():null;return(0,l.jsxs)("div",{className:b,children:[(0,l.jsx)("h2",{className:x,children:t}),(0,l.jsx)("img",{src:a,alt:"Item",className:y}),(0,l.jsx)(s,{text:o,type:"button",className:j,onClick:function(){return p(!m)},disabled:c}),m&&(0,l.jsx)(g,{onClose:function(){return p(!1)},children:(0,l.jsxs)("div",{className:w,children:[(0,l.jsx)(h,{onSelect:function(e){M(e),T(e)},activeMedal:C}),k&&(0,l.jsx)("div",{children:(0,l.jsx)(v,{images:r[U]})})]})})]})}},59425:function(e,t,a){a.d(t,{Z:function(){return l}});var n="ItemList_list__e7mbG",i=a(80184),l=function(e){var t=e.children;return(0,i.jsx)("div",{className:n,children:t})}},38821:function(e,t,a){a.d(t,{Z:function(){return r}});var n=a(82715),i="Pagination_pagination_list__Txpcr",l="Pagination_pagination_item__1PgFA",s="Pagination_pagination_btn__3j1Li",o=a(80184),r=function(e){var t=e.itemsPerPage,a=e.totalItems,r=e.currentPage,c=e.onPageChange,d=Math.ceil(a/t),u=function(e){e>=1&&e<=d&&c(e),window.scrollTo({top:0,behavior:"smooth"})};return(0,o.jsx)("nav",{"aria-label":"Pagination",children:(0,o.jsxs)("ul",{className:i,children:[(0,o.jsx)("li",{className:l,children:(0,o.jsxs)("button",{className:s,onClick:function(){u(r-1)},disabled:1===r,children:[(0,o.jsx)(n.lq4,{size:"24"})," Previous page"]})}),(0,o.jsx)("li",{className:l,children:(0,o.jsxs)("button",{className:s,onClick:function(){u(r+1)},disabled:r===d,children:[" ","Next page",(0,o.jsx)(n.UXX,{size:"24"})]})})]})})}},46023:function(e,t,a){a.d(t,{Z:function(){return l}});var n="PaginationContainer_pagination_container__5bKvl",i=a(80184),l=function(e){var t=e.children;return(0,i.jsx)("div",{className:n,children:t})}},28466:function(e,t,a){var n=a(29439),i=a(72791);t.Z=function(){var e=(0,i.useState)(10),t=(0,n.Z)(e,2),a=t[0],l=t[1];return(0,i.useEffect)((function(){var e=function(){l((window.innerWidth,5))};return window.addEventListener("resize",e),e(),function(){window.removeEventListener("resize",e)}}),[]),a}},78588:function(e,t,a){a.d(t,{Z:function(){return l}});a(72791);var n=a.p+"static/media/sprite.f7ba7a32de94a87d7e4580a6da141ed8.svg",i=a(80184),l=function(e){var t=e.className,a=e.iconId,l=e.onClick;return(0,i.jsx)("svg",{className:t,preserveAspectRatio:"none",onClick:l,children:(0,i.jsx)("use",{href:"".concat(n,"#").concat(a)})})}},56259:function(e,t,a){a.r(t),a.d(t,{default:function(){return p}});var n=a(29439),i=a(72791),l=[{title:"Colosseum",imageUrl:"https://res.cloudinary.com/dsy8hantq/image/upload/v1727420362/colosseum_pdemj6.webp",buttonText:"Medals",medals:[]},{title:"Control",imageUrl:"https://res.cloudinary.com/dsy8hantq/image/upload/v1727420363/control_rjakmz.webp",buttonText:"Medals",medals:[]},{title:"Convoy",imageUrl:"https://res.cloudinary.com/dsy8hantq/image/upload/v1727420363/convoy_h43myf.webp",buttonText:"Medals",medals:[]},{title:"Cornucopia",imageUrl:"https://res.cloudinary.com/dsy8hantq/image/upload/v1727420363/cornucopia_cgcvxf.webp",buttonText:"Medals",medals:[]},{title:"Duel",imageUrl:"https://res.cloudinary.com/dsy8hantq/image/upload/v1727420359/duel_k8iz8p.webp",buttonText:"Medals",medals:[]},{title:"Evacuation",imageUrl:"https://res.cloudinary.com/dsy8hantq/image/upload/v1727420359/evacuation_mgvr1e.webp",buttonText:"Medals",medals:[]},{title:"FFA3",imageUrl:"https://res.cloudinary.com/dsy8hantq/image/upload/v1727420359/ffa3_dmkktk.webp",buttonText:"Medals",medals:[]},{title:"FFA4",imageUrl:"https://res.cloudinary.com/dsy8hantq/image/upload/v1727420360/ffa4_eqgqul.webp",buttonText:"Medals",medals:[]},{title:"FFA5",imageUrl:"https://res.cloudinary.com/dsy8hantq/image/upload/v1727420360/ffa4_eqgqul.webp",buttonText:"Medals",medals:[]},{title:"FFA6",imageUrl:"https://res.cloudinary.com/dsy8hantq/image/upload/v1727420360/ffa4_eqgqul.webp",buttonText:"Medals",medals:[]},{title:"Mexican-Slaughter",imageUrl:"https://res.cloudinary.com/dsy8hantq/image/upload/v1727420360/mexican-slaughter_slpklr.webp",buttonText:"Medals",medals:[]},{title:"Supply Crisis",imageUrl:"https://res.cloudinary.com/dsy8hantq/image/upload/v1727420360/supply-crisis_uu3bp5.webp",buttonText:"Medals",medals:[]},{title:"Royal Battle",imageUrl:"https://res.cloudinary.com/dsy8hantq/image/upload/v1727420359/royal-battle_i99b5v.webp",buttonText:"Medals",medals:[]},{title:"Territorial Dispute",imageUrl:"https://res.cloudinary.com/dsy8hantq/image/upload/v1727420359/ffa3_dmkktk.webp",buttonText:"Medals",medals:[]},{title:"Weakest Link",imageUrl:"https://res.cloudinary.com/dsy8hantq/image/upload/v1727420360/weakest-link_kh8lpr.webp",buttonText:"Medals",medals:[]},{title:"Wings of Defense",imageUrl:"https://res.cloudinary.com/dsy8hantq/image/upload/v1727420361/wings-of-defense_o1fmvs.webp",buttonText:"Medals",medals:[]},{title:"Zombie Apocalypse",imageUrl:"https://res.cloudinary.com/dsy8hantq/image/upload/v1727420362/zombie-apocalypse_ysbfq9.webp",buttonText:"Medals",medals:[]}],s=a(75665),o=a(38821),r=a(46023),c=a(28466),d=a(59425),u=a(80184),m=function(){var e=(0,i.useState)(1),t=(0,n.Z)(e,2),a=t[0],m=t[1],p=(0,c.Z)(),g=a*p,_=g-p,h=l.slice(_,g);return(0,u.jsx)(r.Z,{children:(0,u.jsxs)(d.Z,{children:[h.map((function(e,t){return(0,u.jsx)(s.Z,{title:e.title,imageUrl:e.imageUrl,buttonText:e.buttonText,medals:e.medals,disabled:0===e.medals.length},t)})),(0,u.jsx)(o.Z,{itemsPerPage:p,totalItems:l.length,currentPage:a,onPageChange:function(e){m(e)}})]})})},p=function(){return(0,u.jsx)(u.Fragment,{children:(0,u.jsx)(m,{})})}}}]);
//# sourceMappingURL=259.434de455.chunk.js.map
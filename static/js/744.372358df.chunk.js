"use strict";(self.webpackChunkart_of_war=self.webpackChunkart_of_war||[]).push([[744],{75665:function(e,a,t){t.d(a,{Z:function(){return k}});var i=t(29439),n=t(72791),s=t(80184),c=function(e){var a=e.text,t=e.className,i=e.disabled,n=e.type,c=e.onClick;return(0,s.jsx)("button",{className:t,disabled:i,type:n,onClick:c,children:a})},d=t(54164),l=t(78588),r="Modal_overlay__b+zEz",o="Modal_modal__yEgVW",m="Modal_button__FFRRp",u="Modal_iconClose__u8oJf",p=document.querySelector("#modal-root"),b=function(e){var a=e.onClose,t=e.children;(0,n.useEffect)((function(){var e=function(e){"Escape"===e.code&&a()};return window.addEventListener("keydown",e),function(){window.removeEventListener("keydown",e)}}),[a]);return(0,d.createPortal)((0,s.jsx)("div",{className:r,onClick:function(e){e.currentTarget===e.target&&a()},children:(0,s.jsxs)("div",{className:o,children:[(0,s.jsx)("button",{className:m,type:"button",onClick:a,children:(0,s.jsx)(l.Z,{className:u,iconId:"icon-close"})}),t]})}),p)},f={list:"MedalList_list__gQBSu",link:"MedalList_link__89SA3",active:"MedalList_active__ddTNv"},_=function(e){var a=e.onSelect,t=e.activeMedal;return(0,s.jsx)("div",{className:f.container,children:(0,s.jsx)("ul",{className:f.list,children:["Steel","Bronze","Silver","Gold","Diamond","Star"].map((function(e){return(0,s.jsx)("li",{onClick:function(){return function(e){a(e)}(e)},className:"".concat(f.link," ").concat(t===e?f.active:""),children:e},e)}))})})},h={container:"MedalGrid_container__Peq1o",img:"MedalGrid_img__4i2O3",pagination:"MedalGrid_pagination__-W4Md",pagination_btn:"MedalGrid_pagination_btn__ym9Zk"},v=function(e){for(var a=e.images,t=(0,n.useState)(1),c=(0,i.Z)(t,2),d=c[0],l=c[1],r=window.innerWidth<=768,o=Math.ceil(a.length/1),m=[],u=function(e){m.push((0,s.jsx)("button",{className:"".concat(h.pagination_btn," ").concat(d===e?h.active:""),onClick:function(){l(e)},children:e},e))},p=1;p<=o;p++)u(p);var b=1*d,f=b-1,_=a.slice(f,b);return(0,s.jsxs)("div",{className:h.container,children:[r?_.map((function(e,a){return(0,s.jsx)("img",{src:e,alt:"medal",className:h.img},a)})):a.map((function(e,a){return(0,s.jsx)("img",{src:e,alt:"medal",className:h.img},a)})),(0,s.jsx)("div",{className:h.pagination,children:m})]})},g="Item_item__VisEJ",w="Item_title__RuLxn",x="Item_image__bmivv",j="Item_button__D7hVs",y="Item_modal_container__V8Wja",k=function(e){var a=e.title,t=e.imageUrl,d=e.buttonText,l=e.medals,r=e.disabled,o=(0,n.useState)(!1),m=(0,i.Z)(o,2),u=m[0],p=m[1],f=(0,n.useState)(null),h=(0,i.Z)(f,2),k=h[0],M=h[1],N=(0,n.useState)(null),C=(0,i.Z)(N,2),S=C[0],T=C[1];(0,n.useEffect)((function(){M("Steel"),T("Steel")}),[]);var q=k?k.toLowerCase():null;return(0,s.jsxs)("div",{className:g,children:[(0,s.jsx)("h2",{className:w,children:a}),(0,s.jsx)("img",{src:t,alt:"Item",className:x}),(0,s.jsx)(c,{text:d,type:"button",className:j,onClick:function(){return p(!u)},disabled:r}),u&&(0,s.jsx)(b,{onClose:function(){return p(!1)},children:(0,s.jsxs)("div",{className:y,children:[(0,s.jsx)(_,{onSelect:function(e){M(e),T(e)},activeMedal:S}),k&&(0,s.jsx)("div",{children:(0,s.jsx)(v,{images:l[q]})})]})})]})}},78588:function(e,a,t){t.d(a,{Z:function(){return s}});t(72791);var i=t.p+"static/media/sprite.f7ba7a32de94a87d7e4580a6da141ed8.svg",n=t(80184),s=function(e){var a=e.className,t=e.iconId,s=e.onClick;return(0,n.jsx)("svg",{className:a,preserveAspectRatio:"none",onClick:s,children:(0,n.jsx)("use",{href:"".concat(i,"#").concat(t)})})}},51713:function(e,a,t){t.r(a),t.d(a,{default:function(){return d}});var i=[{title:"AI",imageUrl:"https://res.cloudinary.com/dsy8hantq/image/upload/v1727421064/skirmish_lvag8f.webp",buttonText:"Medals",medals:{steel:[t.p+"static/media/ai-steel1.fb661d6f7f696db37751.webp",t.p+"static/media/ai-steel2.092d54419c2345dc75c8.webp",t.p+"static/media/ai-steel3.95aabcfc5c528ea59434.webp",t.p+"static/media/ai-steel4.ad2cd8d2cf7596ccd5b2.webp"],bronze:[t.p+"static/media/ai-bronze1.b45648777fe9147aaeb8.webp",t.p+"static/media/ai-bronze2.b67b4559d71fd3b57992.webp",t.p+"static/media/ai-bronze3.25f8b261a85c82ad47c6.webp",t.p+"static/media/ai-bronze4.8236ecc27685e2d6fb91.webp"],silver:[t.p+"static/media/ai-silver1.8a3b313dd027fb348130.webp",t.p+"static/media/ai-silver2.2621cfc0735c0d2f1b9e.webp",t.p+"static/media/ai-silver3.841b4f313453d3d5e6f3.webp",t.p+"static/media/ai-silver4.5e4e145aa7516cce1332.webp"],gold:[t.p+"static/media/ai-gold1.5e508b048922c5b3294d.webp",t.p+"static/media/ai-gold2.f529d36865756e5b4125.webp",t.p+"static/media/ai-gold3.49a69078b7cbd4a45f6a.webp",t.p+"static/media/ai-gold4.6349ca50dff57044d6ad.webp"],diamond:[t.p+"static/media/ai-diamond1.b08ec7c80c36ea483dd6.webp",t.p+"static/media/ai-diamond2.fadd69bd5a109a7ce796.webp",t.p+"static/media/ai-diamond3.e0b6a0f32574bf9d8b44.webp",t.p+"static/media/ai-diamond4.751ce95c737819cf83d6.webp"],star:[t.p+"static/media/ai-star1.d0144f7e789de2798a66.webp",t.p+"static/media/ai-star2.7c100fca2f986814beb3.webp",t.p+"static/media/ai-star3.66b8798cc404e02b4af8.webp",t.p+"static/media/ai-star4.2a4c98a8aef624da701f.webp"]}},{title:"Survial",imageUrl:"https://res.cloudinary.com/dsy8hantq/image/upload/v1727421112/survial_j4qte2.webp",buttonText:"Medals",medals:[]},{title:"Test of Strength",imageUrl:"https://res.cloudinary.com/dsy8hantq/image/upload/v1727421111/test-of-strength_uqraun.webp",buttonText:"Medals",medals:[]},{title:"Pumpkin Hunt",imageUrl:"https://res.cloudinary.com/dsy8hantq/image/upload/v1727421065/pumpkin-hunt_c6bhqn.webp",buttonText:"Medals",medals:[]},{title:"Syndicate Trap",imageUrl:"https://res.cloudinary.com/dsy8hantq/image/upload/v1727421065/syndicate-trap_xdsovp.webp",buttonText:"Medals",medals:[]},{title:"Christmas Cargo",imageUrl:"https://res.cloudinary.com/dsy8hantq/image/upload/v1727421064/christmas-cargo_lai5nw.webp",buttonText:"Medals",medals:[]},{title:"Battle for the Christmas Trees",imageUrl:"https://res.cloudinary.com/dsy8hantq/image/upload/v1727421111/battle-for-the-christmas-trees_m1lyg7.webp",buttonText:"Medals",medals:[]}],n=t(75665),s=t(80184),c=function(){return(0,s.jsx)("div",{children:i.map((function(e,a){return(0,s.jsx)(n.Z,{title:e.title,imageUrl:e.imageUrl,buttonText:e.buttonText,medals:e.medals,disabled:0===e.medals.length},a)}))})},d=function(){return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(c,{})})}}}]);
//# sourceMappingURL=744.372358df.chunk.js.map
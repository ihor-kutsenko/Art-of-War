"use strict";(self.webpackChunkart_of_war=self.webpackChunkart_of_war||[]).push([[744],{72609:function(e,a,t){var i=t(80184);a.Z=function(e){var a=e.text,t=e.className,n=e.disabled,s=e.type,c=e.onClick;return(0,i.jsx)("button",{className:t,disabled:n,type:s,onClick:c,children:a})}},44938:function(e,a,t){t.d(a,{Z:function(){return k}});var i=t(29439),n=t(72791),s=t(72609),c=t(54164),d=t(78588),l="Modal_overlay__b+zEz",r="Modal_modal__yEgVW",o="Modal_button__FFRRp",m="Modal_iconClose__u8oJf",u=t(80184),b=document.querySelector("#modal-root"),p=function(e){var a=e.onClose,t=e.children;(0,n.useEffect)((function(){var e=function(e){"Escape"===e.code&&a()};return window.addEventListener("keydown",e),function(){window.removeEventListener("keydown",e)}}),[a]);return(0,c.createPortal)((0,u.jsx)("div",{className:l,onClick:function(e){e.currentTarget===e.target&&a()},children:(0,u.jsxs)("div",{className:r,children:[(0,u.jsx)("button",{className:o,type:"button",onClick:a,children:(0,u.jsx)(d.Z,{className:m,iconId:"icon-close"})}),t]})}),b)},f={list:"MedalList_list__gQBSu",link:"MedalList_link__89SA3",active:"MedalList_active__ddTNv"},_=function(e){var a=e.onSelect,t=e.activeMedal;return(0,u.jsx)("div",{className:f.container,children:(0,u.jsx)("ul",{className:f.list,children:["Steel","Bronze","Silver","Gold","Diamond","Star"].map((function(e){return(0,u.jsx)("li",{onClick:function(){return function(e){a(e)}(e)},className:"".concat(f.link," ").concat(t===e?f.active:""),children:e},e)}))})})},h={container:"MedalGrid_container__Peq1o",img:"MedalGrid_img__4i2O3",pagination:"MedalGrid_pagination__-W4Md",pagination_btn:"MedalGrid_pagination_btn__ym9Zk"},g=function(e){for(var a=e.images,t=(0,n.useState)(1),s=(0,i.Z)(t,2),c=s[0],d=s[1],l=window.innerWidth<=768,r=Math.ceil(a.length/1),o=[],m=function(e){o.push((0,u.jsx)("button",{className:"".concat(h.pagination_btn," ").concat(c===e?h.active:""),onClick:function(){d(e)},children:e},e))},b=1;b<=r;b++)m(b);var p=1*c,f=p-1,_=a.slice(f,p);return(0,u.jsxs)("div",{className:h.container,children:[l?_.map((function(e,a){return(0,u.jsx)("img",{src:e,alt:"medal",className:h.img},a)})):a.map((function(e,a){return(0,u.jsx)("img",{src:e,alt:"medal",className:h.img},a)})),(0,u.jsx)("div",{className:h.pagination,children:o})]})},v="Item_item__VisEJ",w="Item_title__RuLxn",x="Item_image__bmivv",j="Item_actions__BGGri",y="Item_button__D7hVs",N="Item_infoText__sLP1Z",M="Item_modal_container__V8Wja",k=function(e){var a=e.title,t=e.imageUrl,c=e.buttonText,d=e.medals,l=e.info,r=e.disabled,o=(0,n.useState)(!1),m=(0,i.Z)(o,2),b=m[0],f=m[1],h=(0,n.useState)(!1),k=(0,i.Z)(h,2),S=k[0],C=k[1],T=(0,n.useState)(null),Z=(0,i.Z)(T,2),q=Z[0],I=Z[1],U=(0,n.useState)(null),z=(0,i.Z)(U,2),E=z[0],L=z[1];(0,n.useEffect)((function(){I("Steel"),L("Steel")}),[]);var G=q?q.toLowerCase():null;return(0,u.jsxs)("div",{className:v,children:[(0,u.jsx)("h2",{className:w,children:a}),(0,u.jsx)("img",{src:t,alt:"Item",className:x}),(0,u.jsxs)("div",{className:j,children:[(0,u.jsx)(s.Z,{text:c,type:"button",className:y,onClick:function(){return f(!b)},disabled:r}),(0,u.jsx)(s.Z,{text:"Info",type:"button",className:y,onClick:function(){return C(!S)}})]}),S&&(0,u.jsx)("p",{className:N,children:l}),b&&(0,u.jsx)(p,{onClose:function(){return f(!1)},children:(0,u.jsxs)("div",{className:M,children:[(0,u.jsx)(_,{onSelect:function(e){I(e),L(e)},activeMedal:E}),q&&(0,u.jsx)("div",{children:(0,u.jsx)(g,{images:d[G]})})]})})]})}},51713:function(e,a,t){t.r(a),t.d(a,{default:function(){return d}});var i=[{title:"AI",imageUrl:"https://res.cloudinary.com/dsy8hantq/image/upload/v1727421064/skirmish_lvag8f.webp",buttonText:"Medals",medals:{steel:[t.p+"static/media/ai-steel1.fb661d6f7f696db37751.webp",t.p+"static/media/ai-steel2.092d54419c2345dc75c8.webp",t.p+"static/media/ai-steel3.95aabcfc5c528ea59434.webp",t.p+"static/media/ai-steel4.ad2cd8d2cf7596ccd5b2.webp"],bronze:[t.p+"static/media/ai-bronze1.b45648777fe9147aaeb8.webp",t.p+"static/media/ai-bronze2.b67b4559d71fd3b57992.webp",t.p+"static/media/ai-bronze3.25f8b261a85c82ad47c6.webp",t.p+"static/media/ai-bronze4.8236ecc27685e2d6fb91.webp"],silver:[t.p+"static/media/ai-silver1.8a3b313dd027fb348130.webp",t.p+"static/media/ai-silver2.2621cfc0735c0d2f1b9e.webp",t.p+"static/media/ai-silver3.841b4f313453d3d5e6f3.webp",t.p+"static/media/ai-silver4.5e4e145aa7516cce1332.webp"],gold:[t.p+"static/media/ai-gold1.5e508b048922c5b3294d.webp",t.p+"static/media/ai-gold2.f529d36865756e5b4125.webp",t.p+"static/media/ai-gold3.49a69078b7cbd4a45f6a.webp",t.p+"static/media/ai-gold4.6349ca50dff57044d6ad.webp"],diamond:[t.p+"static/media/ai-diamond1.b08ec7c80c36ea483dd6.webp",t.p+"static/media/ai-diamond2.fadd69bd5a109a7ce796.webp",t.p+"static/media/ai-diamond3.e0b6a0f32574bf9d8b44.webp",t.p+"static/media/ai-diamond4.751ce95c737819cf83d6.webp"],star:[t.p+"static/media/ai-star1.d0144f7e789de2798a66.webp",t.p+"static/media/ai-star2.7c100fca2f986814beb3.webp",t.p+"static/media/ai-star3.66b8798cc404e02b4af8.webp",t.p+"static/media/ai-star4.2a4c98a8aef624da701f.webp"]}},{title:"Survial",imageUrl:"https://res.cloudinary.com/dsy8hantq/image/upload/v1727421112/survial_j4qte2.webp",buttonText:"Medals",medals:[]},{title:"Test of Strength",imageUrl:"https://res.cloudinary.com/dsy8hantq/image/upload/v1727421111/test-of-strength_uqraun.webp",buttonText:"Medals",medals:[]},{title:"Pumpkin Hunt",imageUrl:"https://res.cloudinary.com/dsy8hantq/image/upload/v1727421065/pumpkin-hunt_c6bhqn.webp",buttonText:"Medals",medals:[]},{title:"Syndicate Trap",imageUrl:"https://res.cloudinary.com/dsy8hantq/image/upload/v1727421065/syndicate-trap_xdsovp.webp",buttonText:"Medals",medals:[]},{title:"Christmas Cargo",imageUrl:"https://res.cloudinary.com/dsy8hantq/image/upload/v1727421064/christmas-cargo_lai5nw.webp",buttonText:"Medals",medals:[]},{title:"Battle for the Christmas Trees",imageUrl:"https://res.cloudinary.com/dsy8hantq/image/upload/v1727421111/battle-for-the-christmas-trees_m1lyg7.webp",buttonText:"Medals",medals:[]}],n=t(44938),s=t(80184),c=function(){return(0,s.jsx)("div",{children:i.map((function(e,a){return(0,s.jsx)(n.Z,{title:e.title,imageUrl:e.imageUrl,buttonText:e.buttonText,medals:e.medals,disabled:0===e.medals.length},a)}))})},d=function(){return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(c,{})})}}}]);
//# sourceMappingURL=744.a55c685c.chunk.js.map
"use strict";(self.webpackChunkart_of_war=self.webpackChunkart_of_war||[]).push([[732],{1270:function(e,t,a){a.r(t),a.d(t,{default:function(){return S}});var n=a(9439),i=a(2791),c=a(184),s=function(e){var t=e.text,a=e.className,n=e.disabled,i=e.type,s=e.onClick;return(0,c.jsx)("button",{className:a,disabled:n,type:i,onClick:s,children:t})},d=a(4164);var l=a.p+"static/media/sprite.d77709f9ac184374b9f38772f9fb270a.svg",r=function(e){var t=e.className,a=e.iconId,n=e.onClick;return(0,c.jsx)("svg",{className:t,preserveAspectRatio:"none",onClick:n,children:(0,c.jsx)("use",{href:"".concat(l,"#").concat(a)})})},o="Modal_overlay__b+zEz",m="Modal_modal__yEgVW",u="Modal_button__FFRRp",p="Modal_iconClose__u8oJf",f=document.querySelector("#modal-root"),b=function(e){var t=e.onClose,a=e.children;(0,i.useEffect)((function(){return window.addEventListener("keydown",n),function(){window.removeEventListener("keydown",n)}}));var n=function(e){var a=e.target,n=e.currentTarget,i=e.code;a!==n&&"Escape"!==i||(t(),document.body.style.overflow="visible")};return document.body.style.overflow="hidden",(0,d.createPortal)((0,c.jsx)("div",{className:o,onClick:n,children:(0,c.jsxs)("div",{className:m,children:[(0,c.jsx)("button",{className:u,type:"button",onClick:t,children:(0,c.jsx)(r,{className:p,iconId:"icon-close"})}),a]})}),f)},g="Item_item__VisEJ",v="Item_title__RuLxn",x="Item_image__bmivv",_="Item_button__D7hVs",h={},j=function(e){var t=e.onSelect,a=(0,i.useState)(null),s=(0,n.Z)(a,2),d=s[0],l=s[1];return(0,c.jsx)("div",{className:h.medalList,children:(0,c.jsx)("ul",{children:["Steel","Bronze","Silver","Gold","Diamond","Star"].map((function(e){return(0,c.jsx)("li",{onClick:function(){return function(e){l(e),t(e)}(e)},className:d===e?h.active:"",children:e},e)}))})})},y=function(e){var t=e.images;return(0,c.jsx)("div",{style:{display:"grid",gridTemplateColumns:"repeat(4, 1fr)",gap:"10px"},children:t.map((function(e,t){return(0,c.jsx)("img",{src:e,alt:"medal",style:{width:"100%",height:"auto"}},t)}))})},C=function(e){var t=e.title,a=e.imageUrl,d=e.buttonText,l=e.medals,r=(0,i.useState)(!1),o=(0,n.Z)(r,2),m=o[0],u=o[1],p=(0,i.useState)(null),f=(0,n.Z)(p,2),h=f[0],C=f[1],N=h?h.toLowerCase():null;return(0,c.jsxs)("div",{className:g,children:[(0,c.jsx)("h2",{className:v,children:t}),(0,c.jsx)("img",{src:a,alt:"Item",className:x}),(0,c.jsx)(s,{text:d,type:"button",className:_,onClick:function(){return u(!m)}}),m&&(0,c.jsxs)(b,{onClose:function(){return u(!1)},children:[(0,c.jsx)(j,{onSelect:function(e){C(e)}}),h&&(0,c.jsx)("div",{children:(0,c.jsx)(y,{images:l[N]})})]})]})},N=a.p+"static/media/nautilus.6497979baeab97b75abd.jpg",k={steel:[a.p+"static/media/steel1.b2b16b267174f193221c.png",a.p+"static/media/steel2.d052a4bbce8933c70f63.png",a.p+"static/media/steel3.9b8e38a9b59e4154c182.png",a.p+"static/media/steel4.58f5010621a192d0231e.png"],bronze:[a.p+"static/media/bronze1.e70b93d6e9c8396faa97.png",a.p+"static/media/bronze2.a37ffd6c86338328048f.png",a.p+"static/media/bronze3.3195e9c9cf4271f207d1.png",a.p+"static/media/bronze4.382fef9ef4db930bf5e5.png"],silver:[a.p+"static/media/silver1.2ba7a927f8f0dc02622e.png",a.p+"static/media/silver2.22f0c6da1c656794e22b.png",a.p+"static/media/silver3.0f589618317d0c15dd1b.png",a.p+"static/media/silver4.2f28f9c68eff9c10dcc3.png"],gold:[a.p+"static/media/gold1.f39d64cc0dbd262a8b6f.png",a.p+"static/media/gold2.909b0deb586cbd19da04.png",a.p+"static/media/gold3.9c0a8bc72e09e390cbfc.png",a.p+"static/media/gold4.6f81509d0f4be189f069.png"],diamond:[a.p+"static/media/diamond1.c9a69d62e9bd5a9e827c.png",a.p+"static/media/diamond2.2b665da3ae5ec39d384b.png",a.p+"static/media/diamond3.6120fdf9fbbc687775ce.png",a.p+"static/media/diamond4.20ceb61361338ab1be43.png"],star:[a.p+"static/media/star1.e2e55c468c4270da6f85.png",a.p+"static/media/star2.c01e6be9537f96ac8aee.png",a.p+"static/media/star3.d63fc564ff1b2b56563c.png",a.p+"static/media/star4.094fc2c5c14e1d4252a8.png"]},w=[{title:"Nautilus search",imageUrl:N,buttonText:"Medals",medals:k},{title:"Vanguard",imageUrl:a.p+"static/media/vanguard.8178000a49349c924f08.jpg",buttonText:"Medals",medals:k}],S=function(){return(0,c.jsxs)("div",{children:[(0,c.jsx)("p",{children:"Tournaments"}),w.map((function(e,t){return(0,c.jsx)(C,{title:e.title,imageUrl:e.imageUrl,buttonText:e.buttonText,medals:e.medals},t)}))]})}}}]);
//# sourceMappingURL=732.ea073734.chunk.js.map
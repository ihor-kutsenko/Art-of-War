"use strict";(self.webpackChunkart_of_war=self.webpackChunkart_of_war||[]).push([[217],{9729:function(e,a,t){t.d(a,{Z:function(){return _}});var i=t(29439),n=t(72791),s=t(80184),c=function(e){var a=e.text,t=e.className,i=e.disabled,n=e.type,c=e.onClick;return(0,s.jsx)("button",{className:t,disabled:i,type:n,onClick:c,children:a})},d=t(12023),l="Item_item__VisEJ",r="Item_title__RuLxn",o="Item_image__bmivv",m="Item_button__D7hVs",u="Item_modal_container__V8Wja",p={list:"MedalList_list__gQBSu",link:"MedalList_link__89SA3",active:"MedalList_active__ddTNv"},f=function(e){var a=e.onSelect,t=e.activeMedal;return(0,s.jsx)("div",{className:p.container,children:(0,s.jsx)("ul",{className:p.list,children:["Steel","Bronze","Silver","Gold","Diamond","Star"].map((function(e){return(0,s.jsx)("li",{onClick:function(){return function(e){a(e)}(e)},className:"".concat(p.link," ").concat(t===e?p.active:""),children:e},e)}))})})},b={container:"MedalGrid_container__Peq1o",img:"MedalGrid_img__4i2O3",pagination:"MedalGrid_pagination__-W4Md",pagination_btn:"MedalGrid_pagination_btn__ym9Zk"},g=function(e){for(var a=e.images,t=(0,n.useState)(1),c=(0,i.Z)(t,2),d=c[0],l=c[1],r=window.innerWidth<=768,o=Math.ceil(a.length/1),m=[],u=function(e){m.push((0,s.jsx)("button",{className:"".concat(b.pagination_btn," ").concat(d===e?b.active:""),onClick:function(){l(e)},children:e},e))},p=1;p<=o;p++)u(p);var f=1*d,g=f-1,_=a.slice(g,f);return(0,s.jsxs)("div",{className:b.container,children:[r?_.map((function(e,a){return(0,s.jsx)("img",{src:e,alt:"medal",className:b.img},a)})):a.map((function(e,a){return(0,s.jsx)("img",{src:e,alt:"medal",className:b.img},a)})),(0,s.jsx)("div",{className:b.pagination,children:m})]})},_=function(e){var a=e.title,t=e.imageUrl,p=e.buttonText,b=e.medals,_=e.disabled,v=(0,n.useState)(!1),h=(0,i.Z)(v,2),x=h[0],j=h[1],k=(0,n.useState)(null),N=(0,i.Z)(k,2),M=N[0],C=N[1],S=(0,n.useState)(null),w=(0,i.Z)(S,2),T=w[0],y=w[1];(0,n.useEffect)((function(){C("Steel"),y("Steel")}),[]);var I=M?M.toLowerCase():null;return(0,s.jsxs)("div",{className:l,children:[(0,s.jsx)("h2",{className:r,children:a}),(0,s.jsx)("img",{src:t,alt:"Item",className:o}),(0,s.jsx)(c,{text:p,type:"button",className:m,onClick:function(){return j(!x)},disabled:_}),x&&(0,s.jsx)(d.Z,{onClose:function(){return j(!1)},children:(0,s.jsxs)("div",{className:u,children:[(0,s.jsx)(f,{onSelect:function(e){C(e),y(e)},activeMedal:T}),M&&(0,s.jsx)("div",{children:(0,s.jsx)(g,{images:b[I]})})]})})]})}},12023:function(e,a,t){t.d(a,{Z:function(){return p}});var i=t(72791),n=t(54164);var s=t.p+"static/media/sprite.d77709f9ac184374b9f38772f9fb270a.svg",c=t(80184),d=function(e){var a=e.className,t=e.iconId,i=e.onClick;return(0,c.jsx)("svg",{className:a,preserveAspectRatio:"none",onClick:i,children:(0,c.jsx)("use",{href:"".concat(s,"#").concat(t)})})},l="Modal_overlay__b+zEz",r="Modal_modal__yEgVW",o="Modal_button__FFRRp",m="Modal_iconClose__u8oJf",u=document.querySelector("#modal-root"),p=function(e){var a=e.onClose,t=e.children;(0,i.useEffect)((function(){var e=function(e){"Escape"===e.code&&a()};return window.addEventListener("keydown",e),function(){window.removeEventListener("keydown",e)}}),[a]);return(0,n.createPortal)((0,c.jsx)("div",{className:l,onClick:function(e){e.currentTarget===e.target&&a()},children:(0,c.jsxs)("div",{className:r,children:[(0,c.jsx)("button",{className:o,type:"button",onClick:a,children:(0,c.jsx)(d,{className:m,iconId:"icon-close"})}),t]})}),u)}},15648:function(e,a,t){t.r(a),t.d(a,{default:function(){return p}});var i=t(9729),n=t.p+"static/media/skirmish.6f92f3dedff3f6ef6fa7.jpg",s=t.p+"static/media/survial.929b013994b99b3841e9.jpg",c=t.p+"static/media/test-of-strength.c8030e6528ee5d8ac6a4.jpg",d=t.p+"static/media/pumpkin-hunt.f5a410a45b1d0cb7f6ec.jpg",l=t.p+"static/media/christmas-cargo.45ad384915501b9595ca.jpg",r=t.p+"static/media/battle-for-the-christmas-trees.85c54a02454d2eab6306.jpg",o=[{title:"AI",imageUrl:n,buttonText:"Medals",medals:{steel:[t.p+"static/media/ai-steel1.ec1da2daa28605a8e884.png",t.p+"static/media/ai-steel2.8923826741c9ec3df06d.png",t.p+"static/media/ai-steel3.d5e420b81dcbb0e23759.png",t.p+"static/media/ai-steel4.34bced3f662746c1ff09.png"],bronze:[t.p+"static/media/ai-bronze1.a6a8e6296d4a5057ed5e.png",t.p+"static/media/ai-bronze2.c1c0da06b2d6d913bf4d.png",t.p+"static/media/ai-bronze3.14305a2be1dcf8be55ea.png",t.p+"static/media/ai-bronze4.82f56852100ecea7e27b.png"],silver:[t.p+"static/media/ai-silver1.429a063c13349c3f9638.png",t.p+"static/media/ai-silver2.0789e03e9123ad040028.png",t.p+"static/media/ai-silver3.7fbdb871926bb5f447e9.png",t.p+"static/media/ai-silver4.f4245fb4e8a2ab540bb7.png"],gold:[t.p+"static/media/ai-gold1.a4ee7cad0ed1dd1eec62.png",t.p+"static/media/ai-gold2.0bfc96e403cf2298c07f.png",t.p+"static/media/ai-gold3.e041d4de72fc992164c4.png",t.p+"static/media/ai-gold4.0d30ed4a8af71ba125d4.png"],diamond:[t.p+"static/media/ai-diamond1.86512f8b14ad9f123153.png",t.p+"static/media/ai-diamond2.6bc5c3e6b721aa0bd179.png",t.p+"static/media/ai-diamond3.7caf9c4d5e6c41862833.png",t.p+"static/media/ai-diamond4.e1763d6fd1e311011b0f.png"],star:[t.p+"static/media/ai-star1.3355e11c3237b4841d27.png",t.p+"static/media/ai-star2.bba16bbc942ab5320182.png",t.p+"static/media/ai-star3.8a54546c8a85cc9f3589.png",t.p+"static/media/ai-star4.b9f11fdfd65d18dea782.png"]}},{title:"Survial",imageUrl:s,buttonText:"Medals",medals:[]},{title:"Test of Strength",imageUrl:c,buttonText:"Medals",medals:[]},{title:"Pumpkin Hunt",imageUrl:d,buttonText:"Medals",medals:[]},{title:"Christmas Cargo",imageUrl:l,buttonText:"Medals",medals:[]},{title:"Battle for the Christmas Trees",imageUrl:r,buttonText:"Medals",medals:[]}],m=t(80184),u=function(){return(0,m.jsx)("div",{children:o.map((function(e,a){return(0,m.jsx)(i.Z,{title:e.title,imageUrl:e.imageUrl,buttonText:e.buttonText,medals:e.medals,disabled:0===e.medals.length},a)}))})},p=function(){return(0,m.jsx)(u,{})}}}]);
//# sourceMappingURL=217.1fd8add5.chunk.js.map
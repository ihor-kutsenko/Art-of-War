"use strict";(self.webpackChunkart_of_war=self.webpackChunkart_of_war||[]).push([[371],{4163:function(a,e,t){t.r(e),t.d(e,{default:function(){return Y}});var i=t(9439),d=t(2791),s=t(184),n=function(a){var e=a.text,t=a.className,i=a.disabled,d=a.type,n=a.onClick;return(0,s.jsx)("button",{className:t,disabled:i,type:d,onClick:n,children:e})},c=t(4164);var l=t.p+"static/media/sprite.d77709f9ac184374b9f38772f9fb270a.svg",r=function(a){var e=a.className,t=a.iconId,i=a.onClick;return(0,s.jsx)("svg",{className:e,preserveAspectRatio:"none",onClick:i,children:(0,s.jsx)("use",{href:"".concat(l,"#").concat(t)})})},m="Modal_overlay__b+zEz",u="Modal_modal__yEgVW",o="Modal_button__FFRRp",p="Modal_iconClose__u8oJf",b=document.querySelector("#modal-root"),g=function(a){var e=a.onClose,t=a.children;(0,d.useEffect)((function(){return window.addEventListener("keydown",i),function(){window.removeEventListener("keydown",i)}}));var i=function(a){var t=a.target,i=a.currentTarget,d=a.code;t!==i&&"Escape"!==d||(e(),document.body.style.overflow="visible")};return document.body.style.overflow="hidden",(0,c.createPortal)((0,s.jsx)("div",{className:m,onClick:i,children:(0,s.jsxs)("div",{className:u,children:[(0,s.jsx)("button",{className:o,type:"button",onClick:e,children:(0,s.jsx)(r,{className:p,iconId:"icon-close"})}),t]})}),b)},f="Item_item__VisEJ",v="Item_title__RuLxn",x="Item_image__bmivv",j="Item_button__D7hVs",h={},_=function(a){var e=a.onSelect,t=(0,d.useState)(null),n=(0,i.Z)(t,2),c=n[0],l=n[1];return(0,s.jsx)("div",{className:h.medalList,children:(0,s.jsx)("ul",{children:["Steel","Bronze","Silver","Gold","Diamond","Star"].map((function(a){return(0,s.jsx)("li",{onClick:function(){return function(a){l(a),e(a)}(a)},className:c===a?h.active:"",children:a},a)}))})})},y=function(a){var e=a.images;return(0,s.jsx)("div",{style:{display:"grid",gridTemplateColumns:"repeat(4, 1fr)",gap:"10px"},children:e.map((function(a,e){return(0,s.jsx)("img",{src:a,alt:"medal",style:{width:"100%",height:"auto"}},e)}))})},T=function(a){var e=a.title,t=a.imageUrl,c=a.buttonText,l=a.medals,r=(0,d.useState)(!1),m=(0,i.Z)(r,2),u=m[0],o=m[1],p=(0,d.useState)(null),b=(0,i.Z)(p,2),h=b[0],T=b[1],M=h?h.toLowerCase():null;return(0,s.jsxs)("div",{className:f,children:[(0,s.jsx)("h2",{className:v,children:e}),(0,s.jsx)("img",{src:t,alt:"Item",className:x}),(0,s.jsx)(n,{text:c,type:"button",className:j,onClick:function(){return o(!u)}}),u&&(0,s.jsxs)(g,{onClose:function(){return o(!1)},children:[(0,s.jsx)(_,{onSelect:function(a){T(a)}}),h&&(0,s.jsx)("div",{children:(0,s.jsx)(y,{images:l[M]})})]})]})},M=t.p+"static/media/nautilus.6497979baeab97b75abd.jpg",U=t.p+"static/media/vanguard.8178000a49349c924f08.jpg",C=t.p+"static/media/battle-royale.871dd156cd41f82767f9.jpg",k=t.p+"static/media/5th-anniversary.41f3cfe0a3b805728643.jpg",w=t.p+"static/media/all-for-the-front.5b1441c4db9ee4775db3.jpg",N=t.p+"static/media/assault.3ce68458d21835b140c3.jpg",z=t.p+"static/media/battle-for-christmas-trees.eb63e2db1cbd3ef5b11d.jpg",S=t.p+"static/media/behind-the-wall.71a263206b0a99a80121.jpg",R=t.p+"static/media/big-booty.1732fe76479951f7555b.jpg",E=t.p+"static/media/corsairs.75a732a777c8e985c171.jpg",I=t.p+"static/media/crossfire.201427f2f5e1be92487c.jpg",L=t.p+"static/media/flight-recoder.163b39a6e35de8e72354.png",A=t.p+"static/media/joker.06263c7dba6659ea201e.jpg",B=t.p+"static/media/judgment-day.42424be9056ce57d76ea.jpg",F=t.p+"static/media/large-reserves.bc60e9c7b18df3047123.jpg",J=t.p+"static/media/only-by-chance.d00e190b8083ddb7d545.jpg",P=t.p+"static/media/pumpkin-madness.2d40008db70bafc4fdaf.jpg",V=t.p+"static/media/reliable-partner.d9b01ae0d6dfb7d4aec0.jpg",D=t.p+"static/media/total-control.4c996addc015a7c488c2.jpg",Z=t.p+"static/media/two-citadels.470d9ad2ad9f47ce5221.jpg",G=t.p+"static/media/birthday.bb84082c8e148ef8f418.jpg",W={steel:[t.p+"static/media/nautilus-steel1.b2b16b267174f193221c.png",t.p+"static/media/nautilus-steel2.d052a4bbce8933c70f63.png",t.p+"static/media/nautilus-steel3.9b8e38a9b59e4154c182.png",t.p+"static/media/nautilus-steel4.58f5010621a192d0231e.png"],bronze:[t.p+"static/media/nautilus-bronze1.e70b93d6e9c8396faa97.png",t.p+"static/media/nautilus-bronze2.a37ffd6c86338328048f.png",t.p+"static/media/nautilus-bronze3.3195e9c9cf4271f207d1.png",t.p+"static/media/nautilus-bronze4.382fef9ef4db930bf5e5.png"],silver:[t.p+"static/media/nautilus-silver1.2ba7a927f8f0dc02622e.png",t.p+"static/media/nautilus-silver2.22f0c6da1c656794e22b.png",t.p+"static/media/nautilus-silver3.0f589618317d0c15dd1b.png",t.p+"static/media/nautilus-silver4.2f28f9c68eff9c10dcc3.png"],gold:[t.p+"static/media/nautilus-gold1.f39d64cc0dbd262a8b6f.png",t.p+"static/media/nautilus-gold2.909b0deb586cbd19da04.png",t.p+"static/media/nautilus-gold3.9c0a8bc72e09e390cbfc.png",t.p+"static/media/nautilus-gold4.6f81509d0f4be189f069.png"],diamond:[t.p+"static/media/nautilus-diamond1.c9a69d62e9bd5a9e827c.png",t.p+"static/media/nautilus-diamond2.2b665da3ae5ec39d384b.png",t.p+"static/media/nautilus-diamond3.6120fdf9fbbc687775ce.png",t.p+"static/media/nautilus-diamond4.20ceb61361338ab1be43.png"],star:[t.p+"static/media/nautilus-star1.e2e55c468c4270da6f85.png",t.p+"static/media/nautilus-star2.c01e6be9537f96ac8aee.png",t.p+"static/media/nautilus-star3.d63fc564ff1b2b56563c.png",t.p+"static/media/nautilus-star4.094fc2c5c14e1d4252a8.png"]},q=[{title:"All for the Front",imageUrl:w,buttonText:"Medals",medals:W},{title:"Assault",imageUrl:N,buttonText:"Medals",medals:W},{title:"Battle Royale",imageUrl:C,buttonText:"Medals",medals:W},{title:"Behind the Wall",imageUrl:S,buttonText:"Medals",medals:W},{title:"Corsairs",imageUrl:E,buttonText:"Medals",medals:W},{title:"Crossfire",imageUrl:I,buttonText:"Medals",medals:W},{title:"Flight Recorder",imageUrl:L,buttonText:"Medals",medals:W},{title:"Game Birthday",imageUrl:G,buttonText:"Medals",medals:W},{title:"Joker",imageUrl:A,buttonText:"Medals",medals:W},{title:"Judgment Day",imageUrl:B,buttonText:"Medals",medals:W},{title:"Large Reserves",imageUrl:F,buttonText:"Medals",medals:W},{title:"New Years Alarm",imageUrl:z,buttonText:"Medals",medals:W},{title:"Nice Loot",imageUrl:R,buttonText:"Medals",medals:W},{title:"Only by Chance",imageUrl:J,buttonText:"Medals",medals:W},{title:"Pumpkin Madness",imageUrl:P,buttonText:"Medals",medals:W},{title:"Reliable Partner",imageUrl:V,buttonText:"Medals",medals:W},{title:"Searching the Nautilus ",imageUrl:M,buttonText:"Medals",medals:W},{title:"Total Control",imageUrl:D,buttonText:"Medals",medals:W},{title:"Two Citadels",imageUrl:Z,buttonText:"Medals",medals:W},{title:"Vanguard",imageUrl:U,buttonText:"Medals",medals:{steel:[t.p+"static/media/vanguard-steel1.eace97f311236479192d.png",t.p+"static/media/vanguard-steel2.693d466deff19cc61a35.png",t.p+"static/media/vanguard-steel3.9b595469168828dddd03.png",t.p+"static/media/vanguard-steel4.ccfce4373b4ae2654d8e.png"],bronze:[t.p+"static/media/vanguard-bronze1.042969c3dcc22cf3c61b.png",t.p+"static/media/vanguard-bronze2.1ed4adb128cdbe8a483c.png",t.p+"static/media/vanguard-bronze3.1160c80e15f4b48793d6.png",t.p+"static/media/vanguard-bronze4.b993bc11c990cfe5077f.png"],silver:[t.p+"static/media/vanguard-silver1.c4addc437f6b29d8170c.png",t.p+"static/media/vanguard-silver2.94634c6e378dcac30eeb.png",t.p+"static/media/vanguard-silver3.62fe88c426edb6b69cc3.png",t.p+"static/media/vanguard-silver4.088e27af3bfd17afe1bf.png"],gold:[t.p+"static/media/vanguard-gold1.5e2c710055f4b4b1568b.png",t.p+"static/media/vanguard-gold2.4aa0526167635cb1d4a3.png",t.p+"static/media/vanguard-gold3.1f39d23b0708a8ce1daf.png",t.p+"static/media/vanguard-gold4.b40a26208775e54bb15a.png"],diamond:[t.p+"static/media/vanguard-diamond1.ab7eaa03ca845a27c644.png",t.p+"static/media/vanguard-diamond2.8bddf3b7a679555cdbb9.png",t.p+"static/media/vanguard-diamond3.1ba757a81b906cfb5a73.png",t.p+"static/media/vanguard-diamond4.47c8272fa8727e4f6f0c.png"],star:[t.p+"static/media/vanguard-star1.24c707bc082c43d95382.png",t.p+"static/media/vanguard-star2.777ecb33875c8ea57b75.png",t.p+"static/media/vanguard-star3.2ff99d9bf26efb46dbcf.png",t.p+"static/media/vanguard-star4.179599f1777794518560.png"]}},{title:"5th Anniversary",imageUrl:k,buttonText:"Medals",medals:W}],O="TournamentPage_list__llCmt",Y=function(){return(0,s.jsx)("div",{className:O,children:q.map((function(a,e){return(0,s.jsx)(T,{title:a.title,imageUrl:a.imageUrl,buttonText:a.buttonText,medals:a.medals},e)}))})}}}]);
//# sourceMappingURL=371.d394243c.chunk.js.map
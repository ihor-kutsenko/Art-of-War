"use strict";(self.webpackChunkart_of_war=self.webpackChunkart_of_war||[]).push([[744],{72609:function(e,t,a){var i=a(80184);t.Z=function(e){var t=e.text,a=e.className,n=e.disabled,s=e.type,o=e.onClick;return(0,i.jsx)("button",{className:a,disabled:n,type:s,onClick:o,children:t})}},44938:function(e,t,a){a.d(t,{Z:function(){return N}});var i=a(29439),n=a(72791),s=a(72609),o=a(54164),l=a(78588),r="Modal_overlay__b+zEz",d="Modal_modal__yEgVW",c="Modal_button__FFRRp",m="Modal_iconClose__u8oJf",u=a(80184),b=document.querySelector("#modal-root"),h=function(e){var t=e.onClose,a=e.children;(0,n.useEffect)((function(){var e=function(e){"Escape"===e.code&&t()};return window.addEventListener("keydown",e),function(){window.removeEventListener("keydown",e)}}),[t]);return(0,o.createPortal)((0,u.jsx)("div",{className:r,onClick:function(e){e.currentTarget===e.target&&t()},children:(0,u.jsxs)("div",{className:d,children:[(0,u.jsx)("button",{className:c,type:"button",onClick:t,children:(0,u.jsx)(l.Z,{className:m,iconId:"icon-close"})}),a]})}),b)},f={list:"MedalList_list__gQBSu",link:"MedalList_link__89SA3",active:"MedalList_active__ddTNv"},p=function(e){var t=e.onSelect,a=e.activeMedal;return(0,u.jsx)("div",{className:f.container,children:(0,u.jsx)("ul",{className:f.list,children:["Steel","Bronze","Silver","Gold","Diamond","Star"].map((function(e){return(0,u.jsx)("li",{onClick:function(){return function(e){t(e)}(e)},className:"".concat(f.link," ").concat(a===e?f.active:""),children:e},e)}))})})},g={container:"MedalGrid_container__Peq1o",img:"MedalGrid_img__4i2O3",pagination:"MedalGrid_pagination__-W4Md",pagination_btn:"MedalGrid_pagination_btn__ym9Zk"},_=function(e){for(var t=e.images,a=(0,n.useState)(1),s=(0,i.Z)(a,2),o=s[0],l=s[1],r=window.innerWidth<=768,d=Math.ceil(t.length/1),c=[],m=function(e){c.push((0,u.jsx)("button",{className:"".concat(g.pagination_btn," ").concat(o===e?g.active:""),onClick:function(){l(e)},children:e},e))},b=1;b<=d;b++)m(b);var h=1*o,f=h-1,p=t.slice(f,h);return(0,u.jsxs)("div",{className:g.container,children:[r?p.map((function(e,t){return(0,u.jsx)("img",{src:e,alt:"medal",className:g.img},t)})):t.map((function(e,t){return(0,u.jsx)("img",{src:e,alt:"medal",className:g.img},t)})),(0,u.jsx)("div",{className:g.pagination,children:c})]})},v="Item_item__VisEJ",w="Item_title__RuLxn",y="Item_image__bmivv",x="Item_actions__BGGri",j="Item_button__D7hVs",k="Item_infoText__sLP1Z",M="Item_modal_container__V8Wja",N=function(e){var t=e.title,a=e.imageUrl,o=e.buttonText,l=e.medals,r=e.info,d=e.disabled,c=(0,n.useState)(!1),m=(0,i.Z)(c,2),b=m[0],f=m[1],g=(0,n.useState)(!1),N=(0,i.Z)(g,2),T=N[0],C=N[1],S=(0,n.useState)(null),Z=(0,i.Z)(S,2),q=Z[0],I=Z[1],L=(0,n.useState)(null),U=(0,i.Z)(L,2),z=U[0],E=U[1];(0,n.useEffect)((function(){I("Steel"),E("Steel")}),[]);var G=q?q.toLowerCase():null;return(0,u.jsxs)("div",{className:v,children:[(0,u.jsx)("h2",{className:w,children:t}),(0,u.jsx)("img",{src:a,alt:"Item",className:y}),(0,u.jsxs)("div",{className:x,children:[(0,u.jsx)(s.Z,{text:o,type:"button",className:j,onClick:function(){return f(!b)},disabled:d}),(0,u.jsx)(s.Z,{text:"Info",type:"button",className:j,onClick:function(){return C(!T)}})]}),T&&(0,u.jsx)("p",{className:k,children:r}),b&&(0,u.jsx)(h,{onClose:function(){return f(!1)},children:(0,u.jsxs)("div",{className:M,children:[(0,u.jsx)(p,{onSelect:function(e){I(e),E(e)},activeMedal:z}),q&&(0,u.jsx)("div",{children:(0,u.jsx)(_,{images:l[G]})})]})})]})}},26531:function(e,t,a){a.d(t,{Z:function(){return o}});var i=a(72609),n="LoadMoreBtn_loadMore_btn__C6t1F",s=a(80184),o=function(e){var t=e.handleLoadMore;return(0,s.jsx)(i.Z,{className:n,text:"Load More",onClick:t})}},51713:function(e,t,a){a.r(t),a.d(t,{default:function(){return c}});var i=a(29439),n=a(72791),s=a(44938),o=a(26531),l=[{title:"AI",imageUrl:"https://res.cloudinary.com/dsy8hantq/image/upload/v1727421064/skirmish_lvag8f.webp",buttonText:"Medals",medals:{steel:[a.p+"static/media/ai-steel1.fb661d6f7f696db37751.webp",a.p+"static/media/ai-steel2.092d54419c2345dc75c8.webp",a.p+"static/media/ai-steel3.95aabcfc5c528ea59434.webp",a.p+"static/media/ai-steel4.ad2cd8d2cf7596ccd5b2.webp"],bronze:[a.p+"static/media/ai-bronze1.b45648777fe9147aaeb8.webp",a.p+"static/media/ai-bronze2.b67b4559d71fd3b57992.webp",a.p+"static/media/ai-bronze3.25f8b261a85c82ad47c6.webp",a.p+"static/media/ai-bronze4.8236ecc27685e2d6fb91.webp"],silver:[a.p+"static/media/ai-silver1.8a3b313dd027fb348130.webp",a.p+"static/media/ai-silver2.2621cfc0735c0d2f1b9e.webp",a.p+"static/media/ai-silver3.841b4f313453d3d5e6f3.webp",a.p+"static/media/ai-silver4.5e4e145aa7516cce1332.webp"],gold:[a.p+"static/media/ai-gold1.5e508b048922c5b3294d.webp",a.p+"static/media/ai-gold2.f529d36865756e5b4125.webp",a.p+"static/media/ai-gold3.49a69078b7cbd4a45f6a.webp",a.p+"static/media/ai-gold4.6349ca50dff57044d6ad.webp"],diamond:[a.p+"static/media/ai-diamond1.b08ec7c80c36ea483dd6.webp",a.p+"static/media/ai-diamond2.fadd69bd5a109a7ce796.webp",a.p+"static/media/ai-diamond3.e0b6a0f32574bf9d8b44.webp",a.p+"static/media/ai-diamond4.751ce95c737819cf83d6.webp"],star:[a.p+"static/media/ai-star1.d0144f7e789de2798a66.webp",a.p+"static/media/ai-star2.7c100fca2f986814beb3.webp",a.p+"static/media/ai-star3.66b8798cc404e02b4af8.webp",a.p+"static/media/ai-star4.2a4c98a8aef624da701f.webp"]}},{title:"Survial",imageUrl:"https://res.cloudinary.com/dsy8hantq/image/upload/v1727421112/survial_j4qte2.webp",buttonText:"Medals",medals:[],info:"To live or to survive; that is the question... If you choose to live, an enemy will annihilate you! So you'd better think about surviving. Hopefully, this mindset may help you hold for a while longer. Fight as if it's the final battle of your entire life! Fight to the last breath as if you're a wounded beast! Prove everybody that you do worth something. Now is the time to stay alive!"},{title:"Test of Strength",imageUrl:"https://res.cloudinary.com/dsy8hantq/image/upload/v1727421111/test-of-strength_uqraun.webp",buttonText:"Medals",medals:[],info:"This time, Joker wants to check your defensive skills. Your aim is to survive as long as you can. A tough battle awaits you, as Joker always has an ace up his sleeve. Show him that you have some trump cards, too. The test of strength begins!"},{title:"Birthday Game",imageUrl:"https://res.cloudinary.com/dsy8hantq/image/upload/v1728228349/birthday-game_a1dgs7.webp",buttonText:"Medals",medals:[]},{title:"Summer Heat",imageUrl:"https://res.cloudinary.com/dsy8hantq/image/upload/v1728225351/summer-heat_ykf48m.webp",buttonText:"Medals",medals:[]},{title:"Pumpkin Hunt",imageUrl:"https://res.cloudinary.com/dsy8hantq/image/upload/v1727421065/pumpkin-hunt_c6bhqn.webp",buttonText:"Medals",medals:[],info:"This unassailable base creates big problems for us. Therefore, two commanders will take part in the coming assault. Only jointly coordinated actions will lead you to victory!"},{title:"Syndicate Trap",imageUrl:"https://res.cloudinary.com/dsy8hantq/image/upload/v1728225584/syndicate-trap_ovvbqw.webp",buttonText:"Medals",medals:[],info:"Intelligence has identified a significant concentration of Data Cells in sector K-537. The enemy reached the area before us and established an airbase to maintain control. Take the initiative by capturing all the Data Cells to gain crucial information on the enemy's latest technologies. Be cautious of enemy air raids."},{title:"Christmas Cargo",imageUrl:"https://res.cloudinary.com/dsy8hantq/image/upload/v1727421064/christmas-cargo_lai5nw.webp",buttonText:"Medals",medals:[],info:"To celebrate Christmas and the New Year, we will need Christmas trees. We must take them out from under the enemy's nose."},{title:"Battle for the Christmas Trees",imageUrl:"https://res.cloudinary.com/dsy8hantq/image/upload/v1727421111/battle-for-the-christmas-trees_m1lyg7.webp",buttonText:"Medals",medals:[],info:"Our army is pretty exhausted from this endless conflict. To raise morale, we must organize a good celebration of Christmas and the New Year. Capture Christmas trees!"}],r=a(80184),d=function(){var e=(0,n.useState)(5),t=(0,i.Z)(e,2),a=t[0],d=t[1],c=l.slice(0,a);return(0,r.jsxs)("div",{children:[c.map((function(e,t){return(0,r.jsx)(s.Z,{title:e.title,imageUrl:e.imageUrl,buttonText:e.buttonText,medals:e.medals,info:e.info,disabled:0===e.medals.length},t)})),a<l.length&&(0,r.jsx)(o.Z,{handleLoadMore:function(){d((function(e){return e+5}))}})]})},c=function(){return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(d,{})})}}}]);
//# sourceMappingURL=744.6834060e.chunk.js.map
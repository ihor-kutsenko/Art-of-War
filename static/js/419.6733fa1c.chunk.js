"use strict";(self.webpackChunkart_of_war=self.webpackChunkart_of_war||[]).push([[419],{78588:function(A,n,e){e.d(n,{Z:function(){return t}});e(72791);var l=e.p+"static/media/sprite.f7ba7a32de94a87d7e4580a6da141ed8.svg",s=e(80184),t=function(A){var n=A.className,e=A.iconId,t=A.onClick;return(0,s.jsx)("svg",{className:n,preserveAspectRatio:"none",onClick:t,children:(0,s.jsx)("use",{href:"".concat(l,"#").concat(e)})})}},53515:function(A,n,e){e.d(n,{Z:function(){return M}});var l=e(29439),s=e(72791),t="UnitsGallery_gallery__4XZUt",a="UnitsGallery_item__OTx5e",c="UnitsGallery_title__f28K8",i="UnitsGallery_image__jUEHO",r=e(78588),f="UnitModal_modal__HXcSa",d="UnitModal_closeButton__0p00M",m="UnitModal_iconClose__y5bC0",v="UnitModal_navButton__TJqvD",p="UnitModal_prevButton__3FoTe",o="UnitModal_nextButton__7DKTo",O="UnitModal_iconNav__7kTjr";function u(A,n,e){return n in A?Object.defineProperty(A,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):A[n]=e,A}function z(A,n){var e=Object.keys(A);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(A);n&&(l=l.filter((function(n){return Object.getOwnPropertyDescriptor(A,n).enumerable}))),e.push.apply(e,l)}return e}function Z(A){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?z(Object(e),!0).forEach((function(n){u(A,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(A,Object.getOwnPropertyDescriptors(e)):z(Object(e)).forEach((function(n){Object.defineProperty(A,n,Object.getOwnPropertyDescriptor(e,n))}))}return A}var q=e.p+"static/media/heart.051593e216e589607fd4.png",P=e.p+"static/media/eye.bbe76fc64d9edaf89a0d.png",V=e.p+"static/media/3d.5407cc05319422b3d8c3.png",w=e.p+"static/media/time.9641ba25d8331165666a.png",N=e.p+"static/media/star.0b844cdb145939bc7695.png",U={container:"UnitDetails_container__WbS56",leftSection:"UnitDetails_leftSection__ByeoO",unitName:"UnitDetails_unitName__YcL3r",selectedImage:"UnitDetails_selectedImage__ZrMrf",rightSection:"UnitDetails_rightSection__bhsTA",levelSelectLabel:"UnitDetails_levelSelectLabel__ACKEk",levelSelect:"UnitDetails_levelSelect__np05S",unitStats:"UnitDetails_unitStats__GrUyU",statItem:"UnitDetails_statItem__pgbgT",statLabel:"UnitDetails_statLabel__vvtnw",statValue:"UnitDetails_statValue__2r3In",statIcon:"UnitDetails_statIcon__TMkGs",unitDescription:"UnitDetails_unitDescription__LlGK8",iconNav:"UnitDetails_iconNav__dEW1Y",button:"UnitDetails_button__zdQNz"},T=e(80184),g=function(A){var n=A.unit,e=(0,s.useState)(7),t=(0,l.Z)(e,2),a=t[0],c=t[1],i=(0,s.useState)({}),f=(0,l.Z)(i,2),d=f[0],m=f[1],v=n.levels.find((function(A){return A.level===a}));return(0,T.jsxs)("div",{className:U.container,children:[(0,T.jsxs)("div",{className:U.leftSection,children:[(0,T.jsx)("h2",{className:U.unitName,children:n.name}),(0,T.jsx)("img",{src:n.image,alt:n.name,className:U.selectedImage}),(0,T.jsx)("div",{className:U.unitDescription,children:(0,T.jsx)("p",{children:n.description})})]}),(0,T.jsxs)("div",{className:U.rightSection,children:[(0,T.jsxs)("label",{htmlFor:"levelSelect",className:U.levelSelectLabel,children:["Select Level:"," "]}),(0,T.jsx)("select",{id:"levelSelect",value:a,onChange:function(A){c(parseInt(A.target.value,10))},className:U.levelSelect,children:n.levels.map((function(A){return(0,T.jsxs)("option",{value:A.level,children:["Level ",A.level]},A.level)}))}),v&&(0,T.jsxs)("div",{className:U.unitStats,children:[(0,T.jsxs)("div",{className:U.statItem,children:[(0,T.jsx)("span",{className:U.statLabel,children:"HP:"}),(0,T.jsxs)("span",{className:U.statValue,children:[(0,T.jsx)("img",{src:q,alt:"armor",className:U.statIcon}),v.hp," "]})]}),(0,T.jsxs)("div",{className:U.statItem,children:[(0,T.jsx)("span",{className:U.statLabel,children:"Armor:"}),(0,T.jsxs)("span",{className:U.statValue,children:[(0,T.jsx)("img",{src:n.iconArmor,alt:"armor",className:U.statIcon}),v.armor]})]}),(0,T.jsxs)("div",{className:U.statItem,children:[(0,T.jsx)("span",{className:U.statLabel,children:"Speed:"}),(0,T.jsxs)("span",{className:U.statValue,children:[(0,T.jsx)("img",{src:"data:image/png;base64,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",alt:"armor",className:U.statIcon}),v.speed]})]}),(0,T.jsxs)("div",{className:U.statItem,children:[(0,T.jsx)("span",{className:U.statLabel,children:"View:"}),(0,T.jsxs)("span",{className:U.statValue,children:[(0,T.jsx)("img",{src:P,alt:"armor",className:U.statIcon}),v.view]})]}),(0,T.jsxs)("div",{className:U.statItem,children:[(0,T.jsx)("span",{className:U.statLabel,children:"Cost:"}),(0,T.jsxs)("span",{className:U.statValue,children:[(0,T.jsx)("img",{src:V,alt:"armor",className:U.statIcon}),v.cost," "]})]}),(0,T.jsxs)("div",{className:U.statItem,children:[(0,T.jsx)("span",{className:U.statLabel,children:"Time:"}),(0,T.jsxs)("span",{className:U.statValue,children:[(0,T.jsx)("img",{src:w,alt:"armor",className:U.statIcon}),v.time," "]})]}),(0,T.jsxs)("div",{className:U.statItem,children:[(0,T.jsx)("span",{className:U.statLabel,children:"CP:"}),(0,T.jsxs)("span",{className:U.statValue,children:[(0,T.jsx)("img",{src:N,alt:"armor",className:U.statIcon}),v.cp]})]})]}),n.weapons&&n.weapons.map((function(A,n){return(0,T.jsxs)("div",{className:U.additionalInfoItem,children:[(0,T.jsxs)("h3",{onClick:function(){return function(A){m((function(n){return Z(Z({},n),{},u({},A.type,!n[A.type]))}))}(A)},children:[A.type,(0,T.jsx)("button",{className:U.button,type:"button",children:(0,T.jsx)(r.Z,{className:U.iconNav,iconId:"icon-previous"})})]}),d[A.type]&&(0,T.jsx)("div",{className:U.additionalInfo,children:(0,T.jsxs)("div",{className:U.additionalInfoItem,children:[(0,T.jsxs)("p",{children:["Damage: ",A.damage]}),(0,T.jsxs)("p",{children:["Range: ",A.range]})]})})]},n)}))]})]})},x=function(A){var n=A.units,e=A.selectedIndex,l=A.onClose,s=A.onPrevious,t=A.onNext,a=n[e];return(0,T.jsxs)("div",{className:f,children:[(0,T.jsx)("button",{className:d,type:"button",onClick:l,children:(0,T.jsx)(r.Z,{className:m,iconId:"icon-close"})}),(0,T.jsx)("button",{className:"".concat(v," ").concat(p),type:"button",onClick:s,children:(0,T.jsx)(r.Z,{className:O,iconId:"icon-previous"})}),(0,T.jsx)(g,{unit:a}),(0,T.jsx)("button",{className:"".concat(v," ").concat(o),type:"button",onClick:t,children:(0,T.jsx)(r.Z,{className:O,iconId:"icon-next"})})]})},M=function(A){var n=A.units,e=(0,s.useState)(null),r=(0,l.Z)(e,2),f=r[0],d=r[1];return(0,T.jsxs)("div",{className:t,children:[n.map((function(A,n){return(0,T.jsx)(T.Fragment,{children:(0,T.jsxs)("div",{onClick:function(){return function(A){d(A)}(n)},className:a,children:[(0,T.jsx)("h3",{className:c,children:A.name}),(0,T.jsx)("img",{src:A.image,alt:A.name,className:i},A.id)]},A.id)})})),null!==f&&(0,T.jsx)(x,{units:n,selectedIndex:f,onClose:function(){d(null)},onPrevious:function(){d((function(A){return 0===A?n.length-1:A-1}))},onNext:function(){d((function(A){return A===n.length-1?0:A+1}))}})]})}},93488:function(A,n,e){A.exports=e.p+"static/media/armor1.51aab1820e2b636e5058.png"}}]);
//# sourceMappingURL=419.6733fa1c.chunk.js.map
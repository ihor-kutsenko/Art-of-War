"use strict";(self.webpackChunkart_of_war=self.webpackChunkart_of_war||[]).push([[358],{24787:function(e,t,a){a.d(t,{Z:function(){return f}});var n=a(29439),i=a(72791),o=a(78588),l="ImageModal_modal__cJjZj",s="ImageModal_imageTitle__eTmle",r="ImageModal_selectedImage__WTzqQ",c="ImageModal_closeButton__7rcyc",u="ImageModal_iconClose__MhN1x",d="ImageModal_navButton__+pn1+",m="ImageModal_prevButton__GyXB9",p="ImageModal_nextButton__yOeVd",h="ImageModal_iconNav__Ofg3z",g=a(80184),y=function(e){var t,a=e.images,n=e.selectedIndex,i=e.onClose,y=e.onPrevious,_=e.onNext,v=function(e){return"string"===typeof e?"":e.title};return(0,g.jsxs)("div",{className:l,children:[(0,g.jsx)("button",{className:c,type:"button",onClick:i,children:(0,g.jsx)(o.Z,{className:u,iconId:"icon-close"})}),(0,g.jsx)("button",{className:"".concat(d," ").concat(m),type:"button",onClick:y,children:(0,g.jsx)(o.Z,{className:h,iconId:"icon-previous"})}),v(a[n])&&(0,g.jsx)("h2",{className:s,children:v(a[n])}),(0,g.jsx)("img",{src:(t=a[n],"string"===typeof t?t:t.image),alt:v(a[n]),className:r}),(0,g.jsx)("button",{className:"".concat(d," ").concat(p),type:"button",onClick:_,children:(0,g.jsx)(o.Z,{className:h,iconId:"icon-next"})})]})},_="Gallery_gallery__icp4L",v="Gallery_image__5NDH1",f=function(e){var t=e.images,a=(0,i.useState)(null),o=(0,n.Z)(a,2),l=o[0],s=o[1],r=function(e){return"string"===typeof e?e:e.image};return(0,g.jsxs)("div",{className:_,children:[t.map((function(e,t){return(0,g.jsx)("img",{src:r(e),alt:"string"===typeof e?"avatar":e.title,onClick:function(){return function(e){s(e)}(t)},className:v},t)})),null!==l&&(0,g.jsx)(y,{images:t,selectedIndex:l,onClose:function(){s(null)},onPrevious:function(){s((function(e){return 0===e?t.length-1:e-1}))},onNext:function(){s((function(e){return e===t.length-1?0:e+1}))}})]})}},70526:function(e,t,a){a.d(t,{Z:function(){return s}});var n=a(29439),i=a(72791),o="MapSelector_selectWrapper__ZhLtS",l=a(80184),s=function(e){var t=e.maps,a=e.onSelectMap,s=(0,i.useState)(""),r=(0,n.Z)(s,2),c=r[0],u=r[1];return(0,l.jsxs)("div",{className:o,children:[(0,l.jsxs)("select",{value:c,onChange:function(e){var t=e.target.value;u(t),a(t)},children:[(0,l.jsx)("option",{value:"",children:"Select map"}),t.map((function(e,t){return(0,l.jsx)("option",{value:e.title,children:e.title},t)}))]}),c&&(0,l.jsx)("button",{onClick:function(){u(""),a("")},children:"Clear filter"})]})}},78588:function(e,t,a){a.d(t,{Z:function(){return o}});a(72791);var n=a.p+"static/media/sprite.f7ba7a32de94a87d7e4580a6da141ed8.svg",i=a(80184),o=function(e){var t=e.className,a=e.iconId,o=e.onClick;return(0,i.jsx)("svg",{className:t,preserveAspectRatio:"none",onClick:o,children:(0,i.jsx)("use",{href:"".concat(n,"#").concat(a)})})}},34358:function(e,t,a){a.r(t),a.d(t,{default:function(){return c}});var n=a(29439),i=a(72791),o=a(24787),l=a(70526),s=[{title:"A\u2019tuin Plateau",image:"https://res.cloudinary.com/dsy8hantq/image/upload/v1727345432/atuin-plateau_afeill.webp"},{title:"Fishermans Harbor",image:"https://res.cloudinary.com/dsy8hantq/image/upload/v1727345434/fishermans-harbor_cscf9m.webp"},{title:"Forty Roads",image:"https://res.cloudinary.com/dsy8hantq/image/upload/v1727345436/forty-roads_xueksz.webp"},{title:"Highway",image:"https://res.cloudinary.com/dsy8hantq/image/upload/v1727345438/highway_p61r5v.webp"},{title:'"H" Islands',image:"https://res.cloudinary.com/dsy8hantq/image/upload/v1727345441/h-islands_dzkedr.webp"},{title:"Hostile Dream",image:"https://res.cloudinary.com/dsy8hantq/image/upload/v1727345412/hostile-dream_rwmikd.webp"},{title:"Industrial Zone",image:"https://res.cloudinary.com/dsy8hantq/image/upload/v1727345411/industrial-zone_muqyhw.webp"},{title:"Oculus",image:"https://res.cloudinary.com/dsy8hantq/image/upload/v1727345413/oculus_ml6t4m.webp"},{title:"Over the Hill",image:"https://res.cloudinary.com/dsy8hantq/image/upload/v1727345415/over-the-hill_owufqd.webp"},{title:"Port Of Bjorn",image:"https://res.cloudinary.com/dsy8hantq/image/upload/v1727345416/port-of-bjorn_ke7chg.webp"},{title:"Razor Blade",image:"https://res.cloudinary.com/dsy8hantq/image/upload/v1727345418/razor-blade_nl2i83.webp"},{title:"Seclusion",image:"https://res.cloudinary.com/dsy8hantq/image/upload/v1727345420/seclusion_wzcrly.webp"},{title:"Silent Greek",image:"https://res.cloudinary.com/dsy8hantq/image/upload/v1727345421/silent-greek_wowbxd.webp"},{title:"Silent Hill",image:"https://res.cloudinary.com/dsy8hantq/image/upload/v1727345423/silent-hill_mvwdoi.webp"},{title:"Strange Shores",image:"https://res.cloudinary.com/dsy8hantq/image/upload/v1727345425/strange-shores_s4dvka.webp"},{title:"The River Styx",image:"https://res.cloudinary.com/dsy8hantq/image/upload/v1727345427/the-river-styx_upf8nh.webp"},{title:"Third Wheel",image:"https://res.cloudinary.com/dsy8hantq/image/upload/v1727345428/third-wheel_yluzzm.webp"},{title:"Wild Lagoon",image:"https://res.cloudinary.com/dsy8hantq/image/upload/v1727345430/wild-lagoon_diqqqc.webp"}],r=a(80184),c=function(){var e=(0,i.useState)(s),t=(0,n.Z)(e,2),a=t[0],c=t[1];return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(l.Z,{maps:s,onSelectMap:function(e){if(e){var t=s.filter((function(t){return t.title===e}));c(t)}else c(s)}}),(0,r.jsx)(o.Z,{images:a})]})}}}]);
//# sourceMappingURL=358.6f7a2322.chunk.js.map
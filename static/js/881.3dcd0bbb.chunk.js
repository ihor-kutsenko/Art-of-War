"use strict";(self.webpackChunkart_of_war=self.webpackChunkart_of_war||[]).push([[881],{24787:function(e,a,t){t.d(a,{Z:function(){return f}});var n=t(29439),o=t(72791),i=t(78588),s="ImageModal_modal__cJjZj",r="ImageModal_imageTitle__eTmle",l="ImageModal_selectedImage__WTzqQ",c="ImageModal_closeButton__7rcyc",d="ImageModal_iconClose__MhN1x",u="ImageModal_navButton__+pn1+",m="ImageModal_prevButton__GyXB9",p="ImageModal_nextButton__yOeVd",g="ImageModal_iconNav__Ofg3z",h=t(80184),y=function(e){var a,t=e.images,n=e.selectedIndex,o=e.onClose,y=e.onPrevious,_=e.onNext,v=function(e){return"string"===typeof e?"":e.title};return(0,h.jsxs)("div",{className:s,children:[(0,h.jsx)("button",{className:c,type:"button",onClick:o,children:(0,h.jsx)(i.Z,{className:d,iconId:"icon-close"})}),(0,h.jsx)("button",{className:"".concat(u," ").concat(m),type:"button",onClick:y,children:(0,h.jsx)(i.Z,{className:g,iconId:"icon-previous"})}),v(t[n])&&(0,h.jsx)("h2",{className:r,children:v(t[n])}),(0,h.jsx)("img",{src:(a=t[n],"string"===typeof a?a:a.image),alt:v(t[n]),className:l}),(0,h.jsx)("button",{className:"".concat(u," ").concat(p),type:"button",onClick:_,children:(0,h.jsx)(i.Z,{className:g,iconId:"icon-next"})})]})},_="Gallery_gallery__icp4L",v="Gallery_image__5NDH1",f=function(e){var a=e.images,t=(0,o.useState)(null),i=(0,n.Z)(t,2),s=i[0],r=i[1],l=function(e){return"string"===typeof e?e:e.image};return(0,h.jsxs)("div",{className:_,children:[a.map((function(e,a){return(0,h.jsx)("img",{src:l(e),alt:"string"===typeof e?"avatar":e.title,onClick:function(){return function(e){r(e)}(a)},className:v},a)})),null!==s&&(0,h.jsx)(y,{images:a,selectedIndex:s,onClose:function(){r(null)},onPrevious:function(){r((function(e){return 0===e?a.length-1:e-1}))},onNext:function(){r((function(e){return e===a.length-1?0:e+1}))}})]})}},70526:function(e,a,t){t.d(a,{Z:function(){return r}});var n=t(29439),o=t(72791),i="MapSelector_selectWrapper__ZhLtS",s=t(80184),r=function(e){var a=e.maps,t=e.onSelectMap,r=(0,o.useState)(""),l=(0,n.Z)(r,2),c=l[0],d=l[1];return(0,s.jsxs)("div",{className:i,children:[(0,s.jsxs)("select",{value:c,onChange:function(e){var a=e.target.value;d(a),t(a)},children:[(0,s.jsx)("option",{value:"",children:"Select map"}),a.map((function(e,a){return(0,s.jsx)("option",{value:e.title,children:e.title},a)}))]}),c&&(0,s.jsx)("button",{onClick:function(){d(""),t("")},children:"Clear filter"})]})}},78588:function(e,a,t){t.d(a,{Z:function(){return i}});t(72791);var n=t.p+"static/media/sprite.f7ba7a32de94a87d7e4580a6da141ed8.svg",o=t(80184),i=function(e){var a=e.className,t=e.iconId,i=e.onClick;return(0,o.jsx)("svg",{className:a,preserveAspectRatio:"none",onClick:i,children:(0,o.jsx)("use",{href:"".concat(n,"#").concat(t)})})}},25881:function(e,a,t){t.r(a),t.d(a,{default:function(){return c}});var n=t(29439),o=t(24787),i=t(70526),s=[{title:"Area Of Scavengers",image:"https://res.cloudinary.com/dsy8hantq/image/upload/v1727342062/area-of-scavengers_xu2gx0.webp"},{title:"A Wrong Way Turn",image:"https://res.cloudinary.com/dsy8hantq/image/upload/v1727342064/a-wrong-way-turn_o3wphp.webp"},{title:"Bloody Shore",image:"https://res.cloudinary.com/dsy8hantq/image/upload/v1727342066/bloody-shore_upavqk.webp"},{title:"Caesars Islands",image:"https://res.cloudinary.com/dsy8hantq/image/upload/v1727342067/caesars-islands_cogjpk.webp"},{title:"Coral Bay",image:"https://res.cloudinary.com/dsy8hantq/image/upload/v1727342069/coral-bay_tdr2f0.webp"},{title:"Cryobase",image:"https://res.cloudinary.com/dsy8hantq/image/upload/v1727342071/cryobase_vavmhd.webp"},{title:"Deadly Cliff",image:"https://res.cloudinary.com/dsy8hantq/image/upload/v1727342073/deadly-cliff_vsobh1.webp"},{title:"Desert Cross",image:"https://res.cloudinary.com/dsy8hantq/image/upload/v1727342035/desert-cross_dqxseg.webp"},{title:"Desert Treasure",image:"https://res.cloudinary.com/dsy8hantq/image/upload/v1727342035/desert-treasure_kie5yf.webp"},{title:"Difficult Choice",image:"https://res.cloudinary.com/dsy8hantq/image/upload/v1727342036/difficult-choice_pkdped.webp"},{title:"Grand Canyon",image:"https://res.cloudinary.com/dsy8hantq/image/upload/v1727342038/grand-canyon_psjysr.webp"},{title:"Inferno",image:"https://res.cloudinary.com/dsy8hantq/image/upload/v1727342039/inferno_tvtkdf.webp"},{title:"Mountain Road",image:"https://res.cloudinary.com/dsy8hantq/image/upload/v1727342041/mountain-road_djlr3a.webp"},{title:"No Trace",image:"https://res.cloudinary.com/dsy8hantq/image/upload/v1727342042/no-trace_f97kxb.webp"},{title:"Sandy Bay",image:"https://res.cloudinary.com/dsy8hantq/image/upload/v1727342043/sandy-bay_bndtrg.webp"},{title:"Simoom",image:"https://res.cloudinary.com/dsy8hantq/image/upload/v1727342045/simoom_zjjgwc.webp"},{title:"Suez Canal",image:"https://res.cloudinary.com/dsy8hantq/image/upload/v1727342046/suez-canal_wrdnmh.webp"},{title:"The Abandoned Oasis",image:"https://res.cloudinary.com/dsy8hantq/image/upload/v1727342048/the-abandoned-oasis_twofvw.webp"},{title:"The Canyon",image:"https://res.cloudinary.com/dsy8hantq/image/upload/v1727342049/the-canyon_qzknid.webp"},{title:"The Pass",image:"https://res.cloudinary.com/dsy8hantq/image/upload/v1727342051/the-pass_ngcndf.webp"},{title:"The Silk Road",image:"https://res.cloudinary.com/dsy8hantq/image/upload/v1727342052/the-silk-road_omkrrz.webp"},{title:"Thorny Path",image:"https://res.cloudinary.com/dsy8hantq/image/upload/v1727342054/thorny-path_klfn82.webp"},{title:"Two Mountains",image:"https://res.cloudinary.com/dsy8hantq/image/upload/v1727342055/two-mountains_e5td1y.webp"},{title:"Whirlwind",image:"https://res.cloudinary.com/dsy8hantq/image/upload/v1727342057/whirlwind_ge7bjm.webp"},{title:"Yawara Lake",image:"https://res.cloudinary.com/dsy8hantq/image/upload/v1727342058/yawara-lake_p13gf3.webp"},{title:"Yrinwy Reservoir",image:"https://res.cloudinary.com/dsy8hantq/image/upload/v1727342061/yrinwy-reservoir_gsi6v1.webp"}],r=t(72791),l=t(80184),c=function(){var e=(0,r.useState)(s),a=(0,n.Z)(e,2),t=a[0],c=a[1];return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(i.Z,{maps:s,onSelectMap:function(e){if(e){var a=s.filter((function(a){return a.title===e}));c(a)}else c(s)}}),(0,l.jsx)(o.Z,{images:t})]})}}}]);
//# sourceMappingURL=881.3dcd0bbb.chunk.js.map
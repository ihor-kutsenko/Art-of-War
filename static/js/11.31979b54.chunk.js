"use strict";(self.webpackChunkart_of_war=self.webpackChunkart_of_war||[]).push([[11],{24787:function(e,a,t){t.d(a,{Z:function(){return v}});var s=t(29439),n=t(72791),i=t(39230),l=t(78588),o="ImageModal_modal__cJjZj",r="ImageModal_imageTitle__eTmle",p="ImageModal_selectedImage__WTzqQ",m="ImageModal_closeButton__7rcyc",u="ImageModal_iconClose__MhN1x",c="ImageModal_navButton__+pn1+",d="ImageModal_prevButton__GyXB9",g="ImageModal_nextButton__yOeVd",h="ImageModal_iconNav__Ofg3z",y=t(80184),j=function(e){var a,t=e.images,s=e.selectedIndex,n=e.onClose,j=e.onPrevious,_=e.onNext,w=(0,i.$G)().t,v=function(e){return"string"===typeof e?"":w(e.title)};return(0,y.jsxs)("div",{className:o,children:[(0,y.jsx)("button",{className:m,type:"button",onClick:n,children:(0,y.jsx)(l.Z,{className:u,iconId:"icon-close"})}),(0,y.jsx)("button",{className:"".concat(c," ").concat(d),type:"button",onClick:j,children:(0,y.jsx)(l.Z,{className:h,iconId:"icon-previous"})}),v(t[s])&&(0,y.jsx)("h2",{className:r,children:v(t[s])}),(0,y.jsx)("img",{src:(a=t[s],"string"===typeof a?a:a.image),alt:v(t[s]),className:p}),(0,y.jsx)("button",{className:"".concat(c," ").concat(g),type:"button",onClick:_,children:(0,y.jsx)(l.Z,{className:h,iconId:"icon-next"})})]})},_="Gallery_gallery__icp4L",w="Gallery_image__5NDH1",v=function(e){var a=e.images,t=(0,i.$G)().t,l=(0,n.useState)(null),o=(0,s.Z)(l,2),r=o[0],p=o[1],m=function(e){return"string"===typeof e?e:e.image};return(0,y.jsxs)("div",{className:_,children:[a.map((function(e,a){return(0,y.jsx)("img",{src:m(e),alt:"string"===typeof e?"avatar":t(e.title),onClick:function(){return function(e){p(e)}(a)},className:w},a)})),null!==r&&(0,y.jsx)(j,{images:a,selectedIndex:r,onClose:function(){p(null)},onPrevious:function(){p((function(e){return 0===e?a.length-1:e-1}))},onNext:function(){p((function(e){return e===a.length-1?0:e+1}))}})]})}},70526:function(e,a,t){t.d(a,{Z:function(){return r}});var s=t(29439),n=t(72791),i=t(39230),l="MapSelector_selectWrapper__ZhLtS",o=t(80184),r=function(e){var a=e.maps,t=e.onSelectMap,r=(0,i.$G)().t,p=(0,n.useState)(""),m=(0,s.Z)(p,2),u=m[0],c=m[1];return(0,o.jsxs)("div",{className:l,children:[(0,o.jsxs)("select",{value:u,onChange:function(e){var a=e.target.value;c(a),t(a)},children:[(0,o.jsx)("option",{value:"",children:r("maps.selectMap")}),a.map((function(e,a){return(0,o.jsx)("option",{value:r(e.title),children:r(e.title)},a)}))]}),u&&(0,o.jsx)("button",{onClick:function(){c(""),t("")},children:r("maps.clearFilter")})]})}},27881:function(e,a,t){t.r(a),t.d(a,{default:function(){return m}});var s=t(29439),n=t(72791),i=t(39230),l=t(24787),o=t(70526),r=[{title:"maps.jungleMaps.abysm",image:"https://res.cloudinary.com/dsy8hantq/image/upload/v1727343440/abysm_pjvt8n.webp"},{title:"maps.jungleMaps.ancestralLand",image:"https://res.cloudinary.com/dsy8hantq/image/upload/v1727343453/ancestral-land_ezcisa.webp"},{title:"maps.jungleMaps.badLuck",image:"https://res.cloudinary.com/dsy8hantq/image/upload/v1727343444/bad-luck_flso9o.webp"},{title:"maps.jungleMaps.bottleneck",image:"https://res.cloudinary.com/dsy8hantq/image/upload/v1727343455/bottleneck_ecotsi.webp"},{title:"maps.jungleMaps.closeContact",image:"https://res.cloudinary.com/dsy8hantq/image/upload/v1727343446/close-contact_ihei8q.webp"},{title:"maps.jungleMaps.crossfire",image:"https://res.cloudinary.com/dsy8hantq/image/upload/v1727343447/crossfire_uxpaeh.webp"},{title:"maps.jungleMaps.crosslake",image:"https://res.cloudinary.com/dsy8hantq/image/upload/v1727343449/crosslake_ofu4wa.webp"},{title:"maps.jungleMaps.cuba",image:"https://res.cloudinary.com/dsy8hantq/image/upload/v1727343451/cuba_f5rrog.webp"},{title:"maps.jungleMaps.enemyAtTheGates",image:"https://res.cloudinary.com/dsy8hantq/image/upload/v1727343456/enemy-at-the-gates_r5uyar.webp"},{title:"maps.jungleMaps.fortKyten",image:"https://res.cloudinary.com/dsy8hantq/image/upload/v1727343458/fort-kyten_o6xb6w.webp"},{title:"maps.jungleMaps.fullIsolation",image:"https://res.cloudinary.com/dsy8hantq/image/upload/v1727343460/full-isolation_sr6y2g.webp"},{title:"maps.jungleMaps.heartOfWar",image:"https://res.cloudinary.com/dsy8hantq/image/upload/v1727343462/heart-of-war_espljb.webp"},{title:"maps.jungleMaps.hiddenTrails",image:"https://res.cloudinary.com/dsy8hantq/image/upload/v1727343464/hidden-trails_vrfjrj.webp"},{title:"maps.jungleMaps.interfluve",image:"https://res.cloudinary.com/dsy8hantq/image/upload/v1727343466/interfluve_j9mew5.webp"},{title:"maps.jungleMaps.inTheMiddleOfNowhere",image:"https://res.cloudinary.com/dsy8hantq/image/upload/v1727343468/in-the-middle-of-nowhere_esohgw.webp"},{title:"maps.jungleMaps.kingOfTheHill",image:"https://res.cloudinary.com/dsy8hantq/image/upload/v1727343470/king-of-the-hill_xhdpot.webp"},{title:"maps.jungleMaps.mayaLands",image:"https://res.cloudinary.com/dsy8hantq/image/upload/v1727343471/maya-lands_wfv3oj.webp"},{title:"maps.jungleMaps.prizeRing",image:"https://res.cloudinary.com/dsy8hantq/image/upload/v1727343473/prize-ring_ufgj6u.webp"},{title:"maps.jungleMaps.riskArea",image:"https://res.cloudinary.com/dsy8hantq/image/upload/v1727343475/risk-area_oabm3w.webp"},{title:"maps.jungleMaps.shortDistance",image:"https://res.cloudinary.com/dsy8hantq/image/upload/v1727343403/short-distance_qwvufh.webp"},{title:"maps.jungleMaps.theCoastOfClaws",image:"https://res.cloudinary.com/dsy8hantq/image/upload/v1727343404/the-coast-of-claws_w4myhj.webp"},{title:"maps.jungleMaps.theCrossroad",image:"https://res.cloudinary.com/dsy8hantq/image/upload/v1727343405/the-crossroad_zmbg41.webp"},{title:"maps.jungleMaps.theIsland",image:"https://res.cloudinary.com/dsy8hantq/image/upload/v1727343406/the-island_pja98t.webp"},{title:"maps.jungleMaps.theJaguarTrail",image:"https://res.cloudinary.com/dsy8hantq/image/upload/v1727343417/the-jaguar-trail_dujrio.webp"},{title:"maps.jungleMaps.theLostRoad",image:"https://res.cloudinary.com/dsy8hantq/image/upload/v1727343419/the-lost-road_ajmfqz.webp"},{title:"maps.jungleMaps.theNewWorld",image:"https://res.cloudinary.com/dsy8hantq/image/upload/v1727343420/the-new-world_gywikj.webp"},{title:"maps.jungleMaps.thePressurePoint",image:"https://res.cloudinary.com/dsy8hantq/image/upload/v1727343422/the-pressure-point_fwrqge.webp"},{title:"maps.jungleMaps.theStrategicHeights",image:"https://res.cloudinary.com/dsy8hantq/image/upload/v1727343423/the-strategic-heights_kbx1pc.webp"},{title:"maps.jungleMaps.theWickedStrait",image:"https://res.cloudinary.com/dsy8hantq/image/upload/v1727343425/the-wicked-strait_c7ruwp.webp"},{title:"maps.jungleMaps.thunderhead",image:"https://res.cloudinary.com/dsy8hantq/image/upload/v1727343426/thunderhead_oxtjyi.webp"},{title:"maps.jungleMaps.twanguIsthmus",image:"https://res.cloudinary.com/dsy8hantq/image/upload/v1727343428/twangu-isthmus_nwjsaq.webp"},{title:"maps.jungleMaps.twinCoasts",image:"https://res.cloudinary.com/dsy8hantq/image/upload/v1727343430/twin-coasts_hdo7gj.webp"},{title:"maps.jungleMaps.twoRiverbanks",image:"https://res.cloudinary.com/dsy8hantq/image/upload/v1727343431/two-riverbanks_njxabl.webp"},{title:"maps.jungleMaps.veracruz",image:"https://res.cloudinary.com/dsy8hantq/image/upload/v1727343433/veracruz_fvmmph.webp"},{title:"maps.jungleMaps.waterBarrier",image:"https://res.cloudinary.com/dsy8hantq/image/upload/v1727343435/water-barrier_aefmdo.webp"},{title:"maps.jungleMaps.waterShackles",image:"https://res.cloudinary.com/dsy8hantq/image/upload/v1727343438/water-shackles_jkcm58.webp"},{title:"maps.jungleMaps.whaleBay",image:"https://res.cloudinary.com/dsy8hantq/image/upload/v1727343436/whale-bay_qo4h5y.webp"},{title:"maps.jungleMaps.wildClover",image:"https://res.cloudinary.com/dsy8hantq/image/upload/v1727343442/wild-clover_kckhsp.webp"}],p=t(80184),m=function(){var e=(0,i.$G)().t,a=(0,n.useState)(r),t=(0,s.Z)(a,2),m=t[0],u=t[1];return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(o.Z,{maps:r,onSelectMap:function(a){if(a){var t=r.filter((function(t){return e(t.title)===a}));u(t)}else u(r)}}),(0,p.jsx)(l.Z,{images:m})]})}}}]);
//# sourceMappingURL=11.31979b54.chunk.js.map
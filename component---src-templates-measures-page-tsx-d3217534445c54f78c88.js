(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"+rcc":function(e,t,a){e.exports={whiteTheme:"category-item-list-module--whiteTheme--3G9VO",header:"category-item-list-module--header--32CZs",isActive:"category-item-list-module--isActive--1zttv",blueTheme:"category-item-list-module--blueTheme--1VfSe",wrapper:"category-item-list-module--wrapper--2l6te",icon:"category-item-list-module--icon--3Y5rx",chevron:"category-item-list-module--chevron--cmaV2",linkBack:"category-item-list-module--linkBack--K051_"}},"8A7j":function(e,t,a){"use strict";a.r(t),a.d(t,"query",(function(){return E}));var n=a("q1tI"),r=a.n(n),l=a("+uiX"),i=a("n214"),c=a("21qS"),o=a("dT4H"),m=a("cCXt"),u=a("jufJ"),s=a("daHu"),d=a("bwGF"),p=function(e){var t,a,n,l,i=e.measure,c=Object(u.b)().t,p=Boolean(i.source),h=Boolean(null==i||null===(t=i.relationships)||void 0===t||null===(a=t.region)||void 0===a?void 0:a.length),v=Boolean((null==i?void 0:i.valid_from)||(null==i?void 0:i.valid_to));return r.a.createElement(r.a.Fragment,null,r.a.createElement(m.a,{title:i.title,subtitle:i.norm,lastUpdated:null==i?void 0:i.last_updated,processedContent:null==i||null===(n=i.content)||void 0===n?void 0:n.processed}),r.a.createElement("div",{className:"bg-white mb-3 pb-2 pb-md-0 px-2 px-md-3"},h&&r.a.createElement(s.a,{regions:null==i||null===(l=i.relationships)||void 0===l?void 0:l.region}),v&&r.a.createElement(s.b,{displayTime:!0,validFrom:null==i?void 0:i.valid_from,validTo:null==i?void 0:i.valid_to}),p&&r.a.createElement("div",{className:"pt-2"},r.a.createElement("hr",null),r.a.createElement("h3",{className:"mb-1 color-blue-dark"},c("related")),r.a.createElement("div",null,r.a.createElement(o.a,{className:"color-blue mb-1",to:i.source.uri},i.source.title))),r.a.createElement(d.a,{isMobile:!0,lastUpdated:null==i?void 0:i.last_updated})))},h=a("CSOH"),v=a("Z3BO"),b=a("6Hpx"),f=a("QoFz"),E=(t.default=function(e){var t,a,n,o,m,s,d,E,g,y,T,w,I,_=e.data,N=e.pageContext,k=Object(u.b)().t,O=_.measureType.relationships.measure.map((function(e){return{id:e.id,name:e.title,path:e.path.alias,isActive:e.path.alias===N.slug,theme:"white"}}));return r.a.createElement(c.a,{pageContext:N,hasTransparentHeader:!1,showSearchInHeader:!0,showBackgroundImage:!1},r.a.createElement(i.a,{title:_.measure.title,description:_.measure.meta_description||k("current_measures_overview_meta"),pagePath:_.measure.path.alias,htmlLanguage:_.measure.langcode}),r.a.createElement(l.a,{datePublished:_.measure.valid_from?_.measure.valid_from:_.measure.created,dateModified:_.measure.changed,title:_.measure.title,langCode:_.measure.langcode,isBlogPost:!0,description:_.measure.meta_description,breadcrumbItems:[{title:k("home"),url:"/"},{title:k("current_measures"),url:k("slug_measures")},{title:null===(t=_.measure.relationships)||void 0===t||null===(a=t.situation_type)||void 0===a?void 0:a.name,url:null===(n=_.measure.relationships)||void 0===n||null===(o=n.situation_type)||void 0===o||null===(m=o.path)||void 0===m?void 0:m.alias},_.measure.title]}),r.a.createElement(b.a,null,r.a.createElement("div",{className:"pt-1 pb-1 pt-md-3 pb-md-3"},r.a.createElement(f.a,{items:[{title:k("home"),url:"/"},{title:k("current_measures"),url:k("slug_measures")},{title:null===(s=_.measure.relationships)||void 0===s||null===(d=s.measure_type)||void 0===d?void 0:d.name,url:null===(E=_.measure.relationships)||void 0===E||null===(g=E.measure_type)||void 0===g||null===(y=g.path)||void 0===y?void 0:y.alias},_.measure.title]})),r.a.createElement(h.a,{theme:"white",menu:r.a.createElement(v.c,{theme:"white",items:O,linkBack:{slug:N.listSlug,title:k("current_measures")},title:_.measureType.name,titleIconCode:null===(T=_.measureType)||void 0===T||null===(w=T.relationships)||void 0===w||null===(I=w.icon)||void 0===I?void 0:I.code}),hideMenuOnMobile:!0},r.a.createElement(p,{measure:_.measure}))))},"1717479903")},AebV:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var n=a("q1tI"),r=a.n(n),l=function(e){var t=e.datetime,a=e.displayTime,n=e.prefix,l=e.suffix,i=void 0===l?" ":l,c={year:"numeric",month:"numeric",day:"numeric",hour:a?"2-digit":void 0,minute:a?"2-digit":void 0,timeZone:"Europe/Prague"};return r.a.createElement("time",{dateTime:t},n,new Date(t).toLocaleString("cs-CZ",c),i)}},BYrW:function(e,t,a){e.exports={subtitle:"subtitle-module--subtitle--3-_JB"}},CSOH:function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),l=a("TSYQ"),i=a.n(l),c=a("WaYV"),o=a.n(c);t.a=function(e){var t,a,n=e.menu,l=e.children,c=e.hideMenuOnMobile,m=e.theme;return r.a.createElement("div",{className:i()((t={},t[o.a.wrapper]=!0,t[o.a.whiteTheme]="white"===m,t[o.a.blueTheme]="blue"===m,t))},r.a.createElement("nav",{className:i()((a={},a[o.a.hideOnMobile]=c,a))},n),r.a.createElement("div",{className:o.a.main},l))}},HHLq:function(e,t,a){e.exports={topicDetail:"topic-detail-module--topicDetail--kRP4b",article:"topic-detail-module--article--2LWJk"}},"I+D7":function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));var n=a("TSYQ"),r=a.n(n),l=a("q1tI"),i=a.n(l),c=a("eicg"),o=a("W+yO"),m=a.n(o),u=function(e){var t=e.iconCode,a=e.className,n=e.children,l=e.color;return i.a.createElement("div",{className:r()(a,m.a.headlineWrapper)},i.a.createElement("h1",{className:r()(m.a.headline)},t&&i.a.createElement(c.a,{className:m.a.headlineIcon,code:t}),i.a.createElement("span",{className:r()({"color-blue":"blue"===l,"color-white":"white"===l})},n)),i.a.createElement("hr",null))}},QoFz:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var n=a("TSYQ"),r=a.n(n),l=a("q1tI"),i=a.n(l),c=a("dT4H"),o=a("pvlE"),m=a.n(o),u=function(e){return r()("breadcrumb",m.a.breadcrumbContainer,{"breadcrumb--inverse":"inverse"===e})},s=function(e){var t=e.items,a=e.variant,n=void 0===a?"normal":a,l=function(e){return r()("breadcrumb__item",m.a.breadcrumbItem,{"breadcrumb__item--active":e===t.length-1})};return i.a.createElement("nav",{className:"breadcrumbs","aria-label":"breadcrumb"},i.a.createElement("ol",{className:u(n)},t.map((function(e,t){return i.a.createElement("li",{key:"breadcrumb-item-"+t,className:l(t)},function(e){return void 0!==e.title}(e)?i.a.createElement(c.a,{to:e.url,className:"breadcrumb__link",title:e.title}):i.a.createElement("span",{className:"breadcrumb__link"},e))}))))}},"W+yO":function(e,t,a){e.exports={headlineWrapper:"headline-module--headlineWrapper--1KseK",headline:"headline-module--headline--2EZlD",headlineIcon:"headline-module--headlineIcon--3wPWI"}},WaYV:function(e,t,a){e.exports={whiteTheme:"desktop-left-menu-layout-module--whiteTheme--eds4O",blueTheme:"desktop-left-menu-layout-module--blueTheme--2rS9O",wrapper:"desktop-left-menu-layout-module--wrapper--2FRhZ",hideOnMobile:"desktop-left-menu-layout-module--hideOnMobile--3x5nP",main:"desktop-left-menu-layout-module--main--2USeX"}},Z3BO:function(e,t,a){"use strict";a.d(t,"c",(function(){return g})),a.d(t,"a",(function(){return y})),a.d(t,"b",(function(){return T}));a("RUBk");var n=a("q1tI"),r=a.n(n),l=a("TSYQ"),i=a.n(l),c=a("+rcc"),o=a.n(c),m=a("R99l"),u=a("dT4H"),s=a("j++a"),d=a("rBsq"),p=a.n(d),h=function(e){var t,a=e.name,n=e.path,l=e.iconCode,c=e.isActive,o=e.theme;return r.a.createElement(u.a,{to:n,className:i()(p.a.categoryItem,"py-2",(t={},t[p.a.isActive]=c,t[p.a.whiteTheme]="white"===o,t[p.a.blueTheme]="blue"===o,t))},l&&r.a.createElement(s.a,{className:p.a.categoryItemIcon,code:l}),r.a.createElement("span",{className:p.a.categoryItemTitle},a),r.a.createElement("div",{className:p.a.chevron},r.a.createElement(m.a,{style:{fontSize:18},className:"color-yellow"})))},v=a("LYUY"),b=Object(v.a)(r.a.createElement("path",{d:"M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"}),"KeyboardArrowLeft"),f=a("eicg"),E=a("jufJ"),g=function(e){var t,a=e.items,n=e.title,l=e.titleIconCode,c=e.linkBack,m=e.theme,s=Object(E.a)(),d=Object(E.b)().t,p=new Intl.Collator([s]);a.sort((function(e,t){return p.compare(e.name,t.name)}));var v=n.split(" ").reduce((function(e,t,a){return 0===a?e+"<strong>"+t+"</strong>":e+" "+t}),"");return r.a.createElement("div",{className:i()((t={},t[o.a.wrapper]=!0,t[o.a.whiteTheme]="white"===m,t[o.a.blueTheme]="blue"===m,t))},r.a.createElement("div",{className:o.a.header},r.a.createElement("h2",null,l&&r.a.createElement(f.a,{code:l,className:o.a.icon}),r.a.createElement("span",{dangerouslySetInnerHTML:{__html:v}})),c?r.a.createElement(u.a,{className:o.a.linkBack,to:c.slug},r.a.createElement(b,{style:{fontSize:18},className:o.a.chevron})," ",r.a.createElement("span",null,d("back_to")," ",c.title)):r.a.createElement("hr",null)),a.map((function(e,t){return r.a.createElement(h,Object.assign({theme:m,key:""+e.iconCode+t},e))})))},y=function(e){var t=e.data,a=e.theme,n=e.currentActiveSlug,l=Object(E.b)().t,i=t.filter((function(e){return null!==e.relationships.measure})).map((function(e){var t,r=e.id,l=e.name,i=e.path,c=e.relationships;return{id:r,name:l,path:i.alias,iconCode:null===(t=c.icon)||void 0===t?void 0:t.code,isActive:i.alias===n,theme:a}}));return r.a.createElement(g,{theme:a,items:i,title:l("current_measures")})},T=function(e){var t=e.data,a=e.theme,n=e.currentActiveSlug,l=Object(E.b)().t,i=t.filter((function(e){return null!==e.relationships.situation})).map((function(e){var t,r=e.id,l=e.name,i=e.path,c=e.relationships;return{id:r,name:l,path:i.alias,iconCode:null===(t=c.icon)||void 0===t?void 0:t.code,isActive:i.alias===n,theme:a}}));return r.a.createElement(g,{theme:a,items:i,title:l("life_situations")})}},bwGF:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var n=a("q1tI"),r=a.n(n),l=a("TSYQ"),i=a.n(l),c=a("jufJ"),o=a("AebV"),m=a("d7cA"),u=a.n(m),s=function(e){var t,a=e.lastUpdated,n=e.isMobile,l=Object(c.b)().t;return r.a.createElement("div",{className:i()((t={},t[u.a.lastUpdateDesktop]=!n,t[u.a.lastUpdateMobile]=n,t))},r.a.createElement(o.a,{prefix:l("last_updated")+" ",displayTime:!0,datetime:a}))}},cCXt:function(e,t,a){"use strict";a.d(t,"a",(function(){return h}));var n=a("q1tI"),r=a.n(n),l=a("I+D7"),i=a("TSYQ"),c=a.n(i),o=a("BYrW"),m=a.n(o),u=function(e){var t=e.children,a=e.className;return r.a.createElement("p",{className:c()(m.a.subtitle,a)},t)},s=a("HHLq"),d=a.n(s),p=a("bwGF"),h=function(e){var t=e.title,a=e.titleIconCode,n=e.processedContent,i=e.lastUpdated,c=e.subtitle;return r.a.createElement("div",{className:d.a.topicDetail},r.a.createElement(l.a,{iconCode:a,color:"blue"},t),r.a.createElement(p.a,{isMobile:!1,lastUpdated:i}),r.a.createElement("article",{className:"bg-white rounded px-2 pb-2 px-md-3 pb-md-3 pt-md-0 pt-2"},r.a.createElement("hr",{className:"mt-0 mb-2 d-none d-md-block"}),c&&r.a.createElement(u,null,c),r.a.createElement("div",{className:d.a.article,dangerouslySetInnerHTML:{__html:n}})))}},d7cA:function(e,t,a){e.exports={lastUpdateMobile:"last-update-module--lastUpdateMobile--1Wbl7",lastUpdateDesktop:"last-update-module--lastUpdateDesktop--1Qx-H"}},daHu:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return d}));var n=a("q1tI"),r=a.n(n),l=a("LYUY"),i=Object(l.a)(r.a.createElement("path",{d:"M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"}),"Room"),c=Object(l.a)(r.a.createElement("path",{d:"M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z"}),"Event"),o=a("AebV"),m=a("jufJ"),u=function(e){var t=e.icon,a=e.children;return r.a.createElement("div",{className:"d-flex align-items-center mb-1 color-blue"},t," ",r.a.createElement("span",{className:"text-uppercase font-weight-medium"},a))},s=function(e){var t=e.regions;return r.a.createElement(u,{icon:r.a.createElement(i,null)},t.map((function(e){return e.name})).join(", "))},d=function(e){var t=e.validFrom,a=e.validTo,n=e.displayTime,l=Object(m.b)().t;return r.a.createElement(u,{icon:r.a.createElement(c,null)},t&&r.a.createElement(o.a,{displayTime:n,datetime:t,prefix:l("from")+" "}),a&&r.a.createElement(o.a,{displayTime:n,datetime:a,prefix:l("to")+" "}))}},eicg:function(e,t,a){"use strict";var n=a("j++a");a.d(t,"a",(function(){return n.a}))},"j++a":function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),l=a("TSYQ"),i=a.n(l);t.a=function(e){var t=e.className,a=e.code,n=i()(t,"material-icons");return r.a.createElement("i",{className:n},a||"folder")}},pvlE:function(e,t,a){e.exports={breadcrumbContainer:"breadcrumb-module--breadcrumbContainer--aIVuB",breadcrumbItem:"breadcrumb-module--breadcrumbItem--3jBwP"}},rBsq:function(e,t,a){e.exports={whiteTheme:"category-item-module--whiteTheme--2t2Zj",isActive:"category-item-module--isActive--3zXaE",categoryItemTitle:"category-item-module--categoryItemTitle--ErF2o",categoryItemIcon:"category-item-module--categoryItemIcon--3wAWD",blueTheme:"category-item-module--blueTheme--3d2LS",categoryItem:"category-item-module--categoryItem--3V8HX",chevron:"category-item-module--chevron--D9HLp"}}}]);
//# sourceMappingURL=component---src-templates-measures-page-tsx-d3217534445c54f78c88.js.map
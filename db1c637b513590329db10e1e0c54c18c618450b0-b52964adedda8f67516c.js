(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"+rcc":function(e,t,n){e.exports={whiteTheme:"category-item-list-module--whiteTheme--3G9VO",header:"category-item-list-module--header--32CZs",isActive:"category-item-list-module--isActive--1zttv",linkBack:"category-item-list-module--linkBack--K051_",chevron:"category-item-list-module--chevron--cmaV2",blueTheme:"category-item-list-module--blueTheme--1VfSe",wrapper:"category-item-list-module--wrapper--2l6te",icon:"category-item-list-module--icon--3Y5rx"}},"/9aa":function(e,t,n){var a=n("NykK"),r=n("ExA7");e.exports=function(e){return"symbol"==typeof e||r(e)&&"[object Symbol]"==a(e)}},"03A+":function(e,t,n){var a=n("JTzB"),r=n("ExA7"),i=Object.prototype,o=i.hasOwnProperty,c=i.propertyIsEnumerable,l=a(function(){return arguments}())?a:function(e){return r(e)&&o.call(e,"callee")&&!c.call(e,"callee")};e.exports=l},"4qC0":function(e,t,n){var a=n("NykK"),r=n("Z0cm"),i=n("ExA7");e.exports=function(e){return"string"==typeof e||!r(e)&&i(e)&&"[object String]"==a(e)}},AP2z:function(e,t,n){var a=n("nmnc"),r=Object.prototype,i=r.hasOwnProperty,o=r.toString,c=a?a.toStringTag:void 0;e.exports=function(e){var t=i.call(e,c),n=e[c];try{e[c]=void 0;var a=!0}catch(l){}var r=o.call(e);return a&&(t?e[c]=n:delete e[c]),r}},AebV:function(e,t,n){"use strict";n.d(t,"a",(function(){return m}));var a=n("q1tI"),r=n.n(a),i=n("jufJ"),o=["neděle ","pondělí ","úterý ","středy ","čtvrtka ","pátku ","soboty "],c=["neděli ","pondělí ","úterý ","středu ","čtvrtek ","pátek ","sobotu "],l=function(e){var t=new Date(e).getTime();return!!(e&&t>Date.now()&&t-Date.now()<=432e6)||!!(e&&t<Date.now()&&Date.now()-t<=432e6)},u=function(e,t,n){if(!0===n){var a=new Date(e).toLocaleTimeString("cs-CZ",t);return 8===a.length&&(a=a.substr(0,5)),7===a.length&&(a=(a="0"+a).substr(0,5))," ("+a+")"}},m=function(e){var t=e.datetime,n=e.displayTime,a=e.prefix,m=e.suffix,s=void 0===m?" ":m,d=e.displayOnCzDayCase,p=void 0!==d&&d,f=e.displayShortDate,h=void 0!==f&&f,v=Object(i.a)(),b={year:"numeric",month:h?"short":"long",day:"numeric",timeZone:"Europe/Prague"},g=Object.assign({},b,{weekday:h?void 0:"long"}),y={hour:n?"2-digit":void 0,minute:n?"2-digit":void 0};return r.a.createElement("span",null,"en"===v?r.a.createElement("time",{dateTime:t,className:l(t)?"font-weight-medium":"font-weight-normal"},null==a?void 0:a.toLocaleLowerCase(),new Date(t).toLocaleString("en-US",g),u(t,y,n),s):r.a.createElement("time",{dateTime:t,className:l(t)?"font-weight-medium":"font-weight-normal"},null==a?void 0:a.toLocaleLowerCase(),function(e,t,n){if("cs"===Object(i.a)()&&!1===n)return!1===t?o[e]:c[e]}(new Date(t).getDay(),p,h),new Date(t).toLocaleString("cs-CZ",b),u(t,y,n),s))}},BYrW:function(e,t,n){e.exports={subtitle:"subtitle-module--subtitle--3-_JB"}},BiGR:function(e,t,n){var a=n("nmnc"),r=n("03A+"),i=n("Z0cm"),o=a?a.isConcatSpreadable:void 0;e.exports=function(e){return i(e)||r(e)||!!(o&&e&&e[o])}},CH3K:function(e,t){e.exports=function(e,t){for(var n=-1,a=t.length,r=e.length;++n<a;)e[r+n]=t[n];return e}},CSOH:function(e,t,n){"use strict";var a=n("q1tI"),r=n.n(a),i=n("TSYQ"),o=n.n(i),c=n("WaYV"),l=n.n(c);t.a=function(e){var t,n,a=e.menu,i=e.children,c=e.hideMenuOnMobile,u=e.theme;return r.a.createElement("div",{className:o()((t={},t[l.a.wrapper]=!0,t[l.a.whiteTheme]="white"===u,t[l.a.blueTheme]="blue"===u,t))},r.a.createElement("nav",{className:o()((n={},n[l.a.hideOnMobile]=c,n))},a),r.a.createElement("div",{className:l.a.main},i))}},DFNI:function(e,t,n){e.exports={markerWrapper:"marker-module--markerWrapper--3cvTA",iconWrapper:"marker-module--iconWrapper--1TVfd",childrenWrapper:"marker-module--childrenWrapper--3cPeh"}},ExA7:function(e,t){e.exports=function(e){return null!=e&&"object"==typeof e}},HHLq:function(e,t,n){e.exports={topicDetail:"topic-detail-module--topicDetail--kRP4b",article:"topic-detail-module--article--2LWJk"}},"I+D7":function(e,t,n){"use strict";n.d(t,"a",(function(){return m}));var a=n("TSYQ"),r=n.n(a),i=n("q1tI"),o=n.n(i),c=n("eicg"),l=n("W+yO"),u=n.n(l),m=function(e){var t=e.iconCode,n=e.className,a=e.children,i=e.color;return o.a.createElement("div",{className:r()(n,u.a.headlineWrapper)},o.a.createElement("h1",{className:r()(u.a.headline)},t&&o.a.createElement(c.a,{className:u.a.headlineIcon,code:t}),o.a.createElement("span",{className:r()({"color-blue":"blue"===i,"color-white":"white"===i})},a)),o.a.createElement("hr",null))}},JTzB:function(e,t,n){var a=n("NykK"),r=n("ExA7");e.exports=function(e){return r(e)&&"[object Arguments]"==a(e)}},JoaM:function(e,t,n){var a=n("NykK"),r=n("ExA7");e.exports=function(e){return r(e)&&"[object RegExp]"==a(e)}},KfNM:function(e,t){var n=Object.prototype.toString;e.exports=function(e){return n.call(e)}},Kz5y:function(e,t,n){var a=n("WFqU"),r="object"==typeof self&&self&&self.Object===Object&&self,i=a||r||Function("return this")();e.exports=i},NykK:function(e,t,n){var a=n("nmnc"),r=n("AP2z"),i=n("KfNM"),o=a?a.toStringTag:void 0;e.exports=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":o&&o in Object(e)?r(e):i(e)}},PIBz:function(e,t,n){"use strict";n.d(t,"a",(function(){return m}));var a=n("q1tI"),r=n.n(a),i=n("TSYQ"),o=n.n(i),c=n("XXD/"),l=n.n(c),u=n("eicg"),m=function(e){var t,n=e.children,a=e.title,i=e.variant,c=e.className,m="info"===i,s="alert"===i;return r.a.createElement("div",{className:o()(c,l.a.wrapper,(t={},t[l.a.info]=m,t[l.a.alert]=s,t))},r.a.createElement("div",{className:l.a.titleWrapper},r.a.createElement("div",{className:l.a.iconWrapper},r.a.createElement(u.a,{code:m?"info":"warning"})),r.a.createElement("div",null,a)),r.a.createElement("div",null,n))}},QoFz:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var a=n("TSYQ"),r=n.n(a),i=n("q1tI"),o=n.n(i),c=n("dT4H"),l=n("pvlE"),u=n.n(l),m=function(e){return r()("breadcrumb",u.a.breadcrumbContainer,{"breadcrumb--inverse":"inverse"===e})},s=function(e){var t=e.items,n=e.variant,a=void 0===n?"normal":n,i=function(e){return r()("breadcrumb__item",u.a.breadcrumbItem,{"breadcrumb__item--active":e===t.length-1})};return o.a.createElement("nav",{className:"breadcrumbs","aria-label":"breadcrumb"},o.a.createElement("ol",{className:m(a)},t.map((function(e,t){return o.a.createElement("li",{key:"breadcrumb-item-"+t,className:i(t)},function(e){return void 0!==e.title}(e)?o.a.createElement(c.a,{to:e.url,className:"breadcrumb__link",title:e.title}):o.a.createElement("span",{className:"breadcrumb__link"},e))}))))}},TYy9:function(e,t,n){var a=n("XGnz");e.exports=function(e){return(null==e?0:e.length)?a(e,1):[]}},"W+yO":function(e,t,n){e.exports={headlineWrapper:"headline-module--headlineWrapper--1KseK",headline:"headline-module--headline--2EZlD",headlineIcon:"headline-module--headlineIcon--3wPWI"}},WFqU:function(e,t,n){(function(t){var n="object"==typeof t&&t&&t.Object===Object&&t;e.exports=n}).call(this,n("yLpj"))},WaYV:function(e,t,n){e.exports={whiteTheme:"desktop-left-menu-layout-module--whiteTheme--eds4O",blueTheme:"desktop-left-menu-layout-module--blueTheme--2rS9O",wrapper:"desktop-left-menu-layout-module--wrapper--2FRhZ",hideOnMobile:"desktop-left-menu-layout-module--hideOnMobile--3x5nP",main:"desktop-left-menu-layout-module--main--2USeX"}},XGnz:function(e,t,n){var a=n("CH3K"),r=n("BiGR");e.exports=function e(t,n,i,o,c){var l=-1,u=t.length;for(i||(i=r),c||(c=[]);++l<u;){var m=t[l];n>0&&i(m)?n>1?e(m,n-1,i,o,c):a(c,m):o||(c[c.length]=m)}return c}},"XXD/":function(e,t,n){e.exports={wrapper:"update-warning-module--wrapper--39Rma",info:"update-warning-module--info--7H-eS",alert:"update-warning-module--alert--1AnL-",titleWrapper:"update-warning-module--titleWrapper--3lWuP",iconWrapper:"update-warning-module--iconWrapper--10Hia"}},YuTi:function(e,t){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}},Z0cm:function(e,t){var n=Array.isArray;e.exports=n},Z3BO:function(e,t,n){"use strict";n.d(t,"c",(function(){return y})),n.d(t,"a",(function(){return E})),n.d(t,"b",(function(){return w}));n("RUBk");var a=n("q1tI"),r=n.n(a),i=n("TSYQ"),o=n.n(i),c=n("+rcc"),l=n.n(c),u=n("R99l"),m=n("dT4H"),s=n("j++a"),d=n("rBsq"),p=n.n(d),f=function(e){var t,n=e.name,a=e.path,i=e.iconCode,c=e.isActive,l=e.theme;return r.a.createElement(m.a,{to:a,className:o()(p.a.categoryItem,"py-2",(t={},t[p.a.isActive]=c,t[p.a.whiteTheme]="white"===l,t[p.a.blueTheme]="blue"===l,t))},i&&r.a.createElement(s.a,{className:p.a.categoryItemIcon,code:i}),r.a.createElement("span",{className:p.a.categoryItemTitle},n),r.a.createElement("div",{className:p.a.chevron},r.a.createElement(u.a,{style:{fontSize:18},className:"color-yellow"})))},h=n("LYUY"),v=Object(h.a)(r.a.createElement("path",{d:"M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"}),"KeyboardArrowLeft"),b=n("eicg"),g=n("jufJ"),y=function(e){var t,n=e.items,a=e.title,i=e.titleIconCode,c=e.linkBack,u=e.theme,s=Object(g.a)(),d=Object(g.b)().t,p=new Intl.Collator([s]);n.sort((function(e,t){return p.compare(e.name,t.name)}));var h=a.split(" ").reduce((function(e,t,n){return 0===n?e+"<strong>"+t+"</strong>":e+" "+t}),"");return r.a.createElement("div",{className:o()((t={},t[l.a.wrapper]=!0,t[l.a.whiteTheme]="white"===u,t[l.a.blueTheme]="blue"===u,t))},r.a.createElement("div",{className:l.a.header},r.a.createElement("h2",null,i&&r.a.createElement(b.a,{code:i,className:l.a.icon}),r.a.createElement("span",{dangerouslySetInnerHTML:{__html:h}})),c?r.a.createElement(m.a,{className:l.a.linkBack,to:c.slug},r.a.createElement(v,{style:{fontSize:18},className:l.a.chevron})," ",r.a.createElement("span",null,d("back_to")," ",c.title)):r.a.createElement("hr",null)),n.map((function(e,t){return r.a.createElement(f,Object.assign({theme:u,key:""+e.iconCode+t},e))})))},E=function(e){var t=e.data,n=e.theme,a=e.currentActiveSlug,i=Object(g.b)().t,o=t.filter((function(e){return null!==e.relationships.measure})).map((function(e){var t,r=e.id,i=e.name,o=e.path,c=e.relationships;return{id:r,name:i,path:o.alias,iconCode:null===(t=c.icon)||void 0===t?void 0:t.code,isActive:o.alias===a,theme:n}}));return r.a.createElement(y,{theme:n,items:o,title:i("current_measures")})},w=function(e){var t=e.data,n=e.theme,a=e.currentActiveSlug,i=Object(g.b)().t,o=t.filter((function(e){return null!==e.relationships.situation})).map((function(e){var t,r=e.id,i=e.name,o=e.path,c=e.relationships;return{id:r,name:i,path:o.alias,iconCode:null===(t=c.icon)||void 0===t?void 0:t.code,isActive:o.alias===a,theme:n}}));return r.a.createElement(y,{theme:n,items:o,title:i("life_situations")})}},bwGF:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var a=n("q1tI"),r=n.n(a),i=n("TSYQ"),o=n.n(i),c=n("jufJ"),l=n("AebV"),u=n("d7cA"),m=n.n(u),s=function(e){var t,n=e.lastUpdated,a=e.isMobile,i=Object(c.b)().t;return r.a.createElement("div",{className:o()((t={},t[m.a.lastUpdateDesktop]=!a,t[m.a.lastUpdateMobile]=a,t))},r.a.createElement(l.a,{prefix:i("last_updated")+" ",displayTime:!0,datetime:n,displayOnCzDayCase:!0}))}},cCXt:function(e,t,n){"use strict";n.d(t,"a",(function(){return f}));var a=n("q1tI"),r=n.n(a),i=n("I+D7"),o=n("TSYQ"),c=n.n(o),l=n("BYrW"),u=n.n(l),m=function(e){var t=e.children,n=e.className;return r.a.createElement("p",{className:c()(u.a.subtitle,n)},t)},s=n("HHLq"),d=n.n(s),p=n("bwGF"),f=function(e){var t=e.title,n=e.titleIconCode,a=e.processedContent,o=e.lastUpdated,c=e.subtitle,l=e.beforeContent;return r.a.createElement("div",{className:d.a.topicDetail},r.a.createElement(i.a,{iconCode:n,color:"blue"},t),r.a.createElement(p.a,{isMobile:!1,lastUpdated:o}),r.a.createElement("article",{className:"bg-white rounded px-2 pb-2 px-md-3 pb-md-3 pt-md-0 pt-2"},r.a.createElement("hr",{className:"mt-2 mb-2 d-none d-md-block"}),l,c&&r.a.createElement(m,null,c),r.a.createElement("div",{className:d.a.article,dangerouslySetInnerHTML:{__html:a}})))}},d7cA:function(e,t,n){e.exports={lastUpdateMobile:"last-update-module--lastUpdateMobile--1Wbl7",lastUpdateDesktop:"last-update-module--lastUpdateDesktop--1Qx-H"}},daHu:function(e,t,n){"use strict";n.d(t,"a",(function(){return v})),n.d(t,"b",(function(){return b}));var a=n("q1tI"),r=n.n(a),i=n("LYUY"),o=Object(i.a)(r.a.createElement("path",{d:"M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"}),"Room"),c=Object(i.a)(r.a.createElement("path",{d:"M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z"}),"Event"),l=n("AebV"),u=n("jufJ"),m=n("DFNI"),s=n.n(m),d=n("TSYQ"),p=n.n(d),f=n("wYNZ"),h=function(e){var t=e.icon,n=e.children;return r.a.createElement("div",{className:p()("color-blue",s.a.markerWrapper)},r.a.createElement("div",{className:s.a.iconWrapper},t)," ",r.a.createElement("div",{className:s.a.childrenWrapper},n))},v=function(e){var t=e.regions;return r.a.createElement(h,{icon:r.a.createElement(o,null)},r.a.createElement(f.a,{regions:t}))},b=function(e){var t=e.validFrom,n=e.validTo,a=e.displayTime,i=e.displayShortDay,o=Object(u.b)().t;return r.a.createElement(h,{icon:r.a.createElement(c,null)},t&&r.a.createElement(l.a,{displayTime:a,displayShortDate:i,datetime:t,prefix:o("from")+" "}),n&&r.a.createElement(l.a,{displayTime:a,displayShortDate:i,datetime:n,prefix:o("to")+" "}))}},dt0z:function(e,t,n){var a=n("zoYe");e.exports=function(e){return null==e?"":a(e)}},eUgh:function(e,t){e.exports=function(e,t){for(var n=-1,a=null==e?0:e.length,r=Array(a);++n<a;)r[n]=t(e[n],n,e);return r}},eicg:function(e,t,n){"use strict";var a=n("j++a");n.d(t,"a",(function(){return a.a}))},"j++a":function(e,t,n){"use strict";var a=n("q1tI"),r=n.n(a),i=n("TSYQ"),o=n.n(i);t.a=function(e){var t=e.className,n=e.code,a=o()(t,"material-icons");return r.a.createElement("i",{className:a},n||"folder")}},kGJw:function(e,t,n){var a=n("dt0z"),r=/[\\^$.*+?()[\]{}|]/g,i=RegExp(r.source);e.exports=function(e){return(e=a(e))&&i.test(e)?e.replace(r,"\\$&"):e}},mdPL:function(e,t,n){(function(e){var a=n("WFqU"),r=t&&!t.nodeType&&t,i=r&&"object"==typeof e&&e&&!e.nodeType&&e,o=i&&i.exports===r&&a.process,c=function(){try{var e=i&&i.require&&i.require("util").types;return e||o&&o.binding&&o.binding("util")}catch(t){}}();e.exports=c}).call(this,n("YuTi")(e))},nmnc:function(e,t,n){var a=n("Kz5y").Symbol;e.exports=a},pIBI:function(e,t,n){var a=n("wAXd"),r=n("kGJw"),i=n("4qC0"),o=n("TYy9");e.exports=function(e,t,n){return Array.isArray(e)||(e=[e]),o(e.map((function(e){return i(e)?function(e,t,n){var o=0,c=0;if(""===e)return e;if(!e||!i(e))throw new TypeError("First argument to react-string-replace#replaceString must be a string");var l=t;a(l)||(l=new RegExp("("+r(l)+")","gi"));for(var u=e.split(l),m=1,s=u.length;m<s;m+=2)c=u[m].length,o+=u[m-1].length,u[m]=n(u[m],m,o),o+=c;return u}(e,t,n):e})))}},pvlE:function(e,t,n){e.exports={breadcrumbContainer:"breadcrumb-module--breadcrumbContainer--aIVuB",breadcrumbItem:"breadcrumb-module--breadcrumbItem--3jBwP"}},rBsq:function(e,t,n){e.exports={whiteTheme:"category-item-module--whiteTheme--2t2Zj",isActive:"category-item-module--isActive--3zXaE",categoryItemTitle:"category-item-module--categoryItemTitle--ErF2o",categoryItemIcon:"category-item-module--categoryItemIcon--3wAWD",blueTheme:"category-item-module--blueTheme--3d2LS",categoryItem:"category-item-module--categoryItem--3V8HX",chevron:"category-item-module--chevron--D9HLp"}},sEf8:function(e,t){e.exports=function(e){return function(t){return e(t)}}},wAXd:function(e,t,n){var a=n("JoaM"),r=n("sEf8"),i=n("mdPL"),o=i&&i.isRegExp,c=o?r(o):a;e.exports=c},wYNZ:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return i}));var a=n("q1tI"),r=n.n(a),i=function(e){var t=!1;if(e&&e.length){for(var n=0;n<e.length;n++){"33"===e[n]&&(t=!0)}return t}},o=function(e){var t=e.regions;return r.a.createElement("span",{className:i(t.map((function(e){return e.drupal_internal__tid})))?"font-weight-normal":"font-weight-medium"},t.map((function(e){return e.name})).join(", "))}},zoYe:function(e,t,n){var a=n("nmnc"),r=n("eUgh"),i=n("Z0cm"),o=n("/9aa"),c=a?a.prototype:void 0,l=c?c.toString:void 0;e.exports=function e(t){if("string"==typeof t)return t;if(i(t))return r(t,e)+"";if(o(t))return l?l.call(t):"";var n=t+"";return"0"==n&&1/t==-1/0?"-0":n}}}]);
//# sourceMappingURL=db1c637b513590329db10e1e0c54c18c618450b0-b52964adedda8f67516c.js.map
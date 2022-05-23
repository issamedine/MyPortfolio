(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[118],{6884:function(e,r,t){"use strict";t.d(r,{X:function(){return n}});var n=(0,t(9867).I)({d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z",displayName:"ChevronRightIcon"})},8928:function(e,r,t){"use strict";t.d(r,{h:function(){return a}});var n=t(9867),i=t(7294),a=(0,n.I)({displayName:"ExternalLinkIcon",path:i.createElement("g",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeWidth:"2"},i.createElement("path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"}),i.createElement("path",{d:"M15 3h6v6"}),i.createElement("path",{d:"M10 14L21 3"}))})},8482:function(e,r,t){"use strict";t.d(r,{E:function(){return h}});var n=t(63),i=t(3852),a=t(5505),l=t(3808),s=t(7294),c=t(6732);function o(){return(o=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function u(e,r){if(null==e)return{};var t,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}var d=s.forwardRef(((e,r)=>{var{htmlWidth:t,htmlHeight:n,alt:i}=e,a=u(e,["htmlWidth","htmlHeight","alt"]);return s.createElement("img",o({width:t,height:n,ref:r,alt:i},a))})),h=(0,n.G)(((e,r)=>{var{fallbackSrc:t,fallback:n,src:l,srcSet:h,align:f,fit:m,loading:g,ignoreFallback:x,crossOrigin:p}=e,v=u(e,["fallbackSrc","fallback","src","srcSet","align","fit","loading","ignoreFallback","crossOrigin"]),j=null!=g||x||void 0===t&&void 0===n,y=function(e){var{loading:r,src:t,srcSet:n,onLoad:i,onError:a,crossOrigin:l,sizes:o,ignoreFallback:u}=e,[d,h]=(0,s.useState)("pending");(0,s.useEffect)((()=>{h(t?"loading":"pending")}),[t]);var f=(0,s.useRef)(),m=(0,s.useCallback)((()=>{if(t){g();var e=new Image;e.src=t,l&&(e.crossOrigin=l),n&&(e.srcset=n),o&&(e.sizes=o),r&&(e.loading=r),e.onload=e=>{g(),h("loaded"),null==i||i(e)},e.onerror=e=>{g(),h("failed"),null==a||a(e)},f.current=e}}),[t,l,n,o,i,a,r]),g=()=>{f.current&&(f.current.onload=null,f.current.onerror=null,f.current=null)};return(0,c.G)((()=>{if(!u)return"loading"===d&&m(),()=>{g()}}),[d,m,u]),u?"loaded":d}(o({},e,{ignoreFallback:j})),b=o({ref:r,objectFit:m,objectPosition:f},j?v:(0,a.CE)(v,["onError","onLoad"]));return"loaded"!==y?n||s.createElement(i.m$.img,o({as:d,className:"chakra-image__placeholder",src:t},b)):s.createElement(i.m$.img,o({as:d,src:l,srcSet:h,crossOrigin:p,loading:g,className:"chakra-image"},b))}));l.Ts&&(h.displayName="Image")},8125:function(e,r,t){"use strict";t.d(r,{C:function(){return d}});var n=t(63),i=t(2326),a=t(5284),l=t(3852),s=t(4461),c=t(3808),o=t(7294);function u(){return(u=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}var d=(0,n.G)(((e,r)=>{var t=(0,i.m)("Badge",e),n=function(e,r){if(null==e)return{};var t,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}((0,a.Lr)(e),["className"]);return o.createElement(l.m$.span,u({ref:r,className:(0,s.cx)("chakra-badge",e.className)},n,{__css:u({display:"inline-block",whiteSpace:"nowrap",verticalAlign:"middle"},t)}))}));c.Ts&&(d.displayName="Badge")},3762:function(e,r,t){"use strict";t.d(r,{aV:function(){return m},HC:function(){return p}});var n=t(58),i=t(63),a=t(2326),l=t(5284),s=t(9676),c=t(3852),o=t(3808),u=t(4255),d=t(7294);function h(){return(h=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function f(e,r){if(null==e)return{};var t,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}var m=(0,i.G)(((e,r)=>{var t=(0,a.j)("List",e),n=(0,l.Lr)(e),{children:i,styleType:o="none",stylePosition:m,spacing:g}=n,x=f(n,["children","styleType","stylePosition","spacing"]),p=(0,u.W)(i),v=g?{"& > *:not(style) ~ *:not(style)":{mt:g}}:{};return d.createElement(s.Fo,{value:t},d.createElement(c.m$.ul,h({ref:r,listStyleType:o,listStylePosition:m,role:"list",__css:h({},t.container,v)},x),p))}));o.Ts&&(m.displayName="List");var g=(0,i.G)(((e,r)=>{var t=f(e,["as"]);return d.createElement(m,h({ref:r,as:"ol",styleType:"decimal",marginStart:"1em"},t))}));o.Ts&&(g.displayName="OrderedList");var x=(0,i.G)(((e,r)=>{var t=f(e,["as"]);return d.createElement(m,h({ref:r,as:"ul",styleType:"initial",marginStart:"1em"},t))}));o.Ts&&(x.displayName="UnorderedList");var p=(0,i.G)(((e,r)=>{var t=(0,s.yK)();return d.createElement(c.m$.li,h({ref:r},e,{__css:t.item}))}));o.Ts&&(p.displayName="ListItem");var v=(0,i.G)(((e,r)=>{var t=(0,s.yK)();return d.createElement(n.J,h({ref:r,role:"presentation"},e,{__css:t.icon}))}));o.Ts&&(v.displayName="ListIcon")},1667:function(e,r,t){"use strict";t.d(r,{P4:function(){return p},Pg:function(){return j},Et:function(){return v}});var n=t(1664),i=t(5675),a=t(63),l=t(3852),s=t(4461),c=t(7294);function o(){return(o=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function u(e,r){if(null==e)return{};var t,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}var d=(0,a.G)(((e,r)=>{var{isExternal:t,target:n,rel:i,className:a}=e,d=u(e,["isExternal","target","rel","className"]);return c.createElement(l.m$.a,o({},d,{ref:r,className:(0,s.cx)("chakra-linkbox__overlay",a),rel:t?"noopener noreferrer":i,target:t?"_blank":n,__css:{position:"static","&::before":{content:"''",cursor:"inherit",display:"block",position:"absolute",top:0,left:0,zIndex:0,width:"100%",height:"100%"}}}))})),h=(0,a.G)(((e,r)=>{var{className:t}=e,n=u(e,["className"]);return c.createElement(l.m$.div,o({ref:r,position:"relative"},n,{className:(0,s.cx)("chakra-linkbox",t),__css:{"a[href]:not(.chakra-linkbox__overlay), abbr[title]":{position:"relative",zIndex:1}}}))})),f=t(8017),m=t(4115),g=t(917),x=t(5893),p=function(e){var r=e.children,t=e.href,n=e.title,a=e.thumbnail;return(0,x.jsx)(f.xu,{w:"100%",textAlign:"center",children:(0,x.jsxs)(h,{cursor:"pointer",children:[(0,x.jsx)(i.default,{src:a,alt:n,className:"grid-item-thumbnail",placeholder:"blur",loading:"lazy"}),(0,x.jsx)(d,{href:t,target:"_blank",children:(0,x.jsx)(m.x,{mt:2,children:n})}),(0,x.jsx)(m.x,{fontSize:14,children:r})]})})},v=function(e){var r=e.children,t=e.id,a=e.title,l=e.thumbnail;return(0,x.jsx)(f.xu,{w:"100%",textAlign:"center",children:(0,x.jsx)(n.default,{href:"/works/".concat(t),children:(0,x.jsxs)(h,{cursor:"pointer",children:[(0,x.jsx)(i.default,{src:l,alt:a,className:"grid-item-thumbnail"}),(0,x.jsx)(d,{href:"/works/".concat(t),children:(0,x.jsx)(m.x,{mt:2,fontSize:20,children:a})}),(0,x.jsx)(m.x,{fontSize:14,children:r})]})})})},j=function(){return(0,x.jsx)(g.xB,{styles:"\n      .grid-item-thumbnail {\n        border-radius: 12px;\n      }\n    "})}},3062:function(e,r,t){"use strict";var n=t(1770),i=t(9008),a=t(1667),l=t(5893),s={hidden:{opacity:0,x:0,y:20},enter:{opacity:1,x:0,y:0},exit:{opacity:0,x:-0,y:20}};r.Z=function(e){var r=e.children,t=e.title;return(0,l.jsx)(n.E.article,{initial:"hidden",animate:"enter",exit:"exit",variants:s,transition:{duration:.4,type:"easeInOut"},style:{position:"relative"},children:(0,l.jsxs)(l.Fragment,{children:[t&&(0,l.jsxs)(i.default,{children:[(0,l.jsxs)("title",{children:[t," - Issam"]}),(0,l.jsx)("meta",{name:"twitter:title",content:t}),(0,l.jsx)("meta",{property:"og:title",content:t})]}),r,(0,l.jsx)(a.Pg,{})]})})}},7921:function(e,r,t){"use strict";t.d(r,{Dx:function(){return d},WZ:function(){return h},h_:function(){return f}});var n=t(1664),i=t(8017),a=t(9444),l=t(336),s=t(8482),c=t(8125),o=t(6884),u=t(5893),d=function(e){var r=e.children;return(0,u.jsxs)(i.xu,{children:[(0,u.jsx)(n.default,{href:"/works",children:(0,u.jsx)(a.r,{children:"Works"})}),(0,u.jsxs)("span",{children:[" ",(0,u.jsx)(o.X,{})," "]}),(0,u.jsx)(l.X,{display:"inline-block",as:"h3",fontSize:20,mb:4,children:r})]})},h=function(e){var r=e.src,t=e.alt;return(0,u.jsx)(s.E,{borderRadius:"lg",w:"full",src:r,alt:t,mb:4})},f=function(e){var r=e.children;return(0,u.jsx)(c.C,{colorScheme:"green",mr:2,children:r})}},4111:function(e,r,t){"use strict";t.r(r);var n=t(3850),i=t(8125),a=t(3762),l=t(9444),s=t(3062),c=t(8928),o=t(7921),u=t(5893);r.default=function(){return(0,u.jsx)(s.Z,{title:"Scroll magic",children:(0,u.jsxs)(n.W,{children:[(0,u.jsxs)(o.Dx,{children:["Static website scroll magic ",(0,u.jsx)(i.C,{children:"2021"})]}),(0,u.jsxs)(a.aV,{ml:4,my:4,children:[(0,u.jsxs)(a.HC,{children:[(0,u.jsx)(o.h_,{children:"Website"}),(0,u.jsxs)(l.r,{href:"https://issamedine.github.io/Site_Paral_Scroll_Magic/",children:["github.com/scroll-magic-demo ",(0,u.jsx)(c.h,{mx:"2px"})]})]}),(0,u.jsxs)(a.HC,{children:[(0,u.jsx)(o.h_,{children:"Source"}),(0,u.jsxs)(l.r,{href:"https://github.com/issamedine/Site_Paral_Scroll_Magic",children:["github.com/scroll-magic-code ",(0,u.jsx)(c.h,{mx:"2px"})]})]}),(0,u.jsxs)(a.HC,{children:[(0,u.jsx)(o.h_,{children:"Stack"}),(0,u.jsx)("span",{children:"HTML5, CSS3, Bootstrap"})]})]}),(0,u.jsx)(o.WZ,{src:"/images/works/scrollmagic.png",alt:"image static website"})]})})}},6283:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/works/scrollmagic",function(){return t(4111)}])}},function(e){e.O(0,[774,888,179],(function(){return r=6283,e(e.s=r);var r}));var r=e.O();_N_E=r}]);
(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[605],{6884:function(e,r,t){"use strict";t.d(r,{X:function(){return n}});var n=(0,t(9867).I)({d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z",displayName:"ChevronRightIcon"})},8928:function(e,r,t){"use strict";t.d(r,{h:function(){return i}});var n=t(9867),a=t(7294),i=(0,n.I)({displayName:"ExternalLinkIcon",path:a.createElement("g",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeWidth:"2"},a.createElement("path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"}),a.createElement("path",{d:"M15 3h6v6"}),a.createElement("path",{d:"M10 14L21 3"}))})},8482:function(e,r,t){"use strict";t.d(r,{E:function(){return h}});var n=t(63),a=t(3852),i=t(5505),s=t(3808),l=t(7294),c=t(6732);function o(){return(o=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function u(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}var d=l.forwardRef(((e,r)=>{var{htmlWidth:t,htmlHeight:n,alt:a}=e,i=u(e,["htmlWidth","htmlHeight","alt"]);return l.createElement("img",o({width:t,height:n,ref:r,alt:a},i))})),h=(0,n.G)(((e,r)=>{var{fallbackSrc:t,fallback:n,src:s,srcSet:h,align:f,fit:p,loading:m,ignoreFallback:x,crossOrigin:g}=e,v=u(e,["fallbackSrc","fallback","src","srcSet","align","fit","loading","ignoreFallback","crossOrigin"]),y=null!=m||x||void 0===t&&void 0===n,j=function(e){var{loading:r,src:t,srcSet:n,onLoad:a,onError:i,crossOrigin:s,sizes:o,ignoreFallback:u}=e,[d,h]=(0,l.useState)("pending");(0,l.useEffect)((()=>{h(t?"loading":"pending")}),[t]);var f=(0,l.useRef)(),p=(0,l.useCallback)((()=>{if(t){m();var e=new Image;e.src=t,s&&(e.crossOrigin=s),n&&(e.srcset=n),o&&(e.sizes=o),r&&(e.loading=r),e.onload=e=>{m(),h("loaded"),null==a||a(e)},e.onerror=e=>{m(),h("failed"),null==i||i(e)},f.current=e}}),[t,s,n,o,a,i,r]),m=()=>{f.current&&(f.current.onload=null,f.current.onerror=null,f.current=null)};return(0,c.G)((()=>{if(!u)return"loading"===d&&p(),()=>{m()}}),[d,p,u]),u?"loaded":d}(o({},e,{ignoreFallback:y})),b=o({ref:r,objectFit:p,objectPosition:f},y?v:(0,i.CE)(v,["onError","onLoad"]));return"loaded"!==j?n||l.createElement(a.m$.img,o({as:d,className:"chakra-image__placeholder",src:t},b)):l.createElement(a.m$.img,o({as:d,src:s,srcSet:h,crossOrigin:g,loading:m,className:"chakra-image"},b))}));s.Ts&&(h.displayName="Image")},8125:function(e,r,t){"use strict";t.d(r,{C:function(){return d}});var n=t(63),a=t(2326),i=t(5284),s=t(3852),l=t(4461),c=t(3808),o=t(7294);function u(){return(u=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}var d=(0,n.G)(((e,r)=>{var t=(0,a.m)("Badge",e),n=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}((0,i.Lr)(e),["className"]);return o.createElement(s.m$.span,u({ref:r,className:(0,l.cx)("chakra-badge",e.className)},n,{__css:u({display:"inline-block",whiteSpace:"nowrap",verticalAlign:"middle"},t)}))}));c.Ts&&(d.displayName="Badge")},3762:function(e,r,t){"use strict";t.d(r,{aV:function(){return p},HC:function(){return g}});var n=t(58),a=t(63),i=t(2326),s=t(5284),l=t(9676),c=t(3852),o=t(3808),u=t(4255),d=t(7294);function h(){return(h=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function f(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}var p=(0,a.G)(((e,r)=>{var t=(0,i.j)("List",e),n=(0,s.Lr)(e),{children:a,styleType:o="none",stylePosition:p,spacing:m}=n,x=f(n,["children","styleType","stylePosition","spacing"]),g=(0,u.W)(a),v=m?{"& > *:not(style) ~ *:not(style)":{mt:m}}:{};return d.createElement(l.Fo,{value:t},d.createElement(c.m$.ul,h({ref:r,listStyleType:o,listStylePosition:p,role:"list",__css:h({},t.container,v)},x),g))}));o.Ts&&(p.displayName="List");var m=(0,a.G)(((e,r)=>{var t=f(e,["as"]);return d.createElement(p,h({ref:r,as:"ol",styleType:"decimal",marginStart:"1em"},t))}));o.Ts&&(m.displayName="OrderedList");var x=(0,a.G)(((e,r)=>{var t=f(e,["as"]);return d.createElement(p,h({ref:r,as:"ul",styleType:"initial",marginStart:"1em"},t))}));o.Ts&&(x.displayName="UnorderedList");var g=(0,a.G)(((e,r)=>{var t=(0,l.yK)();return d.createElement(c.m$.li,h({ref:r},e,{__css:t.item}))}));o.Ts&&(g.displayName="ListItem");var v=(0,a.G)(((e,r)=>{var t=(0,l.yK)();return d.createElement(n.J,h({ref:r,role:"presentation"},e,{__css:t.icon}))}));o.Ts&&(v.displayName="ListIcon")},1667:function(e,r,t){"use strict";t.d(r,{P4:function(){return g},Pg:function(){return y},Et:function(){return v}});var n=t(1664),a=t(5675),i=t(63),s=t(3852),l=t(4461),c=t(7294);function o(){return(o=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function u(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}var d=(0,i.G)(((e,r)=>{var{isExternal:t,target:n,rel:a,className:i}=e,d=u(e,["isExternal","target","rel","className"]);return c.createElement(s.m$.a,o({},d,{ref:r,className:(0,l.cx)("chakra-linkbox__overlay",i),rel:t?"noopener noreferrer":a,target:t?"_blank":n,__css:{position:"static","&::before":{content:"''",cursor:"inherit",display:"block",position:"absolute",top:0,left:0,zIndex:0,width:"100%",height:"100%"}}}))})),h=(0,i.G)(((e,r)=>{var{className:t}=e,n=u(e,["className"]);return c.createElement(s.m$.div,o({ref:r,position:"relative"},n,{className:(0,l.cx)("chakra-linkbox",t),__css:{"a[href]:not(.chakra-linkbox__overlay), abbr[title]":{position:"relative",zIndex:1}}}))})),f=t(8017),p=t(4115),m=t(917),x=t(5893),g=function(e){var r=e.children,t=e.href,n=e.title,i=e.thumbnail;return(0,x.jsx)(f.xu,{w:"100%",textAlign:"center",children:(0,x.jsxs)(h,{cursor:"pointer",children:[(0,x.jsx)(a.default,{src:i,alt:n,className:"grid-item-thumbnail",placeholder:"blur",loading:"lazy"}),(0,x.jsx)(d,{href:t,target:"_blank",children:(0,x.jsx)(p.x,{mt:2,children:n})}),(0,x.jsx)(p.x,{fontSize:14,children:r})]})})},v=function(e){var r=e.children,t=e.id,i=e.title,s=e.thumbnail;return(0,x.jsx)(f.xu,{w:"100%",textAlign:"center",children:(0,x.jsx)(n.default,{href:"/works/".concat(t),children:(0,x.jsxs)(h,{cursor:"pointer",children:[(0,x.jsx)(a.default,{src:s,alt:i,className:"grid-item-thumbnail"}),(0,x.jsx)(d,{href:"/works/".concat(t),children:(0,x.jsx)(p.x,{mt:2,fontSize:20,children:i})}),(0,x.jsx)(p.x,{fontSize:14,children:r})]})})})},y=function(){return(0,x.jsx)(m.xB,{styles:"\n      .grid-item-thumbnail {\n        border-radius: 12px;\n      }\n    "})}},3062:function(e,r,t){"use strict";var n=t(1770),a=t(9008),i=t(1667),s=t(5893),l={hidden:{opacity:0,x:0,y:20},enter:{opacity:1,x:0,y:0},exit:{opacity:0,x:-0,y:20}};r.Z=function(e){var r=e.children,t=e.title;return(0,s.jsx)(n.E.article,{initial:"hidden",animate:"enter",exit:"exit",variants:l,transition:{duration:.4,type:"easeInOut"},style:{position:"relative"},children:(0,s.jsxs)(s.Fragment,{children:[t&&(0,s.jsxs)(a.default,{children:[(0,s.jsxs)("title",{children:[t," - Issam"]}),(0,s.jsx)("meta",{name:"twitter:title",content:t}),(0,s.jsx)("meta",{property:"og:title",content:t})]}),r,(0,s.jsx)(i.Pg,{})]})})}},6113:function(e,r,t){"use strict";var n,a=t(2209),i=t(4524).Z.p(n||(n=(0,a.Z)(["\n  text-align: justify;\n  text-indent: 1em;\n"])));r.Z=i},7921:function(e,r,t){"use strict";t.d(r,{Dx:function(){return d},WZ:function(){return h},h_:function(){return f}});var n=t(1664),a=t(8017),i=t(9444),s=t(336),l=t(8482),c=t(8125),o=t(6884),u=t(5893),d=function(e){var r=e.children;return(0,u.jsxs)(a.xu,{children:[(0,u.jsx)(n.default,{href:"/works",children:(0,u.jsx)(i.r,{children:"Works"})}),(0,u.jsxs)("span",{children:[" ",(0,u.jsx)(o.X,{})," "]}),(0,u.jsx)(s.X,{display:"inline-block",as:"h3",fontSize:20,mb:4,children:r})]})},h=function(e){var r=e.src,t=e.alt;return(0,u.jsx)(l.E,{borderRadius:"lg",w:"full",src:r,alt:t,mb:4})},f=function(e){var r=e.children;return(0,u.jsx)(c.C,{colorScheme:"green",mr:2,children:r})}},8171:function(e,r,t){"use strict";t.r(r);var n=t(3850),a=t(8125),i=t(3762),s=t(9444),l=t(3062),c=t(8928),o=t(7921),u=t(6113),d=t(5893);r.default=function(){return(0,d.jsx)(l.Z,{title:"Posts app",children:(0,d.jsxs)(n.W,{children:[(0,d.jsxs)(o.Dx,{children:["Posts Application ",(0,d.jsx)(a.C,{children:"2020"})]}),(0,d.jsx)(u.Z,{children:"An authentication system,"}),(0,d.jsx)(u.Z,{children:"Each user can post a post and can interact with and comment on other posts posted"}),(0,d.jsxs)(i.aV,{ml:4,my:4,children:[(0,d.jsxs)(i.HC,{children:[(0,d.jsx)(o.h_,{children:"Source"}),(0,d.jsxs)(s.r,{href:"https://github.com/issamedine/Posts-MERN-GraphQL-Apollo",children:["github.com/posts_app ",(0,d.jsx)(c.h,{mx:"2px"})]})]}),(0,d.jsxs)(i.HC,{children:[(0,d.jsx)(o.h_,{children:"Stack"}),(0,d.jsx)("span",{children:"GraphQL, Express, React, Hooks & Apollo."})]})]}),(0,d.jsx)(o.WZ,{src:"/images/works/posts_app.gif",alt:"Inkdrop"})]})})}},6646:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/works/postsapp",function(){return t(8171)}])}},function(e){e.O(0,[774,888,179],(function(){return r=6646,e(e.s=r);var r}));var r=e.O();_N_E=r}]);
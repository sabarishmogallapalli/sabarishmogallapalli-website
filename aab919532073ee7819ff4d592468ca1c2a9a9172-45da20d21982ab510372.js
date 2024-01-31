"use strict";(self.webpackChunkPortfolio_Website_Template=self.webpackChunkPortfolio_Website_Template||[]).push([[287],{3204:function(e){const t=/[\p{Lu}]/u,a=/[\p{Ll}]/u,r=/^[\p{Lu}](?![\p{Lu}])/gu,n=/([\p{Alpha}\p{N}_]|$)/u,s=/[_.\- ]+/,i=new RegExp("^"+s.source),l=new RegExp(s.source+n.source,"gu"),o=new RegExp("\\d+"+n.source,"gu"),c=(e,n)=>{if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");if(n={pascalCase:!1,preserveConsecutiveUppercase:!1,...n},0===(e=Array.isArray(e)?e.map((e=>e.trim())).filter((e=>e.length)).join("-"):e.trim()).length)return"";const s=!1===n.locale?e=>e.toLowerCase():e=>e.toLocaleLowerCase(n.locale),c=!1===n.locale?e=>e.toUpperCase():e=>e.toLocaleUpperCase(n.locale);if(1===e.length)return n.pascalCase?c(e):s(e);return e!==s(e)&&(e=((e,r,n)=>{let s=!1,i=!1,l=!1;for(let o=0;o<e.length;o++){const c=e[o];s&&t.test(c)?(e=e.slice(0,o)+"-"+e.slice(o),s=!1,l=i,i=!0,o++):i&&l&&a.test(c)?(e=e.slice(0,o-1)+"-"+e.slice(o-1),l=i,i=!1,s=!0):(s=r(c)===c&&n(c)!==c,l=i,i=n(c)===c&&r(c)!==c)}return e})(e,s,c)),e=e.replace(i,""),e=n.preserveConsecutiveUppercase?((e,t)=>(r.lastIndex=0,e.replace(r,(e=>t(e)))))(e,s):s(e),n.pascalCase&&(e=c(e.charAt(0))+e.slice(1)),((e,t)=>(l.lastIndex=0,o.lastIndex=0,e.replace(l,((e,a)=>t(a))).replace(o,(e=>t(e)))))(e,c)};e.exports=c,e.exports.default=c},8032:function(e,t,a){a.d(t,{L:function(){return g},M:function(){return x},P:function(){return E},S:function(){return F},_:function(){return l},a:function(){return i},b:function(){return u},g:function(){return d},h:function(){return o}});var r=a(7294),n=(a(3204),a(5697)),s=a.n(n);function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},i.apply(this,arguments)}function l(e,t){if(null==e)return{};var a,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)t.indexOf(a=s[r])>=0||(n[a]=e[a]);return n}const o=()=>"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;function c(e,t,a){const r={};let n="gatsby-image-wrapper";return"fixed"===a?(r.width=e,r.height=t):"constrained"===a&&(n="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:n,"data-gatsby-image-wrapper":"",style:r}}function u(e,t,a,r,n){return void 0===n&&(n={}),i({},a,{loading:r,shouldLoad:e,"data-main-image":"",style:i({},n,{opacity:t?1:0})})}function d(e,t,a,r,n,s,l,o){const c={};s&&(c.backgroundColor=s,"fixed"===a?(c.width=r,c.height=n,c.backgroundColor=s,c.position="relative"):("constrained"===a||"fullWidth"===a)&&(c.position="absolute",c.top=0,c.left=0,c.bottom=0,c.right=0)),l&&(c.objectFit=l),o&&(c.objectPosition=o);const u=i({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:i({opacity:t?0:1,transition:"opacity 500ms linear"},c)});return u}const p=["children"],m=function(e){let{layout:t,width:a,height:n}=e;return"fullWidth"===t?r.createElement("div",{"aria-hidden":!0,style:{paddingTop:n/a*100+"%"}}):"constrained"===t?r.createElement("div",{style:{maxWidth:a,display:"block"}},r.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg%20height='"+n+"'%20width='"+a+"'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},g=function(e){let{children:t}=e,a=l(e,p);return r.createElement(r.Fragment,null,r.createElement(m,i({},a)),t,null)},h=["src","srcSet","loading","alt","shouldLoad"],f=["fallback","sources","shouldLoad"],y=function(e){let{src:t,srcSet:a,loading:n,alt:s="",shouldLoad:o}=e,c=l(e,h);return r.createElement("img",i({},c,{decoding:"async",loading:n,src:o?t:void 0,"data-src":o?void 0:t,srcSet:o?a:void 0,"data-srcset":o?void 0:a,alt:s}))},b=function(e){let{fallback:t,sources:a=[],shouldLoad:n=!0}=e,s=l(e,f);const o=s.sizes||(null==t?void 0:t.sizes),c=r.createElement(y,i({},s,t,{sizes:o,shouldLoad:n}));return a.length?r.createElement("picture",null,a.map((e=>{let{media:t,srcSet:a,type:s}=e;return r.createElement("source",{key:t+"-"+s+"-"+a,type:s,media:t,srcSet:n?a:void 0,"data-srcset":n?void 0:a,sizes:o})})),c):c};var v;y.propTypes={src:n.string.isRequired,alt:n.string.isRequired,sizes:n.string,srcSet:n.string,shouldLoad:n.bool},b.displayName="Picture",b.propTypes={alt:n.string.isRequired,shouldLoad:n.bool,fallback:n.exact({src:n.string.isRequired,srcSet:n.string,sizes:n.string}),sources:n.arrayOf(n.oneOfType([n.exact({media:n.string.isRequired,type:n.string,sizes:n.string,srcSet:n.string.isRequired}),n.exact({media:n.string,type:n.string.isRequired,sizes:n.string,srcSet:n.string.isRequired})]))};const w=["fallback"],E=function(e){let{fallback:t}=e,a=l(e,w);return t?r.createElement(b,i({},a,{fallback:{src:t},"aria-hidden":!0,alt:""})):r.createElement("div",i({},a))};E.displayName="Placeholder",E.propTypes={fallback:n.string,sources:null==(v=b.propTypes)?void 0:v.sources,alt:function(e,t,a){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+a+"`. Validation failed."):null}};const x=function(e){return r.createElement(r.Fragment,null,r.createElement(b,i({},e)),r.createElement("noscript",null,r.createElement(b,i({},e,{shouldLoad:!0}))))};x.displayName="MainImage",x.propTypes=b.propTypes;const k=["as","className","class","style","image","loading","imgClassName","imgStyle","backgroundColor","objectFit","objectPosition"],L=["style","className"],N=e=>e.replace(/\n/g,""),S=function(e,t,a){for(var r=arguments.length,n=new Array(r>3?r-3:0),i=3;i<r;i++)n[i-3]=arguments[i];return e.alt||""===e.alt?s().string.apply(s(),[e,t,a].concat(n)):new Error('The "alt" prop is required in '+a+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},T={image:s().object.isRequired,alt:S},C=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],I=["style","className"],_=new Set;let j,q;const O=function(e){let{as:t="div",image:n,style:s,backgroundColor:u,className:d,class:p,onStartLoad:m,onLoad:g,onError:h}=e,f=l(e,C);const{width:y,height:b,layout:v}=n,w=c(y,b,v),{style:E,className:x}=w,k=l(w,I),L=(0,r.useRef)(),N=(0,r.useMemo)((()=>JSON.stringify(n.images)),[n.images]);p&&(d=p);const S=function(e,t,a){let r="";return"fullWidth"===e&&(r='<div aria-hidden="true" style="padding-top: '+a/t*100+'%;"></div>'),"constrained"===e&&(r='<div style="max-width: '+t+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg%20height=\''+a+"'%20width='"+t+"'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),r}(v,y,b);return(0,r.useEffect)((()=>{j||(j=a.e(731).then(a.bind(a,6731)).then((e=>{let{renderImageToString:t,swapPlaceholderImage:a}=e;return q=t,{renderImageToString:t,swapPlaceholderImage:a}})));const e=L.current.querySelector("[data-gatsby-image-ssr]");if(e&&o())return e.complete?(null==m||m({wasCached:!0}),null==g||g({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)):(null==m||m({wasCached:!0}),e.addEventListener("load",(function t(){e.removeEventListener("load",t),null==g||g({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)}))),void _.add(N);if(q&&_.has(N))return;let t,r;return j.then((e=>{let{renderImageToString:a,swapPlaceholderImage:l}=e;L.current&&(L.current.innerHTML=a(i({isLoading:!0,isLoaded:_.has(N),image:n},f)),_.has(N)||(t=requestAnimationFrame((()=>{L.current&&(r=l(L.current,N,_,s,m,g,h))}))))})),()=>{t&&cancelAnimationFrame(t),r&&r()}}),[n]),(0,r.useLayoutEffect)((()=>{_.has(N)&&q&&(L.current.innerHTML=q(i({isLoading:_.has(N),isLoaded:_.has(N),image:n},f)),null==m||m({wasCached:!0}),null==g||g({wasCached:!0}))}),[n]),(0,r.createElement)(t,i({},k,{style:i({},E,s,{backgroundColor:u}),className:x+(d?" "+d:""),ref:L,dangerouslySetInnerHTML:{__html:S},suppressHydrationWarning:!0}))},P=(0,r.memo)((function(e){return e.image?(0,r.createElement)(O,e):null}));P.propTypes=T,P.displayName="GatsbyImage";const R=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"];function A(e){return function(t){let{src:a,__imageData:n,__error:s}=t,o=l(t,R);return s&&console.warn(s),n?r.createElement(e,i({image:n},o)):(console.warn("Image not loaded",a),null)}}const W=A((function(e){let{as:t="div",className:a,class:n,style:s,image:o,loading:p="lazy",imgClassName:m,imgStyle:h,backgroundColor:f,objectFit:y,objectPosition:b}=e,v=l(e,k);if(!o)return console.warn("[gatsby-plugin-image] Missing image prop"),null;n&&(a=n),h=i({objectFit:y,objectPosition:b,backgroundColor:f},h);const{width:w,height:S,layout:T,images:C,placeholder:I,backgroundColor:_}=o,j=c(w,S,T),{style:q,className:O}=j,P=l(j,L),R={fallback:void 0,sources:[]};return C.fallback&&(R.fallback=i({},C.fallback,{srcSet:C.fallback.srcSet?N(C.fallback.srcSet):void 0})),C.sources&&(R.sources=C.sources.map((e=>i({},e,{srcSet:N(e.srcSet)})))),r.createElement(t,i({},P,{style:i({},q,s,{backgroundColor:f}),className:O+(a?" "+a:"")}),r.createElement(g,{layout:T,width:w,height:S},r.createElement(E,i({},d(I,!1,T,w,S,_,y,b))),r.createElement(x,i({"data-gatsby-image-ssr":"",className:m},v,u("eager"===p,!1,R,p,h)))))})),z=function(e,t){for(var a=arguments.length,r=new Array(a>2?a-2:0),n=2;n<a;n++)r[n-2]=arguments[n];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?s().number.apply(s(),[e,t].concat(r)):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.")},D=new Set(["fixed","fullWidth","constrained"]),M={src:s().string.isRequired,alt:S,width:z,height:z,sizes:s().string,layout:e=>{if(void 0!==e.layout&&!D.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}};W.displayName="StaticImage",W.propTypes=M;const F=A(P);F.displayName="StaticImage",F.propTypes=M},4922:function(e,t,a){a.d(t,{Z:function(){return l}});var r=a(7294);function n(e){return r.createElement("div",null,r.createElement("div",{id:e.cardTitle,className:"text-2xl primary-text"},e.cardTitle),r.createElement("div",{className:"text-2xl font-bold pt-1 paragraph-color-text"},e.cardSubTitle),r.createElement("div",{className:"text-lg font-bold pt-1 paragraph-color-text"},e.cardDate),r.createElement("div",{className:"text-xl pt-3 paragraph-text"},e.cardData))}var s=a(1883);let i="group items-center last:mb-20 max-w-6xl m-6 mt-16 p-6 dynamic-card";function l(e){return r.createElement(s.Link,{to:e.href,id:"no-link",target:"_blank"},r.createElement("div",{className:i},r.createElement("div",{className:e.video?"pl-1":""},r.createElement(n,{cardTitle:e.cardTitle,cardSubTitle:e.cardSubTitle,cardDate:e.cardDate,cardData:e.cardData,skill:e.skill,href:e.href,video:e.video,image:e.image})),r.createElement("div",{className:e.video?"pt-4":""},r.createElement("div",{dangerouslySetInnerHTML:{__html:e.video}}))))}},5105:function(e,t,a){a.d(t,{Z:function(){return i}});var r=a(7294),n=a(7604),s=a(1883);function i(e){return r.createElement("div",{className:"pl-7 pt-3 text-sm xl:text-base 2xl:text-lg"},r.createElement("a",{href:(0,s.withPrefix)(e.href),id:"no-link",className:"z-50 relative inline-flex items-center justify-start py-3 pr-12 overflow-hidden font-semibold primary-color-text transition-all duration-150 ease-in-out rounded-xl hover:pl-9 hover:pr-3 bg-opacity-0 group"},r.createElement("span",{className:"absolute bottom-0 left-0 w-0 h-full transition-all duration-100 ease-in-out cool-button-sub-bg-color group-hover:w-full"}),r.createElement("span",{className:"absolute right-0 pr-4 duration-200 opacity-0 ease-out group-hover:translate-x-12"},(0,n.q)(e.icon)),r.createElement("span",{className:"absolute left-0 pl-2.5 -translate-x-12 cool-button-text-color group-hover:translate-x-0 ease-out duration-150"},(0,n.q)("arrow")),r.createElement("span",{className:"relative w-full text-left pl-10 transition-colors duration-200 ease-in-out group-hover:cool-button-sub-text-color"},e.buttonTitle)))}}}]);
//# sourceMappingURL=aab919532073ee7819ff4d592468ca1c2a9a9172-45da20d21982ab510372.js.map
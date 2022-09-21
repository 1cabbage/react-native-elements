"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[96911],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(r),m=a,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||o;return r?n.createElement(f,l(l({ref:t},c),{},{components:r})):n.createElement(f,l({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},72360:(e,t,r)=>{r.d(t,{Z:()=>l});var n=r(67294),a=r(86010);const o="tabItem_OmH5";function l(e){var t=e.children,r=e.hidden,l=e.className;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,l),hidden:r},t)}},9877:(e,t,r)=>{r.d(t,{Z:()=>m});var n=r(87462),a=r(67294),o=r(72389),l=r(67392),i=r(7094),s=r(12466),u=r(86010);const c="tabList_uSqn",d="tabItem_LplD";function p(e){var t,r,o,p=e.lazy,m=e.block,f=e.defaultValue,v=e.values,b=e.groupId,h=e.className,y=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=v?v:y.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),w=(0,l.l)(g,(function(e,t){return e.value===t.value}));if(w.length>0)throw new Error('Docusaurus error: Duplicate values "'+w.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var k=null===f?f:null!=(t=null!=f?f:null==(r=y.find((function(e){return e.props.default})))?void 0:r.props.value)?t:null==(o=y[0])?void 0:o.props.value;if(null!==k&&!g.some((function(e){return e.value===k})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+g.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var O=(0,i.U)(),N=O.tabGroupChoices,x=O.setTabGroupChoices,E=(0,a.useState)(k),T=E[0],C=E[1],Z=[],j=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=b){var I=N[b];null!=I&&I!==T&&g.some((function(e){return e.value===I}))&&C(I)}var _=function(e){var t=e.currentTarget,r=Z.indexOf(t),n=g[r].value;n!==T&&(j(t),C(n),null!=b&&x(b,n))},P=function(e){var t,r=null;switch(e.key){case"ArrowRight":var n=Z.indexOf(e.currentTarget)+1;r=Z[n]||Z[0];break;case"ArrowLeft":var a=Z.indexOf(e.currentTarget)-1;r=Z[a]||Z[Z.length-1]}null==(t=r)||t.focus()};return a.createElement("div",{className:(0,u.Z)("tabs-container",c)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":m},h)},g.map((function(e){var t=e.value,r=e.label,o=e.attributes;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:function(e){return Z.push(e)},onKeyDown:P,onFocus:_,onClick:_},o,{className:(0,u.Z)("tabs__item",d,null==o?void 0:o.className,{"tabs__item--active":T===t})}),null!=r?r:t)}))),p?(0,a.cloneElement)(y.filter((function(e){return e.props.value===T}))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},y.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==T})}))))}function m(e){var t=(0,o.Z)();return a.createElement(p,(0,n.Z)({key:String(t)},e))}},37047:(e,t,r)=>{r.d(t,{w:()=>s});var n=r(67294),a=r(35742),o=r(14330),l=r(98576),i=r(61720),s=function(){return n.createElement(a.Z,null,n.createElement("style",{type:"text/css"},"\n          @font-face {\n            font-family: 'MaterialIcons';\n            src: url("+l.Z+") format('truetype');\n          }\n          @font-face {\n            font-family: 'FontAwesome';\n            src: url("+i.Z+") format('truetype');\n          }\n          @font-face {\n            font-family: 'MaterialCommunityIcons';\n            src: url("+o.Z+") format('truetype');\n          }\n        "))}},45875:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>f,frontMatter:()=>s,metadata:()=>c,toc:()=>p});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),l=r(37047),i=(r(9877),r(72360),["components"]),s={id:"card_featuredsubtitle",title:"Card.FeaturedSubtitle"},u=void 0,c={unversionedId:"components/card_featuredsubtitle",id:"version-4.0.0-rc.5/components/card_featuredsubtitle",title:"Card.FeaturedSubtitle",description:"Add a featured subtitle to the Card.",source:"@site/versioned_docs/version-4.0.0-rc.5/components/Card.FeaturedSubtitle.mdx",sourceDirName:"components",slug:"/components/card_featuredsubtitle",permalink:"/docs/4.0.0-rc.5/components/card_featuredsubtitle",draft:!1,editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/versioned_docs/version-4.0.0-rc.5/components/Card.FeaturedSubtitle.mdx",tags:[],version:"4.0.0-rc.5",frontMatter:{id:"card_featuredsubtitle",title:"Card.FeaturedSubtitle"},sidebar:"docs",previous:{title:"Card.Divider",permalink:"/docs/4.0.0-rc.5/components/card_divider"},next:{title:"Card.FeaturedTitle",permalink:"/docs/4.0.0-rc.5/components/card_featuredtitle"}},d={},p=[{value:"Import",id:"import",level:2},{value:"Props",id:"props",level:2}],m={toc:p};function f(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(l.w,{mdxType:"IconsStyle"}),(0,o.kt)("p",null,"Add a featured subtitle to the Card.\nThis, Receives all ",(0,o.kt)("a",{parentName:"p",href:"text#props"},"Text")," props."),(0,o.kt)("h2",{id:"import"},"Import"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'import { Card } from "@rneui/themed";\n')),(0,o.kt)("h2",{id:"props"},"Props"),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Includes all ",(0,o.kt)("a",{parentName:"p",href:"text#props"},"Text")," props."))))}f.isMDXComponent=!0},61720:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/fonts/FontAwesome-1e59d2330b4c6deb84b340635ed36249.ttf"},14330:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/fonts/MaterialCommunityIcons-5d42b4e60858731e7b6504400f7e3d8e.ttf"},98576:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/fonts/MaterialIcons-120b4c7bbd155bd0a04dc37d334baced.ttf"}}]);
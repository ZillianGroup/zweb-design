"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1497],{3905:function(e,t,a){a.d(t,{Zo:function(){return s},kt:function(){return c}});var n=a(7378);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),u=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),g=u(a),c=r,m=g["".concat(p,".").concat(c)]||g[c]||d[c]||l;return a?n.createElement(m,i(i({ref:t},s),{},{components:a})):n.createElement(m,i({ref:t},s))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=g;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var u=2;u<l;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},8336:function(e,t,a){a.r(t),a.d(t,{assets:function(){return s},contentTitle:function(){return p},default:function(){return c},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return d}});var n=a(7462),r=a(3366),l=(a(7378),a(3905)),i=["components"],o={},p="TAG",u={unversionedId:"COMPONENTS/DATA-DISPLAY/tag",id:"COMPONENTS/DATA-DISPLAY/tag",title:"TAG",description:"Tag is generally used to mark attributes, dimensions or categories of things.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/COMPONENTS/DATA-DISPLAY/tag.md",sourceDirName:"COMPONENTS/DATA-DISPLAY",slug:"/COMPONENTS/DATA-DISPLAY/tag",permalink:"/docs/COMPONENTS/DATA-DISPLAY/tag",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/COMPONENTS/DATA-DISPLAY/tag.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Tabs",permalink:"/docs/COMPONENTS/DATA-DISPLAY/tabs"},next:{title:"Timeline",permalink:"/docs/COMPONENTS/DATA-DISPLAY/timeline"}},s={},d=[{value:"Installation",id:"installation",level:2},{value:"Import component",id:"import-component",level:2},{value:"API",id:"api",level:2},{value:"Tag Basic Properties",id:"tag-basic-properties",level:3},{value:"Tag Extented Props",id:"tag-extented-props",level:3},{value:"Tag Events",id:"tag-events",level:3},{value:"Example",id:"example",level:2},{value:"Basic usage",id:"basic-usage",level:3},{value:"Set Tag&#39;s size",id:"set-tags-size",level:3},{value:"Set Tag&#39;s style parttern and background",id:"set-tags-style-parttern-and-background",level:3},{value:"With left icon",id:"with-left-icon",level:3},{value:"With close button",id:"with-close-button",level:3}],g={toc:d};function c(e){var t=e.components,a=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,n.Z)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"tag"},"TAG"),(0,l.kt)("p",null,"Tag is generally used to mark attributes, dimensions or categories of things."),(0,l.kt)("h2",{id:"installation"},"Installation"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @illa-design/tag\n")),(0,l.kt)("h2",{id:"import-component"},"Import component"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},'import { Tag } from "@illa-design/tag"\n')),(0,l.kt)("h2",{id:"api"},"API"),(0,l.kt)("h3",{id:"tag-basic-properties"},"Tag Basic Properties"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Props"),(0,l.kt)("th",{parentName:"tr",align:null},"Desc"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"colorScheme"),(0,l.kt)("td",{parentName:"tr",align:null},"Setting backgrount color"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'"white" \\| "blackAlpha" \\| "gray" \\| "grayBlue" \\| "red" \\| "orange" \\| "yellow" \\| "green" \\| "blue" \\| "cyan" \\| "purple"\\| string')),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"gray"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"size"),(0,l.kt)("td",{parentName:"tr",align:null},"Setting size"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'"small" \\| "medium" \\| "large"')),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"small"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"visible"),(0,l.kt)("td",{parentName:"tr",align:null},"Setting whether the Tag is visiable"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"boolean")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"}," -"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"closable"),(0,l.kt)("td",{parentName:"tr",align:null},"Setting whether the Tag is visiable"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"boolean")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"}," -"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"variant"),(0,l.kt)("td",{parentName:"tr",align:null},"Setting style pattern"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'"outline" \\| "fill" \\| "light"')),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"light"))))),(0,l.kt)("h3",{id:"tag-extented-props"},"Tag Extented Props"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Props"),(0,l.kt)("th",{parentName:"tr",align:null},"Desc"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"icon"),(0,l.kt)("td",{parentName:"tr",align:null},"Setting Tag's left icon"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"ReactNode")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"-"))))),(0,l.kt)("h3",{id:"tag-events"},"Tag Events"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Props"),(0,l.kt)("th",{parentName:"tr",align:null},"Desc"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"onClose"),(0,l.kt)("td",{parentName:"tr",align:null},"Callback when the Tag closed"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"() => void")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"-"))))),(0,l.kt)("h2",{id:"example"},"Example"),(0,l.kt)("h3",{id:"basic-usage"},"Basic usage"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"<Tag />\n")),(0,l.kt)("h3",{id:"set-tags-size"},"Set Tag's size"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},'<Tag>Hello</Tag>\n<Tag size="small">Small</Tag>\n<Tag size="medium">Medium</Tag>\n<Tag size="large">Large</Tag>\n')),(0,l.kt)("h3",{id:"set-tags-style-parttern-and-background"},"Set Tag's style parttern and background"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},'<Tag>Hello</Tag>\n<Tag variant="fill" colorScheme="red">Hello</Tag>\n')),(0,l.kt)("h3",{id:"with-left-icon"},"With left icon"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},'<Tag>Hello</Tag>\n<Tag variant="fill" colorScheme="red" icon={<BsFacebook />}>Hello</Tag>\n')),(0,l.kt)("h3",{id:"with-close-button"},"With close button"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},'<Tag>Hello</Tag>\n<Tag variant="fill" colorScheme="red" icon={<BsFacebook />} closable>Hello</Tag>\n')))}c.isMDXComponent=!0}}]);
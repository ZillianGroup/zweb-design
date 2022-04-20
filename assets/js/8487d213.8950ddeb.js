"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1208],{3905:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return m}});var r=n(7378);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var p=r.createContext({}),c=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},u=function(t){var e=c(t.components);return r.createElement(p.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,p=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),d=c(n),m=a,k=d["".concat(p,".").concat(m)]||d[m]||s[m]||l;return n?r.createElement(k,o(o({ref:e},u),{},{components:n})):r.createElement(k,o({ref:e},u))}));function m(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i.mdxType="string"==typeof t?t:a,o[1]=i;for(var c=2;c<l;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2933:function(t,e,n){n.r(e),n.d(e,{assets:function(){return u},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return s}});var r=n(7462),a=n(3366),l=(n(7378),n(3905)),o=["components"],i={},p="Backtop",c={unversionedId:"COMPONENTS/OTHERS/back-top",id:"COMPONENTS/OTHERS/back-top",title:"Backtop",description:"When scrolling to the height, a button to return to the top will appear in the lower right corner.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/COMPONENTS/OTHERS/back-top.md",sourceDirName:"COMPONENTS/OTHERS",slug:"/COMPONENTS/OTHERS/back-top",permalink:"/docs/COMPONENTS/OTHERS/back-top",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/COMPONENTS/OTHERS/back-top.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Anchor",permalink:"/docs/COMPONENTS/OTHERS/anchor"},next:{title:"ConfigProvider",permalink:"/docs/COMPONENTS/OTHERS/config-provider"}},u={},s=[{value:"Installation",id:"installation",level:2},{value:"Import component",id:"import-component",level:2},{value:"API",id:"api",level:2},{value:"Backtop Basic Properties",id:"backtop-basic-properties",level:3},{value:"Examples",id:"examples",level:2},{value:"Basic usage",id:"basic-usage",level:3},{value:"Set visible height",id:"set-visible-height",level:3},{value:"Set duration to scroll to top",id:"set-duration-to-scroll-to-top",level:3}],d={toc:s};function m(t){var e=t.components,n=(0,a.Z)(t,o);return(0,l.kt)("wrapper",(0,r.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"backtop"},"Backtop"),(0,l.kt)("p",null,"When scrolling to the height, a button to return to the top will appear in the lower right corner."),(0,l.kt)("h2",{id:"installation"},"Installation"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @illa-design/backtop\n")),(0,l.kt)("h2",{id:"import-component"},"Import component"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},'import { Backtop } from "@illa-design/backtop"\n')),(0,l.kt)("h2",{id:"api"},"API"),(0,l.kt)("h3",{id:"backtop-basic-properties"},"Backtop Basic Properties"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Props"),(0,l.kt)("th",{parentName:"tr",align:null},"Desc"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"visibleHeight"),(0,l.kt)("td",{parentName:"tr",align:null},"When scrolled to this height, the back to top button is visible."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"number")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"400"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"target"),(0,l.kt)("td",{parentName:"tr",align:null},"Set the element whose scroll event needs to be listened to"),(0,l.kt)("td",{parentName:"tr",align:null},"`() => HTMLElement"),(0,l.kt)("td",{parentName:"tr",align:null},"Window`")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"onClick"),(0,l.kt)("td",{parentName:"tr",align:null},"Callback function when click returns to top."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"() => void")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"-"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"easing"),(0,l.kt)("td",{parentName:"tr",align:null},"Scroll to top easing type"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"quartOut"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"duration"),(0,l.kt)("td",{parentName:"tr",align:null},"Time to scroll to top."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"number")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"400"))))),(0,l.kt)("h2",{id:"examples"},"Examples"),(0,l.kt)("h3",{id:"basic-usage"},"Basic usage"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"<Backtop />\n")),(0,l.kt)("h3",{id:"set-visible-height"},"Set visible height"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"<TestBackTop visibleHeight={400} />\n")),(0,l.kt)("h3",{id:"set-duration-to-scroll-to-top"},"Set duration to scroll to top"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"<TestBackTop duration={400} />\n")))}m.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[336],{3905:function(t,e,n){n.d(e,{Zo:function(){return m},kt:function(){return u}});var a=n(7378);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function d(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),o=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},m=function(t){var e=o(t.components);return a.createElement(p.Provider,{value:e},t.children)},k={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},N=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,m=d(t,["components","mdxType","originalType","parentName"]),N=o(n),u=r,g=N["".concat(p,".").concat(u)]||N[u]||k[u]||l;return n?a.createElement(g,i(i({ref:e},m),{},{components:n})):a.createElement(g,i({ref:e},m))}));function u(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=N;var d={};for(var p in e)hasOwnProperty.call(e,p)&&(d[p]=e[p]);d.originalType=t,d.mdxType="string"==typeof t?t:r,i[1]=d;for(var o=2;o<l;o++)i[o]=n[o];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}N.displayName="MDXCreateElement"},1174:function(t,e,n){n.r(e),n.d(e,{assets:function(){return m},contentTitle:function(){return p},default:function(){return u},frontMatter:function(){return d},metadata:function(){return o},toc:function(){return k}});var a=n(7462),r=n(3366),l=(n(7378),n(3905)),i=["components"],d={},p="\u6811\u9009\u62e9\u5668",o={unversionedId:"COMPONENTS/OTHERS/tree-select",id:"COMPONENTS/OTHERS/tree-select",title:"\u6811\u9009\u62e9\u5668",description:"\u4ee5\u6811\u7ed3\u6784\u5c55\u793a\u9009\u9879\u7684\u9009\u62e9\u5668",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/COMPONENTS/OTHERS/tree-select.md",sourceDirName:"COMPONENTS/OTHERS",slug:"/COMPONENTS/OTHERS/tree-select",permalink:"/zh-cn/docs/COMPONENTS/OTHERS/tree-select",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/COMPONENTS/OTHERS/tree-select.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u9875\u5934",permalink:"/zh-cn/docs/COMPONENTS/OTHERS/page-header"},next:{title:"\u89e6\u53d1\u5668",permalink:"/zh-cn/docs/COMPONENTS/OTHERS/trigger"}},m={},k=[{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:2},{value:"\u5f15\u7528\u7ec4\u4ef6",id:"\u5f15\u7528\u7ec4\u4ef6",level:2},{value:"\u7ec4\u4ef6\u63a5\u53e3(API)",id:"\u7ec4\u4ef6\u63a5\u53e3api",level:2},{value:"TreeSelect \u57fa\u7840\u5c5e\u6027",id:"treeselect-\u57fa\u7840\u5c5e\u6027",level:3},{value:"TreeSelect \u4e8b\u4ef6",id:"treeselect-\u4e8b\u4ef6",level:3},{value:"\u4f7f\u7528\u65b9\u6cd5",id:"\u4f7f\u7528\u65b9\u6cd5",level:3},{value:"\u57fa\u7840\u7528\u6cd5",id:"\u57fa\u7840\u7528\u6cd5",level:3}],N={toc:k};function u(t){var e=t.components,n=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,a.Z)({},N,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u6811\u9009\u62e9\u5668"},"\u6811\u9009\u62e9\u5668"),(0,l.kt)("p",null,"\u4ee5\u6811\u7ed3\u6784\u5c55\u793a\u9009\u9879\u7684\u9009\u62e9\u5668"),(0,l.kt)("h2",{id:"\u5b89\u88c5"},"\u5b89\u88c5"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @illa-design/treeselect\n")),(0,l.kt)("h2",{id:"\u5f15\u7528\u7ec4\u4ef6"},"\u5f15\u7528\u7ec4\u4ef6"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},'import { TreeSelect } from "@illa-dedign/treeselect"\n')),(0,l.kt)("h2",{id:"\u7ec4\u4ef6\u63a5\u53e3api"},"\u7ec4\u4ef6\u63a5\u53e3(API)"),(0,l.kt)("h3",{id:"treeselect-\u57fa\u7840\u5c5e\u6027"},"TreeSelect \u57fa\u7840\u5c5e\u6027"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u540d"),(0,l.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"multiple"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u652f\u6301\u591a\u9009"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"boolean")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"-"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"defaultValue"),(0,l.kt)("td",{parentName:"tr",align:null},"\u9009\u62e9\u6846\u7684\u9ed8\u8ba4\u503c"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string \\| string[] \\| { label: ReactNode; value: string; disabled?: boolean } \\| { label: ReactNode; value: string; disabled?: boolean }[]")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"-"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"value"),(0,l.kt)("td",{parentName:"tr",align:null},"\u9009\u4e2d\u503c"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string \\| string[] \\| { label: ReactNode; value: string; disabled?: boolean } \\| { label: ReactNode; value: string; disabled?: boolean }[]")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"-"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"treeData"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6570\u636e"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"TreeSelectDataType[]")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"-"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"labelInValue"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8bbe\u7f6e value \u683c\u5f0f\u3002\u9ed8\u8ba4\u662f ",(0,l.kt)("inlineCode",{parentName:"td"},"string"),"\uff0c\u8bbe\u7f6e\u4e3a ",(0,l.kt)("inlineCode",{parentName:"td"},"true")," \u65f6\u5019\uff0cvalue \u683c\u5f0f\u4e3a\uff1a ",(0,l.kt)("inlineCode",{parentName:"td"},"{ label: string, value: string }")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"boolean")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"-"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"treeCheckable"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u5c55\u793a\u590d\u9009\u6846"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"boolean")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"-"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"treeCheckStrictly"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7236\u5b50\u8282\u70b9\u662f\u5426\u5173\u8054"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"boolean")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"-"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"treeProps"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53ef\u4ee5\u63a5\u53d7\u6240\u6709 Tree \u7ec4\u4ef6\u7684\u53c2\u6570"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Partial<TreeProps>")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"-"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"triggerProps"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53ef\u4ee5\u63a5\u53d7\u6240\u6709 Trigger \u7ec4\u4ef6\u7684\u53c2\u6570"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Partial<TriggerProps>")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"-"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"notFoundContent"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6ca1\u6709\u6570\u636e\u65f6\u663e\u793a\u7684\u5185\u5bb9"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"ReactNode")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"-"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"placeholder"),(0,l.kt)("td",{parentName:"tr",align:null},"\u9009\u62e9\u6846\u9ed8\u8ba4\u6587\u5b57\u3002"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"-"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"showSearch"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4f7f\u5355\u9009\u6a21\u5f0f\u53ef\u641c\u7d22\uff0c\u4f20\u5165 ",(0,l.kt)("inlineCode",{parentName:"td"},"{ retainInputValue: true }")," \u5728\u641c\u7d22\u6846\u805a\u7126\u65f6\u4fdd\u7559\u73b0\u6709\u5185\u5bb9\u4f20\u5165 ",(0,l.kt)("inlineCode",{parentName:"td"},"{ retainInputValueWhileSelect: true }")," \u5728\u591a\u9009\u9009\u62e9\u65f6\u4fdd\u7559\u8f93\u5165\u6846\u5185\u5bb9\u3002"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"boolean \\| { retainInputValue?: boolean; retainInputValueWhileSelect?: boolean }")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"-"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"size"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5206\u522b\u4e0d\u540c\u5c3a\u5bf8\u7684\u9009\u62e9\u5668\u3002\u5bf9\u5e94 ",(0,l.kt)("inlineCode",{parentName:"td"},"24px"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"28px"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"32px"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"36px")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'"small" \\| "medium" \\| "large"')),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"medium"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"disabled"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u4e3a\u7981\u7528\u72b6\u6001\u3002"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"boolean")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"-"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"error"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u4e3a\u9519\u8bef\u72b6\u6001\u3002"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"boolean")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"-"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"loading"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u4e3a\u52a0\u8f7d\u72b6\u6001\u3002"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"boolean")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"-"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"allowClear"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5141\u8bb8\u6e05\u9664\u503c\u3002"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"boolean")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"-"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"allowCreate"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u5141\u8bb8\u901a\u8fc7\u8f93\u5165\u521b\u5efa\u65b0\u7684\u9009\u9879\u3002"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"boolean")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"-"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"maxTagCount"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6700\u591a\u663e\u793a\u591a\u5c11\u4e2a ",(0,l.kt)("inlineCode",{parentName:"td"},"tag"),"\uff0c\u4ec5\u5728\u591a\u9009\u6216\u6807\u7b7e\u6a21\u5f0f\u6709\u6548\u3002"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"number")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"-"))))),(0,l.kt)("h3",{id:"treeselect-\u4e8b\u4ef6"},"TreeSelect \u4e8b\u4ef6"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u540d"),(0,l.kt)("th",{parentName:"tr",align:"center"},"\u63cf\u8ff0"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"filterTreeNode"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u6839\u636e\u8f93\u5165\u7684\u503c\u7b5b\u9009\u6570\u636e\u3002\u63a5\u6536 ",(0,l.kt)("inlineCode",{parentName:"td"},"inputText")," \u548c ",(0,l.kt)("inlineCode",{parentName:"td"},"treeNode")," \u4e24\u4e2a\u53c2\u6570\uff0c\u5f53 ",(0,l.kt)("inlineCode",{parentName:"td"},"option")," \u7b26\u5408\u7b5b\u9009\u6761\u4ef6\u65f6\uff0c\u8fd4\u56de ",(0,l.kt)("inlineCode",{parentName:"td"},"true"),"\uff0c\u53cd\u4e4b\u8fd4\u56de ",(0,l.kt)("inlineCode",{parentName:"td"},"false"),"\u3002treeNode \u662f\u6811\u8282\u70b9\u3002"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"(inputText, treeNode: any) => boolean \\| void")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"-"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"onChange"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u9009\u4e2d\u503c\u6539\u53d8\u7684\u56de\u8c03"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"(value: any) => void")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"-"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"loadMore"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u52a8\u6001\u52a0\u8f7d\u6570\u636e"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"(treeNode: NodeProps, dataRef) => void")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"-"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"onSearch"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u81ea\u5b9a\u4e49\u641c\u7d22\u65b9\u6cd5\u3002\u672a\u5b9a\u4e49\u7684\u65f6\u5019\u5c06\u4f1a\u5728\u5df2\u7ecf\u5728\u6570\u636e\u4e2d\u8fdb\u884c\u641c\u7d22"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"(inputValue: string) => void")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"-"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"onClear"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u70b9\u51fb\u6e05\u9664\u65f6\u89e6\u53d1\uff0c\u53c2\u6570\u662f\u5f53\u524d\u4e0b\u62c9\u6846\u7684\u5c55\u5f00\u72b6\u6001\u3002"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"(visible: boolean) => void")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"-"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"onVisibleChange"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u4e0b\u62c9\u6846\u6536\u8d77\u5c55\u5f00\u65f6\u89e6\u53d1"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"(visible: boolean) => void")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"-"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"onClick"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u9f20\u6807\u70b9\u51fb\u4e0b\u62c9\u6846\u65f6\u7684\u56de\u8c03"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"(e) => void")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"-"))))),(0,l.kt)("h3",{id:"\u4f7f\u7528\u65b9\u6cd5"},"\u4f7f\u7528\u65b9\u6cd5"),(0,l.kt)("h3",{id:"\u57fa\u7840\u7528\u6cd5"},"\u57fa\u7840\u7528\u6cd5"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},'const TreeData = [\n  {\n    title: "Trunk 0-0",\n    key: "0-0",\n    children: [\n      {\n        title: "Leaf",\n        key: "0-0-1",\n      },\n      {\n        title: "Branch 0-0-2",\n        key: "0-0-2",\n        disableCheckbox: true,\n        children: [\n          {\n            title: "Leaf",\n            key: "0-0-2-1"\n          }\n        ]\n      },\n    ],\n  },\n  {\n    title: "Trunk 0-1",\n    key: "0-1",\n    children: [\n      {\n        title: "Branch 0-1-1",\n        key: "0-1-1",\n        checkable: false,\n        children: [\n          {\n            title: "Leaf",\n            key: "0-1-1-1",\n          },\n          {\n            title: "Leaf",\n            key: "0-1-1-2",\n          },\n        ]\n      },\n      {\n        title: "Leaf",\n        key: "0-1-2",\n      },\n    ],\n  },\n];\n<TreeSelect\n  multiple\n  showSearch\n  allowClear\n  treeData={TreeData}\n/>\n')))}u.isMDXComponent=!0}}]);
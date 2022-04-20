"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7763],{3905:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return c}});var a=n(7378);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function d(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),o=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):d(d({},e),t)),n},u=function(t){var e=o(t.components);return a.createElement(p.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},k=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),k=o(n),c=r,N=k["".concat(p,".").concat(c)]||k[c]||m[c]||l;return n?a.createElement(N,d(d({ref:e},u),{},{components:n})):a.createElement(N,d({ref:e},u))}));function c(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,d=new Array(l);d[0]=k;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i.mdxType="string"==typeof t?t:r,d[1]=i;for(var o=2;o<l;o++)d[o]=n[o];return a.createElement.apply(null,d)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},2286:function(t,e,n){n.r(e),n.d(e,{assets:function(){return u},contentTitle:function(){return p},default:function(){return c},frontMatter:function(){return i},metadata:function(){return o},toc:function(){return m}});var a=n(7462),r=n(3366),l=(n(7378),n(3905)),d=["components"],i={},p="Card\u5361\u7247",o={unversionedId:"COMPONENTS/DATA-DISPLAY/card",id:"COMPONENTS/DATA-DISPLAY/card",title:"Card\u5361\u7247",description:"\u5c06\u4fe1\u606f\u5206\u7c7b\u540e\u5206\u6807\u9898\u3001\u8be6\u60c5\u7b49\u533a\u57df\u805a\u5408\u5c55\u73b0\uff0c\u4e00\u822c\u4f5c\u4e3a\u7b80\u6d01\u4ecb\u7ecd\u6216\u8005\u4fe1\u606f\u7684\u5927\u76d8\u548c\u5165\u53e3\u3002",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/COMPONENTS/DATA-DISPLAY/card.md",sourceDirName:"COMPONENTS/DATA-DISPLAY",slug:"/COMPONENTS/DATA-DISPLAY/card",permalink:"/zh-cn/docs/COMPONENTS/DATA-DISPLAY/card",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/COMPONENTS/DATA-DISPLAY/card.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u65e5\u5386",permalink:"/zh-cn/docs/COMPONENTS/DATA-DISPLAY/calendar"},next:{title:"Collapse\u6298\u53e0\u9762\u677f",permalink:"/zh-cn/docs/COMPONENTS/DATA-DISPLAY/collapse"}},u={},m=[{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:2},{value:"\u5f15\u7528\u7ec4\u4ef6",id:"\u5f15\u7528\u7ec4\u4ef6",level:2},{value:"\u7ec4\u4ef6\u63a5\u53e3\uff08API\uff09",id:"\u7ec4\u4ef6\u63a5\u53e3api",level:2},{value:"Card \u57fa\u7840\u5c5e\u6027",id:"card-\u57fa\u7840\u5c5e\u6027",level:3},{value:"cardMeta\u57fa\u7840\u5c5e\u6027",id:"cardmeta\u57fa\u7840\u5c5e\u6027",level:3},{value:"cardGrid \u57fa\u7840\u5c5e\u6027",id:"cardgrid-\u57fa\u7840\u5c5e\u6027",level:3},{value:"\u4f7f\u7528\u65b9\u6cd5",id:"\u4f7f\u7528\u65b9\u6cd5",level:2},{value:"\u57fa\u7840\u7528\u6cd5",id:"\u57fa\u7840\u7528\u6cd5",level:3},{value:"\u8bbe\u7f6ecardMeta",id:"\u8bbe\u7f6ecardmeta",level:3},{value:"\u8bbe\u7f6eCardGrid",id:"\u8bbe\u7f6ecardgrid",level:3}],k={toc:m};function c(t){var e=t.components,n=(0,r.Z)(t,d);return(0,l.kt)("wrapper",(0,a.Z)({},k,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"card\u5361\u7247"},"Card\u5361\u7247"),(0,l.kt)("p",null,"\u5c06\u4fe1\u606f\u5206\u7c7b\u540e\u5206\u6807\u9898\u3001\u8be6\u60c5\u7b49\u533a\u57df\u805a\u5408\u5c55\u73b0\uff0c\u4e00\u822c\u4f5c\u4e3a\u7b80\u6d01\u4ecb\u7ecd\u6216\u8005\u4fe1\u606f\u7684\u5927\u76d8\u548c\u5165\u53e3\u3002"),(0,l.kt)("h2",{id:"\u5b89\u88c5"},"\u5b89\u88c5"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @illa-design/card\n")),(0,l.kt)("h2",{id:"\u5f15\u7528\u7ec4\u4ef6"},"\u5f15\u7528\u7ec4\u4ef6"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},'import { Card } from "@illa-design/card"\n')),(0,l.kt)("h2",{id:"\u7ec4\u4ef6\u63a5\u53e3api"},"\u7ec4\u4ef6\u63a5\u53e3\uff08API\uff09"),(0,l.kt)("h3",{id:"card-\u57fa\u7840\u5c5e\u6027"},"Card \u57fa\u7840\u5c5e\u6027"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Props"),(0,l.kt)("th",{parentName:"tr",align:null},"Desc"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"bordered"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u6709\u8fb9\u6846"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"boolean ")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"true"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"loading"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u4e3a\u52a0\u8f7d\u4e2d"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"boolean ")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"false"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"hoverable"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u53ef\u60ac\u6d6e"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"boolean ")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"false"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"size"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5361\u7247\u5c3a\u5bf8"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'"small" \\| "medium"')),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'"medium"'))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"headerStyle"),(0,l.kt)("td",{parentName:"tr",align:null},"\u81ea\u5b9a\u4e49\u6807\u9898\u533a\u57df\u6837\u5f0f"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"object ")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"-"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"bodyStyle"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5185\u5bb9\u533a\u57df\u81ea\u5b9a\u4e49\u6837\u5f0f"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"object ")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"-"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"title"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5361\u7247\u6807\u9898"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string ")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"-"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"extra"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5361\u7247\u53f3\u4e0a\u89d2\u7684\u64cd\u4f5c\u533a\u57df"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string ")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"-"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"cover"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5361\u7247\u5c01\u9762"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string ")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"-"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"actions"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5361\u7247\u5e95\u90e8\u7684\u64cd\u4f5c\u7ec4"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string ")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"-"))))),(0,l.kt)("h3",{id:"cardmeta\u57fa\u7840\u5c5e\u6027"},"cardMeta\u57fa\u7840\u5c5e\u6027"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Props"),(0,l.kt)("th",{parentName:"tr",align:null},"Desc"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"title"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6807\u9898"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string \\| ReactNode ")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"-"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"description"),(0,l.kt)("td",{parentName:"tr",align:null},"\u63cf\u8ff0"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string \\|ReactNode ")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"-"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"avatar"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5934\u50cf"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"ReactNode ")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"-"))))),(0,l.kt)("h3",{id:"cardgrid-\u57fa\u7840\u5c5e\u6027"},"cardGrid \u57fa\u7840\u5c5e\u6027"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Props"),(0,l.kt)("th",{parentName:"tr",align:null},"Desc"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"hoverable"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u53ef\u4ee5\u60ac\u6d6e"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"boolean")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"-"))))),(0,l.kt)("h2",{id:"\u4f7f\u7528\u65b9\u6cd5"},"\u4f7f\u7528\u65b9\u6cd5"),(0,l.kt)("h3",{id:"\u57fa\u7840\u7528\u6cd5"},"\u57fa\u7840\u7528\u6cd5"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},'<Card size="small" title="small" extra={<Link>More</Link>}>\n  <p>Hello</p>\n  <p>Hello</p>\n  <p>Hello</p>\n</Card>\n')),(0,l.kt)("h3",{id:"\u8bbe\u7f6ecardmeta"},"\u8bbe\u7f6ecardMeta"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},'<Card actions={[<LikeIcon />, <ShareIcon />, <MoreIcon />]}>\n  <Meta title="CardMeta" description="MetaContent" avatar={<Avatar />} />\n</Card>\n')),(0,l.kt)("h3",{id:"\u8bbe\u7f6ecardgrid"},"\u8bbe\u7f6eCardGrid"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},'<Card bordered={true} style={{ width: "100%" }}>\n  {new Array(7).fill(null).map((_, index) => {\n    const hoverable = index % 2 === 0\n    return (\n      <CardGrid key={index} hoverable={hoverable} style={{ width: "25%" }}>\n        <Card\n          style={{ width: "100%" }}\n          title={`Card${index}`}\n          extra={<Link>More</Link>}\n        >\n          {new Array(2).fill(null).map((_, index) => (\n            <p style={{ margin: 0 }} key={index}>\n              {hoverable ? "Card allow to hover" : "Card content"}\n            </p>\n          ))}\n        </Card>\n      </CardGrid>\n    )\n  })}\n</Card>\n')))}c.isMDXComponent=!0}}]);
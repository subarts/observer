(()=>{var e={};e.id=497,e.ids=[497],e.modules={5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},5528:e=>{"use strict";e.exports=require("next/dist\\client\\components\\action-async-storage.external.js")},1877:e=>{"use strict";e.exports=require("next/dist\\client\\components\\request-async-storage.external.js")},5319:e=>{"use strict";e.exports=require("next/dist\\client\\components\\static-generation-async-storage.external.js")},9491:e=>{"use strict";e.exports=require("assert")},2361:e=>{"use strict";e.exports=require("events")},7147:e=>{"use strict";e.exports=require("fs")},3685:e=>{"use strict";e.exports=require("http")},5687:e=>{"use strict";e.exports=require("https")},2037:e=>{"use strict";e.exports=require("os")},1017:e=>{"use strict";e.exports=require("path")},2781:e=>{"use strict";e.exports=require("stream")},6224:e=>{"use strict";e.exports=require("tty")},7310:e=>{"use strict";e.exports=require("url")},3837:e=>{"use strict";e.exports=require("util")},9796:e=>{"use strict";e.exports=require("zlib")},885:(e,t,s)=>{"use strict";s.r(t),s.d(t,{GlobalError:()=>i.a,__next_app__:()=>p,originalPathname:()=>u,pages:()=>l,routeModule:()=>x,tree:()=>d});var r=s(7096),o=s(6132),n=s(7284),i=s.n(n),a=s(2564),c={};for(let e in a)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(c[e]=()=>a[e]);s.d(t,c);let d=["",{children:["bonds",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(s.bind(s,1419)),"F:\\projects\\react\\observer\\observer\\src\\app\\bonds\\page.jsx"]}]},{metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(s.bind(s,1488)),"F:\\projects\\react\\observer\\observer\\src\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(s.t.bind(s,9291,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],l=["F:\\projects\\react\\observer\\observer\\src\\app\\bonds\\page.jsx"],u="/bonds/page",p={require:s,loadChunk:()=>Promise.resolve()},x=new r.AppPageRouteModule({definition:{kind:o.x.APP_PAGE,page:"/bonds/page",pathname:"/bonds",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},9465:(e,t,s)=>{Promise.resolve().then(s.bind(s,4946))},4946:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>Bonds});var r=s(784),o=s(9885);let UI_SomeInformation=()=>r.jsx("div",{className:"someInformation",children:r.jsx("h3",{children:"Some Information"})});var n=s(1304),i=s(2262);function bondsAdd(e){return{type:"ADDBONDS",payload:{bonds:[...e]}}}function searchBond(e){return{type:"SEARCHBONDS",searchQuerys:e}}function selectedSort(e){return{type:"SELECTEDSORT",selectSort:e}}let UI_SearchBond=()=>{let e=(0,n.v9)(e=>e.rootReduser.toolKit.searchQuerys),search=e=>{i.Z.dispatch(searchBond(e))};return r.jsx("div",{className:"searchSort",children:(0,r.jsxs)("form",{className:"searchForm",name:"form",children:[r.jsx("b",{children:"search"}),r.jsx("input",{value:e,onChange:e=>search(e.target.value),placeholder:"search"})]})})},UI_SelectSort=()=>{let select=e=>{i.Z.dispatch(selectedSort(e))},e=(0,n.v9)(e=>e.rootReduser.toolKit.selectSort),t="sort by";return r.jsx("div",{children:(0,r.jsxs)("select",{className:"selectSort",onChange:e=>select(e.target.value),value:e,children:[r.jsx("option",{disabled:!0,value:t,children:t}),r.jsx("option",{value:"name",children:"sort by name "}),r.jsx("option",{value:"figi",children:"sort by figi"}),r.jsx("option",{value:"ticker",children:"sort by ticker"})]})})},dispatch=e=>{i.Z.dispatch(e)};var a=s(6093);let BondItem=e=>(0,r.jsxs)("div",{className:"BondDescript",children:[r.jsx("h1",{children:e.bond.name}),(0,r.jsxs)("ul",{children:[(0,r.jsxs)("li",{children:["figi:",e.bond.figi]}),(0,r.jsxs)("li",{children:["ticker:",e.bond.ticker]})]})]});var c=s(2395),d=s(1440),l=s.n(d);let UI_BondsList=()=>{let e=(0,a.v9)(e=>e.rootReduser.toolKit.bonds),t=(0,a.v9)(e=>e.rootReduser.toolKit.searchQuerys),s=(0,a.v9)(e=>e.rootReduser.toolKit.count),n=(0,o.useMemo)(()=>e.filter(e=>e.figi.toLowerCase().includes(t)||e.ticker.toLowerCase().includes(t)||e.name.toLowerCase().includes(t)),[t,e]);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("div",{className:"switchPage",children:[r.jsx("button",{onClick:()=>{dispatch((0,c.xc)())},className:"ButtonList",children:"get prev bonds"}),r.jsx("button",{onClick:()=>{dispatch((0,c.u6)())},className:"ButtonList",children:"get next bonds"})]}),r.jsx("div",{className:"bondsList",children:n.slice(s,s+8).map(e=>r.jsx("div",{className:"bondItem",children:r.jsx(l(),{href:`/bonds/${e.figi}`,children:r.jsx(BondItem,{bond:e})})},e.figi))})]})};var u=s(3258);let GetBonds=async function(){let e=await (0,u.Z)({method:"post",url:"https://invest-public-api.tinkoff.ru/rest/tinkoff.public.invest.api.contract.v1.InstrumentsService/Bonds",headers:{"Content-Type":"application/json",Authorization:"Bearer t.4kDIQbLtHt1ufbZhoW3d7ivHD9kKOFPXzmKXQLxEchyxJhj5JoRRvykSvll1BdYNKG662QXfP-v1PAfzaj1ZsQ"},data:{instrumentStatus:"INSTRUMENT_STATUS_UNSPECIFIED"}});return e},UI_BondsCatalog=()=>{let e=[];return async function(){let t=await GetBonds();e=[...t.data.instruments]}(),(0,r.jsxs)("div",{className:"bonds",children:[r.jsx("h1",{children:"Bonds"}),r.jsx("button",{onClick:()=>{dispatch(bondsAdd(e))},className:"ButtonBonds",children:"get bonds"}),r.jsx(UI_SearchBond,{}),r.jsx(UI_SelectSort,{}),r.jsx(UI_BondsList,{})]})};function Bonds(){return(0,r.jsxs)(r.Fragment,{children:[r.jsx(UI_SomeInformation,{}),r.jsx(UI_BondsCatalog,{})]})}},1419:(e,t,s)=>{"use strict";s.r(t),s.d(t,{$$typeof:()=>i,__esModule:()=>n,default:()=>c});var r=s(5153);let o=(0,r.createProxy)(String.raw`F:\projects\react\observer\observer\src\app\bonds\page.jsx`),{__esModule:n,$$typeof:i}=o,a=o.default,c=a},3881:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>__WEBPACK_DEFAULT_EXPORT__});var r=s(8531);let __WEBPACK_DEFAULT_EXPORT__=e=>{let t=(0,r.fillMetadataSegment)(".",e.params,"favicon.ico");return[{type:"image/x-icon",sizes:"16x16",url:t+""}]}}};var t=require("../../webpack-runtime.js");t.C(e);var __webpack_exec__=e=>t(t.s=e),s=t.X(0,[745,560,440,258,927],()=>__webpack_exec__(885));module.exports=s})();
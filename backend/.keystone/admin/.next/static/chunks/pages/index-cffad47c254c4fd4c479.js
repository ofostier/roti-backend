_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[12],{RNiq:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return m}));var o=r("cxan"),n=r("ERkP"),s=r("J8OT"),c=r("SB1o"),i=r("lDR0"),a=r("NyF8"),l=r("T49u"),u=r("7Rsm"),b=r("egvM"),d=r("Z4DO"),p=r("GBwV"),O=r("ibUV"),g=r("iBAD"),j=r("Bkb1");r("yiKp"),r("b2e3"),r("K6ZL"),r("m3Bd"),r("rkyN"),r("kSZk"),r("r1vM"),r("ONmz"),r("zcq3"),r("jvFD"),r("4/oc"),r("yUr7"),r("z3d9"),r("EezE");const y=({listKey:e,count:t})=>{const{colors:r,palette:o,radii:c,spacing:b}=Object(s.t)(),d=Object(O.c)(e),[p,y]=Object(n.useState)(!1),m=Object(j.useRouter)();return Object(s.n)("div",{css:{position:"relative"}},Object(s.n)(g.a,{href:d.path,css:{backgroundColor:r.background,borderColor:r.border,borderRadius:c.medium,borderWidth:1,display:"inline-block",minWidth:280,padding:b.large,textDecoration:"none",":hover":{borderColor:o.blue400},":hover h3":{textDecoration:"underline"}}},Object(s.n)("h3",{css:{margin:`0 0 ${b.small}px 0`}},d.label," "),"success"===t.type?Object(s.n)("span",{css:{color:r.foreground,textDecoration:"none"}},t.count," item",1!==t.count?"s":""):"error"===t.type?t.message:"loading"===t.type?Object(s.n)(l.a,{label:`Loading count of ${d.plural}`,size:"small",tone:"passive"}):"No access"),Object(s.n)(h,{title:`Create ${d.singular}`,disabled:p,onClick:()=>{y(!0)}},Object(s.n)(i.a,{size:"large"}),Object(s.n)(s.l,null,"Create ",d.singular)),Object(s.n)(a.c,{isOpen:p},Object(s.n)(u.a,{listKey:d.key,onCreate:({id:e})=>{m.push(`/${d.path}/${e}`)},onClose:()=>{y(!1)}})))},h=e=>{const t=Object(s.t)();return Object(s.n)("button",Object(o.a)({css:{alignItems:"center",backgroundColor:t.palette.neutral400,border:0,borderRadius:t.radii.xsmall,color:"white",cursor:"pointer",display:"flex",height:32,justifyContent:"center",outline:0,position:"absolute",right:t.spacing.large,top:t.spacing.large,transition:"background-color 80ms linear",width:32,"&:hover, &:focus":{backgroundColor:t.tones.positive.fill[0]}}},e))},m=()=>{const{adminMeta:{lists:e},visibleLists:t}=Object(O.b)(),r=Object(n.useMemo)((()=>d.a`
    query {
      keystone {
        adminMeta {
          lists {
            key
            fields {
              path
              createView {
                fieldMode
              }
            }
          }
        }
      }
      ${Object.entries(e).map((([e,t])=>`${e}: ${t.gqlNames.listQueryCountName}`)).join("\n")}
    }`),[e]);let{data:o,error:i}=Object(p.a)(r,{errorPolicy:"all"});const a=Object(c.d)(o,null===i||void 0===i?void 0:i.graphQLErrors);return Object(s.n)(b.c,{header:Object(s.n)(s.g,{type:"h3"},"Dashboard")},"loading"===t.state?Object(s.n)(s.b,{css:{height:`calc(100vh - ${b.b}px)`}},Object(s.n)(l.a,{label:"Loading lists",size:"large",tone:"passive"})):Object(s.n)(s.h,{gap:"large",paddingY:"xlarge"},"error"===t.state?Object(s.n)("span",{css:{color:"red"}},t.error instanceof Error?t.error.message:t.error[0].message):Object.keys(e).map((e=>{var r;if(!t.lists.has(e))return null;const n=a.get(e);return"You do not have access to this resource"===(null===(r=n.errors)||void 0===r?void 0:r[0].message)?Object(s.n)(y,{count:{type:"no-access"},key:e,listKey:e}):Object(s.n)(y,{count:o?n.errors?{type:"error",message:n.errors[0].message}:{type:"success",count:o[e]}:{type:"loading"},key:e,listKey:e})}))))}},cbTx:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r("RNiq")}])},lDR0:function(e,t,r){"use strict";r.d(t,"a",(function(){return s}));var o=r("ERkP"),n=r("okno");r("97Jx"),r("m3Bd"),r("J8OT");const s=Object(n.a)(o.createElement(o.Fragment,null,o.createElement("line",{x1:12,y1:5,x2:12,y2:19}),o.createElement("line",{x1:5,y1:12,x2:19,y2:12})),"PlusIcon")},yiKp:function(e,t,r){var o=r("KEM+");function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}e.exports=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e},e.exports.default=e.exports,e.exports.__esModule=!0}},[["cbTx",0,1,2,3,4,6]]]);
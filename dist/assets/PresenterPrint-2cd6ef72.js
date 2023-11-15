import{d,u as _,a as u,c as m,b as p,r as h,o as a,e as n,f as t,t as s,g as r,F as f,h as g,n as v,i as x,j as y,k as b,l as N,m as k,_ as P}from"./index-1fa4a2a0.js";import{N as w}from"./NoteDisplay-6a8f6beb.js";const V={class:"m-4"},L={class:"mb-10"},S={class:"text-4xl font-bold mt-2"},T={class:"opacity-50"},B={class:"text-lg"},C={class:"font-bold flex gap-2"},D={class:"opacity-50"},H=t("div",{class:"flex-auto"},null,-1),j={key:0,class:"border-gray-400/50 mb-8"},z=d({__name:"PresenterPrint",setup(F){_(`
@page {
  size: A4;
  margin-top: 1.5cm;
  margin-bottom: 1cm;
}
* {
  -webkit-print-color-adjust: exact;
}
html,
html body,
html #app,
html #page-root {
  height: auto;
  overflow: auto !important;
}
`),u({title:`Notes - ${m.title}`});const i=p(()=>h.map(o=>{var l;return(l=o.meta)==null?void 0:l.slide}).filter(o=>o!==void 0&&o.noteHTML!==""));return(o,l)=>(a(),n("div",{id:"page-root",style:v(r(x))},[t("div",V,[t("div",L,[t("h1",S,s(r(m).title),1),t("div",T,s(new Date().toLocaleString()),1)]),(a(!0),n(f,null,g(i.value,(e,c)=>(a(),n("div",{key:c,class:"flex flex-col gap-4 break-inside-avoid-page"},[t("div",null,[t("h2",B,[t("div",C,[t("div",D,s(e==null?void 0:e.no)+"/"+s(r(y)),1),b(" "+s(e==null?void 0:e.title)+" ",1),H])]),N(w,{"note-html":e.noteHTML,class:"max-w-full"},null,8,["note-html"])]),c<i.value.length-1?(a(),n("hr",j)):k("v-if",!0)]))),128))])],4))}}),E=P(z,[["__file","/Users/guodian/gdCode/sildev/node_modules/@slidev/client/internals/PresenterPrint.vue"]]);export{E as default};

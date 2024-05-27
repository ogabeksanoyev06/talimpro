import{_ as w}from"./CirCOy6v.js";import{c as y}from"./DKIiWbr2.js";import{s as k,q as b,c as n,a as e,F as u,y as f,v as a,o as s,A as c,w as l,d as g,t as o,z as C,x as z}from"./CxCRX2HS.js";import{_ as B}from"./B2ykxvzB.js";import{_ as V}from"./DWlfqVMk.js";import{u as j}from"./RcUM_SN1.js";import"./C-5SdYIA.js";import"./Dp98Z1pX.js";const F={class:"py-8"},H={class:"container"},M={class:"flex flex-wrap justify-center sm:justify-start gap-2 mb-8"},N={key:0,class:"mb-8 text-center font-bold text-base"},S={key:1,class:"grid gap-6 sm:grid-cols-2 lg:grid-cols-3"},T={class:"flex flex-col overflow-hidden rounded-md border group bg-card hover:shadow-sm"},$={class:"relative aspect-video"},L=["src","alt"],q={class:"flex flex-col gap-y-4 p-4 group-hover:bg-muted/25 transition-all"},A={class:"space-y-2"},D={class:"text-xl font-bold"},E={class:"text-base font-medium text-foreground"},I={class:"text-sm sm:text-base text-muted-foreground/80 line-clamp-2"},R={class:"flex items-center gap-x-4"},U={class:"flex items-center gap-x-2"},Z=e("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","aria-hidden":"true",role:"img","font-size":"18",class:"iconify iconify--fluent",width:"1em",height:"1em",viewBox:"0 0 20 20"},[e("path",{fill:"currentColor",d:"M5 6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1zm0 6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1zm6-6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1zm0 6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1zM2 5a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3zm3-2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2z"})],-1),G={class:"text-sm sm:text-base"},J={class:"flex items-center gap-x-2"},K=e("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","aria-hidden":"true",role:"img","font-size":"18",class:"iconify iconify--iconoir",width:"1em",height:"1em",viewBox:"0 0 24 24"},[e("g",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.5"},[e("path",{d:"M21 7.6v12.8a.6.6 0 0 1-.6.6H7.6a.6.6 0 0 1-.6-.6V7.6a.6.6 0 0 1 .6-.6h12.8a.6.6 0 0 1 .6.6"}),e("path",{d:"M18 4H4.6a.6.6 0 0 0-.6.6V18m8.909-6.455a.6.6 0 0 0-.909.515v3.88a.6.6 0 0 0 .909.515l3.233-1.94a.6.6 0 0 0 0-1.03z"})])],-1),O={class:"text-sm sm:text-base"},P={class:"flex flex-wrap items-center justify-between gap-1"},ie={__name:"index",setup(Q){const r=j(),{courses:d,categories:_,selectedCategory:p,loading:W}=k(r),x=i=>{r.selectCategory(i)};return b(async()=>{await r.getCategories(),await r.setCategoryId()}),(i,X)=>{var h;const v=w;return s(),n("div",F,[e("div",H,[e("div",M,[(s(!0),n(u,null,f(a(_),t=>(s(),c(V,{key:t.id,variant:t.id===a(p)?"default":"outline",onClick:m=>x(t.id)},{default:l(()=>[g(o(t.name),1)]),_:2},1032,["variant","onClick"]))),128))]),a(_).length>0&&((h=a(d))==null?void 0:h.length)===0?(s(),n("p",N,"Tanlangan kategoriya bo'yicha kurslar mavjud emas")):(s(),n("div",S,[(s(!0),n(u,null,f(a(d),(t,m)=>(s(),c(v,{key:m,to:`/courses/${t.id}`},{default:l(()=>[e("div",T,[e("div",$,[e("img",{src:t.image,alt:t.title},null,8,L)]),e("div",q,[e("div",A,[e("h3",D,o(t.title),1),e("h4",E,o(t.teacher),1),e("p",I,o(t.description),1)]),e("div",R,[e("div",U,[Z,e("span",G,o(t.modules_count)+" ta modul",1)]),e("div",J,[K,e("span",O,o(t.lessons_count)+" ta video",1)])]),e("div",P,[e("div",{class:C(["text-xl font-medium",t.is_free?"line-through":""])},o(("currencyFormat"in i?i.currencyFormat:a(y))(t.price))+" UZS",3),t.is_free?(s(),c(B,{key:0,size:"lg"},{default:l(()=>[g("Tekin")]),_:1})):z("",!0)])])])]),_:2},1032,["to"]))),128))]))])])}}};export{ie as default};

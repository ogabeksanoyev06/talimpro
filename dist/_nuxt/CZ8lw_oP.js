import{_ as M,b as D,a as F,e as I,d as U,c as E}from"./CwNCU5Yx.js";import{_ as G}from"./o8vQCFdg.js";import{L as Z,s as y,r as m,c as n,a as e,t as l,v as i,b as s,w as o,F as S,y as k,D as H,o as a,d as c,A as J,z as K,x as O}from"./CpzEDSKg.js";import{u as P}from"./XPzsa0mC.js";import{_ as Q}from"./DZb4-k9k.js";import{u as W}from"./BZiE1tMp.js";import"./C-5SdYIA.js";import"./BS-Mw1WE.js";import"./Be3E_yng.js";import"./D4tZ26va.js";import"./vlyNUNmt.js";const X={class:"py-8"},Y={class:"container"},ee={class:"flex flex-col justify-center sm:justify-start space-y-3"},te={class:"text-center sm:text-left text-2xl font-bold sm:text-3xl"},se={class:"text-center sm:text-left text-sm text-muted-foreground sm:text-base max-w-[900px]"},oe={class:"grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6"},ae={class:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6"},ne=["onClick"],le={class:"flex flex-col justify-between h-full space-y-1 p-6"},ie={class:"text-base font-semibold leading-none tracking-tight"},ce={class:"flex flex-col gap-y-1"},re=e("p",{class:"text-sm text-muted-foreground"},[c("Umumiy vaqt: "),e("span",{class:"font-semibold"},"40 daqiqa")],-1),de={class:"text-sm text-muted-foreground"},_e={class:"font-semibold"},me={class:"flex justify-center mt-6"},ue={key:0,xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","aria-hidden":"true",role:"img","font-size":"48",class:"animate-spin iconify iconify--ph w-5 h-5 mr-2",width:"1em",height:"1em",viewBox:"0 0 256 256"},pe=e("path",{fill:"currentColor",d:"M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m39.11 25.19C170.24 83.71 155 99.44 135 113.61c-2.25-24.48-8.44-49.8-38.37-67.82a87.89 87.89 0 0 1 70.5 3.4ZM40.18 133.54c28.34-20 49.57-14.68 71.87-4.39c-20.05 14.19-38.86 32.21-39.53 67.11a87.92 87.92 0 0 1-32.34-62.72m136.5 67.73c-31.45-14.55-37.47-35.58-39.71-60c12.72 5.86 26.31 10.75 41.3 10.75c11.33 0 23.46-2.8 36.63-10.08a88.2 88.2 0 0 1-38.22 59.33"},null,-1),fe=[pe],Be={__name:"[id]",setup(he){const f=Z(),u=W(),C=P(),{researches:p,loading:h}=y(u),{hasActiveTest:T}=y(C),g=m(""),r=m(null),d=m(5),$=m([{id:5,name:5},{id:10,name:10},{id:15,name:15},{id:20,name:20},{id:25,name:25},{id:30,name:30}]);function V(_){r.value=_.id}function B(){if(T.value)H("/active-test");else{const _={test_type_id:g.value,specification_id:r.value,question_count:d.value};u.startResearchesTest(_)}}return g.value=f.params.id,u.getResearchById(f.params.id),(_,x)=>{var v,b,w;const q=D,z=F,j=G,A=I,L=U,N=E,R=M;return a(),n("div",X,[e("div",Y,[e("div",ee,[e("h1",te,l((v=i(p))==null?void 0:v.title),1),e("p",se,l((b=i(p))==null?void 0:b.short_description),1)]),e("div",oe,[s(R,{modelValue:d.value,"onUpdate:modelValue":x[0]||(x[0]=t=>d.value=t)},{default:o(()=>[s(z,null,{default:o(()=>[s(q,{placeholder:"Savollar sonini tanlang"})]),_:1}),s(N,null,{default:o(()=>[s(L,null,{default:o(()=>[s(j,null,{default:o(()=>[c("Savollar sonini tanlang")]),_:1}),(a(!0),n(S,null,k($.value,t=>(a(),J(A,{key:t.id,value:t.id},{default:o(()=>[c(l(t.name),1)]),_:2},1032,["value"]))),128))]),_:1})]),_:1})]),_:1},8,["modelValue"])]),e("div",ae,[(a(!0),n(S,null,k((w=i(p))==null?void 0:w.specifications,t=>(a(),n("div",{class:K(["rounded-xl border border-border bg-card text-card-foreground shadow cursor-pointer min-h-[130px] hover:shadow-none transition-all duration-300 bg-[url('https://www.fozilov.uz/assets/Light.png')] bg-[length:200px_200px]",{"border-primary":r.value===t.id}]),key:t.id,onClick:ge=>V(t)},[e("div",le,[e("h3",ie,l(t.name),1),e("div",ce,[re,e("p",de,[c(" Ball: "),e("span",_e,l(t.ball)+" ball",1)])])])],10,ne))),128))]),e("div",me,[s(Q,{onClick:B,disabled:!r.value||!d.value||i(h)},{default:o(()=>[i(h)?(a(),n("svg",ue,fe)):O("",!0),c(" Testni boshlash ")]),_:1},8,["disabled"])])])])}}};export{Be as default};

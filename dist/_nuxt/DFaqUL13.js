import{s as g,M as k,c as _,a as e,b as s,w as a,v as t,o as n,d as r,F as T,y as b,A as v,t as u}from"./CxCRX2HS.js";import{c as w}from"./DKIiWbr2.js";import{d as $}from"./CxMP4GVf.js";import{_ as x,a as o,b as F,c as l,d as S}from"./C2ZNLDNK.js";import{_ as j}from"./Bim6HQen.js";import{u as B}from"./BBfdT3mX.js";import"./C-5SdYIA.js";import"./Dp98Z1pX.js";const Y=e("h4",{class:"text-base sm:text-xl font-semibold tracking-tight mb-4"},"To'lovlar tarixi",-1),D={class:"border rounded-md"},H={key:0,class:"text-primary"},M={key:1,class:"text-red-600"},I={__name:"payment-history",async setup(N){let d,i;const p=B(),{payments_history:h,loading:V}=g(p);return[d,i]=k(()=>p.getPaymentsHistory()),await d,i(),(c,A)=>(n(),_("div",null,[Y,e("div",D,[s(t(S),{class:"font-medium whitespace-nowrap"},{default:a(()=>[s(t(j),null,{default:a(()=>[s(t(x),null,{default:a(()=>[s(t(o),{class:"h-12 px-4 text-center"},{default:a(()=>[r(" # ")]),_:1}),s(t(o),{class:"h-12 px-4 text-center"},{default:a(()=>[r("To'lov turi")]),_:1}),s(t(o),{class:"h-12 px-4 text-center"},{default:a(()=>[r("To'lov miqdori")]),_:1}),s(t(o),{class:"h-12 px-4 text-center"},{default:a(()=>[r(" Sana")]),_:1}),s(t(o),{class:"h-12 px-4 text-center"},{default:a(()=>[r(" Statusi ")]),_:1})]),_:1})]),_:1}),s(t(F),{class:"text-center"},{default:a(()=>{var f;return[(n(!0),_(T,null,b((f=t(h))==null?void 0:f.results,(m,y)=>(n(),v(t(x),{key:y},{default:a(()=>[s(t(l),{class:"p-4 font-medium"},{default:a(()=>[e("span",null,u(y+1),1)]),_:2},1024),s(t(l),null,{default:a(()=>[e("span",null,u(m.payment_system),1)]),_:2},1024),s(t(l),{class:"p-4"},{default:a(()=>[e("span",null,u(("currencyFormat"in c?c.currencyFormat:t(w))(m.amount/100))+" so'm",1)]),_:2},1024),s(t(l),{class:"p-4"},{default:a(()=>[e("span",null,u(("dayjs"in c?c.dayjs:t($))(m.date).format("DD-MM-YYYY HH:mm:ss")),1)]),_:2},1024),s(t(l),{class:"p-4 flex justify-center"},{default:a(()=>[m.completed?(n(),_("span",H,"To'langan")):(n(),_("span",M,"To'lanmagan"))]),_:2},1024)]),_:2},1024))),128))]}),_:1})]),_:1})])]))}};export{I as default};

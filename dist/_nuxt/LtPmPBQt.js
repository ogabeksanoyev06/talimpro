import{X as r,r as n}from"./CpzEDSKg.js";import{u as c}from"./vlyNUNmt.js";const p=r("payment",()=>{const s=c(),a=n([]),o=n(!1);return{getPaymentsHistory:async()=>{o.value=!0;try{const e=await s.get("users/payments/history/");a.value=e}catch(e){console.log(e)}finally{o.value=!1}},createPayment:async e=>{try{const t=await s.post("payments/payme/FillUserBalance/",{amount:e*100});window.open(t.result.link)}catch(t){console.log(t)}},payments_history:a}});export{p as u};

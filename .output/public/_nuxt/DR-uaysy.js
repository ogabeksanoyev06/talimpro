import{d as ae,a as le,_ as oe,c as ce,b as ne}from"./CS16a7aw.js";import{_ as re}from"./B1d8vlf3.js";import{s as ie,L as _e,u as ue,r as de,n as pe,G as O,q as fe,j as me,c as f,a as l,t as _,z as k,v as d,x as h,F as w,y as T,b as t,w as e,o as p,A as P,d as o}from"./CFo8F1Pj.js";import{_ as W}from"./CJi7oGjS.js";import{u as be}from"./C4N4c-UH.js";import"./C-5SdYIA.js";import"./Be3E_yng.js";import"./Um3k6MUM.js";const ve={class:"py-4"},xe={class:"container"},ge={class:"flex flex-col space-y-6"},ye={class:"text-xl font-semibold text-center"},ke={class:"flex flex-col gap-3"},he={class:"question flex items-start text-base"},we={id:"question_number",class:"mr-1"},Te=["innerHTML"],Ce={key:0,class:"!text-green-500"},Be={key:1,class:"text-destructive"},Le={key:2,class:"text-destructive"},Ne={class:"flex flex-col gap-2"},Re={class:"font-semibold"},$e=["innerHTML"],Fe={class:"flex flex-wrap gap-1 justify-center"},Me={class:"border mt-6"},je={class:"text-green-600",style:{"font-size":"large"}},Ge={__name:"dtm-test",setup(He){const g=be(),{testResultId:x,answerLabels:Y}=ie(g),y=_e();ue();const s=de({}),m=pe("testNumber",{default:()=>0}),Z=r=>{r!==m.value&&(m.value=r,C())},C=()=>{var r;s.value=(r=x.value)==null?void 0:r.questions[m.value]},B=O(()=>{var r,b;return(b=(r=x.value)==null?void 0:r.blogs)==null?void 0:b.filter(c=>c.type==="basic"&&c.total_ball>0).reduce((c,u)=>c+u.total_ball,0)}),L=O(()=>{var r,b;return(b=(r=x.value)==null?void 0:r.blogs)==null?void 0:b.filter(c=>c.type==="compulsory"&&c.total_ball>0).reduce((c,u)=>c+u.total_ball,0)});return fe(async()=>{await g.getResultTestId({id:y.query.test_id,type:y.query.test_type}),C()}),me(()=>{m.value=0}),(r,b)=>{var N,R,$,F,M,j,H,z,S,V,A,q,Q,D,E,G;const c=le,u=oe,i=ce,ee=ne,te=ae,se=re;return p(),f("div",ve,[l("div",xe,[l("div",ge,[l("h3",ye,_((N=s.value)==null?void 0:N.science),1),l("div",ke,[l("div",{class:k(["flex flex-col gap-2 border-2 p-4",{"border-green-500":((R=s.value)==null?void 0:R.is_correct)&&(($=s.value)==null?void 0:$.is_picked),"border-destructive":((F=s.value)==null?void 0:F.is_picked)&&!((M=s.value)!=null&&M.is_correct),"border-secondary":!((j=s.value)!=null&&j.is_correct&&((H=s.value)!=null&&H.is_picked))&&!((z=s.value)!=null&&z.is_picked&&!s.value.is_correct)}])},[l("div",he,[l("b",we,_(d(m)+1)+". ",1),l("span",{class:"flex flex-wrap",innerHTML:(S=s.value)==null?void 0:S.question},null,8,Te)]),l("div",null,[(V=s.value)!=null&&V.is_correct&&((A=s.value)!=null&&A.is_picked)?(p(),f("span",Ce,"(To'g'ri)")):h("",!0),(q=s.value)!=null&&q.is_picked&&!((Q=s.value)!=null&&Q.is_correct)?(p(),f("span",Be,"(Xato)")):h("",!0),(D=s.value)!=null&&D.is_picked?h("",!0):(p(),f("span",Le,"(Belgilanmagan)"))]),l("ul",Ne,[(p(!0),f(w,null,T((E=s.value)==null?void 0:E.answers,(n,a)=>{var v,I,U,X,J,K;return p(),f("li",{class:k(["text-sm border rounded flex items-start gap-1 p-3",{"border-green-500 text-green-500":((v=s.value)==null?void 0:v.is_correct)&&((I=s.value)==null?void 0:I.is_picked)&&((U=s.value)==null?void 0:U.answer)===a+1,"text-destructive border-destructive":!((X=s.value)!=null&&X.is_correct)&&((J=s.value)==null?void 0:J.is_picked)&&((K=s.value)==null?void 0:K.answer)===a+1}]),key:a},[l("span",Re,_(d(Y)[a]+")"),1),l("span",{innerHTML:n},null,8,$e)],2)}),128))])],2)]),l("div",null,[l("ul",Fe,[(p(!0),f(w,null,T((G=d(x))==null?void 0:G.questions,(n,a)=>(p(),P(W,{key:a,variant:n.is_correct&&n.is_picked&&n.answer?"default":!n.is_correct&&n.is_picked&&n.answer?"destructive":"secondary",class:k([[n.is_correct&&n.is_picked&&n.answer?"bg-green-500 hover:bg-green-500":"",a===d(m)?"border-foreground":""],"h-8 w-[40px] border-2"]),onClick:v=>Z(a)},{default:e(()=>[o(_(a+1),1)]),_:2},1032,["variant","class","onClick"]))),128))])]),l("div",Me,[t(te,{class:"text-center whitespace-nowrap"},{default:e(()=>[t(ee,null,{default:e(()=>{var n;return[t(u,{class:"text-base"},{default:e(()=>[t(c,{class:"p-4 text-center"},{default:e(()=>[o(" Blog fanlari ")]),_:1}),t(c,{class:"p-4 text-center"},{default:e(()=>[o(" To'g'ri javoblar ")]),_:1}),t(c,{class:"p-4 text-center"},{default:e(()=>[o(" Ball ")]),_:1}),t(c,{class:"p-4 text-center"},{default:e(()=>[o("To'plangan ball ")]),_:1})]),_:1}),(p(!0),f(w,null,T((n=d(g).testResultId)==null?void 0:n.blogs,a=>(p(),P(u,{class:"font-medium",key:a.id},{default:e(()=>[t(i,{class:"p-4"},{default:e(()=>[o(_(a.science),1)]),_:2},1024),t(i,{class:"p-4"},{default:e(()=>[l("span",je,_(a.correct_answers),1)]),_:2},1024),t(i,{class:"p-4"},{default:e(()=>[o(_(a.max_ball),1)]),_:2},1024),t(i,{class:"p-4 text-green-600",style:{"font-size":"large"}},{default:e(()=>{var v;return[o(_((v=a.total_ball)==null?void 0:v.toFixed(1)),1)]}),_:2},1024)]),_:2},1024))),128)),t(u,null,{default:e(()=>[t(i,{class:"p-4 font-bold text-base",colspan:"4"},{default:e(()=>[o(" Natijalar")]),_:1})]),_:1}),t(u,null,{default:e(()=>[t(i,{class:"p-4 font-semibold text-base",colspan:"2"},{default:e(()=>[o(" Asosiy fandan to'plangan ball:")]),_:1}),t(i,{class:"p-4 font-semibold text-base",colspan:"2"},{default:e(()=>{var a;return[o(_((a=d(B))==null?void 0:a.toFixed(1)),1)]}),_:1})]),_:1}),t(u,null,{default:e(()=>[t(i,{class:"p-4 font-semibold text-base",colspan:"2"},{default:e(()=>[o(" Majburiy fandan to'plangan ball:")]),_:1}),t(i,{class:"p-4 font-semibold text-base",colspan:"2"},{default:e(()=>{var a;return[o(_((a=d(L))==null?void 0:a.toFixed(1)),1)]}),_:1})]),_:1}),t(u,null,{default:e(()=>[t(i,{class:"p-4 font-semibold text-base",colspan:"2"},{default:e(()=>[o(" 5 ta fandan to'plangan ball:")]),_:1}),t(i,{class:"p-4 font-semibold text-base",colspan:"2"},{default:e(()=>[o(_((d(B)+d(L)).toFixed(1)),1)]),_:1})]),_:1})]}),_:1})]),_:1})]),t(se,{to:{path:"/compare",query:{dtmTestId:d(y).query.test_id}},class:"mx-auto"},{default:e(()=>[t(W,{class:"w-fit",onClick:r.goToCompareLink},{default:e(()=>[o("Solishtirish")]),_:1},8,["onClick"])]),_:1},8,["to"])])])])}}};export{Ge as default};

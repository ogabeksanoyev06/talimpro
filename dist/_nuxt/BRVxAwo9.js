import{L as x,s as m,r as f,M as y,c as s,a as e,v as t,x as n,t as h,F as w,y as v,o,J as g}from"./CpzEDSKg.js";import{u as b}from"./CSAsdHEp.js";import"./vlyNUNmt.js";const k={class:"sticky top-24"},B={class:"space-y-4"},j={class:"relative aspect-video overflow-hidden border bg-muted"},F={class:"absolute inset-x-0 inset-y-0 h-full w-full"},M={key:0,class:"absolute inset-0 flex flex-col items-center justify-center bg-muted gap-y-4"},V={key:0,stroke:"currentColor",fill:"none","stroke-width":"2",viewBox:"0 0 24 24","stroke-linecap":"round","stroke-linejoin":"round",class:"h-8 w-8 animate-spin",height:"1em",width:"1em",xmlns:"http://www.w3.org/2000/svg"},C=g('<line x1="12" y1="2" x2="12" y2="6"></line><line x1="12" y1="18" x2="12" y2="22"></line><line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line><line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line><line x1="2" y1="12" x2="6" y2="12"></line><line x1="18" y1="12" x2="22" y2="12"></line><line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></line><line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line>',8),S=[C],L=["src"],N={key:1,class:"absolute inset-0 flex flex-col items-center justify-center bg-muted gap-y-4"},q=e("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","aria-hidden":"true",role:"img","font-size":"48",class:"iconify iconify--fxemoji w-10 h-10",width:"1em",height:"1em",viewBox:"0 0 512 512"},[e("path",{fill:"#B1B4B5",d:"M376.749 349.097c-13.531 0-24.5-10.969-24.5-24.5V181.932c0-48.083-39.119-87.203-87.203-87.203c-48.083 0-87.203 39.119-87.203 87.203v82.977c0 13.531-10.969 24.5-24.5 24.5s-24.5-10.969-24.5-24.5v-82.977c0-75.103 61.1-136.203 136.203-136.203s136.203 61.1 136.203 136.203v142.665c0 13.531-10.969 24.5-24.5 24.5"}),e("path",{fill:"#FFB636",d:"M414.115 497.459H115.977c-27.835 0-50.4-22.565-50.4-50.4V274.691c0-27.835 22.565-50.4 50.4-50.4h298.138c27.835 0 50.4 22.565 50.4 50.4v172.367c0 27.836-22.565 50.401-50.4 50.401"}),e("path",{fill:"#FFD469",d:"M109.311 456.841h-2.525c-7.953 0-14.4-6.447-14.4-14.4V279.309c0-7.953 6.447-14.4 14.4-14.4h2.525c7.953 0 14.4 6.447 14.4 14.4v163.132c0 7.953-6.447 14.4-14.4 14.4"})],-1),z=e("p",{class:"text-sm"},"Sizda ushbu videoni ko'rish huquqi mavjud emas.",-1),A=[q,z],D={class:"text-2xl font-bold"},I={class:"flex flex-wrap gap-4"},R=["href"],E=e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"lucide lucide-cloud-download text-blue-500 w-6 h-6 group-hover:animate-bounce"},[e("path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"}),e("path",{d:"M12 12v9"}),e("path",{d:"m8 17 4 4 4-4"})],-1),H={class:"text-sm font-medium"},Q={__name:"index",async setup(J){let l,r;const u=x(),c=b(),{lesson:i,loading:a}=m(c),_=f(u.params.lessonId);return[l,r]=y(()=>c.getLessonsId(_.value)),await l,r(),(T,G)=>(o(),s("div",k,[e("div",B,[e("div",j,[e("div",F,[!t(a)&&t(i).is_free?(o(),s("div",M,[t(a)?(o(),s("svg",V,S)):n("",!0),e("iframe",{src:"https://kinescope.io/embed/"+t(i).video,allow:"autoplay; fullscreen; picture-in-picture; encrypted-media; gyroscope; accelerometer; clipboard-write",frameborder:"0",allowfullscreen:"",style:{position:"absolute",width:"100%",height:"100%",top:"0",left:"0"}},null,8,L)])):n("",!0),t(i).is_free?n("",!0):(o(),s("div",N,A))])]),e("h2",D,h(t(i).name),1),e("div",I,[(o(!0),s(w,null,v(t(i).materials,(d,p)=>(o(),s("a",{target:"_blank",key:p,href:d.file,class:"flex flex-col justify-center items-center space-y-1 group text-center border border-border border-dashed min-w-[150px] py-2 px-4"},[E,e("span",H,h(d.name),1)],8,R))),128))])])]))}};export{Q as default};
import{X as E,u as R,r as a,Y as D}from"./CxCRX2HS.js";import{u as I}from"./Dp98Z1pX.js";import"./leHjnFzJ.js";const J=E("test",()=>{const r=I(),l=R(),{$toast:c}=D(),e=a(!1),g=a([]),u=a([]),i=a([]),y=a([]),p=a([]),h=a([]),v=a([]),T=a({}),m=a([]),f=a([]),d=a([]),b=a(null),S=async t=>{e.value=!0;try{const s=await r.get("tests/test-types/",{params:t});g.value=s}catch(s){console.error("Error getting test types:",s)}finally{e.value=!1}};return{getTestTypes:S,getBlogTestSciences:async()=>{try{const t=await r.get("tests/blogtest-sciences/");u.value=t}catch(t){console.error("Error geting blogtest-sciences:",t)}},getSchoolTestSciences:async t=>{try{const s=await r.get("tests/schooltest-sciences/",{params:t});i.value=s}catch(s){console.error("Error geting schooltest-sciences:",s)}},getBlogTestSubjects:async t=>{try{const s=await r.get("tests/blogtest-subjects/",{params:t});y.value=s}catch(s){console.error("Error geting blogtest-subjects:",s)}},getClasses:async()=>{try{const t=await r.get("tests/schooltest-classes/");p.value=t}catch(t){console.error("Error geting classes:",t)}},getTestResults:async t=>{e.value=!0;try{const s=await r.get("tests/tests-history/",{params:t});h.value=s.sort((o,n)=>{const w=new Date(n.finished||n.started),B=new Date(o.finished||o.started);return w-B})}catch(s){console.error("Error geting test history:",s)}finally{e.value=!1}},getTestResultsById:async t=>{try{const s=await r.get(`tests/tests-history/${t.id}/?type=${t.type}`);v.value=s}catch(s){console.error("Error geting test history by ID:",s)}},getResearchById:async t=>{try{const s=await r.get(`tests/researches/${t}`);T.value=s}catch(s){console.error("Error geting research by ID:",s)}},getDtmTestBlogs:async t=>{try{const s=await r.get("tests/dtmtest-blogs/",{params:t});d.value=s,f.value=s.filter(o=>o.type==="basic"),m.value=s.filter(o=>o.type==="compulsory")}catch(s){console.error("Error:",s)}},buyExams:async(t,s)=>{e.value=!0,b.value=t;try{const o=await r.post("tests/buy-exams/",{test_type:t});o.code===200&&(c.success(o.message),S({category_type:s}))}catch(o){c.error(o.response.data.message)}finally{e.value=!1}},startDtmTest:async t=>{e.value=!0;try{const s=await r.post("tests/dtmtest/start/",t);l.push("/active-test")}catch(s){c.error(s.response.data.message)}finally{e.value=!1}},startSchoolTest:async t=>{var s,o;e.value=!0;try{const n=await r.post("tests/schooltest/start/",t);l.push("/active-test")}catch(n){c.error((o=(s=n.response)==null?void 0:s.data)==null?void 0:o.message)}finally{e.value=!1}},startResearchesTest:async t=>{e.value=!0;try{const s=await r.post("tests/researchtest/start/",t);l.push("/active-test")}catch(s){c.error(s.response.data.message)}finally{e.value=!1}},startBlogTest:async t=>{e.value=!0;try{const s=await r.post("tests/blogtest/start/",t);l.push("/active-test")}catch(s){c.error(s.response.data.message)}finally{e.value=!1}},testTypes:g,blogTestSciences:u,schoolTestSciences:i,blogTestSubjects:y,classes:p,testResults:h,testResultsById:v,researches:T,dtmTestBlogs:d,dtmTestBlogsMainSubjects:f,dtmTestBlogsMandatorySubjects:m,testId:b,loading:e}});export{J as u};

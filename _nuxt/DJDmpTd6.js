import{_ as h}from"./DM2uotmd.js";import{u as p}from"./BEX1QlCk.js";import{q as u}from"./DPCb9KRt.js";import{f as m,g as f,c as o,a as e,F as w,r as v,h as y,o as n,t as s,b as d,w as _,d as r}from"./B5gLw8vu.js";import"./DV3SMaGa.js";const g={class:"blog-outer"},x={class:"blog-wrapper"},k=e("div",{class:"blog-header"},[e("h1",null,"QAComet Case Studies"),e("h2",{class:"subheader"},"A showcase of some recent work we've done")],-1),C={class:"content-wrapper"},b={class:"blog-post-wrapper"},A={class:"date-wrapper"},D={class:"month"},N={class:"day"},B={class:"year"},V={class:"description-wrapper"},j=m({__name:"index",async setup(q){let a,c;const{data:l}=([a,c]=f(()=>p("case-studies",()=>u("/case-studies").only(["title","link","created","shortDescription"]).find())),a=await a,c(),a);return(F,L)=>{const i=h;return n(),o("div",g,[e("div",x,[k,e("div",C,[(n(!0),o(w,null,v(y(l),t=>(n(),o("div",b,[e("div",A,[e("div",D,s(t.created.month),1),e("div",N,s(t.created.day),1),e("div",B,s(t.created.year),1)]),e("div",V,[e("h3",null,[d(i,{to:t.link},{default:_(()=>[r(s(t.title),1)]),_:2},1032,["to"])]),e("p",null,[r(s(t.shortDescription)+" ",1),d(i,{class:"read",to:t.link},{default:_(()=>[r("Continue Reading")]),_:2},1032,["to"])])])]))),256))])])])}}});export{j as default};

import{_ as h}from"./Da31TO5i.js";import{u as _}from"./vgNij5zj.js";import{q as m}from"./UX8adsRV.js";import{u as g}from"./BbYT0a9c.js";import{f as y,h as w,c as n,a as t,F as u,r as f,i as v,o as a,t as o,b as l,w as d,d as i}from"./C6Ft3932.js";import"./DCfhkBef.js";const k={class:"blog-outer"},C={class:"blog-wrapper"},b=t("div",{class:"blog-header"},[t("h1",null,"Playwright Internals"),t("h2",{class:"subheader"},"A series on the inner workings of Microsoft's Playwright framework")],-1),x={class:"content-wrapper"},A={class:"blog-post-wrapper"},P={class:"date-wrapper"},Q={class:"month"},q={class:"day"},D={class:"year"},N={class:"description-wrapper"},E=y({__name:"index",async setup(B){let r,s;const{data:p}=([r,s]=w(()=>_("playwright-posts",()=>m("/playwright").only(["title","link","created","shortDescription"]).sort({"created.number":-1,$numeric:!0}).find())),r=await r,s(),r);return g({title:"QAComet | Internals of Playwright",meta:[{name:"description",content:"Have you ever wanted to dive into the internals of Playwright? This series of posts will take you deep into the inner workings of Playwright."},{property:"og:image",content:"https://qacomet.com/img/playwright/architecture_of_playwright_linkedin.jpg"},{property:"og:image:width",content:"1200"},{property:"og:image:height",content:"630"},{property:"og:title",content:"QAComet | Internals of Playwright"},{property:"og:url",content:"https://qacomet.com/playwright"},{property:"og:site_name",content:"QAComet"},{property:"og:description",content:"Have you ever wanted to dive into the internals of Playwright? This series of posts will take you deep into the inner workings of Playwright."},{property:"og:type",content:"Website"},{name:"twitter:site",content:"@QACometOfficial"},{name:"twitter:creator",content:"@QACometOfficial"},{name:"twitter:card",content:"summary_large_image"}]}),(H,I)=>{const c=h;return a(),n("div",k,[t("div",C,[b,t("div",x,[(a(!0),n(u,null,f(v(p),e=>(a(),n("div",A,[t("div",P,[t("div",Q,o(e.created.month),1),t("div",q,o(e.created.day),1),t("div",D,o(e.created.year),1)]),t("div",N,[t("h3",null,[l(c,{to:e.link},{default:d(()=>[i(o(e.title),1)]),_:2},1032,["to"])]),t("p",null,[i(o(e.shortDescription)+" ",1),l(c,{class:"read",to:e.link},{default:d(()=>[i("Continue Reading")]),_:2},1032,["to"])])])]))),256))])])])}}});export{E as default};
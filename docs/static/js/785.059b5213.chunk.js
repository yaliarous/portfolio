"use strict";(globalThis.webpackChunkportfolio=globalThis.webpackChunkportfolio||[]).push([[785],{219:(e,A,a)=>{a.d(A,{Z:()=>i});var s=a(6896),t=a(9343);const i=()=>(0,t.jsxs)("footer",{className:"footer",children:[(0,t.jsx)("span",{className:"footer__date",children:`\xa9 ${(new Date).getFullYear()} Mohamed ALI AROUS.`}),(0,t.jsx)(s.Z,{secondary:!0,className:"footer__link",href:"/humans.txt",target:"_self",children:"Crafted by yours truly"})]})},9290:(e,A,a)=>{a.d(A,{Z:()=>l});var s=a(8381),t=a(2954),i=a.n(t),r=a(7364),n=a(6434),o=a(9343);const l=({children:e,level:A=1,as:a,align:t="auto",weight:l="medium",className:c,...d})=>{const g=Math.min(Math.max(A,0),4),p=a||`h${Math.max(g,1)}`;return(0,o.jsxs)(s.Fragment,{children:["bold"===l&&(0,o.jsxs)(r.q,{children:[(0,o.jsx)("link",{rel:"preload",href:n,as:"font",crossorigin:""}),(0,o.jsx)("style",{children:`\n              @font-face {\n                font-family: 'Gotham';\n                font-weight: 700;\n                src: url(${n}) format('woff2');\n                font-display: swap;\n              }\n            `})]}),(0,o.jsx)(p,{className:i()(c,"heading",`heading--align-${t}`,`heading--level-${g}`,`heading--weight-${l}`),...d,children:e})]})}},8949:(e,A,a)=>{a.d(A,{Z:()=>w});var s=a(8381),t=a(2954),i=a.n(t),r=a(3643),n=a(1984),o=a(9528),l=a(675),c=a(3944),d=a(7537),g=a(9573),p=a(9211),h=a(318),m=a(2918),E=a(2192),x=a(9343);const j=({onLoad:e,loaded:A,inViewport:a,srcSet:t,placeholder:m,delay:j,src:w,alt:u,play:B=!0,reveal:f,...Q})=>{const v=(0,r.Tb)(),[M,b]=(0,s.useState)(!0),[N,D]=(0,s.useState)(!v),[y,k]=(0,s.useState)(!1),[C,O]=(0,s.useState)(!1),[I,P]=(0,s.useState)(!1),[U,R]=(0,s.useState)(),[S,T]=(0,s.useState)(),z=(0,s.useRef)(),Z=(0,s.useRef)(),L=null===w||void 0===w?void 0:w.endsWith(".mp4"),G=w||(null===t||void 0===t?void 0:t.split(" ")[0]),F=!d.Z&&a;(0,s.useEffect)((()=>{const e=()=>{b(!1)},A=z.current;return A.addEventListener("transitionend",e),function(){A&&A.removeEventListener("transitionend",e)}}),[]),(0,s.useEffect)((()=>{L&&t?(async()=>{const e=await(0,h.ln)(t);T(e)})():L&&T(w)}),[L,w,t]),(0,s.useEffect)((()=>{const{width:e,height:A}=z.current;e&&A&&R({width:e,height:A})}),[]),(0,s.useEffect)((()=>{Z.current&&S&&(B&&a?!a||v||d.Z||(D(!0),Z.current.play()):(D(!1),Z.current.pause()))}),[a,B,v,S]);const J=e=>{e.preventDefault(),Z.current.paused?(D(!0),Z.current.play()):(D(!1),Z.current.pause())},H=()=>{k(!0),P(!0)};return(0,x.jsxs)("div",{className:i()("image__element-wrapper",{"image__element-wrapper--reveal":f,"image__element-wrapper--in-viewport":a}),onMouseOver:L?()=>{k(!0),O(!0)}:void 0,onMouseOut:L?()=>O(!1):void 0,style:{"--delay":(0,p.aU)(j+1e3)},children:[L&&(0,x.jsxs)(s.Fragment,{children:[(0,x.jsx)("video",{muted:!0,loop:!0,playsInline:!0,className:i()("image__element",{"image__element--loaded":A}),autoPlay:!v,role:"img",onLoadStart:e,src:S,"aria-label":u,ref:Z,...Q}),(0,x.jsx)(l.ZP,{in:C||I,onExit:c.nq,onExited:()=>k(!1),timeout:{enter:0,exit:(0,p.zG)(g.T.base.durationS)},children:e=>(0,x.jsx)(E.Z,{visible:y,children:(0,x.jsxs)(n.z,{className:i()("image__button",`image__button--${e}`),onFocus:H,onBlur:()=>P(!1),onClick:J,children:[(0,x.jsx)(o.Z,{icon:N?"pause":"play"}),N?"Pause":"Play"]})})})]}),!L&&(0,x.jsx)("img",{className:i()("image__element",{"image__element--loaded":A}),onLoad:e,decoding:"async",src:F?G:void 0,srcSet:F?t:void 0,width:null===U||void 0===U?void 0:U.width,height:null===U||void 0===U?void 0:U.height,alt:u,...Q}),M&&(0,x.jsx)("img",{"aria-hidden":!0,className:i()("image__placeholder",{"image__placeholder--loaded":A}),style:{"--delay":(0,p.aU)(j)},ref:z,src:m,onLoad:e=>{const{width:A,height:a}=e.target;R({width:A,height:a})},width:null===U||void 0===U?void 0:U.width,height:null===U||void 0===U?void 0:U.height,decoding:"async",alt:"",role:"presentation"})]})},w=({className:e,style:A,reveal:a,delay:t=0,raised:n,src:o,...l})=>{const[c,d]=(0,s.useState)(!1),{themeId:g}=(0,m.Fg)(),h=(0,s.useRef)(),E=(0,r.NM)(h,!(null!==o&&void 0!==o&&o.endsWith(".mp4"))),w=(0,s.useCallback)((()=>{d(!0)}),[]);return(0,x.jsx)("div",{className:i()("image",e,`image--${g}`,{"image--in-viewport":E,"image--reveal":a,"image--raised":n}),style:{...A,"--delay":(0,p.aU)(t)},ref:h,children:(0,x.jsx)(j,{delay:t,onLoad:w,loaded:c,inViewport:E,reveal:a,src:o,...l})})}},6896:(e,A,a)=>{a.d(A,{Z:()=>l});var s=a(8180),t=a(2954),i=a.n(t),r=a(4467),n=a(9343);const o=["txt","png","jpg"],l=({rel:e,target:A,children:a,secondary:t,className:l,href:c,as:d,...g})=>{const p=o.includes(null===c||void 0===c?void 0:c.split(".").pop()),h=(null===c||void 0===c?void 0:c.includes("://"))||"#"===(null===c||void 0===c?void 0:c[0])||p,m=e||(h?"noreferrer noopener":void 0),E=A||(h?"_blank":void 0),x=d||(h?"a":s.rU);return(0,n.jsx)(x,{className:i()("link",l,{"link--secondary":t}),rel:m,href:h?c:void 0,to:h?void 0:c,target:E,onMouseUp:r.I,...g,children:a})}},4433:(e,A,a)=>{a.d(A,{FV:()=>j,XR:()=>E,T4:()=>m,KZ:()=>w,II:()=>x,nU:()=>v,IG:()=>u,d:()=>B,Hr:()=>f,ee:()=>Q});var s=a(8381),t=a(2954),i=a.n(t),r=a(8949),n=a(1984),o=a(3643),l=a(7537),c=a(5911),d=a(9211),g=a(9290),p=a(2968),h=a(9343);function m({title:e,description:A,linkLabel:a="Visit website",url:s,roles:t,className:r}){return(0,h.jsx)(c.Z,{className:i()("project__header",r),children:(0,h.jsxs)("div",{className:"project__header-content",style:{"--initDelay":(0,d.aU)(300)},children:[(0,h.jsxs)("div",{className:"project__details",children:[(0,h.jsx)(g.Z,{className:i()("project__title",{"project__title--entered":!l.Z}),level:2,as:"h1",children:e}),(0,h.jsx)(p.Z,{className:i()("project__description",{"project__description--entered":!l.Z}),size:"xl",children:A}),!!s&&(0,h.jsx)(n.z,{secondary:!0,iconHoverShift:!0,className:i()("project__link-button",{"project__link-button--entered":!l.Z}),icon:"chevronRight",href:s,children:a})]}),!(null===t||void 0===t||!t.length)&&(0,h.jsx)("ul",{className:"project__meta",children:null===t||void 0===t?void 0:t.map(((e,A)=>(0,h.jsx)("li",{className:i()("project__meta-item",{"project__meta-item--entered":!l.Z}),style:{"--delay":(0,d.aU)(600+140*A)},children:(0,h.jsx)(p.Z,{secondary:!0,as:"span",children:e})},e)))})]})})}const E=({className:e,...A})=>(0,h.jsx)("article",{className:i()("project",e),...A}),x=(0,s.forwardRef)((({className:e,light:A,first:a,fullHeight:s,backgroundOverlayOpacity:t=.9,backgroundElement:r,children:n,...o},l)=>(0,h.jsxs)("section",{className:i()("project__section",e,{"project__section--light":A,"project__section--full-height":s}),ref:l,...o,children:[!!r&&(0,h.jsx)("div",{className:"project__section-background",style:{"--opacity":t},children:r}),(0,h.jsx)(c.Z,{className:i()("project__section-inner",{"project__section-inner--first":a}),children:n})]}))),j=({opacity:e=.7,className:A,entered:a,...s})=>{const t=(0,o.YT)(.6);return(0,h.jsxs)("div",{className:i()("project__background-image",A,{"project__background-image--entered":a}),children:[(0,h.jsx)("div",{className:"project__background-image-element",style:{"--offset":(0,d.ml)(t)},children:(0,h.jsx)(r.Z,{alt:"",role:"presentation",...s})}),(0,h.jsx)("div",{className:"project__background-scrim",style:{"--opacity":e}})]})},w=({className:e,...A})=>(0,h.jsx)("div",{className:i()("project__image",e),children:(0,h.jsx)(r.Z,{reveal:!0,delay:300,...A})}),u=({className:e,width:A="l",...a})=>(0,h.jsx)("div",{className:i()("project__section-content",`project__section-content--width-${A}`,e),...a}),B=({className:e,level:A=3,as:a="h2",...s})=>(0,h.jsx)(g.Z,{className:i()("project__section-heading",e),as:a,level:A,align:"auto",...s}),f=({className:e,...A})=>(0,h.jsx)(p.Z,{className:i()("project__section-text",e),size:"l",...A}),Q=({center:e,stretch:A,justify:a="center",width:s="m",noMargin:t,className:r,centerMobile:n,...o})=>(0,h.jsx)("div",{className:i()("project__text-row",`project__text-row--justify-${a}`,`project__text-row--width-${s}`,r,{"project__text-row--center":e,"project__text-row--stretch":A,"project__text-row--center-mobile":n,"project__text-row--no-margin":t}),...o}),v=({className:e,centered:A,...a})=>(0,h.jsx)(u,{className:i()("project__section-columns",{"project__section-columns--centered":A},e),...a})},5911:(e,A,a)=>{a.d(A,{Z:()=>n});var s=a(8381),t=a(2954),i=a.n(t),r=a(9343);const n=(0,s.forwardRef)((({as:e="div",children:A,className:a,...s},t)=>(0,r.jsx)(e,{className:i()("section",a),ref:t,...s,children:A})))},2968:(e,A,a)=>{a.d(A,{Z:()=>r});var s=a(2954),t=a.n(s),i=a(9343);const r=({children:e,size:A="m",as:a="p",align:s="auto",weight:r="auto",secondary:n,className:o,...l})=>(0,i.jsx)(a,{className:t()(o,"text",`text--align-${s}`,`text--size-${A}`,`text--weight-${r}`,{"text--secondary":n}),...l,children:e})},8785:(e,A,a)=>{a.r(A),a.d(A,{default:()=>R});var s=a(8381),t=a(7364),i=a(8949),r=a(3643),n=a(219),o=a(4433),l=a(1734),c=a(2343),d=a(8318),g=a(5492),p=a(194),h=a(2813),m=a(6163),E=a(7741),x=a(4382),j=a(2330),w=a(753),u=a(2298),B=a(7510),f=a(4691),Q=a(5697),v=a(8246),M=a(5413),b=a(4914),N=a(2771),D=a(1687),y=a(56),k=a(7537),C=a(9211),O=a(9343);const I="BiomedDDDical image collaboration",P="This project involved designing a better way for biomedical educators and learners to annotate digital slides together.",U=["User Research","UX Design","Interface Design"],R=()=>((0,r.DP)(),(0,O.jsxs)(s.Fragment,{children:[(0,O.jsxs)(t.q,{children:[(0,O.jsx)("title",{children:`Projects | ${I}`}),(0,O.jsx)("meta",{name:"description",content:P})]}),(0,O.jsxs)(o.XR,{className:"slice",children:[(0,O.jsx)(o.FV,{srcSet:`${l} 1280w, ${c} 2560w`,placeholder:d,opacity:.8,entered:!k.Z}),(0,O.jsx)(o.T4,{title:I,description:P,url:"https://www.best.edu.au/s/q2yjjvl7?data=8%404!9%4020303!10%40-15087&version=1",roles:U}),(0,O.jsx)(o.II,{first:!0,children:(0,O.jsx)(o.IG,{children:(0,O.jsx)(o.KZ,{srcSet:`${g} 800w, ${p} 1920w`,placeholder:h,alt:"The Slice web application showing a selected user annotation.",sizes:`(max-width: ${C.BC.mobile}px) 100vw, (max-width: ${C.BC.tablet}px) 90vw, 80vw`})})}),(0,O.jsx)(o.II,{children:(0,O.jsxs)(o.nU,{centered:!0,className:"slice__columns",children:[(0,O.jsxs)("div",{className:"sidebar__images-text",children:[(0,O.jsx)(o.d,{children:"Bringing it together"}),(0,O.jsx)(o.Hr,{children:"Teachers needed a better way to create collaborative group activities by annotating slides on Slice. Before starting this project, a layer could only be annotated by a single user, making it difficult for learners to work together."}),(0,O.jsx)(o.Hr,{children:"Our solution was to allow users to be invited to a layer, where they can see others\u2019 annotations and make their own."})]}),(0,O.jsxs)("div",{className:"slice__sidebar-images",children:[(0,O.jsx)(i.Z,{className:"slice__sidebar-image",srcSet:`${m} 300w, ${E} 700w`,placeholder:x,alt:"The layers sidebar design, now with user profiles.",sizes:`(max-width: ${C.BC.mobile}px) 200px, 343px`}),(0,O.jsx)(i.Z,{className:"slice__sidebar-image",srcSet:`${j} 300w, ${w} 700w`,placeholder:u,alt:"Multiple user annotations on a shared layer.",sizes:`(max-width: ${C.BC.mobile}px) 200px, 343px`})]})]})}),(0,O.jsx)(o.II,{light:!0,children:(0,O.jsxs)(o.IG,{children:[(0,O.jsxs)(o.ee,{children:[(0,O.jsx)(o.d,{children:"Improving the experience"}),(0,O.jsx)(o.Hr,{children:"A problem we heard about often form users was that it was difficult to find images they had previously seen or worked on. To solve this we added a new tab that lists all previously annotated slides. In addition, we added the ability to favorite slides, so if users find an interesting slide they want to annotate later, they can easily save it to their account."})]}),(0,O.jsx)(i.Z,{srcSet:`${B} 800w, ${f} 1440w`,placeholder:Q,alt:"The new My Slides tab in slice, showing annotated and favorited slides.",sizes:`(max-width: ${C.BC.mobile}px) 500px, (max-width: ${C.BC.tablet}px) 800px, 1000px`})]})}),(0,O.jsx)(o.II,{children:(0,O.jsxs)(o.IG,{className:"slice__grid",children:[(0,O.jsxs)("div",{className:"slice__grid-image",children:[(0,O.jsx)("div",{className:"slice__grid-background",children:(0,O.jsx)(i.Z,{srcSet:`${v} 400w, ${M} 898w`,placeholder:b,alt:"",role:"presentation",sizes:`(max-width: ${C.BC.mobile}px) 312px, (max-width: ${C.BC.tablet}px) 408px, 514px`})}),(0,O.jsx)("div",{className:"slice__grid-foreground",children:(0,O.jsx)(i.Z,{srcSet:`${N} 440w, ${D} 880w`,placeholder:y,alt:"An annotation preview popover with statistics for shape perimeter and area.",sizes:`(max-width: ${C.BC.mobile}px) 584px, (max-width: ${C.BC.tablet}px) 747px, 556px`})})]}),(0,O.jsxs)("div",{className:"slice__grid-text",children:[(0,O.jsx)(o.d,{children:"Meaningful details"}),(0,O.jsx)(o.Hr,{children:"Marking and annotating areas on high resolution biomedical images is the core experience of the app, and it was easy to get lost or lose sense of scale when zooming in on details. Adding measurements for the perimeter and area of an annotation both helped to communicate the overall scale of the image and how large the annotated feature is in comparison."})]})]})})]}),(0,O.jsx)(n.Z,{})]}))},318:(e,A,a)=>{async function s({src:e,srcSet:A,sizes:a}){return new Promise(((s,t)=>{try{if(!e&&!A)throw new Error("No image src or srcSet provided");const t=new Image;e&&(t.src=e),A&&(t.srcset=A),a&&(t.sizes=a);const i=()=>{t.removeEventListener("load",i);const e=t.currentSrc;s(e)};t.addEventListener("load",i)}catch(i){t(`Error loading ${A}: ${i}`)}}))}async function t(e){const A=e.split(", ").map((e=>{const[A,a]=e.split(" ");return{src:A,image:function(e=1,A=1){const a=document.createElement("canvas"),s=a.getContext("2d");a.width=e,a.height=A,s.fillStyle="rgba(0, 0, 0, 0)",s.fillRect(0,0,e,A);const t=a.toDataURL("image/png","");return a.remove(),t}(Number(a.replace("w",""))),width:a}})),a=A.map((({image:e,width:A})=>`${e} ${A}`)).join(", "),t=await s({srcSet:a});return A.find((e=>e.image===t)).src}a.d(A,{Ax:()=>s,ln:()=>t})},6434:(e,A,a)=>{e.exports=a.p+"static/media/gotham-bold.73ce573b9c05a133c93f.woff2"},1687:(e,A,a)=>{e.exports=a.p+"static/media/slice-annotation-large.a2ac9ef6cef86f94bf67.png"},56:e=>{e.exports="data:image/png;base64,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"},2771:(e,A,a)=>{e.exports=a.p+"static/media/slice-annotation.1bc3729cb8982890d571.png"},194:(e,A,a)=>{e.exports=a.p+"static/media/slice-app-large.a6491733d02f5fa98a83.jpg"},2813:e=>{e.exports="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAUFBQUFBQUGBgUICAcICAsKCQkKCxEMDQwNDBEaEBMQEBMQGhcbFhUWGxcpIBwcICkvJyUnLzkzMzlHREddXX0BBQUFBQUFBQYGBQgIBwgICwoJCQoLEQwNDA0MERoQExAQExAaFxsWFRYbFykgHBwgKS8nJScvOTMzOUdER11dff/CABEIACgAQAMBIgACEQEDEQH/xAAcAAADAQACAwAAAAAAAAAAAAAFBgcEAAMBAgj/2gAIAQEAAAAAjRqhuHBeLxDmu2U7Mhq+j56ZK9RMKSA1Qw3Q3DEA6NEaOPh4aJ7Pf//EABkBAAIDAQAAAAAAAAAAAAAAAAMEAAECBf/aAAgBAhAAAADUKVZpm+W+0H//xAAXAQEAAwAAAAAAAAAAAAAAAAAEAQMF/9oACAEDEAAAAIm28qUMwtNbf//EACIQAAICAQQDAAMAAAAAAAAAAAECAAMEBRESIQYiMRUyQv/aAAgBAQABPwBDvMGgWMJpeii4L6ynxhWUeks8ZVR+ku0ZK9/WHAQH5PxqN/MqbuaQQXWePKhCTGrq4D5M0VKpmpWopaPkjlKbwdpWZplvF1mg5wUJ3KNUAQe0zdU3B9pn5nMnuNaS0ot2iGYLEMJpWQyhe5VmsE+zKzid+5dklie4LN4lm0T7MBd2E09SAs5ELMmw9xnO8Ro1nET/xAAaEQEAAwEBAQAAAAAAAAAAAAAAAQIDERMx/9oACAECAQE/AHFKdeKFM4lXPiYV+skNH//EABwRAAIDAAMBAAAAAAAAAAAAAAABAgMREhMxMv/aAAgBAwEBPwAwhDkdJFaxVaiqrBVaQ+kVeEEimK0//9k="},5492:(e,A,a)=>{e.exports=a.p+"static/media/slice-app.091155c4839b170b05d8.jpg"},5413:(e,A,a)=>{e.exports=a.p+"static/media/slice-background-bar-large.c2adcc51c2d7a206f3ad.jpg"},4914:e=>{e.exports="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAQDAwMDAgQDAwMEBAQFBgoGBgUFBgwICQcKDgwPDg4MDQ0PERYTDxAVEQ0NExoTFRcYGRkZDxIbHRsYHRYYGRj/2wBDAQQEBAYFBgsGBgsYEA0QGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBj/wgARCABPACwDAREAAhEBAxEB/8QAGwAAAwEAAwEAAAAAAAAAAAAAAwQFBgECBwD/xAAaAQADAQEBAQAAAAAAAAAAAAABAgMEAAUG/9oADAMBAAIQAxAAAACL730G0hIYHn2inTiJuWej6JekpwuKs/PCbTUcCmk/VsmXNU7HXvJrcyi1OPoOeOfoZLtArotzTXRjDo0RuvTlkL+lXXNdmkdqD4GBTo9CS/T0Ku5zIB5kaXJd0HLVjyYgaJp/SAGNhvMtLmorOawzjfTLNjKfPrTg6FXa3//EACQQAAICAgICAgIDAAAAAAAAAAECAAMEBRESEyEGFCIjMUFR/9oACAEBAAE/AKdw5vDFppvkYFIRnm7NWdUWHuZyHFuJEr27BCnaPkeRy0ov5lGe9R9NMDam/wDWzTYak5WOXUTLwLMe8ggxFPSY1h6w2mam5vsiaahMnA/P/J8l1lVbsygRk6sRMfHISfWZj6E0+vs8oYiYWeMDD4J49TcbUZbkAxMMOvaUETW4yXOOZjYVNGP29TbZbclUMr7vby0xlAxxK6yJrrWrePsm8HXmXP5nJMC9PcXOKL1iY/MxcXgTIBUROe0ChljUDsZV1ESxAssQWQ47f0IK3URi3aWJ0E8rAyq6YFCX/wAyzVVePmPrK+5gzPIse8Ayi3s0xdj9aH5AWTj3DtiTP//EABsRAAMAAwEBAAAAAAAAAAAAAAABAhAREiAh/9oACAECAQE/AOSoI+COcuRyKtCfikUQxZqhzsmdG8NjZK8M0LGjZVCoTz0MSF45NDOhUMWGjg5P/8QAHBEAAwADAQEBAAAAAAAAAAAAAAECAxESEBME/9oACAEDAQE/AOSpEiUcmvNDR1oVeNGikWSJHQ2VXiWjo0V4kPyijQpOT5jbFLZOE+Y1oTQ/zCxaKtI+pdnY2jLRkodaPodEvaMxRSFAsR//2Q=="},8246:(e,A,a)=>{e.exports=a.p+"static/media/slice-background-bar.1e0c6b9cc8622cc45a70.jpg"},2343:(e,A,a)=>{e.exports=a.p+"static/media/slice-background-large.22249c107bb5bc03eae6.jpg"},8318:e=>{e.exports="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAUFBQUFBQUGBgUICAcICAsKCQkKCxEMDQwNDBEaEBMQEBMQGhcbFhUWGxcpIBwcICkvJyUnLzkzMzlHREddXX0BBQUFBQUFBQYGBQgIBwgICwoJCQoLEQwNDA0MERoQExAQExAaFxsWFRYbFykgHBwgKS8nJScvOTMzOUdER11dff/CABEIABQAIAMBIgACEQEDEQH/xAAZAAACAwEAAAAAAAAAAAAAAAADBQABBAL/2gAIAQEAAAAAS2TWvNO0h95v/8QAFgEBAQEAAAAAAAAAAAAAAAAAAwIF/9oACAECEAAAANmVL//EABcBAAMBAAAAAAAAAAAAAAAAAAADBAX/2gAIAQMQAAAA22Fn/8QAHRAAAgIDAAMAAAAAAAAAAAAAAAECAwQRIRMiMf/aAAgBAQABPwDHxpTWydTgylbZPSSHmeJ6Qr42x2yPOoi3N6Ll7lXwrIcfD//EABgRAAIDAAAAAAAAAAAAAAAAAAABECFB/9oACAECAQE/ALjBn//EABoRAQADAAMAAAAAAAAAAAAAAAEAAhEDMTP/2gAIAQMBAT8AB3ZbjXLEOiU82f/Z"},1734:(e,A,a)=>{e.exports=a.p+"static/media/slice-background.c4c219f7604a5646b689.jpg"},753:(e,A,a)=>{e.exports=a.p+"static/media/slice-sidebar-annotations-large.5c5a97a432f1994ebb73.png"},2298:e=>{e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAA8CAMAAABCfyqQAAAA0lBMVEUwMDMyMjUzMzY1NTg1NDY3Nzo5ODo8PD87Oz45OTw2NjhBQUQ6Oj0/P0I+PkEyNDhDQ0VEREcwMzY0NTlGRkk1NzpAQENJSUxISEo9Oz05NzgyMjc8OTpMTE8/QEY2Nz0xNjoyNjlIQ0NCP0BBPT41Oj5RUFNOTlBQSUlGQEA0NDw1P0U5PUM/OzxGmLE+ZXI8QElBeYpAWmM4S1M3REpORkZGpsM3Tlc1PEJEiZ1Ag5dCf5I/bXtBanc6XmpBVl09TlRETlJDjaM5VmE6VV9AR0vb6cDfAAADAUlEQVQ4y+WT55LaMBSFbclqlizb2MaYkoVdStgEyJbsbnp//1fKucJJmLSZ/M7hD6PP50q3Re1stpnN2rqE6rptP1y/ebW/u7vbv3h9DbhZbwhaW5T1qP3w7nD1Yr/ff7w6vIsKHIxGZWGHWTa0RfHl/fWbq1cvX169vn4fKTopbJYpDSn19Pbm89vD4fD2081tZJQfWti8lkKkojlbPbm9ub+/v7l9soqE87YsYdWSJ4zl+aJZPTyBHlZNJLQt27YuMpcmLI5jNgGHf7VqeCT9aLZeb0ZWC85YzJKEJ7xqjEKkSKiyXa9nI6uM4CBC4G5hVKZcGqW6GG0C1EakqXBaOe1UhkeIiDtbowxtkSllpHTeD733WVFaJSKW6qysy8IfnVIrIJ9Z6w2P4kRqjzSVMzLlnMOMsBqfpgmgMJ33y24qBRJNOMfFJM7iKOayW15Au+kYMMaPJRByjiI2nl5sz6EtKI6iUyVyef78MfR8uxunv8Lt88fA58tfnQi73J7j9xuG146nu92u68Dib2wwGBwh4+OxHIv0hw0sBw2QMuNAp2wOGsIiaUm+IIJgc9AAwYyAF8WhADia5PNFPogJCtl1TkqBojpcDfsgX+T5hGAon+qohxhBk7JAIYY8+bS7KC58ltm6RstlgnrTK1H4visKbQSsh1rgjHLIE4KMC+OMcWpYjgKMAmShJDEmsWkwUrZuEfYIKTJBPG0+X1QNKIbFiSQ+hQNktagqGn2rnOSwkoCOKVdVxTFb2VBpl8Ia1MPLy6apCFrMJ6yn8BKqOKwORvOTc3KJqLQJ0hgJ4ymMJ2A8gdNAoi/+N8o4lAqjSYGS+kqhL1IarTJPpXcY/KBj+WSnFJa/KElDBTN9jZGnwjtsDlanKAsoA5ThZQSrM/UIskSstZ7ScS7kRPDps2dEadUULRtF7Z352cMzosHjpEjD0/s7J83qKaQVLGFGoTBsLLSsOYMaEUDcN6zPE140JaexINLr+//4qOg/0d9SjRlq9GfIQf/m/Ic7vwLBXkOVrEdiOwAAAABJRU5ErkJggg=="},2330:(e,A,a)=>{e.exports=a.p+"static/media/slice-sidebar-annotations.56266a25d598e5417b44.png"},7741:(e,A,a)=>{e.exports=a.p+"static/media/slice-sidebar-layers-large.d92d730605a575e2de0c.png"},4382:e=>{e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAA8CAMAAABCfyqQAAAAxlBMVEUwMDMxMTQ2NjkzMzY4ODs0NDc8PD5CQkU6Oj01NTg/P0I+PkA9PUBEREdFRUdBQUNAQENJSUwyLzBHSEtMTE9HR0k3NDU0MjRIRUU2MC5FRklFQkM8ODhPT1E5Nzc9Vl9RUVRCPDw/ZnM+TVRASk9BRko9QUVFQEBCP0A8OTtFmbJCgpVEdoVAWmM6Rkw2QUZFpsJFjaNFh5s9anhEYms9X2tFVFo4TFRHTVE0O0AzNztJn7hJlKpBfI4/eYtCbnw+Ulo6UVogc3mqAAACmElEQVQ4y+WUW3PaMBCFJVuWZEuWpRiDAwFSKARyvzRNm97//5/qWdmTDAzJQ197XhB8Wu3u2R2YKkmqVKp04yaEL58/Xd59u709v/91xSpFqkiqbEJN8P77+fndj8WcGVOQDFRUypWr5dXi8uLi4ufD1ZIJLaO01tIW3q+vl/PHxcPicf50wxJQY22E8ZH1avl7Pv/zdH3zleVCeuQsEGwov1+vPkJAzxlLtHd13ZTeeFUHHMpxXdertX5OOUvMeHB6Oh04NQ6nOIQwgGqvE4K2xNfQqErV0+k0OOVc6ZQVOedMWFeHMFa+UM10MGhU15kUOSJzYXxVeSul9XCqkALSWogk4yyjXqgTaklK/AYlCcGUcaJkQn895VCa5Qk9y3meSCSxxHMgBhHGkaAwKA+FdEVE2AmHTFhVVt5YjRoIQj0jaAALK0WEO+Jpoo1BwgMsVoRCkxwJCe6Hoq+864Hti/oCOYQAX3SIpaSDOFoFZVm8wHZMQDVaw/d4AbhnXXmj2XazqWiAfaORZRCsHG43bRucg31WJGkHY6YM8OSsbVv43kNOFeYCylPAD5NJO1Hee0POQ4DJCzwjCHkZh91H4tzBxrlx3ShDFqcpQa3xDKoFbSfYZaeMJJqhOyEllpONELqhVXVYPWsl1gFtIGeMzGZbW6mKVkFqSbHwCq1QQTzFG0VVFEBCgEZInmYEc0CFtUYMQU0VEyVIoVZV2HWC1iDpC2R8NJxJpUplYT6wiJEZIGdHR8cjQNc48gCF9Cnpk+DxzLgwCGWBoDhWNAqhWrDj4YmpSlgAa1+9xc0YORpuZb/wcSr9yBAJjUa4Ct8I7Qw70rhjrwu2t417q9ez/1H8HUR6k71D+380/hbMif5D5IGcfwHADy8o/7eiGAAAAABJRU5ErkJggg=="},6163:(e,A,a)=>{e.exports=a.p+"static/media/slice-sidebar-layers.f0e4c510ac66051a35dd.png"},4691:(e,A,a)=>{e.exports=a.p+"static/media/slice-slides-large.ef552f7db33c316fe493.jpg"},5697:e=>{e.exports="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wgARCAAoAEADAREAAhEBAxEB/8QAGQAAAgMBAAAAAAAAAAAAAAAAAgQBAwUG/8QAGQEAAwEBAQAAAAAAAAAAAAAAAAEDAgQF/9oADAMBAAIQAxAAAACwM4raZJhGZEsVgO5z2cq+7o358vKdkuGjLcN1R62nHXpwk85e7UptZbSwpDtSdLuzznc4LFgNZ9qtGNSPLXijGpyLGXSYDZvKP//EACMQAAEEAgEEAwEAAAAAAAAAAAIAAQMEBREGEiExQQcTFiL/2gAIAQEAAT8Al+P5kfEWCX69r8Q6bgqHgRGvwJqfihwvpQcQOyWlyHkX1kUMSr2p5LjGW0EdmZmcUVe7Ht++kOVmhMg9qPMWzsOqEz25iaQVXnOLLNEw9tq7Rglum5l7VPGUndi23ZNbp1R02n0mydawDg2tujwTHIUu/KhxAQG5Eq0taqbvpVmqT22kZm6lkMLKM5yMgp2I/G2UeKszuocDJE/Up2mh/l3QxyTA6Ku/WTEsfG0dkVaz9UZnidSWoJwYgdmUOTrxhpHm4RV7kFQi0qWcrE3Q3tTuDy+fKoUOsxNnX//EAB0RAQEBAQABBQAAAAAAAAAAAAEAEgIQAxEhMEH/2gAIAQIBAT8A+ss2SS/LUMcLYS3PVlvZsxHYE+p5JPiOGeGw2PJ1Pd//xAAeEQADAQEAAgMBAAAAAAAAAAAAAQIRAwQSEyExEP/aAAgBAwEBPwAXKs09GejM/k82yubRw8fftlQlJWI+j40z40UvVFLY0h0pLu0P2ZjFZrY4poapI5+QmsLuWiqWnuRjNSFRdaiebI1fpUNsXNkcaL41+ky8LrD/2Q=="},7510:(e,A,a)=>{e.exports=a.p+"static/media/slice-slides.9e3633a1edcdf5c0540f.jpg"}}]);
//# sourceMappingURL=785.059b5213.chunk.js.map
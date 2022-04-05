"use strict";(globalThis.webpackChunkportfolio=globalThis.webpackChunkportfolio||[]).push([[828],{2828:(e,t,r)=>{r.r(t),r.d(t,{default:()=>I});var n=r(8381),a=r(1524),i=r(935),o=r(2954),c=r.n(o),s=r(3643),u=r(7537),l=r(4467);function d(){return d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},d.apply(this,arguments)}var m=n.createElement("path",{d:"M18.03 1.375L16.47.125-.031 20.75l16.5 20.625 1.562-1.25L2.53 20.75z"});function v({title:e,titleId:t,...r},a){return n.createElement("svg",d({fill:"currentColor",width:18,height:42,viewBox:"0 0 18 42",ref:a,"aria-labelledby":t},r),e?n.createElement("title",{id:t},e):null,m)}const f=n.forwardRef(v);r.p;function p(){return p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},p.apply(this,arguments)}var g=n.createElement("path",{d:"M-.03 1.375L1.53.125l16.5 20.625-16.5 20.625-1.562-1.25 15.5-19.375z"});function x({title:e,titleId:t,...r},a){return n.createElement("svg",p({fill:"currentColor",width:18,height:42,viewBox:"0 0 18 42",ref:a,"aria-labelledby":t},r),e?n.createElement("title",{id:t},e):null,g)}const h=n.forwardRef(x);r.p;var y=r(2545),w=r(318),b=r(9343);function _(e,t,r,n){if(null!==t)return t;const a=r.length;return n>0?(e+1)%a:(e-1+a)%a}const I=({width:e,height:t,images:r,placeholder:o,...d})=>{const[m,v]=(0,n.useState)(!1),[p,g]=(0,n.useState)(0),[x,I]=(0,n.useState)(!1),[F,j]=(0,n.useState)(!0),[R,E]=(0,n.useState)(),[C,k]=(0,n.useState)(),M=(0,n.useRef)(),S=(0,n.useRef)(),A=(0,n.useRef)(),N=(0,n.useRef)(),P=(0,n.useRef)(),L=(0,n.useRef)(),z=(0,n.useRef)(),D=(0,n.useRef)(!1),O=(0,n.useRef)(),T=(0,n.useRef)(),U=(0,n.useRef)(),q=(0,s.Tb)(),K=(0,s.NM)(M,!0),B=(0,n.useRef)(),$=(0,n.useRef)(),J=(0,n.useRef)(),V=`Slide ${p+1} of ${r.length}. ${r[p].alt}`;(0,n.useEffect)((()=>(m&&(document.body.style.cursor="grabbing"),()=>{document.body.style.cursor=""})),[m]),(0,n.useEffect)((()=>{const r=[e/-2,e/2,t/2,t/-2,1,1e3];return z.current=new a.CP7({canvas:M.current,antialias:!1,powerPreference:"high-performance"}),L.current=new a.iKG(...r),P.current=new a.xsS,z.current.setPixelRatio(2),z.current.setClearColor(1118481,1),z.current.setSize(e,t),z.current.domElement.style.width="100%",z.current.domElement.style.height="auto",P.current.background=new a.Ilk(1118481),L.current.position.z=1,()=>{D.current=!1,(0,y.in)(P.current),(0,y.e8)(z.current)}}),[t,e]),(0,n.useEffect)((()=>{let n=!0;return K&&!x&&(async()=>{const i=new a.dpR,o=z.current.capabilities.getMaxAnisotropy(),c=r.map((async e=>{const t=await(0,w.Ax)(e),r=await i.loadAsync(t);return await z.current.initTexture(r),r.encoding=a.knz,r.minFilter=a.wem,r.magFilter=a.wem,r.anisotropy=o,r.generateMipmaps=!1,r})),s=await Promise.all(c);n&&(N.current=new a.jyz({uniforms:{dispFactor:{type:"f",value:0},direction:{type:"f",value:1},currentImage:{type:"t",value:s[0]},nextImage:{type:"t",value:s[1]}},vertexShader:"\n  varying vec2 vUv;\n  void main() {\n    vUv = uv;\n    gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n  }\n",fragmentShader:"\n  varying vec2 vUv;\n  uniform sampler2D currentImage;\n  uniform sampler2D nextImage;\n  uniform float dispFactor;\n  uniform float direction;\n\n  void main() {\n    vec2 uv = vUv;\n    vec4 _currentImage;\n    vec4 _nextImage;\n    float intensity = 0.6;\n\n    vec4 orig1 = texture2D(currentImage, uv);\n    vec4 orig2 = texture2D(nextImage, uv);\n\n    vec2 distortedPosition = vec2(\n      uv.x + direction * (dispFactor * (orig2.r * intensity)),\n      uv.y + direction * (dispFactor * (orig2 * intensity))\n    );\n\n    vec2 distortedPosition2 = vec2(\n      uv.x - direction * ((1.0 - dispFactor) * (orig1.r * intensity)),\n      uv.y - direction * ((1.0 - dispFactor) * (orig1 * intensity))\n    );\n\n    _currentImage = texture2D(currentImage, distortedPosition);\n    _nextImage = texture2D(nextImage, distortedPosition2);\n\n    vec4 finalTexture = mix(_currentImage, _nextImage, dispFactor);\n    gl_FragColor = finalTexture;\n  }\n",transparent:!1,opacity:1}),A.current=new a.BKK(e,t,1),S.current=new a.Kj0(A.current,N.current),S.current.position.set(0,0,0),P.current.add(S.current),I(!0),E(s),requestAnimationFrame((()=>{z.current.render(P.current,L.current)})))})(),()=>{n=!1}}),[t,r,K,x,e]);const G=(0,n.useCallback)((({index:e,direction:t=1})=>{if(!R)return;g(e);const r=N.current.uniforms;r.nextImage.value=R[e],r.direction.value=t;const n=()=>{r.currentImage.value=R[e],r.dispFactor.value=0,D.current=!1};if(q||1===r.dispFactor.value)n(),requestAnimationFrame((()=>{z.current.render(P.current,L.current)}));else{D.current=!0;const e=(0,i.S3)(r.dispFactor.value,(e=>{r.dispFactor.value=e,1===e&&n()}));$.current=(0,i.ST)({from:e.get(),to:1,velocity:e.getVelocity(),stiffness:100,damping:20}).start(e)}}),[q,R]),Z=(0,n.useCallback)((({direction:e,index:t=null,...r})=>{if(!x)return;if(D.current)return cancelAnimationFrame(U.current),void(U.current=requestAnimationFrame((()=>Z({direction:e,index:t,...r}))));const n=_(p,t,R,e);G({index:n,direction:e,...r})}),[G,p,x,R]),H=(0,n.useCallback)((e=>{if(e===p)return;Z({direction:e>p?1:-1,index:e})}),[p,Z]);(0,n.useEffect)((()=>{const e=()=>{const e=M.current.getBoundingClientRect();k(e)};return window.addEventListener("resize",e),e(),()=>{window.removeEventListener("resize",e)}}),[]),(0,n.useEffect)((()=>{let e;const t=()=>{e=requestAnimationFrame(t),D.current&&z.current.render(P.current,L.current)};return e=requestAnimationFrame(t),()=>{var t;cancelAnimationFrame(e),null===(t=$.current)||void 0===t||t.stop()}}),[]),(0,n.useEffect)((()=>{if(o){const e=()=>{j(!1)},t=B.current;return t.addEventListener("transitionend",e),()=>{t&&t.removeEventListener("transitionend",e)}}}),[o]);const Q=(0,n.useCallback)((e=>{if(D.current||!N.current||!R)return;const{x:t}=e;T.current=t;const n=Math.abs(t),a=C.width;O.current=t>0?-1:1;const i=1-(n-a)/a*-1,o=_(p,null,r,O.current),c=N.current.uniforms,s=Math.min(Math.max(i,0),1);c.currentImage.value=R[p],c.nextImage.value=R[o],c.direction.value=O.current,q||(c.dispFactor.value=s),requestAnimationFrame((()=>{z.current.render(P.current,L.current)}))}),[C,p,r,q,R]),W=(0,n.useCallback)((()=>{if(!N.current)return;const e=N.current.uniforms,t=1e3*(1-e.dispFactor.value),r=Math.abs(T.current),n=.2*C.width;T.current=0,D.current||0!==r&&r&&(r>n?Z({duration:t,direction:O.current}):(e.currentImage.value=e.nextImage.value,e.nextImage.value=e.currentImage.value,e.dispFactor.value=1-e.dispFactor.value,Z({direction:-1*O.current,index:p})))}),[C,p,Z]);(0,n.useEffect)((()=>{let e;const t=(0,i.S3)({x:0,y:0},(e=>{Q(e)})),r=(0,i.oL)(J.current,"mousedown touchstart").start((r=>{v(!0),r.preventDefault(),e=(0,i.cx)({x:0,y:0}).start(t)})),n=(0,i.oL)(document,"mouseup touchend").start((()=>{var t;v(!1),W(),null===(t=e)||void 0===t||t.stop()}));return()=>{var t;r.stop(),n.stop(),null===(t=e)||void 0===t||t.stop()}}),[W,Q]);return(0,b.jsxs)("div",{className:"carousel",onKeyDown:e=>{const t={ArrowRight:()=>Z({direction:1}),ArrowLeft:()=>Z({direction:-1})}[e.key];t&&t()},...d,children:[(0,b.jsxs)("div",{className:"carousel__content",children:[(0,b.jsxs)("div",{className:c()("carousel__image-wrapper",{"carousel__image-wrapper--dragging":m}),ref:J,children:[(0,b.jsx)("div",{"aria-atomic":!0,className:"carousel__canvas-wrapper","aria-live":"polite","aria-label":V,role:"img",children:(0,b.jsx)("canvas",{"aria-hidden":!0,className:"carousel__canvas",ref:M})}),F&&o&&(0,b.jsx)("img",{"aria-hidden":!0,className:c()("carousel__placeholder",{"carousel__placeholder--loaded":!u.Z&&x&&R}),src:o,ref:B,alt:"",role:"presentation"})]}),(0,b.jsx)("button",{className:"carousel__button carousel__button--prev","aria-label":"Previous slide",onClick:()=>Z({direction:-1}),onMouseUp:l.I,children:(0,b.jsx)(f,{})}),(0,b.jsx)("button",{className:"carousel__button carousel__button--next","aria-label":"Next slide",onClick:()=>Z({direction:1}),onMouseUp:l.I,children:(0,b.jsx)(h,{})})]}),(0,b.jsx)("div",{className:"carousel__nav",children:r.map(((e,t)=>(0,b.jsx)("button",{className:"carousel__nav-button",onClick:()=>H(t),onMouseUp:l.I,"aria-label":`Jump to slide ${t+1}`,"aria-pressed":t===p},e.alt)))})]})}},2545:(e,t,r)=>{r.d(t,{Ji:()=>o,e8:()=>i,in:()=>n});const n=e=>{e.traverse((e=>{if(e.isMesh)if(e.geometry.dispose(),e.material.isMaterial)a(e.material);else for(const t of e.material)a(t)}))},a=e=>{e.dispose();for(const t of Object.keys(e)){const r=e[t];r&&"object"===typeof r&&"minFilter"in r&&r.dispose()}},i=e=>{e.dispose(),e.forceContextLoss(),e=null},o=e=>{for(const t of e)t.parent.remove(t)}}}]);
//# sourceMappingURL=828.9ede8f1f.chunk.js.map
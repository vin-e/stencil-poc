/*! Built with http://stenciljs.com */
((w,d,x,n,h,c,r)=>{((s)=>{s&&(r=s.getAttribute('data-resources-url'))})(d.querySelector("script[data-namespace='disco']"));
function e(e,t){return"sc-"+e.e+(t&&t!==l?"-"+t:"")}function t(e,t){return e+(t?"-h":"-s")}function o(e,t){let n,o,l=null,i=!1,s=!1,r=arguments.length;for(;r-- >2;)g.push(arguments[r]);for(;g.length>0;){let t=g.pop();if(t&&void 0!==t.pop)for(r=t.length;r--;)g.push(t[r]);else"boolean"==typeof t&&(t=null),(s="function"!=typeof e)&&(null==t?t="":"number"==typeof t?t=String(t):"string"!=typeof t&&(s=!1)),s&&i?l[l.length-1].vtext+=t:null===l?l=[s?{vtext:t}:t]:l.push(s?{vtext:t}:t),i=s}if(null!=t){if(t.className&&(t.class=t.className),"object"==typeof t.class){for(r in t.class)t.class[r]&&g.push(r);t.class=g.join(" "),g.length=0}null!=t.key&&(n=t.key),null!=t.name&&(o=t.name)}return"function"==typeof e?e(t,l||[],$):{vtag:e,vchildren:l,vtext:void 0,vattrs:t,vkey:n,vname:o,t:void 0,n:!1}}const l="$",i={},s={enter:13,escape:27,space:32,tab:9,left:37,up:38,right:39,down:40},a=(t,n,o,i)=>{let s=o.e+l,r=o[s];if((2===o.o||1===o.o&&!t.i.l)&&(i["s-sc"]=r?e(o,i.mode):e(o)),r){let e=n.s.head,o=t.r.get(e);if(o||t.r.set(e,o={}),!o[s]){let t;{t=r.content.cloneNode(!0),o[s]=!0;const l=e.querySelectorAll("[data-styles]");n.a(e,t,l.length&&l[l.length-1].nextSibling||e.firstChild)}}}},f=e=>null!=e,u=e=>e.toLowerCase(),p=(e,t,n,o,l,i)=>{if("class"!==n||i)if("style"===n){for(const e in o)l&&null!=l[e]||(/-/.test(e)?t.style.removeProperty(e):t.style[e]="");for(const e in l)o&&l[e]===o[e]||(/-/.test(e)?t.style.setProperty(e,l[e]):t.style[e]=l[e])}else if("o"!==n[0]||"n"!==n[1]||!/[A-Z]/.test(n[2])||n in t)if("list"!==n&&"type"!==n&&!i&&(n in t||-1!==["object","function"].indexOf(typeof l)&&null!==l)){const o=e.c(t);o&&o.f&&o.f[n]?m(t,n,l):"ref"!==n&&(m(t,n,null==l?"":l),null!=l&&!1!==l||e.i.u(t,n))}else null!=l&&"key"!==n?((e,t,n,o="boolean"==typeof n,l)=>{l=t!==(t=t.replace(/^xlink\:?/,"")),null==n||o&&(!n||"false"===n)?l?e.removeAttributeNS("http://www.w3.org/1999/xlink",u(t)):e.removeAttribute(t):"function"!=typeof n&&(n=o?"":n.toString(),l?e.setAttributeNS("http://www.w3.org/1999/xlink",u(t),n):e.setAttribute(t,n))})(t,n,l):(i||e.i.p(t,n)&&(null==l||!1===l))&&e.i.u(t,n);else n=u(n)in t?u(n.substring(2)):u(n[2])+n.substring(3),l?l!==o&&e.i.d(t,n,l):e.i.b(t,n);else if(o!==l){const e=b(o),n=b(l),i=e.filter(e=>!n.includes(e)),s=b(t.className).filter(e=>!i.includes(e)),r=n.filter(t=>!e.includes(t)&&!s.includes(t));s.push(...r),t.className=s.join(" ")}},b=e=>null==e||""===e?[]:e.trim().split(/\s+/),m=(e,t,n)=>{try{e[t]=n}catch(e){}},v=(e,t,n,o,l)=>{const s=11===n.t.nodeType&&n.t.host?n.t.host:n.t,r=t&&t.vattrs||i,a=n.vattrs||i;for(l in r)a&&null!=a[l]||null==r[l]||p(e,s,l,r[l],void 0,o,n.n);for(l in a)l in r&&a[l]===("value"===l||"checked"===l?s[l]:r[l])||p(e,s,l,r[l],a[l],o,n.n)};let y=!1;const M=(e,t)=>{e&&(e.vattrs&&e.vattrs.ref&&e.vattrs.ref(t?null:e.t),e.vchildren&&e.vchildren.forEach(e=>{M(e,t)}))},g=[],$={forEach:(e,t)=>e.forEach(t),map:(e,t)=>e.map(t)},k=(e,t,n)=>{const[o,l,,i,s,r]=e,a={color:{m:"color"}};if(i)for(t=0;t<i.length;t++)a[(n=i[t])[0]]={v:n[1],y:!!n[2],m:"string"==typeof n[3]?n[3]:n[3]?n[0]:0,w:n[4]};return{e:o,M:l,f:Object.assign({},a),o:s,g:r?r.map(j):void 0}},j=e=>({k:e[0],j:e[1],C:!!e[2],W:!!e[3],N:!!e[4]}),C=(e,t)=>{return f(t)&&"object"!=typeof t&&"function"!=typeof t?e===Boolean||4===e?"false"!==t&&(""===t||!!t):e===Number||8===e?parseFloat(t):e===String||2===e?t.toString():t:t},W=(e,t,n)=>{e.O.add(t),e.x.has(t)||(e.x.set(t,!0),e.S?e.queue.write(()=>N(e,t,n)):e.queue.tick(()=>N(e,t,n)))},N=async(e,n,l,i,s,r)=>{if(e.x.delete(n),!e.A.has(n)){if(!(s=e.T.get(n))){if((r=e.R.get(n))&&!r["s-rn"])return void(r["s-rc"]=r["s-rc"]||[]).push(()=>{N(e,n,l)});if(s=T(e,n,e.L.get(n),l))try{s.componentWillLoad&&await s.componentWillLoad()}catch(t){e.D(t,3,n)}}((e,n,l,i)=>{try{const s=n.q.host,r=n.q.encapsulation,a=!1;let c,f=l;if(!l["s-rn"]){e.B(e,e.i,n,l);const o=l["s-sc"];o&&(e.i.I(l,t(o,!0)),"scoped"===r&&e.i.I(l,t(o)))}if(i.render||i.hostData||s||c){e.P=!0;const t=i.render&&i.render();let n;e.P=!1;const s=o(null,n,t),c=e.F.get(l)||{};c.t=f,e.F.set(l,e.render(l,c,s,a,r))}l["s-rn"]=!0,l["s-rc"]&&(l["s-rc"].forEach(e=>e()),l["s-rc"]=null)}catch(t){e.P=!1,e.D(t,8,l,!0)}})(e,e.c(n),n,s),n["s-init"]()}},O=(e,t,n,o,l,i,s,r,a)=>{if(t.type||t.state){const c=e.H.get(n);t.state||(!t.attr||void 0!==c[l]&&""!==c[l]||(r=i&&i.Q)&&f(a=r[t.attr])&&(c[l]=C(t.type,a)),n.hasOwnProperty(l)&&(void 0===c[l]&&(c[l]=C(t.type,n[l])),"mode"!==l&&delete n[l])),o.hasOwnProperty(l)&&void 0===c[l]&&(c[l]=o[l]),A(o,l,function c(t){return(t=e.H.get(e.U.get(this)))&&t[l]},function u(n,o){(o=e.U.get(this))&&(t.state||t.mutable)&&E(e,o,l,n,s)})}else t.elementRef&&S(o,l,n)},E=(e,t,n,o,l,i,s)=>{(s=e.H.get(t))||e.H.set(t,s={}),o!==s[n]&&(s[n]=o,e.T.get(t)&&!e.P&&t["s-rn"]&&W(e,t,l))},S=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,value:n})},A=(e,t,n,o)=>{Object.defineProperty(e,t,{configurable:!0,get:n,set:o})},T=(e,t,n,o,l,i,s,r)=>{try{l=new(i=e.c(t).q),((e,t,n,o,l,i)=>{e.U.set(o,n),e.H.has(n)||e.H.set(n,{}),Object.entries(Object.assign({color:{type:String}},t.properties,{mode:{type:String}})).forEach(([t,s])=>{O(e,s,n,o,t,l,i)})})(e,i,t,l,n,o),function a(e,t,n){if(t){const o=e.U.get(n);t.forEach(t=>{n[t.method]={emit:n=>e.Z(o,t.name,{bubbles:t.bubbles,composed:t.composed,cancelable:t.cancelable,detail:n})}})}}(e,i.events,l);try{if(s=e.z.get(t)){for(r=0;r<s.length;r+=2)l[s[r]](s[r+1]);e.z.delete(t)}}catch(n){e.D(n,2,t)}}catch(n){l={},e.D(n,7,t,!0)}return e.T.set(t,l),l},R=(e,t,n,o,l,i)=>{if(e.O.delete(t),(l=e.R.get(t))&&((o=l["s-ld"])&&((n=o.indexOf(t))>-1&&o.splice(n,1),o.length||l["s-init"]&&l["s-init"]()),e.R.delete(t)),e.G.length&&!e.O.size)for(;i=e.G.shift();)i()},L=(e,t,n,o)=>{t.forEach(([t,l])=>{3&l.v&&A(n,t,function n(){return(e.H.get(this)||{})[t]},function n(i){E(e,this,t,C(l.w,i),o)})})},D=(e,t,n,o,l)=>{if(n.connectedCallback=function(){((e,t,n)=>{e.J.has(n)||(e.J.set(n,!0),function o(e,t){const n=e.c(t);n.g&&n.g.forEach(n=>{n.C||e.i.d(t,n.k,function o(e,t,n,l){return o=>{(l=e.T.get(t))?l[n](o):((l=e.z.get(t)||[]).push(n,o),e.z.set(t,l))}}(e,t,n.j),n.N,n.W)})}(e,n)),e.A.delete(n),e.K.has(n)||(e.V=!0,e.O.add(n),e.K.set(n,!0),((e,t,n)=>{for(n=t;n=e.i.X(n);)if(e.Y(n)){e._.has(t)||(e.R.set(t,n),(n["s-ld"]=n["s-ld"]||[]).push(t));break}})(e,n),e.queue.tick(()=>{e.L.set(n,((e,t,n,o,l)=>{return n.mode||(n.mode=e.ee(n)),n["s-cr"]||e.te(n,"ssrv")||e.l&&1===t.o||(n["s-cr"]=e.ne(""),n["s-cr"]["s-cn"]=!0,e.a(n,n["s-cr"],e.oe(n)[0])),o={Q:{}},t.f&&Object.keys(t.f).forEach(i=>{(l=t.f[i].m)&&(o.Q[l]=e.te(n,l))}),o})(e.i,t,n)),e.le(t,n)}))})(e,t,this)},n.disconnectedCallback=function(){((e,t)=>{!e.ie&&((e,t)=>{for(;t;){if(!e.se(t))return 9!==e.re(t);t=e.se(t)}})(e.i,t)&&(e.A.set(t,!0),R(e,t),M(e.F.get(t),!0),e.i.b(t),e.J.delete(t),[e.R,e.ae,e.L].forEach(e=>e.delete(t)))})(e,this)},n["s-init"]=function(){((e,t,n,o,l,i)=>{if(e.T.get(t)&&!e.A.has(t)&&(!t["s-ld"]||!t["s-ld"].length)){e._.set(t,!0),e.ce.has(t)||(e.ce.set(t,!0),t["s-ld"]=void 0,e.i.I(t,n));try{M(e.F.get(t)),(i=e.ae.get(t))&&(i.forEach(e=>e(t)),e.ae.delete(t))}catch(n){e.D(n,4,t)}R(e,t)}})(e,this,o)},n.forceUpdate=function(){W(e,this,l)},t.f){const o=Object.entries(t.f);{let e={};o.forEach(([t,{m:n}])=>{n&&(e[n]=t)}),e=Object.assign({},e),n.attributeChangedCallback=function(t,n,o){(function l(e,t,n,o){const l=e[u(n)];l&&(t[l]=o)})(e,this,t,o)}}L(e,o,n,l)}};((e,t,n,i,r,c,p)=>{const d=n.performance,b={html:{}},m=n[e]=n[e]||{},h=((e,t,n)=>{const o=new WeakMap,l={s:n,l:!!n.documentElement.attachShadow,fe:!1,re:e=>e.nodeType,ue:e=>n.createElement(e),pe:(e,t)=>n.createElementNS(e,t),ne:e=>n.createTextNode(e),de:e=>n.createComment(e),a:(e,t,n)=>e.insertBefore(t,n),be:e=>e.remove(),me:(e,t)=>e.appendChild(t),I:(e,t)=>{e.classList.add(t)},oe:e=>e.childNodes,se:e=>e.parentNode,ve:e=>e.nextSibling,ye:e=>e.previousSibling,he:e=>u(e.nodeName),we:e=>e.textContent,Me:(e,t)=>e.textContent=t,te:(e,t)=>e.getAttribute(t),ge:(e,t,n)=>e.setAttribute(t,n),u:(e,t)=>e.removeAttribute(t),p:(e,t)=>e.hasAttribute(t),ee:t=>t.getAttribute("mode")||(e.Context||{}).mode,$e:(e,o)=>{return"child"===o?e.firstElementChild:"parent"===o?l.X(e):"body"===o?n.body:"document"===o?n:"window"===o?t:e},d:(t,n,i,r,a,c,f,u,p)=>{let d=t,b=i,m=o.get(t);p=n,m&&m[p]&&m[p](),"string"==typeof c?d=l.$e(t,c):"object"==typeof c?d=c:(u=n.split(":")).length>1&&(d=l.$e(t,u[0]),n=u[1]),d&&((u=n.split(".")).length>1&&(n=u[0],b=(e=>{e.keyCode===s[u[1]]&&i(e)})),f=l.fe?{capture:!!r,passive:!!a}:!!r,e.ael(d,n,b,f),m||o.set(t,m={}),m[p]=(()=>{d&&e.rel(d,n,b,f),m[p]=null}))},b:(e,t,n)=>{(n=o.get(e))&&(t?n[t]&&n[t]():Object.keys(n).forEach(e=>{n[e]&&n[e]()}))},ke:(e,n,o,l)=>{return l=new t.CustomEvent(n,o),e&&e.dispatchEvent(l),l},X:(e,t)=>(t=l.se(e))&&11===l.re(t)?t.host:t,je:(e,t,n,o)=>e.setAttributeNS(t,n,o)};e.ael||(e.ael=((e,t,n,o)=>e.addEventListener(t,n,o)),e.rel=((e,t,n,o)=>e.removeEventListener(t,n,o)));try{t.addEventListener("e",null,Object.defineProperty({},"passive",{get:()=>l.fe=!0}))}catch(e){}return l})(m,n,i),w=h.s.documentElement,M=n["s-defined"]=n["s-defined"]||{},g=(e,t)=>{n.customElements.get(e.e)||(D($,b[e.e]=e,t.prototype,c,d),t.observedAttributes=Object.values(e.f).map(e=>e.m).filter(e=>!!e),n.customElements.define(e.e,t))},$={i:h,Ce:g,c:e=>b[h.he(e)],We:e=>t[e],isClient:!0,Y:e=>!(!M[h.he(e)]&&!$.c(e)),D:(e,t,n)=>console.error(e,t,n&&n.tagName),queue:t.queue=((e,t)=>{{let n=0,o=!1;const l=()=>t.performance.now(),i=!1!==e.asyncQueue,s=Promise.resolve(),r=[],a=[],c=[],f=[],u=t=>n=>{t.push(n),o||(o=!0,e.raf(b))},p=e=>{for(let t=0;t<e.length;t++)try{e[t](l())}catch(e){console.error(e)}e.length=0},d=(e,t)=>{let n,o=0;for(;o<e.length&&(n=l())<t;)try{e[o++](n)}catch(e){console.error(e)}o===e.length?e.length=0:0!==o&&e.splice(0,o)},b=()=>{n++,p(a);const t=i?l()+7*Math.ceil(n*(1/22)):Infinity;d(c,t),d(f,t),c.length>0&&(f.push(...c),c.length=0),(o=a.length+c.length+f.length>0)?e.raf(b):n=0};return e.raf||(e.raf=t.requestAnimationFrame.bind(t)),{tick(e){r.push(e),1===r.length&&s.then(()=>p(r))},read:u(a),write:u(c)}}})(m,n),le:(e,t)=>{{const n=e.M;let o=r+n+".entry.js";import(o).then(n=>{try{e.q=n[(e=>u(e).split("-").map(e=>e.charAt(0).toUpperCase()+e.slice(1)).join(""))(e.e)],function o(e,t,n,i,s){if(i){const n=t.e+(s||l);if(!t[n]){const o=e.ue("template");t[n]=o,o.innerHTML=`<style>${i}</style>`,e.me(e.s.head,o)}}}(h,e,e.o,e.q.style,e.q.styleMode),W($,t,d)}catch(t){console.error(t),e.q=class{}}},e=>console.error(e,o))}},P:!1,S:!1,ie:!1,B:a,R:new WeakMap,r:new WeakMap,K:new WeakMap,J:new WeakMap,ce:new WeakMap,_:new WeakMap,U:new WeakMap,L:new WeakMap,T:new WeakMap,A:new WeakMap,x:new WeakMap,ae:new WeakMap,z:new WeakMap,F:new WeakMap,H:new WeakMap,O:new Set,G:[]};return t.isServer=t.isPrerender=!(t.isClient=!0),t.window=n,t.location=n.location,t.document=i,t.resourcesUrl=t.publicPath=r,t.enableListener=((e,t,n,o,l)=>(function i(e,t,n,o,l,s){if(t){const i=e.U.get(t),r=e.c(i);if(r&&r.g)if(o){const o=r.g.find(e=>e.k===n);o&&e.i.d(i,n,e=>t[o.j](e),o.N,void 0===s?o.W:!!s,l)}else e.i.b(i,n)}})($,e,t,n,o,l)),$.Z=t.emit=((e,n,o)=>h.ke(e,t.eventNameFn?t.eventNameFn(n):n,o)),m.h=o,m.Context=t,m.onReady=(()=>new Promise(e=>$.queue.write(()=>$.O.size?$.G.push(e):e()))),$.render=((e,t)=>{let n,o,l,i,s,r,a;const c=(l,p,d,b,m,h,w,M,g)=>{if(M=p.vchildren[d],n||(i=!0,"slot"===M.vtag&&(o&&t.I(b,o+"-s"),M.vchildren?M.Ne=!0:M.Oe=!0)),f(M.vtext))M.t=t.ne(M.vtext);else if(M.Oe)M.t=t.ne("");else{if(h=M.t=y||"svg"===M.vtag?t.pe("http://www.w3.org/2000/svg",M.vtag):t.ue(M.Ne?"slot-fb":M.vtag),e.Y(h)&&e._.delete(a),y="svg"===M.vtag||"foreignObject"!==M.vtag&&y,v(e,null,M,y),f(o)&&h["s-si"]!==o&&t.I(h,h["s-si"]=o),M.vchildren)for(m=0;m<M.vchildren.length;++m)(w=c(l,M,m,h))&&t.me(h,w);"svg"===M.vtag&&(y=!1)}return M.t["s-hn"]=r,(M.Ne||M.Oe)&&(M.t["s-sr"]=!0,M.t["s-cr"]=s,M.t["s-sn"]=M.vname||"",(g=l&&l.vchildren&&l.vchildren[d])&&g.vtag===M.vtag&&l.t&&u(l.t)),M.t},u=(n,o,l,s)=>{e.ie=!0;const a=t.oe(n);for(l=a.length-1;l>=0;l--)(s=a[l])["s-hn"]!==r&&s["s-ol"]&&(t.be(s),t.a(h(s),s,m(s)),t.be(s["s-ol"]),s["s-ol"]=null,i=!0),o&&u(s,o);e.ie=!1},p=(e,n,o,l,i,s,a,u)=>{const p=e["s-cr"];for((a=p&&t.se(p)||e).shadowRoot&&t.he(a)===r&&(a=a.shadowRoot);i<=s;++i)l[i]&&(u=f(l[i].vtext)?t.ne(l[i].vtext):c(null,o,i,e))&&(l[i].t=u,t.a(a,u,m(n)))},d=(e,n,o,i)=>{for(;n<=o;++n)f(e[n])&&(i=e[n].t,l=!0,i["s-ol"]?t.be(i["s-ol"]):u(i,!0),t.be(i))},b=(e,t)=>{return e.vtag===t.vtag&&e.vkey===t.vkey&&("slot"!==e.vtag||e.vname===t.vname)},m=e=>{return e&&e["s-ol"]?e["s-ol"]:e},h=e=>{return t.se(e["s-ol"]?e["s-ol"]:e)},w=(n,o,l)=>{const i=o.t=n.t,s=n.vchildren,r=o.vchildren;y=o.t&&f(t.X(o.t))&&void 0!==o.t.ownerSVGElement,y="svg"===o.vtag||"foreignObject"!==o.vtag&&y,f(o.vtext)?(l=i["s-cr"])?t.Me(t.se(l),o.vtext):n.vtext!==o.vtext&&t.Me(i,o.vtext):("slot"!==o.vtag&&v(e,n,o,y),f(s)&&f(r)?((e,n,o,l,i,s,r,a)=>{let v=0,y=0,M=n.length-1,g=n[0],$=n[M],k=l.length-1,j=l[0],C=l[k];for(;v<=M&&y<=k;)if(null==g)g=n[++v];else if(null==$)$=n[--M];else if(null==j)j=l[++y];else if(null==C)C=l[--k];else if(b(g,j))w(g,j),g=n[++v],j=l[++y];else if(b($,C))w($,C),$=n[--M],C=l[--k];else if(b(g,C))"slot"!==g.vtag&&"slot"!==C.vtag||u(t.se(g.t)),w(g,C),t.a(e,g.t,t.ve($.t)),g=n[++v],C=l[--k];else if(b($,j))"slot"!==g.vtag&&"slot"!==C.vtag||u(t.se($.t)),w($,j),t.a(e,$.t,g.t),$=n[--M],j=l[++y];else{for(i=null,s=v;s<=M;++s)if(n[s]&&f(n[s].vkey)&&n[s].vkey===j.vkey){i=s;break}f(i)?((a=n[i]).vtag!==j.vtag?r=c(n&&n[y],o,i,e):(w(a,j),n[i]=void 0,r=a.t),j=l[++y]):(r=c(n&&n[y],o,y,e),j=l[++y]),r&&t.a(h(g.t),r,m(g.t))}v>M?p(e,null==l[k+1]?null:l[k+1].t,o,l,y,k):y>k&&d(n,v,M)})(i,s,o,r):f(r)?(f(n.vtext)&&t.Me(i,""),p(i,null,o,r,0,r.length-1)):f(s)&&d(s,0,s.length-1)),y&&"svg"===o.vtag&&(y=!1)},M=(e,n,o,l,i,s,r,a)=>{for(l=0,i=(o=t.oe(e)).length;l<i;l++)if(n=o[l],1===t.re(n)){if(n["s-sr"])for(r=n["s-sn"],n.hidden=!1,s=0;s<i;s++)if(o[s]["s-hn"]!==n["s-hn"])if(a=t.re(o[s]),""!==r){if(1===a&&r===t.te(o[s],"slot")){n.hidden=!0;break}}else if(1===a||3===a&&""!==t.we(o[s]).trim()){n.hidden=!0;break}M(n)}},g=[],$=(e,n,o,i,s,r,a,c,f,u)=>{for(s=0,r=(n=t.oe(e)).length;s<r;s++){if((o=n[s])["s-sr"]&&(i=o["s-cr"]))for(c=t.oe(t.se(i)),f=o["s-sn"],a=c.length-1;a>=0;a--)(i=c[a])["s-cn"]||i["s-nr"]||i["s-hn"]===o["s-hn"]||((3===(u=t.re(i))||8===u)&&""===f||1===u&&null===t.te(i,"slot")&&""===f||1===u&&t.te(i,"slot")===f)&&(g.some(e=>e.xe===i)||(l=!0,i["s-sn"]=f,g.push({Ee:o,xe:i})));1===t.re(o)&&$(o)}};return(c,f,u,p,d,b,m,v,y,h,k,j)=>{if(a=c,r=t.he(a),s=a["s-cr"],n=p,o=a["s-sc"],i=l=!1,w(f,u),i){for($(u.t),m=0;m<g.length;m++)(v=g[m]).xe["s-ol"]||((y=t.ne(""))["s-nr"]=v.xe,t.a(t.se(v.xe),v.xe["s-ol"]=y,v.xe));for(e.ie=!0,m=0;m<g.length;m++){for(v=g[m],k=t.se(v.Ee),j=t.ve(v.Ee),y=v.xe["s-ol"];y=t.ye(y);)if((h=y["s-nr"])&&h&&h["s-sn"]===v.xe["s-sn"]&&k===t.se(h)&&(h=t.ve(h))&&h&&!h["s-nr"]){j=h;break}(!j&&k!==t.se(v.xe)||t.ve(v.xe)!==j)&&v.xe!==j&&(t.be(v.xe),t.a(k,v.xe,j))}e.ie=!1}return l&&M(u.t),g.length=0,u}})($,h),w["s-ld"]=[],w["s-rn"]=!0,w["s-init"]=(()=>{$._.set(w,m.loaded=$.S=!0),h.ke(n,"appload",{detail:{namespace:e}})}),p.map(k).forEach(e=>g(e,class extends HTMLElement{})),$.V||w["s-init"](),((e,t,n,o,l,i)=>{if(t.componentOnReady=((t,n)=>{if(!t.nodeName.includes("-"))return n(null),!1;const o=e.c(t);if(o)if(e._.has(t))n(t);else{const o=e.ae.get(t)||[];o.push(n),e.ae.set(t,o)}return!!o}),l){for(i=l.length-1;i>=0;i--)t.componentOnReady(l[i][0],l[i][1])&&l.splice(i,1);for(i=0;i<o.length;i++)if(!n[o[i]].componentOnReady)return;for(i=0;i<l.length;i++)l[i][1](null);l.length=0}})($,m,n,n["s-apps"],n["s-cr"]),m.initialized=!0,$})(n,x,w,d,r,h,c);
})(window,document,{},"disco","hydrated",[["disco-card","tdqai92l",1,[["selected",1,0,1,4]]],["disco-dropdown","tdqai92l",1,[["el",64],["error",1,0,1,2],["label",1,0,1,2],["maxlength",1,0,1,2],["minlength",1,0,1,2],["options",1],["placeholder",1,0,1,2],["show",16],["value",2,0,1,2],["valueLabel",2,0,"value-label",2],["width",1,0,1,2]],0,[["discoDropDownOptionSelected","discoDropDownOptionSelectedHandler"]]],["disco-error","esxo2f70",1],["disco-game-card","tdqai92l",1,[["game",1,0,1,1],["selected",1,0,1,4]]],["disco-game-selection","kmegbr5n",1,[["count",1,0,1,2],["hearts",1,0,1,2],["imgUrl",1,0,"img-url",2],["percent",1,0,1,2],["releaseDate",1,0,"release-date",2],["title",1,0,1,2]]],["disco-header","tdqai92l",1,[["count",1,0,1,2],["hearts",1,0,1,2],["percent",1,0,1,2],["releaseDate",1,0,"release-date",2],["title",1,0,1,2]]],["disco-input","tdqai92l",1,[["el",64],["error",1,0,1,2],["label",1,0,1,2],["maxlength",1,0,1,2],["minlength",1,0,1,2],["placeholder",1,0,1,2],["type",1,0,1,2],["value",2,0,1,2],["width",1,0,1,2]]],["disco-label","esxo2f70",1],["disco-list","tdqai92l",1,[["games",16],["isLoading",16],["releaseEndYear",16],["releaseStartYear",16],["searchField",16],["selectedId",16],["sortBy",16]],0,[["discoGameCardSelected","onDiscoGameSelected"],["discoInput","onDiscoInput"],["discoDropDownSelected","onDiscoDropDownSelected"],["discoReleaseYears","onDiscoReleaseYears"]]],["disco-option","tdqai92l",1,[["label",1,0,1,2],["selected",1,0,1,4],["value",1,0,1,2]]],["disco-ratings","6jfwhsnh",1,[["count",1,0,1,2],["hearts",1,0,1,2],["percent",1,0,1,2]]],["disco-release-years","tdqai92l",1,[["endYear",2,0,"end-year",2],["startYear",2,0,"start-year",2]]]]);
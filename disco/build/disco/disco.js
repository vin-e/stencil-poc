!function(e,t,s,r,i,o,n,c,d,a,l,u,p,h){for(l=e.disco=e.disco||{},(u=t.createElement("style")).innerHTML=d+"{visibility:hidden}.hydrated{visibility:inherit}",u.setAttribute("data-styles",""),p=t.head.querySelector("meta[charset]"),t.head.insertBefore(u,p?p.nextSibling:t.head.firstChild),function(e,t,s){(e["s-apps"]=e["s-apps"]||[]).push("disco"),s.componentOnReady||(s.componentOnReady=function(){var t=this;function s(s){if(t.nodeName.indexOf("-")>0){for(var r=e["s-apps"],i=0,o=0;o<r.length;o++)if(e[r[o]].componentOnReady){if(e[r[o]].componentOnReady(t,s))return;i++}if(i<r.length)return void(e["s-cr"]=e["s-cr"]||[]).push([t,s])}s(null)}return e.Promise?new e.Promise(s):{then:s}})}(e,0,a),i=i||l.resourcesUrl,u=(p=t.querySelectorAll("script")).length-1;u>=0&&!(h=p[u]).src&&!h.hasAttribute("data-resources-url");u--);p=h.getAttribute("data-resources-url"),!i&&p&&(i=p),!i&&h.src&&(i=(p=h.src.split("/").slice(0,-1)).join("/")+(p.length?"/":"")+"disco/"),u=t.createElement("script"),function(e,t,s,r){return!(t.search.indexOf("core=esm")>0)&&(!(!(t.search.indexOf("core=es5")>0||"file:"===t.protocol)&&e.customElements&&e.customElements.define&&e.fetch&&e.CSS&&e.CSS.supports&&e.CSS.supports("color","var(--c)")&&"noModule"in s)||function(e){try{return new Function('import("")'),!1}catch(e){}return!0}())}(e,e.location,u)?u.src=i+"disco.bl3aoyqp.js":(u.src=i+"disco.qnsxe2rm.js",u.setAttribute("type","module"),u.setAttribute("crossorigin",!0)),u.setAttribute("data-resources-url",i),u.setAttribute("data-namespace","disco"),t.head.appendChild(u)}(window,document,0,0,0,0,0,0,"disco-card,disco-dropdown,disco-error,disco-game-card,disco-game-selection,disco-header,disco-input,disco-label,disco-list,disco-option,disco-ratings,disco-release-years",HTMLElement.prototype);
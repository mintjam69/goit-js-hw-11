import{a as f,i as m,S as p}from"./assets/vendor-DFCQGEf1.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const y="46111886-e1974f40af7d3aa808257f9c9",g=async s=>{const o=`https://pixabay.com/api/?key=${y}&q=${encodeURIComponent(s)}&image_type=photo&orientation=horizontal&safesearch=true`;try{const n=(await f.get(o)).data;if(n.hits.length===0)throw new Error("No images found");return n.hits}catch(r){throw console.error(r),r}},h=s=>{const o=document.querySelector(".gallery");o.innerHTML="";const r=s.map(({webformatURL:n,largeImageURL:e,tags:t,likes:i,views:c,comments:u,downloads:d})=>`
            <li class="gallery-item">
                <a href="${e}" class="gallery-link">
                    <img class="gallery-image" src="${n}" alt="${t}" loading="lazy" />
                    <div class="info">
                        <p class="info-item"><b>Likes:</b> ${i}</p>
                        <p class="info-item"><b>Views:</b> ${c}</p>
                        <p class="info-item"><b>Comments:</b> ${u}</p>
                        <p class="info-item"><b>Downloads:</b> ${d}</p>
                    </div>
                </a>
            </li>
        `).join("");o.insertAdjacentHTML("beforeend",r)},a=s=>{m.error({title:"Error",message:s,position:"topRight",timeout:2e3,backgroundColor:"#EF4040",closeOnClick:!0})},b=document.querySelector("#search-form"),L=document.querySelector(".gallery"),l=document.querySelector("#loader"),q=new p(".gallery a");b.addEventListener("submit",s=>{s.preventDefault();const o=s.target.elements.query.value.trim();if(!o){a("Please enter a search term."),l.style.display="none";return}l.style.display="block",L.innerHTML="",g(o).then(r=>{console.log("Images received",r),r.length===0?a("Sorry, there are no images matching your search query. Please try again!"):(h(r),q.refresh())}).catch(r=>{console.log("Error:",r),a(r.message)}).finally(()=>{setTimeout(()=>{l.style.display="none"},.5)})});
//# sourceMappingURL=index.js.map

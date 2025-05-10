import{a as f,i as m,S as y}from"./assets/vendor-DFCQGEf1.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(r){if(r.ep)return;r.ep=!0;const o=t(r);fetch(r.href,o)}})();const p="46111886-e1974f40af7d3aa808257f9c9",g=async e=>{const s=`https://pixabay.com/api/?key=${p}&q=${encodeURIComponent(e)}&image_type=photo&orientation=horizontal&safesearch=true`;try{return(await f.get(s)).data.hits}catch(t){throw console.error(t),t}},h=()=>{const e=document.querySelector(".loader");e&&(e.style.display="block")},l=()=>{const e=document.querySelector(".loader");e&&(e.style.display="none")},b=()=>{const e=document.querySelector(".gallery");e&&(e.innerHTML="")},L=e=>{const s=document.querySelector(".gallery"),t=e.map(({webformatURL:n,largeImageURL:r,tags:o,likes:a,views:c,comments:d,downloads:u})=>`
            <li class="gallery-item">
                <a href="${r}" class="gallery-link">
                    <img class="gallery-image" src="${n}" alt="${o}" loading="lazy" />
                    <div class="info">
                        <p class="info-item"><b>Likes:</b> ${a}</p>
                        <p class="info-item"><b>Views:</b> ${c}</p>
                        <p class="info-item"><b>Comments:</b> ${d}</p>
                        <p class="info-item"><b>Downloads:</b> ${u}</p>
                    </div>
                </a>
            </li>
        `).join("");s.insertAdjacentHTML("beforeend",t)},i=e=>{m.error({title:"Error",message:e,position:"topRight",timeout:2e3,backgroundColor:"#EF4040",closeOnClick:!0})},q=document.querySelector(".form"),S=new y(".gallery a");q.addEventListener("submit",e=>{e.preventDefault();const s=e.target.elements.query.value.trim();if(!s){i("Please enter a search term."),l();return}h(),b(),g(s).then(t=>{console.log("Images received",t),t.length===0?i("Sorry, there are no images matching your search query. Please try again!"):(L(t),S.refresh())}).catch(t=>{console.log("Error:",t),i(t.message)}).finally(()=>{setTimeout(()=>{l()},500)})});
//# sourceMappingURL=index.js.map

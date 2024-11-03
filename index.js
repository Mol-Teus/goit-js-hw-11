import{i as m,S as f}from"./assets/vendor-5ObWk2rO.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();const g=(a,e,t)=>{m[a]({title:e,message:t,timeout:2e3,progressBar:!1,position:"center"})},h=(a,e="")=>{g("error",e,a)},n=new URLSearchParams({key:"46874529-ef321ad5a592feec695df9124",q:"",image_type:"photo",orientation:"horizontal",safesearch:"true"}),y=a=>(n.set("q",a),fetch(`https://pixabay.com/api/?${n}`).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()}).then(e=>{if(e.hits.length===0)throw new Error("Sorry, there are no images matching your search query. Please try again!");return e.hits.map(t=>({webformatURL:t.webformatURL,largeImageURL:t.largeImageURL,tags:t.tags,likes:t.likes,views:t.views,comments:t.comments,downloads:t.downloads}))}).catch(e=>{throw e})),p=({webformatURL:a,largeImageURL:e,tags:t,likes:i,views:r,comments:s,downloads:o})=>`<li class="gallery-item">
  <a class="gallery-link" href="${e}">
    <img class="gallery-image" src="${a}" alt="${t}" />
    <div class="image-details">
       <div class="details-header">Likes</div>
        <div class="details-header">Views</div>
        <div class="details-header">Comments</div>
        <div class="details-header">Downloads</div>
        <div class="details-value">${i}</div>
        <div class="details-value">${r}</div>
        <div class="details-value">${s}</div>
        <div class="details-value">${o}</div>
      </div>
  </a>
</li>`,l=new f(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250,animationSpeed:300,overlay:!0,overlayOpacity:.5});l.on("show.simplelightbox",function(){});l.on("closed.simplelightbox",function(){});const v=(a,e)=>{a.innerHTML=e.map(t=>p(t)).join(""),l.refresh()},w=document.querySelector(".search-field"),u=document.querySelector(".loader-container"),c=document.querySelector(".gallery");function L(){u.style.display="flex"}function d(){u.style.display="none"}document.querySelector(".form").addEventListener("submit",a=>{a.preventDefault();const e=w.value.trim();e.length!==0&&(L(),y(e).then(t=>{v(c,t),d()}).catch(t=>{h(t.message),d(),c.innerHTML=""}))});
//# sourceMappingURL=index.js.map

import"https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();new Swiper(".swiper-container",{loop:!0,slidesPerView:1,spaceBetween:0,breakpoints:{768:{slidesPerView:2,spaceBetween:0},1280:{slidesPerView:3,spaceBetween:0}},pagination:{el:".pagination",bulletClass:"pagination__button",bulletActiveClass:"pagination__button--active"},navigation:{nextEl:".carousel-button.next",prevEl:".carousel-button.prev"}});
//# sourceMappingURL=commonHelpers.js.map

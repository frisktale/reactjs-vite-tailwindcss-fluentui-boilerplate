export function __vite_legacy_guard(){import("data:text/javascript,")}import{j as e,D as r,T as t,R as i,r as a}from"./vendor.cd35ac05.js";function l(...e){return e.filter(Boolean).join(" ")}!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver((e=>{for(const t of e)if("childList"===t.type)for(const e of t.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&r(e)})).observe(document,{childList:!0,subtree:!0})}function r(e){if(e.ep)return;e.ep=!0;const r=function(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?r.credentials="include":"anonymous"===e.crossorigin?r.credentials="omit":r.credentials="same-origin",r}(e);fetch(e.href,r)}}();const o=e.exports.jsx,s=e.exports.jsxs,n={small:"w-10 h-10",medium:"w-12 h-12",large:"w-14 h-14"},c=({size:e="medium"})=>o("span",{"data-testid":"empty-avatar",className:l("inline-block overflow-hidden bg-gray-100 rounded-full",n[e]),children:o("svg",{className:"w-full h-full text-gray-300",fill:"currentColor",viewBox:"0 0 24 24",children:o("path",{d:"M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z"})})});function d({size:e="medium",src:r,alt:t}){return r?o("img",{className:l("inline-block rounded-full",n[e]),src:r,alt:t}):o(c,{size:e})}function m(){return o("div",{className:"bg-white",children:o("div",{className:"py-16 sm:py-24 px-4 sm:px-6 lg:px-8 mx-auto max-w-screen-xl",children:s("div",{className:"text-center",children:[o("h2",{className:"text-base font-semibold tracking-wide text-blue-600 uppercase",children:"Welcome to"}),o("p",{className:"my-3 text-4xl sm:text-5xl lg:text-6xl font-bold sm:tracking-tight text-gray-900",children:"reactjs-vite-tailwindcss-boilerplate"}),o("p",{className:"text-xl text-gray-400",children:"Start building for free."}),o("p",{className:"mt-5",children:o(d,{size:"large",src:"https://www.gravatar.com/avatar/4405735f6f3129e0286d9d43e7b460d0"})}),o("p",{children:o(r,{className:"bg-blue-500 hover:bg-red-500",children:"Hover"})}),o(t,{label:"输入",className:"focus:ring-4 focus:ring-blue-600"}),s("div",{className:"group border-indigo-500 hover:bg-white hover:shadow-lg hover:border-transparent ",children:[o("p",{className:"text-indigo-600 group-hover:text-gray-900 ",children:"New Project"}),o("p",{className:"text-indigo-500 group-hover:text-gray-500 ",children:"Create a new project from a variety of starting templates."})]})]})})})}i.render(o(a.exports.StrictMode,{children:o(m,{})}),document.getElementById("root"));

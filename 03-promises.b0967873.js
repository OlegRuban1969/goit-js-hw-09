function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},l=t.parcelRequired7c6;null==l&&((l=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var l={id:e,exports:{}};return n[e]=l,t.call(l.exports,l,l.exports),l.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){o[e]=t},t.parcelRequired7c6=l);var i=l("7Y9D8");function r(e,t){return new Promise(((n,o)=>{const l=Math.random()>.3;setTimeout((()=>{l?n({position:e,delay:t}):o({position:e,delay:t})}),t)}))}document.querySelector(".form").addEventListener("submit",(function(t){t.preventDefault();const n=t.target,o=n.elements.delay,l=n.elements.step,a=n.elements.amount,s=parseInt(o.value),u=parseInt(l.value),d=parseInt(a.value);let f=s;for(let t=0;t<d;t++)r(t+1,f).then((({position:t,delay:n})=>{e(i).Notify.success(`✅ Fulfilled promise ${t} in ${n}ms`)})).catch((({position:t,delay:n})=>{e(i).Notify.failure(`❌ Rejected promise ${t} in ${n}ms`)})).finally((()=>{o.value="",l.value="",a.value=""})),f+=u}));
//# sourceMappingURL=03-promises.b0967873.js.map
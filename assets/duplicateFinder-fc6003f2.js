(function(){"use strict";/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const S=Symbol("Comlink.proxy"),L=Symbol("Comlink.endpoint"),z=Symbol("Comlink.releaseProxy"),k=Symbol("Comlink.finalizer"),E=Symbol("Comlink.thrown"),A=e=>typeof e=="object"&&e!==null||typeof e=="function",N={canHandle:e=>A(e)&&e[S],serialize(e){const{port1:t,port2:n}=new MessageChannel;return P(e,t),[n,[n]]},deserialize(e){return e.start(),_(e)}},H={canHandle:e=>A(e)&&E in e,serialize({value:e}){let t;return e instanceof Error?t={isError:!0,value:{message:e.message,name:e.name,stack:e.stack}}:t={isError:!1,value:e},[t,[]]},deserialize(e){throw e.isError?Object.assign(new Error(e.value.message),e.value):e.value}},M=new Map([["proxy",N],["throw",H]]);function F(e,t){for(const n of e)if(t===n||n==="*"||n instanceof RegExp&&n.test(t))return!0;return!1}function P(e,t=globalThis,n=["*"]){t.addEventListener("message",function s(r){if(!r||!r.data)return;if(!F(n,r.origin)){console.warn(`Invalid origin '${r.origin}' for comlink proxy`);return}const{id:g,type:a,path:c}=Object.assign({path:[]},r.data),l=(r.data.argumentList||[]).map(d);let o;try{const i=c.slice(0,-1).reduce((u,y)=>u[y],e),f=c.reduce((u,y)=>u[y],e);switch(a){case"GET":o=f;break;case"SET":i[c.slice(-1)[0]]=d(r.data.value),o=!0;break;case"APPLY":o=f.apply(i,l);break;case"CONSTRUCT":{const u=new f(...l);o=U(u)}break;case"ENDPOINT":{const{port1:u,port2:y}=new MessageChannel;P(e,y),o=D(u,[u])}break;case"RELEASE":o=void 0;break;default:return}}catch(i){o={value:i,[E]:0}}Promise.resolve(o).catch(i=>({value:i,[E]:0})).then(i=>{const[f,u]=p(i);t.postMessage(Object.assign(Object.assign({},f),{id:g}),u),a==="RELEASE"&&(t.removeEventListener("message",s),O(t),k in e&&typeof e[k]=="function"&&e[k]())}).catch(i=>{const[f,u]=p({value:new TypeError("Unserializable return value"),[E]:0});t.postMessage(Object.assign(Object.assign({},f),{id:g}),u)})}),t.start&&t.start()}function V(e){return e.constructor.name==="MessagePort"}function O(e){V(e)&&e.close()}function _(e,t){return x(e,[],t)}function h(e){if(e)throw new Error("Proxy has been released and is not useable")}function R(e){return m(e,{type:"RELEASE"}).then(()=>{O(e)})}const w=new WeakMap,b="FinalizationRegistry"in globalThis&&new FinalizationRegistry(e=>{const t=(w.get(e)||0)-1;w.set(e,t),t===0&&R(e)});function j(e,t){const n=(w.get(t)||0)+1;w.set(t,n),b&&b.register(e,t,e)}function I(e){b&&b.unregister(e)}function x(e,t=[],n=function(){}){let s=!1;const r=new Proxy(n,{get(g,a){if(h(s),a===z)return()=>{I(r),R(e),s=!0};if(a==="then"){if(t.length===0)return{then:()=>r};const c=m(e,{type:"GET",path:t.map(l=>l.toString())}).then(d);return c.then.bind(c)}return x(e,[...t,a])},set(g,a,c){h(s);const[l,o]=p(c);return m(e,{type:"SET",path:[...t,a].map(i=>i.toString()),value:l},o).then(d)},apply(g,a,c){h(s);const l=t[t.length-1];if(l===L)return m(e,{type:"ENDPOINT"}).then(d);if(l==="bind")return x(e,t.slice(0,-1));const[o,i]=T(c);return m(e,{type:"APPLY",path:t.map(f=>f.toString()),argumentList:o},i).then(d)},construct(g,a){h(s);const[c,l]=T(a);return m(e,{type:"CONSTRUCT",path:t.map(o=>o.toString()),argumentList:c},l).then(d)}});return j(r,e),r}function W(e){return Array.prototype.concat.apply([],e)}function T(e){const t=e.map(p);return[t.map(n=>n[0]),W(t.map(n=>n[1]))]}const C=new WeakMap;function D(e,t){return C.set(e,t),e}function U(e){return Object.assign(e,{[S]:!0})}function p(e){for(const[t,n]of M)if(n.canHandle(e)){const[s,r]=n.serialize(e);return[{type:"HANDLER",name:t,value:s},r]}return[{type:"RAW",value:e},C.get(e)||[]]}function d(e){switch(e.type){case"HANDLER":return M.get(e.name).deserialize(e.value);case"RAW":return e.value}}function m(e,t,n){return new Promise(s=>{const r=G();e.addEventListener("message",function g(a){!a.data||!a.data.id||a.data.id!==r||(e.removeEventListener("message",g),s(a.data))}),e.start&&e.start(),e.postMessage(Object.assign({id:r},t),n)})}function G(){return new Array(4).fill(0).map(()=>Math.floor(Math.random()*Number.MAX_SAFE_INTEGER).toString(16)).join("-")}P(e=>{const t=e.reduce((n,s)=>({...n,[s]:(n[s]||0)+1}),{});return Object.entries(t).filter(([n,s])=>s>1).map(([n])=>n)})})();

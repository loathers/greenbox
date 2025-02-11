(function(){"use strict";/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const x=Symbol("Comlink.proxy"),z=Symbol("Comlink.endpoint"),N=Symbol("Comlink.releaseProxy"),P=Symbol("Comlink.finalizer"),w=Symbol("Comlink.thrown"),M=e=>typeof e=="object"&&e!==null||typeof e=="function",H={canHandle:e=>M(e)&&e[x],serialize(e){const{port1:t,port2:r}=new MessageChannel;return S(e,t),[r,[r]]},deserialize(e){return e.start(),_(e)}},L={canHandle:e=>M(e)&&w in e,serialize({value:e}){let t;return e instanceof Error?t={isError:!0,value:{message:e.message,name:e.name,stack:e.stack}}:t={isError:!1,value:e},[t,[]]},deserialize(e){throw e.isError?Object.assign(new Error(e.value.message),e.value):e.value}},A=new Map([["proxy",H],["throw",L]]);function F(e,t){for(const r of e)if(t===r||r==="*"||r instanceof RegExp&&r.test(t))return!0;return!1}function S(e,t=globalThis,r=["*"]){t.addEventListener("message",function c(n){if(!n||!n.data)return;if(!F(r,n.origin)){console.warn(`Invalid origin '${n.origin}' for comlink proxy`);return}const{id:a,type:g,path:u}=Object.assign({path:[]},n.data),l=(n.data.argumentList||[]).map(y);let s;try{const o=u.slice(0,-1).reduce((i,m)=>i[m],e),f=u.reduce((i,m)=>i[m],e);switch(g){case"GET":s=f;break;case"SET":o[u.slice(-1)[0]]=y(n.data.value),s=!0;break;case"APPLY":s=f.apply(o,l);break;case"CONSTRUCT":{const i=new f(...l);s=U(i)}break;case"ENDPOINT":{const{port1:i,port2:m}=new MessageChannel;S(e,m),s=D(i,[i])}break;case"RELEASE":s=void 0;break;default:return}}catch(o){s={value:o,[w]:0}}Promise.resolve(s).catch(o=>({value:o,[w]:0})).then(o=>{const[f,i]=p(o);t.postMessage(Object.assign(Object.assign({},f),{id:a}),i),g==="RELEASE"&&(t.removeEventListener("message",c),R(t),P in e&&typeof e[P]=="function"&&e[P]())}).catch(o=>{const[f,i]=p({value:new TypeError("Unserializable return value"),[w]:0});t.postMessage(Object.assign(Object.assign({},f),{id:a}),i)})}),t.start&&t.start()}function V(e){return e.constructor.name==="MessagePort"}function R(e){V(e)&&e.close()}function _(e,t){const r=new Map;return e.addEventListener("message",function(n){const{data:a}=n;if(!a||!a.id)return;const g=r.get(a.id);if(g)try{g(a)}finally{r.delete(a.id)}}),k(e,r,[],t)}function h(e){if(e)throw new Error("Proxy has been released and is not useable")}function T(e){return d(e,new Map,{type:"RELEASE"}).then(()=>{R(e)})}const E=new WeakMap,b="FinalizationRegistry"in globalThis&&new FinalizationRegistry(e=>{const t=(E.get(e)||0)-1;E.set(e,t),t===0&&T(e)});function I(e,t){const r=(E.get(t)||0)+1;E.set(t,r),b&&b.register(e,t,e)}function W(e){b&&b.unregister(e)}function k(e,t,r=[],c=function(){}){let n=!1;const a=new Proxy(c,{get(g,u){if(h(n),u===N)return()=>{W(a),T(e),t.clear(),n=!0};if(u==="then"){if(r.length===0)return{then:()=>a};const l=d(e,t,{type:"GET",path:r.map(s=>s.toString())}).then(y);return l.then.bind(l)}return k(e,t,[...r,u])},set(g,u,l){h(n);const[s,o]=p(l);return d(e,t,{type:"SET",path:[...r,u].map(f=>f.toString()),value:s},o).then(y)},apply(g,u,l){h(n);const s=r[r.length-1];if(s===z)return d(e,t,{type:"ENDPOINT"}).then(y);if(s==="bind")return k(e,t,r.slice(0,-1));const[o,f]=C(l);return d(e,t,{type:"APPLY",path:r.map(i=>i.toString()),argumentList:o},f).then(y)},construct(g,u){h(n);const[l,s]=C(u);return d(e,t,{type:"CONSTRUCT",path:r.map(o=>o.toString()),argumentList:l},s).then(y)}});return I(a,e),a}function j(e){return Array.prototype.concat.apply([],e)}function C(e){const t=e.map(p);return[t.map(r=>r[0]),j(t.map(r=>r[1]))]}const O=new WeakMap;function D(e,t){return O.set(e,t),e}function U(e){return Object.assign(e,{[x]:!0})}function p(e){for(const[t,r]of A)if(r.canHandle(e)){const[c,n]=r.serialize(e);return[{type:"HANDLER",name:t,value:c},n]}return[{type:"RAW",value:e},O.get(e)||[]]}function y(e){switch(e.type){case"HANDLER":return A.get(e.name).deserialize(e.value);case"RAW":return e.value}}function d(e,t,r,c){return new Promise(n=>{const a=G();t.set(a,n),e.start&&e.start(),e.postMessage(Object.assign({id:a},r),c)})}function G(){return new Array(4).fill(0).map(()=>Math.floor(Math.random()*Number.MAX_SAFE_INTEGER).toString(16)).join("-")}S(e=>{const t=new Set,r=new Set;for(const c of e)t.has(c)?r.add(c):t.add(c);return[...r]})})();

var Lm=Object.defineProperty;var Om=(e,t,r)=>t in e?Lm(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var Rt=(e,t,r)=>(Om(e,typeof t!="symbol"?t+"":t,r),r);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function r(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=r(i);fetch(i.href,s)}})();const Nm=[(e,t)=>t in e,(e,t)=>t in e.constructor.prototype];function ha(e,t){return e?Nm.some(r=>{try{return r(e,t)}catch{return!1}}):!1}function qe(e){let t;try{t=Reflect.ownKeys(e)}catch{}return t??[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}function Im(e,t,r){return e.reduce((n,i,s,a)=>{const o=t(i,s,a);return r(o,i,s,a)&&n.push(o),n},[])}function Yu(e){return!!e}const Dm={capitalizeFirstLetter:!1};function Rm(e){return e.length?e[0].toUpperCase()+e.slice(1):""}function _m(e,t){return t.capitalizeFirstLetter?Rm(e):e}function Vm(e,t=Dm){const r=e.toLowerCase();if(!r.length)return"";const n=r.replace(/^-+/,"").replace(/-{2,}/g,"-").replace(/-(?:.|$)/g,i=>{const s=i[1];return s?s.toUpperCase():""});return _m(n,t)}var wo;(function(e){e.Upper="upper",e.Lower="lower"})(wo||(wo={}));var yo;(function(e){e.FirstThenWait="first-then-wait",e.AfterWait="after-wait"})(yo||(yo={}));function ma(e){return e?e instanceof Error?e.message:ha(e,"message")?String(e.message):String(e):""}function Hm(e){return e instanceof Error?e:new Error(ma(e))}function Bm(e,t){const r=Hm(e);return r.message=`${t}: ${r.message}`,r}function Fm(e,t,r){if(t in e)return e[t];{const n=r();return Qu(n)?new Promise(async(i,s)=>{try{const a=await n;e[t]=a,i(a)}catch(a){s(a)}}):(e[t]=n,n)}}function Ju(e,t){let r=!1;const n=qe(e).reduce((i,s)=>{const a=t(s,e[s],e);return a instanceof Promise&&(r=!0),{...i,[s]:a}},{});return r?new Promise(async(i,s)=>{try{await Promise.all(qe(n).map(async a=>{const o=await n[a];n[a]=o})),i(n)}catch(a){s(a)}}):n}function Fr(e){return!!e&&typeof e=="object"}function Um(){return globalThis.crypto?globalThis.crypto:require("crypto").webcrypto}Um();class $i extends Error{constructor(){super(...arguments),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AssertionError"})}}const jm=[(e,t)=>t in e,(e,t)=>t in e.constructor.prototype];function Xu(e,t){return e?jm.some(r=>{try{return r(e,t)}catch{return!1}}):!1}function Qu(e){return e instanceof Promise}function rr(e){return e===null?"null":Array.isArray(e)?"array":typeof e}function T(e,t){return rr(e)===t}function Ei(e,t,r){if(!(e instanceof t))throw new $i(r||"instanceof assertion failed")}function ed(e,t){if(e==null)throw new $i(t||"defined assertion failed")}class zm extends Error{constructor(t){super(`Failed to compare objects using JSON.stringify: ${t}`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"JsonStringifyError"})}}function qi(e,t){return JSON.stringify(e)===JSON.stringify(t)}function ce(e,t){try{if(e===t||qi(e,t))return!0;if(Fr(e)&&Fr(t)){const r=Object.keys(e).sort(),n=Object.keys(t).sort();if(r.length||n.length)return qi(r,n)?qe(e).every(s=>ce(e[s],t[s])):!1}return qi(e,t)}catch(r){throw new zm(ma(r))}}function pa(e,t){return e===t}function Wm(e,t,r=pa){return Fr(e)&&Fr(t)?Array.from(new Set([...Object.keys(e),...Object.keys(t)])).every(i=>{const s=e[i],a=t[i];return r(s,a)}):r(e,t)}function Gm(e,t){if(e!==null&&(typeof e=="object"||typeof e=="function"))throw new $i(t||"value is not a primitive")}function Km(e){try{return Gm(e),!0}catch{return!1}}function qm(e,t){if(!(T(e,"string")||T(e,"number")||T(e,"symbol")))throw new $i(t||`value is of type '${rr(e)}' but expected a PropertyKey.`)}function Zi(e){try{return qm(e),!0}catch{return!1}}function Zm(e,t,r){const n=t;if(e.has(n))return e.get(n);{const i=r();return e.set(n,i),i}}const Ym=[(e,t)=>t in e,(e,t)=>t in e.constructor.prototype];function Ti(e,t){return e?Ym.some(r=>{try{return r(e,t)}catch{return!1}}):!1}function td(e,t){return e&&t.every(r=>Ti(e,r))}function Xn(e){let t;try{t=Reflect.ownKeys(e)}catch{}return t??[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}function ga(e){return!!e}function Jm(e,{keepNewLines:t}={}){return(t?e.replace(/[\s\n]*\n+[\s\n]*/g,`
`):e.replace(/\n/g," ")).trim().replace(/[^\S\r\n]/g," ").replace(/\s{2,}/g," ")}var bo;(function(e){e.Upper="upper",e.Lower="lower"})(bo||(bo={}));function Xm({min:e,max:t}){return e>t?{min:t,max:e}:{min:e,max:t}}var vo;(function(e){e.FirstThenWait="first-then-wait",e.AfterWait="after-wait"})(vo||(vo={}));function rd(e){if(!e||e.length===0)return;const t=e[0];return e.length===1&&t?t:new Error(e.map(r=>wa(r).trim()).join(`
`))}function wa(e){return e?e instanceof Error?e.message:Ti(e,"message")?String(e.message):String(e):""}function Qm(e){return Xn(e).filter(t=>isNaN(Number(t)))}function ep(e){return Qm(e).map(r=>e[r])}function tp(e,t){return ep(t).includes(e)}function rp(e,t){return Xn(e).filter(n=>{const i=e[n];return t(n,i,e)}).reduce((n,i)=>(n[i]=e[i],n),{})}function np(e,t){return rp(e,r=>!t.includes(r))}function Qn(e,t){let r=!1;const n=Xn(e).reduce((i,s)=>{const a=t(s,e[s],e);return a instanceof Promise&&(r=!0),{...i,[s]:a}},{});return r?new Promise(async(i,s)=>{try{await Promise.all(Xn(n).map(async a=>{const o=await n[a];n[a]=o})),i(n)}catch(a){s(a)}}):n}function $o(e,t){try{return nd(e,t),!0}catch{return!1}}function nd(e,t,r){if(e.length<t)throw new Error(r?`'${r}' is not at least '${t}' in length.`:`Array is not at least '${t}' in length.`)}function ya(){let e,t,r=!1;const n=new Promise((i,s)=>{e=a=>(r=!0,i(a)),t=a=>{r=!0,s(a)}});if(!e||!t)throw new Error(`Reject and resolve callbacks were not set by the promise constructor for ${ya.name}.`);return{promise:n,resolve:e,reject:t,isSettled(){return r}}}function ip(e){const t=ya();return e!==1/0&&setTimeout(()=>{t.resolve()},e<=0?0:e),t.promise}function sp(){return globalThis.crypto?globalThis.crypto:require("crypto").webcrypto}const ap=sp();function op({min:e,max:t}){const{min:r,max:n}=Xm({min:Math.floor(e),max:Math.floor(t)}),i=n-r+1,s=Math.ceil(Math.log2(i)/8),a=Math.floor(256**s/i)*i,o=new Uint8Array(s);let l;do ap.getRandomValues(o),l=o.reduce((c,d,u)=>c+d*256**u,0);while(l>=a);return r+l%i}const Eo=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",0,1,2,3,4,5,6,7,8,9];function lp(e=16){let t="";for(let r=0;r<e;r++){const n=op({min:0,max:Eo.length-1});t+=Eo[n]}return t}function cp(e,t){return Ti(e,"entryType")&&e.entryType===t}var X;(function(e){e.ElementExample="element-example",e.Page="page",e.Root="root"})(X||(X={}));function _t(e,t){return e.controlType===t}var te;(function(e){e.Checkbox="checkbox",e.Color="color",e.Dropdown="dropdown",e.Hidden="hidden",e.Number="number",e.Text="text"})(te||(te={}));const id=Symbol("any-type"),up={[te.Checkbox]:!1,[te.Color]:"",[te.Dropdown]:"",[te.Hidden]:id,[te.Number]:0,[te.Text]:""};function dp(e,t){if(!e)return[];const r=[];return Object.entries(e).forEach(([n,i])=>{const s=up[i.controlType];s!==id&&(typeof s!=typeof i.initValue&&r.push(new Error(`Control '${n}' in page '${t}' has invalid initValue '${i.initValue}': expected initValue of type ${typeof s} because the control is of type ${i.controlType}.`)),n||r.push(new Error(`'${t}' cannot have an empty control name.`)))}),r}function ba(e,t){const r=ei(e.title);return e.parent?[...ba(e.parent,!1),ei(e.parent.title)].concat(t?[r]:[]):t?[r]:[]}function ei(e){return Jm(e).toLowerCase().replaceAll(/\s/g,"-")}function fp({searchFor:e,searchIn:t}){return e.every((r,n)=>t[n]===r)}function Je(e){const t={...e,entryType:X.Page,elementExamples:{},descriptionParagraphs:e.descriptionParagraphs??[],controls:e.controls??{},errors:[]},r=new Set;return e.elementExamplesCallback&&e.elementExamplesCallback({defineExample(n){const i={...n,entryType:X.ElementExample,parent:t,descriptionParagraphs:n.descriptionParagraphs??[],errors:[r.has(n.title)&&new Error(`Example title '${n.title}' in page '${e.title}' is already taken.`)].filter(ga)};r.add(n.title),t.elementExamples[ei(i.title)]=i}}),t}var ze;(function(e){e.Footer="book-footer",e.NavHeader="book-nav-header"})(ze||(ze={}));async function Ns(e=1){const t=ya();function r(){requestAnimationFrame(()=>{e--,e?r():t.resolve()})}return r(),t.promise}async function hp(e){return mp(e,1)}async function mp(e,t){return new Promise(r=>{new IntersectionObserver((i,s)=>{nd(i,1),s.disconnect(),r(i[0].intersectionRatio>=t)}).observe(e)})}var pp=globalThis&&globalThis.__setFunctionName||function(e,t,r){return typeof t=="symbol"&&(t=t.description?"[".concat(t.description,"]"):""),Object.defineProperty(e,"name",{configurable:!0,value:r?"".concat(r," ",t):t})};function gp(){return class extends Event{constructor(t,r){super(t,r),Object.defineProperty(this,"detail",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.detail=r.detail}}}const wp=globalThis.CustomEvent||gp();function be(){function e(t){var r;return r=class extends wp{constructor(i){super(t,i)}},pp(r,"TypedEventConstructor"),Object.defineProperty(r,"type",{enumerable:!0,configurable:!0,writable:!0,value:t}),r}return e}var yp=globalThis&&globalThis.__setFunctionName||function(e,t,r){return typeof t=="symbol"&&(t=t.description?"[".concat(t.description,"]"):""),Object.defineProperty(e,"name",{configurable:!0,value:r?"".concat(r," ",t):t})};function rn(e){var t;return t=class extends Event{constructor(n){super(e,n)}},yp(t,"TypedEventConstructor"),Object.defineProperty(t,"type",{enumerable:!0,configurable:!0,writable:!0,value:e}),t}function bp(e){let t;try{t=Reflect.ownKeys(e)}catch{}return t??[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}function To(e){return bp(e).map(t=>e[t])}var So;(function(e){e.Upper="upper",e.Lower="lower"})(So||(So={}));var ko;(function(e){e.FirstThenWait="first-then-wait",e.AfterWait="after-wait"})(ko||(ko={}));function vp(){return globalThis.crypto?globalThis.crypto:require("crypto").webcrypto}vp();class sd{constructor(){Object.defineProperty(this,"listeners",{enumerable:!0,configurable:!0,writable:!0,value:{}})}getListenerCount(){return To(this.listeners).map(r=>(r==null?void 0:r.size)||0).reduce((r,n)=>r+n,0)}listen(t,r,n={}){const i=this.listeners,s=T(t,"string")?t:t.type;function a(){var l;return((l=i[s])==null?void 0:l.delete(r))||!1}function o(l,c){n.once&&a(),r(l,c)}return i[s]||(i[s]=new Map),i[s].set(r,{listener:o,removeListener:a}),a}removeListener(t,r){const n=T(t,"string")?t:t.type,i=this.listeners[n];if(!i)return!1;const s=i.get(r);return s?s.removeListener():!1}dispatch(t){const r=this.listeners[t.type],n=(r==null?void 0:r.size)||0;return r==null||r.forEach(i=>{i.listener(t,i.removeListener)}),n}removeAllListeners(){const r=To(this.listeners).reduce((n,i)=>{const s=(i==null?void 0:i.size)||0;return i==null||i.clear(),n+s},0);return this.listeners={},r}destroy(){this.removeAllListeners()}}class va extends sd{}function ad(e,t,r,n){return e.addEventListener(t,r,n),()=>e.removeEventListener(t,r,n)}function $t(e,t,r){return ad(globalThis,e,t,r)}const $p=Symbol("no update");class Yi extends be()("observable-value-update"){}class s$ extends be()("observable-value-resolve"){}class a$ extends be()("observable-value-error"){}class Ep extends rn("observable-destroy"){}class o$ extends rn("observable-callback-call"){}class l$ extends be()("observable-params-update"){}class c$ extends be()("observable-interval-run"){}class u$ extends be()("observable-interval-skip"){}class d$ extends be()("observable-interval-rate-limited"){}class Tp{constructor(){Object.defineProperty(this,"listenTarget",{enumerable:!0,configurable:!0,writable:!0,value:new va}),Object.defineProperty(this,"value",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"equalityCheck",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"listenerMap",{enumerable:!0,configurable:!0,writable:!0,value:new WeakMap})}dispatch(...t){return this.listenTarget.dispatch(...t)}removeAllListeners(){return this.listenTarget.removeAllListeners()}getListenerCount(){return this.listenTarget.getListenerCount()}setValue(t,r=this.equalityCheck){return t===$p?!1:!r||!r(this.value,t)?(this.value=t,this.listenTarget.dispatch(new Yi({detail:t})),!0):!1}listen(t,r){const n=i=>r(i.detail);return this.listenerMap.set(r,n),t&&r(this.value),this.listenTarget.listen(Yi,n)}removeListener(t){const r=this.listenerMap.get(t);return!!r&&this.listenTarget.removeListener(Yi,r)}destroy(){this.listenTarget.dispatch(new Ep),this.listenTarget.destroy()}listenToEvent(t,r,n){return this.listenTarget.listen(t,r,n)}}function Sp(e,t){return Wm(e,t,kp)}function kp(e,t){return rr(e)===rr(t)&&T(e,"function")?!0:pa(e,t)}function xp(e){let t;try{t=Reflect.ownKeys(e)}catch{}return t??[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}var xo;(function(e){e.Upper="upper",e.Lower="lower"})(xo||(xo={}));var Mo;(function(e){e.FirstThenWait="first-then-wait",e.AfterWait="after-wait"})(Mo||(Mo={}));function od(e,t){return xp(e).filter(n=>{const i=e[n];return t(n,i,e)}).reduce((n,i)=>(n[i]=e[i],n),{})}function Mp(e,t){return od(e,r=>!t.includes(r))}function Ap(e,t){return od(e,r=>t.includes(r))}function Cp(){return globalThis.crypto?globalThis.crypto:require("crypto").webcrypto}Cp();class Nt extends Error{}class Pp extends Nt{constructor(t){super(`Invalid DateTime: ${t.toMessage()}`)}}class Lp extends Nt{constructor(t){super(`Invalid Interval: ${t.toMessage()}`)}}class Op extends Nt{constructor(t){super(`Invalid Duration: ${t.toMessage()}`)}}class Kt extends Nt{}class ld extends Nt{constructor(t){super(`Invalid unit ${t}`)}}class ae extends Nt{}class et extends Nt{constructor(){super("Zone is an abstract class")}}const w="numeric",De="short",we="long",ti={year:w,month:w,day:w},cd={year:w,month:De,day:w},Np={year:w,month:De,day:w,weekday:De},ud={year:w,month:we,day:w},dd={year:w,month:we,day:w,weekday:we},fd={hour:w,minute:w},hd={hour:w,minute:w,second:w},md={hour:w,minute:w,second:w,timeZoneName:De},pd={hour:w,minute:w,second:w,timeZoneName:we},gd={hour:w,minute:w,hourCycle:"h23"},wd={hour:w,minute:w,second:w,hourCycle:"h23"},yd={hour:w,minute:w,second:w,hourCycle:"h23",timeZoneName:De},bd={hour:w,minute:w,second:w,hourCycle:"h23",timeZoneName:we},vd={year:w,month:w,day:w,hour:w,minute:w},$d={year:w,month:w,day:w,hour:w,minute:w,second:w},Ed={year:w,month:De,day:w,hour:w,minute:w},Td={year:w,month:De,day:w,hour:w,minute:w,second:w},Ip={year:w,month:De,day:w,weekday:De,hour:w,minute:w},Sd={year:w,month:we,day:w,hour:w,minute:w,timeZoneName:De},kd={year:w,month:we,day:w,hour:w,minute:w,second:w,timeZoneName:De},xd={year:w,month:we,day:w,weekday:we,hour:w,minute:w,timeZoneName:we},Md={year:w,month:we,day:w,weekday:we,hour:w,minute:w,second:w,timeZoneName:we};class nn{get type(){throw new et}get name(){throw new et}get ianaName(){return this.name}get isUniversal(){throw new et}offsetName(t,r){throw new et}formatOffset(t,r){throw new et}offset(t){throw new et}equals(t){throw new et}get isValid(){throw new et}}let Ji=null;class Si extends nn{static get instance(){return Ji===null&&(Ji=new Si),Ji}get type(){return"system"}get name(){return new Intl.DateTimeFormat().resolvedOptions().timeZone}get isUniversal(){return!1}offsetName(t,{format:r,locale:n}){return Rd(t,r,n)}formatOffset(t,r){return Dr(this.offset(t),r)}offset(t){return-new Date(t).getTimezoneOffset()}equals(t){return t.type==="system"}get isValid(){return!0}}let jn={};function Dp(e){return jn[e]||(jn[e]=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",era:"short"})),jn[e]}const Rp={year:0,month:1,day:2,era:3,hour:4,minute:5,second:6};function _p(e,t){const r=e.format(t).replace(/\u200E/g,""),n=/(\d+)\/(\d+)\/(\d+) (AD|BC),? (\d+):(\d+):(\d+)/.exec(r),[,i,s,a,o,l,c,d]=n;return[a,i,s,o,l,c,d]}function Vp(e,t){const r=e.formatToParts(t),n=[];for(let i=0;i<r.length;i++){const{type:s,value:a}=r[i],o=Rp[s];s==="era"?n[o]=a:x(o)||(n[o]=parseInt(a,10))}return n}let bn={};class Ze extends nn{static create(t){return bn[t]||(bn[t]=new Ze(t)),bn[t]}static resetCache(){bn={},jn={}}static isValidSpecifier(t){return this.isValidZone(t)}static isValidZone(t){if(!t)return!1;try{return new Intl.DateTimeFormat("en-US",{timeZone:t}).format(),!0}catch{return!1}}constructor(t){super(),this.zoneName=t,this.valid=Ze.isValidZone(t)}get type(){return"iana"}get name(){return this.zoneName}get isUniversal(){return!1}offsetName(t,{format:r,locale:n}){return Rd(t,r,n,this.name)}formatOffset(t,r){return Dr(this.offset(t),r)}offset(t){const r=new Date(t);if(isNaN(r))return NaN;const n=Dp(this.name);let[i,s,a,o,l,c,d]=n.formatToParts?Vp(n,r):_p(n,r);o==="BC"&&(i=-Math.abs(i)+1);const f=xi({year:i,month:s,day:a,hour:l===24?0:l,minute:c,second:d,millisecond:0});let h=+r;const m=h%1e3;return h-=m>=0?m:1e3+m,(f-h)/(60*1e3)}equals(t){return t.type==="iana"&&t.name===this.name}get isValid(){return this.valid}}let Ao={};function Hp(e,t={}){const r=JSON.stringify([e,t]);let n=Ao[r];return n||(n=new Intl.ListFormat(e,t),Ao[r]=n),n}let Is={};function Ds(e,t={}){const r=JSON.stringify([e,t]);let n=Is[r];return n||(n=new Intl.DateTimeFormat(e,t),Is[r]=n),n}let Rs={};function Bp(e,t={}){const r=JSON.stringify([e,t]);let n=Rs[r];return n||(n=new Intl.NumberFormat(e,t),Rs[r]=n),n}let _s={};function Fp(e,t={}){const{base:r,...n}=t,i=JSON.stringify([e,n]);let s=_s[i];return s||(s=new Intl.RelativeTimeFormat(e,t),_s[i]=s),s}let Pr=null;function Up(){return Pr||(Pr=new Intl.DateTimeFormat().resolvedOptions().locale,Pr)}let Co={};function jp(e){let t=Co[e];if(!t){const r=new Intl.Locale(e);t="getWeekInfo"in r?r.getWeekInfo():r.weekInfo,Co[e]=t}return t}function zp(e){const t=e.indexOf("-x-");t!==-1&&(e=e.substring(0,t));const r=e.indexOf("-u-");if(r===-1)return[e];{let n,i;try{n=Ds(e).resolvedOptions(),i=e}catch{const l=e.substring(0,r);n=Ds(l).resolvedOptions(),i=l}const{numberingSystem:s,calendar:a}=n;return[i,s,a]}}function Wp(e,t,r){return(r||t)&&(e.includes("-u-")||(e+="-u"),r&&(e+=`-ca-${r}`),t&&(e+=`-nu-${t}`)),e}function Gp(e){const t=[];for(let r=1;r<=12;r++){const n=S.utc(2009,r,1);t.push(e(n))}return t}function Kp(e){const t=[];for(let r=1;r<=7;r++){const n=S.utc(2016,11,13+r);t.push(e(n))}return t}function vn(e,t,r,n){const i=e.listingMode();return i==="error"?null:i==="en"?r(t):n(t)}function qp(e){return e.numberingSystem&&e.numberingSystem!=="latn"?!1:e.numberingSystem==="latn"||!e.locale||e.locale.startsWith("en")||new Intl.DateTimeFormat(e.intl).resolvedOptions().numberingSystem==="latn"}class Zp{constructor(t,r,n){this.padTo=n.padTo||0,this.floor=n.floor||!1;const{padTo:i,floor:s,...a}=n;if(!r||Object.keys(a).length>0){const o={useGrouping:!1,...n};n.padTo>0&&(o.minimumIntegerDigits=n.padTo),this.inf=Bp(t,o)}}format(t){if(this.inf){const r=this.floor?Math.floor(t):t;return this.inf.format(r)}else{const r=this.floor?Math.floor(t):Sa(t,3);return K(r,this.padTo)}}}class Yp{constructor(t,r,n){this.opts=n,this.originalZone=void 0;let i;if(this.opts.timeZone)this.dt=t;else if(t.zone.type==="fixed"){const a=-1*(t.offset/60),o=a>=0?`Etc/GMT+${a}`:`Etc/GMT${a}`;t.offset!==0&&Ze.create(o).valid?(i=o,this.dt=t):(i="UTC",this.dt=t.offset===0?t:t.setZone("UTC").plus({minutes:t.offset}),this.originalZone=t.zone)}else t.zone.type==="system"?this.dt=t:t.zone.type==="iana"?(this.dt=t,i=t.zone.name):(i="UTC",this.dt=t.setZone("UTC").plus({minutes:t.offset}),this.originalZone=t.zone);const s={...this.opts};s.timeZone=s.timeZone||i,this.dtf=Ds(r,s)}format(){return this.originalZone?this.formatToParts().map(({value:t})=>t).join(""):this.dtf.format(this.dt.toJSDate())}formatToParts(){const t=this.dtf.formatToParts(this.dt.toJSDate());return this.originalZone?t.map(r=>{if(r.type==="timeZoneName"){const n=this.originalZone.offsetName(this.dt.ts,{locale:this.dt.locale,format:this.opts.timeZoneName});return{...r,value:n}}else return r}):t}resolvedOptions(){return this.dtf.resolvedOptions()}}class Jp{constructor(t,r,n){this.opts={style:"long",...n},!r&&Id()&&(this.rtf=Fp(t,n))}format(t,r){return this.rtf?this.rtf.format(t,r):w0(r,t,this.opts.numeric,this.opts.style!=="long")}formatToParts(t,r){return this.rtf?this.rtf.formatToParts(t,r):[]}}const Xp={firstDay:1,minimalDays:4,weekend:[6,7]};class V{static fromOpts(t){return V.create(t.locale,t.numberingSystem,t.outputCalendar,t.weekSettings,t.defaultToEN)}static create(t,r,n,i,s=!1){const a=t||U.defaultLocale,o=a||(s?"en-US":Up()),l=r||U.defaultNumberingSystem,c=n||U.defaultOutputCalendar,d=Vs(i)||U.defaultWeekSettings;return new V(o,l,c,d,a)}static resetCache(){Pr=null,Is={},Rs={},_s={}}static fromObject({locale:t,numberingSystem:r,outputCalendar:n,weekSettings:i}={}){return V.create(t,r,n,i)}constructor(t,r,n,i,s){const[a,o,l]=zp(t);this.locale=a,this.numberingSystem=r||o||null,this.outputCalendar=n||l||null,this.weekSettings=i,this.intl=Wp(this.locale,this.numberingSystem,this.outputCalendar),this.weekdaysCache={format:{},standalone:{}},this.monthsCache={format:{},standalone:{}},this.meridiemCache=null,this.eraCache={},this.specifiedLocale=s,this.fastNumbersCached=null}get fastNumbers(){return this.fastNumbersCached==null&&(this.fastNumbersCached=qp(this)),this.fastNumbersCached}listingMode(){const t=this.isEnglish(),r=(this.numberingSystem===null||this.numberingSystem==="latn")&&(this.outputCalendar===null||this.outputCalendar==="gregory");return t&&r?"en":"intl"}clone(t){return!t||Object.getOwnPropertyNames(t).length===0?this:V.create(t.locale||this.specifiedLocale,t.numberingSystem||this.numberingSystem,t.outputCalendar||this.outputCalendar,Vs(t.weekSettings)||this.weekSettings,t.defaultToEN||!1)}redefaultToEN(t={}){return this.clone({...t,defaultToEN:!0})}redefaultToSystem(t={}){return this.clone({...t,defaultToEN:!1})}months(t,r=!1){return vn(this,t,Hd,()=>{const n=r?{month:t,day:"numeric"}:{month:t},i=r?"format":"standalone";return this.monthsCache[i][t]||(this.monthsCache[i][t]=Gp(s=>this.extract(s,n,"month"))),this.monthsCache[i][t]})}weekdays(t,r=!1){return vn(this,t,Ud,()=>{const n=r?{weekday:t,year:"numeric",month:"long",day:"numeric"}:{weekday:t},i=r?"format":"standalone";return this.weekdaysCache[i][t]||(this.weekdaysCache[i][t]=Kp(s=>this.extract(s,n,"weekday"))),this.weekdaysCache[i][t]})}meridiems(){return vn(this,void 0,()=>jd,()=>{if(!this.meridiemCache){const t={hour:"numeric",hourCycle:"h12"};this.meridiemCache=[S.utc(2016,11,13,9),S.utc(2016,11,13,19)].map(r=>this.extract(r,t,"dayperiod"))}return this.meridiemCache})}eras(t){return vn(this,t,zd,()=>{const r={era:t};return this.eraCache[t]||(this.eraCache[t]=[S.utc(-40,1,1),S.utc(2017,1,1)].map(n=>this.extract(n,r,"era"))),this.eraCache[t]})}extract(t,r,n){const i=this.dtFormatter(t,r),s=i.formatToParts(),a=s.find(o=>o.type.toLowerCase()===n);return a?a.value:null}numberFormatter(t={}){return new Zp(this.intl,t.forceSimple||this.fastNumbers,t)}dtFormatter(t,r={}){return new Yp(t,this.intl,r)}relFormatter(t={}){return new Jp(this.intl,this.isEnglish(),t)}listFormatter(t={}){return Hp(this.intl,t)}isEnglish(){return this.locale==="en"||this.locale.toLowerCase()==="en-us"||new Intl.DateTimeFormat(this.intl).resolvedOptions().locale.startsWith("en-us")}getWeekSettings(){return this.weekSettings?this.weekSettings:Dd()?jp(this.locale):Xp}getStartOfWeek(){return this.getWeekSettings().firstDay}getMinDaysInFirstWeek(){return this.getWeekSettings().minimalDays}getWeekendDays(){return this.getWeekSettings().weekend}equals(t){return this.locale===t.locale&&this.numberingSystem===t.numberingSystem&&this.outputCalendar===t.outputCalendar}}let Xi=null;class re extends nn{static get utcInstance(){return Xi===null&&(Xi=new re(0)),Xi}static instance(t){return t===0?re.utcInstance:new re(t)}static parseSpecifier(t){if(t){const r=t.match(/^utc(?:([+-]\d{1,2})(?::(\d{2}))?)?$/i);if(r)return new re(Mi(r[1],r[2]))}return null}constructor(t){super(),this.fixed=t}get type(){return"fixed"}get name(){return this.fixed===0?"UTC":`UTC${Dr(this.fixed,"narrow")}`}get ianaName(){return this.fixed===0?"Etc/UTC":`Etc/GMT${Dr(-this.fixed,"narrow")}`}offsetName(){return this.name}formatOffset(t,r){return Dr(this.fixed,r)}get isUniversal(){return!0}offset(){return this.fixed}equals(t){return t.type==="fixed"&&t.fixed===this.fixed}get isValid(){return!0}}class Qp extends nn{constructor(t){super(),this.zoneName=t}get type(){return"invalid"}get name(){return this.zoneName}get isUniversal(){return!1}offsetName(){return null}formatOffset(){return""}offset(){return NaN}equals(){return!1}get isValid(){return!1}}function it(e,t){if(x(e)||e===null)return t;if(e instanceof nn)return e;if(r0(e)){const r=e.toLowerCase();return r==="default"?t:r==="local"||r==="system"?Si.instance:r==="utc"||r==="gmt"?re.utcInstance:re.parseSpecifier(r)||Ze.create(e)}else return xt(e)?re.instance(e):typeof e=="object"&&"offset"in e&&typeof e.offset=="function"?e:new Qp(e)}let Po=()=>Date.now(),Lo="system",Oo=null,No=null,Io=null,Do=60,Ro,_o=null;class U{static get now(){return Po}static set now(t){Po=t}static set defaultZone(t){Lo=t}static get defaultZone(){return it(Lo,Si.instance)}static get defaultLocale(){return Oo}static set defaultLocale(t){Oo=t}static get defaultNumberingSystem(){return No}static set defaultNumberingSystem(t){No=t}static get defaultOutputCalendar(){return Io}static set defaultOutputCalendar(t){Io=t}static get defaultWeekSettings(){return _o}static set defaultWeekSettings(t){_o=Vs(t)}static get twoDigitCutoffYear(){return Do}static set twoDigitCutoffYear(t){Do=t%100}static get throwOnInvalid(){return Ro}static set throwOnInvalid(t){Ro=t}static resetCaches(){V.resetCache(),Ze.resetCache()}}class Ie{constructor(t,r){this.reason=t,this.explanation=r}toMessage(){return this.explanation?`${this.reason}: ${this.explanation}`:this.reason}}const Ad=[0,31,59,90,120,151,181,212,243,273,304,334],Cd=[0,31,60,91,121,152,182,213,244,274,305,335];function ke(e,t){return new Ie("unit out of range",`you specified ${t} (of type ${typeof t}) as a ${e}, which is invalid`)}function $a(e,t,r){const n=new Date(Date.UTC(e,t-1,r));e<100&&e>=0&&n.setUTCFullYear(n.getUTCFullYear()-1900);const i=n.getUTCDay();return i===0?7:i}function Pd(e,t,r){return r+(sn(e)?Cd:Ad)[t-1]}function Ld(e,t){const r=sn(e)?Cd:Ad,n=r.findIndex(s=>s<t),i=t-r[n];return{month:n+1,day:i}}function Ea(e,t){return(e-t+7)%7+1}function ri(e,t=4,r=1){const{year:n,month:i,day:s}=e,a=Pd(n,i,s),o=Ea($a(n,i,s),r);let l=Math.floor((a-o+14-t)/7),c;return l<1?(c=n-1,l=Ur(c,t,r)):l>Ur(n,t,r)?(c=n+1,l=1):c=n,{weekYear:c,weekNumber:l,weekday:o,...Ai(e)}}function Vo(e,t=4,r=1){const{weekYear:n,weekNumber:i,weekday:s}=e,a=Ea($a(n,1,t),r),o=Zt(n);let l=i*7+s-a-7+t,c;l<1?(c=n-1,l+=Zt(c)):l>o?(c=n+1,l-=Zt(n)):c=n;const{month:d,day:u}=Ld(c,l);return{year:c,month:d,day:u,...Ai(e)}}function Qi(e){const{year:t,month:r,day:n}=e,i=Pd(t,r,n);return{year:t,ordinal:i,...Ai(e)}}function Ho(e){const{year:t,ordinal:r}=e,{month:n,day:i}=Ld(t,r);return{year:t,month:n,day:i,...Ai(e)}}function Bo(e,t){if(!x(e.localWeekday)||!x(e.localWeekNumber)||!x(e.localWeekYear)){if(!x(e.weekday)||!x(e.weekNumber)||!x(e.weekYear))throw new Kt("Cannot mix locale-based week fields with ISO-based week fields");return x(e.localWeekday)||(e.weekday=e.localWeekday),x(e.localWeekNumber)||(e.weekNumber=e.localWeekNumber),x(e.localWeekYear)||(e.weekYear=e.localWeekYear),delete e.localWeekday,delete e.localWeekNumber,delete e.localWeekYear,{minDaysInFirstWeek:t.getMinDaysInFirstWeek(),startOfWeek:t.getStartOfWeek()}}else return{minDaysInFirstWeek:4,startOfWeek:1}}function e0(e,t=4,r=1){const n=ki(e.weekYear),i=xe(e.weekNumber,1,Ur(e.weekYear,t,r)),s=xe(e.weekday,1,7);return n?i?s?!1:ke("weekday",e.weekday):ke("week",e.weekNumber):ke("weekYear",e.weekYear)}function t0(e){const t=ki(e.year),r=xe(e.ordinal,1,Zt(e.year));return t?r?!1:ke("ordinal",e.ordinal):ke("year",e.year)}function Od(e){const t=ki(e.year),r=xe(e.month,1,12),n=xe(e.day,1,ni(e.year,e.month));return t?r?n?!1:ke("day",e.day):ke("month",e.month):ke("year",e.year)}function Nd(e){const{hour:t,minute:r,second:n,millisecond:i}=e,s=xe(t,0,23)||t===24&&r===0&&n===0&&i===0,a=xe(r,0,59),o=xe(n,0,59),l=xe(i,0,999);return s?a?o?l?!1:ke("millisecond",i):ke("second",n):ke("minute",r):ke("hour",t)}function x(e){return typeof e>"u"}function xt(e){return typeof e=="number"}function ki(e){return typeof e=="number"&&e%1===0}function r0(e){return typeof e=="string"}function n0(e){return Object.prototype.toString.call(e)==="[object Date]"}function Id(){try{return typeof Intl<"u"&&!!Intl.RelativeTimeFormat}catch{return!1}}function Dd(){try{return typeof Intl<"u"&&!!Intl.Locale&&("weekInfo"in Intl.Locale.prototype||"getWeekInfo"in Intl.Locale.prototype)}catch{return!1}}function i0(e){return Array.isArray(e)?e:[e]}function Fo(e,t,r){if(e.length!==0)return e.reduce((n,i)=>{const s=[t(i),i];return n&&r(n[0],s[0])===n[0]?n:s},null)[1]}function s0(e,t){return t.reduce((r,n)=>(r[n]=e[n],r),{})}function nr(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function Vs(e){if(e==null)return null;if(typeof e!="object")throw new ae("Week settings must be an object");if(!xe(e.firstDay,1,7)||!xe(e.minimalDays,1,7)||!Array.isArray(e.weekend)||e.weekend.some(t=>!xe(t,1,7)))throw new ae("Invalid week settings");return{firstDay:e.firstDay,minimalDays:e.minimalDays,weekend:Array.from(e.weekend)}}function xe(e,t,r){return ki(e)&&e>=t&&e<=r}function a0(e,t){return e-t*Math.floor(e/t)}function K(e,t=2){const r=e<0;let n;return r?n="-"+(""+-e).padStart(t,"0"):n=(""+e).padStart(t,"0"),n}function nt(e){if(!(x(e)||e===null||e===""))return parseInt(e,10)}function gt(e){if(!(x(e)||e===null||e===""))return parseFloat(e)}function Ta(e){if(!(x(e)||e===null||e==="")){const t=parseFloat("0."+e)*1e3;return Math.floor(t)}}function Sa(e,t,r=!1){const n=10**t;return(r?Math.trunc:Math.round)(e*n)/n}function sn(e){return e%4===0&&(e%100!==0||e%400===0)}function Zt(e){return sn(e)?366:365}function ni(e,t){const r=a0(t-1,12)+1,n=e+(t-r)/12;return r===2?sn(n)?29:28:[31,null,31,30,31,30,31,31,30,31,30,31][r-1]}function xi(e){let t=Date.UTC(e.year,e.month-1,e.day,e.hour,e.minute,e.second,e.millisecond);return e.year<100&&e.year>=0&&(t=new Date(t),t.setUTCFullYear(e.year,e.month-1,e.day)),+t}function Uo(e,t,r){return-Ea($a(e,1,t),r)+t-1}function Ur(e,t=4,r=1){const n=Uo(e,t,r),i=Uo(e+1,t,r);return(Zt(e)-n+i)/7}function Hs(e){return e>99?e:e>U.twoDigitCutoffYear?1900+e:2e3+e}function Rd(e,t,r,n=null){const i=new Date(e),s={hourCycle:"h23",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"};n&&(s.timeZone=n);const a={timeZoneName:t,...s},o=new Intl.DateTimeFormat(r,a).formatToParts(i).find(l=>l.type.toLowerCase()==="timezonename");return o?o.value:null}function Mi(e,t){let r=parseInt(e,10);Number.isNaN(r)&&(r=0);const n=parseInt(t,10)||0,i=r<0||Object.is(r,-0)?-n:n;return r*60+i}function _d(e){const t=Number(e);if(typeof e=="boolean"||e===""||Number.isNaN(t))throw new ae(`Invalid unit value ${e}`);return t}function ii(e,t){const r={};for(const n in e)if(nr(e,n)){const i=e[n];if(i==null)continue;r[t(n)]=_d(i)}return r}function Dr(e,t){const r=Math.trunc(Math.abs(e/60)),n=Math.trunc(Math.abs(e%60)),i=e>=0?"+":"-";switch(t){case"short":return`${i}${K(r,2)}:${K(n,2)}`;case"narrow":return`${i}${r}${n>0?`:${n}`:""}`;case"techie":return`${i}${K(r,2)}${K(n,2)}`;default:throw new RangeError(`Value format ${t} is out of range for property format`)}}function Ai(e){return s0(e,["hour","minute","second","millisecond"])}const o0=["January","February","March","April","May","June","July","August","September","October","November","December"],Vd=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],l0=["J","F","M","A","M","J","J","A","S","O","N","D"];function Hd(e){switch(e){case"narrow":return[...l0];case"short":return[...Vd];case"long":return[...o0];case"numeric":return["1","2","3","4","5","6","7","8","9","10","11","12"];case"2-digit":return["01","02","03","04","05","06","07","08","09","10","11","12"];default:return null}}const Bd=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],Fd=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],c0=["M","T","W","T","F","S","S"];function Ud(e){switch(e){case"narrow":return[...c0];case"short":return[...Fd];case"long":return[...Bd];case"numeric":return["1","2","3","4","5","6","7"];default:return null}}const jd=["AM","PM"],u0=["Before Christ","Anno Domini"],d0=["BC","AD"],f0=["B","A"];function zd(e){switch(e){case"narrow":return[...f0];case"short":return[...d0];case"long":return[...u0];default:return null}}function h0(e){return jd[e.hour<12?0:1]}function m0(e,t){return Ud(t)[e.weekday-1]}function p0(e,t){return Hd(t)[e.month-1]}function g0(e,t){return zd(t)[e.year<0?0:1]}function w0(e,t,r="always",n=!1){const i={years:["year","yr."],quarters:["quarter","qtr."],months:["month","mo."],weeks:["week","wk."],days:["day","day","days"],hours:["hour","hr."],minutes:["minute","min."],seconds:["second","sec."]},s=["hours","minutes","seconds"].indexOf(e)===-1;if(r==="auto"&&s){const u=e==="days";switch(t){case 1:return u?"tomorrow":`next ${i[e][0]}`;case-1:return u?"yesterday":`last ${i[e][0]}`;case 0:return u?"today":`this ${i[e][0]}`}}const a=Object.is(t,-0)||t<0,o=Math.abs(t),l=o===1,c=i[e],d=n?l?c[1]:c[2]||c[1]:l?i[e][0]:e;return a?`${o} ${d} ago`:`in ${o} ${d}`}function jo(e,t){let r="";for(const n of e)n.literal?r+=n.val:r+=t(n.val);return r}const y0={D:ti,DD:cd,DDD:ud,DDDD:dd,t:fd,tt:hd,ttt:md,tttt:pd,T:gd,TT:wd,TTT:yd,TTTT:bd,f:vd,ff:Ed,fff:Sd,ffff:xd,F:$d,FF:Td,FFF:kd,FFFF:Md};class ee{static create(t,r={}){return new ee(t,r)}static parseFormat(t){let r=null,n="",i=!1;const s=[];for(let a=0;a<t.length;a++){const o=t.charAt(a);o==="'"?(n.length>0&&s.push({literal:i||/^\s+$/.test(n),val:n}),r=null,n="",i=!i):i||o===r?n+=o:(n.length>0&&s.push({literal:/^\s+$/.test(n),val:n}),n=o,r=o)}return n.length>0&&s.push({literal:i||/^\s+$/.test(n),val:n}),s}static macroTokenToFormatOpts(t){return y0[t]}constructor(t,r){this.opts=r,this.loc=t,this.systemLoc=null}formatWithSystemDefault(t,r){return this.systemLoc===null&&(this.systemLoc=this.loc.redefaultToSystem()),this.systemLoc.dtFormatter(t,{...this.opts,...r}).format()}dtFormatter(t,r={}){return this.loc.dtFormatter(t,{...this.opts,...r})}formatDateTime(t,r){return this.dtFormatter(t,r).format()}formatDateTimeParts(t,r){return this.dtFormatter(t,r).formatToParts()}formatInterval(t,r){return this.dtFormatter(t.start,r).dtf.formatRange(t.start.toJSDate(),t.end.toJSDate())}resolvedOptions(t,r){return this.dtFormatter(t,r).resolvedOptions()}num(t,r=0){if(this.opts.forceSimple)return K(t,r);const n={...this.opts};return r>0&&(n.padTo=r),this.loc.numberFormatter(n).format(t)}formatDateTimeFromString(t,r){const n=this.loc.listingMode()==="en",i=this.loc.outputCalendar&&this.loc.outputCalendar!=="gregory",s=(h,m)=>this.loc.extract(t,h,m),a=h=>t.isOffsetFixed&&t.offset===0&&h.allowZ?"Z":t.isValid?t.zone.formatOffset(t.ts,h.format):"",o=()=>n?h0(t):s({hour:"numeric",hourCycle:"h12"},"dayperiod"),l=(h,m)=>n?p0(t,h):s(m?{month:h}:{month:h,day:"numeric"},"month"),c=(h,m)=>n?m0(t,h):s(m?{weekday:h}:{weekday:h,month:"long",day:"numeric"},"weekday"),d=h=>{const m=ee.macroTokenToFormatOpts(h);return m?this.formatWithSystemDefault(t,m):h},u=h=>n?g0(t,h):s({era:h},"era"),f=h=>{switch(h){case"S":return this.num(t.millisecond);case"u":case"SSS":return this.num(t.millisecond,3);case"s":return this.num(t.second);case"ss":return this.num(t.second,2);case"uu":return this.num(Math.floor(t.millisecond/10),2);case"uuu":return this.num(Math.floor(t.millisecond/100));case"m":return this.num(t.minute);case"mm":return this.num(t.minute,2);case"h":return this.num(t.hour%12===0?12:t.hour%12);case"hh":return this.num(t.hour%12===0?12:t.hour%12,2);case"H":return this.num(t.hour);case"HH":return this.num(t.hour,2);case"Z":return a({format:"narrow",allowZ:this.opts.allowZ});case"ZZ":return a({format:"short",allowZ:this.opts.allowZ});case"ZZZ":return a({format:"techie",allowZ:this.opts.allowZ});case"ZZZZ":return t.zone.offsetName(t.ts,{format:"short",locale:this.loc.locale});case"ZZZZZ":return t.zone.offsetName(t.ts,{format:"long",locale:this.loc.locale});case"z":return t.zoneName;case"a":return o();case"d":return i?s({day:"numeric"},"day"):this.num(t.day);case"dd":return i?s({day:"2-digit"},"day"):this.num(t.day,2);case"c":return this.num(t.weekday);case"ccc":return c("short",!0);case"cccc":return c("long",!0);case"ccccc":return c("narrow",!0);case"E":return this.num(t.weekday);case"EEE":return c("short",!1);case"EEEE":return c("long",!1);case"EEEEE":return c("narrow",!1);case"L":return i?s({month:"numeric",day:"numeric"},"month"):this.num(t.month);case"LL":return i?s({month:"2-digit",day:"numeric"},"month"):this.num(t.month,2);case"LLL":return l("short",!0);case"LLLL":return l("long",!0);case"LLLLL":return l("narrow",!0);case"M":return i?s({month:"numeric"},"month"):this.num(t.month);case"MM":return i?s({month:"2-digit"},"month"):this.num(t.month,2);case"MMM":return l("short",!1);case"MMMM":return l("long",!1);case"MMMMM":return l("narrow",!1);case"y":return i?s({year:"numeric"},"year"):this.num(t.year);case"yy":return i?s({year:"2-digit"},"year"):this.num(t.year.toString().slice(-2),2);case"yyyy":return i?s({year:"numeric"},"year"):this.num(t.year,4);case"yyyyyy":return i?s({year:"numeric"},"year"):this.num(t.year,6);case"G":return u("short");case"GG":return u("long");case"GGGGG":return u("narrow");case"kk":return this.num(t.weekYear.toString().slice(-2),2);case"kkkk":return this.num(t.weekYear,4);case"W":return this.num(t.weekNumber);case"WW":return this.num(t.weekNumber,2);case"n":return this.num(t.localWeekNumber);case"nn":return this.num(t.localWeekNumber,2);case"ii":return this.num(t.localWeekYear.toString().slice(-2),2);case"iiii":return this.num(t.localWeekYear,4);case"o":return this.num(t.ordinal);case"ooo":return this.num(t.ordinal,3);case"q":return this.num(t.quarter);case"qq":return this.num(t.quarter,2);case"X":return this.num(Math.floor(t.ts/1e3));case"x":return this.num(t.ts);default:return d(h)}};return jo(ee.parseFormat(r),f)}formatDurationFromString(t,r){const n=l=>{switch(l[0]){case"S":return"millisecond";case"s":return"second";case"m":return"minute";case"h":return"hour";case"d":return"day";case"w":return"week";case"M":return"month";case"y":return"year";default:return null}},i=l=>c=>{const d=n(c);return d?this.num(l.get(d),c.length):c},s=ee.parseFormat(r),a=s.reduce((l,{literal:c,val:d})=>c?l:l.concat(d),[]),o=t.shiftTo(...a.map(n).filter(l=>l));return jo(s,i(o))}}const Wd=/[A-Za-z_+-]{1,256}(?::?\/[A-Za-z0-9_+-]{1,256}(?:\/[A-Za-z0-9_+-]{1,256})?)?/;function pr(...e){const t=e.reduce((r,n)=>r+n.source,"");return RegExp(`^${t}$`)}function gr(...e){return t=>e.reduce(([r,n,i],s)=>{const[a,o,l]=s(t,i);return[{...r,...a},o||n,l]},[{},null,1]).slice(0,2)}function wr(e,...t){if(e==null)return[null,null];for(const[r,n]of t){const i=r.exec(e);if(i)return n(i)}return[null,null]}function Gd(...e){return(t,r)=>{const n={};let i;for(i=0;i<e.length;i++)n[e[i]]=nt(t[r+i]);return[n,null,r+i]}}const Kd=/(?:(Z)|([+-]\d\d)(?::?(\d\d))?)/,b0=`(?:${Kd.source}?(?:\\[(${Wd.source})\\])?)?`,ka=/(\d\d)(?::?(\d\d)(?::?(\d\d)(?:[.,](\d{1,30}))?)?)?/,qd=RegExp(`${ka.source}${b0}`),xa=RegExp(`(?:T${qd.source})?`),v0=/([+-]\d{6}|\d{4})(?:-?(\d\d)(?:-?(\d\d))?)?/,$0=/(\d{4})-?W(\d\d)(?:-?(\d))?/,E0=/(\d{4})-?(\d{3})/,T0=Gd("weekYear","weekNumber","weekDay"),S0=Gd("year","ordinal"),k0=/(\d{4})-(\d\d)-(\d\d)/,Zd=RegExp(`${ka.source} ?(?:${Kd.source}|(${Wd.source}))?`),x0=RegExp(`(?: ${Zd.source})?`);function Yt(e,t,r){const n=e[t];return x(n)?r:nt(n)}function M0(e,t){return[{year:Yt(e,t),month:Yt(e,t+1,1),day:Yt(e,t+2,1)},null,t+3]}function yr(e,t){return[{hours:Yt(e,t,0),minutes:Yt(e,t+1,0),seconds:Yt(e,t+2,0),milliseconds:Ta(e[t+3])},null,t+4]}function an(e,t){const r=!e[t]&&!e[t+1],n=Mi(e[t+1],e[t+2]),i=r?null:re.instance(n);return[{},i,t+3]}function on(e,t){const r=e[t]?Ze.create(e[t]):null;return[{},r,t+1]}const A0=RegExp(`^T?${ka.source}$`),C0=/^-?P(?:(?:(-?\d{1,20}(?:\.\d{1,20})?)Y)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20}(?:\.\d{1,20})?)W)?(?:(-?\d{1,20}(?:\.\d{1,20})?)D)?(?:T(?:(-?\d{1,20}(?:\.\d{1,20})?)H)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20})(?:[.,](-?\d{1,20}))?S)?)?)$/;function P0(e){const[t,r,n,i,s,a,o,l,c]=e,d=t[0]==="-",u=l&&l[0]==="-",f=(h,m=!1)=>h!==void 0&&(m||h&&d)?-h:h;return[{years:f(gt(r)),months:f(gt(n)),weeks:f(gt(i)),days:f(gt(s)),hours:f(gt(a)),minutes:f(gt(o)),seconds:f(gt(l),l==="-0"),milliseconds:f(Ta(c),u)}]}const L0={GMT:0,EDT:-4*60,EST:-5*60,CDT:-5*60,CST:-6*60,MDT:-6*60,MST:-7*60,PDT:-7*60,PST:-8*60};function Ma(e,t,r,n,i,s,a){const o={year:t.length===2?Hs(nt(t)):nt(t),month:Vd.indexOf(r)+1,day:nt(n),hour:nt(i),minute:nt(s)};return a&&(o.second=nt(a)),e&&(o.weekday=e.length>3?Bd.indexOf(e)+1:Fd.indexOf(e)+1),o}const O0=/^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|(?:([+-]\d\d)(\d\d)))$/;function N0(e){const[,t,r,n,i,s,a,o,l,c,d,u]=e,f=Ma(t,i,n,r,s,a,o);let h;return l?h=L0[l]:c?h=0:h=Mi(d,u),[f,new re(h)]}function I0(e){return e.replace(/\([^()]*\)|[\n\t]/g," ").replace(/(\s\s+)/g," ").trim()}const D0=/^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d\d) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d\d):(\d\d):(\d\d) GMT$/,R0=/^(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), (\d\d)-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d\d) (\d\d):(\d\d):(\d\d) GMT$/,_0=/^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( \d|\d\d) (\d\d):(\d\d):(\d\d) (\d{4})$/;function zo(e){const[,t,r,n,i,s,a,o]=e;return[Ma(t,i,n,r,s,a,o),re.utcInstance]}function V0(e){const[,t,r,n,i,s,a,o]=e;return[Ma(t,o,r,n,i,s,a),re.utcInstance]}const H0=pr(v0,xa),B0=pr($0,xa),F0=pr(E0,xa),U0=pr(qd),Yd=gr(M0,yr,an,on),j0=gr(T0,yr,an,on),z0=gr(S0,yr,an,on),W0=gr(yr,an,on);function G0(e){return wr(e,[H0,Yd],[B0,j0],[F0,z0],[U0,W0])}function K0(e){return wr(I0(e),[O0,N0])}function q0(e){return wr(e,[D0,zo],[R0,zo],[_0,V0])}function Z0(e){return wr(e,[C0,P0])}const Y0=gr(yr);function J0(e){return wr(e,[A0,Y0])}const X0=pr(k0,x0),Q0=pr(Zd),eg=gr(yr,an,on);function tg(e){return wr(e,[X0,Yd],[Q0,eg])}const Wo="Invalid Duration",Jd={weeks:{days:7,hours:7*24,minutes:7*24*60,seconds:7*24*60*60,milliseconds:7*24*60*60*1e3},days:{hours:24,minutes:24*60,seconds:24*60*60,milliseconds:24*60*60*1e3},hours:{minutes:60,seconds:60*60,milliseconds:60*60*1e3},minutes:{seconds:60,milliseconds:60*1e3},seconds:{milliseconds:1e3}},rg={years:{quarters:4,months:12,weeks:52,days:365,hours:365*24,minutes:365*24*60,seconds:365*24*60*60,milliseconds:365*24*60*60*1e3},quarters:{months:3,weeks:13,days:91,hours:91*24,minutes:91*24*60,seconds:91*24*60*60,milliseconds:91*24*60*60*1e3},months:{weeks:4,days:30,hours:30*24,minutes:30*24*60,seconds:30*24*60*60,milliseconds:30*24*60*60*1e3},...Jd},$e=146097/400,Vt=146097/4800,ng={years:{quarters:4,months:12,weeks:$e/7,days:$e,hours:$e*24,minutes:$e*24*60,seconds:$e*24*60*60,milliseconds:$e*24*60*60*1e3},quarters:{months:3,weeks:$e/28,days:$e/4,hours:$e*24/4,minutes:$e*24*60/4,seconds:$e*24*60*60/4,milliseconds:$e*24*60*60*1e3/4},months:{weeks:Vt/7,days:Vt,hours:Vt*24,minutes:Vt*24*60,seconds:Vt*24*60*60,milliseconds:Vt*24*60*60*1e3},...Jd},Tt=["years","quarters","months","weeks","days","hours","minutes","seconds","milliseconds"],ig=Tt.slice(0).reverse();function tt(e,t,r=!1){const n={values:r?t.values:{...e.values,...t.values||{}},loc:e.loc.clone(t.loc),conversionAccuracy:t.conversionAccuracy||e.conversionAccuracy,matrix:t.matrix||e.matrix};return new L(n)}function Xd(e,t){let r=t.milliseconds??0;for(const n of ig.slice(1))t[n]&&(r+=t[n]*e[n].milliseconds);return r}function Go(e,t){const r=Xd(e,t)<0?-1:1;Tt.reduceRight((n,i)=>{if(x(t[i]))return n;if(n){const s=t[n]*r,a=e[i][n],o=Math.floor(s/a);t[i]+=o*r,t[n]-=o*a*r}return i},null),Tt.reduce((n,i)=>{if(x(t[i]))return n;if(n){const s=t[n]%1;t[n]-=s,t[i]+=s*e[n][i]}return i},null)}function sg(e){const t={};for(const[r,n]of Object.entries(e))n!==0&&(t[r]=n);return t}class L{constructor(t){const r=t.conversionAccuracy==="longterm"||!1;let n=r?ng:rg;t.matrix&&(n=t.matrix),this.values=t.values,this.loc=t.loc||V.create(),this.conversionAccuracy=r?"longterm":"casual",this.invalid=t.invalid||null,this.matrix=n,this.isLuxonDuration=!0}static fromMillis(t,r){return L.fromObject({milliseconds:t},r)}static fromObject(t,r={}){if(t==null||typeof t!="object")throw new ae(`Duration.fromObject: argument expected to be an object, got ${t===null?"null":typeof t}`);return new L({values:ii(t,L.normalizeUnit),loc:V.fromObject(r),conversionAccuracy:r.conversionAccuracy,matrix:r.matrix})}static fromDurationLike(t){if(xt(t))return L.fromMillis(t);if(L.isDuration(t))return t;if(typeof t=="object")return L.fromObject(t);throw new ae(`Unknown duration argument ${t} of type ${typeof t}`)}static fromISO(t,r){const[n]=Z0(t);return n?L.fromObject(n,r):L.invalid("unparsable",`the input "${t}" can't be parsed as ISO 8601`)}static fromISOTime(t,r){const[n]=J0(t);return n?L.fromObject(n,r):L.invalid("unparsable",`the input "${t}" can't be parsed as ISO 8601`)}static invalid(t,r=null){if(!t)throw new ae("need to specify a reason the Duration is invalid");const n=t instanceof Ie?t:new Ie(t,r);if(U.throwOnInvalid)throw new Op(n);return new L({invalid:n})}static normalizeUnit(t){const r={year:"years",years:"years",quarter:"quarters",quarters:"quarters",month:"months",months:"months",week:"weeks",weeks:"weeks",day:"days",days:"days",hour:"hours",hours:"hours",minute:"minutes",minutes:"minutes",second:"seconds",seconds:"seconds",millisecond:"milliseconds",milliseconds:"milliseconds"}[t&&t.toLowerCase()];if(!r)throw new ld(t);return r}static isDuration(t){return t&&t.isLuxonDuration||!1}get locale(){return this.isValid?this.loc.locale:null}get numberingSystem(){return this.isValid?this.loc.numberingSystem:null}toFormat(t,r={}){const n={...r,floor:r.round!==!1&&r.floor!==!1};return this.isValid?ee.create(this.loc,n).formatDurationFromString(this,t):Wo}toHuman(t={}){if(!this.isValid)return Wo;const r=Tt.map(n=>{const i=this.values[n];return x(i)?null:this.loc.numberFormatter({style:"unit",unitDisplay:"long",...t,unit:n.slice(0,-1)}).format(i)}).filter(n=>n);return this.loc.listFormatter({type:"conjunction",style:t.listStyle||"narrow",...t}).format(r)}toObject(){return this.isValid?{...this.values}:{}}toISO(){if(!this.isValid)return null;let t="P";return this.years!==0&&(t+=this.years+"Y"),(this.months!==0||this.quarters!==0)&&(t+=this.months+this.quarters*3+"M"),this.weeks!==0&&(t+=this.weeks+"W"),this.days!==0&&(t+=this.days+"D"),(this.hours!==0||this.minutes!==0||this.seconds!==0||this.milliseconds!==0)&&(t+="T"),this.hours!==0&&(t+=this.hours+"H"),this.minutes!==0&&(t+=this.minutes+"M"),(this.seconds!==0||this.milliseconds!==0)&&(t+=Sa(this.seconds+this.milliseconds/1e3,3)+"S"),t==="P"&&(t+="T0S"),t}toISOTime(t={}){if(!this.isValid)return null;const r=this.toMillis();return r<0||r>=864e5?null:(t={suppressMilliseconds:!1,suppressSeconds:!1,includePrefix:!1,format:"extended",...t,includeOffset:!1},S.fromMillis(r,{zone:"UTC"}).toISOTime(t))}toJSON(){return this.toISO()}toString(){return this.toISO()}[Symbol.for("nodejs.util.inspect.custom")](){return this.isValid?`Duration { values: ${JSON.stringify(this.values)} }`:`Duration { Invalid, reason: ${this.invalidReason} }`}toMillis(){return this.isValid?Xd(this.matrix,this.values):NaN}valueOf(){return this.toMillis()}plus(t){if(!this.isValid)return this;const r=L.fromDurationLike(t),n={};for(const i of Tt)(nr(r.values,i)||nr(this.values,i))&&(n[i]=r.get(i)+this.get(i));return tt(this,{values:n},!0)}minus(t){if(!this.isValid)return this;const r=L.fromDurationLike(t);return this.plus(r.negate())}mapUnits(t){if(!this.isValid)return this;const r={};for(const n of Object.keys(this.values))r[n]=_d(t(this.values[n],n));return tt(this,{values:r},!0)}get(t){return this[L.normalizeUnit(t)]}set(t){if(!this.isValid)return this;const r={...this.values,...ii(t,L.normalizeUnit)};return tt(this,{values:r})}reconfigure({locale:t,numberingSystem:r,conversionAccuracy:n,matrix:i}={}){const a={loc:this.loc.clone({locale:t,numberingSystem:r}),matrix:i,conversionAccuracy:n};return tt(this,a)}as(t){return this.isValid?this.shiftTo(t).get(t):NaN}normalize(){if(!this.isValid)return this;const t=this.toObject();return Go(this.matrix,t),tt(this,{values:t},!0)}rescale(){if(!this.isValid)return this;const t=sg(this.normalize().shiftToAll().toObject());return tt(this,{values:t},!0)}shiftTo(...t){if(!this.isValid)return this;if(t.length===0)return this;t=t.map(a=>L.normalizeUnit(a));const r={},n={},i=this.toObject();let s;for(const a of Tt)if(t.indexOf(a)>=0){s=a;let o=0;for(const c in n)o+=this.matrix[c][a]*n[c],n[c]=0;xt(i[a])&&(o+=i[a]);const l=Math.trunc(o);r[a]=l,n[a]=(o*1e3-l*1e3)/1e3}else xt(i[a])&&(n[a]=i[a]);for(const a in n)n[a]!==0&&(r[s]+=a===s?n[a]:n[a]/this.matrix[s][a]);return Go(this.matrix,r),tt(this,{values:r},!0)}shiftToAll(){return this.isValid?this.shiftTo("years","months","weeks","days","hours","minutes","seconds","milliseconds"):this}negate(){if(!this.isValid)return this;const t={};for(const r of Object.keys(this.values))t[r]=this.values[r]===0?0:-this.values[r];return tt(this,{values:t},!0)}get years(){return this.isValid?this.values.years||0:NaN}get quarters(){return this.isValid?this.values.quarters||0:NaN}get months(){return this.isValid?this.values.months||0:NaN}get weeks(){return this.isValid?this.values.weeks||0:NaN}get days(){return this.isValid?this.values.days||0:NaN}get hours(){return this.isValid?this.values.hours||0:NaN}get minutes(){return this.isValid?this.values.minutes||0:NaN}get seconds(){return this.isValid?this.values.seconds||0:NaN}get milliseconds(){return this.isValid?this.values.milliseconds||0:NaN}get isValid(){return this.invalid===null}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}equals(t){if(!this.isValid||!t.isValid||!this.loc.equals(t.loc))return!1;function r(n,i){return n===void 0||n===0?i===void 0||i===0:n===i}for(const n of Tt)if(!r(this.values[n],t.values[n]))return!1;return!0}}const Ht="Invalid Interval";function ag(e,t){return!e||!e.isValid?z.invalid("missing or invalid start"):!t||!t.isValid?z.invalid("missing or invalid end"):t<e?z.invalid("end before start",`The end of an interval must be after its start, but you had start=${e.toISO()} and end=${t.toISO()}`):null}class z{constructor(t){this.s=t.start,this.e=t.end,this.invalid=t.invalid||null,this.isLuxonInterval=!0}static invalid(t,r=null){if(!t)throw new ae("need to specify a reason the Interval is invalid");const n=t instanceof Ie?t:new Ie(t,r);if(U.throwOnInvalid)throw new Lp(n);return new z({invalid:n})}static fromDateTimes(t,r){const n=Sr(t),i=Sr(r),s=ag(n,i);return s??new z({start:n,end:i})}static after(t,r){const n=L.fromDurationLike(r),i=Sr(t);return z.fromDateTimes(i,i.plus(n))}static before(t,r){const n=L.fromDurationLike(r),i=Sr(t);return z.fromDateTimes(i.minus(n),i)}static fromISO(t,r){const[n,i]=(t||"").split("/",2);if(n&&i){let s,a;try{s=S.fromISO(n,r),a=s.isValid}catch{a=!1}let o,l;try{o=S.fromISO(i,r),l=o.isValid}catch{l=!1}if(a&&l)return z.fromDateTimes(s,o);if(a){const c=L.fromISO(i,r);if(c.isValid)return z.after(s,c)}else if(l){const c=L.fromISO(n,r);if(c.isValid)return z.before(o,c)}}return z.invalid("unparsable",`the input "${t}" can't be parsed as ISO 8601`)}static isInterval(t){return t&&t.isLuxonInterval||!1}get start(){return this.isValid?this.s:null}get end(){return this.isValid?this.e:null}get isValid(){return this.invalidReason===null}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}length(t="milliseconds"){return this.isValid?this.toDuration(t).get(t):NaN}count(t="milliseconds",r){if(!this.isValid)return NaN;const n=this.start.startOf(t,r);let i;return r!=null&&r.useLocaleWeeks?i=this.end.reconfigure({locale:n.locale}):i=this.end,i=i.startOf(t,r),Math.floor(i.diff(n,t).get(t))+(i.valueOf()!==this.end.valueOf())}hasSame(t){return this.isValid?this.isEmpty()||this.e.minus(1).hasSame(this.s,t):!1}isEmpty(){return this.s.valueOf()===this.e.valueOf()}isAfter(t){return this.isValid?this.s>t:!1}isBefore(t){return this.isValid?this.e<=t:!1}contains(t){return this.isValid?this.s<=t&&this.e>t:!1}set({start:t,end:r}={}){return this.isValid?z.fromDateTimes(t||this.s,r||this.e):this}splitAt(...t){if(!this.isValid)return[];const r=t.map(Sr).filter(a=>this.contains(a)).sort((a,o)=>a.toMillis()-o.toMillis()),n=[];let{s:i}=this,s=0;for(;i<this.e;){const a=r[s]||this.e,o=+a>+this.e?this.e:a;n.push(z.fromDateTimes(i,o)),i=o,s+=1}return n}splitBy(t){const r=L.fromDurationLike(t);if(!this.isValid||!r.isValid||r.as("milliseconds")===0)return[];let{s:n}=this,i=1,s;const a=[];for(;n<this.e;){const o=this.start.plus(r.mapUnits(l=>l*i));s=+o>+this.e?this.e:o,a.push(z.fromDateTimes(n,s)),n=s,i+=1}return a}divideEqually(t){return this.isValid?this.splitBy(this.length()/t).slice(0,t):[]}overlaps(t){return this.e>t.s&&this.s<t.e}abutsStart(t){return this.isValid?+this.e==+t.s:!1}abutsEnd(t){return this.isValid?+t.e==+this.s:!1}engulfs(t){return this.isValid?this.s<=t.s&&this.e>=t.e:!1}equals(t){return!this.isValid||!t.isValid?!1:this.s.equals(t.s)&&this.e.equals(t.e)}intersection(t){if(!this.isValid)return this;const r=this.s>t.s?this.s:t.s,n=this.e<t.e?this.e:t.e;return r>=n?null:z.fromDateTimes(r,n)}union(t){if(!this.isValid)return this;const r=this.s<t.s?this.s:t.s,n=this.e>t.e?this.e:t.e;return z.fromDateTimes(r,n)}static merge(t){const[r,n]=t.sort((i,s)=>i.s-s.s).reduce(([i,s],a)=>s?s.overlaps(a)||s.abutsStart(a)?[i,s.union(a)]:[i.concat([s]),a]:[i,a],[[],null]);return n&&r.push(n),r}static xor(t){let r=null,n=0;const i=[],s=t.map(l=>[{time:l.s,type:"s"},{time:l.e,type:"e"}]),a=Array.prototype.concat(...s),o=a.sort((l,c)=>l.time-c.time);for(const l of o)n+=l.type==="s"?1:-1,n===1?r=l.time:(r&&+r!=+l.time&&i.push(z.fromDateTimes(r,l.time)),r=null);return z.merge(i)}difference(...t){return z.xor([this].concat(t)).map(r=>this.intersection(r)).filter(r=>r&&!r.isEmpty())}toString(){return this.isValid?`[${this.s.toISO()} – ${this.e.toISO()})`:Ht}[Symbol.for("nodejs.util.inspect.custom")](){return this.isValid?`Interval { start: ${this.s.toISO()}, end: ${this.e.toISO()} }`:`Interval { Invalid, reason: ${this.invalidReason} }`}toLocaleString(t=ti,r={}){return this.isValid?ee.create(this.s.loc.clone(r),t).formatInterval(this):Ht}toISO(t){return this.isValid?`${this.s.toISO(t)}/${this.e.toISO(t)}`:Ht}toISODate(){return this.isValid?`${this.s.toISODate()}/${this.e.toISODate()}`:Ht}toISOTime(t){return this.isValid?`${this.s.toISOTime(t)}/${this.e.toISOTime(t)}`:Ht}toFormat(t,{separator:r=" – "}={}){return this.isValid?`${this.s.toFormat(t)}${r}${this.e.toFormat(t)}`:Ht}toDuration(t,r){return this.isValid?this.e.diff(this.s,t,r):L.invalid(this.invalidReason)}mapEndpoints(t){return z.fromDateTimes(t(this.s),t(this.e))}}class Lr{static hasDST(t=U.defaultZone){const r=S.now().setZone(t).set({month:12});return!t.isUniversal&&r.offset!==r.set({month:6}).offset}static isValidIANAZone(t){return Ze.isValidZone(t)}static normalizeZone(t){return it(t,U.defaultZone)}static getStartOfWeek({locale:t=null,locObj:r=null}={}){return(r||V.create(t)).getStartOfWeek()}static getMinimumDaysInFirstWeek({locale:t=null,locObj:r=null}={}){return(r||V.create(t)).getMinDaysInFirstWeek()}static getWeekendWeekdays({locale:t=null,locObj:r=null}={}){return(r||V.create(t)).getWeekendDays().slice()}static months(t="long",{locale:r=null,numberingSystem:n=null,locObj:i=null,outputCalendar:s="gregory"}={}){return(i||V.create(r,n,s)).months(t)}static monthsFormat(t="long",{locale:r=null,numberingSystem:n=null,locObj:i=null,outputCalendar:s="gregory"}={}){return(i||V.create(r,n,s)).months(t,!0)}static weekdays(t="long",{locale:r=null,numberingSystem:n=null,locObj:i=null}={}){return(i||V.create(r,n,null)).weekdays(t)}static weekdaysFormat(t="long",{locale:r=null,numberingSystem:n=null,locObj:i=null}={}){return(i||V.create(r,n,null)).weekdays(t,!0)}static meridiems({locale:t=null}={}){return V.create(t).meridiems()}static eras(t="short",{locale:r=null}={}){return V.create(r,null,"gregory").eras(t)}static features(){return{relative:Id(),localeWeek:Dd()}}}function Ko(e,t){const r=i=>i.toUTC(0,{keepLocalTime:!0}).startOf("day").valueOf(),n=r(t)-r(e);return Math.floor(L.fromMillis(n).as("days"))}function og(e,t,r){const n=[["years",(l,c)=>c.year-l.year],["quarters",(l,c)=>c.quarter-l.quarter+(c.year-l.year)*4],["months",(l,c)=>c.month-l.month+(c.year-l.year)*12],["weeks",(l,c)=>{const d=Ko(l,c);return(d-d%7)/7}],["days",Ko]],i={},s=e;let a,o;for(const[l,c]of n)r.indexOf(l)>=0&&(a=l,i[l]=c(e,t),o=s.plus(i),o>t?(i[l]--,e=s.plus(i),e>t&&(o=e,i[l]--,e=s.plus(i))):e=o);return[e,i,o,a]}function lg(e,t,r,n){let[i,s,a,o]=og(e,t,r);const l=t-i,c=r.filter(u=>["hours","minutes","seconds","milliseconds"].indexOf(u)>=0);c.length===0&&(a<t&&(a=i.plus({[o]:1})),a!==i&&(s[o]=(s[o]||0)+l/(a-i)));const d=L.fromObject(s,n);return c.length>0?L.fromMillis(l,n).shiftTo(...c).plus(d):d}const Aa={arab:"[٠-٩]",arabext:"[۰-۹]",bali:"[᭐-᭙]",beng:"[০-৯]",deva:"[०-९]",fullwide:"[０-９]",gujr:"[૦-૯]",hanidec:"[〇|一|二|三|四|五|六|七|八|九]",khmr:"[០-៩]",knda:"[೦-೯]",laoo:"[໐-໙]",limb:"[᥆-᥏]",mlym:"[൦-൯]",mong:"[᠐-᠙]",mymr:"[၀-၉]",orya:"[୦-୯]",tamldec:"[௦-௯]",telu:"[౦-౯]",thai:"[๐-๙]",tibt:"[༠-༩]",latn:"\\d"},qo={arab:[1632,1641],arabext:[1776,1785],bali:[6992,7001],beng:[2534,2543],deva:[2406,2415],fullwide:[65296,65303],gujr:[2790,2799],khmr:[6112,6121],knda:[3302,3311],laoo:[3792,3801],limb:[6470,6479],mlym:[3430,3439],mong:[6160,6169],mymr:[4160,4169],orya:[2918,2927],tamldec:[3046,3055],telu:[3174,3183],thai:[3664,3673],tibt:[3872,3881]},cg=Aa.hanidec.replace(/[\[|\]]/g,"").split("");function ug(e){let t=parseInt(e,10);if(isNaN(t)){t="";for(let r=0;r<e.length;r++){const n=e.charCodeAt(r);if(e[r].search(Aa.hanidec)!==-1)t+=cg.indexOf(e[r]);else for(const i in qo){const[s,a]=qo[i];n>=s&&n<=a&&(t+=n-s)}}return parseInt(t,10)}else return t}function Oe({numberingSystem:e},t=""){return new RegExp(`${Aa[e||"latn"]}${t}`)}const dg="missing Intl.DateTimeFormat.formatToParts support";function I(e,t=r=>r){return{regex:e,deser:([r])=>t(ug(r))}}const fg=String.fromCharCode(160),Qd=`[ ${fg}]`,ef=new RegExp(Qd,"g");function hg(e){return e.replace(/\./g,"\\.?").replace(ef,Qd)}function Zo(e){return e.replace(/\./g,"").replace(ef," ").toLowerCase()}function Ne(e,t){return e===null?null:{regex:RegExp(e.map(hg).join("|")),deser:([r])=>e.findIndex(n=>Zo(r)===Zo(n))+t}}function Yo(e,t){return{regex:e,deser:([,r,n])=>Mi(r,n),groups:t}}function $n(e){return{regex:e,deser:([t])=>t}}function mg(e){return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}function pg(e,t){const r=Oe(t),n=Oe(t,"{2}"),i=Oe(t,"{3}"),s=Oe(t,"{4}"),a=Oe(t,"{6}"),o=Oe(t,"{1,2}"),l=Oe(t,"{1,3}"),c=Oe(t,"{1,6}"),d=Oe(t,"{1,9}"),u=Oe(t,"{2,4}"),f=Oe(t,"{4,6}"),h=y=>({regex:RegExp(mg(y.val)),deser:([b])=>b,literal:!0}),g=(y=>{if(e.literal)return h(y);switch(y.val){case"G":return Ne(t.eras("short"),0);case"GG":return Ne(t.eras("long"),0);case"y":return I(c);case"yy":return I(u,Hs);case"yyyy":return I(s);case"yyyyy":return I(f);case"yyyyyy":return I(a);case"M":return I(o);case"MM":return I(n);case"MMM":return Ne(t.months("short",!0),1);case"MMMM":return Ne(t.months("long",!0),1);case"L":return I(o);case"LL":return I(n);case"LLL":return Ne(t.months("short",!1),1);case"LLLL":return Ne(t.months("long",!1),1);case"d":return I(o);case"dd":return I(n);case"o":return I(l);case"ooo":return I(i);case"HH":return I(n);case"H":return I(o);case"hh":return I(n);case"h":return I(o);case"mm":return I(n);case"m":return I(o);case"q":return I(o);case"qq":return I(n);case"s":return I(o);case"ss":return I(n);case"S":return I(l);case"SSS":return I(i);case"u":return $n(d);case"uu":return $n(o);case"uuu":return I(r);case"a":return Ne(t.meridiems(),0);case"kkkk":return I(s);case"kk":return I(u,Hs);case"W":return I(o);case"WW":return I(n);case"E":case"c":return I(r);case"EEE":return Ne(t.weekdays("short",!1),1);case"EEEE":return Ne(t.weekdays("long",!1),1);case"ccc":return Ne(t.weekdays("short",!0),1);case"cccc":return Ne(t.weekdays("long",!0),1);case"Z":case"ZZ":return Yo(new RegExp(`([+-]${o.source})(?::(${n.source}))?`),2);case"ZZZ":return Yo(new RegExp(`([+-]${o.source})(${n.source})?`),2);case"z":return $n(/[a-z_+-/]{1,256}?/i);case" ":return $n(/[^\S\n\r]/);default:return h(y)}})(e)||{invalidReason:dg};return g.token=e,g}const gg={year:{"2-digit":"yy",numeric:"yyyyy"},month:{numeric:"M","2-digit":"MM",short:"MMM",long:"MMMM"},day:{numeric:"d","2-digit":"dd"},weekday:{short:"EEE",long:"EEEE"},dayperiod:"a",dayPeriod:"a",hour12:{numeric:"h","2-digit":"hh"},hour24:{numeric:"H","2-digit":"HH"},minute:{numeric:"m","2-digit":"mm"},second:{numeric:"s","2-digit":"ss"},timeZoneName:{long:"ZZZZZ",short:"ZZZ"}};function wg(e,t,r){const{type:n,value:i}=e;if(n==="literal"){const l=/^\s+$/.test(i);return{literal:!l,val:l?" ":i}}const s=t[n];let a=n;n==="hour"&&(t.hour12!=null?a=t.hour12?"hour12":"hour24":t.hourCycle!=null?t.hourCycle==="h11"||t.hourCycle==="h12"?a="hour12":a="hour24":a=r.hour12?"hour12":"hour24");let o=gg[a];if(typeof o=="object"&&(o=o[s]),o)return{literal:!1,val:o}}function yg(e){return[`^${e.map(r=>r.regex).reduce((r,n)=>`${r}(${n.source})`,"")}$`,e]}function bg(e,t,r){const n=e.match(t);if(n){const i={};let s=1;for(const a in r)if(nr(r,a)){const o=r[a],l=o.groups?o.groups+1:1;!o.literal&&o.token&&(i[o.token.val[0]]=o.deser(n.slice(s,s+l))),s+=l}return[n,i]}else return[n,{}]}function vg(e){const t=s=>{switch(s){case"S":return"millisecond";case"s":return"second";case"m":return"minute";case"h":case"H":return"hour";case"d":return"day";case"o":return"ordinal";case"L":case"M":return"month";case"y":return"year";case"E":case"c":return"weekday";case"W":return"weekNumber";case"k":return"weekYear";case"q":return"quarter";default:return null}};let r=null,n;return x(e.z)||(r=Ze.create(e.z)),x(e.Z)||(r||(r=new re(e.Z)),n=e.Z),x(e.q)||(e.M=(e.q-1)*3+1),x(e.h)||(e.h<12&&e.a===1?e.h+=12:e.h===12&&e.a===0&&(e.h=0)),e.G===0&&e.y&&(e.y=-e.y),x(e.u)||(e.S=Ta(e.u)),[Object.keys(e).reduce((s,a)=>{const o=t(a);return o&&(s[o]=e[a]),s},{}),r,n]}let es=null;function $g(){return es||(es=S.fromMillis(1555555555555)),es}function Eg(e,t){if(e.literal)return e;const r=ee.macroTokenToFormatOpts(e.val),n=nf(r,t);return n==null||n.includes(void 0)?e:n}function tf(e,t){return Array.prototype.concat(...e.map(r=>Eg(r,t)))}function rf(e,t,r){const n=tf(ee.parseFormat(r),e),i=n.map(a=>pg(a,e)),s=i.find(a=>a.invalidReason);if(s)return{input:t,tokens:n,invalidReason:s.invalidReason};{const[a,o]=yg(i),l=RegExp(a,"i"),[c,d]=bg(t,l,o),[u,f,h]=d?vg(d):[null,null,void 0];if(nr(d,"a")&&nr(d,"H"))throw new Kt("Can't include meridiem when specifying 24-hour format");return{input:t,tokens:n,regex:l,rawMatches:c,matches:d,result:u,zone:f,specificOffset:h}}}function Tg(e,t,r){const{result:n,zone:i,specificOffset:s,invalidReason:a}=rf(e,t,r);return[n,i,s,a]}function nf(e,t){if(!e)return null;const n=ee.create(t,e).dtFormatter($g()),i=n.formatToParts(),s=n.resolvedOptions();return i.map(a=>wg(a,e,s))}const ts="Invalid DateTime",Jo=864e13;function En(e){return new Ie("unsupported zone",`the zone "${e.name}" is not supported`)}function rs(e){return e.weekData===null&&(e.weekData=ri(e.c)),e.weekData}function ns(e){return e.localWeekData===null&&(e.localWeekData=ri(e.c,e.loc.getMinDaysInFirstWeek(),e.loc.getStartOfWeek())),e.localWeekData}function wt(e,t){const r={ts:e.ts,zone:e.zone,c:e.c,o:e.o,loc:e.loc,invalid:e.invalid};return new S({...r,...t,old:r})}function sf(e,t,r){let n=e-t*60*1e3;const i=r.offset(n);if(t===i)return[n,t];n-=(i-t)*60*1e3;const s=r.offset(n);return i===s?[n,i]:[e-Math.min(i,s)*60*1e3,Math.max(i,s)]}function Tn(e,t){e+=t*60*1e3;const r=new Date(e);return{year:r.getUTCFullYear(),month:r.getUTCMonth()+1,day:r.getUTCDate(),hour:r.getUTCHours(),minute:r.getUTCMinutes(),second:r.getUTCSeconds(),millisecond:r.getUTCMilliseconds()}}function zn(e,t,r){return sf(xi(e),t,r)}function Xo(e,t){const r=e.o,n=e.c.year+Math.trunc(t.years),i=e.c.month+Math.trunc(t.months)+Math.trunc(t.quarters)*3,s={...e.c,year:n,month:i,day:Math.min(e.c.day,ni(n,i))+Math.trunc(t.days)+Math.trunc(t.weeks)*7},a=L.fromObject({years:t.years-Math.trunc(t.years),quarters:t.quarters-Math.trunc(t.quarters),months:t.months-Math.trunc(t.months),weeks:t.weeks-Math.trunc(t.weeks),days:t.days-Math.trunc(t.days),hours:t.hours,minutes:t.minutes,seconds:t.seconds,milliseconds:t.milliseconds}).as("milliseconds"),o=xi(s);let[l,c]=sf(o,r,e.zone);return a!==0&&(l+=a,c=e.zone.offset(l)),{ts:l,o:c}}function Tr(e,t,r,n,i,s){const{setZone:a,zone:o}=r;if(e&&Object.keys(e).length!==0||t){const l=t||o,c=S.fromObject(e,{...r,zone:l,specificOffset:s});return a?c:c.setZone(o)}else return S.invalid(new Ie("unparsable",`the input "${i}" can't be parsed as ${n}`))}function Sn(e,t,r=!0){return e.isValid?ee.create(V.create("en-US"),{allowZ:r,forceSimple:!0}).formatDateTimeFromString(e,t):null}function is(e,t){const r=e.c.year>9999||e.c.year<0;let n="";return r&&e.c.year>=0&&(n+="+"),n+=K(e.c.year,r?6:4),t?(n+="-",n+=K(e.c.month),n+="-",n+=K(e.c.day)):(n+=K(e.c.month),n+=K(e.c.day)),n}function Qo(e,t,r,n,i,s){let a=K(e.c.hour);return t?(a+=":",a+=K(e.c.minute),(e.c.millisecond!==0||e.c.second!==0||!r)&&(a+=":")):a+=K(e.c.minute),(e.c.millisecond!==0||e.c.second!==0||!r)&&(a+=K(e.c.second),(e.c.millisecond!==0||!n)&&(a+=".",a+=K(e.c.millisecond,3))),i&&(e.isOffsetFixed&&e.offset===0&&!s?a+="Z":e.o<0?(a+="-",a+=K(Math.trunc(-e.o/60)),a+=":",a+=K(Math.trunc(-e.o%60))):(a+="+",a+=K(Math.trunc(e.o/60)),a+=":",a+=K(Math.trunc(e.o%60)))),s&&(a+="["+e.zone.ianaName+"]"),a}const af={month:1,day:1,hour:0,minute:0,second:0,millisecond:0},Sg={weekNumber:1,weekday:1,hour:0,minute:0,second:0,millisecond:0},kg={ordinal:1,hour:0,minute:0,second:0,millisecond:0},of=["year","month","day","hour","minute","second","millisecond"],xg=["weekYear","weekNumber","weekday","hour","minute","second","millisecond"],Mg=["year","ordinal","hour","minute","second","millisecond"];function Ag(e){const t={year:"year",years:"year",month:"month",months:"month",day:"day",days:"day",hour:"hour",hours:"hour",minute:"minute",minutes:"minute",quarter:"quarter",quarters:"quarter",second:"second",seconds:"second",millisecond:"millisecond",milliseconds:"millisecond",weekday:"weekday",weekdays:"weekday",weeknumber:"weekNumber",weeksnumber:"weekNumber",weeknumbers:"weekNumber",weekyear:"weekYear",weekyears:"weekYear",ordinal:"ordinal"}[e.toLowerCase()];if(!t)throw new ld(e);return t}function el(e){switch(e.toLowerCase()){case"localweekday":case"localweekdays":return"localWeekday";case"localweeknumber":case"localweeknumbers":return"localWeekNumber";case"localweekyear":case"localweekyears":return"localWeekYear";default:return Ag(e)}}function tl(e,t){const r=it(t.zone,U.defaultZone),n=V.fromObject(t),i=U.now();let s,a;if(x(e.year))s=i;else{for(const c of of)x(e[c])&&(e[c]=af[c]);const o=Od(e)||Nd(e);if(o)return S.invalid(o);const l=r.offset(i);[s,a]=zn(e,l,r)}return new S({ts:s,zone:r,loc:n,o:a})}function rl(e,t,r){const n=x(r.round)?!0:r.round,i=(a,o)=>(a=Sa(a,n||r.calendary?0:2,!0),t.loc.clone(r).relFormatter(r).format(a,o)),s=a=>r.calendary?t.hasSame(e,a)?0:t.startOf(a).diff(e.startOf(a),a).get(a):t.diff(e,a).get(a);if(r.unit)return i(s(r.unit),r.unit);for(const a of r.units){const o=s(a);if(Math.abs(o)>=1)return i(o,a)}return i(e>t?-0:0,r.units[r.units.length-1])}function nl(e){let t={},r;return e.length>0&&typeof e[e.length-1]=="object"?(t=e[e.length-1],r=Array.from(e).slice(0,e.length-1)):r=Array.from(e),[t,r]}class S{constructor(t){const r=t.zone||U.defaultZone;let n=t.invalid||(Number.isNaN(t.ts)?new Ie("invalid input"):null)||(r.isValid?null:En(r));this.ts=x(t.ts)?U.now():t.ts;let i=null,s=null;if(!n)if(t.old&&t.old.ts===this.ts&&t.old.zone.equals(r))[i,s]=[t.old.c,t.old.o];else{const o=r.offset(this.ts);i=Tn(this.ts,o),n=Number.isNaN(i.year)?new Ie("invalid input"):null,i=n?null:i,s=n?null:o}this._zone=r,this.loc=t.loc||V.create(),this.invalid=n,this.weekData=null,this.localWeekData=null,this.c=i,this.o=s,this.isLuxonDateTime=!0}static now(){return new S({})}static local(){const[t,r]=nl(arguments),[n,i,s,a,o,l,c]=r;return tl({year:n,month:i,day:s,hour:a,minute:o,second:l,millisecond:c},t)}static utc(){const[t,r]=nl(arguments),[n,i,s,a,o,l,c]=r;return t.zone=re.utcInstance,tl({year:n,month:i,day:s,hour:a,minute:o,second:l,millisecond:c},t)}static fromJSDate(t,r={}){const n=n0(t)?t.valueOf():NaN;if(Number.isNaN(n))return S.invalid("invalid input");const i=it(r.zone,U.defaultZone);return i.isValid?new S({ts:n,zone:i,loc:V.fromObject(r)}):S.invalid(En(i))}static fromMillis(t,r={}){if(xt(t))return t<-Jo||t>Jo?S.invalid("Timestamp out of range"):new S({ts:t,zone:it(r.zone,U.defaultZone),loc:V.fromObject(r)});throw new ae(`fromMillis requires a numerical input, but received a ${typeof t} with value ${t}`)}static fromSeconds(t,r={}){if(xt(t))return new S({ts:t*1e3,zone:it(r.zone,U.defaultZone),loc:V.fromObject(r)});throw new ae("fromSeconds requires a numerical input")}static fromObject(t,r={}){t=t||{};const n=it(r.zone,U.defaultZone);if(!n.isValid)return S.invalid(En(n));const i=V.fromObject(r),s=ii(t,el),{minDaysInFirstWeek:a,startOfWeek:o}=Bo(s,i),l=U.now(),c=x(r.specificOffset)?n.offset(l):r.specificOffset,d=!x(s.ordinal),u=!x(s.year),f=!x(s.month)||!x(s.day),h=u||f,m=s.weekYear||s.weekNumber;if((h||d)&&m)throw new Kt("Can't mix weekYear/weekNumber units with year/month/day or ordinals");if(f&&d)throw new Kt("Can't mix ordinal dates with month/day");const g=m||s.weekday&&!h;let y,b,E=Tn(l,c);g?(y=xg,b=Sg,E=ri(E,a,o)):d?(y=Mg,b=kg,E=Qi(E)):(y=of,b=af);let C=!1;for(const Le of y){const pt=s[Le];x(pt)?C?s[Le]=b[Le]:s[Le]=E[Le]:C=!0}const O=g?e0(s,a,o):d?t0(s):Od(s),Y=O||Nd(s);if(Y)return S.invalid(Y);const Pe=g?Vo(s,a,o):d?Ho(s):s,[me,H]=zn(Pe,c,n),W=new S({ts:me,zone:n,o:H,loc:i});return s.weekday&&h&&t.weekday!==W.weekday?S.invalid("mismatched weekday",`you can't specify both a weekday of ${s.weekday} and a date of ${W.toISO()}`):W}static fromISO(t,r={}){const[n,i]=G0(t);return Tr(n,i,r,"ISO 8601",t)}static fromRFC2822(t,r={}){const[n,i]=K0(t);return Tr(n,i,r,"RFC 2822",t)}static fromHTTP(t,r={}){const[n,i]=q0(t);return Tr(n,i,r,"HTTP",r)}static fromFormat(t,r,n={}){if(x(t)||x(r))throw new ae("fromFormat requires an input string and a format");const{locale:i=null,numberingSystem:s=null}=n,a=V.fromOpts({locale:i,numberingSystem:s,defaultToEN:!0}),[o,l,c,d]=Tg(a,t,r);return d?S.invalid(d):Tr(o,l,n,`format ${r}`,t,c)}static fromString(t,r,n={}){return S.fromFormat(t,r,n)}static fromSQL(t,r={}){const[n,i]=tg(t);return Tr(n,i,r,"SQL",t)}static invalid(t,r=null){if(!t)throw new ae("need to specify a reason the DateTime is invalid");const n=t instanceof Ie?t:new Ie(t,r);if(U.throwOnInvalid)throw new Pp(n);return new S({invalid:n})}static isDateTime(t){return t&&t.isLuxonDateTime||!1}static parseFormatForOpts(t,r={}){const n=nf(t,V.fromObject(r));return n?n.map(i=>i?i.val:null).join(""):null}static expandFormat(t,r={}){return tf(ee.parseFormat(t),V.fromObject(r)).map(i=>i.val).join("")}get(t){return this[t]}get isValid(){return this.invalid===null}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}get locale(){return this.isValid?this.loc.locale:null}get numberingSystem(){return this.isValid?this.loc.numberingSystem:null}get outputCalendar(){return this.isValid?this.loc.outputCalendar:null}get zone(){return this._zone}get zoneName(){return this.isValid?this.zone.name:null}get year(){return this.isValid?this.c.year:NaN}get quarter(){return this.isValid?Math.ceil(this.c.month/3):NaN}get month(){return this.isValid?this.c.month:NaN}get day(){return this.isValid?this.c.day:NaN}get hour(){return this.isValid?this.c.hour:NaN}get minute(){return this.isValid?this.c.minute:NaN}get second(){return this.isValid?this.c.second:NaN}get millisecond(){return this.isValid?this.c.millisecond:NaN}get weekYear(){return this.isValid?rs(this).weekYear:NaN}get weekNumber(){return this.isValid?rs(this).weekNumber:NaN}get weekday(){return this.isValid?rs(this).weekday:NaN}get isWeekend(){return this.isValid&&this.loc.getWeekendDays().includes(this.weekday)}get localWeekday(){return this.isValid?ns(this).weekday:NaN}get localWeekNumber(){return this.isValid?ns(this).weekNumber:NaN}get localWeekYear(){return this.isValid?ns(this).weekYear:NaN}get ordinal(){return this.isValid?Qi(this.c).ordinal:NaN}get monthShort(){return this.isValid?Lr.months("short",{locObj:this.loc})[this.month-1]:null}get monthLong(){return this.isValid?Lr.months("long",{locObj:this.loc})[this.month-1]:null}get weekdayShort(){return this.isValid?Lr.weekdays("short",{locObj:this.loc})[this.weekday-1]:null}get weekdayLong(){return this.isValid?Lr.weekdays("long",{locObj:this.loc})[this.weekday-1]:null}get offset(){return this.isValid?+this.o:NaN}get offsetNameShort(){return this.isValid?this.zone.offsetName(this.ts,{format:"short",locale:this.locale}):null}get offsetNameLong(){return this.isValid?this.zone.offsetName(this.ts,{format:"long",locale:this.locale}):null}get isOffsetFixed(){return this.isValid?this.zone.isUniversal:null}get isInDST(){return this.isOffsetFixed?!1:this.offset>this.set({month:1,day:1}).offset||this.offset>this.set({month:5}).offset}getPossibleOffsets(){if(!this.isValid||this.isOffsetFixed)return[this];const t=864e5,r=6e4,n=xi(this.c),i=this.zone.offset(n-t),s=this.zone.offset(n+t),a=this.zone.offset(n-i*r),o=this.zone.offset(n-s*r);if(a===o)return[this];const l=n-a*r,c=n-o*r,d=Tn(l,a),u=Tn(c,o);return d.hour===u.hour&&d.minute===u.minute&&d.second===u.second&&d.millisecond===u.millisecond?[wt(this,{ts:l}),wt(this,{ts:c})]:[this]}get isInLeapYear(){return sn(this.year)}get daysInMonth(){return ni(this.year,this.month)}get daysInYear(){return this.isValid?Zt(this.year):NaN}get weeksInWeekYear(){return this.isValid?Ur(this.weekYear):NaN}get weeksInLocalWeekYear(){return this.isValid?Ur(this.localWeekYear,this.loc.getMinDaysInFirstWeek(),this.loc.getStartOfWeek()):NaN}resolvedLocaleOptions(t={}){const{locale:r,numberingSystem:n,calendar:i}=ee.create(this.loc.clone(t),t).resolvedOptions(this);return{locale:r,numberingSystem:n,outputCalendar:i}}toUTC(t=0,r={}){return this.setZone(re.instance(t),r)}toLocal(){return this.setZone(U.defaultZone)}setZone(t,{keepLocalTime:r=!1,keepCalendarTime:n=!1}={}){if(t=it(t,U.defaultZone),t.equals(this.zone))return this;if(t.isValid){let i=this.ts;if(r||n){const s=t.offset(this.ts),a=this.toObject();[i]=zn(a,s,t)}return wt(this,{ts:i,zone:t})}else return S.invalid(En(t))}reconfigure({locale:t,numberingSystem:r,outputCalendar:n}={}){const i=this.loc.clone({locale:t,numberingSystem:r,outputCalendar:n});return wt(this,{loc:i})}setLocale(t){return this.reconfigure({locale:t})}set(t){if(!this.isValid)return this;const r=ii(t,el),{minDaysInFirstWeek:n,startOfWeek:i}=Bo(r,this.loc),s=!x(r.weekYear)||!x(r.weekNumber)||!x(r.weekday),a=!x(r.ordinal),o=!x(r.year),l=!x(r.month)||!x(r.day),c=o||l,d=r.weekYear||r.weekNumber;if((c||a)&&d)throw new Kt("Can't mix weekYear/weekNumber units with year/month/day or ordinals");if(l&&a)throw new Kt("Can't mix ordinal dates with month/day");let u;s?u=Vo({...ri(this.c,n,i),...r},n,i):x(r.ordinal)?(u={...this.toObject(),...r},x(r.day)&&(u.day=Math.min(ni(u.year,u.month),u.day))):u=Ho({...Qi(this.c),...r});const[f,h]=zn(u,this.o,this.zone);return wt(this,{ts:f,o:h})}plus(t){if(!this.isValid)return this;const r=L.fromDurationLike(t);return wt(this,Xo(this,r))}minus(t){if(!this.isValid)return this;const r=L.fromDurationLike(t).negate();return wt(this,Xo(this,r))}startOf(t,{useLocaleWeeks:r=!1}={}){if(!this.isValid)return this;const n={},i=L.normalizeUnit(t);switch(i){case"years":n.month=1;case"quarters":case"months":n.day=1;case"weeks":case"days":n.hour=0;case"hours":n.minute=0;case"minutes":n.second=0;case"seconds":n.millisecond=0;break}if(i==="weeks")if(r){const s=this.loc.getStartOfWeek(),{weekday:a}=this;a<s&&(n.weekNumber=this.weekNumber-1),n.weekday=s}else n.weekday=1;if(i==="quarters"){const s=Math.ceil(this.month/3);n.month=(s-1)*3+1}return this.set(n)}endOf(t,r){return this.isValid?this.plus({[t]:1}).startOf(t,r).minus(1):this}toFormat(t,r={}){return this.isValid?ee.create(this.loc.redefaultToEN(r)).formatDateTimeFromString(this,t):ts}toLocaleString(t=ti,r={}){return this.isValid?ee.create(this.loc.clone(r),t).formatDateTime(this):ts}toLocaleParts(t={}){return this.isValid?ee.create(this.loc.clone(t),t).formatDateTimeParts(this):[]}toISO({format:t="extended",suppressSeconds:r=!1,suppressMilliseconds:n=!1,includeOffset:i=!0,extendedZone:s=!1}={}){if(!this.isValid)return null;const a=t==="extended";let o=is(this,a);return o+="T",o+=Qo(this,a,r,n,i,s),o}toISODate({format:t="extended"}={}){return this.isValid?is(this,t==="extended"):null}toISOWeekDate(){return Sn(this,"kkkk-'W'WW-c")}toISOTime({suppressMilliseconds:t=!1,suppressSeconds:r=!1,includeOffset:n=!0,includePrefix:i=!1,extendedZone:s=!1,format:a="extended"}={}){return this.isValid?(i?"T":"")+Qo(this,a==="extended",r,t,n,s):null}toRFC2822(){return Sn(this,"EEE, dd LLL yyyy HH:mm:ss ZZZ",!1)}toHTTP(){return Sn(this.toUTC(),"EEE, dd LLL yyyy HH:mm:ss 'GMT'")}toSQLDate(){return this.isValid?is(this,!0):null}toSQLTime({includeOffset:t=!0,includeZone:r=!1,includeOffsetSpace:n=!0}={}){let i="HH:mm:ss.SSS";return(r||t)&&(n&&(i+=" "),r?i+="z":t&&(i+="ZZ")),Sn(this,i,!0)}toSQL(t={}){return this.isValid?`${this.toSQLDate()} ${this.toSQLTime(t)}`:null}toString(){return this.isValid?this.toISO():ts}[Symbol.for("nodejs.util.inspect.custom")](){return this.isValid?`DateTime { ts: ${this.toISO()}, zone: ${this.zone.name}, locale: ${this.locale} }`:`DateTime { Invalid, reason: ${this.invalidReason} }`}valueOf(){return this.toMillis()}toMillis(){return this.isValid?this.ts:NaN}toSeconds(){return this.isValid?this.ts/1e3:NaN}toUnixInteger(){return this.isValid?Math.floor(this.ts/1e3):NaN}toJSON(){return this.toISO()}toBSON(){return this.toJSDate()}toObject(t={}){if(!this.isValid)return{};const r={...this.c};return t.includeConfig&&(r.outputCalendar=this.outputCalendar,r.numberingSystem=this.loc.numberingSystem,r.locale=this.loc.locale),r}toJSDate(){return new Date(this.isValid?this.ts:NaN)}diff(t,r="milliseconds",n={}){if(!this.isValid||!t.isValid)return L.invalid("created by diffing an invalid DateTime");const i={locale:this.locale,numberingSystem:this.numberingSystem,...n},s=i0(r).map(L.normalizeUnit),a=t.valueOf()>this.valueOf(),o=a?this:t,l=a?t:this,c=lg(o,l,s,i);return a?c.negate():c}diffNow(t="milliseconds",r={}){return this.diff(S.now(),t,r)}until(t){return this.isValid?z.fromDateTimes(this,t):this}hasSame(t,r,n){if(!this.isValid)return!1;const i=t.valueOf(),s=this.setZone(t.zone,{keepLocalTime:!0});return s.startOf(r,n)<=i&&i<=s.endOf(r,n)}equals(t){return this.isValid&&t.isValid&&this.valueOf()===t.valueOf()&&this.zone.equals(t.zone)&&this.loc.equals(t.loc)}toRelative(t={}){if(!this.isValid)return null;const r=t.base||S.fromObject({},{zone:this.zone}),n=t.padding?this<r?-t.padding:t.padding:0;let i=["years","months","days","hours","minutes","seconds"],s=t.unit;return Array.isArray(t.unit)&&(i=t.unit,s=void 0),rl(r,this.plus(n),{...t,numeric:"always",units:i,unit:s})}toRelativeCalendar(t={}){return this.isValid?rl(t.base||S.fromObject({},{zone:this.zone}),this,{...t,numeric:"auto",units:["years","months","days"],calendary:!0}):null}static min(...t){if(!t.every(S.isDateTime))throw new ae("min requires all arguments be DateTimes");return Fo(t,r=>r.valueOf(),Math.min)}static max(...t){if(!t.every(S.isDateTime))throw new ae("max requires all arguments be DateTimes");return Fo(t,r=>r.valueOf(),Math.max)}static fromFormatExplain(t,r,n={}){const{locale:i=null,numberingSystem:s=null}=n,a=V.fromOpts({locale:i,numberingSystem:s,defaultToEN:!0});return rf(a,t,r)}static fromStringExplain(t,r,n={}){return S.fromFormatExplain(t,r,n)}static get DATE_SHORT(){return ti}static get DATE_MED(){return cd}static get DATE_MED_WITH_WEEKDAY(){return Np}static get DATE_FULL(){return ud}static get DATE_HUGE(){return dd}static get TIME_SIMPLE(){return fd}static get TIME_WITH_SECONDS(){return hd}static get TIME_WITH_SHORT_OFFSET(){return md}static get TIME_WITH_LONG_OFFSET(){return pd}static get TIME_24_SIMPLE(){return gd}static get TIME_24_WITH_SECONDS(){return wd}static get TIME_24_WITH_SHORT_OFFSET(){return yd}static get TIME_24_WITH_LONG_OFFSET(){return bd}static get DATETIME_SHORT(){return vd}static get DATETIME_SHORT_WITH_SECONDS(){return $d}static get DATETIME_MED(){return Ed}static get DATETIME_MED_WITH_SECONDS(){return Td}static get DATETIME_MED_WITH_WEEKDAY(){return Ip}static get DATETIME_FULL(){return Sd}static get DATETIME_FULL_WITH_SECONDS(){return kd}static get DATETIME_HUGE(){return xd}static get DATETIME_HUGE_WITH_SECONDS(){return Md}}function Sr(e){if(S.isDateTime(e))return e;if(e&&e.valueOf&&xt(e.valueOf()))return S.fromJSDate(e);if(e&&typeof e=="object")return S.fromObject(e);throw new ae(`Unknown datetime argument: ${e}, of type ${typeof e}`)}function lf(e){const t=S.fromObject(Mp(e,["timezone"]),{zone:e.timezone});if(!t.isValid)throw new Error(t.invalidExplanation??void 0);return t}function Cg(e,t){if(!e.isValid)throw new Error(`Invalid input: '${e.toISO()}'`);return{day:e.day,month:e.month,year:e.year,hour:e.hour,minute:e.minute,second:e.second,millisecond:e.millisecond,timezone:t??e.zoneName}}const Pg=[(e,t)=>t in e,(e,t)=>t in e.constructor.prototype];function Rr(e,t){return e?Pg.some(r=>{try{return r(e,t)}catch{return!1}}):!1}function Ct(e){let t;try{t=Reflect.ownKeys(e)}catch{}return t??[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}function Lg(e){return Ct(e).map(t=>e[t])}function Og(e,t){return e.includes(t)}function Ng(e){return!!e}var il;(function(e){e.Upper="upper",e.Lower="lower"})(il||(il={}));var sl;(function(e){e.FirstThenWait="first-then-wait",e.AfterWait="after-wait"})(sl||(sl={}));function Ig(e){return e?e.map(Ca).filter(Ng).join(`
`):""}function Ca(e){return e?e instanceof Error?e.message:Rr(e,"message")?String(e.message):String(e):""}function Dg(e){return e instanceof Error?e:new Error(Ca(e))}function Rg(e,t){const r=Dg(e);return r.message=`${t}: ${r.message}`,r}function cf(e,t){let r=!1;const n=Ct(e).reduce((i,s)=>{const a=t(s,e[s],e);return a instanceof Promise&&(r=!0),{...i,[s]:a}},{});return r?new Promise(async(i,s)=>{try{await Promise.all(Ct(n).map(async a=>{const o=await n[a];n[a]=o})),i(n)}catch(a){s(a)}}):n}function _g(e,t){try{return Vg(e,t),!0}catch{return!1}}function Vg(e,t,r){if(e.length<t)throw new Error(r?`'${r}' is not at least '${t}' in length.`:`Array is not at least '${t}' in length.`)}function ir(e){return!!e&&typeof e=="object"}function Hg(){return globalThis.crypto?globalThis.crypto:require("crypto").webcrypto}Hg();function Bg(e,t){var o;const r=t==null?void 0:t.constructor,n=(o=e==null?void 0:e.constructor)==null?void 0:o.prototype,i=(e==null?void 0:e.constructor)===r,s=r&&n?n instanceof r:!1,a=i||s;return rr(e)===rr(t)&&a}const uf="__vir__shape__definition__key__do__not__use__in__actual__objects";function df(e){return Rr(e,uf)}const Pa=Symbol("and"),ff=Symbol("instance"),hf=Symbol("enum"),mf=Symbol("exact"),La=Symbol("indexed-keys"),Oa=Symbol("or"),Na=Symbol("unknown"),Fg=[Pa,hf,mf,La,ff,Oa,Na],pf="__vir__shape__specifier__key__do__not__use__in__actual__objects";function Ug(...e){return Di(e,Pa)}function gf(...e){return Di(e,La)}function kn(...e){return Di(e,Oa)}function jg(e){return Di([e],Na)}function Ci(e){return It(e,Pa)}function Pi(e){return It(e,ff)}function Li(e){return It(e,hf)}function Oi(e){return It(e,mf)}function Ni(e){return It(e,La)}function ln(e){return It(e,Oa)}function Ii(e){return It(e,Na)}function It(e,t){const r=cn(e);return!!r&&r.specifierType===t}function Di(e,t){return{[pf]:!0,specifierType:t,parts:e}}function St(e,t,r,n){const i=cn(t);if(i){if(Pi(i))return e instanceof i.parts[0];if(Ci(i))return i.parts.every(s=>St(e,s));if(ln(i))return i.parts.some(s=>St(e,s));if(Oi(i))return ir(e)?St(e,i.parts[0]):e===i.parts[0];if(Li(i))return Object.values(i.parts[0]).some(s=>s===e);if(Ni(i))return ir(e)?zg(e,i,!!r)&&Lg(e).every(s=>St(s,i.parts[0].values)):!1;if(Ii(i))return!0}return n?t===e:Bg(e,t)}function zg(e,t,r){const n=t.parts[0].required,i=t.parts[0].keys;if(r)if(n){const s=Ia(t);return T(s,"boolean")?s:s.every(a=>Ct(e).some(o=>St(o,a,!1,!0)))}else return!0;else return Ct(e).every(s=>St(s,i))}function Ia(e){const t=e.parts[0].keys,r=cn(t);if(Zi(t))return[t];if(r){if(Pi(r))return!1;if(Ci(r))return!1;if(ln(r)){const n=r.parts.map(s=>Ia(gf({...e.parts[0],keys:s})));let i;return n.forEach(s=>{T(s,"boolean")&&(s&&i==null?i=!0:i=!1)}),T(i,"boolean")?i:n.flat().filter(Zi)}else if(Oi(r)){const n=r.parts.filter(Zi);return n.length!==r.parts.length?!1:n}else{if(Li(r))return Object.values(r.parts[0]);if(Ni(r))return!1;if(Ii(r))return!0}}return!1}function cn(e){if(ir(e)&&Rr(e,pf)){if(!Rr(e,"parts")||!T(e.parts,"array"))throw new Error("Found a shape specifier but its parts are not valid.");if(!Rr(e,"specifierType")||!Og(Fg,e.specifierType))throw new Error("Found a shape specifier but its specifier type is not valid.");return e}}class al extends TypeError{constructor(){super(...arguments),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"DefaultValueConstructionError"})}}function Bs(e,t=!1){return Or(e)}function Or(e){const t=cn(e);if(t)if(Pi(t)){const r=t.parts[0];try{return new r}catch(n){throw new al(`Failed to create default value for classShape for class '${r.name}': ${Ca(n)}`)}}else{if(ln(t)||Oi(t))return Or(t.parts[0]);if(Ci(t))return t.parts.reduce((r,n)=>Object.assign(r,Or(n)),{});if(Li(t))return Object.values(t.parts[0])[0];if(Ni(t)){const r=Ia(t);return!t.parts[0].required||T(r,"boolean")?{}:Object.fromEntries(r.map(n=>[n,Or(t.parts[0].values)]))}else{if(Ii(t))return t.parts[0]??{};throw new al(`found specifier but it matches no expected specifiers: ${String(t.specifierType)}`)}}return df(e)?Bs(e.shape):e instanceof RegExp?e:T(e,"array")?e.map(Or):ir(e)?cf(e,(r,n)=>Bs(n)):e}function Dt(e,t=!1){return{shape:e,get runTimeType(){throw new Error("runTimeType cannot be used as a value, it is only for types.")},isReadonly:t,get defaultValue(){return Bs(e)},[uf]:!0}}class Ee extends TypeError{constructor(){super(...arguments),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ShapeMismatchError"})}}function Wg(e,t,r={}){try{return Da(e,t,r),!0}catch{return!1}}function Da(e,t,r={},n=""){try{Fe({subject:e,shape:t.shape,keys:["top level"],options:{exactValues:!1,ignoreExtraKeys:!!r.allowExtraKeys}})}catch(i){throw n?Rg(i,n):i}}function Fs(e){return[e[0],...e.slice(1).map(t=>`'${String(t)}'`)].join(" -> ")}function Fe({subject:e,shape:t,keys:r,options:n}){if(Ii(t))return!0;if(df(t))return Fe({subject:e,shape:t.shape,keys:r,options:n});const i=Fs(r);if(cn(e))throw new Ee(`Shape test subjects cannot be contain shape specifiers but one was found at ${i}.`);if(!St(e,t,!n.ignoreExtraKeys))throw new Ee(`Subject does not match shape definition at key ${i}`);if(T(t,"function"))return T(e,"function");if(Pi(t))return e instanceof t.parts[0];if(ir(e)){const a=e,o=n.ignoreExtraKeys?{}:Object.fromEntries(Object.keys(a).map(d=>[d,!1])),l=[];let c=!1;if(ln(t)){const d=[];c=t.parts.some(u=>{try{const f=Fe({subject:e,shape:u,keys:r,options:{...n}});return Object.assign(o,f),!0}catch(f){if(f instanceof Ee)return d.push(f),!1;throw f}}),!c&&_g(d,1)&&l.push(d[0])}else if(Ci(t))c=t.parts.every(d=>{try{const u=Fe({subject:e,shape:d,keys:r,options:{...n,ignoreExtraKeys:!0}});return Object.assign(o,u),!0}catch(u){if(u instanceof Ee)return l.push(u),!1;throw u}});else if(Oi(t)){const d=Fe({subject:e,shape:t.parts[0],keys:r,options:{...n,exactValues:!0}});Object.assign(o,d),c=!0}else{if(Li(t))throw new Ee(`Cannot compare an enum specifier to an object at ${i}`);if(T(t,"array")&&T(a,"array"))c=a.every((d,u)=>{const f=t.some(h=>{try{return Fe({subject:d,shape:h,keys:[...r,u],options:n}),!0}catch(m){if(m instanceof Ee)return l.push(m),!1;throw m}});return o[u]=f,f});else if(Ni(t)){const d=cf(e,(u,f)=>(n.ignoreExtraKeys||Fe({shape:t.parts[0].keys,subject:u,keys:[...r,u],options:n}),Fe({shape:t.parts[0].values,subject:f,keys:[...r,u],options:n}),!0));Object.assign(o,d),c=!0}else{const d=Gg({keys:r,options:n,shape:t,subject:e});Object.assign(o,d),c=!0}}if(l.length)throw new Ee(Ig(l));if(!c){const u=`Failed on key(s): ${Object.keys(o).filter(f=>!o[f]).map(f=>Fs([...r,f])).join(",")}`;throw new Ee(u)}return n.ignoreExtraKeys||Object.entries(o).forEach(([d,u])=>{if(!u)throw new Ee(`subject as extra key '${d}' in ${i}.`)}),o}else if(n.exactValues)return e===t;return!0}function Gg({keys:e,options:t,shape:r,subject:n}){const i=Fs(e),s={};if(ir(r)){const a=new Set(Ct(r)),o=new Set(Ct(n));a.forEach(l=>{l in n&&o.add(l)}),t.ignoreExtraKeys||o.forEach(l=>{if(!a.has(l))throw new Ee(`Subject has extra key '${String(l)}' in ${i}`)}),a.forEach(l=>{var f;const c=r[l],d=ln(c)?c.parts.includes(void 0):!1,u=((f=c==null?void 0:c.includes)==null?void 0:f.call(c,void 0))||c===void 0;if(!o.has(l)&&!d&&!u)throw new Ee(`Subject missing key '${String(l)}' in ${i}`)}),o.forEach(l=>{const c=n[l];if(t.ignoreExtraKeys&&!a.has(l))return;const d=r[l];Fe({subject:c,shape:d,keys:[...e,l],options:t}),s[l]=!0})}else throw new Ee(`shape definition at ${i} was not an object.`);return s}const Kg=["Africa/Abidjan","Africa/Accra","Africa/Addis_Ababa","Africa/Algiers","Africa/Asmara","Africa/Bamako","Africa/Bangui","Africa/Banjul","Africa/Bissau","Africa/Blantyre","Africa/Brazzaville","Africa/Bujumbura","Africa/Cairo","Africa/Casablanca","Africa/Ceuta","Africa/Conakry","Africa/Dakar","Africa/Dar_es_Salaam","Africa/Djibouti","Africa/Douala","Africa/El_Aaiun","Africa/Freetown","Africa/Gaborone","Africa/Harare","Africa/Johannesburg","Africa/Juba","Africa/Kampala","Africa/Khartoum","Africa/Kigali","Africa/Kinshasa","Africa/Lagos","Africa/Libreville","Africa/Lome","Africa/Luanda","Africa/Lubumbashi","Africa/Lusaka","Africa/Malabo","Africa/Maputo","Africa/Maseru","Africa/Mbabane","Africa/Mogadishu","Africa/Monrovia","Africa/Nairobi","Africa/Ndjamena","Africa/Niamey","Africa/Nouakchott","Africa/Ouagadougou","Africa/Porto-Novo","Africa/Sao_Tome","Africa/Timbuktu","Africa/Tripoli","Africa/Tunis","Africa/Windhoek","America/Adak","America/Anchorage","America/Anguilla","America/Antigua","America/Araguaina","America/Argentina/Buenos_Aires","America/Argentina/Catamarca","America/Argentina/ComodRivadavia","America/Argentina/Cordoba","America/Argentina/Jujuy","America/Argentina/La_Rioja","America/Argentina/Mendoza","America/Argentina/Rio_Gallegos","America/Argentina/Salta","America/Argentina/San_Juan","America/Argentina/San_Luis","America/Argentina/Tucuman","America/Argentina/Ushuaia","America/Aruba","America/Asuncion","America/Atikokan","America/Bahia","America/Bahia_Banderas","America/Barbados","America/Belem","America/Belize","America/Blanc-Sablon","America/Boa_Vista","America/Bogota","America/Boise","America/Cambridge_Bay","America/Campo_Grande","America/Cancun","America/Caracas","America/Cayenne","America/Cayman","America/Chicago","America/Chihuahua","America/Coral_Harbour","America/Costa_Rica","America/Creston","America/Cuiaba","America/Curacao","America/Danmarkshavn","America/Dawson","America/Dawson_Creek","America/Denver","America/Detroit","America/Dominica","America/Edmonton","America/Eirunepe","America/El_Salvador","America/Ensenada","America/Fort_Nelson","America/Fortaleza","America/Glace_Bay","America/Goose_Bay","America/Grand_Turk","America/Grenada","America/Guadeloupe","America/Guatemala","America/Guayaquil","America/Guyana","America/Halifax","America/Havana","America/Hermosillo","America/Indiana/Indianapolis","America/Indiana/Knox","America/Indiana/Marengo","America/Indiana/Petersburg","America/Indiana/Tell_City","America/Indiana/Vevay","America/Indiana/Vincennes","America/Indiana/Winamac","America/Inuvik","America/Iqaluit","America/Jamaica","America/Juneau","America/Kentucky/Louisville","America/Kentucky/Monticello","America/La_Paz","America/Lima","America/Los_Angeles","America/Maceio","America/Managua","America/Manaus","America/Martinique","America/Matamoros","America/Mazatlan","America/Menominee","America/Merida","America/Metlakatla","America/Mexico_City","America/Miquelon","America/Moncton","America/Monterrey","America/Montevideo","America/Montreal","America/Montserrat","America/Nassau","America/New_York","America/Nipigon","America/Nome","America/Noronha","America/North_Dakota/Beulah","America/North_Dakota/Center","America/North_Dakota/New_Salem","America/Nuuk","America/Ojinaga","America/Panama","America/Pangnirtung","America/Paramaribo","America/Phoenix","America/Port-au-Prince","America/Port_of_Spain","America/Porto_Velho","America/Puerto_Rico","America/Punta_Arenas","America/Rainy_River","America/Rankin_Inlet","America/Recife","America/Regina","America/Resolute","America/Rio_Branco","America/Rosario","America/Santarem","America/Santiago","America/Santo_Domingo","America/Sao_Paulo","America/Scoresbysund","America/Sitka","America/St_Johns","America/St_Kitts","America/St_Lucia","America/St_Thomas","America/St_Vincent","America/Swift_Current","America/Tegucigalpa","America/Thule","America/Thunder_Bay","America/Tijuana","America/Toronto","America/Tortola","America/Vancouver","America/Whitehorse","America/Winnipeg","America/Yakutat","America/Yellowknife","Antarctica/Casey","Antarctica/Davis","Antarctica/DumontDUrville","Antarctica/Macquarie","Antarctica/Mawson","Antarctica/McMurdo","Antarctica/Palmer","Antarctica/Rothera","Antarctica/Syowa","Antarctica/Troll","Antarctica/Vostok","Asia/Aden","Asia/Almaty","Asia/Amman","Asia/Anadyr","Asia/Aqtau","Asia/Aqtobe","Asia/Ashgabat","Asia/Atyrau","Asia/Baghdad","Asia/Bahrain","Asia/Baku","Asia/Bangkok","Asia/Barnaul","Asia/Beirut","Asia/Bishkek","Asia/Brunei","Asia/Chita","Asia/Choibalsan","Asia/Chongqing","Asia/Colombo","Asia/Damascus","Asia/Dhaka","Asia/Dili","Asia/Dubai","Asia/Dushanbe","Asia/Famagusta","Asia/Gaza","Asia/Harbin","Asia/Hebron","Asia/Ho_Chi_Minh","Asia/Hong_Kong","Asia/Hovd","Asia/Irkutsk","Asia/Jakarta","Asia/Jayapura","Asia/Jerusalem","Asia/Kabul","Asia/Kamchatka","Asia/Karachi","Asia/Kashgar","Asia/Kathmandu","Asia/Khandyga","Asia/Kolkata","Asia/Krasnoyarsk","Asia/Kuala_Lumpur","Asia/Kuching","Asia/Kuwait","Asia/Macau","Asia/Magadan","Asia/Makassar","Asia/Manila","Asia/Muscat","Asia/Nicosia","Asia/Novokuznetsk","Asia/Novosibirsk","Asia/Omsk","Asia/Oral","Asia/Phnom_Penh","Asia/Pontianak","Asia/Pyongyang","Asia/Qatar","Asia/Qostanay","Asia/Qyzylorda","Asia/Riyadh","Asia/Sakhalin","Asia/Samarkand","Asia/Seoul","Asia/Shanghai","Asia/Singapore","Asia/Srednekolymsk","Asia/Taipei","Asia/Tashkent","Asia/Tbilisi","Asia/Tehran","Asia/Tel_Aviv","Asia/Thimphu","Asia/Tokyo","Asia/Tomsk","Asia/Ulaanbaatar","Asia/Urumqi","Asia/Ust-Nera","Asia/Vientiane","Asia/Vladivostok","Asia/Yakutsk","Asia/Yangon","Asia/Yekaterinburg","Asia/Yerevan","Atlantic/Azores","Atlantic/Bermuda","Atlantic/Canary","Atlantic/Cape_Verde","Atlantic/Faroe","Atlantic/Jan_Mayen","Atlantic/Madeira","Atlantic/Reykjavik","Atlantic/South_Georgia","Atlantic/St_Helena","Atlantic/Stanley","Australia/Adelaide","Australia/Brisbane","Australia/Broken_Hill","Australia/Currie","Australia/Darwin","Australia/Eucla","Australia/Hobart","Australia/Lindeman","Australia/Lord_Howe","Australia/Melbourne","Australia/Perth","Australia/Sydney","CET","CST6CDT","EET","EST","EST5EDT","Etc/GMT+1","Etc/GMT+10","Etc/GMT+11","Etc/GMT+12","Etc/GMT+2","Etc/GMT+3","Etc/GMT+4","Etc/GMT+5","Etc/GMT+6","Etc/GMT+7","Etc/GMT+8","Etc/GMT+9","Etc/GMT-1","Etc/GMT-10","Etc/GMT-11","Etc/GMT-12","Etc/GMT-13","Etc/GMT-14","Etc/GMT-2","Etc/GMT-3","Etc/GMT-4","Etc/GMT-5","Etc/GMT-6","Etc/GMT-7","Etc/GMT-8","Etc/GMT-9","Europe/Amsterdam","Europe/Andorra","Europe/Astrakhan","Europe/Athens","Europe/Belfast","Europe/Belgrade","Europe/Berlin","Europe/Brussels","Europe/Bucharest","Europe/Budapest","Europe/Chisinau","Europe/Copenhagen","Europe/Dublin","Europe/Gibraltar","Europe/Guernsey","Europe/Helsinki","Europe/Isle_of_Man","Europe/Istanbul","Europe/Jersey","Europe/Kaliningrad","Europe/Kirov","Europe/Kyiv","Europe/Lisbon","Europe/Ljubljana","Europe/London","Europe/Luxembourg","Europe/Madrid","Europe/Malta","Europe/Minsk","Europe/Monaco","Europe/Moscow","Europe/Oslo","Europe/Paris","Europe/Prague","Europe/Riga","Europe/Rome","Europe/Samara","Europe/Sarajevo","Europe/Saratov","Europe/Simferopol","Europe/Skopje","Europe/Sofia","Europe/Stockholm","Europe/Tallinn","Europe/Tirane","Europe/Tiraspol","Europe/Ulyanovsk","Europe/Uzhgorod","Europe/Vaduz","Europe/Vienna","Europe/Vilnius","Europe/Volgograd","Europe/Warsaw","Europe/Zagreb","Europe/Zaporozhye","Europe/Zurich","Factory","HST","Indian/Antananarivo","Indian/Chagos","Indian/Christmas","Indian/Cocos","Indian/Comoro","Indian/Kerguelen","Indian/Mahe","Indian/Maldives","Indian/Mauritius","Indian/Mayotte","Indian/Reunion","MET","MST","MST7MDT","PST8PDT","Pacific/Apia","Pacific/Auckland","Pacific/Bougainville","Pacific/Chatham","Pacific/Chuuk","Pacific/Easter","Pacific/Efate","Pacific/Enderbury","Pacific/Fakaofo","Pacific/Fiji","Pacific/Funafuti","Pacific/Galapagos","Pacific/Gambier","Pacific/Guadalcanal","Pacific/Guam","Pacific/Honolulu","Pacific/Johnston","Pacific/Kanton","Pacific/Kiritimati","Pacific/Kosrae","Pacific/Kwajalein","Pacific/Majuro","Pacific/Marquesas","Pacific/Midway","Pacific/Nauru","Pacific/Niue","Pacific/Norfolk","Pacific/Noumea","Pacific/Pago_Pago","Pacific/Palau","Pacific/Pitcairn","Pacific/Pohnpei","Pacific/Port_Moresby","Pacific/Rarotonga","Pacific/Saipan","Pacific/Tahiti","Pacific/Tarawa","Pacific/Tongatapu","Pacific/Wake","Pacific/Wallis","UTC","WET"],qg=Kg.reduce((e,t)=>(e[t]=t,e),{}),Zg=U.defaultZone.name,Ra=qg.UTC;var ol;(function(e){e.Date="date",e.Time="time",e.DateTime="datetime-local"})(ol||(ol={}));const Yg=["hour","minute","second","millisecond"],Jg=Dt({hour:14,minute:19,second:7,millisecond:877,timezone:Ra}),Xg=Dt({year:2023,month:6,day:5,timezone:Ra}),Qg=Dt(Ug(Xg,Jg));var M;(function(e){e.Years="years",e.Quarters="quarters",e.Months="months",e.Weeks="weeks",e.Days="days",e.Hours="hours",e.Minutes="minutes",e.Seconds="seconds",e.Milliseconds="milliseconds"})(M||(M={}));M.Milliseconds+"",M.Seconds+"",M.Minutes+"",M.Hours+"",M.Days+"",M.Weeks+"",M.Months+"",M.Quarters+"",M.Years+"";M.Milliseconds,M.Seconds,M.Minutes,M.Hours,M.Days,M.Weeks,M.Months,M.Quarters,M.Years;function jr(e,t){if(ew(e))return{[t]:1/0};if(tw(e))return{[t]:-1/0};const n=L.fromObject(e).as(t);return{[t]:n}}function ew(e){return Object.values(e).some(t=>t===1/0)}function tw(e){return Object.values(e).some(t=>t===-1/0)}M.Years+"",M.Quarters+"",M.Months+"",M.Weeks+"",M.Days+"",M.Hours+"",M.Minutes+"",M.Seconds+"",M.Milliseconds+"";var ll;(function(e){e.AdditiveUnits="additive-units",e.EquivalentUnits="equivalent-units"})(ll||(ll={}));function rw(e){if(!Lr.isValidIANAZone(e))throw new Error(`'${e}' is not a valid time zone`)}function nw(e){Da(e,Qg),rw(e.timezone),lf(e)}function iw(e){try{return nw(e),!0}catch{return!1}}const sw=["L-y","LLL-y","LLLL-y"];function aw(e,t){const r=S.fromISO(e,{zone:t});if(r.isValid)return r;let n;return sw.some(i=>{const s=S.fromFormat(e,i,{zone:t});return s.isValid?(n=s,!0):!1}),n}function ow(e,t){const r=cw(e,t);if(!r||!r.isValid)throw new Error(`Failed to parse date input '${e}'`);return Cg(r,t)}function lw(e){const t=S.fromJSDate(new Date(e));if(t.isValid)return t}function cw(e,t){if(iw(e)&&(e=lf(e).toMillis()),S.isDateTime(e))return e.setZone(t);if(T(e,"number"))return S.fromMillis(e,{zone:Ra}).setZone(t);if(T(e,"string")){const r=aw(e,t);if(r)return r}else if(e instanceof Date)return S.fromJSDate(e).setZone(t);return lw(e)}const uw={year:0,month:1,day:1,hour:0,minute:0,second:0,millisecond:0};Ap(uw,Yg);U.defaultLocale;M.Milliseconds+"",M.Seconds+"",M.Minutes+"",M.Hours+"",M.Days+"",M.Weeks+"",M.Months+"",M.Quarters+"",M.Years+"";class wf extends Tp{constructor(t){super(),Object.defineProperty(this,"value",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"equalityCheck",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.value=t.defaultValue,this.equalityCheck=t.equalityCheck||Sp}setValue(t){return super.setValue(t)}listen(t,r){return super.listen(t,r)}removeListener(t){return super.removeListener(t)}}const dw=Dt({listen(e,t){return()=>!1},destroy(){},removeListener(e){return!1},value:jg()});function ss(e){return Wg(e,dw,{allowExtraKeys:!0})}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Wn=globalThis,_a=Wn.ShadowRoot&&(Wn.ShadyCSS===void 0||Wn.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Va=Symbol(),cl=new WeakMap;let yf=class{constructor(t,r,n){if(this._$cssResult$=!0,n!==Va)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=r}get styleSheet(){let t=this.o;const r=this.t;if(_a&&t===void 0){const n=r!==void 0&&r.length===1;n&&(t=cl.get(r)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),n&&cl.set(r,t))}return t}toString(){return this.cssText}};const ue=e=>new yf(typeof e=="string"?e:e+"",void 0,Va),Gn=(e,...t)=>{const r=e.length===1?e[0]:t.reduce((n,i,s)=>n+(a=>{if(a._$cssResult$===!0)return a.cssText;if(typeof a=="number")return a;throw Error("Value passed to 'css' function must be a 'css' function result: "+a+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+e[s+1],e[0]);return new yf(r,e,Va)},fw=(e,t)=>{if(_a)e.adoptedStyleSheets=t.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet);else for(const r of t){const n=document.createElement("style"),i=Wn.litNonce;i!==void 0&&n.setAttribute("nonce",i),n.textContent=r.cssText,e.appendChild(n)}},ul=_a?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let r="";for(const n of t.cssRules)r+=n.cssText;return ue(r)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:hw,defineProperty:mw,getOwnPropertyDescriptor:pw,getOwnPropertyNames:gw,getOwnPropertySymbols:ww,getPrototypeOf:yw}=Object,ot=globalThis,dl=ot.trustedTypes,bw=dl?dl.emptyScript:"",as=ot.reactiveElementPolyfillSupport,_r=(e,t)=>e,si={toAttribute(e,t){switch(t){case Boolean:e=e?bw:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=e!==null;break;case Number:r=e===null?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch{r=null}}return r}},Ha=(e,t)=>!hw(e,t),fl={attribute:!0,type:String,converter:si,reflect:!1,hasChanged:Ha};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),ot.litPropertyMetadata??(ot.litPropertyMetadata=new WeakMap);let Wt=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,r=fl){if(r.state&&(r.attribute=!1),this._$Ei(),this.elementProperties.set(t,r),!r.noAccessor){const n=Symbol(),i=this.getPropertyDescriptor(t,n,r);i!==void 0&&mw(this.prototype,t,i)}}static getPropertyDescriptor(t,r,n){const{get:i,set:s}=pw(this.prototype,t)??{get(){return this[r]},set(a){this[r]=a}};return{get(){return i==null?void 0:i.call(this)},set(a){const o=i==null?void 0:i.call(this);s.call(this,a),this.requestUpdate(t,o,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??fl}static _$Ei(){if(this.hasOwnProperty(_r("elementProperties")))return;const t=yw(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(_r("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(_r("properties"))){const r=this.properties,n=[...gw(r),...ww(r)];for(const i of n)this.createProperty(i,r[i])}const t=this[Symbol.metadata];if(t!==null){const r=litPropertyMetadata.get(t);if(r!==void 0)for(const[n,i]of r)this.elementProperties.set(n,i)}this._$Eh=new Map;for(const[r,n]of this.elementProperties){const i=this._$Eu(r,n);i!==void 0&&this._$Eh.set(i,r)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const r=[];if(Array.isArray(t)){const n=new Set(t.flat(1/0).reverse());for(const i of n)r.unshift(ul(i))}else t!==void 0&&r.push(ul(t));return r}static _$Eu(t,r){const n=r.attribute;return n===!1?void 0:typeof n=="string"?n:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(r=>this.enableUpdating=r),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(r=>r(this))}addController(t){var r;(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((r=t.hostConnected)==null||r.call(t))}removeController(t){var r;(r=this._$EO)==null||r.delete(t)}_$E_(){const t=new Map,r=this.constructor.elementProperties;for(const n of r.keys())this.hasOwnProperty(n)&&(t.set(n,this[n]),delete this[n]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return fw(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(r=>{var n;return(n=r.hostConnected)==null?void 0:n.call(r)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(r=>{var n;return(n=r.hostDisconnected)==null?void 0:n.call(r)})}attributeChangedCallback(t,r,n){this._$AK(t,n)}_$EC(t,r){var s;const n=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,n);if(i!==void 0&&n.reflect===!0){const a=(((s=n.converter)==null?void 0:s.toAttribute)!==void 0?n.converter:si).toAttribute(r,n.type);this._$Em=t,a==null?this.removeAttribute(i):this.setAttribute(i,a),this._$Em=null}}_$AK(t,r){var s;const n=this.constructor,i=n._$Eh.get(t);if(i!==void 0&&this._$Em!==i){const a=n.getPropertyOptions(i),o=typeof a.converter=="function"?{fromAttribute:a.converter}:((s=a.converter)==null?void 0:s.fromAttribute)!==void 0?a.converter:si;this._$Em=i,this[i]=o.fromAttribute(r,a.type),this._$Em=null}}requestUpdate(t,r,n){if(t!==void 0){if(n??(n=this.constructor.getPropertyOptions(t)),!(n.hasChanged??Ha)(this[t],r))return;this.P(t,r,n)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(t,r,n){this._$AL.has(t)||this._$AL.set(t,r),n.reflect===!0&&this._$Em!==t&&(this._$Ej??(this._$Ej=new Set)).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(r){Promise.reject(r)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var n;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[s,a]of this._$Ep)this[s]=a;this._$Ep=void 0}const i=this.constructor.elementProperties;if(i.size>0)for(const[s,a]of i)a.wrapped!==!0||this._$AL.has(s)||this[s]===void 0||this.P(s,this[s],a)}let t=!1;const r=this._$AL;try{t=this.shouldUpdate(r),t?(this.willUpdate(r),(n=this._$EO)==null||n.forEach(i=>{var s;return(s=i.hostUpdate)==null?void 0:s.call(i)}),this.update(r)):this._$EU()}catch(i){throw t=!1,this._$EU(),i}t&&this._$AE(r)}willUpdate(t){}_$AE(t){var r;(r=this._$EO)==null||r.forEach(n=>{var i;return(i=n.hostUpdated)==null?void 0:i.call(n)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&(this._$Ej=this._$Ej.forEach(r=>this._$EC(r,this[r]))),this._$EU()}updated(t){}firstUpdated(t){}};Wt.elementStyles=[],Wt.shadowRootOptions={mode:"open"},Wt[_r("elementProperties")]=new Map,Wt[_r("finalized")]=new Map,as==null||as({ReactiveElement:Wt}),(ot.reactiveElementVersions??(ot.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Vr=globalThis,ai=Vr.trustedTypes,hl=ai?ai.createPolicy("lit-html",{createHTML:e=>e}):void 0,Ba="$lit$",je=`lit$${Math.random().toFixed(9).slice(2)}$`,Fa="?"+je,vw=`<${Fa}>`,Pt=document,zr=()=>Pt.createComment(""),Wr=e=>e===null||typeof e!="object"&&typeof e!="function",bf=Array.isArray,vf=e=>bf(e)||typeof(e==null?void 0:e[Symbol.iterator])=="function",os=`[ 	
\f\r]`,kr=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ml=/-->/g,pl=/>/g,yt=RegExp(`>|${os}(?:([^\\s"'>=/]+)(${os}*=${os}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),gl=/'/g,wl=/"/g,$f=/^(?:script|style|textarea|title)$/i,$w=e=>(t,...r)=>({_$litType$:e,strings:t,values:r}),Ew=$w(1),de=Symbol.for("lit-noChange"),N=Symbol.for("lit-nothing"),yl=new WeakMap,kt=Pt.createTreeWalker(Pt,129);function Ef(e,t){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return hl!==void 0?hl.createHTML(t):t}const Tf=(e,t)=>{const r=e.length-1,n=[];let i,s=t===2?"<svg>":"",a=kr;for(let o=0;o<r;o++){const l=e[o];let c,d,u=-1,f=0;for(;f<l.length&&(a.lastIndex=f,d=a.exec(l),d!==null);)f=a.lastIndex,a===kr?d[1]==="!--"?a=ml:d[1]!==void 0?a=pl:d[2]!==void 0?($f.test(d[2])&&(i=RegExp("</"+d[2],"g")),a=yt):d[3]!==void 0&&(a=yt):a===yt?d[0]===">"?(a=i??kr,u=-1):d[1]===void 0?u=-2:(u=a.lastIndex-d[2].length,c=d[1],a=d[3]===void 0?yt:d[3]==='"'?wl:gl):a===wl||a===gl?a=yt:a===ml||a===pl?a=kr:(a=yt,i=void 0);const h=a===yt&&e[o+1].startsWith("/>")?" ":"";s+=a===kr?l+vw:u>=0?(n.push(c),l.slice(0,u)+Ba+l.slice(u)+je+h):l+je+(u===-2?o:h)}return[Ef(e,s+(e[r]||"<?>")+(t===2?"</svg>":"")),n]};class Gr{constructor({strings:t,_$litType$:r},n){let i;this.parts=[];let s=0,a=0;const o=t.length-1,l=this.parts,[c,d]=Tf(t,r);if(this.el=Gr.createElement(c,n),kt.currentNode=this.el.content,r===2){const u=this.el.content.firstChild;u.replaceWith(...u.childNodes)}for(;(i=kt.nextNode())!==null&&l.length<o;){if(i.nodeType===1){if(i.hasAttributes())for(const u of i.getAttributeNames())if(u.endsWith(Ba)){const f=d[a++],h=i.getAttribute(u).split(je),m=/([.?@])?(.*)/.exec(f);l.push({type:1,index:s,name:m[2],strings:h,ctor:m[1]==="."?kf:m[1]==="?"?xf:m[1]==="@"?Mf:un}),i.removeAttribute(u)}else u.startsWith(je)&&(l.push({type:6,index:s}),i.removeAttribute(u));if($f.test(i.tagName)){const u=i.textContent.split(je),f=u.length-1;if(f>0){i.textContent=ai?ai.emptyScript:"";for(let h=0;h<f;h++)i.append(u[h],zr()),kt.nextNode(),l.push({type:2,index:++s});i.append(u[f],zr())}}}else if(i.nodeType===8)if(i.data===Fa)l.push({type:2,index:s});else{let u=-1;for(;(u=i.data.indexOf(je,u+1))!==-1;)l.push({type:7,index:s}),u+=je.length-1}s++}}static createElement(t,r){const n=Pt.createElement("template");return n.innerHTML=t,n}}function Lt(e,t,r=e,n){var a,o;if(t===de)return t;let i=n!==void 0?(a=r._$Co)==null?void 0:a[n]:r._$Cl;const s=Wr(t)?void 0:t._$litDirective$;return(i==null?void 0:i.constructor)!==s&&((o=i==null?void 0:i._$AO)==null||o.call(i,!1),s===void 0?i=void 0:(i=new s(e),i._$AT(e,r,n)),n!==void 0?(r._$Co??(r._$Co=[]))[n]=i:r._$Cl=i),i!==void 0&&(t=Lt(e,i._$AS(e,t.values),i,n)),t}class Sf{constructor(t,r){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:r},parts:n}=this._$AD,i=((t==null?void 0:t.creationScope)??Pt).importNode(r,!0);kt.currentNode=i;let s=kt.nextNode(),a=0,o=0,l=n[0];for(;l!==void 0;){if(a===l.index){let c;l.type===2?c=new br(s,s.nextSibling,this,t):l.type===1?c=new l.ctor(s,l.name,l.strings,this,t):l.type===6&&(c=new Af(s,this,t)),this._$AV.push(c),l=n[++o]}a!==(l==null?void 0:l.index)&&(s=kt.nextNode(),a++)}return kt.currentNode=Pt,i}p(t){let r=0;for(const n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(t,n,r),r+=n.strings.length-2):n._$AI(t[r])),r++}}class br{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,r,n,i){this.type=2,this._$AH=N,this._$AN=void 0,this._$AA=t,this._$AB=r,this._$AM=n,this.options=i,this._$Cv=(i==null?void 0:i.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=r.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,r=this){t=Lt(this,t,r),Wr(t)?t===N||t==null||t===""?(this._$AH!==N&&this._$AR(),this._$AH=N):t!==this._$AH&&t!==de&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):vf(t)?this.k(t):this._(t)}S(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.S(t))}_(t){this._$AH!==N&&Wr(this._$AH)?this._$AA.nextSibling.data=t:this.T(Pt.createTextNode(t)),this._$AH=t}$(t){var s;const{values:r,_$litType$:n}=t,i=typeof n=="number"?this._$AC(t):(n.el===void 0&&(n.el=Gr.createElement(Ef(n.h,n.h[0]),this.options)),n);if(((s=this._$AH)==null?void 0:s._$AD)===i)this._$AH.p(r);else{const a=new Sf(i,this),o=a.u(this.options);a.p(r),this.T(o),this._$AH=a}}_$AC(t){let r=yl.get(t.strings);return r===void 0&&yl.set(t.strings,r=new Gr(t)),r}k(t){bf(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let n,i=0;for(const s of t)i===r.length?r.push(n=new br(this.S(zr()),this.S(zr()),this,this.options)):n=r[i],n._$AI(s),i++;i<r.length&&(this._$AR(n&&n._$AB.nextSibling,i),r.length=i)}_$AR(t=this._$AA.nextSibling,r){var n;for((n=this._$AP)==null?void 0:n.call(this,!1,!0,r);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i}}setConnected(t){var r;this._$AM===void 0&&(this._$Cv=t,(r=this._$AP)==null||r.call(this,t))}}class un{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,r,n,i,s){this.type=1,this._$AH=N,this._$AN=void 0,this.element=t,this.name=r,this._$AM=i,this.options=s,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=N}_$AI(t,r=this,n,i){const s=this.strings;let a=!1;if(s===void 0)t=Lt(this,t,r,0),a=!Wr(t)||t!==this._$AH&&t!==de,a&&(this._$AH=t);else{const o=t;let l,c;for(t=s[0],l=0;l<s.length-1;l++)c=Lt(this,o[n+l],r,l),c===de&&(c=this._$AH[l]),a||(a=!Wr(c)||c!==this._$AH[l]),c===N?t=N:t!==N&&(t+=(c??"")+s[l+1]),this._$AH[l]=c}a&&!i&&this.j(t)}j(t){t===N?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class kf extends un{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===N?void 0:t}}class xf extends un{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==N)}}class Mf extends un{constructor(t,r,n,i,s){super(t,r,n,i,s),this.type=5}_$AI(t,r=this){if((t=Lt(this,t,r,0)??N)===de)return;const n=this._$AH,i=t===N&&n!==N||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,s=t!==N&&(n===N||i);i&&this.element.removeEventListener(this.name,this,n),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var r;typeof this._$AH=="function"?this._$AH.call(((r=this.options)==null?void 0:r.host)??this.element,t):this._$AH.handleEvent(t)}}class Af{constructor(t,r,n){this.element=t,this.type=6,this._$AN=void 0,this._$AM=r,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(t){Lt(this,t)}}const Tw={P:Ba,A:je,C:Fa,M:1,L:Tf,R:Sf,D:vf,V:Lt,I:br,H:un,N:xf,U:Mf,B:kf,F:Af},ls=Vr.litHtmlPolyfillSupport;ls==null||ls(Gr,br),(Vr.litHtmlVersions??(Vr.litHtmlVersions=[])).push("3.1.4");const Sw=(e,t,r)=>{const n=(r==null?void 0:r.renderBefore)??t;let i=n._$litPart$;if(i===void 0){const s=(r==null?void 0:r.renderBefore)??null;n._$litPart$=i=new br(t.insertBefore(zr(),s),s,void 0,r??{})}return i._$AI(e),i};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Hr=class extends Wt{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var r;const t=super.createRenderRoot();return(r=this.renderOptions).renderBefore??(r.renderBefore=t.firstChild),t}update(t){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Sw(r,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return de}};var Gu;Hr._$litElement$=!0,Hr.finalized=!0,(Gu=globalThis.litElementHydrateSupport)==null||Gu.call(globalThis,{LitElement:Hr});const cs=globalThis.litElementPolyfillSupport;cs==null||cs({LitElement:Hr});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.6");/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{I:kw}=Tw,bl=()=>document.createComment(""),xr=(e,t,r)=>{var s;const n=e._$AA.parentNode,i=t===void 0?e._$AB:t._$AA;if(r===void 0){const a=n.insertBefore(bl(),i),o=n.insertBefore(bl(),i);r=new kw(a,o,e,e.options)}else{const a=r._$AB.nextSibling,o=r._$AM,l=o!==e;if(l){let c;(s=r._$AQ)==null||s.call(r,e),r._$AM=e,r._$AP!==void 0&&(c=e._$AU)!==o._$AU&&r._$AP(c)}if(a!==i||l){let c=r._$AA;for(;c!==a;){const d=c.nextSibling;n.insertBefore(c,i),c=d}}}return r},bt=(e,t,r=e)=>(e._$AI(t,r),e),xw={},Mw=(e,t=xw)=>e._$AH=t,Aw=e=>e._$AH,us=e=>{var n;(n=e._$AP)==null||n.call(e,!1,!0);let t=e._$AA;const r=e._$AB.nextSibling;for(;t!==r;){const i=t.nextSibling;t.remove(),t=i}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ri={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Xe=e=>(...t)=>({_$litDirective$:e,values:t});class Ve{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,r,n){this._$Ct=t,this._$AM=r,this._$Ci=n}_$AS(t,r){return this.update(t,r)}update(t,r){return this.render(...r)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Cw={attribute:!0,type:String,converter:si,reflect:!1,hasChanged:Ha},Pw=(e=Cw,t,r)=>{const{kind:n,metadata:i}=r;let s=globalThis.litPropertyMetadata.get(i);if(s===void 0&&globalThis.litPropertyMetadata.set(i,s=new Map),s.set(r.name,e),n==="accessor"){const{name:a}=r;return{set(o){const l=t.get.call(this);t.set.call(this,o),this.requestUpdate(a,l,e)},init(o){return o!==void 0&&this.P(a,void 0,e),o}}}if(n==="setter"){const{name:a}=r;return function(o){const l=this[a];t.call(this,o),this.requestUpdate(a,l,e)}}throw Error("Unsupported decorator location: "+n)};function Lw(e){return(t,r)=>typeof r=="object"?Pw(e,t,r):((n,i,s)=>{const a=i.hasOwnProperty(s);return i.constructor.createProperty(s,a?{...n,wrapped:!0}:n),a?Object.getOwnPropertyDescriptor(i,s):void 0})(e,t,r)}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const We=Xe(class extends Ve{constructor(e){var t;if(super(e),e.type!==Ri.ATTRIBUTE||e.name!=="class"||((t=e.strings)==null?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){var n,i;if(this.st===void 0){this.st=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(s=>s!=="")));for(const s in t)t[s]&&!((n=this.nt)!=null&&n.has(s))&&this.st.add(s);return this.render(t)}const r=e.element.classList;for(const s of this.st)s in t||(r.remove(s),this.st.delete(s));for(const s in t){const a=!!t[s];a===this.st.has(s)||(i=this.nt)!=null&&i.has(s)||(a?(r.add(s),this.st.add(s)):(r.remove(s),this.st.delete(s)))}return de}});/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Cf=e=>e??N;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Us extends Ve{constructor(t){if(super(t),this.it=N,t.type!==Ri.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===N||t==null)return this._t=void 0,this.it=t;if(t===de)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const r=[t];return r.raw=r,this._t={_$litType$:this.constructor.resultType,strings:r,values:[]}}}Us.directiveName="unsafeHTML",Us.resultType=1;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class vl extends Us{}vl.directiveName="unsafeSVG",vl.resultType=2;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Ow(e,t,r){return e?t(e):r==null?void 0:r(e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const $l=(e,t,r)=>{const n=new Map;for(let i=t;i<=r;i++)n.set(e[i],i);return n},Nw=Xe(class extends Ve{constructor(e){if(super(e),e.type!==Ri.CHILD)throw Error("repeat() can only be used in text expressions")}dt(e,t,r){let n;r===void 0?r=t:t!==void 0&&(n=t);const i=[],s=[];let a=0;for(const o of e)i[a]=n?n(o,a):a,s[a]=r(o,a),a++;return{values:s,keys:i}}render(e,t,r){return this.dt(e,t,r).values}update(e,[t,r,n]){const i=Aw(e),{values:s,keys:a}=this.dt(t,r,n);if(!Array.isArray(i))return this.ut=a,s;const o=this.ut??(this.ut=[]),l=[];let c,d,u=0,f=i.length-1,h=0,m=s.length-1;for(;u<=f&&h<=m;)if(i[u]===null)u++;else if(i[f]===null)f--;else if(o[u]===a[h])l[h]=bt(i[u],s[h]),u++,h++;else if(o[f]===a[m])l[m]=bt(i[f],s[m]),f--,m--;else if(o[u]===a[m])l[m]=bt(i[u],s[m]),xr(e,l[m+1],i[u]),u++,m--;else if(o[f]===a[h])l[h]=bt(i[f],s[h]),xr(e,i[u],i[f]),f--,h++;else if(c===void 0&&(c=$l(a,h,m),d=$l(o,u,f)),c.has(o[u]))if(c.has(o[f])){const g=d.get(a[h]),y=g!==void 0?i[g]:null;if(y===null){const b=xr(e,i[u]);bt(b,s[h]),l[h]=b}else l[h]=bt(y,s[h]),xr(e,i[u],y),i[g]=null;h++}else us(i[f]),f--;else us(i[u]),u++;for(;h<=m;){const g=xr(e,l[m+1]);bt(g,s[h]),l[h++]=g}for(;u<=f;){const g=i[u++];g!==null&&us(g)}return this.ut=a,Mw(e,l),de}}),Iw=Nw;class Pf extends Hr{}function El(e){let t;try{t=Reflect.ownKeys(e)}catch{}return t??[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}var sr;(function(e){e.Upper="upper",e.Lower="lower"})(sr||(sr={}));function Dw(e){return e.toLowerCase()!==e.toUpperCase()}function Tl(e,t,r){if(!e&&(r!=null&&r.blockNoCaseCharacters))return!1;for(let n=0;n<e.length;n++){const i=e[n]||"";if(!Dw(i)){if(r!=null&&r.blockNoCaseCharacters)return!1;continue}if(t===sr.Upper&&i!==i.toUpperCase())return!1;if(t===sr.Lower&&i!==i.toLowerCase())return!1}return!0}function Rw(e){return e.split("").reduce((r,n,i,s)=>{const a=i>0&&s[i-1]||"",o=i<s.length-1&&s[i+1]||"",l=Tl(a,sr.Lower,{blockNoCaseCharacters:!0})||Tl(o,sr.Lower,{blockNoCaseCharacters:!0});return n===n.toLowerCase()||i===0||!l?r+=n:r+=`-${n.toLowerCase()}`,r},"").toLowerCase()}var Sl;(function(e){e.FirstThenWait="first-then-wait",e.AfterWait="after-wait"})(Sl||(Sl={}));function _w(e){return!!e&&typeof e=="object"}function Vw(e,t){let r=!1;const n=El(e).reduce((i,s)=>{const a=t(s,e[s],e);return a instanceof Promise&&(r=!0),{...i,[s]:a}},{});return r?new Promise(async(i,s)=>{try{await Promise.all(El(n).map(async a=>{const o=await n[a];n[a]=o})),i(n)}catch(a){s(a)}}):n}function Hw(){return globalThis.crypto?globalThis.crypto:require("crypto").webcrypto}Hw();function mt(e){if(_w(e))return Vw(e,(r,n)=>{if(!T(r,"string"))throw new Error(`Invalid CSS var name '${String(r)}' given. CSS var names must be strings.`);if(Rw(r).toLowerCase()!==r)throw new Error(`Invalid CSS var name '${r}' given. CSS var names must be in lower kebab case.`);const s=n,a=r.startsWith("--")?ue(r):r.startsWith("-")?Gn`-${ue(r)}`:Gn`--${ue(r)}`;return{name:a,value:Gn`var(${a}, ${ue(s)})`,default:String(s)}});throw new Error(`Invalid setup input for '${mt.name}' function.`)}function Bw({onElement:e,toValue:t,forCssVar:r}){e.style.setProperty(String(r.name),String(t))}function Fw(e,t,r){const n=!t.length&&!r.length,i=e.length?!1:!t.filter(o=>!!o.index).length;if(n||i)return[...e];const s=e.map(o=>[o]);return s.length||(s[0]=[]),r.forEach(o=>{o>=0&&o<e.length&&(s[o]=[])}),t.forEach(o=>{const l=s[o.index];l&&l.splice(0,0,...o.values)}),s.flat()}function Kn(e){return ha(e,"_elementVirIsMinimalDefinitionWithInputs")&&!!e._elementVirIsMinimalDefinitionWithInputs}function Ua(e){return ha(e,"tagName")&&!!e.tagName&&typeof e.tagName=="string"}function Lf(e){return Im(e,t=>{if(Kn(t))return t.definition;if(Ua(t))return t.tagInterpolationKey||t},Yu)}const Of=new WeakMap;function Uw(e,t){var i;const r=Lf(t);return(i=Nf(Of,[e,...r]).value)==null?void 0:i.template}function jw(e,t,r){const n=Lf(t);return Df(Of,[e,...n],r)}function Nf(e,t,r=0){const{currentTemplateAndNested:n,reason:i}=If(e,t,r);return n?r===t.length-1?{value:n,reason:"reached end of keys array"}:n.nested?Nf(n.nested,t,r+1):{value:void 0,reason:`map at key index ${r} did not have nested maps`}:{value:n,reason:i}}function If(e,t,r){const n=t[r];if(n==null)return{currentKey:void 0,currentTemplateAndNested:void 0,reason:`key at index ${r} not found`};if(!e.has(n))return{currentKey:n,currentTemplateAndNested:void 0,reason:`key at index ${r} was not in the map`};const i=e.get(n);return i==null?{currentKey:n,currentTemplateAndNested:void 0,reason:`value at key at index ${r} was undefined`}:{currentKey:n,currentTemplateAndNested:i,reason:"key and value exists"}}function Df(e,t,r,n=0){const{currentTemplateAndNested:i,currentKey:s,reason:a}=If(e,t,n);if(!s)return{result:!1,reason:a};const o=i??{nested:void 0,template:void 0};if(i||e.set(s,o),n===t.length-1)return o.template=r,{result:!0,reason:"set value at end of keys array"};const l=o.nested??new WeakMap;return o.nested||(o.nested=l),Df(l,t,r,n+1)}const zw=new WeakMap;function Rf(e,t,r){const n=Uw(e,t),i=n??r();if(!n){const o=jw(e,t,i);if(o.result)zw.set(e,i);else throw new Error(`Failed to set template transform: ${o.reason}`)}const s=i.valuesTransform(t),a=Fw(t,s.valueInsertions,s.valueIndexDeletions);return{strings:i.templateStrings,values:a}}function _f(e,t,r,n){const i=[],s=[],a=[],o=[];return e.forEach((c,d)=>{const u=i.length-1,f=i[u],h=d-1,m=t[h];n&&n(c);let g,y=[];if(typeof f=="string"&&(g=r(f,c,m),g)){i[u]=f+g.replacement,a.push(h);const E=g.getExtraValues;y=E?E(m):[],y.length&&E?(i[u]+=" ",y.forEach((C,O)=>{O&&i.push(" ")}),o.push(C=>{const O=C[h],Y=E(O);return{index:h,values:Y}}),i.push(c)):i[u]+=c}g||i.push(c);const b=e.raw[d];g?(s[u]=s[u]+g.replacement+b,y.length&&y.forEach(()=>{s.push("")})):s.push(b)}),{templateStrings:Object.assign([],i,{raw:s}),valuesTransform(c){const d=o.map(u=>u(c)).flat();return{valueIndexDeletions:a,valueInsertions:d}}}}function Ww(...[e,t,r]){if(Ua(r))return{replacement:r.tagName,getExtraValues:void 0}}function Gw(e,t){return _f(e,t,Ww)}function $(e,...t){const r=Rf(e,t,()=>Gw(e,t));return Gn(r.strings,...r.values)}const Kw={ignoreUnsetInputs:!0,allowPolymorphicState:!1};function Vf(e){const t=e.getRootNode();if(!(t instanceof ShadowRoot))return!1;const r=t.host;return r instanceof Pf?!0:Vf(r)}function Hf(e,t){const r=e.instanceState;qe(t).forEach(n=>{if(r&&n in r)throw new Error(`Cannot set input '${n}' on '${e.tagName}'. '${e.tagName}' already has a state property with the same name.`);"instanceInputs"in e?e.instanceInputs[n]=t[n]:e[n]=t[n]}),"instanceInputs"in e&&qe(e.instanceInputs).forEach(n=>{n in t||(e.instanceInputs[n]=void 0)}),qw(e)}function qw(e){e._haveInputsBeenSet||(e._haveInputsBeenSet=!0)}function kl(e,t){const r=[e,"-"].join("");Object.keys(t).forEach(n=>{if(!n.startsWith(r))throw new Error(`Invalid CSS property name '${n}' in '${e}': CSS property names must begin with the element's tag name.`)})}class Zw extends CustomEvent{get type(){return this._type}constructor(t,r){super(typeof t=="string"?t:t.type,{detail:r,bubbles:!0,composed:!0}),Object.defineProperty(this,"_type",{enumerable:!0,configurable:!0,writable:!0,value:""})}}function ja(){return e=>{var t;return t=class extends Zw{constructor(r){super(e,r),Object.defineProperty(this,"_type",{enumerable:!0,configurable:!0,writable:!0,value:e})}},Object.defineProperty(t,"type",{enumerable:!0,configurable:!0,writable:!0,value:e}),t}}function ie(){return ja()}function Yw(e,t){return t?Object.keys(t).filter(r=>{if(typeof r!="string")throw new Error(`Expected event key of type string but got type "${typeof r}" for key ${String(r)}`);if(r==="")throw new Error("Got empty string for events key.");return!0}).reduce((r,n)=>{const i=ja()([e,n].join("-"));return r[n]=i,r},{}):{}}function Jw(e){return e?Ju(e,t=>t):{}}const za=Symbol("element-vir-state-setup");function Xw(e){return Fr(e)?za in e:!1}function Bf(e,t){t in e||Lw()(e,t)}function Qw(e,t,r){if(typeof e!="string"&&typeof e!="number"&&typeof e!="symbol")throw new Error(`Property name must be a string, got type '${typeof e}' from: '${String(e)}' for '${r.toLowerCase()}'`);if(!(e in t))throw new Error(`Property '${String(e)}' does not exist on '${r.toLowerCase()}'.`)}function xl(e,t){const r=e;function n(a){t?Qw(a,e,e.tagName):Bf(e,a)}function i(a,o){return n(o),r[o]}return new Proxy({},{get:i,set(a,o,l){const c=Xw(l)?l[za]():l;n(o);const d=r[o];function u(m){a[o]=m,r[o]=m}const f=e.observablePropertyListenerMap[o];if(d!==c&&ss(d)&&f&&d.removeListener(f),ss(c))if(f)c.listen(!1,f);else{let m=function(){e.requestUpdate()};var h=m;e.observablePropertyListenerMap[o]=m,c.listen(!1,m)}else ss(d)&&(e.observablePropertyListenerMap[o]=void 0);return u(c),!0},ownKeys(a){return Reflect.ownKeys(a)},getOwnPropertyDescriptor(a,o){if(o in a)return{get value(){return i(a,o)},configurable:!0,enumerable:!0}},has(a,o){return Reflect.has(a,o)}})}function ey({hostClassNames:e,cssVars:t}){return{hostClasses:Ju(e,(r,n)=>({name:ue(n),selector:ue(`:host(.${n})`)})),cssVars:t}}function ty({host:e,hostClassesInit:t,hostClassNames:r,state:n,inputs:i}){t&&qe(t).forEach(s=>{const a=t[s],o=r[s];typeof a=="function"&&(a({state:n,inputs:i})?e.classList.add(o):e.classList.remove(o))})}function ry({element:e,eventsMap:t,cssVars:r,slotNamesMap:n}){function i(a){qe(a).forEach(o=>{const l=a[o];e.instanceState[o]=l})}return{cssVars:r,slotNames:n,dispatch:a=>e.dispatchEvent(a),events:t,host:e,inputs:e.instanceInputs,state:e.instanceState,updateState:i}}function ny(e){return e?e.reduce((r,n)=>(r[n]=n,r),{}):{}}var iy=globalThis&&globalThis.__setFunctionName||function(e,t,r){return typeof t=="symbol"&&(t=t.description?"[".concat(t.description,"]"):""),Object.defineProperty(e,"name",{configurable:!0,value:r?"".concat(r," ",t):t})};function dn(e){var t;const r=e;if(!T(r,"object"))throw new Error("Cannot define element with non-object init: ${init}");if(!T(r.tagName,"string"))throw new Error("Missing valid tagName (expected a string).");if(!r.renderCallback||typeof r.renderCallback=="string")throw new Error(`Failed to define element '${r.tagName}': renderCallback is not a function`);const n={...Kw,...r.options},i=Yw(r.tagName,r.events),s=Jw(r.hostClasses);r.hostClasses&&kl(r.tagName,r.hostClasses),r.cssVars&&kl(r.tagName,r.cssVars);const a=r.cssVars?mt(r.cssVars):{},o=ny(r.slotNames),l=typeof r.styles=="function"?r.styles(ey({hostClassNames:s,cssVars:a})):r.styles||$``,c=r.renderCallback;function d(...[f]){return{_elementVirIsMinimalDefinitionWithInputs:!0,definition:u,inputs:f}}const u=(t=class extends Pf{createRenderParams(){return ry({element:this,eventsMap:i,cssVars:a,slotNamesMap:o})}get instanceType(){throw new Error(`"instanceType" was called on ${r.tagName} as a value but it is only for types.`)}static get inputsType(){throw new Error(`"inputsType" was called on ${r.tagName} as a value but it is only for types.`)}static get stateType(){throw new Error(`"stateType" was called on ${r.tagName} as a value but it is only for types.`)}render(){this._internalRenderCount++;try{Vf(this)&&!this._haveInputsBeenSet&&!n.ignoreUnsetInputs&&console.warn(this,`${r.tagName} got rendered before its input object was set. This was most likely caused by forgetting to use '.assign()' on its opening tag. If no inputs are intended, use '${dn.name}' to define ${r.tagName}.`),this._hasRendered=!0;const f=this.createRenderParams();if(!this._initCalled&&r.initCallback&&(this._initCalled=!0,r.initCallback(f)instanceof Promise))throw new Error("initCallback cannot be asynchronous");const h=c(f);if(h instanceof Promise)throw new Error("renderCallback cannot be asynchronous");return ty({host:f.host,hostClassesInit:r.hostClasses,hostClassNames:s,state:f.state,inputs:f.inputs}),this._lastRenderedProps={inputs:{...f.inputs},state:{...f.state}},h}catch(f){const h=Bm(f,`Failed to render ${r.tagName}`);return console.error(h),this._lastRenderError=h,ma(h)}}connectedCallback(){if(super.connectedCallback(),this._hasRendered&&!this._initCalled&&r.initCallback){this._initCalled=!0;const f=this.createRenderParams();if(r.initCallback(f)instanceof Promise)throw new Error(`initCallback in '${r.tagName}' cannot be asynchronous`)}}destroy(){Object.values(this.instanceState).forEach(f=>{Xu(f,"destroy")&&T(f.destroy,"function")&&f.destroy()})}disconnectedCallback(){if(super.disconnectedCallback(),r.cleanupCallback){const f=this.createRenderParams();if(r.cleanupCallback(f)instanceof Promise)throw new Error(`cleanupCallback in '${r.tagName}' cannot be asynchronous`)}this.destroy(),this._initCalled=!1}assignInputs(f){Hf(this,f)}constructor(){super(),Object.defineProperty(this,"_lastRenderError",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"_internalRenderCount",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"_initCalled",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"_hasRendered",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"_lastRenderedProps",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"_haveInputsBeenSet",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"definition",{enumerable:!0,configurable:!0,writable:!0,value:{}}),Object.defineProperty(this,"observablePropertyListenerMap",{enumerable:!0,configurable:!0,writable:!0,value:{}}),Object.defineProperty(this,"instanceInputs",{enumerable:!0,configurable:!0,writable:!0,value:xl(this,!1)}),Object.defineProperty(this,"instanceState",{enumerable:!0,configurable:!0,writable:!0,value:xl(this,!n.allowPolymorphicState)});const f=r.stateInitStatic||{};qe(f).forEach(h=>{Bf(this,h),this.instanceState[h]=f[h]}),this.definition=u}},iy(t,"anonymousClass"),Object.defineProperty(t,"elementOptions",{enumerable:!0,configurable:!0,writable:!0,value:n}),Object.defineProperty(t,"tagName",{enumerable:!0,configurable:!0,writable:!0,value:r.tagName}),Object.defineProperty(t,"styles",{enumerable:!0,configurable:!0,writable:!0,value:l}),Object.defineProperty(t,"assign",{enumerable:!0,configurable:!0,writable:!0,value:d}),Object.defineProperty(t,"isStrictInstance",{enumerable:!0,configurable:!0,writable:!0,value:()=>!1}),Object.defineProperty(t,"events",{enumerable:!0,configurable:!0,writable:!0,value:i}),Object.defineProperty(t,"renderCallback",{enumerable:!0,configurable:!0,writable:!0,value:c}),Object.defineProperty(t,"hostClasses",{enumerable:!0,configurable:!0,writable:!0,value:s}),Object.defineProperty(t,"cssVars",{enumerable:!0,configurable:!0,writable:!0,value:a}),Object.defineProperty(t,"init",{enumerable:!0,configurable:!0,writable:!0,value:r}),Object.defineProperty(t,"slotNames",{enumerable:!0,configurable:!0,writable:!0,value:o}),Object.defineProperty(t,"stateInitStatic",{enumerable:!0,configurable:!0,writable:!0,value:r.stateInitStatic}),t);return Object.defineProperties(u,{name:{value:Vm(r.tagName,{capitalizeFirstLetter:!0}),writable:!0},isStrictInstance:{value:f=>f instanceof u,writable:!1}}),window.customElements.get(r.tagName)?console.warn(`Tried to define custom element '${r.tagName}' but it is already defined.`):window.customElements.define(r.tagName,u),u}function fe(){return e=>{const t=e;if(!T(t,"object"))throw new Error("Cannot define element with non-object init: ${init}");return dn({...t,options:{ignoreUnsetInputs:!1,...t.options}})}}function fn(e,t){return Kr(e,t),e.element}function sy(e){try{return e.options.host.tagName.toLowerCase()}catch{return}}function Kr(e,t){const r=sy(e),n=r?`: in ${r}`:"";if(e.type!==Ri.ELEMENT)throw new Error(`${t} directive can only be attached directly to an element${n}.`);if(!e.element)throw new Error(`${t} directive found no element${n}.`)}function ay(e){const t=Xe(class extends Ve{constructor(r){super(r),Object.defineProperty(this,"element",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.element=fn(r,e)}render(r){return this.element.setAttribute(e,r),de}});return{attributeSelector(r){return`[${e}="${r}"]`},attributeDirective(r){return t(r)},attributeName:e}}function R(e,t){return oy(e,t)}const oy=Xe(class extends Ve{constructor(e){super(e),Object.defineProperty(this,"element",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"lastListenerMetaData",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.element=fn(e,"listen")}resetListener(e){this.lastListenerMetaData&&this.element.removeEventListener(this.lastListenerMetaData.eventType,this.lastListenerMetaData.listener),this.element.addEventListener(e.eventType,e.listener),this.lastListenerMetaData=e}createListenerMetaData(e,t){return{eventType:e,callback:t,listener:r=>{var n;return(n=this.lastListenerMetaData)==null?void 0:n.callback(r)}}}render(e,t){const r=typeof e=="string"?e:e.type;if(typeof r!="string")throw new Error(`Cannot listen to an event with a name that is not a string. Given event name: "${r}"`);return this.lastListenerMetaData&&this.lastListenerMetaData.eventType===r?this.lastListenerMetaData.callback=t:this.resetListener(this.createListenerMetaData(r,t)),de}}),Ml="onDomCreated",Al=Xe(class extends Ve{constructor(e){super(e),Object.defineProperty(this,"element",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Kr(e,Ml)}update(e,[t]){Kr(e,Ml);const r=e.element;return r!==this.element&&(window.requestAnimationFrame(()=>t(r)),this.element=r),this.render(t)}render(e){}}),ds="onResize",Ff=Xe(class extends Ve{constructor(e){super(e),Object.defineProperty(this,"element",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"resizeObserver",{enumerable:!0,configurable:!0,writable:!0,value:new ResizeObserver(t=>this.fireCallback(t))}),Object.defineProperty(this,"callback",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Kr(e,ds)}fireCallback(e){var r;const t=e[0];if(!t)throw console.error(e),new Error(`${ds} observation triggered but the first entry was empty.`);(r=this.callback)==null||r.call(this,{target:t.target,contentRect:t.contentRect},this.element)}update(e,[t]){Kr(e,ds),this.callback=t;const r=e.element,n=this.element;return r!==n&&(this.element=r,n&&this.resizeObserver.unobserve(n),this.resizeObserver.observe(r)),this.render(t)}render(e){}});function Me(e,t,r){return Ow(e,()=>t,()=>r)}const{attributeDirective:qt,attributeSelector:p$,attributeName:g$}=ay("data-test-id");qe({assign:"",assignedInputs:"",cssVars:"",elementOptions:"",events:"",hostClasses:"",init:"",inputsType:"",isStrictInstance:"",renderCallback:"",slotNames:"",stateInitStatic:"",stateType:"",styles:"",tagName:"",updateStateType:""});function Uf(e){return{[za]:e}}function jf(e){const{assertInputs:t,transformInputs:r}={assertInputs:(e==null?void 0:e.assertInputs)??(()=>{}),transformInputs:(e==null?void 0:e.transformInputs)??(n=>n)};return{defineElement:()=>n=>(t(n),fe()(r(n))),defineElementNoInputs:n=>(t(n),dn(r(n)))}}function ly(e,t){return t?Cl(e,t):Cl(void 0,e)}const Cl=Xe(class extends Ve{constructor(e){super(e),Object.defineProperty(this,"element",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.element=fn(e,"assign")}render(e,t){return Hf(this.element,t),de}}),cy={};function uy(e,t){return t.map((r,n)=>{const i=e[n],s=e[n+1];if(i&&s){const{shouldHaveTagNameHere:a}=zf(i,s);if(a&&T(r,"string"))return{tagName:r,tagInterpolationKey:Fm(cy,r,()=>({tagName:r}))}}return r})}function zf(e,t){const r=e.trim().endsWith("<")&&!!t.match(/^[\s\n>]/),n=(e==null?void 0:e.trim().endsWith("</"))&&t.trim().startsWith(">");return{isOpeningTag:r,shouldHaveTagNameHere:r||n}}function dy(...[e,t,r]){var l,c,d;const n=Kn(r)?r.definition:r,{isOpeningTag:i,shouldHaveTagNameHere:s}=zf(e,t),a=Ua(n);if(a&&s&&n.tagInterpolationKey)return{replacement:n.tagName,getExtraValues:void 0};if(s&&!a)throw console.error({lastNewString:e,currentTemplateString:t,currentValue:n}),new Error(`Got interpolated tag name but found no tag name on the given value: '${(n==null?void 0:n.tagName)||((c=(l=n==null?void 0:n.prototype)==null?void 0:l.constructor)==null?void 0:c.name)||((d=n==null?void 0:n.constructor)==null?void 0:d.name)}'`);if(!s||!a)return;if(i&&n.elementOptions&&!n.elementOptions.ignoreUnsetInputs&&!Kn(r))throw new Error(`Missing inputs for '${n.tagName}'`);return{replacement:n.tagName,getExtraValues(u){const f=Kn(u)?u.inputs:void 0;return[i&&f?ly(f):void 0].filter(Yu)}}}function fy(e){}function hy(e){return _f(e.strings,e.values,dy,fy)}function p(e,...t){const r=uy(e,t),n=Ew(e,...r),i=Rf(e,r,()=>hy(n));return{...n,strings:i.strings,values:i.values}}function my(e){let t;try{t=Reflect.ownKeys(e)}catch{}return t??[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}function fs(e){return my(e).map(t=>[t,e[t]])}var Pl;(function(e){e.Upper="upper",e.Lower="lower"})(Pl||(Pl={}));var Ll;(function(e){e.FirstThenWait="first-then-wait",e.AfterWait="after-wait"})(Ll||(Ll={}));function py(){return globalThis.crypto?globalThis.crypto:require("crypto").webcrypto}py();const Wf={a:window.HTMLAnchorElement,abbr:window.HTMLElement,address:window.HTMLElement,area:window.HTMLAreaElement,article:window.HTMLElement,aside:window.HTMLElement,audio:window.HTMLAudioElement,b:window.HTMLElement,base:window.HTMLBaseElement,bdi:window.HTMLElement,bdo:window.HTMLElement,blockquote:window.HTMLQuoteElement,body:window.HTMLBodyElement,br:window.HTMLBRElement,button:window.HTMLButtonElement,canvas:window.HTMLCanvasElement,caption:window.HTMLTableCaptionElement,cite:window.HTMLElement,code:window.HTMLElement,col:window.HTMLTableColElement,colgroup:window.HTMLTableColElement,data:window.HTMLDataElement,datalist:window.HTMLDataListElement,dd:window.HTMLElement,del:window.HTMLModElement,details:window.HTMLDetailsElement,dfn:window.HTMLElement,dialog:window.HTMLDialogElement,div:window.HTMLDivElement,dl:window.HTMLDListElement,dt:window.HTMLElement,em:window.HTMLElement,embed:window.HTMLEmbedElement,fieldset:window.HTMLFieldSetElement,figcaption:window.HTMLElement,figure:window.HTMLElement,footer:window.HTMLElement,form:window.HTMLFormElement,h1:window.HTMLHeadingElement,h2:window.HTMLHeadingElement,h3:window.HTMLHeadingElement,h4:window.HTMLHeadingElement,h5:window.HTMLHeadingElement,h6:window.HTMLHeadingElement,head:window.HTMLHeadElement,header:window.HTMLElement,hgroup:window.HTMLElement,hr:window.HTMLHRElement,html:window.HTMLHtmlElement,i:window.HTMLElement,iframe:window.HTMLIFrameElement,img:window.HTMLImageElement,input:window.HTMLInputElement,ins:window.HTMLModElement,kbd:window.HTMLElement,label:window.HTMLLabelElement,legend:window.HTMLLegendElement,li:window.HTMLLIElement,link:window.HTMLLinkElement,main:window.HTMLElement,map:window.HTMLMapElement,mark:window.HTMLElement,menu:window.HTMLMenuElement,meta:window.HTMLMetaElement,meter:window.HTMLMeterElement,nav:window.HTMLElement,noscript:window.HTMLElement,object:window.HTMLObjectElement,ol:window.HTMLOListElement,optgroup:window.HTMLOptGroupElement,option:window.HTMLOptionElement,output:window.HTMLOutputElement,p:window.HTMLParagraphElement,picture:window.HTMLPictureElement,pre:window.HTMLPreElement,progress:window.HTMLProgressElement,q:window.HTMLQuoteElement,rp:window.HTMLElement,rt:window.HTMLElement,ruby:window.HTMLElement,s:window.HTMLElement,samp:window.HTMLElement,script:window.HTMLScriptElement,search:window.HTMLElement,section:window.HTMLElement,select:window.HTMLSelectElement,slot:window.HTMLSlotElement,small:window.HTMLElement,source:window.HTMLSourceElement,span:window.HTMLSpanElement,strong:window.HTMLElement,style:window.HTMLStyleElement,sub:window.HTMLElement,summary:window.HTMLElement,sup:window.HTMLElement,table:window.HTMLTableElement,tbody:window.HTMLTableSectionElement,td:window.HTMLTableCellElement,template:window.HTMLTemplateElement,textarea:window.HTMLTextAreaElement,tfoot:window.HTMLTableSectionElement,th:window.HTMLTableCellElement,thead:window.HTMLTableSectionElement,time:window.HTMLTimeElement,title:window.HTMLTitleElement,tr:window.HTMLTableRowElement,track:window.HTMLTrackElement,u:window.HTMLElement,ul:window.HTMLUListElement,var:window.HTMLElement,video:window.HTMLVideoElement,wbr:window.HTMLElement},gy=Object.keys(Wf),Gf={annotation:window.MathMLElement,"annotation-xml":window.MathMLElement,maction:window.MathMLElement,math:window.MathMLElement,merror:window.MathMLElement,mfrac:window.MathMLElement,mi:window.MathMLElement,mmultiscripts:window.MathMLElement,mn:window.MathMLElement,mo:window.MathMLElement,mover:window.MathMLElement,mpadded:window.MathMLElement,mphantom:window.MathMLElement,mprescripts:window.MathMLElement,mroot:window.MathMLElement,mrow:window.MathMLElement,ms:window.MathMLElement,mspace:window.MathMLElement,msqrt:window.MathMLElement,mstyle:window.MathMLElement,msub:window.MathMLElement,msubsup:window.MathMLElement,msup:window.MathMLElement,mtable:window.MathMLElement,mtd:window.MathMLElement,mtext:window.MathMLElement,mtr:window.MathMLElement,munder:window.MathMLElement,munderover:window.MathMLElement,semantics:window.MathMLElement},wy=Object.keys(Gf),Kf={a:window.SVGAElement,animate:window.SVGAnimateElement,animateMotion:window.SVGAnimateMotionElement,animateTransform:window.SVGAnimateTransformElement,circle:window.SVGCircleElement,clipPath:window.SVGClipPathElement,defs:window.SVGDefsElement,desc:window.SVGDescElement,ellipse:window.SVGEllipseElement,feBlend:window.SVGFEBlendElement,feColorMatrix:window.SVGFEColorMatrixElement,feComponentTransfer:window.SVGFEComponentTransferElement,feComposite:window.SVGFECompositeElement,feConvolveMatrix:window.SVGFEConvolveMatrixElement,feDiffuseLighting:window.SVGFEDiffuseLightingElement,feDisplacementMap:window.SVGFEDisplacementMapElement,feDistantLight:window.SVGFEDistantLightElement,feDropShadow:window.SVGFEDropShadowElement,feFlood:window.SVGFEFloodElement,feFuncA:window.SVGFEFuncAElement,feFuncB:window.SVGFEFuncBElement,feFuncG:window.SVGFEFuncGElement,feFuncR:window.SVGFEFuncRElement,feGaussianBlur:window.SVGFEGaussianBlurElement,feImage:window.SVGFEImageElement,feMerge:window.SVGFEMergeElement,feMergeNode:window.SVGFEMergeNodeElement,feMorphology:window.SVGFEMorphologyElement,feOffset:window.SVGFEOffsetElement,fePointLight:window.SVGFEPointLightElement,feSpecularLighting:window.SVGFESpecularLightingElement,feSpotLight:window.SVGFESpotLightElement,feTile:window.SVGFETileElement,feTurbulence:window.SVGFETurbulenceElement,filter:window.SVGFilterElement,foreignObject:window.SVGForeignObjectElement,g:window.SVGGElement,image:window.SVGImageElement,line:window.SVGLineElement,linearGradient:window.SVGLinearGradientElement,marker:window.SVGMarkerElement,mask:window.SVGMaskElement,metadata:window.SVGMetadataElement,mpath:window.SVGMPathElement,path:window.SVGPathElement,pattern:window.SVGPatternElement,polygon:window.SVGPolygonElement,polyline:window.SVGPolylineElement,radialGradient:window.SVGRadialGradientElement,rect:window.SVGRectElement,script:window.SVGScriptElement,set:window.SVGSetElement,stop:window.SVGStopElement,style:window.SVGStyleElement,svg:window.SVGSVGElement,switch:window.SVGSwitchElement,symbol:window.SVGSymbolElement,text:window.SVGTextElement,textPath:window.SVGTextPathElement,title:window.SVGTitleElement,tspan:window.SVGTSpanElement,use:window.SVGUseElement,view:window.SVGViewElement},yy=Object.keys(Kf),by=[fs(Wf).map(([e,t])=>[t,e]),fs(Gf).map(([e,t])=>[t,e]),fs(Kf).map(([e,t])=>[t,e])].flat();new Map(by);Array.from(new Set([...gy,...yy,...wy].sort()));function xn(e,t,r={}){const n=r.useOriginalTarget?e.target:e.currentTarget;if(!(n instanceof t)){const i=t.name,s=n==null?void 0:n.constructor.name,a=r.useOriginalTarget?`Current target from event '${e.type}' was not of type '${i}'. Got '${s}'.`:`Target from event '${e.type}' was not of type '${i}'. Got '${s}'.`;throw new Error(a)}return n}const vy={[X.ElementExample]:()=>[],[X.Page]:e=>[!e.title&&new Error("Cannot define an element-book page with an empty title."),...dp(e.controls,e.title)].filter(ga),[X.Root]:()=>[]},oi="_isBookTreeNode",qf=new Map;function $y(e){return qf.get(e)}function Ey(e,t){Zm(qf,e,()=>t)}function Jt(e,t){return!!(Zf(e)&&e.entry.entryType===t)}function Zf(e){return!!(td(e,[oi,"entry"])&&e[oi])}function Ty(){return{[oi]:!0,entry:{entryType:X.Root,title:"",parent:void 0,errors:[],descriptionParagraphs:[]},urlBreadcrumb:"",fullUrlBreadcrumbs:[],children:{},manuallyAdded:!0}}function Sy({entries:e,debug:t}){const r=$y(e);if(r)return r;const n=Ty();e.forEach(a=>Wa({tree:n,newEntry:a,debug:t,manuallyAdded:!0}));const i=Yf(n),s={tree:n,flattenedNodes:i};return Ey(e,s),t&&console.info("element-book tree:",n),s}function ky(e,t,r){if(!t.parent)return e;const n=js(t,e);if(n)return n;r&&console.info(`parent of ${t.title} not found in tree; adding it now.`),Wa({tree:e,newEntry:t.parent,debug:r,manuallyAdded:!1});const i=js(t,e);if(!i)throw new Error(`Failed to find node despite having just added it: ${ba(t,!1)}`);return i}function Wa({tree:e,newEntry:t,debug:r,manuallyAdded:n}){const i=vy[t.entryType](t);t.errors.push(...i);const s=ky(e,t,r),a=ei(t.title),o=s.children[a];if(o){if(n){if(o.manuallyAdded){o.entry.errors.push(new Error(`Cannot create duplicate '${a}'${s.urlBreadcrumb?` in parent '${s.urlBreadcrumb}'.`:""}`));return}o.manuallyAdded=!0}return}const l={[oi]:!0,children:{},urlBreadcrumb:a,fullUrlBreadcrumbs:[...s.fullUrlBreadcrumbs,a],entry:t,manuallyAdded:n};s.children[a]=l,cp(t,X.Page)&&Object.values(t.elementExamples??{}).length&&Object.values(t.elementExamples??{}).forEach(c=>Wa({tree:e,newEntry:c,debug:r,manuallyAdded:n}))}function js(e,t){const r=Zf(e)?e.fullUrlBreadcrumbs.slice(0,-1):ba(e,!1);return r.length?r.reduce((i,s)=>{if(i)return i.children[s]},t):void 0}function Yf(e){const r=!!e.entry.errors.length?[]:Object.values(e.children).map(i=>Yf(i));return[e,...r].flat()}function Ga(e,t){return Ka(e,["",...t],void 0)}function Ka(e,t,r){const n=t.slice(1),i=n[0];!i&&r&&(e.controls=r);const s=e.children[i||""],a=s&&Ka(s,n,r);return{...e.controls,...a}}function xy(e,t,r){const n={...e};return Ka(n,["",...t],r),n}function Jf(e,t){const r=(t==null?void 0:t.controls)||(Jt(e,X.Page)?Qn(e.entry.controls,(i,s)=>s.initValue):{});return{children:Qn(e.children,(i,s)=>{var a;return Jf(s,(a=t==null?void 0:t.children)==null?void 0:a[s.urlBreadcrumb])}),controls:r}}function My({searchQuery:e,searchIn:t}){const r=t.length,n=e.length;if(n>r)return!1;if(n===r)return e===t;const i=t.toLowerCase(),s=e.toLowerCase();e:for(let a=0,o=0;a<n;a++){const l=s.charCodeAt(a);for(;o<r;)if(i.charCodeAt(o++)===l)continue e;return!1}return!0}const Ay=lp(32);function qn(e){return e.join(Ay)}function Xf(e){if(!e.length)return[];const t=qn(e),r=Xf(e.slice(0,-1));return[t,...r]}const Cy=["error","errors"];function Py(e){return Cy.includes(e)}function Ly({flattenedNodes:e,searchQuery:t}){const r={};function n(i){Object.values(i.children).map(a=>(n(a),qn(a.fullUrlBreadcrumbs))).forEach(a=>r[a]=!0)}return e.forEach(i=>{const s=i.entry.errors.length&&Py(t),a=qn(i.fullUrlBreadcrumbs);if(My({searchIn:[i.entry.title,...i.entry.descriptionParagraphs].join(" ").toLowerCase(),searchQuery:t.toLowerCase()})||s||r[a]){const l=Xf(i.fullUrlBreadcrumbs);n(i),l.forEach(c=>r[c]=!0)}else r[a]=!1}),e.filter(i=>{const s=qn(i.fullUrlBreadcrumbs),a=r[s];if(!T(a,"boolean"))throw new Error(`Failed to find '${i.fullUrlBreadcrumbs.join(" > ")}' in includeInSearchResults.`);return a})}class qa extends Error{constructor(){super(...arguments),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"SpaRouterError"})}}class Ol extends qa{constructor(){super(...arguments),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"GlobalUrlEventsConsolidationError"})}}class Oy extends qa{constructor(){super(...arguments),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"SanitizationDepthMaxed"})}}var Nl;(function(e){e.Upper="upper",e.Lower="lower"})(Nl||(Nl={}));var Il;(function(e){e.FirstThenWait="first-then-wait",e.AfterWait="after-wait"})(Il||(Il={}));function Ny(){return globalThis.crypto?globalThis.crypto:require("crypto").webcrypto}Ny();function Qf({value:e,prefix:t}){return String(e).startsWith(t)?String(e):`${t}${String(e)}`}function hs({value:e,prefix:t}){return e.startsWith(t)?e.substring(t.length):e}function Iy(e,t,r){if(t in e)return e[t];{const n=r();return Qu(n)?new Promise(async(i,s)=>{try{const a=await n;e[t]=a,i(a)}catch(a){s(a)}}):(e[t]=n,n)}}const Dy=[(e,t)=>t in e,(e,t)=>t in e.constructor.prototype];function Ry(e,t){return e?Dy.some(r=>{try{return r(e,t)}catch{return!1}}):!1}function zs(e){let t;try{t=Reflect.ownKeys(e)}catch{}return t??[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}function _y(e,t,r){return e.reduce((n,i,s,a)=>{const o=t(i,s,a);return r(o,i,s,a)&&n.push(o),n},[])}function Vy(e){return!!e}var Dl;(function(e){e.Upper="upper",e.Lower="lower"})(Dl||(Dl={}));function Hy(e,t){return e.split(t)}var Rl;(function(e){e.FirstThenWait="first-then-wait",e.AfterWait="after-wait"})(Rl||(Rl={}));function By(e,t){return zs(e).filter(n=>{const i=e[n];return t(n,i,e)}).reduce((n,i)=>(n[i]=e[i],n),{})}function Ws(e,t){let r=!1;const n=zs(e).reduce((i,s)=>{const a=t(s,e[s],e);return a instanceof Promise&&(r=!0),{...i,[s]:a}},{});return r?new Promise(async(i,s)=>{try{await Promise.all(zs(n).map(async a=>{const o=await n[a];n[a]=o})),i(n)}catch(a){s(a)}}):n}function Fy(e){try{return JSON.parse(JSON.stringify(e))}catch(t){throw console.error("Failed to JSON copy for",e),t}}function Uy(){return globalThis.crypto?globalThis.crypto:require("crypto").webcrypto}Uy();function Ge({value:e,prefix:t}){return String(e).startsWith(t)?String(e):`${t}${String(e)}`}function Za({value:e,prefix:t}){return e.startsWith(t)?e.substring(t.length):e}const ms="://";function Ya(...e){const t=e.join("/"),[r,n=""]=t.includes(ms)?t.split(ms):["",t];let i=!1;const s=n.replace(/\/{2,}/g,"/").split("/").reduce((a,o,l,c)=>{if(i)return a;const d=c[l+1];let u=o;const f=d==null?void 0:d.startsWith("?"),h=!o.includes("?")&&f,m=d==="?";if(f||h){i=!0;let g=!1;const y=c.slice(l+2).reduce((b,E)=>(E.includes("#")&&(g=!0),g?b.concat(E):[b,E].join("&")),"");u=[o,d,m?Za({value:y,prefix:"&"}):y].join("")}return a.concat(u)},[]);return[r,r?ms:"",s.join("/")].join("")}var qr;(function(e){e.Encode="encode",e.Decode="decode",e.None="none"})(qr||(qr={}));var Zr;(function(e){e.Clear="clear",e.Replace="replace",e.Append="append"})(Zr||(Zr={}));function Mn(e,t){return e.map(r=>{if(r!=null)return Xt(String(r),t)}).filter(r=>r!=null)}function Xt(e,t){return(t==null?void 0:t.encoding)===qr.Decode?decodeURIComponent(e):(t==null?void 0:t.encoding)===qr.Encode?encodeURIComponent(e):e}const jy=Dt(gf({keys:"",values:[""],required:!0}));function zy(e,t,r){const n=(r==null?void 0:r.searchParamStrategy)===Zr.Clear?{}:Ws(e,(a,o)=>T(o,"string")?[o]:o),i=Ws(t,(a,o)=>{if((r==null?void 0:r.searchParamStrategy)===Zr.Append){const l=n[a],c=T(l,"array")?l:[l];if(o){const d=T(o,"array")?o:[o];return Mn([...c,...d],r)}else return Mn(c,r)}else return T(o,"array")?Mn(o,r):o?Mn([o],r):void 0});return By({...n,...i},(a,o)=>!!o)}function eh(e,t){return T(e,"string")&&!e.includes("?")?{}:(T(e,"string")?e:e instanceof URL?e.search:e.toString()).replace(/^.*\?|\#.*$/,"").split("&").map(s=>{const[a,...o]=Hy(s,"=");return[a,o.length?o.join("="):void 0]}).reduce((s,[a,o])=>{const l=th({options:t,key:a,value:o}),c=Iy(s,l.key,()=>[]);return o!=null&&c.push(l.value),s},{})}function Wy(e){if(e!=null)return T(e,"array")?[...e]:e===""?[]:[e]}function Gy(e,t){const r=_y(Object.entries(e),([n,i])=>{const s=Wy(i);return s!=null&&s.length?s.map(a=>{const o=th({options:t,key:n,value:a});return[o.key,o.value].join("=")}):[n]},(n,[,i])=>i!=null).flat();return r.length?Ge({value:r.join("&"),prefix:"?"}):""}function th({options:e,key:t,value:r}){return{key:Xt(t,e),value:Xt(String(r),e)}}function rh({hash:e,hostname:t,password:r,pathname:n,port:i,protocol:s,search:a,username:o}){return[s?s+"://":"",o?o+":":"",r?r+"@":"",_i({hostname:t,port:i}),Ja({hash:e,pathname:n,search:a})].join("")}function nh({pathname:e}){const t=Za({value:e,prefix:"/"});return t?t.split("/"):[]}function Ja({hash:e,pathname:t,search:r}){return[Ge({value:t,prefix:"/"}),r?Ge({value:r,prefix:"?"}):"",e?Ge({value:e,prefix:"#"}):""].join("")}function _i({hostname:e,port:t}){return[e,t?":"+t:""].join("")}function ih({hostname:e,port:t,protocol:r}){return[r,_i({hostname:e,port:t})].filter(Vy).join("://")}function li(e,t){const r=T(e,"string")?e:e.toString(),n=r.replace(/^[^#]*(?:#|$)/,""),i=n?Ge({value:Xt(n,t),prefix:"#"}):"",s=r.replace(/#.*$/,""),a=s.replace(/^[^\?]*(?:\?|$)/,""),o=a?Ge({value:Xt(a,t),prefix:"?"}):"",l=s.replace(/\?.*$/,""),c=l.includes("://")?l.replace(/:\/\/.*$/,""):"",d=l.replace(/^.*:\/\//,"").replace(/\/\//g,"/"),u=d.replace(/@.*/,""),f=d.replace(/^[^@]*@/,""),h=u!==f,[m,...g]=h?u.split(":").reverse():[],y=g.reverse().join("").replace(/[\/:]/g,"")||"",b=(m==null?void 0:m.replace(/[\/:]/g,""))||"",E=f.replace(/[:\/].*/,""),C=f.replace(/^[^\/:]*(\:|\/|$)/,"$1"),O=Za({value:C.replace(/\/.*$/,""),prefix:":"}),Y=Xt(C.replace(/^[^\/]*(?:\/|$)/,"/"),t),Pe=_i({hostname:E,port:O}),me=ih({hostname:E,port:O,protocol:c}),H=rh({hash:i,hostname:E,password:b,pathname:Y,port:O,protocol:c,search:o,username:y}),W=eh(o),Le=nh({pathname:Y});return{fullPath:Ja({hash:i,pathname:Y,search:o}),hash:i,host:Pe,hostname:E,href:H,origin:me,password:b,pathname:Y,paths:Le,port:O,protocol:c,search:o,searchParams:W,username:y}}function Ky(e,t,r){const n=T(e,"string")?e:e instanceof URL?e.toString():"",i=T(e,"string")||e instanceof URL?t:e,s=T(e,"string")||e instanceof URL?r:t,a=li(n),o=Ws(a,(f,h)=>{if(!Ry(i,f))return h;const m=i[f];return T(m,"number")?String(m):T(m,"string")?f==="hash"&&m?Ge({value:m,prefix:"#"}):f==="pathname"?Ge({value:m,prefix:"/"}):m:h});Xu(i,"paths")&&i.paths&&(o.pathname=Ya("",...i.paths));const l=T(i.search,"string")?eh(Ge({value:i.search,prefix:"?"})):Fy(i.search||{}),c=zy(o.searchParams,l,{...s,encoding:qr.None}),d=Gy(c,s);return{...o,searchParams:c,search:d,paths:nh(o),fullPath:Ja(o),host:_i(o),origin:ih(o),href:rh({...o,search:d})}}const qy=Dt({protocol:"",username:"",password:"",host:"",hostname:"",port:"",origin:"",pathname:"/",paths:[""],search:"",searchParams:jy,hash:"",fullPath:"/",href:"/"});({...qy.defaultValue});const Zy=Dt({basePath:kn("",void 0),sanitizeRoute:e=>e,maxListenerCount:kn(1,void 0),disableWarnings:kn(void 0,!1),isPaused:kn(!1,void 0)}),Yy=0;function sh(e){return!(e.type!=="click"&&e.type!=="mousedown"||e.metaKey||e.altKey||e.ctrlKey||e.shiftKey||e.button!==Yy)}const Vi="locationchange";globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY=!1;const Jy=globalThis.history.pushState;function _l(...e){const t=Jy.apply(globalThis.history,e);return globalThis.dispatchEvent(new Event(Vi)),t}const Xy=globalThis.history.replaceState;function Vl(...e){const t=Xy.apply(globalThis.history,e);return globalThis.dispatchEvent(new Event(Vi)),t}function Qy(){if(!globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY){{if(globalThis.history.pushState===_l)throw new Ol("The consolidation module thinks that window events have not been consolidated yet but globalThis.history.pushState has already been overridden. Does this module have two copies in your repo?");if(globalThis.history.replaceState===Vl)throw new Ol("The consolidation module thinks that window events have not been consolidated yet but globalThis.history.replaceState has already been overridden. Does this module have two copies in your repo?")}globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY=!0,globalThis.history.pushState=_l,globalThis.history.replaceState=Vl,globalThis.addEventListener("popstate",()=>{globalThis.dispatchEvent(new Event(Vi))})}}function ps(e,t){const r=li(e),n=hs({value:hs({value:r.pathname,prefix:Qf({value:t||"",prefix:"/"})}),prefix:"/"}),i=n?n.split("/"):[],s=Object.keys(r.searchParams).length?r.searchParams:void 0,a=r.hash?hs({value:r.hash,prefix:"#"}):void 0;return{paths:i,search:s,hash:a}}class eb{constructor(t){Object.defineProperty(this,"innerObservable",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"removeGlobalListener",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"sanitizationDepth",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"params",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Da(t,Zy),this.params={...t};const r=this.readCurrentRoute();this.innerObservable=new wf({defaultValue:r,equalityCheck:()=>!1}),Qy(),this.removeGlobalListener=ad(globalThis,Vi,()=>{if(this.params.isPaused)return;if(this.sanitizationDepth>2)throw new Oy("Looping route sanitization detected; aborting window URL change listener.");const n=ps(globalThis.location.href,this.params.basePath),i=t.sanitizeRoute(n);ce(i,n)?(this.sanitizationDepth=0,this.innerObservable.setValue(i)):(this.sanitizationDepth++,this.setRoute(i,{replace:!0}),t.disableWarnings||console.warn("Route sanitized.",{from:n,to:i}))}),this.setRoute(r,{replace:!0})}routeIncludesBasePath(t){return!t.paths||!this.params.basePath?!1:Ya(...t.paths).startsWith(this.params.basePath)}readCurrentRoute(){return this.sanitizeRoute(ps(globalThis.location.href,this.params.basePath))}sanitizeRoute(t){return this.params.sanitizeRoute(t)}createRouteUrl(t){const r=ps(globalThis.location.href,void 0),n={...r,...t},i=this.sanitizeRoute(n),a=this.routeIncludesBasePath(r)&&!this.routeIncludesBasePath(i)&&this.params.basePath?{...i,paths:[this.params.basePath,...i.paths]}:i;return Ky(globalThis.location.href,{paths:a.paths,search:a.search,hash:a.hash?Qf({value:a.hash,prefix:"#"}):"#"},{searchParamStrategy:Zr.Clear}).href}setRoute(t,r={}){const n=this.createRouteUrl(t),{fullPath:i}=li(n);return this.params.isPaused||!r.force&&ce(li(globalThis.location.href).fullPath,i)?!1:r.replace?(globalThis.history.replaceState(void 0,"",i),!0):(globalThis.history.pushState(void 0,"",i),!0)}setRouteOnDirectNavigation(t,r){return sh(r)?(r.preventDefault(),this.setRoute(t)):!1}listen(t,r){const n=this.params.maxListenerCount==null?1:this.params.maxListenerCount;if(n&&this.innerObservable.getListenerCount()>=n)throw new qa(`Attempting to attach more route listeners than the \`maxListenerCount\` of '${n}'.`);return this.innerObservable.listen(t,r),()=>this.removeListener(r)}removeListener(t){return this.innerObservable.removeListener(t)}getListenerCount(){return this.innerObservable.getListenerCount()}destroy(){this.params.isPaused=!0,this.removeGlobalListener(),this.innerObservable.destroy()}}var le;(function(e){e.Search="search",e.Book="book"})(le||(le={}));function Gs(e){return e[0]===le.Book?"":e[1]?decodeURIComponent(e[1]):""}const ar={hash:void 0,paths:[le.Book],search:void 0};function tb(e){return new eb({basePath:e,sanitizeRoute(t){return{paths:rb(t.paths),hash:void 0,search:void 0}}})}function rb(e){const t=e[0];if(tp(t,le)){if(t===le.Book)return[le.Book,...e.slice(1)];if(t===le.Search)return e[1]?[t,e[1]]:[le.Book,...e.slice(1)];throw new Error(`Route path not handled for sanitization: ${e.join("/")}`)}else return ar.paths}const D=mt({"element-book-nav-hover-background-color":"magenta","element-book-nav-hover-foreground-color":"magenta","element-book-nav-active-background-color":"magenta","element-book-nav-active-foreground-color":"magenta","element-book-nav-selected-background-color":"magenta","element-book-nav-selected-foreground-color":"magenta","element-book-accent-icon-color":"magenta","element-book-page-background-color":"magenta","element-book-page-background-faint-level-1-color":"magenta","element-book-page-background-faint-level-2-color":"magenta","element-book-page-foreground-color":"magenta","element-book-page-foreground-faint-level-1-color":"magenta","element-book-page-foreground-faint-level-2-color":"magenta"}),nb={nav:{hover:{background:D["element-book-nav-hover-background-color"],foreground:D["element-book-nav-hover-foreground-color"]},active:{background:D["element-book-nav-active-background-color"],foreground:D["element-book-nav-active-foreground-color"]},selected:{background:D["element-book-nav-selected-background-color"],foreground:D["element-book-nav-selected-foreground-color"]}},accent:{icon:D["element-book-accent-icon-color"]},page:{background:D["element-book-page-background-color"],backgroundFaint1:D["element-book-page-background-faint-level-1-color"],backgroundFaint2:D["element-book-page-background-faint-level-2-color"],foreground:D["element-book-page-foreground-color"],foregroundFaint1:D["element-book-page-foreground-faint-level-1-color"],foregroundFaint2:D["element-book-page-foreground-faint-level-2-color"]}};function ib(e,t){ah(e,t,nb)}function Ks(e){return Ti(e,"_$cssResult$")}function Hl(e){return td(e,["name","value","default"])&&T(e.default,"string")&&Ks(e.name)&&Ks(e.value)}function ah(e,t,r){Object.entries(t).forEach(([n,i])=>{const s=r[n];if(!s)throw new Error(`no nestedCssVar at key '${n}'`);if(Ks(i)){if(!Hl(s))throw new Error(`got a CSS result at '${n}' but no CSS var`);Bw({forCssVar:s,onElement:e,toValue:String(i)})}else{if(Hl(s))throw new Error(`got no CSS result at '${n}' but did find a CSS var`);ah(e,i,s)}})}function F(e,t){let r=e.length;Array.isArray(e[0])||(e=[e]),Array.isArray(t[0])||(t=t.map(a=>[a]));let n=t[0].length,i=t[0].map((a,o)=>t.map(l=>l[o])),s=e.map(a=>i.map(o=>{let l=0;if(!Array.isArray(a)){for(let c of o)l+=a*c;return l}for(let c=0;c<a.length;c++)l+=a[c]*(o[c]||0);return l}));return r===1&&(s=s[0]),n===1?s.map(a=>a[0]):s}function hn(e){return lt(e)==="string"}function lt(e){return(Object.prototype.toString.call(e).match(/^\[object\s+(.*?)\]$/)[1]||"").toLowerCase()}function ci(e,{precision:t,unit:r}){return ct(e)?"none":oh(e,t)+(r??"")}function ct(e){return Number.isNaN(e)||e instanceof Number&&(e==null?void 0:e.none)}function Z(e){return ct(e)?0:e}function oh(e,t){if(e===0)return 0;let r=~~e,n=0;r&&t&&(n=~~Math.log10(Math.abs(r))+1);const i=10**(t-n);return Math.floor(e*i+.5)/i}const sb={deg:1,grad:.9,rad:180/Math.PI,turn:360};function lh(e){if(!e)return;e=e.trim();const t=/^([a-z]+)\((.+?)\)$/i,r=/^-?[\d.]+$/,n=/%|deg|g?rad|turn$/,i=/\/?\s*(none|[-\w.]+(?:%|deg|g?rad|turn)?)/g;let s=e.match(t);if(s){let a=[];return s[2].replace(i,(o,l)=>{let c=l.match(n),d=l;if(c){let u=c[0],f=d.slice(0,-u.length);u==="%"?(d=new Number(f/100),d.type="<percentage>"):(d=new Number(f*sb[u]),d.type="<angle>",d.unit=u)}else r.test(d)?(d=new Number(d),d.type="<number>"):d==="none"&&(d=new Number(NaN),d.none=!0);o.startsWith("/")&&(d=d instanceof Number?d:new Number(d),d.alpha=!0),typeof d=="object"&&d instanceof Number&&(d.raw=l),a.push(d)}),{name:s[1].toLowerCase(),rawName:s[1],rawArgs:s[2],args:a}}}function ch(e){return e[e.length-1]}function Yr(e,t,r){return isNaN(e)?t:isNaN(t)?e:e+(t-e)*r}function uh(e,t,r){return(r-e)/(t-e)}function Xa(e,t,r){return Yr(t[0],t[1],uh(e[0],e[1],r))}function dh(e){return e.map(t=>t.split("|").map(r=>{r=r.trim();let n=r.match(/^(<[a-z]+>)\[(-?[.\d]+),\s*(-?[.\d]+)\]?$/);if(n){let i=new String(n[1]);return i.range=[+n[2],+n[3]],i}return r}))}function fh(e,t,r){return Math.max(Math.min(r,t),e)}function Hi(e,t){return Math.sign(e)===Math.sign(t)?e:-e}function Re(e,t){return Hi(Math.abs(e)**t,e)}function Qa(e,t){return t===0?0:e/t}function hh(e,t,r=0,n=e.length){for(;r<n;){const i=r+n>>1;e[i]<t?r=i+1:n=i}return r}var ab=Object.freeze({__proto__:null,bisectLeft:hh,clamp:fh,copySign:Hi,interpolate:Yr,interpolateInv:uh,isNone:ct,isString:hn,last:ch,mapRange:Xa,multiplyMatrices:F,parseCoordGrammar:dh,parseFunction:lh,serializeNumber:ci,skipNone:Z,spow:Re,toPrecision:oh,type:lt,zdiv:Qa});class ob{add(t,r,n){if(typeof arguments[0]!="string"){for(var t in arguments[0])this.add(t,arguments[0][t],arguments[1]);return}(Array.isArray(t)?t:[t]).forEach(function(i){this[i]=this[i]||[],r&&this[i][n?"unshift":"push"](r)},this)}run(t,r){this[t]=this[t]||[],this[t].forEach(function(n){n.call(r&&r.context?r.context:r,r)})}}const ut=new ob;var Ku,qu,Zu,ye={gamut_mapping:"css",precision:5,deltaE:"76",verbose:((Zu=(qu=(Ku=globalThis==null?void 0:globalThis.process)==null?void 0:Ku.env)==null?void 0:qu.NODE_ENV)==null?void 0:Zu.toLowerCase())!=="test",warn:function(t){var r,n;this.verbose&&((n=(r=globalThis==null?void 0:globalThis.console)==null?void 0:r.warn)==null||n.call(r,t))}};const ne={D50:[.3457/.3585,1,(1-.3457-.3585)/.3585],D65:[.3127/.329,1,(1-.3127-.329)/.329]};function qs(e){return Array.isArray(e)?e:ne[e]}function ui(e,t,r,n={}){if(e=qs(e),t=qs(t),!e||!t)throw new TypeError(`Missing white point to convert ${e?"":"from"}${!e&&!t?"/":""}${t?"":"to"}`);if(e===t)return r;let i={W1:e,W2:t,XYZ:r,options:n};if(ut.run("chromatic-adaptation-start",i),i.M||(i.W1===ne.D65&&i.W2===ne.D50?i.M=[[1.0479297925449969,.022946870601609652,-.05019226628920524],[.02962780877005599,.9904344267538799,-.017073799063418826],[-.009243040646204504,.015055191490298152,.7518742814281371]]:i.W1===ne.D50&&i.W2===ne.D65&&(i.M=[[.955473421488075,-.02309845494876471,.06325924320057072],[-.0283697093338637,1.0099953980813041,.021041441191917323],[.012314014864481998,-.020507649298898964,1.330365926242124]])),ut.run("chromatic-adaptation-end",i),i.M)return F(i.M,i.XYZ);throw new TypeError("Only Bradford CAT with white points D50 and D65 supported for now.")}const lb=new Set(["<number>","<percentage>","<angle>"]);function Bl(e,t,r,n){return Object.entries(e.coords).map(([s,a],o)=>{let l=t.coordGrammar[o],c=n[o],d=c==null?void 0:c.type,u;if(c.none?u=l.find(m=>lb.has(m)):u=l.find(m=>m==d),!u){let m=a.name||s;throw new TypeError(`${d??c.raw} not allowed for ${m} in ${r}()`)}let f=u.range;d==="<percentage>"&&(f||(f=[0,1]));let h=a.range||a.refRange;return f&&h&&(n[o]=Xa(f,h,n[o])),u})}function mh(e,{meta:t}={}){var n,i,s,a;let r={str:(n=String(e))==null?void 0:n.trim()};if(ut.run("parse-start",r),r.color)return r.color;if(r.parsed=lh(r.str),r.parsed){let o=r.parsed.name;if(o==="color"){let l=r.parsed.args.shift(),c=l.startsWith("--")?l.substring(2):`--${l}`,d=[l,c],u=r.parsed.rawArgs.indexOf("/")>0?r.parsed.args.pop():1;for(let m of v.all){let g=m.getFormat("color");if(g&&(d.includes(g.id)||(i=g.ids)!=null&&i.filter(y=>d.includes(y)).length)){const y=Object.keys(m.coords).map((E,C)=>r.parsed.args[C]||0);let b;return g.coordGrammar&&(b=Bl(m,g,"color",y)),t&&Object.assign(t,{formatId:"color",types:b}),g.id.startsWith("--")&&!l.startsWith("--")&&ye.warn(`${m.name} is a non-standard space and not currently supported in the CSS spec. Use prefixed color(${g.id}) instead of color(${l}).`),l.startsWith("--")&&!g.id.startsWith("--")&&ye.warn(`${m.name} is a standard space and supported in the CSS spec. Use color(${g.id}) instead of prefixed color(${l}).`),{spaceId:m.id,coords:y,alpha:u}}}let f="",h=l in v.registry?l:c;if(h in v.registry){let m=(a=(s=v.registry[h].formats)==null?void 0:s.color)==null?void 0:a.id;m&&(f=`Did you mean color(${m})?`)}throw new TypeError(`Cannot parse color(${l}). `+(f||"Missing a plugin?"))}else for(let l of v.all){let c=l.getFormat(o);if(c&&c.type==="function"){let d=1;(c.lastAlpha||ch(r.parsed.args).alpha)&&(d=r.parsed.args.pop());let u=r.parsed.args,f;return c.coordGrammar&&(f=Bl(l,c,o,u)),t&&Object.assign(t,{formatId:c.name,types:f}),{spaceId:l.id,coords:u,alpha:d}}}}else for(let o of v.all)for(let l in o.formats){let c=o.formats[l];if(c.type!=="custom"||c.test&&!c.test(r.str))continue;let d=c.parse(r.str);if(d)return d.alpha??(d.alpha=1),t&&(t.formatId=l),d}throw new TypeError(`Could not parse ${e} as a color. Missing a plugin?`)}function A(e){if(Array.isArray(e))return e.map(A);if(!e)throw new TypeError("Empty color reference");hn(e)&&(e=mh(e));let t=e.space||e.spaceId;return t instanceof v||(e.space=v.get(t)),e.alpha===void 0&&(e.alpha=1),e}const cb=75e-6,se=class se{constructor(t){var i;this.id=t.id,this.name=t.name,this.base=t.base?se.get(t.base):null,this.aliases=t.aliases,this.base&&(this.fromBase=t.fromBase,this.toBase=t.toBase);let r=t.coords??this.base.coords;for(let s in r)"name"in r[s]||(r[s].name=s);this.coords=r;let n=t.white??this.base.white??"D65";this.white=qs(n),this.formats=t.formats??{};for(let s in this.formats){let a=this.formats[s];a.type||(a.type="function"),a.name||(a.name=s)}(i=this.formats.color)!=null&&i.id||(this.formats.color={...this.formats.color??{},id:t.cssId||this.id}),t.gamutSpace?this.gamutSpace=t.gamutSpace==="self"?this:se.get(t.gamutSpace):this.isPolar?this.gamutSpace=this.base:this.gamutSpace=this,this.gamutSpace.isUnbounded&&(this.inGamut=(s,a)=>!0),this.referred=t.referred,Object.defineProperty(this,"path",{value:ub(this).reverse(),writable:!1,enumerable:!0,configurable:!0}),ut.run("colorspace-init-end",this)}inGamut(t,{epsilon:r=cb}={}){if(!this.equals(this.gamutSpace))return t=this.to(this.gamutSpace,t),this.gamutSpace.inGamut(t,{epsilon:r});let n=Object.values(this.coords);return t.every((i,s)=>{let a=n[s];if(a.type!=="angle"&&a.range){if(Number.isNaN(i))return!0;let[o,l]=a.range;return(o===void 0||i>=o-r)&&(l===void 0||i<=l+r)}return!0})}get isUnbounded(){return Object.values(this.coords).every(t=>!("range"in t))}get cssId(){var t,r;return((r=(t=this.formats)==null?void 0:t.color)==null?void 0:r.id)||this.id}get isPolar(){for(let t in this.coords)if(this.coords[t].type==="angle")return!0;return!1}getFormat(t){if(typeof t=="object")return t=Fl(t,this),t;let r;return t==="default"?r=Object.values(this.formats)[0]:r=this.formats[t],r?(r=Fl(r,this),r):null}equals(t){return t?this===t||this.id===t||this.id===t.id:!1}to(t,r){if(arguments.length===1){const o=A(t);[t,r]=[o.space,o.coords]}if(t=se.get(t),this.equals(t))return r;r=r.map(o=>Number.isNaN(o)?0:o);let n=this.path,i=t.path,s,a;for(let o=0;o<n.length&&n[o].equals(i[o]);o++)s=n[o],a=o;if(!s)throw new Error(`Cannot convert between color spaces ${this} and ${t}: no connection space was found`);for(let o=n.length-1;o>a;o--)r=n[o].toBase(r);for(let o=a+1;o<i.length;o++)r=i[o].fromBase(r);return r}from(t,r){if(arguments.length===1){const n=A(t);[t,r]=[n.space,n.coords]}return t=se.get(t),t.to(this,r)}toString(){return`${this.name} (${this.id})`}getMinCoords(){let t=[];for(let r in this.coords){let n=this.coords[r],i=n.range||n.refRange;t.push((i==null?void 0:i.min)??0)}return t}static get all(){return[...new Set(Object.values(se.registry))]}static register(t,r){if(arguments.length===1&&(r=arguments[0],t=r.id),r=this.get(r),this.registry[t]&&this.registry[t]!==r)throw new Error(`Duplicate color space registration: '${t}'`);if(this.registry[t]=r,arguments.length===1&&r.aliases)for(let n of r.aliases)this.register(n,r);return r}static get(t,...r){if(!t||t instanceof se)return t;if(lt(t)==="string"){let i=se.registry[t.toLowerCase()];if(!i)throw new TypeError(`No color space found with id = "${t}"`);return i}if(r.length)return se.get(...r);throw new TypeError(`${t} is not a valid color space`)}static resolveCoord(t,r){var l;let n=lt(t),i,s;if(n==="string"?t.includes(".")?[i,s]=t.split("."):[i,s]=[,t]:Array.isArray(t)?[i,s]=t:(i=t.space,s=t.coordId),i=se.get(i),i||(i=r),!i)throw new TypeError(`Cannot resolve coordinate reference ${t}: No color space specified and relative references are not allowed here`);if(n=lt(s),n==="number"||n==="string"&&s>=0){let c=Object.entries(i.coords)[s];if(c)return{space:i,id:c[0],index:s,...c[1]}}i=se.get(i);let a=s.toLowerCase(),o=0;for(let c in i.coords){let d=i.coords[c];if(c.toLowerCase()===a||((l=d.name)==null?void 0:l.toLowerCase())===a)return{space:i,id:c,index:o,...d};o++}throw new TypeError(`No "${s}" coordinate found in ${i.name}. Its coordinates are: ${Object.keys(i.coords).join(", ")}`)}};Rt(se,"registry",{}),Rt(se,"DEFAULT_FORMAT",{type:"functions",name:"color"});let v=se;function ub(e){let t=[e];for(let r=e;r=r.base;)t.push(r);return t}function Fl(e,{coords:t}={}){if(e.coords&&!e.coordGrammar){e.type||(e.type="function"),e.name||(e.name="color"),e.coordGrammar=dh(e.coords);let r=Object.entries(t).map(([n,i],s)=>{let a=e.coordGrammar[s][0],o=i.range||i.refRange,l=a.range,c="";return a=="<percentage>"?(l=[0,100],c="%"):a=="<angle>"&&(c="deg"),{fromRange:o,toRange:l,suffix:c}});e.serializeCoords=(n,i)=>n.map((s,a)=>{let{fromRange:o,toRange:l,suffix:c}=r[a];return o&&l&&(s=Xa(o,l,s)),s=ci(s,{precision:i,unit:c}),s})}return e}var Q=new v({id:"xyz-d65",name:"XYZ D65",coords:{x:{name:"X"},y:{name:"Y"},z:{name:"Z"}},white:"D65",formats:{color:{ids:["xyz-d65","xyz"]}},aliases:["xyz"]});class he extends v{constructor(t){t.coords||(t.coords={r:{range:[0,1],name:"Red"},g:{range:[0,1],name:"Green"},b:{range:[0,1],name:"Blue"}}),t.base||(t.base=Q),t.toXYZ_M&&t.fromXYZ_M&&(t.toBase??(t.toBase=r=>{let n=F(t.toXYZ_M,r);return this.white!==this.base.white&&(n=ui(this.white,this.base.white,n)),n}),t.fromBase??(t.fromBase=r=>(r=ui(this.base.white,this.white,r),F(t.fromXYZ_M,r)))),t.referred??(t.referred="display"),super(t)}}function mn(e,t){return e=A(e),!t||e.space.equals(t)?e.coords.slice():(t=v.get(t),t.from(e))}function pe(e,t){e=A(e);let{space:r,index:n}=v.resolveCoord(t,e.space);return mn(e,r)[n]}function eo(e,t,r){return e=A(e),t=v.get(t),e.coords=t.to(e.space,r),e}eo.returns="color";function Ye(e,t,r){if(e=A(e),arguments.length===2&&lt(arguments[1])==="object"){let n=arguments[1];for(let i in n)Ye(e,i,n[i])}else{typeof r=="function"&&(r=r(pe(e,t)));let{space:n,index:i}=v.resolveCoord(t,e.space),s=mn(e,n);s[i]=r,eo(e,n,s)}return e}Ye.returns="color";var to=new v({id:"xyz-d50",name:"XYZ D50",white:"D50",base:Q,fromBase:e=>ui(Q.white,"D50",e),toBase:e=>ui("D50",Q.white,e)});const db=216/24389,Ul=24/116,An=24389/27;let gs=ne.D50;var ge=new v({id:"lab",name:"Lab",coords:{l:{refRange:[0,100],name:"Lightness"},a:{refRange:[-125,125]},b:{refRange:[-125,125]}},white:gs,base:to,fromBase(e){let r=e.map((n,i)=>n/gs[i]).map(n=>n>db?Math.cbrt(n):(An*n+16)/116);return[116*r[1]-16,500*(r[0]-r[1]),200*(r[1]-r[2])]},toBase(e){let t=[];return t[1]=(e[0]+16)/116,t[0]=e[1]/500+t[1],t[2]=t[1]-e[2]/200,[t[0]>Ul?Math.pow(t[0],3):(116*t[0]-16)/An,e[0]>8?Math.pow((e[0]+16)/116,3):e[0]/An,t[2]>Ul?Math.pow(t[2],3):(116*t[2]-16)/An].map((n,i)=>n*gs[i])},formats:{lab:{coords:["<number> | <percentage>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}});function He(e){return(e%360+360)%360}function fb(e,t){if(e==="raw")return t;let[r,n]=t.map(He),i=n-r;return e==="increasing"?i<0&&(n+=360):e==="decreasing"?i>0&&(r+=360):e==="longer"?-180<i&&i<180&&(i>0?r+=360:n+=360):e==="shorter"&&(i>180?r+=360:i<-180&&(n+=360)),[r,n]}var Jr=new v({id:"lch",name:"LCH",coords:{l:{refRange:[0,100],name:"Lightness"},c:{refRange:[0,150],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},base:ge,fromBase(e){let[t,r,n]=e,i;const s=.02;return Math.abs(r)<s&&Math.abs(n)<s?i=NaN:i=Math.atan2(n,r)*180/Math.PI,[t,Math.sqrt(r**2+n**2),He(i)]},toBase(e){let[t,r,n]=e;return r<0&&(r=0),isNaN(n)&&(n=0),[t,r*Math.cos(n*Math.PI/180),r*Math.sin(n*Math.PI/180)]},formats:{lch:{coords:["<number> | <percentage>","<number> | <percentage>","<number> | <angle>"]}}});const jl=25**7,di=Math.PI,zl=180/di,Bt=di/180;function Wl(e){const t=e*e;return t*t*t*e}function ph(e,t,{kL:r=1,kC:n=1,kH:i=1}={}){[e,t]=A([e,t]);let[s,a,o]=ge.from(e),l=Jr.from(ge,[s,a,o])[1],[c,d,u]=ge.from(t),f=Jr.from(ge,[c,d,u])[1];l<0&&(l=0),f<0&&(f=0);let h=(l+f)/2,m=Wl(h),g=.5*(1-Math.sqrt(m/(m+jl))),y=(1+g)*a,b=(1+g)*d,E=Math.sqrt(y**2+o**2),C=Math.sqrt(b**2+u**2),O=y===0&&o===0?0:Math.atan2(o,y),Y=b===0&&u===0?0:Math.atan2(u,b);O<0&&(O+=2*di),Y<0&&(Y+=2*di),O*=zl,Y*=zl;let Pe=c-s,me=C-E,H=Y-O,W=O+Y,Le=Math.abs(H),pt;E*C===0?pt=0:Le<=180?pt=H:H>180?pt=H-360:H<-180?pt=H+360:ye.warn("the unthinkable has happened");let fo=2*Math.sqrt(C*E)*Math.sin(pt*Bt/2),xm=(s+c)/2,Ki=(E+C)/2,ho=Wl(Ki),Be;E*C===0?Be=W:Le<=180?Be=W/2:W<360?Be=(W+360)/2:Be=(W-360)/2;let mo=(xm-50)**2,Mm=1+.015*mo/Math.sqrt(20+mo),po=1+.045*Ki,Er=1;Er-=.17*Math.cos((Be-30)*Bt),Er+=.24*Math.cos(2*Be*Bt),Er+=.32*Math.cos((3*Be+6)*Bt),Er-=.2*Math.cos((4*Be-63)*Bt);let go=1+.015*Ki*Er,Am=30*Math.exp(-1*((Be-275)/25)**2),Cm=2*Math.sqrt(ho/(ho+jl)),Pm=-1*Math.sin(2*Am*Bt)*Cm,yn=(Pe/(r*Mm))**2;return yn+=(me/(n*po))**2,yn+=(fo/(i*go))**2,yn+=Pm*(me/(n*po))*(fo/(i*go)),Math.sqrt(yn)}const hb=[[.819022437996703,.3619062600528904,-.1288737815209879],[.0329836539323885,.9292868615863434,.0361446663506424],[.0481771893596242,.2642395317527308,.6335478284694309]],mb=[[1.2268798758459243,-.5578149944602171,.2813910456659647],[-.0405757452148008,1.112286803280317,-.0717110580655164],[-.0763729366746601,-.4214933324022432,1.5869240198367816]],pb=[[.210454268309314,.7936177747023054,-.0040720430116193],[1.9779985324311684,-2.42859224204858,.450593709617411],[.0259040424655478,.7827717124575296,-.8086757549230774]],gb=[[1,.3963377773761749,.2158037573099136],[1,-.1055613458156586,-.0638541728258133],[1,-.0894841775298119,-1.2914855480194092]];var or=new v({id:"oklab",name:"Oklab",coords:{l:{refRange:[0,1],name:"Lightness"},a:{refRange:[-.4,.4]},b:{refRange:[-.4,.4]}},white:"D65",base:Q,fromBase(e){let r=F(hb,e).map(n=>Math.cbrt(n));return F(pb,r)},toBase(e){let r=F(gb,e).map(n=>n**3);return F(mb,r)},formats:{oklab:{coords:["<percentage> | <number>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}});function Zs(e,t){[e,t]=A([e,t]);let[r,n,i]=or.from(e),[s,a,o]=or.from(t),l=r-s,c=n-a,d=i-o;return Math.sqrt(l**2+c**2+d**2)}const wb=75e-6;function Mt(e,t,{epsilon:r=wb}={}){e=A(e),t||(t=e.space),t=v.get(t);let n=e.coords;return t!==e.space&&(n=t.from(e)),t.inGamut(n,{epsilon:r})}function lr(e){return{space:e.space,coords:e.coords.slice(),alpha:e.alpha}}function gh(e,t,r="lab"){r=v.get(r);let n=r.from(e),i=r.from(t);return Math.sqrt(n.reduce((s,a,o)=>{let l=i[o];return isNaN(a)||isNaN(l)?s:s+(l-a)**2},0))}function yb(e,t){return gh(e,t,"lab")}const bb=Math.PI,Gl=bb/180;function vb(e,t,{l:r=2,c:n=1}={}){[e,t]=A([e,t]);let[i,s,a]=ge.from(e),[,o,l]=Jr.from(ge,[i,s,a]),[c,d,u]=ge.from(t),f=Jr.from(ge,[c,d,u])[1];o<0&&(o=0),f<0&&(f=0);let h=i-c,m=o-f,g=s-d,y=a-u,b=g**2+y**2-m**2,E=.511;i>=16&&(E=.040975*i/(1+.01765*i));let C=.0638*o/(1+.0131*o)+.638,O;Number.isNaN(l)&&(l=0),l>=164&&l<=345?O=.56+Math.abs(.2*Math.cos((l+168)*Gl)):O=.36+Math.abs(.4*Math.cos((l+35)*Gl));let Y=Math.pow(o,4),Pe=Math.sqrt(Y/(Y+1900)),me=C*(Pe*O+1-Pe),H=(h/(r*E))**2;return H+=(m/(n*C))**2,H+=b/me**2,Math.sqrt(H)}const Kl=203;var ro=new v({id:"xyz-abs-d65",cssId:"--xyz-abs-d65",name:"Absolute XYZ D65",coords:{x:{refRange:[0,9504.7],name:"Xa"},y:{refRange:[0,1e4],name:"Ya"},z:{refRange:[0,10888.3],name:"Za"}},base:Q,fromBase(e){return e.map(t=>Math.max(t*Kl,0))},toBase(e){return e.map(t=>Math.max(t/Kl,0))}});const Cn=1.15,Pn=.66,ql=2610/2**14,$b=2**14/2610,Zl=3424/2**12,Yl=2413/2**7,Jl=2392/2**7,Eb=1.7*2523/2**5,Xl=2**5/(1.7*2523),Ln=-.56,ws=16295499532821565e-27,Tb=[[.41478972,.579999,.014648],[-.20151,1.120649,.0531008],[-.0166008,.2648,.6684799]],Sb=[[1.9242264357876067,-1.0047923125953657,.037651404030618],[.35031676209499907,.7264811939316552,-.06538442294808501],[-.09098281098284752,-.3127282905230739,1.5227665613052603]],kb=[[.5,.5,0],[3.524,-4.066708,.542708],[.199076,1.096799,-1.295875]],xb=[[1,.1386050432715393,.05804731615611886],[.9999999999999999,-.1386050432715393,-.05804731615611886],[.9999999999999998,-.09601924202631895,-.8118918960560388]];var wh=new v({id:"jzazbz",name:"Jzazbz",coords:{jz:{refRange:[0,1],name:"Jz"},az:{refRange:[-.5,.5]},bz:{refRange:[-.5,.5]}},base:ro,fromBase(e){let[t,r,n]=e,i=Cn*t-(Cn-1)*n,s=Pn*r-(Pn-1)*t,o=F(Tb,[i,s,n]).map(function(f){let h=Zl+Yl*(f/1e4)**ql,m=1+Jl*(f/1e4)**ql;return(h/m)**Eb}),[l,c,d]=F(kb,o);return[(1+Ln)*l/(1+Ln*l)-ws,c,d]},toBase(e){let[t,r,n]=e,i=(t+ws)/(1+Ln-Ln*(t+ws)),a=F(xb,[i,r,n]).map(function(f){let h=Zl-f**Xl,m=Jl*f**Xl-Yl;return 1e4*(h/m)**$b}),[o,l,c]=F(Sb,a),d=(o+(Cn-1)*c)/Cn,u=(l+(Pn-1)*d)/Pn;return[d,u,c]},formats:{color:{coords:["<number> | <percentage>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}}),Ys=new v({id:"jzczhz",name:"JzCzHz",coords:{jz:{refRange:[0,1],name:"Jz"},cz:{refRange:[0,1],name:"Chroma"},hz:{refRange:[0,360],type:"angle",name:"Hue"}},base:wh,fromBase(e){let[t,r,n]=e,i;const s=2e-4;return Math.abs(r)<s&&Math.abs(n)<s?i=NaN:i=Math.atan2(n,r)*180/Math.PI,[t,Math.sqrt(r**2+n**2),He(i)]},toBase(e){return[e[0],e[1]*Math.cos(e[2]*Math.PI/180),e[1]*Math.sin(e[2]*Math.PI/180)]}});function Mb(e,t){[e,t]=A([e,t]);let[r,n,i]=Ys.from(e),[s,a,o]=Ys.from(t),l=r-s,c=n-a;Number.isNaN(i)&&Number.isNaN(o)?(i=0,o=0):Number.isNaN(i)?i=o:Number.isNaN(o)&&(o=i);let d=i-o,u=2*Math.sqrt(n*a)*Math.sin(d/2*(Math.PI/180));return Math.sqrt(l**2+c**2+u**2)}const yh=3424/4096,bh=2413/128,vh=2392/128,Ql=2610/16384,Ab=2523/32,Cb=16384/2610,ec=32/2523,Pb=[[.3592832590121217,.6976051147779502,-.035891593232029],[-.1920808463704993,1.100476797037432,.0753748658519118],[.0070797844607479,.0748396662186362,.8433265453898765]],Lb=[[2048/4096,2048/4096,0],[6610/4096,-13613/4096,7003/4096],[17933/4096,-17390/4096,-543/4096]],Ob=[[.9999999999999998,.0086090370379328,.111029625003026],[.9999999999999998,-.0086090370379328,-.1110296250030259],[.9999999999999998,.5600313357106791,-.3206271749873188]],Nb=[[2.0701522183894223,-1.3263473389671563,.2066510476294053],[.3647385209748072,.6805660249472273,-.0453045459220347],[-.0497472075358123,-.0492609666966131,1.1880659249923042]];var Js=new v({id:"ictcp",name:"ICTCP",coords:{i:{refRange:[0,1],name:"I"},ct:{refRange:[-.5,.5],name:"CT"},cp:{refRange:[-.5,.5],name:"CP"}},base:ro,fromBase(e){let t=F(Pb,e);return Ib(t)},toBase(e){let t=Db(e);return F(Nb,t)}});function Ib(e){let t=e.map(function(r){let n=yh+bh*(r/1e4)**Ql,i=1+vh*(r/1e4)**Ql;return(n/i)**Ab});return F(Lb,t)}function Db(e){return F(Ob,e).map(function(n){let i=Math.max(n**ec-yh,0),s=bh-vh*n**ec;return 1e4*(i/s)**Cb})}function Rb(e,t){[e,t]=A([e,t]);let[r,n,i]=Js.from(e),[s,a,o]=Js.from(t);return 720*Math.sqrt((r-s)**2+.25*(n-a)**2+(i-o)**2)}const _b=ne.D65,$h=.42,tc=1/$h,ys=2*Math.PI,Eh=[[.401288,.650173,-.051461],[-.250268,1.204414,.045854],[-.002079,.048952,.953127]],Vb=[[1.8620678550872327,-1.0112546305316843,.14918677544445175],[.38752654323613717,.6214474419314753,-.008973985167612518],[-.015841498849333856,-.03412293802851557,1.0499644368778496]],Hb=[[460,451,288],[460,-891,-261],[460,-220,-6300]],Bb={dark:[.8,.525,.8],dim:[.9,.59,.9],average:[1,.69,1]},Et={h:[20.14,90,164.25,237.53,380.14],e:[.8,.7,1,1.2,.8],H:[0,100,200,300,400]},Fb=180/Math.PI,rc=Math.PI/180;function Th(e,t){return e.map(n=>{const i=Re(t*Math.abs(n)*.01,$h);return 400*Hi(i,n)/(i+27.13)})}function Ub(e,t){const r=100/t*27.13**tc;return e.map(n=>{const i=Math.abs(n);return Hi(r*Re(i/(400-i),tc),n)})}function jb(e){let t=He(e);t<=Et.h[0]&&(t+=360);const r=hh(Et.h,t)-1,[n,i]=Et.h.slice(r,r+2),[s,a]=Et.e.slice(r,r+2),o=Et.H[r],l=(t-n)/s;return o+100*l/(l+(i-t)/a)}function zb(e){let t=(e%400+400)%400;const r=Math.floor(.01*t);t=t%100;const[n,i]=Et.h.slice(r,r+2),[s,a]=Et.e.slice(r,r+2);return He((t*(a*n-s*i)-100*n*a)/(t*(a-s)-100*a))}function Sh(e,t,r,n,i){const s={};s.discounting=i,s.refWhite=e,s.surround=n;const a=e.map(g=>g*100);s.la=t,s.yb=r;const o=a[1],l=F(Eh,a);n=Bb[s.surround];const c=n[0];s.c=n[1],s.nc=n[2];const u=(1/(5*s.la+1))**4;s.fl=u*s.la+.1*(1-u)*(1-u)*Math.cbrt(5*s.la),s.flRoot=s.fl**.25,s.n=s.yb/o,s.z=1.48+Math.sqrt(s.n),s.nbb=.725*s.n**-.2,s.ncb=s.nbb;const f=i?1:Math.max(Math.min(c*(1-1/3.6*Math.exp((-s.la-42)/92)),1),0);s.dRgb=l.map(g=>Yr(1,o/g,f)),s.dRgbInv=s.dRgb.map(g=>1/g);const h=l.map((g,y)=>g*s.dRgb[y]),m=Th(h,s.fl);return s.aW=s.nbb*(2*m[0]+m[1]+.05*m[2]),s}const nc=Sh(_b,64/Math.PI*.2,20,"average",!1);function Xs(e,t){if(!(e.J!==void 0^e.Q!==void 0))throw new Error("Conversion requires one and only one: 'J' or 'Q'");if(!(e.C!==void 0^e.M!==void 0^e.s!==void 0))throw new Error("Conversion requires one and only one: 'C', 'M' or 's'");if(!(e.h!==void 0^e.H!==void 0))throw new Error("Conversion requires one and only one: 'h' or 'H'");if(e.J===0||e.Q===0)return[0,0,0];let r=0;e.h!==void 0?r=He(e.h)*rc:r=zb(e.H)*rc;const n=Math.cos(r),i=Math.sin(r);let s=0;e.J!==void 0?s=Re(e.J,1/2)*.1:e.Q!==void 0&&(s=.25*t.c*e.Q/((t.aW+4)*t.flRoot));let a=0;e.C!==void 0?a=e.C/s:e.M!==void 0?a=e.M/t.flRoot/s:e.s!==void 0&&(a=4e-4*e.s**2*(t.aW+4)/t.c);const o=Re(a*Math.pow(1.64-Math.pow(.29,t.n),-.73),10/9),l=.25*(Math.cos(r+2)+3.8),c=t.aW*Re(s,2/t.c/t.z),d=5e4/13*t.nc*t.ncb*l,u=c/t.nbb,f=23*(u+.305)*Qa(o,23*d+o*(11*n+108*i)),h=f*n,m=f*i,g=Ub(F(Hb,[u,h,m]).map(y=>y*1/1403),t.fl);return F(Vb,g.map((y,b)=>y*t.dRgbInv[b])).map(y=>y/100)}function kh(e,t){const r=e.map(C=>C*100),n=Th(F(Eh,r).map((C,O)=>C*t.dRgb[O]),t.fl),i=n[0]+(-12*n[1]+n[2])/11,s=(n[0]+n[1]-2*n[2])/9,a=(Math.atan2(s,i)%ys+ys)%ys,o=.25*(Math.cos(a+2)+3.8),l=5e4/13*t.nc*t.ncb*Qa(o*Math.sqrt(i**2+s**2),n[0]+n[1]+1.05*n[2]+.305),c=Re(l,.9)*Math.pow(1.64-Math.pow(.29,t.n),.73),d=t.nbb*(2*n[0]+n[1]+.05*n[2]),u=Re(d/t.aW,.5*t.c*t.z),f=100*Re(u,2),h=4/t.c*u*(t.aW+4)*t.flRoot,m=c*u,g=m*t.flRoot,y=He(a*Fb),b=jb(y),E=50*Re(t.c*c/(t.aW+4),1/2);return{J:f,C:m,h:y,s:E,Q:h,M:g,H:b}}var Wb=new v({id:"cam16-jmh",cssId:"--cam16-jmh",name:"CAM16-JMh",coords:{j:{refRange:[0,100],name:"J"},m:{refRange:[0,105],name:"Colorfulness"},h:{refRange:[0,360],type:"angle",name:"Hue"}},base:Q,fromBase(e){const t=kh(e,nc);return[t.J,t.M,t.h]},toBase(e){return Xs({J:e[0],M:e[1],h:e[2]},nc)}});const Gb=ne.D65,Kb=216/24389,xh=24389/27;function qb(e){return 116*(e>Kb?Math.cbrt(e):(xh*e+16)/116)-16}function Qs(e){return e>8?Math.pow((e+16)/116,3):e/xh}function Zb(e,t){let[r,n,i]=e,s=[],a=0;if(i===0)return[0,0,0];let o=Qs(i);i>0?a=.00379058511492914*i**2+.608983189401032*i+.9155088574762233:a=9514440756550361e-21*i**2+.08693057439788597*i-21.928975842194614;const l=2e-12,c=15;let d=0,u=1/0;for(;d<=c;){s=Xs({J:a,C:n,h:r},t);const f=Math.abs(s[1]-o);if(f<u){if(f<=l)return s;u=f}a=a-(s[1]-o)*a/(2*s[1]),d+=1}return Xs({J:a,C:n,h:r},t)}function Yb(e,t){const r=qb(e[1]);if(r===0)return[0,0,0];const n=kh(e,no);return[He(n.h),n.C,r]}const no=Sh(Gb,200/Math.PI*Qs(50),Qs(50)*100,"average",!1);var Xr=new v({id:"hct",name:"HCT",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},c:{refRange:[0,145],name:"Colorfulness"},t:{refRange:[0,100],name:"Tone"}},base:Q,fromBase(e){return Yb(e)},toBase(e){return Zb(e,no)},formats:{color:{id:"--hct",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}});const Jb=Math.PI/180,ic=[1,.007,.0228];function sc(e){e[1]<0&&(e=Xr.fromBase(Xr.toBase(e)));const t=Math.log(Math.max(1+ic[2]*e[1]*no.flRoot,1))/ic[2],r=e[0]*Jb,n=t*Math.cos(r),i=t*Math.sin(r);return[e[2],n,i]}function Xb(e,t){[e,t]=A([e,t]);let[r,n,i]=sc(Xr.from(e)),[s,a,o]=sc(Xr.from(t));return Math.sqrt((r-s)**2+(n-a)**2+(i-o)**2)}var cr={deltaE76:yb,deltaECMC:vb,deltaE2000:ph,deltaEJz:Mb,deltaEITP:Rb,deltaEOK:Zs,deltaEHCT:Xb};function Qb(e){const t=e?Math.floor(Math.log10(Math.abs(e))):0;return Math.max(parseFloat(`1e${t-2}`),1e-6)}const ac={hct:{method:"hct.c",jnd:2,deltaEMethod:"hct",blackWhiteClamp:{}},"hct-tonal":{method:"hct.c",jnd:0,deltaEMethod:"hct",blackWhiteClamp:{channel:"hct.t",min:0,max:100}}};function dt(e,{method:t=ye.gamut_mapping,space:r=void 0,deltaEMethod:n="",jnd:i=2,blackWhiteClamp:s={}}={}){if(e=A(e),hn(arguments[1])?r=arguments[1]:r||(r=e.space),r=v.get(r),Mt(e,r,{epsilon:0}))return e;let a;if(t==="css")a=e1(e,{space:r});else{if(t!=="clip"&&!Mt(e,r)){Object.prototype.hasOwnProperty.call(ac,t)&&({method:t,jnd:i,deltaEMethod:n,blackWhiteClamp:s}=ac[t]);let o=ph;if(n!==""){for(let c in cr)if("deltae"+n.toLowerCase()===c.toLowerCase()){o=cr[c];break}}let l=dt(B(e,r),{method:"clip",space:r});if(o(e,l)>i){if(Object.keys(s).length===3){let E=v.resolveCoord(s.channel),C=pe(B(e,E.space),E.id);if(ct(C)&&(C=0),C>=s.max)return B({space:"xyz-d65",coords:ne.D65},e.space);if(C<=s.min)return B({space:"xyz-d65",coords:[0,0,0]},e.space)}let c=v.resolveCoord(t),d=c.space,u=c.id,f=B(e,d);f.coords.forEach((E,C)=>{ct(E)&&(f.coords[C]=0)});let m=(c.range||c.refRange)[0],g=Qb(i),y=m,b=pe(f,u);for(;b-y>g;){let E=lr(f);E=dt(E,{space:r,method:"clip"}),o(f,E)-i<g?y=pe(f,u):b=pe(f,u),Ye(f,u,(y+b)/2)}a=B(f,r)}else a=l}else a=B(e,r);if(t==="clip"||!Mt(a,r,{epsilon:0})){let o=Object.values(r.coords).map(l=>l.range||[]);a.coords=a.coords.map((l,c)=>{let[d,u]=o[c];return d!==void 0&&(l=Math.max(d,l)),u!==void 0&&(l=Math.min(l,u)),l})}}return r!==e.space&&(a=B(a,e.space)),e.coords=a.coords,e}dt.returns="color";const oc={WHITE:{space:or,coords:[1,0,0]},BLACK:{space:or,coords:[0,0,0]}};function e1(e,{space:t}={}){e=A(e),t||(t=e.space),t=v.get(t);const i=v.get("oklch");if(t.isUnbounded)return B(e,t);const s=B(e,i);let a=s.coords[0];if(a>=1){const m=B(oc.WHITE,t);return m.alpha=e.alpha,B(m,t)}if(a<=0){const m=B(oc.BLACK,t);return m.alpha=e.alpha,B(m,t)}if(Mt(s,t,{epsilon:0}))return B(s,t);function o(m){const g=B(m,t),y=Object.values(t.coords);return g.coords=g.coords.map((b,E)=>{if("range"in y[E]){const[C,O]=y[E].range;return fh(C,b,O)}return b}),g}let l=0,c=s.coords[1],d=!0,u=lr(s),f=o(u),h=Zs(f,u);if(h<.02)return f;for(;c-l>1e-4;){const m=(l+c)/2;if(u.coords[1]=m,d&&Mt(u,t,{epsilon:0}))l=m;else if(f=o(u),h=Zs(f,u),h<.02){if(.02-h<1e-4)break;d=!1,l=m}else c=m}return f}function B(e,t,{inGamut:r}={}){e=A(e),t=v.get(t);let n=t.from(e),i={space:t,coords:n,alpha:e.alpha};return r&&(i=dt(i,r===!0?void 0:r)),i}B.returns="color";function Br(e,{precision:t=ye.precision,format:r="default",inGamut:n=!0,...i}={}){var l;let s;e=A(e);let a=r;r=e.space.getFormat(r)??e.space.getFormat("default")??v.DEFAULT_FORMAT;let o=e.coords.slice();if(n||(n=r.toGamut),n&&!Mt(e)&&(o=dt(lr(e),n===!0?void 0:n).coords),r.type==="custom")if(i.precision=t,r.serialize)s=r.serialize(o,e.alpha,i);else throw new TypeError(`format ${a} can only be used to parse colors, not for serialization`);else{let c=r.name||"color";r.serializeCoords?o=r.serializeCoords(o,t):t!==null&&(o=o.map(h=>ci(h,{precision:t})));let d=[...o];if(c==="color"){let h=r.id||((l=r.ids)==null?void 0:l[0])||e.space.id;d.unshift(h)}let u=e.alpha;t!==null&&(u=ci(u,{precision:t}));let f=e.alpha>=1||r.noAlpha?"":`${r.commas?",":" /"} ${u}`;s=`${c}(${d.join(r.commas?", ":" ")}${f})`}return s}const t1=[[.6369580483012914,.14461690358620832,.1688809751641721],[.2627002120112671,.6779980715188708,.05930171646986196],[0,.028072693049087428,1.060985057710791]],r1=[[1.716651187971268,-.355670783776392,-.25336628137366],[-.666684351832489,1.616481236634939,.0157685458139111],[.017639857445311,-.042770613257809,.942103121235474]];var Bi=new he({id:"rec2020-linear",cssId:"--rec2020-linear",name:"Linear REC.2020",white:"D65",toXYZ_M:t1,fromXYZ_M:r1});const On=1.09929682680944,lc=.018053968510807;var Mh=new he({id:"rec2020",name:"REC.2020",base:Bi,toBase(e){return e.map(function(t){return t<lc*4.5?t/4.5:Math.pow((t+On-1)/On,1/.45)})},fromBase(e){return e.map(function(t){return t>=lc?On*Math.pow(t,.45)-(On-1):4.5*t})}});const n1=[[.4865709486482162,.26566769316909306,.1982172852343625],[.2289745640697488,.6917385218365064,.079286914093745],[0,.04511338185890264,1.043944368900976]],i1=[[2.493496911941425,-.9313836179191239,-.40271078445071684],[-.8294889695615747,1.7626640603183463,.023624685841943577],[.03584583024378447,-.07617238926804182,.9568845240076872]];var Ah=new he({id:"p3-linear",cssId:"--display-p3-linear",name:"Linear P3",white:"D65",toXYZ_M:n1,fromXYZ_M:i1});const s1=[[.41239079926595934,.357584339383878,.1804807884018343],[.21263900587151027,.715168678767756,.07219231536073371],[.01933081871559182,.11919477979462598,.9505321522496607]],J=[[3.2409699419045226,-1.537383177570094,-.4986107602930034],[-.9692436362808796,1.8759675015077202,.04155505740717559],[.05563007969699366,-.20397695888897652,1.0569715142428786]];var Ch=new he({id:"srgb-linear",name:"Linear sRGB",white:"D65",toXYZ_M:s1,fromXYZ_M:J}),cc={aliceblue:[240/255,248/255,1],antiquewhite:[250/255,235/255,215/255],aqua:[0,1,1],aquamarine:[127/255,1,212/255],azure:[240/255,1,1],beige:[245/255,245/255,220/255],bisque:[1,228/255,196/255],black:[0,0,0],blanchedalmond:[1,235/255,205/255],blue:[0,0,1],blueviolet:[138/255,43/255,226/255],brown:[165/255,42/255,42/255],burlywood:[222/255,184/255,135/255],cadetblue:[95/255,158/255,160/255],chartreuse:[127/255,1,0],chocolate:[210/255,105/255,30/255],coral:[1,127/255,80/255],cornflowerblue:[100/255,149/255,237/255],cornsilk:[1,248/255,220/255],crimson:[220/255,20/255,60/255],cyan:[0,1,1],darkblue:[0,0,139/255],darkcyan:[0,139/255,139/255],darkgoldenrod:[184/255,134/255,11/255],darkgray:[169/255,169/255,169/255],darkgreen:[0,100/255,0],darkgrey:[169/255,169/255,169/255],darkkhaki:[189/255,183/255,107/255],darkmagenta:[139/255,0,139/255],darkolivegreen:[85/255,107/255,47/255],darkorange:[1,140/255,0],darkorchid:[153/255,50/255,204/255],darkred:[139/255,0,0],darksalmon:[233/255,150/255,122/255],darkseagreen:[143/255,188/255,143/255],darkslateblue:[72/255,61/255,139/255],darkslategray:[47/255,79/255,79/255],darkslategrey:[47/255,79/255,79/255],darkturquoise:[0,206/255,209/255],darkviolet:[148/255,0,211/255],deeppink:[1,20/255,147/255],deepskyblue:[0,191/255,1],dimgray:[105/255,105/255,105/255],dimgrey:[105/255,105/255,105/255],dodgerblue:[30/255,144/255,1],firebrick:[178/255,34/255,34/255],floralwhite:[1,250/255,240/255],forestgreen:[34/255,139/255,34/255],fuchsia:[1,0,1],gainsboro:[220/255,220/255,220/255],ghostwhite:[248/255,248/255,1],gold:[1,215/255,0],goldenrod:[218/255,165/255,32/255],gray:[128/255,128/255,128/255],green:[0,128/255,0],greenyellow:[173/255,1,47/255],grey:[128/255,128/255,128/255],honeydew:[240/255,1,240/255],hotpink:[1,105/255,180/255],indianred:[205/255,92/255,92/255],indigo:[75/255,0,130/255],ivory:[1,1,240/255],khaki:[240/255,230/255,140/255],lavender:[230/255,230/255,250/255],lavenderblush:[1,240/255,245/255],lawngreen:[124/255,252/255,0],lemonchiffon:[1,250/255,205/255],lightblue:[173/255,216/255,230/255],lightcoral:[240/255,128/255,128/255],lightcyan:[224/255,1,1],lightgoldenrodyellow:[250/255,250/255,210/255],lightgray:[211/255,211/255,211/255],lightgreen:[144/255,238/255,144/255],lightgrey:[211/255,211/255,211/255],lightpink:[1,182/255,193/255],lightsalmon:[1,160/255,122/255],lightseagreen:[32/255,178/255,170/255],lightskyblue:[135/255,206/255,250/255],lightslategray:[119/255,136/255,153/255],lightslategrey:[119/255,136/255,153/255],lightsteelblue:[176/255,196/255,222/255],lightyellow:[1,1,224/255],lime:[0,1,0],limegreen:[50/255,205/255,50/255],linen:[250/255,240/255,230/255],magenta:[1,0,1],maroon:[128/255,0,0],mediumaquamarine:[102/255,205/255,170/255],mediumblue:[0,0,205/255],mediumorchid:[186/255,85/255,211/255],mediumpurple:[147/255,112/255,219/255],mediumseagreen:[60/255,179/255,113/255],mediumslateblue:[123/255,104/255,238/255],mediumspringgreen:[0,250/255,154/255],mediumturquoise:[72/255,209/255,204/255],mediumvioletred:[199/255,21/255,133/255],midnightblue:[25/255,25/255,112/255],mintcream:[245/255,1,250/255],mistyrose:[1,228/255,225/255],moccasin:[1,228/255,181/255],navajowhite:[1,222/255,173/255],navy:[0,0,128/255],oldlace:[253/255,245/255,230/255],olive:[128/255,128/255,0],olivedrab:[107/255,142/255,35/255],orange:[1,165/255,0],orangered:[1,69/255,0],orchid:[218/255,112/255,214/255],palegoldenrod:[238/255,232/255,170/255],palegreen:[152/255,251/255,152/255],paleturquoise:[175/255,238/255,238/255],palevioletred:[219/255,112/255,147/255],papayawhip:[1,239/255,213/255],peachpuff:[1,218/255,185/255],peru:[205/255,133/255,63/255],pink:[1,192/255,203/255],plum:[221/255,160/255,221/255],powderblue:[176/255,224/255,230/255],purple:[128/255,0,128/255],rebeccapurple:[102/255,51/255,153/255],red:[1,0,0],rosybrown:[188/255,143/255,143/255],royalblue:[65/255,105/255,225/255],saddlebrown:[139/255,69/255,19/255],salmon:[250/255,128/255,114/255],sandybrown:[244/255,164/255,96/255],seagreen:[46/255,139/255,87/255],seashell:[1,245/255,238/255],sienna:[160/255,82/255,45/255],silver:[192/255,192/255,192/255],skyblue:[135/255,206/255,235/255],slateblue:[106/255,90/255,205/255],slategray:[112/255,128/255,144/255],slategrey:[112/255,128/255,144/255],snow:[1,250/255,250/255],springgreen:[0,1,127/255],steelblue:[70/255,130/255,180/255],tan:[210/255,180/255,140/255],teal:[0,128/255,128/255],thistle:[216/255,191/255,216/255],tomato:[1,99/255,71/255],turquoise:[64/255,224/255,208/255],violet:[238/255,130/255,238/255],wheat:[245/255,222/255,179/255],white:[1,1,1],whitesmoke:[245/255,245/255,245/255],yellow:[1,1,0],yellowgreen:[154/255,205/255,50/255]};let uc=Array(3).fill("<percentage> | <number>[0, 255]"),dc=Array(3).fill("<number>[0, 255]");var ur=new he({id:"srgb",name:"sRGB",base:Ch,fromBase:e=>e.map(t=>{let r=t<0?-1:1,n=t*r;return n>.0031308?r*(1.055*n**(1/2.4)-.055):12.92*t}),toBase:e=>e.map(t=>{let r=t<0?-1:1,n=t*r;return n<=.04045?t/12.92:r*((n+.055)/1.055)**2.4}),formats:{rgb:{coords:uc},rgb_number:{name:"rgb",commas:!0,coords:dc,noAlpha:!0},color:{},rgba:{coords:uc,commas:!0,lastAlpha:!0},rgba_number:{name:"rgba",commas:!0,coords:dc},hex:{type:"custom",toGamut:!0,test:e=>/^#([a-f0-9]{3,4}){1,2}$/i.test(e),parse(e){e.length<=5&&(e=e.replace(/[a-f0-9]/gi,"$&$&"));let t=[];return e.replace(/[a-f0-9]{2}/gi,r=>{t.push(parseInt(r,16)/255)}),{spaceId:"srgb",coords:t.slice(0,3),alpha:t.slice(3)[0]}},serialize:(e,t,{collapse:r=!0}={})=>{t<1&&e.push(t),e=e.map(s=>Math.round(s*255));let n=r&&e.every(s=>s%17===0);return"#"+e.map(s=>n?(s/17).toString(16):s.toString(16).padStart(2,"0")).join("")}},keyword:{type:"custom",test:e=>/^[a-z]+$/i.test(e),parse(e){e=e.toLowerCase();let t={spaceId:"srgb",coords:null,alpha:1};if(e==="transparent"?(t.coords=cc.black,t.alpha=0):t.coords=cc[e],t.coords)return t}}}}),Ph=new he({id:"p3",cssId:"display-p3",name:"P3",base:Ah,fromBase:ur.fromBase,toBase:ur.toBase});ye.display_space=ur;let a1;if(typeof CSS<"u"&&CSS.supports)for(let e of[ge,Mh,Ph]){let t=e.getMinCoords(),n=Br({space:e,coords:t,alpha:1});if(CSS.supports("color",n)){ye.display_space=e;break}}function o1(e,{space:t=ye.display_space,...r}={}){let n=Br(e,r);if(typeof CSS>"u"||CSS.supports("color",n)||!ye.display_space)n=new String(n),n.color=e;else{let i=e;if((e.coords.some(ct)||ct(e.alpha))&&!(a1??(a1=CSS.supports("color","hsl(none 50% 50%)")))&&(i=lr(e),i.coords=i.coords.map(Z),i.alpha=Z(i.alpha),n=Br(i,r),CSS.supports("color",n)))return n=new String(n),n.color=i,n;i=B(i,t),n=new String(Br(i,r)),n.color=i}return n}function l1(e,t){return e=A(e),t=A(t),e.space===t.space&&e.alpha===t.alpha&&e.coords.every((r,n)=>r===t.coords[n])}function ft(e){return pe(e,[Q,"y"])}function Lh(e,t){Ye(e,[Q,"y"],t)}function c1(e){Object.defineProperty(e.prototype,"luminance",{get(){return ft(this)},set(t){Lh(this,t)}})}var u1=Object.freeze({__proto__:null,getLuminance:ft,register:c1,setLuminance:Lh});function d1(e,t){e=A(e),t=A(t);let r=Math.max(ft(e),0),n=Math.max(ft(t),0);return n>r&&([r,n]=[n,r]),(r+.05)/(n+.05)}const f1=.56,h1=.57,m1=.62,p1=.65,fc=.022,g1=1.414,w1=.1,y1=5e-4,b1=1.14,hc=.027,v1=1.14;function mc(e){return e>=fc?e:e+(fc-e)**g1}function Ft(e){let t=e<0?-1:1,r=Math.abs(e);return t*Math.pow(r,2.4)}function $1(e,t){t=A(t),e=A(e);let r,n,i,s,a,o;t=B(t,"srgb"),[s,a,o]=t.coords;let l=Ft(s)*.2126729+Ft(a)*.7151522+Ft(o)*.072175;e=B(e,"srgb"),[s,a,o]=e.coords;let c=Ft(s)*.2126729+Ft(a)*.7151522+Ft(o)*.072175,d=mc(l),u=mc(c),f=u>d;return Math.abs(u-d)<y1?n=0:f?(r=u**f1-d**h1,n=r*b1):(r=u**p1-d**m1,n=r*v1),Math.abs(n)<w1?i=0:n>0?i=n-hc:i=n+hc,i*100}function E1(e,t){e=A(e),t=A(t);let r=Math.max(ft(e),0),n=Math.max(ft(t),0);n>r&&([r,n]=[n,r]);let i=r+n;return i===0?0:(r-n)/i}const T1=5e4;function S1(e,t){e=A(e),t=A(t);let r=Math.max(ft(e),0),n=Math.max(ft(t),0);return n>r&&([r,n]=[n,r]),n===0?T1:(r-n)/n}function k1(e,t){e=A(e),t=A(t);let r=pe(e,[ge,"l"]),n=pe(t,[ge,"l"]);return Math.abs(r-n)}const x1=216/24389,pc=24/116,Nn=24389/27;let bs=ne.D65;var ea=new v({id:"lab-d65",name:"Lab D65",coords:{l:{refRange:[0,100],name:"Lightness"},a:{refRange:[-125,125]},b:{refRange:[-125,125]}},white:bs,base:Q,fromBase(e){let r=e.map((n,i)=>n/bs[i]).map(n=>n>x1?Math.cbrt(n):(Nn*n+16)/116);return[116*r[1]-16,500*(r[0]-r[1]),200*(r[1]-r[2])]},toBase(e){let t=[];return t[1]=(e[0]+16)/116,t[0]=e[1]/500+t[1],t[2]=t[1]-e[2]/200,[t[0]>pc?Math.pow(t[0],3):(116*t[0]-16)/Nn,e[0]>8?Math.pow((e[0]+16)/116,3):e[0]/Nn,t[2]>pc?Math.pow(t[2],3):(116*t[2]-16)/Nn].map((n,i)=>n*bs[i])},formats:{"lab-d65":{coords:["<number> | <percentage>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}});const vs=Math.pow(5,.5)*.5+.5;function M1(e,t){e=A(e),t=A(t);let r=pe(e,[ea,"l"]),n=pe(t,[ea,"l"]),i=Math.abs(Math.pow(r,vs)-Math.pow(n,vs)),s=Math.pow(i,1/vs)*Math.SQRT2-40;return s<7.5?0:s}var Zn=Object.freeze({__proto__:null,contrastAPCA:$1,contrastDeltaPhi:M1,contrastLstar:k1,contrastMichelson:E1,contrastWCAG21:d1,contrastWeber:S1});function A1(e,t,r={}){hn(r)&&(r={algorithm:r});let{algorithm:n,...i}=r;if(!n){let s=Object.keys(Zn).map(a=>a.replace(/^contrast/,"")).join(", ");throw new TypeError(`contrast() function needs a contrast algorithm. Please specify one of: ${s}`)}e=A(e),t=A(t);for(let s in Zn)if("contrast"+n.toLowerCase()===s.toLowerCase())return Zn[s](e,t,i);throw new TypeError(`Unknown contrast algorithm: ${n}`)}function Fi(e){let[t,r,n]=mn(e,Q),i=t+15*r+3*n;return[4*t/i,9*r/i]}function Oh(e){let[t,r,n]=mn(e,Q),i=t+r+n;return[t/i,r/i]}function C1(e){Object.defineProperty(e.prototype,"uv",{get(){return Fi(this)}}),Object.defineProperty(e.prototype,"xy",{get(){return Oh(this)}})}var P1=Object.freeze({__proto__:null,register:C1,uv:Fi,xy:Oh});function Nr(e,t,r={}){hn(r)&&(r={method:r});let{method:n=ye.deltaE,...i}=r;for(let s in cr)if("deltae"+n.toLowerCase()===s.toLowerCase())return cr[s](e,t,i);throw new TypeError(`Unknown deltaE method: ${n}`)}function L1(e,t=.25){let n=[v.get("oklch","lch"),"l"];return Ye(e,n,i=>i*(1+t))}function O1(e,t=.25){let n=[v.get("oklch","lch"),"l"];return Ye(e,n,i=>i*(1-t))}var N1=Object.freeze({__proto__:null,darken:O1,lighten:L1});function Nh(e,t,r=.5,n={}){return[e,t]=[A(e),A(t)],lt(r)==="object"&&([r,n]=[.5,r]),pn(e,t,n)(r)}function Ih(e,t,r={}){let n;io(e)&&([n,r]=[e,t],[e,t]=n.rangeArgs.colors);let{maxDeltaE:i,deltaEMethod:s,steps:a=2,maxSteps:o=1e3,...l}=r;n||([e,t]=[A(e),A(t)],n=pn(e,t,l));let c=Nr(e,t),d=i>0?Math.max(a,Math.ceil(c/i)+1):a,u=[];if(o!==void 0&&(d=Math.min(d,o)),d===1)u=[{p:.5,color:n(.5)}];else{let f=1/(d-1);u=Array.from({length:d},(h,m)=>{let g=m*f;return{p:g,color:n(g)}})}if(i>0){let f=u.reduce((h,m,g)=>{if(g===0)return 0;let y=Nr(m.color,u[g-1].color,s);return Math.max(h,y)},0);for(;f>i;){f=0;for(let h=1;h<u.length&&u.length<o;h++){let m=u[h-1],g=u[h],y=(g.p+m.p)/2,b=n(y);f=Math.max(f,Nr(b,m.color),Nr(b,g.color)),u.splice(h,0,{p:y,color:n(y)}),h++}}}return u=u.map(f=>f.color),u}function pn(e,t,r={}){if(io(e)){let[l,c]=[e,t];return pn(...l.rangeArgs.colors,{...l.rangeArgs.options,...c})}let{space:n,outputSpace:i,progression:s,premultiplied:a}=r;e=A(e),t=A(t),e=lr(e),t=lr(t);let o={colors:[e,t],options:r};if(n?n=v.get(n):n=v.registry[ye.interpolationSpace]||e.space,i=i?v.get(i):n,e=B(e,n),t=B(t,n),e=dt(e),t=dt(t),n.coords.h&&n.coords.h.type==="angle"){let l=r.hue=r.hue||"shorter",c=[n,"h"],[d,u]=[pe(e,c),pe(t,c)];isNaN(d)&&!isNaN(u)?d=u:isNaN(u)&&!isNaN(d)&&(u=d),[d,u]=fb(l,[d,u]),Ye(e,c,d),Ye(t,c,u)}return a&&(e.coords=e.coords.map(l=>l*e.alpha),t.coords=t.coords.map(l=>l*t.alpha)),Object.assign(l=>{l=s?s(l):l;let c=e.coords.map((f,h)=>{let m=t.coords[h];return Yr(f,m,l)}),d=Yr(e.alpha,t.alpha,l),u={space:n,coords:c,alpha:d};return a&&(u.coords=u.coords.map(f=>f/d)),i!==n&&(u=B(u,i)),u},{rangeArgs:o})}function io(e){return lt(e)==="function"&&!!e.rangeArgs}ye.interpolationSpace="lab";function I1(e){e.defineFunction("mix",Nh,{returns:"color"}),e.defineFunction("range",pn,{returns:"function<color>"}),e.defineFunction("steps",Ih,{returns:"array<color>"})}var D1=Object.freeze({__proto__:null,isRange:io,mix:Nh,range:pn,register:I1,steps:Ih}),Dh=new v({id:"hsl",name:"HSL",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},l:{range:[0,100],name:"Lightness"}},base:ur,fromBase:e=>{let t=Math.max(...e),r=Math.min(...e),[n,i,s]=e,[a,o,l]=[NaN,0,(r+t)/2],c=t-r;if(c!==0){switch(o=l===0||l===1?0:(t-l)/Math.min(l,1-l),t){case n:a=(i-s)/c+(i<s?6:0);break;case i:a=(s-n)/c+2;break;case s:a=(n-i)/c+4}a=a*60}return o<0&&(a+=180,o=Math.abs(o)),a>=360&&(a-=360),[a,o*100,l*100]},toBase:e=>{let[t,r,n]=e;t=t%360,t<0&&(t+=360),r/=100,n/=100;function i(s){let a=(s+t/30)%12,o=r*Math.min(n,1-n);return n-o*Math.max(-1,Math.min(a-3,9-a,1))}return[i(0),i(8),i(4)]},formats:{hsl:{coords:["<number> | <angle>","<percentage>","<percentage>"]},hsla:{coords:["<number> | <angle>","<percentage>","<percentage>"],commas:!0,lastAlpha:!0}}}),Rh=new v({id:"hsv",name:"HSV",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},v:{range:[0,100],name:"Value"}},base:Dh,fromBase(e){let[t,r,n]=e;r/=100,n/=100;let i=n+r*Math.min(n,1-n);return[t,i===0?0:200*(1-n/i),100*i]},toBase(e){let[t,r,n]=e;r/=100,n/=100;let i=n*(1-r/2);return[t,i===0||i===1?0:(n-i)/Math.min(i,1-i)*100,i*100]},formats:{color:{id:"--hsv",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}}),R1=new v({id:"hwb",name:"HWB",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},w:{range:[0,100],name:"Whiteness"},b:{range:[0,100],name:"Blackness"}},base:Rh,fromBase(e){let[t,r,n]=e;return[t,n*(100-r)/100,100-n]},toBase(e){let[t,r,n]=e;r/=100,n/=100;let i=r+n;if(i>=1){let o=r/i;return[t,0,o*100]}let s=1-n,a=s===0?0:1-r/s;return[t,a*100,s*100]},formats:{hwb:{coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}});const _1=[[.5766690429101305,.1855582379065463,.1882286462349947],[.29734497525053605,.6273635662554661,.07529145849399788],[.02703136138641234,.07068885253582723,.9913375368376388]],V1=[[2.0415879038107465,-.5650069742788596,-.34473135077832956],[-.9692436362808795,1.8759675015077202,.04155505740717557],[.013444280632031142,-.11836239223101838,1.0151749943912054]];var _h=new he({id:"a98rgb-linear",cssId:"--a98-rgb-linear",name:"Linear Adobe® 98 RGB compatible",white:"D65",toXYZ_M:_1,fromXYZ_M:V1}),H1=new he({id:"a98rgb",cssId:"a98-rgb",name:"Adobe® 98 RGB compatible",base:_h,toBase:e=>e.map(t=>Math.pow(Math.abs(t),563/256)*Math.sign(t)),fromBase:e=>e.map(t=>Math.pow(Math.abs(t),256/563)*Math.sign(t))});const B1=[[.7977666449006423,.13518129740053308,.0313477341283922],[.2880748288194013,.711835234241873,8993693872564e-17],[0,0,.8251046025104602]],F1=[[1.3457868816471583,-.25557208737979464,-.05110186497554526],[-.5446307051249019,1.5082477428451468,.02052744743642139],[0,0,1.2119675456389452]];var Vh=new he({id:"prophoto-linear",cssId:"--prophoto-rgb-linear",name:"Linear ProPhoto",white:"D50",base:to,toXYZ_M:B1,fromXYZ_M:F1});const U1=1/512,j1=16/512;var z1=new he({id:"prophoto",cssId:"prophoto-rgb",name:"ProPhoto",base:Vh,toBase(e){return e.map(t=>t<j1?t/16:t**1.8)},fromBase(e){return e.map(t=>t>=U1?t**(1/1.8):16*t)}}),W1=new v({id:"oklch",name:"Oklch",coords:{l:{refRange:[0,1],name:"Lightness"},c:{refRange:[0,.4],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},white:"D65",base:or,fromBase(e){let[t,r,n]=e,i;const s=2e-4;return Math.abs(r)<s&&Math.abs(n)<s?i=NaN:i=Math.atan2(n,r)*180/Math.PI,[t,Math.sqrt(r**2+n**2),He(i)]},toBase(e){let[t,r,n]=e,i,s;return isNaN(n)?(i=0,s=0):(i=r*Math.cos(n*Math.PI/180),s=r*Math.sin(n*Math.PI/180)),[t,i,s]},formats:{oklch:{coords:["<percentage> | <number>","<number> | <percentage>[0,1]","<number> | <angle>"]}}});let Hh=ne.D65;const G1=216/24389,gc=24389/27,[wc,yc]=Fi({space:Q,coords:Hh});var Bh=new v({id:"luv",name:"Luv",coords:{l:{refRange:[0,100],name:"Lightness"},u:{refRange:[-215,215]},v:{refRange:[-215,215]}},white:Hh,base:Q,fromBase(e){let t=[Z(e[0]),Z(e[1]),Z(e[2])],r=t[1],[n,i]=Fi({space:Q,coords:t});if(!Number.isFinite(n)||!Number.isFinite(i))return[0,0,0];let s=r<=G1?gc*r:116*Math.cbrt(r)-16;return[s,13*s*(n-wc),13*s*(i-yc)]},toBase(e){let[t,r,n]=e;if(t===0||ct(t))return[0,0,0];r=Z(r),n=Z(n);let i=r/(13*t)+wc,s=n/(13*t)+yc,a=t<=8?t/gc:Math.pow((t+16)/116,3);return[a*(9*i/(4*s)),a,a*((12-3*i-20*s)/(4*s))]},formats:{color:{id:"--luv",coords:["<number> | <percentage>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}}),so=new v({id:"lchuv",name:"LChuv",coords:{l:{refRange:[0,100],name:"Lightness"},c:{refRange:[0,220],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},base:Bh,fromBase(e){let[t,r,n]=e,i;const s=.02;return Math.abs(r)<s&&Math.abs(n)<s?i=NaN:i=Math.atan2(n,r)*180/Math.PI,[t,Math.sqrt(r**2+n**2),He(i)]},toBase(e){let[t,r,n]=e;return r<0&&(r=0),isNaN(n)&&(n=0),[t,r*Math.cos(n*Math.PI/180),r*Math.sin(n*Math.PI/180)]},formats:{color:{id:"--lchuv",coords:["<number> | <percentage>","<number> | <percentage>","<number> | <angle>"]}}});const K1=216/24389,q1=24389/27,bc=J[0][0],vc=J[0][1],$s=J[0][2],$c=J[1][0],Ec=J[1][1],Es=J[1][2],Tc=J[2][0],Sc=J[2][1],Ts=J[2][2];function Ut(e,t,r){const n=t/(Math.sin(r)-e*Math.cos(r));return n<0?1/0:n}function fi(e){const t=Math.pow(e+16,3)/1560896,r=t>K1?t:e/q1,n=r*(284517*bc-94839*$s),i=r*(838422*$s+769860*vc+731718*bc),s=r*(632260*$s-126452*vc),a=r*(284517*$c-94839*Es),o=r*(838422*Es+769860*Ec+731718*$c),l=r*(632260*Es-126452*Ec),c=r*(284517*Tc-94839*Ts),d=r*(838422*Ts+769860*Sc+731718*Tc),u=r*(632260*Ts-126452*Sc);return{r0s:n/s,r0i:i*e/s,r1s:n/(s+126452),r1i:(i-769860)*e/(s+126452),g0s:a/l,g0i:o*e/l,g1s:a/(l+126452),g1i:(o-769860)*e/(l+126452),b0s:c/u,b0i:d*e/u,b1s:c/(u+126452),b1i:(d-769860)*e/(u+126452)}}function kc(e,t){const r=t/360*Math.PI*2,n=Ut(e.r0s,e.r0i,r),i=Ut(e.r1s,e.r1i,r),s=Ut(e.g0s,e.g0i,r),a=Ut(e.g1s,e.g1i,r),o=Ut(e.b0s,e.b0i,r),l=Ut(e.b1s,e.b1i,r);return Math.min(n,i,s,a,o,l)}var Z1=new v({id:"hsluv",name:"HSLuv",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},l:{range:[0,100],name:"Lightness"}},base:so,gamutSpace:ur,fromBase(e){let[t,r,n]=[Z(e[0]),Z(e[1]),Z(e[2])],i;if(t>99.9999999)i=0,t=100;else if(t<1e-8)i=0,t=0;else{let s=fi(t),a=kc(s,n);i=r/a*100}return[n,i,t]},toBase(e){let[t,r,n]=[Z(e[0]),Z(e[1]),Z(e[2])],i;if(n>99.9999999)n=100,i=0;else if(n<1e-8)n=0,i=0;else{let s=fi(n);i=kc(s,t)/100*r}return[n,i,t]},formats:{color:{id:"--hsluv",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}});J[0][0];J[0][1];J[0][2];J[1][0];J[1][1];J[1][2];J[2][0];J[2][1];J[2][2];function jt(e,t){return Math.abs(t)/Math.sqrt(Math.pow(e,2)+1)}function xc(e){let t=jt(e.r0s,e.r0i),r=jt(e.r1s,e.r1i),n=jt(e.g0s,e.g0i),i=jt(e.g1s,e.g1i),s=jt(e.b0s,e.b0i),a=jt(e.b1s,e.b1i);return Math.min(t,r,n,i,s,a)}var Y1=new v({id:"hpluv",name:"HPLuv",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},l:{range:[0,100],name:"Lightness"}},base:so,gamutSpace:"self",fromBase(e){let[t,r,n]=[Z(e[0]),Z(e[1]),Z(e[2])],i;if(t>99.9999999)i=0,t=100;else if(t<1e-8)i=0,t=0;else{let s=fi(t),a=xc(s);i=r/a*100}return[n,i,t]},toBase(e){let[t,r,n]=[Z(e[0]),Z(e[1]),Z(e[2])],i;if(n>99.9999999)n=100,i=0;else if(n<1e-8)n=0,i=0;else{let s=fi(n);i=xc(s)/100*r}return[n,i,t]},formats:{color:{id:"--hpluv",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}});const Mc=203,Ac=2610/2**14,J1=2**14/2610,X1=2523/2**5,Cc=2**5/2523,Pc=3424/2**12,Lc=2413/2**7,Oc=2392/2**7;var Q1=new he({id:"rec2100pq",cssId:"rec2100-pq",name:"REC.2100-PQ",base:Bi,toBase(e){return e.map(function(t){return(Math.max(t**Cc-Pc,0)/(Lc-Oc*t**Cc))**J1*1e4/Mc})},fromBase(e){return e.map(function(t){let r=Math.max(t*Mc/1e4,0),n=Pc+Lc*r**Ac,i=1+Oc*r**Ac;return(n/i)**X1})}});const Nc=.17883277,Ic=.28466892,Dc=.55991073,Ss=3.7743;var ev=new he({id:"rec2100hlg",cssId:"rec2100-hlg",name:"REC.2100-HLG",referred:"scene",base:Bi,toBase(e){return e.map(function(t){return t<=.5?t**2/3*Ss:(Math.exp((t-Dc)/Nc)+Ic)/12*Ss})},fromBase(e){return e.map(function(t){return t/=Ss,t<=1/12?Math.sqrt(3*t):Nc*Math.log(12*t-Ic)+Dc})}});const Fh={};ut.add("chromatic-adaptation-start",e=>{e.options.method&&(e.M=Uh(e.W1,e.W2,e.options.method))});ut.add("chromatic-adaptation-end",e=>{e.M||(e.M=Uh(e.W1,e.W2,e.options.method))});function Ui({id:e,toCone_M:t,fromCone_M:r}){Fh[e]=arguments[0]}function Uh(e,t,r="Bradford"){let n=Fh[r],[i,s,a]=F(n.toCone_M,e),[o,l,c]=F(n.toCone_M,t),d=[[o/i,0,0],[0,l/s,0],[0,0,c/a]],u=F(d,n.toCone_M);return F(n.fromCone_M,u)}Ui({id:"von Kries",toCone_M:[[.40024,.7076,-.08081],[-.2263,1.16532,.0457],[0,0,.91822]],fromCone_M:[[1.8599363874558397,-1.1293816185800916,.21989740959619328],[.3611914362417676,.6388124632850422,-6370596838649899e-21],[0,0,1.0890636230968613]]});Ui({id:"Bradford",toCone_M:[[.8951,.2664,-.1614],[-.7502,1.7135,.0367],[.0389,-.0685,1.0296]],fromCone_M:[[.9869929054667121,-.14705425642099013,.15996265166373122],[.4323052697233945,.5183602715367774,.049291228212855594],[-.00852866457517732,.04004282165408486,.96848669578755]]});Ui({id:"CAT02",toCone_M:[[.7328,.4296,-.1624],[-.7036,1.6975,.0061],[.003,.0136,.9834]],fromCone_M:[[1.0961238208355142,-.27886900021828726,.18274517938277307],[.4543690419753592,.4735331543074117,.07209780371722911],[-.009627608738429355,-.00569803121611342,1.0153256399545427]]});Ui({id:"CAT16",toCone_M:[[.401288,.650173,-.051461],[-.250268,1.204414,.045854],[-.002079,.048952,.953127]],fromCone_M:[[1.862067855087233,-1.0112546305316845,.14918677544445172],[.3875265432361372,.6214474419314753,-.008973985167612521],[-.01584149884933386,-.03412293802851557,1.0499644368778496]]});Object.assign(ne,{A:[1.0985,1,.35585],C:[.98074,1,1.18232],D55:[.95682,1,.92149],D75:[.94972,1,1.22638],E:[1,1,1],F2:[.99186,1,.67393],F7:[.95041,1,1.08747],F11:[1.00962,1,.6435]});ne.ACES=[.32168/.33767,1,(1-.32168-.33767)/.33767];const tv=[[.6624541811085053,.13400420645643313,.1561876870049078],[.27222871678091454,.6740817658111484,.05368951740793705],[-.005574649490394108,.004060733528982826,1.0103391003129971]],rv=[[1.6410233796943257,-.32480329418479,-.23642469523761225],[-.6636628587229829,1.6153315916573379,.016756347685530137],[.011721894328375376,-.008284441996237409,.9883948585390215]];var jh=new he({id:"acescg",cssId:"--acescg",name:"ACEScg",coords:{r:{range:[0,65504],name:"Red"},g:{range:[0,65504],name:"Green"},b:{range:[0,65504],name:"Blue"}},referred:"scene",white:ne.ACES,toXYZ_M:tv,fromXYZ_M:rv});const In=2**-16,ks=-.35828683,Dn=(Math.log2(65504)+9.72)/17.52;var nv=new he({id:"acescc",cssId:"--acescc",name:"ACEScc",coords:{r:{range:[ks,Dn],name:"Red"},g:{range:[ks,Dn],name:"Green"},b:{range:[ks,Dn],name:"Blue"}},referred:"scene",base:jh,toBase(e){const t=-.3013698630136986;return e.map(function(r){return r<=t?(2**(r*17.52-9.72)-In)*2:r<Dn?2**(r*17.52-9.72):65504})},fromBase(e){return e.map(function(t){return t<=0?(Math.log2(In)+9.72)/17.52:t<In?(Math.log2(In+t*.5)+9.72)/17.52:(Math.log2(t)+9.72)/17.52})}}),Rc=Object.freeze({__proto__:null,A98RGB:H1,A98RGB_Linear:_h,ACEScc:nv,ACEScg:jh,CAM16_JMh:Wb,HCT:Xr,HPLuv:Y1,HSL:Dh,HSLuv:Z1,HSV:Rh,HWB:R1,ICTCP:Js,JzCzHz:Ys,Jzazbz:wh,LCH:Jr,LCHuv:so,Lab:ge,Lab_D65:ea,Luv:Bh,OKLCH:W1,OKLab:or,P3:Ph,P3_Linear:Ah,ProPhoto:z1,ProPhoto_Linear:Vh,REC_2020:Mh,REC_2020_Linear:Bi,REC_2100_HLG:ev,REC_2100_PQ:Q1,XYZ_ABS_D65:ro,XYZ_D50:to,XYZ_D65:Q,sRGB:ur,sRGB_Linear:Ch});class P{constructor(...t){let r;t.length===1&&(r=A(t[0]));let n,i,s;r?(n=r.space||r.spaceId,i=r.coords,s=r.alpha):[n,i,s]=t,Object.defineProperty(this,"space",{value:v.get(n),writable:!1,enumerable:!0,configurable:!0}),this.coords=i?i.slice():[0,0,0],this.alpha=s>1||s===void 0?1:s<0?0:s;for(let a=0;a<this.coords.length;a++)this.coords[a]==="NaN"&&(this.coords[a]=NaN);for(let a in this.space.coords)Object.defineProperty(this,a,{get:()=>this.get(a),set:o=>this.set(a,o)})}get spaceId(){return this.space.id}clone(){return new P(this.space,this.coords,this.alpha)}toJSON(){return{spaceId:this.spaceId,coords:this.coords,alpha:this.alpha}}display(...t){let r=o1(this,...t);return r.color=new P(r.color),r}static get(t,...r){return t instanceof P?t:new P(t,...r)}static defineFunction(t,r,n=r){let{instance:i=!0,returns:s}=n,a=function(...o){let l=r(...o);if(s==="color")l=P.get(l);else if(s==="function<color>"){let c=l;l=function(...d){let u=c(...d);return P.get(u)},Object.assign(l,c)}else s==="array<color>"&&(l=l.map(c=>P.get(c)));return l};t in P||(P[t]=a),i&&(P.prototype[t]=function(...o){return a(this,...o)})}static defineFunctions(t){for(let r in t)P.defineFunction(r,t[r],t[r])}static extend(t){if(t.register)t.register(P);else for(let r in t)P.defineFunction(r,t[r])}}P.defineFunctions({get:pe,getAll:mn,set:Ye,setAll:eo,to:B,equals:l1,inGamut:Mt,toGamut:dt,distance:gh,toString:Br});Object.assign(P,{util:ab,hooks:ut,WHITES:ne,Space:v,spaces:v.registry,parse:mh,defaults:ye});for(let e of Object.keys(Rc))v.register(Rc[e]);for(let e in v.registry)ta(e,v.registry[e]);ut.add("colorspace-init-end",e=>{var t;ta(e.id,e),(t=e.aliases)==null||t.forEach(r=>{ta(r,e)})});function ta(e,t){let r=e.replace(/-/g,"_");Object.defineProperty(P.prototype,r,{get(){let n=this.getAll(e);return typeof Proxy>"u"?n:new Proxy(n,{has:(i,s)=>{try{return v.resolveCoord([t,s]),!0}catch{}return Reflect.has(i,s)},get:(i,s,a)=>{if(s&&typeof s!="symbol"&&!(s in i)){let{index:o}=v.resolveCoord([t,s]);if(o>=0)return i[o]}return Reflect.get(i,s,a)},set:(i,s,a,o)=>{if(s&&typeof s!="symbol"&&!(s in i)||s>=0){let{index:l}=v.resolveCoord([t,s]);if(l>=0)return i[l]=a,this.setAll(e,i),!0}return Reflect.set(i,s,a,o)}})},set(n){this.setAll(e,n)},configurable:!0,enumerable:!0})}P.extend(cr);P.extend({deltaE:Nr});Object.assign(P,{deltaEMethods:cr});P.extend(N1);P.extend({contrast:A1});P.extend(P1);P.extend(u1);P.extend(D1);P.extend(Zn);function zh(e){return Qn(e,(t,r)=>r instanceof P?ue(r.toString({format:"hex"})):zh(r))}const iv="dodgerblue";function ra(e){const t=Math.abs(e.contrast("white","APCA")),r=Math.abs(e.contrast("black","APCA"));return t>r?"white":"black"}function xs({background:e,foreground:t}){return{background:e??new P(ra(t)),foreground:t??new P(ra(e))}}var hi;(function(e){e.Dark="dark",e.Light="light"})(hi||(hi={}));function sv(e){return e==="black"?"white":"black"}const av={black:{foregroundFaint1:new P("#ccc"),foregroundFaint2:new P("#eee")},white:{foregroundFaint1:new P("#ccc"),foregroundFaint2:new P("#eee")}},ov={black:{backgroundFaint1:new P("#666"),backgroundFaint2:new P("#444")},white:{backgroundFaint1:new P("#ccc"),backgroundFaint2:new P("#fafafa")}};function _c({themeColor:e=iv,themeStyle:t=hi.Light}={}){const r=new P(e),n=new P(t===hi.Dark?"black":"white"),i=ra(n),s=new P(i),a={nav:{hover:xs({background:r.clone().set({"hsl.l":93})}),active:xs({background:r.clone().set({"hsl.l":90})}),selected:xs({background:r.clone().set({"hsl.l":85})})},accent:{icon:r.clone().set({"hsl.l":40})},page:{background:n,...ov[sv(i)],foreground:s,...av[i]}};return zh(a)}const mi=ja()("element-book-change-route"),Vc="vira-",{defineElement:Qe,defineElementNoInputs:w$}=jf({assertInputs:e=>{if(!e.tagName.startsWith(Vc))throw new Error(`Tag name should start with '${Vc}' but got '${e.tagName}'`)}}),k=mt({"vira-icon-stroke-color":"currentColor","vira-icon-fill-color":"none","vira-icon-stroke-width":"1px"});function Hc(e){let t;try{t=Reflect.ownKeys(e)}catch{}return t??[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}function lv(e,t="and"){if(e.length<2)return e.join("");const r=e.length>2?", ":" ";return`${e.slice(0,-1).join(r)}${r}${t} ${e[e.length-1]}`}var Bc;(function(e){e.Upper="upper",e.Lower="lower"})(Bc||(Bc={}));var Fc;(function(e){e.FirstThenWait="first-then-wait",e.AfterWait="after-wait"})(Fc||(Fc={}));function Uc(e,t){let r=!1;const n=Hc(e).reduce((i,s)=>{const a=t(s,e[s],e);return a instanceof Promise&&(r=!0),{...i,[s]:a}},{});return r?new Promise(async(i,s)=>{try{await Promise.all(Hc(n).map(async a=>{const o=await n[a];n[a]=o})),i(n)}catch(a){s(a)}}):n}function Wh(){let e,t,r=!1;const n=new Promise((i,s)=>{e=a=>(r=!0,i(a)),t=a=>{r=!0,s(a)}});if(!e||!t)throw new Error(`Reject and resolve callbacks were not set by the promise constructor for ${Wh.name}.`);return{promise:n,resolve:e,reject:t,isSettled(){return r}}}function jc(e){const t=Wh();return e!==1/0&&setTimeout(()=>{t.resolve()},e<=0?0:e),t.promise}function cv(){return globalThis.crypto?globalThis.crypto:require("crypto").webcrypto}cv();const uv="px";function dv(e){return fv({value:e,suffix:uv})}function fv({value:e,suffix:t}){return String(e).endsWith(t)?String(e):`${String(e)}${t}`}function ve({name:e,svgTemplate:t}){return{name:e,svgTemplate:t}}const hv=ve({name:"Check24Icon",svgTemplate:p`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="m17 8.5-7 8-3-3"
                fill="none"
                stroke=${k["vira-icon-stroke-color"].value}
                stroke-width=${k["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),_e=mt({"vira-form-input-radius":"8px"}),gn=$`
    pointer-events: none;
    opacity: 0.3;
    cursor: not-allowed;
`,Ae=mt({"vira-extended-animation-duration":"1.2s","vira-pretty-animation-duration":"300ms","vira-interaction-animation-duration":"84ms"}),Ot=mt({"vira-focus-outline-color":"#59b1ff","vira-focus-outline-border-radius":$`calc(${_e["vira-form-input-radius"].value} + 4px)`});function ao({selector:e,elementBorderSize:t,outlineGap:r=2,outlineWidth:n=2}){const i=ue(dv(n+r+t));return $`
        ${ue(e)}::after {
            content: '';
            top: calc(${i} * -1);
            left: calc(${i} * -1);
            position: absolute;
            width: calc(100% + calc(${i} * 2));
            height: calc(100% + calc(${i} * 2));
            box-sizing: border-box;
            pointer-events: none;
            border: ${n}px solid ${Ot["vira-focus-outline-color"].value};
            border-radius: ${Ot["vira-focus-outline-border-radius"].value};
            z-index: 100;
        }
    `}const at=mt({"vira-form-border-color":"#cccccc","vira-form-background-color":"white","vira-form-foreground-color":"black","vira-form-focus-color":Ot["vira-focus-outline-color"].value,"vira-form-selection-hover-background-color":"#d2eaff","vira-form-selection-hover-foreground-color":"black"}),mv=$`
    padding: 0;
    margin: 0;
`,st=$`
    ${mv};
    cursor: unset;
    background: none;
    border: none;
    font: inherit;
    color: inherit;
    text-transform: inherit;
    text-decoration: inherit;
    -webkit-tap-highlight-color: transparent;
`,zc=$`#e2e2e2`,Gh={menuShadow:$`
        filter: drop-shadow(0px 5px 5px ${zc});
        /*
           This helps force the drop shadow to re-render when the element moves or the page changes.
       */
        will-change: filter;
    `,menuShadowReversed:$`
        filter: drop-shadow(0px -5px 5px ${zc});
        /*
           This helps force the drop shadow to re-render when the element moves or the page changes.
       */
        will-change: filter;
    `},Ke=$`
    /* iOS Safari */
    -webkit-touch-callout: none;
    /* Safari */
    -webkit-user-select: none;
    /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */
    user-select: none;
`,_=Qe()({tagName:"vira-icon",hostClasses:{"vira-icon-fit-container":({inputs:e})=>!!e.fitContainer},styles:({hostClasses:e})=>$`
        :host {
            display: inline-block;
        }

        svg {
            /*
                svg is set to inline by default which causes weird padding under the image.
                See: https://stackoverflow.com/a/34952703
            */
            display: block;
        }

        ${e["vira-icon-fit-container"].selector} svg {
            height: 100%;
            width: 100%;
        }
    `,renderCallback({inputs:e}){return e.icon?e.icon.svgTemplate:""}}),Ms=Qe()({tagName:"vira-dropdown-item",hostClasses:{"vira-dropdown-item-selected":({inputs:e})=>e.selected},styles:({hostClasses:e})=>$`
        :host {
            display: flex;
            ${Ke};
        }

        .option {
            pointer-events: none;
            min-height: 24px;
            display: flex;
            align-items: center;
            padding: 8px;
            padding-left: 0;
            text-align: left;
        }

        ${e["vira-dropdown-item-selected"].selector} ${_} {
            opacity: 1;
        }

        /*
            The check icon looks centered when it has a border.
            However, it does not have a border here.
        */
        ${_} {
            transition: opacity
                ${Ae["vira-interaction-animation-duration"].value};
            opacity: 0;
            margin-top: -4px;
            margin-right: -2px;
            margin-left: 2px;
        }

        .dropdown-wrapper:not(.reverse-direction) .option:last-of-type {
            border-radius: 0 0 ${_e["vira-form-input-radius"].value}
                ${_e["vira-form-input-radius"].value};
        }

        .dropdown-wrapper.reverse-direction .option:first-of-type {
            border-radius: ${_e["vira-form-input-radius"].value}
                ${_e["vira-form-input-radius"].value} 0 0;
        }
    `,renderCallback({inputs:e}){return p`
            <div class="option">
                <${_.assign({icon:hv})}></${_}>
                <slot>${e.label}</slot>
            </div>
        `}}),pv=[(e,t)=>t in e,(e,t)=>t in e.constructor.prototype];function Kh(e,t){return e?pv.some(r=>{try{return r(e,t)}catch{return!1}}):!1}function gv(e){return e.replace(/,/g,"")}var Wc;(function(e){e.Upper="upper",e.Lower="lower"})(Wc||(Wc={}));function wv(e){return typeof e=="number"?e:Number(typeof e=="string"?gv(e):e)}function Gc(e){const t=yv(e);if(t==null)throw new Error(`Cannot convert to a number: ${e}`);return t}function yv(e){const t=wv(e);if(!isNaN(t))return t}function As({max:e,min:t,value:r}){return r>e?t:r<t?e:r}var Kc;(function(e){e.FirstThenWait="first-then-wait",e.AfterWait="after-wait"})(Kc||(Kc={}));function qh(e,t){try{return bv(e,t),!0}catch{return!1}}function bv(e,t,r){if(e.length<t)throw new Error(r?`'${r}' is not at least '${t}' in length.`:`Array is not at least '${t}' in length.`)}function vv(e){try{return JSON.parse(JSON.stringify(e))}catch(t){throw console.error("Failed to JSON copy for",e),t}}function $v(){return globalThis.crypto?globalThis.crypto:require("crypto").webcrypto}$v();function Ev(e,t){return[e,t].filter(r=>r!==void 0).join(",")||""}function Tv(e){const t=e.split(",");return qh(t,2)?{type:"2d",xCord:Gc(t[0]),yCord:Gc(t[1])}:{type:"1d"}}function Sv(e,t){Object.entries(t).forEach(([r,n])=>{T(n,"boolean")&&n?e.setAttribute(r,""):T(n,"boolean")&&!n||n==null?e.removeAttribute(r):e.setAttribute(r,String(n))})}const kv=Xe(class extends Ve{constructor(e){super(e),Object.defineProperty(this,"element",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"lastKey",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.element=fn(e,"modifyElement")}render(e,t){return e!==this.lastKey&&(t(this.element),this.lastKey=e),de}}),Qt={name:"data-nav",selector(e){return e===""?`[${Qt.name}]`:`[${Qt.name}*="${String(e).replace(/"/g,"'")}"]`},css(e){return $`
            ${ue(Qt.selector(e))}
        `}},Gt="nav-activated",na={selector:{click(e){return`${e}.${Gt}`},selected(e){return`${e}:focus`}},css:{click(e){return $`
                ${ue(na.selector.click(e))}
            `},selected(e){return $`
                ${ue(na.selector.selected(e))}
            `}}},xv={activateKeys:["Space","Return","Enter"]};function Mv(){Zh=vv(xv)}let Zh;Mv();function qc(e){return Zh.activateKeys.some(t=>{const r=t.toLowerCase();return r===e.key.toLowerCase()||r===e.code.toLowerCase()})}function Av(e,t){const r=Ev(e,t);return kv(`${e}-${t}`,n=>{const i=n.hasAttribute("tabindex")?{}:{tabindex:0},s={[Qt.name]:r,...i};Ei(n,HTMLElement),Sv(n,s),n.style.getPropertyValue("cursor")||n.style.setProperty("cursor","pointer"),n.addEventListener("mousemove",a=>{a.target===n&&n.focus()},!0),n.addEventListener("mouseleave",a=>{a.target===n&&n.blur()},!0),n.addEventListener("mousedown",a=>{a.target===n&&n.classList.add(Gt)},!0),n.addEventListener("mouseup",a=>{a.target===n&&n.classList.remove(Gt)},!0),n.addEventListener("blur",()=>{n.classList.remove(Gt)},!0),n.addEventListener("keydown",a=>{a.target===n&&qc(a)&&n.classList.add(Gt)},!0),n.addEventListener("keyup",a=>{a.target===n&&qc(a)&&n.classList.remove(Gt)},!0)})}function Cv(e,t){return Yh([],e,t)}function Yh(e,t,r){return!t||t.type==="child"?!1:t.type==="1d"?Zc(t.children,t,0,e,r):t.children.some((n,i)=>Zc(n,t,i,e,r))}function Zc(e,t,r,n,i){return e.some((s,a)=>{const o=Kh(t,"isRoot")?n:n.concat(t);return i(o,s,{x:a,y:r})?!0:Yh(o,s,i)})}function ji(e){if(!e)return;let t,r,n;Cv(e,(s,a,o)=>a.element.matches(":focus")?(t=s,r=a,n=o,!0):!1);const i=t?(t==null?void 0:t.slice(-1)[0])||e:void 0;if(!(!r||!i||!n))return{node:r,parent:i,coords:n}}function pi(e){e.scrollIntoView({behavior:"smooth",inline:"center",block:"center"}),e.focus()}function Pv(e){var n;if(!e)return{success:!1,reason:"no nav tree"};const t=ji(e);if(!t)return{success:!1,reason:"no focused node to enter into"};if(t.node.type==="child"||!t.node.children.length)return{success:!1,reason:"no children to enter into"};const r=t.node.type==="1d"?t.node.children[0]:(n=t.node.children[0])==null?void 0:n[0];return r?(pi(r.element),{success:!0,defaulted:!1,wrapped:!1,newElement:r.element}):{success:!1,reason:"failed to find first child to enter into"}}function Lv(e){if(!e)return{success:!1,reason:"no nav tree"};const t=ji(e);if(!t)return{success:!1,reason:"no focused node to exit out of"};if(Kh(t.parent,"isRoot"))return{success:!1,reason:"at top level nav already, nothing to exit to"};const r=t.parent;return pi(r.element),{success:!0,defaulted:!1,wrapped:!1,newElement:r.element}}function Ov(e){var r;return[...e.children,...((r=e.shadowRoot)==null?void 0:r.children)??[]]}function Jh(e){const t=[];return Ov(e).forEach(r=>{if(!(r instanceof HTMLElement))return;const n=Jh(r),i=r.hasAttribute(Qt.name)?Tv(r.getAttribute(Qt.name)||""):void 0;if(!i){t.push(...n);return}t.push({children:n,element:r,navValue:i})}),t}function Nv(e){const t=Jh(e);return Xh(t)}function Xh(e){if(!qh(e,1))return;const t=e[0].navValue.type,r={type:t,children:[],isRoot:!0};return e.forEach(n=>{const i=n.children.length?Xh(n.children):void 0,s=i?{element:n.element,children:i.children,type:i.type}:{element:n.element,type:"child"};if(n.navValue.type==="2d"&&r.type==="2d"){r.children[n.navValue.xCord]||(r.children[n.navValue.xCord]=[]);const a=r.children[n.navValue.xCord];if(a[n.navValue.yCord])throw new Error(`Parent already has child at ${n.navValue.xCord},${n.navValue.yCord}`);a[n.navValue.yCord]=s}else if(n.navValue.type==="1d"&&r.type==="1d")r.children.push(s);else if(t!==n.navValue.type){const a=new Error("child nav does not match parent nav type");throw console.error(a,n),a}}),r}function Yc(e,t){return e>t}function Jc(e,t){return e<t}var Te;(function(e){e.Up="up",e.Down="down",e.Left="left",e.Right="right"})(Te||(Te={}));function Iv(e,t,r){var o;if(!e)return{success:!1,reason:"no nav tree"};const n=ji(e);if(!n){const l=e.type==="1d"?e.children[0]:(o=e.children[0])==null?void 0:o[0];return l?(pi(l.element),{success:!0,wrapped:!1,defaulted:!0,newElement:l.element}):{success:!1,reason:"no default element to focus"}}const{nextNode:i,requiresWrapping:s}=Dv(n.parent,t,n),a=r?!0:!s;return(i==null?void 0:i.element)===n.node.element?{success:!1,reason:"no other nodes to navigate to"}:i&&a?(pi(i.element),{success:!0,defaulted:!1,newElement:i.element,wrapped:s}):i?a?{success:!1,reason:"no conditions matched"}:{success:!1,reason:"not allowed to wrap"}:{success:!1,reason:"failed to find node to focus"}}function Dv(e,t,r){var i,s;if(t===Te.Down||t===Te.Up){const a=t===Te.Down?Jc:Yc,o=t===Te.Down?1:-1,l=e.type==="1d"?0:As({value:r.coords.y+o,min:0,max:e.children.length-1}),c=e.type==="2d"?e.children[l]:void 0,d={x:e.type==="1d"?As({value:r.coords.x+o,min:0,max:e.children.length-1}):c&&r.coords.x>=c.length?c.length-1:r.coords.x,y:l},u=e.type==="1d"?e.children[d.x]:(i=e.children[d.y])==null?void 0:i[d.x],f=e.type==="1d"?a(d.x,r.coords.x):a(d.y,r.coords.y);return{nextNode:u,requiresWrapping:f}}else{const a=t===Te.Right?Jc:Yc,o=t===Te.Right?1:-1,l=e.type==="1d"?e.children:e.children[r.coords.y];ed(l,`No current row found at y index: '${r.coords.y}'`);const c={x:As({value:r.coords.x+o,min:0,max:l.length-1}),y:r.coords.y},d=a(c.x,r.coords.x);return{nextNode:e.type==="1d"?e.children[c.x]:(s=e.children[c.y])==null?void 0:s[c.x],requiresWrapping:d}}}let Qh=class{constructor(t){Object.defineProperty(this,"rootElement",{enumerable:!0,configurable:!0,writable:!0,value:t})}getCurrentlyFocused(){return ji(this.buildNavTree())}buildNavTree(){return Nv(this.rootElement)}navigate({direction:t,allowWrapping:r}){return Iv(this.buildNavTree(),t,r)}enterInto(){return Pv(this.buildNavTree())}exitOutOf(){return Lv(this.buildNavTree())}navigatePibling(t){const r=this.exitOutOf();if(!r.success)return r;const n=this.navigate(t);if(!n.success)return n;const i=this.enterInto();return i.success?i:n}};const Rv={option:"dropdown-option"},Rn=Qe()({tagName:"vira-dropdown-options",events:{selectionChange:ie()},styles:$`
        :host {
            display: flex;
            flex-direction: column;

            pointer-events: auto;
            width: 100%;
            max-height: 100%;
            overflow-y: auto;
            z-index: 99;
            border-radius: ${_e["vira-form-input-radius"].value};
            border-top-left-radius: 0;
            border-top-right-radius: 0;
            background-color: ${at["vira-form-background-color"].value};
            border: 1px solid ${at["vira-form-border-color"].value};
            color: ${at["vira-form-foreground-color"].value};
            ${Gh.menuShadow}
        }

        .dropdown-item {
            background-color: white;
            outline: none;
        }

        ${na.css.selected(".dropdown-item:not(.disabled)")} {
            background-color: ${at["vira-form-selection-hover-background-color"].value};
            outline: none;
        }

        ${Ms} {
            pointer-events: none;
        }

        .dropdown-item.disabled {
            ${gn};
            pointer-events: auto;
        }
    `,renderCallback({inputs:e,dispatch:t,events:r}){const n=e.options.map(i=>{const s=i.template||p`
                    <${Ms.assign({label:i.label,selected:e.selectedOptions.includes(i)})}></${Ms}>
                `;return p`
                <div
                    class="dropdown-item ${We({disabled:!!i.disabled})}"
                    ${qt(Rv.option)}
                    title=${Cf(i.hoverText||void 0)}
                    role="option"
                    ${i.disabled?N:Av()}
                    ${R("mousedown",a=>{a.stopPropagation()})}
                    ${R("mouseup",a=>{a.stopPropagation(),i.disabled||t(new r.selectionChange(i))})}
                >
                    ${s}
                </div>
            `});return p`
            <slot>${n}</slot>
        `}}),_v=ve({name:"ChevronUp24Icon",svgTemplate:p`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${k["vira-icon-stroke-color"].value}
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${k["vira-icon-stroke-width"].value}
                d="M6 15 L12 9 18 15"
            />
        </svg>
    `}),Vv=ve({name:"CloseX24Icon",svgTemplate:p`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <circle
                cx="12"
                cy="12"
                r="8"
                fill=${k["vira-icon-fill-color"].value}
                stroke=${k["vira-icon-stroke-color"].value}
                stroke-width=${k["vira-icon-stroke-width"].value}
            />
            <path
                d="M9 8.5l6 7m0 -7l-6 7"
                fill="none"
                stroke=${k["vira-icon-stroke-color"].value}
                stroke-width=${k["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),Hv=ve({name:"Element16Icon",svgTemplate:p`
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
            <path
                d="M4 5 1 8l3 3m8-6 3 3-3 3m-5 0 2-6"
                fill="none"
                stroke=${k["vira-icon-stroke-color"].value}
                stroke-width=${k["vira-icon-stroke-width"].value}
            />
        </svg>
    `});ve({name:"Element24Icon",svgTemplate:p`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="m7 7-5 5 5 5M17 7l5 5-5 5m-6 0 2-10"
                fill="none"
                stroke=${k["vira-icon-stroke-color"].value}
                stroke-width=${k["vira-icon-stroke-width"].value}
            />
        </svg>
    `});const Bv=ve({name:"EyeClosed24Icon",svgTemplate:p`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill=${k["vira-icon-fill-color"].value}
            stroke=${k["vira-icon-stroke-color"].value}
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${k["vira-icon-stroke-width"].value}
                d="M4 20 20 4M18.4 8.54C20 10.28 21 12 21 12s-4.03 7-9 7a6.53 6.53 0 0 1-3.16-.9M5.6 15.46C4 13.72 3 12 3 12s4.03-7 9-7c1.11 0 2.18.35 3.16.9"
            />
        </svg>
    `}),Fv=ve({name:"EyeOpen24Icon",svgTemplate:p`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill=${k["vira-icon-fill-color"].value}
            stroke=${k["vira-icon-stroke-color"].value}
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${k["vira-icon-stroke-width"].value}
                d="M12 5c5 0 9 7 9 7s-4 7-9 7-9-7-9-7 4-7 9-7Zm0 4a3 3 0 1 1 0 6 3 3 0 0 1 0-6Z"
            />
        </svg>
    `}),Uv=ve({name:"Loader24Icon",svgTemplate:p`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            class="loader-animated-24-icon"
        >
            <path
                d="M12 8V2M16 12h6M12 16v6M8 12H2M9.17 9.17 4.93 4.93M14.83 9.17l4.24-4.24M14.83 14.83l4.24 4.24M9.17 14.83l-4.24 4.24"
                fill="none"
                stroke=${k["vira-icon-stroke-color"].value}
                stroke-width=${k["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),jv=$`
    @keyframes loader-animated-spin {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }

    svg {
        animation: ${Ae["vira-extended-animation-duration"].value} linear
            loader-animated-spin infinite;
    }
`,em=ve({name:"LoaderAnimated24Icon",svgTemplate:p`
        <style>
            ${jv}
        </style>
        ${Uv.svgTemplate}
    `}),zv=ve({name:"Options24Icon",svgTemplate:p`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <g
                fill=${k["vira-icon-fill-color"].value}
                stroke=${k["vira-icon-stroke-color"].value}
                stroke-width=${k["vira-icon-stroke-width"].value}
            >
                <circle cx="9.5" cy="5.5" r="2.5" />
                <circle cx="16.5" cy="12.5" r="2.5" />
                <circle cx="8.5" cy="18.5" r="2.5" />
            </g>
            <path
                d="M3 5.5h3.5m5 0h8.5M3 12.5h11m5 0h2M3 18.5h3m5 0h10"
                fill="none"
                stroke="${k["vira-icon-stroke-color"].value}"
                stroke-width=${k["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),Wv=ve({name:"StatusFailure24Icon",svgTemplate:p`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <circle
                cx="12"
                cy="12"
                r="10"
                fill=${k["vira-icon-fill-color"].value}
                stroke=${k["vira-icon-stroke-color"].value}
                stroke-width=${k["vira-icon-stroke-width"].value}
            />
            <path
                d="M8 16.5 L16 7.5 M8 7.5 L16 16.5"
                fill="none"
                stroke=${k["vira-icon-stroke-color"].value}
                stroke-width=${k["vira-icon-stroke-width"].value}
            />
        </svg>
    `});ve({name:"StatusInProgress24Icon",svgTemplate:p`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <circle
                cx="12"
                cy="12"
                r="10"
                fill=${k["vira-icon-fill-color"].value}
                stroke=${k["vira-icon-stroke-color"].value}
                stroke-width=${k["vira-icon-stroke-width"].value}
            />
            <circle
                cx="7"
                cy="12"
                r="1"
                fill=${k["vira-icon-stroke-color"].value}
                stroke=${k["vira-icon-stroke-color"].value}
                stroke-width="calc(${k["vira-icon-stroke-width"].value} - 1px)"
            />
            <circle
                cx="12"
                cy="12"
                r="1"
                fill=${k["vira-icon-stroke-color"].value}
                stroke=${k["vira-icon-stroke-color"].value}
                stroke-width="calc(${k["vira-icon-stroke-width"].value} - 1px)"
            />
            <circle
                cx="17"
                cy="12"
                r="1"
                fill=${k["vira-icon-stroke-color"].value}
                stroke=${k["vira-icon-stroke-color"].value}
                stroke-width="calc(${k["vira-icon-stroke-width"].value} - 1px)"
            />
        </svg>
    `});ve({name:"StatusSuccess24Icon",svgTemplate:p`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <circle
                cx="12"
                cy="12"
                r="10"
                fill=${k["vira-icon-fill-color"].value}
                stroke=${k["vira-icon-stroke-color"].value}
                stroke-width=${k["vira-icon-stroke-width"].value}
            />
            <path
                d="m17 8.5-7 8-3-3"
                fill="none"
                stroke=${k["vira-icon-stroke-color"].value}
                stroke-width=${k["vira-icon-stroke-width"].value}
            />
        </svg>
    `});function gi(e){if(e instanceof ShadowRoot)return gi(e.host);const t=e.parentNode;if(t)return t instanceof Element?t:gi(t)}function tm(e,t){if(t(e))return e;const r=gi(e);if(r)return tm(r,t)}function Gv(e){const t=gi(e);return t&&tm(t,r=>globalThis.getComputedStyle(r).overflowY!=="visible")||document.body}function Kv(e,t,r={}){const n=r.useOriginalTarget?e.target:e.currentTarget;if(!(n instanceof t)){const i=t.name,s=n==null?void 0:n.constructor.name,a=r.useOriginalTarget?`Current target from event '${e.type}' was not of type '${i}'. Got '${s}'.`:`Target from event '${e.type}' was not of type '${i}'. Got '${s}'.`;throw new Error(a)}return n}class qv extends wf{constructor(){super({defaultValue:document.hidden,equalityCheck:pa}),globalThis.addEventListener("visibilitychange",r=>this.updateVisibility(r));const t=r=>this.updateVisibility(r);globalThis.onpageshow=t,globalThis.onpagehide=t,globalThis.onfocus=t,globalThis.onblur=t}updateVisibility(t){const r=Yv.includes(t.type),n=Zv.includes(t.type),i=r?!0:n?!1:document.hasFocus()||!document.hidden;this.setValue(i)}}const Zv=["blur","focusout","pagehide"],Yv=["focus","focusin","pageshow"],Jv=new qv;function Xv(e,t){return Jv.listen(e,t)}const Xc={top:0,left:0,right:0,bottom:0};class rm extends rn("hide-pop-up"){}class nm extends be()("nav-select"){}class Qv{constructor(t){Object.defineProperty(this,"listenTarget",{enumerable:!0,configurable:!0,writable:!0,value:new va}),Object.defineProperty(this,"options",{enumerable:!0,configurable:!0,writable:!0,value:{minDownSpace:200,verticalDiffThreshold:20,supportNavigation:!0}}),Object.defineProperty(this,"cleanupCallbacks",{enumerable:!0,configurable:!0,writable:!0,value:[]}),Object.defineProperty(this,"lastRootElement",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.options={...this.options,...t}}attachGlobalListeners(t){const r=new Qh(t);this.cleanupCallbacks=[Xv(!1,n=>{n||this.removePopUp()}),$t("mousedown",n=>{this.lastRootElement&&n.composedPath().includes(this.lastRootElement)||this.removePopUp()},{passive:!0}),$t("keydown",n=>{const i=n.code;if(i==="Escape")this.removePopUp();else if(this.options.supportNavigation){if(i==="ArrowDown")n.stopImmediatePropagation(),n.preventDefault(),r.navigate({direction:Te.Down,allowWrapping:!1});else if(i==="ArrowUp")n.stopImmediatePropagation(),n.preventDefault(),r.navigate({direction:Te.Up,allowWrapping:!1});else if(i==="ArrowLeft")n.stopImmediatePropagation(),n.preventDefault(),r.navigate({direction:Te.Left,allowWrapping:!1});else if(i==="ArrowRight")n.stopImmediatePropagation(),n.preventDefault(),r.navigate({direction:Te.Right,allowWrapping:!1});else if(i==="Enter"||i==="Return"){const s=r.getCurrentlyFocused();s&&(r.enterInto(),this.listenTarget.dispatch(new nm({detail:s.coords})),n.stopImmediatePropagation(),n.preventDefault())}}})]}listen(t,r,n){return this.listenTarget.listen(t,r,n)}removePopUp(){this.cleanupCallbacks.forEach(t=>t()),this.listenTarget.dispatch(new rm)}showPopUp(t,r){this.lastRootElement=t;const n={...this.options,...r},i=Gv(t);Ei(i,HTMLElement);const s=t.getBoundingClientRect(),a=i.getBoundingClientRect(),o=i.offsetWidth-i.clientWidth,l=i.offsetHeight-i.clientHeight,c=i===document.body?{top:0,left:0,right:globalThis.innerWidth,bottom:globalThis.innerHeight}:{top:a.top,left:a.left,right:a.right-o,bottom:a.bottom-l},d=Uc(Xc,h=>s[h]),u=Uc(Xc,h=>{const m=c[h],g=d[h];return Math.abs(m-g)}),f=u.top>u.bottom+n.verticalDiffThreshold&&u.bottom<n.minDownSpace;return this.attachGlobalListeners(t),{popDown:!f,positions:{container:c,root:d,diff:u}}}destroy(){this.removePopUp(),this.listenTarget.destroy()}}function e2({selected:e,options:t,isMultiSelect:r}){if(e.length&&t.length){const n=t.filter(i=>e.includes(i.id));return n.length>1&&!r?(console.error(`${r2.tagName} has multiple selections but \`isMultiSelect\` is not \`true\`. Truncating to the first selection.`),n.slice(0,1)):n}else return[]}function t2(e){const t=new Set,r=[];if(e.forEach(n=>{t.has(n.id)?r.push(n.id):t.add(n.id)}),r.length)throw new Error(`Duplicate option ids were given to ViraDropdown: ${lv(r)}`)}function Qc(e,t,r){return r?t.includes(e)?t.filter(n=>n!==e):[...t,e]:[e]}function eu({open:e,emitEvent:t},{updateState:r,popUpManager:n,dispatch:i,host:s}){e?r({showPopUpResult:n.showPopUp(s)}):n.removePopUp(),t&&i(e)}const _n={trigger:"dropdown-trigger",icon:"dropdown-icon",prefix:"dropdown-prefix",options:"dropdown-options"},r2=Qe()({tagName:"vira-dropdown",hostClasses:{"vira-dropdown-disabled":({inputs:e})=>!!e.isDisabled},styles:({hostClasses:e})=>$`
        :host {
            display: inline-flex;
            vertical-align: middle;
            width: 256px;
            ${Ot["vira-focus-outline-color"].name}: ${at["vira-form-focus-color"].value};
            position: relative;
            max-width: 100%;
        }

        .dropdown-wrapper {
            ${st};
            max-width: 100%;
            align-self: stretch;
            flex-grow: 1;
            position: relative;
            border-radius: ${_e["vira-form-input-radius"].value};
            transition: border-radius
                ${Ae["vira-interaction-animation-duration"].value};
            outline: none;
        }

        ${ao({selector:".dropdown-wrapper:focus",elementBorderSize:1})}

        .selection-display {
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }

        .trigger-icon {
            transform: rotate(0);
            transition: ${Ae["vira-interaction-animation-duration"].value}
                linear transform;
            align-self: flex-start;
        }

        .trigger-icon-wrapper {
            flex-grow: 1;
            display: flex;
            justify-content: flex-end;
        }

        .dropdown-wrapper.open .trigger-icon {
            transform: rotate(180deg);
        }

        .dropdown-wrapper.open:not(.open-upwards) {
            border-bottom-left-radius: 0;
        }

        .open-upwards.dropdown-wrapper.open {
            border-top-left-radius: 0;
        }

        .dropdown-trigger {
            border: 1px solid ${at["vira-form-border-color"].value};
            height: 100%;
            width: 100%;
            transition: inherit;
            box-sizing: border-box;
            display: flex;
            gap: 8px;
            text-align: left;
            align-items: center;
            padding: 3px;
            padding-left: 10px;
            ${Ke};
            border-radius: inherit;
            background-color: ${at["vira-form-background-color"].value};
            color: ${at["vira-form-foreground-color"].value};
        }

        .open-upwards ${Rn} {
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
            ${Gh.menuShadowReversed}
        }

        ${e["vira-dropdown-disabled"].selector} {
            ${gn}
            pointer-events: auto;
        }

        ${e["vira-dropdown-disabled"].selector} .dropdown-wrapper {
            pointer-events: none;
        }

        .pop-up-positioner {
            position: absolute;
            pointer-events: none;
            display: flex;
            flex-direction: column;

            /* highest possible z-index */
            z-index: 2147483647;
            /* space for the caret icon */
            right: 28px;
            /* minus the border width */
            top: calc(100% - 1px);
        }

        .using-placeholder {
            opacity: 0.4;
        }

        .open-upwards .pop-up-positioner {
            flex-direction: column-reverse;
            /* minus the border width */
            bottom: calc(100% - 1px);
        }
    `,events:{selectedChange:ie(),openChange:ie()},stateInitStatic:{showPopUpResult:void 0,popUpManager:Uf(()=>new Qv),navController:void 0},cleanupCallback({state:e,updateState:t}){t({showPopUpResult:void 0}),e.popUpManager.destroy()},initCallback({state:e,updateState:t,host:r,inputs:n,dispatch:i,events:s}){e.popUpManager.listen(rm,()=>{if(t({showPopUpResult:void 0}),!n.isDisabled){const a=r.shadowRoot.querySelector(".dropdown-wrapper");Ei(a,HTMLButtonElement,"failed to find dropdown wrapper child"),a.focus()}}),e.popUpManager.listen(nm,a=>{const o=a.detail.x,l=n.options[o];if(!l)throw new Error(`Found no dropdown option at index '${o}'`);n.isMultiSelect||eu({emitEvent:!0,open:!1},{dispatch:c=>{i(new s.openChange(c))},host:r,popUpManager:e.popUpManager,updateState:t}),i(new s.selectedChange(Qc(l.id,n.selected,!!n.isMultiSelect)))}),t({navController:new Qh(r)})},renderCallback({dispatch:e,events:t,state:r,inputs:n,updateState:i,host:s}){var m;t2(n.options);function a(g){eu(g,{dispatch:y=>{e(new t.openChange(y))},host:s,popUpManager:r.popUpManager,updateState:i})}n.isDisabled?a({open:!1,emitEvent:!1}):n.z_debug_forceOpenState!=null&&(!n.z_debug_forceOpenState&&r.showPopUpResult?a({emitEvent:!1,open:!1}):n.z_debug_forceOpenState&&!r.showPopUpResult&&a({emitEvent:!1,open:!0}));const o=e2(n),l=n.icon?p`
                  <${_.assign({icon:n.icon})}
                      ${qt(_n.icon)}
                  ></${_}>
              `:"",c=r.showPopUpResult?r.showPopUpResult.popDown?$`
                      bottom: -${r.showPopUpResult.positions.diff.bottom}px;
                  `:$`
                      top: -${r.showPopUpResult.positions.diff.top}px;
                  `:void 0;function d(){a({emitEvent:!0,open:!r.showPopUpResult})}const u=!o.length,f=n.selectionPrefix&&!u?p`
                      <span class="selected-label-prefix" ${qt(_n.prefix)}>
                          ${n.selectionPrefix}
                      </span>
                  `:"",h=u?n.placeholder||"":o.map(g=>g.label).join(", ");return p`
            <button
                ?disabled=${!!n.isDisabled}
                class="dropdown-wrapper ${We({open:!!r.showPopUpResult,"open-upwards":!((m=r.showPopUpResult)!=null&&m.popDown)})}"
                ${qt(_n.trigger)}
                role="listbox"
                aria-expanded=${!!r.showPopUpResult}
                ${R("keydown",g=>{!r.showPopUpResult&&g.code.startsWith("Arrow")&&a({emitEvent:!0,open:!0})})}
                ${R("click",g=>{g.detail===0&&d()})}
                ${R("mousedown",g=>{g.button===0&&d()})}
            >
                <div class="dropdown-trigger">
                    ${l}
                    <span
                        class="selection-display ${We({"using-placeholder":u})}"
                        title=${Cf(u?h:void 0)}
                    >
                        ${f} ${h}
                    </span>
                    <span class="trigger-icon-wrapper">
                        <${_.assign({icon:_v})}
                            class="trigger-icon"
                        ></${_}>
                    </span>
                </div>
                <div class="pop-up-positioner" style=${c}>
                    ${Me(!!r.showPopUpResult,p`
                            <${Rn.assign({options:n.options,selectedOptions:o})}
                                ${R(Rn.events.selectionChange,g=>{n.isMultiSelect||a({emitEvent:!0,open:!1}),e(new t.selectedChange(Qc(g.detail.id,n.selected,!!n.isMultiSelect)))})}
                                ${qt(_n.options)}
                            ></${Rn}>
                        `)}
                </div>
            </button>
        `}});var ia;(function(e){e.Default="vira-button-default",e.Outline="vira-button-outline"})(ia||(ia={}));const tu=Qe()({tagName:"vira-button",hostClasses:{"vira-button-outline-style":({inputs:e})=>e.buttonStyle===ia.Outline,"vira-button-disabled":({inputs:e})=>!!e.disabled},cssVars:{"vira-button-primary-color":"#0a89ff","vira-button-primary-hover-color":"#59b1ff","vira-button-primary-active-color":"#007ff6","vira-button-secondary-color":"#ffffff","vira-button-padding":"5px 10px","vira-button-internal-foreground-color":"","vira-button-internal-background-color":""},styles:({hostClasses:e,cssVars:t})=>$`
        :host {
            font-weight: bold;
            display: inline-flex;
            position: relative;
            vertical-align: middle;
            align-items: center;
            box-sizing: border-box;
            ${Ke};
            ${t["vira-button-internal-background-color"].name}: ${t["vira-button-primary-color"].value};
            ${t["vira-button-internal-foreground-color"].name}: ${t["vira-button-secondary-color"].value};
            ${Ot["vira-focus-outline-color"].name}: ${t["vira-button-primary-hover-color"].value}
        }

        :host(:hover) button,
        button:hover {
            ${t["vira-button-internal-background-color"].name}: ${t["vira-button-primary-hover-color"].value};
        }

        :host(:active) button,
        button:active {
            ${t["vira-button-internal-background-color"].name}: ${t["vira-button-primary-active-color"].value};
        }

        ${e["vira-button-disabled"].selector} {
            ${gn};
        }

        ${e["vira-button-outline-style"].selector} button {
            color: ${t["vira-button-internal-background-color"].value};
            background-color: transparent;
            border-color: currentColor;
        }

        button {
            ${st};
            cursor: pointer;
            position: relative;
            width: 100%;
            height: 100%;
            outline: none;
            border: 2px solid transparent;
            box-sizing: border-box;
            display: inline-flex;
            justify-content: center;
            align-items: center;
            border-radius: ${_e["vira-form-input-radius"].value};
            background-color: ${t["vira-button-internal-background-color"].value};
            color: ${t["vira-button-internal-foreground-color"].value};
            padding: ${t["vira-button-padding"].value};
            transition:
                color ${Ae["vira-interaction-animation-duration"].value},
                background-color
                    ${Ae["vira-interaction-animation-duration"].value},
                border-color ${Ae["vira-interaction-animation-duration"].value};
        }

        ${ao({selector:"button:focus:focus-visible:not(:active):not([disabled])",elementBorderSize:2})}

        button ${_} + .text-template {
            margin-left: 8px;
        }
    `,renderCallback:({inputs:e})=>{const t=e.icon?p`
                  <${_.assign({icon:e.icon})}></${_}>
              `:"",r=e.text?p`
                  <span class="text-template">${e.text}</span>
              `:"";return p`
            <button ?disabled=${e.disabled}>${t} ${r}</button>
        `}});Qe()({tagName:"vira-collapsible-wrapper",hostClasses:{"vira-collapsible-wrapper-expanded":({inputs:e})=>e.expanded},slotNames:["header"],styles:({hostClasses:e})=>$`
        :host {
            display: flex;
            flex-direction: column;
        }

        .header-wrapper {
            ${st};
            cursor: pointer;
        }

        .content-wrapper,
        .collapsing-element {
            display: flex;
            flex-direction: column;
            box-sizing: border-box;
        }

        .collapsing-element {
            transition: height ${Ae["vira-pretty-animation-duration"].value};
            overflow: hidden;
        }
        ${e["vira-collapsible-wrapper-expanded"].name} .collapsing-element {
            pointer-events: none;
        }
    `,events:{expandChange:ie()},stateInitStatic:{contentHeight:0},renderCallback({state:e,slotNames:t,updateState:r,dispatch:n,events:i,inputs:s}){const a=s.expanded?$`
                  height: ${e.contentHeight}px;
              `:$`
                  height: 0;
              `;return p`
            <button
                class="header-wrapper"
                ${R("click",()=>{n(new i.expandChange(!s.expanded))})}
            >
                <slot name=${t.header}>Header</slot>
            </button>
            <div class="collapsing-element" style=${a} disabled="disabled">
                <div
                    ${Ff(({contentRect:o})=>{r({contentHeight:o.height})})}
                    class="content-wrapper"
                >
                    <slot></slot>
                </div>
            </div>
        `}});var wi;(function(e){e.Loading="loading",e.Error="error"})(wi||(wi={}));Qe()({tagName:"vira-image",hostClasses:{"vira-image-height-constrained":({inputs:e})=>e.dominantDimension==="height"},events:{imageLoad:ie(),imageError:ie()},styles:({hostClasses:e})=>$`
        :host {
            display: inline-flex;
            overflow: hidden;
            flex-direction: column;
            justify-content: center;
            position: relative;
            border-radius: inherit;
            min-height: 100px;
            min-width: 100px;
        }

        img {
            width: 100%;
            height: auto;
            flex-shrink: 0;
        }
        ${e["vira-image-height-constrained"].selector} {
            flex-direction: row;
        }

        ${e["vira-image-height-constrained"].selector} img {
            width: auto;
            height: 100%;
        }

        .status-wrapper {
            overflow: hidden;
            border-radius: inherit;
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .error {
            color: red;
        }

        .hidden {
            display: none;
        }
    `,stateInitStatic:{loadedUrls:{},erroredUrls:{}},renderCallback({inputs:e,state:t,updateState:r,dispatch:n,events:i}){const s=e.imageUrl,a=t.erroredUrls[s]?p`
                  <slot class="status-wrapper" name=${wi.Error}>
                      <${_.assign({icon:Wv})} class="error"></${_}>
                  </slot>
              `:t.loadedUrls[s]?void 0:p`
                    <slot class="status-wrapper" name=${wi.Loading}>
                        <${_.assign({icon:em})}></${_}>
                    </slot>
                `;return p`
            ${Me(!!a,a)}
            <img
                class=${We({hidden:!!a})}
                ${R("load",async()=>{e._debugLoadDelay&&await jc(e._debugLoadDelay.milliseconds),r({loadedUrls:{...t.loadedUrls,[s]:!0}}),n(new i.imageLoad)})}
                ${R("error",async o=>{e._debugLoadDelay&&await jc(e._debugLoadDelay.milliseconds),r({erroredUrls:{...t.erroredUrls,[s]:!0}}),n(new i.imageError(o.error))})}
                src=${s}
            />
        `}});function sa({input:e,matcher:t}){return!e||!t?!0:e.length>1?!!e.split("").every(r=>sa({input:r,matcher:t})):t instanceof RegExp?!!e.match(t):t.includes(e)}function im({value:e,allowed:t,blocked:r}){const n=t?sa({input:e,matcher:t}):!0,i=r?sa({input:e,matcher:r}):!1;return n&&!i}function sm(e){if(!e.value)return{filtered:e.value,blocked:""};const{filtered:t,blocked:r}=e.value.split("").reduce((n,i)=>(im({...e,value:i})?n.filtered.push(i):n.blocked.push(i),n),{filtered:[],blocked:[]});return{filtered:t.join(""),blocked:r.join("")}}function n2({inputs:e,filteredValue:t,event:r,inputBlockedCallback:n,newValueCallback:i}){if(!(r instanceof InputEvent))throw new Error("Text input event was not an InputEvent.");const s=Kv(r,HTMLInputElement),a=r.data,o=t;let l=s.value??"";if(a)if(a.length===1)im({value:a,allowed:e.allowedInputs,blocked:e.blockedInputs})||(l=o,n(a));else{const{filtered:c,blocked:d}=sm({value:a,allowed:e.allowedInputs,blocked:e.blockedInputs});l=c,n(d)}s.value!==l&&(s.value=l),o!==l&&i(l)}var er;(function(e){e.Default="text",e.Password="password",e.Email="email"})(er||(er={}));const Yn=Qe()({tagName:"vira-input",hostClasses:{"vira-input-disabled":({inputs:e})=>!!e.disabled,"vira-input-fit-text":({inputs:e})=>!!e.fitText,"vira-input-clear-button-shown":({inputs:e})=>!!e.showClearButton},cssVars:{"vira-input-background-color":"white","vira-input-placeholder-color":"#cccccc","vira-input-text-color":"#000000","vira-input-border-color":"#cccccc","vira-input-focus-border-color":Ot["vira-focus-outline-color"].default,"vira-input-text-selection-color":"#cfe9ff","vira-input-action-button-color":"#aaaaaa","vira-input-clear-button-hover-color":"#ff0000","vira-input-clear-button-active-color":"#b30000","vira-input-show-password-button-hover-color":"#0a89ff","vira-input-show-password-button-active-color":"#0261ba","vira-input-padding-horizontal":"10px","vira-input-padding-vertical":"6px"},events:{valueChange:ie(),inputBlocked:ie()},styles:({hostClasses:e,cssVars:t})=>$`
            :host {
                position: relative;
                display: inline-flex;
                width: 224px;
                box-sizing: border-box;
                ${Ot["vira-focus-outline-color"].name}: ${t["vira-input-focus-border-color"].value};
                color: ${t["vira-input-text-color"].value};
            }

            ${e["vira-input-disabled"].selector} {
                ${gn};
            }

            ${e["vira-input-fit-text"].selector} {
                width: unset;
            }
            ${e["vira-input-fit-text"].selector} input {
                flex-grow: 0;
            }
            ${e["vira-input-fit-text"].selector} input.has-value {
                /*
                    Account for weird Safari <input> behavior with text alignment and size. so we
                    don't lose a pixel on the left side.
                    Only apply this when <input> has a value, otherwise externally-set width and a
                    placeholder input will cause the text selector bar to initially be in the center
                    of the element.
                */
                text-align: center;
            }
            ${e["vira-input-fit-text"].selector} .size-span {
                ${st};
                font-family: inherit;
                display: inline-block;
                font-size: inherit;
                line-height: inherit;
                box-sizing: border-box;
                position: absolute;
                opacity: 0;
                visibility: hidden;
                pointer-events: none;
                z-index: -1;
                width: min-content;
                ${Ke};
                vertical-align: middle;
                max-height: 100%;
            }

            ${e["vira-input-clear-button-shown"].selector} label {
                padding-right: 4px;
            }

            pre {
                ${st};
                font: inherit;
                /*
                    Leave at least a few pixels for the cursor bar when there is no text at all.
                    This also accounts for a weird Safari <input> behavior where the text moves
                    around if it's not given a tiny bit of padding.
                */
                padding-left: 2px;
                display: block;
            }

            .border-style {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                border-radius: ${_e["vira-form-input-radius"].value};
                z-index: 0;
                pointer-events: none;
            }

            .label-border {
                top: -1px;
                left: -1px;
                border: 1px solid ${t["vira-input-border-color"].value};
                transition: border
                    ${Ae["vira-interaction-animation-duration"].value};
            }

            label {
                ${st};
                max-width: 100%;
                flex-grow: 1;
                display: inline-flex;
                box-sizing: border-box;
                align-items: center;
                position: relative;
                padding: 0 ${t["vira-input-padding-horizontal"].value};
                border-radius: ${_e["vira-form-input-radius"].value};
                background-color: ${t["vira-input-background-color"].value};
                /*
                    Border colors are actually applied via the .label-border class. However, we must
                    apply a border here still so that it takes up space.
                */
                border: 1px solid transparent;
                gap: 4px;
                cursor: text;
            }

            ${ao({selector:"input:focus:focus-visible:not(:active):not([disabled]) ~ .focus-border",elementBorderSize:0})}

            .left-side-icon {
                margin-right: calc(${t["vira-input-padding-horizontal"].value} - 4px);
            }

            input {
                ${st};
                cursor: text;
                margin: ${t["vira-input-padding-vertical"].value} 0;
                flex-grow: 1;
                max-width: 100%;
                /* fix input element not shrinking by default */
                width: 0;
                text-overflow: ellipsis;
                box-sizing: border-box;
                overflow: hidden;
            }

            ::selection {
                background: ${t["vira-input-text-selection-color"].value}; /* WebKit/Blink Browsers */
            }
            ::-moz-selection {
                background: ${t["vira-input-text-selection-color"].value}; /* Gecko Browsers */
            }

            input:placeholder-shown {
                text-overflow: ellipsis;
                overflow: hidden;
            }

            input:focus {
                outline: none;
            }

            input::placeholder {
                color: ${t["vira-input-placeholder-color"].value};
            }

            .suffix {
                font-weight: bold;
                ${Ke};
            }

            button {
                ${st};
                cursor: pointer;
                display: flex;
                transition: color
                    ${Ae["vira-interaction-animation-duration"].value};
            }

            .clear-x-button,
            .show-password-button {
                color: ${t["vira-input-action-button-color"].value};
            }

            .clear-x-button:hover {
                color: ${t["vira-input-clear-button-hover-color"].value};
            }

            .clear-x-button:active {
                color: ${t["vira-input-clear-button-active-color"].value};
            }

            .show-password-button:hover {
                color: ${t["vira-input-show-password-button-hover-color"].value};
            }

            .show-password-button:active {
                color: ${t["vira-input-show-password-button-active-color"].value};
            }
        `,stateInitStatic:{forcedInputWidth:0,showPassword:!1},renderCallback:({inputs:e,dispatch:t,state:r,updateState:n,events:i})=>{const{filtered:s}=sm({value:e.value??"",allowed:e.allowedInputs,blocked:e.blockedInputs}),a=e.icon?p`
                  <${_.assign({icon:e.icon})} class="left-side-icon"></${_}>
              `:"",o=e.fitText?$`
                  width: ${r.forcedInputWidth}px;
              `:"";return p`
            <label>
                ${a}
                ${Me(!!e.fitText,p`
                        <span
                            class="size-span"
                            ${Ff(({contentRect:l})=>{n({forcedInputWidth:l.width})})}
                        >
                            <pre>${s||e.placeholder||""}</pre>
                        </span>
                    `)}
                <input
                    type=${i2(e.type,r.showPassword)}
                    style=${o}
                    autocomplete=${e.disableBrowserHelps?"off":""}
                    autocorrect=${e.disableBrowserHelps?"off":""}
                    autocapitalize=${e.disableBrowserHelps?"off":""}
                    spellcheck=${e.disableBrowserHelps?"false":""}
                    ?disabled=${e.disabled}
                    .value=${s}
                    ${R("input",l=>{n2({inputs:e,filteredValue:s,event:l,inputBlockedCallback(c){t(new i.inputBlocked(c))},newValueCallback(c){t(new i.valueChange(c))}})})}
                    placeholder=${e.placeholder}
                />
                ${Me(!!(e.showClearButton&&e.value),p`
                        <button
                            class="clear-x-button"
                            title="clear"
                            ${R("click",l=>{l.stopImmediatePropagation(),l.preventDefault(),t(new i.valueChange(""))})}
                        >
                            <${_.assign({icon:Vv})}></${_}>
                        </button>
                    `)}
                ${Me(e.type===er.Password,p`
                        <button
                            class="show-password-button"
                            title="show password"
                            ${R("click",l=>{l.stopImmediatePropagation(),l.preventDefault(),n({showPassword:!r.showPassword})})}
                        >
                            <${_.assign({icon:r.showPassword?Fv:Bv})}></${_}>
                        </button>
                    `)}
                ${Me(!!e.suffix,p`
                        <div class="suffix">${e.suffix}</div>
                    `)}
                <!--
                    These separate style elements are necessary so that we can select them as
                    siblings of the focused <input> element.
                -->
                <div class="border-style focus-border"></div>
                <div class="border-style label-border"></div>
            </label>
        `}});function i2(e,t){return e===er.Password&&t?er.Default:e||er.Default}Qe()({tagName:"vira-link",cssVars:{"vira-link-hover-color":"currentColor"},styles:({cssVars:e})=>$`
        :host {
            display: inline;
            text-decoration: underline;
        }

        a,
        a:visited,
        a:active,
        a:link,
        a:hover {
            color: inherit;
            text-decoration: inherit;
            white-space: inherit;
        }

        :host(:hover) a,
        a:hover,
        :host(:active) a,
        a:active {
            color: ${e["vira-link-hover-color"].value};
        }
    `,renderCallback({inputs:e}){var r,n;function t(i){e.route&&e.route.router.setRouteOnDirectNavigation(e.route.route,i)&&e.route.scrollToTop&&window.scrollTo(0,0)}if((r=e.link)!=null&&r.newTab)return p`
                <a href=${e.link.url} target="_blank" rel="noopener noreferrer">
                    <slot></slot>
                </a>
            `;{const i=e.link?e.link.url:(n=e.route)==null?void 0:n.router.createRouteUrl(e.route.route);return p`
                <a href=${i} rel="noopener noreferrer" ${R("click",t)}>
                    <slot></slot>
                </a>
            `}}});const{defineElement:Ce,defineElementNoInputs:b$}=jf(),Se=Ce()({tagName:"book-route-link",cssVars:{"book-route-link-anchor-padding":""},styles:({cssVars:e})=>$`
        a {
            box-sizing: border-box;
            display: block;
            padding: ${e["book-route-link-anchor-padding"].value};
            text-decoration: inherit;
            color: inherit;
            height: 100%;
            width: 100%;
        }
    `,renderCallback:({inputs:e,dispatch:t})=>{var n;const r=((n=e.router)==null?void 0:n.createRouteUrl({...e.route}))??"#";return p`
            <a
                href=${r}
                ${R("click",i=>{(!e.router||sh(i))&&(i.preventDefault(),window.scrollTo(0,0),t(new mi(e.route)))})}
            >
                <slot></slot>
            </a>
        `}});function s2(e,t){return e.entry.entryType===X.Root?!1:!!(e.entry.entryType===X.Page||ce(t,e.fullUrlBreadcrumbs.slice(0,-1))||ce(t==null?void 0:t.slice(0,-1),e.fullUrlBreadcrumbs.slice(0,-1)))}const Ue=Ce()({tagName:"book-nav",cssVars:{"book-nav-internal-indent":"0"},styles:({cssVars:e})=>$`
        :host {
            display: flex;
            flex-direction: column;
            padding: 16px 0;
            background-color: ${D["element-book-page-background-faint-level-2-color"].value};
        }

        .title-row:hover {
            background-color: ${D["element-book-nav-hover-background-color"].value};
            color: ${D["element-book-nav-hover-foreground-color"].value};
        }

        .title-row:active {
            background-color: ${D["element-book-nav-active-background-color"].value};
            color: ${D["element-book-nav-active-foreground-color"].value};
        }

        .title-row {
            display: block;
            ${Se.cssVars["book-route-link-anchor-padding"].name}: 1px 24px 1px calc(calc(16px * ${e["book-nav-internal-indent"].value}) + 8px);
        }

        ul {
            list-style: none;
            padding: 0;
            margin: 0;
        }

        .selected,
        .selected:hover {
            background-color: ${D["element-book-nav-selected-background-color"].value};
            color: ${D["element-book-nav-selected-foreground-color"].value};
            pointer-events: none;
        }

        .title-text {
            white-space: nowrap;
            padding: 1px 0;
            text-overflow: ellipsis;
            display: flex;
            gap: 8px;
            align-items: center;
            font-size: 16px;
        }

        ${_} {
            display: inline-flex;
            color: ${D["element-book-accent-icon-color"].value};
        }
    `,renderCallback({inputs:e}){const t=e.flattenedNodes.map(r=>{if(!s2(r,e.selectedPath))return;const n=$`
                --book-nav-internal-indent: ${r.fullUrlBreadcrumbs.length-1};
            `;return p`
                <li style=${n}>
                    <${Se.assign({router:e.router,route:{paths:[le.Book,...r.fullUrlBreadcrumbs]}})}
                        class=${We({"title-row":!0,selected:e.selectedPath?ce(e.selectedPath,r.fullUrlBreadcrumbs):!1})}
                    >
                        <div class="title-text">
                            ${Me(Jt(r,X.ElementExample),p`
                                    <${_.assign({icon:Hv})}></${_}>
                                `)}
                            ${r.entry.title}
                        </div>
                    </${Se}>
                </li>
            `});return p`
            <${Se.assign({route:ar,router:e.router})}>
                <slot name=${ze.NavHeader}>Book</slot>
            </${Se}>
            <ul>
                ${t}
            </ul>
        `}});async function a2(e){await Ns(2);const t=e.shadowRoot.querySelector(".selected");if(!t)throw new Error("Failed to find selected nav tree element.");await hp(t)||t.scrollIntoView({behavior:"smooth",block:"center"})}const ht=Ce()({tagName:"book-error",styles:$`
        :host {
            display: flex;
            flex-direction: column;
            color: red;
            font-weight: bold;
        }

        p {
            margin: 0;
            padding: 0;
        }
    `,renderCallback({inputs:e}){return(T(e.message,"array")?e.message:[e.message]).map(r=>p`
                <p>${r}</p>
            `)}}),Qr=Ce()({tagName:"book-page-controls",events:{controlValueChange:ie()},hostClasses:{"book-page-controls-has-controls":({inputs:e})=>!!Object.keys(e.config).length},styles:({hostClasses:e})=>$`
        :host {
            display: flex;
            flex-wrap: wrap;
            align-items: flex-end;
            padding-left: 36px;
            align-content: flex-start;
            gap: 16px;
            row-gap: 10px;
            color: ${D["element-book-page-foreground-faint-level-1-color"].value};
        }

        ${e["book-page-controls-has-controls"].selector} {
            margin-top: 8px;
        }

        .control-wrapper {
            position: relative;
            display: flex;
            gap: 4px;
            flex-direction: column;
        }

        .error {
            font-weight: bold;
            color: red;
        }

        ${Yn} {
            height: 24px;
            max-width: 128px;
        }

        ${_}.options-icon {
            position: absolute;
            left: 0;
            bottom: 0;
            margin-left: -32px;
        }
    `,renderCallback({inputs:e,dispatch:t,events:r}){return Object.entries(e.config).length?Object.entries(e.config).map(([n,i],s)=>{if(i.controlType===te.Hidden)return"";const a=o2(e.currentValues[n],i,o=>{const l=T(e.fullUrlBreadcrumbs,"array")?e.fullUrlBreadcrumbs:e.fullUrlBreadcrumbs[n];if(!l)throw new Error(`Failed to find breadcrumbs from given control name: '${n}'`);t(new r.controlValueChange({fullUrlBreadcrumbs:l,newValues:{...e.currentValues,[n]:o}}))});return p`
                    <div class="control-wrapper">
                        ${Me(s===0,p`
                                <${_.assign({icon:zv})}
                                    class="options-icon"
                                ></${_}>
                            `)}
                        <label class="control-wrapper">
                            <span>${n}</span>
                            ${a}
                        </label>
                    </div>
                `}):""}});function o2(e,t,r){return _t(t,te.Hidden)?"":_t(t,te.Checkbox)?p`
            <input
                type="checkbox"
                .value=${e}
                ${R("input",n=>{const i=xn(n,HTMLInputElement);r(i.checked)})}
            />
        `:_t(t,te.Color)?p`
            <input
                type="color"
                .value=${e}
                ${R("input",n=>{const i=xn(n,HTMLInputElement);r(i.value)})}
            />
        `:_t(t,te.Text)?p`
            <${Yn.assign({value:String(e),showClearButton:!0,disableBrowserHelps:!0})}
                ${R(Yn.events.valueChange,n=>{r(n.detail)})}
            ></${Yn}>
        `:_t(t,te.Number)?p`
            <input
                type="number"
                .value=${e}
                ${R("input",n=>{const i=xn(n,HTMLInputElement);r(i.value)})}
            />
        `:_t(t,te.Dropdown)?p`
            <select
                .value=${e}
                ${R("input",n=>{const i=xn(n,HTMLSelectElement);r(i.value)})}
            >
                ${t.options.map(n=>p`
                        <option ?selected=${n===e} value=${n}>
                            ${n}
                        </option>
                    `)}
            </select>
        `:p`
            <p class="error">${t.controlType} controls are not implemented yet.</p>
        `}const ru=Ce()({tagName:"book-breadcrumbs",styles:$`
        :host {
            display: flex;
            color: #999;
        }

        .spacer {
            padding: 0 4px;
        }
    `,renderCallback:({inputs:e})=>{const t=e.currentRoute.paths.slice(1);return t.length?t.map((r,n,i)=>{const s=n>=i.length-1,a=i.slice(0,n+1),o=s?"":p`
                      <span class="spacer">&gt;</span>
                  `;return p`
                <${Se.assign({route:{hash:void 0,search:void 0,paths:[le.Book,...a]},router:e.router})}>
                    ${r}
                </${Se}>
                ${o}
            `}):p`
                &nbsp;
            `}}),Cs=Ce()({tagName:"book-breadcrumbs-bar",styles:$`
        :host {
            border-bottom: 1px solid
                ${D["element-book-page-foreground-faint-level-2-color"].value};
            padding: 4px 8px;
            background-color: ${D["element-book-page-background-color"].value};
            z-index: 9999999999;
            display: flex;
            gap: 16px;
            justify-content: space-between;
        }
    `,renderCallback({inputs:e,dispatch:t}){return p`
            ${Me(!!e.currentSearch,p`
                    &nbsp;
                `,p`
                    <${ru.assign({currentRoute:e.currentRoute,router:e.router})}></${ru}>
                `)}
            <input
                placeholder="search"
                .value=${e.currentSearch}
                ${R("input",async r=>{const n=r.currentTarget;if(!(n instanceof HTMLInputElement))throw new Error("Failed to find input element for search.");const i=n.value;await ip(200),n.value===i&&(n.value?t(new mi({paths:[le.Search,encodeURIComponent(n.value)]})):t(new mi(ar)))})}
            />
        `}}),nu=Ce()({tagName:"book-entry-description",styles:$`
        :host {
            color: ${D["element-book-page-foreground-faint-level-1-color"].value};
            display: inline-flex;
            flex-direction: column;
            gap: 8px;
        }

        :host(:hover) {
            color: ${D["element-book-page-foreground-color"].value};
        }

        p {
            margin: 0;
            padding: 0;
        }

        p:first-child {
            margin-top: 8px;
        }
    `,renderCallback({inputs:e}){return e.descriptionParagraphs.map(t=>p`
                <p>${t}</p>
            `)}}),iu=Ce()({tagName:"book-page-wrapper",styles:$`
        :host {
            display: block;
        }

        h2,
        h3 {
            margin: 0;
            padding: 0;
            font-size: 1.5em;
            display: flex;
            align-items: center;
            gap: 8px;
        }

        .page-header .title-group {
            align-items: flex-start;
            display: flex;
            flex-direction: column;
        }

        ${Se} {
            display: inline-block;
        }
    `,renderCallback({inputs:e}){const t=e.isTopLevel?p`
                  <h2 class="header-with-icon">${e.pageNode.entry.title}</h2>
              `:p`
                  <h3 class="header-with-icon">${e.pageNode.entry.title}</h3>
              `,r=[le.Book,...e.pageNode.fullUrlBreadcrumbs],n=rd(e.pageNode.entry.errors);return n&&console.error(n),p`
            <div class="page-header block-entry">
                <div class="title-group">
                    <${Se.assign({route:{paths:r,hash:void 0,search:void 0},router:e.router})}>
                        ${t}
                    </${Se}>
                    ${n?p`
                              <${ht.assign({message:n.message})}></${ht}>
                          `:p`
                              <${nu.assign({descriptionParagraphs:e.pageNode.entry.descriptionParagraphs??[]})}></${nu}>
                              <${Qr.assign({config:e.pageNode.entry.controls,currentValues:Ga(e.controls,e.pageNode.fullUrlBreadcrumbs),fullUrlBreadcrumbs:e.pageNode.fullUrlBreadcrumbs})}></${Qr}>
                          `}
                </div>
            </div>
        `}}),Vn=Ce()({tagName:"book-element-example-controls",styles:$`
        :host {
            display: flex;
            color: ${D["element-book-page-foreground-faint-level-1-color"].value};
            border-bottom: 1px solid currentColor;
            padding: 0 8px 4px;
        }
    `,renderCallback({inputs:e}){const t=[le.Book,...e.elementExampleNode.fullUrlBreadcrumbs];return p`
            <${Se.assign({route:{paths:t,hash:void 0,search:void 0},router:e.router})}>
                ${e.elementExampleNode.entry.title}
            </${Se}>
        `}}),su=Symbol("unset-internal-state"),au=Ce()({tagName:"book-element-example-viewer",stateInitStatic:{isUnset:su},renderCallback({state:e,inputs:t,updateState:r}){try{if(t.elementExampleNode.entry.errors.length)throw rd(t.elementExampleNode.entry.errors);if(!t.elementExampleNode.entry.renderCallback||typeof t.elementExampleNode.entry.renderCallback=="string")throw new Error(`Failed to render example '${t.elementExampleNode.entry.title}': renderCallback is not a function`);e.isUnset===su&&r({isUnset:void 0,...t.elementExampleNode.entry.stateInitStatic});const n=t.elementExampleNode.entry.renderCallback({state:e,updateState:r,controls:t.currentPageControls});if(n instanceof Promise)throw new Error("renderCallback output cannot be a promise");return p`
                ${Me(!!t.elementExampleNode.entry.styles,p`
                        <style>
                            ${t.elementExampleNode.entry.styles}
                        </style>
                    `)}
                ${n}
            `}catch(n){return console.error(n),p`
                <${ht.assign({message:`${t.elementExampleNode.entry.title} failed: ${wa(n)}`})}></${ht}>
            `}},options:{allowPolymorphicState:!0}}),ou=Ce()({tagName:"book-element-example-wrapper",styles:$`
        :host {
            display: inline-flex;
            flex-direction: column;
            gap: 24px;
            max-width: 100%;
        }

        .examples-wrapper {
            display: flex;
            gap: 32px;
            flex-wrap: wrap;
        }

        .error {
            color: red;
            font-weight: bold;
        }

        .individual-example-wrapper {
            display: flex;
            flex-direction: column;
            gap: 24px;
            max-width: 100%;
        }

        ${Vn} {
            color: ${D["element-book-page-foreground-faint-level-1-color"].value};
        }

        :host(:hover) ${Vn} {
            color: ${D["element-book-accent-icon-color"].value};
        }
    `,renderCallback({inputs:e}){return p`
            <div class="individual-example-wrapper">
                <${Vn.assign(np(e,["currentPageControls"]))}></${Vn}>
                <${au.assign(e)}></${au}>
            </div>
        `}});function am(e,t,r,n){const i=js(r,n),s=[];if(i){const a=am(e,t,i,n);a&&s.push(a)}if(Jt(r,X.Page)&&!e.includes(r)){const a=Ga(t,r.fullUrlBreadcrumbs);s.push({config:r.entry.controls,current:a,breadcrumbs:Qn(a,()=>r.fullUrlBreadcrumbs)})}return s.reduce((a,o)=>({config:{...a.config,...o.config},current:{...a.current,...o.current},breadcrumbs:{...a.breadcrumbs,...o.breadcrumbs}}),{config:{},current:{},breadcrumbs:{}})}function l2({currentNodes:e,isTopLevel:t,router:r,isSearching:n,controls:i,originalTree:s}){if(!e.length&&n)return[p`
                No results
            `];const a=$o(e,1)?am(e,i,e[0],s):void 0,o=a&&Object.values(a.config).length&&$o(e,1)?p`
                  <${Qr.assign({config:a.config,currentValues:a.current,fullUrlBreadcrumbs:a.breadcrumbs})}></${Qr}>
              `:N,l=Iw(e,c=>c.fullUrlBreadcrumbs.join(">"),(c,d)=>{if(Jt(c,X.Page))return p`
                    <${iu.assign({isTopLevel:t,pageNode:c,controls:i,router:r})}
                        class="block-entry"
                    ></${iu}>
                `;if(Jt(c,X.ElementExample)){const u=Ga(i,c.fullUrlBreadcrumbs.slice(0,-1));return p`
                    <${ou.assign({elementExampleNode:c,currentPageControls:u,router:r})}
                        class="inline-entry"
                    ></${ou}>
                `}else return Jt(c,X.Root)?N:p`
                    <${ht.assign({message:`Unknown entry type for rendering: '${c.entry.entryType}'`})}
                        class="block-entry"
                    ></${ht}>
                `});return[o,l]}const zt=Ce()({tagName:"book-entry-display",styles:$`
        :host {
            display: flex;
            flex-direction: column;
            position: relative;
        }

        .all-book-entries-wrapper {
            flex-grow: 1;
            padding: 32px;
        }

        .inline-entry {
            margin: 8px;
        }

        * + .block-entry {
            margin-top: 32px;
        }

        .block-entry + * {
            margin-top: 32px;
        }

        h1 {
            margin: 0;
            padding: 0;
        }

        ${Cs} {
            position: sticky;
            top: 0;
        }

        .loading {
            flex-grow: 1;
            padding: 64px;
            position: absolute;
            background-color: white;
            animation: fade-in linear
                ${Ae["vira-interaction-animation-duration"].value} forwards;
            z-index: 100;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
        }

        @keyframes fade-in {
            from {
                opacity: 0;
            }
            to {
                opacity: 1;
            }
        }
    `,events:{loadingRender:ie()},stateInitStatic:{lastElement:void 0},renderCallback:({inputs:e,dispatch:t,events:r,state:n,updateState:i})=>{const s=Gs(e.currentRoute.paths),a=l2({currentNodes:e.currentNodes,isTopLevel:!0,router:e.router,isSearching:!!s,controls:e.controls,originalTree:e.originalTree});return p`
            <${Cs.assign({currentSearch:s,currentRoute:e.currentRoute,router:e.router})}></${Cs}>

            ${Me(e.showLoading,p`
                    <div
                        ${Al(()=>{t(new r.loadingRender(!0))})}
                        class="loading"
                    >
                        <${_.assign({icon:em})}></${_}>
                    </div>
                    ${Me(!!n.lastElement,p`
                            ${n.lastElement}
                            <slot name=${ze.Footer}></slot>
                        `)}
                `,p`
                    <div
                        ${Al(o=>{i({lastElement:o})})}
                        class="all-book-entries-wrapper"
                    >
                        ${a}
                    </div>
                    <slot name=${ze.Footer}></slot>
                `)}
        `}});function c2(e,t,r){const n=lu(e,t);if(n.length)return n;r(ar);const i=lu(e,ar.paths);if(!i)throw new Error(`Tried to self-correct for invalid path ${t.join("/")}
                        but failed to do so.`);return i}function lu(e,t){return e.filter(r=>fp({searchFor:t.slice(1),searchIn:r.fullUrlBreadcrumbs}))}const cu=fe()({tagName:"element-book-app",events:{pathUpdate:ie()},stateInitStatic:{currentRoute:ar,router:void 0,loading:!0,colors:{config:void 0,theme:_c(void 0)},treeBasedControls:void 0,originalWindowTitle:void 0},styles:$`
        :host {
            display: flex;
            flex-direction: column;
            height: 100%;
            width: 100%;
            font-family: sans-serif;
            background-color: ${D["element-book-page-background-color"].value};
            color: ${D["element-book-page-foreground-color"].value};
        }

        .error {
            color: red;
        }

        .root {
            flex-grow: 1;
            width: 100%;
            display: flex;
            position: relative;
        }

        ${zt} {
            flex-grow: 1;
            overflow-x: hidden;
            overflow-y: auto;
            max-height: 100%;
        }

        ${Ue} {
            flex-shrink: 0;
            position: sticky;
            overflow-x: hidden;
            overflow-y: auto;
            max-height: 100%;
            top: 0;
            max-width: min(400px, 40%);
        }
    `,initCallback({host:e,state:t}){setTimeout(()=>{uu(e,Gs(t.currentRoute.paths),t.currentRoute)},500)},cleanupCallback({state:e,updateState:t}){e.router&&(e.router.destroy(),t({router:void 0}))},renderCallback:({state:e,inputs:t,host:r,updateState:n,dispatch:i,events:s})=>{var d,u,f,h,m,g,y;t._debug&&console.info("rendering element-book app");function a(b){return{...e.currentRoute,...b}}function o(b){const E=a(b);return!ce(e.currentRoute,E)}function l(b){t.preventWindowTitleChange||(e.originalWindowTitle||n({originalWindowTitle:document.title}),document.title=[e.originalWindowTitle,b].filter(ga).join(" - "))}function c(b){if(!o(b))return;const E=a(b);e.router?e.router.setRoute(E):n({currentRoute:{...e.currentRoute,...E}}),t.elementBookRoutePaths&&!ce(t.elementBookRoutePaths,e.currentRoute.paths)&&i(new s.pathUpdate(E.paths??[]))}try{if(t.elementBookRoutePaths&&!ce(t.elementBookRoutePaths,e.currentRoute.paths)&&c({paths:t.elementBookRoutePaths}),(d=t.internalRouterConfig)!=null&&d.useInternalRouter&&!e.router){const H=tb(t.internalRouterConfig.basePath);n({router:H}),H.listen(!0,W=>{n({currentRoute:W})})}else!((u=t.internalRouterConfig)!=null&&u.useInternalRouter)&&e.router&&e.router.destroy();const b={themeColor:t.themeColor};if(!ce(b,(f=e.colors)==null?void 0:f.config)){const H=_c(b);n({colors:{config:b,theme:H}}),ib(r,H)}const E=t._debug??!1,C=Sy({entries:t.entries,debug:E});(!e.treeBasedControls||e.treeBasedControls.entries!==t.entries||e.treeBasedControls.lastGlobalInputs!==t.globalValues)&&(t._debug&&console.info("regenerating global controls"),n({treeBasedControls:{entries:t.entries,lastGlobalInputs:t.globalValues??{},controls:Jf(C.tree,{children:(m=(h=e.treeBasedControls)==null?void 0:h.controls)==null?void 0:m.children,controls:t.globalValues})}}));const O=Gs(e.currentRoute.paths),Pe=(O?Ly({flattenedNodes:C.flattenedNodes,searchQuery:O}):void 0)??c2(C.flattenedNodes,e.currentRoute.paths,c);l((g=Pe[0])==null?void 0:g.entry.title);const me=(y=e.treeBasedControls)==null?void 0:y.controls;return me?(t._debug&&console.info({currentControls:me}),p`
                <div
                    class="root"
                    ${R(mi,async H=>{const W=H.detail;if(!o(W))return;if(n({loading:!0}),c(W),!(r.shadowRoot.querySelector(Ue.tagName)instanceof Ue))throw new Error(`Failed to find child '${Ue.tagName}'`);uu(r,O,e.currentRoute)})}
                    ${R(Qr.events.controlValueChange,H=>{if(!e.treeBasedControls)return;const W=xy(me,H.detail.fullUrlBreadcrumbs,H.detail.newValues);n({treeBasedControls:{...e.treeBasedControls,controls:W}})})}
                >
                    <${Ue.assign({flattenedNodes:C.flattenedNodes,router:e.router,selectedPath:O?void 0:e.currentRoute.paths.slice(1)})}>
                        <slot
                            name=${ze.NavHeader}
                            slot=${ze.NavHeader}
                        ></slot>
                    </${Ue}>
                    <${zt.assign({controls:me,currentNodes:Pe,currentRoute:e.currentRoute,debug:E,originalTree:C.tree,router:e.router,showLoading:e.loading})}
                        ${R(zt.events.loadingRender,async H=>{await Ns();const W=r.shadowRoot.querySelector(zt.tagName);W?W.scroll({top:0,behavior:"instant"}):console.error(`Failed to find '${zt.tagName}' for scrolling.`),await Ns(),n({loading:!H.detail})})}
                    >
                        <slot
                            name=${ze.Footer}
                            slot=${ze.Footer}
                        ></slot>
                    </${zt}>
                </div>
            `):p`
                    <${ht.assign({message:"Failed to generate page controls."})}></${ht}>
                `}catch(b){return console.error(b),p`
                <p class="error">${wa(b)}</p>
            `}}});async function uu(e,t,r){if(t||r.paths.length<=1)return;const n=e.shadowRoot.querySelector(Ue.tagName);if(!(n instanceof Ue))throw new Error(`Failed to find child '${Ue.tagName}'`);await a2(n)}var du;(function(e){e.Upper="upper",e.Lower="lower"})(du||(du={}));function u2({min:e,max:t}){return e>t?{min:t,max:e}:{min:e,max:t}}var fu;(function(e){e.FirstThenWait="first-then-wait",e.AfterWait="after-wait"})(fu||(fu={}));function d2(){return globalThis.crypto?globalThis.crypto:require("crypto").webcrypto}const f2=d2();function h2({min:e,max:t}){const{min:r,max:n}=u2({min:Math.floor(e),max:Math.floor(t)}),i=n-r+1,s=Math.ceil(Math.log2(i)/8),a=Math.floor(256**s/i)*i,o=new Uint8Array(s);let l;do f2.getRandomValues(o),l=o.reduce((c,d,u)=>c+d*256**u,0);while(l>=a);return r+l%i}const hu=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",0,1,2,3,4,5,6,7,8,9];function m2(e=16){let t="";for(let r=0;r<e;r++){const n=h2({min:0,max:hu.length-1});t+=hu[n]}return t}function p2(e){return e.map(t=>({value:t,sort:m2()})).sort((t,r)=>t.sort.localeCompare(r.sort)).map(({value:t})=>t)}function g2(e){var r;return[...e.children,...((r=e.shadowRoot)==null?void 0:r.children)??[]]}function yi(e){let t;try{t=Reflect.ownKeys(e)}catch{}return t??[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}function w2(e){return yi(e).map(t=>e[t])}function vr(e){return yi(e).map(t=>[t,e[t]])}function y2(e){return Object.fromEntries(e)}function b2(e,t){return e.filter((r,n)=>!t.includes(n))}function v2(e,t,r){return e.reduce((n,i,s,a)=>{const o=t(i,s,a);return r(o,i,s,a)&&n.push(o),n},[])}function $2(e){return!!e}var mu;(function(e){e.Upper="upper",e.Lower="lower"})(mu||(mu={}));function E2({max:e,min:t,value:r}){return r>e?t:r<t?e:r}var pu;(function(e){e.FirstThenWait="first-then-wait",e.AfterWait="after-wait"})(pu||(pu={}));function dr(e,t){let r=!1;const n=yi(e).reduce((i,s)=>{const a=t(s,e[s],e);return a instanceof Promise&&(r=!0),{...i,[s]:a}},{});return r?new Promise(async(i,s)=>{try{await Promise.all(yi(n).map(async a=>{const o=await n[a];n[a]=o})),i(n)}catch(a){s(a)}}):n}function T2(){return globalThis.crypto?globalThis.crypto:require("crypto").webcrypto}T2();const gu=fe()({tagName:"vir-players-actions-bindings-debug",styles:$`
        h3 {
            margin: 4px;
        }
    `,renderCallback({inputs:e}){return vr(e.playersActionsBindingsMap).map(([t,r])=>p`
                    <h3>Player ${t}</h3>
                    <${wu.assign({actionsBindingsMap:r})}></${wu}>
                `)}}),wu=fe()({tagName:"vir-actions-bindings-debug",styles:$`
        h4 {
            margin: 4px;
        }
    `,renderCallback({inputs:e}){return vr(e.actionsBindingsMap).map(([t,r])=>{const n=r.map(i=>p`
                        <tr>
                            <td>${i.deviceKey}:</td>
                            <td>${i.inputName}</td>
                        </tr>
                    `);return p`
                    <section class="binding">
                        <h4>${t}</h4>
                        <table><tbody>${n}</tbody></table>
                    </section>
                `})}}),S2=[(e,t)=>t in e,(e,t)=>t in e.constructor.prototype];function bi(e,t){return e?S2.some(r=>{try{return r(e,t)}catch{return!1}}):!1}function fr(e){let t;try{t=Reflect.ownKeys(e)}catch{}return t??[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}function aa(e){return fr(e).map(t=>e[t])}function k2(e){return Object.fromEntries(e)}function x2(e,t){return e.includes(t)}function vi(e){return!!e}const M2={capitalizeFirstLetter:!1};function A2(e){return e.length?e[0].toUpperCase()+e.slice(1):""}function C2(e,t){return t.capitalizeFirstLetter?A2(e):e}function P2(e,t=M2){const r=e.toLowerCase();if(!r.length)return"";const n=r.replace(/^-+/,"").replace(/-{2,}/g,"-").replace(/-(?:.|$)/g,i=>{const s=i[1];return s?s.toUpperCase():""});return C2(n,t)}var yu;(function(e){e.Upper="upper",e.Lower="lower"})(yu||(yu={}));function L2(e,t){return e.split(t)}var bu;(function(e){e.FirstThenWait="first-then-wait",e.AfterWait="after-wait"})(bu||(bu={}));function O2(e){return fr(e).filter(t=>isNaN(Number(t)))}function N2(e){return O2(e).map(r=>e[r])}function I2(e,t){return N2(t).includes(e)}function D2(e,t){let r=!1;const n=fr(e).reduce((i,s)=>{const a=t(s,e[s],e);return a instanceof Promise&&(r=!0),{...i,[s]:a}},{});return r?new Promise(async(i,s)=>{try{await Promise.all(fr(n).map(async a=>{const o=await n[a];n[a]=o})),i(n)}catch(a){s(a)}}):n}function R2(){return globalThis.crypto?globalThis.crypto:require("crypto").webcrypto}R2();const om={Gamepad1:"0",Gamepad2:"1",Gamepad3:"2",Gamepad4:"3"};function lm(e){return x2(Object.values(om),e)}const _2={Mouse:"mouse",Keyboard:"keyboard"},G={..._2,...om};var j;(function(e){e.Keyboard="keyboard",e.Mouse="mouse",e.Gamepad="gamepad"})(j||(j={}));var hr;(function(e){e.Button="button",e.Axe="axe"})(hr||(hr={}));function Ir(e){return`button-${e}`}function oa(e){return`axe-${e}`}function V2(e){const[t]=L2(e,"-");if(I2(t,hr))return t;throw new Error(`Failed to parse input type from input named '${e}'`)}const H2=.01;function B2({value:e,gamepadDeadZone:t,globalDeadZone:r}){const n=t??(r||H2);return Math.abs(e)>n?e:0}function vu({gamepadInput:e,inputIndex:t,deadZones:r,globalDeadZone:n}){const i=T(e,"number"),s=i?oa(t):Ir(t),a=i?e:e.value;return{inputName:s,value:B2({value:a,gamepadDeadZone:r[s],globalDeadZone:n}),inputType:i?hr.Axe:hr.Button}}function F2({gamepad:e,deadZoneSettings:t,globalDeadZone:r}){const n=String(e.index);if(!lm(n))throw new Error(`Tried to serialize gamepad with out-of-bounds index: '${e.index}'`);const i=t[e.id]||{},s=e.axes.map((l,c)=>vu({gamepadInput:l,inputIndex:c,deadZones:i,globalDeadZone:r})),a=e.buttons.map((l,c)=>vu({deadZones:i,gamepadInput:l,globalDeadZone:r,inputIndex:c})),o=k2([...a,...s].map(l=>[l.inputName,l]));return{axes:s,buttons:a,isConnected:e.connected,gamepadName:e.id,deviceKey:n,mapping:e.mapping,serialized:!0,timestamp:e.timestamp,inputsByName:o}}const Hn=window.navigator;function U2({deadZoneSettings:e,globalDeadZone:t}){return Array.from(bi(Hn,"webkitGetGamepads")?Hn.webkitGetGamepads():bi(Hn,"getGamepads")?Hn.getGamepads():[]).filter(r=>!!r).map(r=>F2({gamepad:r,deadZoneSettings:e,globalDeadZone:t}))}function j2({deadZoneSettings:e,globalDeadZone:t}){return U2({deadZoneSettings:e,globalDeadZone:t}).reduce((i,s)=>{const a=s.deviceKey;return lm(a)?(i[a]=s,i):(console.warn(`ignoring gamepad index '${a}'`),i)},{})}function z2(e){const t={},r={deviceKey:e.deviceKey,deviceName:e.gamepadName,deviceType:j.Gamepad};return Object.values(e.inputsByName).forEach(n=>{n.value&&(t[n.inputName]={...r,details:n,inputName:n.inputName,inputValue:n.value})}),t}function W2(e){return D2(e,(t,r)=>({currentInputs:z2(r),deviceDetails:r,deviceName:r.gamepadName,deviceKey:r.deviceKey,deviceType:j.Gamepad}))}function $u(e){return aa(e).map(n=>n==null?void 0:n.currentInputs).filter(vi).map(n=>aa(n)).flat()}const Eu={deviceDetails:void 0,deviceKey:G.Keyboard,deviceName:"keyboard",deviceType:j.Keyboard},Bn={deviceDetails:void 0,deviceKey:G.Mouse,deviceName:"mouse",deviceType:j.Mouse},cm={[G.Gamepad1]:j.Gamepad,[G.Gamepad2]:j.Gamepad,[G.Gamepad3]:j.Gamepad,[G.Gamepad4]:j.Gamepad,[G.Keyboard]:j.Keyboard,[G.Mouse]:j.Mouse};var G2=globalThis&&globalThis.__setFunctionName||function(e,t,r){return typeof t=="symbol"&&(t=t.description?"[".concat(t.description,"]"):""),Object.defineProperty(e,"name",{configurable:!0,value:r?"".concat(r," ",t):t})};function zi(){return(e,t)=>{var r;const n=P2(e,{capitalizeFirstLetter:!0}),i=(r=class extends be()(e){constructor(){super(...arguments),Object.defineProperty(this,"eventType",{enumerable:!0,configurable:!0,writable:!0,value:e})}static constructIfDataIsNew(s,...a){const o=i.getNewData(...a);if(o)return new i({detail:{timestamp:s,inputs:o}})}},G2(r,"TimedEventConstructor"),Object.defineProperty(r,"getNewData",{enumerable:!0,configurable:!0,writable:!0,value:t}),r);return Object.defineProperty(i,"name",{value:n,writable:!0}),i}}function K2(...[e,t]){return t}const q2=zi()("all-devices-updated",K2);function Tu(e,t){return e.deviceKey===t.deviceKey&&e.inputName===t.inputName&&e.inputName===t.inputName&&e.inputValue===t.inputValue}function Z2(...[e,t]){const r=$u(t),n=e?$u(e):[];if(!ce(n,r)){const i=r.filter(a=>!n.find(o=>Tu(o,a))),s=n.filter(a=>!r.find(o=>Tu(o,a)));return{newInputs:i,removedInputs:s,allCurrentInputs:r}}}const oo=zi()("current-inputs-changed",Z2);function Y2(...[e,t]){if(!e)return[];const r=fr(e).filter(n=>!bi(t,n));if(r.length)return r.map(n=>e[n]).filter(vi)}const um=zi()("devices-removed",Y2);function J2(...[e,t]){if(!e)return aa(t).filter(vi);const r=fr(t).filter(n=>!bi(e,n));if(r.length)return r.map(n=>t[n]).filter(vi)}const dm=zi()("new-devices-added",J2),fm=[q2,dm,um,oo];Object.fromEntries(fm.map(e=>[e.type,e]));const Su="code";class wn extends sd{constructor(t={}){super(),Object.defineProperty(this,"currentKeyboardInputs",{enumerable:!0,configurable:!0,writable:!0,value:{}}),Object.defineProperty(this,"currentMouseInputs",{enumerable:!0,configurable:!0,writable:!0,value:{}}),Object.defineProperty(this,"gamepadDeadZoneSettings",{enumerable:!0,configurable:!0,writable:!0,value:{}}),Object.defineProperty(this,"lastReadInputDevices",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"loopIsRunning",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"globalDeadZone",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"removeGlobalListeners",{enumerable:!0,configurable:!0,writable:!0,value:()=>{}}),Object.defineProperty(this,"currentLoopIndex",{enumerable:!0,configurable:!0,writable:!0,value:-1}),Object.defineProperty(this,"lastEventDetails",{enumerable:!0,configurable:!0,writable:!0,value:{}}),t.gamepadDeadZoneSettings&&this.updateGamepadDeadZoneSettings(t.gamepadDeadZoneSettings),t.globalDeadZone&&(this.globalDeadZone=t.globalDeadZone),this.attachWindowListeners(t),this.readAllDevices(),t.startLoopImmediately&&this.startPollingLoop()}attachWindowListeners(t){const r=[$t("keydown",n=>{const i=Ir(n[Su]);if(this.currentKeyboardInputs.hasOwnProperty(i))return;const s={deviceType:j.Keyboard,details:{keyboardEvent:n},deviceKey:G.Keyboard,deviceName:Eu.deviceName,inputName:i,inputValue:1};this.currentKeyboardInputs[i]=s}),$t("keyup",n=>{delete this.currentKeyboardInputs[Ir(n[Su])]}),$t("mousedown",n=>{const i=Ir(n.button);this.currentMouseInputs.hasOwnProperty(i)||(this.currentMouseInputs[i]={deviceType:j.Mouse,details:{mouseEvent:n},deviceName:Bn.deviceName,deviceKey:G.Mouse,inputName:i,inputValue:1})}),$t("mouseup",n=>{delete this.currentMouseInputs[Ir(n.button)]}),t.disableMouseMovement?void 0:$t("mousemove",n=>{const i=oa("x"),s=oa("y");this.currentMouseInputs[i]={deviceType:j.Mouse,details:{mouseEvent:n},deviceName:Bn.deviceName,deviceKey:G.Mouse,inputName:i,inputValue:n.clientX},this.currentMouseInputs[s]={deviceType:j.Mouse,details:{mouseEvent:n},deviceName:Bn.deviceName,deviceKey:G.Mouse,inputName:s,inputValue:n.clientY}})];this.removeGlobalListeners=()=>{r.forEach(n=>n==null?void 0:n())}}runPollingLoop(t,r){this.loopIsRunning&&this.currentLoopIndex===t&&(this.readAllDevices(this.gamepadDeadZoneSettings,r),requestAnimationFrame(n=>{this.runPollingLoop(t,n)}))}fireEvents(t,r,n){fm.forEach(i=>{const s=i.constructIfDataIsNew(t,r,n);s&&(this.lastEventDetails[s.type]={constructor:i,constructorInputs:[t,r,n]},this.dispatch(s))})}getCurrentDeviceValues(t,r){const n=j2({deadZoneSettings:t,globalDeadZone:r}),i=W2(n);return{[G.Keyboard]:{...Eu,currentInputs:{...this.currentKeyboardInputs}},[G.Mouse]:{...Bn,currentInputs:{...this.currentMouseInputs}},...i}}startPollingLoop(){this.loopIsRunning||(this.loopIsRunning=!0,this.currentLoopIndex++,requestAnimationFrame(t=>{this.runPollingLoop(this.currentLoopIndex,t)}))}pausePollingLoop(){this.loopIsRunning&&(this.loopIsRunning=!1)}getLastPollResults(){return this.lastReadInputDevices}readAllDevices(t=this.gamepadDeadZoneSettings,r=performance.now(),n=this.globalDeadZone){const i=this.getCurrentDeviceValues(t,n),s=this.lastReadInputDevices;return this.lastReadInputDevices=i,this.fireEvents(r,s,i),i}updateGamepadDeadZoneSettings(t){this.gamepadDeadZoneSettings=t}}class ku extends be()("vir-line-pause"){}class hm extends be()("vir-line-state-rate-calculated"){}class X2 extends be()("vir-line-state-change"){}class xu extends be()("vir-line-error"){}class Q2 extends rn("vir-line-update-skipped"){}class e5 extends rn("vir-line-destroy"){}const mm="animation frames",t5={allowDuplicateStageNames:!1,enableLogging:!1,targetUpdateRate:void 0,init:{startUpdateLoopImmediately:!1},minUpdateRateCalculationInterval:{milliseconds:500},updateLoopInterval:mm},r5=[(e,t)=>t in e,(e,t)=>t in e.constructor.prototype];function n5(e,t){return e?r5.some(r=>{try{return r(e,t)}catch{return!1}}):!1}function la(e){let t;try{t=Reflect.ownKeys(e)}catch{}return t??[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}async function i5(e,t){await s5(e,t)}async function s5(e,t){return await e.reduce(async(n,i,s,a)=>{const o=await n,l=await t(i,s,a);return o.push(l),o},Promise.resolve([]))}function a5(e){return!!e}function o5({value:e,wrapper:t}){return[t,t].join(e)}var Mu;(function(e){e.Upper="upper",e.Lower="lower"})(Mu||(Mu={}));var Au;(function(e){e.FirstThenWait="first-then-wait",e.AfterWait="after-wait"})(Au||(Au={}));function l5(e){return e?e instanceof Error?e.message:n5(e,"message")?String(e.message):String(e):""}function c5(e){return e instanceof Error?e:new Error(l5(e))}function Cu(e,t){const r=c5(e);return r.message=`${t}: ${r.message}`,r}function u5(e,t){return la(e).filter(n=>{const i=e[n];return t(n,i,e)}).reduce((n,i)=>(n[i]=e[i],n),{})}function d5(e,t){return u5(e,r=>!t.includes(r))}function f5(e,t){let r=!1;const n=la(e).reduce((i,s)=>{const a=t(s,e[s],e);return a instanceof Promise&&(r=!0),{...i,[s]:a}},{});return r?new Promise(async(i,s)=>{try{await Promise.all(la(n).map(async a=>{const o=await n[a];n[a]=o})),i(n)}catch(a){s(a)}}):n}function ca(e,t){try{return h5(e,t),!0}catch{return!1}}function h5(e,t,r){if(e.length<t)throw new Error(r?`'${r}' is not at least '${t}' in length.`:`Array is not at least '${t}' in length.`)}function pm(...e){if(!ca(e,1))return{};if(e.length===1)return e[0];let t;const r={};return e.forEach(n=>{if(T(n,"object"))T(t,"object")||(t={...n});else{t=n;return}Object.entries(n).forEach(([i,s])=>{r[i]||(r[i]=[]),r[i].push(s)})}),T(t,"object")&&Object.entries(r).forEach(([n,i])=>{const s=pm(...i);s===void 0&&n in t?delete t[n]:s!==void 0&&(t[n]=s)}),t}function m5(e){return!!e&&typeof e=="object"}function p5(e){return Km(e)||e instanceof RegExp||e instanceof Promise}function ua(e,t){if(Array.isArray(e))return e.map(n=>ua(n,t));const r=[];return d5(f5(e,(n,i)=>{const s=t[n];if(s===!0)return i;if(s)return ua(i,s);r.push(n)}),r)}function Pu(e,t){const r=ua(e,t);return da(r,t)}function da(e,t){if(p5(e))return e;const r=Object.keys(e);return Array.isArray(e)?e.map(n=>da(n,t)):ca(r,2)?e:ca(r,1)&&m5(t)?da(e[r[0]],t[r[0]]):e}async function Lu(e){return await Promise.resolve().then(()=>e())}function g5(){return globalThis.crypto?globalThis.crypto:require("crypto").webcrypto}g5();function w5(e,t){const r=[],n=new Set;if(e.forEach(i=>{const s=i.stageId.name;n.has(s)?r.push(s):n.add(s)}),r.length&&!t.allowDuplicateStageNames)throw new Error(`Duplicate stage names provided to VirLine: ${r.join(", ")}`)}function y5(e){return[e.name,e.version!=null?String(e.version):void 0].filter(a5).join("@")}function Jn(e,t){if(e===t)return!0;if(e&&t&&typeof e=="object"&&typeof t=="object"){if(e.constructor!==t.constructor)return!1;var r,n,i;if(Array.isArray(e)){if(r=e.length,r!=t.length)return!1;for(n=r;n--!==0;)if(!Jn(e[n],t[n]))return!1;return!0}if(e instanceof Map&&t instanceof Map){if(e.size!==t.size)return!1;for(n of e.entries())if(!t.has(n[0]))return!1;for(n of e.entries())if(!Jn(n[1],t.get(n[0])))return!1;return!0}if(e instanceof Set&&t instanceof Set){if(e.size!==t.size)return!1;for(n of e.entries())if(!t.has(n[0]))return!1;return!0}if(ArrayBuffer.isView(e)&&ArrayBuffer.isView(t)){if(r=e.length,r!=t.length)return!1;for(n=r;n--!==0;)if(e[n]!==t[n])return!1;return!0}if(e.constructor===RegExp)return e.source===t.source&&e.flags===t.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===t.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===t.toString();if(i=Object.keys(e),r=i.length,r!==Object.keys(t).length)return!1;for(n=r;n--!==0;)if(!Object.prototype.hasOwnProperty.call(t,i[n]))return!1;for(n=r;n--!==0;){var s=i[n];if(!Jn(e[s],t[s]))return!1}return!0}return e!==e&&t!==t}class Wi extends va{get stateType(){throw new Error("Access to 'stateType' is only allowed as a type.")}constructor(t,r,n){super(),Object.defineProperty(this,"stages",{enumerable:!0,configurable:!0,writable:!0,value:t}),Object.defineProperty(this,"options",{enumerable:!0,configurable:!0,writable:!0,value:t5}),Object.defineProperty(this,"isUpdateLoopPaused",{enumerable:!0,configurable:!0,writable:!0,value:!0}),Object.defineProperty(this,"currentState",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"lastStateUpdateHighResTimestamp",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"updateRateCounters",{enumerable:!0,configurable:!0,writable:!0,value:{calculatedAtHighResTimestamp:performance.now(),updateCount:0}}),Object.defineProperty(this,"isCurrentlyUpdating",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"stateListeners",{enumerable:!0,configurable:!0,writable:!0,value:[]}),this.currentState={...r},n&&this.updateOptions(n),w5(t,this.options),this.options.init.startUpdateLoopImmediately&&this.startUpdateLoop()}updateOptions(t){this.options=pm(this.options,t)}startUpdateLoop(){return this.isUpdateLoopPaused?(this.isUpdateLoopPaused=!1,this.dispatch(new ku({detail:!1})),this.updateRateCounters={calculatedAtHighResTimestamp:performance.now(),updateCount:0},this.runUpdateLoop(),!0):!1}pauseUpdateLoop(){return this.isUpdateLoopPaused?!1:(this.isUpdateLoopPaused=!0,this.dispatch(new ku({detail:!0})),!0)}destroy(){this.pauseUpdateLoop(),this.removeAllStateListeners(),this.dispatch(new e5),super.destroy()}listenToState(t,r,n){const i=this.stateListeners.find(a=>ce(a.selection,r)),s=Pu(this.currentState,r);return i?i.listeners.add(n):this.stateListeners.push({selection:r,lastValue:s,listeners:new Set([n])}),t&&n(s),()=>this.removeStateListener(r,n)}removeAllStateListeners(){this.stateListeners=[]}removeStateListener(t,r){const n=this.stateListeners.findIndex(s=>ce(s.selection,t)),i=this.stateListeners[n];return!i||!i.listeners.delete(r)?!1:(i.listeners.size||this.stateListeners.splice(n,1),!0)}async triggerUpdate(){if(this.isCurrentlyUpdating){this.dispatch(new Q2),this.options.enableLogging&&console.warn("Update skipped: another is still in progress.");return}this.isCurrentlyUpdating=!0;const t=performance.now(),r={milliseconds:t-this.lastStateUpdateHighResTimestamp};this.lastStateUpdateHighResTimestamp=t,this.updateRateCounters.updateCount++,this.options.enableLogging&&console.info(`updating state at: ${t}`);const n=await this.runStateUpdate(t,r);if(this.options.enableLogging&&console.info(`state update took: ${performance.now()-t}`),this.isCurrentlyUpdating=!1,n)throw n;this.fireStateListeners()}runUpdateLoop(){Lu(()=>this.triggerUpdate());const t=()=>{this.isUpdateLoopPaused||this.runUpdateLoop()};if(this.options.updateLoopInterval===mm)window.requestAnimationFrame(t);else{const r=jr(this.options.updateLoopInterval,M.Milliseconds);setTimeout(t,r.milliseconds)}}async fireStateListeners(){this.dispatch(new X2({detail:this.currentState}));const t=[];this.stateListeners.forEach(r=>{const n=Pu(this.currentState,r.selection);Jn(n,r.lastValue)||(r.lastValue=n,r.listeners.forEach(i=>{t.push(Lu(async()=>await i(n)))}))}),await Promise.all(t)}async runStateUpdate(t,r){try{const n={timeSinceLastUpdate:r,updateStartTime:{milliseconds:t}};await i5(this.stages,async i=>{const s={...n,state:this.currentState};try{await i.executor(s)}catch(a){const o=Cu(a,`Stage ${o5({value:y5(i.stageId),wrapper:"'"})} failed`);console.error(o),this.dispatch(new xu({detail:o}))}}),this.calculateUpdateRate(t);return}catch(n){const i=Cu(n,"Failed to update state");return console.error(i),this.dispatch(new xu({detail:i})),i}}calculateUpdateRate(t){if(this.options.minUpdateRateCalculationInterval==null)return;const r=jr(this.options.minUpdateRateCalculationInterval,M.Milliseconds).milliseconds,n=t-this.updateRateCounters.calculatedAtHighResTimestamp;if(n>r){const i=this.updateRateCounters.updateCount;this.updateRateCounters={calculatedAtHighResTimestamp:t,updateCount:0},this.dispatch(new hm({detail:{calculatedAt:ow(t+performance.timeOrigin,Zg),durationSinceLastCalculation:{milliseconds:n},updateCount:i,updatesPerSecond:i/n*1e3}}))}}}function b5(e){return y2(vr(e).map(([t,r])=>[r,t]))}function v5(){return lo}const lo={stageId:{name:"read actions"},executor({state:e,timeSinceLastUpdate:t}){if(!e.playersActionsBindings||!Object.keys(e.playersActionsBindings).length||!e.rawInputs||!Object.keys(e.rawInputs).length){e.playersActiveActions={};return}const r=b5(e.deviceKeyMap||{}),n=dr(e.playersActionsBindings,(i,s)=>{var a;return $5({actionsBindingsMap:s,activeActionsMap:(a=e.playersActiveActions)==null?void 0:a[i],rawInputs:e.rawInputs,reversedDeviceKeyMap:r,timeSinceLastUpdate:t})});e.playersActiveActions=n}};function $5({actionsBindingsMap:e,activeActionsMap:t,reversedDeviceKeyMap:r,rawInputs:n,timeSinceLastUpdate:i}){return vr(e).reduce((s,[a,o])=>{const l=v2(o,c=>{var f;const d=r[c.deviceKey]??c.deviceKey,u=(f=n==null?void 0:n[d])==null?void 0:f[c.inputName];if((u==null?void 0:u.direction)===c.direction)return u},$2);if(l.length){const c=l.reduce((m,g)=>m+g.inputValue,0),d=t==null?void 0:t[a],u=d==null?void 0:d.holdDuration,f=u?u.milliseconds+i.milliseconds:0,h={holdDuration:{milliseconds:Math.round(f)},value:c,actCount:(d==null?void 0:d.actCount)||0,lastActDuration:(d==null?void 0:d.lastActDuration)||{milliseconds:0}};s[a]=h}return s},{})}var q=(e=>(e.Positive="positive",e.Flat="flat",e.Negative="negative",e))(q||{});function gm(e){return e===0?"flat":e<0?"negative":"positive"}function E5(e){return dr(e,(t,r)=>({deviceKey:t,deviceName:r.deviceName,deviceType:r.deviceType}))}const Gi={stageId:{name:"read raw input"},executor({state:e,timeSinceLastUpdate:t}){const r=e.deviceHandler.readAllDevices(),n=dr(r,(s,a)=>{const o=a;return dr(o.currentInputs,(l,c)=>{var h,m;const d=gm(c.inputValue),u=(m=(h=e.rawInputs)==null?void 0:h[s])==null?void 0:m[l],f=(u==null?void 0:u.direction)===d?{milliseconds:u.duration.milliseconds+t.milliseconds}:{milliseconds:0};return{deviceKey:s,deviceName:o.deviceName,deviceType:o.deviceType,direction:d,duration:f,inputName:l,inputValue:c.inputValue}})}),i=E5(r);e.rawInputs=n,e.currentInputDevices=i}},T5={1:{jump:[{deviceKey:"keyboard",direction:q.Positive,inputName:"button-Space"}],left:[{deviceKey:"keyboard",direction:q.Positive,inputName:"button-KeyA"},{deviceKey:"keyboard",direction:q.Positive,inputName:"button-KeyJ"},{deviceKey:"keyboard",direction:q.Positive,inputName:"button-ArrowLeft"}],right:[{deviceKey:"keyboard",direction:q.Positive,inputName:"button-KeyD"},{deviceKey:"keyboard",direction:q.Positive,inputName:"button-KeyL"},{deviceKey:"keyboard",direction:q.Positive,inputName:"button-ArrowRight"}]}},Ou=fe()({tagName:"vir-read-actions-stage-debug",styles:$`
        :host {
            display: flex;
            gap: 16px;
            flex-direction: column;
        }

        h2 {
            margin: 4px;
        }

        .no-actions {
            opacity: 0.3;
            font-weight: bold;
        }
    `,stateInitStatic:{deviceHandler:void 0,pipeline:void 0,activeActions:{}},initCallback({state:e,updateState:t,inputs:r}){const n=e.deviceHandler||r.inputDeviceHandler||new wn;e.deviceHandler||t({deviceHandler:n});const i=e.pipeline||new Wi([Gi,lo],{deviceHandler:n,playersActionsBindings:r.actionBindings||T5},{init:{startUpdateLoopImmediately:!0}});e.pipeline||t({pipeline:i}),i.listenToState(!0,{playersActiveActions:!0},s=>{t({activeActions:s||{}})})},cleanupCallback({inputs:e,state:t,updateState:r}){var n,i;e.inputDeviceHandler||(n=t.deviceHandler)==null||n.destroy(),(i=t.pipeline)==null||i.destroy(),r({deviceHandler:void 0,pipeline:void 0})},renderCallback({state:e}){if(!e.deviceHandler||!e.pipeline)return N;const t=Object.entries(e.activeActions).map(([i,s])=>p`
                    <section class="action">
                        <h3>${i}</h3>
                        <pre>${JSON.stringify(s,null,4)}</pre>
                    </section>
                `),r=!t.length,n=e.pipeline.currentState.playersActionsBindings||{};return p`
            <h2>Action Bindings</h2>
            <${gu.assign({playersActionsBindingsMap:n})}></${gu}>
            <h2>Active Actions</h2>
            ${r?p`
                      <p class="no-actions">No inputs</p>
                  `:t}
        `},options:{ignoreUnsetInputs:!0}}),Nu=fe()({tagName:"vir-read-raw-input-stage-debug",styles:$`
        :host {
            display: flex;
            gap: 16px;
            flex-wrap: wrap;
        }

        .device {
            min-width: 500px;
        }

        .no-inputs {
            opacity: 0.3;
            font-weight: bold;
        }
    `,stateInitStatic:{deviceHandler:void 0,pipeline:void 0,rawInputs:{}},initCallback({state:e,updateState:t,inputs:r}){const n=e.deviceHandler||r.inputDeviceHandler||new wn;e.deviceHandler||t({deviceHandler:n});const i=e.pipeline||new Wi([Gi],{deviceHandler:n},{init:{startUpdateLoopImmediately:!0}});e.pipeline||t({pipeline:i}),i.listenToState(!0,{rawInputs:!0},s=>{t({rawInputs:s||{}})})},cleanupCallback({inputs:e,state:t,updateState:r}){var n,i;e.inputDeviceHandler||(n=t.deviceHandler)==null||n.destroy(),(i=t.pipeline)==null||i.destroy(),r({deviceHandler:void 0,pipeline:void 0})},renderCallback({state:e}){return!e.deviceHandler||!e.pipeline?N:Object.entries(e.rawInputs).map(([t,r])=>{const i=!r||Object.keys(r).length===0?p`
                          <p class="no-inputs">No inputs</p>
                      `:p`
                          <pre>${JSON.stringify(r,null,4)}</pre>
                      `;return p`
                    <section class="device">
                        <b>${t}</b>
                        ${i}
                    </section>
                `})},options:{ignoreUnsetInputs:!0}}),wm={[j.Gamepad]:"🎮",[j.Keyboard]:"⌨️",[j.Mouse]:"🖱"},S5={[q.Flat]:"",[q.Negative]:"➖",[q.Positive]:"➕"},k5=[(e,t)=>t in e,(e,t)=>t in e.constructor.prototype];function x5(e,t){return e?k5.some(r=>{try{return r(e,t)}catch{return!1}}):!1}function M5(e){return e.replace(/,/g,"")}var Iu;(function(e){e.Upper="upper",e.Lower="lower"})(Iu||(Iu={}));function A5(e){return typeof e=="number"?e:Number(typeof e=="string"?M5(e):e)}function Du(e){const t=C5(e);if(t==null)throw new Error(`Cannot convert to a number: ${e}`);return t}function C5(e){const t=A5(e);if(!isNaN(t))return t}function Ps({max:e,min:t,value:r}){return r>e?t:r<t?e:r}var Ru;(function(e){e.FirstThenWait="first-then-wait",e.AfterWait="after-wait"})(Ru||(Ru={}));function ym(e,t){try{return P5(e,t),!0}catch{return!1}}function P5(e,t,r){if(e.length<t)throw new Error(r?`'${r}' is not at least '${t}' in length.`:`Array is not at least '${t}' in length.`)}function L5(e){try{return JSON.parse(JSON.stringify(e))}catch(t){throw console.error("Failed to JSON copy for",e),t}}function O5(){return globalThis.crypto?globalThis.crypto:require("crypto").webcrypto}O5();const mr="group";function N5(e,t,r){return[e,t,r].filter(n=>n!==void 0).join(",")||""}function I5(e){const[t,r,n]=e.split(",");return r?{type:"2d",xCord:Du(t),yCord:Du(r),isGroup:n===mr}:{type:"1d",isGroup:t===mr}}function D5(e,t){Object.entries(t).forEach(([r,n])=>{T(n,"boolean")&&n?e.setAttribute(r,""):T(n,"boolean")&&!n||n==null?e.removeAttribute(r):e.setAttribute(r,String(n))})}const R5=Xe(class extends Ve{constructor(e){super(e),Object.defineProperty(this,"element",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"lastKey",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.element=fn(e,"modifyElement")}render(e,t){return e!==this.lastKey&&(t(this.element),this.lastKey=e),de}}),tr={name:"data-nav",js(e){return e===""?`[${tr.name}]`:`[${tr.name}*="${String(e).replace(/"/g,"'")}"]`},css(e){return $`
            ${ue(tr.js(e))}
        `}},Mr="nav-activated",_5={activateKeys:["Space","Return","Enter"]};function V5(){bm=L5(_5)}let bm;V5();function _u(e){return bm.activateKeys.some(t=>{const r=t.toLowerCase();return r===e.key.toLowerCase()||r===e.code.toLowerCase()})}function rt(e,t){const r=N5(e,t);return R5(`${e}-${t}`,n=>{const i=n.hasAttribute("tabindex")||e===mr?{}:{tabindex:0},s={[tr.name]:r,...i};Ei(n,HTMLElement),D5(n,s),e!==mr&&(n.style.getPropertyValue("cursor")||n.style.setProperty("cursor","pointer"),n.addEventListener("mousemove",a=>{a.target===n&&n.focus()},!0),n.addEventListener("mouseleave",a=>{a.target===n&&n.blur()},!0),n.addEventListener("mousedown",a=>{a.target===n&&n.classList.add(Mr)},!0),n.addEventListener("mouseup",a=>{a.target===n&&n.classList.remove(Mr)},!0),n.addEventListener("blur",()=>{n.classList.remove(Mr)},!0),n.addEventListener("keydown",a=>{a.target===n&&_u(a)&&n.classList.add(Mr)},!0),n.addEventListener("keyup",a=>{a.target===n&&_u(a)&&n.classList.remove(Mr)},!0))})}function H5(e,t){return vm([],e,t)}function vm(e,t,r){return!t||t.type==="child"?!1:t.type==="1d"?Vu(t.children,t,0,e,r):t.children.some((n,i)=>Vu(n,t,i,e,r))}function Vu(e,t,r,n,i){return e.some((s,a)=>{const o=x5(t,"isRoot")?n:n.concat(t);return i(o,s,{x:a,y:r})?!0:vm(o,s,i)})}function B5(e){return e.reverse().find(t=>!t.isGroup)}function en(e){if(!e)return;let t,r,n;H5(e,(a,o,l)=>o.element.matches(":focus")?(t=a,r=o,n=l,!0):!1);const i=t?t.slice(-1)[0]||e:void 0,s=t?B5(t)||e:void 0;if(!(!r||!i||!n||!s||!t))return{node:r,parent:i,nonGroupParent:s,ancestors:t}}function tn(e){e.scrollIntoView({behavior:"smooth",inline:"center",block:"center"}),e.focus()}function F5(e){var n;if(!e)return{success:!1,reason:"no nav tree"};const t=en(e);if(!t)return{success:!1,reason:"no focused node to enter into"};if(t.node.type==="child"||!t.node.children.length)return{success:!1,reason:"no children to enter into"};const r=t.node.type==="1d"?t.node.children[0]:(n=t.node.children[0])==null?void 0:n[0];return r?(tn(r.element),{success:!0,defaulted:!1,wrapped:!1,newElement:r.element}):{success:!1,reason:"failed to find first child to enter into"}}function U5(e){if(!e)return{success:!1,reason:"no nav tree"};const t=en(e);if(!t)return{success:!1,reason:"no focused node to exit out of"};const r=t.nonGroupParent;return r.isRoot?{success:!1,reason:"at top level nav already, nothing to exit to"}:(tn(r.element),{success:!0,defaulted:!1,wrapped:!1,newElement:r.element})}function $m(e){const t=[];return g2(e).forEach(r=>{if(!(r instanceof HTMLElement))return;const n=$m(r),i=r.hasAttribute(tr.name)?I5(r.getAttribute(tr.name)||""):void 0;if(!i){t.push(...n);return}t.push({children:n,element:r,navValue:i})}),t}function j5(e){const t=$m(e);return Em(t)}function Em(e){if(!ym(e,1))return;const t={type:e[0].navValue.type,children:[],isRoot:!0,isGroup:!1};return e.forEach(r=>{const n=r.children.length?Em(r.children):void 0;if(r.navValue.isGroup&&!n){const a=new Error("group nav has no children");throw console.error(a,r),a}const i=z5(r,t.children),s=n?{element:r.element,children:n.children,type:n.type,isGroup:r.navValue.isGroup,coords:i}:{element:r.element,type:"child",coords:i,isGroup:!1};if(r.navValue.type==="2d"&&t.type==="2d"){t.children[i.y]||(t.children[i.y]=[]);const a=t.children[i.y];if(a[i.x])throw new Error(`Parent already has child at ${i.x},${i.y}`);a[i.x]=s}else if(r.navValue.type==="1d"&&t.type==="1d"){if(t.children[i.x])throw new Error(`Parent already has child at ${i.x},${i.y}`);t.children[i.x]=s}else if(t.type!==r.navValue.type){const a=new Error("inconsistent nav dimensionality");throw console.error(a,r),a}}),t}function z5(e,t){if(e.navValue.type==="2d")return{x:e.navValue.xCord,y:e.navValue.yCord};if(e.navValue.type==="1d")return{x:t.length,y:0};throw new Error(`Unexpected node nav type: '${e.navValue.type}'`)}function Hu(e,t){return e>t}function Bu(e,t){return e<t}var oe;(function(e){e.Up="up",e.Down="down",e.Left="left",e.Right="right"})(oe||(oe={}));function co(e){var r;const t=e.type==="1d"?e.children[0]:(r=e.children[0])==null?void 0:r[0];if(t)return t.type==="child"?t:t.isGroup?co(t):t}function Fu(e,t,r){if(!e)return{success:!1,reason:"no nav tree"};const n=en(e);if(!n){const o=co(e);return o?(tn(o.element),{success:!0,wrapped:!1,defaulted:!0,newElement:o.element}):{success:!1,reason:"no default element to focus"}}const{nextNode:i,requiresWrapping:s}=Tm(n.parent,t,n.node),a=r?!0:!s;return i&&a?(tn(i.element),{success:!0,defaulted:!1,newElement:i.element,wrapped:s}):i?a?{success:!1,reason:"no conditions matched"}:{success:!1,reason:"wrapping blocked"}:{success:!1,reason:"failed to find node to focus"}}function Tm(e,t,r){var i,s;if(t===oe.Down||t===oe.Up){const a=t===oe.Down?Bu:Hu,o=t===oe.Down?1:-1,l=e.type==="1d"?0:Ps({value:r.coords.y+o,min:0,max:e.children.length-1}),c=e.type==="2d"?e.children[l]:void 0,d={x:e.type==="1d"?Ps({value:r.coords.x+o,min:0,max:e.children.length-1}):c&&r.coords.x>=c.length?c.length-1:r.coords.x,y:l},u=e.type==="1d"?e.children[d.x]:(i=e.children[d.y])==null?void 0:i[d.x],f=e.type==="1d"?a(d.x,r.coords.x):a(d.y,r.coords.y);return{nextNode:(u==null?void 0:u.element)===r.element?void 0:u,requiresWrapping:f}}else{const a=t===oe.Right?Bu:Hu,o=t===oe.Right?1:-1,l=e.type==="1d"?e.children:e.children[r.coords.y];ed(l,`No current row found at y index: '${r.coords.y}'`);const c={x:Ps({value:r.coords.x+o,min:0,max:l.length-1}),y:r.coords.y},d=a(c.x,r.coords.x),u=e.type==="1d"?e.children[c.x]:(s=e.children[c.y])==null?void 0:s[c.x];return{nextNode:(u==null?void 0:u.element)===r.element?void 0:u,requiresWrapping:d}}}function W5(e,t,r,n){const i=ym(t.ancestors,2)?t.ancestors[1]:e,s=t.ancestors[0];if(!s)return{success:!1,reason:"no parent to find a pibling from"};const{nextNode:a,requiresWrapping:o}=Tm(i,r,s),l=a!=null&&a.isGroup?co(a):a,c=n?!0:!o;return l?c?(tn(l.element),{success:!0,defaulted:!1,newElement:l.element,wrapped:o}):{success:!1,reason:"wrapping blocked"}:{success:!1,reason:"no node to navigate to"}}class G5{constructor(t){Object.defineProperty(this,"rootElement",{enumerable:!0,configurable:!0,writable:!0,value:t})}getCurrentlyFocused(){return en(this.buildNavTree())}buildNavTree(){return j5(this.rootElement)}navigate({direction:t,allowWrapping:r}){return Fu(this.buildNavTree(),t,r)}enterInto(){return F5(this.buildNavTree())}exitOutOf(){return U5(this.buildNavTree())}navigatePibling({allowWrapping:t,direction:r}){const n=this.buildNavTree(),i=en(n);return!i||!n?Fu(n,r,t):W5(n,i,r,t)}}var vt=(e=>(e.Up="up",e.Down="down",e.Left="left",e.Right="right",e.Enter="enter",e.Exit="exit",e.SectionNext="section-next",e.SectionPrevious="section-previous",e))(vt||{});class Sm extends G5{constructor(r,n,i={}){super(r);Rt(this,"lastUnlisten");Rt(this,"paused",!1);Rt(this,"options",{repeatThreshold:{milliseconds:500},repeatInterval:{milliseconds:60},allowWrapping:!0});this.virLine=n,this.options={...this.options,...i},this.listenToVirLineState()}pause(){this.paused=!0}resume(){this.paused=!1}destroy(){var r;(r=this.lastUnlisten)==null||r.call(this)}listenToVirLineState(){this.lastUnlisten&&this.lastUnlisten(),this.lastUnlisten=this.virLine.listenToState(!1,{playersActiveActions:!0},r=>{if(!r||this.paused)return;const n=jr(this.options.repeatThreshold,M.Milliseconds).milliseconds,i=jr(this.options.repeatInterval,M.Milliseconds).milliseconds,s={};if(w2(r).forEach(c=>{vr(c).forEach(([d,u])=>{u.holdDuration.milliseconds>=n?u.holdDuration.milliseconds-u.lastActDuration.milliseconds>i&&(s[d]=!0,u.actCount++,u.lastActDuration=u.holdDuration):u.holdDuration.milliseconds||(s[d]=!0)})}),s.enter){this.enterInto();return}if(s.exit){this.exitOutOf();return}const a=s["section-next"]&&!s["section-previous"]?oe.Right:!s["section-next"]&&s["section-previous"]?oe.Left:void 0;if(a){this.navigatePibling({allowWrapping:this.options.allowWrapping,direction:a});return}const o=s.up&&!s.down?oe.Up:!s.up&&s.down?oe.Down:void 0,l=s.right&&!s.left?oe.Right:!s.right&&s.left?oe.Left:void 0;o&&this.navigate({allowWrapping:this.options.allowWrapping,direction:o}),l&&this.navigate({allowWrapping:this.options.allowWrapping,direction:l})})}}const K5=p2(["red","orange","gold","yellow","lime","green","cyan","blue","purple","magenta"]),At=fe()({tagName:"vir-glow-pulse",styles:$`
        :host {
            display: inline-flex;
        }
    `,stateInitStatic:{lastTimestamp:0,colorIndex:0},renderCallback({inputs:e,host:t,state:r,updateState:n}){const i=e.glowColors&&e.glowColors.length?e.glowColors:K5,s=e.animationDuration?jr(e.animationDuration,M.Milliseconds):{milliseconds:350},a=r.lastTimestamp+s.milliseconds/2,o=e.pulse&&e.pulse.timestamp>a?e.pulse:void 0;o&&n({colorIndex:E2({min:0,max:i.length-1,value:r.colorIndex+1})});const l=i[r.colorIndex];if(!l)throw new Error("Exceeded colors array size somehow.");return o&&o.timestamp!==r.lastTimestamp&&l!=null&&(t.getAnimations().forEach(c=>c.cancel()),t.animate([{filter:`drop-shadow(0 0 6px ${l}) drop-shadow(0 0 6px ${l}) drop-shadow(0 0 6px ${l})`},{filter:`drop-shadow(0 0 0 ${l}) drop-shadow(0 0 0 ${l})`}],{duration:s.milliseconds,iterations:1}),n({lastTimestamp:o.timestamp})),p`
            <slot></slot>
        `}}),Uu=fe()({tagName:"vir-device-chip",styles:$`
        :host {
            height: 80px;
            box-sizing: border-box;
            border: 1px solid #eee;
            border-radius: 16px;
            padding: 0 16px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }

        .device-emoji {
            font-size: 2em;
        }
    `,renderCallback({inputs:e,host:t}){const r=cm[e.deviceKey],n=wm[r],i=Number(e.deviceKey)+1,s=r===j.Gamepad&&!e.hideGamepadPort?p`
                      <span>${i}</span>
                  `:N,a=r===j.Gamepad?`gamepad ${i}`:r;t.getAttribute("title")!==a&&t.setAttribute("title",a);const o=p`
            <span class="device-emoji">${n}</span>
        `;return e.lastInputTime?p`
                <${At.assign({pulse:e.lastInputTime,glowColors:e.activityColors})}>
                    ${o}
                </${At}>
                ${s}
            `:p`
                ${o} ${s}
            `}});function km(e){return e.deviceKey===G.Mouse&&(e.inputName==="axe-x"||e.inputName==="axe-y")}const Ls=fe()({tagName:"vir-device-list",styles:$`
        :host {
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            gap: 16px;
        }
    `,stateInitStatic:{deviceHandler:void 0,deviceTimestamps:{},cleanup:void 0},initCallback({inputs:e,state:t,updateState:r}){const n=e.inputDeviceHandler||new wn({startLoopImmediately:!0});t.deviceHandler||r({deviceHandler:n});function i(){return dr(n.getLastPollResults(),a=>t.deviceTimestamps[a]||{timestamp:0})}const s=e.disableGlowPulses?void 0:n.listen(oo,a=>{const o=i();a.detail.inputs.newInputs.forEach(l=>{!e.showMouseMovement&&km(l)||(o[l.deviceKey]={timestamp:Date.now()})}),r({deviceTimestamps:o})});r({cleanup:s,deviceTimestamps:i()})},cleanupCallback({inputs:e,state:t,updateState:r}){var n,i;(n=t.cleanup)==null||n.call(t),e.inputDeviceHandler||(i=t.deviceHandler)==null||i.destroy(),r({cleanup:void 0,deviceHandler:void 0})},renderCallback({state:e}){return vr(e.deviceTimestamps).map(([r,n])=>p`
                    <${Uu.assign({deviceKey:r,lastInputTime:n})}></${Uu}>
                `)},options:{ignoreUnsetInputs:!0}}),fa=52,Ar=fe()({tagName:"vir-simple-player-assign-bindings",styles:$`
        :host {
            display: flex;
            flex-direction: column;
        }

        th {
            text-align: right;
            height: ${fa}px;
            padding: 8px 0;
            padding-right: 16px;
        }

        .bindings {
            display: flex;
            align-items: center;
            flex-wrap: wrap;
            gap: 8px;
            border: 1px solid #eee;
            min-height: ${fa+18}px;
            padding: 8px;
            width: 100%;
            box-sizing: border-box;
            border-radius: 8px;
            position: relative;
        }

        td:last-of-type {
            width: 100%;
        }

        table {
            max-width: 100%;
        }

        .add {
            margin-right: 32px;
        }

        .fade .fadable {
            pointer-events: none;
            opacity: 0.3;
        }

        .listening-overlay {
            z-index: 100;
            opacity: 1;
            position: absolute;
            height: 100%;
            width: 100%;
            top: -1px;
            left: -1px;
            background-color: rgba(249, 252, 255, 0.9);
            border: 2px solid #ccc;
            border-radius: inherit;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        p.empty-bindings {
            ${gn};
        }
        .empty-bindings {
            display: flex;
            justify-content: center;
        }
    `,events:{inputListen:ie(),bindingsUpdate:ie()},stateInitStatic:{listeningForAction:void 0},renderCallback({inputs:e,dispatch:t,events:r,state:n,updateState:i}){const s=e.actionNames.map(a=>{var f;const o=((f=e.playersActionsBindings)==null?void 0:f[`${e.playerPosition}`])||{},l=o[a]||[],c=l.length?l.map((h,m)=>p`
                          <${Os.assign({...h})}
                              ${R(Os.events.removeBinding,()=>{const g={...o,[a]:b2(l,[m])};t(new r.bindingsUpdate(g))})}
                          ></${Os}>
                      `):p`
                      <p class="empty-bindings">Empty</p>
                  `,d=n.listeningForAction===a,u=d&&e.listeningToInput?p`
                          <div class="listening-overlay"><span>Listening for input...</span></div>
                      `:N;return p`
                <tr
                    class=${We({fade:e.listeningToInput})}
                >
                    <td class="fadable">
                        <${tu.assign({text:"+",disabled:e.listeningToInput})}
                            class="add"
                            ${R("click",()=>{var h;t(new r.inputListen(!0)),i({listeningForAction:a}),(h=e.deviceHandler)==null||h.listen(oo,(m,g)=>{const y=m.detail.inputs.newInputs[0];if(!y)return;const b={deviceKey:y.deviceKey,direction:gm(y.inputValue),inputName:y.inputName};if(!e.allowMouseMovement&&km(y))return;if(!l.some(O=>ce(b,O))){const O={...o,[a]:[...l,b]};t(new r.bindingsUpdate(O))}g(),t(new r.inputListen(!1)),i({listeningForAction:void 0})})})}
                        ></${tu}>
                    </td>
                    <th class=${We({fadable:!d})}>${a}:</th>
                    <td class=${We({fadable:!d})}>
                        <div
                            class="bindings ${We({"empty-bindings":!l.length})}"
                        >
                            ${u}${c}
                        </div>
                    </td>
                </tr>
            `});return p`
            <table><tbody>${s}</tbody></table>
        `}}),Os=fe()({tagName:"vir-binding-chip",styles:$`
        :host {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-between;
            background-color: #f0f0f0;
            border-radius: 8px;
            padding: 8px;
            font-size: 0.8em;
            height: ${fa}px;
            box-sizing: border-box;
            position: relative;
        }

        .remove-overlay {
            position: absolute;
            height: 100%;
            width: 100%;
            box-sizing: border-box;
            top: 0;
            left: 0;
            border: 3px solid #aa0000;
            background-color: rgba(255, 0, 0, 0.6);
            border-radius: inherit;
            display: flex;
            -webkit-text-stroke: 1px black;
            color: white;
            font-weight: bold;
            justify-content: center;
            align-items: flex-end;
            font-weight: bold;
            padding-bottom: 4px;
            opacity: 0;
            cursor: pointer;
            font-size: 1.9em;
            ${Ke};
            transition: opacity
                ${Ae["vira-interaction-animation-duration"].value};
        }
        :host(:hover) .remove-overlay {
            opacity: 1;
        }
    `,events:{removeBinding:ie()},renderCallback({inputs:e,dispatch:t,events:r}){const n=cm[e.deviceKey],i=wm[n],s=Number(e.deviceKey)+1,a=n===j.Gamepad?p`
                      <span>${s}</span>
                  `:N,o=V2(e.inputName)===hr.Axe?p`
                      <span>${S5[e.direction]}</span>
                  `:N,l=n===j.Gamepad?`controller in slot ${s}`:e.deviceKey;return p`
            <div
                class="remove-overlay"
                ${R("click",()=>{t(new r.removeBinding)})}
            >
                <span>×</span>
            </div>
            <div>${e.inputName} ${o}</div>
            <div title=${l}>${i} ${a}</div>
        `}}),Fn=fe()({tagName:"vir-simple-assign-bindings",styles:$`
        :host {
            display: flex;
            gap: 32px;
        }

        ${Ar} {
            min-width: 300px;
        }

        .player-assignment {
            flex-grow: 1;
        }
    `,events:{playersActionsBindingsUpdate:ie()},stateInitStatic:{deviceHandler:void 0,cleanup:void 0,currentDevices:{},listeningToInput:!1},initCallback({inputs:e,state:t,updateState:r}){const n=t.deviceHandler||e.inputDeviceHandler||new wn({startLoopImmediately:!0,...e.globalDeadZone?{globalDeadZone:e.globalDeadZone}:{},...e.gamepadDeadZoneSettings?{gamepadDeadZoneSettings:e.gamepadDeadZoneSettings}:{}});t.deviceHandler||r({deviceHandler:n});function i(){const o=dr(n.readAllDevices(),(l,c)=>({deviceKey:l,deviceName:c.deviceName,deviceType:c.deviceType}));r({currentDevices:o})}const s=n.listen(dm,i),a=n.listen(um,i);r({cleanup(){s(),a()}}),i()},cleanupCallback({inputs:e,state:t,updateState:r}){var n,i;e.inputDeviceHandler||(n=t.deviceHandler)==null||n.destroy(),(i=t.cleanup)==null||i.call(t),r({deviceHandler:void 0,cleanup:void 0})},renderCallback({state:e,inputs:t,updateState:r,dispatch:n,events:i}){const s=e.deviceHandler;if(s){if(t.supportedPlayerCount<1)throw new Error("Cannot support < 1 players.")}else return N;const a=t.supportedPlayerCount>1;return Array(t.supportedPlayerCount).fill(0).map((o,l)=>{const c=l+1,d=a?p`
                          <h3>Player ${c}</h3>
                      `:N;return p`
                    <section class="player-assignment">
                        ${d}
                        <${Ar.assign({actionNames:t.actionNames,playerPosition:c,playersActionsBindings:t.playersActionsBindings,listeningToInput:e.listeningToInput,deviceHandler:s,allowMouseMovement:t.allowMouseMovement||!1})}
                            ${R(Ar.events.inputListen,u=>{r({listeningToInput:u.detail})})}
                            ${R(Ar.events.bindingsUpdate,u=>{const f={...t.playersActionsBindings,[String(c)]:u.detail};n(new i.playersActionsBindingsUpdate(f))})}
                        ></${Ar}>
                    </section>
                `})},options:{ignoreUnsetInputs:!0}}),uo=Je({parent:void 0,title:"Stages"}),$r=Je({parent:void 0,title:"Elements"}),ju=dn({tagName:"vir-menu-nav-test",styles:$`
        :host {
            display: flex;
            gap: 32px;
        }

        .row {
            display: flex;
            gap: 8px;
        }

        .row > * {
            flex-grow: 1;
        }

        section {
            display: flex;
            gap: 8px;
            flex-direction: column;
            width: 400px;
        }

        .cell {
            border: 2px solid dodgerblue;
            height: 32px;
            border-radius: 8px;
            display: flex;
            align-items: center;
            justify-content: center;
        }
    `,stateInitStatic:{menuNavController:void 0,virLine:void 0,deviceHandler:Uf(()=>new wn({disableMouseMovement:!0}))},initCallback({host:e,state:t,updateState:r}){const n=t.virLine||new Wi([Gi,v5()],{deviceHandler:t.deviceHandler,playersActionsBindings:{1:{[vt.Up]:[{deviceKey:G.Keyboard,direction:q.Positive,inputName:"button-KeyW"}],[vt.Down]:[{deviceKey:G.Keyboard,direction:q.Positive,inputName:"button-KeyS"}],[vt.Right]:[{deviceKey:G.Keyboard,direction:q.Positive,inputName:"button-KeyD"}],[vt.Left]:[{deviceKey:G.Keyboard,direction:q.Positive,inputName:"button-KeyA"}],[vt.SectionNext]:[{deviceKey:G.Keyboard,direction:q.Positive,inputName:"button-KeyE"}],[vt.SectionPrevious]:[{deviceKey:G.Keyboard,direction:q.Positive,inputName:"button-KeyQ"}]}}},{init:{startUpdateLoopImmediately:!0}});t.menuNavController||r({menuNavController:new Sm(e,n)})},cleanupCallback({state:e,updateState:t}){var r;(r=e.menuNavController)==null||r.destroy(),t({menuNavController:void 0})},renderCallback(){return p`
            <section ${rt(mr)}>
                <div class="cell" ${rt()}>Cell</div>
                <div class="cell" ${rt()}>Cell</div>
            </section>
            <section ${rt(mr)}>
                <div class="row">
                    <div class="cell" ${rt(0,0)}>Cell</div>
                    <div class="cell" ${rt(1,0)}>Cell</div>
                </div>
                <div class="row">
                    <div class="cell" ${rt(0,1)}>Cell</div>
                    <div class="cell" ${rt(1,1)}>Cell</div>
                </div>
            </section>
        `}}),q5=Je({title:Sm.name,parent:$r,elementExamplesCallback({defineExample:e}){e({title:"example",renderCallback(){return p`
                    <${ju}></${ju}>
                `}})}}),Z5=Je({parent:uo,title:lo.stageId.name,elementExamplesCallback({defineExample:e}){e({title:"Debugging",renderCallback(){return p`
                    <${Ou}></${Ou}>
                `}})}}),Y5=Je({parent:uo,title:Gi.stageId.name,elementExamplesCallback({defineExample:e}){e({title:"Debugging",renderCallback(){return p`
                    <${Nu}></${Nu}>
                `}})}}),J5=Je({title:Ls.tagName,parent:$r,elementExamplesCallback({defineExample:e}){e({title:"example",renderCallback(){return p`
                    <${Ls}></${Ls}>
                `}})}}),Cr=fe()({tagName:"vir-fps",styles:$`
        :host {
            justify-content: center;
            align-items: center;
            display: flex;
        }
    `,stateInitStatic:{cleanup:void 0,fps:0},initCallback({updateState:e,state:t,inputs:r}){t.cleanup||e({cleanup:r.virLine.listen(hm,n=>{e({fps:n.detail.updatesPerSecond})})})},cleanupCallback({state:e,updateState:t}){var r;(r=e.cleanup)==null||r.call(e),t({cleanup:void 0})},renderCallback({state:e,inputs:t}){return p`
            <span ${qt("fps-display")}>
                ${e.fps.toFixed(t.decimals||0)}
            </span>
        `}}),X5=Je({title:Cr.tagName,parent:$r,elementExamplesCallback({defineExample:e}){const t=new Wi([],{});e({title:"default",renderCallback(){return t.startUpdateLoop(),p`
                    <${Cr.assign({virLine:t})}></${Cr}>
                `}}),e({title:"2 decimals",renderCallback(){return t.startUpdateLoop(),p`
                    <${Cr.assign({virLine:t,decimals:2})}></${Cr}>
                `}})}}),Un=fe()({tagName:"vir-glow-pulse-book-wrapper",stateInitStatic:{intervalId:void 0,animation:void 0},initCallback({state:e,updateState:t,inputs:r}){e.intervalId==null&&t({intervalId:window.setInterval(()=>{t({animation:{timestamp:Date.now()}})},r.milliseconds)})},cleanupCallback({state:e,updateState:t}){e.intervalId!=null&&(window.clearInterval(e.intervalId),t({intervalId:void 0}))},renderCallback({state:e,inputs:t}){return p`
            <${At.assign({pulse:e.animation,glowColors:t.colors})}>
                ⚪️
            </${At}>
        `}}),Q5=Je({parent:$r,title:At.tagName,descriptionParagraphs:["Used to give repeated emphasis to an element. In particular, this is used for showing controller activity in vir-device-list."],elementExamplesCallback({defineExample:e}){e({title:"automatic",styles:$`
                :host {
                    ${Ke};
                }
            `,renderCallback(){return p`
                    <${Un.assign({milliseconds:500})}></${Un}>
                `}}),e({title:"custom colors",styles:$`
                :host {
                    ${Ke};
                }
            `,renderCallback(){return p`
                    <${Un.assign({milliseconds:500,colors:["blue","navy","dodgerblue","skyblue","lightblue"]})}></${Un}>
                `}}),e({title:"on click",stateInitStatic:{animation:void 0},styles:$`
                :host {
                    ${Ke};
                }
            `,renderCallback({state:t,updateState:r}){return p`
                    <${At.assign({pulse:t.animation})}
                        ${R("click",()=>{r({animation:{timestamp:Date.now()}})})}
                    >
                        ⚪️
                    </${At}>
                `}})}});var zu;(function(e){e.Upper="upper",e.Lower="lower"})(zu||(zu={}));var Wu;(function(e){e.FirstThenWait="first-then-wait",e.AfterWait="after-wait"})(Wu||(Wu={}));function e$(){return globalThis.crypto?globalThis.crypto:require("crypto").webcrypto}e$();const t$=Je({parent:$r,title:Fn.tagName,elementExamplesCallback({defineExample:e}){e({title:"Default",styles:$`
                .size {
                    width: 1000px;
                    max-width: 100%;
                }
            `,stateInitStatic:{playersActionsBindings:{1:{up:[{deviceKey:"0",direction:q.Positive,inputName:"button-2"},{deviceKey:"keyboard",direction:q.Positive,inputName:"button-ArrowUp"}],down:[{deviceKey:"0",direction:q.Positive,inputName:"axe-1"}]}}},renderCallback({state:t,updateState:r}){return p`
                    <div class="size">
                        <${Fn.assign({actionNames:["up","down","left","right","jump","pause"],supportedPlayerCount:2,playersActionsBindings:t.playersActionsBindings})}
                            ${R(Fn.events.playersActionsBindingsUpdate,n=>{r({playersActionsBindings:n.detail})})}
                        ></${Fn}>
                    </div>
                `}})}}),r$=[uo,Z5,Y5,$r,q5,J5,X5,Q5,t$];dn({tagName:"game-vir-demo-app",renderCallback(){return p`
            <${cu.assign({internalRouterConfig:{basePath:Ya("game-vir","book"),useInternalRouter:!0},entries:r$,themeColor:"#33ccff"})}></${cu}>
        `}});

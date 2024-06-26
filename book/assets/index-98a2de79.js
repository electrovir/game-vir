var zh=Object.defineProperty;var Wh=(t,e,r)=>e in t?zh(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r;var Ni=(t,e,r)=>(Wh(t,typeof e!="symbol"?e+"":e,r),r);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function r(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=r(i);fetch(i.href,s)}})();const Gh=[(t,e)=>e in t,(t,e)=>e in t.constructor.prototype];function cr(t,e){return t?Gh.some(r=>{try{return r(t,e)}catch{return!1}}):!1}function yu(t,e){return t&&e.every(r=>cr(t,r))}function Ie(t){let e;try{e=Reflect.ownKeys(t)}catch{}return e??[...Object.keys(t),...Object.getOwnPropertySymbols(t)]}function qh(t,e,r){return t.reduce((n,i,s,a)=>{const o=e(i,s,a);return r(o,i,s,a)&&n.push(o),n},[])}function qr(t){return!!t}function Kh(t,e="and"){if(t.length<2)return t.join("");const r=t.length>2?", ":" ";return`${t.slice(0,-1).join(r)}${r}${e} ${t[t.length-1]}`}function Zh(t,{keepNewLines:e}={}){return(e?t.replace(/[\s\n]*\n+[\s\n]*/g,`
`):t.replace(/\n/g," ")).trim().replace(/\s{2,}/g," ")}const Yh={capitalizeFirstLetter:!1};function Jh(t){return t.length?t[0].toUpperCase()+t.slice(1):""}function Xh(t,e){return e.capitalizeFirstLetter?Jh(t):t}function Qh(t,e=Yh){const r=t.toLowerCase();if(!r.length)return"";const n=r.replace(/^-+/,"").replace(/-{2,}/g,"-").replace(/-(?:.|$)/g,i=>{const s=i[1];return s?s.toUpperCase():""});return Xh(n,e)}var Xa;(function(t){t.Upper="upper",t.Lower="lower"})(Xa||(Xa={}));function em({min:t,max:e}){return t>e?{min:e,max:t}:{min:t,max:e}}var Qa;(function(t){t.FirstThenWait="first-then-wait",t.AfterWait="after-wait"})(Qa||(Qa={}));function bu(t){if(!t||t.length===0)return;const e=t[0];return t.length===1&&e?e:new Error(t.map(r=>ur(r).trim()).join(`
`))}function ur(t){return t?t instanceof Error?t.message:cr(t,"message")?String(t.message):String(t):""}function tm(t){return t instanceof Error?t:new Error(ur(t))}function rm(t,e){const r=tm(t);return r.message=`${e}: ${r.message}`,r}class ai extends Error{constructor(){super(...arguments),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AssertionError"})}}const nm=[(t,e)=>e in t,(t,e)=>e in t.constructor.prototype];function vu(t,e){return t?nm.some(r=>{try{return r(t,e)}catch{return!1}}):!1}function $u(t){return t instanceof Promise}function Jt(t){return t===null?"null":Array.isArray(t)?"array":typeof t}function k(t,e){return Jt(t)===e}function ea(t,e,r){if(!(t instanceof e))throw new ai(r||"instanceof assertion failed")}function im(t,e){if(t==null)throw new ai(e||"defined assertion failed")}class sm extends Error{constructor(e){super(`Failed to compare objects using JSON.stringify: ${e}`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"JsonStringifyError"})}}function Ii(t,e){return JSON.stringify(t)===JSON.stringify(e)}function le(t,e){try{if(t===e||Ii(t,e))return!0;if(Dr(t)&&Dr(e)){const r=Object.keys(t).sort(),n=Object.keys(e).sort();if(r.length||n.length)return Ii(r,n)?Ie(t).every(s=>le(t[s],e[s])):!1}return Ii(t,e)}catch(r){throw new sm(ur(r))}}function ta(t,e){return t===e}function am(t,e,r=ta){return Dr(t)&&Dr(e)?Array.from(new Set([...Object.keys(t),...Object.keys(e)])).every(i=>{const s=t[i],a=e[i];return r(s,a)}):r(t,e)}function om(t,e){if(t!==null&&(typeof t=="object"||typeof t=="function"))throw new ai(e||"value is not a primitive")}function lm(t){try{return om(t),!0}catch{return!1}}function cm(t,e){if(!(k(t,"string")||k(t,"number")||k(t,"symbol")))throw new ai(e||`value is of type '${Jt(t)}' but expected a PropertyKey.`)}function Di(t){try{return cm(t),!0}catch{return!1}}function um(t){return Ie(t).filter(e=>isNaN(Number(e)))}function dm(t){return um(t).map(r=>t[r])}function fm(t,e){return dm(e).includes(t)}function hm(t,e){return Ie(t).filter(n=>{const i=t[n];return e(n,i,t)}).reduce((n,i)=>(n[i]=t[i],n),{})}function mm(t,e){return hm(t,r=>!e.includes(r))}function pm(t,e,r){const n=e;if(t.has(n))return t.get(n);{const i=r();return t.set(n,i),i}}function gm(t,e,r){if(e in t)return t[e];{const n=r();return $u(n)?new Promise(async(i,s)=>{try{const a=await n;t[e]=a,i(a)}catch(a){s(a)}}):(t[e]=n,n)}}function st(t,e){let r=!1;const n=Ie(t).reduce((i,s)=>{const a=e(s,t[s],t);return a instanceof Promise&&(r=!0),{...i,[s]:a}},{});return r?new Promise(async(i,s)=>{try{await Promise.all(Ie(n).map(async a=>{const o=await n[a];n[a]=o})),i(n)}catch(a){s(a)}}):n}function eo(t,e){try{return wm(t,e),!0}catch{return!1}}function wm(t,e,r){if(t.length<e)throw new Error(r?`'${r}' is not at least '${e}' in length.`:`Array is not at least '${e}' in length.`)}function Dr(t){return!!t&&typeof t=="object"}function Eu(){let t,e,r=!1;const n=new Promise((i,s)=>{t=a=>(r=!0,i(a)),e=a=>{r=!0,s(a)}});if(!t||!e)throw new Error(`Reject and resolve callbacks were not set by the promise constructor for ${Eu.name}.`);return{promise:n,resolve:t,reject:e,isSettled(){return r}}}function ys(t){const e=Eu();return t!==1/0&&setTimeout(()=>{e.resolve()},t<=0?0:t),e.promise}function ym(){return globalThis.crypto?globalThis.crypto:require("crypto").webcrypto}const bm=ym();function vm({min:t,max:e}){const{min:r,max:n}=em({min:Math.floor(t),max:Math.floor(e)}),i=n-r+1,s=Math.ceil(Math.log2(i)/8),a=Math.floor(256**s/i)*i,o=new Uint8Array(s);let l;do bm.getRandomValues(o),l=o.reduce((c,d,u)=>c+d*256**u,0);while(l>=a);return r+l%i}const to=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",0,1,2,3,4,5,6,7,8,9];function $m(t=16){let e="";for(let r=0;r<t;r++){const n=vm({min:0,max:to.length-1});e+=to[n]}return e}const Em="px";function Tm(t){return Sm({value:t,suffix:Em})}function Sm({value:t,suffix:e}){return String(t).endsWith(e)?String(t):`${String(t)}${e}`}function km(t,e){return cr(t,"entryType")&&t.entryType===e}var Y;(function(t){t.ElementExample="element-example",t.Page="page",t.Root="root"})(Y||(Y={}));function It(t,e){return t.controlType===e}var Q;(function(t){t.Checkbox="checkbox",t.Color="color",t.Dropdown="dropdown",t.Hidden="hidden",t.Number="number",t.Text="text"})(Q||(Q={}));const Tu=Symbol("any-type"),Mm={[Q.Checkbox]:!1,[Q.Color]:"",[Q.Dropdown]:"",[Q.Hidden]:Tu,[Q.Number]:0,[Q.Text]:""};function xm(t,e){if(!t)return[];const r=[];return Object.entries(t).forEach(([n,i])=>{const s=Mm[i.controlType];s!==Tu&&(typeof s!=typeof i.initValue&&r.push(new Error(`Control '${n}' in page '${e}' has invalid initValue '${i.initValue}': expected initValue of type ${typeof s} because the control is of type ${i.controlType}.`)),n||r.push(new Error(`'${e}' cannot have an empty control name.`)))}),r}function ra(t,e){const r=Bn(t.title);return t.parent?[...ra(t.parent,!1),Bn(t.parent.title)].concat(e?[r]:[]):e?[r]:[]}function Bn(t){return Zh(t).toLowerCase().replaceAll(/\s/g,"-")}function Am({searchFor:t,searchIn:e}){return t.every((r,n)=>e[n]===r)}function Lt(t){const e={...t,entryType:Y.Page,elementExamples:{},descriptionParagraphs:t.descriptionParagraphs??[],controls:t.controls??{},errors:[]},r=new Set;return t.elementExamplesCallback&&t.elementExamplesCallback({defineExample(n){const i={...n,entryType:Y.ElementExample,parent:e,descriptionParagraphs:n.descriptionParagraphs??[],errors:[r.has(n.title)&&new Error(`Example title '${n.title}' in page '${t.title}' is already taken.`)].filter(qr)};r.add(n.title),e.elementExamples[Bn(i.title)]=i}}),e}var je;(function(t){t.Footer="book-footer",t.NavHeader="book-nav-header"})(je||(je={}));var ro;(function(t){t.Upper="upper",t.Lower="lower"})(ro||(ro={}));var no;(function(t){t.FirstThenWait="first-then-wait",t.AfterWait="after-wait"})(no||(no={}));function Cm(t,e,r){if(t.length<e)throw new Error(r?`'${r}' is not at least '${e}' in length.`:`Array is not at least '${e}' in length.`)}function Su(){let t,e,r=!1;const n=new Promise((i,s)=>{t=a=>(r=!0,i(a)),e=a=>{r=!0,s(a)}});if(!t||!e)throw new Error(`Reject and resolve callbacks were not set by the promise constructor for ${Su.name}.`);return{promise:n,resolve:t,reject:e,isSettled(){return r}}}function Lm(){return globalThis.crypto?globalThis.crypto:require("crypto").webcrypto}Lm();async function bs(t=1){const e=Su();function r(){requestAnimationFrame(()=>{t--,t?r():e.resolve()})}return r(),e.promise}function Fn(t){if(t instanceof ShadowRoot)return Fn(t.host);const e=t.parentNode;if(e)return e instanceof Element?e:Fn(e)}function ku(t,e){if(e(t))return t;const r=Fn(t);if(r)return ku(r,e)}async function Pm(t){return Om(t,1)}async function Om(t,e){return new Promise(r=>{new IntersectionObserver((i,s)=>{Cm(i,1),s.disconnect(),r(i[0].intersectionRatio>=e)}).observe(t)})}function Nm(t){const e=Fn(t);return e&&ku(e,r=>globalThis.getComputedStyle(r).overflowY!=="visible")||document.body}var Im=globalThis&&globalThis.__setFunctionName||function(t,e,r){return typeof e=="symbol"&&(e=e.description?"[".concat(e.description,"]"):""),Object.defineProperty(t,"name",{configurable:!0,value:r?"".concat(r," ",e):e})};function Dm(){return class extends Event{constructor(e,r){super(e,r),Object.defineProperty(this,"detail",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.detail=r.detail}}}const _m=globalThis.CustomEvent||Dm();function we(){function t(e){var r;return r=class extends _m{constructor(i){super(e,i)}},Im(r,"TypedEventConstructor"),Object.defineProperty(r,"type",{enumerable:!0,configurable:!0,writable:!0,value:e}),r}return t}var Rm=globalThis&&globalThis.__setFunctionName||function(t,e,r){return typeof e=="symbol"&&(e=e.description?"[".concat(e.description,"]"):""),Object.defineProperty(t,"name",{configurable:!0,value:r?"".concat(r," ",e):e})};function Kr(t){var e;return e=class extends Event{constructor(n){super(t,n)}},Rm(e,"TypedEventConstructor"),Object.defineProperty(e,"type",{enumerable:!0,configurable:!0,writable:!0,value:t}),e}function Vm(t){let e;try{e=Reflect.ownKeys(t)}catch{}return e??[...Object.keys(t),...Object.getOwnPropertySymbols(t)]}function io(t){return Vm(t).map(e=>t[e])}var so;(function(t){t.Upper="upper",t.Lower="lower"})(so||(so={}));var ao;(function(t){t.FirstThenWait="first-then-wait",t.AfterWait="after-wait"})(ao||(ao={}));function Hm(){return globalThis.crypto?globalThis.crypto:require("crypto").webcrypto}Hm();class Mu{constructor(){Object.defineProperty(this,"listeners",{enumerable:!0,configurable:!0,writable:!0,value:{}})}getListenerCount(){return io(this.listeners).map(r=>(r==null?void 0:r.size)||0).reduce((r,n)=>r+n,0)}listen(e,r,n={}){const i=this.listeners,s=k(e,"string")?e:e.type;function a(){var l;return((l=i[s])==null?void 0:l.delete(r))||!1}function o(l,c){n.once&&a(),r(l,c)}return i[s]||(i[s]=new Map),i[s].set(r,{listener:o,removeListener:a}),a}removeListener(e,r){const n=k(e,"string")?e:e.type,i=this.listeners[n];if(!i)return!1;const s=i.get(r);return s?s.removeListener():!1}dispatch(e){const r=this.listeners[e.type],n=(r==null?void 0:r.size)||0;return r==null||r.forEach(i=>{i.listener(e,i.removeListener)}),n}removeAllListeners(){const r=io(this.listeners).reduce((n,i)=>{const s=(i==null?void 0:i.size)||0;return i==null||i.clear(),n+s},0);return this.listeners={},r}destroy(){this.removeAllListeners()}}class na extends Mu{}function xu(t,e,r,n){return t.addEventListener(e,r,n),()=>t.removeEventListener(e,r,n)}function yt(t,e,r){return xu(globalThis,t,e,r)}const Bm=Symbol("no update");class _i extends we()("observable-value-update"){}class U2 extends we()("observable-value-resolve"){}class j2 extends we()("observable-value-error"){}class Fm extends Kr("observable-destroy"){}class z2 extends Kr("observable-callback-call"){}class W2 extends we()("observable-params-update"){}class G2 extends we()("observable-interval-run"){}class q2 extends we()("observable-interval-skip"){}class K2 extends we()("observable-interval-rate-limited"){}class Um{constructor(){Object.defineProperty(this,"listenTarget",{enumerable:!0,configurable:!0,writable:!0,value:new na}),Object.defineProperty(this,"value",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"equalityCheck",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"listenerMap",{enumerable:!0,configurable:!0,writable:!0,value:new WeakMap})}dispatch(...e){return this.listenTarget.dispatch(...e)}removeAllListeners(){return this.listenTarget.removeAllListeners()}getListenerCount(){return this.listenTarget.getListenerCount()}setValue(e,r=this.equalityCheck){return e===Bm?!1:!r||!r(this.value,e)?(this.value=e,this.listenTarget.dispatch(new _i({detail:e})),!0):!1}listen(e,r){const n=i=>r(i.detail);return this.listenerMap.set(r,n),e&&r(this.value),this.listenTarget.listen(_i,n)}removeListener(e){const r=this.listenerMap.get(e);return!!r&&this.listenTarget.removeListener(_i,r)}destroy(){this.listenTarget.dispatch(new Fm),this.listenTarget.destroy()}listenToEvent(e,r,n){return this.listenTarget.listen(e,r,n)}}function jm(t,e){return am(t,e,zm)}function zm(t,e){return Jt(t)===Jt(e)&&k(t,"function")?!0:ta(t,e)}function Wm(t){let e;try{e=Reflect.ownKeys(t)}catch{}return e??[...Object.keys(t),...Object.getOwnPropertySymbols(t)]}var oo;(function(t){t.Upper="upper",t.Lower="lower"})(oo||(oo={}));var lo;(function(t){t.FirstThenWait="first-then-wait",t.AfterWait="after-wait"})(lo||(lo={}));function Au(t,e){return Wm(t).filter(n=>{const i=t[n];return e(n,i,t)}).reduce((n,i)=>(n[i]=t[i],n),{})}function Gm(t,e){return Au(t,r=>!e.includes(r))}function qm(t,e){return Au(t,r=>e.includes(r))}function Km(){return globalThis.crypto?globalThis.crypto:require("crypto").webcrypto}Km();class Pt extends Error{}class Zm extends Pt{constructor(e){super(`Invalid DateTime: ${e.toMessage()}`)}}class Ym extends Pt{constructor(e){super(`Invalid Interval: ${e.toMessage()}`)}}class Jm extends Pt{constructor(e){super(`Invalid Duration: ${e.toMessage()}`)}}class zt extends Pt{}class Cu extends Pt{constructor(e){super(`Invalid unit ${e}`)}}class ae extends Pt{}class Je extends Pt{constructor(){super("Zone is an abstract class")}}const w="numeric",De="short",me="long",Un={year:w,month:w,day:w},Lu={year:w,month:De,day:w},Xm={year:w,month:De,day:w,weekday:De},Pu={year:w,month:me,day:w},Ou={year:w,month:me,day:w,weekday:me},Nu={hour:w,minute:w},Iu={hour:w,minute:w,second:w},Du={hour:w,minute:w,second:w,timeZoneName:De},_u={hour:w,minute:w,second:w,timeZoneName:me},Ru={hour:w,minute:w,hourCycle:"h23"},Vu={hour:w,minute:w,second:w,hourCycle:"h23"},Hu={hour:w,minute:w,second:w,hourCycle:"h23",timeZoneName:De},Bu={hour:w,minute:w,second:w,hourCycle:"h23",timeZoneName:me},Fu={year:w,month:w,day:w,hour:w,minute:w},Uu={year:w,month:w,day:w,hour:w,minute:w,second:w},ju={year:w,month:De,day:w,hour:w,minute:w},zu={year:w,month:De,day:w,hour:w,minute:w,second:w},Qm={year:w,month:De,day:w,weekday:De,hour:w,minute:w},Wu={year:w,month:me,day:w,hour:w,minute:w,timeZoneName:De},Gu={year:w,month:me,day:w,hour:w,minute:w,second:w,timeZoneName:De},qu={year:w,month:me,day:w,weekday:me,hour:w,minute:w,timeZoneName:me},Ku={year:w,month:me,day:w,weekday:me,hour:w,minute:w,second:w,timeZoneName:me};class Zr{get type(){throw new Je}get name(){throw new Je}get ianaName(){return this.name}get isUniversal(){throw new Je}offsetName(e,r){throw new Je}formatOffset(e,r){throw new Je}offset(e){throw new Je}equals(e){throw new Je}get isValid(){throw new Je}}let Ri=null;class oi extends Zr{static get instance(){return Ri===null&&(Ri=new oi),Ri}get type(){return"system"}get name(){return new Intl.DateTimeFormat().resolvedOptions().timeZone}get isUniversal(){return!1}offsetName(e,{format:r,locale:n}){return nd(e,r,n)}formatOffset(e,r){return Cr(this.offset(e),r)}offset(e){return-new Date(e).getTimezoneOffset()}equals(e){return e.type==="system"}get isValid(){return!0}}let Pn={};function ep(t){return Pn[t]||(Pn[t]=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:t,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",era:"short"})),Pn[t]}const tp={year:0,month:1,day:2,era:3,hour:4,minute:5,second:6};function rp(t,e){const r=t.format(e).replace(/\u200E/g,""),n=/(\d+)\/(\d+)\/(\d+) (AD|BC),? (\d+):(\d+):(\d+)/.exec(r),[,i,s,a,o,l,c,d]=n;return[a,i,s,o,l,c,d]}function np(t,e){const r=t.formatToParts(e),n=[];for(let i=0;i<r.length;i++){const{type:s,value:a}=r[i],o=tp[s];s==="era"?n[o]=a:M(o)||(n[o]=parseInt(a,10))}return n}let ln={};class qe extends Zr{static create(e){return ln[e]||(ln[e]=new qe(e)),ln[e]}static resetCache(){ln={},Pn={}}static isValidSpecifier(e){return this.isValidZone(e)}static isValidZone(e){if(!e)return!1;try{return new Intl.DateTimeFormat("en-US",{timeZone:e}).format(),!0}catch{return!1}}constructor(e){super(),this.zoneName=e,this.valid=qe.isValidZone(e)}get type(){return"iana"}get name(){return this.zoneName}get isUniversal(){return!1}offsetName(e,{format:r,locale:n}){return nd(e,r,n,this.name)}formatOffset(e,r){return Cr(this.offset(e),r)}offset(e){const r=new Date(e);if(isNaN(r))return NaN;const n=ep(this.name);let[i,s,a,o,l,c,d]=n.formatToParts?np(n,r):rp(n,r);o==="BC"&&(i=-Math.abs(i)+1);const f=ci({year:i,month:s,day:a,hour:l===24?0:l,minute:c,second:d,millisecond:0});let h=+r;const m=h%1e3;return h-=m>=0?m:1e3+m,(f-h)/(60*1e3)}equals(e){return e.type==="iana"&&e.name===this.name}get isValid(){return this.valid}}let co={};function ip(t,e={}){const r=JSON.stringify([t,e]);let n=co[r];return n||(n=new Intl.ListFormat(t,e),co[r]=n),n}let vs={};function $s(t,e={}){const r=JSON.stringify([t,e]);let n=vs[r];return n||(n=new Intl.DateTimeFormat(t,e),vs[r]=n),n}let Es={};function sp(t,e={}){const r=JSON.stringify([t,e]);let n=Es[r];return n||(n=new Intl.NumberFormat(t,e),Es[r]=n),n}let Ts={};function ap(t,e={}){const{base:r,...n}=e,i=JSON.stringify([t,n]);let s=Ts[i];return s||(s=new Intl.RelativeTimeFormat(t,e),Ts[i]=s),s}let Er=null;function op(){return Er||(Er=new Intl.DateTimeFormat().resolvedOptions().locale,Er)}let uo={};function lp(t){let e=uo[t];if(!e){const r=new Intl.Locale(t);e="getWeekInfo"in r?r.getWeekInfo():r.weekInfo,uo[t]=e}return e}function cp(t){const e=t.indexOf("-x-");e!==-1&&(t=t.substring(0,e));const r=t.indexOf("-u-");if(r===-1)return[t];{let n,i;try{n=$s(t).resolvedOptions(),i=t}catch{const l=t.substring(0,r);n=$s(l).resolvedOptions(),i=l}const{numberingSystem:s,calendar:a}=n;return[i,s,a]}}function up(t,e,r){return(r||e)&&(t.includes("-u-")||(t+="-u"),r&&(t+=`-ca-${r}`),e&&(t+=`-nu-${e}`)),t}function dp(t){const e=[];for(let r=1;r<=12;r++){const n=T.utc(2009,r,1);e.push(t(n))}return e}function fp(t){const e=[];for(let r=1;r<=7;r++){const n=T.utc(2016,11,13+r);e.push(t(n))}return e}function cn(t,e,r,n){const i=t.listingMode();return i==="error"?null:i==="en"?r(e):n(e)}function hp(t){return t.numberingSystem&&t.numberingSystem!=="latn"?!1:t.numberingSystem==="latn"||!t.locale||t.locale.startsWith("en")||new Intl.DateTimeFormat(t.intl).resolvedOptions().numberingSystem==="latn"}class mp{constructor(e,r,n){this.padTo=n.padTo||0,this.floor=n.floor||!1;const{padTo:i,floor:s,...a}=n;if(!r||Object.keys(a).length>0){const o={useGrouping:!1,...n};n.padTo>0&&(o.minimumIntegerDigits=n.padTo),this.inf=sp(e,o)}}format(e){if(this.inf){const r=this.floor?Math.floor(e):e;return this.inf.format(r)}else{const r=this.floor?Math.floor(e):oa(e,3);return G(r,this.padTo)}}}class pp{constructor(e,r,n){this.opts=n,this.originalZone=void 0;let i;if(this.opts.timeZone)this.dt=e;else if(e.zone.type==="fixed"){const a=-1*(e.offset/60),o=a>=0?`Etc/GMT+${a}`:`Etc/GMT${a}`;e.offset!==0&&qe.create(o).valid?(i=o,this.dt=e):(i="UTC",this.dt=e.offset===0?e:e.setZone("UTC").plus({minutes:e.offset}),this.originalZone=e.zone)}else e.zone.type==="system"?this.dt=e:e.zone.type==="iana"?(this.dt=e,i=e.zone.name):(i="UTC",this.dt=e.setZone("UTC").plus({minutes:e.offset}),this.originalZone=e.zone);const s={...this.opts};s.timeZone=s.timeZone||i,this.dtf=$s(r,s)}format(){return this.originalZone?this.formatToParts().map(({value:e})=>e).join(""):this.dtf.format(this.dt.toJSDate())}formatToParts(){const e=this.dtf.formatToParts(this.dt.toJSDate());return this.originalZone?e.map(r=>{if(r.type==="timeZoneName"){const n=this.originalZone.offsetName(this.dt.ts,{locale:this.dt.locale,format:this.opts.timeZoneName});return{...r,value:n}}else return r}):e}resolvedOptions(){return this.dtf.resolvedOptions()}}class gp{constructor(e,r,n){this.opts={style:"long",...n},!r&&td()&&(this.rtf=ap(e,n))}format(e,r){return this.rtf?this.rtf.format(e,r):_p(r,e,this.opts.numeric,this.opts.style!=="long")}formatToParts(e,r){return this.rtf?this.rtf.formatToParts(e,r):[]}}const wp={firstDay:1,minimalDays:4,weekend:[6,7]};class V{static fromOpts(e){return V.create(e.locale,e.numberingSystem,e.outputCalendar,e.weekSettings,e.defaultToEN)}static create(e,r,n,i,s=!1){const a=e||U.defaultLocale,o=a||(s?"en-US":op()),l=r||U.defaultNumberingSystem,c=n||U.defaultOutputCalendar,d=Ss(i)||U.defaultWeekSettings;return new V(o,l,c,d,a)}static resetCache(){Er=null,vs={},Es={},Ts={}}static fromObject({locale:e,numberingSystem:r,outputCalendar:n,weekSettings:i}={}){return V.create(e,r,n,i)}constructor(e,r,n,i,s){const[a,o,l]=cp(e);this.locale=a,this.numberingSystem=r||o||null,this.outputCalendar=n||l||null,this.weekSettings=i,this.intl=up(this.locale,this.numberingSystem,this.outputCalendar),this.weekdaysCache={format:{},standalone:{}},this.monthsCache={format:{},standalone:{}},this.meridiemCache=null,this.eraCache={},this.specifiedLocale=s,this.fastNumbersCached=null}get fastNumbers(){return this.fastNumbersCached==null&&(this.fastNumbersCached=hp(this)),this.fastNumbersCached}listingMode(){const e=this.isEnglish(),r=(this.numberingSystem===null||this.numberingSystem==="latn")&&(this.outputCalendar===null||this.outputCalendar==="gregory");return e&&r?"en":"intl"}clone(e){return!e||Object.getOwnPropertyNames(e).length===0?this:V.create(e.locale||this.specifiedLocale,e.numberingSystem||this.numberingSystem,e.outputCalendar||this.outputCalendar,Ss(e.weekSettings)||this.weekSettings,e.defaultToEN||!1)}redefaultToEN(e={}){return this.clone({...e,defaultToEN:!0})}redefaultToSystem(e={}){return this.clone({...e,defaultToEN:!1})}months(e,r=!1){return cn(this,e,ad,()=>{const n=r?{month:e,day:"numeric"}:{month:e},i=r?"format":"standalone";return this.monthsCache[i][e]||(this.monthsCache[i][e]=dp(s=>this.extract(s,n,"month"))),this.monthsCache[i][e]})}weekdays(e,r=!1){return cn(this,e,cd,()=>{const n=r?{weekday:e,year:"numeric",month:"long",day:"numeric"}:{weekday:e},i=r?"format":"standalone";return this.weekdaysCache[i][e]||(this.weekdaysCache[i][e]=fp(s=>this.extract(s,n,"weekday"))),this.weekdaysCache[i][e]})}meridiems(){return cn(this,void 0,()=>ud,()=>{if(!this.meridiemCache){const e={hour:"numeric",hourCycle:"h12"};this.meridiemCache=[T.utc(2016,11,13,9),T.utc(2016,11,13,19)].map(r=>this.extract(r,e,"dayperiod"))}return this.meridiemCache})}eras(e){return cn(this,e,dd,()=>{const r={era:e};return this.eraCache[e]||(this.eraCache[e]=[T.utc(-40,1,1),T.utc(2017,1,1)].map(n=>this.extract(n,r,"era"))),this.eraCache[e]})}extract(e,r,n){const i=this.dtFormatter(e,r),s=i.formatToParts(),a=s.find(o=>o.type.toLowerCase()===n);return a?a.value:null}numberFormatter(e={}){return new mp(this.intl,e.forceSimple||this.fastNumbers,e)}dtFormatter(e,r={}){return new pp(e,this.intl,r)}relFormatter(e={}){return new gp(this.intl,this.isEnglish(),e)}listFormatter(e={}){return ip(this.intl,e)}isEnglish(){return this.locale==="en"||this.locale.toLowerCase()==="en-us"||new Intl.DateTimeFormat(this.intl).resolvedOptions().locale.startsWith("en-us")}getWeekSettings(){return this.weekSettings?this.weekSettings:rd()?lp(this.locale):wp}getStartOfWeek(){return this.getWeekSettings().firstDay}getMinDaysInFirstWeek(){return this.getWeekSettings().minimalDays}getWeekendDays(){return this.getWeekSettings().weekend}equals(e){return this.locale===e.locale&&this.numberingSystem===e.numberingSystem&&this.outputCalendar===e.outputCalendar}}let Vi=null;class te extends Zr{static get utcInstance(){return Vi===null&&(Vi=new te(0)),Vi}static instance(e){return e===0?te.utcInstance:new te(e)}static parseSpecifier(e){if(e){const r=e.match(/^utc(?:([+-]\d{1,2})(?::(\d{2}))?)?$/i);if(r)return new te(ui(r[1],r[2]))}return null}constructor(e){super(),this.fixed=e}get type(){return"fixed"}get name(){return this.fixed===0?"UTC":`UTC${Cr(this.fixed,"narrow")}`}get ianaName(){return this.fixed===0?"Etc/UTC":`Etc/GMT${Cr(-this.fixed,"narrow")}`}offsetName(){return this.name}formatOffset(e,r){return Cr(this.fixed,r)}get isUniversal(){return!0}offset(){return this.fixed}equals(e){return e.type==="fixed"&&e.fixed===this.fixed}get isValid(){return!0}}class yp extends Zr{constructor(e){super(),this.zoneName=e}get type(){return"invalid"}get name(){return this.zoneName}get isUniversal(){return!1}offsetName(){return null}formatOffset(){return""}offset(){return NaN}equals(){return!1}get isValid(){return!1}}function et(t,e){if(M(t)||t===null)return e;if(t instanceof Zr)return t;if($p(t)){const r=t.toLowerCase();return r==="default"?e:r==="local"||r==="system"?oi.instance:r==="utc"||r==="gmt"?te.utcInstance:te.parseSpecifier(r)||qe.create(t)}else return Tt(t)?te.instance(t):typeof t=="object"&&"offset"in t&&typeof t.offset=="function"?t:new yp(t)}let fo=()=>Date.now(),ho="system",mo=null,po=null,go=null,wo=60,yo,bo=null;class U{static get now(){return fo}static set now(e){fo=e}static set defaultZone(e){ho=e}static get defaultZone(){return et(ho,oi.instance)}static get defaultLocale(){return mo}static set defaultLocale(e){mo=e}static get defaultNumberingSystem(){return po}static set defaultNumberingSystem(e){po=e}static get defaultOutputCalendar(){return go}static set defaultOutputCalendar(e){go=e}static get defaultWeekSettings(){return bo}static set defaultWeekSettings(e){bo=Ss(e)}static get twoDigitCutoffYear(){return wo}static set twoDigitCutoffYear(e){wo=e%100}static get throwOnInvalid(){return yo}static set throwOnInvalid(e){yo=e}static resetCaches(){V.resetCache(),qe.resetCache()}}class Ne{constructor(e,r){this.reason=e,this.explanation=r}toMessage(){return this.explanation?`${this.reason}: ${this.explanation}`:this.reason}}const Zu=[0,31,59,90,120,151,181,212,243,273,304,334],Yu=[0,31,60,91,121,152,182,213,244,274,305,335];function Se(t,e){return new Ne("unit out of range",`you specified ${e} (of type ${typeof e}) as a ${t}, which is invalid`)}function ia(t,e,r){const n=new Date(Date.UTC(t,e-1,r));t<100&&t>=0&&n.setUTCFullYear(n.getUTCFullYear()-1900);const i=n.getUTCDay();return i===0?7:i}function Ju(t,e,r){return r+(Yr(t)?Yu:Zu)[e-1]}function Xu(t,e){const r=Yr(t)?Yu:Zu,n=r.findIndex(s=>s<e),i=e-r[n];return{month:n+1,day:i}}function sa(t,e){return(t-e+7)%7+1}function jn(t,e=4,r=1){const{year:n,month:i,day:s}=t,a=Ju(n,i,s),o=sa(ia(n,i,s),r);let l=Math.floor((a-o+14-e)/7),c;return l<1?(c=n-1,l=_r(c,e,r)):l>_r(n,e,r)?(c=n+1,l=1):c=n,{weekYear:c,weekNumber:l,weekday:o,...di(t)}}function vo(t,e=4,r=1){const{weekYear:n,weekNumber:i,weekday:s}=t,a=sa(ia(n,1,e),r),o=Wt(n);let l=i*7+s-a-7+e,c;l<1?(c=n-1,l+=Wt(c)):l>o?(c=n+1,l-=Wt(n)):c=n;const{month:d,day:u}=Xu(c,l);return{year:c,month:d,day:u,...di(t)}}function Hi(t){const{year:e,month:r,day:n}=t,i=Ju(e,r,n);return{year:e,ordinal:i,...di(t)}}function $o(t){const{year:e,ordinal:r}=t,{month:n,day:i}=Xu(e,r);return{year:e,month:n,day:i,...di(t)}}function Eo(t,e){if(!M(t.localWeekday)||!M(t.localWeekNumber)||!M(t.localWeekYear)){if(!M(t.weekday)||!M(t.weekNumber)||!M(t.weekYear))throw new zt("Cannot mix locale-based week fields with ISO-based week fields");return M(t.localWeekday)||(t.weekday=t.localWeekday),M(t.localWeekNumber)||(t.weekNumber=t.localWeekNumber),M(t.localWeekYear)||(t.weekYear=t.localWeekYear),delete t.localWeekday,delete t.localWeekNumber,delete t.localWeekYear,{minDaysInFirstWeek:e.getMinDaysInFirstWeek(),startOfWeek:e.getStartOfWeek()}}else return{minDaysInFirstWeek:4,startOfWeek:1}}function bp(t,e=4,r=1){const n=li(t.weekYear),i=ke(t.weekNumber,1,_r(t.weekYear,e,r)),s=ke(t.weekday,1,7);return n?i?s?!1:Se("weekday",t.weekday):Se("week",t.weekNumber):Se("weekYear",t.weekYear)}function vp(t){const e=li(t.year),r=ke(t.ordinal,1,Wt(t.year));return e?r?!1:Se("ordinal",t.ordinal):Se("year",t.year)}function Qu(t){const e=li(t.year),r=ke(t.month,1,12),n=ke(t.day,1,zn(t.year,t.month));return e?r?n?!1:Se("day",t.day):Se("month",t.month):Se("year",t.year)}function ed(t){const{hour:e,minute:r,second:n,millisecond:i}=t,s=ke(e,0,23)||e===24&&r===0&&n===0&&i===0,a=ke(r,0,59),o=ke(n,0,59),l=ke(i,0,999);return s?a?o?l?!1:Se("millisecond",i):Se("second",n):Se("minute",r):Se("hour",e)}function M(t){return typeof t>"u"}function Tt(t){return typeof t=="number"}function li(t){return typeof t=="number"&&t%1===0}function $p(t){return typeof t=="string"}function Ep(t){return Object.prototype.toString.call(t)==="[object Date]"}function td(){try{return typeof Intl<"u"&&!!Intl.RelativeTimeFormat}catch{return!1}}function rd(){try{return typeof Intl<"u"&&!!Intl.Locale&&("weekInfo"in Intl.Locale.prototype||"getWeekInfo"in Intl.Locale.prototype)}catch{return!1}}function Tp(t){return Array.isArray(t)?t:[t]}function To(t,e,r){if(t.length!==0)return t.reduce((n,i)=>{const s=[e(i),i];return n&&r(n[0],s[0])===n[0]?n:s},null)[1]}function Sp(t,e){return e.reduce((r,n)=>(r[n]=t[n],r),{})}function Xt(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Ss(t){if(t==null)return null;if(typeof t!="object")throw new ae("Week settings must be an object");if(!ke(t.firstDay,1,7)||!ke(t.minimalDays,1,7)||!Array.isArray(t.weekend)||t.weekend.some(e=>!ke(e,1,7)))throw new ae("Invalid week settings");return{firstDay:t.firstDay,minimalDays:t.minimalDays,weekend:Array.from(t.weekend)}}function ke(t,e,r){return li(t)&&t>=e&&t<=r}function kp(t,e){return t-e*Math.floor(t/e)}function G(t,e=2){const r=t<0;let n;return r?n="-"+(""+-t).padStart(e,"0"):n=(""+t).padStart(e,"0"),n}function Qe(t){if(!(M(t)||t===null||t===""))return parseInt(t,10)}function mt(t){if(!(M(t)||t===null||t===""))return parseFloat(t)}function aa(t){if(!(M(t)||t===null||t==="")){const e=parseFloat("0."+t)*1e3;return Math.floor(e)}}function oa(t,e,r=!1){const n=10**e;return(r?Math.trunc:Math.round)(t*n)/n}function Yr(t){return t%4===0&&(t%100!==0||t%400===0)}function Wt(t){return Yr(t)?366:365}function zn(t,e){const r=kp(e-1,12)+1,n=t+(e-r)/12;return r===2?Yr(n)?29:28:[31,null,31,30,31,30,31,31,30,31,30,31][r-1]}function ci(t){let e=Date.UTC(t.year,t.month-1,t.day,t.hour,t.minute,t.second,t.millisecond);return t.year<100&&t.year>=0&&(e=new Date(e),e.setUTCFullYear(t.year,t.month-1,t.day)),+e}function So(t,e,r){return-sa(ia(t,1,e),r)+e-1}function _r(t,e=4,r=1){const n=So(t,e,r),i=So(t+1,e,r);return(Wt(t)-n+i)/7}function ks(t){return t>99?t:t>U.twoDigitCutoffYear?1900+t:2e3+t}function nd(t,e,r,n=null){const i=new Date(t),s={hourCycle:"h23",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"};n&&(s.timeZone=n);const a={timeZoneName:e,...s},o=new Intl.DateTimeFormat(r,a).formatToParts(i).find(l=>l.type.toLowerCase()==="timezonename");return o?o.value:null}function ui(t,e){let r=parseInt(t,10);Number.isNaN(r)&&(r=0);const n=parseInt(e,10)||0,i=r<0||Object.is(r,-0)?-n:n;return r*60+i}function id(t){const e=Number(t);if(typeof t=="boolean"||t===""||Number.isNaN(e))throw new ae(`Invalid unit value ${t}`);return e}function Wn(t,e){const r={};for(const n in t)if(Xt(t,n)){const i=t[n];if(i==null)continue;r[e(n)]=id(i)}return r}function Cr(t,e){const r=Math.trunc(Math.abs(t/60)),n=Math.trunc(Math.abs(t%60)),i=t>=0?"+":"-";switch(e){case"short":return`${i}${G(r,2)}:${G(n,2)}`;case"narrow":return`${i}${r}${n>0?`:${n}`:""}`;case"techie":return`${i}${G(r,2)}${G(n,2)}`;default:throw new RangeError(`Value format ${e} is out of range for property format`)}}function di(t){return Sp(t,["hour","minute","second","millisecond"])}const Mp=["January","February","March","April","May","June","July","August","September","October","November","December"],sd=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],xp=["J","F","M","A","M","J","J","A","S","O","N","D"];function ad(t){switch(t){case"narrow":return[...xp];case"short":return[...sd];case"long":return[...Mp];case"numeric":return["1","2","3","4","5","6","7","8","9","10","11","12"];case"2-digit":return["01","02","03","04","05","06","07","08","09","10","11","12"];default:return null}}const od=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],ld=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],Ap=["M","T","W","T","F","S","S"];function cd(t){switch(t){case"narrow":return[...Ap];case"short":return[...ld];case"long":return[...od];case"numeric":return["1","2","3","4","5","6","7"];default:return null}}const ud=["AM","PM"],Cp=["Before Christ","Anno Domini"],Lp=["BC","AD"],Pp=["B","A"];function dd(t){switch(t){case"narrow":return[...Pp];case"short":return[...Lp];case"long":return[...Cp];default:return null}}function Op(t){return ud[t.hour<12?0:1]}function Np(t,e){return cd(e)[t.weekday-1]}function Ip(t,e){return ad(e)[t.month-1]}function Dp(t,e){return dd(e)[t.year<0?0:1]}function _p(t,e,r="always",n=!1){const i={years:["year","yr."],quarters:["quarter","qtr."],months:["month","mo."],weeks:["week","wk."],days:["day","day","days"],hours:["hour","hr."],minutes:["minute","min."],seconds:["second","sec."]},s=["hours","minutes","seconds"].indexOf(t)===-1;if(r==="auto"&&s){const u=t==="days";switch(e){case 1:return u?"tomorrow":`next ${i[t][0]}`;case-1:return u?"yesterday":`last ${i[t][0]}`;case 0:return u?"today":`this ${i[t][0]}`}}const a=Object.is(e,-0)||e<0,o=Math.abs(e),l=o===1,c=i[t],d=n?l?c[1]:c[2]||c[1]:l?i[t][0]:t;return a?`${o} ${d} ago`:`in ${o} ${d}`}function ko(t,e){let r="";for(const n of t)n.literal?r+=n.val:r+=e(n.val);return r}const Rp={D:Un,DD:Lu,DDD:Pu,DDDD:Ou,t:Nu,tt:Iu,ttt:Du,tttt:_u,T:Ru,TT:Vu,TTT:Hu,TTTT:Bu,f:Fu,ff:ju,fff:Wu,ffff:qu,F:Uu,FF:zu,FFF:Gu,FFFF:Ku};class X{static create(e,r={}){return new X(e,r)}static parseFormat(e){let r=null,n="",i=!1;const s=[];for(let a=0;a<e.length;a++){const o=e.charAt(a);o==="'"?(n.length>0&&s.push({literal:i||/^\s+$/.test(n),val:n}),r=null,n="",i=!i):i||o===r?n+=o:(n.length>0&&s.push({literal:/^\s+$/.test(n),val:n}),n=o,r=o)}return n.length>0&&s.push({literal:i||/^\s+$/.test(n),val:n}),s}static macroTokenToFormatOpts(e){return Rp[e]}constructor(e,r){this.opts=r,this.loc=e,this.systemLoc=null}formatWithSystemDefault(e,r){return this.systemLoc===null&&(this.systemLoc=this.loc.redefaultToSystem()),this.systemLoc.dtFormatter(e,{...this.opts,...r}).format()}dtFormatter(e,r={}){return this.loc.dtFormatter(e,{...this.opts,...r})}formatDateTime(e,r){return this.dtFormatter(e,r).format()}formatDateTimeParts(e,r){return this.dtFormatter(e,r).formatToParts()}formatInterval(e,r){return this.dtFormatter(e.start,r).dtf.formatRange(e.start.toJSDate(),e.end.toJSDate())}resolvedOptions(e,r){return this.dtFormatter(e,r).resolvedOptions()}num(e,r=0){if(this.opts.forceSimple)return G(e,r);const n={...this.opts};return r>0&&(n.padTo=r),this.loc.numberFormatter(n).format(e)}formatDateTimeFromString(e,r){const n=this.loc.listingMode()==="en",i=this.loc.outputCalendar&&this.loc.outputCalendar!=="gregory",s=(h,m)=>this.loc.extract(e,h,m),a=h=>e.isOffsetFixed&&e.offset===0&&h.allowZ?"Z":e.isValid?e.zone.formatOffset(e.ts,h.format):"",o=()=>n?Op(e):s({hour:"numeric",hourCycle:"h12"},"dayperiod"),l=(h,m)=>n?Ip(e,h):s(m?{month:h}:{month:h,day:"numeric"},"month"),c=(h,m)=>n?Np(e,h):s(m?{weekday:h}:{weekday:h,month:"long",day:"numeric"},"weekday"),d=h=>{const m=X.macroTokenToFormatOpts(h);return m?this.formatWithSystemDefault(e,m):h},u=h=>n?Dp(e,h):s({era:h},"era"),f=h=>{switch(h){case"S":return this.num(e.millisecond);case"u":case"SSS":return this.num(e.millisecond,3);case"s":return this.num(e.second);case"ss":return this.num(e.second,2);case"uu":return this.num(Math.floor(e.millisecond/10),2);case"uuu":return this.num(Math.floor(e.millisecond/100));case"m":return this.num(e.minute);case"mm":return this.num(e.minute,2);case"h":return this.num(e.hour%12===0?12:e.hour%12);case"hh":return this.num(e.hour%12===0?12:e.hour%12,2);case"H":return this.num(e.hour);case"HH":return this.num(e.hour,2);case"Z":return a({format:"narrow",allowZ:this.opts.allowZ});case"ZZ":return a({format:"short",allowZ:this.opts.allowZ});case"ZZZ":return a({format:"techie",allowZ:this.opts.allowZ});case"ZZZZ":return e.zone.offsetName(e.ts,{format:"short",locale:this.loc.locale});case"ZZZZZ":return e.zone.offsetName(e.ts,{format:"long",locale:this.loc.locale});case"z":return e.zoneName;case"a":return o();case"d":return i?s({day:"numeric"},"day"):this.num(e.day);case"dd":return i?s({day:"2-digit"},"day"):this.num(e.day,2);case"c":return this.num(e.weekday);case"ccc":return c("short",!0);case"cccc":return c("long",!0);case"ccccc":return c("narrow",!0);case"E":return this.num(e.weekday);case"EEE":return c("short",!1);case"EEEE":return c("long",!1);case"EEEEE":return c("narrow",!1);case"L":return i?s({month:"numeric",day:"numeric"},"month"):this.num(e.month);case"LL":return i?s({month:"2-digit",day:"numeric"},"month"):this.num(e.month,2);case"LLL":return l("short",!0);case"LLLL":return l("long",!0);case"LLLLL":return l("narrow",!0);case"M":return i?s({month:"numeric"},"month"):this.num(e.month);case"MM":return i?s({month:"2-digit"},"month"):this.num(e.month,2);case"MMM":return l("short",!1);case"MMMM":return l("long",!1);case"MMMMM":return l("narrow",!1);case"y":return i?s({year:"numeric"},"year"):this.num(e.year);case"yy":return i?s({year:"2-digit"},"year"):this.num(e.year.toString().slice(-2),2);case"yyyy":return i?s({year:"numeric"},"year"):this.num(e.year,4);case"yyyyyy":return i?s({year:"numeric"},"year"):this.num(e.year,6);case"G":return u("short");case"GG":return u("long");case"GGGGG":return u("narrow");case"kk":return this.num(e.weekYear.toString().slice(-2),2);case"kkkk":return this.num(e.weekYear,4);case"W":return this.num(e.weekNumber);case"WW":return this.num(e.weekNumber,2);case"n":return this.num(e.localWeekNumber);case"nn":return this.num(e.localWeekNumber,2);case"ii":return this.num(e.localWeekYear.toString().slice(-2),2);case"iiii":return this.num(e.localWeekYear,4);case"o":return this.num(e.ordinal);case"ooo":return this.num(e.ordinal,3);case"q":return this.num(e.quarter);case"qq":return this.num(e.quarter,2);case"X":return this.num(Math.floor(e.ts/1e3));case"x":return this.num(e.ts);default:return d(h)}};return ko(X.parseFormat(r),f)}formatDurationFromString(e,r){const n=l=>{switch(l[0]){case"S":return"millisecond";case"s":return"second";case"m":return"minute";case"h":return"hour";case"d":return"day";case"w":return"week";case"M":return"month";case"y":return"year";default:return null}},i=l=>c=>{const d=n(c);return d?this.num(l.get(d),c.length):c},s=X.parseFormat(r),a=s.reduce((l,{literal:c,val:d})=>c?l:l.concat(d),[]),o=e.shiftTo(...a.map(n).filter(l=>l));return ko(s,i(o))}}const fd=/[A-Za-z_+-]{1,256}(?::?\/[A-Za-z0-9_+-]{1,256}(?:\/[A-Za-z0-9_+-]{1,256})?)?/;function dr(...t){const e=t.reduce((r,n)=>r+n.source,"");return RegExp(`^${e}$`)}function fr(...t){return e=>t.reduce(([r,n,i],s)=>{const[a,o,l]=s(e,i);return[{...r,...a},o||n,l]},[{},null,1]).slice(0,2)}function hr(t,...e){if(t==null)return[null,null];for(const[r,n]of e){const i=r.exec(t);if(i)return n(i)}return[null,null]}function hd(...t){return(e,r)=>{const n={};let i;for(i=0;i<t.length;i++)n[t[i]]=Qe(e[r+i]);return[n,null,r+i]}}const md=/(?:(Z)|([+-]\d\d)(?::?(\d\d))?)/,Vp=`(?:${md.source}?(?:\\[(${fd.source})\\])?)?`,la=/(\d\d)(?::?(\d\d)(?::?(\d\d)(?:[.,](\d{1,30}))?)?)?/,pd=RegExp(`${la.source}${Vp}`),ca=RegExp(`(?:T${pd.source})?`),Hp=/([+-]\d{6}|\d{4})(?:-?(\d\d)(?:-?(\d\d))?)?/,Bp=/(\d{4})-?W(\d\d)(?:-?(\d))?/,Fp=/(\d{4})-?(\d{3})/,Up=hd("weekYear","weekNumber","weekDay"),jp=hd("year","ordinal"),zp=/(\d{4})-(\d\d)-(\d\d)/,gd=RegExp(`${la.source} ?(?:${md.source}|(${fd.source}))?`),Wp=RegExp(`(?: ${gd.source})?`);function Gt(t,e,r){const n=t[e];return M(n)?r:Qe(n)}function Gp(t,e){return[{year:Gt(t,e),month:Gt(t,e+1,1),day:Gt(t,e+2,1)},null,e+3]}function mr(t,e){return[{hours:Gt(t,e,0),minutes:Gt(t,e+1,0),seconds:Gt(t,e+2,0),milliseconds:aa(t[e+3])},null,e+4]}function Jr(t,e){const r=!t[e]&&!t[e+1],n=ui(t[e+1],t[e+2]),i=r?null:te.instance(n);return[{},i,e+3]}function Xr(t,e){const r=t[e]?qe.create(t[e]):null;return[{},r,e+1]}const qp=RegExp(`^T?${la.source}$`),Kp=/^-?P(?:(?:(-?\d{1,20}(?:\.\d{1,20})?)Y)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20}(?:\.\d{1,20})?)W)?(?:(-?\d{1,20}(?:\.\d{1,20})?)D)?(?:T(?:(-?\d{1,20}(?:\.\d{1,20})?)H)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20})(?:[.,](-?\d{1,20}))?S)?)?)$/;function Zp(t){const[e,r,n,i,s,a,o,l,c]=t,d=e[0]==="-",u=l&&l[0]==="-",f=(h,m=!1)=>h!==void 0&&(m||h&&d)?-h:h;return[{years:f(mt(r)),months:f(mt(n)),weeks:f(mt(i)),days:f(mt(s)),hours:f(mt(a)),minutes:f(mt(o)),seconds:f(mt(l),l==="-0"),milliseconds:f(aa(c),u)}]}const Yp={GMT:0,EDT:-4*60,EST:-5*60,CDT:-5*60,CST:-6*60,MDT:-6*60,MST:-7*60,PDT:-7*60,PST:-8*60};function ua(t,e,r,n,i,s,a){const o={year:e.length===2?ks(Qe(e)):Qe(e),month:sd.indexOf(r)+1,day:Qe(n),hour:Qe(i),minute:Qe(s)};return a&&(o.second=Qe(a)),t&&(o.weekday=t.length>3?od.indexOf(t)+1:ld.indexOf(t)+1),o}const Jp=/^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|(?:([+-]\d\d)(\d\d)))$/;function Xp(t){const[,e,r,n,i,s,a,o,l,c,d,u]=t,f=ua(e,i,n,r,s,a,o);let h;return l?h=Yp[l]:c?h=0:h=ui(d,u),[f,new te(h)]}function Qp(t){return t.replace(/\([^()]*\)|[\n\t]/g," ").replace(/(\s\s+)/g," ").trim()}const e0=/^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d\d) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d\d):(\d\d):(\d\d) GMT$/,t0=/^(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), (\d\d)-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d\d) (\d\d):(\d\d):(\d\d) GMT$/,r0=/^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( \d|\d\d) (\d\d):(\d\d):(\d\d) (\d{4})$/;function Mo(t){const[,e,r,n,i,s,a,o]=t;return[ua(e,i,n,r,s,a,o),te.utcInstance]}function n0(t){const[,e,r,n,i,s,a,o]=t;return[ua(e,o,r,n,i,s,a),te.utcInstance]}const i0=dr(Hp,ca),s0=dr(Bp,ca),a0=dr(Fp,ca),o0=dr(pd),wd=fr(Gp,mr,Jr,Xr),l0=fr(Up,mr,Jr,Xr),c0=fr(jp,mr,Jr,Xr),u0=fr(mr,Jr,Xr);function d0(t){return hr(t,[i0,wd],[s0,l0],[a0,c0],[o0,u0])}function f0(t){return hr(Qp(t),[Jp,Xp])}function h0(t){return hr(t,[e0,Mo],[t0,Mo],[r0,n0])}function m0(t){return hr(t,[Kp,Zp])}const p0=fr(mr);function g0(t){return hr(t,[qp,p0])}const w0=dr(zp,Wp),y0=dr(gd),b0=fr(mr,Jr,Xr);function v0(t){return hr(t,[w0,wd],[y0,b0])}const xo="Invalid Duration",yd={weeks:{days:7,hours:7*24,minutes:7*24*60,seconds:7*24*60*60,milliseconds:7*24*60*60*1e3},days:{hours:24,minutes:24*60,seconds:24*60*60,milliseconds:24*60*60*1e3},hours:{minutes:60,seconds:60*60,milliseconds:60*60*1e3},minutes:{seconds:60,milliseconds:60*1e3},seconds:{milliseconds:1e3}},$0={years:{quarters:4,months:12,weeks:52,days:365,hours:365*24,minutes:365*24*60,seconds:365*24*60*60,milliseconds:365*24*60*60*1e3},quarters:{months:3,weeks:13,days:91,hours:91*24,minutes:91*24*60,seconds:91*24*60*60,milliseconds:91*24*60*60*1e3},months:{weeks:4,days:30,hours:30*24,minutes:30*24*60,seconds:30*24*60*60,milliseconds:30*24*60*60*1e3},...yd},ve=146097/400,Dt=146097/4800,E0={years:{quarters:4,months:12,weeks:ve/7,days:ve,hours:ve*24,minutes:ve*24*60,seconds:ve*24*60*60,milliseconds:ve*24*60*60*1e3},quarters:{months:3,weeks:ve/28,days:ve/4,hours:ve*24/4,minutes:ve*24*60/4,seconds:ve*24*60*60/4,milliseconds:ve*24*60*60*1e3/4},months:{weeks:Dt/7,days:Dt,hours:Dt*24,minutes:Dt*24*60,seconds:Dt*24*60*60,milliseconds:Dt*24*60*60*1e3},...yd},vt=["years","quarters","months","weeks","days","hours","minutes","seconds","milliseconds"],T0=vt.slice(0).reverse();function Xe(t,e,r=!1){const n={values:r?e.values:{...t.values,...e.values||{}},loc:t.loc.clone(e.loc),conversionAccuracy:e.conversionAccuracy||t.conversionAccuracy,matrix:e.matrix||t.matrix};return new P(n)}function bd(t,e){let r=e.milliseconds??0;for(const n of T0.slice(1))e[n]&&(r+=e[n]*t[n].milliseconds);return r}function Ao(t,e){const r=bd(t,e)<0?-1:1;vt.reduceRight((n,i)=>{if(M(e[i]))return n;if(n){const s=e[n]*r,a=t[i][n],o=Math.floor(s/a);e[i]+=o*r,e[n]-=o*a*r}return i},null),vt.reduce((n,i)=>{if(M(e[i]))return n;if(n){const s=e[n]%1;e[n]-=s,e[i]+=s*t[n][i]}return i},null)}function S0(t){const e={};for(const[r,n]of Object.entries(t))n!==0&&(e[r]=n);return e}class P{constructor(e){const r=e.conversionAccuracy==="longterm"||!1;let n=r?E0:$0;e.matrix&&(n=e.matrix),this.values=e.values,this.loc=e.loc||V.create(),this.conversionAccuracy=r?"longterm":"casual",this.invalid=e.invalid||null,this.matrix=n,this.isLuxonDuration=!0}static fromMillis(e,r){return P.fromObject({milliseconds:e},r)}static fromObject(e,r={}){if(e==null||typeof e!="object")throw new ae(`Duration.fromObject: argument expected to be an object, got ${e===null?"null":typeof e}`);return new P({values:Wn(e,P.normalizeUnit),loc:V.fromObject(r),conversionAccuracy:r.conversionAccuracy,matrix:r.matrix})}static fromDurationLike(e){if(Tt(e))return P.fromMillis(e);if(P.isDuration(e))return e;if(typeof e=="object")return P.fromObject(e);throw new ae(`Unknown duration argument ${e} of type ${typeof e}`)}static fromISO(e,r){const[n]=m0(e);return n?P.fromObject(n,r):P.invalid("unparsable",`the input "${e}" can't be parsed as ISO 8601`)}static fromISOTime(e,r){const[n]=g0(e);return n?P.fromObject(n,r):P.invalid("unparsable",`the input "${e}" can't be parsed as ISO 8601`)}static invalid(e,r=null){if(!e)throw new ae("need to specify a reason the Duration is invalid");const n=e instanceof Ne?e:new Ne(e,r);if(U.throwOnInvalid)throw new Jm(n);return new P({invalid:n})}static normalizeUnit(e){const r={year:"years",years:"years",quarter:"quarters",quarters:"quarters",month:"months",months:"months",week:"weeks",weeks:"weeks",day:"days",days:"days",hour:"hours",hours:"hours",minute:"minutes",minutes:"minutes",second:"seconds",seconds:"seconds",millisecond:"milliseconds",milliseconds:"milliseconds"}[e&&e.toLowerCase()];if(!r)throw new Cu(e);return r}static isDuration(e){return e&&e.isLuxonDuration||!1}get locale(){return this.isValid?this.loc.locale:null}get numberingSystem(){return this.isValid?this.loc.numberingSystem:null}toFormat(e,r={}){const n={...r,floor:r.round!==!1&&r.floor!==!1};return this.isValid?X.create(this.loc,n).formatDurationFromString(this,e):xo}toHuman(e={}){if(!this.isValid)return xo;const r=vt.map(n=>{const i=this.values[n];return M(i)?null:this.loc.numberFormatter({style:"unit",unitDisplay:"long",...e,unit:n.slice(0,-1)}).format(i)}).filter(n=>n);return this.loc.listFormatter({type:"conjunction",style:e.listStyle||"narrow",...e}).format(r)}toObject(){return this.isValid?{...this.values}:{}}toISO(){if(!this.isValid)return null;let e="P";return this.years!==0&&(e+=this.years+"Y"),(this.months!==0||this.quarters!==0)&&(e+=this.months+this.quarters*3+"M"),this.weeks!==0&&(e+=this.weeks+"W"),this.days!==0&&(e+=this.days+"D"),(this.hours!==0||this.minutes!==0||this.seconds!==0||this.milliseconds!==0)&&(e+="T"),this.hours!==0&&(e+=this.hours+"H"),this.minutes!==0&&(e+=this.minutes+"M"),(this.seconds!==0||this.milliseconds!==0)&&(e+=oa(this.seconds+this.milliseconds/1e3,3)+"S"),e==="P"&&(e+="T0S"),e}toISOTime(e={}){if(!this.isValid)return null;const r=this.toMillis();return r<0||r>=864e5?null:(e={suppressMilliseconds:!1,suppressSeconds:!1,includePrefix:!1,format:"extended",...e,includeOffset:!1},T.fromMillis(r,{zone:"UTC"}).toISOTime(e))}toJSON(){return this.toISO()}toString(){return this.toISO()}[Symbol.for("nodejs.util.inspect.custom")](){return this.isValid?`Duration { values: ${JSON.stringify(this.values)} }`:`Duration { Invalid, reason: ${this.invalidReason} }`}toMillis(){return this.isValid?bd(this.matrix,this.values):NaN}valueOf(){return this.toMillis()}plus(e){if(!this.isValid)return this;const r=P.fromDurationLike(e),n={};for(const i of vt)(Xt(r.values,i)||Xt(this.values,i))&&(n[i]=r.get(i)+this.get(i));return Xe(this,{values:n},!0)}minus(e){if(!this.isValid)return this;const r=P.fromDurationLike(e);return this.plus(r.negate())}mapUnits(e){if(!this.isValid)return this;const r={};for(const n of Object.keys(this.values))r[n]=id(e(this.values[n],n));return Xe(this,{values:r},!0)}get(e){return this[P.normalizeUnit(e)]}set(e){if(!this.isValid)return this;const r={...this.values,...Wn(e,P.normalizeUnit)};return Xe(this,{values:r})}reconfigure({locale:e,numberingSystem:r,conversionAccuracy:n,matrix:i}={}){const a={loc:this.loc.clone({locale:e,numberingSystem:r}),matrix:i,conversionAccuracy:n};return Xe(this,a)}as(e){return this.isValid?this.shiftTo(e).get(e):NaN}normalize(){if(!this.isValid)return this;const e=this.toObject();return Ao(this.matrix,e),Xe(this,{values:e},!0)}rescale(){if(!this.isValid)return this;const e=S0(this.normalize().shiftToAll().toObject());return Xe(this,{values:e},!0)}shiftTo(...e){if(!this.isValid)return this;if(e.length===0)return this;e=e.map(a=>P.normalizeUnit(a));const r={},n={},i=this.toObject();let s;for(const a of vt)if(e.indexOf(a)>=0){s=a;let o=0;for(const c in n)o+=this.matrix[c][a]*n[c],n[c]=0;Tt(i[a])&&(o+=i[a]);const l=Math.trunc(o);r[a]=l,n[a]=(o*1e3-l*1e3)/1e3}else Tt(i[a])&&(n[a]=i[a]);for(const a in n)n[a]!==0&&(r[s]+=a===s?n[a]:n[a]/this.matrix[s][a]);return Ao(this.matrix,r),Xe(this,{values:r},!0)}shiftToAll(){return this.isValid?this.shiftTo("years","months","weeks","days","hours","minutes","seconds","milliseconds"):this}negate(){if(!this.isValid)return this;const e={};for(const r of Object.keys(this.values))e[r]=this.values[r]===0?0:-this.values[r];return Xe(this,{values:e},!0)}get years(){return this.isValid?this.values.years||0:NaN}get quarters(){return this.isValid?this.values.quarters||0:NaN}get months(){return this.isValid?this.values.months||0:NaN}get weeks(){return this.isValid?this.values.weeks||0:NaN}get days(){return this.isValid?this.values.days||0:NaN}get hours(){return this.isValid?this.values.hours||0:NaN}get minutes(){return this.isValid?this.values.minutes||0:NaN}get seconds(){return this.isValid?this.values.seconds||0:NaN}get milliseconds(){return this.isValid?this.values.milliseconds||0:NaN}get isValid(){return this.invalid===null}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}equals(e){if(!this.isValid||!e.isValid||!this.loc.equals(e.loc))return!1;function r(n,i){return n===void 0||n===0?i===void 0||i===0:n===i}for(const n of vt)if(!r(this.values[n],e.values[n]))return!1;return!0}}const _t="Invalid Interval";function k0(t,e){return!t||!t.isValid?z.invalid("missing or invalid start"):!e||!e.isValid?z.invalid("missing or invalid end"):e<t?z.invalid("end before start",`The end of an interval must be after its start, but you had start=${t.toISO()} and end=${e.toISO()}`):null}class z{constructor(e){this.s=e.start,this.e=e.end,this.invalid=e.invalid||null,this.isLuxonInterval=!0}static invalid(e,r=null){if(!e)throw new ae("need to specify a reason the Interval is invalid");const n=e instanceof Ne?e:new Ne(e,r);if(U.throwOnInvalid)throw new Ym(n);return new z({invalid:n})}static fromDateTimes(e,r){const n=yr(e),i=yr(r),s=k0(n,i);return s??new z({start:n,end:i})}static after(e,r){const n=P.fromDurationLike(r),i=yr(e);return z.fromDateTimes(i,i.plus(n))}static before(e,r){const n=P.fromDurationLike(r),i=yr(e);return z.fromDateTimes(i.minus(n),i)}static fromISO(e,r){const[n,i]=(e||"").split("/",2);if(n&&i){let s,a;try{s=T.fromISO(n,r),a=s.isValid}catch{a=!1}let o,l;try{o=T.fromISO(i,r),l=o.isValid}catch{l=!1}if(a&&l)return z.fromDateTimes(s,o);if(a){const c=P.fromISO(i,r);if(c.isValid)return z.after(s,c)}else if(l){const c=P.fromISO(n,r);if(c.isValid)return z.before(o,c)}}return z.invalid("unparsable",`the input "${e}" can't be parsed as ISO 8601`)}static isInterval(e){return e&&e.isLuxonInterval||!1}get start(){return this.isValid?this.s:null}get end(){return this.isValid?this.e:null}get isValid(){return this.invalidReason===null}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}length(e="milliseconds"){return this.isValid?this.toDuration(e).get(e):NaN}count(e="milliseconds",r){if(!this.isValid)return NaN;const n=this.start.startOf(e,r);let i;return r!=null&&r.useLocaleWeeks?i=this.end.reconfigure({locale:n.locale}):i=this.end,i=i.startOf(e,r),Math.floor(i.diff(n,e).get(e))+(i.valueOf()!==this.end.valueOf())}hasSame(e){return this.isValid?this.isEmpty()||this.e.minus(1).hasSame(this.s,e):!1}isEmpty(){return this.s.valueOf()===this.e.valueOf()}isAfter(e){return this.isValid?this.s>e:!1}isBefore(e){return this.isValid?this.e<=e:!1}contains(e){return this.isValid?this.s<=e&&this.e>e:!1}set({start:e,end:r}={}){return this.isValid?z.fromDateTimes(e||this.s,r||this.e):this}splitAt(...e){if(!this.isValid)return[];const r=e.map(yr).filter(a=>this.contains(a)).sort((a,o)=>a.toMillis()-o.toMillis()),n=[];let{s:i}=this,s=0;for(;i<this.e;){const a=r[s]||this.e,o=+a>+this.e?this.e:a;n.push(z.fromDateTimes(i,o)),i=o,s+=1}return n}splitBy(e){const r=P.fromDurationLike(e);if(!this.isValid||!r.isValid||r.as("milliseconds")===0)return[];let{s:n}=this,i=1,s;const a=[];for(;n<this.e;){const o=this.start.plus(r.mapUnits(l=>l*i));s=+o>+this.e?this.e:o,a.push(z.fromDateTimes(n,s)),n=s,i+=1}return a}divideEqually(e){return this.isValid?this.splitBy(this.length()/e).slice(0,e):[]}overlaps(e){return this.e>e.s&&this.s<e.e}abutsStart(e){return this.isValid?+this.e==+e.s:!1}abutsEnd(e){return this.isValid?+e.e==+this.s:!1}engulfs(e){return this.isValid?this.s<=e.s&&this.e>=e.e:!1}equals(e){return!this.isValid||!e.isValid?!1:this.s.equals(e.s)&&this.e.equals(e.e)}intersection(e){if(!this.isValid)return this;const r=this.s>e.s?this.s:e.s,n=this.e<e.e?this.e:e.e;return r>=n?null:z.fromDateTimes(r,n)}union(e){if(!this.isValid)return this;const r=this.s<e.s?this.s:e.s,n=this.e>e.e?this.e:e.e;return z.fromDateTimes(r,n)}static merge(e){const[r,n]=e.sort((i,s)=>i.s-s.s).reduce(([i,s],a)=>s?s.overlaps(a)||s.abutsStart(a)?[i,s.union(a)]:[i.concat([s]),a]:[i,a],[[],null]);return n&&r.push(n),r}static xor(e){let r=null,n=0;const i=[],s=e.map(l=>[{time:l.s,type:"s"},{time:l.e,type:"e"}]),a=Array.prototype.concat(...s),o=a.sort((l,c)=>l.time-c.time);for(const l of o)n+=l.type==="s"?1:-1,n===1?r=l.time:(r&&+r!=+l.time&&i.push(z.fromDateTimes(r,l.time)),r=null);return z.merge(i)}difference(...e){return z.xor([this].concat(e)).map(r=>this.intersection(r)).filter(r=>r&&!r.isEmpty())}toString(){return this.isValid?`[${this.s.toISO()} – ${this.e.toISO()})`:_t}[Symbol.for("nodejs.util.inspect.custom")](){return this.isValid?`Interval { start: ${this.s.toISO()}, end: ${this.e.toISO()} }`:`Interval { Invalid, reason: ${this.invalidReason} }`}toLocaleString(e=Un,r={}){return this.isValid?X.create(this.s.loc.clone(r),e).formatInterval(this):_t}toISO(e){return this.isValid?`${this.s.toISO(e)}/${this.e.toISO(e)}`:_t}toISODate(){return this.isValid?`${this.s.toISODate()}/${this.e.toISODate()}`:_t}toISOTime(e){return this.isValid?`${this.s.toISOTime(e)}/${this.e.toISOTime(e)}`:_t}toFormat(e,{separator:r=" – "}={}){return this.isValid?`${this.s.toFormat(e)}${r}${this.e.toFormat(e)}`:_t}toDuration(e,r){return this.isValid?this.e.diff(this.s,e,r):P.invalid(this.invalidReason)}mapEndpoints(e){return z.fromDateTimes(e(this.s),e(this.e))}}class Tr{static hasDST(e=U.defaultZone){const r=T.now().setZone(e).set({month:12});return!e.isUniversal&&r.offset!==r.set({month:6}).offset}static isValidIANAZone(e){return qe.isValidZone(e)}static normalizeZone(e){return et(e,U.defaultZone)}static getStartOfWeek({locale:e=null,locObj:r=null}={}){return(r||V.create(e)).getStartOfWeek()}static getMinimumDaysInFirstWeek({locale:e=null,locObj:r=null}={}){return(r||V.create(e)).getMinDaysInFirstWeek()}static getWeekendWeekdays({locale:e=null,locObj:r=null}={}){return(r||V.create(e)).getWeekendDays().slice()}static months(e="long",{locale:r=null,numberingSystem:n=null,locObj:i=null,outputCalendar:s="gregory"}={}){return(i||V.create(r,n,s)).months(e)}static monthsFormat(e="long",{locale:r=null,numberingSystem:n=null,locObj:i=null,outputCalendar:s="gregory"}={}){return(i||V.create(r,n,s)).months(e,!0)}static weekdays(e="long",{locale:r=null,numberingSystem:n=null,locObj:i=null}={}){return(i||V.create(r,n,null)).weekdays(e)}static weekdaysFormat(e="long",{locale:r=null,numberingSystem:n=null,locObj:i=null}={}){return(i||V.create(r,n,null)).weekdays(e,!0)}static meridiems({locale:e=null}={}){return V.create(e).meridiems()}static eras(e="short",{locale:r=null}={}){return V.create(r,null,"gregory").eras(e)}static features(){return{relative:td(),localeWeek:rd()}}}function Co(t,e){const r=i=>i.toUTC(0,{keepLocalTime:!0}).startOf("day").valueOf(),n=r(e)-r(t);return Math.floor(P.fromMillis(n).as("days"))}function M0(t,e,r){const n=[["years",(l,c)=>c.year-l.year],["quarters",(l,c)=>c.quarter-l.quarter+(c.year-l.year)*4],["months",(l,c)=>c.month-l.month+(c.year-l.year)*12],["weeks",(l,c)=>{const d=Co(l,c);return(d-d%7)/7}],["days",Co]],i={},s=t;let a,o;for(const[l,c]of n)r.indexOf(l)>=0&&(a=l,i[l]=c(t,e),o=s.plus(i),o>e?(i[l]--,t=s.plus(i),t>e&&(o=t,i[l]--,t=s.plus(i))):t=o);return[t,i,o,a]}function x0(t,e,r,n){let[i,s,a,o]=M0(t,e,r);const l=e-i,c=r.filter(u=>["hours","minutes","seconds","milliseconds"].indexOf(u)>=0);c.length===0&&(a<e&&(a=i.plus({[o]:1})),a!==i&&(s[o]=(s[o]||0)+l/(a-i)));const d=P.fromObject(s,n);return c.length>0?P.fromMillis(l,n).shiftTo(...c).plus(d):d}const da={arab:"[٠-٩]",arabext:"[۰-۹]",bali:"[᭐-᭙]",beng:"[০-৯]",deva:"[०-९]",fullwide:"[０-９]",gujr:"[૦-૯]",hanidec:"[〇|一|二|三|四|五|六|七|八|九]",khmr:"[០-៩]",knda:"[೦-೯]",laoo:"[໐-໙]",limb:"[᥆-᥏]",mlym:"[൦-൯]",mong:"[᠐-᠙]",mymr:"[၀-၉]",orya:"[୦-୯]",tamldec:"[௦-௯]",telu:"[౦-౯]",thai:"[๐-๙]",tibt:"[༠-༩]",latn:"\\d"},Lo={arab:[1632,1641],arabext:[1776,1785],bali:[6992,7001],beng:[2534,2543],deva:[2406,2415],fullwide:[65296,65303],gujr:[2790,2799],khmr:[6112,6121],knda:[3302,3311],laoo:[3792,3801],limb:[6470,6479],mlym:[3430,3439],mong:[6160,6169],mymr:[4160,4169],orya:[2918,2927],tamldec:[3046,3055],telu:[3174,3183],thai:[3664,3673],tibt:[3872,3881]},A0=da.hanidec.replace(/[\[|\]]/g,"").split("");function C0(t){let e=parseInt(t,10);if(isNaN(e)){e="";for(let r=0;r<t.length;r++){const n=t.charCodeAt(r);if(t[r].search(da.hanidec)!==-1)e+=A0.indexOf(t[r]);else for(const i in Lo){const[s,a]=Lo[i];n>=s&&n<=a&&(e+=n-s)}}return parseInt(e,10)}else return e}function Pe({numberingSystem:t},e=""){return new RegExp(`${da[t||"latn"]}${e}`)}const L0="missing Intl.DateTimeFormat.formatToParts support";function I(t,e=r=>r){return{regex:t,deser:([r])=>e(C0(r))}}const P0=String.fromCharCode(160),vd=`[ ${P0}]`,$d=new RegExp(vd,"g");function O0(t){return t.replace(/\./g,"\\.?").replace($d,vd)}function Po(t){return t.replace(/\./g,"").replace($d," ").toLowerCase()}function Oe(t,e){return t===null?null:{regex:RegExp(t.map(O0).join("|")),deser:([r])=>t.findIndex(n=>Po(r)===Po(n))+e}}function Oo(t,e){return{regex:t,deser:([,r,n])=>ui(r,n),groups:e}}function un(t){return{regex:t,deser:([e])=>e}}function N0(t){return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}function I0(t,e){const r=Pe(e),n=Pe(e,"{2}"),i=Pe(e,"{3}"),s=Pe(e,"{4}"),a=Pe(e,"{6}"),o=Pe(e,"{1,2}"),l=Pe(e,"{1,3}"),c=Pe(e,"{1,6}"),d=Pe(e,"{1,9}"),u=Pe(e,"{2,4}"),f=Pe(e,"{4,6}"),h=y=>({regex:RegExp(N0(y.val)),deser:([b])=>b,literal:!0}),g=(y=>{if(t.literal)return h(y);switch(y.val){case"G":return Oe(e.eras("short"),0);case"GG":return Oe(e.eras("long"),0);case"y":return I(c);case"yy":return I(u,ks);case"yyyy":return I(s);case"yyyyy":return I(f);case"yyyyyy":return I(a);case"M":return I(o);case"MM":return I(n);case"MMM":return Oe(e.months("short",!0),1);case"MMMM":return Oe(e.months("long",!0),1);case"L":return I(o);case"LL":return I(n);case"LLL":return Oe(e.months("short",!1),1);case"LLLL":return Oe(e.months("long",!1),1);case"d":return I(o);case"dd":return I(n);case"o":return I(l);case"ooo":return I(i);case"HH":return I(n);case"H":return I(o);case"hh":return I(n);case"h":return I(o);case"mm":return I(n);case"m":return I(o);case"q":return I(o);case"qq":return I(n);case"s":return I(o);case"ss":return I(n);case"S":return I(l);case"SSS":return I(i);case"u":return un(d);case"uu":return un(o);case"uuu":return I(r);case"a":return Oe(e.meridiems(),0);case"kkkk":return I(s);case"kk":return I(u,ks);case"W":return I(o);case"WW":return I(n);case"E":case"c":return I(r);case"EEE":return Oe(e.weekdays("short",!1),1);case"EEEE":return Oe(e.weekdays("long",!1),1);case"ccc":return Oe(e.weekdays("short",!0),1);case"cccc":return Oe(e.weekdays("long",!0),1);case"Z":case"ZZ":return Oo(new RegExp(`([+-]${o.source})(?::(${n.source}))?`),2);case"ZZZ":return Oo(new RegExp(`([+-]${o.source})(${n.source})?`),2);case"z":return un(/[a-z_+-/]{1,256}?/i);case" ":return un(/[^\S\n\r]/);default:return h(y)}})(t)||{invalidReason:L0};return g.token=t,g}const D0={year:{"2-digit":"yy",numeric:"yyyyy"},month:{numeric:"M","2-digit":"MM",short:"MMM",long:"MMMM"},day:{numeric:"d","2-digit":"dd"},weekday:{short:"EEE",long:"EEEE"},dayperiod:"a",dayPeriod:"a",hour12:{numeric:"h","2-digit":"hh"},hour24:{numeric:"H","2-digit":"HH"},minute:{numeric:"m","2-digit":"mm"},second:{numeric:"s","2-digit":"ss"},timeZoneName:{long:"ZZZZZ",short:"ZZZ"}};function _0(t,e,r){const{type:n,value:i}=t;if(n==="literal"){const l=/^\s+$/.test(i);return{literal:!l,val:l?" ":i}}const s=e[n];let a=n;n==="hour"&&(e.hour12!=null?a=e.hour12?"hour12":"hour24":e.hourCycle!=null?e.hourCycle==="h11"||e.hourCycle==="h12"?a="hour12":a="hour24":a=r.hour12?"hour12":"hour24");let o=D0[a];if(typeof o=="object"&&(o=o[s]),o)return{literal:!1,val:o}}function R0(t){return[`^${t.map(r=>r.regex).reduce((r,n)=>`${r}(${n.source})`,"")}$`,t]}function V0(t,e,r){const n=t.match(e);if(n){const i={};let s=1;for(const a in r)if(Xt(r,a)){const o=r[a],l=o.groups?o.groups+1:1;!o.literal&&o.token&&(i[o.token.val[0]]=o.deser(n.slice(s,s+l))),s+=l}return[n,i]}else return[n,{}]}function H0(t){const e=s=>{switch(s){case"S":return"millisecond";case"s":return"second";case"m":return"minute";case"h":case"H":return"hour";case"d":return"day";case"o":return"ordinal";case"L":case"M":return"month";case"y":return"year";case"E":case"c":return"weekday";case"W":return"weekNumber";case"k":return"weekYear";case"q":return"quarter";default:return null}};let r=null,n;return M(t.z)||(r=qe.create(t.z)),M(t.Z)||(r||(r=new te(t.Z)),n=t.Z),M(t.q)||(t.M=(t.q-1)*3+1),M(t.h)||(t.h<12&&t.a===1?t.h+=12:t.h===12&&t.a===0&&(t.h=0)),t.G===0&&t.y&&(t.y=-t.y),M(t.u)||(t.S=aa(t.u)),[Object.keys(t).reduce((s,a)=>{const o=e(a);return o&&(s[o]=t[a]),s},{}),r,n]}let Bi=null;function B0(){return Bi||(Bi=T.fromMillis(1555555555555)),Bi}function F0(t,e){if(t.literal)return t;const r=X.macroTokenToFormatOpts(t.val),n=Sd(r,e);return n==null||n.includes(void 0)?t:n}function Ed(t,e){return Array.prototype.concat(...t.map(r=>F0(r,e)))}function Td(t,e,r){const n=Ed(X.parseFormat(r),t),i=n.map(a=>I0(a,t)),s=i.find(a=>a.invalidReason);if(s)return{input:e,tokens:n,invalidReason:s.invalidReason};{const[a,o]=R0(i),l=RegExp(a,"i"),[c,d]=V0(e,l,o),[u,f,h]=d?H0(d):[null,null,void 0];if(Xt(d,"a")&&Xt(d,"H"))throw new zt("Can't include meridiem when specifying 24-hour format");return{input:e,tokens:n,regex:l,rawMatches:c,matches:d,result:u,zone:f,specificOffset:h}}}function U0(t,e,r){const{result:n,zone:i,specificOffset:s,invalidReason:a}=Td(t,e,r);return[n,i,s,a]}function Sd(t,e){if(!t)return null;const n=X.create(e,t).dtFormatter(B0()),i=n.formatToParts(),s=n.resolvedOptions();return i.map(a=>_0(a,t,s))}const Fi="Invalid DateTime",No=864e13;function dn(t){return new Ne("unsupported zone",`the zone "${t.name}" is not supported`)}function Ui(t){return t.weekData===null&&(t.weekData=jn(t.c)),t.weekData}function ji(t){return t.localWeekData===null&&(t.localWeekData=jn(t.c,t.loc.getMinDaysInFirstWeek(),t.loc.getStartOfWeek())),t.localWeekData}function pt(t,e){const r={ts:t.ts,zone:t.zone,c:t.c,o:t.o,loc:t.loc,invalid:t.invalid};return new T({...r,...e,old:r})}function kd(t,e,r){let n=t-e*60*1e3;const i=r.offset(n);if(e===i)return[n,e];n-=(i-e)*60*1e3;const s=r.offset(n);return i===s?[n,i]:[t-Math.min(i,s)*60*1e3,Math.max(i,s)]}function fn(t,e){t+=e*60*1e3;const r=new Date(t);return{year:r.getUTCFullYear(),month:r.getUTCMonth()+1,day:r.getUTCDate(),hour:r.getUTCHours(),minute:r.getUTCMinutes(),second:r.getUTCSeconds(),millisecond:r.getUTCMilliseconds()}}function On(t,e,r){return kd(ci(t),e,r)}function Io(t,e){const r=t.o,n=t.c.year+Math.trunc(e.years),i=t.c.month+Math.trunc(e.months)+Math.trunc(e.quarters)*3,s={...t.c,year:n,month:i,day:Math.min(t.c.day,zn(n,i))+Math.trunc(e.days)+Math.trunc(e.weeks)*7},a=P.fromObject({years:e.years-Math.trunc(e.years),quarters:e.quarters-Math.trunc(e.quarters),months:e.months-Math.trunc(e.months),weeks:e.weeks-Math.trunc(e.weeks),days:e.days-Math.trunc(e.days),hours:e.hours,minutes:e.minutes,seconds:e.seconds,milliseconds:e.milliseconds}).as("milliseconds"),o=ci(s);let[l,c]=kd(o,r,t.zone);return a!==0&&(l+=a,c=t.zone.offset(l)),{ts:l,o:c}}function wr(t,e,r,n,i,s){const{setZone:a,zone:o}=r;if(t&&Object.keys(t).length!==0||e){const l=e||o,c=T.fromObject(t,{...r,zone:l,specificOffset:s});return a?c:c.setZone(o)}else return T.invalid(new Ne("unparsable",`the input "${i}" can't be parsed as ${n}`))}function hn(t,e,r=!0){return t.isValid?X.create(V.create("en-US"),{allowZ:r,forceSimple:!0}).formatDateTimeFromString(t,e):null}function zi(t,e){const r=t.c.year>9999||t.c.year<0;let n="";return r&&t.c.year>=0&&(n+="+"),n+=G(t.c.year,r?6:4),e?(n+="-",n+=G(t.c.month),n+="-",n+=G(t.c.day)):(n+=G(t.c.month),n+=G(t.c.day)),n}function Do(t,e,r,n,i,s){let a=G(t.c.hour);return e?(a+=":",a+=G(t.c.minute),(t.c.millisecond!==0||t.c.second!==0||!r)&&(a+=":")):a+=G(t.c.minute),(t.c.millisecond!==0||t.c.second!==0||!r)&&(a+=G(t.c.second),(t.c.millisecond!==0||!n)&&(a+=".",a+=G(t.c.millisecond,3))),i&&(t.isOffsetFixed&&t.offset===0&&!s?a+="Z":t.o<0?(a+="-",a+=G(Math.trunc(-t.o/60)),a+=":",a+=G(Math.trunc(-t.o%60))):(a+="+",a+=G(Math.trunc(t.o/60)),a+=":",a+=G(Math.trunc(t.o%60)))),s&&(a+="["+t.zone.ianaName+"]"),a}const Md={month:1,day:1,hour:0,minute:0,second:0,millisecond:0},j0={weekNumber:1,weekday:1,hour:0,minute:0,second:0,millisecond:0},z0={ordinal:1,hour:0,minute:0,second:0,millisecond:0},xd=["year","month","day","hour","minute","second","millisecond"],W0=["weekYear","weekNumber","weekday","hour","minute","second","millisecond"],G0=["year","ordinal","hour","minute","second","millisecond"];function q0(t){const e={year:"year",years:"year",month:"month",months:"month",day:"day",days:"day",hour:"hour",hours:"hour",minute:"minute",minutes:"minute",quarter:"quarter",quarters:"quarter",second:"second",seconds:"second",millisecond:"millisecond",milliseconds:"millisecond",weekday:"weekday",weekdays:"weekday",weeknumber:"weekNumber",weeksnumber:"weekNumber",weeknumbers:"weekNumber",weekyear:"weekYear",weekyears:"weekYear",ordinal:"ordinal"}[t.toLowerCase()];if(!e)throw new Cu(t);return e}function _o(t){switch(t.toLowerCase()){case"localweekday":case"localweekdays":return"localWeekday";case"localweeknumber":case"localweeknumbers":return"localWeekNumber";case"localweekyear":case"localweekyears":return"localWeekYear";default:return q0(t)}}function Ro(t,e){const r=et(e.zone,U.defaultZone),n=V.fromObject(e),i=U.now();let s,a;if(M(t.year))s=i;else{for(const c of xd)M(t[c])&&(t[c]=Md[c]);const o=Qu(t)||ed(t);if(o)return T.invalid(o);const l=r.offset(i);[s,a]=On(t,l,r)}return new T({ts:s,zone:r,loc:n,o:a})}function Vo(t,e,r){const n=M(r.round)?!0:r.round,i=(a,o)=>(a=oa(a,n||r.calendary?0:2,!0),e.loc.clone(r).relFormatter(r).format(a,o)),s=a=>r.calendary?e.hasSame(t,a)?0:e.startOf(a).diff(t.startOf(a),a).get(a):e.diff(t,a).get(a);if(r.unit)return i(s(r.unit),r.unit);for(const a of r.units){const o=s(a);if(Math.abs(o)>=1)return i(o,a)}return i(t>e?-0:0,r.units[r.units.length-1])}function Ho(t){let e={},r;return t.length>0&&typeof t[t.length-1]=="object"?(e=t[t.length-1],r=Array.from(t).slice(0,t.length-1)):r=Array.from(t),[e,r]}class T{constructor(e){const r=e.zone||U.defaultZone;let n=e.invalid||(Number.isNaN(e.ts)?new Ne("invalid input"):null)||(r.isValid?null:dn(r));this.ts=M(e.ts)?U.now():e.ts;let i=null,s=null;if(!n)if(e.old&&e.old.ts===this.ts&&e.old.zone.equals(r))[i,s]=[e.old.c,e.old.o];else{const o=r.offset(this.ts);i=fn(this.ts,o),n=Number.isNaN(i.year)?new Ne("invalid input"):null,i=n?null:i,s=n?null:o}this._zone=r,this.loc=e.loc||V.create(),this.invalid=n,this.weekData=null,this.localWeekData=null,this.c=i,this.o=s,this.isLuxonDateTime=!0}static now(){return new T({})}static local(){const[e,r]=Ho(arguments),[n,i,s,a,o,l,c]=r;return Ro({year:n,month:i,day:s,hour:a,minute:o,second:l,millisecond:c},e)}static utc(){const[e,r]=Ho(arguments),[n,i,s,a,o,l,c]=r;return e.zone=te.utcInstance,Ro({year:n,month:i,day:s,hour:a,minute:o,second:l,millisecond:c},e)}static fromJSDate(e,r={}){const n=Ep(e)?e.valueOf():NaN;if(Number.isNaN(n))return T.invalid("invalid input");const i=et(r.zone,U.defaultZone);return i.isValid?new T({ts:n,zone:i,loc:V.fromObject(r)}):T.invalid(dn(i))}static fromMillis(e,r={}){if(Tt(e))return e<-No||e>No?T.invalid("Timestamp out of range"):new T({ts:e,zone:et(r.zone,U.defaultZone),loc:V.fromObject(r)});throw new ae(`fromMillis requires a numerical input, but received a ${typeof e} with value ${e}`)}static fromSeconds(e,r={}){if(Tt(e))return new T({ts:e*1e3,zone:et(r.zone,U.defaultZone),loc:V.fromObject(r)});throw new ae("fromSeconds requires a numerical input")}static fromObject(e,r={}){e=e||{};const n=et(r.zone,U.defaultZone);if(!n.isValid)return T.invalid(dn(n));const i=V.fromObject(r),s=Wn(e,_o),{minDaysInFirstWeek:a,startOfWeek:o}=Eo(s,i),l=U.now(),c=M(r.specificOffset)?n.offset(l):r.specificOffset,d=!M(s.ordinal),u=!M(s.year),f=!M(s.month)||!M(s.day),h=u||f,m=s.weekYear||s.weekNumber;if((h||d)&&m)throw new zt("Can't mix weekYear/weekNumber units with year/month/day or ordinals");if(f&&d)throw new zt("Can't mix ordinal dates with month/day");const g=m||s.weekday&&!h;let y,b,E=fn(l,c);g?(y=W0,b=j0,E=jn(E,a,o)):d?(y=G0,b=z0,E=Hi(E)):(y=xd,b=Md);let A=!1;for(const Le of y){const ht=s[Le];M(ht)?A?s[Le]=b[Le]:s[Le]=E[Le]:A=!0}const O=g?bp(s,a,o):d?vp(s):Qu(s),K=O||ed(s);if(K)return T.invalid(K);const Ce=g?vo(s,a,o):d?$o(s):s,[ue,H]=On(Ce,c,n),W=new T({ts:ue,zone:n,o:H,loc:i});return s.weekday&&h&&e.weekday!==W.weekday?T.invalid("mismatched weekday",`you can't specify both a weekday of ${s.weekday} and a date of ${W.toISO()}`):W}static fromISO(e,r={}){const[n,i]=d0(e);return wr(n,i,r,"ISO 8601",e)}static fromRFC2822(e,r={}){const[n,i]=f0(e);return wr(n,i,r,"RFC 2822",e)}static fromHTTP(e,r={}){const[n,i]=h0(e);return wr(n,i,r,"HTTP",r)}static fromFormat(e,r,n={}){if(M(e)||M(r))throw new ae("fromFormat requires an input string and a format");const{locale:i=null,numberingSystem:s=null}=n,a=V.fromOpts({locale:i,numberingSystem:s,defaultToEN:!0}),[o,l,c,d]=U0(a,e,r);return d?T.invalid(d):wr(o,l,n,`format ${r}`,e,c)}static fromString(e,r,n={}){return T.fromFormat(e,r,n)}static fromSQL(e,r={}){const[n,i]=v0(e);return wr(n,i,r,"SQL",e)}static invalid(e,r=null){if(!e)throw new ae("need to specify a reason the DateTime is invalid");const n=e instanceof Ne?e:new Ne(e,r);if(U.throwOnInvalid)throw new Zm(n);return new T({invalid:n})}static isDateTime(e){return e&&e.isLuxonDateTime||!1}static parseFormatForOpts(e,r={}){const n=Sd(e,V.fromObject(r));return n?n.map(i=>i?i.val:null).join(""):null}static expandFormat(e,r={}){return Ed(X.parseFormat(e),V.fromObject(r)).map(i=>i.val).join("")}get(e){return this[e]}get isValid(){return this.invalid===null}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}get locale(){return this.isValid?this.loc.locale:null}get numberingSystem(){return this.isValid?this.loc.numberingSystem:null}get outputCalendar(){return this.isValid?this.loc.outputCalendar:null}get zone(){return this._zone}get zoneName(){return this.isValid?this.zone.name:null}get year(){return this.isValid?this.c.year:NaN}get quarter(){return this.isValid?Math.ceil(this.c.month/3):NaN}get month(){return this.isValid?this.c.month:NaN}get day(){return this.isValid?this.c.day:NaN}get hour(){return this.isValid?this.c.hour:NaN}get minute(){return this.isValid?this.c.minute:NaN}get second(){return this.isValid?this.c.second:NaN}get millisecond(){return this.isValid?this.c.millisecond:NaN}get weekYear(){return this.isValid?Ui(this).weekYear:NaN}get weekNumber(){return this.isValid?Ui(this).weekNumber:NaN}get weekday(){return this.isValid?Ui(this).weekday:NaN}get isWeekend(){return this.isValid&&this.loc.getWeekendDays().includes(this.weekday)}get localWeekday(){return this.isValid?ji(this).weekday:NaN}get localWeekNumber(){return this.isValid?ji(this).weekNumber:NaN}get localWeekYear(){return this.isValid?ji(this).weekYear:NaN}get ordinal(){return this.isValid?Hi(this.c).ordinal:NaN}get monthShort(){return this.isValid?Tr.months("short",{locObj:this.loc})[this.month-1]:null}get monthLong(){return this.isValid?Tr.months("long",{locObj:this.loc})[this.month-1]:null}get weekdayShort(){return this.isValid?Tr.weekdays("short",{locObj:this.loc})[this.weekday-1]:null}get weekdayLong(){return this.isValid?Tr.weekdays("long",{locObj:this.loc})[this.weekday-1]:null}get offset(){return this.isValid?+this.o:NaN}get offsetNameShort(){return this.isValid?this.zone.offsetName(this.ts,{format:"short",locale:this.locale}):null}get offsetNameLong(){return this.isValid?this.zone.offsetName(this.ts,{format:"long",locale:this.locale}):null}get isOffsetFixed(){return this.isValid?this.zone.isUniversal:null}get isInDST(){return this.isOffsetFixed?!1:this.offset>this.set({month:1,day:1}).offset||this.offset>this.set({month:5}).offset}getPossibleOffsets(){if(!this.isValid||this.isOffsetFixed)return[this];const e=864e5,r=6e4,n=ci(this.c),i=this.zone.offset(n-e),s=this.zone.offset(n+e),a=this.zone.offset(n-i*r),o=this.zone.offset(n-s*r);if(a===o)return[this];const l=n-a*r,c=n-o*r,d=fn(l,a),u=fn(c,o);return d.hour===u.hour&&d.minute===u.minute&&d.second===u.second&&d.millisecond===u.millisecond?[pt(this,{ts:l}),pt(this,{ts:c})]:[this]}get isInLeapYear(){return Yr(this.year)}get daysInMonth(){return zn(this.year,this.month)}get daysInYear(){return this.isValid?Wt(this.year):NaN}get weeksInWeekYear(){return this.isValid?_r(this.weekYear):NaN}get weeksInLocalWeekYear(){return this.isValid?_r(this.localWeekYear,this.loc.getMinDaysInFirstWeek(),this.loc.getStartOfWeek()):NaN}resolvedLocaleOptions(e={}){const{locale:r,numberingSystem:n,calendar:i}=X.create(this.loc.clone(e),e).resolvedOptions(this);return{locale:r,numberingSystem:n,outputCalendar:i}}toUTC(e=0,r={}){return this.setZone(te.instance(e),r)}toLocal(){return this.setZone(U.defaultZone)}setZone(e,{keepLocalTime:r=!1,keepCalendarTime:n=!1}={}){if(e=et(e,U.defaultZone),e.equals(this.zone))return this;if(e.isValid){let i=this.ts;if(r||n){const s=e.offset(this.ts),a=this.toObject();[i]=On(a,s,e)}return pt(this,{ts:i,zone:e})}else return T.invalid(dn(e))}reconfigure({locale:e,numberingSystem:r,outputCalendar:n}={}){const i=this.loc.clone({locale:e,numberingSystem:r,outputCalendar:n});return pt(this,{loc:i})}setLocale(e){return this.reconfigure({locale:e})}set(e){if(!this.isValid)return this;const r=Wn(e,_o),{minDaysInFirstWeek:n,startOfWeek:i}=Eo(r,this.loc),s=!M(r.weekYear)||!M(r.weekNumber)||!M(r.weekday),a=!M(r.ordinal),o=!M(r.year),l=!M(r.month)||!M(r.day),c=o||l,d=r.weekYear||r.weekNumber;if((c||a)&&d)throw new zt("Can't mix weekYear/weekNumber units with year/month/day or ordinals");if(l&&a)throw new zt("Can't mix ordinal dates with month/day");let u;s?u=vo({...jn(this.c,n,i),...r},n,i):M(r.ordinal)?(u={...this.toObject(),...r},M(r.day)&&(u.day=Math.min(zn(u.year,u.month),u.day))):u=$o({...Hi(this.c),...r});const[f,h]=On(u,this.o,this.zone);return pt(this,{ts:f,o:h})}plus(e){if(!this.isValid)return this;const r=P.fromDurationLike(e);return pt(this,Io(this,r))}minus(e){if(!this.isValid)return this;const r=P.fromDurationLike(e).negate();return pt(this,Io(this,r))}startOf(e,{useLocaleWeeks:r=!1}={}){if(!this.isValid)return this;const n={},i=P.normalizeUnit(e);switch(i){case"years":n.month=1;case"quarters":case"months":n.day=1;case"weeks":case"days":n.hour=0;case"hours":n.minute=0;case"minutes":n.second=0;case"seconds":n.millisecond=0;break}if(i==="weeks")if(r){const s=this.loc.getStartOfWeek(),{weekday:a}=this;a<s&&(n.weekNumber=this.weekNumber-1),n.weekday=s}else n.weekday=1;if(i==="quarters"){const s=Math.ceil(this.month/3);n.month=(s-1)*3+1}return this.set(n)}endOf(e,r){return this.isValid?this.plus({[e]:1}).startOf(e,r).minus(1):this}toFormat(e,r={}){return this.isValid?X.create(this.loc.redefaultToEN(r)).formatDateTimeFromString(this,e):Fi}toLocaleString(e=Un,r={}){return this.isValid?X.create(this.loc.clone(r),e).formatDateTime(this):Fi}toLocaleParts(e={}){return this.isValid?X.create(this.loc.clone(e),e).formatDateTimeParts(this):[]}toISO({format:e="extended",suppressSeconds:r=!1,suppressMilliseconds:n=!1,includeOffset:i=!0,extendedZone:s=!1}={}){if(!this.isValid)return null;const a=e==="extended";let o=zi(this,a);return o+="T",o+=Do(this,a,r,n,i,s),o}toISODate({format:e="extended"}={}){return this.isValid?zi(this,e==="extended"):null}toISOWeekDate(){return hn(this,"kkkk-'W'WW-c")}toISOTime({suppressMilliseconds:e=!1,suppressSeconds:r=!1,includeOffset:n=!0,includePrefix:i=!1,extendedZone:s=!1,format:a="extended"}={}){return this.isValid?(i?"T":"")+Do(this,a==="extended",r,e,n,s):null}toRFC2822(){return hn(this,"EEE, dd LLL yyyy HH:mm:ss ZZZ",!1)}toHTTP(){return hn(this.toUTC(),"EEE, dd LLL yyyy HH:mm:ss 'GMT'")}toSQLDate(){return this.isValid?zi(this,!0):null}toSQLTime({includeOffset:e=!0,includeZone:r=!1,includeOffsetSpace:n=!0}={}){let i="HH:mm:ss.SSS";return(r||e)&&(n&&(i+=" "),r?i+="z":e&&(i+="ZZ")),hn(this,i,!0)}toSQL(e={}){return this.isValid?`${this.toSQLDate()} ${this.toSQLTime(e)}`:null}toString(){return this.isValid?this.toISO():Fi}[Symbol.for("nodejs.util.inspect.custom")](){return this.isValid?`DateTime { ts: ${this.toISO()}, zone: ${this.zone.name}, locale: ${this.locale} }`:`DateTime { Invalid, reason: ${this.invalidReason} }`}valueOf(){return this.toMillis()}toMillis(){return this.isValid?this.ts:NaN}toSeconds(){return this.isValid?this.ts/1e3:NaN}toUnixInteger(){return this.isValid?Math.floor(this.ts/1e3):NaN}toJSON(){return this.toISO()}toBSON(){return this.toJSDate()}toObject(e={}){if(!this.isValid)return{};const r={...this.c};return e.includeConfig&&(r.outputCalendar=this.outputCalendar,r.numberingSystem=this.loc.numberingSystem,r.locale=this.loc.locale),r}toJSDate(){return new Date(this.isValid?this.ts:NaN)}diff(e,r="milliseconds",n={}){if(!this.isValid||!e.isValid)return P.invalid("created by diffing an invalid DateTime");const i={locale:this.locale,numberingSystem:this.numberingSystem,...n},s=Tp(r).map(P.normalizeUnit),a=e.valueOf()>this.valueOf(),o=a?this:e,l=a?e:this,c=x0(o,l,s,i);return a?c.negate():c}diffNow(e="milliseconds",r={}){return this.diff(T.now(),e,r)}until(e){return this.isValid?z.fromDateTimes(this,e):this}hasSame(e,r,n){if(!this.isValid)return!1;const i=e.valueOf(),s=this.setZone(e.zone,{keepLocalTime:!0});return s.startOf(r,n)<=i&&i<=s.endOf(r,n)}equals(e){return this.isValid&&e.isValid&&this.valueOf()===e.valueOf()&&this.zone.equals(e.zone)&&this.loc.equals(e.loc)}toRelative(e={}){if(!this.isValid)return null;const r=e.base||T.fromObject({},{zone:this.zone}),n=e.padding?this<r?-e.padding:e.padding:0;let i=["years","months","days","hours","minutes","seconds"],s=e.unit;return Array.isArray(e.unit)&&(i=e.unit,s=void 0),Vo(r,this.plus(n),{...e,numeric:"always",units:i,unit:s})}toRelativeCalendar(e={}){return this.isValid?Vo(e.base||T.fromObject({},{zone:this.zone}),this,{...e,numeric:"auto",units:["years","months","days"],calendary:!0}):null}static min(...e){if(!e.every(T.isDateTime))throw new ae("min requires all arguments be DateTimes");return To(e,r=>r.valueOf(),Math.min)}static max(...e){if(!e.every(T.isDateTime))throw new ae("max requires all arguments be DateTimes");return To(e,r=>r.valueOf(),Math.max)}static fromFormatExplain(e,r,n={}){const{locale:i=null,numberingSystem:s=null}=n,a=V.fromOpts({locale:i,numberingSystem:s,defaultToEN:!0});return Td(a,e,r)}static fromStringExplain(e,r,n={}){return T.fromFormatExplain(e,r,n)}static get DATE_SHORT(){return Un}static get DATE_MED(){return Lu}static get DATE_MED_WITH_WEEKDAY(){return Xm}static get DATE_FULL(){return Pu}static get DATE_HUGE(){return Ou}static get TIME_SIMPLE(){return Nu}static get TIME_WITH_SECONDS(){return Iu}static get TIME_WITH_SHORT_OFFSET(){return Du}static get TIME_WITH_LONG_OFFSET(){return _u}static get TIME_24_SIMPLE(){return Ru}static get TIME_24_WITH_SECONDS(){return Vu}static get TIME_24_WITH_SHORT_OFFSET(){return Hu}static get TIME_24_WITH_LONG_OFFSET(){return Bu}static get DATETIME_SHORT(){return Fu}static get DATETIME_SHORT_WITH_SECONDS(){return Uu}static get DATETIME_MED(){return ju}static get DATETIME_MED_WITH_SECONDS(){return zu}static get DATETIME_MED_WITH_WEEKDAY(){return Qm}static get DATETIME_FULL(){return Wu}static get DATETIME_FULL_WITH_SECONDS(){return Gu}static get DATETIME_HUGE(){return qu}static get DATETIME_HUGE_WITH_SECONDS(){return Ku}}function yr(t){if(T.isDateTime(t))return t;if(t&&t.valueOf&&Tt(t.valueOf()))return T.fromJSDate(t);if(t&&typeof t=="object")return T.fromObject(t);throw new ae(`Unknown datetime argument: ${t}, of type ${typeof t}`)}function Ad(t){const e=T.fromObject(Gm(t,["timezone"]),{zone:t.timezone});if(!e.isValid)throw new Error(e.invalidExplanation??void 0);return e}function K0(t,e){if(!t.isValid)throw new Error(`Invalid input: '${t.toISO()}'`);return{day:t.day,month:t.month,year:t.year,hour:t.hour,minute:t.minute,second:t.second,millisecond:t.millisecond,timezone:e??t.zoneName}}const Z0=[(t,e)=>e in t,(t,e)=>e in t.constructor.prototype];function Lr(t,e){return t?Z0.some(r=>{try{return r(t,e)}catch{return!1}}):!1}function Mt(t){let e;try{e=Reflect.ownKeys(t)}catch{}return e??[...Object.keys(t),...Object.getOwnPropertySymbols(t)]}function Y0(t){return Mt(t).map(e=>t[e])}function J0(t,e){return t.includes(e)}function X0(t){return!!t}var Bo;(function(t){t.Upper="upper",t.Lower="lower"})(Bo||(Bo={}));var Fo;(function(t){t.FirstThenWait="first-then-wait",t.AfterWait="after-wait"})(Fo||(Fo={}));function Q0(t){return t?t.map(fa).filter(X0).join(`
`):""}function fa(t){return t?t instanceof Error?t.message:Lr(t,"message")?String(t.message):String(t):""}function eg(t){return t instanceof Error?t:new Error(fa(t))}function tg(t,e){const r=eg(t);return r.message=`${e}: ${r.message}`,r}function Cd(t,e){let r=!1;const n=Mt(t).reduce((i,s)=>{const a=e(s,t[s],t);return a instanceof Promise&&(r=!0),{...i,[s]:a}},{});return r?new Promise(async(i,s)=>{try{await Promise.all(Mt(n).map(async a=>{const o=await n[a];n[a]=o})),i(n)}catch(a){s(a)}}):n}function rg(t,e){try{return ng(t,e),!0}catch{return!1}}function ng(t,e,r){if(t.length<e)throw new Error(r?`'${r}' is not at least '${e}' in length.`:`Array is not at least '${e}' in length.`)}function Qt(t){return!!t&&typeof t=="object"}function ig(){return globalThis.crypto?globalThis.crypto:require("crypto").webcrypto}ig();function sg(t,e){var o;const r=e==null?void 0:e.constructor,n=(o=t==null?void 0:t.constructor)==null?void 0:o.prototype,i=(t==null?void 0:t.constructor)===r,s=r&&n?n instanceof r:!1,a=i||s;return Jt(t)===Jt(e)&&a}const Ld="__vir__shape__definition__key__do__not__use__in__actual__objects";function Pd(t){return Lr(t,Ld)}const ha=Symbol("and"),Od=Symbol("instance"),Nd=Symbol("enum"),Id=Symbol("exact"),ma=Symbol("indexed-keys"),pa=Symbol("or"),ga=Symbol("unknown"),ag=[ha,Nd,Id,ma,Od,pa,ga],Dd="__vir__shape__specifier__key__do__not__use__in__actual__objects";function og(...t){return yi(t,ha)}function _d(...t){return yi(t,ma)}function mn(...t){return yi(t,pa)}function lg(t){return yi([t],ga)}function fi(t){return Ot(t,ha)}function hi(t){return Ot(t,Od)}function mi(t){return Ot(t,Nd)}function pi(t){return Ot(t,Id)}function gi(t){return Ot(t,ma)}function Qr(t){return Ot(t,pa)}function wi(t){return Ot(t,ga)}function Ot(t,e){const r=en(t);return!!r&&r.specifierType===e}function yi(t,e){return{[Dd]:!0,specifierType:e,parts:t}}function $t(t,e,r,n){const i=en(e);if(i){if(hi(i))return t instanceof i.parts[0];if(fi(i))return i.parts.every(s=>$t(t,s));if(Qr(i))return i.parts.some(s=>$t(t,s));if(pi(i))return Qt(t)?$t(t,i.parts[0]):t===i.parts[0];if(mi(i))return Object.values(i.parts[0]).some(s=>s===t);if(gi(i))return Qt(t)?cg(t,i,!!r)&&Y0(t).every(s=>$t(s,i.parts[0].values)):!1;if(wi(i))return!0}return n?e===t:sg(t,e)}function cg(t,e,r){const n=e.parts[0].required,i=e.parts[0].keys;if(r)if(n){const s=wa(e);return k(s,"boolean")?s:s.every(a=>Mt(t).some(o=>$t(o,a,!1,!0)))}else return!0;else return Mt(t).every(s=>$t(s,i))}function wa(t){const e=t.parts[0].keys,r=en(e);if(Di(e))return[e];if(r){if(hi(r))return!1;if(fi(r))return!1;if(Qr(r)){const n=r.parts.map(s=>wa(_d({...t.parts[0],keys:s})));let i;return n.forEach(s=>{k(s,"boolean")&&(s&&i==null?i=!0:i=!1)}),k(i,"boolean")?i:n.flat().filter(Di)}else if(pi(r)){const n=r.parts.filter(Di);return n.length!==r.parts.length?!1:n}else{if(mi(r))return Object.values(r.parts[0]);if(gi(r))return!1;if(wi(r))return!0}}return!1}function en(t){if(Qt(t)&&Lr(t,Dd)){if(!Lr(t,"parts")||!k(t.parts,"array"))throw new Error("Found a shape specifier but its parts are not valid.");if(!Lr(t,"specifierType")||!J0(ag,t.specifierType))throw new Error("Found a shape specifier but its specifier type is not valid.");return t}}class Uo extends TypeError{constructor(){super(...arguments),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"DefaultValueConstructionError"})}}function Ms(t,e=!1){return Sr(t)}function Sr(t){const e=en(t);if(e)if(hi(e)){const r=e.parts[0];try{return new r}catch(n){throw new Uo(`Failed to create default value for classShape for class '${r.name}': ${fa(n)}`)}}else{if(Qr(e)||pi(e))return Sr(e.parts[0]);if(fi(e))return e.parts.reduce((r,n)=>Object.assign(r,Sr(n)),{});if(mi(e))return Object.values(e.parts[0])[0];if(gi(e)){const r=wa(e);return!e.parts[0].required||k(r,"boolean")?{}:Object.fromEntries(r.map(n=>[n,Sr(e.parts[0].values)]))}else{if(wi(e))return e.parts[0]??{};throw new Uo(`found specifier but it matches no expected specifiers: ${String(e.specifierType)}`)}}return Pd(t)?Ms(t.shape):t instanceof RegExp?t:k(t,"array")?t.map(Sr):Qt(t)?Cd(t,(r,n)=>Ms(n)):t}function Nt(t,e=!1){return{shape:t,get runTimeType(){throw new Error("runTimeType cannot be used as a value, it is only for types.")},isReadonly:e,get defaultValue(){return Ms(t)},[Ld]:!0}}class $e extends TypeError{constructor(){super(...arguments),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ShapeMismatchError"})}}function ug(t,e,r={}){try{return ya(t,e,r),!0}catch{return!1}}function ya(t,e,r={},n=""){try{Be({subject:t,shape:e.shape,keys:["top level"],options:{exactValues:!1,ignoreExtraKeys:!!r.allowExtraKeys}})}catch(i){throw n?tg(i,n):i}}function xs(t){return[t[0],...t.slice(1).map(e=>`'${String(e)}'`)].join(" -> ")}function Be({subject:t,shape:e,keys:r,options:n}){if(wi(e))return!0;if(Pd(e))return Be({subject:t,shape:e.shape,keys:r,options:n});const i=xs(r);if(en(t))throw new $e(`Shape test subjects cannot be contain shape specifiers but one was found at ${i}.`);if(!$t(t,e,!n.ignoreExtraKeys))throw new $e(`Subject does not match shape definition at key ${i}`);if(k(e,"function"))return k(t,"function");if(hi(e))return t instanceof e.parts[0];if(Qt(t)){const a=t,o=n.ignoreExtraKeys?{}:Object.fromEntries(Object.keys(a).map(d=>[d,!1])),l=[];let c=!1;if(Qr(e)){const d=[];c=e.parts.some(u=>{try{const f=Be({subject:t,shape:u,keys:r,options:{...n}});return Object.assign(o,f),!0}catch(f){if(f instanceof $e)return d.push(f),!1;throw f}}),!c&&rg(d,1)&&l.push(d[0])}else if(fi(e))c=e.parts.every(d=>{try{const u=Be({subject:t,shape:d,keys:r,options:{...n,ignoreExtraKeys:!0}});return Object.assign(o,u),!0}catch(u){if(u instanceof $e)return l.push(u),!1;throw u}});else if(pi(e)){const d=Be({subject:t,shape:e.parts[0],keys:r,options:{...n,exactValues:!0}});Object.assign(o,d),c=!0}else{if(mi(e))throw new $e(`Cannot compare an enum specifier to an object at ${i}`);if(k(e,"array")&&k(a,"array"))c=a.every((d,u)=>{const f=e.some(h=>{try{return Be({subject:d,shape:h,keys:[...r,u],options:n}),!0}catch(m){if(m instanceof $e)return l.push(m),!1;throw m}});return o[u]=f,f});else if(gi(e)){const d=Cd(t,(u,f)=>(n.ignoreExtraKeys||Be({shape:e.parts[0].keys,subject:u,keys:[...r,u],options:n}),Be({shape:e.parts[0].values,subject:f,keys:[...r,u],options:n}),!0));Object.assign(o,d),c=!0}else{const d=dg({keys:r,options:n,shape:e,subject:t});Object.assign(o,d),c=!0}}if(l.length)throw new $e(Q0(l));if(!c){const u=`Failed on key(s): ${Object.keys(o).filter(f=>!o[f]).map(f=>xs([...r,f])).join(",")}`;throw new $e(u)}return n.ignoreExtraKeys||Object.entries(o).forEach(([d,u])=>{if(!u)throw new $e(`subject as extra key '${d}' in ${i}.`)}),o}else if(n.exactValues)return t===e;return!0}function dg({keys:t,options:e,shape:r,subject:n}){const i=xs(t),s={};if(Qt(r)){const a=new Set(Mt(r)),o=new Set(Mt(n));a.forEach(l=>{l in n&&o.add(l)}),e.ignoreExtraKeys||o.forEach(l=>{if(!a.has(l))throw new $e(`Subject has extra key '${String(l)}' in ${i}`)}),a.forEach(l=>{var f;const c=r[l],d=Qr(c)?c.parts.includes(void 0):!1,u=((f=c==null?void 0:c.includes)==null?void 0:f.call(c,void 0))||c===void 0;if(!o.has(l)&&!d&&!u)throw new $e(`Subject missing key '${String(l)}' in ${i}`)}),o.forEach(l=>{const c=n[l];if(e.ignoreExtraKeys&&!a.has(l))return;const d=r[l];Be({subject:c,shape:d,keys:[...t,l],options:e}),s[l]=!0})}else throw new $e(`shape definition at ${i} was not an object.`);return s}const fg=["Africa/Abidjan","Africa/Accra","Africa/Addis_Ababa","Africa/Algiers","Africa/Asmara","Africa/Bamako","Africa/Bangui","Africa/Banjul","Africa/Bissau","Africa/Blantyre","Africa/Brazzaville","Africa/Bujumbura","Africa/Cairo","Africa/Casablanca","Africa/Ceuta","Africa/Conakry","Africa/Dakar","Africa/Dar_es_Salaam","Africa/Djibouti","Africa/Douala","Africa/El_Aaiun","Africa/Freetown","Africa/Gaborone","Africa/Harare","Africa/Johannesburg","Africa/Juba","Africa/Kampala","Africa/Khartoum","Africa/Kigali","Africa/Kinshasa","Africa/Lagos","Africa/Libreville","Africa/Lome","Africa/Luanda","Africa/Lubumbashi","Africa/Lusaka","Africa/Malabo","Africa/Maputo","Africa/Maseru","Africa/Mbabane","Africa/Mogadishu","Africa/Monrovia","Africa/Nairobi","Africa/Ndjamena","Africa/Niamey","Africa/Nouakchott","Africa/Ouagadougou","Africa/Porto-Novo","Africa/Sao_Tome","Africa/Timbuktu","Africa/Tripoli","Africa/Tunis","Africa/Windhoek","America/Adak","America/Anchorage","America/Anguilla","America/Antigua","America/Araguaina","America/Argentina/Buenos_Aires","America/Argentina/Catamarca","America/Argentina/ComodRivadavia","America/Argentina/Cordoba","America/Argentina/Jujuy","America/Argentina/La_Rioja","America/Argentina/Mendoza","America/Argentina/Rio_Gallegos","America/Argentina/Salta","America/Argentina/San_Juan","America/Argentina/San_Luis","America/Argentina/Tucuman","America/Argentina/Ushuaia","America/Aruba","America/Asuncion","America/Atikokan","America/Bahia","America/Bahia_Banderas","America/Barbados","America/Belem","America/Belize","America/Blanc-Sablon","America/Boa_Vista","America/Bogota","America/Boise","America/Cambridge_Bay","America/Campo_Grande","America/Cancun","America/Caracas","America/Cayenne","America/Cayman","America/Chicago","America/Chihuahua","America/Coral_Harbour","America/Costa_Rica","America/Creston","America/Cuiaba","America/Curacao","America/Danmarkshavn","America/Dawson","America/Dawson_Creek","America/Denver","America/Detroit","America/Dominica","America/Edmonton","America/Eirunepe","America/El_Salvador","America/Ensenada","America/Fort_Nelson","America/Fortaleza","America/Glace_Bay","America/Goose_Bay","America/Grand_Turk","America/Grenada","America/Guadeloupe","America/Guatemala","America/Guayaquil","America/Guyana","America/Halifax","America/Havana","America/Hermosillo","America/Indiana/Indianapolis","America/Indiana/Knox","America/Indiana/Marengo","America/Indiana/Petersburg","America/Indiana/Tell_City","America/Indiana/Vevay","America/Indiana/Vincennes","America/Indiana/Winamac","America/Inuvik","America/Iqaluit","America/Jamaica","America/Juneau","America/Kentucky/Louisville","America/Kentucky/Monticello","America/La_Paz","America/Lima","America/Los_Angeles","America/Maceio","America/Managua","America/Manaus","America/Martinique","America/Matamoros","America/Mazatlan","America/Menominee","America/Merida","America/Metlakatla","America/Mexico_City","America/Miquelon","America/Moncton","America/Monterrey","America/Montevideo","America/Montreal","America/Montserrat","America/Nassau","America/New_York","America/Nipigon","America/Nome","America/Noronha","America/North_Dakota/Beulah","America/North_Dakota/Center","America/North_Dakota/New_Salem","America/Nuuk","America/Ojinaga","America/Panama","America/Pangnirtung","America/Paramaribo","America/Phoenix","America/Port-au-Prince","America/Port_of_Spain","America/Porto_Velho","America/Puerto_Rico","America/Punta_Arenas","America/Rainy_River","America/Rankin_Inlet","America/Recife","America/Regina","America/Resolute","America/Rio_Branco","America/Rosario","America/Santarem","America/Santiago","America/Santo_Domingo","America/Sao_Paulo","America/Scoresbysund","America/Sitka","America/St_Johns","America/St_Kitts","America/St_Lucia","America/St_Thomas","America/St_Vincent","America/Swift_Current","America/Tegucigalpa","America/Thule","America/Thunder_Bay","America/Tijuana","America/Toronto","America/Tortola","America/Vancouver","America/Whitehorse","America/Winnipeg","America/Yakutat","America/Yellowknife","Antarctica/Casey","Antarctica/Davis","Antarctica/DumontDUrville","Antarctica/Macquarie","Antarctica/Mawson","Antarctica/McMurdo","Antarctica/Palmer","Antarctica/Rothera","Antarctica/Syowa","Antarctica/Troll","Antarctica/Vostok","Asia/Aden","Asia/Almaty","Asia/Amman","Asia/Anadyr","Asia/Aqtau","Asia/Aqtobe","Asia/Ashgabat","Asia/Atyrau","Asia/Baghdad","Asia/Bahrain","Asia/Baku","Asia/Bangkok","Asia/Barnaul","Asia/Beirut","Asia/Bishkek","Asia/Brunei","Asia/Chita","Asia/Choibalsan","Asia/Chongqing","Asia/Colombo","Asia/Damascus","Asia/Dhaka","Asia/Dili","Asia/Dubai","Asia/Dushanbe","Asia/Famagusta","Asia/Gaza","Asia/Harbin","Asia/Hebron","Asia/Ho_Chi_Minh","Asia/Hong_Kong","Asia/Hovd","Asia/Irkutsk","Asia/Jakarta","Asia/Jayapura","Asia/Jerusalem","Asia/Kabul","Asia/Kamchatka","Asia/Karachi","Asia/Kashgar","Asia/Kathmandu","Asia/Khandyga","Asia/Kolkata","Asia/Krasnoyarsk","Asia/Kuala_Lumpur","Asia/Kuching","Asia/Kuwait","Asia/Macau","Asia/Magadan","Asia/Makassar","Asia/Manila","Asia/Muscat","Asia/Nicosia","Asia/Novokuznetsk","Asia/Novosibirsk","Asia/Omsk","Asia/Oral","Asia/Phnom_Penh","Asia/Pontianak","Asia/Pyongyang","Asia/Qatar","Asia/Qostanay","Asia/Qyzylorda","Asia/Riyadh","Asia/Sakhalin","Asia/Samarkand","Asia/Seoul","Asia/Shanghai","Asia/Singapore","Asia/Srednekolymsk","Asia/Taipei","Asia/Tashkent","Asia/Tbilisi","Asia/Tehran","Asia/Tel_Aviv","Asia/Thimphu","Asia/Tokyo","Asia/Tomsk","Asia/Ulaanbaatar","Asia/Urumqi","Asia/Ust-Nera","Asia/Vientiane","Asia/Vladivostok","Asia/Yakutsk","Asia/Yangon","Asia/Yekaterinburg","Asia/Yerevan","Atlantic/Azores","Atlantic/Bermuda","Atlantic/Canary","Atlantic/Cape_Verde","Atlantic/Faroe","Atlantic/Jan_Mayen","Atlantic/Madeira","Atlantic/Reykjavik","Atlantic/South_Georgia","Atlantic/St_Helena","Atlantic/Stanley","Australia/Adelaide","Australia/Brisbane","Australia/Broken_Hill","Australia/Currie","Australia/Darwin","Australia/Eucla","Australia/Hobart","Australia/Lindeman","Australia/Lord_Howe","Australia/Melbourne","Australia/Perth","Australia/Sydney","CET","CST6CDT","EET","EST","EST5EDT","Etc/GMT+1","Etc/GMT+10","Etc/GMT+11","Etc/GMT+12","Etc/GMT+2","Etc/GMT+3","Etc/GMT+4","Etc/GMT+5","Etc/GMT+6","Etc/GMT+7","Etc/GMT+8","Etc/GMT+9","Etc/GMT-1","Etc/GMT-10","Etc/GMT-11","Etc/GMT-12","Etc/GMT-13","Etc/GMT-14","Etc/GMT-2","Etc/GMT-3","Etc/GMT-4","Etc/GMT-5","Etc/GMT-6","Etc/GMT-7","Etc/GMT-8","Etc/GMT-9","Europe/Amsterdam","Europe/Andorra","Europe/Astrakhan","Europe/Athens","Europe/Belfast","Europe/Belgrade","Europe/Berlin","Europe/Brussels","Europe/Bucharest","Europe/Budapest","Europe/Chisinau","Europe/Copenhagen","Europe/Dublin","Europe/Gibraltar","Europe/Guernsey","Europe/Helsinki","Europe/Isle_of_Man","Europe/Istanbul","Europe/Jersey","Europe/Kaliningrad","Europe/Kirov","Europe/Kyiv","Europe/Lisbon","Europe/Ljubljana","Europe/London","Europe/Luxembourg","Europe/Madrid","Europe/Malta","Europe/Minsk","Europe/Monaco","Europe/Moscow","Europe/Oslo","Europe/Paris","Europe/Prague","Europe/Riga","Europe/Rome","Europe/Samara","Europe/Sarajevo","Europe/Saratov","Europe/Simferopol","Europe/Skopje","Europe/Sofia","Europe/Stockholm","Europe/Tallinn","Europe/Tirane","Europe/Tiraspol","Europe/Ulyanovsk","Europe/Uzhgorod","Europe/Vaduz","Europe/Vienna","Europe/Vilnius","Europe/Volgograd","Europe/Warsaw","Europe/Zagreb","Europe/Zaporozhye","Europe/Zurich","Factory","HST","Indian/Antananarivo","Indian/Chagos","Indian/Christmas","Indian/Cocos","Indian/Comoro","Indian/Kerguelen","Indian/Mahe","Indian/Maldives","Indian/Mauritius","Indian/Mayotte","Indian/Reunion","MET","MST","MST7MDT","PST8PDT","Pacific/Apia","Pacific/Auckland","Pacific/Bougainville","Pacific/Chatham","Pacific/Chuuk","Pacific/Easter","Pacific/Efate","Pacific/Enderbury","Pacific/Fakaofo","Pacific/Fiji","Pacific/Funafuti","Pacific/Galapagos","Pacific/Gambier","Pacific/Guadalcanal","Pacific/Guam","Pacific/Honolulu","Pacific/Johnston","Pacific/Kanton","Pacific/Kiritimati","Pacific/Kosrae","Pacific/Kwajalein","Pacific/Majuro","Pacific/Marquesas","Pacific/Midway","Pacific/Nauru","Pacific/Niue","Pacific/Norfolk","Pacific/Noumea","Pacific/Pago_Pago","Pacific/Palau","Pacific/Pitcairn","Pacific/Pohnpei","Pacific/Port_Moresby","Pacific/Rarotonga","Pacific/Saipan","Pacific/Tahiti","Pacific/Tarawa","Pacific/Tongatapu","Pacific/Wake","Pacific/Wallis","UTC","WET"],hg=fg.reduce((t,e)=>(t[e]=e,t),{}),mg=U.defaultZone.name,ba=hg.UTC;var jo;(function(t){t.Date="date",t.Time="time",t.DateTime="datetime-local"})(jo||(jo={}));const pg=["hour","minute","second","millisecond"],gg=Nt({hour:14,minute:19,second:7,millisecond:877,timezone:ba}),wg=Nt({year:2023,month:6,day:5,timezone:ba}),yg=Nt(og(wg,gg));var L;(function(t){t.Years="years",t.Quarters="quarters",t.Months="months",t.Weeks="weeks",t.Days="days",t.Hours="hours",t.Minutes="minutes",t.Seconds="seconds",t.Milliseconds="milliseconds"})(L||(L={}));L.Milliseconds+"",L.Seconds+"",L.Minutes+"",L.Hours+"",L.Days+"",L.Weeks+"",L.Months+"",L.Quarters+"",L.Years+"";L.Milliseconds,L.Seconds,L.Minutes,L.Hours,L.Days,L.Weeks,L.Months,L.Quarters,L.Years;function zo(t,e){if(bg(t))return{[e]:1/0};if(vg(t))return{[e]:-1/0};const n=P.fromObject(t).as(e);return{[e]:n}}function bg(t){return Object.values(t).some(e=>e===1/0)}function vg(t){return Object.values(t).some(e=>e===-1/0)}L.Years+"",L.Quarters+"",L.Months+"",L.Weeks+"",L.Days+"",L.Hours+"",L.Minutes+"",L.Seconds+"",L.Milliseconds+"";var Wo;(function(t){t.AdditiveUnits="additive-units",t.EquivalentUnits="equivalent-units"})(Wo||(Wo={}));function $g(t){if(!Tr.isValidIANAZone(t))throw new Error(`'${t}' is not a valid time zone`)}function Eg(t){ya(t,yg),$g(t.timezone),Ad(t)}function Tg(t){try{return Eg(t),!0}catch{return!1}}const Sg=["L-y","LLL-y","LLLL-y"];function kg(t,e){const r=T.fromISO(t,{zone:e});if(r.isValid)return r;let n;return Sg.some(i=>{const s=T.fromFormat(t,i,{zone:e});return s.isValid?(n=s,!0):!1}),n}function Mg(t,e){const r=Ag(t,e);if(!r||!r.isValid)throw new Error(`Failed to parse date input '${t}'`);return K0(r,e)}function xg(t){const e=T.fromJSDate(new Date(t));if(e.isValid)return e}function Ag(t,e){if(Tg(t)&&(t=Ad(t).toMillis()),T.isDateTime(t))return t.setZone(e);if(k(t,"number"))return T.fromMillis(t,{zone:ba}).setZone(e);if(k(t,"string")){const r=kg(t,e);if(r)return r}else if(t instanceof Date)return T.fromJSDate(t).setZone(e);return xg(t)}const Cg={year:0,month:1,day:1,hour:0,minute:0,second:0,millisecond:0};qm(Cg,pg);U.defaultLocale;L.Milliseconds+"",L.Seconds+"",L.Minutes+"",L.Hours+"",L.Days+"",L.Weeks+"",L.Months+"",L.Quarters+"",L.Years+"";class Rd extends Um{constructor(e){super(),Object.defineProperty(this,"value",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"equalityCheck",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.value=e.defaultValue,this.equalityCheck=e.equalityCheck||jm}setValue(e){return super.setValue(e)}listen(e,r){return super.listen(e,r)}removeListener(e){return super.removeListener(e)}}const Lg=Nt({listen(t,e){return()=>!1},destroy(){},removeListener(t){return!1},value:lg()});function Wi(t){return ug(t,Lg,{allowExtraKeys:!0})}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Nn=globalThis,va=Nn.ShadowRoot&&(Nn.ShadyCSS===void 0||Nn.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,$a=Symbol(),Go=new WeakMap;let Vd=class{constructor(e,r,n){if(this._$cssResult$=!0,n!==$a)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=r}get styleSheet(){let e=this.o;const r=this.t;if(va&&e===void 0){const n=r!==void 0&&r.length===1;n&&(e=Go.get(r)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&Go.set(r,e))}return e}toString(){return this.cssText}};const de=t=>new Vd(typeof t=="string"?t:t+"",void 0,$a),In=(t,...e)=>{const r=t.length===1?t[0]:e.reduce((n,i,s)=>n+(a=>{if(a._$cssResult$===!0)return a.cssText;if(typeof a=="number")return a;throw Error("Value passed to 'css' function must be a 'css' function result: "+a+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1],t[0]);return new Vd(r,t,$a)},Pg=(t,e)=>{if(va)t.adoptedStyleSheets=e.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet);else for(const r of e){const n=document.createElement("style"),i=Nn.litNonce;i!==void 0&&n.setAttribute("nonce",i),n.textContent=r.cssText,t.appendChild(n)}},qo=va?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let r="";for(const n of e.cssRules)r+=n.cssText;return de(r)})(t):t;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Og,defineProperty:Ng,getOwnPropertyDescriptor:Ig,getOwnPropertyNames:Dg,getOwnPropertySymbols:_g,getPrototypeOf:Rg}=Object,nt=globalThis,Ko=nt.trustedTypes,Vg=Ko?Ko.emptyScript:"",Gi=nt.reactiveElementPolyfillSupport,Pr=(t,e)=>t,Gn={toAttribute(t,e){switch(e){case Boolean:t=t?Vg:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let r=t;switch(e){case Boolean:r=t!==null;break;case Number:r=t===null?null:Number(t);break;case Object:case Array:try{r=JSON.parse(t)}catch{r=null}}return r}},Ea=(t,e)=>!Og(t,e),Zo={attribute:!0,type:String,converter:Gn,reflect:!1,hasChanged:Ea};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),nt.litPropertyMetadata??(nt.litPropertyMetadata=new WeakMap);let Ut=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,r=Zo){if(r.state&&(r.attribute=!1),this._$Ei(),this.elementProperties.set(e,r),!r.noAccessor){const n=Symbol(),i=this.getPropertyDescriptor(e,n,r);i!==void 0&&Ng(this.prototype,e,i)}}static getPropertyDescriptor(e,r,n){const{get:i,set:s}=Ig(this.prototype,e)??{get(){return this[r]},set(a){this[r]=a}};return{get(){return i==null?void 0:i.call(this)},set(a){const o=i==null?void 0:i.call(this);s.call(this,a),this.requestUpdate(e,o,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Zo}static _$Ei(){if(this.hasOwnProperty(Pr("elementProperties")))return;const e=Rg(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(Pr("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Pr("properties"))){const r=this.properties,n=[...Dg(r),..._g(r)];for(const i of n)this.createProperty(i,r[i])}const e=this[Symbol.metadata];if(e!==null){const r=litPropertyMetadata.get(e);if(r!==void 0)for(const[n,i]of r)this.elementProperties.set(n,i)}this._$Eh=new Map;for(const[r,n]of this.elementProperties){const i=this._$Eu(r,n);i!==void 0&&this._$Eh.set(i,r)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const r=[];if(Array.isArray(e)){const n=new Set(e.flat(1/0).reverse());for(const i of n)r.unshift(qo(i))}else e!==void 0&&r.push(qo(e));return r}static _$Eu(e,r){const n=r.attribute;return n===!1?void 0:typeof n=="string"?n:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(r=>this.enableUpdating=r),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(r=>r(this))}addController(e){var r;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((r=e.hostConnected)==null||r.call(e))}removeController(e){var r;(r=this._$EO)==null||r.delete(e)}_$E_(){const e=new Map,r=this.constructor.elementProperties;for(const n of r.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Pg(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(r=>{var n;return(n=r.hostConnected)==null?void 0:n.call(r)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(r=>{var n;return(n=r.hostDisconnected)==null?void 0:n.call(r)})}attributeChangedCallback(e,r,n){this._$AK(e,n)}_$EC(e,r){var s;const n=this.constructor.elementProperties.get(e),i=this.constructor._$Eu(e,n);if(i!==void 0&&n.reflect===!0){const a=(((s=n.converter)==null?void 0:s.toAttribute)!==void 0?n.converter:Gn).toAttribute(r,n.type);this._$Em=e,a==null?this.removeAttribute(i):this.setAttribute(i,a),this._$Em=null}}_$AK(e,r){var s;const n=this.constructor,i=n._$Eh.get(e);if(i!==void 0&&this._$Em!==i){const a=n.getPropertyOptions(i),o=typeof a.converter=="function"?{fromAttribute:a.converter}:((s=a.converter)==null?void 0:s.fromAttribute)!==void 0?a.converter:Gn;this._$Em=i,this[i]=o.fromAttribute(r,a.type),this._$Em=null}}requestUpdate(e,r,n){if(e!==void 0){if(n??(n=this.constructor.getPropertyOptions(e)),!(n.hasChanged??Ea)(this[e],r))return;this.P(e,r,n)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(e,r,n){this._$AL.has(e)||this._$AL.set(e,r),n.reflect===!0&&this._$Em!==e&&(this._$Ej??(this._$Ej=new Set)).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(r){Promise.reject(r)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var n;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[s,a]of this._$Ep)this[s]=a;this._$Ep=void 0}const i=this.constructor.elementProperties;if(i.size>0)for(const[s,a]of i)a.wrapped!==!0||this._$AL.has(s)||this[s]===void 0||this.P(s,this[s],a)}let e=!1;const r=this._$AL;try{e=this.shouldUpdate(r),e?(this.willUpdate(r),(n=this._$EO)==null||n.forEach(i=>{var s;return(s=i.hostUpdate)==null?void 0:s.call(i)}),this.update(r)):this._$EU()}catch(i){throw e=!1,this._$EU(),i}e&&this._$AE(r)}willUpdate(e){}_$AE(e){var r;(r=this._$EO)==null||r.forEach(n=>{var i;return(i=n.hostUpdated)==null?void 0:i.call(n)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&(this._$Ej=this._$Ej.forEach(r=>this._$EC(r,this[r]))),this._$EU()}updated(e){}firstUpdated(e){}};Ut.elementStyles=[],Ut.shadowRootOptions={mode:"open"},Ut[Pr("elementProperties")]=new Map,Ut[Pr("finalized")]=new Map,Gi==null||Gi({ReactiveElement:Ut}),(nt.reactiveElementVersions??(nt.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Or=globalThis,qn=Or.trustedTypes,Yo=qn?qn.createPolicy("lit-html",{createHTML:t=>t}):void 0,Ta="$lit$",Ue=`lit$${Math.random().toFixed(9).slice(2)}$`,Sa="?"+Ue,Hg=`<${Sa}>`,xt=document,Rr=()=>xt.createComment(""),Vr=t=>t===null||typeof t!="object"&&typeof t!="function",Hd=Array.isArray,Bd=t=>Hd(t)||typeof(t==null?void 0:t[Symbol.iterator])=="function",qi=`[ 	
\f\r]`,br=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Jo=/-->/g,Xo=/>/g,gt=RegExp(`>|${qi}(?:([^\\s"'>=/]+)(${qi}*=${qi}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Qo=/'/g,el=/"/g,Fd=/^(?:script|style|textarea|title)$/i,Bg=t=>(e,...r)=>({_$litType$:t,strings:e,values:r}),Fg=Bg(1),pe=Symbol.for("lit-noChange"),N=Symbol.for("lit-nothing"),tl=new WeakMap,Et=xt.createTreeWalker(xt,129);function Ud(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return Yo!==void 0?Yo.createHTML(e):e}const jd=(t,e)=>{const r=t.length-1,n=[];let i,s=e===2?"<svg>":"",a=br;for(let o=0;o<r;o++){const l=t[o];let c,d,u=-1,f=0;for(;f<l.length&&(a.lastIndex=f,d=a.exec(l),d!==null);)f=a.lastIndex,a===br?d[1]==="!--"?a=Jo:d[1]!==void 0?a=Xo:d[2]!==void 0?(Fd.test(d[2])&&(i=RegExp("</"+d[2],"g")),a=gt):d[3]!==void 0&&(a=gt):a===gt?d[0]===">"?(a=i??br,u=-1):d[1]===void 0?u=-2:(u=a.lastIndex-d[2].length,c=d[1],a=d[3]===void 0?gt:d[3]==='"'?el:Qo):a===el||a===Qo?a=gt:a===Jo||a===Xo?a=br:(a=gt,i=void 0);const h=a===gt&&t[o+1].startsWith("/>")?" ":"";s+=a===br?l+Hg:u>=0?(n.push(c),l.slice(0,u)+Ta+l.slice(u)+Ue+h):l+Ue+(u===-2?o:h)}return[Ud(t,s+(t[r]||"<?>")+(e===2?"</svg>":"")),n]};class Hr{constructor({strings:e,_$litType$:r},n){let i;this.parts=[];let s=0,a=0;const o=e.length-1,l=this.parts,[c,d]=jd(e,r);if(this.el=Hr.createElement(c,n),Et.currentNode=this.el.content,r===2){const u=this.el.content.firstChild;u.replaceWith(...u.childNodes)}for(;(i=Et.nextNode())!==null&&l.length<o;){if(i.nodeType===1){if(i.hasAttributes())for(const u of i.getAttributeNames())if(u.endsWith(Ta)){const f=d[a++],h=i.getAttribute(u).split(Ue),m=/([.?@])?(.*)/.exec(f);l.push({type:1,index:s,name:m[2],strings:h,ctor:m[1]==="."?Wd:m[1]==="?"?Gd:m[1]==="@"?qd:tn}),i.removeAttribute(u)}else u.startsWith(Ue)&&(l.push({type:6,index:s}),i.removeAttribute(u));if(Fd.test(i.tagName)){const u=i.textContent.split(Ue),f=u.length-1;if(f>0){i.textContent=qn?qn.emptyScript:"";for(let h=0;h<f;h++)i.append(u[h],Rr()),Et.nextNode(),l.push({type:2,index:++s});i.append(u[f],Rr())}}}else if(i.nodeType===8)if(i.data===Sa)l.push({type:2,index:s});else{let u=-1;for(;(u=i.data.indexOf(Ue,u+1))!==-1;)l.push({type:7,index:s}),u+=Ue.length-1}s++}}static createElement(e,r){const n=xt.createElement("template");return n.innerHTML=e,n}}function At(t,e,r=t,n){var a,o;if(e===pe)return e;let i=n!==void 0?(a=r._$Co)==null?void 0:a[n]:r._$Cl;const s=Vr(e)?void 0:e._$litDirective$;return(i==null?void 0:i.constructor)!==s&&((o=i==null?void 0:i._$AO)==null||o.call(i,!1),s===void 0?i=void 0:(i=new s(t),i._$AT(t,r,n)),n!==void 0?(r._$Co??(r._$Co=[]))[n]=i:r._$Cl=i),i!==void 0&&(e=At(t,i._$AS(t,e.values),i,n)),e}class zd{constructor(e,r){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:r},parts:n}=this._$AD,i=((e==null?void 0:e.creationScope)??xt).importNode(r,!0);Et.currentNode=i;let s=Et.nextNode(),a=0,o=0,l=n[0];for(;l!==void 0;){if(a===l.index){let c;l.type===2?c=new pr(s,s.nextSibling,this,e):l.type===1?c=new l.ctor(s,l.name,l.strings,this,e):l.type===6&&(c=new Kd(s,this,e)),this._$AV.push(c),l=n[++o]}a!==(l==null?void 0:l.index)&&(s=Et.nextNode(),a++)}return Et.currentNode=xt,i}p(e){let r=0;for(const n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(e,n,r),r+=n.strings.length-2):n._$AI(e[r])),r++}}class pr{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,r,n,i){this.type=2,this._$AH=N,this._$AN=void 0,this._$AA=e,this._$AB=r,this._$AM=n,this.options=i,this._$Cv=(i==null?void 0:i.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=r.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,r=this){e=At(this,e,r),Vr(e)?e===N||e==null||e===""?(this._$AH!==N&&this._$AR(),this._$AH=N):e!==this._$AH&&e!==pe&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Bd(e)?this.k(e):this._(e)}S(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.S(e))}_(e){this._$AH!==N&&Vr(this._$AH)?this._$AA.nextSibling.data=e:this.T(xt.createTextNode(e)),this._$AH=e}$(e){var s;const{values:r,_$litType$:n}=e,i=typeof n=="number"?this._$AC(e):(n.el===void 0&&(n.el=Hr.createElement(Ud(n.h,n.h[0]),this.options)),n);if(((s=this._$AH)==null?void 0:s._$AD)===i)this._$AH.p(r);else{const a=new zd(i,this),o=a.u(this.options);a.p(r),this.T(o),this._$AH=a}}_$AC(e){let r=tl.get(e.strings);return r===void 0&&tl.set(e.strings,r=new Hr(e)),r}k(e){Hd(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let n,i=0;for(const s of e)i===r.length?r.push(n=new pr(this.S(Rr()),this.S(Rr()),this,this.options)):n=r[i],n._$AI(s),i++;i<r.length&&(this._$AR(n&&n._$AB.nextSibling,i),r.length=i)}_$AR(e=this._$AA.nextSibling,r){var n;for((n=this._$AP)==null?void 0:n.call(this,!1,!0,r);e&&e!==this._$AB;){const i=e.nextSibling;e.remove(),e=i}}setConnected(e){var r;this._$AM===void 0&&(this._$Cv=e,(r=this._$AP)==null||r.call(this,e))}}class tn{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,r,n,i,s){this.type=1,this._$AH=N,this._$AN=void 0,this.element=e,this.name=r,this._$AM=i,this.options=s,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=N}_$AI(e,r=this,n,i){const s=this.strings;let a=!1;if(s===void 0)e=At(this,e,r,0),a=!Vr(e)||e!==this._$AH&&e!==pe,a&&(this._$AH=e);else{const o=e;let l,c;for(e=s[0],l=0;l<s.length-1;l++)c=At(this,o[n+l],r,l),c===pe&&(c=this._$AH[l]),a||(a=!Vr(c)||c!==this._$AH[l]),c===N?e=N:e!==N&&(e+=(c??"")+s[l+1]),this._$AH[l]=c}a&&!i&&this.j(e)}j(e){e===N?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class Wd extends tn{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===N?void 0:e}}class Gd extends tn{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==N)}}class qd extends tn{constructor(e,r,n,i,s){super(e,r,n,i,s),this.type=5}_$AI(e,r=this){if((e=At(this,e,r,0)??N)===pe)return;const n=this._$AH,i=e===N&&n!==N||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,s=e!==N&&(n===N||i);i&&this.element.removeEventListener(this.name,this,n),s&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var r;typeof this._$AH=="function"?this._$AH.call(((r=this.options)==null?void 0:r.host)??this.element,e):this._$AH.handleEvent(e)}}class Kd{constructor(e,r,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=r,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){At(this,e)}}const Ug={P:Ta,A:Ue,C:Sa,M:1,L:jd,R:zd,D:Bd,V:At,I:pr,H:tn,N:Gd,U:qd,B:Wd,F:Kd},Ki=Or.litHtmlPolyfillSupport;Ki==null||Ki(Hr,pr),(Or.litHtmlVersions??(Or.litHtmlVersions=[])).push("3.1.4");const jg=(t,e,r)=>{const n=(r==null?void 0:r.renderBefore)??e;let i=n._$litPart$;if(i===void 0){const s=(r==null?void 0:r.renderBefore)??null;n._$litPart$=i=new pr(e.insertBefore(Rr(),s),s,void 0,r??{})}return i._$AI(t),i};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Nr=class extends Ut{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var r;const e=super.createRenderRoot();return(r=this.renderOptions).renderBefore??(r.renderBefore=e.firstChild),e}update(e){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=jg(r,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return pe}};var mu;Nr._$litElement$=!0,Nr.finalized=!0,(mu=globalThis.litElementHydrateSupport)==null||mu.call(globalThis,{LitElement:Nr});const Zi=globalThis.litElementPolyfillSupport;Zi==null||Zi({LitElement:Nr});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.6");/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{I:zg}=Ug,rl=()=>document.createComment(""),vr=(t,e,r)=>{var s;const n=t._$AA.parentNode,i=e===void 0?t._$AB:e._$AA;if(r===void 0){const a=n.insertBefore(rl(),i),o=n.insertBefore(rl(),i);r=new zg(a,o,t,t.options)}else{const a=r._$AB.nextSibling,o=r._$AM,l=o!==t;if(l){let c;(s=r._$AQ)==null||s.call(r,t),r._$AM=t,r._$AP!==void 0&&(c=t._$AU)!==o._$AU&&r._$AP(c)}if(a!==i||l){let c=r._$AA;for(;c!==a;){const d=c.nextSibling;n.insertBefore(c,i),c=d}}}return r},wt=(t,e,r=t)=>(t._$AI(e,r),t),Wg={},Gg=(t,e=Wg)=>t._$AH=e,qg=t=>t._$AH,Yi=t=>{var n;(n=t._$AP)==null||n.call(t,!1,!0);let e=t._$AA;const r=t._$AB.nextSibling;for(;e!==r;){const i=e.nextSibling;e.remove(),e=i}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const bi={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},dt=t=>(...e)=>({_$litDirective$:t,values:e});class Ze{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,r,n){this._$Ct=e,this._$AM=r,this._$Ci=n}_$AS(e,r){return this.update(e,r)}update(e,r){return this.render(...r)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Kg={attribute:!0,type:String,converter:Gn,reflect:!1,hasChanged:Ea},Zg=(t=Kg,e,r)=>{const{kind:n,metadata:i}=r;let s=globalThis.litPropertyMetadata.get(i);if(s===void 0&&globalThis.litPropertyMetadata.set(i,s=new Map),s.set(r.name,t),n==="accessor"){const{name:a}=r;return{set(o){const l=e.get.call(this);e.set.call(this,o),this.requestUpdate(a,l,t)},init(o){return o!==void 0&&this.P(a,void 0,t),o}}}if(n==="setter"){const{name:a}=r;return function(o){const l=this[a];e.call(this,o),this.requestUpdate(a,l,t)}}throw Error("Unsupported decorator location: "+n)};function Yg(t){return(e,r)=>typeof r=="object"?Zg(t,e,r):((n,i,s)=>{const a=i.hasOwnProperty(s);return i.constructor.createProperty(s,a?{...n,wrapped:!0}:n),a?Object.getOwnPropertyDescriptor(i,s):void 0})(t,e,r)}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ze=dt(class extends Ze{constructor(t){var e;if(super(t),t.type!==bi.ATTRIBUTE||t.name!=="class"||((e=t.strings)==null?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){var n,i;if(this.st===void 0){this.st=new Set,t.strings!==void 0&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(s=>s!=="")));for(const s in e)e[s]&&!((n=this.nt)!=null&&n.has(s))&&this.st.add(s);return this.render(e)}const r=t.element.classList;for(const s of this.st)s in e||(r.remove(s),this.st.delete(s));for(const s in e){const a=!!e[s];a===this.st.has(s)||(i=this.nt)!=null&&i.has(s)||(a?(r.add(s),this.st.add(s)):(r.remove(s),this.st.delete(s)))}return pe}});/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Zd=t=>t??N;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class As extends Ze{constructor(e){if(super(e),this.it=N,e.type!==bi.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===N||e==null)return this._t=void 0,this.it=e;if(e===pe)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;const r=[e];return r.raw=r,this._t={_$litType$:this.constructor.resultType,strings:r,values:[]}}}As.directiveName="unsafeHTML",As.resultType=1;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class nl extends As{}nl.directiveName="unsafeSVG",nl.resultType=2;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Jg(t,e,r){return t?e(t):r==null?void 0:r(t)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const il=(t,e,r)=>{const n=new Map;for(let i=e;i<=r;i++)n.set(t[i],i);return n},Xg=dt(class extends Ze{constructor(t){if(super(t),t.type!==bi.CHILD)throw Error("repeat() can only be used in text expressions")}dt(t,e,r){let n;r===void 0?r=e:e!==void 0&&(n=e);const i=[],s=[];let a=0;for(const o of t)i[a]=n?n(o,a):a,s[a]=r(o,a),a++;return{values:s,keys:i}}render(t,e,r){return this.dt(t,e,r).values}update(t,[e,r,n]){const i=qg(t),{values:s,keys:a}=this.dt(e,r,n);if(!Array.isArray(i))return this.ut=a,s;const o=this.ut??(this.ut=[]),l=[];let c,d,u=0,f=i.length-1,h=0,m=s.length-1;for(;u<=f&&h<=m;)if(i[u]===null)u++;else if(i[f]===null)f--;else if(o[u]===a[h])l[h]=wt(i[u],s[h]),u++,h++;else if(o[f]===a[m])l[m]=wt(i[f],s[m]),f--,m--;else if(o[u]===a[m])l[m]=wt(i[u],s[m]),vr(t,l[m+1],i[u]),u++,m--;else if(o[f]===a[h])l[h]=wt(i[f],s[h]),vr(t,i[u],i[f]),f--,h++;else if(c===void 0&&(c=il(a,h,m),d=il(o,u,f)),c.has(o[u]))if(c.has(o[f])){const g=d.get(a[h]),y=g!==void 0?i[g]:null;if(y===null){const b=vr(t,i[u]);wt(b,s[h]),l[h]=b}else l[h]=wt(y,s[h]),vr(t,i[u],y),i[g]=null;h++}else Yi(i[f]),f--;else Yi(i[u]),u++;for(;h<=m;){const g=vr(t,l[m+1]);wt(g,s[h]),l[h++]=g}for(;u<=f;){const g=i[u++];g!==null&&Yi(g)}return this.ut=a,Gg(t,l),pe}}),Qg=Xg;class Yd extends Nr{}function sl(t){let e;try{e=Reflect.ownKeys(t)}catch{}return e??[...Object.keys(t),...Object.getOwnPropertySymbols(t)]}var er;(function(t){t.Upper="upper",t.Lower="lower"})(er||(er={}));function ew(t){return t.toLowerCase()!==t.toUpperCase()}function al(t,e,r){if(!t&&(r!=null&&r.blockNoCaseCharacters))return!1;for(let n=0;n<t.length;n++){const i=t[n]||"";if(!ew(i)){if(r!=null&&r.blockNoCaseCharacters)return!1;continue}if(e===er.Upper&&i!==i.toUpperCase())return!1;if(e===er.Lower&&i!==i.toLowerCase())return!1}return!0}function tw(t){return t.split("").reduce((r,n,i,s)=>{const a=i>0&&s[i-1]||"",o=i<s.length-1&&s[i+1]||"",l=al(a,er.Lower,{blockNoCaseCharacters:!0})||al(o,er.Lower,{blockNoCaseCharacters:!0});return n===n.toLowerCase()||i===0||!l?r+=n:r+=`-${n.toLowerCase()}`,r},"").toLowerCase()}var ol;(function(t){t.FirstThenWait="first-then-wait",t.AfterWait="after-wait"})(ol||(ol={}));function rw(t){return!!t&&typeof t=="object"}function nw(t,e){let r=!1;const n=sl(t).reduce((i,s)=>{const a=e(s,t[s],t);return a instanceof Promise&&(r=!0),{...i,[s]:a}},{});return r?new Promise(async(i,s)=>{try{await Promise.all(sl(n).map(async a=>{const o=await n[a];n[a]=o})),i(n)}catch(a){s(a)}}):n}function iw(){return globalThis.crypto?globalThis.crypto:require("crypto").webcrypto}iw();function ft(t){if(rw(t))return nw(t,(r,n)=>{if(!k(r,"string"))throw new Error(`Invalid CSS var name '${String(r)}' given. CSS var names must be strings.`);if(tw(r).toLowerCase()!==r)throw new Error(`Invalid CSS var name '${r}' given. CSS var names must be in lower kebab case.`);const s=n,a=r.startsWith("--")?de(r):r.startsWith("-")?In`-${de(r)}`:In`--${de(r)}`;return{name:a,value:In`var(${a}, ${de(s)})`,default:String(s)}});throw new Error(`Invalid setup input for '${ft.name}' function.`)}function sw({onElement:t,toValue:e,forCssVar:r}){t.style.setProperty(String(r.name),String(e))}function aw(t,e,r){const n=!e.length&&!r.length,i=t.length?!1:!e.filter(o=>!!o.index).length;if(n||i)return[...t];const s=t.map(o=>[o]);return s.length||(s[0]=[]),r.forEach(o=>{o>=0&&o<t.length&&(s[o]=[])}),e.forEach(o=>{const l=s[o.index];l&&l.splice(0,0,...o.values)}),s.flat()}function Dn(t){return cr(t,"_elementVirIsMinimalDefinitionWithInputs")&&!!t._elementVirIsMinimalDefinitionWithInputs}function ka(t){return cr(t,"tagName")&&!!t.tagName&&typeof t.tagName=="string"}function Jd(t){return qh(t,e=>{if(Dn(e))return e.definition;if(ka(e))return e.tagInterpolationKey||e},qr)}const Xd=new WeakMap;function ow(t,e){var i;const r=Jd(e);return(i=Qd(Xd,[t,...r]).value)==null?void 0:i.template}function lw(t,e,r){const n=Jd(e);return tf(Xd,[t,...n],r)}function Qd(t,e,r=0){const{currentTemplateAndNested:n,reason:i}=ef(t,e,r);return n?r===e.length-1?{value:n,reason:"reached end of keys array"}:n.nested?Qd(n.nested,e,r+1):{value:void 0,reason:`map at key index ${r} did not have nested maps`}:{value:n,reason:i}}function ef(t,e,r){const n=e[r];if(n==null)return{currentKey:void 0,currentTemplateAndNested:void 0,reason:`key at index ${r} not found`};if(!t.has(n))return{currentKey:n,currentTemplateAndNested:void 0,reason:`key at index ${r} was not in the map`};const i=t.get(n);return i==null?{currentKey:n,currentTemplateAndNested:void 0,reason:`value at key at index ${r} was undefined`}:{currentKey:n,currentTemplateAndNested:i,reason:"key and value exists"}}function tf(t,e,r,n=0){const{currentTemplateAndNested:i,currentKey:s,reason:a}=ef(t,e,n);if(!s)return{result:!1,reason:a};const o=i??{nested:void 0,template:void 0};if(i||t.set(s,o),n===e.length-1)return o.template=r,{result:!0,reason:"set value at end of keys array"};const l=o.nested??new WeakMap;return o.nested||(o.nested=l),tf(l,e,r,n+1)}const cw=new WeakMap;function rf(t,e,r){const n=ow(t,e),i=n??r();if(!n){const o=lw(t,e,i);if(o.result)cw.set(t,i);else throw new Error(`Failed to set template transform: ${o.reason}`)}const s=i.valuesTransform(e),a=aw(e,s.valueInsertions,s.valueIndexDeletions);return{strings:i.templateStrings,values:a}}function nf(t,e,r,n){const i=[],s=[],a=[],o=[];return t.forEach((c,d)=>{const u=i.length-1,f=i[u],h=d-1,m=e[h];n&&n(c);let g,y=[];if(typeof f=="string"&&(g=r(f,c,m),g)){i[u]=f+g.replacement,a.push(h);const E=g.getExtraValues;y=E?E(m):[],y.length&&E?(i[u]+=" ",y.forEach((A,O)=>{O&&i.push(" ")}),o.push(A=>{const O=A[h],K=E(O);return{index:h,values:K}}),i.push(c)):i[u]+=c}g||i.push(c);const b=t.raw[d];g?(s[u]=s[u]+g.replacement+b,y.length&&y.forEach(()=>{s.push("")})):s.push(b)}),{templateStrings:Object.assign([],i,{raw:s}),valuesTransform(c){const d=o.map(u=>u(c)).flat();return{valueIndexDeletions:a,valueInsertions:d}}}}function uw(...[t,e,r]){if(ka(r))return{replacement:r.tagName,getExtraValues:void 0}}function dw(t,e){return nf(t,e,uw)}function $(t,...e){const r=rf(t,e,()=>dw(t,e));return In(r.strings,...r.values)}const fw={ignoreUnsetInputs:!0,allowPolymorphicState:!1};function sf(t){const e=t.getRootNode();if(!(e instanceof ShadowRoot))return!1;const r=e.host;return r instanceof Yd?!0:sf(r)}function af(t,e){const r=t.instanceState;Ie(e).forEach(n=>{if(r&&n in r)throw new Error(`Cannot set input '${n}' on '${t.tagName}'. '${t.tagName}' already has a state property with the same name.`);"instanceInputs"in t?t.instanceInputs[n]=e[n]:t[n]=e[n]}),"instanceInputs"in t&&Ie(t.instanceInputs).forEach(n=>{n in e||(t.instanceInputs[n]=void 0)}),hw(t)}function hw(t){t._haveInputsBeenSet||(t._haveInputsBeenSet=!0)}function ll(t,e){const r=[t,"-"].join("");Object.keys(e).forEach(n=>{if(!n.startsWith(r))throw new Error(`Invalid CSS property name '${n}' in '${t}': CSS property names must begin with the element's tag name.`)})}class mw extends CustomEvent{get type(){return this._type}constructor(e,r){super(typeof e=="string"?e:e.type,{detail:r,bubbles:!0,composed:!0}),Object.defineProperty(this,"_type",{enumerable:!0,configurable:!0,writable:!0,value:""})}}function Ma(){return t=>{var e;return e=class extends mw{constructor(r){super(t,r),Object.defineProperty(this,"_type",{enumerable:!0,configurable:!0,writable:!0,value:t})}},Object.defineProperty(e,"type",{enumerable:!0,configurable:!0,writable:!0,value:t}),e}}function ne(){return Ma()}function pw(t,e){return e?Object.keys(e).filter(r=>{if(typeof r!="string")throw new Error(`Expected event key of type string but got type "${typeof r}" for key ${String(r)}`);if(r==="")throw new Error("Got empty string for events key.");return!0}).reduce((r,n)=>{const i=Ma()([t,n].join("-"));return r[n]=i,r},{}):{}}function gw(t){return t?st(t,e=>e):{}}const xa=Symbol("element-vir-state-setup");function ww(t){return Dr(t)?xa in t:!1}function of(t,e){e in t||Yg()(t,e)}function yw(t,e,r){if(typeof t!="string"&&typeof t!="number"&&typeof t!="symbol")throw new Error(`Property name must be a string, got type '${typeof t}' from: '${String(t)}' for '${r.toLowerCase()}'`);if(!(t in e))throw new Error(`Property '${String(t)}' does not exist on '${r.toLowerCase()}'.`)}function cl(t,e){const r=t;function n(a){e?yw(a,t,t.tagName):of(t,a)}function i(a,o){return n(o),r[o]}return new Proxy({},{get:i,set(a,o,l){const c=ww(l)?l[xa]():l;n(o);const d=r[o];function u(m){a[o]=m,r[o]=m}const f=t.observablePropertyListenerMap[o];if(d!==c&&Wi(d)&&f&&d.removeListener(f),Wi(c))if(f)c.listen(!1,f);else{let m=function(){t.requestUpdate()};var h=m;t.observablePropertyListenerMap[o]=m,c.listen(!1,m)}else Wi(d)&&(t.observablePropertyListenerMap[o]=void 0);return u(c),!0},ownKeys(a){return Reflect.ownKeys(a)},getOwnPropertyDescriptor(a,o){if(o in a)return{get value(){return i(a,o)},configurable:!0,enumerable:!0}},has(a,o){return Reflect.has(a,o)}})}function bw({hostClassNames:t,cssVars:e}){return{hostClasses:st(t,(r,n)=>({name:de(n),selector:de(`:host(.${n})`)})),cssVars:e}}function vw({host:t,hostClassesInit:e,hostClassNames:r,state:n,inputs:i}){e&&Ie(e).forEach(s=>{const a=e[s],o=r[s];typeof a=="function"&&(a({state:n,inputs:i})?t.classList.add(o):t.classList.remove(o))})}function $w({element:t,eventsMap:e,cssVars:r,slotNamesMap:n}){function i(a){Ie(a).forEach(o=>{const l=a[o];t.instanceState[o]=l})}return{cssVars:r,slotNames:n,dispatch:a=>t.dispatchEvent(a),events:e,host:t,inputs:t.instanceInputs,state:t.instanceState,updateState:i}}function Ew(t){return t?t.reduce((r,n)=>(r[n]=n,r),{}):{}}var Tw=globalThis&&globalThis.__setFunctionName||function(t,e,r){return typeof e=="symbol"&&(e=e.description?"[".concat(e.description,"]"):""),Object.defineProperty(t,"name",{configurable:!0,value:r?"".concat(r," ",e):e})};function vi(t){var e;const r=t;if(!k(r,"object"))throw new Error("Cannot define element with non-object init: ${init}");if(!k(r.tagName,"string"))throw new Error("Missing valid tagName (expected a string).");if(!r.renderCallback||typeof r.renderCallback=="string")throw new Error(`Failed to define element '${r.tagName}': renderCallback is not a function`);const n={...fw,...r.options},i=pw(r.tagName,r.events),s=gw(r.hostClasses);r.hostClasses&&ll(r.tagName,r.hostClasses),r.cssVars&&ll(r.tagName,r.cssVars);const a=r.cssVars?ft(r.cssVars):{},o=Ew(r.slotNames),l=typeof r.styles=="function"?r.styles(bw({hostClassNames:s,cssVars:a})):r.styles||$``,c=r.renderCallback;function d(...[f]){return{_elementVirIsMinimalDefinitionWithInputs:!0,definition:u,inputs:f}}const u=(e=class extends Yd{createRenderParams(){return $w({element:this,eventsMap:i,cssVars:a,slotNamesMap:o})}get instanceType(){throw new Error(`"instanceType" was called on ${r.tagName} as a value but it is only for types.`)}static get inputsType(){throw new Error(`"inputsType" was called on ${r.tagName} as a value but it is only for types.`)}static get stateType(){throw new Error(`"stateType" was called on ${r.tagName} as a value but it is only for types.`)}render(){this._internalRenderCount++;try{sf(this)&&!this._haveInputsBeenSet&&!n.ignoreUnsetInputs&&console.warn(this,`${r.tagName} got rendered before its input object was set. This was most likely caused by forgetting to use '.assign()' on its opening tag. If no inputs are intended, use '${vi.name}' to define ${r.tagName}.`),this._hasRendered=!0;const f=this.createRenderParams();if(!this._initCalled&&r.initCallback&&(this._initCalled=!0,r.initCallback(f)instanceof Promise))throw new Error("initCallback cannot be asynchronous");const h=c(f);if(h instanceof Promise)throw new Error("renderCallback cannot be asynchronous");return vw({host:f.host,hostClassesInit:r.hostClasses,hostClassNames:s,state:f.state,inputs:f.inputs}),this._lastRenderedProps={inputs:{...f.inputs},state:{...f.state}},h}catch(f){const h=rm(f,`Failed to render ${r.tagName}`);return console.error(h),this._lastRenderError=h,ur(h)}}connectedCallback(){if(super.connectedCallback(),this._hasRendered&&!this._initCalled&&r.initCallback){this._initCalled=!0;const f=this.createRenderParams();if(r.initCallback(f)instanceof Promise)throw new Error(`initCallback in '${r.tagName}' cannot be asynchronous`)}}destroy(){Object.values(this.instanceState).forEach(f=>{vu(f,"destroy")&&k(f.destroy,"function")&&f.destroy()})}disconnectedCallback(){if(super.disconnectedCallback(),r.cleanupCallback){const f=this.createRenderParams();if(r.cleanupCallback(f)instanceof Promise)throw new Error(`cleanupCallback in '${r.tagName}' cannot be asynchronous`)}this.destroy(),this._initCalled=!1}assignInputs(f){af(this,f)}constructor(){super(),Object.defineProperty(this,"_lastRenderError",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"_internalRenderCount",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"_initCalled",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"_hasRendered",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"_lastRenderedProps",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"_haveInputsBeenSet",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"definition",{enumerable:!0,configurable:!0,writable:!0,value:{}}),Object.defineProperty(this,"observablePropertyListenerMap",{enumerable:!0,configurable:!0,writable:!0,value:{}}),Object.defineProperty(this,"instanceInputs",{enumerable:!0,configurable:!0,writable:!0,value:cl(this,!1)}),Object.defineProperty(this,"instanceState",{enumerable:!0,configurable:!0,writable:!0,value:cl(this,!n.allowPolymorphicState)});const f=r.stateInitStatic||{};Ie(f).forEach(h=>{of(this,h),this.instanceState[h]=f[h]}),this.definition=u}},Tw(e,"anonymousClass"),Object.defineProperty(e,"elementOptions",{enumerable:!0,configurable:!0,writable:!0,value:n}),Object.defineProperty(e,"tagName",{enumerable:!0,configurable:!0,writable:!0,value:r.tagName}),Object.defineProperty(e,"styles",{enumerable:!0,configurable:!0,writable:!0,value:l}),Object.defineProperty(e,"assign",{enumerable:!0,configurable:!0,writable:!0,value:d}),Object.defineProperty(e,"isStrictInstance",{enumerable:!0,configurable:!0,writable:!0,value:()=>!1}),Object.defineProperty(e,"events",{enumerable:!0,configurable:!0,writable:!0,value:i}),Object.defineProperty(e,"renderCallback",{enumerable:!0,configurable:!0,writable:!0,value:c}),Object.defineProperty(e,"hostClasses",{enumerable:!0,configurable:!0,writable:!0,value:s}),Object.defineProperty(e,"cssVars",{enumerable:!0,configurable:!0,writable:!0,value:a}),Object.defineProperty(e,"init",{enumerable:!0,configurable:!0,writable:!0,value:r}),Object.defineProperty(e,"slotNames",{enumerable:!0,configurable:!0,writable:!0,value:o}),Object.defineProperty(e,"stateInitStatic",{enumerable:!0,configurable:!0,writable:!0,value:r.stateInitStatic}),e);return Object.defineProperties(u,{name:{value:Qh(r.tagName,{capitalizeFirstLetter:!0}),writable:!0},isStrictInstance:{value:f=>f instanceof u,writable:!1}}),window.customElements.get(r.tagName)?console.warn(`Tried to define custom element '${r.tagName}' but it is already defined.`):window.customElements.define(r.tagName,u),u}function ye(){return t=>{const e=t;if(!k(e,"object"))throw new Error("Cannot define element with non-object init: ${init}");return vi({...e,options:{ignoreUnsetInputs:!1,...e.options}})}}function $i(t,e){return Br(t,e),t.element}function Sw(t){try{return t.options.host.tagName.toLowerCase()}catch{return}}function Br(t,e){const r=Sw(t),n=r?`: in ${r}`:"";if(t.type!==bi.ELEMENT)throw new Error(`${e} directive can only be attached directly to an element${n}.`);if(!t.element)throw new Error(`${e} directive found no element${n}.`)}function kw(t){const e=dt(class extends Ze{constructor(r){super(r),Object.defineProperty(this,"element",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.element=$i(r,t)}render(r){return this.element.setAttribute(t,r),pe}});return{attributeSelector(r){return`[${t}="${r}"]`},attributeDirective(r){return e(r)},attributeName:t}}function _(t,e){return Mw(t,e)}const Mw=dt(class extends Ze{constructor(t){super(t),Object.defineProperty(this,"element",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"lastListenerMetaData",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.element=$i(t,"listen")}resetListener(t){this.lastListenerMetaData&&this.element.removeEventListener(this.lastListenerMetaData.eventType,this.lastListenerMetaData.listener),this.element.addEventListener(t.eventType,t.listener),this.lastListenerMetaData=t}createListenerMetaData(t,e){return{eventType:t,callback:e,listener:r=>{var n;return(n=this.lastListenerMetaData)==null?void 0:n.callback(r)}}}render(t,e){const r=typeof t=="string"?t:t.type;if(typeof r!="string")throw new Error(`Cannot listen to an event with a name that is not a string. Given event name: "${r}"`);return this.lastListenerMetaData&&this.lastListenerMetaData.eventType===r?this.lastListenerMetaData.callback=e:this.resetListener(this.createListenerMetaData(r,e)),pe}}),ul="onDomCreated",dl=dt(class extends Ze{constructor(t){super(t),Object.defineProperty(this,"element",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Br(t,ul)}update(t,[e]){Br(t,ul);const r=t.element;return r!==this.element&&(window.requestAnimationFrame(()=>e(r)),this.element=r),this.render(e)}render(t){}}),Ji="onResize",lf=dt(class extends Ze{constructor(t){super(t),Object.defineProperty(this,"element",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"resizeObserver",{enumerable:!0,configurable:!0,writable:!0,value:new ResizeObserver(e=>this.fireCallback(e))}),Object.defineProperty(this,"callback",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Br(t,Ji)}fireCallback(t){var r;const e=t[0];if(!e)throw console.error(t),new Error(`${Ji} observation triggered but the first entry was empty.`);(r=this.callback)==null||r.call(this,{target:e.target,contentRect:e.contentRect},this.element)}update(t,[e]){Br(t,Ji),this.callback=e;const r=t.element,n=this.element;return r!==n&&(this.element=r,n&&this.resizeObserver.unobserve(n),this.resizeObserver.observe(r)),this.render(e)}render(t){}});function Me(t,e,r){return Jg(t,()=>e,()=>r)}const{attributeDirective:kr,attributeSelector:X2,attributeName:Q2}=kw("data-test-id");Ie({assign:"",assignedInputs:"",cssVars:"",elementOptions:"",events:"",hostClasses:"",init:"",inputsType:"",isStrictInstance:"",renderCallback:"",slotNames:"",stateInitStatic:"",stateType:"",styles:"",tagName:"",updateStateType:""});function xw(t){return{[xa]:t}}function cf(t){const{assertInputs:e,transformInputs:r}={assertInputs:(t==null?void 0:t.assertInputs)??(()=>{}),transformInputs:(t==null?void 0:t.transformInputs)??(n=>n)};return{defineElement:()=>n=>(e(n),ye()(r(n))),defineElementNoInputs:n=>(e(n),vi(r(n)))}}function Aw(t,e){return e?fl(t,e):fl(void 0,t)}const fl=dt(class extends Ze{constructor(t){super(t),Object.defineProperty(this,"element",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.element=$i(t,"assign")}render(t,e){return af(this.element,e),pe}}),Cw={};function Lw(t,e){return e.map((r,n)=>{const i=t[n],s=t[n+1];if(i&&s){const{shouldHaveTagNameHere:a}=uf(i,s);if(a&&k(r,"string"))return{tagName:r,tagInterpolationKey:gm(Cw,r,()=>({tagName:r}))}}return r})}function uf(t,e){const r=t.trim().endsWith("<")&&!!e.match(/^[\s\n>]/),n=(t==null?void 0:t.trim().endsWith("</"))&&e.trim().startsWith(">");return{isOpeningTag:r,shouldHaveTagNameHere:r||n}}function Pw(...[t,e,r]){var l,c,d;const n=Dn(r)?r.definition:r,{isOpeningTag:i,shouldHaveTagNameHere:s}=uf(t,e),a=ka(n);if(a&&s&&n.tagInterpolationKey)return{replacement:n.tagName,getExtraValues:void 0};if(s&&!a)throw console.error({lastNewString:t,currentTemplateString:e,currentValue:n}),new Error(`Got interpolated tag name but found no tag name on the given value: '${(n==null?void 0:n.tagName)||((c=(l=n==null?void 0:n.prototype)==null?void 0:l.constructor)==null?void 0:c.name)||((d=n==null?void 0:n.constructor)==null?void 0:d.name)}'`);if(!s||!a)return;if(i&&n.elementOptions&&!n.elementOptions.ignoreUnsetInputs&&!Dn(r))throw new Error(`Missing inputs for '${n.tagName}'`);return{replacement:n.tagName,getExtraValues(u){const f=Dn(u)?u.inputs:void 0;return[i&&f?Aw(f):void 0].filter(qr)}}}function Ow(t){}function Nw(t){return nf(t.strings,t.values,Pw,Ow)}function p(t,...e){const r=Lw(t,e),n=Fg(t,...r),i=rf(t,r,()=>Nw(n));return{...n,strings:i.strings,values:i.values}}function Iw(t){let e;try{e=Reflect.ownKeys(t)}catch{}return e??[...Object.keys(t),...Object.getOwnPropertySymbols(t)]}function Xi(t){return Iw(t).map(e=>[e,t[e]])}var hl;(function(t){t.Upper="upper",t.Lower="lower"})(hl||(hl={}));var ml;(function(t){t.FirstThenWait="first-then-wait",t.AfterWait="after-wait"})(ml||(ml={}));function Dw(){return globalThis.crypto?globalThis.crypto:require("crypto").webcrypto}Dw();const df={a:window.HTMLAnchorElement,abbr:window.HTMLElement,address:window.HTMLElement,area:window.HTMLAreaElement,article:window.HTMLElement,aside:window.HTMLElement,audio:window.HTMLAudioElement,b:window.HTMLElement,base:window.HTMLBaseElement,bdi:window.HTMLElement,bdo:window.HTMLElement,blockquote:window.HTMLQuoteElement,body:window.HTMLBodyElement,br:window.HTMLBRElement,button:window.HTMLButtonElement,canvas:window.HTMLCanvasElement,caption:window.HTMLTableCaptionElement,cite:window.HTMLElement,code:window.HTMLElement,col:window.HTMLTableColElement,colgroup:window.HTMLTableColElement,data:window.HTMLDataElement,datalist:window.HTMLDataListElement,dd:window.HTMLElement,del:window.HTMLModElement,details:window.HTMLDetailsElement,dfn:window.HTMLElement,dialog:window.HTMLDialogElement,div:window.HTMLDivElement,dl:window.HTMLDListElement,dt:window.HTMLElement,em:window.HTMLElement,embed:window.HTMLEmbedElement,fieldset:window.HTMLFieldSetElement,figcaption:window.HTMLElement,figure:window.HTMLElement,footer:window.HTMLElement,form:window.HTMLFormElement,h1:window.HTMLHeadingElement,h2:window.HTMLHeadingElement,h3:window.HTMLHeadingElement,h4:window.HTMLHeadingElement,h5:window.HTMLHeadingElement,h6:window.HTMLHeadingElement,head:window.HTMLHeadElement,header:window.HTMLElement,hgroup:window.HTMLElement,hr:window.HTMLHRElement,html:window.HTMLHtmlElement,i:window.HTMLElement,iframe:window.HTMLIFrameElement,img:window.HTMLImageElement,input:window.HTMLInputElement,ins:window.HTMLModElement,kbd:window.HTMLElement,label:window.HTMLLabelElement,legend:window.HTMLLegendElement,li:window.HTMLLIElement,link:window.HTMLLinkElement,main:window.HTMLElement,map:window.HTMLMapElement,mark:window.HTMLElement,menu:window.HTMLMenuElement,meta:window.HTMLMetaElement,meter:window.HTMLMeterElement,nav:window.HTMLElement,noscript:window.HTMLElement,object:window.HTMLObjectElement,ol:window.HTMLOListElement,optgroup:window.HTMLOptGroupElement,option:window.HTMLOptionElement,output:window.HTMLOutputElement,p:window.HTMLParagraphElement,picture:window.HTMLPictureElement,pre:window.HTMLPreElement,progress:window.HTMLProgressElement,q:window.HTMLQuoteElement,rp:window.HTMLElement,rt:window.HTMLElement,ruby:window.HTMLElement,s:window.HTMLElement,samp:window.HTMLElement,script:window.HTMLScriptElement,search:window.HTMLElement,section:window.HTMLElement,select:window.HTMLSelectElement,slot:window.HTMLSlotElement,small:window.HTMLElement,source:window.HTMLSourceElement,span:window.HTMLSpanElement,strong:window.HTMLElement,style:window.HTMLStyleElement,sub:window.HTMLElement,summary:window.HTMLElement,sup:window.HTMLElement,table:window.HTMLTableElement,tbody:window.HTMLTableSectionElement,td:window.HTMLTableCellElement,template:window.HTMLTemplateElement,textarea:window.HTMLTextAreaElement,tfoot:window.HTMLTableSectionElement,th:window.HTMLTableCellElement,thead:window.HTMLTableSectionElement,time:window.HTMLTimeElement,title:window.HTMLTitleElement,tr:window.HTMLTableRowElement,track:window.HTMLTrackElement,u:window.HTMLElement,ul:window.HTMLUListElement,var:window.HTMLElement,video:window.HTMLVideoElement,wbr:window.HTMLElement},_w=Object.keys(df),ff={annotation:window.MathMLElement,"annotation-xml":window.MathMLElement,maction:window.MathMLElement,math:window.MathMLElement,merror:window.MathMLElement,mfrac:window.MathMLElement,mi:window.MathMLElement,mmultiscripts:window.MathMLElement,mn:window.MathMLElement,mo:window.MathMLElement,mover:window.MathMLElement,mpadded:window.MathMLElement,mphantom:window.MathMLElement,mprescripts:window.MathMLElement,mroot:window.MathMLElement,mrow:window.MathMLElement,ms:window.MathMLElement,mspace:window.MathMLElement,msqrt:window.MathMLElement,mstyle:window.MathMLElement,msub:window.MathMLElement,msubsup:window.MathMLElement,msup:window.MathMLElement,mtable:window.MathMLElement,mtd:window.MathMLElement,mtext:window.MathMLElement,mtr:window.MathMLElement,munder:window.MathMLElement,munderover:window.MathMLElement,semantics:window.MathMLElement},Rw=Object.keys(ff),hf={a:window.SVGAElement,animate:window.SVGAnimateElement,animateMotion:window.SVGAnimateMotionElement,animateTransform:window.SVGAnimateTransformElement,circle:window.SVGCircleElement,clipPath:window.SVGClipPathElement,defs:window.SVGDefsElement,desc:window.SVGDescElement,ellipse:window.SVGEllipseElement,feBlend:window.SVGFEBlendElement,feColorMatrix:window.SVGFEColorMatrixElement,feComponentTransfer:window.SVGFEComponentTransferElement,feComposite:window.SVGFECompositeElement,feConvolveMatrix:window.SVGFEConvolveMatrixElement,feDiffuseLighting:window.SVGFEDiffuseLightingElement,feDisplacementMap:window.SVGFEDisplacementMapElement,feDistantLight:window.SVGFEDistantLightElement,feDropShadow:window.SVGFEDropShadowElement,feFlood:window.SVGFEFloodElement,feFuncA:window.SVGFEFuncAElement,feFuncB:window.SVGFEFuncBElement,feFuncG:window.SVGFEFuncGElement,feFuncR:window.SVGFEFuncRElement,feGaussianBlur:window.SVGFEGaussianBlurElement,feImage:window.SVGFEImageElement,feMerge:window.SVGFEMergeElement,feMergeNode:window.SVGFEMergeNodeElement,feMorphology:window.SVGFEMorphologyElement,feOffset:window.SVGFEOffsetElement,fePointLight:window.SVGFEPointLightElement,feSpecularLighting:window.SVGFESpecularLightingElement,feSpotLight:window.SVGFESpotLightElement,feTile:window.SVGFETileElement,feTurbulence:window.SVGFETurbulenceElement,filter:window.SVGFilterElement,foreignObject:window.SVGForeignObjectElement,g:window.SVGGElement,image:window.SVGImageElement,line:window.SVGLineElement,linearGradient:window.SVGLinearGradientElement,marker:window.SVGMarkerElement,mask:window.SVGMaskElement,metadata:window.SVGMetadataElement,mpath:window.SVGMPathElement,path:window.SVGPathElement,pattern:window.SVGPatternElement,polygon:window.SVGPolygonElement,polyline:window.SVGPolylineElement,radialGradient:window.SVGRadialGradientElement,rect:window.SVGRectElement,script:window.SVGScriptElement,set:window.SVGSetElement,stop:window.SVGStopElement,style:window.SVGStyleElement,svg:window.SVGSVGElement,switch:window.SVGSwitchElement,symbol:window.SVGSymbolElement,text:window.SVGTextElement,textPath:window.SVGTextPathElement,title:window.SVGTitleElement,tspan:window.SVGTSpanElement,use:window.SVGUseElement,view:window.SVGViewElement},Vw=Object.keys(hf),Hw=[Xi(df).map(([t,e])=>[e,t]),Xi(ff).map(([t,e])=>[e,t]),Xi(hf).map(([t,e])=>[e,t])].flat();new Map(Hw);Array.from(new Set([..._w,...Vw,...Rw].sort()));function Mr(t,e,r={}){const n=r.useOriginalTarget?t.target:t.currentTarget;if(!(n instanceof e)){const i=e.name,s=n==null?void 0:n.constructor.name,a=r.useOriginalTarget?`Current target from event '${t.type}' was not of type '${i}'. Got '${s}'.`:`Target from event '${t.type}' was not of type '${i}'. Got '${s}'.`;throw new Error(a)}return n}const Bw={[Y.ElementExample]:()=>[],[Y.Page]:t=>[!t.title&&new Error("Cannot define an element-book page with an empty title."),...xm(t.controls,t.title)].filter(qr),[Y.Root]:()=>[]},Kn="_isBookTreeNode",mf=new Map;function Fw(t){return mf.get(t)}function Uw(t,e){pm(mf,t,()=>e)}function qt(t,e){return!!(pf(t)&&t.entry.entryType===e)}function pf(t){return!!(yu(t,[Kn,"entry"])&&t[Kn])}function jw(){return{[Kn]:!0,entry:{entryType:Y.Root,title:"",parent:void 0,errors:[],descriptionParagraphs:[]},urlBreadcrumb:"",fullUrlBreadcrumbs:[],children:{},manuallyAdded:!0}}function zw({entries:t,debug:e}){const r=Fw(t);if(r)return r;const n=jw();t.forEach(a=>Aa({tree:n,newEntry:a,debug:e,manuallyAdded:!0}));const i=gf(n),s={tree:n,flattenedNodes:i};return Uw(t,s),e&&console.info("element-book tree:",n),s}function Ww(t,e,r){if(!e.parent)return t;const n=Cs(e,t);if(n)return n;r&&console.info(`parent of ${e.title} not found in tree; adding it now.`),Aa({tree:t,newEntry:e.parent,debug:r,manuallyAdded:!1});const i=Cs(e,t);if(!i)throw new Error(`Failed to find node despite having just added it: ${ra(e,!1)}`);return i}function Aa({tree:t,newEntry:e,debug:r,manuallyAdded:n}){const i=Bw[e.entryType](e);e.errors.push(...i);const s=Ww(t,e,r),a=Bn(e.title),o=s.children[a];if(o){if(n){if(o.manuallyAdded){o.entry.errors.push(new Error(`Cannot create duplicate '${a}'${s.urlBreadcrumb?` in parent '${s.urlBreadcrumb}'.`:""}`));return}o.manuallyAdded=!0}return}const l={[Kn]:!0,children:{},urlBreadcrumb:a,fullUrlBreadcrumbs:[...s.fullUrlBreadcrumbs,a],entry:e,manuallyAdded:n};s.children[a]=l,km(e,Y.Page)&&Object.values(e.elementExamples??{}).length&&Object.values(e.elementExamples??{}).forEach(c=>Aa({tree:t,newEntry:c,debug:r,manuallyAdded:n}))}function Cs(t,e){const r=pf(t)?t.fullUrlBreadcrumbs.slice(0,-1):ra(t,!1);return r.length?r.reduce((i,s)=>{if(i)return i.children[s]},e):void 0}function gf(t){const r=!!t.entry.errors.length?[]:Object.values(t.children).map(i=>gf(i));return[t,...r].flat()}function Ca(t,e){return La(t,["",...e],void 0)}function La(t,e,r){const n=e.slice(1),i=n[0];!i&&r&&(t.controls=r);const s=t.children[i||""],a=s&&La(s,n,r);return{...t.controls,...a}}function Gw(t,e,r){const n={...t};return La(n,["",...e],r),n}function wf(t,e){const r=(e==null?void 0:e.controls)||(qt(t,Y.Page)?st(t.entry.controls,(i,s)=>s.initValue):{});return{children:st(t.children,(i,s)=>{var a;return wf(s,(a=e==null?void 0:e.children)==null?void 0:a[s.urlBreadcrumb])}),controls:r}}function qw({searchQuery:t,searchIn:e}){const r=e.length,n=t.length;if(n>r)return!1;if(n===r)return t===e;const i=e.toLowerCase(),s=t.toLowerCase();e:for(let a=0,o=0;a<n;a++){const l=s.charCodeAt(a);for(;o<r;)if(i.charCodeAt(o++)===l)continue e;return!1}return!0}const Kw=$m(32);function _n(t){return t.join(Kw)}function yf(t){if(!t.length)return[];const e=_n(t),r=yf(t.slice(0,-1));return[e,...r]}const Zw=["error","errors"];function Yw(t){return Zw.includes(t)}function Jw({flattenedNodes:t,searchQuery:e}){const r={};function n(i){Object.values(i.children).map(a=>(n(a),_n(a.fullUrlBreadcrumbs))).forEach(a=>r[a]=!0)}return t.forEach(i=>{const s=i.entry.errors.length&&Yw(e),a=_n(i.fullUrlBreadcrumbs);if(qw({searchIn:[i.entry.title,...i.entry.descriptionParagraphs].join(" ").toLowerCase(),searchQuery:e.toLowerCase()})||s||r[a]){const l=yf(i.fullUrlBreadcrumbs);n(i),l.forEach(c=>r[c]=!0)}else r[a]=!1}),t.filter(i=>{const s=_n(i.fullUrlBreadcrumbs),a=r[s];if(!k(a,"boolean"))throw new Error(`Failed to find '${i.fullUrlBreadcrumbs.join(" > ")}' in includeInSearchResults.`);return a})}class Pa extends Error{constructor(){super(...arguments),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"SpaRouterError"})}}class pl extends Pa{constructor(){super(...arguments),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"GlobalUrlEventsConsolidationError"})}}class Xw extends Pa{constructor(){super(...arguments),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"SanitizationDepthMaxed"})}}var gl;(function(t){t.Upper="upper",t.Lower="lower"})(gl||(gl={}));var wl;(function(t){t.FirstThenWait="first-then-wait",t.AfterWait="after-wait"})(wl||(wl={}));function Qw(){return globalThis.crypto?globalThis.crypto:require("crypto").webcrypto}Qw();function bf({value:t,prefix:e}){return String(t).startsWith(e)?String(t):`${e}${String(t)}`}function Qi({value:t,prefix:e}){return t.startsWith(e)?t.substring(e.length):t}function ey(t,e,r){if(e in t)return t[e];{const n=r();return $u(n)?new Promise(async(i,s)=>{try{const a=await n;t[e]=a,i(a)}catch(a){s(a)}}):(t[e]=n,n)}}const ty=[(t,e)=>e in t,(t,e)=>e in t.constructor.prototype];function ry(t,e){return t?ty.some(r=>{try{return r(t,e)}catch{return!1}}):!1}function Ls(t){let e;try{e=Reflect.ownKeys(t)}catch{}return e??[...Object.keys(t),...Object.getOwnPropertySymbols(t)]}function ny(t,e,r){return t.reduce((n,i,s,a)=>{const o=e(i,s,a);return r(o,i,s,a)&&n.push(o),n},[])}function iy(t){return!!t}var yl;(function(t){t.Upper="upper",t.Lower="lower"})(yl||(yl={}));function sy(t,e){return t.split(e)}var bl;(function(t){t.FirstThenWait="first-then-wait",t.AfterWait="after-wait"})(bl||(bl={}));function ay(t,e){return Ls(t).filter(n=>{const i=t[n];return e(n,i,t)}).reduce((n,i)=>(n[i]=t[i],n),{})}function Ps(t,e){let r=!1;const n=Ls(t).reduce((i,s)=>{const a=e(s,t[s],t);return a instanceof Promise&&(r=!0),{...i,[s]:a}},{});return r?new Promise(async(i,s)=>{try{await Promise.all(Ls(n).map(async a=>{const o=await n[a];n[a]=o})),i(n)}catch(a){s(a)}}):n}function oy(t){try{return JSON.parse(JSON.stringify(t))}catch(e){throw console.error("Failed to JSON copy for",t),e}}function ly(){return globalThis.crypto?globalThis.crypto:require("crypto").webcrypto}ly();function We({value:t,prefix:e}){return String(t).startsWith(e)?String(t):`${e}${String(t)}`}function Oa({value:t,prefix:e}){return t.startsWith(e)?t.substring(e.length):t}const es="://";function Na(...t){const e=t.join("/"),[r,n=""]=e.includes(es)?e.split(es):["",e];let i=!1;const s=n.replace(/\/{2,}/g,"/").split("/").reduce((a,o,l,c)=>{if(i)return a;const d=c[l+1];let u=o;const f=d==null?void 0:d.startsWith("?"),h=!o.includes("?")&&f,m=d==="?";if(f||h){i=!0;let g=!1;const y=c.slice(l+2).reduce((b,E)=>(E.includes("#")&&(g=!0),g?b.concat(E):[b,E].join("&")),"");u=[o,d,m?Oa({value:y,prefix:"&"}):y].join("")}return a.concat(u)},[]);return[r,r?es:"",s.join("/")].join("")}var Fr;(function(t){t.Encode="encode",t.Decode="decode",t.None="none"})(Fr||(Fr={}));var Ur;(function(t){t.Clear="clear",t.Replace="replace",t.Append="append"})(Ur||(Ur={}));function pn(t,e){return t.map(r=>{if(r!=null)return Kt(String(r),e)}).filter(r=>r!=null)}function Kt(t,e){return(e==null?void 0:e.encoding)===Fr.Decode?decodeURIComponent(t):(e==null?void 0:e.encoding)===Fr.Encode?encodeURIComponent(t):t}const cy=Nt(_d({keys:"",values:[""],required:!0}));function uy(t,e,r){const n=(r==null?void 0:r.searchParamStrategy)===Ur.Clear?{}:Ps(t,(a,o)=>k(o,"string")?[o]:o),i=Ps(e,(a,o)=>{if((r==null?void 0:r.searchParamStrategy)===Ur.Append){const l=n[a],c=k(l,"array")?l:[l];if(o){const d=k(o,"array")?o:[o];return pn([...c,...d],r)}else return pn(c,r)}else return k(o,"array")?pn(o,r):o?pn([o],r):void 0});return ay({...n,...i},(a,o)=>!!o)}function vf(t,e){return k(t,"string")&&!t.includes("?")?{}:(k(t,"string")?t:t instanceof URL?t.search:t.toString()).replace(/^.*\?|\#.*$/,"").split("&").map(s=>{const[a,...o]=sy(s,"=");return[a,o.length?o.join("="):void 0]}).reduce((s,[a,o])=>{const l=$f({options:e,key:a,value:o}),c=ey(s,l.key,()=>[]);return o!=null&&c.push(l.value),s},{})}function dy(t){if(t!=null)return k(t,"array")?[...t]:t===""?[]:[t]}function fy(t,e){const r=ny(Object.entries(t),([n,i])=>{const s=dy(i);return s!=null&&s.length?s.map(a=>{const o=$f({options:e,key:n,value:a});return[o.key,o.value].join("=")}):[n]},(n,[,i])=>i!=null).flat();return r.length?We({value:r.join("&"),prefix:"?"}):""}function $f({options:t,key:e,value:r}){return{key:Kt(e,t),value:Kt(String(r),t)}}function Ef({hash:t,hostname:e,password:r,pathname:n,port:i,protocol:s,search:a,username:o}){return[s?s+"://":"",o?o+":":"",r?r+"@":"",Ei({hostname:e,port:i}),Ia({hash:t,pathname:n,search:a})].join("")}function Tf({pathname:t}){const e=Oa({value:t,prefix:"/"});return e?e.split("/"):[]}function Ia({hash:t,pathname:e,search:r}){return[We({value:e,prefix:"/"}),r?We({value:r,prefix:"?"}):"",t?We({value:t,prefix:"#"}):""].join("")}function Ei({hostname:t,port:e}){return[t,e?":"+e:""].join("")}function Sf({hostname:t,port:e,protocol:r}){return[r,Ei({hostname:t,port:e})].filter(iy).join("://")}function Zn(t,e){const r=k(t,"string")?t:t.toString(),n=r.replace(/^[^#]*(?:#|$)/,""),i=n?We({value:Kt(n,e),prefix:"#"}):"",s=r.replace(/#.*$/,""),a=s.replace(/^[^\?]*(?:\?|$)/,""),o=a?We({value:Kt(a,e),prefix:"?"}):"",l=s.replace(/\?.*$/,""),c=l.includes("://")?l.replace(/:\/\/.*$/,""):"",d=l.replace(/^.*:\/\//,"").replace(/\/\//g,"/"),u=d.replace(/@.*/,""),f=d.replace(/^[^@]*@/,""),h=u!==f,[m,...g]=h?u.split(":").reverse():[],y=g.reverse().join("").replace(/[\/:]/g,"")||"",b=(m==null?void 0:m.replace(/[\/:]/g,""))||"",E=f.replace(/[:\/].*/,""),A=f.replace(/^[^\/:]*(\:|\/|$)/,"$1"),O=Oa({value:A.replace(/\/.*$/,""),prefix:":"}),K=Kt(A.replace(/^[^\/]*(?:\/|$)/,"/"),e),Ce=Ei({hostname:E,port:O}),ue=Sf({hostname:E,port:O,protocol:c}),H=Ef({hash:i,hostname:E,password:b,pathname:K,port:O,protocol:c,search:o,username:y}),W=vf(o),Le=Tf({pathname:K});return{fullPath:Ia({hash:i,pathname:K,search:o}),hash:i,host:Ce,hostname:E,href:H,origin:ue,password:b,pathname:K,paths:Le,port:O,protocol:c,search:o,searchParams:W,username:y}}function hy(t,e,r){const n=k(t,"string")?t:t instanceof URL?t.toString():"",i=k(t,"string")||t instanceof URL?e:t,s=k(t,"string")||t instanceof URL?r:e,a=Zn(n),o=Ps(a,(f,h)=>{if(!ry(i,f))return h;const m=i[f];return k(m,"number")?String(m):k(m,"string")?f==="hash"&&m?We({value:m,prefix:"#"}):f==="pathname"?We({value:m,prefix:"/"}):m:h});vu(i,"paths")&&i.paths&&(o.pathname=Na("",...i.paths));const l=k(i.search,"string")?vf(We({value:i.search,prefix:"?"})):oy(i.search||{}),c=uy(o.searchParams,l,{...s,encoding:Fr.None}),d=fy(c,s);return{...o,searchParams:c,search:d,paths:Tf(o),fullPath:Ia(o),host:Ei(o),origin:Sf(o),href:Ef({...o,search:d})}}const my=Nt({protocol:"",username:"",password:"",host:"",hostname:"",port:"",origin:"",pathname:"/",paths:[""],search:"",searchParams:cy,hash:"",fullPath:"/",href:"/"});({...my.defaultValue});const py=Nt({basePath:mn("",void 0),sanitizeRoute:t=>t,maxListenerCount:mn(1,void 0),disableWarnings:mn(void 0,!1),isPaused:mn(!1,void 0)}),gy=0;function kf(t){return!(t.type!=="click"&&t.type!=="mousedown"||t.metaKey||t.altKey||t.ctrlKey||t.shiftKey||t.button!==gy)}const Ti="locationchange";globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY=!1;const wy=globalThis.history.pushState;function vl(...t){const e=wy.apply(globalThis.history,t);return globalThis.dispatchEvent(new Event(Ti)),e}const yy=globalThis.history.replaceState;function $l(...t){const e=yy.apply(globalThis.history,t);return globalThis.dispatchEvent(new Event(Ti)),e}function by(){if(!globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY){{if(globalThis.history.pushState===vl)throw new pl("The consolidation module thinks that window events have not been consolidated yet but globalThis.history.pushState has already been overridden. Does this module have two copies in your repo?");if(globalThis.history.replaceState===$l)throw new pl("The consolidation module thinks that window events have not been consolidated yet but globalThis.history.replaceState has already been overridden. Does this module have two copies in your repo?")}globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY=!0,globalThis.history.pushState=vl,globalThis.history.replaceState=$l,globalThis.addEventListener("popstate",()=>{globalThis.dispatchEvent(new Event(Ti))})}}function ts(t,e){const r=Zn(t),n=Qi({value:Qi({value:r.pathname,prefix:bf({value:e||"",prefix:"/"})}),prefix:"/"}),i=n?n.split("/"):[],s=Object.keys(r.searchParams).length?r.searchParams:void 0,a=r.hash?Qi({value:r.hash,prefix:"#"}):void 0;return{paths:i,search:s,hash:a}}class vy{constructor(e){Object.defineProperty(this,"innerObservable",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"removeGlobalListener",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"sanitizationDepth",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"params",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),ya(e,py),this.params={...e};const r=this.readCurrentRoute();this.innerObservable=new Rd({defaultValue:r,equalityCheck:()=>!1}),by(),this.removeGlobalListener=xu(globalThis,Ti,()=>{if(this.params.isPaused)return;if(this.sanitizationDepth>2)throw new Xw("Looping route sanitization detected; aborting window URL change listener.");const n=ts(globalThis.location.href,this.params.basePath),i=e.sanitizeRoute(n);le(i,n)?(this.sanitizationDepth=0,this.innerObservable.setValue(i)):(this.sanitizationDepth++,this.setRoute(i,{replace:!0}),e.disableWarnings||console.warn("Route sanitized.",{from:n,to:i}))}),this.setRoute(r,{replace:!0})}routeIncludesBasePath(e){return!e.paths||!this.params.basePath?!1:Na(...e.paths).startsWith(this.params.basePath)}readCurrentRoute(){return this.sanitizeRoute(ts(globalThis.location.href,this.params.basePath))}sanitizeRoute(e){return this.params.sanitizeRoute(e)}createRouteUrl(e){const r=ts(globalThis.location.href,void 0),n={...r,...e},i=this.sanitizeRoute(n),a=this.routeIncludesBasePath(r)&&!this.routeIncludesBasePath(i)&&this.params.basePath?{...i,paths:[this.params.basePath,...i.paths]}:i;return hy(globalThis.location.href,{paths:a.paths,search:a.search,hash:a.hash?bf({value:a.hash,prefix:"#"}):"#"},{searchParamStrategy:Ur.Clear}).href}setRoute(e,r={}){const n=this.createRouteUrl(e),{fullPath:i}=Zn(n);return this.params.isPaused||!r.force&&le(Zn(globalThis.location.href).fullPath,i)?!1:r.replace?(globalThis.history.replaceState(void 0,"",i),!0):(globalThis.history.pushState(void 0,"",i),!0)}setRouteOnDirectNavigation(e,r){return kf(r)?(r.preventDefault(),this.setRoute(e)):!1}listen(e,r){const n=this.params.maxListenerCount==null?1:this.params.maxListenerCount;if(n&&this.innerObservable.getListenerCount()>=n)throw new Pa(`Attempting to attach more route listeners than the \`maxListenerCount\` of '${n}'.`);return this.innerObservable.listen(e,r),()=>this.removeListener(r)}removeListener(e){return this.innerObservable.removeListener(e)}getListenerCount(){return this.innerObservable.getListenerCount()}destroy(){this.params.isPaused=!0,this.removeGlobalListener(),this.innerObservable.destroy()}}var oe;(function(t){t.Search="search",t.Book="book"})(oe||(oe={}));function Os(t){return t[0]===oe.Book?"":t[1]?decodeURIComponent(t[1]):""}const tr={hash:void 0,paths:[oe.Book],search:void 0};function $y(t){return new vy({basePath:t,sanitizeRoute(e){return{paths:Ey(e.paths),hash:void 0,search:void 0}}})}function Ey(t){const e=t[0];if(fm(e,oe)){if(e===oe.Book)return[oe.Book,...t.slice(1)];if(e===oe.Search)return t[1]?[e,t[1]]:[oe.Book,...t.slice(1)];throw new Error(`Route path not handled for sanitization: ${t.join("/")}`)}else return tr.paths}const D=ft({"element-book-nav-hover-background-color":"magenta","element-book-nav-hover-foreground-color":"magenta","element-book-nav-active-background-color":"magenta","element-book-nav-active-foreground-color":"magenta","element-book-nav-selected-background-color":"magenta","element-book-nav-selected-foreground-color":"magenta","element-book-accent-icon-color":"magenta","element-book-page-background-color":"magenta","element-book-page-background-faint-level-1-color":"magenta","element-book-page-background-faint-level-2-color":"magenta","element-book-page-foreground-color":"magenta","element-book-page-foreground-faint-level-1-color":"magenta","element-book-page-foreground-faint-level-2-color":"magenta"}),Ty={nav:{hover:{background:D["element-book-nav-hover-background-color"],foreground:D["element-book-nav-hover-foreground-color"]},active:{background:D["element-book-nav-active-background-color"],foreground:D["element-book-nav-active-foreground-color"]},selected:{background:D["element-book-nav-selected-background-color"],foreground:D["element-book-nav-selected-foreground-color"]}},accent:{icon:D["element-book-accent-icon-color"]},page:{background:D["element-book-page-background-color"],backgroundFaint1:D["element-book-page-background-faint-level-1-color"],backgroundFaint2:D["element-book-page-background-faint-level-2-color"],foreground:D["element-book-page-foreground-color"],foregroundFaint1:D["element-book-page-foreground-faint-level-1-color"],foregroundFaint2:D["element-book-page-foreground-faint-level-2-color"]}};function Sy(t,e){Mf(t,e,Ty)}function Ns(t){return cr(t,"_$cssResult$")}function El(t){return yu(t,["name","value","default"])&&k(t.default,"string")&&Ns(t.name)&&Ns(t.value)}function Mf(t,e,r){Object.entries(e).forEach(([n,i])=>{const s=r[n];if(!s)throw new Error(`no nestedCssVar at key '${n}'`);if(Ns(i)){if(!El(s))throw new Error(`got a CSS result at '${n}' but no CSS var`);sw({forCssVar:s,onElement:t,toValue:String(i)})}else{if(El(s))throw new Error(`got no CSS result at '${n}' but did find a CSS var`);Mf(t,i,s)}})}function F(t,e){let r=t.length;Array.isArray(t[0])||(t=[t]),Array.isArray(e[0])||(e=e.map(a=>[a]));let n=e[0].length,i=e[0].map((a,o)=>e.map(l=>l[o])),s=t.map(a=>i.map(o=>{let l=0;if(!Array.isArray(a)){for(let c of o)l+=a*c;return l}for(let c=0;c<a.length;c++)l+=a[c]*(o[c]||0);return l}));return r===1&&(s=s[0]),n===1?s.map(a=>a[0]):s}function rn(t){return it(t)==="string"}function it(t){return(Object.prototype.toString.call(t).match(/^\[object\s+(.*?)\]$/)[1]||"").toLowerCase()}function Yn(t,{precision:e,unit:r}){return at(t)?"none":xf(t,e)+(r??"")}function at(t){return Number.isNaN(t)||t instanceof Number&&(t==null?void 0:t.none)}function q(t){return at(t)?0:t}function xf(t,e){if(t===0)return 0;let r=~~t,n=0;r&&e&&(n=~~Math.log10(Math.abs(r))+1);const i=10**(e-n);return Math.floor(t*i+.5)/i}const ky={deg:1,grad:.9,rad:180/Math.PI,turn:360};function Af(t){if(!t)return;t=t.trim();const e=/^([a-z]+)\((.+?)\)$/i,r=/^-?[\d.]+$/,n=/%|deg|g?rad|turn$/,i=/\/?\s*(none|[-\w.]+(?:%|deg|g?rad|turn)?)/g;let s=t.match(e);if(s){let a=[];return s[2].replace(i,(o,l)=>{let c=l.match(n),d=l;if(c){let u=c[0],f=d.slice(0,-u.length);u==="%"?(d=new Number(f/100),d.type="<percentage>"):(d=new Number(f*ky[u]),d.type="<angle>",d.unit=u)}else r.test(d)?(d=new Number(d),d.type="<number>"):d==="none"&&(d=new Number(NaN),d.none=!0);o.startsWith("/")&&(d=d instanceof Number?d:new Number(d),d.alpha=!0),typeof d=="object"&&d instanceof Number&&(d.raw=l),a.push(d)}),{name:s[1].toLowerCase(),rawName:s[1],rawArgs:s[2],args:a}}}function Cf(t){return t[t.length-1]}function jr(t,e,r){return isNaN(t)?e:isNaN(e)?t:t+(e-t)*r}function Lf(t,e,r){return(r-t)/(e-t)}function Da(t,e,r){return jr(e[0],e[1],Lf(t[0],t[1],r))}function Pf(t){return t.map(e=>e.split("|").map(r=>{r=r.trim();let n=r.match(/^(<[a-z]+>)\[(-?[.\d]+),\s*(-?[.\d]+)\]?$/);if(n){let i=new String(n[1]);return i.range=[+n[2],+n[3]],i}return r}))}function Of(t,e,r){return Math.max(Math.min(r,e),t)}function Si(t,e){return Math.sign(t)===Math.sign(e)?t:-t}function _e(t,e){return Si(Math.abs(t)**e,t)}function _a(t,e){return e===0?0:t/e}function Nf(t,e,r=0,n=t.length){for(;r<n;){const i=r+n>>1;t[i]<e?r=i+1:n=i}return r}var My=Object.freeze({__proto__:null,bisectLeft:Nf,clamp:Of,copySign:Si,interpolate:jr,interpolateInv:Lf,isNone:at,isString:rn,last:Cf,mapRange:Da,multiplyMatrices:F,parseCoordGrammar:Pf,parseFunction:Af,serializeNumber:Yn,skipNone:q,spow:_e,toPrecision:xf,type:it,zdiv:_a});class xy{add(e,r,n){if(typeof arguments[0]!="string"){for(var e in arguments[0])this.add(e,arguments[0][e],arguments[1]);return}(Array.isArray(e)?e:[e]).forEach(function(i){this[i]=this[i]||[],r&&this[i][n?"unshift":"push"](r)},this)}run(e,r){this[e]=this[e]||[],this[e].forEach(function(n){n.call(r&&r.context?r.context:r,r)})}}const ot=new xy;var pu,gu,wu,ge={gamut_mapping:"css",precision:5,deltaE:"76",verbose:((wu=(gu=(pu=globalThis==null?void 0:globalThis.process)==null?void 0:pu.env)==null?void 0:gu.NODE_ENV)==null?void 0:wu.toLowerCase())!=="test",warn:function(e){var r,n;this.verbose&&((n=(r=globalThis==null?void 0:globalThis.console)==null?void 0:r.warn)==null||n.call(r,e))}};const re={D50:[.3457/.3585,1,(1-.3457-.3585)/.3585],D65:[.3127/.329,1,(1-.3127-.329)/.329]};function Is(t){return Array.isArray(t)?t:re[t]}function Jn(t,e,r,n={}){if(t=Is(t),e=Is(e),!t||!e)throw new TypeError(`Missing white point to convert ${t?"":"from"}${!t&&!e?"/":""}${e?"":"to"}`);if(t===e)return r;let i={W1:t,W2:e,XYZ:r,options:n};if(ot.run("chromatic-adaptation-start",i),i.M||(i.W1===re.D65&&i.W2===re.D50?i.M=[[1.0479297925449969,.022946870601609652,-.05019226628920524],[.02962780877005599,.9904344267538799,-.017073799063418826],[-.009243040646204504,.015055191490298152,.7518742814281371]]:i.W1===re.D50&&i.W2===re.D65&&(i.M=[[.955473421488075,-.02309845494876471,.06325924320057072],[-.0283697093338637,1.0099953980813041,.021041441191917323],[.012314014864481998,-.020507649298898964,1.330365926242124]])),ot.run("chromatic-adaptation-end",i),i.M)return F(i.M,i.XYZ);throw new TypeError("Only Bradford CAT with white points D50 and D65 supported for now.")}const Ay=new Set(["<number>","<percentage>","<angle>"]);function Tl(t,e,r,n){return Object.entries(t.coords).map(([s,a],o)=>{let l=e.coordGrammar[o],c=n[o],d=c==null?void 0:c.type,u;if(c.none?u=l.find(m=>Ay.has(m)):u=l.find(m=>m==d),!u){let m=a.name||s;throw new TypeError(`${d??c.raw} not allowed for ${m} in ${r}()`)}let f=u.range;d==="<percentage>"&&(f||(f=[0,1]));let h=a.range||a.refRange;return f&&h&&(n[o]=Da(f,h,n[o])),u})}function If(t,{meta:e}={}){var n,i,s,a;let r={str:(n=String(t))==null?void 0:n.trim()};if(ot.run("parse-start",r),r.color)return r.color;if(r.parsed=Af(r.str),r.parsed){let o=r.parsed.name;if(o==="color"){let l=r.parsed.args.shift(),c=l.startsWith("--")?l.substring(2):`--${l}`,d=[l,c],u=r.parsed.rawArgs.indexOf("/")>0?r.parsed.args.pop():1;for(let m of v.all){let g=m.getFormat("color");if(g&&(d.includes(g.id)||(i=g.ids)!=null&&i.filter(y=>d.includes(y)).length)){const y=Object.keys(m.coords).map((E,A)=>r.parsed.args[A]||0);let b;return g.coordGrammar&&(b=Tl(m,g,"color",y)),e&&Object.assign(e,{formatId:"color",types:b}),g.id.startsWith("--")&&!l.startsWith("--")&&ge.warn(`${m.name} is a non-standard space and not currently supported in the CSS spec. Use prefixed color(${g.id}) instead of color(${l}).`),l.startsWith("--")&&!g.id.startsWith("--")&&ge.warn(`${m.name} is a standard space and supported in the CSS spec. Use color(${g.id}) instead of prefixed color(${l}).`),{spaceId:m.id,coords:y,alpha:u}}}let f="",h=l in v.registry?l:c;if(h in v.registry){let m=(a=(s=v.registry[h].formats)==null?void 0:s.color)==null?void 0:a.id;m&&(f=`Did you mean color(${m})?`)}throw new TypeError(`Cannot parse color(${l}). `+(f||"Missing a plugin?"))}else for(let l of v.all){let c=l.getFormat(o);if(c&&c.type==="function"){let d=1;(c.lastAlpha||Cf(r.parsed.args).alpha)&&(d=r.parsed.args.pop());let u=r.parsed.args,f;return c.coordGrammar&&(f=Tl(l,c,o,u)),e&&Object.assign(e,{formatId:c.name,types:f}),{spaceId:l.id,coords:u,alpha:d}}}}else for(let o of v.all)for(let l in o.formats){let c=o.formats[l];if(c.type!=="custom"||c.test&&!c.test(r.str))continue;let d=c.parse(r.str);if(d)return d.alpha??(d.alpha=1),e&&(e.formatId=l),d}throw new TypeError(`Could not parse ${t} as a color. Missing a plugin?`)}function x(t){if(Array.isArray(t))return t.map(x);if(!t)throw new TypeError("Empty color reference");rn(t)&&(t=If(t));let e=t.space||t.spaceId;return e instanceof v||(t.space=v.get(e)),t.alpha===void 0&&(t.alpha=1),t}const Cy=75e-6,ie=class ie{constructor(e){var i;this.id=e.id,this.name=e.name,this.base=e.base?ie.get(e.base):null,this.aliases=e.aliases,this.base&&(this.fromBase=e.fromBase,this.toBase=e.toBase);let r=e.coords??this.base.coords;for(let s in r)"name"in r[s]||(r[s].name=s);this.coords=r;let n=e.white??this.base.white??"D65";this.white=Is(n),this.formats=e.formats??{};for(let s in this.formats){let a=this.formats[s];a.type||(a.type="function"),a.name||(a.name=s)}(i=this.formats.color)!=null&&i.id||(this.formats.color={...this.formats.color??{},id:e.cssId||this.id}),e.gamutSpace?this.gamutSpace=e.gamutSpace==="self"?this:ie.get(e.gamutSpace):this.isPolar?this.gamutSpace=this.base:this.gamutSpace=this,this.gamutSpace.isUnbounded&&(this.inGamut=(s,a)=>!0),this.referred=e.referred,Object.defineProperty(this,"path",{value:Ly(this).reverse(),writable:!1,enumerable:!0,configurable:!0}),ot.run("colorspace-init-end",this)}inGamut(e,{epsilon:r=Cy}={}){if(!this.equals(this.gamutSpace))return e=this.to(this.gamutSpace,e),this.gamutSpace.inGamut(e,{epsilon:r});let n=Object.values(this.coords);return e.every((i,s)=>{let a=n[s];if(a.type!=="angle"&&a.range){if(Number.isNaN(i))return!0;let[o,l]=a.range;return(o===void 0||i>=o-r)&&(l===void 0||i<=l+r)}return!0})}get isUnbounded(){return Object.values(this.coords).every(e=>!("range"in e))}get cssId(){var e,r;return((r=(e=this.formats)==null?void 0:e.color)==null?void 0:r.id)||this.id}get isPolar(){for(let e in this.coords)if(this.coords[e].type==="angle")return!0;return!1}getFormat(e){if(typeof e=="object")return e=Sl(e,this),e;let r;return e==="default"?r=Object.values(this.formats)[0]:r=this.formats[e],r?(r=Sl(r,this),r):null}equals(e){return e?this===e||this.id===e||this.id===e.id:!1}to(e,r){if(arguments.length===1){const o=x(e);[e,r]=[o.space,o.coords]}if(e=ie.get(e),this.equals(e))return r;r=r.map(o=>Number.isNaN(o)?0:o);let n=this.path,i=e.path,s,a;for(let o=0;o<n.length&&n[o].equals(i[o]);o++)s=n[o],a=o;if(!s)throw new Error(`Cannot convert between color spaces ${this} and ${e}: no connection space was found`);for(let o=n.length-1;o>a;o--)r=n[o].toBase(r);for(let o=a+1;o<i.length;o++)r=i[o].fromBase(r);return r}from(e,r){if(arguments.length===1){const n=x(e);[e,r]=[n.space,n.coords]}return e=ie.get(e),e.to(this,r)}toString(){return`${this.name} (${this.id})`}getMinCoords(){let e=[];for(let r in this.coords){let n=this.coords[r],i=n.range||n.refRange;e.push((i==null?void 0:i.min)??0)}return e}static get all(){return[...new Set(Object.values(ie.registry))]}static register(e,r){if(arguments.length===1&&(r=arguments[0],e=r.id),r=this.get(r),this.registry[e]&&this.registry[e]!==r)throw new Error(`Duplicate color space registration: '${e}'`);if(this.registry[e]=r,arguments.length===1&&r.aliases)for(let n of r.aliases)this.register(n,r);return r}static get(e,...r){if(!e||e instanceof ie)return e;if(it(e)==="string"){let i=ie.registry[e.toLowerCase()];if(!i)throw new TypeError(`No color space found with id = "${e}"`);return i}if(r.length)return ie.get(...r);throw new TypeError(`${e} is not a valid color space`)}static resolveCoord(e,r){var l;let n=it(e),i,s;if(n==="string"?e.includes(".")?[i,s]=e.split("."):[i,s]=[,e]:Array.isArray(e)?[i,s]=e:(i=e.space,s=e.coordId),i=ie.get(i),i||(i=r),!i)throw new TypeError(`Cannot resolve coordinate reference ${e}: No color space specified and relative references are not allowed here`);if(n=it(s),n==="number"||n==="string"&&s>=0){let c=Object.entries(i.coords)[s];if(c)return{space:i,id:c[0],index:s,...c[1]}}i=ie.get(i);let a=s.toLowerCase(),o=0;for(let c in i.coords){let d=i.coords[c];if(c.toLowerCase()===a||((l=d.name)==null?void 0:l.toLowerCase())===a)return{space:i,id:c,index:o,...d};o++}throw new TypeError(`No "${s}" coordinate found in ${i.name}. Its coordinates are: ${Object.keys(i.coords).join(", ")}`)}};Ni(ie,"registry",{}),Ni(ie,"DEFAULT_FORMAT",{type:"functions",name:"color"});let v=ie;function Ly(t){let e=[t];for(let r=t;r=r.base;)e.push(r);return e}function Sl(t,{coords:e}={}){if(t.coords&&!t.coordGrammar){t.type||(t.type="function"),t.name||(t.name="color"),t.coordGrammar=Pf(t.coords);let r=Object.entries(e).map(([n,i],s)=>{let a=t.coordGrammar[s][0],o=i.range||i.refRange,l=a.range,c="";return a=="<percentage>"?(l=[0,100],c="%"):a=="<angle>"&&(c="deg"),{fromRange:o,toRange:l,suffix:c}});t.serializeCoords=(n,i)=>n.map((s,a)=>{let{fromRange:o,toRange:l,suffix:c}=r[a];return o&&l&&(s=Da(o,l,s)),s=Yn(s,{precision:i,unit:c}),s})}return t}var J=new v({id:"xyz-d65",name:"XYZ D65",coords:{x:{name:"X"},y:{name:"Y"},z:{name:"Z"}},white:"D65",formats:{color:{ids:["xyz-d65","xyz"]}},aliases:["xyz"]});class ce extends v{constructor(e){e.coords||(e.coords={r:{range:[0,1],name:"Red"},g:{range:[0,1],name:"Green"},b:{range:[0,1],name:"Blue"}}),e.base||(e.base=J),e.toXYZ_M&&e.fromXYZ_M&&(e.toBase??(e.toBase=r=>{let n=F(e.toXYZ_M,r);return this.white!==this.base.white&&(n=Jn(this.white,this.base.white,n)),n}),e.fromBase??(e.fromBase=r=>(r=Jn(this.base.white,this.white,r),F(e.fromXYZ_M,r)))),e.referred??(e.referred="display"),super(e)}}function nn(t,e){return t=x(t),!e||t.space.equals(e)?t.coords.slice():(e=v.get(e),e.from(t))}function fe(t,e){t=x(t);let{space:r,index:n}=v.resolveCoord(e,t.space);return nn(t,r)[n]}function Ra(t,e,r){return t=x(t),e=v.get(e),t.coords=e.to(t.space,r),t}Ra.returns="color";function Ke(t,e,r){if(t=x(t),arguments.length===2&&it(arguments[1])==="object"){let n=arguments[1];for(let i in n)Ke(t,i,n[i])}else{typeof r=="function"&&(r=r(fe(t,e)));let{space:n,index:i}=v.resolveCoord(e,t.space),s=nn(t,n);s[i]=r,Ra(t,n,s)}return t}Ke.returns="color";var Va=new v({id:"xyz-d50",name:"XYZ D50",white:"D50",base:J,fromBase:t=>Jn(J.white,"D50",t),toBase:t=>Jn("D50",J.white,t)});const Py=216/24389,kl=24/116,gn=24389/27;let rs=re.D50;var he=new v({id:"lab",name:"Lab",coords:{l:{refRange:[0,100],name:"Lightness"},a:{refRange:[-125,125]},b:{refRange:[-125,125]}},white:rs,base:Va,fromBase(t){let r=t.map((n,i)=>n/rs[i]).map(n=>n>Py?Math.cbrt(n):(gn*n+16)/116);return[116*r[1]-16,500*(r[0]-r[1]),200*(r[1]-r[2])]},toBase(t){let e=[];return e[1]=(t[0]+16)/116,e[0]=t[1]/500+e[1],e[2]=e[1]-t[2]/200,[e[0]>kl?Math.pow(e[0],3):(116*e[0]-16)/gn,t[0]>8?Math.pow((t[0]+16)/116,3):t[0]/gn,e[2]>kl?Math.pow(e[2],3):(116*e[2]-16)/gn].map((n,i)=>n*rs[i])},formats:{lab:{coords:["<number> | <percentage>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}});function Ve(t){return(t%360+360)%360}function Oy(t,e){if(t==="raw")return e;let[r,n]=e.map(Ve),i=n-r;return t==="increasing"?i<0&&(n+=360):t==="decreasing"?i>0&&(r+=360):t==="longer"?-180<i&&i<180&&(i>0?r+=360:n+=360):t==="shorter"&&(i>180?r+=360:i<-180&&(n+=360)),[r,n]}var zr=new v({id:"lch",name:"LCH",coords:{l:{refRange:[0,100],name:"Lightness"},c:{refRange:[0,150],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},base:he,fromBase(t){let[e,r,n]=t,i;const s=.02;return Math.abs(r)<s&&Math.abs(n)<s?i=NaN:i=Math.atan2(n,r)*180/Math.PI,[e,Math.sqrt(r**2+n**2),Ve(i)]},toBase(t){let[e,r,n]=t;return r<0&&(r=0),isNaN(n)&&(n=0),[e,r*Math.cos(n*Math.PI/180),r*Math.sin(n*Math.PI/180)]},formats:{lch:{coords:["<number> | <percentage>","<number> | <percentage>","<number> | <angle>"]}}});const Ml=25**7,Xn=Math.PI,xl=180/Xn,Rt=Xn/180;function Al(t){const e=t*t;return e*e*e*t}function Df(t,e,{kL:r=1,kC:n=1,kH:i=1}={}){[t,e]=x([t,e]);let[s,a,o]=he.from(t),l=zr.from(he,[s,a,o])[1],[c,d,u]=he.from(e),f=zr.from(he,[c,d,u])[1];l<0&&(l=0),f<0&&(f=0);let h=(l+f)/2,m=Al(h),g=.5*(1-Math.sqrt(m/(m+Ml))),y=(1+g)*a,b=(1+g)*d,E=Math.sqrt(y**2+o**2),A=Math.sqrt(b**2+u**2),O=y===0&&o===0?0:Math.atan2(o,y),K=b===0&&u===0?0:Math.atan2(u,b);O<0&&(O+=2*Xn),K<0&&(K+=2*Xn),O*=xl,K*=xl;let Ce=c-s,ue=A-E,H=K-O,W=O+K,Le=Math.abs(H),ht;E*A===0?ht=0:Le<=180?ht=H:H>180?ht=H-360:H<-180?ht=H+360:ge.warn("the unthinkable has happened");let qa=2*Math.sqrt(A*E)*Math.sin(ht*Rt/2),Hh=(s+c)/2,Oi=(E+A)/2,Ka=Al(Oi),He;E*A===0?He=W:Le<=180?He=W/2:W<360?He=(W+360)/2:He=(W-360)/2;let Za=(Hh-50)**2,Bh=1+.015*Za/Math.sqrt(20+Za),Ya=1+.045*Oi,gr=1;gr-=.17*Math.cos((He-30)*Rt),gr+=.24*Math.cos(2*He*Rt),gr+=.32*Math.cos((3*He+6)*Rt),gr-=.2*Math.cos((4*He-63)*Rt);let Ja=1+.015*Oi*gr,Fh=30*Math.exp(-1*((He-275)/25)**2),Uh=2*Math.sqrt(Ka/(Ka+Ml)),jh=-1*Math.sin(2*Fh*Rt)*Uh,on=(Ce/(r*Bh))**2;return on+=(ue/(n*Ya))**2,on+=(qa/(i*Ja))**2,on+=jh*(ue/(n*Ya))*(qa/(i*Ja)),Math.sqrt(on)}const Ny=[[.819022437996703,.3619062600528904,-.1288737815209879],[.0329836539323885,.9292868615863434,.0361446663506424],[.0481771893596242,.2642395317527308,.6335478284694309]],Iy=[[1.2268798758459243,-.5578149944602171,.2813910456659647],[-.0405757452148008,1.112286803280317,-.0717110580655164],[-.0763729366746601,-.4214933324022432,1.5869240198367816]],Dy=[[.210454268309314,.7936177747023054,-.0040720430116193],[1.9779985324311684,-2.42859224204858,.450593709617411],[.0259040424655478,.7827717124575296,-.8086757549230774]],_y=[[1,.3963377773761749,.2158037573099136],[1,-.1055613458156586,-.0638541728258133],[1,-.0894841775298119,-1.2914855480194092]];var rr=new v({id:"oklab",name:"Oklab",coords:{l:{refRange:[0,1],name:"Lightness"},a:{refRange:[-.4,.4]},b:{refRange:[-.4,.4]}},white:"D65",base:J,fromBase(t){let r=F(Ny,t).map(n=>Math.cbrt(n));return F(Dy,r)},toBase(t){let r=F(_y,t).map(n=>n**3);return F(Iy,r)},formats:{oklab:{coords:["<percentage> | <number>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}});function Ds(t,e){[t,e]=x([t,e]);let[r,n,i]=rr.from(t),[s,a,o]=rr.from(e),l=r-s,c=n-a,d=i-o;return Math.sqrt(l**2+c**2+d**2)}const Ry=75e-6;function St(t,e,{epsilon:r=Ry}={}){t=x(t),e||(e=t.space),e=v.get(e);let n=t.coords;return e!==t.space&&(n=e.from(t)),e.inGamut(n,{epsilon:r})}function nr(t){return{space:t.space,coords:t.coords.slice(),alpha:t.alpha}}function _f(t,e,r="lab"){r=v.get(r);let n=r.from(t),i=r.from(e);return Math.sqrt(n.reduce((s,a,o)=>{let l=i[o];return isNaN(a)||isNaN(l)?s:s+(l-a)**2},0))}function Vy(t,e){return _f(t,e,"lab")}const Hy=Math.PI,Cl=Hy/180;function By(t,e,{l:r=2,c:n=1}={}){[t,e]=x([t,e]);let[i,s,a]=he.from(t),[,o,l]=zr.from(he,[i,s,a]),[c,d,u]=he.from(e),f=zr.from(he,[c,d,u])[1];o<0&&(o=0),f<0&&(f=0);let h=i-c,m=o-f,g=s-d,y=a-u,b=g**2+y**2-m**2,E=.511;i>=16&&(E=.040975*i/(1+.01765*i));let A=.0638*o/(1+.0131*o)+.638,O;Number.isNaN(l)&&(l=0),l>=164&&l<=345?O=.56+Math.abs(.2*Math.cos((l+168)*Cl)):O=.36+Math.abs(.4*Math.cos((l+35)*Cl));let K=Math.pow(o,4),Ce=Math.sqrt(K/(K+1900)),ue=A*(Ce*O+1-Ce),H=(h/(r*E))**2;return H+=(m/(n*A))**2,H+=b/ue**2,Math.sqrt(H)}const Ll=203;var Ha=new v({id:"xyz-abs-d65",cssId:"--xyz-abs-d65",name:"Absolute XYZ D65",coords:{x:{refRange:[0,9504.7],name:"Xa"},y:{refRange:[0,1e4],name:"Ya"},z:{refRange:[0,10888.3],name:"Za"}},base:J,fromBase(t){return t.map(e=>Math.max(e*Ll,0))},toBase(t){return t.map(e=>Math.max(e/Ll,0))}});const wn=1.15,yn=.66,Pl=2610/2**14,Fy=2**14/2610,Ol=3424/2**12,Nl=2413/2**7,Il=2392/2**7,Uy=1.7*2523/2**5,Dl=2**5/(1.7*2523),bn=-.56,ns=16295499532821565e-27,jy=[[.41478972,.579999,.014648],[-.20151,1.120649,.0531008],[-.0166008,.2648,.6684799]],zy=[[1.9242264357876067,-1.0047923125953657,.037651404030618],[.35031676209499907,.7264811939316552,-.06538442294808501],[-.09098281098284752,-.3127282905230739,1.5227665613052603]],Wy=[[.5,.5,0],[3.524,-4.066708,.542708],[.199076,1.096799,-1.295875]],Gy=[[1,.1386050432715393,.05804731615611886],[.9999999999999999,-.1386050432715393,-.05804731615611886],[.9999999999999998,-.09601924202631895,-.8118918960560388]];var Rf=new v({id:"jzazbz",name:"Jzazbz",coords:{jz:{refRange:[0,1],name:"Jz"},az:{refRange:[-.5,.5]},bz:{refRange:[-.5,.5]}},base:Ha,fromBase(t){let[e,r,n]=t,i=wn*e-(wn-1)*n,s=yn*r-(yn-1)*e,o=F(jy,[i,s,n]).map(function(f){let h=Ol+Nl*(f/1e4)**Pl,m=1+Il*(f/1e4)**Pl;return(h/m)**Uy}),[l,c,d]=F(Wy,o);return[(1+bn)*l/(1+bn*l)-ns,c,d]},toBase(t){let[e,r,n]=t,i=(e+ns)/(1+bn-bn*(e+ns)),a=F(Gy,[i,r,n]).map(function(f){let h=Ol-f**Dl,m=Il*f**Dl-Nl;return 1e4*(h/m)**Fy}),[o,l,c]=F(zy,a),d=(o+(wn-1)*c)/wn,u=(l+(yn-1)*d)/yn;return[d,u,c]},formats:{color:{coords:["<number> | <percentage>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}}),_s=new v({id:"jzczhz",name:"JzCzHz",coords:{jz:{refRange:[0,1],name:"Jz"},cz:{refRange:[0,1],name:"Chroma"},hz:{refRange:[0,360],type:"angle",name:"Hue"}},base:Rf,fromBase(t){let[e,r,n]=t,i;const s=2e-4;return Math.abs(r)<s&&Math.abs(n)<s?i=NaN:i=Math.atan2(n,r)*180/Math.PI,[e,Math.sqrt(r**2+n**2),Ve(i)]},toBase(t){return[t[0],t[1]*Math.cos(t[2]*Math.PI/180),t[1]*Math.sin(t[2]*Math.PI/180)]}});function qy(t,e){[t,e]=x([t,e]);let[r,n,i]=_s.from(t),[s,a,o]=_s.from(e),l=r-s,c=n-a;Number.isNaN(i)&&Number.isNaN(o)?(i=0,o=0):Number.isNaN(i)?i=o:Number.isNaN(o)&&(o=i);let d=i-o,u=2*Math.sqrt(n*a)*Math.sin(d/2*(Math.PI/180));return Math.sqrt(l**2+c**2+u**2)}const Vf=3424/4096,Hf=2413/128,Bf=2392/128,_l=2610/16384,Ky=2523/32,Zy=16384/2610,Rl=32/2523,Yy=[[.3592832590121217,.6976051147779502,-.035891593232029],[-.1920808463704993,1.100476797037432,.0753748658519118],[.0070797844607479,.0748396662186362,.8433265453898765]],Jy=[[2048/4096,2048/4096,0],[6610/4096,-13613/4096,7003/4096],[17933/4096,-17390/4096,-543/4096]],Xy=[[.9999999999999998,.0086090370379328,.111029625003026],[.9999999999999998,-.0086090370379328,-.1110296250030259],[.9999999999999998,.5600313357106791,-.3206271749873188]],Qy=[[2.0701522183894223,-1.3263473389671563,.2066510476294053],[.3647385209748072,.6805660249472273,-.0453045459220347],[-.0497472075358123,-.0492609666966131,1.1880659249923042]];var Rs=new v({id:"ictcp",name:"ICTCP",coords:{i:{refRange:[0,1],name:"I"},ct:{refRange:[-.5,.5],name:"CT"},cp:{refRange:[-.5,.5],name:"CP"}},base:Ha,fromBase(t){let e=F(Yy,t);return eb(e)},toBase(t){let e=tb(t);return F(Qy,e)}});function eb(t){let e=t.map(function(r){let n=Vf+Hf*(r/1e4)**_l,i=1+Bf*(r/1e4)**_l;return(n/i)**Ky});return F(Jy,e)}function tb(t){return F(Xy,t).map(function(n){let i=Math.max(n**Rl-Vf,0),s=Hf-Bf*n**Rl;return 1e4*(i/s)**Zy})}function rb(t,e){[t,e]=x([t,e]);let[r,n,i]=Rs.from(t),[s,a,o]=Rs.from(e);return 720*Math.sqrt((r-s)**2+.25*(n-a)**2+(i-o)**2)}const nb=re.D65,Ff=.42,Vl=1/Ff,is=2*Math.PI,Uf=[[.401288,.650173,-.051461],[-.250268,1.204414,.045854],[-.002079,.048952,.953127]],ib=[[1.8620678550872327,-1.0112546305316843,.14918677544445175],[.38752654323613717,.6214474419314753,-.008973985167612518],[-.015841498849333856,-.03412293802851557,1.0499644368778496]],sb=[[460,451,288],[460,-891,-261],[460,-220,-6300]],ab={dark:[.8,.525,.8],dim:[.9,.59,.9],average:[1,.69,1]},bt={h:[20.14,90,164.25,237.53,380.14],e:[.8,.7,1,1.2,.8],H:[0,100,200,300,400]},ob=180/Math.PI,Hl=Math.PI/180;function jf(t,e){return t.map(n=>{const i=_e(e*Math.abs(n)*.01,Ff);return 400*Si(i,n)/(i+27.13)})}function lb(t,e){const r=100/e*27.13**Vl;return t.map(n=>{const i=Math.abs(n);return Si(r*_e(i/(400-i),Vl),n)})}function cb(t){let e=Ve(t);e<=bt.h[0]&&(e+=360);const r=Nf(bt.h,e)-1,[n,i]=bt.h.slice(r,r+2),[s,a]=bt.e.slice(r,r+2),o=bt.H[r],l=(e-n)/s;return o+100*l/(l+(i-e)/a)}function ub(t){let e=(t%400+400)%400;const r=Math.floor(.01*e);e=e%100;const[n,i]=bt.h.slice(r,r+2),[s,a]=bt.e.slice(r,r+2);return Ve((e*(a*n-s*i)-100*n*a)/(e*(a-s)-100*a))}function zf(t,e,r,n,i){const s={};s.discounting=i,s.refWhite=t,s.surround=n;const a=t.map(g=>g*100);s.la=e,s.yb=r;const o=a[1],l=F(Uf,a);n=ab[s.surround];const c=n[0];s.c=n[1],s.nc=n[2];const u=(1/(5*s.la+1))**4;s.fl=u*s.la+.1*(1-u)*(1-u)*Math.cbrt(5*s.la),s.flRoot=s.fl**.25,s.n=s.yb/o,s.z=1.48+Math.sqrt(s.n),s.nbb=.725*s.n**-.2,s.ncb=s.nbb;const f=i?1:Math.max(Math.min(c*(1-1/3.6*Math.exp((-s.la-42)/92)),1),0);s.dRgb=l.map(g=>jr(1,o/g,f)),s.dRgbInv=s.dRgb.map(g=>1/g);const h=l.map((g,y)=>g*s.dRgb[y]),m=jf(h,s.fl);return s.aW=s.nbb*(2*m[0]+m[1]+.05*m[2]),s}const Bl=zf(nb,64/Math.PI*.2,20,"average",!1);function Vs(t,e){if(!(t.J!==void 0^t.Q!==void 0))throw new Error("Conversion requires one and only one: 'J' or 'Q'");if(!(t.C!==void 0^t.M!==void 0^t.s!==void 0))throw new Error("Conversion requires one and only one: 'C', 'M' or 's'");if(!(t.h!==void 0^t.H!==void 0))throw new Error("Conversion requires one and only one: 'h' or 'H'");if(t.J===0||t.Q===0)return[0,0,0];let r=0;t.h!==void 0?r=Ve(t.h)*Hl:r=ub(t.H)*Hl;const n=Math.cos(r),i=Math.sin(r);let s=0;t.J!==void 0?s=_e(t.J,1/2)*.1:t.Q!==void 0&&(s=.25*e.c*t.Q/((e.aW+4)*e.flRoot));let a=0;t.C!==void 0?a=t.C/s:t.M!==void 0?a=t.M/e.flRoot/s:t.s!==void 0&&(a=4e-4*t.s**2*(e.aW+4)/e.c);const o=_e(a*Math.pow(1.64-Math.pow(.29,e.n),-.73),10/9),l=.25*(Math.cos(r+2)+3.8),c=e.aW*_e(s,2/e.c/e.z),d=5e4/13*e.nc*e.ncb*l,u=c/e.nbb,f=23*(u+.305)*_a(o,23*d+o*(11*n+108*i)),h=f*n,m=f*i,g=lb(F(sb,[u,h,m]).map(y=>y*1/1403),e.fl);return F(ib,g.map((y,b)=>y*e.dRgbInv[b])).map(y=>y/100)}function Wf(t,e){const r=t.map(A=>A*100),n=jf(F(Uf,r).map((A,O)=>A*e.dRgb[O]),e.fl),i=n[0]+(-12*n[1]+n[2])/11,s=(n[0]+n[1]-2*n[2])/9,a=(Math.atan2(s,i)%is+is)%is,o=.25*(Math.cos(a+2)+3.8),l=5e4/13*e.nc*e.ncb*_a(o*Math.sqrt(i**2+s**2),n[0]+n[1]+1.05*n[2]+.305),c=_e(l,.9)*Math.pow(1.64-Math.pow(.29,e.n),.73),d=e.nbb*(2*n[0]+n[1]+.05*n[2]),u=_e(d/e.aW,.5*e.c*e.z),f=100*_e(u,2),h=4/e.c*u*(e.aW+4)*e.flRoot,m=c*u,g=m*e.flRoot,y=Ve(a*ob),b=cb(y),E=50*_e(e.c*c/(e.aW+4),1/2);return{J:f,C:m,h:y,s:E,Q:h,M:g,H:b}}var db=new v({id:"cam16-jmh",cssId:"--cam16-jmh",name:"CAM16-JMh",coords:{j:{refRange:[0,100],name:"J"},m:{refRange:[0,105],name:"Colorfulness"},h:{refRange:[0,360],type:"angle",name:"Hue"}},base:J,fromBase(t){const e=Wf(t,Bl);return[e.J,e.M,e.h]},toBase(t){return Vs({J:t[0],M:t[1],h:t[2]},Bl)}});const fb=re.D65,hb=216/24389,Gf=24389/27;function mb(t){return 116*(t>hb?Math.cbrt(t):(Gf*t+16)/116)-16}function Hs(t){return t>8?Math.pow((t+16)/116,3):t/Gf}function pb(t,e){let[r,n,i]=t,s=[],a=0;if(i===0)return[0,0,0];let o=Hs(i);i>0?a=.00379058511492914*i**2+.608983189401032*i+.9155088574762233:a=9514440756550361e-21*i**2+.08693057439788597*i-21.928975842194614;const l=2e-12,c=15;let d=0,u=1/0;for(;d<=c;){s=Vs({J:a,C:n,h:r},e);const f=Math.abs(s[1]-o);if(f<u){if(f<=l)return s;u=f}a=a-(s[1]-o)*a/(2*s[1]),d+=1}return Vs({J:a,C:n,h:r},e)}function gb(t,e){const r=mb(t[1]);if(r===0)return[0,0,0];const n=Wf(t,Ba);return[Ve(n.h),n.C,r]}const Ba=zf(fb,200/Math.PI*Hs(50),Hs(50)*100,"average",!1);var Wr=new v({id:"hct",name:"HCT",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},c:{refRange:[0,145],name:"Colorfulness"},t:{refRange:[0,100],name:"Tone"}},base:J,fromBase(t){return gb(t)},toBase(t){return pb(t,Ba)},formats:{color:{id:"--hct",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}});const wb=Math.PI/180,Fl=[1,.007,.0228];function Ul(t){t[1]<0&&(t=Wr.fromBase(Wr.toBase(t)));const e=Math.log(Math.max(1+Fl[2]*t[1]*Ba.flRoot,1))/Fl[2],r=t[0]*wb,n=e*Math.cos(r),i=e*Math.sin(r);return[t[2],n,i]}function yb(t,e){[t,e]=x([t,e]);let[r,n,i]=Ul(Wr.from(t)),[s,a,o]=Ul(Wr.from(e));return Math.sqrt((r-s)**2+(n-a)**2+(i-o)**2)}var ir={deltaE76:Vy,deltaECMC:By,deltaE2000:Df,deltaEJz:qy,deltaEITP:rb,deltaEOK:Ds,deltaEHCT:yb};function bb(t){const e=t?Math.floor(Math.log10(Math.abs(t))):0;return Math.max(parseFloat(`1e${e-2}`),1e-6)}const jl={hct:{method:"hct.c",jnd:2,deltaEMethod:"hct",blackWhiteClamp:{}},"hct-tonal":{method:"hct.c",jnd:0,deltaEMethod:"hct",blackWhiteClamp:{channel:"hct.t",min:0,max:100}}};function lt(t,{method:e=ge.gamut_mapping,space:r=void 0,deltaEMethod:n="",jnd:i=2,blackWhiteClamp:s={}}={}){if(t=x(t),rn(arguments[1])?r=arguments[1]:r||(r=t.space),r=v.get(r),St(t,r,{epsilon:0}))return t;let a;if(e==="css")a=vb(t,{space:r});else{if(e!=="clip"&&!St(t,r)){Object.prototype.hasOwnProperty.call(jl,e)&&({method:e,jnd:i,deltaEMethod:n,blackWhiteClamp:s}=jl[e]);let o=Df;if(n!==""){for(let c in ir)if("deltae"+n.toLowerCase()===c.toLowerCase()){o=ir[c];break}}let l=lt(B(t,r),{method:"clip",space:r});if(o(t,l)>i){if(Object.keys(s).length===3){let E=v.resolveCoord(s.channel),A=fe(B(t,E.space),E.id);if(at(A)&&(A=0),A>=s.max)return B({space:"xyz-d65",coords:re.D65},t.space);if(A<=s.min)return B({space:"xyz-d65",coords:[0,0,0]},t.space)}let c=v.resolveCoord(e),d=c.space,u=c.id,f=B(t,d);f.coords.forEach((E,A)=>{at(E)&&(f.coords[A]=0)});let m=(c.range||c.refRange)[0],g=bb(i),y=m,b=fe(f,u);for(;b-y>g;){let E=nr(f);E=lt(E,{space:r,method:"clip"}),o(f,E)-i<g?y=fe(f,u):b=fe(f,u),Ke(f,u,(y+b)/2)}a=B(f,r)}else a=l}else a=B(t,r);if(e==="clip"||!St(a,r,{epsilon:0})){let o=Object.values(r.coords).map(l=>l.range||[]);a.coords=a.coords.map((l,c)=>{let[d,u]=o[c];return d!==void 0&&(l=Math.max(d,l)),u!==void 0&&(l=Math.min(l,u)),l})}}return r!==t.space&&(a=B(a,t.space)),t.coords=a.coords,t}lt.returns="color";const zl={WHITE:{space:rr,coords:[1,0,0]},BLACK:{space:rr,coords:[0,0,0]}};function vb(t,{space:e}={}){t=x(t),e||(e=t.space),e=v.get(e);const i=v.get("oklch");if(e.isUnbounded)return B(t,e);const s=B(t,i);let a=s.coords[0];if(a>=1){const m=B(zl.WHITE,e);return m.alpha=t.alpha,B(m,e)}if(a<=0){const m=B(zl.BLACK,e);return m.alpha=t.alpha,B(m,e)}if(St(s,e,{epsilon:0}))return B(s,e);function o(m){const g=B(m,e),y=Object.values(e.coords);return g.coords=g.coords.map((b,E)=>{if("range"in y[E]){const[A,O]=y[E].range;return Of(A,b,O)}return b}),g}let l=0,c=s.coords[1],d=!0,u=nr(s),f=o(u),h=Ds(f,u);if(h<.02)return f;for(;c-l>1e-4;){const m=(l+c)/2;if(u.coords[1]=m,d&&St(u,e,{epsilon:0}))l=m;else if(f=o(u),h=Ds(f,u),h<.02){if(.02-h<1e-4)break;d=!1,l=m}else c=m}return f}function B(t,e,{inGamut:r}={}){t=x(t),e=v.get(e);let n=e.from(t),i={space:e,coords:n,alpha:t.alpha};return r&&(i=lt(i,r===!0?void 0:r)),i}B.returns="color";function Ir(t,{precision:e=ge.precision,format:r="default",inGamut:n=!0,...i}={}){var l;let s;t=x(t);let a=r;r=t.space.getFormat(r)??t.space.getFormat("default")??v.DEFAULT_FORMAT;let o=t.coords.slice();if(n||(n=r.toGamut),n&&!St(t)&&(o=lt(nr(t),n===!0?void 0:n).coords),r.type==="custom")if(i.precision=e,r.serialize)s=r.serialize(o,t.alpha,i);else throw new TypeError(`format ${a} can only be used to parse colors, not for serialization`);else{let c=r.name||"color";r.serializeCoords?o=r.serializeCoords(o,e):e!==null&&(o=o.map(h=>Yn(h,{precision:e})));let d=[...o];if(c==="color"){let h=r.id||((l=r.ids)==null?void 0:l[0])||t.space.id;d.unshift(h)}let u=t.alpha;e!==null&&(u=Yn(u,{precision:e}));let f=t.alpha>=1||r.noAlpha?"":`${r.commas?",":" /"} ${u}`;s=`${c}(${d.join(r.commas?", ":" ")}${f})`}return s}const $b=[[.6369580483012914,.14461690358620832,.1688809751641721],[.2627002120112671,.6779980715188708,.05930171646986196],[0,.028072693049087428,1.060985057710791]],Eb=[[1.716651187971268,-.355670783776392,-.25336628137366],[-.666684351832489,1.616481236634939,.0157685458139111],[.017639857445311,-.042770613257809,.942103121235474]];var ki=new ce({id:"rec2020-linear",cssId:"--rec2020-linear",name:"Linear REC.2020",white:"D65",toXYZ_M:$b,fromXYZ_M:Eb});const vn=1.09929682680944,Wl=.018053968510807;var qf=new ce({id:"rec2020",name:"REC.2020",base:ki,toBase(t){return t.map(function(e){return e<Wl*4.5?e/4.5:Math.pow((e+vn-1)/vn,1/.45)})},fromBase(t){return t.map(function(e){return e>=Wl?vn*Math.pow(e,.45)-(vn-1):4.5*e})}});const Tb=[[.4865709486482162,.26566769316909306,.1982172852343625],[.2289745640697488,.6917385218365064,.079286914093745],[0,.04511338185890264,1.043944368900976]],Sb=[[2.493496911941425,-.9313836179191239,-.40271078445071684],[-.8294889695615747,1.7626640603183463,.023624685841943577],[.03584583024378447,-.07617238926804182,.9568845240076872]];var Kf=new ce({id:"p3-linear",cssId:"--display-p3-linear",name:"Linear P3",white:"D65",toXYZ_M:Tb,fromXYZ_M:Sb});const kb=[[.41239079926595934,.357584339383878,.1804807884018343],[.21263900587151027,.715168678767756,.07219231536073371],[.01933081871559182,.11919477979462598,.9505321522496607]],Z=[[3.2409699419045226,-1.537383177570094,-.4986107602930034],[-.9692436362808796,1.8759675015077202,.04155505740717559],[.05563007969699366,-.20397695888897652,1.0569715142428786]];var Zf=new ce({id:"srgb-linear",name:"Linear sRGB",white:"D65",toXYZ_M:kb,fromXYZ_M:Z}),Gl={aliceblue:[240/255,248/255,1],antiquewhite:[250/255,235/255,215/255],aqua:[0,1,1],aquamarine:[127/255,1,212/255],azure:[240/255,1,1],beige:[245/255,245/255,220/255],bisque:[1,228/255,196/255],black:[0,0,0],blanchedalmond:[1,235/255,205/255],blue:[0,0,1],blueviolet:[138/255,43/255,226/255],brown:[165/255,42/255,42/255],burlywood:[222/255,184/255,135/255],cadetblue:[95/255,158/255,160/255],chartreuse:[127/255,1,0],chocolate:[210/255,105/255,30/255],coral:[1,127/255,80/255],cornflowerblue:[100/255,149/255,237/255],cornsilk:[1,248/255,220/255],crimson:[220/255,20/255,60/255],cyan:[0,1,1],darkblue:[0,0,139/255],darkcyan:[0,139/255,139/255],darkgoldenrod:[184/255,134/255,11/255],darkgray:[169/255,169/255,169/255],darkgreen:[0,100/255,0],darkgrey:[169/255,169/255,169/255],darkkhaki:[189/255,183/255,107/255],darkmagenta:[139/255,0,139/255],darkolivegreen:[85/255,107/255,47/255],darkorange:[1,140/255,0],darkorchid:[153/255,50/255,204/255],darkred:[139/255,0,0],darksalmon:[233/255,150/255,122/255],darkseagreen:[143/255,188/255,143/255],darkslateblue:[72/255,61/255,139/255],darkslategray:[47/255,79/255,79/255],darkslategrey:[47/255,79/255,79/255],darkturquoise:[0,206/255,209/255],darkviolet:[148/255,0,211/255],deeppink:[1,20/255,147/255],deepskyblue:[0,191/255,1],dimgray:[105/255,105/255,105/255],dimgrey:[105/255,105/255,105/255],dodgerblue:[30/255,144/255,1],firebrick:[178/255,34/255,34/255],floralwhite:[1,250/255,240/255],forestgreen:[34/255,139/255,34/255],fuchsia:[1,0,1],gainsboro:[220/255,220/255,220/255],ghostwhite:[248/255,248/255,1],gold:[1,215/255,0],goldenrod:[218/255,165/255,32/255],gray:[128/255,128/255,128/255],green:[0,128/255,0],greenyellow:[173/255,1,47/255],grey:[128/255,128/255,128/255],honeydew:[240/255,1,240/255],hotpink:[1,105/255,180/255],indianred:[205/255,92/255,92/255],indigo:[75/255,0,130/255],ivory:[1,1,240/255],khaki:[240/255,230/255,140/255],lavender:[230/255,230/255,250/255],lavenderblush:[1,240/255,245/255],lawngreen:[124/255,252/255,0],lemonchiffon:[1,250/255,205/255],lightblue:[173/255,216/255,230/255],lightcoral:[240/255,128/255,128/255],lightcyan:[224/255,1,1],lightgoldenrodyellow:[250/255,250/255,210/255],lightgray:[211/255,211/255,211/255],lightgreen:[144/255,238/255,144/255],lightgrey:[211/255,211/255,211/255],lightpink:[1,182/255,193/255],lightsalmon:[1,160/255,122/255],lightseagreen:[32/255,178/255,170/255],lightskyblue:[135/255,206/255,250/255],lightslategray:[119/255,136/255,153/255],lightslategrey:[119/255,136/255,153/255],lightsteelblue:[176/255,196/255,222/255],lightyellow:[1,1,224/255],lime:[0,1,0],limegreen:[50/255,205/255,50/255],linen:[250/255,240/255,230/255],magenta:[1,0,1],maroon:[128/255,0,0],mediumaquamarine:[102/255,205/255,170/255],mediumblue:[0,0,205/255],mediumorchid:[186/255,85/255,211/255],mediumpurple:[147/255,112/255,219/255],mediumseagreen:[60/255,179/255,113/255],mediumslateblue:[123/255,104/255,238/255],mediumspringgreen:[0,250/255,154/255],mediumturquoise:[72/255,209/255,204/255],mediumvioletred:[199/255,21/255,133/255],midnightblue:[25/255,25/255,112/255],mintcream:[245/255,1,250/255],mistyrose:[1,228/255,225/255],moccasin:[1,228/255,181/255],navajowhite:[1,222/255,173/255],navy:[0,0,128/255],oldlace:[253/255,245/255,230/255],olive:[128/255,128/255,0],olivedrab:[107/255,142/255,35/255],orange:[1,165/255,0],orangered:[1,69/255,0],orchid:[218/255,112/255,214/255],palegoldenrod:[238/255,232/255,170/255],palegreen:[152/255,251/255,152/255],paleturquoise:[175/255,238/255,238/255],palevioletred:[219/255,112/255,147/255],papayawhip:[1,239/255,213/255],peachpuff:[1,218/255,185/255],peru:[205/255,133/255,63/255],pink:[1,192/255,203/255],plum:[221/255,160/255,221/255],powderblue:[176/255,224/255,230/255],purple:[128/255,0,128/255],rebeccapurple:[102/255,51/255,153/255],red:[1,0,0],rosybrown:[188/255,143/255,143/255],royalblue:[65/255,105/255,225/255],saddlebrown:[139/255,69/255,19/255],salmon:[250/255,128/255,114/255],sandybrown:[244/255,164/255,96/255],seagreen:[46/255,139/255,87/255],seashell:[1,245/255,238/255],sienna:[160/255,82/255,45/255],silver:[192/255,192/255,192/255],skyblue:[135/255,206/255,235/255],slateblue:[106/255,90/255,205/255],slategray:[112/255,128/255,144/255],slategrey:[112/255,128/255,144/255],snow:[1,250/255,250/255],springgreen:[0,1,127/255],steelblue:[70/255,130/255,180/255],tan:[210/255,180/255,140/255],teal:[0,128/255,128/255],thistle:[216/255,191/255,216/255],tomato:[1,99/255,71/255],turquoise:[64/255,224/255,208/255],violet:[238/255,130/255,238/255],wheat:[245/255,222/255,179/255],white:[1,1,1],whitesmoke:[245/255,245/255,245/255],yellow:[1,1,0],yellowgreen:[154/255,205/255,50/255]};let ql=Array(3).fill("<percentage> | <number>[0, 255]"),Kl=Array(3).fill("<number>[0, 255]");var sr=new ce({id:"srgb",name:"sRGB",base:Zf,fromBase:t=>t.map(e=>{let r=e<0?-1:1,n=e*r;return n>.0031308?r*(1.055*n**(1/2.4)-.055):12.92*e}),toBase:t=>t.map(e=>{let r=e<0?-1:1,n=e*r;return n<=.04045?e/12.92:r*((n+.055)/1.055)**2.4}),formats:{rgb:{coords:ql},rgb_number:{name:"rgb",commas:!0,coords:Kl,noAlpha:!0},color:{},rgba:{coords:ql,commas:!0,lastAlpha:!0},rgba_number:{name:"rgba",commas:!0,coords:Kl},hex:{type:"custom",toGamut:!0,test:t=>/^#([a-f0-9]{3,4}){1,2}$/i.test(t),parse(t){t.length<=5&&(t=t.replace(/[a-f0-9]/gi,"$&$&"));let e=[];return t.replace(/[a-f0-9]{2}/gi,r=>{e.push(parseInt(r,16)/255)}),{spaceId:"srgb",coords:e.slice(0,3),alpha:e.slice(3)[0]}},serialize:(t,e,{collapse:r=!0}={})=>{e<1&&t.push(e),t=t.map(s=>Math.round(s*255));let n=r&&t.every(s=>s%17===0);return"#"+t.map(s=>n?(s/17).toString(16):s.toString(16).padStart(2,"0")).join("")}},keyword:{type:"custom",test:t=>/^[a-z]+$/i.test(t),parse(t){t=t.toLowerCase();let e={spaceId:"srgb",coords:null,alpha:1};if(t==="transparent"?(e.coords=Gl.black,e.alpha=0):e.coords=Gl[t],e.coords)return e}}}}),Yf=new ce({id:"p3",cssId:"display-p3",name:"P3",base:Kf,fromBase:sr.fromBase,toBase:sr.toBase});ge.display_space=sr;let Mb;if(typeof CSS<"u"&&CSS.supports)for(let t of[he,qf,Yf]){let e=t.getMinCoords(),n=Ir({space:t,coords:e,alpha:1});if(CSS.supports("color",n)){ge.display_space=t;break}}function xb(t,{space:e=ge.display_space,...r}={}){let n=Ir(t,r);if(typeof CSS>"u"||CSS.supports("color",n)||!ge.display_space)n=new String(n),n.color=t;else{let i=t;if((t.coords.some(at)||at(t.alpha))&&!(Mb??(Mb=CSS.supports("color","hsl(none 50% 50%)")))&&(i=nr(t),i.coords=i.coords.map(q),i.alpha=q(i.alpha),n=Ir(i,r),CSS.supports("color",n)))return n=new String(n),n.color=i,n;i=B(i,e),n=new String(Ir(i,r)),n.color=i}return n}function Ab(t,e){return t=x(t),e=x(e),t.space===e.space&&t.alpha===e.alpha&&t.coords.every((r,n)=>r===e.coords[n])}function ct(t){return fe(t,[J,"y"])}function Jf(t,e){Ke(t,[J,"y"],e)}function Cb(t){Object.defineProperty(t.prototype,"luminance",{get(){return ct(this)},set(e){Jf(this,e)}})}var Lb=Object.freeze({__proto__:null,getLuminance:ct,register:Cb,setLuminance:Jf});function Pb(t,e){t=x(t),e=x(e);let r=Math.max(ct(t),0),n=Math.max(ct(e),0);return n>r&&([r,n]=[n,r]),(r+.05)/(n+.05)}const Ob=.56,Nb=.57,Ib=.62,Db=.65,Zl=.022,_b=1.414,Rb=.1,Vb=5e-4,Hb=1.14,Yl=.027,Bb=1.14;function Jl(t){return t>=Zl?t:t+(Zl-t)**_b}function Vt(t){let e=t<0?-1:1,r=Math.abs(t);return e*Math.pow(r,2.4)}function Fb(t,e){e=x(e),t=x(t);let r,n,i,s,a,o;e=B(e,"srgb"),[s,a,o]=e.coords;let l=Vt(s)*.2126729+Vt(a)*.7151522+Vt(o)*.072175;t=B(t,"srgb"),[s,a,o]=t.coords;let c=Vt(s)*.2126729+Vt(a)*.7151522+Vt(o)*.072175,d=Jl(l),u=Jl(c),f=u>d;return Math.abs(u-d)<Vb?n=0:f?(r=u**Ob-d**Nb,n=r*Hb):(r=u**Db-d**Ib,n=r*Bb),Math.abs(n)<Rb?i=0:n>0?i=n-Yl:i=n+Yl,i*100}function Ub(t,e){t=x(t),e=x(e);let r=Math.max(ct(t),0),n=Math.max(ct(e),0);n>r&&([r,n]=[n,r]);let i=r+n;return i===0?0:(r-n)/i}const jb=5e4;function zb(t,e){t=x(t),e=x(e);let r=Math.max(ct(t),0),n=Math.max(ct(e),0);return n>r&&([r,n]=[n,r]),n===0?jb:(r-n)/n}function Wb(t,e){t=x(t),e=x(e);let r=fe(t,[he,"l"]),n=fe(e,[he,"l"]);return Math.abs(r-n)}const Gb=216/24389,Xl=24/116,$n=24389/27;let ss=re.D65;var Bs=new v({id:"lab-d65",name:"Lab D65",coords:{l:{refRange:[0,100],name:"Lightness"},a:{refRange:[-125,125]},b:{refRange:[-125,125]}},white:ss,base:J,fromBase(t){let r=t.map((n,i)=>n/ss[i]).map(n=>n>Gb?Math.cbrt(n):($n*n+16)/116);return[116*r[1]-16,500*(r[0]-r[1]),200*(r[1]-r[2])]},toBase(t){let e=[];return e[1]=(t[0]+16)/116,e[0]=t[1]/500+e[1],e[2]=e[1]-t[2]/200,[e[0]>Xl?Math.pow(e[0],3):(116*e[0]-16)/$n,t[0]>8?Math.pow((t[0]+16)/116,3):t[0]/$n,e[2]>Xl?Math.pow(e[2],3):(116*e[2]-16)/$n].map((n,i)=>n*ss[i])},formats:{"lab-d65":{coords:["<number> | <percentage>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}});const as=Math.pow(5,.5)*.5+.5;function qb(t,e){t=x(t),e=x(e);let r=fe(t,[Bs,"l"]),n=fe(e,[Bs,"l"]),i=Math.abs(Math.pow(r,as)-Math.pow(n,as)),s=Math.pow(i,1/as)*Math.SQRT2-40;return s<7.5?0:s}var Rn=Object.freeze({__proto__:null,contrastAPCA:Fb,contrastDeltaPhi:qb,contrastLstar:Wb,contrastMichelson:Ub,contrastWCAG21:Pb,contrastWeber:zb});function Kb(t,e,r={}){rn(r)&&(r={algorithm:r});let{algorithm:n,...i}=r;if(!n){let s=Object.keys(Rn).map(a=>a.replace(/^contrast/,"")).join(", ");throw new TypeError(`contrast() function needs a contrast algorithm. Please specify one of: ${s}`)}t=x(t),e=x(e);for(let s in Rn)if("contrast"+n.toLowerCase()===s.toLowerCase())return Rn[s](t,e,i);throw new TypeError(`Unknown contrast algorithm: ${n}`)}function Mi(t){let[e,r,n]=nn(t,J),i=e+15*r+3*n;return[4*e/i,9*r/i]}function Xf(t){let[e,r,n]=nn(t,J),i=e+r+n;return[e/i,r/i]}function Zb(t){Object.defineProperty(t.prototype,"uv",{get(){return Mi(this)}}),Object.defineProperty(t.prototype,"xy",{get(){return Xf(this)}})}var Yb=Object.freeze({__proto__:null,register:Zb,uv:Mi,xy:Xf});function xr(t,e,r={}){rn(r)&&(r={method:r});let{method:n=ge.deltaE,...i}=r;for(let s in ir)if("deltae"+n.toLowerCase()===s.toLowerCase())return ir[s](t,e,i);throw new TypeError(`Unknown deltaE method: ${n}`)}function Jb(t,e=.25){let n=[v.get("oklch","lch"),"l"];return Ke(t,n,i=>i*(1+e))}function Xb(t,e=.25){let n=[v.get("oklch","lch"),"l"];return Ke(t,n,i=>i*(1-e))}var Qb=Object.freeze({__proto__:null,darken:Xb,lighten:Jb});function Qf(t,e,r=.5,n={}){return[t,e]=[x(t),x(e)],it(r)==="object"&&([r,n]=[.5,r]),sn(t,e,n)(r)}function eh(t,e,r={}){let n;Fa(t)&&([n,r]=[t,e],[t,e]=n.rangeArgs.colors);let{maxDeltaE:i,deltaEMethod:s,steps:a=2,maxSteps:o=1e3,...l}=r;n||([t,e]=[x(t),x(e)],n=sn(t,e,l));let c=xr(t,e),d=i>0?Math.max(a,Math.ceil(c/i)+1):a,u=[];if(o!==void 0&&(d=Math.min(d,o)),d===1)u=[{p:.5,color:n(.5)}];else{let f=1/(d-1);u=Array.from({length:d},(h,m)=>{let g=m*f;return{p:g,color:n(g)}})}if(i>0){let f=u.reduce((h,m,g)=>{if(g===0)return 0;let y=xr(m.color,u[g-1].color,s);return Math.max(h,y)},0);for(;f>i;){f=0;for(let h=1;h<u.length&&u.length<o;h++){let m=u[h-1],g=u[h],y=(g.p+m.p)/2,b=n(y);f=Math.max(f,xr(b,m.color),xr(b,g.color)),u.splice(h,0,{p:y,color:n(y)}),h++}}}return u=u.map(f=>f.color),u}function sn(t,e,r={}){if(Fa(t)){let[l,c]=[t,e];return sn(...l.rangeArgs.colors,{...l.rangeArgs.options,...c})}let{space:n,outputSpace:i,progression:s,premultiplied:a}=r;t=x(t),e=x(e),t=nr(t),e=nr(e);let o={colors:[t,e],options:r};if(n?n=v.get(n):n=v.registry[ge.interpolationSpace]||t.space,i=i?v.get(i):n,t=B(t,n),e=B(e,n),t=lt(t),e=lt(e),n.coords.h&&n.coords.h.type==="angle"){let l=r.hue=r.hue||"shorter",c=[n,"h"],[d,u]=[fe(t,c),fe(e,c)];isNaN(d)&&!isNaN(u)?d=u:isNaN(u)&&!isNaN(d)&&(u=d),[d,u]=Oy(l,[d,u]),Ke(t,c,d),Ke(e,c,u)}return a&&(t.coords=t.coords.map(l=>l*t.alpha),e.coords=e.coords.map(l=>l*e.alpha)),Object.assign(l=>{l=s?s(l):l;let c=t.coords.map((f,h)=>{let m=e.coords[h];return jr(f,m,l)}),d=jr(t.alpha,e.alpha,l),u={space:n,coords:c,alpha:d};return a&&(u.coords=u.coords.map(f=>f/d)),i!==n&&(u=B(u,i)),u},{rangeArgs:o})}function Fa(t){return it(t)==="function"&&!!t.rangeArgs}ge.interpolationSpace="lab";function e1(t){t.defineFunction("mix",Qf,{returns:"color"}),t.defineFunction("range",sn,{returns:"function<color>"}),t.defineFunction("steps",eh,{returns:"array<color>"})}var t1=Object.freeze({__proto__:null,isRange:Fa,mix:Qf,range:sn,register:e1,steps:eh}),th=new v({id:"hsl",name:"HSL",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},l:{range:[0,100],name:"Lightness"}},base:sr,fromBase:t=>{let e=Math.max(...t),r=Math.min(...t),[n,i,s]=t,[a,o,l]=[NaN,0,(r+e)/2],c=e-r;if(c!==0){switch(o=l===0||l===1?0:(e-l)/Math.min(l,1-l),e){case n:a=(i-s)/c+(i<s?6:0);break;case i:a=(s-n)/c+2;break;case s:a=(n-i)/c+4}a=a*60}return o<0&&(a+=180,o=Math.abs(o)),a>=360&&(a-=360),[a,o*100,l*100]},toBase:t=>{let[e,r,n]=t;e=e%360,e<0&&(e+=360),r/=100,n/=100;function i(s){let a=(s+e/30)%12,o=r*Math.min(n,1-n);return n-o*Math.max(-1,Math.min(a-3,9-a,1))}return[i(0),i(8),i(4)]},formats:{hsl:{coords:["<number> | <angle>","<percentage>","<percentage>"]},hsla:{coords:["<number> | <angle>","<percentage>","<percentage>"],commas:!0,lastAlpha:!0}}}),rh=new v({id:"hsv",name:"HSV",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},v:{range:[0,100],name:"Value"}},base:th,fromBase(t){let[e,r,n]=t;r/=100,n/=100;let i=n+r*Math.min(n,1-n);return[e,i===0?0:200*(1-n/i),100*i]},toBase(t){let[e,r,n]=t;r/=100,n/=100;let i=n*(1-r/2);return[e,i===0||i===1?0:(n-i)/Math.min(i,1-i)*100,i*100]},formats:{color:{id:"--hsv",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}}),r1=new v({id:"hwb",name:"HWB",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},w:{range:[0,100],name:"Whiteness"},b:{range:[0,100],name:"Blackness"}},base:rh,fromBase(t){let[e,r,n]=t;return[e,n*(100-r)/100,100-n]},toBase(t){let[e,r,n]=t;r/=100,n/=100;let i=r+n;if(i>=1){let o=r/i;return[e,0,o*100]}let s=1-n,a=s===0?0:1-r/s;return[e,a*100,s*100]},formats:{hwb:{coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}});const n1=[[.5766690429101305,.1855582379065463,.1882286462349947],[.29734497525053605,.6273635662554661,.07529145849399788],[.02703136138641234,.07068885253582723,.9913375368376388]],i1=[[2.0415879038107465,-.5650069742788596,-.34473135077832956],[-.9692436362808795,1.8759675015077202,.04155505740717557],[.013444280632031142,-.11836239223101838,1.0151749943912054]];var nh=new ce({id:"a98rgb-linear",cssId:"--a98-rgb-linear",name:"Linear Adobe® 98 RGB compatible",white:"D65",toXYZ_M:n1,fromXYZ_M:i1}),s1=new ce({id:"a98rgb",cssId:"a98-rgb",name:"Adobe® 98 RGB compatible",base:nh,toBase:t=>t.map(e=>Math.pow(Math.abs(e),563/256)*Math.sign(e)),fromBase:t=>t.map(e=>Math.pow(Math.abs(e),256/563)*Math.sign(e))});const a1=[[.7977666449006423,.13518129740053308,.0313477341283922],[.2880748288194013,.711835234241873,8993693872564e-17],[0,0,.8251046025104602]],o1=[[1.3457868816471583,-.25557208737979464,-.05110186497554526],[-.5446307051249019,1.5082477428451468,.02052744743642139],[0,0,1.2119675456389452]];var ih=new ce({id:"prophoto-linear",cssId:"--prophoto-rgb-linear",name:"Linear ProPhoto",white:"D50",base:Va,toXYZ_M:a1,fromXYZ_M:o1});const l1=1/512,c1=16/512;var u1=new ce({id:"prophoto",cssId:"prophoto-rgb",name:"ProPhoto",base:ih,toBase(t){return t.map(e=>e<c1?e/16:e**1.8)},fromBase(t){return t.map(e=>e>=l1?e**(1/1.8):16*e)}}),d1=new v({id:"oklch",name:"Oklch",coords:{l:{refRange:[0,1],name:"Lightness"},c:{refRange:[0,.4],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},white:"D65",base:rr,fromBase(t){let[e,r,n]=t,i;const s=2e-4;return Math.abs(r)<s&&Math.abs(n)<s?i=NaN:i=Math.atan2(n,r)*180/Math.PI,[e,Math.sqrt(r**2+n**2),Ve(i)]},toBase(t){let[e,r,n]=t,i,s;return isNaN(n)?(i=0,s=0):(i=r*Math.cos(n*Math.PI/180),s=r*Math.sin(n*Math.PI/180)),[e,i,s]},formats:{oklch:{coords:["<percentage> | <number>","<number> | <percentage>[0,1]","<number> | <angle>"]}}});let sh=re.D65;const f1=216/24389,Ql=24389/27,[ec,tc]=Mi({space:J,coords:sh});var ah=new v({id:"luv",name:"Luv",coords:{l:{refRange:[0,100],name:"Lightness"},u:{refRange:[-215,215]},v:{refRange:[-215,215]}},white:sh,base:J,fromBase(t){let e=[q(t[0]),q(t[1]),q(t[2])],r=e[1],[n,i]=Mi({space:J,coords:e});if(!Number.isFinite(n)||!Number.isFinite(i))return[0,0,0];let s=r<=f1?Ql*r:116*Math.cbrt(r)-16;return[s,13*s*(n-ec),13*s*(i-tc)]},toBase(t){let[e,r,n]=t;if(e===0||at(e))return[0,0,0];r=q(r),n=q(n);let i=r/(13*e)+ec,s=n/(13*e)+tc,a=e<=8?e/Ql:Math.pow((e+16)/116,3);return[a*(9*i/(4*s)),a,a*((12-3*i-20*s)/(4*s))]},formats:{color:{id:"--luv",coords:["<number> | <percentage>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}}),Ua=new v({id:"lchuv",name:"LChuv",coords:{l:{refRange:[0,100],name:"Lightness"},c:{refRange:[0,220],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},base:ah,fromBase(t){let[e,r,n]=t,i;const s=.02;return Math.abs(r)<s&&Math.abs(n)<s?i=NaN:i=Math.atan2(n,r)*180/Math.PI,[e,Math.sqrt(r**2+n**2),Ve(i)]},toBase(t){let[e,r,n]=t;return r<0&&(r=0),isNaN(n)&&(n=0),[e,r*Math.cos(n*Math.PI/180),r*Math.sin(n*Math.PI/180)]},formats:{color:{id:"--lchuv",coords:["<number> | <percentage>","<number> | <percentage>","<number> | <angle>"]}}});const h1=216/24389,m1=24389/27,rc=Z[0][0],nc=Z[0][1],os=Z[0][2],ic=Z[1][0],sc=Z[1][1],ls=Z[1][2],ac=Z[2][0],oc=Z[2][1],cs=Z[2][2];function Ht(t,e,r){const n=e/(Math.sin(r)-t*Math.cos(r));return n<0?1/0:n}function Qn(t){const e=Math.pow(t+16,3)/1560896,r=e>h1?e:t/m1,n=r*(284517*rc-94839*os),i=r*(838422*os+769860*nc+731718*rc),s=r*(632260*os-126452*nc),a=r*(284517*ic-94839*ls),o=r*(838422*ls+769860*sc+731718*ic),l=r*(632260*ls-126452*sc),c=r*(284517*ac-94839*cs),d=r*(838422*cs+769860*oc+731718*ac),u=r*(632260*cs-126452*oc);return{r0s:n/s,r0i:i*t/s,r1s:n/(s+126452),r1i:(i-769860)*t/(s+126452),g0s:a/l,g0i:o*t/l,g1s:a/(l+126452),g1i:(o-769860)*t/(l+126452),b0s:c/u,b0i:d*t/u,b1s:c/(u+126452),b1i:(d-769860)*t/(u+126452)}}function lc(t,e){const r=e/360*Math.PI*2,n=Ht(t.r0s,t.r0i,r),i=Ht(t.r1s,t.r1i,r),s=Ht(t.g0s,t.g0i,r),a=Ht(t.g1s,t.g1i,r),o=Ht(t.b0s,t.b0i,r),l=Ht(t.b1s,t.b1i,r);return Math.min(n,i,s,a,o,l)}var p1=new v({id:"hsluv",name:"HSLuv",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},l:{range:[0,100],name:"Lightness"}},base:Ua,gamutSpace:sr,fromBase(t){let[e,r,n]=[q(t[0]),q(t[1]),q(t[2])],i;if(e>99.9999999)i=0,e=100;else if(e<1e-8)i=0,e=0;else{let s=Qn(e),a=lc(s,n);i=r/a*100}return[n,i,e]},toBase(t){let[e,r,n]=[q(t[0]),q(t[1]),q(t[2])],i;if(n>99.9999999)n=100,i=0;else if(n<1e-8)n=0,i=0;else{let s=Qn(n);i=lc(s,e)/100*r}return[n,i,e]},formats:{color:{id:"--hsluv",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}});Z[0][0];Z[0][1];Z[0][2];Z[1][0];Z[1][1];Z[1][2];Z[2][0];Z[2][1];Z[2][2];function Bt(t,e){return Math.abs(e)/Math.sqrt(Math.pow(t,2)+1)}function cc(t){let e=Bt(t.r0s,t.r0i),r=Bt(t.r1s,t.r1i),n=Bt(t.g0s,t.g0i),i=Bt(t.g1s,t.g1i),s=Bt(t.b0s,t.b0i),a=Bt(t.b1s,t.b1i);return Math.min(e,r,n,i,s,a)}var g1=new v({id:"hpluv",name:"HPLuv",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},l:{range:[0,100],name:"Lightness"}},base:Ua,gamutSpace:"self",fromBase(t){let[e,r,n]=[q(t[0]),q(t[1]),q(t[2])],i;if(e>99.9999999)i=0,e=100;else if(e<1e-8)i=0,e=0;else{let s=Qn(e),a=cc(s);i=r/a*100}return[n,i,e]},toBase(t){let[e,r,n]=[q(t[0]),q(t[1]),q(t[2])],i;if(n>99.9999999)n=100,i=0;else if(n<1e-8)n=0,i=0;else{let s=Qn(n);i=cc(s)/100*r}return[n,i,e]},formats:{color:{id:"--hpluv",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}});const uc=203,dc=2610/2**14,w1=2**14/2610,y1=2523/2**5,fc=2**5/2523,hc=3424/2**12,mc=2413/2**7,pc=2392/2**7;var b1=new ce({id:"rec2100pq",cssId:"rec2100-pq",name:"REC.2100-PQ",base:ki,toBase(t){return t.map(function(e){return(Math.max(e**fc-hc,0)/(mc-pc*e**fc))**w1*1e4/uc})},fromBase(t){return t.map(function(e){let r=Math.max(e*uc/1e4,0),n=hc+mc*r**dc,i=1+pc*r**dc;return(n/i)**y1})}});const gc=.17883277,wc=.28466892,yc=.55991073,us=3.7743;var v1=new ce({id:"rec2100hlg",cssId:"rec2100-hlg",name:"REC.2100-HLG",referred:"scene",base:ki,toBase(t){return t.map(function(e){return e<=.5?e**2/3*us:(Math.exp((e-yc)/gc)+wc)/12*us})},fromBase(t){return t.map(function(e){return e/=us,e<=1/12?Math.sqrt(3*e):gc*Math.log(12*e-wc)+yc})}});const oh={};ot.add("chromatic-adaptation-start",t=>{t.options.method&&(t.M=lh(t.W1,t.W2,t.options.method))});ot.add("chromatic-adaptation-end",t=>{t.M||(t.M=lh(t.W1,t.W2,t.options.method))});function xi({id:t,toCone_M:e,fromCone_M:r}){oh[t]=arguments[0]}function lh(t,e,r="Bradford"){let n=oh[r],[i,s,a]=F(n.toCone_M,t),[o,l,c]=F(n.toCone_M,e),d=[[o/i,0,0],[0,l/s,0],[0,0,c/a]],u=F(d,n.toCone_M);return F(n.fromCone_M,u)}xi({id:"von Kries",toCone_M:[[.40024,.7076,-.08081],[-.2263,1.16532,.0457],[0,0,.91822]],fromCone_M:[[1.8599363874558397,-1.1293816185800916,.21989740959619328],[.3611914362417676,.6388124632850422,-6370596838649899e-21],[0,0,1.0890636230968613]]});xi({id:"Bradford",toCone_M:[[.8951,.2664,-.1614],[-.7502,1.7135,.0367],[.0389,-.0685,1.0296]],fromCone_M:[[.9869929054667121,-.14705425642099013,.15996265166373122],[.4323052697233945,.5183602715367774,.049291228212855594],[-.00852866457517732,.04004282165408486,.96848669578755]]});xi({id:"CAT02",toCone_M:[[.7328,.4296,-.1624],[-.7036,1.6975,.0061],[.003,.0136,.9834]],fromCone_M:[[1.0961238208355142,-.27886900021828726,.18274517938277307],[.4543690419753592,.4735331543074117,.07209780371722911],[-.009627608738429355,-.00569803121611342,1.0153256399545427]]});xi({id:"CAT16",toCone_M:[[.401288,.650173,-.051461],[-.250268,1.204414,.045854],[-.002079,.048952,.953127]],fromCone_M:[[1.862067855087233,-1.0112546305316845,.14918677544445172],[.3875265432361372,.6214474419314753,-.008973985167612521],[-.01584149884933386,-.03412293802851557,1.0499644368778496]]});Object.assign(re,{A:[1.0985,1,.35585],C:[.98074,1,1.18232],D55:[.95682,1,.92149],D75:[.94972,1,1.22638],E:[1,1,1],F2:[.99186,1,.67393],F7:[.95041,1,1.08747],F11:[1.00962,1,.6435]});re.ACES=[.32168/.33767,1,(1-.32168-.33767)/.33767];const $1=[[.6624541811085053,.13400420645643313,.1561876870049078],[.27222871678091454,.6740817658111484,.05368951740793705],[-.005574649490394108,.004060733528982826,1.0103391003129971]],E1=[[1.6410233796943257,-.32480329418479,-.23642469523761225],[-.6636628587229829,1.6153315916573379,.016756347685530137],[.011721894328375376,-.008284441996237409,.9883948585390215]];var ch=new ce({id:"acescg",cssId:"--acescg",name:"ACEScg",coords:{r:{range:[0,65504],name:"Red"},g:{range:[0,65504],name:"Green"},b:{range:[0,65504],name:"Blue"}},referred:"scene",white:re.ACES,toXYZ_M:$1,fromXYZ_M:E1});const En=2**-16,ds=-.35828683,Tn=(Math.log2(65504)+9.72)/17.52;var T1=new ce({id:"acescc",cssId:"--acescc",name:"ACEScc",coords:{r:{range:[ds,Tn],name:"Red"},g:{range:[ds,Tn],name:"Green"},b:{range:[ds,Tn],name:"Blue"}},referred:"scene",base:ch,toBase(t){const e=-.3013698630136986;return t.map(function(r){return r<=e?(2**(r*17.52-9.72)-En)*2:r<Tn?2**(r*17.52-9.72):65504})},fromBase(t){return t.map(function(e){return e<=0?(Math.log2(En)+9.72)/17.52:e<En?(Math.log2(En+e*.5)+9.72)/17.52:(Math.log2(e)+9.72)/17.52})}}),bc=Object.freeze({__proto__:null,A98RGB:s1,A98RGB_Linear:nh,ACEScc:T1,ACEScg:ch,CAM16_JMh:db,HCT:Wr,HPLuv:g1,HSL:th,HSLuv:p1,HSV:rh,HWB:r1,ICTCP:Rs,JzCzHz:_s,Jzazbz:Rf,LCH:zr,LCHuv:Ua,Lab:he,Lab_D65:Bs,Luv:ah,OKLCH:d1,OKLab:rr,P3:Yf,P3_Linear:Kf,ProPhoto:u1,ProPhoto_Linear:ih,REC_2020:qf,REC_2020_Linear:ki,REC_2100_HLG:v1,REC_2100_PQ:b1,XYZ_ABS_D65:Ha,XYZ_D50:Va,XYZ_D65:J,sRGB:sr,sRGB_Linear:Zf});class C{constructor(...e){let r;e.length===1&&(r=x(e[0]));let n,i,s;r?(n=r.space||r.spaceId,i=r.coords,s=r.alpha):[n,i,s]=e,Object.defineProperty(this,"space",{value:v.get(n),writable:!1,enumerable:!0,configurable:!0}),this.coords=i?i.slice():[0,0,0],this.alpha=s>1||s===void 0?1:s<0?0:s;for(let a=0;a<this.coords.length;a++)this.coords[a]==="NaN"&&(this.coords[a]=NaN);for(let a in this.space.coords)Object.defineProperty(this,a,{get:()=>this.get(a),set:o=>this.set(a,o)})}get spaceId(){return this.space.id}clone(){return new C(this.space,this.coords,this.alpha)}toJSON(){return{spaceId:this.spaceId,coords:this.coords,alpha:this.alpha}}display(...e){let r=xb(this,...e);return r.color=new C(r.color),r}static get(e,...r){return e instanceof C?e:new C(e,...r)}static defineFunction(e,r,n=r){let{instance:i=!0,returns:s}=n,a=function(...o){let l=r(...o);if(s==="color")l=C.get(l);else if(s==="function<color>"){let c=l;l=function(...d){let u=c(...d);return C.get(u)},Object.assign(l,c)}else s==="array<color>"&&(l=l.map(c=>C.get(c)));return l};e in C||(C[e]=a),i&&(C.prototype[e]=function(...o){return a(this,...o)})}static defineFunctions(e){for(let r in e)C.defineFunction(r,e[r],e[r])}static extend(e){if(e.register)e.register(C);else for(let r in e)C.defineFunction(r,e[r])}}C.defineFunctions({get:fe,getAll:nn,set:Ke,setAll:Ra,to:B,equals:Ab,inGamut:St,toGamut:lt,distance:_f,toString:Ir});Object.assign(C,{util:My,hooks:ot,WHITES:re,Space:v,spaces:v.registry,parse:If,defaults:ge});for(let t of Object.keys(bc))v.register(bc[t]);for(let t in v.registry)Fs(t,v.registry[t]);ot.add("colorspace-init-end",t=>{var e;Fs(t.id,t),(e=t.aliases)==null||e.forEach(r=>{Fs(r,t)})});function Fs(t,e){let r=t.replace(/-/g,"_");Object.defineProperty(C.prototype,r,{get(){let n=this.getAll(t);return typeof Proxy>"u"?n:new Proxy(n,{has:(i,s)=>{try{return v.resolveCoord([e,s]),!0}catch{}return Reflect.has(i,s)},get:(i,s,a)=>{if(s&&typeof s!="symbol"&&!(s in i)){let{index:o}=v.resolveCoord([e,s]);if(o>=0)return i[o]}return Reflect.get(i,s,a)},set:(i,s,a,o)=>{if(s&&typeof s!="symbol"&&!(s in i)||s>=0){let{index:l}=v.resolveCoord([e,s]);if(l>=0)return i[l]=a,this.setAll(t,i),!0}return Reflect.set(i,s,a,o)}})},set(n){this.setAll(t,n)},configurable:!0,enumerable:!0})}C.extend(ir);C.extend({deltaE:xr});Object.assign(C,{deltaEMethods:ir});C.extend(Qb);C.extend({contrast:Kb});C.extend(Yb);C.extend(Lb);C.extend(t1);C.extend(Rn);function uh(t){return st(t,(e,r)=>r instanceof C?de(r.toString({format:"hex"})):uh(r))}const S1="dodgerblue";function Us(t){const e=Math.abs(t.contrast("white","APCA")),r=Math.abs(t.contrast("black","APCA"));return e>r?"white":"black"}function fs({background:t,foreground:e}){return{background:t??new C(Us(e)),foreground:e??new C(Us(t))}}var ei;(function(t){t.Dark="dark",t.Light="light"})(ei||(ei={}));function k1(t){return t==="black"?"white":"black"}const M1={black:{foregroundFaint1:new C("#ccc"),foregroundFaint2:new C("#eee")},white:{foregroundFaint1:new C("#ccc"),foregroundFaint2:new C("#eee")}},x1={black:{backgroundFaint1:new C("#666"),backgroundFaint2:new C("#444")},white:{backgroundFaint1:new C("#ccc"),backgroundFaint2:new C("#fafafa")}};function vc({themeColor:t=S1,themeStyle:e=ei.Light}={}){const r=new C(t),n=new C(e===ei.Dark?"black":"white"),i=Us(n),s=new C(i),a={nav:{hover:fs({background:r.clone().set({"hsl.l":93})}),active:fs({background:r.clone().set({"hsl.l":90})}),selected:fs({background:r.clone().set({"hsl.l":85})})},accent:{icon:r.clone().set({"hsl.l":40})},page:{background:n,...x1[k1(i)],foreground:s,...M1[i]}};return uh(a)}const ti=Ma()("element-book-change-route"),$c="vira-",{defineElement:Ye,defineElementNoInputs:e5}=cf({assertInputs:t=>{if(!t.tagName.startsWith($c))throw new Error(`Tag name should start with '${$c}' but got '${t.tagName}'`)}}),S=ft({"vira-icon-stroke-color":"currentColor","vira-icon-fill-color":"none","vira-icon-stroke-width":"1px"});function be({name:t,svgTemplate:e}){return{name:t,svgTemplate:e}}const A1=be({name:"Check24Icon",svgTemplate:p`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="m17 8.5-7 8-3-3"
                fill="none"
                stroke=${S["vira-icon-stroke-color"].value}
                stroke-width=${S["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),Re=ft({"vira-form-input-radius":"8px"}),an=$`
    pointer-events: none;
    opacity: 0.3;
    cursor: not-allowed;
`,xe=ft({"vira-extended-animation-duration":"1.2s","vira-pretty-animation-duration":"300ms","vira-interaction-animation-duration":"84ms"}),Ct=ft({"vira-focus-outline-color":"#59b1ff","vira-focus-outline-border-radius":$`calc(${Re["vira-form-input-radius"].value} + 4px)`});function ja({selector:t,elementBorderSize:e,outlineGap:r=2,outlineWidth:n=2}){const i=de(Tm(n+r+e));return $`
        ${de(t)}::after {
            content: '';
            top: calc(${i} * -1);
            left: calc(${i} * -1);
            position: absolute;
            width: calc(100% + calc(${i} * 2));
            height: calc(100% + calc(${i} * 2));
            box-sizing: border-box;
            pointer-events: none;
            border: ${n}px solid ${Ct["vira-focus-outline-color"].value};
            border-radius: ${Ct["vira-focus-outline-border-radius"].value};
            z-index: 100;
        }
    `}const rt=ft({"vira-form-border-color":"#cccccc","vira-form-background-color":"white","vira-form-foreground-color":"black","vira-form-focus-color":Ct["vira-focus-outline-color"].value,"vira-form-selection-hover-background-color":"#d2eaff","vira-form-selection-hover-foreground-color":"black"}),C1=$`
    padding: 0;
    margin: 0;
`,tt=$`
    ${C1};
    cursor: unset;
    background: none;
    border: none;
    font: inherit;
    color: inherit;
    text-transform: inherit;
    text-decoration: inherit;
    -webkit-tap-highlight-color: transparent;
`,Ec=$`#e2e2e2`,dh={menuShadow:$`
        filter: drop-shadow(0px 5px 5px ${Ec});
        /*
           This helps force the drop shadow to re-render when the element moves or the page changes.
       */
        will-change: filter;
    `,menuShadowReversed:$`
        filter: drop-shadow(0px -5px 5px ${Ec});
        /*
           This helps force the drop shadow to re-render when the element moves or the page changes.
       */
        will-change: filter;
    `},Ge=$`
    /* iOS Safari */
    -webkit-touch-callout: none;
    /* Safari */
    -webkit-user-select: none;
    /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */
    user-select: none;
`,R=Ye()({tagName:"vira-icon",hostClasses:{"vira-icon-fit-container":({inputs:t})=>!!t.fitContainer},styles:({hostClasses:t})=>$`
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

        ${t["vira-icon-fit-container"].selector} svg {
            height: 100%;
            width: 100%;
        }
    `,renderCallback({inputs:t}){return t.icon?t.icon.svgTemplate:""}}),hs=Ye()({tagName:"vira-dropdown-item",hostClasses:{"vira-dropdown-item-selected":({inputs:t})=>t.selected},styles:({hostClasses:t})=>$`
        :host {
            display: flex;
            ${Ge};
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

        ${t["vira-dropdown-item-selected"].selector} ${R} {
            opacity: 1;
        }

        /*
            The check icon looks centered when it has a border.
            However, it does not have a border here.
        */
        ${R} {
            transition: opacity
                ${xe["vira-interaction-animation-duration"].value};
            opacity: 0;
            margin-top: -4px;
            margin-right: -2px;
            margin-left: 2px;
        }

        .dropdown-wrapper:not(.reverse-direction) .option:last-of-type {
            border-radius: 0 0 ${Re["vira-form-input-radius"].value}
                ${Re["vira-form-input-radius"].value};
        }

        .dropdown-wrapper.reverse-direction .option:first-of-type {
            border-radius: ${Re["vira-form-input-radius"].value}
                ${Re["vira-form-input-radius"].value} 0 0;
        }
    `,renderCallback({inputs:t}){return p`
            <div class="option">
                <${R.assign({icon:A1})}></${R}>
                <slot>${t.label}</slot>
            </div>
        `}}),L1=[(t,e)=>e in t,(t,e)=>e in t.constructor.prototype];function fh(t,e){return t?L1.some(r=>{try{return r(t,e)}catch{return!1}}):!1}var Tc;(function(t){t.Upper="upper",t.Lower="lower"})(Tc||(Tc={}));function Sc(t){const e=Number(t);if(isNaN(e))throw new Error(`Cannot convert given input to a number: ${t}`);return e}function ms({max:t,min:e,value:r}){return r>t?e:r<e?t:r}var kc;(function(t){t.FirstThenWait="first-then-wait",t.AfterWait="after-wait"})(kc||(kc={}));function P1(t){try{return JSON.parse(JSON.stringify(t))}catch(e){throw console.error("Failed to JSON copy for",t),e}}function hh(t,e){try{return O1(t,e),!0}catch{return!1}}function O1(t,e,r){if(t.length<e)throw new Error(r?`'${r}' is not at least '${e}' in length.`:`Array is not at least '${e}' in length.`)}function N1(){return globalThis.crypto?globalThis.crypto:require("crypto").webcrypto}N1();function I1(t,e){return[t,e].filter(r=>r!==void 0).join(",")||""}function D1(t){const e=t.split(",");return hh(e,2)?{type:"2d",xCord:Sc(e[0]),yCord:Sc(e[1])}:{type:"1d"}}function _1(t,e){Object.entries(e).forEach(([r,n])=>{k(n,"boolean")&&n?t.setAttribute(r,""):k(n,"boolean")&&!n||n==null?t.removeAttribute(r):t.setAttribute(r,String(n))})}const R1=dt(class extends Ze{constructor(t){super(t),Object.defineProperty(this,"element",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"lastKey",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.element=$i(t,"modifyElement")}render(t,e){return t!==this.lastKey&&(e(this.element),this.lastKey=t),pe}}),Zt={name:"data-nav",selector(t){return t===""?`[${Zt.name}]`:`[${Zt.name}*="${String(t).replace(/"/g,"'")}"]`},css(t){return $`
            ${de(Zt.selector(t))}
        `}},jt="nav-activated",js={selector:{click(t){return`${t}.${jt}`},selected(t){return`${t}:focus`}},css:{click(t){return $`
                ${de(js.selector.click(t))}
            `},selected(t){return $`
                ${de(js.selector.selected(t))}
            `}}},V1={activateKeys:["Space","Return","Enter"]};function H1(){mh=P1(V1)}let mh;H1();function Mc(t){return mh.activateKeys.some(e=>{const r=e.toLowerCase();return r===t.key.toLowerCase()||r===t.code.toLowerCase()})}function B1(t,e){const r=I1(t,e);return R1(`${t}-${e}`,n=>{const i=n.hasAttribute("tabindex")?{}:{tabindex:0},s={[Zt.name]:r,...i};ea(n,HTMLElement),_1(n,s),n.style.getPropertyValue("cursor")||n.style.setProperty("cursor","pointer"),n.addEventListener("mousemove",a=>{a.target===n&&n.focus()},!0),n.addEventListener("mouseleave",a=>{a.target===n&&n.blur()},!0),n.addEventListener("mousedown",a=>{a.target===n&&n.classList.add(jt)},!0),n.addEventListener("mouseup",a=>{a.target===n&&n.classList.remove(jt)},!0),n.addEventListener("blur",()=>{n.classList.remove(jt)},!0),n.addEventListener("keydown",a=>{a.target===n&&Mc(a)&&n.classList.add(jt)},!0),n.addEventListener("keyup",a=>{a.target===n&&Mc(a)&&n.classList.remove(jt)},!0)})}function F1(t,e){return ph([],t,e)}function ph(t,e,r){return!e||e.type==="child"?!1:e.type==="1d"?xc(e.children,e,0,t,r):e.children.some((n,i)=>xc(n,e,i,t,r))}function xc(t,e,r,n,i){return t.some((s,a)=>{const o=fh(e,"isRoot")?n:n.concat(e);return i(o,s,{x:a,y:r})?!0:ph(o,s,i)})}function Ai(t){if(!t)return;let e,r,n;F1(t,(s,a,o)=>a.element.matches(":focus")?(e=s,r=a,n=o,!0):!1);const i=e?(e==null?void 0:e.slice(-1)[0])||t:void 0;if(!(!r||!i||!n))return{node:r,parent:i,coords:n}}function ri(t){t.scrollIntoView({behavior:"smooth",inline:"center",block:"center"}),t.focus()}function U1(t){var n;if(!t)return{success:!1,reason:"no nav tree"};const e=Ai(t);if(!e)return{success:!1,reason:"no focused node to enter into"};if(e.node.type==="child"||!e.node.children.length)return{success:!1,reason:"no children to enter into"};const r=e.node.type==="1d"?e.node.children[0]:(n=e.node.children[0])==null?void 0:n[0];return r?(ri(r.element),{success:!0,defaulted:!1,wrapped:!1,newElement:r.element}):{success:!1,reason:"failed to find first child to enter into"}}function j1(t){if(!t)return{success:!1,reason:"no nav tree"};const e=Ai(t);if(!e)return{success:!1,reason:"no focused node to exit out of"};if(fh(e.parent,"isRoot"))return{success:!1,reason:"at top level nav already, nothing to exit to"};const r=e.parent;return ri(r.element),{success:!0,defaulted:!1,wrapped:!1,newElement:r.element}}function z1(t){var r;return[...t.children,...((r=t.shadowRoot)==null?void 0:r.children)??[]]}function gh(t){const e=[];return z1(t).forEach(r=>{if(!(r instanceof HTMLElement))return;const n=gh(r),i=r.hasAttribute(Zt.name)?D1(r.getAttribute(Zt.name)||""):void 0;if(!i){e.push(...n);return}e.push({children:n,element:r,navValue:i})}),e}function W1(t){const e=gh(t);return wh(e)}function wh(t){if(!hh(t,1))return;const e=t[0].navValue.type,r={type:e,children:[],isRoot:!0};return t.forEach(n=>{const i=n.children.length?wh(n.children):void 0,s=i?{element:n.element,children:i.children,type:i.type}:{element:n.element,type:"child"};if(n.navValue.type==="2d"&&r.type==="2d"){r.children[n.navValue.xCord]||(r.children[n.navValue.xCord]=[]);const a=r.children[n.navValue.xCord];if(a[n.navValue.yCord])throw new Error(`Parent already has child at ${n.navValue.xCord},${n.navValue.yCord}`);a[n.navValue.yCord]=s}else if(n.navValue.type==="1d"&&r.type==="1d")r.children.push(s);else if(e!==n.navValue.type){const a=new Error("child nav does not match parent nav type");throw console.error(a,n),a}}),r}function Ac(t,e){return t>e}function Cc(t,e){return t<e}var Ee;(function(t){t.Up="up",t.Down="down",t.Left="left",t.Right="right"})(Ee||(Ee={}));function G1(t,e,r){var o;if(!t)return{success:!1,reason:"no nav tree"};const n=Ai(t);if(!n){const l=t.type==="1d"?t.children[0]:(o=t.children[0])==null?void 0:o[0];return l?(ri(l.element),{success:!0,wrapped:!1,defaulted:!0,newElement:l.element}):{success:!1,reason:"no default element to focus"}}const{nextNode:i,requiresWrapping:s}=q1(n.parent,e,n),a=r?!0:!s;return(i==null?void 0:i.element)===n.node.element?{success:!1,reason:"no other nodes to navigate to"}:i&&a?(ri(i.element),{success:!0,defaulted:!1,newElement:i.element,wrapped:s}):i?a?{success:!1,reason:"no conditions matched"}:{success:!1,reason:"not allowed to wrap"}:{success:!1,reason:"failed to find node to focus"}}function q1(t,e,r){var i,s;if(e===Ee.Down||e===Ee.Up){const a=e===Ee.Down?Cc:Ac,o=e===Ee.Down?1:-1,l=t.type==="1d"?0:ms({value:r.coords.y+o,min:0,max:t.children.length-1}),c=t.type==="2d"?t.children[l]:void 0,d={x:t.type==="1d"?ms({value:r.coords.x+o,min:0,max:t.children.length-1}):c&&r.coords.x>=c.length?c.length-1:r.coords.x,y:l},u=t.type==="1d"?t.children[d.x]:(i=t.children[d.y])==null?void 0:i[d.x],f=t.type==="1d"?a(d.x,r.coords.x):a(d.y,r.coords.y);return{nextNode:u,requiresWrapping:f}}else{const a=e===Ee.Right?Cc:Ac,o=e===Ee.Right?1:-1,l=t.type==="1d"?t.children:t.children[r.coords.y];im(l,`No current row found at y index: '${r.coords.y}'`);const c={x:ms({value:r.coords.x+o,min:0,max:l.length-1}),y:r.coords.y},d=a(c.x,r.coords.x);return{nextNode:t.type==="1d"?t.children[c.x]:(s=t.children[c.y])==null?void 0:s[c.x],requiresWrapping:d}}}class yh{constructor(e){Object.defineProperty(this,"rootElement",{enumerable:!0,configurable:!0,writable:!0,value:e})}getCurrentlyFocused(){return Ai(this.buildNavTree())}buildNavTree(){return W1(this.rootElement)}navigate({direction:e,allowWrapping:r}){return G1(this.buildNavTree(),e,r)}enterInto(){return U1(this.buildNavTree())}exitOutOf(){return j1(this.buildNavTree())}navigatePibling(e){const r=this.exitOutOf();if(!r.success)return r;const n=this.navigate(e);if(!n.success)return n;const i=this.enterInto();return i.success?i:n}}const K1={option:"dropdown-option"},Sn=Ye()({tagName:"vira-dropdown-options",events:{selectionChange:ne()},styles:$`
        :host {
            display: flex;
            flex-direction: column;

            pointer-events: auto;
            width: 100%;
            max-height: 100%;
            overflow-y: auto;
            z-index: 99;
            border-radius: ${Re["vira-form-input-radius"].value};
            border-top-left-radius: 0;
            border-top-right-radius: 0;
            background-color: ${rt["vira-form-background-color"].value};
            border: 1px solid ${rt["vira-form-border-color"].value};
            color: ${rt["vira-form-foreground-color"].value};
            ${dh.menuShadow}
        }

        .dropdown-item {
            background-color: white;
            outline: none;
        }

        ${js.css.selected(".dropdown-item:not(.disabled)")} {
            background-color: ${rt["vira-form-selection-hover-background-color"].value};
            outline: none;
        }

        ${hs} {
            pointer-events: none;
        }

        .dropdown-item.disabled {
            ${an};
            pointer-events: auto;
        }
    `,renderCallback({inputs:t,dispatch:e,events:r}){const n=t.options.map(i=>{const s=i.template||p`
                    <${hs.assign({label:i.label,selected:t.selectedOptions.includes(i)})}></${hs}>
                `;return p`
                <div
                    class="dropdown-item ${ze({disabled:!!i.disabled})}"
                    ${kr(K1.option)}
                    title=${Zd(i.hoverText||void 0)}
                    role="option"
                    ${i.disabled?N:B1()}
                    ${_("mousedown",a=>{a.stopPropagation()})}
                    ${_("mouseup",a=>{a.stopPropagation(),i.disabled||e(new r.selectionChange(i))})}
                >
                    ${s}
                </div>
            `});return p`
            <slot>${n}</slot>
        `}}),Z1=be({name:"ChevronUp24Icon",svgTemplate:p`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${S["vira-icon-stroke-color"].value}
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${S["vira-icon-stroke-width"].value}
                d="M6 15 L12 9 18 15"
            />
        </svg>
    `}),Y1=be({name:"CloseX24Icon",svgTemplate:p`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <circle
                cx="12"
                cy="12"
                r="8"
                fill=${S["vira-icon-fill-color"].value}
                stroke=${S["vira-icon-stroke-color"].value}
                stroke-width=${S["vira-icon-stroke-width"].value}
            />
            <path
                d="M9 8.5l6 7m0 -7l-6 7"
                fill="none"
                stroke=${S["vira-icon-stroke-color"].value}
                stroke-width=${S["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),J1=be({name:"Element16Icon",svgTemplate:p`
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
            <path
                d="M4 5 1 8l3 3m8-6 3 3-3 3m-5 0 2-6"
                fill="none"
                stroke=${S["vira-icon-stroke-color"].value}
                stroke-width=${S["vira-icon-stroke-width"].value}
            />
        </svg>
    `});be({name:"Element24Icon",svgTemplate:p`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="m7 7-5 5 5 5M17 7l5 5-5 5m-6 0 2-10"
                fill="none"
                stroke=${S["vira-icon-stroke-color"].value}
                stroke-width=${S["vira-icon-stroke-width"].value}
            />
        </svg>
    `});const X1=be({name:"EyeClosed24Icon",svgTemplate:p`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill=${S["vira-icon-fill-color"].value}
            stroke=${S["vira-icon-stroke-color"].value}
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${S["vira-icon-stroke-width"].value}
                d="M4 20 20 4M18.4 8.54C20 10.28 21 12 21 12s-4.03 7-9 7a6.53 6.53 0 0 1-3.16-.9M5.6 15.46C4 13.72 3 12 3 12s4.03-7 9-7c1.11 0 2.18.35 3.16.9"
            />
        </svg>
    `}),Q1=be({name:"EyeOpen24Icon",svgTemplate:p`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill=${S["vira-icon-fill-color"].value}
            stroke=${S["vira-icon-stroke-color"].value}
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${S["vira-icon-stroke-width"].value}
                d="M12 5c5 0 9 7 9 7s-4 7-9 7-9-7-9-7 4-7 9-7Zm0 4a3 3 0 1 1 0 6 3 3 0 0 1 0-6Z"
            />
        </svg>
    `}),ev=be({name:"Loader24Icon",svgTemplate:p`
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
                stroke=${S["vira-icon-stroke-color"].value}
                stroke-width=${S["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),tv=$`
    @keyframes loader-animated-spin {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }

    svg {
        animation: ${xe["vira-extended-animation-duration"].value} linear
            loader-animated-spin infinite;
    }
`,bh=be({name:"LoaderAnimated24Icon",svgTemplate:p`
        <style>
            ${tv}
        </style>
        ${ev.svgTemplate}
    `}),rv=be({name:"Options24Icon",svgTemplate:p`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <g
                fill=${S["vira-icon-fill-color"].value}
                stroke=${S["vira-icon-stroke-color"].value}
                stroke-width=${S["vira-icon-stroke-width"].value}
            >
                <circle cx="9.5" cy="5.5" r="2.5" />
                <circle cx="16.5" cy="12.5" r="2.5" />
                <circle cx="8.5" cy="18.5" r="2.5" />
            </g>
            <path
                d="M3 5.5h3.5m5 0h8.5M3 12.5h11m5 0h2M3 18.5h3m5 0h10"
                fill="none"
                stroke="${S["vira-icon-stroke-color"].value}"
                stroke-width=${S["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),nv=be({name:"StatusFailure24Icon",svgTemplate:p`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <circle
                cx="12"
                cy="12"
                r="10"
                fill=${S["vira-icon-fill-color"].value}
                stroke=${S["vira-icon-stroke-color"].value}
                stroke-width=${S["vira-icon-stroke-width"].value}
            />
            <path
                d="M8 16.5 L16 7.5 M8 7.5 L16 16.5"
                fill="none"
                stroke=${S["vira-icon-stroke-color"].value}
                stroke-width=${S["vira-icon-stroke-width"].value}
            />
        </svg>
    `});be({name:"StatusInProgress24Icon",svgTemplate:p`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <circle
                cx="12"
                cy="12"
                r="10"
                fill=${S["vira-icon-fill-color"].value}
                stroke=${S["vira-icon-stroke-color"].value}
                stroke-width=${S["vira-icon-stroke-width"].value}
            />
            <circle
                cx="7"
                cy="12"
                r="1"
                fill=${S["vira-icon-stroke-color"].value}
                stroke=${S["vira-icon-stroke-color"].value}
                stroke-width="calc(${S["vira-icon-stroke-width"].value} - 1px)"
            />
            <circle
                cx="12"
                cy="12"
                r="1"
                fill=${S["vira-icon-stroke-color"].value}
                stroke=${S["vira-icon-stroke-color"].value}
                stroke-width="calc(${S["vira-icon-stroke-width"].value} - 1px)"
            />
            <circle
                cx="17"
                cy="12"
                r="1"
                fill=${S["vira-icon-stroke-color"].value}
                stroke=${S["vira-icon-stroke-color"].value}
                stroke-width="calc(${S["vira-icon-stroke-width"].value} - 1px)"
            />
        </svg>
    `});be({name:"StatusSuccess24Icon",svgTemplate:p`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <circle
                cx="12"
                cy="12"
                r="10"
                fill=${S["vira-icon-fill-color"].value}
                stroke=${S["vira-icon-stroke-color"].value}
                stroke-width=${S["vira-icon-stroke-width"].value}
            />
            <path
                d="m17 8.5-7 8-3-3"
                fill="none"
                stroke=${S["vira-icon-stroke-color"].value}
                stroke-width=${S["vira-icon-stroke-width"].value}
            />
        </svg>
    `});class iv extends Rd{constructor(){super({defaultValue:document.hidden,equalityCheck:ta}),globalThis.addEventListener("visibilitychange",r=>this.updateVisibility(r));const e=r=>this.updateVisibility(r);globalThis.onpageshow=e,globalThis.onpagehide=e,globalThis.onfocus=e,globalThis.onblur=e}updateVisibility(e){const r=av.includes(e.type),n=sv.includes(e.type),i=r?!0:n?!1:document.hasFocus()||!document.hidden;this.setValue(i)}}const sv=["blur","focusout","pagehide"],av=["focus","focusin","pageshow"],ov=new iv;function lv(t,e){return ov.listen(t,e)}const Lc={top:0,left:0,right:0,bottom:0};class vh extends Kr("hide-pop-up"){}class $h extends we()("nav-select"){}class cv{constructor(e){Object.defineProperty(this,"listenTarget",{enumerable:!0,configurable:!0,writable:!0,value:new na}),Object.defineProperty(this,"options",{enumerable:!0,configurable:!0,writable:!0,value:{minDownSpace:200,verticalDiffThreshold:20,supportNavigation:!0}}),Object.defineProperty(this,"cleanupCallbacks",{enumerable:!0,configurable:!0,writable:!0,value:[]}),Object.defineProperty(this,"lastRootElement",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.options={...this.options,...e}}attachGlobalListeners(e){const r=new yh(e);this.cleanupCallbacks=[lv(!1,n=>{n||this.removePopUp()}),yt("mousedown",n=>{this.lastRootElement&&n.composedPath().includes(this.lastRootElement)||this.removePopUp()},{passive:!0}),yt("keydown",n=>{const i=n.code;if(i==="Escape")this.removePopUp();else if(this.options.supportNavigation){if(i==="ArrowDown")n.stopImmediatePropagation(),n.preventDefault(),r.navigate({direction:Ee.Down,allowWrapping:!1});else if(i==="ArrowUp")n.stopImmediatePropagation(),n.preventDefault(),r.navigate({direction:Ee.Up,allowWrapping:!1});else if(i==="ArrowLeft")n.stopImmediatePropagation(),n.preventDefault(),r.navigate({direction:Ee.Left,allowWrapping:!1});else if(i==="ArrowRight")n.stopImmediatePropagation(),n.preventDefault(),r.navigate({direction:Ee.Right,allowWrapping:!1});else if(i==="Enter"||i==="Return"){const s=r.getCurrentlyFocused();s&&(r.enterInto(),this.listenTarget.dispatch(new $h({detail:s.coords})),n.stopImmediatePropagation(),n.preventDefault())}}})]}listen(e,r,n){return this.listenTarget.listen(e,r,n)}removePopUp(){this.cleanupCallbacks.forEach(e=>e()),this.listenTarget.dispatch(new vh)}showPopUp(e,r){this.lastRootElement=e;const n={...this.options,...r},i=Nm(e);ea(i,HTMLElement);const s=e.getBoundingClientRect(),a=i.getBoundingClientRect(),o=i.offsetWidth-i.clientWidth,l=i.offsetHeight-i.clientHeight,c=i===document.body?{top:0,left:0,right:globalThis.innerWidth,bottom:globalThis.innerHeight}:{top:a.top,left:a.left,right:a.right-o,bottom:a.bottom-l},d=st(Lc,h=>s[h]),u=st(Lc,h=>{const m=c[h],g=d[h];return Math.abs(m-g)}),f=u.top>u.bottom+n.verticalDiffThreshold&&u.bottom<n.minDownSpace;return this.attachGlobalListeners(e),{popDown:!f,positions:{container:c,root:d,diff:u}}}destroy(){this.removePopUp(),this.listenTarget.destroy()}}function uv({selected:t,options:e,isMultiSelect:r}){if(t.length&&e.length){const n=e.filter(i=>t.includes(i.id));return n.length>1&&!r?(console.error(`${fv.tagName} has multiple selections but \`isMultiSelect\` is not \`true\`. Truncating to the first selection.`),n.slice(0,1)):n}else return[]}function dv(t){const e=new Set,r=[];if(t.forEach(n=>{e.has(n.id)?r.push(n.id):e.add(n.id)}),r.length)throw new Error(`Duplicate option ids were given to ViraDropdown: ${Kh(r)}`)}function Pc(t,e,r){return r?e.includes(t)?e.filter(n=>n!==t):[...e,t]:[t]}function Oc({open:t,emitEvent:e},{updateState:r,popUpManager:n,dispatch:i,host:s}){t?r({showPopUpResult:n.showPopUp(s)}):n.removePopUp(),e&&i(t)}const kn={trigger:"dropdown-trigger",icon:"dropdown-icon",prefix:"dropdown-prefix",options:"dropdown-options"},fv=Ye()({tagName:"vira-dropdown",hostClasses:{"vira-dropdown-disabled":({inputs:t})=>!!t.isDisabled},styles:({hostClasses:t})=>$`
        :host {
            display: inline-flex;
            vertical-align: middle;
            width: 256px;
            ${Ct["vira-focus-outline-color"].name}: ${rt["vira-form-focus-color"].value};
            position: relative;
            max-width: 100%;
        }

        .dropdown-wrapper {
            ${tt};
            max-width: 100%;
            align-self: stretch;
            flex-grow: 1;
            position: relative;
            border-radius: ${Re["vira-form-input-radius"].value};
            transition: border-radius
                ${xe["vira-interaction-animation-duration"].value};
            outline: none;
        }

        ${ja({selector:".dropdown-wrapper:focus",elementBorderSize:1})}

        .selection-display {
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }

        .trigger-icon {
            transform: rotate(0);
            transition: ${xe["vira-interaction-animation-duration"].value}
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
            border: 1px solid ${rt["vira-form-border-color"].value};
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
            ${Ge};
            border-radius: inherit;
            background-color: ${rt["vira-form-background-color"].value};
            color: ${rt["vira-form-foreground-color"].value};
        }

        .open-upwards ${Sn} {
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
            ${dh.menuShadowReversed}
        }

        ${t["vira-dropdown-disabled"].selector} {
            ${an}
            pointer-events: auto;
        }

        ${t["vira-dropdown-disabled"].selector} .dropdown-wrapper {
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
    `,events:{selectedChange:ne(),openChange:ne()},stateInitStatic:{showPopUpResult:void 0,popUpManager:xw(()=>new cv),navController:void 0},cleanupCallback({state:t,updateState:e}){e({showPopUpResult:void 0}),t.popUpManager.destroy()},initCallback({state:t,updateState:e,host:r,inputs:n,dispatch:i,events:s}){t.popUpManager.listen(vh,()=>{if(e({showPopUpResult:void 0}),!n.isDisabled){const a=r.shadowRoot.querySelector(".dropdown-wrapper");ea(a,HTMLButtonElement,"failed to find dropdown wrapper child"),a.focus()}}),t.popUpManager.listen($h,a=>{const o=a.detail.x,l=n.options[o];if(!l)throw new Error(`Found no dropdown option at index '${o}'`);n.isMultiSelect||Oc({emitEvent:!0,open:!1},{dispatch:c=>{i(new s.openChange(c))},host:r,popUpManager:t.popUpManager,updateState:e}),i(new s.selectedChange(Pc(l.id,n.selected,!!n.isMultiSelect)))}),e({navController:new yh(r)})},renderCallback({dispatch:t,events:e,state:r,inputs:n,updateState:i,host:s}){var m;dv(n.options);function a(g){Oc(g,{dispatch:y=>{t(new e.openChange(y))},host:s,popUpManager:r.popUpManager,updateState:i})}n.isDisabled?a({open:!1,emitEvent:!1}):n.z_debug_forceOpenState!=null&&(!n.z_debug_forceOpenState&&r.showPopUpResult?a({emitEvent:!1,open:!1}):n.z_debug_forceOpenState&&!r.showPopUpResult&&a({emitEvent:!1,open:!0}));const o=uv(n),l=n.icon?p`
                  <${R.assign({icon:n.icon})}
                      ${kr(kn.icon)}
                  ></${R}>
              `:"",c=r.showPopUpResult?r.showPopUpResult.popDown?$`
                      bottom: -${r.showPopUpResult.positions.diff.bottom}px;
                  `:$`
                      top: -${r.showPopUpResult.positions.diff.top}px;
                  `:void 0;function d(){a({emitEvent:!0,open:!r.showPopUpResult})}const u=!o.length,f=n.selectionPrefix&&!u?p`
                      <span class="selected-label-prefix" ${kr(kn.prefix)}>
                          ${n.selectionPrefix}
                      </span>
                  `:"",h=u?n.placeholder||"":o.map(g=>g.label).join(", ");return p`
            <button
                ?disabled=${!!n.isDisabled}
                class="dropdown-wrapper ${ze({open:!!r.showPopUpResult,"open-upwards":!((m=r.showPopUpResult)!=null&&m.popDown)})}"
                ${kr(kn.trigger)}
                role="listbox"
                aria-expanded=${!!r.showPopUpResult}
                ${_("keydown",g=>{!r.showPopUpResult&&g.code.startsWith("Arrow")&&a({emitEvent:!0,open:!0})})}
                ${_("click",g=>{g.detail===0&&d()})}
                ${_("mousedown",g=>{g.button===0&&d()})}
            >
                <div class="dropdown-trigger">
                    ${l}
                    <span
                        class="selection-display ${ze({"using-placeholder":u})}"
                        title=${Zd(u?h:void 0)}
                    >
                        ${f} ${h}
                    </span>
                    <span class="trigger-icon-wrapper">
                        <${R.assign({icon:Z1})}
                            class="trigger-icon"
                        ></${R}>
                    </span>
                </div>
                <div class="pop-up-positioner" style=${c}>
                    ${Me(!!r.showPopUpResult,p`
                            <${Sn.assign({options:n.options,selectedOptions:o})}
                                ${_(Sn.events.selectionChange,g=>{n.isMultiSelect||a({emitEvent:!0,open:!1}),t(new e.selectedChange(Pc(g.detail.id,n.selected,!!n.isMultiSelect)))})}
                                ${kr(kn.options)}
                            ></${Sn}>
                        `)}
                </div>
            </button>
        `}});var zs;(function(t){t.Default="vira-button-default",t.Outline="vira-button-outline"})(zs||(zs={}));const Nc=Ye()({tagName:"vira-button",hostClasses:{"vira-button-outline-style":({inputs:t})=>t.buttonStyle===zs.Outline,"vira-button-disabled":({inputs:t})=>!!t.disabled},cssVars:{"vira-button-primary-color":"#0a89ff","vira-button-primary-hover-color":"#59b1ff","vira-button-primary-active-color":"#007ff6","vira-button-secondary-color":"#ffffff","vira-button-padding":"5px 10px","vira-button-internal-foreground-color":"","vira-button-internal-background-color":""},styles:({hostClasses:t,cssVars:e})=>$`
        :host {
            font-weight: bold;
            display: inline-flex;
            position: relative;
            vertical-align: middle;
            align-items: center;
            box-sizing: border-box;
            ${Ge};
            ${e["vira-button-internal-background-color"].name}: ${e["vira-button-primary-color"].value};
            ${e["vira-button-internal-foreground-color"].name}: ${e["vira-button-secondary-color"].value};
            ${Ct["vira-focus-outline-color"].name}: ${e["vira-button-primary-hover-color"].value}
        }

        :host(:hover) button,
        button:hover {
            ${e["vira-button-internal-background-color"].name}: ${e["vira-button-primary-hover-color"].value};
        }

        :host(:active) button,
        button:active {
            ${e["vira-button-internal-background-color"].name}: ${e["vira-button-primary-active-color"].value};
        }

        ${t["vira-button-disabled"].selector} {
            ${an};
        }

        ${t["vira-button-outline-style"].selector} button {
            color: ${e["vira-button-internal-background-color"].value};
            background-color: transparent;
            border-color: currentColor;
        }

        button {
            ${tt};
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
            border-radius: ${Re["vira-form-input-radius"].value};
            background-color: ${e["vira-button-internal-background-color"].value};
            color: ${e["vira-button-internal-foreground-color"].value};
            padding: ${e["vira-button-padding"].value};
            transition:
                color ${xe["vira-interaction-animation-duration"].value},
                background-color
                    ${xe["vira-interaction-animation-duration"].value},
                border-color ${xe["vira-interaction-animation-duration"].value};
        }

        ${ja({selector:"button:focus:focus-visible:not(:active):not([disabled])",elementBorderSize:2})}

        button ${R} + .text-template {
            margin-left: 8px;
        }
    `,renderCallback:({inputs:t})=>{const e=t.icon?p`
                  <${R.assign({icon:t.icon})}></${R}>
              `:"",r=t.text?p`
                  <span class="text-template">${t.text}</span>
              `:"";return p`
            <button ?disabled=${t.disabled}>${e} ${r}</button>
        `}});Ye()({tagName:"vira-collapsible-wrapper",hostClasses:{"vira-collapsible-wrapper-expanded":({inputs:t})=>t.expanded},slotNames:["header"],styles:({hostClasses:t})=>$`
        :host {
            display: flex;
            flex-direction: column;
        }

        .header-wrapper {
            ${tt};
            cursor: pointer;
        }

        .content-wrapper,
        .collapsing-element {
            display: flex;
            flex-direction: column;
            box-sizing: border-box;
        }

        .collapsing-element {
            transition: height ${xe["vira-pretty-animation-duration"].value};
            overflow: hidden;
        }
        ${t["vira-collapsible-wrapper-expanded"].name} .collapsing-element {
            pointer-events: none;
        }
    `,events:{expandChange:ne()},stateInitStatic:{contentHeight:0},renderCallback({state:t,slotNames:e,updateState:r,dispatch:n,events:i,inputs:s}){const a=s.expanded?$`
                  height: ${t.contentHeight}px;
              `:$`
                  height: 0;
              `;return p`
            <button
                class="header-wrapper"
                ${_("click",()=>{n(new i.expandChange(!s.expanded))})}
            >
                <slot name=${e.header}>Header</slot>
            </button>
            <div class="collapsing-element" style=${a} disabled="disabled">
                <div
                    ${lf(({contentRect:o})=>{r({contentHeight:o.height})})}
                    class="content-wrapper"
                >
                    <slot></slot>
                </div>
            </div>
        `}});var ni;(function(t){t.Loading="loading",t.Error="error"})(ni||(ni={}));Ye()({tagName:"vira-image",hostClasses:{"vira-image-height-constrained":({inputs:t})=>t.dominantDimension==="height"},events:{imageLoad:ne(),imageError:ne()},styles:({hostClasses:t})=>$`
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
        ${t["vira-image-height-constrained"].selector} {
            flex-direction: row;
        }

        ${t["vira-image-height-constrained"].selector} img {
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
    `,stateInitStatic:{loadedUrls:{},erroredUrls:{}},renderCallback({inputs:t,state:e,updateState:r,dispatch:n,events:i}){const s=t.imageUrl,a=e.erroredUrls[s]?p`
                  <slot class="status-wrapper" name=${ni.Error}>
                      <${R.assign({icon:nv})} class="error"></${R}>
                  </slot>
              `:e.loadedUrls[s]?void 0:p`
                    <slot class="status-wrapper" name=${ni.Loading}>
                        <${R.assign({icon:bh})}></${R}>
                    </slot>
                `;return p`
            ${Me(!!a,a)}
            <img
                class=${ze({hidden:!!a})}
                ${_("load",async()=>{t._debugLoadDelay&&await ys(t._debugLoadDelay.milliseconds),r({loadedUrls:{...e.loadedUrls,[s]:!0}}),n(new i.imageLoad)})}
                ${_("error",async o=>{t._debugLoadDelay&&await ys(t._debugLoadDelay.milliseconds),r({erroredUrls:{...e.erroredUrls,[s]:!0}}),n(new i.imageError(o.error))})}
                src=${s}
            />
        `}});function Ws({input:t,matcher:e}){return!t||!e?!0:t.length>1?!!t.split("").every(r=>Ws({input:r,matcher:e})):e instanceof RegExp?!!t.match(e):e.includes(t)}function Eh({value:t,allowed:e,blocked:r}){const n=e?Ws({input:t,matcher:e}):!0,i=r?Ws({input:t,matcher:r}):!1;return n&&!i}function Th(t){if(!t.value)return{filtered:t.value,blocked:""};const{filtered:e,blocked:r}=t.value.split("").reduce((n,i)=>(Eh({...t,value:i})?n.filtered.push(i):n.blocked.push(i),n),{filtered:[],blocked:[]});return{filtered:e.join(""),blocked:r.join("")}}function hv({inputs:t,filteredValue:e,event:r,inputBlockedCallback:n,newValueCallback:i}){if(!(r instanceof InputEvent))throw new Error("Text input event was not an InputEvent.");const s=Mr(r,HTMLInputElement),a=r.data,o=e;let l=s.value??"";if(a)if(a.length===1)Eh({value:a,allowed:t.allowedInputs,blocked:t.blockedInputs})||(l=o,n(a));else{const{filtered:c,blocked:d}=Th({value:a,allowed:t.allowedInputs,blocked:t.blockedInputs});l=c,n(d)}s.value!==l&&(s.value=l),o!==l&&i(l)}var Yt;(function(t){t.Default="text",t.Password="password",t.Email="email"})(Yt||(Yt={}));const Vn=Ye()({tagName:"vira-input",hostClasses:{"vira-input-disabled":({inputs:t})=>!!t.disabled,"vira-input-fit-text":({inputs:t})=>!!t.fitText,"vira-input-clear-button-shown":({inputs:t})=>!!t.showClearButton},cssVars:{"vira-input-background-color":"white","vira-input-placeholder-color":"#cccccc","vira-input-text-color":"#000000","vira-input-border-color":"#cccccc","vira-input-focus-border-color":Ct["vira-focus-outline-color"].default,"vira-input-text-selection-color":"#cfe9ff","vira-input-action-button-color":"#aaaaaa","vira-input-clear-button-hover-color":"#ff0000","vira-input-clear-button-active-color":"#b30000","vira-input-show-password-button-hover-color":"#0a89ff","vira-input-show-password-button-active-color":"#0261ba","vira-input-padding-horizontal":"10px","vira-input-padding-vertical":"6px"},events:{valueChange:ne(),inputBlocked:ne()},styles:({hostClasses:t,cssVars:e})=>$`
            :host {
                position: relative;
                display: inline-flex;
                width: 224px;
                box-sizing: border-box;
                ${Ct["vira-focus-outline-color"].name}: ${e["vira-input-focus-border-color"].value};
                color: ${e["vira-input-text-color"].value};
            }

            ${t["vira-input-disabled"].selector} {
                ${an};
            }

            ${t["vira-input-fit-text"].selector} {
                width: unset;
            }
            ${t["vira-input-fit-text"].selector} input {
                flex-grow: 0;
            }
            ${t["vira-input-fit-text"].selector} input.has-value {
                /*
                    Account for weird Safari <input> behavior with text alignment and size. so we
                    don't lose a pixel on the left side.
                    Only apply this when <input> has a value, otherwise externally-set width and a
                    placeholder input will cause the text selector bar to initially be in the center
                    of the element.
                */
                text-align: center;
            }
            ${t["vira-input-fit-text"].selector} .size-span {
                ${tt};
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
                ${Ge};
                vertical-align: middle;
                max-height: 100%;
            }

            ${t["vira-input-clear-button-shown"].selector} label {
                padding-right: 4px;
            }

            pre {
                ${tt};
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
                border-radius: ${Re["vira-form-input-radius"].value};
                z-index: 0;
                pointer-events: none;
            }

            .label-border {
                top: -1px;
                left: -1px;
                border: 1px solid ${e["vira-input-border-color"].value};
                transition: border
                    ${xe["vira-interaction-animation-duration"].value};
            }

            label {
                ${tt};
                max-width: 100%;
                flex-grow: 1;
                display: inline-flex;
                box-sizing: border-box;
                align-items: center;
                position: relative;
                padding: 0 ${e["vira-input-padding-horizontal"].value};
                border-radius: ${Re["vira-form-input-radius"].value};
                background-color: ${e["vira-input-background-color"].value};
                /*
                    Border colors are actually applied via the .label-border class. However, we must
                    apply a border here still so that it takes up space.
                */
                border: 1px solid transparent;
                gap: 4px;
                cursor: text;
            }

            ${ja({selector:"input:focus:focus-visible:not(:active):not([disabled]) ~ .focus-border",elementBorderSize:0})}

            .left-side-icon {
                margin-right: calc(${e["vira-input-padding-horizontal"].value} - 4px);
            }

            input {
                ${tt};
                cursor: text;
                margin: ${e["vira-input-padding-vertical"].value} 0;
                flex-grow: 1;
                max-width: 100%;
                /* fix input element not shrinking by default */
                width: 0;
                text-overflow: ellipsis;
                box-sizing: border-box;
                overflow: hidden;
            }

            ::selection {
                background: ${e["vira-input-text-selection-color"].value}; /* WebKit/Blink Browsers */
            }
            ::-moz-selection {
                background: ${e["vira-input-text-selection-color"].value}; /* Gecko Browsers */
            }

            input:placeholder-shown {
                text-overflow: ellipsis;
                overflow: hidden;
            }

            input:focus {
                outline: none;
            }

            input::placeholder {
                color: ${e["vira-input-placeholder-color"].value};
            }

            .suffix {
                font-weight: bold;
                ${Ge};
            }

            button {
                ${tt};
                cursor: pointer;
                display: flex;
                transition: color
                    ${xe["vira-interaction-animation-duration"].value};
            }

            .clear-x-button,
            .show-password-button {
                color: ${e["vira-input-action-button-color"].value};
            }

            .clear-x-button:hover {
                color: ${e["vira-input-clear-button-hover-color"].value};
            }

            .clear-x-button:active {
                color: ${e["vira-input-clear-button-active-color"].value};
            }

            .show-password-button:hover {
                color: ${e["vira-input-show-password-button-hover-color"].value};
            }

            .show-password-button:active {
                color: ${e["vira-input-show-password-button-active-color"].value};
            }
        `,stateInitStatic:{forcedInputWidth:0,showPassword:!1},renderCallback:({inputs:t,dispatch:e,state:r,updateState:n,events:i})=>{const{filtered:s}=Th({value:t.value??"",allowed:t.allowedInputs,blocked:t.blockedInputs}),a=t.icon?p`
                  <${R.assign({icon:t.icon})} class="left-side-icon"></${R}>
              `:"",o=t.fitText?$`
                  width: ${r.forcedInputWidth}px;
              `:"";return p`
            <label>
                ${a}
                ${Me(!!t.fitText,p`
                        <span
                            class="size-span"
                            ${lf(({contentRect:l})=>{n({forcedInputWidth:l.width})})}
                        >
                            <pre>${s||t.placeholder||""}</pre>
                        </span>
                    `)}
                <input
                    type=${mv(t.type,r.showPassword)}
                    style=${o}
                    autocomplete=${t.disableBrowserHelps?"off":""}
                    autocorrect=${t.disableBrowserHelps?"off":""}
                    autocapitalize=${t.disableBrowserHelps?"off":""}
                    spellcheck=${t.disableBrowserHelps?"false":""}
                    ?disabled=${t.disabled}
                    .value=${s}
                    ${_("input",l=>{hv({inputs:t,filteredValue:s,event:l,inputBlockedCallback(c){e(new i.inputBlocked(c))},newValueCallback(c){e(new i.valueChange(c))}})})}
                    placeholder=${t.placeholder}
                />
                ${Me(!!(t.showClearButton&&t.value),p`
                        <button
                            class="clear-x-button"
                            title="clear"
                            ${_("click",l=>{l.stopImmediatePropagation(),l.preventDefault(),e(new i.valueChange(""))})}
                        >
                            <${R.assign({icon:Y1})}></${R}>
                        </button>
                    `)}
                ${Me(t.type===Yt.Password,p`
                        <button
                            class="show-password-button"
                            title="show password"
                            ${_("click",l=>{l.stopImmediatePropagation(),l.preventDefault(),n({showPassword:!r.showPassword})})}
                        >
                            <${R.assign({icon:r.showPassword?Q1:X1})}></${R}>
                        </button>
                    `)}
                ${Me(!!t.suffix,p`
                        <div class="suffix">${t.suffix}</div>
                    `)}
                <!--
                    These separate style elements are necessary so that we can select them as
                    siblings of the focused <input> element.
                -->
                <div class="border-style focus-border"></div>
                <div class="border-style label-border"></div>
            </label>
        `}});function mv(t,e){return t===Yt.Password&&e?Yt.Default:t||Yt.Default}Ye()({tagName:"vira-link",cssVars:{"vira-link-hover-color":"currentColor"},styles:({cssVars:t})=>$`
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
            color: ${t["vira-link-hover-color"].value};
        }
    `,renderCallback({inputs:t}){var r,n;function e(i){t.route&&t.route.router.setRouteOnDirectNavigation(t.route.route,i)&&t.route.scrollToTop&&window.scrollTo(0,0)}if((r=t.link)!=null&&r.newTab)return p`
                <a href=${t.link.url} target="_blank" rel="noopener noreferrer">
                    <slot></slot>
                </a>
            `;{const i=t.link?t.link.url:(n=t.route)==null?void 0:n.router.createRouteUrl(t.route.route);return p`
                <a href=${i} rel="noopener noreferrer" ${_("click",e)}>
                    <slot></slot>
                </a>
            `}}});const{defineElement:Ae,defineElementNoInputs:t5}=cf(),Te=Ae()({tagName:"book-route-link",cssVars:{"book-route-link-anchor-padding":""},styles:({cssVars:t})=>$`
        a {
            box-sizing: border-box;
            display: block;
            padding: ${t["book-route-link-anchor-padding"].value};
            text-decoration: inherit;
            color: inherit;
            height: 100%;
            width: 100%;
        }
    `,renderCallback:({inputs:t,dispatch:e})=>{var n;const r=((n=t.router)==null?void 0:n.createRouteUrl({...t.route}))??"#";return p`
            <a
                href=${r}
                ${_("click",i=>{(!t.router||kf(i))&&(i.preventDefault(),window.scrollTo(0,0),e(new ti(t.route)))})}
            >
                <slot></slot>
            </a>
        `}});function pv(t,e){return t.entry.entryType===Y.Root?!1:!!(t.entry.entryType===Y.Page||le(e,t.fullUrlBreadcrumbs.slice(0,-1))||le(e==null?void 0:e.slice(0,-1),t.fullUrlBreadcrumbs.slice(0,-1)))}const Fe=Ae()({tagName:"book-nav",cssVars:{"book-nav-internal-indent":"0"},styles:({cssVars:t})=>$`
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
            ${Te.cssVars["book-route-link-anchor-padding"].name}: 1px 24px 1px calc(calc(16px * ${t["book-nav-internal-indent"].value}) + 8px);
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

        ${R} {
            display: inline-flex;
            color: ${D["element-book-accent-icon-color"].value};
        }
    `,renderCallback({inputs:t}){const e=t.flattenedNodes.map(r=>{if(!pv(r,t.selectedPath))return;const n=$`
                --book-nav-internal-indent: ${r.fullUrlBreadcrumbs.length-1};
            `;return p`
                <li style=${n}>
                    <${Te.assign({router:t.router,route:{paths:[oe.Book,...r.fullUrlBreadcrumbs]}})}
                        class=${ze({"title-row":!0,selected:t.selectedPath?le(t.selectedPath,r.fullUrlBreadcrumbs):!1})}
                    >
                        <div class="title-text">
                            ${Me(qt(r,Y.ElementExample),p`
                                    <${R.assign({icon:J1})}></${R}>
                                `)}
                            ${r.entry.title}
                        </div>
                    </${Te}>
                </li>
            `});return p`
            <${Te.assign({route:tr,router:t.router})}>
                <slot name=${je.NavHeader}>Book</slot>
            </${Te}>
            <ul>
                ${e}
            </ul>
        `}});async function gv(t){await bs(2);const e=t.shadowRoot.querySelector(".selected");if(!e)throw new Error("Failed to find selected nav tree element.");await Pm(e)||e.scrollIntoView({behavior:"smooth",block:"center"})}const ut=Ae()({tagName:"book-error",styles:$`
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
    `,renderCallback({inputs:t}){return(k(t.message,"array")?t.message:[t.message]).map(r=>p`
                <p>${r}</p>
            `)}}),Gr=Ae()({tagName:"book-page-controls",events:{controlValueChange:ne()},hostClasses:{"book-page-controls-has-controls":({inputs:t})=>!!Object.keys(t.config).length},styles:({hostClasses:t})=>$`
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

        ${t["book-page-controls-has-controls"].selector} {
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

        ${Vn} {
            height: 24px;
            max-width: 128px;
        }

        ${R}.options-icon {
            position: absolute;
            left: 0;
            bottom: 0;
            margin-left: -32px;
        }
    `,renderCallback({inputs:t,dispatch:e,events:r}){return Object.entries(t.config).length?Object.entries(t.config).map(([n,i],s)=>{if(i.controlType===Q.Hidden)return"";const a=wv(t.currentValues[n],i,o=>{const l=k(t.fullUrlBreadcrumbs,"array")?t.fullUrlBreadcrumbs:t.fullUrlBreadcrumbs[n];if(!l)throw new Error(`Failed to find breadcrumbs from given control name: '${n}'`);e(new r.controlValueChange({fullUrlBreadcrumbs:l,newValues:{...t.currentValues,[n]:o}}))});return p`
                    <div class="control-wrapper">
                        ${Me(s===0,p`
                                <${R.assign({icon:rv})}
                                    class="options-icon"
                                ></${R}>
                            `)}
                        <label class="control-wrapper">
                            <span>${n}</span>
                            ${a}
                        </label>
                    </div>
                `}):""}});function wv(t,e,r){return It(e,Q.Hidden)?"":It(e,Q.Checkbox)?p`
            <input
                type="checkbox"
                .value=${t}
                ${_("input",n=>{const i=Mr(n,HTMLInputElement);r(i.checked)})}
            />
        `:It(e,Q.Color)?p`
            <input
                type="color"
                .value=${t}
                ${_("input",n=>{const i=Mr(n,HTMLInputElement);r(i.value)})}
            />
        `:It(e,Q.Text)?p`
            <${Vn.assign({value:String(t),showClearButton:!0,disableBrowserHelps:!0})}
                ${_(Vn.events.valueChange,n=>{r(n.detail)})}
            ></${Vn}>
        `:It(e,Q.Number)?p`
            <input
                type="number"
                .value=${t}
                ${_("input",n=>{const i=Mr(n,HTMLInputElement);r(i.value)})}
            />
        `:It(e,Q.Dropdown)?p`
            <select
                .value=${t}
                ${_("input",n=>{const i=Mr(n,HTMLSelectElement);r(i.value)})}
            >
                ${e.options.map(n=>p`
                        <option ?selected=${n===t} value=${n}>
                            ${n}
                        </option>
                    `)}
            </select>
        `:p`
            <p class="error">${e.controlType} controls are not implemented yet.</p>
        `}const Ic=Ae()({tagName:"book-breadcrumbs",styles:$`
        :host {
            display: flex;
            color: #999;
        }

        .spacer {
            padding: 0 4px;
        }
    `,renderCallback:({inputs:t})=>{const e=t.currentRoute.paths.slice(1);return e.length?e.map((r,n,i)=>{const s=n>=i.length-1,a=i.slice(0,n+1),o=s?"":p`
                      <span class="spacer">&gt;</span>
                  `;return p`
                <${Te.assign({route:{hash:void 0,search:void 0,paths:[oe.Book,...a]},router:t.router})}>
                    ${r}
                </${Te}>
                ${o}
            `}):p`
                &nbsp;
            `}}),ps=Ae()({tagName:"book-breadcrumbs-bar",styles:$`
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
    `,renderCallback({inputs:t,dispatch:e}){return p`
            ${Me(!!t.currentSearch,p`
                    &nbsp;
                `,p`
                    <${Ic.assign({currentRoute:t.currentRoute,router:t.router})}></${Ic}>
                `)}
            <input
                placeholder="search"
                .value=${t.currentSearch}
                ${_("input",async r=>{const n=r.currentTarget;if(!(n instanceof HTMLInputElement))throw new Error("Failed to find input element for search.");const i=n.value;await ys(200),n.value===i&&(n.value?e(new ti({paths:[oe.Search,encodeURIComponent(n.value)]})):e(new ti(tr)))})}
            />
        `}}),Dc=Ae()({tagName:"book-entry-description",styles:$`
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
    `,renderCallback({inputs:t}){return t.descriptionParagraphs.map(e=>p`
                <p>${e}</p>
            `)}}),_c=Ae()({tagName:"book-page-wrapper",styles:$`
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

        ${Te} {
            display: inline-block;
        }
    `,renderCallback({inputs:t}){const e=t.isTopLevel?p`
                  <h2 class="header-with-icon">${t.pageNode.entry.title}</h2>
              `:p`
                  <h3 class="header-with-icon">${t.pageNode.entry.title}</h3>
              `,r=[oe.Book,...t.pageNode.fullUrlBreadcrumbs],n=bu(t.pageNode.entry.errors);return n&&console.error(n),p`
            <div class="page-header block-entry">
                <div class="title-group">
                    <${Te.assign({route:{paths:r,hash:void 0,search:void 0},router:t.router})}>
                        ${e}
                    </${Te}>
                    ${n?p`
                              <${ut.assign({message:n.message})}></${ut}>
                          `:p`
                              <${Dc.assign({descriptionParagraphs:t.pageNode.entry.descriptionParagraphs??[]})}></${Dc}>
                              <${Gr.assign({config:t.pageNode.entry.controls,currentValues:Ca(t.controls,t.pageNode.fullUrlBreadcrumbs),fullUrlBreadcrumbs:t.pageNode.fullUrlBreadcrumbs})}></${Gr}>
                          `}
                </div>
            </div>
        `}}),Mn=Ae()({tagName:"book-element-example-controls",styles:$`
        :host {
            display: flex;
            color: ${D["element-book-page-foreground-faint-level-1-color"].value};
            border-bottom: 1px solid currentColor;
            padding: 0 8px 4px;
        }
    `,renderCallback({inputs:t}){const e=[oe.Book,...t.elementExampleNode.fullUrlBreadcrumbs];return p`
            <${Te.assign({route:{paths:e,hash:void 0,search:void 0},router:t.router})}>
                ${t.elementExampleNode.entry.title}
            </${Te}>
        `}}),Rc=Symbol("unset-internal-state"),Vc=Ae()({tagName:"book-element-example-viewer",stateInitStatic:{isUnset:Rc},renderCallback({state:t,inputs:e,updateState:r}){try{if(e.elementExampleNode.entry.errors.length)throw bu(e.elementExampleNode.entry.errors);if(!e.elementExampleNode.entry.renderCallback||typeof e.elementExampleNode.entry.renderCallback=="string")throw new Error(`Failed to render example '${e.elementExampleNode.entry.title}': renderCallback is not a function`);t.isUnset===Rc&&r({isUnset:void 0,...e.elementExampleNode.entry.stateInitStatic});const n=e.elementExampleNode.entry.renderCallback({state:t,updateState:r,controls:e.currentPageControls});if(n instanceof Promise)throw new Error("renderCallback output cannot be a promise");return p`
                ${Me(!!e.elementExampleNode.entry.styles,p`
                        <style>
                            ${e.elementExampleNode.entry.styles}
                        </style>
                    `)}
                ${n}
            `}catch(n){return console.error(n),p`
                <${ut.assign({message:`${e.elementExampleNode.entry.title} failed: ${ur(n)}`})}></${ut}>
            `}},options:{allowPolymorphicState:!0}}),Hc=Ae()({tagName:"book-element-example-wrapper",styles:$`
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

        ${Mn} {
            color: ${D["element-book-page-foreground-faint-level-1-color"].value};
        }

        :host(:hover) ${Mn} {
            color: ${D["element-book-accent-icon-color"].value};
        }
    `,renderCallback({inputs:t}){return p`
            <div class="individual-example-wrapper">
                <${Mn.assign(mm(t,["currentPageControls"]))}></${Mn}>
                <${Vc.assign(t)}></${Vc}>
            </div>
        `}});function Sh(t,e,r,n){const i=Cs(r,n),s=[];if(i){const a=Sh(t,e,i,n);a&&s.push(a)}if(qt(r,Y.Page)&&!t.includes(r)){const a=Ca(e,r.fullUrlBreadcrumbs);s.push({config:r.entry.controls,current:a,breadcrumbs:st(a,()=>r.fullUrlBreadcrumbs)})}return s.reduce((a,o)=>({config:{...a.config,...o.config},current:{...a.current,...o.current},breadcrumbs:{...a.breadcrumbs,...o.breadcrumbs}}),{config:{},current:{},breadcrumbs:{}})}function yv({currentNodes:t,isTopLevel:e,router:r,isSearching:n,controls:i,originalTree:s}){if(!t.length&&n)return[p`
                No results
            `];const a=eo(t,1)?Sh(t,i,t[0],s):void 0,o=a&&Object.values(a.config).length&&eo(t,1)?p`
                  <${Gr.assign({config:a.config,currentValues:a.current,fullUrlBreadcrumbs:a.breadcrumbs})}></${Gr}>
              `:N,l=Qg(t,c=>c.fullUrlBreadcrumbs.join(">"),(c,d)=>{if(qt(c,Y.Page))return p`
                    <${_c.assign({isTopLevel:e,pageNode:c,controls:i,router:r})}
                        class="block-entry"
                    ></${_c}>
                `;if(qt(c,Y.ElementExample)){const u=Ca(i,c.fullUrlBreadcrumbs.slice(0,-1));return p`
                    <${Hc.assign({elementExampleNode:c,currentPageControls:u,router:r})}
                        class="inline-entry"
                    ></${Hc}>
                `}else return qt(c,Y.Root)?N:p`
                    <${ut.assign({message:`Unknown entry type for rendering: '${c.entry.entryType}'`})}
                        class="block-entry"
                    ></${ut}>
                `});return[o,l]}const Ft=Ae()({tagName:"book-entry-display",styles:$`
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

        ${ps} {
            position: sticky;
            top: 0;
        }

        .loading {
            flex-grow: 1;
            padding: 64px;
            position: absolute;
            background-color: white;
            animation: fade-in linear
                ${xe["vira-interaction-animation-duration"].value} forwards;
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
    `,events:{loadingRender:ne()},stateInitStatic:{lastElement:void 0},renderCallback:({inputs:t,dispatch:e,events:r,state:n,updateState:i})=>{const s=Os(t.currentRoute.paths),a=yv({currentNodes:t.currentNodes,isTopLevel:!0,router:t.router,isSearching:!!s,controls:t.controls,originalTree:t.originalTree});return p`
            <${ps.assign({currentSearch:s,currentRoute:t.currentRoute,router:t.router})}></${ps}>

            ${Me(t.showLoading,p`
                    <div
                        ${dl(()=>{e(new r.loadingRender(!0))})}
                        class="loading"
                    >
                        <${R.assign({icon:bh})}></${R}>
                    </div>
                    ${Me(!!n.lastElement,p`
                            ${n.lastElement}
                            <slot name=${je.Footer}></slot>
                        `)}
                `,p`
                    <div
                        ${dl(o=>{i({lastElement:o})})}
                        class="all-book-entries-wrapper"
                    >
                        ${a}
                    </div>
                    <slot name=${je.Footer}></slot>
                `)}
        `}});function bv(t,e,r){const n=Bc(t,e);if(n.length)return n;r(tr);const i=Bc(t,tr.paths);if(!i)throw new Error(`Tried to self-correct for invalid path ${e.join("/")}
                        but failed to do so.`);return i}function Bc(t,e){return t.filter(r=>Am({searchFor:e.slice(1),searchIn:r.fullUrlBreadcrumbs}))}const Fc=ye()({tagName:"element-book-app",events:{pathUpdate:ne()},stateInitStatic:{currentRoute:tr,router:void 0,loading:!0,colors:{config:void 0,theme:vc(void 0)},treeBasedControls:void 0,originalWindowTitle:void 0},styles:$`
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

        ${Ft} {
            flex-grow: 1;
            overflow-x: hidden;
            overflow-y: auto;
            max-height: 100%;
        }

        ${Fe} {
            flex-shrink: 0;
            position: sticky;
            overflow-x: hidden;
            overflow-y: auto;
            max-height: 100%;
            top: 0;
            max-width: min(400px, 40%);
        }
    `,initCallback({host:t,state:e}){setTimeout(()=>{Uc(t,Os(e.currentRoute.paths),e.currentRoute)},500)},cleanupCallback({state:t,updateState:e}){t.router&&(t.router.destroy(),e({router:void 0}))},renderCallback:({state:t,inputs:e,host:r,updateState:n,dispatch:i,events:s})=>{var d,u,f,h,m,g,y;e._debug&&console.info("rendering element-book app");function a(b){return{...t.currentRoute,...b}}function o(b){const E=a(b);return!le(t.currentRoute,E)}function l(b){e.preventWindowTitleChange||(t.originalWindowTitle||n({originalWindowTitle:document.title}),document.title=[t.originalWindowTitle,b].filter(qr).join(" - "))}function c(b){if(!o(b))return;const E=a(b);t.router?t.router.setRoute(E):n({currentRoute:{...t.currentRoute,...E}}),e.elementBookRoutePaths&&!le(e.elementBookRoutePaths,t.currentRoute.paths)&&i(new s.pathUpdate(E.paths??[]))}try{if(e.elementBookRoutePaths&&!le(e.elementBookRoutePaths,t.currentRoute.paths)&&c({paths:e.elementBookRoutePaths}),(d=e.internalRouterConfig)!=null&&d.useInternalRouter&&!t.router){const H=$y(e.internalRouterConfig.basePath);n({router:H}),H.listen(!0,W=>{n({currentRoute:W})})}else!((u=e.internalRouterConfig)!=null&&u.useInternalRouter)&&t.router&&t.router.destroy();const b={themeColor:e.themeColor};if(!le(b,(f=t.colors)==null?void 0:f.config)){const H=vc(b);n({colors:{config:b,theme:H}}),Sy(r,H)}const E=e._debug??!1,A=zw({entries:e.entries,debug:E});(!t.treeBasedControls||t.treeBasedControls.entries!==e.entries||t.treeBasedControls.lastGlobalInputs!==e.globalValues)&&(e._debug&&console.info("regenerating global controls"),n({treeBasedControls:{entries:e.entries,lastGlobalInputs:e.globalValues??{},controls:wf(A.tree,{children:(m=(h=t.treeBasedControls)==null?void 0:h.controls)==null?void 0:m.children,controls:e.globalValues})}}));const O=Os(t.currentRoute.paths),Ce=(O?Jw({flattenedNodes:A.flattenedNodes,searchQuery:O}):void 0)??bv(A.flattenedNodes,t.currentRoute.paths,c);l((g=Ce[0])==null?void 0:g.entry.title);const ue=(y=t.treeBasedControls)==null?void 0:y.controls;return ue?(e._debug&&console.info({currentControls:ue}),p`
                <div
                    class="root"
                    ${_(ti,async H=>{const W=H.detail;if(!o(W))return;if(n({loading:!0}),c(W),!(r.shadowRoot.querySelector(Fe.tagName)instanceof Fe))throw new Error(`Failed to find child '${Fe.tagName}'`);Uc(r,O,t.currentRoute)})}
                    ${_(Gr.events.controlValueChange,H=>{if(!t.treeBasedControls)return;const W=Gw(ue,H.detail.fullUrlBreadcrumbs,H.detail.newValues);n({treeBasedControls:{...t.treeBasedControls,controls:W}})})}
                >
                    <${Fe.assign({flattenedNodes:A.flattenedNodes,router:t.router,selectedPath:O?void 0:t.currentRoute.paths.slice(1)})}>
                        <slot
                            name=${je.NavHeader}
                            slot=${je.NavHeader}
                        ></slot>
                    </${Fe}>
                    <${Ft.assign({controls:ue,currentNodes:Ce,currentRoute:t.currentRoute,debug:E,originalTree:A.tree,router:t.router,showLoading:t.loading})}
                        ${_(Ft.events.loadingRender,async H=>{await bs();const W=r.shadowRoot.querySelector(Ft.tagName);W?W.scroll({top:0,behavior:"instant"}):console.error(`Failed to find '${Ft.tagName}' for scrolling.`),await bs(),n({loading:!H.detail})})}
                    >
                        <slot
                            name=${je.Footer}
                            slot=${je.Footer}
                        ></slot>
                    </${Ft}>
                </div>
            `):p`
                    <${ut.assign({message:"Failed to generate page controls."})}></${ut}>
                `}catch(b){return console.error(b),p`
                <p class="error">${ur(b)}</p>
            `}}});async function Uc(t,e,r){if(e||r.paths.length<=1)return;const n=t.shadowRoot.querySelector(Fe.tagName);if(!(n instanceof Fe))throw new Error(`Failed to find child '${Fe.tagName}'`);await gv(n)}function Gs(t){let e;try{e=Reflect.ownKeys(t)}catch{}return e??[...Object.keys(t),...Object.getOwnPropertySymbols(t)]}function Ci(t){return Gs(t).map(e=>[e,t[e]])}function vv(t){return Object.fromEntries(t)}function $v(t,e){return t.filter((r,n)=>!e.includes(n))}function Ev(t,e,r){return t.reduce((n,i,s,a)=>{const o=e(i,s,a);return r(o,i,s,a)&&n.push(o),n},[])}function Tv(t){return!!t}var jc;(function(t){t.Upper="upper",t.Lower="lower"})(jc||(jc={}));function Sv({min:t,max:e}){return t>e?{min:e,max:t}:{min:t,max:e}}function kv({max:t,min:e,value:r}){return r>t?e:r<e?t:r}var zc;(function(t){t.FirstThenWait="first-then-wait",t.AfterWait="after-wait"})(zc||(zc={}));function ar(t,e){let r=!1;const n=Gs(t).reduce((i,s)=>{const a=e(s,t[s],t);return a instanceof Promise&&(r=!0),{...i,[s]:a}},{});return r?new Promise(async(i,s)=>{try{await Promise.all(Gs(n).map(async a=>{const o=await n[a];n[a]=o})),i(n)}catch(a){s(a)}}):n}function Mv(){return globalThis.crypto?globalThis.crypto:require("crypto").webcrypto}const xv=Mv();function Av({min:t,max:e}){const{min:r,max:n}=Sv({min:Math.floor(t),max:Math.floor(e)}),i=n-r+1,s=Math.ceil(Math.log2(i)/8),a=Math.floor(256**s/i)*i,o=new Uint8Array(s);let l;do xv.getRandomValues(o),l=o.reduce((c,d,u)=>c+d*256**u,0);while(l>=a);return r+l%i}const Wc=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",0,1,2,3,4,5,6,7,8,9];function Cv(t=16){let e="";for(let r=0;r<t;r++){const n=Av({min:0,max:Wc.length-1});e+=Wc[n]}return e}const Gc=ye()({tagName:"vir-players-actions-bindings-debug",styles:$`
        h3 {
            margin: 4px;
        }
    `,renderCallback({inputs:t}){return console.log("2",t.playersActionsBindingsMap),Ci(t.playersActionsBindingsMap).map(([e,r])=>p`
                    <h3>Player ${e}</h3>
                    <${qc.assign({actionsBindingsMap:r})}></${qc}>
                `)}}),qc=ye()({tagName:"vir-actions-bindings-debug",styles:$`
        h4 {
            margin: 4px;
        }
    `,renderCallback({inputs:t}){return Object.entries(t.actionsBindingsMap).map(([e,r])=>{const n=r.map(i=>p`
                        <tr>
                            <td>${i.deviceKey}:</td>
                            <td>${i.inputName}</td>
                        </tr>
                    `);return p`
                    <section class="binding">
                        <h4>${e}</h4>
                        <table><tbody>${n}</tbody></table>
                    </section>
                `})}}),Lv=[(t,e)=>e in t,(t,e)=>e in t.constructor.prototype];function ii(t,e){return t?Lv.some(r=>{try{return r(t,e)}catch{return!1}}):!1}function or(t){let e;try{e=Reflect.ownKeys(t)}catch{}return e??[...Object.keys(t),...Object.getOwnPropertySymbols(t)]}function qs(t){return or(t).map(e=>t[e])}function Pv(t){return Object.fromEntries(t)}function Ov(t,e){return t.includes(e)}function si(t){return!!t}const Nv={capitalizeFirstLetter:!1};function Iv(t){return t.length?t[0].toUpperCase()+t.slice(1):""}function Dv(t,e){return e.capitalizeFirstLetter?Iv(t):t}function _v(t,e=Nv){const r=t.toLowerCase();if(!r.length)return"";const n=r.replace(/^-+/,"").replace(/-{2,}/g,"-").replace(/-(?:.|$)/g,i=>{const s=i[1];return s?s.toUpperCase():""});return Dv(n,e)}var Kc;(function(t){t.Upper="upper",t.Lower="lower"})(Kc||(Kc={}));function Rv(t,e){return t.split(e)}var Zc;(function(t){t.FirstThenWait="first-then-wait",t.AfterWait="after-wait"})(Zc||(Zc={}));function Vv(t){return or(t).filter(e=>isNaN(Number(e)))}function Hv(t){return Vv(t).map(r=>t[r])}function Bv(t,e){return Hv(e).includes(t)}function Fv(t,e){let r=!1;const n=or(t).reduce((i,s)=>{const a=e(s,t[s],t);return a instanceof Promise&&(r=!0),{...i,[s]:a}},{});return r?new Promise(async(i,s)=>{try{await Promise.all(or(n).map(async a=>{const o=await n[a];n[a]=o})),i(n)}catch(a){s(a)}}):n}function Uv(){return globalThis.crypto?globalThis.crypto:require("crypto").webcrypto}Uv();const kh={Gamepad1:"0",Gamepad2:"1",Gamepad3:"2",Gamepad4:"3"};function Mh(t){return Ov(Object.values(kh),t)}const jv={Mouse:"mouse",Keyboard:"keyboard"},ee={...jv,...kh};var j;(function(t){t.Keyboard="keyboard",t.Mouse="mouse",t.Gamepad="gamepad"})(j||(j={}));var lr;(function(t){t.Button="button",t.Axe="axe"})(lr||(lr={}));function Ar(t){return`button-${t}`}function Ks(t){return`axe-${t}`}function zv(t){const[e]=Rv(t,"-");if(Bv(e,lr))return e;throw new Error(`Failed to parse input type from input named '${t}'`)}const Wv=.01;function Gv({value:t,gamepadDeadZone:e,globalDeadZone:r}){const n=e??(r||Wv);return Math.abs(t)>n?t:0}function Yc({gamepadInput:t,inputIndex:e,deadZones:r,globalDeadZone:n}){const i=k(t,"number"),s=i?Ks(e):Ar(e),a=i?t:t.value;return{inputName:s,value:Gv({value:a,gamepadDeadZone:r[s],globalDeadZone:n}),inputType:i?lr.Axe:lr.Button}}function qv({gamepad:t,deadZoneSettings:e,globalDeadZone:r}){const n=String(t.index);if(!Mh(n))throw new Error(`Tried to serialize gamepad with out-of-bounds index: '${t.index}'`);const i=e[t.id]||{},s=t.axes.map((l,c)=>Yc({gamepadInput:l,inputIndex:c,deadZones:i,globalDeadZone:r})),a=t.buttons.map((l,c)=>Yc({deadZones:i,gamepadInput:l,globalDeadZone:r,inputIndex:c})),o=Pv([...a,...s].map(l=>[l.inputName,l]));return{axes:s,buttons:a,isConnected:t.connected,gamepadName:t.id,deviceKey:n,mapping:t.mapping,serialized:!0,timestamp:t.timestamp,inputsByName:o}}const xn=window.navigator;function Kv({deadZoneSettings:t,globalDeadZone:e}){return Array.from(ii(xn,"webkitGetGamepads")?xn.webkitGetGamepads():ii(xn,"getGamepads")?xn.getGamepads():[]).filter(r=>!!r).map(r=>qv({gamepad:r,deadZoneSettings:t,globalDeadZone:e}))}function Zv({deadZoneSettings:t,globalDeadZone:e}){return Kv({deadZoneSettings:t,globalDeadZone:e}).reduce((i,s)=>{const a=s.deviceKey;return Mh(a)?(i[a]=s,i):(console.warn(`ignoring gamepad index '${a}'`),i)},{})}function Yv(t){const e={},r={deviceKey:t.deviceKey,deviceName:t.gamepadName,deviceType:j.Gamepad};return Object.values(t.inputsByName).forEach(n=>{n.value&&(e[n.inputName]={...r,details:n,inputName:n.inputName,inputValue:n.value})}),e}function Jv(t){return Fv(t,(e,r)=>({currentInputs:Yv(r),deviceDetails:r,deviceName:r.gamepadName,deviceKey:r.deviceKey,deviceType:j.Gamepad}))}function Jc(t){return qs(t).map(n=>n==null?void 0:n.currentInputs).filter(si).map(n=>qs(n)).flat()}const Xc={deviceDetails:void 0,deviceKey:ee.Keyboard,deviceName:"keyboard",deviceType:j.Keyboard},An={deviceDetails:void 0,deviceKey:ee.Mouse,deviceName:"mouse",deviceType:j.Mouse},xh={[ee.Gamepad1]:j.Gamepad,[ee.Gamepad2]:j.Gamepad,[ee.Gamepad3]:j.Gamepad,[ee.Gamepad4]:j.Gamepad,[ee.Keyboard]:j.Keyboard,[ee.Mouse]:j.Mouse};var Xv=globalThis&&globalThis.__setFunctionName||function(t,e,r){return typeof e=="symbol"&&(e=e.description?"[".concat(e.description,"]"):""),Object.defineProperty(t,"name",{configurable:!0,value:r?"".concat(r," ",e):e})};function Li(){return(t,e)=>{var r;const n=_v(t,{capitalizeFirstLetter:!0}),i=(r=class extends we()(t){constructor(){super(...arguments),Object.defineProperty(this,"eventType",{enumerable:!0,configurable:!0,writable:!0,value:t})}static constructIfDataIsNew(s,...a){const o=i.getNewData(...a);if(o)return new i({detail:{timestamp:s,inputs:o}})}},Xv(r,"TimedEventConstructor"),Object.defineProperty(r,"getNewData",{enumerable:!0,configurable:!0,writable:!0,value:e}),r);return Object.defineProperty(i,"name",{value:n,writable:!0}),i}}function Qv(...[t,e]){return e}const e2=Li()("all-devices-updated",Qv);function Qc(t,e){return t.deviceKey===e.deviceKey&&t.inputName===e.inputName&&t.inputName===e.inputName&&t.inputValue===e.inputValue}function t2(...[t,e]){const r=Jc(e),n=t?Jc(t):[];if(!le(n,r)){const i=r.filter(a=>!n.find(o=>Qc(o,a))),s=n.filter(a=>!r.find(o=>Qc(o,a)));return{newInputs:i,removedInputs:s,allCurrentInputs:r}}}const za=Li()("current-inputs-changed",t2);function r2(...[t,e]){if(!t)return[];const r=or(t).filter(n=>!ii(e,n));if(r.length)return r.map(n=>t[n]).filter(si)}const Ah=Li()("devices-removed",r2);function n2(...[t,e]){if(!t)return qs(e).filter(si);const r=or(e).filter(n=>!ii(t,n));if(r.length)return r.map(n=>e[n]).filter(si)}const Ch=Li()("new-devices-added",n2),Lh=[e2,Ch,Ah,za];Object.fromEntries(Lh.map(t=>[t.type,t]));const eu="code";class Pi extends Mu{constructor(e={}){super(),Object.defineProperty(this,"currentKeyboardInputs",{enumerable:!0,configurable:!0,writable:!0,value:{}}),Object.defineProperty(this,"currentMouseInputs",{enumerable:!0,configurable:!0,writable:!0,value:{}}),Object.defineProperty(this,"gamepadDeadZoneSettings",{enumerable:!0,configurable:!0,writable:!0,value:{}}),Object.defineProperty(this,"lastReadInputDevices",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"loopIsRunning",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"globalDeadZone",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"removeGlobalListeners",{enumerable:!0,configurable:!0,writable:!0,value:()=>{}}),Object.defineProperty(this,"currentLoopIndex",{enumerable:!0,configurable:!0,writable:!0,value:-1}),Object.defineProperty(this,"lastEventDetails",{enumerable:!0,configurable:!0,writable:!0,value:{}}),e.gamepadDeadZoneSettings&&this.updateGamepadDeadZoneSettings(e.gamepadDeadZoneSettings),e.globalDeadZone&&(this.globalDeadZone=e.globalDeadZone),this.attachWindowListeners(e),this.readAllDevices(),e.startLoopImmediately&&this.startPollingLoop()}attachWindowListeners(e){const r=[yt("keydown",n=>{const i=Ar(n[eu]);if(this.currentKeyboardInputs.hasOwnProperty(i))return;const s={deviceType:j.Keyboard,details:{keyboardEvent:n},deviceKey:ee.Keyboard,deviceName:Xc.deviceName,inputName:i,inputValue:1};this.currentKeyboardInputs[i]=s}),yt("keyup",n=>{delete this.currentKeyboardInputs[Ar(n[eu])]}),yt("mousedown",n=>{const i=Ar(n.button);this.currentMouseInputs.hasOwnProperty(i)||(this.currentMouseInputs[i]={deviceType:j.Mouse,details:{mouseEvent:n},deviceName:An.deviceName,deviceKey:ee.Mouse,inputName:i,inputValue:1})}),yt("mouseup",n=>{delete this.currentMouseInputs[Ar(n.button)]}),e.disableMouseMovement?void 0:yt("mousemove",n=>{const i=Ks("x"),s=Ks("y");this.currentMouseInputs[i]={deviceType:j.Mouse,details:{mouseEvent:n},deviceName:An.deviceName,deviceKey:ee.Mouse,inputName:i,inputValue:n.clientX},this.currentMouseInputs[s]={deviceType:j.Mouse,details:{mouseEvent:n},deviceName:An.deviceName,deviceKey:ee.Mouse,inputName:s,inputValue:n.clientY}})];this.removeGlobalListeners=()=>{r.forEach(n=>n==null?void 0:n())}}runPollingLoop(e,r){this.loopIsRunning&&this.currentLoopIndex===e&&(this.readAllDevices(this.gamepadDeadZoneSettings,r),requestAnimationFrame(n=>{this.runPollingLoop(e,n)}))}fireEvents(e,r,n){Lh.forEach(i=>{const s=i.constructIfDataIsNew(e,r,n);s&&(this.lastEventDetails[s.type]={constructor:i,constructorInputs:[e,r,n]},this.dispatch(s))})}getCurrentDeviceValues(e,r){const n=Zv({deadZoneSettings:e,globalDeadZone:r}),i=Jv(n);return{[ee.Keyboard]:{...Xc,currentInputs:{...this.currentKeyboardInputs}},[ee.Mouse]:{...An,currentInputs:{...this.currentMouseInputs}},...i}}startPollingLoop(){this.loopIsRunning||(this.loopIsRunning=!0,this.currentLoopIndex++,requestAnimationFrame(e=>{this.runPollingLoop(this.currentLoopIndex,e)}))}pausePollingLoop(){this.loopIsRunning&&(this.loopIsRunning=!1)}getLastPollResults(){return this.lastReadInputDevices}readAllDevices(e=this.gamepadDeadZoneSettings,r=performance.now(),n=this.globalDeadZone){const i=this.getCurrentDeviceValues(e,n),s=this.lastReadInputDevices;return this.lastReadInputDevices=i,this.fireEvents(r,s,i),i}updateGamepadDeadZoneSettings(e){this.gamepadDeadZoneSettings=e}}class tu extends we()("vir-line-pause"){}class i2 extends we()("vir-line-state-rate-calculated"){}class s2 extends we()("vir-line-state-change"){}class ru extends we()("vir-line-error"){}class a2 extends Kr("vir-line-update-skipped"){}class o2 extends Kr("vir-line-destroy"){}const Ph="animation frames",l2={allowDuplicateStageNames:!1,enableLogging:!1,targetUpdateRate:void 0,init:{startUpdateLoopImmediately:!1},minUpdateRateCalculationInterval:{milliseconds:500},updateLoopInterval:Ph},c2=[(t,e)=>e in t,(t,e)=>e in t.constructor.prototype];function u2(t,e){return t?c2.some(r=>{try{return r(t,e)}catch{return!1}}):!1}function Zs(t){let e;try{e=Reflect.ownKeys(t)}catch{}return e??[...Object.keys(t),...Object.getOwnPropertySymbols(t)]}async function d2(t,e){await f2(t,e)}async function f2(t,e){return await t.reduce(async(n,i,s,a)=>{const o=await n,l=await e(i,s,a);return o.push(l),o},Promise.resolve([]))}function h2(t){return!!t}function m2({value:t,wrapper:e}){return[e,e].join(t)}var nu;(function(t){t.Upper="upper",t.Lower="lower"})(nu||(nu={}));var iu;(function(t){t.FirstThenWait="first-then-wait",t.AfterWait="after-wait"})(iu||(iu={}));function p2(t){return t?t instanceof Error?t.message:u2(t,"message")?String(t.message):String(t):""}function g2(t){return t instanceof Error?t:new Error(p2(t))}function su(t,e){const r=g2(t);return r.message=`${e}: ${r.message}`,r}function w2(t,e){return Zs(t).filter(n=>{const i=t[n];return e(n,i,t)}).reduce((n,i)=>(n[i]=t[i],n),{})}function y2(t,e){return w2(t,r=>!e.includes(r))}function b2(t,e){let r=!1;const n=Zs(t).reduce((i,s)=>{const a=e(s,t[s],t);return a instanceof Promise&&(r=!0),{...i,[s]:a}},{});return r?new Promise(async(i,s)=>{try{await Promise.all(Zs(n).map(async a=>{const o=await n[a];n[a]=o})),i(n)}catch(a){s(a)}}):n}function Ys(t,e){try{return v2(t,e),!0}catch{return!1}}function v2(t,e,r){if(t.length<e)throw new Error(r?`'${r}' is not at least '${e}' in length.`:`Array is not at least '${e}' in length.`)}function Oh(...t){if(!Ys(t,1))return{};if(t.length===1)return t[0];let e;const r={};return t.forEach(n=>{if(k(n,"object"))k(e,"object")||(e={...n});else{e=n;return}Object.entries(n).forEach(([i,s])=>{r[i]||(r[i]=[]),r[i].push(s)})}),k(e,"object")&&Object.entries(r).forEach(([n,i])=>{const s=Oh(...i);s===void 0&&n in e?delete e[n]:s!==void 0&&(e[n]=s)}),e}function $2(t){return!!t&&typeof t=="object"}function E2(t){return lm(t)||t instanceof RegExp||t instanceof Promise}function Js(t,e){if(Array.isArray(t))return t.map(n=>Js(n,e));const r=[];return y2(b2(t,(n,i)=>{const s=e[n];if(s===!0)return i;if(s)return Js(i,s);r.push(n)}),r)}function au(t,e){const r=Js(t,e);return Xs(r,e)}function Xs(t,e){if(E2(t))return t;const r=Object.keys(t);return Array.isArray(t)?t.map(n=>Xs(n,e)):Ys(r,2)?t:Ys(r,1)&&$2(e)?Xs(t[r[0]],e[r[0]]):t}async function ou(t){return await Promise.resolve().then(()=>t())}function T2(){return globalThis.crypto?globalThis.crypto:require("crypto").webcrypto}T2();function S2(t,e){const r=[],n=new Set;if(t.forEach(i=>{const s=i.stageId.name;n.has(s)?r.push(s):n.add(s)}),r.length&&!e.allowDuplicateStageNames)throw new Error(`Duplicate stage names provided to VirLine: ${r.join(", ")}`)}function k2(t){return[t.name,t.version!=null?String(t.version):void 0].filter(h2).join("@")}function Hn(t,e){if(t===e)return!0;if(t&&e&&typeof t=="object"&&typeof e=="object"){if(t.constructor!==e.constructor)return!1;var r,n,i;if(Array.isArray(t)){if(r=t.length,r!=e.length)return!1;for(n=r;n--!==0;)if(!Hn(t[n],e[n]))return!1;return!0}if(t instanceof Map&&e instanceof Map){if(t.size!==e.size)return!1;for(n of t.entries())if(!e.has(n[0]))return!1;for(n of t.entries())if(!Hn(n[1],e.get(n[0])))return!1;return!0}if(t instanceof Set&&e instanceof Set){if(t.size!==e.size)return!1;for(n of t.entries())if(!e.has(n[0]))return!1;return!0}if(ArrayBuffer.isView(t)&&ArrayBuffer.isView(e)){if(r=t.length,r!=e.length)return!1;for(n=r;n--!==0;)if(t[n]!==e[n])return!1;return!0}if(t.constructor===RegExp)return t.source===e.source&&t.flags===e.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===e.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===e.toString();if(i=Object.keys(t),r=i.length,r!==Object.keys(e).length)return!1;for(n=r;n--!==0;)if(!Object.prototype.hasOwnProperty.call(e,i[n]))return!1;for(n=r;n--!==0;){var s=i[n];if(!Hn(t[s],e[s]))return!1}return!0}return t!==t&&e!==e}class Nh extends na{get stateType(){throw new Error("Access to 'stateType' is only allowed as a type.")}constructor(e,r,n){super(),Object.defineProperty(this,"stages",{enumerable:!0,configurable:!0,writable:!0,value:e}),Object.defineProperty(this,"options",{enumerable:!0,configurable:!0,writable:!0,value:l2}),Object.defineProperty(this,"isUpdateLoopPaused",{enumerable:!0,configurable:!0,writable:!0,value:!0}),Object.defineProperty(this,"currentState",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"lastStateUpdateHighResTimestamp",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"updateRateCounters",{enumerable:!0,configurable:!0,writable:!0,value:{calculatedAtHighResTimestamp:performance.now(),updateCount:0}}),Object.defineProperty(this,"isCurrentlyUpdating",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"stateListeners",{enumerable:!0,configurable:!0,writable:!0,value:[]}),this.currentState={...r},n&&this.updateOptions(n),S2(e,this.options),this.options.init.startUpdateLoopImmediately&&this.startUpdateLoop()}updateOptions(e){this.options=Oh(this.options,e)}startUpdateLoop(){return this.isUpdateLoopPaused?(this.isUpdateLoopPaused=!1,this.dispatch(new tu({detail:!1})),this.updateRateCounters={calculatedAtHighResTimestamp:performance.now(),updateCount:0},this.runUpdateLoop(),!0):!1}pauseUpdateLoop(){return this.isUpdateLoopPaused?!1:(this.isUpdateLoopPaused=!0,this.dispatch(new tu({detail:!0})),!0)}destroy(){this.pauseUpdateLoop(),this.removeAllStateListeners(),this.dispatch(new o2),super.destroy()}listenToState(e,r,n){const i=this.stateListeners.find(a=>le(a.selection,r)),s=au(this.currentState,r);return i?i.listeners.add(n):this.stateListeners.push({selection:r,lastValue:s,listeners:new Set([n])}),e&&n(s),()=>this.removeStateListener(r,n)}removeAllStateListeners(){this.stateListeners=[]}removeStateListener(e,r){const n=this.stateListeners.findIndex(s=>le(s.selection,e)),i=this.stateListeners[n];return!i||!i.listeners.delete(r)?!1:(i.listeners.size||this.stateListeners.splice(n,1),!0)}async triggerUpdate(){if(this.isCurrentlyUpdating){this.dispatch(new a2),this.options.enableLogging&&console.warn("Update skipped: another is still in progress.");return}this.isCurrentlyUpdating=!0;const e=performance.now(),r={milliseconds:e-this.lastStateUpdateHighResTimestamp};this.lastStateUpdateHighResTimestamp=e,this.updateRateCounters.updateCount++,this.options.enableLogging&&console.info(`updating state at: ${e}`);const n=await this.runStateUpdate(e,r);if(this.options.enableLogging&&console.info(`state update took: ${performance.now()-e}`),this.isCurrentlyUpdating=!1,n)throw n;this.fireStateListeners()}runUpdateLoop(){ou(()=>this.triggerUpdate());const e=()=>{this.isUpdateLoopPaused||this.runUpdateLoop()};if(this.options.updateLoopInterval===Ph)window.requestAnimationFrame(e);else{const r=zo(this.options.updateLoopInterval,L.Milliseconds);setTimeout(e,r.milliseconds)}}async fireStateListeners(){this.dispatch(new s2({detail:this.currentState}));const e=[];this.stateListeners.forEach(r=>{const n=au(this.currentState,r.selection);Hn(n,r.lastValue)||(r.lastValue=n,r.listeners.forEach(i=>{e.push(ou(async()=>await i(n)))}))}),await Promise.all(e)}async runStateUpdate(e,r){try{const n={timeSinceLastUpdate:r,updateStartTime:{milliseconds:e}};await d2(this.stages,async i=>{const s={...n,state:this.currentState};try{await i.executor(s)}catch(a){const o=su(a,`Stage ${m2({value:k2(i.stageId),wrapper:"'"})} failed`);console.error(o),this.dispatch(new ru({detail:o}))}}),this.calculateUpdateRate(e);return}catch(n){const i=su(n,"Failed to update state");return console.error(i),this.dispatch(new ru({detail:i})),i}}calculateUpdateRate(e){if(this.options.minUpdateRateCalculationInterval==null)return;const r=zo(this.options.minUpdateRateCalculationInterval,L.Milliseconds).milliseconds,n=e-this.updateRateCounters.calculatedAtHighResTimestamp;if(n>r){const i=this.updateRateCounters.updateCount;this.updateRateCounters={calculatedAtHighResTimestamp:e,updateCount:0},this.dispatch(new i2({detail:{calculatedAt:Mg(e+performance.timeOrigin,mg),durationSinceLastCalculation:{milliseconds:n},updateCount:i,updatesPerSecond:i/n*1e3}}))}}}function M2(t){return vv(Ci(t).map(([e,r])=>[r,e]))}const Ih={stageId:{name:"read actions"},executor({state:t,timeSinceLastUpdate:e}){if(!t.playersActionsBindings||!Object.keys(t.playersActionsBindings).length||!t.rawInputs||!Object.keys(t.rawInputs).length){t.playersActiveActions={};return}const r=M2(t.deviceKeyMap||{}),n=ar(t.playersActionsBindings,(i,s)=>{var a;return x2({actionsBindingsMap:s,activeActionsMap:(a=t.playersActiveActions)==null?void 0:a[i],rawInputs:t.rawInputs,reversedDeviceKeyMap:r,timeSinceLastUpdate:e})});t.playersActiveActions=n}};function x2({actionsBindingsMap:t,activeActionsMap:e,reversedDeviceKeyMap:r,rawInputs:n,timeSinceLastUpdate:i}){return Ci(t).reduce((s,[a,o])=>{var c;const l=Ev(o,d=>{var h;const u=r[d.deviceKey]??d.deviceKey,f=(h=n==null?void 0:n[u])==null?void 0:h[d.inputName];if((f==null?void 0:f.direction)===d.direction)return f},Tv);if(l.length){const d=l.reduce((h,m)=>h+m.inputValue,0),u=(c=e==null?void 0:e[a])==null?void 0:c.duration,f=u?u.milliseconds+i.milliseconds:0;s[a]={duration:{milliseconds:Math.round(f)},value:d}}return s},{})}var se=(t=>(t.Positive="positive",t.Flat="flat",t.Negative="negative",t))(se||{});function Dh(t){return t===0?"flat":t<0?"negative":"positive"}function A2(t){return ar(t,(e,r)=>({deviceKey:e,deviceName:r.deviceName,deviceType:r.deviceType}))}const Wa={stageId:{name:"read raw input"},executor({state:t,timeSinceLastUpdate:e}){const r=t.deviceHandler.readAllDevices(),n=ar(r,(s,a)=>{const o=a;return ar(o.currentInputs,(l,c)=>{var h,m;const d=Dh(c.inputValue),u=(m=(h=t.rawInputs)==null?void 0:h[s])==null?void 0:m[l],f=(u==null?void 0:u.direction)===d?{milliseconds:u.duration.milliseconds+e.milliseconds}:{milliseconds:0};return{deviceKey:s,deviceName:o.deviceName,deviceType:o.deviceType,direction:d,duration:f,inputName:l,inputValue:c.inputValue}})}),i=A2(r);t.rawInputs=n,t.currentInputDevices=i}},C2={1:{jump:[{deviceKey:"keyboard",direction:se.Positive,inputName:"button-Space"}],left:[{deviceKey:"keyboard",direction:se.Positive,inputName:"button-KeyA"},{deviceKey:"keyboard",direction:se.Positive,inputName:"button-KeyJ"},{deviceKey:"keyboard",direction:se.Positive,inputName:"button-ArrowLeft"}],right:[{deviceKey:"keyboard",direction:se.Positive,inputName:"button-KeyD"},{deviceKey:"keyboard",direction:se.Positive,inputName:"button-KeyL"},{deviceKey:"keyboard",direction:se.Positive,inputName:"button-ArrowRight"}]}},lu=ye()({tagName:"vir-read-actions-stage-debug",styles:$`
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
    `,stateInitStatic:{deviceHandler:void 0,pipeline:void 0,activeActions:{}},initCallback({state:t,updateState:e,inputs:r}){const n=t.deviceHandler||r.inputDeviceHandler||new Pi;t.deviceHandler||e({deviceHandler:n});const i=t.pipeline||new Nh([Wa,Ih],{deviceHandler:n,playersActionsBindings:r.actionBindings||C2},{init:{startUpdateLoopImmediately:!0}});t.pipeline||e({pipeline:i}),i.listenToState(!0,{playersActiveActions:!0},s=>{e({activeActions:s||{}})})},cleanupCallback({inputs:t,state:e,updateState:r}){var n,i;t.inputDeviceHandler||(n=e.deviceHandler)==null||n.destroy(),(i=e.pipeline)==null||i.destroy(),r({deviceHandler:void 0,pipeline:void 0})},renderCallback({state:t}){if(!t.deviceHandler||!t.pipeline)return N;const e=Object.entries(t.activeActions).map(([i,s])=>p`
                    <section class="action">
                        <h3>${i}</h3>
                        <pre>${JSON.stringify(s,null,4)}</pre>
                    </section>
                `),r=!e.length,n=t.pipeline.currentState.playersActionsBindings||{};return console.log("1",n),p`
            <h2>Action Bindings</h2>
            <${Gc.assign({playersActionsBindingsMap:n})}></${Gc}>
            <h2>Active Actions</h2>
            ${r?p`
                      <p class="no-actions">No inputs</p>
                  `:e}
        `},options:{ignoreUnsetInputs:!0}}),cu=ye()({tagName:"vir-read-raw-input-stage-debug",styles:$`
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
    `,stateInitStatic:{deviceHandler:void 0,pipeline:void 0,rawInputs:{}},initCallback({state:t,updateState:e,inputs:r}){const n=t.deviceHandler||r.inputDeviceHandler||new Pi;t.deviceHandler||e({deviceHandler:n});const i=t.pipeline||new Nh([Wa],{deviceHandler:n},{init:{startUpdateLoopImmediately:!0}});t.pipeline||e({pipeline:i}),i.listenToState(!0,{rawInputs:!0},s=>{e({rawInputs:s||{}})})},cleanupCallback({inputs:t,state:e,updateState:r}){var n,i;t.inputDeviceHandler||(n=e.deviceHandler)==null||n.destroy(),(i=e.pipeline)==null||i.destroy(),r({deviceHandler:void 0,pipeline:void 0})},renderCallback({state:t}){return!t.deviceHandler||!t.pipeline?N:Object.entries(t.rawInputs).map(([e,r])=>{const i=!r||Object.keys(r).length===0?p`
                          <p class="no-inputs">No inputs</p>
                      `:p`
                          <pre>${JSON.stringify(r,null,4)}</pre>
                      `;return p`
                    <section class="device">
                        <b>${e}</b>
                        ${i}
                    </section>
                `})},options:{ignoreUnsetInputs:!0}}),_h={[j.Gamepad]:"🎮",[j.Keyboard]:"⌨️",[j.Mouse]:"🖱"},L2={[se.Flat]:"",[se.Negative]:"➖",[se.Positive]:"➕"};function P2(t){return t.map(e=>({value:e,sort:Cv()})).sort((e,r)=>e.sort.localeCompare(r.sort)).map(({value:e})=>e)}const O2=P2(["red","orange","gold","yellow","lime","green","cyan","blue","purple","magenta"]),uu={milliseconds:700},kt=ye()({tagName:"vir-glow-pulse",styles:$`
        :host {
            display: inline-flex;
        }
    `,stateInitStatic:{lastTimestamp:0,colorIndex:0},renderCallback({inputs:t,host:e,state:r,updateState:n}){const i=t.glowColors&&t.glowColors.length?t.glowColors:O2,s=Date.now()-uu.milliseconds,a=t.pulse&&t.pulse.timestamp>s?t.pulse:void 0;a&&n({colorIndex:kv({min:0,max:i.length-1,value:r.colorIndex+1})});const o=i[r.colorIndex];if(!o)throw new Error("Exceeded colors array size somehow.");return a&&a.timestamp!==r.lastTimestamp&&o!=null&&(e.getAnimations().forEach(l=>l.cancel()),e.animate([{filter:`drop-shadow(0 0 6px ${o}) drop-shadow(0 0 6px ${o}) drop-shadow(0 0 6px ${o})`},{filter:`drop-shadow(0 0 0 ${o}) drop-shadow(0 0 0 ${o})`}],{duration:uu.milliseconds/2,iterations:1}),n({lastTimestamp:a.timestamp})),p`
            <slot></slot>
        `}}),du=ye()({tagName:"vir-device-chip",styles:$`
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
    `,renderCallback({inputs:t,host:e}){const r=xh[t.deviceKey],n=_h[r],i=Number(t.deviceKey)+1,s=r===j.Gamepad&&!t.hideGamepadPort?p`
                      <span>${i}</span>
                  `:N,a=r===j.Gamepad?`gamepad ${i}`:r;e.getAttribute("title")!==a&&e.setAttribute("title",a);const o=p`
            <span class="device-emoji">${n}</span>
        `;return t.lastInputTime?p`
                <${kt.assign({pulse:t.lastInputTime,glowColors:t.activityColors})}>
                    ${o}
                </${kt}>
                ${s}
            `:p`
                ${o} ${s}
            `}});function Rh(t){return t.deviceKey===ee.Mouse&&(t.inputName==="axe-x"||t.inputName==="axe-y")}const gs=ye()({tagName:"vir-device-list",styles:$`
        :host {
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            gap: 16px;
        }
    `,stateInitStatic:{deviceHandler:void 0,deviceTimestamps:{},cleanup:void 0},initCallback({inputs:t,state:e,updateState:r}){const n=t.inputDeviceHandler||new Pi({startLoopImmediately:!0});e.deviceHandler||r({deviceHandler:n});function i(){return ar(n.getLastPollResults(),a=>e.deviceTimestamps[a]||{timestamp:0})}const s=t.disableGlowPulses?void 0:n.listen(za,a=>{const o=i();a.detail.inputs.newInputs.forEach(l=>{!t.showMouseMovement&&Rh(l)||(o[l.deviceKey]={timestamp:Date.now()})}),r({deviceTimestamps:o})});r({cleanup:s,deviceTimestamps:i()})},cleanupCallback({inputs:t,state:e,updateState:r}){var n,i;(n=e.cleanup)==null||n.call(e),t.inputDeviceHandler||(i=e.deviceHandler)==null||i.destroy(),r({cleanup:void 0,deviceHandler:void 0})},renderCallback({state:t}){return Ci(t.deviceTimestamps).map(([r,n])=>p`
                    <${du.assign({deviceKey:r,lastInputTime:n})}></${du}>
                `)},options:{ignoreUnsetInputs:!0}}),Qs=52,$r=ye()({tagName:"vir-simple-player-assign-bindings",styles:$`
        :host {
            display: flex;
            flex-direction: column;
        }

        th {
            text-align: right;
            height: ${Qs}px;
            padding: 8px 0;
            padding-right: 16px;
        }

        .bindings {
            display: flex;
            align-items: center;
            flex-wrap: wrap;
            gap: 8px;
            border: 1px solid #eee;
            min-height: ${Qs+18}px;
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
            ${an};
        }
        .empty-bindings {
            display: flex;
            justify-content: center;
        }
    `,events:{inputListen:ne(),bindingsUpdate:ne()},stateInitStatic:{listeningForAction:void 0},renderCallback({inputs:t,dispatch:e,events:r,state:n,updateState:i}){const s=t.actionNames.map(a=>{var f;const o=((f=t.playersActionsBindings)==null?void 0:f[`${t.playerPosition}`])||{},l=o[a]||[],c=l.length?l.map((h,m)=>p`
                          <${ws.assign({...h})}
                              ${_(ws.events.removeBinding,()=>{const g={...o,[a]:$v(l,[m])};e(new r.bindingsUpdate(g))})}
                          ></${ws}>
                      `):p`
                      <p class="empty-bindings">Empty</p>
                  `,d=n.listeningForAction===a,u=d&&t.listeningToInput?p`
                          <div class="listening-overlay"><span>Listening for input...</span></div>
                      `:N;return p`
                <tr
                    class=${ze({fade:t.listeningToInput})}
                >
                    <td class="fadable">
                        <${Nc.assign({text:"+",disabled:t.listeningToInput})}
                            class="add"
                            ${_("click",()=>{var h;e(new r.inputListen(!0)),i({listeningForAction:a}),(h=t.deviceHandler)==null||h.listen(za,(m,g)=>{const y=m.detail.inputs.newInputs[0];if(!y)return;const b={deviceKey:y.deviceKey,direction:Dh(y.inputValue),inputName:y.inputName};if(!t.allowMouseMovement&&Rh(y))return;if(!l.some(O=>le(b,O))){const O={...o,[a]:[...l,b]};e(new r.bindingsUpdate(O))}g(),e(new r.inputListen(!1)),i({listeningForAction:void 0})})})}
                        ></${Nc}>
                    </td>
                    <th class=${ze({fadable:!d})}>${a}:</th>
                    <td class=${ze({fadable:!d})}>
                        <div
                            class="bindings ${ze({"empty-bindings":!l.length})}"
                        >
                            ${u}${c}
                        </div>
                    </td>
                </tr>
            `});return p`
            <table><tbody>${s}</tbody></table>
        `}}),ws=ye()({tagName:"vir-binding-chip",styles:$`
        :host {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-between;
            background-color: #f0f0f0;
            border-radius: 8px;
            padding: 8px;
            font-size: 0.8em;
            height: ${Qs}px;
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
            ${Ge};
            transition: opacity
                ${xe["vira-interaction-animation-duration"].value};
        }
        :host(:hover) .remove-overlay {
            opacity: 1;
        }
    `,events:{removeBinding:ne()},renderCallback({inputs:t,dispatch:e,events:r}){const n=xh[t.deviceKey],i=_h[n],s=Number(t.deviceKey)+1,a=n===j.Gamepad?p`
                      <span>${s}</span>
                  `:N,o=zv(t.inputName)===lr.Axe?p`
                      <span>${L2[t.direction]}</span>
                  `:N,l=n===j.Gamepad?`controller in slot ${s}`:t.deviceKey;return p`
            <div
                class="remove-overlay"
                ${_("click",()=>{e(new r.removeBinding)})}
            >
                <span>×</span>
            </div>
            <div>${t.inputName} ${o}</div>
            <div title=${l}>${i} ${a}</div>
        `}}),Cn=ye()({tagName:"vir-simple-assign-bindings",styles:$`
        :host {
            display: flex;
            gap: 32px;
        }

        ${$r} {
            min-width: 300px;
        }

        .player-assignment {
            flex-grow: 1;
        }
    `,events:{playersActionsBindingsUpdate:ne()},stateInitStatic:{deviceHandler:void 0,cleanup:void 0,currentDevices:{},listeningToInput:!1},initCallback({inputs:t,state:e,updateState:r}){const n=e.deviceHandler||t.inputDeviceHandler||new Pi({startLoopImmediately:!0,...t.globalDeadZone?{globalDeadZone:t.globalDeadZone}:{},...t.gamepadDeadZoneSettings?{gamepadDeadZoneSettings:t.gamepadDeadZoneSettings}:{}});e.deviceHandler||r({deviceHandler:n});function i(){const o=ar(n.readAllDevices(),(l,c)=>({deviceKey:l,deviceName:c.deviceName,deviceType:c.deviceType}));r({currentDevices:o})}const s=n.listen(Ch,i),a=n.listen(Ah,i);r({cleanup(){s(),a()}}),i()},cleanupCallback({inputs:t,state:e,updateState:r}){var n,i;t.inputDeviceHandler||(n=e.deviceHandler)==null||n.destroy(),(i=e.cleanup)==null||i.call(e),r({deviceHandler:void 0,cleanup:void 0})},renderCallback({state:t,inputs:e,updateState:r,dispatch:n,events:i}){const s=t.deviceHandler;if(s){if(e.supportedPlayerCount<1)throw new Error("Cannot support < 1 players.")}else return N;const a=e.supportedPlayerCount>1;return Array(e.supportedPlayerCount).fill(0).map((o,l)=>{const c=l+1,d=a?p`
                          <h3>Player ${c}</h3>
                      `:N;return p`
                    <section class="player-assignment">
                        ${d}
                        <${$r.assign({actionNames:e.actionNames,playerPosition:c,playersActionsBindings:e.playersActionsBindings,listeningToInput:t.listeningToInput,deviceHandler:s,allowMouseMovement:e.allowMouseMovement||!1})}
                            ${_($r.events.inputListen,u=>{r({listeningToInput:u.detail})})}
                            ${_($r.events.bindingsUpdate,u=>{const f={...e.playersActionsBindings,[String(c)]:u.detail};n(new i.playersActionsBindingsUpdate(f))})}
                        ></${$r}>
                    </section>
                `})},options:{ignoreUnsetInputs:!0}}),Vh=Lt({parent:void 0,title:"Stages"}),Ga=Lt({parent:void 0,title:"Elements"}),N2=Lt({parent:Vh,title:Ih.stageId.name,elementExamplesCallback({defineExample:t}){t({title:"Debugging",renderCallback(){return p`
                    <${lu}></${lu}>
                `}})}}),I2=Lt({parent:Vh,title:Wa.stageId.name,elementExamplesCallback({defineExample:t}){t({title:"Debugging",renderCallback(){return p`
                    <${cu}></${cu}>
                `}})}}),D2=Lt({title:gs.tagName,parent:Ga,elementExamplesCallback({defineExample:t}){t({title:"example",renderCallback(){return p`
                    <${gs}></${gs}>
                `}})}}),Ln=ye()({tagName:"vir-glow-pulse-book-wrapper",stateInitStatic:{intervalId:void 0,animation:void 0},initCallback({state:t,updateState:e,inputs:r}){t.intervalId==null&&e({intervalId:window.setInterval(()=>{e({animation:{timestamp:Date.now()}})},r.milliseconds)})},cleanupCallback({state:t,updateState:e}){t.intervalId!=null&&(window.clearInterval(t.intervalId),e({intervalId:void 0}))},renderCallback({state:t,inputs:e}){return p`
            <${kt.assign({pulse:t.animation,glowColors:e.colors})}>
                ⚪️
            </${kt}>
        `}}),_2=Lt({parent:Ga,title:kt.tagName,descriptionParagraphs:["Used to give repeated emphasis to an element. In particular, this is used for showing controller activity in vir-device-list."],elementExamplesCallback({defineExample:t}){t({title:"automatic",styles:$`
                :host {
                    ${Ge};
                }
            `,renderCallback(){return p`
                    <${Ln.assign({milliseconds:500})}></${Ln}>
                `}}),t({title:"custom colors",styles:$`
                :host {
                    ${Ge};
                }
            `,renderCallback(){return p`
                    <${Ln.assign({milliseconds:500,colors:["blue","navy","dodgerblue","skyblue","lightblue"]})}></${Ln}>
                `}}),t({title:"on click",stateInitStatic:{animation:void 0},styles:$`
                :host {
                    ${Ge};
                }
            `,renderCallback({state:e,updateState:r}){return p`
                    <${kt.assign({pulse:e.animation})}
                        ${_("click",()=>{r({animation:{timestamp:Date.now()}})})}
                    >
                        ⚪️
                    </${kt}>
                `}})}});var fu;(function(t){t.Upper="upper",t.Lower="lower"})(fu||(fu={}));var hu;(function(t){t.FirstThenWait="first-then-wait",t.AfterWait="after-wait"})(hu||(hu={}));function R2(){return globalThis.crypto?globalThis.crypto:require("crypto").webcrypto}R2();const V2=Lt({parent:Ga,title:Cn.tagName,elementExamplesCallback({defineExample:t}){t({title:"Default",styles:$`
                .size {
                    width: 1000px;
                    max-width: 100%;
                }
            `,stateInitStatic:{playersActionsBindings:{1:{up:[{deviceKey:"0",direction:se.Positive,inputName:"button-2"},{deviceKey:"keyboard",direction:se.Positive,inputName:"button-ArrowUp"}],down:[{deviceKey:"0",direction:se.Positive,inputName:"axe-1"}]}}},renderCallback({state:e,updateState:r}){return p`
                    <div class="size">
                        <${Cn.assign({actionNames:["up","down","left","right","jump","pause"],supportedPlayerCount:2,playersActionsBindings:e.playersActionsBindings})}
                            ${_(Cn.events.playersActionsBindingsUpdate,n=>{r({playersActionsBindings:n.detail})})}
                        ></${Cn}>
                    </div>
                `}})}}),H2=[N2,I2,D2,_2,V2];vi({tagName:"game-vir-demo-app",renderCallback(){return p`
            <${Fc.assign({internalRouterConfig:{basePath:Na("game-vir","book"),useInternalRouter:!0},entries:H2,themeColor:"#33ccff"})}></${Fc}>
        `}});

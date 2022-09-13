function t(t,e,s){return e in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const e=window,s=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol(),r=new WeakMap;class o{constructor(t,e,s){if(this._$cssResult$=!0,s!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(s&&void 0===t){const s=void 0!==e&&1===e.length;s&&(t=r.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&r.set(e,t))}return t}toString(){return this.cssText}}const n=(t,...e)=>{const s=1===t.length?t[0]:e.reduce(((e,s,i)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[i+1]),t[0]);return new o(s,t,i)},l=s?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return(t=>new o("string"==typeof t?t:t+"",void 0,i))(e)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;var a;const h=window,c=h.trustedTypes,d=c?c.emptyScript:"",u=h.reactiveElementPolyfillSupport,p={toAttribute(t,e){switch(e){case Boolean:t=t?d:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let s=t;switch(e){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t)}catch(t){s=null}}return s}},g=(t,e)=>e!==t&&(e==e||t==t),v={attribute:!0,type:String,converter:p,reflect:!1,hasChanged:g};class _ extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var e;null!==(e=this.h)&&void 0!==e||(this.h=[]),this.h.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,s)=>{const i=this._$Ep(s,e);void 0!==i&&(this._$Ev.set(i,s),t.push(i))})),t}static createProperty(t,e=v){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const s="symbol"==typeof t?Symbol():"__"+t,i=this.getPropertyDescriptor(t,s,e);void 0!==i&&Object.defineProperty(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){return{get(){return this[e]},set(i){const r=this[t];this[e]=i,this.requestUpdate(t,r,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||v}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const s of e)this.createProperty(s,t[s])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const t of s)e.unshift(l(t))}else void 0!==t&&e.push(l(t));return e}static _$Ep(t,e){const s=e.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,s;(null!==(e=this._$ES)&&void 0!==e?e:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(s=t.hostConnected)||void 0===s||s.call(t))}removeController(t){var e;null===(e=this._$ES)||void 0===e||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])}))}createRenderRoot(){var t;const i=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return((t,i)=>{s?t.adoptedStyleSheets=i.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):i.forEach((s=>{const i=document.createElement("style"),r=e.litNonce;void 0!==r&&i.setAttribute("nonce",r),i.textContent=s.cssText,t.appendChild(i)}))})(i,this.constructor.elementStyles),i}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$EO(t,e,s=v){var i;const r=this.constructor._$Ep(t,s);if(void 0!==r&&!0===s.reflect){const o=(void 0!==(null===(i=s.converter)||void 0===i?void 0:i.toAttribute)?s.converter:p).toAttribute(e,s.type);this._$El=t,null==o?this.removeAttribute(r):this.setAttribute(r,o),this._$El=null}}_$AK(t,e){var s;const i=this.constructor,r=i._$Ev.get(t);if(void 0!==r&&this._$El!==r){const t=i.getPropertyOptions(r),o="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(s=t.converter)||void 0===s?void 0:s.fromAttribute)?t.converter:p;this._$El=r,this[r]=o.fromAttribute(e,t.type),this._$El=null}}requestUpdate(t,e,s){let i=!0;void 0!==t&&(((s=s||this.constructor.getPropertyOptions(t)).hasChanged||g)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===s.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,s))):i=!1),!this.isUpdatePending&&i&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((t,e)=>this[e]=t)),this._$Ei=void 0);let e=!1;const s=this._$AL;try{e=this.shouldUpdate(s),e?(this.willUpdate(s),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(s)):this._$Ek()}catch(t){throw e=!1,this._$Ek(),t}e&&this._$AE(s)}willUpdate(t){}_$AE(t){var e;null===(e=this._$ES)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,e)=>this._$EO(e,this[e],t))),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var f;_.finalized=!0,_.elementProperties=new Map,_.elementStyles=[],_.shadowRootOptions={mode:"open"},null==u||u({ReactiveElement:_}),(null!==(a=h.reactiveElementVersions)&&void 0!==a?a:h.reactiveElementVersions=[]).push("1.4.1");const m=window,y=m.trustedTypes,b=y?y.createPolicy("lit-html",{createHTML:t=>t}):void 0,A=`lit$${(Math.random()+"").slice(9)}$`,x="?"+A,w=`<${x}>`,S=document,E=(t="")=>S.createComment(t),C=t=>null===t||"object"!=typeof t&&"function"!=typeof t,U=Array.isArray,P=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,k=/-->/g,H=/>/g,N=RegExp(">|[ \t\n\f\r](?:([^\\s\"'>=/]+)([ \t\n\f\r]*=[ \t\n\f\r]*(?:[^ \t\n\f\r\"'`<>=]|(\"|')|))|$)","g"),T=/'/g,j=/"/g,R=/^(?:script|style|textarea|title)$/i,O=(t=>(e,...s)=>({_$litType$:t,strings:e,values:s}))(1),M=Symbol.for("lit-noChange"),I=Symbol.for("lit-nothing"),L=new WeakMap,z=S.createTreeWalker(S,129,null,!1),D=(t,e)=>{const s=t.length-1,i=[];let r,o=2===e?"<svg>":"",n=P;for(let e=0;e<s;e++){const s=t[e];let l,a,h=-1,c=0;for(;c<s.length&&(n.lastIndex=c,a=n.exec(s),null!==a);)c=n.lastIndex,n===P?"!--"===a[1]?n=k:void 0!==a[1]?n=H:void 0!==a[2]?(R.test(a[2])&&(r=RegExp("</"+a[2],"g")),n=N):void 0!==a[3]&&(n=N):n===N?">"===a[0]?(n=null!=r?r:P,h=-1):void 0===a[1]?h=-2:(h=n.lastIndex-a[2].length,l=a[1],n=void 0===a[3]?N:'"'===a[3]?j:T):n===j||n===T?n=N:n===k||n===H?n=P:(n=N,r=void 0);const d=n===N&&t[e+1].startsWith("/>")?" ":"";o+=n===P?s+w:h>=0?(i.push(l),s.slice(0,h)+"$lit$"+s.slice(h)+A+d):s+A+(-2===h?(i.push(void 0),e):d)}const l=o+(t[s]||"<?>")+(2===e?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==b?b.createHTML(l):l,i]};class W{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let r=0,o=0;const n=t.length-1,l=this.parts,[a,h]=D(t,e);if(this.el=W.createElement(a,s),z.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(i=z.nextNode())&&l.length<n;){if(1===i.nodeType){if(i.hasAttributes()){const t=[];for(const e of i.getAttributeNames())if(e.endsWith("$lit$")||e.startsWith(A)){const s=h[o++];if(t.push(e),void 0!==s){const t=i.getAttribute(s.toLowerCase()+"$lit$").split(A),e=/([.?@])?(.*)/.exec(s);l.push({type:1,index:r,name:e[2],strings:t,ctor:"."===e[1]?G:"?"===e[1]?J:"@"===e[1]?K:F})}else l.push({type:6,index:r})}for(const e of t)i.removeAttribute(e)}if(R.test(i.tagName)){const t=i.textContent.split(A),e=t.length-1;if(e>0){i.textContent=y?y.emptyScript:"";for(let s=0;s<e;s++)i.append(t[s],E()),z.nextNode(),l.push({type:2,index:++r});i.append(t[e],E())}}}else if(8===i.nodeType)if(i.data===x)l.push({type:2,index:r});else{let t=-1;for(;-1!==(t=i.data.indexOf(A,t+1));)l.push({type:7,index:r}),t+=A.length-1}r++}}static createElement(t,e){const s=S.createElement("template");return s.innerHTML=t,s}}function B(t,e,s=t,i){var r,o,n,l;if(e===M)return e;let a=void 0!==i?null===(r=s._$Cl)||void 0===r?void 0:r[i]:s._$Cu;const h=C(e)?void 0:e._$litDirective$;return(null==a?void 0:a.constructor)!==h&&(null===(o=null==a?void 0:a._$AO)||void 0===o||o.call(a,!1),void 0===h?a=void 0:(a=new h(t),a._$AT(t,s,i)),void 0!==i?(null!==(n=(l=s)._$Cl)&&void 0!==n?n:l._$Cl=[])[i]=a:s._$Cu=a),void 0!==a&&(e=B(t,a._$AS(t,e.values),a,i)),e}class q{constructor(t,e){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var e;const{el:{content:s},parts:i}=this._$AD,r=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:S).importNode(s,!0);z.currentNode=r;let o=z.nextNode(),n=0,l=0,a=i[0];for(;void 0!==a;){if(n===a.index){let e;2===a.type?e=new V(o,o.nextSibling,this,t):1===a.type?e=new a.ctor(o,a.name,a.strings,this,t):6===a.type&&(e=new Q(o,this,t)),this.v.push(e),a=i[++l]}n!==(null==a?void 0:a.index)&&(o=z.nextNode(),n++)}return r}m(t){let e=0;for(const s of this.v)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}class V{constructor(t,e,s,i){var r;this.type=2,this._$AH=I,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$C_=null===(r=null==i?void 0:i.isConnected)||void 0===r||r}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$C_}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=B(this,t,e),C(t)?t===I||null==t||""===t?(this._$AH!==I&&this._$AR(),this._$AH=I):t!==this._$AH&&t!==M&&this.$(t):void 0!==t._$litType$?this.T(t):void 0!==t.nodeType?this.k(t):(t=>U(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]))(t)?this.O(t):this.$(t)}S(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}k(t){this._$AH!==t&&(this._$AR(),this._$AH=this.S(t))}$(t){this._$AH!==I&&C(this._$AH)?this._$AA.nextSibling.data=t:this.k(S.createTextNode(t)),this._$AH=t}T(t){var e;const{values:s,_$litType$:i}=t,r="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=W.createElement(i.h,this.options)),i);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===r)this._$AH.m(s);else{const t=new q(r,this),e=t.p(this.options);t.m(s),this.k(e),this._$AH=t}}_$AC(t){let e=L.get(t.strings);return void 0===e&&L.set(t.strings,e=new W(t)),e}O(t){U(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,i=0;for(const r of t)i===e.length?e.push(s=new V(this.S(E()),this.S(E()),this,this.options)):s=e[i],s._$AI(r),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){var s;for(null===(s=this._$AP)||void 0===s||s.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$C_=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class F{constructor(t,e,s,i,r){this.type=1,this._$AH=I,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=r,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=I}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,s,i){const r=this.strings;let o=!1;if(void 0===r)t=B(this,t,e,0),o=!C(t)||t!==this._$AH&&t!==M,o&&(this._$AH=t);else{const i=t;let n,l;for(t=r[0],n=0;n<r.length-1;n++)l=B(this,i[s+n],e,n),l===M&&(l=this._$AH[n]),o||(o=!C(l)||l!==this._$AH[n]),l===I?t=I:t!==I&&(t+=(null!=l?l:"")+r[n+1]),this._$AH[n]=l}o&&!i&&this.P(t)}P(t){t===I?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class G extends F{constructor(){super(...arguments),this.type=3}P(t){this.element[this.name]=t===I?void 0:t}}const Z=y?y.emptyScript:"";class J extends F{constructor(){super(...arguments),this.type=4}P(t){t&&t!==I?this.element.setAttribute(this.name,Z):this.element.removeAttribute(this.name)}}class K extends F{constructor(t,e,s,i,r){super(t,e,s,i,r),this.type=5}_$AI(t,e=this){var s;if((t=null!==(s=B(this,t,e,0))&&void 0!==s?s:I)===M)return;const i=this._$AH,r=t===I&&i!==I||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,o=t!==I&&(i===I||r);r&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,s;"function"==typeof this._$AH?this._$AH.call(null!==(s=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==s?s:this.element,t):this._$AH.handleEvent(t)}}class Q{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){B(this,t)}}const X=m.litHtmlPolyfillSupport;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var Y,tt;null==X||X(W,V),(null!==(f=m.litHtmlVersions)&&void 0!==f?f:m.litHtmlVersions=[]).push("2.3.1");class et extends _{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const s=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=s.firstChild),s}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,s)=>{var i,r;const o=null!==(i=null==s?void 0:s.renderBefore)&&void 0!==i?i:e;let n=o._$litPart$;if(void 0===n){const t=null!==(r=null==s?void 0:s.renderBefore)&&void 0!==r?r:null;o._$litPart$=n=new V(e.insertBefore(E(),t),t,void 0,null!=s?s:{})}return n._$AI(t),n})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1)}render(){return M}}et.finalized=!0,et._$litElement$=!0,null===(Y=globalThis.litElementHydrateSupport)||void 0===Y||Y.call(globalThis,{LitElement:et});const st=globalThis.litElementPolyfillSupport;function it(){}function rt(t){let e;return function(t,...e){if(null==t)return it;const s=t.subscribe(...e);return s.unsubscribe?()=>s.unsubscribe():s}(t,(t=>e=t))(),e}null==st||st({LitElement:et}),(null!==(tt=globalThis.litElementVersions)&&void 0!==tt?tt:globalThis.litElementVersions=[]).push("3.2.2"),Promise.resolve();const ot=[];class nt{constructor(t,e){this.host=t,this.getStore=e,t.addController(this)}hostUpdate(){this.resubscribe()}hostDisconnected(){this.unsubscribe()}unsubscribe(){this._unsubscribe&&(this._unsubscribe(),this._unsubscribe=void 0)}shouldResubscribe(t){return t!==this._previousStore&&(!t||!this._previousStore||rt(t)!==this.value)}store(){return this.getStore()}resubscribe(){const t=this.store();this.shouldResubscribe(t)&&(this.unsubscribe(),t&&(this._unsubscribe=t.subscribe((t=>{this.value=t,this.host.requestUpdate()}))),this._previousStore=t)}}customElements.define("city-selector",class extends et{static get properties(){return{id:{type:String}}}dispatchInput(t){this.dispatchEvent(new CustomEvent("city_changed",{bubbles:!0,detail:t}))}createRenderRoot(){return this}constructor(){super()}firstUpdated(){super.firstUpdated(),this.script()}script(){$(".carousel_"+this.id).jCarouselLite({btnNext:".next_"+this.id,btnPrev:".prev_"+this.id,vertical:!0,circular:!0,visible:1,mouseWheel:!0,autoWidth:!0,afterEnd:(t,e)=>{const s=$(".carousel_"+this.id+" li.active").attr("name");this.dispatchInput(s)}})}render(){return O` <a href="#" class="prev_${this.id}">&uarr;</a> <div class="carousel"> <div id="${this.id}" class="carousel_${this.id}"> <ul class="slides"> <li class="slide1" name="connection.png"> <img src="./assets/connection.png" alt="1" height="60px"> </li> <li class="slide1" name="freedom.png"> <img src="./assets/freedom.png" alt="2" height="60px"> </li> <li class="slide1" name="pleasure.png"> <img src="./assets/pleasure.png" alt="3" height="60px"> </li> <li class="slide1" name="creativity.png"> <img src="./assets/creativity.png" alt="3" height="60px"> </li> <li class="slide1" name="fear.png"> <img src="./assets/fear.png" alt="3" height="60px"> </li> <li class="slide1" name="trust.png"> <img src="./assets/trust.png" alt="3" height="60px"> </li> <li class="slide1" name="harmoney.png"> <img src="./assets/harmoney.png" alt="3" height="60px"> </li> </ul> </div> </div> <a href="#" class="next_${this.id}">&darr;</a> `}static get styles(){return n``}});customElements.define("color-mood",class extends et{dispatchInput(t){this.dispatchEvent(new CustomEvent("color_changed",{bubbles:!0,detail:t}))}static get properties(){return{default:{type:String}}}constructor(){super()}firstUpdated(){super.firstUpdated();var t=this.shadowRoot.getElementById("colorWheel");new iro.ColorPicker(t,{width:250,color:this.default?this.default:"rgb(255,255,255)",borderWidth:1,borderColor:"#fff",layout:[{component:iro.ui.Slider,options:{sliderType:"hue"}},{component:iro.ui.Slider,options:{sliderType:"saturation"}}]}).on("color:change",(t=>{t.rgb.r,t.rgb.g,t.rgb.b,this.dispatchInput(t.hex8String)}))}render(){return O` <div id="colorWheel"></div> `}static get styles(){return n`.colorWheel{align-items:right;text-align:right}`}});customElements.define("emoji-selector",class extends et{static get properties(){return{id:{type:String},color:{type:String},selectedItem:{type:Number}}}dispatchInput(t){this.dispatchEvent(new CustomEvent("emoji_changed",{bubbles:!0,detail:t}))}constructor(){super(),t(this,"score",0)}firstUpdated(){super.firstUpdated(),this.script(),this.selectDefault()}script(){var t=this.shadowRoot.querySelector(".slider"),e=t.querySelectorAll("ul li");t.firstElementChild.style.width=150*e.length+50+"px"}selectDefault(){if(this.selectedItem&&0!=this.selectedItem){this.score=this.selectedItem;var t=this.shadowRoot.querySelector(".slider").querySelectorAll("ul li");for(let e=0;e<this.selectedItem;e++)t[e].style.display="none"}}scroll(t){var e=this.shadowRoot.querySelector(".slider").querySelectorAll("ul li");if("down"==t.target.classList[1]){if(null==e[this.score].nextElementSibling)return;e[this.score].style.display="none",this.score++}if("top"==t.target.classList[1]){if(0==this.score)return;e[this.score-1].style.display="inline-block",this.score--}this.dispatchInput(this.score+1)}render(){return O` <div style="background-color:${this.color?this.color:"#eeeeee"}" class="slider"> <ul class="slide_list"> <li><img src="https://js.cx/carousel/1.png"></li> <li><img src="https://js.cx/carousel/2.png"></li> <li><img src="https://js.cx/carousel/3.png"></li> <li><img src="https://js.cx/carousel/4.png"></li> <li><img src="https://js.cx/carousel/5.png"></li> <li><img src="https://js.cx/carousel/6.png"></li> <li><img src="https://js.cx/carousel/7.png"></li> <li><img src="https://js.cx/carousel/8.png"></li> <li><img src="https://js.cx/carousel/9.png"></li> <li><img src="https://js.cx/carousel/10.png"></li> </ul> <button class="arrow top" @click="${this.scroll}">⇧</button> <button class="arrow down" @click="${this.scroll}">⇩</button> </div>`}static get styles(){return n`.slider{position:relative;border-radius:15px;overflow:none;width:130px;height:180px;overflow-x:hidden;margin:0}.slider ul li{display:inline-block}.slider ul li img{width:130px;height:130px}.slider .arrow{position:absolute;height:30px;width:1.2em;left:40%;padding:0;background:#ddd;border-radius:15px;border:1px solid gray;font-size:24px;color:#444}.slider .arrow.down{bottom:7px}.slider .arrow.top{top:0}.slider .arrow:focus{outline:0}.slider .arrow:hover{background:#ccc;cursor:pointer}.slide_list{background-color:transparent;padding:0;margin-top:25px}`}});let lt=function(t,e=it){let s;const i=new Set;function r(e){if(function(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}(t,e)&&(t=e,s)){const e=!ot.length;for(const e of i)e[1](),ot.push(e,t);if(e){for(let t=0;t<ot.length;t+=2)ot[t][0](ot[t+1]);ot.length=0}}}return{set:r,update:function(e){r(e(t))},subscribe:function(o,n=it){const l=[o,n];return i.add(l),1===i.size&&(s=e(r)||it),o(t),()=>{i.delete(l),0===i.size&&(s(),s=null)}}}}(new class{constructor(){this.then_txt="",this.when_txt="",this.then_face="Laughing-Smiley-Face-Silhouette.svg",this.when_face="Laughing-Smiley-Face-Silhouette.svg",this.when_color="#f7ffebff",this.then_color="#d9ddffff",this.city="connection.png"}});customElements.define("meme-svg",class extends et{constructor(){super(),t(this,"_store",new nt(this,(()=>lt)))}firstUpdated(){super.firstUpdated()}render(){return O` <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewbox="0 0 600 450"> <g> <g id="when"> <path transform="rotate(180 105.055 357.591)" stroke="#000" id="svg_18" d="m5.14863,291.14795l0,0c0,-11.21715 10.25057,-20.31043 22.89529,-20.31043l10.40696,0l0,0l49.95337,0l93.66257,0c6.07223,0 11.89573,2.13984 16.18943,5.94878c4.29369,3.80895 6.70588,8.97499 6.70588,14.36166l0,50.7761l0,0l0,30.46566l0,0c0,11.21715 -10.25057,20.31043 -22.89531,20.31043l-93.66256,0l-65.25793,51.64472l15.30455,-51.64472l-10.40695,0c-12.64473,0 -22.8953,-9.09329 -22.8953,-20.31043l0,0l0,-30.46566l0,0l0,-50.7761l0,-0.00001z" fill="${this._store.value.when_color}"/> <ellipse transform="rotate(180 202.692 223.66)" stroke="#000" y="43.67086" rx="43.67086" id="svg_19" cy="223.65982" cx="202.69171" fill="${this._store.value.when_color}"/> </g> <g id="then"> <path stroke="#000" id="svg_1" d="m406.50722,25.34762l0,0c0,-11.51438 9.77884,-20.84863 21.84166,-20.84863l9.92803,0l0,0l47.65454,0l89.35223,0c5.79278,0 11.34829,2.19654 15.4444,6.10642c4.09609,3.90988 6.39727,9.21281 6.39727,14.74221l0,52.12159l0,0l0,31.27294l0,0c0,11.51439 -9.77884,20.84863 -21.84166,20.84863l-89.35223,0l-62.25477,53.01323l14.60024,-53.01323l-9.92803,0c-12.06281,0 -21.84166,-9.33424 -21.84166,-20.84863l0,0l0,-31.27294l0,0l-0.00001,-52.12159l-0.00001,0z" fill="${this._store.value.then_color}"/> <ellipse stroke="#000" ry="43.67086" rx="43.67086" id="svg_4" cy="225" cx="394.9846" fill="${this._store.value.then_color}"/> </g> </g> <text x="20" y="355" style="fill:#000"> ${this._store.value.when_txt} </text> <text x="420" y="50" style="fill:#000"> ${this._store.value.then_txt} </text> <image href="../assets/${this._store.value.when_face}" x="160" y="185" height="80" width="80"/> <image href="../assets/${this._store.value.then_face}" x="355" y="185" height="80" width="80"/> </svg> `}});customElements.define("when-then",class extends et{static get properties(){return{title:{type:String}}}constructor(){super(),t(this,"_store",new nt(this,(()=>lt))),this.title="When Then meme"}clicked(t){alert(t.target.id)}whenchanged(t){lt.update((e=>(e.when_txt=t.target.value,e)))}thenchanged(t){lt.update((e=>(e.then_txt=t.target.value,e)))}when_update_color(t){lt.update((e=>(e.when_color=t.detail,e)))}then_update_color(t){lt.update((e=>(e.then_color=t.detail,e)))}emoji_changed_when(t){lt.update((e=>(e.when_face=t.detail,e)))}emoji_changed_then(t){lt.update((e=>(e.then_face=t.detail,e)))}city_changed(t){lt.update((e=>(e.city=t.detail,e)))}render(){return O` <table> <tr> <td colspan="2"> <h1>WHEN THEN meme</h1> <h3>Zand.Games</h3> </td> </tr> <tr class="when"> <td> <emoji-selector id="when" @emoji_changed="${this.emoji_changed_when}" selectedItem="8"></emoji-selector> </td> <td> <div class="input-box"> <textarea value="" autofocus="autofocus" id="txtwhen" maxlength="155" placeholder="you face a new opportunity." @change="${this.whenchanged}" style="background-color:${this._store.value.when_color}"></textarea> <span class="unit">WHEN, </span> </div> </td> </tr> <tr> <td colspan="2" class="tdcolor"> <color-mood default="${this._store.value.when_color}" @color_changed="${this.when_update_color}"></color-mood> </td> </tr> <tr> <td class="splitter"></td> </tr> <tr class="then"> <td> <emoji-selector id="then" @emoji_changed="${this.emoji_changed_when}" selectedItem="7"></emoji-selector> </td> <td> <div class="input-box"> <textarea value="" autofocus="autofocus" id="txtthen" maxlength="155" placeholder="don't jump immediately. Follow your needs." @change="${this.thenchanged}" style="background-color:${this._store.value.then_color}"></textarea> <span class="unit">THEN, </span> </div> </td> </tr> <tr> <td colspan="2" class="tdcolor"> <color-mood default="${this._store.value.then_color}" @color_changed="${this.then_update_color}"></color-mood> </td> </tr> </table> `}static get styles(){return n`::placeholder{opacity:.4}.splitter{padding-top:50px}.tdcolor{text-align:right;margin-right:1em}table{margin-left:auto;margin-right:auto}.input-box{position:relative;display:flex;background-color:green;height:180px;border-radius:15px}textarea{resize:none;border-radius:15px;font-size:1.2em;display:flex;border:1px solid #d7d6d6;background:#fff;width:80%;padding:10px 10px 10px 65px;font-family:"Trebuchet MS","Lucida Sans Unicode","Lucida Grande","Lucida Sans",Arial,sans-serif!important}.unit{position:absolute;display:flex;font-size:1.2em;color:#000;left:5px;top:10px;z-index:9;color:#656563;font-family:"Trebuchet MS","Lucida Sans Unicode","Lucida Grande","Lucida Sans",Arial,sans-serif!important}`}});
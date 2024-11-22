/**! @license Third-party licenses available at bandzoogle.com/licenses */
function S(t,e,i=t,s){var r,n,o,l;if(e===A)return e;let h=void 0!==s?null===(r=i._$Co)||void 0===r?void 0:r[s]:i._$Cl,a=x(e)?void 0:e._$litDirective$;return h?.constructor!==a&&(null===(n=h?._$AO)||void 0===n||n.call(h,!1),void 0===a?h=void 0:(h=new a(t),h._$AT(t,i,s)),void 0!==s?(null!==(o=(l=i)._$Co)&&void 0!==o?o:l._$Co=[])[s]=h:i._$Cl=h),void 0!==h&&(e=S(t,h._$AS(t,e.values),h,s)),e}var z,T=window,g=T.trustedTypes,Q=g?g.createPolicy("lit-html",{createHTML:t=>t}):void 0,_=`lit$${(Math.random()+"").slice(9)}$`,nt="?"+_,vt=`<${nt}>`,y=document,w=(t="")=>y.createComment(t),x=t=>null===t||"object"!=typeof t&&"function"!=typeof t,ot=Array.isArray,_t=t=>ot(t)||"function"==typeof t?.[Symbol.iterator],C=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,X=/-->/g,Y=/>/g,f=RegExp(">|[ \t\n\f\r](?:([^\\s\"'>=/]+)([ \t\n\f\r]*=[ \t\n\f\r]*(?:[^ \t\n\f\r\"'`<>=]|(\"|')|))|$)","g"),tt=/'/g,et=/"/g,rt=/^(?:script|style|textarea|title)$/i,lt=t=>(e,...i)=>({_$litType$:t,strings:e,values:i}),yt=lt(1),St=lt(2),A=Symbol.for("lit-noChange"),u=Symbol.for("lit-nothing"),st=new WeakMap,m=y.createTreeWalker(y,129,null,!1),ft=(t,e)=>{let i,s=t.length-1,r=[],n=2===e?"<svg>":"",o=C;for(let e=0;e<s;e++){let s,l,h=t[e],a=-1,d=0;for(;d<h.length&&(o.lastIndex=d,l=o.exec(h),null!==l);)d=o.lastIndex,o===C?"!--"===l[1]?o=X:void 0!==l[1]?o=Y:void 0!==l[2]?(rt.test(l[2])&&(i=RegExp("</"+l[2],"g")),o=f):void 0!==l[3]&&(o=f):o===f?">"===l[0]?(o=i??C,a=-1):void 0===l[1]?a=-2:(a=o.lastIndex-l[2].length,s=l[1],o=void 0===l[3]?f:'"'===l[3]?et:tt):o===et||o===tt?o=f:o===X||o===Y?o=C:(o=f,i=void 0);let u=o===f&&t[e+1].startsWith("/>")?" ":"";n+=o===C?h+vt:a>=0?(r.push(s),h.slice(0,a)+"$lit$"+h.slice(a)+_+u):h+_+(-2===a?(r.push(void 0),e):u)}let l=n+(t[s]||"<?>")+(2===e?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==Q?Q.createHTML(l):l,r]},U=class t{constructor({strings:e,_$litType$:i},s){let r;this.parts=[];let n=0,o=0,l=e.length-1,h=this.parts,[a,d]=ft(e,i);if(this.el=t.createElement(a,s),m.currentNode=this.el.content,2===i){let t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(r=m.nextNode())&&h.length<l;){if(1===r.nodeType){if(r.hasAttributes()){let t=[];for(let e of r.getAttributeNames())if(e.endsWith("$lit$")||e.startsWith(_)){let i=d[o++];if(t.push(e),void 0!==i){let t=r.getAttribute(i.toLowerCase()+"$lit$").split(_),e=/([.?@])?(.*)/.exec(i);h.push({type:1,index:n,name:e[2],strings:t,ctor:"."===e[1]?B:"?"===e[1]?D:"@"===e[1]?I:E})}else h.push({type:6,index:n})}for(let e of t)r.removeAttribute(e)}if(rt.test(r.tagName)){let t=r.textContent.split(_),e=t.length-1;if(e>0){r.textContent=g?g.emptyScript:"";for(let i=0;i<e;i++)r.append(t[i],w()),m.nextNode(),h.push({type:2,index:++n});r.append(t[e],w())}}}else if(8===r.nodeType)if(r.data===nt)h.push({type:2,index:n});else{let t=-1;for(;-1!==(t=r.data.indexOf(_,t+1));)h.push({type:7,index:n}),t+=_.length-1}n++}}static createElement(t,e){let i=y.createElement("template");return i.innerHTML=t,i}},j=class{constructor(t,e){this.u=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(t){var e;let{el:{content:i},parts:s}=this._$AD,r=(null!==(e=t?.creationScope)&&void 0!==e?e:y).importNode(i,!0);m.currentNode=r;let n=m.nextNode(),o=0,l=0,h=s[0];for(;void 0!==h;){if(o===h.index){let e;2===h.type?e=new P(n,n.nextSibling,this,t):1===h.type?e=new h.ctor(n,h.name,h.strings,this,t):6===h.type&&(e=new V(n,this,t)),this.u.push(e),h=s[++l]}o!==h?.index&&(n=m.nextNode(),o++)}return r}p(t){let e=0;for(let i of this.u)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}},P=class t{constructor(t,e,i,s){var r;this.type=2,this._$AH=u,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cm=null===(r=s?.isConnected)||void 0===r||r}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cm}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return void 0!==e&&11===t.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=S(this,t,e),x(t)?t===u||null==t||""===t?(this._$AH!==u&&this._$AR(),this._$AH=u):t!==this._$AH&&t!==A&&this.g(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):_t(t)?this.k(t):this.g(t)}O(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}g(t){this._$AH!==u&&x(this._$AH)?this._$AA.nextSibling.data=t:this.T(y.createTextNode(t)),this._$AH=t}$(t){var e;let{values:i,_$litType$:s}=t,r="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=U.createElement(s.h,this.options)),s);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===r)this._$AH.p(i);else{let t=new j(r,this),e=t.v(this.options);t.p(i),this.T(e),this._$AH=t}}_$AC(t){let e=st.get(t.strings);return void 0===e&&st.set(t.strings,e=new U(t)),e}k(e){ot(this._$AH)||(this._$AH=[],this._$AR());let i,s=this._$AH,r=0;for(let n of e)r===s.length?s.push(i=new t(this.O(w()),this.O(w()),this,this.options)):i=s[r],i._$AI(n),r++;r<s.length&&(this._$AR(i&&i._$AB.nextSibling,r),s.length=r)}_$AR(t=this._$AA.nextSibling,e){var i;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,e);t&&t!==this._$AB;){let e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cm=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}},E=class{constructor(t,e,i,s,r){this.type=1,this._$AH=u,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=r,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=u}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,s){let r=this.strings,n=!1;if(void 0===r)t=S(this,t,e,0),n=!x(t)||t!==this._$AH&&t!==A,n&&(this._$AH=t);else{let s,o,l=t;for(t=r[0],s=0;s<r.length-1;s++)o=S(this,l[i+s],e,s),o===A&&(o=this._$AH[s]),n||(n=!x(o)||o!==this._$AH[s]),o===u?t=u:t!==u&&(t+=(o??"")+r[s+1]),this._$AH[s]=o}n&&!s&&this.j(t)}j(t){t===u?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},B=class extends E{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===u?void 0:t}},At=g?g.emptyScript:"",D=class extends E{constructor(){super(...arguments),this.type=4}j(t){t&&t!==u?this.element.setAttribute(this.name,At):this.element.removeAttribute(this.name)}},I=class extends E{constructor(t,e,i,s,r){super(t,e,i,s,r),this.type=5}_$AI(t,e=this){var i;if((t=null!==(i=S(this,t,e,0))&&void 0!==i?i:u)===A)return;let s=this._$AH,r=t===u&&s!==u||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,n=t!==u&&(s===u||r);r&&this.element.removeEventListener(this.name,this,s),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;"function"==typeof this._$AH?this._$AH.call(null!==(i=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==i?i:this.element,t):this._$AH.handleEvent(t)}},V=class{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){S(this,t)}},it=T.litHtmlPolyfillSupport;it?.(U,P),(null!==(z=T.litHtmlVersions)&&void 0!==z?z:T.litHtmlVersions=[]).push("2.6.0");var K,F,G,ht=(t,e,i)=>{var s,r;let n=null!==(s=i?.renderBefore)&&void 0!==s?s:e,o=n._$litPart$;if(void 0===o){let t=null!==(r=i?.renderBefore)&&void 0!==r?r:null;n._$litPart$=o=new P(e.insertBefore(w(),t),t,void 0,i??{})}return o._$AI(t),o},N=window,M=N.ShadowRoot&&(void 0===N.ShadyCSS||N.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,W=Symbol(),at=new WeakMap,H=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==W)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o,e=this.t;if(M&&void 0===t){let i=void 0!==e&&1===e.length;i&&(t=at.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&at.set(e,t))}return t}toString(){return this.cssText}},dt=t=>new H("string"==typeof t?t:t+"",void 0,W),mt=(t,...e)=>{let i=1===t.length?t[0]:e.reduce(((e,i,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1]),t[0]);return new H(i,t,W)},q=(t,e)=>{M?t.adoptedStyleSheets=e.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):e.forEach((e=>{let i=document.createElement("style"),s=N.litNonce;void 0!==s&&i.setAttribute("nonce",s),i.textContent=e.cssText,t.appendChild(i)}))},L=M?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(let i of t.cssRules)e+=i.cssText;return dt(e)})(t):t,k=window,ct=k.trustedTypes,gt=ct?ct.emptyScript:"",ut=k.reactiveElementPolyfillSupport,J={toAttribute(t,e){switch(e){case Boolean:t=t?gt:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch{i=null}}return i}},pt=(t,e)=>e!==t&&(e==e||t==t),Z={attribute:!0,type:String,converter:J,reflect:!1,hasChanged:pt},v=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var e;this.finalize(),(null!==(e=this.h)&&void 0!==e?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();let t=[];return this.elementProperties.forEach(((e,i)=>{let s=this._$Ep(i,e);void 0!==s&&(this._$Ev.set(s,i),t.push(s))})),t}static createProperty(t,e=Z){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){let i="symbol"==typeof t?Symbol():"__"+t,s=this.getPropertyDescriptor(t,i,e);void 0!==s&&Object.defineProperty(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(s){let r=this[t];this[e]=s,this.requestUpdate(t,r,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||Z}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;let t=Object.getPrototypeOf(this);if(t.finalize(),void 0!==t.h&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){let t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(let i of e)this.createProperty(i,t[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){let e=[];if(Array.isArray(t)){let i=new Set(t.flat(1/0).reverse());for(let t of i)e.unshift(L(t))}else void 0!==t&&e.push(L(t));return e}static _$Ep(t,e){let i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,i;(null!==(e=this._$ES)&&void 0!==e?e:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(i=t.hostConnected)||void 0===i||i.call(t))}removeController(t){var e;null===(e=this._$ES)||void 0===e||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])}))}createRenderRoot(){var t;let e=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return q(e,this.constructor.elementStyles),e}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=Z){var s;let r=this.constructor._$Ep(t,i);if(void 0!==r&&!0===i.reflect){let n=(void 0!==(null===(s=i.converter)||void 0===s?void 0:s.toAttribute)?i.converter:J).toAttribute(e,i.type);this._$El=t,null==n?this.removeAttribute(r):this.setAttribute(r,n),this._$El=null}}_$AK(t,e){var i;let s=this.constructor,r=s._$Ev.get(t);if(void 0!==r&&this._$El!==r){let t=s.getPropertyOptions(r),n="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(i=t.converter)||void 0===i?void 0:i.fromAttribute)?t.converter:J;this._$El=r,this[r]=n.fromAttribute(e,t.type),this._$El=null}}requestUpdate(t,e,i){let s=!0;void 0!==t&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||pt)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,i))):s=!1),!this.isUpdatePending&&s&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}let t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((t,e)=>this[e]=t)),this._$Ei=void 0);let e=!1,i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(i)):this._$Ek()}catch(t){throw e=!1,this._$Ek(),t}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;null===(e=this._$ES)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,e)=>this._$EO(e,this[e],t))),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};v.finalized=!0,v.elementProperties=new Map,v.elementStyles=[],v.shadowRootOptions={mode:"open"},ut?.({ReactiveElement:v}),(null!==(K=k.reactiveElementVersions)&&void 0!==K?K:k.reactiveElementVersions=[]).push("1.6.0");var b=class extends v{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;let i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=ht(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1)}render(){return A}};b.finalized=!0,b._$litElement$=!0,null===(F=globalThis.litElementHydrateSupport)||void 0===F||F.call(globalThis,{LitElement:b});var $t=globalThis.litElementPolyfillSupport;$t?.({LitElement:b}),(null!==(G=globalThis.litElementVersions)&&void 0!==G?G:globalThis.litElementVersions=[]).push("3.2.1");export{mt as a,yt as b,A as c,b as d};
/*! Bundled license information:

lit-html/lit-html.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/css-tag.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/reactive-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-element/lit-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/is-server.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/
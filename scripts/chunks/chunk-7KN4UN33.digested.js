/**! @license Third-party licenses available at bandzoogle.com/licenses */
import{a as o,b as a,c as l}from"/scripts/chunks/chunk-KM74CF2Y.digested.js";import{c as i}from"/scripts/chunks/chunk-S4RFMAMH.digested.js";var c=a(class extends l{constructor(e){var t;if(super(e),e.type!==o.ATTRIBUTE||"style"!==e.name||(null===(t=e.strings)||void 0===t?void 0:t.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce(((t,r)=>{let s=e[r];return null==s?t:t+`${r=r.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${s};`}),"")}update(e,[t]){let{style:r}=e.element;if(void 0===this.vt){this.vt=new Set;for(let e in t)this.vt.add(e);return this.render(t)}this.vt.forEach((e=>{null==t[e]&&(this.vt.delete(e),e.includes("-")?r.removeProperty(e):r[e]="")}));for(let e in t){let s=t[e];null!=s&&(this.vt.add(e),e.includes("-")?r.setProperty(e,s):r[e]=s)}return i}});export{c as a};
/*! Bundled license information:

lit-html/directives/style-map.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/
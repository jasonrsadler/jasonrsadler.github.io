/**! @license Third-party licenses available at bandzoogle.com/licenses */
import{a as c,b as d,c as h}from"/scripts/chunks/chunk-KM74CF2Y.digested.js";import{b as n,c as l}from"/scripts/chunks/chunk-S4RFMAMH.digested.js";var m=d(class extends h{constructor(e){var t;if(super(e),e.type!==c.ATTRIBUTE||"class"!==e.name||(null===(t=e.strings)||void 0===t?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter((t=>e[t])).join(" ")+" "}update(e,[t]){var s,n;if(void 0===this.nt){this.nt=new Set,void 0!==e.strings&&(this.st=new Set(e.strings.join(" ").split(/\s/).filter((e=>""!==e))));for(let e in t)t[e]&&(null===(s=this.st)||void 0===s||!s.has(e))&&this.nt.add(e);return this.render(t)}let r=e.element.classList;this.nt.forEach((e=>{e in t||(r.remove(e),this.nt.delete(e))}));for(let e in t){let s=!!t[e];s===this.nt.has(e)||null!==(n=this.st)&&void 0!==n&&n.has(e)||(s?(r.add(e),this.nt.add(e)):(r.remove(e),this.nt.delete(e)))}return l}}),u=e=>class extends e{remixIcon(e,{classes:t="",size:s=""}={}){return n`
    <remix-icon name=${e} class=${t} size=${s}></remix-icon>
    `}withRemix(e,{dark:t=!1,transparent:s=!0}={}){return n`
      ${this.remixStylesheet}
      <div class="remixed-component">
        <div class="theme-container ${m({"-dark":t,"-transparent":s})}">
          ${e}
        </div>
      </div>
    `}get remixStylesheet(){let e=document.querySelector("meta[name=remix-stylesheet]");return e?n`<link rel="stylesheet" href="${e.content}">`:(console.error("Must include remix-stylesheet meta tag"),"")}},M=u;export{m as a,M as b};
/*! Bundled license information:

lit-html/directives/class-map.js:
(**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 *)
*/
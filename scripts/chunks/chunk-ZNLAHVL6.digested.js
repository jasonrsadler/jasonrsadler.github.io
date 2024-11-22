/**! @license Third-party licenses available at bandzoogle.com/licenses */
import{b as m,d as t}from"/scripts/chunks/chunk-S4RFMAMH.digested.js";import{b as w}from"/scripts/chunks/chunk-PLGRBW3W.digested.js";var o=w(((s,t)=>{t.exports="/assets/remix-icons-SA57UIH6.digested.svg"})),v=class{constructor(){this.iconsPath=o(),this.iconsPath=this.iconsPath.default||this.iconsPath}},l=class s{static configure(t){Object.assign(s.config,t)}};l.config=new v;var s=(s,t)=>{customElements.get(s)||customElements.define(s,t)},c=class extends t{static properties={name:{type:String},placeholder:{type:Boolean,default:!1}};render(){return this.placeholder?"":m`
    <svg part="svg">
      <use href="${l.config.iconsPath}#${this.name}" />
    </svg>
  `}};s("remix-icon",c);
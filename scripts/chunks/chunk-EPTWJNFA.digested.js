/**! @license Third-party licenses available at bandzoogle.com/licenses */
import{b as e}from"/scripts/chunks/chunk-YX7F2HNK.digested.js";var t=class extends e{static targets=["button","source"];connect(){this.originalText=this.buttonTarget.innerText}get successContent(){return this.data.get("successContent")||"Copied!"}copied(){clearTimeout(this.timeout),this.buttonTarget.innerText=this.successContent,this.timeout=setTimeout((()=>{this.buttonTarget.innerText=this.originalText}),2e3)}copy(t){t.preventDefault(),this.sourceTarget.select(),document.execCommand("copy"),this.sourceTarget.selectionEnd=this.sourceTarget.selectionStart,this.sourceTarget.blur(),this.copied()}};export{t as a};
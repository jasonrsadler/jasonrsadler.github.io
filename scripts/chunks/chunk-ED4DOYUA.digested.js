/**! @license Third-party licenses available at bandzoogle.com/licenses */
function f(){if(!(this instanceof f))return new f;this.size=0,this.uid=0,this.selectors=[],this.selectorObjects={},this.indexes=Object.create(this.indexes),this.activeIndexes=[]}function S(e,t){var n,r,i,o,s,a,c=(e=e.slice(0).concat(e.default)).length,f=t,u=[];do{if(k.exec(""),(i=k.exec(f))&&(f=i[3],i[2]||!f))for(n=0;n<c;n++)if(s=(a=e[n]).selector(i[1])){for(r=u.length,o=!1;r--;)if(u[r].index===a&&u[r].key===s){o=!0;break}o||u.push({index:a,key:s});break}}while(i);return u}function q(e,t){var n,r,i;for(n=0,r=e.length;n<r;n++)if(i=e[n],t.isPrototypeOf(i))return i}function I(e,t){return e.id-t.id}function E(e,t,n){var r=e[t];return e[t]=function(){return n.apply(e,arguments),r.apply(e,arguments)},e}function D(e,t,n){var r=[],i=t;do{if(1!==i.nodeType)break;var o=e.matches(i);if(o.length){var s={node:i,observers:o};n?r.unshift(s):r.push(s)}}while(i=i.parentElement);return r}function N(){w.set(this,!0)}function z(){w.set(this,!0),F.set(this,!0)}function L(){return y.get(this)||null}function P(e,t){j&&Object.defineProperty(e,"currentTarget",{configurable:!0,enumerable:!0,get:t||j.get})}function U(e){try{return e.eventPhase,!0}catch{return!1}}function O(e){if(U(e)){var t=(1===e.eventPhase?b:x)[e.type];if(t){var n=D(t,e.target,1===e.eventPhase);if(n.length){E(e,"stopPropagation",N),E(e,"stopImmediatePropagation",z),P(e,L);for(var r=0,i=n.length;r<i&&!w.get(e);r++){var o=n[r];y.set(e,o.node);for(var s=0,a=o.observers.length;s<a&&!F.get(e);s++)o.observers[s].data.call(o.node,e)}y.delete(e),P(e)}}}}function W(e,t,n){var r=!!(arguments.length>3&&void 0!==arguments[3]?arguments[3]:{}).capture,i=r?b:x,o=i[e];o||(o=new f,i[e]=o,document.addEventListener(e,O,r)),o.add(t,n)}function B(e,t,n){var r=!!(arguments.length>3&&void 0!==arguments[3]?arguments[3]:{}).capture,i=r?b:x,o=i[e];o&&(o.remove(t,n),!o.size&&(delete i[e],document.removeEventListener(e,O,r)))}function G(e,t,n){return e.dispatchEvent(new CustomEvent(t,{bubbles:!0,cancelable:!0,detail:n}))}var m=window.document.documentElement,M=m.matches||m.webkitMatchesSelector||m.mozMatchesSelector||m.oMatchesSelector||m.msMatchesSelector;f.prototype.matchesSelector=function(e,t){return M.call(e,t)},f.prototype.querySelectorAll=function(e,t){return t.querySelectorAll(e)},f.prototype.indexes=[];var T=/^#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/g;f.prototype.indexes.push({name:"ID",selector:function(e){var t;if(t=e.match(T))return t[0].slice(1)},element:function(e){if(e.id)return[e.id]}});var A=/^\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/g;f.prototype.indexes.push({name:"CLASS",selector:function(e){var t;if(t=e.match(A))return t[0].slice(1)},element:function(e){var t=e.className;if(t){if("string"==typeof t)return t.split(/\s/);if("object"==typeof t&&"baseVal"in t)return t.baseVal.split(/\s/)}}});var v,C=/^((?:[\w\u00c0-\uFFFF\-]|\\.)+)/g;f.prototype.indexes.push({name:"TAG",selector:function(e){var t;if(t=e.match(C))return t[0].toUpperCase()},element:function(e){return[e.nodeName.toUpperCase()]}}),f.prototype.indexes.default={name:"UNIVERSAL",selector:function(){return!0},element:function(){return[!0]}},v="function"==typeof window.Map?window.Map:function(){function e(){this.map={}}return e.prototype.get=function(e){return this.map[e+" "]},e.prototype.set=function(e,t){this.map[e+" "]=t},e}();var k=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g;f.prototype.logDefaultIndexUsed=function(){},f.prototype.add=function(e,t){var n,r,i,o,s,a,c,f,u=this.activeIndexes,l=this.selectors,h=this.selectorObjects;if("string"==typeof e){for(h[(n={id:this.uid++,selector:e,data:t}).id]=n,c=S(this.indexes,e),r=0;r<c.length;r++)o=(f=c[r]).key,(s=q(u,i=f.index))||((s=Object.create(i)).map=new v,u.push(s)),i===this.indexes.default&&this.logDefaultIndexUsed(n),(a=s.map.get(o))||(a=[],s.map.set(o,a)),a.push(n);this.size++,l.push(e)}},f.prototype.remove=function(e,t){if("string"==typeof e){var n,r,i,o,s,a,c,f,u=this.activeIndexes,l=this.selectors=[],h=this.selectorObjects,p={},d=1===arguments.length;for(n=S(this.indexes,e),i=0;i<n.length;i++)for(r=n[i],o=u.length;o--;)if(a=u[o],r.index.isPrototypeOf(a)){if(c=a.map.get(r.key))for(s=c.length;s--;)(f=c[s]).selector===e&&(d||f.data===t)&&(c.splice(s,1),p[f.id]=!0);break}for(i in p)delete h[i],this.size--;for(i in h)l.push(h[i].selector)}},f.prototype.queryAll=function(e){if(!this.selectors.length)return[];var t,n,r,i,o,s,a,c,f={},u=[],l=this.querySelectorAll(this.selectors.join(", "),e);for(t=0,r=l.length;t<r;t++)for(o=l[t],n=0,i=(s=this.matches(o)).length;n<i;n++)f[(c=s[n]).id]?a=f[c.id]:(a={id:c.id,selector:c.selector,data:c.data,elements:[]},f[c.id]=a,u.push(a)),a.elements.push(o);return u.sort(I)},f.prototype.matches=function(e){if(!e)return[];var t,n,r,i,o,s,a,c,f,u,l,h=this.activeIndexes,p={},d=[];for(t=0,i=h.length;t<i;t++)if(c=(a=h[t]).element(e))for(n=0,o=c.length;n<o;n++)if(f=a.map.get(c[n]))for(r=0,s=f.length;r<s;r++)!p[l=(u=f[r]).id]&&this.matchesSelector(e,u.selector)&&(p[l]=!0,d.push(u));return d.sort(I)};var x={},b={},w=new WeakMap,F=new WeakMap,y=new WeakMap,j=Object.getOwnPropertyDescriptor(Event.prototype,"currentTarget");export{W as a,B as b,G as c};
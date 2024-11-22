/**! @license Third-party licenses available at bandzoogle.com/licenses */
import{a as m}from"/scripts/chunks/chunk-7KN4UN33.digested.js";import"/scripts/chunks/chunk-KM74CF2Y.digested.js";import{a as d,b as n,d as c}from"/scripts/chunks/chunk-S4RFMAMH.digested.js";import"/scripts/chunks/chunk-PLGRBW3W.digested.js";var p=class extends c{static get properties(){return{interval:{attribute:"interval"},activeIndex:{attribute:"active-index",reflect:!0},state:{attribute:"state"}}}static intervals={slow:6e3,medium:4e3,fast:2e3,default:4e3};connectedCallback(){super.connectedCallback(),this.updateComplete.then(this.onUpdateComplete)}disconnectedCallback(){this.resizeObserver?.disconnect()}firstUpdated(){this.resizeObserver=new ResizeObserver(this.onResize.bind(this)),this.resizeObserver.observe(this)}onResize(t){this.querySelector("media-background")?.onResize(t)}get intervalTime(){let{intervals:t}=this.constructor;return t[this.interval]||t.default}get slottedChildren(){if(!this.shadowRoot)return[];let t=this.shadowRoot.querySelector("slot");if(!t)return[];let e=t.assignedNodes({flatten:!0});return Array.prototype.filter.call(e,(t=>t.nodeType===Node.ELEMENT_NODE))}get slides(){return this.slottedChildren.filter((t=>"MEDIA-BACKGROUND"===t.nodeName))}get playing(){return"paused"!==this.state}onUpdateComplete=()=>{0===this.slottedChildren.length?setTimeout((()=>this.onUpdateComplete()),1):(this.activeIndex=this.activeIndex||0,this.start())};onTransitionEnd=()=>{this.removeEvents(),this.queueNext()};attributeChangedCallback(t,e,i){switch(super.attributeChangedCallback(t,e,i),t){case"active-index":this.activateSlide(i,e);break;case"state":"paused"===i?this.stop():this.start()}}start(){this.queueNext()}stop(){clearTimeout(this.timer),this.removeEvents()}queueNext(){this.playing&&this.slides.length>1&&(clearTimeout(this.timer),this.timer=setTimeout(this.gotoNextSlide,this.intervalTime))}removeEvents(){this.slides.forEach((t=>t.removeEventListener("animationend",this.onTransitionEnd)))}gotoNextSlide=()=>{let t=this.activeIndex+1;t>=this.slides.length&&(t=0),this.activeIndex=t};activateSlide(t,e){let i="-is-active",s="-transition-in",r="-transition-out",a=null!==e&&e!==t;this.slides.forEach(((o,n)=>{let c=o.classList.contains(s);if(o.classList.toggle(i,n==t),a||!c&&n===t){let i=n==t||n==e;o.classList.toggle(s,n==t),o.classList.toggle(r,n==e),i&&("hidden"===window.document.visibilityState?this.timer=setTimeout(this.onTransitionEnd,1e3):o.addEventListener("animationend",this.onTransitionEnd))}}))}render(){return n`<slot></slot>`}};customElements.define("media-background-container",p);var u=class extends c{static get properties(){return{src:{},cropRect:{type:Object},focalPoint:{type:Object},originalWidth:{type:Number},originalHeight:{type:Number},focalRect:{type:Object},containerRect:{type:Object}}}static get styles(){return d`
    .container {
      width: 250px;
    }

    img {
      width: 100%;
      height: auto;
    }

    .crop-rect {
      outline: 1px solid blue;
      position: absolute;
      top: var(--rect-top, 0);
      left: var(--rect-left, 0);
      width: var(--rect-width, 0);
      height: var(--rect-height, 0);
    }

    .focal-point {
      top: var(--focal-top, 0);
      left: var(--focal-left, 0);
      width: 15px;
      height: 15px;
      background-color: rgba(0,0,255,0.5);
      position: absolute;
      border-radius: 50%;
      transform: translate(-50%, -50%);
    }

    .focal-rect {
      position: absolute;
      top: var(--focal-rect-top, 0);
      left: var(--focal-rect-left, 0);
      width: var(--focal-rect-width, 0);
      height: var(--focal-rect-height, 0);
      background: rgba(255,255,0,0.25);
    }
  `}render(){let t=250/this.originalWidth,e={"--rect-top":this.cropRect.y,"--rect-left":this.cropRect.x,"--rect-width":this.cropRect.w,"--rect-height":this.cropRect.h,"--focal-top":this.focalPoint.y,"--focal-left":this.focalPoint.x,"--focal-rect-top":this.focalRect.y,"--focal-rect-left":this.focalRect.x,"--focal-rect-width":this.focalRect.w,"--focal-rect-height":this.focalRect.h};return Object.keys(e).forEach((i=>{e[i]=e[i]*t+"px"})),n`
    <div class="container" style="${m(e)}">
      <img src="${this.src}">
      <div class="crop-rect">
        <div class="focal-rect"></div>
        <div class="focal-point"></div>
      </div>
    </div>
  `}};customElements.define("media-background-debug",u);var y=(t,e)=>Object.entries(t).reduce(((t,[i,s])=>({...t,[e(s,i)]:s})),{}),S=1.14,v="--media-background-background-parallax-offset",g=class extends c{static get properties(){return{cropRect:{attribute:"crop-rect",type:Object},focalPoint:{attribute:"focal-point",type:Object},originalWidth:{attribute:"original-width",type:Number},originalHeight:{attribute:"original-height",type:Number},opacity:{attribute:"opacity",type:Number},mode:{},debug:{type:Boolean},parallaxOffset:{attribute:!1,type:Number}}}static get styles(){return d`
    media-background-debug {
      position: fixed;
      top: 0;
      right: 0;
    }
  `}connectedCallback(){super.connectedCallback(),this.containerRect=this.getBoundingClientRect(),this.resizeObserver=new ResizeObserver(this.onResize.bind(this)),this.resizeObserver.observe(this),this.refresh(),this.updateComplete.then((()=>{window.requestAnimationFrame((()=>{this.img.complete&&this.onImageLoad(),this.img.addEventListener("load",this.onImageLoad.bind(this))}))}))}disconnectedCallback(){this.resizeObserver.disconnect()}onImageLoad(){this.style.setProperty("--image-url",`url(${this.img.currentSrc})`),this.refresh()}onResize(t){let{inlineSize:e,blockSize:i}=t[0].borderBoxSize[0];this.containerRect={width:e,height:i},this.refresh()}setupParallax(){if("parallax"===this.mode){if(this.parallaxIntersectionObserver||this.supportsAnimationTimeline||!this.allowMotion)return;this.parallaxIntersectionObserver=new IntersectionObserver(this.onIntersection.bind(this),{threshold:0}),this.parallaxIntersectionObserver.observe(this)}else this.parallaxIntersectionObserver?.disconnect(),this.toggleScrollListener(!1),this.parallaxIntersectionObserver=null}toggleScrollListener(t){document[t?"addEventListener":"removeEventListener"]("scroll",this.onScroll)}onIntersection(t){this.parallaxStartScrollTop=document.documentElement.scrollTop,this.toggleScrollListener(t[0].isIntersecting)}onScroll=()=>{if("parallax"!==this.mode)return void this.style.setProperty(v,"0px");let t=Math.abs(this.parallaxStartScrollTop-document.documentElement.scrollTop),e=Math.abs(t*S-t);e>this.offsetWidth/this.originalWidth*this.originalHeight-this.offsetHeight||this.style.setProperty(v,`-${e}px`)};get supportsAnimationTimeline(){return"animationTimeline"in document.body.style}get allowMotion(){return window.matchMedia("(prefers-reduced-motion: no-preference)").matches}setupBackgroundImageStyles(){let{backgroundImagePosition:t}=this,[e,i]=t.split(" ");this.style.setProperty("--media-background-background-image",`url("${this.img.currentSrc}")`),this.style.setProperty("--media-background-background-position-x",e),this.style.setProperty("--media-background-background-position-y",i),this.style.setProperty("--media-background-background-size",this.backgroundImageSize)}get backgroundImageMode(){return["fixed","parallax"].includes(this.mode)}get imageDimensions(){let t=this.originalWidth,e=this.originalHeight;return this.img&&(t=this.img.naturalWidth,e=this.img.naturalHeight),{width:t,height:e}}get img(){return this.querySelector("img")}get imgLoaded(){return""!==this.style.getPropertyValue("--image-url")}get fitWidthScale(){return this.imageDimensions.width/this.containerRect.width}get fitHeightScale(){return this.imageDimensions.height/this.containerRect.height}get fitDirection(){return this.fitWidthScale>this.fitHeightScale?"vertical":"horizontal"}get positionStyle(){return"contained"===this.mode?{}:this.transformCropRectToCSS()}get targetScale(){let t=this.containerRect.width/this.cropRect.w,e=this.containerRect.height/this.cropRect.h;return Math.max(t,e)}get imageScale(){return this.imageDimensions.width/this.originalWidth}transformCropRectToCSS(){let t=this.targetScale,e={width:this.imageDimensions.width*(t/this.imageScale)+"px",height:"auto",y:this.cropRect.y,x:this.cropRect.x};return e=this.applyFocalPoint(e),e.y*=t,e.x*=t,y(e,((t,e)=>`--${e}`))}get backgroundImagePosition(){return"fixed"===this.mode?[`${Math.min(this.focalPointRect.x/this.cropRect.w*100,100)}%`,`${Math.min(this.focalPointRect.y/this.cropRect.h*100,100)}%`].join(" "):[this.cropRect.x/(this.originalWidth-this.cropRect.w)*100+"%",(this.cropRect.y+this.focalPointRect.y)/(this.originalHeight-this.focalPointRect.h)*100+"%"].join(" ")}get backgroundImageSize(){return 100*this.targetScale/(this.containerRect.width/this.originalWidth)+"%"}get focalPointRect(){let t=this.targetScale,{width:e,height:i}=this.containerRect,s=e/t/2,r=i/t/2,a={x:Math.max(0,this.focalPoint.x-s),y:Math.max(0,this.focalPoint.y-r)};return a.x2=Math.min(this.focalPoint.x+s,this.cropRect.w),a.y2=Math.min(this.focalPoint.y+r,this.cropRect.h),a.w=a.x2-a.x,a.h=a.y2-a.y,a}applyFocalPoint(t){let e=this.focalPointRect,i=this.targetScale,s={...t};["x","y","x2","y2"].forEach((t=>{e[t]+=this.cropRect[t[0]]}));let r=s.x+this.containerRect.width/i,a=s.y+this.containerRect.height/i;return e.x2>r&&(s.x+=e.x2-r),e.y2>a&&(s.y+=e.y2-a),s.x=Math.max(0,s.x),s.y=Math.max(0,s.y),s}get debugHtml(){return this.debug&&"cropped"===this.mode?n`<media-background-debug
      .src="${this.img.getAttribute("src")}"
      .cropRect="${this.cropRect}"
      .focalPoint="${this.focalPoint}"
      .originalWidth="${this.originalWidth}"
      .originalHeight="${this.originalHeight}"
      .focalRect="${this.focalPointRect}"
      .containerRect="${this.containerRect}"
    ></media-background-debug>`:null}refresh(){this.img&&this.setAttribute("fit",this.fitDirection),this.requestUpdate()}render(){return this.setupParallax(),this.hasAttribute("opacity")&&""!==this.getAttribute("opacity")&&this.style.setProperty("--media-background-opacity",`${this.opacity}%`),this.imgLoaded&&this.backgroundImageMode&&this.setupBackgroundImageStyles(),n`
    <media-background-content style="${m(this.positionStyle)}">
      <slot></slot>
    </media-background-content>
    ${this.debugHtml}
  `}};customElements.define("media-background",g);var x=(t,e,i,s="")=>{let r,a,o=getComputedStyle(t),n=()=>{r=requestAnimationFrame(n),a=o.getPropertyValue(e).trim(),a!==s&&i(s=a)};return n(),{disconnect(){cancelAnimationFrame(r)}}},b=class extends c{static get properties(){return{hasShape:{attribute:"has-shape",reflect:!0}}}disconnectedCallback(){super.disconnectedCallback(),this.styleObserver.disconnect()}firstUpdated(){this.styleObserver=x(this,"--section-shape",this.onSectionShapeChange)}onSectionShapeChange=t=>{this.hasShape=""!==t};render(){return n`
    <div part="container">
      <div part="content">
        <slot></slot>
      </div>
    </div>
  `}};customElements.define("moda-section",b);var f=class extends c{connectedCallback(){super.connectedCallback(),this.observer=new MutationObserver(this.handleMutation.bind(this))}disconnectedCallback(){super.disconnectedCallback(),this.observer.disconnect()}firstUpdated(){this.observer.observe(this,{childList:!0}),this.applySectionIndexes()}handleMutation(){this.applySectionIndexes()}applySectionIndexes(){let t=this.querySelectorAll("moda-section");t.forEach(((e,i)=>{e.style.zIndex=t.length-i}))}render(){return n`<slot></slot>`}};customElements.define("moda-sections",f);
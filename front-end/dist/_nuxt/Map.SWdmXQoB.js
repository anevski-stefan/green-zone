import{s as j,x as g,y as R,z as P,A as L,B as k,C as B,D as I,E as Ce,G as A,H,I as Y,J as ae,K as ee,L as we,o as K,c as re,b as X,w as Q,F as Be,r as je,n as Re,d as Pe,t as Ie,M as Ee,N as Ne}from"./entry.PUSjL8Le.js";const le=(e,t)=>{for(const n of Object.keys(t))e.on(n,t[n])},de=e=>{for(const t of Object.keys(e)){const n=e[t];n&&w(n.cancel)&&n.cancel()}},ze=e=>!e||typeof e.charAt!="function"?e:e.charAt(0).toUpperCase()+e.slice(1),w=e=>typeof e=="function",E=(e,t,n)=>{for(const o in n){const r="set"+ze(o);e[r]?ae(()=>n[o],(a,l)=>{e[r](a,l)}):t[r]&&ae(()=>n[o],a=>{t[r](a)})}},N=(e,t,n={})=>{const o={...n};for(const r in e){const a=t[r],l=e[r];a&&(a&&a.custom===!0||l!==void 0&&(o[r]=l))}return o},M=e=>{const t={},n={};for(const o in e)if(o.startsWith("on")&&!o.startsWith("onUpdate")&&o!=="onReady"){const r=o.slice(2).toLocaleLowerCase();t[r]=e[o]}else n[o]=e[o];return{listeners:t,attrs:n}},De=async e=>{const t=await Promise.all([L(()=>import("./marker-icon-2x.ISnV03A7.js"),__vite__mapDeps([]),import.meta.url),L(()=>import("./marker-icon.v2plvzwn.js"),__vite__mapDeps([]),import.meta.url),L(()=>import("./marker-shadow.mNDLcDeE.js"),__vite__mapDeps([]),import.meta.url)]);delete e.Default.prototype._getIconUrl,e.Default.mergeOptions({iconRetinaUrl:t[0].default,iconUrl:t[1].default,shadowUrl:t[2].default})},F=e=>{const t=g((...o)=>console.warn(`Method ${e} has been invoked without being replaced`)),n=(...o)=>t.value(...o);return n.wrapped=t,A(e,n),n},W=(e,t)=>e.wrapped.value=t,C=typeof self=="object"&&self.self===self&&self||typeof global=="object"&&global.global===global&&global||globalThis,S=e=>{const t=R(e);if(t===void 0)throw new Error(`Attempt to inject ${e.description} before it was provided.`);return t},z=Symbol("useGlobalLeaflet"),$=Symbol("addLayer"),pe=Symbol("removeLayer"),ce=Symbol("registerControl"),xe=Symbol("registerLayerControl"),ye=Symbol("canSetParentHtml"),me=Symbol("setParentHtml"),fe=Symbol("setIcon"),ke=Symbol("bindPopup"),ve=Symbol("bindTooltip"),Me=Symbol("unbindPopup"),be=Symbol("unbindTooltip"),Z={options:{type:Object,default:()=>({}),custom:!0}},G=e=>({options:e.options,methods:{}}),U={...Z,pane:{type:String},attribution:{type:String},name:{type:String,custom:!0},layerType:{type:String,custom:!0},visible:{type:Boolean,custom:!0,default:!0}},ge=(e,t,n)=>{const o=S($),r=S(pe),{options:a,methods:l}=G(e),i=N(e,U,a),d=()=>o({leafletObject:t.value}),p=()=>r({leafletObject:t.value}),u={...l,setAttribution(c){p(),t.value.options.attribution=c,e.visible&&d()},setName(){p(),e.visible&&d()},setLayerType(){p(),e.visible&&d()},setVisible(c){t.value&&(c?d():p())},bindPopup(c){if(!t.value||!w(t.value.bindPopup)){console.warn("Attempt to bind popup before bindPopup method available on layer.");return}t.value.bindPopup(c)},bindTooltip(c){if(!t.value||!w(t.value.bindTooltip)){console.warn("Attempt to bind tooltip before bindTooltip method available on layer.");return}t.value.bindTooltip(c)},unbindTooltip(){t.value&&(w(t.value.closeTooltip)&&t.value.closeTooltip(),w(t.value.unbindTooltip)&&t.value.unbindTooltip())},unbindPopup(){t.value&&(w(t.value.closePopup)&&t.value.closePopup(),w(t.value.unbindPopup)&&t.value.unbindPopup())},updateVisibleProp(c){n.emit("update:visible",c)}};return A(ke,u.bindPopup),A(ve,u.bindTooltip),A(Me,u.unbindPopup),A(be,u.unbindTooltip),ee(()=>{u.unbindPopup(),u.unbindTooltip(),p()}),{options:i,methods:u}},Ue=(e,t)=>{if(e&&t.default)return I("div",{style:{display:"none"}},t.default())},Ve={...U,interactive:{type:Boolean,default:void 0},bubblingMouseEvents:{type:Boolean,default:void 0}},he={...Ve,stroke:{type:Boolean,default:void 0},color:{type:String},weight:{type:Number},opacity:{type:Number},lineCap:{type:String},lineJoin:{type:String},dashArray:{type:String},dashOffset:{type:String},fill:{type:Boolean,default:void 0},fillColor:{type:String},fillOpacity:{type:Number},fillRule:{type:String},className:{type:String}},qe={...he,radius:{type:Number},latLng:{type:[Object,Array],required:!0,custom:!0}};({...qe});const V={...Z,position:{type:String}},$e=(e,t)=>{const{options:n,methods:o}=G(e),r=N(e,V,n),a={...o,setPosition(l){t.value&&t.value.setPosition(l)}};return ee(()=>{t.value&&t.value.remove()}),{options:r,methods:a}},Ze=e=>e.default?I("div",{ref:"root"},e.default()):null;j({name:"LControl",props:{...V,disableClickPropagation:{type:Boolean,custom:!0,default:!0},disableScrollPropagation:{type:Boolean,custom:!0,default:!1}},setup(e,t){const n=g(),o=g(),r=R(z),a=S(ce),{options:l,methods:i}=$e(e,n);return P(async()=>{const{Control:d,DomEvent:p}=r?C.L:await L(()=>import("./leaflet-src.esm.NPgqU0nd.js"),__vite__mapDeps([]),import.meta.url),u=d.extend({onAdd(){return o.value}});n.value=k(new u(l)),E(i,n.value,e),a({leafletObject:n.value}),e.disableClickPropagation&&o.value&&p.disableClickPropagation(o.value),e.disableScrollPropagation&&o.value&&p.disableScrollPropagation(o.value),B(()=>t.emit("ready",n.value))}),{root:o,leafletObject:n}},render(){return Ze(this.$slots)}});({...V});({...V});({...V});({...V});const Le={...U};({...Le});({...Le});const te={...U,opacity:{type:Number},zIndex:{type:Number},tileSize:{type:[Number,Array,Object]},noWrap:{type:Boolean,default:void 0},minZoom:{type:Number},maxZoom:{type:Number},className:{type:String}},Se=(e,t,n)=>{const{options:o,methods:r}=ge(e,t,n),a=N(e,te,o),l={...r,setTileComponent(){var i;(i=t.value)==null||i.redraw()}};return ee(()=>{t.value.off()}),{options:a,methods:l}},Ge=(e,t,n,o)=>e.extend({initialize(r){this.tileComponents={},this.on("tileunload",this._unloadTile),n.setOptions(this,r)},createTile(r){const a=this._tileCoordsToKey(r);this.tileComponents[a]=t.create("div");const l=I({setup:o,props:["coords"]},{coords:r});return we(l,this.tileComponents[a]),this.tileComponents[a]},_unloadTile(r){const a=this._tileCoordsToKey(r.coords);this.tileComponents[a]&&(this.tileComponents[a].innerHTML="",this.tileComponents[a]=void 0)}});j({props:{...te,childRender:{type:Function,required:!0}},setup(e,t){const n=g(),o=g(null),r=g(!1),a=R(z),l=S($),{options:i,methods:d}=Se(e,n,t);return P(async()=>{const{GridLayer:p,DomUtil:u,Util:c}=a?C.L:await L(()=>import("./leaflet-src.esm.NPgqU0nd.js"),__vite__mapDeps([]),import.meta.url),b=Ge(p,u,c,e.childRender);n.value=k(new b(i));const{listeners:y}=M(t.attrs);n.value.on(y),E(d,n.value,e),l({...e,...d,leafletObject:n.value}),r.value=!0,B(()=>t.emit("ready",n.value))}),{root:o,ready:r,leafletObject:n}},render(){return this.ready?I("div",{style:{display:"none"},ref:"root"}):null}});const ie={iconUrl:{type:String},iconRetinaUrl:{type:String},iconSize:{type:[Object,Array]},iconAnchor:{type:[Object,Array]},popupAnchor:{type:[Object,Array]},tooltipAnchor:{type:[Object,Array]},shadowUrl:{type:String},shadowRetinaUrl:{type:String},shadowSize:{type:[Object,Array]},shadowAnchor:{type:[Object,Array]},bgPos:{type:[Object,Array]},className:{type:String}};j({name:"LIcon",props:{...ie,...Z},setup(e,t){const n=g(),o=R(z),r=S(ye),a=S(me),l=S(fe);let i,d,p,u,c;const b=(O,f,v)=>{const h=O&&O.innerHTML;if(!f){v&&c&&r()&&a(h);return}const{listeners:x}=M(t.attrs);c&&d(c,x);const{options:J}=G(e),T=N(e,ie,J);h&&(T.html=h),c=T.html?p(T):u(T),i(c,x),l(c)},y=()=>{B(()=>b(n.value,!0,!1))},_=()=>{B(()=>b(n.value,!1,!0))},D={setIconUrl:y,setIconRetinaUrl:y,setIconSize:y,setIconAnchor:y,setPopupAnchor:y,setTooltipAnchor:y,setShadowUrl:y,setShadowRetinaUrl:y,setShadowAnchor:y,setBgPos:y,setClassName:y,setHtml:y};return P(async()=>{const{DomEvent:O,divIcon:f,icon:v}=o?C.L:await L(()=>import("./leaflet-src.esm.NPgqU0nd.js"),__vite__mapDeps([]),import.meta.url);i=O.on,d=O.off,p=f,u=v,E(D,{},e),new MutationObserver(_).observe(n.value,{attributes:!0,childList:!0,characterData:!0,subtree:!0}),y()}),{root:n}},render(){const e=this.$slots.default?this.$slots.default():void 0;return I("div",{ref:"root"},e)}});({...U});function _e(e,t,n){var o,r,a;t===void 0&&(t=50),n===void 0&&(n={});var l=(o=n.isImmediate)!=null&&o,i=(r=n.callback)!=null&&r,d=n.maxWait,p=Date.now(),u=[];function c(){if(d!==void 0){var y=Date.now()-p;if(y+t>=d)return d-y}return t}var b=function(){var y=[].slice.call(arguments),_=this;return new Promise(function(D,O){var f=l&&a===void 0;if(a!==void 0&&clearTimeout(a),a=setTimeout(function(){if(a=void 0,p=Date.now(),!l){var h=e.apply(_,y);i&&i(h),u.forEach(function(x){return(0,x.resolve)(h)}),u=[]}},c()),f){var v=e.apply(_,y);return i&&i(v),D(v)}u.push({resolve:D,reject:O})})};return b.cancel=function(y){a!==void 0&&clearTimeout(a),u.forEach(function(_){return(0,_.reject)(y)}),u=[]},b}const se={...Z,center:{type:[Object,Array]},bounds:{type:[Array,Object]},maxBounds:{type:[Array,Object]},zoom:{type:Number},minZoom:{type:Number},maxZoom:{type:Number},paddingBottomRight:{type:[Object,Array]},paddingTopLeft:{type:Object},padding:{type:Object},worldCopyJump:{type:Boolean,default:void 0},crs:{type:[String,Object]},maxBoundsViscosity:{type:Number},inertia:{type:Boolean,default:void 0},inertiaDeceleration:{type:Number},inertiaMaxSpeed:{type:Number},easeLinearity:{type:Number},zoomAnimation:{type:Boolean,default:void 0},zoomAnimationThreshold:{type:Number},fadeAnimation:{type:Boolean,default:void 0},markerZoomAnimation:{type:Boolean,default:void 0},noBlockingAnimations:{type:Boolean,default:void 0},useGlobalLeaflet:{type:Boolean,default:!0,custom:!0}},He=j({inheritAttrs:!1,emits:["ready","update:zoom","update:center","update:bounds"],props:se,setup(e,t){const n=g(),o=Ce({ready:!1,layersToAdd:[],layersInControl:[]}),{options:r}=G(e),a=N(e,se,r),{listeners:l,attrs:i}=M(t.attrs),d=F($),p=F(pe),u=F(ce),c=F(xe);A(z,e.useGlobalLeaflet);const b=H(()=>{const f={};return e.noBlockingAnimations&&(f.animate=!1),f}),y=H(()=>{const f=b.value;return e.padding&&(f.padding=e.padding),e.paddingTopLeft&&(f.paddingTopLeft=e.paddingTopLeft),e.paddingBottomRight&&(f.paddingBottomRight=e.paddingBottomRight),f}),_={moveend:_e(f=>{o.leafletRef&&(t.emit("update:zoom",o.leafletRef.getZoom()),t.emit("update:center",o.leafletRef.getCenter()),t.emit("update:bounds",o.leafletRef.getBounds()))}),overlayadd(f){const v=o.layersInControl.find(h=>h.name===f.name);v&&v.updateVisibleProp(!0)},overlayremove(f){const v=o.layersInControl.find(h=>h.name===f.name);v&&v.updateVisibleProp(!1)}};P(async()=>{e.useGlobalLeaflet&&(C.L=C.L||await L(()=>import("./entry.PUSjL8Le.js").then(s=>s.l),__vite__mapDeps([]),import.meta.url));const{map:f,CRS:v,Icon:h,latLngBounds:x,latLng:J,stamp:T}=e.useGlobalLeaflet?C.L:await L(()=>import("./leaflet-src.esm.NPgqU0nd.js"),__vite__mapDeps([]),import.meta.url);try{a.beforeMapMount&&await a.beforeMapMount()}catch(s){console.error(`The following error occurred running the provided beforeMapMount hook ${s.message}`)}await De(h);const Ae=typeof a.crs=="string"?v[a.crs]:a.crs;a.crs=Ae||v.EPSG3857;const q={addLayer(s){s.layerType!==void 0&&(o.layerControl===void 0?o.layersToAdd.push(s):o.layersInControl.find(m=>T(m.leafletObject)===T(s.leafletObject))||(o.layerControl.addLayer(s),o.layersInControl.push(s))),s.visible!==!1&&o.leafletRef.addLayer(s.leafletObject)},removeLayer(s){s.layerType!==void 0&&(o.layerControl===void 0?o.layersToAdd=o.layersToAdd.filter(m=>m.name!==s.name):(o.layerControl.removeLayer(s.leafletObject),o.layersInControl=o.layersInControl.filter(m=>T(m.leafletObject)!==T(s.leafletObject)))),o.leafletRef.removeLayer(s.leafletObject)},registerLayerControl(s){o.layerControl=s,o.layersToAdd.forEach(m=>{o.layerControl.addLayer(m)}),o.layersToAdd=[],u(s)},registerControl(s){o.leafletRef.addControl(s.leafletObject)},setZoom(s){const m=o.leafletRef.getZoom();s!==m&&o.leafletRef.setZoom(s,b.value)},setCrs(s){const m=o.leafletRef.getBounds();o.leafletRef.options.crs=s,o.leafletRef.fitBounds(m,{animate:!1,padding:[0,0]})},fitBounds(s){o.leafletRef.fitBounds(s,y.value)},setBounds(s){if(!s)return;const m=x(s);m.isValid()&&!(o.lastSetBounds||o.leafletRef.getBounds()).equals(m,0)&&(o.lastSetBounds=m,o.leafletRef.fitBounds(m))},setCenter(s){if(s==null)return;const m=J(s),ne=o.lastSetCenter||o.leafletRef.getCenter();(ne.lat!==m.lat||ne.lng!==m.lng)&&(o.lastSetCenter=m,o.leafletRef.panTo(m,b.value))}};W(d,q.addLayer),W(p,q.removeLayer),W(u,q.registerControl),W(c,q.registerLayerControl),o.leafletRef=k(f(n.value,a)),E(q,o.leafletRef,e),le(o.leafletRef,_),le(o.leafletRef,l),o.ready=!0,B(()=>t.emit("ready",o.leafletRef))}),Y(()=>{de(_),o.leafletRef&&(o.leafletRef.off(),o.leafletRef.remove())});const D=H(()=>o.leafletRef),O=H(()=>o.ready);return{root:n,ready:O,leafletObject:D,attrs:i}},render({attrs:e}){return e.style||(e.style={}),e.style.width||(e.style.width="100%"),e.style.height||(e.style.height="100%"),I("div",{...e,ref:"root"},this.ready&&this.$slots.default?this.$slots.default():{})}}),Fe=["Symbol(Comment)","Symbol(Text)"],We=["LTooltip","LPopup"],Oe={...U,draggable:{type:Boolean,default:void 0},icon:{type:[Object]},zIndexOffset:{type:Number},latLng:{type:[Object,Array],custom:!0,required:!0}},Je=(e,t,n)=>{const{options:o,methods:r}=ge(e,t,n),a=N(e,Oe,o),l={...r,setDraggable(i){t.value.dragging&&(i?t.value.dragging.enable():t.value.dragging.disable())},latLngSync(i){n.emit("update:latLng",i.latlng),n.emit("update:lat-lng",i.latlng)},setLatLng(i){if(i!=null&&t.value){const d=t.value.getLatLng();(!d||!d.equals(i))&&t.value.setLatLng(i)}}};return{options:a,methods:l}},Ke=(e,t)=>{const n=t.slots.default&&t.slots.default();return n&&n.length&&n.some(Xe)};function Xe(e){return!(Fe.includes(e.type.toString())||We.includes(e.type.name))}const Qe=j({name:"LMarker",props:Oe,setup(e,t){const n=g(),o=g(!1),r=R(z),a=S($);A(ye,()=>{var p;return!!((p=n.value)!=null&&p.getElement())}),A(me,p=>{var u,c;const b=w((u=n.value)==null?void 0:u.getElement)&&((c=n.value)==null?void 0:c.getElement());b&&(b.innerHTML=p)}),A(fe,p=>{var u;return((u=n.value)==null?void 0:u.setIcon)&&n.value.setIcon(p)});const{options:l,methods:i}=Je(e,n,t),d={moveHandler:_e(i.latLngSync)};return P(async()=>{const{marker:p,divIcon:u}=r?C.L:await L(()=>import("./leaflet-src.esm.NPgqU0nd.js"),__vite__mapDeps([]),import.meta.url);Ke(l,t)&&(l.icon=u({className:""})),n.value=k(p(e.latLng,l));const{listeners:c}=M(t.attrs);n.value.on(c),n.value.on("move",d.moveHandler),E(i,n.value,e),a({...e,...i,leafletObject:n.value}),o.value=!0,B(()=>t.emit("ready",n.value))}),Y(()=>de(d)),{ready:o,leafletObject:n}},render(){return Ue(this.ready,this.$slots)}}),Ye={...he,smoothFactor:{type:Number},noClip:{type:Boolean,default:void 0},latLngs:{type:Array,required:!0,custom:!0}},ue={...Ye},Te={...Z,content:{type:String,default:null}},et=(e,t)=>{const{options:n,methods:o}=G(e),r={...o,setContent(a){t.value&&a!==null&&a!==void 0&&t.value.setContent(a)}};return{options:n,methods:r}},tt=e=>e.default?I("div",{ref:"root"},e.default()):null;({...Te});({...ue,latLngs:{...ue.latLngs}});const oe={...te,tms:{type:Boolean,default:void 0},subdomains:{type:[String,Array],validator:e=>typeof e=="string"?!0:Array.isArray(e)?e.every(t=>typeof t=="string"):!1},detectRetina:{type:Boolean,default:void 0},url:{type:String,required:!0,custom:!0}},ot=(e,t,n)=>{const{options:o,methods:r}=Se(e,t,n),a=N(e,oe,o),l={...r};return{options:a,methods:l}},nt=j({props:oe,setup(e,t){const n=g(),o=R(z),r=S($),{options:a,methods:l}=ot(e,n,t);return P(async()=>{const{tileLayer:i}=o?C.L:await L(()=>import("./leaflet-src.esm.NPgqU0nd.js"),__vite__mapDeps([]),import.meta.url);n.value=k(i(e.url,a));const{listeners:d}=M(t.attrs);n.value.on(d),E(l,n.value,e),r({...e,...l,leafletObject:n.value}),B(()=>t.emit("ready",n.value))}),{leafletObject:n}},render(){return null}}),at={...Te},rt=(e,t)=>{const{options:n,methods:o}=et(e,t),r=S(be);return Y(()=>{r()}),{options:n,methods:o}},lt=j({name:"LTooltip",props:at,setup(e,t){const n=g(),o=g(null),r=R(z),a=S(ve),{options:l,methods:i}=rt(e,n);return P(async()=>{const{tooltip:d}=r?C.L:await L(()=>import("./leaflet-src.esm.NPgqU0nd.js"),__vite__mapDeps([]),import.meta.url);n.value=k(d(l)),E(i,n.value,e);const{listeners:p}=M(t.attrs);n.value.on(p),n.value.setContent(e.content||o.value||""),a(n.value),B(()=>t.emit("ready",n.value))}),{root:o,leafletObject:n}},render(){return tt(this.$slots)}});({...oe});const it="w-full h-full",st={__name:"Map",props:{height:{type:String,required:!0},width:{type:String,required:!0},zoom:{type:Number,required:!0},center:{type:Array,default:()=>[41.6086,21.7453]},markers:{type:Array,required:!0}},setup(e){return(t,n)=>{const o=nt,r=lt,a=Qe,l=He;return K(),re("div",{style:Ee({height:e.height,width:e.width}),class:Ne(it)},[X(l,{ref:"map",zoom:e.zoom,center:e.center,class:"w-full h-full"},{default:Q(()=>[X(o,{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",attribution:'© <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',"layer-type":"base",name:"OpenStreetMap"}),(K(!0),re(Be,null,je(e.markers,(i,d)=>(K(),Re(a,{key:d,"lat-lng":i.latLng},{default:Q(()=>[X(r,null,{default:Q(()=>[Pe(Ie(i.tooltip),1)]),_:2},1024)]),_:2},1032,["lat-lng"]))),128))]),_:1},8,["zoom","center"])],4)}}},dt=st;export{dt as M};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
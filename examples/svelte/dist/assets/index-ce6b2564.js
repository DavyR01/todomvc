var $e=Object.defineProperty;var Ce=(e,t,n)=>t in e?$e(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var Z=(e,t,n)=>(Ce(e,typeof t!="symbol"?t+"":t,n),n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))l(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&l(r)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function l(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();function O(){}function he(e){return e()}function ce(){return Object.create(null)}function U(e){e.forEach(he)}function oe(e){return typeof e=="function"}function G(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function Ie(e){return Object.keys(e).length===0}function Ee(e){return e&&oe(e.destroy)?e.destroy:O}function a(e,t){e.appendChild(t)}function P(e,t,n){e.insertBefore(t,n||null)}function S(e){e.parentNode&&e.parentNode.removeChild(e)}function v(e){return document.createElement(e)}function z(e){return document.createTextNode(e)}function I(){return z(" ")}function _e(){return z("")}function j(e,t,n,l){return e.addEventListener(t,n,l),()=>e.removeEventListener(t,n,l)}function y(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function Ae(e){return Array.from(e.childNodes)}function ee(e,t){t=""+t,e.data!==t&&(e.data=t)}function N(e,t,n){e.classList.toggle(t,!!n)}function Oe(e,t,{bubbles:n=!1,cancelable:l=!1}={}){return new CustomEvent(e,{detail:t,bubbles:n,cancelable:l})}let R;function K(e){R=e}function ge(){if(!R)throw new Error("Function called outside component initialization");return R}function Fe(e){ge().$$.on_mount.push(e)}function re(){const e=ge();return(t,n,{cancelable:l=!1}={})=>{const o=e.$$.callbacks[t];if(o){const i=Oe(t,n,{cancelable:l});return o.slice().forEach(r=>{r.call(e,i)}),!i.defaultPrevented}return!0}}const T=[],te=[];let H=[];const ne=[],we=Promise.resolve();let le=!1;function be(){le||(le=!0,we.then(ve))}function Le(){return be(),we}function ie(e){H.push(e)}function Ne(e){ne.push(e)}const x=new Set;let D=0;function ve(){if(D!==0)return;const e=R;do{try{for(;D<T.length;){const t=T[D];D++,K(t),Se(t.$$)}}catch(t){throw T.length=0,D=0,t}for(K(null),T.length=0,D=0;te.length;)te.pop()();for(let t=0;t<H.length;t+=1){const n=H[t];x.has(n)||(x.add(n),n())}H.length=0}while(T.length);for(;ne.length;)ne.pop()();le=!1,x.clear(),K(e)}function Se(e){if(e.fragment!==null){e.update(),U(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(ie)}}function Me(e){const t=[],n=[];H.forEach(l=>e.indexOf(l)===-1?t.push(l):n.push(l)),n.forEach(l=>l()),H=t}const W=new Set;let q;function ye(){q={r:0,c:[],p:q}}function ke(){q.r||U(q.c),q=q.p}function M(e,t){e&&e.i&&(W.delete(e),e.i(t))}function B(e,t,n,l){if(e&&e.o){if(W.has(e))return;W.add(e),q.c.push(()=>{W.delete(e),l&&(n&&e.d(1),l())}),e.o(t)}else l&&l()}function ue(e){return(e==null?void 0:e.length)!==void 0?e:Array.from(e)}function Pe(e,t){B(e,1,1,()=>{t.delete(e.key)})}function je(e,t,n,l,o,i,r,u,d,s,p,w){let f=e.length,b=i.length,c=f;const g={};for(;c--;)g[e[c].key]=c;const k=[],E=new Map,m=new Map,_=[];for(c=b;c--;){const $=w(o,i,c),F=n($);let L=r.get(F);L?l&&_.push(()=>L.p($,t)):(L=s(F,$),L.c()),E.set(F,k[c]=L),F in g&&m.set(F,Math.abs(c-g[F]))}const h=new Set,C=new Set;function A($){M($,1),$.m(u,p),r.set($.key,$),p=$.first,b--}for(;f&&b;){const $=k[b-1],F=e[f-1],L=$.key,V=F.key;$===F?(p=$.first,f--,b--):E.has(V)?!r.has(L)||h.has(L)?A($):C.has(V)?f--:m.get(L)>m.get(V)?(C.add(L),A($)):(h.add(V),f--):(d(F,r),f--)}for(;f--;){const $=e[f];E.has($.key)||d($,r)}for(;b;)A(k[b-1]);return U(_),k}function Ue(e,t,n){const l=e.$$.props[t];l!==void 0&&(e.$$.bound[l]=n,n(e.$$.ctx[l]))}function se(e){e&&e.c()}function J(e,t,n){const{fragment:l,after_update:o}=e.$$;l&&l.m(t,n),ie(()=>{const i=e.$$.on_mount.map(he).filter(oe);e.$$.on_destroy?e.$$.on_destroy.push(...i):U(i),e.$$.on_mount=[]}),o.forEach(ie)}function Q(e,t){const n=e.$$;n.fragment!==null&&(Me(n.after_update),U(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function qe(e,t){e.$$.dirty[0]===-1&&(T.push(e),be(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function X(e,t,n,l,o,i,r,u=[-1]){const d=R;K(e);const s=e.$$={fragment:null,ctx:[],props:i,update:O,not_equal:o,bound:ce(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(d?d.$$.context:[])),callbacks:ce(),dirty:u,skip_bound:!1,root:t.target||d.$$.root};r&&r(s.root);let p=!1;if(s.ctx=n?n(e,t.props||{},(w,f,...b)=>{const c=b.length?b[0]:f;return s.ctx&&o(s.ctx[w],s.ctx[w]=c)&&(!s.skip_bound&&s.bound[w]&&s.bound[w](c),p&&qe(e,w)),f}):[],s.update(),p=!0,U(s.before_update),s.fragment=l?l(s.ctx):!1,t.target){if(t.hydrate){const w=Ae(t.target);s.fragment&&s.fragment.l(w),w.forEach(S)}else s.fragment&&s.fragment.c();t.intro&&M(e.$$.fragment),J(e,t.target,t.anchor),ve()}K(d)}class Y{constructor(){Z(this,"$$");Z(this,"$$set")}$destroy(){Q(this,1),this.$destroy=O}$on(t,n){if(!oe(n))return O;const l=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return l.push(n),()=>{const o=l.indexOf(n);o!==-1&&l.splice(o,1)}}$set(t){this.$$set&&!Ie(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const Be="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(Be);function De(e){let t="all";function n(){switch(window.location.hash){case"#/active":t="active";break;case"#/completed":t="completed";break;default:t="all"}e(t)}function l(){window.addEventListener("hashchange",n)}return{init:l}}function Te(e){let t,n,l,o,i,r;return{c(){t=v("header"),n=v("h1"),n.textContent="todos",l=I(),o=v("input"),y(o,"class","new-todo"),y(o,"placeholder","What needs to be done?"),o.autofocus=!0,y(t,"class","header")},m(u,d){P(u,t,d),a(t,n),a(t,l),a(t,o),o.focus(),i||(r=j(o,"keydown",e[0]),i=!0)},p:O,i:O,o:O,d(u){u&&S(t),i=!1,r()}}}function ze(e){const t=re();function n(l){l.key==="Enter"&&(t("addItem",{text:l.target.value}),l.target.value="")}return[n]}class He extends Y{constructor(t){super(),X(this,t,ze,Te,G,{})}}function fe(e){let t,n,l;return{c(){t=v("button"),t.textContent="Clear completed",y(t,"class","clear-completed")},m(o,i){P(o,t,i),n||(l=j(t,"click",e[3]),n=!0)},p:O,d(o){o&&S(t),n=!1,l()}}}function Ke(e){let t,n,l,o,i,r=e[0]===1?"item":"items",u,d,s,p,w,f,b,c,g,k,E,m,_,h=e[2]&&fe(e);return{c(){t=v("footer"),n=v("span"),l=v("strong"),o=z(e[0]),i=I(),u=z(r),d=z(" left"),s=I(),p=v("ul"),w=v("li"),f=v("a"),f.textContent="All",b=I(),c=v("li"),g=v("a"),g.textContent="Active",k=I(),E=v("li"),m=v("a"),m.textContent="Completed",_=I(),h&&h.c(),y(n,"class","todo-count"),y(f,"href","#/"),N(f,"selected",e[1]==="all"),y(g,"href","#/active"),N(g,"selected",e[1]==="active"),y(m,"href","#/completed"),N(m,"selected",e[1]==="completed"),y(p,"class","filters"),y(t,"class","footer")},m(C,A){P(C,t,A),a(t,n),a(n,l),a(l,o),a(n,i),a(n,u),a(n,d),a(t,s),a(t,p),a(p,w),a(w,f),a(p,b),a(p,c),a(c,g),a(p,k),a(p,E),a(E,m),a(t,_),h&&h.m(t,null)},p(C,[A]){A&1&&ee(o,C[0]),A&1&&r!==(r=C[0]===1?"item":"items")&&ee(u,r),A&2&&N(f,"selected",C[1]==="all"),A&2&&N(g,"selected",C[1]==="active"),A&2&&N(m,"selected",C[1]==="completed"),C[2]?h?h.p(C,A):(h=fe(C),h.c(),h.m(t,null)):h&&(h.d(1),h=null)},i:O,o:O,d(C){C&&S(t),h&&h.d()}}}function Re(e,t,n){let{numActive:l}=t,{currentFilter:o}=t,{numCompleted:i}=t;const r=re();function u(d){r("removeCompletedItems")}return e.$$set=d=>{"numActive"in d&&n(0,l=d.numActive),"currentFilter"in d&&n(1,o=d.currentFilter),"numCompleted"in d&&n(2,i=d.numCompleted)},[l,o,i,u]}class Ve extends Y{constructor(t){super(),X(this,t,Re,Ke,G,{numActive:0,currentFilter:1,numCompleted:2})}}function de(e){let t,n,l,o,i,r,u;return{c(){t=v("div"),n=v("input"),o=I(),i=v("label"),i.textContent="Edit Todo Input",n.value=l=e[0].description,y(n,"id","edit-todo-input"),y(n,"class","edit"),y(i,"class","visually-hidden"),y(i,"for","edit-todo-input"),y(t,"class","input-container")},m(d,s){P(d,t,s),a(t,n),a(t,o),a(t,i),r||(u=[j(n,"keydown",e[4]),j(n,"blur",e[5]),Ee(e[6].call(null,n))],r=!0)},p(d,s){s&1&&l!==(l=d[0].description)&&n.value!==l&&(n.value=l)},d(d){d&&S(t),r=!1,U(u)}}}function We(e){let t,n,l,o,i,r,u=e[0].description+"",d,s,p,w,f,b,c=e[1]&&de(e);return{c(){t=v("li"),n=v("div"),l=v("input"),i=I(),r=v("label"),d=z(u),s=I(),p=v("button"),w=I(),c&&c.c(),y(l,"class","toggle"),y(l,"type","checkbox"),l.checked=o=e[0].completed,y(p,"class","destroy"),y(n,"class","view"),N(t,"completed",e[0].completed),N(t,"editing",e[1])},m(g,k){P(g,t,k),a(t,n),a(n,l),a(n,i),a(n,r),a(r,d),a(n,s),a(n,p),a(t,w),c&&c.m(t,null),f||(b=[j(l,"change",e[7]),j(r,"dblclick",e[3]),j(p,"click",e[2])],f=!0)},p(g,[k]){k&1&&o!==(o=g[0].completed)&&(l.checked=o),k&1&&u!==(u=g[0].description+"")&&ee(d,u),g[1]?c?c.p(g,k):(c=de(g),c.c(),c.m(t,null)):c&&(c.d(1),c=null),k&1&&N(t,"completed",g[0].completed),k&2&&N(t,"editing",g[1])},i:O,o:O,d(g){g&&S(t),c&&c.d(),f=!1,U(b)}}}function Ge(e,t,n){let{item:l}=t;const o=re();let i=!1;function r(){o("removeItem")}function u(){n(1,i=!0)}function d(f){f.key==="Enter"?f.target.blur():f.key==="Escape"&&n(1,i=!1)}function s(f){if(!i)return;const{value:b}=f.target;b.length?n(0,l.description=b,l):r(),n(1,i=!1)}async function p(f){await Le(),f.focus()}const w=f=>n(0,l.completed=f.target.checked,l);return e.$$set=f=>{"item"in f&&n(0,l=f.item)},[l,i,r,u,d,s,p,w]}class Je extends Y{constructor(t){super(),X(this,t,Ge,We,G,{item:0})}}function ae(e,t,n){const l=e.slice();return l[11]=t[n],l[12]=t,l[13]=n,l}function me(e){let t,n,l,o,i,r,u,d,s=[],p=new Map,w,f,b,c,g,k=ue(e[4]);const E=m=>m[11].id;for(let m=0;m<k.length;m+=1){let _=ae(e,k,m),h=E(_);p.set(h,s[m]=pe(h,_))}return f=new Ve({props:{numActive:e[3],currentFilter:e[0],numCompleted:e[2]}}),f.$on("removeCompletedItems",e[8]),{c(){t=v("main"),n=v("div"),l=v("input"),i=I(),r=v("label"),r.textContent="Mark all as complete",u=I(),d=v("ul");for(let m=0;m<s.length;m+=1)s[m].c();w=I(),se(f.$$.fragment),y(l,"id","toggle-all"),y(l,"class","toggle-all"),y(l,"type","checkbox"),l.checked=o=e[2]===e[1].length,y(r,"for","toggle-all"),y(n,"class","toggle-all-container"),y(d,"class","todo-list"),y(t,"class","main")},m(m,_){P(m,t,_),a(t,n),a(n,l),a(n,i),a(n,r),a(t,u),a(t,d);for(let h=0;h<s.length;h+=1)s[h]&&s[h].m(d,null);a(t,w),J(f,t,null),b=!0,c||(g=j(l,"change",e[7]),c=!0)},p(m,_){(!b||_&6&&o!==(o=m[2]===m[1].length))&&(l.checked=o),_&80&&(k=ue(m[4]),ye(),s=je(s,_,E,1,m,k,p,d,Pe,pe,null,ae),ke());const h={};_&8&&(h.numActive=m[3]),_&1&&(h.currentFilter=m[0]),_&4&&(h.numCompleted=m[2]),f.$set(h)},i(m){if(!b){for(let _=0;_<k.length;_+=1)M(s[_]);M(f.$$.fragment,m),b=!0}},o(m){for(let _=0;_<s.length;_+=1)B(s[_]);B(f.$$.fragment,m),b=!1},d(m){m&&S(t);for(let _=0;_<s.length;_+=1)s[_].d();Q(f),c=!1,g()}}}function pe(e,t){let n,l,o,i;function r(s){t[9](s,t[11],t[12],t[13])}function u(){return t[10](t[13])}let d={};return t[11]!==void 0&&(d.item=t[11]),l=new Je({props:d}),te.push(()=>Ue(l,"item",r)),l.$on("removeItem",u),{key:e,first:null,c(){n=_e(),se(l.$$.fragment),this.first=n},m(s,p){P(s,n,p),J(l,s,p),i=!0},p(s,p){t=s;const w={};!o&&p&16&&(o=!0,w.item=t[11],Ne(()=>o=!1)),l.$set(w)},i(s){i||(M(l.$$.fragment,s),i=!0)},o(s){B(l.$$.fragment,s),i=!1},d(s){s&&S(n),Q(l,s)}}}function Qe(e){let t,n,l,o;t=new He({}),t.$on("addItem",e[5]);let i=e[1].length>0&&me(e);return{c(){se(t.$$.fragment),n=I(),i&&i.c(),l=_e()},m(r,u){J(t,r,u),P(r,n,u),i&&i.m(r,u),P(r,l,u),o=!0},p(r,[u]){r[1].length>0?i?(i.p(r,u),u&2&&M(i,1)):(i=me(r),i.c(),M(i,1),i.m(l.parentNode,l)):i&&(ye(),B(i,1,1,()=>{i=null}),ke())},i(r){o||(M(t.$$.fragment,r),M(i),o=!0)},o(r){B(t.$$.fragment,r),B(i),o=!1},d(r){r&&(S(n),S(l)),Q(t,r),i&&i.d(r)}}}function Xe(e,t,n){let l,o,i,r="all",u=[];function d(c){u.push({id:crypto.randomUUID(),description:c.detail.text,completed:!1}),n(1,u)}function s(c){u.splice(c,1),n(1,u)}function p(c){const g=c.target.checked;n(1,u=u.map(k=>({...k,completed:g})))}function w(){n(1,u=u.filter(c=>!c.completed))}Fe(()=>{De(c=>n(0,r=c)).init()});function f(c,g,k,E){k[E]=c,n(4,l),n(0,r),n(1,u)}const b=c=>s(c);return e.$$.update=()=>{e.$$.dirty&3&&n(4,l=r==="all"?u:r==="completed"?u.filter(c=>c.completed):u.filter(c=>!c.completed)),e.$$.dirty&2&&n(3,o=u.filter(c=>!c.completed).length),e.$$.dirty&2&&n(2,i=u.filter(c=>c.completed).length)},[r,u,i,o,l,d,s,p,w,f,b]}class Ye extends Y{constructor(t){super(),X(this,t,Xe,Qe,G,{})}}new Ye({target:document.querySelector(".todoapp")});
(function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const m of document.querySelectorAll('link[rel="modulepreload"]'))p(m);new MutationObserver(m=>{for(const f of m)if(f.type==="childList")for(const b of f.addedNodes)b.tagName==="LINK"&&b.rel==="modulepreload"&&p(b)}).observe(document,{childList:!0,subtree:!0});function l(m){const f={};return m.integrity&&(f.integrity=m.integrity),m.referrerPolicy&&(f.referrerPolicy=m.referrerPolicy),m.crossOrigin==="use-credentials"?f.credentials="include":m.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function p(m){if(m.ep)return;m.ep=!0;const f=l(m);fetch(m.href,f)}})();function gx(a){return a&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a}var Ai={exports:{}},oo={},Wi={exports:{}},de={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lp;function vx(){if(lp)return de;lp=1;var a=Symbol.for("react.element"),c=Symbol.for("react.portal"),l=Symbol.for("react.fragment"),p=Symbol.for("react.strict_mode"),m=Symbol.for("react.profiler"),f=Symbol.for("react.provider"),b=Symbol.for("react.context"),L=Symbol.for("react.forward_ref"),T=Symbol.for("react.suspense"),F=Symbol.for("react.memo"),W=Symbol.for("react.lazy"),O=Symbol.iterator;function P(g){return g===null||typeof g!="object"?null:(g=O&&g[O]||g["@@iterator"],typeof g=="function"?g:null)}var U={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ae=Object.assign,K={};function $(g,N,Z){this.props=g,this.context=N,this.refs=K,this.updater=Z||U}$.prototype.isReactComponent={},$.prototype.setState=function(g,N){if(typeof g!="object"&&typeof g!="function"&&g!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,g,N,"setState")},$.prototype.forceUpdate=function(g){this.updater.enqueueForceUpdate(this,g,"forceUpdate")};function ne(){}ne.prototype=$.prototype;function ee(g,N,Z){this.props=g,this.context=N,this.refs=K,this.updater=Z||U}var J=ee.prototype=new ne;J.constructor=ee,ae(J,$.prototype),J.isPureReactComponent=!0;var re=Array.isArray,fe=Object.prototype.hasOwnProperty,X={current:null},q={key:!0,ref:!0,__self:!0,__source:!0};function Pe(g,N,Z){var te,pe={},ce=null,ge=null;if(N!=null)for(te in N.ref!==void 0&&(ge=N.ref),N.key!==void 0&&(ce=""+N.key),N)fe.call(N,te)&&!q.hasOwnProperty(te)&&(pe[te]=N[te]);var ue=arguments.length-2;if(ue===1)pe.children=Z;else if(1<ue){for(var xe=Array(ue),De=0;De<ue;De++)xe[De]=arguments[De+2];pe.children=xe}if(g&&g.defaultProps)for(te in ue=g.defaultProps,ue)pe[te]===void 0&&(pe[te]=ue[te]);return{$$typeof:a,type:g,key:ce,ref:ge,props:pe,_owner:X.current}}function lr(g,N){return{$$typeof:a,type:g.type,key:N,ref:g.ref,props:g.props,_owner:g._owner}}function kr(g){return typeof g=="object"&&g!==null&&g.$$typeof===a}function Wr(g){var N={"=":"=0",":":"=2"};return"$"+g.replace(/[=:]/g,function(Z){return N[Z]})}var mr=/\/+/g;function Xe(g,N){return typeof g=="object"&&g!==null&&g.key!=null?Wr(""+g.key):N.toString(36)}function cr(g,N,Z,te,pe){var ce=typeof g;(ce==="undefined"||ce==="boolean")&&(g=null);var ge=!1;if(g===null)ge=!0;else switch(ce){case"string":case"number":ge=!0;break;case"object":switch(g.$$typeof){case a:case c:ge=!0}}if(ge)return ge=g,pe=pe(ge),g=te===""?"."+Xe(ge,0):te,re(pe)?(Z="",g!=null&&(Z=g.replace(mr,"$&/")+"/"),cr(pe,N,Z,"",function(De){return De})):pe!=null&&(kr(pe)&&(pe=lr(pe,Z+(!pe.key||ge&&ge.key===pe.key?"":(""+pe.key).replace(mr,"$&/")+"/")+g)),N.push(pe)),1;if(ge=0,te=te===""?".":te+":",re(g))for(var ue=0;ue<g.length;ue++){ce=g[ue];var xe=te+Xe(ce,ue);ge+=cr(ce,N,Z,xe,pe)}else if(xe=P(g),typeof xe=="function")for(g=xe.call(g),ue=0;!(ce=g.next()).done;)ce=ce.value,xe=te+Xe(ce,ue++),ge+=cr(ce,N,Z,xe,pe);else if(ce==="object")throw N=String(g),Error("Objects are not valid as a React child (found: "+(N==="[object Object]"?"object with keys {"+Object.keys(g).join(", ")+"}":N)+"). If you meant to render a collection of children, use an array instead.");return ge}function fr(g,N,Z){if(g==null)return g;var te=[],pe=0;return cr(g,te,"","",function(ce){return N.call(Z,ce,pe++)}),te}function Ve(g){if(g._status===-1){var N=g._result;N=N(),N.then(function(Z){(g._status===0||g._status===-1)&&(g._status=1,g._result=Z)},function(Z){(g._status===0||g._status===-1)&&(g._status=2,g._result=Z)}),g._status===-1&&(g._status=0,g._result=N)}if(g._status===1)return g._result.default;throw g._result}var je={current:null},I={transition:null},D={ReactCurrentDispatcher:je,ReactCurrentBatchConfig:I,ReactCurrentOwner:X};function E(){throw Error("act(...) is not supported in production builds of React.")}return de.Children={map:fr,forEach:function(g,N,Z){fr(g,function(){N.apply(this,arguments)},Z)},count:function(g){var N=0;return fr(g,function(){N++}),N},toArray:function(g){return fr(g,function(N){return N})||[]},only:function(g){if(!kr(g))throw Error("React.Children.only expected to receive a single React element child.");return g}},de.Component=$,de.Fragment=l,de.Profiler=m,de.PureComponent=ee,de.StrictMode=p,de.Suspense=T,de.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=D,de.act=E,de.cloneElement=function(g,N,Z){if(g==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+g+".");var te=ae({},g.props),pe=g.key,ce=g.ref,ge=g._owner;if(N!=null){if(N.ref!==void 0&&(ce=N.ref,ge=X.current),N.key!==void 0&&(pe=""+N.key),g.type&&g.type.defaultProps)var ue=g.type.defaultProps;for(xe in N)fe.call(N,xe)&&!q.hasOwnProperty(xe)&&(te[xe]=N[xe]===void 0&&ue!==void 0?ue[xe]:N[xe])}var xe=arguments.length-2;if(xe===1)te.children=Z;else if(1<xe){ue=Array(xe);for(var De=0;De<xe;De++)ue[De]=arguments[De+2];te.children=ue}return{$$typeof:a,type:g.type,key:pe,ref:ce,props:te,_owner:ge}},de.createContext=function(g){return g={$$typeof:b,_currentValue:g,_currentValue2:g,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},g.Provider={$$typeof:f,_context:g},g.Consumer=g},de.createElement=Pe,de.createFactory=function(g){var N=Pe.bind(null,g);return N.type=g,N},de.createRef=function(){return{current:null}},de.forwardRef=function(g){return{$$typeof:L,render:g}},de.isValidElement=kr,de.lazy=function(g){return{$$typeof:W,_payload:{_status:-1,_result:g},_init:Ve}},de.memo=function(g,N){return{$$typeof:F,type:g,compare:N===void 0?null:N}},de.startTransition=function(g){var N=I.transition;I.transition={};try{g()}finally{I.transition=N}},de.unstable_act=E,de.useCallback=function(g,N){return je.current.useCallback(g,N)},de.useContext=function(g){return je.current.useContext(g)},de.useDebugValue=function(){},de.useDeferredValue=function(g){return je.current.useDeferredValue(g)},de.useEffect=function(g,N){return je.current.useEffect(g,N)},de.useId=function(){return je.current.useId()},de.useImperativeHandle=function(g,N,Z){return je.current.useImperativeHandle(g,N,Z)},de.useInsertionEffect=function(g,N){return je.current.useInsertionEffect(g,N)},de.useLayoutEffect=function(g,N){return je.current.useLayoutEffect(g,N)},de.useMemo=function(g,N){return je.current.useMemo(g,N)},de.useReducer=function(g,N,Z){return je.current.useReducer(g,N,Z)},de.useRef=function(g){return je.current.useRef(g)},de.useState=function(g){return je.current.useState(g)},de.useSyncExternalStore=function(g,N,Z){return je.current.useSyncExternalStore(g,N,Z)},de.useTransition=function(){return je.current.useTransition()},de.version="18.3.1",de}var cp;function nl(){return cp||(cp=1,Wi.exports=vx()),Wi.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dp;function yx(){if(dp)return oo;dp=1;var a=nl(),c=Symbol.for("react.element"),l=Symbol.for("react.fragment"),p=Object.prototype.hasOwnProperty,m=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,f={key:!0,ref:!0,__self:!0,__source:!0};function b(L,T,F){var W,O={},P=null,U=null;F!==void 0&&(P=""+F),T.key!==void 0&&(P=""+T.key),T.ref!==void 0&&(U=T.ref);for(W in T)p.call(T,W)&&!f.hasOwnProperty(W)&&(O[W]=T[W]);if(L&&L.defaultProps)for(W in T=L.defaultProps,T)O[W]===void 0&&(O[W]=T[W]);return{$$typeof:c,type:L,key:P,ref:U,props:O,_owner:m.current}}return oo.Fragment=l,oo.jsx=b,oo.jsxs=b,oo}var pp;function jx(){return pp||(pp=1,Ai.exports=yx()),Ai.exports}var e=jx(),wa={},Di={exports:{}},nr={},Ui={exports:{}},$i={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var up;function bx(){return up||(up=1,(function(a){function c(I,D){var E=I.length;I.push(D);e:for(;0<E;){var g=E-1>>>1,N=I[g];if(0<m(N,D))I[g]=D,I[E]=N,E=g;else break e}}function l(I){return I.length===0?null:I[0]}function p(I){if(I.length===0)return null;var D=I[0],E=I.pop();if(E!==D){I[0]=E;e:for(var g=0,N=I.length,Z=N>>>1;g<Z;){var te=2*(g+1)-1,pe=I[te],ce=te+1,ge=I[ce];if(0>m(pe,E))ce<N&&0>m(ge,pe)?(I[g]=ge,I[ce]=E,g=ce):(I[g]=pe,I[te]=E,g=te);else if(ce<N&&0>m(ge,E))I[g]=ge,I[ce]=E,g=ce;else break e}}return D}function m(I,D){var E=I.sortIndex-D.sortIndex;return E!==0?E:I.id-D.id}if(typeof performance=="object"&&typeof performance.now=="function"){var f=performance;a.unstable_now=function(){return f.now()}}else{var b=Date,L=b.now();a.unstable_now=function(){return b.now()-L}}var T=[],F=[],W=1,O=null,P=3,U=!1,ae=!1,K=!1,$=typeof setTimeout=="function"?setTimeout:null,ne=typeof clearTimeout=="function"?clearTimeout:null,ee=typeof setImmediate!="undefined"?setImmediate:null;typeof navigator!="undefined"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function J(I){for(var D=l(F);D!==null;){if(D.callback===null)p(F);else if(D.startTime<=I)p(F),D.sortIndex=D.expirationTime,c(T,D);else break;D=l(F)}}function re(I){if(K=!1,J(I),!ae)if(l(T)!==null)ae=!0,Ve(fe);else{var D=l(F);D!==null&&je(re,D.startTime-I)}}function fe(I,D){ae=!1,K&&(K=!1,ne(Pe),Pe=-1),U=!0;var E=P;try{for(J(D),O=l(T);O!==null&&(!(O.expirationTime>D)||I&&!Wr());){var g=O.callback;if(typeof g=="function"){O.callback=null,P=O.priorityLevel;var N=g(O.expirationTime<=D);D=a.unstable_now(),typeof N=="function"?O.callback=N:O===l(T)&&p(T),J(D)}else p(T);O=l(T)}if(O!==null)var Z=!0;else{var te=l(F);te!==null&&je(re,te.startTime-D),Z=!1}return Z}finally{O=null,P=E,U=!1}}var X=!1,q=null,Pe=-1,lr=5,kr=-1;function Wr(){return!(a.unstable_now()-kr<lr)}function mr(){if(q!==null){var I=a.unstable_now();kr=I;var D=!0;try{D=q(!0,I)}finally{D?Xe():(X=!1,q=null)}}else X=!1}var Xe;if(typeof ee=="function")Xe=function(){ee(mr)};else if(typeof MessageChannel!="undefined"){var cr=new MessageChannel,fr=cr.port2;cr.port1.onmessage=mr,Xe=function(){fr.postMessage(null)}}else Xe=function(){$(mr,0)};function Ve(I){q=I,X||(X=!0,Xe())}function je(I,D){Pe=$(function(){I(a.unstable_now())},D)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(I){I.callback=null},a.unstable_continueExecution=function(){ae||U||(ae=!0,Ve(fe))},a.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):lr=0<I?Math.floor(1e3/I):5},a.unstable_getCurrentPriorityLevel=function(){return P},a.unstable_getFirstCallbackNode=function(){return l(T)},a.unstable_next=function(I){switch(P){case 1:case 2:case 3:var D=3;break;default:D=P}var E=P;P=D;try{return I()}finally{P=E}},a.unstable_pauseExecution=function(){},a.unstable_requestPaint=function(){},a.unstable_runWithPriority=function(I,D){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var E=P;P=I;try{return D()}finally{P=E}},a.unstable_scheduleCallback=function(I,D,E){var g=a.unstable_now();switch(typeof E=="object"&&E!==null?(E=E.delay,E=typeof E=="number"&&0<E?g+E:g):E=g,I){case 1:var N=-1;break;case 2:N=250;break;case 5:N=1073741823;break;case 4:N=1e4;break;default:N=5e3}return N=E+N,I={id:W++,callback:D,priorityLevel:I,startTime:E,expirationTime:N,sortIndex:-1},E>g?(I.sortIndex=E,c(F,I),l(T)===null&&I===l(F)&&(K?(ne(Pe),Pe=-1):K=!0,je(re,E-g))):(I.sortIndex=N,c(T,I),ae||U||(ae=!0,Ve(fe))),I},a.unstable_shouldYield=Wr,a.unstable_wrapCallback=function(I){var D=P;return function(){var E=P;P=D;try{return I.apply(this,arguments)}finally{P=E}}}})($i)),$i}var hp;function Nx(){return hp||(hp=1,Ui.exports=bx()),Ui.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xp;function wx(){if(xp)return nr;xp=1;var a=nl(),c=Nx();function l(r){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+r,s=1;s<arguments.length;s++)t+="&args[]="+encodeURIComponent(arguments[s]);return"Minified React error #"+r+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var p=new Set,m={};function f(r,t){b(r,t),b(r+"Capture",t)}function b(r,t){for(m[r]=t,r=0;r<t.length;r++)p.add(t[r])}var L=!(typeof window=="undefined"||typeof window.document=="undefined"||typeof window.document.createElement=="undefined"),T=Object.prototype.hasOwnProperty,F=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,W={},O={};function P(r){return T.call(O,r)?!0:T.call(W,r)?!1:F.test(r)?O[r]=!0:(W[r]=!0,!1)}function U(r,t,s,o){if(s!==null&&s.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return o?!1:s!==null?!s.acceptsBooleans:(r=r.toLowerCase().slice(0,5),r!=="data-"&&r!=="aria-");default:return!1}}function ae(r,t,s,o){if(t===null||typeof t=="undefined"||U(r,t,s,o))return!0;if(o)return!1;if(s!==null)switch(s.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function K(r,t,s,o,n,i,d){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=o,this.attributeNamespace=n,this.mustUseProperty=s,this.propertyName=r,this.type=t,this.sanitizeURL=i,this.removeEmptyString=d}var $={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(r){$[r]=new K(r,0,!1,r,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(r){var t=r[0];$[t]=new K(t,1,!1,r[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(r){$[r]=new K(r,2,!1,r.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(r){$[r]=new K(r,2,!1,r,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(r){$[r]=new K(r,3,!1,r.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(r){$[r]=new K(r,3,!0,r,null,!1,!1)}),["capture","download"].forEach(function(r){$[r]=new K(r,4,!1,r,null,!1,!1)}),["cols","rows","size","span"].forEach(function(r){$[r]=new K(r,6,!1,r,null,!1,!1)}),["rowSpan","start"].forEach(function(r){$[r]=new K(r,5,!1,r.toLowerCase(),null,!1,!1)});var ne=/[\-:]([a-z])/g;function ee(r){return r[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(r){var t=r.replace(ne,ee);$[t]=new K(t,1,!1,r,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(r){var t=r.replace(ne,ee);$[t]=new K(t,1,!1,r,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(r){var t=r.replace(ne,ee);$[t]=new K(t,1,!1,r,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(r){$[r]=new K(r,1,!1,r.toLowerCase(),null,!1,!1)}),$.xlinkHref=new K("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(r){$[r]=new K(r,1,!1,r.toLowerCase(),null,!0,!0)});function J(r,t,s,o){var n=$.hasOwnProperty(t)?$[t]:null;(n!==null?n.type!==0:o||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(ae(t,s,n,o)&&(s=null),o||n===null?P(t)&&(s===null?r.removeAttribute(t):r.setAttribute(t,""+s)):n.mustUseProperty?r[n.propertyName]=s===null?n.type===3?!1:"":s:(t=n.attributeName,o=n.attributeNamespace,s===null?r.removeAttribute(t):(n=n.type,s=n===3||n===4&&s===!0?"":""+s,o?r.setAttributeNS(o,t,s):r.setAttribute(t,s))))}var re=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,fe=Symbol.for("react.element"),X=Symbol.for("react.portal"),q=Symbol.for("react.fragment"),Pe=Symbol.for("react.strict_mode"),lr=Symbol.for("react.profiler"),kr=Symbol.for("react.provider"),Wr=Symbol.for("react.context"),mr=Symbol.for("react.forward_ref"),Xe=Symbol.for("react.suspense"),cr=Symbol.for("react.suspense_list"),fr=Symbol.for("react.memo"),Ve=Symbol.for("react.lazy"),je=Symbol.for("react.offscreen"),I=Symbol.iterator;function D(r){return r===null||typeof r!="object"?null:(r=I&&r[I]||r["@@iterator"],typeof r=="function"?r:null)}var E=Object.assign,g;function N(r){if(g===void 0)try{throw Error()}catch(s){var t=s.stack.trim().match(/\n( *(at )?)/);g=t&&t[1]||""}return`
`+g+r}var Z=!1;function te(r,t){if(!r||Z)return"";Z=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(j){var o=j}Reflect.construct(r,[],t)}else{try{t.call()}catch(j){o=j}r.call(t.prototype)}else{try{throw Error()}catch(j){o=j}r()}}catch(j){if(j&&o&&typeof j.stack=="string"){for(var n=j.stack.split(`
`),i=o.stack.split(`
`),d=n.length-1,u=i.length-1;1<=d&&0<=u&&n[d]!==i[u];)u--;for(;1<=d&&0<=u;d--,u--)if(n[d]!==i[u]){if(d!==1||u!==1)do if(d--,u--,0>u||n[d]!==i[u]){var h=`
`+n[d].replace(" at new "," at ");return r.displayName&&h.includes("<anonymous>")&&(h=h.replace("<anonymous>",r.displayName)),h}while(1<=d&&0<=u);break}}}finally{Z=!1,Error.prepareStackTrace=s}return(r=r?r.displayName||r.name:"")?N(r):""}function pe(r){switch(r.tag){case 5:return N(r.type);case 16:return N("Lazy");case 13:return N("Suspense");case 19:return N("SuspenseList");case 0:case 2:case 15:return r=te(r.type,!1),r;case 11:return r=te(r.type.render,!1),r;case 1:return r=te(r.type,!0),r;default:return""}}function ce(r){if(r==null)return null;if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r;switch(r){case q:return"Fragment";case X:return"Portal";case lr:return"Profiler";case Pe:return"StrictMode";case Xe:return"Suspense";case cr:return"SuspenseList"}if(typeof r=="object")switch(r.$$typeof){case Wr:return(r.displayName||"Context")+".Consumer";case kr:return(r._context.displayName||"Context")+".Provider";case mr:var t=r.render;return r=r.displayName,r||(r=t.displayName||t.name||"",r=r!==""?"ForwardRef("+r+")":"ForwardRef"),r;case fr:return t=r.displayName||null,t!==null?t:ce(r.type)||"Memo";case Ve:t=r._payload,r=r._init;try{return ce(r(t))}catch{}}return null}function ge(r){var t=r.type;switch(r.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return r=t.render,r=r.displayName||r.name||"",t.displayName||(r!==""?"ForwardRef("+r+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ce(t);case 8:return t===Pe?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function ue(r){switch(typeof r){case"boolean":case"number":case"string":case"undefined":return r;case"object":return r;default:return""}}function xe(r){var t=r.type;return(r=r.nodeName)&&r.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function De(r){var t=xe(r)?"checked":"value",s=Object.getOwnPropertyDescriptor(r.constructor.prototype,t),o=""+r[t];if(!r.hasOwnProperty(t)&&typeof s!="undefined"&&typeof s.get=="function"&&typeof s.set=="function"){var n=s.get,i=s.set;return Object.defineProperty(r,t,{configurable:!0,get:function(){return n.call(this)},set:function(d){o=""+d,i.call(this,d)}}),Object.defineProperty(r,t,{enumerable:s.enumerable}),{getValue:function(){return o},setValue:function(d){o=""+d},stopTracking:function(){r._valueTracker=null,delete r[t]}}}}function Dr(r){r._valueTracker||(r._valueTracker=De(r))}function Sr(r){if(!r)return!1;var t=r._valueTracker;if(!t)return!0;var s=t.getValue(),o="";return r&&(o=xe(r)?r.checked?"true":"false":r.value),r=o,r!==s?(t.setValue(r),!0):!1}function xo(r){if(r=r||(typeof document!="undefined"?document:void 0),typeof r=="undefined")return null;try{return r.activeElement||r.body}catch{return r.body}}function Ga(r,t){var s=t.checked;return E({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:s!=null?s:r._wrapperState.initialChecked})}function ml(r,t){var s=t.defaultValue==null?"":t.defaultValue,o=t.checked!=null?t.checked:t.defaultChecked;s=ue(t.value!=null?t.value:s),r._wrapperState={initialChecked:o,initialValue:s,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function fl(r,t){t=t.checked,t!=null&&J(r,"checked",t,!1)}function Qa(r,t){fl(r,t);var s=ue(t.value),o=t.type;if(s!=null)o==="number"?(s===0&&r.value===""||r.value!=s)&&(r.value=""+s):r.value!==""+s&&(r.value=""+s);else if(o==="submit"||o==="reset"){r.removeAttribute("value");return}t.hasOwnProperty("value")?qa(r,t.type,s):t.hasOwnProperty("defaultValue")&&qa(r,t.type,ue(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(r.defaultChecked=!!t.defaultChecked)}function gl(r,t,s){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var o=t.type;if(!(o!=="submit"&&o!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+r._wrapperState.initialValue,s||t===r.value||(r.value=t),r.defaultValue=t}s=r.name,s!==""&&(r.name=""),r.defaultChecked=!!r._wrapperState.initialChecked,s!==""&&(r.name=s)}function qa(r,t,s){(t!=="number"||xo(r.ownerDocument)!==r)&&(s==null?r.defaultValue=""+r._wrapperState.initialValue:r.defaultValue!==""+s&&(r.defaultValue=""+s))}var ys=Array.isArray;function Pt(r,t,s,o){if(r=r.options,t){t={};for(var n=0;n<s.length;n++)t["$"+s[n]]=!0;for(s=0;s<r.length;s++)n=t.hasOwnProperty("$"+r[s].value),r[s].selected!==n&&(r[s].selected=n),n&&o&&(r[s].defaultSelected=!0)}else{for(s=""+ue(s),t=null,n=0;n<r.length;n++){if(r[n].value===s){r[n].selected=!0,o&&(r[n].defaultSelected=!0);return}t!==null||r[n].disabled||(t=r[n])}t!==null&&(t.selected=!0)}}function Ka(r,t){if(t.dangerouslySetInnerHTML!=null)throw Error(l(91));return E({},t,{value:void 0,defaultValue:void 0,children:""+r._wrapperState.initialValue})}function vl(r,t){var s=t.value;if(s==null){if(s=t.children,t=t.defaultValue,s!=null){if(t!=null)throw Error(l(92));if(ys(s)){if(1<s.length)throw Error(l(93));s=s[0]}t=s}t==null&&(t=""),s=t}r._wrapperState={initialValue:ue(s)}}function yl(r,t){var s=ue(t.value),o=ue(t.defaultValue);s!=null&&(s=""+s,s!==r.value&&(r.value=s),t.defaultValue==null&&r.defaultValue!==s&&(r.defaultValue=s)),o!=null&&(r.defaultValue=""+o)}function jl(r){var t=r.textContent;t===r._wrapperState.initialValue&&t!==""&&t!==null&&(r.value=t)}function bl(r){switch(r){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ya(r,t){return r==null||r==="http://www.w3.org/1999/xhtml"?bl(t):r==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":r}var mo,Nl=(function(r){return typeof MSApp!="undefined"&&MSApp.execUnsafeLocalFunction?function(t,s,o,n){MSApp.execUnsafeLocalFunction(function(){return r(t,s,o,n)})}:r})(function(r,t){if(r.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in r)r.innerHTML=t;else{for(mo=mo||document.createElement("div"),mo.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=mo.firstChild;r.firstChild;)r.removeChild(r.firstChild);for(;t.firstChild;)r.appendChild(t.firstChild)}});function js(r,t){if(t){var s=r.firstChild;if(s&&s===r.lastChild&&s.nodeType===3){s.nodeValue=t;return}}r.textContent=t}var bs={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},bu=["Webkit","ms","Moz","O"];Object.keys(bs).forEach(function(r){bu.forEach(function(t){t=t+r.charAt(0).toUpperCase()+r.substring(1),bs[t]=bs[r]})});function wl(r,t,s){return t==null||typeof t=="boolean"||t===""?"":s||typeof t!="number"||t===0||bs.hasOwnProperty(r)&&bs[r]?(""+t).trim():t+"px"}function kl(r,t){r=r.style;for(var s in t)if(t.hasOwnProperty(s)){var o=s.indexOf("--")===0,n=wl(s,t[s],o);s==="float"&&(s="cssFloat"),o?r.setProperty(s,n):r[s]=n}}var Nu=E({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ja(r,t){if(t){if(Nu[r]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(l(137,r));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(l(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(l(61))}if(t.style!=null&&typeof t.style!="object")throw Error(l(62))}}function Xa(r,t){if(r.indexOf("-")===-1)return typeof t.is=="string";switch(r){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Za=null;function en(r){return r=r.target||r.srcElement||window,r.correspondingUseElement&&(r=r.correspondingUseElement),r.nodeType===3?r.parentNode:r}var rn=null,_t=null,Ot=null;function Sl(r){if(r=Us(r)){if(typeof rn!="function")throw Error(l(280));var t=r.stateNode;t&&(t=Ro(t),rn(r.stateNode,r.type,t))}}function Tl(r){_t?Ot?Ot.push(r):Ot=[r]:_t=r}function Cl(){if(_t){var r=_t,t=Ot;if(Ot=_t=null,Sl(r),t)for(r=0;r<t.length;r++)Sl(t[r])}}function Ll(r,t){return r(t)}function zl(){}var tn=!1;function Il(r,t,s){if(tn)return r(t,s);tn=!0;try{return Ll(r,t,s)}finally{tn=!1,(_t!==null||Ot!==null)&&(zl(),Cl())}}function Ns(r,t){var s=r.stateNode;if(s===null)return null;var o=Ro(s);if(o===null)return null;s=o[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(r=r.type,o=!(r==="button"||r==="input"||r==="select"||r==="textarea")),r=!o;break e;default:r=!1}if(r)return null;if(s&&typeof s!="function")throw Error(l(231,t,typeof s));return s}var sn=!1;if(L)try{var ws={};Object.defineProperty(ws,"passive",{get:function(){sn=!0}}),window.addEventListener("test",ws,ws),window.removeEventListener("test",ws,ws)}catch{sn=!1}function wu(r,t,s,o,n,i,d,u,h){var j=Array.prototype.slice.call(arguments,3);try{t.apply(s,j)}catch(k){this.onError(k)}}var ks=!1,fo=null,go=!1,on=null,ku={onError:function(r){ks=!0,fo=r}};function Su(r,t,s,o,n,i,d,u,h){ks=!1,fo=null,wu.apply(ku,arguments)}function Tu(r,t,s,o,n,i,d,u,h){if(Su.apply(this,arguments),ks){if(ks){var j=fo;ks=!1,fo=null}else throw Error(l(198));go||(go=!0,on=j)}}function vt(r){var t=r,s=r;if(r.alternate)for(;t.return;)t=t.return;else{r=t;do t=r,(t.flags&4098)!==0&&(s=t.return),r=t.return;while(r)}return t.tag===3?s:null}function El(r){if(r.tag===13){var t=r.memoizedState;if(t===null&&(r=r.alternate,r!==null&&(t=r.memoizedState)),t!==null)return t.dehydrated}return null}function Ml(r){if(vt(r)!==r)throw Error(l(188))}function Cu(r){var t=r.alternate;if(!t){if(t=vt(r),t===null)throw Error(l(188));return t!==r?null:r}for(var s=r,o=t;;){var n=s.return;if(n===null)break;var i=n.alternate;if(i===null){if(o=n.return,o!==null){s=o;continue}break}if(n.child===i.child){for(i=n.child;i;){if(i===s)return Ml(n),r;if(i===o)return Ml(n),t;i=i.sibling}throw Error(l(188))}if(s.return!==o.return)s=n,o=i;else{for(var d=!1,u=n.child;u;){if(u===s){d=!0,s=n,o=i;break}if(u===o){d=!0,o=n,s=i;break}u=u.sibling}if(!d){for(u=i.child;u;){if(u===s){d=!0,s=i,o=n;break}if(u===o){d=!0,o=i,s=n;break}u=u.sibling}if(!d)throw Error(l(189))}}if(s.alternate!==o)throw Error(l(190))}if(s.tag!==3)throw Error(l(188));return s.stateNode.current===s?r:t}function Bl(r){return r=Cu(r),r!==null?Hl(r):null}function Hl(r){if(r.tag===5||r.tag===6)return r;for(r=r.child;r!==null;){var t=Hl(r);if(t!==null)return t;r=r.sibling}return null}var Pl=c.unstable_scheduleCallback,_l=c.unstable_cancelCallback,Lu=c.unstable_shouldYield,zu=c.unstable_requestPaint,ze=c.unstable_now,Iu=c.unstable_getCurrentPriorityLevel,an=c.unstable_ImmediatePriority,Ol=c.unstable_UserBlockingPriority,vo=c.unstable_NormalPriority,Eu=c.unstable_LowPriority,Rl=c.unstable_IdlePriority,yo=null,Hr=null;function Mu(r){if(Hr&&typeof Hr.onCommitFiberRoot=="function")try{Hr.onCommitFiberRoot(yo,r,void 0,(r.current.flags&128)===128)}catch{}}var Tr=Math.clz32?Math.clz32:Pu,Bu=Math.log,Hu=Math.LN2;function Pu(r){return r>>>=0,r===0?32:31-(Bu(r)/Hu|0)|0}var jo=64,bo=4194304;function Ss(r){switch(r&-r){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return r&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return r}}function No(r,t){var s=r.pendingLanes;if(s===0)return 0;var o=0,n=r.suspendedLanes,i=r.pingedLanes,d=s&268435455;if(d!==0){var u=d&~n;u!==0?o=Ss(u):(i&=d,i!==0&&(o=Ss(i)))}else d=s&~n,d!==0?o=Ss(d):i!==0&&(o=Ss(i));if(o===0)return 0;if(t!==0&&t!==o&&(t&n)===0&&(n=o&-o,i=t&-t,n>=i||n===16&&(i&4194240)!==0))return t;if((o&4)!==0&&(o|=s&16),t=r.entangledLanes,t!==0)for(r=r.entanglements,t&=o;0<t;)s=31-Tr(t),n=1<<s,o|=r[s],t&=~n;return o}function _u(r,t){switch(r){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ou(r,t){for(var s=r.suspendedLanes,o=r.pingedLanes,n=r.expirationTimes,i=r.pendingLanes;0<i;){var d=31-Tr(i),u=1<<d,h=n[d];h===-1?((u&s)===0||(u&o)!==0)&&(n[d]=_u(u,t)):h<=t&&(r.expiredLanes|=u),i&=~u}}function nn(r){return r=r.pendingLanes&-1073741825,r!==0?r:r&1073741824?1073741824:0}function Fl(){var r=jo;return jo<<=1,(jo&4194240)===0&&(jo=64),r}function ln(r){for(var t=[],s=0;31>s;s++)t.push(r);return t}function Ts(r,t,s){r.pendingLanes|=t,t!==536870912&&(r.suspendedLanes=0,r.pingedLanes=0),r=r.eventTimes,t=31-Tr(t),r[t]=s}function Ru(r,t){var s=r.pendingLanes&~t;r.pendingLanes=t,r.suspendedLanes=0,r.pingedLanes=0,r.expiredLanes&=t,r.mutableReadLanes&=t,r.entangledLanes&=t,t=r.entanglements;var o=r.eventTimes;for(r=r.expirationTimes;0<s;){var n=31-Tr(s),i=1<<n;t[n]=0,o[n]=-1,r[n]=-1,s&=~i}}function cn(r,t){var s=r.entangledLanes|=t;for(r=r.entanglements;s;){var o=31-Tr(s),n=1<<o;n&t|r[o]&t&&(r[o]|=t),s&=~n}}var ye=0;function Al(r){return r&=-r,1<r?4<r?(r&268435455)!==0?16:536870912:4:1}var Wl,dn,Dl,Ul,$l,pn=!1,wo=[],Xr=null,Zr=null,et=null,Cs=new Map,Ls=new Map,rt=[],Fu="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Vl(r,t){switch(r){case"focusin":case"focusout":Xr=null;break;case"dragenter":case"dragleave":Zr=null;break;case"mouseover":case"mouseout":et=null;break;case"pointerover":case"pointerout":Cs.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ls.delete(t.pointerId)}}function zs(r,t,s,o,n,i){return r===null||r.nativeEvent!==i?(r={blockedOn:t,domEventName:s,eventSystemFlags:o,nativeEvent:i,targetContainers:[n]},t!==null&&(t=Us(t),t!==null&&dn(t)),r):(r.eventSystemFlags|=o,t=r.targetContainers,n!==null&&t.indexOf(n)===-1&&t.push(n),r)}function Au(r,t,s,o,n){switch(t){case"focusin":return Xr=zs(Xr,r,t,s,o,n),!0;case"dragenter":return Zr=zs(Zr,r,t,s,o,n),!0;case"mouseover":return et=zs(et,r,t,s,o,n),!0;case"pointerover":var i=n.pointerId;return Cs.set(i,zs(Cs.get(i)||null,r,t,s,o,n)),!0;case"gotpointercapture":return i=n.pointerId,Ls.set(i,zs(Ls.get(i)||null,r,t,s,o,n)),!0}return!1}function Gl(r){var t=yt(r.target);if(t!==null){var s=vt(t);if(s!==null){if(t=s.tag,t===13){if(t=El(s),t!==null){r.blockedOn=t,$l(r.priority,function(){Dl(s)});return}}else if(t===3&&s.stateNode.current.memoizedState.isDehydrated){r.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}r.blockedOn=null}function ko(r){if(r.blockedOn!==null)return!1;for(var t=r.targetContainers;0<t.length;){var s=hn(r.domEventName,r.eventSystemFlags,t[0],r.nativeEvent);if(s===null){s=r.nativeEvent;var o=new s.constructor(s.type,s);Za=o,s.target.dispatchEvent(o),Za=null}else return t=Us(s),t!==null&&dn(t),r.blockedOn=s,!1;t.shift()}return!0}function Ql(r,t,s){ko(r)&&s.delete(t)}function Wu(){pn=!1,Xr!==null&&ko(Xr)&&(Xr=null),Zr!==null&&ko(Zr)&&(Zr=null),et!==null&&ko(et)&&(et=null),Cs.forEach(Ql),Ls.forEach(Ql)}function Is(r,t){r.blockedOn===t&&(r.blockedOn=null,pn||(pn=!0,c.unstable_scheduleCallback(c.unstable_NormalPriority,Wu)))}function Es(r){function t(n){return Is(n,r)}if(0<wo.length){Is(wo[0],r);for(var s=1;s<wo.length;s++){var o=wo[s];o.blockedOn===r&&(o.blockedOn=null)}}for(Xr!==null&&Is(Xr,r),Zr!==null&&Is(Zr,r),et!==null&&Is(et,r),Cs.forEach(t),Ls.forEach(t),s=0;s<rt.length;s++)o=rt[s],o.blockedOn===r&&(o.blockedOn=null);for(;0<rt.length&&(s=rt[0],s.blockedOn===null);)Gl(s),s.blockedOn===null&&rt.shift()}var Rt=re.ReactCurrentBatchConfig,So=!0;function Du(r,t,s,o){var n=ye,i=Rt.transition;Rt.transition=null;try{ye=1,un(r,t,s,o)}finally{ye=n,Rt.transition=i}}function Uu(r,t,s,o){var n=ye,i=Rt.transition;Rt.transition=null;try{ye=4,un(r,t,s,o)}finally{ye=n,Rt.transition=i}}function un(r,t,s,o){if(So){var n=hn(r,t,s,o);if(n===null)In(r,t,o,To,s),Vl(r,o);else if(Au(n,r,t,s,o))o.stopPropagation();else if(Vl(r,o),t&4&&-1<Fu.indexOf(r)){for(;n!==null;){var i=Us(n);if(i!==null&&Wl(i),i=hn(r,t,s,o),i===null&&In(r,t,o,To,s),i===n)break;n=i}n!==null&&o.stopPropagation()}else In(r,t,o,null,s)}}var To=null;function hn(r,t,s,o){if(To=null,r=en(o),r=yt(r),r!==null)if(t=vt(r),t===null)r=null;else if(s=t.tag,s===13){if(r=El(t),r!==null)return r;r=null}else if(s===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;r=null}else t!==r&&(r=null);return To=r,null}function ql(r){switch(r){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Iu()){case an:return 1;case Ol:return 4;case vo:case Eu:return 16;case Rl:return 536870912;default:return 16}default:return 16}}var tt=null,xn=null,Co=null;function Kl(){if(Co)return Co;var r,t=xn,s=t.length,o,n="value"in tt?tt.value:tt.textContent,i=n.length;for(r=0;r<s&&t[r]===n[r];r++);var d=s-r;for(o=1;o<=d&&t[s-o]===n[i-o];o++);return Co=n.slice(r,1<o?1-o:void 0)}function Lo(r){var t=r.keyCode;return"charCode"in r?(r=r.charCode,r===0&&t===13&&(r=13)):r=t,r===10&&(r=13),32<=r||r===13?r:0}function zo(){return!0}function Yl(){return!1}function dr(r){function t(s,o,n,i,d){this._reactName=s,this._targetInst=n,this.type=o,this.nativeEvent=i,this.target=d,this.currentTarget=null;for(var u in r)r.hasOwnProperty(u)&&(s=r[u],this[u]=s?s(i):i[u]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?zo:Yl,this.isPropagationStopped=Yl,this}return E(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=zo)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=zo)},persist:function(){},isPersistent:zo}),t}var Ft={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(r){return r.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},mn=dr(Ft),Ms=E({},Ft,{view:0,detail:0}),$u=dr(Ms),fn,gn,Bs,Io=E({},Ms,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:yn,button:0,buttons:0,relatedTarget:function(r){return r.relatedTarget===void 0?r.fromElement===r.srcElement?r.toElement:r.fromElement:r.relatedTarget},movementX:function(r){return"movementX"in r?r.movementX:(r!==Bs&&(Bs&&r.type==="mousemove"?(fn=r.screenX-Bs.screenX,gn=r.screenY-Bs.screenY):gn=fn=0,Bs=r),fn)},movementY:function(r){return"movementY"in r?r.movementY:gn}}),Jl=dr(Io),Vu=E({},Io,{dataTransfer:0}),Gu=dr(Vu),Qu=E({},Ms,{relatedTarget:0}),vn=dr(Qu),qu=E({},Ft,{animationName:0,elapsedTime:0,pseudoElement:0}),Ku=dr(qu),Yu=E({},Ft,{clipboardData:function(r){return"clipboardData"in r?r.clipboardData:window.clipboardData}}),Ju=dr(Yu),Xu=E({},Ft,{data:0}),Xl=dr(Xu),Zu={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},eh={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},rh={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function th(r){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(r):(r=rh[r])?!!t[r]:!1}function yn(){return th}var sh=E({},Ms,{key:function(r){if(r.key){var t=Zu[r.key]||r.key;if(t!=="Unidentified")return t}return r.type==="keypress"?(r=Lo(r),r===13?"Enter":String.fromCharCode(r)):r.type==="keydown"||r.type==="keyup"?eh[r.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:yn,charCode:function(r){return r.type==="keypress"?Lo(r):0},keyCode:function(r){return r.type==="keydown"||r.type==="keyup"?r.keyCode:0},which:function(r){return r.type==="keypress"?Lo(r):r.type==="keydown"||r.type==="keyup"?r.keyCode:0}}),oh=dr(sh),ah=E({},Io,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Zl=dr(ah),nh=E({},Ms,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:yn}),ih=dr(nh),lh=E({},Ft,{propertyName:0,elapsedTime:0,pseudoElement:0}),ch=dr(lh),dh=E({},Io,{deltaX:function(r){return"deltaX"in r?r.deltaX:"wheelDeltaX"in r?-r.wheelDeltaX:0},deltaY:function(r){return"deltaY"in r?r.deltaY:"wheelDeltaY"in r?-r.wheelDeltaY:"wheelDelta"in r?-r.wheelDelta:0},deltaZ:0,deltaMode:0}),ph=dr(dh),uh=[9,13,27,32],jn=L&&"CompositionEvent"in window,Hs=null;L&&"documentMode"in document&&(Hs=document.documentMode);var hh=L&&"TextEvent"in window&&!Hs,ec=L&&(!jn||Hs&&8<Hs&&11>=Hs),rc=" ",tc=!1;function sc(r,t){switch(r){case"keyup":return uh.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function oc(r){return r=r.detail,typeof r=="object"&&"data"in r?r.data:null}var At=!1;function xh(r,t){switch(r){case"compositionend":return oc(t);case"keypress":return t.which!==32?null:(tc=!0,rc);case"textInput":return r=t.data,r===rc&&tc?null:r;default:return null}}function mh(r,t){if(At)return r==="compositionend"||!jn&&sc(r,t)?(r=Kl(),Co=xn=tt=null,At=!1,r):null;switch(r){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return ec&&t.locale!=="ko"?null:t.data;default:return null}}var fh={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ac(r){var t=r&&r.nodeName&&r.nodeName.toLowerCase();return t==="input"?!!fh[r.type]:t==="textarea"}function nc(r,t,s,o){Tl(o),t=Po(t,"onChange"),0<t.length&&(s=new mn("onChange","change",null,s,o),r.push({event:s,listeners:t}))}var Ps=null,_s=null;function gh(r){kc(r,0)}function Eo(r){var t=Vt(r);if(Sr(t))return r}function vh(r,t){if(r==="change")return t}var ic=!1;if(L){var bn;if(L){var Nn="oninput"in document;if(!Nn){var lc=document.createElement("div");lc.setAttribute("oninput","return;"),Nn=typeof lc.oninput=="function"}bn=Nn}else bn=!1;ic=bn&&(!document.documentMode||9<document.documentMode)}function cc(){Ps&&(Ps.detachEvent("onpropertychange",dc),_s=Ps=null)}function dc(r){if(r.propertyName==="value"&&Eo(_s)){var t=[];nc(t,_s,r,en(r)),Il(gh,t)}}function yh(r,t,s){r==="focusin"?(cc(),Ps=t,_s=s,Ps.attachEvent("onpropertychange",dc)):r==="focusout"&&cc()}function jh(r){if(r==="selectionchange"||r==="keyup"||r==="keydown")return Eo(_s)}function bh(r,t){if(r==="click")return Eo(t)}function Nh(r,t){if(r==="input"||r==="change")return Eo(t)}function wh(r,t){return r===t&&(r!==0||1/r===1/t)||r!==r&&t!==t}var Cr=typeof Object.is=="function"?Object.is:wh;function Os(r,t){if(Cr(r,t))return!0;if(typeof r!="object"||r===null||typeof t!="object"||t===null)return!1;var s=Object.keys(r),o=Object.keys(t);if(s.length!==o.length)return!1;for(o=0;o<s.length;o++){var n=s[o];if(!T.call(t,n)||!Cr(r[n],t[n]))return!1}return!0}function pc(r){for(;r&&r.firstChild;)r=r.firstChild;return r}function uc(r,t){var s=pc(r);r=0;for(var o;s;){if(s.nodeType===3){if(o=r+s.textContent.length,r<=t&&o>=t)return{node:s,offset:t-r};r=o}e:{for(;s;){if(s.nextSibling){s=s.nextSibling;break e}s=s.parentNode}s=void 0}s=pc(s)}}function hc(r,t){return r&&t?r===t?!0:r&&r.nodeType===3?!1:t&&t.nodeType===3?hc(r,t.parentNode):"contains"in r?r.contains(t):r.compareDocumentPosition?!!(r.compareDocumentPosition(t)&16):!1:!1}function xc(){for(var r=window,t=xo();t instanceof r.HTMLIFrameElement;){try{var s=typeof t.contentWindow.location.href=="string"}catch{s=!1}if(s)r=t.contentWindow;else break;t=xo(r.document)}return t}function wn(r){var t=r&&r.nodeName&&r.nodeName.toLowerCase();return t&&(t==="input"&&(r.type==="text"||r.type==="search"||r.type==="tel"||r.type==="url"||r.type==="password")||t==="textarea"||r.contentEditable==="true")}function kh(r){var t=xc(),s=r.focusedElem,o=r.selectionRange;if(t!==s&&s&&s.ownerDocument&&hc(s.ownerDocument.documentElement,s)){if(o!==null&&wn(s)){if(t=o.start,r=o.end,r===void 0&&(r=t),"selectionStart"in s)s.selectionStart=t,s.selectionEnd=Math.min(r,s.value.length);else if(r=(t=s.ownerDocument||document)&&t.defaultView||window,r.getSelection){r=r.getSelection();var n=s.textContent.length,i=Math.min(o.start,n);o=o.end===void 0?i:Math.min(o.end,n),!r.extend&&i>o&&(n=o,o=i,i=n),n=uc(s,i);var d=uc(s,o);n&&d&&(r.rangeCount!==1||r.anchorNode!==n.node||r.anchorOffset!==n.offset||r.focusNode!==d.node||r.focusOffset!==d.offset)&&(t=t.createRange(),t.setStart(n.node,n.offset),r.removeAllRanges(),i>o?(r.addRange(t),r.extend(d.node,d.offset)):(t.setEnd(d.node,d.offset),r.addRange(t)))}}for(t=[],r=s;r=r.parentNode;)r.nodeType===1&&t.push({element:r,left:r.scrollLeft,top:r.scrollTop});for(typeof s.focus=="function"&&s.focus(),s=0;s<t.length;s++)r=t[s],r.element.scrollLeft=r.left,r.element.scrollTop=r.top}}var Sh=L&&"documentMode"in document&&11>=document.documentMode,Wt=null,kn=null,Rs=null,Sn=!1;function mc(r,t,s){var o=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;Sn||Wt==null||Wt!==xo(o)||(o=Wt,"selectionStart"in o&&wn(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),Rs&&Os(Rs,o)||(Rs=o,o=Po(kn,"onSelect"),0<o.length&&(t=new mn("onSelect","select",null,t,s),r.push({event:t,listeners:o}),t.target=Wt)))}function Mo(r,t){var s={};return s[r.toLowerCase()]=t.toLowerCase(),s["Webkit"+r]="webkit"+t,s["Moz"+r]="moz"+t,s}var Dt={animationend:Mo("Animation","AnimationEnd"),animationiteration:Mo("Animation","AnimationIteration"),animationstart:Mo("Animation","AnimationStart"),transitionend:Mo("Transition","TransitionEnd")},Tn={},fc={};L&&(fc=document.createElement("div").style,"AnimationEvent"in window||(delete Dt.animationend.animation,delete Dt.animationiteration.animation,delete Dt.animationstart.animation),"TransitionEvent"in window||delete Dt.transitionend.transition);function Bo(r){if(Tn[r])return Tn[r];if(!Dt[r])return r;var t=Dt[r],s;for(s in t)if(t.hasOwnProperty(s)&&s in fc)return Tn[r]=t[s];return r}var gc=Bo("animationend"),vc=Bo("animationiteration"),yc=Bo("animationstart"),jc=Bo("transitionend"),bc=new Map,Nc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function st(r,t){bc.set(r,t),f(t,[r])}for(var Cn=0;Cn<Nc.length;Cn++){var Ln=Nc[Cn],Th=Ln.toLowerCase(),Ch=Ln[0].toUpperCase()+Ln.slice(1);st(Th,"on"+Ch)}st(gc,"onAnimationEnd"),st(vc,"onAnimationIteration"),st(yc,"onAnimationStart"),st("dblclick","onDoubleClick"),st("focusin","onFocus"),st("focusout","onBlur"),st(jc,"onTransitionEnd"),b("onMouseEnter",["mouseout","mouseover"]),b("onMouseLeave",["mouseout","mouseover"]),b("onPointerEnter",["pointerout","pointerover"]),b("onPointerLeave",["pointerout","pointerover"]),f("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),f("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),f("onBeforeInput",["compositionend","keypress","textInput","paste"]),f("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),f("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),f("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Fs="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Lh=new Set("cancel close invalid load scroll toggle".split(" ").concat(Fs));function wc(r,t,s){var o=r.type||"unknown-event";r.currentTarget=s,Tu(o,t,void 0,r),r.currentTarget=null}function kc(r,t){t=(t&4)!==0;for(var s=0;s<r.length;s++){var o=r[s],n=o.event;o=o.listeners;e:{var i=void 0;if(t)for(var d=o.length-1;0<=d;d--){var u=o[d],h=u.instance,j=u.currentTarget;if(u=u.listener,h!==i&&n.isPropagationStopped())break e;wc(n,u,j),i=h}else for(d=0;d<o.length;d++){if(u=o[d],h=u.instance,j=u.currentTarget,u=u.listener,h!==i&&n.isPropagationStopped())break e;wc(n,u,j),i=h}}}if(go)throw r=on,go=!1,on=null,r}function Ne(r,t){var s=t[_n];s===void 0&&(s=t[_n]=new Set);var o=r+"__bubble";s.has(o)||(Sc(t,r,2,!1),s.add(o))}function zn(r,t,s){var o=0;t&&(o|=4),Sc(s,r,o,t)}var Ho="_reactListening"+Math.random().toString(36).slice(2);function As(r){if(!r[Ho]){r[Ho]=!0,p.forEach(function(s){s!=="selectionchange"&&(Lh.has(s)||zn(s,!1,r),zn(s,!0,r))});var t=r.nodeType===9?r:r.ownerDocument;t===null||t[Ho]||(t[Ho]=!0,zn("selectionchange",!1,t))}}function Sc(r,t,s,o){switch(ql(t)){case 1:var n=Du;break;case 4:n=Uu;break;default:n=un}s=n.bind(null,t,s,r),n=void 0,!sn||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(n=!0),o?n!==void 0?r.addEventListener(t,s,{capture:!0,passive:n}):r.addEventListener(t,s,!0):n!==void 0?r.addEventListener(t,s,{passive:n}):r.addEventListener(t,s,!1)}function In(r,t,s,o,n){var i=o;if((t&1)===0&&(t&2)===0&&o!==null)e:for(;;){if(o===null)return;var d=o.tag;if(d===3||d===4){var u=o.stateNode.containerInfo;if(u===n||u.nodeType===8&&u.parentNode===n)break;if(d===4)for(d=o.return;d!==null;){var h=d.tag;if((h===3||h===4)&&(h=d.stateNode.containerInfo,h===n||h.nodeType===8&&h.parentNode===n))return;d=d.return}for(;u!==null;){if(d=yt(u),d===null)return;if(h=d.tag,h===5||h===6){o=i=d;continue e}u=u.parentNode}}o=o.return}Il(function(){var j=i,k=en(s),S=[];e:{var w=bc.get(r);if(w!==void 0){var M=mn,_=r;switch(r){case"keypress":if(Lo(s)===0)break e;case"keydown":case"keyup":M=oh;break;case"focusin":_="focus",M=vn;break;case"focusout":_="blur",M=vn;break;case"beforeblur":case"afterblur":M=vn;break;case"click":if(s.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":M=Jl;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":M=Gu;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":M=ih;break;case gc:case vc:case yc:M=Ku;break;case jc:M=ch;break;case"scroll":M=$u;break;case"wheel":M=ph;break;case"copy":case"cut":case"paste":M=Ju;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":M=Zl}var R=(t&4)!==0,Ie=!R&&r==="scroll",v=R?w!==null?w+"Capture":null:w;R=[];for(var x=j,y;x!==null;){y=x;var C=y.stateNode;if(y.tag===5&&C!==null&&(y=C,v!==null&&(C=Ns(x,v),C!=null&&R.push(Ws(x,C,y)))),Ie)break;x=x.return}0<R.length&&(w=new M(w,_,null,s,k),S.push({event:w,listeners:R}))}}if((t&7)===0){e:{if(w=r==="mouseover"||r==="pointerover",M=r==="mouseout"||r==="pointerout",w&&s!==Za&&(_=s.relatedTarget||s.fromElement)&&(yt(_)||_[Ur]))break e;if((M||w)&&(w=k.window===k?k:(w=k.ownerDocument)?w.defaultView||w.parentWindow:window,M?(_=s.relatedTarget||s.toElement,M=j,_=_?yt(_):null,_!==null&&(Ie=vt(_),_!==Ie||_.tag!==5&&_.tag!==6)&&(_=null)):(M=null,_=j),M!==_)){if(R=Jl,C="onMouseLeave",v="onMouseEnter",x="mouse",(r==="pointerout"||r==="pointerover")&&(R=Zl,C="onPointerLeave",v="onPointerEnter",x="pointer"),Ie=M==null?w:Vt(M),y=_==null?w:Vt(_),w=new R(C,x+"leave",M,s,k),w.target=Ie,w.relatedTarget=y,C=null,yt(k)===j&&(R=new R(v,x+"enter",_,s,k),R.target=y,R.relatedTarget=Ie,C=R),Ie=C,M&&_)r:{for(R=M,v=_,x=0,y=R;y;y=Ut(y))x++;for(y=0,C=v;C;C=Ut(C))y++;for(;0<x-y;)R=Ut(R),x--;for(;0<y-x;)v=Ut(v),y--;for(;x--;){if(R===v||v!==null&&R===v.alternate)break r;R=Ut(R),v=Ut(v)}R=null}else R=null;M!==null&&Tc(S,w,M,R,!1),_!==null&&Ie!==null&&Tc(S,Ie,_,R,!0)}}e:{if(w=j?Vt(j):window,M=w.nodeName&&w.nodeName.toLowerCase(),M==="select"||M==="input"&&w.type==="file")var A=vh;else if(ac(w))if(ic)A=Nh;else{A=jh;var V=yh}else(M=w.nodeName)&&M.toLowerCase()==="input"&&(w.type==="checkbox"||w.type==="radio")&&(A=bh);if(A&&(A=A(r,j))){nc(S,A,s,k);break e}V&&V(r,w,j),r==="focusout"&&(V=w._wrapperState)&&V.controlled&&w.type==="number"&&qa(w,"number",w.value)}switch(V=j?Vt(j):window,r){case"focusin":(ac(V)||V.contentEditable==="true")&&(Wt=V,kn=j,Rs=null);break;case"focusout":Rs=kn=Wt=null;break;case"mousedown":Sn=!0;break;case"contextmenu":case"mouseup":case"dragend":Sn=!1,mc(S,s,k);break;case"selectionchange":if(Sh)break;case"keydown":case"keyup":mc(S,s,k)}var G;if(jn)e:{switch(r){case"compositionstart":var Y="onCompositionStart";break e;case"compositionend":Y="onCompositionEnd";break e;case"compositionupdate":Y="onCompositionUpdate";break e}Y=void 0}else At?sc(r,s)&&(Y="onCompositionEnd"):r==="keydown"&&s.keyCode===229&&(Y="onCompositionStart");Y&&(ec&&s.locale!=="ko"&&(At||Y!=="onCompositionStart"?Y==="onCompositionEnd"&&At&&(G=Kl()):(tt=k,xn="value"in tt?tt.value:tt.textContent,At=!0)),V=Po(j,Y),0<V.length&&(Y=new Xl(Y,r,null,s,k),S.push({event:Y,listeners:V}),G?Y.data=G:(G=oc(s),G!==null&&(Y.data=G)))),(G=hh?xh(r,s):mh(r,s))&&(j=Po(j,"onBeforeInput"),0<j.length&&(k=new Xl("onBeforeInput","beforeinput",null,s,k),S.push({event:k,listeners:j}),k.data=G))}kc(S,t)})}function Ws(r,t,s){return{instance:r,listener:t,currentTarget:s}}function Po(r,t){for(var s=t+"Capture",o=[];r!==null;){var n=r,i=n.stateNode;n.tag===5&&i!==null&&(n=i,i=Ns(r,s),i!=null&&o.unshift(Ws(r,i,n)),i=Ns(r,t),i!=null&&o.push(Ws(r,i,n))),r=r.return}return o}function Ut(r){if(r===null)return null;do r=r.return;while(r&&r.tag!==5);return r||null}function Tc(r,t,s,o,n){for(var i=t._reactName,d=[];s!==null&&s!==o;){var u=s,h=u.alternate,j=u.stateNode;if(h!==null&&h===o)break;u.tag===5&&j!==null&&(u=j,n?(h=Ns(s,i),h!=null&&d.unshift(Ws(s,h,u))):n||(h=Ns(s,i),h!=null&&d.push(Ws(s,h,u)))),s=s.return}d.length!==0&&r.push({event:t,listeners:d})}var zh=/\r\n?/g,Ih=/\u0000|\uFFFD/g;function Cc(r){return(typeof r=="string"?r:""+r).replace(zh,`
`).replace(Ih,"")}function _o(r,t,s){if(t=Cc(t),Cc(r)!==t&&s)throw Error(l(425))}function Oo(){}var En=null,Mn=null;function Bn(r,t){return r==="textarea"||r==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Hn=typeof setTimeout=="function"?setTimeout:void 0,Eh=typeof clearTimeout=="function"?clearTimeout:void 0,Lc=typeof Promise=="function"?Promise:void 0,Mh=typeof queueMicrotask=="function"?queueMicrotask:typeof Lc!="undefined"?function(r){return Lc.resolve(null).then(r).catch(Bh)}:Hn;function Bh(r){setTimeout(function(){throw r})}function Pn(r,t){var s=t,o=0;do{var n=s.nextSibling;if(r.removeChild(s),n&&n.nodeType===8)if(s=n.data,s==="/$"){if(o===0){r.removeChild(n),Es(t);return}o--}else s!=="$"&&s!=="$?"&&s!=="$!"||o++;s=n}while(s);Es(t)}function ot(r){for(;r!=null;r=r.nextSibling){var t=r.nodeType;if(t===1||t===3)break;if(t===8){if(t=r.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return r}function zc(r){r=r.previousSibling;for(var t=0;r;){if(r.nodeType===8){var s=r.data;if(s==="$"||s==="$!"||s==="$?"){if(t===0)return r;t--}else s==="/$"&&t++}r=r.previousSibling}return null}var $t=Math.random().toString(36).slice(2),Pr="__reactFiber$"+$t,Ds="__reactProps$"+$t,Ur="__reactContainer$"+$t,_n="__reactEvents$"+$t,Hh="__reactListeners$"+$t,Ph="__reactHandles$"+$t;function yt(r){var t=r[Pr];if(t)return t;for(var s=r.parentNode;s;){if(t=s[Ur]||s[Pr]){if(s=t.alternate,t.child!==null||s!==null&&s.child!==null)for(r=zc(r);r!==null;){if(s=r[Pr])return s;r=zc(r)}return t}r=s,s=r.parentNode}return null}function Us(r){return r=r[Pr]||r[Ur],!r||r.tag!==5&&r.tag!==6&&r.tag!==13&&r.tag!==3?null:r}function Vt(r){if(r.tag===5||r.tag===6)return r.stateNode;throw Error(l(33))}function Ro(r){return r[Ds]||null}var On=[],Gt=-1;function at(r){return{current:r}}function we(r){0>Gt||(r.current=On[Gt],On[Gt]=null,Gt--)}function be(r,t){Gt++,On[Gt]=r.current,r.current=t}var nt={},Ge=at(nt),rr=at(!1),jt=nt;function Qt(r,t){var s=r.type.contextTypes;if(!s)return nt;var o=r.stateNode;if(o&&o.__reactInternalMemoizedUnmaskedChildContext===t)return o.__reactInternalMemoizedMaskedChildContext;var n={},i;for(i in s)n[i]=t[i];return o&&(r=r.stateNode,r.__reactInternalMemoizedUnmaskedChildContext=t,r.__reactInternalMemoizedMaskedChildContext=n),n}function tr(r){return r=r.childContextTypes,r!=null}function Fo(){we(rr),we(Ge)}function Ic(r,t,s){if(Ge.current!==nt)throw Error(l(168));be(Ge,t),be(rr,s)}function Ec(r,t,s){var o=r.stateNode;if(t=t.childContextTypes,typeof o.getChildContext!="function")return s;o=o.getChildContext();for(var n in o)if(!(n in t))throw Error(l(108,ge(r)||"Unknown",n));return E({},s,o)}function Ao(r){return r=(r=r.stateNode)&&r.__reactInternalMemoizedMergedChildContext||nt,jt=Ge.current,be(Ge,r),be(rr,rr.current),!0}function Mc(r,t,s){var o=r.stateNode;if(!o)throw Error(l(169));s?(r=Ec(r,t,jt),o.__reactInternalMemoizedMergedChildContext=r,we(rr),we(Ge),be(Ge,r)):we(rr),be(rr,s)}var $r=null,Wo=!1,Rn=!1;function Bc(r){$r===null?$r=[r]:$r.push(r)}function _h(r){Wo=!0,Bc(r)}function it(){if(!Rn&&$r!==null){Rn=!0;var r=0,t=ye;try{var s=$r;for(ye=1;r<s.length;r++){var o=s[r];do o=o(!0);while(o!==null)}$r=null,Wo=!1}catch(n){throw $r!==null&&($r=$r.slice(r+1)),Pl(an,it),n}finally{ye=t,Rn=!1}}return null}var qt=[],Kt=0,Do=null,Uo=0,gr=[],vr=0,bt=null,Vr=1,Gr="";function Nt(r,t){qt[Kt++]=Uo,qt[Kt++]=Do,Do=r,Uo=t}function Hc(r,t,s){gr[vr++]=Vr,gr[vr++]=Gr,gr[vr++]=bt,bt=r;var o=Vr;r=Gr;var n=32-Tr(o)-1;o&=~(1<<n),s+=1;var i=32-Tr(t)+n;if(30<i){var d=n-n%5;i=(o&(1<<d)-1).toString(32),o>>=d,n-=d,Vr=1<<32-Tr(t)+n|s<<n|o,Gr=i+r}else Vr=1<<i|s<<n|o,Gr=r}function Fn(r){r.return!==null&&(Nt(r,1),Hc(r,1,0))}function An(r){for(;r===Do;)Do=qt[--Kt],qt[Kt]=null,Uo=qt[--Kt],qt[Kt]=null;for(;r===bt;)bt=gr[--vr],gr[vr]=null,Gr=gr[--vr],gr[vr]=null,Vr=gr[--vr],gr[vr]=null}var pr=null,ur=null,Se=!1,Lr=null;function Pc(r,t){var s=Nr(5,null,null,0);s.elementType="DELETED",s.stateNode=t,s.return=r,t=r.deletions,t===null?(r.deletions=[s],r.flags|=16):t.push(s)}function _c(r,t){switch(r.tag){case 5:var s=r.type;return t=t.nodeType!==1||s.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(r.stateNode=t,pr=r,ur=ot(t.firstChild),!0):!1;case 6:return t=r.pendingProps===""||t.nodeType!==3?null:t,t!==null?(r.stateNode=t,pr=r,ur=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(s=bt!==null?{id:Vr,overflow:Gr}:null,r.memoizedState={dehydrated:t,treeContext:s,retryLane:1073741824},s=Nr(18,null,null,0),s.stateNode=t,s.return=r,r.child=s,pr=r,ur=null,!0):!1;default:return!1}}function Wn(r){return(r.mode&1)!==0&&(r.flags&128)===0}function Dn(r){if(Se){var t=ur;if(t){var s=t;if(!_c(r,t)){if(Wn(r))throw Error(l(418));t=ot(s.nextSibling);var o=pr;t&&_c(r,t)?Pc(o,s):(r.flags=r.flags&-4097|2,Se=!1,pr=r)}}else{if(Wn(r))throw Error(l(418));r.flags=r.flags&-4097|2,Se=!1,pr=r}}}function Oc(r){for(r=r.return;r!==null&&r.tag!==5&&r.tag!==3&&r.tag!==13;)r=r.return;pr=r}function $o(r){if(r!==pr)return!1;if(!Se)return Oc(r),Se=!0,!1;var t;if((t=r.tag!==3)&&!(t=r.tag!==5)&&(t=r.type,t=t!=="head"&&t!=="body"&&!Bn(r.type,r.memoizedProps)),t&&(t=ur)){if(Wn(r))throw Rc(),Error(l(418));for(;t;)Pc(r,t),t=ot(t.nextSibling)}if(Oc(r),r.tag===13){if(r=r.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(l(317));e:{for(r=r.nextSibling,t=0;r;){if(r.nodeType===8){var s=r.data;if(s==="/$"){if(t===0){ur=ot(r.nextSibling);break e}t--}else s!=="$"&&s!=="$!"&&s!=="$?"||t++}r=r.nextSibling}ur=null}}else ur=pr?ot(r.stateNode.nextSibling):null;return!0}function Rc(){for(var r=ur;r;)r=ot(r.nextSibling)}function Yt(){ur=pr=null,Se=!1}function Un(r){Lr===null?Lr=[r]:Lr.push(r)}var Oh=re.ReactCurrentBatchConfig;function $s(r,t,s){if(r=s.ref,r!==null&&typeof r!="function"&&typeof r!="object"){if(s._owner){if(s=s._owner,s){if(s.tag!==1)throw Error(l(309));var o=s.stateNode}if(!o)throw Error(l(147,r));var n=o,i=""+r;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(d){var u=n.refs;d===null?delete u[i]:u[i]=d},t._stringRef=i,t)}if(typeof r!="string")throw Error(l(284));if(!s._owner)throw Error(l(290,r))}return r}function Vo(r,t){throw r=Object.prototype.toString.call(t),Error(l(31,r==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":r))}function Fc(r){var t=r._init;return t(r._payload)}function Ac(r){function t(v,x){if(r){var y=v.deletions;y===null?(v.deletions=[x],v.flags|=16):y.push(x)}}function s(v,x){if(!r)return null;for(;x!==null;)t(v,x),x=x.sibling;return null}function o(v,x){for(v=new Map;x!==null;)x.key!==null?v.set(x.key,x):v.set(x.index,x),x=x.sibling;return v}function n(v,x){return v=mt(v,x),v.index=0,v.sibling=null,v}function i(v,x,y){return v.index=y,r?(y=v.alternate,y!==null?(y=y.index,y<x?(v.flags|=2,x):y):(v.flags|=2,x)):(v.flags|=1048576,x)}function d(v){return r&&v.alternate===null&&(v.flags|=2),v}function u(v,x,y,C){return x===null||x.tag!==6?(x=Hi(y,v.mode,C),x.return=v,x):(x=n(x,y),x.return=v,x)}function h(v,x,y,C){var A=y.type;return A===q?k(v,x,y.props.children,C,y.key):x!==null&&(x.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===Ve&&Fc(A)===x.type)?(C=n(x,y.props),C.ref=$s(v,x,y),C.return=v,C):(C=ma(y.type,y.key,y.props,null,v.mode,C),C.ref=$s(v,x,y),C.return=v,C)}function j(v,x,y,C){return x===null||x.tag!==4||x.stateNode.containerInfo!==y.containerInfo||x.stateNode.implementation!==y.implementation?(x=Pi(y,v.mode,C),x.return=v,x):(x=n(x,y.children||[]),x.return=v,x)}function k(v,x,y,C,A){return x===null||x.tag!==7?(x=It(y,v.mode,C,A),x.return=v,x):(x=n(x,y),x.return=v,x)}function S(v,x,y){if(typeof x=="string"&&x!==""||typeof x=="number")return x=Hi(""+x,v.mode,y),x.return=v,x;if(typeof x=="object"&&x!==null){switch(x.$$typeof){case fe:return y=ma(x.type,x.key,x.props,null,v.mode,y),y.ref=$s(v,null,x),y.return=v,y;case X:return x=Pi(x,v.mode,y),x.return=v,x;case Ve:var C=x._init;return S(v,C(x._payload),y)}if(ys(x)||D(x))return x=It(x,v.mode,y,null),x.return=v,x;Vo(v,x)}return null}function w(v,x,y,C){var A=x!==null?x.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return A!==null?null:u(v,x,""+y,C);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case fe:return y.key===A?h(v,x,y,C):null;case X:return y.key===A?j(v,x,y,C):null;case Ve:return A=y._init,w(v,x,A(y._payload),C)}if(ys(y)||D(y))return A!==null?null:k(v,x,y,C,null);Vo(v,y)}return null}function M(v,x,y,C,A){if(typeof C=="string"&&C!==""||typeof C=="number")return v=v.get(y)||null,u(x,v,""+C,A);if(typeof C=="object"&&C!==null){switch(C.$$typeof){case fe:return v=v.get(C.key===null?y:C.key)||null,h(x,v,C,A);case X:return v=v.get(C.key===null?y:C.key)||null,j(x,v,C,A);case Ve:var V=C._init;return M(v,x,y,V(C._payload),A)}if(ys(C)||D(C))return v=v.get(y)||null,k(x,v,C,A,null);Vo(x,C)}return null}function _(v,x,y,C){for(var A=null,V=null,G=x,Y=x=0,Ae=null;G!==null&&Y<y.length;Y++){G.index>Y?(Ae=G,G=null):Ae=G.sibling;var me=w(v,G,y[Y],C);if(me===null){G===null&&(G=Ae);break}r&&G&&me.alternate===null&&t(v,G),x=i(me,x,Y),V===null?A=me:V.sibling=me,V=me,G=Ae}if(Y===y.length)return s(v,G),Se&&Nt(v,Y),A;if(G===null){for(;Y<y.length;Y++)G=S(v,y[Y],C),G!==null&&(x=i(G,x,Y),V===null?A=G:V.sibling=G,V=G);return Se&&Nt(v,Y),A}for(G=o(v,G);Y<y.length;Y++)Ae=M(G,v,Y,y[Y],C),Ae!==null&&(r&&Ae.alternate!==null&&G.delete(Ae.key===null?Y:Ae.key),x=i(Ae,x,Y),V===null?A=Ae:V.sibling=Ae,V=Ae);return r&&G.forEach(function(ft){return t(v,ft)}),Se&&Nt(v,Y),A}function R(v,x,y,C){var A=D(y);if(typeof A!="function")throw Error(l(150));if(y=A.call(y),y==null)throw Error(l(151));for(var V=A=null,G=x,Y=x=0,Ae=null,me=y.next();G!==null&&!me.done;Y++,me=y.next()){G.index>Y?(Ae=G,G=null):Ae=G.sibling;var ft=w(v,G,me.value,C);if(ft===null){G===null&&(G=Ae);break}r&&G&&ft.alternate===null&&t(v,G),x=i(ft,x,Y),V===null?A=ft:V.sibling=ft,V=ft,G=Ae}if(me.done)return s(v,G),Se&&Nt(v,Y),A;if(G===null){for(;!me.done;Y++,me=y.next())me=S(v,me.value,C),me!==null&&(x=i(me,x,Y),V===null?A=me:V.sibling=me,V=me);return Se&&Nt(v,Y),A}for(G=o(v,G);!me.done;Y++,me=y.next())me=M(G,v,Y,me.value,C),me!==null&&(r&&me.alternate!==null&&G.delete(me.key===null?Y:me.key),x=i(me,x,Y),V===null?A=me:V.sibling=me,V=me);return r&&G.forEach(function(fx){return t(v,fx)}),Se&&Nt(v,Y),A}function Ie(v,x,y,C){if(typeof y=="object"&&y!==null&&y.type===q&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case fe:e:{for(var A=y.key,V=x;V!==null;){if(V.key===A){if(A=y.type,A===q){if(V.tag===7){s(v,V.sibling),x=n(V,y.props.children),x.return=v,v=x;break e}}else if(V.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===Ve&&Fc(A)===V.type){s(v,V.sibling),x=n(V,y.props),x.ref=$s(v,V,y),x.return=v,v=x;break e}s(v,V);break}else t(v,V);V=V.sibling}y.type===q?(x=It(y.props.children,v.mode,C,y.key),x.return=v,v=x):(C=ma(y.type,y.key,y.props,null,v.mode,C),C.ref=$s(v,x,y),C.return=v,v=C)}return d(v);case X:e:{for(V=y.key;x!==null;){if(x.key===V)if(x.tag===4&&x.stateNode.containerInfo===y.containerInfo&&x.stateNode.implementation===y.implementation){s(v,x.sibling),x=n(x,y.children||[]),x.return=v,v=x;break e}else{s(v,x);break}else t(v,x);x=x.sibling}x=Pi(y,v.mode,C),x.return=v,v=x}return d(v);case Ve:return V=y._init,Ie(v,x,V(y._payload),C)}if(ys(y))return _(v,x,y,C);if(D(y))return R(v,x,y,C);Vo(v,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,x!==null&&x.tag===6?(s(v,x.sibling),x=n(x,y),x.return=v,v=x):(s(v,x),x=Hi(y,v.mode,C),x.return=v,v=x),d(v)):s(v,x)}return Ie}var Jt=Ac(!0),Wc=Ac(!1),Go=at(null),Qo=null,Xt=null,$n=null;function Vn(){$n=Xt=Qo=null}function Gn(r){var t=Go.current;we(Go),r._currentValue=t}function Qn(r,t,s){for(;r!==null;){var o=r.alternate;if((r.childLanes&t)!==t?(r.childLanes|=t,o!==null&&(o.childLanes|=t)):o!==null&&(o.childLanes&t)!==t&&(o.childLanes|=t),r===s)break;r=r.return}}function Zt(r,t){Qo=r,$n=Xt=null,r=r.dependencies,r!==null&&r.firstContext!==null&&((r.lanes&t)!==0&&(sr=!0),r.firstContext=null)}function yr(r){var t=r._currentValue;if($n!==r)if(r={context:r,memoizedValue:t,next:null},Xt===null){if(Qo===null)throw Error(l(308));Xt=r,Qo.dependencies={lanes:0,firstContext:r}}else Xt=Xt.next=r;return t}var wt=null;function qn(r){wt===null?wt=[r]:wt.push(r)}function Dc(r,t,s,o){var n=t.interleaved;return n===null?(s.next=s,qn(t)):(s.next=n.next,n.next=s),t.interleaved=s,Qr(r,o)}function Qr(r,t){r.lanes|=t;var s=r.alternate;for(s!==null&&(s.lanes|=t),s=r,r=r.return;r!==null;)r.childLanes|=t,s=r.alternate,s!==null&&(s.childLanes|=t),s=r,r=r.return;return s.tag===3?s.stateNode:null}var lt=!1;function Kn(r){r.updateQueue={baseState:r.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Uc(r,t){r=r.updateQueue,t.updateQueue===r&&(t.updateQueue={baseState:r.baseState,firstBaseUpdate:r.firstBaseUpdate,lastBaseUpdate:r.lastBaseUpdate,shared:r.shared,effects:r.effects})}function qr(r,t){return{eventTime:r,lane:t,tag:0,payload:null,callback:null,next:null}}function ct(r,t,s){var o=r.updateQueue;if(o===null)return null;if(o=o.shared,(he&2)!==0){var n=o.pending;return n===null?t.next=t:(t.next=n.next,n.next=t),o.pending=t,Qr(r,s)}return n=o.interleaved,n===null?(t.next=t,qn(o)):(t.next=n.next,n.next=t),o.interleaved=t,Qr(r,s)}function qo(r,t,s){if(t=t.updateQueue,t!==null&&(t=t.shared,(s&4194240)!==0)){var o=t.lanes;o&=r.pendingLanes,s|=o,t.lanes=s,cn(r,s)}}function $c(r,t){var s=r.updateQueue,o=r.alternate;if(o!==null&&(o=o.updateQueue,s===o)){var n=null,i=null;if(s=s.firstBaseUpdate,s!==null){do{var d={eventTime:s.eventTime,lane:s.lane,tag:s.tag,payload:s.payload,callback:s.callback,next:null};i===null?n=i=d:i=i.next=d,s=s.next}while(s!==null);i===null?n=i=t:i=i.next=t}else n=i=t;s={baseState:o.baseState,firstBaseUpdate:n,lastBaseUpdate:i,shared:o.shared,effects:o.effects},r.updateQueue=s;return}r=s.lastBaseUpdate,r===null?s.firstBaseUpdate=t:r.next=t,s.lastBaseUpdate=t}function Ko(r,t,s,o){var n=r.updateQueue;lt=!1;var i=n.firstBaseUpdate,d=n.lastBaseUpdate,u=n.shared.pending;if(u!==null){n.shared.pending=null;var h=u,j=h.next;h.next=null,d===null?i=j:d.next=j,d=h;var k=r.alternate;k!==null&&(k=k.updateQueue,u=k.lastBaseUpdate,u!==d&&(u===null?k.firstBaseUpdate=j:u.next=j,k.lastBaseUpdate=h))}if(i!==null){var S=n.baseState;d=0,k=j=h=null,u=i;do{var w=u.lane,M=u.eventTime;if((o&w)===w){k!==null&&(k=k.next={eventTime:M,lane:0,tag:u.tag,payload:u.payload,callback:u.callback,next:null});e:{var _=r,R=u;switch(w=t,M=s,R.tag){case 1:if(_=R.payload,typeof _=="function"){S=_.call(M,S,w);break e}S=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=R.payload,w=typeof _=="function"?_.call(M,S,w):_,w==null)break e;S=E({},S,w);break e;case 2:lt=!0}}u.callback!==null&&u.lane!==0&&(r.flags|=64,w=n.effects,w===null?n.effects=[u]:w.push(u))}else M={eventTime:M,lane:w,tag:u.tag,payload:u.payload,callback:u.callback,next:null},k===null?(j=k=M,h=S):k=k.next=M,d|=w;if(u=u.next,u===null){if(u=n.shared.pending,u===null)break;w=u,u=w.next,w.next=null,n.lastBaseUpdate=w,n.shared.pending=null}}while(!0);if(k===null&&(h=S),n.baseState=h,n.firstBaseUpdate=j,n.lastBaseUpdate=k,t=n.shared.interleaved,t!==null){n=t;do d|=n.lane,n=n.next;while(n!==t)}else i===null&&(n.shared.lanes=0);Tt|=d,r.lanes=d,r.memoizedState=S}}function Vc(r,t,s){if(r=t.effects,t.effects=null,r!==null)for(t=0;t<r.length;t++){var o=r[t],n=o.callback;if(n!==null){if(o.callback=null,o=s,typeof n!="function")throw Error(l(191,n));n.call(o)}}}var Vs={},_r=at(Vs),Gs=at(Vs),Qs=at(Vs);function kt(r){if(r===Vs)throw Error(l(174));return r}function Yn(r,t){switch(be(Qs,t),be(Gs,r),be(_r,Vs),r=t.nodeType,r){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Ya(null,"");break;default:r=r===8?t.parentNode:t,t=r.namespaceURI||null,r=r.tagName,t=Ya(t,r)}we(_r),be(_r,t)}function es(){we(_r),we(Gs),we(Qs)}function Gc(r){kt(Qs.current);var t=kt(_r.current),s=Ya(t,r.type);t!==s&&(be(Gs,r),be(_r,s))}function Jn(r){Gs.current===r&&(we(_r),we(Gs))}var Te=at(0);function Yo(r){for(var t=r;t!==null;){if(t.tag===13){var s=t.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||s.data==="$?"||s.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===r)break;for(;t.sibling===null;){if(t.return===null||t.return===r)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Xn=[];function Zn(){for(var r=0;r<Xn.length;r++)Xn[r]._workInProgressVersionPrimary=null;Xn.length=0}var Jo=re.ReactCurrentDispatcher,ei=re.ReactCurrentBatchConfig,St=0,Ce=null,_e=null,Re=null,Xo=!1,qs=!1,Ks=0,Rh=0;function Qe(){throw Error(l(321))}function ri(r,t){if(t===null)return!1;for(var s=0;s<t.length&&s<r.length;s++)if(!Cr(r[s],t[s]))return!1;return!0}function ti(r,t,s,o,n,i){if(St=i,Ce=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Jo.current=r===null||r.memoizedState===null?Dh:Uh,r=s(o,n),qs){i=0;do{if(qs=!1,Ks=0,25<=i)throw Error(l(301));i+=1,Re=_e=null,t.updateQueue=null,Jo.current=$h,r=s(o,n)}while(qs)}if(Jo.current=ra,t=_e!==null&&_e.next!==null,St=0,Re=_e=Ce=null,Xo=!1,t)throw Error(l(300));return r}function si(){var r=Ks!==0;return Ks=0,r}function Or(){var r={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Re===null?Ce.memoizedState=Re=r:Re=Re.next=r,Re}function jr(){if(_e===null){var r=Ce.alternate;r=r!==null?r.memoizedState:null}else r=_e.next;var t=Re===null?Ce.memoizedState:Re.next;if(t!==null)Re=t,_e=r;else{if(r===null)throw Error(l(310));_e=r,r={memoizedState:_e.memoizedState,baseState:_e.baseState,baseQueue:_e.baseQueue,queue:_e.queue,next:null},Re===null?Ce.memoizedState=Re=r:Re=Re.next=r}return Re}function Ys(r,t){return typeof t=="function"?t(r):t}function oi(r){var t=jr(),s=t.queue;if(s===null)throw Error(l(311));s.lastRenderedReducer=r;var o=_e,n=o.baseQueue,i=s.pending;if(i!==null){if(n!==null){var d=n.next;n.next=i.next,i.next=d}o.baseQueue=n=i,s.pending=null}if(n!==null){i=n.next,o=o.baseState;var u=d=null,h=null,j=i;do{var k=j.lane;if((St&k)===k)h!==null&&(h=h.next={lane:0,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null}),o=j.hasEagerState?j.eagerState:r(o,j.action);else{var S={lane:k,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null};h===null?(u=h=S,d=o):h=h.next=S,Ce.lanes|=k,Tt|=k}j=j.next}while(j!==null&&j!==i);h===null?d=o:h.next=u,Cr(o,t.memoizedState)||(sr=!0),t.memoizedState=o,t.baseState=d,t.baseQueue=h,s.lastRenderedState=o}if(r=s.interleaved,r!==null){n=r;do i=n.lane,Ce.lanes|=i,Tt|=i,n=n.next;while(n!==r)}else n===null&&(s.lanes=0);return[t.memoizedState,s.dispatch]}function ai(r){var t=jr(),s=t.queue;if(s===null)throw Error(l(311));s.lastRenderedReducer=r;var o=s.dispatch,n=s.pending,i=t.memoizedState;if(n!==null){s.pending=null;var d=n=n.next;do i=r(i,d.action),d=d.next;while(d!==n);Cr(i,t.memoizedState)||(sr=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),s.lastRenderedState=i}return[i,o]}function Qc(){}function qc(r,t){var s=Ce,o=jr(),n=t(),i=!Cr(o.memoizedState,n);if(i&&(o.memoizedState=n,sr=!0),o=o.queue,ni(Jc.bind(null,s,o,r),[r]),o.getSnapshot!==t||i||Re!==null&&Re.memoizedState.tag&1){if(s.flags|=2048,Js(9,Yc.bind(null,s,o,n,t),void 0,null),Fe===null)throw Error(l(349));(St&30)!==0||Kc(s,t,n)}return n}function Kc(r,t,s){r.flags|=16384,r={getSnapshot:t,value:s},t=Ce.updateQueue,t===null?(t={lastEffect:null,stores:null},Ce.updateQueue=t,t.stores=[r]):(s=t.stores,s===null?t.stores=[r]:s.push(r))}function Yc(r,t,s,o){t.value=s,t.getSnapshot=o,Xc(t)&&Zc(r)}function Jc(r,t,s){return s(function(){Xc(t)&&Zc(r)})}function Xc(r){var t=r.getSnapshot;r=r.value;try{var s=t();return!Cr(r,s)}catch{return!0}}function Zc(r){var t=Qr(r,1);t!==null&&Mr(t,r,1,-1)}function ed(r){var t=Or();return typeof r=="function"&&(r=r()),t.memoizedState=t.baseState=r,r={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ys,lastRenderedState:r},t.queue=r,r=r.dispatch=Wh.bind(null,Ce,r),[t.memoizedState,r]}function Js(r,t,s,o){return r={tag:r,create:t,destroy:s,deps:o,next:null},t=Ce.updateQueue,t===null?(t={lastEffect:null,stores:null},Ce.updateQueue=t,t.lastEffect=r.next=r):(s=t.lastEffect,s===null?t.lastEffect=r.next=r:(o=s.next,s.next=r,r.next=o,t.lastEffect=r)),r}function rd(){return jr().memoizedState}function Zo(r,t,s,o){var n=Or();Ce.flags|=r,n.memoizedState=Js(1|t,s,void 0,o===void 0?null:o)}function ea(r,t,s,o){var n=jr();o=o===void 0?null:o;var i=void 0;if(_e!==null){var d=_e.memoizedState;if(i=d.destroy,o!==null&&ri(o,d.deps)){n.memoizedState=Js(t,s,i,o);return}}Ce.flags|=r,n.memoizedState=Js(1|t,s,i,o)}function td(r,t){return Zo(8390656,8,r,t)}function ni(r,t){return ea(2048,8,r,t)}function sd(r,t){return ea(4,2,r,t)}function od(r,t){return ea(4,4,r,t)}function ad(r,t){if(typeof t=="function")return r=r(),t(r),function(){t(null)};if(t!=null)return r=r(),t.current=r,function(){t.current=null}}function nd(r,t,s){return s=s!=null?s.concat([r]):null,ea(4,4,ad.bind(null,t,r),s)}function ii(){}function id(r,t){var s=jr();t=t===void 0?null:t;var o=s.memoizedState;return o!==null&&t!==null&&ri(t,o[1])?o[0]:(s.memoizedState=[r,t],r)}function ld(r,t){var s=jr();t=t===void 0?null:t;var o=s.memoizedState;return o!==null&&t!==null&&ri(t,o[1])?o[0]:(r=r(),s.memoizedState=[r,t],r)}function cd(r,t,s){return(St&21)===0?(r.baseState&&(r.baseState=!1,sr=!0),r.memoizedState=s):(Cr(s,t)||(s=Fl(),Ce.lanes|=s,Tt|=s,r.baseState=!0),t)}function Fh(r,t){var s=ye;ye=s!==0&&4>s?s:4,r(!0);var o=ei.transition;ei.transition={};try{r(!1),t()}finally{ye=s,ei.transition=o}}function dd(){return jr().memoizedState}function Ah(r,t,s){var o=ht(r);if(s={lane:o,action:s,hasEagerState:!1,eagerState:null,next:null},pd(r))ud(t,s);else if(s=Dc(r,t,s,o),s!==null){var n=er();Mr(s,r,o,n),hd(s,t,o)}}function Wh(r,t,s){var o=ht(r),n={lane:o,action:s,hasEagerState:!1,eagerState:null,next:null};if(pd(r))ud(t,n);else{var i=r.alternate;if(r.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var d=t.lastRenderedState,u=i(d,s);if(n.hasEagerState=!0,n.eagerState=u,Cr(u,d)){var h=t.interleaved;h===null?(n.next=n,qn(t)):(n.next=h.next,h.next=n),t.interleaved=n;return}}catch{}finally{}s=Dc(r,t,n,o),s!==null&&(n=er(),Mr(s,r,o,n),hd(s,t,o))}}function pd(r){var t=r.alternate;return r===Ce||t!==null&&t===Ce}function ud(r,t){qs=Xo=!0;var s=r.pending;s===null?t.next=t:(t.next=s.next,s.next=t),r.pending=t}function hd(r,t,s){if((s&4194240)!==0){var o=t.lanes;o&=r.pendingLanes,s|=o,t.lanes=s,cn(r,s)}}var ra={readContext:yr,useCallback:Qe,useContext:Qe,useEffect:Qe,useImperativeHandle:Qe,useInsertionEffect:Qe,useLayoutEffect:Qe,useMemo:Qe,useReducer:Qe,useRef:Qe,useState:Qe,useDebugValue:Qe,useDeferredValue:Qe,useTransition:Qe,useMutableSource:Qe,useSyncExternalStore:Qe,useId:Qe,unstable_isNewReconciler:!1},Dh={readContext:yr,useCallback:function(r,t){return Or().memoizedState=[r,t===void 0?null:t],r},useContext:yr,useEffect:td,useImperativeHandle:function(r,t,s){return s=s!=null?s.concat([r]):null,Zo(4194308,4,ad.bind(null,t,r),s)},useLayoutEffect:function(r,t){return Zo(4194308,4,r,t)},useInsertionEffect:function(r,t){return Zo(4,2,r,t)},useMemo:function(r,t){var s=Or();return t=t===void 0?null:t,r=r(),s.memoizedState=[r,t],r},useReducer:function(r,t,s){var o=Or();return t=s!==void 0?s(t):t,o.memoizedState=o.baseState=t,r={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:r,lastRenderedState:t},o.queue=r,r=r.dispatch=Ah.bind(null,Ce,r),[o.memoizedState,r]},useRef:function(r){var t=Or();return r={current:r},t.memoizedState=r},useState:ed,useDebugValue:ii,useDeferredValue:function(r){return Or().memoizedState=r},useTransition:function(){var r=ed(!1),t=r[0];return r=Fh.bind(null,r[1]),Or().memoizedState=r,[t,r]},useMutableSource:function(){},useSyncExternalStore:function(r,t,s){var o=Ce,n=Or();if(Se){if(s===void 0)throw Error(l(407));s=s()}else{if(s=t(),Fe===null)throw Error(l(349));(St&30)!==0||Kc(o,t,s)}n.memoizedState=s;var i={value:s,getSnapshot:t};return n.queue=i,td(Jc.bind(null,o,i,r),[r]),o.flags|=2048,Js(9,Yc.bind(null,o,i,s,t),void 0,null),s},useId:function(){var r=Or(),t=Fe.identifierPrefix;if(Se){var s=Gr,o=Vr;s=(o&~(1<<32-Tr(o)-1)).toString(32)+s,t=":"+t+"R"+s,s=Ks++,0<s&&(t+="H"+s.toString(32)),t+=":"}else s=Rh++,t=":"+t+"r"+s.toString(32)+":";return r.memoizedState=t},unstable_isNewReconciler:!1},Uh={readContext:yr,useCallback:id,useContext:yr,useEffect:ni,useImperativeHandle:nd,useInsertionEffect:sd,useLayoutEffect:od,useMemo:ld,useReducer:oi,useRef:rd,useState:function(){return oi(Ys)},useDebugValue:ii,useDeferredValue:function(r){var t=jr();return cd(t,_e.memoizedState,r)},useTransition:function(){var r=oi(Ys)[0],t=jr().memoizedState;return[r,t]},useMutableSource:Qc,useSyncExternalStore:qc,useId:dd,unstable_isNewReconciler:!1},$h={readContext:yr,useCallback:id,useContext:yr,useEffect:ni,useImperativeHandle:nd,useInsertionEffect:sd,useLayoutEffect:od,useMemo:ld,useReducer:ai,useRef:rd,useState:function(){return ai(Ys)},useDebugValue:ii,useDeferredValue:function(r){var t=jr();return _e===null?t.memoizedState=r:cd(t,_e.memoizedState,r)},useTransition:function(){var r=ai(Ys)[0],t=jr().memoizedState;return[r,t]},useMutableSource:Qc,useSyncExternalStore:qc,useId:dd,unstable_isNewReconciler:!1};function zr(r,t){if(r&&r.defaultProps){t=E({},t),r=r.defaultProps;for(var s in r)t[s]===void 0&&(t[s]=r[s]);return t}return t}function li(r,t,s,o){t=r.memoizedState,s=s(o,t),s=s==null?t:E({},t,s),r.memoizedState=s,r.lanes===0&&(r.updateQueue.baseState=s)}var ta={isMounted:function(r){return(r=r._reactInternals)?vt(r)===r:!1},enqueueSetState:function(r,t,s){r=r._reactInternals;var o=er(),n=ht(r),i=qr(o,n);i.payload=t,s!=null&&(i.callback=s),t=ct(r,i,n),t!==null&&(Mr(t,r,n,o),qo(t,r,n))},enqueueReplaceState:function(r,t,s){r=r._reactInternals;var o=er(),n=ht(r),i=qr(o,n);i.tag=1,i.payload=t,s!=null&&(i.callback=s),t=ct(r,i,n),t!==null&&(Mr(t,r,n,o),qo(t,r,n))},enqueueForceUpdate:function(r,t){r=r._reactInternals;var s=er(),o=ht(r),n=qr(s,o);n.tag=2,t!=null&&(n.callback=t),t=ct(r,n,o),t!==null&&(Mr(t,r,o,s),qo(t,r,o))}};function xd(r,t,s,o,n,i,d){return r=r.stateNode,typeof r.shouldComponentUpdate=="function"?r.shouldComponentUpdate(o,i,d):t.prototype&&t.prototype.isPureReactComponent?!Os(s,o)||!Os(n,i):!0}function md(r,t,s){var o=!1,n=nt,i=t.contextType;return typeof i=="object"&&i!==null?i=yr(i):(n=tr(t)?jt:Ge.current,o=t.contextTypes,i=(o=o!=null)?Qt(r,n):nt),t=new t(s,i),r.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ta,r.stateNode=t,t._reactInternals=r,o&&(r=r.stateNode,r.__reactInternalMemoizedUnmaskedChildContext=n,r.__reactInternalMemoizedMaskedChildContext=i),t}function fd(r,t,s,o){r=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(s,o),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(s,o),t.state!==r&&ta.enqueueReplaceState(t,t.state,null)}function ci(r,t,s,o){var n=r.stateNode;n.props=s,n.state=r.memoizedState,n.refs={},Kn(r);var i=t.contextType;typeof i=="object"&&i!==null?n.context=yr(i):(i=tr(t)?jt:Ge.current,n.context=Qt(r,i)),n.state=r.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(li(r,t,i,s),n.state=r.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof n.getSnapshotBeforeUpdate=="function"||typeof n.UNSAFE_componentWillMount!="function"&&typeof n.componentWillMount!="function"||(t=n.state,typeof n.componentWillMount=="function"&&n.componentWillMount(),typeof n.UNSAFE_componentWillMount=="function"&&n.UNSAFE_componentWillMount(),t!==n.state&&ta.enqueueReplaceState(n,n.state,null),Ko(r,s,n,o),n.state=r.memoizedState),typeof n.componentDidMount=="function"&&(r.flags|=4194308)}function rs(r,t){try{var s="",o=t;do s+=pe(o),o=o.return;while(o);var n=s}catch(i){n=`
Error generating stack: `+i.message+`
`+i.stack}return{value:r,source:t,stack:n,digest:null}}function di(r,t,s){return{value:r,source:null,stack:s!=null?s:null,digest:t!=null?t:null}}function pi(r,t){try{console.error(t.value)}catch(s){setTimeout(function(){throw s})}}var Vh=typeof WeakMap=="function"?WeakMap:Map;function gd(r,t,s){s=qr(-1,s),s.tag=3,s.payload={element:null};var o=t.value;return s.callback=function(){ca||(ca=!0,Ti=o),pi(r,t)},s}function vd(r,t,s){s=qr(-1,s),s.tag=3;var o=r.type.getDerivedStateFromError;if(typeof o=="function"){var n=t.value;s.payload=function(){return o(n)},s.callback=function(){pi(r,t)}}var i=r.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(s.callback=function(){pi(r,t),typeof o!="function"&&(pt===null?pt=new Set([this]):pt.add(this));var d=t.stack;this.componentDidCatch(t.value,{componentStack:d!==null?d:""})}),s}function yd(r,t,s){var o=r.pingCache;if(o===null){o=r.pingCache=new Vh;var n=new Set;o.set(t,n)}else n=o.get(t),n===void 0&&(n=new Set,o.set(t,n));n.has(s)||(n.add(s),r=ax.bind(null,r,t,s),t.then(r,r))}function jd(r){do{var t;if((t=r.tag===13)&&(t=r.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return r;r=r.return}while(r!==null);return null}function bd(r,t,s,o,n){return(r.mode&1)===0?(r===t?r.flags|=65536:(r.flags|=128,s.flags|=131072,s.flags&=-52805,s.tag===1&&(s.alternate===null?s.tag=17:(t=qr(-1,1),t.tag=2,ct(s,t,1))),s.lanes|=1),r):(r.flags|=65536,r.lanes=n,r)}var Gh=re.ReactCurrentOwner,sr=!1;function Ze(r,t,s,o){t.child=r===null?Wc(t,null,s,o):Jt(t,r.child,s,o)}function Nd(r,t,s,o,n){s=s.render;var i=t.ref;return Zt(t,n),o=ti(r,t,s,o,i,n),s=si(),r!==null&&!sr?(t.updateQueue=r.updateQueue,t.flags&=-2053,r.lanes&=~n,Kr(r,t,n)):(Se&&s&&Fn(t),t.flags|=1,Ze(r,t,o,n),t.child)}function wd(r,t,s,o,n){if(r===null){var i=s.type;return typeof i=="function"&&!Bi(i)&&i.defaultProps===void 0&&s.compare===null&&s.defaultProps===void 0?(t.tag=15,t.type=i,kd(r,t,i,o,n)):(r=ma(s.type,null,o,t,t.mode,n),r.ref=t.ref,r.return=t,t.child=r)}if(i=r.child,(r.lanes&n)===0){var d=i.memoizedProps;if(s=s.compare,s=s!==null?s:Os,s(d,o)&&r.ref===t.ref)return Kr(r,t,n)}return t.flags|=1,r=mt(i,o),r.ref=t.ref,r.return=t,t.child=r}function kd(r,t,s,o,n){if(r!==null){var i=r.memoizedProps;if(Os(i,o)&&r.ref===t.ref)if(sr=!1,t.pendingProps=o=i,(r.lanes&n)!==0)(r.flags&131072)!==0&&(sr=!0);else return t.lanes=r.lanes,Kr(r,t,n)}return ui(r,t,s,o,n)}function Sd(r,t,s){var o=t.pendingProps,n=o.children,i=r!==null?r.memoizedState:null;if(o.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},be(ss,hr),hr|=s;else{if((s&1073741824)===0)return r=i!==null?i.baseLanes|s:s,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:r,cachePool:null,transitions:null},t.updateQueue=null,be(ss,hr),hr|=r,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},o=i!==null?i.baseLanes:s,be(ss,hr),hr|=o}else i!==null?(o=i.baseLanes|s,t.memoizedState=null):o=s,be(ss,hr),hr|=o;return Ze(r,t,n,s),t.child}function Td(r,t){var s=t.ref;(r===null&&s!==null||r!==null&&r.ref!==s)&&(t.flags|=512,t.flags|=2097152)}function ui(r,t,s,o,n){var i=tr(s)?jt:Ge.current;return i=Qt(t,i),Zt(t,n),s=ti(r,t,s,o,i,n),o=si(),r!==null&&!sr?(t.updateQueue=r.updateQueue,t.flags&=-2053,r.lanes&=~n,Kr(r,t,n)):(Se&&o&&Fn(t),t.flags|=1,Ze(r,t,s,n),t.child)}function Cd(r,t,s,o,n){if(tr(s)){var i=!0;Ao(t)}else i=!1;if(Zt(t,n),t.stateNode===null)oa(r,t),md(t,s,o),ci(t,s,o,n),o=!0;else if(r===null){var d=t.stateNode,u=t.memoizedProps;d.props=u;var h=d.context,j=s.contextType;typeof j=="object"&&j!==null?j=yr(j):(j=tr(s)?jt:Ge.current,j=Qt(t,j));var k=s.getDerivedStateFromProps,S=typeof k=="function"||typeof d.getSnapshotBeforeUpdate=="function";S||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(u!==o||h!==j)&&fd(t,d,o,j),lt=!1;var w=t.memoizedState;d.state=w,Ko(t,o,d,n),h=t.memoizedState,u!==o||w!==h||rr.current||lt?(typeof k=="function"&&(li(t,s,k,o),h=t.memoizedState),(u=lt||xd(t,s,u,o,w,h,j))?(S||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(t.flags|=4194308)):(typeof d.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=o,t.memoizedState=h),d.props=o,d.state=h,d.context=j,o=u):(typeof d.componentDidMount=="function"&&(t.flags|=4194308),o=!1)}else{d=t.stateNode,Uc(r,t),u=t.memoizedProps,j=t.type===t.elementType?u:zr(t.type,u),d.props=j,S=t.pendingProps,w=d.context,h=s.contextType,typeof h=="object"&&h!==null?h=yr(h):(h=tr(s)?jt:Ge.current,h=Qt(t,h));var M=s.getDerivedStateFromProps;(k=typeof M=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(u!==S||w!==h)&&fd(t,d,o,h),lt=!1,w=t.memoizedState,d.state=w,Ko(t,o,d,n);var _=t.memoizedState;u!==S||w!==_||rr.current||lt?(typeof M=="function"&&(li(t,s,M,o),_=t.memoizedState),(j=lt||xd(t,s,j,o,w,_,h)||!1)?(k||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(o,_,h),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(o,_,h)),typeof d.componentDidUpdate=="function"&&(t.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof d.componentDidUpdate!="function"||u===r.memoizedProps&&w===r.memoizedState||(t.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||u===r.memoizedProps&&w===r.memoizedState||(t.flags|=1024),t.memoizedProps=o,t.memoizedState=_),d.props=o,d.state=_,d.context=h,o=j):(typeof d.componentDidUpdate!="function"||u===r.memoizedProps&&w===r.memoizedState||(t.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||u===r.memoizedProps&&w===r.memoizedState||(t.flags|=1024),o=!1)}return hi(r,t,s,o,i,n)}function hi(r,t,s,o,n,i){Td(r,t);var d=(t.flags&128)!==0;if(!o&&!d)return n&&Mc(t,s,!1),Kr(r,t,i);o=t.stateNode,Gh.current=t;var u=d&&typeof s.getDerivedStateFromError!="function"?null:o.render();return t.flags|=1,r!==null&&d?(t.child=Jt(t,r.child,null,i),t.child=Jt(t,null,u,i)):Ze(r,t,u,i),t.memoizedState=o.state,n&&Mc(t,s,!0),t.child}function Ld(r){var t=r.stateNode;t.pendingContext?Ic(r,t.pendingContext,t.pendingContext!==t.context):t.context&&Ic(r,t.context,!1),Yn(r,t.containerInfo)}function zd(r,t,s,o,n){return Yt(),Un(n),t.flags|=256,Ze(r,t,s,o),t.child}var xi={dehydrated:null,treeContext:null,retryLane:0};function mi(r){return{baseLanes:r,cachePool:null,transitions:null}}function Id(r,t,s){var o=t.pendingProps,n=Te.current,i=!1,d=(t.flags&128)!==0,u;if((u=d)||(u=r!==null&&r.memoizedState===null?!1:(n&2)!==0),u?(i=!0,t.flags&=-129):(r===null||r.memoizedState!==null)&&(n|=1),be(Te,n&1),r===null)return Dn(t),r=t.memoizedState,r!==null&&(r=r.dehydrated,r!==null)?((t.mode&1)===0?t.lanes=1:r.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(d=o.children,r=o.fallback,i?(o=t.mode,i=t.child,d={mode:"hidden",children:d},(o&1)===0&&i!==null?(i.childLanes=0,i.pendingProps=d):i=fa(d,o,0,null),r=It(r,o,s,null),i.return=t,r.return=t,i.sibling=r,t.child=i,t.child.memoizedState=mi(s),t.memoizedState=xi,r):fi(t,d));if(n=r.memoizedState,n!==null&&(u=n.dehydrated,u!==null))return Qh(r,t,d,o,u,n,s);if(i){i=o.fallback,d=t.mode,n=r.child,u=n.sibling;var h={mode:"hidden",children:o.children};return(d&1)===0&&t.child!==n?(o=t.child,o.childLanes=0,o.pendingProps=h,t.deletions=null):(o=mt(n,h),o.subtreeFlags=n.subtreeFlags&14680064),u!==null?i=mt(u,i):(i=It(i,d,s,null),i.flags|=2),i.return=t,o.return=t,o.sibling=i,t.child=o,o=i,i=t.child,d=r.child.memoizedState,d=d===null?mi(s):{baseLanes:d.baseLanes|s,cachePool:null,transitions:d.transitions},i.memoizedState=d,i.childLanes=r.childLanes&~s,t.memoizedState=xi,o}return i=r.child,r=i.sibling,o=mt(i,{mode:"visible",children:o.children}),(t.mode&1)===0&&(o.lanes=s),o.return=t,o.sibling=null,r!==null&&(s=t.deletions,s===null?(t.deletions=[r],t.flags|=16):s.push(r)),t.child=o,t.memoizedState=null,o}function fi(r,t){return t=fa({mode:"visible",children:t},r.mode,0,null),t.return=r,r.child=t}function sa(r,t,s,o){return o!==null&&Un(o),Jt(t,r.child,null,s),r=fi(t,t.pendingProps.children),r.flags|=2,t.memoizedState=null,r}function Qh(r,t,s,o,n,i,d){if(s)return t.flags&256?(t.flags&=-257,o=di(Error(l(422))),sa(r,t,d,o)):t.memoizedState!==null?(t.child=r.child,t.flags|=128,null):(i=o.fallback,n=t.mode,o=fa({mode:"visible",children:o.children},n,0,null),i=It(i,n,d,null),i.flags|=2,o.return=t,i.return=t,o.sibling=i,t.child=o,(t.mode&1)!==0&&Jt(t,r.child,null,d),t.child.memoizedState=mi(d),t.memoizedState=xi,i);if((t.mode&1)===0)return sa(r,t,d,null);if(n.data==="$!"){if(o=n.nextSibling&&n.nextSibling.dataset,o)var u=o.dgst;return o=u,i=Error(l(419)),o=di(i,o,void 0),sa(r,t,d,o)}if(u=(d&r.childLanes)!==0,sr||u){if(o=Fe,o!==null){switch(d&-d){case 4:n=2;break;case 16:n=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:n=32;break;case 536870912:n=268435456;break;default:n=0}n=(n&(o.suspendedLanes|d))!==0?0:n,n!==0&&n!==i.retryLane&&(i.retryLane=n,Qr(r,n),Mr(o,r,n,-1))}return Mi(),o=di(Error(l(421))),sa(r,t,d,o)}return n.data==="$?"?(t.flags|=128,t.child=r.child,t=nx.bind(null,r),n._reactRetry=t,null):(r=i.treeContext,ur=ot(n.nextSibling),pr=t,Se=!0,Lr=null,r!==null&&(gr[vr++]=Vr,gr[vr++]=Gr,gr[vr++]=bt,Vr=r.id,Gr=r.overflow,bt=t),t=fi(t,o.children),t.flags|=4096,t)}function Ed(r,t,s){r.lanes|=t;var o=r.alternate;o!==null&&(o.lanes|=t),Qn(r.return,t,s)}function gi(r,t,s,o,n){var i=r.memoizedState;i===null?r.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:o,tail:s,tailMode:n}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=o,i.tail=s,i.tailMode=n)}function Md(r,t,s){var o=t.pendingProps,n=o.revealOrder,i=o.tail;if(Ze(r,t,o.children,s),o=Te.current,(o&2)!==0)o=o&1|2,t.flags|=128;else{if(r!==null&&(r.flags&128)!==0)e:for(r=t.child;r!==null;){if(r.tag===13)r.memoizedState!==null&&Ed(r,s,t);else if(r.tag===19)Ed(r,s,t);else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break e;for(;r.sibling===null;){if(r.return===null||r.return===t)break e;r=r.return}r.sibling.return=r.return,r=r.sibling}o&=1}if(be(Te,o),(t.mode&1)===0)t.memoizedState=null;else switch(n){case"forwards":for(s=t.child,n=null;s!==null;)r=s.alternate,r!==null&&Yo(r)===null&&(n=s),s=s.sibling;s=n,s===null?(n=t.child,t.child=null):(n=s.sibling,s.sibling=null),gi(t,!1,n,s,i);break;case"backwards":for(s=null,n=t.child,t.child=null;n!==null;){if(r=n.alternate,r!==null&&Yo(r)===null){t.child=n;break}r=n.sibling,n.sibling=s,s=n,n=r}gi(t,!0,s,null,i);break;case"together":gi(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function oa(r,t){(t.mode&1)===0&&r!==null&&(r.alternate=null,t.alternate=null,t.flags|=2)}function Kr(r,t,s){if(r!==null&&(t.dependencies=r.dependencies),Tt|=t.lanes,(s&t.childLanes)===0)return null;if(r!==null&&t.child!==r.child)throw Error(l(153));if(t.child!==null){for(r=t.child,s=mt(r,r.pendingProps),t.child=s,s.return=t;r.sibling!==null;)r=r.sibling,s=s.sibling=mt(r,r.pendingProps),s.return=t;s.sibling=null}return t.child}function qh(r,t,s){switch(t.tag){case 3:Ld(t),Yt();break;case 5:Gc(t);break;case 1:tr(t.type)&&Ao(t);break;case 4:Yn(t,t.stateNode.containerInfo);break;case 10:var o=t.type._context,n=t.memoizedProps.value;be(Go,o._currentValue),o._currentValue=n;break;case 13:if(o=t.memoizedState,o!==null)return o.dehydrated!==null?(be(Te,Te.current&1),t.flags|=128,null):(s&t.child.childLanes)!==0?Id(r,t,s):(be(Te,Te.current&1),r=Kr(r,t,s),r!==null?r.sibling:null);be(Te,Te.current&1);break;case 19:if(o=(s&t.childLanes)!==0,(r.flags&128)!==0){if(o)return Md(r,t,s);t.flags|=128}if(n=t.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),be(Te,Te.current),o)break;return null;case 22:case 23:return t.lanes=0,Sd(r,t,s)}return Kr(r,t,s)}var Bd,vi,Hd,Pd;Bd=function(r,t){for(var s=t.child;s!==null;){if(s.tag===5||s.tag===6)r.appendChild(s.stateNode);else if(s.tag!==4&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break;for(;s.sibling===null;){if(s.return===null||s.return===t)return;s=s.return}s.sibling.return=s.return,s=s.sibling}},vi=function(){},Hd=function(r,t,s,o){var n=r.memoizedProps;if(n!==o){r=t.stateNode,kt(_r.current);var i=null;switch(s){case"input":n=Ga(r,n),o=Ga(r,o),i=[];break;case"select":n=E({},n,{value:void 0}),o=E({},o,{value:void 0}),i=[];break;case"textarea":n=Ka(r,n),o=Ka(r,o),i=[];break;default:typeof n.onClick!="function"&&typeof o.onClick=="function"&&(r.onclick=Oo)}Ja(s,o);var d;s=null;for(j in n)if(!o.hasOwnProperty(j)&&n.hasOwnProperty(j)&&n[j]!=null)if(j==="style"){var u=n[j];for(d in u)u.hasOwnProperty(d)&&(s||(s={}),s[d]="")}else j!=="dangerouslySetInnerHTML"&&j!=="children"&&j!=="suppressContentEditableWarning"&&j!=="suppressHydrationWarning"&&j!=="autoFocus"&&(m.hasOwnProperty(j)?i||(i=[]):(i=i||[]).push(j,null));for(j in o){var h=o[j];if(u=n!=null?n[j]:void 0,o.hasOwnProperty(j)&&h!==u&&(h!=null||u!=null))if(j==="style")if(u){for(d in u)!u.hasOwnProperty(d)||h&&h.hasOwnProperty(d)||(s||(s={}),s[d]="");for(d in h)h.hasOwnProperty(d)&&u[d]!==h[d]&&(s||(s={}),s[d]=h[d])}else s||(i||(i=[]),i.push(j,s)),s=h;else j==="dangerouslySetInnerHTML"?(h=h?h.__html:void 0,u=u?u.__html:void 0,h!=null&&u!==h&&(i=i||[]).push(j,h)):j==="children"?typeof h!="string"&&typeof h!="number"||(i=i||[]).push(j,""+h):j!=="suppressContentEditableWarning"&&j!=="suppressHydrationWarning"&&(m.hasOwnProperty(j)?(h!=null&&j==="onScroll"&&Ne("scroll",r),i||u===h||(i=[])):(i=i||[]).push(j,h))}s&&(i=i||[]).push("style",s);var j=i;(t.updateQueue=j)&&(t.flags|=4)}},Pd=function(r,t,s,o){s!==o&&(t.flags|=4)};function Xs(r,t){if(!Se)switch(r.tailMode){case"hidden":t=r.tail;for(var s=null;t!==null;)t.alternate!==null&&(s=t),t=t.sibling;s===null?r.tail=null:s.sibling=null;break;case"collapsed":s=r.tail;for(var o=null;s!==null;)s.alternate!==null&&(o=s),s=s.sibling;o===null?t||r.tail===null?r.tail=null:r.tail.sibling=null:o.sibling=null}}function qe(r){var t=r.alternate!==null&&r.alternate.child===r.child,s=0,o=0;if(t)for(var n=r.child;n!==null;)s|=n.lanes|n.childLanes,o|=n.subtreeFlags&14680064,o|=n.flags&14680064,n.return=r,n=n.sibling;else for(n=r.child;n!==null;)s|=n.lanes|n.childLanes,o|=n.subtreeFlags,o|=n.flags,n.return=r,n=n.sibling;return r.subtreeFlags|=o,r.childLanes=s,t}function Kh(r,t,s){var o=t.pendingProps;switch(An(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return qe(t),null;case 1:return tr(t.type)&&Fo(),qe(t),null;case 3:return o=t.stateNode,es(),we(rr),we(Ge),Zn(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(r===null||r.child===null)&&($o(t)?t.flags|=4:r===null||r.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Lr!==null&&(zi(Lr),Lr=null))),vi(r,t),qe(t),null;case 5:Jn(t);var n=kt(Qs.current);if(s=t.type,r!==null&&t.stateNode!=null)Hd(r,t,s,o,n),r.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!o){if(t.stateNode===null)throw Error(l(166));return qe(t),null}if(r=kt(_r.current),$o(t)){o=t.stateNode,s=t.type;var i=t.memoizedProps;switch(o[Pr]=t,o[Ds]=i,r=(t.mode&1)!==0,s){case"dialog":Ne("cancel",o),Ne("close",o);break;case"iframe":case"object":case"embed":Ne("load",o);break;case"video":case"audio":for(n=0;n<Fs.length;n++)Ne(Fs[n],o);break;case"source":Ne("error",o);break;case"img":case"image":case"link":Ne("error",o),Ne("load",o);break;case"details":Ne("toggle",o);break;case"input":ml(o,i),Ne("invalid",o);break;case"select":o._wrapperState={wasMultiple:!!i.multiple},Ne("invalid",o);break;case"textarea":vl(o,i),Ne("invalid",o)}Ja(s,i),n=null;for(var d in i)if(i.hasOwnProperty(d)){var u=i[d];d==="children"?typeof u=="string"?o.textContent!==u&&(i.suppressHydrationWarning!==!0&&_o(o.textContent,u,r),n=["children",u]):typeof u=="number"&&o.textContent!==""+u&&(i.suppressHydrationWarning!==!0&&_o(o.textContent,u,r),n=["children",""+u]):m.hasOwnProperty(d)&&u!=null&&d==="onScroll"&&Ne("scroll",o)}switch(s){case"input":Dr(o),gl(o,i,!0);break;case"textarea":Dr(o),jl(o);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(o.onclick=Oo)}o=n,t.updateQueue=o,o!==null&&(t.flags|=4)}else{d=n.nodeType===9?n:n.ownerDocument,r==="http://www.w3.org/1999/xhtml"&&(r=bl(s)),r==="http://www.w3.org/1999/xhtml"?s==="script"?(r=d.createElement("div"),r.innerHTML="<script><\/script>",r=r.removeChild(r.firstChild)):typeof o.is=="string"?r=d.createElement(s,{is:o.is}):(r=d.createElement(s),s==="select"&&(d=r,o.multiple?d.multiple=!0:o.size&&(d.size=o.size))):r=d.createElementNS(r,s),r[Pr]=t,r[Ds]=o,Bd(r,t,!1,!1),t.stateNode=r;e:{switch(d=Xa(s,o),s){case"dialog":Ne("cancel",r),Ne("close",r),n=o;break;case"iframe":case"object":case"embed":Ne("load",r),n=o;break;case"video":case"audio":for(n=0;n<Fs.length;n++)Ne(Fs[n],r);n=o;break;case"source":Ne("error",r),n=o;break;case"img":case"image":case"link":Ne("error",r),Ne("load",r),n=o;break;case"details":Ne("toggle",r),n=o;break;case"input":ml(r,o),n=Ga(r,o),Ne("invalid",r);break;case"option":n=o;break;case"select":r._wrapperState={wasMultiple:!!o.multiple},n=E({},o,{value:void 0}),Ne("invalid",r);break;case"textarea":vl(r,o),n=Ka(r,o),Ne("invalid",r);break;default:n=o}Ja(s,n),u=n;for(i in u)if(u.hasOwnProperty(i)){var h=u[i];i==="style"?kl(r,h):i==="dangerouslySetInnerHTML"?(h=h?h.__html:void 0,h!=null&&Nl(r,h)):i==="children"?typeof h=="string"?(s!=="textarea"||h!=="")&&js(r,h):typeof h=="number"&&js(r,""+h):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(m.hasOwnProperty(i)?h!=null&&i==="onScroll"&&Ne("scroll",r):h!=null&&J(r,i,h,d))}switch(s){case"input":Dr(r),gl(r,o,!1);break;case"textarea":Dr(r),jl(r);break;case"option":o.value!=null&&r.setAttribute("value",""+ue(o.value));break;case"select":r.multiple=!!o.multiple,i=o.value,i!=null?Pt(r,!!o.multiple,i,!1):o.defaultValue!=null&&Pt(r,!!o.multiple,o.defaultValue,!0);break;default:typeof n.onClick=="function"&&(r.onclick=Oo)}switch(s){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}}o&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return qe(t),null;case 6:if(r&&t.stateNode!=null)Pd(r,t,r.memoizedProps,o);else{if(typeof o!="string"&&t.stateNode===null)throw Error(l(166));if(s=kt(Qs.current),kt(_r.current),$o(t)){if(o=t.stateNode,s=t.memoizedProps,o[Pr]=t,(i=o.nodeValue!==s)&&(r=pr,r!==null))switch(r.tag){case 3:_o(o.nodeValue,s,(r.mode&1)!==0);break;case 5:r.memoizedProps.suppressHydrationWarning!==!0&&_o(o.nodeValue,s,(r.mode&1)!==0)}i&&(t.flags|=4)}else o=(s.nodeType===9?s:s.ownerDocument).createTextNode(o),o[Pr]=t,t.stateNode=o}return qe(t),null;case 13:if(we(Te),o=t.memoizedState,r===null||r.memoizedState!==null&&r.memoizedState.dehydrated!==null){if(Se&&ur!==null&&(t.mode&1)!==0&&(t.flags&128)===0)Rc(),Yt(),t.flags|=98560,i=!1;else if(i=$o(t),o!==null&&o.dehydrated!==null){if(r===null){if(!i)throw Error(l(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(l(317));i[Pr]=t}else Yt(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;qe(t),i=!1}else Lr!==null&&(zi(Lr),Lr=null),i=!0;if(!i)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=s,t):(o=o!==null,o!==(r!==null&&r.memoizedState!==null)&&o&&(t.child.flags|=8192,(t.mode&1)!==0&&(r===null||(Te.current&1)!==0?Oe===0&&(Oe=3):Mi())),t.updateQueue!==null&&(t.flags|=4),qe(t),null);case 4:return es(),vi(r,t),r===null&&As(t.stateNode.containerInfo),qe(t),null;case 10:return Gn(t.type._context),qe(t),null;case 17:return tr(t.type)&&Fo(),qe(t),null;case 19:if(we(Te),i=t.memoizedState,i===null)return qe(t),null;if(o=(t.flags&128)!==0,d=i.rendering,d===null)if(o)Xs(i,!1);else{if(Oe!==0||r!==null&&(r.flags&128)!==0)for(r=t.child;r!==null;){if(d=Yo(r),d!==null){for(t.flags|=128,Xs(i,!1),o=d.updateQueue,o!==null&&(t.updateQueue=o,t.flags|=4),t.subtreeFlags=0,o=s,s=t.child;s!==null;)i=s,r=o,i.flags&=14680066,d=i.alternate,d===null?(i.childLanes=0,i.lanes=r,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=d.childLanes,i.lanes=d.lanes,i.child=d.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=d.memoizedProps,i.memoizedState=d.memoizedState,i.updateQueue=d.updateQueue,i.type=d.type,r=d.dependencies,i.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext}),s=s.sibling;return be(Te,Te.current&1|2),t.child}r=r.sibling}i.tail!==null&&ze()>os&&(t.flags|=128,o=!0,Xs(i,!1),t.lanes=4194304)}else{if(!o)if(r=Yo(d),r!==null){if(t.flags|=128,o=!0,s=r.updateQueue,s!==null&&(t.updateQueue=s,t.flags|=4),Xs(i,!0),i.tail===null&&i.tailMode==="hidden"&&!d.alternate&&!Se)return qe(t),null}else 2*ze()-i.renderingStartTime>os&&s!==1073741824&&(t.flags|=128,o=!0,Xs(i,!1),t.lanes=4194304);i.isBackwards?(d.sibling=t.child,t.child=d):(s=i.last,s!==null?s.sibling=d:t.child=d,i.last=d)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=ze(),t.sibling=null,s=Te.current,be(Te,o?s&1|2:s&1),t):(qe(t),null);case 22:case 23:return Ei(),o=t.memoizedState!==null,r!==null&&r.memoizedState!==null!==o&&(t.flags|=8192),o&&(t.mode&1)!==0?(hr&1073741824)!==0&&(qe(t),t.subtreeFlags&6&&(t.flags|=8192)):qe(t),null;case 24:return null;case 25:return null}throw Error(l(156,t.tag))}function Yh(r,t){switch(An(t),t.tag){case 1:return tr(t.type)&&Fo(),r=t.flags,r&65536?(t.flags=r&-65537|128,t):null;case 3:return es(),we(rr),we(Ge),Zn(),r=t.flags,(r&65536)!==0&&(r&128)===0?(t.flags=r&-65537|128,t):null;case 5:return Jn(t),null;case 13:if(we(Te),r=t.memoizedState,r!==null&&r.dehydrated!==null){if(t.alternate===null)throw Error(l(340));Yt()}return r=t.flags,r&65536?(t.flags=r&-65537|128,t):null;case 19:return we(Te),null;case 4:return es(),null;case 10:return Gn(t.type._context),null;case 22:case 23:return Ei(),null;case 24:return null;default:return null}}var aa=!1,Ke=!1,Jh=typeof WeakSet=="function"?WeakSet:Set,H=null;function ts(r,t){var s=r.ref;if(s!==null)if(typeof s=="function")try{s(null)}catch(o){Le(r,t,o)}else s.current=null}function yi(r,t,s){try{s()}catch(o){Le(r,t,o)}}var _d=!1;function Xh(r,t){if(En=So,r=xc(),wn(r)){if("selectionStart"in r)var s={start:r.selectionStart,end:r.selectionEnd};else e:{s=(s=r.ownerDocument)&&s.defaultView||window;var o=s.getSelection&&s.getSelection();if(o&&o.rangeCount!==0){s=o.anchorNode;var n=o.anchorOffset,i=o.focusNode;o=o.focusOffset;try{s.nodeType,i.nodeType}catch{s=null;break e}var d=0,u=-1,h=-1,j=0,k=0,S=r,w=null;r:for(;;){for(var M;S!==s||n!==0&&S.nodeType!==3||(u=d+n),S!==i||o!==0&&S.nodeType!==3||(h=d+o),S.nodeType===3&&(d+=S.nodeValue.length),(M=S.firstChild)!==null;)w=S,S=M;for(;;){if(S===r)break r;if(w===s&&++j===n&&(u=d),w===i&&++k===o&&(h=d),(M=S.nextSibling)!==null)break;S=w,w=S.parentNode}S=M}s=u===-1||h===-1?null:{start:u,end:h}}else s=null}s=s||{start:0,end:0}}else s=null;for(Mn={focusedElem:r,selectionRange:s},So=!1,H=t;H!==null;)if(t=H,r=t.child,(t.subtreeFlags&1028)!==0&&r!==null)r.return=t,H=r;else for(;H!==null;){t=H;try{var _=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var R=_.memoizedProps,Ie=_.memoizedState,v=t.stateNode,x=v.getSnapshotBeforeUpdate(t.elementType===t.type?R:zr(t.type,R),Ie);v.__reactInternalSnapshotBeforeUpdate=x}break;case 3:var y=t.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(l(163))}}catch(C){Le(t,t.return,C)}if(r=t.sibling,r!==null){r.return=t.return,H=r;break}H=t.return}return _=_d,_d=!1,_}function Zs(r,t,s){var o=t.updateQueue;if(o=o!==null?o.lastEffect:null,o!==null){var n=o=o.next;do{if((n.tag&r)===r){var i=n.destroy;n.destroy=void 0,i!==void 0&&yi(t,s,i)}n=n.next}while(n!==o)}}function na(r,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var s=t=t.next;do{if((s.tag&r)===r){var o=s.create;s.destroy=o()}s=s.next}while(s!==t)}}function ji(r){var t=r.ref;if(t!==null){var s=r.stateNode;switch(r.tag){case 5:r=s;break;default:r=s}typeof t=="function"?t(r):t.current=r}}function Od(r){var t=r.alternate;t!==null&&(r.alternate=null,Od(t)),r.child=null,r.deletions=null,r.sibling=null,r.tag===5&&(t=r.stateNode,t!==null&&(delete t[Pr],delete t[Ds],delete t[_n],delete t[Hh],delete t[Ph])),r.stateNode=null,r.return=null,r.dependencies=null,r.memoizedProps=null,r.memoizedState=null,r.pendingProps=null,r.stateNode=null,r.updateQueue=null}function Rd(r){return r.tag===5||r.tag===3||r.tag===4}function Fd(r){e:for(;;){for(;r.sibling===null;){if(r.return===null||Rd(r.return))return null;r=r.return}for(r.sibling.return=r.return,r=r.sibling;r.tag!==5&&r.tag!==6&&r.tag!==18;){if(r.flags&2||r.child===null||r.tag===4)continue e;r.child.return=r,r=r.child}if(!(r.flags&2))return r.stateNode}}function bi(r,t,s){var o=r.tag;if(o===5||o===6)r=r.stateNode,t?s.nodeType===8?s.parentNode.insertBefore(r,t):s.insertBefore(r,t):(s.nodeType===8?(t=s.parentNode,t.insertBefore(r,s)):(t=s,t.appendChild(r)),s=s._reactRootContainer,s!=null||t.onclick!==null||(t.onclick=Oo));else if(o!==4&&(r=r.child,r!==null))for(bi(r,t,s),r=r.sibling;r!==null;)bi(r,t,s),r=r.sibling}function Ni(r,t,s){var o=r.tag;if(o===5||o===6)r=r.stateNode,t?s.insertBefore(r,t):s.appendChild(r);else if(o!==4&&(r=r.child,r!==null))for(Ni(r,t,s),r=r.sibling;r!==null;)Ni(r,t,s),r=r.sibling}var Ue=null,Ir=!1;function dt(r,t,s){for(s=s.child;s!==null;)Ad(r,t,s),s=s.sibling}function Ad(r,t,s){if(Hr&&typeof Hr.onCommitFiberUnmount=="function")try{Hr.onCommitFiberUnmount(yo,s)}catch{}switch(s.tag){case 5:Ke||ts(s,t);case 6:var o=Ue,n=Ir;Ue=null,dt(r,t,s),Ue=o,Ir=n,Ue!==null&&(Ir?(r=Ue,s=s.stateNode,r.nodeType===8?r.parentNode.removeChild(s):r.removeChild(s)):Ue.removeChild(s.stateNode));break;case 18:Ue!==null&&(Ir?(r=Ue,s=s.stateNode,r.nodeType===8?Pn(r.parentNode,s):r.nodeType===1&&Pn(r,s),Es(r)):Pn(Ue,s.stateNode));break;case 4:o=Ue,n=Ir,Ue=s.stateNode.containerInfo,Ir=!0,dt(r,t,s),Ue=o,Ir=n;break;case 0:case 11:case 14:case 15:if(!Ke&&(o=s.updateQueue,o!==null&&(o=o.lastEffect,o!==null))){n=o=o.next;do{var i=n,d=i.destroy;i=i.tag,d!==void 0&&((i&2)!==0||(i&4)!==0)&&yi(s,t,d),n=n.next}while(n!==o)}dt(r,t,s);break;case 1:if(!Ke&&(ts(s,t),o=s.stateNode,typeof o.componentWillUnmount=="function"))try{o.props=s.memoizedProps,o.state=s.memoizedState,o.componentWillUnmount()}catch(u){Le(s,t,u)}dt(r,t,s);break;case 21:dt(r,t,s);break;case 22:s.mode&1?(Ke=(o=Ke)||s.memoizedState!==null,dt(r,t,s),Ke=o):dt(r,t,s);break;default:dt(r,t,s)}}function Wd(r){var t=r.updateQueue;if(t!==null){r.updateQueue=null;var s=r.stateNode;s===null&&(s=r.stateNode=new Jh),t.forEach(function(o){var n=ix.bind(null,r,o);s.has(o)||(s.add(o),o.then(n,n))})}}function Er(r,t){var s=t.deletions;if(s!==null)for(var o=0;o<s.length;o++){var n=s[o];try{var i=r,d=t,u=d;e:for(;u!==null;){switch(u.tag){case 5:Ue=u.stateNode,Ir=!1;break e;case 3:Ue=u.stateNode.containerInfo,Ir=!0;break e;case 4:Ue=u.stateNode.containerInfo,Ir=!0;break e}u=u.return}if(Ue===null)throw Error(l(160));Ad(i,d,n),Ue=null,Ir=!1;var h=n.alternate;h!==null&&(h.return=null),n.return=null}catch(j){Le(n,t,j)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Dd(t,r),t=t.sibling}function Dd(r,t){var s=r.alternate,o=r.flags;switch(r.tag){case 0:case 11:case 14:case 15:if(Er(t,r),Rr(r),o&4){try{Zs(3,r,r.return),na(3,r)}catch(R){Le(r,r.return,R)}try{Zs(5,r,r.return)}catch(R){Le(r,r.return,R)}}break;case 1:Er(t,r),Rr(r),o&512&&s!==null&&ts(s,s.return);break;case 5:if(Er(t,r),Rr(r),o&512&&s!==null&&ts(s,s.return),r.flags&32){var n=r.stateNode;try{js(n,"")}catch(R){Le(r,r.return,R)}}if(o&4&&(n=r.stateNode,n!=null)){var i=r.memoizedProps,d=s!==null?s.memoizedProps:i,u=r.type,h=r.updateQueue;if(r.updateQueue=null,h!==null)try{u==="input"&&i.type==="radio"&&i.name!=null&&fl(n,i),Xa(u,d);var j=Xa(u,i);for(d=0;d<h.length;d+=2){var k=h[d],S=h[d+1];k==="style"?kl(n,S):k==="dangerouslySetInnerHTML"?Nl(n,S):k==="children"?js(n,S):J(n,k,S,j)}switch(u){case"input":Qa(n,i);break;case"textarea":yl(n,i);break;case"select":var w=n._wrapperState.wasMultiple;n._wrapperState.wasMultiple=!!i.multiple;var M=i.value;M!=null?Pt(n,!!i.multiple,M,!1):w!==!!i.multiple&&(i.defaultValue!=null?Pt(n,!!i.multiple,i.defaultValue,!0):Pt(n,!!i.multiple,i.multiple?[]:"",!1))}n[Ds]=i}catch(R){Le(r,r.return,R)}}break;case 6:if(Er(t,r),Rr(r),o&4){if(r.stateNode===null)throw Error(l(162));n=r.stateNode,i=r.memoizedProps;try{n.nodeValue=i}catch(R){Le(r,r.return,R)}}break;case 3:if(Er(t,r),Rr(r),o&4&&s!==null&&s.memoizedState.isDehydrated)try{Es(t.containerInfo)}catch(R){Le(r,r.return,R)}break;case 4:Er(t,r),Rr(r);break;case 13:Er(t,r),Rr(r),n=r.child,n.flags&8192&&(i=n.memoizedState!==null,n.stateNode.isHidden=i,!i||n.alternate!==null&&n.alternate.memoizedState!==null||(Si=ze())),o&4&&Wd(r);break;case 22:if(k=s!==null&&s.memoizedState!==null,r.mode&1?(Ke=(j=Ke)||k,Er(t,r),Ke=j):Er(t,r),Rr(r),o&8192){if(j=r.memoizedState!==null,(r.stateNode.isHidden=j)&&!k&&(r.mode&1)!==0)for(H=r,k=r.child;k!==null;){for(S=H=k;H!==null;){switch(w=H,M=w.child,w.tag){case 0:case 11:case 14:case 15:Zs(4,w,w.return);break;case 1:ts(w,w.return);var _=w.stateNode;if(typeof _.componentWillUnmount=="function"){o=w,s=w.return;try{t=o,_.props=t.memoizedProps,_.state=t.memoizedState,_.componentWillUnmount()}catch(R){Le(o,s,R)}}break;case 5:ts(w,w.return);break;case 22:if(w.memoizedState!==null){Vd(S);continue}}M!==null?(M.return=w,H=M):Vd(S)}k=k.sibling}e:for(k=null,S=r;;){if(S.tag===5){if(k===null){k=S;try{n=S.stateNode,j?(i=n.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(u=S.stateNode,h=S.memoizedProps.style,d=h!=null&&h.hasOwnProperty("display")?h.display:null,u.style.display=wl("display",d))}catch(R){Le(r,r.return,R)}}}else if(S.tag===6){if(k===null)try{S.stateNode.nodeValue=j?"":S.memoizedProps}catch(R){Le(r,r.return,R)}}else if((S.tag!==22&&S.tag!==23||S.memoizedState===null||S===r)&&S.child!==null){S.child.return=S,S=S.child;continue}if(S===r)break e;for(;S.sibling===null;){if(S.return===null||S.return===r)break e;k===S&&(k=null),S=S.return}k===S&&(k=null),S.sibling.return=S.return,S=S.sibling}}break;case 19:Er(t,r),Rr(r),o&4&&Wd(r);break;case 21:break;default:Er(t,r),Rr(r)}}function Rr(r){var t=r.flags;if(t&2){try{e:{for(var s=r.return;s!==null;){if(Rd(s)){var o=s;break e}s=s.return}throw Error(l(160))}switch(o.tag){case 5:var n=o.stateNode;o.flags&32&&(js(n,""),o.flags&=-33);var i=Fd(r);Ni(r,i,n);break;case 3:case 4:var d=o.stateNode.containerInfo,u=Fd(r);bi(r,u,d);break;default:throw Error(l(161))}}catch(h){Le(r,r.return,h)}r.flags&=-3}t&4096&&(r.flags&=-4097)}function Zh(r,t,s){H=r,Ud(r)}function Ud(r,t,s){for(var o=(r.mode&1)!==0;H!==null;){var n=H,i=n.child;if(n.tag===22&&o){var d=n.memoizedState!==null||aa;if(!d){var u=n.alternate,h=u!==null&&u.memoizedState!==null||Ke;u=aa;var j=Ke;if(aa=d,(Ke=h)&&!j)for(H=n;H!==null;)d=H,h=d.child,d.tag===22&&d.memoizedState!==null?Gd(n):h!==null?(h.return=d,H=h):Gd(n);for(;i!==null;)H=i,Ud(i),i=i.sibling;H=n,aa=u,Ke=j}$d(r)}else(n.subtreeFlags&8772)!==0&&i!==null?(i.return=n,H=i):$d(r)}}function $d(r){for(;H!==null;){var t=H;if((t.flags&8772)!==0){var s=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:Ke||na(5,t);break;case 1:var o=t.stateNode;if(t.flags&4&&!Ke)if(s===null)o.componentDidMount();else{var n=t.elementType===t.type?s.memoizedProps:zr(t.type,s.memoizedProps);o.componentDidUpdate(n,s.memoizedState,o.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&Vc(t,i,o);break;case 3:var d=t.updateQueue;if(d!==null){if(s=null,t.child!==null)switch(t.child.tag){case 5:s=t.child.stateNode;break;case 1:s=t.child.stateNode}Vc(t,d,s)}break;case 5:var u=t.stateNode;if(s===null&&t.flags&4){s=u;var h=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":h.autoFocus&&s.focus();break;case"img":h.src&&(s.src=h.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var j=t.alternate;if(j!==null){var k=j.memoizedState;if(k!==null){var S=k.dehydrated;S!==null&&Es(S)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(l(163))}Ke||t.flags&512&&ji(t)}catch(w){Le(t,t.return,w)}}if(t===r){H=null;break}if(s=t.sibling,s!==null){s.return=t.return,H=s;break}H=t.return}}function Vd(r){for(;H!==null;){var t=H;if(t===r){H=null;break}var s=t.sibling;if(s!==null){s.return=t.return,H=s;break}H=t.return}}function Gd(r){for(;H!==null;){var t=H;try{switch(t.tag){case 0:case 11:case 15:var s=t.return;try{na(4,t)}catch(h){Le(t,s,h)}break;case 1:var o=t.stateNode;if(typeof o.componentDidMount=="function"){var n=t.return;try{o.componentDidMount()}catch(h){Le(t,n,h)}}var i=t.return;try{ji(t)}catch(h){Le(t,i,h)}break;case 5:var d=t.return;try{ji(t)}catch(h){Le(t,d,h)}}}catch(h){Le(t,t.return,h)}if(t===r){H=null;break}var u=t.sibling;if(u!==null){u.return=t.return,H=u;break}H=t.return}}var ex=Math.ceil,ia=re.ReactCurrentDispatcher,wi=re.ReactCurrentOwner,br=re.ReactCurrentBatchConfig,he=0,Fe=null,Ee=null,$e=0,hr=0,ss=at(0),Oe=0,eo=null,Tt=0,la=0,ki=0,ro=null,or=null,Si=0,os=1/0,Yr=null,ca=!1,Ti=null,pt=null,da=!1,ut=null,pa=0,to=0,Ci=null,ua=-1,ha=0;function er(){return(he&6)!==0?ze():ua!==-1?ua:ua=ze()}function ht(r){return(r.mode&1)===0?1:(he&2)!==0&&$e!==0?$e&-$e:Oh.transition!==null?(ha===0&&(ha=Fl()),ha):(r=ye,r!==0||(r=window.event,r=r===void 0?16:ql(r.type)),r)}function Mr(r,t,s,o){if(50<to)throw to=0,Ci=null,Error(l(185));Ts(r,s,o),((he&2)===0||r!==Fe)&&(r===Fe&&((he&2)===0&&(la|=s),Oe===4&&xt(r,$e)),ar(r,o),s===1&&he===0&&(t.mode&1)===0&&(os=ze()+500,Wo&&it()))}function ar(r,t){var s=r.callbackNode;Ou(r,t);var o=No(r,r===Fe?$e:0);if(o===0)s!==null&&_l(s),r.callbackNode=null,r.callbackPriority=0;else if(t=o&-o,r.callbackPriority!==t){if(s!=null&&_l(s),t===1)r.tag===0?_h(qd.bind(null,r)):Bc(qd.bind(null,r)),Mh(function(){(he&6)===0&&it()}),s=null;else{switch(Al(o)){case 1:s=an;break;case 4:s=Ol;break;case 16:s=vo;break;case 536870912:s=Rl;break;default:s=vo}s=tp(s,Qd.bind(null,r))}r.callbackPriority=t,r.callbackNode=s}}function Qd(r,t){if(ua=-1,ha=0,(he&6)!==0)throw Error(l(327));var s=r.callbackNode;if(as()&&r.callbackNode!==s)return null;var o=No(r,r===Fe?$e:0);if(o===0)return null;if((o&30)!==0||(o&r.expiredLanes)!==0||t)t=xa(r,o);else{t=o;var n=he;he|=2;var i=Yd();(Fe!==r||$e!==t)&&(Yr=null,os=ze()+500,Lt(r,t));do try{sx();break}catch(u){Kd(r,u)}while(!0);Vn(),ia.current=i,he=n,Ee!==null?t=0:(Fe=null,$e=0,t=Oe)}if(t!==0){if(t===2&&(n=nn(r),n!==0&&(o=n,t=Li(r,n))),t===1)throw s=eo,Lt(r,0),xt(r,o),ar(r,ze()),s;if(t===6)xt(r,o);else{if(n=r.current.alternate,(o&30)===0&&!rx(n)&&(t=xa(r,o),t===2&&(i=nn(r),i!==0&&(o=i,t=Li(r,i))),t===1))throw s=eo,Lt(r,0),xt(r,o),ar(r,ze()),s;switch(r.finishedWork=n,r.finishedLanes=o,t){case 0:case 1:throw Error(l(345));case 2:zt(r,or,Yr);break;case 3:if(xt(r,o),(o&130023424)===o&&(t=Si+500-ze(),10<t)){if(No(r,0)!==0)break;if(n=r.suspendedLanes,(n&o)!==o){er(),r.pingedLanes|=r.suspendedLanes&n;break}r.timeoutHandle=Hn(zt.bind(null,r,or,Yr),t);break}zt(r,or,Yr);break;case 4:if(xt(r,o),(o&4194240)===o)break;for(t=r.eventTimes,n=-1;0<o;){var d=31-Tr(o);i=1<<d,d=t[d],d>n&&(n=d),o&=~i}if(o=n,o=ze()-o,o=(120>o?120:480>o?480:1080>o?1080:1920>o?1920:3e3>o?3e3:4320>o?4320:1960*ex(o/1960))-o,10<o){r.timeoutHandle=Hn(zt.bind(null,r,or,Yr),o);break}zt(r,or,Yr);break;case 5:zt(r,or,Yr);break;default:throw Error(l(329))}}}return ar(r,ze()),r.callbackNode===s?Qd.bind(null,r):null}function Li(r,t){var s=ro;return r.current.memoizedState.isDehydrated&&(Lt(r,t).flags|=256),r=xa(r,t),r!==2&&(t=or,or=s,t!==null&&zi(t)),r}function zi(r){or===null?or=r:or.push.apply(or,r)}function rx(r){for(var t=r;;){if(t.flags&16384){var s=t.updateQueue;if(s!==null&&(s=s.stores,s!==null))for(var o=0;o<s.length;o++){var n=s[o],i=n.getSnapshot;n=n.value;try{if(!Cr(i(),n))return!1}catch{return!1}}}if(s=t.child,t.subtreeFlags&16384&&s!==null)s.return=t,t=s;else{if(t===r)break;for(;t.sibling===null;){if(t.return===null||t.return===r)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function xt(r,t){for(t&=~ki,t&=~la,r.suspendedLanes|=t,r.pingedLanes&=~t,r=r.expirationTimes;0<t;){var s=31-Tr(t),o=1<<s;r[s]=-1,t&=~o}}function qd(r){if((he&6)!==0)throw Error(l(327));as();var t=No(r,0);if((t&1)===0)return ar(r,ze()),null;var s=xa(r,t);if(r.tag!==0&&s===2){var o=nn(r);o!==0&&(t=o,s=Li(r,o))}if(s===1)throw s=eo,Lt(r,0),xt(r,t),ar(r,ze()),s;if(s===6)throw Error(l(345));return r.finishedWork=r.current.alternate,r.finishedLanes=t,zt(r,or,Yr),ar(r,ze()),null}function Ii(r,t){var s=he;he|=1;try{return r(t)}finally{he=s,he===0&&(os=ze()+500,Wo&&it())}}function Ct(r){ut!==null&&ut.tag===0&&(he&6)===0&&as();var t=he;he|=1;var s=br.transition,o=ye;try{if(br.transition=null,ye=1,r)return r()}finally{ye=o,br.transition=s,he=t,(he&6)===0&&it()}}function Ei(){hr=ss.current,we(ss)}function Lt(r,t){r.finishedWork=null,r.finishedLanes=0;var s=r.timeoutHandle;if(s!==-1&&(r.timeoutHandle=-1,Eh(s)),Ee!==null)for(s=Ee.return;s!==null;){var o=s;switch(An(o),o.tag){case 1:o=o.type.childContextTypes,o!=null&&Fo();break;case 3:es(),we(rr),we(Ge),Zn();break;case 5:Jn(o);break;case 4:es();break;case 13:we(Te);break;case 19:we(Te);break;case 10:Gn(o.type._context);break;case 22:case 23:Ei()}s=s.return}if(Fe=r,Ee=r=mt(r.current,null),$e=hr=t,Oe=0,eo=null,ki=la=Tt=0,or=ro=null,wt!==null){for(t=0;t<wt.length;t++)if(s=wt[t],o=s.interleaved,o!==null){s.interleaved=null;var n=o.next,i=s.pending;if(i!==null){var d=i.next;i.next=n,o.next=d}s.pending=o}wt=null}return r}function Kd(r,t){do{var s=Ee;try{if(Vn(),Jo.current=ra,Xo){for(var o=Ce.memoizedState;o!==null;){var n=o.queue;n!==null&&(n.pending=null),o=o.next}Xo=!1}if(St=0,Re=_e=Ce=null,qs=!1,Ks=0,wi.current=null,s===null||s.return===null){Oe=1,eo=t,Ee=null;break}e:{var i=r,d=s.return,u=s,h=t;if(t=$e,u.flags|=32768,h!==null&&typeof h=="object"&&typeof h.then=="function"){var j=h,k=u,S=k.tag;if((k.mode&1)===0&&(S===0||S===11||S===15)){var w=k.alternate;w?(k.updateQueue=w.updateQueue,k.memoizedState=w.memoizedState,k.lanes=w.lanes):(k.updateQueue=null,k.memoizedState=null)}var M=jd(d);if(M!==null){M.flags&=-257,bd(M,d,u,i,t),M.mode&1&&yd(i,j,t),t=M,h=j;var _=t.updateQueue;if(_===null){var R=new Set;R.add(h),t.updateQueue=R}else _.add(h);break e}else{if((t&1)===0){yd(i,j,t),Mi();break e}h=Error(l(426))}}else if(Se&&u.mode&1){var Ie=jd(d);if(Ie!==null){(Ie.flags&65536)===0&&(Ie.flags|=256),bd(Ie,d,u,i,t),Un(rs(h,u));break e}}i=h=rs(h,u),Oe!==4&&(Oe=2),ro===null?ro=[i]:ro.push(i),i=d;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var v=gd(i,h,t);$c(i,v);break e;case 1:u=h;var x=i.type,y=i.stateNode;if((i.flags&128)===0&&(typeof x.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(pt===null||!pt.has(y)))){i.flags|=65536,t&=-t,i.lanes|=t;var C=vd(i,u,t);$c(i,C);break e}}i=i.return}while(i!==null)}Xd(s)}catch(A){t=A,Ee===s&&s!==null&&(Ee=s=s.return);continue}break}while(!0)}function Yd(){var r=ia.current;return ia.current=ra,r===null?ra:r}function Mi(){(Oe===0||Oe===3||Oe===2)&&(Oe=4),Fe===null||(Tt&268435455)===0&&(la&268435455)===0||xt(Fe,$e)}function xa(r,t){var s=he;he|=2;var o=Yd();(Fe!==r||$e!==t)&&(Yr=null,Lt(r,t));do try{tx();break}catch(n){Kd(r,n)}while(!0);if(Vn(),he=s,ia.current=o,Ee!==null)throw Error(l(261));return Fe=null,$e=0,Oe}function tx(){for(;Ee!==null;)Jd(Ee)}function sx(){for(;Ee!==null&&!Lu();)Jd(Ee)}function Jd(r){var t=rp(r.alternate,r,hr);r.memoizedProps=r.pendingProps,t===null?Xd(r):Ee=t,wi.current=null}function Xd(r){var t=r;do{var s=t.alternate;if(r=t.return,(t.flags&32768)===0){if(s=Kh(s,t,hr),s!==null){Ee=s;return}}else{if(s=Yh(s,t),s!==null){s.flags&=32767,Ee=s;return}if(r!==null)r.flags|=32768,r.subtreeFlags=0,r.deletions=null;else{Oe=6,Ee=null;return}}if(t=t.sibling,t!==null){Ee=t;return}Ee=t=r}while(t!==null);Oe===0&&(Oe=5)}function zt(r,t,s){var o=ye,n=br.transition;try{br.transition=null,ye=1,ox(r,t,s,o)}finally{br.transition=n,ye=o}return null}function ox(r,t,s,o){do as();while(ut!==null);if((he&6)!==0)throw Error(l(327));s=r.finishedWork;var n=r.finishedLanes;if(s===null)return null;if(r.finishedWork=null,r.finishedLanes=0,s===r.current)throw Error(l(177));r.callbackNode=null,r.callbackPriority=0;var i=s.lanes|s.childLanes;if(Ru(r,i),r===Fe&&(Ee=Fe=null,$e=0),(s.subtreeFlags&2064)===0&&(s.flags&2064)===0||da||(da=!0,tp(vo,function(){return as(),null})),i=(s.flags&15990)!==0,(s.subtreeFlags&15990)!==0||i){i=br.transition,br.transition=null;var d=ye;ye=1;var u=he;he|=4,wi.current=null,Xh(r,s),Dd(s,r),kh(Mn),So=!!En,Mn=En=null,r.current=s,Zh(s),zu(),he=u,ye=d,br.transition=i}else r.current=s;if(da&&(da=!1,ut=r,pa=n),i=r.pendingLanes,i===0&&(pt=null),Mu(s.stateNode),ar(r,ze()),t!==null)for(o=r.onRecoverableError,s=0;s<t.length;s++)n=t[s],o(n.value,{componentStack:n.stack,digest:n.digest});if(ca)throw ca=!1,r=Ti,Ti=null,r;return(pa&1)!==0&&r.tag!==0&&as(),i=r.pendingLanes,(i&1)!==0?r===Ci?to++:(to=0,Ci=r):to=0,it(),null}function as(){if(ut!==null){var r=Al(pa),t=br.transition,s=ye;try{if(br.transition=null,ye=16>r?16:r,ut===null)var o=!1;else{if(r=ut,ut=null,pa=0,(he&6)!==0)throw Error(l(331));var n=he;for(he|=4,H=r.current;H!==null;){var i=H,d=i.child;if((H.flags&16)!==0){var u=i.deletions;if(u!==null){for(var h=0;h<u.length;h++){var j=u[h];for(H=j;H!==null;){var k=H;switch(k.tag){case 0:case 11:case 15:Zs(8,k,i)}var S=k.child;if(S!==null)S.return=k,H=S;else for(;H!==null;){k=H;var w=k.sibling,M=k.return;if(Od(k),k===j){H=null;break}if(w!==null){w.return=M,H=w;break}H=M}}}var _=i.alternate;if(_!==null){var R=_.child;if(R!==null){_.child=null;do{var Ie=R.sibling;R.sibling=null,R=Ie}while(R!==null)}}H=i}}if((i.subtreeFlags&2064)!==0&&d!==null)d.return=i,H=d;else e:for(;H!==null;){if(i=H,(i.flags&2048)!==0)switch(i.tag){case 0:case 11:case 15:Zs(9,i,i.return)}var v=i.sibling;if(v!==null){v.return=i.return,H=v;break e}H=i.return}}var x=r.current;for(H=x;H!==null;){d=H;var y=d.child;if((d.subtreeFlags&2064)!==0&&y!==null)y.return=d,H=y;else e:for(d=x;H!==null;){if(u=H,(u.flags&2048)!==0)try{switch(u.tag){case 0:case 11:case 15:na(9,u)}}catch(A){Le(u,u.return,A)}if(u===d){H=null;break e}var C=u.sibling;if(C!==null){C.return=u.return,H=C;break e}H=u.return}}if(he=n,it(),Hr&&typeof Hr.onPostCommitFiberRoot=="function")try{Hr.onPostCommitFiberRoot(yo,r)}catch{}o=!0}return o}finally{ye=s,br.transition=t}}return!1}function Zd(r,t,s){t=rs(s,t),t=gd(r,t,1),r=ct(r,t,1),t=er(),r!==null&&(Ts(r,1,t),ar(r,t))}function Le(r,t,s){if(r.tag===3)Zd(r,r,s);else for(;t!==null;){if(t.tag===3){Zd(t,r,s);break}else if(t.tag===1){var o=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(pt===null||!pt.has(o))){r=rs(s,r),r=vd(t,r,1),t=ct(t,r,1),r=er(),t!==null&&(Ts(t,1,r),ar(t,r));break}}t=t.return}}function ax(r,t,s){var o=r.pingCache;o!==null&&o.delete(t),t=er(),r.pingedLanes|=r.suspendedLanes&s,Fe===r&&($e&s)===s&&(Oe===4||Oe===3&&($e&130023424)===$e&&500>ze()-Si?Lt(r,0):ki|=s),ar(r,t)}function ep(r,t){t===0&&((r.mode&1)===0?t=1:(t=bo,bo<<=1,(bo&130023424)===0&&(bo=4194304)));var s=er();r=Qr(r,t),r!==null&&(Ts(r,t,s),ar(r,s))}function nx(r){var t=r.memoizedState,s=0;t!==null&&(s=t.retryLane),ep(r,s)}function ix(r,t){var s=0;switch(r.tag){case 13:var o=r.stateNode,n=r.memoizedState;n!==null&&(s=n.retryLane);break;case 19:o=r.stateNode;break;default:throw Error(l(314))}o!==null&&o.delete(t),ep(r,s)}var rp;rp=function(r,t,s){if(r!==null)if(r.memoizedProps!==t.pendingProps||rr.current)sr=!0;else{if((r.lanes&s)===0&&(t.flags&128)===0)return sr=!1,qh(r,t,s);sr=(r.flags&131072)!==0}else sr=!1,Se&&(t.flags&1048576)!==0&&Hc(t,Uo,t.index);switch(t.lanes=0,t.tag){case 2:var o=t.type;oa(r,t),r=t.pendingProps;var n=Qt(t,Ge.current);Zt(t,s),n=ti(null,t,o,r,n,s);var i=si();return t.flags|=1,typeof n=="object"&&n!==null&&typeof n.render=="function"&&n.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,tr(o)?(i=!0,Ao(t)):i=!1,t.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,Kn(t),n.updater=ta,t.stateNode=n,n._reactInternals=t,ci(t,o,r,s),t=hi(null,t,o,!0,i,s)):(t.tag=0,Se&&i&&Fn(t),Ze(null,t,n,s),t=t.child),t;case 16:o=t.elementType;e:{switch(oa(r,t),r=t.pendingProps,n=o._init,o=n(o._payload),t.type=o,n=t.tag=cx(o),r=zr(o,r),n){case 0:t=ui(null,t,o,r,s);break e;case 1:t=Cd(null,t,o,r,s);break e;case 11:t=Nd(null,t,o,r,s);break e;case 14:t=wd(null,t,o,zr(o.type,r),s);break e}throw Error(l(306,o,""))}return t;case 0:return o=t.type,n=t.pendingProps,n=t.elementType===o?n:zr(o,n),ui(r,t,o,n,s);case 1:return o=t.type,n=t.pendingProps,n=t.elementType===o?n:zr(o,n),Cd(r,t,o,n,s);case 3:e:{if(Ld(t),r===null)throw Error(l(387));o=t.pendingProps,i=t.memoizedState,n=i.element,Uc(r,t),Ko(t,o,null,s);var d=t.memoizedState;if(o=d.element,i.isDehydrated)if(i={element:o,isDehydrated:!1,cache:d.cache,pendingSuspenseBoundaries:d.pendingSuspenseBoundaries,transitions:d.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){n=rs(Error(l(423)),t),t=zd(r,t,o,s,n);break e}else if(o!==n){n=rs(Error(l(424)),t),t=zd(r,t,o,s,n);break e}else for(ur=ot(t.stateNode.containerInfo.firstChild),pr=t,Se=!0,Lr=null,s=Wc(t,null,o,s),t.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling;else{if(Yt(),o===n){t=Kr(r,t,s);break e}Ze(r,t,o,s)}t=t.child}return t;case 5:return Gc(t),r===null&&Dn(t),o=t.type,n=t.pendingProps,i=r!==null?r.memoizedProps:null,d=n.children,Bn(o,n)?d=null:i!==null&&Bn(o,i)&&(t.flags|=32),Td(r,t),Ze(r,t,d,s),t.child;case 6:return r===null&&Dn(t),null;case 13:return Id(r,t,s);case 4:return Yn(t,t.stateNode.containerInfo),o=t.pendingProps,r===null?t.child=Jt(t,null,o,s):Ze(r,t,o,s),t.child;case 11:return o=t.type,n=t.pendingProps,n=t.elementType===o?n:zr(o,n),Nd(r,t,o,n,s);case 7:return Ze(r,t,t.pendingProps,s),t.child;case 8:return Ze(r,t,t.pendingProps.children,s),t.child;case 12:return Ze(r,t,t.pendingProps.children,s),t.child;case 10:e:{if(o=t.type._context,n=t.pendingProps,i=t.memoizedProps,d=n.value,be(Go,o._currentValue),o._currentValue=d,i!==null)if(Cr(i.value,d)){if(i.children===n.children&&!rr.current){t=Kr(r,t,s);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var u=i.dependencies;if(u!==null){d=i.child;for(var h=u.firstContext;h!==null;){if(h.context===o){if(i.tag===1){h=qr(-1,s&-s),h.tag=2;var j=i.updateQueue;if(j!==null){j=j.shared;var k=j.pending;k===null?h.next=h:(h.next=k.next,k.next=h),j.pending=h}}i.lanes|=s,h=i.alternate,h!==null&&(h.lanes|=s),Qn(i.return,s,t),u.lanes|=s;break}h=h.next}}else if(i.tag===10)d=i.type===t.type?null:i.child;else if(i.tag===18){if(d=i.return,d===null)throw Error(l(341));d.lanes|=s,u=d.alternate,u!==null&&(u.lanes|=s),Qn(d,s,t),d=i.sibling}else d=i.child;if(d!==null)d.return=i;else for(d=i;d!==null;){if(d===t){d=null;break}if(i=d.sibling,i!==null){i.return=d.return,d=i;break}d=d.return}i=d}Ze(r,t,n.children,s),t=t.child}return t;case 9:return n=t.type,o=t.pendingProps.children,Zt(t,s),n=yr(n),o=o(n),t.flags|=1,Ze(r,t,o,s),t.child;case 14:return o=t.type,n=zr(o,t.pendingProps),n=zr(o.type,n),wd(r,t,o,n,s);case 15:return kd(r,t,t.type,t.pendingProps,s);case 17:return o=t.type,n=t.pendingProps,n=t.elementType===o?n:zr(o,n),oa(r,t),t.tag=1,tr(o)?(r=!0,Ao(t)):r=!1,Zt(t,s),md(t,o,n),ci(t,o,n,s),hi(null,t,o,!0,r,s);case 19:return Md(r,t,s);case 22:return Sd(r,t,s)}throw Error(l(156,t.tag))};function tp(r,t){return Pl(r,t)}function lx(r,t,s,o){this.tag=r,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Nr(r,t,s,o){return new lx(r,t,s,o)}function Bi(r){return r=r.prototype,!(!r||!r.isReactComponent)}function cx(r){if(typeof r=="function")return Bi(r)?1:0;if(r!=null){if(r=r.$$typeof,r===mr)return 11;if(r===fr)return 14}return 2}function mt(r,t){var s=r.alternate;return s===null?(s=Nr(r.tag,t,r.key,r.mode),s.elementType=r.elementType,s.type=r.type,s.stateNode=r.stateNode,s.alternate=r,r.alternate=s):(s.pendingProps=t,s.type=r.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=r.flags&14680064,s.childLanes=r.childLanes,s.lanes=r.lanes,s.child=r.child,s.memoizedProps=r.memoizedProps,s.memoizedState=r.memoizedState,s.updateQueue=r.updateQueue,t=r.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},s.sibling=r.sibling,s.index=r.index,s.ref=r.ref,s}function ma(r,t,s,o,n,i){var d=2;if(o=r,typeof r=="function")Bi(r)&&(d=1);else if(typeof r=="string")d=5;else e:switch(r){case q:return It(s.children,n,i,t);case Pe:d=8,n|=8;break;case lr:return r=Nr(12,s,t,n|2),r.elementType=lr,r.lanes=i,r;case Xe:return r=Nr(13,s,t,n),r.elementType=Xe,r.lanes=i,r;case cr:return r=Nr(19,s,t,n),r.elementType=cr,r.lanes=i,r;case je:return fa(s,n,i,t);default:if(typeof r=="object"&&r!==null)switch(r.$$typeof){case kr:d=10;break e;case Wr:d=9;break e;case mr:d=11;break e;case fr:d=14;break e;case Ve:d=16,o=null;break e}throw Error(l(130,r==null?r:typeof r,""))}return t=Nr(d,s,t,n),t.elementType=r,t.type=o,t.lanes=i,t}function It(r,t,s,o){return r=Nr(7,r,o,t),r.lanes=s,r}function fa(r,t,s,o){return r=Nr(22,r,o,t),r.elementType=je,r.lanes=s,r.stateNode={isHidden:!1},r}function Hi(r,t,s){return r=Nr(6,r,null,t),r.lanes=s,r}function Pi(r,t,s){return t=Nr(4,r.children!==null?r.children:[],r.key,t),t.lanes=s,t.stateNode={containerInfo:r.containerInfo,pendingChildren:null,implementation:r.implementation},t}function dx(r,t,s,o,n){this.tag=t,this.containerInfo=r,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ln(0),this.expirationTimes=ln(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ln(0),this.identifierPrefix=o,this.onRecoverableError=n,this.mutableSourceEagerHydrationData=null}function _i(r,t,s,o,n,i,d,u,h){return r=new dx(r,t,s,u,h),t===1?(t=1,i===!0&&(t|=8)):t=0,i=Nr(3,null,null,t),r.current=i,i.stateNode=r,i.memoizedState={element:o,isDehydrated:s,cache:null,transitions:null,pendingSuspenseBoundaries:null},Kn(i),r}function px(r,t,s){var o=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:X,key:o==null?null:""+o,children:r,containerInfo:t,implementation:s}}function sp(r){if(!r)return nt;r=r._reactInternals;e:{if(vt(r)!==r||r.tag!==1)throw Error(l(170));var t=r;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(tr(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(l(171))}if(r.tag===1){var s=r.type;if(tr(s))return Ec(r,s,t)}return t}function op(r,t,s,o,n,i,d,u,h){return r=_i(s,o,!0,r,n,i,d,u,h),r.context=sp(null),s=r.current,o=er(),n=ht(s),i=qr(o,n),i.callback=t!=null?t:null,ct(s,i,n),r.current.lanes=n,Ts(r,n,o),ar(r,o),r}function ga(r,t,s,o){var n=t.current,i=er(),d=ht(n);return s=sp(s),t.context===null?t.context=s:t.pendingContext=s,t=qr(i,d),t.payload={element:r},o=o===void 0?null:o,o!==null&&(t.callback=o),r=ct(n,t,d),r!==null&&(Mr(r,n,d,i),qo(r,n,d)),d}function va(r){if(r=r.current,!r.child)return null;switch(r.child.tag){case 5:return r.child.stateNode;default:return r.child.stateNode}}function ap(r,t){if(r=r.memoizedState,r!==null&&r.dehydrated!==null){var s=r.retryLane;r.retryLane=s!==0&&s<t?s:t}}function Oi(r,t){ap(r,t),(r=r.alternate)&&ap(r,t)}function ux(){return null}var np=typeof reportError=="function"?reportError:function(r){console.error(r)};function Ri(r){this._internalRoot=r}ya.prototype.render=Ri.prototype.render=function(r){var t=this._internalRoot;if(t===null)throw Error(l(409));ga(r,t,null,null)},ya.prototype.unmount=Ri.prototype.unmount=function(){var r=this._internalRoot;if(r!==null){this._internalRoot=null;var t=r.containerInfo;Ct(function(){ga(null,r,null,null)}),t[Ur]=null}};function ya(r){this._internalRoot=r}ya.prototype.unstable_scheduleHydration=function(r){if(r){var t=Ul();r={blockedOn:null,target:r,priority:t};for(var s=0;s<rt.length&&t!==0&&t<rt[s].priority;s++);rt.splice(s,0,r),s===0&&Gl(r)}};function Fi(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11)}function ja(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11&&(r.nodeType!==8||r.nodeValue!==" react-mount-point-unstable "))}function ip(){}function hx(r,t,s,o,n){if(n){if(typeof o=="function"){var i=o;o=function(){var j=va(d);i.call(j)}}var d=op(t,o,r,0,null,!1,!1,"",ip);return r._reactRootContainer=d,r[Ur]=d.current,As(r.nodeType===8?r.parentNode:r),Ct(),d}for(;n=r.lastChild;)r.removeChild(n);if(typeof o=="function"){var u=o;o=function(){var j=va(h);u.call(j)}}var h=_i(r,0,!1,null,null,!1,!1,"",ip);return r._reactRootContainer=h,r[Ur]=h.current,As(r.nodeType===8?r.parentNode:r),Ct(function(){ga(t,h,s,o)}),h}function ba(r,t,s,o,n){var i=s._reactRootContainer;if(i){var d=i;if(typeof n=="function"){var u=n;n=function(){var h=va(d);u.call(h)}}ga(t,d,r,n)}else d=hx(s,t,r,n,o);return va(d)}Wl=function(r){switch(r.tag){case 3:var t=r.stateNode;if(t.current.memoizedState.isDehydrated){var s=Ss(t.pendingLanes);s!==0&&(cn(t,s|1),ar(t,ze()),(he&6)===0&&(os=ze()+500,it()))}break;case 13:Ct(function(){var o=Qr(r,1);if(o!==null){var n=er();Mr(o,r,1,n)}}),Oi(r,1)}},dn=function(r){if(r.tag===13){var t=Qr(r,134217728);if(t!==null){var s=er();Mr(t,r,134217728,s)}Oi(r,134217728)}},Dl=function(r){if(r.tag===13){var t=ht(r),s=Qr(r,t);if(s!==null){var o=er();Mr(s,r,t,o)}Oi(r,t)}},Ul=function(){return ye},$l=function(r,t){var s=ye;try{return ye=r,t()}finally{ye=s}},rn=function(r,t,s){switch(t){case"input":if(Qa(r,s),t=s.name,s.type==="radio"&&t!=null){for(s=r;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<s.length;t++){var o=s[t];if(o!==r&&o.form===r.form){var n=Ro(o);if(!n)throw Error(l(90));Sr(o),Qa(o,n)}}}break;case"textarea":yl(r,s);break;case"select":t=s.value,t!=null&&Pt(r,!!s.multiple,t,!1)}},Ll=Ii,zl=Ct;var xx={usingClientEntryPoint:!1,Events:[Us,Vt,Ro,Tl,Cl,Ii]},so={findFiberByHostInstance:yt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},mx={bundleType:so.bundleType,version:so.version,rendererPackageName:so.rendererPackageName,rendererConfig:so.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:re.ReactCurrentDispatcher,findHostInstanceByFiber:function(r){return r=Bl(r),r===null?null:r.stateNode},findFiberByHostInstance:so.findFiberByHostInstance||ux,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__!="undefined"){var Na=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Na.isDisabled&&Na.supportsFiber)try{yo=Na.inject(mx),Hr=Na}catch{}}return nr.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=xx,nr.createPortal=function(r,t){var s=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Fi(t))throw Error(l(200));return px(r,t,null,s)},nr.createRoot=function(r,t){if(!Fi(r))throw Error(l(299));var s=!1,o="",n=np;return t!=null&&(t.unstable_strictMode===!0&&(s=!0),t.identifierPrefix!==void 0&&(o=t.identifierPrefix),t.onRecoverableError!==void 0&&(n=t.onRecoverableError)),t=_i(r,1,!1,null,null,s,!1,o,n),r[Ur]=t.current,As(r.nodeType===8?r.parentNode:r),new Ri(t)},nr.findDOMNode=function(r){if(r==null)return null;if(r.nodeType===1)return r;var t=r._reactInternals;if(t===void 0)throw typeof r.render=="function"?Error(l(188)):(r=Object.keys(r).join(","),Error(l(268,r)));return r=Bl(t),r=r===null?null:r.stateNode,r},nr.flushSync=function(r){return Ct(r)},nr.hydrate=function(r,t,s){if(!ja(t))throw Error(l(200));return ba(null,r,t,!0,s)},nr.hydrateRoot=function(r,t,s){if(!Fi(r))throw Error(l(405));var o=s!=null&&s.hydratedSources||null,n=!1,i="",d=np;if(s!=null&&(s.unstable_strictMode===!0&&(n=!0),s.identifierPrefix!==void 0&&(i=s.identifierPrefix),s.onRecoverableError!==void 0&&(d=s.onRecoverableError)),t=op(t,null,r,1,s!=null?s:null,n,!1,i,d),r[Ur]=t.current,As(r),o)for(r=0;r<o.length;r++)s=o[r],n=s._getVersion,n=n(s._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[s,n]:t.mutableSourceEagerHydrationData.push(s,n);return new ya(t)},nr.render=function(r,t,s){if(!ja(t))throw Error(l(200));return ba(null,r,t,!1,s)},nr.unmountComponentAtNode=function(r){if(!ja(r))throw Error(l(40));return r._reactRootContainer?(Ct(function(){ba(null,null,r,!1,function(){r._reactRootContainer=null,r[Ur]=null})}),!0):!1},nr.unstable_batchedUpdates=Ii,nr.unstable_renderSubtreeIntoContainer=function(r,t,s,o){if(!ja(s))throw Error(l(200));if(r==null||r._reactInternals===void 0)throw Error(l(38));return ba(r,t,s,!1,o)},nr.version="18.3.1-next-f1338f8080-20240426",nr}var mp;function kx(){if(mp)return Di.exports;mp=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__=="undefined"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(c){console.error(c)}}return a(),Di.exports=wx(),Di.exports}var fp;function Sx(){if(fp)return wa;fp=1;var a=kx();return wa.createRoot=a.createRoot,wa.hydrateRoot=a.hydrateRoot,wa}var Tx=Sx(),B=nl();const Ye=gx(B);var ir=function(){return ir=Object.assign||function(c){for(var l,p=1,m=arguments.length;p<m;p++){l=arguments[p];for(var f in l)Object.prototype.hasOwnProperty.call(l,f)&&(c[f]=l[f])}return c},ir.apply(this,arguments)};function Ma(a,c,l){if(l||arguments.length===2)for(var p=0,m=c.length,f;p<m;p++)(f||!(p in c))&&(f||(f=Array.prototype.slice.call(c,0,p)),f[p]=c[p]);return a.concat(f||Array.prototype.slice.call(c))}var ke="-ms-",no="-moz-",ve="-webkit-",Fp="comm",Fa="rule",il="decl",Cx="@import",Ap="@keyframes",Lx="@layer",Wp=Math.abs,ll=String.fromCharCode,Ji=Object.assign;function zx(a,c){return We(a,0)^45?(((c<<2^We(a,0))<<2^We(a,1))<<2^We(a,2))<<2^We(a,3):0}function Dp(a){return a.trim()}function Jr(a,c){return(a=c.exec(a))?a[0]:a}function oe(a,c,l){return a.replace(c,l)}function Ca(a,c,l){return a.indexOf(c,l)}function We(a,c){return a.charCodeAt(c)|0}function ds(a,c,l){return a.slice(c,l)}function Ar(a){return a.length}function Up(a){return a.length}function ao(a,c){return c.push(a),a}function Ix(a,c){return a.map(c).join("")}function gp(a,c){return a.filter(function(l){return!Jr(l,c)})}var Aa=1,ps=1,$p=0,wr=0,Be=0,vs="";function Wa(a,c,l,p,m,f,b,L){return{value:a,root:c,parent:l,type:p,props:m,children:f,line:Aa,column:ps,length:b,return:"",siblings:L}}function gt(a,c){return Ji(Wa("",null,null,"",null,null,0,a.siblings),a,{length:-a.length},c)}function ns(a){for(;a.root;)a=gt(a.root,{children:[a]});ao(a,a.siblings)}function Ex(){return Be}function Mx(){return Be=wr>0?We(vs,--wr):0,ps--,Be===10&&(ps=1,Aa--),Be}function Br(){return Be=wr<$p?We(vs,wr++):0,ps++,Be===10&&(ps=1,Aa++),Be}function Mt(){return We(vs,wr)}function La(){return wr}function Da(a,c){return ds(vs,a,c)}function Xi(a){switch(a){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Bx(a){return Aa=ps=1,$p=Ar(vs=a),wr=0,[]}function Hx(a){return vs="",a}function Vi(a){return Dp(Da(wr-1,Zi(a===91?a+2:a===40?a+1:a)))}function Px(a){for(;(Be=Mt())&&Be<33;)Br();return Xi(a)>2||Xi(Be)>3?"":" "}function _x(a,c){for(;--c&&Br()&&!(Be<48||Be>102||Be>57&&Be<65||Be>70&&Be<97););return Da(a,La()+(c<6&&Mt()==32&&Br()==32))}function Zi(a){for(;Br();)switch(Be){case a:return wr;case 34:case 39:a!==34&&a!==39&&Zi(Be);break;case 40:a===41&&Zi(a);break;case 92:Br();break}return wr}function Ox(a,c){for(;Br()&&a+Be!==57;)if(a+Be===84&&Mt()===47)break;return"/*"+Da(c,wr-1)+"*"+ll(a===47?a:Br())}function Rx(a){for(;!Xi(Mt());)Br();return Da(a,wr)}function Fx(a){return Hx(za("",null,null,null,[""],a=Bx(a),0,[0],a))}function za(a,c,l,p,m,f,b,L,T){for(var F=0,W=0,O=b,P=0,U=0,ae=0,K=1,$=1,ne=1,ee=0,J="",re=m,fe=f,X=p,q=J;$;)switch(ae=ee,ee=Br()){case 40:if(ae!=108&&We(q,O-1)==58){Ca(q+=oe(Vi(ee),"&","&\f"),"&\f",Wp(F?L[F-1]:0))!=-1&&(ne=-1);break}case 34:case 39:case 91:q+=Vi(ee);break;case 9:case 10:case 13:case 32:q+=Px(ae);break;case 92:q+=_x(La()-1,7);continue;case 47:switch(Mt()){case 42:case 47:ao(Ax(Ox(Br(),La()),c,l,T),T);break;default:q+="/"}break;case 123*K:L[F++]=Ar(q)*ne;case 125*K:case 59:case 0:switch(ee){case 0:case 125:$=0;case 59+W:ne==-1&&(q=oe(q,/\f/g,"")),U>0&&Ar(q)-O&&ao(U>32?yp(q+";",p,l,O-1,T):yp(oe(q," ","")+";",p,l,O-2,T),T);break;case 59:q+=";";default:if(ao(X=vp(q,c,l,F,W,m,L,J,re=[],fe=[],O,f),f),ee===123)if(W===0)za(q,c,X,X,re,f,O,L,fe);else switch(P===99&&We(q,3)===110?100:P){case 100:case 108:case 109:case 115:za(a,X,X,p&&ao(vp(a,X,X,0,0,m,L,J,m,re=[],O,fe),fe),m,fe,O,L,p?re:fe);break;default:za(q,X,X,X,[""],fe,0,L,fe)}}F=W=U=0,K=ne=1,J=q="",O=b;break;case 58:O=1+Ar(q),U=ae;default:if(K<1){if(ee==123)--K;else if(ee==125&&K++==0&&Mx()==125)continue}switch(q+=ll(ee),ee*K){case 38:ne=W>0?1:(q+="\f",-1);break;case 44:L[F++]=(Ar(q)-1)*ne,ne=1;break;case 64:Mt()===45&&(q+=Vi(Br())),P=Mt(),W=O=Ar(J=q+=Rx(La())),ee++;break;case 45:ae===45&&Ar(q)==2&&(K=0)}}return f}function vp(a,c,l,p,m,f,b,L,T,F,W,O){for(var P=m-1,U=m===0?f:[""],ae=Up(U),K=0,$=0,ne=0;K<p;++K)for(var ee=0,J=ds(a,P+1,P=Wp($=b[K])),re=a;ee<ae;++ee)(re=Dp($>0?U[ee]+" "+J:oe(J,/&\f/g,U[ee])))&&(T[ne++]=re);return Wa(a,c,l,m===0?Fa:L,T,F,W,O)}function Ax(a,c,l,p){return Wa(a,c,l,Fp,ll(Ex()),ds(a,2,-2),0,p)}function yp(a,c,l,p,m){return Wa(a,c,l,il,ds(a,0,p),ds(a,p+1,-1),p,m)}function Vp(a,c,l){switch(zx(a,c)){case 5103:return ve+"print-"+a+a;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return ve+a+a;case 4789:return no+a+a;case 5349:case 4246:case 4810:case 6968:case 2756:return ve+a+no+a+ke+a+a;case 5936:switch(We(a,c+11)){case 114:return ve+a+ke+oe(a,/[svh]\w+-[tblr]{2}/,"tb")+a;case 108:return ve+a+ke+oe(a,/[svh]\w+-[tblr]{2}/,"tb-rl")+a;case 45:return ve+a+ke+oe(a,/[svh]\w+-[tblr]{2}/,"lr")+a}case 6828:case 4268:case 2903:return ve+a+ke+a+a;case 6165:return ve+a+ke+"flex-"+a+a;case 5187:return ve+a+oe(a,/(\w+).+(:[^]+)/,ve+"box-$1$2"+ke+"flex-$1$2")+a;case 5443:return ve+a+ke+"flex-item-"+oe(a,/flex-|-self/g,"")+(Jr(a,/flex-|baseline/)?"":ke+"grid-row-"+oe(a,/flex-|-self/g,""))+a;case 4675:return ve+a+ke+"flex-line-pack"+oe(a,/align-content|flex-|-self/g,"")+a;case 5548:return ve+a+ke+oe(a,"shrink","negative")+a;case 5292:return ve+a+ke+oe(a,"basis","preferred-size")+a;case 6060:return ve+"box-"+oe(a,"-grow","")+ve+a+ke+oe(a,"grow","positive")+a;case 4554:return ve+oe(a,/([^-])(transform)/g,"$1"+ve+"$2")+a;case 6187:return oe(oe(oe(a,/(zoom-|grab)/,ve+"$1"),/(image-set)/,ve+"$1"),a,"")+a;case 5495:case 3959:return oe(a,/(image-set\([^]*)/,ve+"$1$`$1");case 4968:return oe(oe(a,/(.+:)(flex-)?(.*)/,ve+"box-pack:$3"+ke+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+ve+a+a;case 4200:if(!Jr(a,/flex-|baseline/))return ke+"grid-column-align"+ds(a,c)+a;break;case 2592:case 3360:return ke+oe(a,"template-","")+a;case 4384:case 3616:return l&&l.some(function(p,m){return c=m,Jr(p.props,/grid-\w+-end/)})?~Ca(a+(l=l[c].value),"span",0)?a:ke+oe(a,"-start","")+a+ke+"grid-row-span:"+(~Ca(l,"span",0)?Jr(l,/\d+/):+Jr(l,/\d+/)-+Jr(a,/\d+/))+";":ke+oe(a,"-start","")+a;case 4896:case 4128:return l&&l.some(function(p){return Jr(p.props,/grid-\w+-start/)})?a:ke+oe(oe(a,"-end","-span"),"span ","")+a;case 4095:case 3583:case 4068:case 2532:return oe(a,/(.+)-inline(.+)/,ve+"$1$2")+a;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Ar(a)-1-c>6)switch(We(a,c+1)){case 109:if(We(a,c+4)!==45)break;case 102:return oe(a,/(.+:)(.+)-([^]+)/,"$1"+ve+"$2-$3$1"+no+(We(a,c+3)==108?"$3":"$2-$3"))+a;case 115:return~Ca(a,"stretch",0)?Vp(oe(a,"stretch","fill-available"),c,l)+a:a}break;case 5152:case 5920:return oe(a,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(p,m,f,b,L,T,F){return ke+m+":"+f+F+(b?ke+m+"-span:"+(L?T:+T-+f)+F:"")+a});case 4949:if(We(a,c+6)===121)return oe(a,":",":"+ve)+a;break;case 6444:switch(We(a,We(a,14)===45?18:11)){case 120:return oe(a,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+ve+(We(a,14)===45?"inline-":"")+"box$3$1"+ve+"$2$3$1"+ke+"$2box$3")+a;case 100:return oe(a,":",":"+ke)+a}break;case 5719:case 2647:case 2135:case 3927:case 2391:return oe(a,"scroll-","scroll-snap-")+a}return a}function Ba(a,c){for(var l="",p=0;p<a.length;p++)l+=c(a[p],p,a,c)||"";return l}function Wx(a,c,l,p){switch(a.type){case Lx:if(a.children.length)break;case Cx:case il:return a.return=a.return||a.value;case Fp:return"";case Ap:return a.return=a.value+"{"+Ba(a.children,p)+"}";case Fa:if(!Ar(a.value=a.props.join(",")))return""}return Ar(l=Ba(a.children,p))?a.return=a.value+"{"+l+"}":""}function Dx(a){var c=Up(a);return function(l,p,m,f){for(var b="",L=0;L<c;L++)b+=a[L](l,p,m,f)||"";return b}}function Ux(a){return function(c){c.root||(c=c.return)&&a(c)}}function $x(a,c,l,p){if(a.length>-1&&!a.return)switch(a.type){case il:a.return=Vp(a.value,a.length,l);return;case Ap:return Ba([gt(a,{value:oe(a.value,"@","@"+ve)})],p);case Fa:if(a.length)return Ix(l=a.props,function(m){switch(Jr(m,p=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":ns(gt(a,{props:[oe(m,/:(read-\w+)/,":"+no+"$1")]})),ns(gt(a,{props:[m]})),Ji(a,{props:gp(l,p)});break;case"::placeholder":ns(gt(a,{props:[oe(m,/:(plac\w+)/,":"+ve+"input-$1")]})),ns(gt(a,{props:[oe(m,/:(plac\w+)/,":"+no+"$1")]})),ns(gt(a,{props:[oe(m,/:(plac\w+)/,ke+"input-$1")]})),ns(gt(a,{props:[m]})),Ji(a,{props:gp(l,p)});break}return""})}}var Vx={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},xr={},us=typeof process!="undefined"&&xr!==void 0&&(xr.REACT_APP_SC_ATTR||xr.SC_ATTR)||"data-styled",Gp="active",Qp="data-styled-version",Ua="6.1.18",cl=`/*!sc*/
`,Ha=typeof window!="undefined"&&typeof document!="undefined",Gx=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process!="undefined"&&xr!==void 0&&xr.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&xr.REACT_APP_SC_DISABLE_SPEEDY!==""?xr.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&xr.REACT_APP_SC_DISABLE_SPEEDY:typeof process!="undefined"&&xr!==void 0&&xr.SC_DISABLE_SPEEDY!==void 0&&xr.SC_DISABLE_SPEEDY!==""&&xr.SC_DISABLE_SPEEDY!=="false"&&xr.SC_DISABLE_SPEEDY),$a=Object.freeze([]),hs=Object.freeze({});function Qx(a,c,l){return l===void 0&&(l=hs),a.theme!==l.theme&&a.theme||c||l.theme}var qp=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),qx=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Kx=/(^-|-$)/g;function jp(a){return a.replace(qx,"-").replace(Kx,"")}var Yx=/(a)(d)/gi,ka=52,bp=function(a){return String.fromCharCode(a+(a>25?39:97))};function el(a){var c,l="";for(c=Math.abs(a);c>ka;c=c/ka|0)l=bp(c%ka)+l;return(bp(c%ka)+l).replace(Yx,"$1-$2")}var Gi,Kp=5381,ls=function(a,c){for(var l=c.length;l;)a=33*a^c.charCodeAt(--l);return a},Yp=function(a){return ls(Kp,a)};function Jx(a){return el(Yp(a)>>>0)}function Xx(a){return a.displayName||a.name||"Component"}function Qi(a){return typeof a=="string"&&!0}var Jp=typeof Symbol=="function"&&Symbol.for,Xp=Jp?Symbol.for("react.memo"):60115,Zx=Jp?Symbol.for("react.forward_ref"):60112,em={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},rm={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Zp={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},tm=((Gi={})[Zx]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Gi[Xp]=Zp,Gi);function Np(a){return("type"in(c=a)&&c.type.$$typeof)===Xp?Zp:"$$typeof"in a?tm[a.$$typeof]:em;var c}var sm=Object.defineProperty,om=Object.getOwnPropertyNames,wp=Object.getOwnPropertySymbols,am=Object.getOwnPropertyDescriptor,nm=Object.getPrototypeOf,kp=Object.prototype;function eu(a,c,l){if(typeof c!="string"){if(kp){var p=nm(c);p&&p!==kp&&eu(a,p,l)}var m=om(c);wp&&(m=m.concat(wp(c)));for(var f=Np(a),b=Np(c),L=0;L<m.length;++L){var T=m[L];if(!(T in rm||l&&l[T]||b&&T in b||f&&T in f)){var F=am(c,T);try{sm(a,T,F)}catch{}}}}return a}function xs(a){return typeof a=="function"}function dl(a){return typeof a=="object"&&"styledComponentId"in a}function Et(a,c){return a&&c?"".concat(a," ").concat(c):a||c||""}function Sp(a,c){if(a.length===0)return"";for(var l=a[0],p=1;p<a.length;p++)l+=a[p];return l}function lo(a){return a!==null&&typeof a=="object"&&a.constructor.name===Object.name&&!("props"in a&&a.$$typeof)}function rl(a,c,l){if(l===void 0&&(l=!1),!l&&!lo(a)&&!Array.isArray(a))return c;if(Array.isArray(c))for(var p=0;p<c.length;p++)a[p]=rl(a[p],c[p]);else if(lo(c))for(var p in c)a[p]=rl(a[p],c[p]);return a}function pl(a,c){Object.defineProperty(a,"toString",{value:c})}function po(a){for(var c=[],l=1;l<arguments.length;l++)c[l-1]=arguments[l];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(a," for more information.").concat(c.length>0?" Args: ".concat(c.join(", ")):""))}var im=(function(){function a(c){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=c}return a.prototype.indexOfGroup=function(c){for(var l=0,p=0;p<c;p++)l+=this.groupSizes[p];return l},a.prototype.insertRules=function(c,l){if(c>=this.groupSizes.length){for(var p=this.groupSizes,m=p.length,f=m;c>=f;)if((f<<=1)<0)throw po(16,"".concat(c));this.groupSizes=new Uint32Array(f),this.groupSizes.set(p),this.length=f;for(var b=m;b<f;b++)this.groupSizes[b]=0}for(var L=this.indexOfGroup(c+1),T=(b=0,l.length);b<T;b++)this.tag.insertRule(L,l[b])&&(this.groupSizes[c]++,L++)},a.prototype.clearGroup=function(c){if(c<this.length){var l=this.groupSizes[c],p=this.indexOfGroup(c),m=p+l;this.groupSizes[c]=0;for(var f=p;f<m;f++)this.tag.deleteRule(p)}},a.prototype.getGroup=function(c){var l="";if(c>=this.length||this.groupSizes[c]===0)return l;for(var p=this.groupSizes[c],m=this.indexOfGroup(c),f=m+p,b=m;b<f;b++)l+="".concat(this.tag.getRule(b)).concat(cl);return l},a})(),Ia=new Map,Pa=new Map,Ea=1,Sa=function(a){if(Ia.has(a))return Ia.get(a);for(;Pa.has(Ea);)Ea++;var c=Ea++;return Ia.set(a,c),Pa.set(c,a),c},lm=function(a,c){Ea=c+1,Ia.set(a,c),Pa.set(c,a)},cm="style[".concat(us,"][").concat(Qp,'="').concat(Ua,'"]'),dm=new RegExp("^".concat(us,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),pm=function(a,c,l){for(var p,m=l.split(","),f=0,b=m.length;f<b;f++)(p=m[f])&&a.registerName(c,p)},um=function(a,c){for(var l,p=((l=c.textContent)!==null&&l!==void 0?l:"").split(cl),m=[],f=0,b=p.length;f<b;f++){var L=p[f].trim();if(L){var T=L.match(dm);if(T){var F=0|parseInt(T[1],10),W=T[2];F!==0&&(lm(W,F),pm(a,W,T[3]),a.getTag().insertRules(F,m)),m.length=0}else m.push(L)}}},Tp=function(a){for(var c=document.querySelectorAll(cm),l=0,p=c.length;l<p;l++){var m=c[l];m&&m.getAttribute(us)!==Gp&&(um(a,m),m.parentNode&&m.parentNode.removeChild(m))}};function hm(){return typeof __webpack_nonce__!="undefined"?__webpack_nonce__:null}var ru=function(a){var c=document.head,l=a||c,p=document.createElement("style"),m=(function(L){var T=Array.from(L.querySelectorAll("style[".concat(us,"]")));return T[T.length-1]})(l),f=m!==void 0?m.nextSibling:null;p.setAttribute(us,Gp),p.setAttribute(Qp,Ua);var b=hm();return b&&p.setAttribute("nonce",b),l.insertBefore(p,f),p},xm=(function(){function a(c){this.element=ru(c),this.element.appendChild(document.createTextNode("")),this.sheet=(function(l){if(l.sheet)return l.sheet;for(var p=document.styleSheets,m=0,f=p.length;m<f;m++){var b=p[m];if(b.ownerNode===l)return b}throw po(17)})(this.element),this.length=0}return a.prototype.insertRule=function(c,l){try{return this.sheet.insertRule(l,c),this.length++,!0}catch{return!1}},a.prototype.deleteRule=function(c){this.sheet.deleteRule(c),this.length--},a.prototype.getRule=function(c){var l=this.sheet.cssRules[c];return l&&l.cssText?l.cssText:""},a})(),mm=(function(){function a(c){this.element=ru(c),this.nodes=this.element.childNodes,this.length=0}return a.prototype.insertRule=function(c,l){if(c<=this.length&&c>=0){var p=document.createTextNode(l);return this.element.insertBefore(p,this.nodes[c]||null),this.length++,!0}return!1},a.prototype.deleteRule=function(c){this.element.removeChild(this.nodes[c]),this.length--},a.prototype.getRule=function(c){return c<this.length?this.nodes[c].textContent:""},a})(),fm=(function(){function a(c){this.rules=[],this.length=0}return a.prototype.insertRule=function(c,l){return c<=this.length&&(this.rules.splice(c,0,l),this.length++,!0)},a.prototype.deleteRule=function(c){this.rules.splice(c,1),this.length--},a.prototype.getRule=function(c){return c<this.length?this.rules[c]:""},a})(),Cp=Ha,gm={isServer:!Ha,useCSSOMInjection:!Gx},tu=(function(){function a(c,l,p){c===void 0&&(c=hs),l===void 0&&(l={});var m=this;this.options=ir(ir({},gm),c),this.gs=l,this.names=new Map(p),this.server=!!c.isServer,!this.server&&Ha&&Cp&&(Cp=!1,Tp(this)),pl(this,function(){return(function(f){for(var b=f.getTag(),L=b.length,T="",F=function(O){var P=(function(ne){return Pa.get(ne)})(O);if(P===void 0)return"continue";var U=f.names.get(P),ae=b.getGroup(O);if(U===void 0||!U.size||ae.length===0)return"continue";var K="".concat(us,".g").concat(O,'[id="').concat(P,'"]'),$="";U!==void 0&&U.forEach(function(ne){ne.length>0&&($+="".concat(ne,","))}),T+="".concat(ae).concat(K,'{content:"').concat($,'"}').concat(cl)},W=0;W<L;W++)F(W);return T})(m)})}return a.registerId=function(c){return Sa(c)},a.prototype.rehydrate=function(){!this.server&&Ha&&Tp(this)},a.prototype.reconstructWithOptions=function(c,l){return l===void 0&&(l=!0),new a(ir(ir({},this.options),c),this.gs,l&&this.names||void 0)},a.prototype.allocateGSInstance=function(c){return this.gs[c]=(this.gs[c]||0)+1},a.prototype.getTag=function(){return this.tag||(this.tag=(c=(function(l){var p=l.useCSSOMInjection,m=l.target;return l.isServer?new fm(m):p?new xm(m):new mm(m)})(this.options),new im(c)));var c},a.prototype.hasNameForId=function(c,l){return this.names.has(c)&&this.names.get(c).has(l)},a.prototype.registerName=function(c,l){if(Sa(c),this.names.has(c))this.names.get(c).add(l);else{var p=new Set;p.add(l),this.names.set(c,p)}},a.prototype.insertRules=function(c,l,p){this.registerName(c,l),this.getTag().insertRules(Sa(c),p)},a.prototype.clearNames=function(c){this.names.has(c)&&this.names.get(c).clear()},a.prototype.clearRules=function(c){this.getTag().clearGroup(Sa(c)),this.clearNames(c)},a.prototype.clearTag=function(){this.tag=void 0},a})(),vm=/&/g,ym=/^\s*\/\/.*$/gm;function su(a,c){return a.map(function(l){return l.type==="rule"&&(l.value="".concat(c," ").concat(l.value),l.value=l.value.replaceAll(",",",".concat(c," ")),l.props=l.props.map(function(p){return"".concat(c," ").concat(p)})),Array.isArray(l.children)&&l.type!=="@keyframes"&&(l.children=su(l.children,c)),l})}function jm(a){var c,l,p,m=hs,f=m.options,b=f===void 0?hs:f,L=m.plugins,T=L===void 0?$a:L,F=function(P,U,ae){return ae.startsWith(l)&&ae.endsWith(l)&&ae.replaceAll(l,"").length>0?".".concat(c):P},W=T.slice();W.push(function(P){P.type===Fa&&P.value.includes("&")&&(P.props[0]=P.props[0].replace(vm,l).replace(p,F))}),b.prefix&&W.push($x),W.push(Wx);var O=function(P,U,ae,K){U===void 0&&(U=""),ae===void 0&&(ae=""),K===void 0&&(K="&"),c=K,l=U,p=new RegExp("\\".concat(l,"\\b"),"g");var $=P.replace(ym,""),ne=Fx(ae||U?"".concat(ae," ").concat(U," { ").concat($," }"):$);b.namespace&&(ne=su(ne,b.namespace));var ee=[];return Ba(ne,Dx(W.concat(Ux(function(J){return ee.push(J)})))),ee};return O.hash=T.length?T.reduce(function(P,U){return U.name||po(15),ls(P,U.name)},Kp).toString():"",O}var bm=new tu,tl=jm(),ou=Ye.createContext({shouldForwardProp:void 0,styleSheet:bm,stylis:tl});ou.Consumer;Ye.createContext(void 0);function Lp(){return B.useContext(ou)}var Nm=(function(){function a(c,l){var p=this;this.inject=function(m,f){f===void 0&&(f=tl);var b=p.name+f.hash;m.hasNameForId(p.id,b)||m.insertRules(p.id,b,f(p.rules,b,"@keyframes"))},this.name=c,this.id="sc-keyframes-".concat(c),this.rules=l,pl(this,function(){throw po(12,String(p.name))})}return a.prototype.getName=function(c){return c===void 0&&(c=tl),this.name+c.hash},a})(),wm=function(a){return a>="A"&&a<="Z"};function zp(a){for(var c="",l=0;l<a.length;l++){var p=a[l];if(l===1&&p==="-"&&a[0]==="-")return a;wm(p)?c+="-"+p.toLowerCase():c+=p}return c.startsWith("ms-")?"-"+c:c}var au=function(a){return a==null||a===!1||a===""},nu=function(a){var c,l,p=[];for(var m in a){var f=a[m];a.hasOwnProperty(m)&&!au(f)&&(Array.isArray(f)&&f.isCss||xs(f)?p.push("".concat(zp(m),":"),f,";"):lo(f)?p.push.apply(p,Ma(Ma(["".concat(m," {")],nu(f),!1),["}"],!1)):p.push("".concat(zp(m),": ").concat((c=m,(l=f)==null||typeof l=="boolean"||l===""?"":typeof l!="number"||l===0||c in Vx||c.startsWith("--")?String(l).trim():"".concat(l,"px")),";")))}return p};function Bt(a,c,l,p){if(au(a))return[];if(dl(a))return[".".concat(a.styledComponentId)];if(xs(a)){if(!xs(f=a)||f.prototype&&f.prototype.isReactComponent||!c)return[a];var m=a(c);return Bt(m,c,l,p)}var f;return a instanceof Nm?l?(a.inject(l,p),[a.getName(p)]):[a]:lo(a)?nu(a):Array.isArray(a)?Array.prototype.concat.apply($a,a.map(function(b){return Bt(b,c,l,p)})):[a.toString()]}function km(a){for(var c=0;c<a.length;c+=1){var l=a[c];if(xs(l)&&!dl(l))return!1}return!0}var Sm=Yp(Ua),Tm=(function(){function a(c,l,p){this.rules=c,this.staticRulesId="",this.isStatic=(p===void 0||p.isStatic)&&km(c),this.componentId=l,this.baseHash=ls(Sm,l),this.baseStyle=p,tu.registerId(l)}return a.prototype.generateAndInjectStyles=function(c,l,p){var m=this.baseStyle?this.baseStyle.generateAndInjectStyles(c,l,p):"";if(this.isStatic&&!p.hash)if(this.staticRulesId&&l.hasNameForId(this.componentId,this.staticRulesId))m=Et(m,this.staticRulesId);else{var f=Sp(Bt(this.rules,c,l,p)),b=el(ls(this.baseHash,f)>>>0);if(!l.hasNameForId(this.componentId,b)){var L=p(f,".".concat(b),void 0,this.componentId);l.insertRules(this.componentId,b,L)}m=Et(m,b),this.staticRulesId=b}else{for(var T=ls(this.baseHash,p.hash),F="",W=0;W<this.rules.length;W++){var O=this.rules[W];if(typeof O=="string")F+=O;else if(O){var P=Sp(Bt(O,c,l,p));T=ls(T,P+W),F+=P}}if(F){var U=el(T>>>0);l.hasNameForId(this.componentId,U)||l.insertRules(this.componentId,U,p(F,".".concat(U),void 0,this.componentId)),m=Et(m,U)}}return m},a})(),iu=Ye.createContext(void 0);iu.Consumer;var qi={};function Cm(a,c,l){var p=dl(a),m=a,f=!Qi(a),b=c.attrs,L=b===void 0?$a:b,T=c.componentId,F=T===void 0?(function(re,fe){var X=typeof re!="string"?"sc":jp(re);qi[X]=(qi[X]||0)+1;var q="".concat(X,"-").concat(Jx(Ua+X+qi[X]));return fe?"".concat(fe,"-").concat(q):q})(c.displayName,c.parentComponentId):T,W=c.displayName,O=W===void 0?(function(re){return Qi(re)?"styled.".concat(re):"Styled(".concat(Xx(re),")")})(a):W,P=c.displayName&&c.componentId?"".concat(jp(c.displayName),"-").concat(c.componentId):c.componentId||F,U=p&&m.attrs?m.attrs.concat(L).filter(Boolean):L,ae=c.shouldForwardProp;if(p&&m.shouldForwardProp){var K=m.shouldForwardProp;if(c.shouldForwardProp){var $=c.shouldForwardProp;ae=function(re,fe){return K(re,fe)&&$(re,fe)}}else ae=K}var ne=new Tm(l,P,p?m.componentStyle:void 0);function ee(re,fe){return(function(X,q,Pe){var lr=X.attrs,kr=X.componentStyle,Wr=X.defaultProps,mr=X.foldedComponentIds,Xe=X.styledComponentId,cr=X.target,fr=Ye.useContext(iu),Ve=Lp(),je=X.shouldForwardProp||Ve.shouldForwardProp,I=Qx(q,fr,Wr)||hs,D=(function(pe,ce,ge){for(var ue,xe=ir(ir({},ce),{className:void 0,theme:ge}),De=0;De<pe.length;De+=1){var Dr=xs(ue=pe[De])?ue(xe):ue;for(var Sr in Dr)xe[Sr]=Sr==="className"?Et(xe[Sr],Dr[Sr]):Sr==="style"?ir(ir({},xe[Sr]),Dr[Sr]):Dr[Sr]}return ce.className&&(xe.className=Et(xe.className,ce.className)),xe})(lr,q,I),E=D.as||cr,g={};for(var N in D)D[N]===void 0||N[0]==="$"||N==="as"||N==="theme"&&D.theme===I||(N==="forwardedAs"?g.as=D.forwardedAs:je&&!je(N,E)||(g[N]=D[N]));var Z=(function(pe,ce){var ge=Lp(),ue=pe.generateAndInjectStyles(ce,ge.styleSheet,ge.stylis);return ue})(kr,D),te=Et(mr,Xe);return Z&&(te+=" "+Z),D.className&&(te+=" "+D.className),g[Qi(E)&&!qp.has(E)?"class":"className"]=te,Pe&&(g.ref=Pe),B.createElement(E,g)})(J,re,fe)}ee.displayName=O;var J=Ye.forwardRef(ee);return J.attrs=U,J.componentStyle=ne,J.displayName=O,J.shouldForwardProp=ae,J.foldedComponentIds=p?Et(m.foldedComponentIds,m.styledComponentId):"",J.styledComponentId=P,J.target=p?m.target:a,Object.defineProperty(J,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(re){this._foldedDefaultProps=p?(function(fe){for(var X=[],q=1;q<arguments.length;q++)X[q-1]=arguments[q];for(var Pe=0,lr=X;Pe<lr.length;Pe++)rl(fe,lr[Pe],!0);return fe})({},m.defaultProps,re):re}}),pl(J,function(){return".".concat(J.styledComponentId)}),f&&eu(J,a,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),J}function Ip(a,c){for(var l=[a[0]],p=0,m=c.length;p<m;p+=1)l.push(c[p],a[p+1]);return l}var Ep=function(a){return Object.assign(a,{isCss:!0})};function Lm(a){for(var c=[],l=1;l<arguments.length;l++)c[l-1]=arguments[l];if(xs(a)||lo(a))return Ep(Bt(Ip($a,Ma([a],c,!0))));var p=a;return c.length===0&&p.length===1&&typeof p[0]=="string"?Bt(p):Ep(Bt(Ip(p,c)))}function sl(a,c,l){if(l===void 0&&(l=hs),!c)throw po(1,c);var p=function(m){for(var f=[],b=1;b<arguments.length;b++)f[b-1]=arguments[b];return a(c,l,Lm.apply(void 0,Ma([m],f,!1)))};return p.attrs=function(m){return sl(a,c,ir(ir({},l),{attrs:Array.prototype.concat(l.attrs,m).filter(Boolean)}))},p.withConfig=function(m){return sl(a,c,ir(ir({},l),m))},p}var lu=function(a){return sl(Cm,a)},Q=lu;qp.forEach(function(a){Q[a]=lu(a)});const Ki={Wrapper:Q.div`
        /* border: 1px solid #f00; */
        height: 100vh;
        overflow: hidden;
        display: flex;
        flex-direction: column;
    `,Header:Q.header`
        /* border: 1px solid #f00; */
        height: 60px;
        flex-shrink: 0;
    `,Main:Q.main`
        /* border: 1px solid #f00; */
        flex: 1;
        overflow-y: auto;
        position: relative;

        .contentWrapper {
            /* border: 1px solid #f00; */
            min-height: 100%;
            max-width: 1440px;
            margin: auto;
            display: flex;
            flex-direction: column;
            padding: 15px;

            .category {
                margin: 30px 0 15px 0;
            }
        }

        .footerWrapper {
            /* border: 1px solid #f00; */
            /* min-height: 300px; */
            flex-shrink: 0;
        }
    `},Mp={Wrapper:Q.header`
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0 16px;
        border-bottom: 1px solid var(--color-border);
        background: var(--color-bg);
        position: sticky;
        top: 0;
        z-index: 50;
        height: 60px;
    `,Main:Q.div`
        width: 100%;
        display: flex;
        align-items: center;

        .logoNameThemeToggleWrapper {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 14px;
            width: 100%;
        }

        .logoNameWrapper {
            display: flex;
            align-items: center;
            gap: 12px;
            min-width: 0;
        }

        .logoWrapper {
            height: 50px;
            width: 50px;
            border-radius: 10px;
            background: #000;
            border: 1px solid var(--color-border);
            position: relative;
            overflow: hidden;
            flex: 0 0 auto;
            padding: 5px;

            img {
                height: 100%;
                width: 100%;
                object-fit: contain;
                display: block;
                transition: opacity 180ms ease;
            }

            .logoSkeleton {
                position: absolute;
                inset: 0;
                background: var(--color-surface-2);
                opacity: 0.75;
            }
        }

        .nameWrapper {
            display: flex;
            flex-direction: column;
            gap: 2px;
            min-width: 0;

            .title {
                color: var(--color-text-primary);
                font-weight: 800;
                letter-spacing: 0.2px;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }

            .subTitle {
                color: var(--color-text-muted);
                font-size: 12px;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }

            @media (width < 520px) {
                .subTitle {
                    display: none;
                }
            }

            @media (width < 420px) {
                display: none;
            }
        }

        .themeToggleBtn {
            display: inline-flex;
            align-items: center;
            gap: 10px;
            padding: 10px 12px;
            border-radius: 12px;
            background: var(--color-surface);
            border: 1px solid var(--color-border);
            color: var(--color-text-primary);
            flex: 0 0 auto;

            .icon {
                display: inline-flex;
                align-items: center;
                justify-content: center;
                font-size: 18px;
            }

            .label {
                font-size: 13px;
                font-weight: 700;
                color: var(--color-text-secondary);
            }

            &:hover {
                border-color: var(--color-border-light);
                background: var(--color-surface-2);
            }

            &:active {
                transform: translateY(1px);
            }

            &:focus-visible {
                outline: 2px solid var(--color-text-primary);
                outline-offset: 3px;
            }

            @media (width < 420px) {
                .label {
                    display: none;
                }
            }
        }

        .quickNav {
            display: flex;
            align-items: center;
            gap: 4px;
            margin-left: auto;

            a {
                padding: 8px 9px;
                border: 1px solid transparent;
                border-radius: 8px;
                color: var(--color-text-muted);
                text-decoration: none;
                font-size: 12px;
                transition: color 180ms ease, border-color 180ms ease, box-shadow 180ms ease;
            }

            a:hover,
            a:focus-visible {
                color: var(--color-text-primary);
                border-color: var(--color-border-light);
                box-shadow: 0 0 0 3px var(--color-border);
                outline: none;
            }

            @media (width < 760px) {
                display: none;

                &.open {
                    position: absolute;
                    top: 58px;
                    right: 16px;
                    display: grid;
                    min-width: 170px;
                    padding: 8px;
                    border: 1px solid var(--color-border);
                    border-radius: 12px;
                    background: var(--color-surface);
                    box-shadow: 0 16px 35px var(--color-shadow);

                    a { width: 100%; }
                }
            }
        }

        .menuToggleBtn {
            display: none;
            align-items: center;
            justify-content: center;
            width: 38px;
            height: 38px;
            border: 1px solid var(--color-border);
            border-radius: 9px;
            color: var(--color-text-primary);
            background: var(--color-surface);

            &:hover,
            &:focus-visible {
                border-color: var(--color-border-light);
                box-shadow: 0 0 0 3px var(--color-border);
                outline: none;
            }

            @media (width < 760px) { display: inline-flex; }
        }
    `};var cu={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Bp=Ye.createContext&&Ye.createContext(cu),zm=["attr","size","title"];function Im(a,c){if(a==null)return{};var l=Em(a,c),p,m;if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(m=0;m<f.length;m++)p=f[m],!(c.indexOf(p)>=0)&&Object.prototype.propertyIsEnumerable.call(a,p)&&(l[p]=a[p])}return l}function Em(a,c){if(a==null)return{};var l={};for(var p in a)if(Object.prototype.hasOwnProperty.call(a,p)){if(c.indexOf(p)>=0)continue;l[p]=a[p]}return l}function _a(){return _a=Object.assign?Object.assign.bind():function(a){for(var c=1;c<arguments.length;c++){var l=arguments[c];for(var p in l)Object.prototype.hasOwnProperty.call(l,p)&&(a[p]=l[p])}return a},_a.apply(this,arguments)}function Hp(a,c){var l=Object.keys(a);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(a);c&&(p=p.filter(function(m){return Object.getOwnPropertyDescriptor(a,m).enumerable})),l.push.apply(l,p)}return l}function Oa(a){for(var c=1;c<arguments.length;c++){var l=arguments[c]!=null?arguments[c]:{};c%2?Hp(Object(l),!0).forEach(function(p){Mm(a,p,l[p])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(l)):Hp(Object(l)).forEach(function(p){Object.defineProperty(a,p,Object.getOwnPropertyDescriptor(l,p))})}return a}function Mm(a,c,l){return c=Bm(c),c in a?Object.defineProperty(a,c,{value:l,enumerable:!0,configurable:!0,writable:!0}):a[c]=l,a}function Bm(a){var c=Hm(a,"string");return typeof c=="symbol"?c:c+""}function Hm(a,c){if(typeof a!="object"||!a)return a;var l=a[Symbol.toPrimitive];if(l!==void 0){var p=l.call(a,c);if(typeof p!="object")return p;throw new TypeError("@@toPrimitive must return a primitive value.")}return(c==="string"?String:Number)(a)}function du(a){return a&&a.map((c,l)=>Ye.createElement(c.tag,Oa({key:l},c.attr),du(c.child)))}function z(a){return c=>Ye.createElement(Pm,_a({attr:Oa({},a.attr)},c),du(a.child))}function Pm(a){var c=l=>{var{attr:p,size:m,title:f}=a,b=Im(a,zm),L=m||l.size||"1em",T;return l.className&&(T=l.className),a.className&&(T=(T?T+" ":"")+a.className),Ye.createElement("svg",_a({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},l.attr,p,b,{className:T,style:Oa(Oa({color:a.color||l.color},l.style),a.style),height:L,width:L,xmlns:"http://www.w3.org/2000/svg"}),f&&Ye.createElement("title",null,f),a.children)};return Bp!==void 0?Ye.createElement(Bp.Consumer,null,l=>c(l)):c(cu)}function _m(a){return z({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"22 12 18 12 15 21 9 3 6 12 2 12"},child:[]}]})(a)}function pu(a){return z({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"line",attr:{x1:"12",y1:"8",x2:"12",y2:"12"},child:[]},{tag:"line",attr:{x1:"12",y1:"16",x2:"12.01",y2:"16"},child:[]}]})(a)}function Je(a){return z({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"},child:[]},{tag:"line",attr:{x1:"12",y1:"9",x2:"12",y2:"13"},child:[]},{tag:"line",attr:{x1:"12",y1:"17",x2:"12.01",y2:"17"},child:[]}]})(a)}function Om(a){return z({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"21",y1:"10",x2:"7",y2:"10"},child:[]},{tag:"line",attr:{x1:"21",y1:"6",x2:"3",y2:"6"},child:[]},{tag:"line",attr:{x1:"21",y1:"14",x2:"3",y2:"14"},child:[]},{tag:"line",attr:{x1:"21",y1:"18",x2:"7",y2:"18"},child:[]}]})(a)}function Rm(a){return z({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"12",y1:"19",x2:"12",y2:"5"},child:[]},{tag:"polyline",attr:{points:"5 12 12 5 19 12"},child:[]}]})(a)}function uu(a){return z({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"},child:[]},{tag:"path",attr:{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"},child:[]}]})(a)}function Fm(a){return z({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"},child:[]},{tag:"polyline",attr:{points:"3.27 6.96 12 12.01 20.73 6.96"},child:[]},{tag:"line",attr:{x1:"12",y1:"22.08",x2:"12",y2:"12"},child:[]}]})(a)}function Yi(a){return z({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"3",y:"4",width:"18",height:"18",rx:"2",ry:"2"},child:[]},{tag:"line",attr:{x1:"16",y1:"2",x2:"16",y2:"6"},child:[]},{tag:"line",attr:{x1:"8",y1:"2",x2:"8",y2:"6"},child:[]},{tag:"line",attr:{x1:"3",y1:"10",x2:"21",y2:"10"},child:[]}]})(a)}function se(a){return z({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14"},child:[]},{tag:"polyline",attr:{points:"22 4 12 14.01 9 11.01"},child:[]}]})(a)}function hu(a){return z({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"9 11 12 14 22 4"},child:[]},{tag:"path",attr:{d:"M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"},child:[]}]})(a)}function Am(a){return z({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"20 6 9 17 4 12"},child:[]}]})(a)}function ie(a){return z({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"6 9 12 15 18 9"},child:[]}]})(a)}function le(a){return z({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"9 18 15 12 9 6"},child:[]}]})(a)}function Pp(a){return z({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"polyline",attr:{points:"12 6 12 12 16 14"},child:[]}]})(a)}function Me(a){return z({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"16 18 22 12 16 6"},child:[]},{tag:"polyline",attr:{points:"8 6 2 12 8 18"},child:[]}]})(a)}function Wm(a){return z({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M18 8h1a4 4 0 0 1 0 8h-1"},child:[]},{tag:"path",attr:{d:"M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"},child:[]},{tag:"line",attr:{x1:"6",y1:"1",x2:"6",y2:"4"},child:[]},{tag:"line",attr:{x1:"10",y1:"1",x2:"10",y2:"4"},child:[]},{tag:"line",attr:{x1:"14",y1:"1",x2:"14",y2:"4"},child:[]}]})(a)}function Fr(a){return z({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"9",y:"9",width:"13",height:"13",rx:"2",ry:"2"},child:[]},{tag:"path",attr:{d:"M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"},child:[]}]})(a)}function Dm(a){return z({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"4",y:"4",width:"16",height:"16",rx:"2",ry:"2"},child:[]},{tag:"rect",attr:{x:"9",y:"9",width:"6",height:"6"},child:[]},{tag:"line",attr:{x1:"9",y1:"1",x2:"9",y2:"4"},child:[]},{tag:"line",attr:{x1:"15",y1:"1",x2:"15",y2:"4"},child:[]},{tag:"line",attr:{x1:"9",y1:"20",x2:"9",y2:"23"},child:[]},{tag:"line",attr:{x1:"15",y1:"20",x2:"15",y2:"23"},child:[]},{tag:"line",attr:{x1:"20",y1:"9",x2:"23",y2:"9"},child:[]},{tag:"line",attr:{x1:"20",y1:"14",x2:"23",y2:"14"},child:[]},{tag:"line",attr:{x1:"1",y1:"9",x2:"4",y2:"9"},child:[]},{tag:"line",attr:{x1:"1",y1:"14",x2:"4",y2:"14"},child:[]}]})(a)}function ul(a){return z({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"ellipse",attr:{cx:"12",cy:"5",rx:"9",ry:"3"},child:[]},{tag:"path",attr:{d:"M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"},child:[]},{tag:"path",attr:{d:"M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"},child:[]}]})(a)}function Um(a){return z({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"circle",attr:{cx:"12",cy:"12",r:"3"},child:[]}]})(a)}function $m(a){return z({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"},child:[]}]})(a)}function ms(a){return z({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 20h9"},child:[]},{tag:"path",attr:{d:"M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"},child:[]}]})(a)}function cs(a){return z({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"},child:[]},{tag:"polyline",attr:{points:"15 3 21 3 21 9"},child:[]},{tag:"line",attr:{x1:"10",y1:"14",x2:"21",y2:"3"},child:[]}]})(a)}function Vm(a){return z({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"},child:[]},{tag:"line",attr:{x1:"1",y1:"1",x2:"23",y2:"23"},child:[]}]})(a)}function Va(a){return z({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"},child:[]},{tag:"circle",attr:{cx:"12",cy:"12",r:"3"},child:[]}]})(a)}function hl(a){return z({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"},child:[]},{tag:"polyline",attr:{points:"14 2 14 8 20 8"},child:[]},{tag:"line",attr:{x1:"16",y1:"13",x2:"8",y2:"13"},child:[]},{tag:"line",attr:{x1:"16",y1:"17",x2:"8",y2:"17"},child:[]},{tag:"polyline",attr:{points:"10 9 9 9 8 9"},child:[]}]})(a)}function _p(a){return z({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"18",cy:"18",r:"3"},child:[]},{tag:"circle",attr:{cx:"6",cy:"6",r:"3"},child:[]},{tag:"path",attr:{d:"M6 21V9a9 9 0 0 0 9 9"},child:[]}]})(a)}function xl(a){return z({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"line",attr:{x1:"2",y1:"12",x2:"22",y2:"12"},child:[]},{tag:"path",attr:{d:"M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"},child:[]}]})(a)}function xu(a){return z({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"3",y:"3",width:"7",height:"7"},child:[]},{tag:"rect",attr:{x:"14",y:"3",width:"7",height:"7"},child:[]},{tag:"rect",attr:{x:"14",y:"14",width:"7",height:"7"},child:[]},{tag:"rect",attr:{x:"3",y:"14",width:"7",height:"7"},child:[]}]})(a)}function uo(a){return z({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"4",y1:"9",x2:"20",y2:"9"},child:[]},{tag:"line",attr:{x1:"4",y1:"15",x2:"20",y2:"15"},child:[]},{tag:"line",attr:{x1:"10",y1:"3",x2:"8",y2:"21"},child:[]},{tag:"line",attr:{x1:"16",y1:"3",x2:"14",y2:"21"},child:[]}]})(a)}function Gm(a){return z({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"},child:[]}]})(a)}function Qm(a){return z({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"path",attr:{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"},child:[]},{tag:"line",attr:{x1:"12",y1:"17",x2:"12.01",y2:"17"},child:[]}]})(a)}function fs(a){return z({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"3",y:"3",width:"18",height:"18",rx:"2",ry:"2"},child:[]},{tag:"circle",attr:{cx:"8.5",cy:"8.5",r:"1.5"},child:[]},{tag:"polyline",attr:{points:"21 15 16 10 5 21"},child:[]}]})(a)}function He(a){return z({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"line",attr:{x1:"12",y1:"16",x2:"12",y2:"12"},child:[]},{tag:"line",attr:{x1:"12",y1:"8",x2:"12.01",y2:"8"},child:[]}]})(a)}function qm(a){return z({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"},child:[]}]})(a)}function co(a){return z({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"12 2 2 7 12 12 22 7 12 2"},child:[]},{tag:"polyline",attr:{points:"2 17 12 22 22 17"},child:[]},{tag:"polyline",attr:{points:"2 12 12 17 22 12"},child:[]}]})(a)}function mu(a){return z({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"3",y:"3",width:"18",height:"18",rx:"2",ry:"2"},child:[]},{tag:"line",attr:{x1:"3",y1:"9",x2:"21",y2:"9"},child:[]},{tag:"line",attr:{x1:"9",y1:"21",x2:"9",y2:"9"},child:[]}]})(a)}function fu(a){return z({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M15 7h3a5 5 0 0 1 5 5 5 5 0 0 1-5 5h-3m-6 0H6a5 5 0 0 1-5-5 5 5 0 0 1 5-5h3"},child:[]},{tag:"line",attr:{x1:"8",y1:"12",x2:"16",y2:"12"},child:[]}]})(a)}function ho(a){return z({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"},child:[]},{tag:"path",attr:{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"},child:[]}]})(a)}function Km(a){return z({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"8",y1:"6",x2:"21",y2:"6"},child:[]},{tag:"line",attr:{x1:"8",y1:"12",x2:"21",y2:"12"},child:[]},{tag:"line",attr:{x1:"8",y1:"18",x2:"21",y2:"18"},child:[]},{tag:"line",attr:{x1:"3",y1:"6",x2:"3.01",y2:"6"},child:[]},{tag:"line",attr:{x1:"3",y1:"12",x2:"3.01",y2:"12"},child:[]},{tag:"line",attr:{x1:"3",y1:"18",x2:"3.01",y2:"18"},child:[]}]})(a)}function io(a){return z({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"3",y:"11",width:"18",height:"11",rx:"2",ry:"2"},child:[]},{tag:"path",attr:{d:"M7 11V7a5 5 0 0 1 10 0v4"},child:[]}]})(a)}function gu(a){return z({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"},child:[]},{tag:"polyline",attr:{points:"22,6 12,13 2,6"},child:[]}]})(a)}function Ym(a){return z({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"},child:[]},{tag:"circle",attr:{cx:"12",cy:"10",r:"3"},child:[]}]})(a)}function Jm(a){return z({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"3",y1:"12",x2:"21",y2:"12"},child:[]},{tag:"line",attr:{x1:"3",y1:"6",x2:"21",y2:"6"},child:[]},{tag:"line",attr:{x1:"3",y1:"18",x2:"21",y2:"18"},child:[]}]})(a)}function Xm(a){return z({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"},child:[]}]})(a)}function vu(a){return z({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"},child:[]}]})(a)}function Zm(a){return z({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"line",attr:{x1:"8",y1:"12",x2:"16",y2:"12"},child:[]}]})(a)}function ef(a){return z({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"},child:[]}]})(a)}function yu(a){return z({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z"},child:[]},{tag:"path",attr:{d:"M13 13l6 6"},child:[]}]})(a)}function ol(a){return z({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"3 11 22 2 13 21 11 13 3 11"},child:[]}]})(a)}function rf(a){return z({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"6",y:"4",width:"4",height:"16"},child:[]},{tag:"rect",attr:{x:"14",y:"4",width:"4",height:"16"},child:[]}]})(a)}function tf(a){return z({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"},child:[]}]})(a)}function sf(a){return z({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"5 3 19 12 5 21 5 3"},child:[]}]})(a)}function of(a){return z({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"1 4 1 10 7 10"},child:[]},{tag:"path",attr:{d:"M3.51 15a9 9 0 1 0 2.13-9.36L1 10"},child:[]}]})(a)}function af(a){return z({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"23 4 23 10 17 10"},child:[]},{tag:"path",attr:{d:"M20.49 15a9 9 0 1 1-2.12-9.36L23 10"},child:[]}]})(a)}function ju(a){return z({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"11",cy:"11",r:"8"},child:[]},{tag:"line",attr:{x1:"21",y1:"21",x2:"16.65",y2:"16.65"},child:[]}]})(a)}function nf(a){return z({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"22",y1:"2",x2:"11",y2:"13"},child:[]},{tag:"polygon",attr:{points:"22 2 15 22 11 13 2 9 22 2"},child:[]}]})(a)}function Op(a){return z({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"2",y:"2",width:"20",height:"8",rx:"2",ry:"2"},child:[]},{tag:"rect",attr:{x:"2",y:"14",width:"20",height:"8",rx:"2",ry:"2"},child:[]},{tag:"line",attr:{x1:"6",y1:"6",x2:"6.01",y2:"6"},child:[]},{tag:"line",attr:{x1:"6",y1:"18",x2:"6.01",y2:"18"},child:[]}]})(a)}function lf(a){return z({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"18",cy:"5",r:"3"},child:[]},{tag:"circle",attr:{cx:"6",cy:"12",r:"3"},child:[]},{tag:"circle",attr:{cx:"18",cy:"19",r:"3"},child:[]},{tag:"line",attr:{x1:"8.59",y1:"13.51",x2:"15.42",y2:"17.49"},child:[]},{tag:"line",attr:{x1:"15.41",y1:"6.51",x2:"8.59",y2:"10.49"},child:[]}]})(a)}function Ht(a){return z({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"},child:[]}]})(a)}function cf(a){return z({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"16 3 21 3 21 8"},child:[]},{tag:"line",attr:{x1:"4",y1:"20",x2:"21",y2:"3"},child:[]},{tag:"polyline",attr:{points:"21 16 21 21 16 21"},child:[]},{tag:"line",attr:{x1:"15",y1:"15",x2:"21",y2:"21"},child:[]},{tag:"line",attr:{x1:"4",y1:"4",x2:"9",y2:"9"},child:[]}]})(a)}function df(a){return z({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"4",y1:"21",x2:"4",y2:"14"},child:[]},{tag:"line",attr:{x1:"4",y1:"10",x2:"4",y2:"3"},child:[]},{tag:"line",attr:{x1:"12",y1:"21",x2:"12",y2:"12"},child:[]},{tag:"line",attr:{x1:"12",y1:"8",x2:"12",y2:"3"},child:[]},{tag:"line",attr:{x1:"20",y1:"21",x2:"20",y2:"16"},child:[]},{tag:"line",attr:{x1:"20",y1:"12",x2:"20",y2:"3"},child:[]},{tag:"line",attr:{x1:"1",y1:"14",x2:"7",y2:"14"},child:[]},{tag:"line",attr:{x1:"9",y1:"8",x2:"15",y2:"8"},child:[]},{tag:"line",attr:{x1:"17",y1:"16",x2:"23",y2:"16"},child:[]}]})(a)}function pf(a){return z({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"3",y:"3",width:"18",height:"18",rx:"2",ry:"2"},child:[]}]})(a)}function uf(a){return z({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"5"},child:[]},{tag:"line",attr:{x1:"12",y1:"1",x2:"12",y2:"3"},child:[]},{tag:"line",attr:{x1:"12",y1:"21",x2:"12",y2:"23"},child:[]},{tag:"line",attr:{x1:"4.22",y1:"4.22",x2:"5.64",y2:"5.64"},child:[]},{tag:"line",attr:{x1:"18.36",y1:"18.36",x2:"19.78",y2:"19.78"},child:[]},{tag:"line",attr:{x1:"1",y1:"12",x2:"3",y2:"12"},child:[]},{tag:"line",attr:{x1:"21",y1:"12",x2:"23",y2:"12"},child:[]},{tag:"line",attr:{x1:"4.22",y1:"19.78",x2:"5.64",y2:"18.36"},child:[]},{tag:"line",attr:{x1:"18.36",y1:"5.64",x2:"19.78",y2:"4.22"},child:[]}]})(a)}function hf(a){return z({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18"},child:[]}]})(a)}function al(a){return z({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"},child:[]},{tag:"line",attr:{x1:"7",y1:"7",x2:"7.01",y2:"7"},child:[]}]})(a)}function xf(a){return z({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"23 6 13.5 15.5 8.5 10.5 1 18"},child:[]},{tag:"polyline",attr:{points:"17 6 23 6 23 12"},child:[]}]})(a)}function gs(a){return z({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"4 7 4 4 20 4 20 7"},child:[]},{tag:"line",attr:{x1:"9",y1:"20",x2:"15",y2:"20"},child:[]},{tag:"line",attr:{x1:"12",y1:"4",x2:"12",y2:"20"},child:[]}]})(a)}function mf(a){return z({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"},child:[]},{tag:"polyline",attr:{points:"17 8 12 3 7 8"},child:[]},{tag:"line",attr:{x1:"12",y1:"3",x2:"12",y2:"15"},child:[]}]})(a)}function ff(a){return z({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"},child:[]},{tag:"circle",attr:{cx:"12",cy:"7",r:"4"},child:[]}]})(a)}function is(a){return z({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"line",attr:{x1:"15",y1:"9",x2:"9",y2:"15"},child:[]},{tag:"line",attr:{x1:"9",y1:"9",x2:"15",y2:"15"},child:[]}]})(a)}function gf(a){return z({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"18",y1:"6",x2:"6",y2:"18"},child:[]},{tag:"line",attr:{x1:"6",y1:"6",x2:"18",y2:"18"},child:[]}]})(a)}function Ra(a){return z({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2"},child:[]}]})(a)}const vf=()=>{const[a,c]=B.useState(!1),[l,p]=B.useState("dark"),[m,f]=B.useState(!1);B.useEffect(()=>{const F=localStorage.getItem("app-theme")||"dark";p(F),F==="light"?document.documentElement.setAttribute("data-theme","light"):document.documentElement.removeAttribute("data-theme")},[]),B.useEffect(()=>{l==="light"?document.documentElement.setAttribute("data-theme","light"):document.documentElement.removeAttribute("data-theme"),localStorage.setItem("app-theme",l)},[l]);const b=B.useMemo(()=>l==="light"?"dark":"light",[l]),L=()=>{p(b)};return e.jsx(Mp.Wrapper,{children:e.jsx(Mp.Main,{children:e.jsxs("div",{className:"logoNameThemeToggleWrapper",children:[e.jsxs("div",{className:"logoNameWrapper",children:[e.jsxs("div",{className:"logoWrapper",children:[!a&&e.jsx("div",{className:"logoSkeleton"}),e.jsx("img",{src:"/html-core-notes/logo.png",alt:"html-core-notes",onLoad:()=>c(!0),style:{opacity:a?1:0}})]}),e.jsxs("div",{className:"nameWrapper",children:[e.jsx("div",{className:"title",children:"html-core-notes"}),e.jsx("div",{className:"subTitle",children:"At-a-glance HTML revision"})]})]}),e.jsxs("nav",{className:`quickNav ${m?"open":""}`,"aria-label":"Quick navigation",children:[e.jsx("a",{href:"#about-html",onClick:()=>f(!1),children:"Overview"}),e.jsx("a",{href:"#foundation",onClick:()=>f(!1),children:"Foundation"}),e.jsx("a",{href:"#text-content",onClick:()=>f(!1),children:"Text"}),e.jsx("a",{href:"#forms",onClick:()=>f(!1),children:"Forms"}),e.jsx("a",{href:"#advanced",onClick:()=>f(!1),children:"Advanced"})]}),e.jsx("button",{type:"button",className:"menuToggleBtn",onClick:()=>f(T=>!T),"aria-expanded":m,"aria-label":m?"Close navigation":"Open navigation",title:m?"Close navigation":"Open navigation",children:m?e.jsx(gf,{}):e.jsx(Jm,{})}),e.jsxs("button",{type:"button",className:"themeToggleBtn",onClick:L,"aria-label":`Switch to ${b} theme`,title:`Switch to ${b}`,children:[e.jsx("span",{className:"icon",children:l==="light"?e.jsx(ef,{}):e.jsx(uf,{})}),e.jsx("span",{className:"label",children:l==="light"?"Light":"Dark"})]})]})})})};function yf(a){return z({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M502.285 159.704l-234-156c-7.987-4.915-16.511-4.96-24.571 0l-234 156C3.714 163.703 0 170.847 0 177.989v155.999c0 7.143 3.714 14.286 9.715 18.286l234 156.022c7.987 4.915 16.511 4.96 24.571 0l234-156.022c6-3.999 9.715-11.143 9.715-18.286V177.989c-.001-7.142-3.715-14.286-9.716-18.285zM278 63.131l172.286 114.858-76.857 51.429L278 165.703V63.131zm-44 0v102.572l-95.429 63.715-76.857-51.429L234 63.131zM44 219.132l55.143 36.857L44 292.846v-73.714zm190 229.715L61.714 333.989l76.857-51.429L234 346.275v102.572zm22-140.858l-77.715-52 77.715-52 77.715 52-77.715 52zm22 140.858V346.275l95.429-63.715 76.857 51.429L278 448.847zm190-156.001l-55.143-36.857L468 219.132v73.714z"},child:[]}]})(a)}function jf(a){return z({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z"},child:[]}]})(a)}function bf(a){return z({attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"},child:[]}]})(a)}function Nf(a){return z({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"},child:[]}]})(a)}function wf(a){return z({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"},child:[]}]})(a)}const Ta={Wrapper:Q.footer`
        display: grid;
        grid-template-columns: auto 1fr;
        align-items: center;
        gap: 14px 24px;
        padding: 18px 15px 22px;
        border-top: 1px solid var(--color-border);
        color: var(--color-text-muted);
        font-size: 12px;

        @media (width < 700px) { grid-template-columns: 1fr; }
    `,Brand:Q.strong`
        display: inline-flex;
        align-items: center;
        gap: 9px;
        color: var(--color-text-primary);

        img { width: 32px; height: 32px; object-fit: contain; border: 1px solid var(--color-border); border-radius: 8px; }
    `,SocialLinks:Q.nav`
        display: flex;
        justify-content: flex-end;
        flex-wrap: wrap;
        gap: 7px;

        a {
            width: 35px;
            height: 35px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            border-radius: 8px;
            color: var(--color-text-muted);
            transition: color 180ms ease, border-color 180ms ease, box-shadow 180ms ease;
        }

        a:hover,
        a:focus-visible {
            color: var(--color-text-primary);
            border-color: var(--color-border-light);
            box-shadow: 0 0 0 3px var(--color-border);
            outline: none;
        }

        @media (width < 700px) { justify-content: flex-start; }
    `,Copyright:Q.p`
        grid-column: 1 / -1;
        margin: 0;
        padding-top: 12px;
        border-top: 1px solid var(--color-border);

        a { color: var(--color-text-secondary); font-weight: 700; }
        a:hover { color: var(--color-text-primary); }
    `},kf=[["Portfolio","https://www.ashishranjan.net",ff],["GitHub","https://github.com/a2rp",bf],["CodePen","https://codepen.io/ash1198",yf],["LinkedIn","https://www.linkedin.com/in/aashishranjan",Nf],["Facebook","https://www.facebook.com/theash.ashish/",jf],["YouTube","https://www.youtube.com/@ashishranjan-ashz?sub_confirmation=1",wf],["Email","mailto:ash.ranjan09@gmail.com",gu],["Support","https://a2rp-donation-page.netlify.app/",Gm],["Buy Me a Coffee","https://buymeacoffee.com/a2rp",Wm],["Patreon","https://patreon.com/a2rp",Xm]];function Sf(){return e.jsxs(Ta.Wrapper,{children:[e.jsxs(Ta.Brand,{children:[e.jsx("img",{src:"/html-core-notes/logo.png",alt:"Ashish Ranjan logo"}),e.jsx("span",{children:"HTML Core Notes"})]}),e.jsx(Ta.SocialLinks,{"aria-label":"Developer and support links",children:kf.map(([a,c,l])=>e.jsx("a",{href:c,target:"_blank",rel:"noopener noreferrer","aria-label":a,title:a,children:e.jsx(l,{"aria-hidden":"true"})},a))}),e.jsxs(Ta.Copyright,{children:["Copyright © ",new Date().getFullYear()," "," ",e.jsx("a",{href:"https://www.ashishranjan.net",target:"_blank",rel:"noopener noreferrer",children:"Ashish Ranjan"})]})]})}function Tf(){const[a,c]=B.useState(!1);return B.useEffect(()=>{const l=document.getElementById("notes-main");if(!l)return;const p=()=>c(l.scrollTop>220);return p(),l.addEventListener("scroll",p,{passive:!0}),()=>l.removeEventListener("scroll",p)},[]),e.jsx(Cf,{type:"button","data-visible":a,"aria-label":"Scroll to top",onClick:()=>{var l;return(l=document.getElementById("notes-main"))==null?void 0:l.scrollTo({top:0,behavior:"smooth"})},children:e.jsx(Rm,{"aria-hidden":"true"})})}const Cf=Q.button`
    position: fixed;
    right: 22px;
    bottom: 22px;
    z-index: 100;
    width: 42px;
    height: 42px;
    display: grid;
    place-items: center;
    border: 1px solid var(--color-border-light);
    border-radius: 999px;
    color: var(--color-text-primary);
    background: var(--color-surface-2);
    cursor: pointer;
    opacity: 0;
    pointer-events: none;
    transition: opacity 180ms ease, border-color 180ms ease, box-shadow 180ms ease;

    &[data-visible="true"] { opacity: 1; pointer-events: auto; }
    &:hover, &:focus-visible { border-color: var(--color-text-primary); box-shadow: 0 0 0 4px var(--color-border); outline: none; }
`,Rp={Wrapper:Q.section`
        width: 100%;
        padding: 60px 20px;
        display: flex;
        justify-content: center;
    `,Content:Q.div`
        max-width: 1440px;
        width: 100%;
        background: var(--color-surface);
        border: 1px solid var(--color-border);
        border-radius: 18px;
        padding: 40px;
        box-shadow: 0 10px 30px var(--color-shadow);

        .heading {
            font-size: 32px;
            margin-bottom: 24px;
        }

        p {
            font-size: 16px;
            line-height: 1.7;
            margin-bottom: 18px;
            color: var(--color-text-secondary);
        }

        .meta {
            margin-top: 28px;
            padding-top: 16px;
            border-top: 1px solid var(--color-border);
            display: flex;
            gap: 10px;
            font-size: 14px;
            color: var(--color-text-muted);
        }

        .metaLabel {
            font-weight: 800;
            color: var(--color-text-secondary);
        }

        .metaValue {
            font-family: monospace;
            color: var(--color-text-primary);
        }
    `},Lf=()=>{const a="2026-10-02T14:03:38.772Z",c=new Date(a).toLocaleString("en-US",{year:"numeric",month:"long",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!1});return e.jsx(Rp.Wrapper,{id:"about-html",children:e.jsxs(Rp.Content,{children:[e.jsx("h2",{className:"heading",children:"About HTML"}),e.jsx("p",{children:"HTML stands for HyperText Markup Language. It is the structural foundation of the web. Every website, application, and interface you see begins with HTML. It defines structure and meaning, not styling or behavior. Headings, paragraphs, lists, forms, tables, media, and semantic regions are all described using HTML."}),e.jsx("p",{children:"A strong understanding of HTML makes CSS cleaner and JavaScript more predictable. Good HTML improves accessibility, performance, SEO, and maintainability. It is not just markup. It is the logical blueprint of every web interface."}),e.jsx("p",{children:"The html-core-notes project is designed as a focused revision system. It removes noise and organizes concepts in a structured and practical way. The goal is fast recall, semantic clarity, and strong fundamentals."}),e.jsxs("div",{className:"meta",children:[e.jsx("span",{className:"metaLabel",children:"Last updated:"}),e.jsx("span",{className:"metaValue",children:c})]})]})})},zf={Wrapper:Q.section`
        width: 100%;
        border: 1px solid var(--color-border);
        background: var(--color-surface);
        border-radius: 18px;
        box-shadow: 0 12px 30px var(--color-shadow);
        overflow: hidden;
        margin-bottom: 5px;

        .topicHeader {
            width: 100%;
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 14px 14px;
            background: transparent;
            color: var(--color-text-primary);
            text-align: left;
        }

        .topicHeader:hover {
            background: var(--color-surface-2);
        }

        .chev {
            width: 28px;
            height: 28px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            border-radius: 10px;
            background: var(--color-bg);
            color: var(--color-text-secondary);
            flex: 0 0 auto;
        }

        .icon {
            width: 36px;
            height: 36px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            color: var(--color-text-secondary);
            font-size: 18px;
            flex: 0 0 auto;
        }

        .title {
            font-weight: 900;
            letter-spacing: 0.2px;
            flex: 1;
        }

        .meta {
            font-size: 12px;
            color: var(--color-text-muted);
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 999px;
            padding: 7px 10px;
            white-space: nowrap;
            flex: 0 0 auto;
        }

        .topicBody {
            max-height: 0px;
            overflow: hidden;
            transition: max-height 260ms ease;
            border-top: 1px solid var(--color-border);
        }

        .topicBody.open {
            max-height: 3000px;
        }

        .section {
            padding: 14px 14px;
        }

        .section + .section {
            border-top: 1px dashed var(--color-border-light);
        }

        .h3 {
            font-size: 16px;
            margin-bottom: 8px;
        }

        .p {
            margin: 0;
            color: var(--color-text-secondary);
            line-height: 1.7;
        }

        .bullets {
            list-style: none;
            margin-top: 12px;
            display: grid;
            gap: 10px;
            padding-left: 0;
        }

        .bullets li {
            display: flex;
            align-items: center;
            gap: 10px;
            color: var(--color-text-secondary);
            font-size: 14px;
        }

        .dot {
            width: 8px;
            height: 8px;
            border-radius: 999px;
            background: var(--color-text-primary);
            flex: 0 0 auto;
        }

        .miniGrid {
            margin-top: 12px;
            display: grid;
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 10px;
        }

        .mini {
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 14px;
            padding: 12px;
            display: flex;
            gap: 10px;
            align-items: center;
        }

        .miniIcon {
            width: 32px;
            height: 32px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: var(--color-surface);
            color: var(--color-text-secondary);
            flex: 0 0 auto;
        }

        .miniTitle {
            font-weight: 900;
            font-size: 13px;
        }

        .miniSub {
            font-size: 12px;
            color: var(--color-text-muted);
            margin-top: 2px;
        }

        .flow {
            margin-top: 12px;
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
            align-items: center;
        }

        .flowItem {
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 999px;
            padding: 8px 12px;
            color: var(--color-text-secondary);
            display: inline-flex;
            align-items: center;
            gap: 8px;
            font-size: 13px;
        }

        .flowIcon {
            display: grid;
            place-items: center;
            color: var(--color-text-primary);
        }

        .arrow {
            color: var(--color-text-muted);
            font-size: 14px;
        }

        @media (max-width: 720px) {
            .miniGrid {
                grid-template-columns: 1fr;
            }
        }
    `},If=()=>{const[a,c]=B.useState(!1),l=()=>c(p=>!p);return e.jsxs(zf.Wrapper,{className:`topicCard ${a?"open":""}`,children:[e.jsxs("button",{type:"button",className:"topicHeader",onClick:l,"aria-expanded":a,children:[e.jsx("span",{className:"chev",children:a?e.jsx(ie,{}):e.jsx(le,{})}),e.jsx("span",{className:"icon",children:e.jsx(xl,{})}),e.jsx("span",{className:"title",children:"Introduction"}),e.jsx("span",{className:"meta",children:a?"Collapse":"Expand"})]}),e.jsxs("div",{className:`topicBody ${a?"open":""}`,children:[e.jsxs("div",{className:"section",children:[e.jsx("h3",{className:"h3",children:"What is HTML"}),e.jsx("p",{className:"p",children:"HTML is the structure of a web page. It tells the browser what the content is and what it means: headings, paragraphs, lists, links, images, forms, and sections. HTML does not handle the final look and feel. CSS handles styling and JavaScript handles behavior."})]}),e.jsxs("div",{className:"section",children:[e.jsx("h3",{className:"h3",children:"How the web works"}),e.jsx("p",{className:"p",children:"When you open a website, your browser sends a request to a server. The server replies with files like HTML, CSS, and JavaScript. The browser downloads them, parses them, and renders the page."}),e.jsxs("div",{className:"miniGrid",children:[e.jsxs("div",{className:"mini",children:[e.jsx("span",{className:"miniIcon",children:e.jsx(Op,{})}),e.jsxs("div",{className:"miniText",children:[e.jsx("div",{className:"miniTitle",children:"Client"}),e.jsx("div",{className:"miniSub",children:"Browser"})]})]}),e.jsxs("div",{className:"mini",children:[e.jsx("span",{className:"miniIcon",children:e.jsx(cf,{})}),e.jsxs("div",{className:"miniText",children:[e.jsx("div",{className:"miniTitle",children:"Request"}),e.jsx("div",{className:"miniSub",children:"HTTP"})]})]}),e.jsxs("div",{className:"mini",children:[e.jsx("span",{className:"miniIcon",children:e.jsx(Op,{})}),e.jsxs("div",{className:"miniText",children:[e.jsx("div",{className:"miniTitle",children:"Server"}),e.jsx("div",{className:"miniSub",children:"Response"})]})]})]})]}),e.jsxs("div",{className:"section",children:[e.jsx("h3",{className:"h3",children:"Client server model"}),e.jsx("p",{className:"p",children:"The browser is the client. It asks for resources. The server stores and returns them. In real apps, servers may also run logic, talk to databases, and generate dynamic HTML."})]}),e.jsxs("div",{className:"section",children:[e.jsx("h3",{className:"h3",children:"HTTP basics"}),e.jsx("p",{className:"p",children:"HTTP is the protocol used for web communication. Common methods are GET (fetch data) and POST (send data). Status codes like 200 mean success, 404 means not found, and 500 means server error."}),e.jsxs("ul",{className:"bullets",children:[e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),"GET is used to read"]}),e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),"POST is used to send"]}),e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),"Status codes tell what happened"]})]})]}),e.jsxs("div",{className:"section",children:[e.jsx("h3",{className:"h3",children:"Browser parsing pipeline"}),e.jsx("p",{className:"p",children:"The browser reads HTML and builds the DOM (Document Object Model). It reads CSS and builds the CSSOM. Then it combines them to compute layout and paint pixels on the screen."})]}),e.jsxs("div",{className:"section",children:[e.jsx("h3",{className:"h3",children:"Rendering flow overview"}),e.jsx("p",{className:"p",children:"The common flow is: parse HTML into DOM, parse CSS into CSSOM, build render tree, layout, paint, then composite. JavaScript can update the DOM and trigger re-layout or repaint depending on what changed."}),e.jsxs("div",{className:"flow",children:[e.jsxs("div",{className:"flowItem",children:[e.jsx("span",{className:"flowIcon",children:e.jsx(Dm,{})}),"DOM"]}),e.jsx("div",{className:"arrow",children:"→"}),e.jsxs("div",{className:"flowItem",children:[e.jsx("span",{className:"flowIcon",children:e.jsx(_m,{})}),"Layout"]}),e.jsx("div",{className:"arrow",children:"→"}),e.jsx("div",{className:"flowItem",children:"Paint"}),e.jsx("div",{className:"arrow",children:"→"}),e.jsx("div",{className:"flowItem",children:"Composite"})]})]})]})]})},Ef={Wrapper:Q.section`
        width: 100%;
        border: 1px solid var(--color-border);
        background: var(--color-surface);
        border-radius: 18px;
        box-shadow: 0 12px 30px var(--color-shadow);
        overflow: hidden;
        margin-bottom: 5px;

        .topicHeader {
            width: 100%;
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 14px;
            background: transparent;
            color: var(--color-text-primary);
            text-align: left;
        }

        .topicHeader:hover {
            background: var(--color-surface-2);
        }

        .chev {
            width: 28px;
            height: 28px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            border-radius: 10px;
            background: var(--color-bg);
            color: var(--color-text-secondary);
        }

        .icon {
            width: 36px;
            height: 36px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            color: var(--color-text-secondary);
        }

        .title {
            font-weight: 900;
            flex: 1;
        }

        .meta {
            font-size: 12px;
            color: var(--color-text-muted);
        }

        .topicBody {
            max-height: 0px;
            overflow: hidden;
            transition: max-height 260ms ease;
            border-top: 1px solid var(--color-border);
        }

        .topicBody.open {
            max-height: 4000px;
        }

        .section {
            padding: 16px;
        }

        .section + .section {
            border-top: 1px dashed var(--color-border-light);
        }

        .h3 {
            font-size: 16px;
            margin-bottom: 8px;
        }

        .p {
            margin: 0;
            color: var(--color-text-secondary);
            line-height: 1.7;
        }

        .code {
            background: var(--color-bg);
            border: 1px solid var(--color-border);
            border-radius: 10px;
            padding: 12px;
            margin-top: 10px;
            font-family: monospace;
            font-size: 13px;
            overflow-x: auto;
        }

        .bullets {
            list-style: none;
            padding-left: 0;
            margin-top: 10px;
            display: grid;
            gap: 8px;
        }

        .bullets li {
            display: flex;
            align-items: center;
            gap: 8px;
            font-size: 14px;
            color: var(--color-text-secondary);
        }

        .dot {
            width: 6px;
            height: 6px;
            border-radius: 999px;
            background: var(--color-text-primary);
        }
    `},Mf=()=>{const[a,c]=B.useState(!1);return e.jsxs(Ef.Wrapper,{className:`topicCard ${a?"open":""}`,children:[e.jsxs("button",{type:"button",className:"topicHeader",onClick:()=>c(!a),"aria-expanded":a,children:[e.jsx("span",{className:"chev",children:a?e.jsx(ie,{}):e.jsx(le,{})}),e.jsx("span",{className:"icon",children:e.jsx(hl,{})}),e.jsx("span",{className:"title",children:"Basic Document Structure"}),e.jsx("span",{className:"meta",children:a?"Collapse":"Expand"})]}),e.jsxs("div",{className:`topicBody ${a?"open":""}`,children:[e.jsxs("div",{className:"section",children:[e.jsx("h3",{className:"h3",children:"Doctype"}),e.jsx("p",{className:"p",children:"The doctype tells the browser which version of HTML is being used. In modern HTML, we use a simple declaration:"}),e.jsx("pre",{className:"code",children:"<!DOCTYPE html>"}),e.jsx("p",{className:"p",children:"This ensures the browser renders the page in standards mode instead of compatibility mode."})]}),e.jsxs("div",{className:"section",children:[e.jsx("h3",{className:"h3",children:"html element"}),e.jsxs("p",{className:"p",children:["The ",e.jsx("strong",{children:"html"})," element is the root element of every HTML document. All other elements must be inside it."]}),e.jsx("pre",{className:"code",children:`<html lang="en">
</html>`})]}),e.jsxs("div",{className:"section",children:[e.jsx("h3",{className:"h3",children:"head and body"}),e.jsxs("p",{className:"p",children:["The ",e.jsx("strong",{children:"head"})," contains metadata such as title, meta tags, styles, and scripts. It does not display visible content."]}),e.jsxs("p",{className:"p",children:["The ",e.jsx("strong",{children:"body"})," contains all visible content such as headings, paragraphs, images, forms, and more."]}),e.jsx("pre",{className:"code",children:`<head>
  <title>My Page</title>
</head>

<body>
  <h1>Hello World</h1>
</body>`})]}),e.jsxs("div",{className:"section",children:[e.jsx("h3",{className:"h3",children:"lang attribute"}),e.jsxs("p",{className:"p",children:["The ",e.jsx("strong",{children:"lang"})," attribute defines the language of the document. It helps screen readers and search engines understand the content."]}),e.jsx("pre",{className:"code",children:'<html lang="en">'})]}),e.jsxs("div",{className:"section",children:[e.jsx("h3",{className:"h3",children:"dir attribute"}),e.jsxs("p",{className:"p",children:["The ",e.jsx("strong",{children:"dir"})," attribute defines text direction. Common values:"]}),e.jsxs("ul",{className:"bullets",children:[e.jsxs("li",{children:[e.jsx("span",{className:"dot"})," ltr - left to right"]}),e.jsxs("li",{children:[e.jsx("span",{className:"dot"})," rtl - right to left"]})]}),e.jsx("pre",{className:"code",children:'<html dir="ltr">'})]}),e.jsxs("div",{className:"section",children:[e.jsx("h3",{className:"h3",children:"Character encoding"}),e.jsx("p",{className:"p",children:"Character encoding tells the browser how to interpret text characters. UTF-8 is the standard encoding and supports almost all characters."}),e.jsx("pre",{className:"code",children:'<meta charset="UTF-8">'})]}),e.jsxs("div",{className:"section",children:[e.jsx("h3",{className:"h3",children:"Viewport meta"}),e.jsx("p",{className:"p",children:"The viewport meta tag makes the website responsive on mobile devices by controlling layout scaling."}),e.jsx("pre",{className:"code",children:'<meta name="viewport" content="width=device-width, initial-scale=1.0">'})]}),e.jsxs("div",{className:"section",children:[e.jsx("h3",{className:"h3",children:"Favicon"}),e.jsx("p",{className:"p",children:"A favicon is the small icon shown in the browser tab. It is added using the link element inside the head."}),e.jsx("pre",{className:"code",children:'<link rel="icon" href="/favicon.ico">'})]}),e.jsxs("div",{className:"section",children:[e.jsx("h3",{className:"h3",children:"Title element"}),e.jsx("p",{className:"p",children:"The title element defines the text shown in the browser tab and is important for SEO."}),e.jsx("pre",{className:"code",children:"<title>My Website</title>"})]})]})]})},Bf={Wrapper:Q.section`
        width: 100%;
        border: 1px solid var(--color-border);
        background: var(--color-surface);
        border-radius: 18px;
        box-shadow: 0 12px 30px var(--color-shadow);
        overflow: hidden;
        margin-bottom: 5px;

        .topicHeader {
            width: 100%;
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 14px 14px;
            background: transparent;
            color: var(--color-text-primary);
            text-align: left;
        }

        .topicHeader:hover {
            background: var(--color-surface-2);
        }

        .chev {
            width: 28px;
            height: 28px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            border-radius: 10px;
            background: var(--color-bg);
            color: var(--color-text-secondary);
            flex: 0 0 auto;
        }

        .icon {
            width: 36px;
            height: 36px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            color: var(--color-text-secondary);
            font-size: 18px;
            flex: 0 0 auto;
        }

        .title {
            font-weight: 900;
            letter-spacing: 0.2px;
            flex: 1;
        }

        .meta {
            font-size: 12px;
            color: var(--color-text-muted);
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 999px;
            padding: 7px 10px;
            white-space: nowrap;
            flex: 0 0 auto;
        }

        .topicBody {
            max-height: 0px;
            overflow: hidden;
            transition: max-height 260ms ease;
            border-top: 1px solid var(--color-border);
        }

        .topicBody.open {
            max-height: 6000px;
        }

        .section {
            padding: 14px 14px;
        }

        .section + .section {
            border-top: 1px dashed var(--color-border-light);
        }

        .h3 {
            font-size: 16px;
            margin-bottom: 8px;
            display: flex;
            align-items: center;
            gap: 10px;
        }

        .h3Icon {
            width: 30px;
            height: 30px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            color: var(--color-text-secondary);
            flex: 0 0 auto;
            font-size: 15px;
        }

        .p {
            margin: 0;
            color: var(--color-text-secondary);
            line-height: 1.7;
        }

        .mono {
            font-family:
                ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                "Liberation Mono", "Courier New", monospace;
            font-size: 0.95em;
            color: var(--color-text-primary);
        }

        .bullets {
            list-style: none;
            margin-top: 12px;
            display: grid;
            gap: 10px;
            padding-left: 0;
        }

        .bullets li {
            display: flex;
            align-items: flex-start;
            gap: 10px;
            color: var(--color-text-secondary);
            font-size: 14px;
            line-height: 1.55;
        }

        .dot {
            width: 8px;
            height: 8px;
            border-radius: 999px;
            background: var(--color-text-primary);
            margin-top: 7px;
            flex: 0 0 auto;
        }

        .codeCard {
            margin-top: 12px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 14px;
            overflow: hidden;
        }

        .codeTop {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 10px;
            padding: 10px 12px;
            border-bottom: 1px solid var(--color-border);
            background: var(--color-surface);
        }

        .codeTitle {
            font-weight: 900;
            font-size: 13px;
            color: var(--color-text-secondary);
        }

        .copyBtn {
            width: 34px;
            height: 34px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            color: var(--color-text-primary);
        }

        .copyBtn:hover {
            background: var(--color-surface-2);
        }

        .code {
            margin: 0;
            padding: 12px;
            overflow: auto;
            color: var(--color-text-primary);
        }

        .note {
            padding: 10px 12px 12px 12px;
            border-top: 1px dashed var(--color-border-light);
            color: var(--color-text-muted);
            font-size: 13px;
            line-height: 1.6;
        }

        .warn {
            margin-top: 12px;
            border: 1px solid var(--color-border);
            background: var(--color-surface-2);
            border-radius: 14px;
            padding: 12px;
            display: flex;
            gap: 10px;
            align-items: flex-start;
        }

        .warnIcon {
            width: 34px;
            height: 34px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            color: var(--color-text-primary);
            flex: 0 0 auto;
        }

        .warnText {
            color: var(--color-text-secondary);
            line-height: 1.6;
            font-size: 14px;
        }

        .miniGrid {
            margin-top: 12px;
            display: grid;
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 10px;
        }

        .mini {
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 14px;
            padding: 12px;
        }

        .miniTitle {
            font-weight: 900;
            font-size: 13px;
            color: var(--color-text-primary);
        }

        .miniSub {
            margin-top: 6px;
            font-size: 12px;
            color: var(--color-text-muted);
            line-height: 1.6;
        }

        @media (max-width: 720px) {
            .miniGrid {
                grid-template-columns: 1fr;
            }
        }
    `},Hf=()=>{const[a,c]=B.useState(!1),l=()=>c(U=>!U),p=async U=>{try{await navigator.clipboard.writeText(U)}catch{}},m="<h1>Hello</h1>",f='<a href="https://example.com" target="_blank" rel="noopener noreferrer">Visit</a>',b='<input type="checkbox" checked />',L='<div id="card" class="box" data-user-id="42" title="Profile"></div>',T="<!-- This is a comment -->",F='<img src="photo.jpg" alt="A photo" />',W=`<br />
<hr />
<meta charset="utf-8" />`,O=`<input>
<img>
<br>
<meta charset="utf-8">`,P=`<div></div>
<span></span>
<p></p>
<button></button>`;return e.jsxs(Bf.Wrapper,{className:`topicCard ${a?"open":""}`,children:[e.jsxs("button",{type:"button",className:"topicHeader",onClick:l,"aria-expanded":a,children:[e.jsx("span",{className:"chev",children:a?e.jsx(ie,{}):e.jsx(le,{})}),e.jsx("span",{className:"icon",children:e.jsx(Me,{})}),e.jsx("span",{className:"title",children:"HTML Syntax Rules"}),e.jsx("span",{className:"meta",children:a?"Collapse":"Expand"})]}),e.jsxs("div",{className:`topicBody ${a?"open":""}`,children:[e.jsxs("div",{className:"section",children:[e.jsxs("h3",{className:"h3",children:[e.jsx("span",{className:"h3Icon",children:e.jsx(al,{})}),"Tags"]}),e.jsxs("p",{className:"p",children:["A ",e.jsx("span",{className:"mono",children:"tag"})," is the markup inside angle brackets. Most elements use an opening tag and a closing tag."]}),e.jsxs("div",{className:"codeCard",children:[e.jsxs("div",{className:"codeTop",children:[e.jsx("div",{className:"codeTitle",children:"Example"}),e.jsx("button",{type:"button",className:"copyBtn",onClick:()=>p(m),title:"Copy","aria-label":"Copy code",children:e.jsx(Fr,{})})]}),e.jsx("pre",{className:"code",children:e.jsx("code",{children:m})}),e.jsxs("div",{className:"note",children:["Opening tag:"," ",e.jsx("span",{className:"mono",children:"<h1>"})," and closing tag: ",e.jsx("span",{className:"mono",children:"</h1>"})]})]})]}),e.jsxs("div",{className:"section",children:[e.jsxs("h3",{className:"h3",children:[e.jsx("span",{className:"h3Icon",children:e.jsx(uo,{})}),"Elements"]}),e.jsxs("p",{className:"p",children:["An ",e.jsx("span",{className:"mono",children:"element"})," is the complete thing: the opening tag, the content, and the closing tag. Some elements are empty (they have no content and no closing tag). Those are called void elements (covered below)."]}),e.jsxs("div",{className:"miniGrid",children:[e.jsxs("div",{className:"mini",children:[e.jsx("div",{className:"miniTitle",children:"Element"}),e.jsx("div",{className:"miniSub",children:"Tag + content + closing tag"})]}),e.jsxs("div",{className:"mini",children:[e.jsx("div",{className:"miniTitle",children:"Tag"}),e.jsx("div",{className:"miniSub",children:"Only the brackets part"})]}),e.jsxs("div",{className:"mini",children:[e.jsx("div",{className:"miniTitle",children:"Void element"}),e.jsx("div",{className:"miniSub",children:"No closing tag"})]})]})]}),e.jsxs("div",{className:"section",children:[e.jsxs("h3",{className:"h3",children:[e.jsx("span",{className:"h3Icon",children:e.jsx(gs,{})}),"Attributes"]}),e.jsxs("p",{className:"p",children:["Attributes add extra information to an element. They live inside the opening tag. Most attributes follow the format ",e.jsx("span",{className:"mono",children:'name="value"'}),"."]}),e.jsxs("div",{className:"codeCard",children:[e.jsxs("div",{className:"codeTop",children:[e.jsx("div",{className:"codeTitle",children:"Example"}),e.jsx("button",{type:"button",className:"copyBtn",onClick:()=>p(f),title:"Copy","aria-label":"Copy code",children:e.jsx(Fr,{})})]}),e.jsx("pre",{className:"code",children:e.jsx("code",{children:f})}),e.jsxs("div",{className:"note",children:[e.jsx("span",{className:"mono",children:"href"}),","," ",e.jsx("span",{className:"mono",children:"target"}),","," ",e.jsx("span",{className:"mono",children:"rel"})," are attributes."]})]})]}),e.jsxs("div",{className:"section",children:[e.jsxs("h3",{className:"h3",children:[e.jsx("span",{className:"h3Icon",children:e.jsx(hu,{})}),"Boolean attributes"]}),e.jsx("p",{className:"p",children:'Boolean attributes are either "present" or "absent". If present, they mean true. You usually do not write a value.'}),e.jsxs("div",{className:"codeCard",children:[e.jsxs("div",{className:"codeTop",children:[e.jsx("div",{className:"codeTitle",children:"Example"}),e.jsx("button",{type:"button",className:"copyBtn",onClick:()=>p(b),title:"Copy","aria-label":"Copy code",children:e.jsx(Fr,{})})]}),e.jsx("pre",{className:"code",children:e.jsx("code",{children:b})}),e.jsxs("div",{className:"note",children:[e.jsx("span",{className:"mono",children:"checked"}),","," ",e.jsx("span",{className:"mono",children:"disabled"}),","," ",e.jsx("span",{className:"mono",children:"required"}),","," ",e.jsx("span",{className:"mono",children:"readonly"})," are common boolean attributes."]})]})]}),e.jsxs("div",{className:"section",children:[e.jsxs("h3",{className:"h3",children:[e.jsx("span",{className:"h3Icon",children:e.jsx(xl,{})}),"Global attributes"]}),e.jsx("p",{className:"p",children:"Global attributes are attributes that work on almost all HTML elements. They are widely used for styling, identification, accessibility, and custom behavior."}),e.jsxs("ul",{className:"bullets",children:[e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),e.jsx("span",{className:"mono",children:"id"})," - unique identifier"]}),e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),e.jsx("span",{className:"mono",children:"class"})," - reusable group name"]}),e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),e.jsx("span",{className:"mono",children:"title"})," - tooltip text"]}),e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),e.jsx("span",{className:"mono",children:"style"})," - inline styles (use rarely)"]}),e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),e.jsx("span",{className:"mono",children:"hidden"})," - hides the element"]}),e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),e.jsx("span",{className:"mono",children:"tabindex"})," - keyboard navigation"]}),e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),e.jsx("span",{className:"mono",children:"role"})," and"," ",e.jsx("span",{className:"mono",children:"aria-*"})," - accessibility"]})]}),e.jsxs("div",{className:"codeCard",children:[e.jsxs("div",{className:"codeTop",children:[e.jsx("div",{className:"codeTitle",children:"Example"}),e.jsx("button",{type:"button",className:"copyBtn",onClick:()=>p(L),title:"Copy","aria-label":"Copy code",children:e.jsx(Fr,{})})]}),e.jsx("pre",{className:"code",children:e.jsx("code",{children:L})})]})]}),e.jsxs("div",{className:"section",children:[e.jsxs("h3",{className:"h3",children:[e.jsx("span",{className:"h3Icon",children:e.jsx(ul,{})}),"Data attributes"]}),e.jsxs("p",{className:"p",children:["Data attributes store custom data on elements. They start with ",e.jsx("span",{className:"mono",children:"data-"}),". They are useful when you want to attach extra information to a DOM element without inventing new attributes."]}),e.jsxs("ul",{className:"bullets",children:[e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),"Example:"," ",e.jsx("span",{className:"mono",children:'data-user-id="42"'})]}),e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),"In JavaScript you read them using"," ",e.jsx("span",{className:"mono",children:"element.dataset"})]})]})]}),e.jsxs("div",{className:"section",children:[e.jsxs("h3",{className:"h3",children:[e.jsx("span",{className:"h3Icon",children:e.jsx(vu,{})}),"Comments"]}),e.jsx("p",{className:"p",children:"Comments are ignored by the browser. They are useful for notes, but avoid leaving sensitive information or large blocks of commented code in production."}),e.jsxs("div",{className:"codeCard",children:[e.jsxs("div",{className:"codeTop",children:[e.jsx("div",{className:"codeTitle",children:"Example"}),e.jsx("button",{type:"button",className:"copyBtn",onClick:()=>p(T),title:"Copy","aria-label":"Copy code",children:e.jsx(Fr,{})})]}),e.jsx("pre",{className:"code",children:e.jsx("code",{children:T})})]})]}),e.jsxs("div",{className:"section",children:[e.jsxs("h3",{className:"h3",children:[e.jsx("span",{className:"h3Icon",children:e.jsx(gs,{})}),"Case sensitivity"]}),e.jsxs("p",{className:"p",children:["HTML tags and attribute names are generally"," ",e.jsx("span",{className:"mono",children:"case-insensitive"}),", but the common convention is to write them in lowercase. File paths in URLs can be case-sensitive depending on your server, so keep filenames consistent."]}),e.jsxs("div",{className:"warn",children:[e.jsx("span",{className:"warnIcon",children:e.jsx(Je,{})}),e.jsx("div",{className:"warnText",children:"Use lowercase for tags and attributes. Keep file paths consistent in case."})]})]}),e.jsxs("div",{className:"section",children:[e.jsxs("h3",{className:"h3",children:[e.jsx("span",{className:"h3Icon",children:e.jsx(Zm,{})}),"Self closing tags myth"]}),e.jsxs("p",{className:"p",children:["In HTML, many people write"," ",e.jsx("span",{className:"mono",children:"<div />"}),'. This is not valid for normal elements. Only specific elements are "void" (like ',e.jsx("span",{className:"mono",children:"img"}),","," ",e.jsx("span",{className:"mono",children:"input"}),","," ",e.jsx("span",{className:"mono",children:"br"}),")."]}),e.jsxs("div",{className:"codeCard",children:[e.jsxs("div",{className:"codeTop",children:[e.jsx("div",{className:"codeTitle",children:"Correct examples"}),e.jsx("button",{type:"button",className:"copyBtn",onClick:()=>p(P),title:"Copy","aria-label":"Copy code",children:e.jsx(Fr,{})})]}),e.jsx("pre",{className:"code",children:e.jsx("code",{children:P})}),e.jsx("div",{className:"note",children:"Regular elements need both opening and closing tags."})]})]}),e.jsxs("div",{className:"section",children:[e.jsxs("h3",{className:"h3",children:[e.jsx("span",{className:"h3Icon",children:e.jsx(al,{})}),"Void elements"]}),e.jsxs("p",{className:"p",children:["Void elements do not have a closing tag in HTML. You can write them as ",e.jsx("span",{className:"mono",children:"<img>"})," ","or ",e.jsx("span",{className:"mono",children:"<img />"}),". Both are fine in HTML, but the important part is: you do not write a closing tag like"," ",e.jsx("span",{className:"mono",children:"</img>"}),"."]}),e.jsxs("div",{className:"codeCard",children:[e.jsxs("div",{className:"codeTop",children:[e.jsx("div",{className:"codeTitle",children:"Common void elements"}),e.jsx("button",{type:"button",className:"copyBtn",onClick:()=>p(O),title:"Copy","aria-label":"Copy code",children:e.jsx(Fr,{})})]}),e.jsx("pre",{className:"code",children:e.jsx("code",{children:O})})]}),e.jsxs("div",{className:"codeCard",children:[e.jsxs("div",{className:"codeTop",children:[e.jsx("div",{className:"codeTitle",children:"Void example"}),e.jsx("button",{type:"button",className:"copyBtn",onClick:()=>p(F),title:"Copy","aria-label":"Copy code",children:e.jsx(Fr,{})})]}),e.jsx("pre",{className:"code",children:e.jsx("code",{children:F})})]}),e.jsxs("div",{className:"codeCard",children:[e.jsxs("div",{className:"codeTop",children:[e.jsx("div",{className:"codeTitle",children:"More void examples"}),e.jsx("button",{type:"button",className:"copyBtn",onClick:()=>p(W),title:"Copy","aria-label":"Copy code",children:e.jsx(Fr,{})})]}),e.jsx("pre",{className:"code",children:e.jsx("code",{children:W})})]}),e.jsxs("div",{className:"note",children:["Common void elements:"," ",e.jsx("span",{className:"mono",children:"area, base, br, col, embed, hr, img, input, link, meta, param, source, track, wbr"})]})]})]})]})},Pf={Wrapper:Q.section`
        width: 100%;
        border: 1px solid var(--color-border);
        background: var(--color-surface);
        border-radius: 18px;
        box-shadow: 0 12px 30px var(--color-shadow);
        overflow: hidden;
        margin-bottom: 5px;

        .topicHeader {
            width: 100%;
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 14px 14px;
            background: transparent;
            color: var(--color-text-primary);
            text-align: left;
        }

        .topicHeader:hover {
            background: var(--color-surface-2);
        }

        .chev {
            width: 28px;
            height: 28px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            border-radius: 10px;
            background: var(--color-bg);
            color: var(--color-text-secondary);
            flex: 0 0 auto;
        }

        .icon {
            width: 36px;
            height: 36px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            color: var(--color-text-secondary);
            font-size: 18px;
            flex: 0 0 auto;
        }

        .title {
            font-weight: 900;
            letter-spacing: 0.2px;
            flex: 1;
        }

        .meta {
            font-size: 12px;
            color: var(--color-text-muted);
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 999px;
            padding: 7px 10px;
            white-space: nowrap;
            flex: 0 0 auto;
        }

        .topicBody {
            max-height: 0px;
            overflow: hidden;
            transition: max-height 260ms ease;
            border-top: 1px solid var(--color-border);
        }

        .topicBody.open {
            max-height: 5200px;
        }

        .intro {
            padding: 14px 14px 2px 14px;
        }

        .section {
            padding: 14px 14px;
        }

        .section + .section {
            border-top: 1px dashed var(--color-border-light);
        }

        .secHead {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 8px;
        }

        .secIcon {
            width: 32px;
            height: 32px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            color: var(--color-text-secondary);
            flex: 0 0 auto;
        }

        .h3 {
            font-size: 16px;
            margin: 0;
        }

        .p {
            margin: 0;
            color: var(--color-text-secondary);
            line-height: 1.7;
        }

        .mono {
            font-family:
                ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                "Liberation Mono", "Courier New", monospace;
            font-size: 0.95em;
            padding: 1px 6px;
            border-radius: 999px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            color: var(--color-text-primary);
            display: inline-block;
            margin: 0 4px;
        }

        .bullets {
            list-style: none;
            margin-top: 12px;
            display: grid;
            gap: 10px;
            padding-left: 0;
        }

        .bullets li {
            display: flex;
            align-items: center;
            gap: 10px;
            color: var(--color-text-secondary);
            font-size: 14px;
        }

        .dot {
            width: 8px;
            height: 8px;
            border-radius: 999px;
            background: var(--color-text-primary);
            flex: 0 0 auto;
        }

        .chips {
            margin-top: 12px;
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
        }

        .chip {
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 999px;
            padding: 7px 10px;
            font-size: 13px;
            color: var(--color-text-secondary);
            line-height: 1.2;
        }

        .cards2 {
            margin-top: 12px;
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 10px;
        }

        .miniCard {
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 14px;
            padding: 12px;
        }

        .miniTitle {
            font-weight: 900;
            font-size: 13px;
            color: var(--color-text-primary);
        }

        .miniSub {
            margin-top: 6px;
            font-size: 13px;
            color: var(--color-text-secondary);
            line-height: 1.6;
        }

        .note {
            margin-top: 12px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 14px;
            padding: 12px;
            display: flex;
            gap: 10px;
            align-items: flex-start;
        }

        .note.small {
            margin-top: 10px;
        }

        .noteIcon {
            width: 32px;
            height: 32px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: var(--color-surface);
            color: var(--color-text-secondary);
            flex: 0 0 auto;
        }

        .noteText {
            color: var(--color-text-secondary);
            line-height: 1.6;
            font-size: 14px;
        }

        .warn {
            margin-top: 12px;
            border: 1px dashed var(--color-border-light);
            border-radius: 14px;
            padding: 12px;
            display: flex;
            align-items: flex-start;
            gap: 10px;
            background: var(--color-surface-2);
        }

        .warnDot {
            width: 10px;
            height: 10px;
            border-radius: 999px;
            background: var(--color-text-primary);
            margin-top: 4px;
            flex: 0 0 auto;
        }

        .warnText {
            color: var(--color-text-secondary);
            line-height: 1.6;
            font-size: 14px;
        }

        .miniGrid {
            margin-top: 12px;
            display: grid;
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 10px;
        }

        .mini {
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 14px;
            padding: 12px;
            display: flex;
            gap: 10px;
            align-items: center;
        }

        .miniIcon {
            width: 32px;
            height: 32px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: var(--color-surface);
            color: var(--color-text-secondary);
            flex: 0 0 auto;
        }

        .miniTitle {
            font-weight: 900;
            font-size: 13px;
        }

        .miniSub {
            font-size: 12px;
            color: var(--color-text-muted);
            margin-top: 2px;
        }

        .flow {
            margin-top: 12px;
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
            align-items: center;
        }

        .flowItem {
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 999px;
            padding: 8px 12px;
            color: var(--color-text-secondary);
            display: inline-flex;
            align-items: center;
            gap: 8px;
            font-size: 13px;
        }

        .flowIcon {
            display: grid;
            place-items: center;
            color: var(--color-text-primary);
        }

        .arrow {
            color: var(--color-text-muted);
            font-size: 14px;
        }

        .quick {
            border-top: 1px solid var(--color-border);
            padding: 14px;
            background: linear-gradient(
                180deg,
                var(--color-surface),
                var(--color-surface-2)
            );
        }

        .quickTitle {
            font-weight: 900;
            margin-bottom: 8px;
        }

        .quickText {
            color: var(--color-text-secondary);
            line-height: 1.6;
            font-size: 14px;
        }

        @media (max-width: 860px) {
            .cards2 {
                grid-template-columns: 1fr;
            }

            .miniGrid {
                grid-template-columns: 1fr;
            }
        }
    `},_f=()=>{const[a,c]=B.useState(!1),l=()=>c(p=>!p);return e.jsxs(Pf.Wrapper,{className:`topicCard ${a?"open":""}`,children:[e.jsxs("button",{type:"button",className:"topicHeader",onClick:l,"aria-expanded":a,children:[e.jsx("span",{className:"chev",children:a?e.jsx(ie,{}):e.jsx(le,{})}),e.jsx("span",{className:"icon",children:e.jsx(xu,{})}),e.jsx("span",{className:"title",children:"Content Model"}),e.jsx("span",{className:"meta",children:a?"Collapse":"Expand"})]}),e.jsxs("div",{className:`topicBody ${a?"open":""}`,children:[e.jsxs("div",{className:"intro",children:[e.jsx("p",{className:"p",children:"The HTML content model is a simple way to understand where an element is allowed to live and what kind of content it can contain. In practice, it helps you avoid invalid nesting and helps you write HTML that is more predictable and accessible."}),e.jsxs("div",{className:"note",children:[e.jsx("span",{className:"noteIcon",children:e.jsx(He,{})}),e.jsxs("div",{className:"noteText",children:['Modern HTML is not only "block vs inline". HTML has content categories like'," ",e.jsx("span",{className:"mono",children:"flow"}),",",e.jsx("span",{className:"mono",children:"phrasing"}),","," ",e.jsx("span",{className:"mono",children:"sectioning"}),", and"," ",e.jsx("span",{className:"mono",children:"interactive"}),". These categories explain nesting rules more accurately."]})]})]}),e.jsxs("div",{className:"section",children:[e.jsxs("div",{className:"secHead",children:[e.jsx("span",{className:"secIcon",children:e.jsx(Fm,{})}),e.jsx("h3",{className:"h3",children:"Block vs inline"})]}),e.jsx("p",{className:"p",children:"This is the classic beginner idea. A block element usually starts on a new line and takes full width by default. An inline element usually stays within a line of text and only takes the space it needs."}),e.jsxs("div",{className:"cards2",children:[e.jsxs("div",{className:"miniCard",children:[e.jsx("div",{className:"miniTitle",children:"Block examples"}),e.jsx("div",{className:"miniSub",children:"div, p, h1, ul, li, section, article"})]}),e.jsxs("div",{className:"miniCard",children:[e.jsx("div",{className:"miniTitle",children:"Inline examples"}),e.jsx("div",{className:"miniSub",children:"span, a, strong, em, code, img"})]})]}),e.jsxs("div",{className:"warn",children:[e.jsx("span",{className:"warnDot"}),e.jsx("div",{className:"warnText",children:"Block vs inline is useful, but it is not a complete rule set. For correct nesting rules, use the content categories below."})]})]}),e.jsxs("div",{className:"section",children:[e.jsxs("div",{className:"secHead",children:[e.jsx("span",{className:"secIcon",children:e.jsx(co,{})}),e.jsx("h3",{className:"h3",children:"Flow content"})]}),e.jsxs("p",{className:"p",children:["Flow content is the broad category for most elements you normally place inside the"," ",e.jsx("span",{className:"mono",children:"body"}),". If you are building the structure of a page, you are mostly working with flow content."]}),e.jsxs("ul",{className:"bullets",children:[e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),"Includes paragraphs, headings, lists, sections, images, tables, forms, etc."]}),e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),"Most layout level elements are flow content."]})]})]}),e.jsxs("div",{className:"section",children:[e.jsxs("div",{className:"secHead",children:[e.jsx("span",{className:"secIcon",children:e.jsx(gs,{})}),e.jsx("h3",{className:"h3",children:"Phrasing content"})]}),e.jsx("p",{className:"p",children:'Phrasing content is basically "text level" content. It is what you can put inside a paragraph without breaking its meaning. It usually flows inline with text.'}),e.jsxs("div",{className:"chips",children:[e.jsx("span",{className:"chip",children:"span"}),e.jsx("span",{className:"chip",children:"a"}),e.jsx("span",{className:"chip",children:"strong"}),e.jsx("span",{className:"chip",children:"em"}),e.jsx("span",{className:"chip",children:"code"}),e.jsx("span",{className:"chip",children:"img"}),e.jsx("span",{className:"chip",children:"br"}),e.jsx("span",{className:"chip",children:"small"})]}),e.jsxs("div",{className:"note small",children:[e.jsx("span",{className:"noteIcon",children:e.jsx(He,{})}),e.jsxs("div",{className:"noteText",children:["A common mistake is placing a block element inside a"," ",e.jsx("span",{className:"mono",children:"p"}),". A paragraph can contain phrasing content, not flow content."]})]})]}),e.jsxs("div",{className:"section",children:[e.jsxs("div",{className:"secHead",children:[e.jsx("span",{className:"secIcon",children:e.jsx(mu,{})}),e.jsx("h3",{className:"h3",children:"Sectioning content"})]}),e.jsx("p",{className:"p",children:"Sectioning content creates a new section in the document outline. It helps screen readers and search engines understand the structure of your page."}),e.jsxs("div",{className:"cards2",children:[e.jsxs("div",{className:"miniCard",children:[e.jsx("div",{className:"miniTitle",children:"Sectioning elements"}),e.jsx("div",{className:"miniSub",children:"section, article, nav, aside"})]}),e.jsxs("div",{className:"miniCard",children:[e.jsx("div",{className:"miniTitle",children:"Why it matters"}),e.jsx("div",{className:"miniSub",children:"Better structure, accessibility, and meaning"})]})]})]}),e.jsxs("div",{className:"section",children:[e.jsxs("div",{className:"secHead",children:[e.jsx("span",{className:"secIcon",children:e.jsx(uo,{})}),e.jsx("h3",{className:"h3",children:"Heading content"})]}),e.jsxs("p",{className:"p",children:["Heading content includes"," ",e.jsx("span",{className:"mono",children:"h1"})," to"," ",e.jsx("span",{className:"mono",children:"h6"}),". Headings label sections and improve navigation for users and assistive technology."]}),e.jsxs("ul",{className:"bullets",children:[e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),"Use headings in order. Do not jump levels randomly."]}),e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),"Prefer one main page title. Other headings represent sub-sections."]})]})]}),e.jsxs("div",{className:"section",children:[e.jsxs("div",{className:"secHead",children:[e.jsx("span",{className:"secIcon",children:e.jsx(fs,{})}),e.jsx("h3",{className:"h3",children:"Embedded content"})]}),e.jsx("p",{className:"p",children:"Embedded content is content that brings external media or non-text resources into the document."}),e.jsxs("div",{className:"chips",children:[e.jsx("span",{className:"chip",children:"img"}),e.jsx("span",{className:"chip",children:"video"}),e.jsx("span",{className:"chip",children:"audio"}),e.jsx("span",{className:"chip",children:"iframe"}),e.jsx("span",{className:"chip",children:"canvas"}),e.jsx("span",{className:"chip",children:"svg"})]}),e.jsxs("div",{className:"note small",children:[e.jsx("span",{className:"noteIcon",children:e.jsx(He,{})}),e.jsx("div",{className:"noteText",children:"Embedded content often has extra accessibility requirements, like alt text for images or captions for video."})]})]}),e.jsxs("div",{className:"section",children:[e.jsxs("div",{className:"secHead",children:[e.jsx("span",{className:"secIcon",children:e.jsx(yu,{})}),e.jsx("h3",{className:"h3",children:"Interactive content"})]}),e.jsx("p",{className:"p",children:"Interactive content includes elements that the user can interact with. They usually accept focus, clicks, or keyboard actions."}),e.jsxs("div",{className:"cards2",children:[e.jsxs("div",{className:"miniCard",children:[e.jsx("div",{className:"miniTitle",children:"Examples"}),e.jsx("div",{className:"miniSub",children:"button, a (with href), input, select, textarea, details, summary"})]}),e.jsxs("div",{className:"miniCard",children:[e.jsx("div",{className:"miniTitle",children:"Rule of thumb"}),e.jsx("div",{className:"miniSub",children:"Do not nest interactive elements inside each other"})]})]}),e.jsxs("div",{className:"warn",children:[e.jsx("span",{className:"warnDot"}),e.jsx("div",{className:"warnText",children:"Avoid nesting buttons inside links or links inside buttons. It creates confusing behavior for keyboard and screen reader users."})]})]}),e.jsxs("div",{className:"section",children:[e.jsxs("div",{className:"secHead",children:[e.jsx("span",{className:"secIcon",children:e.jsx(He,{})}),e.jsx("h3",{className:"h3",children:"Metadata content"})]}),e.jsxs("p",{className:"p",children:["Metadata content is mainly used inside the"," ",e.jsx("span",{className:"mono",children:"head"}),". It provides information about the document rather than visible content."]}),e.jsxs("div",{className:"chips",children:[e.jsx("span",{className:"chip",children:"title"}),e.jsx("span",{className:"chip",children:"meta"}),e.jsx("span",{className:"chip",children:"link"}),e.jsx("span",{className:"chip",children:"style"}),e.jsx("span",{className:"chip",children:"script"}),e.jsx("span",{className:"chip",children:"base"})]}),e.jsxs("div",{className:"note small",children:[e.jsx("span",{className:"noteIcon",children:e.jsx(He,{})}),e.jsx("div",{className:"noteText",children:"Metadata affects SEO, social previews, and how the page behaves on mobile devices."})]})]}),e.jsxs("div",{className:"section",children:[e.jsxs("div",{className:"secHead",children:[e.jsx("span",{className:"secIcon",children:e.jsx(co,{})}),e.jsx("h3",{className:"h3",children:"Transparent content model"})]}),e.jsx("p",{className:"p",children:'"Transparent" means the element does not define a fixed content category by itself. Instead, it allows the same content that its parent allows.'}),e.jsxs("div",{className:"cards2",children:[e.jsxs("div",{className:"miniCard",children:[e.jsx("div",{className:"miniTitle",children:"Common example"}),e.jsxs("div",{className:"miniSub",children:[e.jsx("span",{className:"mono",children:"a"})," can wrap text, images, and other phrasing content depending on context"]})]}),e.jsxs("div",{className:"miniCard",children:[e.jsx("div",{className:"miniTitle",children:"Why it exists"}),e.jsx("div",{className:"miniSub",children:"Flexible nesting without breaking semantics"})]})]}),e.jsxs("div",{className:"note small",children:[e.jsx("span",{className:"noteIcon",children:e.jsx(He,{})}),e.jsx("div",{className:"noteText",children:'Transparent does not mean "anything is allowed". The surrounding context still matters.'})]})]}),e.jsxs("div",{className:"quick",children:[e.jsx("div",{className:"quickTitle",children:"Quick take"}),e.jsx("div",{className:"quickText",children:"Flow is most body content. Phrasing is text level. Sectioning creates meaningful sections. Embedded is media. Interactive is clickable/focusable. Metadata is head info. Transparent depends on context."})]})]})]})},Of={Wrapper:Q.section`
        width: 100%;
        border: 1px solid var(--color-border);
        background: var(--color-surface);
        border-radius: 18px;
        box-shadow: 0 12px 30px var(--color-shadow);
        overflow: hidden;
        margin-bottom: 5px;

        .topicHeader {
            width: 100%;
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 14px 14px;
            background: transparent;
            color: var(--color-text-primary);
            text-align: left;
        }

        .topicHeader:hover {
            background: var(--color-surface-2);
        }

        .chev {
            width: 28px;
            height: 28px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            border-radius: 10px;
            background: var(--color-bg);
            color: var(--color-text-secondary);
            flex: 0 0 auto;
        }

        .icon {
            width: 36px;
            height: 36px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            color: var(--color-text-secondary);
            font-size: 18px;
            flex: 0 0 auto;
        }

        .title {
            font-weight: 900;
            letter-spacing: 0.2px;
            flex: 1;
        }

        .meta {
            font-size: 12px;
            color: var(--color-text-muted);
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 999px;
            padding: 7px 10px;
            white-space: nowrap;
            flex: 0 0 auto;
        }

        .topicBody {
            max-height: 0px;
            overflow: hidden;
            transition: max-height 260ms ease;
            border-top: 1px solid var(--color-border);
        }

        .topicBody.open {
            max-height: 5000px;
        }

        .section {
            padding: 14px 14px;
        }

        .section + .section {
            border-top: 1px dashed var(--color-border-light);
        }

        .h3 {
            display: flex;
            align-items: center;
            gap: 10px;
            font-size: 16px;
            margin-bottom: 8px;
        }

        .h3Icon {
            width: 28px;
            height: 28px;
            border-radius: 10px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            color: var(--color-text-secondary);
            flex: 0 0 auto;
            font-size: 16px;
        }

        .p {
            margin: 0;
            color: var(--color-text-secondary);
            line-height: 1.7;
        }

        .p + .p {
            margin-top: 10px;
        }

        .chips {
            margin-top: 12px;
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
        }

        .chip {
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 999px;
            padding: 7px 10px;
            font-size: 13px;
            color: var(--color-text-secondary);
            line-height: 1.2;
        }

        .example {
            margin-top: 14px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 16px;
            overflow: hidden;
        }

        .exampleTitle {
            padding: 10px 12px;
            border-bottom: 1px solid var(--color-border);
            font-weight: 900;
            color: var(--color-text-primary);
        }

        .code {
            margin: 0;
            padding: 12px;
            color: var(--color-text-secondary);
            font-size: 13px;
            line-height: 1.55;
            overflow: auto;
            background: transparent;
            white-space: pre;
        }

        .bullets {
            list-style: none;
            margin-top: 12px;
            display: grid;
            gap: 10px;
            padding-left: 0;
        }

        .bullets li {
            display: flex;
            align-items: flex-start;
            gap: 10px;
            color: var(--color-text-secondary);
            font-size: 14px;
            line-height: 1.5;
        }

        .dot {
            width: 8px;
            height: 8px;
            border-radius: 999px;
            background: var(--color-text-primary);
            flex: 0 0 auto;
            margin-top: 6px;
        }

        .callout {
            margin-top: 14px;
            border: 1px solid var(--color-border);
            border-radius: 16px;
            background: var(--color-surface-2);
            padding: 12px;
        }

        .calloutTop {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 8px;
        }

        .calloutIcon {
            width: 32px;
            height: 32px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            color: var(--color-text-primary);
            flex: 0 0 auto;
        }

        .calloutTitle {
            font-weight: 900;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
        }

        .calloutText {
            color: var(--color-text-secondary);
            line-height: 1.65;
        }

        .quickGrid {
            margin-top: 12px;
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 10px;
        }

        .quickCard {
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 16px;
            padding: 12px;
        }

        .quickTitle {
            font-weight: 900;
            margin-bottom: 6px;
            color: var(--color-text-primary);
        }

        .quickText {
            color: var(--color-text-secondary);
            line-height: 1.55;
            font-size: 14px;
        }

        @media (max-width: 720px) {
            .quickGrid {
                grid-template-columns: 1fr;
            }
        }
    `},Rf=()=>{const[a,c]=B.useState(!1),l=()=>c(p=>!p);return e.jsxs(Of.Wrapper,{className:`topicCard ${a?"open":""}`,children:[e.jsxs("button",{type:"button",className:"topicHeader",onClick:l,"aria-expanded":a,children:[e.jsx("span",{className:"chev",children:a?e.jsx(ie,{}):e.jsx(le,{})}),e.jsx("span",{className:"icon",children:e.jsx(gs,{})}),e.jsx("span",{className:"title",children:"Headings"}),e.jsx("span",{className:"meta",children:a?"Collapse":"Expand"})]}),e.jsxs("div",{className:`topicBody ${a?"open":""}`,children:[e.jsxs("div",{className:"section",children:[e.jsxs("h3",{className:"h3",children:[e.jsx("span",{className:"h3Icon",children:e.jsx(uo,{})}),"h1 to h6"]}),e.jsx("p",{className:"p",children:"HTML headings are used to label sections of content. You have six levels: h1 (most important) to h6 (least important). Headings should describe what the section is about, not just make text bigger. Styling is CSS, meaning is HTML."}),e.jsxs("div",{className:"callout good",children:[e.jsxs("div",{className:"calloutTop",children:[e.jsx("span",{className:"calloutIcon",children:e.jsx(se,{})}),e.jsx("div",{className:"calloutTitle",children:"Practical rule"})]}),e.jsx("div",{className:"calloutText",children:"Use one clear h1 for the main page title, then use h2 for major sections, h3 for sub-sections, and so on. Do not skip levels just for looks."})]}),e.jsxs("div",{className:"chips",children:[e.jsx("span",{className:"chip",children:"h1: page title"}),e.jsx("span",{className:"chip",children:"h2: section"}),e.jsx("span",{className:"chip",children:"h3: sub-section"}),e.jsx("span",{className:"chip",children:"h4 to h6: deeper nesting"})]}),e.jsxs("div",{className:"example",children:[e.jsx("div",{className:"exampleTitle",children:"Example structure"}),e.jsx("pre",{className:"code",children:`h1: HTML Core Notes
  h2: Text Content
    h3: Headings
    h3: Paragraphs
  h2: Forms
    h3: Inputs
    h3: Validation`})]})]}),e.jsxs("div",{className:"section",children:[e.jsxs("h3",{className:"h3",children:[e.jsx("span",{className:"h3Icon",children:e.jsx(co,{})}),"Document outline theory"]}),e.jsx("p",{className:"p",children:'People often say "headings create the page outline." The idea is: headings communicate a hierarchy of sections. This helps readers scan the page, and helps assistive technologies understand structure.'}),e.jsx("p",{className:"p",children:"In practice, different browsers and tools have handled outlining differently over time. The safe approach is to treat headings as a clear, human-friendly hierarchy: h1 for the page, then h2, then h3, and so on. If the hierarchy feels logical to a human, it usually works well for accessibility too."}),e.jsxs("div",{className:"callout warn",children:[e.jsxs("div",{className:"calloutTop",children:[e.jsx("span",{className:"calloutIcon",children:e.jsx(Je,{})}),e.jsx("div",{className:"calloutTitle",children:"Common mistake"})]}),e.jsx("div",{className:"calloutText",children:"Using headings only for styling. For styling, use a class and CSS. For structure, use the correct heading level."})]})]}),e.jsxs("div",{className:"section",children:[e.jsxs("h3",{className:"h3",children:[e.jsx("span",{className:"h3Icon",children:e.jsx(Va,{})}),"Accessibility considerations"]}),e.jsx("p",{className:"p",children:"Many screen reader users navigate by headings. They can jump from one heading to the next like a table of contents. Clean heading structure improves navigation, understanding, and speed."}),e.jsxs("ul",{className:"bullets",children:[e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),'Keep heading text meaningful, not vague like "Section"']}),e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),"Do not skip levels (h2 straight to h4) unless the structure truly demands it"]}),e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),"Do not use headings for non-heading UI like buttons or labels"]}),e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),"Use headings to break long pages into scannable parts"]})]}),e.jsxs("div",{className:"quickGrid",children:[e.jsxs("div",{className:"quickCard",children:[e.jsx("div",{className:"quickTitle",children:"Good"}),e.jsx("div",{className:"quickText",children:"h1 Profile, h2 About, h2 Projects, h3 Featured"})]}),e.jsxs("div",{className:"quickCard",children:[e.jsx("div",{className:"quickTitle",children:"Bad"}),e.jsx("div",{className:"quickText",children:"Multiple h1 everywhere, random jumps for styling"})]})]})]}),e.jsxs("div",{className:"section",children:[e.jsxs("h3",{className:"h3",children:[e.jsx("span",{className:"h3Icon",children:e.jsx(co,{})}),"Transparent content model"]}),e.jsx("p",{className:"p",children:'Some HTML elements are "transparent." That means the element itself does not define a strict content type. Instead, it allows whatever content would be allowed if the element was not there.'}),e.jsx("p",{className:"p",children:"Think of it like a wrapper. For example, the anchor tag a often behaves like this. If you wrap text, it behaves like text. If you wrap a block of content, it behaves like that block, as long as it is valid to do so."}),e.jsxs("div",{className:"callout good",children:[e.jsxs("div",{className:"calloutTop",children:[e.jsx("span",{className:"calloutIcon",children:e.jsx(se,{})}),e.jsx("div",{className:"calloutTitle",children:"Why it matters"})]}),e.jsx("div",{className:"calloutText",children:"It helps you build clean clickable regions (like cards) without breaking HTML rules. Still, keep it accessible and avoid wrapping interactive elements inside other interactive elements."})]}),e.jsxs("ul",{className:"bullets",children:[e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),"Transparent elements behave like their children"]}),e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),"Always keep nesting valid (no button inside a)"]}),e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),"Prefer clear semantics over tricky wrappers"]})]})]})]})]})},Ff={Wrapper:Q.section`
        width: 100%;
        border: 1px solid var(--color-border);
        background: var(--color-surface);
        border-radius: 18px;
        box-shadow: 0 12px 30px var(--color-shadow);
        overflow: hidden;
        margin-bottom: 5px;

        .topicHeader {
            width: 100%;
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 14px 14px;
            background: transparent;
            color: var(--color-text-primary);
            text-align: left;
        }

        .topicHeader:hover {
            background: var(--color-surface-2);
        }

        .chev {
            width: 28px;
            height: 28px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            border-radius: 10px;
            background: var(--color-bg);
            color: var(--color-text-secondary);
            flex: 0 0 auto;
        }

        .icon {
            width: 36px;
            height: 36px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            color: var(--color-text-secondary);
            font-size: 18px;
            flex: 0 0 auto;
        }

        .title {
            font-weight: 900;
            letter-spacing: 0.2px;
            flex: 1;
        }

        .meta {
            font-size: 12px;
            color: var(--color-text-muted);
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 999px;
            padding: 7px 10px;
            white-space: nowrap;
            flex: 0 0 auto;
        }

        .topicBody {
            max-height: 0px;
            overflow: hidden;
            transition: max-height 260ms ease;
            border-top: 1px solid var(--color-border);
        }

        .topicBody.open {
            max-height: 9000px;
        }

        .intro {
            padding: 14px 14px 0 14px;
        }

        .introTop {
            display: flex;
            gap: 12px;
            align-items: flex-start;
        }

        .introIcon {
            width: 44px;
            height: 44px;
            border-radius: 14px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            color: var(--color-text-secondary);
            flex: 0 0 auto;
            font-size: 18px;
        }

        .introTitle {
            font-weight: 900;
            margin-bottom: 6px;
        }

        .introSub {
            color: var(--color-text-secondary);
            line-height: 1.7;
        }

        .note {
            margin-top: 14px;
            display: flex;
            gap: 10px;
            align-items: flex-start;
            border: 1px dashed var(--color-border-light);
            background: var(--color-bg);
            border-radius: 14px;
            padding: 12px;
        }

        .noteIcon {
            width: 34px;
            height: 34px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: var(--color-surface);
            color: var(--color-text-secondary);
            flex: 0 0 auto;
        }

        .noteText {
            color: var(--color-text-secondary);
            line-height: 1.6;
            font-size: 14px;
        }

        .mono {
            font-family:
                ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                "Liberation Mono", "Courier New", monospace;
            color: var(--color-text-primary);
        }

        .grid {
            margin-top: 14px;
            padding: 14px;
            display: grid;
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 12px;
        }

        .card {
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 16px;
            padding: 12px;
            box-shadow: 0 10px 22px var(--color-shadow);
        }

        .cardTop {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 10px;
            margin-bottom: 10px;
        }

        .tagChip {
            border: 1px solid var(--color-border);
            background: var(--color-surface);
            border-radius: 999px;
            padding: 6px 10px;
            font-size: 12px;
            color: var(--color-text-secondary);
        }

        .copyBtn {
            width: 34px;
            height: 34px;
            border-radius: 12px;
            border: 1px solid var(--color-border);
            background: var(--color-surface);
            color: var(--color-text-primary);
            display: grid;
            place-items: center;
        }

        .copyBtn:hover {
            background: var(--color-surface-2);
        }

        .cardTitle {
            font-weight: 900;
            margin-bottom: 8px;
        }

        .cardWhy {
            color: var(--color-text-secondary);
            font-size: 13px;
            line-height: 1.6;
        }

        .code {
            margin-top: 10px;
            padding: 10px;
            border-radius: 14px;
            border: 1px solid var(--color-border);
            background: var(--color-surface);
            overflow: auto;
            color: var(--color-text-primary);
            font-size: 12px;
            line-height: 1.6;
        }

        .footerTip {
            border-top: 1px solid var(--color-border);
            padding: 14px;
            color: var(--color-text-secondary);
            background: var(--color-surface-2);
        }

        @media (max-width: 1100px) {
            .grid {
                grid-template-columns: repeat(2, minmax(0, 1fr));
            }
        }

        @media (max-width: 720px) {
            .grid {
                grid-template-columns: 1fr;
            }
        }
    `},Af=()=>{const[a,c]=B.useState(!1),[l,p]=B.useState(""),m=B.useMemo(()=>[{key:"p",tag:"p",title:"Paragraph",why:"Use for normal paragraphs of text. A paragraph is a block of content.",example:"<p>This is a paragraph. It groups a chunk of related text.</p>"},{key:"br",tag:"br",title:"Line break",why:"Use for a line break inside the same paragraph (poems, addresses). Do not use it to create spacing.",example:"<p>Line one<br />Line two<br />Line three</p>"},{key:"hr",tag:"hr",title:"Thematic break",why:"Use to separate sections or topics. It represents a change in theme, not just a line.",example:`<p>Topic A content...</p>
<hr />
<p>Topic B content...</p>`},{key:"pre",tag:"pre",title:"Preformatted text",why:"Preserves spaces and new lines. Useful for code blocks, ASCII diagrams, formatted text.",example:`<pre>
  Name: Ash
  Role: Developer
  Notes: Keep spacing
</pre>`},{key:"blockquote",tag:"blockquote",title:"Block quote",why:"Use for a longer quotation taken from another source.",example:`<blockquote cite="https://example.com">
  <p>Long quote goes here...</p>
</blockquote>`},{key:"q",tag:"q",title:"Inline quote",why:"Use for short inline quotations. Browsers usually add quotation marks automatically.",example:"<p>He said <q>HTML is structure</q> and moved on.</p>"},{key:"cite",tag:"cite",title:"Citation",why:"Use to reference the title of a work (book, movie, article, paper). Not for the author name.",example:"<p>My favorite web doc is <cite>MDN Web Docs</cite>.</p>"},{key:"abbr",tag:"abbr",title:"Abbreviation",why:"Use for abbreviations and acronyms. Add a title attribute for the full form.",example:`<p><abbr title="HyperText Markup Language">HTML</abbr> is the web's structure.</p>`},{key:"dfn",tag:"dfn",title:"Defining instance",why:"Use when you define a term for the first time in a document or section.",example:"<p><dfn>DOM</dfn> is the Document Object Model.</p>"},{key:"time",tag:"time",title:"Time / date",why:"Use for dates, times, and durations. Add datetime for machine readable value (SEO, parsing).",example:'<p>Last updated: <time datetime="2026-02-19">February 19, 2026</time></p>'},{key:"mark",tag:"mark",title:"Highlight",why:"Use to highlight text that is relevant in the current context (search results, important part).",example:"<p>Remember: <mark>do not use tables for layout</mark>.</p>"},{key:"small",tag:"small",title:"Small print",why:"Use for disclaimers, legal text, side notes. Not for styling. It has meaning.",example:"<p><small>Note: This is a demo project.</small></p>"},{key:"sub",tag:"sub",title:"Subscript",why:"Use for chemical formulas, math subscripts.",example:"<p>Water is H<sub>2</sub>O.</p>"},{key:"sup",tag:"sup",title:"Superscript",why:"Use for exponents, footnote markers.",example:"<p>2<sup>10</sup> equals 1024.</p>"},{key:"strong",tag:"strong",title:"Strong importance",why:"Use to show strong importance, seriousness, or urgency. Not just bold styling.",example:"<p><strong>Warning:</strong> Do not share your password.</p>"},{key:"em",tag:"em",title:"Emphasis",why:"Use to emphasize a word in a sentence (changes meaning). Screen readers also announce emphasis.",example:"<p>I said <em>today</em>, not tomorrow.</p>"},{key:"b",tag:"b",title:"Stylistic bold",why:"Use when you want bold without extra importance. Example: keywords in a summary.",example:"<p>Keywords: <b>HTML</b>, <b>CSS</b>, <b>JS</b></p>"},{key:"i",tag:"i",title:"Stylistic italic",why:"Use for alternate voice, technical terms, or idioms without emphasis meaning.",example:"<p>The term <i>viewport</i> matters on mobile.</p>"},{key:"u",tag:"u",title:"Unarticulated annotation",why:"Rare. Traditionally used for misspellings or annotations. Avoid using for links style.",example:"<p>This word is <u>incorect</u> (misspelled).</p>"},{key:"s",tag:"s",title:"No longer accurate",why:"Use for content that is no longer accurate or relevant (like old pricing).",example:"<p><s>₹999</s> ₹699</p>"},{key:"code",tag:"code",title:"Inline code",why:"Use for short code fragments inline.",example:"<p>Use <code>&lt;main&gt;</code> for the main content.</p>"},{key:"kbd",tag:"kbd",title:"Keyboard input",why:"Use to represent keyboard keys or user input.",example:"<p>Press <kbd>Ctrl</kbd> + <kbd>S</kbd> to save.</p>"},{key:"samp",tag:"samp",title:"Sample output",why:"Use to represent output from a program or system.",example:"<p><samp>Build completed successfully.</samp></p>"},{key:"var",tag:"var",title:"Variable",why:"Use for variables in math or programming context.",example:"<p>Let <var>x</var> be the number of users.</p>"},{key:"span",tag:"span",title:"Generic inline",why:"Use when no semantic tag fits. It is just a hook for styling or JS.",example:'<p>Hello <span class="name">Ash</span></p>'}],[]),f=async(b,L)=>{try{await navigator.clipboard.writeText(b),p(L),window.setTimeout(()=>p(""),900)}catch{}};return e.jsxs(Ff.Wrapper,{className:`topicCard ${a?"open":""}`,children:[e.jsxs("button",{type:"button",className:"topicHeader",onClick:()=>c(b=>!b),"aria-expanded":a,children:[e.jsx("span",{className:"chev",children:a?e.jsx(ie,{}):e.jsx(le,{})}),e.jsx("span",{className:"icon",children:e.jsx(gs,{})}),e.jsx("span",{className:"title",children:"Paragraph and Text Semantics"}),e.jsx("span",{className:"meta",children:a?"Collapse":"Expand"})]}),e.jsxs("div",{className:`topicBody ${a?"open":""}`,children:[e.jsxs("div",{className:"intro",children:[e.jsxs("div",{className:"introTop",children:[e.jsx("div",{className:"introIcon",children:e.jsx(uu,{})}),e.jsxs("div",{className:"introText",children:[e.jsx("div",{className:"introTitle",children:"What this covers"}),e.jsx("div",{className:"introSub",children:"These tags are used to write text properly in HTML. Some tags add meaning (semantics) and help screen readers, SEO, and maintainability."})]})]}),e.jsxs("div",{className:"note",children:[e.jsx("span",{className:"noteIcon",children:e.jsx(He,{})}),e.jsxs("div",{className:"noteText",children:["Use semantic tags when possible. Use"," ",e.jsx("span",{className:"mono",children:"span"})," only when no semantic tag fits."]})]})]}),e.jsx("div",{className:"grid",children:m.map(b=>e.jsxs("div",{className:"card",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("div",{className:"tagChip",children:e.jsxs("span",{className:"mono",children:["<",b.tag,">"]})}),e.jsx("button",{type:"button",className:"copyBtn",onClick:()=>f(b.example,b.key),title:"Copy example","aria-label":"Copy example",children:l===b.key?e.jsx(Am,{}):e.jsx(Fr,{})})]}),e.jsx("div",{className:"cardTitle",children:b.title}),e.jsx("div",{className:"cardWhy",children:b.why}),e.jsx("pre",{className:"code",children:e.jsx("code",{children:b.example})})]},b.key))}),e.jsxs("div",{className:"footerTip",children:["Tip: Use ",e.jsx("span",{className:"mono",children:"strong"})," and"," ",e.jsx("span",{className:"mono",children:"em"})," for meaning. Use"," ",e.jsx("span",{className:"mono",children:"b"})," and"," ",e.jsx("span",{className:"mono",children:"i"})," only for styling without meaning."]})]})]})},Wf={Wrapper:Q.section`
        width: 100%;
        border: 1px solid var(--color-border);
        background: var(--color-surface);
        border-radius: 18px;
        box-shadow: 0 12px 30px var(--color-shadow);
        overflow: hidden;
        margin-bottom: 5px;

        .topicHeader {
            width: 100%;
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 14px;
            background: transparent;
            color: var(--color-text-primary);
            text-align: left;
        }

        .topicHeader:hover {
            background: var(--color-surface-2);
        }

        .chev,
        .icon {
            width: 34px;
            height: 34px;
            display: grid;
            place-items: center;
            border-radius: 12px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            color: var(--color-text-secondary);
        }

        .title {
            font-weight: 900;
            flex: 1;
        }

        .meta {
            font-size: 12px;
            color: var(--color-text-muted);
        }

        .topicBody {
            max-height: 0;
            overflow: hidden;
            transition: max-height 300ms ease;
            border-top: 1px solid var(--color-border);
        }

        .topicBody.open {
            max-height: 4000px;
        }

        .section {
            padding: 16px;
        }

        .section + .section {
            border-top: 1px dashed var(--color-border-light);
        }

        .h3 {
            margin-bottom: 8px;
        }

        .p {
            color: var(--color-text-secondary);
            line-height: 1.7;
        }

        .codeBlock {
            background: var(--color-bg);
            border: 1px solid var(--color-border);
            padding: 14px;
            border-radius: 12px;
            font-family: monospace;
            white-space: pre-wrap;
            margin: 12px 0;
            font-size: 13px;
        }

        .demoList {
            margin: 10px 0;
            padding-left: 20px;
        }

        .demoDl dt {
            font-weight: 800;
        }

        .demoDl dd {
            margin-left: 20px;
            margin-bottom: 6px;
            color: var(--color-text-secondary);
        }

        .subSection {
            margin-top: 18px;
        }
    `},Df=()=>{const[a,c]=B.useState(!1);return e.jsxs(Wf.Wrapper,{className:a?"open":"",children:[e.jsxs("button",{type:"button",className:"topicHeader",onClick:()=>c(l=>!l),"aria-expanded":a,children:[e.jsx("span",{className:"chev",children:a?e.jsx(ie,{}):e.jsx(le,{})}),e.jsx("span",{className:"icon",children:e.jsx(Km,{})}),e.jsx("span",{className:"title",children:"Lists"}),e.jsx("span",{className:"meta",children:"ul, ol, li, dl, attributes"})]}),e.jsxs("div",{className:`topicBody ${a?"open":""}`,children:[e.jsxs("div",{className:"section",children:[e.jsx("h3",{className:"h3",children:"What are Lists"}),e.jsx("p",{className:"p",children:"Lists are used to group related items together. They help structure content clearly and improve readability. HTML provides three main types of lists: unordered, ordered, and description lists."})]}),e.jsxs("div",{className:"section",children:[e.jsx("h3",{className:"h3",children:"Unordered List - ul"}),e.jsx("p",{className:"p",children:"An unordered list displays items with bullets. Order does not matter."}),e.jsx("div",{className:"codeBlock",children:`<ul>
    <li>HTML</li>
    <li>CSS</li>
    <li>JavaScript</li>
</ul>`}),e.jsxs("ul",{className:"demoList",children:[e.jsx("li",{children:"HTML"}),e.jsx("li",{children:"CSS"}),e.jsx("li",{children:"JavaScript"})]})]}),e.jsxs("div",{className:"section",children:[e.jsx("h3",{className:"h3",children:"Ordered List - ol"}),e.jsx("p",{className:"p",children:"An ordered list displays items with numbers. Order matters."}),e.jsx("div",{className:"codeBlock",children:`<ol>
    <li>Step One</li>
    <li>Step Two</li>
    <li>Step Three</li>
</ol>`}),e.jsxs("ol",{className:"demoList",children:[e.jsx("li",{children:"Step One"}),e.jsx("li",{children:"Step Two"}),e.jsx("li",{children:"Step Three"})]})]}),e.jsxs("div",{className:"section",children:[e.jsx("h3",{className:"h3",children:"Description List - dl, dt, dd"}),e.jsx("p",{className:"p",children:"A description list is used for key value pairs. dt is the term. dd is its description."}),e.jsx("div",{className:"codeBlock",children:`<dl>
    <dt>HTML</dt>
    <dd>Structure of web pages</dd>

    <dt>CSS</dt>
    <dd>Styling of web pages</dd>
</dl>`}),e.jsxs("dl",{className:"demoDl",children:[e.jsx("dt",{children:"HTML"}),e.jsx("dd",{children:"Structure of web pages"}),e.jsx("dt",{children:"CSS"}),e.jsx("dd",{children:"Styling of web pages"})]})]}),e.jsxs("div",{className:"section",children:[e.jsx("h3",{className:"h3",children:"Nested Lists"}),e.jsx("p",{className:"p",children:"You can place a list inside another list. This creates hierarchy."}),e.jsx("div",{className:"codeBlock",children:`<ul>
    <li>Frontend
        <ul>
            <li>HTML</li>
            <li>CSS</li>
        </ul>
    </li>
</ul>`}),e.jsx("ul",{className:"demoList",children:e.jsxs("li",{children:["Frontend",e.jsxs("ul",{children:[e.jsx("li",{children:"HTML"}),e.jsx("li",{children:"CSS"})]})]})})]}),e.jsxs("div",{className:"section",children:[e.jsx("h3",{className:"h3",children:"Ordered List Attributes"}),e.jsxs("div",{className:"subSection",children:[e.jsx("h4",{children:"Reversed"}),e.jsx("div",{className:"codeBlock",children:`<ol reversed>
    <li>Three</li>
    <li>Two</li>
    <li>One</li>
</ol>`}),e.jsxs("ol",{reversed:!0,className:"demoList",children:[e.jsx("li",{children:"Three"}),e.jsx("li",{children:"Two"}),e.jsx("li",{children:"One"})]})]}),e.jsxs("div",{className:"subSection",children:[e.jsx("h4",{children:"Start"}),e.jsx("div",{className:"codeBlock",children:`<ol start="5">
    <li>Item</li>
    <li>Item</li>
</ol>`}),e.jsxs("ol",{start:5,className:"demoList",children:[e.jsx("li",{children:"Item"}),e.jsx("li",{children:"Item"})]})]}),e.jsxs("div",{className:"subSection",children:[e.jsx("h4",{children:"Type"}),e.jsx("div",{className:"codeBlock",children:`<ol type="A">
    <li>Item</li>
    <li>Item</li>
</ol>`}),e.jsxs("ol",{type:"A",className:"demoList",children:[e.jsx("li",{children:"Item"}),e.jsx("li",{children:"Item"})]})]})]})]})]})},Uf={Wrapper:Q.section`
        width: 100%;
        border: 1px solid var(--color-border);
        background: var(--color-surface);
        border-radius: 18px;
        overflow: hidden;
        box-shadow: 0 12px 30px var(--color-shadow);
        margin-bottom: 5px;

        .topicHeader {
            width: 100%;
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 14px;
            background: transparent;
            text-align: left;
        }

        .topicHeader:hover {
            background: var(--color-surface-2);
        }

        .chev {
            display: grid;
            place-items: center;
            width: 28px;
            height: 28px;
            border-radius: 8px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
        }

        .icon {
            display: grid;
            place-items: center;
            width: 36px;
            height: 36px;
            border-radius: 10px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
        }

        .title {
            font-weight: 900;
            flex: 1;
        }

        .meta {
            font-size: 12px;
            color: var(--color-text-muted);
        }

        .topicBody {
            max-height: 0;
            overflow: hidden;
            transition: max-height 250ms ease;
            border-top: 1px solid var(--color-border);
        }

        .topicBody.open {
            max-height: 4000px;
        }

        .section {
            padding: 14px;
        }

        .section + .section {
            border-top: 1px dashed var(--color-border-light);
        }

        .h3 {
            font-size: 15px;
            margin-bottom: 8px;
        }

        .p {
            color: var(--color-text-secondary);
            line-height: 1.7;
        }

        .bullets {
            margin-top: 10px;
            display: grid;
            gap: 6px;
        }

        .code {
            margin-top: 10px;
            padding: 10px;
            background: var(--color-bg);
            border: 1px solid var(--color-border);
            border-radius: 10px;
            font-size: 13px;
            overflow-x: auto;
        }

        .securityBox {
            margin-top: 12px;
            padding: 10px;
            display: flex;
            gap: 10px;
            align-items: center;
            border: 1px solid var(--color-border);
            border-radius: 10px;
            background: var(--color-bg);
            color: var(--color-text-secondary);
        }
    `},$f=()=>{const[a,c]=B.useState(!1);return e.jsxs(Uf.Wrapper,{children:[e.jsxs("button",{type:"button",className:"topicHeader",onClick:()=>c(l=>!l),"aria-expanded":a,children:[e.jsx("span",{className:"chev",children:a?e.jsx(ie,{}):e.jsx(le,{})}),e.jsx("span",{className:"icon",children:e.jsx(fu,{})}),e.jsx("span",{className:"title",children:"Anchors and Links"}),e.jsx("span",{className:"meta",children:a?"Collapse":"Expand"})]}),e.jsxs("div",{className:`topicBody ${a?"open":""}`,children:[e.jsxs("div",{className:"section",children:[e.jsx("h3",{className:"h3",children:"a tag"}),e.jsx("p",{className:"p",children:"The anchor tag is used to create hyperlinks. It allows users to navigate from one page to another, to a section within the same page, or even to another website."}),e.jsx("pre",{className:"code",children:'<a href="https://example.com">Visit Website</a>'})]}),e.jsxs("div",{className:"section",children:[e.jsx("h3",{className:"h3",children:"href attribute"}),e.jsx("p",{className:"p",children:"The href attribute defines the destination of the link. It can be:"}),e.jsxs("ul",{className:"bullets",children:[e.jsx("li",{children:"Absolute URL: https://google.com"}),e.jsx("li",{children:"Relative URL: /about"}),e.jsx("li",{children:"Same page section: #contact"}),e.jsx("li",{children:"Email: mailto:example@email.com"})]})]}),e.jsxs("div",{className:"section",children:[e.jsx("h3",{className:"h3",children:"target attribute"}),e.jsx("p",{className:"p",children:"The target attribute specifies where to open the linked document."}),e.jsx("pre",{className:"code",children:`<a href="https://google.com" target="_blank">
  Open in new tab
</a>`}),e.jsx("p",{className:"p",children:"_blank opens the link in a new tab."})]}),e.jsxs("div",{className:"section",children:[e.jsx("h3",{className:"h3",children:"rel attribute"}),e.jsx("p",{className:"p",children:'When using target="_blank", you should add rel="noopener noreferrer" for security reasons.'}),e.jsx("pre",{className:"code",children:`<a 
  href="https://example.com" 
  target="_blank" 
  rel="noopener noreferrer"
>
  Safe external link
</a>`})]}),e.jsxs("div",{className:"section",children:[e.jsx("h3",{className:"h3",children:"Download attribute"}),e.jsx("p",{className:"p",children:"The download attribute tells the browser to download the file instead of opening it."}),e.jsx("pre",{className:"code",children:`<a href="/files/report.pdf" download>
  Download Report
</a>`})]}),e.jsxs("div",{className:"section",children:[e.jsx("h3",{className:"h3",children:"Mailto"}),e.jsx("p",{className:"p",children:"Used to open the user's email client with a predefined email address."}),e.jsx("pre",{className:"code",children:`<a href="mailto:hello@example.com">
  Send Email
</a>`})]}),e.jsxs("div",{className:"section",children:[e.jsx("h3",{className:"h3",children:"Tel links"}),e.jsx("p",{className:"p",children:"Tel links are mainly used on mobile devices to start a phone call."}),e.jsx("pre",{className:"code",children:`<a href="tel:+919876543210">
  Call Now
</a>`})]}),e.jsxs("div",{className:"section",children:[e.jsx("h3",{className:"h3",children:"Hash navigation"}),e.jsx("p",{className:"p",children:"Hash navigation is used to scroll to a specific section of the same page."}),e.jsx("pre",{className:"code",children:`<a href="#contact">Go to Contact</a>

<section id="contact">
  Contact Section
</section>`})]}),e.jsxs("div",{className:"section",children:[e.jsx("h3",{className:"h3",children:"External link security"}),e.jsx("p",{className:"p",children:'When opening external links in a new tab using target="_blank", always use:'}),e.jsxs("ul",{className:"bullets",children:[e.jsx("li",{children:'rel="noopener"'}),e.jsx("li",{children:'rel="noreferrer"'})]}),e.jsxs("div",{className:"securityBox",children:[e.jsx(Ht,{}),e.jsx("span",{children:"This prevents the new page from accessing your window object and protects against reverse tabnabbing."})]})]})]})]})},Vf={Wrapper:Q.section`
        width: 100%;
        border: 1px solid var(--color-border);
        background: var(--color-surface);
        border-radius: 18px;
        box-shadow: 0 12px 30px var(--color-shadow);
        overflow: hidden;
        margin-bottom: 5px;

        .topicHeader {
            width: 100%;
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 14px;
            background: transparent;
            color: var(--color-text-primary);
            text-align: left;
        }

        .topicHeader:hover {
            background: var(--color-surface-2);
        }

        .chev,
        .icon {
            width: 32px;
            height: 32px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            border-radius: 10px;
            background: var(--color-bg);
            color: var(--color-text-secondary);
            flex: 0 0 auto;
        }

        .title {
            font-weight: 900;
            flex: 1;
        }

        .meta {
            font-size: 12px;
            color: var(--color-text-muted);
            border: 1px solid var(--color-border);
            border-radius: 999px;
            padding: 6px 10px;
        }

        .topicBody {
            max-height: 0px;
            overflow: hidden;
            transition: max-height 300ms ease;
            border-top: 1px solid var(--color-border);
        }

        .topicBody.open {
            max-height: 3000px;
        }

        .section {
            padding: 16px;
        }

        .section + .section {
            border-top: 1px dashed var(--color-border-light);
        }

        .h3 {
            font-size: 16px;
            margin-bottom: 8px;
        }

        .p {
            margin: 0 0 12px 0;
            color: var(--color-text-secondary);
            line-height: 1.7;
        }

        .codeBlock {
            background: var(--color-bg);
            border: 1px solid var(--color-border);
            border-radius: 12px;
            padding: 12px;
            font-family: monospace;
            font-size: 13px;
            white-space: pre-wrap;
            margin: 10px 0;
        }

        .bullets {
            padding-left: 18px;
            display: grid;
            gap: 6px;
            color: var(--color-text-secondary);
        }

        .breadcrumbExample {
            padding: 10px 14px;
            border: 1px solid var(--color-border);
            border-radius: 999px;
            background: var(--color-bg);
            display: inline-flex;
            gap: 6px;
            align-items: center;
            margin-bottom: 10px;
        }

        .paginationExample {
            display: flex;
            gap: 8px;
            margin-bottom: 10px;
        }

        .paginationExample button {
            padding: 6px 10px;
            border-radius: 8px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            color: var(--color-text-secondary);
        }

        .paginationExample .active {
            background: var(--color-surface-2);
            color: var(--color-text-primary);
        }

        .tip {
            margin-top: 10px;
            display: flex;
            gap: 8px;
            align-items: center;
            font-size: 13px;
            color: var(--color-text-muted);
        }
    `},Gf=()=>{const[a,c]=B.useState(!1);return e.jsxs(Vf.Wrapper,{className:a?"open":"",children:[e.jsxs("button",{type:"button",className:"topicHeader",onClick:()=>c(l=>!l),"aria-expanded":a,children:[e.jsx("span",{className:"chev",children:a?e.jsx(ie,{}):e.jsx(le,{})}),e.jsx("span",{className:"icon",children:e.jsx(ol,{})}),e.jsx("span",{className:"title",children:"Navigation"}),e.jsx("span",{className:"meta",children:a?"Collapse":"Expand"})]}),e.jsxs("div",{className:`topicBody ${a?"open":""}`,children:[e.jsxs("div",{className:"section",children:[e.jsx("h3",{className:"h3",children:"nav element"}),e.jsx("p",{className:"p",children:"The nav element represents a section of the page that contains navigation links. It is used for major navigation blocks such as the main menu, footer links, or sidebar navigation."}),e.jsx("p",{className:"p",children:"Not every group of links should be wrapped in nav. Only important navigation areas that help users move across the site should use it."}),e.jsx("div",{className:"codeBlock",children:`<nav>
  <ul>
    <li><a href="/">Home</a></li>
    <li><a href="/about">About</a></li>
    <li><a href="/contact">Contact</a></li>
  </ul>
</nav>`}),e.jsxs("div",{className:"tip",children:[e.jsx(ho,{}),"Use semantic nav instead of a generic div for better accessibility and SEO."]})]}),e.jsxs("div",{className:"section",children:[e.jsx("h3",{className:"h3",children:"Breadcrumb structure"}),e.jsx("p",{className:"p",children:"A breadcrumb shows the user where they are inside the site hierarchy. It usually appears at the top of a page and helps users navigate back to parent sections."}),e.jsxs("div",{className:"breadcrumbExample",children:["Home ",e.jsx("span",{children:"›"})," Blog ",e.jsx("span",{children:"›"})," HTML Guide"]}),e.jsx("div",{className:"codeBlock",children:`<nav aria-label="Breadcrumb">
  <ol>
    <li><a href="/">Home</a></li>
    <li><a href="/blog">Blog</a></li>
    <li aria-current="page">HTML Guide</li>
  </ol>
</nav>`}),e.jsxs("ul",{className:"bullets",children:[e.jsx("li",{children:"Use ordered list for breadcrumbs"}),e.jsx("li",{children:'Use aria-current="page" for current item'}),e.jsx("li",{children:"Helps both users and screen readers"})]})]}),e.jsxs("div",{className:"section",children:[e.jsx("h3",{className:"h3",children:"Pagination patterns"}),e.jsx("p",{className:"p",children:"Pagination divides large content into smaller pages. It is commonly used in blogs, product listings, and search results."}),e.jsxs("div",{className:"paginationExample",children:[e.jsx("button",{disabled:!0,children:"Prev"}),e.jsx("button",{className:"active",children:"1"}),e.jsx("button",{children:"2"}),e.jsx("button",{children:"3"}),e.jsx("button",{children:"Next"})]}),e.jsx("div",{className:"codeBlock",children:`<nav aria-label="Pagination">
  <ul>
    <li><a href="?page=1">1</a></li>
    <li><a href="?page=2">2</a></li>
    <li><a href="?page=3">3</a></li>
  </ul>
</nav>`}),e.jsxs("ul",{className:"bullets",children:[e.jsx("li",{children:"Wrap pagination inside nav"}),e.jsx("li",{children:"Use aria-label for clarity"}),e.jsx("li",{children:"Highlight active page"})]})]})]})]})},Qf={Wrapper:Q.section`
        width: 100%;
        border: 1px solid var(--color-border);
        background: var(--color-surface);
        border-radius: 18px;
        overflow: hidden;
        box-shadow: 0 12px 30px var(--color-shadow);
        margin-bottom: 5px;

        .topicHeader {
            width: 100%;
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 14px;
            background: transparent;
            color: var(--color-text-primary);
            text-align: left;
        }

        .topicHeader:hover {
            background: var(--color-surface-2);
        }

        .chev {
            width: 28px;
            height: 28px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            border-radius: 10px;
            background: var(--color-bg);
        }

        .icon {
            width: 36px;
            height: 36px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
        }

        .title {
            font-weight: 900;
            flex: 1;
        }

        .meta {
            font-size: 12px;
            border: 1px solid var(--color-border);
            border-radius: 999px;
            padding: 6px 10px;
            color: var(--color-text-muted);
        }

        .topicBody {
            max-height: 0;
            overflow: hidden;
            transition: max-height 300ms ease;
        }

        .topicBody.open {
            max-height: 6000px;
        }

        .section {
            padding: 16px;
            border-top: 1px dashed var(--color-border-light);
        }

        .h3 {
            font-size: 16px;
            margin-bottom: 8px;
        }

        .p {
            color: var(--color-text-secondary);
            line-height: 1.7;
            margin-bottom: 12px;
        }

        .bullets {
            list-style: none;
            display: grid;
            gap: 8px;
            padding-left: 0;
        }

        .bullets li {
            display: flex;
            align-items: center;
            gap: 8px;
            color: var(--color-text-secondary);
            font-size: 14px;
        }

        .code {
            background: var(--color-bg);
            border: 1px solid var(--color-border);
            border-radius: 12px;
            padding: 12px;
            font-family: monospace;
            font-size: 13px;
            white-space: pre-wrap;
            color: var(--color-text-primary);
        }
    `},qf=()=>{const[a,c]=B.useState(!1);return e.jsxs(Qf.Wrapper,{className:a?"open":"",children:[e.jsxs("button",{type:"button",className:"topicHeader",onClick:()=>c(l=>!l),"aria-expanded":a,children:[e.jsx("span",{className:"chev",children:a?e.jsx(ie,{}):e.jsx(le,{})}),e.jsx("span",{className:"icon",children:e.jsx(fs,{})}),e.jsx("span",{className:"title",children:"Images"}),e.jsx("span",{className:"meta",children:a?"Collapse":"Expand"})]}),e.jsxs("div",{className:`topicBody ${a?"open":""}`,children:[e.jsxs("section",{className:"section",children:[e.jsx("h3",{className:"h3",children:"img"}),e.jsx("p",{className:"p",children:"The img element is used to display an image in HTML. It is a self closing element and must include the src attribute."}),e.jsx("div",{className:"code",children:'<img src="image.jpg" alt="A description" />'})]}),e.jsxs("section",{className:"section",children:[e.jsx("h3",{className:"h3",children:"alt"}),e.jsx("p",{className:"p",children:"The alt attribute provides alternative text for accessibility and screen readers. If the image fails to load, this text is shown instead."}),e.jsxs("ul",{className:"bullets",children:[e.jsxs("li",{children:[e.jsx(se,{}),"Always describe the image meaningfully"]}),e.jsxs("li",{children:[e.jsx(se,{}),"Use empty alt only for decorative images"]})]}),e.jsx("div",{className:"code",children:'<img src="profile.jpg" alt="Portrait of John Doe" />'})]}),e.jsxs("section",{className:"section",children:[e.jsx("h3",{className:"h3",children:"width and height"}),e.jsx("p",{className:"p",children:"Setting width and height helps the browser reserve space before the image loads. This prevents layout shifting."}),e.jsx("div",{className:"code",children:`<img 
  src="photo.jpg" 
  alt="Landscape" 
  width="800" 
  height="500" 
/>`})]}),e.jsxs("section",{className:"section",children:[e.jsx("h3",{className:"h3",children:"loading attribute"}),e.jsx("p",{className:"p",children:"The loading attribute controls when the image loads. It improves performance."}),e.jsxs("ul",{className:"bullets",children:[e.jsxs("li",{children:[e.jsx(se,{}),"lazy loads image only when near viewport"]}),e.jsxs("li",{children:[e.jsx(se,{}),"eager loads immediately"]})]}),e.jsx("div",{className:"code",children:'<img src="banner.jpg" alt="Banner" loading="lazy" />'})]}),e.jsxs("section",{className:"section",children:[e.jsx("h3",{className:"h3",children:"decoding attribute"}),e.jsx("p",{className:"p",children:"The decoding attribute tells the browser how to decode the image."}),e.jsxs("ul",{className:"bullets",children:[e.jsxs("li",{children:[e.jsx(se,{}),"async allows non blocking decoding"]}),e.jsxs("li",{children:[e.jsx(se,{}),"auto lets browser decide"]})]}),e.jsx("div",{className:"code",children:'<img src="hero.jpg" alt="Hero" decoding="async" />'})]}),e.jsxs("section",{className:"section",children:[e.jsx("h3",{className:"h3",children:"srcset"}),e.jsx("p",{className:"p",children:"srcset allows you to provide multiple image sizes for different screen resolutions."}),e.jsx("div",{className:"code",children:`<img 
  src="small.jpg"
  srcset="small.jpg 480w, medium.jpg 800w, large.jpg 1200w"
  alt="Responsive image"
/>`})]}),e.jsxs("section",{className:"section",children:[e.jsx("h3",{className:"h3",children:"sizes"}),e.jsx("p",{className:"p",children:"The sizes attribute works with srcset to define how much screen width the image should occupy."}),e.jsx("div",{className:"code",children:`<img 
  src="small.jpg"
  srcset="small.jpg 480w, large.jpg 1200w"
  sizes="(max-width: 600px) 100vw, 50vw"
  alt="Responsive"
/>`})]}),e.jsxs("section",{className:"section",children:[e.jsx("h3",{className:"h3",children:"picture element"}),e.jsx("p",{className:"p",children:"The picture element allows art direction. You can provide different images for different screen sizes."}),e.jsx("div",{className:"code",children:`<picture>
  <source media="(max-width: 600px)" srcset="mobile.jpg" />
  <source media="(max-width: 1200px)" srcset="tablet.jpg" />
  <img src="desktop.jpg" alt="Responsive image" />
</picture>`})]}),e.jsxs("section",{className:"section",children:[e.jsx("h3",{className:"h3",children:"figure and figcaption"}),e.jsx("p",{className:"p",children:"The figure element groups media content and the figcaption element provides a caption."}),e.jsx("div",{className:"code",children:`<figure>
  <img src="chart.png" alt="Sales chart" />
  <figcaption>Monthly sales performance</figcaption>
</figure>`})]})]})]})},Kf={Wrapper:Q.section`
        width: 100%;
        border: 1px solid var(--color-border);
        background: var(--color-surface);
        border-radius: 18px;
        box-shadow: 0 12px 30px var(--color-shadow);
        overflow: hidden;
        margin-bottom: 5px;

        .topicHeader {
            width: 100%;
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 14px 14px;
            background: transparent;
            color: var(--color-text-primary);
            text-align: left;
        }

        .topicHeader:hover {
            background: var(--color-surface-2);
        }

        .chev {
            width: 28px;
            height: 28px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            border-radius: 10px;
            background: var(--color-bg);
            color: var(--color-text-secondary);
            flex: 0 0 auto;
        }

        .icon {
            width: 36px;
            height: 36px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            color: var(--color-text-secondary);
            font-size: 18px;
            flex: 0 0 auto;
        }

        .title {
            font-weight: 900;
            letter-spacing: 0.2px;
            flex: 1;
        }

        .meta {
            font-size: 12px;
            color: var(--color-text-muted);
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 999px;
            padding: 7px 10px;
            white-space: nowrap;
            flex: 0 0 auto;
        }

        .topicBody {
            max-height: 0px;
            overflow: hidden;
            transition: max-height 260ms ease;
            border-top: 1px solid var(--color-border);
        }

        .topicBody.open {
            max-height: 6000px;
        }

        .section {
            padding: 14px 14px;
        }

        .section + .section {
            border-top: 1px dashed var(--color-border-light);
        }

        .h3 {
            font-size: 16px;
            margin-bottom: 10px;
            display: inline-flex;
            align-items: center;
            gap: 10px;
        }

        .h3Icon {
            width: 30px;
            height: 30px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            color: var(--color-text-secondary);
            flex: 0 0 auto;
            font-size: 14px;
        }

        .p {
            margin: 0;
            color: var(--color-text-secondary);
            line-height: 1.7;
        }

        .p + .p {
            margin-top: 12px;
        }

        .mono {
            font-family:
                ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                "Liberation Mono", "Courier New", monospace;
            font-size: 0.95em;
            color: var(--color-text-primary);
        }

        .tips {
            margin-top: 12px;
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 10px;
        }

        .tip {
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 14px;
            padding: 12px;
            display: flex;
            gap: 10px;
            align-items: flex-start;
        }

        .tipIcon {
            width: 34px;
            height: 34px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: var(--color-surface);
            color: var(--color-text-secondary);
            flex: 0 0 auto;
        }

        .tipTitle {
            font-weight: 900;
            font-size: 13px;
            color: var(--color-text-primary);
        }

        .tipSub {
            margin-top: 3px;
            font-size: 12px;
            color: var(--color-text-secondary);
            line-height: 1.5;
        }

        .codeBlock {
            margin-top: 12px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 14px;
            overflow: hidden;
        }

        .codeTop {
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 10px 12px;
            border-bottom: 1px solid var(--color-border);
            background: var(--color-surface);
        }

        .codeIcon {
            width: 30px;
            height: 30px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            color: var(--color-text-secondary);
            flex: 0 0 auto;
        }

        .codeTitle {
            font-weight: 900;
            font-size: 13px;
            color: var(--color-text-primary);
        }

        .pre {
            margin: 0;
            padding: 12px;
            overflow: auto;
            color: var(--color-text-secondary);
            line-height: 1.6;
            font-family:
                ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                "Liberation Mono", "Courier New", monospace;
            font-size: 13px;
            white-space: pre;
        }

        .pNote {
            margin: 0;
            padding: 10px 12px 12px 12px;
            color: var(--color-text-muted);
            border-top: 1px dashed var(--color-border-light);
            line-height: 1.6;
            font-size: 13px;
        }

        .miniList {
            margin-top: 12px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 14px;
            padding: 12px;
        }

        .miniTitle {
            font-weight: 900;
            font-size: 13px;
            color: var(--color-text-primary);
            margin-bottom: 10px;
        }

        .bullets {
            list-style: none;
            padding-left: 0;
            display: grid;
            gap: 10px;
            margin: 0;
        }

        .bullets li {
            display: flex;
            gap: 10px;
            align-items: flex-start;
            color: var(--color-text-secondary);
            line-height: 1.6;
            font-size: 14px;
        }

        .dot {
            width: 8px;
            height: 8px;
            border-radius: 999px;
            background: var(--color-text-primary);
            flex: 0 0 auto;
            margin-top: 7px;
        }

        .noteBox {
            margin-top: 12px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 14px;
            padding: 12px;
            display: flex;
            gap: 10px;
            align-items: flex-start;
        }

        .noteIcon {
            width: 34px;
            height: 34px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: var(--color-surface);
            color: var(--color-text-secondary);
            flex: 0 0 auto;
        }

        .noteTitle {
            font-weight: 900;
            font-size: 13px;
            color: var(--color-text-primary);
        }

        .noteSub {
            margin-top: 3px;
            font-size: 12px;
            color: var(--color-text-secondary);
            line-height: 1.5;
        }

        @media (max-width: 900px) {
            .tips {
                grid-template-columns: 1fr;
            }
        }
    `},Yf=()=>{const[a,c]=B.useState(!1),l=()=>c(p=>!p);return e.jsxs(Kf.Wrapper,{className:`topicCard ${a?"open":""}`,children:[e.jsxs("button",{type:"button",className:"topicHeader",onClick:l,"aria-expanded":a,children:[e.jsx("span",{className:"chev",children:a?e.jsx(ie,{}):e.jsx(le,{})}),e.jsx("span",{className:"icon",children:e.jsx(cs,{})}),e.jsx("span",{className:"title",children:"Embedded"}),e.jsx("span",{className:"meta",children:a?"Collapse":"Expand"})]}),e.jsxs("div",{className:`topicBody ${a?"open":""}`,children:[e.jsxs("div",{className:"section",children:[e.jsxs("h3",{className:"h3",children:[e.jsx("span",{className:"h3Icon",children:e.jsx(He,{})}),'What does "embedded content" mean']}),e.jsxs("p",{className:"p",children:["Embedded content means showing something inside your page that comes from somewhere else or that is rendered by the browser as a separate embedded document. The most common example is an"," ",e.jsx("span",{className:"mono",children:"iframe"}),", which can show another webpage inside your webpage."]}),e.jsx("p",{className:"p",children:"Use embedded elements when you truly need to display external content like maps, videos, payment widgets, or third party tools. If you control the content, it is often better to build a native UI instead of embedding a full page."})]}),e.jsxs("div",{className:"section",children:[e.jsxs("h3",{className:"h3",children:[e.jsx("span",{className:"h3Icon",children:e.jsx(ho,{})}),"iframe"]}),e.jsxs("p",{className:"p",children:[e.jsx("span",{className:"mono",children:"iframe"})," embeds another HTML page inside your current page. Think of it like a mini browser window inside your layout."]}),e.jsxs("div",{className:"tips",children:[e.jsxs("div",{className:"tip",children:[e.jsx("span",{className:"tipIcon",children:e.jsx(Ht,{})}),e.jsxs("div",{className:"tipText",children:[e.jsx("div",{className:"tipTitle",children:"Security note"}),e.jsxs("div",{className:"tipSub",children:["If you embed a page you do not fully trust, use ",e.jsx("span",{className:"mono",children:"sandbox"})," to restrict it."]})]})]}),e.jsxs("div",{className:"tip",children:[e.jsx("span",{className:"tipIcon",children:e.jsx(io,{})}),e.jsxs("div",{className:"tipText",children:[e.jsx("div",{className:"tipTitle",children:"Privacy note"}),e.jsxs("div",{className:"tipSub",children:["Many embeds track users. Only embed trusted sources and prefer minimal permissions in"," ",e.jsx("span",{className:"mono",children:"allow"}),"."]})]})]})]}),e.jsxs("div",{className:"codeBlock",children:[e.jsxs("div",{className:"codeTop",children:[e.jsx("span",{className:"codeIcon",children:e.jsx(Me,{})}),e.jsx("div",{className:"codeTitle",children:"Basic iframe"})]}),e.jsx("pre",{className:"pre",children:`<iframe
  src="https://example.com"
  title="Example embed"
  width="600"
  height="400"
  loading="lazy"
></iframe>`}),e.jsxs("p",{className:"pNote",children:["Always add a meaningful"," ",e.jsx("span",{className:"mono",children:"title"})," so screen readers can describe what the embedded content is."]})]})]}),e.jsxs("div",{className:"section",children:[e.jsxs("h3",{className:"h3",children:[e.jsx("span",{className:"h3Icon",children:e.jsx(Ht,{})}),"sandbox"]}),e.jsxs("p",{className:"p",children:[e.jsx("span",{className:"mono",children:"sandbox"})," is an iframe attribute that blocks powerful capabilities by default. It turns the embed into a safer, restricted environment. You can selectively allow specific capabilities."]}),e.jsxs("div",{className:"codeBlock",children:[e.jsxs("div",{className:"codeTop",children:[e.jsx("span",{className:"codeIcon",children:e.jsx(Me,{})}),e.jsx("div",{className:"codeTitle",children:"iframe with sandbox"})]}),e.jsx("pre",{className:"pre",children:`<iframe
  src="https://example.com"
  title="Sandboxed embed"
  sandbox
></iframe>`}),e.jsxs("p",{className:"pNote",children:["Just writing ",e.jsx("span",{className:"mono",children:"sandbox"})," ","without values applies strict restrictions."]})]}),e.jsxs("div",{className:"miniList",children:[e.jsx("div",{className:"miniTitle",children:"Common sandbox tokens"}),e.jsxs("ul",{className:"bullets",children:[e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),e.jsx("span",{className:"mono",children:"allow-scripts"}),": allow running JavaScript inside the iframe"]}),e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),e.jsx("span",{className:"mono",children:"allow-forms"}),": allow form submissions"]}),e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),e.jsx("span",{className:"mono",children:"allow-same-origin"}),": treat the iframe as same origin (be careful)"]}),e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),e.jsx("span",{className:"mono",children:"allow-popups"}),": allow opening new windows or tabs"]})]}),e.jsx("p",{className:"pNote",children:"Beginner rule: start strict, then add only what you absolutely need."})]}),e.jsxs("div",{className:"codeBlock",children:[e.jsxs("div",{className:"codeTop",children:[e.jsx("span",{className:"codeIcon",children:e.jsx(Me,{})}),e.jsx("div",{className:"codeTitle",children:"selective sandbox permissions"})]}),e.jsx("pre",{className:"pre",children:`<iframe
  src="https://example.com"
  title="Restricted embed"
  sandbox="allow-scripts allow-forms"
  loading="lazy"
></iframe>`})]})]}),e.jsxs("div",{className:"section",children:[e.jsxs("h3",{className:"h3",children:[e.jsx("span",{className:"h3Icon",children:e.jsx(io,{})}),"allow attribute"]}),e.jsxs("p",{className:"p",children:[e.jsx("span",{className:"mono",children:"allow"})," controls which browser features the iframe is allowed to use. This is often used for permissions like camera, microphone, fullscreen, autoplay, and more."]}),e.jsxs("div",{className:"codeBlock",children:[e.jsxs("div",{className:"codeTop",children:[e.jsx("span",{className:"codeIcon",children:e.jsx(Me,{})}),e.jsx("div",{className:"codeTitle",children:"iframe allow example"})]}),e.jsx("pre",{className:"pre",children:`<iframe
  src="https://example.com"
  title="Feature controlled embed"
  allow="fullscreen; clipboard-write"
  sandbox="allow-scripts"
></iframe>`}),e.jsx("p",{className:"pNote",children:"Keep it minimal. If you do not need a feature, do not allow it."})]})]}),e.jsxs("div",{className:"section",children:[e.jsxs("h3",{className:"h3",children:[e.jsx("span",{className:"h3Icon",children:e.jsx(cs,{})}),"embed"]}),e.jsxs("p",{className:"p",children:[e.jsx("span",{className:"mono",children:"embed"})," is used to embed non-HTML external resources like PDFs or media that the browser can render using built-in support or plugins. In modern web apps, it is less common than"," ",e.jsx("span",{className:"mono",children:"iframe"}),"."]}),e.jsxs("div",{className:"codeBlock",children:[e.jsxs("div",{className:"codeTop",children:[e.jsx("span",{className:"codeIcon",children:e.jsx(Me,{})}),e.jsx("div",{className:"codeTitle",children:"embed PDF example"})]}),e.jsx("pre",{className:"pre",children:`<embed
  src="/docs/guide.pdf"
  type="application/pdf"
  width="100%"
  height="500"
/>`})]}),e.jsx("p",{className:"pNote",children:"If you need more control and accessibility, consider linking the file and letting the user open it, or use an iframe with a safe viewer."})]}),e.jsxs("div",{className:"section",children:[e.jsxs("h3",{className:"h3",children:[e.jsx("span",{className:"h3Icon",children:e.jsx(cs,{})}),"object and param"]}),e.jsxs("p",{className:"p",children:[e.jsx("span",{className:"mono",children:"object"})," is a generic container to embed resources like PDFs, images, or other content types. It can also include fallback content if the browser cannot render the resource."]}),e.jsxs("p",{className:"p",children:[e.jsx("span",{className:"mono",children:"param"})," is used inside"," ",e.jsx("span",{className:"mono",children:"object"})," to pass extra configuration to the embedded resource. In modern HTML,",e.jsx("span",{className:"mono",children:"param"})," is rarely needed, but you should recognize it when you see it."]}),e.jsxs("div",{className:"codeBlock",children:[e.jsxs("div",{className:"codeTop",children:[e.jsx("span",{className:"codeIcon",children:e.jsx(Me,{})}),e.jsx("div",{className:"codeTitle",children:"object with fallback"})]}),e.jsx("pre",{className:"pre",children:`<object
  data="/docs/guide.pdf"
  type="application/pdf"
  width="100%"
  height="500"
>
  <p>
    Your browser cannot display this PDF.
    <a href="/docs/guide.pdf">Download the file</a>.
  </p>
</object>`})]}),e.jsxs("div",{className:"codeBlock",children:[e.jsxs("div",{className:"codeTop",children:[e.jsx("span",{className:"codeIcon",children:e.jsx(Me,{})}),e.jsx("div",{className:"codeTitle",children:"param example"})]}),e.jsx("pre",{className:"pre",children:`<object data="movie.swf" type="application/x-shockwave-flash" width="400" height="300">
  <param name="quality" value="high" />
  <p>Fallback content goes here</p>
</object>`}),e.jsxs("p",{className:"pNote",children:["The example above is mostly historical. Today you will rarely embed Flash, but you might still see"," ",e.jsx("span",{className:"mono",children:"object"})," and"," ",e.jsx("span",{className:"mono",children:"param"})," in old projects."]})]})]}),e.jsxs("div",{className:"section",children:[e.jsxs("h3",{className:"h3",children:[e.jsx("span",{className:"h3Icon",children:e.jsx(He,{})}),"Quick beginner rules"]}),e.jsxs("ul",{className:"bullets",children:[e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),"Prefer ",e.jsx("span",{className:"mono",children:"iframe"})," for embedding webpages or widget-like content"]}),e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),"Use ",e.jsx("span",{className:"mono",children:"sandbox"})," for safety when embedding third party pages"]}),e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),"Keep ",e.jsx("span",{className:"mono",children:"allow"})," minimal"]}),e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),"Add a meaningful ",e.jsx("span",{className:"mono",children:"title"})," ","to iframes"]}),e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),"Use ",e.jsx("span",{className:"mono",children:"object"})," when you want fallback content support"]})]}),e.jsxs("div",{className:"noteBox",children:[e.jsx("span",{className:"noteIcon",children:e.jsx(cs,{})}),e.jsxs("div",{className:"noteText",children:[e.jsx("div",{className:"noteTitle",children:"Real world example"}),e.jsxs("div",{className:"noteSub",children:["Embedding a Google Map or a YouTube video usually uses"," ",e.jsx("span",{className:"mono",children:"iframe"})," with a few controlled permissions."]})]})]})]})]})]})},Jf={Wrapper:Q.section`
        width: 100%;
        border: 1px solid var(--color-border);
        background: var(--color-surface);
        border-radius: 18px;
        box-shadow: 0 12px 30px var(--color-shadow);
        overflow: hidden;
        margin-bottom: 5px;

        .topicHeader {
            width: 100%;
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 14px 14px;
            background: transparent;
            color: var(--color-text-primary);
            text-align: left;
        }

        .topicHeader:hover {
            background: var(--color-surface-2);
        }

        .chev {
            width: 28px;
            height: 28px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            border-radius: 10px;
            background: var(--color-bg);
            color: var(--color-text-secondary);
            flex: 0 0 auto;
        }

        .icon {
            width: 36px;
            height: 36px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            color: var(--color-text-secondary);
            font-size: 18px;
            flex: 0 0 auto;
        }

        .title {
            font-weight: 900;
            letter-spacing: 0.2px;
            flex: 1;
        }

        .meta {
            font-size: 12px;
            color: var(--color-text-muted);
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 999px;
            padding: 7px 10px;
            white-space: nowrap;
            flex: 0 0 auto;
        }

        .topicBody {
            max-height: 0px;
            overflow: hidden;
            transition: max-height 260ms ease;
            border-top: 1px solid var(--color-border);
        }

        .topicBody.open {
            max-height: 4200px;
        }

        .section {
            padding: 14px 14px;
        }

        .section + .section {
            border-top: 1px dashed var(--color-border-light);
        }

        .h3 {
            font-size: 16px;
            margin-bottom: 8px;
        }

        .p {
            margin: 0;
            color: var(--color-text-secondary);
            line-height: 1.7;
        }

        .note {
            margin-top: 12px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 14px;
            padding: 12px;
        }

        .noteTop {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 8px;
        }

        .noteIcon {
            width: 30px;
            height: 30px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: var(--color-surface);
            color: var(--color-text-secondary);
            flex: 0 0 auto;
        }

        .noteTitle {
            font-weight: 900;
            font-size: 13px;
            color: var(--color-text-primary);
        }

        .noteBody {
            color: var(--color-text-secondary);
            line-height: 1.6;
            font-size: 14px;
        }

        .example {
            margin-top: 14px;
            border: 1px solid var(--color-border);
            background: var(--color-surface-2);
            border-radius: 14px;
            padding: 12px;
        }

        .exampleHead {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 12px;
        }

        .exampleIcon {
            width: 30px;
            height: 30px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            color: var(--color-text-secondary);
        }

        .exampleTitle {
            font-weight: 900;
            font-size: 13px;
            color: var(--color-text-primary);
        }

        .inlineDemo {
            display: grid;
            grid-template-columns: 140px 1fr;
            gap: 14px;
            align-items: center;
        }

        .svgBox {
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 14px;
            padding: 14px;
            display: grid;
            place-items: center;
            color: var(--color-text-primary);
        }

        .inlineTitle {
            font-weight: 900;
            margin-bottom: 6px;
        }

        .inlineSub {
            color: var(--color-text-secondary);
            line-height: 1.6;
            font-size: 14px;
        }

        .compareGrid {
            margin-top: 12px;
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 12px;
        }

        .compareCard {
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 14px;
            padding: 12px;
        }

        .compareTop {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 10px;
        }

        .compareIcon {
            width: 30px;
            height: 30px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: var(--color-surface);
            color: var(--color-text-secondary);
        }

        .compareTitle {
            font-weight: 900;
            font-size: 13px;
            color: var(--color-text-primary);
        }

        .bullets {
            list-style: none;
            margin-top: 12px;
            display: grid;
            gap: 10px;
            padding-left: 0;
        }

        .bullets li {
            display: flex;
            align-items: center;
            gap: 10px;
            color: var(--color-text-secondary);
            font-size: 14px;
        }

        .dot {
            width: 8px;
            height: 8px;
            border-radius: 999px;
            background: var(--color-text-primary);
            flex: 0 0 auto;
        }

        .a11yGrid {
            margin-top: 12px;
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 12px;
        }

        .a11yCard {
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 14px;
            padding: 12px;
        }

        .a11yTitle {
            font-weight: 900;
            font-size: 13px;
            color: var(--color-text-primary);
            margin-bottom: 6px;
        }

        .a11ySub {
            color: var(--color-text-secondary);
            line-height: 1.6;
            font-size: 14px;
            margin-bottom: 10px;
        }

        .codeLine {
            border: 1px solid var(--color-border);
            background: var(--color-surface);
            border-radius: 12px;
            padding: 10px 12px;
        }

        .mono {
            font-family:
                ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                "Liberation Mono", "Courier New", monospace;
            font-size: 13px;
            color: var(--color-text-primary);
        }

        @media (max-width: 720px) {
            .inlineDemo {
                grid-template-columns: 1fr;
            }

            .compareGrid {
                grid-template-columns: 1fr;
            }

            .a11yGrid {
                grid-template-columns: 1fr;
            }
        }
    `},Xf=()=>{const[a,c]=B.useState(!1),l=()=>c(p=>!p);return e.jsxs(Jf.Wrapper,{className:`topicCard ${a?"open":""}`,children:[e.jsxs("button",{type:"button",className:"topicHeader",onClick:l,"aria-expanded":a,children:[e.jsx("span",{className:"chev",children:a?e.jsx(ie,{}):e.jsx(le,{})}),e.jsx("span",{className:"icon",children:e.jsx(fs,{})}),e.jsx("span",{className:"title",children:"SVG integration"}),e.jsx("span",{className:"meta",children:a?"Collapse":"Expand"})]}),e.jsxs("div",{className:`topicBody ${a?"open":""}`,children:[e.jsxs("div",{className:"section",children:[e.jsx("h3",{className:"h3",children:"Inline SVG"}),e.jsx("p",{className:"p",children:"Inline SVG means you write the SVG markup directly in your JSX. The big advantage is that the SVG becomes part of the DOM. That means you can style it with CSS, change colors on hover, animate parts, and even control it with JavaScript."}),e.jsxs("div",{className:"note",children:[e.jsxs("div",{className:"noteTop",children:[e.jsx("span",{className:"noteIcon",children:e.jsx(Me,{})}),e.jsx("div",{className:"noteTitle",children:"Beginner tip"})]}),e.jsx("div",{className:"noteBody",children:"Inline SVG is perfect for icons, logos, small illustrations, and anything you want to recolor or animate with CSS."})]}),e.jsxs("div",{className:"example",children:[e.jsxs("div",{className:"exampleHead",children:[e.jsx("span",{className:"exampleIcon",children:e.jsx(Me,{})}),e.jsx("div",{className:"exampleTitle",children:"Inline SVG example"})]}),e.jsxs("div",{className:"inlineDemo",children:[e.jsx("div",{className:"svgBox",children:e.jsxs("svg",{width:"120",height:"120",viewBox:"0 0 120 120",role:"img","aria-label":"Simple badge icon",children:[e.jsx("circle",{cx:"60",cy:"60",r:"46",fill:"none",stroke:"currentColor",strokeWidth:"10"}),e.jsx("path",{d:"M40 62 L54 76 L82 48",fill:"none",stroke:"currentColor",strokeWidth:"10",strokeLinecap:"round",strokeLinejoin:"round"})]})}),e.jsxs("div",{className:"inlineText",children:[e.jsx("div",{className:"inlineTitle",children:"This SVG uses currentColor"}),e.jsx("div",{className:"inlineSub",children:"The SVG automatically picks the text color of its parent. So you can theme icons with simple CSS."})]})]})]})]}),e.jsxs("div",{className:"section",children:[e.jsx("h3",{className:"h3",children:"SVG vs img"}),e.jsx("p",{className:"p",children:"You can use SVG in two common ways: as inline markup or as an image file with an img tag. Both are valid. The best choice depends on whether you need control over the SVG parts."}),e.jsxs("div",{className:"compareGrid",children:[e.jsxs("div",{className:"compareCard",children:[e.jsxs("div",{className:"compareTop",children:[e.jsx("span",{className:"compareIcon",children:e.jsx(se,{})}),e.jsx("div",{className:"compareTitle",children:"Inline SVG"})]}),e.jsxs("ul",{className:"bullets",children:[e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),"You can style paths with CSS"]}),e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),"Easy hover states and animations"]}),e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),"Great for icons and UI graphics"]}),e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),"Supports accessibility labels directly"]})]})]}),e.jsxs("div",{className:"compareCard",children:[e.jsxs("div",{className:"compareTop",children:[e.jsx("span",{className:"compareIcon",children:e.jsx(fs,{})}),e.jsx("div",{className:"compareTitle",children:"img src SVG"})]}),e.jsxs("ul",{className:"bullets",children:[e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),"Simple to use and cacheable"]}),e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),"Best for large illustrations"]}),e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),"Limited styling of inside parts"]}),e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),"Accessible with alt text like images"]})]})]})]}),e.jsxs("div",{className:"note",children:[e.jsxs("div",{className:"noteTop",children:[e.jsx("span",{className:"noteIcon",children:e.jsx(Va,{})}),e.jsx("div",{className:"noteTitle",children:"Rule of thumb"})]}),e.jsx("div",{className:"noteBody",children:"Use inline SVG when you need to change colors, animate, or control parts. Use img when the SVG is basically a static picture."})]})]}),e.jsxs("div",{className:"section",children:[e.jsx("h3",{className:"h3",children:"Accessibility in SVG"}),e.jsx("p",{className:"p",children:"SVG can be accessible if you treat it like meaningful content. If the SVG is decorative, hide it from screen readers. If it communicates information, give it a proper text alternative."}),e.jsxs("div",{className:"a11yGrid",children:[e.jsxs("div",{className:"a11yCard",children:[e.jsx("div",{className:"a11yTitle",children:"Decorative SVG"}),e.jsx("div",{className:"a11ySub",children:"If the SVG is just for decoration, hide it."}),e.jsx("div",{className:"codeLine",children:e.jsx("span",{className:"mono",children:'aria-hidden="true"'})})]}),e.jsxs("div",{className:"a11yCard",children:[e.jsx("div",{className:"a11yTitle",children:"Meaningful SVG"}),e.jsx("div",{className:"a11ySub",children:"If it conveys meaning, label it."}),e.jsx("div",{className:"codeLine",children:e.jsx("span",{className:"mono",children:'role="img" + aria-label="..."'})})]})]}),e.jsxs("ul",{className:"bullets",children:[e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),"Use aria-hidden for purely decorative icons"]}),e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),'Use role="img" and aria-label for meaningful SVG']}),e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),"Avoid putting important text only inside SVG unless you provide an accessible label"]})]})]})]})]})},Zf={Wrapper:Q.section`
        width: 100%;
        border: 1px solid var(--color-border);
        background: var(--color-surface);
        border-radius: 18px;
        box-shadow: 0 12px 30px var(--color-shadow);
        overflow: hidden;
        margin-bottom: 5px;

        .topicHeader {
            width: 100%;
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 14px;
            background: transparent;
            color: var(--color-text-primary);
            text-align: left;
        }

        .topicHeader:hover {
            background: var(--color-surface-2);
        }

        .chev {
            width: 28px;
            height: 28px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            border-radius: 10px;
            background: var(--color-bg);
            color: var(--color-text-secondary);
            flex: 0 0 auto;
        }

        .icon {
            width: 36px;
            height: 36px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            color: var(--color-text-secondary);
            font-size: 18px;
            flex: 0 0 auto;
        }

        .title {
            font-weight: 900;
            letter-spacing: 0.2px;
            flex: 1;
        }

        .meta {
            font-size: 12px;
            color: var(--color-text-muted);
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 999px;
            padding: 7px 10px;
            white-space: nowrap;
            flex: 0 0 auto;
        }

        .topicBody {
            max-height: 0px;
            overflow: hidden;
            transition: max-height 260ms ease;
            border-top: 1px solid var(--color-border);
        }

        .topicBody.open {
            max-height: 5000px;
        }

        .section {
            padding: 14px 14px;
        }

        .section + .section {
            border-top: 1px dashed var(--color-border-light);
        }

        .h3 {
            font-size: 16px;
            margin-bottom: 8px;
        }

        .p {
            margin: 0;
            color: var(--color-text-secondary);
            line-height: 1.7;
        }

        .mono {
            font-family:
                ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                "Liberation Mono", "Courier New", monospace;
            font-size: 0.95em;
            color: var(--color-text-primary);
        }

        .bullets {
            list-style: none;
            margin-top: 12px;
            display: grid;
            gap: 10px;
            padding-left: 0;
        }

        .bullets li {
            display: flex;
            align-items: flex-start;
            gap: 10px;
            color: var(--color-text-secondary);
            font-size: 14px;
            line-height: 1.5;
        }

        .dot {
            width: 8px;
            height: 8px;
            border-radius: 999px;
            background: var(--color-text-primary);
            margin-top: 7px;
            flex: 0 0 auto;
        }

        .demoBox {
            margin-top: 12px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 16px;
            padding: 12px;
            overflow: hidden;
        }

        .canvas {
            width: 100%;
            height: auto;
            display: block;
            border-radius: 12px;
            border: 1px solid var(--color-border);
            background: var(--color-surface-2);
        }

        .btnRow {
            margin-top: 12px;
            display: flex;
            gap: 10px;
            flex-wrap: wrap;
        }

        .btn {
            display: inline-flex;
            align-items: center;
            gap: 10px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            color: var(--color-text-primary);
            padding: 10px 12px;
            border-radius: 12px;
            font-weight: 800;
            letter-spacing: 0.2px;
        }

        .btn:hover {
            background: var(--color-surface-2);
        }

        .btn:disabled {
            opacity: 0.6;
            cursor: not-allowed;
        }

        .btnIcon {
            display: grid;
            place-items: center;
            color: var(--color-text-secondary);
            font-size: 16px;
        }

        .note {
            margin-top: 14px;
            display: flex;
            gap: 10px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 14px;
            padding: 12px;
            align-items: flex-start;
        }

        .noteIcon {
            width: 34px;
            height: 34px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: var(--color-surface);
            color: var(--color-text-secondary);
            flex: 0 0 auto;
        }

        .noteText {
            margin: 0;
            color: var(--color-text-secondary);
            line-height: 1.6;
            font-size: 14px;
        }

        .code {
            margin-top: 12px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 16px;
            padding: 14px;
            overflow: auto;
            color: var(--color-text-secondary);
            font-size: 13px;
            line-height: 1.6;
        }
    `},eg=()=>{const[a,c]=B.useState(!1),[l,p]=B.useState(!0),m=B.useMemo(()=>`<!-- HTML -->
<canvas id="demo" width="420" height="220"></canvas>

<script>
  const canvas = document.getElementById("demo");
  const ctx = canvas.getContext("2d");

  // background
  ctx.fillStyle = "#111";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // circle
  ctx.beginPath();
  ctx.arc(210, 110, 55, 0, Math.PI * 2);
  ctx.fillStyle = "#fff";
  ctx.fill();

  // text
  ctx.fillStyle = "#fff";
  ctx.font = "16px Arial";
  ctx.fillText("Canvas basics", 20, 30);
<\/script>`,[]);return e.jsxs(Zf.Wrapper,{className:`topicCard ${a?"open":""}`,children:[e.jsxs("button",{type:"button",className:"topicHeader",onClick:()=>c(f=>!f),"aria-expanded":a,children:[e.jsx("span",{className:"chev",children:a?e.jsx(ie,{}):e.jsx(le,{})}),e.jsx("span",{className:"icon",children:e.jsx(ms,{})}),e.jsx("span",{className:"title",children:"Canvas"}),e.jsx("span",{className:"meta",children:a?"Collapse":"Expand"})]}),e.jsxs("div",{className:`topicBody ${a?"open":""}`,children:[e.jsxs("div",{className:"section",children:[e.jsx("h3",{className:"h3",children:"What is a canvas"}),e.jsxs("p",{className:"p",children:["The ",e.jsx("span",{className:"mono",children:"canvas"})," element is a drawing surface. It does not contain real HTML elements inside it. Instead, you draw pixels using JavaScript. This is useful for charts, games, animations, custom visual effects, and small interactive demos."]})]}),e.jsxs("div",{className:"section",children:[e.jsx("h3",{className:"h3",children:"How it works"}),e.jsxs("ul",{className:"bullets",children:[e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),"Create a canvas with a fixed width and height"]}),e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),"Get a drawing context:",e.jsx("span",{className:"mono",children:'getContext("2d")'})]}),e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),"Use the context to draw shapes, text, and images"]}),e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),"For animations, clear the canvas and redraw inside a loop (usually"," ",e.jsx("span",{className:"mono",children:"requestAnimationFrame"}),")"]})]})]}),e.jsx(rg,{isRunning:l}),e.jsxs("div",{className:"section",children:[e.jsx("h3",{className:"h3",children:"Mini controls"}),e.jsxs("div",{className:"btnRow",children:[e.jsxs("button",{type:"button",className:"btn",onClick:()=>p(!0),disabled:l,children:[e.jsx("span",{className:"btnIcon",children:e.jsx(sf,{})}),"Play"]}),e.jsxs("button",{type:"button",className:"btn",onClick:()=>p(!1),disabled:!l,children:[e.jsx("span",{className:"btnIcon",children:e.jsx(rf,{})}),"Pause"]}),e.jsxs("button",{type:"button",className:"btn",onClick:()=>{p(!1),setTimeout(()=>p(!0),80)},children:[e.jsx("span",{className:"btnIcon",children:e.jsx(af,{})}),"Restart"]})]}),e.jsxs("div",{className:"note",children:[e.jsx("span",{className:"noteIcon",children:e.jsx(He,{})}),e.jsxs("p",{className:"noteText",children:["Canvas is pixel based. If you resize the canvas using CSS only, drawings can look blurry. Prefer setting",e.jsx("span",{className:"mono",children:"width"})," and",e.jsx("span",{className:"mono",children:"height"})," attributes on the element, and handle high DPI scaling if needed."]})]})]}),e.jsxs("div",{className:"section",children:[e.jsx("h3",{className:"h3",children:"Basic example code"}),e.jsx("pre",{className:"code",children:e.jsx("code",{children:m})})]})]})]})},rg=({isRunning:a})=>{const c=Ye.useRef(null),l=Ye.useRef(0),p=Ye.useRef(0);return Ye.useEffect(()=>{const m=c.current;if(!m)return;const f=m.getContext("2d");if(!f)return;const b=m.width,L=m.height,T=()=>{f.fillStyle="#0d0d0d",f.fillRect(0,0,b,L),f.fillStyle="#ffffff",f.font="14px Verdana",f.fillText("Canvas demo: moving dot",14,24),f.globalAlpha=.35,f.beginPath(),f.moveTo(14,L/2),f.lineTo(b-14,L/2),f.strokeStyle="#ffffff",f.lineWidth=1,f.stroke(),f.globalAlpha=1;const O=p.current,P=14+(Math.sin(O)+1)/2*(b-28),U=L/2+Math.cos(O*1.2)*36;f.beginPath(),f.arc(P,U,8,0,Math.PI*2),f.fillStyle="#ffffff",f.fill(),f.fillStyle="#d0d0d0",f.font="12px Verdana",f.fillText("requestAnimationFrame loop",14,L-14)},F=()=>{p.current+=.04,T(),l.current=window.requestAnimationFrame(F)},W=()=>{l.current&&window.cancelAnimationFrame(l.current),l.current=0};return a?(W(),F()):(W(),T()),()=>W()},[a]),e.jsxs("div",{className:"section",children:[e.jsx("h3",{className:"h3",children:"Canvas element basics"}),e.jsxs("p",{className:"p",children:["Below is a small demo. We draw a background, some text, and a moving dot. The motion uses"," ",e.jsx("span",{className:"mono",children:"requestAnimationFrame"}),"."]}),e.jsx("div",{className:"demoBox",children:e.jsx("canvas",{ref:c,width:520,height:220,className:"canvas"})})]})},tg={Wrapper:Q.section`
        width: 100%;
        margin-bottom: 15px;
        border: 1px solid var(--color-border);
        background: var(--color-surface);
        border-radius: 18px;
        box-shadow: 0 12px 30px var(--color-shadow);
        overflow: hidden;
        margin-bottom: 5px;

        .topicHeader {
            width: 100%;
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 14px;
            background: transparent;
            color: var(--color-text-primary);
            text-align: left;
        }

        .topicHeader:hover {
            background: var(--color-surface-2);
        }

        .chev {
            width: 28px;
            height: 28px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            border-radius: 10px;
            background: var(--color-bg);
            color: var(--color-text-secondary);
        }

        .icon {
            width: 36px;
            height: 36px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            color: var(--color-text-secondary);
        }

        .title {
            font-weight: 900;
            flex: 1;
        }

        .meta {
            font-size: 12px;
            color: var(--color-text-muted);
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 999px;
            padding: 6px 10px;
        }

        .topicBody {
            max-height: 0px;
            overflow: hidden;
            transition: max-height 260ms ease;
            border-top: 1px solid var(--color-border);
        }

        .topicBody.open {
            max-height: 4000px;
        }

        .section {
            padding: 14px;
        }

        .section + .section {
            border-top: 1px dashed var(--color-border-light);
        }

        .h3 {
            font-size: 16px;
            margin-bottom: 8px;
        }

        .p {
            color: var(--color-text-secondary);
            line-height: 1.7;
            margin: 0;
        }

        .code {
            margin-top: 10px;
            padding: 12px;
            background: var(--color-bg);
            border: 1px solid var(--color-border);
            border-radius: 12px;
            font-size: 13px;
            color: var(--color-text-secondary);
            overflow-x: auto;
        }
    `},sg=()=>{const[a,c]=B.useState(!1);return e.jsxs(tg.Wrapper,{className:`topicCard ${a?"open":""}`,children:[e.jsxs("button",{type:"button",className:"topicHeader",onClick:()=>c(l=>!l),"aria-expanded":a,children:[e.jsx("span",{className:"chev",children:a?e.jsx(ie,{}):e.jsx(le,{})}),e.jsx("span",{className:"icon",children:e.jsx(xu,{})}),e.jsx("span",{className:"title",children:"Sectioning Elements"}),e.jsx("span",{className:"meta",children:a?"Collapse":"Expand"})]}),e.jsxs("div",{className:`topicBody ${a?"open":""}`,children:[e.jsxs("div",{className:"section",children:[e.jsx("h3",{className:"h3",children:"What are Sectioning Elements"}),e.jsx("p",{className:"p",children:"Sectioning elements are semantic HTML tags that define the structure of a webpage. They help organize content into meaningful blocks so browsers, search engines, and screen readers can understand the layout of the page."})]}),e.jsxs("div",{className:"section",children:[e.jsx("h3",{className:"h3",children:"header"}),e.jsx("p",{className:"p",children:"The header element represents introductory content. It usually contains a logo, navigation links, or page title. It can appear at the top of the page or inside an article or section."}),e.jsx("pre",{className:"code",children:`<header>
  <h1>My Website</h1>
  <nav>...</nav>
</header>`})]}),e.jsxs("div",{className:"section",children:[e.jsx("h3",{className:"h3",children:"footer"}),e.jsx("p",{className:"p",children:"The footer element contains information about its parent section. It commonly includes copyright, author details, related links, or contact information."}),e.jsx("pre",{className:"code",children:`<footer>
  <p>© 2026 My Website</p>
</footer>`})]}),e.jsxs("div",{className:"section",children:[e.jsx("h3",{className:"h3",children:"main"}),e.jsx("p",{className:"p",children:"The main element represents the primary content of the page. There must be only one main element per page. It should not contain repeated content like navigation or footer."}),e.jsx("pre",{className:"code",children:`<main>
  <h2>Article Title</h2>
  <p>Main content goes here.</p>
</main>`})]}),e.jsxs("div",{className:"section",children:[e.jsx("h3",{className:"h3",children:"section"}),e.jsx("p",{className:"p",children:"The section element defines a thematic grouping of content. It is used when content belongs together and usually contains a heading."}),e.jsx("pre",{className:"code",children:`<section>
  <h2>Services</h2>
  <p>Details about services.</p>
</section>`})]}),e.jsxs("div",{className:"section",children:[e.jsx("h3",{className:"h3",children:"article"}),e.jsx("p",{className:"p",children:"The article element represents independent, self- contained content. Blog posts, news articles, forum posts, or comments are good examples."}),e.jsx("pre",{className:"code",children:`<article>
  <h2>Blog Post</h2>
  <p>This is a standalone article.</p>
</article>`})]}),e.jsxs("div",{className:"section",children:[e.jsx("h3",{className:"h3",children:"aside"}),e.jsx("p",{className:"p",children:"The aside element represents content indirectly related to the main content. It is often used for sidebars, advertisements, or related links."}),e.jsx("pre",{className:"code",children:`<aside>
  <h3>Related Links</h3>
  <ul>
    <li>Link 1</li>
    <li>Link 2</li>
  </ul>
</aside>`})]}),e.jsxs("div",{className:"section",children:[e.jsx("h3",{className:"h3",children:"Why Semantics Matter"}),e.jsx("p",{className:"p",children:"Using semantic sectioning elements improves accessibility, SEO, and code readability. It helps screen readers understand page layout and helps search engines identify important content."})]})]})]})},og={Wrapper:Q.section`
        width: 100%;
        margin-bottom: 5px;
        border: 1px solid var(--color-border);
        background: var(--color-surface);
        border-radius: 18px;
        box-shadow: 0 12px 30px var(--color-shadow);
        overflow: hidden;
        margin-bottom: 5px;

        .topicHeader {
            width: 100%;
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 14px;
            background: transparent;
            color: var(--color-text-primary);
            text-align: left;
        }

        .topicHeader:hover {
            background: var(--color-surface-2);
        }

        .chev {
            width: 28px;
            height: 28px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            border-radius: 10px;
            background: var(--color-bg);
            color: var(--color-text-secondary);
            flex: 0 0 auto;
        }

        .icon {
            width: 36px;
            height: 36px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            color: var(--color-text-secondary);
            font-size: 18px;
            flex: 0 0 auto;
        }

        .title {
            font-weight: 900;
            letter-spacing: 0.2px;
            flex: 1;
        }

        .meta {
            font-size: 12px;
            color: var(--color-text-muted);
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 999px;
            padding: 7px 10px;
            white-space: nowrap;
            flex: 0 0 auto;
        }

        .topicBody {
            max-height: 0px;
            overflow: hidden;
            transition: max-height 260ms ease;
            border-top: 1px solid var(--color-border);
        }

        .topicBody.open {
            max-height: 5000px;
        }

        .section {
            padding: 14px;
        }

        .section + .section {
            border-top: 1px dashed var(--color-border-light);
        }

        .h3 {
            font-size: 16px;
            margin-bottom: 8px;
        }

        .p {
            margin: 0;
            color: var(--color-text-secondary);
            line-height: 1.7;
        }

        .mono {
            font-family:
                ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                "Liberation Mono", "Courier New", monospace;
        }

        .muted {
            color: var(--color-text-muted);
        }

        .callout {
            margin-top: 12px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 16px;
            padding: 12px;
            display: flex;
            gap: 10px;
            align-items: flex-start;
        }

        .calloutIcon {
            width: 34px;
            height: 34px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: var(--color-surface);
            color: var(--color-text-secondary);
            flex: 0 0 auto;
        }

        .calloutTitle {
            font-weight: 900;
            margin-bottom: 4px;
        }

        .calloutSub {
            color: var(--color-text-secondary);
            line-height: 1.6;
        }

        .table {
            margin-top: 12px;
            border: 1px solid var(--color-border);
            border-radius: 16px;
            overflow: hidden;
            background: var(--color-bg);
        }

        .tHead,
        .tRow {
            display: grid;
            grid-template-columns: 160px 190px 1fr;
            gap: 0;
        }

        .tHead {
            background: var(--color-surface);
            border-bottom: 1px solid var(--color-border);
        }

        .cell {
            padding: 12px;
            color: var(--color-text-secondary);
            border-right: 1px solid var(--color-border);
            display: flex;
            align-items: center;
            gap: 8px;
        }

        .tHead .cell {
            color: var(--color-text-primary);
            font-weight: 900;
        }

        .tRow .cell:last-child,
        .tHead .cell:last-child {
            border-right: 0;
        }

        .tRow + .tRow {
            border-top: 1px dashed var(--color-border-light);
        }

        .pill {
            border: 1px solid var(--color-border);
            background: var(--color-surface);
            border-radius: 999px;
            padding: 6px 10px;
            font-size: 12px;
            color: var(--color-text-primary);
            white-space: nowrap;
        }

        .useText {
            color: var(--color-text-secondary);
            line-height: 1.55;
        }

        .note {
            margin-top: 8px;
            display: flex;
            gap: 8px;
            align-items: flex-start;
            color: var(--color-text-muted);
            font-size: 12px;
            line-height: 1.4;
        }

        .roleGrid {
            margin-top: 12px;
            display: grid;
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 10px;
        }

        .roleCard {
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 16px;
            padding: 12px;
        }

        .roleTop {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 8px;
        }

        .roleIcon {
            width: 30px;
            height: 30px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: var(--color-surface);
            color: var(--color-text-primary);
            flex: 0 0 auto;
        }

        .roleName {
            font-weight: 900;
            color: var(--color-text-primary);
        }

        .roleWhen {
            color: var(--color-text-secondary);
            line-height: 1.55;
            font-size: 13px;
        }

        .roleExample {
            margin-top: 8px;
            color: var(--color-text-muted);
            font-size: 12px;
            line-height: 1.5;
        }

        .bullets {
            list-style: none;
            margin: 12px 0 0 0;
            display: grid;
            gap: 10px;
            padding-left: 0;
        }

        .bullets li {
            display: flex;
            align-items: flex-start;
            gap: 10px;
            color: var(--color-text-secondary);
            font-size: 14px;
            line-height: 1.6;
        }

        .dot {
            width: 8px;
            height: 8px;
            border-radius: 999px;
            background: var(--color-text-primary);
            margin-top: 8px;
            flex: 0 0 auto;
        }

        .codeBlock {
            margin-top: 12px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 16px;
            padding: 12px;
            display: grid;
            gap: 8px;
        }

        .codeLine {
            color: var(--color-text-secondary);
            line-height: 1.6;
            font-size: 13px;
        }

        @media (max-width: 980px) {
            .tHead,
            .tRow {
                grid-template-columns: 140px 170px 1fr;
            }

            .roleGrid {
                grid-template-columns: 1fr;
            }
        }

        @media (max-width: 680px) {
            .tHead {
                display: none;
            }

            .tRow {
                grid-template-columns: 1fr;
            }

            .cell {
                border-right: 0;
                border-bottom: 1px dashed var(--color-border-light);
            }

            .tRow .cell:last-child {
                border-bottom: 0;
            }
        }
    `},ag=()=>{const[a,c]=B.useState(!1),l=B.useMemo(()=>[{tag:"header",role:"banner",use:"Top area of a page or a section (logo, title, top nav).",note:"Only the top-level page header maps to banner. A header inside an article is not a banner landmark."},{tag:"nav",role:"navigation",use:"Primary navigation links or menus.",note:"Use one nav per major navigation region. If there are multiple, label them."},{tag:"main",role:"main",use:"The main unique content of the page.",note:"Only one main per page. Avoid nesting main inside other landmarks."},{tag:"aside",role:"complementary",use:"Related side content (sidebar, related links, ads, callouts).",note:"Keep it relevant to the surrounding content."},{tag:"footer",role:"contentinfo",use:"Bottom area of a page (copyright, contact, policies).",note:"Only the page-level footer maps to contentinfo. Footer inside article is not contentinfo."},{tag:"section",role:"region (only when labeled)",use:"A thematic grouping of content with a heading.",note:"Section is not automatically a landmark unless it has an accessible name (aria-label/aria-labelledby)."},{tag:"article",role:"article",use:"Self-contained content that can stand alone (blog post, card, comment).",note:"Articles can be nested (like comments inside a post)."}],[]),p=B.useMemo(()=>[{role:"banner",when:"Top-level site header of the page.",example:"A header that contains site logo and primary navigation."},{role:"navigation",when:"A set of navigation links to major pages or sections.",example:"Main menu, sidebar menu, footer menu."},{role:"main",when:"The main content unique to the page.",example:"Content area excluding header/footer/sidebars."},{role:"complementary",when:"Supporting content related to main content.",example:"Related posts sidebar, glossary, tips panel."},{role:"contentinfo",when:"Footer information for the site or page.",example:"Copyright, contact links, policies."},{role:"region",when:"A generic landmark area that needs a label.",example:"A section with aria-label like 'Pricing' or 'FAQ'."},{role:"search",when:"A search area (often a form).",example:"Search bar container region."}],[]),m=()=>c(f=>!f);return e.jsxs(og.Wrapper,{className:`topicCard ${a?"open":""}`,children:[e.jsxs("button",{type:"button",className:"topicHeader",onClick:m,"aria-expanded":a,children:[e.jsx("span",{className:"chev",children:a?e.jsx(ie,{}):e.jsx(le,{})}),e.jsx("span",{className:"icon",children:e.jsx(Ym,{})}),e.jsx("span",{className:"title",children:"Document Landmarks"}),e.jsx("span",{className:"meta",children:a?"Collapse":"Expand"})]}),e.jsxs("div",{className:`topicBody ${a?"open":""}`,children:[e.jsxs("div",{className:"section",children:[e.jsx("h3",{className:"h3",children:"What are landmarks"}),e.jsx("p",{className:"p",children:"Landmarks are important regions of a page that help users navigate quickly, especially screen reader users. A screen reader can jump directly to landmarks like navigation, main content, or footer. Good landmarks make a page feel organized and predictable."})]}),e.jsxs("div",{className:"section",children:[e.jsx("h3",{className:"h3",children:"Semantic mapping"}),e.jsx("p",{className:"p",children:"Many semantic HTML tags automatically map to ARIA landmark roles. This means you often do not need to add ARIA roles manually. Use semantic tags first, then use ARIA only when you need extra meaning or labeling."}),e.jsxs("div",{className:"callout",children:[e.jsx("div",{className:"calloutIcon",children:e.jsx(He,{})}),e.jsxs("div",{className:"calloutText",children:[e.jsx("div",{className:"calloutTitle",children:"Rule of thumb"}),e.jsx("div",{className:"calloutSub",children:"Prefer semantic HTML. Add ARIA only when you cannot express the meaning using HTML alone."})]})]})]}),e.jsxs("div",{className:"section",children:[e.jsx("h3",{className:"h3",children:"Common semantic tags and their landmark roles"}),e.jsxs("div",{className:"table",children:[e.jsxs("div",{className:"tHead",children:[e.jsxs("div",{className:"cell tag",children:[e.jsx(al,{})," Tag"]}),e.jsxs("div",{className:"cell role",children:[e.jsx(co,{})," ARIA role"]}),e.jsxs("div",{className:"cell use",children:[e.jsx(Va,{})," When to use"]})]}),e.jsx("div",{className:"tBody",children:l.map(f=>e.jsxs("div",{className:"tRow",children:[e.jsx("div",{className:"cell tag",children:e.jsx("span",{className:"pill mono",children:f.tag})}),e.jsx("div",{className:"cell role",children:e.jsx("span",{className:"pill",children:f.role})}),e.jsxs("div",{className:"cell use",children:[e.jsx("div",{className:"useText",children:f.use}),e.jsxs("div",{className:"note",children:[e.jsx(Je,{})," ",f.note]})]})]},`${f.tag}-${f.role}`))})]})]}),e.jsxs("div",{className:"section",children:[e.jsx("h3",{className:"h3",children:"ARIA roles"}),e.jsx("p",{className:"p",children:"ARIA roles describe what an element is. Landmarks are a special set of roles that describe page regions. If you use semantic tags, roles are often implied automatically. Add an explicit role only when needed."}),e.jsx("div",{className:"roleGrid",children:p.map(f=>e.jsxs("div",{className:"roleCard",children:[e.jsxs("div",{className:"roleTop",children:[e.jsx("span",{className:"roleIcon",children:e.jsx(se,{})}),e.jsx("span",{className:"roleName",children:f.role})]}),e.jsx("div",{className:"roleWhen",children:f.when}),e.jsxs("div",{className:"roleExample",children:["Example: ",f.example]})]},f.role))})]}),e.jsxs("div",{className:"section",children:[e.jsx("h3",{className:"h3",children:"Beginner checklist"}),e.jsxs("ul",{className:"bullets",children:[e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),"Use ",e.jsx("span",{className:"mono",children:"header"}),","," ",e.jsx("span",{className:"mono",children:"nav"}),","," ",e.jsx("span",{className:"mono",children:"main"}),","," ",e.jsx("span",{className:"mono",children:"footer"})," first."]}),e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),"Keep exactly one ",e.jsx("span",{className:"mono",children:"main"})," ","on a page."]}),e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),"If you have multiple navs, label them with"," ",e.jsx("span",{className:"mono",children:"aria-label"})," or"," ",e.jsx("span",{className:"mono",children:"aria-labelledby"}),"."]}),e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),"Do not add ARIA roles when HTML already provides the meaning."]}),e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),"For a ",e.jsx("span",{className:"mono",children:"section"})," to be a real landmark, it must have an accessible name."]})]})]}),e.jsxs("div",{className:"section",children:[e.jsx("h3",{className:"h3",children:"Tiny example (mental model)"}),e.jsxs("div",{className:"codeBlock",children:[e.jsxs("div",{className:"codeLine",children:[e.jsx("span",{className:"mono",children:"<header>"})," site header ",e.jsx("span",{className:"muted",children:"(banner)"})]}),e.jsxs("div",{className:"codeLine",children:[e.jsx("span",{className:"mono",children:"<nav>"})," main menu"," ",e.jsx("span",{className:"muted",children:"(navigation)"})]}),e.jsxs("div",{className:"codeLine",children:[e.jsx("span",{className:"mono",children:"<main>"})," page content ",e.jsx("span",{className:"muted",children:"(main)"})]}),e.jsxs("div",{className:"codeLine",children:[e.jsx("span",{className:"mono",children:"<aside>"})," sidebar"," ",e.jsx("span",{className:"muted",children:"(complementary)"})]}),e.jsxs("div",{className:"codeLine",children:[e.jsx("span",{className:"mono",children:"<footer>"})," footer"," ",e.jsx("span",{className:"muted",children:"(contentinfo)"})]})]})]})]})]})},ng={Wrapper:Q.section`
        width: 100%;
        margin-bottom: 5px;
        border: 1px solid var(--color-border);
        background: var(--color-surface);
        border-radius: 18px;
        box-shadow: 0 12px 30px var(--color-shadow);
        overflow: hidden;
        margin-bottom: 5px;

        .topicHeader {
            width: 100%;
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 14px 14px;
            background: transparent;
            color: var(--color-text-primary);
            text-align: left;
        }

        .topicHeader:hover {
            background: var(--color-surface-2);
        }

        .chev {
            width: 28px;
            height: 28px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            border-radius: 10px;
            background: var(--color-bg);
            color: var(--color-text-secondary);
            flex: 0 0 auto;
        }

        .icon {
            width: 36px;
            height: 36px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            color: var(--color-text-secondary);
            font-size: 18px;
            flex: 0 0 auto;
        }

        .title {
            font-weight: 900;
            letter-spacing: 0.2px;
            flex: 1;
        }

        .meta {
            font-size: 12px;
            color: var(--color-text-muted);
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 999px;
            padding: 7px 10px;
            white-space: nowrap;
            flex: 0 0 auto;
        }

        .topicBody {
            max-height: 0px;
            overflow: hidden;
            transition: max-height 260ms ease;
            border-top: 1px solid var(--color-border);
        }

        .topicBody.open {
            max-height: 5000px;
        }

        .section {
            padding: 14px 14px;
        }

        .section + .section {
            border-top: 1px dashed var(--color-border-light);
        }

        .h3 {
            font-size: 16px;
            margin-bottom: 8px;
        }

        .p {
            margin: 0;
            color: var(--color-text-secondary);
            line-height: 1.7;
        }

        .mono {
            font-family:
                ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                "Liberation Mono", "Courier New", monospace;
            font-size: 0.95em;
            color: var(--color-text-primary);
        }

        .bullets {
            list-style: none;
            margin-top: 12px;
            display: grid;
            gap: 10px;
            padding-left: 0;
        }

        .bullets li {
            display: flex;
            align-items: flex-start;
            gap: 10px;
            color: var(--color-text-secondary);
            font-size: 14px;
            line-height: 1.6;
        }

        .dot {
            width: 8px;
            height: 8px;
            margin-top: 7px;
            border-radius: 999px;
            background: var(--color-text-primary);
            flex: 0 0 auto;
        }

        .callouts {
            margin: 12px 0 12px 0;
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 10px;
        }

        .callout {
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 14px;
            padding: 12px;
            display: flex;
            gap: 10px;
            align-items: center;
        }

        .calloutIcon {
            width: 34px;
            height: 34px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: var(--color-surface);
            color: var(--color-text-secondary);
            flex: 0 0 auto;
            font-size: 18px;
        }

        .calloutTitle {
            font-weight: 900;
            font-size: 13px;
        }

        .calloutSub {
            margin-top: 2px;
            font-size: 12px;
            color: var(--color-text-muted);
            line-height: 1.4;
        }

        .examples {
            margin-top: 12px;
            display: grid;
            gap: 12px;
        }

        .example {
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 16px;
            padding: 12px;
        }

        .exTop {
            margin-bottom: 10px;
        }

        .exTitle {
            font-weight: 900;
            letter-spacing: 0.15px;
            margin-bottom: 6px;
        }

        .exDesc {
            color: var(--color-text-secondary);
            font-size: 13px;
            line-height: 1.6;
        }

        .codeWrap {
            border: 1px solid var(--color-border);
            background: var(--color-surface);
            border-radius: 14px;
            overflow: hidden;
        }

        .codeHead {
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 10px 12px;
            border-bottom: 1px solid var(--color-border);
            background: var(--color-surface-2);
        }

        .codeIcon {
            display: grid;
            place-items: center;
            color: var(--color-text-secondary);
            font-size: 16px;
        }

        .codeLabel {
            font-weight: 900;
            color: var(--color-text-secondary);
            font-size: 12px;
            letter-spacing: 0.4px;
        }

        .code {
            margin: 0;
            padding: 12px;
            color: var(--color-text-primary);
            overflow-x: auto;
            font-size: 13px;
            line-height: 1.6;
        }

        @media (max-width: 820px) {
            .callouts {
                grid-template-columns: 1fr;
            }
        }
    `},ig=()=>{const[a,c]=B.useState(!1),l=B.useMemo(()=>[{title:"Basic FAQ (native toggle)",desc:"The <details> element creates a built-in disclosure widget. The <summary> element is the visible title that users click to expand or collapse.",code:`<details>
  <summary>What is HTML?</summary>
  <p>HTML is the structure of a web page.</p>
</details>`},{title:"Open by default",desc:"Add the boolean attribute open to keep it expanded on first load.",code:`<details open>
  <summary>Requirements</summary>
  <ul>
    <li>Valid HTML</li>
    <li>Semantic tags</li>
    <li>Accessible text</li>
  </ul>
</details>`},{title:"Multiple sections (accordion-like)",desc:"Multiple <details> blocks can be used to build an FAQ list. By default, users can open multiple at the same time.",code:`<details>
  <summary>Shipping</summary>
  <p>Delivery usually takes 3 to 5 business days.</p>
</details>

<details>
  <summary>Returns</summary>
  <p>Returns are accepted within 7 days of delivery.</p>
</details>`}],[]),p=()=>c(m=>!m);return e.jsxs(ng.Wrapper,{className:`topicCard ${a?"open":""}`,children:[e.jsxs("button",{type:"button",className:"topicHeader",onClick:p,"aria-expanded":a,children:[e.jsx("span",{className:"chev",children:a?e.jsx(ie,{}):e.jsx(le,{})}),e.jsx("span",{className:"icon",children:e.jsx(He,{})}),e.jsx("span",{className:"title",children:"Details and Disclosure"}),e.jsx("span",{className:"meta",children:a?"Collapse":"Expand"})]}),e.jsxs("div",{className:`topicBody ${a?"open":""}`,children:[e.jsxs("div",{className:"section",children:[e.jsx("h3",{className:"h3",children:"What are details and summary"}),e.jsxs("p",{className:"p",children:["The ",e.jsx("span",{className:"mono",children:"details"})," element provides a built-in expandable container. The"," ",e.jsx("span",{className:"mono",children:"summary"})," element acts as the clickable heading. When the user clicks the summary, the browser expands or collapses the content inside details."]}),e.jsxs("ul",{className:"bullets",children:[e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),"Use ",e.jsx("span",{className:"mono",children:"summary"})," as the visible title"]}),e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),"Content inside ",e.jsx("span",{className:"mono",children:"details"})," ","is hidden until expanded"]}),e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),"The browser handles the toggle behavior for you"]})]})]}),e.jsxs("div",{className:"section",children:[e.jsx("h3",{className:"h3",children:"Why this is useful"}),e.jsxs("div",{className:"callouts",children:[e.jsxs("div",{className:"callout",children:[e.jsx("span",{className:"calloutIcon",children:e.jsx(se,{})}),e.jsxs("div",{className:"calloutText",children:[e.jsx("div",{className:"calloutTitle",children:"Simple"}),e.jsx("div",{className:"calloutSub",children:"No JavaScript needed for expand collapse"})]})]}),e.jsxs("div",{className:"callout",children:[e.jsx("span",{className:"calloutIcon",children:e.jsx(Je,{})}),e.jsxs("div",{className:"calloutText",children:[e.jsx("div",{className:"calloutTitle",children:"Be careful"}),e.jsx("div",{className:"calloutSub",children:"Do not put buttons or links inside summary unless you know what you are doing"})]})]})]}),e.jsx("p",{className:"p",children:"This is perfect for FAQs, extra explanations, or hidden notes. It keeps the page clean and lets the user choose what to expand."})]}),e.jsxs("div",{className:"section",children:[e.jsx("h3",{className:"h3",children:"Key rules"}),e.jsxs("ul",{className:"bullets",children:[e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),e.jsx("span",{className:"mono",children:"summary"})," should be the first child of ",e.jsx("span",{className:"mono",children:"details"})]}),e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),"Use ",e.jsx("span",{className:"mono",children:"open"})," attribute to keep it expanded initially"]}),e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),"Keep summary text short and clear"]})]})]}),e.jsxs("div",{className:"section",children:[e.jsx("h3",{className:"h3",children:"Examples"}),e.jsx("div",{className:"examples",children:l.map((m,f)=>e.jsxs("div",{className:"example",children:[e.jsxs("div",{className:"exTop",children:[e.jsx("div",{className:"exTitle",children:m.title}),e.jsx("div",{className:"exDesc",children:m.desc})]}),e.jsxs("div",{className:"codeWrap","aria-label":"Example code",children:[e.jsxs("div",{className:"codeHead",children:[e.jsx("span",{className:"codeIcon",children:e.jsx(Me,{})}),e.jsx("span",{className:"codeLabel",children:"HTML"})]}),e.jsx("pre",{className:"code",children:e.jsx("code",{children:m.code})})]})]},f))})]}),e.jsxs("div",{className:"section",children:[e.jsx("h3",{className:"h3",children:"Quick tip"}),e.jsx("p",{className:"p",children:"If you need a true accordion where only one item can be open at a time, that usually requires JavaScript. But for most cases, multiple open items are totally fine and simpler."})]})]})]})},lg={Wrapper:Q.section`
        width: 100%;
        border: 1px solid var(--color-border);
        background: var(--color-surface);
        border-radius: 18px;
        box-shadow: 0 12px 30px var(--color-shadow);
        overflow: hidden;
        margin-bottom: 5px;

        .topicHeader {
            width: 100%;
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 14px;
            background: transparent;
            color: var(--color-text-primary);
            text-align: left;
        }

        .topicHeader:hover {
            background: var(--color-surface-2);
        }

        .chev {
            width: 28px;
            height: 28px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            border-radius: 10px;
            background: var(--color-bg);
            color: var(--color-text-secondary);
        }

        .icon {
            width: 36px;
            height: 36px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            color: var(--color-text-secondary);
        }

        .title {
            font-weight: 900;
            flex: 1;
        }

        .meta {
            font-size: 12px;
            color: var(--color-text-muted);
        }

        .topicBody {
            max-height: 0px;
            overflow: hidden;
            transition: max-height 260ms ease;
            border-top: 1px solid var(--color-border);
        }

        .topicBody.open {
            max-height: 3000px;
        }

        .section {
            padding: 14px;
        }

        .section + .section {
            border-top: 1px dashed var(--color-border-light);
        }

        .h3 {
            margin-bottom: 8px;
            font-size: 16px;
        }

        .p {
            margin: 0;
            color: var(--color-text-secondary);
            line-height: 1.7;
        }

        .bullets {
            list-style: none;
            padding-left: 0;
            margin-top: 10px;
            display: grid;
            gap: 8px;
        }

        .bullets li {
            display: flex;
            align-items: center;
            gap: 8px;
            color: var(--color-text-secondary);
            font-size: 14px;
        }

        .dot {
            width: 6px;
            height: 6px;
            border-radius: 999px;
            background: var(--color-text-primary);
        }

        .exampleBox {
            margin-top: 10px;
        }

        .openBtn,
        .closeBtn {
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            color: var(--color-text-primary);
            padding: 8px 14px;
            border-radius: 12px;
            cursor: pointer;
        }

        .openBtn:hover,
        .closeBtn:hover {
            background: var(--color-surface-2);
        }

        .dialogBox {
            border: 1px solid var(--color-border);
            border-radius: 16px;
            padding: 18px;
            background: var(--color-surface);
            color: var(--color-text-primary);
            margin-top: 50%;
            margin-left: 50%;
            transform: translateX(-50%) translateY(-50%);
        }

        .dialogBox::backdrop {
            background: rgba(0, 0, 0, 0.6);
        }

        .dialogTitle {
            margin-top: 0;
        }

        .dialogText {
            color: var(--color-text-secondary);
        }
    `},cg=()=>{const[a,c]=B.useState(!1),l=B.useRef(null),p=()=>{c(b=>!b)},m=()=>{l.current&&l.current.showModal()},f=()=>{l.current&&l.current.close()};return e.jsxs(lg.Wrapper,{className:a?"open":"",children:[e.jsxs("button",{type:"button",className:"topicHeader",onClick:p,"aria-expanded":a,children:[e.jsx("span",{className:"chev",children:a?e.jsx(ie,{}):e.jsx(le,{})}),e.jsx("span",{className:"icon",children:e.jsx(vu,{})}),e.jsx("span",{className:"title",children:"Dialog"}),e.jsx("span",{className:"meta",children:a?"Collapse":"Expand"})]}),e.jsxs("div",{className:`topicBody ${a?"open":""}`,children:[e.jsxs("div",{className:"section",children:[e.jsx("h3",{className:"h3",children:"What is the dialog element"}),e.jsx("p",{className:"p",children:"The dialog element is a built-in HTML element used to create modal or non-modal dialog boxes. It allows you to display popups without using external libraries. It is part of modern HTML and provides native browser behavior."})]}),e.jsxs("div",{className:"section",children:[e.jsx("h3",{className:"h3",children:"Modal behavior"}),e.jsx("p",{className:"p",children:"When a dialog is opened using showModal(), it becomes modal. This means the rest of the page becomes inactive until the dialog is closed. The browser also adds a backdrop automatically."}),e.jsxs("ul",{className:"bullets",children:[e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),"show() opens non modal dialog"]}),e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),"showModal() opens modal dialog"]}),e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),"close() closes the dialog"]})]})]}),e.jsxs("div",{className:"section",children:[e.jsx("h3",{className:"h3",children:"Example"}),e.jsxs("div",{className:"exampleBox",children:[e.jsx("button",{type:"button",className:"openBtn",onClick:m,children:"Open Dialog"}),e.jsxs("dialog",{ref:l,className:"dialogBox",children:[e.jsx("h4",{className:"dialogTitle",children:"Native HTML Dialog"}),e.jsx("p",{className:"dialogText",children:"This is a native modal created using the dialog element. No external library is used."}),e.jsx("button",{type:"button",className:"closeBtn",onClick:f,children:"Close"})]})]})]}),e.jsxs("div",{className:"section",children:[e.jsx("h3",{className:"h3",children:"Important Notes"}),e.jsx("p",{className:"p",children:"The dialog element is supported in modern browsers. For older browsers, a polyfill may be required. You can style the backdrop using the ::backdrop pseudo element in CSS."})]})]})]})},dg={Wrapper:Q.section`
        width: 100%;
        border: 1px solid var(--color-border);
        background: var(--color-surface);
        border-radius: 18px;
        box-shadow: 0 12px 30px var(--color-shadow);
        overflow: hidden;
        margin-bottom: 5px;

        .topicHeader {
            width: 100%;
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 14px;
            background: transparent;
            color: var(--color-text-primary);
            text-align: left;
        }

        .topicHeader:hover {
            background: var(--color-surface-2);
        }

        .chev {
            width: 28px;
            height: 28px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            border-radius: 10px;
            background: var(--color-bg);
            color: var(--color-text-secondary);
        }

        .icon {
            width: 36px;
            height: 36px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
        }

        .title {
            font-weight: 900;
            flex: 1;
        }

        .meta {
            font-size: 12px;
            color: var(--color-text-muted);
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 999px;
            padding: 6px 10px;
        }

        .topicBody {
            max-height: 0;
            overflow: hidden;
            transition: max-height 300ms ease;
            border-top: 1px solid var(--color-border);
        }

        .topicBody.open {
            max-height: 4000px;
        }

        .section {
            padding: 14px;
            border-bottom: 1px dashed var(--color-border-light);
        }

        .section h3 {
            margin-bottom: 6px;
        }

        .section p {
            color: var(--color-text-secondary);
            line-height: 1.7;
        }

        .example {
            padding: 14px;
        }

        table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 10px;
        }

        caption {
            text-align: left;
            margin-bottom: 6px;
            font-weight: 700;
        }

        th,
        td {
            border: 1px solid var(--color-border);
            padding: 8px;
            text-align: left;
        }

        thead {
            background: var(--color-surface-2);
        }

        tfoot {
            background: var(--color-surface-2);
            font-weight: 600;
        }
    `},pg=()=>{const[a,c]=B.useState(!1);return e.jsxs(dg.Wrapper,{children:[e.jsxs("button",{type:"button",className:"topicHeader",onClick:()=>c(!a),"aria-expanded":a,children:[e.jsx("span",{className:"chev",children:a?e.jsx(ie,{}):e.jsx(le,{})}),e.jsx("span",{className:"icon",children:e.jsx(hf,{})}),e.jsx("span",{className:"title",children:"Table Structure"}),e.jsx("span",{className:"meta",children:a?"Collapse":"Expand"})]}),e.jsxs("div",{className:`topicBody ${a?"open":""}`,children:[e.jsxs("div",{className:"section",children:[e.jsx("h3",{children:"table"}),e.jsx("p",{children:"The table element is the container for all tabular data. It defines the start and end of a table."})]}),e.jsxs("div",{className:"section",children:[e.jsx("h3",{children:"thead, tbody, tfoot"}),e.jsx("p",{children:"thead contains header rows. tbody contains the main data rows. tfoot contains summary rows like totals. These help structure large tables clearly."})]}),e.jsxs("div",{className:"section",children:[e.jsx("h3",{children:"tr, th, td"}),e.jsx("p",{children:"tr defines a table row. th defines a header cell. td defines a data cell. Header cells usually describe columns or rows."})]}),e.jsxs("div",{className:"section",children:[e.jsx("h3",{children:"scope attribute"}),e.jsx("p",{children:'The scope attribute improves accessibility by defining whether a header applies to a column or a row. Example: scope="col" or scope="row".'})]}),e.jsxs("div",{className:"section",children:[e.jsx("h3",{children:"caption"}),e.jsx("p",{children:"caption gives a title to the table. It appears above the table and helps screen readers understand what the table represents."})]}),e.jsxs("div",{className:"section",children:[e.jsx("h3",{children:"colgroup and col"}),e.jsx("p",{children:"colgroup and col allow you to style entire columns instead of individual cells."})]}),e.jsxs("div",{className:"section",children:[e.jsx("h3",{children:"rowspan and colspan"}),e.jsx("p",{children:"rowspan merges cells vertically. colspan merges cells horizontally. These are useful for complex table layouts."})]}),e.jsxs("div",{className:"section",children:[e.jsx("h3",{children:"Accessible Tables"}),e.jsx("p",{children:"Always use th for headers, use scope properly, add a caption, and avoid using tables for layout. Tables should represent real tabular data only."})]}),e.jsxs("div",{className:"example",children:[e.jsx("h4",{children:"Example Table"}),e.jsxs("table",{children:[e.jsx("caption",{children:"Student Scores"}),e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{scope:"col",children:"Name"}),e.jsx("th",{scope:"col",children:"Math"}),e.jsx("th",{scope:"col",children:"Science"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("th",{scope:"row",children:"Amit"}),e.jsx("td",{children:"85"}),e.jsx("td",{children:"90"})]}),e.jsxs("tr",{children:[e.jsx("th",{scope:"row",children:"Riya"}),e.jsx("td",{children:"88"}),e.jsx("td",{children:"92"})]})]}),e.jsx("tfoot",{children:e.jsx("tr",{children:e.jsx("td",{colSpan:"3",children:"End of Results"})})})]})]})]})]})},ug={Wrapper:Q.section`
        margin-bottom: 5px; /* as requested */

        border: 1px solid var(--color-border);
        background: var(--color-surface);
        border-radius: 16px;
        overflow: hidden;
        box-shadow: 0 10px 25px var(--color-shadow);

        .topicHeader {
            width: 100%;
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 14px;
            background: transparent;
            color: var(--color-text-primary);
            text-align: left;
        }

        .topicHeader:hover {
            background: var(--color-surface-2);
        }

        .chev {
            width: 28px;
            height: 28px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            border-radius: 8px;
            background: var(--color-bg);
            color: var(--color-text-secondary);
        }

        .icon {
            width: 34px;
            height: 34px;
            border-radius: 10px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            color: var(--color-text-secondary);
        }

        .title {
            font-weight: 900;
            flex: 1;
        }

        .meta {
            font-size: 12px;
            color: var(--color-text-muted);
        }

        .topicBody {
            max-height: 0;
            overflow: hidden;
            transition: max-height 300ms ease;
            border-top: 1px solid var(--color-border);
        }

        .topicBody.open {
            max-height: 5000px;
        }

        .section {
            padding: 16px;
        }

        .section + .section {
            border-top: 1px dashed var(--color-border-light);
        }

        h3 {
            margin-bottom: 8px;
            font-size: 15px;
        }

        p {
            color: var(--color-text-secondary);
            line-height: 1.6;
            margin-bottom: 10px;
        }

        .note {
            font-size: 13px;
            color: var(--color-text-muted);
        }

        .codeBlock {
            background: var(--color-bg);
            border: 1px solid var(--color-border);
            border-radius: 10px;
            padding: 12px;
            font-family: monospace;
            font-size: 13px;
            white-space: pre-wrap;
            color: var(--color-text-primary);
            margin-bottom: 12px;
        }

        .compare {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
            gap: 14px;
            margin-top: 10px;
        }

        .card {
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 12px;
            padding: 12px;
        }

        .cardTitle {
            font-weight: 900;
            margin-bottom: 8px;
        }

        ul {
            padding-left: 18px;
            color: var(--color-text-secondary);
        }

        .bullets {
            list-style: disc;
            padding-left: 20px;
        }
    `},hg=()=>{const[a,c]=B.useState(!1),l=()=>c(p=>!p);return e.jsxs(ug.Wrapper,{className:`topicCard ${a?"open":""}`,children:[e.jsxs("button",{type:"button",className:"topicHeader",onClick:l,"aria-expanded":a,children:[e.jsx("span",{className:"chev",children:a?e.jsx(ie,{}):e.jsx(le,{})}),e.jsx("span",{className:"icon",children:e.jsx(ms,{})}),e.jsx("span",{className:"title",children:"Form Basics"}),e.jsx("span",{className:"meta",children:"form · action · method · GET vs POST · enctype"})]}),e.jsxs("div",{className:`topicBody ${a?"open":""}`,children:[e.jsxs("div",{className:"section",children:[e.jsx("h3",{children:"1. form element"}),e.jsxs("p",{children:["The ",e.jsx("strong",{children:"form"})," element is used to collect user input and send it to a server. Everything related to user input must be placed inside a form."]}),e.jsx("div",{className:"codeBlock",children:`<form>
    <!-- inputs go here -->
</form>`})]}),e.jsxs("div",{className:"section",children:[e.jsx("h3",{children:"2. action attribute"}),e.jsxs("p",{children:["The ",e.jsx("strong",{children:"action"})," attribute defines where the form data will be sent. It is usually a server endpoint or URL."]}),e.jsx("div",{className:"codeBlock",children:`<form action="/submit-data">
    ...
</form>`}),e.jsx("p",{className:"note",children:"If action is not provided, the form submits to the same page."})]}),e.jsxs("div",{className:"section",children:[e.jsx("h3",{children:"3. method attribute"}),e.jsxs("p",{children:["The ",e.jsx("strong",{children:"method"})," attribute defines how data is sent. The two most common values are GET and POST."]}),e.jsx("div",{className:"codeBlock",children:`<form action="/submit" method="POST">
    ...
</form>`})]}),e.jsxs("div",{className:"section",children:[e.jsx("h3",{children:"4. GET vs POST"}),e.jsxs("div",{className:"compare",children:[e.jsxs("div",{className:"card",children:[e.jsx("div",{className:"cardTitle",children:"GET"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Data is sent in URL"}),e.jsx("li",{children:"Visible in browser address bar"}),e.jsx("li",{children:"Used for fetching data"}),e.jsx("li",{children:"Length limit exists"})]})]}),e.jsxs("div",{className:"card",children:[e.jsx("div",{className:"cardTitle",children:"POST"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Data is sent in request body"}),e.jsx("li",{children:"Not visible in URL"}),e.jsx("li",{children:"Used for creating or updating data"}),e.jsx("li",{children:"No practical size limit"})]})]})]})]}),e.jsxs("div",{className:"section",children:[e.jsx("h3",{children:"5. enctype attribute"}),e.jsxs("p",{children:["The ",e.jsx("strong",{children:"enctype"})," attribute defines how form data should be encoded when sent to the server."]}),e.jsx("div",{className:"codeBlock",children:`<form action="/upload" method="POST" enctype="multipart/form-data">
    <input type="file" />
</form>`}),e.jsxs("ul",{className:"bullets",children:[e.jsx("li",{children:"application/x-www-form-urlencoded (default)"}),e.jsx("li",{children:"multipart/form-data (for file upload)"}),e.jsx("li",{children:"text/plain (rarely used)"})]})]}),e.jsxs("div",{className:"section example",children:[e.jsx("h3",{children:"Complete Example"}),e.jsx("div",{className:"codeBlock",children:`<form action="/register" method="POST">
    <label>
        Name:
        <input type="text" name="name" />
    </label>

    <label>
        Email:
        <input type="email" name="email" />
    </label>

    <button type="submit">Submit</button>
</form>`}),e.jsx("p",{className:"note",children:"When submitted, the browser collects input values and sends them to the server using the defined method."})]})]})]})},xg={Wrapper:Q.section`
        width: 100%;
        margin-bottom: 5px;

        border: 1px solid var(--color-border);
        background: var(--color-surface);
        border-radius: 18px;
        box-shadow: 0 12px 30px var(--color-shadow);
        overflow: hidden;

        .topicHeader {
            width: 100%;
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 14px 14px;
            background: transparent;
            color: var(--color-text-primary);
            text-align: left;
        }

        .topicHeader:hover {
            background: var(--color-surface-2);
        }

        .chev {
            width: 28px;
            height: 28px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            border-radius: 10px;
            background: var(--color-bg);
            color: var(--color-text-secondary);
            flex: 0 0 auto;
        }

        .icon {
            width: 36px;
            height: 36px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            color: var(--color-text-secondary);
            font-size: 18px;
            flex: 0 0 auto;
        }

        .title {
            font-weight: 900;
            letter-spacing: 0.2px;
            flex: 1;
        }

        .meta {
            font-size: 12px;
            color: var(--color-text-muted);
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 999px;
            padding: 7px 10px;
            white-space: nowrap;
            flex: 0 0 auto;
        }

        .topicBody {
            max-height: 0px;
            overflow: hidden;
            transition: max-height 260ms ease;
            border-top: 1px solid var(--color-border);
        }

        .topicBody.open {
            max-height: 12000px;
        }

        .intro {
            padding: 14px 14px 4px 14px;
        }

        .p {
            margin: 0 0 10px 0;
            color: var(--color-text-secondary);
            line-height: 1.7;
        }

        .list {
            padding: 10px 14px 14px 14px;
            display: grid;
            gap: 12px;
        }

        .item {
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 16px;
            padding: 14px;
        }

        .itemTop {
            display: flex;
            align-items: flex-start;
            gap: 12px;
        }

        .itemIcon {
            width: 36px;
            height: 36px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: var(--color-surface);
            color: var(--color-text-secondary);
            flex: 0 0 auto;
        }

        .itemTitle {
            font-weight: 900;
            letter-spacing: 0.15px;
            margin-bottom: 4px;
            color: var(--color-text-primary);
        }

        .mono {
            font-family:
                ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                "Liberation Mono", "Courier New", monospace;
            font-size: 14px;
        }

        .itemUse {
            color: var(--color-text-secondary);
            line-height: 1.6;
            font-size: 14px;
        }

        .example {
            margin-top: 12px;
            border-top: 1px dashed var(--color-border-light);
            padding-top: 12px;
        }

        .exampleLabel {
            font-size: 12px;
            color: var(--color-text-muted);
            margin-bottom: 8px;
            font-weight: 800;
            letter-spacing: 0.2px;
        }

        .code {
            margin: 0;
            padding: 12px;
            border-radius: 14px;
            border: 1px solid var(--color-border);
            background: var(--color-surface);
            overflow-x: auto;
            color: var(--color-text-secondary);
            font-size: 13px;
            line-height: 1.6;
        }

        .notes {
            margin-top: 12px;
            list-style: none;
            padding-left: 0;
            display: grid;
            gap: 10px;
        }

        .notes li {
            display: flex;
            align-items: flex-start;
            gap: 10px;
            color: var(--color-text-secondary);
            font-size: 13px;
            line-height: 1.6;
        }

        .dot {
            width: 8px;
            height: 8px;
            border-radius: 999px;
            background: var(--color-text-primary);
            margin-top: 6px;
            flex: 0 0 auto;
        }

        .tip {
            margin: 0 14px 14px 14px;
            border: 1px solid var(--color-border);
            background: var(--color-surface-2);
            border-radius: 16px;
            padding: 14px;
        }

        .tipTitle {
            font-weight: 900;
            margin-bottom: 6px;
            letter-spacing: 0.15px;
        }

        .tipText {
            color: var(--color-text-secondary);
            line-height: 1.7;
            font-size: 14px;
        }
    `},mg=()=>{const[a,c]=B.useState(!1),l=B.useMemo(()=>[{name:"text",icon:e.jsx(ms,{}),use:"Single-line plain text input for names, titles, etc.",example:'<input type="text" name="fullName" placeholder="Full name" />',notes:["Default input type if you write <input> without type.","Use minlength and maxlength for length rules."]},{name:"password",icon:e.jsx(qm,{}),use:"Hides typed characters for passwords and secrets.",example:'<input type="password" name="password" placeholder="Password" />',notes:["Use autocomplete when appropriate like current-password or new-password.","Still treat as sensitive, never log it in console."]},{name:"email",icon:e.jsx(gu,{}),use:"Email address input with built-in validation.",example:'<input type="email" name="email" placeholder="name@example.com" />',notes:["Browser checks basic email format.","Use multiple attribute if you want multiple emails."]},{name:"url",icon:e.jsx(fu,{}),use:"Website link input with URL validation.",example:'<input type="url" name="website" placeholder="https://example.com" />',notes:["Browser validates URL format.","Keep placeholder realistic for users."]},{name:"number",icon:e.jsx(uo,{}),use:"Numeric input with stepper controls.",example:'<input type="number" name="age" min="0" max="120" step="1" />',notes:["Use min, max, step to control allowed values.","For phone numbers use tel, not number."]},{name:"range",icon:e.jsx(df,{}),use:"Slider input for selecting a value in a range.",example:'<input type="range" name="volume" min="0" max="100" step="1" />',notes:["Pair with an output element to show current value.","Good for settings like brightness, volume."]},{name:"search",icon:e.jsx(ju,{}),use:"Search field, may show clear button in some browsers.",example:'<input type="search" name="q" placeholder="Search..." />',notes:["Semantically indicates search intent.","Works like text but with search UX in some browsers."]},{name:"tel",icon:e.jsx(tf,{}),use:"Telephone input, opens numeric keypad on mobile.",example:'<input type="tel" name="phone" placeholder="+91 98765 43210" />',notes:["No built-in validation by default, use pattern if needed.","Best for phone numbers, not number type."]},{name:"date",icon:e.jsx(Yi,{}),use:"Date picker for selecting a calendar date.",example:'<input type="date" name="dob" />',notes:["Use min and max to limit dates.","UI differs across browsers."]},{name:"time",icon:e.jsx(Pp,{}),use:"Time picker for selecting time of day.",example:'<input type="time" name="meetingTime" />',notes:["Use step to control seconds if needed.","Great for schedules and reminders."]},{name:"datetime-local",icon:e.jsx(Pp,{}),use:"Date and time without timezone conversion.",example:'<input type="datetime-local" name="appointment" />',notes:["Stores local date time string, not timezone aware.","Use when user picks a local moment like a meeting time."]},{name:"month",icon:e.jsx(Yi,{}),use:"Month picker, useful for billing cycles.",example:'<input type="month" name="billingMonth" />',notes:["Lets users choose year and month.","Good for reports and subscriptions."]},{name:"week",icon:e.jsx(Yi,{}),use:"Week picker, useful for weekly planning.",example:'<input type="week" name="workWeek" />',notes:["Returns ISO week format.","UI support depends on browser."]},{name:"color",icon:e.jsx($m,{}),use:"Color picker, returns hex color value.",example:'<input type="color" name="themeColor" value="#000000" />',notes:["Great for theme settings.","Default value should be a valid hex."]},{name:"file",icon:e.jsx(mf,{}),use:"File upload input for selecting files from device.",example:'<input type="file" name="resume" accept=".pdf,.doc,.docx" />',notes:["Use accept to hint file types.","Use multiple if you want multiple files."]},{name:"checkbox",icon:e.jsx(hu,{}),use:"Toggle true or false, can be multiple selections.",example:'<input type="checkbox" name="agree" />',notes:["Use with label for clickable text.","For groups, use same name with different values."]},{name:"radio",icon:e.jsx(Um,{}),use:"Single choice within a group.",example:'<input type="radio" name="plan" value="pro" />',notes:["Radio works in groups using the same name.","Use checked for default selection if needed."]},{name:"hidden",icon:e.jsx(Vm,{}),use:"Hidden field for sending extra values with the form.",example:'<input type="hidden" name="source" value="landing-page" />',notes:["Not visible to user.","Do not trust hidden values for security decisions."]},{name:"submit",icon:e.jsx(nf,{}),use:"Submits the form.",example:'<input type="submit" value="Submit" />',notes:["Triggers form submit event.","button type=submit is often more flexible for styling."]},{name:"reset",icon:e.jsx(of,{}),use:"Resets form values back to initial defaults.",example:'<input type="reset" value="Reset" />',notes:["Can surprise users, use carefully.","Often better to provide a custom clear button."]},{name:"button",icon:e.jsx(pf,{}),use:"Neutral button, does not submit unless you code it.",example:'<input type="button" value="Click me" />',notes:["Does nothing by default, you attach behavior with JS.","Prefer <button type='button'> for richer content."]}],[]);return e.jsxs(xg.Wrapper,{className:a?"open":"",children:[e.jsxs("button",{type:"button",className:"topicHeader",onClick:()=>c(p=>!p),"aria-expanded":a,children:[e.jsx("span",{className:"chev",children:a?e.jsx(ie,{}):e.jsx(le,{})}),e.jsx("span",{className:"icon",children:e.jsx(ms,{})}),e.jsx("span",{className:"title",children:"Input Types"}),e.jsx("span",{className:"meta",children:a?"Collapse":"Expand"})]}),e.jsxs("div",{className:`topicBody ${a?"open":""}`,children:[e.jsxs("div",{className:"intro",children:[e.jsx("p",{className:"p",children:"HTML inputs have different types to collect different kinds of data. Choosing the correct input type improves validation, mobile keyboard behavior, and accessibility."}),e.jsx("p",{className:"p",children:"Below is a beginner friendly list of common input types with what they are used for and simple examples."})]}),e.jsx("div",{className:"list",children:l.map(p=>e.jsxs("div",{className:"item",children:[e.jsxs("div",{className:"itemTop",children:[e.jsx("span",{className:"itemIcon",children:p.icon}),e.jsxs("div",{className:"itemHead",children:[e.jsx("div",{className:"itemTitle",children:e.jsx("span",{className:"mono",children:p.name})}),e.jsx("div",{className:"itemUse",children:p.use})]})]}),e.jsxs("div",{className:"example",children:[e.jsx("div",{className:"exampleLabel",children:"Example"}),e.jsx("pre",{className:"code",children:e.jsx("code",{children:p.example})})]}),e.jsx("ul",{className:"notes",children:p.notes.map((m,f)=>e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),m]},`${p.name}-n-${f}`))})]},p.name))}),e.jsxs("div",{className:"tip",children:[e.jsx("div",{className:"tipTitle",children:"Quick tip"}),e.jsx("div",{className:"tipText",children:"Always pair inputs with a label. It improves usability and makes forms accessible for keyboard and screen readers."})]})]})]})},fg={Wrapper:Q.section`
        width: 100%;
        border: 1px solid var(--color-border);
        background: var(--color-surface);
        border-radius: 16px;
        box-shadow: 0 10px 25px var(--color-shadow);
        overflow: hidden;
        margin-bottom: 5px;

        .topicHeader {
            width: 100%;
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 12px 14px;
            background: transparent;
            color: var(--color-text-primary);
            text-align: left;
        }

        .topicHeader:hover {
            background: var(--color-surface-2);
        }

        .chev {
            width: 26px;
            height: 26px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            border-radius: 8px;
            background: var(--color-bg);
        }

        .icon {
            width: 34px;
            height: 34px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            border-radius: 10px;
            background: var(--color-bg);
        }

        .title {
            font-weight: 900;
            flex: 1;
        }

        .meta {
            font-size: 12px;
            color: var(--color-text-muted);
        }

        .topicBody {
            max-height: 0;
            overflow: hidden;
            transition: max-height 300ms ease;
            border-top: 1px solid var(--color-border);
        }

        .topicBody.open {
            max-height: 5000px;
        }

        .section {
            padding: 14px;
            border-top: 1px dashed var(--color-border-light);
        }

        .section:first-child {
            border-top: none;
        }

        h3 {
            margin-bottom: 6px;
        }

        p {
            color: var(--color-text-secondary);
            margin-bottom: 8px;
        }

        .example {
            margin-top: 8px;
            display: flex;
            flex-direction: column;
            gap: 8px;
        }

        fieldset {
            border: 1px solid var(--color-border);
            padding: 8px;
            border-radius: 8px;
        }

        legend {
            padding: 0 6px;
        }
    `},gg=()=>{const[a,c]=B.useState(!1);return e.jsxs(fg.Wrapper,{className:`topicCard ${a?"open":""}`,children:[e.jsxs("button",{type:"button",className:"topicHeader",onClick:()=>c(l=>!l),"aria-expanded":a,children:[e.jsx("span",{className:"chev",children:a?e.jsx(ie,{}):e.jsx(le,{})}),e.jsx("span",{className:"icon",children:e.jsx(ms,{})}),e.jsx("span",{className:"title",children:"Form Controls"}),e.jsx("span",{className:"meta",children:a?"Collapse":"Expand"})]}),e.jsxs("div",{className:`topicBody ${a?"open":""}`,children:[e.jsxs("div",{className:"section",children:[e.jsx("h3",{children:"label"}),e.jsx("p",{children:"The label element connects text to an input field. Clicking the label focuses the input automatically. This improves usability and accessibility."}),e.jsxs("div",{className:"example",children:[e.jsx("label",{htmlFor:"name",children:"Name:"}),e.jsx("input",{id:"name",type:"text",placeholder:"Enter name"})]})]}),e.jsxs("div",{className:"section",children:[e.jsx("h3",{children:"fieldset and legend"}),e.jsx("p",{children:"Fieldset groups related form controls together. Legend gives a title to that group. This is very useful for accessibility."}),e.jsx("div",{className:"example",children:e.jsxs("fieldset",{children:[e.jsx("legend",{children:"Gender"}),e.jsxs("label",{children:[e.jsx("input",{type:"radio",name:"gender"})," Male"]}),e.jsxs("label",{children:[e.jsx("input",{type:"radio",name:"gender"})," Female"]})]})})]}),e.jsxs("div",{className:"section",children:[e.jsx("h3",{children:"textarea"}),e.jsx("p",{children:"Textarea is used for multi-line text input. Unlike input type text, it supports multiple lines."}),e.jsx("div",{className:"example",children:e.jsx("textarea",{placeholder:"Write your message..."})})]}),e.jsxs("div",{className:"section",children:[e.jsx("h3",{children:"select, option, optgroup"}),e.jsx("p",{children:"Select creates a dropdown. Option defines choices. Optgroup groups related options together."}),e.jsx("div",{className:"example",children:e.jsxs("select",{children:[e.jsxs("optgroup",{label:"Frontend",children:[e.jsx("option",{children:"HTML"}),e.jsx("option",{children:"CSS"})]}),e.jsxs("optgroup",{label:"Backend",children:[e.jsx("option",{children:"Node"}),e.jsx("option",{children:"PHP"})]})]})})]}),e.jsxs("div",{className:"section",children:[e.jsx("h3",{children:"datalist"}),e.jsx("p",{children:"Datalist provides suggestion options for an input. It allows users to either type freely or choose from suggestions."}),e.jsxs("div",{className:"example",children:[e.jsx("input",{list:"browsers",placeholder:"Choose browser"}),e.jsxs("datalist",{id:"browsers",children:[e.jsx("option",{value:"Chrome"}),e.jsx("option",{value:"Firefox"}),e.jsx("option",{value:"Edge"})]})]})]}),e.jsxs("div",{className:"section",children:[e.jsx("h3",{children:"output"}),e.jsx("p",{children:"Output displays calculation results. Often used with JavaScript to show dynamic values."}),e.jsx("div",{className:"example",children:e.jsx("output",{children:"Result will appear here"})})]}),e.jsxs("div",{className:"section",children:[e.jsx("h3",{children:"progress"}),e.jsx("p",{children:"Progress shows task completion progress. Useful for file uploads or loading states."}),e.jsx("div",{className:"example",children:e.jsx("progress",{value:"60",max:"100"})})]}),e.jsxs("div",{className:"section",children:[e.jsx("h3",{children:"meter"}),e.jsx("p",{children:"Meter represents a value within a known range. Example: battery level, disk usage, score rating."}),e.jsx("div",{className:"example",children:e.jsx("meter",{value:"0.7",children:"70%"})})]})]})]})},vg={Wrapper:Q.section`
        width: 100%;
        margin-bottom: 5px;

        border: 1px solid var(--color-border);
        background: var(--color-surface);
        border-radius: 18px;
        box-shadow: 0 12px 30px var(--color-shadow);
        overflow: hidden;

        .topicHeader {
            width: 100%;
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 14px;
            background: transparent;
            color: var(--color-text-primary);
            text-align: left;
        }

        .topicHeader:hover {
            background: var(--color-surface-2);
        }

        .chev {
            width: 28px;
            height: 28px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            border-radius: 10px;
            background: var(--color-bg);
            color: var(--color-text-secondary);
            flex: 0 0 auto;
        }

        .icon {
            width: 36px;
            height: 36px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            color: var(--color-text-secondary);
            font-size: 18px;
            flex: 0 0 auto;
        }

        .title {
            font-weight: 900;
            letter-spacing: 0.2px;
            flex: 1;
        }

        .meta {
            font-size: 12px;
            color: var(--color-text-muted);
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 999px;
            padding: 7px 10px;
            white-space: nowrap;
            flex: 0 0 auto;
        }

        .topicBody {
            max-height: 0px;
            overflow: hidden;
            transition: max-height 260ms ease;
            border-top: 1px solid var(--color-border);
        }

        .topicBody.open {
            max-height: 9000px;
        }

        .section {
            padding: 14px;
        }

        .section + .section {
            border-top: 1px dashed var(--color-border-light);
        }

        .h3 {
            font-size: 16px;
            margin-bottom: 8px;
        }

        .p {
            margin: 0;
            color: var(--color-text-secondary);
            line-height: 1.7;
        }

        .note {
            margin-top: 12px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 14px;
            padding: 12px;
            display: flex;
            gap: 10px;
            align-items: flex-start;
        }

        .noteIcon {
            width: 34px;
            height: 34px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: var(--color-surface);
            color: var(--color-text-secondary);
            flex: 0 0 auto;
        }

        .noteText {
            color: var(--color-text-secondary);
            line-height: 1.6;
            font-size: 14px;
        }

        .ruleGrid {
            margin-top: 12px;
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 10px;
        }

        .ruleCard {
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 14px;
            padding: 12px;
        }

        .ruleTop {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 10px;
            margin-bottom: 8px;
        }

        .ruleName {
            font-weight: 900;
            letter-spacing: 0.2px;
        }

        .ruleTag {
            font-size: 12px;
            color: var(--color-text-muted);
            border: 1px solid var(--color-border);
            background: var(--color-surface);
            border-radius: 999px;
            padding: 6px 10px;
            white-space: nowrap;
        }

        .ruleDesc {
            color: var(--color-text-secondary);
            line-height: 1.6;
            font-size: 14px;
        }

        .codeRow {
            margin-top: 10px;
            display: flex;
            gap: 10px;
            align-items: center;
            border: 1px solid var(--color-border);
            background: var(--color-surface);
            border-radius: 12px;
            padding: 10px 10px;
            overflow: hidden;
        }

        .codeIcon {
            width: 28px;
            height: 28px;
            border-radius: 10px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            color: var(--color-text-secondary);
            flex: 0 0 auto;
        }

        .code {
            color: var(--color-text-primary);
            font-size: 12px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .demoForm {
            margin-top: 12px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 16px;
            padding: 14px;
        }

        .row {
            display: flex;
            flex-direction: column;
            gap: 8px;
        }

        .row + .row {
            margin-top: 12px;
        }

        .twoCol {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 12px;
            margin-top: 12px;
        }

        .label {
            font-weight: 900;
            color: var(--color-text-primary);
            letter-spacing: 0.15px;
        }

        .req {
            color: var(--color-text-secondary);
        }

        .hint {
            font-size: 12px;
            color: var(--color-text-muted);
        }

        .inlineWarn {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            font-size: 13px;
            color: var(--color-text-secondary);
            border: 1px solid var(--color-border);
            background: var(--color-surface);
            border-radius: 12px;
            padding: 10px 10px;
        }

        .pill {
            margin-top: 10px;
            display: inline-flex;
            align-items: center;
            gap: 8px;
            border: 1px solid var(--color-border);
            background: var(--color-surface);
            border-radius: 999px;
            padding: 8px 12px;
            font-size: 13px;
            color: var(--color-text-secondary);
        }

        .actions {
            margin-top: 14px;
            display: flex;
            gap: 10px;
            flex-wrap: wrap;
        }

        .btn {
            border: 1px solid var(--color-border);
            background: var(--color-surface);
            color: var(--color-text-primary);
            padding: 10px 12px;
            border-radius: 12px;
            font-weight: 900;
            letter-spacing: 0.2px;
        }

        .btn:hover {
            background: var(--color-surface-2);
        }

        .btn.primary {
            background: var(--color-text-primary);
            color: var(--color-bg);
            border-color: var(--color-text-primary);
        }

        .btn.primary:hover {
            opacity: 0.92;
        }

        .submitMsg {
            margin-top: 12px;
            border: 1px solid var(--color-border);
            background: var(--color-surface);
            border-radius: 14px;
            padding: 12px;
            color: var(--color-text-secondary);
            line-height: 1.6;
        }

        .bullets {
            list-style: none;
            margin-top: 12px;
            display: grid;
            gap: 10px;
            padding-left: 0;
        }

        .bullets li {
            display: flex;
            align-items: flex-start;
            gap: 10px;
            color: var(--color-text-secondary);
            font-size: 14px;
            line-height: 1.6;
        }

        .dot {
            width: 8px;
            height: 8px;
            border-radius: 999px;
            background: var(--color-text-primary);
            flex: 0 0 auto;
            margin-top: 7px;
        }

        .bulletText {
            flex: 1;
        }

        .inlineCode {
            display: inline-block;
            padding: 2px 8px;
            border-radius: 999px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            color: var(--color-text-primary);
            font-size: 12px;
            margin: 0 4px;
            white-space: nowrap;
        }

        .miniCode {
            margin-top: 12px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 16px;
            overflow: hidden;
        }

        .miniCodeTop {
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 12px 12px;
            border-bottom: 1px solid var(--color-border);
            background: var(--color-surface);
            color: var(--color-text-secondary);
            font-weight: 900;
        }

        .miniCodeIcon {
            width: 30px;
            height: 30px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            color: var(--color-text-secondary);
            flex: 0 0 auto;
        }

        .pre {
            margin: 0;
            padding: 12px;
            overflow-x: auto;
            color: var(--color-text-secondary);
            font-size: 13px;
            line-height: 1.6;
            font-family:
                ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                "Liberation Mono", "Courier New", monospace;
        }

        @media (max-width: 820px) {
            .ruleGrid {
                grid-template-columns: 1fr;
            }

            .twoCol {
                grid-template-columns: 1fr;
            }
        }
    `},yg=()=>{const[a,c]=B.useState(!1),[l,p]=B.useState({fullName:"",email:"",age:"",pin:"",price:"50",website:""}),[m,f]=B.useState({}),[b,L]=B.useState(""),[T,F]=B.useState(""),W=()=>c($=>!$),O=B.useMemo(()=>[{title:"required",desc:"Makes a field mandatory. Browser shows an error if empty.",ex:"<input required />"},{title:"pattern",desc:"Validates with a regex pattern. Useful for PIN, username rules, etc.",ex:'<input pattern="^[0-9]{6}$" />'},{title:"minLength",desc:"Minimum number of characters for text inputs.",ex:'<input minLength="3" />'},{title:"maxLength",desc:"Maximum number of characters for text inputs.",ex:'<input maxLength="20" />'},{title:"min",desc:"Minimum value for number/date/range inputs.",ex:'<input type="number" min="18" />'},{title:"max",desc:"Maximum value for number/date/range inputs.",ex:'<input type="number" max="60" />'},{title:"step",desc:"Allowed step increments for number/range inputs. Example: step 0.5 or step 10.",ex:'<input type="number" step="0.5" />'},{title:"Constraint Validation API",desc:"Browser validation API to check and show errors programmatically (checkValidity, reportValidity, setCustomValidity).",ex:"form.checkValidity()"},{title:"Custom validation",desc:"Your own logic on top of browser constraints. Example: confirm password, business rules.",ex:'setCustomValidity("Message")'}],[]),P=$=>{const{name:ne,value:ee}=$.target;if(p(J=>({...J,[ne]:ee})),F(""),ne==="website"){const J=ee.trim();if(!J){L("");return}const re=J.startsWith("https://")||J.startsWith("http://");L(re?"":"URL must start with https:// or http://")}},U=$=>{const{name:ne}=$.target;f(ee=>({...ee,[ne]:!0}))},ae=$=>{$.preventDefault();const ne=$.currentTarget,ee=ne.querySelector('input[name="website"]');if(ee&&ee.setCustomValidity(b||""),!ne.checkValidity()){ne.reportValidity(),F("Fix the highlighted fields and try again.");return}F("Looks good. Form passed browser validation.")},K=()=>{p({fullName:"",email:"",age:"",pin:"",price:"50",website:""}),f({}),L(""),F("")};return e.jsxs(vg.Wrapper,{className:`topicCard ${a?"open":""}`,children:[e.jsxs("button",{type:"button",className:"topicHeader",onClick:W,"aria-expanded":a,children:[e.jsx("span",{className:"chev",children:a?e.jsx(ie,{}):e.jsx(le,{})}),e.jsx("span",{className:"icon",children:e.jsx(ms,{})}),e.jsx("span",{className:"title",children:"Validation"}),e.jsx("span",{className:"meta",children:a?"Collapse":"Expand"})]}),e.jsxs("div",{className:`topicBody ${a?"open":""}`,children:[e.jsxs("div",{className:"section",children:[e.jsx("h3",{className:"h3",children:"What is form validation"}),e.jsx("p",{className:"p",children:"Validation means checking user input before you accept it. HTML gives you built-in validation rules that work without JavaScript. The browser can block submission and show a message when a field is invalid."}),e.jsxs("div",{className:"note",children:[e.jsx("span",{className:"noteIcon",children:e.jsx(He,{})}),e.jsx("div",{className:"noteText",children:"Use HTML validation for common rules. Use custom validation only for business logic that HTML cannot express."})]})]}),e.jsxs("div",{className:"section",children:[e.jsx("h3",{className:"h3",children:"Core validation attributes"}),e.jsx("div",{className:"ruleGrid",children:O.map($=>e.jsxs("div",{className:"ruleCard",children:[e.jsxs("div",{className:"ruleTop",children:[e.jsx("div",{className:"ruleName",children:$.title}),e.jsx("div",{className:"ruleTag",children:"Core"})]}),e.jsx("div",{className:"ruleDesc",children:$.desc}),e.jsxs("div",{className:"codeRow",children:[e.jsx("span",{className:"codeIcon",children:e.jsx(Me,{})}),e.jsx("code",{className:"code",children:$.ex})]})]},$.title))})]}),e.jsxs("div",{className:"section",children:[e.jsx("h3",{className:"h3",children:"Beginner demo"}),e.jsx("p",{className:"p",children:'Try submitting with empty fields or wrong values. The browser will show built-in validation messages. The "Website" field also shows a custom validation message using setCustomValidity.'}),e.jsxs("form",{className:"demoForm",onSubmit:ae,onReset:K,children:[e.jsxs("div",{className:"row",children:[e.jsxs("label",{className:"label",htmlFor:"fullName",children:["Full name ",e.jsx("span",{className:"req",children:"*"})]}),e.jsx("input",{id:"fullName",name:"fullName",type:"text",value:l.fullName,onChange:P,onBlur:U,required:!0,minLength:3,maxLength:30,placeholder:"Example: Ashish Ranjan"}),e.jsx("div",{className:"hint",children:"required + minLength 3 + maxLength 30"}),m.fullName&&l.fullName&&l.fullName.length<3&&e.jsxs("div",{className:"inlineWarn",children:[e.jsx(Je,{})," Minimum 3 characters"]})]}),e.jsxs("div",{className:"row",children:[e.jsxs("label",{className:"label",htmlFor:"email",children:["Email ",e.jsx("span",{className:"req",children:"*"})]}),e.jsx("input",{id:"email",name:"email",type:"email",value:l.email,onChange:P,onBlur:U,required:!0,placeholder:"example@mail.com"}),e.jsx("div",{className:"hint",children:"required + type email"})]}),e.jsxs("div",{className:"twoCol",children:[e.jsxs("div",{className:"row",children:[e.jsxs("label",{className:"label",htmlFor:"age",children:["Age ",e.jsx("span",{className:"req",children:"*"})]}),e.jsx("input",{id:"age",name:"age",type:"number",value:l.age,onChange:P,onBlur:U,required:!0,min:18,max:60,step:1,placeholder:"18 to 60"}),e.jsx("div",{className:"hint",children:"required + min 18 + max 60 + step 1"})]}),e.jsxs("div",{className:"row",children:[e.jsxs("label",{className:"label",htmlFor:"pin",children:["PIN code ",e.jsx("span",{className:"req",children:"*"})]}),e.jsx("input",{id:"pin",name:"pin",type:"text",value:l.pin,onChange:P,onBlur:U,required:!0,inputMode:"numeric",pattern:"^[0-9]{6}$",maxLength:6,placeholder:"6 digits"}),e.jsxs("div",{className:"hint",children:["required + pattern ^[0-9]","{6}","$"]})]})]}),e.jsxs("div",{className:"row",children:[e.jsx("label",{className:"label",htmlFor:"price",children:"Price (step demo)"}),e.jsx("input",{id:"price",name:"price",type:"range",value:l.price,onChange:P,min:0,max:100,step:5}),e.jsx("div",{className:"hint",children:"range + min 0 + max 100 + step 5"}),e.jsxs("div",{className:"pill",children:[e.jsx(se,{})," Selected: ",l.price]})]}),e.jsxs("div",{className:"row",children:[e.jsx("label",{className:"label",htmlFor:"website",children:"Website (custom validation)"}),e.jsx("input",{id:"website",name:"website",type:"url",value:l.website,onChange:P,onBlur:U,placeholder:"https://example.com"}),e.jsx("div",{className:"hint",children:"Custom rule: must start with https:// or http://"}),!!b&&e.jsxs("div",{className:"inlineWarn",children:[e.jsx(Je,{})," ",b]})]}),e.jsxs("div",{className:"actions",children:[e.jsx("button",{type:"submit",className:"btn primary",children:"Submit"}),e.jsx("button",{type:"reset",className:"btn",children:"Reset"})]}),!!T&&e.jsx("div",{className:"submitMsg",children:T})]})]}),e.jsxs("div",{className:"section",children:[e.jsx("h3",{className:"h3",children:"Constraint Validation API quick notes"}),e.jsxs("ul",{className:"bullets",children:[e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),e.jsxs("span",{className:"bulletText",children:[e.jsx("code",{className:"inlineCode",children:"form.checkValidity()"})," ","returns true or false without showing UI."]})]}),e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),e.jsxs("span",{className:"bulletText",children:[e.jsx("code",{className:"inlineCode",children:"form.reportValidity()"})," ","shows browser messages and returns true or false."]})]}),e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),e.jsxs("span",{className:"bulletText",children:[e.jsx("code",{className:"inlineCode",children:'input.setCustomValidity("Message")'})," ","sets your custom error message."]})]}),e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),e.jsxs("span",{className:"bulletText",children:["Set custom validity to empty string to clear it:",e.jsx("code",{className:"inlineCode",children:'setCustomValidity("")'}),"."]})]})]}),e.jsxs("div",{className:"miniCode",children:[e.jsxs("div",{className:"miniCodeTop",children:[e.jsx("span",{className:"miniCodeIcon",children:e.jsx(Me,{})}),"Example snippet"]}),e.jsx("pre",{className:"pre",children:`const form = e.currentTarget;

if (!form.checkValidity()) {
    form.reportValidity();
    return;
}

const input = form.querySelector('input[name="website"]');
input.setCustomValidity("URL must start with https://");`})]})]})]})]})},jg={Wrapper:Q.section`
        width: 100%;
        border: 1px solid var(--color-border);
        background: var(--color-surface);
        border-radius: 18px;
        box-shadow: 0 12px 30px var(--color-shadow);
        overflow: hidden;
        margin-bottom: 5px;

        .topicHeader {
            width: 100%;
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 14px 14px;
            background: transparent;
            color: var(--color-text-primary);
            text-align: left;
        }

        .topicHeader:hover {
            background: var(--color-surface-2);
        }

        .chev {
            width: 28px;
            height: 28px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            border-radius: 10px;
            background: var(--color-bg);
            color: var(--color-text-secondary);
            flex: 0 0 auto;
        }

        .icon {
            width: 36px;
            height: 36px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            color: var(--color-text-secondary);
            font-size: 18px;
            flex: 0 0 auto;
        }

        .title {
            font-weight: 900;
            letter-spacing: 0.2px;
            flex: 1;
        }

        .meta {
            font-size: 12px;
            color: var(--color-text-muted);
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 999px;
            padding: 7px 10px;
            white-space: nowrap;
            flex: 0 0 auto;
        }

        .topicBody {
            max-height: 0px;
            overflow: hidden;
            transition: max-height 260ms ease;
            border-top: 1px solid var(--color-border);
        }

        .topicBody.open {
            max-height: 5000px;
        }

        .section {
            padding: 14px 14px;
        }

        .section + .section {
            border-top: 1px dashed var(--color-border-light);
        }

        .h3 {
            font-size: 16px;
            margin-bottom: 8px;
        }

        .p {
            margin: 0;
            color: var(--color-text-secondary);
            line-height: 1.7;
        }

        .note {
            margin-top: 12px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 14px;
            padding: 12px;
            display: flex;
            gap: 10px;
            align-items: flex-start;
        }

        .noteIcon {
            width: 34px;
            height: 34px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: var(--color-surface);
            color: var(--color-text-secondary);
            flex: 0 0 auto;
            margin-top: 2px;
        }

        .noteText {
            color: var(--color-text-secondary);
            line-height: 1.6;
            font-size: 14px;
        }

        .goodBadGrid {
            margin-top: 12px;
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 12px;
        }

        .card {
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 16px;
            padding: 12px;
        }

        .cardTop {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 10px;
            margin-bottom: 10px;
        }

        .badge {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            border: 1px solid var(--color-border);
            border-radius: 999px;
            padding: 7px 10px;
            font-size: 12px;
            color: var(--color-text-secondary);
            background: var(--color-surface);
            white-space: nowrap;
        }

        .cardTitle {
            font-weight: 900;
            font-size: 13px;
            color: var(--color-text-primary);
            flex: 1;
            text-align: right;
        }

        .field {
            display: grid;
            gap: 6px;
        }

        label {
            font-size: 13px;
            font-weight: 800;
            color: var(--color-text-primary);
        }

        input {
            width: 100%;
        }

        .help {
            font-size: 12px;
            color: var(--color-text-muted);
        }

        .error {
            font-size: 12px;
            color: var(--color-text-secondary);
            border: 1px solid var(--color-border);
            background: var(--color-surface-2);
            border-radius: 12px;
            padding: 10px 12px;
        }

        .demoCard {
            margin-top: 12px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 16px;
            padding: 12px;
        }

        .demoTitle {
            font-weight: 900;
            font-size: 13px;
            color: var(--color-text-primary);
            margin-bottom: 10px;
        }

        .code {
            margin-top: 10px;
            border: 1px solid var(--color-border);
            background: var(--color-surface);
            border-radius: 14px;
            padding: 12px;
            overflow: auto;
        }

        pre {
            margin: 0;
            font-size: 12px;
            line-height: 1.55;
            color: var(--color-text-secondary);
            white-space: pre;
        }

        .tiny {
            margin-top: 10px;
            font-size: 12px;
            color: var(--color-text-muted);
            line-height: 1.6;
        }

        .bullets {
            list-style: none;
            margin-top: 12px;
            display: grid;
            gap: 10px;
            padding-left: 0;
        }

        .bullets li {
            display: flex;
            align-items: center;
            gap: 10px;
            color: var(--color-text-secondary);
            font-size: 14px;
        }

        .dot {
            width: 8px;
            height: 8px;
            border-radius: 999px;
            background: var(--color-text-primary);
            flex: 0 0 auto;
        }

        @media (max-width: 820px) {
            .goodBadGrid {
                grid-template-columns: 1fr;
            }
        }
    `},bg=()=>{const[a,c]=B.useState(!1),l=()=>c(p=>!p);return e.jsxs(jg.Wrapper,{className:`topicCard ${a?"open":""}`,children:[e.jsxs("button",{type:"button",className:"topicHeader",onClick:l,"aria-expanded":a,children:[e.jsx("span",{className:"chev",children:a?e.jsx(ie,{}):e.jsx(le,{})}),e.jsx("span",{className:"icon",children:e.jsx(ho,{})}),e.jsx("span",{className:"title",children:"Accessibility in Forms"}),e.jsx("span",{className:"meta",children:a?"Collapse":"Expand"})]}),e.jsxs("div",{className:`topicBody ${a?"open":""}`,children:[e.jsxs("div",{className:"section",children:[e.jsx("p",{className:"p",children:"Accessible forms are not just about looking good. They must be usable with keyboard navigation and screen readers. The core idea is simple: every form control should have a clear label, helpful guidance, and a clear error message when something goes wrong."}),e.jsxs("div",{className:"note",children:[e.jsx("span",{className:"noteIcon",children:e.jsx(He,{})}),e.jsx("div",{className:"noteText",children:'Screen readers read form fields using their label. If a label is missing or not connected, users hear vague text like "edit text" without context.'})]})]}),e.jsxs("div",{className:"section",children:[e.jsx("h3",{className:"h3",children:"1. Label association"}),e.jsx("p",{className:"p",children:"Every input should have a label. The label must be linked to the input so clicking the label focuses the input, and screen readers announce the correct name."}),e.jsxs("div",{className:"goodBadGrid",children:[e.jsxs("div",{className:"card good",children:[e.jsxs("div",{className:"cardTop",children:[e.jsxs("span",{className:"badge goodBadge",children:[e.jsx(se,{})," Good"]}),e.jsx("div",{className:"cardTitle",children:"Proper label and htmlFor"})]}),e.jsx("div",{className:"example",children:e.jsxs("div",{className:"field",children:[e.jsx("label",{htmlFor:"emailGood",children:"Email"}),e.jsx("input",{id:"emailGood",type:"email",placeholder:"name@example.com"})]})}),e.jsx("div",{className:"code",children:e.jsx("pre",{children:`<label for="email">Email</label>
<input id="email" type="email" />`})})]}),e.jsxs("div",{className:"card bad",children:[e.jsxs("div",{className:"cardTop",children:[e.jsxs("span",{className:"badge badBadge",children:[e.jsx(pu,{})," Avoid"]}),e.jsx("div",{className:"cardTitle",children:"Placeholder is not a label"})]}),e.jsx("div",{className:"example",children:e.jsx("div",{className:"field",children:e.jsx("input",{type:"email",placeholder:"Email","aria-label":"Email"})})}),e.jsx("div",{className:"code",children:e.jsx("pre",{children:`<!-- Placeholder disappears on typing -->
<input type="email" placeholder="Email" />`})}),e.jsx("p",{className:"tiny",children:"If you must skip a visible label, at least add aria-label. But visible labels are better."})]})]})]}),e.jsxs("div",{className:"section",children:[e.jsx("h3",{className:"h3",children:"2. aria-describedby"}),e.jsx("p",{className:"p",children:"Use aria-describedby to connect extra help text or error text to a field. Screen readers will announce that extra information after reading the label."}),e.jsxs("div",{className:"demoCard",children:[e.jsx("div",{className:"demoTitle",children:"Example: help text linked"}),e.jsxs("div",{className:"field",children:[e.jsx("label",{htmlFor:"passwordA11y",children:"Password"}),e.jsx("input",{id:"passwordA11y",type:"password","aria-describedby":"passwordHelp",placeholder:"Enter password"}),e.jsx("div",{className:"help",id:"passwordHelp",children:"Use at least 8 characters with letters and a number."})]}),e.jsx("div",{className:"code",children:e.jsx("pre",{children:`<label for="password">Password</label>
<input id="password" aria-describedby="passwordHelp" />
<div id="passwordHelp">Use at least 8 characters...</div>`})})]}),e.jsxs("div",{className:"note",children:[e.jsx("span",{className:"noteIcon",children:e.jsx(He,{})}),e.jsx("div",{className:"noteText",children:"aria-describedby works best when the text exists in the DOM and is not purely visual."})]})]}),e.jsxs("div",{className:"section",children:[e.jsx("h3",{className:"h3",children:"3. Error messaging patterns"}),e.jsx("p",{className:"p",children:'A good error message is specific and placed near the field. Also mark the field as invalid using aria-invalid="true". Link the error text using aria-describedby so screen readers announce it.'}),e.jsxs("div",{className:"demoCard",children:[e.jsx("div",{className:"demoTitle",children:"Example: invalid field with linked error"}),e.jsx(Ng,{})]}),e.jsxs("ul",{className:"bullets",children:[e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),"Put error text near the input"]}),e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),"Use aria-invalid on the input"]}),e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),"Link error text using aria-describedby"]}),e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),"Keep the message clear and actionable"]})]})]})]})]})},Ng=()=>{const[a,c]=B.useState(""),[l,p]=B.useState(!1),m=a.trim().includes("@"),f=l&&!m,b=f?"emailError":"emailHint";return e.jsxs("div",{className:"errorDemo",children:[e.jsxs("div",{className:"field",children:[e.jsx("label",{htmlFor:"emailA11y",children:"Email"}),e.jsx("input",{id:"emailA11y",type:"email",value:a,onChange:L=>c(L.target.value),onBlur:()=>p(!0),placeholder:"name@example.com","aria-describedby":b,"aria-invalid":f?"true":"false"}),!f&&e.jsx("div",{className:"help",id:"emailHint",children:"Example: name@example.com"}),f&&e.jsx("div",{className:"error",id:"emailError",children:'Please enter a valid email with "@".'})]}),e.jsx("div",{className:"code",children:e.jsx("pre",{children:`<input aria-invalid="true"
       aria-describedby="emailError" />

<div id="emailError">Please enter a valid email...</div>`})}),e.jsx("div",{className:"tiny",children:"Pro tip: For full forms, you can also show an error summary at the top, but always keep field-level errors near the input."})]})},wg={Wrapper:Q.section`
        margin-bottom: 5px;
        border: 1px solid var(--color-border);
        background: var(--color-surface);
        border-radius: 16px;
        box-shadow: 0 10px 25px var(--color-shadow);
        overflow: hidden;

        .header {
            width: 100%;
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 14px;
            background: transparent;
            color: var(--color-text-primary);
            text-align: left;
        }

        .header:hover {
            background: var(--color-surface-2);
        }

        .chev {
            width: 26px;
            height: 26px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            border-radius: 10px;
            background: var(--color-bg);
            color: var(--color-text-secondary);
        }

        .icon {
            width: 36px;
            height: 36px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            color: var(--color-text-secondary);
        }

        .title {
            font-weight: 900;
            flex: 1;
        }

        .meta {
            font-size: 12px;
            color: var(--color-text-muted);
            border: 1px solid var(--color-border);
            border-radius: 999px;
            padding: 6px 10px;
        }

        .body {
            max-height: 0px;
            overflow: hidden;
            transition: max-height 300ms ease;
            border-top: 1px solid var(--color-border);
        }

        .body.open {
            max-height: 4000px;
        }

        .section {
            padding: 14px;
        }

        .section + .section {
            border-top: 1px dashed var(--color-border-light);
        }

        h3 {
            margin-bottom: 6px;
            font-size: 16px;
        }

        p {
            margin: 0;
            line-height: 1.6;
            color: var(--color-text-secondary);
        }

        pre {
            margin-top: 8px;
            background: var(--color-bg);
            border: 1px solid var(--color-border);
            padding: 10px;
            border-radius: 10px;
            font-size: 13px;
            overflow-x: auto;
            color: var(--color-text-primary);
        }
    `},kg=()=>{const[a,c]=B.useState(!1),l=()=>c(p=>!p);return e.jsxs(wg.Wrapper,{className:a?"open":"",children:[e.jsxs("button",{type:"button",className:"header",onClick:l,"aria-expanded":a,children:[e.jsx("span",{className:"chev",children:a?e.jsx(ie,{}):e.jsx(le,{})}),e.jsx("span",{className:"icon",children:e.jsx(He,{})}),e.jsx("span",{className:"title",children:"Meta Tags"}),e.jsx("span",{className:"meta",children:a?"Collapse":"Expand"})]}),e.jsxs("div",{className:`body ${a?"open":""}`,children:[e.jsxs("div",{className:"section",children:[e.jsx("h3",{children:"What are Meta Tags"}),e.jsx("p",{children:"Meta tags are placed inside the head section of an HTML document. They provide information about the page to the browser and search engines. They do not display visible content on the page."})]}),e.jsxs("div",{className:"section",children:[e.jsx("h3",{children:"charset"}),e.jsx("p",{children:"The charset meta tag defines the character encoding used in the document. UTF-8 is the standard and supports almost all characters and symbols."}),e.jsx("pre",{children:'<meta charset="UTF-8">'})]}),e.jsxs("div",{className:"section",children:[e.jsx("h3",{children:"viewport"}),e.jsx("p",{children:"The viewport meta tag controls how a page is displayed on mobile devices. It ensures proper scaling and responsiveness."}),e.jsx("pre",{children:'<meta name="viewport" content="width=device-width, initial-scale=1.0">'})]}),e.jsxs("div",{className:"section",children:[e.jsx("h3",{children:"description"}),e.jsx("p",{children:"The description meta tag provides a short summary of the page. Search engines often display this in search results."}),e.jsx("pre",{children:'<meta name="description" content="Learn HTML fundamentals with clear examples.">'})]}),e.jsxs("div",{className:"section",children:[e.jsx("h3",{children:"keywords"}),e.jsx("p",{children:"The keywords meta tag lists relevant words for the page. Modern search engines do not rely heavily on it, but it was historically used for SEO."}),e.jsx("pre",{children:'<meta name="keywords" content="HTML, Web, Markup, Tutorial">'})]}),e.jsxs("div",{className:"section",children:[e.jsx("h3",{children:"author"}),e.jsx("p",{children:"The author meta tag defines who created the page. It is useful for documentation and reference."}),e.jsx("pre",{children:'<meta name="author" content="Your Name">'})]}),e.jsxs("div",{className:"section",children:[e.jsx("h3",{children:"refresh"}),e.jsx("p",{children:"The refresh meta tag automatically reloads the page after a specified number of seconds. It can also redirect to another URL."}),e.jsx("pre",{children:'<meta http-equiv="refresh" content="5">'}),e.jsx("pre",{children:'<meta http-equiv="refresh" content="5; url=https://example.com">'})]}),e.jsxs("div",{className:"section",children:[e.jsx("h3",{children:"http-equiv"}),e.jsx("p",{children:"The http-equiv attribute provides HTTP header information. It can simulate response headers like content-type or refresh."}),e.jsx("pre",{children:'<meta http-equiv="X-UA-Compatible" content="IE=edge">'})]})]})]})},Sg={Wrapper:Q.section`
        margin-bottom: 5px;
        border: 1px solid var(--color-border);
        background: var(--color-surface);
        border-radius: 16px;
        box-shadow: 0 10px 25px var(--color-shadow);
        overflow: hidden;

        .topicHeader {
            width: 100%;
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 14px;
            background: transparent;
            color: var(--color-text-primary);
            text-align: left;
        }

        .topicHeader:hover {
            background: var(--color-surface-2);
        }

        .chev {
            width: 28px;
            height: 28px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            border-radius: 10px;
            background: var(--color-bg);
            color: var(--color-text-secondary);
        }

        .icon {
            width: 36px;
            height: 36px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            color: var(--color-text-secondary);
        }

        .title {
            font-weight: 900;
            flex: 1;
        }

        .meta {
            font-size: 12px;
            color: var(--color-text-muted);
        }

        .topicBody {
            max-height: 0px;
            overflow: hidden;
            transition: max-height 300ms ease;
            border-top: 1px solid var(--color-border);
        }

        .topicBody.open {
            max-height: 3000px;
        }

        .section {
            padding: 14px;
        }

        .section + .section {
            border-top: 1px dashed var(--color-border-light);
        }

        .h3 {
            display: flex;
            align-items: center;
            gap: 8px;
            font-size: 15px;
            margin-bottom: 8px;
        }

        .p {
            color: var(--color-text-secondary);
            line-height: 1.6;
            margin-bottom: 10px;
        }

        .codeBlock {
            background: var(--color-bg);
            border: 1px solid var(--color-border);
            border-radius: 10px;
            padding: 10px;
            font-family: monospace;
            font-size: 13px;
            color: var(--color-text-primary);
            margin-bottom: 10px;
            overflow-x: auto;
        }
    `},Tg=()=>{const[a,c]=B.useState(!1);return e.jsxs(Sg.Wrapper,{className:a?"open":"",children:[e.jsxs("button",{type:"button",className:"topicHeader",onClick:()=>c(l=>!l),"aria-expanded":a,children:[e.jsx("span",{className:"chev",children:a?e.jsx(ie,{}):e.jsx(le,{})}),e.jsx("span",{className:"icon",children:e.jsx(ho,{})}),e.jsx("span",{className:"title",children:"Link Element"}),e.jsx("span",{className:"meta",children:a?"Collapse":"Expand"})]}),e.jsxs("div",{className:`topicBody ${a?"open":""}`,children:[e.jsxs("div",{className:"section",children:[e.jsxs("h3",{className:"h3",children:[e.jsx(hl,{})," Stylesheets"]}),e.jsx("p",{className:"p",children:"The most common use of the link element is to connect a CSS file to your HTML document. This allows the browser to apply styles to the page."}),e.jsx("div",{className:"codeBlock",children:'<link rel="stylesheet" href="styles.css">'}),e.jsx("p",{className:"p",children:'rel="stylesheet" tells the browser that this file contains CSS styles. The href attribute defines the location of the file.'})]}),e.jsxs("div",{className:"section",children:[e.jsxs("h3",{className:"h3",children:[e.jsx(fs,{})," Icons"]}),e.jsx("p",{className:"p",children:"The link element is also used to define a favicon. A favicon is the small icon shown in the browser tab."}),e.jsx("div",{className:"codeBlock",children:'<link rel="icon" href="/favicon.ico" type="image/x-icon">'}),e.jsx("p",{className:"p",children:'rel="icon" tells the browser this is a tab icon.'})]}),e.jsxs("div",{className:"section",children:[e.jsxs("h3",{className:"h3",children:[e.jsx(Ra,{})," Preload"]}),e.jsx("p",{className:"p",children:"Preload tells the browser to download a resource early, before it is actually needed. This improves performance for important files like fonts or scripts."}),e.jsx("div",{className:"codeBlock",children:'<link rel="preload" href="font.woff2" as="font" type="font/woff2" crossorigin>'}),e.jsx("p",{className:"p",children:"The as attribute tells the browser what type of resource it is loading."})]}),e.jsxs("div",{className:"section",children:[e.jsx("h3",{className:"h3",children:"Prefetch"}),e.jsx("p",{className:"p",children:"Prefetch loads resources that may be needed in the future. It has lower priority than preload and is used for next-page navigation."}),e.jsx("div",{className:"codeBlock",children:'<link rel="prefetch" href="/next-page.html">'})]}),e.jsxs("div",{className:"section",children:[e.jsx("h3",{className:"h3",children:"Preconnect"}),e.jsx("p",{className:"p",children:"Preconnect establishes early connections to important third-party domains. This reduces latency when fetching external resources."}),e.jsx("div",{className:"codeBlock",children:'<link rel="preconnect" href="https://fonts.googleapis.com">'}),e.jsx("p",{className:"p",children:"This is useful when using external fonts, APIs, or CDN resources."})]})]})]})},Cg={Wrapper:Q.section`
        width: 100%;
        margin-bottom: 5px;
        border: 1px solid var(--color-border);
        background: var(--color-surface);
        border-radius: 18px;
        box-shadow: 0 12px 30px var(--color-shadow);
        overflow: hidden;

        .topicHeader {
            width: 100%;
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 14px;
            background: transparent;
            color: var(--color-text-primary);
            text-align: left;
        }

        .topicHeader:hover {
            background: var(--color-surface-2);
        }

        .chev {
            width: 28px;
            height: 28px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            border-radius: 10px;
            background: var(--color-bg);
            color: var(--color-text-secondary);
            flex: 0 0 auto;
        }

        .icon {
            width: 36px;
            height: 36px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            color: var(--color-text-secondary);
            font-size: 18px;
            flex: 0 0 auto;
        }

        .title {
            font-weight: 900;
            flex: 1;
        }

        .meta {
            font-size: 12px;
            color: var(--color-text-muted);
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 999px;
            padding: 6px 10px;
        }

        .topicBody {
            max-height: 0px;
            overflow: hidden;
            transition: max-height 260ms ease;
            border-top: 1px solid var(--color-border);
        }

        .topicBody.open {
            max-height: 2000px;
        }

        .section {
            padding: 14px;
        }

        .section + .section {
            border-top: 1px dashed var(--color-border-light);
        }

        .h3 {
            font-size: 16px;
            margin-bottom: 8px;
            display: flex;
            align-items: center;
            gap: 6px;
        }

        .p {
            margin: 0;
            color: var(--color-text-secondary);
            line-height: 1.7;
        }

        .note {
            margin-top: 10px;
            color: var(--color-text-muted);
        }

        .codeBlock {
            margin-top: 12px;
            background: var(--color-bg);
            border: 1px solid var(--color-border);
            border-radius: 12px;
            padding: 12px;
            font-family: monospace;
            font-size: 13px;
            white-space: pre-wrap;
            line-height: 1.5;
            color: var(--color-text-primary);
        }

        .bullets {
            list-style: none;
            margin-top: 10px;
            padding-left: 0;
            display: grid;
            gap: 8px;
        }

        .bullets li {
            display: flex;
            align-items: center;
            gap: 8px;
            font-size: 14px;
            color: var(--color-text-secondary);
        }

        .dot {
            width: 7px;
            height: 7px;
            border-radius: 999px;
            background: var(--color-text-primary);
            flex: 0 0 auto;
        }

        .warning {
            background: var(--color-surface-2);
        }
    `},Lg=()=>{const[a,c]=B.useState(!1),l=()=>c(p=>!p);return e.jsxs(Cg.Wrapper,{className:a?"open":"",children:[e.jsxs("button",{type:"button",className:"topicHeader",onClick:l,"aria-expanded":a,children:[e.jsx("span",{className:"chev",children:a?e.jsx(ie,{}):e.jsx(le,{})}),e.jsx("span",{className:"icon",children:e.jsx(ho,{})}),e.jsx("span",{className:"title",children:"Base Element"}),e.jsx("span",{className:"meta",children:a?"Collapse":"Expand"})]}),e.jsxs("div",{className:`topicBody ${a?"open":""}`,children:[e.jsxs("div",{className:"section",children:[e.jsx("h3",{className:"h3",children:"What is the base element"}),e.jsx("p",{className:"p",children:"The base element defines a base URL or default target for all relative URLs inside a document. It must be placed inside the head section. It affects links, images, scripts, stylesheets, and forms that use relative paths."})]}),e.jsxs("div",{className:"section",children:[e.jsx("h3",{className:"h3",children:"Base href"}),e.jsx("p",{className:"p",children:"The href attribute sets the base URL for all relative URLs in the page. After defining it, every relative link will resolve from that base path."}),e.jsx("div",{className:"codeBlock",children:`<head>
  <base href="https://example.com/docs/" />
</head>

<a href="page.html">Open Page</a>`}),e.jsx("p",{className:"p note",children:"In this example, clicking the link will open: https://example.com/docs/page.html"})]}),e.jsxs("div",{className:"section",children:[e.jsx("h3",{className:"h3",children:"Base target"}),e.jsx("p",{className:"p",children:"The target attribute sets a default target for all anchor tags. It behaves like adding target to every link."}),e.jsx("div",{className:"codeBlock",children:`<head>
  <base target="_blank" />
</head>

<a href="https://example.com">Visit</a>`}),e.jsx("p",{className:"p note",children:"Now all links will open in a new tab unless explicitly overridden."})]}),e.jsxs("div",{className:"section warning",children:[e.jsxs("h3",{className:"h3",children:[e.jsx(pu,{})," Important Rules"]}),e.jsxs("ul",{className:"bullets",children:[e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),"Only one base element is allowed per document."]}),e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),"It must be placed inside the head."]}),e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),"It affects all relative URLs, including CSS and JS."]}),e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),"Absolute URLs are not affected."]})]})]}),e.jsxs("div",{className:"section",children:[e.jsx("h3",{className:"h3",children:"When to use it"}),e.jsx("p",{className:"p",children:"It is commonly used in documentation sites, static site deployments inside subfolders, or when hosting on GitHub Pages where a base path is required."})]})]})]})},zg={Wrapper:Q.section`
        margin-bottom: 5px;
        border: 1px solid var(--color-border);
        background: var(--color-surface);
        border-radius: 18px;
        box-shadow: 0 10px 25px var(--color-shadow);
        overflow: hidden;

        .topicHeader {
            width: 100%;
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 14px;
            background: transparent;
            color: var(--color-text-primary);
            text-align: left;
        }

        .topicHeader:hover {
            background: var(--color-surface-2);
        }

        .chev {
            width: 28px;
            height: 28px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            border-radius: 10px;
            background: var(--color-bg);
        }

        .icon {
            width: 36px;
            height: 36px;
            display: grid;
            place-items: center;
            border-radius: 12px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
        }

        .title {
            flex: 1;
            font-weight: 900;
        }

        .meta {
            font-size: 12px;
            color: var(--color-text-muted);
            border: 1px solid var(--color-border);
            border-radius: 999px;
            padding: 6px 10px;
        }

        .topicBody {
            max-height: 0;
            overflow: hidden;
            transition: max-height 300ms ease;
            border-top: 1px solid var(--color-border);
        }

        .topicBody.open {
            max-height: 5000px;
        }

        .section {
            padding: 16px;
        }

        .section + .section {
            border-top: 1px dashed var(--color-border-light);
        }

        .h3 {
            margin-bottom: 8px;
            font-size: 16px;
        }

        .p {
            color: var(--color-text-secondary);
            line-height: 1.7;
        }

        .code {
            background: var(--color-bg);
            border: 1px solid var(--color-border);
            padding: 12px;
            border-radius: 12px;
            font-size: 13px;
            overflow-x: auto;
            margin-top: 8px;
        }

        .bullets {
            margin-top: 8px;
            padding-left: 18px;
            display: flex;
            flex-direction: column;
            gap: 6px;
            color: var(--color-text-secondary);
            font-size: 14px;
        }
    `},Ig=()=>{const[a,c]=B.useState(!1),l=()=>c(p=>!p);return e.jsxs(zg.Wrapper,{className:a?"open":"",children:[e.jsxs("button",{type:"button",className:"topicHeader",onClick:l,"aria-expanded":a,children:[e.jsx("span",{className:"chev",children:a?e.jsx(ie,{}):e.jsx(le,{})}),e.jsx("span",{className:"icon",children:e.jsx(Me,{})}),e.jsx("span",{className:"title",children:"Script Element"}),e.jsx("span",{className:"meta",children:a?"Collapse":"Expand"})]}),e.jsxs("div",{className:`topicBody ${a?"open":""}`,children:[e.jsxs("div",{className:"section",children:[e.jsx("h3",{className:"h3",children:"Inline vs External"}),e.jsx("p",{className:"p",children:"Inline script means JavaScript written directly inside the HTML file."}),e.jsx("pre",{className:"code",children:`<script>
  console.log("Hello");
<\/script>`}),e.jsx("p",{className:"p",children:"External script means JavaScript written in a separate file and linked using the src attribute."}),e.jsx("pre",{className:"code",children:'<script src="app.js"><\/script>'}),e.jsx("p",{className:"p",children:"In real projects, external scripts are preferred because they are easier to maintain, cache, and reuse."})]}),e.jsxs("div",{className:"section",children:[e.jsx("h3",{className:"h3",children:"Defer"}),e.jsx("p",{className:"p",children:"The defer attribute tells the browser to download the script in parallel but execute it only after HTML parsing is complete."}),e.jsx("pre",{className:"code",children:'<script src="app.js" defer><\/script>'}),e.jsxs("ul",{className:"bullets",children:[e.jsx("li",{children:"HTML parsing is not blocked"}),e.jsx("li",{children:"Execution happens after DOM is ready"}),e.jsx("li",{children:"Scripts run in order"})]})]}),e.jsxs("div",{className:"section",children:[e.jsx("h3",{className:"h3",children:"Async"}),e.jsx("p",{className:"p",children:"The async attribute downloads the script in parallel and executes it immediately once ready."}),e.jsx("pre",{className:"code",children:'<script src="analytics.js" async><\/script>'}),e.jsxs("ul",{className:"bullets",children:[e.jsx("li",{children:"HTML parsing is not blocked"}),e.jsx("li",{children:"Execution order is NOT guaranteed"}),e.jsx("li",{children:"Best for independent scripts like analytics"})]})]}),e.jsxs("div",{className:"section",children:[e.jsx("h3",{className:"h3",children:"Module"}),e.jsx("p",{className:"p",children:'type="module" allows you to use modern JavaScript modules with import and export.'}),e.jsx("pre",{className:"code",children:'<script type="module" src="main.js"><\/script>'}),e.jsxs("ul",{className:"bullets",children:[e.jsx("li",{children:"Modules are deferred by default"}),e.jsx("li",{children:"They use strict mode automatically"}),e.jsx("li",{children:"They allow ES module imports"})]})]}),e.jsxs("div",{className:"section",children:[e.jsx("h3",{className:"h3",children:"Nomodule"}),e.jsx("p",{className:"p",children:"nomodule is used to provide fallback scripts for older browsers that do not support modules."}),e.jsx("pre",{className:"code",children:'<script nomodule src="legacy.js"><\/script>'}),e.jsx("p",{className:"p",children:"Modern browsers ignore this when module is supported."})]}),e.jsxs("div",{className:"section",children:[e.jsxs("h3",{className:"h3",children:[e.jsx(Ht,{style:{marginRight:6}}),"Integrity Attribute"]}),e.jsx("p",{className:"p",children:"The integrity attribute is used for Subresource Integrity (SRI). It ensures the file has not been tampered with."}),e.jsx("pre",{className:"code",children:`<script 
  src="https://cdn.example.com/lib.js"
  integrity="sha384-abc123..."
  crossorigin="anonymous">
<\/script>`}),e.jsx("p",{className:"p",children:"If the file content changes unexpectedly, the browser refuses to execute it."})]}),e.jsxs("div",{className:"section",children:[e.jsxs("h3",{className:"h3",children:[e.jsx(Ra,{style:{marginRight:6}}),"crossorigin"]}),e.jsx("p",{className:"p",children:"The crossorigin attribute controls how cross-origin requests are handled."}),e.jsxs("ul",{className:"bullets",children:[e.jsx("li",{children:"anonymous"}),e.jsx("li",{children:"use-credentials"})]}),e.jsx("p",{className:"p",children:"It is commonly used with integrity when loading scripts from a CDN."})]})]})]})},Eg={Wrapper:Q.section`
        width: 100%;
        margin-bottom: 5px;
        border: 1px solid var(--color-border);
        background: var(--color-surface);
        border-radius: 18px;
        box-shadow: 0 12px 30px var(--color-shadow);
        overflow: hidden;

        .topicHeader {
            width: 100%;
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 14px 14px;
            background: transparent;
            color: var(--color-text-primary);
            text-align: left;
        }

        .topicHeader:hover {
            background: var(--color-surface-2);
        }

        .chev {
            width: 28px;
            height: 28px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            border-radius: 10px;
            background: var(--color-bg);
            color: var(--color-text-secondary);
            flex: 0 0 auto;
        }

        .icon {
            width: 36px;
            height: 36px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            color: var(--color-text-secondary);
            font-size: 18px;
            flex: 0 0 auto;
        }

        .title {
            font-weight: 900;
            letter-spacing: 0.2px;
            flex: 1;
        }

        .meta {
            font-size: 12px;
            color: var(--color-text-muted);
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 999px;
            padding: 7px 10px;
            white-space: nowrap;
            flex: 0 0 auto;
        }

        .topicBody {
            max-height: 0px;
            overflow: hidden;
            transition: max-height 260ms ease;
            border-top: 1px solid var(--color-border);
        }

        .topicBody.open {
            max-height: 4000px;
        }

        .section {
            padding: 14px 14px;
        }

        .section + .section {
            border-top: 1px dashed var(--color-border-light);
        }

        .h3 {
            font-size: 16px;
            margin-bottom: 8px;
            display: flex;
            align-items: center;
            gap: 10px;
        }

        .hIcon {
            width: 28px;
            height: 28px;
            border-radius: 10px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            color: var(--color-text-secondary);
            flex: 0 0 auto;
        }

        .p {
            margin: 0;
            color: var(--color-text-secondary);
            line-height: 1.7;
        }

        .mono {
            font-family:
                ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                "Liberation Mono", "Courier New", monospace;
            color: var(--color-text-primary);
            font-weight: 800;
        }

        .note {
            margin-top: 12px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 14px;
            padding: 12px;
        }

        .noteTitle {
            display: flex;
            align-items: center;
            gap: 10px;
            font-weight: 900;
            color: var(--color-text-primary);
            margin-bottom: 10px;
        }

        .bullets {
            list-style: none;
            margin: 0;
            padding-left: 0;
            display: grid;
            gap: 10px;
        }

        .bullets li {
            display: flex;
            align-items: center;
            gap: 10px;
            color: var(--color-text-secondary);
            font-size: 14px;
        }

        .dot {
            width: 8px;
            height: 8px;
            border-radius: 999px;
            background: var(--color-text-primary);
            flex: 0 0 auto;
        }

        .code {
            margin-top: 12px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 14px;
            overflow: hidden;
        }

        .codeTitle {
            padding: 10px 12px;
            border-bottom: 1px solid var(--color-border);
            font-weight: 900;
            color: var(--color-text-primary);
            background: var(--color-surface);
        }

        .pre {
            margin: 0;
            padding: 12px;
            overflow: auto;
            color: var(--color-text-secondary);
            line-height: 1.6;
            font-size: 13px;
            font-family:
                ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                "Liberation Mono", "Courier New", monospace;
        }
    `},Mg=()=>{const[a,c]=B.useState(!1),l=()=>c(p=>!p);return e.jsxs(Eg.Wrapper,{className:`topicCard ${a?"open":""}`,children:[e.jsxs("button",{type:"button",className:"topicHeader",onClick:l,"aria-expanded":a,children:[e.jsx("span",{className:"chev",children:a?e.jsx(ie,{}):e.jsx(le,{})}),e.jsx("span",{className:"icon",children:e.jsx(Ra,{})}),e.jsx("span",{className:"title",children:"Performance Attributes"}),e.jsx("span",{className:"meta",children:a?"Collapse":"Expand"})]}),e.jsxs("div",{className:`topicBody ${a?"open":""}`,children:[e.jsx("div",{className:"section",children:e.jsx("p",{className:"p",children:"Performance attributes help the browser load and render content faster. You usually apply them to images, iframes, and sometimes scripts. The goal is simple: load what the user needs now, and delay what the user does not need yet."})}),e.jsxs("div",{className:"section",children:[e.jsxs("h3",{className:"h3",children:[e.jsx("span",{className:"hIcon",children:e.jsx(fs,{})}),'loading="lazy"']}),e.jsxs("p",{className:"p",children:["The ",e.jsx("span",{className:"mono",children:"loading"})," attribute tells the browser whether it should load an image or an iframe immediately or only when it is close to the viewport. ",e.jsx("span",{className:"mono",children:"lazy"}),' means "load later". This saves bandwidth and speeds up initial page load.']}),e.jsxs("div",{className:"note",children:[e.jsxs("div",{className:"noteTitle",children:[e.jsx(He,{})," When to use"]}),e.jsxs("ul",{className:"bullets",children:[e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),"Use it for images below the fold"]}),e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),"Use it for long pages with many images"]}),e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),"Do not use it for the hero image above the fold"]})]})]}),e.jsxs("div",{className:"code",children:[e.jsx("div",{className:"codeTitle",children:"Example"}),e.jsx("pre",{className:"pre",children:`<img
  src="photo.jpg"
  alt="A mountain view"
  loading="lazy"
/>

<iframe
  src="https://example.com/embed"
  title="Embedded content"
  loading="lazy"
></iframe>`})]})]}),e.jsxs("div",{className:"section",children:[e.jsxs("h3",{className:"h3",children:[e.jsx("span",{className:"hIcon",children:e.jsx(Ra,{})}),'decoding="async"']}),e.jsxs("p",{className:"p",children:["Images must be decoded before they can be displayed. The"," ",e.jsx("span",{className:"mono",children:"decoding"})," attribute gives a hint to the browser about when to decode."," ",e.jsx("span",{className:"mono",children:"async"})," means the browser can decode the image without blocking the page render. This helps reduce jank and improves perceived loading."]}),e.jsxs("div",{className:"note",children:[e.jsxs("div",{className:"noteTitle",children:[e.jsx(He,{})," Good to know"]}),e.jsxs("ul",{className:"bullets",children:[e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),"Use for non critical images"]}),e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),"For the top hero image, you can keep default or use sync if needed"]})]})]}),e.jsxs("div",{className:"code",children:[e.jsx("div",{className:"codeTitle",children:"Example"}),e.jsx("pre",{className:"pre",children:`<img
  src="gallery-1.jpg"
  alt="Gallery image"
  decoding="async"
/>`})]})]}),e.jsxs("div",{className:"section",children:[e.jsxs("h3",{className:"h3",children:[e.jsx("span",{className:"hIcon",children:e.jsx(se,{})}),'fetchpriority="high | low | auto"']}),e.jsxs("p",{className:"p",children:["The ",e.jsx("span",{className:"mono",children:"fetchpriority"})," ","attribute hints the browser about how important a resource is. A hero image that appears immediately can be marked as ",e.jsx("span",{className:"mono",children:"high"})," so it gets downloaded earlier. Less important images can be"," ",e.jsx("span",{className:"mono",children:"low"}),"."]}),e.jsxs("div",{className:"note",children:[e.jsxs("div",{className:"noteTitle",children:[e.jsx(He,{})," Practical usage"]}),e.jsxs("ul",{className:"bullets",children:[e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),"Use high for hero image or above the fold image"]}),e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),"Use low for images far below"]}),e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),"Keep auto if you are not sure"]})]})]}),e.jsxs("div",{className:"code",children:[e.jsx("div",{className:"codeTitle",children:"Example"}),e.jsx("pre",{className:"pre",children:`<img
  src="hero.jpg"
  alt="Main hero banner"
  fetchpriority="high"
/>

<img
  src="footer-gallery.jpg"
  alt="Footer gallery image"
  loading="lazy"
  fetchpriority="low"
  decoding="async"
/>`})]})]}),e.jsxs("div",{className:"section",children:[e.jsx("h3",{className:"h3",children:"Quick combo pattern"}),e.jsx("p",{className:"p",children:"A common pattern is: hero image loads fast, everything else loads lazily. This improves first paint and avoids unnecessary downloads."}),e.jsxs("div",{className:"code",children:[e.jsx("div",{className:"codeTitle",children:"Example"}),e.jsx("pre",{className:"pre",children:`<!-- Above the fold -->
<img
  src="hero.jpg"
  alt="Hero"
  fetchpriority="high"
/>

<!-- Below the fold -->
<img
  src="gallery-1.jpg"
  alt="Gallery"
  loading="lazy"
  decoding="async"
  fetchpriority="low"
/>`})]})]})]})]})},Bg={Wrapper:Q.section`
        width: 100%;
        border: 1px solid var(--color-border);
        background: var(--color-surface);
        border-radius: 18px;
        box-shadow: 0 12px 30px var(--color-shadow);
        overflow: hidden;
        margin-bottom: 5px;

        .topicHeader {
            width: 100%;
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 14px;
            background: transparent;
            color: var(--color-text-primary);
            text-align: left;
        }

        .topicHeader:hover {
            background: var(--color-surface-2);
        }

        .chev {
            width: 28px;
            height: 28px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            border-radius: 10px;
            background: var(--color-bg);
            color: var(--color-text-secondary);
        }

        .icon {
            width: 36px;
            height: 36px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            color: var(--color-text-secondary);
        }

        .title {
            font-weight: 900;
            flex: 1;
        }

        .meta {
            font-size: 12px;
            color: var(--color-text-muted);
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 999px;
            padding: 6px 10px;
        }

        .topicBody {
            max-height: 0px;
            overflow: hidden;
            transition: max-height 260ms ease;
            border-top: 1px solid var(--color-border);
        }

        .topicBody.open {
            max-height: 4000px;
        }

        .section {
            padding: 14px;
        }

        .section + .section {
            border-top: 1px dashed var(--color-border-light);
        }

        .h3 {
            font-size: 16px;
            margin-bottom: 8px;
        }

        .p {
            margin: 0 0 8px 0;
            color: var(--color-text-secondary);
            line-height: 1.7;
        }

        .code {
            background: var(--color-bg);
            border: 1px solid var(--color-border);
            border-radius: 12px;
            padding: 12px;
            font-family: monospace;
            font-size: 13px;
            white-space: pre-wrap;
            margin-top: 8px;
        }

        .note {
            margin-top: 8px;
            font-size: 13px;
            color: var(--color-text-muted);
        }

        .bullets {
            margin-top: 8px;
            padding-left: 18px;
            color: var(--color-text-secondary);
            font-size: 14px;
        }
    `},Hg=()=>{const[a,c]=B.useState(!1);return e.jsxs(Bg.Wrapper,{className:`topicCard ${a?"open":""}`,children:[e.jsxs("button",{type:"button",className:"topicHeader",onClick:()=>c(l=>!l),"aria-expanded":a,children:[e.jsx("span",{className:"chev",children:a?e.jsx(ie,{}):e.jsx(le,{})}),e.jsx("span",{className:"icon",children:e.jsx(Ht,{})}),e.jsx("span",{className:"title",children:"ARIA Basics"}),e.jsx("span",{className:"meta",children:a?"Collapse":"Expand"})]}),e.jsxs("div",{className:`topicBody ${a?"open":""}`,children:[e.jsxs("div",{className:"section",children:[e.jsx("h3",{className:"h3",children:"What is ARIA"}),e.jsx("p",{className:"p",children:"ARIA stands for Accessible Rich Internet Applications. It helps screen readers and assistive technologies understand parts of your UI when normal HTML semantics are not enough."}),e.jsx("p",{className:"p",children:"Important rule: Use semantic HTML first. Only use ARIA when native HTML cannot solve the problem."})]}),e.jsxs("div",{className:"section",children:[e.jsx("h3",{className:"h3",children:"aria-label"}),e.jsx("p",{className:"p",children:"aria-label provides a text label directly to screen readers. It is useful when there is no visible text."}),e.jsx("div",{className:"code",children:`<button aria-label="Close menu">
  ✕
</button>`}),e.jsx("p",{className:"note",children:'The button shows only an icon visually, but screen readers will read "Close menu".'})]}),e.jsxs("div",{className:"section",children:[e.jsx("h3",{className:"h3",children:"aria-labelledby"}),e.jsx("p",{className:"p",children:"aria-labelledby connects an element to another element that already contains the visible label."}),e.jsx("div",{className:"code",children:`<h2 id="modalTitle">Delete item</h2>
<div role="dialog" aria-labelledby="modalTitle">
  Are you sure?
</div>`}),e.jsx("p",{className:"note",children:"Screen readers will use the heading text as the dialog label."})]}),e.jsxs("div",{className:"section",children:[e.jsx("h3",{className:"h3",children:"aria-describedby"}),e.jsx("p",{className:"p",children:"aria-describedby links an element to additional descriptive text."}),e.jsx("div",{className:"code",children:`<input id="email" aria-describedby="emailHelp" />

<p id="emailHelp">
  We will not share your email.
</p>`}),e.jsx("p",{className:"note",children:"Screen readers will read both the label and this helper description."})]}),e.jsxs("div",{className:"section",children:[e.jsx("h3",{className:"h3",children:"aria-hidden"}),e.jsx("p",{className:"p",children:'aria-hidden="true" hides content from screen readers. It does not visually hide content. It only affects accessibility APIs.'}),e.jsx("div",{className:"code",children:'<span aria-hidden="true">★</span>'}),e.jsx("p",{className:"note",children:"Useful for decorative icons that do not carry meaning."})]}),e.jsxs("div",{className:"section",children:[e.jsx("h3",{className:"h3",children:"role attribute"}),e.jsx("p",{className:"p",children:"The role attribute defines what an element represents when native semantics are missing."}),e.jsx("div",{className:"code",children:`<div role="button" tabindex="0">
  Click me
</div>`}),e.jsx("p",{className:"note",children:'If you use role="button", you must also handle keyboard interaction properly. That is why native button is always better.'})]}),e.jsxs("div",{className:"section",children:[e.jsx("h3",{className:"h3",children:"Golden Rule"}),e.jsxs("ul",{className:"bullets",children:[e.jsx("li",{children:"Use semantic HTML first"}),e.jsx("li",{children:"Do not replace native elements unnecessarily"}),e.jsx("li",{children:"ARIA does not fix bad HTML structure"})]})]})]})]})},Pg={Wrapper:Q.section`
        width: 100%;
        margin-bottom: 5px;
        border: 1px solid var(--color-border);
        background: var(--color-surface);
        border-radius: 18px;
        box-shadow: 0 12px 30px var(--color-shadow);
        overflow: hidden;

        .topicHeader {
            width: 100%;
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 14px 14px;
            background: transparent;
            color: var(--color-text-primary);
            text-align: left;
        }

        .topicHeader:hover {
            background: var(--color-surface-2);
        }

        .chev {
            width: 28px;
            height: 28px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            border-radius: 10px;
            background: var(--color-bg);
            color: var(--color-text-secondary);
            flex: 0 0 auto;
        }

        .icon {
            width: 36px;
            height: 36px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            color: var(--color-text-secondary);
            font-size: 18px;
            flex: 0 0 auto;
        }

        .title {
            font-weight: 900;
            letter-spacing: 0.2px;
            flex: 1;
        }

        .meta {
            font-size: 12px;
            color: var(--color-text-muted);
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 999px;
            padding: 7px 10px;
            white-space: nowrap;
            flex: 0 0 auto;
        }

        .topicBody {
            max-height: 0px;
            overflow: hidden;
            transition: max-height 260ms ease;
            border-top: 1px solid var(--color-border);
        }

        .topicBody.open {
            max-height: 5000px;
        }

        .section {
            padding: 14px 14px;
        }

        .section + .section {
            border-top: 1px dashed var(--color-border-light);
        }

        .h3 {
            font-size: 16px;
            margin-bottom: 8px;
        }

        .p {
            margin: 0;
            margin-top: 8px;
            color: var(--color-text-secondary);
            line-height: 1.7;
        }

        .mono {
            font-family:
                ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                "Liberation Mono", "Courier New", monospace;
            font-size: 0.95em;
            padding: 0 6px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 999px;
            color: var(--color-text-secondary);
        }

        .cards {
            margin-top: 12px;
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 12px;
        }

        .card {
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 16px;
            padding: 12px;
        }

        .cardTop {
            display: flex;
            justify-content: flex-start;
            margin-bottom: 10px;
        }

        .badge {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 8px 10px;
            border-radius: 999px;
            border: 1px solid var(--color-border);
            font-size: 12px;
            font-weight: 900;
        }

        .badBadge {
            color: var(--color-text-secondary);
        }

        .goodBadge {
            color: var(--color-text-primary);
        }

        .code {
            margin: 0;
            border: 1px solid var(--color-border);
            background: var(--color-surface);
            border-radius: 14px;
            padding: 12px;
            color: var(--color-text-secondary);
            overflow: auto;
            line-height: 1.45;
            font-size: 12px;
        }

        .note {
            margin-top: 10px;
            color: var(--color-text-muted);
            font-size: 13px;
            line-height: 1.6;
        }

        .bullets {
            list-style: none;
            margin-top: 12px;
            display: grid;
            gap: 10px;
            padding-left: 0;
        }

        .bullets li {
            display: flex;
            align-items: center;
            gap: 10px;
            color: var(--color-text-secondary);
            font-size: 14px;
        }

        .dot {
            width: 8px;
            height: 8px;
            border-radius: 999px;
            background: var(--color-text-primary);
            flex: 0 0 auto;
        }

        .tip {
            margin-top: 14px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 16px;
            padding: 12px;
            display: flex;
            gap: 10px;
            align-items: flex-start;
        }

        .tipIcon {
            width: 36px;
            height: 36px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: var(--color-surface);
            color: var(--color-text-secondary);
            flex: 0 0 auto;
        }

        .tipText {
            color: var(--color-text-secondary);
            line-height: 1.6;
            font-size: 14px;
        }

        .mini {
            margin-top: 12px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 16px;
            padding: 12px;
        }

        .miniTitle {
            font-weight: 900;
            margin-bottom: 6px;
        }

        .miniSub {
            color: var(--color-text-secondary);
            line-height: 1.6;
            font-size: 14px;
        }

        .checklist {
            list-style: none;
            margin-top: 12px;
            display: grid;
            gap: 10px;
            padding-left: 0;
        }

        .checklist li {
            display: flex;
            align-items: center;
            gap: 10px;
            color: var(--color-text-secondary);
            font-size: 14px;
        }

        .check {
            width: 26px;
            height: 26px;
            border-radius: 10px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            color: var(--color-text-primary);
            flex: 0 0 auto;
        }

        @media (max-width: 900px) {
            .cards {
                grid-template-columns: 1fr;
            }
        }
    `},_g=()=>{const[a,c]=B.useState(!1),l=()=>c(p=>!p);return e.jsxs(Pg.Wrapper,{className:`topicCard ${a?"open":""}`,children:[e.jsxs("button",{type:"button",className:"topicHeader",onClick:l,"aria-expanded":a,children:[e.jsx("span",{className:"chev",children:a?e.jsx(ie,{}):e.jsx(le,{})}),e.jsx("span",{className:"icon",children:e.jsx(mu,{})}),e.jsx("span",{className:"title",children:"Semantic HTML vs div soup"}),e.jsx("span",{className:"meta",children:a?"Collapse":"Expand"})]}),e.jsxs("div",{className:`topicBody ${a?"open":""}`,children:[e.jsxs("div",{className:"section",children:[e.jsx("h3",{className:"h3",children:"What is semantic HTML"}),e.jsxs("p",{className:"p",children:["Semantic HTML means using elements that clearly describe what the content is. For example, a navigation menu should be inside a ",e.jsx("span",{className:"mono",children:"nav"}),", the main page content should be inside"," ",e.jsx("span",{className:"mono",children:"main"}),", and each article should be inside ",e.jsx("span",{className:"mono",children:"article"}),". This is different from using only"," ",e.jsx("span",{className:"mono",children:"div"})," and"," ",e.jsx("span",{className:"mono",children:"span"})," everywhere."]}),e.jsx("p",{className:"p",children:"Think of semantic tags like labels on boxes. The label helps everyone know what is inside, including browsers, search engines, and assistive technologies."})]}),e.jsxs("div",{className:"section",children:[e.jsx("h3",{className:"h3",children:"What is div soup"}),e.jsxs("p",{className:"p",children:['"Div soup" is when a page is built mostly with'," ",e.jsx("span",{className:"mono",children:"div"})," tags, and the structure is only defined by class names. It can work visually, but the meaning is hidden. For example, a sidebar might look correct, but a screen reader cannot easily understand what it is supposed to represent."]}),e.jsxs("div",{className:"cards",children:[e.jsxs("div",{className:"card bad",children:[e.jsx("div",{className:"cardTop",children:e.jsxs("span",{className:"badge badBadge",children:[e.jsx(Je,{})," div soup"]})}),e.jsx("pre",{className:"code",children:`<div class="header">
  <div class="nav">...</div>
</div>

<div class="content">
  <div class="post">...</div>
  <div class="sidebar">...</div>
</div>

<div class="footer">...</div>`}),e.jsx("p",{className:"note",children:"This is not wrong, but it does not clearly tell what the parts mean."})]}),e.jsxs("div",{className:"card good",children:[e.jsx("div",{className:"cardTop",children:e.jsxs("span",{className:"badge goodBadge",children:[e.jsx(se,{})," semantic HTML"]})}),e.jsx("pre",{className:"code",children:`<header>
  <nav>...</nav>
</header>

<main>
  <article>...</article>
  <aside>...</aside>
</main>

<footer>...</footer>`}),e.jsx("p",{className:"note",children:"This gives meaning to the structure, not just styling hooks."})]})]})]}),e.jsxs("div",{className:"section",children:[e.jsx("h3",{className:"h3",children:"Why semantics matter"}),e.jsxs("ul",{className:"bullets",children:[e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),"Better accessibility for screen readers and keyboard users"]}),e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),"Easier for developers to read and maintain"]}),e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),"Better structure for SEO and search engines"]}),e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),"Built-in browser behavior (like"," ",e.jsx("span",{className:"mono",children:"button"})," and"," ",e.jsx("span",{className:"mono",children:"form"}),") works properly"]})]}),e.jsxs("div",{className:"tip",children:[e.jsx("span",{className:"tipIcon",children:e.jsx(Va,{})}),e.jsx("div",{className:"tipText",children:"Semantic HTML is not about looking good. It is about being understood."})]})]}),e.jsxs("div",{className:"section",children:[e.jsx("h3",{className:"h3",children:"Screen reader behavior"}),e.jsxs("p",{className:"p",children:['Screen readers do not "see" the UI like we do. They read the page as a structured document. Semantic elements help them announce regions and landmarks like'," ",e.jsx("span",{className:"mono",children:"header"}),","," ",e.jsx("span",{className:"mono",children:"nav"}),","," ",e.jsx("span",{className:"mono",children:"main"}),","," ",e.jsx("span",{className:"mono",children:"article"}),", and"," ",e.jsx("span",{className:"mono",children:"footer"}),"."]}),e.jsxs("p",{className:"p",children:["Users can jump quickly between landmarks, headings, links, and form controls. If you use only"," ",e.jsx("span",{className:"mono",children:"div"})," elements, screen readers lose many useful shortcuts and the page becomes harder to navigate."]}),e.jsxs("div",{className:"mini",children:[e.jsx("div",{className:"miniTitle",children:"Good mental model"}),e.jsx("div",{className:"miniSub",children:"Visual users scan with eyes. Screen reader users scan with structure."})]})]}),e.jsxs("div",{className:"section",children:[e.jsx("h3",{className:"h3",children:"Quick checklist"}),e.jsxs("ul",{className:"checklist",children:[e.jsxs("li",{children:[e.jsx("span",{className:"check",children:e.jsx(se,{})}),"Use ",e.jsx("span",{className:"mono",children:"nav"})," for navigation"]}),e.jsxs("li",{children:[e.jsx("span",{className:"check",children:e.jsx(se,{})}),"Use ",e.jsx("span",{className:"mono",children:"main"})," once for main content"]}),e.jsxs("li",{children:[e.jsx("span",{className:"check",children:e.jsx(se,{})}),"Use ",e.jsx("span",{className:"mono",children:"button"})," for actions (not div click)"]}),e.jsxs("li",{children:[e.jsx("span",{className:"check",children:e.jsx(se,{})}),"Use heading order properly (h1 then h2 then h3)"]}),e.jsxs("li",{children:[e.jsx("span",{className:"check",children:e.jsx(se,{})}),"Use ",e.jsx("span",{className:"mono",children:"label"})," with form inputs"]})]})]})]})]})},Og={Wrapper:Q.section`
        width: 100%;
        margin-bottom: 5px;
        border: 1px solid var(--color-border);
        background: var(--color-surface);
        border-radius: 18px;
        box-shadow: 0 12px 30px var(--color-shadow);
        overflow: hidden;

        .topicHeader {
            width: 100%;
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 14px;
            background: transparent;
            color: var(--color-text-primary);
            text-align: left;
        }

        .topicHeader:hover {
            background: var(--color-surface-2);
        }

        .chev {
            width: 28px;
            height: 28px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            border-radius: 10px;
            background: var(--color-bg);
            color: var(--color-text-secondary);
            flex: 0 0 auto;
        }

        .icon {
            width: 36px;
            height: 36px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            color: var(--color-text-secondary);
            font-size: 18px;
            flex: 0 0 auto;
        }

        .title {
            font-weight: 900;
            letter-spacing: 0.2px;
            flex: 1;
        }

        .meta {
            font-size: 12px;
            color: var(--color-text-muted);
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 999px;
            padding: 7px 10px;
            white-space: nowrap;
            flex: 0 0 auto;
        }

        .topicBody {
            max-height: 0px;
            overflow: hidden;
            transition: max-height 260ms ease;
            border-top: 1px solid var(--color-border);
        }

        .topicBody.open {
            max-height: 5000px;
        }

        .section {
            padding: 14px;
        }

        .section + .section {
            border-top: 1px dashed var(--color-border-light);
        }

        .h3 {
            font-size: 16px;
            margin-bottom: 8px;
            display: flex;
            align-items: center;
            gap: 10px;
        }

        .p {
            margin: 0;
            color: var(--color-text-secondary);
            line-height: 1.7;
        }

        .bullets {
            list-style: none;
            margin-top: 12px;
            display: grid;
            gap: 10px;
            padding-left: 0;
        }

        .bullets li {
            display: flex;
            align-items: flex-start;
            gap: 10px;
            color: var(--color-text-secondary);
            font-size: 14px;
            line-height: 1.6;
        }

        .dot {
            width: 8px;
            height: 8px;
            border-radius: 999px;
            background: var(--color-text-primary);
            margin-top: 8px;
            flex: 0 0 auto;
        }

        .miniGrid {
            margin-top: 12px;
            display: grid;
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 10px;
        }

        .mini {
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 14px;
            padding: 12px;
            display: flex;
            gap: 10px;
            align-items: center;
        }

        .miniIcon {
            width: 32px;
            height: 32px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: var(--color-surface);
            color: var(--color-text-secondary);
            flex: 0 0 auto;
        }

        .miniTitle {
            font-weight: 900;
            font-size: 13px;
            color: var(--color-text-primary);
        }

        .miniSub {
            font-size: 12px;
            color: var(--color-text-muted);
            margin-top: 2px;
        }

        .codeBlock {
            margin-top: 12px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 14px;
            overflow: hidden;
        }

        .codeTitle {
            padding: 10px 12px;
            border-bottom: 1px solid var(--color-border);
            font-weight: 900;
            color: var(--color-text-secondary);
            font-size: 13px;
        }

        .code {
            margin: 0;
            padding: 12px;
            color: var(--color-text-secondary);
            font-size: 13px;
            line-height: 1.6;
            overflow: auto;
        }

        .mono {
            font-family:
                ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                "Liberation Mono", "Courier New", monospace;
        }

        .table {
            margin-top: 12px;
            border: 1px solid var(--color-border);
            border-radius: 14px;
            overflow: hidden;
            background: var(--color-bg);
        }

        .row {
            display: grid;
            grid-template-columns: 120px 1.2fr 1.4fr;
        }

        .row.head {
            background: var(--color-surface);
        }

        .cell {
            padding: 10px 12px;
            border-bottom: 1px solid var(--color-border);
            color: var(--color-text-secondary);
            font-size: 13px;
            line-height: 1.6;
        }

        .row.head .cell {
            font-weight: 900;
            color: var(--color-text-primary);
        }

        .row:last-child .cell {
            border-bottom: 0;
        }

        .callout {
            margin-top: 12px;
            border: 1px solid var(--color-border);
            background: var(--color-surface-2);
            border-radius: 14px;
            padding: 12px;
            display: flex;
            gap: 10px;
            align-items: flex-start;
        }

        .calloutIcon {
            width: 34px;
            height: 34px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            color: var(--color-text-secondary);
            flex: 0 0 auto;
        }

        .calloutTitle {
            font-weight: 900;
            color: var(--color-text-primary);
            font-size: 13px;
        }

        .calloutSub {
            margin-top: 4px;
            color: var(--color-text-secondary);
            font-size: 13px;
            line-height: 1.6;
        }

        .checkGrid {
            margin-top: 12px;
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 10px;
        }

        .check {
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 14px;
            padding: 12px;
            display: flex;
            gap: 10px;
            align-items: flex-start;
        }

        .checkIcon {
            width: 32px;
            height: 32px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: var(--color-surface);
            color: var(--color-text-secondary);
            flex: 0 0 auto;
        }

        .checkText {
            color: var(--color-text-secondary);
            font-size: 13px;
            line-height: 1.6;
        }

        .footerNote {
            margin-top: 14px;
            padding: 12px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 14px;
            color: var(--color-text-muted);
            font-size: 13px;
            line-height: 1.6;
        }

        @media (max-width: 820px) {
            .row {
                grid-template-columns: 90px 1fr;
                grid-auto-rows: auto;
            }

            .row .cell:nth-child(3) {
                grid-column: 1 / -1;
                border-top: 1px dashed var(--color-border-light);
            }

            .miniGrid {
                grid-template-columns: 1fr;
            }

            .checkGrid {
                grid-template-columns: 1fr;
            }
        }
    `};function Rg(a){return z({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M528 448H48c-26.51 0-48-21.49-48-48V112c0-26.51 21.49-48 48-48h480c26.51 0 48 21.49 48 48v288c0 26.51-21.49 48-48 48zM128 180v-40c0-6.627-5.373-12-12-12H76c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h40c6.627 0 12-5.373 12-12zm96 0v-40c0-6.627-5.373-12-12-12h-40c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h40c6.627 0 12-5.373 12-12zm96 0v-40c0-6.627-5.373-12-12-12h-40c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h40c6.627 0 12-5.373 12-12zm96 0v-40c0-6.627-5.373-12-12-12h-40c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h40c6.627 0 12-5.373 12-12zm96 0v-40c0-6.627-5.373-12-12-12h-40c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h40c6.627 0 12-5.373 12-12zm-336 96v-40c0-6.627-5.373-12-12-12h-40c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h40c6.627 0 12-5.373 12-12zm96 0v-40c0-6.627-5.373-12-12-12h-40c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h40c6.627 0 12-5.373 12-12zm96 0v-40c0-6.627-5.373-12-12-12h-40c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h40c6.627 0 12-5.373 12-12zm96 0v-40c0-6.627-5.373-12-12-12h-40c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h40c6.627 0 12-5.373 12-12zm-336 96v-40c0-6.627-5.373-12-12-12H76c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h40c6.627 0 12-5.373 12-12zm288 0v-40c0-6.627-5.373-12-12-12H172c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h232c6.627 0 12-5.373 12-12zm96 0v-40c0-6.627-5.373-12-12-12h-40c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h40c6.627 0 12-5.373 12-12z"},child:[]}]})(a)}const Fg=()=>{const[a,c]=B.useState(!1),l=()=>c(p=>!p);return e.jsxs(Og.Wrapper,{className:`topicCard ${a?"open":""}`,children:[e.jsxs("button",{type:"button",className:"topicHeader",onClick:l,"aria-expanded":a,children:[e.jsx("span",{className:"chev",children:a?e.jsx(ie,{}):e.jsx(le,{})}),e.jsx("span",{className:"icon",children:e.jsx(Rg,{})}),e.jsx("span",{className:"title",children:"Tab order"}),e.jsx("span",{className:"meta",children:a?"Collapse":"Expand"})]}),e.jsxs("div",{className:`topicBody ${a?"open":""}`,children:[e.jsxs("div",{className:"section",children:[e.jsx("h3",{className:"h3",children:"What is tab order"}),e.jsx("p",{className:"p",children:"Tab order is the sequence in which focus moves when a user presses the Tab key. Keyboard users rely on this to navigate a page without a mouse. A good tab order is predictable and follows the visual layout of the page."}),e.jsxs("div",{className:"callout good",children:[e.jsx("span",{className:"calloutIcon",children:e.jsx(se,{})}),e.jsxs("div",{className:"calloutText",children:[e.jsx("div",{className:"calloutTitle",children:"Goal"}),e.jsx("div",{className:"calloutSub",children:"Make keyboard navigation feel natural, from top to bottom and left to right."})]})]}),e.jsxs("div",{className:"miniGrid",children:[e.jsxs("div",{className:"mini",children:[e.jsx("span",{className:"miniIcon",children:e.jsx(ol,{})}),e.jsxs("div",{className:"miniText",children:[e.jsx("div",{className:"miniTitle",children:"Tab"}),e.jsx("div",{className:"miniSub",children:"Next focus"})]})]}),e.jsxs("div",{className:"mini",children:[e.jsx("span",{className:"miniIcon",children:e.jsx(ol,{})}),e.jsxs("div",{className:"miniText",children:[e.jsx("div",{className:"miniTitle",children:"Shift + Tab"}),e.jsx("div",{className:"miniSub",children:"Previous focus"})]})]}),e.jsxs("div",{className:"mini",children:[e.jsx("span",{className:"miniIcon",children:e.jsx(yu,{})}),e.jsxs("div",{className:"miniText",children:[e.jsx("div",{className:"miniTitle",children:"Enter / Space"}),e.jsx("div",{className:"miniSub",children:"Activate controls"})]})]})]})]}),e.jsxs("div",{className:"section",children:[e.jsx("h3",{className:"h3",children:"Default tab order"}),e.jsx("p",{className:"p",children:"By default, browsers follow the DOM order. That means focus moves in the order elements appear in your HTML. This is why writing clean, logical markup is the easiest way to get correct tab order."}),e.jsxs("ul",{className:"bullets",children:[e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),"Links, buttons, inputs, selects, and textareas are focusable by default"]}),e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),"Disabled form controls are not focusable"]}),e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),"If you visually reorder items using CSS, the tab order still follows the DOM order"]})]}),e.jsxs("div",{className:"codeBlock",children:[e.jsx("div",{className:"codeTitle",children:"Example: natural tab order"}),e.jsx("pre",{className:"code",children:`<a href="/docs">Docs</a>
<button type="button">Save</button>
<input type="text" placeholder="Search" />`})]})]}),e.jsxs("div",{className:"section",children:[e.jsx("h3",{className:"h3",children:"tabindex"}),e.jsx("p",{className:"p",children:"tabindex controls whether an element can be focused and how it participates in tab order."}),e.jsxs("div",{className:"table",children:[e.jsxs("div",{className:"row head",children:[e.jsx("div",{className:"cell",children:"Value"}),e.jsx("div",{className:"cell",children:"Meaning"}),e.jsx("div",{className:"cell",children:"When to use"})]}),e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"cell mono",children:"0"}),e.jsx("div",{className:"cell",children:"Element becomes focusable and follows normal DOM order"}),e.jsx("div",{className:"cell",children:"For custom UI elements like a div acting as a button"})]}),e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"cell mono",children:"-1"}),e.jsx("div",{className:"cell",children:"Element is focusable only via script, not Tab"}),e.jsx("div",{className:"cell",children:"For focus management inside modals, menus, and panels"})]}),e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"cell mono",children:"> 0"}),e.jsx("div",{className:"cell",children:"Changes the tab order to a manual priority list"}),e.jsx("div",{className:"cell",children:"Avoid in most cases, it creates confusing navigation"})]})]}),e.jsxs("div",{className:"callout warn",children:[e.jsx("span",{className:"calloutIcon",children:e.jsx(Je,{})}),e.jsxs("div",{className:"calloutText",children:[e.jsx("div",{className:"calloutTitle",children:"Avoid tabindex greater than 0"}),e.jsx("div",{className:"calloutSub",children:"It breaks expected navigation and becomes hard to maintain as the UI changes."})]})]}),e.jsxs("div",{className:"codeBlock",children:[e.jsx("div",{className:"codeTitle",children:"Example: making a custom element keyboard focusable"}),e.jsx("pre",{className:"code",children:`<div role="button" tabindex="0" aria-label="Open menu">
    Open menu
</div>`})]})]}),e.jsxs("div",{className:"section",children:[e.jsx("h3",{className:"h3",children:"Focus management"}),e.jsx("p",{className:"p",children:"Focus management means placing focus intentionally so keyboard users always know where they are. This matters most for dialogs, drawers, menus, and dynamic sections."}),e.jsxs("ul",{className:"bullets",children:[e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),"When a modal opens, move focus inside it"]}),e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),"Trap focus inside the modal while it is open"]}),e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),"When the modal closes, return focus to the element that opened it"]})]}),e.jsxs("div",{className:"codeBlock",children:[e.jsx("div",{className:"codeTitle",children:"Example: focus flow for a modal (plain explanation)"}),e.jsx("pre",{className:"code",children:`1) User activates "Open settings" button
2) Modal opens, focus moves to modal heading or first input
3) Tab cycles inside modal only
4) User presses Escape or clicks Close
5) Focus returns to "Open settings" button`})]}),e.jsxs("div",{className:"callout good",children:[e.jsx("span",{className:"calloutIcon",children:e.jsx(se,{})}),e.jsxs("div",{className:"calloutText",children:[e.jsx("div",{className:"calloutTitle",children:"Simple rule"}),e.jsx("div",{className:"calloutSub",children:"If something appears on top of the page and demands attention, it should also take focus."})]})]})]}),e.jsxs("div",{className:"section",children:[e.jsx("h3",{className:"h3",children:"Quick checklist"}),e.jsxs("div",{className:"checkGrid",children:[e.jsxs("div",{className:"check",children:[e.jsx("span",{className:"checkIcon",children:e.jsx(se,{})}),e.jsx("div",{className:"checkText",children:"Use semantic elements first (button, a, input)"})]}),e.jsxs("div",{className:"check",children:[e.jsx("span",{className:"checkIcon",children:e.jsx(se,{})}),e.jsx("div",{className:"checkText",children:"Keep DOM order aligned with visual order"})]}),e.jsxs("div",{className:"check",children:[e.jsx("span",{className:"checkIcon",children:e.jsx(Je,{})}),e.jsx("div",{className:"checkText",children:"Avoid tabindex greater than 0"})]}),e.jsxs("div",{className:"check",children:[e.jsx("span",{className:"checkIcon",children:e.jsx(se,{})}),e.jsx("div",{className:"checkText",children:"On dialogs, move focus in and return focus back"})]})]}),e.jsx("div",{className:"footerNote",children:"Tip: Test with keyboard only. Press Tab, Shift + Tab, Enter, Space, and Escape. If navigation feels weird, DOM order or focus handling is usually the reason."})]})]})]})},Ag={Wrapper:Q.section`
        width: 100%;
        margin-bottom: 5px;
        border: 1px solid var(--color-border);
        background: var(--color-surface);
        border-radius: 18px;
        box-shadow: 0 12px 30px var(--color-shadow);
        overflow: hidden;

        .topicHeader {
            width: 100%;
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 14px;
            background: transparent;
            color: var(--color-text-primary);
            text-align: left;
        }

        .topicHeader:hover {
            background: var(--color-surface-2);
        }

        .chev {
            width: 28px;
            height: 28px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            border-radius: 10px;
            background: var(--color-bg);
            color: var(--color-text-secondary);
        }

        .icon {
            width: 36px;
            height: 36px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            color: var(--color-text-secondary);
            font-size: 18px;
        }

        .title {
            font-weight: 900;
            flex: 1;
        }

        .meta {
            font-size: 12px;
            color: var(--color-text-muted);
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 999px;
            padding: 6px 10px;
        }

        .topicBody {
            max-height: 0;
            overflow: hidden;
            transition: max-height 250ms ease;
            border-top: 1px solid var(--color-border);
        }

        .topicBody.open {
            max-height: 3000px;
        }

        .section {
            padding: 14px;
        }

        .section + .section {
            border-top: 1px dashed var(--color-border-light);
        }

        .h3 {
            font-size: 16px;
            margin-bottom: 8px;
        }

        .p {
            margin: 0;
            color: var(--color-text-secondary);
            line-height: 1.7;
        }

        .bullets {
            list-style: none;
            padding-left: 0;
            display: grid;
            gap: 10px;
        }

        .bullets li {
            display: flex;
            align-items: center;
            gap: 10px;
            font-size: 14px;
            color: var(--color-text-secondary);
        }

        .dot {
            width: 8px;
            height: 8px;
            border-radius: 999px;
            background: var(--color-text-primary);
        }

        .code {
            margin-top: 10px;
            background: var(--color-bg);
            border: 1px solid var(--color-border);
            border-radius: 12px;
            padding: 12px;
            font-size: 13px;
            overflow-x: auto;
            color: var(--color-text-secondary);
        }
    `},Wg=()=>{const[a,c]=B.useState(!1),l=()=>c(p=>!p);return e.jsxs(Ag.Wrapper,{className:a?"open":"",children:[e.jsxs("button",{type:"button",className:"topicHeader",onClick:l,"aria-expanded":a,children:[e.jsx("span",{className:"chev",children:a?e.jsx(ie,{}):e.jsx(le,{})}),e.jsx("span",{className:"icon",children:e.jsx(ul,{})}),e.jsx("span",{className:"title",children:"Microdata"}),e.jsx("span",{className:"meta",children:a?"Collapse":"Expand"})]}),e.jsxs("div",{className:`topicBody ${a?"open":""}`,children:[e.jsxs("div",{className:"section",children:[e.jsx("h3",{className:"h3",children:"What is Microdata"}),e.jsx("p",{className:"p",children:'Microdata is a way to add structured information inside your HTML. It helps search engines understand what your content actually represents, not just how it looks. For example, instead of showing only text like "John Doe", you can tell the browser that this text represents a Person.'})]}),e.jsxs("div",{className:"section",children:[e.jsx("h3",{className:"h3",children:"Core attributes"}),e.jsxs("ul",{className:"bullets",children:[e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),"itemscope defines a new structured item"]}),e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),"itemtype defines the type of item"]}),e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),"itemprop defines properties of that item"]})]})]}),e.jsxs("div",{className:"section",children:[e.jsx("h3",{className:"h3",children:"Basic example"}),e.jsx("p",{className:"p",children:"Below is a simple example describing a person using Microdata."}),e.jsx("pre",{className:"code",children:`<div itemscope itemtype="https://schema.org/Person">
  <span itemprop="name">John Doe</span>
  <span itemprop="jobTitle">Web Developer</span>
  <a href="https://example.com" itemprop="url">
    Portfolio
  </a>
</div>`}),e.jsx("p",{className:"p",children:"Here: itemscope creates a new item. itemtype tells that the item is a Person. itemprop defines individual properties like name, jobTitle, and url."})]}),e.jsxs("div",{className:"section",children:[e.jsx("h3",{className:"h3",children:"Why it matters"}),e.jsx("p",{className:"p",children:"Search engines use structured data to generate rich results. For example, product ratings, prices, events, and author details can appear directly in search results when structured data is correctly defined."})]}),e.jsxs("div",{className:"section",children:[e.jsx("h3",{className:"h3",children:"Important note"}),e.jsx("p",{className:"p",children:"Microdata is one way to provide structured data. Modern applications often use JSON-LD instead, but understanding Microdata helps you understand how semantic metadata works directly inside HTML."})]})]})]})},Dg={Wrapper:Q.section`
        margin-bottom: 5px;
        width: 100%;
        border: 1px solid var(--color-border);
        background: var(--color-surface);
        border-radius: 18px;
        box-shadow: 0 12px 30px var(--color-shadow);
        overflow: hidden;

        .topicHeader {
            width: 100%;
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 14px 14px;
            background: transparent;
            color: var(--color-text-primary);
            text-align: left;
        }

        .topicHeader:hover {
            background: var(--color-surface-2);
        }

        .chev {
            width: 28px;
            height: 28px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            border-radius: 10px;
            background: var(--color-bg);
            color: var(--color-text-secondary);
            flex: 0 0 auto;
        }

        .icon {
            width: 36px;
            height: 36px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            color: var(--color-text-secondary);
            font-size: 18px;
            flex: 0 0 auto;
        }

        .title {
            font-weight: 900;
            letter-spacing: 0.2px;
            flex: 1;
        }

        .meta {
            font-size: 12px;
            color: var(--color-text-muted);
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 999px;
            padding: 7px 10px;
            white-space: nowrap;
            flex: 0 0 auto;
        }

        .topicBody {
            max-height: 0px;
            overflow: hidden;
            transition: max-height 260ms ease;
            border-top: 1px solid var(--color-border);
        }

        .topicBody.open {
            max-height: 8000px;
        }

        .section {
            padding: 14px 14px;
        }

        .section + .section {
            border-top: 1px dashed var(--color-border-light);
        }

        .h3 {
            font-size: 16px;
            margin-bottom: 8px;
        }

        .p {
            margin: 0 0 10px 0;
            color: var(--color-text-secondary);
            line-height: 1.7;
        }

        .callouts {
            margin-top: 12px;
            display: grid;
            gap: 10px;
        }

        .callout {
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 14px;
            padding: 12px;
            display: flex;
            gap: 10px;
            align-items: flex-start;
        }

        .callout.warn {
            border-color: var(--color-border-light);
        }

        .calloutIcon {
            width: 34px;
            height: 34px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: var(--color-surface);
            color: var(--color-text-secondary);
            flex: 0 0 auto;
        }

        .calloutTitle {
            font-weight: 900;
            font-size: 13px;
            margin-bottom: 4px;
            color: var(--color-text-primary);
        }

        .calloutSub {
            font-size: 13px;
            color: var(--color-text-secondary);
            line-height: 1.6;
        }

        .bullets {
            list-style: none;
            margin-top: 10px;
            display: grid;
            gap: 10px;
            padding-left: 0;
        }

        .bullets li {
            display: flex;
            align-items: flex-start;
            gap: 10px;
            color: var(--color-text-secondary);
            font-size: 14px;
            line-height: 1.6;
        }

        .dot {
            width: 8px;
            height: 8px;
            border-radius: 999px;
            background: var(--color-text-primary);
            flex: 0 0 auto;
            margin-top: 7px;
        }

        .mono {
            font-family:
                ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                "Liberation Mono", "Courier New", monospace;
            color: var(--color-text-primary);
            font-weight: 900;
        }

        .codeBlock {
            margin-top: 12px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 14px;
            overflow: hidden;
        }

        .codeTop {
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 10px 12px;
            border-bottom: 1px solid var(--color-border);
            background: var(--color-surface);
        }

        .codeIcon {
            width: 30px;
            height: 30px;
            border-radius: 10px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            color: var(--color-text-secondary);
            flex: 0 0 auto;
        }

        .codeTitle {
            font-weight: 900;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
            font-size: 13px;
        }

        .pre {
            margin: 0;
            padding: 12px;
            overflow: auto;
            max-height: 420px;
        }

        .pre code {
            font-family:
                ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                "Liberation Mono", "Courier New", monospace;
            font-size: 12.5px;
            line-height: 1.6;
            color: var(--color-text-secondary);
        }

        @media (max-width: 720px) {
            .title {
                font-size: 14px;
            }

            .pre {
                max-height: 520px;
            }
        }
    `},Ug=()=>{const[a,c]=B.useState(!1),l=B.useMemo(()=>{const m="html-core-notes",f="https://example.com/html-core-notes",b="https://example.com/html-core-notes/about",L={"@context":"https://schema.org","@type":"Organization",name:m,url:f,logo:"https://example.com/images/logo.png"},T={"@context":"https://schema.org","@type":"Article",headline:"Structured Data in HTML (JSON-LD Basics)",description:"A beginner friendly explanation of structured data and JSON-LD with practical examples.",author:{"@type":"Person",name:"Ashish Ranjan"},datePublished:"2026-01-01",dateModified:"2026-01-01",mainEntityOfPage:b,publisher:{"@type":"Organization",name:m,logo:{"@type":"ImageObject",url:"https://example.com/images/logo.png"}}},F={"@context":"https://schema.org","@type":"FAQPage",mainEntity:[{"@type":"Question",name:"What is JSON-LD?",acceptedAnswer:{"@type":"Answer",text:"JSON-LD is a JSON format used to describe structured data for search engines and other tools."}},{"@type":"Question",name:"Where do I put JSON-LD in HTML?",acceptedAnswer:{"@type":"Answer",text:"Usually inside a script tag with type='application/ld+json', often placed in the head or near the end of body."}}]},W=O=>JSON.stringify(O,null,2);return{org:W(L),article:W(T),faq:W(F)}},[]),p=()=>c(m=>!m);return e.jsxs(Dg.Wrapper,{className:`topicCard ${a?"open":""}`,children:[e.jsxs("button",{type:"button",className:"topicHeader",onClick:p,"aria-expanded":a,children:[e.jsx("span",{className:"chev",children:a?e.jsx(ie,{}):e.jsx(le,{})}),e.jsx("span",{className:"icon",children:e.jsx(ju,{})}),e.jsx("span",{className:"title",children:"Structured Data"}),e.jsx("span",{className:"meta",children:a?"Collapse":"Expand"})]}),e.jsxs("div",{className:`topicBody ${a?"open":""}`,children:[e.jsxs("div",{className:"section",children:[e.jsx("h3",{className:"h3",children:"What is structured data"}),e.jsx("p",{className:"p",children:'Structured data is extra information you attach to a web page so machines can understand it clearly. Humans can read a page and guess what it is, but search engines prefer explicit signals like "this page is an article" or "this is an organization" or "these are FAQs".'}),e.jsx("p",{className:"p",children:"When structured data is correct, it can help search engines present better results. It does not guarantee any special display, but it improves clarity and reduces ambiguity."})]}),e.jsxs("div",{className:"section",children:[e.jsx("h3",{className:"h3",children:"JSON-LD basics"}),e.jsx("p",{className:"p",children:'JSON-LD stands for JavaScript Object Notation for Linked Data. It is the most common way to add structured data. You place a JSON object inside a script tag with type "application/ld+json". The browser ignores it for UI, but crawlers can read it.'}),e.jsxs("div",{className:"callouts",children:[e.jsxs("div",{className:"callout",children:[e.jsx("span",{className:"calloutIcon",children:e.jsx(He,{})}),e.jsxs("div",{className:"calloutText",children:[e.jsx("div",{className:"calloutTitle",children:"Where to put it"}),e.jsx("div",{className:"calloutSub",children:"Put the script in head or near the end of body. Head is common for site wide metadata."})]})]}),e.jsxs("div",{className:"callout",children:[e.jsx("span",{className:"calloutIcon",children:e.jsx(se,{})}),e.jsxs("div",{className:"calloutText",children:[e.jsx("div",{className:"calloutTitle",children:"Keep it consistent"}),e.jsx("div",{className:"calloutSub",children:"The JSON-LD values should match what your page actually shows."})]})]}),e.jsxs("div",{className:"callout warn",children:[e.jsx("span",{className:"calloutIcon",children:e.jsx(Je,{})}),e.jsxs("div",{className:"calloutText",children:[e.jsx("div",{className:"calloutTitle",children:"Do not spam"}),e.jsx("div",{className:"calloutSub",children:"Do not add fake ratings, fake FAQs, or content not visible on the page."})]})]})]})]}),e.jsxs("div",{className:"section",children:[e.jsx("h3",{className:"h3",children:"Core fields you will see often"}),e.jsxs("ul",{className:"bullets",children:[e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),e.jsx("span",{className:"mono",children:"@context"})," sets the vocabulary, usually https://schema.org"]}),e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),e.jsx("span",{className:"mono",children:"@type"})," tells the content type like Article, Organization, Product, FAQPage"]}),e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),"Fields depend on the type, like"," ",e.jsx("span",{className:"mono",children:"headline"}),","," ",e.jsx("span",{className:"mono",children:"author"}),","," ",e.jsx("span",{className:"mono",children:"datePublished"})]})]})]}),e.jsxs("div",{className:"section",children:[e.jsx("h3",{className:"h3",children:"Example 1: Organization JSON-LD"}),e.jsx("p",{className:"p",children:"This is a simple way to describe your website or brand. Update the name, url, and logo."}),e.jsxs("div",{className:"codeBlock",children:[e.jsxs("div",{className:"codeTop",children:[e.jsx("span",{className:"codeIcon",children:e.jsx(Me,{})}),e.jsx("span",{className:"codeTitle",children:"Organization"})]}),e.jsx("pre",{className:"pre",children:e.jsx("code",{children:`<script type="application/ld+json">
${l.org}
<\/script>`})})]})]}),e.jsxs("div",{className:"section",children:[e.jsx("h3",{className:"h3",children:"Example 2: Article JSON-LD"}),e.jsx("p",{className:"p",children:"Use Article for blog posts, notes pages, documentation pages, and long content. Keep dates and titles real."}),e.jsxs("div",{className:"codeBlock",children:[e.jsxs("div",{className:"codeTop",children:[e.jsx("span",{className:"codeIcon",children:e.jsx(Me,{})}),e.jsx("span",{className:"codeTitle",children:"Article"})]}),e.jsx("pre",{className:"pre",children:e.jsx("code",{children:`<script type="application/ld+json">
${l.article}
<\/script>`})})]})]}),e.jsxs("div",{className:"section",children:[e.jsx("h3",{className:"h3",children:"Example 3: FAQPage JSON-LD"}),e.jsx("p",{className:"p",children:"If your page has real FAQs visible to users, you can describe them as a FAQPage."}),e.jsxs("div",{className:"codeBlock",children:[e.jsxs("div",{className:"codeTop",children:[e.jsx("span",{className:"codeIcon",children:e.jsx(Me,{})}),e.jsx("span",{className:"codeTitle",children:"FAQPage"})]}),e.jsx("pre",{className:"pre",children:e.jsx("code",{children:`<script type="application/ld+json">
${l.faq}
<\/script>`})})]})]}),e.jsxs("div",{className:"section",children:[e.jsx("h3",{className:"h3",children:"Checklist"}),e.jsxs("ul",{className:"bullets",children:[e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),"Use"," ",e.jsx("span",{className:"mono",children:'type="application/ld+json"'})]}),e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),"Keep values consistent with page content"]}),e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),"Start small, then add more types as needed"]}),e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),"Prefer valid Schema.org types and fields"]})]})]})]})]})},$g={Wrapper:Q.section`
        width: 100%;
        margin-bottom: 5px; /* as requested */
        border: 1px solid var(--color-border);
        background: var(--color-surface);
        border-radius: 18px;
        box-shadow: 0 12px 30px var(--color-shadow);
        overflow: hidden;

        .topicHeader {
            width: 100%;
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 14px;
            background: transparent;
            color: var(--color-text-primary);
            text-align: left;
        }

        .topicHeader:hover {
            background: var(--color-surface-2);
        }

        .chev {
            width: 28px;
            height: 28px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            border-radius: 10px;
            background: var(--color-bg);
            color: var(--color-text-secondary);
        }

        .icon {
            width: 36px;
            height: 36px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            color: var(--color-text-secondary);
        }

        .title {
            font-weight: 900;
            flex: 1;
        }

        .meta {
            font-size: 12px;
            color: var(--color-text-muted);
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 999px;
            padding: 6px 10px;
        }

        .topicBody {
            max-height: 0px;
            overflow: hidden;
            transition: max-height 260ms ease;
            border-top: 1px solid var(--color-border);
        }

        .topicBody.open {
            max-height: 3000px;
        }

        .section {
            padding: 14px;
        }

        .section + .section {
            border-top: 1px dashed var(--color-border-light);
        }

        .h3 {
            font-size: 16px;
            margin-bottom: 8px;
        }

        .p {
            margin: 0;
            margin-bottom: 10px;
            color: var(--color-text-secondary);
            line-height: 1.7;
        }

        .bullets {
            list-style: none;
            padding-left: 0;
            display: grid;
            gap: 10px;
        }

        .bullets li {
            display: flex;
            align-items: center;
            gap: 10px;
            color: var(--color-text-secondary);
            font-size: 14px;
        }

        .dot {
            width: 8px;
            height: 8px;
            border-radius: 999px;
            background: var(--color-text-primary);
        }

        .codeBlock {
            background: var(--color-bg);
            border: 1px solid var(--color-border);
            border-radius: 12px;
            padding: 12px;
            overflow-x: auto;
            margin-top: 10px;
        }

        pre {
            margin: 0;
            font-family: monospace;
            font-size: 13px;
            color: var(--color-text-secondary);
        }
    `},Vg=()=>{const[a,c]=B.useState(!1),l=()=>c(p=>!p);return e.jsxs($g.Wrapper,{className:a?"open":"",children:[e.jsxs("button",{type:"button",className:"topicHeader",onClick:l,"aria-expanded":a,children:[e.jsx("span",{className:"chev",children:a?e.jsx(ie,{}):e.jsx(le,{})}),e.jsx("span",{className:"icon",children:e.jsx(ul,{})}),e.jsx("span",{className:"title",children:"Custom Data Attributes"}),e.jsx("span",{className:"meta",children:a?"Collapse":"Expand"})]}),e.jsxs("div",{className:`topicBody ${a?"open":""}`,children:[e.jsxs("div",{className:"section",children:[e.jsx("h3",{className:"h3",children:"What are data attributes"}),e.jsxs("p",{className:"p",children:["Custom data attributes allow you to store extra information directly inside HTML elements. They are written using the prefix ",e.jsx("strong",{children:"data-"}),". These attributes do not affect layout or styling automatically. They simply store custom values."]}),e.jsx("p",{className:"p",children:"This is useful when you want to attach metadata to elements that JavaScript can later read."}),e.jsx("div",{className:"codeBlock",children:e.jsx("pre",{children:`<div data-user-id="42" data-role="admin">
    Profile
</div>`})})]}),e.jsxs("div",{className:"section",children:[e.jsx("h3",{className:"h3",children:"Why use data attributes"}),e.jsxs("ul",{className:"bullets",children:[e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),"Store extra information without creating custom attributes"]}),e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),"Keep HTML valid and standard compliant"]}),e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),"Pass configuration data to JavaScript"]}),e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),"Avoid hardcoding values inside JS files"]})]})]}),e.jsxs("div",{className:"section",children:[e.jsx("h3",{className:"h3",children:"dataset API concept"}),e.jsxs("p",{className:"p",children:["In JavaScript, every element has a property called",e.jsx("strong",{children:"dataset"}),". It allows you to access all data attributes as an object."]}),e.jsx("div",{className:"codeBlock",children:e.jsx("pre",{children:`const element = document.querySelector("div");

console.log(element.dataset.userId);
console.log(element.dataset.role);`})}),e.jsxs("p",{className:"p",children:["Notice how ",e.jsx("strong",{children:"data-user-id"})," becomes",e.jsx("strong",{children:"dataset.userId"}),". Hyphenated names convert to camelCase automatically."]})]}),e.jsxs("div",{className:"section",children:[e.jsx("h3",{className:"h3",children:"How the conversion works"}),e.jsxs("ul",{className:"bullets",children:[e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),"data-user-id → dataset.userId"]}),e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),"data-product-name → dataset.productName"]}),e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),"data-custom-value → dataset.customValue"]})]})]}),e.jsxs("div",{className:"section",children:[e.jsx("h3",{className:"h3",children:"Updating values dynamically"}),e.jsx("div",{className:"codeBlock",children:e.jsx("pre",{children:'element.dataset.userId = "99";'})}),e.jsxs("p",{className:"p",children:["This updates the HTML attribute automatically to:",e.jsx("strong",{children:' data-user-id="99"'}),"."]})]}),e.jsxs("div",{className:"section",children:[e.jsx("h3",{className:"h3",children:"When to use it"}),e.jsx("p",{className:"p",children:"Use data attributes when you need small pieces of structured information attached to elements. Avoid storing large JSON objects directly in HTML. Keep it lightweight and purposeful."})]})]})]})},Gg={Wrapper:Q.section`
        width: 100%;
        margin-bottom: 5px;
        border: 1px solid var(--color-border);
        background: var(--color-surface);
        border-radius: 18px;
        box-shadow: 0 12px 30px var(--color-shadow);
        overflow: hidden;

        .topicHeader {
            width: 100%;
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 14px 14px;
            background: transparent;
            color: var(--color-text-primary);
            text-align: left;
        }

        .topicHeader:hover {
            background: var(--color-surface-2);
        }

        .chev {
            width: 28px;
            height: 28px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            border-radius: 10px;
            background: var(--color-bg);
            color: var(--color-text-secondary);
            flex: 0 0 auto;
        }

        .icon {
            width: 36px;
            height: 36px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            color: var(--color-text-secondary);
            font-size: 18px;
            flex: 0 0 auto;
        }

        .title {
            font-weight: 900;
            letter-spacing: 0.2px;
            flex: 1;
        }

        .meta {
            font-size: 12px;
            color: var(--color-text-muted);
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 999px;
            padding: 7px 10px;
            white-space: nowrap;
            flex: 0 0 auto;
        }

        .topicBody {
            max-height: 0px;
            overflow: hidden;
            transition: max-height 260ms ease;
            border-top: 1px solid var(--color-border);
        }

        .topicBody.open {
            max-height: 5000px;
        }

        .section {
            padding: 14px 14px;
        }

        .section + .section {
            border-top: 1px dashed var(--color-border-light);
        }

        .h3 {
            font-size: 16px;
            margin-bottom: 8px;
        }

        .p {
            margin: 0;
            color: var(--color-text-secondary);
            line-height: 1.7;
        }

        .mono {
            font-family:
                ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                "Liberation Mono", "Courier New", monospace;
            font-weight: 800;
            color: var(--color-text-primary);
            background: var(--color-bg);
            border: 1px solid var(--color-border);
            border-radius: 8px;
            padding: 2px 8px;
            display: inline-block;
            transform: translateY(-1px);
        }

        .callout {
            margin-top: 12px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 16px;
            padding: 12px;
        }

        .calloutTop {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 10px;
        }

        .calloutIcon {
            width: 32px;
            height: 32px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: var(--color-surface);
            color: var(--color-text-secondary);
            flex: 0 0 auto;
        }

        .calloutTitle {
            font-weight: 900;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
        }

        .code {
            margin: 0;
            border: 1px solid var(--color-border);
            background: var(--color-surface);
            border-radius: 14px;
            padding: 12px;
            overflow: auto;
            color: var(--color-text-secondary);
            font-size: 13px;
            line-height: 1.6;
        }

        .tip {
            margin: 10px 0 10px 0;
            color: var(--color-text-muted);
            font-size: 13px;
            line-height: 1.6;
        }

        .bullets {
            list-style: none;
            margin-top: 12px;
            display: grid;
            gap: 10px;
            padding-left: 0;
        }

        .bullets li {
            display: flex;
            align-items: flex-start;
            gap: 10px;
            color: var(--color-text-secondary);
            font-size: 14px;
            line-height: 1.6;
        }

        .dot {
            width: 8px;
            height: 8px;
            border-radius: 999px;
            background: var(--color-text-primary);
            flex: 0 0 auto;
            transform: translateY(7px);
        }
    `},Qg=()=>{const[a,c]=B.useState(!1),l=()=>c(p=>!p);return e.jsxs(Gg.Wrapper,{className:`topicCard ${a?"open":""}`,children:[e.jsxs("button",{type:"button",className:"topicHeader",onClick:l,"aria-expanded":a,children:[e.jsx("span",{className:"chev",children:a?e.jsx(ie,{}):e.jsx(le,{})}),e.jsx("span",{className:"icon",children:e.jsx(xl,{})}),e.jsx("span",{className:"title",children:"Internationalization"}),e.jsx("span",{className:"meta",children:a?"Collapse":"Expand"})]}),e.jsxs("div",{className:`topicBody ${a?"open":""}`,children:[e.jsxs("div",{className:"section",children:[e.jsx("h3",{className:"h3",children:"What does Internationalization mean"}),e.jsx("p",{className:"p",children:"Internationalization (often written as i18n) means building your pages in a way that supports multiple languages and different writing directions. The web is not only English. HTML has built-in features to declare language and direction so browsers, screen readers, and search engines can interpret text correctly."})]}),e.jsxs("div",{className:"section",children:[e.jsx("h3",{className:"h3",children:"1. Language declaration with lang"}),e.jsxs("p",{className:"p",children:["The ",e.jsx("span",{className:"mono",children:"lang"})," attribute tells the browser and accessibility tools what language the content is in. This improves pronunciation in screen readers, improves text processing, and also helps SEO. You should set it at the top level on the"," ",e.jsx("span",{className:"mono",children:"html"})," element."]}),e.jsxs("div",{className:"callout",children:[e.jsxs("div",{className:"calloutTop",children:[e.jsx("span",{className:"calloutIcon",children:e.jsx(gs,{})}),e.jsx("div",{className:"calloutTitle",children:"Example"})]}),e.jsx("pre",{className:"code",children:`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>My Page</title>
  </head>
  <body>
    <h1>Hello</h1>
  </body>
</html>`}),e.jsxs("p",{className:"tip",children:["If part of the page switches language, add"," ",e.jsx("span",{className:"mono",children:"lang"})," on that specific element."]}),e.jsx("pre",{className:"code",children:`<p>
  This sentence is English.
  <span lang="hi">यह हिस्सा हिंदी में है।</span>
</p>`})]})]}),e.jsxs("div",{className:"section",children:[e.jsx("h3",{className:"h3",children:"2. Text direction with dir"}),e.jsxs("p",{className:"p",children:["Some languages are written left-to-right (LTR) like English and Hindi. Some are right-to-left (RTL) like Arabic and Hebrew. The ",e.jsx("span",{className:"mono",children:"dir"})," ","attribute tells the browser the direction of text flow. You can set it on ",e.jsx("span",{className:"mono",children:"html"})," for the whole page or on a smaller element for a mixed page."]}),e.jsxs("div",{className:"callout",children:[e.jsxs("div",{className:"calloutTop",children:[e.jsx("span",{className:"calloutIcon",children:e.jsx(Om,{})}),e.jsx("div",{className:"calloutTitle",children:"Examples"})]}),e.jsx("pre",{className:"code",children:`<!-- Entire page is RTL -->
<html lang="ar" dir="rtl">...</html>`}),e.jsx("pre",{className:"code",children:`<!-- Only one block is RTL -->
<p>
  English paragraph.
  <span lang="ar" dir="rtl">مرحبا بالعالم</span>
</p>`}),e.jsxs("p",{className:"tip",children:["Use ",e.jsx("span",{className:"mono",children:'dir="auto"'})," when you do not know the direction in advance (for example, user-generated content). The browser will guess direction based on the first strong character."]}),e.jsx("pre",{className:"code",children:'<p dir="auto">User typed text here...</p>'})]})]}),e.jsxs("div",{className:"section",children:[e.jsx("h3",{className:"h3",children:"3. Bidi isolation (mixed direction safety)"}),e.jsx("p",{className:"p",children:"Bidi means bidirectional text. Problems happen when LTR and RTL text are mixed in the same line. For example, an English sentence that includes an Arabic username or a Hebrew word can cause punctuation and ordering to look wrong. Bidi isolation helps keep the embedded text from messing up the surrounding text flow."}),e.jsxs("p",{className:"p",children:["The simplest and most common tool is the"," ",e.jsx("span",{className:"mono",children:"bdi"})," element. It isolates a piece of text and lets the browser render it safely. This is very useful for usernames, tags, and short user-generated strings."]}),e.jsxs("div",{className:"callout",children:[e.jsxs("div",{className:"calloutTop",children:[e.jsx("span",{className:"calloutIcon",children:e.jsx(Ht,{})}),e.jsx("div",{className:"calloutTitle",children:"Example"})]}),e.jsx("pre",{className:"code",children:`<p>
  User: <bdi>مرحبا</bdi> posted a comment.
</p>`}),e.jsxs("p",{className:"tip",children:["Use ",e.jsx("span",{className:"mono",children:"bdo"})," only when you intentionally want to force direction for a span of text. It overrides the normal bidi algorithm, so it is more dangerous if used incorrectly."]}),e.jsx("pre",{className:"code",children:`<p>
  Normal: ABC مرحبا 123
  <br />
  Forced RTL: <bdo dir="rtl">ABC مرحبا 123</bdo>
</p>`})]})]}),e.jsxs("div",{className:"section",children:[e.jsx("h3",{className:"h3",children:"Quick checklist"}),e.jsxs("ul",{className:"bullets",children:[e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),"Always set ",e.jsx("span",{className:"mono",children:"lang"})," on ",e.jsx("span",{className:"mono",children:"html"})]}),e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),"Use ",e.jsx("span",{className:"mono",children:"dir"})," for RTL pages or RTL blocks"]}),e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),"For user content, consider"," ",e.jsx("span",{className:"mono",children:'dir="auto"'})]}),e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),"Use ",e.jsx("span",{className:"mono",children:"bdi"})," for mixed direction values like usernames"]}),e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),"Avoid overusing ",e.jsx("span",{className:"mono",children:"bdo"})," ","unless you truly need direction override"]})]})]})]})]})},qg={Wrapper:Q.section`
        width: 100%;
        margin-bottom: 5px;
        border: 1px solid var(--color-border);
        background: var(--color-surface);
        border-radius: 18px;
        box-shadow: 0 12px 30px var(--color-shadow);
        overflow: hidden;

        .topicHeader {
            width: 100%;
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 14px;
            background: transparent;
            color: var(--color-text-primary);
            text-align: left;
        }

        .topicHeader:hover {
            background: var(--color-surface-2);
        }

        .chev {
            width: 28px;
            height: 28px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            border-radius: 10px;
            background: var(--color-bg);
            color: var(--color-text-secondary);
            flex: 0 0 auto;
        }

        .icon {
            width: 36px;
            height: 36px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            color: var(--color-text-secondary);
            font-size: 18px;
            flex: 0 0 auto;
        }

        .title {
            font-weight: 900;
            letter-spacing: 0.2px;
            flex: 1;
        }

        .meta {
            font-size: 12px;
            color: var(--color-text-muted);
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 999px;
            padding: 7px 10px;
            white-space: nowrap;
            flex: 0 0 auto;
        }

        .topicBody {
            max-height: 0px;
            overflow: hidden;
            transition: max-height 260ms ease;
            border-top: 1px solid var(--color-border);
        }

        .topicBody.open {
            max-height: 6000px;
        }

        .section {
            padding: 14px 14px;
        }

        .section + .section {
            border-top: 1px dashed var(--color-border-light);
        }

        .h3 {
            font-size: 16px;
            margin-bottom: 8px;
        }

        .p {
            margin: 0;
            color: var(--color-text-secondary);
            line-height: 1.7;
        }

        .p.hint {
            margin-top: 10px;
            color: var(--color-text-muted);
        }

        .mono {
            font-family:
                ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                "Liberation Mono", "Courier New", monospace;
            padding: 2px 6px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 10px;
            color: var(--color-text-primary);
            font-size: 0.95em;
        }

        .note {
            margin-top: 14px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 14px;
            padding: 12px;
            display: flex;
            gap: 10px;
            align-items: flex-start;
        }

        .noteIcon {
            width: 34px;
            height: 34px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: var(--color-surface);
            color: var(--color-text-secondary);
            flex: 0 0 auto;
        }

        .noteTitle {
            font-weight: 900;
            font-size: 13px;
            margin-bottom: 2px;
            color: var(--color-text-primary);
        }

        .noteSub {
            font-size: 13px;
            color: var(--color-text-secondary);
            line-height: 1.6;
        }

        .twoCol {
            margin-top: 12px;
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 12px;
        }

        .card {
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 14px;
            overflow: hidden;
        }

        .cardHead {
            padding: 10px 12px;
            border-bottom: 1px solid var(--color-border);
            display: flex;
            justify-content: flex-start;
        }

        .badge {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            font-size: 12px;
            font-weight: 900;
            border: 1px solid var(--color-border);
            background: var(--color-surface);
            border-radius: 999px;
            padding: 7px 10px;
            color: var(--color-text-primary);
        }

        .code {
            margin: 0;
            padding: 12px;
            overflow: auto;
            font-size: 13px;
            line-height: 1.55;
            color: var(--color-text-secondary);
            background: transparent;
        }

        .summary {
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 14px;
            padding: 12px;
        }

        .summaryTitle {
            font-weight: 900;
            margin-bottom: 10px;
            color: var(--color-text-primary);
        }

        .summaryList {
            list-style: none;
            padding-left: 0;
            display: grid;
            gap: 10px;
            margin: 0;
        }

        .summaryList li {
            display: flex;
            align-items: center;
            gap: 10px;
            color: var(--color-text-secondary);
            font-size: 14px;
        }

        .dot {
            width: 8px;
            height: 8px;
            border-radius: 999px;
            background: var(--color-text-primary);
            flex: 0 0 auto;
        }

        @media (max-width: 860px) {
            .twoCol {
                grid-template-columns: 1fr;
            }
        }
    `},Kg=()=>{const[a,c]=B.useState(!1),l=()=>c(p=>!p);return e.jsxs(qg.Wrapper,{className:a?"open":"",children:[e.jsxs("button",{type:"button",className:"topicHeader",onClick:l,"aria-expanded":a,children:[e.jsx("span",{className:"chev",children:a?e.jsx(ie,{}):e.jsx(le,{})}),e.jsx("span",{className:"icon",children:e.jsx(Je,{})}),e.jsx("span",{className:"title",children:"Deprecated Elements"}),e.jsx("span",{className:"meta",children:a?"Collapse":"Expand"})]}),e.jsxs("div",{className:`topicBody ${a?"open":""}`,children:[e.jsxs("div",{className:"section",children:[e.jsx("p",{className:"p",children:"Deprecated elements are old HTML tags that you should avoid using in modern projects. Some are fully removed from the HTML standard, and some still work in browsers only for backward compatibility. The problem is that they reduce accessibility, make code harder to maintain, and mix presentation with structure."}),e.jsxs("div",{className:"note",children:[e.jsx("span",{className:"noteIcon",children:e.jsx(is,{})}),e.jsxs("div",{className:"noteText",children:[e.jsx("div",{className:"noteTitle",children:"Rule"}),e.jsx("div",{className:"noteSub",children:"Use HTML for structure and meaning, use CSS for styling, and use JavaScript for behavior."})]})]})]}),e.jsxs("div",{className:"section",children:[e.jsx("h3",{className:"h3",children:"1) font"}),e.jsxs("p",{className:"p",children:["The ",e.jsx("span",{className:"mono",children:"font"})," tag was used to set text color, size, and face directly in HTML. This is deprecated because styling belongs in CSS."]}),e.jsxs("div",{className:"twoCol",children:[e.jsxs("div",{className:"card bad",children:[e.jsx("div",{className:"cardHead",children:e.jsxs("span",{className:"badge bad",children:[e.jsx(is,{})," Avoid"]})}),e.jsx("pre",{className:"code",children:`<font color="red" size="4" face="Arial">
    Hello
</font>`})]}),e.jsxs("div",{className:"card good",children:[e.jsx("div",{className:"cardHead",children:e.jsxs("span",{className:"badge good",children:[e.jsx(se,{})," Do this"]})}),e.jsx("pre",{className:"code",children:`<p class="highlight">Hello</p>

/* CSS */
.highlight {
    color: red;
    font-size: 18px;
    font-family: Arial, sans-serif;
}`})]})]})]}),e.jsxs("div",{className:"section",children:[e.jsx("h3",{className:"h3",children:"2) center"}),e.jsxs("p",{className:"p",children:["The ",e.jsx("span",{className:"mono",children:"center"})," tag was used to center text or elements. This is deprecated because layout and alignment belong in CSS."]}),e.jsxs("div",{className:"twoCol",children:[e.jsxs("div",{className:"card bad",children:[e.jsx("div",{className:"cardHead",children:e.jsxs("span",{className:"badge bad",children:[e.jsx(is,{})," Avoid"]})}),e.jsx("pre",{className:"code",children:`<center>
    <h2>Welcome</h2>
</center>`})]}),e.jsxs("div",{className:"card good",children:[e.jsx("div",{className:"cardHead",children:e.jsxs("span",{className:"badge good",children:[e.jsx(se,{})," Do this"]})}),e.jsx("pre",{className:"code",children:`<h2 class="centerText">Welcome</h2>

/* CSS */
.centerText {
    text-align: center;
}`})]})]})]}),e.jsxs("div",{className:"section",children:[e.jsx("h3",{className:"h3",children:"3) marquee"}),e.jsxs("p",{className:"p",children:["The ",e.jsx("span",{className:"mono",children:"marquee"})," tag created scrolling text. It is not part of modern HTML standards, and it is bad for readability and accessibility."]}),e.jsxs("div",{className:"twoCol",children:[e.jsxs("div",{className:"card bad",children:[e.jsx("div",{className:"cardHead",children:e.jsxs("span",{className:"badge bad",children:[e.jsx(is,{})," Avoid"]})}),e.jsx("pre",{className:"code",children:`<marquee behavior="scroll" direction="left">
    Breaking News
</marquee>`})]}),e.jsxs("div",{className:"card good",children:[e.jsx("div",{className:"cardHead",children:e.jsxs("span",{className:"badge good",children:[e.jsx(se,{})," Do this"]})}),e.jsx("pre",{className:"code",children:`<div class="ticker" aria-label="Announcements">
    <span class="tickerText">Breaking News</span>
</div>

/* CSS (simple, controlled animation) */
.ticker {
    overflow: hidden;
    white-space: nowrap;
}
.tickerText {
    display: inline-block;
    padding-left: 100%;
    animation: scrollText 10s linear infinite;
}
@keyframes scrollText {
    0% { transform: translateX(0); }
    100% { transform: translateX(-100%); }
}`})]})]}),e.jsx("p",{className:"p hint",children:"Better alternative for important messages is a normal banner or alert instead of moving text."})]}),e.jsxs("div",{className:"section",children:[e.jsx("h3",{className:"h3",children:"4) frameset"}),e.jsxs("p",{className:"p",children:[e.jsx("span",{className:"mono",children:"frameset"})," and",e.jsx("span",{className:"mono",children:"frame"})," were used to split a page into multiple frames. This is obsolete and causes major issues with navigation, bookmarking, security, and accessibility."]}),e.jsxs("div",{className:"twoCol",children:[e.jsxs("div",{className:"card bad",children:[e.jsx("div",{className:"cardHead",children:e.jsxs("span",{className:"badge bad",children:[e.jsx(is,{})," Avoid"]})}),e.jsx("pre",{className:"code",children:`<frameset cols="25%,75%">
    <frame src="menu.html" />
    <frame src="content.html" />
</frameset>`})]}),e.jsxs("div",{className:"card good",children:[e.jsx("div",{className:"cardHead",children:e.jsxs("span",{className:"badge good",children:[e.jsx(se,{})," Do this"]})}),e.jsx("pre",{className:"code",children:`<!-- Use normal layout + CSS -->
<header>...</header>
<main class="layout">
    <aside>Menu</aside>
    <section>Content</section>
</main>

/* CSS */
.layout {
    display: grid;
    grid-template-columns: 280px 1fr;
    gap: 16px;
}`})]})]})]}),e.jsxs("div",{className:"section",children:[e.jsx("h3",{className:"h3",children:"5) applet"}),e.jsxs("p",{className:"p",children:["The ",e.jsx("span",{className:"mono",children:"applet"})," tag was used to run Java applets in the browser. It is obsolete because modern browsers do not support it, and it is unsafe."]}),e.jsxs("div",{className:"twoCol",children:[e.jsxs("div",{className:"card bad",children:[e.jsx("div",{className:"cardHead",children:e.jsxs("span",{className:"badge bad",children:[e.jsx(is,{})," Avoid"]})}),e.jsx("pre",{className:"code",children:`<applet code="MyApplet.class" width="300" height="200">
</applet>`})]}),e.jsxs("div",{className:"card good",children:[e.jsx("div",{className:"cardHead",children:e.jsxs("span",{className:"badge good",children:[e.jsx(se,{})," Do this"]})}),e.jsx("pre",{className:"code",children:`<!-- Use modern web tech -->
<canvas id="demoCanvas"></canvas>

<!-- Or embed a safe, trusted source -->
<iframe
    title="Embedded content"
    src="https://example.com"
    sandbox
></iframe>`})]})]})]}),e.jsx("div",{className:"section",children:e.jsxs("div",{className:"summary",children:[e.jsx("div",{className:"summaryTitle",children:"Quick summary"}),e.jsxs("ul",{className:"summaryList",children:[e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),"Deprecated tags mix styling or old tech into HTML."]}),e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),"Use semantic HTML plus CSS for layout and styling."]}),e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),"Avoid moving text and frame based layouts."]})]})]})})]})]})},Yg={Wrapper:Q.section`
        width: 100%;
        margin-bottom: 5px;

        border: 1px solid var(--color-border);
        background: var(--color-surface);
        border-radius: 18px;
        box-shadow: 0 12px 30px var(--color-shadow);
        overflow: hidden;

        .topicHeader {
            width: 100%;
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 14px 14px;
            background: transparent;
            color: var(--color-text-primary);
            text-align: left;
        }

        .topicHeader:hover {
            background: var(--color-surface-2);
        }

        .chev {
            width: 28px;
            height: 28px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            border-radius: 10px;
            background: var(--color-bg);
            color: var(--color-text-secondary);
            flex: 0 0 auto;
        }

        .icon {
            width: 36px;
            height: 36px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            color: var(--color-text-secondary);
            font-size: 18px;
            flex: 0 0 auto;
        }

        .title {
            font-weight: 900;
            letter-spacing: 0.2px;
            flex: 1;
        }

        .meta {
            font-size: 12px;
            color: var(--color-text-muted);
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 999px;
            padding: 7px 10px;
            white-space: nowrap;
            flex: 0 0 auto;
        }

        .topicBody {
            max-height: 0px;
            overflow: hidden;
            transition: max-height 260ms ease;
            border-top: 1px solid var(--color-border);
        }

        .topicBody.open {
            max-height: 5000px;
        }

        .section {
            padding: 14px 14px;
        }

        .section + .section {
            border-top: 1px dashed var(--color-border-light);
        }

        .h3 {
            font-size: 16px;
            margin-bottom: 8px;
        }

        .p {
            margin: 0;
            color: var(--color-text-secondary);
            line-height: 1.7;
        }

        .callout {
            margin-top: 12px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 16px;
            padding: 12px;
            display: flex;
            gap: 10px;
            align-items: flex-start;
        }

        .calloutIcon {
            width: 34px;
            height: 34px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: var(--color-surface);
            color: var(--color-text-secondary);
            flex: 0 0 auto;
            margin-top: 2px;
        }

        .calloutTitle {
            font-weight: 900;
            margin-bottom: 4px;
        }

        .calloutSub {
            color: var(--color-text-secondary);
            line-height: 1.6;
            font-size: 14px;
        }

        .twoCol {
            margin-top: 12px;
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 10px;
        }

        .col {
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 16px;
            padding: 12px;
        }

        .colTop {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 10px;
        }

        .colIcon {
            width: 32px;
            height: 32px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: var(--color-surface);
            color: var(--color-text-secondary);
            flex: 0 0 auto;
        }

        .colTitle {
            font-weight: 900;
            letter-spacing: 0.2px;
        }

        .note {
            margin-top: 12px;
            border: 1px solid var(--color-border);
            background: var(--color-surface-2);
            border-radius: 16px;
            padding: 12px;
            display: flex;
            gap: 10px;
            align-items: flex-start;
        }

        .noteIcon {
            width: 34px;
            height: 34px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            color: var(--color-text-secondary);
            flex: 0 0 auto;
            margin-top: 2px;
        }

        .noteText {
            color: var(--color-text-secondary);
            line-height: 1.6;
            font-size: 14px;
        }

        .reasonGrid {
            margin-top: 12px;
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 10px;
        }

        .reason {
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 16px;
            padding: 12px;
        }

        .reasonIcon {
            width: 34px;
            height: 34px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: var(--color-surface);
            color: var(--color-text-secondary);
            margin-bottom: 10px;
        }

        .reasonTitle {
            font-weight: 900;
            margin-bottom: 4px;
        }

        .reasonSub {
            color: var(--color-text-secondary);
            line-height: 1.6;
            font-size: 14px;
        }

        .list {
            list-style: none;
            margin-top: 12px;
            display: grid;
            gap: 10px;
            padding-left: 0;
        }

        .list li {
            display: flex;
            align-items: center;
            gap: 10px;
            color: var(--color-text-secondary);
            font-size: 14px;
        }

        .dot {
            width: 8px;
            height: 8px;
            border-radius: 999px;
            background: var(--color-text-primary);
            flex: 0 0 auto;
        }

        @media (max-width: 720px) {
            .twoCol {
                grid-template-columns: 1fr;
            }

            .reasonGrid {
                grid-template-columns: 1fr;
            }
        }
    `},Jg=()=>{const[a,c]=B.useState(!1),l=()=>c(p=>!p);return e.jsxs(Yg.Wrapper,{className:`topicCard ${a?"open":""}`,children:[e.jsxs("button",{type:"button",className:"topicHeader",onClick:l,"aria-expanded":a,children:[e.jsx("span",{className:"chev",children:a?e.jsx(ie,{}):e.jsx(le,{})}),e.jsx("span",{className:"icon",children:e.jsx(uu,{})}),e.jsx("span",{className:"title",children:"HTML Living Standard"}),e.jsx("span",{className:"meta",children:a?"Collapse":"Expand"})]}),e.jsxs("div",{className:`topicBody ${a?"open":""}`,children:[e.jsxs("div",{className:"section",children:[e.jsx("h3",{className:"h3",children:'What "living standard" means'}),e.jsx("p",{className:"p",children:"A living standard means the specification is updated continuously. Instead of publishing a new big numbered version every few years, the spec changes in small updates whenever the web platform evolves. This matches how browsers actually ship features: incrementally, on their own release cycles."}),e.jsxs("div",{className:"callout",children:[e.jsx("span",{className:"calloutIcon",children:e.jsx(Qm,{})}),e.jsxs("div",{className:"calloutText",children:[e.jsx("div",{className:"calloutTitle",children:"Why this approach exists"}),e.jsx("div",{className:"calloutSub",children:"The web changes fast. A living standard tries to keep the official rules aligned with real browser behavior."})]})]})]}),e.jsxs("div",{className:"section",children:[e.jsx("h3",{className:"h3",children:"WHATWG vs W3C (in simple terms)"}),e.jsx("p",{className:"p",children:"Both WHATWG and W3C are standards organizations, but they historically had different approaches to HTML. WHATWG maintains the HTML Living Standard as a single, continuously updated document. W3C also publishes web standards, and for a long time it produced its own HTML specs as well."}),e.jsxs("div",{className:"twoCol",children:[e.jsxs("div",{className:"col",children:[e.jsxs("div",{className:"colTop",children:[e.jsx("span",{className:"colIcon",children:e.jsx(_p,{})}),e.jsx("div",{className:"colTitle",children:"WHATWG"})]}),e.jsxs("ul",{className:"list",children:[e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),"Maintains HTML as a living standard"]}),e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),"Focuses on matching browser reality"]}),e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),"One main spec, updated continuously"]})]})]}),e.jsxs("div",{className:"col",children:[e.jsxs("div",{className:"colTop",children:[e.jsx("span",{className:"colIcon",children:e.jsx(_p,{})}),e.jsx("div",{className:"colTitle",children:"W3C"})]}),e.jsxs("ul",{className:"list",children:[e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),"Publishes many web standards (HTML, CSS, Web APIs, etc.)"]}),e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),"More formal processes and recommendations"]}),e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),"Works with the web community and vendors"]})]})]})]}),e.jsxs("div",{className:"note",children:[e.jsx("span",{className:"noteIcon",children:e.jsx(Je,{})}),e.jsx("div",{className:"noteText",children:"The exact relationship between WHATWG and W3C has changed over time. For practical development, the key idea is that browsers tend to follow the WHATWG HTML Living Standard."})]})]}),e.jsxs("div",{className:"section",children:[e.jsx("h3",{className:"h3",children:"Why the spec matters"}),e.jsx("p",{className:"p",children:"Most of the time you do not need to read the spec to build websites. But the spec becomes useful when you want clarity, correctness, or confidence. It answers questions like: what does this element mean, what are the rules for parsing it, and what should browsers do in edge cases."}),e.jsxs("div",{className:"reasonGrid",children:[e.jsxs("div",{className:"reason",children:[e.jsx("span",{className:"reasonIcon",children:e.jsx(se,{})}),e.jsx("div",{className:"reasonTitle",children:"Clear rules"}),e.jsx("div",{className:"reasonSub",children:"Removes guesswork about what is valid and how browsers interpret markup."})]}),e.jsxs("div",{className:"reason",children:[e.jsx("span",{className:"reasonIcon",children:e.jsx(se,{})}),e.jsx("div",{className:"reasonTitle",children:"Better debugging"}),e.jsx("div",{className:"reasonSub",children:"Helps you understand weird behaviors when the DOM does not look like you expected."})]}),e.jsxs("div",{className:"reason",children:[e.jsx("span",{className:"reasonIcon",children:e.jsx(se,{})}),e.jsx("div",{className:"reasonTitle",children:"Accessibility and semantics"}),e.jsx("div",{className:"reasonSub",children:"Helps you pick the right element and structure for meaning, not just appearance."})]}),e.jsxs("div",{className:"reason",children:[e.jsx("span",{className:"reasonIcon",children:e.jsx(se,{})}),e.jsx("div",{className:"reasonTitle",children:"Future-proofing"}),e.jsx("div",{className:"reasonSub",children:"You get a better sense of what is stable, what is experimental, and what will be supported."})]})]})]}),e.jsxs("div",{className:"section",children:[e.jsx("h3",{className:"h3",children:"When should a beginner care"}),e.jsx("p",{className:"p",children:"You should care about the spec when you hit confusion. If a tutorial conflicts with another tutorial, the spec is the most neutral source of truth. Also, if you want to understand HTML beyond copy paste, the spec gives you the mental model behind the platform."}),e.jsxs("ul",{className:"list",children:[e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),"When something works differently in different browsers"]}),e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),"When markup behaves strangely after rendering"]}),e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),'When you want the "why" behind the rule']})]})]}),e.jsxs("div",{className:"section",children:[e.jsx("h3",{className:"h3",children:"Practical takeaway"}),e.jsx("p",{className:"p",children:"Learn the core HTML elements and semantics first. Use MDN for day-to-day reference. When you want deeper clarity, the HTML Living Standard is the detailed rule book that browser engineers use to keep behavior consistent."})]})]})]})},Xg={Wrapper:Q.section`
        width: 100%;
        margin-bottom: 5px;
        border: 1px solid var(--color-border);
        background: var(--color-surface);
        border-radius: 18px;
        box-shadow: 0 12px 30px var(--color-shadow);
        overflow: hidden;

        .topicHeader {
            width: 100%;
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 14px;
            background: transparent;
            color: var(--color-text-primary);
            text-align: left;
        }

        .topicHeader:hover {
            background: var(--color-surface-2);
        }

        .chev {
            width: 28px;
            height: 28px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            border-radius: 10px;
            background: var(--color-bg);
            color: var(--color-text-secondary);
            flex: 0 0 auto;
        }

        .icon {
            width: 36px;
            height: 36px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            color: var(--color-text-secondary);
            font-size: 18px;
            flex: 0 0 auto;
        }

        .title {
            font-weight: 900;
            letter-spacing: 0.2px;
            flex: 1;
        }

        .meta {
            font-size: 12px;
            color: var(--color-text-muted);
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 999px;
            padding: 7px 10px;
            white-space: nowrap;
            flex: 0 0 auto;
        }

        .topicBody {
            max-height: 0px;
            overflow: hidden;
            transition: max-height 260ms ease;
            border-top: 1px solid var(--color-border);
        }

        .topicBody.open {
            max-height: 6000px;
        }

        .section {
            padding: 14px 14px;
        }

        .section + .section {
            border-top: 1px dashed var(--color-border-light);
        }

        .h3Row {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 8px;
        }

        .h3Icon {
            width: 30px;
            height: 30px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            color: var(--color-text-secondary);
            flex: 0 0 auto;
        }

        .h3 {
            font-size: 16px;
            margin: 0;
        }

        .p {
            margin: 0;
            color: var(--color-text-secondary);
            line-height: 1.7;
        }

        .tips {
            margin-top: 12px;
            display: grid;
            gap: 10px;
        }

        .tip {
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 14px;
            padding: 12px;
            display: flex;
            align-items: center;
            gap: 10px;
        }

        .tipIcon {
            width: 32px;
            height: 32px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: var(--color-surface);
            flex: 0 0 auto;
        }

        .tipIcon.ok {
            color: var(--color-text-primary);
        }

        .tipIcon.warn {
            color: var(--color-text-primary);
        }

        .tipText {
            color: var(--color-text-secondary);
            font-size: 14px;
            line-height: 1.4;
        }

        .bullets {
            list-style: none;
            margin-top: 12px;
            display: grid;
            gap: 10px;
            padding-left: 0;
        }

        .bullets li {
            display: flex;
            align-items: center;
            gap: 10px;
            color: var(--color-text-secondary);
            font-size: 14px;
        }

        .dot {
            width: 8px;
            height: 8px;
            border-radius: 999px;
            background: var(--color-text-primary);
            flex: 0 0 auto;
        }

        .codeBlock {
            margin-top: 12px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 14px;
            overflow: hidden;
        }

        .codeTitle {
            padding: 10px 12px;
            border-bottom: 1px solid var(--color-border);
            color: var(--color-text-secondary);
            font-size: 12px;
            font-weight: 800;
            letter-spacing: 0.2px;
        }

        .code {
            margin: 0;
            padding: 12px;
            color: var(--color-text-secondary);
            font-size: 13px;
            line-height: 1.6;
            overflow: auto;
            white-space: pre;
            font-family:
                ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                "Liberation Mono", "Courier New", monospace;
        }

        .note {
            margin-top: 12px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 14px;
            padding: 12px;
            display: flex;
            gap: 10px;
            align-items: flex-start;
        }

        .noteIcon {
            width: 32px;
            height: 32px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: var(--color-surface);
            color: var(--color-text-primary);
            flex: 0 0 auto;
        }

        .noteText {
            color: var(--color-text-secondary);
            font-size: 14px;
            line-height: 1.5;
        }

        .checkGrid {
            margin-top: 12px;
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 10px;
        }

        .check {
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 14px;
            padding: 12px;
            display: flex;
            align-items: center;
            gap: 10px;
            color: var(--color-text-secondary);
            font-size: 14px;
            font-weight: 700;
        }

        .checkIcon {
            width: 32px;
            height: 32px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: var(--color-surface);
            color: var(--color-text-primary);
            flex: 0 0 auto;
        }

        @media (max-width: 720px) {
            .checkGrid {
                grid-template-columns: 1fr;
            }
        }
    `},Zg=()=>{const[a,c]=B.useState(!1),l=()=>c(p=>!p);return e.jsxs(Xg.Wrapper,{className:`topicCard ${a?"open":""}`,children:[e.jsxs("button",{type:"button",className:"topicHeader",onClick:l,"aria-expanded":a,children:[e.jsx("span",{className:"chev",children:a?e.jsx(ie,{}):e.jsx(le,{})}),e.jsx("span",{className:"icon",children:e.jsx(xf,{})}),e.jsx("span",{className:"title",children:"SEO fundamentals"}),e.jsx("span",{className:"meta",children:a?"Collapse":"Expand"})]}),e.jsxs("div",{className:`topicBody ${a?"open":""}`,children:[e.jsxs("div",{className:"section",children:[e.jsx("h3",{className:"h3",children:"What SEO means in HTML"}),e.jsx("p",{className:"p",children:"SEO means making your pages easy to understand for both humans and search engines. In HTML, the biggest SEO wins come from clean structure, correct headings, and useful metadata. Search engines read your HTML, try to understand what the page is about, and then decide how to show it in results."}),e.jsxs("div",{className:"tips",children:[e.jsxs("div",{className:"tip",children:[e.jsx("span",{className:"tipIcon ok",children:e.jsx(se,{})}),e.jsx("div",{className:"tipText",children:"Use semantic tags and a clear page structure"})]}),e.jsxs("div",{className:"tip",children:[e.jsx("span",{className:"tipIcon ok",children:e.jsx(se,{})}),e.jsx("div",{className:"tipText",children:"Write a helpful title and meta description"})]}),e.jsxs("div",{className:"tip",children:[e.jsx("span",{className:"tipIcon warn",children:e.jsx(Je,{})}),e.jsx("div",{className:"tipText",children:"Avoid multiple h1 and random heading jumps"})]})]})]}),e.jsxs("div",{className:"section",children:[e.jsxs("div",{className:"h3Row",children:[e.jsx("span",{className:"h3Icon",children:e.jsx(uo,{})}),e.jsx("h3",{className:"h3",children:"Semantic headings"})]}),e.jsx("p",{className:"p",children:"Headings are one of the strongest signals about content structure. Use them like an outline. h1 is the main page topic. h2 are major sections. h3 are subsections, and so on. Headings help users scan the page and help search engines understand what is important."}),e.jsxs("ul",{className:"bullets",children:[e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),"Use one clear h1 per page (recommended)"]}),e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),"Do not skip levels without a reason (h2 to h4)"]}),e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),"Do not use headings only for styling"]})]}),e.jsxs("div",{className:"codeBlock",children:[e.jsx("div",{className:"codeTitle",children:"Example structure"}),e.jsx("pre",{className:"code",children:`<h1>HTML Core Notes</h1>

<section>
  <h2>Forms</h2>
  <h3>Input types</h3>
  <h3>Validation</h3>
</section>

<section>
  <h2>Tables</h2>
  <h3>thead, tbody, tfoot</h3>
</section>`})]})]}),e.jsxs("div",{className:"section",children:[e.jsxs("div",{className:"h3Row",children:[e.jsx("span",{className:"h3Icon",children:e.jsx(hl,{})}),e.jsx("h3",{className:"h3",children:"Meta description"})]}),e.jsx("p",{className:"p",children:"The meta description is a short summary of the page. It often appears in Google results under the title. It does not directly guarantee better ranking, but it strongly affects clicks. A good description makes the page look relevant and trustworthy."}),e.jsxs("ul",{className:"bullets",children:[e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),"Keep it clear and specific"]}),e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),"Usually around 140 to 160 characters is a good target"]}),e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),"Make it unique per page"]})]}),e.jsxs("div",{className:"codeBlock",children:[e.jsx("div",{className:"codeTitle",children:"Example"}),e.jsx("pre",{className:"code",children:`<head>
  <title>HTML Core Notes</title>
  <meta
    name="description"
    content="At-a-glance HTML revision notes with clean examples for beginners and interviews."
  />
</head>`})]})]}),e.jsxs("div",{className:"section",children:[e.jsxs("div",{className:"h3Row",children:[e.jsx("span",{className:"h3Icon",children:e.jsx(lf,{})}),e.jsx("h3",{className:"h3",children:"Open Graph basics"})]}),e.jsx("p",{className:"p",children:"Open Graph meta tags control how your page looks when someone shares it on platforms like WhatsApp, Facebook, LinkedIn, and other apps. Without Open Graph, the platform guesses. With Open Graph, you define the title, description, image, and the URL."}),e.jsxs("ul",{className:"bullets",children:[e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),"og:title is the share title"]}),e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),"og:description is the share summary"]}),e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),"og:image is the preview image"]}),e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),"og:url is the canonical link for sharing"]})]}),e.jsxs("div",{className:"codeBlock",children:[e.jsx("div",{className:"codeTitle",children:"Minimal Open Graph set"}),e.jsx("pre",{className:"code",children:`<head>
  <meta property="og:type" content="website" />
  <meta property="og:title" content="HTML Core Notes" />
  <meta property="og:description" content="At-a-glance HTML revision notes." />
  <meta property="og:image" content="https://your-site.com/og-image.png" />
  <meta property="og:url" content="https://your-site.com/html-core-notes/" />
</head>`})]}),e.jsxs("div",{className:"note",children:[e.jsx("span",{className:"noteIcon",children:e.jsx(Je,{})}),e.jsx("div",{className:"noteText",children:"Tip: Use a proper image size for sharing previews. Many platforms work best with 1200x630 images."})]})]}),e.jsxs("div",{className:"section",children:[e.jsx("h3",{className:"h3",children:"Quick checklist"}),e.jsxs("div",{className:"checkGrid",children:[e.jsxs("div",{className:"check",children:[e.jsx("span",{className:"checkIcon",children:e.jsx(se,{})}),"One clear h1"]}),e.jsxs("div",{className:"check",children:[e.jsx("span",{className:"checkIcon",children:e.jsx(se,{})}),"Logical heading order"]}),e.jsxs("div",{className:"check",children:[e.jsx("span",{className:"checkIcon",children:e.jsx(se,{})}),"Unique meta description"]}),e.jsxs("div",{className:"check",children:[e.jsx("span",{className:"checkIcon",children:e.jsx(se,{})}),"Open Graph tags set"]})]})]})]})]})},ev={Wrapper:Q.section`
        width: 100%;
        margin-bottom: 5px;
        border: 1px solid var(--color-border);
        background: var(--color-surface);
        border-radius: 18px;
        box-shadow: 0 12px 30px var(--color-shadow);
        overflow: hidden;

        .topicHeader {
            width: 100%;
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 14px 14px;
            background: transparent;
            color: var(--color-text-primary);
            text-align: left;
        }

        .topicHeader:hover {
            background: var(--color-surface-2);
        }

        .chev {
            width: 28px;
            height: 28px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            border-radius: 10px;
            background: var(--color-bg);
            color: var(--color-text-secondary);
            flex: 0 0 auto;
        }

        .icon {
            width: 36px;
            height: 36px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            color: var(--color-text-secondary);
            font-size: 18px;
            flex: 0 0 auto;
        }

        .title {
            font-weight: 900;
            letter-spacing: 0.2px;
            flex: 1;
        }

        .meta {
            font-size: 12px;
            color: var(--color-text-muted);
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 999px;
            padding: 7px 10px;
            white-space: nowrap;
            flex: 0 0 auto;
        }

        .topicBody {
            max-height: 0px;
            overflow: hidden;
            transition: max-height 260ms ease;
            border-top: 1px solid var(--color-border);
        }

        .topicBody.open {
            max-height: 6000px;
        }

        .intro {
            padding: 14px 14px;
            display: grid;
            grid-template-columns: 1.2fr 0.8fr;
            gap: 12px;
            border-bottom: 1px dashed var(--color-border-light);
            background: linear-gradient(
                180deg,
                var(--color-surface),
                var(--color-surface-2)
            );
        }

        .pill {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 999px;
            padding: 7px 10px;
            color: var(--color-text-secondary);
            font-size: 12px;
            margin-bottom: 10px;
        }

        .pillIcon {
            display: grid;
            place-items: center;
            color: var(--color-text-primary);
        }

        .introRight {
            display: grid;
            gap: 10px;
        }

        .mini {
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 14px;
            padding: 12px;
            display: flex;
            gap: 10px;
            align-items: center;
        }

        .miniIcon {
            width: 34px;
            height: 34px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: var(--color-surface);
            color: var(--color-text-secondary);
            flex: 0 0 auto;
        }

        .miniTitle {
            font-weight: 900;
            font-size: 13px;
        }

        .miniSub {
            font-size: 12px;
            color: var(--color-text-muted);
            margin-top: 2px;
        }

        .section {
            padding: 14px 14px;
        }

        .section + .section {
            border-top: 1px dashed var(--color-border-light);
        }

        .h3 {
            font-size: 16px;
            margin-bottom: 8px;
        }

        .h4 {
            font-size: 14px;
            margin: 14px 0 8px 0;
            color: var(--color-text-primary);
        }

        .p {
            margin: 0;
            color: var(--color-text-secondary);
            line-height: 1.7;
        }

        .muted {
            margin-top: 12px;
            color: var(--color-text-muted);
        }

        .sectionSub {
            margin-top: 10px;
        }

        .bullets {
            list-style: none;
            margin-top: 10px;
            display: grid;
            gap: 10px;
            padding-left: 0;
        }

        .bullets li {
            display: flex;
            align-items: flex-start;
            gap: 10px;
            color: var(--color-text-secondary);
            font-size: 14px;
            line-height: 1.6;
        }

        .dot {
            width: 8px;
            height: 8px;
            border-radius: 999px;
            background: var(--color-text-primary);
            flex: 0 0 auto;
            margin-top: 7px;
        }

        .callout {
            margin-top: 12px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 16px;
            padding: 12px;
        }

        .calloutTitle {
            display: flex;
            align-items: center;
            gap: 10px;
            font-weight: 900;
            margin-bottom: 8px;
            color: var(--color-text-primary);
        }

        .calloutIcon {
            width: 30px;
            height: 30px;
            border-radius: 12px;
            border: 1px solid var(--color-border);
            background: var(--color-surface);
            display: grid;
            place-items: center;
            color: var(--color-text-secondary);
        }

        .calloutText {
            color: var(--color-text-secondary);
            line-height: 1.7;
            font-size: 14px;
        }

        .codeBlock {
            margin-top: 12px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 16px;
            overflow: hidden;
        }

        .codeTop {
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 10px 12px;
            border-bottom: 1px solid var(--color-border);
            color: var(--color-text-secondary);
            font-weight: 800;
            font-size: 12px;
            letter-spacing: 0.2px;
            background: var(--color-surface);
        }

        .codeIcon {
            display: grid;
            place-items: center;
            color: var(--color-text-primary);
            font-size: 14px;
        }

        .code {
            margin: 0;
            padding: 12px;
            font-size: 13px;
            line-height: 1.6;
            color: var(--color-text-secondary);
            overflow-x: auto;
            white-space: pre;
        }

        .footerNote {
            padding: 14px 14px;
            border-top: 1px solid var(--color-border);
            background: var(--color-surface-2);
        }

        .footerTitle {
            font-weight: 900;
            margin-bottom: 10px;
            color: var(--color-text-primary);
        }

        .checks {
            list-style: none;
            padding-left: 0;
            display: grid;
            gap: 10px;
            margin: 0;
        }

        .checks li {
            display: flex;
            align-items: center;
            gap: 10px;
            color: var(--color-text-secondary);
            font-size: 14px;
        }

        .checkDot {
            width: 10px;
            height: 10px;
            border-radius: 999px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            box-shadow: inset 0 0 0 2px var(--color-text-primary);
            flex: 0 0 auto;
        }

        @media (max-width: 820px) {
            .intro {
                grid-template-columns: 1fr;
            }
        }
    `},rv=()=>{const[a,c]=B.useState(!1),l=()=>c(p=>!p);return e.jsxs(ev.Wrapper,{className:`topicCard ${a?"open":""}`,children:[e.jsxs("button",{type:"button",className:"topicHeader",onClick:l,"aria-expanded":a,children:[e.jsx("span",{className:"chev",children:a?e.jsx(ie,{}):e.jsx(le,{})}),e.jsx("span",{className:"icon",children:e.jsx(Ht,{})}),e.jsx("span",{className:"title",children:"Security basics"}),e.jsx("span",{className:"meta",children:a?"Collapse":"Expand"})]}),e.jsxs("div",{className:`topicBody ${a?"open":""}`,children:[e.jsxs("div",{className:"intro",children:[e.jsxs("div",{className:"introLeft",children:[e.jsxs("div",{className:"pill",children:[e.jsx("span",{className:"pillIcon",children:e.jsx(io,{})}),"Safe HTML habits"]}),e.jsx("p",{className:"p",children:"HTML is not just about structure. The way you use links and embeds can create security problems. This topic covers three practical basics that come up often in real websites."})]}),e.jsxs("div",{className:"introRight",children:[e.jsxs("div",{className:"mini",children:[e.jsx("span",{className:"miniIcon",children:e.jsx(Je,{})}),e.jsxs("div",{className:"miniText",children:[e.jsx("div",{className:"miniTitle",children:"XSS"}),e.jsx("div",{className:"miniSub",children:"Injected scripts"})]})]}),e.jsxs("div",{className:"mini",children:[e.jsx("span",{className:"miniIcon",children:e.jsx(cs,{})}),e.jsxs("div",{className:"miniText",children:[e.jsx("div",{className:"miniTitle",children:"noopener"}),e.jsx("div",{className:"miniSub",children:"Safer new tabs"})]})]}),e.jsxs("div",{className:"mini",children:[e.jsx("span",{className:"miniIcon",children:e.jsx(io,{})}),e.jsxs("div",{className:"miniText",children:[e.jsx("div",{className:"miniTitle",children:"sandbox"}),e.jsx("div",{className:"miniSub",children:"Safer iframes"})]})]})]})]}),e.jsxs("div",{className:"section",children:[e.jsx("h3",{className:"h3",children:"1) XSS concept"}),e.jsx("p",{className:"p",children:"XSS means Cross Site Scripting. It happens when an attacker manages to inject JavaScript into a page that other users visit. The browser runs that injected code as if it came from your site, which can lead to stolen cookies, account takeover, or fake UI prompts."}),e.jsxs("div",{className:"callout",children:[e.jsxs("div",{className:"calloutTitle",children:[e.jsx("span",{className:"calloutIcon",children:e.jsx(Je,{})}),"The core idea"]}),e.jsx("div",{className:"calloutText",children:"If user input becomes part of HTML without proper escaping or sanitization, the user input can turn into executable script."})]}),e.jsxs("div",{className:"sectionSub",children:[e.jsx("h4",{className:"h4",children:"Common places XSS sneaks in"}),e.jsxs("ul",{className:"bullets",children:[e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),"Comments, reviews, usernames, profile fields"]}),e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),"Search results, query params, dynamic templates"]}),e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),"Using innerHTML with untrusted data"]})]})]}),e.jsxs("div",{className:"sectionSub",children:[e.jsx("h4",{className:"h4",children:"How to reduce risk"}),e.jsxs("ul",{className:"bullets",children:[e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),"Escape output when inserting user text into HTML"]}),e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),"Avoid rendering raw HTML from users"]}),e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),"Use safe templating and frameworks that escape by default"]}),e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),"Add Content Security Policy later when backend exists"]})]})]}),e.jsxs("div",{className:"codeBlock",children:[e.jsxs("div",{className:"codeTop",children:[e.jsx("span",{className:"codeIcon",children:e.jsx(Me,{})}),"Bad vs safer pattern"]}),e.jsx("pre",{className:"code",children:`// Bad: untrusted string becomes HTML
element.innerHTML = userInput;

// Safer: treat it as text, not markup
element.textContent = userInput;`})]})]}),e.jsxs("div",{className:"section",children:[e.jsx("h3",{className:"h3",children:'2) rel="noopener" (and why it matters)'}),e.jsx("p",{className:"p",children:'When you open a link in a new tab using target="_blank", the opened page can sometimes access window.opener. That means the new page may be able to redirect the original page to a phishing site or modify it in risky ways.'}),e.jsxs("div",{className:"callout",children:[e.jsxs("div",{className:"calloutTitle",children:[e.jsx("span",{className:"calloutIcon",children:e.jsx(cs,{})}),"The fix"]}),e.jsx("div",{className:"calloutText",children:'Add rel="noopener" to break the connection between the new tab and your page.'})]}),e.jsxs("div",{className:"codeBlock",children:[e.jsxs("div",{className:"codeTop",children:[e.jsx("span",{className:"codeIcon",children:e.jsx(Me,{})}),"Recommended external link"]}),e.jsx("pre",{className:"code",children:`<a
  href="https://example.com"
  target="_blank"
  rel="noopener noreferrer"
>
  Visit example
</a>`})]}),e.jsx("p",{className:"p muted",children:'Note: rel="noreferrer" also removes the referrer header in many cases. In practice, people commonly use both: noopener noreferrer.'})]}),e.jsxs("div",{className:"section",children:[e.jsx("h3",{className:"h3",children:"3) sandbox iframe"}),e.jsx("p",{className:"p",children:"iframes embed another page inside your page. That can be risky because the embedded page might run scripts, attempt navigation, open popups, or request permissions. The sandbox attribute restricts what the iframe is allowed to do."}),e.jsxs("div",{className:"callout",children:[e.jsxs("div",{className:"calloutTitle",children:[e.jsx("span",{className:"calloutIcon",children:e.jsx(io,{})}),"Default behavior"]}),e.jsx("div",{className:"calloutText",children:"sandbox without any values applies strong restrictions. You then opt in only to the minimum permissions needed."})]}),e.jsxs("div",{className:"sectionSub",children:[e.jsx("h4",{className:"h4",children:"Common sandbox tokens"}),e.jsxs("ul",{className:"bullets",children:[e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),"allow-scripts: lets scripts run in the iframe"]}),e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),"allow-forms: allows form submission"]}),e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),"allow-same-origin: treats content as same origin (use carefully)"]}),e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),"allow-popups: allows opening new windows"]})]})]}),e.jsxs("div",{className:"codeBlock",children:[e.jsxs("div",{className:"codeTop",children:[e.jsx("span",{className:"codeIcon",children:e.jsx(Me,{})}),"Safer embed example"]}),e.jsx("pre",{className:"code",children:`<iframe
  src="https://example.com/embed"
  title="Embedded content"
  sandbox="allow-scripts allow-forms"
  referrerpolicy="no-referrer"
></iframe>`})]}),e.jsx("p",{className:"p muted",children:"Tip: Keep iframe permissions tight. Add only what you need. For untrusted content, start with sandbox and gradually allow features."})]}),e.jsxs("div",{className:"footerNote",children:[e.jsx("div",{className:"footerTitle",children:"Quick checklist"}),e.jsxs("ul",{className:"checks",children:[e.jsxs("li",{children:[e.jsx("span",{className:"checkDot"}),"Treat user input as text, not HTML"]}),e.jsxs("li",{children:[e.jsx("span",{className:"checkDot"}),'Use rel="noopener noreferrer" with target="_blank"']}),e.jsxs("li",{children:[e.jsx("span",{className:"checkDot"}),"Use sandbox for embedded iframes"]})]})]})]})]})},tv=()=>e.jsxs(Ki.Wrapper,{children:[e.jsx(Ki.Header,{children:e.jsx(vf,{})}),e.jsxs(Ki.Main,{id:"notes-main",children:[e.jsxs("div",{className:"contentWrapper",children:[e.jsx(Lf,{}),e.jsx("h1",{className:"category",id:"foundation",children:"Foundation"}),e.jsx(If,{}),e.jsx(Mf,{}),e.jsx(Hf,{}),e.jsx(_f,{}),e.jsx("h1",{className:"category",id:"text-content",children:"Text Content"}),e.jsx(Rf,{}),e.jsx(Af,{}),e.jsx(Df,{}),e.jsx("h1",{className:"category",children:"Links and Navigations"}),e.jsx($f,{}),e.jsx(Gf,{}),e.jsx("h1",{className:"category",children:"Media and Embedded Content"}),e.jsx(qf,{}),e.jsx(Yf,{}),e.jsx(Xf,{}),e.jsx(eg,{}),e.jsx("h1",{className:"category",children:"Structure and Semantics"}),e.jsx(sg,{}),e.jsx(ag,{}),e.jsx(ig,{}),e.jsx(cg,{}),e.jsx("h1",{className:"category",children:"Tables"}),e.jsx(pg,{}),e.jsx("h1",{className:"category",id:"forms",children:"Forms"}),e.jsx(hg,{}),e.jsx(mg,{}),e.jsx(gg,{}),e.jsx(yg,{}),e.jsx(bg,{}),e.jsx("h1",{className:"category",children:"Meta Data"}),e.jsx(kg,{}),e.jsx(Tg,{}),e.jsx(Lg,{}),e.jsx("h1",{className:"category",children:"Scripts and Performance"}),e.jsx(Ig,{}),e.jsx(Mg,{}),e.jsx("h1",{className:"category",children:"Accessibility"}),e.jsx(Hg,{}),e.jsx(_g,{}),e.jsx(Fg,{}),e.jsx("h1",{className:"category",id:"advanced",children:"Advanced"}),e.jsx(Wg,{}),e.jsx(Ug,{}),e.jsx(Vg,{}),e.jsx(Qg,{}),e.jsx(Kg,{}),e.jsx(Jg,{}),e.jsx(Zg,{}),e.jsx(rv,{})]}),e.jsx("div",{className:"footerWrapper",children:e.jsx(Sf,{})})]}),e.jsx(Tf,{})]});Tx.createRoot(document.getElementById("root")).render(e.jsx(e.Fragment,{children:e.jsx(tv,{})}));

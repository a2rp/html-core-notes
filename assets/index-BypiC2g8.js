(function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const h of document.querySelectorAll('link[rel="modulepreload"]'))p(h);new MutationObserver(h=>{for(const f of h)if(f.type==="childList")for(const b of f.addedNodes)b.tagName==="LINK"&&b.rel==="modulepreload"&&p(b)}).observe(document,{childList:!0,subtree:!0});function l(h){const f={};return h.integrity&&(f.integrity=h.integrity),h.referrerPolicy&&(f.referrerPolicy=h.referrerPolicy),h.crossOrigin==="use-credentials"?f.credentials="include":h.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function p(h){if(h.ep)return;h.ep=!0;const f=l(h);fetch(h.href,f)}})();function jx(a){return a&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a}var Wi={exports:{}},io={},Di={exports:{}},pe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pp;function bx(){if(pp)return pe;pp=1;var a=Symbol.for("react.element"),c=Symbol.for("react.portal"),l=Symbol.for("react.fragment"),p=Symbol.for("react.strict_mode"),h=Symbol.for("react.profiler"),f=Symbol.for("react.provider"),b=Symbol.for("react.context"),C=Symbol.for("react.forward_ref"),k=Symbol.for("react.suspense"),A=Symbol.for("react.memo"),W=Symbol.for("react.lazy"),R=Symbol.iterator;function Q(g){return g===null||typeof g!="object"?null:(g=R&&g[R]||g["@@iterator"],typeof g=="function"?g:null)}var X={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Z=Object.assign,G={};function D(g,N,oe){this.props=g,this.context=N,this.refs=G,this.updater=oe||X}D.prototype.isReactComponent={},D.prototype.setState=function(g,N){if(typeof g!="object"&&typeof g!="function"&&g!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,g,N,"setState")},D.prototype.forceUpdate=function(g){this.updater.enqueueForceUpdate(this,g,"forceUpdate")};function le(){}le.prototype=D.prototype;function se(g,N,oe){this.props=g,this.context=N,this.refs=G,this.updater=oe||X}var re=se.prototype=new le;re.constructor=se,Z(re,D.prototype),re.isPureReactComponent=!0;var E=Array.isArray,te=Object.prototype.hasOwnProperty,q={current:null},M={key:!0,ref:!0,__self:!0,__source:!0};function U(g,N,oe){var ne,xe={},ue=null,fe=null;if(N!=null)for(ne in N.ref!==void 0&&(fe=N.ref),N.key!==void 0&&(ue=""+N.key),N)te.call(N,ne)&&!M.hasOwnProperty(ne)&&(xe[ne]=N[ne]);var me=arguments.length-2;if(me===1)xe.children=oe;else if(1<me){for(var je=Array(me),Ie=0;Ie<me;Ie++)je[Ie]=arguments[Ie+2];xe.children=je}if(g&&g.defaultProps)for(ne in me=g.defaultProps,me)xe[ne]===void 0&&(xe[ne]=me[ne]);return{$$typeof:a,type:g,key:ue,ref:fe,props:xe,_owner:q.current}}function Ne(g,N){return{$$typeof:a,type:g.type,key:N,ref:g.ref,props:g.props,_owner:g._owner}}function He(g){return typeof g=="object"&&g!==null&&g.$$typeof===a}function he(g){var N={"=":"=0",":":"=2"};return"$"+g.replace(/[=:]/g,function(oe){return N[oe]})}var Be=/\/+/g;function Le(g,N){return typeof g=="object"&&g!==null&&g.key!=null?he(""+g.key):N.toString(36)}function Je(g,N,oe,ne,xe){var ue=typeof g;(ue==="undefined"||ue==="boolean")&&(g=null);var fe=!1;if(g===null)fe=!0;else switch(ue){case"string":case"number":fe=!0;break;case"object":switch(g.$$typeof){case a:case c:fe=!0}}if(fe)return fe=g,xe=xe(fe),g=ne===""?"."+Le(fe,0):ne,E(xe)?(oe="",g!=null&&(oe=g.replace(Be,"$&/")+"/"),Je(xe,N,oe,"",function(Ie){return Ie})):xe!=null&&(He(xe)&&(xe=Ne(xe,oe+(!xe.key||fe&&fe.key===xe.key?"":(""+xe.key).replace(Be,"$&/")+"/")+g)),N.push(xe)),1;if(fe=0,ne=ne===""?".":ne+":",E(g))for(var me=0;me<g.length;me++){ue=g[me];var je=ne+Le(ue,me);fe+=Je(ue,N,oe,je,xe)}else if(je=Q(g),typeof je=="function")for(g=je.call(g),me=0;!(ue=g.next()).done;)ue=ue.value,je=ne+Le(ue,me++),fe+=Je(ue,N,oe,je,xe);else if(ue==="object")throw N=String(g),Error("Objects are not valid as a React child (found: "+(N==="[object Object]"?"object with keys {"+Object.keys(g).join(", ")+"}":N)+"). If you meant to render a collection of children, use an array instead.");return fe}function or(g,N,oe){if(g==null)return g;var ne=[],xe=0;return Je(g,ne,"","",function(ue){return N.call(oe,ue,xe++)}),ne}function Xe(g){if(g._status===-1){var N=g._result;N=N(),N.then(function(oe){(g._status===0||g._status===-1)&&(g._status=1,g._result=oe)},function(oe){(g._status===0||g._status===-1)&&(g._status=2,g._result=oe)}),g._status===-1&&(g._status=0,g._result=N)}if(g._status===1)return g._result.default;throw g._result}var we={current:null},I={transition:null},V={ReactCurrentDispatcher:we,ReactCurrentBatchConfig:I,ReactCurrentOwner:q};function B(){throw Error("act(...) is not supported in production builds of React.")}return pe.Children={map:or,forEach:function(g,N,oe){or(g,function(){N.apply(this,arguments)},oe)},count:function(g){var N=0;return or(g,function(){N++}),N},toArray:function(g){return or(g,function(N){return N})||[]},only:function(g){if(!He(g))throw Error("React.Children.only expected to receive a single React element child.");return g}},pe.Component=D,pe.Fragment=l,pe.Profiler=h,pe.PureComponent=se,pe.StrictMode=p,pe.Suspense=k,pe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=V,pe.act=B,pe.cloneElement=function(g,N,oe){if(g==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+g+".");var ne=Z({},g.props),xe=g.key,ue=g.ref,fe=g._owner;if(N!=null){if(N.ref!==void 0&&(ue=N.ref,fe=q.current),N.key!==void 0&&(xe=""+N.key),g.type&&g.type.defaultProps)var me=g.type.defaultProps;for(je in N)te.call(N,je)&&!M.hasOwnProperty(je)&&(ne[je]=N[je]===void 0&&me!==void 0?me[je]:N[je])}var je=arguments.length-2;if(je===1)ne.children=oe;else if(1<je){me=Array(je);for(var Ie=0;Ie<je;Ie++)me[Ie]=arguments[Ie+2];ne.children=me}return{$$typeof:a,type:g.type,key:xe,ref:ue,props:ne,_owner:fe}},pe.createContext=function(g){return g={$$typeof:b,_currentValue:g,_currentValue2:g,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},g.Provider={$$typeof:f,_context:g},g.Consumer=g},pe.createElement=U,pe.createFactory=function(g){var N=U.bind(null,g);return N.type=g,N},pe.createRef=function(){return{current:null}},pe.forwardRef=function(g){return{$$typeof:C,render:g}},pe.isValidElement=He,pe.lazy=function(g){return{$$typeof:W,_payload:{_status:-1,_result:g},_init:Xe}},pe.memo=function(g,N){return{$$typeof:A,type:g,compare:N===void 0?null:N}},pe.startTransition=function(g){var N=I.transition;I.transition={};try{g()}finally{I.transition=N}},pe.unstable_act=B,pe.useCallback=function(g,N){return we.current.useCallback(g,N)},pe.useContext=function(g){return we.current.useContext(g)},pe.useDebugValue=function(){},pe.useDeferredValue=function(g){return we.current.useDeferredValue(g)},pe.useEffect=function(g,N){return we.current.useEffect(g,N)},pe.useId=function(){return we.current.useId()},pe.useImperativeHandle=function(g,N,oe){return we.current.useImperativeHandle(g,N,oe)},pe.useInsertionEffect=function(g,N){return we.current.useInsertionEffect(g,N)},pe.useLayoutEffect=function(g,N){return we.current.useLayoutEffect(g,N)},pe.useMemo=function(g,N){return we.current.useMemo(g,N)},pe.useReducer=function(g,N,oe){return we.current.useReducer(g,N,oe)},pe.useRef=function(g){return we.current.useRef(g)},pe.useState=function(g){return we.current.useState(g)},pe.useSyncExternalStore=function(g,N,oe){return we.current.useSyncExternalStore(g,N,oe)},pe.useTransition=function(){return we.current.useTransition()},pe.version="18.3.1",pe}var up;function ll(){return up||(up=1,Di.exports=bx()),Di.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hp;function Nx(){if(hp)return io;hp=1;var a=ll(),c=Symbol.for("react.element"),l=Symbol.for("react.fragment"),p=Object.prototype.hasOwnProperty,h=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,f={key:!0,ref:!0,__self:!0,__source:!0};function b(C,k,A){var W,R={},Q=null,X=null;A!==void 0&&(Q=""+A),k.key!==void 0&&(Q=""+k.key),k.ref!==void 0&&(X=k.ref);for(W in k)p.call(k,W)&&!f.hasOwnProperty(W)&&(R[W]=k[W]);if(C&&C.defaultProps)for(W in k=C.defaultProps,k)R[W]===void 0&&(R[W]=k[W]);return{$$typeof:c,type:C,key:Q,ref:X,props:R,_owner:h.current}}return io.Fragment=l,io.jsx=b,io.jsxs=b,io}var xp;function wx(){return xp||(xp=1,Wi.exports=Nx()),Wi.exports}var e=wx(),La={},Ui={exports:{}},ur={},$i={exports:{}},Vi={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mp;function kx(){return mp||(mp=1,(function(a){function c(I,V){var B=I.length;I.push(V);e:for(;0<B;){var g=B-1>>>1,N=I[g];if(0<h(N,V))I[g]=V,I[B]=N,B=g;else break e}}function l(I){return I.length===0?null:I[0]}function p(I){if(I.length===0)return null;var V=I[0],B=I.pop();if(B!==V){I[0]=B;e:for(var g=0,N=I.length,oe=N>>>1;g<oe;){var ne=2*(g+1)-1,xe=I[ne],ue=ne+1,fe=I[ue];if(0>h(xe,B))ue<N&&0>h(fe,xe)?(I[g]=fe,I[ue]=B,g=ue):(I[g]=xe,I[ne]=B,g=ne);else if(ue<N&&0>h(fe,B))I[g]=fe,I[ue]=B,g=ue;else break e}}return V}function h(I,V){var B=I.sortIndex-V.sortIndex;return B!==0?B:I.id-V.id}if(typeof performance=="object"&&typeof performance.now=="function"){var f=performance;a.unstable_now=function(){return f.now()}}else{var b=Date,C=b.now();a.unstable_now=function(){return b.now()-C}}var k=[],A=[],W=1,R=null,Q=3,X=!1,Z=!1,G=!1,D=typeof setTimeout=="function"?setTimeout:null,le=typeof clearTimeout=="function"?clearTimeout:null,se=typeof setImmediate!="undefined"?setImmediate:null;typeof navigator!="undefined"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function re(I){for(var V=l(A);V!==null;){if(V.callback===null)p(A);else if(V.startTime<=I)p(A),V.sortIndex=V.expirationTime,c(k,V);else break;V=l(A)}}function E(I){if(G=!1,re(I),!Z)if(l(k)!==null)Z=!0,Xe(te);else{var V=l(A);V!==null&&we(E,V.startTime-I)}}function te(I,V){Z=!1,G&&(G=!1,le(U),U=-1),X=!0;var B=Q;try{for(re(V),R=l(k);R!==null&&(!(R.expirationTime>V)||I&&!he());){var g=R.callback;if(typeof g=="function"){R.callback=null,Q=R.priorityLevel;var N=g(R.expirationTime<=V);V=a.unstable_now(),typeof N=="function"?R.callback=N:R===l(k)&&p(k),re(V)}else p(k);R=l(k)}if(R!==null)var oe=!0;else{var ne=l(A);ne!==null&&we(E,ne.startTime-V),oe=!1}return oe}finally{R=null,Q=B,X=!1}}var q=!1,M=null,U=-1,Ne=5,He=-1;function he(){return!(a.unstable_now()-He<Ne)}function Be(){if(M!==null){var I=a.unstable_now();He=I;var V=!0;try{V=M(!0,I)}finally{V?Le():(q=!1,M=null)}}else q=!1}var Le;if(typeof se=="function")Le=function(){se(Be)};else if(typeof MessageChannel!="undefined"){var Je=new MessageChannel,or=Je.port2;Je.port1.onmessage=Be,Le=function(){or.postMessage(null)}}else Le=function(){D(Be,0)};function Xe(I){M=I,q||(q=!0,Le())}function we(I,V){U=D(function(){I(a.unstable_now())},V)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(I){I.callback=null},a.unstable_continueExecution=function(){Z||X||(Z=!0,Xe(te))},a.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Ne=0<I?Math.floor(1e3/I):5},a.unstable_getCurrentPriorityLevel=function(){return Q},a.unstable_getFirstCallbackNode=function(){return l(k)},a.unstable_next=function(I){switch(Q){case 1:case 2:case 3:var V=3;break;default:V=Q}var B=Q;Q=V;try{return I()}finally{Q=B}},a.unstable_pauseExecution=function(){},a.unstable_requestPaint=function(){},a.unstable_runWithPriority=function(I,V){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var B=Q;Q=I;try{return V()}finally{Q=B}},a.unstable_scheduleCallback=function(I,V,B){var g=a.unstable_now();switch(typeof B=="object"&&B!==null?(B=B.delay,B=typeof B=="number"&&0<B?g+B:g):B=g,I){case 1:var N=-1;break;case 2:N=250;break;case 5:N=1073741823;break;case 4:N=1e4;break;default:N=5e3}return N=B+N,I={id:W++,callback:V,priorityLevel:I,startTime:B,expirationTime:N,sortIndex:-1},B>g?(I.sortIndex=B,c(A,I),l(k)===null&&I===l(A)&&(G?(le(U),U=-1):G=!0,we(E,B-g))):(I.sortIndex=N,c(k,I),Z||X||(Z=!0,Xe(te))),I},a.unstable_shouldYield=he,a.unstable_wrapCallback=function(I){var V=Q;return function(){var B=Q;Q=V;try{return I.apply(this,arguments)}finally{Q=B}}}})(Vi)),Vi}var fp;function Sx(){return fp||(fp=1,$i.exports=kx()),$i.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gp;function Tx(){if(gp)return ur;gp=1;var a=ll(),c=Sx();function l(r){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+r,s=1;s<arguments.length;s++)t+="&args[]="+encodeURIComponent(arguments[s]);return"Minified React error #"+r+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var p=new Set,h={};function f(r,t){b(r,t),b(r+"Capture",t)}function b(r,t){for(h[r]=t,r=0;r<t.length;r++)p.add(t[r])}var C=!(typeof window=="undefined"||typeof window.document=="undefined"||typeof window.document.createElement=="undefined"),k=Object.prototype.hasOwnProperty,A=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,W={},R={};function Q(r){return k.call(R,r)?!0:k.call(W,r)?!1:A.test(r)?R[r]=!0:(W[r]=!0,!1)}function X(r,t,s,o){if(s!==null&&s.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return o?!1:s!==null?!s.acceptsBooleans:(r=r.toLowerCase().slice(0,5),r!=="data-"&&r!=="aria-");default:return!1}}function Z(r,t,s,o){if(t===null||typeof t=="undefined"||X(r,t,s,o))return!0;if(o)return!1;if(s!==null)switch(s.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function G(r,t,s,o,n,i,d){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=o,this.attributeNamespace=n,this.mustUseProperty=s,this.propertyName=r,this.type=t,this.sanitizeURL=i,this.removeEmptyString=d}var D={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(r){D[r]=new G(r,0,!1,r,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(r){var t=r[0];D[t]=new G(t,1,!1,r[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(r){D[r]=new G(r,2,!1,r.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(r){D[r]=new G(r,2,!1,r,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(r){D[r]=new G(r,3,!1,r.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(r){D[r]=new G(r,3,!0,r,null,!1,!1)}),["capture","download"].forEach(function(r){D[r]=new G(r,4,!1,r,null,!1,!1)}),["cols","rows","size","span"].forEach(function(r){D[r]=new G(r,6,!1,r,null,!1,!1)}),["rowSpan","start"].forEach(function(r){D[r]=new G(r,5,!1,r.toLowerCase(),null,!1,!1)});var le=/[\-:]([a-z])/g;function se(r){return r[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(r){var t=r.replace(le,se);D[t]=new G(t,1,!1,r,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(r){var t=r.replace(le,se);D[t]=new G(t,1,!1,r,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(r){var t=r.replace(le,se);D[t]=new G(t,1,!1,r,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(r){D[r]=new G(r,1,!1,r.toLowerCase(),null,!1,!1)}),D.xlinkHref=new G("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(r){D[r]=new G(r,1,!1,r.toLowerCase(),null,!0,!0)});function re(r,t,s,o){var n=D.hasOwnProperty(t)?D[t]:null;(n!==null?n.type!==0:o||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Z(t,s,n,o)&&(s=null),o||n===null?Q(t)&&(s===null?r.removeAttribute(t):r.setAttribute(t,""+s)):n.mustUseProperty?r[n.propertyName]=s===null?n.type===3?!1:"":s:(t=n.attributeName,o=n.attributeNamespace,s===null?r.removeAttribute(t):(n=n.type,s=n===3||n===4&&s===!0?"":""+s,o?r.setAttributeNS(o,t,s):r.setAttribute(t,s))))}var E=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,te=Symbol.for("react.element"),q=Symbol.for("react.portal"),M=Symbol.for("react.fragment"),U=Symbol.for("react.strict_mode"),Ne=Symbol.for("react.profiler"),He=Symbol.for("react.provider"),he=Symbol.for("react.context"),Be=Symbol.for("react.forward_ref"),Le=Symbol.for("react.suspense"),Je=Symbol.for("react.suspense_list"),or=Symbol.for("react.memo"),Xe=Symbol.for("react.lazy"),we=Symbol.for("react.offscreen"),I=Symbol.iterator;function V(r){return r===null||typeof r!="object"?null:(r=I&&r[I]||r["@@iterator"],typeof r=="function"?r:null)}var B=Object.assign,g;function N(r){if(g===void 0)try{throw Error()}catch(s){var t=s.stack.trim().match(/\n( *(at )?)/);g=t&&t[1]||""}return`
`+g+r}var oe=!1;function ne(r,t){if(!r||oe)return"";oe=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(j){var o=j}Reflect.construct(r,[],t)}else{try{t.call()}catch(j){o=j}r.call(t.prototype)}else{try{throw Error()}catch(j){o=j}r()}}catch(j){if(j&&o&&typeof j.stack=="string"){for(var n=j.stack.split(`
`),i=o.stack.split(`
`),d=n.length-1,u=i.length-1;1<=d&&0<=u&&n[d]!==i[u];)u--;for(;1<=d&&0<=u;d--,u--)if(n[d]!==i[u]){if(d!==1||u!==1)do if(d--,u--,0>u||n[d]!==i[u]){var x=`
`+n[d].replace(" at new "," at ");return r.displayName&&x.includes("<anonymous>")&&(x=x.replace("<anonymous>",r.displayName)),x}while(1<=d&&0<=u);break}}}finally{oe=!1,Error.prepareStackTrace=s}return(r=r?r.displayName||r.name:"")?N(r):""}function xe(r){switch(r.tag){case 5:return N(r.type);case 16:return N("Lazy");case 13:return N("Suspense");case 19:return N("SuspenseList");case 0:case 2:case 15:return r=ne(r.type,!1),r;case 11:return r=ne(r.type.render,!1),r;case 1:return r=ne(r.type,!0),r;default:return""}}function ue(r){if(r==null)return null;if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r;switch(r){case M:return"Fragment";case q:return"Portal";case Ne:return"Profiler";case U:return"StrictMode";case Le:return"Suspense";case Je:return"SuspenseList"}if(typeof r=="object")switch(r.$$typeof){case he:return(r.displayName||"Context")+".Consumer";case He:return(r._context.displayName||"Context")+".Provider";case Be:var t=r.render;return r=r.displayName,r||(r=t.displayName||t.name||"",r=r!==""?"ForwardRef("+r+")":"ForwardRef"),r;case or:return t=r.displayName||null,t!==null?t:ue(r.type)||"Memo";case Xe:t=r._payload,r=r._init;try{return ue(r(t))}catch{}}return null}function fe(r){var t=r.type;switch(r.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return r=t.render,r=r.displayName||r.name||"",t.displayName||(r!==""?"ForwardRef("+r+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ue(t);case 8:return t===U?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function me(r){switch(typeof r){case"boolean":case"number":case"string":case"undefined":return r;case"object":return r;default:return""}}function je(r){var t=r.type;return(r=r.nodeName)&&r.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Ie(r){var t=je(r)?"checked":"value",s=Object.getOwnPropertyDescriptor(r.constructor.prototype,t),o=""+r[t];if(!r.hasOwnProperty(t)&&typeof s!="undefined"&&typeof s.get=="function"&&typeof s.set=="function"){var n=s.get,i=s.set;return Object.defineProperty(r,t,{configurable:!0,get:function(){return n.call(this)},set:function(d){o=""+d,i.call(this,d)}}),Object.defineProperty(r,t,{enumerable:s.enumerable}),{getValue:function(){return o},setValue:function(d){o=""+d},stopTracking:function(){r._valueTracker=null,delete r[t]}}}}function Xr(r){r._valueTracker||(r._valueTracker=Ie(r))}function jt(r){if(!r)return!1;var t=r._valueTracker;if(!t)return!0;var s=t.getValue(),o="";return r&&(o=je(r)?r.checked?"true":"false":r.value),r=o,r!==s?(t.setValue(r),!0):!1}function Tr(r){if(r=r||(typeof document!="undefined"?document:void 0),typeof r=="undefined")return null;try{return r.activeElement||r.body}catch{return r.body}}function Qa(r,t){var s=t.checked;return B({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:s!=null?s:r._wrapperState.initialChecked})}function vl(r,t){var s=t.defaultValue==null?"":t.defaultValue,o=t.checked!=null?t.checked:t.defaultChecked;s=me(t.value!=null?t.value:s),r._wrapperState={initialChecked:o,initialValue:s,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function yl(r,t){t=t.checked,t!=null&&re(r,"checked",t,!1)}function qa(r,t){yl(r,t);var s=me(t.value),o=t.type;if(s!=null)o==="number"?(s===0&&r.value===""||r.value!=s)&&(r.value=""+s):r.value!==""+s&&(r.value=""+s);else if(o==="submit"||o==="reset"){r.removeAttribute("value");return}t.hasOwnProperty("value")?Ya(r,t.type,s):t.hasOwnProperty("defaultValue")&&Ya(r,t.type,me(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(r.defaultChecked=!!t.defaultChecked)}function jl(r,t,s){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var o=t.type;if(!(o!=="submit"&&o!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+r._wrapperState.initialValue,s||t===r.value||(r.value=t),r.defaultValue=t}s=r.name,s!==""&&(r.name=""),r.defaultChecked=!!r._wrapperState.initialChecked,s!==""&&(r.name=s)}function Ya(r,t,s){(t!=="number"||Tr(r.ownerDocument)!==r)&&(s==null?r.defaultValue=""+r._wrapperState.initialValue:r.defaultValue!==""+s&&(r.defaultValue=""+s))}var Ns=Array.isArray;function Ft(r,t,s,o){if(r=r.options,t){t={};for(var n=0;n<s.length;n++)t["$"+s[n]]=!0;for(s=0;s<r.length;s++)n=t.hasOwnProperty("$"+r[s].value),r[s].selected!==n&&(r[s].selected=n),n&&o&&(r[s].defaultSelected=!0)}else{for(s=""+me(s),t=null,n=0;n<r.length;n++){if(r[n].value===s){r[n].selected=!0,o&&(r[n].defaultSelected=!0);return}t!==null||r[n].disabled||(t=r[n])}t!==null&&(t.selected=!0)}}function Ka(r,t){if(t.dangerouslySetInnerHTML!=null)throw Error(l(91));return B({},t,{value:void 0,defaultValue:void 0,children:""+r._wrapperState.initialValue})}function bl(r,t){var s=t.value;if(s==null){if(s=t.children,t=t.defaultValue,s!=null){if(t!=null)throw Error(l(92));if(Ns(s)){if(1<s.length)throw Error(l(93));s=s[0]}t=s}t==null&&(t=""),s=t}r._wrapperState={initialValue:me(s)}}function Nl(r,t){var s=me(t.value),o=me(t.defaultValue);s!=null&&(s=""+s,s!==r.value&&(r.value=s),t.defaultValue==null&&r.defaultValue!==s&&(r.defaultValue=s)),o!=null&&(r.defaultValue=""+o)}function wl(r){var t=r.textContent;t===r._wrapperState.initialValue&&t!==""&&t!==null&&(r.value=t)}function kl(r){switch(r){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ja(r,t){return r==null||r==="http://www.w3.org/1999/xhtml"?kl(t):r==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":r}var jo,Sl=(function(r){return typeof MSApp!="undefined"&&MSApp.execUnsafeLocalFunction?function(t,s,o,n){MSApp.execUnsafeLocalFunction(function(){return r(t,s,o,n)})}:r})(function(r,t){if(r.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in r)r.innerHTML=t;else{for(jo=jo||document.createElement("div"),jo.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=jo.firstChild;r.firstChild;)r.removeChild(r.firstChild);for(;t.firstChild;)r.appendChild(t.firstChild)}});function ws(r,t){if(t){var s=r.firstChild;if(s&&s===r.lastChild&&s.nodeType===3){s.nodeValue=t;return}}r.textContent=t}var ks={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ku=["Webkit","ms","Moz","O"];Object.keys(ks).forEach(function(r){ku.forEach(function(t){t=t+r.charAt(0).toUpperCase()+r.substring(1),ks[t]=ks[r]})});function Tl(r,t,s){return t==null||typeof t=="boolean"||t===""?"":s||typeof t!="number"||t===0||ks.hasOwnProperty(r)&&ks[r]?(""+t).trim():t+"px"}function Cl(r,t){r=r.style;for(var s in t)if(t.hasOwnProperty(s)){var o=s.indexOf("--")===0,n=Tl(s,t[s],o);s==="float"&&(s="cssFloat"),o?r.setProperty(s,n):r[s]=n}}var Su=B({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Xa(r,t){if(t){if(Su[r]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(l(137,r));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(l(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(l(61))}if(t.style!=null&&typeof t.style!="object")throw Error(l(62))}}function Za(r,t){if(r.indexOf("-")===-1)return typeof t.is=="string";switch(r){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var en=null;function rn(r){return r=r.target||r.srcElement||window,r.correspondingUseElement&&(r=r.correspondingUseElement),r.nodeType===3?r.parentNode:r}var tn=null,Wt=null,Dt=null;function Ll(r){if(r=Gs(r)){if(typeof tn!="function")throw Error(l(280));var t=r.stateNode;t&&(t=Uo(t),tn(r.stateNode,r.type,t))}}function zl(r){Wt?Dt?Dt.push(r):Dt=[r]:Wt=r}function Il(){if(Wt){var r=Wt,t=Dt;if(Dt=Wt=null,Ll(r),t)for(r=0;r<t.length;r++)Ll(t[r])}}function El(r,t){return r(t)}function Ml(){}var sn=!1;function Bl(r,t,s){if(sn)return r(t,s);sn=!0;try{return El(r,t,s)}finally{sn=!1,(Wt!==null||Dt!==null)&&(Ml(),Il())}}function Ss(r,t){var s=r.stateNode;if(s===null)return null;var o=Uo(s);if(o===null)return null;s=o[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(r=r.type,o=!(r==="button"||r==="input"||r==="select"||r==="textarea")),r=!o;break e;default:r=!1}if(r)return null;if(s&&typeof s!="function")throw Error(l(231,t,typeof s));return s}var on=!1;if(C)try{var Ts={};Object.defineProperty(Ts,"passive",{get:function(){on=!0}}),window.addEventListener("test",Ts,Ts),window.removeEventListener("test",Ts,Ts)}catch{on=!1}function Tu(r,t,s,o,n,i,d,u,x){var j=Array.prototype.slice.call(arguments,3);try{t.apply(s,j)}catch(S){this.onError(S)}}var Cs=!1,bo=null,No=!1,an=null,Cu={onError:function(r){Cs=!0,bo=r}};function Lu(r,t,s,o,n,i,d,u,x){Cs=!1,bo=null,Tu.apply(Cu,arguments)}function zu(r,t,s,o,n,i,d,u,x){if(Lu.apply(this,arguments),Cs){if(Cs){var j=bo;Cs=!1,bo=null}else throw Error(l(198));No||(No=!0,an=j)}}function bt(r){var t=r,s=r;if(r.alternate)for(;t.return;)t=t.return;else{r=t;do t=r,(t.flags&4098)!==0&&(s=t.return),r=t.return;while(r)}return t.tag===3?s:null}function Pl(r){if(r.tag===13){var t=r.memoizedState;if(t===null&&(r=r.alternate,r!==null&&(t=r.memoizedState)),t!==null)return t.dehydrated}return null}function Hl(r){if(bt(r)!==r)throw Error(l(188))}function Iu(r){var t=r.alternate;if(!t){if(t=bt(r),t===null)throw Error(l(188));return t!==r?null:r}for(var s=r,o=t;;){var n=s.return;if(n===null)break;var i=n.alternate;if(i===null){if(o=n.return,o!==null){s=o;continue}break}if(n.child===i.child){for(i=n.child;i;){if(i===s)return Hl(n),r;if(i===o)return Hl(n),t;i=i.sibling}throw Error(l(188))}if(s.return!==o.return)s=n,o=i;else{for(var d=!1,u=n.child;u;){if(u===s){d=!0,s=n,o=i;break}if(u===o){d=!0,o=n,s=i;break}u=u.sibling}if(!d){for(u=i.child;u;){if(u===s){d=!0,s=i,o=n;break}if(u===o){d=!0,o=i,s=n;break}u=u.sibling}if(!d)throw Error(l(189))}}if(s.alternate!==o)throw Error(l(190))}if(s.tag!==3)throw Error(l(188));return s.stateNode.current===s?r:t}function _l(r){return r=Iu(r),r!==null?Ol(r):null}function Ol(r){if(r.tag===5||r.tag===6)return r;for(r=r.child;r!==null;){var t=Ol(r);if(t!==null)return t;r=r.sibling}return null}var Rl=c.unstable_scheduleCallback,Al=c.unstable_cancelCallback,Eu=c.unstable_shouldYield,Mu=c.unstable_requestPaint,_e=c.unstable_now,Bu=c.unstable_getCurrentPriorityLevel,nn=c.unstable_ImmediatePriority,Fl=c.unstable_UserBlockingPriority,wo=c.unstable_NormalPriority,Pu=c.unstable_LowPriority,Wl=c.unstable_IdlePriority,ko=null,_r=null;function Hu(r){if(_r&&typeof _r.onCommitFiberRoot=="function")try{_r.onCommitFiberRoot(ko,r,void 0,(r.current.flags&128)===128)}catch{}}var Cr=Math.clz32?Math.clz32:Ru,_u=Math.log,Ou=Math.LN2;function Ru(r){return r>>>=0,r===0?32:31-(_u(r)/Ou|0)|0}var So=64,To=4194304;function Ls(r){switch(r&-r){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return r&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return r}}function Co(r,t){var s=r.pendingLanes;if(s===0)return 0;var o=0,n=r.suspendedLanes,i=r.pingedLanes,d=s&268435455;if(d!==0){var u=d&~n;u!==0?o=Ls(u):(i&=d,i!==0&&(o=Ls(i)))}else d=s&~n,d!==0?o=Ls(d):i!==0&&(o=Ls(i));if(o===0)return 0;if(t!==0&&t!==o&&(t&n)===0&&(n=o&-o,i=t&-t,n>=i||n===16&&(i&4194240)!==0))return t;if((o&4)!==0&&(o|=s&16),t=r.entangledLanes,t!==0)for(r=r.entanglements,t&=o;0<t;)s=31-Cr(t),n=1<<s,o|=r[s],t&=~n;return o}function Au(r,t){switch(r){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Fu(r,t){for(var s=r.suspendedLanes,o=r.pingedLanes,n=r.expirationTimes,i=r.pendingLanes;0<i;){var d=31-Cr(i),u=1<<d,x=n[d];x===-1?((u&s)===0||(u&o)!==0)&&(n[d]=Au(u,t)):x<=t&&(r.expiredLanes|=u),i&=~u}}function ln(r){return r=r.pendingLanes&-1073741825,r!==0?r:r&1073741824?1073741824:0}function Dl(){var r=So;return So<<=1,(So&4194240)===0&&(So=64),r}function cn(r){for(var t=[],s=0;31>s;s++)t.push(r);return t}function zs(r,t,s){r.pendingLanes|=t,t!==536870912&&(r.suspendedLanes=0,r.pingedLanes=0),r=r.eventTimes,t=31-Cr(t),r[t]=s}function Wu(r,t){var s=r.pendingLanes&~t;r.pendingLanes=t,r.suspendedLanes=0,r.pingedLanes=0,r.expiredLanes&=t,r.mutableReadLanes&=t,r.entangledLanes&=t,t=r.entanglements;var o=r.eventTimes;for(r=r.expirationTimes;0<s;){var n=31-Cr(s),i=1<<n;t[n]=0,o[n]=-1,r[n]=-1,s&=~i}}function dn(r,t){var s=r.entangledLanes|=t;for(r=r.entanglements;s;){var o=31-Cr(s),n=1<<o;n&t|r[o]&t&&(r[o]|=t),s&=~n}}var be=0;function Ul(r){return r&=-r,1<r?4<r?(r&268435455)!==0?16:536870912:4:1}var $l,pn,Vl,Gl,Ql,un=!1,Lo=[],Zr=null,et=null,rt=null,Is=new Map,Es=new Map,tt=[],Du="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ql(r,t){switch(r){case"focusin":case"focusout":Zr=null;break;case"dragenter":case"dragleave":et=null;break;case"mouseover":case"mouseout":rt=null;break;case"pointerover":case"pointerout":Is.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Es.delete(t.pointerId)}}function Ms(r,t,s,o,n,i){return r===null||r.nativeEvent!==i?(r={blockedOn:t,domEventName:s,eventSystemFlags:o,nativeEvent:i,targetContainers:[n]},t!==null&&(t=Gs(t),t!==null&&pn(t)),r):(r.eventSystemFlags|=o,t=r.targetContainers,n!==null&&t.indexOf(n)===-1&&t.push(n),r)}function Uu(r,t,s,o,n){switch(t){case"focusin":return Zr=Ms(Zr,r,t,s,o,n),!0;case"dragenter":return et=Ms(et,r,t,s,o,n),!0;case"mouseover":return rt=Ms(rt,r,t,s,o,n),!0;case"pointerover":var i=n.pointerId;return Is.set(i,Ms(Is.get(i)||null,r,t,s,o,n)),!0;case"gotpointercapture":return i=n.pointerId,Es.set(i,Ms(Es.get(i)||null,r,t,s,o,n)),!0}return!1}function Yl(r){var t=Nt(r.target);if(t!==null){var s=bt(t);if(s!==null){if(t=s.tag,t===13){if(t=Pl(s),t!==null){r.blockedOn=t,Ql(r.priority,function(){Vl(s)});return}}else if(t===3&&s.stateNode.current.memoizedState.isDehydrated){r.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}r.blockedOn=null}function zo(r){if(r.blockedOn!==null)return!1;for(var t=r.targetContainers;0<t.length;){var s=xn(r.domEventName,r.eventSystemFlags,t[0],r.nativeEvent);if(s===null){s=r.nativeEvent;var o=new s.constructor(s.type,s);en=o,s.target.dispatchEvent(o),en=null}else return t=Gs(s),t!==null&&pn(t),r.blockedOn=s,!1;t.shift()}return!0}function Kl(r,t,s){zo(r)&&s.delete(t)}function $u(){un=!1,Zr!==null&&zo(Zr)&&(Zr=null),et!==null&&zo(et)&&(et=null),rt!==null&&zo(rt)&&(rt=null),Is.forEach(Kl),Es.forEach(Kl)}function Bs(r,t){r.blockedOn===t&&(r.blockedOn=null,un||(un=!0,c.unstable_scheduleCallback(c.unstable_NormalPriority,$u)))}function Ps(r){function t(n){return Bs(n,r)}if(0<Lo.length){Bs(Lo[0],r);for(var s=1;s<Lo.length;s++){var o=Lo[s];o.blockedOn===r&&(o.blockedOn=null)}}for(Zr!==null&&Bs(Zr,r),et!==null&&Bs(et,r),rt!==null&&Bs(rt,r),Is.forEach(t),Es.forEach(t),s=0;s<tt.length;s++)o=tt[s],o.blockedOn===r&&(o.blockedOn=null);for(;0<tt.length&&(s=tt[0],s.blockedOn===null);)Yl(s),s.blockedOn===null&&tt.shift()}var Ut=E.ReactCurrentBatchConfig,Io=!0;function Vu(r,t,s,o){var n=be,i=Ut.transition;Ut.transition=null;try{be=1,hn(r,t,s,o)}finally{be=n,Ut.transition=i}}function Gu(r,t,s,o){var n=be,i=Ut.transition;Ut.transition=null;try{be=4,hn(r,t,s,o)}finally{be=n,Ut.transition=i}}function hn(r,t,s,o){if(Io){var n=xn(r,t,s,o);if(n===null)En(r,t,o,Eo,s),ql(r,o);else if(Uu(n,r,t,s,o))o.stopPropagation();else if(ql(r,o),t&4&&-1<Du.indexOf(r)){for(;n!==null;){var i=Gs(n);if(i!==null&&$l(i),i=xn(r,t,s,o),i===null&&En(r,t,o,Eo,s),i===n)break;n=i}n!==null&&o.stopPropagation()}else En(r,t,o,null,s)}}var Eo=null;function xn(r,t,s,o){if(Eo=null,r=rn(o),r=Nt(r),r!==null)if(t=bt(r),t===null)r=null;else if(s=t.tag,s===13){if(r=Pl(t),r!==null)return r;r=null}else if(s===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;r=null}else t!==r&&(r=null);return Eo=r,null}function Jl(r){switch(r){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Bu()){case nn:return 1;case Fl:return 4;case wo:case Pu:return 16;case Wl:return 536870912;default:return 16}default:return 16}}var st=null,mn=null,Mo=null;function Xl(){if(Mo)return Mo;var r,t=mn,s=t.length,o,n="value"in st?st.value:st.textContent,i=n.length;for(r=0;r<s&&t[r]===n[r];r++);var d=s-r;for(o=1;o<=d&&t[s-o]===n[i-o];o++);return Mo=n.slice(r,1<o?1-o:void 0)}function Bo(r){var t=r.keyCode;return"charCode"in r?(r=r.charCode,r===0&&t===13&&(r=13)):r=t,r===10&&(r=13),32<=r||r===13?r:0}function Po(){return!0}function Zl(){return!1}function xr(r){function t(s,o,n,i,d){this._reactName=s,this._targetInst=n,this.type=o,this.nativeEvent=i,this.target=d,this.currentTarget=null;for(var u in r)r.hasOwnProperty(u)&&(s=r[u],this[u]=s?s(i):i[u]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Po:Zl,this.isPropagationStopped=Zl,this}return B(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=Po)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=Po)},persist:function(){},isPersistent:Po}),t}var $t={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(r){return r.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},fn=xr($t),Hs=B({},$t,{view:0,detail:0}),Qu=xr(Hs),gn,vn,_s,Ho=B({},Hs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:jn,button:0,buttons:0,relatedTarget:function(r){return r.relatedTarget===void 0?r.fromElement===r.srcElement?r.toElement:r.fromElement:r.relatedTarget},movementX:function(r){return"movementX"in r?r.movementX:(r!==_s&&(_s&&r.type==="mousemove"?(gn=r.screenX-_s.screenX,vn=r.screenY-_s.screenY):vn=gn=0,_s=r),gn)},movementY:function(r){return"movementY"in r?r.movementY:vn}}),ec=xr(Ho),qu=B({},Ho,{dataTransfer:0}),Yu=xr(qu),Ku=B({},Hs,{relatedTarget:0}),yn=xr(Ku),Ju=B({},$t,{animationName:0,elapsedTime:0,pseudoElement:0}),Xu=xr(Ju),Zu=B({},$t,{clipboardData:function(r){return"clipboardData"in r?r.clipboardData:window.clipboardData}}),eh=xr(Zu),rh=B({},$t,{data:0}),rc=xr(rh),th={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},sh={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},oh={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ah(r){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(r):(r=oh[r])?!!t[r]:!1}function jn(){return ah}var nh=B({},Hs,{key:function(r){if(r.key){var t=th[r.key]||r.key;if(t!=="Unidentified")return t}return r.type==="keypress"?(r=Bo(r),r===13?"Enter":String.fromCharCode(r)):r.type==="keydown"||r.type==="keyup"?sh[r.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:jn,charCode:function(r){return r.type==="keypress"?Bo(r):0},keyCode:function(r){return r.type==="keydown"||r.type==="keyup"?r.keyCode:0},which:function(r){return r.type==="keypress"?Bo(r):r.type==="keydown"||r.type==="keyup"?r.keyCode:0}}),ih=xr(nh),lh=B({},Ho,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),tc=xr(lh),ch=B({},Hs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:jn}),dh=xr(ch),ph=B({},$t,{propertyName:0,elapsedTime:0,pseudoElement:0}),uh=xr(ph),hh=B({},Ho,{deltaX:function(r){return"deltaX"in r?r.deltaX:"wheelDeltaX"in r?-r.wheelDeltaX:0},deltaY:function(r){return"deltaY"in r?r.deltaY:"wheelDeltaY"in r?-r.wheelDeltaY:"wheelDelta"in r?-r.wheelDelta:0},deltaZ:0,deltaMode:0}),xh=xr(hh),mh=[9,13,27,32],bn=C&&"CompositionEvent"in window,Os=null;C&&"documentMode"in document&&(Os=document.documentMode);var fh=C&&"TextEvent"in window&&!Os,sc=C&&(!bn||Os&&8<Os&&11>=Os),oc=" ",ac=!1;function nc(r,t){switch(r){case"keyup":return mh.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ic(r){return r=r.detail,typeof r=="object"&&"data"in r?r.data:null}var Vt=!1;function gh(r,t){switch(r){case"compositionend":return ic(t);case"keypress":return t.which!==32?null:(ac=!0,oc);case"textInput":return r=t.data,r===oc&&ac?null:r;default:return null}}function vh(r,t){if(Vt)return r==="compositionend"||!bn&&nc(r,t)?(r=Xl(),Mo=mn=st=null,Vt=!1,r):null;switch(r){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return sc&&t.locale!=="ko"?null:t.data;default:return null}}var yh={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function lc(r){var t=r&&r.nodeName&&r.nodeName.toLowerCase();return t==="input"?!!yh[r.type]:t==="textarea"}function cc(r,t,s,o){zl(o),t=Fo(t,"onChange"),0<t.length&&(s=new fn("onChange","change",null,s,o),r.push({event:s,listeners:t}))}var Rs=null,As=null;function jh(r){Cc(r,0)}function _o(r){var t=Kt(r);if(jt(t))return r}function bh(r,t){if(r==="change")return t}var dc=!1;if(C){var Nn;if(C){var wn="oninput"in document;if(!wn){var pc=document.createElement("div");pc.setAttribute("oninput","return;"),wn=typeof pc.oninput=="function"}Nn=wn}else Nn=!1;dc=Nn&&(!document.documentMode||9<document.documentMode)}function uc(){Rs&&(Rs.detachEvent("onpropertychange",hc),As=Rs=null)}function hc(r){if(r.propertyName==="value"&&_o(As)){var t=[];cc(t,As,r,rn(r)),Bl(jh,t)}}function Nh(r,t,s){r==="focusin"?(uc(),Rs=t,As=s,Rs.attachEvent("onpropertychange",hc)):r==="focusout"&&uc()}function wh(r){if(r==="selectionchange"||r==="keyup"||r==="keydown")return _o(As)}function kh(r,t){if(r==="click")return _o(t)}function Sh(r,t){if(r==="input"||r==="change")return _o(t)}function Th(r,t){return r===t&&(r!==0||1/r===1/t)||r!==r&&t!==t}var Lr=typeof Object.is=="function"?Object.is:Th;function Fs(r,t){if(Lr(r,t))return!0;if(typeof r!="object"||r===null||typeof t!="object"||t===null)return!1;var s=Object.keys(r),o=Object.keys(t);if(s.length!==o.length)return!1;for(o=0;o<s.length;o++){var n=s[o];if(!k.call(t,n)||!Lr(r[n],t[n]))return!1}return!0}function xc(r){for(;r&&r.firstChild;)r=r.firstChild;return r}function mc(r,t){var s=xc(r);r=0;for(var o;s;){if(s.nodeType===3){if(o=r+s.textContent.length,r<=t&&o>=t)return{node:s,offset:t-r};r=o}e:{for(;s;){if(s.nextSibling){s=s.nextSibling;break e}s=s.parentNode}s=void 0}s=xc(s)}}function fc(r,t){return r&&t?r===t?!0:r&&r.nodeType===3?!1:t&&t.nodeType===3?fc(r,t.parentNode):"contains"in r?r.contains(t):r.compareDocumentPosition?!!(r.compareDocumentPosition(t)&16):!1:!1}function gc(){for(var r=window,t=Tr();t instanceof r.HTMLIFrameElement;){try{var s=typeof t.contentWindow.location.href=="string"}catch{s=!1}if(s)r=t.contentWindow;else break;t=Tr(r.document)}return t}function kn(r){var t=r&&r.nodeName&&r.nodeName.toLowerCase();return t&&(t==="input"&&(r.type==="text"||r.type==="search"||r.type==="tel"||r.type==="url"||r.type==="password")||t==="textarea"||r.contentEditable==="true")}function Ch(r){var t=gc(),s=r.focusedElem,o=r.selectionRange;if(t!==s&&s&&s.ownerDocument&&fc(s.ownerDocument.documentElement,s)){if(o!==null&&kn(s)){if(t=o.start,r=o.end,r===void 0&&(r=t),"selectionStart"in s)s.selectionStart=t,s.selectionEnd=Math.min(r,s.value.length);else if(r=(t=s.ownerDocument||document)&&t.defaultView||window,r.getSelection){r=r.getSelection();var n=s.textContent.length,i=Math.min(o.start,n);o=o.end===void 0?i:Math.min(o.end,n),!r.extend&&i>o&&(n=o,o=i,i=n),n=mc(s,i);var d=mc(s,o);n&&d&&(r.rangeCount!==1||r.anchorNode!==n.node||r.anchorOffset!==n.offset||r.focusNode!==d.node||r.focusOffset!==d.offset)&&(t=t.createRange(),t.setStart(n.node,n.offset),r.removeAllRanges(),i>o?(r.addRange(t),r.extend(d.node,d.offset)):(t.setEnd(d.node,d.offset),r.addRange(t)))}}for(t=[],r=s;r=r.parentNode;)r.nodeType===1&&t.push({element:r,left:r.scrollLeft,top:r.scrollTop});for(typeof s.focus=="function"&&s.focus(),s=0;s<t.length;s++)r=t[s],r.element.scrollLeft=r.left,r.element.scrollTop=r.top}}var Lh=C&&"documentMode"in document&&11>=document.documentMode,Gt=null,Sn=null,Ws=null,Tn=!1;function vc(r,t,s){var o=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;Tn||Gt==null||Gt!==Tr(o)||(o=Gt,"selectionStart"in o&&kn(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),Ws&&Fs(Ws,o)||(Ws=o,o=Fo(Sn,"onSelect"),0<o.length&&(t=new fn("onSelect","select",null,t,s),r.push({event:t,listeners:o}),t.target=Gt)))}function Oo(r,t){var s={};return s[r.toLowerCase()]=t.toLowerCase(),s["Webkit"+r]="webkit"+t,s["Moz"+r]="moz"+t,s}var Qt={animationend:Oo("Animation","AnimationEnd"),animationiteration:Oo("Animation","AnimationIteration"),animationstart:Oo("Animation","AnimationStart"),transitionend:Oo("Transition","TransitionEnd")},Cn={},yc={};C&&(yc=document.createElement("div").style,"AnimationEvent"in window||(delete Qt.animationend.animation,delete Qt.animationiteration.animation,delete Qt.animationstart.animation),"TransitionEvent"in window||delete Qt.transitionend.transition);function Ro(r){if(Cn[r])return Cn[r];if(!Qt[r])return r;var t=Qt[r],s;for(s in t)if(t.hasOwnProperty(s)&&s in yc)return Cn[r]=t[s];return r}var jc=Ro("animationend"),bc=Ro("animationiteration"),Nc=Ro("animationstart"),wc=Ro("transitionend"),kc=new Map,Sc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ot(r,t){kc.set(r,t),f(t,[r])}for(var Ln=0;Ln<Sc.length;Ln++){var zn=Sc[Ln],zh=zn.toLowerCase(),Ih=zn[0].toUpperCase()+zn.slice(1);ot(zh,"on"+Ih)}ot(jc,"onAnimationEnd"),ot(bc,"onAnimationIteration"),ot(Nc,"onAnimationStart"),ot("dblclick","onDoubleClick"),ot("focusin","onFocus"),ot("focusout","onBlur"),ot(wc,"onTransitionEnd"),b("onMouseEnter",["mouseout","mouseover"]),b("onMouseLeave",["mouseout","mouseover"]),b("onPointerEnter",["pointerout","pointerover"]),b("onPointerLeave",["pointerout","pointerover"]),f("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),f("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),f("onBeforeInput",["compositionend","keypress","textInput","paste"]),f("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),f("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),f("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ds="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Eh=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ds));function Tc(r,t,s){var o=r.type||"unknown-event";r.currentTarget=s,zu(o,t,void 0,r),r.currentTarget=null}function Cc(r,t){t=(t&4)!==0;for(var s=0;s<r.length;s++){var o=r[s],n=o.event;o=o.listeners;e:{var i=void 0;if(t)for(var d=o.length-1;0<=d;d--){var u=o[d],x=u.instance,j=u.currentTarget;if(u=u.listener,x!==i&&n.isPropagationStopped())break e;Tc(n,u,j),i=x}else for(d=0;d<o.length;d++){if(u=o[d],x=u.instance,j=u.currentTarget,u=u.listener,x!==i&&n.isPropagationStopped())break e;Tc(n,u,j),i=x}}}if(No)throw r=an,No=!1,an=null,r}function Se(r,t){var s=t[On];s===void 0&&(s=t[On]=new Set);var o=r+"__bubble";s.has(o)||(Lc(t,r,2,!1),s.add(o))}function In(r,t,s){var o=0;t&&(o|=4),Lc(s,r,o,t)}var Ao="_reactListening"+Math.random().toString(36).slice(2);function Us(r){if(!r[Ao]){r[Ao]=!0,p.forEach(function(s){s!=="selectionchange"&&(Eh.has(s)||In(s,!1,r),In(s,!0,r))});var t=r.nodeType===9?r:r.ownerDocument;t===null||t[Ao]||(t[Ao]=!0,In("selectionchange",!1,t))}}function Lc(r,t,s,o){switch(Jl(t)){case 1:var n=Vu;break;case 4:n=Gu;break;default:n=hn}s=n.bind(null,t,s,r),n=void 0,!on||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(n=!0),o?n!==void 0?r.addEventListener(t,s,{capture:!0,passive:n}):r.addEventListener(t,s,!0):n!==void 0?r.addEventListener(t,s,{passive:n}):r.addEventListener(t,s,!1)}function En(r,t,s,o,n){var i=o;if((t&1)===0&&(t&2)===0&&o!==null)e:for(;;){if(o===null)return;var d=o.tag;if(d===3||d===4){var u=o.stateNode.containerInfo;if(u===n||u.nodeType===8&&u.parentNode===n)break;if(d===4)for(d=o.return;d!==null;){var x=d.tag;if((x===3||x===4)&&(x=d.stateNode.containerInfo,x===n||x.nodeType===8&&x.parentNode===n))return;d=d.return}for(;u!==null;){if(d=Nt(u),d===null)return;if(x=d.tag,x===5||x===6){o=i=d;continue e}u=u.parentNode}}o=o.return}Bl(function(){var j=i,S=rn(s),T=[];e:{var w=kc.get(r);if(w!==void 0){var P=fn,O=r;switch(r){case"keypress":if(Bo(s)===0)break e;case"keydown":case"keyup":P=ih;break;case"focusin":O="focus",P=yn;break;case"focusout":O="blur",P=yn;break;case"beforeblur":case"afterblur":P=yn;break;case"click":if(s.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":P=ec;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":P=Yu;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":P=dh;break;case jc:case bc:case Nc:P=Xu;break;case wc:P=uh;break;case"scroll":P=Qu;break;case"wheel":P=xh;break;case"copy":case"cut":case"paste":P=eh;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":P=tc}var F=(t&4)!==0,Oe=!F&&r==="scroll",v=F?w!==null?w+"Capture":null:w;F=[];for(var m=j,y;m!==null;){y=m;var L=y.stateNode;if(y.tag===5&&L!==null&&(y=L,v!==null&&(L=Ss(m,v),L!=null&&F.push($s(m,L,y)))),Oe)break;m=m.return}0<F.length&&(w=new P(w,O,null,s,S),T.push({event:w,listeners:F}))}}if((t&7)===0){e:{if(w=r==="mouseover"||r==="pointerover",P=r==="mouseout"||r==="pointerout",w&&s!==en&&(O=s.relatedTarget||s.fromElement)&&(Nt(O)||O[Dr]))break e;if((P||w)&&(w=S.window===S?S:(w=S.ownerDocument)?w.defaultView||w.parentWindow:window,P?(O=s.relatedTarget||s.toElement,P=j,O=O?Nt(O):null,O!==null&&(Oe=bt(O),O!==Oe||O.tag!==5&&O.tag!==6)&&(O=null)):(P=null,O=j),P!==O)){if(F=ec,L="onMouseLeave",v="onMouseEnter",m="mouse",(r==="pointerout"||r==="pointerover")&&(F=tc,L="onPointerLeave",v="onPointerEnter",m="pointer"),Oe=P==null?w:Kt(P),y=O==null?w:Kt(O),w=new F(L,m+"leave",P,s,S),w.target=Oe,w.relatedTarget=y,L=null,Nt(S)===j&&(F=new F(v,m+"enter",O,s,S),F.target=y,F.relatedTarget=Oe,L=F),Oe=L,P&&O)r:{for(F=P,v=O,m=0,y=F;y;y=qt(y))m++;for(y=0,L=v;L;L=qt(L))y++;for(;0<m-y;)F=qt(F),m--;for(;0<y-m;)v=qt(v),y--;for(;m--;){if(F===v||v!==null&&F===v.alternate)break r;F=qt(F),v=qt(v)}F=null}else F=null;P!==null&&zc(T,w,P,F,!1),O!==null&&Oe!==null&&zc(T,Oe,O,F,!0)}}e:{if(w=j?Kt(j):window,P=w.nodeName&&w.nodeName.toLowerCase(),P==="select"||P==="input"&&w.type==="file")var $=bh;else if(lc(w))if(dc)$=Sh;else{$=wh;var Y=Nh}else(P=w.nodeName)&&P.toLowerCase()==="input"&&(w.type==="checkbox"||w.type==="radio")&&($=kh);if($&&($=$(r,j))){cc(T,$,s,S);break e}Y&&Y(r,w,j),r==="focusout"&&(Y=w._wrapperState)&&Y.controlled&&w.type==="number"&&Ya(w,"number",w.value)}switch(Y=j?Kt(j):window,r){case"focusin":(lc(Y)||Y.contentEditable==="true")&&(Gt=Y,Sn=j,Ws=null);break;case"focusout":Ws=Sn=Gt=null;break;case"mousedown":Tn=!0;break;case"contextmenu":case"mouseup":case"dragend":Tn=!1,vc(T,s,S);break;case"selectionchange":if(Lh)break;case"keydown":case"keyup":vc(T,s,S)}var K;if(bn)e:{switch(r){case"compositionstart":var ee="onCompositionStart";break e;case"compositionend":ee="onCompositionEnd";break e;case"compositionupdate":ee="onCompositionUpdate";break e}ee=void 0}else Vt?nc(r,s)&&(ee="onCompositionEnd"):r==="keydown"&&s.keyCode===229&&(ee="onCompositionStart");ee&&(sc&&s.locale!=="ko"&&(Vt||ee!=="onCompositionStart"?ee==="onCompositionEnd"&&Vt&&(K=Xl()):(st=S,mn="value"in st?st.value:st.textContent,Vt=!0)),Y=Fo(j,ee),0<Y.length&&(ee=new rc(ee,r,null,s,S),T.push({event:ee,listeners:Y}),K?ee.data=K:(K=ic(s),K!==null&&(ee.data=K)))),(K=fh?gh(r,s):vh(r,s))&&(j=Fo(j,"onBeforeInput"),0<j.length&&(S=new rc("onBeforeInput","beforeinput",null,s,S),T.push({event:S,listeners:j}),S.data=K))}Cc(T,t)})}function $s(r,t,s){return{instance:r,listener:t,currentTarget:s}}function Fo(r,t){for(var s=t+"Capture",o=[];r!==null;){var n=r,i=n.stateNode;n.tag===5&&i!==null&&(n=i,i=Ss(r,s),i!=null&&o.unshift($s(r,i,n)),i=Ss(r,t),i!=null&&o.push($s(r,i,n))),r=r.return}return o}function qt(r){if(r===null)return null;do r=r.return;while(r&&r.tag!==5);return r||null}function zc(r,t,s,o,n){for(var i=t._reactName,d=[];s!==null&&s!==o;){var u=s,x=u.alternate,j=u.stateNode;if(x!==null&&x===o)break;u.tag===5&&j!==null&&(u=j,n?(x=Ss(s,i),x!=null&&d.unshift($s(s,x,u))):n||(x=Ss(s,i),x!=null&&d.push($s(s,x,u)))),s=s.return}d.length!==0&&r.push({event:t,listeners:d})}var Mh=/\r\n?/g,Bh=/\u0000|\uFFFD/g;function Ic(r){return(typeof r=="string"?r:""+r).replace(Mh,`
`).replace(Bh,"")}function Wo(r,t,s){if(t=Ic(t),Ic(r)!==t&&s)throw Error(l(425))}function Do(){}var Mn=null,Bn=null;function Pn(r,t){return r==="textarea"||r==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Hn=typeof setTimeout=="function"?setTimeout:void 0,Ph=typeof clearTimeout=="function"?clearTimeout:void 0,Ec=typeof Promise=="function"?Promise:void 0,Hh=typeof queueMicrotask=="function"?queueMicrotask:typeof Ec!="undefined"?function(r){return Ec.resolve(null).then(r).catch(_h)}:Hn;function _h(r){setTimeout(function(){throw r})}function _n(r,t){var s=t,o=0;do{var n=s.nextSibling;if(r.removeChild(s),n&&n.nodeType===8)if(s=n.data,s==="/$"){if(o===0){r.removeChild(n),Ps(t);return}o--}else s!=="$"&&s!=="$?"&&s!=="$!"||o++;s=n}while(s);Ps(t)}function at(r){for(;r!=null;r=r.nextSibling){var t=r.nodeType;if(t===1||t===3)break;if(t===8){if(t=r.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return r}function Mc(r){r=r.previousSibling;for(var t=0;r;){if(r.nodeType===8){var s=r.data;if(s==="$"||s==="$!"||s==="$?"){if(t===0)return r;t--}else s==="/$"&&t++}r=r.previousSibling}return null}var Yt=Math.random().toString(36).slice(2),Or="__reactFiber$"+Yt,Vs="__reactProps$"+Yt,Dr="__reactContainer$"+Yt,On="__reactEvents$"+Yt,Oh="__reactListeners$"+Yt,Rh="__reactHandles$"+Yt;function Nt(r){var t=r[Or];if(t)return t;for(var s=r.parentNode;s;){if(t=s[Dr]||s[Or]){if(s=t.alternate,t.child!==null||s!==null&&s.child!==null)for(r=Mc(r);r!==null;){if(s=r[Or])return s;r=Mc(r)}return t}r=s,s=r.parentNode}return null}function Gs(r){return r=r[Or]||r[Dr],!r||r.tag!==5&&r.tag!==6&&r.tag!==13&&r.tag!==3?null:r}function Kt(r){if(r.tag===5||r.tag===6)return r.stateNode;throw Error(l(33))}function Uo(r){return r[Vs]||null}var Rn=[],Jt=-1;function nt(r){return{current:r}}function Te(r){0>Jt||(r.current=Rn[Jt],Rn[Jt]=null,Jt--)}function ke(r,t){Jt++,Rn[Jt]=r.current,r.current=t}var it={},Ze=nt(it),ir=nt(!1),wt=it;function Xt(r,t){var s=r.type.contextTypes;if(!s)return it;var o=r.stateNode;if(o&&o.__reactInternalMemoizedUnmaskedChildContext===t)return o.__reactInternalMemoizedMaskedChildContext;var n={},i;for(i in s)n[i]=t[i];return o&&(r=r.stateNode,r.__reactInternalMemoizedUnmaskedChildContext=t,r.__reactInternalMemoizedMaskedChildContext=n),n}function lr(r){return r=r.childContextTypes,r!=null}function $o(){Te(ir),Te(Ze)}function Bc(r,t,s){if(Ze.current!==it)throw Error(l(168));ke(Ze,t),ke(ir,s)}function Pc(r,t,s){var o=r.stateNode;if(t=t.childContextTypes,typeof o.getChildContext!="function")return s;o=o.getChildContext();for(var n in o)if(!(n in t))throw Error(l(108,fe(r)||"Unknown",n));return B({},s,o)}function Vo(r){return r=(r=r.stateNode)&&r.__reactInternalMemoizedMergedChildContext||it,wt=Ze.current,ke(Ze,r),ke(ir,ir.current),!0}function Hc(r,t,s){var o=r.stateNode;if(!o)throw Error(l(169));s?(r=Pc(r,t,wt),o.__reactInternalMemoizedMergedChildContext=r,Te(ir),Te(Ze),ke(Ze,r)):Te(ir),ke(ir,s)}var Ur=null,Go=!1,An=!1;function _c(r){Ur===null?Ur=[r]:Ur.push(r)}function Ah(r){Go=!0,_c(r)}function lt(){if(!An&&Ur!==null){An=!0;var r=0,t=be;try{var s=Ur;for(be=1;r<s.length;r++){var o=s[r];do o=o(!0);while(o!==null)}Ur=null,Go=!1}catch(n){throw Ur!==null&&(Ur=Ur.slice(r+1)),Rl(nn,lt),n}finally{be=t,An=!1}}return null}var Zt=[],es=0,Qo=null,qo=0,yr=[],jr=0,kt=null,$r=1,Vr="";function St(r,t){Zt[es++]=qo,Zt[es++]=Qo,Qo=r,qo=t}function Oc(r,t,s){yr[jr++]=$r,yr[jr++]=Vr,yr[jr++]=kt,kt=r;var o=$r;r=Vr;var n=32-Cr(o)-1;o&=~(1<<n),s+=1;var i=32-Cr(t)+n;if(30<i){var d=n-n%5;i=(o&(1<<d)-1).toString(32),o>>=d,n-=d,$r=1<<32-Cr(t)+n|s<<n|o,Vr=i+r}else $r=1<<i|s<<n|o,Vr=r}function Fn(r){r.return!==null&&(St(r,1),Oc(r,1,0))}function Wn(r){for(;r===Qo;)Qo=Zt[--es],Zt[es]=null,qo=Zt[--es],Zt[es]=null;for(;r===kt;)kt=yr[--jr],yr[jr]=null,Vr=yr[--jr],yr[jr]=null,$r=yr[--jr],yr[jr]=null}var mr=null,fr=null,ze=!1,zr=null;function Rc(r,t){var s=kr(5,null,null,0);s.elementType="DELETED",s.stateNode=t,s.return=r,t=r.deletions,t===null?(r.deletions=[s],r.flags|=16):t.push(s)}function Ac(r,t){switch(r.tag){case 5:var s=r.type;return t=t.nodeType!==1||s.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(r.stateNode=t,mr=r,fr=at(t.firstChild),!0):!1;case 6:return t=r.pendingProps===""||t.nodeType!==3?null:t,t!==null?(r.stateNode=t,mr=r,fr=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(s=kt!==null?{id:$r,overflow:Vr}:null,r.memoizedState={dehydrated:t,treeContext:s,retryLane:1073741824},s=kr(18,null,null,0),s.stateNode=t,s.return=r,r.child=s,mr=r,fr=null,!0):!1;default:return!1}}function Dn(r){return(r.mode&1)!==0&&(r.flags&128)===0}function Un(r){if(ze){var t=fr;if(t){var s=t;if(!Ac(r,t)){if(Dn(r))throw Error(l(418));t=at(s.nextSibling);var o=mr;t&&Ac(r,t)?Rc(o,s):(r.flags=r.flags&-4097|2,ze=!1,mr=r)}}else{if(Dn(r))throw Error(l(418));r.flags=r.flags&-4097|2,ze=!1,mr=r}}}function Fc(r){for(r=r.return;r!==null&&r.tag!==5&&r.tag!==3&&r.tag!==13;)r=r.return;mr=r}function Yo(r){if(r!==mr)return!1;if(!ze)return Fc(r),ze=!0,!1;var t;if((t=r.tag!==3)&&!(t=r.tag!==5)&&(t=r.type,t=t!=="head"&&t!=="body"&&!Pn(r.type,r.memoizedProps)),t&&(t=fr)){if(Dn(r))throw Wc(),Error(l(418));for(;t;)Rc(r,t),t=at(t.nextSibling)}if(Fc(r),r.tag===13){if(r=r.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(l(317));e:{for(r=r.nextSibling,t=0;r;){if(r.nodeType===8){var s=r.data;if(s==="/$"){if(t===0){fr=at(r.nextSibling);break e}t--}else s!=="$"&&s!=="$!"&&s!=="$?"||t++}r=r.nextSibling}fr=null}}else fr=mr?at(r.stateNode.nextSibling):null;return!0}function Wc(){for(var r=fr;r;)r=at(r.nextSibling)}function rs(){fr=mr=null,ze=!1}function $n(r){zr===null?zr=[r]:zr.push(r)}var Fh=E.ReactCurrentBatchConfig;function Qs(r,t,s){if(r=s.ref,r!==null&&typeof r!="function"&&typeof r!="object"){if(s._owner){if(s=s._owner,s){if(s.tag!==1)throw Error(l(309));var o=s.stateNode}if(!o)throw Error(l(147,r));var n=o,i=""+r;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(d){var u=n.refs;d===null?delete u[i]:u[i]=d},t._stringRef=i,t)}if(typeof r!="string")throw Error(l(284));if(!s._owner)throw Error(l(290,r))}return r}function Ko(r,t){throw r=Object.prototype.toString.call(t),Error(l(31,r==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":r))}function Dc(r){var t=r._init;return t(r._payload)}function Uc(r){function t(v,m){if(r){var y=v.deletions;y===null?(v.deletions=[m],v.flags|=16):y.push(m)}}function s(v,m){if(!r)return null;for(;m!==null;)t(v,m),m=m.sibling;return null}function o(v,m){for(v=new Map;m!==null;)m.key!==null?v.set(m.key,m):v.set(m.index,m),m=m.sibling;return v}function n(v,m){return v=ft(v,m),v.index=0,v.sibling=null,v}function i(v,m,y){return v.index=y,r?(y=v.alternate,y!==null?(y=y.index,y<m?(v.flags|=2,m):y):(v.flags|=2,m)):(v.flags|=1048576,m)}function d(v){return r&&v.alternate===null&&(v.flags|=2),v}function u(v,m,y,L){return m===null||m.tag!==6?(m=Hi(y,v.mode,L),m.return=v,m):(m=n(m,y),m.return=v,m)}function x(v,m,y,L){var $=y.type;return $===M?S(v,m,y.props.children,L,y.key):m!==null&&(m.elementType===$||typeof $=="object"&&$!==null&&$.$$typeof===Xe&&Dc($)===m.type)?(L=n(m,y.props),L.ref=Qs(v,m,y),L.return=v,L):(L=ja(y.type,y.key,y.props,null,v.mode,L),L.ref=Qs(v,m,y),L.return=v,L)}function j(v,m,y,L){return m===null||m.tag!==4||m.stateNode.containerInfo!==y.containerInfo||m.stateNode.implementation!==y.implementation?(m=_i(y,v.mode,L),m.return=v,m):(m=n(m,y.children||[]),m.return=v,m)}function S(v,m,y,L,$){return m===null||m.tag!==7?(m=Bt(y,v.mode,L,$),m.return=v,m):(m=n(m,y),m.return=v,m)}function T(v,m,y){if(typeof m=="string"&&m!==""||typeof m=="number")return m=Hi(""+m,v.mode,y),m.return=v,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case te:return y=ja(m.type,m.key,m.props,null,v.mode,y),y.ref=Qs(v,null,m),y.return=v,y;case q:return m=_i(m,v.mode,y),m.return=v,m;case Xe:var L=m._init;return T(v,L(m._payload),y)}if(Ns(m)||V(m))return m=Bt(m,v.mode,y,null),m.return=v,m;Ko(v,m)}return null}function w(v,m,y,L){var $=m!==null?m.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return $!==null?null:u(v,m,""+y,L);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case te:return y.key===$?x(v,m,y,L):null;case q:return y.key===$?j(v,m,y,L):null;case Xe:return $=y._init,w(v,m,$(y._payload),L)}if(Ns(y)||V(y))return $!==null?null:S(v,m,y,L,null);Ko(v,y)}return null}function P(v,m,y,L,$){if(typeof L=="string"&&L!==""||typeof L=="number")return v=v.get(y)||null,u(m,v,""+L,$);if(typeof L=="object"&&L!==null){switch(L.$$typeof){case te:return v=v.get(L.key===null?y:L.key)||null,x(m,v,L,$);case q:return v=v.get(L.key===null?y:L.key)||null,j(m,v,L,$);case Xe:var Y=L._init;return P(v,m,y,Y(L._payload),$)}if(Ns(L)||V(L))return v=v.get(y)||null,S(m,v,L,$,null);Ko(m,L)}return null}function O(v,m,y,L){for(var $=null,Y=null,K=m,ee=m=0,Qe=null;K!==null&&ee<y.length;ee++){K.index>ee?(Qe=K,K=null):Qe=K.sibling;var ve=w(v,K,y[ee],L);if(ve===null){K===null&&(K=Qe);break}r&&K&&ve.alternate===null&&t(v,K),m=i(ve,m,ee),Y===null?$=ve:Y.sibling=ve,Y=ve,K=Qe}if(ee===y.length)return s(v,K),ze&&St(v,ee),$;if(K===null){for(;ee<y.length;ee++)K=T(v,y[ee],L),K!==null&&(m=i(K,m,ee),Y===null?$=K:Y.sibling=K,Y=K);return ze&&St(v,ee),$}for(K=o(v,K);ee<y.length;ee++)Qe=P(K,v,ee,y[ee],L),Qe!==null&&(r&&Qe.alternate!==null&&K.delete(Qe.key===null?ee:Qe.key),m=i(Qe,m,ee),Y===null?$=Qe:Y.sibling=Qe,Y=Qe);return r&&K.forEach(function(gt){return t(v,gt)}),ze&&St(v,ee),$}function F(v,m,y,L){var $=V(y);if(typeof $!="function")throw Error(l(150));if(y=$.call(y),y==null)throw Error(l(151));for(var Y=$=null,K=m,ee=m=0,Qe=null,ve=y.next();K!==null&&!ve.done;ee++,ve=y.next()){K.index>ee?(Qe=K,K=null):Qe=K.sibling;var gt=w(v,K,ve.value,L);if(gt===null){K===null&&(K=Qe);break}r&&K&&gt.alternate===null&&t(v,K),m=i(gt,m,ee),Y===null?$=gt:Y.sibling=gt,Y=gt,K=Qe}if(ve.done)return s(v,K),ze&&St(v,ee),$;if(K===null){for(;!ve.done;ee++,ve=y.next())ve=T(v,ve.value,L),ve!==null&&(m=i(ve,m,ee),Y===null?$=ve:Y.sibling=ve,Y=ve);return ze&&St(v,ee),$}for(K=o(v,K);!ve.done;ee++,ve=y.next())ve=P(K,v,ee,ve.value,L),ve!==null&&(r&&ve.alternate!==null&&K.delete(ve.key===null?ee:ve.key),m=i(ve,m,ee),Y===null?$=ve:Y.sibling=ve,Y=ve);return r&&K.forEach(function(yx){return t(v,yx)}),ze&&St(v,ee),$}function Oe(v,m,y,L){if(typeof y=="object"&&y!==null&&y.type===M&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case te:e:{for(var $=y.key,Y=m;Y!==null;){if(Y.key===$){if($=y.type,$===M){if(Y.tag===7){s(v,Y.sibling),m=n(Y,y.props.children),m.return=v,v=m;break e}}else if(Y.elementType===$||typeof $=="object"&&$!==null&&$.$$typeof===Xe&&Dc($)===Y.type){s(v,Y.sibling),m=n(Y,y.props),m.ref=Qs(v,Y,y),m.return=v,v=m;break e}s(v,Y);break}else t(v,Y);Y=Y.sibling}y.type===M?(m=Bt(y.props.children,v.mode,L,y.key),m.return=v,v=m):(L=ja(y.type,y.key,y.props,null,v.mode,L),L.ref=Qs(v,m,y),L.return=v,v=L)}return d(v);case q:e:{for(Y=y.key;m!==null;){if(m.key===Y)if(m.tag===4&&m.stateNode.containerInfo===y.containerInfo&&m.stateNode.implementation===y.implementation){s(v,m.sibling),m=n(m,y.children||[]),m.return=v,v=m;break e}else{s(v,m);break}else t(v,m);m=m.sibling}m=_i(y,v.mode,L),m.return=v,v=m}return d(v);case Xe:return Y=y._init,Oe(v,m,Y(y._payload),L)}if(Ns(y))return O(v,m,y,L);if(V(y))return F(v,m,y,L);Ko(v,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,m!==null&&m.tag===6?(s(v,m.sibling),m=n(m,y),m.return=v,v=m):(s(v,m),m=Hi(y,v.mode,L),m.return=v,v=m),d(v)):s(v,m)}return Oe}var ts=Uc(!0),$c=Uc(!1),Jo=nt(null),Xo=null,ss=null,Vn=null;function Gn(){Vn=ss=Xo=null}function Qn(r){var t=Jo.current;Te(Jo),r._currentValue=t}function qn(r,t,s){for(;r!==null;){var o=r.alternate;if((r.childLanes&t)!==t?(r.childLanes|=t,o!==null&&(o.childLanes|=t)):o!==null&&(o.childLanes&t)!==t&&(o.childLanes|=t),r===s)break;r=r.return}}function os(r,t){Xo=r,Vn=ss=null,r=r.dependencies,r!==null&&r.firstContext!==null&&((r.lanes&t)!==0&&(cr=!0),r.firstContext=null)}function br(r){var t=r._currentValue;if(Vn!==r)if(r={context:r,memoizedValue:t,next:null},ss===null){if(Xo===null)throw Error(l(308));ss=r,Xo.dependencies={lanes:0,firstContext:r}}else ss=ss.next=r;return t}var Tt=null;function Yn(r){Tt===null?Tt=[r]:Tt.push(r)}function Vc(r,t,s,o){var n=t.interleaved;return n===null?(s.next=s,Yn(t)):(s.next=n.next,n.next=s),t.interleaved=s,Gr(r,o)}function Gr(r,t){r.lanes|=t;var s=r.alternate;for(s!==null&&(s.lanes|=t),s=r,r=r.return;r!==null;)r.childLanes|=t,s=r.alternate,s!==null&&(s.childLanes|=t),s=r,r=r.return;return s.tag===3?s.stateNode:null}var ct=!1;function Kn(r){r.updateQueue={baseState:r.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Gc(r,t){r=r.updateQueue,t.updateQueue===r&&(t.updateQueue={baseState:r.baseState,firstBaseUpdate:r.firstBaseUpdate,lastBaseUpdate:r.lastBaseUpdate,shared:r.shared,effects:r.effects})}function Qr(r,t){return{eventTime:r,lane:t,tag:0,payload:null,callback:null,next:null}}function dt(r,t,s){var o=r.updateQueue;if(o===null)return null;if(o=o.shared,(ge&2)!==0){var n=o.pending;return n===null?t.next=t:(t.next=n.next,n.next=t),o.pending=t,Gr(r,s)}return n=o.interleaved,n===null?(t.next=t,Yn(o)):(t.next=n.next,n.next=t),o.interleaved=t,Gr(r,s)}function Zo(r,t,s){if(t=t.updateQueue,t!==null&&(t=t.shared,(s&4194240)!==0)){var o=t.lanes;o&=r.pendingLanes,s|=o,t.lanes=s,dn(r,s)}}function Qc(r,t){var s=r.updateQueue,o=r.alternate;if(o!==null&&(o=o.updateQueue,s===o)){var n=null,i=null;if(s=s.firstBaseUpdate,s!==null){do{var d={eventTime:s.eventTime,lane:s.lane,tag:s.tag,payload:s.payload,callback:s.callback,next:null};i===null?n=i=d:i=i.next=d,s=s.next}while(s!==null);i===null?n=i=t:i=i.next=t}else n=i=t;s={baseState:o.baseState,firstBaseUpdate:n,lastBaseUpdate:i,shared:o.shared,effects:o.effects},r.updateQueue=s;return}r=s.lastBaseUpdate,r===null?s.firstBaseUpdate=t:r.next=t,s.lastBaseUpdate=t}function ea(r,t,s,o){var n=r.updateQueue;ct=!1;var i=n.firstBaseUpdate,d=n.lastBaseUpdate,u=n.shared.pending;if(u!==null){n.shared.pending=null;var x=u,j=x.next;x.next=null,d===null?i=j:d.next=j,d=x;var S=r.alternate;S!==null&&(S=S.updateQueue,u=S.lastBaseUpdate,u!==d&&(u===null?S.firstBaseUpdate=j:u.next=j,S.lastBaseUpdate=x))}if(i!==null){var T=n.baseState;d=0,S=j=x=null,u=i;do{var w=u.lane,P=u.eventTime;if((o&w)===w){S!==null&&(S=S.next={eventTime:P,lane:0,tag:u.tag,payload:u.payload,callback:u.callback,next:null});e:{var O=r,F=u;switch(w=t,P=s,F.tag){case 1:if(O=F.payload,typeof O=="function"){T=O.call(P,T,w);break e}T=O;break e;case 3:O.flags=O.flags&-65537|128;case 0:if(O=F.payload,w=typeof O=="function"?O.call(P,T,w):O,w==null)break e;T=B({},T,w);break e;case 2:ct=!0}}u.callback!==null&&u.lane!==0&&(r.flags|=64,w=n.effects,w===null?n.effects=[u]:w.push(u))}else P={eventTime:P,lane:w,tag:u.tag,payload:u.payload,callback:u.callback,next:null},S===null?(j=S=P,x=T):S=S.next=P,d|=w;if(u=u.next,u===null){if(u=n.shared.pending,u===null)break;w=u,u=w.next,w.next=null,n.lastBaseUpdate=w,n.shared.pending=null}}while(!0);if(S===null&&(x=T),n.baseState=x,n.firstBaseUpdate=j,n.lastBaseUpdate=S,t=n.shared.interleaved,t!==null){n=t;do d|=n.lane,n=n.next;while(n!==t)}else i===null&&(n.shared.lanes=0);zt|=d,r.lanes=d,r.memoizedState=T}}function qc(r,t,s){if(r=t.effects,t.effects=null,r!==null)for(t=0;t<r.length;t++){var o=r[t],n=o.callback;if(n!==null){if(o.callback=null,o=s,typeof n!="function")throw Error(l(191,n));n.call(o)}}}var qs={},Rr=nt(qs),Ys=nt(qs),Ks=nt(qs);function Ct(r){if(r===qs)throw Error(l(174));return r}function Jn(r,t){switch(ke(Ks,t),ke(Ys,r),ke(Rr,qs),r=t.nodeType,r){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Ja(null,"");break;default:r=r===8?t.parentNode:t,t=r.namespaceURI||null,r=r.tagName,t=Ja(t,r)}Te(Rr),ke(Rr,t)}function as(){Te(Rr),Te(Ys),Te(Ks)}function Yc(r){Ct(Ks.current);var t=Ct(Rr.current),s=Ja(t,r.type);t!==s&&(ke(Ys,r),ke(Rr,s))}function Xn(r){Ys.current===r&&(Te(Rr),Te(Ys))}var Ee=nt(0);function ra(r){for(var t=r;t!==null;){if(t.tag===13){var s=t.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||s.data==="$?"||s.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===r)break;for(;t.sibling===null;){if(t.return===null||t.return===r)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Zn=[];function ei(){for(var r=0;r<Zn.length;r++)Zn[r]._workInProgressVersionPrimary=null;Zn.length=0}var ta=E.ReactCurrentDispatcher,ri=E.ReactCurrentBatchConfig,Lt=0,Me=null,De=null,Ve=null,sa=!1,Js=!1,Xs=0,Wh=0;function er(){throw Error(l(321))}function ti(r,t){if(t===null)return!1;for(var s=0;s<t.length&&s<r.length;s++)if(!Lr(r[s],t[s]))return!1;return!0}function si(r,t,s,o,n,i){if(Lt=i,Me=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ta.current=r===null||r.memoizedState===null?Vh:Gh,r=s(o,n),Js){i=0;do{if(Js=!1,Xs=0,25<=i)throw Error(l(301));i+=1,Ve=De=null,t.updateQueue=null,ta.current=Qh,r=s(o,n)}while(Js)}if(ta.current=na,t=De!==null&&De.next!==null,Lt=0,Ve=De=Me=null,sa=!1,t)throw Error(l(300));return r}function oi(){var r=Xs!==0;return Xs=0,r}function Ar(){var r={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ve===null?Me.memoizedState=Ve=r:Ve=Ve.next=r,Ve}function Nr(){if(De===null){var r=Me.alternate;r=r!==null?r.memoizedState:null}else r=De.next;var t=Ve===null?Me.memoizedState:Ve.next;if(t!==null)Ve=t,De=r;else{if(r===null)throw Error(l(310));De=r,r={memoizedState:De.memoizedState,baseState:De.baseState,baseQueue:De.baseQueue,queue:De.queue,next:null},Ve===null?Me.memoizedState=Ve=r:Ve=Ve.next=r}return Ve}function Zs(r,t){return typeof t=="function"?t(r):t}function ai(r){var t=Nr(),s=t.queue;if(s===null)throw Error(l(311));s.lastRenderedReducer=r;var o=De,n=o.baseQueue,i=s.pending;if(i!==null){if(n!==null){var d=n.next;n.next=i.next,i.next=d}o.baseQueue=n=i,s.pending=null}if(n!==null){i=n.next,o=o.baseState;var u=d=null,x=null,j=i;do{var S=j.lane;if((Lt&S)===S)x!==null&&(x=x.next={lane:0,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null}),o=j.hasEagerState?j.eagerState:r(o,j.action);else{var T={lane:S,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null};x===null?(u=x=T,d=o):x=x.next=T,Me.lanes|=S,zt|=S}j=j.next}while(j!==null&&j!==i);x===null?d=o:x.next=u,Lr(o,t.memoizedState)||(cr=!0),t.memoizedState=o,t.baseState=d,t.baseQueue=x,s.lastRenderedState=o}if(r=s.interleaved,r!==null){n=r;do i=n.lane,Me.lanes|=i,zt|=i,n=n.next;while(n!==r)}else n===null&&(s.lanes=0);return[t.memoizedState,s.dispatch]}function ni(r){var t=Nr(),s=t.queue;if(s===null)throw Error(l(311));s.lastRenderedReducer=r;var o=s.dispatch,n=s.pending,i=t.memoizedState;if(n!==null){s.pending=null;var d=n=n.next;do i=r(i,d.action),d=d.next;while(d!==n);Lr(i,t.memoizedState)||(cr=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),s.lastRenderedState=i}return[i,o]}function Kc(){}function Jc(r,t){var s=Me,o=Nr(),n=t(),i=!Lr(o.memoizedState,n);if(i&&(o.memoizedState=n,cr=!0),o=o.queue,ii(ed.bind(null,s,o,r),[r]),o.getSnapshot!==t||i||Ve!==null&&Ve.memoizedState.tag&1){if(s.flags|=2048,eo(9,Zc.bind(null,s,o,n,t),void 0,null),Ge===null)throw Error(l(349));(Lt&30)!==0||Xc(s,t,n)}return n}function Xc(r,t,s){r.flags|=16384,r={getSnapshot:t,value:s},t=Me.updateQueue,t===null?(t={lastEffect:null,stores:null},Me.updateQueue=t,t.stores=[r]):(s=t.stores,s===null?t.stores=[r]:s.push(r))}function Zc(r,t,s,o){t.value=s,t.getSnapshot=o,rd(t)&&td(r)}function ed(r,t,s){return s(function(){rd(t)&&td(r)})}function rd(r){var t=r.getSnapshot;r=r.value;try{var s=t();return!Lr(r,s)}catch{return!0}}function td(r){var t=Gr(r,1);t!==null&&Br(t,r,1,-1)}function sd(r){var t=Ar();return typeof r=="function"&&(r=r()),t.memoizedState=t.baseState=r,r={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Zs,lastRenderedState:r},t.queue=r,r=r.dispatch=$h.bind(null,Me,r),[t.memoizedState,r]}function eo(r,t,s,o){return r={tag:r,create:t,destroy:s,deps:o,next:null},t=Me.updateQueue,t===null?(t={lastEffect:null,stores:null},Me.updateQueue=t,t.lastEffect=r.next=r):(s=t.lastEffect,s===null?t.lastEffect=r.next=r:(o=s.next,s.next=r,r.next=o,t.lastEffect=r)),r}function od(){return Nr().memoizedState}function oa(r,t,s,o){var n=Ar();Me.flags|=r,n.memoizedState=eo(1|t,s,void 0,o===void 0?null:o)}function aa(r,t,s,o){var n=Nr();o=o===void 0?null:o;var i=void 0;if(De!==null){var d=De.memoizedState;if(i=d.destroy,o!==null&&ti(o,d.deps)){n.memoizedState=eo(t,s,i,o);return}}Me.flags|=r,n.memoizedState=eo(1|t,s,i,o)}function ad(r,t){return oa(8390656,8,r,t)}function ii(r,t){return aa(2048,8,r,t)}function nd(r,t){return aa(4,2,r,t)}function id(r,t){return aa(4,4,r,t)}function ld(r,t){if(typeof t=="function")return r=r(),t(r),function(){t(null)};if(t!=null)return r=r(),t.current=r,function(){t.current=null}}function cd(r,t,s){return s=s!=null?s.concat([r]):null,aa(4,4,ld.bind(null,t,r),s)}function li(){}function dd(r,t){var s=Nr();t=t===void 0?null:t;var o=s.memoizedState;return o!==null&&t!==null&&ti(t,o[1])?o[0]:(s.memoizedState=[r,t],r)}function pd(r,t){var s=Nr();t=t===void 0?null:t;var o=s.memoizedState;return o!==null&&t!==null&&ti(t,o[1])?o[0]:(r=r(),s.memoizedState=[r,t],r)}function ud(r,t,s){return(Lt&21)===0?(r.baseState&&(r.baseState=!1,cr=!0),r.memoizedState=s):(Lr(s,t)||(s=Dl(),Me.lanes|=s,zt|=s,r.baseState=!0),t)}function Dh(r,t){var s=be;be=s!==0&&4>s?s:4,r(!0);var o=ri.transition;ri.transition={};try{r(!1),t()}finally{be=s,ri.transition=o}}function hd(){return Nr().memoizedState}function Uh(r,t,s){var o=xt(r);if(s={lane:o,action:s,hasEagerState:!1,eagerState:null,next:null},xd(r))md(t,s);else if(s=Vc(r,t,s,o),s!==null){var n=nr();Br(s,r,o,n),fd(s,t,o)}}function $h(r,t,s){var o=xt(r),n={lane:o,action:s,hasEagerState:!1,eagerState:null,next:null};if(xd(r))md(t,n);else{var i=r.alternate;if(r.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var d=t.lastRenderedState,u=i(d,s);if(n.hasEagerState=!0,n.eagerState=u,Lr(u,d)){var x=t.interleaved;x===null?(n.next=n,Yn(t)):(n.next=x.next,x.next=n),t.interleaved=n;return}}catch{}finally{}s=Vc(r,t,n,o),s!==null&&(n=nr(),Br(s,r,o,n),fd(s,t,o))}}function xd(r){var t=r.alternate;return r===Me||t!==null&&t===Me}function md(r,t){Js=sa=!0;var s=r.pending;s===null?t.next=t:(t.next=s.next,s.next=t),r.pending=t}function fd(r,t,s){if((s&4194240)!==0){var o=t.lanes;o&=r.pendingLanes,s|=o,t.lanes=s,dn(r,s)}}var na={readContext:br,useCallback:er,useContext:er,useEffect:er,useImperativeHandle:er,useInsertionEffect:er,useLayoutEffect:er,useMemo:er,useReducer:er,useRef:er,useState:er,useDebugValue:er,useDeferredValue:er,useTransition:er,useMutableSource:er,useSyncExternalStore:er,useId:er,unstable_isNewReconciler:!1},Vh={readContext:br,useCallback:function(r,t){return Ar().memoizedState=[r,t===void 0?null:t],r},useContext:br,useEffect:ad,useImperativeHandle:function(r,t,s){return s=s!=null?s.concat([r]):null,oa(4194308,4,ld.bind(null,t,r),s)},useLayoutEffect:function(r,t){return oa(4194308,4,r,t)},useInsertionEffect:function(r,t){return oa(4,2,r,t)},useMemo:function(r,t){var s=Ar();return t=t===void 0?null:t,r=r(),s.memoizedState=[r,t],r},useReducer:function(r,t,s){var o=Ar();return t=s!==void 0?s(t):t,o.memoizedState=o.baseState=t,r={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:r,lastRenderedState:t},o.queue=r,r=r.dispatch=Uh.bind(null,Me,r),[o.memoizedState,r]},useRef:function(r){var t=Ar();return r={current:r},t.memoizedState=r},useState:sd,useDebugValue:li,useDeferredValue:function(r){return Ar().memoizedState=r},useTransition:function(){var r=sd(!1),t=r[0];return r=Dh.bind(null,r[1]),Ar().memoizedState=r,[t,r]},useMutableSource:function(){},useSyncExternalStore:function(r,t,s){var o=Me,n=Ar();if(ze){if(s===void 0)throw Error(l(407));s=s()}else{if(s=t(),Ge===null)throw Error(l(349));(Lt&30)!==0||Xc(o,t,s)}n.memoizedState=s;var i={value:s,getSnapshot:t};return n.queue=i,ad(ed.bind(null,o,i,r),[r]),o.flags|=2048,eo(9,Zc.bind(null,o,i,s,t),void 0,null),s},useId:function(){var r=Ar(),t=Ge.identifierPrefix;if(ze){var s=Vr,o=$r;s=(o&~(1<<32-Cr(o)-1)).toString(32)+s,t=":"+t+"R"+s,s=Xs++,0<s&&(t+="H"+s.toString(32)),t+=":"}else s=Wh++,t=":"+t+"r"+s.toString(32)+":";return r.memoizedState=t},unstable_isNewReconciler:!1},Gh={readContext:br,useCallback:dd,useContext:br,useEffect:ii,useImperativeHandle:cd,useInsertionEffect:nd,useLayoutEffect:id,useMemo:pd,useReducer:ai,useRef:od,useState:function(){return ai(Zs)},useDebugValue:li,useDeferredValue:function(r){var t=Nr();return ud(t,De.memoizedState,r)},useTransition:function(){var r=ai(Zs)[0],t=Nr().memoizedState;return[r,t]},useMutableSource:Kc,useSyncExternalStore:Jc,useId:hd,unstable_isNewReconciler:!1},Qh={readContext:br,useCallback:dd,useContext:br,useEffect:ii,useImperativeHandle:cd,useInsertionEffect:nd,useLayoutEffect:id,useMemo:pd,useReducer:ni,useRef:od,useState:function(){return ni(Zs)},useDebugValue:li,useDeferredValue:function(r){var t=Nr();return De===null?t.memoizedState=r:ud(t,De.memoizedState,r)},useTransition:function(){var r=ni(Zs)[0],t=Nr().memoizedState;return[r,t]},useMutableSource:Kc,useSyncExternalStore:Jc,useId:hd,unstable_isNewReconciler:!1};function Ir(r,t){if(r&&r.defaultProps){t=B({},t),r=r.defaultProps;for(var s in r)t[s]===void 0&&(t[s]=r[s]);return t}return t}function ci(r,t,s,o){t=r.memoizedState,s=s(o,t),s=s==null?t:B({},t,s),r.memoizedState=s,r.lanes===0&&(r.updateQueue.baseState=s)}var ia={isMounted:function(r){return(r=r._reactInternals)?bt(r)===r:!1},enqueueSetState:function(r,t,s){r=r._reactInternals;var o=nr(),n=xt(r),i=Qr(o,n);i.payload=t,s!=null&&(i.callback=s),t=dt(r,i,n),t!==null&&(Br(t,r,n,o),Zo(t,r,n))},enqueueReplaceState:function(r,t,s){r=r._reactInternals;var o=nr(),n=xt(r),i=Qr(o,n);i.tag=1,i.payload=t,s!=null&&(i.callback=s),t=dt(r,i,n),t!==null&&(Br(t,r,n,o),Zo(t,r,n))},enqueueForceUpdate:function(r,t){r=r._reactInternals;var s=nr(),o=xt(r),n=Qr(s,o);n.tag=2,t!=null&&(n.callback=t),t=dt(r,n,o),t!==null&&(Br(t,r,o,s),Zo(t,r,o))}};function gd(r,t,s,o,n,i,d){return r=r.stateNode,typeof r.shouldComponentUpdate=="function"?r.shouldComponentUpdate(o,i,d):t.prototype&&t.prototype.isPureReactComponent?!Fs(s,o)||!Fs(n,i):!0}function vd(r,t,s){var o=!1,n=it,i=t.contextType;return typeof i=="object"&&i!==null?i=br(i):(n=lr(t)?wt:Ze.current,o=t.contextTypes,i=(o=o!=null)?Xt(r,n):it),t=new t(s,i),r.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ia,r.stateNode=t,t._reactInternals=r,o&&(r=r.stateNode,r.__reactInternalMemoizedUnmaskedChildContext=n,r.__reactInternalMemoizedMaskedChildContext=i),t}function yd(r,t,s,o){r=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(s,o),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(s,o),t.state!==r&&ia.enqueueReplaceState(t,t.state,null)}function di(r,t,s,o){var n=r.stateNode;n.props=s,n.state=r.memoizedState,n.refs={},Kn(r);var i=t.contextType;typeof i=="object"&&i!==null?n.context=br(i):(i=lr(t)?wt:Ze.current,n.context=Xt(r,i)),n.state=r.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(ci(r,t,i,s),n.state=r.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof n.getSnapshotBeforeUpdate=="function"||typeof n.UNSAFE_componentWillMount!="function"&&typeof n.componentWillMount!="function"||(t=n.state,typeof n.componentWillMount=="function"&&n.componentWillMount(),typeof n.UNSAFE_componentWillMount=="function"&&n.UNSAFE_componentWillMount(),t!==n.state&&ia.enqueueReplaceState(n,n.state,null),ea(r,s,n,o),n.state=r.memoizedState),typeof n.componentDidMount=="function"&&(r.flags|=4194308)}function ns(r,t){try{var s="",o=t;do s+=xe(o),o=o.return;while(o);var n=s}catch(i){n=`
Error generating stack: `+i.message+`
`+i.stack}return{value:r,source:t,stack:n,digest:null}}function pi(r,t,s){return{value:r,source:null,stack:s!=null?s:null,digest:t!=null?t:null}}function ui(r,t){try{console.error(t.value)}catch(s){setTimeout(function(){throw s})}}var qh=typeof WeakMap=="function"?WeakMap:Map;function jd(r,t,s){s=Qr(-1,s),s.tag=3,s.payload={element:null};var o=t.value;return s.callback=function(){xa||(xa=!0,Ci=o),ui(r,t)},s}function bd(r,t,s){s=Qr(-1,s),s.tag=3;var o=r.type.getDerivedStateFromError;if(typeof o=="function"){var n=t.value;s.payload=function(){return o(n)},s.callback=function(){ui(r,t)}}var i=r.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(s.callback=function(){ui(r,t),typeof o!="function"&&(ut===null?ut=new Set([this]):ut.add(this));var d=t.stack;this.componentDidCatch(t.value,{componentStack:d!==null?d:""})}),s}function Nd(r,t,s){var o=r.pingCache;if(o===null){o=r.pingCache=new qh;var n=new Set;o.set(t,n)}else n=o.get(t),n===void 0&&(n=new Set,o.set(t,n));n.has(s)||(n.add(s),r=lx.bind(null,r,t,s),t.then(r,r))}function wd(r){do{var t;if((t=r.tag===13)&&(t=r.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return r;r=r.return}while(r!==null);return null}function kd(r,t,s,o,n){return(r.mode&1)===0?(r===t?r.flags|=65536:(r.flags|=128,s.flags|=131072,s.flags&=-52805,s.tag===1&&(s.alternate===null?s.tag=17:(t=Qr(-1,1),t.tag=2,dt(s,t,1))),s.lanes|=1),r):(r.flags|=65536,r.lanes=n,r)}var Yh=E.ReactCurrentOwner,cr=!1;function ar(r,t,s,o){t.child=r===null?$c(t,null,s,o):ts(t,r.child,s,o)}function Sd(r,t,s,o,n){s=s.render;var i=t.ref;return os(t,n),o=si(r,t,s,o,i,n),s=oi(),r!==null&&!cr?(t.updateQueue=r.updateQueue,t.flags&=-2053,r.lanes&=~n,qr(r,t,n)):(ze&&s&&Fn(t),t.flags|=1,ar(r,t,o,n),t.child)}function Td(r,t,s,o,n){if(r===null){var i=s.type;return typeof i=="function"&&!Pi(i)&&i.defaultProps===void 0&&s.compare===null&&s.defaultProps===void 0?(t.tag=15,t.type=i,Cd(r,t,i,o,n)):(r=ja(s.type,null,o,t,t.mode,n),r.ref=t.ref,r.return=t,t.child=r)}if(i=r.child,(r.lanes&n)===0){var d=i.memoizedProps;if(s=s.compare,s=s!==null?s:Fs,s(d,o)&&r.ref===t.ref)return qr(r,t,n)}return t.flags|=1,r=ft(i,o),r.ref=t.ref,r.return=t,t.child=r}function Cd(r,t,s,o,n){if(r!==null){var i=r.memoizedProps;if(Fs(i,o)&&r.ref===t.ref)if(cr=!1,t.pendingProps=o=i,(r.lanes&n)!==0)(r.flags&131072)!==0&&(cr=!0);else return t.lanes=r.lanes,qr(r,t,n)}return hi(r,t,s,o,n)}function Ld(r,t,s){var o=t.pendingProps,n=o.children,i=r!==null?r.memoizedState:null;if(o.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ke(ls,gr),gr|=s;else{if((s&1073741824)===0)return r=i!==null?i.baseLanes|s:s,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:r,cachePool:null,transitions:null},t.updateQueue=null,ke(ls,gr),gr|=r,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},o=i!==null?i.baseLanes:s,ke(ls,gr),gr|=o}else i!==null?(o=i.baseLanes|s,t.memoizedState=null):o=s,ke(ls,gr),gr|=o;return ar(r,t,n,s),t.child}function zd(r,t){var s=t.ref;(r===null&&s!==null||r!==null&&r.ref!==s)&&(t.flags|=512,t.flags|=2097152)}function hi(r,t,s,o,n){var i=lr(s)?wt:Ze.current;return i=Xt(t,i),os(t,n),s=si(r,t,s,o,i,n),o=oi(),r!==null&&!cr?(t.updateQueue=r.updateQueue,t.flags&=-2053,r.lanes&=~n,qr(r,t,n)):(ze&&o&&Fn(t),t.flags|=1,ar(r,t,s,n),t.child)}function Id(r,t,s,o,n){if(lr(s)){var i=!0;Vo(t)}else i=!1;if(os(t,n),t.stateNode===null)ca(r,t),vd(t,s,o),di(t,s,o,n),o=!0;else if(r===null){var d=t.stateNode,u=t.memoizedProps;d.props=u;var x=d.context,j=s.contextType;typeof j=="object"&&j!==null?j=br(j):(j=lr(s)?wt:Ze.current,j=Xt(t,j));var S=s.getDerivedStateFromProps,T=typeof S=="function"||typeof d.getSnapshotBeforeUpdate=="function";T||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(u!==o||x!==j)&&yd(t,d,o,j),ct=!1;var w=t.memoizedState;d.state=w,ea(t,o,d,n),x=t.memoizedState,u!==o||w!==x||ir.current||ct?(typeof S=="function"&&(ci(t,s,S,o),x=t.memoizedState),(u=ct||gd(t,s,u,o,w,x,j))?(T||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(t.flags|=4194308)):(typeof d.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=o,t.memoizedState=x),d.props=o,d.state=x,d.context=j,o=u):(typeof d.componentDidMount=="function"&&(t.flags|=4194308),o=!1)}else{d=t.stateNode,Gc(r,t),u=t.memoizedProps,j=t.type===t.elementType?u:Ir(t.type,u),d.props=j,T=t.pendingProps,w=d.context,x=s.contextType,typeof x=="object"&&x!==null?x=br(x):(x=lr(s)?wt:Ze.current,x=Xt(t,x));var P=s.getDerivedStateFromProps;(S=typeof P=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(u!==T||w!==x)&&yd(t,d,o,x),ct=!1,w=t.memoizedState,d.state=w,ea(t,o,d,n);var O=t.memoizedState;u!==T||w!==O||ir.current||ct?(typeof P=="function"&&(ci(t,s,P,o),O=t.memoizedState),(j=ct||gd(t,s,j,o,w,O,x)||!1)?(S||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(o,O,x),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(o,O,x)),typeof d.componentDidUpdate=="function"&&(t.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof d.componentDidUpdate!="function"||u===r.memoizedProps&&w===r.memoizedState||(t.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||u===r.memoizedProps&&w===r.memoizedState||(t.flags|=1024),t.memoizedProps=o,t.memoizedState=O),d.props=o,d.state=O,d.context=x,o=j):(typeof d.componentDidUpdate!="function"||u===r.memoizedProps&&w===r.memoizedState||(t.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||u===r.memoizedProps&&w===r.memoizedState||(t.flags|=1024),o=!1)}return xi(r,t,s,o,i,n)}function xi(r,t,s,o,n,i){zd(r,t);var d=(t.flags&128)!==0;if(!o&&!d)return n&&Hc(t,s,!1),qr(r,t,i);o=t.stateNode,Yh.current=t;var u=d&&typeof s.getDerivedStateFromError!="function"?null:o.render();return t.flags|=1,r!==null&&d?(t.child=ts(t,r.child,null,i),t.child=ts(t,null,u,i)):ar(r,t,u,i),t.memoizedState=o.state,n&&Hc(t,s,!0),t.child}function Ed(r){var t=r.stateNode;t.pendingContext?Bc(r,t.pendingContext,t.pendingContext!==t.context):t.context&&Bc(r,t.context,!1),Jn(r,t.containerInfo)}function Md(r,t,s,o,n){return rs(),$n(n),t.flags|=256,ar(r,t,s,o),t.child}var mi={dehydrated:null,treeContext:null,retryLane:0};function fi(r){return{baseLanes:r,cachePool:null,transitions:null}}function Bd(r,t,s){var o=t.pendingProps,n=Ee.current,i=!1,d=(t.flags&128)!==0,u;if((u=d)||(u=r!==null&&r.memoizedState===null?!1:(n&2)!==0),u?(i=!0,t.flags&=-129):(r===null||r.memoizedState!==null)&&(n|=1),ke(Ee,n&1),r===null)return Un(t),r=t.memoizedState,r!==null&&(r=r.dehydrated,r!==null)?((t.mode&1)===0?t.lanes=1:r.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(d=o.children,r=o.fallback,i?(o=t.mode,i=t.child,d={mode:"hidden",children:d},(o&1)===0&&i!==null?(i.childLanes=0,i.pendingProps=d):i=ba(d,o,0,null),r=Bt(r,o,s,null),i.return=t,r.return=t,i.sibling=r,t.child=i,t.child.memoizedState=fi(s),t.memoizedState=mi,r):gi(t,d));if(n=r.memoizedState,n!==null&&(u=n.dehydrated,u!==null))return Kh(r,t,d,o,u,n,s);if(i){i=o.fallback,d=t.mode,n=r.child,u=n.sibling;var x={mode:"hidden",children:o.children};return(d&1)===0&&t.child!==n?(o=t.child,o.childLanes=0,o.pendingProps=x,t.deletions=null):(o=ft(n,x),o.subtreeFlags=n.subtreeFlags&14680064),u!==null?i=ft(u,i):(i=Bt(i,d,s,null),i.flags|=2),i.return=t,o.return=t,o.sibling=i,t.child=o,o=i,i=t.child,d=r.child.memoizedState,d=d===null?fi(s):{baseLanes:d.baseLanes|s,cachePool:null,transitions:d.transitions},i.memoizedState=d,i.childLanes=r.childLanes&~s,t.memoizedState=mi,o}return i=r.child,r=i.sibling,o=ft(i,{mode:"visible",children:o.children}),(t.mode&1)===0&&(o.lanes=s),o.return=t,o.sibling=null,r!==null&&(s=t.deletions,s===null?(t.deletions=[r],t.flags|=16):s.push(r)),t.child=o,t.memoizedState=null,o}function gi(r,t){return t=ba({mode:"visible",children:t},r.mode,0,null),t.return=r,r.child=t}function la(r,t,s,o){return o!==null&&$n(o),ts(t,r.child,null,s),r=gi(t,t.pendingProps.children),r.flags|=2,t.memoizedState=null,r}function Kh(r,t,s,o,n,i,d){if(s)return t.flags&256?(t.flags&=-257,o=pi(Error(l(422))),la(r,t,d,o)):t.memoizedState!==null?(t.child=r.child,t.flags|=128,null):(i=o.fallback,n=t.mode,o=ba({mode:"visible",children:o.children},n,0,null),i=Bt(i,n,d,null),i.flags|=2,o.return=t,i.return=t,o.sibling=i,t.child=o,(t.mode&1)!==0&&ts(t,r.child,null,d),t.child.memoizedState=fi(d),t.memoizedState=mi,i);if((t.mode&1)===0)return la(r,t,d,null);if(n.data==="$!"){if(o=n.nextSibling&&n.nextSibling.dataset,o)var u=o.dgst;return o=u,i=Error(l(419)),o=pi(i,o,void 0),la(r,t,d,o)}if(u=(d&r.childLanes)!==0,cr||u){if(o=Ge,o!==null){switch(d&-d){case 4:n=2;break;case 16:n=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:n=32;break;case 536870912:n=268435456;break;default:n=0}n=(n&(o.suspendedLanes|d))!==0?0:n,n!==0&&n!==i.retryLane&&(i.retryLane=n,Gr(r,n),Br(o,r,n,-1))}return Bi(),o=pi(Error(l(421))),la(r,t,d,o)}return n.data==="$?"?(t.flags|=128,t.child=r.child,t=cx.bind(null,r),n._reactRetry=t,null):(r=i.treeContext,fr=at(n.nextSibling),mr=t,ze=!0,zr=null,r!==null&&(yr[jr++]=$r,yr[jr++]=Vr,yr[jr++]=kt,$r=r.id,Vr=r.overflow,kt=t),t=gi(t,o.children),t.flags|=4096,t)}function Pd(r,t,s){r.lanes|=t;var o=r.alternate;o!==null&&(o.lanes|=t),qn(r.return,t,s)}function vi(r,t,s,o,n){var i=r.memoizedState;i===null?r.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:o,tail:s,tailMode:n}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=o,i.tail=s,i.tailMode=n)}function Hd(r,t,s){var o=t.pendingProps,n=o.revealOrder,i=o.tail;if(ar(r,t,o.children,s),o=Ee.current,(o&2)!==0)o=o&1|2,t.flags|=128;else{if(r!==null&&(r.flags&128)!==0)e:for(r=t.child;r!==null;){if(r.tag===13)r.memoizedState!==null&&Pd(r,s,t);else if(r.tag===19)Pd(r,s,t);else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break e;for(;r.sibling===null;){if(r.return===null||r.return===t)break e;r=r.return}r.sibling.return=r.return,r=r.sibling}o&=1}if(ke(Ee,o),(t.mode&1)===0)t.memoizedState=null;else switch(n){case"forwards":for(s=t.child,n=null;s!==null;)r=s.alternate,r!==null&&ra(r)===null&&(n=s),s=s.sibling;s=n,s===null?(n=t.child,t.child=null):(n=s.sibling,s.sibling=null),vi(t,!1,n,s,i);break;case"backwards":for(s=null,n=t.child,t.child=null;n!==null;){if(r=n.alternate,r!==null&&ra(r)===null){t.child=n;break}r=n.sibling,n.sibling=s,s=n,n=r}vi(t,!0,s,null,i);break;case"together":vi(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function ca(r,t){(t.mode&1)===0&&r!==null&&(r.alternate=null,t.alternate=null,t.flags|=2)}function qr(r,t,s){if(r!==null&&(t.dependencies=r.dependencies),zt|=t.lanes,(s&t.childLanes)===0)return null;if(r!==null&&t.child!==r.child)throw Error(l(153));if(t.child!==null){for(r=t.child,s=ft(r,r.pendingProps),t.child=s,s.return=t;r.sibling!==null;)r=r.sibling,s=s.sibling=ft(r,r.pendingProps),s.return=t;s.sibling=null}return t.child}function Jh(r,t,s){switch(t.tag){case 3:Ed(t),rs();break;case 5:Yc(t);break;case 1:lr(t.type)&&Vo(t);break;case 4:Jn(t,t.stateNode.containerInfo);break;case 10:var o=t.type._context,n=t.memoizedProps.value;ke(Jo,o._currentValue),o._currentValue=n;break;case 13:if(o=t.memoizedState,o!==null)return o.dehydrated!==null?(ke(Ee,Ee.current&1),t.flags|=128,null):(s&t.child.childLanes)!==0?Bd(r,t,s):(ke(Ee,Ee.current&1),r=qr(r,t,s),r!==null?r.sibling:null);ke(Ee,Ee.current&1);break;case 19:if(o=(s&t.childLanes)!==0,(r.flags&128)!==0){if(o)return Hd(r,t,s);t.flags|=128}if(n=t.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),ke(Ee,Ee.current),o)break;return null;case 22:case 23:return t.lanes=0,Ld(r,t,s)}return qr(r,t,s)}var _d,yi,Od,Rd;_d=function(r,t){for(var s=t.child;s!==null;){if(s.tag===5||s.tag===6)r.appendChild(s.stateNode);else if(s.tag!==4&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break;for(;s.sibling===null;){if(s.return===null||s.return===t)return;s=s.return}s.sibling.return=s.return,s=s.sibling}},yi=function(){},Od=function(r,t,s,o){var n=r.memoizedProps;if(n!==o){r=t.stateNode,Ct(Rr.current);var i=null;switch(s){case"input":n=Qa(r,n),o=Qa(r,o),i=[];break;case"select":n=B({},n,{value:void 0}),o=B({},o,{value:void 0}),i=[];break;case"textarea":n=Ka(r,n),o=Ka(r,o),i=[];break;default:typeof n.onClick!="function"&&typeof o.onClick=="function"&&(r.onclick=Do)}Xa(s,o);var d;s=null;for(j in n)if(!o.hasOwnProperty(j)&&n.hasOwnProperty(j)&&n[j]!=null)if(j==="style"){var u=n[j];for(d in u)u.hasOwnProperty(d)&&(s||(s={}),s[d]="")}else j!=="dangerouslySetInnerHTML"&&j!=="children"&&j!=="suppressContentEditableWarning"&&j!=="suppressHydrationWarning"&&j!=="autoFocus"&&(h.hasOwnProperty(j)?i||(i=[]):(i=i||[]).push(j,null));for(j in o){var x=o[j];if(u=n!=null?n[j]:void 0,o.hasOwnProperty(j)&&x!==u&&(x!=null||u!=null))if(j==="style")if(u){for(d in u)!u.hasOwnProperty(d)||x&&x.hasOwnProperty(d)||(s||(s={}),s[d]="");for(d in x)x.hasOwnProperty(d)&&u[d]!==x[d]&&(s||(s={}),s[d]=x[d])}else s||(i||(i=[]),i.push(j,s)),s=x;else j==="dangerouslySetInnerHTML"?(x=x?x.__html:void 0,u=u?u.__html:void 0,x!=null&&u!==x&&(i=i||[]).push(j,x)):j==="children"?typeof x!="string"&&typeof x!="number"||(i=i||[]).push(j,""+x):j!=="suppressContentEditableWarning"&&j!=="suppressHydrationWarning"&&(h.hasOwnProperty(j)?(x!=null&&j==="onScroll"&&Se("scroll",r),i||u===x||(i=[])):(i=i||[]).push(j,x))}s&&(i=i||[]).push("style",s);var j=i;(t.updateQueue=j)&&(t.flags|=4)}},Rd=function(r,t,s,o){s!==o&&(t.flags|=4)};function ro(r,t){if(!ze)switch(r.tailMode){case"hidden":t=r.tail;for(var s=null;t!==null;)t.alternate!==null&&(s=t),t=t.sibling;s===null?r.tail=null:s.sibling=null;break;case"collapsed":s=r.tail;for(var o=null;s!==null;)s.alternate!==null&&(o=s),s=s.sibling;o===null?t||r.tail===null?r.tail=null:r.tail.sibling=null:o.sibling=null}}function rr(r){var t=r.alternate!==null&&r.alternate.child===r.child,s=0,o=0;if(t)for(var n=r.child;n!==null;)s|=n.lanes|n.childLanes,o|=n.subtreeFlags&14680064,o|=n.flags&14680064,n.return=r,n=n.sibling;else for(n=r.child;n!==null;)s|=n.lanes|n.childLanes,o|=n.subtreeFlags,o|=n.flags,n.return=r,n=n.sibling;return r.subtreeFlags|=o,r.childLanes=s,t}function Xh(r,t,s){var o=t.pendingProps;switch(Wn(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return rr(t),null;case 1:return lr(t.type)&&$o(),rr(t),null;case 3:return o=t.stateNode,as(),Te(ir),Te(Ze),ei(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(r===null||r.child===null)&&(Yo(t)?t.flags|=4:r===null||r.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,zr!==null&&(Ii(zr),zr=null))),yi(r,t),rr(t),null;case 5:Xn(t);var n=Ct(Ks.current);if(s=t.type,r!==null&&t.stateNode!=null)Od(r,t,s,o,n),r.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!o){if(t.stateNode===null)throw Error(l(166));return rr(t),null}if(r=Ct(Rr.current),Yo(t)){o=t.stateNode,s=t.type;var i=t.memoizedProps;switch(o[Or]=t,o[Vs]=i,r=(t.mode&1)!==0,s){case"dialog":Se("cancel",o),Se("close",o);break;case"iframe":case"object":case"embed":Se("load",o);break;case"video":case"audio":for(n=0;n<Ds.length;n++)Se(Ds[n],o);break;case"source":Se("error",o);break;case"img":case"image":case"link":Se("error",o),Se("load",o);break;case"details":Se("toggle",o);break;case"input":vl(o,i),Se("invalid",o);break;case"select":o._wrapperState={wasMultiple:!!i.multiple},Se("invalid",o);break;case"textarea":bl(o,i),Se("invalid",o)}Xa(s,i),n=null;for(var d in i)if(i.hasOwnProperty(d)){var u=i[d];d==="children"?typeof u=="string"?o.textContent!==u&&(i.suppressHydrationWarning!==!0&&Wo(o.textContent,u,r),n=["children",u]):typeof u=="number"&&o.textContent!==""+u&&(i.suppressHydrationWarning!==!0&&Wo(o.textContent,u,r),n=["children",""+u]):h.hasOwnProperty(d)&&u!=null&&d==="onScroll"&&Se("scroll",o)}switch(s){case"input":Xr(o),jl(o,i,!0);break;case"textarea":Xr(o),wl(o);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(o.onclick=Do)}o=n,t.updateQueue=o,o!==null&&(t.flags|=4)}else{d=n.nodeType===9?n:n.ownerDocument,r==="http://www.w3.org/1999/xhtml"&&(r=kl(s)),r==="http://www.w3.org/1999/xhtml"?s==="script"?(r=d.createElement("div"),r.innerHTML="<script><\/script>",r=r.removeChild(r.firstChild)):typeof o.is=="string"?r=d.createElement(s,{is:o.is}):(r=d.createElement(s),s==="select"&&(d=r,o.multiple?d.multiple=!0:o.size&&(d.size=o.size))):r=d.createElementNS(r,s),r[Or]=t,r[Vs]=o,_d(r,t,!1,!1),t.stateNode=r;e:{switch(d=Za(s,o),s){case"dialog":Se("cancel",r),Se("close",r),n=o;break;case"iframe":case"object":case"embed":Se("load",r),n=o;break;case"video":case"audio":for(n=0;n<Ds.length;n++)Se(Ds[n],r);n=o;break;case"source":Se("error",r),n=o;break;case"img":case"image":case"link":Se("error",r),Se("load",r),n=o;break;case"details":Se("toggle",r),n=o;break;case"input":vl(r,o),n=Qa(r,o),Se("invalid",r);break;case"option":n=o;break;case"select":r._wrapperState={wasMultiple:!!o.multiple},n=B({},o,{value:void 0}),Se("invalid",r);break;case"textarea":bl(r,o),n=Ka(r,o),Se("invalid",r);break;default:n=o}Xa(s,n),u=n;for(i in u)if(u.hasOwnProperty(i)){var x=u[i];i==="style"?Cl(r,x):i==="dangerouslySetInnerHTML"?(x=x?x.__html:void 0,x!=null&&Sl(r,x)):i==="children"?typeof x=="string"?(s!=="textarea"||x!=="")&&ws(r,x):typeof x=="number"&&ws(r,""+x):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(h.hasOwnProperty(i)?x!=null&&i==="onScroll"&&Se("scroll",r):x!=null&&re(r,i,x,d))}switch(s){case"input":Xr(r),jl(r,o,!1);break;case"textarea":Xr(r),wl(r);break;case"option":o.value!=null&&r.setAttribute("value",""+me(o.value));break;case"select":r.multiple=!!o.multiple,i=o.value,i!=null?Ft(r,!!o.multiple,i,!1):o.defaultValue!=null&&Ft(r,!!o.multiple,o.defaultValue,!0);break;default:typeof n.onClick=="function"&&(r.onclick=Do)}switch(s){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}}o&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return rr(t),null;case 6:if(r&&t.stateNode!=null)Rd(r,t,r.memoizedProps,o);else{if(typeof o!="string"&&t.stateNode===null)throw Error(l(166));if(s=Ct(Ks.current),Ct(Rr.current),Yo(t)){if(o=t.stateNode,s=t.memoizedProps,o[Or]=t,(i=o.nodeValue!==s)&&(r=mr,r!==null))switch(r.tag){case 3:Wo(o.nodeValue,s,(r.mode&1)!==0);break;case 5:r.memoizedProps.suppressHydrationWarning!==!0&&Wo(o.nodeValue,s,(r.mode&1)!==0)}i&&(t.flags|=4)}else o=(s.nodeType===9?s:s.ownerDocument).createTextNode(o),o[Or]=t,t.stateNode=o}return rr(t),null;case 13:if(Te(Ee),o=t.memoizedState,r===null||r.memoizedState!==null&&r.memoizedState.dehydrated!==null){if(ze&&fr!==null&&(t.mode&1)!==0&&(t.flags&128)===0)Wc(),rs(),t.flags|=98560,i=!1;else if(i=Yo(t),o!==null&&o.dehydrated!==null){if(r===null){if(!i)throw Error(l(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(l(317));i[Or]=t}else rs(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;rr(t),i=!1}else zr!==null&&(Ii(zr),zr=null),i=!0;if(!i)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=s,t):(o=o!==null,o!==(r!==null&&r.memoizedState!==null)&&o&&(t.child.flags|=8192,(t.mode&1)!==0&&(r===null||(Ee.current&1)!==0?Ue===0&&(Ue=3):Bi())),t.updateQueue!==null&&(t.flags|=4),rr(t),null);case 4:return as(),yi(r,t),r===null&&Us(t.stateNode.containerInfo),rr(t),null;case 10:return Qn(t.type._context),rr(t),null;case 17:return lr(t.type)&&$o(),rr(t),null;case 19:if(Te(Ee),i=t.memoizedState,i===null)return rr(t),null;if(o=(t.flags&128)!==0,d=i.rendering,d===null)if(o)ro(i,!1);else{if(Ue!==0||r!==null&&(r.flags&128)!==0)for(r=t.child;r!==null;){if(d=ra(r),d!==null){for(t.flags|=128,ro(i,!1),o=d.updateQueue,o!==null&&(t.updateQueue=o,t.flags|=4),t.subtreeFlags=0,o=s,s=t.child;s!==null;)i=s,r=o,i.flags&=14680066,d=i.alternate,d===null?(i.childLanes=0,i.lanes=r,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=d.childLanes,i.lanes=d.lanes,i.child=d.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=d.memoizedProps,i.memoizedState=d.memoizedState,i.updateQueue=d.updateQueue,i.type=d.type,r=d.dependencies,i.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext}),s=s.sibling;return ke(Ee,Ee.current&1|2),t.child}r=r.sibling}i.tail!==null&&_e()>cs&&(t.flags|=128,o=!0,ro(i,!1),t.lanes=4194304)}else{if(!o)if(r=ra(d),r!==null){if(t.flags|=128,o=!0,s=r.updateQueue,s!==null&&(t.updateQueue=s,t.flags|=4),ro(i,!0),i.tail===null&&i.tailMode==="hidden"&&!d.alternate&&!ze)return rr(t),null}else 2*_e()-i.renderingStartTime>cs&&s!==1073741824&&(t.flags|=128,o=!0,ro(i,!1),t.lanes=4194304);i.isBackwards?(d.sibling=t.child,t.child=d):(s=i.last,s!==null?s.sibling=d:t.child=d,i.last=d)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=_e(),t.sibling=null,s=Ee.current,ke(Ee,o?s&1|2:s&1),t):(rr(t),null);case 22:case 23:return Mi(),o=t.memoizedState!==null,r!==null&&r.memoizedState!==null!==o&&(t.flags|=8192),o&&(t.mode&1)!==0?(gr&1073741824)!==0&&(rr(t),t.subtreeFlags&6&&(t.flags|=8192)):rr(t),null;case 24:return null;case 25:return null}throw Error(l(156,t.tag))}function Zh(r,t){switch(Wn(t),t.tag){case 1:return lr(t.type)&&$o(),r=t.flags,r&65536?(t.flags=r&-65537|128,t):null;case 3:return as(),Te(ir),Te(Ze),ei(),r=t.flags,(r&65536)!==0&&(r&128)===0?(t.flags=r&-65537|128,t):null;case 5:return Xn(t),null;case 13:if(Te(Ee),r=t.memoizedState,r!==null&&r.dehydrated!==null){if(t.alternate===null)throw Error(l(340));rs()}return r=t.flags,r&65536?(t.flags=r&-65537|128,t):null;case 19:return Te(Ee),null;case 4:return as(),null;case 10:return Qn(t.type._context),null;case 22:case 23:return Mi(),null;case 24:return null;default:return null}}var da=!1,tr=!1,ex=typeof WeakSet=="function"?WeakSet:Set,H=null;function is(r,t){var s=r.ref;if(s!==null)if(typeof s=="function")try{s(null)}catch(o){Pe(r,t,o)}else s.current=null}function ji(r,t,s){try{s()}catch(o){Pe(r,t,o)}}var Ad=!1;function rx(r,t){if(Mn=Io,r=gc(),kn(r)){if("selectionStart"in r)var s={start:r.selectionStart,end:r.selectionEnd};else e:{s=(s=r.ownerDocument)&&s.defaultView||window;var o=s.getSelection&&s.getSelection();if(o&&o.rangeCount!==0){s=o.anchorNode;var n=o.anchorOffset,i=o.focusNode;o=o.focusOffset;try{s.nodeType,i.nodeType}catch{s=null;break e}var d=0,u=-1,x=-1,j=0,S=0,T=r,w=null;r:for(;;){for(var P;T!==s||n!==0&&T.nodeType!==3||(u=d+n),T!==i||o!==0&&T.nodeType!==3||(x=d+o),T.nodeType===3&&(d+=T.nodeValue.length),(P=T.firstChild)!==null;)w=T,T=P;for(;;){if(T===r)break r;if(w===s&&++j===n&&(u=d),w===i&&++S===o&&(x=d),(P=T.nextSibling)!==null)break;T=w,w=T.parentNode}T=P}s=u===-1||x===-1?null:{start:u,end:x}}else s=null}s=s||{start:0,end:0}}else s=null;for(Bn={focusedElem:r,selectionRange:s},Io=!1,H=t;H!==null;)if(t=H,r=t.child,(t.subtreeFlags&1028)!==0&&r!==null)r.return=t,H=r;else for(;H!==null;){t=H;try{var O=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(O!==null){var F=O.memoizedProps,Oe=O.memoizedState,v=t.stateNode,m=v.getSnapshotBeforeUpdate(t.elementType===t.type?F:Ir(t.type,F),Oe);v.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var y=t.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(l(163))}}catch(L){Pe(t,t.return,L)}if(r=t.sibling,r!==null){r.return=t.return,H=r;break}H=t.return}return O=Ad,Ad=!1,O}function to(r,t,s){var o=t.updateQueue;if(o=o!==null?o.lastEffect:null,o!==null){var n=o=o.next;do{if((n.tag&r)===r){var i=n.destroy;n.destroy=void 0,i!==void 0&&ji(t,s,i)}n=n.next}while(n!==o)}}function pa(r,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var s=t=t.next;do{if((s.tag&r)===r){var o=s.create;s.destroy=o()}s=s.next}while(s!==t)}}function bi(r){var t=r.ref;if(t!==null){var s=r.stateNode;switch(r.tag){case 5:r=s;break;default:r=s}typeof t=="function"?t(r):t.current=r}}function Fd(r){var t=r.alternate;t!==null&&(r.alternate=null,Fd(t)),r.child=null,r.deletions=null,r.sibling=null,r.tag===5&&(t=r.stateNode,t!==null&&(delete t[Or],delete t[Vs],delete t[On],delete t[Oh],delete t[Rh])),r.stateNode=null,r.return=null,r.dependencies=null,r.memoizedProps=null,r.memoizedState=null,r.pendingProps=null,r.stateNode=null,r.updateQueue=null}function Wd(r){return r.tag===5||r.tag===3||r.tag===4}function Dd(r){e:for(;;){for(;r.sibling===null;){if(r.return===null||Wd(r.return))return null;r=r.return}for(r.sibling.return=r.return,r=r.sibling;r.tag!==5&&r.tag!==6&&r.tag!==18;){if(r.flags&2||r.child===null||r.tag===4)continue e;r.child.return=r,r=r.child}if(!(r.flags&2))return r.stateNode}}function Ni(r,t,s){var o=r.tag;if(o===5||o===6)r=r.stateNode,t?s.nodeType===8?s.parentNode.insertBefore(r,t):s.insertBefore(r,t):(s.nodeType===8?(t=s.parentNode,t.insertBefore(r,s)):(t=s,t.appendChild(r)),s=s._reactRootContainer,s!=null||t.onclick!==null||(t.onclick=Do));else if(o!==4&&(r=r.child,r!==null))for(Ni(r,t,s),r=r.sibling;r!==null;)Ni(r,t,s),r=r.sibling}function wi(r,t,s){var o=r.tag;if(o===5||o===6)r=r.stateNode,t?s.insertBefore(r,t):s.appendChild(r);else if(o!==4&&(r=r.child,r!==null))for(wi(r,t,s),r=r.sibling;r!==null;)wi(r,t,s),r=r.sibling}var qe=null,Er=!1;function pt(r,t,s){for(s=s.child;s!==null;)Ud(r,t,s),s=s.sibling}function Ud(r,t,s){if(_r&&typeof _r.onCommitFiberUnmount=="function")try{_r.onCommitFiberUnmount(ko,s)}catch{}switch(s.tag){case 5:tr||is(s,t);case 6:var o=qe,n=Er;qe=null,pt(r,t,s),qe=o,Er=n,qe!==null&&(Er?(r=qe,s=s.stateNode,r.nodeType===8?r.parentNode.removeChild(s):r.removeChild(s)):qe.removeChild(s.stateNode));break;case 18:qe!==null&&(Er?(r=qe,s=s.stateNode,r.nodeType===8?_n(r.parentNode,s):r.nodeType===1&&_n(r,s),Ps(r)):_n(qe,s.stateNode));break;case 4:o=qe,n=Er,qe=s.stateNode.containerInfo,Er=!0,pt(r,t,s),qe=o,Er=n;break;case 0:case 11:case 14:case 15:if(!tr&&(o=s.updateQueue,o!==null&&(o=o.lastEffect,o!==null))){n=o=o.next;do{var i=n,d=i.destroy;i=i.tag,d!==void 0&&((i&2)!==0||(i&4)!==0)&&ji(s,t,d),n=n.next}while(n!==o)}pt(r,t,s);break;case 1:if(!tr&&(is(s,t),o=s.stateNode,typeof o.componentWillUnmount=="function"))try{o.props=s.memoizedProps,o.state=s.memoizedState,o.componentWillUnmount()}catch(u){Pe(s,t,u)}pt(r,t,s);break;case 21:pt(r,t,s);break;case 22:s.mode&1?(tr=(o=tr)||s.memoizedState!==null,pt(r,t,s),tr=o):pt(r,t,s);break;default:pt(r,t,s)}}function $d(r){var t=r.updateQueue;if(t!==null){r.updateQueue=null;var s=r.stateNode;s===null&&(s=r.stateNode=new ex),t.forEach(function(o){var n=dx.bind(null,r,o);s.has(o)||(s.add(o),o.then(n,n))})}}function Mr(r,t){var s=t.deletions;if(s!==null)for(var o=0;o<s.length;o++){var n=s[o];try{var i=r,d=t,u=d;e:for(;u!==null;){switch(u.tag){case 5:qe=u.stateNode,Er=!1;break e;case 3:qe=u.stateNode.containerInfo,Er=!0;break e;case 4:qe=u.stateNode.containerInfo,Er=!0;break e}u=u.return}if(qe===null)throw Error(l(160));Ud(i,d,n),qe=null,Er=!1;var x=n.alternate;x!==null&&(x.return=null),n.return=null}catch(j){Pe(n,t,j)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Vd(t,r),t=t.sibling}function Vd(r,t){var s=r.alternate,o=r.flags;switch(r.tag){case 0:case 11:case 14:case 15:if(Mr(t,r),Fr(r),o&4){try{to(3,r,r.return),pa(3,r)}catch(F){Pe(r,r.return,F)}try{to(5,r,r.return)}catch(F){Pe(r,r.return,F)}}break;case 1:Mr(t,r),Fr(r),o&512&&s!==null&&is(s,s.return);break;case 5:if(Mr(t,r),Fr(r),o&512&&s!==null&&is(s,s.return),r.flags&32){var n=r.stateNode;try{ws(n,"")}catch(F){Pe(r,r.return,F)}}if(o&4&&(n=r.stateNode,n!=null)){var i=r.memoizedProps,d=s!==null?s.memoizedProps:i,u=r.type,x=r.updateQueue;if(r.updateQueue=null,x!==null)try{u==="input"&&i.type==="radio"&&i.name!=null&&yl(n,i),Za(u,d);var j=Za(u,i);for(d=0;d<x.length;d+=2){var S=x[d],T=x[d+1];S==="style"?Cl(n,T):S==="dangerouslySetInnerHTML"?Sl(n,T):S==="children"?ws(n,T):re(n,S,T,j)}switch(u){case"input":qa(n,i);break;case"textarea":Nl(n,i);break;case"select":var w=n._wrapperState.wasMultiple;n._wrapperState.wasMultiple=!!i.multiple;var P=i.value;P!=null?Ft(n,!!i.multiple,P,!1):w!==!!i.multiple&&(i.defaultValue!=null?Ft(n,!!i.multiple,i.defaultValue,!0):Ft(n,!!i.multiple,i.multiple?[]:"",!1))}n[Vs]=i}catch(F){Pe(r,r.return,F)}}break;case 6:if(Mr(t,r),Fr(r),o&4){if(r.stateNode===null)throw Error(l(162));n=r.stateNode,i=r.memoizedProps;try{n.nodeValue=i}catch(F){Pe(r,r.return,F)}}break;case 3:if(Mr(t,r),Fr(r),o&4&&s!==null&&s.memoizedState.isDehydrated)try{Ps(t.containerInfo)}catch(F){Pe(r,r.return,F)}break;case 4:Mr(t,r),Fr(r);break;case 13:Mr(t,r),Fr(r),n=r.child,n.flags&8192&&(i=n.memoizedState!==null,n.stateNode.isHidden=i,!i||n.alternate!==null&&n.alternate.memoizedState!==null||(Ti=_e())),o&4&&$d(r);break;case 22:if(S=s!==null&&s.memoizedState!==null,r.mode&1?(tr=(j=tr)||S,Mr(t,r),tr=j):Mr(t,r),Fr(r),o&8192){if(j=r.memoizedState!==null,(r.stateNode.isHidden=j)&&!S&&(r.mode&1)!==0)for(H=r,S=r.child;S!==null;){for(T=H=S;H!==null;){switch(w=H,P=w.child,w.tag){case 0:case 11:case 14:case 15:to(4,w,w.return);break;case 1:is(w,w.return);var O=w.stateNode;if(typeof O.componentWillUnmount=="function"){o=w,s=w.return;try{t=o,O.props=t.memoizedProps,O.state=t.memoizedState,O.componentWillUnmount()}catch(F){Pe(o,s,F)}}break;case 5:is(w,w.return);break;case 22:if(w.memoizedState!==null){qd(T);continue}}P!==null?(P.return=w,H=P):qd(T)}S=S.sibling}e:for(S=null,T=r;;){if(T.tag===5){if(S===null){S=T;try{n=T.stateNode,j?(i=n.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(u=T.stateNode,x=T.memoizedProps.style,d=x!=null&&x.hasOwnProperty("display")?x.display:null,u.style.display=Tl("display",d))}catch(F){Pe(r,r.return,F)}}}else if(T.tag===6){if(S===null)try{T.stateNode.nodeValue=j?"":T.memoizedProps}catch(F){Pe(r,r.return,F)}}else if((T.tag!==22&&T.tag!==23||T.memoizedState===null||T===r)&&T.child!==null){T.child.return=T,T=T.child;continue}if(T===r)break e;for(;T.sibling===null;){if(T.return===null||T.return===r)break e;S===T&&(S=null),T=T.return}S===T&&(S=null),T.sibling.return=T.return,T=T.sibling}}break;case 19:Mr(t,r),Fr(r),o&4&&$d(r);break;case 21:break;default:Mr(t,r),Fr(r)}}function Fr(r){var t=r.flags;if(t&2){try{e:{for(var s=r.return;s!==null;){if(Wd(s)){var o=s;break e}s=s.return}throw Error(l(160))}switch(o.tag){case 5:var n=o.stateNode;o.flags&32&&(ws(n,""),o.flags&=-33);var i=Dd(r);wi(r,i,n);break;case 3:case 4:var d=o.stateNode.containerInfo,u=Dd(r);Ni(r,u,d);break;default:throw Error(l(161))}}catch(x){Pe(r,r.return,x)}r.flags&=-3}t&4096&&(r.flags&=-4097)}function tx(r,t,s){H=r,Gd(r)}function Gd(r,t,s){for(var o=(r.mode&1)!==0;H!==null;){var n=H,i=n.child;if(n.tag===22&&o){var d=n.memoizedState!==null||da;if(!d){var u=n.alternate,x=u!==null&&u.memoizedState!==null||tr;u=da;var j=tr;if(da=d,(tr=x)&&!j)for(H=n;H!==null;)d=H,x=d.child,d.tag===22&&d.memoizedState!==null?Yd(n):x!==null?(x.return=d,H=x):Yd(n);for(;i!==null;)H=i,Gd(i),i=i.sibling;H=n,da=u,tr=j}Qd(r)}else(n.subtreeFlags&8772)!==0&&i!==null?(i.return=n,H=i):Qd(r)}}function Qd(r){for(;H!==null;){var t=H;if((t.flags&8772)!==0){var s=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:tr||pa(5,t);break;case 1:var o=t.stateNode;if(t.flags&4&&!tr)if(s===null)o.componentDidMount();else{var n=t.elementType===t.type?s.memoizedProps:Ir(t.type,s.memoizedProps);o.componentDidUpdate(n,s.memoizedState,o.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&qc(t,i,o);break;case 3:var d=t.updateQueue;if(d!==null){if(s=null,t.child!==null)switch(t.child.tag){case 5:s=t.child.stateNode;break;case 1:s=t.child.stateNode}qc(t,d,s)}break;case 5:var u=t.stateNode;if(s===null&&t.flags&4){s=u;var x=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":x.autoFocus&&s.focus();break;case"img":x.src&&(s.src=x.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var j=t.alternate;if(j!==null){var S=j.memoizedState;if(S!==null){var T=S.dehydrated;T!==null&&Ps(T)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(l(163))}tr||t.flags&512&&bi(t)}catch(w){Pe(t,t.return,w)}}if(t===r){H=null;break}if(s=t.sibling,s!==null){s.return=t.return,H=s;break}H=t.return}}function qd(r){for(;H!==null;){var t=H;if(t===r){H=null;break}var s=t.sibling;if(s!==null){s.return=t.return,H=s;break}H=t.return}}function Yd(r){for(;H!==null;){var t=H;try{switch(t.tag){case 0:case 11:case 15:var s=t.return;try{pa(4,t)}catch(x){Pe(t,s,x)}break;case 1:var o=t.stateNode;if(typeof o.componentDidMount=="function"){var n=t.return;try{o.componentDidMount()}catch(x){Pe(t,n,x)}}var i=t.return;try{bi(t)}catch(x){Pe(t,i,x)}break;case 5:var d=t.return;try{bi(t)}catch(x){Pe(t,d,x)}}}catch(x){Pe(t,t.return,x)}if(t===r){H=null;break}var u=t.sibling;if(u!==null){u.return=t.return,H=u;break}H=t.return}}var sx=Math.ceil,ua=E.ReactCurrentDispatcher,ki=E.ReactCurrentOwner,wr=E.ReactCurrentBatchConfig,ge=0,Ge=null,Re=null,Ye=0,gr=0,ls=nt(0),Ue=0,so=null,zt=0,ha=0,Si=0,oo=null,dr=null,Ti=0,cs=1/0,Yr=null,xa=!1,Ci=null,ut=null,ma=!1,ht=null,fa=0,ao=0,Li=null,ga=-1,va=0;function nr(){return(ge&6)!==0?_e():ga!==-1?ga:ga=_e()}function xt(r){return(r.mode&1)===0?1:(ge&2)!==0&&Ye!==0?Ye&-Ye:Fh.transition!==null?(va===0&&(va=Dl()),va):(r=be,r!==0||(r=window.event,r=r===void 0?16:Jl(r.type)),r)}function Br(r,t,s,o){if(50<ao)throw ao=0,Li=null,Error(l(185));zs(r,s,o),((ge&2)===0||r!==Ge)&&(r===Ge&&((ge&2)===0&&(ha|=s),Ue===4&&mt(r,Ye)),pr(r,o),s===1&&ge===0&&(t.mode&1)===0&&(cs=_e()+500,Go&&lt()))}function pr(r,t){var s=r.callbackNode;Fu(r,t);var o=Co(r,r===Ge?Ye:0);if(o===0)s!==null&&Al(s),r.callbackNode=null,r.callbackPriority=0;else if(t=o&-o,r.callbackPriority!==t){if(s!=null&&Al(s),t===1)r.tag===0?Ah(Jd.bind(null,r)):_c(Jd.bind(null,r)),Hh(function(){(ge&6)===0&&lt()}),s=null;else{switch(Ul(o)){case 1:s=nn;break;case 4:s=Fl;break;case 16:s=wo;break;case 536870912:s=Wl;break;default:s=wo}s=ap(s,Kd.bind(null,r))}r.callbackPriority=t,r.callbackNode=s}}function Kd(r,t){if(ga=-1,va=0,(ge&6)!==0)throw Error(l(327));var s=r.callbackNode;if(ds()&&r.callbackNode!==s)return null;var o=Co(r,r===Ge?Ye:0);if(o===0)return null;if((o&30)!==0||(o&r.expiredLanes)!==0||t)t=ya(r,o);else{t=o;var n=ge;ge|=2;var i=Zd();(Ge!==r||Ye!==t)&&(Yr=null,cs=_e()+500,Et(r,t));do try{nx();break}catch(u){Xd(r,u)}while(!0);Gn(),ua.current=i,ge=n,Re!==null?t=0:(Ge=null,Ye=0,t=Ue)}if(t!==0){if(t===2&&(n=ln(r),n!==0&&(o=n,t=zi(r,n))),t===1)throw s=so,Et(r,0),mt(r,o),pr(r,_e()),s;if(t===6)mt(r,o);else{if(n=r.current.alternate,(o&30)===0&&!ox(n)&&(t=ya(r,o),t===2&&(i=ln(r),i!==0&&(o=i,t=zi(r,i))),t===1))throw s=so,Et(r,0),mt(r,o),pr(r,_e()),s;switch(r.finishedWork=n,r.finishedLanes=o,t){case 0:case 1:throw Error(l(345));case 2:Mt(r,dr,Yr);break;case 3:if(mt(r,o),(o&130023424)===o&&(t=Ti+500-_e(),10<t)){if(Co(r,0)!==0)break;if(n=r.suspendedLanes,(n&o)!==o){nr(),r.pingedLanes|=r.suspendedLanes&n;break}r.timeoutHandle=Hn(Mt.bind(null,r,dr,Yr),t);break}Mt(r,dr,Yr);break;case 4:if(mt(r,o),(o&4194240)===o)break;for(t=r.eventTimes,n=-1;0<o;){var d=31-Cr(o);i=1<<d,d=t[d],d>n&&(n=d),o&=~i}if(o=n,o=_e()-o,o=(120>o?120:480>o?480:1080>o?1080:1920>o?1920:3e3>o?3e3:4320>o?4320:1960*sx(o/1960))-o,10<o){r.timeoutHandle=Hn(Mt.bind(null,r,dr,Yr),o);break}Mt(r,dr,Yr);break;case 5:Mt(r,dr,Yr);break;default:throw Error(l(329))}}}return pr(r,_e()),r.callbackNode===s?Kd.bind(null,r):null}function zi(r,t){var s=oo;return r.current.memoizedState.isDehydrated&&(Et(r,t).flags|=256),r=ya(r,t),r!==2&&(t=dr,dr=s,t!==null&&Ii(t)),r}function Ii(r){dr===null?dr=r:dr.push.apply(dr,r)}function ox(r){for(var t=r;;){if(t.flags&16384){var s=t.updateQueue;if(s!==null&&(s=s.stores,s!==null))for(var o=0;o<s.length;o++){var n=s[o],i=n.getSnapshot;n=n.value;try{if(!Lr(i(),n))return!1}catch{return!1}}}if(s=t.child,t.subtreeFlags&16384&&s!==null)s.return=t,t=s;else{if(t===r)break;for(;t.sibling===null;){if(t.return===null||t.return===r)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function mt(r,t){for(t&=~Si,t&=~ha,r.suspendedLanes|=t,r.pingedLanes&=~t,r=r.expirationTimes;0<t;){var s=31-Cr(t),o=1<<s;r[s]=-1,t&=~o}}function Jd(r){if((ge&6)!==0)throw Error(l(327));ds();var t=Co(r,0);if((t&1)===0)return pr(r,_e()),null;var s=ya(r,t);if(r.tag!==0&&s===2){var o=ln(r);o!==0&&(t=o,s=zi(r,o))}if(s===1)throw s=so,Et(r,0),mt(r,t),pr(r,_e()),s;if(s===6)throw Error(l(345));return r.finishedWork=r.current.alternate,r.finishedLanes=t,Mt(r,dr,Yr),pr(r,_e()),null}function Ei(r,t){var s=ge;ge|=1;try{return r(t)}finally{ge=s,ge===0&&(cs=_e()+500,Go&&lt())}}function It(r){ht!==null&&ht.tag===0&&(ge&6)===0&&ds();var t=ge;ge|=1;var s=wr.transition,o=be;try{if(wr.transition=null,be=1,r)return r()}finally{be=o,wr.transition=s,ge=t,(ge&6)===0&&lt()}}function Mi(){gr=ls.current,Te(ls)}function Et(r,t){r.finishedWork=null,r.finishedLanes=0;var s=r.timeoutHandle;if(s!==-1&&(r.timeoutHandle=-1,Ph(s)),Re!==null)for(s=Re.return;s!==null;){var o=s;switch(Wn(o),o.tag){case 1:o=o.type.childContextTypes,o!=null&&$o();break;case 3:as(),Te(ir),Te(Ze),ei();break;case 5:Xn(o);break;case 4:as();break;case 13:Te(Ee);break;case 19:Te(Ee);break;case 10:Qn(o.type._context);break;case 22:case 23:Mi()}s=s.return}if(Ge=r,Re=r=ft(r.current,null),Ye=gr=t,Ue=0,so=null,Si=ha=zt=0,dr=oo=null,Tt!==null){for(t=0;t<Tt.length;t++)if(s=Tt[t],o=s.interleaved,o!==null){s.interleaved=null;var n=o.next,i=s.pending;if(i!==null){var d=i.next;i.next=n,o.next=d}s.pending=o}Tt=null}return r}function Xd(r,t){do{var s=Re;try{if(Gn(),ta.current=na,sa){for(var o=Me.memoizedState;o!==null;){var n=o.queue;n!==null&&(n.pending=null),o=o.next}sa=!1}if(Lt=0,Ve=De=Me=null,Js=!1,Xs=0,ki.current=null,s===null||s.return===null){Ue=1,so=t,Re=null;break}e:{var i=r,d=s.return,u=s,x=t;if(t=Ye,u.flags|=32768,x!==null&&typeof x=="object"&&typeof x.then=="function"){var j=x,S=u,T=S.tag;if((S.mode&1)===0&&(T===0||T===11||T===15)){var w=S.alternate;w?(S.updateQueue=w.updateQueue,S.memoizedState=w.memoizedState,S.lanes=w.lanes):(S.updateQueue=null,S.memoizedState=null)}var P=wd(d);if(P!==null){P.flags&=-257,kd(P,d,u,i,t),P.mode&1&&Nd(i,j,t),t=P,x=j;var O=t.updateQueue;if(O===null){var F=new Set;F.add(x),t.updateQueue=F}else O.add(x);break e}else{if((t&1)===0){Nd(i,j,t),Bi();break e}x=Error(l(426))}}else if(ze&&u.mode&1){var Oe=wd(d);if(Oe!==null){(Oe.flags&65536)===0&&(Oe.flags|=256),kd(Oe,d,u,i,t),$n(ns(x,u));break e}}i=x=ns(x,u),Ue!==4&&(Ue=2),oo===null?oo=[i]:oo.push(i),i=d;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var v=jd(i,x,t);Qc(i,v);break e;case 1:u=x;var m=i.type,y=i.stateNode;if((i.flags&128)===0&&(typeof m.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(ut===null||!ut.has(y)))){i.flags|=65536,t&=-t,i.lanes|=t;var L=bd(i,u,t);Qc(i,L);break e}}i=i.return}while(i!==null)}rp(s)}catch($){t=$,Re===s&&s!==null&&(Re=s=s.return);continue}break}while(!0)}function Zd(){var r=ua.current;return ua.current=na,r===null?na:r}function Bi(){(Ue===0||Ue===3||Ue===2)&&(Ue=4),Ge===null||(zt&268435455)===0&&(ha&268435455)===0||mt(Ge,Ye)}function ya(r,t){var s=ge;ge|=2;var o=Zd();(Ge!==r||Ye!==t)&&(Yr=null,Et(r,t));do try{ax();break}catch(n){Xd(r,n)}while(!0);if(Gn(),ge=s,ua.current=o,Re!==null)throw Error(l(261));return Ge=null,Ye=0,Ue}function ax(){for(;Re!==null;)ep(Re)}function nx(){for(;Re!==null&&!Eu();)ep(Re)}function ep(r){var t=op(r.alternate,r,gr);r.memoizedProps=r.pendingProps,t===null?rp(r):Re=t,ki.current=null}function rp(r){var t=r;do{var s=t.alternate;if(r=t.return,(t.flags&32768)===0){if(s=Xh(s,t,gr),s!==null){Re=s;return}}else{if(s=Zh(s,t),s!==null){s.flags&=32767,Re=s;return}if(r!==null)r.flags|=32768,r.subtreeFlags=0,r.deletions=null;else{Ue=6,Re=null;return}}if(t=t.sibling,t!==null){Re=t;return}Re=t=r}while(t!==null);Ue===0&&(Ue=5)}function Mt(r,t,s){var o=be,n=wr.transition;try{wr.transition=null,be=1,ix(r,t,s,o)}finally{wr.transition=n,be=o}return null}function ix(r,t,s,o){do ds();while(ht!==null);if((ge&6)!==0)throw Error(l(327));s=r.finishedWork;var n=r.finishedLanes;if(s===null)return null;if(r.finishedWork=null,r.finishedLanes=0,s===r.current)throw Error(l(177));r.callbackNode=null,r.callbackPriority=0;var i=s.lanes|s.childLanes;if(Wu(r,i),r===Ge&&(Re=Ge=null,Ye=0),(s.subtreeFlags&2064)===0&&(s.flags&2064)===0||ma||(ma=!0,ap(wo,function(){return ds(),null})),i=(s.flags&15990)!==0,(s.subtreeFlags&15990)!==0||i){i=wr.transition,wr.transition=null;var d=be;be=1;var u=ge;ge|=4,ki.current=null,rx(r,s),Vd(s,r),Ch(Bn),Io=!!Mn,Bn=Mn=null,r.current=s,tx(s),Mu(),ge=u,be=d,wr.transition=i}else r.current=s;if(ma&&(ma=!1,ht=r,fa=n),i=r.pendingLanes,i===0&&(ut=null),Hu(s.stateNode),pr(r,_e()),t!==null)for(o=r.onRecoverableError,s=0;s<t.length;s++)n=t[s],o(n.value,{componentStack:n.stack,digest:n.digest});if(xa)throw xa=!1,r=Ci,Ci=null,r;return(fa&1)!==0&&r.tag!==0&&ds(),i=r.pendingLanes,(i&1)!==0?r===Li?ao++:(ao=0,Li=r):ao=0,lt(),null}function ds(){if(ht!==null){var r=Ul(fa),t=wr.transition,s=be;try{if(wr.transition=null,be=16>r?16:r,ht===null)var o=!1;else{if(r=ht,ht=null,fa=0,(ge&6)!==0)throw Error(l(331));var n=ge;for(ge|=4,H=r.current;H!==null;){var i=H,d=i.child;if((H.flags&16)!==0){var u=i.deletions;if(u!==null){for(var x=0;x<u.length;x++){var j=u[x];for(H=j;H!==null;){var S=H;switch(S.tag){case 0:case 11:case 15:to(8,S,i)}var T=S.child;if(T!==null)T.return=S,H=T;else for(;H!==null;){S=H;var w=S.sibling,P=S.return;if(Fd(S),S===j){H=null;break}if(w!==null){w.return=P,H=w;break}H=P}}}var O=i.alternate;if(O!==null){var F=O.child;if(F!==null){O.child=null;do{var Oe=F.sibling;F.sibling=null,F=Oe}while(F!==null)}}H=i}}if((i.subtreeFlags&2064)!==0&&d!==null)d.return=i,H=d;else e:for(;H!==null;){if(i=H,(i.flags&2048)!==0)switch(i.tag){case 0:case 11:case 15:to(9,i,i.return)}var v=i.sibling;if(v!==null){v.return=i.return,H=v;break e}H=i.return}}var m=r.current;for(H=m;H!==null;){d=H;var y=d.child;if((d.subtreeFlags&2064)!==0&&y!==null)y.return=d,H=y;else e:for(d=m;H!==null;){if(u=H,(u.flags&2048)!==0)try{switch(u.tag){case 0:case 11:case 15:pa(9,u)}}catch($){Pe(u,u.return,$)}if(u===d){H=null;break e}var L=u.sibling;if(L!==null){L.return=u.return,H=L;break e}H=u.return}}if(ge=n,lt(),_r&&typeof _r.onPostCommitFiberRoot=="function")try{_r.onPostCommitFiberRoot(ko,r)}catch{}o=!0}return o}finally{be=s,wr.transition=t}}return!1}function tp(r,t,s){t=ns(s,t),t=jd(r,t,1),r=dt(r,t,1),t=nr(),r!==null&&(zs(r,1,t),pr(r,t))}function Pe(r,t,s){if(r.tag===3)tp(r,r,s);else for(;t!==null;){if(t.tag===3){tp(t,r,s);break}else if(t.tag===1){var o=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(ut===null||!ut.has(o))){r=ns(s,r),r=bd(t,r,1),t=dt(t,r,1),r=nr(),t!==null&&(zs(t,1,r),pr(t,r));break}}t=t.return}}function lx(r,t,s){var o=r.pingCache;o!==null&&o.delete(t),t=nr(),r.pingedLanes|=r.suspendedLanes&s,Ge===r&&(Ye&s)===s&&(Ue===4||Ue===3&&(Ye&130023424)===Ye&&500>_e()-Ti?Et(r,0):Si|=s),pr(r,t)}function sp(r,t){t===0&&((r.mode&1)===0?t=1:(t=To,To<<=1,(To&130023424)===0&&(To=4194304)));var s=nr();r=Gr(r,t),r!==null&&(zs(r,t,s),pr(r,s))}function cx(r){var t=r.memoizedState,s=0;t!==null&&(s=t.retryLane),sp(r,s)}function dx(r,t){var s=0;switch(r.tag){case 13:var o=r.stateNode,n=r.memoizedState;n!==null&&(s=n.retryLane);break;case 19:o=r.stateNode;break;default:throw Error(l(314))}o!==null&&o.delete(t),sp(r,s)}var op;op=function(r,t,s){if(r!==null)if(r.memoizedProps!==t.pendingProps||ir.current)cr=!0;else{if((r.lanes&s)===0&&(t.flags&128)===0)return cr=!1,Jh(r,t,s);cr=(r.flags&131072)!==0}else cr=!1,ze&&(t.flags&1048576)!==0&&Oc(t,qo,t.index);switch(t.lanes=0,t.tag){case 2:var o=t.type;ca(r,t),r=t.pendingProps;var n=Xt(t,Ze.current);os(t,s),n=si(null,t,o,r,n,s);var i=oi();return t.flags|=1,typeof n=="object"&&n!==null&&typeof n.render=="function"&&n.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,lr(o)?(i=!0,Vo(t)):i=!1,t.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,Kn(t),n.updater=ia,t.stateNode=n,n._reactInternals=t,di(t,o,r,s),t=xi(null,t,o,!0,i,s)):(t.tag=0,ze&&i&&Fn(t),ar(null,t,n,s),t=t.child),t;case 16:o=t.elementType;e:{switch(ca(r,t),r=t.pendingProps,n=o._init,o=n(o._payload),t.type=o,n=t.tag=ux(o),r=Ir(o,r),n){case 0:t=hi(null,t,o,r,s);break e;case 1:t=Id(null,t,o,r,s);break e;case 11:t=Sd(null,t,o,r,s);break e;case 14:t=Td(null,t,o,Ir(o.type,r),s);break e}throw Error(l(306,o,""))}return t;case 0:return o=t.type,n=t.pendingProps,n=t.elementType===o?n:Ir(o,n),hi(r,t,o,n,s);case 1:return o=t.type,n=t.pendingProps,n=t.elementType===o?n:Ir(o,n),Id(r,t,o,n,s);case 3:e:{if(Ed(t),r===null)throw Error(l(387));o=t.pendingProps,i=t.memoizedState,n=i.element,Gc(r,t),ea(t,o,null,s);var d=t.memoizedState;if(o=d.element,i.isDehydrated)if(i={element:o,isDehydrated:!1,cache:d.cache,pendingSuspenseBoundaries:d.pendingSuspenseBoundaries,transitions:d.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){n=ns(Error(l(423)),t),t=Md(r,t,o,s,n);break e}else if(o!==n){n=ns(Error(l(424)),t),t=Md(r,t,o,s,n);break e}else for(fr=at(t.stateNode.containerInfo.firstChild),mr=t,ze=!0,zr=null,s=$c(t,null,o,s),t.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling;else{if(rs(),o===n){t=qr(r,t,s);break e}ar(r,t,o,s)}t=t.child}return t;case 5:return Yc(t),r===null&&Un(t),o=t.type,n=t.pendingProps,i=r!==null?r.memoizedProps:null,d=n.children,Pn(o,n)?d=null:i!==null&&Pn(o,i)&&(t.flags|=32),zd(r,t),ar(r,t,d,s),t.child;case 6:return r===null&&Un(t),null;case 13:return Bd(r,t,s);case 4:return Jn(t,t.stateNode.containerInfo),o=t.pendingProps,r===null?t.child=ts(t,null,o,s):ar(r,t,o,s),t.child;case 11:return o=t.type,n=t.pendingProps,n=t.elementType===o?n:Ir(o,n),Sd(r,t,o,n,s);case 7:return ar(r,t,t.pendingProps,s),t.child;case 8:return ar(r,t,t.pendingProps.children,s),t.child;case 12:return ar(r,t,t.pendingProps.children,s),t.child;case 10:e:{if(o=t.type._context,n=t.pendingProps,i=t.memoizedProps,d=n.value,ke(Jo,o._currentValue),o._currentValue=d,i!==null)if(Lr(i.value,d)){if(i.children===n.children&&!ir.current){t=qr(r,t,s);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var u=i.dependencies;if(u!==null){d=i.child;for(var x=u.firstContext;x!==null;){if(x.context===o){if(i.tag===1){x=Qr(-1,s&-s),x.tag=2;var j=i.updateQueue;if(j!==null){j=j.shared;var S=j.pending;S===null?x.next=x:(x.next=S.next,S.next=x),j.pending=x}}i.lanes|=s,x=i.alternate,x!==null&&(x.lanes|=s),qn(i.return,s,t),u.lanes|=s;break}x=x.next}}else if(i.tag===10)d=i.type===t.type?null:i.child;else if(i.tag===18){if(d=i.return,d===null)throw Error(l(341));d.lanes|=s,u=d.alternate,u!==null&&(u.lanes|=s),qn(d,s,t),d=i.sibling}else d=i.child;if(d!==null)d.return=i;else for(d=i;d!==null;){if(d===t){d=null;break}if(i=d.sibling,i!==null){i.return=d.return,d=i;break}d=d.return}i=d}ar(r,t,n.children,s),t=t.child}return t;case 9:return n=t.type,o=t.pendingProps.children,os(t,s),n=br(n),o=o(n),t.flags|=1,ar(r,t,o,s),t.child;case 14:return o=t.type,n=Ir(o,t.pendingProps),n=Ir(o.type,n),Td(r,t,o,n,s);case 15:return Cd(r,t,t.type,t.pendingProps,s);case 17:return o=t.type,n=t.pendingProps,n=t.elementType===o?n:Ir(o,n),ca(r,t),t.tag=1,lr(o)?(r=!0,Vo(t)):r=!1,os(t,s),vd(t,o,n),di(t,o,n,s),xi(null,t,o,!0,r,s);case 19:return Hd(r,t,s);case 22:return Ld(r,t,s)}throw Error(l(156,t.tag))};function ap(r,t){return Rl(r,t)}function px(r,t,s,o){this.tag=r,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function kr(r,t,s,o){return new px(r,t,s,o)}function Pi(r){return r=r.prototype,!(!r||!r.isReactComponent)}function ux(r){if(typeof r=="function")return Pi(r)?1:0;if(r!=null){if(r=r.$$typeof,r===Be)return 11;if(r===or)return 14}return 2}function ft(r,t){var s=r.alternate;return s===null?(s=kr(r.tag,t,r.key,r.mode),s.elementType=r.elementType,s.type=r.type,s.stateNode=r.stateNode,s.alternate=r,r.alternate=s):(s.pendingProps=t,s.type=r.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=r.flags&14680064,s.childLanes=r.childLanes,s.lanes=r.lanes,s.child=r.child,s.memoizedProps=r.memoizedProps,s.memoizedState=r.memoizedState,s.updateQueue=r.updateQueue,t=r.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},s.sibling=r.sibling,s.index=r.index,s.ref=r.ref,s}function ja(r,t,s,o,n,i){var d=2;if(o=r,typeof r=="function")Pi(r)&&(d=1);else if(typeof r=="string")d=5;else e:switch(r){case M:return Bt(s.children,n,i,t);case U:d=8,n|=8;break;case Ne:return r=kr(12,s,t,n|2),r.elementType=Ne,r.lanes=i,r;case Le:return r=kr(13,s,t,n),r.elementType=Le,r.lanes=i,r;case Je:return r=kr(19,s,t,n),r.elementType=Je,r.lanes=i,r;case we:return ba(s,n,i,t);default:if(typeof r=="object"&&r!==null)switch(r.$$typeof){case He:d=10;break e;case he:d=9;break e;case Be:d=11;break e;case or:d=14;break e;case Xe:d=16,o=null;break e}throw Error(l(130,r==null?r:typeof r,""))}return t=kr(d,s,t,n),t.elementType=r,t.type=o,t.lanes=i,t}function Bt(r,t,s,o){return r=kr(7,r,o,t),r.lanes=s,r}function ba(r,t,s,o){return r=kr(22,r,o,t),r.elementType=we,r.lanes=s,r.stateNode={isHidden:!1},r}function Hi(r,t,s){return r=kr(6,r,null,t),r.lanes=s,r}function _i(r,t,s){return t=kr(4,r.children!==null?r.children:[],r.key,t),t.lanes=s,t.stateNode={containerInfo:r.containerInfo,pendingChildren:null,implementation:r.implementation},t}function hx(r,t,s,o,n){this.tag=t,this.containerInfo=r,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=cn(0),this.expirationTimes=cn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=cn(0),this.identifierPrefix=o,this.onRecoverableError=n,this.mutableSourceEagerHydrationData=null}function Oi(r,t,s,o,n,i,d,u,x){return r=new hx(r,t,s,u,x),t===1?(t=1,i===!0&&(t|=8)):t=0,i=kr(3,null,null,t),r.current=i,i.stateNode=r,i.memoizedState={element:o,isDehydrated:s,cache:null,transitions:null,pendingSuspenseBoundaries:null},Kn(i),r}function xx(r,t,s){var o=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:q,key:o==null?null:""+o,children:r,containerInfo:t,implementation:s}}function np(r){if(!r)return it;r=r._reactInternals;e:{if(bt(r)!==r||r.tag!==1)throw Error(l(170));var t=r;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(lr(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(l(171))}if(r.tag===1){var s=r.type;if(lr(s))return Pc(r,s,t)}return t}function ip(r,t,s,o,n,i,d,u,x){return r=Oi(s,o,!0,r,n,i,d,u,x),r.context=np(null),s=r.current,o=nr(),n=xt(s),i=Qr(o,n),i.callback=t!=null?t:null,dt(s,i,n),r.current.lanes=n,zs(r,n,o),pr(r,o),r}function Na(r,t,s,o){var n=t.current,i=nr(),d=xt(n);return s=np(s),t.context===null?t.context=s:t.pendingContext=s,t=Qr(i,d),t.payload={element:r},o=o===void 0?null:o,o!==null&&(t.callback=o),r=dt(n,t,d),r!==null&&(Br(r,n,d,i),Zo(r,n,d)),d}function wa(r){if(r=r.current,!r.child)return null;switch(r.child.tag){case 5:return r.child.stateNode;default:return r.child.stateNode}}function lp(r,t){if(r=r.memoizedState,r!==null&&r.dehydrated!==null){var s=r.retryLane;r.retryLane=s!==0&&s<t?s:t}}function Ri(r,t){lp(r,t),(r=r.alternate)&&lp(r,t)}function mx(){return null}var cp=typeof reportError=="function"?reportError:function(r){console.error(r)};function Ai(r){this._internalRoot=r}ka.prototype.render=Ai.prototype.render=function(r){var t=this._internalRoot;if(t===null)throw Error(l(409));Na(r,t,null,null)},ka.prototype.unmount=Ai.prototype.unmount=function(){var r=this._internalRoot;if(r!==null){this._internalRoot=null;var t=r.containerInfo;It(function(){Na(null,r,null,null)}),t[Dr]=null}};function ka(r){this._internalRoot=r}ka.prototype.unstable_scheduleHydration=function(r){if(r){var t=Gl();r={blockedOn:null,target:r,priority:t};for(var s=0;s<tt.length&&t!==0&&t<tt[s].priority;s++);tt.splice(s,0,r),s===0&&Yl(r)}};function Fi(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11)}function Sa(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11&&(r.nodeType!==8||r.nodeValue!==" react-mount-point-unstable "))}function dp(){}function fx(r,t,s,o,n){if(n){if(typeof o=="function"){var i=o;o=function(){var j=wa(d);i.call(j)}}var d=ip(t,o,r,0,null,!1,!1,"",dp);return r._reactRootContainer=d,r[Dr]=d.current,Us(r.nodeType===8?r.parentNode:r),It(),d}for(;n=r.lastChild;)r.removeChild(n);if(typeof o=="function"){var u=o;o=function(){var j=wa(x);u.call(j)}}var x=Oi(r,0,!1,null,null,!1,!1,"",dp);return r._reactRootContainer=x,r[Dr]=x.current,Us(r.nodeType===8?r.parentNode:r),It(function(){Na(t,x,s,o)}),x}function Ta(r,t,s,o,n){var i=s._reactRootContainer;if(i){var d=i;if(typeof n=="function"){var u=n;n=function(){var x=wa(d);u.call(x)}}Na(t,d,r,n)}else d=fx(s,t,r,n,o);return wa(d)}$l=function(r){switch(r.tag){case 3:var t=r.stateNode;if(t.current.memoizedState.isDehydrated){var s=Ls(t.pendingLanes);s!==0&&(dn(t,s|1),pr(t,_e()),(ge&6)===0&&(cs=_e()+500,lt()))}break;case 13:It(function(){var o=Gr(r,1);if(o!==null){var n=nr();Br(o,r,1,n)}}),Ri(r,1)}},pn=function(r){if(r.tag===13){var t=Gr(r,134217728);if(t!==null){var s=nr();Br(t,r,134217728,s)}Ri(r,134217728)}},Vl=function(r){if(r.tag===13){var t=xt(r),s=Gr(r,t);if(s!==null){var o=nr();Br(s,r,t,o)}Ri(r,t)}},Gl=function(){return be},Ql=function(r,t){var s=be;try{return be=r,t()}finally{be=s}},tn=function(r,t,s){switch(t){case"input":if(qa(r,s),t=s.name,s.type==="radio"&&t!=null){for(s=r;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<s.length;t++){var o=s[t];if(o!==r&&o.form===r.form){var n=Uo(o);if(!n)throw Error(l(90));jt(o),qa(o,n)}}}break;case"textarea":Nl(r,s);break;case"select":t=s.value,t!=null&&Ft(r,!!s.multiple,t,!1)}},El=Ei,Ml=It;var gx={usingClientEntryPoint:!1,Events:[Gs,Kt,Uo,zl,Il,Ei]},no={findFiberByHostInstance:Nt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},vx={bundleType:no.bundleType,version:no.version,rendererPackageName:no.rendererPackageName,rendererConfig:no.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:E.ReactCurrentDispatcher,findHostInstanceByFiber:function(r){return r=_l(r),r===null?null:r.stateNode},findFiberByHostInstance:no.findFiberByHostInstance||mx,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__!="undefined"){var Ca=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ca.isDisabled&&Ca.supportsFiber)try{ko=Ca.inject(vx),_r=Ca}catch{}}return ur.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=gx,ur.createPortal=function(r,t){var s=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Fi(t))throw Error(l(200));return xx(r,t,null,s)},ur.createRoot=function(r,t){if(!Fi(r))throw Error(l(299));var s=!1,o="",n=cp;return t!=null&&(t.unstable_strictMode===!0&&(s=!0),t.identifierPrefix!==void 0&&(o=t.identifierPrefix),t.onRecoverableError!==void 0&&(n=t.onRecoverableError)),t=Oi(r,1,!1,null,null,s,!1,o,n),r[Dr]=t.current,Us(r.nodeType===8?r.parentNode:r),new Ai(t)},ur.findDOMNode=function(r){if(r==null)return null;if(r.nodeType===1)return r;var t=r._reactInternals;if(t===void 0)throw typeof r.render=="function"?Error(l(188)):(r=Object.keys(r).join(","),Error(l(268,r)));return r=_l(t),r=r===null?null:r.stateNode,r},ur.flushSync=function(r){return It(r)},ur.hydrate=function(r,t,s){if(!Sa(t))throw Error(l(200));return Ta(null,r,t,!0,s)},ur.hydrateRoot=function(r,t,s){if(!Fi(r))throw Error(l(405));var o=s!=null&&s.hydratedSources||null,n=!1,i="",d=cp;if(s!=null&&(s.unstable_strictMode===!0&&(n=!0),s.identifierPrefix!==void 0&&(i=s.identifierPrefix),s.onRecoverableError!==void 0&&(d=s.onRecoverableError)),t=ip(t,null,r,1,s!=null?s:null,n,!1,i,d),r[Dr]=t.current,Us(r),o)for(r=0;r<o.length;r++)s=o[r],n=s._getVersion,n=n(s._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[s,n]:t.mutableSourceEagerHydrationData.push(s,n);return new ka(t)},ur.render=function(r,t,s){if(!Sa(t))throw Error(l(200));return Ta(null,r,t,!1,s)},ur.unmountComponentAtNode=function(r){if(!Sa(r))throw Error(l(40));return r._reactRootContainer?(It(function(){Ta(null,null,r,!1,function(){r._reactRootContainer=null,r[Dr]=null})}),!0):!1},ur.unstable_batchedUpdates=Ei,ur.unstable_renderSubtreeIntoContainer=function(r,t,s,o){if(!Sa(s))throw Error(l(200));if(r==null||r._reactInternals===void 0)throw Error(l(38));return Ta(r,t,s,!1,o)},ur.version="18.3.1-next-f1338f8080-20240426",ur}var vp;function Cx(){if(vp)return Ui.exports;vp=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__=="undefined"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(c){console.error(c)}}return a(),Ui.exports=Tx(),Ui.exports}var yp;function Lx(){if(yp)return La;yp=1;var a=Cx();return La.createRoot=a.createRoot,La.hydrateRoot=a.hydrateRoot,La}var zx=Lx(),_=ll();const Ke=jx(_);var hr=function(){return hr=Object.assign||function(c){for(var l,p=1,h=arguments.length;p<h;p++){l=arguments[p];for(var f in l)Object.prototype.hasOwnProperty.call(l,f)&&(c[f]=l[f])}return c},hr.apply(this,arguments)};function Ha(a,c,l){if(l||arguments.length===2)for(var p=0,h=c.length,f;p<h;p++)(f||!(p in c))&&(f||(f=Array.prototype.slice.call(c,0,p)),f[p]=c[p]);return a.concat(f||Array.prototype.slice.call(c))}var Ce="-ms-",po="-moz-",ye="-webkit-",Up="comm",Wa="rule",cl="decl",Ix="@import",Ex="@namespace",$p="@keyframes",Mx="@layer",Vp=Math.abs,dl=String.fromCharCode,Zi=Object.assign;function Bx(a,c){return $e(a,0)^45?(((c<<2^$e(a,0))<<2^$e(a,1))<<2^$e(a,2))<<2^$e(a,3):0}function Gp(a){return a.trim()}function Kr(a,c){return(a=c.exec(a))?a[0]:a}function ie(a,c,l){return a.replace(c,l)}function Ia(a,c,l){return a.indexOf(c,l)}function $e(a,c){return a.charCodeAt(c)|0}function Rt(a,c,l){return a.slice(c,l)}function Pr(a){return a.length}function Qp(a){return a.length}function lo(a,c){return c.push(a),a}function Px(a,c){return a.map(c).join("")}function jp(a,c){return a.filter(function(l){return!Kr(l,c)})}var Da=1,xs=1,qp=0,Sr=0,Fe=0,bs="";function Ua(a,c,l,p,h,f,b,C){return{value:a,root:c,parent:l,type:p,props:h,children:f,line:Da,column:xs,length:b,return:"",siblings:C}}function vt(a,c){return Zi(Ua("",null,null,"",null,null,0,a.siblings),a,{length:-a.length},c)}function ps(a){for(;a.root;)a=vt(a.root,{children:[a]});lo(a,a.siblings)}function Hx(){return Fe}function _x(){return Fe=Sr>0?$e(bs,--Sr):0,xs--,Fe===10&&(xs=1,Da--),Fe}function Hr(){return Fe=Sr<qp?$e(bs,Sr++):0,xs++,Fe===10&&(xs=1,Da++),Fe}function yt(){return $e(bs,Sr)}function Ea(){return Sr}function $a(a,c){return Rt(bs,a,c)}function xo(a){switch(a){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Ox(a){return Da=xs=1,qp=Pr(bs=a),Sr=0,[]}function Rx(a){return bs="",a}function Gi(a){return Gp($a(Sr-1,el(a===91?a+2:a===40?a+1:a)))}function Ax(a){for(;(Fe=yt())&&Fe<33;)Hr();return xo(a)>2||xo(Fe)>3?"":" "}function Fx(a,c){for(;--c&&Hr()&&!(Fe<48||Fe>102||Fe>57&&Fe<65||Fe>70&&Fe<97););return $a(a,Ea()+(c<6&&yt()==32&&Hr()==32))}function el(a){for(;Hr();)switch(Fe){case a:return Sr;case 34:case 39:a!==34&&a!==39&&el(Fe);break;case 40:a===41&&el(a);break;case 92:Hr();break}return Sr}function Wx(a,c){for(;Hr()&&a+Fe!==57;)if(a+Fe===84&&yt()===47)break;return"/*"+$a(c,Sr-1)+"*"+dl(a===47?a:Hr())}function Dx(a){for(;!xo(yt());)Hr();return $a(a,Sr)}function Ux(a){return Rx(Ma("",null,null,null,[""],a=Ox(a),0,[0],a))}function Ma(a,c,l,p,h,f,b,C,k){for(var A=0,W=0,R=b,Q=0,X=0,Z=0,G=1,D=1,le=1,se=0,re="",E=h,te=f,q=p,M=re;D;)switch(Z=se,se=Hr()){case 40:if(Z!=108&&$e(M,R-1)==58){Ia(M+=ie(Gi(se),"&","&\f"),"&\f",Vp(A?C[A-1]:0))!=-1&&(le=-1);break}case 34:case 39:case 91:M+=Gi(se);break;case 9:case 10:case 13:case 32:M+=Ax(Z);break;case 92:M+=Fx(Ea()-1,7);continue;case 47:switch(yt()){case 42:case 47:lo($x(Wx(Hr(),Ea()),c,l,k),k),(xo(Z||1)==5||xo(yt()||1)==5)&&Pr(M)&&Rt(M,-1,void 0)!==" "&&(M+=" ");break;default:M+="/"}break;case 123*G:C[A++]=Pr(M)*le;case 125*G:case 59:case 0:switch(se){case 0:case 125:D=0;case 59+W:le==-1&&(M=ie(M,/\f/g,"")),X>0&&(Pr(M)-R||G===0&&Z===47)&&lo(X>32?Np(M+";",p,l,R-1,k):Np(ie(M," ","")+";",p,l,R-2,k),k);break;case 59:M+=";";default:if(lo(q=bp(M,c,l,A,W,h,C,re,E=[],te=[],R,f),f),se===123)if(W===0)Ma(M,c,q,q,E,f,R,C,te);else{switch(Q){case 99:if($e(M,3)===110)break;case 108:if($e(M,2)===97)break;default:W=0;case 100:case 109:case 115:}W?Ma(a,q,q,p&&lo(bp(a,q,q,0,0,h,C,re,h,E=[],R,te),te),h,te,R,C,p?E:te):Ma(M,q,q,q,[""],te,0,C,te)}}A=W=X=0,G=le=1,re=M="",R=b;break;case 58:R=1+Pr(M),X=Z;default:if(G<1){if(se==123)--G;else if(se==125&&G++==0&&_x()==125)continue}switch(M+=dl(se),se*G){case 38:le=W>0?1:(M+="\f",-1);break;case 44:C[A++]=(Pr(M)-1)*le,le=1;break;case 64:yt()===45&&(M+=Gi(Hr())),Q=yt(),W=R=Pr(re=M+=Dx(Ea())),se++;break;case 45:Z===45&&Pr(M)==2&&(G=0)}}return f}function bp(a,c,l,p,h,f,b,C,k,A,W,R){for(var Q=h-1,X=h===0?f:[""],Z=Qp(X),G=0,D=0,le=0;G<p;++G)for(var se=0,re=Rt(a,Q+1,Q=Vp(D=b[G])),E=a;se<Z;++se)(E=Gp(D>0?X[se]+" "+re:ie(re,/&\f/g,X[se])))&&(k[le++]=E);return Ua(a,c,l,h===0?Wa:C,k,A,W,R)}function $x(a,c,l,p){return Ua(a,c,l,Up,dl(Hx()),Rt(a,2,-2),0,p)}function Np(a,c,l,p,h){return Ua(a,c,l,cl,Rt(a,0,p),Rt(a,p+1,-1),p,h)}function Yp(a,c,l){switch(Bx(a,c)){case 5103:return ye+"print-"+a+a;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:case 6391:case 5879:case 5623:case 6135:case 4599:return ye+a+a;case 4855:return ye+a.replace("add","source-over").replace("substract","source-out").replace("intersect","source-in").replace("exclude","xor")+a;case 4789:return po+a+a;case 5349:case 4246:case 4810:case 6968:case 2756:return ye+a+po+a+Ce+a+a;case 5936:switch($e(a,c+11)){case 114:return ye+a+Ce+ie(a,/[svh]\w+-[tblr]{2}/,"tb")+a;case 108:return ye+a+Ce+ie(a,/[svh]\w+-[tblr]{2}/,"tb-rl")+a;case 45:return ye+a+Ce+ie(a,/[svh]\w+-[tblr]{2}/,"lr")+a}case 6828:case 4268:case 2903:return ye+a+Ce+a+a;case 6165:return ye+a+Ce+"flex-"+a+a;case 5187:return ye+a+ie(a,/(\w+).+(:[^]+)/,ye+"box-$1$2"+Ce+"flex-$1$2")+a;case 5443:return ye+a+Ce+"flex-item-"+ie(a,/flex-|-self/g,"")+(Kr(a,/flex-|baseline/)?"":Ce+"grid-row-"+ie(a,/flex-|-self/g,""))+a;case 4675:return ye+a+Ce+"flex-line-pack"+ie(a,/align-content|flex-|-self/g,"")+a;case 5548:return ye+a+Ce+ie(a,"shrink","negative")+a;case 5292:return ye+a+Ce+ie(a,"basis","preferred-size")+a;case 6060:return ye+"box-"+ie(a,"-grow","")+ye+a+Ce+ie(a,"grow","positive")+a;case 4554:return ye+ie(a,/([^-])(transform)/g,"$1"+ye+"$2")+a;case 6187:return ie(ie(ie(a,/(zoom-|grab)/,ye+"$1"),/(image-set)/,ye+"$1"),a,"")+a;case 5495:case 3959:return ie(a,/(image-set\([^]*)/,ye+"$1$`$1");case 4968:return ie(ie(a,/(.+:)(flex-)?(.*)/,ye+"box-pack:$3"+Ce+"flex-pack:$3"),/space-between/,"justify")+ye+a+a;case 4200:if(!Kr(a,/flex-|baseline/))return Ce+"grid-column-align"+Rt(a,c)+a;break;case 2592:case 3360:return Ce+ie(a,"template-","")+a;case 4384:case 3616:return l&&l.some(function(p,h){return c=h,Kr(p.props,/grid-\w+-end/)})?~Ia(a+(l=l[c].value),"span",0)?a:Ce+ie(a,"-start","")+a+Ce+"grid-row-span:"+(~Ia(l,"span",0)?Kr(l,/\d+/):+Kr(l,/\d+/)-+Kr(a,/\d+/))+";":Ce+ie(a,"-start","")+a;case 4896:case 4128:return l&&l.some(function(p){return Kr(p.props,/grid-\w+-start/)})?a:Ce+ie(ie(a,"-end","-span"),"span ","")+a;case 4095:case 3583:case 4068:case 2532:return ie(a,/(.+)-inline(.+)/,ye+"$1$2")+a;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Pr(a)-1-c>6)switch($e(a,c+1)){case 109:if($e(a,c+4)!==45)break;case 102:return ie(a,/(.+:)(.+)-([^]+)/,"$1"+ye+"$2-$3$1"+po+($e(a,c+3)==108?"$3":"$2-$3"))+a;case 115:return~Ia(a,"stretch",0)?Yp(ie(a,"stretch","fill-available"),c,l)+a:a}break;case 5152:case 5920:return ie(a,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(p,h,f,b,C,k,A){return Ce+h+":"+f+A+(b?Ce+h+"-span:"+(C?k:+k-+f)+A:"")+a});case 4949:if($e(a,c+6)===121)return ie(a,":",":"+ye)+a;break;case 6444:switch($e(a,$e(a,14)===45?18:11)){case 120:return ie(a,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+ye+($e(a,14)===45?"inline-":"")+"box$3$1"+ye+"$2$3$1"+Ce+"$2box$3")+a;case 100:return ie(a,":",":"+Ce)+a}break;case 5719:case 2647:case 2135:case 3927:case 2391:return ie(a,"scroll-","scroll-snap-")+a}return a}function _a(a,c){for(var l="",p=0;p<a.length;p++)l+=c(a[p],p,a,c)||"";return l}function Vx(a,c,l,p){switch(a.type){case Mx:if(a.children.length)break;case Ix:case Ex:case cl:return a.return=a.return||a.value;case Up:return"";case $p:return a.return=a.value+"{"+_a(a.children,p)+"}";case Wa:if(!Pr(a.value=a.props.join(",")))return""}return Pr(l=_a(a.children,p))?a.return=a.value+"{"+l+"}":""}function Gx(a){var c=Qp(a);return function(l,p,h,f){for(var b="",C=0;C<c;C++)b+=a[C](l,p,h,f)||"";return b}}function Qx(a){return function(c){c.root||(c=c.return)&&a(c)}}function qx(a,c,l,p){if(a.length>-1&&!a.return)switch(a.type){case cl:a.return=Yp(a.value,a.length,l);return;case $p:return _a([vt(a,{value:ie(a.value,"@","@"+ye)})],p);case Wa:if(a.length)return Px(l=a.props,function(h){switch(Kr(h,p=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":ps(vt(a,{props:[ie(h,/:(read-\w+)/,":"+po+"$1")]})),ps(vt(a,{props:[h]})),Zi(a,{props:jp(l,p)});break;case"::placeholder":ps(vt(a,{props:[ie(h,/:(plac\w+)/,":"+ye+"input-$1")]})),ps(vt(a,{props:[ie(h,/:(plac\w+)/,":"+po+"$1")]})),ps(vt(a,{props:[ie(h,/:(plac\w+)/,Ce+"input-$1")]})),ps(vt(a,{props:[h]})),Zi(a,{props:jp(l,p)});break}return""})}}var Yx={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},vr={},ms=typeof process!="undefined"&&vr!==void 0&&(vr.REACT_APP_SC_ATTR||vr.SC_ATTR)||"data-styled",Kp="active",Jp="data-styled-version",Va="6.3.10",pl=`/*!sc*/
`,uo=typeof window!="undefined"&&typeof document!="undefined",Kx=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process!="undefined"&&vr!==void 0&&vr.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&vr.REACT_APP_SC_DISABLE_SPEEDY!==""?vr.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&vr.REACT_APP_SC_DISABLE_SPEEDY:typeof process!="undefined"&&vr!==void 0&&vr.SC_DISABLE_SPEEDY!==void 0&&vr.SC_DISABLE_SPEEDY!==""&&vr.SC_DISABLE_SPEEDY!=="false"&&vr.SC_DISABLE_SPEEDY);function go(a){for(var c=[],l=1;l<arguments.length;l++)c[l-1]=arguments[l];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(a," for more information.").concat(c.length>0?" Args: ".concat(c.join(", ")):""))}var Ba=new Map,Oa=new Map,Pa=1,co=function(a){if(Ba.has(a))return Ba.get(a);for(;Oa.has(Pa);)Pa++;var c=Pa++;return Ba.set(a,c),Oa.set(c,a),c},Jx=function(a,c){Pa=c+1,Ba.set(a,c),Oa.set(c,a)},ul=Object.freeze([]),fs=Object.freeze({});function Xx(a,c,l){return l===void 0&&(l=fs),a.theme!==l.theme&&a.theme||c||l.theme}var Xp=new Set(["a","abbr","address","area","article","aside","audio","b","bdi","bdo","blockquote","body","button","br","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","main","map","mark","menu","meter","nav","object","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","slot","small","span","strong","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","switch","symbol","text","textPath","tspan","use"]),Zx=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,em=/(^-|-$)/g;function wp(a){return a.replace(Zx,"-").replace(em,"")}var rm=/(a)(d)/gi,kp=function(a){return String.fromCharCode(a+(a>25?39:97))};function rl(a){var c,l="";for(c=Math.abs(a);c>52;c=c/52|0)l=kp(c%52)+l;return(kp(c%52)+l).replace(rm,"$1-$2")}var Qi,Pt=function(a,c){for(var l=c.length;l;)a=33*a^c.charCodeAt(--l);return a},Zp=function(a){return Pt(5381,a)};function tm(a){return rl(Zp(a)>>>0)}function sm(a){return a.displayName||a.name||"Component"}function qi(a){return typeof a=="string"&&!0}var eu=typeof Symbol=="function"&&Symbol.for,ru=eu?Symbol.for("react.memo"):60115,om=eu?Symbol.for("react.forward_ref"):60112,am={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},nm={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},tu={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},im=((Qi={})[om]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Qi[ru]=tu,Qi);function Sp(a){return("type"in(c=a)&&c.type.$$typeof)===ru?tu:"$$typeof"in a?im[a.$$typeof]:am;var c}var lm=Object.defineProperty,cm=Object.getOwnPropertyNames,Tp=Object.getOwnPropertySymbols,dm=Object.getOwnPropertyDescriptor,pm=Object.getPrototypeOf,Cp=Object.prototype;function su(a,c,l){if(typeof c!="string"){if(Cp){var p=pm(c);p&&p!==Cp&&su(a,p,l)}var h=cm(c);Tp&&(h=h.concat(Tp(c)));for(var f=Sp(a),b=Sp(c),C=0;C<h.length;++C){var k=h[C];if(!(k in nm||l&&l[k]||b&&k in b||f&&k in f)){var A=dm(c,k);try{lm(a,k,A)}catch{}}}}return a}function gs(a){return typeof a=="function"}function hl(a){return typeof a=="object"&&"styledComponentId"in a}function _t(a,c){return a&&c?"".concat(a," ").concat(c):a||c||""}function Lp(a,c){return a.join("")}function mo(a){return a!==null&&typeof a=="object"&&a.constructor.name===Object.name&&!("props"in a&&a.$$typeof)}function tl(a,c,l){if(l===void 0&&(l=!1),!l&&!mo(a)&&!Array.isArray(a))return c;if(Array.isArray(c))for(var p=0;p<c.length;p++)a[p]=tl(a[p],c[p]);else if(mo(c))for(var p in c)a[p]=tl(a[p],c[p]);return a}function xl(a,c){Object.defineProperty(a,"toString",{value:c})}var um=(function(){function a(c){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=c,this._cGroup=0,this._cIndex=0}return a.prototype.indexOfGroup=function(c){if(c===this._cGroup)return this._cIndex;var l=this._cIndex;if(c>this._cGroup)for(var p=this._cGroup;p<c;p++)l+=this.groupSizes[p];else for(p=this._cGroup-1;p>=c;p--)l-=this.groupSizes[p];return this._cGroup=c,this._cIndex=l,l},a.prototype.insertRules=function(c,l){if(c>=this.groupSizes.length){for(var p=this.groupSizes,h=p.length,f=h;c>=f;)if((f<<=1)<0)throw go(16,"".concat(c));this.groupSizes=new Uint32Array(f),this.groupSizes.set(p),this.length=f;for(var b=h;b<f;b++)this.groupSizes[b]=0}for(var C=this.indexOfGroup(c+1),k=0,A=(b=0,l.length);b<A;b++)this.tag.insertRule(C,l[b])&&(this.groupSizes[c]++,C++,k++);k>0&&this._cGroup>c&&(this._cIndex+=k)},a.prototype.clearGroup=function(c){if(c<this.length){var l=this.groupSizes[c],p=this.indexOfGroup(c),h=p+l;this.groupSizes[c]=0;for(var f=p;f<h;f++)this.tag.deleteRule(p);l>0&&this._cGroup>c&&(this._cIndex-=l)}},a.prototype.getGroup=function(c){var l="";if(c>=this.length||this.groupSizes[c]===0)return l;for(var p=this.groupSizes[c],h=this.indexOfGroup(c),f=h+p,b=h;b<f;b++)l+=this.tag.getRule(b)+pl;return l},a})(),hm="style[".concat(ms,"][").concat(Jp,'="').concat(Va,'"]'),xm=new RegExp("^".concat(ms,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),zp=function(a){return typeof ShadowRoot!="undefined"&&a instanceof ShadowRoot||"host"in a&&a.nodeType===11},sl=function(a){if(!a)return document;if(zp(a))return a;if("getRootNode"in a){var c=a.getRootNode();if(zp(c))return c}return document},mm=function(a,c,l){for(var p,h=l.split(","),f=0,b=h.length;f<b;f++)(p=h[f])&&a.registerName(c,p)},fm=function(a,c){for(var l,p=((l=c.textContent)!==null&&l!==void 0?l:"").split(pl),h=[],f=0,b=p.length;f<b;f++){var C=p[f].trim();if(C){var k=C.match(xm);if(k){var A=0|parseInt(k[1],10),W=k[2];A!==0&&(Jx(W,A),mm(a,W,k[3]),a.getTag().insertRules(A,h)),h.length=0}else h.push(C)}}},Yi=function(a){for(var c=sl(a.options.target).querySelectorAll(hm),l=0,p=c.length;l<p;l++){var h=c[l];h&&h.getAttribute(ms)!==Kp&&(fm(a,h),h.parentNode&&h.parentNode.removeChild(h))}};function gm(){return typeof __webpack_nonce__!="undefined"?__webpack_nonce__:null}var ou=function(a){var c=document.head,l=a||c,p=document.createElement("style"),h=(function(C){var k=Array.from(C.querySelectorAll("style[".concat(ms,"]")));return k[k.length-1]})(l),f=h!==void 0?h.nextSibling:null;p.setAttribute(ms,Kp),p.setAttribute(Jp,Va);var b=gm();return b&&p.setAttribute("nonce",b),l.insertBefore(p,f),p},vm=(function(){function a(c){this.element=ou(c),this.element.appendChild(document.createTextNode("")),this.sheet=(function(l){var p;if(l.sheet)return l.sheet;for(var h=(p=l.getRootNode().styleSheets)!==null&&p!==void 0?p:document.styleSheets,f=0,b=h.length;f<b;f++){var C=h[f];if(C.ownerNode===l)return C}throw go(17)})(this.element),this.length=0}return a.prototype.insertRule=function(c,l){try{return this.sheet.insertRule(l,c),this.length++,!0}catch{return!1}},a.prototype.deleteRule=function(c){this.sheet.deleteRule(c),this.length--},a.prototype.getRule=function(c){var l=this.sheet.cssRules[c];return l&&l.cssText?l.cssText:""},a})(),ym=(function(){function a(c){this.element=ou(c),this.nodes=this.element.childNodes,this.length=0}return a.prototype.insertRule=function(c,l){if(c<=this.length&&c>=0){var p=document.createTextNode(l);return this.element.insertBefore(p,this.nodes[c]||null),this.length++,!0}return!1},a.prototype.deleteRule=function(c){this.element.removeChild(this.nodes[c]),this.length--},a.prototype.getRule=function(c){return c<this.length?this.nodes[c].textContent:""},a})(),jm=(function(){function a(c){this.rules=[],this.length=0}return a.prototype.insertRule=function(c,l){return c<=this.length&&(c===this.length?this.rules.push(l):this.rules.splice(c,0,l),this.length++,!0)},a.prototype.deleteRule=function(c){this.rules.splice(c,1),this.length--},a.prototype.getRule=function(c){return c<this.length?this.rules[c]:""},a})(),Ip=uo,bm={isServer:!uo,useCSSOMInjection:!Kx},au=(function(){function a(c,l,p){c===void 0&&(c=fs),l===void 0&&(l={});var h=this;this.options=hr(hr({},bm),c),this.gs=l,this.names=new Map(p),this.server=!!c.isServer,!this.server&&uo&&Ip&&(Ip=!1,Yi(this)),xl(this,function(){return(function(f){for(var b=f.getTag(),C=b.length,k="",A=function(R){var Q=(function(le){return Oa.get(le)})(R);if(Q===void 0)return"continue";var X=f.names.get(Q);if(X===void 0||!X.size)return"continue";var Z=b.getGroup(R);if(Z.length===0)return"continue";var G=ms+".g"+R+'[id="'+Q+'"]',D="";X.forEach(function(le){le.length>0&&(D+=le+",")}),k+=Z+G+'{content:"'+D+'"}'+pl},W=0;W<C;W++)A(W);return k})(h)})}return a.registerId=function(c){return co(c)},a.prototype.rehydrate=function(){!this.server&&uo&&Yi(this)},a.prototype.reconstructWithOptions=function(c,l){l===void 0&&(l=!0);var p=new a(hr(hr({},this.options),c),this.gs,l&&this.names||void 0);return!this.server&&uo&&c.target!==this.options.target&&sl(this.options.target)!==sl(c.target)&&Yi(p),p},a.prototype.allocateGSInstance=function(c){return this.gs[c]=(this.gs[c]||0)+1},a.prototype.getTag=function(){return this.tag||(this.tag=(c=(function(l){var p=l.useCSSOMInjection,h=l.target;return l.isServer?new jm(h):p?new vm(h):new ym(h)})(this.options),new um(c)));var c},a.prototype.hasNameForId=function(c,l){var p,h;return(h=(p=this.names.get(c))===null||p===void 0?void 0:p.has(l))!==null&&h!==void 0&&h},a.prototype.registerName=function(c,l){co(c);var p=this.names.get(c);p?p.add(l):this.names.set(c,new Set([l]))},a.prototype.insertRules=function(c,l,p){this.registerName(c,l),this.getTag().insertRules(co(c),p)},a.prototype.clearNames=function(c){this.names.has(c)&&this.names.get(c).clear()},a.prototype.clearRules=function(c){this.getTag().clearGroup(co(c)),this.clearNames(c)},a.prototype.clearTag=function(){this.tag=void 0},a})(),Nm=/&/g,Jr=47,Ht=42;function Ep(a){if(a.indexOf("}")===-1)return!1;for(var c=a.length,l=0,p=0,h=!1,f=0;f<c;f++){var b=a.charCodeAt(f);if(p!==0||h||b!==Jr||a.charCodeAt(f+1)!==Ht)if(h)b===Ht&&a.charCodeAt(f+1)===Jr&&(h=!1,f++);else if(b!==34&&b!==39||f!==0&&a.charCodeAt(f-1)===92){if(p===0){if(b===123)l++;else if(b===125&&--l<0)return!0}}else p===0?p=b:p===b&&(p=0);else h=!0,f++}return l!==0||p!==0}function nu(a,c){return a.map(function(l){return l.type==="rule"&&(l.value="".concat(c," ").concat(l.value),l.value=l.value.replaceAll(",",",".concat(c," ")),l.props=l.props.map(function(p){return"".concat(c," ").concat(p)})),Array.isArray(l.children)&&l.type!=="@keyframes"&&(l.children=nu(l.children,c)),l})}function wm(a){var c,l,p,h=fs,f=h.options,b=f===void 0?fs:f,C=h.plugins,k=C===void 0?ul:C,A=function(Z,G,D){return D.startsWith(l)&&D.endsWith(l)&&D.replaceAll(l,"").length>0?".".concat(c):Z},W=k.slice();W.push(function(Z){Z.type===Wa&&Z.value.includes("&")&&(p||(p=new RegExp("\\".concat(l,"\\b"),"g")),Z.props[0]=Z.props[0].replace(Nm,l).replace(p,A))}),b.prefix&&W.push(qx),W.push(Vx);var R=[],Q=Gx(W.concat(Qx(function(Z){return R.push(Z)}))),X=function(Z,G,D,le){G===void 0&&(G=""),D===void 0&&(D=""),le===void 0&&(le="&"),c=le,l=G,p=void 0;var se=(function(E){if(!Ep(E))return E;for(var te=E.length,q="",M=0,U=0,Ne=0,He=!1,he=0;he<te;he++){var Be=E.charCodeAt(he);if(Ne!==0||He||Be!==Jr||E.charCodeAt(he+1)!==Ht)if(He)Be===Ht&&E.charCodeAt(he+1)===Jr&&(He=!1,he++);else if(Be!==34&&Be!==39||he!==0&&E.charCodeAt(he-1)===92){if(Ne===0)if(Be===123)U++;else if(Be===125){if(--U<0){for(var Le=he+1;Le<te;){var Je=E.charCodeAt(Le);if(Je===59||Je===10)break;Le++}Le<te&&E.charCodeAt(Le)===59&&Le++,U=0,he=Le-1,M=Le;continue}U===0&&(q+=E.substring(M,he+1),M=he+1)}else Be===59&&U===0&&(q+=E.substring(M,he+1),M=he+1)}else Ne===0?Ne=Be:Ne===Be&&(Ne=0);else He=!0,he++}if(M<te){var or=E.substring(M);Ep(or)||(q+=or)}return q})((function(E){if(E.indexOf("//")===-1)return E;for(var te=E.length,q=[],M=0,U=0,Ne=0,He=0;U<te;){var he=E.charCodeAt(U);if(he!==34&&he!==39||U!==0&&E.charCodeAt(U-1)===92)if(Ne===0)if(he===Jr&&U+1<te&&E.charCodeAt(U+1)===Ht){for(U+=2;U+1<te&&(E.charCodeAt(U)!==Ht||E.charCodeAt(U+1)!==Jr);)U++;U+=2}else if(he===40&&U>=3&&(32|E.charCodeAt(U-1))==108&&(32|E.charCodeAt(U-2))==114&&(32|E.charCodeAt(U-3))==117)He=1,U++;else if(He>0)he===41?He--:he===40&&He++,U++;else if(he===Ht&&U+1<te&&E.charCodeAt(U+1)===Jr)U>M&&q.push(E.substring(M,U)),M=U+=2;else if(he===Jr&&U+1<te&&E.charCodeAt(U+1)===Jr){for(U>M&&q.push(E.substring(M,U));U<te&&E.charCodeAt(U)!==10;)U++;M=U}else U++;else U++;else Ne===0?Ne=he:Ne===he&&(Ne=0),U++}return M===0?E:(M<te&&q.push(E.substring(M)),q.join(""))})(Z)),re=Ux(D||G?"".concat(D," ").concat(G," { ").concat(se," }"):se);return b.namespace&&(re=nu(re,b.namespace)),R=[],_a(re,Q),R};return X.hash=k.length?k.reduce(function(Z,G){return G.name||go(15),Pt(Z,G.name)},5381).toString():"",X}var km=new au,ol=wm(),iu=Ke.createContext({shouldForwardProp:void 0,styleSheet:km,stylis:ol});iu.Consumer;Ke.createContext(void 0);function Mp(){return Ke.useContext(iu)}var Sm=(function(){function a(c,l){var p=this;this.inject=function(h,f){f===void 0&&(f=ol);var b=p.name+f.hash;h.hasNameForId(p.id,b)||h.insertRules(p.id,b,f(p.rules,b,"@keyframes"))},this.name=c,this.id="sc-keyframes-".concat(c),this.rules=l,xl(this,function(){throw go(12,String(p.name))})}return a.prototype.getName=function(c){return c===void 0&&(c=ol),this.name+c.hash},a})();function Tm(a,c){return c==null||typeof c=="boolean"||c===""?"":typeof c!="number"||c===0||a in Yx||a.startsWith("--")?String(c).trim():"".concat(c,"px")}var Cm=function(a){return a>="A"&&a<="Z"};function Bp(a){for(var c="",l=0;l<a.length;l++){var p=a[l];if(l===1&&p==="-"&&a[0]==="-")return a;Cm(p)?c+="-"+p.toLowerCase():c+=p}return c.startsWith("ms-")?"-"+c:c}var lu=function(a){return a==null||a===!1||a===""},cu=function(a){var c=[];for(var l in a){var p=a[l];a.hasOwnProperty(l)&&!lu(p)&&(Array.isArray(p)&&p.isCss||gs(p)?c.push("".concat(Bp(l),":"),p,";"):mo(p)?c.push.apply(c,Ha(Ha(["".concat(l," {")],cu(p),!1),["}"],!1)):c.push("".concat(Bp(l),": ").concat(Tm(l,p),";")))}return c};function Ot(a,c,l,p,h){if(h===void 0&&(h=[]),typeof a=="string")return a&&h.push(a),h;if(lu(a))return h;if(hl(a))return h.push(".".concat(a.styledComponentId)),h;if(gs(a)){if(!gs(b=a)||b.prototype&&b.prototype.isReactComponent||!c)return h.push(a),h;var f=a(c);return Ot(f,c,l,p,h)}var b;if(a instanceof Sm)return l?(a.inject(l,p),h.push(a.getName(p))):h.push(a),h;if(mo(a)){for(var C=cu(a),k=0;k<C.length;k++)h.push(C[k]);return h}if(!Array.isArray(a))return h.push(a.toString()),h;for(k=0;k<a.length;k++)Ot(a[k],c,l,p,h);return h}function Lm(a){for(var c=0;c<a.length;c+=1){var l=a[c];if(gs(l)&&!hl(l))return!1}return!0}var zm=Zp(Va),Im=(function(){function a(c,l,p){this.rules=c,this.staticRulesId="",this.isStatic=(p===void 0||p.isStatic)&&Lm(c),this.componentId=l,this.baseHash=Pt(zm,l),this.baseStyle=p,au.registerId(l)}return a.prototype.generateAndInjectStyles=function(c,l,p){var h=this.baseStyle?this.baseStyle.generateAndInjectStyles(c,l,p).className:"";if(this.isStatic&&!p.hash)if(this.staticRulesId&&l.hasNameForId(this.componentId,this.staticRulesId))h=_t(h,this.staticRulesId);else{var f=Lp(Ot(this.rules,c,l,p)),b=rl(Pt(this.baseHash,f)>>>0);if(!l.hasNameForId(this.componentId,b)){var C=p(f,".".concat(b),void 0,this.componentId);l.insertRules(this.componentId,b,C)}h=_t(h,b),this.staticRulesId=b}else{for(var k=Pt(this.baseHash,p.hash),A="",W=0;W<this.rules.length;W++){var R=this.rules[W];if(typeof R=="string")A+=R;else if(R){var Q=Lp(Ot(R,c,l,p));k=Pt(Pt(k,String(W)),Q),A+=Q}}if(A){var X=rl(k>>>0);if(!l.hasNameForId(this.componentId,X)){var Z=p(A,".".concat(X),void 0,this.componentId);l.insertRules(this.componentId,X,Z)}h=_t(h,X)}}return{className:h,css:typeof window=="undefined"?l.getTag().getGroup(co(this.componentId)):""}},a})(),du=Ke.createContext(void 0);du.Consumer;var Ki={};function Em(a,c,l){var p=hl(a),h=a,f=!qi(a),b=c.attrs,C=b===void 0?ul:b,k=c.componentId,A=k===void 0?(function(E,te){var q=typeof E!="string"?"sc":wp(E);Ki[q]=(Ki[q]||0)+1;var M="".concat(q,"-").concat(tm(Va+q+Ki[q]));return te?"".concat(te,"-").concat(M):M})(c.displayName,c.parentComponentId):k,W=c.displayName,R=W===void 0?(function(E){return qi(E)?"styled.".concat(E):"Styled(".concat(sm(E),")")})(a):W,Q=c.displayName&&c.componentId?"".concat(wp(c.displayName),"-").concat(c.componentId):c.componentId||A,X=p&&h.attrs?h.attrs.concat(C).filter(Boolean):C,Z=c.shouldForwardProp;if(p&&h.shouldForwardProp){var G=h.shouldForwardProp;if(c.shouldForwardProp){var D=c.shouldForwardProp;Z=function(E,te){return G(E,te)&&D(E,te)}}else Z=G}var le=new Im(l,Q,p?h.componentStyle:void 0);function se(E,te){return(function(q,M,U){var Ne=q.attrs,He=q.componentStyle,he=q.defaultProps,Be=q.foldedComponentIds,Le=q.styledComponentId,Je=q.target,or=Ke.useContext(du),Xe=Mp(),we=q.shouldForwardProp||Xe.shouldForwardProp,I=Xx(M,or,he)||fs,V=(function(ue,fe,me){for(var je,Ie=hr(hr({},fe),{className:void 0,theme:me}),Xr=0;Xr<ue.length;Xr+=1){var jt=gs(je=ue[Xr])?je(Ie):je;for(var Tr in jt)Tr==="className"?Ie.className=_t(Ie.className,jt[Tr]):Tr==="style"?Ie.style=hr(hr({},Ie.style),jt[Tr]):Ie[Tr]=jt[Tr]}return"className"in fe&&typeof fe.className=="string"&&(Ie.className=_t(Ie.className,fe.className)),Ie})(Ne,M,I),B=V.as||Je,g={};for(var N in V)V[N]===void 0||N[0]==="$"||N==="as"||N==="theme"&&V.theme===I||(N==="forwardedAs"?g.as=V.forwardedAs:we&&!we(N,B)||(g[N]=V[N]));var oe=(function(ue,fe){var me=Mp(),je=ue.generateAndInjectStyles(fe,me.styleSheet,me.stylis);return je})(He,V),ne=oe.className,xe=_t(Be,Le);return ne&&(xe+=" "+ne),V.className&&(xe+=" "+V.className),g[qi(B)&&!Xp.has(B)?"class":"className"]=xe,U&&(g.ref=U),_.createElement(B,g)})(re,E,te)}se.displayName=R;var re=Ke.forwardRef(se);return re.attrs=X,re.componentStyle=le,re.displayName=R,re.shouldForwardProp=Z,re.foldedComponentIds=p?_t(h.foldedComponentIds,h.styledComponentId):"",re.styledComponentId=Q,re.target=p?h.target:a,Object.defineProperty(re,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(E){this._foldedDefaultProps=p?(function(te){for(var q=[],M=1;M<arguments.length;M++)q[M-1]=arguments[M];for(var U=0,Ne=q;U<Ne.length;U++)tl(te,Ne[U],!0);return te})({},h.defaultProps,E):E}}),xl(re,function(){return".".concat(re.styledComponentId)}),f&&su(re,a,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),re}function Pp(a,c){for(var l=[a[0]],p=0,h=c.length;p<h;p+=1)l.push(c[p],a[p+1]);return l}var Hp=function(a){return Object.assign(a,{isCss:!0})};function Mm(a){for(var c=[],l=1;l<arguments.length;l++)c[l-1]=arguments[l];if(gs(a)||mo(a))return Hp(Ot(Pp(ul,Ha([a],c,!0))));var p=a;return c.length===0&&p.length===1&&typeof p[0]=="string"?Ot(p):Hp(Ot(Pp(p,c)))}function al(a,c,l){if(l===void 0&&(l=fs),!c)throw go(1,c);var p=function(h){for(var f=[],b=1;b<arguments.length;b++)f[b-1]=arguments[b];return a(c,l,Mm.apply(void 0,Ha([h],f,!1)))};return p.attrs=function(h){return al(a,c,hr(hr({},l),{attrs:Array.prototype.concat(l.attrs,h).filter(Boolean)}))},p.withConfig=function(h){return al(a,c,hr(hr({},l),h))},p}var pu=function(a){return al(Em,a)},J=pu;Xp.forEach(function(a){J[a]=pu(a)});const Ji={Wrapper:J.div`
        /* border: 1px solid #f00; */
        height: 100vh;
        overflow: hidden;
        display: flex;
        flex-direction: column;
    `,Header:J.header`
        /* border: 1px solid #f00; */
        height: 60px;
        flex-shrink: 0;
    `,Main:J.main`
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
    `},_p={Wrapper:J.header`
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
    `,Main:J.div`
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
    `};var uu={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Op=Ke.createContext&&Ke.createContext(uu),Bm=["attr","size","title"];function Pm(a,c){if(a==null)return{};var l=Hm(a,c),p,h;if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(h=0;h<f.length;h++)p=f[h],!(c.indexOf(p)>=0)&&Object.prototype.propertyIsEnumerable.call(a,p)&&(l[p]=a[p])}return l}function Hm(a,c){if(a==null)return{};var l={};for(var p in a)if(Object.prototype.hasOwnProperty.call(a,p)){if(c.indexOf(p)>=0)continue;l[p]=a[p]}return l}function Ra(){return Ra=Object.assign?Object.assign.bind():function(a){for(var c=1;c<arguments.length;c++){var l=arguments[c];for(var p in l)Object.prototype.hasOwnProperty.call(l,p)&&(a[p]=l[p])}return a},Ra.apply(this,arguments)}function Rp(a,c){var l=Object.keys(a);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(a);c&&(p=p.filter(function(h){return Object.getOwnPropertyDescriptor(a,h).enumerable})),l.push.apply(l,p)}return l}function Aa(a){for(var c=1;c<arguments.length;c++){var l=arguments[c]!=null?arguments[c]:{};c%2?Rp(Object(l),!0).forEach(function(p){_m(a,p,l[p])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(l)):Rp(Object(l)).forEach(function(p){Object.defineProperty(a,p,Object.getOwnPropertyDescriptor(l,p))})}return a}function _m(a,c,l){return c=Om(c),c in a?Object.defineProperty(a,c,{value:l,enumerable:!0,configurable:!0,writable:!0}):a[c]=l,a}function Om(a){var c=Rm(a,"string");return typeof c=="symbol"?c:c+""}function Rm(a,c){if(typeof a!="object"||!a)return a;var l=a[Symbol.toPrimitive];if(l!==void 0){var p=l.call(a,c);if(typeof p!="object")return p;throw new TypeError("@@toPrimitive must return a primitive value.")}return(c==="string"?String:Number)(a)}function hu(a){return a&&a.map((c,l)=>Ke.createElement(c.tag,Aa({key:l},c.attr),hu(c.child)))}function z(a){return c=>Ke.createElement(Am,Ra({attr:Aa({},a.attr)},c),hu(a.child))}function Am(a){var c=l=>{var{attr:p,size:h,title:f}=a,b=Pm(a,Bm),C=h||l.size||"1em",k;return l.className&&(k=l.className),a.className&&(k=(k?k+" ":"")+a.className),Ke.createElement("svg",Ra({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},l.attr,p,b,{className:k,style:Aa(Aa({color:a.color||l.color},l.style),a.style),height:C,width:C,xmlns:"http://www.w3.org/2000/svg"}),f&&Ke.createElement("title",null,f),a.children)};return Op!==void 0?Ke.createElement(Op.Consumer,null,l=>c(l)):c(uu)}function Fm(a){return z({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"22 12 18 12 15 21 9 3 6 12 2 12"},child:[]}]})(a)}function xu(a){return z({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"line",attr:{x1:"12",y1:"8",x2:"12",y2:"12"},child:[]},{tag:"line",attr:{x1:"12",y1:"16",x2:"12.01",y2:"16"},child:[]}]})(a)}function sr(a){return z({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"},child:[]},{tag:"line",attr:{x1:"12",y1:"9",x2:"12",y2:"13"},child:[]},{tag:"line",attr:{x1:"12",y1:"17",x2:"12.01",y2:"17"},child:[]}]})(a)}function Wm(a){return z({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"21",y1:"10",x2:"7",y2:"10"},child:[]},{tag:"line",attr:{x1:"21",y1:"6",x2:"3",y2:"6"},child:[]},{tag:"line",attr:{x1:"21",y1:"14",x2:"3",y2:"14"},child:[]},{tag:"line",attr:{x1:"21",y1:"18",x2:"7",y2:"18"},child:[]}]})(a)}function Dm(a){return z({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"12",y1:"19",x2:"12",y2:"5"},child:[]},{tag:"polyline",attr:{points:"5 12 12 5 19 12"},child:[]}]})(a)}function mu(a){return z({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"},child:[]},{tag:"path",attr:{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"},child:[]}]})(a)}function Um(a){return z({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"},child:[]},{tag:"polyline",attr:{points:"3.27 6.96 12 12.01 20.73 6.96"},child:[]},{tag:"line",attr:{x1:"12",y1:"22.08",x2:"12",y2:"12"},child:[]}]})(a)}function Xi(a){return z({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"3",y:"4",width:"18",height:"18",rx:"2",ry:"2"},child:[]},{tag:"line",attr:{x1:"16",y1:"2",x2:"16",y2:"6"},child:[]},{tag:"line",attr:{x1:"8",y1:"2",x2:"8",y2:"6"},child:[]},{tag:"line",attr:{x1:"3",y1:"10",x2:"21",y2:"10"},child:[]}]})(a)}function ae(a){return z({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14"},child:[]},{tag:"polyline",attr:{points:"22 4 12 14.01 9 11.01"},child:[]}]})(a)}function fu(a){return z({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"9 11 12 14 22 4"},child:[]},{tag:"path",attr:{d:"M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"},child:[]}]})(a)}function $m(a){return z({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"20 6 9 17 4 12"},child:[]}]})(a)}function ce(a){return z({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"6 9 12 15 18 9"},child:[]}]})(a)}function de(a){return z({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"9 18 15 12 9 6"},child:[]}]})(a)}function Ap(a){return z({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"polyline",attr:{points:"12 6 12 12 16 14"},child:[]}]})(a)}function Ae(a){return z({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"16 18 22 12 16 6"},child:[]},{tag:"polyline",attr:{points:"8 6 2 12 8 18"},child:[]}]})(a)}function Vm(a){return z({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M18 8h1a4 4 0 0 1 0 8h-1"},child:[]},{tag:"path",attr:{d:"M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"},child:[]},{tag:"line",attr:{x1:"6",y1:"1",x2:"6",y2:"4"},child:[]},{tag:"line",attr:{x1:"10",y1:"1",x2:"10",y2:"4"},child:[]},{tag:"line",attr:{x1:"14",y1:"1",x2:"14",y2:"4"},child:[]}]})(a)}function Wr(a){return z({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"9",y:"9",width:"13",height:"13",rx:"2",ry:"2"},child:[]},{tag:"path",attr:{d:"M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"},child:[]}]})(a)}function Gm(a){return z({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"4",y:"4",width:"16",height:"16",rx:"2",ry:"2"},child:[]},{tag:"rect",attr:{x:"9",y:"9",width:"6",height:"6"},child:[]},{tag:"line",attr:{x1:"9",y1:"1",x2:"9",y2:"4"},child:[]},{tag:"line",attr:{x1:"15",y1:"1",x2:"15",y2:"4"},child:[]},{tag:"line",attr:{x1:"9",y1:"20",x2:"9",y2:"23"},child:[]},{tag:"line",attr:{x1:"15",y1:"20",x2:"15",y2:"23"},child:[]},{tag:"line",attr:{x1:"20",y1:"9",x2:"23",y2:"9"},child:[]},{tag:"line",attr:{x1:"20",y1:"14",x2:"23",y2:"14"},child:[]},{tag:"line",attr:{x1:"1",y1:"9",x2:"4",y2:"9"},child:[]},{tag:"line",attr:{x1:"1",y1:"14",x2:"4",y2:"14"},child:[]}]})(a)}function ml(a){return z({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"ellipse",attr:{cx:"12",cy:"5",rx:"9",ry:"3"},child:[]},{tag:"path",attr:{d:"M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"},child:[]},{tag:"path",attr:{d:"M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"},child:[]}]})(a)}function Qm(a){return z({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"circle",attr:{cx:"12",cy:"12",r:"3"},child:[]}]})(a)}function qm(a){return z({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"},child:[]}]})(a)}function vs(a){return z({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 20h9"},child:[]},{tag:"path",attr:{d:"M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"},child:[]}]})(a)}function hs(a){return z({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"},child:[]},{tag:"polyline",attr:{points:"15 3 21 3 21 9"},child:[]},{tag:"line",attr:{x1:"10",y1:"14",x2:"21",y2:"3"},child:[]}]})(a)}function Ym(a){return z({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"},child:[]},{tag:"line",attr:{x1:"1",y1:"1",x2:"23",y2:"23"},child:[]}]})(a)}function Ga(a){return z({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"},child:[]},{tag:"circle",attr:{cx:"12",cy:"12",r:"3"},child:[]}]})(a)}function fl(a){return z({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"},child:[]},{tag:"polyline",attr:{points:"14 2 14 8 20 8"},child:[]},{tag:"line",attr:{x1:"16",y1:"13",x2:"8",y2:"13"},child:[]},{tag:"line",attr:{x1:"16",y1:"17",x2:"8",y2:"17"},child:[]},{tag:"polyline",attr:{points:"10 9 9 9 8 9"},child:[]}]})(a)}function Fp(a){return z({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"18",cy:"18",r:"3"},child:[]},{tag:"circle",attr:{cx:"6",cy:"6",r:"3"},child:[]},{tag:"path",attr:{d:"M6 21V9a9 9 0 0 0 9 9"},child:[]}]})(a)}function gl(a){return z({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"line",attr:{x1:"2",y1:"12",x2:"22",y2:"12"},child:[]},{tag:"path",attr:{d:"M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"},child:[]}]})(a)}function gu(a){return z({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"3",y:"3",width:"7",height:"7"},child:[]},{tag:"rect",attr:{x:"14",y:"3",width:"7",height:"7"},child:[]},{tag:"rect",attr:{x:"14",y:"14",width:"7",height:"7"},child:[]},{tag:"rect",attr:{x:"3",y:"14",width:"7",height:"7"},child:[]}]})(a)}function vo(a){return z({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"4",y1:"9",x2:"20",y2:"9"},child:[]},{tag:"line",attr:{x1:"4",y1:"15",x2:"20",y2:"15"},child:[]},{tag:"line",attr:{x1:"10",y1:"3",x2:"8",y2:"21"},child:[]},{tag:"line",attr:{x1:"16",y1:"3",x2:"14",y2:"21"},child:[]}]})(a)}function Km(a){return z({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"},child:[]}]})(a)}function Jm(a){return z({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"path",attr:{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"},child:[]},{tag:"line",attr:{x1:"12",y1:"17",x2:"12.01",y2:"17"},child:[]}]})(a)}function ys(a){return z({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"3",y:"3",width:"18",height:"18",rx:"2",ry:"2"},child:[]},{tag:"circle",attr:{cx:"8.5",cy:"8.5",r:"1.5"},child:[]},{tag:"polyline",attr:{points:"21 15 16 10 5 21"},child:[]}]})(a)}function We(a){return z({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"line",attr:{x1:"12",y1:"16",x2:"12",y2:"12"},child:[]},{tag:"line",attr:{x1:"12",y1:"8",x2:"12.01",y2:"8"},child:[]}]})(a)}function Xm(a){return z({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"},child:[]}]})(a)}function fo(a){return z({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"12 2 2 7 12 12 22 7 12 2"},child:[]},{tag:"polyline",attr:{points:"2 17 12 22 22 17"},child:[]},{tag:"polyline",attr:{points:"2 12 12 17 22 12"},child:[]}]})(a)}function vu(a){return z({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"3",y:"3",width:"18",height:"18",rx:"2",ry:"2"},child:[]},{tag:"line",attr:{x1:"3",y1:"9",x2:"21",y2:"9"},child:[]},{tag:"line",attr:{x1:"9",y1:"21",x2:"9",y2:"9"},child:[]}]})(a)}function yu(a){return z({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M15 7h3a5 5 0 0 1 5 5 5 5 0 0 1-5 5h-3m-6 0H6a5 5 0 0 1-5-5 5 5 0 0 1 5-5h3"},child:[]},{tag:"line",attr:{x1:"8",y1:"12",x2:"16",y2:"12"},child:[]}]})(a)}function yo(a){return z({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"},child:[]},{tag:"path",attr:{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"},child:[]}]})(a)}function Zm(a){return z({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"8",y1:"6",x2:"21",y2:"6"},child:[]},{tag:"line",attr:{x1:"8",y1:"12",x2:"21",y2:"12"},child:[]},{tag:"line",attr:{x1:"8",y1:"18",x2:"21",y2:"18"},child:[]},{tag:"line",attr:{x1:"3",y1:"6",x2:"3.01",y2:"6"},child:[]},{tag:"line",attr:{x1:"3",y1:"12",x2:"3.01",y2:"12"},child:[]},{tag:"line",attr:{x1:"3",y1:"18",x2:"3.01",y2:"18"},child:[]}]})(a)}function ho(a){return z({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"3",y:"11",width:"18",height:"11",rx:"2",ry:"2"},child:[]},{tag:"path",attr:{d:"M7 11V7a5 5 0 0 1 10 0v4"},child:[]}]})(a)}function ju(a){return z({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"},child:[]},{tag:"polyline",attr:{points:"22,6 12,13 2,6"},child:[]}]})(a)}function ef(a){return z({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"},child:[]},{tag:"circle",attr:{cx:"12",cy:"10",r:"3"},child:[]}]})(a)}function rf(a){return z({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"3",y1:"12",x2:"21",y2:"12"},child:[]},{tag:"line",attr:{x1:"3",y1:"6",x2:"21",y2:"6"},child:[]},{tag:"line",attr:{x1:"3",y1:"18",x2:"21",y2:"18"},child:[]}]})(a)}function tf(a){return z({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"},child:[]}]})(a)}function bu(a){return z({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"},child:[]}]})(a)}function sf(a){return z({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"line",attr:{x1:"8",y1:"12",x2:"16",y2:"12"},child:[]}]})(a)}function of(a){return z({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"},child:[]}]})(a)}function Nu(a){return z({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z"},child:[]},{tag:"path",attr:{d:"M13 13l6 6"},child:[]}]})(a)}function nl(a){return z({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"3 11 22 2 13 21 11 13 3 11"},child:[]}]})(a)}function af(a){return z({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"6",y:"4",width:"4",height:"16"},child:[]},{tag:"rect",attr:{x:"14",y:"4",width:"4",height:"16"},child:[]}]})(a)}function nf(a){return z({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"},child:[]}]})(a)}function lf(a){return z({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"5 3 19 12 5 21 5 3"},child:[]}]})(a)}function cf(a){return z({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"1 4 1 10 7 10"},child:[]},{tag:"path",attr:{d:"M3.51 15a9 9 0 1 0 2.13-9.36L1 10"},child:[]}]})(a)}function df(a){return z({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"23 4 23 10 17 10"},child:[]},{tag:"path",attr:{d:"M20.49 15a9 9 0 1 1-2.12-9.36L23 10"},child:[]}]})(a)}function wu(a){return z({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"11",cy:"11",r:"8"},child:[]},{tag:"line",attr:{x1:"21",y1:"21",x2:"16.65",y2:"16.65"},child:[]}]})(a)}function pf(a){return z({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"22",y1:"2",x2:"11",y2:"13"},child:[]},{tag:"polygon",attr:{points:"22 2 15 22 11 13 2 9 22 2"},child:[]}]})(a)}function Wp(a){return z({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"2",y:"2",width:"20",height:"8",rx:"2",ry:"2"},child:[]},{tag:"rect",attr:{x:"2",y:"14",width:"20",height:"8",rx:"2",ry:"2"},child:[]},{tag:"line",attr:{x1:"6",y1:"6",x2:"6.01",y2:"6"},child:[]},{tag:"line",attr:{x1:"6",y1:"18",x2:"6.01",y2:"18"},child:[]}]})(a)}function uf(a){return z({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"18",cy:"5",r:"3"},child:[]},{tag:"circle",attr:{cx:"6",cy:"12",r:"3"},child:[]},{tag:"circle",attr:{cx:"18",cy:"19",r:"3"},child:[]},{tag:"line",attr:{x1:"8.59",y1:"13.51",x2:"15.42",y2:"17.49"},child:[]},{tag:"line",attr:{x1:"15.41",y1:"6.51",x2:"8.59",y2:"10.49"},child:[]}]})(a)}function At(a){return z({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"},child:[]}]})(a)}function hf(a){return z({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"16 3 21 3 21 8"},child:[]},{tag:"line",attr:{x1:"4",y1:"20",x2:"21",y2:"3"},child:[]},{tag:"polyline",attr:{points:"21 16 21 21 16 21"},child:[]},{tag:"line",attr:{x1:"15",y1:"15",x2:"21",y2:"21"},child:[]},{tag:"line",attr:{x1:"4",y1:"4",x2:"9",y2:"9"},child:[]}]})(a)}function xf(a){return z({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"4",y1:"21",x2:"4",y2:"14"},child:[]},{tag:"line",attr:{x1:"4",y1:"10",x2:"4",y2:"3"},child:[]},{tag:"line",attr:{x1:"12",y1:"21",x2:"12",y2:"12"},child:[]},{tag:"line",attr:{x1:"12",y1:"8",x2:"12",y2:"3"},child:[]},{tag:"line",attr:{x1:"20",y1:"21",x2:"20",y2:"16"},child:[]},{tag:"line",attr:{x1:"20",y1:"12",x2:"20",y2:"3"},child:[]},{tag:"line",attr:{x1:"1",y1:"14",x2:"7",y2:"14"},child:[]},{tag:"line",attr:{x1:"9",y1:"8",x2:"15",y2:"8"},child:[]},{tag:"line",attr:{x1:"17",y1:"16",x2:"23",y2:"16"},child:[]}]})(a)}function mf(a){return z({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"3",y:"3",width:"18",height:"18",rx:"2",ry:"2"},child:[]}]})(a)}function ff(a){return z({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"5"},child:[]},{tag:"line",attr:{x1:"12",y1:"1",x2:"12",y2:"3"},child:[]},{tag:"line",attr:{x1:"12",y1:"21",x2:"12",y2:"23"},child:[]},{tag:"line",attr:{x1:"4.22",y1:"4.22",x2:"5.64",y2:"5.64"},child:[]},{tag:"line",attr:{x1:"18.36",y1:"18.36",x2:"19.78",y2:"19.78"},child:[]},{tag:"line",attr:{x1:"1",y1:"12",x2:"3",y2:"12"},child:[]},{tag:"line",attr:{x1:"21",y1:"12",x2:"23",y2:"12"},child:[]},{tag:"line",attr:{x1:"4.22",y1:"19.78",x2:"5.64",y2:"18.36"},child:[]},{tag:"line",attr:{x1:"18.36",y1:"5.64",x2:"19.78",y2:"4.22"},child:[]}]})(a)}function gf(a){return z({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18"},child:[]}]})(a)}function il(a){return z({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"},child:[]},{tag:"line",attr:{x1:"7",y1:"7",x2:"7.01",y2:"7"},child:[]}]})(a)}function vf(a){return z({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"23 6 13.5 15.5 8.5 10.5 1 18"},child:[]},{tag:"polyline",attr:{points:"17 6 23 6 23 12"},child:[]}]})(a)}function js(a){return z({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"4 7 4 4 20 4 20 7"},child:[]},{tag:"line",attr:{x1:"9",y1:"20",x2:"15",y2:"20"},child:[]},{tag:"line",attr:{x1:"12",y1:"4",x2:"12",y2:"20"},child:[]}]})(a)}function yf(a){return z({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"},child:[]},{tag:"polyline",attr:{points:"17 8 12 3 7 8"},child:[]},{tag:"line",attr:{x1:"12",y1:"3",x2:"12",y2:"15"},child:[]}]})(a)}function jf(a){return z({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"},child:[]},{tag:"circle",attr:{cx:"12",cy:"7",r:"4"},child:[]}]})(a)}function us(a){return z({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"line",attr:{x1:"15",y1:"9",x2:"9",y2:"15"},child:[]},{tag:"line",attr:{x1:"9",y1:"9",x2:"15",y2:"15"},child:[]}]})(a)}function bf(a){return z({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"18",y1:"6",x2:"6",y2:"18"},child:[]},{tag:"line",attr:{x1:"6",y1:"6",x2:"18",y2:"18"},child:[]}]})(a)}function Fa(a){return z({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2"},child:[]}]})(a)}const Nf=()=>{const[a,c]=_.useState(!1),[l,p]=_.useState("dark"),[h,f]=_.useState(!1);_.useEffect(()=>{const A=localStorage.getItem("app-theme")||"dark";p(A),A==="light"?document.documentElement.setAttribute("data-theme","light"):document.documentElement.removeAttribute("data-theme")},[]),_.useEffect(()=>{l==="light"?document.documentElement.setAttribute("data-theme","light"):document.documentElement.removeAttribute("data-theme"),localStorage.setItem("app-theme",l)},[l]);const b=_.useMemo(()=>l==="light"?"dark":"light",[l]),C=()=>{p(b)};return e.jsx(_p.Wrapper,{children:e.jsx(_p.Main,{children:e.jsxs("div",{className:"logoNameThemeToggleWrapper",children:[e.jsxs("div",{className:"logoNameWrapper",children:[e.jsxs("div",{className:"logoWrapper",children:[!a&&e.jsx("div",{className:"logoSkeleton"}),e.jsx("img",{src:"/html-core-notes/logo.png",alt:"html-core-notes",onLoad:()=>c(!0),style:{opacity:a?1:0}})]}),e.jsxs("div",{className:"nameWrapper",children:[e.jsx("div",{className:"title",children:"html-core-notes"}),e.jsx("div",{className:"subTitle",children:"At-a-glance HTML revision"})]})]}),e.jsxs("nav",{className:`quickNav ${h?"open":""}`,"aria-label":"Quick navigation",children:[e.jsx("a",{href:"#about-html",onClick:()=>f(!1),children:"Overview"}),e.jsx("a",{href:"#foundation",onClick:()=>f(!1),children:"Foundation"}),e.jsx("a",{href:"#text-content",onClick:()=>f(!1),children:"Text"}),e.jsx("a",{href:"#forms",onClick:()=>f(!1),children:"Forms"}),e.jsx("a",{href:"#advanced",onClick:()=>f(!1),children:"Advanced"})]}),e.jsx("button",{type:"button",className:"menuToggleBtn",onClick:()=>f(k=>!k),"aria-expanded":h,"aria-label":h?"Close navigation":"Open navigation",title:h?"Close navigation":"Open navigation",children:h?e.jsx(bf,{}):e.jsx(rf,{})}),e.jsxs("button",{type:"button",className:"themeToggleBtn",onClick:C,"aria-label":`Switch to ${b} theme`,title:`Switch to ${b}`,children:[e.jsx("span",{className:"icon",children:l==="light"?e.jsx(of,{}):e.jsx(ff,{})}),e.jsx("span",{className:"label",children:l==="light"?"Light":"Dark"})]})]})})})};function wf(a){return z({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M502.285 159.704l-234-156c-7.987-4.915-16.511-4.96-24.571 0l-234 156C3.714 163.703 0 170.847 0 177.989v155.999c0 7.143 3.714 14.286 9.715 18.286l234 156.022c7.987 4.915 16.511 4.96 24.571 0l234-156.022c6-3.999 9.715-11.143 9.715-18.286V177.989c-.001-7.142-3.715-14.286-9.716-18.285zM278 63.131l172.286 114.858-76.857 51.429L278 165.703V63.131zm-44 0v102.572l-95.429 63.715-76.857-51.429L234 63.131zM44 219.132l55.143 36.857L44 292.846v-73.714zm190 229.715L61.714 333.989l76.857-51.429L234 346.275v102.572zm22-140.858l-77.715-52 77.715-52 77.715 52-77.715 52zm22 140.858V346.275l95.429-63.715 76.857 51.429L278 448.847zm190-156.001l-55.143-36.857L468 219.132v73.714z"},child:[]}]})(a)}function kf(a){return z({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z"},child:[]}]})(a)}function Sf(a){return z({attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"},child:[]}]})(a)}function Tf(a){return z({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"},child:[]}]})(a)}function Cf(a){return z({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"},child:[]}]})(a)}const za={Wrapper:J.footer`
        display: grid;
        grid-template-columns: auto 1fr;
        align-items: center;
        gap: 14px 24px;
        padding: 18px 15px 22px;
        border-top: 1px solid var(--color-border);
        color: var(--color-text-muted);
        font-size: 12px;

        @media (width < 700px) { grid-template-columns: 1fr; }
    `,Brand:J.strong`
        display: inline-flex;
        align-items: center;
        gap: 9px;
        color: var(--color-text-primary);

        img { width: 32px; height: 32px; object-fit: contain; border: 1px solid var(--color-border); border-radius: 8px; }
    `,SocialLinks:J.nav`
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
    `,Copyright:J.p`
        grid-column: 1 / -1;
        margin: 0;
        padding-top: 12px;
        border-top: 1px solid var(--color-border);

        a { color: var(--color-text-secondary); font-weight: 700; }
        a:hover { color: var(--color-text-primary); }
    `},Lf=[["Portfolio","https://www.ashishranjan.net",jf],["GitHub","https://github.com/a2rp",Sf],["CodePen","https://codepen.io/ash1198",wf],["LinkedIn","https://www.linkedin.com/in/aashishranjan",Tf],["Facebook","https://www.facebook.com/theash.ashish/",kf],["YouTube","https://www.youtube.com/@ashishranjan-ashz?sub_confirmation=1",Cf],["Email","mailto:ash.ranjan09@gmail.com",ju],["Support","https://a2rp-donation-page.netlify.app/",Km],["Buy Me a Coffee","https://buymeacoffee.com/a2rp",Vm],["Patreon","https://patreon.com/a2rp",tf]];function zf(){return e.jsxs(za.Wrapper,{children:[e.jsxs(za.Brand,{children:[e.jsx("img",{src:"/html-core-notes/logo.png",alt:"Ashish Ranjan logo"}),e.jsx("span",{children:"HTML Core Notes"})]}),e.jsx(za.SocialLinks,{"aria-label":"Developer and support links",children:Lf.map(([a,c,l])=>e.jsx("a",{href:c,target:"_blank",rel:"noopener noreferrer","aria-label":a,title:a,children:e.jsx(l,{"aria-hidden":"true"})},a))}),e.jsxs(za.Copyright,{children:["Copyright © ",new Date().getFullYear()," "," ",e.jsx("a",{href:"https://www.ashishranjan.net",target:"_blank",rel:"noopener noreferrer",children:"Ashish Ranjan"})]})]})}function If(){const[a,c]=_.useState(!1);return _.useEffect(()=>{const l=document.getElementById("notes-main");if(!l)return;const p=()=>c(l.scrollTop>220);return p(),l.addEventListener("scroll",p,{passive:!0}),()=>l.removeEventListener("scroll",p)},[]),e.jsx(Ef,{type:"button","data-visible":a,"aria-label":"Scroll to top",onClick:()=>{var l;return(l=document.getElementById("notes-main"))==null?void 0:l.scrollTo({top:0,behavior:"smooth"})},children:e.jsx(Dm,{"aria-hidden":"true"})})}const Ef=J.button`
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
`,Dp={Wrapper:J.section`
        width: 100%;
        padding: 60px 20px;
        display: flex;
        justify-content: center;
    `,Content:J.div`
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
    `},Mf=()=>{const a="2026-09-23T23:15:48.063Z",c=new Date(a).toLocaleString("en-US",{year:"numeric",month:"long",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!1});return e.jsx(Dp.Wrapper,{id:"about-html",children:e.jsxs(Dp.Content,{children:[e.jsx("h2",{className:"heading",children:"About HTML"}),e.jsx("p",{children:"HTML stands for HyperText Markup Language. It is the structural foundation of the web. Every website, application, and interface you see begins with HTML. It defines structure and meaning, not styling or behavior. Headings, paragraphs, lists, forms, tables, media, and semantic regions are all described using HTML."}),e.jsx("p",{children:"A strong understanding of HTML makes CSS cleaner and JavaScript more predictable. Good HTML improves accessibility, performance, SEO, and maintainability. It is not just markup. It is the logical blueprint of every web interface."}),e.jsx("p",{children:"The html-core-notes project is designed as a focused revision system. It removes noise and organizes concepts in a structured and practical way. The goal is fast recall, semantic clarity, and strong fundamentals."}),e.jsxs("div",{className:"meta",children:[e.jsx("span",{className:"metaLabel",children:"Last updated:"}),e.jsx("span",{className:"metaValue",children:c})]})]})})},Bf={Wrapper:J.section`
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
    `},Pf=()=>{const[a,c]=_.useState(!1),l=()=>c(p=>!p);return e.jsxs(Bf.Wrapper,{className:`topicCard ${a?"open":""}`,children:[e.jsxs("button",{type:"button",className:"topicHeader",onClick:l,"aria-expanded":a,children:[e.jsx("span",{className:"chev",children:a?e.jsx(ce,{}):e.jsx(de,{})}),e.jsx("span",{className:"icon",children:e.jsx(gl,{})}),e.jsx("span",{className:"title",children:"Introduction"}),e.jsx("span",{className:"meta",children:a?"Collapse":"Expand"})]}),e.jsxs("div",{className:`topicBody ${a?"open":""}`,children:[e.jsxs("div",{className:"section",children:[e.jsx("h3",{className:"h3",children:"What is HTML"}),e.jsx("p",{className:"p",children:"HTML is the structure of a web page. It tells the browser what the content is and what it means: headings, paragraphs, lists, links, images, forms, and sections. HTML does not handle the final look and feel. CSS handles styling and JavaScript handles behavior."})]}),e.jsxs("div",{className:"section",children:[e.jsx("h3",{className:"h3",children:"How the web works"}),e.jsx("p",{className:"p",children:"When you open a website, your browser sends a request to a server. The server replies with files like HTML, CSS, and JavaScript. The browser downloads them, parses them, and renders the page."}),e.jsxs("div",{className:"miniGrid",children:[e.jsxs("div",{className:"mini",children:[e.jsx("span",{className:"miniIcon",children:e.jsx(Wp,{})}),e.jsxs("div",{className:"miniText",children:[e.jsx("div",{className:"miniTitle",children:"Client"}),e.jsx("div",{className:"miniSub",children:"Browser"})]})]}),e.jsxs("div",{className:"mini",children:[e.jsx("span",{className:"miniIcon",children:e.jsx(hf,{})}),e.jsxs("div",{className:"miniText",children:[e.jsx("div",{className:"miniTitle",children:"Request"}),e.jsx("div",{className:"miniSub",children:"HTTP"})]})]}),e.jsxs("div",{className:"mini",children:[e.jsx("span",{className:"miniIcon",children:e.jsx(Wp,{})}),e.jsxs("div",{className:"miniText",children:[e.jsx("div",{className:"miniTitle",children:"Server"}),e.jsx("div",{className:"miniSub",children:"Response"})]})]})]})]}),e.jsxs("div",{className:"section",children:[e.jsx("h3",{className:"h3",children:"Client server model"}),e.jsx("p",{className:"p",children:"The browser is the client. It asks for resources. The server stores and returns them. In real apps, servers may also run logic, talk to databases, and generate dynamic HTML."})]}),e.jsxs("div",{className:"section",children:[e.jsx("h3",{className:"h3",children:"HTTP basics"}),e.jsx("p",{className:"p",children:"HTTP is the protocol used for web communication. Common methods are GET (fetch data) and POST (send data). Status codes like 200 mean success, 404 means not found, and 500 means server error."}),e.jsxs("ul",{className:"bullets",children:[e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),"GET is used to read"]}),e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),"POST is used to send"]}),e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),"Status codes tell what happened"]})]})]}),e.jsxs("div",{className:"section",children:[e.jsx("h3",{className:"h3",children:"Browser parsing pipeline"}),e.jsx("p",{className:"p",children:"The browser reads HTML and builds the DOM (Document Object Model). It reads CSS and builds the CSSOM. Then it combines them to compute layout and paint pixels on the screen."})]}),e.jsxs("div",{className:"section",children:[e.jsx("h3",{className:"h3",children:"Rendering flow overview"}),e.jsx("p",{className:"p",children:"The common flow is: parse HTML into DOM, parse CSS into CSSOM, build render tree, layout, paint, then composite. JavaScript can update the DOM and trigger re-layout or repaint depending on what changed."}),e.jsxs("div",{className:"flow",children:[e.jsxs("div",{className:"flowItem",children:[e.jsx("span",{className:"flowIcon",children:e.jsx(Gm,{})}),"DOM"]}),e.jsx("div",{className:"arrow",children:"→"}),e.jsxs("div",{className:"flowItem",children:[e.jsx("span",{className:"flowIcon",children:e.jsx(Fm,{})}),"Layout"]}),e.jsx("div",{className:"arrow",children:"→"}),e.jsx("div",{className:"flowItem",children:"Paint"}),e.jsx("div",{className:"arrow",children:"→"}),e.jsx("div",{className:"flowItem",children:"Composite"})]})]})]})]})},Hf={Wrapper:J.section`
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
    `},_f=()=>{const[a,c]=_.useState(!1);return e.jsxs(Hf.Wrapper,{className:`topicCard ${a?"open":""}`,children:[e.jsxs("button",{type:"button",className:"topicHeader",onClick:()=>c(!a),"aria-expanded":a,children:[e.jsx("span",{className:"chev",children:a?e.jsx(ce,{}):e.jsx(de,{})}),e.jsx("span",{className:"icon",children:e.jsx(fl,{})}),e.jsx("span",{className:"title",children:"Basic Document Structure"}),e.jsx("span",{className:"meta",children:a?"Collapse":"Expand"})]}),e.jsxs("div",{className:`topicBody ${a?"open":""}`,children:[e.jsxs("div",{className:"section",children:[e.jsx("h3",{className:"h3",children:"Doctype"}),e.jsx("p",{className:"p",children:"The doctype tells the browser which version of HTML is being used. In modern HTML, we use a simple declaration:"}),e.jsx("pre",{className:"code",children:"<!DOCTYPE html>"}),e.jsx("p",{className:"p",children:"This ensures the browser renders the page in standards mode instead of compatibility mode."})]}),e.jsxs("div",{className:"section",children:[e.jsx("h3",{className:"h3",children:"html element"}),e.jsxs("p",{className:"p",children:["The ",e.jsx("strong",{children:"html"})," element is the root element of every HTML document. All other elements must be inside it."]}),e.jsx("pre",{className:"code",children:`<html lang="en">
</html>`})]}),e.jsxs("div",{className:"section",children:[e.jsx("h3",{className:"h3",children:"head and body"}),e.jsxs("p",{className:"p",children:["The ",e.jsx("strong",{children:"head"})," contains metadata such as title, meta tags, styles, and scripts. It does not display visible content."]}),e.jsxs("p",{className:"p",children:["The ",e.jsx("strong",{children:"body"})," contains all visible content such as headings, paragraphs, images, forms, and more."]}),e.jsx("pre",{className:"code",children:`<head>
  <title>My Page</title>
</head>

<body>
  <h1>Hello World</h1>
</body>`})]}),e.jsxs("div",{className:"section",children:[e.jsx("h3",{className:"h3",children:"lang attribute"}),e.jsxs("p",{className:"p",children:["The ",e.jsx("strong",{children:"lang"})," attribute defines the language of the document. It helps screen readers and search engines understand the content."]}),e.jsx("pre",{className:"code",children:'<html lang="en">'})]}),e.jsxs("div",{className:"section",children:[e.jsx("h3",{className:"h3",children:"dir attribute"}),e.jsxs("p",{className:"p",children:["The ",e.jsx("strong",{children:"dir"})," attribute defines text direction. Common values:"]}),e.jsxs("ul",{className:"bullets",children:[e.jsxs("li",{children:[e.jsx("span",{className:"dot"})," ltr - left to right"]}),e.jsxs("li",{children:[e.jsx("span",{className:"dot"})," rtl - right to left"]})]}),e.jsx("pre",{className:"code",children:'<html dir="ltr">'})]}),e.jsxs("div",{className:"section",children:[e.jsx("h3",{className:"h3",children:"Character encoding"}),e.jsx("p",{className:"p",children:"Character encoding tells the browser how to interpret text characters. UTF-8 is the standard encoding and supports almost all characters."}),e.jsx("pre",{className:"code",children:'<meta charset="UTF-8">'})]}),e.jsxs("div",{className:"section",children:[e.jsx("h3",{className:"h3",children:"Viewport meta"}),e.jsx("p",{className:"p",children:"The viewport meta tag makes the website responsive on mobile devices by controlling layout scaling."}),e.jsx("pre",{className:"code",children:'<meta name="viewport" content="width=device-width, initial-scale=1.0">'})]}),e.jsxs("div",{className:"section",children:[e.jsx("h3",{className:"h3",children:"Favicon"}),e.jsx("p",{className:"p",children:"A favicon is the small icon shown in the browser tab. It is added using the link element inside the head."}),e.jsx("pre",{className:"code",children:'<link rel="icon" href="/favicon.ico">'})]}),e.jsxs("div",{className:"section",children:[e.jsx("h3",{className:"h3",children:"Title element"}),e.jsx("p",{className:"p",children:"The title element defines the text shown in the browser tab and is important for SEO."}),e.jsx("pre",{className:"code",children:"<title>My Website</title>"})]})]})]})},Of={Wrapper:J.section`
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
    `},Rf=()=>{const[a,c]=_.useState(!1),l=()=>c(X=>!X),p=async X=>{try{await navigator.clipboard.writeText(X)}catch{}},h="<h1>Hello</h1>",f='<a href="https://example.com" target="_blank" rel="noopener noreferrer">Visit</a>',b='<input type="checkbox" checked />',C='<div id="card" class="box" data-user-id="42" title="Profile"></div>',k="<!-- This is a comment -->",A='<img src="photo.jpg" alt="A photo" />',W=`<br />
<hr />
<meta charset="utf-8" />`,R=`<input>
<img>
<br>
<meta charset="utf-8">`,Q=`<div></div>
<span></span>
<p></p>
<button></button>`;return e.jsxs(Of.Wrapper,{className:`topicCard ${a?"open":""}`,children:[e.jsxs("button",{type:"button",className:"topicHeader",onClick:l,"aria-expanded":a,children:[e.jsx("span",{className:"chev",children:a?e.jsx(ce,{}):e.jsx(de,{})}),e.jsx("span",{className:"icon",children:e.jsx(Ae,{})}),e.jsx("span",{className:"title",children:"HTML Syntax Rules"}),e.jsx("span",{className:"meta",children:a?"Collapse":"Expand"})]}),e.jsxs("div",{className:`topicBody ${a?"open":""}`,children:[e.jsxs("div",{className:"section",children:[e.jsxs("h3",{className:"h3",children:[e.jsx("span",{className:"h3Icon",children:e.jsx(il,{})}),"Tags"]}),e.jsxs("p",{className:"p",children:["A ",e.jsx("span",{className:"mono",children:"tag"})," is the markup inside angle brackets. Most elements use an opening tag and a closing tag."]}),e.jsxs("div",{className:"codeCard",children:[e.jsxs("div",{className:"codeTop",children:[e.jsx("div",{className:"codeTitle",children:"Example"}),e.jsx("button",{type:"button",className:"copyBtn",onClick:()=>p(h),title:"Copy","aria-label":"Copy code",children:e.jsx(Wr,{})})]}),e.jsx("pre",{className:"code",children:e.jsx("code",{children:h})}),e.jsxs("div",{className:"note",children:["Opening tag:"," ",e.jsx("span",{className:"mono",children:"<h1>"})," and closing tag: ",e.jsx("span",{className:"mono",children:"</h1>"})]})]})]}),e.jsxs("div",{className:"section",children:[e.jsxs("h3",{className:"h3",children:[e.jsx("span",{className:"h3Icon",children:e.jsx(vo,{})}),"Elements"]}),e.jsxs("p",{className:"p",children:["An ",e.jsx("span",{className:"mono",children:"element"})," is the complete thing: the opening tag, the content, and the closing tag. Some elements are empty (they have no content and no closing tag). Those are called void elements (covered below)."]}),e.jsxs("div",{className:"miniGrid",children:[e.jsxs("div",{className:"mini",children:[e.jsx("div",{className:"miniTitle",children:"Element"}),e.jsx("div",{className:"miniSub",children:"Tag + content + closing tag"})]}),e.jsxs("div",{className:"mini",children:[e.jsx("div",{className:"miniTitle",children:"Tag"}),e.jsx("div",{className:"miniSub",children:"Only the brackets part"})]}),e.jsxs("div",{className:"mini",children:[e.jsx("div",{className:"miniTitle",children:"Void element"}),e.jsx("div",{className:"miniSub",children:"No closing tag"})]})]})]}),e.jsxs("div",{className:"section",children:[e.jsxs("h3",{className:"h3",children:[e.jsx("span",{className:"h3Icon",children:e.jsx(js,{})}),"Attributes"]}),e.jsxs("p",{className:"p",children:["Attributes add extra information to an element. They live inside the opening tag. Most attributes follow the format ",e.jsx("span",{className:"mono",children:'name="value"'}),"."]}),e.jsxs("div",{className:"codeCard",children:[e.jsxs("div",{className:"codeTop",children:[e.jsx("div",{className:"codeTitle",children:"Example"}),e.jsx("button",{type:"button",className:"copyBtn",onClick:()=>p(f),title:"Copy","aria-label":"Copy code",children:e.jsx(Wr,{})})]}),e.jsx("pre",{className:"code",children:e.jsx("code",{children:f})}),e.jsxs("div",{className:"note",children:[e.jsx("span",{className:"mono",children:"href"}),","," ",e.jsx("span",{className:"mono",children:"target"}),","," ",e.jsx("span",{className:"mono",children:"rel"})," are attributes."]})]})]}),e.jsxs("div",{className:"section",children:[e.jsxs("h3",{className:"h3",children:[e.jsx("span",{className:"h3Icon",children:e.jsx(fu,{})}),"Boolean attributes"]}),e.jsx("p",{className:"p",children:'Boolean attributes are either "present" or "absent". If present, they mean true. You usually do not write a value.'}),e.jsxs("div",{className:"codeCard",children:[e.jsxs("div",{className:"codeTop",children:[e.jsx("div",{className:"codeTitle",children:"Example"}),e.jsx("button",{type:"button",className:"copyBtn",onClick:()=>p(b),title:"Copy","aria-label":"Copy code",children:e.jsx(Wr,{})})]}),e.jsx("pre",{className:"code",children:e.jsx("code",{children:b})}),e.jsxs("div",{className:"note",children:[e.jsx("span",{className:"mono",children:"checked"}),","," ",e.jsx("span",{className:"mono",children:"disabled"}),","," ",e.jsx("span",{className:"mono",children:"required"}),","," ",e.jsx("span",{className:"mono",children:"readonly"})," are common boolean attributes."]})]})]}),e.jsxs("div",{className:"section",children:[e.jsxs("h3",{className:"h3",children:[e.jsx("span",{className:"h3Icon",children:e.jsx(gl,{})}),"Global attributes"]}),e.jsx("p",{className:"p",children:"Global attributes are attributes that work on almost all HTML elements. They are widely used for styling, identification, accessibility, and custom behavior."}),e.jsxs("ul",{className:"bullets",children:[e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),e.jsx("span",{className:"mono",children:"id"})," - unique identifier"]}),e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),e.jsx("span",{className:"mono",children:"class"})," - reusable group name"]}),e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),e.jsx("span",{className:"mono",children:"title"})," - tooltip text"]}),e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),e.jsx("span",{className:"mono",children:"style"})," - inline styles (use rarely)"]}),e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),e.jsx("span",{className:"mono",children:"hidden"})," - hides the element"]}),e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),e.jsx("span",{className:"mono",children:"tabindex"})," - keyboard navigation"]}),e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),e.jsx("span",{className:"mono",children:"role"})," and"," ",e.jsx("span",{className:"mono",children:"aria-*"})," - accessibility"]})]}),e.jsxs("div",{className:"codeCard",children:[e.jsxs("div",{className:"codeTop",children:[e.jsx("div",{className:"codeTitle",children:"Example"}),e.jsx("button",{type:"button",className:"copyBtn",onClick:()=>p(C),title:"Copy","aria-label":"Copy code",children:e.jsx(Wr,{})})]}),e.jsx("pre",{className:"code",children:e.jsx("code",{children:C})})]})]}),e.jsxs("div",{className:"section",children:[e.jsxs("h3",{className:"h3",children:[e.jsx("span",{className:"h3Icon",children:e.jsx(ml,{})}),"Data attributes"]}),e.jsxs("p",{className:"p",children:["Data attributes store custom data on elements. They start with ",e.jsx("span",{className:"mono",children:"data-"}),". They are useful when you want to attach extra information to a DOM element without inventing new attributes."]}),e.jsxs("ul",{className:"bullets",children:[e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),"Example:"," ",e.jsx("span",{className:"mono",children:'data-user-id="42"'})]}),e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),"In JavaScript you read them using"," ",e.jsx("span",{className:"mono",children:"element.dataset"})]})]})]}),e.jsxs("div",{className:"section",children:[e.jsxs("h3",{className:"h3",children:[e.jsx("span",{className:"h3Icon",children:e.jsx(bu,{})}),"Comments"]}),e.jsx("p",{className:"p",children:"Comments are ignored by the browser. They are useful for notes, but avoid leaving sensitive information or large blocks of commented code in production."}),e.jsxs("div",{className:"codeCard",children:[e.jsxs("div",{className:"codeTop",children:[e.jsx("div",{className:"codeTitle",children:"Example"}),e.jsx("button",{type:"button",className:"copyBtn",onClick:()=>p(k),title:"Copy","aria-label":"Copy code",children:e.jsx(Wr,{})})]}),e.jsx("pre",{className:"code",children:e.jsx("code",{children:k})})]})]}),e.jsxs("div",{className:"section",children:[e.jsxs("h3",{className:"h3",children:[e.jsx("span",{className:"h3Icon",children:e.jsx(js,{})}),"Case sensitivity"]}),e.jsxs("p",{className:"p",children:["HTML tags and attribute names are generally"," ",e.jsx("span",{className:"mono",children:"case-insensitive"}),", but the common convention is to write them in lowercase. File paths in URLs can be case-sensitive depending on your server, so keep filenames consistent."]}),e.jsxs("div",{className:"warn",children:[e.jsx("span",{className:"warnIcon",children:e.jsx(sr,{})}),e.jsx("div",{className:"warnText",children:"Use lowercase for tags and attributes. Keep file paths consistent in case."})]})]}),e.jsxs("div",{className:"section",children:[e.jsxs("h3",{className:"h3",children:[e.jsx("span",{className:"h3Icon",children:e.jsx(sf,{})}),"Self closing tags myth"]}),e.jsxs("p",{className:"p",children:["In HTML, many people write"," ",e.jsx("span",{className:"mono",children:"<div />"}),'. This is not valid for normal elements. Only specific elements are "void" (like ',e.jsx("span",{className:"mono",children:"img"}),","," ",e.jsx("span",{className:"mono",children:"input"}),","," ",e.jsx("span",{className:"mono",children:"br"}),")."]}),e.jsxs("div",{className:"codeCard",children:[e.jsxs("div",{className:"codeTop",children:[e.jsx("div",{className:"codeTitle",children:"Correct examples"}),e.jsx("button",{type:"button",className:"copyBtn",onClick:()=>p(Q),title:"Copy","aria-label":"Copy code",children:e.jsx(Wr,{})})]}),e.jsx("pre",{className:"code",children:e.jsx("code",{children:Q})}),e.jsx("div",{className:"note",children:"Regular elements need both opening and closing tags."})]})]}),e.jsxs("div",{className:"section",children:[e.jsxs("h3",{className:"h3",children:[e.jsx("span",{className:"h3Icon",children:e.jsx(il,{})}),"Void elements"]}),e.jsxs("p",{className:"p",children:["Void elements do not have a closing tag in HTML. You can write them as ",e.jsx("span",{className:"mono",children:"<img>"})," ","or ",e.jsx("span",{className:"mono",children:"<img />"}),". Both are fine in HTML, but the important part is: you do not write a closing tag like"," ",e.jsx("span",{className:"mono",children:"</img>"}),"."]}),e.jsxs("div",{className:"codeCard",children:[e.jsxs("div",{className:"codeTop",children:[e.jsx("div",{className:"codeTitle",children:"Common void elements"}),e.jsx("button",{type:"button",className:"copyBtn",onClick:()=>p(R),title:"Copy","aria-label":"Copy code",children:e.jsx(Wr,{})})]}),e.jsx("pre",{className:"code",children:e.jsx("code",{children:R})})]}),e.jsxs("div",{className:"codeCard",children:[e.jsxs("div",{className:"codeTop",children:[e.jsx("div",{className:"codeTitle",children:"Void example"}),e.jsx("button",{type:"button",className:"copyBtn",onClick:()=>p(A),title:"Copy","aria-label":"Copy code",children:e.jsx(Wr,{})})]}),e.jsx("pre",{className:"code",children:e.jsx("code",{children:A})})]}),e.jsxs("div",{className:"codeCard",children:[e.jsxs("div",{className:"codeTop",children:[e.jsx("div",{className:"codeTitle",children:"More void examples"}),e.jsx("button",{type:"button",className:"copyBtn",onClick:()=>p(W),title:"Copy","aria-label":"Copy code",children:e.jsx(Wr,{})})]}),e.jsx("pre",{className:"code",children:e.jsx("code",{children:W})})]}),e.jsxs("div",{className:"note",children:["Common void elements:"," ",e.jsx("span",{className:"mono",children:"area, base, br, col, embed, hr, img, input, link, meta, param, source, track, wbr"})]})]})]})]})},Af={Wrapper:J.section`
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
    `},Ff=()=>{const[a,c]=_.useState(!1),l=()=>c(p=>!p);return e.jsxs(Af.Wrapper,{className:`topicCard ${a?"open":""}`,children:[e.jsxs("button",{type:"button",className:"topicHeader",onClick:l,"aria-expanded":a,children:[e.jsx("span",{className:"chev",children:a?e.jsx(ce,{}):e.jsx(de,{})}),e.jsx("span",{className:"icon",children:e.jsx(gu,{})}),e.jsx("span",{className:"title",children:"Content Model"}),e.jsx("span",{className:"meta",children:a?"Collapse":"Expand"})]}),e.jsxs("div",{className:`topicBody ${a?"open":""}`,children:[e.jsxs("div",{className:"intro",children:[e.jsx("p",{className:"p",children:"The HTML content model is a simple way to understand where an element is allowed to live and what kind of content it can contain. In practice, it helps you avoid invalid nesting and helps you write HTML that is more predictable and accessible."}),e.jsxs("div",{className:"note",children:[e.jsx("span",{className:"noteIcon",children:e.jsx(We,{})}),e.jsxs("div",{className:"noteText",children:['Modern HTML is not only "block vs inline". HTML has content categories like'," ",e.jsx("span",{className:"mono",children:"flow"}),",",e.jsx("span",{className:"mono",children:"phrasing"}),","," ",e.jsx("span",{className:"mono",children:"sectioning"}),", and"," ",e.jsx("span",{className:"mono",children:"interactive"}),". These categories explain nesting rules more accurately."]})]})]}),e.jsxs("div",{className:"section",children:[e.jsxs("div",{className:"secHead",children:[e.jsx("span",{className:"secIcon",children:e.jsx(Um,{})}),e.jsx("h3",{className:"h3",children:"Block vs inline"})]}),e.jsx("p",{className:"p",children:"This is the classic beginner idea. A block element usually starts on a new line and takes full width by default. An inline element usually stays within a line of text and only takes the space it needs."}),e.jsxs("div",{className:"cards2",children:[e.jsxs("div",{className:"miniCard",children:[e.jsx("div",{className:"miniTitle",children:"Block examples"}),e.jsx("div",{className:"miniSub",children:"div, p, h1, ul, li, section, article"})]}),e.jsxs("div",{className:"miniCard",children:[e.jsx("div",{className:"miniTitle",children:"Inline examples"}),e.jsx("div",{className:"miniSub",children:"span, a, strong, em, code, img"})]})]}),e.jsxs("div",{className:"warn",children:[e.jsx("span",{className:"warnDot"}),e.jsx("div",{className:"warnText",children:"Block vs inline is useful, but it is not a complete rule set. For correct nesting rules, use the content categories below."})]})]}),e.jsxs("div",{className:"section",children:[e.jsxs("div",{className:"secHead",children:[e.jsx("span",{className:"secIcon",children:e.jsx(fo,{})}),e.jsx("h3",{className:"h3",children:"Flow content"})]}),e.jsxs("p",{className:"p",children:["Flow content is the broad category for most elements you normally place inside the"," ",e.jsx("span",{className:"mono",children:"body"}),". If you are building the structure of a page, you are mostly working with flow content."]}),e.jsxs("ul",{className:"bullets",children:[e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),"Includes paragraphs, headings, lists, sections, images, tables, forms, etc."]}),e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),"Most layout level elements are flow content."]})]})]}),e.jsxs("div",{className:"section",children:[e.jsxs("div",{className:"secHead",children:[e.jsx("span",{className:"secIcon",children:e.jsx(js,{})}),e.jsx("h3",{className:"h3",children:"Phrasing content"})]}),e.jsx("p",{className:"p",children:'Phrasing content is basically "text level" content. It is what you can put inside a paragraph without breaking its meaning. It usually flows inline with text.'}),e.jsxs("div",{className:"chips",children:[e.jsx("span",{className:"chip",children:"span"}),e.jsx("span",{className:"chip",children:"a"}),e.jsx("span",{className:"chip",children:"strong"}),e.jsx("span",{className:"chip",children:"em"}),e.jsx("span",{className:"chip",children:"code"}),e.jsx("span",{className:"chip",children:"img"}),e.jsx("span",{className:"chip",children:"br"}),e.jsx("span",{className:"chip",children:"small"})]}),e.jsxs("div",{className:"note small",children:[e.jsx("span",{className:"noteIcon",children:e.jsx(We,{})}),e.jsxs("div",{className:"noteText",children:["A common mistake is placing a block element inside a"," ",e.jsx("span",{className:"mono",children:"p"}),". A paragraph can contain phrasing content, not flow content."]})]})]}),e.jsxs("div",{className:"section",children:[e.jsxs("div",{className:"secHead",children:[e.jsx("span",{className:"secIcon",children:e.jsx(vu,{})}),e.jsx("h3",{className:"h3",children:"Sectioning content"})]}),e.jsx("p",{className:"p",children:"Sectioning content creates a new section in the document outline. It helps screen readers and search engines understand the structure of your page."}),e.jsxs("div",{className:"cards2",children:[e.jsxs("div",{className:"miniCard",children:[e.jsx("div",{className:"miniTitle",children:"Sectioning elements"}),e.jsx("div",{className:"miniSub",children:"section, article, nav, aside"})]}),e.jsxs("div",{className:"miniCard",children:[e.jsx("div",{className:"miniTitle",children:"Why it matters"}),e.jsx("div",{className:"miniSub",children:"Better structure, accessibility, and meaning"})]})]})]}),e.jsxs("div",{className:"section",children:[e.jsxs("div",{className:"secHead",children:[e.jsx("span",{className:"secIcon",children:e.jsx(vo,{})}),e.jsx("h3",{className:"h3",children:"Heading content"})]}),e.jsxs("p",{className:"p",children:["Heading content includes"," ",e.jsx("span",{className:"mono",children:"h1"})," to"," ",e.jsx("span",{className:"mono",children:"h6"}),". Headings label sections and improve navigation for users and assistive technology."]}),e.jsxs("ul",{className:"bullets",children:[e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),"Use headings in order. Do not jump levels randomly."]}),e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),"Prefer one main page title. Other headings represent sub-sections."]})]})]}),e.jsxs("div",{className:"section",children:[e.jsxs("div",{className:"secHead",children:[e.jsx("span",{className:"secIcon",children:e.jsx(ys,{})}),e.jsx("h3",{className:"h3",children:"Embedded content"})]}),e.jsx("p",{className:"p",children:"Embedded content is content that brings external media or non-text resources into the document."}),e.jsxs("div",{className:"chips",children:[e.jsx("span",{className:"chip",children:"img"}),e.jsx("span",{className:"chip",children:"video"}),e.jsx("span",{className:"chip",children:"audio"}),e.jsx("span",{className:"chip",children:"iframe"}),e.jsx("span",{className:"chip",children:"canvas"}),e.jsx("span",{className:"chip",children:"svg"})]}),e.jsxs("div",{className:"note small",children:[e.jsx("span",{className:"noteIcon",children:e.jsx(We,{})}),e.jsx("div",{className:"noteText",children:"Embedded content often has extra accessibility requirements, like alt text for images or captions for video."})]})]}),e.jsxs("div",{className:"section",children:[e.jsxs("div",{className:"secHead",children:[e.jsx("span",{className:"secIcon",children:e.jsx(Nu,{})}),e.jsx("h3",{className:"h3",children:"Interactive content"})]}),e.jsx("p",{className:"p",children:"Interactive content includes elements that the user can interact with. They usually accept focus, clicks, or keyboard actions."}),e.jsxs("div",{className:"cards2",children:[e.jsxs("div",{className:"miniCard",children:[e.jsx("div",{className:"miniTitle",children:"Examples"}),e.jsx("div",{className:"miniSub",children:"button, a (with href), input, select, textarea, details, summary"})]}),e.jsxs("div",{className:"miniCard",children:[e.jsx("div",{className:"miniTitle",children:"Rule of thumb"}),e.jsx("div",{className:"miniSub",children:"Do not nest interactive elements inside each other"})]})]}),e.jsxs("div",{className:"warn",children:[e.jsx("span",{className:"warnDot"}),e.jsx("div",{className:"warnText",children:"Avoid nesting buttons inside links or links inside buttons. It creates confusing behavior for keyboard and screen reader users."})]})]}),e.jsxs("div",{className:"section",children:[e.jsxs("div",{className:"secHead",children:[e.jsx("span",{className:"secIcon",children:e.jsx(We,{})}),e.jsx("h3",{className:"h3",children:"Metadata content"})]}),e.jsxs("p",{className:"p",children:["Metadata content is mainly used inside the"," ",e.jsx("span",{className:"mono",children:"head"}),". It provides information about the document rather than visible content."]}),e.jsxs("div",{className:"chips",children:[e.jsx("span",{className:"chip",children:"title"}),e.jsx("span",{className:"chip",children:"meta"}),e.jsx("span",{className:"chip",children:"link"}),e.jsx("span",{className:"chip",children:"style"}),e.jsx("span",{className:"chip",children:"script"}),e.jsx("span",{className:"chip",children:"base"})]}),e.jsxs("div",{className:"note small",children:[e.jsx("span",{className:"noteIcon",children:e.jsx(We,{})}),e.jsx("div",{className:"noteText",children:"Metadata affects SEO, social previews, and how the page behaves on mobile devices."})]})]}),e.jsxs("div",{className:"section",children:[e.jsxs("div",{className:"secHead",children:[e.jsx("span",{className:"secIcon",children:e.jsx(fo,{})}),e.jsx("h3",{className:"h3",children:"Transparent content model"})]}),e.jsx("p",{className:"p",children:'"Transparent" means the element does not define a fixed content category by itself. Instead, it allows the same content that its parent allows.'}),e.jsxs("div",{className:"cards2",children:[e.jsxs("div",{className:"miniCard",children:[e.jsx("div",{className:"miniTitle",children:"Common example"}),e.jsxs("div",{className:"miniSub",children:[e.jsx("span",{className:"mono",children:"a"})," can wrap text, images, and other phrasing content depending on context"]})]}),e.jsxs("div",{className:"miniCard",children:[e.jsx("div",{className:"miniTitle",children:"Why it exists"}),e.jsx("div",{className:"miniSub",children:"Flexible nesting without breaking semantics"})]})]}),e.jsxs("div",{className:"note small",children:[e.jsx("span",{className:"noteIcon",children:e.jsx(We,{})}),e.jsx("div",{className:"noteText",children:'Transparent does not mean "anything is allowed". The surrounding context still matters.'})]})]}),e.jsxs("div",{className:"quick",children:[e.jsx("div",{className:"quickTitle",children:"Quick take"}),e.jsx("div",{className:"quickText",children:"Flow is most body content. Phrasing is text level. Sectioning creates meaningful sections. Embedded is media. Interactive is clickable/focusable. Metadata is head info. Transparent depends on context."})]})]})]})},Wf={Wrapper:J.section`
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
    `},Df=()=>{const[a,c]=_.useState(!1),l=()=>c(p=>!p);return e.jsxs(Wf.Wrapper,{className:`topicCard ${a?"open":""}`,children:[e.jsxs("button",{type:"button",className:"topicHeader",onClick:l,"aria-expanded":a,children:[e.jsx("span",{className:"chev",children:a?e.jsx(ce,{}):e.jsx(de,{})}),e.jsx("span",{className:"icon",children:e.jsx(js,{})}),e.jsx("span",{className:"title",children:"Headings"}),e.jsx("span",{className:"meta",children:a?"Collapse":"Expand"})]}),e.jsxs("div",{className:`topicBody ${a?"open":""}`,children:[e.jsxs("div",{className:"section",children:[e.jsxs("h3",{className:"h3",children:[e.jsx("span",{className:"h3Icon",children:e.jsx(vo,{})}),"h1 to h6"]}),e.jsx("p",{className:"p",children:"HTML headings are used to label sections of content. You have six levels: h1 (most important) to h6 (least important). Headings should describe what the section is about, not just make text bigger. Styling is CSS, meaning is HTML."}),e.jsxs("div",{className:"callout good",children:[e.jsxs("div",{className:"calloutTop",children:[e.jsx("span",{className:"calloutIcon",children:e.jsx(ae,{})}),e.jsx("div",{className:"calloutTitle",children:"Practical rule"})]}),e.jsx("div",{className:"calloutText",children:"Use one clear h1 for the main page title, then use h2 for major sections, h3 for sub-sections, and so on. Do not skip levels just for looks."})]}),e.jsxs("div",{className:"chips",children:[e.jsx("span",{className:"chip",children:"h1: page title"}),e.jsx("span",{className:"chip",children:"h2: section"}),e.jsx("span",{className:"chip",children:"h3: sub-section"}),e.jsx("span",{className:"chip",children:"h4 to h6: deeper nesting"})]}),e.jsxs("div",{className:"example",children:[e.jsx("div",{className:"exampleTitle",children:"Example structure"}),e.jsx("pre",{className:"code",children:`h1: HTML Core Notes
  h2: Text Content
    h3: Headings
    h3: Paragraphs
  h2: Forms
    h3: Inputs
    h3: Validation`})]})]}),e.jsxs("div",{className:"section",children:[e.jsxs("h3",{className:"h3",children:[e.jsx("span",{className:"h3Icon",children:e.jsx(fo,{})}),"Document outline theory"]}),e.jsx("p",{className:"p",children:'People often say "headings create the page outline." The idea is: headings communicate a hierarchy of sections. This helps readers scan the page, and helps assistive technologies understand structure.'}),e.jsx("p",{className:"p",children:"In practice, different browsers and tools have handled outlining differently over time. The safe approach is to treat headings as a clear, human-friendly hierarchy: h1 for the page, then h2, then h3, and so on. If the hierarchy feels logical to a human, it usually works well for accessibility too."}),e.jsxs("div",{className:"callout warn",children:[e.jsxs("div",{className:"calloutTop",children:[e.jsx("span",{className:"calloutIcon",children:e.jsx(sr,{})}),e.jsx("div",{className:"calloutTitle",children:"Common mistake"})]}),e.jsx("div",{className:"calloutText",children:"Using headings only for styling. For styling, use a class and CSS. For structure, use the correct heading level."})]})]}),e.jsxs("div",{className:"section",children:[e.jsxs("h3",{className:"h3",children:[e.jsx("span",{className:"h3Icon",children:e.jsx(Ga,{})}),"Accessibility considerations"]}),e.jsx("p",{className:"p",children:"Many screen reader users navigate by headings. They can jump from one heading to the next like a table of contents. Clean heading structure improves navigation, understanding, and speed."}),e.jsxs("ul",{className:"bullets",children:[e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),'Keep heading text meaningful, not vague like "Section"']}),e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),"Do not skip levels (h2 straight to h4) unless the structure truly demands it"]}),e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),"Do not use headings for non-heading UI like buttons or labels"]}),e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),"Use headings to break long pages into scannable parts"]})]}),e.jsxs("div",{className:"quickGrid",children:[e.jsxs("div",{className:"quickCard",children:[e.jsx("div",{className:"quickTitle",children:"Good"}),e.jsx("div",{className:"quickText",children:"h1 Profile, h2 About, h2 Projects, h3 Featured"})]}),e.jsxs("div",{className:"quickCard",children:[e.jsx("div",{className:"quickTitle",children:"Bad"}),e.jsx("div",{className:"quickText",children:"Multiple h1 everywhere, random jumps for styling"})]})]})]}),e.jsxs("div",{className:"section",children:[e.jsxs("h3",{className:"h3",children:[e.jsx("span",{className:"h3Icon",children:e.jsx(fo,{})}),"Transparent content model"]}),e.jsx("p",{className:"p",children:'Some HTML elements are "transparent." That means the element itself does not define a strict content type. Instead, it allows whatever content would be allowed if the element was not there.'}),e.jsx("p",{className:"p",children:"Think of it like a wrapper. For example, the anchor tag a often behaves like this. If you wrap text, it behaves like text. If you wrap a block of content, it behaves like that block, as long as it is valid to do so."}),e.jsxs("div",{className:"callout good",children:[e.jsxs("div",{className:"calloutTop",children:[e.jsx("span",{className:"calloutIcon",children:e.jsx(ae,{})}),e.jsx("div",{className:"calloutTitle",children:"Why it matters"})]}),e.jsx("div",{className:"calloutText",children:"It helps you build clean clickable regions (like cards) without breaking HTML rules. Still, keep it accessible and avoid wrapping interactive elements inside other interactive elements."})]}),e.jsxs("ul",{className:"bullets",children:[e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),"Transparent elements behave like their children"]}),e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),"Always keep nesting valid (no button inside a)"]}),e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),"Prefer clear semantics over tricky wrappers"]})]})]})]})]})},Uf={Wrapper:J.section`
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
    `},$f=()=>{const[a,c]=_.useState(!1),[l,p]=_.useState(""),h=_.useMemo(()=>[{key:"p",tag:"p",title:"Paragraph",why:"Use for normal paragraphs of text. A paragraph is a block of content.",example:"<p>This is a paragraph. It groups a chunk of related text.</p>"},{key:"br",tag:"br",title:"Line break",why:"Use for a line break inside the same paragraph (poems, addresses). Do not use it to create spacing.",example:"<p>Line one<br />Line two<br />Line three</p>"},{key:"hr",tag:"hr",title:"Thematic break",why:"Use to separate sections or topics. It represents a change in theme, not just a line.",example:`<p>Topic A content...</p>
<hr />
<p>Topic B content...</p>`},{key:"pre",tag:"pre",title:"Preformatted text",why:"Preserves spaces and new lines. Useful for code blocks, ASCII diagrams, formatted text.",example:`<pre>
  Name: Ash
  Role: Developer
  Notes: Keep spacing
</pre>`},{key:"blockquote",tag:"blockquote",title:"Block quote",why:"Use for a longer quotation taken from another source.",example:`<blockquote cite="https://example.com">
  <p>Long quote goes here...</p>
</blockquote>`},{key:"q",tag:"q",title:"Inline quote",why:"Use for short inline quotations. Browsers usually add quotation marks automatically.",example:"<p>He said <q>HTML is structure</q> and moved on.</p>"},{key:"cite",tag:"cite",title:"Citation",why:"Use to reference the title of a work (book, movie, article, paper). Not for the author name.",example:"<p>My favorite web doc is <cite>MDN Web Docs</cite>.</p>"},{key:"abbr",tag:"abbr",title:"Abbreviation",why:"Use for abbreviations and acronyms. Add a title attribute for the full form.",example:`<p><abbr title="HyperText Markup Language">HTML</abbr> is the web's structure.</p>`},{key:"dfn",tag:"dfn",title:"Defining instance",why:"Use when you define a term for the first time in a document or section.",example:"<p><dfn>DOM</dfn> is the Document Object Model.</p>"},{key:"time",tag:"time",title:"Time / date",why:"Use for dates, times, and durations. Add datetime for machine readable value (SEO, parsing).",example:'<p>Last updated: <time datetime="2026-02-19">February 19, 2026</time></p>'},{key:"mark",tag:"mark",title:"Highlight",why:"Use to highlight text that is relevant in the current context (search results, important part).",example:"<p>Remember: <mark>do not use tables for layout</mark>.</p>"},{key:"small",tag:"small",title:"Small print",why:"Use for disclaimers, legal text, side notes. Not for styling. It has meaning.",example:"<p><small>Note: This is a demo project.</small></p>"},{key:"sub",tag:"sub",title:"Subscript",why:"Use for chemical formulas, math subscripts.",example:"<p>Water is H<sub>2</sub>O.</p>"},{key:"sup",tag:"sup",title:"Superscript",why:"Use for exponents, footnote markers.",example:"<p>2<sup>10</sup> equals 1024.</p>"},{key:"strong",tag:"strong",title:"Strong importance",why:"Use to show strong importance, seriousness, or urgency. Not just bold styling.",example:"<p><strong>Warning:</strong> Do not share your password.</p>"},{key:"em",tag:"em",title:"Emphasis",why:"Use to emphasize a word in a sentence (changes meaning). Screen readers also announce emphasis.",example:"<p>I said <em>today</em>, not tomorrow.</p>"},{key:"b",tag:"b",title:"Stylistic bold",why:"Use when you want bold without extra importance. Example: keywords in a summary.",example:"<p>Keywords: <b>HTML</b>, <b>CSS</b>, <b>JS</b></p>"},{key:"i",tag:"i",title:"Stylistic italic",why:"Use for alternate voice, technical terms, or idioms without emphasis meaning.",example:"<p>The term <i>viewport</i> matters on mobile.</p>"},{key:"u",tag:"u",title:"Unarticulated annotation",why:"Rare. Traditionally used for misspellings or annotations. Avoid using for links style.",example:"<p>This word is <u>incorect</u> (misspelled).</p>"},{key:"s",tag:"s",title:"No longer accurate",why:"Use for content that is no longer accurate or relevant (like old pricing).",example:"<p><s>₹999</s> ₹699</p>"},{key:"code",tag:"code",title:"Inline code",why:"Use for short code fragments inline.",example:"<p>Use <code>&lt;main&gt;</code> for the main content.</p>"},{key:"kbd",tag:"kbd",title:"Keyboard input",why:"Use to represent keyboard keys or user input.",example:"<p>Press <kbd>Ctrl</kbd> + <kbd>S</kbd> to save.</p>"},{key:"samp",tag:"samp",title:"Sample output",why:"Use to represent output from a program or system.",example:"<p><samp>Build completed successfully.</samp></p>"},{key:"var",tag:"var",title:"Variable",why:"Use for variables in math or programming context.",example:"<p>Let <var>x</var> be the number of users.</p>"},{key:"span",tag:"span",title:"Generic inline",why:"Use when no semantic tag fits. It is just a hook for styling or JS.",example:'<p>Hello <span class="name">Ash</span></p>'}],[]),f=async(b,C)=>{try{await navigator.clipboard.writeText(b),p(C),window.setTimeout(()=>p(""),900)}catch{}};return e.jsxs(Uf.Wrapper,{className:`topicCard ${a?"open":""}`,children:[e.jsxs("button",{type:"button",className:"topicHeader",onClick:()=>c(b=>!b),"aria-expanded":a,children:[e.jsx("span",{className:"chev",children:a?e.jsx(ce,{}):e.jsx(de,{})}),e.jsx("span",{className:"icon",children:e.jsx(js,{})}),e.jsx("span",{className:"title",children:"Paragraph and Text Semantics"}),e.jsx("span",{className:"meta",children:a?"Collapse":"Expand"})]}),e.jsxs("div",{className:`topicBody ${a?"open":""}`,children:[e.jsxs("div",{className:"intro",children:[e.jsxs("div",{className:"introTop",children:[e.jsx("div",{className:"introIcon",children:e.jsx(mu,{})}),e.jsxs("div",{className:"introText",children:[e.jsx("div",{className:"introTitle",children:"What this covers"}),e.jsx("div",{className:"introSub",children:"These tags are used to write text properly in HTML. Some tags add meaning (semantics) and help screen readers, SEO, and maintainability."})]})]}),e.jsxs("div",{className:"note",children:[e.jsx("span",{className:"noteIcon",children:e.jsx(We,{})}),e.jsxs("div",{className:"noteText",children:["Use semantic tags when possible. Use"," ",e.jsx("span",{className:"mono",children:"span"})," only when no semantic tag fits."]})]})]}),e.jsx("div",{className:"grid",children:h.map(b=>e.jsxs("div",{className:"card",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("div",{className:"tagChip",children:e.jsxs("span",{className:"mono",children:["<",b.tag,">"]})}),e.jsx("button",{type:"button",className:"copyBtn",onClick:()=>f(b.example,b.key),title:"Copy example","aria-label":"Copy example",children:l===b.key?e.jsx($m,{}):e.jsx(Wr,{})})]}),e.jsx("div",{className:"cardTitle",children:b.title}),e.jsx("div",{className:"cardWhy",children:b.why}),e.jsx("pre",{className:"code",children:e.jsx("code",{children:b.example})})]},b.key))}),e.jsxs("div",{className:"footerTip",children:["Tip: Use ",e.jsx("span",{className:"mono",children:"strong"})," and"," ",e.jsx("span",{className:"mono",children:"em"})," for meaning. Use"," ",e.jsx("span",{className:"mono",children:"b"})," and"," ",e.jsx("span",{className:"mono",children:"i"})," only for styling without meaning."]})]})]})},Vf={Wrapper:J.section`
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
    `},Gf=()=>{const[a,c]=_.useState(!1);return e.jsxs(Vf.Wrapper,{className:a?"open":"",children:[e.jsxs("button",{type:"button",className:"topicHeader",onClick:()=>c(l=>!l),"aria-expanded":a,children:[e.jsx("span",{className:"chev",children:a?e.jsx(ce,{}):e.jsx(de,{})}),e.jsx("span",{className:"icon",children:e.jsx(Zm,{})}),e.jsx("span",{className:"title",children:"Lists"}),e.jsx("span",{className:"meta",children:"ul, ol, li, dl, attributes"})]}),e.jsxs("div",{className:`topicBody ${a?"open":""}`,children:[e.jsxs("div",{className:"section",children:[e.jsx("h3",{className:"h3",children:"What are Lists"}),e.jsx("p",{className:"p",children:"Lists are used to group related items together. They help structure content clearly and improve readability. HTML provides three main types of lists: unordered, ordered, and description lists."})]}),e.jsxs("div",{className:"section",children:[e.jsx("h3",{className:"h3",children:"Unordered List - ul"}),e.jsx("p",{className:"p",children:"An unordered list displays items with bullets. Order does not matter."}),e.jsx("div",{className:"codeBlock",children:`<ul>
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
</ol>`}),e.jsxs("ol",{type:"A",className:"demoList",children:[e.jsx("li",{children:"Item"}),e.jsx("li",{children:"Item"})]})]})]})]})]})},Qf={Wrapper:J.section`
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
    `},qf=()=>{const[a,c]=_.useState(!1);return e.jsxs(Qf.Wrapper,{children:[e.jsxs("button",{type:"button",className:"topicHeader",onClick:()=>c(l=>!l),"aria-expanded":a,children:[e.jsx("span",{className:"chev",children:a?e.jsx(ce,{}):e.jsx(de,{})}),e.jsx("span",{className:"icon",children:e.jsx(yu,{})}),e.jsx("span",{className:"title",children:"Anchors and Links"}),e.jsx("span",{className:"meta",children:a?"Collapse":"Expand"})]}),e.jsxs("div",{className:`topicBody ${a?"open":""}`,children:[e.jsxs("div",{className:"section",children:[e.jsx("h3",{className:"h3",children:"a tag"}),e.jsx("p",{className:"p",children:"The anchor tag is used to create hyperlinks. It allows users to navigate from one page to another, to a section within the same page, or even to another website."}),e.jsx("pre",{className:"code",children:'<a href="https://example.com">Visit Website</a>'})]}),e.jsxs("div",{className:"section",children:[e.jsx("h3",{className:"h3",children:"href attribute"}),e.jsx("p",{className:"p",children:"The href attribute defines the destination of the link. It can be:"}),e.jsxs("ul",{className:"bullets",children:[e.jsx("li",{children:"Absolute URL: https://google.com"}),e.jsx("li",{children:"Relative URL: /about"}),e.jsx("li",{children:"Same page section: #contact"}),e.jsx("li",{children:"Email: mailto:example@email.com"})]})]}),e.jsxs("div",{className:"section",children:[e.jsx("h3",{className:"h3",children:"target attribute"}),e.jsx("p",{className:"p",children:"The target attribute specifies where to open the linked document."}),e.jsx("pre",{className:"code",children:`<a href="https://google.com" target="_blank">
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
</section>`})]}),e.jsxs("div",{className:"section",children:[e.jsx("h3",{className:"h3",children:"External link security"}),e.jsx("p",{className:"p",children:'When opening external links in a new tab using target="_blank", always use:'}),e.jsxs("ul",{className:"bullets",children:[e.jsx("li",{children:'rel="noopener"'}),e.jsx("li",{children:'rel="noreferrer"'})]}),e.jsxs("div",{className:"securityBox",children:[e.jsx(At,{}),e.jsx("span",{children:"This prevents the new page from accessing your window object and protects against reverse tabnabbing."})]})]})]})]})},Yf={Wrapper:J.section`
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
    `},Kf=()=>{const[a,c]=_.useState(!1);return e.jsxs(Yf.Wrapper,{className:a?"open":"",children:[e.jsxs("button",{type:"button",className:"topicHeader",onClick:()=>c(l=>!l),"aria-expanded":a,children:[e.jsx("span",{className:"chev",children:a?e.jsx(ce,{}):e.jsx(de,{})}),e.jsx("span",{className:"icon",children:e.jsx(nl,{})}),e.jsx("span",{className:"title",children:"Navigation"}),e.jsx("span",{className:"meta",children:a?"Collapse":"Expand"})]}),e.jsxs("div",{className:`topicBody ${a?"open":""}`,children:[e.jsxs("div",{className:"section",children:[e.jsx("h3",{className:"h3",children:"nav element"}),e.jsx("p",{className:"p",children:"The nav element represents a section of the page that contains navigation links. It is used for major navigation blocks such as the main menu, footer links, or sidebar navigation."}),e.jsx("p",{className:"p",children:"Not every group of links should be wrapped in nav. Only important navigation areas that help users move across the site should use it."}),e.jsx("div",{className:"codeBlock",children:`<nav>
  <ul>
    <li><a href="/">Home</a></li>
    <li><a href="/about">About</a></li>
    <li><a href="/contact">Contact</a></li>
  </ul>
</nav>`}),e.jsxs("div",{className:"tip",children:[e.jsx(yo,{}),"Use semantic nav instead of a generic div for better accessibility and SEO."]})]}),e.jsxs("div",{className:"section",children:[e.jsx("h3",{className:"h3",children:"Breadcrumb structure"}),e.jsx("p",{className:"p",children:"A breadcrumb shows the user where they are inside the site hierarchy. It usually appears at the top of a page and helps users navigate back to parent sections."}),e.jsxs("div",{className:"breadcrumbExample",children:["Home ",e.jsx("span",{children:"›"})," Blog ",e.jsx("span",{children:"›"})," HTML Guide"]}),e.jsx("div",{className:"codeBlock",children:`<nav aria-label="Breadcrumb">
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
</nav>`}),e.jsxs("ul",{className:"bullets",children:[e.jsx("li",{children:"Wrap pagination inside nav"}),e.jsx("li",{children:"Use aria-label for clarity"}),e.jsx("li",{children:"Highlight active page"})]})]})]})]})},Jf={Wrapper:J.section`
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
    `},Xf=()=>{const[a,c]=_.useState(!1);return e.jsxs(Jf.Wrapper,{className:a?"open":"",children:[e.jsxs("button",{type:"button",className:"topicHeader",onClick:()=>c(l=>!l),"aria-expanded":a,children:[e.jsx("span",{className:"chev",children:a?e.jsx(ce,{}):e.jsx(de,{})}),e.jsx("span",{className:"icon",children:e.jsx(ys,{})}),e.jsx("span",{className:"title",children:"Images"}),e.jsx("span",{className:"meta",children:a?"Collapse":"Expand"})]}),e.jsxs("div",{className:`topicBody ${a?"open":""}`,children:[e.jsxs("section",{className:"section",children:[e.jsx("h3",{className:"h3",children:"img"}),e.jsx("p",{className:"p",children:"The img element is used to display an image in HTML. It is a self closing element and must include the src attribute."}),e.jsx("div",{className:"code",children:'<img src="image.jpg" alt="A description" />'})]}),e.jsxs("section",{className:"section",children:[e.jsx("h3",{className:"h3",children:"alt"}),e.jsx("p",{className:"p",children:"The alt attribute provides alternative text for accessibility and screen readers. If the image fails to load, this text is shown instead."}),e.jsxs("ul",{className:"bullets",children:[e.jsxs("li",{children:[e.jsx(ae,{}),"Always describe the image meaningfully"]}),e.jsxs("li",{children:[e.jsx(ae,{}),"Use empty alt only for decorative images"]})]}),e.jsx("div",{className:"code",children:'<img src="profile.jpg" alt="Portrait of John Doe" />'})]}),e.jsxs("section",{className:"section",children:[e.jsx("h3",{className:"h3",children:"width and height"}),e.jsx("p",{className:"p",children:"Setting width and height helps the browser reserve space before the image loads. This prevents layout shifting."}),e.jsx("div",{className:"code",children:`<img 
  src="photo.jpg" 
  alt="Landscape" 
  width="800" 
  height="500" 
/>`})]}),e.jsxs("section",{className:"section",children:[e.jsx("h3",{className:"h3",children:"loading attribute"}),e.jsx("p",{className:"p",children:"The loading attribute controls when the image loads. It improves performance."}),e.jsxs("ul",{className:"bullets",children:[e.jsxs("li",{children:[e.jsx(ae,{}),"lazy loads image only when near viewport"]}),e.jsxs("li",{children:[e.jsx(ae,{}),"eager loads immediately"]})]}),e.jsx("div",{className:"code",children:'<img src="banner.jpg" alt="Banner" loading="lazy" />'})]}),e.jsxs("section",{className:"section",children:[e.jsx("h3",{className:"h3",children:"decoding attribute"}),e.jsx("p",{className:"p",children:"The decoding attribute tells the browser how to decode the image."}),e.jsxs("ul",{className:"bullets",children:[e.jsxs("li",{children:[e.jsx(ae,{}),"async allows non blocking decoding"]}),e.jsxs("li",{children:[e.jsx(ae,{}),"auto lets browser decide"]})]}),e.jsx("div",{className:"code",children:'<img src="hero.jpg" alt="Hero" decoding="async" />'})]}),e.jsxs("section",{className:"section",children:[e.jsx("h3",{className:"h3",children:"srcset"}),e.jsx("p",{className:"p",children:"srcset allows you to provide multiple image sizes for different screen resolutions."}),e.jsx("div",{className:"code",children:`<img 
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
</figure>`})]})]})]})},Zf={Wrapper:J.section`
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
    `},eg=()=>{const[a,c]=_.useState(!1),l=()=>c(p=>!p);return e.jsxs(Zf.Wrapper,{className:`topicCard ${a?"open":""}`,children:[e.jsxs("button",{type:"button",className:"topicHeader",onClick:l,"aria-expanded":a,children:[e.jsx("span",{className:"chev",children:a?e.jsx(ce,{}):e.jsx(de,{})}),e.jsx("span",{className:"icon",children:e.jsx(hs,{})}),e.jsx("span",{className:"title",children:"Embedded"}),e.jsx("span",{className:"meta",children:a?"Collapse":"Expand"})]}),e.jsxs("div",{className:`topicBody ${a?"open":""}`,children:[e.jsxs("div",{className:"section",children:[e.jsxs("h3",{className:"h3",children:[e.jsx("span",{className:"h3Icon",children:e.jsx(We,{})}),'What does "embedded content" mean']}),e.jsxs("p",{className:"p",children:["Embedded content means showing something inside your page that comes from somewhere else or that is rendered by the browser as a separate embedded document. The most common example is an"," ",e.jsx("span",{className:"mono",children:"iframe"}),", which can show another webpage inside your webpage."]}),e.jsx("p",{className:"p",children:"Use embedded elements when you truly need to display external content like maps, videos, payment widgets, or third party tools. If you control the content, it is often better to build a native UI instead of embedding a full page."})]}),e.jsxs("div",{className:"section",children:[e.jsxs("h3",{className:"h3",children:[e.jsx("span",{className:"h3Icon",children:e.jsx(yo,{})}),"iframe"]}),e.jsxs("p",{className:"p",children:[e.jsx("span",{className:"mono",children:"iframe"})," embeds another HTML page inside your current page. Think of it like a mini browser window inside your layout."]}),e.jsxs("div",{className:"tips",children:[e.jsxs("div",{className:"tip",children:[e.jsx("span",{className:"tipIcon",children:e.jsx(At,{})}),e.jsxs("div",{className:"tipText",children:[e.jsx("div",{className:"tipTitle",children:"Security note"}),e.jsxs("div",{className:"tipSub",children:["If you embed a page you do not fully trust, use ",e.jsx("span",{className:"mono",children:"sandbox"})," to restrict it."]})]})]}),e.jsxs("div",{className:"tip",children:[e.jsx("span",{className:"tipIcon",children:e.jsx(ho,{})}),e.jsxs("div",{className:"tipText",children:[e.jsx("div",{className:"tipTitle",children:"Privacy note"}),e.jsxs("div",{className:"tipSub",children:["Many embeds track users. Only embed trusted sources and prefer minimal permissions in"," ",e.jsx("span",{className:"mono",children:"allow"}),"."]})]})]})]}),e.jsxs("div",{className:"codeBlock",children:[e.jsxs("div",{className:"codeTop",children:[e.jsx("span",{className:"codeIcon",children:e.jsx(Ae,{})}),e.jsx("div",{className:"codeTitle",children:"Basic iframe"})]}),e.jsx("pre",{className:"pre",children:`<iframe
  src="https://example.com"
  title="Example embed"
  width="600"
  height="400"
  loading="lazy"
></iframe>`}),e.jsxs("p",{className:"pNote",children:["Always add a meaningful"," ",e.jsx("span",{className:"mono",children:"title"})," so screen readers can describe what the embedded content is."]})]})]}),e.jsxs("div",{className:"section",children:[e.jsxs("h3",{className:"h3",children:[e.jsx("span",{className:"h3Icon",children:e.jsx(At,{})}),"sandbox"]}),e.jsxs("p",{className:"p",children:[e.jsx("span",{className:"mono",children:"sandbox"})," is an iframe attribute that blocks powerful capabilities by default. It turns the embed into a safer, restricted environment. You can selectively allow specific capabilities."]}),e.jsxs("div",{className:"codeBlock",children:[e.jsxs("div",{className:"codeTop",children:[e.jsx("span",{className:"codeIcon",children:e.jsx(Ae,{})}),e.jsx("div",{className:"codeTitle",children:"iframe with sandbox"})]}),e.jsx("pre",{className:"pre",children:`<iframe
  src="https://example.com"
  title="Sandboxed embed"
  sandbox
></iframe>`}),e.jsxs("p",{className:"pNote",children:["Just writing ",e.jsx("span",{className:"mono",children:"sandbox"})," ","without values applies strict restrictions."]})]}),e.jsxs("div",{className:"miniList",children:[e.jsx("div",{className:"miniTitle",children:"Common sandbox tokens"}),e.jsxs("ul",{className:"bullets",children:[e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),e.jsx("span",{className:"mono",children:"allow-scripts"}),": allow running JavaScript inside the iframe"]}),e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),e.jsx("span",{className:"mono",children:"allow-forms"}),": allow form submissions"]}),e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),e.jsx("span",{className:"mono",children:"allow-same-origin"}),": treat the iframe as same origin (be careful)"]}),e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),e.jsx("span",{className:"mono",children:"allow-popups"}),": allow opening new windows or tabs"]})]}),e.jsx("p",{className:"pNote",children:"Beginner rule: start strict, then add only what you absolutely need."})]}),e.jsxs("div",{className:"codeBlock",children:[e.jsxs("div",{className:"codeTop",children:[e.jsx("span",{className:"codeIcon",children:e.jsx(Ae,{})}),e.jsx("div",{className:"codeTitle",children:"selective sandbox permissions"})]}),e.jsx("pre",{className:"pre",children:`<iframe
  src="https://example.com"
  title="Restricted embed"
  sandbox="allow-scripts allow-forms"
  loading="lazy"
></iframe>`})]})]}),e.jsxs("div",{className:"section",children:[e.jsxs("h3",{className:"h3",children:[e.jsx("span",{className:"h3Icon",children:e.jsx(ho,{})}),"allow attribute"]}),e.jsxs("p",{className:"p",children:[e.jsx("span",{className:"mono",children:"allow"})," controls which browser features the iframe is allowed to use. This is often used for permissions like camera, microphone, fullscreen, autoplay, and more."]}),e.jsxs("div",{className:"codeBlock",children:[e.jsxs("div",{className:"codeTop",children:[e.jsx("span",{className:"codeIcon",children:e.jsx(Ae,{})}),e.jsx("div",{className:"codeTitle",children:"iframe allow example"})]}),e.jsx("pre",{className:"pre",children:`<iframe
  src="https://example.com"
  title="Feature controlled embed"
  allow="fullscreen; clipboard-write"
  sandbox="allow-scripts"
></iframe>`}),e.jsx("p",{className:"pNote",children:"Keep it minimal. If you do not need a feature, do not allow it."})]})]}),e.jsxs("div",{className:"section",children:[e.jsxs("h3",{className:"h3",children:[e.jsx("span",{className:"h3Icon",children:e.jsx(hs,{})}),"embed"]}),e.jsxs("p",{className:"p",children:[e.jsx("span",{className:"mono",children:"embed"})," is used to embed non-HTML external resources like PDFs or media that the browser can render using built-in support or plugins. In modern web apps, it is less common than"," ",e.jsx("span",{className:"mono",children:"iframe"}),"."]}),e.jsxs("div",{className:"codeBlock",children:[e.jsxs("div",{className:"codeTop",children:[e.jsx("span",{className:"codeIcon",children:e.jsx(Ae,{})}),e.jsx("div",{className:"codeTitle",children:"embed PDF example"})]}),e.jsx("pre",{className:"pre",children:`<embed
  src="/docs/guide.pdf"
  type="application/pdf"
  width="100%"
  height="500"
/>`})]}),e.jsx("p",{className:"pNote",children:"If you need more control and accessibility, consider linking the file and letting the user open it, or use an iframe with a safe viewer."})]}),e.jsxs("div",{className:"section",children:[e.jsxs("h3",{className:"h3",children:[e.jsx("span",{className:"h3Icon",children:e.jsx(hs,{})}),"object and param"]}),e.jsxs("p",{className:"p",children:[e.jsx("span",{className:"mono",children:"object"})," is a generic container to embed resources like PDFs, images, or other content types. It can also include fallback content if the browser cannot render the resource."]}),e.jsxs("p",{className:"p",children:[e.jsx("span",{className:"mono",children:"param"})," is used inside"," ",e.jsx("span",{className:"mono",children:"object"})," to pass extra configuration to the embedded resource. In modern HTML,",e.jsx("span",{className:"mono",children:"param"})," is rarely needed, but you should recognize it when you see it."]}),e.jsxs("div",{className:"codeBlock",children:[e.jsxs("div",{className:"codeTop",children:[e.jsx("span",{className:"codeIcon",children:e.jsx(Ae,{})}),e.jsx("div",{className:"codeTitle",children:"object with fallback"})]}),e.jsx("pre",{className:"pre",children:`<object
  data="/docs/guide.pdf"
  type="application/pdf"
  width="100%"
  height="500"
>
  <p>
    Your browser cannot display this PDF.
    <a href="/docs/guide.pdf">Download the file</a>.
  </p>
</object>`})]}),e.jsxs("div",{className:"codeBlock",children:[e.jsxs("div",{className:"codeTop",children:[e.jsx("span",{className:"codeIcon",children:e.jsx(Ae,{})}),e.jsx("div",{className:"codeTitle",children:"param example"})]}),e.jsx("pre",{className:"pre",children:`<object data="movie.swf" type="application/x-shockwave-flash" width="400" height="300">
  <param name="quality" value="high" />
  <p>Fallback content goes here</p>
</object>`}),e.jsxs("p",{className:"pNote",children:["The example above is mostly historical. Today you will rarely embed Flash, but you might still see"," ",e.jsx("span",{className:"mono",children:"object"})," and"," ",e.jsx("span",{className:"mono",children:"param"})," in old projects."]})]})]}),e.jsxs("div",{className:"section",children:[e.jsxs("h3",{className:"h3",children:[e.jsx("span",{className:"h3Icon",children:e.jsx(We,{})}),"Quick beginner rules"]}),e.jsxs("ul",{className:"bullets",children:[e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),"Prefer ",e.jsx("span",{className:"mono",children:"iframe"})," for embedding webpages or widget-like content"]}),e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),"Use ",e.jsx("span",{className:"mono",children:"sandbox"})," for safety when embedding third party pages"]}),e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),"Keep ",e.jsx("span",{className:"mono",children:"allow"})," minimal"]}),e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),"Add a meaningful ",e.jsx("span",{className:"mono",children:"title"})," ","to iframes"]}),e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),"Use ",e.jsx("span",{className:"mono",children:"object"})," when you want fallback content support"]})]}),e.jsxs("div",{className:"noteBox",children:[e.jsx("span",{className:"noteIcon",children:e.jsx(hs,{})}),e.jsxs("div",{className:"noteText",children:[e.jsx("div",{className:"noteTitle",children:"Real world example"}),e.jsxs("div",{className:"noteSub",children:["Embedding a Google Map or a YouTube video usually uses"," ",e.jsx("span",{className:"mono",children:"iframe"})," with a few controlled permissions."]})]})]})]})]})]})},rg={Wrapper:J.section`
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
    `},tg=()=>{const[a,c]=_.useState(!1),l=()=>c(p=>!p);return e.jsxs(rg.Wrapper,{className:`topicCard ${a?"open":""}`,children:[e.jsxs("button",{type:"button",className:"topicHeader",onClick:l,"aria-expanded":a,children:[e.jsx("span",{className:"chev",children:a?e.jsx(ce,{}):e.jsx(de,{})}),e.jsx("span",{className:"icon",children:e.jsx(ys,{})}),e.jsx("span",{className:"title",children:"SVG integration"}),e.jsx("span",{className:"meta",children:a?"Collapse":"Expand"})]}),e.jsxs("div",{className:`topicBody ${a?"open":""}`,children:[e.jsxs("div",{className:"section",children:[e.jsx("h3",{className:"h3",children:"Inline SVG"}),e.jsx("p",{className:"p",children:"Inline SVG means you write the SVG markup directly in your JSX. The big advantage is that the SVG becomes part of the DOM. That means you can style it with CSS, change colors on hover, animate parts, and even control it with JavaScript."}),e.jsxs("div",{className:"note",children:[e.jsxs("div",{className:"noteTop",children:[e.jsx("span",{className:"noteIcon",children:e.jsx(Ae,{})}),e.jsx("div",{className:"noteTitle",children:"Beginner tip"})]}),e.jsx("div",{className:"noteBody",children:"Inline SVG is perfect for icons, logos, small illustrations, and anything you want to recolor or animate with CSS."})]}),e.jsxs("div",{className:"example",children:[e.jsxs("div",{className:"exampleHead",children:[e.jsx("span",{className:"exampleIcon",children:e.jsx(Ae,{})}),e.jsx("div",{className:"exampleTitle",children:"Inline SVG example"})]}),e.jsxs("div",{className:"inlineDemo",children:[e.jsx("div",{className:"svgBox",children:e.jsxs("svg",{width:"120",height:"120",viewBox:"0 0 120 120",role:"img","aria-label":"Simple badge icon",children:[e.jsx("circle",{cx:"60",cy:"60",r:"46",fill:"none",stroke:"currentColor",strokeWidth:"10"}),e.jsx("path",{d:"M40 62 L54 76 L82 48",fill:"none",stroke:"currentColor",strokeWidth:"10",strokeLinecap:"round",strokeLinejoin:"round"})]})}),e.jsxs("div",{className:"inlineText",children:[e.jsx("div",{className:"inlineTitle",children:"This SVG uses currentColor"}),e.jsx("div",{className:"inlineSub",children:"The SVG automatically picks the text color of its parent. So you can theme icons with simple CSS."})]})]})]})]}),e.jsxs("div",{className:"section",children:[e.jsx("h3",{className:"h3",children:"SVG vs img"}),e.jsx("p",{className:"p",children:"You can use SVG in two common ways: as inline markup or as an image file with an img tag. Both are valid. The best choice depends on whether you need control over the SVG parts."}),e.jsxs("div",{className:"compareGrid",children:[e.jsxs("div",{className:"compareCard",children:[e.jsxs("div",{className:"compareTop",children:[e.jsx("span",{className:"compareIcon",children:e.jsx(ae,{})}),e.jsx("div",{className:"compareTitle",children:"Inline SVG"})]}),e.jsxs("ul",{className:"bullets",children:[e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),"You can style paths with CSS"]}),e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),"Easy hover states and animations"]}),e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),"Great for icons and UI graphics"]}),e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),"Supports accessibility labels directly"]})]})]}),e.jsxs("div",{className:"compareCard",children:[e.jsxs("div",{className:"compareTop",children:[e.jsx("span",{className:"compareIcon",children:e.jsx(ys,{})}),e.jsx("div",{className:"compareTitle",children:"img src SVG"})]}),e.jsxs("ul",{className:"bullets",children:[e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),"Simple to use and cacheable"]}),e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),"Best for large illustrations"]}),e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),"Limited styling of inside parts"]}),e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),"Accessible with alt text like images"]})]})]})]}),e.jsxs("div",{className:"note",children:[e.jsxs("div",{className:"noteTop",children:[e.jsx("span",{className:"noteIcon",children:e.jsx(Ga,{})}),e.jsx("div",{className:"noteTitle",children:"Rule of thumb"})]}),e.jsx("div",{className:"noteBody",children:"Use inline SVG when you need to change colors, animate, or control parts. Use img when the SVG is basically a static picture."})]})]}),e.jsxs("div",{className:"section",children:[e.jsx("h3",{className:"h3",children:"Accessibility in SVG"}),e.jsx("p",{className:"p",children:"SVG can be accessible if you treat it like meaningful content. If the SVG is decorative, hide it from screen readers. If it communicates information, give it a proper text alternative."}),e.jsxs("div",{className:"a11yGrid",children:[e.jsxs("div",{className:"a11yCard",children:[e.jsx("div",{className:"a11yTitle",children:"Decorative SVG"}),e.jsx("div",{className:"a11ySub",children:"If the SVG is just for decoration, hide it."}),e.jsx("div",{className:"codeLine",children:e.jsx("span",{className:"mono",children:'aria-hidden="true"'})})]}),e.jsxs("div",{className:"a11yCard",children:[e.jsx("div",{className:"a11yTitle",children:"Meaningful SVG"}),e.jsx("div",{className:"a11ySub",children:"If it conveys meaning, label it."}),e.jsx("div",{className:"codeLine",children:e.jsx("span",{className:"mono",children:'role="img" + aria-label="..."'})})]})]}),e.jsxs("ul",{className:"bullets",children:[e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),"Use aria-hidden for purely decorative icons"]}),e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),'Use role="img" and aria-label for meaningful SVG']}),e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),"Avoid putting important text only inside SVG unless you provide an accessible label"]})]})]})]})]})},sg={Wrapper:J.section`
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
    `},og=()=>{const[a,c]=_.useState(!1),[l,p]=_.useState(!0),h=_.useMemo(()=>`<!-- HTML -->
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
<\/script>`,[]);return e.jsxs(sg.Wrapper,{className:`topicCard ${a?"open":""}`,children:[e.jsxs("button",{type:"button",className:"topicHeader",onClick:()=>c(f=>!f),"aria-expanded":a,children:[e.jsx("span",{className:"chev",children:a?e.jsx(ce,{}):e.jsx(de,{})}),e.jsx("span",{className:"icon",children:e.jsx(vs,{})}),e.jsx("span",{className:"title",children:"Canvas"}),e.jsx("span",{className:"meta",children:a?"Collapse":"Expand"})]}),e.jsxs("div",{className:`topicBody ${a?"open":""}`,children:[e.jsxs("div",{className:"section",children:[e.jsx("h3",{className:"h3",children:"What is a canvas"}),e.jsxs("p",{className:"p",children:["The ",e.jsx("span",{className:"mono",children:"canvas"})," element is a drawing surface. It does not contain real HTML elements inside it. Instead, you draw pixels using JavaScript. This is useful for charts, games, animations, custom visual effects, and small interactive demos."]})]}),e.jsxs("div",{className:"section",children:[e.jsx("h3",{className:"h3",children:"How it works"}),e.jsxs("ul",{className:"bullets",children:[e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),"Create a canvas with a fixed width and height"]}),e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),"Get a drawing context:",e.jsx("span",{className:"mono",children:'getContext("2d")'})]}),e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),"Use the context to draw shapes, text, and images"]}),e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),"For animations, clear the canvas and redraw inside a loop (usually"," ",e.jsx("span",{className:"mono",children:"requestAnimationFrame"}),")"]})]})]}),e.jsx(ag,{isRunning:l}),e.jsxs("div",{className:"section",children:[e.jsx("h3",{className:"h3",children:"Mini controls"}),e.jsxs("div",{className:"btnRow",children:[e.jsxs("button",{type:"button",className:"btn",onClick:()=>p(!0),disabled:l,children:[e.jsx("span",{className:"btnIcon",children:e.jsx(lf,{})}),"Play"]}),e.jsxs("button",{type:"button",className:"btn",onClick:()=>p(!1),disabled:!l,children:[e.jsx("span",{className:"btnIcon",children:e.jsx(af,{})}),"Pause"]}),e.jsxs("button",{type:"button",className:"btn",onClick:()=>{p(!1),setTimeout(()=>p(!0),80)},children:[e.jsx("span",{className:"btnIcon",children:e.jsx(df,{})}),"Restart"]})]}),e.jsxs("div",{className:"note",children:[e.jsx("span",{className:"noteIcon",children:e.jsx(We,{})}),e.jsxs("p",{className:"noteText",children:["Canvas is pixel based. If you resize the canvas using CSS only, drawings can look blurry. Prefer setting",e.jsx("span",{className:"mono",children:"width"})," and",e.jsx("span",{className:"mono",children:"height"})," attributes on the element, and handle high DPI scaling if needed."]})]})]}),e.jsxs("div",{className:"section",children:[e.jsx("h3",{className:"h3",children:"Basic example code"}),e.jsx("pre",{className:"code",children:e.jsx("code",{children:h})})]})]})]})},ag=({isRunning:a})=>{const c=Ke.useRef(null),l=Ke.useRef(0),p=Ke.useRef(0);return Ke.useEffect(()=>{const h=c.current;if(!h)return;const f=h.getContext("2d");if(!f)return;const b=h.width,C=h.height,k=()=>{f.fillStyle="#0d0d0d",f.fillRect(0,0,b,C),f.fillStyle="#ffffff",f.font="14px Verdana",f.fillText("Canvas demo: moving dot",14,24),f.globalAlpha=.35,f.beginPath(),f.moveTo(14,C/2),f.lineTo(b-14,C/2),f.strokeStyle="#ffffff",f.lineWidth=1,f.stroke(),f.globalAlpha=1;const R=p.current,Q=14+(Math.sin(R)+1)/2*(b-28),X=C/2+Math.cos(R*1.2)*36;f.beginPath(),f.arc(Q,X,8,0,Math.PI*2),f.fillStyle="#ffffff",f.fill(),f.fillStyle="#d0d0d0",f.font="12px Verdana",f.fillText("requestAnimationFrame loop",14,C-14)},A=()=>{p.current+=.04,k(),l.current=window.requestAnimationFrame(A)},W=()=>{l.current&&window.cancelAnimationFrame(l.current),l.current=0};return a?(W(),A()):(W(),k()),()=>W()},[a]),e.jsxs("div",{className:"section",children:[e.jsx("h3",{className:"h3",children:"Canvas element basics"}),e.jsxs("p",{className:"p",children:["Below is a small demo. We draw a background, some text, and a moving dot. The motion uses"," ",e.jsx("span",{className:"mono",children:"requestAnimationFrame"}),"."]}),e.jsx("div",{className:"demoBox",children:e.jsx("canvas",{ref:c,width:520,height:220,className:"canvas"})})]})},ng={Wrapper:J.section`
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
    `},ig=()=>{const[a,c]=_.useState(!1);return e.jsxs(ng.Wrapper,{className:`topicCard ${a?"open":""}`,children:[e.jsxs("button",{type:"button",className:"topicHeader",onClick:()=>c(l=>!l),"aria-expanded":a,children:[e.jsx("span",{className:"chev",children:a?e.jsx(ce,{}):e.jsx(de,{})}),e.jsx("span",{className:"icon",children:e.jsx(gu,{})}),e.jsx("span",{className:"title",children:"Sectioning Elements"}),e.jsx("span",{className:"meta",children:a?"Collapse":"Expand"})]}),e.jsxs("div",{className:`topicBody ${a?"open":""}`,children:[e.jsxs("div",{className:"section",children:[e.jsx("h3",{className:"h3",children:"What are Sectioning Elements"}),e.jsx("p",{className:"p",children:"Sectioning elements are semantic HTML tags that define the structure of a webpage. They help organize content into meaningful blocks so browsers, search engines, and screen readers can understand the layout of the page."})]}),e.jsxs("div",{className:"section",children:[e.jsx("h3",{className:"h3",children:"header"}),e.jsx("p",{className:"p",children:"The header element represents introductory content. It usually contains a logo, navigation links, or page title. It can appear at the top of the page or inside an article or section."}),e.jsx("pre",{className:"code",children:`<header>
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
</aside>`})]}),e.jsxs("div",{className:"section",children:[e.jsx("h3",{className:"h3",children:"Why Semantics Matter"}),e.jsx("p",{className:"p",children:"Using semantic sectioning elements improves accessibility, SEO, and code readability. It helps screen readers understand page layout and helps search engines identify important content."})]})]})]})},lg={Wrapper:J.section`
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
    `},cg=()=>{const[a,c]=_.useState(!1),l=_.useMemo(()=>[{tag:"header",role:"banner",use:"Top area of a page or a section (logo, title, top nav).",note:"Only the top-level page header maps to banner. A header inside an article is not a banner landmark."},{tag:"nav",role:"navigation",use:"Primary navigation links or menus.",note:"Use one nav per major navigation region. If there are multiple, label them."},{tag:"main",role:"main",use:"The main unique content of the page.",note:"Only one main per page. Avoid nesting main inside other landmarks."},{tag:"aside",role:"complementary",use:"Related side content (sidebar, related links, ads, callouts).",note:"Keep it relevant to the surrounding content."},{tag:"footer",role:"contentinfo",use:"Bottom area of a page (copyright, contact, policies).",note:"Only the page-level footer maps to contentinfo. Footer inside article is not contentinfo."},{tag:"section",role:"region (only when labeled)",use:"A thematic grouping of content with a heading.",note:"Section is not automatically a landmark unless it has an accessible name (aria-label/aria-labelledby)."},{tag:"article",role:"article",use:"Self-contained content that can stand alone (blog post, card, comment).",note:"Articles can be nested (like comments inside a post)."}],[]),p=_.useMemo(()=>[{role:"banner",when:"Top-level site header of the page.",example:"A header that contains site logo and primary navigation."},{role:"navigation",when:"A set of navigation links to major pages or sections.",example:"Main menu, sidebar menu, footer menu."},{role:"main",when:"The main content unique to the page.",example:"Content area excluding header/footer/sidebars."},{role:"complementary",when:"Supporting content related to main content.",example:"Related posts sidebar, glossary, tips panel."},{role:"contentinfo",when:"Footer information for the site or page.",example:"Copyright, contact links, policies."},{role:"region",when:"A generic landmark area that needs a label.",example:"A section with aria-label like 'Pricing' or 'FAQ'."},{role:"search",when:"A search area (often a form).",example:"Search bar container region."}],[]),h=()=>c(f=>!f);return e.jsxs(lg.Wrapper,{className:`topicCard ${a?"open":""}`,children:[e.jsxs("button",{type:"button",className:"topicHeader",onClick:h,"aria-expanded":a,children:[e.jsx("span",{className:"chev",children:a?e.jsx(ce,{}):e.jsx(de,{})}),e.jsx("span",{className:"icon",children:e.jsx(ef,{})}),e.jsx("span",{className:"title",children:"Document Landmarks"}),e.jsx("span",{className:"meta",children:a?"Collapse":"Expand"})]}),e.jsxs("div",{className:`topicBody ${a?"open":""}`,children:[e.jsxs("div",{className:"section",children:[e.jsx("h3",{className:"h3",children:"What are landmarks"}),e.jsx("p",{className:"p",children:"Landmarks are important regions of a page that help users navigate quickly, especially screen reader users. A screen reader can jump directly to landmarks like navigation, main content, or footer. Good landmarks make a page feel organized and predictable."})]}),e.jsxs("div",{className:"section",children:[e.jsx("h3",{className:"h3",children:"Semantic mapping"}),e.jsx("p",{className:"p",children:"Many semantic HTML tags automatically map to ARIA landmark roles. This means you often do not need to add ARIA roles manually. Use semantic tags first, then use ARIA only when you need extra meaning or labeling."}),e.jsxs("div",{className:"callout",children:[e.jsx("div",{className:"calloutIcon",children:e.jsx(We,{})}),e.jsxs("div",{className:"calloutText",children:[e.jsx("div",{className:"calloutTitle",children:"Rule of thumb"}),e.jsx("div",{className:"calloutSub",children:"Prefer semantic HTML. Add ARIA only when you cannot express the meaning using HTML alone."})]})]})]}),e.jsxs("div",{className:"section",children:[e.jsx("h3",{className:"h3",children:"Common semantic tags and their landmark roles"}),e.jsxs("div",{className:"table",children:[e.jsxs("div",{className:"tHead",children:[e.jsxs("div",{className:"cell tag",children:[e.jsx(il,{})," Tag"]}),e.jsxs("div",{className:"cell role",children:[e.jsx(fo,{})," ARIA role"]}),e.jsxs("div",{className:"cell use",children:[e.jsx(Ga,{})," When to use"]})]}),e.jsx("div",{className:"tBody",children:l.map(f=>e.jsxs("div",{className:"tRow",children:[e.jsx("div",{className:"cell tag",children:e.jsx("span",{className:"pill mono",children:f.tag})}),e.jsx("div",{className:"cell role",children:e.jsx("span",{className:"pill",children:f.role})}),e.jsxs("div",{className:"cell use",children:[e.jsx("div",{className:"useText",children:f.use}),e.jsxs("div",{className:"note",children:[e.jsx(sr,{})," ",f.note]})]})]},`${f.tag}-${f.role}`))})]})]}),e.jsxs("div",{className:"section",children:[e.jsx("h3",{className:"h3",children:"ARIA roles"}),e.jsx("p",{className:"p",children:"ARIA roles describe what an element is. Landmarks are a special set of roles that describe page regions. If you use semantic tags, roles are often implied automatically. Add an explicit role only when needed."}),e.jsx("div",{className:"roleGrid",children:p.map(f=>e.jsxs("div",{className:"roleCard",children:[e.jsxs("div",{className:"roleTop",children:[e.jsx("span",{className:"roleIcon",children:e.jsx(ae,{})}),e.jsx("span",{className:"roleName",children:f.role})]}),e.jsx("div",{className:"roleWhen",children:f.when}),e.jsxs("div",{className:"roleExample",children:["Example: ",f.example]})]},f.role))})]}),e.jsxs("div",{className:"section",children:[e.jsx("h3",{className:"h3",children:"Beginner checklist"}),e.jsxs("ul",{className:"bullets",children:[e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),"Use ",e.jsx("span",{className:"mono",children:"header"}),","," ",e.jsx("span",{className:"mono",children:"nav"}),","," ",e.jsx("span",{className:"mono",children:"main"}),","," ",e.jsx("span",{className:"mono",children:"footer"})," first."]}),e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),"Keep exactly one ",e.jsx("span",{className:"mono",children:"main"})," ","on a page."]}),e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),"If you have multiple navs, label them with"," ",e.jsx("span",{className:"mono",children:"aria-label"})," or"," ",e.jsx("span",{className:"mono",children:"aria-labelledby"}),"."]}),e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),"Do not add ARIA roles when HTML already provides the meaning."]}),e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),"For a ",e.jsx("span",{className:"mono",children:"section"})," to be a real landmark, it must have an accessible name."]})]})]}),e.jsxs("div",{className:"section",children:[e.jsx("h3",{className:"h3",children:"Tiny example (mental model)"}),e.jsxs("div",{className:"codeBlock",children:[e.jsxs("div",{className:"codeLine",children:[e.jsx("span",{className:"mono",children:"<header>"})," site header ",e.jsx("span",{className:"muted",children:"(banner)"})]}),e.jsxs("div",{className:"codeLine",children:[e.jsx("span",{className:"mono",children:"<nav>"})," main menu"," ",e.jsx("span",{className:"muted",children:"(navigation)"})]}),e.jsxs("div",{className:"codeLine",children:[e.jsx("span",{className:"mono",children:"<main>"})," page content ",e.jsx("span",{className:"muted",children:"(main)"})]}),e.jsxs("div",{className:"codeLine",children:[e.jsx("span",{className:"mono",children:"<aside>"})," sidebar"," ",e.jsx("span",{className:"muted",children:"(complementary)"})]}),e.jsxs("div",{className:"codeLine",children:[e.jsx("span",{className:"mono",children:"<footer>"})," footer"," ",e.jsx("span",{className:"muted",children:"(contentinfo)"})]})]})]})]})]})},dg={Wrapper:J.section`
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
    `},pg=()=>{const[a,c]=_.useState(!1),l=_.useMemo(()=>[{title:"Basic FAQ (native toggle)",desc:"The <details> element creates a built-in disclosure widget. The <summary> element is the visible title that users click to expand or collapse.",code:`<details>
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
</details>`}],[]),p=()=>c(h=>!h);return e.jsxs(dg.Wrapper,{className:`topicCard ${a?"open":""}`,children:[e.jsxs("button",{type:"button",className:"topicHeader",onClick:p,"aria-expanded":a,children:[e.jsx("span",{className:"chev",children:a?e.jsx(ce,{}):e.jsx(de,{})}),e.jsx("span",{className:"icon",children:e.jsx(We,{})}),e.jsx("span",{className:"title",children:"Details and Disclosure"}),e.jsx("span",{className:"meta",children:a?"Collapse":"Expand"})]}),e.jsxs("div",{className:`topicBody ${a?"open":""}`,children:[e.jsxs("div",{className:"section",children:[e.jsx("h3",{className:"h3",children:"What are details and summary"}),e.jsxs("p",{className:"p",children:["The ",e.jsx("span",{className:"mono",children:"details"})," element provides a built-in expandable container. The"," ",e.jsx("span",{className:"mono",children:"summary"})," element acts as the clickable heading. When the user clicks the summary, the browser expands or collapses the content inside details."]}),e.jsxs("ul",{className:"bullets",children:[e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),"Use ",e.jsx("span",{className:"mono",children:"summary"})," as the visible title"]}),e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),"Content inside ",e.jsx("span",{className:"mono",children:"details"})," ","is hidden until expanded"]}),e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),"The browser handles the toggle behavior for you"]})]})]}),e.jsxs("div",{className:"section",children:[e.jsx("h3",{className:"h3",children:"Why this is useful"}),e.jsxs("div",{className:"callouts",children:[e.jsxs("div",{className:"callout",children:[e.jsx("span",{className:"calloutIcon",children:e.jsx(ae,{})}),e.jsxs("div",{className:"calloutText",children:[e.jsx("div",{className:"calloutTitle",children:"Simple"}),e.jsx("div",{className:"calloutSub",children:"No JavaScript needed for expand collapse"})]})]}),e.jsxs("div",{className:"callout",children:[e.jsx("span",{className:"calloutIcon",children:e.jsx(sr,{})}),e.jsxs("div",{className:"calloutText",children:[e.jsx("div",{className:"calloutTitle",children:"Be careful"}),e.jsx("div",{className:"calloutSub",children:"Do not put buttons or links inside summary unless you know what you are doing"})]})]})]}),e.jsx("p",{className:"p",children:"This is perfect for FAQs, extra explanations, or hidden notes. It keeps the page clean and lets the user choose what to expand."})]}),e.jsxs("div",{className:"section",children:[e.jsx("h3",{className:"h3",children:"Key rules"}),e.jsxs("ul",{className:"bullets",children:[e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),e.jsx("span",{className:"mono",children:"summary"})," should be the first child of ",e.jsx("span",{className:"mono",children:"details"})]}),e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),"Use ",e.jsx("span",{className:"mono",children:"open"})," attribute to keep it expanded initially"]}),e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),"Keep summary text short and clear"]})]})]}),e.jsxs("div",{className:"section",children:[e.jsx("h3",{className:"h3",children:"Examples"}),e.jsx("div",{className:"examples",children:l.map((h,f)=>e.jsxs("div",{className:"example",children:[e.jsxs("div",{className:"exTop",children:[e.jsx("div",{className:"exTitle",children:h.title}),e.jsx("div",{className:"exDesc",children:h.desc})]}),e.jsxs("div",{className:"codeWrap","aria-label":"Example code",children:[e.jsxs("div",{className:"codeHead",children:[e.jsx("span",{className:"codeIcon",children:e.jsx(Ae,{})}),e.jsx("span",{className:"codeLabel",children:"HTML"})]}),e.jsx("pre",{className:"code",children:e.jsx("code",{children:h.code})})]})]},f))})]}),e.jsxs("div",{className:"section",children:[e.jsx("h3",{className:"h3",children:"Quick tip"}),e.jsx("p",{className:"p",children:"If you need a true accordion where only one item can be open at a time, that usually requires JavaScript. But for most cases, multiple open items are totally fine and simpler."})]})]})]})},ug={Wrapper:J.section`
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
    `},hg=()=>{const[a,c]=_.useState(!1),l=_.useRef(null),p=()=>{c(b=>!b)},h=()=>{l.current&&l.current.showModal()},f=()=>{l.current&&l.current.close()};return e.jsxs(ug.Wrapper,{className:a?"open":"",children:[e.jsxs("button",{type:"button",className:"topicHeader",onClick:p,"aria-expanded":a,children:[e.jsx("span",{className:"chev",children:a?e.jsx(ce,{}):e.jsx(de,{})}),e.jsx("span",{className:"icon",children:e.jsx(bu,{})}),e.jsx("span",{className:"title",children:"Dialog"}),e.jsx("span",{className:"meta",children:a?"Collapse":"Expand"})]}),e.jsxs("div",{className:`topicBody ${a?"open":""}`,children:[e.jsxs("div",{className:"section",children:[e.jsx("h3",{className:"h3",children:"What is the dialog element"}),e.jsx("p",{className:"p",children:"The dialog element is a built-in HTML element used to create modal or non-modal dialog boxes. It allows you to display popups without using external libraries. It is part of modern HTML and provides native browser behavior."})]}),e.jsxs("div",{className:"section",children:[e.jsx("h3",{className:"h3",children:"Modal behavior"}),e.jsx("p",{className:"p",children:"When a dialog is opened using showModal(), it becomes modal. This means the rest of the page becomes inactive until the dialog is closed. The browser also adds a backdrop automatically."}),e.jsxs("ul",{className:"bullets",children:[e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),"show() opens non modal dialog"]}),e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),"showModal() opens modal dialog"]}),e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),"close() closes the dialog"]})]})]}),e.jsxs("div",{className:"section",children:[e.jsx("h3",{className:"h3",children:"Example"}),e.jsxs("div",{className:"exampleBox",children:[e.jsx("button",{type:"button",className:"openBtn",onClick:h,children:"Open Dialog"}),e.jsxs("dialog",{ref:l,className:"dialogBox",children:[e.jsx("h4",{className:"dialogTitle",children:"Native HTML Dialog"}),e.jsx("p",{className:"dialogText",children:"This is a native modal created using the dialog element. No external library is used."}),e.jsx("button",{type:"button",className:"closeBtn",onClick:f,children:"Close"})]})]})]}),e.jsxs("div",{className:"section",children:[e.jsx("h3",{className:"h3",children:"Important Notes"}),e.jsx("p",{className:"p",children:"The dialog element is supported in modern browsers. For older browsers, a polyfill may be required. You can style the backdrop using the ::backdrop pseudo element in CSS."})]})]})]})},xg={Wrapper:J.section`
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
    `},mg=()=>{const[a,c]=_.useState(!1);return e.jsxs(xg.Wrapper,{children:[e.jsxs("button",{type:"button",className:"topicHeader",onClick:()=>c(!a),"aria-expanded":a,children:[e.jsx("span",{className:"chev",children:a?e.jsx(ce,{}):e.jsx(de,{})}),e.jsx("span",{className:"icon",children:e.jsx(gf,{})}),e.jsx("span",{className:"title",children:"Table Structure"}),e.jsx("span",{className:"meta",children:a?"Collapse":"Expand"})]}),e.jsxs("div",{className:`topicBody ${a?"open":""}`,children:[e.jsxs("div",{className:"section",children:[e.jsx("h3",{children:"table"}),e.jsx("p",{children:"The table element is the container for all tabular data. It defines the start and end of a table."})]}),e.jsxs("div",{className:"section",children:[e.jsx("h3",{children:"thead, tbody, tfoot"}),e.jsx("p",{children:"thead contains header rows. tbody contains the main data rows. tfoot contains summary rows like totals. These help structure large tables clearly."})]}),e.jsxs("div",{className:"section",children:[e.jsx("h3",{children:"tr, th, td"}),e.jsx("p",{children:"tr defines a table row. th defines a header cell. td defines a data cell. Header cells usually describe columns or rows."})]}),e.jsxs("div",{className:"section",children:[e.jsx("h3",{children:"scope attribute"}),e.jsx("p",{children:'The scope attribute improves accessibility by defining whether a header applies to a column or a row. Example: scope="col" or scope="row".'})]}),e.jsxs("div",{className:"section",children:[e.jsx("h3",{children:"caption"}),e.jsx("p",{children:"caption gives a title to the table. It appears above the table and helps screen readers understand what the table represents."})]}),e.jsxs("div",{className:"section",children:[e.jsx("h3",{children:"colgroup and col"}),e.jsx("p",{children:"colgroup and col allow you to style entire columns instead of individual cells."})]}),e.jsxs("div",{className:"section",children:[e.jsx("h3",{children:"rowspan and colspan"}),e.jsx("p",{children:"rowspan merges cells vertically. colspan merges cells horizontally. These are useful for complex table layouts."})]}),e.jsxs("div",{className:"section",children:[e.jsx("h3",{children:"Accessible Tables"}),e.jsx("p",{children:"Always use th for headers, use scope properly, add a caption, and avoid using tables for layout. Tables should represent real tabular data only."})]}),e.jsxs("div",{className:"example",children:[e.jsx("h4",{children:"Example Table"}),e.jsxs("table",{children:[e.jsx("caption",{children:"Student Scores"}),e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{scope:"col",children:"Name"}),e.jsx("th",{scope:"col",children:"Math"}),e.jsx("th",{scope:"col",children:"Science"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("th",{scope:"row",children:"Amit"}),e.jsx("td",{children:"85"}),e.jsx("td",{children:"90"})]}),e.jsxs("tr",{children:[e.jsx("th",{scope:"row",children:"Riya"}),e.jsx("td",{children:"88"}),e.jsx("td",{children:"92"})]})]}),e.jsx("tfoot",{children:e.jsx("tr",{children:e.jsx("td",{colSpan:"3",children:"End of Results"})})})]})]})]})]})},fg={Wrapper:J.section`
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
    `},gg=()=>{const[a,c]=_.useState(!1),l=()=>c(p=>!p);return e.jsxs(fg.Wrapper,{className:`topicCard ${a?"open":""}`,children:[e.jsxs("button",{type:"button",className:"topicHeader",onClick:l,"aria-expanded":a,children:[e.jsx("span",{className:"chev",children:a?e.jsx(ce,{}):e.jsx(de,{})}),e.jsx("span",{className:"icon",children:e.jsx(vs,{})}),e.jsx("span",{className:"title",children:"Form Basics"}),e.jsx("span",{className:"meta",children:"form · action · method · GET vs POST · enctype"})]}),e.jsxs("div",{className:`topicBody ${a?"open":""}`,children:[e.jsxs("div",{className:"section",children:[e.jsx("h3",{children:"1. form element"}),e.jsxs("p",{children:["The ",e.jsx("strong",{children:"form"})," element is used to collect user input and send it to a server. Everything related to user input must be placed inside a form."]}),e.jsx("div",{className:"codeBlock",children:`<form>
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
</form>`}),e.jsx("p",{className:"note",children:"When submitted, the browser collects input values and sends them to the server using the defined method."})]})]})]})},vg={Wrapper:J.section`
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
    `},yg=()=>{const[a,c]=_.useState(!1),l=_.useMemo(()=>[{name:"text",icon:e.jsx(vs,{}),use:"Single-line plain text input for names, titles, etc.",example:'<input type="text" name="fullName" placeholder="Full name" />',notes:["Default input type if you write <input> without type.","Use minlength and maxlength for length rules."]},{name:"password",icon:e.jsx(Xm,{}),use:"Hides typed characters for passwords and secrets.",example:'<input type="password" name="password" placeholder="Password" />',notes:["Use autocomplete when appropriate like current-password or new-password.","Still treat as sensitive, never log it in console."]},{name:"email",icon:e.jsx(ju,{}),use:"Email address input with built-in validation.",example:'<input type="email" name="email" placeholder="name@example.com" />',notes:["Browser checks basic email format.","Use multiple attribute if you want multiple emails."]},{name:"url",icon:e.jsx(yu,{}),use:"Website link input with URL validation.",example:'<input type="url" name="website" placeholder="https://example.com" />',notes:["Browser validates URL format.","Keep placeholder realistic for users."]},{name:"number",icon:e.jsx(vo,{}),use:"Numeric input with stepper controls.",example:'<input type="number" name="age" min="0" max="120" step="1" />',notes:["Use min, max, step to control allowed values.","For phone numbers use tel, not number."]},{name:"range",icon:e.jsx(xf,{}),use:"Slider input for selecting a value in a range.",example:'<input type="range" name="volume" min="0" max="100" step="1" />',notes:["Pair with an output element to show current value.","Good for settings like brightness, volume."]},{name:"search",icon:e.jsx(wu,{}),use:"Search field, may show clear button in some browsers.",example:'<input type="search" name="q" placeholder="Search..." />',notes:["Semantically indicates search intent.","Works like text but with search UX in some browsers."]},{name:"tel",icon:e.jsx(nf,{}),use:"Telephone input, opens numeric keypad on mobile.",example:'<input type="tel" name="phone" placeholder="+91 98765 43210" />',notes:["No built-in validation by default, use pattern if needed.","Best for phone numbers, not number type."]},{name:"date",icon:e.jsx(Xi,{}),use:"Date picker for selecting a calendar date.",example:'<input type="date" name="dob" />',notes:["Use min and max to limit dates.","UI differs across browsers."]},{name:"time",icon:e.jsx(Ap,{}),use:"Time picker for selecting time of day.",example:'<input type="time" name="meetingTime" />',notes:["Use step to control seconds if needed.","Great for schedules and reminders."]},{name:"datetime-local",icon:e.jsx(Ap,{}),use:"Date and time without timezone conversion.",example:'<input type="datetime-local" name="appointment" />',notes:["Stores local date time string, not timezone aware.","Use when user picks a local moment like a meeting time."]},{name:"month",icon:e.jsx(Xi,{}),use:"Month picker, useful for billing cycles.",example:'<input type="month" name="billingMonth" />',notes:["Lets users choose year and month.","Good for reports and subscriptions."]},{name:"week",icon:e.jsx(Xi,{}),use:"Week picker, useful for weekly planning.",example:'<input type="week" name="workWeek" />',notes:["Returns ISO week format.","UI support depends on browser."]},{name:"color",icon:e.jsx(qm,{}),use:"Color picker, returns hex color value.",example:'<input type="color" name="themeColor" value="#000000" />',notes:["Great for theme settings.","Default value should be a valid hex."]},{name:"file",icon:e.jsx(yf,{}),use:"File upload input for selecting files from device.",example:'<input type="file" name="resume" accept=".pdf,.doc,.docx" />',notes:["Use accept to hint file types.","Use multiple if you want multiple files."]},{name:"checkbox",icon:e.jsx(fu,{}),use:"Toggle true or false, can be multiple selections.",example:'<input type="checkbox" name="agree" />',notes:["Use with label for clickable text.","For groups, use same name with different values."]},{name:"radio",icon:e.jsx(Qm,{}),use:"Single choice within a group.",example:'<input type="radio" name="plan" value="pro" />',notes:["Radio works in groups using the same name.","Use checked for default selection if needed."]},{name:"hidden",icon:e.jsx(Ym,{}),use:"Hidden field for sending extra values with the form.",example:'<input type="hidden" name="source" value="landing-page" />',notes:["Not visible to user.","Do not trust hidden values for security decisions."]},{name:"submit",icon:e.jsx(pf,{}),use:"Submits the form.",example:'<input type="submit" value="Submit" />',notes:["Triggers form submit event.","button type=submit is often more flexible for styling."]},{name:"reset",icon:e.jsx(cf,{}),use:"Resets form values back to initial defaults.",example:'<input type="reset" value="Reset" />',notes:["Can surprise users, use carefully.","Often better to provide a custom clear button."]},{name:"button",icon:e.jsx(mf,{}),use:"Neutral button, does not submit unless you code it.",example:'<input type="button" value="Click me" />',notes:["Does nothing by default, you attach behavior with JS.","Prefer <button type='button'> for richer content."]}],[]);return e.jsxs(vg.Wrapper,{className:a?"open":"",children:[e.jsxs("button",{type:"button",className:"topicHeader",onClick:()=>c(p=>!p),"aria-expanded":a,children:[e.jsx("span",{className:"chev",children:a?e.jsx(ce,{}):e.jsx(de,{})}),e.jsx("span",{className:"icon",children:e.jsx(vs,{})}),e.jsx("span",{className:"title",children:"Input Types"}),e.jsx("span",{className:"meta",children:a?"Collapse":"Expand"})]}),e.jsxs("div",{className:`topicBody ${a?"open":""}`,children:[e.jsxs("div",{className:"intro",children:[e.jsx("p",{className:"p",children:"HTML inputs have different types to collect different kinds of data. Choosing the correct input type improves validation, mobile keyboard behavior, and accessibility."}),e.jsx("p",{className:"p",children:"Below is a beginner friendly list of common input types with what they are used for and simple examples."})]}),e.jsx("div",{className:"list",children:l.map(p=>e.jsxs("div",{className:"item",children:[e.jsxs("div",{className:"itemTop",children:[e.jsx("span",{className:"itemIcon",children:p.icon}),e.jsxs("div",{className:"itemHead",children:[e.jsx("div",{className:"itemTitle",children:e.jsx("span",{className:"mono",children:p.name})}),e.jsx("div",{className:"itemUse",children:p.use})]})]}),e.jsxs("div",{className:"example",children:[e.jsx("div",{className:"exampleLabel",children:"Example"}),e.jsx("pre",{className:"code",children:e.jsx("code",{children:p.example})})]}),e.jsx("ul",{className:"notes",children:p.notes.map((h,f)=>e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),h]},`${p.name}-n-${f}`))})]},p.name))}),e.jsxs("div",{className:"tip",children:[e.jsx("div",{className:"tipTitle",children:"Quick tip"}),e.jsx("div",{className:"tipText",children:"Always pair inputs with a label. It improves usability and makes forms accessible for keyboard and screen readers."})]})]})]})},jg={Wrapper:J.section`
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
    `},bg=()=>{const[a,c]=_.useState(!1);return e.jsxs(jg.Wrapper,{className:`topicCard ${a?"open":""}`,children:[e.jsxs("button",{type:"button",className:"topicHeader",onClick:()=>c(l=>!l),"aria-expanded":a,children:[e.jsx("span",{className:"chev",children:a?e.jsx(ce,{}):e.jsx(de,{})}),e.jsx("span",{className:"icon",children:e.jsx(vs,{})}),e.jsx("span",{className:"title",children:"Form Controls"}),e.jsx("span",{className:"meta",children:a?"Collapse":"Expand"})]}),e.jsxs("div",{className:`topicBody ${a?"open":""}`,children:[e.jsxs("div",{className:"section",children:[e.jsx("h3",{children:"label"}),e.jsx("p",{children:"The label element connects text to an input field. Clicking the label focuses the input automatically. This improves usability and accessibility."}),e.jsxs("div",{className:"example",children:[e.jsx("label",{htmlFor:"name",children:"Name:"}),e.jsx("input",{id:"name",type:"text",placeholder:"Enter name"})]})]}),e.jsxs("div",{className:"section",children:[e.jsx("h3",{children:"fieldset and legend"}),e.jsx("p",{children:"Fieldset groups related form controls together. Legend gives a title to that group. This is very useful for accessibility."}),e.jsx("div",{className:"example",children:e.jsxs("fieldset",{children:[e.jsx("legend",{children:"Gender"}),e.jsxs("label",{children:[e.jsx("input",{type:"radio",name:"gender"})," Male"]}),e.jsxs("label",{children:[e.jsx("input",{type:"radio",name:"gender"})," Female"]})]})})]}),e.jsxs("div",{className:"section",children:[e.jsx("h3",{children:"textarea"}),e.jsx("p",{children:"Textarea is used for multi-line text input. Unlike input type text, it supports multiple lines."}),e.jsx("div",{className:"example",children:e.jsx("textarea",{placeholder:"Write your message..."})})]}),e.jsxs("div",{className:"section",children:[e.jsx("h3",{children:"select, option, optgroup"}),e.jsx("p",{children:"Select creates a dropdown. Option defines choices. Optgroup groups related options together."}),e.jsx("div",{className:"example",children:e.jsxs("select",{children:[e.jsxs("optgroup",{label:"Frontend",children:[e.jsx("option",{children:"HTML"}),e.jsx("option",{children:"CSS"})]}),e.jsxs("optgroup",{label:"Backend",children:[e.jsx("option",{children:"Node"}),e.jsx("option",{children:"PHP"})]})]})})]}),e.jsxs("div",{className:"section",children:[e.jsx("h3",{children:"datalist"}),e.jsx("p",{children:"Datalist provides suggestion options for an input. It allows users to either type freely or choose from suggestions."}),e.jsxs("div",{className:"example",children:[e.jsx("input",{list:"browsers",placeholder:"Choose browser"}),e.jsxs("datalist",{id:"browsers",children:[e.jsx("option",{value:"Chrome"}),e.jsx("option",{value:"Firefox"}),e.jsx("option",{value:"Edge"})]})]})]}),e.jsxs("div",{className:"section",children:[e.jsx("h3",{children:"output"}),e.jsx("p",{children:"Output displays calculation results. Often used with JavaScript to show dynamic values."}),e.jsx("div",{className:"example",children:e.jsx("output",{children:"Result will appear here"})})]}),e.jsxs("div",{className:"section",children:[e.jsx("h3",{children:"progress"}),e.jsx("p",{children:"Progress shows task completion progress. Useful for file uploads or loading states."}),e.jsx("div",{className:"example",children:e.jsx("progress",{value:"60",max:"100"})})]}),e.jsxs("div",{className:"section",children:[e.jsx("h3",{children:"meter"}),e.jsx("p",{children:"Meter represents a value within a known range. Example: battery level, disk usage, score rating."}),e.jsx("div",{className:"example",children:e.jsx("meter",{value:"0.7",children:"70%"})})]})]})]})},Ng={Wrapper:J.section`
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
    `},wg=()=>{const[a,c]=_.useState(!1),[l,p]=_.useState({fullName:"",email:"",age:"",pin:"",price:"50",website:""}),[h,f]=_.useState({}),[b,C]=_.useState(""),[k,A]=_.useState(""),W=()=>c(D=>!D),R=_.useMemo(()=>[{title:"required",desc:"Makes a field mandatory. Browser shows an error if empty.",ex:"<input required />"},{title:"pattern",desc:"Validates with a regex pattern. Useful for PIN, username rules, etc.",ex:'<input pattern="^[0-9]{6}$" />'},{title:"minLength",desc:"Minimum number of characters for text inputs.",ex:'<input minLength="3" />'},{title:"maxLength",desc:"Maximum number of characters for text inputs.",ex:'<input maxLength="20" />'},{title:"min",desc:"Minimum value for number/date/range inputs.",ex:'<input type="number" min="18" />'},{title:"max",desc:"Maximum value for number/date/range inputs.",ex:'<input type="number" max="60" />'},{title:"step",desc:"Allowed step increments for number/range inputs. Example: step 0.5 or step 10.",ex:'<input type="number" step="0.5" />'},{title:"Constraint Validation API",desc:"Browser validation API to check and show errors programmatically (checkValidity, reportValidity, setCustomValidity).",ex:"form.checkValidity()"},{title:"Custom validation",desc:"Your own logic on top of browser constraints. Example: confirm password, business rules.",ex:'setCustomValidity("Message")'}],[]),Q=D=>{const{name:le,value:se}=D.target;if(p(re=>({...re,[le]:se})),A(""),le==="website"){const re=se.trim();if(!re){C("");return}const E=re.startsWith("https://")||re.startsWith("http://");C(E?"":"URL must start with https:// or http://")}},X=D=>{const{name:le}=D.target;f(se=>({...se,[le]:!0}))},Z=D=>{D.preventDefault();const le=D.currentTarget,se=le.querySelector('input[name="website"]');if(se&&se.setCustomValidity(b||""),!le.checkValidity()){le.reportValidity(),A("Fix the highlighted fields and try again.");return}A("Looks good. Form passed browser validation.")},G=()=>{p({fullName:"",email:"",age:"",pin:"",price:"50",website:""}),f({}),C(""),A("")};return e.jsxs(Ng.Wrapper,{className:`topicCard ${a?"open":""}`,children:[e.jsxs("button",{type:"button",className:"topicHeader",onClick:W,"aria-expanded":a,children:[e.jsx("span",{className:"chev",children:a?e.jsx(ce,{}):e.jsx(de,{})}),e.jsx("span",{className:"icon",children:e.jsx(vs,{})}),e.jsx("span",{className:"title",children:"Validation"}),e.jsx("span",{className:"meta",children:a?"Collapse":"Expand"})]}),e.jsxs("div",{className:`topicBody ${a?"open":""}`,children:[e.jsxs("div",{className:"section",children:[e.jsx("h3",{className:"h3",children:"What is form validation"}),e.jsx("p",{className:"p",children:"Validation means checking user input before you accept it. HTML gives you built-in validation rules that work without JavaScript. The browser can block submission and show a message when a field is invalid."}),e.jsxs("div",{className:"note",children:[e.jsx("span",{className:"noteIcon",children:e.jsx(We,{})}),e.jsx("div",{className:"noteText",children:"Use HTML validation for common rules. Use custom validation only for business logic that HTML cannot express."})]})]}),e.jsxs("div",{className:"section",children:[e.jsx("h3",{className:"h3",children:"Core validation attributes"}),e.jsx("div",{className:"ruleGrid",children:R.map(D=>e.jsxs("div",{className:"ruleCard",children:[e.jsxs("div",{className:"ruleTop",children:[e.jsx("div",{className:"ruleName",children:D.title}),e.jsx("div",{className:"ruleTag",children:"Core"})]}),e.jsx("div",{className:"ruleDesc",children:D.desc}),e.jsxs("div",{className:"codeRow",children:[e.jsx("span",{className:"codeIcon",children:e.jsx(Ae,{})}),e.jsx("code",{className:"code",children:D.ex})]})]},D.title))})]}),e.jsxs("div",{className:"section",children:[e.jsx("h3",{className:"h3",children:"Beginner demo"}),e.jsx("p",{className:"p",children:'Try submitting with empty fields or wrong values. The browser will show built-in validation messages. The "Website" field also shows a custom validation message using setCustomValidity.'}),e.jsxs("form",{className:"demoForm",onSubmit:Z,onReset:G,children:[e.jsxs("div",{className:"row",children:[e.jsxs("label",{className:"label",htmlFor:"fullName",children:["Full name ",e.jsx("span",{className:"req",children:"*"})]}),e.jsx("input",{id:"fullName",name:"fullName",type:"text",value:l.fullName,onChange:Q,onBlur:X,required:!0,minLength:3,maxLength:30,placeholder:"Example: Ashish Ranjan"}),e.jsx("div",{className:"hint",children:"required + minLength 3 + maxLength 30"}),h.fullName&&l.fullName&&l.fullName.length<3&&e.jsxs("div",{className:"inlineWarn",children:[e.jsx(sr,{})," Minimum 3 characters"]})]}),e.jsxs("div",{className:"row",children:[e.jsxs("label",{className:"label",htmlFor:"email",children:["Email ",e.jsx("span",{className:"req",children:"*"})]}),e.jsx("input",{id:"email",name:"email",type:"email",value:l.email,onChange:Q,onBlur:X,required:!0,placeholder:"example@mail.com"}),e.jsx("div",{className:"hint",children:"required + type email"})]}),e.jsxs("div",{className:"twoCol",children:[e.jsxs("div",{className:"row",children:[e.jsxs("label",{className:"label",htmlFor:"age",children:["Age ",e.jsx("span",{className:"req",children:"*"})]}),e.jsx("input",{id:"age",name:"age",type:"number",value:l.age,onChange:Q,onBlur:X,required:!0,min:18,max:60,step:1,placeholder:"18 to 60"}),e.jsx("div",{className:"hint",children:"required + min 18 + max 60 + step 1"})]}),e.jsxs("div",{className:"row",children:[e.jsxs("label",{className:"label",htmlFor:"pin",children:["PIN code ",e.jsx("span",{className:"req",children:"*"})]}),e.jsx("input",{id:"pin",name:"pin",type:"text",value:l.pin,onChange:Q,onBlur:X,required:!0,inputMode:"numeric",pattern:"^[0-9]{6}$",maxLength:6,placeholder:"6 digits"}),e.jsxs("div",{className:"hint",children:["required + pattern ^[0-9]","{6}","$"]})]})]}),e.jsxs("div",{className:"row",children:[e.jsx("label",{className:"label",htmlFor:"price",children:"Price (step demo)"}),e.jsx("input",{id:"price",name:"price",type:"range",value:l.price,onChange:Q,min:0,max:100,step:5}),e.jsx("div",{className:"hint",children:"range + min 0 + max 100 + step 5"}),e.jsxs("div",{className:"pill",children:[e.jsx(ae,{})," Selected: ",l.price]})]}),e.jsxs("div",{className:"row",children:[e.jsx("label",{className:"label",htmlFor:"website",children:"Website (custom validation)"}),e.jsx("input",{id:"website",name:"website",type:"url",value:l.website,onChange:Q,onBlur:X,placeholder:"https://example.com"}),e.jsx("div",{className:"hint",children:"Custom rule: must start with https:// or http://"}),!!b&&e.jsxs("div",{className:"inlineWarn",children:[e.jsx(sr,{})," ",b]})]}),e.jsxs("div",{className:"actions",children:[e.jsx("button",{type:"submit",className:"btn primary",children:"Submit"}),e.jsx("button",{type:"reset",className:"btn",children:"Reset"})]}),!!k&&e.jsx("div",{className:"submitMsg",children:k})]})]}),e.jsxs("div",{className:"section",children:[e.jsx("h3",{className:"h3",children:"Constraint Validation API quick notes"}),e.jsxs("ul",{className:"bullets",children:[e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),e.jsxs("span",{className:"bulletText",children:[e.jsx("code",{className:"inlineCode",children:"form.checkValidity()"})," ","returns true or false without showing UI."]})]}),e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),e.jsxs("span",{className:"bulletText",children:[e.jsx("code",{className:"inlineCode",children:"form.reportValidity()"})," ","shows browser messages and returns true or false."]})]}),e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),e.jsxs("span",{className:"bulletText",children:[e.jsx("code",{className:"inlineCode",children:'input.setCustomValidity("Message")'})," ","sets your custom error message."]})]}),e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),e.jsxs("span",{className:"bulletText",children:["Set custom validity to empty string to clear it:",e.jsx("code",{className:"inlineCode",children:'setCustomValidity("")'}),"."]})]})]}),e.jsxs("div",{className:"miniCode",children:[e.jsxs("div",{className:"miniCodeTop",children:[e.jsx("span",{className:"miniCodeIcon",children:e.jsx(Ae,{})}),"Example snippet"]}),e.jsx("pre",{className:"pre",children:`const form = e.currentTarget;

if (!form.checkValidity()) {
    form.reportValidity();
    return;
}

const input = form.querySelector('input[name="website"]');
input.setCustomValidity("URL must start with https://");`})]})]})]})]})},kg={Wrapper:J.section`
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
    `},Sg=()=>{const[a,c]=_.useState(!1),l=()=>c(p=>!p);return e.jsxs(kg.Wrapper,{className:`topicCard ${a?"open":""}`,children:[e.jsxs("button",{type:"button",className:"topicHeader",onClick:l,"aria-expanded":a,children:[e.jsx("span",{className:"chev",children:a?e.jsx(ce,{}):e.jsx(de,{})}),e.jsx("span",{className:"icon",children:e.jsx(yo,{})}),e.jsx("span",{className:"title",children:"Accessibility in Forms"}),e.jsx("span",{className:"meta",children:a?"Collapse":"Expand"})]}),e.jsxs("div",{className:`topicBody ${a?"open":""}`,children:[e.jsxs("div",{className:"section",children:[e.jsx("p",{className:"p",children:"Accessible forms are not just about looking good. They must be usable with keyboard navigation and screen readers. The core idea is simple: every form control should have a clear label, helpful guidance, and a clear error message when something goes wrong."}),e.jsxs("div",{className:"note",children:[e.jsx("span",{className:"noteIcon",children:e.jsx(We,{})}),e.jsx("div",{className:"noteText",children:'Screen readers read form fields using their label. If a label is missing or not connected, users hear vague text like "edit text" without context.'})]})]}),e.jsxs("div",{className:"section",children:[e.jsx("h3",{className:"h3",children:"1. Label association"}),e.jsx("p",{className:"p",children:"Every input should have a label. The label must be linked to the input so clicking the label focuses the input, and screen readers announce the correct name."}),e.jsxs("div",{className:"goodBadGrid",children:[e.jsxs("div",{className:"card good",children:[e.jsxs("div",{className:"cardTop",children:[e.jsxs("span",{className:"badge goodBadge",children:[e.jsx(ae,{})," Good"]}),e.jsx("div",{className:"cardTitle",children:"Proper label and htmlFor"})]}),e.jsx("div",{className:"example",children:e.jsxs("div",{className:"field",children:[e.jsx("label",{htmlFor:"emailGood",children:"Email"}),e.jsx("input",{id:"emailGood",type:"email",placeholder:"name@example.com"})]})}),e.jsx("div",{className:"code",children:e.jsx("pre",{children:`<label for="email">Email</label>
<input id="email" type="email" />`})})]}),e.jsxs("div",{className:"card bad",children:[e.jsxs("div",{className:"cardTop",children:[e.jsxs("span",{className:"badge badBadge",children:[e.jsx(xu,{})," Avoid"]}),e.jsx("div",{className:"cardTitle",children:"Placeholder is not a label"})]}),e.jsx("div",{className:"example",children:e.jsx("div",{className:"field",children:e.jsx("input",{type:"email",placeholder:"Email","aria-label":"Email"})})}),e.jsx("div",{className:"code",children:e.jsx("pre",{children:`<!-- Placeholder disappears on typing -->
<input type="email" placeholder="Email" />`})}),e.jsx("p",{className:"tiny",children:"If you must skip a visible label, at least add aria-label. But visible labels are better."})]})]})]}),e.jsxs("div",{className:"section",children:[e.jsx("h3",{className:"h3",children:"2. aria-describedby"}),e.jsx("p",{className:"p",children:"Use aria-describedby to connect extra help text or error text to a field. Screen readers will announce that extra information after reading the label."}),e.jsxs("div",{className:"demoCard",children:[e.jsx("div",{className:"demoTitle",children:"Example: help text linked"}),e.jsxs("div",{className:"field",children:[e.jsx("label",{htmlFor:"passwordA11y",children:"Password"}),e.jsx("input",{id:"passwordA11y",type:"password","aria-describedby":"passwordHelp",placeholder:"Enter password"}),e.jsx("div",{className:"help",id:"passwordHelp",children:"Use at least 8 characters with letters and a number."})]}),e.jsx("div",{className:"code",children:e.jsx("pre",{children:`<label for="password">Password</label>
<input id="password" aria-describedby="passwordHelp" />
<div id="passwordHelp">Use at least 8 characters...</div>`})})]}),e.jsxs("div",{className:"note",children:[e.jsx("span",{className:"noteIcon",children:e.jsx(We,{})}),e.jsx("div",{className:"noteText",children:"aria-describedby works best when the text exists in the DOM and is not purely visual."})]})]}),e.jsxs("div",{className:"section",children:[e.jsx("h3",{className:"h3",children:"3. Error messaging patterns"}),e.jsx("p",{className:"p",children:'A good error message is specific and placed near the field. Also mark the field as invalid using aria-invalid="true". Link the error text using aria-describedby so screen readers announce it.'}),e.jsxs("div",{className:"demoCard",children:[e.jsx("div",{className:"demoTitle",children:"Example: invalid field with linked error"}),e.jsx(Tg,{})]}),e.jsxs("ul",{className:"bullets",children:[e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),"Put error text near the input"]}),e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),"Use aria-invalid on the input"]}),e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),"Link error text using aria-describedby"]}),e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),"Keep the message clear and actionable"]})]})]})]})]})},Tg=()=>{const[a,c]=_.useState(""),[l,p]=_.useState(!1),h=a.trim().includes("@"),f=l&&!h,b=f?"emailError":"emailHint";return e.jsxs("div",{className:"errorDemo",children:[e.jsxs("div",{className:"field",children:[e.jsx("label",{htmlFor:"emailA11y",children:"Email"}),e.jsx("input",{id:"emailA11y",type:"email",value:a,onChange:C=>c(C.target.value),onBlur:()=>p(!0),placeholder:"name@example.com","aria-describedby":b,"aria-invalid":f?"true":"false"}),!f&&e.jsx("div",{className:"help",id:"emailHint",children:"Example: name@example.com"}),f&&e.jsx("div",{className:"error",id:"emailError",children:'Please enter a valid email with "@".'})]}),e.jsx("div",{className:"code",children:e.jsx("pre",{children:`<input aria-invalid="true"
       aria-describedby="emailError" />

<div id="emailError">Please enter a valid email...</div>`})}),e.jsx("div",{className:"tiny",children:"Pro tip: For full forms, you can also show an error summary at the top, but always keep field-level errors near the input."})]})},Cg={Wrapper:J.section`
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
    `},Lg=()=>{const[a,c]=_.useState(!1),l=()=>c(p=>!p);return e.jsxs(Cg.Wrapper,{className:a?"open":"",children:[e.jsxs("button",{type:"button",className:"header",onClick:l,"aria-expanded":a,children:[e.jsx("span",{className:"chev",children:a?e.jsx(ce,{}):e.jsx(de,{})}),e.jsx("span",{className:"icon",children:e.jsx(We,{})}),e.jsx("span",{className:"title",children:"Meta Tags"}),e.jsx("span",{className:"meta",children:a?"Collapse":"Expand"})]}),e.jsxs("div",{className:`body ${a?"open":""}`,children:[e.jsxs("div",{className:"section",children:[e.jsx("h3",{children:"What are Meta Tags"}),e.jsx("p",{children:"Meta tags are placed inside the head section of an HTML document. They provide information about the page to the browser and search engines. They do not display visible content on the page."})]}),e.jsxs("div",{className:"section",children:[e.jsx("h3",{children:"charset"}),e.jsx("p",{children:"The charset meta tag defines the character encoding used in the document. UTF-8 is the standard and supports almost all characters and symbols."}),e.jsx("pre",{children:'<meta charset="UTF-8">'})]}),e.jsxs("div",{className:"section",children:[e.jsx("h3",{children:"viewport"}),e.jsx("p",{children:"The viewport meta tag controls how a page is displayed on mobile devices. It ensures proper scaling and responsiveness."}),e.jsx("pre",{children:'<meta name="viewport" content="width=device-width, initial-scale=1.0">'})]}),e.jsxs("div",{className:"section",children:[e.jsx("h3",{children:"description"}),e.jsx("p",{children:"The description meta tag provides a short summary of the page. Search engines often display this in search results."}),e.jsx("pre",{children:'<meta name="description" content="Learn HTML fundamentals with clear examples.">'})]}),e.jsxs("div",{className:"section",children:[e.jsx("h3",{children:"keywords"}),e.jsx("p",{children:"The keywords meta tag lists relevant words for the page. Modern search engines do not rely heavily on it, but it was historically used for SEO."}),e.jsx("pre",{children:'<meta name="keywords" content="HTML, Web, Markup, Tutorial">'})]}),e.jsxs("div",{className:"section",children:[e.jsx("h3",{children:"author"}),e.jsx("p",{children:"The author meta tag defines who created the page. It is useful for documentation and reference."}),e.jsx("pre",{children:'<meta name="author" content="Your Name">'})]}),e.jsxs("div",{className:"section",children:[e.jsx("h3",{children:"refresh"}),e.jsx("p",{children:"The refresh meta tag automatically reloads the page after a specified number of seconds. It can also redirect to another URL."}),e.jsx("pre",{children:'<meta http-equiv="refresh" content="5">'}),e.jsx("pre",{children:'<meta http-equiv="refresh" content="5; url=https://example.com">'})]}),e.jsxs("div",{className:"section",children:[e.jsx("h3",{children:"http-equiv"}),e.jsx("p",{children:"The http-equiv attribute provides HTTP header information. It can simulate response headers like content-type or refresh."}),e.jsx("pre",{children:'<meta http-equiv="X-UA-Compatible" content="IE=edge">'})]})]})]})},zg={Wrapper:J.section`
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
    `},Ig=()=>{const[a,c]=_.useState(!1);return e.jsxs(zg.Wrapper,{className:a?"open":"",children:[e.jsxs("button",{type:"button",className:"topicHeader",onClick:()=>c(l=>!l),"aria-expanded":a,children:[e.jsx("span",{className:"chev",children:a?e.jsx(ce,{}):e.jsx(de,{})}),e.jsx("span",{className:"icon",children:e.jsx(yo,{})}),e.jsx("span",{className:"title",children:"Link Element"}),e.jsx("span",{className:"meta",children:a?"Collapse":"Expand"})]}),e.jsxs("div",{className:`topicBody ${a?"open":""}`,children:[e.jsxs("div",{className:"section",children:[e.jsxs("h3",{className:"h3",children:[e.jsx(fl,{})," Stylesheets"]}),e.jsx("p",{className:"p",children:"The most common use of the link element is to connect a CSS file to your HTML document. This allows the browser to apply styles to the page."}),e.jsx("div",{className:"codeBlock",children:'<link rel="stylesheet" href="styles.css">'}),e.jsx("p",{className:"p",children:'rel="stylesheet" tells the browser that this file contains CSS styles. The href attribute defines the location of the file.'})]}),e.jsxs("div",{className:"section",children:[e.jsxs("h3",{className:"h3",children:[e.jsx(ys,{})," Icons"]}),e.jsx("p",{className:"p",children:"The link element is also used to define a favicon. A favicon is the small icon shown in the browser tab."}),e.jsx("div",{className:"codeBlock",children:'<link rel="icon" href="/favicon.ico" type="image/x-icon">'}),e.jsx("p",{className:"p",children:'rel="icon" tells the browser this is a tab icon.'})]}),e.jsxs("div",{className:"section",children:[e.jsxs("h3",{className:"h3",children:[e.jsx(Fa,{})," Preload"]}),e.jsx("p",{className:"p",children:"Preload tells the browser to download a resource early, before it is actually needed. This improves performance for important files like fonts or scripts."}),e.jsx("div",{className:"codeBlock",children:'<link rel="preload" href="font.woff2" as="font" type="font/woff2" crossorigin>'}),e.jsx("p",{className:"p",children:"The as attribute tells the browser what type of resource it is loading."})]}),e.jsxs("div",{className:"section",children:[e.jsx("h3",{className:"h3",children:"Prefetch"}),e.jsx("p",{className:"p",children:"Prefetch loads resources that may be needed in the future. It has lower priority than preload and is used for next-page navigation."}),e.jsx("div",{className:"codeBlock",children:'<link rel="prefetch" href="/next-page.html">'})]}),e.jsxs("div",{className:"section",children:[e.jsx("h3",{className:"h3",children:"Preconnect"}),e.jsx("p",{className:"p",children:"Preconnect establishes early connections to important third-party domains. This reduces latency when fetching external resources."}),e.jsx("div",{className:"codeBlock",children:'<link rel="preconnect" href="https://fonts.googleapis.com">'}),e.jsx("p",{className:"p",children:"This is useful when using external fonts, APIs, or CDN resources."})]})]})]})},Eg={Wrapper:J.section`
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
    `},Mg=()=>{const[a,c]=_.useState(!1),l=()=>c(p=>!p);return e.jsxs(Eg.Wrapper,{className:a?"open":"",children:[e.jsxs("button",{type:"button",className:"topicHeader",onClick:l,"aria-expanded":a,children:[e.jsx("span",{className:"chev",children:a?e.jsx(ce,{}):e.jsx(de,{})}),e.jsx("span",{className:"icon",children:e.jsx(yo,{})}),e.jsx("span",{className:"title",children:"Base Element"}),e.jsx("span",{className:"meta",children:a?"Collapse":"Expand"})]}),e.jsxs("div",{className:`topicBody ${a?"open":""}`,children:[e.jsxs("div",{className:"section",children:[e.jsx("h3",{className:"h3",children:"What is the base element"}),e.jsx("p",{className:"p",children:"The base element defines a base URL or default target for all relative URLs inside a document. It must be placed inside the head section. It affects links, images, scripts, stylesheets, and forms that use relative paths."})]}),e.jsxs("div",{className:"section",children:[e.jsx("h3",{className:"h3",children:"Base href"}),e.jsx("p",{className:"p",children:"The href attribute sets the base URL for all relative URLs in the page. After defining it, every relative link will resolve from that base path."}),e.jsx("div",{className:"codeBlock",children:`<head>
  <base href="https://example.com/docs/" />
</head>

<a href="page.html">Open Page</a>`}),e.jsx("p",{className:"p note",children:"In this example, clicking the link will open: https://example.com/docs/page.html"})]}),e.jsxs("div",{className:"section",children:[e.jsx("h3",{className:"h3",children:"Base target"}),e.jsx("p",{className:"p",children:"The target attribute sets a default target for all anchor tags. It behaves like adding target to every link."}),e.jsx("div",{className:"codeBlock",children:`<head>
  <base target="_blank" />
</head>

<a href="https://example.com">Visit</a>`}),e.jsx("p",{className:"p note",children:"Now all links will open in a new tab unless explicitly overridden."})]}),e.jsxs("div",{className:"section warning",children:[e.jsxs("h3",{className:"h3",children:[e.jsx(xu,{})," Important Rules"]}),e.jsxs("ul",{className:"bullets",children:[e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),"Only one base element is allowed per document."]}),e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),"It must be placed inside the head."]}),e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),"It affects all relative URLs, including CSS and JS."]}),e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),"Absolute URLs are not affected."]})]})]}),e.jsxs("div",{className:"section",children:[e.jsx("h3",{className:"h3",children:"When to use it"}),e.jsx("p",{className:"p",children:"It is commonly used in documentation sites, static site deployments inside subfolders, or when hosting on GitHub Pages where a base path is required."})]})]})]})},Bg={Wrapper:J.section`
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
    `},Pg=()=>{const[a,c]=_.useState(!1),l=()=>c(p=>!p);return e.jsxs(Bg.Wrapper,{className:a?"open":"",children:[e.jsxs("button",{type:"button",className:"topicHeader",onClick:l,"aria-expanded":a,children:[e.jsx("span",{className:"chev",children:a?e.jsx(ce,{}):e.jsx(de,{})}),e.jsx("span",{className:"icon",children:e.jsx(Ae,{})}),e.jsx("span",{className:"title",children:"Script Element"}),e.jsx("span",{className:"meta",children:a?"Collapse":"Expand"})]}),e.jsxs("div",{className:`topicBody ${a?"open":""}`,children:[e.jsxs("div",{className:"section",children:[e.jsx("h3",{className:"h3",children:"Inline vs External"}),e.jsx("p",{className:"p",children:"Inline script means JavaScript written directly inside the HTML file."}),e.jsx("pre",{className:"code",children:`<script>
  console.log("Hello");
<\/script>`}),e.jsx("p",{className:"p",children:"External script means JavaScript written in a separate file and linked using the src attribute."}),e.jsx("pre",{className:"code",children:'<script src="app.js"><\/script>'}),e.jsx("p",{className:"p",children:"In real projects, external scripts are preferred because they are easier to maintain, cache, and reuse."})]}),e.jsxs("div",{className:"section",children:[e.jsx("h3",{className:"h3",children:"Defer"}),e.jsx("p",{className:"p",children:"The defer attribute tells the browser to download the script in parallel but execute it only after HTML parsing is complete."}),e.jsx("pre",{className:"code",children:'<script src="app.js" defer><\/script>'}),e.jsxs("ul",{className:"bullets",children:[e.jsx("li",{children:"HTML parsing is not blocked"}),e.jsx("li",{children:"Execution happens after DOM is ready"}),e.jsx("li",{children:"Scripts run in order"})]})]}),e.jsxs("div",{className:"section",children:[e.jsx("h3",{className:"h3",children:"Async"}),e.jsx("p",{className:"p",children:"The async attribute downloads the script in parallel and executes it immediately once ready."}),e.jsx("pre",{className:"code",children:'<script src="analytics.js" async><\/script>'}),e.jsxs("ul",{className:"bullets",children:[e.jsx("li",{children:"HTML parsing is not blocked"}),e.jsx("li",{children:"Execution order is NOT guaranteed"}),e.jsx("li",{children:"Best for independent scripts like analytics"})]})]}),e.jsxs("div",{className:"section",children:[e.jsx("h3",{className:"h3",children:"Module"}),e.jsx("p",{className:"p",children:'type="module" allows you to use modern JavaScript modules with import and export.'}),e.jsx("pre",{className:"code",children:'<script type="module" src="main.js"><\/script>'}),e.jsxs("ul",{className:"bullets",children:[e.jsx("li",{children:"Modules are deferred by default"}),e.jsx("li",{children:"They use strict mode automatically"}),e.jsx("li",{children:"They allow ES module imports"})]})]}),e.jsxs("div",{className:"section",children:[e.jsx("h3",{className:"h3",children:"Nomodule"}),e.jsx("p",{className:"p",children:"nomodule is used to provide fallback scripts for older browsers that do not support modules."}),e.jsx("pre",{className:"code",children:'<script nomodule src="legacy.js"><\/script>'}),e.jsx("p",{className:"p",children:"Modern browsers ignore this when module is supported."})]}),e.jsxs("div",{className:"section",children:[e.jsxs("h3",{className:"h3",children:[e.jsx(At,{style:{marginRight:6}}),"Integrity Attribute"]}),e.jsx("p",{className:"p",children:"The integrity attribute is used for Subresource Integrity (SRI). It ensures the file has not been tampered with."}),e.jsx("pre",{className:"code",children:`<script 
  src="https://cdn.example.com/lib.js"
  integrity="sha384-abc123..."
  crossorigin="anonymous">
<\/script>`}),e.jsx("p",{className:"p",children:"If the file content changes unexpectedly, the browser refuses to execute it."})]}),e.jsxs("div",{className:"section",children:[e.jsxs("h3",{className:"h3",children:[e.jsx(Fa,{style:{marginRight:6}}),"crossorigin"]}),e.jsx("p",{className:"p",children:"The crossorigin attribute controls how cross-origin requests are handled."}),e.jsxs("ul",{className:"bullets",children:[e.jsx("li",{children:"anonymous"}),e.jsx("li",{children:"use-credentials"})]}),e.jsx("p",{className:"p",children:"It is commonly used with integrity when loading scripts from a CDN."})]})]})]})},Hg={Wrapper:J.section`
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
    `},_g=()=>{const[a,c]=_.useState(!1),l=()=>c(p=>!p);return e.jsxs(Hg.Wrapper,{className:`topicCard ${a?"open":""}`,children:[e.jsxs("button",{type:"button",className:"topicHeader",onClick:l,"aria-expanded":a,children:[e.jsx("span",{className:"chev",children:a?e.jsx(ce,{}):e.jsx(de,{})}),e.jsx("span",{className:"icon",children:e.jsx(Fa,{})}),e.jsx("span",{className:"title",children:"Performance Attributes"}),e.jsx("span",{className:"meta",children:a?"Collapse":"Expand"})]}),e.jsxs("div",{className:`topicBody ${a?"open":""}`,children:[e.jsx("div",{className:"section",children:e.jsx("p",{className:"p",children:"Performance attributes help the browser load and render content faster. You usually apply them to images, iframes, and sometimes scripts. The goal is simple: load what the user needs now, and delay what the user does not need yet."})}),e.jsxs("div",{className:"section",children:[e.jsxs("h3",{className:"h3",children:[e.jsx("span",{className:"hIcon",children:e.jsx(ys,{})}),'loading="lazy"']}),e.jsxs("p",{className:"p",children:["The ",e.jsx("span",{className:"mono",children:"loading"})," attribute tells the browser whether it should load an image or an iframe immediately or only when it is close to the viewport. ",e.jsx("span",{className:"mono",children:"lazy"}),' means "load later". This saves bandwidth and speeds up initial page load.']}),e.jsxs("div",{className:"note",children:[e.jsxs("div",{className:"noteTitle",children:[e.jsx(We,{})," When to use"]}),e.jsxs("ul",{className:"bullets",children:[e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),"Use it for images below the fold"]}),e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),"Use it for long pages with many images"]}),e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),"Do not use it for the hero image above the fold"]})]})]}),e.jsxs("div",{className:"code",children:[e.jsx("div",{className:"codeTitle",children:"Example"}),e.jsx("pre",{className:"pre",children:`<img
  src="photo.jpg"
  alt="A mountain view"
  loading="lazy"
/>

<iframe
  src="https://example.com/embed"
  title="Embedded content"
  loading="lazy"
></iframe>`})]})]}),e.jsxs("div",{className:"section",children:[e.jsxs("h3",{className:"h3",children:[e.jsx("span",{className:"hIcon",children:e.jsx(Fa,{})}),'decoding="async"']}),e.jsxs("p",{className:"p",children:["Images must be decoded before they can be displayed. The"," ",e.jsx("span",{className:"mono",children:"decoding"})," attribute gives a hint to the browser about when to decode."," ",e.jsx("span",{className:"mono",children:"async"})," means the browser can decode the image without blocking the page render. This helps reduce jank and improves perceived loading."]}),e.jsxs("div",{className:"note",children:[e.jsxs("div",{className:"noteTitle",children:[e.jsx(We,{})," Good to know"]}),e.jsxs("ul",{className:"bullets",children:[e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),"Use for non critical images"]}),e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),"For the top hero image, you can keep default or use sync if needed"]})]})]}),e.jsxs("div",{className:"code",children:[e.jsx("div",{className:"codeTitle",children:"Example"}),e.jsx("pre",{className:"pre",children:`<img
  src="gallery-1.jpg"
  alt="Gallery image"
  decoding="async"
/>`})]})]}),e.jsxs("div",{className:"section",children:[e.jsxs("h3",{className:"h3",children:[e.jsx("span",{className:"hIcon",children:e.jsx(ae,{})}),'fetchpriority="high | low | auto"']}),e.jsxs("p",{className:"p",children:["The ",e.jsx("span",{className:"mono",children:"fetchpriority"})," ","attribute hints the browser about how important a resource is. A hero image that appears immediately can be marked as ",e.jsx("span",{className:"mono",children:"high"})," so it gets downloaded earlier. Less important images can be"," ",e.jsx("span",{className:"mono",children:"low"}),"."]}),e.jsxs("div",{className:"note",children:[e.jsxs("div",{className:"noteTitle",children:[e.jsx(We,{})," Practical usage"]}),e.jsxs("ul",{className:"bullets",children:[e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),"Use high for hero image or above the fold image"]}),e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),"Use low for images far below"]}),e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),"Keep auto if you are not sure"]})]})]}),e.jsxs("div",{className:"code",children:[e.jsx("div",{className:"codeTitle",children:"Example"}),e.jsx("pre",{className:"pre",children:`<img
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
/>`})]})]})]})]})},Og={Wrapper:J.section`
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
    `},Rg=()=>{const[a,c]=_.useState(!1);return e.jsxs(Og.Wrapper,{className:`topicCard ${a?"open":""}`,children:[e.jsxs("button",{type:"button",className:"topicHeader",onClick:()=>c(l=>!l),"aria-expanded":a,children:[e.jsx("span",{className:"chev",children:a?e.jsx(ce,{}):e.jsx(de,{})}),e.jsx("span",{className:"icon",children:e.jsx(At,{})}),e.jsx("span",{className:"title",children:"ARIA Basics"}),e.jsx("span",{className:"meta",children:a?"Collapse":"Expand"})]}),e.jsxs("div",{className:`topicBody ${a?"open":""}`,children:[e.jsxs("div",{className:"section",children:[e.jsx("h3",{className:"h3",children:"What is ARIA"}),e.jsx("p",{className:"p",children:"ARIA stands for Accessible Rich Internet Applications. It helps screen readers and assistive technologies understand parts of your UI when normal HTML semantics are not enough."}),e.jsx("p",{className:"p",children:"Important rule: Use semantic HTML first. Only use ARIA when native HTML cannot solve the problem."})]}),e.jsxs("div",{className:"section",children:[e.jsx("h3",{className:"h3",children:"aria-label"}),e.jsx("p",{className:"p",children:"aria-label provides a text label directly to screen readers. It is useful when there is no visible text."}),e.jsx("div",{className:"code",children:`<button aria-label="Close menu">
  ✕
</button>`}),e.jsx("p",{className:"note",children:'The button shows only an icon visually, but screen readers will read "Close menu".'})]}),e.jsxs("div",{className:"section",children:[e.jsx("h3",{className:"h3",children:"aria-labelledby"}),e.jsx("p",{className:"p",children:"aria-labelledby connects an element to another element that already contains the visible label."}),e.jsx("div",{className:"code",children:`<h2 id="modalTitle">Delete item</h2>
<div role="dialog" aria-labelledby="modalTitle">
  Are you sure?
</div>`}),e.jsx("p",{className:"note",children:"Screen readers will use the heading text as the dialog label."})]}),e.jsxs("div",{className:"section",children:[e.jsx("h3",{className:"h3",children:"aria-describedby"}),e.jsx("p",{className:"p",children:"aria-describedby links an element to additional descriptive text."}),e.jsx("div",{className:"code",children:`<input id="email" aria-describedby="emailHelp" />

<p id="emailHelp">
  We will not share your email.
</p>`}),e.jsx("p",{className:"note",children:"Screen readers will read both the label and this helper description."})]}),e.jsxs("div",{className:"section",children:[e.jsx("h3",{className:"h3",children:"aria-hidden"}),e.jsx("p",{className:"p",children:'aria-hidden="true" hides content from screen readers. It does not visually hide content. It only affects accessibility APIs.'}),e.jsx("div",{className:"code",children:'<span aria-hidden="true">★</span>'}),e.jsx("p",{className:"note",children:"Useful for decorative icons that do not carry meaning."})]}),e.jsxs("div",{className:"section",children:[e.jsx("h3",{className:"h3",children:"role attribute"}),e.jsx("p",{className:"p",children:"The role attribute defines what an element represents when native semantics are missing."}),e.jsx("div",{className:"code",children:`<div role="button" tabindex="0">
  Click me
</div>`}),e.jsx("p",{className:"note",children:'If you use role="button", you must also handle keyboard interaction properly. That is why native button is always better.'})]}),e.jsxs("div",{className:"section",children:[e.jsx("h3",{className:"h3",children:"Golden Rule"}),e.jsxs("ul",{className:"bullets",children:[e.jsx("li",{children:"Use semantic HTML first"}),e.jsx("li",{children:"Do not replace native elements unnecessarily"}),e.jsx("li",{children:"ARIA does not fix bad HTML structure"})]})]})]})]})},Ag={Wrapper:J.section`
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
    `},Fg=()=>{const[a,c]=_.useState(!1),l=()=>c(p=>!p);return e.jsxs(Ag.Wrapper,{className:`topicCard ${a?"open":""}`,children:[e.jsxs("button",{type:"button",className:"topicHeader",onClick:l,"aria-expanded":a,children:[e.jsx("span",{className:"chev",children:a?e.jsx(ce,{}):e.jsx(de,{})}),e.jsx("span",{className:"icon",children:e.jsx(vu,{})}),e.jsx("span",{className:"title",children:"Semantic HTML vs div soup"}),e.jsx("span",{className:"meta",children:a?"Collapse":"Expand"})]}),e.jsxs("div",{className:`topicBody ${a?"open":""}`,children:[e.jsxs("div",{className:"section",children:[e.jsx("h3",{className:"h3",children:"What is semantic HTML"}),e.jsxs("p",{className:"p",children:["Semantic HTML means using elements that clearly describe what the content is. For example, a navigation menu should be inside a ",e.jsx("span",{className:"mono",children:"nav"}),", the main page content should be inside"," ",e.jsx("span",{className:"mono",children:"main"}),", and each article should be inside ",e.jsx("span",{className:"mono",children:"article"}),". This is different from using only"," ",e.jsx("span",{className:"mono",children:"div"})," and"," ",e.jsx("span",{className:"mono",children:"span"})," everywhere."]}),e.jsx("p",{className:"p",children:"Think of semantic tags like labels on boxes. The label helps everyone know what is inside, including browsers, search engines, and assistive technologies."})]}),e.jsxs("div",{className:"section",children:[e.jsx("h3",{className:"h3",children:"What is div soup"}),e.jsxs("p",{className:"p",children:['"Div soup" is when a page is built mostly with'," ",e.jsx("span",{className:"mono",children:"div"})," tags, and the structure is only defined by class names. It can work visually, but the meaning is hidden. For example, a sidebar might look correct, but a screen reader cannot easily understand what it is supposed to represent."]}),e.jsxs("div",{className:"cards",children:[e.jsxs("div",{className:"card bad",children:[e.jsx("div",{className:"cardTop",children:e.jsxs("span",{className:"badge badBadge",children:[e.jsx(sr,{})," div soup"]})}),e.jsx("pre",{className:"code",children:`<div class="header">
  <div class="nav">...</div>
</div>

<div class="content">
  <div class="post">...</div>
  <div class="sidebar">...</div>
</div>

<div class="footer">...</div>`}),e.jsx("p",{className:"note",children:"This is not wrong, but it does not clearly tell what the parts mean."})]}),e.jsxs("div",{className:"card good",children:[e.jsx("div",{className:"cardTop",children:e.jsxs("span",{className:"badge goodBadge",children:[e.jsx(ae,{})," semantic HTML"]})}),e.jsx("pre",{className:"code",children:`<header>
  <nav>...</nav>
</header>

<main>
  <article>...</article>
  <aside>...</aside>
</main>

<footer>...</footer>`}),e.jsx("p",{className:"note",children:"This gives meaning to the structure, not just styling hooks."})]})]})]}),e.jsxs("div",{className:"section",children:[e.jsx("h3",{className:"h3",children:"Why semantics matter"}),e.jsxs("ul",{className:"bullets",children:[e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),"Better accessibility for screen readers and keyboard users"]}),e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),"Easier for developers to read and maintain"]}),e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),"Better structure for SEO and search engines"]}),e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),"Built-in browser behavior (like"," ",e.jsx("span",{className:"mono",children:"button"})," and"," ",e.jsx("span",{className:"mono",children:"form"}),") works properly"]})]}),e.jsxs("div",{className:"tip",children:[e.jsx("span",{className:"tipIcon",children:e.jsx(Ga,{})}),e.jsx("div",{className:"tipText",children:"Semantic HTML is not about looking good. It is about being understood."})]})]}),e.jsxs("div",{className:"section",children:[e.jsx("h3",{className:"h3",children:"Screen reader behavior"}),e.jsxs("p",{className:"p",children:['Screen readers do not "see" the UI like we do. They read the page as a structured document. Semantic elements help them announce regions and landmarks like'," ",e.jsx("span",{className:"mono",children:"header"}),","," ",e.jsx("span",{className:"mono",children:"nav"}),","," ",e.jsx("span",{className:"mono",children:"main"}),","," ",e.jsx("span",{className:"mono",children:"article"}),", and"," ",e.jsx("span",{className:"mono",children:"footer"}),"."]}),e.jsxs("p",{className:"p",children:["Users can jump quickly between landmarks, headings, links, and form controls. If you use only"," ",e.jsx("span",{className:"mono",children:"div"})," elements, screen readers lose many useful shortcuts and the page becomes harder to navigate."]}),e.jsxs("div",{className:"mini",children:[e.jsx("div",{className:"miniTitle",children:"Good mental model"}),e.jsx("div",{className:"miniSub",children:"Visual users scan with eyes. Screen reader users scan with structure."})]})]}),e.jsxs("div",{className:"section",children:[e.jsx("h3",{className:"h3",children:"Quick checklist"}),e.jsxs("ul",{className:"checklist",children:[e.jsxs("li",{children:[e.jsx("span",{className:"check",children:e.jsx(ae,{})}),"Use ",e.jsx("span",{className:"mono",children:"nav"})," for navigation"]}),e.jsxs("li",{children:[e.jsx("span",{className:"check",children:e.jsx(ae,{})}),"Use ",e.jsx("span",{className:"mono",children:"main"})," once for main content"]}),e.jsxs("li",{children:[e.jsx("span",{className:"check",children:e.jsx(ae,{})}),"Use ",e.jsx("span",{className:"mono",children:"button"})," for actions (not div click)"]}),e.jsxs("li",{children:[e.jsx("span",{className:"check",children:e.jsx(ae,{})}),"Use heading order properly (h1 then h2 then h3)"]}),e.jsxs("li",{children:[e.jsx("span",{className:"check",children:e.jsx(ae,{})}),"Use ",e.jsx("span",{className:"mono",children:"label"})," with form inputs"]})]})]})]})]})},Wg={Wrapper:J.section`
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
    `};function Dg(a){return z({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M528 448H48c-26.51 0-48-21.49-48-48V112c0-26.51 21.49-48 48-48h480c26.51 0 48 21.49 48 48v288c0 26.51-21.49 48-48 48zM128 180v-40c0-6.627-5.373-12-12-12H76c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h40c6.627 0 12-5.373 12-12zm96 0v-40c0-6.627-5.373-12-12-12h-40c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h40c6.627 0 12-5.373 12-12zm96 0v-40c0-6.627-5.373-12-12-12h-40c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h40c6.627 0 12-5.373 12-12zm96 0v-40c0-6.627-5.373-12-12-12h-40c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h40c6.627 0 12-5.373 12-12zm96 0v-40c0-6.627-5.373-12-12-12h-40c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h40c6.627 0 12-5.373 12-12zm-336 96v-40c0-6.627-5.373-12-12-12h-40c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h40c6.627 0 12-5.373 12-12zm96 0v-40c0-6.627-5.373-12-12-12h-40c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h40c6.627 0 12-5.373 12-12zm96 0v-40c0-6.627-5.373-12-12-12h-40c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h40c6.627 0 12-5.373 12-12zm96 0v-40c0-6.627-5.373-12-12-12h-40c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h40c6.627 0 12-5.373 12-12zm-336 96v-40c0-6.627-5.373-12-12-12H76c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h40c6.627 0 12-5.373 12-12zm288 0v-40c0-6.627-5.373-12-12-12H172c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h232c6.627 0 12-5.373 12-12zm96 0v-40c0-6.627-5.373-12-12-12h-40c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h40c6.627 0 12-5.373 12-12z"},child:[]}]})(a)}const Ug=()=>{const[a,c]=_.useState(!1),l=()=>c(p=>!p);return e.jsxs(Wg.Wrapper,{className:`topicCard ${a?"open":""}`,children:[e.jsxs("button",{type:"button",className:"topicHeader",onClick:l,"aria-expanded":a,children:[e.jsx("span",{className:"chev",children:a?e.jsx(ce,{}):e.jsx(de,{})}),e.jsx("span",{className:"icon",children:e.jsx(Dg,{})}),e.jsx("span",{className:"title",children:"Tab order"}),e.jsx("span",{className:"meta",children:a?"Collapse":"Expand"})]}),e.jsxs("div",{className:`topicBody ${a?"open":""}`,children:[e.jsxs("div",{className:"section",children:[e.jsx("h3",{className:"h3",children:"What is tab order"}),e.jsx("p",{className:"p",children:"Tab order is the sequence in which focus moves when a user presses the Tab key. Keyboard users rely on this to navigate a page without a mouse. A good tab order is predictable and follows the visual layout of the page."}),e.jsxs("div",{className:"callout good",children:[e.jsx("span",{className:"calloutIcon",children:e.jsx(ae,{})}),e.jsxs("div",{className:"calloutText",children:[e.jsx("div",{className:"calloutTitle",children:"Goal"}),e.jsx("div",{className:"calloutSub",children:"Make keyboard navigation feel natural, from top to bottom and left to right."})]})]}),e.jsxs("div",{className:"miniGrid",children:[e.jsxs("div",{className:"mini",children:[e.jsx("span",{className:"miniIcon",children:e.jsx(nl,{})}),e.jsxs("div",{className:"miniText",children:[e.jsx("div",{className:"miniTitle",children:"Tab"}),e.jsx("div",{className:"miniSub",children:"Next focus"})]})]}),e.jsxs("div",{className:"mini",children:[e.jsx("span",{className:"miniIcon",children:e.jsx(nl,{})}),e.jsxs("div",{className:"miniText",children:[e.jsx("div",{className:"miniTitle",children:"Shift + Tab"}),e.jsx("div",{className:"miniSub",children:"Previous focus"})]})]}),e.jsxs("div",{className:"mini",children:[e.jsx("span",{className:"miniIcon",children:e.jsx(Nu,{})}),e.jsxs("div",{className:"miniText",children:[e.jsx("div",{className:"miniTitle",children:"Enter / Space"}),e.jsx("div",{className:"miniSub",children:"Activate controls"})]})]})]})]}),e.jsxs("div",{className:"section",children:[e.jsx("h3",{className:"h3",children:"Default tab order"}),e.jsx("p",{className:"p",children:"By default, browsers follow the DOM order. That means focus moves in the order elements appear in your HTML. This is why writing clean, logical markup is the easiest way to get correct tab order."}),e.jsxs("ul",{className:"bullets",children:[e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),"Links, buttons, inputs, selects, and textareas are focusable by default"]}),e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),"Disabled form controls are not focusable"]}),e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),"If you visually reorder items using CSS, the tab order still follows the DOM order"]})]}),e.jsxs("div",{className:"codeBlock",children:[e.jsx("div",{className:"codeTitle",children:"Example: natural tab order"}),e.jsx("pre",{className:"code",children:`<a href="/docs">Docs</a>
<button type="button">Save</button>
<input type="text" placeholder="Search" />`})]})]}),e.jsxs("div",{className:"section",children:[e.jsx("h3",{className:"h3",children:"tabindex"}),e.jsx("p",{className:"p",children:"tabindex controls whether an element can be focused and how it participates in tab order."}),e.jsxs("div",{className:"table",children:[e.jsxs("div",{className:"row head",children:[e.jsx("div",{className:"cell",children:"Value"}),e.jsx("div",{className:"cell",children:"Meaning"}),e.jsx("div",{className:"cell",children:"When to use"})]}),e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"cell mono",children:"0"}),e.jsx("div",{className:"cell",children:"Element becomes focusable and follows normal DOM order"}),e.jsx("div",{className:"cell",children:"For custom UI elements like a div acting as a button"})]}),e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"cell mono",children:"-1"}),e.jsx("div",{className:"cell",children:"Element is focusable only via script, not Tab"}),e.jsx("div",{className:"cell",children:"For focus management inside modals, menus, and panels"})]}),e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"cell mono",children:"> 0"}),e.jsx("div",{className:"cell",children:"Changes the tab order to a manual priority list"}),e.jsx("div",{className:"cell",children:"Avoid in most cases, it creates confusing navigation"})]})]}),e.jsxs("div",{className:"callout warn",children:[e.jsx("span",{className:"calloutIcon",children:e.jsx(sr,{})}),e.jsxs("div",{className:"calloutText",children:[e.jsx("div",{className:"calloutTitle",children:"Avoid tabindex greater than 0"}),e.jsx("div",{className:"calloutSub",children:"It breaks expected navigation and becomes hard to maintain as the UI changes."})]})]}),e.jsxs("div",{className:"codeBlock",children:[e.jsx("div",{className:"codeTitle",children:"Example: making a custom element keyboard focusable"}),e.jsx("pre",{className:"code",children:`<div role="button" tabindex="0" aria-label="Open menu">
    Open menu
</div>`})]})]}),e.jsxs("div",{className:"section",children:[e.jsx("h3",{className:"h3",children:"Focus management"}),e.jsx("p",{className:"p",children:"Focus management means placing focus intentionally so keyboard users always know where they are. This matters most for dialogs, drawers, menus, and dynamic sections."}),e.jsxs("ul",{className:"bullets",children:[e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),"When a modal opens, move focus inside it"]}),e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),"Trap focus inside the modal while it is open"]}),e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),"When the modal closes, return focus to the element that opened it"]})]}),e.jsxs("div",{className:"codeBlock",children:[e.jsx("div",{className:"codeTitle",children:"Example: focus flow for a modal (plain explanation)"}),e.jsx("pre",{className:"code",children:`1) User activates "Open settings" button
2) Modal opens, focus moves to modal heading or first input
3) Tab cycles inside modal only
4) User presses Escape or clicks Close
5) Focus returns to "Open settings" button`})]}),e.jsxs("div",{className:"callout good",children:[e.jsx("span",{className:"calloutIcon",children:e.jsx(ae,{})}),e.jsxs("div",{className:"calloutText",children:[e.jsx("div",{className:"calloutTitle",children:"Simple rule"}),e.jsx("div",{className:"calloutSub",children:"If something appears on top of the page and demands attention, it should also take focus."})]})]})]}),e.jsxs("div",{className:"section",children:[e.jsx("h3",{className:"h3",children:"Quick checklist"}),e.jsxs("div",{className:"checkGrid",children:[e.jsxs("div",{className:"check",children:[e.jsx("span",{className:"checkIcon",children:e.jsx(ae,{})}),e.jsx("div",{className:"checkText",children:"Use semantic elements first (button, a, input)"})]}),e.jsxs("div",{className:"check",children:[e.jsx("span",{className:"checkIcon",children:e.jsx(ae,{})}),e.jsx("div",{className:"checkText",children:"Keep DOM order aligned with visual order"})]}),e.jsxs("div",{className:"check",children:[e.jsx("span",{className:"checkIcon",children:e.jsx(sr,{})}),e.jsx("div",{className:"checkText",children:"Avoid tabindex greater than 0"})]}),e.jsxs("div",{className:"check",children:[e.jsx("span",{className:"checkIcon",children:e.jsx(ae,{})}),e.jsx("div",{className:"checkText",children:"On dialogs, move focus in and return focus back"})]})]}),e.jsx("div",{className:"footerNote",children:"Tip: Test with keyboard only. Press Tab, Shift + Tab, Enter, Space, and Escape. If navigation feels weird, DOM order or focus handling is usually the reason."})]})]})]})},$g={Wrapper:J.section`
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
    `},Vg=()=>{const[a,c]=_.useState(!1),l=()=>c(p=>!p);return e.jsxs($g.Wrapper,{className:a?"open":"",children:[e.jsxs("button",{type:"button",className:"topicHeader",onClick:l,"aria-expanded":a,children:[e.jsx("span",{className:"chev",children:a?e.jsx(ce,{}):e.jsx(de,{})}),e.jsx("span",{className:"icon",children:e.jsx(ml,{})}),e.jsx("span",{className:"title",children:"Microdata"}),e.jsx("span",{className:"meta",children:a?"Collapse":"Expand"})]}),e.jsxs("div",{className:`topicBody ${a?"open":""}`,children:[e.jsxs("div",{className:"section",children:[e.jsx("h3",{className:"h3",children:"What is Microdata"}),e.jsx("p",{className:"p",children:'Microdata is a way to add structured information inside your HTML. It helps search engines understand what your content actually represents, not just how it looks. For example, instead of showing only text like "John Doe", you can tell the browser that this text represents a Person.'})]}),e.jsxs("div",{className:"section",children:[e.jsx("h3",{className:"h3",children:"Core attributes"}),e.jsxs("ul",{className:"bullets",children:[e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),"itemscope defines a new structured item"]}),e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),"itemtype defines the type of item"]}),e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),"itemprop defines properties of that item"]})]})]}),e.jsxs("div",{className:"section",children:[e.jsx("h3",{className:"h3",children:"Basic example"}),e.jsx("p",{className:"p",children:"Below is a simple example describing a person using Microdata."}),e.jsx("pre",{className:"code",children:`<div itemscope itemtype="https://schema.org/Person">
  <span itemprop="name">John Doe</span>
  <span itemprop="jobTitle">Web Developer</span>
  <a href="https://example.com" itemprop="url">
    Portfolio
  </a>
</div>`}),e.jsx("p",{className:"p",children:"Here: itemscope creates a new item. itemtype tells that the item is a Person. itemprop defines individual properties like name, jobTitle, and url."})]}),e.jsxs("div",{className:"section",children:[e.jsx("h3",{className:"h3",children:"Why it matters"}),e.jsx("p",{className:"p",children:"Search engines use structured data to generate rich results. For example, product ratings, prices, events, and author details can appear directly in search results when structured data is correctly defined."})]}),e.jsxs("div",{className:"section",children:[e.jsx("h3",{className:"h3",children:"Important note"}),e.jsx("p",{className:"p",children:"Microdata is one way to provide structured data. Modern applications often use JSON-LD instead, but understanding Microdata helps you understand how semantic metadata works directly inside HTML."})]})]})]})},Gg={Wrapper:J.section`
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
    `},Qg=()=>{const[a,c]=_.useState(!1),l=_.useMemo(()=>{const h="html-core-notes",f="https://example.com/html-core-notes",b="https://example.com/html-core-notes/about",C={"@context":"https://schema.org","@type":"Organization",name:h,url:f,logo:"https://example.com/images/logo.png"},k={"@context":"https://schema.org","@type":"Article",headline:"Structured Data in HTML (JSON-LD Basics)",description:"A beginner friendly explanation of structured data and JSON-LD with practical examples.",author:{"@type":"Person",name:"Ashish Ranjan"},datePublished:"2026-01-01",dateModified:"2026-01-01",mainEntityOfPage:b,publisher:{"@type":"Organization",name:h,logo:{"@type":"ImageObject",url:"https://example.com/images/logo.png"}}},A={"@context":"https://schema.org","@type":"FAQPage",mainEntity:[{"@type":"Question",name:"What is JSON-LD?",acceptedAnswer:{"@type":"Answer",text:"JSON-LD is a JSON format used to describe structured data for search engines and other tools."}},{"@type":"Question",name:"Where do I put JSON-LD in HTML?",acceptedAnswer:{"@type":"Answer",text:"Usually inside a script tag with type='application/ld+json', often placed in the head or near the end of body."}}]},W=R=>JSON.stringify(R,null,2);return{org:W(C),article:W(k),faq:W(A)}},[]),p=()=>c(h=>!h);return e.jsxs(Gg.Wrapper,{className:`topicCard ${a?"open":""}`,children:[e.jsxs("button",{type:"button",className:"topicHeader",onClick:p,"aria-expanded":a,children:[e.jsx("span",{className:"chev",children:a?e.jsx(ce,{}):e.jsx(de,{})}),e.jsx("span",{className:"icon",children:e.jsx(wu,{})}),e.jsx("span",{className:"title",children:"Structured Data"}),e.jsx("span",{className:"meta",children:a?"Collapse":"Expand"})]}),e.jsxs("div",{className:`topicBody ${a?"open":""}`,children:[e.jsxs("div",{className:"section",children:[e.jsx("h3",{className:"h3",children:"What is structured data"}),e.jsx("p",{className:"p",children:'Structured data is extra information you attach to a web page so machines can understand it clearly. Humans can read a page and guess what it is, but search engines prefer explicit signals like "this page is an article" or "this is an organization" or "these are FAQs".'}),e.jsx("p",{className:"p",children:"When structured data is correct, it can help search engines present better results. It does not guarantee any special display, but it improves clarity and reduces ambiguity."})]}),e.jsxs("div",{className:"section",children:[e.jsx("h3",{className:"h3",children:"JSON-LD basics"}),e.jsx("p",{className:"p",children:'JSON-LD stands for JavaScript Object Notation for Linked Data. It is the most common way to add structured data. You place a JSON object inside a script tag with type "application/ld+json". The browser ignores it for UI, but crawlers can read it.'}),e.jsxs("div",{className:"callouts",children:[e.jsxs("div",{className:"callout",children:[e.jsx("span",{className:"calloutIcon",children:e.jsx(We,{})}),e.jsxs("div",{className:"calloutText",children:[e.jsx("div",{className:"calloutTitle",children:"Where to put it"}),e.jsx("div",{className:"calloutSub",children:"Put the script in head or near the end of body. Head is common for site wide metadata."})]})]}),e.jsxs("div",{className:"callout",children:[e.jsx("span",{className:"calloutIcon",children:e.jsx(ae,{})}),e.jsxs("div",{className:"calloutText",children:[e.jsx("div",{className:"calloutTitle",children:"Keep it consistent"}),e.jsx("div",{className:"calloutSub",children:"The JSON-LD values should match what your page actually shows."})]})]}),e.jsxs("div",{className:"callout warn",children:[e.jsx("span",{className:"calloutIcon",children:e.jsx(sr,{})}),e.jsxs("div",{className:"calloutText",children:[e.jsx("div",{className:"calloutTitle",children:"Do not spam"}),e.jsx("div",{className:"calloutSub",children:"Do not add fake ratings, fake FAQs, or content not visible on the page."})]})]})]})]}),e.jsxs("div",{className:"section",children:[e.jsx("h3",{className:"h3",children:"Core fields you will see often"}),e.jsxs("ul",{className:"bullets",children:[e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),e.jsx("span",{className:"mono",children:"@context"})," sets the vocabulary, usually https://schema.org"]}),e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),e.jsx("span",{className:"mono",children:"@type"})," tells the content type like Article, Organization, Product, FAQPage"]}),e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),"Fields depend on the type, like"," ",e.jsx("span",{className:"mono",children:"headline"}),","," ",e.jsx("span",{className:"mono",children:"author"}),","," ",e.jsx("span",{className:"mono",children:"datePublished"})]})]})]}),e.jsxs("div",{className:"section",children:[e.jsx("h3",{className:"h3",children:"Example 1: Organization JSON-LD"}),e.jsx("p",{className:"p",children:"This is a simple way to describe your website or brand. Update the name, url, and logo."}),e.jsxs("div",{className:"codeBlock",children:[e.jsxs("div",{className:"codeTop",children:[e.jsx("span",{className:"codeIcon",children:e.jsx(Ae,{})}),e.jsx("span",{className:"codeTitle",children:"Organization"})]}),e.jsx("pre",{className:"pre",children:e.jsx("code",{children:`<script type="application/ld+json">
${l.org}
<\/script>`})})]})]}),e.jsxs("div",{className:"section",children:[e.jsx("h3",{className:"h3",children:"Example 2: Article JSON-LD"}),e.jsx("p",{className:"p",children:"Use Article for blog posts, notes pages, documentation pages, and long content. Keep dates and titles real."}),e.jsxs("div",{className:"codeBlock",children:[e.jsxs("div",{className:"codeTop",children:[e.jsx("span",{className:"codeIcon",children:e.jsx(Ae,{})}),e.jsx("span",{className:"codeTitle",children:"Article"})]}),e.jsx("pre",{className:"pre",children:e.jsx("code",{children:`<script type="application/ld+json">
${l.article}
<\/script>`})})]})]}),e.jsxs("div",{className:"section",children:[e.jsx("h3",{className:"h3",children:"Example 3: FAQPage JSON-LD"}),e.jsx("p",{className:"p",children:"If your page has real FAQs visible to users, you can describe them as a FAQPage."}),e.jsxs("div",{className:"codeBlock",children:[e.jsxs("div",{className:"codeTop",children:[e.jsx("span",{className:"codeIcon",children:e.jsx(Ae,{})}),e.jsx("span",{className:"codeTitle",children:"FAQPage"})]}),e.jsx("pre",{className:"pre",children:e.jsx("code",{children:`<script type="application/ld+json">
${l.faq}
<\/script>`})})]})]}),e.jsxs("div",{className:"section",children:[e.jsx("h3",{className:"h3",children:"Checklist"}),e.jsxs("ul",{className:"bullets",children:[e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),"Use"," ",e.jsx("span",{className:"mono",children:'type="application/ld+json"'})]}),e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),"Keep values consistent with page content"]}),e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),"Start small, then add more types as needed"]}),e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),"Prefer valid Schema.org types and fields"]})]})]})]})]})},qg={Wrapper:J.section`
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
    `},Yg=()=>{const[a,c]=_.useState(!1),l=()=>c(p=>!p);return e.jsxs(qg.Wrapper,{className:a?"open":"",children:[e.jsxs("button",{type:"button",className:"topicHeader",onClick:l,"aria-expanded":a,children:[e.jsx("span",{className:"chev",children:a?e.jsx(ce,{}):e.jsx(de,{})}),e.jsx("span",{className:"icon",children:e.jsx(ml,{})}),e.jsx("span",{className:"title",children:"Custom Data Attributes"}),e.jsx("span",{className:"meta",children:a?"Collapse":"Expand"})]}),e.jsxs("div",{className:`topicBody ${a?"open":""}`,children:[e.jsxs("div",{className:"section",children:[e.jsx("h3",{className:"h3",children:"What are data attributes"}),e.jsxs("p",{className:"p",children:["Custom data attributes allow you to store extra information directly inside HTML elements. They are written using the prefix ",e.jsx("strong",{children:"data-"}),". These attributes do not affect layout or styling automatically. They simply store custom values."]}),e.jsx("p",{className:"p",children:"This is useful when you want to attach metadata to elements that JavaScript can later read."}),e.jsx("div",{className:"codeBlock",children:e.jsx("pre",{children:`<div data-user-id="42" data-role="admin">
    Profile
</div>`})})]}),e.jsxs("div",{className:"section",children:[e.jsx("h3",{className:"h3",children:"Why use data attributes"}),e.jsxs("ul",{className:"bullets",children:[e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),"Store extra information without creating custom attributes"]}),e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),"Keep HTML valid and standard compliant"]}),e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),"Pass configuration data to JavaScript"]}),e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),"Avoid hardcoding values inside JS files"]})]})]}),e.jsxs("div",{className:"section",children:[e.jsx("h3",{className:"h3",children:"dataset API concept"}),e.jsxs("p",{className:"p",children:["In JavaScript, every element has a property called",e.jsx("strong",{children:"dataset"}),". It allows you to access all data attributes as an object."]}),e.jsx("div",{className:"codeBlock",children:e.jsx("pre",{children:`const element = document.querySelector("div");

console.log(element.dataset.userId);
console.log(element.dataset.role);`})}),e.jsxs("p",{className:"p",children:["Notice how ",e.jsx("strong",{children:"data-user-id"})," becomes",e.jsx("strong",{children:"dataset.userId"}),". Hyphenated names convert to camelCase automatically."]})]}),e.jsxs("div",{className:"section",children:[e.jsx("h3",{className:"h3",children:"How the conversion works"}),e.jsxs("ul",{className:"bullets",children:[e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),"data-user-id → dataset.userId"]}),e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),"data-product-name → dataset.productName"]}),e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),"data-custom-value → dataset.customValue"]})]})]}),e.jsxs("div",{className:"section",children:[e.jsx("h3",{className:"h3",children:"Updating values dynamically"}),e.jsx("div",{className:"codeBlock",children:e.jsx("pre",{children:'element.dataset.userId = "99";'})}),e.jsxs("p",{className:"p",children:["This updates the HTML attribute automatically to:",e.jsx("strong",{children:' data-user-id="99"'}),"."]})]}),e.jsxs("div",{className:"section",children:[e.jsx("h3",{className:"h3",children:"When to use it"}),e.jsx("p",{className:"p",children:"Use data attributes when you need small pieces of structured information attached to elements. Avoid storing large JSON objects directly in HTML. Keep it lightweight and purposeful."})]})]})]})},Kg={Wrapper:J.section`
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
    `},Jg=()=>{const[a,c]=_.useState(!1),l=()=>c(p=>!p);return e.jsxs(Kg.Wrapper,{className:`topicCard ${a?"open":""}`,children:[e.jsxs("button",{type:"button",className:"topicHeader",onClick:l,"aria-expanded":a,children:[e.jsx("span",{className:"chev",children:a?e.jsx(ce,{}):e.jsx(de,{})}),e.jsx("span",{className:"icon",children:e.jsx(gl,{})}),e.jsx("span",{className:"title",children:"Internationalization"}),e.jsx("span",{className:"meta",children:a?"Collapse":"Expand"})]}),e.jsxs("div",{className:`topicBody ${a?"open":""}`,children:[e.jsxs("div",{className:"section",children:[e.jsx("h3",{className:"h3",children:"What does Internationalization mean"}),e.jsx("p",{className:"p",children:"Internationalization (often written as i18n) means building your pages in a way that supports multiple languages and different writing directions. The web is not only English. HTML has built-in features to declare language and direction so browsers, screen readers, and search engines can interpret text correctly."})]}),e.jsxs("div",{className:"section",children:[e.jsx("h3",{className:"h3",children:"1. Language declaration with lang"}),e.jsxs("p",{className:"p",children:["The ",e.jsx("span",{className:"mono",children:"lang"})," attribute tells the browser and accessibility tools what language the content is in. This improves pronunciation in screen readers, improves text processing, and also helps SEO. You should set it at the top level on the"," ",e.jsx("span",{className:"mono",children:"html"})," element."]}),e.jsxs("div",{className:"callout",children:[e.jsxs("div",{className:"calloutTop",children:[e.jsx("span",{className:"calloutIcon",children:e.jsx(js,{})}),e.jsx("div",{className:"calloutTitle",children:"Example"})]}),e.jsx("pre",{className:"code",children:`<!DOCTYPE html>
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
</p>`})]})]}),e.jsxs("div",{className:"section",children:[e.jsx("h3",{className:"h3",children:"2. Text direction with dir"}),e.jsxs("p",{className:"p",children:["Some languages are written left-to-right (LTR) like English and Hindi. Some are right-to-left (RTL) like Arabic and Hebrew. The ",e.jsx("span",{className:"mono",children:"dir"})," ","attribute tells the browser the direction of text flow. You can set it on ",e.jsx("span",{className:"mono",children:"html"})," for the whole page or on a smaller element for a mixed page."]}),e.jsxs("div",{className:"callout",children:[e.jsxs("div",{className:"calloutTop",children:[e.jsx("span",{className:"calloutIcon",children:e.jsx(Wm,{})}),e.jsx("div",{className:"calloutTitle",children:"Examples"})]}),e.jsx("pre",{className:"code",children:`<!-- Entire page is RTL -->
<html lang="ar" dir="rtl">...</html>`}),e.jsx("pre",{className:"code",children:`<!-- Only one block is RTL -->
<p>
  English paragraph.
  <span lang="ar" dir="rtl">مرحبا بالعالم</span>
</p>`}),e.jsxs("p",{className:"tip",children:["Use ",e.jsx("span",{className:"mono",children:'dir="auto"'})," when you do not know the direction in advance (for example, user-generated content). The browser will guess direction based on the first strong character."]}),e.jsx("pre",{className:"code",children:'<p dir="auto">User typed text here...</p>'})]})]}),e.jsxs("div",{className:"section",children:[e.jsx("h3",{className:"h3",children:"3. Bidi isolation (mixed direction safety)"}),e.jsx("p",{className:"p",children:"Bidi means bidirectional text. Problems happen when LTR and RTL text are mixed in the same line. For example, an English sentence that includes an Arabic username or a Hebrew word can cause punctuation and ordering to look wrong. Bidi isolation helps keep the embedded text from messing up the surrounding text flow."}),e.jsxs("p",{className:"p",children:["The simplest and most common tool is the"," ",e.jsx("span",{className:"mono",children:"bdi"})," element. It isolates a piece of text and lets the browser render it safely. This is very useful for usernames, tags, and short user-generated strings."]}),e.jsxs("div",{className:"callout",children:[e.jsxs("div",{className:"calloutTop",children:[e.jsx("span",{className:"calloutIcon",children:e.jsx(At,{})}),e.jsx("div",{className:"calloutTitle",children:"Example"})]}),e.jsx("pre",{className:"code",children:`<p>
  User: <bdi>مرحبا</bdi> posted a comment.
</p>`}),e.jsxs("p",{className:"tip",children:["Use ",e.jsx("span",{className:"mono",children:"bdo"})," only when you intentionally want to force direction for a span of text. It overrides the normal bidi algorithm, so it is more dangerous if used incorrectly."]}),e.jsx("pre",{className:"code",children:`<p>
  Normal: ABC مرحبا 123
  <br />
  Forced RTL: <bdo dir="rtl">ABC مرحبا 123</bdo>
</p>`})]})]}),e.jsxs("div",{className:"section",children:[e.jsx("h3",{className:"h3",children:"Quick checklist"}),e.jsxs("ul",{className:"bullets",children:[e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),"Always set ",e.jsx("span",{className:"mono",children:"lang"})," on ",e.jsx("span",{className:"mono",children:"html"})]}),e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),"Use ",e.jsx("span",{className:"mono",children:"dir"})," for RTL pages or RTL blocks"]}),e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),"For user content, consider"," ",e.jsx("span",{className:"mono",children:'dir="auto"'})]}),e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),"Use ",e.jsx("span",{className:"mono",children:"bdi"})," for mixed direction values like usernames"]}),e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),"Avoid overusing ",e.jsx("span",{className:"mono",children:"bdo"})," ","unless you truly need direction override"]})]})]})]})]})},Xg={Wrapper:J.section`
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
    `},Zg=()=>{const[a,c]=_.useState(!1),l=()=>c(p=>!p);return e.jsxs(Xg.Wrapper,{className:a?"open":"",children:[e.jsxs("button",{type:"button",className:"topicHeader",onClick:l,"aria-expanded":a,children:[e.jsx("span",{className:"chev",children:a?e.jsx(ce,{}):e.jsx(de,{})}),e.jsx("span",{className:"icon",children:e.jsx(sr,{})}),e.jsx("span",{className:"title",children:"Deprecated Elements"}),e.jsx("span",{className:"meta",children:a?"Collapse":"Expand"})]}),e.jsxs("div",{className:`topicBody ${a?"open":""}`,children:[e.jsxs("div",{className:"section",children:[e.jsx("p",{className:"p",children:"Deprecated elements are old HTML tags that you should avoid using in modern projects. Some are fully removed from the HTML standard, and some still work in browsers only for backward compatibility. The problem is that they reduce accessibility, make code harder to maintain, and mix presentation with structure."}),e.jsxs("div",{className:"note",children:[e.jsx("span",{className:"noteIcon",children:e.jsx(us,{})}),e.jsxs("div",{className:"noteText",children:[e.jsx("div",{className:"noteTitle",children:"Rule"}),e.jsx("div",{className:"noteSub",children:"Use HTML for structure and meaning, use CSS for styling, and use JavaScript for behavior."})]})]})]}),e.jsxs("div",{className:"section",children:[e.jsx("h3",{className:"h3",children:"1) font"}),e.jsxs("p",{className:"p",children:["The ",e.jsx("span",{className:"mono",children:"font"})," tag was used to set text color, size, and face directly in HTML. This is deprecated because styling belongs in CSS."]}),e.jsxs("div",{className:"twoCol",children:[e.jsxs("div",{className:"card bad",children:[e.jsx("div",{className:"cardHead",children:e.jsxs("span",{className:"badge bad",children:[e.jsx(us,{})," Avoid"]})}),e.jsx("pre",{className:"code",children:`<font color="red" size="4" face="Arial">
    Hello
</font>`})]}),e.jsxs("div",{className:"card good",children:[e.jsx("div",{className:"cardHead",children:e.jsxs("span",{className:"badge good",children:[e.jsx(ae,{})," Do this"]})}),e.jsx("pre",{className:"code",children:`<p class="highlight">Hello</p>

/* CSS */
.highlight {
    color: red;
    font-size: 18px;
    font-family: Arial, sans-serif;
}`})]})]})]}),e.jsxs("div",{className:"section",children:[e.jsx("h3",{className:"h3",children:"2) center"}),e.jsxs("p",{className:"p",children:["The ",e.jsx("span",{className:"mono",children:"center"})," tag was used to center text or elements. This is deprecated because layout and alignment belong in CSS."]}),e.jsxs("div",{className:"twoCol",children:[e.jsxs("div",{className:"card bad",children:[e.jsx("div",{className:"cardHead",children:e.jsxs("span",{className:"badge bad",children:[e.jsx(us,{})," Avoid"]})}),e.jsx("pre",{className:"code",children:`<center>
    <h2>Welcome</h2>
</center>`})]}),e.jsxs("div",{className:"card good",children:[e.jsx("div",{className:"cardHead",children:e.jsxs("span",{className:"badge good",children:[e.jsx(ae,{})," Do this"]})}),e.jsx("pre",{className:"code",children:`<h2 class="centerText">Welcome</h2>

/* CSS */
.centerText {
    text-align: center;
}`})]})]})]}),e.jsxs("div",{className:"section",children:[e.jsx("h3",{className:"h3",children:"3) marquee"}),e.jsxs("p",{className:"p",children:["The ",e.jsx("span",{className:"mono",children:"marquee"})," tag created scrolling text. It is not part of modern HTML standards, and it is bad for readability and accessibility."]}),e.jsxs("div",{className:"twoCol",children:[e.jsxs("div",{className:"card bad",children:[e.jsx("div",{className:"cardHead",children:e.jsxs("span",{className:"badge bad",children:[e.jsx(us,{})," Avoid"]})}),e.jsx("pre",{className:"code",children:`<marquee behavior="scroll" direction="left">
    Breaking News
</marquee>`})]}),e.jsxs("div",{className:"card good",children:[e.jsx("div",{className:"cardHead",children:e.jsxs("span",{className:"badge good",children:[e.jsx(ae,{})," Do this"]})}),e.jsx("pre",{className:"code",children:`<div class="ticker" aria-label="Announcements">
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
}`})]})]}),e.jsx("p",{className:"p hint",children:"Better alternative for important messages is a normal banner or alert instead of moving text."})]}),e.jsxs("div",{className:"section",children:[e.jsx("h3",{className:"h3",children:"4) frameset"}),e.jsxs("p",{className:"p",children:[e.jsx("span",{className:"mono",children:"frameset"})," and",e.jsx("span",{className:"mono",children:"frame"})," were used to split a page into multiple frames. This is obsolete and causes major issues with navigation, bookmarking, security, and accessibility."]}),e.jsxs("div",{className:"twoCol",children:[e.jsxs("div",{className:"card bad",children:[e.jsx("div",{className:"cardHead",children:e.jsxs("span",{className:"badge bad",children:[e.jsx(us,{})," Avoid"]})}),e.jsx("pre",{className:"code",children:`<frameset cols="25%,75%">
    <frame src="menu.html" />
    <frame src="content.html" />
</frameset>`})]}),e.jsxs("div",{className:"card good",children:[e.jsx("div",{className:"cardHead",children:e.jsxs("span",{className:"badge good",children:[e.jsx(ae,{})," Do this"]})}),e.jsx("pre",{className:"code",children:`<!-- Use normal layout + CSS -->
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
}`})]})]})]}),e.jsxs("div",{className:"section",children:[e.jsx("h3",{className:"h3",children:"5) applet"}),e.jsxs("p",{className:"p",children:["The ",e.jsx("span",{className:"mono",children:"applet"})," tag was used to run Java applets in the browser. It is obsolete because modern browsers do not support it, and it is unsafe."]}),e.jsxs("div",{className:"twoCol",children:[e.jsxs("div",{className:"card bad",children:[e.jsx("div",{className:"cardHead",children:e.jsxs("span",{className:"badge bad",children:[e.jsx(us,{})," Avoid"]})}),e.jsx("pre",{className:"code",children:`<applet code="MyApplet.class" width="300" height="200">
</applet>`})]}),e.jsxs("div",{className:"card good",children:[e.jsx("div",{className:"cardHead",children:e.jsxs("span",{className:"badge good",children:[e.jsx(ae,{})," Do this"]})}),e.jsx("pre",{className:"code",children:`<!-- Use modern web tech -->
<canvas id="demoCanvas"></canvas>

<!-- Or embed a safe, trusted source -->
<iframe
    title="Embedded content"
    src="https://example.com"
    sandbox
></iframe>`})]})]})]}),e.jsx("div",{className:"section",children:e.jsxs("div",{className:"summary",children:[e.jsx("div",{className:"summaryTitle",children:"Quick summary"}),e.jsxs("ul",{className:"summaryList",children:[e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),"Deprecated tags mix styling or old tech into HTML."]}),e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),"Use semantic HTML plus CSS for layout and styling."]}),e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),"Avoid moving text and frame based layouts."]})]})]})})]})]})},ev={Wrapper:J.section`
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
    `},rv=()=>{const[a,c]=_.useState(!1),l=()=>c(p=>!p);return e.jsxs(ev.Wrapper,{className:`topicCard ${a?"open":""}`,children:[e.jsxs("button",{type:"button",className:"topicHeader",onClick:l,"aria-expanded":a,children:[e.jsx("span",{className:"chev",children:a?e.jsx(ce,{}):e.jsx(de,{})}),e.jsx("span",{className:"icon",children:e.jsx(mu,{})}),e.jsx("span",{className:"title",children:"HTML Living Standard"}),e.jsx("span",{className:"meta",children:a?"Collapse":"Expand"})]}),e.jsxs("div",{className:`topicBody ${a?"open":""}`,children:[e.jsxs("div",{className:"section",children:[e.jsx("h3",{className:"h3",children:'What "living standard" means'}),e.jsx("p",{className:"p",children:"A living standard means the specification is updated continuously. Instead of publishing a new big numbered version every few years, the spec changes in small updates whenever the web platform evolves. This matches how browsers actually ship features: incrementally, on their own release cycles."}),e.jsxs("div",{className:"callout",children:[e.jsx("span",{className:"calloutIcon",children:e.jsx(Jm,{})}),e.jsxs("div",{className:"calloutText",children:[e.jsx("div",{className:"calloutTitle",children:"Why this approach exists"}),e.jsx("div",{className:"calloutSub",children:"The web changes fast. A living standard tries to keep the official rules aligned with real browser behavior."})]})]})]}),e.jsxs("div",{className:"section",children:[e.jsx("h3",{className:"h3",children:"WHATWG vs W3C (in simple terms)"}),e.jsx("p",{className:"p",children:"Both WHATWG and W3C are standards organizations, but they historically had different approaches to HTML. WHATWG maintains the HTML Living Standard as a single, continuously updated document. W3C also publishes web standards, and for a long time it produced its own HTML specs as well."}),e.jsxs("div",{className:"twoCol",children:[e.jsxs("div",{className:"col",children:[e.jsxs("div",{className:"colTop",children:[e.jsx("span",{className:"colIcon",children:e.jsx(Fp,{})}),e.jsx("div",{className:"colTitle",children:"WHATWG"})]}),e.jsxs("ul",{className:"list",children:[e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),"Maintains HTML as a living standard"]}),e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),"Focuses on matching browser reality"]}),e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),"One main spec, updated continuously"]})]})]}),e.jsxs("div",{className:"col",children:[e.jsxs("div",{className:"colTop",children:[e.jsx("span",{className:"colIcon",children:e.jsx(Fp,{})}),e.jsx("div",{className:"colTitle",children:"W3C"})]}),e.jsxs("ul",{className:"list",children:[e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),"Publishes many web standards (HTML, CSS, Web APIs, etc.)"]}),e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),"More formal processes and recommendations"]}),e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),"Works with the web community and vendors"]})]})]})]}),e.jsxs("div",{className:"note",children:[e.jsx("span",{className:"noteIcon",children:e.jsx(sr,{})}),e.jsx("div",{className:"noteText",children:"The exact relationship between WHATWG and W3C has changed over time. For practical development, the key idea is that browsers tend to follow the WHATWG HTML Living Standard."})]})]}),e.jsxs("div",{className:"section",children:[e.jsx("h3",{className:"h3",children:"Why the spec matters"}),e.jsx("p",{className:"p",children:"Most of the time you do not need to read the spec to build websites. But the spec becomes useful when you want clarity, correctness, or confidence. It answers questions like: what does this element mean, what are the rules for parsing it, and what should browsers do in edge cases."}),e.jsxs("div",{className:"reasonGrid",children:[e.jsxs("div",{className:"reason",children:[e.jsx("span",{className:"reasonIcon",children:e.jsx(ae,{})}),e.jsx("div",{className:"reasonTitle",children:"Clear rules"}),e.jsx("div",{className:"reasonSub",children:"Removes guesswork about what is valid and how browsers interpret markup."})]}),e.jsxs("div",{className:"reason",children:[e.jsx("span",{className:"reasonIcon",children:e.jsx(ae,{})}),e.jsx("div",{className:"reasonTitle",children:"Better debugging"}),e.jsx("div",{className:"reasonSub",children:"Helps you understand weird behaviors when the DOM does not look like you expected."})]}),e.jsxs("div",{className:"reason",children:[e.jsx("span",{className:"reasonIcon",children:e.jsx(ae,{})}),e.jsx("div",{className:"reasonTitle",children:"Accessibility and semantics"}),e.jsx("div",{className:"reasonSub",children:"Helps you pick the right element and structure for meaning, not just appearance."})]}),e.jsxs("div",{className:"reason",children:[e.jsx("span",{className:"reasonIcon",children:e.jsx(ae,{})}),e.jsx("div",{className:"reasonTitle",children:"Future-proofing"}),e.jsx("div",{className:"reasonSub",children:"You get a better sense of what is stable, what is experimental, and what will be supported."})]})]})]}),e.jsxs("div",{className:"section",children:[e.jsx("h3",{className:"h3",children:"When should a beginner care"}),e.jsx("p",{className:"p",children:"You should care about the spec when you hit confusion. If a tutorial conflicts with another tutorial, the spec is the most neutral source of truth. Also, if you want to understand HTML beyond copy paste, the spec gives you the mental model behind the platform."}),e.jsxs("ul",{className:"list",children:[e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),"When something works differently in different browsers"]}),e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),"When markup behaves strangely after rendering"]}),e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),'When you want the "why" behind the rule']})]})]}),e.jsxs("div",{className:"section",children:[e.jsx("h3",{className:"h3",children:"Practical takeaway"}),e.jsx("p",{className:"p",children:"Learn the core HTML elements and semantics first. Use MDN for day-to-day reference. When you want deeper clarity, the HTML Living Standard is the detailed rule book that browser engineers use to keep behavior consistent."})]})]})]})},tv={Wrapper:J.section`
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
    `},sv=()=>{const[a,c]=_.useState(!1),l=()=>c(p=>!p);return e.jsxs(tv.Wrapper,{className:`topicCard ${a?"open":""}`,children:[e.jsxs("button",{type:"button",className:"topicHeader",onClick:l,"aria-expanded":a,children:[e.jsx("span",{className:"chev",children:a?e.jsx(ce,{}):e.jsx(de,{})}),e.jsx("span",{className:"icon",children:e.jsx(vf,{})}),e.jsx("span",{className:"title",children:"SEO fundamentals"}),e.jsx("span",{className:"meta",children:a?"Collapse":"Expand"})]}),e.jsxs("div",{className:`topicBody ${a?"open":""}`,children:[e.jsxs("div",{className:"section",children:[e.jsx("h3",{className:"h3",children:"What SEO means in HTML"}),e.jsx("p",{className:"p",children:"SEO means making your pages easy to understand for both humans and search engines. In HTML, the biggest SEO wins come from clean structure, correct headings, and useful metadata. Search engines read your HTML, try to understand what the page is about, and then decide how to show it in results."}),e.jsxs("div",{className:"tips",children:[e.jsxs("div",{className:"tip",children:[e.jsx("span",{className:"tipIcon ok",children:e.jsx(ae,{})}),e.jsx("div",{className:"tipText",children:"Use semantic tags and a clear page structure"})]}),e.jsxs("div",{className:"tip",children:[e.jsx("span",{className:"tipIcon ok",children:e.jsx(ae,{})}),e.jsx("div",{className:"tipText",children:"Write a helpful title and meta description"})]}),e.jsxs("div",{className:"tip",children:[e.jsx("span",{className:"tipIcon warn",children:e.jsx(sr,{})}),e.jsx("div",{className:"tipText",children:"Avoid multiple h1 and random heading jumps"})]})]})]}),e.jsxs("div",{className:"section",children:[e.jsxs("div",{className:"h3Row",children:[e.jsx("span",{className:"h3Icon",children:e.jsx(vo,{})}),e.jsx("h3",{className:"h3",children:"Semantic headings"})]}),e.jsx("p",{className:"p",children:"Headings are one of the strongest signals about content structure. Use them like an outline. h1 is the main page topic. h2 are major sections. h3 are subsections, and so on. Headings help users scan the page and help search engines understand what is important."}),e.jsxs("ul",{className:"bullets",children:[e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),"Use one clear h1 per page (recommended)"]}),e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),"Do not skip levels without a reason (h2 to h4)"]}),e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),"Do not use headings only for styling"]})]}),e.jsxs("div",{className:"codeBlock",children:[e.jsx("div",{className:"codeTitle",children:"Example structure"}),e.jsx("pre",{className:"code",children:`<h1>HTML Core Notes</h1>

<section>
  <h2>Forms</h2>
  <h3>Input types</h3>
  <h3>Validation</h3>
</section>

<section>
  <h2>Tables</h2>
  <h3>thead, tbody, tfoot</h3>
</section>`})]})]}),e.jsxs("div",{className:"section",children:[e.jsxs("div",{className:"h3Row",children:[e.jsx("span",{className:"h3Icon",children:e.jsx(fl,{})}),e.jsx("h3",{className:"h3",children:"Meta description"})]}),e.jsx("p",{className:"p",children:"The meta description is a short summary of the page. It often appears in Google results under the title. It does not directly guarantee better ranking, but it strongly affects clicks. A good description makes the page look relevant and trustworthy."}),e.jsxs("ul",{className:"bullets",children:[e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),"Keep it clear and specific"]}),e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),"Usually around 140 to 160 characters is a good target"]}),e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),"Make it unique per page"]})]}),e.jsxs("div",{className:"codeBlock",children:[e.jsx("div",{className:"codeTitle",children:"Example"}),e.jsx("pre",{className:"code",children:`<head>
  <title>HTML Core Notes</title>
  <meta
    name="description"
    content="At-a-glance HTML revision notes with clean examples for beginners and interviews."
  />
</head>`})]})]}),e.jsxs("div",{className:"section",children:[e.jsxs("div",{className:"h3Row",children:[e.jsx("span",{className:"h3Icon",children:e.jsx(uf,{})}),e.jsx("h3",{className:"h3",children:"Open Graph basics"})]}),e.jsx("p",{className:"p",children:"Open Graph meta tags control how your page looks when someone shares it on platforms like WhatsApp, Facebook, LinkedIn, and other apps. Without Open Graph, the platform guesses. With Open Graph, you define the title, description, image, and the URL."}),e.jsxs("ul",{className:"bullets",children:[e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),"og:title is the share title"]}),e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),"og:description is the share summary"]}),e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),"og:image is the preview image"]}),e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),"og:url is the canonical link for sharing"]})]}),e.jsxs("div",{className:"codeBlock",children:[e.jsx("div",{className:"codeTitle",children:"Minimal Open Graph set"}),e.jsx("pre",{className:"code",children:`<head>
  <meta property="og:type" content="website" />
  <meta property="og:title" content="HTML Core Notes" />
  <meta property="og:description" content="At-a-glance HTML revision notes." />
  <meta property="og:image" content="https://your-site.com/og-image.png" />
  <meta property="og:url" content="https://your-site.com/html-core-notes/" />
</head>`})]}),e.jsxs("div",{className:"note",children:[e.jsx("span",{className:"noteIcon",children:e.jsx(sr,{})}),e.jsx("div",{className:"noteText",children:"Tip: Use a proper image size for sharing previews. Many platforms work best with 1200x630 images."})]})]}),e.jsxs("div",{className:"section",children:[e.jsx("h3",{className:"h3",children:"Quick checklist"}),e.jsxs("div",{className:"checkGrid",children:[e.jsxs("div",{className:"check",children:[e.jsx("span",{className:"checkIcon",children:e.jsx(ae,{})}),"One clear h1"]}),e.jsxs("div",{className:"check",children:[e.jsx("span",{className:"checkIcon",children:e.jsx(ae,{})}),"Logical heading order"]}),e.jsxs("div",{className:"check",children:[e.jsx("span",{className:"checkIcon",children:e.jsx(ae,{})}),"Unique meta description"]}),e.jsxs("div",{className:"check",children:[e.jsx("span",{className:"checkIcon",children:e.jsx(ae,{})}),"Open Graph tags set"]})]})]})]})]})},ov={Wrapper:J.section`
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
    `},av=()=>{const[a,c]=_.useState(!1),l=()=>c(p=>!p);return e.jsxs(ov.Wrapper,{className:`topicCard ${a?"open":""}`,children:[e.jsxs("button",{type:"button",className:"topicHeader",onClick:l,"aria-expanded":a,children:[e.jsx("span",{className:"chev",children:a?e.jsx(ce,{}):e.jsx(de,{})}),e.jsx("span",{className:"icon",children:e.jsx(At,{})}),e.jsx("span",{className:"title",children:"Security basics"}),e.jsx("span",{className:"meta",children:a?"Collapse":"Expand"})]}),e.jsxs("div",{className:`topicBody ${a?"open":""}`,children:[e.jsxs("div",{className:"intro",children:[e.jsxs("div",{className:"introLeft",children:[e.jsxs("div",{className:"pill",children:[e.jsx("span",{className:"pillIcon",children:e.jsx(ho,{})}),"Safe HTML habits"]}),e.jsx("p",{className:"p",children:"HTML is not just about structure. The way you use links and embeds can create security problems. This topic covers three practical basics that come up often in real websites."})]}),e.jsxs("div",{className:"introRight",children:[e.jsxs("div",{className:"mini",children:[e.jsx("span",{className:"miniIcon",children:e.jsx(sr,{})}),e.jsxs("div",{className:"miniText",children:[e.jsx("div",{className:"miniTitle",children:"XSS"}),e.jsx("div",{className:"miniSub",children:"Injected scripts"})]})]}),e.jsxs("div",{className:"mini",children:[e.jsx("span",{className:"miniIcon",children:e.jsx(hs,{})}),e.jsxs("div",{className:"miniText",children:[e.jsx("div",{className:"miniTitle",children:"noopener"}),e.jsx("div",{className:"miniSub",children:"Safer new tabs"})]})]}),e.jsxs("div",{className:"mini",children:[e.jsx("span",{className:"miniIcon",children:e.jsx(ho,{})}),e.jsxs("div",{className:"miniText",children:[e.jsx("div",{className:"miniTitle",children:"sandbox"}),e.jsx("div",{className:"miniSub",children:"Safer iframes"})]})]})]})]}),e.jsxs("div",{className:"section",children:[e.jsx("h3",{className:"h3",children:"1) XSS concept"}),e.jsx("p",{className:"p",children:"XSS means Cross Site Scripting. It happens when an attacker manages to inject JavaScript into a page that other users visit. The browser runs that injected code as if it came from your site, which can lead to stolen cookies, account takeover, or fake UI prompts."}),e.jsxs("div",{className:"callout",children:[e.jsxs("div",{className:"calloutTitle",children:[e.jsx("span",{className:"calloutIcon",children:e.jsx(sr,{})}),"The core idea"]}),e.jsx("div",{className:"calloutText",children:"If user input becomes part of HTML without proper escaping or sanitization, the user input can turn into executable script."})]}),e.jsxs("div",{className:"sectionSub",children:[e.jsx("h4",{className:"h4",children:"Common places XSS sneaks in"}),e.jsxs("ul",{className:"bullets",children:[e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),"Comments, reviews, usernames, profile fields"]}),e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),"Search results, query params, dynamic templates"]}),e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),"Using innerHTML with untrusted data"]})]})]}),e.jsxs("div",{className:"sectionSub",children:[e.jsx("h4",{className:"h4",children:"How to reduce risk"}),e.jsxs("ul",{className:"bullets",children:[e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),"Escape output when inserting user text into HTML"]}),e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),"Avoid rendering raw HTML from users"]}),e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),"Use safe templating and frameworks that escape by default"]}),e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),"Add Content Security Policy later when backend exists"]})]})]}),e.jsxs("div",{className:"codeBlock",children:[e.jsxs("div",{className:"codeTop",children:[e.jsx("span",{className:"codeIcon",children:e.jsx(Ae,{})}),"Bad vs safer pattern"]}),e.jsx("pre",{className:"code",children:`// Bad: untrusted string becomes HTML
element.innerHTML = userInput;

// Safer: treat it as text, not markup
element.textContent = userInput;`})]})]}),e.jsxs("div",{className:"section",children:[e.jsx("h3",{className:"h3",children:'2) rel="noopener" (and why it matters)'}),e.jsx("p",{className:"p",children:'When you open a link in a new tab using target="_blank", the opened page can sometimes access window.opener. That means the new page may be able to redirect the original page to a phishing site or modify it in risky ways.'}),e.jsxs("div",{className:"callout",children:[e.jsxs("div",{className:"calloutTitle",children:[e.jsx("span",{className:"calloutIcon",children:e.jsx(hs,{})}),"The fix"]}),e.jsx("div",{className:"calloutText",children:'Add rel="noopener" to break the connection between the new tab and your page.'})]}),e.jsxs("div",{className:"codeBlock",children:[e.jsxs("div",{className:"codeTop",children:[e.jsx("span",{className:"codeIcon",children:e.jsx(Ae,{})}),"Recommended external link"]}),e.jsx("pre",{className:"code",children:`<a
  href="https://example.com"
  target="_blank"
  rel="noopener noreferrer"
>
  Visit example
</a>`})]}),e.jsx("p",{className:"p muted",children:'Note: rel="noreferrer" also removes the referrer header in many cases. In practice, people commonly use both: noopener noreferrer.'})]}),e.jsxs("div",{className:"section",children:[e.jsx("h3",{className:"h3",children:"3) sandbox iframe"}),e.jsx("p",{className:"p",children:"iframes embed another page inside your page. That can be risky because the embedded page might run scripts, attempt navigation, open popups, or request permissions. The sandbox attribute restricts what the iframe is allowed to do."}),e.jsxs("div",{className:"callout",children:[e.jsxs("div",{className:"calloutTitle",children:[e.jsx("span",{className:"calloutIcon",children:e.jsx(ho,{})}),"Default behavior"]}),e.jsx("div",{className:"calloutText",children:"sandbox without any values applies strong restrictions. You then opt in only to the minimum permissions needed."})]}),e.jsxs("div",{className:"sectionSub",children:[e.jsx("h4",{className:"h4",children:"Common sandbox tokens"}),e.jsxs("ul",{className:"bullets",children:[e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),"allow-scripts: lets scripts run in the iframe"]}),e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),"allow-forms: allows form submission"]}),e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),"allow-same-origin: treats content as same origin (use carefully)"]}),e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),"allow-popups: allows opening new windows"]})]})]}),e.jsxs("div",{className:"codeBlock",children:[e.jsxs("div",{className:"codeTop",children:[e.jsx("span",{className:"codeIcon",children:e.jsx(Ae,{})}),"Safer embed example"]}),e.jsx("pre",{className:"code",children:`<iframe
  src="https://example.com/embed"
  title="Embedded content"
  sandbox="allow-scripts allow-forms"
  referrerpolicy="no-referrer"
></iframe>`})]}),e.jsx("p",{className:"p muted",children:"Tip: Keep iframe permissions tight. Add only what you need. For untrusted content, start with sandbox and gradually allow features."})]}),e.jsxs("div",{className:"footerNote",children:[e.jsx("div",{className:"footerTitle",children:"Quick checklist"}),e.jsxs("ul",{className:"checks",children:[e.jsxs("li",{children:[e.jsx("span",{className:"checkDot"}),"Treat user input as text, not HTML"]}),e.jsxs("li",{children:[e.jsx("span",{className:"checkDot"}),'Use rel="noopener noreferrer" with target="_blank"']}),e.jsxs("li",{children:[e.jsx("span",{className:"checkDot"}),"Use sandbox for embedded iframes"]})]})]})]})]})},nv=()=>e.jsxs(Ji.Wrapper,{children:[e.jsx(Ji.Header,{children:e.jsx(Nf,{})}),e.jsxs(Ji.Main,{id:"notes-main",children:[e.jsxs("div",{className:"contentWrapper",children:[e.jsx(Mf,{}),e.jsx("h1",{className:"category",id:"foundation",children:"Foundation"}),e.jsx(Pf,{}),e.jsx(_f,{}),e.jsx(Rf,{}),e.jsx(Ff,{}),e.jsx("h1",{className:"category",id:"text-content",children:"Text Content"}),e.jsx(Df,{}),e.jsx($f,{}),e.jsx(Gf,{}),e.jsx("h1",{className:"category",children:"Links and Navigations"}),e.jsx(qf,{}),e.jsx(Kf,{}),e.jsx("h1",{className:"category",children:"Media and Embedded Content"}),e.jsx(Xf,{}),e.jsx(eg,{}),e.jsx(tg,{}),e.jsx(og,{}),e.jsx("h1",{className:"category",children:"Structure and Semantics"}),e.jsx(ig,{}),e.jsx(cg,{}),e.jsx(pg,{}),e.jsx(hg,{}),e.jsx("h1",{className:"category",children:"Tables"}),e.jsx(mg,{}),e.jsx("h1",{className:"category",id:"forms",children:"Forms"}),e.jsx(gg,{}),e.jsx(yg,{}),e.jsx(bg,{}),e.jsx(wg,{}),e.jsx(Sg,{}),e.jsx("h1",{className:"category",children:"Meta Data"}),e.jsx(Lg,{}),e.jsx(Ig,{}),e.jsx(Mg,{}),e.jsx("h1",{className:"category",children:"Scripts and Performance"}),e.jsx(Pg,{}),e.jsx(_g,{}),e.jsx("h1",{className:"category",children:"Accessibility"}),e.jsx(Rg,{}),e.jsx(Fg,{}),e.jsx(Ug,{}),e.jsx("h1",{className:"category",id:"advanced",children:"Advanced"}),e.jsx(Vg,{}),e.jsx(Qg,{}),e.jsx(Yg,{}),e.jsx(Jg,{}),e.jsx(Zg,{}),e.jsx(rv,{}),e.jsx(sv,{}),e.jsx(av,{})]}),e.jsx("div",{className:"footerWrapper",children:e.jsx(zf,{})})]}),e.jsx(If,{})]});zx.createRoot(document.getElementById("root")).render(e.jsx(e.Fragment,{children:e.jsx(nv,{})}));

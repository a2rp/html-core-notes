(function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const m of document.querySelectorAll('link[rel="modulepreload"]'))f(m);new MutationObserver(m=>{for(const w of m)if(w.type==="childList")for(const C of w.addedNodes)C.tagName==="LINK"&&C.rel==="modulepreload"&&f(C)}).observe(document,{childList:!0,subtree:!0});function a(m){const w={};return m.integrity&&(w.integrity=m.integrity),m.referrerPolicy&&(w.referrerPolicy=m.referrerPolicy),m.crossOrigin==="use-credentials"?w.credentials="include":m.crossOrigin==="anonymous"?w.credentials="omit":w.credentials="same-origin",w}function f(m){if(m.ep)return;m.ep=!0;const w=a(m);fetch(m.href,w)}})();function Dp(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var js={exports:{}},Yr={},ws={exports:{}},ie={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fc;function Fp(){if(Fc)return ie;Fc=1;var s=Symbol.for("react.element"),c=Symbol.for("react.portal"),a=Symbol.for("react.fragment"),f=Symbol.for("react.strict_mode"),m=Symbol.for("react.profiler"),w=Symbol.for("react.provider"),C=Symbol.for("react.context"),b=Symbol.for("react.forward_ref"),T=Symbol.for("react.suspense"),X=Symbol.for("react.memo"),G=Symbol.for("react.lazy"),P=Symbol.iterator;function j(g){return g===null||typeof g!="object"?null:(g=P&&g[P]||g["@@iterator"],typeof g=="function"?g:null)}var D={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},H=Object.assign,B={};function V(g,k,ee){this.props=g,this.context=k,this.refs=B,this.updater=ee||D}V.prototype.isReactComponent={},V.prototype.setState=function(g,k){if(typeof g!="object"&&typeof g!="function"&&g!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,g,k,"setState")},V.prototype.forceUpdate=function(g){this.updater.enqueueForceUpdate(this,g,"forceUpdate")};function re(){}re.prototype=V.prototype;function le(g,k,ee){this.props=g,this.context=k,this.refs=B,this.updater=ee||D}var q=le.prototype=new re;q.constructor=le,H(q,V.prototype),q.isPureReactComponent=!0;var L=Array.isArray,J=Object.prototype.hasOwnProperty,Q={current:null},R={key:!0,ref:!0,__self:!0,__source:!0};function U(g,k,ee){var te,ae={},oe=null,ce=null;if(k!=null)for(te in k.ref!==void 0&&(ce=k.ref),k.key!==void 0&&(oe=""+k.key),k)J.call(k,te)&&!R.hasOwnProperty(te)&&(ae[te]=k[te]);var ue=arguments.length-2;if(ue===1)ae.children=ee;else if(1<ue){for(var he=Array(ue),Ne=0;Ne<ue;Ne++)he[Ne]=arguments[Ne+2];ae.children=he}if(g&&g.defaultProps)for(te in ue=g.defaultProps,ue)ae[te]===void 0&&(ae[te]=ue[te]);return{$$typeof:s,type:g,key:oe,ref:ce,props:ae,_owner:Q.current}}function ge(g,k){return{$$typeof:s,type:g.type,key:k,ref:g.ref,props:g.props,_owner:g._owner}}function Pe(g){return typeof g=="object"&&g!==null&&g.$$typeof===s}function se(g){var k={"=":"=0",":":"=2"};return"$"+g.replace(/[=:]/g,function(ee){return k[ee]})}var _e=/\/+/g;function ke(g,k){return typeof g=="object"&&g!==null&&g.key!=null?se(""+g.key):k.toString(36)}function $e(g,k,ee,te,ae){var oe=typeof g;(oe==="undefined"||oe==="boolean")&&(g=null);var ce=!1;if(g===null)ce=!0;else switch(oe){case"string":case"number":ce=!0;break;case"object":switch(g.$$typeof){case s:case c:ce=!0}}if(ce)return ce=g,ae=ae(ce),g=te===""?"."+ke(ce,0):te,L(ae)?(ee="",g!=null&&(ee=g.replace(_e,"$&/")+"/"),$e(ae,k,ee,"",function(Ne){return Ne})):ae!=null&&(Pe(ae)&&(ae=ge(ae,ee+(!ae.key||ce&&ce.key===ae.key?"":(""+ae.key).replace(_e,"$&/")+"/")+g)),k.push(ae)),1;if(ce=0,te=te===""?".":te+":",L(g))for(var ue=0;ue<g.length;ue++){oe=g[ue];var he=te+ke(oe,ue);ce+=$e(oe,k,ee,he,ae)}else if(he=j(g),typeof he=="function")for(g=he.call(g),ue=0;!(oe=g.next()).done;)oe=oe.value,he=te+ke(oe,ue++),ce+=$e(oe,k,ee,he,ae);else if(oe==="object")throw k=String(g),Error("Objects are not valid as a React child (found: "+(k==="[object Object]"?"object with keys {"+Object.keys(g).join(", ")+"}":k)+"). If you meant to render a collection of children, use an array instead.");return ce}function Ke(g,k,ee){if(g==null)return g;var te=[],ae=0;return $e(g,te,"","",function(oe){return k.call(ee,oe,ae++)}),te}function He(g){if(g._status===-1){var k=g._result;k=k(),k.then(function(ee){(g._status===0||g._status===-1)&&(g._status=1,g._result=ee)},function(ee){(g._status===0||g._status===-1)&&(g._status=2,g._result=ee)}),g._status===-1&&(g._status=0,g._result=k)}if(g._status===1)return g._result.default;throw g._result}var ve={current:null},z={transition:null},$={ReactCurrentDispatcher:ve,ReactCurrentBatchConfig:z,ReactCurrentOwner:Q};function I(){throw Error("act(...) is not supported in production builds of React.")}return ie.Children={map:Ke,forEach:function(g,k,ee){Ke(g,function(){k.apply(this,arguments)},ee)},count:function(g){var k=0;return Ke(g,function(){k++}),k},toArray:function(g){return Ke(g,function(k){return k})||[]},only:function(g){if(!Pe(g))throw Error("React.Children.only expected to receive a single React element child.");return g}},ie.Component=V,ie.Fragment=a,ie.Profiler=m,ie.PureComponent=le,ie.StrictMode=f,ie.Suspense=T,ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$,ie.act=I,ie.cloneElement=function(g,k,ee){if(g==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+g+".");var te=H({},g.props),ae=g.key,oe=g.ref,ce=g._owner;if(k!=null){if(k.ref!==void 0&&(oe=k.ref,ce=Q.current),k.key!==void 0&&(ae=""+k.key),g.type&&g.type.defaultProps)var ue=g.type.defaultProps;for(he in k)J.call(k,he)&&!R.hasOwnProperty(he)&&(te[he]=k[he]===void 0&&ue!==void 0?ue[he]:k[he])}var he=arguments.length-2;if(he===1)te.children=ee;else if(1<he){ue=Array(he);for(var Ne=0;Ne<he;Ne++)ue[Ne]=arguments[Ne+2];te.children=ue}return{$$typeof:s,type:g.type,key:ae,ref:oe,props:te,_owner:ce}},ie.createContext=function(g){return g={$$typeof:C,_currentValue:g,_currentValue2:g,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},g.Provider={$$typeof:w,_context:g},g.Consumer=g},ie.createElement=U,ie.createFactory=function(g){var k=U.bind(null,g);return k.type=g,k},ie.createRef=function(){return{current:null}},ie.forwardRef=function(g){return{$$typeof:b,render:g}},ie.isValidElement=Pe,ie.lazy=function(g){return{$$typeof:G,_payload:{_status:-1,_result:g},_init:He}},ie.memo=function(g,k){return{$$typeof:X,type:g,compare:k===void 0?null:k}},ie.startTransition=function(g){var k=z.transition;z.transition={};try{g()}finally{z.transition=k}},ie.unstable_act=I,ie.useCallback=function(g,k){return ve.current.useCallback(g,k)},ie.useContext=function(g){return ve.current.useContext(g)},ie.useDebugValue=function(){},ie.useDeferredValue=function(g){return ve.current.useDeferredValue(g)},ie.useEffect=function(g,k){return ve.current.useEffect(g,k)},ie.useId=function(){return ve.current.useId()},ie.useImperativeHandle=function(g,k,ee){return ve.current.useImperativeHandle(g,k,ee)},ie.useInsertionEffect=function(g,k){return ve.current.useInsertionEffect(g,k)},ie.useLayoutEffect=function(g,k){return ve.current.useLayoutEffect(g,k)},ie.useMemo=function(g,k){return ve.current.useMemo(g,k)},ie.useReducer=function(g,k,ee){return ve.current.useReducer(g,k,ee)},ie.useRef=function(g){return ve.current.useRef(g)},ie.useState=function(g){return ve.current.useState(g)},ie.useSyncExternalStore=function(g,k,ee){return ve.current.useSyncExternalStore(g,k,ee)},ie.useTransition=function(){return ve.current.useTransition()},ie.version="18.3.1",ie}var Uc;function Fs(){return Uc||(Uc=1,ws.exports=Fp()),ws.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wc;function Up(){if(Wc)return Yr;Wc=1;var s=Fs(),c=Symbol.for("react.element"),a=Symbol.for("react.fragment"),f=Object.prototype.hasOwnProperty,m=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,w={key:!0,ref:!0,__self:!0,__source:!0};function C(b,T,X){var G,P={},j=null,D=null;X!==void 0&&(j=""+X),T.key!==void 0&&(j=""+T.key),T.ref!==void 0&&(D=T.ref);for(G in T)f.call(T,G)&&!w.hasOwnProperty(G)&&(P[G]=T[G]);if(b&&b.defaultProps)for(G in T=b.defaultProps,T)P[G]===void 0&&(P[G]=T[G]);return{$$typeof:c,type:b,key:j,ref:D,props:P,_owner:m.current}}return Yr.Fragment=a,Yr.jsx=C,Yr.jsxs=C,Yr}var Bc;function Wp(){return Bc||(Bc=1,js.exports=Up()),js.exports}var i=Wp(),ci={},ks={exports:{}},rt={},Ss={exports:{}},Ns={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $c;function Bp(){return $c||($c=1,(function(s){function c(z,$){var I=z.length;z.push($);e:for(;0<I;){var g=I-1>>>1,k=z[g];if(0<m(k,$))z[g]=$,z[I]=k,I=g;else break e}}function a(z){return z.length===0?null:z[0]}function f(z){if(z.length===0)return null;var $=z[0],I=z.pop();if(I!==$){z[0]=I;e:for(var g=0,k=z.length,ee=k>>>1;g<ee;){var te=2*(g+1)-1,ae=z[te],oe=te+1,ce=z[oe];if(0>m(ae,I))oe<k&&0>m(ce,ae)?(z[g]=ce,z[oe]=I,g=oe):(z[g]=ae,z[te]=I,g=te);else if(oe<k&&0>m(ce,I))z[g]=ce,z[oe]=I,g=oe;else break e}}return $}function m(z,$){var I=z.sortIndex-$.sortIndex;return I!==0?I:z.id-$.id}if(typeof performance=="object"&&typeof performance.now=="function"){var w=performance;s.unstable_now=function(){return w.now()}}else{var C=Date,b=C.now();s.unstable_now=function(){return C.now()-b}}var T=[],X=[],G=1,P=null,j=3,D=!1,H=!1,B=!1,V=typeof setTimeout=="function"?setTimeout:null,re=typeof clearTimeout=="function"?clearTimeout:null,le=typeof setImmediate!="undefined"?setImmediate:null;typeof navigator!="undefined"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function q(z){for(var $=a(X);$!==null;){if($.callback===null)f(X);else if($.startTime<=z)f(X),$.sortIndex=$.expirationTime,c(T,$);else break;$=a(X)}}function L(z){if(B=!1,q(z),!H)if(a(T)!==null)H=!0,He(J);else{var $=a(X);$!==null&&ve(L,$.startTime-z)}}function J(z,$){H=!1,B&&(B=!1,re(U),U=-1),D=!0;var I=j;try{for(q($),P=a(T);P!==null&&(!(P.expirationTime>$)||z&&!se());){var g=P.callback;if(typeof g=="function"){P.callback=null,j=P.priorityLevel;var k=g(P.expirationTime<=$);$=s.unstable_now(),typeof k=="function"?P.callback=k:P===a(T)&&f(T),q($)}else f(T);P=a(T)}if(P!==null)var ee=!0;else{var te=a(X);te!==null&&ve(L,te.startTime-$),ee=!1}return ee}finally{P=null,j=I,D=!1}}var Q=!1,R=null,U=-1,ge=5,Pe=-1;function se(){return!(s.unstable_now()-Pe<ge)}function _e(){if(R!==null){var z=s.unstable_now();Pe=z;var $=!0;try{$=R(!0,z)}finally{$?ke():(Q=!1,R=null)}}else Q=!1}var ke;if(typeof le=="function")ke=function(){le(_e)};else if(typeof MessageChannel!="undefined"){var $e=new MessageChannel,Ke=$e.port2;$e.port1.onmessage=_e,ke=function(){Ke.postMessage(null)}}else ke=function(){V(_e,0)};function He(z){R=z,Q||(Q=!0,ke())}function ve(z,$){U=V(function(){z(s.unstable_now())},$)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(z){z.callback=null},s.unstable_continueExecution=function(){H||D||(H=!0,He(J))},s.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ge=0<z?Math.floor(1e3/z):5},s.unstable_getCurrentPriorityLevel=function(){return j},s.unstable_getFirstCallbackNode=function(){return a(T)},s.unstable_next=function(z){switch(j){case 1:case 2:case 3:var $=3;break;default:$=j}var I=j;j=$;try{return z()}finally{j=I}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(z,$){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var I=j;j=z;try{return $()}finally{j=I}},s.unstable_scheduleCallback=function(z,$,I){var g=s.unstable_now();switch(typeof I=="object"&&I!==null?(I=I.delay,I=typeof I=="number"&&0<I?g+I:g):I=g,z){case 1:var k=-1;break;case 2:k=250;break;case 5:k=1073741823;break;case 4:k=1e4;break;default:k=5e3}return k=I+k,z={id:G++,callback:$,priorityLevel:z,startTime:I,expirationTime:k,sortIndex:-1},I>g?(z.sortIndex=I,c(X,z),a(T)===null&&z===a(X)&&(B?(re(U),U=-1):B=!0,ve(L,I-g))):(z.sortIndex=k,c(T,z),H||D||(H=!0,He(J))),z},s.unstable_shouldYield=se,s.unstable_wrapCallback=function(z){var $=j;return function(){var I=j;j=$;try{return z.apply(this,arguments)}finally{j=I}}}})(Ns)),Ns}var Hc;function $p(){return Hc||(Hc=1,Ss.exports=Bp()),Ss.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vc;function Hp(){if(Vc)return rt;Vc=1;var s=Fs(),c=$p();function a(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var f=new Set,m={};function w(e,t){C(e,t),C(e+"Capture",t)}function C(e,t){for(m[e]=t,e=0;e<t.length;e++)f.add(t[e])}var b=!(typeof window=="undefined"||typeof window.document=="undefined"||typeof window.document.createElement=="undefined"),T=Object.prototype.hasOwnProperty,X=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,G={},P={};function j(e){return T.call(P,e)?!0:T.call(G,e)?!1:X.test(e)?P[e]=!0:(G[e]=!0,!1)}function D(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function H(e,t,n,r){if(t===null||typeof t=="undefined"||D(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function B(e,t,n,r,l,o,u){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=l,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=u}var V={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){V[e]=new B(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];V[t]=new B(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){V[e]=new B(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){V[e]=new B(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){V[e]=new B(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){V[e]=new B(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){V[e]=new B(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){V[e]=new B(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){V[e]=new B(e,5,!1,e.toLowerCase(),null,!1,!1)});var re=/[\-:]([a-z])/g;function le(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(re,le);V[t]=new B(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(re,le);V[t]=new B(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(re,le);V[t]=new B(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){V[e]=new B(e,1,!1,e.toLowerCase(),null,!1,!1)}),V.xlinkHref=new B("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){V[e]=new B(e,1,!1,e.toLowerCase(),null,!0,!0)});function q(e,t,n,r){var l=V.hasOwnProperty(t)?V[t]:null;(l!==null?l.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(H(t,n,l,r)&&(n=null),r||l===null?j(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):l.mustUseProperty?e[l.propertyName]=n===null?l.type===3?!1:"":n:(t=l.attributeName,r=l.attributeNamespace,n===null?e.removeAttribute(t):(l=l.type,n=l===3||l===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var L=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,J=Symbol.for("react.element"),Q=Symbol.for("react.portal"),R=Symbol.for("react.fragment"),U=Symbol.for("react.strict_mode"),ge=Symbol.for("react.profiler"),Pe=Symbol.for("react.provider"),se=Symbol.for("react.context"),_e=Symbol.for("react.forward_ref"),ke=Symbol.for("react.suspense"),$e=Symbol.for("react.suspense_list"),Ke=Symbol.for("react.memo"),He=Symbol.for("react.lazy"),ve=Symbol.for("react.offscreen"),z=Symbol.iterator;function $(e){return e===null||typeof e!="object"?null:(e=z&&e[z]||e["@@iterator"],typeof e=="function"?e:null)}var I=Object.assign,g;function k(e){if(g===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);g=t&&t[1]||""}return`
`+g+e}var ee=!1;function te(e,t){if(!e||ee)return"";ee=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(y){var r=y}Reflect.construct(e,[],t)}else{try{t.call()}catch(y){r=y}e.call(t.prototype)}else{try{throw Error()}catch(y){r=y}e()}}catch(y){if(y&&r&&typeof y.stack=="string"){for(var l=y.stack.split(`
`),o=r.stack.split(`
`),u=l.length-1,d=o.length-1;1<=u&&0<=d&&l[u]!==o[d];)d--;for(;1<=u&&0<=d;u--,d--)if(l[u]!==o[d]){if(u!==1||d!==1)do if(u--,d--,0>d||l[u]!==o[d]){var p=`
`+l[u].replace(" at new "," at ");return e.displayName&&p.includes("<anonymous>")&&(p=p.replace("<anonymous>",e.displayName)),p}while(1<=u&&0<=d);break}}}finally{ee=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?k(e):""}function ae(e){switch(e.tag){case 5:return k(e.type);case 16:return k("Lazy");case 13:return k("Suspense");case 19:return k("SuspenseList");case 0:case 2:case 15:return e=te(e.type,!1),e;case 11:return e=te(e.type.render,!1),e;case 1:return e=te(e.type,!0),e;default:return""}}function oe(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case R:return"Fragment";case Q:return"Portal";case ge:return"Profiler";case U:return"StrictMode";case ke:return"Suspense";case $e:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case se:return(e.displayName||"Context")+".Consumer";case Pe:return(e._context.displayName||"Context")+".Provider";case _e:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ke:return t=e.displayName||null,t!==null?t:oe(e.type)||"Memo";case He:t=e._payload,e=e._init;try{return oe(e(t))}catch{}}return null}function ce(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return oe(t);case 8:return t===U?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function ue(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function he(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Ne(e){var t=he(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n!="undefined"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(u){r=""+u,o.call(this,u)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(u){r=""+u},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ht(e){e._valueTracker||(e._valueTracker=Ne(e))}function pn(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=he(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function yt(e){if(e=e||(typeof document!="undefined"?document:void 0),typeof e=="undefined")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ei(e,t){var n=t.checked;return I({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n!=null?n:e._wrapperState.initialChecked})}function Qs(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=ue(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Gs(e,t){t=t.checked,t!=null&&q(e,"checked",t,!1)}function _i(e,t){Gs(e,t);var n=ue(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Ti(e,t.type,n):t.hasOwnProperty("defaultValue")&&Ti(e,t.type,ue(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Ys(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Ti(e,t,n){(t!=="number"||yt(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var ur=Array.isArray;function Ln(e,t,n,r){if(e=e.options,t){t={};for(var l=0;l<n.length;l++)t["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=t.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&r&&(e[n].defaultSelected=!0)}else{for(n=""+ue(n),t=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,r&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function Pi(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(a(91));return I({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Ks(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(a(92));if(ur(n)){if(1<n.length)throw Error(a(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:ue(n)}}function Xs(e,t){var n=ue(t.value),r=ue(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Zs(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Js(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function zi(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Js(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var nl,qs=(function(e){return typeof MSApp!="undefined"&&MSApp.execUnsafeLocalFunction?function(t,n,r,l){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,l)})}:e})(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(nl=nl||document.createElement("div"),nl.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=nl.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function cr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var dr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Wd=["Webkit","ms","Moz","O"];Object.keys(dr).forEach(function(e){Wd.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),dr[t]=dr[e]})});function ea(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||dr.hasOwnProperty(e)&&dr[e]?(""+t).trim():t+"px"}function ta(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,l=ea(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,l):e[n]=l}}var Bd=I({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ri(e,t){if(t){if(Bd[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(a(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(a(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(a(61))}if(t.style!=null&&typeof t.style!="object")throw Error(a(62))}}function Li(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var bi=null;function Ii(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Oi=null,bn=null,In=null;function na(e){if(e=br(e)){if(typeof Oi!="function")throw Error(a(280));var t=e.stateNode;t&&(t=Cl(t),Oi(e.stateNode,e.type,t))}}function ra(e){bn?In?In.push(e):In=[e]:bn=e}function la(){if(bn){var e=bn,t=In;if(In=bn=null,na(e),t)for(e=0;e<t.length;e++)na(t[e])}}function ia(e,t){return e(t)}function oa(){}var Ai=!1;function sa(e,t,n){if(Ai)return e(t,n);Ai=!0;try{return ia(e,t,n)}finally{Ai=!1,(bn!==null||In!==null)&&(oa(),la())}}function fr(e,t){var n=e.stateNode;if(n===null)return null;var r=Cl(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(a(231,t,typeof n));return n}var Mi=!1;if(b)try{var pr={};Object.defineProperty(pr,"passive",{get:function(){Mi=!0}}),window.addEventListener("test",pr,pr),window.removeEventListener("test",pr,pr)}catch{Mi=!1}function $d(e,t,n,r,l,o,u,d,p){var y=Array.prototype.slice.call(arguments,3);try{t.apply(n,y)}catch(N){this.onError(N)}}var hr=!1,rl=null,ll=!1,Di=null,Hd={onError:function(e){hr=!0,rl=e}};function Vd(e,t,n,r,l,o,u,d,p){hr=!1,rl=null,$d.apply(Hd,arguments)}function Qd(e,t,n,r,l,o,u,d,p){if(Vd.apply(this,arguments),hr){if(hr){var y=rl;hr=!1,rl=null}else throw Error(a(198));ll||(ll=!0,Di=y)}}function hn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function aa(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function ua(e){if(hn(e)!==e)throw Error(a(188))}function Gd(e){var t=e.alternate;if(!t){if(t=hn(e),t===null)throw Error(a(188));return t!==e?null:e}for(var n=e,r=t;;){var l=n.return;if(l===null)break;var o=l.alternate;if(o===null){if(r=l.return,r!==null){n=r;continue}break}if(l.child===o.child){for(o=l.child;o;){if(o===n)return ua(l),e;if(o===r)return ua(l),t;o=o.sibling}throw Error(a(188))}if(n.return!==r.return)n=l,r=o;else{for(var u=!1,d=l.child;d;){if(d===n){u=!0,n=l,r=o;break}if(d===r){u=!0,r=l,n=o;break}d=d.sibling}if(!u){for(d=o.child;d;){if(d===n){u=!0,n=o,r=l;break}if(d===r){u=!0,r=o,n=l;break}d=d.sibling}if(!u)throw Error(a(189))}}if(n.alternate!==r)throw Error(a(190))}if(n.tag!==3)throw Error(a(188));return n.stateNode.current===n?e:t}function ca(e){return e=Gd(e),e!==null?da(e):null}function da(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=da(e);if(t!==null)return t;e=e.sibling}return null}var fa=c.unstable_scheduleCallback,pa=c.unstable_cancelCallback,Yd=c.unstable_shouldYield,Kd=c.unstable_requestPaint,ze=c.unstable_now,Xd=c.unstable_getCurrentPriorityLevel,Fi=c.unstable_ImmediatePriority,ha=c.unstable_UserBlockingPriority,il=c.unstable_NormalPriority,Zd=c.unstable_LowPriority,ma=c.unstable_IdlePriority,ol=null,Pt=null;function Jd(e){if(Pt&&typeof Pt.onCommitFiberRoot=="function")try{Pt.onCommitFiberRoot(ol,e,void 0,(e.current.flags&128)===128)}catch{}}var jt=Math.clz32?Math.clz32:tf,qd=Math.log,ef=Math.LN2;function tf(e){return e>>>=0,e===0?32:31-(qd(e)/ef|0)|0}var sl=64,al=4194304;function mr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ul(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,l=e.suspendedLanes,o=e.pingedLanes,u=n&268435455;if(u!==0){var d=u&~l;d!==0?r=mr(d):(o&=u,o!==0&&(r=mr(o)))}else u=n&~l,u!==0?r=mr(u):o!==0&&(r=mr(o));if(r===0)return 0;if(t!==0&&t!==r&&(t&l)===0&&(l=r&-r,o=t&-t,l>=o||l===16&&(o&4194240)!==0))return t;if((r&4)!==0&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-jt(t),l=1<<n,r|=e[n],t&=~l;return r}function nf(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function rf(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,l=e.expirationTimes,o=e.pendingLanes;0<o;){var u=31-jt(o),d=1<<u,p=l[u];p===-1?((d&n)===0||(d&r)!==0)&&(l[u]=nf(d,t)):p<=t&&(e.expiredLanes|=d),o&=~d}}function Ui(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function ga(){var e=sl;return sl<<=1,(sl&4194240)===0&&(sl=64),e}function Wi(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function gr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-jt(t),e[t]=n}function lf(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var l=31-jt(n),o=1<<l;t[l]=0,r[l]=-1,e[l]=-1,n&=~o}}function Bi(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-jt(n),l=1<<r;l&t|e[r]&t&&(e[r]|=t),n&=~l}}var me=0;function va(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var xa,$i,ya,ja,wa,Hi=!1,cl=[],Vt=null,Qt=null,Gt=null,vr=new Map,xr=new Map,Yt=[],of="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ka(e,t){switch(e){case"focusin":case"focusout":Vt=null;break;case"dragenter":case"dragleave":Qt=null;break;case"mouseover":case"mouseout":Gt=null;break;case"pointerover":case"pointerout":vr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":xr.delete(t.pointerId)}}function yr(e,t,n,r,l,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[l]},t!==null&&(t=br(t),t!==null&&$i(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function sf(e,t,n,r,l){switch(t){case"focusin":return Vt=yr(Vt,e,t,n,r,l),!0;case"dragenter":return Qt=yr(Qt,e,t,n,r,l),!0;case"mouseover":return Gt=yr(Gt,e,t,n,r,l),!0;case"pointerover":var o=l.pointerId;return vr.set(o,yr(vr.get(o)||null,e,t,n,r,l)),!0;case"gotpointercapture":return o=l.pointerId,xr.set(o,yr(xr.get(o)||null,e,t,n,r,l)),!0}return!1}function Sa(e){var t=mn(e.target);if(t!==null){var n=hn(t);if(n!==null){if(t=n.tag,t===13){if(t=aa(n),t!==null){e.blockedOn=t,wa(e.priority,function(){ya(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function dl(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Qi(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);bi=r,n.target.dispatchEvent(r),bi=null}else return t=br(n),t!==null&&$i(t),e.blockedOn=n,!1;t.shift()}return!0}function Na(e,t,n){dl(e)&&n.delete(t)}function af(){Hi=!1,Vt!==null&&dl(Vt)&&(Vt=null),Qt!==null&&dl(Qt)&&(Qt=null),Gt!==null&&dl(Gt)&&(Gt=null),vr.forEach(Na),xr.forEach(Na)}function jr(e,t){e.blockedOn===t&&(e.blockedOn=null,Hi||(Hi=!0,c.unstable_scheduleCallback(c.unstable_NormalPriority,af)))}function wr(e){function t(l){return jr(l,e)}if(0<cl.length){jr(cl[0],e);for(var n=1;n<cl.length;n++){var r=cl[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Vt!==null&&jr(Vt,e),Qt!==null&&jr(Qt,e),Gt!==null&&jr(Gt,e),vr.forEach(t),xr.forEach(t),n=0;n<Yt.length;n++)r=Yt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Yt.length&&(n=Yt[0],n.blockedOn===null);)Sa(n),n.blockedOn===null&&Yt.shift()}var On=L.ReactCurrentBatchConfig,fl=!0;function uf(e,t,n,r){var l=me,o=On.transition;On.transition=null;try{me=1,Vi(e,t,n,r)}finally{me=l,On.transition=o}}function cf(e,t,n,r){var l=me,o=On.transition;On.transition=null;try{me=4,Vi(e,t,n,r)}finally{me=l,On.transition=o}}function Vi(e,t,n,r){if(fl){var l=Qi(e,t,n,r);if(l===null)uo(e,t,r,pl,n),ka(e,r);else if(sf(l,e,t,n,r))r.stopPropagation();else if(ka(e,r),t&4&&-1<of.indexOf(e)){for(;l!==null;){var o=br(l);if(o!==null&&xa(o),o=Qi(e,t,n,r),o===null&&uo(e,t,r,pl,n),o===l)break;l=o}l!==null&&r.stopPropagation()}else uo(e,t,r,null,n)}}var pl=null;function Qi(e,t,n,r){if(pl=null,e=Ii(r),e=mn(e),e!==null)if(t=hn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=aa(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return pl=e,null}function Ca(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Xd()){case Fi:return 1;case ha:return 4;case il:case Zd:return 16;case ma:return 536870912;default:return 16}default:return 16}}var Kt=null,Gi=null,hl=null;function Ea(){if(hl)return hl;var e,t=Gi,n=t.length,r,l="value"in Kt?Kt.value:Kt.textContent,o=l.length;for(e=0;e<n&&t[e]===l[e];e++);var u=n-e;for(r=1;r<=u&&t[n-r]===l[o-r];r++);return hl=l.slice(e,1<r?1-r:void 0)}function ml(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function gl(){return!0}function _a(){return!1}function ot(e){function t(n,r,l,o,u){this._reactName=n,this._targetInst=l,this.type=r,this.nativeEvent=o,this.target=u,this.currentTarget=null;for(var d in e)e.hasOwnProperty(d)&&(n=e[d],this[d]=n?n(o):o[d]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?gl:_a,this.isPropagationStopped=_a,this}return I(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=gl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=gl)},persist:function(){},isPersistent:gl}),t}var An={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Yi=ot(An),kr=I({},An,{view:0,detail:0}),df=ot(kr),Ki,Xi,Sr,vl=I({},kr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ji,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Sr&&(Sr&&e.type==="mousemove"?(Ki=e.screenX-Sr.screenX,Xi=e.screenY-Sr.screenY):Xi=Ki=0,Sr=e),Ki)},movementY:function(e){return"movementY"in e?e.movementY:Xi}}),Ta=ot(vl),ff=I({},vl,{dataTransfer:0}),pf=ot(ff),hf=I({},kr,{relatedTarget:0}),Zi=ot(hf),mf=I({},An,{animationName:0,elapsedTime:0,pseudoElement:0}),gf=ot(mf),vf=I({},An,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),xf=ot(vf),yf=I({},An,{data:0}),Pa=ot(yf),jf={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},wf={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},kf={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Sf(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=kf[e])?!!t[e]:!1}function Ji(){return Sf}var Nf=I({},kr,{key:function(e){if(e.key){var t=jf[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ml(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?wf[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ji,charCode:function(e){return e.type==="keypress"?ml(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ml(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Cf=ot(Nf),Ef=I({},vl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),za=ot(Ef),_f=I({},kr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ji}),Tf=ot(_f),Pf=I({},An,{propertyName:0,elapsedTime:0,pseudoElement:0}),zf=ot(Pf),Rf=I({},vl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Lf=ot(Rf),bf=[9,13,27,32],qi=b&&"CompositionEvent"in window,Nr=null;b&&"documentMode"in document&&(Nr=document.documentMode);var If=b&&"TextEvent"in window&&!Nr,Ra=b&&(!qi||Nr&&8<Nr&&11>=Nr),La=" ",ba=!1;function Ia(e,t){switch(e){case"keyup":return bf.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Oa(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Mn=!1;function Of(e,t){switch(e){case"compositionend":return Oa(t);case"keypress":return t.which!==32?null:(ba=!0,La);case"textInput":return e=t.data,e===La&&ba?null:e;default:return null}}function Af(e,t){if(Mn)return e==="compositionend"||!qi&&Ia(e,t)?(e=Ea(),hl=Gi=Kt=null,Mn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Ra&&t.locale!=="ko"?null:t.data;default:return null}}var Mf={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Aa(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Mf[e.type]:t==="textarea"}function Ma(e,t,n,r){ra(r),t=kl(t,"onChange"),0<t.length&&(n=new Yi("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Cr=null,Er=null;function Df(e){tu(e,0)}function xl(e){var t=Bn(e);if(pn(t))return e}function Ff(e,t){if(e==="change")return t}var Da=!1;if(b){var eo;if(b){var to="oninput"in document;if(!to){var Fa=document.createElement("div");Fa.setAttribute("oninput","return;"),to=typeof Fa.oninput=="function"}eo=to}else eo=!1;Da=eo&&(!document.documentMode||9<document.documentMode)}function Ua(){Cr&&(Cr.detachEvent("onpropertychange",Wa),Er=Cr=null)}function Wa(e){if(e.propertyName==="value"&&xl(Er)){var t=[];Ma(t,Er,e,Ii(e)),sa(Df,t)}}function Uf(e,t,n){e==="focusin"?(Ua(),Cr=t,Er=n,Cr.attachEvent("onpropertychange",Wa)):e==="focusout"&&Ua()}function Wf(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return xl(Er)}function Bf(e,t){if(e==="click")return xl(t)}function $f(e,t){if(e==="input"||e==="change")return xl(t)}function Hf(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var wt=typeof Object.is=="function"?Object.is:Hf;function _r(e,t){if(wt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var l=n[r];if(!T.call(t,l)||!wt(e[l],t[l]))return!1}return!0}function Ba(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function $a(e,t){var n=Ba(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ba(n)}}function Ha(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Ha(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Va(){for(var e=window,t=yt();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=yt(e.document)}return t}function no(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Vf(e){var t=Va(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Ha(n.ownerDocument.documentElement,n)){if(r!==null&&no(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var l=n.textContent.length,o=Math.min(r.start,l);r=r.end===void 0?o:Math.min(r.end,l),!e.extend&&o>r&&(l=r,r=o,o=l),l=$a(n,o);var u=$a(n,r);l&&u&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==u.node||e.focusOffset!==u.offset)&&(t=t.createRange(),t.setStart(l.node,l.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(u.node,u.offset)):(t.setEnd(u.node,u.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Qf=b&&"documentMode"in document&&11>=document.documentMode,Dn=null,ro=null,Tr=null,lo=!1;function Qa(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;lo||Dn==null||Dn!==yt(r)||(r=Dn,"selectionStart"in r&&no(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Tr&&_r(Tr,r)||(Tr=r,r=kl(ro,"onSelect"),0<r.length&&(t=new Yi("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Dn)))}function yl(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Fn={animationend:yl("Animation","AnimationEnd"),animationiteration:yl("Animation","AnimationIteration"),animationstart:yl("Animation","AnimationStart"),transitionend:yl("Transition","TransitionEnd")},io={},Ga={};b&&(Ga=document.createElement("div").style,"AnimationEvent"in window||(delete Fn.animationend.animation,delete Fn.animationiteration.animation,delete Fn.animationstart.animation),"TransitionEvent"in window||delete Fn.transitionend.transition);function jl(e){if(io[e])return io[e];if(!Fn[e])return e;var t=Fn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Ga)return io[e]=t[n];return e}var Ya=jl("animationend"),Ka=jl("animationiteration"),Xa=jl("animationstart"),Za=jl("transitionend"),Ja=new Map,qa="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Xt(e,t){Ja.set(e,t),w(t,[e])}for(var oo=0;oo<qa.length;oo++){var so=qa[oo],Gf=so.toLowerCase(),Yf=so[0].toUpperCase()+so.slice(1);Xt(Gf,"on"+Yf)}Xt(Ya,"onAnimationEnd"),Xt(Ka,"onAnimationIteration"),Xt(Xa,"onAnimationStart"),Xt("dblclick","onDoubleClick"),Xt("focusin","onFocus"),Xt("focusout","onBlur"),Xt(Za,"onTransitionEnd"),C("onMouseEnter",["mouseout","mouseover"]),C("onMouseLeave",["mouseout","mouseover"]),C("onPointerEnter",["pointerout","pointerover"]),C("onPointerLeave",["pointerout","pointerover"]),w("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),w("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),w("onBeforeInput",["compositionend","keypress","textInput","paste"]),w("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),w("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),w("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Pr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Kf=new Set("cancel close invalid load scroll toggle".split(" ").concat(Pr));function eu(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Qd(r,t,void 0,e),e.currentTarget=null}function tu(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],l=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var u=r.length-1;0<=u;u--){var d=r[u],p=d.instance,y=d.currentTarget;if(d=d.listener,p!==o&&l.isPropagationStopped())break e;eu(l,d,y),o=p}else for(u=0;u<r.length;u++){if(d=r[u],p=d.instance,y=d.currentTarget,d=d.listener,p!==o&&l.isPropagationStopped())break e;eu(l,d,y),o=p}}}if(ll)throw e=Di,ll=!1,Di=null,e}function ye(e,t){var n=t[go];n===void 0&&(n=t[go]=new Set);var r=e+"__bubble";n.has(r)||(nu(t,e,2,!1),n.add(r))}function ao(e,t,n){var r=0;t&&(r|=4),nu(n,e,r,t)}var wl="_reactListening"+Math.random().toString(36).slice(2);function zr(e){if(!e[wl]){e[wl]=!0,f.forEach(function(n){n!=="selectionchange"&&(Kf.has(n)||ao(n,!1,e),ao(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[wl]||(t[wl]=!0,ao("selectionchange",!1,t))}}function nu(e,t,n,r){switch(Ca(t)){case 1:var l=uf;break;case 4:l=cf;break;default:l=Vi}n=l.bind(null,t,n,e),l=void 0,!Mi||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),r?l!==void 0?e.addEventListener(t,n,{capture:!0,passive:l}):e.addEventListener(t,n,!0):l!==void 0?e.addEventListener(t,n,{passive:l}):e.addEventListener(t,n,!1)}function uo(e,t,n,r,l){var o=r;if((t&1)===0&&(t&2)===0&&r!==null)e:for(;;){if(r===null)return;var u=r.tag;if(u===3||u===4){var d=r.stateNode.containerInfo;if(d===l||d.nodeType===8&&d.parentNode===l)break;if(u===4)for(u=r.return;u!==null;){var p=u.tag;if((p===3||p===4)&&(p=u.stateNode.containerInfo,p===l||p.nodeType===8&&p.parentNode===l))return;u=u.return}for(;d!==null;){if(u=mn(d),u===null)return;if(p=u.tag,p===5||p===6){r=o=u;continue e}d=d.parentNode}}r=r.return}sa(function(){var y=o,N=Ii(n),E=[];e:{var S=Ja.get(e);if(S!==void 0){var O=Yi,M=e;switch(e){case"keypress":if(ml(n)===0)break e;case"keydown":case"keyup":O=Cf;break;case"focusin":M="focus",O=Zi;break;case"focusout":M="blur",O=Zi;break;case"beforeblur":case"afterblur":O=Zi;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":O=Ta;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":O=pf;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":O=Tf;break;case Ya:case Ka:case Xa:O=gf;break;case Za:O=zf;break;case"scroll":O=df;break;case"wheel":O=Lf;break;case"copy":case"cut":case"paste":O=xf;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":O=za}var F=(t&4)!==0,Re=!F&&e==="scroll",v=F?S!==null?S+"Capture":null:S;F=[];for(var h=y,x;h!==null;){x=h;var _=x.stateNode;if(x.tag===5&&_!==null&&(x=_,v!==null&&(_=fr(h,v),_!=null&&F.push(Rr(h,_,x)))),Re)break;h=h.return}0<F.length&&(S=new O(S,M,null,n,N),E.push({event:S,listeners:F}))}}if((t&7)===0){e:{if(S=e==="mouseover"||e==="pointerover",O=e==="mouseout"||e==="pointerout",S&&n!==bi&&(M=n.relatedTarget||n.fromElement)&&(mn(M)||M[It]))break e;if((O||S)&&(S=N.window===N?N:(S=N.ownerDocument)?S.defaultView||S.parentWindow:window,O?(M=n.relatedTarget||n.toElement,O=y,M=M?mn(M):null,M!==null&&(Re=hn(M),M!==Re||M.tag!==5&&M.tag!==6)&&(M=null)):(O=null,M=y),O!==M)){if(F=Ta,_="onMouseLeave",v="onMouseEnter",h="mouse",(e==="pointerout"||e==="pointerover")&&(F=za,_="onPointerLeave",v="onPointerEnter",h="pointer"),Re=O==null?S:Bn(O),x=M==null?S:Bn(M),S=new F(_,h+"leave",O,n,N),S.target=Re,S.relatedTarget=x,_=null,mn(N)===y&&(F=new F(v,h+"enter",M,n,N),F.target=x,F.relatedTarget=Re,_=F),Re=_,O&&M)t:{for(F=O,v=M,h=0,x=F;x;x=Un(x))h++;for(x=0,_=v;_;_=Un(_))x++;for(;0<h-x;)F=Un(F),h--;for(;0<x-h;)v=Un(v),x--;for(;h--;){if(F===v||v!==null&&F===v.alternate)break t;F=Un(F),v=Un(v)}F=null}else F=null;O!==null&&ru(E,S,O,F,!1),M!==null&&Re!==null&&ru(E,Re,M,F,!0)}}e:{if(S=y?Bn(y):window,O=S.nodeName&&S.nodeName.toLowerCase(),O==="select"||O==="input"&&S.type==="file")var W=Ff;else if(Aa(S))if(Da)W=$f;else{W=Wf;var Y=Uf}else(O=S.nodeName)&&O.toLowerCase()==="input"&&(S.type==="checkbox"||S.type==="radio")&&(W=Bf);if(W&&(W=W(e,y))){Ma(E,W,n,N);break e}Y&&Y(e,S,y),e==="focusout"&&(Y=S._wrapperState)&&Y.controlled&&S.type==="number"&&Ti(S,"number",S.value)}switch(Y=y?Bn(y):window,e){case"focusin":(Aa(Y)||Y.contentEditable==="true")&&(Dn=Y,ro=y,Tr=null);break;case"focusout":Tr=ro=Dn=null;break;case"mousedown":lo=!0;break;case"contextmenu":case"mouseup":case"dragend":lo=!1,Qa(E,n,N);break;case"selectionchange":if(Qf)break;case"keydown":case"keyup":Qa(E,n,N)}var K;if(qi)e:{switch(e){case"compositionstart":var Z="onCompositionStart";break e;case"compositionend":Z="onCompositionEnd";break e;case"compositionupdate":Z="onCompositionUpdate";break e}Z=void 0}else Mn?Ia(e,n)&&(Z="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(Z="onCompositionStart");Z&&(Ra&&n.locale!=="ko"&&(Mn||Z!=="onCompositionStart"?Z==="onCompositionEnd"&&Mn&&(K=Ea()):(Kt=N,Gi="value"in Kt?Kt.value:Kt.textContent,Mn=!0)),Y=kl(y,Z),0<Y.length&&(Z=new Pa(Z,e,null,n,N),E.push({event:Z,listeners:Y}),K?Z.data=K:(K=Oa(n),K!==null&&(Z.data=K)))),(K=If?Of(e,n):Af(e,n))&&(y=kl(y,"onBeforeInput"),0<y.length&&(N=new Pa("onBeforeInput","beforeinput",null,n,N),E.push({event:N,listeners:y}),N.data=K))}tu(E,t)})}function Rr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function kl(e,t){for(var n=t+"Capture",r=[];e!==null;){var l=e,o=l.stateNode;l.tag===5&&o!==null&&(l=o,o=fr(e,n),o!=null&&r.unshift(Rr(e,o,l)),o=fr(e,t),o!=null&&r.push(Rr(e,o,l))),e=e.return}return r}function Un(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function ru(e,t,n,r,l){for(var o=t._reactName,u=[];n!==null&&n!==r;){var d=n,p=d.alternate,y=d.stateNode;if(p!==null&&p===r)break;d.tag===5&&y!==null&&(d=y,l?(p=fr(n,o),p!=null&&u.unshift(Rr(n,p,d))):l||(p=fr(n,o),p!=null&&u.push(Rr(n,p,d)))),n=n.return}u.length!==0&&e.push({event:t,listeners:u})}var Xf=/\r\n?/g,Zf=/\u0000|\uFFFD/g;function lu(e){return(typeof e=="string"?e:""+e).replace(Xf,`
`).replace(Zf,"")}function Sl(e,t,n){if(t=lu(t),lu(e)!==t&&n)throw Error(a(425))}function Nl(){}var co=null,fo=null;function po(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ho=typeof setTimeout=="function"?setTimeout:void 0,Jf=typeof clearTimeout=="function"?clearTimeout:void 0,iu=typeof Promise=="function"?Promise:void 0,qf=typeof queueMicrotask=="function"?queueMicrotask:typeof iu!="undefined"?function(e){return iu.resolve(null).then(e).catch(ep)}:ho;function ep(e){setTimeout(function(){throw e})}function mo(e,t){var n=t,r=0;do{var l=n.nextSibling;if(e.removeChild(n),l&&l.nodeType===8)if(n=l.data,n==="/$"){if(r===0){e.removeChild(l),wr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=l}while(n);wr(t)}function Zt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function ou(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Wn=Math.random().toString(36).slice(2),zt="__reactFiber$"+Wn,Lr="__reactProps$"+Wn,It="__reactContainer$"+Wn,go="__reactEvents$"+Wn,tp="__reactListeners$"+Wn,np="__reactHandles$"+Wn;function mn(e){var t=e[zt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[It]||n[zt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=ou(e);e!==null;){if(n=e[zt])return n;e=ou(e)}return t}e=n,n=e.parentNode}return null}function br(e){return e=e[zt]||e[It],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Bn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(a(33))}function Cl(e){return e[Lr]||null}var vo=[],$n=-1;function Jt(e){return{current:e}}function je(e){0>$n||(e.current=vo[$n],vo[$n]=null,$n--)}function xe(e,t){$n++,vo[$n]=e.current,e.current=t}var qt={},Ve=Jt(qt),Je=Jt(!1),gn=qt;function Hn(e,t){var n=e.type.contextTypes;if(!n)return qt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var l={},o;for(o in n)l[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=l),l}function qe(e){return e=e.childContextTypes,e!=null}function El(){je(Je),je(Ve)}function su(e,t,n){if(Ve.current!==qt)throw Error(a(168));xe(Ve,t),xe(Je,n)}function au(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var l in r)if(!(l in t))throw Error(a(108,ce(e)||"Unknown",l));return I({},n,r)}function _l(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||qt,gn=Ve.current,xe(Ve,e),xe(Je,Je.current),!0}function uu(e,t,n){var r=e.stateNode;if(!r)throw Error(a(169));n?(e=au(e,t,gn),r.__reactInternalMemoizedMergedChildContext=e,je(Je),je(Ve),xe(Ve,e)):je(Je),xe(Je,n)}var Ot=null,Tl=!1,xo=!1;function cu(e){Ot===null?Ot=[e]:Ot.push(e)}function rp(e){Tl=!0,cu(e)}function en(){if(!xo&&Ot!==null){xo=!0;var e=0,t=me;try{var n=Ot;for(me=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Ot=null,Tl=!1}catch(l){throw Ot!==null&&(Ot=Ot.slice(e+1)),fa(Fi,en),l}finally{me=t,xo=!1}}return null}var Vn=[],Qn=0,Pl=null,zl=0,ft=[],pt=0,vn=null,At=1,Mt="";function xn(e,t){Vn[Qn++]=zl,Vn[Qn++]=Pl,Pl=e,zl=t}function du(e,t,n){ft[pt++]=At,ft[pt++]=Mt,ft[pt++]=vn,vn=e;var r=At;e=Mt;var l=32-jt(r)-1;r&=~(1<<l),n+=1;var o=32-jt(t)+l;if(30<o){var u=l-l%5;o=(r&(1<<u)-1).toString(32),r>>=u,l-=u,At=1<<32-jt(t)+l|n<<l|r,Mt=o+e}else At=1<<o|n<<l|r,Mt=e}function yo(e){e.return!==null&&(xn(e,1),du(e,1,0))}function jo(e){for(;e===Pl;)Pl=Vn[--Qn],Vn[Qn]=null,zl=Vn[--Qn],Vn[Qn]=null;for(;e===vn;)vn=ft[--pt],ft[pt]=null,Mt=ft[--pt],ft[pt]=null,At=ft[--pt],ft[pt]=null}var st=null,at=null,Se=!1,kt=null;function fu(e,t){var n=vt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function pu(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,st=e,at=Zt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,st=e,at=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=vn!==null?{id:At,overflow:Mt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=vt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,st=e,at=null,!0):!1;default:return!1}}function wo(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ko(e){if(Se){var t=at;if(t){var n=t;if(!pu(e,t)){if(wo(e))throw Error(a(418));t=Zt(n.nextSibling);var r=st;t&&pu(e,t)?fu(r,n):(e.flags=e.flags&-4097|2,Se=!1,st=e)}}else{if(wo(e))throw Error(a(418));e.flags=e.flags&-4097|2,Se=!1,st=e}}}function hu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;st=e}function Rl(e){if(e!==st)return!1;if(!Se)return hu(e),Se=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!po(e.type,e.memoizedProps)),t&&(t=at)){if(wo(e))throw mu(),Error(a(418));for(;t;)fu(e,t),t=Zt(t.nextSibling)}if(hu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){at=Zt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}at=null}}else at=st?Zt(e.stateNode.nextSibling):null;return!0}function mu(){for(var e=at;e;)e=Zt(e.nextSibling)}function Gn(){at=st=null,Se=!1}function So(e){kt===null?kt=[e]:kt.push(e)}var lp=L.ReactCurrentBatchConfig;function Ir(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(a(309));var r=n.stateNode}if(!r)throw Error(a(147,e));var l=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(u){var d=l.refs;u===null?delete d[o]:d[o]=u},t._stringRef=o,t)}if(typeof e!="string")throw Error(a(284));if(!n._owner)throw Error(a(290,e))}return e}function Ll(e,t){throw e=Object.prototype.toString.call(t),Error(a(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function gu(e){var t=e._init;return t(e._payload)}function vu(e){function t(v,h){if(e){var x=v.deletions;x===null?(v.deletions=[h],v.flags|=16):x.push(h)}}function n(v,h){if(!e)return null;for(;h!==null;)t(v,h),h=h.sibling;return null}function r(v,h){for(v=new Map;h!==null;)h.key!==null?v.set(h.key,h):v.set(h.index,h),h=h.sibling;return v}function l(v,h){return v=un(v,h),v.index=0,v.sibling=null,v}function o(v,h,x){return v.index=x,e?(x=v.alternate,x!==null?(x=x.index,x<h?(v.flags|=2,h):x):(v.flags|=2,h)):(v.flags|=1048576,h)}function u(v){return e&&v.alternate===null&&(v.flags|=2),v}function d(v,h,x,_){return h===null||h.tag!==6?(h=hs(x,v.mode,_),h.return=v,h):(h=l(h,x),h.return=v,h)}function p(v,h,x,_){var W=x.type;return W===R?N(v,h,x.props.children,_,x.key):h!==null&&(h.elementType===W||typeof W=="object"&&W!==null&&W.$$typeof===He&&gu(W)===h.type)?(_=l(h,x.props),_.ref=Ir(v,h,x),_.return=v,_):(_=ni(x.type,x.key,x.props,null,v.mode,_),_.ref=Ir(v,h,x),_.return=v,_)}function y(v,h,x,_){return h===null||h.tag!==4||h.stateNode.containerInfo!==x.containerInfo||h.stateNode.implementation!==x.implementation?(h=ms(x,v.mode,_),h.return=v,h):(h=l(h,x.children||[]),h.return=v,h)}function N(v,h,x,_,W){return h===null||h.tag!==7?(h=En(x,v.mode,_,W),h.return=v,h):(h=l(h,x),h.return=v,h)}function E(v,h,x){if(typeof h=="string"&&h!==""||typeof h=="number")return h=hs(""+h,v.mode,x),h.return=v,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case J:return x=ni(h.type,h.key,h.props,null,v.mode,x),x.ref=Ir(v,null,h),x.return=v,x;case Q:return h=ms(h,v.mode,x),h.return=v,h;case He:var _=h._init;return E(v,_(h._payload),x)}if(ur(h)||$(h))return h=En(h,v.mode,x,null),h.return=v,h;Ll(v,h)}return null}function S(v,h,x,_){var W=h!==null?h.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return W!==null?null:d(v,h,""+x,_);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case J:return x.key===W?p(v,h,x,_):null;case Q:return x.key===W?y(v,h,x,_):null;case He:return W=x._init,S(v,h,W(x._payload),_)}if(ur(x)||$(x))return W!==null?null:N(v,h,x,_,null);Ll(v,x)}return null}function O(v,h,x,_,W){if(typeof _=="string"&&_!==""||typeof _=="number")return v=v.get(x)||null,d(h,v,""+_,W);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case J:return v=v.get(_.key===null?x:_.key)||null,p(h,v,_,W);case Q:return v=v.get(_.key===null?x:_.key)||null,y(h,v,_,W);case He:var Y=_._init;return O(v,h,x,Y(_._payload),W)}if(ur(_)||$(_))return v=v.get(x)||null,N(h,v,_,W,null);Ll(h,_)}return null}function M(v,h,x,_){for(var W=null,Y=null,K=h,Z=h=0,Ue=null;K!==null&&Z<x.length;Z++){K.index>Z?(Ue=K,K=null):Ue=K.sibling;var fe=S(v,K,x[Z],_);if(fe===null){K===null&&(K=Ue);break}e&&K&&fe.alternate===null&&t(v,K),h=o(fe,h,Z),Y===null?W=fe:Y.sibling=fe,Y=fe,K=Ue}if(Z===x.length)return n(v,K),Se&&xn(v,Z),W;if(K===null){for(;Z<x.length;Z++)K=E(v,x[Z],_),K!==null&&(h=o(K,h,Z),Y===null?W=K:Y.sibling=K,Y=K);return Se&&xn(v,Z),W}for(K=r(v,K);Z<x.length;Z++)Ue=O(K,v,Z,x[Z],_),Ue!==null&&(e&&Ue.alternate!==null&&K.delete(Ue.key===null?Z:Ue.key),h=o(Ue,h,Z),Y===null?W=Ue:Y.sibling=Ue,Y=Ue);return e&&K.forEach(function(cn){return t(v,cn)}),Se&&xn(v,Z),W}function F(v,h,x,_){var W=$(x);if(typeof W!="function")throw Error(a(150));if(x=W.call(x),x==null)throw Error(a(151));for(var Y=W=null,K=h,Z=h=0,Ue=null,fe=x.next();K!==null&&!fe.done;Z++,fe=x.next()){K.index>Z?(Ue=K,K=null):Ue=K.sibling;var cn=S(v,K,fe.value,_);if(cn===null){K===null&&(K=Ue);break}e&&K&&cn.alternate===null&&t(v,K),h=o(cn,h,Z),Y===null?W=cn:Y.sibling=cn,Y=cn,K=Ue}if(fe.done)return n(v,K),Se&&xn(v,Z),W;if(K===null){for(;!fe.done;Z++,fe=x.next())fe=E(v,fe.value,_),fe!==null&&(h=o(fe,h,Z),Y===null?W=fe:Y.sibling=fe,Y=fe);return Se&&xn(v,Z),W}for(K=r(v,K);!fe.done;Z++,fe=x.next())fe=O(K,v,Z,fe.value,_),fe!==null&&(e&&fe.alternate!==null&&K.delete(fe.key===null?Z:fe.key),h=o(fe,h,Z),Y===null?W=fe:Y.sibling=fe,Y=fe);return e&&K.forEach(function(Mp){return t(v,Mp)}),Se&&xn(v,Z),W}function Re(v,h,x,_){if(typeof x=="object"&&x!==null&&x.type===R&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case J:e:{for(var W=x.key,Y=h;Y!==null;){if(Y.key===W){if(W=x.type,W===R){if(Y.tag===7){n(v,Y.sibling),h=l(Y,x.props.children),h.return=v,v=h;break e}}else if(Y.elementType===W||typeof W=="object"&&W!==null&&W.$$typeof===He&&gu(W)===Y.type){n(v,Y.sibling),h=l(Y,x.props),h.ref=Ir(v,Y,x),h.return=v,v=h;break e}n(v,Y);break}else t(v,Y);Y=Y.sibling}x.type===R?(h=En(x.props.children,v.mode,_,x.key),h.return=v,v=h):(_=ni(x.type,x.key,x.props,null,v.mode,_),_.ref=Ir(v,h,x),_.return=v,v=_)}return u(v);case Q:e:{for(Y=x.key;h!==null;){if(h.key===Y)if(h.tag===4&&h.stateNode.containerInfo===x.containerInfo&&h.stateNode.implementation===x.implementation){n(v,h.sibling),h=l(h,x.children||[]),h.return=v,v=h;break e}else{n(v,h);break}else t(v,h);h=h.sibling}h=ms(x,v.mode,_),h.return=v,v=h}return u(v);case He:return Y=x._init,Re(v,h,Y(x._payload),_)}if(ur(x))return M(v,h,x,_);if($(x))return F(v,h,x,_);Ll(v,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,h!==null&&h.tag===6?(n(v,h.sibling),h=l(h,x),h.return=v,v=h):(n(v,h),h=hs(x,v.mode,_),h.return=v,v=h),u(v)):n(v,h)}return Re}var Yn=vu(!0),xu=vu(!1),bl=Jt(null),Il=null,Kn=null,No=null;function Co(){No=Kn=Il=null}function Eo(e){var t=bl.current;je(bl),e._currentValue=t}function _o(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Xn(e,t){Il=e,No=Kn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(et=!0),e.firstContext=null)}function ht(e){var t=e._currentValue;if(No!==e)if(e={context:e,memoizedValue:t,next:null},Kn===null){if(Il===null)throw Error(a(308));Kn=e,Il.dependencies={lanes:0,firstContext:e}}else Kn=Kn.next=e;return t}var yn=null;function To(e){yn===null?yn=[e]:yn.push(e)}function yu(e,t,n,r){var l=t.interleaved;return l===null?(n.next=n,To(t)):(n.next=l.next,l.next=n),t.interleaved=n,Dt(e,r)}function Dt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var tn=!1;function Po(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function ju(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ft(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function nn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(de&2)!==0){var l=r.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),r.pending=t,Dt(e,n)}return l=r.interleaved,l===null?(t.next=t,To(r)):(t.next=l.next,l.next=t),r.interleaved=t,Dt(e,n)}function Ol(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Bi(e,n)}}function wu(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var l=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var u={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?l=o=u:o=o.next=u,n=n.next}while(n!==null);o===null?l=o=t:o=o.next=t}else l=o=t;n={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Al(e,t,n,r){var l=e.updateQueue;tn=!1;var o=l.firstBaseUpdate,u=l.lastBaseUpdate,d=l.shared.pending;if(d!==null){l.shared.pending=null;var p=d,y=p.next;p.next=null,u===null?o=y:u.next=y,u=p;var N=e.alternate;N!==null&&(N=N.updateQueue,d=N.lastBaseUpdate,d!==u&&(d===null?N.firstBaseUpdate=y:d.next=y,N.lastBaseUpdate=p))}if(o!==null){var E=l.baseState;u=0,N=y=p=null,d=o;do{var S=d.lane,O=d.eventTime;if((r&S)===S){N!==null&&(N=N.next={eventTime:O,lane:0,tag:d.tag,payload:d.payload,callback:d.callback,next:null});e:{var M=e,F=d;switch(S=t,O=n,F.tag){case 1:if(M=F.payload,typeof M=="function"){E=M.call(O,E,S);break e}E=M;break e;case 3:M.flags=M.flags&-65537|128;case 0:if(M=F.payload,S=typeof M=="function"?M.call(O,E,S):M,S==null)break e;E=I({},E,S);break e;case 2:tn=!0}}d.callback!==null&&d.lane!==0&&(e.flags|=64,S=l.effects,S===null?l.effects=[d]:S.push(d))}else O={eventTime:O,lane:S,tag:d.tag,payload:d.payload,callback:d.callback,next:null},N===null?(y=N=O,p=E):N=N.next=O,u|=S;if(d=d.next,d===null){if(d=l.shared.pending,d===null)break;S=d,d=S.next,S.next=null,l.lastBaseUpdate=S,l.shared.pending=null}}while(!0);if(N===null&&(p=E),l.baseState=p,l.firstBaseUpdate=y,l.lastBaseUpdate=N,t=l.shared.interleaved,t!==null){l=t;do u|=l.lane,l=l.next;while(l!==t)}else o===null&&(l.shared.lanes=0);kn|=u,e.lanes=u,e.memoizedState=E}}function ku(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],l=r.callback;if(l!==null){if(r.callback=null,r=n,typeof l!="function")throw Error(a(191,l));l.call(r)}}}var Or={},Rt=Jt(Or),Ar=Jt(Or),Mr=Jt(Or);function jn(e){if(e===Or)throw Error(a(174));return e}function zo(e,t){switch(xe(Mr,t),xe(Ar,e),xe(Rt,Or),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:zi(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=zi(t,e)}je(Rt),xe(Rt,t)}function Zn(){je(Rt),je(Ar),je(Mr)}function Su(e){jn(Mr.current);var t=jn(Rt.current),n=zi(t,e.type);t!==n&&(xe(Ar,e),xe(Rt,n))}function Ro(e){Ar.current===e&&(je(Rt),je(Ar))}var Ce=Jt(0);function Ml(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Lo=[];function bo(){for(var e=0;e<Lo.length;e++)Lo[e]._workInProgressVersionPrimary=null;Lo.length=0}var Dl=L.ReactCurrentDispatcher,Io=L.ReactCurrentBatchConfig,wn=0,Ee=null,Oe=null,De=null,Fl=!1,Dr=!1,Fr=0,ip=0;function Qe(){throw Error(a(321))}function Oo(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!wt(e[n],t[n]))return!1;return!0}function Ao(e,t,n,r,l,o){if(wn=o,Ee=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Dl.current=e===null||e.memoizedState===null?up:cp,e=n(r,l),Dr){o=0;do{if(Dr=!1,Fr=0,25<=o)throw Error(a(301));o+=1,De=Oe=null,t.updateQueue=null,Dl.current=dp,e=n(r,l)}while(Dr)}if(Dl.current=Bl,t=Oe!==null&&Oe.next!==null,wn=0,De=Oe=Ee=null,Fl=!1,t)throw Error(a(300));return e}function Mo(){var e=Fr!==0;return Fr=0,e}function Lt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return De===null?Ee.memoizedState=De=e:De=De.next=e,De}function mt(){if(Oe===null){var e=Ee.alternate;e=e!==null?e.memoizedState:null}else e=Oe.next;var t=De===null?Ee.memoizedState:De.next;if(t!==null)De=t,Oe=e;else{if(e===null)throw Error(a(310));Oe=e,e={memoizedState:Oe.memoizedState,baseState:Oe.baseState,baseQueue:Oe.baseQueue,queue:Oe.queue,next:null},De===null?Ee.memoizedState=De=e:De=De.next=e}return De}function Ur(e,t){return typeof t=="function"?t(e):t}function Do(e){var t=mt(),n=t.queue;if(n===null)throw Error(a(311));n.lastRenderedReducer=e;var r=Oe,l=r.baseQueue,o=n.pending;if(o!==null){if(l!==null){var u=l.next;l.next=o.next,o.next=u}r.baseQueue=l=o,n.pending=null}if(l!==null){o=l.next,r=r.baseState;var d=u=null,p=null,y=o;do{var N=y.lane;if((wn&N)===N)p!==null&&(p=p.next={lane:0,action:y.action,hasEagerState:y.hasEagerState,eagerState:y.eagerState,next:null}),r=y.hasEagerState?y.eagerState:e(r,y.action);else{var E={lane:N,action:y.action,hasEagerState:y.hasEagerState,eagerState:y.eagerState,next:null};p===null?(d=p=E,u=r):p=p.next=E,Ee.lanes|=N,kn|=N}y=y.next}while(y!==null&&y!==o);p===null?u=r:p.next=d,wt(r,t.memoizedState)||(et=!0),t.memoizedState=r,t.baseState=u,t.baseQueue=p,n.lastRenderedState=r}if(e=n.interleaved,e!==null){l=e;do o=l.lane,Ee.lanes|=o,kn|=o,l=l.next;while(l!==e)}else l===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Fo(e){var t=mt(),n=t.queue;if(n===null)throw Error(a(311));n.lastRenderedReducer=e;var r=n.dispatch,l=n.pending,o=t.memoizedState;if(l!==null){n.pending=null;var u=l=l.next;do o=e(o,u.action),u=u.next;while(u!==l);wt(o,t.memoizedState)||(et=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Nu(){}function Cu(e,t){var n=Ee,r=mt(),l=t(),o=!wt(r.memoizedState,l);if(o&&(r.memoizedState=l,et=!0),r=r.queue,Uo(Tu.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||De!==null&&De.memoizedState.tag&1){if(n.flags|=2048,Wr(9,_u.bind(null,n,r,l,t),void 0,null),Fe===null)throw Error(a(349));(wn&30)!==0||Eu(n,t,l)}return l}function Eu(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Ee.updateQueue,t===null?(t={lastEffect:null,stores:null},Ee.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function _u(e,t,n,r){t.value=n,t.getSnapshot=r,Pu(t)&&zu(e)}function Tu(e,t,n){return n(function(){Pu(t)&&zu(e)})}function Pu(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!wt(e,n)}catch{return!0}}function zu(e){var t=Dt(e,1);t!==null&&Et(t,e,1,-1)}function Ru(e){var t=Lt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ur,lastRenderedState:e},t.queue=e,e=e.dispatch=ap.bind(null,Ee,e),[t.memoizedState,e]}function Wr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Ee.updateQueue,t===null?(t={lastEffect:null,stores:null},Ee.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Lu(){return mt().memoizedState}function Ul(e,t,n,r){var l=Lt();Ee.flags|=e,l.memoizedState=Wr(1|t,n,void 0,r===void 0?null:r)}function Wl(e,t,n,r){var l=mt();r=r===void 0?null:r;var o=void 0;if(Oe!==null){var u=Oe.memoizedState;if(o=u.destroy,r!==null&&Oo(r,u.deps)){l.memoizedState=Wr(t,n,o,r);return}}Ee.flags|=e,l.memoizedState=Wr(1|t,n,o,r)}function bu(e,t){return Ul(8390656,8,e,t)}function Uo(e,t){return Wl(2048,8,e,t)}function Iu(e,t){return Wl(4,2,e,t)}function Ou(e,t){return Wl(4,4,e,t)}function Au(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Mu(e,t,n){return n=n!=null?n.concat([e]):null,Wl(4,4,Au.bind(null,t,e),n)}function Wo(){}function Du(e,t){var n=mt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Oo(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Fu(e,t){var n=mt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Oo(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Uu(e,t,n){return(wn&21)===0?(e.baseState&&(e.baseState=!1,et=!0),e.memoizedState=n):(wt(n,t)||(n=ga(),Ee.lanes|=n,kn|=n,e.baseState=!0),t)}function op(e,t){var n=me;me=n!==0&&4>n?n:4,e(!0);var r=Io.transition;Io.transition={};try{e(!1),t()}finally{me=n,Io.transition=r}}function Wu(){return mt().memoizedState}function sp(e,t,n){var r=sn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Bu(e))$u(t,n);else if(n=yu(e,t,n,r),n!==null){var l=Ze();Et(n,e,r,l),Hu(n,t,r)}}function ap(e,t,n){var r=sn(e),l={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Bu(e))$u(t,l);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var u=t.lastRenderedState,d=o(u,n);if(l.hasEagerState=!0,l.eagerState=d,wt(d,u)){var p=t.interleaved;p===null?(l.next=l,To(t)):(l.next=p.next,p.next=l),t.interleaved=l;return}}catch{}finally{}n=yu(e,t,l,r),n!==null&&(l=Ze(),Et(n,e,r,l),Hu(n,t,r))}}function Bu(e){var t=e.alternate;return e===Ee||t!==null&&t===Ee}function $u(e,t){Dr=Fl=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Hu(e,t,n){if((n&4194240)!==0){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Bi(e,n)}}var Bl={readContext:ht,useCallback:Qe,useContext:Qe,useEffect:Qe,useImperativeHandle:Qe,useInsertionEffect:Qe,useLayoutEffect:Qe,useMemo:Qe,useReducer:Qe,useRef:Qe,useState:Qe,useDebugValue:Qe,useDeferredValue:Qe,useTransition:Qe,useMutableSource:Qe,useSyncExternalStore:Qe,useId:Qe,unstable_isNewReconciler:!1},up={readContext:ht,useCallback:function(e,t){return Lt().memoizedState=[e,t===void 0?null:t],e},useContext:ht,useEffect:bu,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Ul(4194308,4,Au.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ul(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ul(4,2,e,t)},useMemo:function(e,t){var n=Lt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Lt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=sp.bind(null,Ee,e),[r.memoizedState,e]},useRef:function(e){var t=Lt();return e={current:e},t.memoizedState=e},useState:Ru,useDebugValue:Wo,useDeferredValue:function(e){return Lt().memoizedState=e},useTransition:function(){var e=Ru(!1),t=e[0];return e=op.bind(null,e[1]),Lt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Ee,l=Lt();if(Se){if(n===void 0)throw Error(a(407));n=n()}else{if(n=t(),Fe===null)throw Error(a(349));(wn&30)!==0||Eu(r,t,n)}l.memoizedState=n;var o={value:n,getSnapshot:t};return l.queue=o,bu(Tu.bind(null,r,o,e),[e]),r.flags|=2048,Wr(9,_u.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=Lt(),t=Fe.identifierPrefix;if(Se){var n=Mt,r=At;n=(r&~(1<<32-jt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Fr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=ip++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},cp={readContext:ht,useCallback:Du,useContext:ht,useEffect:Uo,useImperativeHandle:Mu,useInsertionEffect:Iu,useLayoutEffect:Ou,useMemo:Fu,useReducer:Do,useRef:Lu,useState:function(){return Do(Ur)},useDebugValue:Wo,useDeferredValue:function(e){var t=mt();return Uu(t,Oe.memoizedState,e)},useTransition:function(){var e=Do(Ur)[0],t=mt().memoizedState;return[e,t]},useMutableSource:Nu,useSyncExternalStore:Cu,useId:Wu,unstable_isNewReconciler:!1},dp={readContext:ht,useCallback:Du,useContext:ht,useEffect:Uo,useImperativeHandle:Mu,useInsertionEffect:Iu,useLayoutEffect:Ou,useMemo:Fu,useReducer:Fo,useRef:Lu,useState:function(){return Fo(Ur)},useDebugValue:Wo,useDeferredValue:function(e){var t=mt();return Oe===null?t.memoizedState=e:Uu(t,Oe.memoizedState,e)},useTransition:function(){var e=Fo(Ur)[0],t=mt().memoizedState;return[e,t]},useMutableSource:Nu,useSyncExternalStore:Cu,useId:Wu,unstable_isNewReconciler:!1};function St(e,t){if(e&&e.defaultProps){t=I({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Bo(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:I({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var $l={isMounted:function(e){return(e=e._reactInternals)?hn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Ze(),l=sn(e),o=Ft(r,l);o.payload=t,n!=null&&(o.callback=n),t=nn(e,o,l),t!==null&&(Et(t,e,l,r),Ol(t,e,l))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Ze(),l=sn(e),o=Ft(r,l);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=nn(e,o,l),t!==null&&(Et(t,e,l,r),Ol(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ze(),r=sn(e),l=Ft(n,r);l.tag=2,t!=null&&(l.callback=t),t=nn(e,l,r),t!==null&&(Et(t,e,r,n),Ol(t,e,r))}};function Vu(e,t,n,r,l,o,u){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,u):t.prototype&&t.prototype.isPureReactComponent?!_r(n,r)||!_r(l,o):!0}function Qu(e,t,n){var r=!1,l=qt,o=t.contextType;return typeof o=="object"&&o!==null?o=ht(o):(l=qe(t)?gn:Ve.current,r=t.contextTypes,o=(r=r!=null)?Hn(e,l):qt),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=$l,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=o),t}function Gu(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&$l.enqueueReplaceState(t,t.state,null)}function $o(e,t,n,r){var l=e.stateNode;l.props=n,l.state=e.memoizedState,l.refs={},Po(e);var o=t.contextType;typeof o=="object"&&o!==null?l.context=ht(o):(o=qe(t)?gn:Ve.current,l.context=Hn(e,o)),l.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Bo(e,t,o,n),l.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(t=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),t!==l.state&&$l.enqueueReplaceState(l,l.state,null),Al(e,n,l,r),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function Jn(e,t){try{var n="",r=t;do n+=ae(r),r=r.return;while(r);var l=n}catch(o){l=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:l,digest:null}}function Ho(e,t,n){return{value:e,source:null,stack:n!=null?n:null,digest:t!=null?t:null}}function Vo(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var fp=typeof WeakMap=="function"?WeakMap:Map;function Yu(e,t,n){n=Ft(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Xl||(Xl=!0,os=r),Vo(e,t)},n}function Ku(e,t,n){n=Ft(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var l=t.value;n.payload=function(){return r(l)},n.callback=function(){Vo(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Vo(e,t),typeof r!="function"&&(ln===null?ln=new Set([this]):ln.add(this));var u=t.stack;this.componentDidCatch(t.value,{componentStack:u!==null?u:""})}),n}function Xu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new fp;var l=new Set;r.set(t,l)}else l=r.get(t),l===void 0&&(l=new Set,r.set(t,l));l.has(n)||(l.add(n),e=Ep.bind(null,e,t,n),t.then(e,e))}function Zu(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Ju(e,t,n,r,l){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Ft(-1,1),t.tag=2,nn(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=l,e)}var pp=L.ReactCurrentOwner,et=!1;function Xe(e,t,n,r){t.child=e===null?xu(t,null,n,r):Yn(t,e.child,n,r)}function qu(e,t,n,r,l){n=n.render;var o=t.ref;return Xn(t,l),r=Ao(e,t,n,r,o,l),n=Mo(),e!==null&&!et?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,Ut(e,t,l)):(Se&&n&&yo(t),t.flags|=1,Xe(e,t,r,l),t.child)}function ec(e,t,n,r,l){if(e===null){var o=n.type;return typeof o=="function"&&!ps(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,tc(e,t,o,r,l)):(e=ni(n.type,null,r,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,(e.lanes&l)===0){var u=o.memoizedProps;if(n=n.compare,n=n!==null?n:_r,n(u,r)&&e.ref===t.ref)return Ut(e,t,l)}return t.flags|=1,e=un(o,r),e.ref=t.ref,e.return=t,t.child=e}function tc(e,t,n,r,l){if(e!==null){var o=e.memoizedProps;if(_r(o,r)&&e.ref===t.ref)if(et=!1,t.pendingProps=r=o,(e.lanes&l)!==0)(e.flags&131072)!==0&&(et=!0);else return t.lanes=e.lanes,Ut(e,t,l)}return Qo(e,t,n,r,l)}function nc(e,t,n){var r=t.pendingProps,l=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},xe(er,ut),ut|=n;else{if((n&1073741824)===0)return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,xe(er,ut),ut|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,xe(er,ut),ut|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,xe(er,ut),ut|=r;return Xe(e,t,l,n),t.child}function rc(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Qo(e,t,n,r,l){var o=qe(n)?gn:Ve.current;return o=Hn(t,o),Xn(t,l),n=Ao(e,t,n,r,o,l),r=Mo(),e!==null&&!et?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,Ut(e,t,l)):(Se&&r&&yo(t),t.flags|=1,Xe(e,t,n,l),t.child)}function lc(e,t,n,r,l){if(qe(n)){var o=!0;_l(t)}else o=!1;if(Xn(t,l),t.stateNode===null)Vl(e,t),Qu(t,n,r),$o(t,n,r,l),r=!0;else if(e===null){var u=t.stateNode,d=t.memoizedProps;u.props=d;var p=u.context,y=n.contextType;typeof y=="object"&&y!==null?y=ht(y):(y=qe(n)?gn:Ve.current,y=Hn(t,y));var N=n.getDerivedStateFromProps,E=typeof N=="function"||typeof u.getSnapshotBeforeUpdate=="function";E||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(d!==r||p!==y)&&Gu(t,u,r,y),tn=!1;var S=t.memoizedState;u.state=S,Al(t,r,u,l),p=t.memoizedState,d!==r||S!==p||Je.current||tn?(typeof N=="function"&&(Bo(t,n,N,r),p=t.memoizedState),(d=tn||Vu(t,n,d,r,S,p,y))?(E||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount()),typeof u.componentDidMount=="function"&&(t.flags|=4194308)):(typeof u.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=p),u.props=r,u.state=p,u.context=y,r=d):(typeof u.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{u=t.stateNode,ju(e,t),d=t.memoizedProps,y=t.type===t.elementType?d:St(t.type,d),u.props=y,E=t.pendingProps,S=u.context,p=n.contextType,typeof p=="object"&&p!==null?p=ht(p):(p=qe(n)?gn:Ve.current,p=Hn(t,p));var O=n.getDerivedStateFromProps;(N=typeof O=="function"||typeof u.getSnapshotBeforeUpdate=="function")||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(d!==E||S!==p)&&Gu(t,u,r,p),tn=!1,S=t.memoizedState,u.state=S,Al(t,r,u,l);var M=t.memoizedState;d!==E||S!==M||Je.current||tn?(typeof O=="function"&&(Bo(t,n,O,r),M=t.memoizedState),(y=tn||Vu(t,n,y,r,S,M,p)||!1)?(N||typeof u.UNSAFE_componentWillUpdate!="function"&&typeof u.componentWillUpdate!="function"||(typeof u.componentWillUpdate=="function"&&u.componentWillUpdate(r,M,p),typeof u.UNSAFE_componentWillUpdate=="function"&&u.UNSAFE_componentWillUpdate(r,M,p)),typeof u.componentDidUpdate=="function"&&(t.flags|=4),typeof u.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof u.componentDidUpdate!="function"||d===e.memoizedProps&&S===e.memoizedState||(t.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||d===e.memoizedProps&&S===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=M),u.props=r,u.state=M,u.context=p,r=y):(typeof u.componentDidUpdate!="function"||d===e.memoizedProps&&S===e.memoizedState||(t.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||d===e.memoizedProps&&S===e.memoizedState||(t.flags|=1024),r=!1)}return Go(e,t,n,r,o,l)}function Go(e,t,n,r,l,o){rc(e,t);var u=(t.flags&128)!==0;if(!r&&!u)return l&&uu(t,n,!1),Ut(e,t,o);r=t.stateNode,pp.current=t;var d=u&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&u?(t.child=Yn(t,e.child,null,o),t.child=Yn(t,null,d,o)):Xe(e,t,d,o),t.memoizedState=r.state,l&&uu(t,n,!0),t.child}function ic(e){var t=e.stateNode;t.pendingContext?su(e,t.pendingContext,t.pendingContext!==t.context):t.context&&su(e,t.context,!1),zo(e,t.containerInfo)}function oc(e,t,n,r,l){return Gn(),So(l),t.flags|=256,Xe(e,t,n,r),t.child}var Yo={dehydrated:null,treeContext:null,retryLane:0};function Ko(e){return{baseLanes:e,cachePool:null,transitions:null}}function sc(e,t,n){var r=t.pendingProps,l=Ce.current,o=!1,u=(t.flags&128)!==0,d;if((d=u)||(d=e!==null&&e.memoizedState===null?!1:(l&2)!==0),d?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),xe(Ce,l&1),e===null)return ko(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(u=r.children,e=r.fallback,o?(r=t.mode,o=t.child,u={mode:"hidden",children:u},(r&1)===0&&o!==null?(o.childLanes=0,o.pendingProps=u):o=ri(u,r,0,null),e=En(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Ko(n),t.memoizedState=Yo,e):Xo(t,u));if(l=e.memoizedState,l!==null&&(d=l.dehydrated,d!==null))return hp(e,t,u,r,d,l,n);if(o){o=r.fallback,u=t.mode,l=e.child,d=l.sibling;var p={mode:"hidden",children:r.children};return(u&1)===0&&t.child!==l?(r=t.child,r.childLanes=0,r.pendingProps=p,t.deletions=null):(r=un(l,p),r.subtreeFlags=l.subtreeFlags&14680064),d!==null?o=un(d,o):(o=En(o,u,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,u=e.child.memoizedState,u=u===null?Ko(n):{baseLanes:u.baseLanes|n,cachePool:null,transitions:u.transitions},o.memoizedState=u,o.childLanes=e.childLanes&~n,t.memoizedState=Yo,r}return o=e.child,e=o.sibling,r=un(o,{mode:"visible",children:r.children}),(t.mode&1)===0&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Xo(e,t){return t=ri({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Hl(e,t,n,r){return r!==null&&So(r),Yn(t,e.child,null,n),e=Xo(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function hp(e,t,n,r,l,o,u){if(n)return t.flags&256?(t.flags&=-257,r=Ho(Error(a(422))),Hl(e,t,u,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,l=t.mode,r=ri({mode:"visible",children:r.children},l,0,null),o=En(o,l,u,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,(t.mode&1)!==0&&Yn(t,e.child,null,u),t.child.memoizedState=Ko(u),t.memoizedState=Yo,o);if((t.mode&1)===0)return Hl(e,t,u,null);if(l.data==="$!"){if(r=l.nextSibling&&l.nextSibling.dataset,r)var d=r.dgst;return r=d,o=Error(a(419)),r=Ho(o,r,void 0),Hl(e,t,u,r)}if(d=(u&e.childLanes)!==0,et||d){if(r=Fe,r!==null){switch(u&-u){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=(l&(r.suspendedLanes|u))!==0?0:l,l!==0&&l!==o.retryLane&&(o.retryLane=l,Dt(e,l),Et(r,e,l,-1))}return fs(),r=Ho(Error(a(421))),Hl(e,t,u,r)}return l.data==="$?"?(t.flags|=128,t.child=e.child,t=_p.bind(null,e),l._reactRetry=t,null):(e=o.treeContext,at=Zt(l.nextSibling),st=t,Se=!0,kt=null,e!==null&&(ft[pt++]=At,ft[pt++]=Mt,ft[pt++]=vn,At=e.id,Mt=e.overflow,vn=t),t=Xo(t,r.children),t.flags|=4096,t)}function ac(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),_o(e.return,t,n)}function Zo(e,t,n,r,l){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:l}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=l)}function uc(e,t,n){var r=t.pendingProps,l=r.revealOrder,o=r.tail;if(Xe(e,t,r.children,n),r=Ce.current,(r&2)!==0)r=r&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&ac(e,n,t);else if(e.tag===19)ac(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(xe(Ce,r),(t.mode&1)===0)t.memoizedState=null;else switch(l){case"forwards":for(n=t.child,l=null;n!==null;)e=n.alternate,e!==null&&Ml(e)===null&&(l=n),n=n.sibling;n=l,n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null),Zo(t,!1,l,n,o);break;case"backwards":for(n=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&Ml(e)===null){t.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}Zo(t,!0,n,null,o);break;case"together":Zo(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Vl(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Ut(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),kn|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(a(153));if(t.child!==null){for(e=t.child,n=un(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=un(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function mp(e,t,n){switch(t.tag){case 3:ic(t),Gn();break;case 5:Su(t);break;case 1:qe(t.type)&&_l(t);break;case 4:zo(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,l=t.memoizedProps.value;xe(bl,r._currentValue),r._currentValue=l;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(xe(Ce,Ce.current&1),t.flags|=128,null):(n&t.child.childLanes)!==0?sc(e,t,n):(xe(Ce,Ce.current&1),e=Ut(e,t,n),e!==null?e.sibling:null);xe(Ce,Ce.current&1);break;case 19:if(r=(n&t.childLanes)!==0,(e.flags&128)!==0){if(r)return uc(e,t,n);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),xe(Ce,Ce.current),r)break;return null;case 22:case 23:return t.lanes=0,nc(e,t,n)}return Ut(e,t,n)}var cc,Jo,dc,fc;cc=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},Jo=function(){},dc=function(e,t,n,r){var l=e.memoizedProps;if(l!==r){e=t.stateNode,jn(Rt.current);var o=null;switch(n){case"input":l=Ei(e,l),r=Ei(e,r),o=[];break;case"select":l=I({},l,{value:void 0}),r=I({},r,{value:void 0}),o=[];break;case"textarea":l=Pi(e,l),r=Pi(e,r),o=[];break;default:typeof l.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Nl)}Ri(n,r);var u;n=null;for(y in l)if(!r.hasOwnProperty(y)&&l.hasOwnProperty(y)&&l[y]!=null)if(y==="style"){var d=l[y];for(u in d)d.hasOwnProperty(u)&&(n||(n={}),n[u]="")}else y!=="dangerouslySetInnerHTML"&&y!=="children"&&y!=="suppressContentEditableWarning"&&y!=="suppressHydrationWarning"&&y!=="autoFocus"&&(m.hasOwnProperty(y)?o||(o=[]):(o=o||[]).push(y,null));for(y in r){var p=r[y];if(d=l!=null?l[y]:void 0,r.hasOwnProperty(y)&&p!==d&&(p!=null||d!=null))if(y==="style")if(d){for(u in d)!d.hasOwnProperty(u)||p&&p.hasOwnProperty(u)||(n||(n={}),n[u]="");for(u in p)p.hasOwnProperty(u)&&d[u]!==p[u]&&(n||(n={}),n[u]=p[u])}else n||(o||(o=[]),o.push(y,n)),n=p;else y==="dangerouslySetInnerHTML"?(p=p?p.__html:void 0,d=d?d.__html:void 0,p!=null&&d!==p&&(o=o||[]).push(y,p)):y==="children"?typeof p!="string"&&typeof p!="number"||(o=o||[]).push(y,""+p):y!=="suppressContentEditableWarning"&&y!=="suppressHydrationWarning"&&(m.hasOwnProperty(y)?(p!=null&&y==="onScroll"&&ye("scroll",e),o||d===p||(o=[])):(o=o||[]).push(y,p))}n&&(o=o||[]).push("style",n);var y=o;(t.updateQueue=y)&&(t.flags|=4)}},fc=function(e,t,n,r){n!==r&&(t.flags|=4)};function Br(e,t){if(!Se)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ge(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags&14680064,r|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function gp(e,t,n){var r=t.pendingProps;switch(jo(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ge(t),null;case 1:return qe(t.type)&&El(),Ge(t),null;case 3:return r=t.stateNode,Zn(),je(Je),je(Ve),bo(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Rl(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,kt!==null&&(us(kt),kt=null))),Jo(e,t),Ge(t),null;case 5:Ro(t);var l=jn(Mr.current);if(n=t.type,e!==null&&t.stateNode!=null)dc(e,t,n,r,l),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(a(166));return Ge(t),null}if(e=jn(Rt.current),Rl(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[zt]=t,r[Lr]=o,e=(t.mode&1)!==0,n){case"dialog":ye("cancel",r),ye("close",r);break;case"iframe":case"object":case"embed":ye("load",r);break;case"video":case"audio":for(l=0;l<Pr.length;l++)ye(Pr[l],r);break;case"source":ye("error",r);break;case"img":case"image":case"link":ye("error",r),ye("load",r);break;case"details":ye("toggle",r);break;case"input":Qs(r,o),ye("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},ye("invalid",r);break;case"textarea":Ks(r,o),ye("invalid",r)}Ri(n,o),l=null;for(var u in o)if(o.hasOwnProperty(u)){var d=o[u];u==="children"?typeof d=="string"?r.textContent!==d&&(o.suppressHydrationWarning!==!0&&Sl(r.textContent,d,e),l=["children",d]):typeof d=="number"&&r.textContent!==""+d&&(o.suppressHydrationWarning!==!0&&Sl(r.textContent,d,e),l=["children",""+d]):m.hasOwnProperty(u)&&d!=null&&u==="onScroll"&&ye("scroll",r)}switch(n){case"input":Ht(r),Ys(r,o,!0);break;case"textarea":Ht(r),Zs(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Nl)}r=l,t.updateQueue=r,r!==null&&(t.flags|=4)}else{u=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Js(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=u.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=u.createElement(n,{is:r.is}):(e=u.createElement(n),n==="select"&&(u=e,r.multiple?u.multiple=!0:r.size&&(u.size=r.size))):e=u.createElementNS(e,n),e[zt]=t,e[Lr]=r,cc(e,t,!1,!1),t.stateNode=e;e:{switch(u=Li(n,r),n){case"dialog":ye("cancel",e),ye("close",e),l=r;break;case"iframe":case"object":case"embed":ye("load",e),l=r;break;case"video":case"audio":for(l=0;l<Pr.length;l++)ye(Pr[l],e);l=r;break;case"source":ye("error",e),l=r;break;case"img":case"image":case"link":ye("error",e),ye("load",e),l=r;break;case"details":ye("toggle",e),l=r;break;case"input":Qs(e,r),l=Ei(e,r),ye("invalid",e);break;case"option":l=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},l=I({},r,{value:void 0}),ye("invalid",e);break;case"textarea":Ks(e,r),l=Pi(e,r),ye("invalid",e);break;default:l=r}Ri(n,l),d=l;for(o in d)if(d.hasOwnProperty(o)){var p=d[o];o==="style"?ta(e,p):o==="dangerouslySetInnerHTML"?(p=p?p.__html:void 0,p!=null&&qs(e,p)):o==="children"?typeof p=="string"?(n!=="textarea"||p!=="")&&cr(e,p):typeof p=="number"&&cr(e,""+p):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(m.hasOwnProperty(o)?p!=null&&o==="onScroll"&&ye("scroll",e):p!=null&&q(e,o,p,u))}switch(n){case"input":Ht(e),Ys(e,r,!1);break;case"textarea":Ht(e),Zs(e);break;case"option":r.value!=null&&e.setAttribute("value",""+ue(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?Ln(e,!!r.multiple,o,!1):r.defaultValue!=null&&Ln(e,!!r.multiple,r.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=Nl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ge(t),null;case 6:if(e&&t.stateNode!=null)fc(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(a(166));if(n=jn(Mr.current),jn(Rt.current),Rl(t)){if(r=t.stateNode,n=t.memoizedProps,r[zt]=t,(o=r.nodeValue!==n)&&(e=st,e!==null))switch(e.tag){case 3:Sl(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Sl(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[zt]=t,t.stateNode=r}return Ge(t),null;case 13:if(je(Ce),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Se&&at!==null&&(t.mode&1)!==0&&(t.flags&128)===0)mu(),Gn(),t.flags|=98560,o=!1;else if(o=Rl(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(a(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(a(317));o[zt]=t}else Gn(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ge(t),o=!1}else kt!==null&&(us(kt),kt=null),o=!0;if(!o)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(Ce.current&1)!==0?Ae===0&&(Ae=3):fs())),t.updateQueue!==null&&(t.flags|=4),Ge(t),null);case 4:return Zn(),Jo(e,t),e===null&&zr(t.stateNode.containerInfo),Ge(t),null;case 10:return Eo(t.type._context),Ge(t),null;case 17:return qe(t.type)&&El(),Ge(t),null;case 19:if(je(Ce),o=t.memoizedState,o===null)return Ge(t),null;if(r=(t.flags&128)!==0,u=o.rendering,u===null)if(r)Br(o,!1);else{if(Ae!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(u=Ml(e),u!==null){for(t.flags|=128,Br(o,!1),r=u.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,u=o.alternate,u===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=u.childLanes,o.lanes=u.lanes,o.child=u.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=u.memoizedProps,o.memoizedState=u.memoizedState,o.updateQueue=u.updateQueue,o.type=u.type,e=u.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return xe(Ce,Ce.current&1|2),t.child}e=e.sibling}o.tail!==null&&ze()>tr&&(t.flags|=128,r=!0,Br(o,!1),t.lanes=4194304)}else{if(!r)if(e=Ml(u),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Br(o,!0),o.tail===null&&o.tailMode==="hidden"&&!u.alternate&&!Se)return Ge(t),null}else 2*ze()-o.renderingStartTime>tr&&n!==1073741824&&(t.flags|=128,r=!0,Br(o,!1),t.lanes=4194304);o.isBackwards?(u.sibling=t.child,t.child=u):(n=o.last,n!==null?n.sibling=u:t.child=u,o.last=u)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=ze(),t.sibling=null,n=Ce.current,xe(Ce,r?n&1|2:n&1),t):(Ge(t),null);case 22:case 23:return ds(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&(t.mode&1)!==0?(ut&1073741824)!==0&&(Ge(t),t.subtreeFlags&6&&(t.flags|=8192)):Ge(t),null;case 24:return null;case 25:return null}throw Error(a(156,t.tag))}function vp(e,t){switch(jo(t),t.tag){case 1:return qe(t.type)&&El(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Zn(),je(Je),je(Ve),bo(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return Ro(t),null;case 13:if(je(Ce),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(a(340));Gn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return je(Ce),null;case 4:return Zn(),null;case 10:return Eo(t.type._context),null;case 22:case 23:return ds(),null;case 24:return null;default:return null}}var Ql=!1,Ye=!1,xp=typeof WeakSet=="function"?WeakSet:Set,A=null;function qn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Te(e,t,r)}else n.current=null}function qo(e,t,n){try{n()}catch(r){Te(e,t,r)}}var pc=!1;function yp(e,t){if(co=fl,e=Va(),no(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var l=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var u=0,d=-1,p=-1,y=0,N=0,E=e,S=null;t:for(;;){for(var O;E!==n||l!==0&&E.nodeType!==3||(d=u+l),E!==o||r!==0&&E.nodeType!==3||(p=u+r),E.nodeType===3&&(u+=E.nodeValue.length),(O=E.firstChild)!==null;)S=E,E=O;for(;;){if(E===e)break t;if(S===n&&++y===l&&(d=u),S===o&&++N===r&&(p=u),(O=E.nextSibling)!==null)break;E=S,S=E.parentNode}E=O}n=d===-1||p===-1?null:{start:d,end:p}}else n=null}n=n||{start:0,end:0}}else n=null;for(fo={focusedElem:e,selectionRange:n},fl=!1,A=t;A!==null;)if(t=A,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,A=e;else for(;A!==null;){t=A;try{var M=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(M!==null){var F=M.memoizedProps,Re=M.memoizedState,v=t.stateNode,h=v.getSnapshotBeforeUpdate(t.elementType===t.type?F:St(t.type,F),Re);v.__reactInternalSnapshotBeforeUpdate=h}break;case 3:var x=t.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(a(163))}}catch(_){Te(t,t.return,_)}if(e=t.sibling,e!==null){e.return=t.return,A=e;break}A=t.return}return M=pc,pc=!1,M}function $r(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&e)===e){var o=l.destroy;l.destroy=void 0,o!==void 0&&qo(t,n,o)}l=l.next}while(l!==r)}}function Gl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function es(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function hc(e){var t=e.alternate;t!==null&&(e.alternate=null,hc(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[zt],delete t[Lr],delete t[go],delete t[tp],delete t[np])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function mc(e){return e.tag===5||e.tag===3||e.tag===4}function gc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||mc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ts(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Nl));else if(r!==4&&(e=e.child,e!==null))for(ts(e,t,n),e=e.sibling;e!==null;)ts(e,t,n),e=e.sibling}function ns(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(ns(e,t,n),e=e.sibling;e!==null;)ns(e,t,n),e=e.sibling}var We=null,Nt=!1;function rn(e,t,n){for(n=n.child;n!==null;)vc(e,t,n),n=n.sibling}function vc(e,t,n){if(Pt&&typeof Pt.onCommitFiberUnmount=="function")try{Pt.onCommitFiberUnmount(ol,n)}catch{}switch(n.tag){case 5:Ye||qn(n,t);case 6:var r=We,l=Nt;We=null,rn(e,t,n),We=r,Nt=l,We!==null&&(Nt?(e=We,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):We.removeChild(n.stateNode));break;case 18:We!==null&&(Nt?(e=We,n=n.stateNode,e.nodeType===8?mo(e.parentNode,n):e.nodeType===1&&mo(e,n),wr(e)):mo(We,n.stateNode));break;case 4:r=We,l=Nt,We=n.stateNode.containerInfo,Nt=!0,rn(e,t,n),We=r,Nt=l;break;case 0:case 11:case 14:case 15:if(!Ye&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){l=r=r.next;do{var o=l,u=o.destroy;o=o.tag,u!==void 0&&((o&2)!==0||(o&4)!==0)&&qo(n,t,u),l=l.next}while(l!==r)}rn(e,t,n);break;case 1:if(!Ye&&(qn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(d){Te(n,t,d)}rn(e,t,n);break;case 21:rn(e,t,n);break;case 22:n.mode&1?(Ye=(r=Ye)||n.memoizedState!==null,rn(e,t,n),Ye=r):rn(e,t,n);break;default:rn(e,t,n)}}function xc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new xp),t.forEach(function(r){var l=Tp.bind(null,e,r);n.has(r)||(n.add(r),r.then(l,l))})}}function Ct(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var l=n[r];try{var o=e,u=t,d=u;e:for(;d!==null;){switch(d.tag){case 5:We=d.stateNode,Nt=!1;break e;case 3:We=d.stateNode.containerInfo,Nt=!0;break e;case 4:We=d.stateNode.containerInfo,Nt=!0;break e}d=d.return}if(We===null)throw Error(a(160));vc(o,u,l),We=null,Nt=!1;var p=l.alternate;p!==null&&(p.return=null),l.return=null}catch(y){Te(l,t,y)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)yc(t,e),t=t.sibling}function yc(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ct(t,e),bt(e),r&4){try{$r(3,e,e.return),Gl(3,e)}catch(F){Te(e,e.return,F)}try{$r(5,e,e.return)}catch(F){Te(e,e.return,F)}}break;case 1:Ct(t,e),bt(e),r&512&&n!==null&&qn(n,n.return);break;case 5:if(Ct(t,e),bt(e),r&512&&n!==null&&qn(n,n.return),e.flags&32){var l=e.stateNode;try{cr(l,"")}catch(F){Te(e,e.return,F)}}if(r&4&&(l=e.stateNode,l!=null)){var o=e.memoizedProps,u=n!==null?n.memoizedProps:o,d=e.type,p=e.updateQueue;if(e.updateQueue=null,p!==null)try{d==="input"&&o.type==="radio"&&o.name!=null&&Gs(l,o),Li(d,u);var y=Li(d,o);for(u=0;u<p.length;u+=2){var N=p[u],E=p[u+1];N==="style"?ta(l,E):N==="dangerouslySetInnerHTML"?qs(l,E):N==="children"?cr(l,E):q(l,N,E,y)}switch(d){case"input":_i(l,o);break;case"textarea":Xs(l,o);break;case"select":var S=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!o.multiple;var O=o.value;O!=null?Ln(l,!!o.multiple,O,!1):S!==!!o.multiple&&(o.defaultValue!=null?Ln(l,!!o.multiple,o.defaultValue,!0):Ln(l,!!o.multiple,o.multiple?[]:"",!1))}l[Lr]=o}catch(F){Te(e,e.return,F)}}break;case 6:if(Ct(t,e),bt(e),r&4){if(e.stateNode===null)throw Error(a(162));l=e.stateNode,o=e.memoizedProps;try{l.nodeValue=o}catch(F){Te(e,e.return,F)}}break;case 3:if(Ct(t,e),bt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{wr(t.containerInfo)}catch(F){Te(e,e.return,F)}break;case 4:Ct(t,e),bt(e);break;case 13:Ct(t,e),bt(e),l=e.child,l.flags&8192&&(o=l.memoizedState!==null,l.stateNode.isHidden=o,!o||l.alternate!==null&&l.alternate.memoizedState!==null||(is=ze())),r&4&&xc(e);break;case 22:if(N=n!==null&&n.memoizedState!==null,e.mode&1?(Ye=(y=Ye)||N,Ct(t,e),Ye=y):Ct(t,e),bt(e),r&8192){if(y=e.memoizedState!==null,(e.stateNode.isHidden=y)&&!N&&(e.mode&1)!==0)for(A=e,N=e.child;N!==null;){for(E=A=N;A!==null;){switch(S=A,O=S.child,S.tag){case 0:case 11:case 14:case 15:$r(4,S,S.return);break;case 1:qn(S,S.return);var M=S.stateNode;if(typeof M.componentWillUnmount=="function"){r=S,n=S.return;try{t=r,M.props=t.memoizedProps,M.state=t.memoizedState,M.componentWillUnmount()}catch(F){Te(r,n,F)}}break;case 5:qn(S,S.return);break;case 22:if(S.memoizedState!==null){kc(E);continue}}O!==null?(O.return=S,A=O):kc(E)}N=N.sibling}e:for(N=null,E=e;;){if(E.tag===5){if(N===null){N=E;try{l=E.stateNode,y?(o=l.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(d=E.stateNode,p=E.memoizedProps.style,u=p!=null&&p.hasOwnProperty("display")?p.display:null,d.style.display=ea("display",u))}catch(F){Te(e,e.return,F)}}}else if(E.tag===6){if(N===null)try{E.stateNode.nodeValue=y?"":E.memoizedProps}catch(F){Te(e,e.return,F)}}else if((E.tag!==22&&E.tag!==23||E.memoizedState===null||E===e)&&E.child!==null){E.child.return=E,E=E.child;continue}if(E===e)break e;for(;E.sibling===null;){if(E.return===null||E.return===e)break e;N===E&&(N=null),E=E.return}N===E&&(N=null),E.sibling.return=E.return,E=E.sibling}}break;case 19:Ct(t,e),bt(e),r&4&&xc(e);break;case 21:break;default:Ct(t,e),bt(e)}}function bt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(mc(n)){var r=n;break e}n=n.return}throw Error(a(160))}switch(r.tag){case 5:var l=r.stateNode;r.flags&32&&(cr(l,""),r.flags&=-33);var o=gc(e);ns(e,o,l);break;case 3:case 4:var u=r.stateNode.containerInfo,d=gc(e);ts(e,d,u);break;default:throw Error(a(161))}}catch(p){Te(e,e.return,p)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function jp(e,t,n){A=e,jc(e)}function jc(e,t,n){for(var r=(e.mode&1)!==0;A!==null;){var l=A,o=l.child;if(l.tag===22&&r){var u=l.memoizedState!==null||Ql;if(!u){var d=l.alternate,p=d!==null&&d.memoizedState!==null||Ye;d=Ql;var y=Ye;if(Ql=u,(Ye=p)&&!y)for(A=l;A!==null;)u=A,p=u.child,u.tag===22&&u.memoizedState!==null?Sc(l):p!==null?(p.return=u,A=p):Sc(l);for(;o!==null;)A=o,jc(o),o=o.sibling;A=l,Ql=d,Ye=y}wc(e)}else(l.subtreeFlags&8772)!==0&&o!==null?(o.return=l,A=o):wc(e)}}function wc(e){for(;A!==null;){var t=A;if((t.flags&8772)!==0){var n=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:Ye||Gl(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Ye)if(n===null)r.componentDidMount();else{var l=t.elementType===t.type?n.memoizedProps:St(t.type,n.memoizedProps);r.componentDidUpdate(l,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&ku(t,o,r);break;case 3:var u=t.updateQueue;if(u!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}ku(t,u,n)}break;case 5:var d=t.stateNode;if(n===null&&t.flags&4){n=d;var p=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":p.autoFocus&&n.focus();break;case"img":p.src&&(n.src=p.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var y=t.alternate;if(y!==null){var N=y.memoizedState;if(N!==null){var E=N.dehydrated;E!==null&&wr(E)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(a(163))}Ye||t.flags&512&&es(t)}catch(S){Te(t,t.return,S)}}if(t===e){A=null;break}if(n=t.sibling,n!==null){n.return=t.return,A=n;break}A=t.return}}function kc(e){for(;A!==null;){var t=A;if(t===e){A=null;break}var n=t.sibling;if(n!==null){n.return=t.return,A=n;break}A=t.return}}function Sc(e){for(;A!==null;){var t=A;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Gl(4,t)}catch(p){Te(t,n,p)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var l=t.return;try{r.componentDidMount()}catch(p){Te(t,l,p)}}var o=t.return;try{es(t)}catch(p){Te(t,o,p)}break;case 5:var u=t.return;try{es(t)}catch(p){Te(t,u,p)}}}catch(p){Te(t,t.return,p)}if(t===e){A=null;break}var d=t.sibling;if(d!==null){d.return=t.return,A=d;break}A=t.return}}var wp=Math.ceil,Yl=L.ReactCurrentDispatcher,rs=L.ReactCurrentOwner,gt=L.ReactCurrentBatchConfig,de=0,Fe=null,Le=null,Be=0,ut=0,er=Jt(0),Ae=0,Hr=null,kn=0,Kl=0,ls=0,Vr=null,tt=null,is=0,tr=1/0,Wt=null,Xl=!1,os=null,ln=null,Zl=!1,on=null,Jl=0,Qr=0,ss=null,ql=-1,ei=0;function Ze(){return(de&6)!==0?ze():ql!==-1?ql:ql=ze()}function sn(e){return(e.mode&1)===0?1:(de&2)!==0&&Be!==0?Be&-Be:lp.transition!==null?(ei===0&&(ei=ga()),ei):(e=me,e!==0||(e=window.event,e=e===void 0?16:Ca(e.type)),e)}function Et(e,t,n,r){if(50<Qr)throw Qr=0,ss=null,Error(a(185));gr(e,n,r),((de&2)===0||e!==Fe)&&(e===Fe&&((de&2)===0&&(Kl|=n),Ae===4&&an(e,Be)),nt(e,r),n===1&&de===0&&(t.mode&1)===0&&(tr=ze()+500,Tl&&en()))}function nt(e,t){var n=e.callbackNode;rf(e,t);var r=ul(e,e===Fe?Be:0);if(r===0)n!==null&&pa(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&pa(n),t===1)e.tag===0?rp(Cc.bind(null,e)):cu(Cc.bind(null,e)),qf(function(){(de&6)===0&&en()}),n=null;else{switch(va(r)){case 1:n=Fi;break;case 4:n=ha;break;case 16:n=il;break;case 536870912:n=ma;break;default:n=il}n=bc(n,Nc.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Nc(e,t){if(ql=-1,ei=0,(de&6)!==0)throw Error(a(327));var n=e.callbackNode;if(nr()&&e.callbackNode!==n)return null;var r=ul(e,e===Fe?Be:0);if(r===0)return null;if((r&30)!==0||(r&e.expiredLanes)!==0||t)t=ti(e,r);else{t=r;var l=de;de|=2;var o=_c();(Fe!==e||Be!==t)&&(Wt=null,tr=ze()+500,Nn(e,t));do try{Np();break}catch(d){Ec(e,d)}while(!0);Co(),Yl.current=o,de=l,Le!==null?t=0:(Fe=null,Be=0,t=Ae)}if(t!==0){if(t===2&&(l=Ui(e),l!==0&&(r=l,t=as(e,l))),t===1)throw n=Hr,Nn(e,0),an(e,r),nt(e,ze()),n;if(t===6)an(e,r);else{if(l=e.current.alternate,(r&30)===0&&!kp(l)&&(t=ti(e,r),t===2&&(o=Ui(e),o!==0&&(r=o,t=as(e,o))),t===1))throw n=Hr,Nn(e,0),an(e,r),nt(e,ze()),n;switch(e.finishedWork=l,e.finishedLanes=r,t){case 0:case 1:throw Error(a(345));case 2:Cn(e,tt,Wt);break;case 3:if(an(e,r),(r&130023424)===r&&(t=is+500-ze(),10<t)){if(ul(e,0)!==0)break;if(l=e.suspendedLanes,(l&r)!==r){Ze(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=ho(Cn.bind(null,e,tt,Wt),t);break}Cn(e,tt,Wt);break;case 4:if(an(e,r),(r&4194240)===r)break;for(t=e.eventTimes,l=-1;0<r;){var u=31-jt(r);o=1<<u,u=t[u],u>l&&(l=u),r&=~o}if(r=l,r=ze()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*wp(r/1960))-r,10<r){e.timeoutHandle=ho(Cn.bind(null,e,tt,Wt),r);break}Cn(e,tt,Wt);break;case 5:Cn(e,tt,Wt);break;default:throw Error(a(329))}}}return nt(e,ze()),e.callbackNode===n?Nc.bind(null,e):null}function as(e,t){var n=Vr;return e.current.memoizedState.isDehydrated&&(Nn(e,t).flags|=256),e=ti(e,t),e!==2&&(t=tt,tt=n,t!==null&&us(t)),e}function us(e){tt===null?tt=e:tt.push.apply(tt,e)}function kp(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var l=n[r],o=l.getSnapshot;l=l.value;try{if(!wt(o(),l))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function an(e,t){for(t&=~ls,t&=~Kl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-jt(t),r=1<<n;e[n]=-1,t&=~r}}function Cc(e){if((de&6)!==0)throw Error(a(327));nr();var t=ul(e,0);if((t&1)===0)return nt(e,ze()),null;var n=ti(e,t);if(e.tag!==0&&n===2){var r=Ui(e);r!==0&&(t=r,n=as(e,r))}if(n===1)throw n=Hr,Nn(e,0),an(e,t),nt(e,ze()),n;if(n===6)throw Error(a(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Cn(e,tt,Wt),nt(e,ze()),null}function cs(e,t){var n=de;de|=1;try{return e(t)}finally{de=n,de===0&&(tr=ze()+500,Tl&&en())}}function Sn(e){on!==null&&on.tag===0&&(de&6)===0&&nr();var t=de;de|=1;var n=gt.transition,r=me;try{if(gt.transition=null,me=1,e)return e()}finally{me=r,gt.transition=n,de=t,(de&6)===0&&en()}}function ds(){ut=er.current,je(er)}function Nn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Jf(n)),Le!==null)for(n=Le.return;n!==null;){var r=n;switch(jo(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&El();break;case 3:Zn(),je(Je),je(Ve),bo();break;case 5:Ro(r);break;case 4:Zn();break;case 13:je(Ce);break;case 19:je(Ce);break;case 10:Eo(r.type._context);break;case 22:case 23:ds()}n=n.return}if(Fe=e,Le=e=un(e.current,null),Be=ut=t,Ae=0,Hr=null,ls=Kl=kn=0,tt=Vr=null,yn!==null){for(t=0;t<yn.length;t++)if(n=yn[t],r=n.interleaved,r!==null){n.interleaved=null;var l=r.next,o=n.pending;if(o!==null){var u=o.next;o.next=l,r.next=u}n.pending=r}yn=null}return e}function Ec(e,t){do{var n=Le;try{if(Co(),Dl.current=Bl,Fl){for(var r=Ee.memoizedState;r!==null;){var l=r.queue;l!==null&&(l.pending=null),r=r.next}Fl=!1}if(wn=0,De=Oe=Ee=null,Dr=!1,Fr=0,rs.current=null,n===null||n.return===null){Ae=1,Hr=t,Le=null;break}e:{var o=e,u=n.return,d=n,p=t;if(t=Be,d.flags|=32768,p!==null&&typeof p=="object"&&typeof p.then=="function"){var y=p,N=d,E=N.tag;if((N.mode&1)===0&&(E===0||E===11||E===15)){var S=N.alternate;S?(N.updateQueue=S.updateQueue,N.memoizedState=S.memoizedState,N.lanes=S.lanes):(N.updateQueue=null,N.memoizedState=null)}var O=Zu(u);if(O!==null){O.flags&=-257,Ju(O,u,d,o,t),O.mode&1&&Xu(o,y,t),t=O,p=y;var M=t.updateQueue;if(M===null){var F=new Set;F.add(p),t.updateQueue=F}else M.add(p);break e}else{if((t&1)===0){Xu(o,y,t),fs();break e}p=Error(a(426))}}else if(Se&&d.mode&1){var Re=Zu(u);if(Re!==null){(Re.flags&65536)===0&&(Re.flags|=256),Ju(Re,u,d,o,t),So(Jn(p,d));break e}}o=p=Jn(p,d),Ae!==4&&(Ae=2),Vr===null?Vr=[o]:Vr.push(o),o=u;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var v=Yu(o,p,t);wu(o,v);break e;case 1:d=p;var h=o.type,x=o.stateNode;if((o.flags&128)===0&&(typeof h.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(ln===null||!ln.has(x)))){o.flags|=65536,t&=-t,o.lanes|=t;var _=Ku(o,d,t);wu(o,_);break e}}o=o.return}while(o!==null)}Pc(n)}catch(W){t=W,Le===n&&n!==null&&(Le=n=n.return);continue}break}while(!0)}function _c(){var e=Yl.current;return Yl.current=Bl,e===null?Bl:e}function fs(){(Ae===0||Ae===3||Ae===2)&&(Ae=4),Fe===null||(kn&268435455)===0&&(Kl&268435455)===0||an(Fe,Be)}function ti(e,t){var n=de;de|=2;var r=_c();(Fe!==e||Be!==t)&&(Wt=null,Nn(e,t));do try{Sp();break}catch(l){Ec(e,l)}while(!0);if(Co(),de=n,Yl.current=r,Le!==null)throw Error(a(261));return Fe=null,Be=0,Ae}function Sp(){for(;Le!==null;)Tc(Le)}function Np(){for(;Le!==null&&!Yd();)Tc(Le)}function Tc(e){var t=Lc(e.alternate,e,ut);e.memoizedProps=e.pendingProps,t===null?Pc(e):Le=t,rs.current=null}function Pc(e){var t=e;do{var n=t.alternate;if(e=t.return,(t.flags&32768)===0){if(n=gp(n,t,ut),n!==null){Le=n;return}}else{if(n=vp(n,t),n!==null){n.flags&=32767,Le=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ae=6,Le=null;return}}if(t=t.sibling,t!==null){Le=t;return}Le=t=e}while(t!==null);Ae===0&&(Ae=5)}function Cn(e,t,n){var r=me,l=gt.transition;try{gt.transition=null,me=1,Cp(e,t,n,r)}finally{gt.transition=l,me=r}return null}function Cp(e,t,n,r){do nr();while(on!==null);if((de&6)!==0)throw Error(a(327));n=e.finishedWork;var l=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(a(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(lf(e,o),e===Fe&&(Le=Fe=null,Be=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||Zl||(Zl=!0,bc(il,function(){return nr(),null})),o=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||o){o=gt.transition,gt.transition=null;var u=me;me=1;var d=de;de|=4,rs.current=null,yp(e,n),yc(n,e),Vf(fo),fl=!!co,fo=co=null,e.current=n,jp(n),Kd(),de=d,me=u,gt.transition=o}else e.current=n;if(Zl&&(Zl=!1,on=e,Jl=l),o=e.pendingLanes,o===0&&(ln=null),Jd(n.stateNode),nt(e,ze()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)l=t[n],r(l.value,{componentStack:l.stack,digest:l.digest});if(Xl)throw Xl=!1,e=os,os=null,e;return(Jl&1)!==0&&e.tag!==0&&nr(),o=e.pendingLanes,(o&1)!==0?e===ss?Qr++:(Qr=0,ss=e):Qr=0,en(),null}function nr(){if(on!==null){var e=va(Jl),t=gt.transition,n=me;try{if(gt.transition=null,me=16>e?16:e,on===null)var r=!1;else{if(e=on,on=null,Jl=0,(de&6)!==0)throw Error(a(331));var l=de;for(de|=4,A=e.current;A!==null;){var o=A,u=o.child;if((A.flags&16)!==0){var d=o.deletions;if(d!==null){for(var p=0;p<d.length;p++){var y=d[p];for(A=y;A!==null;){var N=A;switch(N.tag){case 0:case 11:case 15:$r(8,N,o)}var E=N.child;if(E!==null)E.return=N,A=E;else for(;A!==null;){N=A;var S=N.sibling,O=N.return;if(hc(N),N===y){A=null;break}if(S!==null){S.return=O,A=S;break}A=O}}}var M=o.alternate;if(M!==null){var F=M.child;if(F!==null){M.child=null;do{var Re=F.sibling;F.sibling=null,F=Re}while(F!==null)}}A=o}}if((o.subtreeFlags&2064)!==0&&u!==null)u.return=o,A=u;else e:for(;A!==null;){if(o=A,(o.flags&2048)!==0)switch(o.tag){case 0:case 11:case 15:$r(9,o,o.return)}var v=o.sibling;if(v!==null){v.return=o.return,A=v;break e}A=o.return}}var h=e.current;for(A=h;A!==null;){u=A;var x=u.child;if((u.subtreeFlags&2064)!==0&&x!==null)x.return=u,A=x;else e:for(u=h;A!==null;){if(d=A,(d.flags&2048)!==0)try{switch(d.tag){case 0:case 11:case 15:Gl(9,d)}}catch(W){Te(d,d.return,W)}if(d===u){A=null;break e}var _=d.sibling;if(_!==null){_.return=d.return,A=_;break e}A=d.return}}if(de=l,en(),Pt&&typeof Pt.onPostCommitFiberRoot=="function")try{Pt.onPostCommitFiberRoot(ol,e)}catch{}r=!0}return r}finally{me=n,gt.transition=t}}return!1}function zc(e,t,n){t=Jn(n,t),t=Yu(e,t,1),e=nn(e,t,1),t=Ze(),e!==null&&(gr(e,1,t),nt(e,t))}function Te(e,t,n){if(e.tag===3)zc(e,e,n);else for(;t!==null;){if(t.tag===3){zc(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(ln===null||!ln.has(r))){e=Jn(n,e),e=Ku(t,e,1),t=nn(t,e,1),e=Ze(),t!==null&&(gr(t,1,e),nt(t,e));break}}t=t.return}}function Ep(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Ze(),e.pingedLanes|=e.suspendedLanes&n,Fe===e&&(Be&n)===n&&(Ae===4||Ae===3&&(Be&130023424)===Be&&500>ze()-is?Nn(e,0):ls|=n),nt(e,t)}function Rc(e,t){t===0&&((e.mode&1)===0?t=1:(t=al,al<<=1,(al&130023424)===0&&(al=4194304)));var n=Ze();e=Dt(e,t),e!==null&&(gr(e,t,n),nt(e,n))}function _p(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Rc(e,n)}function Tp(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,l=e.memoizedState;l!==null&&(n=l.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(a(314))}r!==null&&r.delete(t),Rc(e,n)}var Lc;Lc=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Je.current)et=!0;else{if((e.lanes&n)===0&&(t.flags&128)===0)return et=!1,mp(e,t,n);et=(e.flags&131072)!==0}else et=!1,Se&&(t.flags&1048576)!==0&&du(t,zl,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Vl(e,t),e=t.pendingProps;var l=Hn(t,Ve.current);Xn(t,n),l=Ao(null,t,r,e,l,n);var o=Mo();return t.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,qe(r)?(o=!0,_l(t)):o=!1,t.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,Po(t),l.updater=$l,t.stateNode=l,l._reactInternals=t,$o(t,r,e,n),t=Go(null,t,r,!0,o,n)):(t.tag=0,Se&&o&&yo(t),Xe(null,t,l,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Vl(e,t),e=t.pendingProps,l=r._init,r=l(r._payload),t.type=r,l=t.tag=zp(r),e=St(r,e),l){case 0:t=Qo(null,t,r,e,n);break e;case 1:t=lc(null,t,r,e,n);break e;case 11:t=qu(null,t,r,e,n);break e;case 14:t=ec(null,t,r,St(r.type,e),n);break e}throw Error(a(306,r,""))}return t;case 0:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:St(r,l),Qo(e,t,r,l,n);case 1:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:St(r,l),lc(e,t,r,l,n);case 3:e:{if(ic(t),e===null)throw Error(a(387));r=t.pendingProps,o=t.memoizedState,l=o.element,ju(e,t),Al(t,r,null,n);var u=t.memoizedState;if(r=u.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:u.cache,pendingSuspenseBoundaries:u.pendingSuspenseBoundaries,transitions:u.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){l=Jn(Error(a(423)),t),t=oc(e,t,r,n,l);break e}else if(r!==l){l=Jn(Error(a(424)),t),t=oc(e,t,r,n,l);break e}else for(at=Zt(t.stateNode.containerInfo.firstChild),st=t,Se=!0,kt=null,n=xu(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Gn(),r===l){t=Ut(e,t,n);break e}Xe(e,t,r,n)}t=t.child}return t;case 5:return Su(t),e===null&&ko(t),r=t.type,l=t.pendingProps,o=e!==null?e.memoizedProps:null,u=l.children,po(r,l)?u=null:o!==null&&po(r,o)&&(t.flags|=32),rc(e,t),Xe(e,t,u,n),t.child;case 6:return e===null&&ko(t),null;case 13:return sc(e,t,n);case 4:return zo(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Yn(t,null,r,n):Xe(e,t,r,n),t.child;case 11:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:St(r,l),qu(e,t,r,l,n);case 7:return Xe(e,t,t.pendingProps,n),t.child;case 8:return Xe(e,t,t.pendingProps.children,n),t.child;case 12:return Xe(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,l=t.pendingProps,o=t.memoizedProps,u=l.value,xe(bl,r._currentValue),r._currentValue=u,o!==null)if(wt(o.value,u)){if(o.children===l.children&&!Je.current){t=Ut(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var d=o.dependencies;if(d!==null){u=o.child;for(var p=d.firstContext;p!==null;){if(p.context===r){if(o.tag===1){p=Ft(-1,n&-n),p.tag=2;var y=o.updateQueue;if(y!==null){y=y.shared;var N=y.pending;N===null?p.next=p:(p.next=N.next,N.next=p),y.pending=p}}o.lanes|=n,p=o.alternate,p!==null&&(p.lanes|=n),_o(o.return,n,t),d.lanes|=n;break}p=p.next}}else if(o.tag===10)u=o.type===t.type?null:o.child;else if(o.tag===18){if(u=o.return,u===null)throw Error(a(341));u.lanes|=n,d=u.alternate,d!==null&&(d.lanes|=n),_o(u,n,t),u=o.sibling}else u=o.child;if(u!==null)u.return=o;else for(u=o;u!==null;){if(u===t){u=null;break}if(o=u.sibling,o!==null){o.return=u.return,u=o;break}u=u.return}o=u}Xe(e,t,l.children,n),t=t.child}return t;case 9:return l=t.type,r=t.pendingProps.children,Xn(t,n),l=ht(l),r=r(l),t.flags|=1,Xe(e,t,r,n),t.child;case 14:return r=t.type,l=St(r,t.pendingProps),l=St(r.type,l),ec(e,t,r,l,n);case 15:return tc(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:St(r,l),Vl(e,t),t.tag=1,qe(r)?(e=!0,_l(t)):e=!1,Xn(t,n),Qu(t,r,l),$o(t,r,l,n),Go(null,t,r,!0,e,n);case 19:return uc(e,t,n);case 22:return nc(e,t,n)}throw Error(a(156,t.tag))};function bc(e,t){return fa(e,t)}function Pp(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function vt(e,t,n,r){return new Pp(e,t,n,r)}function ps(e){return e=e.prototype,!(!e||!e.isReactComponent)}function zp(e){if(typeof e=="function")return ps(e)?1:0;if(e!=null){if(e=e.$$typeof,e===_e)return 11;if(e===Ke)return 14}return 2}function un(e,t){var n=e.alternate;return n===null?(n=vt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function ni(e,t,n,r,l,o){var u=2;if(r=e,typeof e=="function")ps(e)&&(u=1);else if(typeof e=="string")u=5;else e:switch(e){case R:return En(n.children,l,o,t);case U:u=8,l|=8;break;case ge:return e=vt(12,n,t,l|2),e.elementType=ge,e.lanes=o,e;case ke:return e=vt(13,n,t,l),e.elementType=ke,e.lanes=o,e;case $e:return e=vt(19,n,t,l),e.elementType=$e,e.lanes=o,e;case ve:return ri(n,l,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Pe:u=10;break e;case se:u=9;break e;case _e:u=11;break e;case Ke:u=14;break e;case He:u=16,r=null;break e}throw Error(a(130,e==null?e:typeof e,""))}return t=vt(u,n,t,l),t.elementType=e,t.type=r,t.lanes=o,t}function En(e,t,n,r){return e=vt(7,e,r,t),e.lanes=n,e}function ri(e,t,n,r){return e=vt(22,e,r,t),e.elementType=ve,e.lanes=n,e.stateNode={isHidden:!1},e}function hs(e,t,n){return e=vt(6,e,null,t),e.lanes=n,e}function ms(e,t,n){return t=vt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Rp(e,t,n,r,l){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Wi(0),this.expirationTimes=Wi(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Wi(0),this.identifierPrefix=r,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function gs(e,t,n,r,l,o,u,d,p){return e=new Rp(e,t,n,d,p),t===1?(t=1,o===!0&&(t|=8)):t=0,o=vt(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Po(o),e}function Lp(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Q,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Ic(e){if(!e)return qt;e=e._reactInternals;e:{if(hn(e)!==e||e.tag!==1)throw Error(a(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(qe(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(a(171))}if(e.tag===1){var n=e.type;if(qe(n))return au(e,n,t)}return t}function Oc(e,t,n,r,l,o,u,d,p){return e=gs(n,r,!0,e,l,o,u,d,p),e.context=Ic(null),n=e.current,r=Ze(),l=sn(n),o=Ft(r,l),o.callback=t!=null?t:null,nn(n,o,l),e.current.lanes=l,gr(e,l,r),nt(e,r),e}function li(e,t,n,r){var l=t.current,o=Ze(),u=sn(l);return n=Ic(n),t.context===null?t.context=n:t.pendingContext=n,t=Ft(o,u),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=nn(l,t,u),e!==null&&(Et(e,l,u,o),Ol(e,l,u)),u}function ii(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Ac(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function vs(e,t){Ac(e,t),(e=e.alternate)&&Ac(e,t)}function bp(){return null}var Mc=typeof reportError=="function"?reportError:function(e){console.error(e)};function xs(e){this._internalRoot=e}oi.prototype.render=xs.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(a(409));li(e,t,null,null)},oi.prototype.unmount=xs.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Sn(function(){li(null,e,null,null)}),t[It]=null}};function oi(e){this._internalRoot=e}oi.prototype.unstable_scheduleHydration=function(e){if(e){var t=ja();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Yt.length&&t!==0&&t<Yt[n].priority;n++);Yt.splice(n,0,e),n===0&&Sa(e)}};function ys(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function si(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Dc(){}function Ip(e,t,n,r,l){if(l){if(typeof r=="function"){var o=r;r=function(){var y=ii(u);o.call(y)}}var u=Oc(t,r,e,0,null,!1,!1,"",Dc);return e._reactRootContainer=u,e[It]=u.current,zr(e.nodeType===8?e.parentNode:e),Sn(),u}for(;l=e.lastChild;)e.removeChild(l);if(typeof r=="function"){var d=r;r=function(){var y=ii(p);d.call(y)}}var p=gs(e,0,!1,null,null,!1,!1,"",Dc);return e._reactRootContainer=p,e[It]=p.current,zr(e.nodeType===8?e.parentNode:e),Sn(function(){li(t,p,n,r)}),p}function ai(e,t,n,r,l){var o=n._reactRootContainer;if(o){var u=o;if(typeof l=="function"){var d=l;l=function(){var p=ii(u);d.call(p)}}li(t,u,e,l)}else u=Ip(n,t,e,l,r);return ii(u)}xa=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=mr(t.pendingLanes);n!==0&&(Bi(t,n|1),nt(t,ze()),(de&6)===0&&(tr=ze()+500,en()))}break;case 13:Sn(function(){var r=Dt(e,1);if(r!==null){var l=Ze();Et(r,e,1,l)}}),vs(e,1)}},$i=function(e){if(e.tag===13){var t=Dt(e,134217728);if(t!==null){var n=Ze();Et(t,e,134217728,n)}vs(e,134217728)}},ya=function(e){if(e.tag===13){var t=sn(e),n=Dt(e,t);if(n!==null){var r=Ze();Et(n,e,t,r)}vs(e,t)}},ja=function(){return me},wa=function(e,t){var n=me;try{return me=e,t()}finally{me=n}},Oi=function(e,t,n){switch(t){case"input":if(_i(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var l=Cl(r);if(!l)throw Error(a(90));pn(r),_i(r,l)}}}break;case"textarea":Xs(e,n);break;case"select":t=n.value,t!=null&&Ln(e,!!n.multiple,t,!1)}},ia=cs,oa=Sn;var Op={usingClientEntryPoint:!1,Events:[br,Bn,Cl,ra,la,cs]},Gr={findFiberByHostInstance:mn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Ap={bundleType:Gr.bundleType,version:Gr.version,rendererPackageName:Gr.rendererPackageName,rendererConfig:Gr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:L.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=ca(e),e===null?null:e.stateNode},findFiberByHostInstance:Gr.findFiberByHostInstance||bp,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__!="undefined"){var ui=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ui.isDisabled&&ui.supportsFiber)try{ol=ui.inject(Ap),Pt=ui}catch{}}return rt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Op,rt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ys(t))throw Error(a(200));return Lp(e,t,null,n)},rt.createRoot=function(e,t){if(!ys(e))throw Error(a(299));var n=!1,r="",l=Mc;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),t=gs(e,1,!1,null,null,n,!1,r,l),e[It]=t.current,zr(e.nodeType===8?e.parentNode:e),new xs(t)},rt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(a(188)):(e=Object.keys(e).join(","),Error(a(268,e)));return e=ca(t),e=e===null?null:e.stateNode,e},rt.flushSync=function(e){return Sn(e)},rt.hydrate=function(e,t,n){if(!si(t))throw Error(a(200));return ai(null,e,t,!0,n)},rt.hydrateRoot=function(e,t,n){if(!ys(e))throw Error(a(405));var r=n!=null&&n.hydratedSources||null,l=!1,o="",u=Mc;if(n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(u=n.onRecoverableError)),t=Oc(t,null,e,1,n!=null?n:null,l,!1,o,u),e[It]=t.current,zr(e),r)for(e=0;e<r.length;e++)n=r[e],l=n._getVersion,l=l(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,l]:t.mutableSourceEagerHydrationData.push(n,l);return new oi(t)},rt.render=function(e,t,n){if(!si(t))throw Error(a(200));return ai(null,e,t,!1,n)},rt.unmountComponentAtNode=function(e){if(!si(e))throw Error(a(40));return e._reactRootContainer?(Sn(function(){ai(null,null,e,!1,function(){e._reactRootContainer=null,e[It]=null})}),!0):!1},rt.unstable_batchedUpdates=cs,rt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!si(n))throw Error(a(200));if(e==null||e._reactInternals===void 0)throw Error(a(38));return ai(e,t,n,!1,r)},rt.version="18.3.1-next-f1338f8080-20240426",rt}var Qc;function Vp(){if(Qc)return ks.exports;Qc=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__=="undefined"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(c){console.error(c)}}return s(),ks.exports=Hp(),ks.exports}var Gc;function Qp(){if(Gc)return ci;Gc=1;var s=Vp();return ci.createRoot=s.createRoot,ci.hydrateRoot=s.hydrateRoot,ci}var Gp=Qp(),lt=Fs();const dt=Dp(lt);var it=function(){return it=Object.assign||function(c){for(var a,f=1,m=arguments.length;f<m;f++){a=arguments[f];for(var w in a)Object.prototype.hasOwnProperty.call(a,w)&&(c[w]=a[w])}return c},it.apply(this,arguments)};function gi(s,c,a){if(a||arguments.length===2)for(var f=0,m=c.length,w;f<m;f++)(w||!(f in c))&&(w||(w=Array.prototype.slice.call(c,0,f)),w[f]=c[f]);return s.concat(w||Array.prototype.slice.call(c))}var we="-ms-",Zr="-moz-",pe="-webkit-",md="comm",wi="rule",Us="decl",Yp="@import",Kp="@namespace",gd="@keyframes",Xp="@layer",vd=Math.abs,Ws=String.fromCharCode,Ls=Object.assign;function Zp(s,c){return Me(s,0)^45?(((c<<2^Me(s,0))<<2^Me(s,1))<<2^Me(s,2))<<2^Me(s,3):0}function xd(s){return s.trim()}function Bt(s,c){return(s=c.exec(s))?s[0]:s}function ne(s,c,a){return s.replace(c,a)}function di(s,c,a){return s.indexOf(c,a)}function Me(s,c){return s.charCodeAt(c)|0}function Rn(s,c,a){return s.slice(c,a)}function _t(s){return s.length}function yd(s){return s.length}function Kr(s,c){return c.push(s),s}function Jp(s,c){return s.map(c).join("")}function Yc(s,c){return s.filter(function(a){return!Bt(a,c)})}var ki=1,lr=1,jd=0,xt=0,be=0,ar="";function Si(s,c,a,f,m,w,C,b){return{value:s,root:c,parent:a,type:f,props:m,children:w,line:ki,column:lr,length:C,return:"",siblings:b}}function dn(s,c){return Ls(Si("",null,null,"",null,null,0,s.siblings),s,{length:-s.length},c)}function rr(s){for(;s.root;)s=dn(s.root,{children:[s]});Kr(s,s.siblings)}function qp(){return be}function eh(){return be=xt>0?Me(ar,--xt):0,lr--,be===10&&(lr=1,ki--),be}function Tt(){return be=xt<jd?Me(ar,xt++):0,lr++,be===10&&(lr=1,ki++),be}function fn(){return Me(ar,xt)}function fi(){return xt}function Ni(s,c){return Rn(ar,s,c)}function qr(s){switch(s){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function th(s){return ki=lr=1,jd=_t(ar=s),xt=0,[]}function nh(s){return ar="",s}function Cs(s){return xd(Ni(xt-1,bs(s===91?s+2:s===40?s+1:s)))}function rh(s){for(;(be=fn())&&be<33;)Tt();return qr(s)>2||qr(be)>3?"":" "}function lh(s,c){for(;--c&&Tt()&&!(be<48||be>102||be>57&&be<65||be>70&&be<97););return Ni(s,fi()+(c<6&&fn()==32&&Tt()==32))}function bs(s){for(;Tt();)switch(be){case s:return xt;case 34:case 39:s!==34&&s!==39&&bs(be);break;case 40:s===41&&bs(s);break;case 92:Tt();break}return xt}function ih(s,c){for(;Tt()&&s+be!==57;)if(s+be===84&&fn()===47)break;return"/*"+Ni(c,xt-1)+"*"+Ws(s===47?s:Tt())}function oh(s){for(;!qr(fn());)Tt();return Ni(s,xt)}function sh(s){return nh(pi("",null,null,null,[""],s=th(s),0,[0],s))}function pi(s,c,a,f,m,w,C,b,T){for(var X=0,G=0,P=C,j=0,D=0,H=0,B=1,V=1,re=1,le=0,q="",L=m,J=w,Q=f,R=q;V;)switch(H=le,le=Tt()){case 40:if(H!=108&&Me(R,P-1)==58){di(R+=ne(Cs(le),"&","&\f"),"&\f",vd(X?b[X-1]:0))!=-1&&(re=-1);break}case 34:case 39:case 91:R+=Cs(le);break;case 9:case 10:case 13:case 32:R+=rh(H);break;case 92:R+=lh(fi()-1,7);continue;case 47:switch(fn()){case 42:case 47:Kr(ah(ih(Tt(),fi()),c,a,T),T),(qr(H||1)==5||qr(fn()||1)==5)&&_t(R)&&Rn(R,-1,void 0)!==" "&&(R+=" ");break;default:R+="/"}break;case 123*B:b[X++]=_t(R)*re;case 125*B:case 59:case 0:switch(le){case 0:case 125:V=0;case 59+G:re==-1&&(R=ne(R,/\f/g,"")),D>0&&(_t(R)-P||B===0&&H===47)&&Kr(D>32?Xc(R+";",f,a,P-1,T):Xc(ne(R," ","")+";",f,a,P-2,T),T);break;case 59:R+=";";default:if(Kr(Q=Kc(R,c,a,X,G,m,b,q,L=[],J=[],P,w),w),le===123)if(G===0)pi(R,c,Q,Q,L,w,P,b,J);else{switch(j){case 99:if(Me(R,3)===110)break;case 108:if(Me(R,2)===97)break;default:G=0;case 100:case 109:case 115:}G?pi(s,Q,Q,f&&Kr(Kc(s,Q,Q,0,0,m,b,q,m,L=[],P,J),J),m,J,P,b,f?L:J):pi(R,Q,Q,Q,[""],J,0,b,J)}}X=G=D=0,B=re=1,q=R="",P=C;break;case 58:P=1+_t(R),D=H;default:if(B<1){if(le==123)--B;else if(le==125&&B++==0&&eh()==125)continue}switch(R+=Ws(le),le*B){case 38:re=G>0?1:(R+="\f",-1);break;case 44:b[X++]=(_t(R)-1)*re,re=1;break;case 64:fn()===45&&(R+=Cs(Tt())),j=fn(),G=P=_t(q=R+=oh(fi())),le++;break;case 45:H===45&&_t(R)==2&&(B=0)}}return w}function Kc(s,c,a,f,m,w,C,b,T,X,G,P){for(var j=m-1,D=m===0?w:[""],H=yd(D),B=0,V=0,re=0;B<f;++B)for(var le=0,q=Rn(s,j+1,j=vd(V=C[B])),L=s;le<H;++le)(L=xd(V>0?D[le]+" "+q:ne(q,/&\f/g,D[le])))&&(T[re++]=L);return Si(s,c,a,m===0?wi:b,T,X,G,P)}function ah(s,c,a,f){return Si(s,c,a,md,Ws(qp()),Rn(s,2,-2),0,f)}function Xc(s,c,a,f,m){return Si(s,c,a,Us,Rn(s,0,f),Rn(s,f+1,-1),f,m)}function wd(s,c,a){switch(Zp(s,c)){case 5103:return pe+"print-"+s+s;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:case 6391:case 5879:case 5623:case 6135:case 4599:return pe+s+s;case 4855:return pe+s.replace("add","source-over").replace("substract","source-out").replace("intersect","source-in").replace("exclude","xor")+s;case 4789:return Zr+s+s;case 5349:case 4246:case 4810:case 6968:case 2756:return pe+s+Zr+s+we+s+s;case 5936:switch(Me(s,c+11)){case 114:return pe+s+we+ne(s,/[svh]\w+-[tblr]{2}/,"tb")+s;case 108:return pe+s+we+ne(s,/[svh]\w+-[tblr]{2}/,"tb-rl")+s;case 45:return pe+s+we+ne(s,/[svh]\w+-[tblr]{2}/,"lr")+s}case 6828:case 4268:case 2903:return pe+s+we+s+s;case 6165:return pe+s+we+"flex-"+s+s;case 5187:return pe+s+ne(s,/(\w+).+(:[^]+)/,pe+"box-$1$2"+we+"flex-$1$2")+s;case 5443:return pe+s+we+"flex-item-"+ne(s,/flex-|-self/g,"")+(Bt(s,/flex-|baseline/)?"":we+"grid-row-"+ne(s,/flex-|-self/g,""))+s;case 4675:return pe+s+we+"flex-line-pack"+ne(s,/align-content|flex-|-self/g,"")+s;case 5548:return pe+s+we+ne(s,"shrink","negative")+s;case 5292:return pe+s+we+ne(s,"basis","preferred-size")+s;case 6060:return pe+"box-"+ne(s,"-grow","")+pe+s+we+ne(s,"grow","positive")+s;case 4554:return pe+ne(s,/([^-])(transform)/g,"$1"+pe+"$2")+s;case 6187:return ne(ne(ne(s,/(zoom-|grab)/,pe+"$1"),/(image-set)/,pe+"$1"),s,"")+s;case 5495:case 3959:return ne(s,/(image-set\([^]*)/,pe+"$1$`$1");case 4968:return ne(ne(s,/(.+:)(flex-)?(.*)/,pe+"box-pack:$3"+we+"flex-pack:$3"),/space-between/,"justify")+pe+s+s;case 4200:if(!Bt(s,/flex-|baseline/))return we+"grid-column-align"+Rn(s,c)+s;break;case 2592:case 3360:return we+ne(s,"template-","")+s;case 4384:case 3616:return a&&a.some(function(f,m){return c=m,Bt(f.props,/grid-\w+-end/)})?~di(s+(a=a[c].value),"span",0)?s:we+ne(s,"-start","")+s+we+"grid-row-span:"+(~di(a,"span",0)?Bt(a,/\d+/):+Bt(a,/\d+/)-+Bt(s,/\d+/))+";":we+ne(s,"-start","")+s;case 4896:case 4128:return a&&a.some(function(f){return Bt(f.props,/grid-\w+-start/)})?s:we+ne(ne(s,"-end","-span"),"span ","")+s;case 4095:case 3583:case 4068:case 2532:return ne(s,/(.+)-inline(.+)/,pe+"$1$2")+s;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(_t(s)-1-c>6)switch(Me(s,c+1)){case 109:if(Me(s,c+4)!==45)break;case 102:return ne(s,/(.+:)(.+)-([^]+)/,"$1"+pe+"$2-$3$1"+Zr+(Me(s,c+3)==108?"$3":"$2-$3"))+s;case 115:return~di(s,"stretch",0)?wd(ne(s,"stretch","fill-available"),c,a)+s:s}break;case 5152:case 5920:return ne(s,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(f,m,w,C,b,T,X){return we+m+":"+w+X+(C?we+m+"-span:"+(b?T:+T-+w)+X:"")+s});case 4949:if(Me(s,c+6)===121)return ne(s,":",":"+pe)+s;break;case 6444:switch(Me(s,Me(s,14)===45?18:11)){case 120:return ne(s,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+pe+(Me(s,14)===45?"inline-":"")+"box$3$1"+pe+"$2$3$1"+we+"$2box$3")+s;case 100:return ne(s,":",":"+we)+s}break;case 5719:case 2647:case 2135:case 3927:case 2391:return ne(s,"scroll-","scroll-snap-")+s}return s}function vi(s,c){for(var a="",f=0;f<s.length;f++)a+=c(s[f],f,s,c)||"";return a}function uh(s,c,a,f){switch(s.type){case Xp:if(s.children.length)break;case Yp:case Kp:case Us:return s.return=s.return||s.value;case md:return"";case gd:return s.return=s.value+"{"+vi(s.children,f)+"}";case wi:if(!_t(s.value=s.props.join(",")))return""}return _t(a=vi(s.children,f))?s.return=s.value+"{"+a+"}":""}function ch(s){var c=yd(s);return function(a,f,m,w){for(var C="",b=0;b<c;b++)C+=s[b](a,f,m,w)||"";return C}}function dh(s){return function(c){c.root||(c=c.return)&&s(c)}}function fh(s,c,a,f){if(s.length>-1&&!s.return)switch(s.type){case Us:s.return=wd(s.value,s.length,a);return;case gd:return vi([dn(s,{value:ne(s.value,"@","@"+pe)})],f);case wi:if(s.length)return Jp(a=s.props,function(m){switch(Bt(m,f=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":rr(dn(s,{props:[ne(m,/:(read-\w+)/,":"+Zr+"$1")]})),rr(dn(s,{props:[m]})),Ls(s,{props:Yc(a,f)});break;case"::placeholder":rr(dn(s,{props:[ne(m,/:(plac\w+)/,":"+pe+"input-$1")]})),rr(dn(s,{props:[ne(m,/:(plac\w+)/,":"+Zr+"$1")]})),rr(dn(s,{props:[ne(m,/:(plac\w+)/,we+"input-$1")]})),rr(dn(s,{props:[m]})),Ls(s,{props:Yc(a,f)});break}return""})}}var ph={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},ct={},ir=typeof process!="undefined"&&ct!==void 0&&(ct.REACT_APP_SC_ATTR||ct.SC_ATTR)||"data-styled",kd="active",Sd="data-styled-version",Ci="6.3.10",Bs=`/*!sc*/
`,Jr=typeof window!="undefined"&&typeof document!="undefined",hh=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process!="undefined"&&ct!==void 0&&ct.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&ct.REACT_APP_SC_DISABLE_SPEEDY!==""?ct.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&ct.REACT_APP_SC_DISABLE_SPEEDY:typeof process!="undefined"&&ct!==void 0&&ct.SC_DISABLE_SPEEDY!==void 0&&ct.SC_DISABLE_SPEEDY!==""&&ct.SC_DISABLE_SPEEDY!=="false"&&ct.SC_DISABLE_SPEEDY);function tl(s){for(var c=[],a=1;a<arguments.length;a++)c[a-1]=arguments[a];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(s," for more information.").concat(c.length>0?" Args: ".concat(c.join(", ")):""))}var hi=new Map,xi=new Map,mi=1,Xr=function(s){if(hi.has(s))return hi.get(s);for(;xi.has(mi);)mi++;var c=mi++;return hi.set(s,c),xi.set(c,s),c},mh=function(s,c){mi=c+1,hi.set(s,c),xi.set(c,s)},$s=Object.freeze([]),or=Object.freeze({});function gh(s,c,a){return a===void 0&&(a=or),s.theme!==a.theme&&s.theme||c||a.theme}var Nd=new Set(["a","abbr","address","area","article","aside","audio","b","bdi","bdo","blockquote","body","button","br","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","main","map","mark","menu","meter","nav","object","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","slot","small","span","strong","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","switch","symbol","text","textPath","tspan","use"]),vh=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,xh=/(^-|-$)/g;function Zc(s){return s.replace(vh,"-").replace(xh,"")}var yh=/(a)(d)/gi,Jc=function(s){return String.fromCharCode(s+(s>25?39:97))};function Is(s){var c,a="";for(c=Math.abs(s);c>52;c=c/52|0)a=Jc(c%52)+a;return(Jc(c%52)+a).replace(yh,"$1-$2")}var Es,_n=function(s,c){for(var a=c.length;a;)s=33*s^c.charCodeAt(--a);return s},Cd=function(s){return _n(5381,s)};function jh(s){return Is(Cd(s)>>>0)}function wh(s){return s.displayName||s.name||"Component"}function _s(s){return typeof s=="string"&&!0}var Ed=typeof Symbol=="function"&&Symbol.for,_d=Ed?Symbol.for("react.memo"):60115,kh=Ed?Symbol.for("react.forward_ref"):60112,Sh={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Nh={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Td={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Ch=((Es={})[kh]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Es[_d]=Td,Es);function qc(s){return("type"in(c=s)&&c.type.$$typeof)===_d?Td:"$$typeof"in s?Ch[s.$$typeof]:Sh;var c}var Eh=Object.defineProperty,_h=Object.getOwnPropertyNames,ed=Object.getOwnPropertySymbols,Th=Object.getOwnPropertyDescriptor,Ph=Object.getPrototypeOf,td=Object.prototype;function Pd(s,c,a){if(typeof c!="string"){if(td){var f=Ph(c);f&&f!==td&&Pd(s,f,a)}var m=_h(c);ed&&(m=m.concat(ed(c)));for(var w=qc(s),C=qc(c),b=0;b<m.length;++b){var T=m[b];if(!(T in Nh||a&&a[T]||C&&T in C||w&&T in w)){var X=Th(c,T);try{Eh(s,T,X)}catch{}}}}return s}function sr(s){return typeof s=="function"}function Hs(s){return typeof s=="object"&&"styledComponentId"in s}function Pn(s,c){return s&&c?"".concat(s," ").concat(c):s||c||""}function nd(s,c){return s.join("")}function el(s){return s!==null&&typeof s=="object"&&s.constructor.name===Object.name&&!("props"in s&&s.$$typeof)}function Os(s,c,a){if(a===void 0&&(a=!1),!a&&!el(s)&&!Array.isArray(s))return c;if(Array.isArray(c))for(var f=0;f<c.length;f++)s[f]=Os(s[f],c[f]);else if(el(c))for(var f in c)s[f]=Os(s[f],c[f]);return s}function Vs(s,c){Object.defineProperty(s,"toString",{value:c})}var zh=(function(){function s(c){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=c,this._cGroup=0,this._cIndex=0}return s.prototype.indexOfGroup=function(c){if(c===this._cGroup)return this._cIndex;var a=this._cIndex;if(c>this._cGroup)for(var f=this._cGroup;f<c;f++)a+=this.groupSizes[f];else for(f=this._cGroup-1;f>=c;f--)a-=this.groupSizes[f];return this._cGroup=c,this._cIndex=a,a},s.prototype.insertRules=function(c,a){if(c>=this.groupSizes.length){for(var f=this.groupSizes,m=f.length,w=m;c>=w;)if((w<<=1)<0)throw tl(16,"".concat(c));this.groupSizes=new Uint32Array(w),this.groupSizes.set(f),this.length=w;for(var C=m;C<w;C++)this.groupSizes[C]=0}for(var b=this.indexOfGroup(c+1),T=0,X=(C=0,a.length);C<X;C++)this.tag.insertRule(b,a[C])&&(this.groupSizes[c]++,b++,T++);T>0&&this._cGroup>c&&(this._cIndex+=T)},s.prototype.clearGroup=function(c){if(c<this.length){var a=this.groupSizes[c],f=this.indexOfGroup(c),m=f+a;this.groupSizes[c]=0;for(var w=f;w<m;w++)this.tag.deleteRule(f);a>0&&this._cGroup>c&&(this._cIndex-=a)}},s.prototype.getGroup=function(c){var a="";if(c>=this.length||this.groupSizes[c]===0)return a;for(var f=this.groupSizes[c],m=this.indexOfGroup(c),w=m+f,C=m;C<w;C++)a+=this.tag.getRule(C)+Bs;return a},s})(),Rh="style[".concat(ir,"][").concat(Sd,'="').concat(Ci,'"]'),Lh=new RegExp("^".concat(ir,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),rd=function(s){return typeof ShadowRoot!="undefined"&&s instanceof ShadowRoot||"host"in s&&s.nodeType===11},As=function(s){if(!s)return document;if(rd(s))return s;if("getRootNode"in s){var c=s.getRootNode();if(rd(c))return c}return document},bh=function(s,c,a){for(var f,m=a.split(","),w=0,C=m.length;w<C;w++)(f=m[w])&&s.registerName(c,f)},Ih=function(s,c){for(var a,f=((a=c.textContent)!==null&&a!==void 0?a:"").split(Bs),m=[],w=0,C=f.length;w<C;w++){var b=f[w].trim();if(b){var T=b.match(Lh);if(T){var X=0|parseInt(T[1],10),G=T[2];X!==0&&(mh(G,X),bh(s,G,T[3]),s.getTag().insertRules(X,m)),m.length=0}else m.push(b)}}},Ts=function(s){for(var c=As(s.options.target).querySelectorAll(Rh),a=0,f=c.length;a<f;a++){var m=c[a];m&&m.getAttribute(ir)!==kd&&(Ih(s,m),m.parentNode&&m.parentNode.removeChild(m))}};function Oh(){return typeof __webpack_nonce__!="undefined"?__webpack_nonce__:null}var zd=function(s){var c=document.head,a=s||c,f=document.createElement("style"),m=(function(b){var T=Array.from(b.querySelectorAll("style[".concat(ir,"]")));return T[T.length-1]})(a),w=m!==void 0?m.nextSibling:null;f.setAttribute(ir,kd),f.setAttribute(Sd,Ci);var C=Oh();return C&&f.setAttribute("nonce",C),a.insertBefore(f,w),f},Ah=(function(){function s(c){this.element=zd(c),this.element.appendChild(document.createTextNode("")),this.sheet=(function(a){var f;if(a.sheet)return a.sheet;for(var m=(f=a.getRootNode().styleSheets)!==null&&f!==void 0?f:document.styleSheets,w=0,C=m.length;w<C;w++){var b=m[w];if(b.ownerNode===a)return b}throw tl(17)})(this.element),this.length=0}return s.prototype.insertRule=function(c,a){try{return this.sheet.insertRule(a,c),this.length++,!0}catch{return!1}},s.prototype.deleteRule=function(c){this.sheet.deleteRule(c),this.length--},s.prototype.getRule=function(c){var a=this.sheet.cssRules[c];return a&&a.cssText?a.cssText:""},s})(),Mh=(function(){function s(c){this.element=zd(c),this.nodes=this.element.childNodes,this.length=0}return s.prototype.insertRule=function(c,a){if(c<=this.length&&c>=0){var f=document.createTextNode(a);return this.element.insertBefore(f,this.nodes[c]||null),this.length++,!0}return!1},s.prototype.deleteRule=function(c){this.element.removeChild(this.nodes[c]),this.length--},s.prototype.getRule=function(c){return c<this.length?this.nodes[c].textContent:""},s})(),Dh=(function(){function s(c){this.rules=[],this.length=0}return s.prototype.insertRule=function(c,a){return c<=this.length&&(c===this.length?this.rules.push(a):this.rules.splice(c,0,a),this.length++,!0)},s.prototype.deleteRule=function(c){this.rules.splice(c,1),this.length--},s.prototype.getRule=function(c){return c<this.length?this.rules[c]:""},s})(),ld=Jr,Fh={isServer:!Jr,useCSSOMInjection:!hh},Rd=(function(){function s(c,a,f){c===void 0&&(c=or),a===void 0&&(a={});var m=this;this.options=it(it({},Fh),c),this.gs=a,this.names=new Map(f),this.server=!!c.isServer,!this.server&&Jr&&ld&&(ld=!1,Ts(this)),Vs(this,function(){return(function(w){for(var C=w.getTag(),b=C.length,T="",X=function(P){var j=(function(re){return xi.get(re)})(P);if(j===void 0)return"continue";var D=w.names.get(j);if(D===void 0||!D.size)return"continue";var H=C.getGroup(P);if(H.length===0)return"continue";var B=ir+".g"+P+'[id="'+j+'"]',V="";D.forEach(function(re){re.length>0&&(V+=re+",")}),T+=H+B+'{content:"'+V+'"}'+Bs},G=0;G<b;G++)X(G);return T})(m)})}return s.registerId=function(c){return Xr(c)},s.prototype.rehydrate=function(){!this.server&&Jr&&Ts(this)},s.prototype.reconstructWithOptions=function(c,a){a===void 0&&(a=!0);var f=new s(it(it({},this.options),c),this.gs,a&&this.names||void 0);return!this.server&&Jr&&c.target!==this.options.target&&As(this.options.target)!==As(c.target)&&Ts(f),f},s.prototype.allocateGSInstance=function(c){return this.gs[c]=(this.gs[c]||0)+1},s.prototype.getTag=function(){return this.tag||(this.tag=(c=(function(a){var f=a.useCSSOMInjection,m=a.target;return a.isServer?new Dh(m):f?new Ah(m):new Mh(m)})(this.options),new zh(c)));var c},s.prototype.hasNameForId=function(c,a){var f,m;return(m=(f=this.names.get(c))===null||f===void 0?void 0:f.has(a))!==null&&m!==void 0&&m},s.prototype.registerName=function(c,a){Xr(c);var f=this.names.get(c);f?f.add(a):this.names.set(c,new Set([a]))},s.prototype.insertRules=function(c,a,f){this.registerName(c,a),this.getTag().insertRules(Xr(c),f)},s.prototype.clearNames=function(c){this.names.has(c)&&this.names.get(c).clear()},s.prototype.clearRules=function(c){this.getTag().clearGroup(Xr(c)),this.clearNames(c)},s.prototype.clearTag=function(){this.tag=void 0},s})(),Uh=/&/g,$t=47,Tn=42;function id(s){if(s.indexOf("}")===-1)return!1;for(var c=s.length,a=0,f=0,m=!1,w=0;w<c;w++){var C=s.charCodeAt(w);if(f!==0||m||C!==$t||s.charCodeAt(w+1)!==Tn)if(m)C===Tn&&s.charCodeAt(w+1)===$t&&(m=!1,w++);else if(C!==34&&C!==39||w!==0&&s.charCodeAt(w-1)===92){if(f===0){if(C===123)a++;else if(C===125&&--a<0)return!0}}else f===0?f=C:f===C&&(f=0);else m=!0,w++}return a!==0||f!==0}function Ld(s,c){return s.map(function(a){return a.type==="rule"&&(a.value="".concat(c," ").concat(a.value),a.value=a.value.replaceAll(",",",".concat(c," ")),a.props=a.props.map(function(f){return"".concat(c," ").concat(f)})),Array.isArray(a.children)&&a.type!=="@keyframes"&&(a.children=Ld(a.children,c)),a})}function Wh(s){var c,a,f,m=or,w=m.options,C=w===void 0?or:w,b=m.plugins,T=b===void 0?$s:b,X=function(H,B,V){return V.startsWith(a)&&V.endsWith(a)&&V.replaceAll(a,"").length>0?".".concat(c):H},G=T.slice();G.push(function(H){H.type===wi&&H.value.includes("&")&&(f||(f=new RegExp("\\".concat(a,"\\b"),"g")),H.props[0]=H.props[0].replace(Uh,a).replace(f,X))}),C.prefix&&G.push(fh),G.push(uh);var P=[],j=ch(G.concat(dh(function(H){return P.push(H)}))),D=function(H,B,V,re){B===void 0&&(B=""),V===void 0&&(V=""),re===void 0&&(re="&"),c=re,a=B,f=void 0;var le=(function(L){if(!id(L))return L;for(var J=L.length,Q="",R=0,U=0,ge=0,Pe=!1,se=0;se<J;se++){var _e=L.charCodeAt(se);if(ge!==0||Pe||_e!==$t||L.charCodeAt(se+1)!==Tn)if(Pe)_e===Tn&&L.charCodeAt(se+1)===$t&&(Pe=!1,se++);else if(_e!==34&&_e!==39||se!==0&&L.charCodeAt(se-1)===92){if(ge===0)if(_e===123)U++;else if(_e===125){if(--U<0){for(var ke=se+1;ke<J;){var $e=L.charCodeAt(ke);if($e===59||$e===10)break;ke++}ke<J&&L.charCodeAt(ke)===59&&ke++,U=0,se=ke-1,R=ke;continue}U===0&&(Q+=L.substring(R,se+1),R=se+1)}else _e===59&&U===0&&(Q+=L.substring(R,se+1),R=se+1)}else ge===0?ge=_e:ge===_e&&(ge=0);else Pe=!0,se++}if(R<J){var Ke=L.substring(R);id(Ke)||(Q+=Ke)}return Q})((function(L){if(L.indexOf("//")===-1)return L;for(var J=L.length,Q=[],R=0,U=0,ge=0,Pe=0;U<J;){var se=L.charCodeAt(U);if(se!==34&&se!==39||U!==0&&L.charCodeAt(U-1)===92)if(ge===0)if(se===$t&&U+1<J&&L.charCodeAt(U+1)===Tn){for(U+=2;U+1<J&&(L.charCodeAt(U)!==Tn||L.charCodeAt(U+1)!==$t);)U++;U+=2}else if(se===40&&U>=3&&(32|L.charCodeAt(U-1))==108&&(32|L.charCodeAt(U-2))==114&&(32|L.charCodeAt(U-3))==117)Pe=1,U++;else if(Pe>0)se===41?Pe--:se===40&&Pe++,U++;else if(se===Tn&&U+1<J&&L.charCodeAt(U+1)===$t)U>R&&Q.push(L.substring(R,U)),R=U+=2;else if(se===$t&&U+1<J&&L.charCodeAt(U+1)===$t){for(U>R&&Q.push(L.substring(R,U));U<J&&L.charCodeAt(U)!==10;)U++;R=U}else U++;else U++;else ge===0?ge=se:ge===se&&(ge=0),U++}return R===0?L:(R<J&&Q.push(L.substring(R)),Q.join(""))})(H)),q=sh(V||B?"".concat(V," ").concat(B," { ").concat(le," }"):le);return C.namespace&&(q=Ld(q,C.namespace)),P=[],vi(q,j),P};return D.hash=T.length?T.reduce(function(H,B){return B.name||tl(15),_n(H,B.name)},5381).toString():"",D}var Bh=new Rd,Ms=Wh(),bd=dt.createContext({shouldForwardProp:void 0,styleSheet:Bh,stylis:Ms});bd.Consumer;dt.createContext(void 0);function od(){return dt.useContext(bd)}var $h=(function(){function s(c,a){var f=this;this.inject=function(m,w){w===void 0&&(w=Ms);var C=f.name+w.hash;m.hasNameForId(f.id,C)||m.insertRules(f.id,C,w(f.rules,C,"@keyframes"))},this.name=c,this.id="sc-keyframes-".concat(c),this.rules=a,Vs(this,function(){throw tl(12,String(f.name))})}return s.prototype.getName=function(c){return c===void 0&&(c=Ms),this.name+c.hash},s})();function Hh(s,c){return c==null||typeof c=="boolean"||c===""?"":typeof c!="number"||c===0||s in ph||s.startsWith("--")?String(c).trim():"".concat(c,"px")}var Vh=function(s){return s>="A"&&s<="Z"};function sd(s){for(var c="",a=0;a<s.length;a++){var f=s[a];if(a===1&&f==="-"&&s[0]==="-")return s;Vh(f)?c+="-"+f.toLowerCase():c+=f}return c.startsWith("ms-")?"-"+c:c}var Id=function(s){return s==null||s===!1||s===""},Od=function(s){var c=[];for(var a in s){var f=s[a];s.hasOwnProperty(a)&&!Id(f)&&(Array.isArray(f)&&f.isCss||sr(f)?c.push("".concat(sd(a),":"),f,";"):el(f)?c.push.apply(c,gi(gi(["".concat(a," {")],Od(f),!1),["}"],!1)):c.push("".concat(sd(a),": ").concat(Hh(a,f),";")))}return c};function zn(s,c,a,f,m){if(m===void 0&&(m=[]),typeof s=="string")return s&&m.push(s),m;if(Id(s))return m;if(Hs(s))return m.push(".".concat(s.styledComponentId)),m;if(sr(s)){if(!sr(C=s)||C.prototype&&C.prototype.isReactComponent||!c)return m.push(s),m;var w=s(c);return zn(w,c,a,f,m)}var C;if(s instanceof $h)return a?(s.inject(a,f),m.push(s.getName(f))):m.push(s),m;if(el(s)){for(var b=Od(s),T=0;T<b.length;T++)m.push(b[T]);return m}if(!Array.isArray(s))return m.push(s.toString()),m;for(T=0;T<s.length;T++)zn(s[T],c,a,f,m);return m}function Qh(s){for(var c=0;c<s.length;c+=1){var a=s[c];if(sr(a)&&!Hs(a))return!1}return!0}var Gh=Cd(Ci),Yh=(function(){function s(c,a,f){this.rules=c,this.staticRulesId="",this.isStatic=(f===void 0||f.isStatic)&&Qh(c),this.componentId=a,this.baseHash=_n(Gh,a),this.baseStyle=f,Rd.registerId(a)}return s.prototype.generateAndInjectStyles=function(c,a,f){var m=this.baseStyle?this.baseStyle.generateAndInjectStyles(c,a,f).className:"";if(this.isStatic&&!f.hash)if(this.staticRulesId&&a.hasNameForId(this.componentId,this.staticRulesId))m=Pn(m,this.staticRulesId);else{var w=nd(zn(this.rules,c,a,f)),C=Is(_n(this.baseHash,w)>>>0);if(!a.hasNameForId(this.componentId,C)){var b=f(w,".".concat(C),void 0,this.componentId);a.insertRules(this.componentId,C,b)}m=Pn(m,C),this.staticRulesId=C}else{for(var T=_n(this.baseHash,f.hash),X="",G=0;G<this.rules.length;G++){var P=this.rules[G];if(typeof P=="string")X+=P;else if(P){var j=nd(zn(P,c,a,f));T=_n(_n(T,String(G)),j),X+=j}}if(X){var D=Is(T>>>0);if(!a.hasNameForId(this.componentId,D)){var H=f(X,".".concat(D),void 0,this.componentId);a.insertRules(this.componentId,D,H)}m=Pn(m,D)}}return{className:m,css:typeof window=="undefined"?a.getTag().getGroup(Xr(this.componentId)):""}},s})(),Ad=dt.createContext(void 0);Ad.Consumer;var Ps={};function Kh(s,c,a){var f=Hs(s),m=s,w=!_s(s),C=c.attrs,b=C===void 0?$s:C,T=c.componentId,X=T===void 0?(function(L,J){var Q=typeof L!="string"?"sc":Zc(L);Ps[Q]=(Ps[Q]||0)+1;var R="".concat(Q,"-").concat(jh(Ci+Q+Ps[Q]));return J?"".concat(J,"-").concat(R):R})(c.displayName,c.parentComponentId):T,G=c.displayName,P=G===void 0?(function(L){return _s(L)?"styled.".concat(L):"Styled(".concat(wh(L),")")})(s):G,j=c.displayName&&c.componentId?"".concat(Zc(c.displayName),"-").concat(c.componentId):c.componentId||X,D=f&&m.attrs?m.attrs.concat(b).filter(Boolean):b,H=c.shouldForwardProp;if(f&&m.shouldForwardProp){var B=m.shouldForwardProp;if(c.shouldForwardProp){var V=c.shouldForwardProp;H=function(L,J){return B(L,J)&&V(L,J)}}else H=B}var re=new Yh(a,j,f?m.componentStyle:void 0);function le(L,J){return(function(Q,R,U){var ge=Q.attrs,Pe=Q.componentStyle,se=Q.defaultProps,_e=Q.foldedComponentIds,ke=Q.styledComponentId,$e=Q.target,Ke=dt.useContext(Ad),He=od(),ve=Q.shouldForwardProp||He.shouldForwardProp,z=gh(R,Ke,se)||or,$=(function(oe,ce,ue){for(var he,Ne=it(it({},ce),{className:void 0,theme:ue}),Ht=0;Ht<oe.length;Ht+=1){var pn=sr(he=oe[Ht])?he(Ne):he;for(var yt in pn)yt==="className"?Ne.className=Pn(Ne.className,pn[yt]):yt==="style"?Ne.style=it(it({},Ne.style),pn[yt]):Ne[yt]=pn[yt]}return"className"in ce&&typeof ce.className=="string"&&(Ne.className=Pn(Ne.className,ce.className)),Ne})(ge,R,z),I=$.as||$e,g={};for(var k in $)$[k]===void 0||k[0]==="$"||k==="as"||k==="theme"&&$.theme===z||(k==="forwardedAs"?g.as=$.forwardedAs:ve&&!ve(k,I)||(g[k]=$[k]));var ee=(function(oe,ce){var ue=od(),he=oe.generateAndInjectStyles(ce,ue.styleSheet,ue.stylis);return he})(Pe,$),te=ee.className,ae=Pn(_e,ke);return te&&(ae+=" "+te),$.className&&(ae+=" "+$.className),g[_s(I)&&!Nd.has(I)?"class":"className"]=ae,U&&(g.ref=U),lt.createElement(I,g)})(q,L,J)}le.displayName=P;var q=dt.forwardRef(le);return q.attrs=D,q.componentStyle=re,q.displayName=P,q.shouldForwardProp=H,q.foldedComponentIds=f?Pn(m.foldedComponentIds,m.styledComponentId):"",q.styledComponentId=j,q.target=f?m.target:s,Object.defineProperty(q,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(L){this._foldedDefaultProps=f?(function(J){for(var Q=[],R=1;R<arguments.length;R++)Q[R-1]=arguments[R];for(var U=0,ge=Q;U<ge.length;U++)Os(J,ge[U],!0);return J})({},m.defaultProps,L):L}}),Vs(q,function(){return".".concat(q.styledComponentId)}),w&&Pd(q,s,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),q}function ad(s,c){for(var a=[s[0]],f=0,m=c.length;f<m;f+=1)a.push(c[f],s[f+1]);return a}var ud=function(s){return Object.assign(s,{isCss:!0})};function Xh(s){for(var c=[],a=1;a<arguments.length;a++)c[a-1]=arguments[a];if(sr(s)||el(s))return ud(zn(ad($s,gi([s],c,!0))));var f=s;return c.length===0&&f.length===1&&typeof f[0]=="string"?zn(f):ud(zn(ad(f,c)))}function Ds(s,c,a){if(a===void 0&&(a=or),!c)throw tl(1,c);var f=function(m){for(var w=[],C=1;C<arguments.length;C++)w[C-1]=arguments[C];return s(c,a,Xh.apply(void 0,gi([m],w,!1)))};return f.attrs=function(m){return Ds(s,c,it(it({},a),{attrs:Array.prototype.concat(a.attrs,m).filter(Boolean)}))},f.withConfig=function(m){return Ds(s,c,it(it({},a),m))},f}var Md=function(s){return Ds(Kh,s)},Ie=Md;Nd.forEach(function(s){Ie[s]=Md(s)});const zs={Wrapper:Ie.div`
        width: 100%;
        min-height: 100vh;
        background: var(--color-bg);
        color: var(--color-text-primary);
    `,Header:Ie.div`
        position: sticky;
        top: 0;
        z-index: 50;
        height: 60px;
        border-bottom: 1px solid var(--color-border);
        background: var(--color-bg);
    `,Main:Ie.div`
        height: calc(100vh - 60px);
        display: flex;
        width: 100%;
        overflow: hidden;

        .sidePanelWrapper {
            width: 300px;
            flex: 0 0 300px;
            border-right: 1px solid var(--color-border);
            background: var(--color-bg);

            position: sticky;
            top: 60px;
            height: calc(100vh - 60px);

            overflow: hidden;
        }

        .sideInner {
            height: 100%;
            overflow-y: auto;
            padding: 14px;
            scroll-behavior: smooth;
        }

        .sideNav {
            display: flex;
            flex-direction: column;
            gap: 18px;
            font-size: 14px;
        }

        .navSection {
            display: flex;
            flex-direction: column;
            gap: 8px;
            padding-bottom: 14px;
            border-bottom: 1px solid var(--color-border);
        }

        .navSection:last-child {
            border-bottom: 0;
            padding-bottom: 0;
        }

        .navTitle {
            font-size: 12px;
            font-weight: 800;
            letter-spacing: 0.8px;
            text-transform: uppercase;
            color: var(--color-text-muted);
            margin-bottom: 4px;
        }

        .sideNav a {
            display: block;
            width: 100%;
            color: var(--color-text-secondary);
            padding: 8px 10px;
            border-radius: 8px;
            line-height: 1.25;
            text-decoration: none; /* underline removed */
            transition:
                background 0.15s ease,
                color 0.15s ease,
                transform 0.15s ease;
        }

        .sideNav a:hover {
            background: var(--color-surface);
            color: var(--color-text-primary);
            transform: translateX(1px);
            text-decoration: none;
        }

        .sideNav a:focus-visible {
            outline: 2px solid var(--color-text-primary);
            outline-offset: 2px;
        }

        .sideNav a.isActive {
            background: var(--color-surface-2);
            color: var(--color-text-primary);
            box-shadow: inset 0 0 0 1px var(--color-border);
        }

        .contentFooterWrapper {
            flex: 1;
            min-width: 0;
            height: 100%;
            overflow-y: auto;
            background: var(--color-bg);
            scroll-behavior: smooth;
            scroll-padding-top: 14px;
        }

        .contentWrapper {
            min-height: calc(100vh - 60px);
            padding: 18px;
        }

        .footerWrapper {
            border-top: 1px solid var(--color-border);
            background: var(--color-bg);
            padding: 12px 18px;
        }

        @media (width < 900px) {
            flex-direction: column;

            .sidePanelWrapper {
                width: 100%;
                flex: 0 0 auto;
                height: auto;
                position: relative;
                top: 0;
                border-right: 0;
                border-bottom: 1px solid var(--color-border);
            }

            .sideInner {
                max-height: 240px;
            }

            .contentFooterWrapper {
                flex: 1;
                min-width: 0;
                height: 100%;
                overflow-y: auto;
                background: var(--color-bg);
                scroll-behavior: smooth;
                scroll-padding-top: 14px;
            }
        }
    `,Footer:Ie.div`
        color: var(--color-text-muted);
        font-size: 12px;
    `},Zh={Section:Ie.section`
        padding: 40px 0;
        border-bottom: 1px solid var(--color-border);

        h2 {
            font-size: 28px;
            margin-bottom: 24px;
        }

        h3 {
            font-size: 16px;
            margin-bottom: 10px;
            color: var(--color-text-primary);
        }

        .block {
            margin-bottom: 28px;
        }

        p {
            color: var(--color-text-secondary);
            line-height: 1.6;
            margin-bottom: 10px;
        }

        ul {
            padding-left: 18px;
            list-style: disc;
            color: var(--color-text-secondary);
        }

        li {
            margin-bottom: 6px;
        }

        code {
            background: var(--color-surface);
            padding: 3px 6px;
            border-radius: 6px;
            font-size: 13px;
        }

        pre {
            background: var(--color-surface);
            padding: 14px;
            border-radius: 10px;
            overflow-x: auto;
            font-size: 13px;
            border: 1px solid var(--color-border);
            margin-top: 10px;
        }
    `},Jh=()=>i.jsxs(Zh.Section,{id:"doctype",children:[i.jsx("h2",{children:"Doctype & html"}),i.jsxs("div",{className:"block",children:[i.jsx("h3",{children:"What is Doctype?"}),i.jsxs("p",{children:[i.jsx("code",{children:"<!DOCTYPE html>"})," instructs the browser to use the HTML5 standard and render the page in standards mode."]}),i.jsx("p",{children:"Without it, the browser may enter quirks mode, which can cause inconsistent layout and rendering behavior."})]}),i.jsxs("div",{className:"block",children:[i.jsx("h3",{children:"Basic Structure"}),i.jsx("pre",{children:`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>

</body>
</html>`})]}),i.jsxs("div",{className:"block",children:[i.jsx("h3",{children:"lang Attribute"}),i.jsxs("p",{children:["The ",i.jsx("code",{children:"lang"})," attribute defines the document language. It improves accessibility, screen reader support, and SEO."]}),i.jsx("pre",{children:'<html lang="en">'})]}),i.jsxs("div",{className:"block",children:[i.jsx("h3",{children:"Character Encoding"}),i.jsx("pre",{children:'<meta charset="UTF-8">'}),i.jsx("p",{children:"UTF-8 supports most global characters and prevents character encoding issues."})]}),i.jsxs("div",{className:"block",children:[i.jsx("h3",{children:"Minimum Safe Template"}),i.jsx("pre",{children:`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Page Title</title>
</head>
<body>

</body>
</html>`})]}),i.jsxs("div",{className:"block",children:[i.jsx("h3",{children:"Common Mistakes"}),i.jsxs("ul",{children:[i.jsx("li",{children:"Missing doctype declaration"}),i.jsx("li",{children:"Omitting the lang attribute"}),i.jsx("li",{children:"Using incorrect character encoding"}),i.jsx("li",{children:"Missing viewport meta tag for responsive design"})]})]})]}),qh={Section:Ie.section`
        padding: 40px 0;
        border-bottom: 1px solid var(--color-border);

        h2 {
            font-size: 28px;
            margin-bottom: 24px;
        }

        h3 {
            font-size: 16px;
            margin-bottom: 10px;
            color: var(--color-text-primary);
        }

        .block {
            margin-bottom: 28px;
        }

        p {
            color: var(--color-text-secondary);
            line-height: 1.6;
            margin-bottom: 10px;
        }

        ul {
            padding-left: 18px;
            list-style: disc;
            color: var(--color-text-secondary);
        }

        li {
            margin-bottom: 6px;
        }

        code {
            background: var(--color-surface);
            padding: 3px 6px;
            border-radius: 6px;
            font-size: 13px;
        }

        pre {
            background: var(--color-surface);
            padding: 14px;
            border-radius: 10px;
            overflow-x: auto;
            font-size: 13px;
            border: 1px solid var(--color-border);
            margin-top: 10px;
        }
    `},em=()=>i.jsxs(qh.Section,{id:"head",children:[i.jsx("h2",{children:"Head & Meta"}),i.jsxs("div",{className:"block",children:[i.jsx("h3",{children:"What is <head>?"}),i.jsxs("p",{children:["The ",i.jsx("code",{children:"<head>"})," element contains metadata, configuration, and references to external resources for the document."]}),i.jsx("p",{children:"It does not render visible content directly on the page."})]}),i.jsxs("div",{className:"block",children:[i.jsx("h3",{children:"Essential Meta Tags"}),i.jsx("pre",{children:'<meta charset="UTF-8">'}),i.jsx("pre",{children:'<meta name="viewport" content="width=device-width, initial-scale=1.0">'}),i.jsx("pre",{children:'<meta name="description" content="Short page summary">'}),i.jsx("pre",{children:'<meta name="keywords" content="html, meta, seo">'}),i.jsx("pre",{children:'<meta name="author" content="Ashish Ranjan">'})]}),i.jsxs("div",{className:"block",children:[i.jsx("h3",{children:"Viewport - Mobile Critical"}),i.jsx("p",{children:"The viewport meta tag controls layout scaling on mobile devices."}),i.jsx("pre",{children:'<meta name="viewport" content="width=device-width, initial-scale=1.0">'}),i.jsx("p",{children:"Without it, mobile browsers render the page at desktop width and automatically scale it down."})]}),i.jsxs("div",{className:"block",children:[i.jsx("h3",{children:"Title Tag"}),i.jsx("pre",{children:"<title>Page Title</title>"}),i.jsx("p",{children:"The title appears in the browser tab and search engine results."})]}),i.jsxs("div",{className:"block",children:[i.jsx("h3",{children:"Linking External Resources"}),i.jsx("pre",{children:'<link rel="stylesheet" href="styles.css">'}),i.jsx("pre",{children:'<link rel="icon" href="favicon.ico">'}),i.jsx("pre",{children:'<link rel="preconnect" href="https://fonts.googleapis.com">'})]}),i.jsxs("div",{className:"block",children:[i.jsx("h3",{children:"Script Loading"}),i.jsx("pre",{children:'<script src="app.js" defer><\/script>'}),i.jsxs("p",{children:[i.jsx("code",{children:"defer"})," downloads the script without blocking HTML parsing and executes it after the document is fully parsed."]}),i.jsx("pre",{children:'<script src="app.js" async><\/script>'}),i.jsxs("p",{children:[i.jsx("code",{children:"async"})," downloads the script in parallel and executes it immediately after download, independent of document parsing."]})]}),i.jsxs("div",{className:"block",children:[i.jsx("h3",{children:"SEO Basics"}),i.jsxs("ul",{children:[i.jsx("li",{children:"Use a unique title for each page"}),i.jsx("li",{children:"Keep meta description under 160 characters"}),i.jsx("li",{children:"Set the correct language attribute on html"}),i.jsx("li",{children:"Use canonical links when necessary"})]})]}),i.jsxs("div",{className:"block",children:[i.jsx("h3",{children:"Common Mistakes"}),i.jsxs("ul",{children:[i.jsx("li",{children:"Missing viewport meta tag"}),i.jsx("li",{children:"Duplicate meta descriptions"}),i.jsx("li",{children:"Blocking scripts without defer or async"}),i.jsx("li",{children:"Adding unnecessary meta tags"})]})]})]}),tm={Section:Ie.section`
        padding: 40px 0;
        border-bottom: 1px solid var(--color-border);

        h2 {
            font-size: 28px;
            margin-bottom: 24px;
        }

        h3 {
            font-size: 16px;
            margin-bottom: 10px;
            color: var(--color-text-primary);
        }

        .block {
            margin-bottom: 28px;
        }

        p {
            color: var(--color-text-secondary);
            line-height: 1.6;
            margin-bottom: 10px;
        }

        ul {
            padding-left: 18px;
            list-style: disc;
            color: var(--color-text-secondary);
        }

        li {
            margin-bottom: 6px;
        }

        code {
            background: var(--color-surface);
            padding: 3px 6px;
            border-radius: 6px;
            font-size: 13px;
        }

        pre {
            background: var(--color-surface);
            padding: 14px;
            border-radius: 10px;
            overflow-x: auto;
            font-size: 13px;
            border: 1px solid var(--color-border);
            margin-top: 10px;
        }
    `},nm=()=>i.jsxs(tm.Section,{id:"body",children:[i.jsx("h2",{children:"Body"}),i.jsxs("div",{className:"block",children:[i.jsx("h3",{children:"What is the body element?"}),i.jsxs("p",{children:["The ",i.jsx("code",{children:"<body>"})," element contains all visible content of the webpage."]}),i.jsx("p",{children:"Everything users see - text, images, forms, buttons, and layout structures - exists inside the body."})]}),i.jsxs("div",{className:"block",children:[i.jsx("h3",{children:"Basic Structure"}),i.jsx("pre",{children:`<body>
    <header></header>
    <main></main>
    <footer></footer>
</body>`})]}),i.jsxs("div",{className:"block",children:[i.jsx("h3",{children:"Rendering Behavior"}),i.jsxs("ul",{children:[i.jsx("li",{children:"HTML is parsed from top to bottom"}),i.jsx("li",{children:"Elements render in document order"}),i.jsx("li",{children:"CSS affects layout after parsing"}),i.jsx("li",{children:"Scripts can block rendering if not deferred"})]})]}),i.jsxs("div",{className:"block",children:[i.jsx("h3",{children:"Common Layout Pattern"}),i.jsx("pre",{children:`<body>
    <header>
        Navigation
    </header>

    <main>
        Page Content
    </main>

    <aside>
        Sidebar
    </aside>

    <footer>
        Footer
    </footer>
</body>`})]}),i.jsxs("div",{className:"block",children:[i.jsx("h3",{children:"Best Practices"}),i.jsxs("ul",{children:[i.jsx("li",{children:"Keep the structure semantic"}),i.jsx("li",{children:"Do not place meta or title elements inside the body"}),i.jsx("li",{children:"Use only one main element per page"}),i.jsx("li",{children:"Avoid inline scripts that block rendering"})]})]}),i.jsxs("div",{className:"block",children:[i.jsx("h3",{children:"Common Mistakes"}),i.jsxs("ul",{children:[i.jsx("li",{children:"Using multiple main elements"}),i.jsx("li",{children:"Placing head content inside the body"}),i.jsx("li",{children:"Using div everywhere instead of semantic elements"})]})]})]}),rm={Wrapper:Ie.section`
        padding: 18px 0 26px 0;
        scroll-margin-top: 14px;

        .top {
            margin-bottom: 14px;
        }

        .title {
            font-size: 28px;
            line-height: 1.15;
            margin-bottom: 8px;
            color: var(--color-text-primary);
        }

        .sub {
            color: var(--color-text-secondary);
            max-width: 880px;
        }

        .grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 12px;
            margin-top: 12px;

            @media (width < 900px) {
                grid-template-columns: 1fr;
            }
        }

        .card {
            border: 1px solid var(--color-border);
            background: var(--color-surface);
            border-radius: 12px;
            padding: 14px;
            margin-top: 12px;
        }

        .h3 {
            font-size: 16px;
            letter-spacing: 0.2px;
            margin-bottom: 10px;
            color: var(--color-text-primary);
        }

        .text {
            color: var(--color-text-secondary);
            line-height: 1.6;
        }

        .list {
            display: flex;
            flex-direction: column;
            gap: 8px;
            color: var(--color-text-secondary);
            line-height: 1.6;

            li {
                position: relative;
                padding-left: 14px;
            }

            li::before {
                content: "•";
                position: absolute;
                left: 0;
                top: 0;
                color: var(--color-text-muted);
            }
        }

        .pillRow {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
        }

        .pill {
            border: 1px solid var(--color-border);
            background: var(--color-surface-2);
            color: var(--color-text-secondary);
            padding: 6px 10px;
            border-radius: 999px;
            font-size: 12px;
            line-height: 1;
        }

        .mono {
            font-family:
                ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                "Liberation Mono", "Courier New", monospace;
            font-size: 0.95em;
            color: var(--color-text-primary);
        }

        .pre {
            margin-top: 10px;
            padding: 12px;
            border-radius: 10px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            color: var(--color-text-secondary);
            overflow: auto;
            font-size: 12px;
            line-height: 1.55;
        }

        .note {
            margin-top: 12px;
            padding: 12px;
            border-radius: 10px;
            border: 1px solid var(--color-border);
            background: var(--color-surface-2);
        }

        .noteTitle {
            font-size: 12px;
            font-weight: 800;
            letter-spacing: 0.8px;
            text-transform: uppercase;
            color: var(--color-text-muted);
            margin-bottom: 6px;
        }

        .noteText {
            color: var(--color-text-secondary);
            line-height: 1.6;
        }

        .endLine {
            margin-top: 14px;
            color: var(--color-text-muted);
            font-size: 12px;
            border-top: 1px solid var(--color-border);
            padding-top: 12px;
        }
    `},lm=()=>i.jsxs(rm.Wrapper,{id:"semantic",children:[i.jsxs("div",{className:"top",children:[i.jsx("h2",{className:"title",children:"Semantic Tags"}),i.jsx("p",{className:"sub",children:"Semantic tags are HTML elements that clearly describe their meaning. They help browsers, search engines, and screen readers understand the structure of the document."})]}),i.jsxs("div",{className:"card",children:[i.jsx("h3",{className:"h3",children:"Why semantic HTML matters"}),i.jsxs("ul",{className:"list",children:[i.jsx("li",{children:"Better accessibility - screen readers can identify landmark regions"}),i.jsx("li",{children:"Improved SEO - search engines understand content structure"}),i.jsx("li",{children:"More readable code - developers can easily understand layout intent"}),i.jsx("li",{children:"Better maintainability - future changes are easier"})]})]}),i.jsxs("div",{className:"grid",children:[i.jsxs("div",{className:"card",children:[i.jsx("h3",{className:"h3",children:"Common layout semantics"}),i.jsxs("div",{className:"pillRow",children:[i.jsx("span",{className:"pill",children:"header"}),i.jsx("span",{className:"pill",children:"nav"}),i.jsx("span",{className:"pill",children:"main"}),i.jsx("span",{className:"pill",children:"section"}),i.jsx("span",{className:"pill",children:"article"}),i.jsx("span",{className:"pill",children:"aside"}),i.jsx("span",{className:"pill",children:"footer"})]}),i.jsxs("div",{className:"note",children:[i.jsx("div",{className:"noteTitle",children:"Rule"}),i.jsxs("div",{className:"noteText",children:["A page should typically contain only one"," ",i.jsx("span",{className:"mono",children:"main"})," element.",i.jsx("span",{className:"mono",children:" header"})," and"," ",i.jsx("span",{className:"mono",children:"footer"})," can exist at both page level and component level."]})]})]}),i.jsxs("div",{className:"card",children:[i.jsx("h3",{className:"h3",children:"Content semantics"}),i.jsxs("div",{className:"pillRow",children:[i.jsx("span",{className:"pill",children:"figure"}),i.jsx("span",{className:"pill",children:"figcaption"}),i.jsx("span",{className:"pill",children:"time"}),i.jsx("span",{className:"pill",children:"address"}),i.jsx("span",{className:"pill",children:"details"}),i.jsx("span",{className:"pill",children:"summary"})]}),i.jsxs("p",{className:"text",children:["These tags define the meaning of content. For example, use ",i.jsx("span",{className:"mono",children:"figure"})," for an image with a caption, and ",i.jsx("span",{className:"mono",children:"time"})," ","for publishing dates or timestamps."]})]})]}),i.jsxs("div",{className:"card",children:[i.jsx("h3",{className:"h3",children:"Example layout"}),i.jsx("pre",{className:"pre",children:`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Semantic Page</title>
  </head>

  <body>
    <header>
      <nav>
        <a href="#home">Home</a>
        <a href="#docs">Docs</a>
      </nav>
    </header>

    <main>
      <section aria-labelledby="intro-title">
        <h1 id="intro-title">Intro</h1>
        <p>Some content...</p>
      </section>

      <article>
        <h2>Blog Post</h2>
        <p>Post content...</p>
      </article>

      <aside>
        <h3>Related</h3>
        <p>Side information...</p>
      </aside>
    </main>

    <footer>
      <small>Copyright</small>
    </footer>
  </body>
</html>`}),i.jsxs("div",{className:"note",children:[i.jsx("div",{className:"noteTitle",children:"Tip"}),i.jsxs("div",{className:"noteText",children:["Use proper heading hierarchy and attributes like"," ",i.jsx("span",{className:"mono",children:"aria-labelledby"})," to strengthen landmark regions for accessibility."]})]})]}),i.jsxs("div",{className:"card",children:[i.jsx("h3",{className:"h3",children:"Common mistakes"}),i.jsxs("ul",{className:"list",children:[i.jsx("li",{children:"Wrapping everything in div elements and losing semantic structure"}),i.jsx("li",{children:"Using multiple main elements"}),i.jsx("li",{children:"Placing unrelated content inside nav"}),i.jsx("li",{children:"Skipping heading levels such as using h4 directly after h1"})]})]}),i.jsx("div",{className:"endLine",children:"Use semantic elements whenever appropriate. Use div only when no semantic alternative fits."})]}),im={Wrapper:Ie.section`
        padding: 18px 0 26px 0;
        scroll-margin-top: 14px;

        .top {
            margin-bottom: 14px;
        }

        .title {
            font-size: 28px;
            margin-bottom: 8px;
        }

        .sub {
            color: var(--color-text-secondary);
            max-width: 880px;
        }

        .grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 12px;
            margin-top: 12px;

            @media (width < 900px) {
                grid-template-columns: 1fr;
            }
        }

        .card {
            border: 1px solid var(--color-border);
            background: var(--color-surface);
            border-radius: 12px;
            padding: 14px;
            margin-top: 12px;
        }

        .h3 {
            font-size: 16px;
            margin-bottom: 10px;
        }

        .text {
            color: var(--color-text-secondary);
            line-height: 1.6;
        }

        .list {
            display: flex;
            flex-direction: column;
            gap: 8px;
            color: var(--color-text-secondary);
            line-height: 1.6;

            li {
                position: relative;
                padding-left: 14px;
            }

            li::before {
                content: "•";
                position: absolute;
                left: 0;
                top: 0;
                color: var(--color-text-muted);
            }
        }

        .pillRow {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
            margin-top: 10px;
        }

        .pill {
            border: 1px solid var(--color-border);
            background: var(--color-surface-2);
            color: var(--color-text-secondary);
            padding: 6px 10px;
            border-radius: 999px;
            font-size: 12px;
        }

        .mono {
            font-family: ui-monospace, monospace;
            color: var(--color-text-primary);
        }

        .example {
            margin-top: 10px;
            padding: 12px;
            border-radius: 10px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
        }

        .blockExample {
            background: var(--color-surface-2);
            padding: 8px;
            margin-bottom: 6px;
        }

        .inlineExample {
            background: var(--color-surface-2);
            padding: 6px 8px;
            margin-right: 6px;
        }

        .pre {
            margin-top: 12px;
            padding: 12px;
            border-radius: 10px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            color: var(--color-text-secondary);
            overflow: auto;
            font-size: 12px;
            line-height: 1.55;
        }

        .endLine {
            margin-top: 14px;
            color: var(--color-text-muted);
            font-size: 12px;
            border-top: 1px solid var(--color-border);
            padding-top: 12px;
        }
    `},om=()=>i.jsxs(im.Wrapper,{id:"block-inline",children:[i.jsxs("div",{className:"top",children:[i.jsx("h2",{className:"title",children:"Block vs Inline"}),i.jsx("p",{className:"sub",children:"HTML elements fall into two primary display categories - block level and inline. Understanding this behavior is fundamental to layout control."})]}),i.jsxs("div",{className:"grid",children:[i.jsxs("div",{className:"card",children:[i.jsx("h3",{className:"h3",children:"Block elements"}),i.jsxs("ul",{className:"list",children:[i.jsx("li",{children:"Start on a new line"}),i.jsx("li",{children:"Default width is 100 percent of the parent"}),i.jsx("li",{children:"Width and height can be explicitly set"}),i.jsx("li",{children:"Vertical margins work as expected"})]}),i.jsxs("div",{className:"pillRow",children:[i.jsx("span",{className:"pill",children:"div"}),i.jsx("span",{className:"pill",children:"p"}),i.jsx("span",{className:"pill",children:"h1 - h6"}),i.jsx("span",{className:"pill",children:"section"}),i.jsx("span",{className:"pill",children:"article"}),i.jsx("span",{className:"pill",children:"header"}),i.jsx("span",{className:"pill",children:"footer"})]})]}),i.jsxs("div",{className:"card",children:[i.jsx("h3",{className:"h3",children:"Inline elements"}),i.jsxs("ul",{className:"list",children:[i.jsx("li",{children:"Do not start on a new line"}),i.jsx("li",{children:"Take only as much width as their content"}),i.jsx("li",{children:"Width and height cannot be applied directly"}),i.jsx("li",{children:"Vertical margins have limited effect"})]}),i.jsxs("div",{className:"pillRow",children:[i.jsx("span",{className:"pill",children:"span"}),i.jsx("span",{className:"pill",children:"a"}),i.jsx("span",{className:"pill",children:"strong"}),i.jsx("span",{className:"pill",children:"em"}),i.jsx("span",{className:"pill",children:"img"}),i.jsx("span",{className:"pill",children:"label"})]})]})]}),i.jsxs("div",{className:"card",children:[i.jsx("h3",{className:"h3",children:"Visual example"}),i.jsxs("div",{className:"example",children:[i.jsx("div",{className:"blockExample",children:"Block 1"}),i.jsx("div",{className:"blockExample",children:"Block 2"}),i.jsx("span",{className:"inlineExample",children:"Inline 1"}),i.jsx("span",{className:"inlineExample",children:"Inline 2"})]}),i.jsx("pre",{className:"pre",children:`<div>Block 1</div>
<div>Block 2</div>

<span>Inline 1</span>
<span>Inline 2</span>`})]}),i.jsxs("div",{className:"card",children:[i.jsx("h3",{className:"h3",children:"display property"}),i.jsxs("p",{className:"text",children:["The CSS ",i.jsx("span",{className:"mono",children:"display"})," property controls how an element behaves in the layout."]}),i.jsx("pre",{className:"pre",children:`div {
  display: inline;
}

span {
  display: block;
}

div {
  display: inline-block;
}`}),i.jsxs("ul",{className:"list",children:[i.jsx("li",{children:"block - full width, new line"}),i.jsx("li",{children:"inline - content width, same line"}),i.jsx("li",{children:"inline-block - behaves like inline but allows width and height"})]})]}),i.jsxs("div",{className:"card",children:[i.jsx("h3",{className:"h3",children:"Common mistakes"}),i.jsxs("ul",{className:"list",children:[i.jsx("li",{children:"Setting height on inline elements and expecting it to work"}),i.jsx("li",{children:"Relying on vertical margins for inline elements"}),i.jsx("li",{children:"Mixing block and inline elements without understanding layout flow"})]})]}),i.jsx("div",{className:"endLine",children:"Most layout issues come from misunderstanding display behavior."})]}),sm={Wrapper:Ie.section`
        padding: 18px 0 26px 0;
        scroll-margin-top: 14px;

        .top {
            margin-bottom: 14px;
        }

        .title {
            font-size: 28px;
            margin-bottom: 8px;
        }

        .sub {
            color: var(--color-text-secondary);
            max-width: 900px;
            line-height: 1.6;
        }

        .grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 12px;
            margin-top: 12px;

            @media (width < 900px) {
                grid-template-columns: 1fr;
            }
        }

        .card {
            border: 1px solid var(--color-border);
            background: var(--color-surface);
            border-radius: 12px;
            padding: 14px;
            margin-top: 12px;
        }

        .h3 {
            font-size: 16px;
            margin-bottom: 10px;
        }

        .text {
            color: var(--color-text-secondary);
            line-height: 1.6;
        }

        .mono {
            font-family: ui-monospace, monospace;
            color: var(--color-text-primary);
        }

        .list {
            display: flex;
            flex-direction: column;
            gap: 8px;
            color: var(--color-text-secondary);
            line-height: 1.6;
            margin-top: 8px;

            li {
                position: relative;
                padding-left: 14px;
            }

            li::before {
                content: "•";
                position: absolute;
                left: 0;
                top: 0;
                color: var(--color-text-muted);
            }
        }

        .table {
            margin-top: 10px;
            border: 1px solid var(--color-border);
            border-radius: 10px;
            overflow: hidden;
        }

        .row {
            display: grid;
            grid-template-columns: 140px 1fr 220px;

            @media (width < 900px) {
                grid-template-columns: 120px 1fr;
            }
        }

        .row.head {
            background: var(--color-surface-2);

            .cell {
                color: var(--color-text-primary);
                font-weight: 800;
                font-size: 12px;
                text-transform: uppercase;
                letter-spacing: 0.8px;
            }
        }

        .cell {
            padding: 10px 12px;
            border-bottom: 1px solid var(--color-border);
            color: var(--color-text-secondary);
            line-height: 1.5;
        }

        .row:last-child .cell {
            border-bottom: 0;
        }

        .row .cell:nth-child(1) {
            background: rgba(255, 255, 255, 0.02);
        }

        @media (width < 900px) {
            .row .cell:nth-child(3) {
                display: none;
            }
        }

        .pre {
            margin-top: 12px;
            padding: 12px;
            border-radius: 10px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            color: var(--color-text-secondary);
            overflow: auto;
            font-size: 12px;
            line-height: 1.55;
        }

        .endLine {
            margin-top: 14px;
            color: var(--color-text-muted);
            font-size: 12px;
            border-top: 1px solid var(--color-border);
            padding-top: 12px;
        }
    `},am=()=>i.jsxs(sm.Wrapper,{id:"attributes",children:[i.jsxs("div",{className:"top",children:[i.jsx("h2",{className:"title",children:"Global Attributes"}),i.jsx("p",{className:"sub",children:"Global attributes are attributes you can use on almost any HTML element. They help with identification, accessibility, language, direction, editing, tooltips, and custom data."})]}),i.jsxs("div",{className:"card",children:[i.jsx("h3",{className:"h3",children:"Most used global attributes"}),i.jsxs("div",{className:"table",children:[i.jsxs("div",{className:"row head",children:[i.jsx("div",{className:"cell",children:"Attribute"}),i.jsx("div",{className:"cell",children:"What it does"}),i.jsx("div",{className:"cell",children:"Example"})]}),i.jsxs("div",{className:"row",children:[i.jsx("div",{className:"cell mono",children:"id"}),i.jsx("div",{className:"cell",children:"Unique identifier on the page. Used for anchors, JS hooks, labels, and accessibility."}),i.jsx("div",{className:"cell mono",children:'<section id="pricing">'})]}),i.jsxs("div",{className:"row",children:[i.jsx("div",{className:"cell mono",children:"class"}),i.jsx("div",{className:"cell",children:"Groups elements for styling and scripting."}),i.jsx("div",{className:"cell mono",children:'<div class="card primary">'})]}),i.jsxs("div",{className:"row",children:[i.jsx("div",{className:"cell mono",children:"title"}),i.jsx("div",{className:"cell",children:"Tooltip text on hover. Not a replacement for labels or aria."}),i.jsx("div",{className:"cell mono",children:'<button title="Save">'})]}),i.jsxs("div",{className:"row",children:[i.jsx("div",{className:"cell mono",children:"style"}),i.jsx("div",{className:"cell",children:"Inline CSS. Works, but use sparingly for maintainability."}),i.jsx("div",{className:"cell mono",children:'<p style="margin:0">'})]}),i.jsxs("div",{className:"row",children:[i.jsx("div",{className:"cell mono",children:"hidden"}),i.jsx("div",{className:"cell",children:"Hides the element from layout and accessibility tree in most cases."}),i.jsx("div",{className:"cell mono",children:"<div hidden>"})]}),i.jsxs("div",{className:"row",children:[i.jsx("div",{className:"cell mono",children:"tabindex"}),i.jsx("div",{className:"cell",children:"Controls keyboard focus order. Use carefully."}),i.jsx("div",{className:"cell mono",children:'<div tabindex="0">'})]}),i.jsxs("div",{className:"row",children:[i.jsx("div",{className:"cell mono",children:"contenteditable"}),i.jsx("div",{className:"cell",children:"Makes content editable by the user."}),i.jsx("div",{className:"cell mono",children:'<div contenteditable="true">'})]}),i.jsxs("div",{className:"row",children:[i.jsx("div",{className:"cell mono",children:"draggable"}),i.jsx("div",{className:"cell",children:"Enables native drag and drop behavior."}),i.jsx("div",{className:"cell mono",children:'<img draggable="true" />'})]}),i.jsxs("div",{className:"row",children:[i.jsx("div",{className:"cell mono",children:"spellcheck"}),i.jsx("div",{className:"cell",children:"Enables or disables spellcheck in editable fields."}),i.jsx("div",{className:"cell mono",children:'<textarea spellcheck="false">'})]})]})]}),i.jsxs("div",{className:"grid",children:[i.jsxs("div",{className:"card",children:[i.jsx("h3",{className:"h3",children:"Language and direction"}),i.jsxs("p",{className:"text",children:["Use ",i.jsx("span",{className:"mono",children:"lang"})," to declare the language for screen readers and spellcheck. Use"," ",i.jsx("span",{className:"mono",children:"dir"})," for text direction."]}),i.jsx("pre",{className:"pre",children:`<html lang="en">
  <body>
    <p lang="hi">Namaste</p>
    <p dir="rtl">Right to left example</p>
  </body>
</html>`})]}),i.jsxs("div",{className:"card",children:[i.jsx("h3",{className:"h3",children:"Custom data attributes"}),i.jsxs("p",{className:"text",children:["Use ",i.jsx("span",{className:"mono",children:"data-*"})," to store custom information for JS. They are safe and readable."]}),i.jsx("pre",{className:"pre",children:`<button data-id="42" data-state="open">
  Toggle
</button>`}),i.jsx("pre",{className:"pre",children:`const btn = document.querySelector("button");
console.log(btn.dataset.id);
console.log(btn.dataset.state);`})]})]}),i.jsxs("div",{className:"card",children:[i.jsx("h3",{className:"h3",children:"Accessibility related global attributes"}),i.jsxs("ul",{className:"list",children:[i.jsx("li",{children:"Use proper semantic elements first. Add aria only when needed."}),i.jsxs("li",{children:[i.jsx("span",{className:"mono",children:'tabindex="0"'})," can make a non interactive element focusable, but prefer real buttons and links."]}),i.jsxs("li",{children:[i.jsx("span",{className:"mono",children:"title"})," is not reliable for accessibility. Use visible text, labels, or aria-label."]})]}),i.jsx("pre",{className:"pre",children:'<button aria-label="Close dialog">×</button>'})]}),i.jsxs("div",{className:"card",children:[i.jsx("h3",{className:"h3",children:"Common mistakes"}),i.jsxs("ul",{className:"list",children:[i.jsx("li",{children:"Using duplicate ids on the same page"}),i.jsx("li",{children:"Using title as the only label for form controls"}),i.jsx("li",{children:"Using tabindex values like 5, 6, 7 for ordering"}),i.jsx("li",{children:"Putting important data in class names instead of data attributes"})]})]}),i.jsx("div",{className:"endLine",children:"Rule - use semantic HTML first, then use global attributes to enhance."})]}),um={Section:Ie.section`
        padding: 18px 0 26px 0;
        scroll-margin-top: 14px;

        h2 {
            font-size: 28px;
            margin-bottom: 12px;
        }

        .block {
            border: 1px solid var(--color-border);
            background: var(--color-surface);
            border-radius: 12px;
            padding: 14px;
            margin-top: 14px;
        }

        h3 {
            font-size: 16px;
            margin-bottom: 8px;
        }

        p {
            color: var(--color-text-secondary);
            line-height: 1.6;
        }

        ul {
            margin-top: 6px;
            display: flex;
            flex-direction: column;
            gap: 8px;
            color: var(--color-text-secondary);
            line-height: 1.6;

            li {
                position: relative;
                padding-left: 14px;
            }

            li::before {
                content: "•";
                position: absolute;
                left: 0;
                top: 0;
                color: var(--color-text-muted);
            }
        }

        pre {
            margin-top: 10px;
            padding: 12px;
            border-radius: 10px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            color: var(--color-text-secondary);
            overflow: auto;
            font-size: 12px;
            line-height: 1.55;
        }

        code {
            font-family: ui-monospace, monospace;
            color: var(--color-text-primary);
        }

        .endLine {
            margin-top: 14px;
            color: var(--color-text-muted);
            font-size: 12px;
            border-top: 1px solid var(--color-border);
            padding-top: 12px;
        }
    `},cm=()=>i.jsxs(um.Section,{id:"headings",children:[i.jsx("h2",{children:"Headings"}),i.jsxs("div",{className:"block",children:[i.jsx("h3",{children:"What are headings?"}),i.jsxs("p",{children:["Headings define the structure and hierarchy of content in a document. They range from ",i.jsx("code",{children:"h1"})," to ",i.jsx("code",{children:"h6"}),"."]}),i.jsx("p",{children:"They are critical for accessibility, SEO, and content organization."})]}),i.jsxs("div",{className:"block",children:[i.jsx("h3",{children:"Heading Levels"}),i.jsx("pre",{children:`<h1>Main Title</h1>
<h2>Section Title</h2>
<h3>Subsection</h3>
<h4>Sub-subsection</h4>
<h5>Minor heading</h5>
<h6>Smallest heading</h6>`})]}),i.jsxs("div",{className:"block",children:[i.jsx("h3",{children:"Hierarchy Rules"}),i.jsxs("ul",{children:[i.jsx("li",{children:"Use only one h1 per page"}),i.jsx("li",{children:"Do not skip levels unnecessarily"}),i.jsx("li",{children:"Follow logical nesting order"}),i.jsx("li",{children:"Headings describe content structure, not styling"})]})]}),i.jsxs("div",{className:"block",children:[i.jsx("h3",{children:"Accessibility Importance"}),i.jsx("p",{children:"Screen readers use headings to create a content outline. Proper heading order allows users to navigate efficiently."}),i.jsx("pre",{children:`<section>
    <h2>Features</h2>
    <h3>Performance</h3>
    <h3>Security</h3>
</section>`})]}),i.jsxs("div",{className:"block",children:[i.jsx("h3",{children:"SEO Considerations"}),i.jsxs("ul",{children:[i.jsx("li",{children:"Search engines use headings to understand page topics"}),i.jsx("li",{children:"Use meaningful keywords naturally"}),i.jsx("li",{children:"Avoid using headings purely for visual size"})]})]}),i.jsxs("div",{className:"block",children:[i.jsx("h3",{children:"Common Mistakes"}),i.jsxs("ul",{children:[i.jsx("li",{children:"Using multiple h1 elements"}),i.jsx("li",{children:"Skipping from h1 directly to h4"}),i.jsx("li",{children:"Using headings for styling instead of CSS"}),i.jsx("li",{children:"Placing empty heading tags"})]})]}),i.jsx("div",{className:"endLine",children:"Headings define structure. CSS defines appearance."})]}),dm={Section:Ie.section`
        padding: 18px 0 26px 0;
        scroll-margin-top: 14px;

        h2 {
            font-size: 28px;
            margin-bottom: 12px;
        }

        .block {
            border: 1px solid var(--color-border);
            background: var(--color-surface);
            border-radius: 12px;
            padding: 14px;
            margin-top: 14px;
        }

        h3 {
            font-size: 16px;
            margin-bottom: 8px;
        }

        p {
            color: var(--color-text-secondary);
            line-height: 1.6;
            margin-top: 8px;
        }

        p:first-of-type {
            margin-top: 0;
        }

        ul {
            margin-top: 6px;
            display: flex;
            flex-direction: column;
            gap: 8px;
            color: var(--color-text-secondary);
            line-height: 1.6;

            li {
                position: relative;
                padding-left: 14px;
            }

            li::before {
                content: "•";
                position: absolute;
                left: 0;
                top: 0;
                color: var(--color-text-muted);
            }
        }

        pre {
            margin-top: 10px;
            padding: 12px;
            border-radius: 10px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            color: var(--color-text-secondary);
            overflow: auto;
            font-size: 12px;
            line-height: 1.55;
        }

        code {
            font-family: ui-monospace, monospace;
            color: var(--color-text-primary);
        }

        .endLine {
            margin-top: 14px;
            color: var(--color-text-muted);
            font-size: 12px;
            border-top: 1px solid var(--color-border);
            padding-top: 12px;
        }
    `},fm=()=>i.jsxs(dm.Section,{id:"paragraphs",children:[i.jsx("h2",{children:"Paragraphs"}),i.jsxs("div",{className:"block",children:[i.jsx("h3",{children:"What is a paragraph?"}),i.jsxs("p",{children:["A paragraph is a block of text wrapped inside the"," ",i.jsx("code",{children:"<p>"})," tag. It is used for normal readable content like explanations, descriptions, and story text."]}),i.jsx("p",{children:"Browsers give paragraphs default spacing and treat them as block elements, meaning they start on a new line."})]}),i.jsxs("div",{className:"block",children:[i.jsx("h3",{children:"Basic Example"}),i.jsx("pre",{children:`<p>
    This is a paragraph. It is used for normal text content.
</p>

<p>
    This is another paragraph. Browsers add spacing between them.
</p>`})]}),i.jsxs("div",{className:"block",children:[i.jsx("h3",{children:"When to use p"}),i.jsxs("ul",{children:[i.jsx("li",{children:"Use it for plain text blocks"}),i.jsx("li",{children:"Use it for documentation and explanations"}),i.jsx("li",{children:"Use it for blog content and article text"}),i.jsx("li",{children:"Use it when the content is not a heading or list"})]})]}),i.jsxs("div",{className:"block",children:[i.jsx("h3",{children:"Good HTML structure"}),i.jsxs("p",{children:["Paragraphs should live inside meaningful sections like"," ",i.jsx("code",{children:"<main>"}),", ",i.jsx("code",{children:"<section>"}),", or"," ",i.jsx("code",{children:"<article>"}),"."]}),i.jsx("pre",{children:`<article>
    <h2>About the product</h2>

    <p>
        This product is designed for daily use and long term durability.
    </p>

    <p>
        It comes with a warranty and supports easy replacement.
    </p>
</article>`})]}),i.jsxs("div",{className:"block",children:[i.jsx("h3",{children:"Common mistakes"}),i.jsxs("ul",{children:[i.jsx("li",{children:"Using multiple br tags instead of paragraphs"}),i.jsx("li",{children:"Wrapping headings inside p"}),i.jsx("li",{children:"Using p as a layout container"}),i.jsx("li",{children:"Leaving empty paragraphs for spacing"})]}),i.jsx("pre",{children:`<!-- Wrong -->
<p><h2>Title</h2></p>

<!-- Wrong -->
Text line 1<br><br><br>Text line 2

<!-- Better -->
<p>Text line 1</p>
<p>Text line 2</p>`})]}),i.jsxs("div",{className:"block",children:[i.jsx("h3",{children:"Extra tips"}),i.jsxs("ul",{children:[i.jsx("li",{children:"Use CSS for spacing, not empty p tags"}),i.jsx("li",{children:"Keep paragraphs short for readability"}),i.jsx("li",{children:"Use lists when content is item based"})]})]}),i.jsx("div",{className:"endLine",children:"Use p for readable text blocks. Use CSS for layout and spacing."})]}),pm={Section:Ie.section`
        padding: 18px 0 26px 0;
        scroll-margin-top: 14px;

        h2 {
            font-size: 28px;
            margin-bottom: 12px;
        }

        .block {
            border: 1px solid var(--color-border);
            background: var(--color-surface);
            border-radius: 12px;
            padding: 14px;
            margin-top: 14px;
        }

        h3 {
            font-size: 16px;
            margin-bottom: 8px;
        }

        p {
            color: var(--color-text-secondary);
            line-height: 1.6;
            margin-top: 8px;
        }

        p:first-of-type {
            margin-top: 0;
        }

        ul {
            margin-top: 6px;
            display: flex;
            flex-direction: column;
            gap: 8px;
            color: var(--color-text-secondary);
            line-height: 1.6;

            li {
                position: relative;
                padding-left: 14px;
            }

            li::before {
                content: "•";
                position: absolute;
                left: 0;
                top: 0;
                color: var(--color-text-muted);
            }
        }

        pre {
            margin-top: 10px;
            padding: 12px;
            border-radius: 10px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            color: var(--color-text-secondary);
            overflow: auto;
            font-size: 12px;
            line-height: 1.55;
        }

        code {
            font-family: ui-monospace, monospace;
            color: var(--color-text-primary);
        }

        .endLine {
            margin-top: 14px;
            color: var(--color-text-muted);
            font-size: 12px;
            border-top: 1px solid var(--color-border);
            padding-top: 12px;
        }
    `},hm=()=>i.jsxs(pm.Section,{id:"lists",children:[i.jsx("h2",{children:"Lists"}),i.jsxs("div",{className:"block",children:[i.jsx("h3",{children:"What are lists?"}),i.jsx("p",{children:"HTML lists are used to group related items. They are perfect for navigation menus, steps, features, checklists, and any item based content."}),i.jsxs("p",{children:["The three most common list tags are ",i.jsx("code",{children:"<ul>"}),",",i.jsx("code",{children:"<ol>"}),", and ",i.jsx("code",{children:"<dl>"}),"."]})]}),i.jsxs("div",{className:"block",children:[i.jsx("h3",{children:"Unordered list - ul"}),i.jsxs("p",{children:["Use ",i.jsx("code",{children:"<ul>"})," when order does not matter, like features or bullet points."]}),i.jsx("pre",{children:`<ul>
    <li>Fast setup</li>
    <li>Responsive layout</li>
    <li>Dark mode support</li>
</ul>`})]}),i.jsxs("div",{className:"block",children:[i.jsx("h3",{children:"Ordered list - ol"}),i.jsxs("p",{children:["Use ",i.jsx("code",{children:"<ol>"})," when order matters, like steps, instructions, rankings, or priority."]}),i.jsx("pre",{children:`<ol>
    <li>Install dependencies</li>
    <li>Start the dev server</li>
    <li>Build for production</li>
</ol>`})]}),i.jsxs("div",{className:"block",children:[i.jsx("h3",{children:"Description list - dl"}),i.jsxs("p",{children:["Use ",i.jsx("code",{children:"<dl>"})," when you have term and description pairs, like a glossary or FAQ."]}),i.jsx("pre",{children:`<dl>
    <dt>HTML</dt>
    <dd>Markup language for web pages</dd>

    <dt>CSS</dt>
    <dd>Styles and layout rules</dd>
</dl>`})]}),i.jsxs("div",{className:"block",children:[i.jsx("h3",{children:"Nested lists"}),i.jsx("p",{children:"You can nest lists inside a list item. This is common in menus and outlines."}),i.jsx("pre",{children:`<ul>
    <li>
        Frontend
        <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
        </ul>
    </li>
    <li>Backend</li>
</ul>`})]}),i.jsxs("div",{className:"block",children:[i.jsx("h3",{children:"Common mistakes"}),i.jsxs("ul",{children:[i.jsx("li",{children:"Putting text directly inside ul or ol without li"}),i.jsx("li",{children:"Using br for spacing instead of proper list items"}),i.jsx("li",{children:"Using div tags where a list is the correct structure"}),i.jsx("li",{children:"Over nesting lists without real need"})]}),i.jsx("pre",{children:`<!-- Wrong -->
<ul>
    Item 1
    Item 2
</ul>

<!-- Correct -->
<ul>
    <li>Item 1</li>
    <li>Item 2</li>
</ul>`})]}),i.jsxs("div",{className:"block",children:[i.jsx("h3",{children:"Accessibility notes"}),i.jsxs("ul",{children:[i.jsx("li",{children:"Use lists for item groups so screen readers understand structure"}),i.jsx("li",{children:"Do not remove list semantics for real lists"}),i.jsx("li",{children:"For nav menus, lists are still valid and common"})]})]}),i.jsx("div",{className:"endLine",children:"Use lists for grouped items. Use ul for bullets, ol for steps, and dl for term definitions."})]}),mm={Section:Ie.section`
        padding: 18px 0 26px 0;
        scroll-margin-top: 14px;

        h2 {
            font-size: 28px;
            margin-bottom: 12px;
        }

        .block {
            border: 1px solid var(--color-border);
            background: var(--color-surface);
            border-radius: 12px;
            padding: 14px;
            margin-top: 14px;
        }

        h3 {
            font-size: 16px;
            margin-bottom: 8px;
        }

        p {
            color: var(--color-text-secondary);
            line-height: 1.6;
            margin-top: 8px;
        }

        p:first-of-type {
            margin-top: 0;
        }

        ul {
            margin-top: 8px;
            display: flex;
            flex-direction: column;
            gap: 8px;
            color: var(--color-text-secondary);
            line-height: 1.6;

            li {
                position: relative;
                padding-left: 14px;
            }

            li::before {
                content: "•";
                position: absolute;
                left: 0;
                top: 0;
                color: var(--color-text-muted);
            }
        }

        pre {
            margin-top: 10px;
            padding: 12px;
            border-radius: 10px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            color: var(--color-text-secondary);
            overflow: auto;
            font-size: 12px;
            line-height: 1.55;
        }

        code {
            font-family: ui-monospace, monospace;
            color: var(--color-text-primary);
        }

        .endLine {
            margin-top: 14px;
            color: var(--color-text-muted);
            font-size: 12px;
            border-top: 1px solid var(--color-border);
            padding-top: 12px;
        }
    `},gm=()=>i.jsxs(mm.Section,{id:"links",children:[i.jsx("h2",{children:"Links"}),i.jsxs("div",{className:"block",children:[i.jsx("h3",{children:"What is a link?"}),i.jsxs("p",{children:["The ",i.jsx("code",{children:"<a>"})," tag is used to create hyperlinks. It connects one document to another or one section of a page to another."]}),i.jsxs("p",{children:["The most important attribute is ",i.jsx("code",{children:"href"}),", which defines the destination."]})]}),i.jsxs("div",{className:"block",children:[i.jsx("h3",{children:"Basic link"}),i.jsx("pre",{children:'<a href="https://example.com">Visit Website</a>'}),i.jsx("p",{children:"This creates a clickable link that navigates to another website."})]}),i.jsxs("div",{className:"block",children:[i.jsx("h3",{children:"Internal link"}),i.jsx("p",{children:"Internal links point to another page or section within the same website."}),i.jsx("pre",{children:'<a href="/about.html">About Page</a>'}),i.jsx("pre",{children:'<a href="#contact">Go to Contact Section</a>'})]}),i.jsxs("div",{className:"block",children:[i.jsx("h3",{children:"Open link in new tab"}),i.jsx("pre",{children:`<a href="https://example.com" target="_blank" rel="noopener noreferrer">
    Open in new tab
</a>`}),i.jsxs("ul",{children:[i.jsx("li",{children:'target="_blank" opens link in new tab'}),i.jsx("li",{children:'rel="noopener noreferrer" improves security'})]})]}),i.jsxs("div",{className:"block",children:[i.jsx("h3",{children:"Email and phone links"}),i.jsx("pre",{children:'<a href="mailto:someone@example.com">Send Email</a>'}),i.jsx("pre",{children:'<a href="tel:+1234567890">Call Now</a>'}),i.jsx("p",{children:"These links trigger email clients or phone dialers."})]}),i.jsxs("div",{className:"block",children:[i.jsx("h3",{children:"Download link"}),i.jsx("pre",{children:'<a href="file.pdf" download>Download PDF</a>'}),i.jsx("p",{children:"The download attribute forces the browser to download the file instead of opening it."})]}),i.jsxs("div",{className:"block",children:[i.jsx("h3",{children:"Accessibility best practices"}),i.jsxs("ul",{children:[i.jsx("li",{children:"Use descriptive link text"}),i.jsx("li",{children:'Avoid "click here" as link text'}),i.jsx("li",{children:"Ensure sufficient color contrast"}),i.jsx("li",{children:"Make links clearly identifiable"})]}),i.jsx("pre",{children:`<!-- Weak -->
<a href="/docs">Click here</a>

<!-- Better -->
<a href="/docs">Read documentation</a>`})]}),i.jsxs("div",{className:"block",children:[i.jsx("h3",{children:"Common mistakes"}),i.jsxs("ul",{children:[i.jsx("li",{children:"Using button for navigation instead of anchor"}),i.jsx("li",{children:'Missing rel when using target="_blank"'}),i.jsx("li",{children:"Empty href attributes"}),i.jsx("li",{children:"Using links without meaningful text"})]})]}),i.jsx("div",{className:"endLine",children:"Links connect the web. Always use meaningful text and proper attributes for accessibility and security."})]}),vm={Section:Ie.section`
        padding: 18px 0 26px 0;
        scroll-margin-top: 14px;

        h2 {
            font-size: 28px;
            margin-bottom: 12px;
        }

        .block {
            border: 1px solid var(--color-border);
            background: var(--color-surface);
            border-radius: 12px;
            padding: 14px;
            margin-top: 14px;
        }

        h3 {
            font-size: 16px;
            margin-bottom: 8px;
        }

        p {
            color: var(--color-text-secondary);
            line-height: 1.6;
            margin-top: 8px;
        }

        p:first-of-type {
            margin-top: 0;
        }

        ul {
            margin-top: 8px;
            display: flex;
            flex-direction: column;
            gap: 8px;
            color: var(--color-text-secondary);
            line-height: 1.6;

            li {
                position: relative;
                padding-left: 14px;
            }

            li::before {
                content: "•";
                position: absolute;
                left: 0;
                top: 0;
                color: var(--color-text-muted);
            }
        }

        pre {
            margin-top: 10px;
            padding: 12px;
            border-radius: 10px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            color: var(--color-text-secondary);
            overflow: auto;
            font-size: 12px;
            line-height: 1.55;
        }

        code {
            font-family: ui-monospace, monospace;
            color: var(--color-text-primary);
        }

        .endLine {
            margin-top: 14px;
            color: var(--color-text-muted);
            font-size: 12px;
            border-top: 1px solid var(--color-border);
            padding-top: 12px;
        }
    `},xm=()=>i.jsxs(vm.Section,{id:"images",children:[i.jsx("h2",{children:"Images"}),i.jsxs("div",{className:"block",children:[i.jsx("h3",{children:"Basic image tag"}),i.jsxs("p",{children:["The ",i.jsx("code",{children:"<img>"})," tag is used to display images. It is a self closing tag."]}),i.jsx("pre",{children:'<img src="image.jpg" alt="Description of image">'}),i.jsxs("ul",{children:[i.jsx("li",{children:"src defines image source"}),i.jsx("li",{children:"alt provides alternative text"})]})]}),i.jsxs("div",{className:"block",children:[i.jsx("h3",{children:"Why alt attribute is important"}),i.jsxs("ul",{children:[i.jsx("li",{children:"Improves accessibility"}),i.jsx("li",{children:"Displayed if image fails to load"}),i.jsx("li",{children:"Used by screen readers"}),i.jsx("li",{children:"Helps SEO"})]}),i.jsx("pre",{children:`<!-- Bad -->
<img src="cat.jpg">

<!-- Good -->
<img src="cat.jpg" alt="Black cat sitting on a chair">`})]}),i.jsxs("div",{className:"block",children:[i.jsx("h3",{children:"Image size control"}),i.jsx("pre",{children:'<img src="image.jpg" width="300" height="200">'}),i.jsx("p",{children:"You can also control size using CSS instead of HTML attributes."}),i.jsx("pre",{children:`img {
  width: 300px;
  height: auto;
}`})]}),i.jsxs("div",{className:"block",children:[i.jsx("h3",{children:"Responsive images"}),i.jsx("p",{children:"To make images responsive, avoid fixed width and use percentage or max width."}),i.jsx("pre",{children:`img {
  max-width: 100%;
  height: auto;
}`})]}),i.jsxs("div",{className:"block",children:[i.jsx("h3",{children:"Using picture element"}),i.jsxs("p",{children:["The ",i.jsx("code",{children:"<picture>"})," element allows different images based on screen size."]}),i.jsx("pre",{children:`<picture>
  <source media="(min-width: 800px)" srcset="large.jpg">
  <source media="(min-width: 400px)" srcset="medium.jpg">
  <img src="small.jpg" alt="Responsive example">
</picture>`})]}),i.jsxs("div",{className:"block",children:[i.jsx("h3",{children:"Lazy loading"}),i.jsx("pre",{children:'<img src="image.jpg" alt="Example" loading="lazy">'}),i.jsx("p",{children:'loading="lazy" delays loading until image is near viewport.'})]}),i.jsxs("div",{className:"block",children:[i.jsx("h3",{children:"Common mistakes"}),i.jsxs("ul",{children:[i.jsx("li",{children:"Missing alt attribute"}),i.jsx("li",{children:"Using very large unoptimized images"}),i.jsx("li",{children:"Not defining dimensions causing layout shift"}),i.jsx("li",{children:"Using image for decorative purpose without empty alt"})]}),i.jsx("pre",{children:`<!-- Decorative image -->
<img src="divider.png" alt="">`})]}),i.jsx("div",{className:"endLine",children:"Always optimize images, use meaningful alt text, and make them responsive."})]}),ym={Wrapper:Ie.section`
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 16px;

        .top {
            display: flex;
            flex-direction: column;
            gap: 6px;
            padding-bottom: 10px;
            border-bottom: 1px solid var(--color-border);
        }

        .title {
            font-size: 26px;
            font-weight: 900;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
        }

        .sub {
            color: var(--color-text-secondary);
            max-width: 900px;
        }

        .grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 14px;

            @media (width < 900px) {
                grid-template-columns: 1fr;
            }
        }

        .card {
            border: 1px solid var(--color-border);
            background: var(--color-surface);
            border-radius: 12px;
            padding: 14px;
            box-shadow: 0 10px 22px var(--color-shadow);
            display: flex;
            flex-direction: column;
            gap: 10px;
        }

        .h3 {
            font-size: 16px;
            font-weight: 900;
            color: var(--color-text-primary);
        }

        .text {
            color: var(--color-text-secondary);
            line-height: 1.6;
        }

        .mono {
            font-family:
                ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                "Liberation Mono", "Courier New", monospace;
            font-size: 0.95em;
            color: var(--color-text-primary);
        }

        .list {
            display: flex;
            flex-direction: column;
            gap: 8px;
            padding-left: 16px;
            list-style: disc;

            li {
                color: var(--color-text-secondary);
                line-height: 1.55;
            }
        }

        .pre {
            border: 1px solid var(--color-border);
            background: var(--color-surface-2);
            color: var(--color-text-primary);
            border-radius: 10px;
            padding: 12px;
            overflow: auto;
            font-size: 13px;
            line-height: 1.55;
        }

        .note {
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 10px;
            padding: 10px;
            display: flex;
            flex-direction: column;
            gap: 6px;
        }

        .noteTitle {
            font-size: 12px;
            font-weight: 900;
            letter-spacing: 0.7px;
            text-transform: uppercase;
            color: var(--color-text-muted);
        }

        .noteText {
            color: var(--color-text-secondary);
            line-height: 1.55;

            .mono {
                margin-left: 6px;
            }
        }

        .miniTableWrap {
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 10px;
            padding: 10px;
        }

        .tableScroll {
            overflow-x: auto;
            overflow-y: hidden;
            -webkit-overflow-scrolling: touch;
        }

        .demoTable {
            width: 820px;
            border-collapse: collapse;
            border-spacing: 0;
            background: var(--color-bg);
            color: var(--color-text-primary);
        }

        .demoTable th,
        .demoTable td {
            border-bottom: 1px solid var(--color-border);
            padding: 10px 10px;
            text-align: left;
            font-size: 13px;
            white-space: nowrap;
        }

        .demoTable thead th {
            position: sticky;
            top: 0;
            background: var(--color-surface);
            z-index: 1;
            font-weight: 900;
        }

        .demoTable tbody tr:hover td {
            background: var(--color-surface);
        }

        .visuallyHidden {
            position: absolute;
            width: 1px;
            height: 1px;
            padding: 0;
            margin: -1px;
            overflow: hidden;
            clip: rect(0, 0, 0, 0);
            white-space: nowrap;
            border: 0;
        }

        .endLine {
            padding: 10px 12px;
            border: 1px dashed var(--color-border);
            border-radius: 12px;
            color: var(--color-text-muted);
            background: var(--color-bg);
        }
    `},jm=()=>i.jsxs(ym.Wrapper,{id:"tables",children:[i.jsxs("div",{className:"top",children:[i.jsx("h2",{className:"title",children:"Tables"}),i.jsx("p",{className:"sub",children:"Use tables for tabular data - not for layout. A good table is readable, structured, and accessible."})]}),i.jsxs("div",{className:"grid",children:[i.jsxs("div",{className:"card",children:[i.jsx("h3",{className:"h3",children:"Core structure"}),i.jsxs("ul",{className:"list",children:[i.jsxs("li",{children:[i.jsx("span",{className:"mono",children:"table"})," - container"]}),i.jsxs("li",{children:[i.jsx("span",{className:"mono",children:"thead"})," - header rows"]}),i.jsxs("li",{children:[i.jsx("span",{className:"mono",children:"tbody"})," - data rows"]}),i.jsxs("li",{children:[i.jsx("span",{className:"mono",children:"tfoot"})," - summary rows (optional)"]}),i.jsxs("li",{children:[i.jsx("span",{className:"mono",children:"tr"})," - row"]}),i.jsxs("li",{children:[i.jsx("span",{className:"mono",children:"th"})," - header cell"]}),i.jsxs("li",{children:[i.jsx("span",{className:"mono",children:"td"})," - data cell"]})]}),i.jsx("pre",{className:"pre",children:`<table>
  <thead>
    <tr>
      <th>Item</th>
      <th>Qty</th>
      <th>Price</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>Notebook</td>
      <td>2</td>
      <td>499</td>
    </tr>
  </tbody>
</table>`})]}),i.jsxs("div",{className:"card",children:[i.jsx("h3",{className:"h3",children:"Caption and headers"}),i.jsxs("p",{className:"text",children:[i.jsx("span",{className:"mono",children:"caption"})," gives a short title to the table. Use ",i.jsx("span",{className:"mono",children:"th"})," ","with ",i.jsx("span",{className:"mono",children:"scope"})," for accessibility."]}),i.jsx("pre",{className:"pre",children:`<table>
  <caption>Monthly Expenses</caption>

  <thead>
    <tr>
      <th scope="col">Category</th>
      <th scope="col">Amount</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <th scope="row">Rent</th>
      <td>18000</td>
    </tr>
    <tr>
      <th scope="row">Food</th>
      <td>6500</td>
    </tr>
  </tbody>
</table>`}),i.jsxs("div",{className:"note",children:[i.jsx("div",{className:"noteTitle",children:"Tip"}),i.jsxs("div",{className:"noteText",children:[i.jsx("span",{className:"mono",children:'scope="col"'})," means the header applies to a column."," ",i.jsx("span",{className:"mono",children:'scope="row"'})," means it applies to a row."]})]})]})]}),i.jsxs("div",{className:"card",children:[i.jsx("h3",{className:"h3",children:"Advanced - cell spanning"}),i.jsxs("p",{className:"text",children:["Use ",i.jsx("span",{className:"mono",children:"colspan"})," and"," ",i.jsx("span",{className:"mono",children:"rowspan"})," to merge cells."]}),i.jsx("pre",{className:"pre",children:`<table>
  <thead>
    <tr>
      <th>Plan</th>
      <th colspan="2">Pricing</th>
    </tr>
    <tr>
      <th></th>
      <th>Monthly</th>
      <th>Yearly</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>Starter</td>
      <td>199</td>
      <td>1990</td>
    </tr>
  </tbody>
</table>`})]}),i.jsxs("div",{className:"card",children:[i.jsx("h3",{className:"h3",children:"Responsive table pattern"}),i.jsx("p",{className:"text",children:"Tables can overflow on small screens. The simplest pattern is to wrap the table inside a scroll container."}),i.jsx("pre",{className:"pre",children:`<div class="tableScroll">
  <table>
    ...
  </table>
</div>`}),i.jsx("div",{className:"miniTableWrap",role:"region","aria-label":"Example table scroll container",children:i.jsx("div",{className:"tableScroll",children:i.jsxs("table",{className:"demoTable",children:[i.jsx("caption",{className:"visuallyHidden",children:"Example orders table"}),i.jsx("thead",{children:i.jsxs("tr",{children:[i.jsx("th",{scope:"col",children:"Order"}),i.jsx("th",{scope:"col",children:"Customer"}),i.jsx("th",{scope:"col",children:"Status"}),i.jsx("th",{scope:"col",children:"Total"})]})}),i.jsxs("tbody",{children:[i.jsxs("tr",{children:[i.jsx("td",{children:"#A102"}),i.jsx("td",{children:"Neha"}),i.jsx("td",{children:"Shipped"}),i.jsx("td",{children:"2499"})]}),i.jsxs("tr",{children:[i.jsx("td",{children:"#A103"}),i.jsx("td",{children:"Niraj"}),i.jsx("td",{children:"Processing"}),i.jsx("td",{children:"1199"})]}),i.jsxs("tr",{children:[i.jsx("td",{children:"#A104"}),i.jsx("td",{children:"Aman"}),i.jsx("td",{children:"Delivered"}),i.jsx("td",{children:"799"})]}),i.jsxs("tr",{children:[i.jsx("td",{children:"#A105"}),i.jsx("td",{children:"Riya"}),i.jsx("td",{children:"Cancelled"}),i.jsx("td",{children:"0"})]})]})]})})}),i.jsxs("div",{className:"note",children:[i.jsx("div",{className:"noteTitle",children:"Rule"}),i.jsx("div",{className:"noteText",children:"Keep the header visible and allow horizontal scrolling for the table area only, not the full page."})]})]}),i.jsxs("div",{className:"card",children:[i.jsx("h3",{className:"h3",children:"Best practices"}),i.jsxs("ul",{className:"list",children:[i.jsx("li",{children:"Use tables only for data, not page layout"}),i.jsx("li",{children:"Always prefer a caption for important tables"}),i.jsx("li",{children:"Use th with scope for clear relationships"}),i.jsx("li",{children:"Keep columns consistent - avoid messy spans"}),i.jsx("li",{children:"For complex tables, consider headers with ids and headers attributes"})]})]}),i.jsxs("div",{className:"card",children:[i.jsx("h3",{className:"h3",children:"Common mistakes"}),i.jsxs("ul",{className:"list",children:[i.jsx("li",{children:"Using tables to build website layout"}),i.jsx("li",{children:"Skipping thead and th"}),i.jsx("li",{children:"No caption for data tables"}),i.jsx("li",{children:"Overusing colspan and rowspan until structure becomes unclear"})]})]}),i.jsx("div",{className:"endLine",children:"Tables are a precision tool - use them for structured data and keep them accessible."})]}),wm=()=>i.jsxs(i.Fragment,{children:[i.jsx(Jh,{}),i.jsx(em,{}),i.jsx(nm,{}),i.jsx(lm,{}),i.jsx(om,{}),i.jsx(am,{}),i.jsx(cm,{}),i.jsx(fm,{}),i.jsx(hm,{}),i.jsx(gm,{}),i.jsx(xm,{}),i.jsx(jm,{})]}),cd={Wrapper:Ie.header`
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
    `,Main:Ie.div`
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
    `},km="/html-core-notes/images/transparentLogo.png";var Dd={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},dd=dt.createContext&&dt.createContext(Dd),Sm=["attr","size","title"];function Nm(s,c){if(s==null)return{};var a=Cm(s,c),f,m;if(Object.getOwnPropertySymbols){var w=Object.getOwnPropertySymbols(s);for(m=0;m<w.length;m++)f=w[m],!(c.indexOf(f)>=0)&&Object.prototype.propertyIsEnumerable.call(s,f)&&(a[f]=s[f])}return a}function Cm(s,c){if(s==null)return{};var a={};for(var f in s)if(Object.prototype.hasOwnProperty.call(s,f)){if(c.indexOf(f)>=0)continue;a[f]=s[f]}return a}function yi(){return yi=Object.assign?Object.assign.bind():function(s){for(var c=1;c<arguments.length;c++){var a=arguments[c];for(var f in a)Object.prototype.hasOwnProperty.call(a,f)&&(s[f]=a[f])}return s},yi.apply(this,arguments)}function fd(s,c){var a=Object.keys(s);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(s);c&&(f=f.filter(function(m){return Object.getOwnPropertyDescriptor(s,m).enumerable})),a.push.apply(a,f)}return a}function ji(s){for(var c=1;c<arguments.length;c++){var a=arguments[c]!=null?arguments[c]:{};c%2?fd(Object(a),!0).forEach(function(f){Em(s,f,a[f])}):Object.getOwnPropertyDescriptors?Object.defineProperties(s,Object.getOwnPropertyDescriptors(a)):fd(Object(a)).forEach(function(f){Object.defineProperty(s,f,Object.getOwnPropertyDescriptor(a,f))})}return s}function Em(s,c,a){return c=_m(c),c in s?Object.defineProperty(s,c,{value:a,enumerable:!0,configurable:!0,writable:!0}):s[c]=a,s}function _m(s){var c=Tm(s,"string");return typeof c=="symbol"?c:c+""}function Tm(s,c){if(typeof s!="object"||!s)return s;var a=s[Symbol.toPrimitive];if(a!==void 0){var f=a.call(s,c);if(typeof f!="object")return f;throw new TypeError("@@toPrimitive must return a primitive value.")}return(c==="string"?String:Number)(s)}function Fd(s){return s&&s.map((c,a)=>dt.createElement(c.tag,ji({key:a},c.attr),Fd(c.child)))}function Ud(s){return c=>dt.createElement(Pm,yi({attr:ji({},s.attr)},c),Fd(s.child))}function Pm(s){var c=a=>{var{attr:f,size:m,title:w}=s,C=Nm(s,Sm),b=m||a.size||"1em",T;return a.className&&(T=a.className),s.className&&(T=(T?T+" ":"")+s.className),dt.createElement("svg",yi({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},a.attr,f,C,{className:T,style:ji(ji({color:s.color||a.color},a.style),s.style),height:b,width:b,xmlns:"http://www.w3.org/2000/svg"}),w&&dt.createElement("title",null,w),s.children)};return dd!==void 0?dt.createElement(dd.Consumer,null,a=>c(a)):c(Dd)}function zm(s){return Ud({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"},child:[]}]})(s)}function Rm(s){return Ud({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"5"},child:[]},{tag:"line",attr:{x1:"12",y1:"1",x2:"12",y2:"3"},child:[]},{tag:"line",attr:{x1:"12",y1:"21",x2:"12",y2:"23"},child:[]},{tag:"line",attr:{x1:"4.22",y1:"4.22",x2:"5.64",y2:"5.64"},child:[]},{tag:"line",attr:{x1:"18.36",y1:"18.36",x2:"19.78",y2:"19.78"},child:[]},{tag:"line",attr:{x1:"1",y1:"12",x2:"3",y2:"12"},child:[]},{tag:"line",attr:{x1:"21",y1:"12",x2:"23",y2:"12"},child:[]},{tag:"line",attr:{x1:"4.22",y1:"19.78",x2:"5.64",y2:"18.36"},child:[]},{tag:"line",attr:{x1:"18.36",y1:"5.64",x2:"19.78",y2:"4.22"},child:[]}]})(s)}const Lm=({theme:s="dark",onThemeChange:c})=>{const[a,f]=lt.useState(!1),m=lt.useMemo(()=>s==="light"?"dark":"light",[s]),w=()=>{typeof c=="function"&&c(m)};return i.jsx(cd.Wrapper,{children:i.jsx(cd.Main,{children:i.jsxs("div",{className:"logoNameThemeToggleWrapper",children:[i.jsxs("div",{className:"logoNameWrapper",children:[i.jsxs("div",{className:"logoWrapper",children:[!a&&i.jsx("div",{className:"logoSkeleton"}),i.jsx("img",{src:km,alt:"html-core-notes",onLoad:()=>f(!0),style:{opacity:a?1:0}})]}),i.jsxs("div",{className:"nameWrapper",children:[i.jsx("div",{className:"title",children:"html-core-notes"}),i.jsx("div",{className:"subTitle",children:"At-a-glance HTML revision"})]})]}),i.jsxs("button",{type:"button",className:"themeToggleBtn",onClick:w,"aria-label":`Switch to ${m} theme`,title:`Switch to ${m}`,children:[i.jsx("span",{className:"icon",children:s==="light"?i.jsx(zm,{}):i.jsx(Rm,{})}),i.jsx("span",{className:"label",children:s==="light"?"Light":"Dark"})]})]})})})},bm={Wrapper:Ie.footer`
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px;

        font-size: 12px;
        color: var(--color-text-muted);

        padding: 14px 0;

        .right a {
            color: var(--color-text-secondary);
            font-weight: 600;
        }

        .right a:hover {
            color: var(--color-text-primary);
        }

        a {
            color: var(--color-text-secondary);
            font-weight: 600;
        }

        a:hover {
            color: var(--color-text-primary);
        }

        @media (width < 600px) {
            flex-direction: column;
            align-items: flex-start;
            gap: 6px;
        }
    `},Im=()=>i.jsxs(bm.Wrapper,{children:[i.jsxs("div",{className:"left",children:["© ",new Date().getFullYear()," | All rights reserved"]}),i.jsxs("div",{className:"right",children:["By ",i.jsx("a",{href:"https://www.ashishranjan.net",target:"_blank",rel:"noopener noreferrer",children:"Ashish Ranjan"})]})]}),pd="htmlCoreNotesTheme",Rs="htmlCoreNotesActiveNav",hd=["doctype","head","body","semantic","block-inline","attributes","headings","paragraphs","lists","links","images","tables","forms","inputs","textarea","select","validation","audio","video","iframe","svg","canvas","accessibility","seo","performance","best-practices"],Om=()=>{const[s,c]=lt.useState("dark"),[a,f]=lt.useState(""),m=lt.useRef(null),w=lt.useRef(!1),C=lt.useRef(null);lt.useEffect(()=>{try{const j=localStorage.getItem(pd),D=j==="light"||j==="dark"?j:"dark";c(D),document.documentElement.setAttribute("data-theme",D)}catch{c("dark"),document.documentElement.setAttribute("data-theme","dark")}},[]),lt.useEffect(()=>{document.documentElement.setAttribute("data-theme",s);try{localStorage.setItem(pd,s)}catch{}},[s]);const b=j=>{j!=="light"&&j!=="dark"||c(j)},T=j=>{requestAnimationFrame(()=>{const D=document.querySelector(`.sideNav a[href="${j}"]`);D&&D.scrollIntoView({block:"center"})})},X=j=>{const D=m.current,H=document.getElementById(j);if(!D||!H)return;const B=D.getBoundingClientRect(),V=H.getBoundingClientRect(),re=D.scrollTop+(V.top-B.top)-14;D.scrollTo({top:re,behavior:"smooth"})},G=j=>{f(j);try{localStorage.setItem(Rs,j)}catch{}T(j)};lt.useEffect(()=>{let D=window.location.hash||"";if(!D)try{D=localStorage.getItem(Rs)||""}catch{D=""}if(D){G(D);const H=D.replace("#","");requestAnimationFrame(()=>{X(H)})}},[]),lt.useEffect(()=>{const j=()=>{const D=window.location.hash||"";if(!D)return;G(D);const H=D.replace("#","");requestAnimationFrame(()=>{X(H)})};return window.addEventListener("hashchange",j),()=>window.removeEventListener("hashchange",j)},[]);const P=(j,D)=>{j.preventDefault();const H=`#${D}`;w.current=!0,C.current&&clearTimeout(C.current),C.current=setTimeout(()=>{w.current=!1},700),G(H),X(D);try{window.history.replaceState(null,"",H)}catch{}};return lt.useEffect(()=>{const j=m.current;if(!j)return;const D=()=>{if(!j)return;const H=j.getBoundingClientRect().top;let B="";for(let re=0;re<hd.length;re++){const le=hd[re],q=document.getElementById(le);if(!q)continue;q.getBoundingClientRect().top-H<=120&&(B=le)}if(!B)return;const V=`#${B}`;f(re=>{if(re===V)return re;try{localStorage.setItem(Rs,V)}catch{}return requestAnimationFrame(()=>{const le=document.querySelector(`.sideNav a[href="${V}"]`);le&&le.scrollIntoView({block:"center"})}),V})};return j.addEventListener("scroll",D),()=>{j.removeEventListener("scroll",D)}},[]),i.jsxs(zs.Wrapper,{children:[i.jsx(zs.Header,{children:i.jsx(Lm,{theme:s,onThemeChange:b})}),i.jsxs(zs.Main,{children:[i.jsx("aside",{className:"sidePanelWrapper",children:i.jsx("div",{className:"sideInner",children:i.jsxs("nav",{className:"sideNav",children:[i.jsxs("div",{className:"navSection",children:[i.jsx("div",{className:"navTitle",children:"Foundations"}),i.jsx("a",{href:"#doctype",className:a==="#doctype"?"isActive":"",onClick:j=>P(j,"doctype"),children:"Doctype & html"}),i.jsx("a",{href:"#head",className:a==="#head"?"isActive":"",onClick:j=>P(j,"head"),children:"Head & Meta"}),i.jsx("a",{href:"#body",className:a==="#body"?"isActive":"",onClick:j=>P(j,"body"),children:"Body"}),i.jsx("a",{href:"#semantic",className:a==="#semantic"?"isActive":"",onClick:j=>P(j,"semantic"),children:"Semantic Tags"}),i.jsx("a",{href:"#block-inline",className:a==="#block-inline"?"isActive":"",onClick:j=>P(j,"block-inline"),children:"Block vs Inline"}),i.jsx("a",{href:"#attributes",className:a==="#attributes"?"isActive":"",onClick:j=>P(j,"attributes"),children:"Global Attributes"})]}),i.jsxs("div",{className:"navSection",children:[i.jsx("div",{className:"navTitle",children:"Text & Content"}),i.jsx("a",{href:"#headings",className:a==="#headings"?"isActive":"",onClick:j=>P(j,"headings"),children:"Headings"}),i.jsx("a",{href:"#paragraphs",className:a==="#paragraphs"?"isActive":"",onClick:j=>P(j,"paragraphs"),children:"Paragraphs"}),i.jsx("a",{href:"#lists",className:a==="#lists"?"isActive":"",onClick:j=>P(j,"lists"),children:"Lists"}),i.jsx("a",{href:"#links",className:a==="#links"?"isActive":"",onClick:j=>P(j,"links"),children:"Links"}),i.jsx("a",{href:"#images",className:a==="#images"?"isActive":"",onClick:j=>P(j,"images"),children:"Images"}),i.jsx("a",{href:"#tables",className:a==="#tables"?"isActive":"",onClick:j=>P(j,"tables"),children:"Tables"})]}),i.jsxs("div",{className:"navSection",children:[i.jsx("div",{className:"navTitle",children:"Forms"}),i.jsx("a",{href:"#forms",className:a==="#forms"?"isActive":"",onClick:j=>P(j,"forms"),children:"Form Tag"}),i.jsx("a",{href:"#inputs",className:a==="#inputs"?"isActive":"",onClick:j=>P(j,"inputs"),children:"Input Types"}),i.jsx("a",{href:"#textarea",className:a==="#textarea"?"isActive":"",onClick:j=>P(j,"textarea"),children:"Textarea"}),i.jsx("a",{href:"#select",className:a==="#select"?"isActive":"",onClick:j=>P(j,"select"),children:"Select"}),i.jsx("a",{href:"#validation",className:a==="#validation"?"isActive":"",onClick:j=>P(j,"validation"),children:"Validation"})]}),i.jsxs("div",{className:"navSection",children:[i.jsx("div",{className:"navTitle",children:"Media & Embeds"}),i.jsx("a",{href:"#audio",className:a==="#audio"?"isActive":"",onClick:j=>P(j,"audio"),children:"Audio"}),i.jsx("a",{href:"#video",className:a==="#video"?"isActive":"",onClick:j=>P(j,"video"),children:"Video"}),i.jsx("a",{href:"#iframe",className:a==="#iframe"?"isActive":"",onClick:j=>P(j,"iframe"),children:"Iframe"}),i.jsx("a",{href:"#svg",className:a==="#svg"?"isActive":"",onClick:j=>P(j,"svg"),children:"SVG"}),i.jsx("a",{href:"#canvas",className:a==="#canvas"?"isActive":"",onClick:j=>P(j,"canvas"),children:"Canvas"})]}),i.jsxs("div",{className:"navSection",children:[i.jsx("div",{className:"navTitle",children:"Advanced"}),i.jsx("a",{href:"#accessibility",className:a==="#accessibility"?"isActive":"",onClick:j=>P(j,"accessibility"),children:"Accessibility"}),i.jsx("a",{href:"#seo",className:a==="#seo"?"isActive":"",onClick:j=>P(j,"seo"),children:"SEO Basics"}),i.jsx("a",{href:"#performance",className:a==="#performance"?"isActive":"",onClick:j=>P(j,"performance"),children:"Performance"}),i.jsx("a",{href:"#best-practices",className:a==="#best-practices"?"isActive":"",onClick:j=>P(j,"best-practices"),children:"Best Practices"})]})]})})}),i.jsxs("section",{className:"contentFooterWrapper",ref:m,children:[i.jsx("div",{className:"contentWrapper",children:i.jsx(wm,{})}),i.jsx("div",{className:"footerWrapper",children:i.jsx(Im,{})})]})]})]})};Gp.createRoot(document.getElementById("root")).render(i.jsx(i.Fragment,{children:i.jsx(Om,{})}));

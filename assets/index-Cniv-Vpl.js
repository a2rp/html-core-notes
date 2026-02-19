(function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const m of document.querySelectorAll('link[rel="modulepreload"]'))u(m);new MutationObserver(m=>{for(const g of m)if(g.type==="childList")for(const w of g.addedNodes)w.tagName==="LINK"&&w.rel==="modulepreload"&&u(w)}).observe(document,{childList:!0,subtree:!0});function l(m){const g={};return m.integrity&&(g.integrity=m.integrity),m.referrerPolicy&&(g.referrerPolicy=m.referrerPolicy),m.crossOrigin==="use-credentials"?g.credentials="include":m.crossOrigin==="anonymous"?g.credentials="omit":g.credentials="same-origin",g}function u(m){if(m.ep)return;m.ep=!0;const g=l(m);fetch(m.href,g)}})();function nm(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var Ma={exports:{}},no={},Pa={exports:{}},oe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tu;function om(){if(tu)return oe;tu=1;var s=Symbol.for("react.element"),c=Symbol.for("react.portal"),l=Symbol.for("react.fragment"),u=Symbol.for("react.strict_mode"),m=Symbol.for("react.profiler"),g=Symbol.for("react.provider"),w=Symbol.for("react.context"),E=Symbol.for("react.forward_ref"),C=Symbol.for("react.suspense"),G=Symbol.for("react.memo"),$=Symbol.for("react.lazy"),F=Symbol.iterator;function _(x){return x===null||typeof x!="object"?null:(x=F&&x[F]||x["@@iterator"],typeof x=="function"?x:null)}var V={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},O=Object.assign,A={};function K(x,N,te){this.props=x,this.context=N,this.refs=A,this.updater=te||V}K.prototype.isReactComponent={},K.prototype.setState=function(x,N){if(typeof x!="object"&&typeof x!="function"&&x!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,x,N,"setState")},K.prototype.forceUpdate=function(x){this.updater.enqueueForceUpdate(this,x,"forceUpdate")};function ie(){}ie.prototype=K.prototype;function de(x,N,te){this.props=x,this.context=N,this.refs=A,this.updater=te||V}var ee=de.prototype=new ie;ee.constructor=de,O(ee,K.prototype),ee.isPureReactComponent=!0;var I=Array.isArray,Z=Object.prototype.hasOwnProperty,Q={current:null},z={key:!0,ref:!0,__self:!0,__source:!0};function H(x,N,te){var re,ce={},ae=null,pe=null;if(N!=null)for(re in N.ref!==void 0&&(pe=N.ref),N.key!==void 0&&(ae=""+N.key),N)Z.call(N,re)&&!z.hasOwnProperty(re)&&(ce[re]=N[re]);var ue=arguments.length-2;if(ue===1)ce.children=te;else if(1<ue){for(var xe=Array(ue),Te=0;Te<ue;Te++)xe[Te]=arguments[Te+2];ce.children=xe}if(x&&x.defaultProps)for(re in ue=x.defaultProps,ue)ce[re]===void 0&&(ce[re]=ue[re]);return{$$typeof:s,type:x,key:ae,ref:pe,props:ce,_owner:Q.current}}function ye(x,N){return{$$typeof:s,type:x.type,key:N,ref:x.ref,props:x.props,_owner:x._owner}}function _e(x){return typeof x=="object"&&x!==null&&x.$$typeof===s}function le(x){var N={"=":"=0",":":"=2"};return"$"+x.replace(/[=:]/g,function(te){return N[te]})}var Ie=/\/+/g;function Se(x,N){return typeof x=="object"&&x!==null&&x.key!=null?le(""+x.key):N.toString(36)}function Ke(x,N,te,re,ce){var ae=typeof x;(ae==="undefined"||ae==="boolean")&&(x=null);var pe=!1;if(x===null)pe=!0;else switch(ae){case"string":case"number":pe=!0;break;case"object":switch(x.$$typeof){case s:case c:pe=!0}}if(pe)return pe=x,ce=ce(pe),x=re===""?"."+Se(pe,0):re,I(ce)?(te="",x!=null&&(te=x.replace(Ie,"$&/")+"/"),Ke(ce,N,te,"",function(Te){return Te})):ce!=null&&(_e(ce)&&(ce=ye(ce,te+(!ce.key||pe&&pe.key===ce.key?"":(""+ce.key).replace(Ie,"$&/")+"/")+x)),N.push(ce)),1;if(pe=0,re=re===""?".":re+":",I(x))for(var ue=0;ue<x.length;ue++){ae=x[ue];var xe=re+Se(ae,ue);pe+=Ke(ae,N,te,xe,ce)}else if(xe=_(x),typeof xe=="function")for(x=xe.call(x),ue=0;!(ae=x.next()).done;)ae=ae.value,xe=re+Se(ae,ue++),pe+=Ke(ae,N,te,xe,ce);else if(ae==="object")throw N=String(x),Error("Objects are not valid as a React child (found: "+(N==="[object Object]"?"object with keys {"+Object.keys(x).join(", ")+"}":N)+"). If you meant to render a collection of children, use an array instead.");return pe}function et(x,N,te){if(x==null)return x;var re=[],ce=0;return Ke(x,re,"","",function(ae){return N.call(te,ae,ce++)}),re}function qe(x){if(x._status===-1){var N=x._result;N=N(),N.then(function(te){(x._status===0||x._status===-1)&&(x._status=1,x._result=te)},function(te){(x._status===0||x._status===-1)&&(x._status=2,x._result=te)}),x._status===-1&&(x._status=0,x._result=N)}if(x._status===1)return x._result.default;throw x._result}var je={current:null},L={transition:null},U={ReactCurrentDispatcher:je,ReactCurrentBatchConfig:L,ReactCurrentOwner:Q};function M(){throw Error("act(...) is not supported in production builds of React.")}return oe.Children={map:et,forEach:function(x,N,te){et(x,function(){N.apply(this,arguments)},te)},count:function(x){var N=0;return et(x,function(){N++}),N},toArray:function(x){return et(x,function(N){return N})||[]},only:function(x){if(!_e(x))throw Error("React.Children.only expected to receive a single React element child.");return x}},oe.Component=K,oe.Fragment=l,oe.Profiler=m,oe.PureComponent=de,oe.StrictMode=u,oe.Suspense=C,oe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=U,oe.act=M,oe.cloneElement=function(x,N,te){if(x==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+x+".");var re=O({},x.props),ce=x.key,ae=x.ref,pe=x._owner;if(N!=null){if(N.ref!==void 0&&(ae=N.ref,pe=Q.current),N.key!==void 0&&(ce=""+N.key),x.type&&x.type.defaultProps)var ue=x.type.defaultProps;for(xe in N)Z.call(N,xe)&&!z.hasOwnProperty(xe)&&(re[xe]=N[xe]===void 0&&ue!==void 0?ue[xe]:N[xe])}var xe=arguments.length-2;if(xe===1)re.children=te;else if(1<xe){ue=Array(xe);for(var Te=0;Te<xe;Te++)ue[Te]=arguments[Te+2];re.children=ue}return{$$typeof:s,type:x.type,key:ce,ref:ae,props:re,_owner:pe}},oe.createContext=function(x){return x={$$typeof:w,_currentValue:x,_currentValue2:x,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},x.Provider={$$typeof:g,_context:x},x.Consumer=x},oe.createElement=H,oe.createFactory=function(x){var N=H.bind(null,x);return N.type=x,N},oe.createRef=function(){return{current:null}},oe.forwardRef=function(x){return{$$typeof:E,render:x}},oe.isValidElement=_e,oe.lazy=function(x){return{$$typeof:$,_payload:{_status:-1,_result:x},_init:qe}},oe.memo=function(x,N){return{$$typeof:G,type:x,compare:N===void 0?null:N}},oe.startTransition=function(x){var N=L.transition;L.transition={};try{x()}finally{L.transition=N}},oe.unstable_act=M,oe.useCallback=function(x,N){return je.current.useCallback(x,N)},oe.useContext=function(x){return je.current.useContext(x)},oe.useDebugValue=function(){},oe.useDeferredValue=function(x){return je.current.useDeferredValue(x)},oe.useEffect=function(x,N){return je.current.useEffect(x,N)},oe.useId=function(){return je.current.useId()},oe.useImperativeHandle=function(x,N,te){return je.current.useImperativeHandle(x,N,te)},oe.useInsertionEffect=function(x,N){return je.current.useInsertionEffect(x,N)},oe.useLayoutEffect=function(x,N){return je.current.useLayoutEffect(x,N)},oe.useMemo=function(x,N){return je.current.useMemo(x,N)},oe.useReducer=function(x,N,te){return je.current.useReducer(x,N,te)},oe.useRef=function(x){return je.current.useRef(x)},oe.useState=function(x){return je.current.useState(x)},oe.useSyncExternalStore=function(x,N,te){return je.current.useSyncExternalStore(x,N,te)},oe.useTransition=function(){return je.current.useTransition()},oe.version="18.3.1",oe}var ru;function Za(){return ru||(ru=1,Pa.exports=om()),Pa.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nu;function sm(){if(nu)return no;nu=1;var s=Za(),c=Symbol.for("react.element"),l=Symbol.for("react.fragment"),u=Object.prototype.hasOwnProperty,m=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,g={key:!0,ref:!0,__self:!0,__source:!0};function w(E,C,G){var $,F={},_=null,V=null;G!==void 0&&(_=""+G),C.key!==void 0&&(_=""+C.key),C.ref!==void 0&&(V=C.ref);for($ in C)u.call(C,$)&&!g.hasOwnProperty($)&&(F[$]=C[$]);if(E&&E.defaultProps)for($ in C=E.defaultProps,C)F[$]===void 0&&(F[$]=C[$]);return{$$typeof:c,type:E,key:_,ref:V,props:F,_owner:m.current}}return no.Fragment=l,no.jsx=w,no.jsxs=w,no}var ou;function im(){return ou||(ou=1,Ma.exports=sm()),Ma.exports}var r=im(),ws={},Ra={exports:{}},lt={},Ba={exports:{}},Oa={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var su;function am(){return su||(su=1,(function(s){function c(L,U){var M=L.length;L.push(U);e:for(;0<M;){var x=M-1>>>1,N=L[x];if(0<m(N,U))L[x]=U,L[M]=N,M=x;else break e}}function l(L){return L.length===0?null:L[0]}function u(L){if(L.length===0)return null;var U=L[0],M=L.pop();if(M!==U){L[0]=M;e:for(var x=0,N=L.length,te=N>>>1;x<te;){var re=2*(x+1)-1,ce=L[re],ae=re+1,pe=L[ae];if(0>m(ce,M))ae<N&&0>m(pe,ce)?(L[x]=pe,L[ae]=M,x=ae):(L[x]=ce,L[re]=M,x=re);else if(ae<N&&0>m(pe,M))L[x]=pe,L[ae]=M,x=ae;else break e}}return U}function m(L,U){var M=L.sortIndex-U.sortIndex;return M!==0?M:L.id-U.id}if(typeof performance=="object"&&typeof performance.now=="function"){var g=performance;s.unstable_now=function(){return g.now()}}else{var w=Date,E=w.now();s.unstable_now=function(){return w.now()-E}}var C=[],G=[],$=1,F=null,_=3,V=!1,O=!1,A=!1,K=typeof setTimeout=="function"?setTimeout:null,ie=typeof clearTimeout=="function"?clearTimeout:null,de=typeof setImmediate!="undefined"?setImmediate:null;typeof navigator!="undefined"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function ee(L){for(var U=l(G);U!==null;){if(U.callback===null)u(G);else if(U.startTime<=L)u(G),U.sortIndex=U.expirationTime,c(C,U);else break;U=l(G)}}function I(L){if(A=!1,ee(L),!O)if(l(C)!==null)O=!0,qe(Z);else{var U=l(G);U!==null&&je(I,U.startTime-L)}}function Z(L,U){O=!1,A&&(A=!1,ie(H),H=-1),V=!0;var M=_;try{for(ee(U),F=l(C);F!==null&&(!(F.expirationTime>U)||L&&!le());){var x=F.callback;if(typeof x=="function"){F.callback=null,_=F.priorityLevel;var N=x(F.expirationTime<=U);U=s.unstable_now(),typeof N=="function"?F.callback=N:F===l(C)&&u(C),ee(U)}else u(C);F=l(C)}if(F!==null)var te=!0;else{var re=l(G);re!==null&&je(I,re.startTime-U),te=!1}return te}finally{F=null,_=M,V=!1}}var Q=!1,z=null,H=-1,ye=5,_e=-1;function le(){return!(s.unstable_now()-_e<ye)}function Ie(){if(z!==null){var L=s.unstable_now();_e=L;var U=!0;try{U=z(!0,L)}finally{U?Se():(Q=!1,z=null)}}else Q=!1}var Se;if(typeof de=="function")Se=function(){de(Ie)};else if(typeof MessageChannel!="undefined"){var Ke=new MessageChannel,et=Ke.port2;Ke.port1.onmessage=Ie,Se=function(){et.postMessage(null)}}else Se=function(){K(Ie,0)};function qe(L){z=L,Q||(Q=!0,Se())}function je(L,U){H=K(function(){L(s.unstable_now())},U)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(L){L.callback=null},s.unstable_continueExecution=function(){O||V||(O=!0,qe(Z))},s.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ye=0<L?Math.floor(1e3/L):5},s.unstable_getCurrentPriorityLevel=function(){return _},s.unstable_getFirstCallbackNode=function(){return l(C)},s.unstable_next=function(L){switch(_){case 1:case 2:case 3:var U=3;break;default:U=_}var M=_;_=U;try{return L()}finally{_=M}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(L,U){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var M=_;_=L;try{return U()}finally{_=M}},s.unstable_scheduleCallback=function(L,U,M){var x=s.unstable_now();switch(typeof M=="object"&&M!==null?(M=M.delay,M=typeof M=="number"&&0<M?x+M:x):M=x,L){case 1:var N=-1;break;case 2:N=250;break;case 5:N=1073741823;break;case 4:N=1e4;break;default:N=5e3}return N=M+N,L={id:$++,callback:U,priorityLevel:L,startTime:M,expirationTime:N,sortIndex:-1},M>x?(L.sortIndex=M,c(G,L),l(C)===null&&L===l(G)&&(A?(ie(H),H=-1):A=!0,je(I,M-x))):(L.sortIndex=N,c(C,L),O||V||(O=!0,qe(Z))),L},s.unstable_shouldYield=le,s.unstable_wrapCallback=function(L){var U=_;return function(){var M=_;_=U;try{return L.apply(this,arguments)}finally{_=M}}}})(Oa)),Oa}var iu;function lm(){return iu||(iu=1,Ba.exports=am()),Ba.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var au;function cm(){if(au)return lt;au=1;var s=Za(),c=lm();function l(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var u=new Set,m={};function g(e,t){w(e,t),w(e+"Capture",t)}function w(e,t){for(m[e]=t,e=0;e<t.length;e++)u.add(t[e])}var E=!(typeof window=="undefined"||typeof window.document=="undefined"||typeof window.document.createElement=="undefined"),C=Object.prototype.hasOwnProperty,G=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,$={},F={};function _(e){return C.call(F,e)?!0:C.call($,e)?!1:G.test(e)?F[e]=!0:($[e]=!0,!1)}function V(e,t,n,o){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return o?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function O(e,t,n,o){if(t===null||typeof t=="undefined"||V(e,t,n,o))return!0;if(o)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function A(e,t,n,o,i,a,d){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=o,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=d}var K={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){K[e]=new A(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];K[t]=new A(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){K[e]=new A(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){K[e]=new A(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){K[e]=new A(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){K[e]=new A(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){K[e]=new A(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){K[e]=new A(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){K[e]=new A(e,5,!1,e.toLowerCase(),null,!1,!1)});var ie=/[\-:]([a-z])/g;function de(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(ie,de);K[t]=new A(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(ie,de);K[t]=new A(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(ie,de);K[t]=new A(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){K[e]=new A(e,1,!1,e.toLowerCase(),null,!1,!1)}),K.xlinkHref=new A("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){K[e]=new A(e,1,!1,e.toLowerCase(),null,!0,!0)});function ee(e,t,n,o){var i=K.hasOwnProperty(t)?K[t]:null;(i!==null?i.type!==0:o||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(O(t,n,i,o)&&(n=null),o||i===null?_(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,o=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,o?e.setAttributeNS(o,t,n):e.setAttribute(t,n))))}var I=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Z=Symbol.for("react.element"),Q=Symbol.for("react.portal"),z=Symbol.for("react.fragment"),H=Symbol.for("react.strict_mode"),ye=Symbol.for("react.profiler"),_e=Symbol.for("react.provider"),le=Symbol.for("react.context"),Ie=Symbol.for("react.forward_ref"),Se=Symbol.for("react.suspense"),Ke=Symbol.for("react.suspense_list"),et=Symbol.for("react.memo"),qe=Symbol.for("react.lazy"),je=Symbol.for("react.offscreen"),L=Symbol.iterator;function U(e){return e===null||typeof e!="object"?null:(e=L&&e[L]||e["@@iterator"],typeof e=="function"?e:null)}var M=Object.assign,x;function N(e){if(x===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);x=t&&t[1]||""}return`
`+x+e}var te=!1;function re(e,t){if(!e||te)return"";te=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(j){var o=j}Reflect.construct(e,[],t)}else{try{t.call()}catch(j){o=j}e.call(t.prototype)}else{try{throw Error()}catch(j){o=j}e()}}catch(j){if(j&&o&&typeof j.stack=="string"){for(var i=j.stack.split(`
`),a=o.stack.split(`
`),d=i.length-1,p=a.length-1;1<=d&&0<=p&&i[d]!==a[p];)p--;for(;1<=d&&0<=p;d--,p--)if(i[d]!==a[p]){if(d!==1||p!==1)do if(d--,p--,0>p||i[d]!==a[p]){var h=`
`+i[d].replace(" at new "," at ");return e.displayName&&h.includes("<anonymous>")&&(h=h.replace("<anonymous>",e.displayName)),h}while(1<=d&&0<=p);break}}}finally{te=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?N(e):""}function ce(e){switch(e.tag){case 5:return N(e.type);case 16:return N("Lazy");case 13:return N("Suspense");case 19:return N("SuspenseList");case 0:case 2:case 15:return e=re(e.type,!1),e;case 11:return e=re(e.type.render,!1),e;case 1:return e=re(e.type,!0),e;default:return""}}function ae(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case z:return"Fragment";case Q:return"Portal";case ye:return"Profiler";case H:return"StrictMode";case Se:return"Suspense";case Ke:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case le:return(e.displayName||"Context")+".Consumer";case _e:return(e._context.displayName||"Context")+".Provider";case Ie:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case et:return t=e.displayName||null,t!==null?t:ae(e.type)||"Memo";case qe:t=e._payload,e=e._init;try{return ae(e(t))}catch{}}return null}function pe(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ae(t);case 8:return t===H?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function ue(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function xe(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Te(e){var t=xe(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),o=""+e[t];if(!e.hasOwnProperty(t)&&typeof n!="undefined"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,a=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(d){o=""+d,a.call(this,d)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return o},setValue:function(d){o=""+d},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Jt(e){e._valueTracker||(e._valueTracker=Te(e))}function jr(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),o="";return e&&(o=xe(e)?e.checked?"true":"false":e.value),e=o,e!==n?(t.setValue(e),!0):!1}function bt(e){if(e=e||(typeof document!="undefined"?document:void 0),typeof e=="undefined")return null;try{return e.activeElement||e.body}catch{return e.body}}function Fs(e,t){var n=t.checked;return M({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n!=null?n:e._wrapperState.initialChecked})}function ll(e,t){var n=t.defaultValue==null?"":t.defaultValue,o=t.checked!=null?t.checked:t.defaultChecked;n=ue(t.value!=null?t.value:n),e._wrapperState={initialChecked:o,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function cl(e,t){t=t.checked,t!=null&&ee(e,"checked",t,!1)}function Hs(e,t){cl(e,t);var n=ue(t.value),o=t.type;if(n!=null)o==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(o==="submit"||o==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Ws(e,t.type,n):t.hasOwnProperty("defaultValue")&&Ws(e,t.type,ue(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function dl(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var o=t.type;if(!(o!=="submit"&&o!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Ws(e,t,n){(t!=="number"||bt(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var vn=Array.isArray;function Dr(e,t,n,o){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&o&&(e[n].defaultSelected=!0)}else{for(n=""+ue(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,o&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Us(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(l(91));return M({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ul(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(l(92));if(vn(n)){if(1<n.length)throw Error(l(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:ue(n)}}function pl(e,t){var n=ue(t.value),o=ue(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),o!=null&&(e.defaultValue=""+o)}function hl(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function ml(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function $s(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?ml(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ho,fl=(function(e){return typeof MSApp!="undefined"&&MSApp.execUnsafeLocalFunction?function(t,n,o,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,o,i)})}:e})(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(ho=ho||document.createElement("div"),ho.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ho.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function yn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var jn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ap=["Webkit","ms","Moz","O"];Object.keys(jn).forEach(function(e){ap.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),jn[t]=jn[e]})});function xl(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||jn.hasOwnProperty(e)&&jn[e]?(""+t).trim():t+"px"}function gl(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var o=n.indexOf("--")===0,i=xl(n,t[n],o);n==="float"&&(n="cssFloat"),o?e.setProperty(n,i):e[n]=i}}var lp=M({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Vs(e,t){if(t){if(lp[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(l(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(l(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(l(61))}if(t.style!=null&&typeof t.style!="object")throw Error(l(62))}}function Gs(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Qs=null;function Ks(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var qs=null,Fr=null,Hr=null;function vl(e){if(e=Wn(e)){if(typeof qs!="function")throw Error(l(280));var t=e.stateNode;t&&(t=Bo(t),qs(e.stateNode,e.type,t))}}function yl(e){Fr?Hr?Hr.push(e):Hr=[e]:Fr=e}function jl(){if(Fr){var e=Fr,t=Hr;if(Hr=Fr=null,vl(e),t)for(e=0;e<t.length;e++)vl(t[e])}}function wl(e,t){return e(t)}function Nl(){}var Ys=!1;function bl(e,t,n){if(Ys)return e(t,n);Ys=!0;try{return wl(e,t,n)}finally{Ys=!1,(Fr!==null||Hr!==null)&&(Nl(),jl())}}function wn(e,t){var n=e.stateNode;if(n===null)return null;var o=Bo(n);if(o===null)return null;n=o[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(l(231,t,typeof n));return n}var Xs=!1;if(E)try{var Nn={};Object.defineProperty(Nn,"passive",{get:function(){Xs=!0}}),window.addEventListener("test",Nn,Nn),window.removeEventListener("test",Nn,Nn)}catch{Xs=!1}function cp(e,t,n,o,i,a,d,p,h){var j=Array.prototype.slice.call(arguments,3);try{t.apply(n,j)}catch(k){this.onError(k)}}var bn=!1,mo=null,fo=!1,Js=null,dp={onError:function(e){bn=!0,mo=e}};function up(e,t,n,o,i,a,d,p,h){bn=!1,mo=null,cp.apply(dp,arguments)}function pp(e,t,n,o,i,a,d,p,h){if(up.apply(this,arguments),bn){if(bn){var j=mo;bn=!1,mo=null}else throw Error(l(198));fo||(fo=!0,Js=j)}}function wr(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function kl(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Sl(e){if(wr(e)!==e)throw Error(l(188))}function hp(e){var t=e.alternate;if(!t){if(t=wr(e),t===null)throw Error(l(188));return t!==e?null:e}for(var n=e,o=t;;){var i=n.return;if(i===null)break;var a=i.alternate;if(a===null){if(o=i.return,o!==null){n=o;continue}break}if(i.child===a.child){for(a=i.child;a;){if(a===n)return Sl(i),e;if(a===o)return Sl(i),t;a=a.sibling}throw Error(l(188))}if(n.return!==o.return)n=i,o=a;else{for(var d=!1,p=i.child;p;){if(p===n){d=!0,n=i,o=a;break}if(p===o){d=!0,o=i,n=a;break}p=p.sibling}if(!d){for(p=a.child;p;){if(p===n){d=!0,n=a,o=i;break}if(p===o){d=!0,o=a,n=i;break}p=p.sibling}if(!d)throw Error(l(189))}}if(n.alternate!==o)throw Error(l(190))}if(n.tag!==3)throw Error(l(188));return n.stateNode.current===n?e:t}function Cl(e){return e=hp(e),e!==null?Tl(e):null}function Tl(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Tl(e);if(t!==null)return t;e=e.sibling}return null}var El=c.unstable_scheduleCallback,Ll=c.unstable_cancelCallback,mp=c.unstable_shouldYield,fp=c.unstable_requestPaint,Me=c.unstable_now,xp=c.unstable_getCurrentPriorityLevel,Zs=c.unstable_ImmediatePriority,Il=c.unstable_UserBlockingPriority,xo=c.unstable_NormalPriority,gp=c.unstable_LowPriority,zl=c.unstable_IdlePriority,go=null,Bt=null;function vp(e){if(Bt&&typeof Bt.onCommitFiberRoot=="function")try{Bt.onCommitFiberRoot(go,e,void 0,(e.current.flags&128)===128)}catch{}}var kt=Math.clz32?Math.clz32:wp,yp=Math.log,jp=Math.LN2;function wp(e){return e>>>=0,e===0?32:31-(yp(e)/jp|0)|0}var vo=64,yo=4194304;function kn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function jo(e,t){var n=e.pendingLanes;if(n===0)return 0;var o=0,i=e.suspendedLanes,a=e.pingedLanes,d=n&268435455;if(d!==0){var p=d&~i;p!==0?o=kn(p):(a&=d,a!==0&&(o=kn(a)))}else d=n&~i,d!==0?o=kn(d):a!==0&&(o=kn(a));if(o===0)return 0;if(t!==0&&t!==o&&(t&i)===0&&(i=o&-o,a=t&-t,i>=a||i===16&&(a&4194240)!==0))return t;if((o&4)!==0&&(o|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=o;0<t;)n=31-kt(t),i=1<<n,o|=e[n],t&=~i;return o}function Np(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function bp(e,t){for(var n=e.suspendedLanes,o=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes;0<a;){var d=31-kt(a),p=1<<d,h=i[d];h===-1?((p&n)===0||(p&o)!==0)&&(i[d]=Np(p,t)):h<=t&&(e.expiredLanes|=p),a&=~p}}function ei(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function _l(){var e=vo;return vo<<=1,(vo&4194240)===0&&(vo=64),e}function ti(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Sn(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-kt(t),e[t]=n}function kp(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var o=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-kt(n),a=1<<i;t[i]=0,o[i]=-1,e[i]=-1,n&=~a}}function ri(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var o=31-kt(n),i=1<<o;i&t|e[o]&t&&(e[o]|=t),n&=~i}}var ge=0;function Ml(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var Pl,ni,Rl,Bl,Ol,oi=!1,wo=[],Zt=null,er=null,tr=null,Cn=new Map,Tn=new Map,rr=[],Sp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Al(e,t){switch(e){case"focusin":case"focusout":Zt=null;break;case"dragenter":case"dragleave":er=null;break;case"mouseover":case"mouseout":tr=null;break;case"pointerover":case"pointerout":Cn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Tn.delete(t.pointerId)}}function En(e,t,n,o,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:o,nativeEvent:a,targetContainers:[i]},t!==null&&(t=Wn(t),t!==null&&ni(t)),e):(e.eventSystemFlags|=o,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Cp(e,t,n,o,i){switch(t){case"focusin":return Zt=En(Zt,e,t,n,o,i),!0;case"dragenter":return er=En(er,e,t,n,o,i),!0;case"mouseover":return tr=En(tr,e,t,n,o,i),!0;case"pointerover":var a=i.pointerId;return Cn.set(a,En(Cn.get(a)||null,e,t,n,o,i)),!0;case"gotpointercapture":return a=i.pointerId,Tn.set(a,En(Tn.get(a)||null,e,t,n,o,i)),!0}return!1}function Dl(e){var t=Nr(e.target);if(t!==null){var n=wr(t);if(n!==null){if(t=n.tag,t===13){if(t=kl(n),t!==null){e.blockedOn=t,Ol(e.priority,function(){Rl(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function No(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=ii(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var o=new n.constructor(n.type,n);Qs=o,n.target.dispatchEvent(o),Qs=null}else return t=Wn(n),t!==null&&ni(t),e.blockedOn=n,!1;t.shift()}return!0}function Fl(e,t,n){No(e)&&n.delete(t)}function Tp(){oi=!1,Zt!==null&&No(Zt)&&(Zt=null),er!==null&&No(er)&&(er=null),tr!==null&&No(tr)&&(tr=null),Cn.forEach(Fl),Tn.forEach(Fl)}function Ln(e,t){e.blockedOn===t&&(e.blockedOn=null,oi||(oi=!0,c.unstable_scheduleCallback(c.unstable_NormalPriority,Tp)))}function In(e){function t(i){return Ln(i,e)}if(0<wo.length){Ln(wo[0],e);for(var n=1;n<wo.length;n++){var o=wo[n];o.blockedOn===e&&(o.blockedOn=null)}}for(Zt!==null&&Ln(Zt,e),er!==null&&Ln(er,e),tr!==null&&Ln(tr,e),Cn.forEach(t),Tn.forEach(t),n=0;n<rr.length;n++)o=rr[n],o.blockedOn===e&&(o.blockedOn=null);for(;0<rr.length&&(n=rr[0],n.blockedOn===null);)Dl(n),n.blockedOn===null&&rr.shift()}var Wr=I.ReactCurrentBatchConfig,bo=!0;function Ep(e,t,n,o){var i=ge,a=Wr.transition;Wr.transition=null;try{ge=1,si(e,t,n,o)}finally{ge=i,Wr.transition=a}}function Lp(e,t,n,o){var i=ge,a=Wr.transition;Wr.transition=null;try{ge=4,si(e,t,n,o)}finally{ge=i,Wr.transition=a}}function si(e,t,n,o){if(bo){var i=ii(e,t,n,o);if(i===null)bi(e,t,o,ko,n),Al(e,o);else if(Cp(i,e,t,n,o))o.stopPropagation();else if(Al(e,o),t&4&&-1<Sp.indexOf(e)){for(;i!==null;){var a=Wn(i);if(a!==null&&Pl(a),a=ii(e,t,n,o),a===null&&bi(e,t,o,ko,n),a===i)break;i=a}i!==null&&o.stopPropagation()}else bi(e,t,o,null,n)}}var ko=null;function ii(e,t,n,o){if(ko=null,e=Ks(o),e=Nr(e),e!==null)if(t=wr(e),t===null)e=null;else if(n=t.tag,n===13){if(e=kl(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return ko=e,null}function Hl(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(xp()){case Zs:return 1;case Il:return 4;case xo:case gp:return 16;case zl:return 536870912;default:return 16}default:return 16}}var nr=null,ai=null,So=null;function Wl(){if(So)return So;var e,t=ai,n=t.length,o,i="value"in nr?nr.value:nr.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var d=n-e;for(o=1;o<=d&&t[n-o]===i[a-o];o++);return So=i.slice(e,1<o?1-o:void 0)}function Co(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function To(){return!0}function Ul(){return!1}function dt(e){function t(n,o,i,a,d){this._reactName=n,this._targetInst=i,this.type=o,this.nativeEvent=a,this.target=d,this.currentTarget=null;for(var p in e)e.hasOwnProperty(p)&&(n=e[p],this[p]=n?n(a):a[p]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?To:Ul,this.isPropagationStopped=Ul,this}return M(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=To)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=To)},persist:function(){},isPersistent:To}),t}var Ur={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},li=dt(Ur),zn=M({},Ur,{view:0,detail:0}),Ip=dt(zn),ci,di,_n,Eo=M({},zn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:pi,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==_n&&(_n&&e.type==="mousemove"?(ci=e.screenX-_n.screenX,di=e.screenY-_n.screenY):di=ci=0,_n=e),ci)},movementY:function(e){return"movementY"in e?e.movementY:di}}),$l=dt(Eo),zp=M({},Eo,{dataTransfer:0}),_p=dt(zp),Mp=M({},zn,{relatedTarget:0}),ui=dt(Mp),Pp=M({},Ur,{animationName:0,elapsedTime:0,pseudoElement:0}),Rp=dt(Pp),Bp=M({},Ur,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Op=dt(Bp),Ap=M({},Ur,{data:0}),Vl=dt(Ap),Dp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Fp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Hp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Wp(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Hp[e])?!!t[e]:!1}function pi(){return Wp}var Up=M({},zn,{key:function(e){if(e.key){var t=Dp[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Co(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Fp[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:pi,charCode:function(e){return e.type==="keypress"?Co(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Co(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),$p=dt(Up),Vp=M({},Eo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Gl=dt(Vp),Gp=M({},zn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:pi}),Qp=dt(Gp),Kp=M({},Ur,{propertyName:0,elapsedTime:0,pseudoElement:0}),qp=dt(Kp),Yp=M({},Eo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Xp=dt(Yp),Jp=[9,13,27,32],hi=E&&"CompositionEvent"in window,Mn=null;E&&"documentMode"in document&&(Mn=document.documentMode);var Zp=E&&"TextEvent"in window&&!Mn,Ql=E&&(!hi||Mn&&8<Mn&&11>=Mn),Kl=" ",ql=!1;function Yl(e,t){switch(e){case"keyup":return Jp.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Xl(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var $r=!1;function eh(e,t){switch(e){case"compositionend":return Xl(t);case"keypress":return t.which!==32?null:(ql=!0,Kl);case"textInput":return e=t.data,e===Kl&&ql?null:e;default:return null}}function th(e,t){if($r)return e==="compositionend"||!hi&&Yl(e,t)?(e=Wl(),So=ai=nr=null,$r=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Ql&&t.locale!=="ko"?null:t.data;default:return null}}var rh={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Jl(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!rh[e.type]:t==="textarea"}function Zl(e,t,n,o){yl(o),t=Mo(t,"onChange"),0<t.length&&(n=new li("onChange","change",null,n,o),e.push({event:n,listeners:t}))}var Pn=null,Rn=null;function nh(e){gc(e,0)}function Lo(e){var t=qr(e);if(jr(t))return e}function oh(e,t){if(e==="change")return t}var ec=!1;if(E){var mi;if(E){var fi="oninput"in document;if(!fi){var tc=document.createElement("div");tc.setAttribute("oninput","return;"),fi=typeof tc.oninput=="function"}mi=fi}else mi=!1;ec=mi&&(!document.documentMode||9<document.documentMode)}function rc(){Pn&&(Pn.detachEvent("onpropertychange",nc),Rn=Pn=null)}function nc(e){if(e.propertyName==="value"&&Lo(Rn)){var t=[];Zl(t,Rn,e,Ks(e)),bl(nh,t)}}function sh(e,t,n){e==="focusin"?(rc(),Pn=t,Rn=n,Pn.attachEvent("onpropertychange",nc)):e==="focusout"&&rc()}function ih(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Lo(Rn)}function ah(e,t){if(e==="click")return Lo(t)}function lh(e,t){if(e==="input"||e==="change")return Lo(t)}function ch(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var St=typeof Object.is=="function"?Object.is:ch;function Bn(e,t){if(St(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),o=Object.keys(t);if(n.length!==o.length)return!1;for(o=0;o<n.length;o++){var i=n[o];if(!C.call(t,i)||!St(e[i],t[i]))return!1}return!0}function oc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function sc(e,t){var n=oc(e);e=0;for(var o;n;){if(n.nodeType===3){if(o=e+n.textContent.length,e<=t&&o>=t)return{node:n,offset:t-e};e=o}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=oc(n)}}function ic(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?ic(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function ac(){for(var e=window,t=bt();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=bt(e.document)}return t}function xi(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function dh(e){var t=ac(),n=e.focusedElem,o=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&ic(n.ownerDocument.documentElement,n)){if(o!==null&&xi(n)){if(t=o.start,e=o.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,a=Math.min(o.start,i);o=o.end===void 0?a:Math.min(o.end,i),!e.extend&&a>o&&(i=o,o=a,a=i),i=sc(n,a);var d=sc(n,o);i&&d&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==d.node||e.focusOffset!==d.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),a>o?(e.addRange(t),e.extend(d.node,d.offset)):(t.setEnd(d.node,d.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var uh=E&&"documentMode"in document&&11>=document.documentMode,Vr=null,gi=null,On=null,vi=!1;function lc(e,t,n){var o=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;vi||Vr==null||Vr!==bt(o)||(o=Vr,"selectionStart"in o&&xi(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),On&&Bn(On,o)||(On=o,o=Mo(gi,"onSelect"),0<o.length&&(t=new li("onSelect","select",null,t,n),e.push({event:t,listeners:o}),t.target=Vr)))}function Io(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Gr={animationend:Io("Animation","AnimationEnd"),animationiteration:Io("Animation","AnimationIteration"),animationstart:Io("Animation","AnimationStart"),transitionend:Io("Transition","TransitionEnd")},yi={},cc={};E&&(cc=document.createElement("div").style,"AnimationEvent"in window||(delete Gr.animationend.animation,delete Gr.animationiteration.animation,delete Gr.animationstart.animation),"TransitionEvent"in window||delete Gr.transitionend.transition);function zo(e){if(yi[e])return yi[e];if(!Gr[e])return e;var t=Gr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in cc)return yi[e]=t[n];return e}var dc=zo("animationend"),uc=zo("animationiteration"),pc=zo("animationstart"),hc=zo("transitionend"),mc=new Map,fc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function or(e,t){mc.set(e,t),g(t,[e])}for(var ji=0;ji<fc.length;ji++){var wi=fc[ji],ph=wi.toLowerCase(),hh=wi[0].toUpperCase()+wi.slice(1);or(ph,"on"+hh)}or(dc,"onAnimationEnd"),or(uc,"onAnimationIteration"),or(pc,"onAnimationStart"),or("dblclick","onDoubleClick"),or("focusin","onFocus"),or("focusout","onBlur"),or(hc,"onTransitionEnd"),w("onMouseEnter",["mouseout","mouseover"]),w("onMouseLeave",["mouseout","mouseover"]),w("onPointerEnter",["pointerout","pointerover"]),w("onPointerLeave",["pointerout","pointerover"]),g("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),g("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),g("onBeforeInput",["compositionend","keypress","textInput","paste"]),g("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),g("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),g("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var An="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),mh=new Set("cancel close invalid load scroll toggle".split(" ").concat(An));function xc(e,t,n){var o=e.type||"unknown-event";e.currentTarget=n,pp(o,t,void 0,e),e.currentTarget=null}function gc(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var o=e[n],i=o.event;o=o.listeners;e:{var a=void 0;if(t)for(var d=o.length-1;0<=d;d--){var p=o[d],h=p.instance,j=p.currentTarget;if(p=p.listener,h!==a&&i.isPropagationStopped())break e;xc(i,p,j),a=h}else for(d=0;d<o.length;d++){if(p=o[d],h=p.instance,j=p.currentTarget,p=p.listener,h!==a&&i.isPropagationStopped())break e;xc(i,p,j),a=h}}}if(fo)throw e=Js,fo=!1,Js=null,e}function Ne(e,t){var n=t[Li];n===void 0&&(n=t[Li]=new Set);var o=e+"__bubble";n.has(o)||(vc(t,e,2,!1),n.add(o))}function Ni(e,t,n){var o=0;t&&(o|=4),vc(n,e,o,t)}var _o="_reactListening"+Math.random().toString(36).slice(2);function Dn(e){if(!e[_o]){e[_o]=!0,u.forEach(function(n){n!=="selectionchange"&&(mh.has(n)||Ni(n,!1,e),Ni(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[_o]||(t[_o]=!0,Ni("selectionchange",!1,t))}}function vc(e,t,n,o){switch(Hl(t)){case 1:var i=Ep;break;case 4:i=Lp;break;default:i=si}n=i.bind(null,t,n,e),i=void 0,!Xs||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),o?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function bi(e,t,n,o,i){var a=o;if((t&1)===0&&(t&2)===0&&o!==null)e:for(;;){if(o===null)return;var d=o.tag;if(d===3||d===4){var p=o.stateNode.containerInfo;if(p===i||p.nodeType===8&&p.parentNode===i)break;if(d===4)for(d=o.return;d!==null;){var h=d.tag;if((h===3||h===4)&&(h=d.stateNode.containerInfo,h===i||h.nodeType===8&&h.parentNode===i))return;d=d.return}for(;p!==null;){if(d=Nr(p),d===null)return;if(h=d.tag,h===5||h===6){o=a=d;continue e}p=p.parentNode}}o=o.return}bl(function(){var j=a,k=Ks(n),S=[];e:{var b=mc.get(e);if(b!==void 0){var P=li,B=e;switch(e){case"keypress":if(Co(n)===0)break e;case"keydown":case"keyup":P=$p;break;case"focusin":B="focus",P=ui;break;case"focusout":B="blur",P=ui;break;case"beforeblur":case"afterblur":P=ui;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":P=$l;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":P=_p;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":P=Qp;break;case dc:case uc:case pc:P=Rp;break;case hc:P=qp;break;case"scroll":P=Ip;break;case"wheel":P=Xp;break;case"copy":case"cut":case"paste":P=Op;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":P=Gl}var D=(t&4)!==0,Pe=!D&&e==="scroll",v=D?b!==null?b+"Capture":null:b;D=[];for(var f=j,y;f!==null;){y=f;var T=y.stateNode;if(y.tag===5&&T!==null&&(y=T,v!==null&&(T=wn(f,v),T!=null&&D.push(Fn(f,T,y)))),Pe)break;f=f.return}0<D.length&&(b=new P(b,B,null,n,k),S.push({event:b,listeners:D}))}}if((t&7)===0){e:{if(b=e==="mouseover"||e==="pointerover",P=e==="mouseout"||e==="pointerout",b&&n!==Qs&&(B=n.relatedTarget||n.fromElement)&&(Nr(B)||B[Wt]))break e;if((P||b)&&(b=k.window===k?k:(b=k.ownerDocument)?b.defaultView||b.parentWindow:window,P?(B=n.relatedTarget||n.toElement,P=j,B=B?Nr(B):null,B!==null&&(Pe=wr(B),B!==Pe||B.tag!==5&&B.tag!==6)&&(B=null)):(P=null,B=j),P!==B)){if(D=$l,T="onMouseLeave",v="onMouseEnter",f="mouse",(e==="pointerout"||e==="pointerover")&&(D=Gl,T="onPointerLeave",v="onPointerEnter",f="pointer"),Pe=P==null?b:qr(P),y=B==null?b:qr(B),b=new D(T,f+"leave",P,n,k),b.target=Pe,b.relatedTarget=y,T=null,Nr(k)===j&&(D=new D(v,f+"enter",B,n,k),D.target=y,D.relatedTarget=Pe,T=D),Pe=T,P&&B)t:{for(D=P,v=B,f=0,y=D;y;y=Qr(y))f++;for(y=0,T=v;T;T=Qr(T))y++;for(;0<f-y;)D=Qr(D),f--;for(;0<y-f;)v=Qr(v),y--;for(;f--;){if(D===v||v!==null&&D===v.alternate)break t;D=Qr(D),v=Qr(v)}D=null}else D=null;P!==null&&yc(S,b,P,D,!1),B!==null&&Pe!==null&&yc(S,Pe,B,D,!0)}}e:{if(b=j?qr(j):window,P=b.nodeName&&b.nodeName.toLowerCase(),P==="select"||P==="input"&&b.type==="file")var W=oh;else if(Jl(b))if(ec)W=lh;else{W=ih;var q=sh}else(P=b.nodeName)&&P.toLowerCase()==="input"&&(b.type==="checkbox"||b.type==="radio")&&(W=ah);if(W&&(W=W(e,j))){Zl(S,W,n,k);break e}q&&q(e,b,j),e==="focusout"&&(q=b._wrapperState)&&q.controlled&&b.type==="number"&&Ws(b,"number",b.value)}switch(q=j?qr(j):window,e){case"focusin":(Jl(q)||q.contentEditable==="true")&&(Vr=q,gi=j,On=null);break;case"focusout":On=gi=Vr=null;break;case"mousedown":vi=!0;break;case"contextmenu":case"mouseup":case"dragend":vi=!1,lc(S,n,k);break;case"selectionchange":if(uh)break;case"keydown":case"keyup":lc(S,n,k)}var Y;if(hi)e:{switch(e){case"compositionstart":var X="onCompositionStart";break e;case"compositionend":X="onCompositionEnd";break e;case"compositionupdate":X="onCompositionUpdate";break e}X=void 0}else $r?Yl(e,n)&&(X="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(X="onCompositionStart");X&&(Ql&&n.locale!=="ko"&&($r||X!=="onCompositionStart"?X==="onCompositionEnd"&&$r&&(Y=Wl()):(nr=k,ai="value"in nr?nr.value:nr.textContent,$r=!0)),q=Mo(j,X),0<q.length&&(X=new Vl(X,e,null,n,k),S.push({event:X,listeners:q}),Y?X.data=Y:(Y=Xl(n),Y!==null&&(X.data=Y)))),(Y=Zp?eh(e,n):th(e,n))&&(j=Mo(j,"onBeforeInput"),0<j.length&&(k=new Vl("onBeforeInput","beforeinput",null,n,k),S.push({event:k,listeners:j}),k.data=Y))}gc(S,t)})}function Fn(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Mo(e,t){for(var n=t+"Capture",o=[];e!==null;){var i=e,a=i.stateNode;i.tag===5&&a!==null&&(i=a,a=wn(e,n),a!=null&&o.unshift(Fn(e,a,i)),a=wn(e,t),a!=null&&o.push(Fn(e,a,i))),e=e.return}return o}function Qr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function yc(e,t,n,o,i){for(var a=t._reactName,d=[];n!==null&&n!==o;){var p=n,h=p.alternate,j=p.stateNode;if(h!==null&&h===o)break;p.tag===5&&j!==null&&(p=j,i?(h=wn(n,a),h!=null&&d.unshift(Fn(n,h,p))):i||(h=wn(n,a),h!=null&&d.push(Fn(n,h,p)))),n=n.return}d.length!==0&&e.push({event:t,listeners:d})}var fh=/\r\n?/g,xh=/\u0000|\uFFFD/g;function jc(e){return(typeof e=="string"?e:""+e).replace(fh,`
`).replace(xh,"")}function Po(e,t,n){if(t=jc(t),jc(e)!==t&&n)throw Error(l(425))}function Ro(){}var ki=null,Si=null;function Ci(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ti=typeof setTimeout=="function"?setTimeout:void 0,gh=typeof clearTimeout=="function"?clearTimeout:void 0,wc=typeof Promise=="function"?Promise:void 0,vh=typeof queueMicrotask=="function"?queueMicrotask:typeof wc!="undefined"?function(e){return wc.resolve(null).then(e).catch(yh)}:Ti;function yh(e){setTimeout(function(){throw e})}function Ei(e,t){var n=t,o=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(o===0){e.removeChild(i),In(t);return}o--}else n!=="$"&&n!=="$?"&&n!=="$!"||o++;n=i}while(n);In(t)}function sr(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Nc(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Kr=Math.random().toString(36).slice(2),Ot="__reactFiber$"+Kr,Hn="__reactProps$"+Kr,Wt="__reactContainer$"+Kr,Li="__reactEvents$"+Kr,jh="__reactListeners$"+Kr,wh="__reactHandles$"+Kr;function Nr(e){var t=e[Ot];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Wt]||n[Ot]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Nc(e);e!==null;){if(n=e[Ot])return n;e=Nc(e)}return t}e=n,n=e.parentNode}return null}function Wn(e){return e=e[Ot]||e[Wt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function qr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(l(33))}function Bo(e){return e[Hn]||null}var Ii=[],Yr=-1;function ir(e){return{current:e}}function be(e){0>Yr||(e.current=Ii[Yr],Ii[Yr]=null,Yr--)}function we(e,t){Yr++,Ii[Yr]=e.current,e.current=t}var ar={},Ye=ir(ar),nt=ir(!1),br=ar;function Xr(e,t){var n=e.type.contextTypes;if(!n)return ar;var o=e.stateNode;if(o&&o.__reactInternalMemoizedUnmaskedChildContext===t)return o.__reactInternalMemoizedMaskedChildContext;var i={},a;for(a in n)i[a]=t[a];return o&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function ot(e){return e=e.childContextTypes,e!=null}function Oo(){be(nt),be(Ye)}function bc(e,t,n){if(Ye.current!==ar)throw Error(l(168));we(Ye,t),we(nt,n)}function kc(e,t,n){var o=e.stateNode;if(t=t.childContextTypes,typeof o.getChildContext!="function")return n;o=o.getChildContext();for(var i in o)if(!(i in t))throw Error(l(108,pe(e)||"Unknown",i));return M({},n,o)}function Ao(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||ar,br=Ye.current,we(Ye,e),we(nt,nt.current),!0}function Sc(e,t,n){var o=e.stateNode;if(!o)throw Error(l(169));n?(e=kc(e,t,br),o.__reactInternalMemoizedMergedChildContext=e,be(nt),be(Ye),we(Ye,e)):be(nt),we(nt,n)}var Ut=null,Do=!1,zi=!1;function Cc(e){Ut===null?Ut=[e]:Ut.push(e)}function Nh(e){Do=!0,Cc(e)}function lr(){if(!zi&&Ut!==null){zi=!0;var e=0,t=ge;try{var n=Ut;for(ge=1;e<n.length;e++){var o=n[e];do o=o(!0);while(o!==null)}Ut=null,Do=!1}catch(i){throw Ut!==null&&(Ut=Ut.slice(e+1)),El(Zs,lr),i}finally{ge=t,zi=!1}}return null}var Jr=[],Zr=0,Fo=null,Ho=0,ft=[],xt=0,kr=null,$t=1,Vt="";function Sr(e,t){Jr[Zr++]=Ho,Jr[Zr++]=Fo,Fo=e,Ho=t}function Tc(e,t,n){ft[xt++]=$t,ft[xt++]=Vt,ft[xt++]=kr,kr=e;var o=$t;e=Vt;var i=32-kt(o)-1;o&=~(1<<i),n+=1;var a=32-kt(t)+i;if(30<a){var d=i-i%5;a=(o&(1<<d)-1).toString(32),o>>=d,i-=d,$t=1<<32-kt(t)+i|n<<i|o,Vt=a+e}else $t=1<<a|n<<i|o,Vt=e}function _i(e){e.return!==null&&(Sr(e,1),Tc(e,1,0))}function Mi(e){for(;e===Fo;)Fo=Jr[--Zr],Jr[Zr]=null,Ho=Jr[--Zr],Jr[Zr]=null;for(;e===kr;)kr=ft[--xt],ft[xt]=null,Vt=ft[--xt],ft[xt]=null,$t=ft[--xt],ft[xt]=null}var ut=null,pt=null,Ce=!1,Ct=null;function Ec(e,t){var n=jt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Lc(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ut=e,pt=sr(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ut=e,pt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=kr!==null?{id:$t,overflow:Vt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=jt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,ut=e,pt=null,!0):!1;default:return!1}}function Pi(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ri(e){if(Ce){var t=pt;if(t){var n=t;if(!Lc(e,t)){if(Pi(e))throw Error(l(418));t=sr(n.nextSibling);var o=ut;t&&Lc(e,t)?Ec(o,n):(e.flags=e.flags&-4097|2,Ce=!1,ut=e)}}else{if(Pi(e))throw Error(l(418));e.flags=e.flags&-4097|2,Ce=!1,ut=e}}}function Ic(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ut=e}function Wo(e){if(e!==ut)return!1;if(!Ce)return Ic(e),Ce=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Ci(e.type,e.memoizedProps)),t&&(t=pt)){if(Pi(e))throw zc(),Error(l(418));for(;t;)Ec(e,t),t=sr(t.nextSibling)}if(Ic(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(l(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){pt=sr(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}pt=null}}else pt=ut?sr(e.stateNode.nextSibling):null;return!0}function zc(){for(var e=pt;e;)e=sr(e.nextSibling)}function en(){pt=ut=null,Ce=!1}function Bi(e){Ct===null?Ct=[e]:Ct.push(e)}var bh=I.ReactCurrentBatchConfig;function Un(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(l(309));var o=n.stateNode}if(!o)throw Error(l(147,e));var i=o,a=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===a?t.ref:(t=function(d){var p=i.refs;d===null?delete p[a]:p[a]=d},t._stringRef=a,t)}if(typeof e!="string")throw Error(l(284));if(!n._owner)throw Error(l(290,e))}return e}function Uo(e,t){throw e=Object.prototype.toString.call(t),Error(l(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function _c(e){var t=e._init;return t(e._payload)}function Mc(e){function t(v,f){if(e){var y=v.deletions;y===null?(v.deletions=[f],v.flags|=16):y.push(f)}}function n(v,f){if(!e)return null;for(;f!==null;)t(v,f),f=f.sibling;return null}function o(v,f){for(v=new Map;f!==null;)f.key!==null?v.set(f.key,f):v.set(f.index,f),f=f.sibling;return v}function i(v,f){return v=xr(v,f),v.index=0,v.sibling=null,v}function a(v,f,y){return v.index=y,e?(y=v.alternate,y!==null?(y=y.index,y<f?(v.flags|=2,f):y):(v.flags|=2,f)):(v.flags|=1048576,f)}function d(v){return e&&v.alternate===null&&(v.flags|=2),v}function p(v,f,y,T){return f===null||f.tag!==6?(f=Ta(y,v.mode,T),f.return=v,f):(f=i(f,y),f.return=v,f)}function h(v,f,y,T){var W=y.type;return W===z?k(v,f,y.props.children,T,y.key):f!==null&&(f.elementType===W||typeof W=="object"&&W!==null&&W.$$typeof===qe&&_c(W)===f.type)?(T=i(f,y.props),T.ref=Un(v,f,y),T.return=v,T):(T=hs(y.type,y.key,y.props,null,v.mode,T),T.ref=Un(v,f,y),T.return=v,T)}function j(v,f,y,T){return f===null||f.tag!==4||f.stateNode.containerInfo!==y.containerInfo||f.stateNode.implementation!==y.implementation?(f=Ea(y,v.mode,T),f.return=v,f):(f=i(f,y.children||[]),f.return=v,f)}function k(v,f,y,T,W){return f===null||f.tag!==7?(f=Mr(y,v.mode,T,W),f.return=v,f):(f=i(f,y),f.return=v,f)}function S(v,f,y){if(typeof f=="string"&&f!==""||typeof f=="number")return f=Ta(""+f,v.mode,y),f.return=v,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Z:return y=hs(f.type,f.key,f.props,null,v.mode,y),y.ref=Un(v,null,f),y.return=v,y;case Q:return f=Ea(f,v.mode,y),f.return=v,f;case qe:var T=f._init;return S(v,T(f._payload),y)}if(vn(f)||U(f))return f=Mr(f,v.mode,y,null),f.return=v,f;Uo(v,f)}return null}function b(v,f,y,T){var W=f!==null?f.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return W!==null?null:p(v,f,""+y,T);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Z:return y.key===W?h(v,f,y,T):null;case Q:return y.key===W?j(v,f,y,T):null;case qe:return W=y._init,b(v,f,W(y._payload),T)}if(vn(y)||U(y))return W!==null?null:k(v,f,y,T,null);Uo(v,y)}return null}function P(v,f,y,T,W){if(typeof T=="string"&&T!==""||typeof T=="number")return v=v.get(y)||null,p(f,v,""+T,W);if(typeof T=="object"&&T!==null){switch(T.$$typeof){case Z:return v=v.get(T.key===null?y:T.key)||null,h(f,v,T,W);case Q:return v=v.get(T.key===null?y:T.key)||null,j(f,v,T,W);case qe:var q=T._init;return P(v,f,y,q(T._payload),W)}if(vn(T)||U(T))return v=v.get(y)||null,k(f,v,T,W,null);Uo(f,T)}return null}function B(v,f,y,T){for(var W=null,q=null,Y=f,X=f=0,We=null;Y!==null&&X<y.length;X++){Y.index>X?(We=Y,Y=null):We=Y.sibling;var me=b(v,Y,y[X],T);if(me===null){Y===null&&(Y=We);break}e&&Y&&me.alternate===null&&t(v,Y),f=a(me,f,X),q===null?W=me:q.sibling=me,q=me,Y=We}if(X===y.length)return n(v,Y),Ce&&Sr(v,X),W;if(Y===null){for(;X<y.length;X++)Y=S(v,y[X],T),Y!==null&&(f=a(Y,f,X),q===null?W=Y:q.sibling=Y,q=Y);return Ce&&Sr(v,X),W}for(Y=o(v,Y);X<y.length;X++)We=P(Y,v,X,y[X],T),We!==null&&(e&&We.alternate!==null&&Y.delete(We.key===null?X:We.key),f=a(We,f,X),q===null?W=We:q.sibling=We,q=We);return e&&Y.forEach(function(gr){return t(v,gr)}),Ce&&Sr(v,X),W}function D(v,f,y,T){var W=U(y);if(typeof W!="function")throw Error(l(150));if(y=W.call(y),y==null)throw Error(l(151));for(var q=W=null,Y=f,X=f=0,We=null,me=y.next();Y!==null&&!me.done;X++,me=y.next()){Y.index>X?(We=Y,Y=null):We=Y.sibling;var gr=b(v,Y,me.value,T);if(gr===null){Y===null&&(Y=We);break}e&&Y&&gr.alternate===null&&t(v,Y),f=a(gr,f,X),q===null?W=gr:q.sibling=gr,q=gr,Y=We}if(me.done)return n(v,Y),Ce&&Sr(v,X),W;if(Y===null){for(;!me.done;X++,me=y.next())me=S(v,me.value,T),me!==null&&(f=a(me,f,X),q===null?W=me:q.sibling=me,q=me);return Ce&&Sr(v,X),W}for(Y=o(v,Y);!me.done;X++,me=y.next())me=P(Y,v,X,me.value,T),me!==null&&(e&&me.alternate!==null&&Y.delete(me.key===null?X:me.key),f=a(me,f,X),q===null?W=me:q.sibling=me,q=me);return e&&Y.forEach(function(rm){return t(v,rm)}),Ce&&Sr(v,X),W}function Pe(v,f,y,T){if(typeof y=="object"&&y!==null&&y.type===z&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case Z:e:{for(var W=y.key,q=f;q!==null;){if(q.key===W){if(W=y.type,W===z){if(q.tag===7){n(v,q.sibling),f=i(q,y.props.children),f.return=v,v=f;break e}}else if(q.elementType===W||typeof W=="object"&&W!==null&&W.$$typeof===qe&&_c(W)===q.type){n(v,q.sibling),f=i(q,y.props),f.ref=Un(v,q,y),f.return=v,v=f;break e}n(v,q);break}else t(v,q);q=q.sibling}y.type===z?(f=Mr(y.props.children,v.mode,T,y.key),f.return=v,v=f):(T=hs(y.type,y.key,y.props,null,v.mode,T),T.ref=Un(v,f,y),T.return=v,v=T)}return d(v);case Q:e:{for(q=y.key;f!==null;){if(f.key===q)if(f.tag===4&&f.stateNode.containerInfo===y.containerInfo&&f.stateNode.implementation===y.implementation){n(v,f.sibling),f=i(f,y.children||[]),f.return=v,v=f;break e}else{n(v,f);break}else t(v,f);f=f.sibling}f=Ea(y,v.mode,T),f.return=v,v=f}return d(v);case qe:return q=y._init,Pe(v,f,q(y._payload),T)}if(vn(y))return B(v,f,y,T);if(U(y))return D(v,f,y,T);Uo(v,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,f!==null&&f.tag===6?(n(v,f.sibling),f=i(f,y),f.return=v,v=f):(n(v,f),f=Ta(y,v.mode,T),f.return=v,v=f),d(v)):n(v,f)}return Pe}var tn=Mc(!0),Pc=Mc(!1),$o=ir(null),Vo=null,rn=null,Oi=null;function Ai(){Oi=rn=Vo=null}function Di(e){var t=$o.current;be($o),e._currentValue=t}function Fi(e,t,n){for(;e!==null;){var o=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,o!==null&&(o.childLanes|=t)):o!==null&&(o.childLanes&t)!==t&&(o.childLanes|=t),e===n)break;e=e.return}}function nn(e,t){Vo=e,Oi=rn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(st=!0),e.firstContext=null)}function gt(e){var t=e._currentValue;if(Oi!==e)if(e={context:e,memoizedValue:t,next:null},rn===null){if(Vo===null)throw Error(l(308));rn=e,Vo.dependencies={lanes:0,firstContext:e}}else rn=rn.next=e;return t}var Cr=null;function Hi(e){Cr===null?Cr=[e]:Cr.push(e)}function Rc(e,t,n,o){var i=t.interleaved;return i===null?(n.next=n,Hi(t)):(n.next=i.next,i.next=n),t.interleaved=n,Gt(e,o)}function Gt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var cr=!1;function Wi(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Bc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Qt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function dr(e,t,n){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(he&2)!==0){var i=o.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),o.pending=t,Gt(e,n)}return i=o.interleaved,i===null?(t.next=t,Hi(o)):(t.next=i.next,i.next=t),o.interleaved=t,Gt(e,n)}function Go(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var o=t.lanes;o&=e.pendingLanes,n|=o,t.lanes=n,ri(e,n)}}function Oc(e,t){var n=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,n===o)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var d={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};a===null?i=a=d:a=a.next=d,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:o.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:o.shared,effects:o.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Qo(e,t,n,o){var i=e.updateQueue;cr=!1;var a=i.firstBaseUpdate,d=i.lastBaseUpdate,p=i.shared.pending;if(p!==null){i.shared.pending=null;var h=p,j=h.next;h.next=null,d===null?a=j:d.next=j,d=h;var k=e.alternate;k!==null&&(k=k.updateQueue,p=k.lastBaseUpdate,p!==d&&(p===null?k.firstBaseUpdate=j:p.next=j,k.lastBaseUpdate=h))}if(a!==null){var S=i.baseState;d=0,k=j=h=null,p=a;do{var b=p.lane,P=p.eventTime;if((o&b)===b){k!==null&&(k=k.next={eventTime:P,lane:0,tag:p.tag,payload:p.payload,callback:p.callback,next:null});e:{var B=e,D=p;switch(b=t,P=n,D.tag){case 1:if(B=D.payload,typeof B=="function"){S=B.call(P,S,b);break e}S=B;break e;case 3:B.flags=B.flags&-65537|128;case 0:if(B=D.payload,b=typeof B=="function"?B.call(P,S,b):B,b==null)break e;S=M({},S,b);break e;case 2:cr=!0}}p.callback!==null&&p.lane!==0&&(e.flags|=64,b=i.effects,b===null?i.effects=[p]:b.push(p))}else P={eventTime:P,lane:b,tag:p.tag,payload:p.payload,callback:p.callback,next:null},k===null?(j=k=P,h=S):k=k.next=P,d|=b;if(p=p.next,p===null){if(p=i.shared.pending,p===null)break;b=p,p=b.next,b.next=null,i.lastBaseUpdate=b,i.shared.pending=null}}while(!0);if(k===null&&(h=S),i.baseState=h,i.firstBaseUpdate=j,i.lastBaseUpdate=k,t=i.shared.interleaved,t!==null){i=t;do d|=i.lane,i=i.next;while(i!==t)}else a===null&&(i.shared.lanes=0);Lr|=d,e.lanes=d,e.memoizedState=S}}function Ac(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var o=e[t],i=o.callback;if(i!==null){if(o.callback=null,o=n,typeof i!="function")throw Error(l(191,i));i.call(o)}}}var $n={},At=ir($n),Vn=ir($n),Gn=ir($n);function Tr(e){if(e===$n)throw Error(l(174));return e}function Ui(e,t){switch(we(Gn,t),we(Vn,e),we(At,$n),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:$s(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=$s(t,e)}be(At),we(At,t)}function on(){be(At),be(Vn),be(Gn)}function Dc(e){Tr(Gn.current);var t=Tr(At.current),n=$s(t,e.type);t!==n&&(we(Vn,e),we(At,n))}function $i(e){Vn.current===e&&(be(At),be(Vn))}var Ee=ir(0);function Ko(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Vi=[];function Gi(){for(var e=0;e<Vi.length;e++)Vi[e]._workInProgressVersionPrimary=null;Vi.length=0}var qo=I.ReactCurrentDispatcher,Qi=I.ReactCurrentBatchConfig,Er=0,Le=null,Oe=null,Fe=null,Yo=!1,Qn=!1,Kn=0,kh=0;function Xe(){throw Error(l(321))}function Ki(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!St(e[n],t[n]))return!1;return!0}function qi(e,t,n,o,i,a){if(Er=a,Le=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,qo.current=e===null||e.memoizedState===null?Eh:Lh,e=n(o,i),Qn){a=0;do{if(Qn=!1,Kn=0,25<=a)throw Error(l(301));a+=1,Fe=Oe=null,t.updateQueue=null,qo.current=Ih,e=n(o,i)}while(Qn)}if(qo.current=Zo,t=Oe!==null&&Oe.next!==null,Er=0,Fe=Oe=Le=null,Yo=!1,t)throw Error(l(300));return e}function Yi(){var e=Kn!==0;return Kn=0,e}function Dt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Fe===null?Le.memoizedState=Fe=e:Fe=Fe.next=e,Fe}function vt(){if(Oe===null){var e=Le.alternate;e=e!==null?e.memoizedState:null}else e=Oe.next;var t=Fe===null?Le.memoizedState:Fe.next;if(t!==null)Fe=t,Oe=e;else{if(e===null)throw Error(l(310));Oe=e,e={memoizedState:Oe.memoizedState,baseState:Oe.baseState,baseQueue:Oe.baseQueue,queue:Oe.queue,next:null},Fe===null?Le.memoizedState=Fe=e:Fe=Fe.next=e}return Fe}function qn(e,t){return typeof t=="function"?t(e):t}function Xi(e){var t=vt(),n=t.queue;if(n===null)throw Error(l(311));n.lastRenderedReducer=e;var o=Oe,i=o.baseQueue,a=n.pending;if(a!==null){if(i!==null){var d=i.next;i.next=a.next,a.next=d}o.baseQueue=i=a,n.pending=null}if(i!==null){a=i.next,o=o.baseState;var p=d=null,h=null,j=a;do{var k=j.lane;if((Er&k)===k)h!==null&&(h=h.next={lane:0,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null}),o=j.hasEagerState?j.eagerState:e(o,j.action);else{var S={lane:k,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null};h===null?(p=h=S,d=o):h=h.next=S,Le.lanes|=k,Lr|=k}j=j.next}while(j!==null&&j!==a);h===null?d=o:h.next=p,St(o,t.memoizedState)||(st=!0),t.memoizedState=o,t.baseState=d,t.baseQueue=h,n.lastRenderedState=o}if(e=n.interleaved,e!==null){i=e;do a=i.lane,Le.lanes|=a,Lr|=a,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Ji(e){var t=vt(),n=t.queue;if(n===null)throw Error(l(311));n.lastRenderedReducer=e;var o=n.dispatch,i=n.pending,a=t.memoizedState;if(i!==null){n.pending=null;var d=i=i.next;do a=e(a,d.action),d=d.next;while(d!==i);St(a,t.memoizedState)||(st=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),n.lastRenderedState=a}return[a,o]}function Fc(){}function Hc(e,t){var n=Le,o=vt(),i=t(),a=!St(o.memoizedState,i);if(a&&(o.memoizedState=i,st=!0),o=o.queue,Zi($c.bind(null,n,o,e),[e]),o.getSnapshot!==t||a||Fe!==null&&Fe.memoizedState.tag&1){if(n.flags|=2048,Yn(9,Uc.bind(null,n,o,i,t),void 0,null),He===null)throw Error(l(349));(Er&30)!==0||Wc(n,t,i)}return i}function Wc(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Le.updateQueue,t===null?(t={lastEffect:null,stores:null},Le.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Uc(e,t,n,o){t.value=n,t.getSnapshot=o,Vc(t)&&Gc(e)}function $c(e,t,n){return n(function(){Vc(t)&&Gc(e)})}function Vc(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!St(e,n)}catch{return!0}}function Gc(e){var t=Gt(e,1);t!==null&&It(t,e,1,-1)}function Qc(e){var t=Dt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:qn,lastRenderedState:e},t.queue=e,e=e.dispatch=Th.bind(null,Le,e),[t.memoizedState,e]}function Yn(e,t,n,o){return e={tag:e,create:t,destroy:n,deps:o,next:null},t=Le.updateQueue,t===null?(t={lastEffect:null,stores:null},Le.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(o=n.next,n.next=e,e.next=o,t.lastEffect=e)),e}function Kc(){return vt().memoizedState}function Xo(e,t,n,o){var i=Dt();Le.flags|=e,i.memoizedState=Yn(1|t,n,void 0,o===void 0?null:o)}function Jo(e,t,n,o){var i=vt();o=o===void 0?null:o;var a=void 0;if(Oe!==null){var d=Oe.memoizedState;if(a=d.destroy,o!==null&&Ki(o,d.deps)){i.memoizedState=Yn(t,n,a,o);return}}Le.flags|=e,i.memoizedState=Yn(1|t,n,a,o)}function qc(e,t){return Xo(8390656,8,e,t)}function Zi(e,t){return Jo(2048,8,e,t)}function Yc(e,t){return Jo(4,2,e,t)}function Xc(e,t){return Jo(4,4,e,t)}function Jc(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Zc(e,t,n){return n=n!=null?n.concat([e]):null,Jo(4,4,Jc.bind(null,t,e),n)}function ea(){}function ed(e,t){var n=vt();t=t===void 0?null:t;var o=n.memoizedState;return o!==null&&t!==null&&Ki(t,o[1])?o[0]:(n.memoizedState=[e,t],e)}function td(e,t){var n=vt();t=t===void 0?null:t;var o=n.memoizedState;return o!==null&&t!==null&&Ki(t,o[1])?o[0]:(e=e(),n.memoizedState=[e,t],e)}function rd(e,t,n){return(Er&21)===0?(e.baseState&&(e.baseState=!1,st=!0),e.memoizedState=n):(St(n,t)||(n=_l(),Le.lanes|=n,Lr|=n,e.baseState=!0),t)}function Sh(e,t){var n=ge;ge=n!==0&&4>n?n:4,e(!0);var o=Qi.transition;Qi.transition={};try{e(!1),t()}finally{ge=n,Qi.transition=o}}function nd(){return vt().memoizedState}function Ch(e,t,n){var o=mr(e);if(n={lane:o,action:n,hasEagerState:!1,eagerState:null,next:null},od(e))sd(t,n);else if(n=Rc(e,t,n,o),n!==null){var i=rt();It(n,e,o,i),id(n,t,o)}}function Th(e,t,n){var o=mr(e),i={lane:o,action:n,hasEagerState:!1,eagerState:null,next:null};if(od(e))sd(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var d=t.lastRenderedState,p=a(d,n);if(i.hasEagerState=!0,i.eagerState=p,St(p,d)){var h=t.interleaved;h===null?(i.next=i,Hi(t)):(i.next=h.next,h.next=i),t.interleaved=i;return}}catch{}finally{}n=Rc(e,t,i,o),n!==null&&(i=rt(),It(n,e,o,i),id(n,t,o))}}function od(e){var t=e.alternate;return e===Le||t!==null&&t===Le}function sd(e,t){Qn=Yo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function id(e,t,n){if((n&4194240)!==0){var o=t.lanes;o&=e.pendingLanes,n|=o,t.lanes=n,ri(e,n)}}var Zo={readContext:gt,useCallback:Xe,useContext:Xe,useEffect:Xe,useImperativeHandle:Xe,useInsertionEffect:Xe,useLayoutEffect:Xe,useMemo:Xe,useReducer:Xe,useRef:Xe,useState:Xe,useDebugValue:Xe,useDeferredValue:Xe,useTransition:Xe,useMutableSource:Xe,useSyncExternalStore:Xe,useId:Xe,unstable_isNewReconciler:!1},Eh={readContext:gt,useCallback:function(e,t){return Dt().memoizedState=[e,t===void 0?null:t],e},useContext:gt,useEffect:qc,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Xo(4194308,4,Jc.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Xo(4194308,4,e,t)},useInsertionEffect:function(e,t){return Xo(4,2,e,t)},useMemo:function(e,t){var n=Dt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var o=Dt();return t=n!==void 0?n(t):t,o.memoizedState=o.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},o.queue=e,e=e.dispatch=Ch.bind(null,Le,e),[o.memoizedState,e]},useRef:function(e){var t=Dt();return e={current:e},t.memoizedState=e},useState:Qc,useDebugValue:ea,useDeferredValue:function(e){return Dt().memoizedState=e},useTransition:function(){var e=Qc(!1),t=e[0];return e=Sh.bind(null,e[1]),Dt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var o=Le,i=Dt();if(Ce){if(n===void 0)throw Error(l(407));n=n()}else{if(n=t(),He===null)throw Error(l(349));(Er&30)!==0||Wc(o,t,n)}i.memoizedState=n;var a={value:n,getSnapshot:t};return i.queue=a,qc($c.bind(null,o,a,e),[e]),o.flags|=2048,Yn(9,Uc.bind(null,o,a,n,t),void 0,null),n},useId:function(){var e=Dt(),t=He.identifierPrefix;if(Ce){var n=Vt,o=$t;n=(o&~(1<<32-kt(o)-1)).toString(32)+n,t=":"+t+"R"+n,n=Kn++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=kh++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Lh={readContext:gt,useCallback:ed,useContext:gt,useEffect:Zi,useImperativeHandle:Zc,useInsertionEffect:Yc,useLayoutEffect:Xc,useMemo:td,useReducer:Xi,useRef:Kc,useState:function(){return Xi(qn)},useDebugValue:ea,useDeferredValue:function(e){var t=vt();return rd(t,Oe.memoizedState,e)},useTransition:function(){var e=Xi(qn)[0],t=vt().memoizedState;return[e,t]},useMutableSource:Fc,useSyncExternalStore:Hc,useId:nd,unstable_isNewReconciler:!1},Ih={readContext:gt,useCallback:ed,useContext:gt,useEffect:Zi,useImperativeHandle:Zc,useInsertionEffect:Yc,useLayoutEffect:Xc,useMemo:td,useReducer:Ji,useRef:Kc,useState:function(){return Ji(qn)},useDebugValue:ea,useDeferredValue:function(e){var t=vt();return Oe===null?t.memoizedState=e:rd(t,Oe.memoizedState,e)},useTransition:function(){var e=Ji(qn)[0],t=vt().memoizedState;return[e,t]},useMutableSource:Fc,useSyncExternalStore:Hc,useId:nd,unstable_isNewReconciler:!1};function Tt(e,t){if(e&&e.defaultProps){t=M({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function ta(e,t,n,o){t=e.memoizedState,n=n(o,t),n=n==null?t:M({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var es={isMounted:function(e){return(e=e._reactInternals)?wr(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var o=rt(),i=mr(e),a=Qt(o,i);a.payload=t,n!=null&&(a.callback=n),t=dr(e,a,i),t!==null&&(It(t,e,i,o),Go(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var o=rt(),i=mr(e),a=Qt(o,i);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=dr(e,a,i),t!==null&&(It(t,e,i,o),Go(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=rt(),o=mr(e),i=Qt(n,o);i.tag=2,t!=null&&(i.callback=t),t=dr(e,i,o),t!==null&&(It(t,e,o,n),Go(t,e,o))}};function ad(e,t,n,o,i,a,d){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,a,d):t.prototype&&t.prototype.isPureReactComponent?!Bn(n,o)||!Bn(i,a):!0}function ld(e,t,n){var o=!1,i=ar,a=t.contextType;return typeof a=="object"&&a!==null?a=gt(a):(i=ot(t)?br:Ye.current,o=t.contextTypes,a=(o=o!=null)?Xr(e,i):ar),t=new t(n,a),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=es,e.stateNode=t,t._reactInternals=e,o&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=a),t}function cd(e,t,n,o){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,o),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,o),t.state!==e&&es.enqueueReplaceState(t,t.state,null)}function ra(e,t,n,o){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},Wi(e);var a=t.contextType;typeof a=="object"&&a!==null?i.context=gt(a):(a=ot(t)?br:Ye.current,i.context=Xr(e,a)),i.state=e.memoizedState,a=t.getDerivedStateFromProps,typeof a=="function"&&(ta(e,t,a,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&es.enqueueReplaceState(i,i.state,null),Qo(e,n,i,o),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function sn(e,t){try{var n="",o=t;do n+=ce(o),o=o.return;while(o);var i=n}catch(a){i=`
Error generating stack: `+a.message+`
`+a.stack}return{value:e,source:t,stack:i,digest:null}}function na(e,t,n){return{value:e,source:null,stack:n!=null?n:null,digest:t!=null?t:null}}function oa(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var zh=typeof WeakMap=="function"?WeakMap:Map;function dd(e,t,n){n=Qt(-1,n),n.tag=3,n.payload={element:null};var o=t.value;return n.callback=function(){as||(as=!0,ya=o),oa(e,t)},n}function ud(e,t,n){n=Qt(-1,n),n.tag=3;var o=e.type.getDerivedStateFromError;if(typeof o=="function"){var i=t.value;n.payload=function(){return o(i)},n.callback=function(){oa(e,t)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(n.callback=function(){oa(e,t),typeof o!="function"&&(pr===null?pr=new Set([this]):pr.add(this));var d=t.stack;this.componentDidCatch(t.value,{componentStack:d!==null?d:""})}),n}function pd(e,t,n){var o=e.pingCache;if(o===null){o=e.pingCache=new zh;var i=new Set;o.set(t,i)}else i=o.get(t),i===void 0&&(i=new Set,o.set(t,i));i.has(n)||(i.add(n),e=Vh.bind(null,e,t,n),t.then(e,e))}function hd(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function md(e,t,n,o,i){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Qt(-1,1),t.tag=2,dr(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=i,e)}var _h=I.ReactCurrentOwner,st=!1;function tt(e,t,n,o){t.child=e===null?Pc(t,null,n,o):tn(t,e.child,n,o)}function fd(e,t,n,o,i){n=n.render;var a=t.ref;return nn(t,i),o=qi(e,t,n,o,a,i),n=Yi(),e!==null&&!st?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Kt(e,t,i)):(Ce&&n&&_i(t),t.flags|=1,tt(e,t,o,i),t.child)}function xd(e,t,n,o,i){if(e===null){var a=n.type;return typeof a=="function"&&!Ca(a)&&a.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=a,gd(e,t,a,o,i)):(e=hs(n.type,null,o,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,(e.lanes&i)===0){var d=a.memoizedProps;if(n=n.compare,n=n!==null?n:Bn,n(d,o)&&e.ref===t.ref)return Kt(e,t,i)}return t.flags|=1,e=xr(a,o),e.ref=t.ref,e.return=t,t.child=e}function gd(e,t,n,o,i){if(e!==null){var a=e.memoizedProps;if(Bn(a,o)&&e.ref===t.ref)if(st=!1,t.pendingProps=o=a,(e.lanes&i)!==0)(e.flags&131072)!==0&&(st=!0);else return t.lanes=e.lanes,Kt(e,t,i)}return sa(e,t,n,o,i)}function vd(e,t,n){var o=t.pendingProps,i=o.children,a=e!==null?e.memoizedState:null;if(o.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},we(ln,ht),ht|=n;else{if((n&1073741824)===0)return e=a!==null?a.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,we(ln,ht),ht|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},o=a!==null?a.baseLanes:n,we(ln,ht),ht|=o}else a!==null?(o=a.baseLanes|n,t.memoizedState=null):o=n,we(ln,ht),ht|=o;return tt(e,t,i,n),t.child}function yd(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function sa(e,t,n,o,i){var a=ot(n)?br:Ye.current;return a=Xr(t,a),nn(t,i),n=qi(e,t,n,o,a,i),o=Yi(),e!==null&&!st?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Kt(e,t,i)):(Ce&&o&&_i(t),t.flags|=1,tt(e,t,n,i),t.child)}function jd(e,t,n,o,i){if(ot(n)){var a=!0;Ao(t)}else a=!1;if(nn(t,i),t.stateNode===null)rs(e,t),ld(t,n,o),ra(t,n,o,i),o=!0;else if(e===null){var d=t.stateNode,p=t.memoizedProps;d.props=p;var h=d.context,j=n.contextType;typeof j=="object"&&j!==null?j=gt(j):(j=ot(n)?br:Ye.current,j=Xr(t,j));var k=n.getDerivedStateFromProps,S=typeof k=="function"||typeof d.getSnapshotBeforeUpdate=="function";S||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(p!==o||h!==j)&&cd(t,d,o,j),cr=!1;var b=t.memoizedState;d.state=b,Qo(t,o,d,i),h=t.memoizedState,p!==o||b!==h||nt.current||cr?(typeof k=="function"&&(ta(t,n,k,o),h=t.memoizedState),(p=cr||ad(t,n,p,o,b,h,j))?(S||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(t.flags|=4194308)):(typeof d.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=o,t.memoizedState=h),d.props=o,d.state=h,d.context=j,o=p):(typeof d.componentDidMount=="function"&&(t.flags|=4194308),o=!1)}else{d=t.stateNode,Bc(e,t),p=t.memoizedProps,j=t.type===t.elementType?p:Tt(t.type,p),d.props=j,S=t.pendingProps,b=d.context,h=n.contextType,typeof h=="object"&&h!==null?h=gt(h):(h=ot(n)?br:Ye.current,h=Xr(t,h));var P=n.getDerivedStateFromProps;(k=typeof P=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(p!==S||b!==h)&&cd(t,d,o,h),cr=!1,b=t.memoizedState,d.state=b,Qo(t,o,d,i);var B=t.memoizedState;p!==S||b!==B||nt.current||cr?(typeof P=="function"&&(ta(t,n,P,o),B=t.memoizedState),(j=cr||ad(t,n,j,o,b,B,h)||!1)?(k||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(o,B,h),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(o,B,h)),typeof d.componentDidUpdate=="function"&&(t.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof d.componentDidUpdate!="function"||p===e.memoizedProps&&b===e.memoizedState||(t.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||p===e.memoizedProps&&b===e.memoizedState||(t.flags|=1024),t.memoizedProps=o,t.memoizedState=B),d.props=o,d.state=B,d.context=h,o=j):(typeof d.componentDidUpdate!="function"||p===e.memoizedProps&&b===e.memoizedState||(t.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||p===e.memoizedProps&&b===e.memoizedState||(t.flags|=1024),o=!1)}return ia(e,t,n,o,a,i)}function ia(e,t,n,o,i,a){yd(e,t);var d=(t.flags&128)!==0;if(!o&&!d)return i&&Sc(t,n,!1),Kt(e,t,a);o=t.stateNode,_h.current=t;var p=d&&typeof n.getDerivedStateFromError!="function"?null:o.render();return t.flags|=1,e!==null&&d?(t.child=tn(t,e.child,null,a),t.child=tn(t,null,p,a)):tt(e,t,p,a),t.memoizedState=o.state,i&&Sc(t,n,!0),t.child}function wd(e){var t=e.stateNode;t.pendingContext?bc(e,t.pendingContext,t.pendingContext!==t.context):t.context&&bc(e,t.context,!1),Ui(e,t.containerInfo)}function Nd(e,t,n,o,i){return en(),Bi(i),t.flags|=256,tt(e,t,n,o),t.child}var aa={dehydrated:null,treeContext:null,retryLane:0};function la(e){return{baseLanes:e,cachePool:null,transitions:null}}function bd(e,t,n){var o=t.pendingProps,i=Ee.current,a=!1,d=(t.flags&128)!==0,p;if((p=d)||(p=e!==null&&e.memoizedState===null?!1:(i&2)!==0),p?(a=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),we(Ee,i&1),e===null)return Ri(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(d=o.children,e=o.fallback,a?(o=t.mode,a=t.child,d={mode:"hidden",children:d},(o&1)===0&&a!==null?(a.childLanes=0,a.pendingProps=d):a=ms(d,o,0,null),e=Mr(e,o,n,null),a.return=t,e.return=t,a.sibling=e,t.child=a,t.child.memoizedState=la(n),t.memoizedState=aa,e):ca(t,d));if(i=e.memoizedState,i!==null&&(p=i.dehydrated,p!==null))return Mh(e,t,d,o,p,i,n);if(a){a=o.fallback,d=t.mode,i=e.child,p=i.sibling;var h={mode:"hidden",children:o.children};return(d&1)===0&&t.child!==i?(o=t.child,o.childLanes=0,o.pendingProps=h,t.deletions=null):(o=xr(i,h),o.subtreeFlags=i.subtreeFlags&14680064),p!==null?a=xr(p,a):(a=Mr(a,d,n,null),a.flags|=2),a.return=t,o.return=t,o.sibling=a,t.child=o,o=a,a=t.child,d=e.child.memoizedState,d=d===null?la(n):{baseLanes:d.baseLanes|n,cachePool:null,transitions:d.transitions},a.memoizedState=d,a.childLanes=e.childLanes&~n,t.memoizedState=aa,o}return a=e.child,e=a.sibling,o=xr(a,{mode:"visible",children:o.children}),(t.mode&1)===0&&(o.lanes=n),o.return=t,o.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=o,t.memoizedState=null,o}function ca(e,t){return t=ms({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function ts(e,t,n,o){return o!==null&&Bi(o),tn(t,e.child,null,n),e=ca(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Mh(e,t,n,o,i,a,d){if(n)return t.flags&256?(t.flags&=-257,o=na(Error(l(422))),ts(e,t,d,o)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(a=o.fallback,i=t.mode,o=ms({mode:"visible",children:o.children},i,0,null),a=Mr(a,i,d,null),a.flags|=2,o.return=t,a.return=t,o.sibling=a,t.child=o,(t.mode&1)!==0&&tn(t,e.child,null,d),t.child.memoizedState=la(d),t.memoizedState=aa,a);if((t.mode&1)===0)return ts(e,t,d,null);if(i.data==="$!"){if(o=i.nextSibling&&i.nextSibling.dataset,o)var p=o.dgst;return o=p,a=Error(l(419)),o=na(a,o,void 0),ts(e,t,d,o)}if(p=(d&e.childLanes)!==0,st||p){if(o=He,o!==null){switch(d&-d){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=(i&(o.suspendedLanes|d))!==0?0:i,i!==0&&i!==a.retryLane&&(a.retryLane=i,Gt(e,i),It(o,e,i,-1))}return Sa(),o=na(Error(l(421))),ts(e,t,d,o)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=Gh.bind(null,e),i._reactRetry=t,null):(e=a.treeContext,pt=sr(i.nextSibling),ut=t,Ce=!0,Ct=null,e!==null&&(ft[xt++]=$t,ft[xt++]=Vt,ft[xt++]=kr,$t=e.id,Vt=e.overflow,kr=t),t=ca(t,o.children),t.flags|=4096,t)}function kd(e,t,n){e.lanes|=t;var o=e.alternate;o!==null&&(o.lanes|=t),Fi(e.return,t,n)}function da(e,t,n,o,i){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:o,tail:n,tailMode:i}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=o,a.tail=n,a.tailMode=i)}function Sd(e,t,n){var o=t.pendingProps,i=o.revealOrder,a=o.tail;if(tt(e,t,o.children,n),o=Ee.current,(o&2)!==0)o=o&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&kd(e,n,t);else if(e.tag===19)kd(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}o&=1}if(we(Ee,o),(t.mode&1)===0)t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Ko(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),da(t,!1,i,n,a);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Ko(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}da(t,!0,n,null,a);break;case"together":da(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function rs(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Kt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Lr|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(l(153));if(t.child!==null){for(e=t.child,n=xr(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=xr(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Ph(e,t,n){switch(t.tag){case 3:wd(t),en();break;case 5:Dc(t);break;case 1:ot(t.type)&&Ao(t);break;case 4:Ui(t,t.stateNode.containerInfo);break;case 10:var o=t.type._context,i=t.memoizedProps.value;we($o,o._currentValue),o._currentValue=i;break;case 13:if(o=t.memoizedState,o!==null)return o.dehydrated!==null?(we(Ee,Ee.current&1),t.flags|=128,null):(n&t.child.childLanes)!==0?bd(e,t,n):(we(Ee,Ee.current&1),e=Kt(e,t,n),e!==null?e.sibling:null);we(Ee,Ee.current&1);break;case 19:if(o=(n&t.childLanes)!==0,(e.flags&128)!==0){if(o)return Sd(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),we(Ee,Ee.current),o)break;return null;case 22:case 23:return t.lanes=0,vd(e,t,n)}return Kt(e,t,n)}var Cd,ua,Td,Ed;Cd=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},ua=function(){},Td=function(e,t,n,o){var i=e.memoizedProps;if(i!==o){e=t.stateNode,Tr(At.current);var a=null;switch(n){case"input":i=Fs(e,i),o=Fs(e,o),a=[];break;case"select":i=M({},i,{value:void 0}),o=M({},o,{value:void 0}),a=[];break;case"textarea":i=Us(e,i),o=Us(e,o),a=[];break;default:typeof i.onClick!="function"&&typeof o.onClick=="function"&&(e.onclick=Ro)}Vs(n,o);var d;n=null;for(j in i)if(!o.hasOwnProperty(j)&&i.hasOwnProperty(j)&&i[j]!=null)if(j==="style"){var p=i[j];for(d in p)p.hasOwnProperty(d)&&(n||(n={}),n[d]="")}else j!=="dangerouslySetInnerHTML"&&j!=="children"&&j!=="suppressContentEditableWarning"&&j!=="suppressHydrationWarning"&&j!=="autoFocus"&&(m.hasOwnProperty(j)?a||(a=[]):(a=a||[]).push(j,null));for(j in o){var h=o[j];if(p=i!=null?i[j]:void 0,o.hasOwnProperty(j)&&h!==p&&(h!=null||p!=null))if(j==="style")if(p){for(d in p)!p.hasOwnProperty(d)||h&&h.hasOwnProperty(d)||(n||(n={}),n[d]="");for(d in h)h.hasOwnProperty(d)&&p[d]!==h[d]&&(n||(n={}),n[d]=h[d])}else n||(a||(a=[]),a.push(j,n)),n=h;else j==="dangerouslySetInnerHTML"?(h=h?h.__html:void 0,p=p?p.__html:void 0,h!=null&&p!==h&&(a=a||[]).push(j,h)):j==="children"?typeof h!="string"&&typeof h!="number"||(a=a||[]).push(j,""+h):j!=="suppressContentEditableWarning"&&j!=="suppressHydrationWarning"&&(m.hasOwnProperty(j)?(h!=null&&j==="onScroll"&&Ne("scroll",e),a||p===h||(a=[])):(a=a||[]).push(j,h))}n&&(a=a||[]).push("style",n);var j=a;(t.updateQueue=j)&&(t.flags|=4)}},Ed=function(e,t,n,o){n!==o&&(t.flags|=4)};function Xn(e,t){if(!Ce)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var o=null;n!==null;)n.alternate!==null&&(o=n),n=n.sibling;o===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function Je(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,o=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,o|=i.subtreeFlags&14680064,o|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,o|=i.subtreeFlags,o|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=o,e.childLanes=n,t}function Rh(e,t,n){var o=t.pendingProps;switch(Mi(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Je(t),null;case 1:return ot(t.type)&&Oo(),Je(t),null;case 3:return o=t.stateNode,on(),be(nt),be(Ye),Gi(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(e===null||e.child===null)&&(Wo(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Ct!==null&&(Na(Ct),Ct=null))),ua(e,t),Je(t),null;case 5:$i(t);var i=Tr(Gn.current);if(n=t.type,e!==null&&t.stateNode!=null)Td(e,t,n,o,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!o){if(t.stateNode===null)throw Error(l(166));return Je(t),null}if(e=Tr(At.current),Wo(t)){o=t.stateNode,n=t.type;var a=t.memoizedProps;switch(o[Ot]=t,o[Hn]=a,e=(t.mode&1)!==0,n){case"dialog":Ne("cancel",o),Ne("close",o);break;case"iframe":case"object":case"embed":Ne("load",o);break;case"video":case"audio":for(i=0;i<An.length;i++)Ne(An[i],o);break;case"source":Ne("error",o);break;case"img":case"image":case"link":Ne("error",o),Ne("load",o);break;case"details":Ne("toggle",o);break;case"input":ll(o,a),Ne("invalid",o);break;case"select":o._wrapperState={wasMultiple:!!a.multiple},Ne("invalid",o);break;case"textarea":ul(o,a),Ne("invalid",o)}Vs(n,a),i=null;for(var d in a)if(a.hasOwnProperty(d)){var p=a[d];d==="children"?typeof p=="string"?o.textContent!==p&&(a.suppressHydrationWarning!==!0&&Po(o.textContent,p,e),i=["children",p]):typeof p=="number"&&o.textContent!==""+p&&(a.suppressHydrationWarning!==!0&&Po(o.textContent,p,e),i=["children",""+p]):m.hasOwnProperty(d)&&p!=null&&d==="onScroll"&&Ne("scroll",o)}switch(n){case"input":Jt(o),dl(o,a,!0);break;case"textarea":Jt(o),hl(o);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(o.onclick=Ro)}o=i,t.updateQueue=o,o!==null&&(t.flags|=4)}else{d=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=ml(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=d.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof o.is=="string"?e=d.createElement(n,{is:o.is}):(e=d.createElement(n),n==="select"&&(d=e,o.multiple?d.multiple=!0:o.size&&(d.size=o.size))):e=d.createElementNS(e,n),e[Ot]=t,e[Hn]=o,Cd(e,t,!1,!1),t.stateNode=e;e:{switch(d=Gs(n,o),n){case"dialog":Ne("cancel",e),Ne("close",e),i=o;break;case"iframe":case"object":case"embed":Ne("load",e),i=o;break;case"video":case"audio":for(i=0;i<An.length;i++)Ne(An[i],e);i=o;break;case"source":Ne("error",e),i=o;break;case"img":case"image":case"link":Ne("error",e),Ne("load",e),i=o;break;case"details":Ne("toggle",e),i=o;break;case"input":ll(e,o),i=Fs(e,o),Ne("invalid",e);break;case"option":i=o;break;case"select":e._wrapperState={wasMultiple:!!o.multiple},i=M({},o,{value:void 0}),Ne("invalid",e);break;case"textarea":ul(e,o),i=Us(e,o),Ne("invalid",e);break;default:i=o}Vs(n,i),p=i;for(a in p)if(p.hasOwnProperty(a)){var h=p[a];a==="style"?gl(e,h):a==="dangerouslySetInnerHTML"?(h=h?h.__html:void 0,h!=null&&fl(e,h)):a==="children"?typeof h=="string"?(n!=="textarea"||h!=="")&&yn(e,h):typeof h=="number"&&yn(e,""+h):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(m.hasOwnProperty(a)?h!=null&&a==="onScroll"&&Ne("scroll",e):h!=null&&ee(e,a,h,d))}switch(n){case"input":Jt(e),dl(e,o,!1);break;case"textarea":Jt(e),hl(e);break;case"option":o.value!=null&&e.setAttribute("value",""+ue(o.value));break;case"select":e.multiple=!!o.multiple,a=o.value,a!=null?Dr(e,!!o.multiple,a,!1):o.defaultValue!=null&&Dr(e,!!o.multiple,o.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Ro)}switch(n){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}}o&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Je(t),null;case 6:if(e&&t.stateNode!=null)Ed(e,t,e.memoizedProps,o);else{if(typeof o!="string"&&t.stateNode===null)throw Error(l(166));if(n=Tr(Gn.current),Tr(At.current),Wo(t)){if(o=t.stateNode,n=t.memoizedProps,o[Ot]=t,(a=o.nodeValue!==n)&&(e=ut,e!==null))switch(e.tag){case 3:Po(o.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Po(o.nodeValue,n,(e.mode&1)!==0)}a&&(t.flags|=4)}else o=(n.nodeType===9?n:n.ownerDocument).createTextNode(o),o[Ot]=t,t.stateNode=o}return Je(t),null;case 13:if(be(Ee),o=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Ce&&pt!==null&&(t.mode&1)!==0&&(t.flags&128)===0)zc(),en(),t.flags|=98560,a=!1;else if(a=Wo(t),o!==null&&o.dehydrated!==null){if(e===null){if(!a)throw Error(l(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(l(317));a[Ot]=t}else en(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Je(t),a=!1}else Ct!==null&&(Na(Ct),Ct=null),a=!0;if(!a)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=n,t):(o=o!==null,o!==(e!==null&&e.memoizedState!==null)&&o&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(Ee.current&1)!==0?Ae===0&&(Ae=3):Sa())),t.updateQueue!==null&&(t.flags|=4),Je(t),null);case 4:return on(),ua(e,t),e===null&&Dn(t.stateNode.containerInfo),Je(t),null;case 10:return Di(t.type._context),Je(t),null;case 17:return ot(t.type)&&Oo(),Je(t),null;case 19:if(be(Ee),a=t.memoizedState,a===null)return Je(t),null;if(o=(t.flags&128)!==0,d=a.rendering,d===null)if(o)Xn(a,!1);else{if(Ae!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(d=Ko(e),d!==null){for(t.flags|=128,Xn(a,!1),o=d.updateQueue,o!==null&&(t.updateQueue=o,t.flags|=4),t.subtreeFlags=0,o=n,n=t.child;n!==null;)a=n,e=o,a.flags&=14680066,d=a.alternate,d===null?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=d.childLanes,a.lanes=d.lanes,a.child=d.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=d.memoizedProps,a.memoizedState=d.memoizedState,a.updateQueue=d.updateQueue,a.type=d.type,e=d.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return we(Ee,Ee.current&1|2),t.child}e=e.sibling}a.tail!==null&&Me()>cn&&(t.flags|=128,o=!0,Xn(a,!1),t.lanes=4194304)}else{if(!o)if(e=Ko(d),e!==null){if(t.flags|=128,o=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Xn(a,!0),a.tail===null&&a.tailMode==="hidden"&&!d.alternate&&!Ce)return Je(t),null}else 2*Me()-a.renderingStartTime>cn&&n!==1073741824&&(t.flags|=128,o=!0,Xn(a,!1),t.lanes=4194304);a.isBackwards?(d.sibling=t.child,t.child=d):(n=a.last,n!==null?n.sibling=d:t.child=d,a.last=d)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=Me(),t.sibling=null,n=Ee.current,we(Ee,o?n&1|2:n&1),t):(Je(t),null);case 22:case 23:return ka(),o=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==o&&(t.flags|=8192),o&&(t.mode&1)!==0?(ht&1073741824)!==0&&(Je(t),t.subtreeFlags&6&&(t.flags|=8192)):Je(t),null;case 24:return null;case 25:return null}throw Error(l(156,t.tag))}function Bh(e,t){switch(Mi(t),t.tag){case 1:return ot(t.type)&&Oo(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return on(),be(nt),be(Ye),Gi(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return $i(t),null;case 13:if(be(Ee),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(l(340));en()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return be(Ee),null;case 4:return on(),null;case 10:return Di(t.type._context),null;case 22:case 23:return ka(),null;case 24:return null;default:return null}}var ns=!1,Ze=!1,Oh=typeof WeakSet=="function"?WeakSet:Set,R=null;function an(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(o){ze(e,t,o)}else n.current=null}function pa(e,t,n){try{n()}catch(o){ze(e,t,o)}}var Ld=!1;function Ah(e,t){if(ki=bo,e=ac(),xi(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var o=n.getSelection&&n.getSelection();if(o&&o.rangeCount!==0){n=o.anchorNode;var i=o.anchorOffset,a=o.focusNode;o=o.focusOffset;try{n.nodeType,a.nodeType}catch{n=null;break e}var d=0,p=-1,h=-1,j=0,k=0,S=e,b=null;t:for(;;){for(var P;S!==n||i!==0&&S.nodeType!==3||(p=d+i),S!==a||o!==0&&S.nodeType!==3||(h=d+o),S.nodeType===3&&(d+=S.nodeValue.length),(P=S.firstChild)!==null;)b=S,S=P;for(;;){if(S===e)break t;if(b===n&&++j===i&&(p=d),b===a&&++k===o&&(h=d),(P=S.nextSibling)!==null)break;S=b,b=S.parentNode}S=P}n=p===-1||h===-1?null:{start:p,end:h}}else n=null}n=n||{start:0,end:0}}else n=null;for(Si={focusedElem:e,selectionRange:n},bo=!1,R=t;R!==null;)if(t=R,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,R=e;else for(;R!==null;){t=R;try{var B=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(B!==null){var D=B.memoizedProps,Pe=B.memoizedState,v=t.stateNode,f=v.getSnapshotBeforeUpdate(t.elementType===t.type?D:Tt(t.type,D),Pe);v.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var y=t.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(l(163))}}catch(T){ze(t,t.return,T)}if(e=t.sibling,e!==null){e.return=t.return,R=e;break}R=t.return}return B=Ld,Ld=!1,B}function Jn(e,t,n){var o=t.updateQueue;if(o=o!==null?o.lastEffect:null,o!==null){var i=o=o.next;do{if((i.tag&e)===e){var a=i.destroy;i.destroy=void 0,a!==void 0&&pa(t,n,a)}i=i.next}while(i!==o)}}function os(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var o=n.create;n.destroy=o()}n=n.next}while(n!==t)}}function ha(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Id(e){var t=e.alternate;t!==null&&(e.alternate=null,Id(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Ot],delete t[Hn],delete t[Li],delete t[jh],delete t[wh])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function zd(e){return e.tag===5||e.tag===3||e.tag===4}function _d(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||zd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ma(e,t,n){var o=e.tag;if(o===5||o===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Ro));else if(o!==4&&(e=e.child,e!==null))for(ma(e,t,n),e=e.sibling;e!==null;)ma(e,t,n),e=e.sibling}function fa(e,t,n){var o=e.tag;if(o===5||o===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(o!==4&&(e=e.child,e!==null))for(fa(e,t,n),e=e.sibling;e!==null;)fa(e,t,n),e=e.sibling}var Ve=null,Et=!1;function ur(e,t,n){for(n=n.child;n!==null;)Md(e,t,n),n=n.sibling}function Md(e,t,n){if(Bt&&typeof Bt.onCommitFiberUnmount=="function")try{Bt.onCommitFiberUnmount(go,n)}catch{}switch(n.tag){case 5:Ze||an(n,t);case 6:var o=Ve,i=Et;Ve=null,ur(e,t,n),Ve=o,Et=i,Ve!==null&&(Et?(e=Ve,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Ve.removeChild(n.stateNode));break;case 18:Ve!==null&&(Et?(e=Ve,n=n.stateNode,e.nodeType===8?Ei(e.parentNode,n):e.nodeType===1&&Ei(e,n),In(e)):Ei(Ve,n.stateNode));break;case 4:o=Ve,i=Et,Ve=n.stateNode.containerInfo,Et=!0,ur(e,t,n),Ve=o,Et=i;break;case 0:case 11:case 14:case 15:if(!Ze&&(o=n.updateQueue,o!==null&&(o=o.lastEffect,o!==null))){i=o=o.next;do{var a=i,d=a.destroy;a=a.tag,d!==void 0&&((a&2)!==0||(a&4)!==0)&&pa(n,t,d),i=i.next}while(i!==o)}ur(e,t,n);break;case 1:if(!Ze&&(an(n,t),o=n.stateNode,typeof o.componentWillUnmount=="function"))try{o.props=n.memoizedProps,o.state=n.memoizedState,o.componentWillUnmount()}catch(p){ze(n,t,p)}ur(e,t,n);break;case 21:ur(e,t,n);break;case 22:n.mode&1?(Ze=(o=Ze)||n.memoizedState!==null,ur(e,t,n),Ze=o):ur(e,t,n);break;default:ur(e,t,n)}}function Pd(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Oh),t.forEach(function(o){var i=Qh.bind(null,e,o);n.has(o)||(n.add(o),o.then(i,i))})}}function Lt(e,t){var n=t.deletions;if(n!==null)for(var o=0;o<n.length;o++){var i=n[o];try{var a=e,d=t,p=d;e:for(;p!==null;){switch(p.tag){case 5:Ve=p.stateNode,Et=!1;break e;case 3:Ve=p.stateNode.containerInfo,Et=!0;break e;case 4:Ve=p.stateNode.containerInfo,Et=!0;break e}p=p.return}if(Ve===null)throw Error(l(160));Md(a,d,i),Ve=null,Et=!1;var h=i.alternate;h!==null&&(h.return=null),i.return=null}catch(j){ze(i,t,j)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Rd(t,e),t=t.sibling}function Rd(e,t){var n=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Lt(t,e),Ft(e),o&4){try{Jn(3,e,e.return),os(3,e)}catch(D){ze(e,e.return,D)}try{Jn(5,e,e.return)}catch(D){ze(e,e.return,D)}}break;case 1:Lt(t,e),Ft(e),o&512&&n!==null&&an(n,n.return);break;case 5:if(Lt(t,e),Ft(e),o&512&&n!==null&&an(n,n.return),e.flags&32){var i=e.stateNode;try{yn(i,"")}catch(D){ze(e,e.return,D)}}if(o&4&&(i=e.stateNode,i!=null)){var a=e.memoizedProps,d=n!==null?n.memoizedProps:a,p=e.type,h=e.updateQueue;if(e.updateQueue=null,h!==null)try{p==="input"&&a.type==="radio"&&a.name!=null&&cl(i,a),Gs(p,d);var j=Gs(p,a);for(d=0;d<h.length;d+=2){var k=h[d],S=h[d+1];k==="style"?gl(i,S):k==="dangerouslySetInnerHTML"?fl(i,S):k==="children"?yn(i,S):ee(i,k,S,j)}switch(p){case"input":Hs(i,a);break;case"textarea":pl(i,a);break;case"select":var b=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!a.multiple;var P=a.value;P!=null?Dr(i,!!a.multiple,P,!1):b!==!!a.multiple&&(a.defaultValue!=null?Dr(i,!!a.multiple,a.defaultValue,!0):Dr(i,!!a.multiple,a.multiple?[]:"",!1))}i[Hn]=a}catch(D){ze(e,e.return,D)}}break;case 6:if(Lt(t,e),Ft(e),o&4){if(e.stateNode===null)throw Error(l(162));i=e.stateNode,a=e.memoizedProps;try{i.nodeValue=a}catch(D){ze(e,e.return,D)}}break;case 3:if(Lt(t,e),Ft(e),o&4&&n!==null&&n.memoizedState.isDehydrated)try{In(t.containerInfo)}catch(D){ze(e,e.return,D)}break;case 4:Lt(t,e),Ft(e);break;case 13:Lt(t,e),Ft(e),i=e.child,i.flags&8192&&(a=i.memoizedState!==null,i.stateNode.isHidden=a,!a||i.alternate!==null&&i.alternate.memoizedState!==null||(va=Me())),o&4&&Pd(e);break;case 22:if(k=n!==null&&n.memoizedState!==null,e.mode&1?(Ze=(j=Ze)||k,Lt(t,e),Ze=j):Lt(t,e),Ft(e),o&8192){if(j=e.memoizedState!==null,(e.stateNode.isHidden=j)&&!k&&(e.mode&1)!==0)for(R=e,k=e.child;k!==null;){for(S=R=k;R!==null;){switch(b=R,P=b.child,b.tag){case 0:case 11:case 14:case 15:Jn(4,b,b.return);break;case 1:an(b,b.return);var B=b.stateNode;if(typeof B.componentWillUnmount=="function"){o=b,n=b.return;try{t=o,B.props=t.memoizedProps,B.state=t.memoizedState,B.componentWillUnmount()}catch(D){ze(o,n,D)}}break;case 5:an(b,b.return);break;case 22:if(b.memoizedState!==null){Ad(S);continue}}P!==null?(P.return=b,R=P):Ad(S)}k=k.sibling}e:for(k=null,S=e;;){if(S.tag===5){if(k===null){k=S;try{i=S.stateNode,j?(a=i.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(p=S.stateNode,h=S.memoizedProps.style,d=h!=null&&h.hasOwnProperty("display")?h.display:null,p.style.display=xl("display",d))}catch(D){ze(e,e.return,D)}}}else if(S.tag===6){if(k===null)try{S.stateNode.nodeValue=j?"":S.memoizedProps}catch(D){ze(e,e.return,D)}}else if((S.tag!==22&&S.tag!==23||S.memoizedState===null||S===e)&&S.child!==null){S.child.return=S,S=S.child;continue}if(S===e)break e;for(;S.sibling===null;){if(S.return===null||S.return===e)break e;k===S&&(k=null),S=S.return}k===S&&(k=null),S.sibling.return=S.return,S=S.sibling}}break;case 19:Lt(t,e),Ft(e),o&4&&Pd(e);break;case 21:break;default:Lt(t,e),Ft(e)}}function Ft(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(zd(n)){var o=n;break e}n=n.return}throw Error(l(160))}switch(o.tag){case 5:var i=o.stateNode;o.flags&32&&(yn(i,""),o.flags&=-33);var a=_d(e);fa(e,a,i);break;case 3:case 4:var d=o.stateNode.containerInfo,p=_d(e);ma(e,p,d);break;default:throw Error(l(161))}}catch(h){ze(e,e.return,h)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Dh(e,t,n){R=e,Bd(e)}function Bd(e,t,n){for(var o=(e.mode&1)!==0;R!==null;){var i=R,a=i.child;if(i.tag===22&&o){var d=i.memoizedState!==null||ns;if(!d){var p=i.alternate,h=p!==null&&p.memoizedState!==null||Ze;p=ns;var j=Ze;if(ns=d,(Ze=h)&&!j)for(R=i;R!==null;)d=R,h=d.child,d.tag===22&&d.memoizedState!==null?Dd(i):h!==null?(h.return=d,R=h):Dd(i);for(;a!==null;)R=a,Bd(a),a=a.sibling;R=i,ns=p,Ze=j}Od(e)}else(i.subtreeFlags&8772)!==0&&a!==null?(a.return=i,R=a):Od(e)}}function Od(e){for(;R!==null;){var t=R;if((t.flags&8772)!==0){var n=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:Ze||os(5,t);break;case 1:var o=t.stateNode;if(t.flags&4&&!Ze)if(n===null)o.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Tt(t.type,n.memoizedProps);o.componentDidUpdate(i,n.memoizedState,o.__reactInternalSnapshotBeforeUpdate)}var a=t.updateQueue;a!==null&&Ac(t,a,o);break;case 3:var d=t.updateQueue;if(d!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Ac(t,d,n)}break;case 5:var p=t.stateNode;if(n===null&&t.flags&4){n=p;var h=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":h.autoFocus&&n.focus();break;case"img":h.src&&(n.src=h.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var j=t.alternate;if(j!==null){var k=j.memoizedState;if(k!==null){var S=k.dehydrated;S!==null&&In(S)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(l(163))}Ze||t.flags&512&&ha(t)}catch(b){ze(t,t.return,b)}}if(t===e){R=null;break}if(n=t.sibling,n!==null){n.return=t.return,R=n;break}R=t.return}}function Ad(e){for(;R!==null;){var t=R;if(t===e){R=null;break}var n=t.sibling;if(n!==null){n.return=t.return,R=n;break}R=t.return}}function Dd(e){for(;R!==null;){var t=R;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{os(4,t)}catch(h){ze(t,n,h)}break;case 1:var o=t.stateNode;if(typeof o.componentDidMount=="function"){var i=t.return;try{o.componentDidMount()}catch(h){ze(t,i,h)}}var a=t.return;try{ha(t)}catch(h){ze(t,a,h)}break;case 5:var d=t.return;try{ha(t)}catch(h){ze(t,d,h)}}}catch(h){ze(t,t.return,h)}if(t===e){R=null;break}var p=t.sibling;if(p!==null){p.return=t.return,R=p;break}R=t.return}}var Fh=Math.ceil,ss=I.ReactCurrentDispatcher,xa=I.ReactCurrentOwner,yt=I.ReactCurrentBatchConfig,he=0,He=null,Re=null,Ge=0,ht=0,ln=ir(0),Ae=0,Zn=null,Lr=0,is=0,ga=0,eo=null,it=null,va=0,cn=1/0,qt=null,as=!1,ya=null,pr=null,ls=!1,hr=null,cs=0,to=0,ja=null,ds=-1,us=0;function rt(){return(he&6)!==0?Me():ds!==-1?ds:ds=Me()}function mr(e){return(e.mode&1)===0?1:(he&2)!==0&&Ge!==0?Ge&-Ge:bh.transition!==null?(us===0&&(us=_l()),us):(e=ge,e!==0||(e=window.event,e=e===void 0?16:Hl(e.type)),e)}function It(e,t,n,o){if(50<to)throw to=0,ja=null,Error(l(185));Sn(e,n,o),((he&2)===0||e!==He)&&(e===He&&((he&2)===0&&(is|=n),Ae===4&&fr(e,Ge)),at(e,o),n===1&&he===0&&(t.mode&1)===0&&(cn=Me()+500,Do&&lr()))}function at(e,t){var n=e.callbackNode;bp(e,t);var o=jo(e,e===He?Ge:0);if(o===0)n!==null&&Ll(n),e.callbackNode=null,e.callbackPriority=0;else if(t=o&-o,e.callbackPriority!==t){if(n!=null&&Ll(n),t===1)e.tag===0?Nh(Hd.bind(null,e)):Cc(Hd.bind(null,e)),vh(function(){(he&6)===0&&lr()}),n=null;else{switch(Ml(o)){case 1:n=Zs;break;case 4:n=Il;break;case 16:n=xo;break;case 536870912:n=zl;break;default:n=xo}n=qd(n,Fd.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Fd(e,t){if(ds=-1,us=0,(he&6)!==0)throw Error(l(327));var n=e.callbackNode;if(dn()&&e.callbackNode!==n)return null;var o=jo(e,e===He?Ge:0);if(o===0)return null;if((o&30)!==0||(o&e.expiredLanes)!==0||t)t=ps(e,o);else{t=o;var i=he;he|=2;var a=Ud();(He!==e||Ge!==t)&&(qt=null,cn=Me()+500,zr(e,t));do try{Uh();break}catch(p){Wd(e,p)}while(!0);Ai(),ss.current=a,he=i,Re!==null?t=0:(He=null,Ge=0,t=Ae)}if(t!==0){if(t===2&&(i=ei(e),i!==0&&(o=i,t=wa(e,i))),t===1)throw n=Zn,zr(e,0),fr(e,o),at(e,Me()),n;if(t===6)fr(e,o);else{if(i=e.current.alternate,(o&30)===0&&!Hh(i)&&(t=ps(e,o),t===2&&(a=ei(e),a!==0&&(o=a,t=wa(e,a))),t===1))throw n=Zn,zr(e,0),fr(e,o),at(e,Me()),n;switch(e.finishedWork=i,e.finishedLanes=o,t){case 0:case 1:throw Error(l(345));case 2:_r(e,it,qt);break;case 3:if(fr(e,o),(o&130023424)===o&&(t=va+500-Me(),10<t)){if(jo(e,0)!==0)break;if(i=e.suspendedLanes,(i&o)!==o){rt(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Ti(_r.bind(null,e,it,qt),t);break}_r(e,it,qt);break;case 4:if(fr(e,o),(o&4194240)===o)break;for(t=e.eventTimes,i=-1;0<o;){var d=31-kt(o);a=1<<d,d=t[d],d>i&&(i=d),o&=~a}if(o=i,o=Me()-o,o=(120>o?120:480>o?480:1080>o?1080:1920>o?1920:3e3>o?3e3:4320>o?4320:1960*Fh(o/1960))-o,10<o){e.timeoutHandle=Ti(_r.bind(null,e,it,qt),o);break}_r(e,it,qt);break;case 5:_r(e,it,qt);break;default:throw Error(l(329))}}}return at(e,Me()),e.callbackNode===n?Fd.bind(null,e):null}function wa(e,t){var n=eo;return e.current.memoizedState.isDehydrated&&(zr(e,t).flags|=256),e=ps(e,t),e!==2&&(t=it,it=n,t!==null&&Na(t)),e}function Na(e){it===null?it=e:it.push.apply(it,e)}function Hh(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var o=0;o<n.length;o++){var i=n[o],a=i.getSnapshot;i=i.value;try{if(!St(a(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function fr(e,t){for(t&=~ga,t&=~is,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-kt(t),o=1<<n;e[n]=-1,t&=~o}}function Hd(e){if((he&6)!==0)throw Error(l(327));dn();var t=jo(e,0);if((t&1)===0)return at(e,Me()),null;var n=ps(e,t);if(e.tag!==0&&n===2){var o=ei(e);o!==0&&(t=o,n=wa(e,o))}if(n===1)throw n=Zn,zr(e,0),fr(e,t),at(e,Me()),n;if(n===6)throw Error(l(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,_r(e,it,qt),at(e,Me()),null}function ba(e,t){var n=he;he|=1;try{return e(t)}finally{he=n,he===0&&(cn=Me()+500,Do&&lr())}}function Ir(e){hr!==null&&hr.tag===0&&(he&6)===0&&dn();var t=he;he|=1;var n=yt.transition,o=ge;try{if(yt.transition=null,ge=1,e)return e()}finally{ge=o,yt.transition=n,he=t,(he&6)===0&&lr()}}function ka(){ht=ln.current,be(ln)}function zr(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,gh(n)),Re!==null)for(n=Re.return;n!==null;){var o=n;switch(Mi(o),o.tag){case 1:o=o.type.childContextTypes,o!=null&&Oo();break;case 3:on(),be(nt),be(Ye),Gi();break;case 5:$i(o);break;case 4:on();break;case 13:be(Ee);break;case 19:be(Ee);break;case 10:Di(o.type._context);break;case 22:case 23:ka()}n=n.return}if(He=e,Re=e=xr(e.current,null),Ge=ht=t,Ae=0,Zn=null,ga=is=Lr=0,it=eo=null,Cr!==null){for(t=0;t<Cr.length;t++)if(n=Cr[t],o=n.interleaved,o!==null){n.interleaved=null;var i=o.next,a=n.pending;if(a!==null){var d=a.next;a.next=i,o.next=d}n.pending=o}Cr=null}return e}function Wd(e,t){do{var n=Re;try{if(Ai(),qo.current=Zo,Yo){for(var o=Le.memoizedState;o!==null;){var i=o.queue;i!==null&&(i.pending=null),o=o.next}Yo=!1}if(Er=0,Fe=Oe=Le=null,Qn=!1,Kn=0,xa.current=null,n===null||n.return===null){Ae=1,Zn=t,Re=null;break}e:{var a=e,d=n.return,p=n,h=t;if(t=Ge,p.flags|=32768,h!==null&&typeof h=="object"&&typeof h.then=="function"){var j=h,k=p,S=k.tag;if((k.mode&1)===0&&(S===0||S===11||S===15)){var b=k.alternate;b?(k.updateQueue=b.updateQueue,k.memoizedState=b.memoizedState,k.lanes=b.lanes):(k.updateQueue=null,k.memoizedState=null)}var P=hd(d);if(P!==null){P.flags&=-257,md(P,d,p,a,t),P.mode&1&&pd(a,j,t),t=P,h=j;var B=t.updateQueue;if(B===null){var D=new Set;D.add(h),t.updateQueue=D}else B.add(h);break e}else{if((t&1)===0){pd(a,j,t),Sa();break e}h=Error(l(426))}}else if(Ce&&p.mode&1){var Pe=hd(d);if(Pe!==null){(Pe.flags&65536)===0&&(Pe.flags|=256),md(Pe,d,p,a,t),Bi(sn(h,p));break e}}a=h=sn(h,p),Ae!==4&&(Ae=2),eo===null?eo=[a]:eo.push(a),a=d;do{switch(a.tag){case 3:a.flags|=65536,t&=-t,a.lanes|=t;var v=dd(a,h,t);Oc(a,v);break e;case 1:p=h;var f=a.type,y=a.stateNode;if((a.flags&128)===0&&(typeof f.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(pr===null||!pr.has(y)))){a.flags|=65536,t&=-t,a.lanes|=t;var T=ud(a,p,t);Oc(a,T);break e}}a=a.return}while(a!==null)}Vd(n)}catch(W){t=W,Re===n&&n!==null&&(Re=n=n.return);continue}break}while(!0)}function Ud(){var e=ss.current;return ss.current=Zo,e===null?Zo:e}function Sa(){(Ae===0||Ae===3||Ae===2)&&(Ae=4),He===null||(Lr&268435455)===0&&(is&268435455)===0||fr(He,Ge)}function ps(e,t){var n=he;he|=2;var o=Ud();(He!==e||Ge!==t)&&(qt=null,zr(e,t));do try{Wh();break}catch(i){Wd(e,i)}while(!0);if(Ai(),he=n,ss.current=o,Re!==null)throw Error(l(261));return He=null,Ge=0,Ae}function Wh(){for(;Re!==null;)$d(Re)}function Uh(){for(;Re!==null&&!mp();)$d(Re)}function $d(e){var t=Kd(e.alternate,e,ht);e.memoizedProps=e.pendingProps,t===null?Vd(e):Re=t,xa.current=null}function Vd(e){var t=e;do{var n=t.alternate;if(e=t.return,(t.flags&32768)===0){if(n=Rh(n,t,ht),n!==null){Re=n;return}}else{if(n=Bh(n,t),n!==null){n.flags&=32767,Re=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ae=6,Re=null;return}}if(t=t.sibling,t!==null){Re=t;return}Re=t=e}while(t!==null);Ae===0&&(Ae=5)}function _r(e,t,n){var o=ge,i=yt.transition;try{yt.transition=null,ge=1,$h(e,t,n,o)}finally{yt.transition=i,ge=o}return null}function $h(e,t,n,o){do dn();while(hr!==null);if((he&6)!==0)throw Error(l(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(l(177));e.callbackNode=null,e.callbackPriority=0;var a=n.lanes|n.childLanes;if(kp(e,a),e===He&&(Re=He=null,Ge=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||ls||(ls=!0,qd(xo,function(){return dn(),null})),a=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||a){a=yt.transition,yt.transition=null;var d=ge;ge=1;var p=he;he|=4,xa.current=null,Ah(e,n),Rd(n,e),dh(Si),bo=!!ki,Si=ki=null,e.current=n,Dh(n),fp(),he=p,ge=d,yt.transition=a}else e.current=n;if(ls&&(ls=!1,hr=e,cs=i),a=e.pendingLanes,a===0&&(pr=null),vp(n.stateNode),at(e,Me()),t!==null)for(o=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],o(i.value,{componentStack:i.stack,digest:i.digest});if(as)throw as=!1,e=ya,ya=null,e;return(cs&1)!==0&&e.tag!==0&&dn(),a=e.pendingLanes,(a&1)!==0?e===ja?to++:(to=0,ja=e):to=0,lr(),null}function dn(){if(hr!==null){var e=Ml(cs),t=yt.transition,n=ge;try{if(yt.transition=null,ge=16>e?16:e,hr===null)var o=!1;else{if(e=hr,hr=null,cs=0,(he&6)!==0)throw Error(l(331));var i=he;for(he|=4,R=e.current;R!==null;){var a=R,d=a.child;if((R.flags&16)!==0){var p=a.deletions;if(p!==null){for(var h=0;h<p.length;h++){var j=p[h];for(R=j;R!==null;){var k=R;switch(k.tag){case 0:case 11:case 15:Jn(8,k,a)}var S=k.child;if(S!==null)S.return=k,R=S;else for(;R!==null;){k=R;var b=k.sibling,P=k.return;if(Id(k),k===j){R=null;break}if(b!==null){b.return=P,R=b;break}R=P}}}var B=a.alternate;if(B!==null){var D=B.child;if(D!==null){B.child=null;do{var Pe=D.sibling;D.sibling=null,D=Pe}while(D!==null)}}R=a}}if((a.subtreeFlags&2064)!==0&&d!==null)d.return=a,R=d;else e:for(;R!==null;){if(a=R,(a.flags&2048)!==0)switch(a.tag){case 0:case 11:case 15:Jn(9,a,a.return)}var v=a.sibling;if(v!==null){v.return=a.return,R=v;break e}R=a.return}}var f=e.current;for(R=f;R!==null;){d=R;var y=d.child;if((d.subtreeFlags&2064)!==0&&y!==null)y.return=d,R=y;else e:for(d=f;R!==null;){if(p=R,(p.flags&2048)!==0)try{switch(p.tag){case 0:case 11:case 15:os(9,p)}}catch(W){ze(p,p.return,W)}if(p===d){R=null;break e}var T=p.sibling;if(T!==null){T.return=p.return,R=T;break e}R=p.return}}if(he=i,lr(),Bt&&typeof Bt.onPostCommitFiberRoot=="function")try{Bt.onPostCommitFiberRoot(go,e)}catch{}o=!0}return o}finally{ge=n,yt.transition=t}}return!1}function Gd(e,t,n){t=sn(n,t),t=dd(e,t,1),e=dr(e,t,1),t=rt(),e!==null&&(Sn(e,1,t),at(e,t))}function ze(e,t,n){if(e.tag===3)Gd(e,e,n);else for(;t!==null;){if(t.tag===3){Gd(t,e,n);break}else if(t.tag===1){var o=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(pr===null||!pr.has(o))){e=sn(n,e),e=ud(t,e,1),t=dr(t,e,1),e=rt(),t!==null&&(Sn(t,1,e),at(t,e));break}}t=t.return}}function Vh(e,t,n){var o=e.pingCache;o!==null&&o.delete(t),t=rt(),e.pingedLanes|=e.suspendedLanes&n,He===e&&(Ge&n)===n&&(Ae===4||Ae===3&&(Ge&130023424)===Ge&&500>Me()-va?zr(e,0):ga|=n),at(e,t)}function Qd(e,t){t===0&&((e.mode&1)===0?t=1:(t=yo,yo<<=1,(yo&130023424)===0&&(yo=4194304)));var n=rt();e=Gt(e,t),e!==null&&(Sn(e,t,n),at(e,n))}function Gh(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Qd(e,n)}function Qh(e,t){var n=0;switch(e.tag){case 13:var o=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:o=e.stateNode;break;default:throw Error(l(314))}o!==null&&o.delete(t),Qd(e,n)}var Kd;Kd=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||nt.current)st=!0;else{if((e.lanes&n)===0&&(t.flags&128)===0)return st=!1,Ph(e,t,n);st=(e.flags&131072)!==0}else st=!1,Ce&&(t.flags&1048576)!==0&&Tc(t,Ho,t.index);switch(t.lanes=0,t.tag){case 2:var o=t.type;rs(e,t),e=t.pendingProps;var i=Xr(t,Ye.current);nn(t,n),i=qi(null,t,o,e,i,n);var a=Yi();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ot(o)?(a=!0,Ao(t)):a=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Wi(t),i.updater=es,t.stateNode=i,i._reactInternals=t,ra(t,o,e,n),t=ia(null,t,o,!0,a,n)):(t.tag=0,Ce&&a&&_i(t),tt(null,t,i,n),t=t.child),t;case 16:o=t.elementType;e:{switch(rs(e,t),e=t.pendingProps,i=o._init,o=i(o._payload),t.type=o,i=t.tag=qh(o),e=Tt(o,e),i){case 0:t=sa(null,t,o,e,n);break e;case 1:t=jd(null,t,o,e,n);break e;case 11:t=fd(null,t,o,e,n);break e;case 14:t=xd(null,t,o,Tt(o.type,e),n);break e}throw Error(l(306,o,""))}return t;case 0:return o=t.type,i=t.pendingProps,i=t.elementType===o?i:Tt(o,i),sa(e,t,o,i,n);case 1:return o=t.type,i=t.pendingProps,i=t.elementType===o?i:Tt(o,i),jd(e,t,o,i,n);case 3:e:{if(wd(t),e===null)throw Error(l(387));o=t.pendingProps,a=t.memoizedState,i=a.element,Bc(e,t),Qo(t,o,null,n);var d=t.memoizedState;if(o=d.element,a.isDehydrated)if(a={element:o,isDehydrated:!1,cache:d.cache,pendingSuspenseBoundaries:d.pendingSuspenseBoundaries,transitions:d.transitions},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){i=sn(Error(l(423)),t),t=Nd(e,t,o,n,i);break e}else if(o!==i){i=sn(Error(l(424)),t),t=Nd(e,t,o,n,i);break e}else for(pt=sr(t.stateNode.containerInfo.firstChild),ut=t,Ce=!0,Ct=null,n=Pc(t,null,o,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(en(),o===i){t=Kt(e,t,n);break e}tt(e,t,o,n)}t=t.child}return t;case 5:return Dc(t),e===null&&Ri(t),o=t.type,i=t.pendingProps,a=e!==null?e.memoizedProps:null,d=i.children,Ci(o,i)?d=null:a!==null&&Ci(o,a)&&(t.flags|=32),yd(e,t),tt(e,t,d,n),t.child;case 6:return e===null&&Ri(t),null;case 13:return bd(e,t,n);case 4:return Ui(t,t.stateNode.containerInfo),o=t.pendingProps,e===null?t.child=tn(t,null,o,n):tt(e,t,o,n),t.child;case 11:return o=t.type,i=t.pendingProps,i=t.elementType===o?i:Tt(o,i),fd(e,t,o,i,n);case 7:return tt(e,t,t.pendingProps,n),t.child;case 8:return tt(e,t,t.pendingProps.children,n),t.child;case 12:return tt(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(o=t.type._context,i=t.pendingProps,a=t.memoizedProps,d=i.value,we($o,o._currentValue),o._currentValue=d,a!==null)if(St(a.value,d)){if(a.children===i.children&&!nt.current){t=Kt(e,t,n);break e}}else for(a=t.child,a!==null&&(a.return=t);a!==null;){var p=a.dependencies;if(p!==null){d=a.child;for(var h=p.firstContext;h!==null;){if(h.context===o){if(a.tag===1){h=Qt(-1,n&-n),h.tag=2;var j=a.updateQueue;if(j!==null){j=j.shared;var k=j.pending;k===null?h.next=h:(h.next=k.next,k.next=h),j.pending=h}}a.lanes|=n,h=a.alternate,h!==null&&(h.lanes|=n),Fi(a.return,n,t),p.lanes|=n;break}h=h.next}}else if(a.tag===10)d=a.type===t.type?null:a.child;else if(a.tag===18){if(d=a.return,d===null)throw Error(l(341));d.lanes|=n,p=d.alternate,p!==null&&(p.lanes|=n),Fi(d,n,t),d=a.sibling}else d=a.child;if(d!==null)d.return=a;else for(d=a;d!==null;){if(d===t){d=null;break}if(a=d.sibling,a!==null){a.return=d.return,d=a;break}d=d.return}a=d}tt(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,o=t.pendingProps.children,nn(t,n),i=gt(i),o=o(i),t.flags|=1,tt(e,t,o,n),t.child;case 14:return o=t.type,i=Tt(o,t.pendingProps),i=Tt(o.type,i),xd(e,t,o,i,n);case 15:return gd(e,t,t.type,t.pendingProps,n);case 17:return o=t.type,i=t.pendingProps,i=t.elementType===o?i:Tt(o,i),rs(e,t),t.tag=1,ot(o)?(e=!0,Ao(t)):e=!1,nn(t,n),ld(t,o,i),ra(t,o,i,n),ia(null,t,o,!0,e,n);case 19:return Sd(e,t,n);case 22:return vd(e,t,n)}throw Error(l(156,t.tag))};function qd(e,t){return El(e,t)}function Kh(e,t,n,o){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function jt(e,t,n,o){return new Kh(e,t,n,o)}function Ca(e){return e=e.prototype,!(!e||!e.isReactComponent)}function qh(e){if(typeof e=="function")return Ca(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Ie)return 11;if(e===et)return 14}return 2}function xr(e,t){var n=e.alternate;return n===null?(n=jt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function hs(e,t,n,o,i,a){var d=2;if(o=e,typeof e=="function")Ca(e)&&(d=1);else if(typeof e=="string")d=5;else e:switch(e){case z:return Mr(n.children,i,a,t);case H:d=8,i|=8;break;case ye:return e=jt(12,n,t,i|2),e.elementType=ye,e.lanes=a,e;case Se:return e=jt(13,n,t,i),e.elementType=Se,e.lanes=a,e;case Ke:return e=jt(19,n,t,i),e.elementType=Ke,e.lanes=a,e;case je:return ms(n,i,a,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case _e:d=10;break e;case le:d=9;break e;case Ie:d=11;break e;case et:d=14;break e;case qe:d=16,o=null;break e}throw Error(l(130,e==null?e:typeof e,""))}return t=jt(d,n,t,i),t.elementType=e,t.type=o,t.lanes=a,t}function Mr(e,t,n,o){return e=jt(7,e,o,t),e.lanes=n,e}function ms(e,t,n,o){return e=jt(22,e,o,t),e.elementType=je,e.lanes=n,e.stateNode={isHidden:!1},e}function Ta(e,t,n){return e=jt(6,e,null,t),e.lanes=n,e}function Ea(e,t,n){return t=jt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Yh(e,t,n,o,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ti(0),this.expirationTimes=ti(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ti(0),this.identifierPrefix=o,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function La(e,t,n,o,i,a,d,p,h){return e=new Yh(e,t,n,p,h),t===1?(t=1,a===!0&&(t|=8)):t=0,a=jt(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:o,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Wi(a),e}function Xh(e,t,n){var o=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Q,key:o==null?null:""+o,children:e,containerInfo:t,implementation:n}}function Yd(e){if(!e)return ar;e=e._reactInternals;e:{if(wr(e)!==e||e.tag!==1)throw Error(l(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(ot(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(l(171))}if(e.tag===1){var n=e.type;if(ot(n))return kc(e,n,t)}return t}function Xd(e,t,n,o,i,a,d,p,h){return e=La(n,o,!0,e,i,a,d,p,h),e.context=Yd(null),n=e.current,o=rt(),i=mr(n),a=Qt(o,i),a.callback=t!=null?t:null,dr(n,a,i),e.current.lanes=i,Sn(e,i,o),at(e,o),e}function fs(e,t,n,o){var i=t.current,a=rt(),d=mr(i);return n=Yd(n),t.context===null?t.context=n:t.pendingContext=n,t=Qt(a,d),t.payload={element:e},o=o===void 0?null:o,o!==null&&(t.callback=o),e=dr(i,t,d),e!==null&&(It(e,i,d,a),Go(e,i,d)),d}function xs(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Jd(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Ia(e,t){Jd(e,t),(e=e.alternate)&&Jd(e,t)}function Jh(){return null}var Zd=typeof reportError=="function"?reportError:function(e){console.error(e)};function za(e){this._internalRoot=e}gs.prototype.render=za.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(l(409));fs(e,t,null,null)},gs.prototype.unmount=za.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Ir(function(){fs(null,e,null,null)}),t[Wt]=null}};function gs(e){this._internalRoot=e}gs.prototype.unstable_scheduleHydration=function(e){if(e){var t=Bl();e={blockedOn:null,target:e,priority:t};for(var n=0;n<rr.length&&t!==0&&t<rr[n].priority;n++);rr.splice(n,0,e),n===0&&Dl(e)}};function _a(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function vs(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function eu(){}function Zh(e,t,n,o,i){if(i){if(typeof o=="function"){var a=o;o=function(){var j=xs(d);a.call(j)}}var d=Xd(t,o,e,0,null,!1,!1,"",eu);return e._reactRootContainer=d,e[Wt]=d.current,Dn(e.nodeType===8?e.parentNode:e),Ir(),d}for(;i=e.lastChild;)e.removeChild(i);if(typeof o=="function"){var p=o;o=function(){var j=xs(h);p.call(j)}}var h=La(e,0,!1,null,null,!1,!1,"",eu);return e._reactRootContainer=h,e[Wt]=h.current,Dn(e.nodeType===8?e.parentNode:e),Ir(function(){fs(t,h,n,o)}),h}function ys(e,t,n,o,i){var a=n._reactRootContainer;if(a){var d=a;if(typeof i=="function"){var p=i;i=function(){var h=xs(d);p.call(h)}}fs(t,d,e,i)}else d=Zh(n,t,e,i,o);return xs(d)}Pl=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=kn(t.pendingLanes);n!==0&&(ri(t,n|1),at(t,Me()),(he&6)===0&&(cn=Me()+500,lr()))}break;case 13:Ir(function(){var o=Gt(e,1);if(o!==null){var i=rt();It(o,e,1,i)}}),Ia(e,1)}},ni=function(e){if(e.tag===13){var t=Gt(e,134217728);if(t!==null){var n=rt();It(t,e,134217728,n)}Ia(e,134217728)}},Rl=function(e){if(e.tag===13){var t=mr(e),n=Gt(e,t);if(n!==null){var o=rt();It(n,e,t,o)}Ia(e,t)}},Bl=function(){return ge},Ol=function(e,t){var n=ge;try{return ge=e,t()}finally{ge=n}},qs=function(e,t,n){switch(t){case"input":if(Hs(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var o=n[t];if(o!==e&&o.form===e.form){var i=Bo(o);if(!i)throw Error(l(90));jr(o),Hs(o,i)}}}break;case"textarea":pl(e,n);break;case"select":t=n.value,t!=null&&Dr(e,!!n.multiple,t,!1)}},wl=ba,Nl=Ir;var em={usingClientEntryPoint:!1,Events:[Wn,qr,Bo,yl,jl,ba]},ro={findFiberByHostInstance:Nr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},tm={bundleType:ro.bundleType,version:ro.version,rendererPackageName:ro.rendererPackageName,rendererConfig:ro.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:I.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Cl(e),e===null?null:e.stateNode},findFiberByHostInstance:ro.findFiberByHostInstance||Jh,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__!="undefined"){var js=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!js.isDisabled&&js.supportsFiber)try{go=js.inject(tm),Bt=js}catch{}}return lt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=em,lt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!_a(t))throw Error(l(200));return Xh(e,t,null,n)},lt.createRoot=function(e,t){if(!_a(e))throw Error(l(299));var n=!1,o="",i=Zd;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(o=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=La(e,1,!1,null,null,n,!1,o,i),e[Wt]=t.current,Dn(e.nodeType===8?e.parentNode:e),new za(t)},lt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(l(188)):(e=Object.keys(e).join(","),Error(l(268,e)));return e=Cl(t),e=e===null?null:e.stateNode,e},lt.flushSync=function(e){return Ir(e)},lt.hydrate=function(e,t,n){if(!vs(t))throw Error(l(200));return ys(null,e,t,!0,n)},lt.hydrateRoot=function(e,t,n){if(!_a(e))throw Error(l(405));var o=n!=null&&n.hydratedSources||null,i=!1,a="",d=Zd;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onRecoverableError!==void 0&&(d=n.onRecoverableError)),t=Xd(t,null,e,1,n!=null?n:null,i,!1,a,d),e[Wt]=t.current,Dn(e),o)for(e=0;e<o.length;e++)n=o[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new gs(t)},lt.render=function(e,t,n){if(!vs(t))throw Error(l(200));return ys(null,e,t,!1,n)},lt.unmountComponentAtNode=function(e){if(!vs(e))throw Error(l(40));return e._reactRootContainer?(Ir(function(){ys(null,null,e,!1,function(){e._reactRootContainer=null,e[Wt]=null})}),!0):!1},lt.unstable_batchedUpdates=ba,lt.unstable_renderSubtreeIntoContainer=function(e,t,n,o){if(!vs(n))throw Error(l(200));if(e==null||e._reactInternals===void 0)throw Error(l(38));return ys(e,t,n,!1,o)},lt.version="18.3.1-next-f1338f8080-20240426",lt}var lu;function dm(){if(lu)return Ra.exports;lu=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__=="undefined"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(c){console.error(c)}}return s(),Ra.exports=cm(),Ra.exports}var cu;function um(){if(cu)return ws;cu=1;var s=dm();return ws.createRoot=s.createRoot,ws.hydrateRoot=s.hydrateRoot,ws}var pm=um(),se=Za();const Qe=nm(se);var ct=function(){return ct=Object.assign||function(c){for(var l,u=1,m=arguments.length;u<m;u++){l=arguments[u];for(var g in l)Object.prototype.hasOwnProperty.call(l,g)&&(c[g]=l[g])}return c},ct.apply(this,arguments)};function Es(s,c,l){if(l||arguments.length===2)for(var u=0,m=c.length,g;u<m;u++)(g||!(u in c))&&(g||(g=Array.prototype.slice.call(c,0,u)),g[u]=c[u]);return s.concat(g||Array.prototype.slice.call(c))}var ke="-ms-",io="-moz-",fe="-webkit-",_u="comm",Ps="rule",el="decl",hm="@import",mm="@namespace",Mu="@keyframes",fm="@layer",Pu=Math.abs,tl=String.fromCharCode,$a=Object.assign;function xm(s,c){return De(s,0)^45?(((c<<2^De(s,0))<<2^De(s,1))<<2^De(s,2))<<2^De(s,3):0}function Ru(s){return s.trim()}function Yt(s,c){return(s=c.exec(s))?s[0]:s}function ne(s,c,l){return s.replace(c,l)}function bs(s,c,l){return s.indexOf(c,l)}function De(s,c){return s.charCodeAt(c)|0}function Ar(s,c,l){return s.slice(c,l)}function _t(s){return s.length}function Bu(s){return s.length}function oo(s,c){return c.push(s),s}function gm(s,c){return s.map(c).join("")}function du(s,c){return s.filter(function(l){return!Yt(l,c)})}var Rs=1,pn=1,Ou=0,Nt=0,Be=0,gn="";function Bs(s,c,l,u,m,g,w,E){return{value:s,root:c,parent:l,type:u,props:m,children:g,line:Rs,column:pn,length:w,return:"",siblings:E}}function vr(s,c){return $a(Bs("",null,null,"",null,null,0,s.siblings),s,{length:-s.length},c)}function un(s){for(;s.root;)s=vr(s.root,{children:[s]});oo(s,s.siblings)}function vm(){return Be}function ym(){return Be=Nt>0?De(gn,--Nt):0,pn--,Be===10&&(pn=1,Rs--),Be}function Rt(){return Be=Nt<Ou?De(gn,Nt++):0,pn++,Be===10&&(pn=1,Rs++),Be}function yr(){return De(gn,Nt)}function ks(){return Nt}function Os(s,c){return Ar(gn,s,c)}function lo(s){switch(s){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function jm(s){return Rs=pn=1,Ou=_t(gn=s),Nt=0,[]}function wm(s){return gn="",s}function Aa(s){return Ru(Os(Nt-1,Va(s===91?s+2:s===40?s+1:s)))}function Nm(s){for(;(Be=yr())&&Be<33;)Rt();return lo(s)>2||lo(Be)>3?"":" "}function bm(s,c){for(;--c&&Rt()&&!(Be<48||Be>102||Be>57&&Be<65||Be>70&&Be<97););return Os(s,ks()+(c<6&&yr()==32&&Rt()==32))}function Va(s){for(;Rt();)switch(Be){case s:return Nt;case 34:case 39:s!==34&&s!==39&&Va(Be);break;case 40:s===41&&Va(s);break;case 92:Rt();break}return Nt}function km(s,c){for(;Rt()&&s+Be!==57;)if(s+Be===84&&yr()===47)break;return"/*"+Os(c,Nt-1)+"*"+tl(s===47?s:Rt())}function Sm(s){for(;!lo(yr());)Rt();return Os(s,Nt)}function Cm(s){return wm(Ss("",null,null,null,[""],s=jm(s),0,[0],s))}function Ss(s,c,l,u,m,g,w,E,C){for(var G=0,$=0,F=w,_=0,V=0,O=0,A=1,K=1,ie=1,de=0,ee="",I=m,Z=g,Q=u,z=ee;K;)switch(O=de,de=Rt()){case 40:if(O!=108&&De(z,F-1)==58){bs(z+=ne(Aa(de),"&","&\f"),"&\f",Pu(G?E[G-1]:0))!=-1&&(ie=-1);break}case 34:case 39:case 91:z+=Aa(de);break;case 9:case 10:case 13:case 32:z+=Nm(O);break;case 92:z+=bm(ks()-1,7);continue;case 47:switch(yr()){case 42:case 47:oo(Tm(km(Rt(),ks()),c,l,C),C),(lo(O||1)==5||lo(yr()||1)==5)&&_t(z)&&Ar(z,-1,void 0)!==" "&&(z+=" ");break;default:z+="/"}break;case 123*A:E[G++]=_t(z)*ie;case 125*A:case 59:case 0:switch(de){case 0:case 125:K=0;case 59+$:ie==-1&&(z=ne(z,/\f/g,"")),V>0&&(_t(z)-F||A===0&&O===47)&&oo(V>32?pu(z+";",u,l,F-1,C):pu(ne(z," ","")+";",u,l,F-2,C),C);break;case 59:z+=";";default:if(oo(Q=uu(z,c,l,G,$,m,E,ee,I=[],Z=[],F,g),g),de===123)if($===0)Ss(z,c,Q,Q,I,g,F,E,Z);else{switch(_){case 99:if(De(z,3)===110)break;case 108:if(De(z,2)===97)break;default:$=0;case 100:case 109:case 115:}$?Ss(s,Q,Q,u&&oo(uu(s,Q,Q,0,0,m,E,ee,m,I=[],F,Z),Z),m,Z,F,E,u?I:Z):Ss(z,Q,Q,Q,[""],Z,0,E,Z)}}G=$=V=0,A=ie=1,ee=z="",F=w;break;case 58:F=1+_t(z),V=O;default:if(A<1){if(de==123)--A;else if(de==125&&A++==0&&ym()==125)continue}switch(z+=tl(de),de*A){case 38:ie=$>0?1:(z+="\f",-1);break;case 44:E[G++]=(_t(z)-1)*ie,ie=1;break;case 64:yr()===45&&(z+=Aa(Rt())),_=yr(),$=F=_t(ee=z+=Sm(ks())),de++;break;case 45:O===45&&_t(z)==2&&(A=0)}}return g}function uu(s,c,l,u,m,g,w,E,C,G,$,F){for(var _=m-1,V=m===0?g:[""],O=Bu(V),A=0,K=0,ie=0;A<u;++A)for(var de=0,ee=Ar(s,_+1,_=Pu(K=w[A])),I=s;de<O;++de)(I=Ru(K>0?V[de]+" "+ee:ne(ee,/&\f/g,V[de])))&&(C[ie++]=I);return Bs(s,c,l,m===0?Ps:E,C,G,$,F)}function Tm(s,c,l,u){return Bs(s,c,l,_u,tl(vm()),Ar(s,2,-2),0,u)}function pu(s,c,l,u,m){return Bs(s,c,l,el,Ar(s,0,u),Ar(s,u+1,-1),u,m)}function Au(s,c,l){switch(xm(s,c)){case 5103:return fe+"print-"+s+s;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:case 6391:case 5879:case 5623:case 6135:case 4599:return fe+s+s;case 4855:return fe+s.replace("add","source-over").replace("substract","source-out").replace("intersect","source-in").replace("exclude","xor")+s;case 4789:return io+s+s;case 5349:case 4246:case 4810:case 6968:case 2756:return fe+s+io+s+ke+s+s;case 5936:switch(De(s,c+11)){case 114:return fe+s+ke+ne(s,/[svh]\w+-[tblr]{2}/,"tb")+s;case 108:return fe+s+ke+ne(s,/[svh]\w+-[tblr]{2}/,"tb-rl")+s;case 45:return fe+s+ke+ne(s,/[svh]\w+-[tblr]{2}/,"lr")+s}case 6828:case 4268:case 2903:return fe+s+ke+s+s;case 6165:return fe+s+ke+"flex-"+s+s;case 5187:return fe+s+ne(s,/(\w+).+(:[^]+)/,fe+"box-$1$2"+ke+"flex-$1$2")+s;case 5443:return fe+s+ke+"flex-item-"+ne(s,/flex-|-self/g,"")+(Yt(s,/flex-|baseline/)?"":ke+"grid-row-"+ne(s,/flex-|-self/g,""))+s;case 4675:return fe+s+ke+"flex-line-pack"+ne(s,/align-content|flex-|-self/g,"")+s;case 5548:return fe+s+ke+ne(s,"shrink","negative")+s;case 5292:return fe+s+ke+ne(s,"basis","preferred-size")+s;case 6060:return fe+"box-"+ne(s,"-grow","")+fe+s+ke+ne(s,"grow","positive")+s;case 4554:return fe+ne(s,/([^-])(transform)/g,"$1"+fe+"$2")+s;case 6187:return ne(ne(ne(s,/(zoom-|grab)/,fe+"$1"),/(image-set)/,fe+"$1"),s,"")+s;case 5495:case 3959:return ne(s,/(image-set\([^]*)/,fe+"$1$`$1");case 4968:return ne(ne(s,/(.+:)(flex-)?(.*)/,fe+"box-pack:$3"+ke+"flex-pack:$3"),/space-between/,"justify")+fe+s+s;case 4200:if(!Yt(s,/flex-|baseline/))return ke+"grid-column-align"+Ar(s,c)+s;break;case 2592:case 3360:return ke+ne(s,"template-","")+s;case 4384:case 3616:return l&&l.some(function(u,m){return c=m,Yt(u.props,/grid-\w+-end/)})?~bs(s+(l=l[c].value),"span",0)?s:ke+ne(s,"-start","")+s+ke+"grid-row-span:"+(~bs(l,"span",0)?Yt(l,/\d+/):+Yt(l,/\d+/)-+Yt(s,/\d+/))+";":ke+ne(s,"-start","")+s;case 4896:case 4128:return l&&l.some(function(u){return Yt(u.props,/grid-\w+-start/)})?s:ke+ne(ne(s,"-end","-span"),"span ","")+s;case 4095:case 3583:case 4068:case 2532:return ne(s,/(.+)-inline(.+)/,fe+"$1$2")+s;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(_t(s)-1-c>6)switch(De(s,c+1)){case 109:if(De(s,c+4)!==45)break;case 102:return ne(s,/(.+:)(.+)-([^]+)/,"$1"+fe+"$2-$3$1"+io+(De(s,c+3)==108?"$3":"$2-$3"))+s;case 115:return~bs(s,"stretch",0)?Au(ne(s,"stretch","fill-available"),c,l)+s:s}break;case 5152:case 5920:return ne(s,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(u,m,g,w,E,C,G){return ke+m+":"+g+G+(w?ke+m+"-span:"+(E?C:+C-+g)+G:"")+s});case 4949:if(De(s,c+6)===121)return ne(s,":",":"+fe)+s;break;case 6444:switch(De(s,De(s,14)===45?18:11)){case 120:return ne(s,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+fe+(De(s,14)===45?"inline-":"")+"box$3$1"+fe+"$2$3$1"+ke+"$2box$3")+s;case 100:return ne(s,":",":"+ke)+s}break;case 5719:case 2647:case 2135:case 3927:case 2391:return ne(s,"scroll-","scroll-snap-")+s}return s}function Ls(s,c){for(var l="",u=0;u<s.length;u++)l+=c(s[u],u,s,c)||"";return l}function Em(s,c,l,u){switch(s.type){case fm:if(s.children.length)break;case hm:case mm:case el:return s.return=s.return||s.value;case _u:return"";case Mu:return s.return=s.value+"{"+Ls(s.children,u)+"}";case Ps:if(!_t(s.value=s.props.join(",")))return""}return _t(l=Ls(s.children,u))?s.return=s.value+"{"+l+"}":""}function Lm(s){var c=Bu(s);return function(l,u,m,g){for(var w="",E=0;E<c;E++)w+=s[E](l,u,m,g)||"";return w}}function Im(s){return function(c){c.root||(c=c.return)&&s(c)}}function zm(s,c,l,u){if(s.length>-1&&!s.return)switch(s.type){case el:s.return=Au(s.value,s.length,l);return;case Mu:return Ls([vr(s,{value:ne(s.value,"@","@"+fe)})],u);case Ps:if(s.length)return gm(l=s.props,function(m){switch(Yt(m,u=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":un(vr(s,{props:[ne(m,/:(read-\w+)/,":"+io+"$1")]})),un(vr(s,{props:[m]})),$a(s,{props:du(l,u)});break;case"::placeholder":un(vr(s,{props:[ne(m,/:(plac\w+)/,":"+fe+"input-$1")]})),un(vr(s,{props:[ne(m,/:(plac\w+)/,":"+io+"$1")]})),un(vr(s,{props:[ne(m,/:(plac\w+)/,ke+"input-$1")]})),un(vr(s,{props:[m]})),$a(s,{props:du(l,u)});break}return""})}}var _m={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},mt={},hn=typeof process!="undefined"&&mt!==void 0&&(mt.REACT_APP_SC_ATTR||mt.SC_ATTR)||"data-styled",Du="active",Fu="data-styled-version",As="6.3.10",rl=`/*!sc*/
`,ao=typeof window!="undefined"&&typeof document!="undefined",Mm=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process!="undefined"&&mt!==void 0&&mt.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&mt.REACT_APP_SC_DISABLE_SPEEDY!==""?mt.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&mt.REACT_APP_SC_DISABLE_SPEEDY:typeof process!="undefined"&&mt!==void 0&&mt.SC_DISABLE_SPEEDY!==void 0&&mt.SC_DISABLE_SPEEDY!==""&&mt.SC_DISABLE_SPEEDY!=="false"&&mt.SC_DISABLE_SPEEDY);function po(s){for(var c=[],l=1;l<arguments.length;l++)c[l-1]=arguments[l];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(s," for more information.").concat(c.length>0?" Args: ".concat(c.join(", ")):""))}var Cs=new Map,Is=new Map,Ts=1,so=function(s){if(Cs.has(s))return Cs.get(s);for(;Is.has(Ts);)Ts++;var c=Ts++;return Cs.set(s,c),Is.set(c,s),c},Pm=function(s,c){Ts=c+1,Cs.set(s,c),Is.set(c,s)},nl=Object.freeze([]),mn=Object.freeze({});function Rm(s,c,l){return l===void 0&&(l=mn),s.theme!==l.theme&&s.theme||c||l.theme}var Hu=new Set(["a","abbr","address","area","article","aside","audio","b","bdi","bdo","blockquote","body","button","br","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","main","map","mark","menu","meter","nav","object","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","slot","small","span","strong","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","switch","symbol","text","textPath","tspan","use"]),Bm=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Om=/(^-|-$)/g;function hu(s){return s.replace(Bm,"-").replace(Om,"")}var Am=/(a)(d)/gi,mu=function(s){return String.fromCharCode(s+(s>25?39:97))};function Ga(s){var c,l="";for(c=Math.abs(s);c>52;c=c/52|0)l=mu(c%52)+l;return(mu(c%52)+l).replace(Am,"$1-$2")}var Da,Pr=function(s,c){for(var l=c.length;l;)s=33*s^c.charCodeAt(--l);return s},Wu=function(s){return Pr(5381,s)};function Dm(s){return Ga(Wu(s)>>>0)}function Fm(s){return s.displayName||s.name||"Component"}function Fa(s){return typeof s=="string"&&!0}var Uu=typeof Symbol=="function"&&Symbol.for,$u=Uu?Symbol.for("react.memo"):60115,Hm=Uu?Symbol.for("react.forward_ref"):60112,Wm={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Um={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Vu={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},$m=((Da={})[Hm]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Da[$u]=Vu,Da);function fu(s){return("type"in(c=s)&&c.type.$$typeof)===$u?Vu:"$$typeof"in s?$m[s.$$typeof]:Wm;var c}var Vm=Object.defineProperty,Gm=Object.getOwnPropertyNames,xu=Object.getOwnPropertySymbols,Qm=Object.getOwnPropertyDescriptor,Km=Object.getPrototypeOf,gu=Object.prototype;function Gu(s,c,l){if(typeof c!="string"){if(gu){var u=Km(c);u&&u!==gu&&Gu(s,u,l)}var m=Gm(c);xu&&(m=m.concat(xu(c)));for(var g=fu(s),w=fu(c),E=0;E<m.length;++E){var C=m[E];if(!(C in Um||l&&l[C]||w&&C in w||g&&C in g)){var G=Qm(c,C);try{Vm(s,C,G)}catch{}}}}return s}function fn(s){return typeof s=="function"}function ol(s){return typeof s=="object"&&"styledComponentId"in s}function Br(s,c){return s&&c?"".concat(s," ").concat(c):s||c||""}function vu(s,c){return s.join("")}function co(s){return s!==null&&typeof s=="object"&&s.constructor.name===Object.name&&!("props"in s&&s.$$typeof)}function Qa(s,c,l){if(l===void 0&&(l=!1),!l&&!co(s)&&!Array.isArray(s))return c;if(Array.isArray(c))for(var u=0;u<c.length;u++)s[u]=Qa(s[u],c[u]);else if(co(c))for(var u in c)s[u]=Qa(s[u],c[u]);return s}function sl(s,c){Object.defineProperty(s,"toString",{value:c})}var qm=(function(){function s(c){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=c,this._cGroup=0,this._cIndex=0}return s.prototype.indexOfGroup=function(c){if(c===this._cGroup)return this._cIndex;var l=this._cIndex;if(c>this._cGroup)for(var u=this._cGroup;u<c;u++)l+=this.groupSizes[u];else for(u=this._cGroup-1;u>=c;u--)l-=this.groupSizes[u];return this._cGroup=c,this._cIndex=l,l},s.prototype.insertRules=function(c,l){if(c>=this.groupSizes.length){for(var u=this.groupSizes,m=u.length,g=m;c>=g;)if((g<<=1)<0)throw po(16,"".concat(c));this.groupSizes=new Uint32Array(g),this.groupSizes.set(u),this.length=g;for(var w=m;w<g;w++)this.groupSizes[w]=0}for(var E=this.indexOfGroup(c+1),C=0,G=(w=0,l.length);w<G;w++)this.tag.insertRule(E,l[w])&&(this.groupSizes[c]++,E++,C++);C>0&&this._cGroup>c&&(this._cIndex+=C)},s.prototype.clearGroup=function(c){if(c<this.length){var l=this.groupSizes[c],u=this.indexOfGroup(c),m=u+l;this.groupSizes[c]=0;for(var g=u;g<m;g++)this.tag.deleteRule(u);l>0&&this._cGroup>c&&(this._cIndex-=l)}},s.prototype.getGroup=function(c){var l="";if(c>=this.length||this.groupSizes[c]===0)return l;for(var u=this.groupSizes[c],m=this.indexOfGroup(c),g=m+u,w=m;w<g;w++)l+=this.tag.getRule(w)+rl;return l},s})(),Ym="style[".concat(hn,"][").concat(Fu,'="').concat(As,'"]'),Xm=new RegExp("^".concat(hn,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),yu=function(s){return typeof ShadowRoot!="undefined"&&s instanceof ShadowRoot||"host"in s&&s.nodeType===11},Ka=function(s){if(!s)return document;if(yu(s))return s;if("getRootNode"in s){var c=s.getRootNode();if(yu(c))return c}return document},Jm=function(s,c,l){for(var u,m=l.split(","),g=0,w=m.length;g<w;g++)(u=m[g])&&s.registerName(c,u)},Zm=function(s,c){for(var l,u=((l=c.textContent)!==null&&l!==void 0?l:"").split(rl),m=[],g=0,w=u.length;g<w;g++){var E=u[g].trim();if(E){var C=E.match(Xm);if(C){var G=0|parseInt(C[1],10),$=C[2];G!==0&&(Pm($,G),Jm(s,$,C[3]),s.getTag().insertRules(G,m)),m.length=0}else m.push(E)}}},Ha=function(s){for(var c=Ka(s.options.target).querySelectorAll(Ym),l=0,u=c.length;l<u;l++){var m=c[l];m&&m.getAttribute(hn)!==Du&&(Zm(s,m),m.parentNode&&m.parentNode.removeChild(m))}};function ef(){return typeof __webpack_nonce__!="undefined"?__webpack_nonce__:null}var Qu=function(s){var c=document.head,l=s||c,u=document.createElement("style"),m=(function(E){var C=Array.from(E.querySelectorAll("style[".concat(hn,"]")));return C[C.length-1]})(l),g=m!==void 0?m.nextSibling:null;u.setAttribute(hn,Du),u.setAttribute(Fu,As);var w=ef();return w&&u.setAttribute("nonce",w),l.insertBefore(u,g),u},tf=(function(){function s(c){this.element=Qu(c),this.element.appendChild(document.createTextNode("")),this.sheet=(function(l){var u;if(l.sheet)return l.sheet;for(var m=(u=l.getRootNode().styleSheets)!==null&&u!==void 0?u:document.styleSheets,g=0,w=m.length;g<w;g++){var E=m[g];if(E.ownerNode===l)return E}throw po(17)})(this.element),this.length=0}return s.prototype.insertRule=function(c,l){try{return this.sheet.insertRule(l,c),this.length++,!0}catch{return!1}},s.prototype.deleteRule=function(c){this.sheet.deleteRule(c),this.length--},s.prototype.getRule=function(c){var l=this.sheet.cssRules[c];return l&&l.cssText?l.cssText:""},s})(),rf=(function(){function s(c){this.element=Qu(c),this.nodes=this.element.childNodes,this.length=0}return s.prototype.insertRule=function(c,l){if(c<=this.length&&c>=0){var u=document.createTextNode(l);return this.element.insertBefore(u,this.nodes[c]||null),this.length++,!0}return!1},s.prototype.deleteRule=function(c){this.element.removeChild(this.nodes[c]),this.length--},s.prototype.getRule=function(c){return c<this.length?this.nodes[c].textContent:""},s})(),nf=(function(){function s(c){this.rules=[],this.length=0}return s.prototype.insertRule=function(c,l){return c<=this.length&&(c===this.length?this.rules.push(l):this.rules.splice(c,0,l),this.length++,!0)},s.prototype.deleteRule=function(c){this.rules.splice(c,1),this.length--},s.prototype.getRule=function(c){return c<this.length?this.rules[c]:""},s})(),ju=ao,of={isServer:!ao,useCSSOMInjection:!Mm},Ku=(function(){function s(c,l,u){c===void 0&&(c=mn),l===void 0&&(l={});var m=this;this.options=ct(ct({},of),c),this.gs=l,this.names=new Map(u),this.server=!!c.isServer,!this.server&&ao&&ju&&(ju=!1,Ha(this)),sl(this,function(){return(function(g){for(var w=g.getTag(),E=w.length,C="",G=function(F){var _=(function(ie){return Is.get(ie)})(F);if(_===void 0)return"continue";var V=g.names.get(_);if(V===void 0||!V.size)return"continue";var O=w.getGroup(F);if(O.length===0)return"continue";var A=hn+".g"+F+'[id="'+_+'"]',K="";V.forEach(function(ie){ie.length>0&&(K+=ie+",")}),C+=O+A+'{content:"'+K+'"}'+rl},$=0;$<E;$++)G($);return C})(m)})}return s.registerId=function(c){return so(c)},s.prototype.rehydrate=function(){!this.server&&ao&&Ha(this)},s.prototype.reconstructWithOptions=function(c,l){l===void 0&&(l=!0);var u=new s(ct(ct({},this.options),c),this.gs,l&&this.names||void 0);return!this.server&&ao&&c.target!==this.options.target&&Ka(this.options.target)!==Ka(c.target)&&Ha(u),u},s.prototype.allocateGSInstance=function(c){return this.gs[c]=(this.gs[c]||0)+1},s.prototype.getTag=function(){return this.tag||(this.tag=(c=(function(l){var u=l.useCSSOMInjection,m=l.target;return l.isServer?new nf(m):u?new tf(m):new rf(m)})(this.options),new qm(c)));var c},s.prototype.hasNameForId=function(c,l){var u,m;return(m=(u=this.names.get(c))===null||u===void 0?void 0:u.has(l))!==null&&m!==void 0&&m},s.prototype.registerName=function(c,l){so(c);var u=this.names.get(c);u?u.add(l):this.names.set(c,new Set([l]))},s.prototype.insertRules=function(c,l,u){this.registerName(c,l),this.getTag().insertRules(so(c),u)},s.prototype.clearNames=function(c){this.names.has(c)&&this.names.get(c).clear()},s.prototype.clearRules=function(c){this.getTag().clearGroup(so(c)),this.clearNames(c)},s.prototype.clearTag=function(){this.tag=void 0},s})(),sf=/&/g,Xt=47,Rr=42;function wu(s){if(s.indexOf("}")===-1)return!1;for(var c=s.length,l=0,u=0,m=!1,g=0;g<c;g++){var w=s.charCodeAt(g);if(u!==0||m||w!==Xt||s.charCodeAt(g+1)!==Rr)if(m)w===Rr&&s.charCodeAt(g+1)===Xt&&(m=!1,g++);else if(w!==34&&w!==39||g!==0&&s.charCodeAt(g-1)===92){if(u===0){if(w===123)l++;else if(w===125&&--l<0)return!0}}else u===0?u=w:u===w&&(u=0);else m=!0,g++}return l!==0||u!==0}function qu(s,c){return s.map(function(l){return l.type==="rule"&&(l.value="".concat(c," ").concat(l.value),l.value=l.value.replaceAll(",",",".concat(c," ")),l.props=l.props.map(function(u){return"".concat(c," ").concat(u)})),Array.isArray(l.children)&&l.type!=="@keyframes"&&(l.children=qu(l.children,c)),l})}function af(s){var c,l,u,m=mn,g=m.options,w=g===void 0?mn:g,E=m.plugins,C=E===void 0?nl:E,G=function(O,A,K){return K.startsWith(l)&&K.endsWith(l)&&K.replaceAll(l,"").length>0?".".concat(c):O},$=C.slice();$.push(function(O){O.type===Ps&&O.value.includes("&")&&(u||(u=new RegExp("\\".concat(l,"\\b"),"g")),O.props[0]=O.props[0].replace(sf,l).replace(u,G))}),w.prefix&&$.push(zm),$.push(Em);var F=[],_=Lm($.concat(Im(function(O){return F.push(O)}))),V=function(O,A,K,ie){A===void 0&&(A=""),K===void 0&&(K=""),ie===void 0&&(ie="&"),c=ie,l=A,u=void 0;var de=(function(I){if(!wu(I))return I;for(var Z=I.length,Q="",z=0,H=0,ye=0,_e=!1,le=0;le<Z;le++){var Ie=I.charCodeAt(le);if(ye!==0||_e||Ie!==Xt||I.charCodeAt(le+1)!==Rr)if(_e)Ie===Rr&&I.charCodeAt(le+1)===Xt&&(_e=!1,le++);else if(Ie!==34&&Ie!==39||le!==0&&I.charCodeAt(le-1)===92){if(ye===0)if(Ie===123)H++;else if(Ie===125){if(--H<0){for(var Se=le+1;Se<Z;){var Ke=I.charCodeAt(Se);if(Ke===59||Ke===10)break;Se++}Se<Z&&I.charCodeAt(Se)===59&&Se++,H=0,le=Se-1,z=Se;continue}H===0&&(Q+=I.substring(z,le+1),z=le+1)}else Ie===59&&H===0&&(Q+=I.substring(z,le+1),z=le+1)}else ye===0?ye=Ie:ye===Ie&&(ye=0);else _e=!0,le++}if(z<Z){var et=I.substring(z);wu(et)||(Q+=et)}return Q})((function(I){if(I.indexOf("//")===-1)return I;for(var Z=I.length,Q=[],z=0,H=0,ye=0,_e=0;H<Z;){var le=I.charCodeAt(H);if(le!==34&&le!==39||H!==0&&I.charCodeAt(H-1)===92)if(ye===0)if(le===Xt&&H+1<Z&&I.charCodeAt(H+1)===Rr){for(H+=2;H+1<Z&&(I.charCodeAt(H)!==Rr||I.charCodeAt(H+1)!==Xt);)H++;H+=2}else if(le===40&&H>=3&&(32|I.charCodeAt(H-1))==108&&(32|I.charCodeAt(H-2))==114&&(32|I.charCodeAt(H-3))==117)_e=1,H++;else if(_e>0)le===41?_e--:le===40&&_e++,H++;else if(le===Rr&&H+1<Z&&I.charCodeAt(H+1)===Xt)H>z&&Q.push(I.substring(z,H)),z=H+=2;else if(le===Xt&&H+1<Z&&I.charCodeAt(H+1)===Xt){for(H>z&&Q.push(I.substring(z,H));H<Z&&I.charCodeAt(H)!==10;)H++;z=H}else H++;else H++;else ye===0?ye=le:ye===le&&(ye=0),H++}return z===0?I:(z<Z&&Q.push(I.substring(z)),Q.join(""))})(O)),ee=Cm(K||A?"".concat(K," ").concat(A," { ").concat(de," }"):de);return w.namespace&&(ee=qu(ee,w.namespace)),F=[],Ls(ee,_),F};return V.hash=C.length?C.reduce(function(O,A){return A.name||po(15),Pr(O,A.name)},5381).toString():"",V}var lf=new Ku,qa=af(),Yu=Qe.createContext({shouldForwardProp:void 0,styleSheet:lf,stylis:qa});Yu.Consumer;Qe.createContext(void 0);function Nu(){return Qe.useContext(Yu)}var cf=(function(){function s(c,l){var u=this;this.inject=function(m,g){g===void 0&&(g=qa);var w=u.name+g.hash;m.hasNameForId(u.id,w)||m.insertRules(u.id,w,g(u.rules,w,"@keyframes"))},this.name=c,this.id="sc-keyframes-".concat(c),this.rules=l,sl(this,function(){throw po(12,String(u.name))})}return s.prototype.getName=function(c){return c===void 0&&(c=qa),this.name+c.hash},s})();function df(s,c){return c==null||typeof c=="boolean"||c===""?"":typeof c!="number"||c===0||s in _m||s.startsWith("--")?String(c).trim():"".concat(c,"px")}var uf=function(s){return s>="A"&&s<="Z"};function bu(s){for(var c="",l=0;l<s.length;l++){var u=s[l];if(l===1&&u==="-"&&s[0]==="-")return s;uf(u)?c+="-"+u.toLowerCase():c+=u}return c.startsWith("ms-")?"-"+c:c}var Xu=function(s){return s==null||s===!1||s===""},Ju=function(s){var c=[];for(var l in s){var u=s[l];s.hasOwnProperty(l)&&!Xu(u)&&(Array.isArray(u)&&u.isCss||fn(u)?c.push("".concat(bu(l),":"),u,";"):co(u)?c.push.apply(c,Es(Es(["".concat(l," {")],Ju(u),!1),["}"],!1)):c.push("".concat(bu(l),": ").concat(df(l,u),";")))}return c};function Or(s,c,l,u,m){if(m===void 0&&(m=[]),typeof s=="string")return s&&m.push(s),m;if(Xu(s))return m;if(ol(s))return m.push(".".concat(s.styledComponentId)),m;if(fn(s)){if(!fn(w=s)||w.prototype&&w.prototype.isReactComponent||!c)return m.push(s),m;var g=s(c);return Or(g,c,l,u,m)}var w;if(s instanceof cf)return l?(s.inject(l,u),m.push(s.getName(u))):m.push(s),m;if(co(s)){for(var E=Ju(s),C=0;C<E.length;C++)m.push(E[C]);return m}if(!Array.isArray(s))return m.push(s.toString()),m;for(C=0;C<s.length;C++)Or(s[C],c,l,u,m);return m}function pf(s){for(var c=0;c<s.length;c+=1){var l=s[c];if(fn(l)&&!ol(l))return!1}return!0}var hf=Wu(As),mf=(function(){function s(c,l,u){this.rules=c,this.staticRulesId="",this.isStatic=(u===void 0||u.isStatic)&&pf(c),this.componentId=l,this.baseHash=Pr(hf,l),this.baseStyle=u,Ku.registerId(l)}return s.prototype.generateAndInjectStyles=function(c,l,u){var m=this.baseStyle?this.baseStyle.generateAndInjectStyles(c,l,u).className:"";if(this.isStatic&&!u.hash)if(this.staticRulesId&&l.hasNameForId(this.componentId,this.staticRulesId))m=Br(m,this.staticRulesId);else{var g=vu(Or(this.rules,c,l,u)),w=Ga(Pr(this.baseHash,g)>>>0);if(!l.hasNameForId(this.componentId,w)){var E=u(g,".".concat(w),void 0,this.componentId);l.insertRules(this.componentId,w,E)}m=Br(m,w),this.staticRulesId=w}else{for(var C=Pr(this.baseHash,u.hash),G="",$=0;$<this.rules.length;$++){var F=this.rules[$];if(typeof F=="string")G+=F;else if(F){var _=vu(Or(F,c,l,u));C=Pr(Pr(C,String($)),_),G+=_}}if(G){var V=Ga(C>>>0);if(!l.hasNameForId(this.componentId,V)){var O=u(G,".".concat(V),void 0,this.componentId);l.insertRules(this.componentId,V,O)}m=Br(m,V)}}return{className:m,css:typeof window=="undefined"?l.getTag().getGroup(so(this.componentId)):""}},s})(),Zu=Qe.createContext(void 0);Zu.Consumer;var Wa={};function ff(s,c,l){var u=ol(s),m=s,g=!Fa(s),w=c.attrs,E=w===void 0?nl:w,C=c.componentId,G=C===void 0?(function(I,Z){var Q=typeof I!="string"?"sc":hu(I);Wa[Q]=(Wa[Q]||0)+1;var z="".concat(Q,"-").concat(Dm(As+Q+Wa[Q]));return Z?"".concat(Z,"-").concat(z):z})(c.displayName,c.parentComponentId):C,$=c.displayName,F=$===void 0?(function(I){return Fa(I)?"styled.".concat(I):"Styled(".concat(Fm(I),")")})(s):$,_=c.displayName&&c.componentId?"".concat(hu(c.displayName),"-").concat(c.componentId):c.componentId||G,V=u&&m.attrs?m.attrs.concat(E).filter(Boolean):E,O=c.shouldForwardProp;if(u&&m.shouldForwardProp){var A=m.shouldForwardProp;if(c.shouldForwardProp){var K=c.shouldForwardProp;O=function(I,Z){return A(I,Z)&&K(I,Z)}}else O=A}var ie=new mf(l,_,u?m.componentStyle:void 0);function de(I,Z){return(function(Q,z,H){var ye=Q.attrs,_e=Q.componentStyle,le=Q.defaultProps,Ie=Q.foldedComponentIds,Se=Q.styledComponentId,Ke=Q.target,et=Qe.useContext(Zu),qe=Nu(),je=Q.shouldForwardProp||qe.shouldForwardProp,L=Rm(z,et,le)||mn,U=(function(ae,pe,ue){for(var xe,Te=ct(ct({},pe),{className:void 0,theme:ue}),Jt=0;Jt<ae.length;Jt+=1){var jr=fn(xe=ae[Jt])?xe(Te):xe;for(var bt in jr)bt==="className"?Te.className=Br(Te.className,jr[bt]):bt==="style"?Te.style=ct(ct({},Te.style),jr[bt]):Te[bt]=jr[bt]}return"className"in pe&&typeof pe.className=="string"&&(Te.className=Br(Te.className,pe.className)),Te})(ye,z,L),M=U.as||Ke,x={};for(var N in U)U[N]===void 0||N[0]==="$"||N==="as"||N==="theme"&&U.theme===L||(N==="forwardedAs"?x.as=U.forwardedAs:je&&!je(N,M)||(x[N]=U[N]));var te=(function(ae,pe){var ue=Nu(),xe=ae.generateAndInjectStyles(pe,ue.styleSheet,ue.stylis);return xe})(_e,U),re=te.className,ce=Br(Ie,Se);return re&&(ce+=" "+re),U.className&&(ce+=" "+U.className),x[Fa(M)&&!Hu.has(M)?"class":"className"]=ce,H&&(x.ref=H),se.createElement(M,x)})(ee,I,Z)}de.displayName=F;var ee=Qe.forwardRef(de);return ee.attrs=V,ee.componentStyle=ie,ee.displayName=F,ee.shouldForwardProp=O,ee.foldedComponentIds=u?Br(m.foldedComponentIds,m.styledComponentId):"",ee.styledComponentId=_,ee.target=u?m.target:s,Object.defineProperty(ee,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(I){this._foldedDefaultProps=u?(function(Z){for(var Q=[],z=1;z<arguments.length;z++)Q[z-1]=arguments[z];for(var H=0,ye=Q;H<ye.length;H++)Qa(Z,ye[H],!0);return Z})({},m.defaultProps,I):I}}),sl(ee,function(){return".".concat(ee.styledComponentId)}),g&&Gu(ee,s,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),ee}function ku(s,c){for(var l=[s[0]],u=0,m=c.length;u<m;u+=1)l.push(c[u],s[u+1]);return l}var Su=function(s){return Object.assign(s,{isCss:!0})};function xf(s){for(var c=[],l=1;l<arguments.length;l++)c[l-1]=arguments[l];if(fn(s)||co(s))return Su(Or(ku(nl,Es([s],c,!0))));var u=s;return c.length===0&&u.length===1&&typeof u[0]=="string"?Or(u):Su(Or(ku(u,c)))}function Ya(s,c,l){if(l===void 0&&(l=mn),!c)throw po(1,c);var u=function(m){for(var g=[],w=1;w<arguments.length;w++)g[w-1]=arguments[w];return s(c,l,xf.apply(void 0,Es([m],g,!1)))};return u.attrs=function(m){return Ya(s,c,ct(ct({},l),{attrs:Array.prototype.concat(l.attrs,m).filter(Boolean)}))},u.withConfig=function(m){return Ya(s,c,ct(ct({},l),m))},u}var ep=function(s){return Ya(ff,s)},ve=ep;Hu.forEach(function(s){ve[s]=ep(s)});const Ua={Wrapper:ve.div`
        /* border: 1px solid #f00; */
        height: 100vh;
        overflow: hidden;
        display: flex;
        flex-direction: column;
    `,Header:ve.header`
        /* border: 1px solid #f00; */
        height: 60px;
        flex-shrink: 0;
    `,Main:ve.main`
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

            .contentTopicsLiistWrapper {
                display: flex;
                position: relative;
                flex: 1;

                .mainContent {
                    /* border: 1px solid #f00; */
                    width: 100%;
                    min-height: 100vh;
                }

                .topicsList {
                    border: 1px solid #f00;
                    width: 300px;
                    position: relative;

                    .topicsWrapper {
                        border: 1px solid #f00;
                        height: calc(
                            100vh - 160px
                        ); /* 60px header + 100px top offset */
                        position: sticky;
                        top: 0;
                        overflow-y: auto;
                    }
                }
            }
        }

        .footerWrapper {
            /* border: 1px solid #f00; */
            /* min-height: 300px; */
            flex-shrink: 0;
        }
    `},Cu={Wrapper:ve.header`
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
    `,Main:ve.div`
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
    `},gf="/html-core-notes/images/transparentLogo.png";var tp={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Tu=Qe.createContext&&Qe.createContext(tp),vf=["attr","size","title"];function yf(s,c){if(s==null)return{};var l=jf(s,c),u,m;if(Object.getOwnPropertySymbols){var g=Object.getOwnPropertySymbols(s);for(m=0;m<g.length;m++)u=g[m],!(c.indexOf(u)>=0)&&Object.prototype.propertyIsEnumerable.call(s,u)&&(l[u]=s[u])}return l}function jf(s,c){if(s==null)return{};var l={};for(var u in s)if(Object.prototype.hasOwnProperty.call(s,u)){if(c.indexOf(u)>=0)continue;l[u]=s[u]}return l}function zs(){return zs=Object.assign?Object.assign.bind():function(s){for(var c=1;c<arguments.length;c++){var l=arguments[c];for(var u in l)Object.prototype.hasOwnProperty.call(l,u)&&(s[u]=l[u])}return s},zs.apply(this,arguments)}function Eu(s,c){var l=Object.keys(s);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(s);c&&(u=u.filter(function(m){return Object.getOwnPropertyDescriptor(s,m).enumerable})),l.push.apply(l,u)}return l}function _s(s){for(var c=1;c<arguments.length;c++){var l=arguments[c]!=null?arguments[c]:{};c%2?Eu(Object(l),!0).forEach(function(u){wf(s,u,l[u])}):Object.getOwnPropertyDescriptors?Object.defineProperties(s,Object.getOwnPropertyDescriptors(l)):Eu(Object(l)).forEach(function(u){Object.defineProperty(s,u,Object.getOwnPropertyDescriptor(l,u))})}return s}function wf(s,c,l){return c=Nf(c),c in s?Object.defineProperty(s,c,{value:l,enumerable:!0,configurable:!0,writable:!0}):s[c]=l,s}function Nf(s){var c=bf(s,"string");return typeof c=="symbol"?c:c+""}function bf(s,c){if(typeof s!="object"||!s)return s;var l=s[Symbol.toPrimitive];if(l!==void 0){var u=l.call(s,c);if(typeof u!="object")return u;throw new TypeError("@@toPrimitive must return a primitive value.")}return(c==="string"?String:Number)(s)}function rp(s){return s&&s.map((c,l)=>Qe.createElement(c.tag,_s({key:l},c.attr),rp(c.child)))}function J(s){return c=>Qe.createElement(kf,zs({attr:_s({},s.attr)},c),rp(s.child))}function kf(s){var c=l=>{var{attr:u,size:m,title:g}=s,w=yf(s,vf),E=m||l.size||"1em",C;return l.className&&(C=l.className),s.className&&(C=(C?C+" ":"")+s.className),Qe.createElement("svg",zs({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},l.attr,u,w,{className:C,style:_s(_s({color:s.color||l.color},l.style),s.style),height:E,width:E,xmlns:"http://www.w3.org/2000/svg"}),g&&Qe.createElement("title",null,g),s.children)};return Tu!==void 0?Qe.createElement(Tu.Consumer,null,l=>c(l)):c(tp)}function Sf(s){return J({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"22 12 18 12 15 21 9 3 6 12 2 12"},child:[]}]})(s)}function Ds(s){return J({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"},child:[]},{tag:"line",attr:{x1:"12",y1:"9",x2:"12",y2:"13"},child:[]},{tag:"line",attr:{x1:"12",y1:"17",x2:"12.01",y2:"17"},child:[]}]})(s)}function zt(s){return J({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"},child:[]},{tag:"path",attr:{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"},child:[]}]})(s)}function Cf(s){return J({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"},child:[]},{tag:"polyline",attr:{points:"3.27 6.96 12 12.01 20.73 6.96"},child:[]},{tag:"line",attr:{x1:"12",y1:"22.08",x2:"12",y2:"12"},child:[]}]})(s)}function Pt(s){return J({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14"},child:[]},{tag:"polyline",attr:{points:"22 4 12 14.01 9 11.01"},child:[]}]})(s)}function Tf(s){return J({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"9 11 12 14 22 4"},child:[]},{tag:"path",attr:{d:"M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"},child:[]}]})(s)}function Ef(s){return J({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"20 6 9 17 4 12"},child:[]}]})(s)}function Ue(s){return J({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"6 9 12 15 18 9"},child:[]}]})(s)}function $e(s){return J({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"9 18 15 12 9 6"},child:[]}]})(s)}function Mt(s){return J({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"16 18 22 12 16 6"},child:[]},{tag:"polyline",attr:{points:"8 6 2 12 8 18"},child:[]}]})(s)}function Ht(s){return J({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"9",y:"9",width:"13",height:"13",rx:"2",ry:"2"},child:[]},{tag:"path",attr:{d:"M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"},child:[]}]})(s)}function Lf(s){return J({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"4",y:"4",width:"16",height:"16",rx:"2",ry:"2"},child:[]},{tag:"rect",attr:{x:"9",y:"9",width:"6",height:"6"},child:[]},{tag:"line",attr:{x1:"9",y1:"1",x2:"9",y2:"4"},child:[]},{tag:"line",attr:{x1:"15",y1:"1",x2:"15",y2:"4"},child:[]},{tag:"line",attr:{x1:"9",y1:"20",x2:"9",y2:"23"},child:[]},{tag:"line",attr:{x1:"15",y1:"20",x2:"15",y2:"23"},child:[]},{tag:"line",attr:{x1:"20",y1:"9",x2:"23",y2:"9"},child:[]},{tag:"line",attr:{x1:"20",y1:"14",x2:"23",y2:"14"},child:[]},{tag:"line",attr:{x1:"1",y1:"9",x2:"4",y2:"9"},child:[]},{tag:"line",attr:{x1:"1",y1:"14",x2:"4",y2:"14"},child:[]}]})(s)}function If(s){return J({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"ellipse",attr:{cx:"12",cy:"5",rx:"9",ry:"3"},child:[]},{tag:"path",attr:{d:"M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"},child:[]},{tag:"path",attr:{d:"M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"},child:[]}]})(s)}function zf(s){return J({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 20h9"},child:[]},{tag:"path",attr:{d:"M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"},child:[]}]})(s)}function Ns(s){return J({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"},child:[]},{tag:"polyline",attr:{points:"15 3 21 3 21 9"},child:[]},{tag:"line",attr:{x1:"10",y1:"14",x2:"21",y2:"3"},child:[]}]})(s)}function il(s){return J({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"},child:[]},{tag:"circle",attr:{cx:"12",cy:"12",r:"3"},child:[]}]})(s)}function _f(s){return J({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"},child:[]},{tag:"polyline",attr:{points:"14 2 14 8 20 8"},child:[]},{tag:"line",attr:{x1:"16",y1:"13",x2:"8",y2:"13"},child:[]},{tag:"line",attr:{x1:"16",y1:"17",x2:"8",y2:"17"},child:[]},{tag:"polyline",attr:{points:"10 9 9 9 8 9"},child:[]}]})(s)}function np(s){return J({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"line",attr:{x1:"2",y1:"12",x2:"22",y2:"12"},child:[]},{tag:"path",attr:{d:"M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"},child:[]}]})(s)}function op(s){return J({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"3",y:"3",width:"7",height:"7"},child:[]},{tag:"rect",attr:{x:"14",y:"3",width:"7",height:"7"},child:[]},{tag:"rect",attr:{x:"14",y:"14",width:"7",height:"7"},child:[]},{tag:"rect",attr:{x:"3",y:"14",width:"7",height:"7"},child:[]}]})(s)}function al(s){return J({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"4",y1:"9",x2:"20",y2:"9"},child:[]},{tag:"line",attr:{x1:"4",y1:"15",x2:"20",y2:"15"},child:[]},{tag:"line",attr:{x1:"10",y1:"3",x2:"8",y2:"21"},child:[]},{tag:"line",attr:{x1:"16",y1:"3",x2:"14",y2:"21"},child:[]}]})(s)}function Ms(s){return J({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"3",y:"3",width:"18",height:"18",rx:"2",ry:"2"},child:[]},{tag:"circle",attr:{cx:"8.5",cy:"8.5",r:"1.5"},child:[]},{tag:"polyline",attr:{points:"21 15 16 10 5 21"},child:[]}]})(s)}function wt(s){return J({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"line",attr:{x1:"12",y1:"16",x2:"12",y2:"12"},child:[]},{tag:"line",attr:{x1:"12",y1:"8",x2:"12.01",y2:"8"},child:[]}]})(s)}function xn(s){return J({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"12 2 2 7 12 12 22 7 12 2"},child:[]},{tag:"polyline",attr:{points:"2 17 12 22 22 17"},child:[]},{tag:"polyline",attr:{points:"2 12 12 17 22 12"},child:[]}]})(s)}function Mf(s){return J({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"3",y:"3",width:"18",height:"18",rx:"2",ry:"2"},child:[]},{tag:"line",attr:{x1:"3",y1:"9",x2:"21",y2:"9"},child:[]},{tag:"line",attr:{x1:"9",y1:"21",x2:"9",y2:"9"},child:[]}]})(s)}function Pf(s){return J({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M15 7h3a5 5 0 0 1 5 5 5 5 0 0 1-5 5h-3m-6 0H6a5 5 0 0 1-5-5 5 5 0 0 1 5-5h3"},child:[]},{tag:"line",attr:{x1:"8",y1:"12",x2:"16",y2:"12"},child:[]}]})(s)}function sp(s){return J({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"},child:[]},{tag:"path",attr:{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"},child:[]}]})(s)}function Rf(s){return J({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"8",y1:"6",x2:"21",y2:"6"},child:[]},{tag:"line",attr:{x1:"8",y1:"12",x2:"21",y2:"12"},child:[]},{tag:"line",attr:{x1:"8",y1:"18",x2:"21",y2:"18"},child:[]},{tag:"line",attr:{x1:"3",y1:"6",x2:"3.01",y2:"6"},child:[]},{tag:"line",attr:{x1:"3",y1:"12",x2:"3.01",y2:"12"},child:[]},{tag:"line",attr:{x1:"3",y1:"18",x2:"3.01",y2:"18"},child:[]}]})(s)}function Lu(s){return J({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"3",y:"11",width:"18",height:"11",rx:"2",ry:"2"},child:[]},{tag:"path",attr:{d:"M7 11V7a5 5 0 0 1 10 0v4"},child:[]}]})(s)}function Bf(s){return J({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"},child:[]},{tag:"circle",attr:{cx:"12",cy:"10",r:"3"},child:[]}]})(s)}function ip(s){return J({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"},child:[]}]})(s)}function Of(s){return J({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"line",attr:{x1:"8",y1:"12",x2:"16",y2:"12"},child:[]}]})(s)}function Af(s){return J({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"},child:[]}]})(s)}function Df(s){return J({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z"},child:[]},{tag:"path",attr:{d:"M13 13l6 6"},child:[]}]})(s)}function Ff(s){return J({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"3 11 22 2 13 21 11 13 3 11"},child:[]}]})(s)}function Hf(s){return J({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"6",y:"4",width:"4",height:"16"},child:[]},{tag:"rect",attr:{x:"14",y:"4",width:"4",height:"16"},child:[]}]})(s)}function Wf(s){return J({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"5 3 19 12 5 21 5 3"},child:[]}]})(s)}function Uf(s){return J({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"23 4 23 10 17 10"},child:[]},{tag:"path",attr:{d:"M20.49 15a9 9 0 1 1-2.12-9.36L23 10"},child:[]}]})(s)}function $f(s){return J({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"11",cy:"11",r:"8"},child:[]},{tag:"line",attr:{x1:"21",y1:"21",x2:"16.65",y2:"16.65"},child:[]}]})(s)}function Iu(s){return J({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"2",y:"2",width:"20",height:"8",rx:"2",ry:"2"},child:[]},{tag:"rect",attr:{x:"2",y:"14",width:"20",height:"8",rx:"2",ry:"2"},child:[]},{tag:"line",attr:{x1:"6",y1:"6",x2:"6.01",y2:"6"},child:[]},{tag:"line",attr:{x1:"6",y1:"18",x2:"6.01",y2:"18"},child:[]}]})(s)}function Xa(s){return J({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"},child:[]}]})(s)}function Vf(s){return J({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"16 3 21 3 21 8"},child:[]},{tag:"line",attr:{x1:"4",y1:"20",x2:"21",y2:"3"},child:[]},{tag:"polyline",attr:{points:"21 16 21 21 16 21"},child:[]},{tag:"line",attr:{x1:"15",y1:"15",x2:"21",y2:"21"},child:[]},{tag:"line",attr:{x1:"4",y1:"4",x2:"9",y2:"9"},child:[]}]})(s)}function Gf(s){return J({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"5"},child:[]},{tag:"line",attr:{x1:"12",y1:"1",x2:"12",y2:"3"},child:[]},{tag:"line",attr:{x1:"12",y1:"21",x2:"12",y2:"23"},child:[]},{tag:"line",attr:{x1:"4.22",y1:"4.22",x2:"5.64",y2:"5.64"},child:[]},{tag:"line",attr:{x1:"18.36",y1:"18.36",x2:"19.78",y2:"19.78"},child:[]},{tag:"line",attr:{x1:"1",y1:"12",x2:"3",y2:"12"},child:[]},{tag:"line",attr:{x1:"21",y1:"12",x2:"23",y2:"12"},child:[]},{tag:"line",attr:{x1:"4.22",y1:"19.78",x2:"5.64",y2:"18.36"},child:[]},{tag:"line",attr:{x1:"18.36",y1:"5.64",x2:"19.78",y2:"4.22"},child:[]}]})(s)}function Ja(s){return J({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"},child:[]},{tag:"line",attr:{x1:"7",y1:"7",x2:"7.01",y2:"7"},child:[]}]})(s)}function uo(s){return J({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"4 7 4 4 20 4 20 7"},child:[]},{tag:"line",attr:{x1:"9",y1:"20",x2:"15",y2:"20"},child:[]},{tag:"line",attr:{x1:"12",y1:"4",x2:"12",y2:"20"},child:[]}]})(s)}function Qf(s){return J({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"18",y1:"6",x2:"6",y2:"18"},child:[]},{tag:"line",attr:{x1:"6",y1:"6",x2:"18",y2:"18"},child:[]}]})(s)}const Kf=()=>{const[s,c]=se.useState(!1),[l,u]=se.useState("dark");se.useEffect(()=>{const E=localStorage.getItem("app-theme")||"dark";u(E),E==="light"?document.documentElement.setAttribute("data-theme","light"):document.documentElement.removeAttribute("data-theme")},[]),se.useEffect(()=>{l==="light"?document.documentElement.setAttribute("data-theme","light"):document.documentElement.removeAttribute("data-theme"),localStorage.setItem("app-theme",l)},[l]);const m=se.useMemo(()=>l==="light"?"dark":"light",[l]),g=()=>{u(m)};return r.jsx(Cu.Wrapper,{children:r.jsx(Cu.Main,{children:r.jsxs("div",{className:"logoNameThemeToggleWrapper",children:[r.jsxs("div",{className:"logoNameWrapper",children:[r.jsxs("div",{className:"logoWrapper",children:[!s&&r.jsx("div",{className:"logoSkeleton"}),r.jsx("img",{src:gf,alt:"html-core-notes",onLoad:()=>c(!0),style:{opacity:s?1:0}})]}),r.jsxs("div",{className:"nameWrapper",children:[r.jsx("div",{className:"title",children:"html-core-notes"}),r.jsx("div",{className:"subTitle",children:"At-a-glance HTML revision"})]})]}),r.jsxs("button",{type:"button",className:"themeToggleBtn",onClick:g,"aria-label":`Switch to ${m} theme`,title:`Switch to ${m}`,children:[r.jsx("span",{className:"icon",children:l==="light"?r.jsx(Af,{}):r.jsx(Gf,{})}),r.jsx("span",{className:"label",children:l==="light"?"Light":"Dark"})]})]})})})},qf={Wrapper:ve.footer`
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px;
        padding: 15px;
        border-top: 1px solid var(--color-border);

        font-size: 12px;
        color: var(--color-text-muted);

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
    `},Yf=()=>r.jsxs(qf.Wrapper,{children:[r.jsxs("div",{className:"left",children:["© ",new Date().getFullYear()," | All rights reserved"]}),r.jsxs("div",{className:"right",children:["By ",r.jsx("a",{href:"https://www.ashishranjan.net",target:"_blank",rel:"noopener noreferrer",children:"Ashish Ranjan"})]})]}),zu={Wrapper:ve.section`
        width: 100%;
        padding: 60px 20px;
        display: flex;
        justify-content: center;
    `,Content:ve.div`
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
    `},Xf=()=>{const s="2026-02-19T12:56:14.722Z",c=new Date(s).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"2-digit"});return r.jsx(zu.Wrapper,{children:r.jsxs(zu.Content,{children:[r.jsx("h2",{className:"heading",children:"About HTML"}),r.jsx("p",{children:"HTML stands for HyperText Markup Language. It is the structural foundation of the web. Every website, application, and interface you see begins with HTML. It defines structure and meaning, not styling or behavior. Headings, paragraphs, lists, forms, tables, media, and semantic regions are all described using HTML."}),r.jsx("p",{children:"A strong understanding of HTML makes CSS cleaner and JavaScript more predictable. Good HTML improves accessibility, performance, SEO, and maintainability. It is not just markup. It is the logical blueprint of every web interface."}),r.jsx("p",{children:"The html-core-notes project is designed as a focused revision system. It removes noise and organizes concepts in a structured and practical way. The goal is fast recall, semantic clarity, and strong fundamentals."}),r.jsxs("div",{className:"meta",children:[r.jsx("span",{className:"metaLabel",children:"Last updated:"}),r.jsx("span",{className:"metaValue",children:c})]})]})})},Jf={Wrapper:ve.section`
        width: 100%;
        display: flex;
        justify-content: center;
        padding: 34px 18px;

        .container {
            width: 100%;
            max-width: 1200px;
        }

        .top {
            background: linear-gradient(
                180deg,
                var(--color-surface),
                var(--color-surface-2)
            );
            border: 1px solid var(--color-border);
            border-radius: 18px;
            padding: 22px;
            box-shadow: 0 12px 30px var(--color-shadow);
        }

        .titleRow {
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
            gap: 14px;
        }

        .title {
            font-size: 28px;
            letter-spacing: 0.2px;
            margin: 0;
        }

        .chips {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
            align-items: center;
            justify-content: flex-end;
        }

        .chip {
            font-size: 12px;
            color: var(--color-text-secondary);
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 999px;
            padding: 7px 10px;
            white-space: nowrap;
        }

        .sub {
            margin-top: 10px;
            max-width: 900px;
        }

        .controls {
            margin-top: 16px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 14px;
            flex-wrap: wrap;
        }

        .search {
            flex: 1;
            min-width: 260px;
            display: flex;
            align-items: center;
            gap: 10px;
            background: var(--color-bg);
            border: 1px solid var(--color-border);
            border-radius: 14px;
            padding: 10px 12px;
        }

        .searchIcon {
            display: grid;
            place-items: center;
            color: var(--color-text-muted);
            font-size: 18px;
        }

        .search input {
            width: 100%;
            border: 0;
            outline: none;
            padding: 0;
            background: transparent;
            color: var(--color-text-primary);
        }

        .clearBtn {
            display: grid;
            place-items: center;
            width: 34px;
            height: 34px;
            border-radius: 10px;
            border: 1px solid var(--color-border);
            background: var(--color-surface);
            color: var(--color-text-primary);
        }

        .clearBtn:hover {
            background: var(--color-surface-2);
        }

        .btnRow {
            display: flex;
            gap: 10px;
            align-items: center;
        }

        .btn {
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            color: var(--color-text-primary);
            padding: 10px 12px;
            border-radius: 12px;
            font-weight: 800;
            letter-spacing: 0.2px;
        }

        .btn:hover {
            background: var(--color-surface);
        }

        .list {
            margin-top: 16px;
            display: grid;
            gap: 12px;
        }

        .section {
            border: 1px solid var(--color-border);
            border-radius: 16px;
            overflow: hidden;
            background: var(--color-surface);
            box-shadow: 0 10px 26px var(--color-shadow);
        }

        .sectionHeader {
            width: 100%;
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 14px 14px;
            background: transparent;
            color: var(--color-text-primary);
            text-align: left;
        }

        .sectionHeader:hover {
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
        }

        .secIcon {
            width: 34px;
            height: 34px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            border-radius: 12px;
            background: var(--color-bg);
            font-size: 18px;
            color: var(--color-text-secondary);
        }

        .secTitle {
            font-weight: 900;
            letter-spacing: 0.2px;
            flex: 1;
        }

        .secMeta {
            font-size: 12px;
            color: var(--color-text-muted);
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 999px;
            padding: 7px 10px;
            white-space: nowrap;
        }

        .sectionBody {
            max-height: 0px;
            overflow: hidden;
            transition: max-height 240ms ease;
            border-top: 1px solid var(--color-border);
        }

        .sectionBody.open {
            max-height: 2400px;
        }

        .topic {
            padding: 14px 14px 6px 14px;
        }

        .topic + .topic {
            border-top: 1px dashed var(--color-border-light);
        }

        .topicTitle {
            font-weight: 900;
            letter-spacing: 0.15px;
            margin-bottom: 10px;
        }

        .bullets {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
            padding-bottom: 10px;
        }

        .bullet {
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 999px;
            padding: 7px 10px;
            font-size: 13px;
            color: var(--color-text-secondary);
            line-height: 1.2;
        }

        .empty {
            border: 1px solid var(--color-border);
            background: var(--color-surface);
            border-radius: 16px;
            padding: 22px;
        }

        .emptyTitle {
            font-weight: 900;
            font-size: 18px;
            margin-bottom: 8px;
        }

        .emptySub {
            color: var(--color-text-secondary);
        }

        @media (max-width: 720px) {
            .titleRow {
                flex-direction: column;
                align-items: flex-start;
            }

            .chips {
                justify-content: flex-start;
            }

            .btn {
                padding: 10px 10px;
            }
        }
    `},Zf=()=>{const s=se.useRef(null),[c,l]=se.useState(""),[u,m]=se.useState(()=>new Set),g=se.useMemo(()=>[{key:"foundation",title:"Foundation",icon:r.jsx(xn,{}),items:[{title:"Introduction",sub:["What is HTML","How the web works","Client server model","HTTP basics","Browser parsing pipeline","Rendering flow overview"]},{title:"Basic Document Structure",sub:["Doctype","html element","head and body","lang attribute","dir attribute","Character encoding","Viewport meta","Favicon","Title element"]},{title:"HTML Syntax Rules",sub:["Tags","Elements","Attributes","Boolean attributes","Global attributes","Data attributes","Comments","Case sensitivity","Self closing tags myth","Void elements"]},{title:"Content Model",sub:["Block vs inline","Flow content","Phrasing content","Sectioning content","Heading content","Embedded content","Interactive content","Metadata content","Transparent content model"]}]},{key:"textContent",title:"Text Content",icon:r.jsx(zt,{}),items:[{title:"Headings",sub:["h1 to h6","Document outline theory","Accessibility considerations"]},{title:"Paragraph and Text Semantics",sub:["p","br","hr","pre","blockquote","q","cite","abbr","dfn","time","mark","small","sub","sup","strong","em","b","i","u","s","code","kbd","samp","var","span"]},{title:"Lists",sub:["ul","ol","li","dl","dt","dd","Nested lists","Reversed lists","Start attribute","Type attribute"]}]},{key:"linksNavigation",title:"Links and Navigation",icon:r.jsx(zt,{}),items:[{title:"Anchors",sub:["a tag","href","target","rel","Download attribute","Mailto","Tel links","Hash navigation","External link security"]},{title:"Navigation",sub:["nav","Breadcrumb structure","Pagination patterns"]}]},{key:"mediaEmbedded",title:"Media and Embedded Content",icon:r.jsx(zt,{}),items:[{title:"Images",sub:["img","alt","width and height","Loading attribute","Decoding attribute","Srcset","Sizes","Picture element","Figure and figcaption"]},{title:"Audio and Video",sub:["audio","video","controls","autoplay rules","muted requirement","preload","track","captions and subtitles"]},{title:"Embedded",sub:["iframe","sandbox","allow attribute","embed","object","param"]},{title:"SVG integration",sub:["Inline SVG","SVG vs img","Accessibility in SVG"]},{title:"Canvas",sub:["canvas element basics"]}]},{key:"structureSemantics",title:"Structure and Semantics",icon:r.jsx(zt,{}),items:[{title:"Sectioning Elements",sub:["header","footer","main","section","article","aside"]},{title:"Document Landmarks",sub:["ARIA roles","Semantic mapping"]},{title:"Details and Disclosure",sub:["details","summary"]},{title:"Dialog",sub:["dialog element","Modal behavior"]}]},{key:"tables",title:"Tables",icon:r.jsx(zt,{}),items:[{title:"Table Structure",sub:["table","thead","tbody","tfoot","tr","th","td","scope attribute","caption","colgroup","col","rowspan","colspan","Accessible tables"]}]},{key:"forms",title:"Forms",icon:r.jsx(zt,{}),items:[{title:"Form Basics",sub:["form","action","method","GET vs POST","enctype"]},{title:"Input Types",sub:["text","password","email","url","number","range","search","tel","date","time","datetime-local","month","week","color","file","checkbox","radio","hidden","submit","reset","button"]},{title:"Form Controls",sub:["label","fieldset","legend","textarea","select","option","optgroup","datalist","output","progress","meter"]},{title:"Validation",sub:["required","pattern","minlength","maxlength","step","min","max","Constraint validation API","Custom validation"]},{title:"Accessibility in Forms",sub:["Label association","aria-describedby","Error messaging patterns"]}]},{key:"metadata",title:"Metadata",icon:r.jsx(zt,{}),items:[{title:"Meta Tags",sub:["charset","viewport","description","keywords","author","refresh","http-equiv"]},{title:"Link Element",sub:["Stylesheets","Icons","Preload","Prefetch","Preconnect"]},{title:"Base Element",sub:["Base href","Base target"]}]},{key:"scriptsPerformance",title:"Scripts and Performance",icon:r.jsx(zt,{}),items:[{title:"Script Element",sub:["Inline vs external","Defer","Async","Module","Nomodule","Integrity attribute","crossorigin"]},{title:"Performance Attributes",sub:["Loading lazy","Decoding async","Fetchpriority"]}]},{key:"accessibility",title:"Accessibility",icon:r.jsx(zt,{}),items:[{title:"ARIA Basics",sub:["aria-label","aria-labelledby","aria-describedby","aria-hidden","role attribute"]},{title:"Semantic HTML vs div soup",sub:["Why semantics matter","Screen reader behavior"]},{title:"Tab order",sub:["tabindex","Focus management"]}]},{key:"advanced",title:"Advanced",icon:r.jsx(zt,{}),items:[{title:"Microdata",sub:["itemscope","itemtype","itemprop"]},{title:"Structured Data",sub:["JSON-LD basics"]},{title:"Custom Data Attributes",sub:["data attributes","dataset API concept"]},{title:"Internationalization",sub:["lang switching","dir rtl","Bidi isolation"]},{title:"Deprecated Elements",sub:["font","center","marquee","frameset","applet"]},{title:"HTML Living Standard",sub:["WHATWG vs W3C","Why spec matters"]},{title:"SEO fundamentals",sub:["Semantic headings","Meta description","Open Graph basics"]},{title:"Security basics",sub:["XSS concept","rel noopener","Sandbox iframe"]}]}],[]),w=se.useMemo(()=>{const _=c.trim().toLowerCase();if(!_)return g;const V=O=>String(O).toLowerCase().includes(_);return g.map(O=>{const A=O.items.map(ie=>{const de=V(ie.title),ee=(ie.sub||[]).filter(I=>V(I));return de?ie:ee.length?{...ie,sub:ee}:null}).filter(Boolean);return V(O.title)?O:A.length?{...O,items:A}:null}).filter(Boolean)},[g,c]),E=se.useMemo(()=>{let _=w.length,V=0,O=0;return w.forEach(A=>{V+=A.items.length,A.items.forEach(K=>{O+=(K.sub||[]).length})}),{sections:_,topics:V,bullets:O}},[w]),C=_=>{m(V=>{const O=new Set(V);return O.has(_)?O.delete(_):O.add(_),O})},G=()=>{const _=new Set;w.forEach(V=>_.add(V.key)),m(_)},$=()=>{m(new Set)},F=()=>l("");return r.jsx(Jf.Wrapper,{ref:s,children:r.jsxs("div",{className:"container",children:[r.jsxs("div",{className:"top",children:[r.jsxs("div",{className:"titleRow",children:[r.jsx("h2",{className:"title",children:"HTML Topic Map"}),r.jsxs("div",{className:"chips",children:[r.jsxs("div",{className:"chip",children:[E.sections," sections"]}),r.jsxs("div",{className:"chip",children:[E.topics," topics"]}),r.jsxs("div",{className:"chip",children:[E.bullets," bullets"]})]})]}),r.jsx("p",{className:"sub",children:"A structured list of topics and subtopics for html-core-notes. Use search to filter and expand sections as needed."}),r.jsxs("div",{className:"controls",children:[r.jsxs("div",{className:"search",children:[r.jsx("span",{className:"searchIcon",children:r.jsx($f,{})}),r.jsx("input",{type:"text",value:c,onChange:_=>l(_.target.value),placeholder:"Search topics like 'forms', 'meta', 'iframe'...","aria-label":"Search topics"}),c.trim()&&r.jsx("button",{type:"button",className:"clearBtn",onClick:F,"aria-label":"Clear search",title:"Clear",children:r.jsx(Qf,{})})]}),r.jsxs("div",{className:"btnRow",children:[r.jsx("button",{type:"button",className:"btn",onClick:G,children:"Expand all"}),r.jsx("button",{type:"button",className:"btn",onClick:$,children:"Collapse all"})]})]})]}),r.jsxs("div",{className:"list",children:[w.map(_=>{const V=u.has(_.key);return r.jsxs("div",{className:"section",children:[r.jsxs("button",{type:"button",className:"sectionHeader",onClick:()=>C(_.key),"aria-expanded":V,children:[r.jsx("span",{className:"chev",children:V?r.jsx(Ue,{}):r.jsx($e,{})}),r.jsx("span",{className:"secIcon",children:_.icon}),r.jsx("span",{className:"secTitle",children:_.title}),r.jsxs("span",{className:"secMeta",children:[_.items.length," topics"]})]}),r.jsx("div",{className:`sectionBody ${V?"open":""}`,children:_.items.map((O,A)=>r.jsxs("div",{className:"topic",children:[r.jsx("div",{className:"topicTitle",children:O.title}),r.jsx("ul",{className:"bullets",children:(O.sub||[]).map((K,ie)=>r.jsx("li",{className:"bullet",children:K},`${_.key}-${A}-${ie}`))})]},`${_.key}-${A}`))})]},_.key)}),!w.length&&r.jsxs("div",{className:"empty",children:[r.jsx("div",{className:"emptyTitle",children:"No matches"}),r.jsx("div",{className:"emptySub",children:'Try searching for keywords like "forms", "meta", "table", "aria", or "script".'})]})]})]})})},ex={Wrapper:ve.section`
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
    `},tx=()=>{const[s,c]=se.useState(!1),l=()=>c(u=>!u);return r.jsxs(ex.Wrapper,{className:`topicCard ${s?"open":""}`,children:[r.jsxs("button",{type:"button",className:"topicHeader",onClick:l,"aria-expanded":s,children:[r.jsx("span",{className:"chev",children:s?r.jsx(Ue,{}):r.jsx($e,{})}),r.jsx("span",{className:"icon",children:r.jsx(np,{})}),r.jsx("span",{className:"title",children:"Introduction"}),r.jsx("span",{className:"meta",children:s?"Collapse":"Expand"})]}),r.jsxs("div",{className:`topicBody ${s?"open":""}`,children:[r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"What is HTML"}),r.jsx("p",{className:"p",children:"HTML is the structure of a web page. It tells the browser what the content is and what it means: headings, paragraphs, lists, links, images, forms, and sections. HTML does not handle the final look and feel. CSS handles styling and JavaScript handles behavior."})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"How the web works"}),r.jsx("p",{className:"p",children:"When you open a website, your browser sends a request to a server. The server replies with files like HTML, CSS, and JavaScript. The browser downloads them, parses them, and renders the page."}),r.jsxs("div",{className:"miniGrid",children:[r.jsxs("div",{className:"mini",children:[r.jsx("span",{className:"miniIcon",children:r.jsx(Iu,{})}),r.jsxs("div",{className:"miniText",children:[r.jsx("div",{className:"miniTitle",children:"Client"}),r.jsx("div",{className:"miniSub",children:"Browser"})]})]}),r.jsxs("div",{className:"mini",children:[r.jsx("span",{className:"miniIcon",children:r.jsx(Vf,{})}),r.jsxs("div",{className:"miniText",children:[r.jsx("div",{className:"miniTitle",children:"Request"}),r.jsx("div",{className:"miniSub",children:"HTTP"})]})]}),r.jsxs("div",{className:"mini",children:[r.jsx("span",{className:"miniIcon",children:r.jsx(Iu,{})}),r.jsxs("div",{className:"miniText",children:[r.jsx("div",{className:"miniTitle",children:"Server"}),r.jsx("div",{className:"miniSub",children:"Response"})]})]})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"Client server model"}),r.jsx("p",{className:"p",children:"The browser is the client. It asks for resources. The server stores and returns them. In real apps, servers may also run logic, talk to databases, and generate dynamic HTML."})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"HTTP basics"}),r.jsx("p",{className:"p",children:"HTTP is the protocol used for web communication. Common methods are GET (fetch data) and POST (send data). Status codes like 200 mean success, 404 means not found, and 500 means server error."}),r.jsxs("ul",{className:"bullets",children:[r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),"GET is used to read"]}),r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),"POST is used to send"]}),r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),"Status codes tell what happened"]})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"Browser parsing pipeline"}),r.jsx("p",{className:"p",children:"The browser reads HTML and builds the DOM (Document Object Model). It reads CSS and builds the CSSOM. Then it combines them to compute layout and paint pixels on the screen."})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"Rendering flow overview"}),r.jsx("p",{className:"p",children:"The common flow is: parse HTML into DOM, parse CSS into CSSOM, build render tree, layout, paint, then composite. JavaScript can update the DOM and trigger re-layout or repaint depending on what changed."}),r.jsxs("div",{className:"flow",children:[r.jsxs("div",{className:"flowItem",children:[r.jsx("span",{className:"flowIcon",children:r.jsx(Lf,{})}),"DOM"]}),r.jsx("div",{className:"arrow",children:"→"}),r.jsxs("div",{className:"flowItem",children:[r.jsx("span",{className:"flowIcon",children:r.jsx(Sf,{})}),"Layout"]}),r.jsx("div",{className:"arrow",children:"→"}),r.jsx("div",{className:"flowItem",children:"Paint"}),r.jsx("div",{className:"arrow",children:"→"}),r.jsx("div",{className:"flowItem",children:"Composite"})]})]})]})]})},rx={Wrapper:ve.section`
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
    `},nx=()=>{const[s,c]=se.useState(!1);return r.jsxs(rx.Wrapper,{className:`topicCard ${s?"open":""}`,children:[r.jsxs("button",{type:"button",className:"topicHeader",onClick:()=>c(!s),"aria-expanded":s,children:[r.jsx("span",{className:"chev",children:s?r.jsx(Ue,{}):r.jsx($e,{})}),r.jsx("span",{className:"icon",children:r.jsx(_f,{})}),r.jsx("span",{className:"title",children:"Basic Document Structure"}),r.jsx("span",{className:"meta",children:s?"Collapse":"Expand"})]}),r.jsxs("div",{className:`topicBody ${s?"open":""}`,children:[r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"Doctype"}),r.jsx("p",{className:"p",children:"The doctype tells the browser which version of HTML is being used. In modern HTML, we use a simple declaration:"}),r.jsx("pre",{className:"code",children:"<!DOCTYPE html>"}),r.jsx("p",{className:"p",children:"This ensures the browser renders the page in standards mode instead of compatibility mode."})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"html element"}),r.jsxs("p",{className:"p",children:["The ",r.jsx("strong",{children:"html"})," element is the root element of every HTML document. All other elements must be inside it."]}),r.jsx("pre",{className:"code",children:`<html lang="en">
</html>`})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"head and body"}),r.jsxs("p",{className:"p",children:["The ",r.jsx("strong",{children:"head"})," contains metadata such as title, meta tags, styles, and scripts. It does not display visible content."]}),r.jsxs("p",{className:"p",children:["The ",r.jsx("strong",{children:"body"})," contains all visible content such as headings, paragraphs, images, forms, and more."]}),r.jsx("pre",{className:"code",children:`<head>
  <title>My Page</title>
</head>

<body>
  <h1>Hello World</h1>
</body>`})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"lang attribute"}),r.jsxs("p",{className:"p",children:["The ",r.jsx("strong",{children:"lang"})," attribute defines the language of the document. It helps screen readers and search engines understand the content."]}),r.jsx("pre",{className:"code",children:'<html lang="en">'})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"dir attribute"}),r.jsxs("p",{className:"p",children:["The ",r.jsx("strong",{children:"dir"})," attribute defines text direction. Common values:"]}),r.jsxs("ul",{className:"bullets",children:[r.jsxs("li",{children:[r.jsx("span",{className:"dot"})," ltr - left to right"]}),r.jsxs("li",{children:[r.jsx("span",{className:"dot"})," rtl - right to left"]})]}),r.jsx("pre",{className:"code",children:'<html dir="ltr">'})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"Character encoding"}),r.jsx("p",{className:"p",children:"Character encoding tells the browser how to interpret text characters. UTF-8 is the standard encoding and supports almost all characters."}),r.jsx("pre",{className:"code",children:'<meta charset="UTF-8">'})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"Viewport meta"}),r.jsx("p",{className:"p",children:"The viewport meta tag makes the website responsive on mobile devices by controlling layout scaling."}),r.jsx("pre",{className:"code",children:'<meta name="viewport" content="width=device-width, initial-scale=1.0">'})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"Favicon"}),r.jsx("p",{className:"p",children:"A favicon is the small icon shown in the browser tab. It is added using the link element inside the head."}),r.jsx("pre",{className:"code",children:'<link rel="icon" href="/favicon.ico">'})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"Title element"}),r.jsx("p",{className:"p",children:"The title element defines the text shown in the browser tab and is important for SEO."}),r.jsx("pre",{className:"code",children:"<title>My Website</title>"})]})]})]})},ox={Wrapper:ve.section`
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
    `},sx=()=>{const[s,c]=se.useState(!1),l=()=>c(V=>!V),u=async V=>{try{await navigator.clipboard.writeText(V)}catch{}},m="<h1>Hello</h1>",g='<a href="https://example.com" target="_blank" rel="noopener noreferrer">Visit</a>',w='<input type="checkbox" checked />',E='<div id="card" class="box" data-user-id="42" title="Profile"></div>',C="<!-- This is a comment -->",G='<img src="photo.jpg" alt="A photo" />',$=`<br />
<hr />
<meta charset="utf-8" />`,F=`<input>
<img>
<br>
<meta charset="utf-8">`,_=`<div></div>
<span></span>
<p></p>
<button></button>`;return r.jsxs(ox.Wrapper,{className:`topicCard ${s?"open":""}`,children:[r.jsxs("button",{type:"button",className:"topicHeader",onClick:l,"aria-expanded":s,children:[r.jsx("span",{className:"chev",children:s?r.jsx(Ue,{}):r.jsx($e,{})}),r.jsx("span",{className:"icon",children:r.jsx(Mt,{})}),r.jsx("span",{className:"title",children:"HTML Syntax Rules"}),r.jsx("span",{className:"meta",children:s?"Collapse":"Expand"})]}),r.jsxs("div",{className:`topicBody ${s?"open":""}`,children:[r.jsxs("div",{className:"section",children:[r.jsxs("h3",{className:"h3",children:[r.jsx("span",{className:"h3Icon",children:r.jsx(Ja,{})}),"Tags"]}),r.jsxs("p",{className:"p",children:["A ",r.jsx("span",{className:"mono",children:"tag"})," is the markup inside angle brackets. Most elements use an opening tag and a closing tag."]}),r.jsxs("div",{className:"codeCard",children:[r.jsxs("div",{className:"codeTop",children:[r.jsx("div",{className:"codeTitle",children:"Example"}),r.jsx("button",{type:"button",className:"copyBtn",onClick:()=>u(m),title:"Copy","aria-label":"Copy code",children:r.jsx(Ht,{})})]}),r.jsx("pre",{className:"code",children:r.jsx("code",{children:m})}),r.jsxs("div",{className:"note",children:["Opening tag:"," ",r.jsx("span",{className:"mono",children:"<h1>"})," and closing tag: ",r.jsx("span",{className:"mono",children:"</h1>"})]})]})]}),r.jsxs("div",{className:"section",children:[r.jsxs("h3",{className:"h3",children:[r.jsx("span",{className:"h3Icon",children:r.jsx(al,{})}),"Elements"]}),r.jsxs("p",{className:"p",children:["An ",r.jsx("span",{className:"mono",children:"element"})," is the complete thing: the opening tag, the content, and the closing tag. Some elements are empty (they have no content and no closing tag). Those are called void elements (covered below)."]}),r.jsxs("div",{className:"miniGrid",children:[r.jsxs("div",{className:"mini",children:[r.jsx("div",{className:"miniTitle",children:"Element"}),r.jsx("div",{className:"miniSub",children:"Tag + content + closing tag"})]}),r.jsxs("div",{className:"mini",children:[r.jsx("div",{className:"miniTitle",children:"Tag"}),r.jsx("div",{className:"miniSub",children:"Only the brackets part"})]}),r.jsxs("div",{className:"mini",children:[r.jsx("div",{className:"miniTitle",children:"Void element"}),r.jsx("div",{className:"miniSub",children:"No closing tag"})]})]})]}),r.jsxs("div",{className:"section",children:[r.jsxs("h3",{className:"h3",children:[r.jsx("span",{className:"h3Icon",children:r.jsx(uo,{})}),"Attributes"]}),r.jsxs("p",{className:"p",children:["Attributes add extra information to an element. They live inside the opening tag. Most attributes follow the format ",r.jsx("span",{className:"mono",children:'name="value"'}),"."]}),r.jsxs("div",{className:"codeCard",children:[r.jsxs("div",{className:"codeTop",children:[r.jsx("div",{className:"codeTitle",children:"Example"}),r.jsx("button",{type:"button",className:"copyBtn",onClick:()=>u(g),title:"Copy","aria-label":"Copy code",children:r.jsx(Ht,{})})]}),r.jsx("pre",{className:"code",children:r.jsx("code",{children:g})}),r.jsxs("div",{className:"note",children:[r.jsx("span",{className:"mono",children:"href"}),","," ",r.jsx("span",{className:"mono",children:"target"}),","," ",r.jsx("span",{className:"mono",children:"rel"})," are attributes."]})]})]}),r.jsxs("div",{className:"section",children:[r.jsxs("h3",{className:"h3",children:[r.jsx("span",{className:"h3Icon",children:r.jsx(Tf,{})}),"Boolean attributes"]}),r.jsx("p",{className:"p",children:'Boolean attributes are either "present" or "absent". If present, they mean true. You usually do not write a value.'}),r.jsxs("div",{className:"codeCard",children:[r.jsxs("div",{className:"codeTop",children:[r.jsx("div",{className:"codeTitle",children:"Example"}),r.jsx("button",{type:"button",className:"copyBtn",onClick:()=>u(w),title:"Copy","aria-label":"Copy code",children:r.jsx(Ht,{})})]}),r.jsx("pre",{className:"code",children:r.jsx("code",{children:w})}),r.jsxs("div",{className:"note",children:[r.jsx("span",{className:"mono",children:"checked"}),","," ",r.jsx("span",{className:"mono",children:"disabled"}),","," ",r.jsx("span",{className:"mono",children:"required"}),","," ",r.jsx("span",{className:"mono",children:"readonly"})," are common boolean attributes."]})]})]}),r.jsxs("div",{className:"section",children:[r.jsxs("h3",{className:"h3",children:[r.jsx("span",{className:"h3Icon",children:r.jsx(np,{})}),"Global attributes"]}),r.jsx("p",{className:"p",children:"Global attributes are attributes that work on almost all HTML elements. They are widely used for styling, identification, accessibility, and custom behavior."}),r.jsxs("ul",{className:"bullets",children:[r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),r.jsx("span",{className:"mono",children:"id"})," - unique identifier"]}),r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),r.jsx("span",{className:"mono",children:"class"})," - reusable group name"]}),r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),r.jsx("span",{className:"mono",children:"title"})," - tooltip text"]}),r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),r.jsx("span",{className:"mono",children:"style"})," - inline styles (use rarely)"]}),r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),r.jsx("span",{className:"mono",children:"hidden"})," - hides the element"]}),r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),r.jsx("span",{className:"mono",children:"tabindex"})," - keyboard navigation"]}),r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),r.jsx("span",{className:"mono",children:"role"})," and"," ",r.jsx("span",{className:"mono",children:"aria-*"})," - accessibility"]})]}),r.jsxs("div",{className:"codeCard",children:[r.jsxs("div",{className:"codeTop",children:[r.jsx("div",{className:"codeTitle",children:"Example"}),r.jsx("button",{type:"button",className:"copyBtn",onClick:()=>u(E),title:"Copy","aria-label":"Copy code",children:r.jsx(Ht,{})})]}),r.jsx("pre",{className:"code",children:r.jsx("code",{children:E})})]})]}),r.jsxs("div",{className:"section",children:[r.jsxs("h3",{className:"h3",children:[r.jsx("span",{className:"h3Icon",children:r.jsx(If,{})}),"Data attributes"]}),r.jsxs("p",{className:"p",children:["Data attributes store custom data on elements. They start with ",r.jsx("span",{className:"mono",children:"data-"}),". They are useful when you want to attach extra information to a DOM element without inventing new attributes."]}),r.jsxs("ul",{className:"bullets",children:[r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),"Example:"," ",r.jsx("span",{className:"mono",children:'data-user-id="42"'})]}),r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),"In JavaScript you read them using"," ",r.jsx("span",{className:"mono",children:"element.dataset"})]})]})]}),r.jsxs("div",{className:"section",children:[r.jsxs("h3",{className:"h3",children:[r.jsx("span",{className:"h3Icon",children:r.jsx(ip,{})}),"Comments"]}),r.jsx("p",{className:"p",children:"Comments are ignored by the browser. They are useful for notes, but avoid leaving sensitive information or large blocks of commented code in production."}),r.jsxs("div",{className:"codeCard",children:[r.jsxs("div",{className:"codeTop",children:[r.jsx("div",{className:"codeTitle",children:"Example"}),r.jsx("button",{type:"button",className:"copyBtn",onClick:()=>u(C),title:"Copy","aria-label":"Copy code",children:r.jsx(Ht,{})})]}),r.jsx("pre",{className:"code",children:r.jsx("code",{children:C})})]})]}),r.jsxs("div",{className:"section",children:[r.jsxs("h3",{className:"h3",children:[r.jsx("span",{className:"h3Icon",children:r.jsx(uo,{})}),"Case sensitivity"]}),r.jsxs("p",{className:"p",children:["HTML tags and attribute names are generally"," ",r.jsx("span",{className:"mono",children:"case-insensitive"}),", but the common convention is to write them in lowercase. File paths in URLs can be case-sensitive depending on your server, so keep filenames consistent."]}),r.jsxs("div",{className:"warn",children:[r.jsx("span",{className:"warnIcon",children:r.jsx(Ds,{})}),r.jsx("div",{className:"warnText",children:"Use lowercase for tags and attributes. Keep file paths consistent in case."})]})]}),r.jsxs("div",{className:"section",children:[r.jsxs("h3",{className:"h3",children:[r.jsx("span",{className:"h3Icon",children:r.jsx(Of,{})}),"Self closing tags myth"]}),r.jsxs("p",{className:"p",children:["In HTML, many people write"," ",r.jsx("span",{className:"mono",children:"<div />"}),'. This is not valid for normal elements. Only specific elements are "void" (like ',r.jsx("span",{className:"mono",children:"img"}),","," ",r.jsx("span",{className:"mono",children:"input"}),","," ",r.jsx("span",{className:"mono",children:"br"}),")."]}),r.jsxs("div",{className:"codeCard",children:[r.jsxs("div",{className:"codeTop",children:[r.jsx("div",{className:"codeTitle",children:"Correct examples"}),r.jsx("button",{type:"button",className:"copyBtn",onClick:()=>u(_),title:"Copy","aria-label":"Copy code",children:r.jsx(Ht,{})})]}),r.jsx("pre",{className:"code",children:r.jsx("code",{children:_})}),r.jsx("div",{className:"note",children:"Regular elements need both opening and closing tags."})]})]}),r.jsxs("div",{className:"section",children:[r.jsxs("h3",{className:"h3",children:[r.jsx("span",{className:"h3Icon",children:r.jsx(Ja,{})}),"Void elements"]}),r.jsxs("p",{className:"p",children:["Void elements do not have a closing tag in HTML. You can write them as ",r.jsx("span",{className:"mono",children:"<img>"})," ","or ",r.jsx("span",{className:"mono",children:"<img />"}),". Both are fine in HTML, but the important part is: you do not write a closing tag like"," ",r.jsx("span",{className:"mono",children:"</img>"}),"."]}),r.jsxs("div",{className:"codeCard",children:[r.jsxs("div",{className:"codeTop",children:[r.jsx("div",{className:"codeTitle",children:"Common void elements"}),r.jsx("button",{type:"button",className:"copyBtn",onClick:()=>u(F),title:"Copy","aria-label":"Copy code",children:r.jsx(Ht,{})})]}),r.jsx("pre",{className:"code",children:r.jsx("code",{children:F})})]}),r.jsxs("div",{className:"codeCard",children:[r.jsxs("div",{className:"codeTop",children:[r.jsx("div",{className:"codeTitle",children:"Void example"}),r.jsx("button",{type:"button",className:"copyBtn",onClick:()=>u(G),title:"Copy","aria-label":"Copy code",children:r.jsx(Ht,{})})]}),r.jsx("pre",{className:"code",children:r.jsx("code",{children:G})})]}),r.jsxs("div",{className:"codeCard",children:[r.jsxs("div",{className:"codeTop",children:[r.jsx("div",{className:"codeTitle",children:"More void examples"}),r.jsx("button",{type:"button",className:"copyBtn",onClick:()=>u($),title:"Copy","aria-label":"Copy code",children:r.jsx(Ht,{})})]}),r.jsx("pre",{className:"code",children:r.jsx("code",{children:$})})]}),r.jsxs("div",{className:"note",children:["Common void elements:"," ",r.jsx("span",{className:"mono",children:"area, base, br, col, embed, hr, img, input, link, meta, param, source, track, wbr"})]})]})]})]})},ix={Wrapper:ve.section`
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
    `},ax=()=>{const[s,c]=se.useState(!1),l=()=>c(u=>!u);return r.jsxs(ix.Wrapper,{className:`topicCard ${s?"open":""}`,children:[r.jsxs("button",{type:"button",className:"topicHeader",onClick:l,"aria-expanded":s,children:[r.jsx("span",{className:"chev",children:s?r.jsx(Ue,{}):r.jsx($e,{})}),r.jsx("span",{className:"icon",children:r.jsx(op,{})}),r.jsx("span",{className:"title",children:"Content Model"}),r.jsx("span",{className:"meta",children:s?"Collapse":"Expand"})]}),r.jsxs("div",{className:`topicBody ${s?"open":""}`,children:[r.jsxs("div",{className:"intro",children:[r.jsx("p",{className:"p",children:"The HTML content model is a simple way to understand where an element is allowed to live and what kind of content it can contain. In practice, it helps you avoid invalid nesting and helps you write HTML that is more predictable and accessible."}),r.jsxs("div",{className:"note",children:[r.jsx("span",{className:"noteIcon",children:r.jsx(wt,{})}),r.jsxs("div",{className:"noteText",children:['Modern HTML is not only "block vs inline". HTML has content categories like'," ",r.jsx("span",{className:"mono",children:"flow"}),",",r.jsx("span",{className:"mono",children:"phrasing"}),","," ",r.jsx("span",{className:"mono",children:"sectioning"}),", and"," ",r.jsx("span",{className:"mono",children:"interactive"}),". These categories explain nesting rules more accurately."]})]})]}),r.jsxs("div",{className:"section",children:[r.jsxs("div",{className:"secHead",children:[r.jsx("span",{className:"secIcon",children:r.jsx(Cf,{})}),r.jsx("h3",{className:"h3",children:"Block vs inline"})]}),r.jsx("p",{className:"p",children:"This is the classic beginner idea. A block element usually starts on a new line and takes full width by default. An inline element usually stays within a line of text and only takes the space it needs."}),r.jsxs("div",{className:"cards2",children:[r.jsxs("div",{className:"miniCard",children:[r.jsx("div",{className:"miniTitle",children:"Block examples"}),r.jsx("div",{className:"miniSub",children:"div, p, h1, ul, li, section, article"})]}),r.jsxs("div",{className:"miniCard",children:[r.jsx("div",{className:"miniTitle",children:"Inline examples"}),r.jsx("div",{className:"miniSub",children:"span, a, strong, em, code, img"})]})]}),r.jsxs("div",{className:"warn",children:[r.jsx("span",{className:"warnDot"}),r.jsx("div",{className:"warnText",children:"Block vs inline is useful, but it is not a complete rule set. For correct nesting rules, use the content categories below."})]})]}),r.jsxs("div",{className:"section",children:[r.jsxs("div",{className:"secHead",children:[r.jsx("span",{className:"secIcon",children:r.jsx(xn,{})}),r.jsx("h3",{className:"h3",children:"Flow content"})]}),r.jsxs("p",{className:"p",children:["Flow content is the broad category for most elements you normally place inside the"," ",r.jsx("span",{className:"mono",children:"body"}),". If you are building the structure of a page, you are mostly working with flow content."]}),r.jsxs("ul",{className:"bullets",children:[r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),"Includes paragraphs, headings, lists, sections, images, tables, forms, etc."]}),r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),"Most layout level elements are flow content."]})]})]}),r.jsxs("div",{className:"section",children:[r.jsxs("div",{className:"secHead",children:[r.jsx("span",{className:"secIcon",children:r.jsx(uo,{})}),r.jsx("h3",{className:"h3",children:"Phrasing content"})]}),r.jsx("p",{className:"p",children:'Phrasing content is basically "text level" content. It is what you can put inside a paragraph without breaking its meaning. It usually flows inline with text.'}),r.jsxs("div",{className:"chips",children:[r.jsx("span",{className:"chip",children:"span"}),r.jsx("span",{className:"chip",children:"a"}),r.jsx("span",{className:"chip",children:"strong"}),r.jsx("span",{className:"chip",children:"em"}),r.jsx("span",{className:"chip",children:"code"}),r.jsx("span",{className:"chip",children:"img"}),r.jsx("span",{className:"chip",children:"br"}),r.jsx("span",{className:"chip",children:"small"})]}),r.jsxs("div",{className:"note small",children:[r.jsx("span",{className:"noteIcon",children:r.jsx(wt,{})}),r.jsxs("div",{className:"noteText",children:["A common mistake is placing a block element inside a"," ",r.jsx("span",{className:"mono",children:"p"}),". A paragraph can contain phrasing content, not flow content."]})]})]}),r.jsxs("div",{className:"section",children:[r.jsxs("div",{className:"secHead",children:[r.jsx("span",{className:"secIcon",children:r.jsx(Mf,{})}),r.jsx("h3",{className:"h3",children:"Sectioning content"})]}),r.jsx("p",{className:"p",children:"Sectioning content creates a new section in the document outline. It helps screen readers and search engines understand the structure of your page."}),r.jsxs("div",{className:"cards2",children:[r.jsxs("div",{className:"miniCard",children:[r.jsx("div",{className:"miniTitle",children:"Sectioning elements"}),r.jsx("div",{className:"miniSub",children:"section, article, nav, aside"})]}),r.jsxs("div",{className:"miniCard",children:[r.jsx("div",{className:"miniTitle",children:"Why it matters"}),r.jsx("div",{className:"miniSub",children:"Better structure, accessibility, and meaning"})]})]})]}),r.jsxs("div",{className:"section",children:[r.jsxs("div",{className:"secHead",children:[r.jsx("span",{className:"secIcon",children:r.jsx(al,{})}),r.jsx("h3",{className:"h3",children:"Heading content"})]}),r.jsxs("p",{className:"p",children:["Heading content includes"," ",r.jsx("span",{className:"mono",children:"h1"})," to"," ",r.jsx("span",{className:"mono",children:"h6"}),". Headings label sections and improve navigation for users and assistive technology."]}),r.jsxs("ul",{className:"bullets",children:[r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),"Use headings in order. Do not jump levels randomly."]}),r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),"Prefer one main page title. Other headings represent sub-sections."]})]})]}),r.jsxs("div",{className:"section",children:[r.jsxs("div",{className:"secHead",children:[r.jsx("span",{className:"secIcon",children:r.jsx(Ms,{})}),r.jsx("h3",{className:"h3",children:"Embedded content"})]}),r.jsx("p",{className:"p",children:"Embedded content is content that brings external media or non-text resources into the document."}),r.jsxs("div",{className:"chips",children:[r.jsx("span",{className:"chip",children:"img"}),r.jsx("span",{className:"chip",children:"video"}),r.jsx("span",{className:"chip",children:"audio"}),r.jsx("span",{className:"chip",children:"iframe"}),r.jsx("span",{className:"chip",children:"canvas"}),r.jsx("span",{className:"chip",children:"svg"})]}),r.jsxs("div",{className:"note small",children:[r.jsx("span",{className:"noteIcon",children:r.jsx(wt,{})}),r.jsx("div",{className:"noteText",children:"Embedded content often has extra accessibility requirements, like alt text for images or captions for video."})]})]}),r.jsxs("div",{className:"section",children:[r.jsxs("div",{className:"secHead",children:[r.jsx("span",{className:"secIcon",children:r.jsx(Df,{})}),r.jsx("h3",{className:"h3",children:"Interactive content"})]}),r.jsx("p",{className:"p",children:"Interactive content includes elements that the user can interact with. They usually accept focus, clicks, or keyboard actions."}),r.jsxs("div",{className:"cards2",children:[r.jsxs("div",{className:"miniCard",children:[r.jsx("div",{className:"miniTitle",children:"Examples"}),r.jsx("div",{className:"miniSub",children:"button, a (with href), input, select, textarea, details, summary"})]}),r.jsxs("div",{className:"miniCard",children:[r.jsx("div",{className:"miniTitle",children:"Rule of thumb"}),r.jsx("div",{className:"miniSub",children:"Do not nest interactive elements inside each other"})]})]}),r.jsxs("div",{className:"warn",children:[r.jsx("span",{className:"warnDot"}),r.jsx("div",{className:"warnText",children:"Avoid nesting buttons inside links or links inside buttons. It creates confusing behavior for keyboard and screen reader users."})]})]}),r.jsxs("div",{className:"section",children:[r.jsxs("div",{className:"secHead",children:[r.jsx("span",{className:"secIcon",children:r.jsx(wt,{})}),r.jsx("h3",{className:"h3",children:"Metadata content"})]}),r.jsxs("p",{className:"p",children:["Metadata content is mainly used inside the"," ",r.jsx("span",{className:"mono",children:"head"}),". It provides information about the document rather than visible content."]}),r.jsxs("div",{className:"chips",children:[r.jsx("span",{className:"chip",children:"title"}),r.jsx("span",{className:"chip",children:"meta"}),r.jsx("span",{className:"chip",children:"link"}),r.jsx("span",{className:"chip",children:"style"}),r.jsx("span",{className:"chip",children:"script"}),r.jsx("span",{className:"chip",children:"base"})]}),r.jsxs("div",{className:"note small",children:[r.jsx("span",{className:"noteIcon",children:r.jsx(wt,{})}),r.jsx("div",{className:"noteText",children:"Metadata affects SEO, social previews, and how the page behaves on mobile devices."})]})]}),r.jsxs("div",{className:"section",children:[r.jsxs("div",{className:"secHead",children:[r.jsx("span",{className:"secIcon",children:r.jsx(xn,{})}),r.jsx("h3",{className:"h3",children:"Transparent content model"})]}),r.jsx("p",{className:"p",children:'"Transparent" means the element does not define a fixed content category by itself. Instead, it allows the same content that its parent allows.'}),r.jsxs("div",{className:"cards2",children:[r.jsxs("div",{className:"miniCard",children:[r.jsx("div",{className:"miniTitle",children:"Common example"}),r.jsxs("div",{className:"miniSub",children:[r.jsx("span",{className:"mono",children:"a"})," can wrap text, images, and other phrasing content depending on context"]})]}),r.jsxs("div",{className:"miniCard",children:[r.jsx("div",{className:"miniTitle",children:"Why it exists"}),r.jsx("div",{className:"miniSub",children:"Flexible nesting without breaking semantics"})]})]}),r.jsxs("div",{className:"note small",children:[r.jsx("span",{className:"noteIcon",children:r.jsx(wt,{})}),r.jsx("div",{className:"noteText",children:'Transparent does not mean "anything is allowed". The surrounding context still matters.'})]})]}),r.jsxs("div",{className:"quick",children:[r.jsx("div",{className:"quickTitle",children:"Quick take"}),r.jsx("div",{className:"quickText",children:"Flow is most body content. Phrasing is text level. Sectioning creates meaningful sections. Embedded is media. Interactive is clickable/focusable. Metadata is head info. Transparent depends on context."})]})]})]})},lx={Wrapper:ve.section`
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
    `},cx=()=>{const[s,c]=se.useState(!1),l=()=>c(u=>!u);return r.jsxs(lx.Wrapper,{className:`topicCard ${s?"open":""}`,children:[r.jsxs("button",{type:"button",className:"topicHeader",onClick:l,"aria-expanded":s,children:[r.jsx("span",{className:"chev",children:s?r.jsx(Ue,{}):r.jsx($e,{})}),r.jsx("span",{className:"icon",children:r.jsx(uo,{})}),r.jsx("span",{className:"title",children:"Headings"}),r.jsx("span",{className:"meta",children:s?"Collapse":"Expand"})]}),r.jsxs("div",{className:`topicBody ${s?"open":""}`,children:[r.jsxs("div",{className:"section",children:[r.jsxs("h3",{className:"h3",children:[r.jsx("span",{className:"h3Icon",children:r.jsx(al,{})}),"h1 to h6"]}),r.jsx("p",{className:"p",children:"HTML headings are used to label sections of content. You have six levels: h1 (most important) to h6 (least important). Headings should describe what the section is about, not just make text bigger. Styling is CSS, meaning is HTML."}),r.jsxs("div",{className:"callout good",children:[r.jsxs("div",{className:"calloutTop",children:[r.jsx("span",{className:"calloutIcon",children:r.jsx(Pt,{})}),r.jsx("div",{className:"calloutTitle",children:"Practical rule"})]}),r.jsx("div",{className:"calloutText",children:"Use one clear h1 for the main page title, then use h2 for major sections, h3 for sub-sections, and so on. Do not skip levels just for looks."})]}),r.jsxs("div",{className:"chips",children:[r.jsx("span",{className:"chip",children:"h1: page title"}),r.jsx("span",{className:"chip",children:"h2: section"}),r.jsx("span",{className:"chip",children:"h3: sub-section"}),r.jsx("span",{className:"chip",children:"h4 to h6: deeper nesting"})]}),r.jsxs("div",{className:"example",children:[r.jsx("div",{className:"exampleTitle",children:"Example structure"}),r.jsx("pre",{className:"code",children:`h1: HTML Core Notes
  h2: Text Content
    h3: Headings
    h3: Paragraphs
  h2: Forms
    h3: Inputs
    h3: Validation`})]})]}),r.jsxs("div",{className:"section",children:[r.jsxs("h3",{className:"h3",children:[r.jsx("span",{className:"h3Icon",children:r.jsx(xn,{})}),"Document outline theory"]}),r.jsx("p",{className:"p",children:'People often say "headings create the page outline." The idea is: headings communicate a hierarchy of sections. This helps readers scan the page, and helps assistive technologies understand structure.'}),r.jsx("p",{className:"p",children:"In practice, different browsers and tools have handled outlining differently over time. The safe approach is to treat headings as a clear, human-friendly hierarchy: h1 for the page, then h2, then h3, and so on. If the hierarchy feels logical to a human, it usually works well for accessibility too."}),r.jsxs("div",{className:"callout warn",children:[r.jsxs("div",{className:"calloutTop",children:[r.jsx("span",{className:"calloutIcon",children:r.jsx(Ds,{})}),r.jsx("div",{className:"calloutTitle",children:"Common mistake"})]}),r.jsx("div",{className:"calloutText",children:"Using headings only for styling. For styling, use a class and CSS. For structure, use the correct heading level."})]})]}),r.jsxs("div",{className:"section",children:[r.jsxs("h3",{className:"h3",children:[r.jsx("span",{className:"h3Icon",children:r.jsx(il,{})}),"Accessibility considerations"]}),r.jsx("p",{className:"p",children:"Many screen reader users navigate by headings. They can jump from one heading to the next like a table of contents. Clean heading structure improves navigation, understanding, and speed."}),r.jsxs("ul",{className:"bullets",children:[r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),'Keep heading text meaningful, not vague like "Section"']}),r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),"Do not skip levels (h2 straight to h4) unless the structure truly demands it"]}),r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),"Do not use headings for non-heading UI like buttons or labels"]}),r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),"Use headings to break long pages into scannable parts"]})]}),r.jsxs("div",{className:"quickGrid",children:[r.jsxs("div",{className:"quickCard",children:[r.jsx("div",{className:"quickTitle",children:"Good"}),r.jsx("div",{className:"quickText",children:"h1 Profile, h2 About, h2 Projects, h3 Featured"})]}),r.jsxs("div",{className:"quickCard",children:[r.jsx("div",{className:"quickTitle",children:"Bad"}),r.jsx("div",{className:"quickText",children:"Multiple h1 everywhere, random jumps for styling"})]})]})]}),r.jsxs("div",{className:"section",children:[r.jsxs("h3",{className:"h3",children:[r.jsx("span",{className:"h3Icon",children:r.jsx(xn,{})}),"Transparent content model"]}),r.jsx("p",{className:"p",children:'Some HTML elements are "transparent." That means the element itself does not define a strict content type. Instead, it allows whatever content would be allowed if the element was not there.'}),r.jsx("p",{className:"p",children:"Think of it like a wrapper. For example, the anchor tag a often behaves like this. If you wrap text, it behaves like text. If you wrap a block of content, it behaves like that block, as long as it is valid to do so."}),r.jsxs("div",{className:"callout good",children:[r.jsxs("div",{className:"calloutTop",children:[r.jsx("span",{className:"calloutIcon",children:r.jsx(Pt,{})}),r.jsx("div",{className:"calloutTitle",children:"Why it matters"})]}),r.jsx("div",{className:"calloutText",children:"It helps you build clean clickable regions (like cards) without breaking HTML rules. Still, keep it accessible and avoid wrapping interactive elements inside other interactive elements."})]}),r.jsxs("ul",{className:"bullets",children:[r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),"Transparent elements behave like their children"]}),r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),"Always keep nesting valid (no button inside a)"]}),r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),"Prefer clear semantics over tricky wrappers"]})]})]})]})]})},dx={Wrapper:ve.section`
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
    `},ux=()=>{const[s,c]=se.useState(!1),[l,u]=se.useState(""),m=se.useMemo(()=>[{key:"p",tag:"p",title:"Paragraph",why:"Use for normal paragraphs of text. A paragraph is a block of content.",example:"<p>This is a paragraph. It groups a chunk of related text.</p>"},{key:"br",tag:"br",title:"Line break",why:"Use for a line break inside the same paragraph (poems, addresses). Do not use it to create spacing.",example:"<p>Line one<br />Line two<br />Line three</p>"},{key:"hr",tag:"hr",title:"Thematic break",why:"Use to separate sections or topics. It represents a change in theme, not just a line.",example:`<p>Topic A content...</p>
<hr />
<p>Topic B content...</p>`},{key:"pre",tag:"pre",title:"Preformatted text",why:"Preserves spaces and new lines. Useful for code blocks, ASCII diagrams, formatted text.",example:`<pre>
  Name: Ash
  Role: Developer
  Notes: Keep spacing
</pre>`},{key:"blockquote",tag:"blockquote",title:"Block quote",why:"Use for a longer quotation taken from another source.",example:`<blockquote cite="https://example.com">
  <p>Long quote goes here...</p>
</blockquote>`},{key:"q",tag:"q",title:"Inline quote",why:"Use for short inline quotations. Browsers usually add quotation marks automatically.",example:"<p>He said <q>HTML is structure</q> and moved on.</p>"},{key:"cite",tag:"cite",title:"Citation",why:"Use to reference the title of a work (book, movie, article, paper). Not for the author name.",example:"<p>My favorite web doc is <cite>MDN Web Docs</cite>.</p>"},{key:"abbr",tag:"abbr",title:"Abbreviation",why:"Use for abbreviations and acronyms. Add a title attribute for the full form.",example:`<p><abbr title="HyperText Markup Language">HTML</abbr> is the web's structure.</p>`},{key:"dfn",tag:"dfn",title:"Defining instance",why:"Use when you define a term for the first time in a document or section.",example:"<p><dfn>DOM</dfn> is the Document Object Model.</p>"},{key:"time",tag:"time",title:"Time / date",why:"Use for dates, times, and durations. Add datetime for machine readable value (SEO, parsing).",example:'<p>Last updated: <time datetime="2026-02-19">February 19, 2026</time></p>'},{key:"mark",tag:"mark",title:"Highlight",why:"Use to highlight text that is relevant in the current context (search results, important part).",example:"<p>Remember: <mark>do not use tables for layout</mark>.</p>"},{key:"small",tag:"small",title:"Small print",why:"Use for disclaimers, legal text, side notes. Not for styling. It has meaning.",example:"<p><small>Note: This is a demo project.</small></p>"},{key:"sub",tag:"sub",title:"Subscript",why:"Use for chemical formulas, math subscripts.",example:"<p>Water is H<sub>2</sub>O.</p>"},{key:"sup",tag:"sup",title:"Superscript",why:"Use for exponents, footnote markers.",example:"<p>2<sup>10</sup> equals 1024.</p>"},{key:"strong",tag:"strong",title:"Strong importance",why:"Use to show strong importance, seriousness, or urgency. Not just bold styling.",example:"<p><strong>Warning:</strong> Do not share your password.</p>"},{key:"em",tag:"em",title:"Emphasis",why:"Use to emphasize a word in a sentence (changes meaning). Screen readers also announce emphasis.",example:"<p>I said <em>today</em>, not tomorrow.</p>"},{key:"b",tag:"b",title:"Stylistic bold",why:"Use when you want bold without extra importance. Example: keywords in a summary.",example:"<p>Keywords: <b>HTML</b>, <b>CSS</b>, <b>JS</b></p>"},{key:"i",tag:"i",title:"Stylistic italic",why:"Use for alternate voice, technical terms, or idioms without emphasis meaning.",example:"<p>The term <i>viewport</i> matters on mobile.</p>"},{key:"u",tag:"u",title:"Unarticulated annotation",why:"Rare. Traditionally used for misspellings or annotations. Avoid using for links style.",example:"<p>This word is <u>incorect</u> (misspelled).</p>"},{key:"s",tag:"s",title:"No longer accurate",why:"Use for content that is no longer accurate or relevant (like old pricing).",example:"<p><s>₹999</s> ₹699</p>"},{key:"code",tag:"code",title:"Inline code",why:"Use for short code fragments inline.",example:"<p>Use <code>&lt;main&gt;</code> for the main content.</p>"},{key:"kbd",tag:"kbd",title:"Keyboard input",why:"Use to represent keyboard keys or user input.",example:"<p>Press <kbd>Ctrl</kbd> + <kbd>S</kbd> to save.</p>"},{key:"samp",tag:"samp",title:"Sample output",why:"Use to represent output from a program or system.",example:"<p><samp>Build completed successfully.</samp></p>"},{key:"var",tag:"var",title:"Variable",why:"Use for variables in math or programming context.",example:"<p>Let <var>x</var> be the number of users.</p>"},{key:"span",tag:"span",title:"Generic inline",why:"Use when no semantic tag fits. It is just a hook for styling or JS.",example:'<p>Hello <span class="name">Ash</span></p>'}],[]),g=async(w,E)=>{try{await navigator.clipboard.writeText(w),u(E),window.setTimeout(()=>u(""),900)}catch{}};return r.jsxs(dx.Wrapper,{className:`topicCard ${s?"open":""}`,children:[r.jsxs("button",{type:"button",className:"topicHeader",onClick:()=>c(w=>!w),"aria-expanded":s,children:[r.jsx("span",{className:"chev",children:s?r.jsx(Ue,{}):r.jsx($e,{})}),r.jsx("span",{className:"icon",children:r.jsx(uo,{})}),r.jsx("span",{className:"title",children:"Paragraph and Text Semantics"}),r.jsx("span",{className:"meta",children:s?"Collapse":"Expand"})]}),r.jsxs("div",{className:`topicBody ${s?"open":""}`,children:[r.jsxs("div",{className:"intro",children:[r.jsxs("div",{className:"introTop",children:[r.jsx("div",{className:"introIcon",children:r.jsx(zt,{})}),r.jsxs("div",{className:"introText",children:[r.jsx("div",{className:"introTitle",children:"What this covers"}),r.jsx("div",{className:"introSub",children:"These tags are used to write text properly in HTML. Some tags add meaning (semantics) and help screen readers, SEO, and maintainability."})]})]}),r.jsxs("div",{className:"note",children:[r.jsx("span",{className:"noteIcon",children:r.jsx(wt,{})}),r.jsxs("div",{className:"noteText",children:["Use semantic tags when possible. Use"," ",r.jsx("span",{className:"mono",children:"span"})," only when no semantic tag fits."]})]})]}),r.jsx("div",{className:"grid",children:m.map(w=>r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("div",{className:"tagChip",children:r.jsxs("span",{className:"mono",children:["<",w.tag,">"]})}),r.jsx("button",{type:"button",className:"copyBtn",onClick:()=>g(w.example,w.key),title:"Copy example","aria-label":"Copy example",children:l===w.key?r.jsx(Ef,{}):r.jsx(Ht,{})})]}),r.jsx("div",{className:"cardTitle",children:w.title}),r.jsx("div",{className:"cardWhy",children:w.why}),r.jsx("pre",{className:"code",children:r.jsx("code",{children:w.example})})]},w.key))}),r.jsxs("div",{className:"footerTip",children:["Tip: Use ",r.jsx("span",{className:"mono",children:"strong"})," and"," ",r.jsx("span",{className:"mono",children:"em"})," for meaning. Use"," ",r.jsx("span",{className:"mono",children:"b"})," and"," ",r.jsx("span",{className:"mono",children:"i"})," only for styling without meaning."]})]})]})},px={Wrapper:ve.section`
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
    `},hx=()=>{const[s,c]=se.useState(!1);return r.jsxs(px.Wrapper,{className:s?"open":"",children:[r.jsxs("button",{type:"button",className:"topicHeader",onClick:()=>c(l=>!l),"aria-expanded":s,children:[r.jsx("span",{className:"chev",children:s?r.jsx(Ue,{}):r.jsx($e,{})}),r.jsx("span",{className:"icon",children:r.jsx(Rf,{})}),r.jsx("span",{className:"title",children:"Lists"}),r.jsx("span",{className:"meta",children:"ul, ol, li, dl, attributes"})]}),r.jsxs("div",{className:`topicBody ${s?"open":""}`,children:[r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"What are Lists"}),r.jsx("p",{className:"p",children:"Lists are used to group related items together. They help structure content clearly and improve readability. HTML provides three main types of lists: unordered, ordered, and description lists."})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"Unordered List - ul"}),r.jsx("p",{className:"p",children:"An unordered list displays items with bullets. Order does not matter."}),r.jsx("div",{className:"codeBlock",children:`<ul>
    <li>HTML</li>
    <li>CSS</li>
    <li>JavaScript</li>
</ul>`}),r.jsxs("ul",{className:"demoList",children:[r.jsx("li",{children:"HTML"}),r.jsx("li",{children:"CSS"}),r.jsx("li",{children:"JavaScript"})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"Ordered List - ol"}),r.jsx("p",{className:"p",children:"An ordered list displays items with numbers. Order matters."}),r.jsx("div",{className:"codeBlock",children:`<ol>
    <li>Step One</li>
    <li>Step Two</li>
    <li>Step Three</li>
</ol>`}),r.jsxs("ol",{className:"demoList",children:[r.jsx("li",{children:"Step One"}),r.jsx("li",{children:"Step Two"}),r.jsx("li",{children:"Step Three"})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"Description List - dl, dt, dd"}),r.jsx("p",{className:"p",children:"A description list is used for key value pairs. dt is the term. dd is its description."}),r.jsx("div",{className:"codeBlock",children:`<dl>
    <dt>HTML</dt>
    <dd>Structure of web pages</dd>

    <dt>CSS</dt>
    <dd>Styling of web pages</dd>
</dl>`}),r.jsxs("dl",{className:"demoDl",children:[r.jsx("dt",{children:"HTML"}),r.jsx("dd",{children:"Structure of web pages"}),r.jsx("dt",{children:"CSS"}),r.jsx("dd",{children:"Styling of web pages"})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"Nested Lists"}),r.jsx("p",{className:"p",children:"You can place a list inside another list. This creates hierarchy."}),r.jsx("div",{className:"codeBlock",children:`<ul>
    <li>Frontend
        <ul>
            <li>HTML</li>
            <li>CSS</li>
        </ul>
    </li>
</ul>`}),r.jsx("ul",{className:"demoList",children:r.jsxs("li",{children:["Frontend",r.jsxs("ul",{children:[r.jsx("li",{children:"HTML"}),r.jsx("li",{children:"CSS"})]})]})})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"Ordered List Attributes"}),r.jsxs("div",{className:"subSection",children:[r.jsx("h4",{children:"Reversed"}),r.jsx("div",{className:"codeBlock",children:`<ol reversed>
    <li>Three</li>
    <li>Two</li>
    <li>One</li>
</ol>`}),r.jsxs("ol",{reversed:!0,className:"demoList",children:[r.jsx("li",{children:"Three"}),r.jsx("li",{children:"Two"}),r.jsx("li",{children:"One"})]})]}),r.jsxs("div",{className:"subSection",children:[r.jsx("h4",{children:"Start"}),r.jsx("div",{className:"codeBlock",children:`<ol start="5">
    <li>Item</li>
    <li>Item</li>
</ol>`}),r.jsxs("ol",{start:5,className:"demoList",children:[r.jsx("li",{children:"Item"}),r.jsx("li",{children:"Item"})]})]}),r.jsxs("div",{className:"subSection",children:[r.jsx("h4",{children:"Type"}),r.jsx("div",{className:"codeBlock",children:`<ol type="A">
    <li>Item</li>
    <li>Item</li>
</ol>`}),r.jsxs("ol",{type:"A",className:"demoList",children:[r.jsx("li",{children:"Item"}),r.jsx("li",{children:"Item"})]})]})]})]})]})},mx={Wrapper:ve.section`
        width: 100%;
        border: 1px solid var(--color-border);
        background: var(--color-surface);
        border-radius: 18px;
        overflow: hidden;
        box-shadow: 0 12px 30px var(--color-shadow);

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
    `},fx=()=>{const[s,c]=se.useState(!1);return r.jsxs(mx.Wrapper,{children:[r.jsxs("button",{type:"button",className:"topicHeader",onClick:()=>c(l=>!l),"aria-expanded":s,children:[r.jsx("span",{className:"chev",children:s?r.jsx(Ue,{}):r.jsx($e,{})}),r.jsx("span",{className:"icon",children:r.jsx(Pf,{})}),r.jsx("span",{className:"title",children:"Anchors and Links"}),r.jsx("span",{className:"meta",children:s?"Collapse":"Expand"})]}),r.jsxs("div",{className:`topicBody ${s?"open":""}`,children:[r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"a tag"}),r.jsx("p",{className:"p",children:"The anchor tag is used to create hyperlinks. It allows users to navigate from one page to another, to a section within the same page, or even to another website."}),r.jsx("pre",{className:"code",children:'<a href="https://example.com">Visit Website</a>'})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"href attribute"}),r.jsx("p",{className:"p",children:"The href attribute defines the destination of the link. It can be:"}),r.jsxs("ul",{className:"bullets",children:[r.jsx("li",{children:"Absolute URL: https://google.com"}),r.jsx("li",{children:"Relative URL: /about"}),r.jsx("li",{children:"Same page section: #contact"}),r.jsx("li",{children:"Email: mailto:example@email.com"})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"target attribute"}),r.jsx("p",{className:"p",children:"The target attribute specifies where to open the linked document."}),r.jsx("pre",{className:"code",children:`<a href="https://google.com" target="_blank">
  Open in new tab
</a>`}),r.jsx("p",{className:"p",children:"_blank opens the link in a new tab."})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"rel attribute"}),r.jsx("p",{className:"p",children:'When using target="_blank", you should add rel="noopener noreferrer" for security reasons.'}),r.jsx("pre",{className:"code",children:`<a 
  href="https://example.com" 
  target="_blank" 
  rel="noopener noreferrer"
>
  Safe external link
</a>`})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"Download attribute"}),r.jsx("p",{className:"p",children:"The download attribute tells the browser to download the file instead of opening it."}),r.jsx("pre",{className:"code",children:`<a href="/files/report.pdf" download>
  Download Report
</a>`})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"Mailto"}),r.jsx("p",{className:"p",children:"Used to open the user's email client with a predefined email address."}),r.jsx("pre",{className:"code",children:`<a href="mailto:hello@example.com">
  Send Email
</a>`})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"Tel links"}),r.jsx("p",{className:"p",children:"Tel links are mainly used on mobile devices to start a phone call."}),r.jsx("pre",{className:"code",children:`<a href="tel:+919876543210">
  Call Now
</a>`})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"Hash navigation"}),r.jsx("p",{className:"p",children:"Hash navigation is used to scroll to a specific section of the same page."}),r.jsx("pre",{className:"code",children:`<a href="#contact">Go to Contact</a>

<section id="contact">
  Contact Section
</section>`})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"External link security"}),r.jsx("p",{className:"p",children:'When opening external links in a new tab using target="_blank", always use:'}),r.jsxs("ul",{className:"bullets",children:[r.jsx("li",{children:'rel="noopener"'}),r.jsx("li",{children:'rel="noreferrer"'})]}),r.jsxs("div",{className:"securityBox",children:[r.jsx(Xa,{}),r.jsx("span",{children:"This prevents the new page from accessing your window object and protects against reverse tabnabbing."})]})]})]})]})},xx={Wrapper:ve.section`
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
    `},gx=()=>{const[s,c]=se.useState(!1);return r.jsxs(xx.Wrapper,{className:s?"open":"",children:[r.jsxs("button",{type:"button",className:"topicHeader",onClick:()=>c(l=>!l),"aria-expanded":s,children:[r.jsx("span",{className:"chev",children:s?r.jsx(Ue,{}):r.jsx($e,{})}),r.jsx("span",{className:"icon",children:r.jsx(Ff,{})}),r.jsx("span",{className:"title",children:"Navigation"}),r.jsx("span",{className:"meta",children:s?"Collapse":"Expand"})]}),r.jsxs("div",{className:`topicBody ${s?"open":""}`,children:[r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"nav element"}),r.jsx("p",{className:"p",children:"The nav element represents a section of the page that contains navigation links. It is used for major navigation blocks such as the main menu, footer links, or sidebar navigation."}),r.jsx("p",{className:"p",children:"Not every group of links should be wrapped in nav. Only important navigation areas that help users move across the site should use it."}),r.jsx("div",{className:"codeBlock",children:`<nav>
  <ul>
    <li><a href="/">Home</a></li>
    <li><a href="/about">About</a></li>
    <li><a href="/contact">Contact</a></li>
  </ul>
</nav>`}),r.jsxs("div",{className:"tip",children:[r.jsx(sp,{}),"Use semantic nav instead of a generic div for better accessibility and SEO."]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"Breadcrumb structure"}),r.jsx("p",{className:"p",children:"A breadcrumb shows the user where they are inside the site hierarchy. It usually appears at the top of a page and helps users navigate back to parent sections."}),r.jsxs("div",{className:"breadcrumbExample",children:["Home ",r.jsx("span",{children:"›"})," Blog ",r.jsx("span",{children:"›"})," HTML Guide"]}),r.jsx("div",{className:"codeBlock",children:`<nav aria-label="Breadcrumb">
  <ol>
    <li><a href="/">Home</a></li>
    <li><a href="/blog">Blog</a></li>
    <li aria-current="page">HTML Guide</li>
  </ol>
</nav>`}),r.jsxs("ul",{className:"bullets",children:[r.jsx("li",{children:"Use ordered list for breadcrumbs"}),r.jsx("li",{children:'Use aria-current="page" for current item'}),r.jsx("li",{children:"Helps both users and screen readers"})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"Pagination patterns"}),r.jsx("p",{className:"p",children:"Pagination divides large content into smaller pages. It is commonly used in blogs, product listings, and search results."}),r.jsxs("div",{className:"paginationExample",children:[r.jsx("button",{disabled:!0,children:"Prev"}),r.jsx("button",{className:"active",children:"1"}),r.jsx("button",{children:"2"}),r.jsx("button",{children:"3"}),r.jsx("button",{children:"Next"})]}),r.jsx("div",{className:"codeBlock",children:`<nav aria-label="Pagination">
  <ul>
    <li><a href="?page=1">1</a></li>
    <li><a href="?page=2">2</a></li>
    <li><a href="?page=3">3</a></li>
  </ul>
</nav>`}),r.jsxs("ul",{className:"bullets",children:[r.jsx("li",{children:"Wrap pagination inside nav"}),r.jsx("li",{children:"Use aria-label for clarity"}),r.jsx("li",{children:"Highlight active page"})]})]})]})]})},vx={Wrapper:ve.section`
        width: 100%;
        border: 1px solid var(--color-border);
        background: var(--color-surface);
        border-radius: 18px;
        overflow: hidden;
        box-shadow: 0 12px 30px var(--color-shadow);

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
    `},yx=()=>{const[s,c]=se.useState(!1);return r.jsxs(vx.Wrapper,{className:s?"open":"",children:[r.jsxs("button",{type:"button",className:"topicHeader",onClick:()=>c(l=>!l),"aria-expanded":s,children:[r.jsx("span",{className:"chev",children:s?r.jsx(Ue,{}):r.jsx($e,{})}),r.jsx("span",{className:"icon",children:r.jsx(Ms,{})}),r.jsx("span",{className:"title",children:"Images"}),r.jsx("span",{className:"meta",children:s?"Collapse":"Expand"})]}),r.jsxs("div",{className:`topicBody ${s?"open":""}`,children:[r.jsxs("section",{className:"section",children:[r.jsx("h3",{className:"h3",children:"img"}),r.jsx("p",{className:"p",children:"The img element is used to display an image in HTML. It is a self closing element and must include the src attribute."}),r.jsx("div",{className:"code",children:'<img src="image.jpg" alt="A description" />'})]}),r.jsxs("section",{className:"section",children:[r.jsx("h3",{className:"h3",children:"alt"}),r.jsx("p",{className:"p",children:"The alt attribute provides alternative text for accessibility and screen readers. If the image fails to load, this text is shown instead."}),r.jsxs("ul",{className:"bullets",children:[r.jsxs("li",{children:[r.jsx(Pt,{}),"Always describe the image meaningfully"]}),r.jsxs("li",{children:[r.jsx(Pt,{}),"Use empty alt only for decorative images"]})]}),r.jsx("div",{className:"code",children:'<img src="profile.jpg" alt="Portrait of John Doe" />'})]}),r.jsxs("section",{className:"section",children:[r.jsx("h3",{className:"h3",children:"width and height"}),r.jsx("p",{className:"p",children:"Setting width and height helps the browser reserve space before the image loads. This prevents layout shifting."}),r.jsx("div",{className:"code",children:`<img 
  src="photo.jpg" 
  alt="Landscape" 
  width="800" 
  height="500" 
/>`})]}),r.jsxs("section",{className:"section",children:[r.jsx("h3",{className:"h3",children:"loading attribute"}),r.jsx("p",{className:"p",children:"The loading attribute controls when the image loads. It improves performance."}),r.jsxs("ul",{className:"bullets",children:[r.jsxs("li",{children:[r.jsx(Pt,{}),"lazy loads image only when near viewport"]}),r.jsxs("li",{children:[r.jsx(Pt,{}),"eager loads immediately"]})]}),r.jsx("div",{className:"code",children:'<img src="banner.jpg" alt="Banner" loading="lazy" />'})]}),r.jsxs("section",{className:"section",children:[r.jsx("h3",{className:"h3",children:"decoding attribute"}),r.jsx("p",{className:"p",children:"The decoding attribute tells the browser how to decode the image."}),r.jsxs("ul",{className:"bullets",children:[r.jsxs("li",{children:[r.jsx(Pt,{}),"async allows non blocking decoding"]}),r.jsxs("li",{children:[r.jsx(Pt,{}),"auto lets browser decide"]})]}),r.jsx("div",{className:"code",children:'<img src="hero.jpg" alt="Hero" decoding="async" />'})]}),r.jsxs("section",{className:"section",children:[r.jsx("h3",{className:"h3",children:"srcset"}),r.jsx("p",{className:"p",children:"srcset allows you to provide multiple image sizes for different screen resolutions."}),r.jsx("div",{className:"code",children:`<img 
  src="small.jpg"
  srcset="small.jpg 480w, medium.jpg 800w, large.jpg 1200w"
  alt="Responsive image"
/>`})]}),r.jsxs("section",{className:"section",children:[r.jsx("h3",{className:"h3",children:"sizes"}),r.jsx("p",{className:"p",children:"The sizes attribute works with srcset to define how much screen width the image should occupy."}),r.jsx("div",{className:"code",children:`<img 
  src="small.jpg"
  srcset="small.jpg 480w, large.jpg 1200w"
  sizes="(max-width: 600px) 100vw, 50vw"
  alt="Responsive"
/>`})]}),r.jsxs("section",{className:"section",children:[r.jsx("h3",{className:"h3",children:"picture element"}),r.jsx("p",{className:"p",children:"The picture element allows art direction. You can provide different images for different screen sizes."}),r.jsx("div",{className:"code",children:`<picture>
  <source media="(max-width: 600px)" srcset="mobile.jpg" />
  <source media="(max-width: 1200px)" srcset="tablet.jpg" />
  <img src="desktop.jpg" alt="Responsive image" />
</picture>`})]}),r.jsxs("section",{className:"section",children:[r.jsx("h3",{className:"h3",children:"figure and figcaption"}),r.jsx("p",{className:"p",children:"The figure element groups media content and the figcaption element provides a caption."}),r.jsx("div",{className:"code",children:`<figure>
  <img src="chart.png" alt="Sales chart" />
  <figcaption>Monthly sales performance</figcaption>
</figure>`})]})]})]})},jx={Wrapper:ve.section`
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
    `},wx=()=>{const[s,c]=se.useState(!1),l=()=>c(u=>!u);return r.jsxs(jx.Wrapper,{className:`topicCard ${s?"open":""}`,children:[r.jsxs("button",{type:"button",className:"topicHeader",onClick:l,"aria-expanded":s,children:[r.jsx("span",{className:"chev",children:s?r.jsx(Ue,{}):r.jsx($e,{})}),r.jsx("span",{className:"icon",children:r.jsx(Ns,{})}),r.jsx("span",{className:"title",children:"Embedded"}),r.jsx("span",{className:"meta",children:s?"Collapse":"Expand"})]}),r.jsxs("div",{className:`topicBody ${s?"open":""}`,children:[r.jsxs("div",{className:"section",children:[r.jsxs("h3",{className:"h3",children:[r.jsx("span",{className:"h3Icon",children:r.jsx(wt,{})}),'What does "embedded content" mean']}),r.jsxs("p",{className:"p",children:["Embedded content means showing something inside your page that comes from somewhere else or that is rendered by the browser as a separate embedded document. The most common example is an"," ",r.jsx("span",{className:"mono",children:"iframe"}),", which can show another webpage inside your webpage."]}),r.jsx("p",{className:"p",children:"Use embedded elements when you truly need to display external content like maps, videos, payment widgets, or third party tools. If you control the content, it is often better to build a native UI instead of embedding a full page."})]}),r.jsxs("div",{className:"section",children:[r.jsxs("h3",{className:"h3",children:[r.jsx("span",{className:"h3Icon",children:r.jsx(sp,{})}),"iframe"]}),r.jsxs("p",{className:"p",children:[r.jsx("span",{className:"mono",children:"iframe"})," embeds another HTML page inside your current page. Think of it like a mini browser window inside your layout."]}),r.jsxs("div",{className:"tips",children:[r.jsxs("div",{className:"tip",children:[r.jsx("span",{className:"tipIcon",children:r.jsx(Xa,{})}),r.jsxs("div",{className:"tipText",children:[r.jsx("div",{className:"tipTitle",children:"Security note"}),r.jsxs("div",{className:"tipSub",children:["If you embed a page you do not fully trust, use ",r.jsx("span",{className:"mono",children:"sandbox"})," to restrict it."]})]})]}),r.jsxs("div",{className:"tip",children:[r.jsx("span",{className:"tipIcon",children:r.jsx(Lu,{})}),r.jsxs("div",{className:"tipText",children:[r.jsx("div",{className:"tipTitle",children:"Privacy note"}),r.jsxs("div",{className:"tipSub",children:["Many embeds track users. Only embed trusted sources and prefer minimal permissions in"," ",r.jsx("span",{className:"mono",children:"allow"}),"."]})]})]})]}),r.jsxs("div",{className:"codeBlock",children:[r.jsxs("div",{className:"codeTop",children:[r.jsx("span",{className:"codeIcon",children:r.jsx(Mt,{})}),r.jsx("div",{className:"codeTitle",children:"Basic iframe"})]}),r.jsx("pre",{className:"pre",children:`<iframe
  src="https://example.com"
  title="Example embed"
  width="600"
  height="400"
  loading="lazy"
></iframe>`}),r.jsxs("p",{className:"pNote",children:["Always add a meaningful"," ",r.jsx("span",{className:"mono",children:"title"})," so screen readers can describe what the embedded content is."]})]})]}),r.jsxs("div",{className:"section",children:[r.jsxs("h3",{className:"h3",children:[r.jsx("span",{className:"h3Icon",children:r.jsx(Xa,{})}),"sandbox"]}),r.jsxs("p",{className:"p",children:[r.jsx("span",{className:"mono",children:"sandbox"})," is an iframe attribute that blocks powerful capabilities by default. It turns the embed into a safer, restricted environment. You can selectively allow specific capabilities."]}),r.jsxs("div",{className:"codeBlock",children:[r.jsxs("div",{className:"codeTop",children:[r.jsx("span",{className:"codeIcon",children:r.jsx(Mt,{})}),r.jsx("div",{className:"codeTitle",children:"iframe with sandbox"})]}),r.jsx("pre",{className:"pre",children:`<iframe
  src="https://example.com"
  title="Sandboxed embed"
  sandbox
></iframe>`}),r.jsxs("p",{className:"pNote",children:["Just writing ",r.jsx("span",{className:"mono",children:"sandbox"})," ","without values applies strict restrictions."]})]}),r.jsxs("div",{className:"miniList",children:[r.jsx("div",{className:"miniTitle",children:"Common sandbox tokens"}),r.jsxs("ul",{className:"bullets",children:[r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),r.jsx("span",{className:"mono",children:"allow-scripts"}),": allow running JavaScript inside the iframe"]}),r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),r.jsx("span",{className:"mono",children:"allow-forms"}),": allow form submissions"]}),r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),r.jsx("span",{className:"mono",children:"allow-same-origin"}),": treat the iframe as same origin (be careful)"]}),r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),r.jsx("span",{className:"mono",children:"allow-popups"}),": allow opening new windows or tabs"]})]}),r.jsx("p",{className:"pNote",children:"Beginner rule: start strict, then add only what you absolutely need."})]}),r.jsxs("div",{className:"codeBlock",children:[r.jsxs("div",{className:"codeTop",children:[r.jsx("span",{className:"codeIcon",children:r.jsx(Mt,{})}),r.jsx("div",{className:"codeTitle",children:"selective sandbox permissions"})]}),r.jsx("pre",{className:"pre",children:`<iframe
  src="https://example.com"
  title="Restricted embed"
  sandbox="allow-scripts allow-forms"
  loading="lazy"
></iframe>`})]})]}),r.jsxs("div",{className:"section",children:[r.jsxs("h3",{className:"h3",children:[r.jsx("span",{className:"h3Icon",children:r.jsx(Lu,{})}),"allow attribute"]}),r.jsxs("p",{className:"p",children:[r.jsx("span",{className:"mono",children:"allow"})," controls which browser features the iframe is allowed to use. This is often used for permissions like camera, microphone, fullscreen, autoplay, and more."]}),r.jsxs("div",{className:"codeBlock",children:[r.jsxs("div",{className:"codeTop",children:[r.jsx("span",{className:"codeIcon",children:r.jsx(Mt,{})}),r.jsx("div",{className:"codeTitle",children:"iframe allow example"})]}),r.jsx("pre",{className:"pre",children:`<iframe
  src="https://example.com"
  title="Feature controlled embed"
  allow="fullscreen; clipboard-write"
  sandbox="allow-scripts"
></iframe>`}),r.jsx("p",{className:"pNote",children:"Keep it minimal. If you do not need a feature, do not allow it."})]})]}),r.jsxs("div",{className:"section",children:[r.jsxs("h3",{className:"h3",children:[r.jsx("span",{className:"h3Icon",children:r.jsx(Ns,{})}),"embed"]}),r.jsxs("p",{className:"p",children:[r.jsx("span",{className:"mono",children:"embed"})," is used to embed non-HTML external resources like PDFs or media that the browser can render using built-in support or plugins. In modern web apps, it is less common than"," ",r.jsx("span",{className:"mono",children:"iframe"}),"."]}),r.jsxs("div",{className:"codeBlock",children:[r.jsxs("div",{className:"codeTop",children:[r.jsx("span",{className:"codeIcon",children:r.jsx(Mt,{})}),r.jsx("div",{className:"codeTitle",children:"embed PDF example"})]}),r.jsx("pre",{className:"pre",children:`<embed
  src="/docs/guide.pdf"
  type="application/pdf"
  width="100%"
  height="500"
/>`})]}),r.jsx("p",{className:"pNote",children:"If you need more control and accessibility, consider linking the file and letting the user open it, or use an iframe with a safe viewer."})]}),r.jsxs("div",{className:"section",children:[r.jsxs("h3",{className:"h3",children:[r.jsx("span",{className:"h3Icon",children:r.jsx(Ns,{})}),"object and param"]}),r.jsxs("p",{className:"p",children:[r.jsx("span",{className:"mono",children:"object"})," is a generic container to embed resources like PDFs, images, or other content types. It can also include fallback content if the browser cannot render the resource."]}),r.jsxs("p",{className:"p",children:[r.jsx("span",{className:"mono",children:"param"})," is used inside"," ",r.jsx("span",{className:"mono",children:"object"})," to pass extra configuration to the embedded resource. In modern HTML,",r.jsx("span",{className:"mono",children:"param"})," is rarely needed, but you should recognize it when you see it."]}),r.jsxs("div",{className:"codeBlock",children:[r.jsxs("div",{className:"codeTop",children:[r.jsx("span",{className:"codeIcon",children:r.jsx(Mt,{})}),r.jsx("div",{className:"codeTitle",children:"object with fallback"})]}),r.jsx("pre",{className:"pre",children:`<object
  data="/docs/guide.pdf"
  type="application/pdf"
  width="100%"
  height="500"
>
  <p>
    Your browser cannot display this PDF.
    <a href="/docs/guide.pdf">Download the file</a>.
  </p>
</object>`})]}),r.jsxs("div",{className:"codeBlock",children:[r.jsxs("div",{className:"codeTop",children:[r.jsx("span",{className:"codeIcon",children:r.jsx(Mt,{})}),r.jsx("div",{className:"codeTitle",children:"param example"})]}),r.jsx("pre",{className:"pre",children:`<object data="movie.swf" type="application/x-shockwave-flash" width="400" height="300">
  <param name="quality" value="high" />
  <p>Fallback content goes here</p>
</object>`}),r.jsxs("p",{className:"pNote",children:["The example above is mostly historical. Today you will rarely embed Flash, but you might still see"," ",r.jsx("span",{className:"mono",children:"object"})," and"," ",r.jsx("span",{className:"mono",children:"param"})," in old projects."]})]})]}),r.jsxs("div",{className:"section",children:[r.jsxs("h3",{className:"h3",children:[r.jsx("span",{className:"h3Icon",children:r.jsx(wt,{})}),"Quick beginner rules"]}),r.jsxs("ul",{className:"bullets",children:[r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),"Prefer ",r.jsx("span",{className:"mono",children:"iframe"})," for embedding webpages or widget-like content"]}),r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),"Use ",r.jsx("span",{className:"mono",children:"sandbox"})," for safety when embedding third party pages"]}),r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),"Keep ",r.jsx("span",{className:"mono",children:"allow"})," minimal"]}),r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),"Add a meaningful ",r.jsx("span",{className:"mono",children:"title"})," ","to iframes"]}),r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),"Use ",r.jsx("span",{className:"mono",children:"object"})," when you want fallback content support"]})]}),r.jsxs("div",{className:"noteBox",children:[r.jsx("span",{className:"noteIcon",children:r.jsx(Ns,{})}),r.jsxs("div",{className:"noteText",children:[r.jsx("div",{className:"noteTitle",children:"Real world example"}),r.jsxs("div",{className:"noteSub",children:["Embedding a Google Map or a YouTube video usually uses"," ",r.jsx("span",{className:"mono",children:"iframe"})," with a few controlled permissions."]})]})]})]})]})]})},Nx={Wrapper:ve.section`
        width: 100%;
        border: 1px solid var(--color-border);
        background: var(--color-surface);
        border-radius: 18px;
        box-shadow: 0 12px 30px var(--color-shadow);
        overflow: hidden;
        margin-bottom: 15px;

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
    `},bx=()=>{const[s,c]=se.useState(!1),l=()=>c(u=>!u);return r.jsxs(Nx.Wrapper,{className:`topicCard ${s?"open":""}`,children:[r.jsxs("button",{type:"button",className:"topicHeader",onClick:l,"aria-expanded":s,children:[r.jsx("span",{className:"chev",children:s?r.jsx(Ue,{}):r.jsx($e,{})}),r.jsx("span",{className:"icon",children:r.jsx(Ms,{})}),r.jsx("span",{className:"title",children:"SVG integration"}),r.jsx("span",{className:"meta",children:s?"Collapse":"Expand"})]}),r.jsxs("div",{className:`topicBody ${s?"open":""}`,children:[r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"Inline SVG"}),r.jsx("p",{className:"p",children:"Inline SVG means you write the SVG markup directly in your JSX. The big advantage is that the SVG becomes part of the DOM. That means you can style it with CSS, change colors on hover, animate parts, and even control it with JavaScript."}),r.jsxs("div",{className:"note",children:[r.jsxs("div",{className:"noteTop",children:[r.jsx("span",{className:"noteIcon",children:r.jsx(Mt,{})}),r.jsx("div",{className:"noteTitle",children:"Beginner tip"})]}),r.jsx("div",{className:"noteBody",children:"Inline SVG is perfect for icons, logos, small illustrations, and anything you want to recolor or animate with CSS."})]}),r.jsxs("div",{className:"example",children:[r.jsxs("div",{className:"exampleHead",children:[r.jsx("span",{className:"exampleIcon",children:r.jsx(Mt,{})}),r.jsx("div",{className:"exampleTitle",children:"Inline SVG example"})]}),r.jsxs("div",{className:"inlineDemo",children:[r.jsx("div",{className:"svgBox",children:r.jsxs("svg",{width:"120",height:"120",viewBox:"0 0 120 120",role:"img","aria-label":"Simple badge icon",children:[r.jsx("circle",{cx:"60",cy:"60",r:"46",fill:"none",stroke:"currentColor",strokeWidth:"10"}),r.jsx("path",{d:"M40 62 L54 76 L82 48",fill:"none",stroke:"currentColor",strokeWidth:"10",strokeLinecap:"round",strokeLinejoin:"round"})]})}),r.jsxs("div",{className:"inlineText",children:[r.jsx("div",{className:"inlineTitle",children:"This SVG uses currentColor"}),r.jsx("div",{className:"inlineSub",children:"The SVG automatically picks the text color of its parent. So you can theme icons with simple CSS."})]})]})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"SVG vs img"}),r.jsx("p",{className:"p",children:"You can use SVG in two common ways: as inline markup or as an image file with an img tag. Both are valid. The best choice depends on whether you need control over the SVG parts."}),r.jsxs("div",{className:"compareGrid",children:[r.jsxs("div",{className:"compareCard",children:[r.jsxs("div",{className:"compareTop",children:[r.jsx("span",{className:"compareIcon",children:r.jsx(Pt,{})}),r.jsx("div",{className:"compareTitle",children:"Inline SVG"})]}),r.jsxs("ul",{className:"bullets",children:[r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),"You can style paths with CSS"]}),r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),"Easy hover states and animations"]}),r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),"Great for icons and UI graphics"]}),r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),"Supports accessibility labels directly"]})]})]}),r.jsxs("div",{className:"compareCard",children:[r.jsxs("div",{className:"compareTop",children:[r.jsx("span",{className:"compareIcon",children:r.jsx(Ms,{})}),r.jsx("div",{className:"compareTitle",children:"img src SVG"})]}),r.jsxs("ul",{className:"bullets",children:[r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),"Simple to use and cacheable"]}),r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),"Best for large illustrations"]}),r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),"Limited styling of inside parts"]}),r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),"Accessible with alt text like images"]})]})]})]}),r.jsxs("div",{className:"note",children:[r.jsxs("div",{className:"noteTop",children:[r.jsx("span",{className:"noteIcon",children:r.jsx(il,{})}),r.jsx("div",{className:"noteTitle",children:"Rule of thumb"})]}),r.jsx("div",{className:"noteBody",children:"Use inline SVG when you need to change colors, animate, or control parts. Use img when the SVG is basically a static picture."})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"Accessibility in SVG"}),r.jsx("p",{className:"p",children:"SVG can be accessible if you treat it like meaningful content. If the SVG is decorative, hide it from screen readers. If it communicates information, give it a proper text alternative."}),r.jsxs("div",{className:"a11yGrid",children:[r.jsxs("div",{className:"a11yCard",children:[r.jsx("div",{className:"a11yTitle",children:"Decorative SVG"}),r.jsx("div",{className:"a11ySub",children:"If the SVG is just for decoration, hide it."}),r.jsx("div",{className:"codeLine",children:r.jsx("span",{className:"mono",children:'aria-hidden="true"'})})]}),r.jsxs("div",{className:"a11yCard",children:[r.jsx("div",{className:"a11yTitle",children:"Meaningful SVG"}),r.jsx("div",{className:"a11ySub",children:"If it conveys meaning, label it."}),r.jsx("div",{className:"codeLine",children:r.jsx("span",{className:"mono",children:'role="img" + aria-label="..."'})})]})]}),r.jsxs("ul",{className:"bullets",children:[r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),"Use aria-hidden for purely decorative icons"]}),r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),'Use role="img" and aria-label for meaningful SVG']}),r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),"Avoid putting important text only inside SVG unless you provide an accessible label"]})]})]})]})]})},kx={Wrapper:ve.section`
        width: 100%;
        border: 1px solid var(--color-border);
        background: var(--color-surface);
        border-radius: 18px;
        box-shadow: 0 12px 30px var(--color-shadow);
        overflow: hidden;
        margin-bottom: 15px;

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
    `},Sx=()=>{const[s,c]=se.useState(!1),[l,u]=se.useState(!0),m=se.useMemo(()=>`<!-- HTML -->
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
<\/script>`,[]);return r.jsxs(kx.Wrapper,{className:`topicCard ${s?"open":""}`,children:[r.jsxs("button",{type:"button",className:"topicHeader",onClick:()=>c(g=>!g),"aria-expanded":s,children:[r.jsx("span",{className:"chev",children:s?r.jsx(Ue,{}):r.jsx($e,{})}),r.jsx("span",{className:"icon",children:r.jsx(zf,{})}),r.jsx("span",{className:"title",children:"Canvas"}),r.jsx("span",{className:"meta",children:s?"Collapse":"Expand"})]}),r.jsxs("div",{className:`topicBody ${s?"open":""}`,children:[r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"What is a canvas"}),r.jsxs("p",{className:"p",children:["The ",r.jsx("span",{className:"mono",children:"canvas"})," element is a drawing surface. It does not contain real HTML elements inside it. Instead, you draw pixels using JavaScript. This is useful for charts, games, animations, custom visual effects, and small interactive demos."]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"How it works"}),r.jsxs("ul",{className:"bullets",children:[r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),"Create a canvas with a fixed width and height"]}),r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),"Get a drawing context:",r.jsx("span",{className:"mono",children:'getContext("2d")'})]}),r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),"Use the context to draw shapes, text, and images"]}),r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),"For animations, clear the canvas and redraw inside a loop (usually"," ",r.jsx("span",{className:"mono",children:"requestAnimationFrame"}),")"]})]})]}),r.jsx(Cx,{isRunning:l}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"Mini controls"}),r.jsxs("div",{className:"btnRow",children:[r.jsxs("button",{type:"button",className:"btn",onClick:()=>u(!0),disabled:l,children:[r.jsx("span",{className:"btnIcon",children:r.jsx(Wf,{})}),"Play"]}),r.jsxs("button",{type:"button",className:"btn",onClick:()=>u(!1),disabled:!l,children:[r.jsx("span",{className:"btnIcon",children:r.jsx(Hf,{})}),"Pause"]}),r.jsxs("button",{type:"button",className:"btn",onClick:()=>{u(!1),setTimeout(()=>u(!0),80)},children:[r.jsx("span",{className:"btnIcon",children:r.jsx(Uf,{})}),"Restart"]})]}),r.jsxs("div",{className:"note",children:[r.jsx("span",{className:"noteIcon",children:r.jsx(wt,{})}),r.jsxs("p",{className:"noteText",children:["Canvas is pixel based. If you resize the canvas using CSS only, drawings can look blurry. Prefer setting",r.jsx("span",{className:"mono",children:"width"})," and",r.jsx("span",{className:"mono",children:"height"})," attributes on the element, and handle high DPI scaling if needed."]})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"Basic example code"}),r.jsx("pre",{className:"code",children:r.jsx("code",{children:m})})]})]})]})},Cx=({isRunning:s})=>{const c=Qe.useRef(null),l=Qe.useRef(0),u=Qe.useRef(0);return Qe.useEffect(()=>{const m=c.current;if(!m)return;const g=m.getContext("2d");if(!g)return;const w=m.width,E=m.height,C=()=>{g.fillStyle="#0d0d0d",g.fillRect(0,0,w,E),g.fillStyle="#ffffff",g.font="14px Verdana",g.fillText("Canvas demo: moving dot",14,24),g.globalAlpha=.35,g.beginPath(),g.moveTo(14,E/2),g.lineTo(w-14,E/2),g.strokeStyle="#ffffff",g.lineWidth=1,g.stroke(),g.globalAlpha=1;const F=u.current,_=14+(Math.sin(F)+1)/2*(w-28),V=E/2+Math.cos(F*1.2)*36;g.beginPath(),g.arc(_,V,8,0,Math.PI*2),g.fillStyle="#ffffff",g.fill(),g.fillStyle="#d0d0d0",g.font="12px Verdana",g.fillText("requestAnimationFrame loop",14,E-14)},G=()=>{u.current+=.04,C(),l.current=window.requestAnimationFrame(G)},$=()=>{l.current&&window.cancelAnimationFrame(l.current),l.current=0};return s?($(),G()):($(),C()),()=>$()},[s]),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"Canvas element basics"}),r.jsxs("p",{className:"p",children:["Below is a small demo. We draw a background, some text, and a moving dot. The motion uses"," ",r.jsx("span",{className:"mono",children:"requestAnimationFrame"}),"."]}),r.jsx("div",{className:"demoBox",children:r.jsx("canvas",{ref:c,width:520,height:220,className:"canvas"})})]})},Tx={Wrapper:ve.section`
        width: 100%;
        margin-bottom: 15px;
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
    `},Ex=()=>{const[s,c]=se.useState(!1);return r.jsxs(Tx.Wrapper,{className:`topicCard ${s?"open":""}`,children:[r.jsxs("button",{type:"button",className:"topicHeader",onClick:()=>c(l=>!l),"aria-expanded":s,children:[r.jsx("span",{className:"chev",children:s?r.jsx(Ue,{}):r.jsx($e,{})}),r.jsx("span",{className:"icon",children:r.jsx(op,{})}),r.jsx("span",{className:"title",children:"Sectioning Elements"}),r.jsx("span",{className:"meta",children:s?"Collapse":"Expand"})]}),r.jsxs("div",{className:`topicBody ${s?"open":""}`,children:[r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"What are Sectioning Elements"}),r.jsx("p",{className:"p",children:"Sectioning elements are semantic HTML tags that define the structure of a webpage. They help organize content into meaningful blocks so browsers, search engines, and screen readers can understand the layout of the page."})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"header"}),r.jsx("p",{className:"p",children:"The header element represents introductory content. It usually contains a logo, navigation links, or page title. It can appear at the top of the page or inside an article or section."}),r.jsx("pre",{className:"code",children:`<header>
  <h1>My Website</h1>
  <nav>...</nav>
</header>`})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"footer"}),r.jsx("p",{className:"p",children:"The footer element contains information about its parent section. It commonly includes copyright, author details, related links, or contact information."}),r.jsx("pre",{className:"code",children:`<footer>
  <p>© 2026 My Website</p>
</footer>`})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"main"}),r.jsx("p",{className:"p",children:"The main element represents the primary content of the page. There must be only one main element per page. It should not contain repeated content like navigation or footer."}),r.jsx("pre",{className:"code",children:`<main>
  <h2>Article Title</h2>
  <p>Main content goes here.</p>
</main>`})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"section"}),r.jsx("p",{className:"p",children:"The section element defines a thematic grouping of content. It is used when content belongs together and usually contains a heading."}),r.jsx("pre",{className:"code",children:`<section>
  <h2>Services</h2>
  <p>Details about services.</p>
</section>`})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"article"}),r.jsx("p",{className:"p",children:"The article element represents independent, self- contained content. Blog posts, news articles, forum posts, or comments are good examples."}),r.jsx("pre",{className:"code",children:`<article>
  <h2>Blog Post</h2>
  <p>This is a standalone article.</p>
</article>`})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"aside"}),r.jsx("p",{className:"p",children:"The aside element represents content indirectly related to the main content. It is often used for sidebars, advertisements, or related links."}),r.jsx("pre",{className:"code",children:`<aside>
  <h3>Related Links</h3>
  <ul>
    <li>Link 1</li>
    <li>Link 2</li>
  </ul>
</aside>`})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"Why Semantics Matter"}),r.jsx("p",{className:"p",children:"Using semantic sectioning elements improves accessibility, SEO, and code readability. It helps screen readers understand page layout and helps search engines identify important content."})]})]})]})},Lx={Wrapper:ve.section`
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
    `},Ix=()=>{const[s,c]=se.useState(!1),l=se.useMemo(()=>[{tag:"header",role:"banner",use:"Top area of a page or a section (logo, title, top nav).",note:"Only the top-level page header maps to banner. A header inside an article is not a banner landmark."},{tag:"nav",role:"navigation",use:"Primary navigation links or menus.",note:"Use one nav per major navigation region. If there are multiple, label them."},{tag:"main",role:"main",use:"The main unique content of the page.",note:"Only one main per page. Avoid nesting main inside other landmarks."},{tag:"aside",role:"complementary",use:"Related side content (sidebar, related links, ads, callouts).",note:"Keep it relevant to the surrounding content."},{tag:"footer",role:"contentinfo",use:"Bottom area of a page (copyright, contact, policies).",note:"Only the page-level footer maps to contentinfo. Footer inside article is not contentinfo."},{tag:"section",role:"region (only when labeled)",use:"A thematic grouping of content with a heading.",note:"Section is not automatically a landmark unless it has an accessible name (aria-label/aria-labelledby)."},{tag:"article",role:"article",use:"Self-contained content that can stand alone (blog post, card, comment).",note:"Articles can be nested (like comments inside a post)."}],[]),u=se.useMemo(()=>[{role:"banner",when:"Top-level site header of the page.",example:"A header that contains site logo and primary navigation."},{role:"navigation",when:"A set of navigation links to major pages or sections.",example:"Main menu, sidebar menu, footer menu."},{role:"main",when:"The main content unique to the page.",example:"Content area excluding header/footer/sidebars."},{role:"complementary",when:"Supporting content related to main content.",example:"Related posts sidebar, glossary, tips panel."},{role:"contentinfo",when:"Footer information for the site or page.",example:"Copyright, contact links, policies."},{role:"region",when:"A generic landmark area that needs a label.",example:"A section with aria-label like 'Pricing' or 'FAQ'."},{role:"search",when:"A search area (often a form).",example:"Search bar container region."}],[]),m=()=>c(g=>!g);return r.jsxs(Lx.Wrapper,{className:`topicCard ${s?"open":""}`,children:[r.jsxs("button",{type:"button",className:"topicHeader",onClick:m,"aria-expanded":s,children:[r.jsx("span",{className:"chev",children:s?r.jsx(Ue,{}):r.jsx($e,{})}),r.jsx("span",{className:"icon",children:r.jsx(Bf,{})}),r.jsx("span",{className:"title",children:"Document Landmarks"}),r.jsx("span",{className:"meta",children:s?"Collapse":"Expand"})]}),r.jsxs("div",{className:`topicBody ${s?"open":""}`,children:[r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"What are landmarks"}),r.jsx("p",{className:"p",children:"Landmarks are important regions of a page that help users navigate quickly, especially screen reader users. A screen reader can jump directly to landmarks like navigation, main content, or footer. Good landmarks make a page feel organized and predictable."})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"Semantic mapping"}),r.jsx("p",{className:"p",children:"Many semantic HTML tags automatically map to ARIA landmark roles. This means you often do not need to add ARIA roles manually. Use semantic tags first, then use ARIA only when you need extra meaning or labeling."}),r.jsxs("div",{className:"callout",children:[r.jsx("div",{className:"calloutIcon",children:r.jsx(wt,{})}),r.jsxs("div",{className:"calloutText",children:[r.jsx("div",{className:"calloutTitle",children:"Rule of thumb"}),r.jsx("div",{className:"calloutSub",children:"Prefer semantic HTML. Add ARIA only when you cannot express the meaning using HTML alone."})]})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"Common semantic tags and their landmark roles"}),r.jsxs("div",{className:"table",children:[r.jsxs("div",{className:"tHead",children:[r.jsxs("div",{className:"cell tag",children:[r.jsx(Ja,{})," Tag"]}),r.jsxs("div",{className:"cell role",children:[r.jsx(xn,{})," ARIA role"]}),r.jsxs("div",{className:"cell use",children:[r.jsx(il,{})," When to use"]})]}),r.jsx("div",{className:"tBody",children:l.map(g=>r.jsxs("div",{className:"tRow",children:[r.jsx("div",{className:"cell tag",children:r.jsx("span",{className:"pill mono",children:g.tag})}),r.jsx("div",{className:"cell role",children:r.jsx("span",{className:"pill",children:g.role})}),r.jsxs("div",{className:"cell use",children:[r.jsx("div",{className:"useText",children:g.use}),r.jsxs("div",{className:"note",children:[r.jsx(Ds,{})," ",g.note]})]})]},`${g.tag}-${g.role}`))})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"ARIA roles"}),r.jsx("p",{className:"p",children:"ARIA roles describe what an element is. Landmarks are a special set of roles that describe page regions. If you use semantic tags, roles are often implied automatically. Add an explicit role only when needed."}),r.jsx("div",{className:"roleGrid",children:u.map(g=>r.jsxs("div",{className:"roleCard",children:[r.jsxs("div",{className:"roleTop",children:[r.jsx("span",{className:"roleIcon",children:r.jsx(Pt,{})}),r.jsx("span",{className:"roleName",children:g.role})]}),r.jsx("div",{className:"roleWhen",children:g.when}),r.jsxs("div",{className:"roleExample",children:["Example: ",g.example]})]},g.role))})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"Beginner checklist"}),r.jsxs("ul",{className:"bullets",children:[r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),"Use ",r.jsx("span",{className:"mono",children:"header"}),","," ",r.jsx("span",{className:"mono",children:"nav"}),","," ",r.jsx("span",{className:"mono",children:"main"}),","," ",r.jsx("span",{className:"mono",children:"footer"})," first."]}),r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),"Keep exactly one ",r.jsx("span",{className:"mono",children:"main"})," ","on a page."]}),r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),"If you have multiple navs, label them with"," ",r.jsx("span",{className:"mono",children:"aria-label"})," or"," ",r.jsx("span",{className:"mono",children:"aria-labelledby"}),"."]}),r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),"Do not add ARIA roles when HTML already provides the meaning."]}),r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),"For a ",r.jsx("span",{className:"mono",children:"section"})," to be a real landmark, it must have an accessible name."]})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"Tiny example (mental model)"}),r.jsxs("div",{className:"codeBlock",children:[r.jsxs("div",{className:"codeLine",children:[r.jsx("span",{className:"mono",children:"<header>"})," site header ",r.jsx("span",{className:"muted",children:"(banner)"})]}),r.jsxs("div",{className:"codeLine",children:[r.jsx("span",{className:"mono",children:"<nav>"})," main menu"," ",r.jsx("span",{className:"muted",children:"(navigation)"})]}),r.jsxs("div",{className:"codeLine",children:[r.jsx("span",{className:"mono",children:"<main>"})," page content ",r.jsx("span",{className:"muted",children:"(main)"})]}),r.jsxs("div",{className:"codeLine",children:[r.jsx("span",{className:"mono",children:"<aside>"})," sidebar"," ",r.jsx("span",{className:"muted",children:"(complementary)"})]}),r.jsxs("div",{className:"codeLine",children:[r.jsx("span",{className:"mono",children:"<footer>"})," footer"," ",r.jsx("span",{className:"muted",children:"(contentinfo)"})]})]})]})]})]})},zx={Wrapper:ve.section`
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
    `},_x=()=>{const[s,c]=se.useState(!1),l=se.useMemo(()=>[{title:"Basic FAQ (native toggle)",desc:"The <details> element creates a built-in disclosure widget. The <summary> element is the visible title that users click to expand or collapse.",code:`<details>
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
</details>`}],[]),u=()=>c(m=>!m);return r.jsxs(zx.Wrapper,{className:`topicCard ${s?"open":""}`,children:[r.jsxs("button",{type:"button",className:"topicHeader",onClick:u,"aria-expanded":s,children:[r.jsx("span",{className:"chev",children:s?r.jsx(Ue,{}):r.jsx($e,{})}),r.jsx("span",{className:"icon",children:r.jsx(wt,{})}),r.jsx("span",{className:"title",children:"Details and Disclosure"}),r.jsx("span",{className:"meta",children:s?"Collapse":"Expand"})]}),r.jsxs("div",{className:`topicBody ${s?"open":""}`,children:[r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"What are details and summary"}),r.jsxs("p",{className:"p",children:["The ",r.jsx("span",{className:"mono",children:"details"})," element provides a built-in expandable container. The"," ",r.jsx("span",{className:"mono",children:"summary"})," element acts as the clickable heading. When the user clicks the summary, the browser expands or collapses the content inside details."]}),r.jsxs("ul",{className:"bullets",children:[r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),"Use ",r.jsx("span",{className:"mono",children:"summary"})," as the visible title"]}),r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),"Content inside ",r.jsx("span",{className:"mono",children:"details"})," ","is hidden until expanded"]}),r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),"The browser handles the toggle behavior for you"]})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"Why this is useful"}),r.jsxs("div",{className:"callouts",children:[r.jsxs("div",{className:"callout",children:[r.jsx("span",{className:"calloutIcon",children:r.jsx(Pt,{})}),r.jsxs("div",{className:"calloutText",children:[r.jsx("div",{className:"calloutTitle",children:"Simple"}),r.jsx("div",{className:"calloutSub",children:"No JavaScript needed for expand collapse"})]})]}),r.jsxs("div",{className:"callout",children:[r.jsx("span",{className:"calloutIcon",children:r.jsx(Ds,{})}),r.jsxs("div",{className:"calloutText",children:[r.jsx("div",{className:"calloutTitle",children:"Be careful"}),r.jsx("div",{className:"calloutSub",children:"Do not put buttons or links inside summary unless you know what you are doing"})]})]})]}),r.jsx("p",{className:"p",children:"This is perfect for FAQs, extra explanations, or hidden notes. It keeps the page clean and lets the user choose what to expand."})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"Key rules"}),r.jsxs("ul",{className:"bullets",children:[r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),r.jsx("span",{className:"mono",children:"summary"})," should be the first child of ",r.jsx("span",{className:"mono",children:"details"})]}),r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),"Use ",r.jsx("span",{className:"mono",children:"open"})," attribute to keep it expanded initially"]}),r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),"Keep summary text short and clear"]})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"Examples"}),r.jsx("div",{className:"examples",children:l.map((m,g)=>r.jsxs("div",{className:"example",children:[r.jsxs("div",{className:"exTop",children:[r.jsx("div",{className:"exTitle",children:m.title}),r.jsx("div",{className:"exDesc",children:m.desc})]}),r.jsxs("div",{className:"codeWrap","aria-label":"Example code",children:[r.jsxs("div",{className:"codeHead",children:[r.jsx("span",{className:"codeIcon",children:r.jsx(Mt,{})}),r.jsx("span",{className:"codeLabel",children:"HTML"})]}),r.jsx("pre",{className:"code",children:r.jsx("code",{children:m.code})})]})]},g))})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"Quick tip"}),r.jsx("p",{className:"p",children:"If you need a true accordion where only one item can be open at a time, that usually requires JavaScript. But for most cases, multiple open items are totally fine and simpler."})]})]})]})},Mx={Wrapper:ve.section`
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
    `},Px=()=>{const[s,c]=se.useState(!1),l=se.useRef(null),u=()=>{c(w=>!w)},m=()=>{l.current&&l.current.showModal()},g=()=>{l.current&&l.current.close()};return r.jsxs(Mx.Wrapper,{className:s?"open":"",children:[r.jsxs("button",{type:"button",className:"topicHeader",onClick:u,"aria-expanded":s,children:[r.jsx("span",{className:"chev",children:s?r.jsx(Ue,{}):r.jsx($e,{})}),r.jsx("span",{className:"icon",children:r.jsx(ip,{})}),r.jsx("span",{className:"title",children:"Dialog"}),r.jsx("span",{className:"meta",children:s?"Collapse":"Expand"})]}),r.jsxs("div",{className:`topicBody ${s?"open":""}`,children:[r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"What is the dialog element"}),r.jsx("p",{className:"p",children:"The dialog element is a built-in HTML element used to create modal or non-modal dialog boxes. It allows you to display popups without using external libraries. It is part of modern HTML and provides native browser behavior."})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"Modal behavior"}),r.jsx("p",{className:"p",children:"When a dialog is opened using showModal(), it becomes modal. This means the rest of the page becomes inactive until the dialog is closed. The browser also adds a backdrop automatically."}),r.jsxs("ul",{className:"bullets",children:[r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),"show() opens non modal dialog"]}),r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),"showModal() opens modal dialog"]}),r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),"close() closes the dialog"]})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"Example"}),r.jsxs("div",{className:"exampleBox",children:[r.jsx("button",{type:"button",className:"openBtn",onClick:m,children:"Open Dialog"}),r.jsxs("dialog",{ref:l,className:"dialogBox",children:[r.jsx("h4",{className:"dialogTitle",children:"Native HTML Dialog"}),r.jsx("p",{className:"dialogText",children:"This is a native modal created using the dialog element. No external library is used."}),r.jsx("button",{type:"button",className:"closeBtn",onClick:g,children:"Close"})]})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"Important Notes"}),r.jsx("p",{className:"p",children:"The dialog element is supported in modern browsers. For older browsers, a polyfill may be required. You can style the backdrop using the ::backdrop pseudo element in CSS."})]})]})]})},Rx=()=>r.jsxs(Ua.Wrapper,{children:[r.jsx(Ua.Header,{children:r.jsx(Kf,{})}),r.jsxs(Ua.Main,{children:[r.jsxs("div",{className:"contentWrapper",children:[r.jsx(Xf,{}),r.jsx(Zf,{}),r.jsx(tx,{}),r.jsx(nx,{}),r.jsx(sx,{}),r.jsx(ax,{}),r.jsx(cx,{}),r.jsx(ux,{}),r.jsx(hx,{}),r.jsx(fx,{}),r.jsx(gx,{}),r.jsx(yx,{}),r.jsx(wx,{}),r.jsx(bx,{}),r.jsx(Sx,{}),r.jsx(Ex,{}),r.jsx(Ix,{}),r.jsx(_x,{}),r.jsx(Px,{})]}),r.jsx("div",{className:"footerWrapper",children:r.jsx(Yf,{})})]})]});pm.createRoot(document.getElementById("root")).render(r.jsx(r.Fragment,{children:r.jsx(Rx,{})}));

(function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const m of document.querySelectorAll('link[rel="modulepreload"]'))u(m);new MutationObserver(m=>{for(const g of m)if(g.type==="childList")for(const w of g.addedNodes)w.tagName==="LINK"&&w.rel==="modulepreload"&&u(w)}).observe(document,{childList:!0,subtree:!0});function l(m){const g={};return m.integrity&&(g.integrity=m.integrity),m.referrerPolicy&&(g.referrerPolicy=m.referrerPolicy),m.crossOrigin==="use-credentials"?g.credentials="include":m.crossOrigin==="anonymous"?g.credentials="omit":g.credentials="same-origin",g}function u(m){if(m.ep)return;m.ep=!0;const g=l(m);fetch(m.href,g)}})();function rm(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var _a={exports:{}},to={},Pa={exports:{}},oe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var eu;function nm(){if(eu)return oe;eu=1;var s=Symbol.for("react.element"),c=Symbol.for("react.portal"),l=Symbol.for("react.fragment"),u=Symbol.for("react.strict_mode"),m=Symbol.for("react.profiler"),g=Symbol.for("react.provider"),w=Symbol.for("react.context"),E=Symbol.for("react.forward_ref"),C=Symbol.for("react.suspense"),$=Symbol.for("react.memo"),H=Symbol.for("react.lazy"),D=Symbol.iterator;function Q(x){return x===null||typeof x!="object"?null:(x=D&&x[D]||x["@@iterator"],typeof x=="function"?x:null)}var Z={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},q=Object.assign,W={};function Y(x,N,ee){this.props=x,this.context=N,this.refs=W,this.updater=ee||Z}Y.prototype.isReactComponent={},Y.prototype.setState=function(x,N){if(typeof x!="object"&&typeof x!="function"&&x!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,x,N,"setState")},Y.prototype.forceUpdate=function(x){this.updater.enqueueForceUpdate(this,x,"forceUpdate")};function fe(){}fe.prototype=Y.prototype;function ce(x,N,ee){this.props=x,this.context=N,this.refs=W,this.updater=ee||Z}var ne=ce.prototype=new fe;ne.constructor=ce,q(ne,Y.prototype),ne.isPureReactComponent=!0;var z=Array.isArray,X=Object.prototype.hasOwnProperty,U={current:null},I={key:!0,ref:!0,__self:!0,__source:!0};function B(x,N,ee){var te,ae={},se=null,de=null;if(N!=null)for(te in N.ref!==void 0&&(de=N.ref),N.key!==void 0&&(se=""+N.key),N)X.call(N,te)&&!I.hasOwnProperty(te)&&(ae[te]=N[te]);var le=arguments.length-2;if(le===1)ae.children=ee;else if(1<le){for(var xe=Array(le),Te=0;Te<le;Te++)xe[Te]=arguments[Te+2];ae.children=xe}if(x&&x.defaultProps)for(te in le=x.defaultProps,le)ae[te]===void 0&&(ae[te]=le[te]);return{$$typeof:s,type:x,key:se,ref:de,props:ae,_owner:U.current}}function ye(x,N){return{$$typeof:s,type:x.type,key:N,ref:x.ref,props:x.props,_owner:x._owner}}function _e(x){return typeof x=="object"&&x!==null&&x.$$typeof===s}function ie(x){var N={"=":"=0",":":"=2"};return"$"+x.replace(/[=:]/g,function(ee){return N[ee]})}var Ie=/\/+/g;function Se(x,N){return typeof x=="object"&&x!==null&&x.key!=null?ie(""+x.key):N.toString(36)}function Ye(x,N,ee,te,ae){var se=typeof x;(se==="undefined"||se==="boolean")&&(x=null);var de=!1;if(x===null)de=!0;else switch(se){case"string":case"number":de=!0;break;case"object":switch(x.$$typeof){case s:case c:de=!0}}if(de)return de=x,ae=ae(de),x=te===""?"."+Se(de,0):te,z(ae)?(ee="",x!=null&&(ee=x.replace(Ie,"$&/")+"/"),Ye(ae,N,ee,"",function(Te){return Te})):ae!=null&&(_e(ae)&&(ae=ye(ae,ee+(!ae.key||de&&de.key===ae.key?"":(""+ae.key).replace(Ie,"$&/")+"/")+x)),N.push(ae)),1;if(de=0,te=te===""?".":te+":",z(x))for(var le=0;le<x.length;le++){se=x[le];var xe=te+Se(se,le);de+=Ye(se,N,ee,xe,ae)}else if(xe=Q(x),typeof xe=="function")for(x=xe.call(x),le=0;!(se=x.next()).done;)se=se.value,xe=te+Se(se,le++),de+=Ye(se,N,ee,xe,ae);else if(se==="object")throw N=String(x),Error("Objects are not valid as a React child (found: "+(N==="[object Object]"?"object with keys {"+Object.keys(x).join(", ")+"}":N)+"). If you meant to render a collection of children, use an array instead.");return de}function et(x,N,ee){if(x==null)return x;var te=[],ae=0;return Ye(x,te,"","",function(se){return N.call(ee,se,ae++)}),te}function Ke(x){if(x._status===-1){var N=x._result;N=N(),N.then(function(ee){(x._status===0||x._status===-1)&&(x._status=1,x._result=ee)},function(ee){(x._status===0||x._status===-1)&&(x._status=2,x._result=ee)}),x._status===-1&&(x._status=0,x._result=N)}if(x._status===1)return x._result.default;throw x._result}var je={current:null},L={transition:null},F={ReactCurrentDispatcher:je,ReactCurrentBatchConfig:L,ReactCurrentOwner:U};function _(){throw Error("act(...) is not supported in production builds of React.")}return oe.Children={map:et,forEach:function(x,N,ee){et(x,function(){N.apply(this,arguments)},ee)},count:function(x){var N=0;return et(x,function(){N++}),N},toArray:function(x){return et(x,function(N){return N})||[]},only:function(x){if(!_e(x))throw Error("React.Children.only expected to receive a single React element child.");return x}},oe.Component=Y,oe.Fragment=l,oe.Profiler=m,oe.PureComponent=ce,oe.StrictMode=u,oe.Suspense=C,oe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=F,oe.act=_,oe.cloneElement=function(x,N,ee){if(x==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+x+".");var te=q({},x.props),ae=x.key,se=x.ref,de=x._owner;if(N!=null){if(N.ref!==void 0&&(se=N.ref,de=U.current),N.key!==void 0&&(ae=""+N.key),x.type&&x.type.defaultProps)var le=x.type.defaultProps;for(xe in N)X.call(N,xe)&&!I.hasOwnProperty(xe)&&(te[xe]=N[xe]===void 0&&le!==void 0?le[xe]:N[xe])}var xe=arguments.length-2;if(xe===1)te.children=ee;else if(1<xe){le=Array(xe);for(var Te=0;Te<xe;Te++)le[Te]=arguments[Te+2];te.children=le}return{$$typeof:s,type:x.type,key:ae,ref:se,props:te,_owner:de}},oe.createContext=function(x){return x={$$typeof:w,_currentValue:x,_currentValue2:x,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},x.Provider={$$typeof:g,_context:x},x.Consumer=x},oe.createElement=B,oe.createFactory=function(x){var N=B.bind(null,x);return N.type=x,N},oe.createRef=function(){return{current:null}},oe.forwardRef=function(x){return{$$typeof:E,render:x}},oe.isValidElement=_e,oe.lazy=function(x){return{$$typeof:H,_payload:{_status:-1,_result:x},_init:Ke}},oe.memo=function(x,N){return{$$typeof:$,type:x,compare:N===void 0?null:N}},oe.startTransition=function(x){var N=L.transition;L.transition={};try{x()}finally{L.transition=N}},oe.unstable_act=_,oe.useCallback=function(x,N){return je.current.useCallback(x,N)},oe.useContext=function(x){return je.current.useContext(x)},oe.useDebugValue=function(){},oe.useDeferredValue=function(x){return je.current.useDeferredValue(x)},oe.useEffect=function(x,N){return je.current.useEffect(x,N)},oe.useId=function(){return je.current.useId()},oe.useImperativeHandle=function(x,N,ee){return je.current.useImperativeHandle(x,N,ee)},oe.useInsertionEffect=function(x,N){return je.current.useInsertionEffect(x,N)},oe.useLayoutEffect=function(x,N){return je.current.useLayoutEffect(x,N)},oe.useMemo=function(x,N){return je.current.useMemo(x,N)},oe.useReducer=function(x,N,ee){return je.current.useReducer(x,N,ee)},oe.useRef=function(x){return je.current.useRef(x)},oe.useState=function(x){return je.current.useState(x)},oe.useSyncExternalStore=function(x,N,ee){return je.current.useSyncExternalStore(x,N,ee)},oe.useTransition=function(){return je.current.useTransition()},oe.version="18.3.1",oe}var tu;function Ja(){return tu||(tu=1,Pa.exports=nm()),Pa.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ru;function om(){if(ru)return to;ru=1;var s=Ja(),c=Symbol.for("react.element"),l=Symbol.for("react.fragment"),u=Object.prototype.hasOwnProperty,m=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,g={key:!0,ref:!0,__self:!0,__source:!0};function w(E,C,$){var H,D={},Q=null,Z=null;$!==void 0&&(Q=""+$),C.key!==void 0&&(Q=""+C.key),C.ref!==void 0&&(Z=C.ref);for(H in C)u.call(C,H)&&!g.hasOwnProperty(H)&&(D[H]=C[H]);if(E&&E.defaultProps)for(H in C=E.defaultProps,C)D[H]===void 0&&(D[H]=C[H]);return{$$typeof:c,type:E,key:Q,ref:Z,props:D,_owner:m.current}}return to.Fragment=l,to.jsx=w,to.jsxs=w,to}var nu;function sm(){return nu||(nu=1,_a.exports=om()),_a.exports}var r=sm(),js={},Ma={exports:{}},lt={},Ra={exports:{}},Oa={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ou;function im(){return ou||(ou=1,(function(s){function c(L,F){var _=L.length;L.push(F);e:for(;0<_;){var x=_-1>>>1,N=L[x];if(0<m(N,F))L[x]=F,L[_]=N,_=x;else break e}}function l(L){return L.length===0?null:L[0]}function u(L){if(L.length===0)return null;var F=L[0],_=L.pop();if(_!==F){L[0]=_;e:for(var x=0,N=L.length,ee=N>>>1;x<ee;){var te=2*(x+1)-1,ae=L[te],se=te+1,de=L[se];if(0>m(ae,_))se<N&&0>m(de,ae)?(L[x]=de,L[se]=_,x=se):(L[x]=ae,L[te]=_,x=te);else if(se<N&&0>m(de,_))L[x]=de,L[se]=_,x=se;else break e}}return F}function m(L,F){var _=L.sortIndex-F.sortIndex;return _!==0?_:L.id-F.id}if(typeof performance=="object"&&typeof performance.now=="function"){var g=performance;s.unstable_now=function(){return g.now()}}else{var w=Date,E=w.now();s.unstable_now=function(){return w.now()-E}}var C=[],$=[],H=1,D=null,Q=3,Z=!1,q=!1,W=!1,Y=typeof setTimeout=="function"?setTimeout:null,fe=typeof clearTimeout=="function"?clearTimeout:null,ce=typeof setImmediate!="undefined"?setImmediate:null;typeof navigator!="undefined"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function ne(L){for(var F=l($);F!==null;){if(F.callback===null)u($);else if(F.startTime<=L)u($),F.sortIndex=F.expirationTime,c(C,F);else break;F=l($)}}function z(L){if(W=!1,ne(L),!q)if(l(C)!==null)q=!0,Ke(X);else{var F=l($);F!==null&&je(z,F.startTime-L)}}function X(L,F){q=!1,W&&(W=!1,fe(B),B=-1),Z=!0;var _=Q;try{for(ne(F),D=l(C);D!==null&&(!(D.expirationTime>F)||L&&!ie());){var x=D.callback;if(typeof x=="function"){D.callback=null,Q=D.priorityLevel;var N=x(D.expirationTime<=F);F=s.unstable_now(),typeof N=="function"?D.callback=N:D===l(C)&&u(C),ne(F)}else u(C);D=l(C)}if(D!==null)var ee=!0;else{var te=l($);te!==null&&je(z,te.startTime-F),ee=!1}return ee}finally{D=null,Q=_,Z=!1}}var U=!1,I=null,B=-1,ye=5,_e=-1;function ie(){return!(s.unstable_now()-_e<ye)}function Ie(){if(I!==null){var L=s.unstable_now();_e=L;var F=!0;try{F=I(!0,L)}finally{F?Se():(U=!1,I=null)}}else U=!1}var Se;if(typeof ce=="function")Se=function(){ce(Ie)};else if(typeof MessageChannel!="undefined"){var Ye=new MessageChannel,et=Ye.port2;Ye.port1.onmessage=Ie,Se=function(){et.postMessage(null)}}else Se=function(){Y(Ie,0)};function Ke(L){I=L,U||(U=!0,Se())}function je(L,F){B=Y(function(){L(s.unstable_now())},F)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(L){L.callback=null},s.unstable_continueExecution=function(){q||Z||(q=!0,Ke(X))},s.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ye=0<L?Math.floor(1e3/L):5},s.unstable_getCurrentPriorityLevel=function(){return Q},s.unstable_getFirstCallbackNode=function(){return l(C)},s.unstable_next=function(L){switch(Q){case 1:case 2:case 3:var F=3;break;default:F=Q}var _=Q;Q=F;try{return L()}finally{Q=_}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(L,F){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var _=Q;Q=L;try{return F()}finally{Q=_}},s.unstable_scheduleCallback=function(L,F,_){var x=s.unstable_now();switch(typeof _=="object"&&_!==null?(_=_.delay,_=typeof _=="number"&&0<_?x+_:x):_=x,L){case 1:var N=-1;break;case 2:N=250;break;case 5:N=1073741823;break;case 4:N=1e4;break;default:N=5e3}return N=_+N,L={id:H++,callback:F,priorityLevel:L,startTime:_,expirationTime:N,sortIndex:-1},_>x?(L.sortIndex=_,c($,L),l(C)===null&&L===l($)&&(W?(fe(B),B=-1):W=!0,je(z,_-x))):(L.sortIndex=N,c(C,L),q||Z||(q=!0,Ke(X))),L},s.unstable_shouldYield=ie,s.unstable_wrapCallback=function(L){var F=Q;return function(){var _=Q;Q=F;try{return L.apply(this,arguments)}finally{Q=_}}}})(Oa)),Oa}var su;function am(){return su||(su=1,Ra.exports=im()),Ra.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var iu;function lm(){if(iu)return lt;iu=1;var s=Ja(),c=am();function l(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var u=new Set,m={};function g(e,t){w(e,t),w(e+"Capture",t)}function w(e,t){for(m[e]=t,e=0;e<t.length;e++)u.add(t[e])}var E=!(typeof window=="undefined"||typeof window.document=="undefined"||typeof window.document.createElement=="undefined"),C=Object.prototype.hasOwnProperty,$=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,H={},D={};function Q(e){return C.call(D,e)?!0:C.call(H,e)?!1:$.test(e)?D[e]=!0:(H[e]=!0,!1)}function Z(e,t,n,o){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return o?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function q(e,t,n,o){if(t===null||typeof t=="undefined"||Z(e,t,n,o))return!0;if(o)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function W(e,t,n,o,i,a,d){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=o,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=d}var Y={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Y[e]=new W(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Y[t]=new W(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){Y[e]=new W(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Y[e]=new W(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Y[e]=new W(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){Y[e]=new W(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){Y[e]=new W(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){Y[e]=new W(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){Y[e]=new W(e,5,!1,e.toLowerCase(),null,!1,!1)});var fe=/[\-:]([a-z])/g;function ce(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(fe,ce);Y[t]=new W(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(fe,ce);Y[t]=new W(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(fe,ce);Y[t]=new W(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){Y[e]=new W(e,1,!1,e.toLowerCase(),null,!1,!1)}),Y.xlinkHref=new W("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){Y[e]=new W(e,1,!1,e.toLowerCase(),null,!0,!0)});function ne(e,t,n,o){var i=Y.hasOwnProperty(t)?Y[t]:null;(i!==null?i.type!==0:o||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(q(t,n,i,o)&&(n=null),o||i===null?Q(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,o=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,o?e.setAttributeNS(o,t,n):e.setAttribute(t,n))))}var z=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,X=Symbol.for("react.element"),U=Symbol.for("react.portal"),I=Symbol.for("react.fragment"),B=Symbol.for("react.strict_mode"),ye=Symbol.for("react.profiler"),_e=Symbol.for("react.provider"),ie=Symbol.for("react.context"),Ie=Symbol.for("react.forward_ref"),Se=Symbol.for("react.suspense"),Ye=Symbol.for("react.suspense_list"),et=Symbol.for("react.memo"),Ke=Symbol.for("react.lazy"),je=Symbol.for("react.offscreen"),L=Symbol.iterator;function F(e){return e===null||typeof e!="object"?null:(e=L&&e[L]||e["@@iterator"],typeof e=="function"?e:null)}var _=Object.assign,x;function N(e){if(x===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);x=t&&t[1]||""}return`
`+x+e}var ee=!1;function te(e,t){if(!e||ee)return"";ee=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(j){var o=j}Reflect.construct(e,[],t)}else{try{t.call()}catch(j){o=j}e.call(t.prototype)}else{try{throw Error()}catch(j){o=j}e()}}catch(j){if(j&&o&&typeof j.stack=="string"){for(var i=j.stack.split(`
`),a=o.stack.split(`
`),d=i.length-1,p=a.length-1;1<=d&&0<=p&&i[d]!==a[p];)p--;for(;1<=d&&0<=p;d--,p--)if(i[d]!==a[p]){if(d!==1||p!==1)do if(d--,p--,0>p||i[d]!==a[p]){var h=`
`+i[d].replace(" at new "," at ");return e.displayName&&h.includes("<anonymous>")&&(h=h.replace("<anonymous>",e.displayName)),h}while(1<=d&&0<=p);break}}}finally{ee=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?N(e):""}function ae(e){switch(e.tag){case 5:return N(e.type);case 16:return N("Lazy");case 13:return N("Suspense");case 19:return N("SuspenseList");case 0:case 2:case 15:return e=te(e.type,!1),e;case 11:return e=te(e.type.render,!1),e;case 1:return e=te(e.type,!0),e;default:return""}}function se(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case I:return"Fragment";case U:return"Portal";case ye:return"Profiler";case B:return"StrictMode";case Se:return"Suspense";case Ye:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case ie:return(e.displayName||"Context")+".Consumer";case _e:return(e._context.displayName||"Context")+".Provider";case Ie:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case et:return t=e.displayName||null,t!==null?t:se(e.type)||"Memo";case Ke:t=e._payload,e=e._init;try{return se(e(t))}catch{}}return null}function de(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return se(t);case 8:return t===B?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function le(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function xe(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Te(e){var t=xe(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),o=""+e[t];if(!e.hasOwnProperty(t)&&typeof n!="undefined"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,a=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(d){o=""+d,a.call(this,d)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return o},setValue:function(d){o=""+d},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Xt(e){e._valueTracker||(e._valueTracker=Te(e))}function yr(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),o="";return e&&(o=xe(e)?e.checked?"true":"false":e.value),e=o,e!==n?(t.setValue(e),!0):!1}function bt(e){if(e=e||(typeof document!="undefined"?document:void 0),typeof e=="undefined")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ds(e,t){var n=t.checked;return _({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n!=null?n:e._wrapperState.initialChecked})}function al(e,t){var n=t.defaultValue==null?"":t.defaultValue,o=t.checked!=null?t.checked:t.defaultChecked;n=le(t.value!=null?t.value:n),e._wrapperState={initialChecked:o,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function ll(e,t){t=t.checked,t!=null&&ne(e,"checked",t,!1)}function Fs(e,t){ll(e,t);var n=le(t.value),o=t.type;if(n!=null)o==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(o==="submit"||o==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Hs(e,t.type,n):t.hasOwnProperty("defaultValue")&&Hs(e,t.type,le(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function cl(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var o=t.type;if(!(o!=="submit"&&o!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Hs(e,t,n){(t!=="number"||bt(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var xn=Array.isArray;function Ar(e,t,n,o){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&o&&(e[n].defaultSelected=!0)}else{for(n=""+le(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,o&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Ws(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(l(91));return _({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function dl(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(l(92));if(xn(n)){if(1<n.length)throw Error(l(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:le(n)}}function ul(e,t){var n=le(t.value),o=le(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),o!=null&&(e.defaultValue=""+o)}function pl(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function hl(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Us(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?hl(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var po,ml=(function(e){return typeof MSApp!="undefined"&&MSApp.execUnsafeLocalFunction?function(t,n,o,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,o,i)})}:e})(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(po=po||document.createElement("div"),po.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=po.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function gn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var vn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ip=["Webkit","ms","Moz","O"];Object.keys(vn).forEach(function(e){ip.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),vn[t]=vn[e]})});function fl(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||vn.hasOwnProperty(e)&&vn[e]?(""+t).trim():t+"px"}function xl(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var o=n.indexOf("--")===0,i=fl(n,t[n],o);n==="float"&&(n="cssFloat"),o?e.setProperty(n,i):e[n]=i}}var ap=_({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function $s(e,t){if(t){if(ap[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(l(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(l(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(l(61))}if(t.style!=null&&typeof t.style!="object")throw Error(l(62))}}function Vs(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Gs=null;function Qs(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ys=null,Dr=null,Fr=null;function gl(e){if(e=Fn(e)){if(typeof Ys!="function")throw Error(l(280));var t=e.stateNode;t&&(t=Ro(t),Ys(e.stateNode,e.type,t))}}function vl(e){Dr?Fr?Fr.push(e):Fr=[e]:Dr=e}function yl(){if(Dr){var e=Dr,t=Fr;if(Fr=Dr=null,gl(e),t)for(e=0;e<t.length;e++)gl(t[e])}}function jl(e,t){return e(t)}function wl(){}var Ks=!1;function Nl(e,t,n){if(Ks)return e(t,n);Ks=!0;try{return jl(e,t,n)}finally{Ks=!1,(Dr!==null||Fr!==null)&&(wl(),yl())}}function yn(e,t){var n=e.stateNode;if(n===null)return null;var o=Ro(n);if(o===null)return null;n=o[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(l(231,t,typeof n));return n}var qs=!1;if(E)try{var jn={};Object.defineProperty(jn,"passive",{get:function(){qs=!0}}),window.addEventListener("test",jn,jn),window.removeEventListener("test",jn,jn)}catch{qs=!1}function lp(e,t,n,o,i,a,d,p,h){var j=Array.prototype.slice.call(arguments,3);try{t.apply(n,j)}catch(k){this.onError(k)}}var wn=!1,ho=null,mo=!1,Xs=null,cp={onError:function(e){wn=!0,ho=e}};function dp(e,t,n,o,i,a,d,p,h){wn=!1,ho=null,lp.apply(cp,arguments)}function up(e,t,n,o,i,a,d,p,h){if(dp.apply(this,arguments),wn){if(wn){var j=ho;wn=!1,ho=null}else throw Error(l(198));mo||(mo=!0,Xs=j)}}function jr(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function bl(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function kl(e){if(jr(e)!==e)throw Error(l(188))}function pp(e){var t=e.alternate;if(!t){if(t=jr(e),t===null)throw Error(l(188));return t!==e?null:e}for(var n=e,o=t;;){var i=n.return;if(i===null)break;var a=i.alternate;if(a===null){if(o=i.return,o!==null){n=o;continue}break}if(i.child===a.child){for(a=i.child;a;){if(a===n)return kl(i),e;if(a===o)return kl(i),t;a=a.sibling}throw Error(l(188))}if(n.return!==o.return)n=i,o=a;else{for(var d=!1,p=i.child;p;){if(p===n){d=!0,n=i,o=a;break}if(p===o){d=!0,o=i,n=a;break}p=p.sibling}if(!d){for(p=a.child;p;){if(p===n){d=!0,n=a,o=i;break}if(p===o){d=!0,o=a,n=i;break}p=p.sibling}if(!d)throw Error(l(189))}}if(n.alternate!==o)throw Error(l(190))}if(n.tag!==3)throw Error(l(188));return n.stateNode.current===n?e:t}function Sl(e){return e=pp(e),e!==null?Cl(e):null}function Cl(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Cl(e);if(t!==null)return t;e=e.sibling}return null}var Tl=c.unstable_scheduleCallback,El=c.unstable_cancelCallback,hp=c.unstable_shouldYield,mp=c.unstable_requestPaint,Pe=c.unstable_now,fp=c.unstable_getCurrentPriorityLevel,Js=c.unstable_ImmediatePriority,Ll=c.unstable_UserBlockingPriority,fo=c.unstable_NormalPriority,xp=c.unstable_LowPriority,Il=c.unstable_IdlePriority,xo=null,Rt=null;function gp(e){if(Rt&&typeof Rt.onCommitFiberRoot=="function")try{Rt.onCommitFiberRoot(xo,e,void 0,(e.current.flags&128)===128)}catch{}}var kt=Math.clz32?Math.clz32:jp,vp=Math.log,yp=Math.LN2;function jp(e){return e>>>=0,e===0?32:31-(vp(e)/yp|0)|0}var go=64,vo=4194304;function Nn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function yo(e,t){var n=e.pendingLanes;if(n===0)return 0;var o=0,i=e.suspendedLanes,a=e.pingedLanes,d=n&268435455;if(d!==0){var p=d&~i;p!==0?o=Nn(p):(a&=d,a!==0&&(o=Nn(a)))}else d=n&~i,d!==0?o=Nn(d):a!==0&&(o=Nn(a));if(o===0)return 0;if(t!==0&&t!==o&&(t&i)===0&&(i=o&-o,a=t&-t,i>=a||i===16&&(a&4194240)!==0))return t;if((o&4)!==0&&(o|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=o;0<t;)n=31-kt(t),i=1<<n,o|=e[n],t&=~i;return o}function wp(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Np(e,t){for(var n=e.suspendedLanes,o=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes;0<a;){var d=31-kt(a),p=1<<d,h=i[d];h===-1?((p&n)===0||(p&o)!==0)&&(i[d]=wp(p,t)):h<=t&&(e.expiredLanes|=p),a&=~p}}function Zs(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function zl(){var e=go;return go<<=1,(go&4194240)===0&&(go=64),e}function ei(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function bn(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-kt(t),e[t]=n}function bp(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var o=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-kt(n),a=1<<i;t[i]=0,o[i]=-1,e[i]=-1,n&=~a}}function ti(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var o=31-kt(n),i=1<<o;i&t|e[o]&t&&(e[o]|=t),n&=~i}}var ge=0;function _l(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var Pl,ri,Ml,Rl,Ol,ni=!1,jo=[],Jt=null,Zt=null,er=null,kn=new Map,Sn=new Map,tr=[],kp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Bl(e,t){switch(e){case"focusin":case"focusout":Jt=null;break;case"dragenter":case"dragleave":Zt=null;break;case"mouseover":case"mouseout":er=null;break;case"pointerover":case"pointerout":kn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Sn.delete(t.pointerId)}}function Cn(e,t,n,o,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:o,nativeEvent:a,targetContainers:[i]},t!==null&&(t=Fn(t),t!==null&&ri(t)),e):(e.eventSystemFlags|=o,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Sp(e,t,n,o,i){switch(t){case"focusin":return Jt=Cn(Jt,e,t,n,o,i),!0;case"dragenter":return Zt=Cn(Zt,e,t,n,o,i),!0;case"mouseover":return er=Cn(er,e,t,n,o,i),!0;case"pointerover":var a=i.pointerId;return kn.set(a,Cn(kn.get(a)||null,e,t,n,o,i)),!0;case"gotpointercapture":return a=i.pointerId,Sn.set(a,Cn(Sn.get(a)||null,e,t,n,o,i)),!0}return!1}function Al(e){var t=wr(e.target);if(t!==null){var n=jr(t);if(n!==null){if(t=n.tag,t===13){if(t=bl(n),t!==null){e.blockedOn=t,Ol(e.priority,function(){Ml(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function wo(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=si(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var o=new n.constructor(n.type,n);Gs=o,n.target.dispatchEvent(o),Gs=null}else return t=Fn(n),t!==null&&ri(t),e.blockedOn=n,!1;t.shift()}return!0}function Dl(e,t,n){wo(e)&&n.delete(t)}function Cp(){ni=!1,Jt!==null&&wo(Jt)&&(Jt=null),Zt!==null&&wo(Zt)&&(Zt=null),er!==null&&wo(er)&&(er=null),kn.forEach(Dl),Sn.forEach(Dl)}function Tn(e,t){e.blockedOn===t&&(e.blockedOn=null,ni||(ni=!0,c.unstable_scheduleCallback(c.unstable_NormalPriority,Cp)))}function En(e){function t(i){return Tn(i,e)}if(0<jo.length){Tn(jo[0],e);for(var n=1;n<jo.length;n++){var o=jo[n];o.blockedOn===e&&(o.blockedOn=null)}}for(Jt!==null&&Tn(Jt,e),Zt!==null&&Tn(Zt,e),er!==null&&Tn(er,e),kn.forEach(t),Sn.forEach(t),n=0;n<tr.length;n++)o=tr[n],o.blockedOn===e&&(o.blockedOn=null);for(;0<tr.length&&(n=tr[0],n.blockedOn===null);)Al(n),n.blockedOn===null&&tr.shift()}var Hr=z.ReactCurrentBatchConfig,No=!0;function Tp(e,t,n,o){var i=ge,a=Hr.transition;Hr.transition=null;try{ge=1,oi(e,t,n,o)}finally{ge=i,Hr.transition=a}}function Ep(e,t,n,o){var i=ge,a=Hr.transition;Hr.transition=null;try{ge=4,oi(e,t,n,o)}finally{ge=i,Hr.transition=a}}function oi(e,t,n,o){if(No){var i=si(e,t,n,o);if(i===null)Ni(e,t,o,bo,n),Bl(e,o);else if(Sp(i,e,t,n,o))o.stopPropagation();else if(Bl(e,o),t&4&&-1<kp.indexOf(e)){for(;i!==null;){var a=Fn(i);if(a!==null&&Pl(a),a=si(e,t,n,o),a===null&&Ni(e,t,o,bo,n),a===i)break;i=a}i!==null&&o.stopPropagation()}else Ni(e,t,o,null,n)}}var bo=null;function si(e,t,n,o){if(bo=null,e=Qs(o),e=wr(e),e!==null)if(t=jr(e),t===null)e=null;else if(n=t.tag,n===13){if(e=bl(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return bo=e,null}function Fl(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(fp()){case Js:return 1;case Ll:return 4;case fo:case xp:return 16;case Il:return 536870912;default:return 16}default:return 16}}var rr=null,ii=null,ko=null;function Hl(){if(ko)return ko;var e,t=ii,n=t.length,o,i="value"in rr?rr.value:rr.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var d=n-e;for(o=1;o<=d&&t[n-o]===i[a-o];o++);return ko=i.slice(e,1<o?1-o:void 0)}function So(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Co(){return!0}function Wl(){return!1}function dt(e){function t(n,o,i,a,d){this._reactName=n,this._targetInst=i,this.type=o,this.nativeEvent=a,this.target=d,this.currentTarget=null;for(var p in e)e.hasOwnProperty(p)&&(n=e[p],this[p]=n?n(a):a[p]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?Co:Wl,this.isPropagationStopped=Wl,this}return _(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Co)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Co)},persist:function(){},isPersistent:Co}),t}var Wr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ai=dt(Wr),Ln=_({},Wr,{view:0,detail:0}),Lp=dt(Ln),li,ci,In,To=_({},Ln,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ui,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==In&&(In&&e.type==="mousemove"?(li=e.screenX-In.screenX,ci=e.screenY-In.screenY):ci=li=0,In=e),li)},movementY:function(e){return"movementY"in e?e.movementY:ci}}),Ul=dt(To),Ip=_({},To,{dataTransfer:0}),zp=dt(Ip),_p=_({},Ln,{relatedTarget:0}),di=dt(_p),Pp=_({},Wr,{animationName:0,elapsedTime:0,pseudoElement:0}),Mp=dt(Pp),Rp=_({},Wr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Op=dt(Rp),Bp=_({},Wr,{data:0}),$l=dt(Bp),Ap={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Dp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Fp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Hp(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Fp[e])?!!t[e]:!1}function ui(){return Hp}var Wp=_({},Ln,{key:function(e){if(e.key){var t=Ap[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=So(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Dp[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ui,charCode:function(e){return e.type==="keypress"?So(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?So(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Up=dt(Wp),$p=_({},To,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Vl=dt($p),Vp=_({},Ln,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ui}),Gp=dt(Vp),Qp=_({},Wr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Yp=dt(Qp),Kp=_({},To,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),qp=dt(Kp),Xp=[9,13,27,32],pi=E&&"CompositionEvent"in window,zn=null;E&&"documentMode"in document&&(zn=document.documentMode);var Jp=E&&"TextEvent"in window&&!zn,Gl=E&&(!pi||zn&&8<zn&&11>=zn),Ql=" ",Yl=!1;function Kl(e,t){switch(e){case"keyup":return Xp.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ql(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ur=!1;function Zp(e,t){switch(e){case"compositionend":return ql(t);case"keypress":return t.which!==32?null:(Yl=!0,Ql);case"textInput":return e=t.data,e===Ql&&Yl?null:e;default:return null}}function eh(e,t){if(Ur)return e==="compositionend"||!pi&&Kl(e,t)?(e=Hl(),ko=ii=rr=null,Ur=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Gl&&t.locale!=="ko"?null:t.data;default:return null}}var th={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Xl(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!th[e.type]:t==="textarea"}function Jl(e,t,n,o){vl(o),t=_o(t,"onChange"),0<t.length&&(n=new ai("onChange","change",null,n,o),e.push({event:n,listeners:t}))}var _n=null,Pn=null;function rh(e){xc(e,0)}function Eo(e){var t=Yr(e);if(yr(t))return e}function nh(e,t){if(e==="change")return t}var Zl=!1;if(E){var hi;if(E){var mi="oninput"in document;if(!mi){var ec=document.createElement("div");ec.setAttribute("oninput","return;"),mi=typeof ec.oninput=="function"}hi=mi}else hi=!1;Zl=hi&&(!document.documentMode||9<document.documentMode)}function tc(){_n&&(_n.detachEvent("onpropertychange",rc),Pn=_n=null)}function rc(e){if(e.propertyName==="value"&&Eo(Pn)){var t=[];Jl(t,Pn,e,Qs(e)),Nl(rh,t)}}function oh(e,t,n){e==="focusin"?(tc(),_n=t,Pn=n,_n.attachEvent("onpropertychange",rc)):e==="focusout"&&tc()}function sh(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Eo(Pn)}function ih(e,t){if(e==="click")return Eo(t)}function ah(e,t){if(e==="input"||e==="change")return Eo(t)}function lh(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var St=typeof Object.is=="function"?Object.is:lh;function Mn(e,t){if(St(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),o=Object.keys(t);if(n.length!==o.length)return!1;for(o=0;o<n.length;o++){var i=n[o];if(!C.call(t,i)||!St(e[i],t[i]))return!1}return!0}function nc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function oc(e,t){var n=nc(e);e=0;for(var o;n;){if(n.nodeType===3){if(o=e+n.textContent.length,e<=t&&o>=t)return{node:n,offset:t-e};e=o}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=nc(n)}}function sc(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?sc(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function ic(){for(var e=window,t=bt();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=bt(e.document)}return t}function fi(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function ch(e){var t=ic(),n=e.focusedElem,o=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&sc(n.ownerDocument.documentElement,n)){if(o!==null&&fi(n)){if(t=o.start,e=o.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,a=Math.min(o.start,i);o=o.end===void 0?a:Math.min(o.end,i),!e.extend&&a>o&&(i=o,o=a,a=i),i=oc(n,a);var d=oc(n,o);i&&d&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==d.node||e.focusOffset!==d.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),a>o?(e.addRange(t),e.extend(d.node,d.offset)):(t.setEnd(d.node,d.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var dh=E&&"documentMode"in document&&11>=document.documentMode,$r=null,xi=null,Rn=null,gi=!1;function ac(e,t,n){var o=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;gi||$r==null||$r!==bt(o)||(o=$r,"selectionStart"in o&&fi(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),Rn&&Mn(Rn,o)||(Rn=o,o=_o(xi,"onSelect"),0<o.length&&(t=new ai("onSelect","select",null,t,n),e.push({event:t,listeners:o}),t.target=$r)))}function Lo(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Vr={animationend:Lo("Animation","AnimationEnd"),animationiteration:Lo("Animation","AnimationIteration"),animationstart:Lo("Animation","AnimationStart"),transitionend:Lo("Transition","TransitionEnd")},vi={},lc={};E&&(lc=document.createElement("div").style,"AnimationEvent"in window||(delete Vr.animationend.animation,delete Vr.animationiteration.animation,delete Vr.animationstart.animation),"TransitionEvent"in window||delete Vr.transitionend.transition);function Io(e){if(vi[e])return vi[e];if(!Vr[e])return e;var t=Vr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in lc)return vi[e]=t[n];return e}var cc=Io("animationend"),dc=Io("animationiteration"),uc=Io("animationstart"),pc=Io("transitionend"),hc=new Map,mc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function nr(e,t){hc.set(e,t),g(t,[e])}for(var yi=0;yi<mc.length;yi++){var ji=mc[yi],uh=ji.toLowerCase(),ph=ji[0].toUpperCase()+ji.slice(1);nr(uh,"on"+ph)}nr(cc,"onAnimationEnd"),nr(dc,"onAnimationIteration"),nr(uc,"onAnimationStart"),nr("dblclick","onDoubleClick"),nr("focusin","onFocus"),nr("focusout","onBlur"),nr(pc,"onTransitionEnd"),w("onMouseEnter",["mouseout","mouseover"]),w("onMouseLeave",["mouseout","mouseover"]),w("onPointerEnter",["pointerout","pointerover"]),w("onPointerLeave",["pointerout","pointerover"]),g("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),g("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),g("onBeforeInput",["compositionend","keypress","textInput","paste"]),g("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),g("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),g("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var On="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),hh=new Set("cancel close invalid load scroll toggle".split(" ").concat(On));function fc(e,t,n){var o=e.type||"unknown-event";e.currentTarget=n,up(o,t,void 0,e),e.currentTarget=null}function xc(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var o=e[n],i=o.event;o=o.listeners;e:{var a=void 0;if(t)for(var d=o.length-1;0<=d;d--){var p=o[d],h=p.instance,j=p.currentTarget;if(p=p.listener,h!==a&&i.isPropagationStopped())break e;fc(i,p,j),a=h}else for(d=0;d<o.length;d++){if(p=o[d],h=p.instance,j=p.currentTarget,p=p.listener,h!==a&&i.isPropagationStopped())break e;fc(i,p,j),a=h}}}if(mo)throw e=Xs,mo=!1,Xs=null,e}function Ne(e,t){var n=t[Ei];n===void 0&&(n=t[Ei]=new Set);var o=e+"__bubble";n.has(o)||(gc(t,e,2,!1),n.add(o))}function wi(e,t,n){var o=0;t&&(o|=4),gc(n,e,o,t)}var zo="_reactListening"+Math.random().toString(36).slice(2);function Bn(e){if(!e[zo]){e[zo]=!0,u.forEach(function(n){n!=="selectionchange"&&(hh.has(n)||wi(n,!1,e),wi(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[zo]||(t[zo]=!0,wi("selectionchange",!1,t))}}function gc(e,t,n,o){switch(Fl(t)){case 1:var i=Tp;break;case 4:i=Ep;break;default:i=oi}n=i.bind(null,t,n,e),i=void 0,!qs||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),o?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Ni(e,t,n,o,i){var a=o;if((t&1)===0&&(t&2)===0&&o!==null)e:for(;;){if(o===null)return;var d=o.tag;if(d===3||d===4){var p=o.stateNode.containerInfo;if(p===i||p.nodeType===8&&p.parentNode===i)break;if(d===4)for(d=o.return;d!==null;){var h=d.tag;if((h===3||h===4)&&(h=d.stateNode.containerInfo,h===i||h.nodeType===8&&h.parentNode===i))return;d=d.return}for(;p!==null;){if(d=wr(p),d===null)return;if(h=d.tag,h===5||h===6){o=a=d;continue e}p=p.parentNode}}o=o.return}Nl(function(){var j=a,k=Qs(n),S=[];e:{var b=hc.get(e);if(b!==void 0){var P=ai,R=e;switch(e){case"keypress":if(So(n)===0)break e;case"keydown":case"keyup":P=Up;break;case"focusin":R="focus",P=di;break;case"focusout":R="blur",P=di;break;case"beforeblur":case"afterblur":P=di;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":P=Ul;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":P=zp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":P=Gp;break;case cc:case dc:case uc:P=Mp;break;case pc:P=Yp;break;case"scroll":P=Lp;break;case"wheel":P=qp;break;case"copy":case"cut":case"paste":P=Op;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":P=Vl}var O=(t&4)!==0,Me=!O&&e==="scroll",v=O?b!==null?b+"Capture":null:b;O=[];for(var f=j,y;f!==null;){y=f;var T=y.stateNode;if(y.tag===5&&T!==null&&(y=T,v!==null&&(T=yn(f,v),T!=null&&O.push(An(f,T,y)))),Me)break;f=f.return}0<O.length&&(b=new P(b,R,null,n,k),S.push({event:b,listeners:O}))}}if((t&7)===0){e:{if(b=e==="mouseover"||e==="pointerover",P=e==="mouseout"||e==="pointerout",b&&n!==Gs&&(R=n.relatedTarget||n.fromElement)&&(wr(R)||R[Ht]))break e;if((P||b)&&(b=k.window===k?k:(b=k.ownerDocument)?b.defaultView||b.parentWindow:window,P?(R=n.relatedTarget||n.toElement,P=j,R=R?wr(R):null,R!==null&&(Me=jr(R),R!==Me||R.tag!==5&&R.tag!==6)&&(R=null)):(P=null,R=j),P!==R)){if(O=Ul,T="onMouseLeave",v="onMouseEnter",f="mouse",(e==="pointerout"||e==="pointerover")&&(O=Vl,T="onPointerLeave",v="onPointerEnter",f="pointer"),Me=P==null?b:Yr(P),y=R==null?b:Yr(R),b=new O(T,f+"leave",P,n,k),b.target=Me,b.relatedTarget=y,T=null,wr(k)===j&&(O=new O(v,f+"enter",R,n,k),O.target=y,O.relatedTarget=Me,T=O),Me=T,P&&R)t:{for(O=P,v=R,f=0,y=O;y;y=Gr(y))f++;for(y=0,T=v;T;T=Gr(T))y++;for(;0<f-y;)O=Gr(O),f--;for(;0<y-f;)v=Gr(v),y--;for(;f--;){if(O===v||v!==null&&O===v.alternate)break t;O=Gr(O),v=Gr(v)}O=null}else O=null;P!==null&&vc(S,b,P,O,!1),R!==null&&Me!==null&&vc(S,Me,R,O,!0)}}e:{if(b=j?Yr(j):window,P=b.nodeName&&b.nodeName.toLowerCase(),P==="select"||P==="input"&&b.type==="file")var A=nh;else if(Xl(b))if(Zl)A=ah;else{A=sh;var V=oh}else(P=b.nodeName)&&P.toLowerCase()==="input"&&(b.type==="checkbox"||b.type==="radio")&&(A=ih);if(A&&(A=A(e,j))){Jl(S,A,n,k);break e}V&&V(e,b,j),e==="focusout"&&(V=b._wrapperState)&&V.controlled&&b.type==="number"&&Hs(b,"number",b.value)}switch(V=j?Yr(j):window,e){case"focusin":(Xl(V)||V.contentEditable==="true")&&($r=V,xi=j,Rn=null);break;case"focusout":Rn=xi=$r=null;break;case"mousedown":gi=!0;break;case"contextmenu":case"mouseup":case"dragend":gi=!1,ac(S,n,k);break;case"selectionchange":if(dh)break;case"keydown":case"keyup":ac(S,n,k)}var G;if(pi)e:{switch(e){case"compositionstart":var K="onCompositionStart";break e;case"compositionend":K="onCompositionEnd";break e;case"compositionupdate":K="onCompositionUpdate";break e}K=void 0}else Ur?Kl(e,n)&&(K="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(K="onCompositionStart");K&&(Gl&&n.locale!=="ko"&&(Ur||K!=="onCompositionStart"?K==="onCompositionEnd"&&Ur&&(G=Hl()):(rr=k,ii="value"in rr?rr.value:rr.textContent,Ur=!0)),V=_o(j,K),0<V.length&&(K=new $l(K,e,null,n,k),S.push({event:K,listeners:V}),G?K.data=G:(G=ql(n),G!==null&&(K.data=G)))),(G=Jp?Zp(e,n):eh(e,n))&&(j=_o(j,"onBeforeInput"),0<j.length&&(k=new $l("onBeforeInput","beforeinput",null,n,k),S.push({event:k,listeners:j}),k.data=G))}xc(S,t)})}function An(e,t,n){return{instance:e,listener:t,currentTarget:n}}function _o(e,t){for(var n=t+"Capture",o=[];e!==null;){var i=e,a=i.stateNode;i.tag===5&&a!==null&&(i=a,a=yn(e,n),a!=null&&o.unshift(An(e,a,i)),a=yn(e,t),a!=null&&o.push(An(e,a,i))),e=e.return}return o}function Gr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function vc(e,t,n,o,i){for(var a=t._reactName,d=[];n!==null&&n!==o;){var p=n,h=p.alternate,j=p.stateNode;if(h!==null&&h===o)break;p.tag===5&&j!==null&&(p=j,i?(h=yn(n,a),h!=null&&d.unshift(An(n,h,p))):i||(h=yn(n,a),h!=null&&d.push(An(n,h,p)))),n=n.return}d.length!==0&&e.push({event:t,listeners:d})}var mh=/\r\n?/g,fh=/\u0000|\uFFFD/g;function yc(e){return(typeof e=="string"?e:""+e).replace(mh,`
`).replace(fh,"")}function Po(e,t,n){if(t=yc(t),yc(e)!==t&&n)throw Error(l(425))}function Mo(){}var bi=null,ki=null;function Si(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ci=typeof setTimeout=="function"?setTimeout:void 0,xh=typeof clearTimeout=="function"?clearTimeout:void 0,jc=typeof Promise=="function"?Promise:void 0,gh=typeof queueMicrotask=="function"?queueMicrotask:typeof jc!="undefined"?function(e){return jc.resolve(null).then(e).catch(vh)}:Ci;function vh(e){setTimeout(function(){throw e})}function Ti(e,t){var n=t,o=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(o===0){e.removeChild(i),En(t);return}o--}else n!=="$"&&n!=="$?"&&n!=="$!"||o++;n=i}while(n);En(t)}function or(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function wc(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Qr=Math.random().toString(36).slice(2),Ot="__reactFiber$"+Qr,Dn="__reactProps$"+Qr,Ht="__reactContainer$"+Qr,Ei="__reactEvents$"+Qr,yh="__reactListeners$"+Qr,jh="__reactHandles$"+Qr;function wr(e){var t=e[Ot];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Ht]||n[Ot]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=wc(e);e!==null;){if(n=e[Ot])return n;e=wc(e)}return t}e=n,n=e.parentNode}return null}function Fn(e){return e=e[Ot]||e[Ht],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Yr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(l(33))}function Ro(e){return e[Dn]||null}var Li=[],Kr=-1;function sr(e){return{current:e}}function be(e){0>Kr||(e.current=Li[Kr],Li[Kr]=null,Kr--)}function we(e,t){Kr++,Li[Kr]=e.current,e.current=t}var ir={},qe=sr(ir),nt=sr(!1),Nr=ir;function qr(e,t){var n=e.type.contextTypes;if(!n)return ir;var o=e.stateNode;if(o&&o.__reactInternalMemoizedUnmaskedChildContext===t)return o.__reactInternalMemoizedMaskedChildContext;var i={},a;for(a in n)i[a]=t[a];return o&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function ot(e){return e=e.childContextTypes,e!=null}function Oo(){be(nt),be(qe)}function Nc(e,t,n){if(qe.current!==ir)throw Error(l(168));we(qe,t),we(nt,n)}function bc(e,t,n){var o=e.stateNode;if(t=t.childContextTypes,typeof o.getChildContext!="function")return n;o=o.getChildContext();for(var i in o)if(!(i in t))throw Error(l(108,de(e)||"Unknown",i));return _({},n,o)}function Bo(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||ir,Nr=qe.current,we(qe,e),we(nt,nt.current),!0}function kc(e,t,n){var o=e.stateNode;if(!o)throw Error(l(169));n?(e=bc(e,t,Nr),o.__reactInternalMemoizedMergedChildContext=e,be(nt),be(qe),we(qe,e)):be(nt),we(nt,n)}var Wt=null,Ao=!1,Ii=!1;function Sc(e){Wt===null?Wt=[e]:Wt.push(e)}function wh(e){Ao=!0,Sc(e)}function ar(){if(!Ii&&Wt!==null){Ii=!0;var e=0,t=ge;try{var n=Wt;for(ge=1;e<n.length;e++){var o=n[e];do o=o(!0);while(o!==null)}Wt=null,Ao=!1}catch(i){throw Wt!==null&&(Wt=Wt.slice(e+1)),Tl(Js,ar),i}finally{ge=t,Ii=!1}}return null}var Xr=[],Jr=0,Do=null,Fo=0,ft=[],xt=0,br=null,Ut=1,$t="";function kr(e,t){Xr[Jr++]=Fo,Xr[Jr++]=Do,Do=e,Fo=t}function Cc(e,t,n){ft[xt++]=Ut,ft[xt++]=$t,ft[xt++]=br,br=e;var o=Ut;e=$t;var i=32-kt(o)-1;o&=~(1<<i),n+=1;var a=32-kt(t)+i;if(30<a){var d=i-i%5;a=(o&(1<<d)-1).toString(32),o>>=d,i-=d,Ut=1<<32-kt(t)+i|n<<i|o,$t=a+e}else Ut=1<<a|n<<i|o,$t=e}function zi(e){e.return!==null&&(kr(e,1),Cc(e,1,0))}function _i(e){for(;e===Do;)Do=Xr[--Jr],Xr[Jr]=null,Fo=Xr[--Jr],Xr[Jr]=null;for(;e===br;)br=ft[--xt],ft[xt]=null,$t=ft[--xt],ft[xt]=null,Ut=ft[--xt],ft[xt]=null}var ut=null,pt=null,Ce=!1,Ct=null;function Tc(e,t){var n=jt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Ec(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ut=e,pt=or(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ut=e,pt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=br!==null?{id:Ut,overflow:$t}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=jt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,ut=e,pt=null,!0):!1;default:return!1}}function Pi(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Mi(e){if(Ce){var t=pt;if(t){var n=t;if(!Ec(e,t)){if(Pi(e))throw Error(l(418));t=or(n.nextSibling);var o=ut;t&&Ec(e,t)?Tc(o,n):(e.flags=e.flags&-4097|2,Ce=!1,ut=e)}}else{if(Pi(e))throw Error(l(418));e.flags=e.flags&-4097|2,Ce=!1,ut=e}}}function Lc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ut=e}function Ho(e){if(e!==ut)return!1;if(!Ce)return Lc(e),Ce=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Si(e.type,e.memoizedProps)),t&&(t=pt)){if(Pi(e))throw Ic(),Error(l(418));for(;t;)Tc(e,t),t=or(t.nextSibling)}if(Lc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(l(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){pt=or(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}pt=null}}else pt=ut?or(e.stateNode.nextSibling):null;return!0}function Ic(){for(var e=pt;e;)e=or(e.nextSibling)}function Zr(){pt=ut=null,Ce=!1}function Ri(e){Ct===null?Ct=[e]:Ct.push(e)}var Nh=z.ReactCurrentBatchConfig;function Hn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(l(309));var o=n.stateNode}if(!o)throw Error(l(147,e));var i=o,a=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===a?t.ref:(t=function(d){var p=i.refs;d===null?delete p[a]:p[a]=d},t._stringRef=a,t)}if(typeof e!="string")throw Error(l(284));if(!n._owner)throw Error(l(290,e))}return e}function Wo(e,t){throw e=Object.prototype.toString.call(t),Error(l(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function zc(e){var t=e._init;return t(e._payload)}function _c(e){function t(v,f){if(e){var y=v.deletions;y===null?(v.deletions=[f],v.flags|=16):y.push(f)}}function n(v,f){if(!e)return null;for(;f!==null;)t(v,f),f=f.sibling;return null}function o(v,f){for(v=new Map;f!==null;)f.key!==null?v.set(f.key,f):v.set(f.index,f),f=f.sibling;return v}function i(v,f){return v=fr(v,f),v.index=0,v.sibling=null,v}function a(v,f,y){return v.index=y,e?(y=v.alternate,y!==null?(y=y.index,y<f?(v.flags|=2,f):y):(v.flags|=2,f)):(v.flags|=1048576,f)}function d(v){return e&&v.alternate===null&&(v.flags|=2),v}function p(v,f,y,T){return f===null||f.tag!==6?(f=Ca(y,v.mode,T),f.return=v,f):(f=i(f,y),f.return=v,f)}function h(v,f,y,T){var A=y.type;return A===I?k(v,f,y.props.children,T,y.key):f!==null&&(f.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===Ke&&zc(A)===f.type)?(T=i(f,y.props),T.ref=Hn(v,f,y),T.return=v,T):(T=ps(y.type,y.key,y.props,null,v.mode,T),T.ref=Hn(v,f,y),T.return=v,T)}function j(v,f,y,T){return f===null||f.tag!==4||f.stateNode.containerInfo!==y.containerInfo||f.stateNode.implementation!==y.implementation?(f=Ta(y,v.mode,T),f.return=v,f):(f=i(f,y.children||[]),f.return=v,f)}function k(v,f,y,T,A){return f===null||f.tag!==7?(f=_r(y,v.mode,T,A),f.return=v,f):(f=i(f,y),f.return=v,f)}function S(v,f,y){if(typeof f=="string"&&f!==""||typeof f=="number")return f=Ca(""+f,v.mode,y),f.return=v,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case X:return y=ps(f.type,f.key,f.props,null,v.mode,y),y.ref=Hn(v,null,f),y.return=v,y;case U:return f=Ta(f,v.mode,y),f.return=v,f;case Ke:var T=f._init;return S(v,T(f._payload),y)}if(xn(f)||F(f))return f=_r(f,v.mode,y,null),f.return=v,f;Wo(v,f)}return null}function b(v,f,y,T){var A=f!==null?f.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return A!==null?null:p(v,f,""+y,T);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case X:return y.key===A?h(v,f,y,T):null;case U:return y.key===A?j(v,f,y,T):null;case Ke:return A=y._init,b(v,f,A(y._payload),T)}if(xn(y)||F(y))return A!==null?null:k(v,f,y,T,null);Wo(v,y)}return null}function P(v,f,y,T,A){if(typeof T=="string"&&T!==""||typeof T=="number")return v=v.get(y)||null,p(f,v,""+T,A);if(typeof T=="object"&&T!==null){switch(T.$$typeof){case X:return v=v.get(T.key===null?y:T.key)||null,h(f,v,T,A);case U:return v=v.get(T.key===null?y:T.key)||null,j(f,v,T,A);case Ke:var V=T._init;return P(v,f,y,V(T._payload),A)}if(xn(T)||F(T))return v=v.get(y)||null,k(f,v,T,A,null);Wo(f,T)}return null}function R(v,f,y,T){for(var A=null,V=null,G=f,K=f=0,We=null;G!==null&&K<y.length;K++){G.index>K?(We=G,G=null):We=G.sibling;var pe=b(v,G,y[K],T);if(pe===null){G===null&&(G=We);break}e&&G&&pe.alternate===null&&t(v,G),f=a(pe,f,K),V===null?A=pe:V.sibling=pe,V=pe,G=We}if(K===y.length)return n(v,G),Ce&&kr(v,K),A;if(G===null){for(;K<y.length;K++)G=S(v,y[K],T),G!==null&&(f=a(G,f,K),V===null?A=G:V.sibling=G,V=G);return Ce&&kr(v,K),A}for(G=o(v,G);K<y.length;K++)We=P(G,v,K,y[K],T),We!==null&&(e&&We.alternate!==null&&G.delete(We.key===null?K:We.key),f=a(We,f,K),V===null?A=We:V.sibling=We,V=We);return e&&G.forEach(function(xr){return t(v,xr)}),Ce&&kr(v,K),A}function O(v,f,y,T){var A=F(y);if(typeof A!="function")throw Error(l(150));if(y=A.call(y),y==null)throw Error(l(151));for(var V=A=null,G=f,K=f=0,We=null,pe=y.next();G!==null&&!pe.done;K++,pe=y.next()){G.index>K?(We=G,G=null):We=G.sibling;var xr=b(v,G,pe.value,T);if(xr===null){G===null&&(G=We);break}e&&G&&xr.alternate===null&&t(v,G),f=a(xr,f,K),V===null?A=xr:V.sibling=xr,V=xr,G=We}if(pe.done)return n(v,G),Ce&&kr(v,K),A;if(G===null){for(;!pe.done;K++,pe=y.next())pe=S(v,pe.value,T),pe!==null&&(f=a(pe,f,K),V===null?A=pe:V.sibling=pe,V=pe);return Ce&&kr(v,K),A}for(G=o(v,G);!pe.done;K++,pe=y.next())pe=P(G,v,K,pe.value,T),pe!==null&&(e&&pe.alternate!==null&&G.delete(pe.key===null?K:pe.key),f=a(pe,f,K),V===null?A=pe:V.sibling=pe,V=pe);return e&&G.forEach(function(tm){return t(v,tm)}),Ce&&kr(v,K),A}function Me(v,f,y,T){if(typeof y=="object"&&y!==null&&y.type===I&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case X:e:{for(var A=y.key,V=f;V!==null;){if(V.key===A){if(A=y.type,A===I){if(V.tag===7){n(v,V.sibling),f=i(V,y.props.children),f.return=v,v=f;break e}}else if(V.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===Ke&&zc(A)===V.type){n(v,V.sibling),f=i(V,y.props),f.ref=Hn(v,V,y),f.return=v,v=f;break e}n(v,V);break}else t(v,V);V=V.sibling}y.type===I?(f=_r(y.props.children,v.mode,T,y.key),f.return=v,v=f):(T=ps(y.type,y.key,y.props,null,v.mode,T),T.ref=Hn(v,f,y),T.return=v,v=T)}return d(v);case U:e:{for(V=y.key;f!==null;){if(f.key===V)if(f.tag===4&&f.stateNode.containerInfo===y.containerInfo&&f.stateNode.implementation===y.implementation){n(v,f.sibling),f=i(f,y.children||[]),f.return=v,v=f;break e}else{n(v,f);break}else t(v,f);f=f.sibling}f=Ta(y,v.mode,T),f.return=v,v=f}return d(v);case Ke:return V=y._init,Me(v,f,V(y._payload),T)}if(xn(y))return R(v,f,y,T);if(F(y))return O(v,f,y,T);Wo(v,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,f!==null&&f.tag===6?(n(v,f.sibling),f=i(f,y),f.return=v,v=f):(n(v,f),f=Ca(y,v.mode,T),f.return=v,v=f),d(v)):n(v,f)}return Me}var en=_c(!0),Pc=_c(!1),Uo=sr(null),$o=null,tn=null,Oi=null;function Bi(){Oi=tn=$o=null}function Ai(e){var t=Uo.current;be(Uo),e._currentValue=t}function Di(e,t,n){for(;e!==null;){var o=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,o!==null&&(o.childLanes|=t)):o!==null&&(o.childLanes&t)!==t&&(o.childLanes|=t),e===n)break;e=e.return}}function rn(e,t){$o=e,Oi=tn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(st=!0),e.firstContext=null)}function gt(e){var t=e._currentValue;if(Oi!==e)if(e={context:e,memoizedValue:t,next:null},tn===null){if($o===null)throw Error(l(308));tn=e,$o.dependencies={lanes:0,firstContext:e}}else tn=tn.next=e;return t}var Sr=null;function Fi(e){Sr===null?Sr=[e]:Sr.push(e)}function Mc(e,t,n,o){var i=t.interleaved;return i===null?(n.next=n,Fi(t)):(n.next=i.next,i.next=n),t.interleaved=n,Vt(e,o)}function Vt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var lr=!1;function Hi(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Rc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Gt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function cr(e,t,n){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(ue&2)!==0){var i=o.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),o.pending=t,Vt(e,n)}return i=o.interleaved,i===null?(t.next=t,Fi(o)):(t.next=i.next,i.next=t),o.interleaved=t,Vt(e,n)}function Vo(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var o=t.lanes;o&=e.pendingLanes,n|=o,t.lanes=n,ti(e,n)}}function Oc(e,t){var n=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,n===o)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var d={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};a===null?i=a=d:a=a.next=d,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:o.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:o.shared,effects:o.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Go(e,t,n,o){var i=e.updateQueue;lr=!1;var a=i.firstBaseUpdate,d=i.lastBaseUpdate,p=i.shared.pending;if(p!==null){i.shared.pending=null;var h=p,j=h.next;h.next=null,d===null?a=j:d.next=j,d=h;var k=e.alternate;k!==null&&(k=k.updateQueue,p=k.lastBaseUpdate,p!==d&&(p===null?k.firstBaseUpdate=j:p.next=j,k.lastBaseUpdate=h))}if(a!==null){var S=i.baseState;d=0,k=j=h=null,p=a;do{var b=p.lane,P=p.eventTime;if((o&b)===b){k!==null&&(k=k.next={eventTime:P,lane:0,tag:p.tag,payload:p.payload,callback:p.callback,next:null});e:{var R=e,O=p;switch(b=t,P=n,O.tag){case 1:if(R=O.payload,typeof R=="function"){S=R.call(P,S,b);break e}S=R;break e;case 3:R.flags=R.flags&-65537|128;case 0:if(R=O.payload,b=typeof R=="function"?R.call(P,S,b):R,b==null)break e;S=_({},S,b);break e;case 2:lr=!0}}p.callback!==null&&p.lane!==0&&(e.flags|=64,b=i.effects,b===null?i.effects=[p]:b.push(p))}else P={eventTime:P,lane:b,tag:p.tag,payload:p.payload,callback:p.callback,next:null},k===null?(j=k=P,h=S):k=k.next=P,d|=b;if(p=p.next,p===null){if(p=i.shared.pending,p===null)break;b=p,p=b.next,b.next=null,i.lastBaseUpdate=b,i.shared.pending=null}}while(!0);if(k===null&&(h=S),i.baseState=h,i.firstBaseUpdate=j,i.lastBaseUpdate=k,t=i.shared.interleaved,t!==null){i=t;do d|=i.lane,i=i.next;while(i!==t)}else a===null&&(i.shared.lanes=0);Er|=d,e.lanes=d,e.memoizedState=S}}function Bc(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var o=e[t],i=o.callback;if(i!==null){if(o.callback=null,o=n,typeof i!="function")throw Error(l(191,i));i.call(o)}}}var Wn={},Bt=sr(Wn),Un=sr(Wn),$n=sr(Wn);function Cr(e){if(e===Wn)throw Error(l(174));return e}function Wi(e,t){switch(we($n,t),we(Un,e),we(Bt,Wn),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Us(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Us(t,e)}be(Bt),we(Bt,t)}function nn(){be(Bt),be(Un),be($n)}function Ac(e){Cr($n.current);var t=Cr(Bt.current),n=Us(t,e.type);t!==n&&(we(Un,e),we(Bt,n))}function Ui(e){Un.current===e&&(be(Bt),be(Un))}var Ee=sr(0);function Qo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var $i=[];function Vi(){for(var e=0;e<$i.length;e++)$i[e]._workInProgressVersionPrimary=null;$i.length=0}var Yo=z.ReactCurrentDispatcher,Gi=z.ReactCurrentBatchConfig,Tr=0,Le=null,Be=null,Fe=null,Ko=!1,Vn=!1,Gn=0,bh=0;function Xe(){throw Error(l(321))}function Qi(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!St(e[n],t[n]))return!1;return!0}function Yi(e,t,n,o,i,a){if(Tr=a,Le=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Yo.current=e===null||e.memoizedState===null?Th:Eh,e=n(o,i),Vn){a=0;do{if(Vn=!1,Gn=0,25<=a)throw Error(l(301));a+=1,Fe=Be=null,t.updateQueue=null,Yo.current=Lh,e=n(o,i)}while(Vn)}if(Yo.current=Jo,t=Be!==null&&Be.next!==null,Tr=0,Fe=Be=Le=null,Ko=!1,t)throw Error(l(300));return e}function Ki(){var e=Gn!==0;return Gn=0,e}function At(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Fe===null?Le.memoizedState=Fe=e:Fe=Fe.next=e,Fe}function vt(){if(Be===null){var e=Le.alternate;e=e!==null?e.memoizedState:null}else e=Be.next;var t=Fe===null?Le.memoizedState:Fe.next;if(t!==null)Fe=t,Be=e;else{if(e===null)throw Error(l(310));Be=e,e={memoizedState:Be.memoizedState,baseState:Be.baseState,baseQueue:Be.baseQueue,queue:Be.queue,next:null},Fe===null?Le.memoizedState=Fe=e:Fe=Fe.next=e}return Fe}function Qn(e,t){return typeof t=="function"?t(e):t}function qi(e){var t=vt(),n=t.queue;if(n===null)throw Error(l(311));n.lastRenderedReducer=e;var o=Be,i=o.baseQueue,a=n.pending;if(a!==null){if(i!==null){var d=i.next;i.next=a.next,a.next=d}o.baseQueue=i=a,n.pending=null}if(i!==null){a=i.next,o=o.baseState;var p=d=null,h=null,j=a;do{var k=j.lane;if((Tr&k)===k)h!==null&&(h=h.next={lane:0,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null}),o=j.hasEagerState?j.eagerState:e(o,j.action);else{var S={lane:k,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null};h===null?(p=h=S,d=o):h=h.next=S,Le.lanes|=k,Er|=k}j=j.next}while(j!==null&&j!==a);h===null?d=o:h.next=p,St(o,t.memoizedState)||(st=!0),t.memoizedState=o,t.baseState=d,t.baseQueue=h,n.lastRenderedState=o}if(e=n.interleaved,e!==null){i=e;do a=i.lane,Le.lanes|=a,Er|=a,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Xi(e){var t=vt(),n=t.queue;if(n===null)throw Error(l(311));n.lastRenderedReducer=e;var o=n.dispatch,i=n.pending,a=t.memoizedState;if(i!==null){n.pending=null;var d=i=i.next;do a=e(a,d.action),d=d.next;while(d!==i);St(a,t.memoizedState)||(st=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),n.lastRenderedState=a}return[a,o]}function Dc(){}function Fc(e,t){var n=Le,o=vt(),i=t(),a=!St(o.memoizedState,i);if(a&&(o.memoizedState=i,st=!0),o=o.queue,Ji(Uc.bind(null,n,o,e),[e]),o.getSnapshot!==t||a||Fe!==null&&Fe.memoizedState.tag&1){if(n.flags|=2048,Yn(9,Wc.bind(null,n,o,i,t),void 0,null),He===null)throw Error(l(349));(Tr&30)!==0||Hc(n,t,i)}return i}function Hc(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Le.updateQueue,t===null?(t={lastEffect:null,stores:null},Le.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Wc(e,t,n,o){t.value=n,t.getSnapshot=o,$c(t)&&Vc(e)}function Uc(e,t,n){return n(function(){$c(t)&&Vc(e)})}function $c(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!St(e,n)}catch{return!0}}function Vc(e){var t=Vt(e,1);t!==null&&It(t,e,1,-1)}function Gc(e){var t=At();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Qn,lastRenderedState:e},t.queue=e,e=e.dispatch=Ch.bind(null,Le,e),[t.memoizedState,e]}function Yn(e,t,n,o){return e={tag:e,create:t,destroy:n,deps:o,next:null},t=Le.updateQueue,t===null?(t={lastEffect:null,stores:null},Le.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(o=n.next,n.next=e,e.next=o,t.lastEffect=e)),e}function Qc(){return vt().memoizedState}function qo(e,t,n,o){var i=At();Le.flags|=e,i.memoizedState=Yn(1|t,n,void 0,o===void 0?null:o)}function Xo(e,t,n,o){var i=vt();o=o===void 0?null:o;var a=void 0;if(Be!==null){var d=Be.memoizedState;if(a=d.destroy,o!==null&&Qi(o,d.deps)){i.memoizedState=Yn(t,n,a,o);return}}Le.flags|=e,i.memoizedState=Yn(1|t,n,a,o)}function Yc(e,t){return qo(8390656,8,e,t)}function Ji(e,t){return Xo(2048,8,e,t)}function Kc(e,t){return Xo(4,2,e,t)}function qc(e,t){return Xo(4,4,e,t)}function Xc(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Jc(e,t,n){return n=n!=null?n.concat([e]):null,Xo(4,4,Xc.bind(null,t,e),n)}function Zi(){}function Zc(e,t){var n=vt();t=t===void 0?null:t;var o=n.memoizedState;return o!==null&&t!==null&&Qi(t,o[1])?o[0]:(n.memoizedState=[e,t],e)}function ed(e,t){var n=vt();t=t===void 0?null:t;var o=n.memoizedState;return o!==null&&t!==null&&Qi(t,o[1])?o[0]:(e=e(),n.memoizedState=[e,t],e)}function td(e,t,n){return(Tr&21)===0?(e.baseState&&(e.baseState=!1,st=!0),e.memoizedState=n):(St(n,t)||(n=zl(),Le.lanes|=n,Er|=n,e.baseState=!0),t)}function kh(e,t){var n=ge;ge=n!==0&&4>n?n:4,e(!0);var o=Gi.transition;Gi.transition={};try{e(!1),t()}finally{ge=n,Gi.transition=o}}function rd(){return vt().memoizedState}function Sh(e,t,n){var o=hr(e);if(n={lane:o,action:n,hasEagerState:!1,eagerState:null,next:null},nd(e))od(t,n);else if(n=Mc(e,t,n,o),n!==null){var i=rt();It(n,e,o,i),sd(n,t,o)}}function Ch(e,t,n){var o=hr(e),i={lane:o,action:n,hasEagerState:!1,eagerState:null,next:null};if(nd(e))od(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var d=t.lastRenderedState,p=a(d,n);if(i.hasEagerState=!0,i.eagerState=p,St(p,d)){var h=t.interleaved;h===null?(i.next=i,Fi(t)):(i.next=h.next,h.next=i),t.interleaved=i;return}}catch{}finally{}n=Mc(e,t,i,o),n!==null&&(i=rt(),It(n,e,o,i),sd(n,t,o))}}function nd(e){var t=e.alternate;return e===Le||t!==null&&t===Le}function od(e,t){Vn=Ko=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function sd(e,t,n){if((n&4194240)!==0){var o=t.lanes;o&=e.pendingLanes,n|=o,t.lanes=n,ti(e,n)}}var Jo={readContext:gt,useCallback:Xe,useContext:Xe,useEffect:Xe,useImperativeHandle:Xe,useInsertionEffect:Xe,useLayoutEffect:Xe,useMemo:Xe,useReducer:Xe,useRef:Xe,useState:Xe,useDebugValue:Xe,useDeferredValue:Xe,useTransition:Xe,useMutableSource:Xe,useSyncExternalStore:Xe,useId:Xe,unstable_isNewReconciler:!1},Th={readContext:gt,useCallback:function(e,t){return At().memoizedState=[e,t===void 0?null:t],e},useContext:gt,useEffect:Yc,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,qo(4194308,4,Xc.bind(null,t,e),n)},useLayoutEffect:function(e,t){return qo(4194308,4,e,t)},useInsertionEffect:function(e,t){return qo(4,2,e,t)},useMemo:function(e,t){var n=At();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var o=At();return t=n!==void 0?n(t):t,o.memoizedState=o.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},o.queue=e,e=e.dispatch=Sh.bind(null,Le,e),[o.memoizedState,e]},useRef:function(e){var t=At();return e={current:e},t.memoizedState=e},useState:Gc,useDebugValue:Zi,useDeferredValue:function(e){return At().memoizedState=e},useTransition:function(){var e=Gc(!1),t=e[0];return e=kh.bind(null,e[1]),At().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var o=Le,i=At();if(Ce){if(n===void 0)throw Error(l(407));n=n()}else{if(n=t(),He===null)throw Error(l(349));(Tr&30)!==0||Hc(o,t,n)}i.memoizedState=n;var a={value:n,getSnapshot:t};return i.queue=a,Yc(Uc.bind(null,o,a,e),[e]),o.flags|=2048,Yn(9,Wc.bind(null,o,a,n,t),void 0,null),n},useId:function(){var e=At(),t=He.identifierPrefix;if(Ce){var n=$t,o=Ut;n=(o&~(1<<32-kt(o)-1)).toString(32)+n,t=":"+t+"R"+n,n=Gn++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=bh++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Eh={readContext:gt,useCallback:Zc,useContext:gt,useEffect:Ji,useImperativeHandle:Jc,useInsertionEffect:Kc,useLayoutEffect:qc,useMemo:ed,useReducer:qi,useRef:Qc,useState:function(){return qi(Qn)},useDebugValue:Zi,useDeferredValue:function(e){var t=vt();return td(t,Be.memoizedState,e)},useTransition:function(){var e=qi(Qn)[0],t=vt().memoizedState;return[e,t]},useMutableSource:Dc,useSyncExternalStore:Fc,useId:rd,unstable_isNewReconciler:!1},Lh={readContext:gt,useCallback:Zc,useContext:gt,useEffect:Ji,useImperativeHandle:Jc,useInsertionEffect:Kc,useLayoutEffect:qc,useMemo:ed,useReducer:Xi,useRef:Qc,useState:function(){return Xi(Qn)},useDebugValue:Zi,useDeferredValue:function(e){var t=vt();return Be===null?t.memoizedState=e:td(t,Be.memoizedState,e)},useTransition:function(){var e=Xi(Qn)[0],t=vt().memoizedState;return[e,t]},useMutableSource:Dc,useSyncExternalStore:Fc,useId:rd,unstable_isNewReconciler:!1};function Tt(e,t){if(e&&e.defaultProps){t=_({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function ea(e,t,n,o){t=e.memoizedState,n=n(o,t),n=n==null?t:_({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Zo={isMounted:function(e){return(e=e._reactInternals)?jr(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var o=rt(),i=hr(e),a=Gt(o,i);a.payload=t,n!=null&&(a.callback=n),t=cr(e,a,i),t!==null&&(It(t,e,i,o),Vo(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var o=rt(),i=hr(e),a=Gt(o,i);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=cr(e,a,i),t!==null&&(It(t,e,i,o),Vo(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=rt(),o=hr(e),i=Gt(n,o);i.tag=2,t!=null&&(i.callback=t),t=cr(e,i,o),t!==null&&(It(t,e,o,n),Vo(t,e,o))}};function id(e,t,n,o,i,a,d){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,a,d):t.prototype&&t.prototype.isPureReactComponent?!Mn(n,o)||!Mn(i,a):!0}function ad(e,t,n){var o=!1,i=ir,a=t.contextType;return typeof a=="object"&&a!==null?a=gt(a):(i=ot(t)?Nr:qe.current,o=t.contextTypes,a=(o=o!=null)?qr(e,i):ir),t=new t(n,a),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Zo,e.stateNode=t,t._reactInternals=e,o&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=a),t}function ld(e,t,n,o){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,o),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,o),t.state!==e&&Zo.enqueueReplaceState(t,t.state,null)}function ta(e,t,n,o){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},Hi(e);var a=t.contextType;typeof a=="object"&&a!==null?i.context=gt(a):(a=ot(t)?Nr:qe.current,i.context=qr(e,a)),i.state=e.memoizedState,a=t.getDerivedStateFromProps,typeof a=="function"&&(ea(e,t,a,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Zo.enqueueReplaceState(i,i.state,null),Go(e,n,i,o),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function on(e,t){try{var n="",o=t;do n+=ae(o),o=o.return;while(o);var i=n}catch(a){i=`
Error generating stack: `+a.message+`
`+a.stack}return{value:e,source:t,stack:i,digest:null}}function ra(e,t,n){return{value:e,source:null,stack:n!=null?n:null,digest:t!=null?t:null}}function na(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Ih=typeof WeakMap=="function"?WeakMap:Map;function cd(e,t,n){n=Gt(-1,n),n.tag=3,n.payload={element:null};var o=t.value;return n.callback=function(){is||(is=!0,va=o),na(e,t)},n}function dd(e,t,n){n=Gt(-1,n),n.tag=3;var o=e.type.getDerivedStateFromError;if(typeof o=="function"){var i=t.value;n.payload=function(){return o(i)},n.callback=function(){na(e,t)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(n.callback=function(){na(e,t),typeof o!="function"&&(ur===null?ur=new Set([this]):ur.add(this));var d=t.stack;this.componentDidCatch(t.value,{componentStack:d!==null?d:""})}),n}function ud(e,t,n){var o=e.pingCache;if(o===null){o=e.pingCache=new Ih;var i=new Set;o.set(t,i)}else i=o.get(t),i===void 0&&(i=new Set,o.set(t,i));i.has(n)||(i.add(n),e=$h.bind(null,e,t,n),t.then(e,e))}function pd(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function hd(e,t,n,o,i){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Gt(-1,1),t.tag=2,cr(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=i,e)}var zh=z.ReactCurrentOwner,st=!1;function tt(e,t,n,o){t.child=e===null?Pc(t,null,n,o):en(t,e.child,n,o)}function md(e,t,n,o,i){n=n.render;var a=t.ref;return rn(t,i),o=Yi(e,t,n,o,a,i),n=Ki(),e!==null&&!st?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Qt(e,t,i)):(Ce&&n&&zi(t),t.flags|=1,tt(e,t,o,i),t.child)}function fd(e,t,n,o,i){if(e===null){var a=n.type;return typeof a=="function"&&!Sa(a)&&a.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=a,xd(e,t,a,o,i)):(e=ps(n.type,null,o,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,(e.lanes&i)===0){var d=a.memoizedProps;if(n=n.compare,n=n!==null?n:Mn,n(d,o)&&e.ref===t.ref)return Qt(e,t,i)}return t.flags|=1,e=fr(a,o),e.ref=t.ref,e.return=t,t.child=e}function xd(e,t,n,o,i){if(e!==null){var a=e.memoizedProps;if(Mn(a,o)&&e.ref===t.ref)if(st=!1,t.pendingProps=o=a,(e.lanes&i)!==0)(e.flags&131072)!==0&&(st=!0);else return t.lanes=e.lanes,Qt(e,t,i)}return oa(e,t,n,o,i)}function gd(e,t,n){var o=t.pendingProps,i=o.children,a=e!==null?e.memoizedState:null;if(o.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},we(an,ht),ht|=n;else{if((n&1073741824)===0)return e=a!==null?a.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,we(an,ht),ht|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},o=a!==null?a.baseLanes:n,we(an,ht),ht|=o}else a!==null?(o=a.baseLanes|n,t.memoizedState=null):o=n,we(an,ht),ht|=o;return tt(e,t,i,n),t.child}function vd(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function oa(e,t,n,o,i){var a=ot(n)?Nr:qe.current;return a=qr(t,a),rn(t,i),n=Yi(e,t,n,o,a,i),o=Ki(),e!==null&&!st?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Qt(e,t,i)):(Ce&&o&&zi(t),t.flags|=1,tt(e,t,n,i),t.child)}function yd(e,t,n,o,i){if(ot(n)){var a=!0;Bo(t)}else a=!1;if(rn(t,i),t.stateNode===null)ts(e,t),ad(t,n,o),ta(t,n,o,i),o=!0;else if(e===null){var d=t.stateNode,p=t.memoizedProps;d.props=p;var h=d.context,j=n.contextType;typeof j=="object"&&j!==null?j=gt(j):(j=ot(n)?Nr:qe.current,j=qr(t,j));var k=n.getDerivedStateFromProps,S=typeof k=="function"||typeof d.getSnapshotBeforeUpdate=="function";S||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(p!==o||h!==j)&&ld(t,d,o,j),lr=!1;var b=t.memoizedState;d.state=b,Go(t,o,d,i),h=t.memoizedState,p!==o||b!==h||nt.current||lr?(typeof k=="function"&&(ea(t,n,k,o),h=t.memoizedState),(p=lr||id(t,n,p,o,b,h,j))?(S||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(t.flags|=4194308)):(typeof d.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=o,t.memoizedState=h),d.props=o,d.state=h,d.context=j,o=p):(typeof d.componentDidMount=="function"&&(t.flags|=4194308),o=!1)}else{d=t.stateNode,Rc(e,t),p=t.memoizedProps,j=t.type===t.elementType?p:Tt(t.type,p),d.props=j,S=t.pendingProps,b=d.context,h=n.contextType,typeof h=="object"&&h!==null?h=gt(h):(h=ot(n)?Nr:qe.current,h=qr(t,h));var P=n.getDerivedStateFromProps;(k=typeof P=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(p!==S||b!==h)&&ld(t,d,o,h),lr=!1,b=t.memoizedState,d.state=b,Go(t,o,d,i);var R=t.memoizedState;p!==S||b!==R||nt.current||lr?(typeof P=="function"&&(ea(t,n,P,o),R=t.memoizedState),(j=lr||id(t,n,j,o,b,R,h)||!1)?(k||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(o,R,h),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(o,R,h)),typeof d.componentDidUpdate=="function"&&(t.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof d.componentDidUpdate!="function"||p===e.memoizedProps&&b===e.memoizedState||(t.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||p===e.memoizedProps&&b===e.memoizedState||(t.flags|=1024),t.memoizedProps=o,t.memoizedState=R),d.props=o,d.state=R,d.context=h,o=j):(typeof d.componentDidUpdate!="function"||p===e.memoizedProps&&b===e.memoizedState||(t.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||p===e.memoizedProps&&b===e.memoizedState||(t.flags|=1024),o=!1)}return sa(e,t,n,o,a,i)}function sa(e,t,n,o,i,a){vd(e,t);var d=(t.flags&128)!==0;if(!o&&!d)return i&&kc(t,n,!1),Qt(e,t,a);o=t.stateNode,zh.current=t;var p=d&&typeof n.getDerivedStateFromError!="function"?null:o.render();return t.flags|=1,e!==null&&d?(t.child=en(t,e.child,null,a),t.child=en(t,null,p,a)):tt(e,t,p,a),t.memoizedState=o.state,i&&kc(t,n,!0),t.child}function jd(e){var t=e.stateNode;t.pendingContext?Nc(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Nc(e,t.context,!1),Wi(e,t.containerInfo)}function wd(e,t,n,o,i){return Zr(),Ri(i),t.flags|=256,tt(e,t,n,o),t.child}var ia={dehydrated:null,treeContext:null,retryLane:0};function aa(e){return{baseLanes:e,cachePool:null,transitions:null}}function Nd(e,t,n){var o=t.pendingProps,i=Ee.current,a=!1,d=(t.flags&128)!==0,p;if((p=d)||(p=e!==null&&e.memoizedState===null?!1:(i&2)!==0),p?(a=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),we(Ee,i&1),e===null)return Mi(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(d=o.children,e=o.fallback,a?(o=t.mode,a=t.child,d={mode:"hidden",children:d},(o&1)===0&&a!==null?(a.childLanes=0,a.pendingProps=d):a=hs(d,o,0,null),e=_r(e,o,n,null),a.return=t,e.return=t,a.sibling=e,t.child=a,t.child.memoizedState=aa(n),t.memoizedState=ia,e):la(t,d));if(i=e.memoizedState,i!==null&&(p=i.dehydrated,p!==null))return _h(e,t,d,o,p,i,n);if(a){a=o.fallback,d=t.mode,i=e.child,p=i.sibling;var h={mode:"hidden",children:o.children};return(d&1)===0&&t.child!==i?(o=t.child,o.childLanes=0,o.pendingProps=h,t.deletions=null):(o=fr(i,h),o.subtreeFlags=i.subtreeFlags&14680064),p!==null?a=fr(p,a):(a=_r(a,d,n,null),a.flags|=2),a.return=t,o.return=t,o.sibling=a,t.child=o,o=a,a=t.child,d=e.child.memoizedState,d=d===null?aa(n):{baseLanes:d.baseLanes|n,cachePool:null,transitions:d.transitions},a.memoizedState=d,a.childLanes=e.childLanes&~n,t.memoizedState=ia,o}return a=e.child,e=a.sibling,o=fr(a,{mode:"visible",children:o.children}),(t.mode&1)===0&&(o.lanes=n),o.return=t,o.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=o,t.memoizedState=null,o}function la(e,t){return t=hs({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function es(e,t,n,o){return o!==null&&Ri(o),en(t,e.child,null,n),e=la(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function _h(e,t,n,o,i,a,d){if(n)return t.flags&256?(t.flags&=-257,o=ra(Error(l(422))),es(e,t,d,o)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(a=o.fallback,i=t.mode,o=hs({mode:"visible",children:o.children},i,0,null),a=_r(a,i,d,null),a.flags|=2,o.return=t,a.return=t,o.sibling=a,t.child=o,(t.mode&1)!==0&&en(t,e.child,null,d),t.child.memoizedState=aa(d),t.memoizedState=ia,a);if((t.mode&1)===0)return es(e,t,d,null);if(i.data==="$!"){if(o=i.nextSibling&&i.nextSibling.dataset,o)var p=o.dgst;return o=p,a=Error(l(419)),o=ra(a,o,void 0),es(e,t,d,o)}if(p=(d&e.childLanes)!==0,st||p){if(o=He,o!==null){switch(d&-d){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=(i&(o.suspendedLanes|d))!==0?0:i,i!==0&&i!==a.retryLane&&(a.retryLane=i,Vt(e,i),It(o,e,i,-1))}return ka(),o=ra(Error(l(421))),es(e,t,d,o)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=Vh.bind(null,e),i._reactRetry=t,null):(e=a.treeContext,pt=or(i.nextSibling),ut=t,Ce=!0,Ct=null,e!==null&&(ft[xt++]=Ut,ft[xt++]=$t,ft[xt++]=br,Ut=e.id,$t=e.overflow,br=t),t=la(t,o.children),t.flags|=4096,t)}function bd(e,t,n){e.lanes|=t;var o=e.alternate;o!==null&&(o.lanes|=t),Di(e.return,t,n)}function ca(e,t,n,o,i){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:o,tail:n,tailMode:i}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=o,a.tail=n,a.tailMode=i)}function kd(e,t,n){var o=t.pendingProps,i=o.revealOrder,a=o.tail;if(tt(e,t,o.children,n),o=Ee.current,(o&2)!==0)o=o&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&bd(e,n,t);else if(e.tag===19)bd(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}o&=1}if(we(Ee,o),(t.mode&1)===0)t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Qo(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),ca(t,!1,i,n,a);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Qo(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}ca(t,!0,n,null,a);break;case"together":ca(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function ts(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Qt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Er|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(l(153));if(t.child!==null){for(e=t.child,n=fr(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=fr(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Ph(e,t,n){switch(t.tag){case 3:jd(t),Zr();break;case 5:Ac(t);break;case 1:ot(t.type)&&Bo(t);break;case 4:Wi(t,t.stateNode.containerInfo);break;case 10:var o=t.type._context,i=t.memoizedProps.value;we(Uo,o._currentValue),o._currentValue=i;break;case 13:if(o=t.memoizedState,o!==null)return o.dehydrated!==null?(we(Ee,Ee.current&1),t.flags|=128,null):(n&t.child.childLanes)!==0?Nd(e,t,n):(we(Ee,Ee.current&1),e=Qt(e,t,n),e!==null?e.sibling:null);we(Ee,Ee.current&1);break;case 19:if(o=(n&t.childLanes)!==0,(e.flags&128)!==0){if(o)return kd(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),we(Ee,Ee.current),o)break;return null;case 22:case 23:return t.lanes=0,gd(e,t,n)}return Qt(e,t,n)}var Sd,da,Cd,Td;Sd=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},da=function(){},Cd=function(e,t,n,o){var i=e.memoizedProps;if(i!==o){e=t.stateNode,Cr(Bt.current);var a=null;switch(n){case"input":i=Ds(e,i),o=Ds(e,o),a=[];break;case"select":i=_({},i,{value:void 0}),o=_({},o,{value:void 0}),a=[];break;case"textarea":i=Ws(e,i),o=Ws(e,o),a=[];break;default:typeof i.onClick!="function"&&typeof o.onClick=="function"&&(e.onclick=Mo)}$s(n,o);var d;n=null;for(j in i)if(!o.hasOwnProperty(j)&&i.hasOwnProperty(j)&&i[j]!=null)if(j==="style"){var p=i[j];for(d in p)p.hasOwnProperty(d)&&(n||(n={}),n[d]="")}else j!=="dangerouslySetInnerHTML"&&j!=="children"&&j!=="suppressContentEditableWarning"&&j!=="suppressHydrationWarning"&&j!=="autoFocus"&&(m.hasOwnProperty(j)?a||(a=[]):(a=a||[]).push(j,null));for(j in o){var h=o[j];if(p=i!=null?i[j]:void 0,o.hasOwnProperty(j)&&h!==p&&(h!=null||p!=null))if(j==="style")if(p){for(d in p)!p.hasOwnProperty(d)||h&&h.hasOwnProperty(d)||(n||(n={}),n[d]="");for(d in h)h.hasOwnProperty(d)&&p[d]!==h[d]&&(n||(n={}),n[d]=h[d])}else n||(a||(a=[]),a.push(j,n)),n=h;else j==="dangerouslySetInnerHTML"?(h=h?h.__html:void 0,p=p?p.__html:void 0,h!=null&&p!==h&&(a=a||[]).push(j,h)):j==="children"?typeof h!="string"&&typeof h!="number"||(a=a||[]).push(j,""+h):j!=="suppressContentEditableWarning"&&j!=="suppressHydrationWarning"&&(m.hasOwnProperty(j)?(h!=null&&j==="onScroll"&&Ne("scroll",e),a||p===h||(a=[])):(a=a||[]).push(j,h))}n&&(a=a||[]).push("style",n);var j=a;(t.updateQueue=j)&&(t.flags|=4)}},Td=function(e,t,n,o){n!==o&&(t.flags|=4)};function Kn(e,t){if(!Ce)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var o=null;n!==null;)n.alternate!==null&&(o=n),n=n.sibling;o===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function Je(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,o=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,o|=i.subtreeFlags&14680064,o|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,o|=i.subtreeFlags,o|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=o,e.childLanes=n,t}function Mh(e,t,n){var o=t.pendingProps;switch(_i(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Je(t),null;case 1:return ot(t.type)&&Oo(),Je(t),null;case 3:return o=t.stateNode,nn(),be(nt),be(qe),Vi(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(e===null||e.child===null)&&(Ho(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Ct!==null&&(wa(Ct),Ct=null))),da(e,t),Je(t),null;case 5:Ui(t);var i=Cr($n.current);if(n=t.type,e!==null&&t.stateNode!=null)Cd(e,t,n,o,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!o){if(t.stateNode===null)throw Error(l(166));return Je(t),null}if(e=Cr(Bt.current),Ho(t)){o=t.stateNode,n=t.type;var a=t.memoizedProps;switch(o[Ot]=t,o[Dn]=a,e=(t.mode&1)!==0,n){case"dialog":Ne("cancel",o),Ne("close",o);break;case"iframe":case"object":case"embed":Ne("load",o);break;case"video":case"audio":for(i=0;i<On.length;i++)Ne(On[i],o);break;case"source":Ne("error",o);break;case"img":case"image":case"link":Ne("error",o),Ne("load",o);break;case"details":Ne("toggle",o);break;case"input":al(o,a),Ne("invalid",o);break;case"select":o._wrapperState={wasMultiple:!!a.multiple},Ne("invalid",o);break;case"textarea":dl(o,a),Ne("invalid",o)}$s(n,a),i=null;for(var d in a)if(a.hasOwnProperty(d)){var p=a[d];d==="children"?typeof p=="string"?o.textContent!==p&&(a.suppressHydrationWarning!==!0&&Po(o.textContent,p,e),i=["children",p]):typeof p=="number"&&o.textContent!==""+p&&(a.suppressHydrationWarning!==!0&&Po(o.textContent,p,e),i=["children",""+p]):m.hasOwnProperty(d)&&p!=null&&d==="onScroll"&&Ne("scroll",o)}switch(n){case"input":Xt(o),cl(o,a,!0);break;case"textarea":Xt(o),pl(o);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(o.onclick=Mo)}o=i,t.updateQueue=o,o!==null&&(t.flags|=4)}else{d=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=hl(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=d.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof o.is=="string"?e=d.createElement(n,{is:o.is}):(e=d.createElement(n),n==="select"&&(d=e,o.multiple?d.multiple=!0:o.size&&(d.size=o.size))):e=d.createElementNS(e,n),e[Ot]=t,e[Dn]=o,Sd(e,t,!1,!1),t.stateNode=e;e:{switch(d=Vs(n,o),n){case"dialog":Ne("cancel",e),Ne("close",e),i=o;break;case"iframe":case"object":case"embed":Ne("load",e),i=o;break;case"video":case"audio":for(i=0;i<On.length;i++)Ne(On[i],e);i=o;break;case"source":Ne("error",e),i=o;break;case"img":case"image":case"link":Ne("error",e),Ne("load",e),i=o;break;case"details":Ne("toggle",e),i=o;break;case"input":al(e,o),i=Ds(e,o),Ne("invalid",e);break;case"option":i=o;break;case"select":e._wrapperState={wasMultiple:!!o.multiple},i=_({},o,{value:void 0}),Ne("invalid",e);break;case"textarea":dl(e,o),i=Ws(e,o),Ne("invalid",e);break;default:i=o}$s(n,i),p=i;for(a in p)if(p.hasOwnProperty(a)){var h=p[a];a==="style"?xl(e,h):a==="dangerouslySetInnerHTML"?(h=h?h.__html:void 0,h!=null&&ml(e,h)):a==="children"?typeof h=="string"?(n!=="textarea"||h!=="")&&gn(e,h):typeof h=="number"&&gn(e,""+h):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(m.hasOwnProperty(a)?h!=null&&a==="onScroll"&&Ne("scroll",e):h!=null&&ne(e,a,h,d))}switch(n){case"input":Xt(e),cl(e,o,!1);break;case"textarea":Xt(e),pl(e);break;case"option":o.value!=null&&e.setAttribute("value",""+le(o.value));break;case"select":e.multiple=!!o.multiple,a=o.value,a!=null?Ar(e,!!o.multiple,a,!1):o.defaultValue!=null&&Ar(e,!!o.multiple,o.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Mo)}switch(n){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}}o&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Je(t),null;case 6:if(e&&t.stateNode!=null)Td(e,t,e.memoizedProps,o);else{if(typeof o!="string"&&t.stateNode===null)throw Error(l(166));if(n=Cr($n.current),Cr(Bt.current),Ho(t)){if(o=t.stateNode,n=t.memoizedProps,o[Ot]=t,(a=o.nodeValue!==n)&&(e=ut,e!==null))switch(e.tag){case 3:Po(o.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Po(o.nodeValue,n,(e.mode&1)!==0)}a&&(t.flags|=4)}else o=(n.nodeType===9?n:n.ownerDocument).createTextNode(o),o[Ot]=t,t.stateNode=o}return Je(t),null;case 13:if(be(Ee),o=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Ce&&pt!==null&&(t.mode&1)!==0&&(t.flags&128)===0)Ic(),Zr(),t.flags|=98560,a=!1;else if(a=Ho(t),o!==null&&o.dehydrated!==null){if(e===null){if(!a)throw Error(l(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(l(317));a[Ot]=t}else Zr(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Je(t),a=!1}else Ct!==null&&(wa(Ct),Ct=null),a=!0;if(!a)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=n,t):(o=o!==null,o!==(e!==null&&e.memoizedState!==null)&&o&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(Ee.current&1)!==0?Ae===0&&(Ae=3):ka())),t.updateQueue!==null&&(t.flags|=4),Je(t),null);case 4:return nn(),da(e,t),e===null&&Bn(t.stateNode.containerInfo),Je(t),null;case 10:return Ai(t.type._context),Je(t),null;case 17:return ot(t.type)&&Oo(),Je(t),null;case 19:if(be(Ee),a=t.memoizedState,a===null)return Je(t),null;if(o=(t.flags&128)!==0,d=a.rendering,d===null)if(o)Kn(a,!1);else{if(Ae!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(d=Qo(e),d!==null){for(t.flags|=128,Kn(a,!1),o=d.updateQueue,o!==null&&(t.updateQueue=o,t.flags|=4),t.subtreeFlags=0,o=n,n=t.child;n!==null;)a=n,e=o,a.flags&=14680066,d=a.alternate,d===null?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=d.childLanes,a.lanes=d.lanes,a.child=d.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=d.memoizedProps,a.memoizedState=d.memoizedState,a.updateQueue=d.updateQueue,a.type=d.type,e=d.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return we(Ee,Ee.current&1|2),t.child}e=e.sibling}a.tail!==null&&Pe()>ln&&(t.flags|=128,o=!0,Kn(a,!1),t.lanes=4194304)}else{if(!o)if(e=Qo(d),e!==null){if(t.flags|=128,o=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Kn(a,!0),a.tail===null&&a.tailMode==="hidden"&&!d.alternate&&!Ce)return Je(t),null}else 2*Pe()-a.renderingStartTime>ln&&n!==1073741824&&(t.flags|=128,o=!0,Kn(a,!1),t.lanes=4194304);a.isBackwards?(d.sibling=t.child,t.child=d):(n=a.last,n!==null?n.sibling=d:t.child=d,a.last=d)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=Pe(),t.sibling=null,n=Ee.current,we(Ee,o?n&1|2:n&1),t):(Je(t),null);case 22:case 23:return ba(),o=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==o&&(t.flags|=8192),o&&(t.mode&1)!==0?(ht&1073741824)!==0&&(Je(t),t.subtreeFlags&6&&(t.flags|=8192)):Je(t),null;case 24:return null;case 25:return null}throw Error(l(156,t.tag))}function Rh(e,t){switch(_i(t),t.tag){case 1:return ot(t.type)&&Oo(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return nn(),be(nt),be(qe),Vi(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return Ui(t),null;case 13:if(be(Ee),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(l(340));Zr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return be(Ee),null;case 4:return nn(),null;case 10:return Ai(t.type._context),null;case 22:case 23:return ba(),null;case 24:return null;default:return null}}var rs=!1,Ze=!1,Oh=typeof WeakSet=="function"?WeakSet:Set,M=null;function sn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(o){ze(e,t,o)}else n.current=null}function ua(e,t,n){try{n()}catch(o){ze(e,t,o)}}var Ed=!1;function Bh(e,t){if(bi=No,e=ic(),fi(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var o=n.getSelection&&n.getSelection();if(o&&o.rangeCount!==0){n=o.anchorNode;var i=o.anchorOffset,a=o.focusNode;o=o.focusOffset;try{n.nodeType,a.nodeType}catch{n=null;break e}var d=0,p=-1,h=-1,j=0,k=0,S=e,b=null;t:for(;;){for(var P;S!==n||i!==0&&S.nodeType!==3||(p=d+i),S!==a||o!==0&&S.nodeType!==3||(h=d+o),S.nodeType===3&&(d+=S.nodeValue.length),(P=S.firstChild)!==null;)b=S,S=P;for(;;){if(S===e)break t;if(b===n&&++j===i&&(p=d),b===a&&++k===o&&(h=d),(P=S.nextSibling)!==null)break;S=b,b=S.parentNode}S=P}n=p===-1||h===-1?null:{start:p,end:h}}else n=null}n=n||{start:0,end:0}}else n=null;for(ki={focusedElem:e,selectionRange:n},No=!1,M=t;M!==null;)if(t=M,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,M=e;else for(;M!==null;){t=M;try{var R=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(R!==null){var O=R.memoizedProps,Me=R.memoizedState,v=t.stateNode,f=v.getSnapshotBeforeUpdate(t.elementType===t.type?O:Tt(t.type,O),Me);v.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var y=t.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(l(163))}}catch(T){ze(t,t.return,T)}if(e=t.sibling,e!==null){e.return=t.return,M=e;break}M=t.return}return R=Ed,Ed=!1,R}function qn(e,t,n){var o=t.updateQueue;if(o=o!==null?o.lastEffect:null,o!==null){var i=o=o.next;do{if((i.tag&e)===e){var a=i.destroy;i.destroy=void 0,a!==void 0&&ua(t,n,a)}i=i.next}while(i!==o)}}function ns(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var o=n.create;n.destroy=o()}n=n.next}while(n!==t)}}function pa(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Ld(e){var t=e.alternate;t!==null&&(e.alternate=null,Ld(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Ot],delete t[Dn],delete t[Ei],delete t[yh],delete t[jh])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Id(e){return e.tag===5||e.tag===3||e.tag===4}function zd(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Id(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ha(e,t,n){var o=e.tag;if(o===5||o===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Mo));else if(o!==4&&(e=e.child,e!==null))for(ha(e,t,n),e=e.sibling;e!==null;)ha(e,t,n),e=e.sibling}function ma(e,t,n){var o=e.tag;if(o===5||o===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(o!==4&&(e=e.child,e!==null))for(ma(e,t,n),e=e.sibling;e!==null;)ma(e,t,n),e=e.sibling}var Ue=null,Et=!1;function dr(e,t,n){for(n=n.child;n!==null;)_d(e,t,n),n=n.sibling}function _d(e,t,n){if(Rt&&typeof Rt.onCommitFiberUnmount=="function")try{Rt.onCommitFiberUnmount(xo,n)}catch{}switch(n.tag){case 5:Ze||sn(n,t);case 6:var o=Ue,i=Et;Ue=null,dr(e,t,n),Ue=o,Et=i,Ue!==null&&(Et?(e=Ue,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Ue.removeChild(n.stateNode));break;case 18:Ue!==null&&(Et?(e=Ue,n=n.stateNode,e.nodeType===8?Ti(e.parentNode,n):e.nodeType===1&&Ti(e,n),En(e)):Ti(Ue,n.stateNode));break;case 4:o=Ue,i=Et,Ue=n.stateNode.containerInfo,Et=!0,dr(e,t,n),Ue=o,Et=i;break;case 0:case 11:case 14:case 15:if(!Ze&&(o=n.updateQueue,o!==null&&(o=o.lastEffect,o!==null))){i=o=o.next;do{var a=i,d=a.destroy;a=a.tag,d!==void 0&&((a&2)!==0||(a&4)!==0)&&ua(n,t,d),i=i.next}while(i!==o)}dr(e,t,n);break;case 1:if(!Ze&&(sn(n,t),o=n.stateNode,typeof o.componentWillUnmount=="function"))try{o.props=n.memoizedProps,o.state=n.memoizedState,o.componentWillUnmount()}catch(p){ze(n,t,p)}dr(e,t,n);break;case 21:dr(e,t,n);break;case 22:n.mode&1?(Ze=(o=Ze)||n.memoizedState!==null,dr(e,t,n),Ze=o):dr(e,t,n);break;default:dr(e,t,n)}}function Pd(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Oh),t.forEach(function(o){var i=Gh.bind(null,e,o);n.has(o)||(n.add(o),o.then(i,i))})}}function Lt(e,t){var n=t.deletions;if(n!==null)for(var o=0;o<n.length;o++){var i=n[o];try{var a=e,d=t,p=d;e:for(;p!==null;){switch(p.tag){case 5:Ue=p.stateNode,Et=!1;break e;case 3:Ue=p.stateNode.containerInfo,Et=!0;break e;case 4:Ue=p.stateNode.containerInfo,Et=!0;break e}p=p.return}if(Ue===null)throw Error(l(160));_d(a,d,i),Ue=null,Et=!1;var h=i.alternate;h!==null&&(h.return=null),i.return=null}catch(j){ze(i,t,j)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Md(t,e),t=t.sibling}function Md(e,t){var n=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Lt(t,e),Dt(e),o&4){try{qn(3,e,e.return),ns(3,e)}catch(O){ze(e,e.return,O)}try{qn(5,e,e.return)}catch(O){ze(e,e.return,O)}}break;case 1:Lt(t,e),Dt(e),o&512&&n!==null&&sn(n,n.return);break;case 5:if(Lt(t,e),Dt(e),o&512&&n!==null&&sn(n,n.return),e.flags&32){var i=e.stateNode;try{gn(i,"")}catch(O){ze(e,e.return,O)}}if(o&4&&(i=e.stateNode,i!=null)){var a=e.memoizedProps,d=n!==null?n.memoizedProps:a,p=e.type,h=e.updateQueue;if(e.updateQueue=null,h!==null)try{p==="input"&&a.type==="radio"&&a.name!=null&&ll(i,a),Vs(p,d);var j=Vs(p,a);for(d=0;d<h.length;d+=2){var k=h[d],S=h[d+1];k==="style"?xl(i,S):k==="dangerouslySetInnerHTML"?ml(i,S):k==="children"?gn(i,S):ne(i,k,S,j)}switch(p){case"input":Fs(i,a);break;case"textarea":ul(i,a);break;case"select":var b=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!a.multiple;var P=a.value;P!=null?Ar(i,!!a.multiple,P,!1):b!==!!a.multiple&&(a.defaultValue!=null?Ar(i,!!a.multiple,a.defaultValue,!0):Ar(i,!!a.multiple,a.multiple?[]:"",!1))}i[Dn]=a}catch(O){ze(e,e.return,O)}}break;case 6:if(Lt(t,e),Dt(e),o&4){if(e.stateNode===null)throw Error(l(162));i=e.stateNode,a=e.memoizedProps;try{i.nodeValue=a}catch(O){ze(e,e.return,O)}}break;case 3:if(Lt(t,e),Dt(e),o&4&&n!==null&&n.memoizedState.isDehydrated)try{En(t.containerInfo)}catch(O){ze(e,e.return,O)}break;case 4:Lt(t,e),Dt(e);break;case 13:Lt(t,e),Dt(e),i=e.child,i.flags&8192&&(a=i.memoizedState!==null,i.stateNode.isHidden=a,!a||i.alternate!==null&&i.alternate.memoizedState!==null||(ga=Pe())),o&4&&Pd(e);break;case 22:if(k=n!==null&&n.memoizedState!==null,e.mode&1?(Ze=(j=Ze)||k,Lt(t,e),Ze=j):Lt(t,e),Dt(e),o&8192){if(j=e.memoizedState!==null,(e.stateNode.isHidden=j)&&!k&&(e.mode&1)!==0)for(M=e,k=e.child;k!==null;){for(S=M=k;M!==null;){switch(b=M,P=b.child,b.tag){case 0:case 11:case 14:case 15:qn(4,b,b.return);break;case 1:sn(b,b.return);var R=b.stateNode;if(typeof R.componentWillUnmount=="function"){o=b,n=b.return;try{t=o,R.props=t.memoizedProps,R.state=t.memoizedState,R.componentWillUnmount()}catch(O){ze(o,n,O)}}break;case 5:sn(b,b.return);break;case 22:if(b.memoizedState!==null){Bd(S);continue}}P!==null?(P.return=b,M=P):Bd(S)}k=k.sibling}e:for(k=null,S=e;;){if(S.tag===5){if(k===null){k=S;try{i=S.stateNode,j?(a=i.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(p=S.stateNode,h=S.memoizedProps.style,d=h!=null&&h.hasOwnProperty("display")?h.display:null,p.style.display=fl("display",d))}catch(O){ze(e,e.return,O)}}}else if(S.tag===6){if(k===null)try{S.stateNode.nodeValue=j?"":S.memoizedProps}catch(O){ze(e,e.return,O)}}else if((S.tag!==22&&S.tag!==23||S.memoizedState===null||S===e)&&S.child!==null){S.child.return=S,S=S.child;continue}if(S===e)break e;for(;S.sibling===null;){if(S.return===null||S.return===e)break e;k===S&&(k=null),S=S.return}k===S&&(k=null),S.sibling.return=S.return,S=S.sibling}}break;case 19:Lt(t,e),Dt(e),o&4&&Pd(e);break;case 21:break;default:Lt(t,e),Dt(e)}}function Dt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Id(n)){var o=n;break e}n=n.return}throw Error(l(160))}switch(o.tag){case 5:var i=o.stateNode;o.flags&32&&(gn(i,""),o.flags&=-33);var a=zd(e);ma(e,a,i);break;case 3:case 4:var d=o.stateNode.containerInfo,p=zd(e);ha(e,p,d);break;default:throw Error(l(161))}}catch(h){ze(e,e.return,h)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Ah(e,t,n){M=e,Rd(e)}function Rd(e,t,n){for(var o=(e.mode&1)!==0;M!==null;){var i=M,a=i.child;if(i.tag===22&&o){var d=i.memoizedState!==null||rs;if(!d){var p=i.alternate,h=p!==null&&p.memoizedState!==null||Ze;p=rs;var j=Ze;if(rs=d,(Ze=h)&&!j)for(M=i;M!==null;)d=M,h=d.child,d.tag===22&&d.memoizedState!==null?Ad(i):h!==null?(h.return=d,M=h):Ad(i);for(;a!==null;)M=a,Rd(a),a=a.sibling;M=i,rs=p,Ze=j}Od(e)}else(i.subtreeFlags&8772)!==0&&a!==null?(a.return=i,M=a):Od(e)}}function Od(e){for(;M!==null;){var t=M;if((t.flags&8772)!==0){var n=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:Ze||ns(5,t);break;case 1:var o=t.stateNode;if(t.flags&4&&!Ze)if(n===null)o.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Tt(t.type,n.memoizedProps);o.componentDidUpdate(i,n.memoizedState,o.__reactInternalSnapshotBeforeUpdate)}var a=t.updateQueue;a!==null&&Bc(t,a,o);break;case 3:var d=t.updateQueue;if(d!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Bc(t,d,n)}break;case 5:var p=t.stateNode;if(n===null&&t.flags&4){n=p;var h=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":h.autoFocus&&n.focus();break;case"img":h.src&&(n.src=h.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var j=t.alternate;if(j!==null){var k=j.memoizedState;if(k!==null){var S=k.dehydrated;S!==null&&En(S)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(l(163))}Ze||t.flags&512&&pa(t)}catch(b){ze(t,t.return,b)}}if(t===e){M=null;break}if(n=t.sibling,n!==null){n.return=t.return,M=n;break}M=t.return}}function Bd(e){for(;M!==null;){var t=M;if(t===e){M=null;break}var n=t.sibling;if(n!==null){n.return=t.return,M=n;break}M=t.return}}function Ad(e){for(;M!==null;){var t=M;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{ns(4,t)}catch(h){ze(t,n,h)}break;case 1:var o=t.stateNode;if(typeof o.componentDidMount=="function"){var i=t.return;try{o.componentDidMount()}catch(h){ze(t,i,h)}}var a=t.return;try{pa(t)}catch(h){ze(t,a,h)}break;case 5:var d=t.return;try{pa(t)}catch(h){ze(t,d,h)}}}catch(h){ze(t,t.return,h)}if(t===e){M=null;break}var p=t.sibling;if(p!==null){p.return=t.return,M=p;break}M=t.return}}var Dh=Math.ceil,os=z.ReactCurrentDispatcher,fa=z.ReactCurrentOwner,yt=z.ReactCurrentBatchConfig,ue=0,He=null,Re=null,$e=0,ht=0,an=sr(0),Ae=0,Xn=null,Er=0,ss=0,xa=0,Jn=null,it=null,ga=0,ln=1/0,Yt=null,is=!1,va=null,ur=null,as=!1,pr=null,ls=0,Zn=0,ya=null,cs=-1,ds=0;function rt(){return(ue&6)!==0?Pe():cs!==-1?cs:cs=Pe()}function hr(e){return(e.mode&1)===0?1:(ue&2)!==0&&$e!==0?$e&-$e:Nh.transition!==null?(ds===0&&(ds=zl()),ds):(e=ge,e!==0||(e=window.event,e=e===void 0?16:Fl(e.type)),e)}function It(e,t,n,o){if(50<Zn)throw Zn=0,ya=null,Error(l(185));bn(e,n,o),((ue&2)===0||e!==He)&&(e===He&&((ue&2)===0&&(ss|=n),Ae===4&&mr(e,$e)),at(e,o),n===1&&ue===0&&(t.mode&1)===0&&(ln=Pe()+500,Ao&&ar()))}function at(e,t){var n=e.callbackNode;Np(e,t);var o=yo(e,e===He?$e:0);if(o===0)n!==null&&El(n),e.callbackNode=null,e.callbackPriority=0;else if(t=o&-o,e.callbackPriority!==t){if(n!=null&&El(n),t===1)e.tag===0?wh(Fd.bind(null,e)):Sc(Fd.bind(null,e)),gh(function(){(ue&6)===0&&ar()}),n=null;else{switch(_l(o)){case 1:n=Js;break;case 4:n=Ll;break;case 16:n=fo;break;case 536870912:n=Il;break;default:n=fo}n=Yd(n,Dd.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Dd(e,t){if(cs=-1,ds=0,(ue&6)!==0)throw Error(l(327));var n=e.callbackNode;if(cn()&&e.callbackNode!==n)return null;var o=yo(e,e===He?$e:0);if(o===0)return null;if((o&30)!==0||(o&e.expiredLanes)!==0||t)t=us(e,o);else{t=o;var i=ue;ue|=2;var a=Wd();(He!==e||$e!==t)&&(Yt=null,ln=Pe()+500,Ir(e,t));do try{Wh();break}catch(p){Hd(e,p)}while(!0);Bi(),os.current=a,ue=i,Re!==null?t=0:(He=null,$e=0,t=Ae)}if(t!==0){if(t===2&&(i=Zs(e),i!==0&&(o=i,t=ja(e,i))),t===1)throw n=Xn,Ir(e,0),mr(e,o),at(e,Pe()),n;if(t===6)mr(e,o);else{if(i=e.current.alternate,(o&30)===0&&!Fh(i)&&(t=us(e,o),t===2&&(a=Zs(e),a!==0&&(o=a,t=ja(e,a))),t===1))throw n=Xn,Ir(e,0),mr(e,o),at(e,Pe()),n;switch(e.finishedWork=i,e.finishedLanes=o,t){case 0:case 1:throw Error(l(345));case 2:zr(e,it,Yt);break;case 3:if(mr(e,o),(o&130023424)===o&&(t=ga+500-Pe(),10<t)){if(yo(e,0)!==0)break;if(i=e.suspendedLanes,(i&o)!==o){rt(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Ci(zr.bind(null,e,it,Yt),t);break}zr(e,it,Yt);break;case 4:if(mr(e,o),(o&4194240)===o)break;for(t=e.eventTimes,i=-1;0<o;){var d=31-kt(o);a=1<<d,d=t[d],d>i&&(i=d),o&=~a}if(o=i,o=Pe()-o,o=(120>o?120:480>o?480:1080>o?1080:1920>o?1920:3e3>o?3e3:4320>o?4320:1960*Dh(o/1960))-o,10<o){e.timeoutHandle=Ci(zr.bind(null,e,it,Yt),o);break}zr(e,it,Yt);break;case 5:zr(e,it,Yt);break;default:throw Error(l(329))}}}return at(e,Pe()),e.callbackNode===n?Dd.bind(null,e):null}function ja(e,t){var n=Jn;return e.current.memoizedState.isDehydrated&&(Ir(e,t).flags|=256),e=us(e,t),e!==2&&(t=it,it=n,t!==null&&wa(t)),e}function wa(e){it===null?it=e:it.push.apply(it,e)}function Fh(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var o=0;o<n.length;o++){var i=n[o],a=i.getSnapshot;i=i.value;try{if(!St(a(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function mr(e,t){for(t&=~xa,t&=~ss,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-kt(t),o=1<<n;e[n]=-1,t&=~o}}function Fd(e){if((ue&6)!==0)throw Error(l(327));cn();var t=yo(e,0);if((t&1)===0)return at(e,Pe()),null;var n=us(e,t);if(e.tag!==0&&n===2){var o=Zs(e);o!==0&&(t=o,n=ja(e,o))}if(n===1)throw n=Xn,Ir(e,0),mr(e,t),at(e,Pe()),n;if(n===6)throw Error(l(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,zr(e,it,Yt),at(e,Pe()),null}function Na(e,t){var n=ue;ue|=1;try{return e(t)}finally{ue=n,ue===0&&(ln=Pe()+500,Ao&&ar())}}function Lr(e){pr!==null&&pr.tag===0&&(ue&6)===0&&cn();var t=ue;ue|=1;var n=yt.transition,o=ge;try{if(yt.transition=null,ge=1,e)return e()}finally{ge=o,yt.transition=n,ue=t,(ue&6)===0&&ar()}}function ba(){ht=an.current,be(an)}function Ir(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,xh(n)),Re!==null)for(n=Re.return;n!==null;){var o=n;switch(_i(o),o.tag){case 1:o=o.type.childContextTypes,o!=null&&Oo();break;case 3:nn(),be(nt),be(qe),Vi();break;case 5:Ui(o);break;case 4:nn();break;case 13:be(Ee);break;case 19:be(Ee);break;case 10:Ai(o.type._context);break;case 22:case 23:ba()}n=n.return}if(He=e,Re=e=fr(e.current,null),$e=ht=t,Ae=0,Xn=null,xa=ss=Er=0,it=Jn=null,Sr!==null){for(t=0;t<Sr.length;t++)if(n=Sr[t],o=n.interleaved,o!==null){n.interleaved=null;var i=o.next,a=n.pending;if(a!==null){var d=a.next;a.next=i,o.next=d}n.pending=o}Sr=null}return e}function Hd(e,t){do{var n=Re;try{if(Bi(),Yo.current=Jo,Ko){for(var o=Le.memoizedState;o!==null;){var i=o.queue;i!==null&&(i.pending=null),o=o.next}Ko=!1}if(Tr=0,Fe=Be=Le=null,Vn=!1,Gn=0,fa.current=null,n===null||n.return===null){Ae=1,Xn=t,Re=null;break}e:{var a=e,d=n.return,p=n,h=t;if(t=$e,p.flags|=32768,h!==null&&typeof h=="object"&&typeof h.then=="function"){var j=h,k=p,S=k.tag;if((k.mode&1)===0&&(S===0||S===11||S===15)){var b=k.alternate;b?(k.updateQueue=b.updateQueue,k.memoizedState=b.memoizedState,k.lanes=b.lanes):(k.updateQueue=null,k.memoizedState=null)}var P=pd(d);if(P!==null){P.flags&=-257,hd(P,d,p,a,t),P.mode&1&&ud(a,j,t),t=P,h=j;var R=t.updateQueue;if(R===null){var O=new Set;O.add(h),t.updateQueue=O}else R.add(h);break e}else{if((t&1)===0){ud(a,j,t),ka();break e}h=Error(l(426))}}else if(Ce&&p.mode&1){var Me=pd(d);if(Me!==null){(Me.flags&65536)===0&&(Me.flags|=256),hd(Me,d,p,a,t),Ri(on(h,p));break e}}a=h=on(h,p),Ae!==4&&(Ae=2),Jn===null?Jn=[a]:Jn.push(a),a=d;do{switch(a.tag){case 3:a.flags|=65536,t&=-t,a.lanes|=t;var v=cd(a,h,t);Oc(a,v);break e;case 1:p=h;var f=a.type,y=a.stateNode;if((a.flags&128)===0&&(typeof f.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(ur===null||!ur.has(y)))){a.flags|=65536,t&=-t,a.lanes|=t;var T=dd(a,p,t);Oc(a,T);break e}}a=a.return}while(a!==null)}$d(n)}catch(A){t=A,Re===n&&n!==null&&(Re=n=n.return);continue}break}while(!0)}function Wd(){var e=os.current;return os.current=Jo,e===null?Jo:e}function ka(){(Ae===0||Ae===3||Ae===2)&&(Ae=4),He===null||(Er&268435455)===0&&(ss&268435455)===0||mr(He,$e)}function us(e,t){var n=ue;ue|=2;var o=Wd();(He!==e||$e!==t)&&(Yt=null,Ir(e,t));do try{Hh();break}catch(i){Hd(e,i)}while(!0);if(Bi(),ue=n,os.current=o,Re!==null)throw Error(l(261));return He=null,$e=0,Ae}function Hh(){for(;Re!==null;)Ud(Re)}function Wh(){for(;Re!==null&&!hp();)Ud(Re)}function Ud(e){var t=Qd(e.alternate,e,ht);e.memoizedProps=e.pendingProps,t===null?$d(e):Re=t,fa.current=null}function $d(e){var t=e;do{var n=t.alternate;if(e=t.return,(t.flags&32768)===0){if(n=Mh(n,t,ht),n!==null){Re=n;return}}else{if(n=Rh(n,t),n!==null){n.flags&=32767,Re=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ae=6,Re=null;return}}if(t=t.sibling,t!==null){Re=t;return}Re=t=e}while(t!==null);Ae===0&&(Ae=5)}function zr(e,t,n){var o=ge,i=yt.transition;try{yt.transition=null,ge=1,Uh(e,t,n,o)}finally{yt.transition=i,ge=o}return null}function Uh(e,t,n,o){do cn();while(pr!==null);if((ue&6)!==0)throw Error(l(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(l(177));e.callbackNode=null,e.callbackPriority=0;var a=n.lanes|n.childLanes;if(bp(e,a),e===He&&(Re=He=null,$e=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||as||(as=!0,Yd(fo,function(){return cn(),null})),a=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||a){a=yt.transition,yt.transition=null;var d=ge;ge=1;var p=ue;ue|=4,fa.current=null,Bh(e,n),Md(n,e),ch(ki),No=!!bi,ki=bi=null,e.current=n,Ah(n),mp(),ue=p,ge=d,yt.transition=a}else e.current=n;if(as&&(as=!1,pr=e,ls=i),a=e.pendingLanes,a===0&&(ur=null),gp(n.stateNode),at(e,Pe()),t!==null)for(o=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],o(i.value,{componentStack:i.stack,digest:i.digest});if(is)throw is=!1,e=va,va=null,e;return(ls&1)!==0&&e.tag!==0&&cn(),a=e.pendingLanes,(a&1)!==0?e===ya?Zn++:(Zn=0,ya=e):Zn=0,ar(),null}function cn(){if(pr!==null){var e=_l(ls),t=yt.transition,n=ge;try{if(yt.transition=null,ge=16>e?16:e,pr===null)var o=!1;else{if(e=pr,pr=null,ls=0,(ue&6)!==0)throw Error(l(331));var i=ue;for(ue|=4,M=e.current;M!==null;){var a=M,d=a.child;if((M.flags&16)!==0){var p=a.deletions;if(p!==null){for(var h=0;h<p.length;h++){var j=p[h];for(M=j;M!==null;){var k=M;switch(k.tag){case 0:case 11:case 15:qn(8,k,a)}var S=k.child;if(S!==null)S.return=k,M=S;else for(;M!==null;){k=M;var b=k.sibling,P=k.return;if(Ld(k),k===j){M=null;break}if(b!==null){b.return=P,M=b;break}M=P}}}var R=a.alternate;if(R!==null){var O=R.child;if(O!==null){R.child=null;do{var Me=O.sibling;O.sibling=null,O=Me}while(O!==null)}}M=a}}if((a.subtreeFlags&2064)!==0&&d!==null)d.return=a,M=d;else e:for(;M!==null;){if(a=M,(a.flags&2048)!==0)switch(a.tag){case 0:case 11:case 15:qn(9,a,a.return)}var v=a.sibling;if(v!==null){v.return=a.return,M=v;break e}M=a.return}}var f=e.current;for(M=f;M!==null;){d=M;var y=d.child;if((d.subtreeFlags&2064)!==0&&y!==null)y.return=d,M=y;else e:for(d=f;M!==null;){if(p=M,(p.flags&2048)!==0)try{switch(p.tag){case 0:case 11:case 15:ns(9,p)}}catch(A){ze(p,p.return,A)}if(p===d){M=null;break e}var T=p.sibling;if(T!==null){T.return=p.return,M=T;break e}M=p.return}}if(ue=i,ar(),Rt&&typeof Rt.onPostCommitFiberRoot=="function")try{Rt.onPostCommitFiberRoot(xo,e)}catch{}o=!0}return o}finally{ge=n,yt.transition=t}}return!1}function Vd(e,t,n){t=on(n,t),t=cd(e,t,1),e=cr(e,t,1),t=rt(),e!==null&&(bn(e,1,t),at(e,t))}function ze(e,t,n){if(e.tag===3)Vd(e,e,n);else for(;t!==null;){if(t.tag===3){Vd(t,e,n);break}else if(t.tag===1){var o=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(ur===null||!ur.has(o))){e=on(n,e),e=dd(t,e,1),t=cr(t,e,1),e=rt(),t!==null&&(bn(t,1,e),at(t,e));break}}t=t.return}}function $h(e,t,n){var o=e.pingCache;o!==null&&o.delete(t),t=rt(),e.pingedLanes|=e.suspendedLanes&n,He===e&&($e&n)===n&&(Ae===4||Ae===3&&($e&130023424)===$e&&500>Pe()-ga?Ir(e,0):xa|=n),at(e,t)}function Gd(e,t){t===0&&((e.mode&1)===0?t=1:(t=vo,vo<<=1,(vo&130023424)===0&&(vo=4194304)));var n=rt();e=Vt(e,t),e!==null&&(bn(e,t,n),at(e,n))}function Vh(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Gd(e,n)}function Gh(e,t){var n=0;switch(e.tag){case 13:var o=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:o=e.stateNode;break;default:throw Error(l(314))}o!==null&&o.delete(t),Gd(e,n)}var Qd;Qd=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||nt.current)st=!0;else{if((e.lanes&n)===0&&(t.flags&128)===0)return st=!1,Ph(e,t,n);st=(e.flags&131072)!==0}else st=!1,Ce&&(t.flags&1048576)!==0&&Cc(t,Fo,t.index);switch(t.lanes=0,t.tag){case 2:var o=t.type;ts(e,t),e=t.pendingProps;var i=qr(t,qe.current);rn(t,n),i=Yi(null,t,o,e,i,n);var a=Ki();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ot(o)?(a=!0,Bo(t)):a=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Hi(t),i.updater=Zo,t.stateNode=i,i._reactInternals=t,ta(t,o,e,n),t=sa(null,t,o,!0,a,n)):(t.tag=0,Ce&&a&&zi(t),tt(null,t,i,n),t=t.child),t;case 16:o=t.elementType;e:{switch(ts(e,t),e=t.pendingProps,i=o._init,o=i(o._payload),t.type=o,i=t.tag=Yh(o),e=Tt(o,e),i){case 0:t=oa(null,t,o,e,n);break e;case 1:t=yd(null,t,o,e,n);break e;case 11:t=md(null,t,o,e,n);break e;case 14:t=fd(null,t,o,Tt(o.type,e),n);break e}throw Error(l(306,o,""))}return t;case 0:return o=t.type,i=t.pendingProps,i=t.elementType===o?i:Tt(o,i),oa(e,t,o,i,n);case 1:return o=t.type,i=t.pendingProps,i=t.elementType===o?i:Tt(o,i),yd(e,t,o,i,n);case 3:e:{if(jd(t),e===null)throw Error(l(387));o=t.pendingProps,a=t.memoizedState,i=a.element,Rc(e,t),Go(t,o,null,n);var d=t.memoizedState;if(o=d.element,a.isDehydrated)if(a={element:o,isDehydrated:!1,cache:d.cache,pendingSuspenseBoundaries:d.pendingSuspenseBoundaries,transitions:d.transitions},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){i=on(Error(l(423)),t),t=wd(e,t,o,n,i);break e}else if(o!==i){i=on(Error(l(424)),t),t=wd(e,t,o,n,i);break e}else for(pt=or(t.stateNode.containerInfo.firstChild),ut=t,Ce=!0,Ct=null,n=Pc(t,null,o,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Zr(),o===i){t=Qt(e,t,n);break e}tt(e,t,o,n)}t=t.child}return t;case 5:return Ac(t),e===null&&Mi(t),o=t.type,i=t.pendingProps,a=e!==null?e.memoizedProps:null,d=i.children,Si(o,i)?d=null:a!==null&&Si(o,a)&&(t.flags|=32),vd(e,t),tt(e,t,d,n),t.child;case 6:return e===null&&Mi(t),null;case 13:return Nd(e,t,n);case 4:return Wi(t,t.stateNode.containerInfo),o=t.pendingProps,e===null?t.child=en(t,null,o,n):tt(e,t,o,n),t.child;case 11:return o=t.type,i=t.pendingProps,i=t.elementType===o?i:Tt(o,i),md(e,t,o,i,n);case 7:return tt(e,t,t.pendingProps,n),t.child;case 8:return tt(e,t,t.pendingProps.children,n),t.child;case 12:return tt(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(o=t.type._context,i=t.pendingProps,a=t.memoizedProps,d=i.value,we(Uo,o._currentValue),o._currentValue=d,a!==null)if(St(a.value,d)){if(a.children===i.children&&!nt.current){t=Qt(e,t,n);break e}}else for(a=t.child,a!==null&&(a.return=t);a!==null;){var p=a.dependencies;if(p!==null){d=a.child;for(var h=p.firstContext;h!==null;){if(h.context===o){if(a.tag===1){h=Gt(-1,n&-n),h.tag=2;var j=a.updateQueue;if(j!==null){j=j.shared;var k=j.pending;k===null?h.next=h:(h.next=k.next,k.next=h),j.pending=h}}a.lanes|=n,h=a.alternate,h!==null&&(h.lanes|=n),Di(a.return,n,t),p.lanes|=n;break}h=h.next}}else if(a.tag===10)d=a.type===t.type?null:a.child;else if(a.tag===18){if(d=a.return,d===null)throw Error(l(341));d.lanes|=n,p=d.alternate,p!==null&&(p.lanes|=n),Di(d,n,t),d=a.sibling}else d=a.child;if(d!==null)d.return=a;else for(d=a;d!==null;){if(d===t){d=null;break}if(a=d.sibling,a!==null){a.return=d.return,d=a;break}d=d.return}a=d}tt(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,o=t.pendingProps.children,rn(t,n),i=gt(i),o=o(i),t.flags|=1,tt(e,t,o,n),t.child;case 14:return o=t.type,i=Tt(o,t.pendingProps),i=Tt(o.type,i),fd(e,t,o,i,n);case 15:return xd(e,t,t.type,t.pendingProps,n);case 17:return o=t.type,i=t.pendingProps,i=t.elementType===o?i:Tt(o,i),ts(e,t),t.tag=1,ot(o)?(e=!0,Bo(t)):e=!1,rn(t,n),ad(t,o,i),ta(t,o,i,n),sa(null,t,o,!0,e,n);case 19:return kd(e,t,n);case 22:return gd(e,t,n)}throw Error(l(156,t.tag))};function Yd(e,t){return Tl(e,t)}function Qh(e,t,n,o){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function jt(e,t,n,o){return new Qh(e,t,n,o)}function Sa(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Yh(e){if(typeof e=="function")return Sa(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Ie)return 11;if(e===et)return 14}return 2}function fr(e,t){var n=e.alternate;return n===null?(n=jt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function ps(e,t,n,o,i,a){var d=2;if(o=e,typeof e=="function")Sa(e)&&(d=1);else if(typeof e=="string")d=5;else e:switch(e){case I:return _r(n.children,i,a,t);case B:d=8,i|=8;break;case ye:return e=jt(12,n,t,i|2),e.elementType=ye,e.lanes=a,e;case Se:return e=jt(13,n,t,i),e.elementType=Se,e.lanes=a,e;case Ye:return e=jt(19,n,t,i),e.elementType=Ye,e.lanes=a,e;case je:return hs(n,i,a,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case _e:d=10;break e;case ie:d=9;break e;case Ie:d=11;break e;case et:d=14;break e;case Ke:d=16,o=null;break e}throw Error(l(130,e==null?e:typeof e,""))}return t=jt(d,n,t,i),t.elementType=e,t.type=o,t.lanes=a,t}function _r(e,t,n,o){return e=jt(7,e,o,t),e.lanes=n,e}function hs(e,t,n,o){return e=jt(22,e,o,t),e.elementType=je,e.lanes=n,e.stateNode={isHidden:!1},e}function Ca(e,t,n){return e=jt(6,e,null,t),e.lanes=n,e}function Ta(e,t,n){return t=jt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Kh(e,t,n,o,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ei(0),this.expirationTimes=ei(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ei(0),this.identifierPrefix=o,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Ea(e,t,n,o,i,a,d,p,h){return e=new Kh(e,t,n,p,h),t===1?(t=1,a===!0&&(t|=8)):t=0,a=jt(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:o,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Hi(a),e}function qh(e,t,n){var o=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:U,key:o==null?null:""+o,children:e,containerInfo:t,implementation:n}}function Kd(e){if(!e)return ir;e=e._reactInternals;e:{if(jr(e)!==e||e.tag!==1)throw Error(l(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(ot(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(l(171))}if(e.tag===1){var n=e.type;if(ot(n))return bc(e,n,t)}return t}function qd(e,t,n,o,i,a,d,p,h){return e=Ea(n,o,!0,e,i,a,d,p,h),e.context=Kd(null),n=e.current,o=rt(),i=hr(n),a=Gt(o,i),a.callback=t!=null?t:null,cr(n,a,i),e.current.lanes=i,bn(e,i,o),at(e,o),e}function ms(e,t,n,o){var i=t.current,a=rt(),d=hr(i);return n=Kd(n),t.context===null?t.context=n:t.pendingContext=n,t=Gt(a,d),t.payload={element:e},o=o===void 0?null:o,o!==null&&(t.callback=o),e=cr(i,t,d),e!==null&&(It(e,i,d,a),Vo(e,i,d)),d}function fs(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Xd(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function La(e,t){Xd(e,t),(e=e.alternate)&&Xd(e,t)}function Xh(){return null}var Jd=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ia(e){this._internalRoot=e}xs.prototype.render=Ia.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(l(409));ms(e,t,null,null)},xs.prototype.unmount=Ia.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Lr(function(){ms(null,e,null,null)}),t[Ht]=null}};function xs(e){this._internalRoot=e}xs.prototype.unstable_scheduleHydration=function(e){if(e){var t=Rl();e={blockedOn:null,target:e,priority:t};for(var n=0;n<tr.length&&t!==0&&t<tr[n].priority;n++);tr.splice(n,0,e),n===0&&Al(e)}};function za(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function gs(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Zd(){}function Jh(e,t,n,o,i){if(i){if(typeof o=="function"){var a=o;o=function(){var j=fs(d);a.call(j)}}var d=qd(t,o,e,0,null,!1,!1,"",Zd);return e._reactRootContainer=d,e[Ht]=d.current,Bn(e.nodeType===8?e.parentNode:e),Lr(),d}for(;i=e.lastChild;)e.removeChild(i);if(typeof o=="function"){var p=o;o=function(){var j=fs(h);p.call(j)}}var h=Ea(e,0,!1,null,null,!1,!1,"",Zd);return e._reactRootContainer=h,e[Ht]=h.current,Bn(e.nodeType===8?e.parentNode:e),Lr(function(){ms(t,h,n,o)}),h}function vs(e,t,n,o,i){var a=n._reactRootContainer;if(a){var d=a;if(typeof i=="function"){var p=i;i=function(){var h=fs(d);p.call(h)}}ms(t,d,e,i)}else d=Jh(n,t,e,i,o);return fs(d)}Pl=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Nn(t.pendingLanes);n!==0&&(ti(t,n|1),at(t,Pe()),(ue&6)===0&&(ln=Pe()+500,ar()))}break;case 13:Lr(function(){var o=Vt(e,1);if(o!==null){var i=rt();It(o,e,1,i)}}),La(e,1)}},ri=function(e){if(e.tag===13){var t=Vt(e,134217728);if(t!==null){var n=rt();It(t,e,134217728,n)}La(e,134217728)}},Ml=function(e){if(e.tag===13){var t=hr(e),n=Vt(e,t);if(n!==null){var o=rt();It(n,e,t,o)}La(e,t)}},Rl=function(){return ge},Ol=function(e,t){var n=ge;try{return ge=e,t()}finally{ge=n}},Ys=function(e,t,n){switch(t){case"input":if(Fs(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var o=n[t];if(o!==e&&o.form===e.form){var i=Ro(o);if(!i)throw Error(l(90));yr(o),Fs(o,i)}}}break;case"textarea":ul(e,n);break;case"select":t=n.value,t!=null&&Ar(e,!!n.multiple,t,!1)}},jl=Na,wl=Lr;var Zh={usingClientEntryPoint:!1,Events:[Fn,Yr,Ro,vl,yl,Na]},eo={findFiberByHostInstance:wr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},em={bundleType:eo.bundleType,version:eo.version,rendererPackageName:eo.rendererPackageName,rendererConfig:eo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:z.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Sl(e),e===null?null:e.stateNode},findFiberByHostInstance:eo.findFiberByHostInstance||Xh,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__!="undefined"){var ys=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ys.isDisabled&&ys.supportsFiber)try{xo=ys.inject(em),Rt=ys}catch{}}return lt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Zh,lt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!za(t))throw Error(l(200));return qh(e,t,null,n)},lt.createRoot=function(e,t){if(!za(e))throw Error(l(299));var n=!1,o="",i=Jd;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(o=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Ea(e,1,!1,null,null,n,!1,o,i),e[Ht]=t.current,Bn(e.nodeType===8?e.parentNode:e),new Ia(t)},lt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(l(188)):(e=Object.keys(e).join(","),Error(l(268,e)));return e=Sl(t),e=e===null?null:e.stateNode,e},lt.flushSync=function(e){return Lr(e)},lt.hydrate=function(e,t,n){if(!gs(t))throw Error(l(200));return vs(null,e,t,!0,n)},lt.hydrateRoot=function(e,t,n){if(!za(e))throw Error(l(405));var o=n!=null&&n.hydratedSources||null,i=!1,a="",d=Jd;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onRecoverableError!==void 0&&(d=n.onRecoverableError)),t=qd(t,null,e,1,n!=null?n:null,i,!1,a,d),e[Ht]=t.current,Bn(e),o)for(e=0;e<o.length;e++)n=o[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new xs(t)},lt.render=function(e,t,n){if(!gs(t))throw Error(l(200));return vs(null,e,t,!1,n)},lt.unmountComponentAtNode=function(e){if(!gs(e))throw Error(l(40));return e._reactRootContainer?(Lr(function(){vs(null,null,e,!1,function(){e._reactRootContainer=null,e[Ht]=null})}),!0):!1},lt.unstable_batchedUpdates=Na,lt.unstable_renderSubtreeIntoContainer=function(e,t,n,o){if(!gs(n))throw Error(l(200));if(e==null||e._reactInternals===void 0)throw Error(l(38));return vs(e,t,n,!1,o)},lt.version="18.3.1-next-f1338f8080-20240426",lt}var au;function cm(){if(au)return Ma.exports;au=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__=="undefined"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(c){console.error(c)}}return s(),Ma.exports=lm(),Ma.exports}var lu;function dm(){if(lu)return js;lu=1;var s=cm();return js.createRoot=s.createRoot,js.hydrateRoot=s.hydrateRoot,js}var um=dm(),he=Ja();const Ve=rm(he);var ct=function(){return ct=Object.assign||function(c){for(var l,u=1,m=arguments.length;u<m;u++){l=arguments[u];for(var g in l)Object.prototype.hasOwnProperty.call(l,g)&&(c[g]=l[g])}return c},ct.apply(this,arguments)};function Ts(s,c,l){if(l||arguments.length===2)for(var u=0,m=c.length,g;u<m;u++)(g||!(u in c))&&(g||(g=Array.prototype.slice.call(c,0,u)),g[u]=c[u]);return s.concat(g||Array.prototype.slice.call(c))}var ke="-ms-",oo="-moz-",me="-webkit-",zu="comm",Ps="rule",Za="decl",pm="@import",hm="@namespace",_u="@keyframes",mm="@layer",Pu=Math.abs,el=String.fromCharCode,Ua=Object.assign;function fm(s,c){return De(s,0)^45?(((c<<2^De(s,0))<<2^De(s,1))<<2^De(s,2))<<2^De(s,3):0}function Mu(s){return s.trim()}function Kt(s,c){return(s=c.exec(s))?s[0]:s}function re(s,c,l){return s.replace(c,l)}function Ns(s,c,l){return s.indexOf(c,l)}function De(s,c){return s.charCodeAt(c)|0}function Br(s,c,l){return s.slice(c,l)}function zt(s){return s.length}function Ru(s){return s.length}function ro(s,c){return c.push(s),s}function xm(s,c){return s.map(c).join("")}function cu(s,c){return s.filter(function(l){return!Kt(l,c)})}var Ms=1,un=1,Ou=0,Nt=0,Oe=0,fn="";function Rs(s,c,l,u,m,g,w,E){return{value:s,root:c,parent:l,type:u,props:m,children:g,line:Ms,column:un,length:w,return:"",siblings:E}}function gr(s,c){return Ua(Rs("",null,null,"",null,null,0,s.siblings),s,{length:-s.length},c)}function dn(s){for(;s.root;)s=gr(s.root,{children:[s]});ro(s,s.siblings)}function gm(){return Oe}function vm(){return Oe=Nt>0?De(fn,--Nt):0,un--,Oe===10&&(un=1,Ms--),Oe}function Mt(){return Oe=Nt<Ou?De(fn,Nt++):0,un++,Oe===10&&(un=1,Ms++),Oe}function vr(){return De(fn,Nt)}function bs(){return Nt}function Os(s,c){return Br(fn,s,c)}function io(s){switch(s){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function ym(s){return Ms=un=1,Ou=zt(fn=s),Nt=0,[]}function jm(s){return fn="",s}function Ba(s){return Mu(Os(Nt-1,$a(s===91?s+2:s===40?s+1:s)))}function wm(s){for(;(Oe=vr())&&Oe<33;)Mt();return io(s)>2||io(Oe)>3?"":" "}function Nm(s,c){for(;--c&&Mt()&&!(Oe<48||Oe>102||Oe>57&&Oe<65||Oe>70&&Oe<97););return Os(s,bs()+(c<6&&vr()==32&&Mt()==32))}function $a(s){for(;Mt();)switch(Oe){case s:return Nt;case 34:case 39:s!==34&&s!==39&&$a(Oe);break;case 40:s===41&&$a(s);break;case 92:Mt();break}return Nt}function bm(s,c){for(;Mt()&&s+Oe!==57;)if(s+Oe===84&&vr()===47)break;return"/*"+Os(c,Nt-1)+"*"+el(s===47?s:Mt())}function km(s){for(;!io(vr());)Mt();return Os(s,Nt)}function Sm(s){return jm(ks("",null,null,null,[""],s=ym(s),0,[0],s))}function ks(s,c,l,u,m,g,w,E,C){for(var $=0,H=0,D=w,Q=0,Z=0,q=0,W=1,Y=1,fe=1,ce=0,ne="",z=m,X=g,U=u,I=ne;Y;)switch(q=ce,ce=Mt()){case 40:if(q!=108&&De(I,D-1)==58){Ns(I+=re(Ba(ce),"&","&\f"),"&\f",Pu($?E[$-1]:0))!=-1&&(fe=-1);break}case 34:case 39:case 91:I+=Ba(ce);break;case 9:case 10:case 13:case 32:I+=wm(q);break;case 92:I+=Nm(bs()-1,7);continue;case 47:switch(vr()){case 42:case 47:ro(Cm(bm(Mt(),bs()),c,l,C),C),(io(q||1)==5||io(vr()||1)==5)&&zt(I)&&Br(I,-1,void 0)!==" "&&(I+=" ");break;default:I+="/"}break;case 123*W:E[$++]=zt(I)*fe;case 125*W:case 59:case 0:switch(ce){case 0:case 125:Y=0;case 59+H:fe==-1&&(I=re(I,/\f/g,"")),Z>0&&(zt(I)-D||W===0&&q===47)&&ro(Z>32?uu(I+";",u,l,D-1,C):uu(re(I," ","")+";",u,l,D-2,C),C);break;case 59:I+=";";default:if(ro(U=du(I,c,l,$,H,m,E,ne,z=[],X=[],D,g),g),ce===123)if(H===0)ks(I,c,U,U,z,g,D,E,X);else{switch(Q){case 99:if(De(I,3)===110)break;case 108:if(De(I,2)===97)break;default:H=0;case 100:case 109:case 115:}H?ks(s,U,U,u&&ro(du(s,U,U,0,0,m,E,ne,m,z=[],D,X),X),m,X,D,E,u?z:X):ks(I,U,U,U,[""],X,0,E,X)}}$=H=Z=0,W=fe=1,ne=I="",D=w;break;case 58:D=1+zt(I),Z=q;default:if(W<1){if(ce==123)--W;else if(ce==125&&W++==0&&vm()==125)continue}switch(I+=el(ce),ce*W){case 38:fe=H>0?1:(I+="\f",-1);break;case 44:E[$++]=(zt(I)-1)*fe,fe=1;break;case 64:vr()===45&&(I+=Ba(Mt())),Q=vr(),H=D=zt(ne=I+=km(bs())),ce++;break;case 45:q===45&&zt(I)==2&&(W=0)}}return g}function du(s,c,l,u,m,g,w,E,C,$,H,D){for(var Q=m-1,Z=m===0?g:[""],q=Ru(Z),W=0,Y=0,fe=0;W<u;++W)for(var ce=0,ne=Br(s,Q+1,Q=Pu(Y=w[W])),z=s;ce<q;++ce)(z=Mu(Y>0?Z[ce]+" "+ne:re(ne,/&\f/g,Z[ce])))&&(C[fe++]=z);return Rs(s,c,l,m===0?Ps:E,C,$,H,D)}function Cm(s,c,l,u){return Rs(s,c,l,zu,el(gm()),Br(s,2,-2),0,u)}function uu(s,c,l,u,m){return Rs(s,c,l,Za,Br(s,0,u),Br(s,u+1,-1),u,m)}function Bu(s,c,l){switch(fm(s,c)){case 5103:return me+"print-"+s+s;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:case 6391:case 5879:case 5623:case 6135:case 4599:return me+s+s;case 4855:return me+s.replace("add","source-over").replace("substract","source-out").replace("intersect","source-in").replace("exclude","xor")+s;case 4789:return oo+s+s;case 5349:case 4246:case 4810:case 6968:case 2756:return me+s+oo+s+ke+s+s;case 5936:switch(De(s,c+11)){case 114:return me+s+ke+re(s,/[svh]\w+-[tblr]{2}/,"tb")+s;case 108:return me+s+ke+re(s,/[svh]\w+-[tblr]{2}/,"tb-rl")+s;case 45:return me+s+ke+re(s,/[svh]\w+-[tblr]{2}/,"lr")+s}case 6828:case 4268:case 2903:return me+s+ke+s+s;case 6165:return me+s+ke+"flex-"+s+s;case 5187:return me+s+re(s,/(\w+).+(:[^]+)/,me+"box-$1$2"+ke+"flex-$1$2")+s;case 5443:return me+s+ke+"flex-item-"+re(s,/flex-|-self/g,"")+(Kt(s,/flex-|baseline/)?"":ke+"grid-row-"+re(s,/flex-|-self/g,""))+s;case 4675:return me+s+ke+"flex-line-pack"+re(s,/align-content|flex-|-self/g,"")+s;case 5548:return me+s+ke+re(s,"shrink","negative")+s;case 5292:return me+s+ke+re(s,"basis","preferred-size")+s;case 6060:return me+"box-"+re(s,"-grow","")+me+s+ke+re(s,"grow","positive")+s;case 4554:return me+re(s,/([^-])(transform)/g,"$1"+me+"$2")+s;case 6187:return re(re(re(s,/(zoom-|grab)/,me+"$1"),/(image-set)/,me+"$1"),s,"")+s;case 5495:case 3959:return re(s,/(image-set\([^]*)/,me+"$1$`$1");case 4968:return re(re(s,/(.+:)(flex-)?(.*)/,me+"box-pack:$3"+ke+"flex-pack:$3"),/space-between/,"justify")+me+s+s;case 4200:if(!Kt(s,/flex-|baseline/))return ke+"grid-column-align"+Br(s,c)+s;break;case 2592:case 3360:return ke+re(s,"template-","")+s;case 4384:case 3616:return l&&l.some(function(u,m){return c=m,Kt(u.props,/grid-\w+-end/)})?~Ns(s+(l=l[c].value),"span",0)?s:ke+re(s,"-start","")+s+ke+"grid-row-span:"+(~Ns(l,"span",0)?Kt(l,/\d+/):+Kt(l,/\d+/)-+Kt(s,/\d+/))+";":ke+re(s,"-start","")+s;case 4896:case 4128:return l&&l.some(function(u){return Kt(u.props,/grid-\w+-start/)})?s:ke+re(re(s,"-end","-span"),"span ","")+s;case 4095:case 3583:case 4068:case 2532:return re(s,/(.+)-inline(.+)/,me+"$1$2")+s;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(zt(s)-1-c>6)switch(De(s,c+1)){case 109:if(De(s,c+4)!==45)break;case 102:return re(s,/(.+:)(.+)-([^]+)/,"$1"+me+"$2-$3$1"+oo+(De(s,c+3)==108?"$3":"$2-$3"))+s;case 115:return~Ns(s,"stretch",0)?Bu(re(s,"stretch","fill-available"),c,l)+s:s}break;case 5152:case 5920:return re(s,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(u,m,g,w,E,C,$){return ke+m+":"+g+$+(w?ke+m+"-span:"+(E?C:+C-+g)+$:"")+s});case 4949:if(De(s,c+6)===121)return re(s,":",":"+me)+s;break;case 6444:switch(De(s,De(s,14)===45?18:11)){case 120:return re(s,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+me+(De(s,14)===45?"inline-":"")+"box$3$1"+me+"$2$3$1"+ke+"$2box$3")+s;case 100:return re(s,":",":"+ke)+s}break;case 5719:case 2647:case 2135:case 3927:case 2391:return re(s,"scroll-","scroll-snap-")+s}return s}function Es(s,c){for(var l="",u=0;u<s.length;u++)l+=c(s[u],u,s,c)||"";return l}function Tm(s,c,l,u){switch(s.type){case mm:if(s.children.length)break;case pm:case hm:case Za:return s.return=s.return||s.value;case zu:return"";case _u:return s.return=s.value+"{"+Es(s.children,u)+"}";case Ps:if(!zt(s.value=s.props.join(",")))return""}return zt(l=Es(s.children,u))?s.return=s.value+"{"+l+"}":""}function Em(s){var c=Ru(s);return function(l,u,m,g){for(var w="",E=0;E<c;E++)w+=s[E](l,u,m,g)||"";return w}}function Lm(s){return function(c){c.root||(c=c.return)&&s(c)}}function Im(s,c,l,u){if(s.length>-1&&!s.return)switch(s.type){case Za:s.return=Bu(s.value,s.length,l);return;case _u:return Es([gr(s,{value:re(s.value,"@","@"+me)})],u);case Ps:if(s.length)return xm(l=s.props,function(m){switch(Kt(m,u=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":dn(gr(s,{props:[re(m,/:(read-\w+)/,":"+oo+"$1")]})),dn(gr(s,{props:[m]})),Ua(s,{props:cu(l,u)});break;case"::placeholder":dn(gr(s,{props:[re(m,/:(plac\w+)/,":"+me+"input-$1")]})),dn(gr(s,{props:[re(m,/:(plac\w+)/,":"+oo+"$1")]})),dn(gr(s,{props:[re(m,/:(plac\w+)/,ke+"input-$1")]})),dn(gr(s,{props:[m]})),Ua(s,{props:cu(l,u)});break}return""})}}var zm={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},mt={},pn=typeof process!="undefined"&&mt!==void 0&&(mt.REACT_APP_SC_ATTR||mt.SC_ATTR)||"data-styled",Au="active",Du="data-styled-version",Bs="6.3.10",tl=`/*!sc*/
`,so=typeof window!="undefined"&&typeof document!="undefined",_m=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process!="undefined"&&mt!==void 0&&mt.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&mt.REACT_APP_SC_DISABLE_SPEEDY!==""?mt.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&mt.REACT_APP_SC_DISABLE_SPEEDY:typeof process!="undefined"&&mt!==void 0&&mt.SC_DISABLE_SPEEDY!==void 0&&mt.SC_DISABLE_SPEEDY!==""&&mt.SC_DISABLE_SPEEDY!=="false"&&mt.SC_DISABLE_SPEEDY);function uo(s){for(var c=[],l=1;l<arguments.length;l++)c[l-1]=arguments[l];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(s," for more information.").concat(c.length>0?" Args: ".concat(c.join(", ")):""))}var Ss=new Map,Ls=new Map,Cs=1,no=function(s){if(Ss.has(s))return Ss.get(s);for(;Ls.has(Cs);)Cs++;var c=Cs++;return Ss.set(s,c),Ls.set(c,s),c},Pm=function(s,c){Cs=c+1,Ss.set(s,c),Ls.set(c,s)},rl=Object.freeze([]),hn=Object.freeze({});function Mm(s,c,l){return l===void 0&&(l=hn),s.theme!==l.theme&&s.theme||c||l.theme}var Fu=new Set(["a","abbr","address","area","article","aside","audio","b","bdi","bdo","blockquote","body","button","br","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","main","map","mark","menu","meter","nav","object","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","slot","small","span","strong","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","switch","symbol","text","textPath","tspan","use"]),Rm=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Om=/(^-|-$)/g;function pu(s){return s.replace(Rm,"-").replace(Om,"")}var Bm=/(a)(d)/gi,hu=function(s){return String.fromCharCode(s+(s>25?39:97))};function Va(s){var c,l="";for(c=Math.abs(s);c>52;c=c/52|0)l=hu(c%52)+l;return(hu(c%52)+l).replace(Bm,"$1-$2")}var Aa,Pr=function(s,c){for(var l=c.length;l;)s=33*s^c.charCodeAt(--l);return s},Hu=function(s){return Pr(5381,s)};function Am(s){return Va(Hu(s)>>>0)}function Dm(s){return s.displayName||s.name||"Component"}function Da(s){return typeof s=="string"&&!0}var Wu=typeof Symbol=="function"&&Symbol.for,Uu=Wu?Symbol.for("react.memo"):60115,Fm=Wu?Symbol.for("react.forward_ref"):60112,Hm={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Wm={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},$u={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Um=((Aa={})[Fm]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Aa[Uu]=$u,Aa);function mu(s){return("type"in(c=s)&&c.type.$$typeof)===Uu?$u:"$$typeof"in s?Um[s.$$typeof]:Hm;var c}var $m=Object.defineProperty,Vm=Object.getOwnPropertyNames,fu=Object.getOwnPropertySymbols,Gm=Object.getOwnPropertyDescriptor,Qm=Object.getPrototypeOf,xu=Object.prototype;function Vu(s,c,l){if(typeof c!="string"){if(xu){var u=Qm(c);u&&u!==xu&&Vu(s,u,l)}var m=Vm(c);fu&&(m=m.concat(fu(c)));for(var g=mu(s),w=mu(c),E=0;E<m.length;++E){var C=m[E];if(!(C in Wm||l&&l[C]||w&&C in w||g&&C in g)){var $=Gm(c,C);try{$m(s,C,$)}catch{}}}}return s}function mn(s){return typeof s=="function"}function nl(s){return typeof s=="object"&&"styledComponentId"in s}function Rr(s,c){return s&&c?"".concat(s," ").concat(c):s||c||""}function gu(s,c){return s.join("")}function ao(s){return s!==null&&typeof s=="object"&&s.constructor.name===Object.name&&!("props"in s&&s.$$typeof)}function Ga(s,c,l){if(l===void 0&&(l=!1),!l&&!ao(s)&&!Array.isArray(s))return c;if(Array.isArray(c))for(var u=0;u<c.length;u++)s[u]=Ga(s[u],c[u]);else if(ao(c))for(var u in c)s[u]=Ga(s[u],c[u]);return s}function ol(s,c){Object.defineProperty(s,"toString",{value:c})}var Ym=(function(){function s(c){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=c,this._cGroup=0,this._cIndex=0}return s.prototype.indexOfGroup=function(c){if(c===this._cGroup)return this._cIndex;var l=this._cIndex;if(c>this._cGroup)for(var u=this._cGroup;u<c;u++)l+=this.groupSizes[u];else for(u=this._cGroup-1;u>=c;u--)l-=this.groupSizes[u];return this._cGroup=c,this._cIndex=l,l},s.prototype.insertRules=function(c,l){if(c>=this.groupSizes.length){for(var u=this.groupSizes,m=u.length,g=m;c>=g;)if((g<<=1)<0)throw uo(16,"".concat(c));this.groupSizes=new Uint32Array(g),this.groupSizes.set(u),this.length=g;for(var w=m;w<g;w++)this.groupSizes[w]=0}for(var E=this.indexOfGroup(c+1),C=0,$=(w=0,l.length);w<$;w++)this.tag.insertRule(E,l[w])&&(this.groupSizes[c]++,E++,C++);C>0&&this._cGroup>c&&(this._cIndex+=C)},s.prototype.clearGroup=function(c){if(c<this.length){var l=this.groupSizes[c],u=this.indexOfGroup(c),m=u+l;this.groupSizes[c]=0;for(var g=u;g<m;g++)this.tag.deleteRule(u);l>0&&this._cGroup>c&&(this._cIndex-=l)}},s.prototype.getGroup=function(c){var l="";if(c>=this.length||this.groupSizes[c]===0)return l;for(var u=this.groupSizes[c],m=this.indexOfGroup(c),g=m+u,w=m;w<g;w++)l+=this.tag.getRule(w)+tl;return l},s})(),Km="style[".concat(pn,"][").concat(Du,'="').concat(Bs,'"]'),qm=new RegExp("^".concat(pn,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),vu=function(s){return typeof ShadowRoot!="undefined"&&s instanceof ShadowRoot||"host"in s&&s.nodeType===11},Qa=function(s){if(!s)return document;if(vu(s))return s;if("getRootNode"in s){var c=s.getRootNode();if(vu(c))return c}return document},Xm=function(s,c,l){for(var u,m=l.split(","),g=0,w=m.length;g<w;g++)(u=m[g])&&s.registerName(c,u)},Jm=function(s,c){for(var l,u=((l=c.textContent)!==null&&l!==void 0?l:"").split(tl),m=[],g=0,w=u.length;g<w;g++){var E=u[g].trim();if(E){var C=E.match(qm);if(C){var $=0|parseInt(C[1],10),H=C[2];$!==0&&(Pm(H,$),Xm(s,H,C[3]),s.getTag().insertRules($,m)),m.length=0}else m.push(E)}}},Fa=function(s){for(var c=Qa(s.options.target).querySelectorAll(Km),l=0,u=c.length;l<u;l++){var m=c[l];m&&m.getAttribute(pn)!==Au&&(Jm(s,m),m.parentNode&&m.parentNode.removeChild(m))}};function Zm(){return typeof __webpack_nonce__!="undefined"?__webpack_nonce__:null}var Gu=function(s){var c=document.head,l=s||c,u=document.createElement("style"),m=(function(E){var C=Array.from(E.querySelectorAll("style[".concat(pn,"]")));return C[C.length-1]})(l),g=m!==void 0?m.nextSibling:null;u.setAttribute(pn,Au),u.setAttribute(Du,Bs);var w=Zm();return w&&u.setAttribute("nonce",w),l.insertBefore(u,g),u},ef=(function(){function s(c){this.element=Gu(c),this.element.appendChild(document.createTextNode("")),this.sheet=(function(l){var u;if(l.sheet)return l.sheet;for(var m=(u=l.getRootNode().styleSheets)!==null&&u!==void 0?u:document.styleSheets,g=0,w=m.length;g<w;g++){var E=m[g];if(E.ownerNode===l)return E}throw uo(17)})(this.element),this.length=0}return s.prototype.insertRule=function(c,l){try{return this.sheet.insertRule(l,c),this.length++,!0}catch{return!1}},s.prototype.deleteRule=function(c){this.sheet.deleteRule(c),this.length--},s.prototype.getRule=function(c){var l=this.sheet.cssRules[c];return l&&l.cssText?l.cssText:""},s})(),tf=(function(){function s(c){this.element=Gu(c),this.nodes=this.element.childNodes,this.length=0}return s.prototype.insertRule=function(c,l){if(c<=this.length&&c>=0){var u=document.createTextNode(l);return this.element.insertBefore(u,this.nodes[c]||null),this.length++,!0}return!1},s.prototype.deleteRule=function(c){this.element.removeChild(this.nodes[c]),this.length--},s.prototype.getRule=function(c){return c<this.length?this.nodes[c].textContent:""},s})(),rf=(function(){function s(c){this.rules=[],this.length=0}return s.prototype.insertRule=function(c,l){return c<=this.length&&(c===this.length?this.rules.push(l):this.rules.splice(c,0,l),this.length++,!0)},s.prototype.deleteRule=function(c){this.rules.splice(c,1),this.length--},s.prototype.getRule=function(c){return c<this.length?this.rules[c]:""},s})(),yu=so,nf={isServer:!so,useCSSOMInjection:!_m},Qu=(function(){function s(c,l,u){c===void 0&&(c=hn),l===void 0&&(l={});var m=this;this.options=ct(ct({},nf),c),this.gs=l,this.names=new Map(u),this.server=!!c.isServer,!this.server&&so&&yu&&(yu=!1,Fa(this)),ol(this,function(){return(function(g){for(var w=g.getTag(),E=w.length,C="",$=function(D){var Q=(function(fe){return Ls.get(fe)})(D);if(Q===void 0)return"continue";var Z=g.names.get(Q);if(Z===void 0||!Z.size)return"continue";var q=w.getGroup(D);if(q.length===0)return"continue";var W=pn+".g"+D+'[id="'+Q+'"]',Y="";Z.forEach(function(fe){fe.length>0&&(Y+=fe+",")}),C+=q+W+'{content:"'+Y+'"}'+tl},H=0;H<E;H++)$(H);return C})(m)})}return s.registerId=function(c){return no(c)},s.prototype.rehydrate=function(){!this.server&&so&&Fa(this)},s.prototype.reconstructWithOptions=function(c,l){l===void 0&&(l=!0);var u=new s(ct(ct({},this.options),c),this.gs,l&&this.names||void 0);return!this.server&&so&&c.target!==this.options.target&&Qa(this.options.target)!==Qa(c.target)&&Fa(u),u},s.prototype.allocateGSInstance=function(c){return this.gs[c]=(this.gs[c]||0)+1},s.prototype.getTag=function(){return this.tag||(this.tag=(c=(function(l){var u=l.useCSSOMInjection,m=l.target;return l.isServer?new rf(m):u?new ef(m):new tf(m)})(this.options),new Ym(c)));var c},s.prototype.hasNameForId=function(c,l){var u,m;return(m=(u=this.names.get(c))===null||u===void 0?void 0:u.has(l))!==null&&m!==void 0&&m},s.prototype.registerName=function(c,l){no(c);var u=this.names.get(c);u?u.add(l):this.names.set(c,new Set([l]))},s.prototype.insertRules=function(c,l,u){this.registerName(c,l),this.getTag().insertRules(no(c),u)},s.prototype.clearNames=function(c){this.names.has(c)&&this.names.get(c).clear()},s.prototype.clearRules=function(c){this.getTag().clearGroup(no(c)),this.clearNames(c)},s.prototype.clearTag=function(){this.tag=void 0},s})(),of=/&/g,qt=47,Mr=42;function ju(s){if(s.indexOf("}")===-1)return!1;for(var c=s.length,l=0,u=0,m=!1,g=0;g<c;g++){var w=s.charCodeAt(g);if(u!==0||m||w!==qt||s.charCodeAt(g+1)!==Mr)if(m)w===Mr&&s.charCodeAt(g+1)===qt&&(m=!1,g++);else if(w!==34&&w!==39||g!==0&&s.charCodeAt(g-1)===92){if(u===0){if(w===123)l++;else if(w===125&&--l<0)return!0}}else u===0?u=w:u===w&&(u=0);else m=!0,g++}return l!==0||u!==0}function Yu(s,c){return s.map(function(l){return l.type==="rule"&&(l.value="".concat(c," ").concat(l.value),l.value=l.value.replaceAll(",",",".concat(c," ")),l.props=l.props.map(function(u){return"".concat(c," ").concat(u)})),Array.isArray(l.children)&&l.type!=="@keyframes"&&(l.children=Yu(l.children,c)),l})}function sf(s){var c,l,u,m=hn,g=m.options,w=g===void 0?hn:g,E=m.plugins,C=E===void 0?rl:E,$=function(q,W,Y){return Y.startsWith(l)&&Y.endsWith(l)&&Y.replaceAll(l,"").length>0?".".concat(c):q},H=C.slice();H.push(function(q){q.type===Ps&&q.value.includes("&")&&(u||(u=new RegExp("\\".concat(l,"\\b"),"g")),q.props[0]=q.props[0].replace(of,l).replace(u,$))}),w.prefix&&H.push(Im),H.push(Tm);var D=[],Q=Em(H.concat(Lm(function(q){return D.push(q)}))),Z=function(q,W,Y,fe){W===void 0&&(W=""),Y===void 0&&(Y=""),fe===void 0&&(fe="&"),c=fe,l=W,u=void 0;var ce=(function(z){if(!ju(z))return z;for(var X=z.length,U="",I=0,B=0,ye=0,_e=!1,ie=0;ie<X;ie++){var Ie=z.charCodeAt(ie);if(ye!==0||_e||Ie!==qt||z.charCodeAt(ie+1)!==Mr)if(_e)Ie===Mr&&z.charCodeAt(ie+1)===qt&&(_e=!1,ie++);else if(Ie!==34&&Ie!==39||ie!==0&&z.charCodeAt(ie-1)===92){if(ye===0)if(Ie===123)B++;else if(Ie===125){if(--B<0){for(var Se=ie+1;Se<X;){var Ye=z.charCodeAt(Se);if(Ye===59||Ye===10)break;Se++}Se<X&&z.charCodeAt(Se)===59&&Se++,B=0,ie=Se-1,I=Se;continue}B===0&&(U+=z.substring(I,ie+1),I=ie+1)}else Ie===59&&B===0&&(U+=z.substring(I,ie+1),I=ie+1)}else ye===0?ye=Ie:ye===Ie&&(ye=0);else _e=!0,ie++}if(I<X){var et=z.substring(I);ju(et)||(U+=et)}return U})((function(z){if(z.indexOf("//")===-1)return z;for(var X=z.length,U=[],I=0,B=0,ye=0,_e=0;B<X;){var ie=z.charCodeAt(B);if(ie!==34&&ie!==39||B!==0&&z.charCodeAt(B-1)===92)if(ye===0)if(ie===qt&&B+1<X&&z.charCodeAt(B+1)===Mr){for(B+=2;B+1<X&&(z.charCodeAt(B)!==Mr||z.charCodeAt(B+1)!==qt);)B++;B+=2}else if(ie===40&&B>=3&&(32|z.charCodeAt(B-1))==108&&(32|z.charCodeAt(B-2))==114&&(32|z.charCodeAt(B-3))==117)_e=1,B++;else if(_e>0)ie===41?_e--:ie===40&&_e++,B++;else if(ie===Mr&&B+1<X&&z.charCodeAt(B+1)===qt)B>I&&U.push(z.substring(I,B)),I=B+=2;else if(ie===qt&&B+1<X&&z.charCodeAt(B+1)===qt){for(B>I&&U.push(z.substring(I,B));B<X&&z.charCodeAt(B)!==10;)B++;I=B}else B++;else B++;else ye===0?ye=ie:ye===ie&&(ye=0),B++}return I===0?z:(I<X&&U.push(z.substring(I)),U.join(""))})(q)),ne=Sm(Y||W?"".concat(Y," ").concat(W," { ").concat(ce," }"):ce);return w.namespace&&(ne=Yu(ne,w.namespace)),D=[],Es(ne,Q),D};return Z.hash=C.length?C.reduce(function(q,W){return W.name||uo(15),Pr(q,W.name)},5381).toString():"",Z}var af=new Qu,Ya=sf(),Ku=Ve.createContext({shouldForwardProp:void 0,styleSheet:af,stylis:Ya});Ku.Consumer;Ve.createContext(void 0);function wu(){return Ve.useContext(Ku)}var lf=(function(){function s(c,l){var u=this;this.inject=function(m,g){g===void 0&&(g=Ya);var w=u.name+g.hash;m.hasNameForId(u.id,w)||m.insertRules(u.id,w,g(u.rules,w,"@keyframes"))},this.name=c,this.id="sc-keyframes-".concat(c),this.rules=l,ol(this,function(){throw uo(12,String(u.name))})}return s.prototype.getName=function(c){return c===void 0&&(c=Ya),this.name+c.hash},s})();function cf(s,c){return c==null||typeof c=="boolean"||c===""?"":typeof c!="number"||c===0||s in zm||s.startsWith("--")?String(c).trim():"".concat(c,"px")}var df=function(s){return s>="A"&&s<="Z"};function Nu(s){for(var c="",l=0;l<s.length;l++){var u=s[l];if(l===1&&u==="-"&&s[0]==="-")return s;df(u)?c+="-"+u.toLowerCase():c+=u}return c.startsWith("ms-")?"-"+c:c}var qu=function(s){return s==null||s===!1||s===""},Xu=function(s){var c=[];for(var l in s){var u=s[l];s.hasOwnProperty(l)&&!qu(u)&&(Array.isArray(u)&&u.isCss||mn(u)?c.push("".concat(Nu(l),":"),u,";"):ao(u)?c.push.apply(c,Ts(Ts(["".concat(l," {")],Xu(u),!1),["}"],!1)):c.push("".concat(Nu(l),": ").concat(cf(l,u),";")))}return c};function Or(s,c,l,u,m){if(m===void 0&&(m=[]),typeof s=="string")return s&&m.push(s),m;if(qu(s))return m;if(nl(s))return m.push(".".concat(s.styledComponentId)),m;if(mn(s)){if(!mn(w=s)||w.prototype&&w.prototype.isReactComponent||!c)return m.push(s),m;var g=s(c);return Or(g,c,l,u,m)}var w;if(s instanceof lf)return l?(s.inject(l,u),m.push(s.getName(u))):m.push(s),m;if(ao(s)){for(var E=Xu(s),C=0;C<E.length;C++)m.push(E[C]);return m}if(!Array.isArray(s))return m.push(s.toString()),m;for(C=0;C<s.length;C++)Or(s[C],c,l,u,m);return m}function uf(s){for(var c=0;c<s.length;c+=1){var l=s[c];if(mn(l)&&!nl(l))return!1}return!0}var pf=Hu(Bs),hf=(function(){function s(c,l,u){this.rules=c,this.staticRulesId="",this.isStatic=(u===void 0||u.isStatic)&&uf(c),this.componentId=l,this.baseHash=Pr(pf,l),this.baseStyle=u,Qu.registerId(l)}return s.prototype.generateAndInjectStyles=function(c,l,u){var m=this.baseStyle?this.baseStyle.generateAndInjectStyles(c,l,u).className:"";if(this.isStatic&&!u.hash)if(this.staticRulesId&&l.hasNameForId(this.componentId,this.staticRulesId))m=Rr(m,this.staticRulesId);else{var g=gu(Or(this.rules,c,l,u)),w=Va(Pr(this.baseHash,g)>>>0);if(!l.hasNameForId(this.componentId,w)){var E=u(g,".".concat(w),void 0,this.componentId);l.insertRules(this.componentId,w,E)}m=Rr(m,w),this.staticRulesId=w}else{for(var C=Pr(this.baseHash,u.hash),$="",H=0;H<this.rules.length;H++){var D=this.rules[H];if(typeof D=="string")$+=D;else if(D){var Q=gu(Or(D,c,l,u));C=Pr(Pr(C,String(H)),Q),$+=Q}}if($){var Z=Va(C>>>0);if(!l.hasNameForId(this.componentId,Z)){var q=u($,".".concat(Z),void 0,this.componentId);l.insertRules(this.componentId,Z,q)}m=Rr(m,Z)}}return{className:m,css:typeof window=="undefined"?l.getTag().getGroup(no(this.componentId)):""}},s})(),Ju=Ve.createContext(void 0);Ju.Consumer;var Ha={};function mf(s,c,l){var u=nl(s),m=s,g=!Da(s),w=c.attrs,E=w===void 0?rl:w,C=c.componentId,$=C===void 0?(function(z,X){var U=typeof z!="string"?"sc":pu(z);Ha[U]=(Ha[U]||0)+1;var I="".concat(U,"-").concat(Am(Bs+U+Ha[U]));return X?"".concat(X,"-").concat(I):I})(c.displayName,c.parentComponentId):C,H=c.displayName,D=H===void 0?(function(z){return Da(z)?"styled.".concat(z):"Styled(".concat(Dm(z),")")})(s):H,Q=c.displayName&&c.componentId?"".concat(pu(c.displayName),"-").concat(c.componentId):c.componentId||$,Z=u&&m.attrs?m.attrs.concat(E).filter(Boolean):E,q=c.shouldForwardProp;if(u&&m.shouldForwardProp){var W=m.shouldForwardProp;if(c.shouldForwardProp){var Y=c.shouldForwardProp;q=function(z,X){return W(z,X)&&Y(z,X)}}else q=W}var fe=new hf(l,Q,u?m.componentStyle:void 0);function ce(z,X){return(function(U,I,B){var ye=U.attrs,_e=U.componentStyle,ie=U.defaultProps,Ie=U.foldedComponentIds,Se=U.styledComponentId,Ye=U.target,et=Ve.useContext(Ju),Ke=wu(),je=U.shouldForwardProp||Ke.shouldForwardProp,L=Mm(I,et,ie)||hn,F=(function(se,de,le){for(var xe,Te=ct(ct({},de),{className:void 0,theme:le}),Xt=0;Xt<se.length;Xt+=1){var yr=mn(xe=se[Xt])?xe(Te):xe;for(var bt in yr)bt==="className"?Te.className=Rr(Te.className,yr[bt]):bt==="style"?Te.style=ct(ct({},Te.style),yr[bt]):Te[bt]=yr[bt]}return"className"in de&&typeof de.className=="string"&&(Te.className=Rr(Te.className,de.className)),Te})(ye,I,L),_=F.as||Ye,x={};for(var N in F)F[N]===void 0||N[0]==="$"||N==="as"||N==="theme"&&F.theme===L||(N==="forwardedAs"?x.as=F.forwardedAs:je&&!je(N,_)||(x[N]=F[N]));var ee=(function(se,de){var le=wu(),xe=se.generateAndInjectStyles(de,le.styleSheet,le.stylis);return xe})(_e,F),te=ee.className,ae=Rr(Ie,Se);return te&&(ae+=" "+te),F.className&&(ae+=" "+F.className),x[Da(_)&&!Fu.has(_)?"class":"className"]=ae,B&&(x.ref=B),he.createElement(_,x)})(ne,z,X)}ce.displayName=D;var ne=Ve.forwardRef(ce);return ne.attrs=Z,ne.componentStyle=fe,ne.displayName=D,ne.shouldForwardProp=q,ne.foldedComponentIds=u?Rr(m.foldedComponentIds,m.styledComponentId):"",ne.styledComponentId=Q,ne.target=u?m.target:s,Object.defineProperty(ne,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(z){this._foldedDefaultProps=u?(function(X){for(var U=[],I=1;I<arguments.length;I++)U[I-1]=arguments[I];for(var B=0,ye=U;B<ye.length;B++)Ga(X,ye[B],!0);return X})({},m.defaultProps,z):z}}),ol(ne,function(){return".".concat(ne.styledComponentId)}),g&&Vu(ne,s,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),ne}function bu(s,c){for(var l=[s[0]],u=0,m=c.length;u<m;u+=1)l.push(c[u],s[u+1]);return l}var ku=function(s){return Object.assign(s,{isCss:!0})};function ff(s){for(var c=[],l=1;l<arguments.length;l++)c[l-1]=arguments[l];if(mn(s)||ao(s))return ku(Or(bu(rl,Ts([s],c,!0))));var u=s;return c.length===0&&u.length===1&&typeof u[0]=="string"?Or(u):ku(Or(bu(u,c)))}function Ka(s,c,l){if(l===void 0&&(l=hn),!c)throw uo(1,c);var u=function(m){for(var g=[],w=1;w<arguments.length;w++)g[w-1]=arguments[w];return s(c,l,ff.apply(void 0,Ts([m],g,!1)))};return u.attrs=function(m){return Ka(s,c,ct(ct({},l),{attrs:Array.prototype.concat(l.attrs,m).filter(Boolean)}))},u.withConfig=function(m){return Ka(s,c,ct(ct({},l),m))},u}var Zu=function(s){return Ka(mf,s)},ve=Zu;Fu.forEach(function(s){ve[s]=Zu(s)});const Wa={Wrapper:ve.div`
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
    `},Su={Wrapper:ve.header`
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
    `},xf="/html-core-notes/images/transparentLogo.png";var ep={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Cu=Ve.createContext&&Ve.createContext(ep),gf=["attr","size","title"];function vf(s,c){if(s==null)return{};var l=yf(s,c),u,m;if(Object.getOwnPropertySymbols){var g=Object.getOwnPropertySymbols(s);for(m=0;m<g.length;m++)u=g[m],!(c.indexOf(u)>=0)&&Object.prototype.propertyIsEnumerable.call(s,u)&&(l[u]=s[u])}return l}function yf(s,c){if(s==null)return{};var l={};for(var u in s)if(Object.prototype.hasOwnProperty.call(s,u)){if(c.indexOf(u)>=0)continue;l[u]=s[u]}return l}function Is(){return Is=Object.assign?Object.assign.bind():function(s){for(var c=1;c<arguments.length;c++){var l=arguments[c];for(var u in l)Object.prototype.hasOwnProperty.call(l,u)&&(s[u]=l[u])}return s},Is.apply(this,arguments)}function Tu(s,c){var l=Object.keys(s);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(s);c&&(u=u.filter(function(m){return Object.getOwnPropertyDescriptor(s,m).enumerable})),l.push.apply(l,u)}return l}function zs(s){for(var c=1;c<arguments.length;c++){var l=arguments[c]!=null?arguments[c]:{};c%2?Tu(Object(l),!0).forEach(function(u){jf(s,u,l[u])}):Object.getOwnPropertyDescriptors?Object.defineProperties(s,Object.getOwnPropertyDescriptors(l)):Tu(Object(l)).forEach(function(u){Object.defineProperty(s,u,Object.getOwnPropertyDescriptor(l,u))})}return s}function jf(s,c,l){return c=wf(c),c in s?Object.defineProperty(s,c,{value:l,enumerable:!0,configurable:!0,writable:!0}):s[c]=l,s}function wf(s){var c=Nf(s,"string");return typeof c=="symbol"?c:c+""}function Nf(s,c){if(typeof s!="object"||!s)return s;var l=s[Symbol.toPrimitive];if(l!==void 0){var u=l.call(s,c);if(typeof u!="object")return u;throw new TypeError("@@toPrimitive must return a primitive value.")}return(c==="string"?String:Number)(s)}function tp(s){return s&&s.map((c,l)=>Ve.createElement(c.tag,zs({key:l},c.attr),tp(c.child)))}function J(s){return c=>Ve.createElement(bf,Is({attr:zs({},s.attr)},c),tp(s.child))}function bf(s){var c=l=>{var{attr:u,size:m,title:g}=s,w=vf(s,gf),E=m||l.size||"1em",C;return l.className&&(C=l.className),s.className&&(C=(C?C+" ":"")+s.className),Ve.createElement("svg",Is({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},l.attr,u,w,{className:C,style:zs(zs({color:s.color||l.color},l.style),s.style),height:E,width:E,xmlns:"http://www.w3.org/2000/svg"}),g&&Ve.createElement("title",null,g),s.children)};return Cu!==void 0?Ve.createElement(Cu.Consumer,null,l=>c(l)):c(ep)}function kf(s){return J({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"22 12 18 12 15 21 9 3 6 12 2 12"},child:[]}]})(s)}function As(s){return J({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"},child:[]},{tag:"line",attr:{x1:"12",y1:"9",x2:"12",y2:"13"},child:[]},{tag:"line",attr:{x1:"12",y1:"17",x2:"12.01",y2:"17"},child:[]}]})(s)}function Sf(s){return J({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"},child:[]},{tag:"path",attr:{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"},child:[]}]})(s)}function Cf(s){return J({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"},child:[]},{tag:"polyline",attr:{points:"3.27 6.96 12 12.01 20.73 6.96"},child:[]},{tag:"line",attr:{x1:"12",y1:"22.08",x2:"12",y2:"12"},child:[]}]})(s)}function Pt(s){return J({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14"},child:[]},{tag:"polyline",attr:{points:"22 4 12 14.01 9 11.01"},child:[]}]})(s)}function Tf(s){return J({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"9 11 12 14 22 4"},child:[]},{tag:"path",attr:{d:"M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"},child:[]}]})(s)}function Ef(s){return J({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"20 6 9 17 4 12"},child:[]}]})(s)}function Ge(s){return J({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"6 9 12 15 18 9"},child:[]}]})(s)}function Qe(s){return J({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"9 18 15 12 9 6"},child:[]}]})(s)}function _t(s){return J({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"16 18 22 12 16 6"},child:[]},{tag:"polyline",attr:{points:"8 6 2 12 8 18"},child:[]}]})(s)}function Ft(s){return J({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"9",y:"9",width:"13",height:"13",rx:"2",ry:"2"},child:[]},{tag:"path",attr:{d:"M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"},child:[]}]})(s)}function Lf(s){return J({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"4",y:"4",width:"16",height:"16",rx:"2",ry:"2"},child:[]},{tag:"rect",attr:{x:"9",y:"9",width:"6",height:"6"},child:[]},{tag:"line",attr:{x1:"9",y1:"1",x2:"9",y2:"4"},child:[]},{tag:"line",attr:{x1:"15",y1:"1",x2:"15",y2:"4"},child:[]},{tag:"line",attr:{x1:"9",y1:"20",x2:"9",y2:"23"},child:[]},{tag:"line",attr:{x1:"15",y1:"20",x2:"15",y2:"23"},child:[]},{tag:"line",attr:{x1:"20",y1:"9",x2:"23",y2:"9"},child:[]},{tag:"line",attr:{x1:"20",y1:"14",x2:"23",y2:"14"},child:[]},{tag:"line",attr:{x1:"1",y1:"9",x2:"4",y2:"9"},child:[]},{tag:"line",attr:{x1:"1",y1:"14",x2:"4",y2:"14"},child:[]}]})(s)}function If(s){return J({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"ellipse",attr:{cx:"12",cy:"5",rx:"9",ry:"3"},child:[]},{tag:"path",attr:{d:"M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"},child:[]},{tag:"path",attr:{d:"M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"},child:[]}]})(s)}function zf(s){return J({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 20h9"},child:[]},{tag:"path",attr:{d:"M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"},child:[]}]})(s)}function ws(s){return J({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"},child:[]},{tag:"polyline",attr:{points:"15 3 21 3 21 9"},child:[]},{tag:"line",attr:{x1:"10",y1:"14",x2:"21",y2:"3"},child:[]}]})(s)}function sl(s){return J({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"},child:[]},{tag:"circle",attr:{cx:"12",cy:"12",r:"3"},child:[]}]})(s)}function _f(s){return J({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"},child:[]},{tag:"polyline",attr:{points:"14 2 14 8 20 8"},child:[]},{tag:"line",attr:{x1:"16",y1:"13",x2:"8",y2:"13"},child:[]},{tag:"line",attr:{x1:"16",y1:"17",x2:"8",y2:"17"},child:[]},{tag:"polyline",attr:{points:"10 9 9 9 8 9"},child:[]}]})(s)}function rp(s){return J({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"line",attr:{x1:"2",y1:"12",x2:"22",y2:"12"},child:[]},{tag:"path",attr:{d:"M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"},child:[]}]})(s)}function np(s){return J({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"3",y:"3",width:"7",height:"7"},child:[]},{tag:"rect",attr:{x:"14",y:"3",width:"7",height:"7"},child:[]},{tag:"rect",attr:{x:"14",y:"14",width:"7",height:"7"},child:[]},{tag:"rect",attr:{x:"3",y:"14",width:"7",height:"7"},child:[]}]})(s)}function il(s){return J({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"4",y1:"9",x2:"20",y2:"9"},child:[]},{tag:"line",attr:{x1:"4",y1:"15",x2:"20",y2:"15"},child:[]},{tag:"line",attr:{x1:"10",y1:"3",x2:"8",y2:"21"},child:[]},{tag:"line",attr:{x1:"16",y1:"3",x2:"14",y2:"21"},child:[]}]})(s)}function _s(s){return J({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"3",y:"3",width:"18",height:"18",rx:"2",ry:"2"},child:[]},{tag:"circle",attr:{cx:"8.5",cy:"8.5",r:"1.5"},child:[]},{tag:"polyline",attr:{points:"21 15 16 10 5 21"},child:[]}]})(s)}function wt(s){return J({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"line",attr:{x1:"12",y1:"16",x2:"12",y2:"12"},child:[]},{tag:"line",attr:{x1:"12",y1:"8",x2:"12.01",y2:"8"},child:[]}]})(s)}function lo(s){return J({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"12 2 2 7 12 12 22 7 12 2"},child:[]},{tag:"polyline",attr:{points:"2 17 12 22 22 17"},child:[]},{tag:"polyline",attr:{points:"2 12 12 17 22 12"},child:[]}]})(s)}function Pf(s){return J({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"3",y:"3",width:"18",height:"18",rx:"2",ry:"2"},child:[]},{tag:"line",attr:{x1:"3",y1:"9",x2:"21",y2:"9"},child:[]},{tag:"line",attr:{x1:"9",y1:"21",x2:"9",y2:"9"},child:[]}]})(s)}function Mf(s){return J({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M15 7h3a5 5 0 0 1 5 5 5 5 0 0 1-5 5h-3m-6 0H6a5 5 0 0 1-5-5 5 5 0 0 1 5-5h3"},child:[]},{tag:"line",attr:{x1:"8",y1:"12",x2:"16",y2:"12"},child:[]}]})(s)}function op(s){return J({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"},child:[]},{tag:"path",attr:{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"},child:[]}]})(s)}function Rf(s){return J({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"8",y1:"6",x2:"21",y2:"6"},child:[]},{tag:"line",attr:{x1:"8",y1:"12",x2:"21",y2:"12"},child:[]},{tag:"line",attr:{x1:"8",y1:"18",x2:"21",y2:"18"},child:[]},{tag:"line",attr:{x1:"3",y1:"6",x2:"3.01",y2:"6"},child:[]},{tag:"line",attr:{x1:"3",y1:"12",x2:"3.01",y2:"12"},child:[]},{tag:"line",attr:{x1:"3",y1:"18",x2:"3.01",y2:"18"},child:[]}]})(s)}function Eu(s){return J({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"3",y:"11",width:"18",height:"11",rx:"2",ry:"2"},child:[]},{tag:"path",attr:{d:"M7 11V7a5 5 0 0 1 10 0v4"},child:[]}]})(s)}function Of(s){return J({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"},child:[]},{tag:"circle",attr:{cx:"12",cy:"10",r:"3"},child:[]}]})(s)}function sp(s){return J({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"},child:[]}]})(s)}function Bf(s){return J({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"line",attr:{x1:"8",y1:"12",x2:"16",y2:"12"},child:[]}]})(s)}function Af(s){return J({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"},child:[]}]})(s)}function Df(s){return J({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z"},child:[]},{tag:"path",attr:{d:"M13 13l6 6"},child:[]}]})(s)}function Ff(s){return J({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"3 11 22 2 13 21 11 13 3 11"},child:[]}]})(s)}function Hf(s){return J({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"6",y:"4",width:"4",height:"16"},child:[]},{tag:"rect",attr:{x:"14",y:"4",width:"4",height:"16"},child:[]}]})(s)}function Wf(s){return J({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"5 3 19 12 5 21 5 3"},child:[]}]})(s)}function Uf(s){return J({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"23 4 23 10 17 10"},child:[]},{tag:"path",attr:{d:"M20.49 15a9 9 0 1 1-2.12-9.36L23 10"},child:[]}]})(s)}function Lu(s){return J({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"2",y:"2",width:"20",height:"8",rx:"2",ry:"2"},child:[]},{tag:"rect",attr:{x:"2",y:"14",width:"20",height:"8",rx:"2",ry:"2"},child:[]},{tag:"line",attr:{x1:"6",y1:"6",x2:"6.01",y2:"6"},child:[]},{tag:"line",attr:{x1:"6",y1:"18",x2:"6.01",y2:"18"},child:[]}]})(s)}function qa(s){return J({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"},child:[]}]})(s)}function $f(s){return J({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"16 3 21 3 21 8"},child:[]},{tag:"line",attr:{x1:"4",y1:"20",x2:"21",y2:"3"},child:[]},{tag:"polyline",attr:{points:"21 16 21 21 16 21"},child:[]},{tag:"line",attr:{x1:"15",y1:"15",x2:"21",y2:"21"},child:[]},{tag:"line",attr:{x1:"4",y1:"4",x2:"9",y2:"9"},child:[]}]})(s)}function Vf(s){return J({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"5"},child:[]},{tag:"line",attr:{x1:"12",y1:"1",x2:"12",y2:"3"},child:[]},{tag:"line",attr:{x1:"12",y1:"21",x2:"12",y2:"23"},child:[]},{tag:"line",attr:{x1:"4.22",y1:"4.22",x2:"5.64",y2:"5.64"},child:[]},{tag:"line",attr:{x1:"18.36",y1:"18.36",x2:"19.78",y2:"19.78"},child:[]},{tag:"line",attr:{x1:"1",y1:"12",x2:"3",y2:"12"},child:[]},{tag:"line",attr:{x1:"21",y1:"12",x2:"23",y2:"12"},child:[]},{tag:"line",attr:{x1:"4.22",y1:"19.78",x2:"5.64",y2:"18.36"},child:[]},{tag:"line",attr:{x1:"18.36",y1:"5.64",x2:"19.78",y2:"4.22"},child:[]}]})(s)}function Xa(s){return J({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"},child:[]},{tag:"line",attr:{x1:"7",y1:"7",x2:"7.01",y2:"7"},child:[]}]})(s)}function co(s){return J({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"4 7 4 4 20 4 20 7"},child:[]},{tag:"line",attr:{x1:"9",y1:"20",x2:"15",y2:"20"},child:[]},{tag:"line",attr:{x1:"12",y1:"4",x2:"12",y2:"20"},child:[]}]})(s)}const Gf=()=>{const[s,c]=he.useState(!1),[l,u]=he.useState("dark");he.useEffect(()=>{const E=localStorage.getItem("app-theme")||"dark";u(E),E==="light"?document.documentElement.setAttribute("data-theme","light"):document.documentElement.removeAttribute("data-theme")},[]),he.useEffect(()=>{l==="light"?document.documentElement.setAttribute("data-theme","light"):document.documentElement.removeAttribute("data-theme"),localStorage.setItem("app-theme",l)},[l]);const m=he.useMemo(()=>l==="light"?"dark":"light",[l]),g=()=>{u(m)};return r.jsx(Su.Wrapper,{children:r.jsx(Su.Main,{children:r.jsxs("div",{className:"logoNameThemeToggleWrapper",children:[r.jsxs("div",{className:"logoNameWrapper",children:[r.jsxs("div",{className:"logoWrapper",children:[!s&&r.jsx("div",{className:"logoSkeleton"}),r.jsx("img",{src:xf,alt:"html-core-notes",onLoad:()=>c(!0),style:{opacity:s?1:0}})]}),r.jsxs("div",{className:"nameWrapper",children:[r.jsx("div",{className:"title",children:"html-core-notes"}),r.jsx("div",{className:"subTitle",children:"At-a-glance HTML revision"})]})]}),r.jsxs("button",{type:"button",className:"themeToggleBtn",onClick:g,"aria-label":`Switch to ${m} theme`,title:`Switch to ${m}`,children:[r.jsx("span",{className:"icon",children:l==="light"?r.jsx(Af,{}):r.jsx(Vf,{})}),r.jsx("span",{className:"label",children:l==="light"?"Light":"Dark"})]})]})})})},Qf={Wrapper:ve.footer`
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
    `},Yf=()=>r.jsxs(Qf.Wrapper,{children:[r.jsxs("div",{className:"left",children:["© ",new Date().getFullYear()," | All rights reserved"]}),r.jsxs("div",{className:"right",children:["By ",r.jsx("a",{href:"https://www.ashishranjan.net",target:"_blank",rel:"noopener noreferrer",children:"Ashish Ranjan"})]})]}),Iu={Wrapper:ve.section`
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
    `},Kf=()=>{const s="2026-02-19T12:56:35.956Z",c=new Date(s).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"2-digit"});return r.jsx(Iu.Wrapper,{children:r.jsxs(Iu.Content,{children:[r.jsx("h2",{className:"heading",children:"About HTML"}),r.jsx("p",{children:"HTML stands for HyperText Markup Language. It is the structural foundation of the web. Every website, application, and interface you see begins with HTML. It defines structure and meaning, not styling or behavior. Headings, paragraphs, lists, forms, tables, media, and semantic regions are all described using HTML."}),r.jsx("p",{children:"A strong understanding of HTML makes CSS cleaner and JavaScript more predictable. Good HTML improves accessibility, performance, SEO, and maintainability. It is not just markup. It is the logical blueprint of every web interface."}),r.jsx("p",{children:"The html-core-notes project is designed as a focused revision system. It removes noise and organizes concepts in a structured and practical way. The goal is fast recall, semantic clarity, and strong fundamentals."}),r.jsxs("div",{className:"meta",children:[r.jsx("span",{className:"metaLabel",children:"Last updated:"}),r.jsx("span",{className:"metaValue",children:c})]})]})})};ve.section`
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
    `;const qf={Wrapper:ve.section`
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
    `},Xf=()=>{const[s,c]=he.useState(!1),l=()=>c(u=>!u);return r.jsxs(qf.Wrapper,{className:`topicCard ${s?"open":""}`,children:[r.jsxs("button",{type:"button",className:"topicHeader",onClick:l,"aria-expanded":s,children:[r.jsx("span",{className:"chev",children:s?r.jsx(Ge,{}):r.jsx(Qe,{})}),r.jsx("span",{className:"icon",children:r.jsx(rp,{})}),r.jsx("span",{className:"title",children:"Introduction"}),r.jsx("span",{className:"meta",children:s?"Collapse":"Expand"})]}),r.jsxs("div",{className:`topicBody ${s?"open":""}`,children:[r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"What is HTML"}),r.jsx("p",{className:"p",children:"HTML is the structure of a web page. It tells the browser what the content is and what it means: headings, paragraphs, lists, links, images, forms, and sections. HTML does not handle the final look and feel. CSS handles styling and JavaScript handles behavior."})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"How the web works"}),r.jsx("p",{className:"p",children:"When you open a website, your browser sends a request to a server. The server replies with files like HTML, CSS, and JavaScript. The browser downloads them, parses them, and renders the page."}),r.jsxs("div",{className:"miniGrid",children:[r.jsxs("div",{className:"mini",children:[r.jsx("span",{className:"miniIcon",children:r.jsx(Lu,{})}),r.jsxs("div",{className:"miniText",children:[r.jsx("div",{className:"miniTitle",children:"Client"}),r.jsx("div",{className:"miniSub",children:"Browser"})]})]}),r.jsxs("div",{className:"mini",children:[r.jsx("span",{className:"miniIcon",children:r.jsx($f,{})}),r.jsxs("div",{className:"miniText",children:[r.jsx("div",{className:"miniTitle",children:"Request"}),r.jsx("div",{className:"miniSub",children:"HTTP"})]})]}),r.jsxs("div",{className:"mini",children:[r.jsx("span",{className:"miniIcon",children:r.jsx(Lu,{})}),r.jsxs("div",{className:"miniText",children:[r.jsx("div",{className:"miniTitle",children:"Server"}),r.jsx("div",{className:"miniSub",children:"Response"})]})]})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"Client server model"}),r.jsx("p",{className:"p",children:"The browser is the client. It asks for resources. The server stores and returns them. In real apps, servers may also run logic, talk to databases, and generate dynamic HTML."})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"HTTP basics"}),r.jsx("p",{className:"p",children:"HTTP is the protocol used for web communication. Common methods are GET (fetch data) and POST (send data). Status codes like 200 mean success, 404 means not found, and 500 means server error."}),r.jsxs("ul",{className:"bullets",children:[r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),"GET is used to read"]}),r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),"POST is used to send"]}),r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),"Status codes tell what happened"]})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"Browser parsing pipeline"}),r.jsx("p",{className:"p",children:"The browser reads HTML and builds the DOM (Document Object Model). It reads CSS and builds the CSSOM. Then it combines them to compute layout and paint pixels on the screen."})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"Rendering flow overview"}),r.jsx("p",{className:"p",children:"The common flow is: parse HTML into DOM, parse CSS into CSSOM, build render tree, layout, paint, then composite. JavaScript can update the DOM and trigger re-layout or repaint depending on what changed."}),r.jsxs("div",{className:"flow",children:[r.jsxs("div",{className:"flowItem",children:[r.jsx("span",{className:"flowIcon",children:r.jsx(Lf,{})}),"DOM"]}),r.jsx("div",{className:"arrow",children:"→"}),r.jsxs("div",{className:"flowItem",children:[r.jsx("span",{className:"flowIcon",children:r.jsx(kf,{})}),"Layout"]}),r.jsx("div",{className:"arrow",children:"→"}),r.jsx("div",{className:"flowItem",children:"Paint"}),r.jsx("div",{className:"arrow",children:"→"}),r.jsx("div",{className:"flowItem",children:"Composite"})]})]})]})]})},Jf={Wrapper:ve.section`
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
    `},Zf=()=>{const[s,c]=he.useState(!1);return r.jsxs(Jf.Wrapper,{className:`topicCard ${s?"open":""}`,children:[r.jsxs("button",{type:"button",className:"topicHeader",onClick:()=>c(!s),"aria-expanded":s,children:[r.jsx("span",{className:"chev",children:s?r.jsx(Ge,{}):r.jsx(Qe,{})}),r.jsx("span",{className:"icon",children:r.jsx(_f,{})}),r.jsx("span",{className:"title",children:"Basic Document Structure"}),r.jsx("span",{className:"meta",children:s?"Collapse":"Expand"})]}),r.jsxs("div",{className:`topicBody ${s?"open":""}`,children:[r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"Doctype"}),r.jsx("p",{className:"p",children:"The doctype tells the browser which version of HTML is being used. In modern HTML, we use a simple declaration:"}),r.jsx("pre",{className:"code",children:"<!DOCTYPE html>"}),r.jsx("p",{className:"p",children:"This ensures the browser renders the page in standards mode instead of compatibility mode."})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"html element"}),r.jsxs("p",{className:"p",children:["The ",r.jsx("strong",{children:"html"})," element is the root element of every HTML document. All other elements must be inside it."]}),r.jsx("pre",{className:"code",children:`<html lang="en">
</html>`})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"head and body"}),r.jsxs("p",{className:"p",children:["The ",r.jsx("strong",{children:"head"})," contains metadata such as title, meta tags, styles, and scripts. It does not display visible content."]}),r.jsxs("p",{className:"p",children:["The ",r.jsx("strong",{children:"body"})," contains all visible content such as headings, paragraphs, images, forms, and more."]}),r.jsx("pre",{className:"code",children:`<head>
  <title>My Page</title>
</head>

<body>
  <h1>Hello World</h1>
</body>`})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"lang attribute"}),r.jsxs("p",{className:"p",children:["The ",r.jsx("strong",{children:"lang"})," attribute defines the language of the document. It helps screen readers and search engines understand the content."]}),r.jsx("pre",{className:"code",children:'<html lang="en">'})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"dir attribute"}),r.jsxs("p",{className:"p",children:["The ",r.jsx("strong",{children:"dir"})," attribute defines text direction. Common values:"]}),r.jsxs("ul",{className:"bullets",children:[r.jsxs("li",{children:[r.jsx("span",{className:"dot"})," ltr - left to right"]}),r.jsxs("li",{children:[r.jsx("span",{className:"dot"})," rtl - right to left"]})]}),r.jsx("pre",{className:"code",children:'<html dir="ltr">'})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"Character encoding"}),r.jsx("p",{className:"p",children:"Character encoding tells the browser how to interpret text characters. UTF-8 is the standard encoding and supports almost all characters."}),r.jsx("pre",{className:"code",children:'<meta charset="UTF-8">'})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"Viewport meta"}),r.jsx("p",{className:"p",children:"The viewport meta tag makes the website responsive on mobile devices by controlling layout scaling."}),r.jsx("pre",{className:"code",children:'<meta name="viewport" content="width=device-width, initial-scale=1.0">'})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"Favicon"}),r.jsx("p",{className:"p",children:"A favicon is the small icon shown in the browser tab. It is added using the link element inside the head."}),r.jsx("pre",{className:"code",children:'<link rel="icon" href="/favicon.ico">'})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"Title element"}),r.jsx("p",{className:"p",children:"The title element defines the text shown in the browser tab and is important for SEO."}),r.jsx("pre",{className:"code",children:"<title>My Website</title>"})]})]})]})},ex={Wrapper:ve.section`
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
    `},tx=()=>{const[s,c]=he.useState(!1),l=()=>c(Z=>!Z),u=async Z=>{try{await navigator.clipboard.writeText(Z)}catch{}},m="<h1>Hello</h1>",g='<a href="https://example.com" target="_blank" rel="noopener noreferrer">Visit</a>',w='<input type="checkbox" checked />',E='<div id="card" class="box" data-user-id="42" title="Profile"></div>',C="<!-- This is a comment -->",$='<img src="photo.jpg" alt="A photo" />',H=`<br />
<hr />
<meta charset="utf-8" />`,D=`<input>
<img>
<br>
<meta charset="utf-8">`,Q=`<div></div>
<span></span>
<p></p>
<button></button>`;return r.jsxs(ex.Wrapper,{className:`topicCard ${s?"open":""}`,children:[r.jsxs("button",{type:"button",className:"topicHeader",onClick:l,"aria-expanded":s,children:[r.jsx("span",{className:"chev",children:s?r.jsx(Ge,{}):r.jsx(Qe,{})}),r.jsx("span",{className:"icon",children:r.jsx(_t,{})}),r.jsx("span",{className:"title",children:"HTML Syntax Rules"}),r.jsx("span",{className:"meta",children:s?"Collapse":"Expand"})]}),r.jsxs("div",{className:`topicBody ${s?"open":""}`,children:[r.jsxs("div",{className:"section",children:[r.jsxs("h3",{className:"h3",children:[r.jsx("span",{className:"h3Icon",children:r.jsx(Xa,{})}),"Tags"]}),r.jsxs("p",{className:"p",children:["A ",r.jsx("span",{className:"mono",children:"tag"})," is the markup inside angle brackets. Most elements use an opening tag and a closing tag."]}),r.jsxs("div",{className:"codeCard",children:[r.jsxs("div",{className:"codeTop",children:[r.jsx("div",{className:"codeTitle",children:"Example"}),r.jsx("button",{type:"button",className:"copyBtn",onClick:()=>u(m),title:"Copy","aria-label":"Copy code",children:r.jsx(Ft,{})})]}),r.jsx("pre",{className:"code",children:r.jsx("code",{children:m})}),r.jsxs("div",{className:"note",children:["Opening tag:"," ",r.jsx("span",{className:"mono",children:"<h1>"})," and closing tag: ",r.jsx("span",{className:"mono",children:"</h1>"})]})]})]}),r.jsxs("div",{className:"section",children:[r.jsxs("h3",{className:"h3",children:[r.jsx("span",{className:"h3Icon",children:r.jsx(il,{})}),"Elements"]}),r.jsxs("p",{className:"p",children:["An ",r.jsx("span",{className:"mono",children:"element"})," is the complete thing: the opening tag, the content, and the closing tag. Some elements are empty (they have no content and no closing tag). Those are called void elements (covered below)."]}),r.jsxs("div",{className:"miniGrid",children:[r.jsxs("div",{className:"mini",children:[r.jsx("div",{className:"miniTitle",children:"Element"}),r.jsx("div",{className:"miniSub",children:"Tag + content + closing tag"})]}),r.jsxs("div",{className:"mini",children:[r.jsx("div",{className:"miniTitle",children:"Tag"}),r.jsx("div",{className:"miniSub",children:"Only the brackets part"})]}),r.jsxs("div",{className:"mini",children:[r.jsx("div",{className:"miniTitle",children:"Void element"}),r.jsx("div",{className:"miniSub",children:"No closing tag"})]})]})]}),r.jsxs("div",{className:"section",children:[r.jsxs("h3",{className:"h3",children:[r.jsx("span",{className:"h3Icon",children:r.jsx(co,{})}),"Attributes"]}),r.jsxs("p",{className:"p",children:["Attributes add extra information to an element. They live inside the opening tag. Most attributes follow the format ",r.jsx("span",{className:"mono",children:'name="value"'}),"."]}),r.jsxs("div",{className:"codeCard",children:[r.jsxs("div",{className:"codeTop",children:[r.jsx("div",{className:"codeTitle",children:"Example"}),r.jsx("button",{type:"button",className:"copyBtn",onClick:()=>u(g),title:"Copy","aria-label":"Copy code",children:r.jsx(Ft,{})})]}),r.jsx("pre",{className:"code",children:r.jsx("code",{children:g})}),r.jsxs("div",{className:"note",children:[r.jsx("span",{className:"mono",children:"href"}),","," ",r.jsx("span",{className:"mono",children:"target"}),","," ",r.jsx("span",{className:"mono",children:"rel"})," are attributes."]})]})]}),r.jsxs("div",{className:"section",children:[r.jsxs("h3",{className:"h3",children:[r.jsx("span",{className:"h3Icon",children:r.jsx(Tf,{})}),"Boolean attributes"]}),r.jsx("p",{className:"p",children:'Boolean attributes are either "present" or "absent". If present, they mean true. You usually do not write a value.'}),r.jsxs("div",{className:"codeCard",children:[r.jsxs("div",{className:"codeTop",children:[r.jsx("div",{className:"codeTitle",children:"Example"}),r.jsx("button",{type:"button",className:"copyBtn",onClick:()=>u(w),title:"Copy","aria-label":"Copy code",children:r.jsx(Ft,{})})]}),r.jsx("pre",{className:"code",children:r.jsx("code",{children:w})}),r.jsxs("div",{className:"note",children:[r.jsx("span",{className:"mono",children:"checked"}),","," ",r.jsx("span",{className:"mono",children:"disabled"}),","," ",r.jsx("span",{className:"mono",children:"required"}),","," ",r.jsx("span",{className:"mono",children:"readonly"})," are common boolean attributes."]})]})]}),r.jsxs("div",{className:"section",children:[r.jsxs("h3",{className:"h3",children:[r.jsx("span",{className:"h3Icon",children:r.jsx(rp,{})}),"Global attributes"]}),r.jsx("p",{className:"p",children:"Global attributes are attributes that work on almost all HTML elements. They are widely used for styling, identification, accessibility, and custom behavior."}),r.jsxs("ul",{className:"bullets",children:[r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),r.jsx("span",{className:"mono",children:"id"})," - unique identifier"]}),r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),r.jsx("span",{className:"mono",children:"class"})," - reusable group name"]}),r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),r.jsx("span",{className:"mono",children:"title"})," - tooltip text"]}),r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),r.jsx("span",{className:"mono",children:"style"})," - inline styles (use rarely)"]}),r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),r.jsx("span",{className:"mono",children:"hidden"})," - hides the element"]}),r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),r.jsx("span",{className:"mono",children:"tabindex"})," - keyboard navigation"]}),r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),r.jsx("span",{className:"mono",children:"role"})," and"," ",r.jsx("span",{className:"mono",children:"aria-*"})," - accessibility"]})]}),r.jsxs("div",{className:"codeCard",children:[r.jsxs("div",{className:"codeTop",children:[r.jsx("div",{className:"codeTitle",children:"Example"}),r.jsx("button",{type:"button",className:"copyBtn",onClick:()=>u(E),title:"Copy","aria-label":"Copy code",children:r.jsx(Ft,{})})]}),r.jsx("pre",{className:"code",children:r.jsx("code",{children:E})})]})]}),r.jsxs("div",{className:"section",children:[r.jsxs("h3",{className:"h3",children:[r.jsx("span",{className:"h3Icon",children:r.jsx(If,{})}),"Data attributes"]}),r.jsxs("p",{className:"p",children:["Data attributes store custom data on elements. They start with ",r.jsx("span",{className:"mono",children:"data-"}),". They are useful when you want to attach extra information to a DOM element without inventing new attributes."]}),r.jsxs("ul",{className:"bullets",children:[r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),"Example:"," ",r.jsx("span",{className:"mono",children:'data-user-id="42"'})]}),r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),"In JavaScript you read them using"," ",r.jsx("span",{className:"mono",children:"element.dataset"})]})]})]}),r.jsxs("div",{className:"section",children:[r.jsxs("h3",{className:"h3",children:[r.jsx("span",{className:"h3Icon",children:r.jsx(sp,{})}),"Comments"]}),r.jsx("p",{className:"p",children:"Comments are ignored by the browser. They are useful for notes, but avoid leaving sensitive information or large blocks of commented code in production."}),r.jsxs("div",{className:"codeCard",children:[r.jsxs("div",{className:"codeTop",children:[r.jsx("div",{className:"codeTitle",children:"Example"}),r.jsx("button",{type:"button",className:"copyBtn",onClick:()=>u(C),title:"Copy","aria-label":"Copy code",children:r.jsx(Ft,{})})]}),r.jsx("pre",{className:"code",children:r.jsx("code",{children:C})})]})]}),r.jsxs("div",{className:"section",children:[r.jsxs("h3",{className:"h3",children:[r.jsx("span",{className:"h3Icon",children:r.jsx(co,{})}),"Case sensitivity"]}),r.jsxs("p",{className:"p",children:["HTML tags and attribute names are generally"," ",r.jsx("span",{className:"mono",children:"case-insensitive"}),", but the common convention is to write them in lowercase. File paths in URLs can be case-sensitive depending on your server, so keep filenames consistent."]}),r.jsxs("div",{className:"warn",children:[r.jsx("span",{className:"warnIcon",children:r.jsx(As,{})}),r.jsx("div",{className:"warnText",children:"Use lowercase for tags and attributes. Keep file paths consistent in case."})]})]}),r.jsxs("div",{className:"section",children:[r.jsxs("h3",{className:"h3",children:[r.jsx("span",{className:"h3Icon",children:r.jsx(Bf,{})}),"Self closing tags myth"]}),r.jsxs("p",{className:"p",children:["In HTML, many people write"," ",r.jsx("span",{className:"mono",children:"<div />"}),'. This is not valid for normal elements. Only specific elements are "void" (like ',r.jsx("span",{className:"mono",children:"img"}),","," ",r.jsx("span",{className:"mono",children:"input"}),","," ",r.jsx("span",{className:"mono",children:"br"}),")."]}),r.jsxs("div",{className:"codeCard",children:[r.jsxs("div",{className:"codeTop",children:[r.jsx("div",{className:"codeTitle",children:"Correct examples"}),r.jsx("button",{type:"button",className:"copyBtn",onClick:()=>u(Q),title:"Copy","aria-label":"Copy code",children:r.jsx(Ft,{})})]}),r.jsx("pre",{className:"code",children:r.jsx("code",{children:Q})}),r.jsx("div",{className:"note",children:"Regular elements need both opening and closing tags."})]})]}),r.jsxs("div",{className:"section",children:[r.jsxs("h3",{className:"h3",children:[r.jsx("span",{className:"h3Icon",children:r.jsx(Xa,{})}),"Void elements"]}),r.jsxs("p",{className:"p",children:["Void elements do not have a closing tag in HTML. You can write them as ",r.jsx("span",{className:"mono",children:"<img>"})," ","or ",r.jsx("span",{className:"mono",children:"<img />"}),". Both are fine in HTML, but the important part is: you do not write a closing tag like"," ",r.jsx("span",{className:"mono",children:"</img>"}),"."]}),r.jsxs("div",{className:"codeCard",children:[r.jsxs("div",{className:"codeTop",children:[r.jsx("div",{className:"codeTitle",children:"Common void elements"}),r.jsx("button",{type:"button",className:"copyBtn",onClick:()=>u(D),title:"Copy","aria-label":"Copy code",children:r.jsx(Ft,{})})]}),r.jsx("pre",{className:"code",children:r.jsx("code",{children:D})})]}),r.jsxs("div",{className:"codeCard",children:[r.jsxs("div",{className:"codeTop",children:[r.jsx("div",{className:"codeTitle",children:"Void example"}),r.jsx("button",{type:"button",className:"copyBtn",onClick:()=>u($),title:"Copy","aria-label":"Copy code",children:r.jsx(Ft,{})})]}),r.jsx("pre",{className:"code",children:r.jsx("code",{children:$})})]}),r.jsxs("div",{className:"codeCard",children:[r.jsxs("div",{className:"codeTop",children:[r.jsx("div",{className:"codeTitle",children:"More void examples"}),r.jsx("button",{type:"button",className:"copyBtn",onClick:()=>u(H),title:"Copy","aria-label":"Copy code",children:r.jsx(Ft,{})})]}),r.jsx("pre",{className:"code",children:r.jsx("code",{children:H})})]}),r.jsxs("div",{className:"note",children:["Common void elements:"," ",r.jsx("span",{className:"mono",children:"area, base, br, col, embed, hr, img, input, link, meta, param, source, track, wbr"})]})]})]})]})},rx={Wrapper:ve.section`
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
    `},nx=()=>{const[s,c]=he.useState(!1),l=()=>c(u=>!u);return r.jsxs(rx.Wrapper,{className:`topicCard ${s?"open":""}`,children:[r.jsxs("button",{type:"button",className:"topicHeader",onClick:l,"aria-expanded":s,children:[r.jsx("span",{className:"chev",children:s?r.jsx(Ge,{}):r.jsx(Qe,{})}),r.jsx("span",{className:"icon",children:r.jsx(np,{})}),r.jsx("span",{className:"title",children:"Content Model"}),r.jsx("span",{className:"meta",children:s?"Collapse":"Expand"})]}),r.jsxs("div",{className:`topicBody ${s?"open":""}`,children:[r.jsxs("div",{className:"intro",children:[r.jsx("p",{className:"p",children:"The HTML content model is a simple way to understand where an element is allowed to live and what kind of content it can contain. In practice, it helps you avoid invalid nesting and helps you write HTML that is more predictable and accessible."}),r.jsxs("div",{className:"note",children:[r.jsx("span",{className:"noteIcon",children:r.jsx(wt,{})}),r.jsxs("div",{className:"noteText",children:['Modern HTML is not only "block vs inline". HTML has content categories like'," ",r.jsx("span",{className:"mono",children:"flow"}),",",r.jsx("span",{className:"mono",children:"phrasing"}),","," ",r.jsx("span",{className:"mono",children:"sectioning"}),", and"," ",r.jsx("span",{className:"mono",children:"interactive"}),". These categories explain nesting rules more accurately."]})]})]}),r.jsxs("div",{className:"section",children:[r.jsxs("div",{className:"secHead",children:[r.jsx("span",{className:"secIcon",children:r.jsx(Cf,{})}),r.jsx("h3",{className:"h3",children:"Block vs inline"})]}),r.jsx("p",{className:"p",children:"This is the classic beginner idea. A block element usually starts on a new line and takes full width by default. An inline element usually stays within a line of text and only takes the space it needs."}),r.jsxs("div",{className:"cards2",children:[r.jsxs("div",{className:"miniCard",children:[r.jsx("div",{className:"miniTitle",children:"Block examples"}),r.jsx("div",{className:"miniSub",children:"div, p, h1, ul, li, section, article"})]}),r.jsxs("div",{className:"miniCard",children:[r.jsx("div",{className:"miniTitle",children:"Inline examples"}),r.jsx("div",{className:"miniSub",children:"span, a, strong, em, code, img"})]})]}),r.jsxs("div",{className:"warn",children:[r.jsx("span",{className:"warnDot"}),r.jsx("div",{className:"warnText",children:"Block vs inline is useful, but it is not a complete rule set. For correct nesting rules, use the content categories below."})]})]}),r.jsxs("div",{className:"section",children:[r.jsxs("div",{className:"secHead",children:[r.jsx("span",{className:"secIcon",children:r.jsx(lo,{})}),r.jsx("h3",{className:"h3",children:"Flow content"})]}),r.jsxs("p",{className:"p",children:["Flow content is the broad category for most elements you normally place inside the"," ",r.jsx("span",{className:"mono",children:"body"}),". If you are building the structure of a page, you are mostly working with flow content."]}),r.jsxs("ul",{className:"bullets",children:[r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),"Includes paragraphs, headings, lists, sections, images, tables, forms, etc."]}),r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),"Most layout level elements are flow content."]})]})]}),r.jsxs("div",{className:"section",children:[r.jsxs("div",{className:"secHead",children:[r.jsx("span",{className:"secIcon",children:r.jsx(co,{})}),r.jsx("h3",{className:"h3",children:"Phrasing content"})]}),r.jsx("p",{className:"p",children:'Phrasing content is basically "text level" content. It is what you can put inside a paragraph without breaking its meaning. It usually flows inline with text.'}),r.jsxs("div",{className:"chips",children:[r.jsx("span",{className:"chip",children:"span"}),r.jsx("span",{className:"chip",children:"a"}),r.jsx("span",{className:"chip",children:"strong"}),r.jsx("span",{className:"chip",children:"em"}),r.jsx("span",{className:"chip",children:"code"}),r.jsx("span",{className:"chip",children:"img"}),r.jsx("span",{className:"chip",children:"br"}),r.jsx("span",{className:"chip",children:"small"})]}),r.jsxs("div",{className:"note small",children:[r.jsx("span",{className:"noteIcon",children:r.jsx(wt,{})}),r.jsxs("div",{className:"noteText",children:["A common mistake is placing a block element inside a"," ",r.jsx("span",{className:"mono",children:"p"}),". A paragraph can contain phrasing content, not flow content."]})]})]}),r.jsxs("div",{className:"section",children:[r.jsxs("div",{className:"secHead",children:[r.jsx("span",{className:"secIcon",children:r.jsx(Pf,{})}),r.jsx("h3",{className:"h3",children:"Sectioning content"})]}),r.jsx("p",{className:"p",children:"Sectioning content creates a new section in the document outline. It helps screen readers and search engines understand the structure of your page."}),r.jsxs("div",{className:"cards2",children:[r.jsxs("div",{className:"miniCard",children:[r.jsx("div",{className:"miniTitle",children:"Sectioning elements"}),r.jsx("div",{className:"miniSub",children:"section, article, nav, aside"})]}),r.jsxs("div",{className:"miniCard",children:[r.jsx("div",{className:"miniTitle",children:"Why it matters"}),r.jsx("div",{className:"miniSub",children:"Better structure, accessibility, and meaning"})]})]})]}),r.jsxs("div",{className:"section",children:[r.jsxs("div",{className:"secHead",children:[r.jsx("span",{className:"secIcon",children:r.jsx(il,{})}),r.jsx("h3",{className:"h3",children:"Heading content"})]}),r.jsxs("p",{className:"p",children:["Heading content includes"," ",r.jsx("span",{className:"mono",children:"h1"})," to"," ",r.jsx("span",{className:"mono",children:"h6"}),". Headings label sections and improve navigation for users and assistive technology."]}),r.jsxs("ul",{className:"bullets",children:[r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),"Use headings in order. Do not jump levels randomly."]}),r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),"Prefer one main page title. Other headings represent sub-sections."]})]})]}),r.jsxs("div",{className:"section",children:[r.jsxs("div",{className:"secHead",children:[r.jsx("span",{className:"secIcon",children:r.jsx(_s,{})}),r.jsx("h3",{className:"h3",children:"Embedded content"})]}),r.jsx("p",{className:"p",children:"Embedded content is content that brings external media or non-text resources into the document."}),r.jsxs("div",{className:"chips",children:[r.jsx("span",{className:"chip",children:"img"}),r.jsx("span",{className:"chip",children:"video"}),r.jsx("span",{className:"chip",children:"audio"}),r.jsx("span",{className:"chip",children:"iframe"}),r.jsx("span",{className:"chip",children:"canvas"}),r.jsx("span",{className:"chip",children:"svg"})]}),r.jsxs("div",{className:"note small",children:[r.jsx("span",{className:"noteIcon",children:r.jsx(wt,{})}),r.jsx("div",{className:"noteText",children:"Embedded content often has extra accessibility requirements, like alt text for images or captions for video."})]})]}),r.jsxs("div",{className:"section",children:[r.jsxs("div",{className:"secHead",children:[r.jsx("span",{className:"secIcon",children:r.jsx(Df,{})}),r.jsx("h3",{className:"h3",children:"Interactive content"})]}),r.jsx("p",{className:"p",children:"Interactive content includes elements that the user can interact with. They usually accept focus, clicks, or keyboard actions."}),r.jsxs("div",{className:"cards2",children:[r.jsxs("div",{className:"miniCard",children:[r.jsx("div",{className:"miniTitle",children:"Examples"}),r.jsx("div",{className:"miniSub",children:"button, a (with href), input, select, textarea, details, summary"})]}),r.jsxs("div",{className:"miniCard",children:[r.jsx("div",{className:"miniTitle",children:"Rule of thumb"}),r.jsx("div",{className:"miniSub",children:"Do not nest interactive elements inside each other"})]})]}),r.jsxs("div",{className:"warn",children:[r.jsx("span",{className:"warnDot"}),r.jsx("div",{className:"warnText",children:"Avoid nesting buttons inside links or links inside buttons. It creates confusing behavior for keyboard and screen reader users."})]})]}),r.jsxs("div",{className:"section",children:[r.jsxs("div",{className:"secHead",children:[r.jsx("span",{className:"secIcon",children:r.jsx(wt,{})}),r.jsx("h3",{className:"h3",children:"Metadata content"})]}),r.jsxs("p",{className:"p",children:["Metadata content is mainly used inside the"," ",r.jsx("span",{className:"mono",children:"head"}),". It provides information about the document rather than visible content."]}),r.jsxs("div",{className:"chips",children:[r.jsx("span",{className:"chip",children:"title"}),r.jsx("span",{className:"chip",children:"meta"}),r.jsx("span",{className:"chip",children:"link"}),r.jsx("span",{className:"chip",children:"style"}),r.jsx("span",{className:"chip",children:"script"}),r.jsx("span",{className:"chip",children:"base"})]}),r.jsxs("div",{className:"note small",children:[r.jsx("span",{className:"noteIcon",children:r.jsx(wt,{})}),r.jsx("div",{className:"noteText",children:"Metadata affects SEO, social previews, and how the page behaves on mobile devices."})]})]}),r.jsxs("div",{className:"section",children:[r.jsxs("div",{className:"secHead",children:[r.jsx("span",{className:"secIcon",children:r.jsx(lo,{})}),r.jsx("h3",{className:"h3",children:"Transparent content model"})]}),r.jsx("p",{className:"p",children:'"Transparent" means the element does not define a fixed content category by itself. Instead, it allows the same content that its parent allows.'}),r.jsxs("div",{className:"cards2",children:[r.jsxs("div",{className:"miniCard",children:[r.jsx("div",{className:"miniTitle",children:"Common example"}),r.jsxs("div",{className:"miniSub",children:[r.jsx("span",{className:"mono",children:"a"})," can wrap text, images, and other phrasing content depending on context"]})]}),r.jsxs("div",{className:"miniCard",children:[r.jsx("div",{className:"miniTitle",children:"Why it exists"}),r.jsx("div",{className:"miniSub",children:"Flexible nesting without breaking semantics"})]})]}),r.jsxs("div",{className:"note small",children:[r.jsx("span",{className:"noteIcon",children:r.jsx(wt,{})}),r.jsx("div",{className:"noteText",children:'Transparent does not mean "anything is allowed". The surrounding context still matters.'})]})]}),r.jsxs("div",{className:"quick",children:[r.jsx("div",{className:"quickTitle",children:"Quick take"}),r.jsx("div",{className:"quickText",children:"Flow is most body content. Phrasing is text level. Sectioning creates meaningful sections. Embedded is media. Interactive is clickable/focusable. Metadata is head info. Transparent depends on context."})]})]})]})},ox={Wrapper:ve.section`
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
    `},sx=()=>{const[s,c]=he.useState(!1),l=()=>c(u=>!u);return r.jsxs(ox.Wrapper,{className:`topicCard ${s?"open":""}`,children:[r.jsxs("button",{type:"button",className:"topicHeader",onClick:l,"aria-expanded":s,children:[r.jsx("span",{className:"chev",children:s?r.jsx(Ge,{}):r.jsx(Qe,{})}),r.jsx("span",{className:"icon",children:r.jsx(co,{})}),r.jsx("span",{className:"title",children:"Headings"}),r.jsx("span",{className:"meta",children:s?"Collapse":"Expand"})]}),r.jsxs("div",{className:`topicBody ${s?"open":""}`,children:[r.jsxs("div",{className:"section",children:[r.jsxs("h3",{className:"h3",children:[r.jsx("span",{className:"h3Icon",children:r.jsx(il,{})}),"h1 to h6"]}),r.jsx("p",{className:"p",children:"HTML headings are used to label sections of content. You have six levels: h1 (most important) to h6 (least important). Headings should describe what the section is about, not just make text bigger. Styling is CSS, meaning is HTML."}),r.jsxs("div",{className:"callout good",children:[r.jsxs("div",{className:"calloutTop",children:[r.jsx("span",{className:"calloutIcon",children:r.jsx(Pt,{})}),r.jsx("div",{className:"calloutTitle",children:"Practical rule"})]}),r.jsx("div",{className:"calloutText",children:"Use one clear h1 for the main page title, then use h2 for major sections, h3 for sub-sections, and so on. Do not skip levels just for looks."})]}),r.jsxs("div",{className:"chips",children:[r.jsx("span",{className:"chip",children:"h1: page title"}),r.jsx("span",{className:"chip",children:"h2: section"}),r.jsx("span",{className:"chip",children:"h3: sub-section"}),r.jsx("span",{className:"chip",children:"h4 to h6: deeper nesting"})]}),r.jsxs("div",{className:"example",children:[r.jsx("div",{className:"exampleTitle",children:"Example structure"}),r.jsx("pre",{className:"code",children:`h1: HTML Core Notes
  h2: Text Content
    h3: Headings
    h3: Paragraphs
  h2: Forms
    h3: Inputs
    h3: Validation`})]})]}),r.jsxs("div",{className:"section",children:[r.jsxs("h3",{className:"h3",children:[r.jsx("span",{className:"h3Icon",children:r.jsx(lo,{})}),"Document outline theory"]}),r.jsx("p",{className:"p",children:'People often say "headings create the page outline." The idea is: headings communicate a hierarchy of sections. This helps readers scan the page, and helps assistive technologies understand structure.'}),r.jsx("p",{className:"p",children:"In practice, different browsers and tools have handled outlining differently over time. The safe approach is to treat headings as a clear, human-friendly hierarchy: h1 for the page, then h2, then h3, and so on. If the hierarchy feels logical to a human, it usually works well for accessibility too."}),r.jsxs("div",{className:"callout warn",children:[r.jsxs("div",{className:"calloutTop",children:[r.jsx("span",{className:"calloutIcon",children:r.jsx(As,{})}),r.jsx("div",{className:"calloutTitle",children:"Common mistake"})]}),r.jsx("div",{className:"calloutText",children:"Using headings only for styling. For styling, use a class and CSS. For structure, use the correct heading level."})]})]}),r.jsxs("div",{className:"section",children:[r.jsxs("h3",{className:"h3",children:[r.jsx("span",{className:"h3Icon",children:r.jsx(sl,{})}),"Accessibility considerations"]}),r.jsx("p",{className:"p",children:"Many screen reader users navigate by headings. They can jump from one heading to the next like a table of contents. Clean heading structure improves navigation, understanding, and speed."}),r.jsxs("ul",{className:"bullets",children:[r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),'Keep heading text meaningful, not vague like "Section"']}),r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),"Do not skip levels (h2 straight to h4) unless the structure truly demands it"]}),r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),"Do not use headings for non-heading UI like buttons or labels"]}),r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),"Use headings to break long pages into scannable parts"]})]}),r.jsxs("div",{className:"quickGrid",children:[r.jsxs("div",{className:"quickCard",children:[r.jsx("div",{className:"quickTitle",children:"Good"}),r.jsx("div",{className:"quickText",children:"h1 Profile, h2 About, h2 Projects, h3 Featured"})]}),r.jsxs("div",{className:"quickCard",children:[r.jsx("div",{className:"quickTitle",children:"Bad"}),r.jsx("div",{className:"quickText",children:"Multiple h1 everywhere, random jumps for styling"})]})]})]}),r.jsxs("div",{className:"section",children:[r.jsxs("h3",{className:"h3",children:[r.jsx("span",{className:"h3Icon",children:r.jsx(lo,{})}),"Transparent content model"]}),r.jsx("p",{className:"p",children:'Some HTML elements are "transparent." That means the element itself does not define a strict content type. Instead, it allows whatever content would be allowed if the element was not there.'}),r.jsx("p",{className:"p",children:"Think of it like a wrapper. For example, the anchor tag a often behaves like this. If you wrap text, it behaves like text. If you wrap a block of content, it behaves like that block, as long as it is valid to do so."}),r.jsxs("div",{className:"callout good",children:[r.jsxs("div",{className:"calloutTop",children:[r.jsx("span",{className:"calloutIcon",children:r.jsx(Pt,{})}),r.jsx("div",{className:"calloutTitle",children:"Why it matters"})]}),r.jsx("div",{className:"calloutText",children:"It helps you build clean clickable regions (like cards) without breaking HTML rules. Still, keep it accessible and avoid wrapping interactive elements inside other interactive elements."})]}),r.jsxs("ul",{className:"bullets",children:[r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),"Transparent elements behave like their children"]}),r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),"Always keep nesting valid (no button inside a)"]}),r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),"Prefer clear semantics over tricky wrappers"]})]})]})]})]})},ix={Wrapper:ve.section`
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
    `},ax=()=>{const[s,c]=he.useState(!1),[l,u]=he.useState(""),m=he.useMemo(()=>[{key:"p",tag:"p",title:"Paragraph",why:"Use for normal paragraphs of text. A paragraph is a block of content.",example:"<p>This is a paragraph. It groups a chunk of related text.</p>"},{key:"br",tag:"br",title:"Line break",why:"Use for a line break inside the same paragraph (poems, addresses). Do not use it to create spacing.",example:"<p>Line one<br />Line two<br />Line three</p>"},{key:"hr",tag:"hr",title:"Thematic break",why:"Use to separate sections or topics. It represents a change in theme, not just a line.",example:`<p>Topic A content...</p>
<hr />
<p>Topic B content...</p>`},{key:"pre",tag:"pre",title:"Preformatted text",why:"Preserves spaces and new lines. Useful for code blocks, ASCII diagrams, formatted text.",example:`<pre>
  Name: Ash
  Role: Developer
  Notes: Keep spacing
</pre>`},{key:"blockquote",tag:"blockquote",title:"Block quote",why:"Use for a longer quotation taken from another source.",example:`<blockquote cite="https://example.com">
  <p>Long quote goes here...</p>
</blockquote>`},{key:"q",tag:"q",title:"Inline quote",why:"Use for short inline quotations. Browsers usually add quotation marks automatically.",example:"<p>He said <q>HTML is structure</q> and moved on.</p>"},{key:"cite",tag:"cite",title:"Citation",why:"Use to reference the title of a work (book, movie, article, paper). Not for the author name.",example:"<p>My favorite web doc is <cite>MDN Web Docs</cite>.</p>"},{key:"abbr",tag:"abbr",title:"Abbreviation",why:"Use for abbreviations and acronyms. Add a title attribute for the full form.",example:`<p><abbr title="HyperText Markup Language">HTML</abbr> is the web's structure.</p>`},{key:"dfn",tag:"dfn",title:"Defining instance",why:"Use when you define a term for the first time in a document or section.",example:"<p><dfn>DOM</dfn> is the Document Object Model.</p>"},{key:"time",tag:"time",title:"Time / date",why:"Use for dates, times, and durations. Add datetime for machine readable value (SEO, parsing).",example:'<p>Last updated: <time datetime="2026-02-19">February 19, 2026</time></p>'},{key:"mark",tag:"mark",title:"Highlight",why:"Use to highlight text that is relevant in the current context (search results, important part).",example:"<p>Remember: <mark>do not use tables for layout</mark>.</p>"},{key:"small",tag:"small",title:"Small print",why:"Use for disclaimers, legal text, side notes. Not for styling. It has meaning.",example:"<p><small>Note: This is a demo project.</small></p>"},{key:"sub",tag:"sub",title:"Subscript",why:"Use for chemical formulas, math subscripts.",example:"<p>Water is H<sub>2</sub>O.</p>"},{key:"sup",tag:"sup",title:"Superscript",why:"Use for exponents, footnote markers.",example:"<p>2<sup>10</sup> equals 1024.</p>"},{key:"strong",tag:"strong",title:"Strong importance",why:"Use to show strong importance, seriousness, or urgency. Not just bold styling.",example:"<p><strong>Warning:</strong> Do not share your password.</p>"},{key:"em",tag:"em",title:"Emphasis",why:"Use to emphasize a word in a sentence (changes meaning). Screen readers also announce emphasis.",example:"<p>I said <em>today</em>, not tomorrow.</p>"},{key:"b",tag:"b",title:"Stylistic bold",why:"Use when you want bold without extra importance. Example: keywords in a summary.",example:"<p>Keywords: <b>HTML</b>, <b>CSS</b>, <b>JS</b></p>"},{key:"i",tag:"i",title:"Stylistic italic",why:"Use for alternate voice, technical terms, or idioms without emphasis meaning.",example:"<p>The term <i>viewport</i> matters on mobile.</p>"},{key:"u",tag:"u",title:"Unarticulated annotation",why:"Rare. Traditionally used for misspellings or annotations. Avoid using for links style.",example:"<p>This word is <u>incorect</u> (misspelled).</p>"},{key:"s",tag:"s",title:"No longer accurate",why:"Use for content that is no longer accurate or relevant (like old pricing).",example:"<p><s>₹999</s> ₹699</p>"},{key:"code",tag:"code",title:"Inline code",why:"Use for short code fragments inline.",example:"<p>Use <code>&lt;main&gt;</code> for the main content.</p>"},{key:"kbd",tag:"kbd",title:"Keyboard input",why:"Use to represent keyboard keys or user input.",example:"<p>Press <kbd>Ctrl</kbd> + <kbd>S</kbd> to save.</p>"},{key:"samp",tag:"samp",title:"Sample output",why:"Use to represent output from a program or system.",example:"<p><samp>Build completed successfully.</samp></p>"},{key:"var",tag:"var",title:"Variable",why:"Use for variables in math or programming context.",example:"<p>Let <var>x</var> be the number of users.</p>"},{key:"span",tag:"span",title:"Generic inline",why:"Use when no semantic tag fits. It is just a hook for styling or JS.",example:'<p>Hello <span class="name">Ash</span></p>'}],[]),g=async(w,E)=>{try{await navigator.clipboard.writeText(w),u(E),window.setTimeout(()=>u(""),900)}catch{}};return r.jsxs(ix.Wrapper,{className:`topicCard ${s?"open":""}`,children:[r.jsxs("button",{type:"button",className:"topicHeader",onClick:()=>c(w=>!w),"aria-expanded":s,children:[r.jsx("span",{className:"chev",children:s?r.jsx(Ge,{}):r.jsx(Qe,{})}),r.jsx("span",{className:"icon",children:r.jsx(co,{})}),r.jsx("span",{className:"title",children:"Paragraph and Text Semantics"}),r.jsx("span",{className:"meta",children:s?"Collapse":"Expand"})]}),r.jsxs("div",{className:`topicBody ${s?"open":""}`,children:[r.jsxs("div",{className:"intro",children:[r.jsxs("div",{className:"introTop",children:[r.jsx("div",{className:"introIcon",children:r.jsx(Sf,{})}),r.jsxs("div",{className:"introText",children:[r.jsx("div",{className:"introTitle",children:"What this covers"}),r.jsx("div",{className:"introSub",children:"These tags are used to write text properly in HTML. Some tags add meaning (semantics) and help screen readers, SEO, and maintainability."})]})]}),r.jsxs("div",{className:"note",children:[r.jsx("span",{className:"noteIcon",children:r.jsx(wt,{})}),r.jsxs("div",{className:"noteText",children:["Use semantic tags when possible. Use"," ",r.jsx("span",{className:"mono",children:"span"})," only when no semantic tag fits."]})]})]}),r.jsx("div",{className:"grid",children:m.map(w=>r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("div",{className:"tagChip",children:r.jsxs("span",{className:"mono",children:["<",w.tag,">"]})}),r.jsx("button",{type:"button",className:"copyBtn",onClick:()=>g(w.example,w.key),title:"Copy example","aria-label":"Copy example",children:l===w.key?r.jsx(Ef,{}):r.jsx(Ft,{})})]}),r.jsx("div",{className:"cardTitle",children:w.title}),r.jsx("div",{className:"cardWhy",children:w.why}),r.jsx("pre",{className:"code",children:r.jsx("code",{children:w.example})})]},w.key))}),r.jsxs("div",{className:"footerTip",children:["Tip: Use ",r.jsx("span",{className:"mono",children:"strong"})," and"," ",r.jsx("span",{className:"mono",children:"em"})," for meaning. Use"," ",r.jsx("span",{className:"mono",children:"b"})," and"," ",r.jsx("span",{className:"mono",children:"i"})," only for styling without meaning."]})]})]})},lx={Wrapper:ve.section`
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
    `},cx=()=>{const[s,c]=he.useState(!1);return r.jsxs(lx.Wrapper,{className:s?"open":"",children:[r.jsxs("button",{type:"button",className:"topicHeader",onClick:()=>c(l=>!l),"aria-expanded":s,children:[r.jsx("span",{className:"chev",children:s?r.jsx(Ge,{}):r.jsx(Qe,{})}),r.jsx("span",{className:"icon",children:r.jsx(Rf,{})}),r.jsx("span",{className:"title",children:"Lists"}),r.jsx("span",{className:"meta",children:"ul, ol, li, dl, attributes"})]}),r.jsxs("div",{className:`topicBody ${s?"open":""}`,children:[r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"What are Lists"}),r.jsx("p",{className:"p",children:"Lists are used to group related items together. They help structure content clearly and improve readability. HTML provides three main types of lists: unordered, ordered, and description lists."})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"Unordered List - ul"}),r.jsx("p",{className:"p",children:"An unordered list displays items with bullets. Order does not matter."}),r.jsx("div",{className:"codeBlock",children:`<ul>
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
</ol>`}),r.jsxs("ol",{type:"A",className:"demoList",children:[r.jsx("li",{children:"Item"}),r.jsx("li",{children:"Item"})]})]})]})]})]})},dx={Wrapper:ve.section`
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
    `},ux=()=>{const[s,c]=he.useState(!1);return r.jsxs(dx.Wrapper,{children:[r.jsxs("button",{type:"button",className:"topicHeader",onClick:()=>c(l=>!l),"aria-expanded":s,children:[r.jsx("span",{className:"chev",children:s?r.jsx(Ge,{}):r.jsx(Qe,{})}),r.jsx("span",{className:"icon",children:r.jsx(Mf,{})}),r.jsx("span",{className:"title",children:"Anchors and Links"}),r.jsx("span",{className:"meta",children:s?"Collapse":"Expand"})]}),r.jsxs("div",{className:`topicBody ${s?"open":""}`,children:[r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"a tag"}),r.jsx("p",{className:"p",children:"The anchor tag is used to create hyperlinks. It allows users to navigate from one page to another, to a section within the same page, or even to another website."}),r.jsx("pre",{className:"code",children:'<a href="https://example.com">Visit Website</a>'})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"href attribute"}),r.jsx("p",{className:"p",children:"The href attribute defines the destination of the link. It can be:"}),r.jsxs("ul",{className:"bullets",children:[r.jsx("li",{children:"Absolute URL: https://google.com"}),r.jsx("li",{children:"Relative URL: /about"}),r.jsx("li",{children:"Same page section: #contact"}),r.jsx("li",{children:"Email: mailto:example@email.com"})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"target attribute"}),r.jsx("p",{className:"p",children:"The target attribute specifies where to open the linked document."}),r.jsx("pre",{className:"code",children:`<a href="https://google.com" target="_blank">
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
</section>`})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"External link security"}),r.jsx("p",{className:"p",children:'When opening external links in a new tab using target="_blank", always use:'}),r.jsxs("ul",{className:"bullets",children:[r.jsx("li",{children:'rel="noopener"'}),r.jsx("li",{children:'rel="noreferrer"'})]}),r.jsxs("div",{className:"securityBox",children:[r.jsx(qa,{}),r.jsx("span",{children:"This prevents the new page from accessing your window object and protects against reverse tabnabbing."})]})]})]})]})},px={Wrapper:ve.section`
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
    `},hx=()=>{const[s,c]=he.useState(!1);return r.jsxs(px.Wrapper,{className:s?"open":"",children:[r.jsxs("button",{type:"button",className:"topicHeader",onClick:()=>c(l=>!l),"aria-expanded":s,children:[r.jsx("span",{className:"chev",children:s?r.jsx(Ge,{}):r.jsx(Qe,{})}),r.jsx("span",{className:"icon",children:r.jsx(Ff,{})}),r.jsx("span",{className:"title",children:"Navigation"}),r.jsx("span",{className:"meta",children:s?"Collapse":"Expand"})]}),r.jsxs("div",{className:`topicBody ${s?"open":""}`,children:[r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"nav element"}),r.jsx("p",{className:"p",children:"The nav element represents a section of the page that contains navigation links. It is used for major navigation blocks such as the main menu, footer links, or sidebar navigation."}),r.jsx("p",{className:"p",children:"Not every group of links should be wrapped in nav. Only important navigation areas that help users move across the site should use it."}),r.jsx("div",{className:"codeBlock",children:`<nav>
  <ul>
    <li><a href="/">Home</a></li>
    <li><a href="/about">About</a></li>
    <li><a href="/contact">Contact</a></li>
  </ul>
</nav>`}),r.jsxs("div",{className:"tip",children:[r.jsx(op,{}),"Use semantic nav instead of a generic div for better accessibility and SEO."]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"Breadcrumb structure"}),r.jsx("p",{className:"p",children:"A breadcrumb shows the user where they are inside the site hierarchy. It usually appears at the top of a page and helps users navigate back to parent sections."}),r.jsxs("div",{className:"breadcrumbExample",children:["Home ",r.jsx("span",{children:"›"})," Blog ",r.jsx("span",{children:"›"})," HTML Guide"]}),r.jsx("div",{className:"codeBlock",children:`<nav aria-label="Breadcrumb">
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
</nav>`}),r.jsxs("ul",{className:"bullets",children:[r.jsx("li",{children:"Wrap pagination inside nav"}),r.jsx("li",{children:"Use aria-label for clarity"}),r.jsx("li",{children:"Highlight active page"})]})]})]})]})},mx={Wrapper:ve.section`
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
    `},fx=()=>{const[s,c]=he.useState(!1);return r.jsxs(mx.Wrapper,{className:s?"open":"",children:[r.jsxs("button",{type:"button",className:"topicHeader",onClick:()=>c(l=>!l),"aria-expanded":s,children:[r.jsx("span",{className:"chev",children:s?r.jsx(Ge,{}):r.jsx(Qe,{})}),r.jsx("span",{className:"icon",children:r.jsx(_s,{})}),r.jsx("span",{className:"title",children:"Images"}),r.jsx("span",{className:"meta",children:s?"Collapse":"Expand"})]}),r.jsxs("div",{className:`topicBody ${s?"open":""}`,children:[r.jsxs("section",{className:"section",children:[r.jsx("h3",{className:"h3",children:"img"}),r.jsx("p",{className:"p",children:"The img element is used to display an image in HTML. It is a self closing element and must include the src attribute."}),r.jsx("div",{className:"code",children:'<img src="image.jpg" alt="A description" />'})]}),r.jsxs("section",{className:"section",children:[r.jsx("h3",{className:"h3",children:"alt"}),r.jsx("p",{className:"p",children:"The alt attribute provides alternative text for accessibility and screen readers. If the image fails to load, this text is shown instead."}),r.jsxs("ul",{className:"bullets",children:[r.jsxs("li",{children:[r.jsx(Pt,{}),"Always describe the image meaningfully"]}),r.jsxs("li",{children:[r.jsx(Pt,{}),"Use empty alt only for decorative images"]})]}),r.jsx("div",{className:"code",children:'<img src="profile.jpg" alt="Portrait of John Doe" />'})]}),r.jsxs("section",{className:"section",children:[r.jsx("h3",{className:"h3",children:"width and height"}),r.jsx("p",{className:"p",children:"Setting width and height helps the browser reserve space before the image loads. This prevents layout shifting."}),r.jsx("div",{className:"code",children:`<img 
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
</figure>`})]})]})]})},xx={Wrapper:ve.section`
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
    `},gx=()=>{const[s,c]=he.useState(!1),l=()=>c(u=>!u);return r.jsxs(xx.Wrapper,{className:`topicCard ${s?"open":""}`,children:[r.jsxs("button",{type:"button",className:"topicHeader",onClick:l,"aria-expanded":s,children:[r.jsx("span",{className:"chev",children:s?r.jsx(Ge,{}):r.jsx(Qe,{})}),r.jsx("span",{className:"icon",children:r.jsx(ws,{})}),r.jsx("span",{className:"title",children:"Embedded"}),r.jsx("span",{className:"meta",children:s?"Collapse":"Expand"})]}),r.jsxs("div",{className:`topicBody ${s?"open":""}`,children:[r.jsxs("div",{className:"section",children:[r.jsxs("h3",{className:"h3",children:[r.jsx("span",{className:"h3Icon",children:r.jsx(wt,{})}),'What does "embedded content" mean']}),r.jsxs("p",{className:"p",children:["Embedded content means showing something inside your page that comes from somewhere else or that is rendered by the browser as a separate embedded document. The most common example is an"," ",r.jsx("span",{className:"mono",children:"iframe"}),", which can show another webpage inside your webpage."]}),r.jsx("p",{className:"p",children:"Use embedded elements when you truly need to display external content like maps, videos, payment widgets, or third party tools. If you control the content, it is often better to build a native UI instead of embedding a full page."})]}),r.jsxs("div",{className:"section",children:[r.jsxs("h3",{className:"h3",children:[r.jsx("span",{className:"h3Icon",children:r.jsx(op,{})}),"iframe"]}),r.jsxs("p",{className:"p",children:[r.jsx("span",{className:"mono",children:"iframe"})," embeds another HTML page inside your current page. Think of it like a mini browser window inside your layout."]}),r.jsxs("div",{className:"tips",children:[r.jsxs("div",{className:"tip",children:[r.jsx("span",{className:"tipIcon",children:r.jsx(qa,{})}),r.jsxs("div",{className:"tipText",children:[r.jsx("div",{className:"tipTitle",children:"Security note"}),r.jsxs("div",{className:"tipSub",children:["If you embed a page you do not fully trust, use ",r.jsx("span",{className:"mono",children:"sandbox"})," to restrict it."]})]})]}),r.jsxs("div",{className:"tip",children:[r.jsx("span",{className:"tipIcon",children:r.jsx(Eu,{})}),r.jsxs("div",{className:"tipText",children:[r.jsx("div",{className:"tipTitle",children:"Privacy note"}),r.jsxs("div",{className:"tipSub",children:["Many embeds track users. Only embed trusted sources and prefer minimal permissions in"," ",r.jsx("span",{className:"mono",children:"allow"}),"."]})]})]})]}),r.jsxs("div",{className:"codeBlock",children:[r.jsxs("div",{className:"codeTop",children:[r.jsx("span",{className:"codeIcon",children:r.jsx(_t,{})}),r.jsx("div",{className:"codeTitle",children:"Basic iframe"})]}),r.jsx("pre",{className:"pre",children:`<iframe
  src="https://example.com"
  title="Example embed"
  width="600"
  height="400"
  loading="lazy"
></iframe>`}),r.jsxs("p",{className:"pNote",children:["Always add a meaningful"," ",r.jsx("span",{className:"mono",children:"title"})," so screen readers can describe what the embedded content is."]})]})]}),r.jsxs("div",{className:"section",children:[r.jsxs("h3",{className:"h3",children:[r.jsx("span",{className:"h3Icon",children:r.jsx(qa,{})}),"sandbox"]}),r.jsxs("p",{className:"p",children:[r.jsx("span",{className:"mono",children:"sandbox"})," is an iframe attribute that blocks powerful capabilities by default. It turns the embed into a safer, restricted environment. You can selectively allow specific capabilities."]}),r.jsxs("div",{className:"codeBlock",children:[r.jsxs("div",{className:"codeTop",children:[r.jsx("span",{className:"codeIcon",children:r.jsx(_t,{})}),r.jsx("div",{className:"codeTitle",children:"iframe with sandbox"})]}),r.jsx("pre",{className:"pre",children:`<iframe
  src="https://example.com"
  title="Sandboxed embed"
  sandbox
></iframe>`}),r.jsxs("p",{className:"pNote",children:["Just writing ",r.jsx("span",{className:"mono",children:"sandbox"})," ","without values applies strict restrictions."]})]}),r.jsxs("div",{className:"miniList",children:[r.jsx("div",{className:"miniTitle",children:"Common sandbox tokens"}),r.jsxs("ul",{className:"bullets",children:[r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),r.jsx("span",{className:"mono",children:"allow-scripts"}),": allow running JavaScript inside the iframe"]}),r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),r.jsx("span",{className:"mono",children:"allow-forms"}),": allow form submissions"]}),r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),r.jsx("span",{className:"mono",children:"allow-same-origin"}),": treat the iframe as same origin (be careful)"]}),r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),r.jsx("span",{className:"mono",children:"allow-popups"}),": allow opening new windows or tabs"]})]}),r.jsx("p",{className:"pNote",children:"Beginner rule: start strict, then add only what you absolutely need."})]}),r.jsxs("div",{className:"codeBlock",children:[r.jsxs("div",{className:"codeTop",children:[r.jsx("span",{className:"codeIcon",children:r.jsx(_t,{})}),r.jsx("div",{className:"codeTitle",children:"selective sandbox permissions"})]}),r.jsx("pre",{className:"pre",children:`<iframe
  src="https://example.com"
  title="Restricted embed"
  sandbox="allow-scripts allow-forms"
  loading="lazy"
></iframe>`})]})]}),r.jsxs("div",{className:"section",children:[r.jsxs("h3",{className:"h3",children:[r.jsx("span",{className:"h3Icon",children:r.jsx(Eu,{})}),"allow attribute"]}),r.jsxs("p",{className:"p",children:[r.jsx("span",{className:"mono",children:"allow"})," controls which browser features the iframe is allowed to use. This is often used for permissions like camera, microphone, fullscreen, autoplay, and more."]}),r.jsxs("div",{className:"codeBlock",children:[r.jsxs("div",{className:"codeTop",children:[r.jsx("span",{className:"codeIcon",children:r.jsx(_t,{})}),r.jsx("div",{className:"codeTitle",children:"iframe allow example"})]}),r.jsx("pre",{className:"pre",children:`<iframe
  src="https://example.com"
  title="Feature controlled embed"
  allow="fullscreen; clipboard-write"
  sandbox="allow-scripts"
></iframe>`}),r.jsx("p",{className:"pNote",children:"Keep it minimal. If you do not need a feature, do not allow it."})]})]}),r.jsxs("div",{className:"section",children:[r.jsxs("h3",{className:"h3",children:[r.jsx("span",{className:"h3Icon",children:r.jsx(ws,{})}),"embed"]}),r.jsxs("p",{className:"p",children:[r.jsx("span",{className:"mono",children:"embed"})," is used to embed non-HTML external resources like PDFs or media that the browser can render using built-in support or plugins. In modern web apps, it is less common than"," ",r.jsx("span",{className:"mono",children:"iframe"}),"."]}),r.jsxs("div",{className:"codeBlock",children:[r.jsxs("div",{className:"codeTop",children:[r.jsx("span",{className:"codeIcon",children:r.jsx(_t,{})}),r.jsx("div",{className:"codeTitle",children:"embed PDF example"})]}),r.jsx("pre",{className:"pre",children:`<embed
  src="/docs/guide.pdf"
  type="application/pdf"
  width="100%"
  height="500"
/>`})]}),r.jsx("p",{className:"pNote",children:"If you need more control and accessibility, consider linking the file and letting the user open it, or use an iframe with a safe viewer."})]}),r.jsxs("div",{className:"section",children:[r.jsxs("h3",{className:"h3",children:[r.jsx("span",{className:"h3Icon",children:r.jsx(ws,{})}),"object and param"]}),r.jsxs("p",{className:"p",children:[r.jsx("span",{className:"mono",children:"object"})," is a generic container to embed resources like PDFs, images, or other content types. It can also include fallback content if the browser cannot render the resource."]}),r.jsxs("p",{className:"p",children:[r.jsx("span",{className:"mono",children:"param"})," is used inside"," ",r.jsx("span",{className:"mono",children:"object"})," to pass extra configuration to the embedded resource. In modern HTML,",r.jsx("span",{className:"mono",children:"param"})," is rarely needed, but you should recognize it when you see it."]}),r.jsxs("div",{className:"codeBlock",children:[r.jsxs("div",{className:"codeTop",children:[r.jsx("span",{className:"codeIcon",children:r.jsx(_t,{})}),r.jsx("div",{className:"codeTitle",children:"object with fallback"})]}),r.jsx("pre",{className:"pre",children:`<object
  data="/docs/guide.pdf"
  type="application/pdf"
  width="100%"
  height="500"
>
  <p>
    Your browser cannot display this PDF.
    <a href="/docs/guide.pdf">Download the file</a>.
  </p>
</object>`})]}),r.jsxs("div",{className:"codeBlock",children:[r.jsxs("div",{className:"codeTop",children:[r.jsx("span",{className:"codeIcon",children:r.jsx(_t,{})}),r.jsx("div",{className:"codeTitle",children:"param example"})]}),r.jsx("pre",{className:"pre",children:`<object data="movie.swf" type="application/x-shockwave-flash" width="400" height="300">
  <param name="quality" value="high" />
  <p>Fallback content goes here</p>
</object>`}),r.jsxs("p",{className:"pNote",children:["The example above is mostly historical. Today you will rarely embed Flash, but you might still see"," ",r.jsx("span",{className:"mono",children:"object"})," and"," ",r.jsx("span",{className:"mono",children:"param"})," in old projects."]})]})]}),r.jsxs("div",{className:"section",children:[r.jsxs("h3",{className:"h3",children:[r.jsx("span",{className:"h3Icon",children:r.jsx(wt,{})}),"Quick beginner rules"]}),r.jsxs("ul",{className:"bullets",children:[r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),"Prefer ",r.jsx("span",{className:"mono",children:"iframe"})," for embedding webpages or widget-like content"]}),r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),"Use ",r.jsx("span",{className:"mono",children:"sandbox"})," for safety when embedding third party pages"]}),r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),"Keep ",r.jsx("span",{className:"mono",children:"allow"})," minimal"]}),r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),"Add a meaningful ",r.jsx("span",{className:"mono",children:"title"})," ","to iframes"]}),r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),"Use ",r.jsx("span",{className:"mono",children:"object"})," when you want fallback content support"]})]}),r.jsxs("div",{className:"noteBox",children:[r.jsx("span",{className:"noteIcon",children:r.jsx(ws,{})}),r.jsxs("div",{className:"noteText",children:[r.jsx("div",{className:"noteTitle",children:"Real world example"}),r.jsxs("div",{className:"noteSub",children:["Embedding a Google Map or a YouTube video usually uses"," ",r.jsx("span",{className:"mono",children:"iframe"})," with a few controlled permissions."]})]})]})]})]})]})},vx={Wrapper:ve.section`
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
    `},yx=()=>{const[s,c]=he.useState(!1),l=()=>c(u=>!u);return r.jsxs(vx.Wrapper,{className:`topicCard ${s?"open":""}`,children:[r.jsxs("button",{type:"button",className:"topicHeader",onClick:l,"aria-expanded":s,children:[r.jsx("span",{className:"chev",children:s?r.jsx(Ge,{}):r.jsx(Qe,{})}),r.jsx("span",{className:"icon",children:r.jsx(_s,{})}),r.jsx("span",{className:"title",children:"SVG integration"}),r.jsx("span",{className:"meta",children:s?"Collapse":"Expand"})]}),r.jsxs("div",{className:`topicBody ${s?"open":""}`,children:[r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"Inline SVG"}),r.jsx("p",{className:"p",children:"Inline SVG means you write the SVG markup directly in your JSX. The big advantage is that the SVG becomes part of the DOM. That means you can style it with CSS, change colors on hover, animate parts, and even control it with JavaScript."}),r.jsxs("div",{className:"note",children:[r.jsxs("div",{className:"noteTop",children:[r.jsx("span",{className:"noteIcon",children:r.jsx(_t,{})}),r.jsx("div",{className:"noteTitle",children:"Beginner tip"})]}),r.jsx("div",{className:"noteBody",children:"Inline SVG is perfect for icons, logos, small illustrations, and anything you want to recolor or animate with CSS."})]}),r.jsxs("div",{className:"example",children:[r.jsxs("div",{className:"exampleHead",children:[r.jsx("span",{className:"exampleIcon",children:r.jsx(_t,{})}),r.jsx("div",{className:"exampleTitle",children:"Inline SVG example"})]}),r.jsxs("div",{className:"inlineDemo",children:[r.jsx("div",{className:"svgBox",children:r.jsxs("svg",{width:"120",height:"120",viewBox:"0 0 120 120",role:"img","aria-label":"Simple badge icon",children:[r.jsx("circle",{cx:"60",cy:"60",r:"46",fill:"none",stroke:"currentColor",strokeWidth:"10"}),r.jsx("path",{d:"M40 62 L54 76 L82 48",fill:"none",stroke:"currentColor",strokeWidth:"10",strokeLinecap:"round",strokeLinejoin:"round"})]})}),r.jsxs("div",{className:"inlineText",children:[r.jsx("div",{className:"inlineTitle",children:"This SVG uses currentColor"}),r.jsx("div",{className:"inlineSub",children:"The SVG automatically picks the text color of its parent. So you can theme icons with simple CSS."})]})]})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"SVG vs img"}),r.jsx("p",{className:"p",children:"You can use SVG in two common ways: as inline markup or as an image file with an img tag. Both are valid. The best choice depends on whether you need control over the SVG parts."}),r.jsxs("div",{className:"compareGrid",children:[r.jsxs("div",{className:"compareCard",children:[r.jsxs("div",{className:"compareTop",children:[r.jsx("span",{className:"compareIcon",children:r.jsx(Pt,{})}),r.jsx("div",{className:"compareTitle",children:"Inline SVG"})]}),r.jsxs("ul",{className:"bullets",children:[r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),"You can style paths with CSS"]}),r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),"Easy hover states and animations"]}),r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),"Great for icons and UI graphics"]}),r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),"Supports accessibility labels directly"]})]})]}),r.jsxs("div",{className:"compareCard",children:[r.jsxs("div",{className:"compareTop",children:[r.jsx("span",{className:"compareIcon",children:r.jsx(_s,{})}),r.jsx("div",{className:"compareTitle",children:"img src SVG"})]}),r.jsxs("ul",{className:"bullets",children:[r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),"Simple to use and cacheable"]}),r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),"Best for large illustrations"]}),r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),"Limited styling of inside parts"]}),r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),"Accessible with alt text like images"]})]})]})]}),r.jsxs("div",{className:"note",children:[r.jsxs("div",{className:"noteTop",children:[r.jsx("span",{className:"noteIcon",children:r.jsx(sl,{})}),r.jsx("div",{className:"noteTitle",children:"Rule of thumb"})]}),r.jsx("div",{className:"noteBody",children:"Use inline SVG when you need to change colors, animate, or control parts. Use img when the SVG is basically a static picture."})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"Accessibility in SVG"}),r.jsx("p",{className:"p",children:"SVG can be accessible if you treat it like meaningful content. If the SVG is decorative, hide it from screen readers. If it communicates information, give it a proper text alternative."}),r.jsxs("div",{className:"a11yGrid",children:[r.jsxs("div",{className:"a11yCard",children:[r.jsx("div",{className:"a11yTitle",children:"Decorative SVG"}),r.jsx("div",{className:"a11ySub",children:"If the SVG is just for decoration, hide it."}),r.jsx("div",{className:"codeLine",children:r.jsx("span",{className:"mono",children:'aria-hidden="true"'})})]}),r.jsxs("div",{className:"a11yCard",children:[r.jsx("div",{className:"a11yTitle",children:"Meaningful SVG"}),r.jsx("div",{className:"a11ySub",children:"If it conveys meaning, label it."}),r.jsx("div",{className:"codeLine",children:r.jsx("span",{className:"mono",children:'role="img" + aria-label="..."'})})]})]}),r.jsxs("ul",{className:"bullets",children:[r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),"Use aria-hidden for purely decorative icons"]}),r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),'Use role="img" and aria-label for meaningful SVG']}),r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),"Avoid putting important text only inside SVG unless you provide an accessible label"]})]})]})]})]})},jx={Wrapper:ve.section`
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
    `},wx=()=>{const[s,c]=he.useState(!1),[l,u]=he.useState(!0),m=he.useMemo(()=>`<!-- HTML -->
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
<\/script>`,[]);return r.jsxs(jx.Wrapper,{className:`topicCard ${s?"open":""}`,children:[r.jsxs("button",{type:"button",className:"topicHeader",onClick:()=>c(g=>!g),"aria-expanded":s,children:[r.jsx("span",{className:"chev",children:s?r.jsx(Ge,{}):r.jsx(Qe,{})}),r.jsx("span",{className:"icon",children:r.jsx(zf,{})}),r.jsx("span",{className:"title",children:"Canvas"}),r.jsx("span",{className:"meta",children:s?"Collapse":"Expand"})]}),r.jsxs("div",{className:`topicBody ${s?"open":""}`,children:[r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"What is a canvas"}),r.jsxs("p",{className:"p",children:["The ",r.jsx("span",{className:"mono",children:"canvas"})," element is a drawing surface. It does not contain real HTML elements inside it. Instead, you draw pixels using JavaScript. This is useful for charts, games, animations, custom visual effects, and small interactive demos."]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"How it works"}),r.jsxs("ul",{className:"bullets",children:[r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),"Create a canvas with a fixed width and height"]}),r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),"Get a drawing context:",r.jsx("span",{className:"mono",children:'getContext("2d")'})]}),r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),"Use the context to draw shapes, text, and images"]}),r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),"For animations, clear the canvas and redraw inside a loop (usually"," ",r.jsx("span",{className:"mono",children:"requestAnimationFrame"}),")"]})]})]}),r.jsx(Nx,{isRunning:l}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"Mini controls"}),r.jsxs("div",{className:"btnRow",children:[r.jsxs("button",{type:"button",className:"btn",onClick:()=>u(!0),disabled:l,children:[r.jsx("span",{className:"btnIcon",children:r.jsx(Wf,{})}),"Play"]}),r.jsxs("button",{type:"button",className:"btn",onClick:()=>u(!1),disabled:!l,children:[r.jsx("span",{className:"btnIcon",children:r.jsx(Hf,{})}),"Pause"]}),r.jsxs("button",{type:"button",className:"btn",onClick:()=>{u(!1),setTimeout(()=>u(!0),80)},children:[r.jsx("span",{className:"btnIcon",children:r.jsx(Uf,{})}),"Restart"]})]}),r.jsxs("div",{className:"note",children:[r.jsx("span",{className:"noteIcon",children:r.jsx(wt,{})}),r.jsxs("p",{className:"noteText",children:["Canvas is pixel based. If you resize the canvas using CSS only, drawings can look blurry. Prefer setting",r.jsx("span",{className:"mono",children:"width"})," and",r.jsx("span",{className:"mono",children:"height"})," attributes on the element, and handle high DPI scaling if needed."]})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"Basic example code"}),r.jsx("pre",{className:"code",children:r.jsx("code",{children:m})})]})]})]})},Nx=({isRunning:s})=>{const c=Ve.useRef(null),l=Ve.useRef(0),u=Ve.useRef(0);return Ve.useEffect(()=>{const m=c.current;if(!m)return;const g=m.getContext("2d");if(!g)return;const w=m.width,E=m.height,C=()=>{g.fillStyle="#0d0d0d",g.fillRect(0,0,w,E),g.fillStyle="#ffffff",g.font="14px Verdana",g.fillText("Canvas demo: moving dot",14,24),g.globalAlpha=.35,g.beginPath(),g.moveTo(14,E/2),g.lineTo(w-14,E/2),g.strokeStyle="#ffffff",g.lineWidth=1,g.stroke(),g.globalAlpha=1;const D=u.current,Q=14+(Math.sin(D)+1)/2*(w-28),Z=E/2+Math.cos(D*1.2)*36;g.beginPath(),g.arc(Q,Z,8,0,Math.PI*2),g.fillStyle="#ffffff",g.fill(),g.fillStyle="#d0d0d0",g.font="12px Verdana",g.fillText("requestAnimationFrame loop",14,E-14)},$=()=>{u.current+=.04,C(),l.current=window.requestAnimationFrame($)},H=()=>{l.current&&window.cancelAnimationFrame(l.current),l.current=0};return s?(H(),$()):(H(),C()),()=>H()},[s]),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"Canvas element basics"}),r.jsxs("p",{className:"p",children:["Below is a small demo. We draw a background, some text, and a moving dot. The motion uses"," ",r.jsx("span",{className:"mono",children:"requestAnimationFrame"}),"."]}),r.jsx("div",{className:"demoBox",children:r.jsx("canvas",{ref:c,width:520,height:220,className:"canvas"})})]})},bx={Wrapper:ve.section`
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
    `},kx=()=>{const[s,c]=he.useState(!1);return r.jsxs(bx.Wrapper,{className:`topicCard ${s?"open":""}`,children:[r.jsxs("button",{type:"button",className:"topicHeader",onClick:()=>c(l=>!l),"aria-expanded":s,children:[r.jsx("span",{className:"chev",children:s?r.jsx(Ge,{}):r.jsx(Qe,{})}),r.jsx("span",{className:"icon",children:r.jsx(np,{})}),r.jsx("span",{className:"title",children:"Sectioning Elements"}),r.jsx("span",{className:"meta",children:s?"Collapse":"Expand"})]}),r.jsxs("div",{className:`topicBody ${s?"open":""}`,children:[r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"What are Sectioning Elements"}),r.jsx("p",{className:"p",children:"Sectioning elements are semantic HTML tags that define the structure of a webpage. They help organize content into meaningful blocks so browsers, search engines, and screen readers can understand the layout of the page."})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"header"}),r.jsx("p",{className:"p",children:"The header element represents introductory content. It usually contains a logo, navigation links, or page title. It can appear at the top of the page or inside an article or section."}),r.jsx("pre",{className:"code",children:`<header>
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
</aside>`})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"Why Semantics Matter"}),r.jsx("p",{className:"p",children:"Using semantic sectioning elements improves accessibility, SEO, and code readability. It helps screen readers understand page layout and helps search engines identify important content."})]})]})]})},Sx={Wrapper:ve.section`
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
    `},Cx=()=>{const[s,c]=he.useState(!1),l=he.useMemo(()=>[{tag:"header",role:"banner",use:"Top area of a page or a section (logo, title, top nav).",note:"Only the top-level page header maps to banner. A header inside an article is not a banner landmark."},{tag:"nav",role:"navigation",use:"Primary navigation links or menus.",note:"Use one nav per major navigation region. If there are multiple, label them."},{tag:"main",role:"main",use:"The main unique content of the page.",note:"Only one main per page. Avoid nesting main inside other landmarks."},{tag:"aside",role:"complementary",use:"Related side content (sidebar, related links, ads, callouts).",note:"Keep it relevant to the surrounding content."},{tag:"footer",role:"contentinfo",use:"Bottom area of a page (copyright, contact, policies).",note:"Only the page-level footer maps to contentinfo. Footer inside article is not contentinfo."},{tag:"section",role:"region (only when labeled)",use:"A thematic grouping of content with a heading.",note:"Section is not automatically a landmark unless it has an accessible name (aria-label/aria-labelledby)."},{tag:"article",role:"article",use:"Self-contained content that can stand alone (blog post, card, comment).",note:"Articles can be nested (like comments inside a post)."}],[]),u=he.useMemo(()=>[{role:"banner",when:"Top-level site header of the page.",example:"A header that contains site logo and primary navigation."},{role:"navigation",when:"A set of navigation links to major pages or sections.",example:"Main menu, sidebar menu, footer menu."},{role:"main",when:"The main content unique to the page.",example:"Content area excluding header/footer/sidebars."},{role:"complementary",when:"Supporting content related to main content.",example:"Related posts sidebar, glossary, tips panel."},{role:"contentinfo",when:"Footer information for the site or page.",example:"Copyright, contact links, policies."},{role:"region",when:"A generic landmark area that needs a label.",example:"A section with aria-label like 'Pricing' or 'FAQ'."},{role:"search",when:"A search area (often a form).",example:"Search bar container region."}],[]),m=()=>c(g=>!g);return r.jsxs(Sx.Wrapper,{className:`topicCard ${s?"open":""}`,children:[r.jsxs("button",{type:"button",className:"topicHeader",onClick:m,"aria-expanded":s,children:[r.jsx("span",{className:"chev",children:s?r.jsx(Ge,{}):r.jsx(Qe,{})}),r.jsx("span",{className:"icon",children:r.jsx(Of,{})}),r.jsx("span",{className:"title",children:"Document Landmarks"}),r.jsx("span",{className:"meta",children:s?"Collapse":"Expand"})]}),r.jsxs("div",{className:`topicBody ${s?"open":""}`,children:[r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"What are landmarks"}),r.jsx("p",{className:"p",children:"Landmarks are important regions of a page that help users navigate quickly, especially screen reader users. A screen reader can jump directly to landmarks like navigation, main content, or footer. Good landmarks make a page feel organized and predictable."})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"Semantic mapping"}),r.jsx("p",{className:"p",children:"Many semantic HTML tags automatically map to ARIA landmark roles. This means you often do not need to add ARIA roles manually. Use semantic tags first, then use ARIA only when you need extra meaning or labeling."}),r.jsxs("div",{className:"callout",children:[r.jsx("div",{className:"calloutIcon",children:r.jsx(wt,{})}),r.jsxs("div",{className:"calloutText",children:[r.jsx("div",{className:"calloutTitle",children:"Rule of thumb"}),r.jsx("div",{className:"calloutSub",children:"Prefer semantic HTML. Add ARIA only when you cannot express the meaning using HTML alone."})]})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"Common semantic tags and their landmark roles"}),r.jsxs("div",{className:"table",children:[r.jsxs("div",{className:"tHead",children:[r.jsxs("div",{className:"cell tag",children:[r.jsx(Xa,{})," Tag"]}),r.jsxs("div",{className:"cell role",children:[r.jsx(lo,{})," ARIA role"]}),r.jsxs("div",{className:"cell use",children:[r.jsx(sl,{})," When to use"]})]}),r.jsx("div",{className:"tBody",children:l.map(g=>r.jsxs("div",{className:"tRow",children:[r.jsx("div",{className:"cell tag",children:r.jsx("span",{className:"pill mono",children:g.tag})}),r.jsx("div",{className:"cell role",children:r.jsx("span",{className:"pill",children:g.role})}),r.jsxs("div",{className:"cell use",children:[r.jsx("div",{className:"useText",children:g.use}),r.jsxs("div",{className:"note",children:[r.jsx(As,{})," ",g.note]})]})]},`${g.tag}-${g.role}`))})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"ARIA roles"}),r.jsx("p",{className:"p",children:"ARIA roles describe what an element is. Landmarks are a special set of roles that describe page regions. If you use semantic tags, roles are often implied automatically. Add an explicit role only when needed."}),r.jsx("div",{className:"roleGrid",children:u.map(g=>r.jsxs("div",{className:"roleCard",children:[r.jsxs("div",{className:"roleTop",children:[r.jsx("span",{className:"roleIcon",children:r.jsx(Pt,{})}),r.jsx("span",{className:"roleName",children:g.role})]}),r.jsx("div",{className:"roleWhen",children:g.when}),r.jsxs("div",{className:"roleExample",children:["Example: ",g.example]})]},g.role))})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"Beginner checklist"}),r.jsxs("ul",{className:"bullets",children:[r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),"Use ",r.jsx("span",{className:"mono",children:"header"}),","," ",r.jsx("span",{className:"mono",children:"nav"}),","," ",r.jsx("span",{className:"mono",children:"main"}),","," ",r.jsx("span",{className:"mono",children:"footer"})," first."]}),r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),"Keep exactly one ",r.jsx("span",{className:"mono",children:"main"})," ","on a page."]}),r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),"If you have multiple navs, label them with"," ",r.jsx("span",{className:"mono",children:"aria-label"})," or"," ",r.jsx("span",{className:"mono",children:"aria-labelledby"}),"."]}),r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),"Do not add ARIA roles when HTML already provides the meaning."]}),r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),"For a ",r.jsx("span",{className:"mono",children:"section"})," to be a real landmark, it must have an accessible name."]})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"Tiny example (mental model)"}),r.jsxs("div",{className:"codeBlock",children:[r.jsxs("div",{className:"codeLine",children:[r.jsx("span",{className:"mono",children:"<header>"})," site header ",r.jsx("span",{className:"muted",children:"(banner)"})]}),r.jsxs("div",{className:"codeLine",children:[r.jsx("span",{className:"mono",children:"<nav>"})," main menu"," ",r.jsx("span",{className:"muted",children:"(navigation)"})]}),r.jsxs("div",{className:"codeLine",children:[r.jsx("span",{className:"mono",children:"<main>"})," page content ",r.jsx("span",{className:"muted",children:"(main)"})]}),r.jsxs("div",{className:"codeLine",children:[r.jsx("span",{className:"mono",children:"<aside>"})," sidebar"," ",r.jsx("span",{className:"muted",children:"(complementary)"})]}),r.jsxs("div",{className:"codeLine",children:[r.jsx("span",{className:"mono",children:"<footer>"})," footer"," ",r.jsx("span",{className:"muted",children:"(contentinfo)"})]})]})]})]})]})},Tx={Wrapper:ve.section`
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
    `},Ex=()=>{const[s,c]=he.useState(!1),l=he.useMemo(()=>[{title:"Basic FAQ (native toggle)",desc:"The <details> element creates a built-in disclosure widget. The <summary> element is the visible title that users click to expand or collapse.",code:`<details>
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
</details>`}],[]),u=()=>c(m=>!m);return r.jsxs(Tx.Wrapper,{className:`topicCard ${s?"open":""}`,children:[r.jsxs("button",{type:"button",className:"topicHeader",onClick:u,"aria-expanded":s,children:[r.jsx("span",{className:"chev",children:s?r.jsx(Ge,{}):r.jsx(Qe,{})}),r.jsx("span",{className:"icon",children:r.jsx(wt,{})}),r.jsx("span",{className:"title",children:"Details and Disclosure"}),r.jsx("span",{className:"meta",children:s?"Collapse":"Expand"})]}),r.jsxs("div",{className:`topicBody ${s?"open":""}`,children:[r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"What are details and summary"}),r.jsxs("p",{className:"p",children:["The ",r.jsx("span",{className:"mono",children:"details"})," element provides a built-in expandable container. The"," ",r.jsx("span",{className:"mono",children:"summary"})," element acts as the clickable heading. When the user clicks the summary, the browser expands or collapses the content inside details."]}),r.jsxs("ul",{className:"bullets",children:[r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),"Use ",r.jsx("span",{className:"mono",children:"summary"})," as the visible title"]}),r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),"Content inside ",r.jsx("span",{className:"mono",children:"details"})," ","is hidden until expanded"]}),r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),"The browser handles the toggle behavior for you"]})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"Why this is useful"}),r.jsxs("div",{className:"callouts",children:[r.jsxs("div",{className:"callout",children:[r.jsx("span",{className:"calloutIcon",children:r.jsx(Pt,{})}),r.jsxs("div",{className:"calloutText",children:[r.jsx("div",{className:"calloutTitle",children:"Simple"}),r.jsx("div",{className:"calloutSub",children:"No JavaScript needed for expand collapse"})]})]}),r.jsxs("div",{className:"callout",children:[r.jsx("span",{className:"calloutIcon",children:r.jsx(As,{})}),r.jsxs("div",{className:"calloutText",children:[r.jsx("div",{className:"calloutTitle",children:"Be careful"}),r.jsx("div",{className:"calloutSub",children:"Do not put buttons or links inside summary unless you know what you are doing"})]})]})]}),r.jsx("p",{className:"p",children:"This is perfect for FAQs, extra explanations, or hidden notes. It keeps the page clean and lets the user choose what to expand."})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"Key rules"}),r.jsxs("ul",{className:"bullets",children:[r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),r.jsx("span",{className:"mono",children:"summary"})," should be the first child of ",r.jsx("span",{className:"mono",children:"details"})]}),r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),"Use ",r.jsx("span",{className:"mono",children:"open"})," attribute to keep it expanded initially"]}),r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),"Keep summary text short and clear"]})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"Examples"}),r.jsx("div",{className:"examples",children:l.map((m,g)=>r.jsxs("div",{className:"example",children:[r.jsxs("div",{className:"exTop",children:[r.jsx("div",{className:"exTitle",children:m.title}),r.jsx("div",{className:"exDesc",children:m.desc})]}),r.jsxs("div",{className:"codeWrap","aria-label":"Example code",children:[r.jsxs("div",{className:"codeHead",children:[r.jsx("span",{className:"codeIcon",children:r.jsx(_t,{})}),r.jsx("span",{className:"codeLabel",children:"HTML"})]}),r.jsx("pre",{className:"code",children:r.jsx("code",{children:m.code})})]})]},g))})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"Quick tip"}),r.jsx("p",{className:"p",children:"If you need a true accordion where only one item can be open at a time, that usually requires JavaScript. But for most cases, multiple open items are totally fine and simpler."})]})]})]})},Lx={Wrapper:ve.section`
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
    `},Ix=()=>{const[s,c]=he.useState(!1),l=he.useRef(null),u=()=>{c(w=>!w)},m=()=>{l.current&&l.current.showModal()},g=()=>{l.current&&l.current.close()};return r.jsxs(Lx.Wrapper,{className:s?"open":"",children:[r.jsxs("button",{type:"button",className:"topicHeader",onClick:u,"aria-expanded":s,children:[r.jsx("span",{className:"chev",children:s?r.jsx(Ge,{}):r.jsx(Qe,{})}),r.jsx("span",{className:"icon",children:r.jsx(sp,{})}),r.jsx("span",{className:"title",children:"Dialog"}),r.jsx("span",{className:"meta",children:s?"Collapse":"Expand"})]}),r.jsxs("div",{className:`topicBody ${s?"open":""}`,children:[r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"What is the dialog element"}),r.jsx("p",{className:"p",children:"The dialog element is a built-in HTML element used to create modal or non-modal dialog boxes. It allows you to display popups without using external libraries. It is part of modern HTML and provides native browser behavior."})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"Modal behavior"}),r.jsx("p",{className:"p",children:"When a dialog is opened using showModal(), it becomes modal. This means the rest of the page becomes inactive until the dialog is closed. The browser also adds a backdrop automatically."}),r.jsxs("ul",{className:"bullets",children:[r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),"show() opens non modal dialog"]}),r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),"showModal() opens modal dialog"]}),r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),"close() closes the dialog"]})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"Example"}),r.jsxs("div",{className:"exampleBox",children:[r.jsx("button",{type:"button",className:"openBtn",onClick:m,children:"Open Dialog"}),r.jsxs("dialog",{ref:l,className:"dialogBox",children:[r.jsx("h4",{className:"dialogTitle",children:"Native HTML Dialog"}),r.jsx("p",{className:"dialogText",children:"This is a native modal created using the dialog element. No external library is used."}),r.jsx("button",{type:"button",className:"closeBtn",onClick:g,children:"Close"})]})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"Important Notes"}),r.jsx("p",{className:"p",children:"The dialog element is supported in modern browsers. For older browsers, a polyfill may be required. You can style the backdrop using the ::backdrop pseudo element in CSS."})]})]})]})},zx=()=>r.jsxs(Wa.Wrapper,{children:[r.jsx(Wa.Header,{children:r.jsx(Gf,{})}),r.jsxs(Wa.Main,{children:[r.jsxs("div",{className:"contentWrapper",children:[r.jsx(Kf,{}),r.jsx(Xf,{}),r.jsx(Zf,{}),r.jsx(tx,{}),r.jsx(nx,{}),r.jsx(sx,{}),r.jsx(ax,{}),r.jsx(cx,{}),r.jsx(ux,{}),r.jsx(hx,{}),r.jsx(fx,{}),r.jsx(gx,{}),r.jsx(yx,{}),r.jsx(wx,{}),r.jsx(kx,{}),r.jsx(Cx,{}),r.jsx(Ex,{}),r.jsx(Ix,{})]}),r.jsx("div",{className:"footerWrapper",children:r.jsx(Yf,{})})]})]});um.createRoot(document.getElementById("root")).render(r.jsx(r.Fragment,{children:r.jsx(zx,{})}));

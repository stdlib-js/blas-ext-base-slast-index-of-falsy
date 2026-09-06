"use strict";var i=function(r,e){return function(){try{return e||r((e={exports:{}}).exports,e),e.exports}catch(a){throw (e=0, a)}};};var t=i(function(g,v){
var o=require('@stdlib/blas-ext-base-sindex-of-falsy/dist').ndarray;function c(r,e,a,u){var s;return r<=0?-1:(u+=(r-1)*a,a*=-1,s=o(r,e,a,u),s<0?s:r-1-s)}v.exports=c
});var q=i(function(h,l){
var O=require('@stdlib/strided-base-stride2offset/dist'),p=t();function F(r,e,a){return p(r,e,a,O(r,a))}l.exports=F
});var f=i(function(k,d){
var I=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),y=q(),j=t();I(y,"ndarray",j);d.exports=y
});var m=require("path").join,R=require('@stdlib/utils-try-require/dist'),_=require('@stdlib/assert-is-error/dist'),E=f(),n,x=R(m(__dirname,"./native.js"));_(x)?n=E:n=x;module.exports=n;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map

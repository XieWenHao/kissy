/*
Copyright 2010, KISSY UI Library v1.1.2dev
MIT Licensed
build time: ${build.time}
*/
(function(h,j,e){if(h[j]===e)h[j]={};j=h[j];var q=h.document,p=function(b,c,i,k){if(!c||!b)return b;if(i===e)i=true;var o,n,t;if(k&&(t=k.length))for(o=0;o<t;o++){n=k[o];if(n in c)if(i||!(n in b))b[n]=c[n]}else for(n in c)if(i||!(n in b))b[n]=c[n];return b},u=false,l=[],s=false,w=/^#?([\w-]+)$/;p(j,{version:"1.1.2dev",_init:function(){this.Env={mods:{},guid:0}},add:function(b,c){this.Env.mods[b]={name:b,fn:c};c(this);return this},ready:function(b){s||this._bindReady();u?b.call(h,this):l.push(b);return this},
_bindReady:function(){var b=this,c=q.documentElement.doScroll,i=c?"onreadystatechange":"DOMContentLoaded",k=function(){b._fireReady()};s=true;if(q.readyState==="complete")return k();if(q.addEventListener){var o=function(){q.removeEventListener(i,o,false);k()};q.addEventListener(i,o,false);h.addEventListener("load",k,false)}else{var n=function(){if(q.readyState==="complete"){q.detachEvent(i,n);k()}};q.attachEvent(i,n);h.attachEvent("onload",k);if(h==h.top){var t=function(){try{c("left");k()}catch(a){setTimeout(t,
1)}};t()}}},_fireReady:function(){if(!u){u=true;if(l){for(var b,c=0;b=l[c++];)b.call(h,this);l=null}}},available:function(b,c){if((b=(b+"").match(w)[1])&&j.isFunction(c))var i=1,k=j.later(function(){if(q.getElementById(b)&&(c()||1)||++i>500)k.cancel()},40,true)},mix:p,merge:function(){var b={},c,i=arguments.length;for(c=0;c<i;++c)p(b,arguments[c]);return b},augment:function(){var b=arguments,c=b.length-2,i=b[0],k=b[c],o=b[c+1],n=1;if(!j.isArray(o)){k=o;o=e;c++}if(!j.isBoolean(k)){k=e;c++}for(;n<c;n++)p(i.prototype,
b[n].prototype||b[n],k,o);return i},extend:function(b,c,i,k){if(!c||!b)return b;var o=Object.prototype,n=c.prototype,t=function(a){function d(){}d.prototype=a;return new d}(n);b.prototype=t;t.constructor=b;b.superclass=n;if(c!==Object&&n.constructor===o.constructor)n.constructor=c;i&&p(t,i);k&&p(b,k);return b},namespace:function(){var b=arguments.length,c=null,i,k,o;for(i=0;i<b;++i){o=(""+arguments[i]).split(".");c=this;for(k=h[o[0]]===c?1:0;k<o.length;++k)c=c[o[k]]=c[o[k]]||{}}return c},app:function(b,
c){var i=h[b]||{};p(i,this,true,["_init","add","namespace"]);i._init();return p(h[b]=i,typeof c==="function"?c():c)},log:function(b,c,i){if(this.Config.debug){if(i)b=i+": "+b;if(h.console!==e&&console.log)console[c&&console[c]?c:"log"](b)}return this},error:function(b){if(this.Config.debug)throw b;},guid:function(b){var c=this.Env.guid++ +"";return b?b+c:c}});j._init();j.Config={debug:""}})(window,"KISSY");
KISSY.add("lang",function(h,j){function e(a){var d=typeof a;return a===null||d!=="object"&&d!=="function"}var q=window,p=document,u=location,l=Array.prototype,s=l.indexOf,w=l.filter,b=String.prototype.trim,c=Object.prototype.toString,i=encodeURIComponent,k=decodeURIComponent,o=/^\s+|\s+$/g,n=/^(\w+)\[\]$/,t=/\S/;h.mix(h,{isUndefined:function(a){return a===j},isBoolean:function(a){return typeof a==="boolean"},isString:function(a){return typeof a==="string"},isNumber:function(a){return typeof a==="number"&&
isFinite(a)},isPlainObject:function(a){return a&&c.call(a)==="[object Object]"&&!a.nodeType&&!a.setInterval},isEmptyObject:function(a){for(var d in a)return false;return true},isFunction:function(a){return c.call(a)==="[object Function]"},isArray:function(a){return c.call(a)==="[object Array]"},trim:b?function(a){return a==j?"":b.call(a)}:function(a){return a==j?"":a.toString().replace(o,"")},substitute:function(a,d,f){if(!h.isString(a)||!h.isPlainObject(d))return a;return a.replace(f||/\\?\{([^{}]+)\}/g,
function(g,m){if(g.charAt(0)==="\\")return g.slice(1);return d[m]!==j?d[m]:""})},each:function(a,d,f){var g,m=0,r=a.length,v=r===j||h.isFunction(a);f=f||q;if(v)for(g in a){if(d.call(f,a[g],g,a)===false)break}else for(g=a[0];m<r&&d.call(f,g,m,a)!==false;g=a[++m]);return a},indexOf:s?function(a,d){return s.call(d,a)}:function(a,d){for(var f=0,g=d.length;f<g;++f)if(d[f]===a)return f;return-1},inArray:function(a,d){return h.indexOf(a,d)>-1},makeArray:function(a){if(a===null||a===j)return[];if(h.isArray(a))return a;
if(typeof a.length!=="number"||typeof a==="string"||h.isFunction(a))return[a];if(a.item&&h.UA.ie){for(var d=[],f=0,g=a.length;f<g;++f)d[f]=a[f];return d}return l.slice.call(a)},filter:w?function(a,d,f){return w.call(a,d,f)}:function(a,d,f){var g=[];h.each(a,function(m,r,v){d.call(f,m,r,v)&&g.push(m)});return g},param:function(a,d){if(!h.isPlainObject(a))return"";d=d||"&";var f=[],g,m;for(g in a){m=a[g];g=i(g);if(e(m))f.push(g,"=",i(m+""),d);else if(h.isArray(m)&&m.length)for(var r=0,v=m.length;r<
v;++r)e(m[r])&&f.push(g,"[]=",i(m[r]+""),d)}f.pop();return f.join("")},unparam:function(a,d){if(typeof a!=="string"||(a=h.trim(a)).length===0)return{};var f={};a=a.split(d||"&");for(var g,m,r,v=0,x=a.length;v<x;++v){d=a[v].split("=");g=k(d[0]);try{m=k(d[1]||"")}catch(y){m=d[1]||""}if((r=g.match(n))&&r[1]){f[r[1]]=f[r[1]]||[];f[r[1]].push(m)}else f[g]=m}return f},later:function(a,d,f,g,m){d=d||0;g=g||{};var r=a,v=h.makeArray(m),x;if(typeof a==="string")r=g[a];r||h.error("method undefined");a=function(){r.apply(g,
v)};x=f?setInterval(a,d):setTimeout(a,d);return{id:x,interval:f,cancel:function(){this.interval?clearInterval(x):clearTimeout(x)}}},clone:function(a){var d=a,f,g;if(a&&((f=h.isArray(a))||h.isPlainObject(a))){d=f?[]:{};for(g in a)if(a.hasOwnProperty(g))d[g]=h.clone(a[g])}return d},now:function(){return(new Date).getTime()},globalEval:function(a){if(a&&t.test(a)){var d=p.getElementsByTagName("head")[0]||p.documentElement,f=p.createElement("script");f.text=a;d.insertBefore(f,d.firstChild);d.removeChild(f)}}});
if(u&&u.search&&u.search.indexOf("ks-debug")!==-1)h.Config.debug=true});
KISSY.add("ua",function(h){var j=navigator.userAgent,e,q,p,u,l={webkit:0,trident:0,gecko:0,presto:0,chrome:0,safari:0,firefox:0,ie:0,opera:0},s=function(w){var b=0;return parseFloat(w.replace(/\./g,function(){return b++===0?".":""}))};if((e=j.match(/AppleWebKit\/([\d.]*)/))&&e[1]){l[q="webkit"]=s(e[1]);if((e=j.match(/Chrome\/([\d.]*)/))&&e[1])l[p="chrome"]=s(e[1]);else if((e=j.match(/\/([\d.]*) Safari/))&&e[1])l[p="safari"]=s(e[1]);if(/ Mobile\//.test(j))l.mobile="apple";else if(e=j.match(/NokiaN[^\/]*|Android \d\.\d|webOS\/\d\.\d/))l.mobile=
e[0].toLowerCase()}else if((e=j.match(/Presto\/([\d.]*)/))&&e[1]){l[q="presto"]=s(e[1]);if((e=j.match(/Opera\/([\d.]*)/))&&e[1]){l[p="opera"]=s(e[1]);if((e=j.match(/Opera\/.* Version\/([\d.]*)/))&&e[1])l[p]=s(e[1]);if((e=j.match(/Opera Mini[^;]*/))&&e)l.mobile=e[0].toLowerCase();else if((e=j.match(/Opera Mobi[^;]*/))&&e)l[p="mobile"]=e[0]}}else if((e=j.match(/MSIE\s([^;]*)/))&&(u=e[1])){l[q="trident"]=0.1;l[p="ie"]=u<8&&document.documentMode?8:u;if((e=j.match(/Trident\/([\d.]*)/))&&e[1])l[q]=s(e[1])}else if(e=
j.match(/Gecko/)){l[q="gecko"]=0.1;if((e=j.match(/rv:([\d.]*)/))&&e[1])l[q]=s(e[1]);if((e=j.match(/Firefox\/([\d.]*)/))&&e[1])l[p="firefox"]=s(e[1])}l.core=q;l.shell=p;l._numberify=s;h.UA=l});

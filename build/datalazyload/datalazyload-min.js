/*
Copyright (c) 2009, Kissy UI Library. All rights reserved.
MIT Licensed.
http://kissy.googlecode.com/

Date: 2009-12-25 08:32:17
Revision: 352
*/
KISSY.add("datalazyload",function(f){var b=YAHOO.util,g=b.Dom,n=b.Event,j=YAHOO.lang,k=window,m=document,a="data-lazyload-src",l="ks-datalazyload",i="ks-datalazyload-custom",d={AUTO:"auto",MANUAL:"manual"},h="default",e={mod:d.MANUAL,diff:h,placeholder:"http://a.tbcdn.cn/kissy/1.0.2/build/datalazyload/dot.gif"};function c(q,p){var o=this;if(!(o instanceof arguments.callee)){return new arguments.callee(q,p)}if(typeof p==="undefined"){p=q;q=[m]}if(!j.isArray(q)){q=[g.get(q)||m]}o.containers=q;o.config=f.merge(e,p||{});o.callbacks={els:[],fns:[]};o._init()}f.mix(c.prototype,{_init:function(){var o=this;o.threshold=o._getThreshold();o._filterItems();if(o._getItemsLength()){o._initLoadEvent()}},_initLoadEvent:function(){var r,q=this;n.on(k,"scroll",o);n.on(k,"resize",function(){q.threshold=q._getThreshold();o()});if(q._getItemsLength()){n.onDOMReady(function(){p()})}function o(){if(r){return}r=setTimeout(function(){p();r=null},100)}function p(){q._loadItems();if(q._getItemsLength()===0){n.removeListener(k,"scroll",o);n.removeListener(k,"resize",o)}}},_filterItems:function(){var A=this,p=A.containers,v=A.threshold,z=A.config.placeholder,q=A.config.mod===d.MANUAL,o,x,u,t,s,w,r,C,B=[],y=[];for(o=0,x=p.length;o<x;++o){u=p[o].getElementsByTagName("img");for(s=0,w=u.length;s<w;++s){r=u[s];C=r.getAttribute(a);if(q){if(C){r.src=z;B.push(r)}}else{if(g.getY(r)>v&&!C){r.setAttribute(a,r.src);r.src=z;B.push(r)}}}t=p[o].getElementsByTagName("textarea");for(s=0,w=t.length;s<w;++s){if(g.hasClass(t[s],l)){y.push(t[s])}}}A.images=B;A.areaes=y},_loadItems:function(){var o=this;o._loadImgs();o._loadAreaes();o._fireCallbacks()},_loadImgs:function(){var q=this,v=q.images,s=g.getDocumentScrollTop(),o=q.threshold+s,r,p,u,t=[];for(r=0;p=v[r++];){if(g.getY(p)<=o){u=p.getAttribute(a);if(u&&p.src!=u){p.src=u;p.removeAttribute(a)}}else{t.push(p)}}q.images=t},_loadAreaes:function(){var p=this,t=p.areaes,u=g.getDocumentScrollTop(),o=p.threshold+u,q,s,r,v=[];for(q=0;s=t[q++];){r=s.parentNode;if(g.getY(r)<=o){r.innerHTML=s.value}else{v.push(s)}}p.areaes=v},_fireCallbacks:function(){var y=this,u=y.callbacks,r=u.els,x=u.fns,o=g.getDocumentScrollTop(),t=y.threshold+o,s,p,w,v=[],q=[];for(s=0;(p=r[s])&&(w=x[s++]);){if(g.getY(p)<=t){w.call(p)}else{v.push(p);q.push(w)}}u.els=v;u.fns=q},addCallback:function(p,o){p=g.get(p);if(p&&typeof o==="function"){this.callbacks.els.push(p);this.callbacks.fns.push(o)}},_getThreshold:function(){var p=this.config.diff,o=g.getViewportHeight();if(p===h){return 2*o}else{return o+p}},_getItemsLength:function(){var o=this;return o.images.length+o.areaes.length+o.callbacks.els.length},loadCustomLazyData:function(p){var o=p.getElementsByTagName("textarea")[0];if(o&&g.hasClass(o,i)){p.innerHTML=o.value}}});f.DataLazyload=c});
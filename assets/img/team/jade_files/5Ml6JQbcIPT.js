/*!CK:535446396!*//*1392696316,178174815*/

if (self.CavalryLogger) { CavalryLogger.start_js(["IE\/CL"]); }

__d("legacy:fbdesktop-detect",["FBDesktopDetect"],function(a,b,c,d){a.FbDesktopDetect=b('FBDesktopDetect');},3);
__d("ScriptPathLogger",["Banzai","ScriptPath","isInIframe"],function(a,b,c,d,e,f,g,h,i){var j='script_path_change',k={scriptPath:null,categoryToken:null},l={PAGE_LOAD:'load',PAGE_UNLOAD:'unload',TRANSITION:'transition'},m=false;function n(t,u,v){if(!m||i())return;var w=g.isEnabled('vital_navigations')?g.VITAL:g.BASIC,x={source_path:t.scriptPath,source_token:t.categoryToken,dest_path:u.scriptPath,dest_token:u.categoryToken,navigation:h.getNavigation(),cause:v};g.post(j,x,w);}function o(){n(k,h.getPageInfo(),l.PAGE_LOAD);}function p(t,u){n(t,u,l.TRANSITION);}function q(){n(h.getPageInfo(),k,l.PAGE_UNLOAD);}var r=h.subscribe(function(t){if(m){var u=t.source,v=t.dest;if(u){p(u,v);}else o();}});g.subscribe(g.SHUTDOWN,q);var s={startLogging:function(){m=true;if(h.getPageInfo())o();},stopLogging:function(){m=false;h.unsubscribe(r);}};s.CAUSE=l;s.BANZAI_LOGGING_ROUTE=j;e.exports=s;});
__d("TimeSpentArray",["Banzai","pageID","setTimeoutAcrossTransitions"],function(a,b,c,d,e,f,g,h,i){var j=2,k=j*32,l,m,n,o,p,q,r,s,t,u={},v;function w(){return {timeoutDelayMap:u,nextDelay:v,timeoutInSeconds:n};}function x(){if(l){var fa=Date.now();if(fa>p)r=Math.min(k,Math.ceil((fa/1000)-o));var ga=ca();if(ga)l(ga,v);}ba();}function y(){z();m=i(x,n*1000);}function z(){if(m){clearTimeout(m);m=null;}}function aa(fa){o=fa;p=o*1000;q=[1];for(var ga=1;ga<j;ga++)q.push(0);r=1;s+=1;t+=1;var ha=t.toString()+'_delay';v=u[ha];if(typeof v=='undefined')v=u.delay;var ia=t.toString()+'_timeout',ja=u[ia];if(typeof ja=='undefined')ja=u.timeout;ja=Math.min(ja,k);n=ja||k;y();}function ba(){z();q=null;}function ca(){if(!q)return null;return {tos_id:h,start_time:o,tos_array:q.slice(0),tos_len:r,tos_seq:t,tos_cum:s};}function da(fa){if(fa>=p&&(fa-p)<1000)return;ea(Math.floor(fa/1000));}function ea(fa){var ga=fa-o;if(ga<0||ga>=k)x();if(!q){aa(fa);}else{q[ga>>5]|=(1<<(ga&31));r=ga+1;s+=1;p=fa*1000;}}e.exports={init:function(fa,ga){s=0;t=-1;l=fa;if(typeof ga=='object'&&ga!==null){u=ga;}else u={};aa(Math.floor(Date.now()/1000));g.subscribe(g.SHUTDOWN,x);},update:function(fa){da(fa);},get:function(){return ca();},ship:function(){x();},reset:function(){ba();},testState:function(){return w();}};});
__d("IntlUtils",["AsyncRequest","Cookie","goURI"],function(a,b,c,d,e,f,g,h,i){var j={setXmode:function(k){(new g()).setURI('/ajax/intl/save_xmode.php').setData({xmode:k}).setHandler(function(){document.location.reload();}).send();},setAmode:function(k){new g().setURI('/ajax/intl/save_xmode.php').setData({amode:k,app:false}).setHandler(function(){document.location.reload();}).send();},setLocale:function(k,l,m,n){if(!m)m=k.options[k.selectedIndex].value;j.saveLocale(m,true,null,l,n);},saveLocale:function(k,l,m,n,o){new g().setURI('/ajax/intl/save_locale.php').setData({aloc:k,source:n,app_only:o}).setHandler(function(p){if(l){document.location.reload();}else i(m);}).send();},setLocaleCookie:function(k,l){h.set('locale',k,7*24*3600000);i(l);}};e.exports=j;});
__d("legacy:intl-base",["IntlUtils"],function(a,b,c,d,e,f,g){a.intl_set_xmode=g.setXmode;a.intl_set_amode=g.setAmode;a.intl_set_locale=g.setLocale;a.intl_save_locale=g.saveLocale;a.intl_set_cookie_locale=g.setLocaleCookie;},3);
__d("legacy:onload-action",["OnloadHooks"],function(a,b,c,d,e,f,g){a._onloadHook=g._onloadHook;a._onafterloadHook=g._onafterloadHook;a.runHook=g.runHook;a.runHooks=g.runHooks;a.keep_window_set_as_loaded=g.keepWindowSetAsLoaded;},3);
__d("LoginFormController",["Event","ge","Button","Cookie"],function(a,b,c,d,e,f,g,h,i,j){f.init=function(k,l,m){g.listen(k,'submit',function(){if(window.__cookieReload)window.clearInterval(window.__cookieReload);i.setEnabled(l,false);setTimeout(i.setEnabled.bind(null,l,true),15000);});var n=h('lgnjs');if(n){var o=Math.floor(Date.now()/1000);n.value=o;}var p=parseInt(j.get('m_ts'),10),q=m!=null;if(p>o-60)q=false;if(q){var r,s=function(){if(j.get('c_user')!=null){window.clearInterval(r);j.set('m_ts',Math.floor(Date.now()/1000),null,'/',false);window.location.href=m;}};r=window.setInterval(s,1000);s();}};});
__d("Base64",[],function(a,b,c,d,e,f){var g='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';function h(l){l=(l.charCodeAt(0)<<16)|(l.charCodeAt(1)<<8)|l.charCodeAt(2);return String.fromCharCode(g.charCodeAt(l>>>18),g.charCodeAt((l>>>12)&63),g.charCodeAt((l>>>6)&63),g.charCodeAt(l&63));}var i='>___?456789:;<=_______'+'\0\1\2\3\4\5\6\7\b\t\n\13\f\r\16\17\20\21\22\23\24\25\26\27\30\31'+'______\32\33\34\35\36\37 !"#$%&\'()*+,-./0123';function j(l){l=(i.charCodeAt(l.charCodeAt(0)-43)<<18)|(i.charCodeAt(l.charCodeAt(1)-43)<<12)|(i.charCodeAt(l.charCodeAt(2)-43)<<6)|i.charCodeAt(l.charCodeAt(3)-43);return String.fromCharCode(l>>>16,(l>>>8)&255,l&255);}var k={encode:function(l){l=unescape(encodeURI(l));var m=(l.length+2)%3;l=(l+'\0\0'.slice(m)).replace(/[\s\S]{3}/g,h);return l.slice(0,l.length+m-2)+'=='.slice(m);},decode:function(l){l=l.replace(/[^A-Za-z0-9+\/]/g,'');var m=(l.length+3)&3;l=(l+'AAA'.slice(m)).replace(/..../g,j);l=l.slice(0,l.length+m-3);try{return decodeURIComponent(escape(l));}catch(n){throw new Error('Not valid UTF-8');}},encodeObject:function(l){return k.encode(JSON.stringify(l));},decodeObject:function(l){return JSON.parse(k.decode(l));},encodeNums:function(l){return String.fromCharCode.apply(String,l.map(function(m){return g.charCodeAt((m|-(m>63))&-(m>0)&63);}));}};e.exports=k;});
__d("ClickRefUtils",[],function(a,b,c,d,e,f){var g={get_intern_ref:function(h){if(!!h){var i={profile_minifeed:1,gb_content_and_toolbar:1,gb_muffin_area:1,ego:1,bookmarks_menu:1,jewelBoxNotif:1,jewelNotif:1,BeeperBox:1,navSearch:1};for(var j=h;j&&j!=document.body;j=j.parentNode){if(!j.id||typeof j.id!=='string')continue;if(j.id.substr(0,8)=='pagelet_')return j.id.substr(8);if(j.id.substr(0,8)=='box_app_')return j.id;if(i[j.id])return j.id;}}return '-';},get_href:function(h){var i=(h.getAttribute&&(h.getAttribute('ajaxify')||h.getAttribute('data-endpoint'))||h.action||h.href||h.name);return typeof i==='string'?i:null;},should_report:function(h,i){if(i=='FORCE')return true;if(i=='INDIRECT')return false;return h&&(g.get_href(h)||(h.getAttribute&&h.getAttribute('data-ft')));}};e.exports=g;});
__d("setUECookie",["Env"],function(a,b,c,d,e,f,g){function h(i){if(!g.no_cookies)document.cookie="act="+encodeURIComponent(i)+"; path=/; domain="+window.location.hostname.replace(/^.*(\.facebook\..*)$/i,'$1');}e.exports=h;});
__d("ClickRefLogger",["Arbiter","Banzai","ClickRefUtils","EagleEye","ScriptPath","Vector","$","collectDataAttributes","copyProperties","ge","pageID","setUECookie"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var s={delay:h.BASIC.delay,retry:true};function t(v){if(!p('content'))return [0,0,0,0];var w=m('content'),x=l.getEventPosition(v);return [x.x,x.y,w.offsetLeft,w.clientWidth];}function u(v,w,event,x){var y='r',z=[0,0,0,0],aa,ba;if(!!event){aa=event.type;if(aa=='click'&&p('content'))z=t(event);var ca=0;event.ctrlKey&&(ca+=1);event.shiftKey&&(ca+=2);event.altKey&&(ca+=4);event.metaKey&&(ca+=8);if(ca)aa+=ca;}if(!!w)ba=i.get_href(w);var da=n(!!event?(event.target||event.srcElement):w,['ft','gt']);o(da.ft,x.ft||{});o(da.gt,x.gt||{});if(typeof(da.ft.ei)==='string')delete da.ft.ei;var ea=[v._ue_ts,v._ue_count,ba||'-',v._context,aa||'-',i.get_intern_ref(w),y,a.URI?a.URI.getRequestURI(true,true).getUnqualifiedURI().toString():location.pathname+location.search+location.hash,da].concat(z).concat(q).concat(k.getScriptPath());return ea;}g.subscribe("ClickRefAction/new",function(v,w){if(i.should_report(w.node,w.mode)){var x=u(w.cfa,w.node,w.event,w.extra_data),y=[j.getSessionID(),Date.now(),'act'];r(w.cfa.ue);if(h.isEnabled('click_ref_logger')){h.post('click_ref_logger',Array.prototype.concat(y,x),s);}else j.log('act',x);}});});
__d("QuicklingAugmenter",["URI"],function(a,b,c,d,e,f,g){var h=[],i={addHandler:function(j){h.push(j);},augmentURI:function(j){var k=[],l=g(j);h.forEach(function(m){var n=m(l);if(!n)return l;k.push(m);l=l.addQueryData(n);});h=k;return l;}};e.exports=i;});
__d("Quickling",["AjaxPipeRequest","Arbiter","CSSClassTransition","DocumentTitle","DOM","ErrorUtils","HTML","OnloadHooks","PageTransitions","QuicklingAugmenter","QuicklingConfig","Run","URI","UserAgent","PHPQuerySerializer","goOrReplace","isEmpty"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w){var x=q.version,y=q.sessionLength,z=new RegExp(q.inactivePageRegex),aa=0,ba,ca='',da=[];function ea(){da.forEach(clearTimeout);da.length=0;}function fa(){if(da.length===0)r.onLeave(ea);}var ga={isActive:function(){return true;},isPageActive:function(pa){if(pa=='#')return false;pa=new s(pa);if(pa.getDomain()&&pa.getDomain()!=s().getDomain())return false;if(pa.getPath()=='/l.php'){var qa=pa.getQueryData().u;if(qa){qa=s(unescape(qa)).getDomain();if(qa&&qa!=s().getDomain())return false;}}var ra=pa.getPath(),sa=pa.getQueryData();if(!w(sa))ra+='?'+u.serialize(sa);return !z.test(ra);},getLoadCount:function(){return aa;}};function ha(pa){pa=pa||'Facebook';j.set(pa);if(t.ie()){ca=pa;if(!ba)ba=window.setInterval(function(){var qa=ca,ra=j.get();if(qa!=ra)j.set(qa);},5000,false);}}function ia(pa){var qa=document.getElementsByTagName('link');for(var ra=0;ra<qa.length;++ra){if(qa[ra].rel!='alternate')continue;k.remove(qa[ra]);}if(pa.length){var sa=k.find(document,'head');sa&&k.appendContent(sa,m(pa[0]));}}for(var ja in g)if(g.hasOwnProperty(ja))la[ja]=g[ja];var ka=g===null?null:g.prototype;la.prototype=Object.create(ka);la.prototype.constructor=la;la.__superConstructor__=g;function la(pa){"use strict";var qa={version:x};g.call(this,pa,{quickling:qa});}la.prototype._preBootloadFirstResponse=function(pa){"use strict";return true;};la.prototype._fireDomContentCallback=function(){"use strict";this._request.cavalry&&this._request.cavalry.setTimeStamp('t_domcontent');o.transitionComplete();this._onPageDisplayed&&this._onPageDisplayed(this.pipe);ka._fireDomContentCallback.call(this);};la.prototype._fireOnloadCallback=function(){"use strict";if(this._request.cavalry){this._request.cavalry.setTimeStamp('t_hooks');this._request.cavalry.setTimeStamp('t_layout');this._request.cavalry.setTimeStamp('t_onload');}ka._fireOnloadCallback.call(this);};la.prototype.isPageActive=function(pa){"use strict";return ga.isPageActive(pa);};la.prototype._versionCheck=function(pa){"use strict";if(pa.version==x)return true;var qa=['quickling','ajaxpipe','ajaxpipe_token'];v(window.location,s(pa.uri).removeQueryData(qa),true);return false;};la.prototype._processFirstResponse=function(pa){"use strict";var qa=pa.getPayload();ha(qa.title);ia(qa.syndication||[]);window.scrollTo(0,0);i.go(document.body,qa.body_class||'',o.getMostRecentURI(),pa.getRequest().getURI());h.inform('quickling/response');};la.prototype.getSanitizedParameters=function(){"use strict";return ['quickling'];};function ma(){aa++;return aa>=y;}function na(pa){g.setCurrentRequest(null);if(ma())return false;pa=p.augmentURI(pa);if(!ga.isPageActive(pa))return false;window.ExitTime=Date.now();r.__removeHook('onafterloadhooks');r.__removeHook('onloadhooks');n.runHooks('onleavehooks');h.inform('onload/exit',true);new la(pa).setCanvasId('content').send();return true;}function oa(pa){var qa=window[pa];function ra(sa,ta,ua){if(typeof sa!=='function')sa=eval.bind(null,sa);var va=qa(l.guard(sa,pa+' (with Quickling)'),ta);if(ta>0&&ua!==false){fa();da.push(va);}return va;}window[pa]=ra;}r.onAfterLoad(function pa(){oa('setInterval');oa('setTimeout');o.registerHandler(na,1);});e.exports=a.Quickling=ga;});
__d("StringTransformations",[],function(a,b,c,d,e,f){e.exports={unicodeEscape:function(g){return g.replace(/[^A-Za-z0-9\-\.\:\_\$\/\+\=]/g,function(h){var i=h.charCodeAt().toString(16);return '\\u'+('0000'+i.toUpperCase()).slice(-4);});},unicodeUnescape:function(g){return g.replace(/(\\u[0-9A-Fa-f]{4})/g,function(h){return String.fromCharCode(parseInt(h.slice(2),16));});}};});
__d("UserActionHistory",["Arbiter","ClickRefUtils","ScriptPath","throttle","WebStorage"],function(a,b,c,d,e,f,g,h,i,j,k){var l={click:1,submit:1},m=false,n={log:[],len:0},o=j.acrossTransitions(function(){try{m._ua_log=JSON.stringify(n);}catch(r){m=false;}},1000);function p(){var r=k.getSessionStorage();if(r){m=r;m._ua_log&&(n=JSON.parse(m._ua_log));}else m=false;n.log[n.len%10]={ts:Date.now(),path:'-',index:n.len,type:'init',iref:'-'};n.len++;g.subscribe("UserAction/new",function(s,t){var u=t.ua,v=t.node,event=t.event;if(!event||!(event.type in l))return;var w={path:i.getScriptPath(),type:event.type,ts:u._ue_ts,iref:h.get_intern_ref(v)||'-',index:n.len};n.log[n.len++%10]=w;m&&o();});}function q(){return n.log.sort(function(r,s){return (s.ts!=r.ts)?(s.ts-r.ts):(s.index-r.index);});}p();e.exports={getHistory:q};});
__d("useragentcm",["Bootloader","UACMConfig","ge"],function(a,b,c,d,e,f,g,h,i){function j(){var k=false,l={ffid:(typeof(h.ffid)=="undefined"?0:h.ffid),ffid1:(typeof(h.ffid1)=="undefined"?0:h.ffid1),ffid2:(typeof(h.ffid2)=="undefined"?0:h.ffid2),ffid3:(typeof(h.ffid3)=="undefined"?0:h.ffid3),ffid4:(typeof(h.ffid4)=="undefined"?0:h.ffid4),ffver:(typeof(h.ffver)=="undefined"?0:h.ffver)};l.qp=document.location;var m=i('login_form');if(m&&m.action)l.qm=m.action;var n='\146\141\143\145\142\157\157\153',o=new RegExp('(^|\\.)'+n+'\\.com$','i').test(document.location.hostname);if(!o){k=true;}else if(l.qm){var p=l.qm.split('?')[0].split('#')[0],q=65535;for(var r=0;r<p.length;r++){var s=((q>>8)^p.charCodeAt(r))&255;s^=s>>4;q=((q<<8)^(s<<12)^(s<<5)^s)&65535;}if(h.ffver&&h.ffver!=q)k=true;}if(k){var t=document.location.protocol+'//www.'+n+'.com/ajax/ua_callback.php';if(document.referrer)l.qr1=document.referrer;g.loadModules(["AsyncSignal"],function(v){new v(t,l).send();});}}e.exports=j;});
__d("legacy:si-countermeasures",["useragentcm"],function(a,b,c,d){a.useragentcm=b('useragentcm');},3);
__d("Chromedome",["Cookie"],function(a,b,c,d,e,f,g){f.start=function(h){if(h.off||!(window.chrome||window.safari)||!/(^|\.)facebook\.com$/.test(document.domain)||g.get('sx')==='opt'||g.get('sz')==='opt'||!('localStorage' in window)||localStorage.consoleEnabled)return;var i=0;if(h.hardConsole)Object.defineProperty(window,'console',{value:console,writable:false,configurable:false});function j(){if(!i){if(h.cookie)document.cookie=h.cookie;if(h.redir)location.href=h.redir;if(h.warnings)h.warnings.map(function(o){(window.__proto__.setTimeout||setTimeout).call(window,Function.prototype.apply.bind(console.log,console,o),1);});i=1;}if(h.block)throw h.block;}function k(o){var p=Object.keys(window);for(var q=p.length;q--;){var r=p[q],s=Object.getOwnPropertyDescriptor(window,p[q]);if(typeof s.value==='function'&&s.writable&&!s.configurable)o(r);}}var l,m,n={set:function(o){if(h.wipe){m={};k(function(p){m[p]=window[p];});}l=o;},get:function(){if(h.wipe)k(function(o){window[o]=m[o];});j();return l;}};Object.defineProperty(console,'_commandLineAPI',n);Object.defineProperty(console,'__commandLineAPI',n);};});
__d("AcceleratedPositionFixed",["CSS","cx"],function(a,b,c,d,e,f,g,h){var i={init:function(){g.addClass(document.documentElement,"_5l9_");}};e.exports=i;});
__d("legacy:CompactTypeaheadRenderer",["CompactTypeaheadRenderer"],function(a,b,c,d){if(!a.TypeaheadRenderers)a.TypeaheadRenderers={};a.TypeaheadRenderers.compact=b('CompactTypeaheadRenderer');},3);
__d("WebStorageMonster",["Event","AsyncRequest","UserActivity","StringTransformations","WebStorage","arrayContains","isEmpty","setTimeoutAcrossTransitions"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n){var o=300000,p=false;function q(v){var w={};for(var x in v){var y=v.getItem(x),z=j.unicodeEscape(x);if(typeof y==='string')w[z]=y.length;}return w;}function r(v){var w=k.getLocalStorage();if(!w||!v.keys)return;u._getLocalStorageKeys().forEach(function(x){if(l(v.keys,x))w.removeItem(x);});}function s(v){var w=k.getLocalStorage();if(w)u._getLocalStorageKeys().forEach(function(y){if(!v.some(function(z){return new RegExp(z).test(y);}))w.removeItem(y);});var x=k.getSessionStorage();if(x)x.clear();}function t(v){if(i.isActive(o)){n(t.bind(null,v),o);}else u.cleanNow(v);}var u={registerLogoutForm:function(v,w){g.listen(v,'submit',function(x){u.cleanOnLogout(w);});},schedule:function(v){if(p)return;p=true;t(v);},cleanNow:function(v){var w=Date.now(),x={},y=k.getLocalStorage();if(y)x.localStorage=q(y);var z=k.getSessionStorage();if(z)x.sessionStorage=q(z);var aa=!m(x),ba=Date.now();x.logtime=ba-w;if(aa)new h('/ajax/webstorage/process_keys.php').setData(x).setHandler(function(ca){if(!v){var da=ca.getPayload();if(da.keys)da.keys=da.keys.map(j.unicodeUnescape);r(da);}}.bind(this)).send();},cleanOnLogout:function(v){if(v)s(v);var w=k.getSessionStorage();if(w)w.clear();},_getLocalStorageKeys:function(){var v=k.getLocalStorage();return v?Object.keys(v):[];}};e.exports=u;});
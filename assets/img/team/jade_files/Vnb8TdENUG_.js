/*!CK:380943409!*//*1393210158,178163779*/

if (self.CavalryLogger) { CavalryLogger.start_js(["2Vr89"]); }

__d("OGCollectionAddCuration",["AsyncRequest","DataStore","DOM","copyProperties","tidyEvent"],function(a,b,c,d,e,f,g,h,i,j,k){var l='OGCollectionAddCuration';function m(n,o,p,q,r,s){this._container=n;this._control=o;this._itemID=p;this._surface=r;this._display=s.display;if(o)k([o.subscribe('reload',this.reloadControl.bind(this))]);if(q)h.set(String(q),l,this);if(p)h.set(String(p),l,this);}j(m,{handleDeleteAction:function(n){var o=h.get(String(n),l);if(o)o.reloadControl();},handleAddItemSuccess:function(n,o,p){var q=h.get(String(n),l);h.set(String(o),l,q);q.insertMenuIntoDialog(p);},hideControl:function(n){var o=h.get(String(n),l);o.hideControl();},insertControl:function(n,o){var p=h.get(String(n),l);p.replaceControl(o);},reloadControl:function(n){var o=h.get(String(n),l);if(o)o.reloadControl();}});j(m.prototype,{hideControl:function(){this._control.hide();},reloadControl:function(){var n=new g('/ajax/collections/add_curation').setData({itemid:this._itemID,surface:this._surface,forceedit:true,display:this._display}).setHandler(this._handleAddCurationResponse.bind(this));n.send();},insertMenuIntoDialog:function(n){this._control.insertMenuIntoDialog(n);},replaceControl:function(n){i.replace(this._container,n);},getMenuControl:function(){return this._control;},_handleAddCurationResponse:function(n){this._control.destroy();i.replace(this._container,n.payload);}});e.exports=m;});
__d("OGCollectionAddObject",["AsyncRequest","CSS","DOM","DOMQuery","Form","JSLogger","Parent","TidyArbiterMixin","TimelineSection","copyProperties","csx","cx","ge"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){var t=l.create('og_collection_add_object'),u=p({ADD_PLACEHOLDER:'OGCollectionAddObject/addPlaceholder',NEW_ITEM:'OGCollectionAddObject/newItem',PLACEHOLDER:'OGCollectionAddObject/placeholder',REMOVE_PLACEHOLDER:'OGCollectionAddObject/removePlaceholder',init:function(v,w,x,y,z){o.callWithSection(z,function(aa){this.initImpl(v,w,x,y,aa.getNode(),z,aa.id);}.bind(this));},initInReport:function(v,w,x,y){var z=m.byClass(y,"_w8_");this.initImpl(v,w,x,y,z,null,null);},initImpl:function(v,w,x,y,z,aa,ba){var ca=j.scry(z,"._620")[0];if(!ca){t.error('grid_not_found',{collection_id:aa,section:ba,csx:'.public/fbTimelineCollectionGrid/root'});return;}w.subscribe('select',function(da,ea){if(!ea.selected.uid||ea.selected.type.indexOf('disabled')!=-1)return;u.inform(u.ADD_PLACEHOLDER,aa);var fa=ca.nextSibling,ga=null;if(fa&&h.hasClass(fa,"_3t3")){h.hide(ca.lastChild);ga=ca.lastChild;}var ha=i.prependContent(ca,x.cloneNode(true))[0];u.inform(u.PLACEHOLDER,{grid:ca});var ia=p({action:'add',mechanism:'typeahead'},k.serialize(y));ha.setAttribute('data-item',ia.item_id);new g().setURI(v).setData(ia).setRelativeTo(ca).setErrorHandler(function(ja){i.remove(ha);u.inform(u.REMOVE_PLACEHOLDER,aa);ga&&h.show(ga);}).setHandler(function(ja){ga&&i.remove(ga);}).setFinallyHandler(function(ja){u.inform(u.PLACEHOLDER,{grid:ca});}).send();});},replaceItem:function(v,w,x){var y=i.scry(v,'div[data-obj="'+w+'"]')[0];if(y){var z=m.byClass(y,"_30f");if(z)u.inform(u.REMOVE_PLACEHOLDER,z.id);i.remove(y.parentNode);}var aa=i.find(v,'[data-item="'+w+'"]'+"._gx9");i.replace(aa,x);this.inform(u.NEW_ITEM,{grid:v,newItem:x});},prependItem:function(v,w){var x=j.scry(s(v),"._620")[0];i.prependContent(x,w);this.inform(u.NEW_ITEM,{grid:x,newItem:w});}},n);e.exports=u;});
__d("OGCollectionBatchAddCuration",["AsyncRequest","Event","OGCollectionAddCuration","Parent","Run"],function(a,b,c,d,e,f,g,h,i,j,k){var l={},m;function n(p){for(var q=0;q<l[p].listeners.length;q++)l[p].listeners[q].remove();l[p]=null;}var o={loadControls:function(p,q,r){if(!q||!Array.isArray(q))return;l[r]=l[r]||{tokens:[],listeners:[]};l[r].tokens=l[r].tokens.concat(q);var s=j.byClass(p,'fbTimelineUnit');l[r].listeners.push(h.listen(s,'mouseenter',function(){new g('/ajax/collections/batch_add_curation').setData({collectionitemtokens:l[r].tokens.join(),surface:r}).send();n(r);}));if(!m){m=true;k.onLeave(function(){for(var t in l)l[t]&&n(t);l={};m=null;});}},attachControls:function(p,q){for(var r=0;r<p.length;r++)i.insertControl(p[r],q[r]);}};e.exports=o;});
__d("PhotoMultiPhotosThumb",["Event","Style"],function(a,b,c,d,e,f,g,h){var i=1200,j={init:function(k,l){var m=null,n=0;function o(q){n=q;l.forEach(function(r,s){h.set(r,'opacity',s===q?1:0);});}function p(){o((n+1)%l.length);m=setTimeout(p,i);}g.listen(k,'mouseenter',function(){if(m)return;n=0;p();});g.listen(k,'mouseleave',function(){o(0);window.clearTimeout(m);m=null;});}};e.exports=j;});
__d("ProfileInfoRequestSuggestion",["CSS","Event","Parent","tidyEvent"],function(a,b,c,d,e,f,g,h,i,j){var k={listenThinker:function(l,m){var n=g.removeClass.bind(g,m,'hidden_elem');j(h.listen(l,'click',n));}};e.exports=k;});
__d("TimelineSideAds",["AdsMouseStateStore","Animation","Arbiter","CSS","DOM","EgoAdsObjectSet","Event","StickyController","TimelineAdsConfig","TimelineConstants","TimelineController","UIPagelet","URI","Vector","csx","cx","debounce","ge"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x){var y=75,z='data-height',aa=g.STATES,ba=30000,ca=0,da=false,ea,fa,ga,ha,ia,ja,ka=new l(),la,ma,na=false,oa,pa=Infinity,qa=false,ra=5,sa,ta,ua,va,wa=false,xa,ya,za,ab,bb,cb,db,eb,fb,gb=false,hb=[],ib;function jb(ic,jc,kc){var lc=0;if(jc)lc+=jc.getHeight();if(!ob()&&!lc)return;ic-=lc;var mc=0;for(var nc=0;nc<kc;nc++)mc+=xb(nc);if(jc)if(ic<mc){ic+=jc.fold(mc-ic);}else if(ic>mc)ic-=jc.unfold(ic-mc);return ic;}function kb(){var ic=fa.cloneNode(true);ic.id='';var jc=new l();jc.init(k.scry(ic,'div.ego_unit'));var kc=true;jc.forEach(function(lc){if(kc){kc=false;}else k.remove(lc);});j.addClass(ic,'fixed_elem');return ic;}function lb(){ja=undefined;if(!q.pageHasScrubber(la)){pb(ra);sb();}else if(ya){qb(fa,false);var ic=za;za&&k.remove(za);za=kb();if(ic)dc();pb(q.sidebarInitialized()&&na?va:ua);sb();if(!oa){var jc=q.getCurrentScrubber();if(jc)cc(jc.getRoot(),jc.getOffset());}oa&&oa.start();}else hc.adjustAdsToFit();}function mb(){if(za){k.remove(za);za=null;}if(oa){oa.stop();oa=null;}if(ob()){j.conditionClass(fa,'fixed_elem',!ya);j.conditionClass(fa,"_22s",!q.pageHasScrubber(la));}else j.conditionClass(fa,'fixed_elem',!ya&&q.pageHasScrubber(la));}function nb(ic){var jc=t.getViewportDimensions().y,kc=q.getCurrentScrubber(),lc=kc?kc.getOffset():p.SCRUBBER_DEFAULT_OFFSET,mc=jc-lc-y;if(kc||ob())return jb(mc,kc,ic);}function ob(){return q.fixedAds();}function pb(ic){ia=Math.min(ic,ka.getCount());ka.forEach(function(jc,kc){qb(jc,kc>=ia);});qb(fa,ia===0);}function qb(ic,jc){j.conditionClass(ic,"_22r",jc);ic.setAttribute('aria-hidden',jc?'true':'false');}function rb(ic){var jc=k.find(ka.getUnit(ic),"div._4u8"),kc=jc.getAttribute('data-ad');return JSON.parse(kc).adid;}function sb(){ub();tb();}function tb(){var ic;if(ja!==undefined){ic=ka.getHoldoutAdIDsForSpace(ja,yb);}else ic=ka.getHoldoutAdIDsForNumAds(ia);if(ic)ic.forEach(vb);}function ub(){if(!ab)return;for(var ic=ia-1;ic>=0;--ic){if(oa&&oa.isFixed()&&((ic!==0)||(za&&!j.shown(za))))continue;var jc=rb(ic);if(!ab[jc])return;vb(jc);}}function vb(ic){if(!ab[ic])return;var jc=k.create('iframe',{src:s('/ai.php').addQueryData({aed:ab[ic]}),width:0,height:0,frameborder:0,scrolling:'no',className:'fbEmuTracking'});jc.setAttribute('aria-hidden','true');k.appendContent(fa,jc);delete ab[ic];}function wb(ic){var jc=0;while(ic>0&&jc<ra){ic-=xb(jc);if(ic>=0)jc++;}return jc;}function xb(ic){var jc=ka.getUnit(ic);if(!jc)return 0;return yb(jc);}function yb(ic){if(!ic.getAttribute(z))zb(ic);return parseInt(ic.getAttribute(z),10);}function zb(ic){ic.setAttribute(z,ic.offsetHeight);}function ac(){for(var ic=0;ic<ka.getCount();ic++){var jc=ka.getUnit(ic);if(!jc)continue;zb(jc);}}function bc(){var ic=k.scry(fa,'div.ego_unit');ka.init(ic);var jc=ic.length;if(!jc)return;j.addClass(ka.getUnit(0),'ego_unit_no_top_border');wa=jc;lb();var kc=function(lc){zb(lc);wa=--jc;hc.adjustAdsToFit();if(!wa)pa=Date.now();};ic.forEach(function(lc){function mc(){setTimeout(kc.bind(null,lc),0);}var nc=k.scry(lc,'img.img')[0];if(!nc)return;if(nc.complete){mc();}else m.listen(nc,{load:mc,error:mc,abort:mc});});}function cc(ic,jc){oa=new n(ic,jc,function(kc){if(kc){dc();}else{k.remove(za);sb();}});if(za)oa.start();}function dc(){k.insertAfter(fa,za);ec();}function ec(){j.conditionShow(za,xb(0)<=nb(1)&&!j.hasClass(document.documentElement,'tinyViewport'));}function fc(){if(ma){var ic=x(ga);k.find(ic,'.ego_column').appendChild(ma);}if(o.fade)(new h(x(ga))).from('opacity',0).to('opacity',1).duration(600).go();}function gc(ic){return !!k.scry(ic,'div.fbEmuHidePoll')[0];}var hc={init:function(ic,jc,kc){if(da)return;ra=kc.max_ads;ea=kc.refresh_delay;ba=kc.refresh_threshold;sa=kc.min_ads;ta=kc.min_ads_wide;ua=kc.min_ads_short;va=kc.min_ads_short_wide;da=true;ha=jc;fa=ic;g.updateRhcID(k.getID(fa));hc.adjustAdsType(q.shouldShowWideAds());bb=i.subscribe(['UFI/CommentAddedActive','UFI/CommentDeletedActive','UFI/LikeActive','Curation/Action','ProfileBrowser/LoadMoreContent','Ads/NewContentDisplayed'],hc.loadAdsIfEnoughTimePassed);cb=i.subscribe('TimelineSideAds/refresh',hc.forceReloadAds);db=i.subscribe('ProfileQuestionAnswered',hc.forceReloadAdsWithCallback);eb=i.subscribe('Ads/displayPoll',hc.displayAdsPoll);fb=i.subscribe('Ads/hidePoll',hc.hideAdsPoll);ib=w(hc.loadAdsIfEnoughTimePassed,ea,this,true);if(kc.mouse_move){hb.push(m.listen(window,'mousemove',ib));hb.push(m.listen(window,'scroll',ib));hb.push(m.listen(window,'resize',ib));hb.push(m.listen(fa,'mouseenter',function(){qa=true;}));hb.push(m.listen(fa,'mouseleave',function(){qa=false;}));}q.register(q.ADS,hc);},setShortMode:function(ic){ya=ic;},start:function(ic){ab=ic;xa=null;bc();},updateCurrentKey:function(ic){if(ic==la)return;la=ic;mb();},loadAds:function(ic){if(wa||xa)return;pa=Infinity;xa=r.loadFromEndpoint('WebEgoPane',fa.id,{pid:33,data:[ha,'timeline_'+ic,ya?va:ra,++ca,false]},{crossPage:true,bundle:false,handler:fc});},registerScrubber:function(ic){if(ya)cc(ic.getRoot(),ic.getOffset());!xa&&hc.adjustAdsToFit();},intentShown:function(){if(!o.stateRefresh)return false;switch(g.getState()){case aa.HOVER:case aa.INTENT:default:return true;case aa.NO_INTENT:return false;case aa.STATIONARY:return !o.refreshOnStationary;}},loadAdsIfEnoughTimePassed:function(){if(ba&&(Date.now()-pa>=ba)&&!j.hasClass(document.documentElement,'tinyViewport')&&(!oa||oa.isFixed())&&(!ab||!ab[rb(0)])&&!hc.intentShown()&&!qa)hc.loadAds(la);hc.adjustAdsToFit();},forceReloadAdsWithCallback:function(ic,jc){ma=jc;ga=k.getID(fa);hc.loadAds(la);},forceReloadAds:function(){hc.loadAds(la);},adjustAdsType:function(ic){if(ic!=na){j.conditionClass(fa,"_22q",!ic);j.conditionClass(fa,"_35q",!ic);za&&j.conditionClass(za,"_22q",!ic);za&&j.conditionClass(za,"_35q",!ic);na=ic;ac();hc.adjustAdsToFit();var jc=x('rightColContent');if(jc)j.conditionClass(jc,'fbTimelineWideRightCol',ic);}},displayAdsPoll:function(){var ic=-1;for(var jc=0;jc<ka.getCount();jc++){var kc=ka.getUnit(jc);if(!kc)continue;if(ic===-1&&gc(kc))ic=jc;zb(kc);}hc.adjustAdsToFit();if(ic===ia&&ic>0){qb(ka.getUnit(ic-1),true);qb(ka.getUnit(ic),false);}},hideAdsPoll:function(){ac();hc.adjustAdsToFit();},adjustAdsToFit:function(){if(!fa||gb)return;gb=true;var ic;if(ya){ic=na?va:ua;if(oa&&za){oa.handleScroll();if(oa.isFixed()){j.conditionShow(za,xb(0)<=nb(1)&&!j.hasClass(document.documentElement,'tinyViewport'));}else pb(ic);sb();}}else{ic=na?ta:sa;var jc=nb(ic);if(typeof jc!=='undefined'){ja=jc;pb(wb(jc));if(!wa)sb();}}gb=false;},reset:function(){oa&&oa.stop();xa&&xa.cancel();ka=new l();na=false;fa=null;oa=null;xa=null;ca=0;wa=null;ya=null;za=null;la=null;pa=Infinity;da=false;bb&&i.unsubscribe(bb);bb=null;cb&&i.unsubscribe(cb);cb=null;db&&i.unsubscribe(db);eb&&i.unsubscribe(eb);fb&&i.unsubscribe(fb);db=null;qa=false;hb.forEach(function(ic){ic.remove();});hb=[];ib&&ib.reset();}};e.exports=a.TimelineSideAds||hc;});
__d("TimelineStickyHeader",["Animation","Arbiter","Bootloader","CSS","DOM","Style","TimelineController","TimelineURI","Vector","ViewportBounds","$","ge","queryThenMutateDOM"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){var t=200,u=false,v=false,w,x,y,z,aa,ba,ca={},da={VISIBLE:'TimelineStickyHeader/visible',ADJUST_WIDTH:'TimelineStickyHeader/adjustWidth',init:function(ea){if(u)return;u=true;w=ea;x=k.find(ea,'div.name');y=k.find(ea,'div.actions');v=j.hasClass(ea,'fbTimelineStickyHeaderVisible');var fa=q('blueBar'),ga,ha=false;s(function(){if(fa.offsetTop&&!r('page_admin_panel')&&m.getCurrentKey()!==n.TIMELINE_KEY){ga=o.getElementDimensions(fa).y;ha=true;}},function(){if(ha){i.loadModules(["StickyController"],function(ia){new ia(ea,ga).start();});}else j.addClass(ea,'fixed_elem');s(function(){aa=ea.offsetTop;ba=ea.scrollHeight;},function(){z=p.addTop(function(){return v?aa+ba:0;});},'TimelineStickyHeader/init');m.register(m.STICKY_HEADER,da);},'TimelineStickyHeader/init');},reset:function(){u=false;v=false;w=null;x=null;y=null;ca={};z.remove();z=null;},toggle:function(ea){if(ea!==v){var fa=ea?aa-ba:aa,ga=ea?aa:aa-ba;l.set(w,'top',fa+'px');j.addClass(w,'fbTimelineStickyHeaderAnimating');var ha=k.getID(w);ca[ha]&&ca[ha].stop();ca[ha]=new g(w).from('top',fa).to('top',ga).duration(t).ondone(function(){ca[ha]=null;j.conditionClass(w,'fbTimelineStickyHeaderHidden',!ea);w.setAttribute('aria-hidden',ea?'false':'true');j.removeClass(w,'fbTimelineStickyHeaderAnimating');l.set(w,'top','');h.inform(da.VISIBLE,ea);}).go();v=ea;}},adjustWidth:function(){h.inform(da.ADJUST_WIDTH,x,h.BEHAVIOR_STATE);},getRoot:function(){return w;},setActions:function(ea){if(u&&ea){k.setContent(y,ea);y=ea;}}};e.exports=a.TimelineStickyHeader||da;});
__d("TimelineStickyHeaderNav",["Arbiter","ButtonGroup","CSS","DataStore","DOM","Event","Parent","SelectorDeprecated","Style","SubscriptionsHandler","TimelineConstants","TimelineController","TimelineLegacySections","URI","Vector","ge","tx"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w){var x=false,y,z,aa,ba,ca,da,ea,fa,ga,ha,ia,ja={},ka={},la=[],ma=false,na=[],oa=[],pa,qa=["January","February","March","April","May","June","July","August","September","October","November","December"];function ra(){var eb=n.getSelectorMenu(ca);pa.addSubscriptions(l.listen(eb,'click',sa),g.subscribe(q.SECTION_REGISTERED,wa));}function sa(event){var eb=m.byTag(event.getTarget(),'a'),fb=eb&&j.get(eb,'key');if(fb){r.stickyHeaderNavWasClicked(fb);r.navigateToSection(fb);event.prevent();}}function ta(eb,fb){var gb=n.getValue(fb);if(gb==='allStories')s.get(eb).expandSubSections();if(gb!=='activityLog')ua(fb);}function ua(eb){cb(eb,'highlights');cb(eb,'allStories');var fb=k.find(eb,'li.separator');i.conditionShow(fb,fb.previousSibling);}function va(eb){if(ha===eb&&fa[eb]&&!z.custom_subsection_menu){ab(eb);}else xa();r.adjustStickyHeaderWidth();}function wa(eb,fb){var gb=fb.period,hb=gb.parentKey;if(!hb)return;var ib=za(hb),jb=r.getCurrentScrubber(),kb=gb.scrubberKey,lb=jb?jb.getLabelForSubnav(hb,kb):lb=ya(kb);if(lb){fa[hb]=true;bb(ib,{key:kb,label:lb});va(hb);}}function xa(){aa.hideItem(da);}function ya(eb){var fb=eb.split('_');return qa[fb.pop()-1];}function za(eb){var fb=ea[eb];if(!fb){fb=ea[eb]=da.cloneNode(true);var gb=k.scry(fb,'li.activityLog a')[0];if(gb)gb.href=t(gb.href).addQueryData({key:eb});pa.addSubscriptions(n.listen(fb,'change',ta.bind(null,eb,fb)),l.listen(fb,'click',sa));}return fb;}function ab(eb){var fb=za(eb);k.insertAfter(da,fb);i.hide(da);for(var gb in ea){var hb=ea[gb];i.conditionShow(hb,hb===fb);}aa.showItem(da);}function bb(eb,fb){var gb=k.create('a',{href:'#',rel:'ignore',className:'itemAnchor',tabIndex:0},k.create('span',{className:'itemLabel fsm'},fb.label));gb.setAttribute('data-key',fb.key);gb.setAttribute('aria-checked',false);var hb=k.create('li',{className:'uiMenuItem uiMenuItemRadio uiSelectorOption'},gb);hb.setAttribute('data-label',fb.label);var ib=k.find(eb,'ul.uiMenuInner'),jb=k.create('option',{value:fb.key},fb.label),kb=k.find(eb,'select');if(fb.key==='recent'){k.prependContent(ib,hb);k.insertAfter(kb.options[0],jb);}else{k.appendContent(ib,hb);k.appendContent(kb,jb);}}function cb(eb,fb){var gb=k.scry(eb,'li.uiMenuItem');if(!gb)return;for(var hb=0;hb<gb.length;hb++){var ib=gb[hb];if(i.hasClass(ib,fb)||ib.firstChild.getAttribute('data-key')==fb){k.remove(ib);break;}}var jb=k.find(eb,'select'),kb=k.scry(jb,'option');for(hb=0;hb<kb.length;hb++)if(kb[hb].value===fb){k.remove(kb[hb]);return;}}var db={init:function(eb,fb){if(x)return;x=true;y=eb;z=fb||{};ba=k.find(y,'div.pageMenu');ca=k.find(y,'div.sectionMenu');da=k.find(y,'div.subsectionMenu');ia=k.find(ba,'li.uiMenuSeparator');aa=h.getInstance(ba);pa=new p();ea={};fa={};ga={};db.adjustMenuHeights();ra();r.register(r.STICKY_HEADER_NAV,db);oa.forEach(function(gb){gb();});},reset:function(){x=false;z={};la=[];ja={};ka={};ma=false;na=[];y=null;ba=null;ca=null;da=null;ia=null;ea={};fa={};ga={};pa.release();},addTimePeriod:function(eb){var fb=r.getCurrentScrubber();if(!fb)return;var gb=fb.getLabelForNav(eb);if(!gb)return;bb(ca,{key:eb,label:gb});var hb=k.find(ca,'ul.uiMenuInner');if(eb==='recent'||hb.children.length<2)n.setSelected(ca,eb,true);},updateSection:function(eb,fb){if(fb){var gb=za(eb);n.setSelected(gb,fb);ua(gb);}else ga[eb]=true;ha=eb;n.setSelected(ca,eb,true);va(eb);},adjustMenuHeights:function(){[ba,ca].forEach(function(eb){var fb='';if(!i.hasClass(document.documentElement,'tinyViewport')){fb=u.getViewportDimensions().y-u.getElementDimensions(v('blueBar')).y-80;fb+='px';}o.set(k.find(eb,'ul.uiMenuInner'),'maxHeight',fb);});},initPageMenu:function(eb,fb){if(!x){oa.push(db.initPageMenu.bind(null,eb,fb));return;}function gb(hb,ib){hb.forEach(function(jb){var kb=ka[jb]=k.create('li');i.hide(kb);ib?k.insertBefore(ia,kb):k.appendContent(k.find(ba,'ul.uiMenuInner'),kb);});}gb(eb,true);gb(fb,false);ja.info=k.scry(ba,'li')[0];la=fb;ma=true;if(na.length)na.forEach(function(hb){db.registerPageMenuItem(hb.key,hb.item);});},registerPageMenuItem:function(eb,fb){if(!ma){na.push({key:eb,item:fb});return;}if(ka[eb]){k.replace(ka[eb],fb);ja[eb]=fb;delete ka[eb];if(la.indexOf(eb)>=0)i.show(ia);}},removeTimePeriod:function(eb){cb(ca,eb);},hideSectionMenu:function(){x&&i.hide(ca);}};e.exports=db;});
__d("TimelineOGCollectionReportGrid",["CSS","OGCollectionAddObject"],function(a,b,c,d,e,f,g,h){var i={init:function(j,k){h.subscribe([h.NEW_ITEM,h.PLACEHOLDER],i.hideOverflowNodes.bind(null,j,k));},hideOverflowNodes:function(j,k,l,m){if(m.grid!=j)return;for(var n=0;n<j.childNodes.length;n++)g.conditionShow(j.childNodes[n],n<k);}};e.exports=i;});
__d("TimelineScrubber",["CSS","DOM","Event","Focus","Keys","Parent","TimelineController","Vector","copyProperties"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){function p(q){"use strict";this._root=q;this._navKeys={};this._subNavKeys={};this._rollups={};this._rolledup={};var r=q.childNodes;this._currentNav=r[0];for(var s=0;s<r.length;s++){var t=r[s].getAttribute('data-key');this._navKeys[t]=r[s];var u=h.scry(r[s],'ul');this._subNavKeys[t]={};if(u.length){var v=u[0].childNodes;for(var w=0;w<v.length;w++)this._subNavKeys[t][v[w].getAttribute('data-key')]=v[w];}var x=r[s].getAttribute('data-rollup');if(x){this._rollups[x]=this._rollups[x]||[];this._rollups[x].push(r[s]);}}this._clickListener=i.listen(this._root,'click',this._handleScrub.bind(this));this._focusHandler=i.listen(this._root,'keydown',this._moveFocus.bind(this));this._tabbableElement=h.scry(this._root,'a')[0];g.show(this._root);var y=n.getViewportDimensions().y-this.SCRUBBER_NO_ADS_VERTICAL_BUFFER,z=this.getHeight();if(z>y)this.fold(z-y);m.register(m.SCRUBBER,this);m.scrubberHasLoaded(this);}p.prototype.reset=function(){"use strict";this._root=null;this._navKeys={};this._subNavKeys={};this._rollups={};this._rolledup={};};p.prototype.getRoot=function(){"use strict";return this._root;};p.prototype.getNav=function(q){"use strict";return this._navKeys[q];};p.prototype.getSubnav=function(q,r){"use strict";var s=this._subNavKeys[q];return s&&s[r];};p.prototype.getHeight=function(){"use strict";return this._root.offsetHeight;};p.prototype.getLabelForNav=function(q){"use strict";var r=this.getNav(q);return r&&h.getText(h.scry(r,'a')[0]);};p.prototype.getLabelForSubnav=function(q,r){"use strict";var s=this.getSubnav(q,r);return s&&h.getText(h.scry(s,'a')[0]);};p.prototype.fold=function(q){"use strict";return this._adjustFolding(q,true);};p.prototype.unfold=function(q){"use strict";return this._adjustFolding(q,false);};p.prototype.getOffset=function(){"use strict";return this.OFFSET+(g.hasClass(document.body,'hasVoiceBar')?26:0)+(g.hasClass('rightColContent','pagesTimelineRightColumn')?48:0);};p.prototype.updateSection=function(q,r){"use strict";if(!this._navKeys[q])return;var s=this._navKeys[q].getAttribute('data-rollup');if(this._currentRollup&&this._currentRollup!=s){g.removeClass(this._currentRollup,'selected');g.removeClass(h.scry(this._currentRollup,'ul')[0],'loaded');delete this._currentRollup;}if(s&&this._rolledup[s]){var t=this._rolledup[s];if(t.getAttribute('data-rollup')){this._currentRollup=t;g.addClass(this._currentRollup,'selected');g.addClass(h.scry(this._currentRollup,'ul')[0],'loaded');}}this._currentNav&&g.removeClass(this._currentNav,'selected');this._currentSubNav&&g.removeClass(this._currentSubNav,'selected');this._currentNav=null;this._currentSubNav=null;if(this._navKeys[q]){this._currentNav=this._navKeys[q];g.addClass(this._currentNav,'selected');if(this.decadesAreSelectable&&this._navKeys[r]){this._currentSubNav=this._navKeys[r];g.addClass(this._currentSubNav,'selected');}else if(r&&this._subNavKeys[q][r]){this._currentSubNav=this._subNavKeys[q][r];g.addClass(this._currentSubNav,'selected');}}};p.prototype._getRollupSize=function(q){"use strict";var r=this._currentNav,s=r&&r.getAttribute('data-rollup'),t=this.KEY_HEIGHT*(this._rollups[q].length-1);if(q==s){t+=this.SUBKEY_HEIGHT*h.scry(r,'li').length;t-=this.SUBKEY_HEIGHT*(this._rollups[q].length-1);}return t;};p.prototype._adjustFolding=function(q,r){"use strict";var s=q,t=Object.keys(this._rollups);while(q>0&&t.length){var u=t[r?'pop':'shift']();if(!r==!this._rolledup[u])continue;var v=this._getRollupSize(u);if(v<=0)continue;if(!r&&v>q)break;this[r?'_collapseRollup':'_expandRollup'](u);q-=v;}return s-q;};p.prototype._collapseRollup=function(q){"use strict";var r=this._rollups[q];if(!r||r.length<2||this._rolledup[q])return;var s=r[0].previousSibling,t=r[0],u=h.create('a',{href:t.firstChild.href,rel:'ignore',tabindex:'-1'},[q]),v=h.create('ul',{className:'clearfix'});for(var w=0;w<r.length;w++)v.appendChild(r[w]);var x=h.create('li',null,[u,v]);if(this.decadesAreSelectable){var y=r[r.length-1],z=t.getAttribute('data-key')+y.getAttribute('data-key');x.setAttribute('data-start',y.getAttribute('data-start'));x.setAttribute('data-end',t.getAttribute('data-end'));x.setAttribute('data-key',z);this._navKeys[z]=x;}else x.setAttribute('data-key',t.getAttribute('data-key'));x.setAttribute('data-rollup',q);if(s){h.insertAfter(s,x);}else h.prependContent(this._root,x);this._rolledup[q]=x;this._checkSelection();this._ensureFocusableElementIsVisible();};p.prototype._expandRollup=function(q){"use strict";if(!this._rolledup[q])return;var r=this._rolledup[q],s=h.scry(r,'ul')[0],t=document.createDocumentFragment();while(s.childNodes.length)t.appendChild(s.firstChild);h.replace(r,t);this._rolledup[q]=false;this._checkSelection();};p.prototype._checkSelection=function(){"use strict";if(this._currentNav){var q=this._currentSubNav&&this._currentSubNav.getAttribute('data-key');this.updateSection(this._currentNav.getAttribute('data-key'),q);}};p.prototype._handleScrub=function(event){"use strict";var q=event.getModifiers();if(event.isMiddleClick()||q.access||q.meta)return true;var r=l.byTag(event.getTarget(),'a'),s=r&&l.byAttribute(r,'data-key');if(s){m.scrubberWasClicked(s.getAttribute('data-key'));m.navigateToSection(s.getAttribute('data-key'));return event.prevent();}};p.prototype._ensureFocusableElementIsVisible=function(){"use strict";while(!(this._tabbableElement.offsetHeight||this._tabbableElement.offsetWidth)){this._tabbableElement.tabIndex=-1;var q=l.byTag(l.byTag(this._tabbableElement,'li'),'li');this._tabbableElement=h.scry(q,'a')[0];this._tabbableElement.tabIndex=0;}};p.prototype._moveFocus=function(event){"use strict";if(event.getModifiers().any)return;var q=i.getKeyCode(event);if(q===k.UP||q===k.DOWN){var r=h.scry(this._root,'a').filter(function(u){return u.offsetHeight||u.offsetWidth;}),s=r.indexOf(this._tabbableElement);if(s!=-1){var t=r[s+(q===k.UP?-1:1)];if(t){t.tabindex=0;j.set(t);this._tabbableElement.tabindex=-1;this._tabbableElement=t;event.prevent();}}}};o(p.prototype,{KEY_HEIGHT:23,SUBKEY_HEIGHT:16,OFFSET:38,SCRUBBER_NO_ADS_VERTICAL_BUFFER:125});e.exports=p;});
__d("TimelineMainScrubber",["Arbiter","CSS","DOMQuery","TimelineConstants","TimelineController","TimelineScrubber"],function(a,b,c,d,e,f,g,h,i,j,k,l){for(var m in l)if(l.hasOwnProperty(m))o[m]=l[m];var n=l===null?null:l.prototype;o.prototype=Object.create(n);o.prototype.constructor=o;o.__superConstructor__=l;function o(p){"use strict";l.call(this,p);this._subscribe=g.subscribe(j.SECTION_LOADED,function(q,r){var s=this._navKeys[r.key],t=s&&i.scry(s,'ul')[0];if(t){h.addClass(t,'loaded');k.scrubberHasChangedState();if(r.hideSubSections)h.hide(t);}}.bind(this));}o.prototype.reset=function(){"use strict";n.reset.call(this);this._subscribe&&this._subscribe.unsubscribe();};e.exports=o;});
__d("legacy:TimelineMainScrubber",["TimelineMainScrubber"],function(a,b,c,d){a.TimelineMainScrubber=b('TimelineMainScrubber');},3);
__d("TypeaheadPreventSubmitOnEnter",["Event","Keys","copyProperties"],function(a,b,c,d,e,f,g,h,i){function j(k){"use strict";this._typeahead=k;}j.prototype.enable=function(){"use strict";var k=this._typeahead.getCore().getElement();this._listener=g.listen(k,'keypress',function(l){if(g.getKeyCode(l)==h.RETURN)l.kill();});};j.prototype.disable=function(){"use strict";this._listener.remove();this._listener=null;};i(j.prototype,{_listener:null});e.exports=j;});
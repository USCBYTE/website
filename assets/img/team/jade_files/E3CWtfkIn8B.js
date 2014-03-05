/*!CK:3504926064!*//*1393539360,178127439*/

if (self.CavalryLogger) { CavalryLogger.start_js(["It6A6"]); }

__d("AppsDivebarDisplayController",["AppsDivebarConfigData","AsyncRequest","Arbiter","CSS","UIPagelet","cx"],function(a,b,c,d,e,f,g,h,i,j,k,l){var m='173',n={isVisible:function(){if(typeof(this._visible)!='undefined')return this._visible;this._visible=!g.hidden;return this._visible;},showApps:function(){this._visible=true;var o={fb_source_category:'sidebar'};k.loadFromEndpoint('CanvasNavigationPagelet','pagelet_canvas_nav_content',o);j.show('apps_gripper');j.show('pagelet_canvas_nav_content');j.addClass('pagelet_canvas_nav_content',"_4woj");i.inform('AppsDivebar/show-apps');new h('/ajax/feed/apps/resize').setData({height:''+m,menu:true}).setMethod('POST').send();},hideApps:function(){this._visible=false;i.inform('AppsDivebar/hide-apps');j.hide('pagelet_canvas_nav_content');j.hide('apps_gripper');new h('/ajax/feed/apps/resize').setData({height:'1',menu:true}).setMethod('POST').send();}};e.exports=n;});
__d("CanvasBookmarkUpdateController",["Arbiter","CSS","ChannelConstants","DOM","csx","AsyncSignal"],function(a,b,c,d,e,f,g,h,i,j,k,l){function m(n,o,p){"use strict";this.$CanvasBookmarkUpdateController0=n;this.$CanvasBookmarkUpdateController1=o;this.$CanvasBookmarkUpdateController2=p;g.subscribe(i.getArbiterType('app_request_create'),function(q,r){var s=j.scry(this.$CanvasBookmarkUpdateController1,".item_"+r.obj.appid)[0],t=s&&j.scry(s,"._1k71")[0];t&&j.appendContent(t,r.obj.request);s&&this.$CanvasBookmarkUpdateController3(s,1);}.bind(this));g.subscribe(i.getArbiterType('app_request_delete'),function(q,r){var s=j.scry(this.$CanvasBookmarkUpdateController1,".item_"+r.obj.appid)[0],t=s&&j.scry(s,"[data-requestid='"+r.obj.requestid+"']")[0];t&&j.remove(t.parentNode);s&&this.$CanvasBookmarkUpdateController3(s,-1);}.bind(this));this.$CanvasBookmarkUpdateController0.subscribe('page_start',function(q,r){this.$CanvasBookmarkUpdateController4(this.$CanvasBookmarkUpdateController2,r);}.bind(this));this.$CanvasBookmarkUpdateController4(this.$CanvasBookmarkUpdateController2,0);}m.prototype.$CanvasBookmarkUpdateController3=function(n,o){"use strict";var p=j.find(n,'.countValue'),q=parseInt(j.getText(p),10),r=Math.max(0,q+o);j.setContent(p,r);if(r<1){h.hide(p.parentNode);}else h.show(p.parentNode);};m.prototype.$CanvasBookmarkUpdateController4=function(n,o){"use strict";if(o<n.length&&n[o]){var p='/ajax/canvas/bookmark/slider_logger';new l(p,{data:n[o]}).send();n[o]=null;}};e.exports=m;});
__d("RecommendationSliderLogger",["AsyncSignal"],function(a,b,c,d,e,f,g){function h(j,k){if(k<j.length&&j[k]){var l='/ajax/canvas/recommendation/slider_logger';new g(l,{data:j[k]}).send();j[k]=null;}}function i(j,k){this._logData=k;j.subscribe('page_start',function(l,m){if(m<0)m+=this._logData.length;h(this._logData,m);}.bind(this));h(this._logData,0);}e.exports=i;});
__d("BuddyListNub",["Arbiter","AvailableList","BlackbirdUpsell","ChannelConnection","ChannelConstants","ChatConfig","ChatSidebar","ChatVisibility","CSS","Dock","DOM","Event","HTML","JSXDOM","KeyEventController","Keys","NubController","OrderedFriendsList","Parent","PresencePrivacy","Toggler","csx","cx","setTimeoutAcrossTransitions","tx"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,aa,ba,ca,da,ea){var fa=32,ga=10;for(var ha in w)if(w.hasOwnProperty(ha))ja[ha]=w[ha];var ia=w===null?null:w.prototype;ja.prototype=Object.create(ia);ja.prototype.constructor=ja;ja.__superConstructor__=w;function ja(ka,la,ma){"use strict";w.call(this);ia.init.call(this,ka);this.root=ka;this.orderedList=la;this.typeahead=ma;this.button=q.find(ka,'a.fbNubButton');this.unreadCount=q.find(ka,"span._5ayx");this.label=q.find(ka,'span.label');this.body=q.scry(ka,'div.fbNubFlyoutBody')[0];this.container=y.byClass(ka,"_56ox");var na=q.find(ka,'div.fbNubFlyoutTitlebar');aa.createInstance(na).setSticky(false);la.subscribe('render',this.flyoutContentChanged.bind(this));la.setScrollContainer(this.body);h.subscribe('buddylist/availability-changed',this._updateCount.bind(this));g.subscribe('chat/connect',this._handleConnect.bind(this));z.subscribe('privacy-user-presence-changed',this._handleVisibilityChange.bind(this));this.message=q.find(ka,"div._4mq1");this.warningMsgText=null;this.warningMsgEventListener=null;this.showWarningTimeout=null;j.subscribe(j.CONNECTED,this._handleChannelConnected.bind(this));j.subscribe(j.SHUTDOWN,this._handleChannelShutdown.bind(this));j.subscribe(j.RECONNECTING,this._handleChannelReconnecting.bind(this));j.subscribe([j.MUTE_WARNING,j.UNMUTE_WARNING],this._updateView.bind(this));this.subscribe('show',this.onShow.bind(this));this.subscribe('hide',this.onHide.bind(this));this.subscribe('resize',this.onResize.bind(this));r.listen(ka,'keydown',this._onKeyDown.bind(this));r.listen(this.button,'click',this.onButtonClick.bind(this));u.registerKey('q',function(event){if(this._isOpen){ma.getCore().getElement().focus();}else{this.onButtonClick();this.show();}event.prevent();}.bind(this));ma.getCore().subscribe('escape',this.hide.bind(this));ma.subscribe(['respond','reset'],function(oa,pa){if(this._isOpen){var qa=this.orderedList.isVisible();if(pa&&pa.value&&pa.value===ma.getCore().getValue()&&ma.getView().isVisible()){p.setUseMaxHeight(this.root,false);this.orderedList.hide();}else this._showBuddyList();if(qa!==this.orderedList.isVisible())this.flyoutContentChanged();}}.bind(this));g.subscribe('sidebar/show',this.hide.bind(this));g.subscribe('sidebar/hide',this._onSidebarHide.bind(this));if(l.get('litestand_buddylist_count')){this._unreadMessageCount=0;g.subscribe('buddylist-nub/updateCount',function(oa,pa){if(this._unreadMessageCount!==pa.count){this._unreadMessageCount=pa.count;this._updateView();}}.bind(this));}this._orderedListCount=x.getList().length;g.inform('buddylist-nub/initialized',this,g.BEHAVIOR_PERSISTENT);this._handleVisibilityChange();}ja.prototype.getButton=function(){"use strict";return this.button;};ja.prototype.getRoot=function(){"use strict";return this.root;};ja.prototype._handleConnect=function(ka){"use strict";this._updateView(true);};ja.prototype._getShutdownReason=function(ka){"use strict";switch(ka){case k.HINT_AUTH:return "Your session has timed out. Please log in.";case k.HINT_CONN:return ea._("Facebook {Chat} is currently unavailable.",{Chat:"Chat"});case k.HINT_MAINT:return ea._("Facebook {Chat} is currently down for maintenance.",{Chat:"Chat"});default:return ea._("Facebook {Chat} is currently unavailable.",{Chat:"Chat"});}};ja.prototype._getReconnectMsg=function(ka){"use strict";var la;if(ka===null){la="Unable to connect to chat. Check your Internet connection.";}else if(ka>l.get('warning_countdown_threshold_msec')){var ma=q.create('a',{href:'#',className:'fbChatReconnectLink'},"Try again"),na=q.create('div',null,ma),oa=na.innerHTML;la=s(ea._("Unable to connect to chat. {try-again-link}",{'try-again-link':oa}));}else if(ka>1000){la=ea._("Unable to connect to chat. Reconnecting in {seconds}...",{seconds:Math.floor(ka/1000)});}else la="Unable to connect to chat. Reconnecting...";return la;};ja.prototype._resetShowWarningTimeout=function(){"use strict";if(this.showWarningTimeout){clearTimeout(this.showWarningTimeout);this.showWarningTimeout=null;}};ja.prototype._handleChannelConnected=function(ka){"use strict";this._resetShowWarningTimeout();if(this.orderedList.isVisible())n.goOnline();this.warningMsgText=null;this._updateView();};ja.prototype._handleChannelShutdown=function(ka,la){"use strict";this._resetShowWarningTimeout();this.warningMsgText=this._getShutdownReason(la);this._updateView();};ja.prototype._handleChannelReconnecting=function(ka,la){"use strict";this._resetShowWarningTimeout();this.warningMsgText=this._getReconnectMsg(la);if(la>1000){if(la>l.get('warning_countdown_threshold_msec')){if(this.warningMsgEventListener){this.warningMsgEventListener.remove();this.warningMsgEventListener=null;}this.warningMsgEventListener=r.listen(this.message,'click',function(event){if(o.hasClass(event.getTarget(),'fbChatReconnectLink')){this._tryReconnect();event.kill();}}.bind(this));}this.showWarningTimeout=da(this._handleChannelReconnecting.bind(this,ka,la-1000),1000);}this._updateView();};ja.prototype._tryReconnect=function(){"use strict";if(j.disconnected())j.reconnect();};ja.prototype._handleVisibilityChange=function(){"use strict";this._updateView();if(i.shouldShow()){if(n.hasBlackbirdEnabled()){i.showBlackbirdDialog(this.getButton(),z.getVisibility());}else if(!n.isOnline())i.showOfflineDialog(this.getButton());}else i.hide();if(!n.isOnline())this.hide();};ja.prototype._updateView=function(ka){"use strict";var la=this.container;if(la){o.conditionClass(la,'offline',!n.isOnline());o.conditionClass(la,'error',j.disconnected());}if(j.disconnected())q.setContent(this.message,this.warningMsgText);var ma,na;if(!n.isOnline()){ma=ea._("{Chat} (Off)",{Chat:"Chat"});}else if(j.disconnected()){ma=ea._("{Chat} (Disconnected)",{Chat:"Chat"});}else{var oa=h.getOnlineCount();if(oa){ma=ea._("{Chat} {number-available}",{Chat:"Chat",'number-available':t.span({className:"count"},"(",oa,")")});}else{ma="Chat";na=true;}}this._setUnread(this._unreadMessageCount);this._setLabel(ma,na);this.buttonContentChanged();};ja.prototype.onButtonClick=function(){"use strict";this._conditionallyShowTypeahead();if(o.shown(this.typeahead.getElement())){var ka=this.subscribe('show',function(){this.typeahead.getCore().getElement().focus();i.dismiss();}.bind(this));setTimeout(this.unsubscribe.bind(this,ka),0);}};ja.prototype.onHide=function(){"use strict";this._isOpen=false;if(this._buddyListRenderSubscription){this.orderedList.unsubscribe(this._buddyListRenderSubscription);this._buddyListRenderSubscription=null;}this.orderedList.hide();this.typeahead.getCore().reset();};ja.prototype._onKeyDown=function(event){"use strict";var ka=r.getKeyCode(event);if(ka===v.ESC&&!o.hasClass(this.root,'menuOpened')){this.hide();return false;}else if(ka==v.RETURN)m.enable();};ja.prototype._onSidebarHide=function(event){"use strict";this.getButton().focus();};ja.prototype.onResize=function(){"use strict";var ka=p.getMaxFlyoutHeight(this.root)-60,la=Math.max(250,ka);this.orderedList.setNumTopFriends(Math.floor(la/fa));};ja.prototype._showBuddyList=function(){"use strict";if(!this._buddyListRenderSubscription)this._buddyListRenderSubscription=this.orderedList.subscribe('render',p.setUseMaxHeight.bind(p,this.root,false));this.orderedList.show();};ja.prototype.onShow=function(){"use strict";this._isOpen=true;if(j.disconnected()){this._tryReconnect();this._showBuddyList();}else n.goOnline(this._showBuddyList.bind(this));};ja.prototype._setLabel=function(ka,la){"use strict";var ma=this.label.cloneNode(true);q.setContent(ma,ka);q.replace(this.label,ma);this.label=ma;this.throbber&&o.conditionShow(this.throbber,!!la);};ja.prototype._setUnread=function(ka){"use strict";o.conditionShow(this.unreadCount,!!ka);if(ka){ka=t.span({className:"_51jx _5ayw"},ka);q.setContent(this.unreadCount,ka);}};ja.prototype._conditionallyShowTypeahead=function(){"use strict";o.conditionShow(this.typeahead.getElement(),this._orderedListCount>=ga);};ja.prototype._updateCount=function(){"use strict";this._updateView();this._conditionallyShowTypeahead();};e.exports=ja;});
__d("LitestandLinkHider",["DataStore","DOM","Event","Parent","UserAgent"],function(a,b,c,d,e,f,g,h,i,j,k){function l(event){var n=event.getTarget(),o=j.byTag(n,'a');if(!o)return;if(event.type==='mouseover'){g.set(o,'href',o.href);o.removeAttribute('href');}else{o.href=g.get(o,'href')||o.href;if(event.type==='mouseout')g.remove(o,'href');}}var m={hideLinks:function(n){if(k.chrome()||9<=k.ie()||k.opera())i.listen(n,{mouseover:l,mouseout:l,mousedown:l});},removeAllHrefs:function(n){var o=h.scry(n,'a');o.forEach(function(p){p.removeAttribute('href');p.removeAttribute('ajaxify');p.removeAttribute('rel');p.setAttribute('tabindex',0);});}};e.exports=m;});
__d("LitestandSidebar",["Arbiter","AsyncRequest","CSS","DOM","DOMDimensions","Event","KeyEventController","LitestandLinkHider","LitestandMessages","LitestandSidebarConfig","Parent","TabbableElements","ViewportBounds","csx","cx","emptyFunction","throttle"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w){var x,y,z,aa,ba,ca={},da,ea=false,fa=p.min_collapse_width,ga=document.documentElement;function ha(){if(!y)return;j.setContent(y,aa?y.getAttribute('data-openlabel'):y.getAttribute('data-closelabel'));}function ia(){for(var la in ca)if(ca.hasOwnProperty(la)&&ca[la]===false)return false;return true;}function ja(){z=k.getViewportWithoutScrollbarDimensions();if(!ka.isExpanded()&&ba)return;if(z.width<=fa){ka.collapse();}else ka.expand();}var ka={init:function(la){x=la;ba=p.is_collapsed;if(q.byClass(x,"_504q"))ea=true;var ma=j.scry(document.body,"._4i9v");ma[0]&&j.remove(ma[0]);ja();s.addLeft(ka.getWidth);g.inform('LitestandSidebar/initialized',null,g.BEHAVIOR_PERSISTENT);l.listen(window,'resize',w(ja));l.listen(la,'scroll',function(){if(la.scrollLeft>0)la.scrollLeft=0;});var na=j.scry(la,".fbChatTypeahead .textInput")[0];if(na){var oa=q.byClass(na,"_4oes");oa&&n.hideLinks(oa);l.listen(na,'focus',function(){ka.allowCollapse(false,'chatsearch');});l.listen(na,'blur',function(){ka.allowCollapse(true,'chatsearch');});g.subscribe('LitestandSidebarBookmarks/clickToCollapse',function(){na.focus();});}g.subscribe(o.TOUR_SIDEBAR_HIGHLIGHT,ka.allowCollapse.bind(null,false,'tour'));g.subscribe(o.TOUR_SIDEBAR_UNHIGHLIGHT,ka.allowCollapse.bind(null,true,'tour'));m.registerKey('n',function(){var pa=j.scry(la,"._521g")[0];if(pa&&r.isTabbable(pa))pa.focus();});},registerToggleItem:function(la,ma){y=ma;l.listen(la,'click',ka.toggle);},isExpanded:function(){if(typeof aa==='undefined')aa=!i.hasClass(ga,"_4kdq");return aa;},allowCollapse:function(la,ma){if(la===false){ca[ma]=la;}else delete ca[ma];da&&ka.collapse();},toggle:function(){if(ka.isExpanded()){ka.collapse();ba=true;}else{ka.expand();ba=false;}new h('/ajax/litestand/sidebar/settings').setHandler(v).setErrorHandler(v).setData({is_collapsed:ba}).setAllowCrossPageTransition(true).send();},expand:function(){if(ka.isExpanded()||ea)return;ha();i.removeClass(ga,"_4kdq");aa=true;da=false;ba=false;g.inform('reflow');g.inform('LitestandSidebar/expand');},collapse:function(){da=!ia();if(!ka.isExpanded()||da)return;ha();aa=false;da=false;i.addClass(ga,"_4kdq");g.inform('reflow');g.inform('LitestandSidebar/collapse');},showOnQuickling:function(){if(x&&ea){ea=false;i.removeClass(ga,"_4_f0");var la=j.find(x,'.fbChatTypeahead');i.show(q.byClass(la,'uiContextualLayerPositioner'));}},hideOnQuickling:function(){if(x){ea=true;i.addClass(ga,"_4_f0");}},getWidth:function(){return ka.isExpanded()?205:56;}};e.exports=ka;});
__d("LitestandTickerDisplayController",["Arbiter","AsyncRequest","ChatSidebar","CSS","DOM","Event","LitestandSidebar","Vector","cx","emptyFunction","throttle"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){var r,s,t,u,v,w,x,y,z=true,aa,ba="_5383";function ca(){y=false;}function da(){if(!u&&!y&&aa)fa();}function ea(){var ja=n.getViewportDimensions().y<t;if(!z&&ja){z=true;j.addClass(v,"_50nm");x&&j.hide(x);}else if(z&&!ja){z=false;j.removeClass(v,"_50nm");x&&j.show(x);}ha();}function fa(){y=true;new h('/ajax/litestand/ticker/show').setHandler(p).setErrorHandler(p).setFinallyHandler(ca).setAllowCrossPageTransition(true).send();}function ga(){if(s){s=false;j.addClass(v,"_50nn");}else{s=true;j.removeClass(v,"_50nn");}ha();i.resize();k.setContent(w,s?w.getAttribute('data-hidelabel'):w.getAttribute('data-showlabel'));new h('/ajax/litestand/sidebar/tickersettings').setHandler(p).setErrorHandler(p).setData({has_ticker:s}).setAllowCrossPageTransition(true).send();}function ha(){var ja=m.isExpanded()&&s&&!z;if(!aa&&ja){aa=true;g.inform('LitestandTicker/Visible');da();}else if(aa&&!ja){aa=false;g.inform('LitestandTicker/notVisible');}}var ia={init:function(ja,ka,la,ma){r=ja;s=la;v=ka;t=ma;ea();l.listen(window,'resize',q(ea));g.subscribe('LitestandSidebar/initialized',ha);g.subscribe('sidebar/typeahead/preActive',ia.hide);g.subscribe('sidebar/typeahead/active',ia.show);g.subscribe('LitestandSidebar/expand',ha);},hide:function(){if(!j.hasClass(v,ba)){j.addClass(v,ba);g.inform('LitestandTicker/notVisible');}},show:function(ja,ka){if(!ka&&j.hasClass(v,ba))j.removeClass(v,ba);},insertTicker:function(ja){k.prependContent(v,ja);ia.informTickerInDOM();},informTickerInDOM:function(){u=true;i.resize();},registerToggleItem:function(ja,ka){w=ka;x=ja;j.conditionShow(x,!z);l.listen(x,'click',ga);}};e.exports=ia;});
__d("ChatSidebarDropdown",["AppsDivebarDisplayController","Arbiter","AsyncRequest","Chat","ChatOptions","ChatOrderedList","ChatSidebar","ChatVisibility","CSS","DOMQuery","JSLogger","LitestandTickerDisplayController","LitestandSidebar","PresenceState","cx"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){function v(w,x,y,z,aa,ba,ca){"use strict";this._menu=x;this._popover=w.getPopover();this._selectedValues={};this._menuIsRendered=false;this._editingFavoriteList=false;this._hasTickerOption=z;this._hasTogglerOption=aa;this._hasAppsOption=ca;this._logger=q.create('blackbird');this._menu.subscribe('itemclick',this._onClick.bind(this));this._popover.subscribe('init',this._onLayerInit.bind(this));if(y){this._popover.subscribe('hide',y.allowCollapse.bind(null,true,'SidebarMenu'));this._popover.subscribe('show',y.allowCollapse.bind(null,false,'SidebarMenu'));}h.subscribe('chat/option-changed',this._onOptionChanged.bind(this));}v.prototype._onLayerInit=function(){"use strict";this._menuIsRendered=true;o.addClass(this._popover.getLayer().getContentRoot(),"_5vm9");this._displayBrowserNotificationsIfNeeded();this._updateVisibility();h.subscribe('chat-visibility/go-online',this._updateVisibility.bind(this));h.subscribe('chat-visibility/go-offline',this._updateVisibility.bind(this));this._updateSelectedItems();if(this._editingFavoriteList)this._updateEditFavoriteListLabel(this._editingFavoriteList);if(this._hasTickerOption||this._hasTogglerOption)this._registerLitestandHandlers();if(this._hasAppsOption)this._registerAppHandlers();};v.prototype._updateSelectedItems=function(){"use strict";this._menu.forEachItem(function(w){var x=w.getValue&&w.getValue();if(x in this._selectedValues){var y=this._selectedValues[x];if(y){w.select();}else w.deselect();}}.bind(this));};v.prototype._registerLitestandHandlers=function(){"use strict";this._menu.forEachItem(function(w){var x=w.getRoot(),y;if(w.getValue)if(this._hasTickerOption&&w.getValue()==='toggle_ticker'){y=p.find(x,'span[data-hidelabel]');r.registerToggleItem(x,y);}else if(this._hasTogglerOption&&w.getValue()==='toggle_sidebar'){y=p.find(x,'span[data-closelabel]');s.registerToggleItem(x,y);}}.bind(this));};v.prototype._registerAppHandlers=function(){"use strict";this._updateAppsVisibility();h.subscribe('AppsDivebar/hide-apps',this._updateAppsVisibility.bind(this));h.subscribe('AppsDivebar/show-apps',this._updateAppsVisibility.bind(this));};v.prototype._updateAppsVisibility=function(){"use strict";o.conditionClass(this._popover.getLayer().getContentRoot(),"_2vh",!g.isVisible());};v.prototype._updateVisibility=function(){"use strict";o.conditionClass(this._popover.getLayer().getContentRoot(),"_5vma",!n.isOnline());};v.prototype._displayBrowserNotificationsIfNeeded=function(){"use strict";if(window.webkitNotifications){var w;this._menu.forEachItem(function(x){if(x.getValue&&x.getValue()==='browser_notif')w=x;});if(w){o.show(w.getRoot());if(window.webkitNotifications.checkPermission()!==0)w.deselect();}}};v.prototype._onChangeSettingResponse=function(w,x,y){"use strict";t.doSync();};v.prototype._onChangeSettingError=function(w,x,y){"use strict";k.setSetting(w,!x,'sidebar_menu_error');};v.prototype._onChangeFinally=function(){"use strict";this._pendingChange=false;};v.prototype._onOptionChanged=function(w,x){"use strict";var y=x.name,z=x.value;if(this._menuIsRendered){this._menu.forEachItem(function(aa){if(aa.getValue&&(aa.getValue()===y))if(aa.isSelected()&&!z){aa.deselect();}else if(!aa.isSelected()&&z)aa.select();});}else this._selectedValues[y]=z;};v.prototype._onClick=function(w,x){"use strict";if(this._pendingChange)return false;var y=false,z=x.item.getValue(),aa=true;switch(z){case 'sidebar':this.toggleSidebar();break;case 'online':if(!n.isOnline()){n.goOnline();}else this._logVisibilityChange(z,true);y=true;break;case 'offline':if(n.isOnline()){n.goOffline();}else this._logVisibilityChange(z,true);y=true;break;case 'advanced_settings':case 'turn_off_dialog':h.inform('chat/advanced-settings-dialog-opened');y=true;this._logVisibilityChange(z,false);break;case 'browser_notif':if(!x.item.isSelected()&&window.webkitNotifications&&window.webkitNotifications.checkPermission()!==0){window.webkitNotifications.requestPermission(function(){this.changeSetting(z,!x.item.isSelected());}.bind(this));}else this.changeSetting(z,!x.item.isSelected());y=true;break;case 'sound':this.changeSetting(z,!x.item.isSelected());y=true;break;case 'pause':var ba=!x.item.isSelected();if(ba){l._pause();}else l._unpause();y=true;aa=false;break;case 'close_all_tabs':h.inform('chat/close-all-tabs');this._logVisibilityChange(z,false);y=true;break;case 'show_apps':if(!g.isVisible()){g.showApps();m.resize();}y=true;break;case 'hide_apps':if(g.isVisible()){g.hideApps();m.resize();}y=true;break;}if(y){this.hideMenu();return aa;}};v.prototype._logVisibilityChange=function(w,x){"use strict";this._logger.error(x?'sidebar_dropdown_visibility_error':'sidebar_dropdown_set_visibility',{action:w});};v.prototype.changeSetting=function(w,x){"use strict";if(this._pendingChange)return false;this._pendingChange=true;var y={};y[w]=x;k.setSetting(w,x,'sidebar_menu');new i('/ajax/chat/settings.php').setHandler(this._onChangeSettingResponse.bind(this,w,x)).setErrorHandler(this._onChangeSettingError.bind(this,w,x)).setFinallyHandler(this._onChangeFinally.bind(this)).setData(y).setAllowCrossPageTransition(true).send();};v.prototype.hideMenu=function(){"use strict";if(this._menuIsRendered)this._popover.hideLayer();};v.prototype.toggleSidebar=function(){"use strict";j.toggleSidebar();this.hideMenu();return false;};e.exports=v;});
__d("ModuleDependencies",[],function(a,b,c,d,e,f){function g(k,l,m){var n=a.require.__debug.modules[m],o=a.require.__debug.deps;if(l[m])return;l[m]=true;if(!n){o[m]&&(k[m]=true);return;}if(!n.dependencies||!n.dependencies.length){if(n.waiting)k[m]=true;return;}n.dependencies.forEach(function(p){g(k,l,p);});}function h(k){if(a.require.__debug){var l={};g(l,{},k);var m=Object.keys(l);m.sort();return m;}return null;}function i(){var k={loading:{},missing:[]};if(!a.require.__debug)return k;var l={},m=a.require.__debug.modules,n=a.require.__debug.deps;for(var o in m){var p=m[o];if(p.waiting){var q={};g(q,{},p.id);delete q[p.id];k.loading[p.id]=Object.keys(q);k.loading[p.id].sort();k.loading[p.id].forEach(function(r){if(!(r in m)&&n[r])l[r]=1;});}}k.missing=Object.keys(l);k.missing.sort();return k;}var j={getMissing:h,getNotLoadedModules:i};e.exports=j;});
__d("ChatSidebarLog",["AsyncSignal","Bootloader","ModuleDependencies","JSLogger","Run"],function(a,b,c,d,e,f,g,h,i,j,k){var l=j.create('chat_sidebar_load'),m=null,n=false,o=(Math.random()*2147483648|0).toString(36),p=Date.now();k.onLoad(function(){n=true;});try{d(['ChatSidebar'],function(u){m=u;});}catch(q){l.warn('exception',{reason:q.toString()});}function r(u,v){if(u.length>v)return u[v];return null;}function s(u){setTimeout(function(){var v=i.getMissing('ChatSidebar'),w=h.getErrorUrls(),x=h.getLoadingUrls(),y=[];for(var z in x)y.push({url:z,time:x[z]});y.sort(function(ba,ca){return ca.time-ba.time;});var aa={start_gap:p-h.getStartTime(),page_loaded:n,page_id:o,timeout:u,missing_total:v.length,module_1:r(v,0),module_2:r(v,1),module_3:r(v,2),error_url_total:w.length,error_url_1:r(w,0),error_url_2:r(w,1),error_url_3:r(w,2),loading_url_total:y.length,loading_url_1:r(y,0)?r(y,0).url:null,loading_time_1:r(y,0)?r(y,0).time:null,loading_url_2:r(y,1)?r(y,1).url:null,loading_time_2:r(y,1)?r(y,1).time:null,loading_url_3:r(y,2)?r(y,2).url:null,loading_time_3:r(y,2)?r(y,2).time:null};if(!m){l.warn('require_'+u,{missing:v});aa.symptom='require';}if(m&&!m.isInitialized()){l.warn('init_'+u,{missing:v});aa.symptom='init';}if(aa.symptom)new g('/ajax/chat/sidebar_load.php',aa).send();},u);}var t={start:function(){s(5000);s(10000);s(15000);s(30000);s(60000);}};e.exports=t;});
__d("NotificationImpressions",["AsyncSignal","NotificationTokens","URI"],function(a,b,c,d,e,f,g,h,i){var j='/ajax/notifications/impression.php';function k(l,m){var n={ref:m};h.untokenizeIDs(l).forEach(function(o,p){n['alert_ids['+p+']']=o;});new g(i(j).getQualifiedURI().toString(),n).send();}e.exports={log:k};});
__d("NotificationBeeperItemContents.react",["Animation","CloseButton.react","ImageBlock.react","NotificationURI","NotificationUserActions","React","TextWithEntities.react","Timestamp.react","cx"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){function p(r,s){return l.DOM.span({className:"fwb"},r);}var q=l.createClass({displayName:'NotificationBeeperItemContents',_markAsRead:function(){k.markNotificationsAsRead([this.props.beep.notificationID]);this.props.onHide();},_onClose:function(){this._markAsRead();this.props.onHide();},_doFlash:function(){new g(this.refs.inner.getDOMNode()).from('opacity','0').to('opacity','1').duration(200).go();},componentDidUpdate:function(r){if(r.beep.beepID!==this.props.beep.beepID)this._doFlash();},render:function(){var r=this.props.beep,s=r.icon.uri,t=r.link?j.localize(r.link):'#',u=r.photo&&j.snowliftable(t),v=u?t:r.ajaxifyLink,w=u?'theater':(v?'dialog':null);return (l.DOM.div({ref:"inner"},h({className:"_3soc",onClick:this._onClose,size:"medium"}),l.DOM.a({href:t,ajaxify:v,onClick:this._markAsRead,rel:w,className:"_3soi"},i({className:"_3soj"},l.DOM.img({src:r.actors[0].profile_picture.uri,className:"_3sok"}),l.DOM.div({className:"_3sol"},m({renderEmoticons:true,renderEmoji:true,interpolator:p,ranges:r.text.ranges,aggregatedranges:r.text.aggregated_ranges,text:r.text.text}),i({className:"_3som"},l.DOM.img({className:"_1x8t",src:s}),n({time:r.timestamp.time,text:r.timestamp.text,verbose:r.timestamp.verbose})))))));}});e.exports=q;});
__d("NotificationBeeperItem.react",["Animation","BrowserSupport","NotificationBeeperItemContents.react","React","cx","setTimeoutAcrossTransitions"],function(a,b,c,d,e,f,g,h,i,j,k,l){var m=j.createClass({displayName:'NotificationBeeperItem',getInitialState:function(){return {fadedIn:false,hidden:false};},componentDidMount:function(){var n;if(h.hasCSSAnimations()){n=this.setState.bind(this,{fadedIn:true},null);}else n=function(){new g(this.refs.item.getDOMNode()).from('top','-30px').from('opacity','0').to('top','0px').to('opacity','1').duration(200).ondone(this.setState.bind(this,{fadedIn:true},null)).go();}.bind(this);l(n,50);this.props.onInserted(this.props.beep);},_onHide:function(){this.setState({hidden:true});},render:function(){var n=this.props.beep,o=(("_3sod")+(this.state.fadedIn?' '+"_3soe":'')+(this.state.hidden?' '+"_3sof":'')),p=n.beepRenderer||i;return (j.DOM.li({className:o,ref:"item",'data-gt':n.tracking},p({beep:n,onHide:this._onHide})));}});e.exports=m;});
__d("NotificationSound",["Sound","copyProperties"],function(a,b,c,d,e,f,g,h){var i=5000;g.init(['audio/mpeg']);function j(k){this._soundPath=k;this._lastPlayed=0;}h(j.prototype,{play:function(k){if(!this._soundPath)return;var l=Date.now();if((l-this._lastPlayed)<i)return;this._lastPlayed=l;g.play(this._soundPath,k);}});e.exports=j;});
__d("NotificationBeeper.react",["Animation","Arbiter","ChannelConstants","NotificationBeeperItem.react","NotificationConstants","NotificationImpressions","NotificationPhotoThumbnail","NotificationSound","NotificationUpdates","NotificationUserActions","React","Style","cx","isEmpty","merge","setTimeoutAcrossTransitions","shield"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w){var x=10000,y=4000,z='beeper',aa=k.PayloadSourceType.LIVE_SEND,ba=k.PayloadSourceType.OTHER_APPLICATION,ca=q.createClass({displayName:'NotificationBeeper',getInitialState:function(){return {soundEnabled:this.props.soundEnabled,hovering:false,fading:false,paused:false,pendingBeeps:{},renderedBeeps:{}};},componentWillMount:function(){var ea=i.getArbiterType('notif_sound_pref_changed'),fa='update-notifications';this.subscriptions=[o.subscribe(fa,function(ga,ha){if(ha.payloadsource===aa||ha.payloadsource===ba){var ia=ha.nodes;if(ia&&ia.length)this._handleBeepChanges(da(ia));}}.bind(this)),h.subscribe(ea,function(ga,ha){this.setState({soundEnabled:ha.obj.enabled});}.bind(this))];h.inform('NotificationBeeper/mounted',null,h.BEHAVIOR_PERSISTENT);},componentWillUnmount:function(){this.subscriptions.forEach(function(ea){ea.unsubscribe();});this.subscriptions=null;},_onMouseEnter:function(){if(this.state.paused)return;this._hideWait&&clearTimeout(this._hideWait);if(this.state.fading){this._animation.stop();this._animation=null;r.set(this.refs.container.getDOMNode(),'opacity','0.96');}var ea=Object.keys(this.state.renderedBeeps);p.markNotificationsAsSeen(ea);this.setState({hovering:true,fading:false,pendingBeeps:{},renderedBeeps:u(this.state.renderedBeeps,this.state.pendingBeeps)});},_onMouseLeave:function(){if(this.state.paused)return;this._waitToHide(y);this.setState({hovering:false});},_onInsertedItem:function(ea){if(!this.state.hovering)this._waitToHide();if(this.state.soundEnabled&&ea.sound){if(!this._notifSound)this._notifSound=new n(this.props.soundPath);this._notifSound.play(ea.beepID);}if(this.props.shouldLogImpressions)l.log([ea.notificationID],z);},_waitToHide:function(ea){this._hideWait&&clearTimeout(this._hideWait);this._hideWait=v(w(this._hide,this),(ea||x)*(this.props.slowFade?2:1));},_hide:function(){this._animation&&this._animation.stop();this._animation=new g(this.refs.container.getDOMNode()).from('opacity','0.96').to('opacity','0').duration(1500).ondone(this._finishHide).go();this.setState({fading:true});},_finishHide:function(){var ea=this.state.pendingBeeps;this.setState({fading:false,pendingBeeps:{},renderedBeeps:{}});v(this.setState.bind(this,{renderedBeeps:ea},null));r.set(this.refs.container.getDOMNode(),'opacity','0.96');},_handleBeepChanges:function(ea){var fa=this.state.fading?this.state.pendingBeeps:this.state.renderedBeeps;Object.keys(ea).reverse().forEach(function(ga){var ha=ea[ga],ia=ha.beepID,ja=this.state.renderedBeeps[ga]||{};if(ja.beepID!=ia){delete fa[ga];fa[ga]=ha;}}.bind(this));if(!this.state.paused)this._waitToHide();this.forceUpdate();},_togglePause:function(){if(!this.state.paused){this._animation&&this._animation.stop();this._hideWait&&clearTimeout(this._hideWait);}else this._waitToHide();this.setState({paused:!this.state.paused});},render:function(){var ea=this.state.renderedBeeps,fa={};Object.keys(ea).reverse().forEach(function(ja){var ka=ea[ja];fa[ja]=j({beep:ka,onInserted:this._onInsertedItem});},this);var ga=!t(fa),ha=null;if(ga&&this.props.canPause)ha=q.DOM.li({className:"_a_g",onClick:this._togglePause},this.state.paused?'Continue':'Pause [fb]');var ia=((!ga?"hidden_elem":'')+(' '+"_50d1"));return (q.DOM.ul({ref:"container",className:ia,'data-gt':this.props.tracking,onMouseEnter:this._onMouseEnter,onMouseLeave:this._onMouseLeave},fa,ha));}});function da(ea){var fa={};ea.forEach(function(ga){if(!ga.showBeep)return;var ha=ga.alert_id,ia=ha+'-'+ga.receivedTime,ja=m.getThumbnail(ga.attachments,ga.attached_story);fa[ha]={notificationID:ha,beepID:ia,beepRenderer:ga.beepRenderer,actors:ga.actors,icon:ga.icon,link:ga.url,ajaxifyLink:ga.ajaxify_url,photo:ja,text:ga.unaggregatedTitle||ga.title,timestamp:ga.timestamp,receivedTime:ga.receivedTime,sound:!!ga.sound,tracking:ga.tracking};});return fa;}e.exports=ca;});
__d("SidebarTicker",["Arbiter","ChatSidebar","CSS","DOM","Run","TickerController","$","copyProperties"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n){function o(){this._ticker=m('pagelet_ticker');this._initSubscriptions();if(i.hasClass(document.documentElement,'sidebarMode'))this._onSidebarShow();}o.hide=function(){k.onAfterLoad(function(){j.remove(m('pagelet_ticker'));j.remove(j.find(document.body,'div.fbSidebarGripper'));h.resize();});};n(o.prototype,{_initSubscriptions:function(){this._subscriptions=[g.subscribe('sidebar/show',this._onSidebarShow.bind(this))];},_onSidebarShow:function(){l.show(this._ticker);}});e.exports=o;});
__d("SidebarTickerResizer",["Arbiter","AsyncRequest","ChatSidebar","SimpleDrag","$"],function(a,b,c,d,e,f,g,h,i,j,k){var l=1e-07;function m(n){var o=k('pagelet_ticker'),p=o.parentNode,q=this._saveResizedState.bind(this),r,s,t,u=function(x,event){r=event.clientY;s=o.offsetHeight;t=p.offsetHeight;},v=function(x,event){var y=s+(event.clientY-r),z=100-(((t-y)/t)*100);z=Math.max(l,Math.min(90,z));o.style.height=z+'%';if(x=='end'){q(z);g.inform('Ticker/resized');}i.resize();},w=new j(n);w.subscribe('start',u);w.subscribe(['update','end'],v);}m.prototype._saveResizedState=function(n){new h('/ajax/feed/ticker/resize').setData({height:''+n}).setMethod('POST').send();};e.exports=m;});
__d("LiveMessageReceiver",["Arbiter","ChannelConstants","copyProperties","emptyFunction","shield"],function(a,b,c,d,e,f,g,h,i,j,k){function l(m){this.eventName=m;this.subs=null;this.handler=j;this.shutdownHandler=null;this.registered=false;this.appId=1;}i(l,{getAppMessageType:function(m,n){return 'live_message/'+m+':'+n;},route:function(m){var n=function(o){var p=l.getAppMessageType(m.app_id,m.event_name);g.inform(p,o,g.BEHAVIOR_PERSISTENT);};n(m.response);}});i(l.prototype,{setAppId:function(m){this.appId=m;return this;},setHandler:function(m){this.handler=m;this._dirty();return this;},setRestartHandler:j,setShutdownHandler:function(m){this.shutdownHandler=k(m);this._dirty();return this;},_dirty:function(){if(this.registered){this.unregister();this.register();}},register:function(){var m=function(o,p){return this.handler(p);}.bind(this),n=l.getAppMessageType(this.appId,this.eventName);this.subs={};this.subs.main=g.subscribe(n,m);if(this.shutdownHandler)this.subs.shut=g.subscribe(h.ON_SHUTDOWN,this.shutdownHandler);this.registered=true;return this;},unregister:function(){if(!this.subs)return this;for(var m in this.subs)if(this.subs[m])this.subs[m].unsubscribe();this.subs=null;this.registered=false;return this;}});e.exports=l;});
__d("initLiveMessageReceiver",["Arbiter","ChannelConstants","LiveMessageReceiver"],function(a,b,c,d,e,f,g,h,i){g.subscribe(h.getArbiterType('app_msg'),function(j,k){i.route(k.obj);});});
__d("Slideshow",["ArbiterMixin","CSS","DOM","Event","Locale","Parent","csx","cx","mixin","shield"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var q=o(g);for(var r in q)if(q.hasOwnProperty(r))t[r]=q[r];var s=q===null?null:q.prototype;t.prototype=Object.create(s);t.prototype.constructor=t;t.__superConstructor__=q;function t(u,v){"use strict";this._root=u;this._config=v;this._currentIndex=0;this._animating=false;this._autoplayTimer=null;this._init();}t.prototype.getIndex=function(){"use strict";return this._currentIndex;};t.prototype.getNumItems=function(){"use strict";return this._items.length;};t.prototype.page=function(u){"use strict";if(typeof u==='undefined')u='next';if(u==='next'){if(this._config.wrap||this.getIndex()<this.getNumItems()-1)this._animateTo(this._currentIndex+1);}else if(u==='prev')if(this._config.wrap||this.getIndex()>0)this._animateTo(this._currentIndex-1);};t.prototype.pageTo=function(u){"use strict";this._animateTo(u,p(this._setCurrent,this,u));};t.prototype.insert=function(u,v){"use strict";if(u>this._currentIndex){i.insertAfter(this._items[u-1],v);}else{i.insertBefore(this._items[u],v);this._currentIndex++;}this._items.splice(u,0,v);this._updateArrowState(this._currentIndex);this.inform('items_updated');};t.prototype.push=function(u){"use strict";this.insert(this._items.length,u);};t.prototype._init=function(){"use strict";this._container=i.find(this._root,"ul._2xq");this._items=i.scry(this._container,"li._2xr");if(this._config.arrows){j.listen(this._root,'click',this._clickListener.bind(this));var u=i.find(this._root,"a._2xw"),v=i.find(this._root,"a._2xx");this._arrowLeft=k.isRTL()?u:v;this._arrowRight=k.isRTL()?v:u;}if(this._config.autoplay){j.listen(this._root,'mouseenter',this.stopAutoplay.bind(this));j.listen(this._root,'mouseleave',this.resetAutoplay.bind(this));this.resetAutoplay();}this.subscribe(['page_start','page_end'],function(w,x){h.conditionClass(this._root,"_2xm",w==='page_start');}.bind(this));};t.prototype._clickListener=function(event){"use strict";var u=event.getTarget(),v=l.byTag(u,'a');if(v&&!h.hasClass(v,"_2xo"))if(h.hasClass(v,"_2xw")){this.page('next');}else if(h.hasClass(v,"_2xx"))this.page('prev');};t.prototype._updateArrowState=function(u){"use strict";if(!this._config.arrows)return;h.conditionClass(this._arrowRight,"_2xo",this._items.length===1);h.conditionClass(this._arrowLeft,"_2xo",this._items.length===1);};t.prototype._animateTo=function(u){"use strict";};t.prototype._setCurrent=function(u){"use strict";h.removeClass(this._items[this._currentIndex],"_2xn");h.addClass(this._items[u],"_2xn");h.removeClass(this._root,"_2xm");this._currentIndex=u;this._animating=false;this.inform('page_end',u);};t.prototype.resetAutoplay=function(){"use strict";if(this._config.autoplay){clearTimeout(this._autoplayTimer);this._autoplayTimer=setTimeout(this._autoplay.bind(this),this._config.autoplayTimeout);}};t.prototype.stopAutoplay=function(){"use strict";clearTimeout(this._autoplayTimer);this._autoplayTimer=null;};t.prototype._autoplay=function(){"use strict";this.resetAutoplay();if(this._items.length>1)this.page();};e.exports=t;});
__d("Carousel",["Animation","CSS","Ease","Locale","Slideshow","Style","cx","shield"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n){var o=j.isRTL()?'right':'left',p=i.sineInOut;for(var q in k)if(k.hasOwnProperty(q))s[q]=k[q];var r=k===null?null:k.prototype;s.prototype=Object.create(r);s.prototype.constructor=s;s.__superConstructor__=k;function s(t,u){"use strict";k.call(this,t,u);this.subscribe('items_updated',this._updateItemState.bind(this));}s.prototype._updateItemState=function(t,u){"use strict";this._setContainerPos(t);l.set(this._container,'width',(this._items.length*this._config.width)+'px');};s.prototype._updateArrowState=function(t){"use strict";if(!this._config.arrows)return;var u=this._config.wrap,v=this._items.length,w=Math.floor(v/this._config.photosperframe);h.conditionClass(this._arrowRight,"_2xo",w===1||(!u&&t===w-1));h.conditionClass(this._arrowLeft,"_2xo",w===1||(!u&&t===0));};s.prototype._animate=function(t,u){"use strict";this._animating=true;this.inform('page_start',t);new g(this._container).to(o,-t*this._config.width).duration(this._config.animationDuration).ease(p).ondone(u).go();};s.prototype._setContainerPos=function(t){"use strict";l.set(this._container,o,-t*this._config.width+'px');};s.prototype._animateTo=function(t){"use strict";if(this._animating)return;var u=this._items.length;if((0<=t&&t<u)||!this._config.wrap){var v=(t+u)%u;this._updateArrowState(v);return this._animate(v,n(this._setCurrent,this,v));}var w=t%u,x=w?u-1:0,y=this._items[u-1];l.set(y,'position','absolute');l.set(y,o,-this._config.width+'px');if(x===0)this._setContainerPos(-1);this._animate(w,function(){l.set(y,'position','static');l.set(y,o,'auto');this._setContainerPos(x);this._setCurrent(x);}.bind(this));};e.exports=s;});
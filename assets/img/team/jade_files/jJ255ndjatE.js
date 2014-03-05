/*!CK:3106513022!*//*1392822796,178129739*/

if (self.CavalryLogger) { CavalryLogger.start_js(["g7vY\/"]); }

__d("FileUploadTarget",["AsyncUploadRequest","DragDropFileUpload","DragDropTarget","copyProperties","emptyFunction"],function(a,b,c,d,e,f,g,h,i,j,k){function l(m,n){var o=(function(p){var q=new g(n).setFiles({file:p}).setRelativeTo(m).setStatusElement(m);q.subscribe('complete',function(r,s){this.onCompleteCallback(s);}.bind(this));q.send();}).bind(this);this.dragDropTarget=new i(m).setOnFilesDropCallback(function(p){p.length&&this.asyncProcess(p,function(q){q.length&&o(q);});}.bind(this));this.asyncProcess=function(p,q){q(p);};this.preprocess=function(p){return p;};this.onCompleteCallback=k;}j(l.prototype,{setPreprocessor:function(m){this.preprocess=m;return this;},setAsyncProcessor:function(m){this.asyncProcess=m;return this;},onComplete:function(m){this.onCompleteCallback=m;return this;},activate:function(){if(!h.isSupported())return;this.dragDropTarget.setFileFilter(this.preprocess).enable();}});e.exports=l;});
__d("ErrorDialog",["Dialog","emptyFunction"],function(a,b,c,d,e,f,g,h){var i={showAsyncError:function(j){try{return i.show(j.getErrorSummary(),j.getErrorDescription());}catch(k){alert(j);}},show:function(j,k,l,m){return (new g()).setTitle(j).setBody(k).setButtons([g.OK]).setStackable(true).setModal(true).setHandler(l||h).setButtonsMessage(m||'').show();}};e.exports=i;});
__d("SinglePictureUploadTarget",["Bootloader","Dialog","ErrorDialog","FileUploadTarget","copyProperties","emptyFunction","htmlSpecialChars","tx"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n){function o(p,q){this.fileUploadTarget=new j(p,q);this.preprocessCallback=l;this.oncompleteCallback=l;this.afterSuccessCallback=l;this.maxWidth=null;this.maxHeight=null;}k(o.prototype,{setPreprocessCallback:function(p){this.preprocessCallback=p;return this;},setOncompleteCallback:function(p){this.oncompleteCallback=p;return this;},setAfterSuccessCallback:function(p){this.afterSuccessCallback=p;return this;},setMaximumDimensions:function(p,q){this.maxWidth=p;this.maxHeight=q;return this;},activate:function(){var p=function(t){return m(t.name);},q=(function(t){if(t.length>1){i.show("Upload error",n._("You can only select {max-photos} photos to upload to this album.  Only the first {max-photos} photo you selected will be uploaded.",{'max-photos':1}));t=[t[0]];}var u=t[0];if(!u.type.match(/^image\//)){i.show("Upload error",n._("We could not understand the contents of {filename}.  Make sure it is a jpg, gif, or png formatted image.",{filename:p(u)}));return [];}this.preprocessCallback(t);return t;}).bind(this),r=(function(t,u){var v=1024*1024*16,w=1024*1024*1,x=function(z){if(z.size>v){i.show("Upload error",n._("{filename} is too large. Please resize your photo to under\u003CBR>8000x8000 pixels and try again.",{filename:p(t[0])}));u([]);}else u([z]);},y=t[0];if((y.size<w)||(!this.maxWidth&&!this.maxHeight)){x(y);}else g.loadModules(["ImageExif","ImageResizer"],function(z,aa){if(!aa.isSupported()){x(y);return;}var ba=new aa(y,this.maxWidth,this.maxHeight);ba.subscribe('resized',function(ca,da){if(da.size>y.size){x(y);}else x(da);}.bind(this));ba.subscribe('error',function(){x(y);}.bind(this));z.readFromFile(y,function(ca){ca&&ba.setOrientation(ca.Orientation);ba.resize();});});}).bind(this),s=(function(t){var u=t[0];this.oncompleteCallback(u);var v=u.getResponse().getPayload();if(u.isSuccess()){this.afterSuccessCallback(v);}else if(v&&v.__dialog){var w=new h();w._setFromModel(v.__dialog);w.setButtons(h.OK).show();}else i.show(v.error.title,v.error.body);}).bind(this);return this.fileUploadTarget.onComplete(s).setPreprocessor(q).setAsyncProcessor(r).activate();}});e.exports=o;});
__d("ProfilePOPAlbumEducationDialog",["AsyncRequest"],function(a,b,c,d,e,f,g){var h={listen:function(i,j){var k=i.getPopover().subscribe('show',function(){j.show();k.unsubscribe();new g().setURI('/ajax/profile/picture/record_seen_nux/').send();});}};e.exports=h;});
__d("TimelineProfilePicConfig",["fbt"],function(a,b,c,d,e,f,g){var h={loading:'timeline/profile_pic/loading',success:'timeline/profile_pic/success',leavingMessage:"Your profile picture is still uploading, are you sure you want to leave?"};e.exports=h;});
__d("TimelineProfilePic",["Arbiter","CSS","Dialog","DOM","Event","HTML","TimelineProfilePicConfig","Run","$","ge","tidyEvent"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){var r;s.init=function(t,u){"use strict";s.destroyInstance();r=new s(t||'fbProfileCover',u||'.profilePicThumb');};function s(t,u){"use strict";this.$TimelineProfilePic0=o(t);this.$TimelineProfilePic1=u;this.$TimelineProfilePic2=[g.subscribe(m.loading,this.startLoading.bind(this)),g.subscribe(m.success,this.onUploadSuccess.bind(this))];n.onBeforeUnload(this.onBeforeUnload.bind(this));n.onLeave(this.destroy.bind(this));}s.prototype.$TimelineProfilePic3=function(t){"use strict";this.$TimelineProfilePic4=t;h.conditionClass(this.$TimelineProfilePic0,'profilePicLoading',t);};s.prototype.destroy=function(){"use strict";this.$TimelineProfilePic2.forEach(function(t){t.unsubscribe();});this.$TimelineProfilePic2=[];r=null;};s.prototype.startLoading=function(t,u){"use strict";this.$TimelineProfilePic3(!!u.isLoading);};s.prototype.onUploadSuccess=function(t,u){"use strict";this.$TimelineProfilePic3(false);if(!u.newPic)return;var v=i.getCurrent();if(v)v.hide();var w=u.newPic;j.replace(j.find(this.$TimelineProfilePic0,this.$TimelineProfilePic1),typeof w==='string'?l(w):w);if(typeof(u.profileId)!==undefined&&typeof(u.headerPicURL)!==undefined){var x=p('profile_pic_header_'+u.profileId);if(x)x.src=u.headerPicURL;}var y=p('fbProfilePicSelector');if(y)h.removeClass(y,'fbTimelineNullProfilePicSelector');};s.prototype.onBeforeUnload=function(){"use strict";if(r===this&&this.$TimelineProfilePic4)return m.leavingMessage;};s.destroyInstance=function(){"use strict";r&&r.destroy();};s.addLoadingListener=function(t,u){"use strict";q(k.listen(t,u||'click',function(){g.inform(m.loading,{isLoading:1});}));};e.exports=s;});
__d("timeline-cover-dragdrop-edit",["SinglePictureUploadTarget","TimelineCover"],function(a,b,c,d,e,f,g,h){var i=function(){var m=h.getInstance();m.hideLoadingIndicator();},j=function(m){var n=h.getInstance(),o=m.id,p=m.photo_html;n.updateCoverImage(o,p);},k=function(m){h.getInstance().showLoadingIndicator();},l=function(m,n,o,p){new g(m,n).setMaximumDimensions(o,p).setPreprocessCallback(k).setOncompleteCallback(i).setAfterSuccessCallback(j).activate();};f.initialize_timeline_cover_drop_target=l;});
__d("profile-pic-dragdrop-edit",["Arbiter","SinglePictureUploadTarget","TimelineProfilePic","TimelineProfilePicConfig"],function(a,b,c,d,e,f,g,h,i,j){f.initialize_profile_pic_drop_target=function(k,l){i.init();new h(k,l).setPreprocessCallback(function(m){g.inform(j.loading,{isLoading:1},g.BEHAVIOR_STATE);}).setOncompleteCallback(function(){g.inform(j.loading,{isLoading:0},g.BEHAVIOR_STATE);}).setAfterSuccessCallback(function(m){g.inform(j.success,{newPic:m.photo_html},g.BEHAVIOR_STATE);}).activate();};});
__d("OnlyMeUI",["AudienceSelectorTags","Arbiter","CSS","DOM","Parent","PrivacyConst","SelectorDeprecated","$","tx"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){function p(){return [j.create('div',{className:'onlyMeBorder'}),j.create('div',{className:'onlyMeBorder onlyMeBorderBottom'})];}function q(){return j.create('img',{alt:' ',className:'onlyMePrivacyCorner',height:34,src:'/images/profile/timeline/privacy_corner.png',width:34});}function r(x){var y=j.scry(x,'.photoUnit a.photo');return y.filter(function(z){return !j.scry(z,'.onlyMePrivacyCorner').length;});}function s(x,y){if(g.hasTags(u(y)))return;if(i.hasClass(x,'storyContent'))if(!k.byClass(x,'onlyMeWrap')){var z=j.create('div',{className:'onlyMeWrap'});j.appendContent(k.byClass(x,'uiStreamStory'),z);j.appendContent(z,x);x=z;}else x=k.byClass(x,'onlyMeWrap');i.addClass(x,'storyOnlyMe');if(!i.hasClass(x,'timelineRecentActivityStory'))j.setContent(j.find(y,'span.uiButtonText'),"Only me");if(!i.hasClass(x,'storyContent')){var aa=r(x);for(var ba=0,ca=aa.length;ba<ca;++ba)j.appendContent(aa[ba],q());}if(!j.scry(x,'div.onlyMeBorder').length){var da=p();j.prependContent(x,da[0]);j.appendContent(x,da[1]);}}function t(x){if(!x)return;var y=k.byClass(x,'storyContent')||k.byClass(x,'timelineRecentActivityStory')||k.byClass(x,'timelineUnitContainer')||k.byClass(x,'fbTimelineTwoColumn');if(!y){y=j.scry(x,'^.permalink_stream .storyContent');y=y.length&&y[0];}else if(i.hasClass(y,'fbTimelineComposerUnit'))return null;return y;}function u(x){var y=j.scry(x,'*[data-oid]');if(y.length===0)return '';return y[0].getAttribute('data-oid');}var v=false,w={init:function(){if(v)return;v=true;h.subscribe('AudienceSelector/changed',function(x,y){if(y.selector&&i.hasClass(y.selector,'blacklistOnlyMeUI'))return;var z=t(y.selector)||t(y.clone);if(!z)return;if(m.getOptionValue(y.option)==l.BaseValue.SELF){s(z,y.selector);}else{z=i.hasClass(z,'storyContent')?k.byClass(z,'onlyMeWrap'):z;z&&i.removeClass(z,'storyOnlyMe');}});},setOnlyMe:function(x){if(v)return;w.init();x=j.find(k.byClass(n(x),'uiSelector'),'a.uiSelectorButton');var y=t(x);y&&s(y,x);}};e.exports=w;});
__d("CountButtonCountDEPRECATED",["ArbiterMixin","DOM","mixin"],function(a,b,c,d,e,f,g,h,i){var j=i(g);for(var k in j)if(j.hasOwnProperty(k))m[k]=j[k];var l=j===null?null:j.prototype;m.prototype=Object.create(l);m.prototype.constructor=m;m.__superConstructor__=j;function m(n,o,p){"use strict";this._root=n;this._count=o;this._max=p;}m.prototype.getCount=function(){"use strict";return this._count;};m.prototype.setCount=function(n){"use strict";this._count=n;var o=this.getDisplayedValue();h.setContent(this._root,o);this.inform('change',{value:this._count,max:this._max,display:o});return this;};m.prototype.addCount=function(n){"use strict";this.setCount(this.getCount()+n);return this;};m.prototype.getDisplayedValue=function(n){"use strict";var o=(this._count>this._max)?'+':'';return Math.max(0,Math.min(this._count,this._max))+o;};e.exports=m;});
__d("CountButtonDEPRECATED",["CSS","cx"],function(a,b,c,d,e,f,g,h){var i={huge:"_4q9",large:"_9x",small:"_9w",hidden:"_9v"};function j(k,l){"use strict";this._root=k;this._counter=l;this._initEvents();}j.prototype._initEvents=function(){"use strict";this._counter.subscribe('change',this._counterChange.bind(this));};j.prototype._counterChange=function(k,l){"use strict";g.removeClass(this._root,i.huge);g.removeClass(this._root,i.large);g.removeClass(this._root,i.small);g.removeClass(this._root,i.hidden);var m=l.count>l.max;if(m&&l.max>9){g.addClass(this._root,i.huge);}else if(l.value>9||(m&&l.max>0)){g.addClass(this._root,i.large);}else if(l.value>0){g.addClass(this._root,i.small);}else g.addClass(this._root,i.hidden);};j.prototype.getCounter=function(){"use strict";return this._counter;};e.exports=j;});
__d("FreeformTokenizerBehavior",["Event","Input","Keys"],function(a,b,c,d,e,f,g,h,i){function j(k,l){var m=l.tokenize_on_blur!==false,n=l.tokenize_on_paste!==false,o=l.matcher&&new RegExp(l.matcher,'i'),p=l.paste_split&&new RegExp(l.paste_split),q=l.select_on_comma!==false,r=l.select_on_space===true,s=l.never_submit===true;function t(event){var u=h.getValue(k.getInput()).trim();if(p&&event&&event.type=='paste'){u=u.split(p);}else u=[u];var v=false;for(var w=0;w<u.length;w++){var x=u[w].trim();if(x&&(!o||o.test(x))){var y={uid:x,text:x,freeform:true};k.addToken(k.createToken(y));v=true;}}if(event&&v){k.getTypeahead().getCore().afterSelect();event.kill();}}k.subscribe('keydown',function(u,v){var event=v.event,w=g.getKeyCode(event);if(w==i.RETURN||(q&&w==i.COMMA)||(r&&w==i.SPACE)){var x=k.getTypeahead().getView();if(x.getSelection()){x.select();event.kill();}else t(event);}if(w==i.RETURN&&s)event.kill();});k.subscribe('paste',function(u,v){if(n)setTimeout(t.bind(null,v.event),20);});k.subscribe('blur',function(u,v){if(m)t();k.getTypeahead().getCore().reset();});}e.exports=j;});
__d("legacy:FreeformTokenizerBehavior",["FreeformTokenizerBehavior"],function(a,b,c,d,e,f,g){if(!a.TokenizerBehaviors)a.TokenizerBehaviors={};a.TokenizerBehaviors.freeform=g;},3);
!function(e,n,t){var a={label:"",duplicate:!0,duration:200,easingOpen:"swing",easingClose:"swing",closedSymbol:"&#9658;",openedSymbol:"&#9660;",prependTo:"body",appendTo:"",parentTag:"a",closeOnClick:!1,allowParentLinks:!1,nestedParentLinks:!0,showChildren:!1,removeIds:!0,removeClasses:!1,removeStyles:!1,brand:"",animations:"jquery",init:function(){},beforeOpen:function(){},beforeClose:function(){},afterOpen:function(){},afterClose:function(){}},i="slicknav",s="slicknav",l=40,o=13,r=27,c=37,p=39,d=32,u=38;function v(n,t){this.element=n,this.settings=e.extend({},a,t),this.settings.duplicate||t.hasOwnProperty("removeIds")||(this.settings.removeIds=!1),this._defaults=a,this._name=i,this.init()}v.prototype.init=function(){var t,a,i=this,v=e(this.element),m=this.settings;if(m.duplicate?i.mobileNav=v.clone():i.mobileNav=v,m.removeIds&&(i.mobileNav.removeAttr("id"),i.mobileNav.find("*").each((function(n,t){e(t).removeAttr("id")}))),m.removeClasses&&(i.mobileNav.removeAttr("class"),i.mobileNav.find("*").each((function(n,t){e(t).removeAttr("class")}))),m.removeStyles&&(i.mobileNav.removeAttr("style"),i.mobileNav.find("*").each((function(n,t){e(t).removeAttr("style")}))),t=s+"_icon",""===m.label&&(t+=" slicknav_no-text"),"a"==m.parentTag&&(m.parentTag='a href="#"'),i.mobileNav.attr("class",s+"_nav"),a=e('<div class="slicknav_menu"></div>'),""!==m.brand){var h=e('<div class="slicknav_brand">'+m.brand+"</div>");e(a).append(h)}i.btn=e(["<"+m.parentTag+' aria-haspopup="true" role="button" tabindex="0" class="'+s+"_btn "+s+'_collapsed">','<span class="slicknav_menutxt">'+m.label+"</span>",'<span class="'+t+'">','<span class="slicknav_icon-bar"></span>','<span class="slicknav_icon-bar"></span>','<span class="slicknav_icon-bar"></span>',"</span>","</"+m.parentTag+">"].join("")),e(a).append(i.btn),""!==m.appendTo?e(m.appendTo).append(a):e(m.prependTo).prepend(a),a.append(i.mobileNav);var f=i.mobileNav.find("li");e(f).each((function(){var n=e(this),t={};if(t.children=n.children("ul").attr("role","menu"),n.data("menu",t),t.children.length>0){var a=n.contents(),l=!1,o=[];e(a).each((function(){if(e(this).is("ul"))return!1;o.push(this),e(this).is("a")&&(l=!0)}));var r=e("<"+m.parentTag+' role="menuitem" aria-haspopup="true" tabindex="-1" class="'+s+'_item"/>');if(m.allowParentLinks&&!m.nestedParentLinks&&l)e(o).wrapAll('<span class="slicknav_parent-link slicknav_row"/>').parent();else e(o).wrapAll(r).parent().addClass(s+"_row");m.showChildren?n.addClass(s+"_open"):n.addClass(s+"_collapsed"),n.addClass(s+"_parent");var c=e('<span class="slicknav_arrow">'+(m.showChildren?m.openedSymbol:m.closedSymbol)+"</span>");m.allowParentLinks&&!m.nestedParentLinks&&l&&(c=c.wrap(r).parent()),e(o).last().after(c)}else 0===n.children().length&&n.addClass(s+"_txtnode");n.children("a").attr("role","menuitem").click((function(n){m.closeOnClick&&!e(n.target).parent().closest("li").hasClass(s+"_parent")&&e(i.btn).click()})),m.closeOnClick&&m.allowParentLinks&&(n.children("a").children("a").click((function(n){e(i.btn).click()})),n.find(".slicknav_parent-link a:not(.slicknav_item)").click((function(n){e(i.btn).click()})))})),e(f).each((function(){var n=e(this).data("menu");m.showChildren||i._visibilityToggle(n.children,null,!1,null,!0)})),i._visibilityToggle(i.mobileNav,null,!1,"init",!0),i.mobileNav.attr("role","menu"),e(n).mousedown((function(){i._outlines(!1)})),e(n).keyup((function(){i._outlines(!0)})),e(i.btn).click((function(e){e.preventDefault(),i._menuToggle()})),i.mobileNav.on("click",".slicknav_item",(function(n){n.preventDefault(),i._itemClick(e(this))})),e(i.btn).keydown((function(n){var t=n||event;switch(t.keyCode){case o:case d:case l:n.preventDefault(),t.keyCode===l&&e(i.btn).hasClass(s+"_open")||i._menuToggle(),e(i.btn).next().find('[role="menuitem"]').first().focus();break}})),i.mobileNav.on("keydown",".slicknav_item",(function(n){switch((n||event).keyCode){case o:n.preventDefault(),i._itemClick(e(n.target));break;case p:n.preventDefault(),e(n.target).parent().hasClass(s+"_collapsed")&&i._itemClick(e(n.target)),e(n.target).next().find('[role="menuitem"]').first().focus();break}})),i.mobileNav.on("keydown",'[role="menuitem"]',(function(n){switch((n||event).keyCode){case l:n.preventDefault();var t=(o=(a=e(n.target).parent().parent().children().children('[role="menuitem"]:visible')).index(n.target))+1;a.length<=t&&(t=0),a.eq(t).focus();break;case u:n.preventDefault();var a,o=(a=e(n.target).parent().parent().children().children('[role="menuitem"]:visible')).index(n.target);a.eq(o-1).focus();break;case c:if(n.preventDefault(),e(n.target).parent().parent().parent().hasClass(s+"_open")){var p=e(n.target).parent().parent().prev();p.focus(),i._itemClick(p)}else e(n.target).parent().parent().hasClass(s+"_nav")&&(i._menuToggle(),e(i.btn).focus());break;case r:n.preventDefault(),i._menuToggle(),e(i.btn).focus();break}})),m.allowParentLinks&&m.nestedParentLinks&&e(".slicknav_item a").click((function(e){e.stopImmediatePropagation()}))},v.prototype._menuToggle=function(e){var n=this,t=n.btn,a=n.mobileNav;t.hasClass(s+"_collapsed")?(t.removeClass(s+"_collapsed"),t.addClass(s+"_open")):(t.removeClass(s+"_open"),t.addClass(s+"_collapsed")),t.addClass(s+"_animating"),n._visibilityToggle(a,t.parent(),!0,t)},v.prototype._itemClick=function(e){var n=this,t=n.settings,a=e.data("menu");a||((a={}).arrow=e.children(".slicknav_arrow"),a.ul=e.next("ul"),a.parent=e.parent(),a.parent.hasClass(s+"_parent-link")&&(a.parent=e.parent().parent(),a.ul=e.parent().next("ul")),e.data("menu",a)),a.parent.hasClass(s+"_collapsed")?(a.arrow.html(t.openedSymbol),a.parent.removeClass(s+"_collapsed"),a.parent.addClass(s+"_open"),a.parent.addClass(s+"_animating"),n._visibilityToggle(a.ul,a.parent,!0,e)):(a.arrow.html(t.closedSymbol),a.parent.addClass(s+"_collapsed"),a.parent.removeClass(s+"_open"),a.parent.addClass(s+"_animating"),n._visibilityToggle(a.ul,a.parent,!0,e))},v.prototype._visibilityToggle=function(n,t,a,i,l){var o=this,r=o.settings,c=o._getActionItems(n),p=0;function d(n,t){e(n).removeClass(s+"_animating"),e(t).removeClass(s+"_animating"),l||r.afterOpen(n)}function u(t,a){n.attr("aria-hidden","true"),c.attr("tabindex","-1"),o._setVisAttr(n,!0),n.hide(),e(t).removeClass(s+"_animating"),e(a).removeClass(s+"_animating"),l?"init"==t&&r.init():r.afterClose(t)}a&&(p=r.duration),n.hasClass(s+"_hidden")?(n.removeClass(s+"_hidden"),l||r.beforeOpen(i),"jquery"===r.animations?n.stop(!0,!0).slideDown(p,r.easingOpen,(function(){d(i,t)})):"velocity"===r.animations&&n.velocity("finish").velocity("slideDown",{duration:p,easing:r.easingOpen,complete:function(){d(i,t)}}),n.attr("aria-hidden","false"),c.attr("tabindex","0"),o._setVisAttr(n,!1)):(n.addClass(s+"_hidden"),l||r.beforeClose(i),"jquery"===r.animations?n.stop(!0,!0).slideUp(p,this.settings.easingClose,(function(){u(i,t)})):"velocity"===r.animations&&n.velocity("finish").velocity("slideUp",{duration:p,easing:r.easingClose,complete:function(){u(i,t)}}))},v.prototype._setVisAttr=function(n,t){var a=this,i=n.children("li").children("ul").not(".slicknav_hidden");t?i.each((function(){var n=e(this);n.attr("aria-hidden","true"),a._getActionItems(n).attr("tabindex","-1"),a._setVisAttr(n,t)})):i.each((function(){var n=e(this);n.attr("aria-hidden","false"),a._getActionItems(n).attr("tabindex","0"),a._setVisAttr(n,t)}))},v.prototype._getActionItems=function(e){var n=e.data("menu");if(!n){n={};var t=e.children("li"),a=t.find("a");n.links=a.add(t.find(".slicknav_item")),e.data("menu",n)}return n.links},v.prototype._outlines=function(n){n?e(".slicknav_item, .slicknav_btn").css("outline",""):e(".slicknav_item, .slicknav_btn").css("outline","none")},v.prototype.toggle=function(){this._menuToggle()},v.prototype.open=function(){this.btn.hasClass(s+"_collapsed")&&this._menuToggle()},v.prototype.close=function(){this.btn.hasClass(s+"_open")&&this._menuToggle()},e.fn.slicknav=function(n){var t,a=arguments;return void 0===n||"object"==typeof n?this.each((function(){e.data(this,"plugin_slicknav")||e.data(this,"plugin_slicknav",new v(this,n))})):"string"==typeof n&&"_"!==n[0]&&"init"!==n?(this.each((function(){var i=e.data(this,"plugin_slicknav");i instanceof v&&"function"==typeof i[n]&&(t=i[n].apply(i,Array.prototype.slice.call(a,1)))})),void 0!==t?t:this):void 0}}(jQuery,document,window);
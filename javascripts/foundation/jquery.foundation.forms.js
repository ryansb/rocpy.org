/*
 * jQuery Custom Forms Plugin 1.0
 * www.ZURB.com
 * Copyright 2010, ZURB
 * Free to use under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
*/
(function(e){jQuery.foundation=jQuery.foundation||{},jQuery.foundation.customForms=jQuery.foundation.customForms||{},e.foundation.customForms.appendCustomMarkup=function(t){function r(t,n){var r=e(n).hide(),i=r.attr("type"),s=r.next("span.custom."+i);s.length===0&&(s=e('<span class="custom '+i+'"></span>').insertAfter(r)),s.toggleClass("checked",r.is(":checked")),s.toggleClass("disabled",r.is(":disabled"))}function i(n,r){var i=e.foundation.utils.hiddenFix(),s=e(r),o=s.next("div.custom.dropdown"),u=o.find("ul"),a=o.find(".current"),f=o.find(".selector"),l=s.find("option"),c=l.filter(":selected"),h=0,p="",d,v=!1;if(s.hasClass(t.disable_class))return;if(o.length===0){var m=s.hasClass("small")?"small":s.hasClass("medium")?"medium":s.hasClass("large")?"large":s.hasClass("expand")?"expand":"";o=e('<div class="'+["custom","dropdown",m].join(" ")+'"><a href="#" class="selector"></a><ul /></div>'),f=o.find(".selector"),u=o.find("ul"),p=l.map(function(){return"<li>"+e(this).html()+"</li>"}).get().join(""),u.append(p),v=o.prepend('<a href="#" class="current">'+c.html()+"</a>").find(".current"),s.after(o).hide()}else p=l.map(function(){return"<li>"+e(this).html()+"</li>"}).get().join(""),u.html("").append(p);o.toggleClass("disabled",s.is(":disabled")),d=u.find("li"),l.each(function(t){this.selected&&(d.eq(t).addClass("selected"),v&&v.html(e(this).html())),e(this).is(":disabled")&&d.eq(t).addClass("disabled")}),u.css("width","auto"),o.css("width","auto"),o.is(".small, .medium, .large, .expand")||(o.addClass("open"),i.adjust(u),h=d.outerWidth()>h?d.outerWidth():h,i.reset(),o.removeClass("open"),o.width(h+18),u.width(h+16))}var n={disable_class:"no-custom"};t=e.extend(n,t),e("form.custom input:radio[data-customforms!=disabled]").each(r),e("form.custom input:checkbox[data-customforms!=disabled]").each(r),e("form.custom select[data-customforms!=disabled]").each(i)};var t=function(t){var n=0,r=t.next();$options=t.find("option"),r.find("ul").html(""),$options.each(function(){$li=e("<li>"+e(this).html()+"</li>"),r.find("ul").append($li)}),$options.each(function(t){this.selected&&(r.find("li").eq(t).addClass("selected"),r.find(".current").html(e(this).html())),e(this).is(":disabled")&&r.find("li").eq(t).addClass("disabled")}),r.removeAttr("style").find("ul").removeAttr("style"),r.find("li").each(function(){r.addClass("open"),e(this).outerWidth()>n&&(n=e(this).outerWidth()),r.removeClass("open")}),r.css("width",n+18+"px"),r.find("ul").css("width",n+16+"px")},n=function(e){var t=e.prev(),n=t[0];!1===t.is(":disabled")&&(n.checked=n.checked?!1:!0,e.toggleClass("checked"),t.trigger("change"))},r=function(e){var t=e.prev(),n=t.closest("form.custom"),r=t[0];!1===t.is(":disabled")&&(n.find('input:radio[name="'+t.attr("name")+'"]').next().not(e).removeClass("checked"),e.hasClass("checked")||e.toggleClass("checked"),r.checked=e.hasClass("checked"),t.trigger("change"))};e(document).on("click","form.custom span.custom.checkbox",function(t){t.preventDefault(),t.stopPropagation(),n(e(this))}),e(document).on("click","form.custom span.custom.radio",function(t){t.preventDefault(),t.stopPropagation(),r(e(this))}),e(document).on("change","form.custom select[data-customforms!=disabled]",function(n){t(e(this))}),e(document).on("click","form.custom label",function(t){var i=e("#"+e(this).attr("for")+"[data-customforms!=disabled]"),s,o;i.length!==0&&(i.attr("type")==="checkbox"?(t.preventDefault(),s=e(this).find("span.custom.checkbox"),s.length==0&&(s=e(this).next("span.custom.checkbox")),s.length==0&&(s=e(this).prev("span.custom.checkbox")),n(s)):i.attr("type")==="radio"&&(t.preventDefault(),o=e(this).find("span.custom.radio"),o.length==0&&(o=e(this).next("span.custom.radio")),o.length==0&&(o=e(this).prev("span.custom.radio")),r(o)))}),e(document).on("click","form.custom div.custom.dropdown a.current, form.custom div.custom.dropdown a.selector",function(t){var n=e(this),r=n.closest("div.custom.dropdown"),i=r.prev();t.preventDefault(),e("div.dropdown").removeClass("open");if(!1===i.is(":disabled"))return r.toggleClass("open"),r.hasClass("open")?e(document).bind("click.customdropdown",function(t){r.removeClass("open"),e(document).unbind(".customdropdown")}):e(document).unbind(".customdropdown"),!1}),e(document).on("click","form.custom div.custom.dropdown li",function(t){var n=e(this),r=n.closest("div.custom.dropdown"),i=r.prev(),s=0;t.preventDefault(),t.stopPropagation(),e(this).hasClass("disabled")||(e("div.dropdown").removeClass("open"),$oldThis=n.closest("ul").find("li.selected"),$oldThis.removeClass("selected"),n.addClass("selected"),r.removeClass("open").find("a.current").html(n.html()),n.closest("ul").find("li").each(function(e){n[0]==this&&(s=e)}),i[0].selectedIndex=s,i.data("prevalue",$oldThis.html()),i.trigger("change"))}),e.fn.foundationCustomForms=e.foundation.customForms.appendCustomMarkup})(jQuery);
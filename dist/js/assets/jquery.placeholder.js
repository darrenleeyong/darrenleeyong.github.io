!function(e){"function"==typeof define&&define.amd?define(["jquery"],e):"object"==typeof module&&module.exports?e(require("jquery")):e(jQuery)}(function(e){var t,a,l="[object OperaMini]"===Object.prototype.toString.call(window.operamini),r="placeholder"in document.createElement("input")&&!l,o="placeholder"in document.createElement("textarea")&&!l,s=e.valHooks,d=e.propHooks,i={};function n(t,a){var l=this,r=e(l);if(l.value===r.attr("placeholder")&&r.hasClass(i.customClass))if(l.value="",r.removeClass(i.customClass),r.data("placeholder-password")){if(r=r.hide().nextAll('input[type="password"]:first').show().attr("id",r.removeAttr("id").data("placeholder-id")),!0===t)return r[0].value=a,a;r.focus()}else l==c()&&l.select()}function u(t){var a,l,r,o,s=this,d=e(s),u=s.id;if(t&&"blur"===t.type){if(d.hasClass(i.customClass))return;if("password"===s.type&&(a=d.prevAll('input[type="text"]:first')).length>0&&a.is(":visible"))return}if(""===s.value){if("password"===s.type){if(!d.data("placeholder-textinput")){try{a=d.clone().prop({type:"text"})}catch(t){a=e("<input>").attr(e.extend((l=this,r={},o=/^jQuery\d+$/,e.each(l.attributes,function(e,t){t.specified&&!o.test(t.name)&&(r[t.name]=t.value)}),r),{type:"text"}))}a.removeAttr("name").data({"placeholder-enabled":!0,"placeholder-password":d,"placeholder-id":u}).bind("focus.placeholder",n),d.data({"placeholder-textinput":a,"placeholder-id":u}).before(a)}s.value="",d=d.removeAttr("id").hide().prevAll('input[type="text"]:first').attr("id",d.data("placeholder-id")).show()}else{var c=d.data("placeholder-password");c&&(c[0].value="",d.attr("id",d.data("placeholder-id")).show().nextAll('input[type="password"]:last').hide().removeAttr("id"))}d.addClass(i.customClass),d[0].value=d.attr("placeholder")}else d.removeClass(i.customClass)}function c(){try{return document.activeElement}catch(e){}}r&&o?((a=e.fn.placeholder=function(){return this}).input=!0,a.textarea=!0):((a=e.fn.placeholder=function(t){return i=e.extend({},{customClass:"placeholder"},t),this.filter((r?"textarea":":input")+"[placeholder]").not("."+i.customClass).bind({"focus.placeholder":n,"blur.placeholder":u}).data("placeholder-enabled",!0).trigger("blur.placeholder")}).input=r,a.textarea=o,t={get:function(t){var a=e(t),l=a.data("placeholder-password");return l?l[0].value:a.data("placeholder-enabled")&&a.hasClass(i.customClass)?"":t.value},set:function(t,a){var l,r,o=e(t);return""!==a&&(l=o.data("placeholder-textinput"),r=o.data("placeholder-password"),l?(n.call(l[0],!0,a)||(t.value=a),l[0].value=a):r&&(n.call(t,!0,a)||(r[0].value=a),t.value=a)),o.data("placeholder-enabled")?(""===a?(t.value=a,t!=c()&&u.call(t)):(o.hasClass(i.customClass)&&n.call(t),t.value=a),o):(t.value=a,o)}},r||(s.input=t,d.value=t),o||(s.textarea=t,d.value=t),e(function(){e(document).delegate("form","submit.placeholder",function(){var t=e("."+i.customClass,this).each(function(){n.call(this,!0,"")});setTimeout(function(){t.each(u)},10)})}),e(window).bind("beforeunload.placeholder",function(){e("."+i.customClass).each(function(){this.value=""})}))});
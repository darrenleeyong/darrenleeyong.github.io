!function(e){"use strict";var s=e(".slider"),i=(s.find(".slides"),s.find(".slide")),d=s.width(),a=i.length,t=1,r=i.filter(":first"),l=i.filter(":last"),n={x:-1,y:0};r.before(l.clone(!0)),l.after(r.clone(!0)),s.attr("data-index",t),i.eq(0).addClass("active"),i.eq(0).hasClass("dark")&&e("body").addClass("dark-hero"),s.on("mousemove",function(s){var i=e(this),d=i.offset();n.x=s.pageX-d.left,n.y=s.pageY-d.top,n.x>i.width()/2?(i.find(".slides").css("cursor","url(/modules/titan-slider/slide-right-dark.png) 5 -25, e-resize"),e("body").hasClass("dark-hero")&&i.find(".slides").css("cursor","url(/modules/titan-slider/slide-right.png) 5 -25, e-resize"),i.addClass("next").removeClass("previous")):(i.find(".slides").css("cursor","url(/modules/titan-slider/slide-left-dark.png) 5 -25, w-resize"),e("body").hasClass("dark-hero")&&i.find(".slides").css("cursor","url(/modules/titan-slider/slide-left.png) 5 -25, w-resize"),i.addClass("previous").removeClass("next")),n.y>i.height()-15&&i.css("cursor","default")}),s.on("click",function(){var s,i=e(this),d=i.hasClass("next")?1:-1,r=i.find(".slides"),l=i.find(".slide"),n=i.width();t+=d,l.removeClass("active"),l.eq(t).addClass("active"),(s=!!(0===t||t>a))&&(t=0===t?a:1,l.eq(t).addClass("active")),r.velocity({left:"+="+-n*d},{duration:"1000",easing:"easeInOutQuart",complete:function(){l.eq(t).find("video").trigger("pause"),s&&r.velocity({left:-n*t},{duration:"0"}),i.attr("data-index",t),l.eq(t).has("video")&&l.eq(t).find("video").trigger("play"),l.eq(t).hasClass("dark")?e("body").addClass("dark-hero"):e("body").removeClass("dark-hero")}})}),e(window).on("resize",function(){s.each(function(s){var i=e(this),a=i.find(".slides"),t=i.find(".slide"),r=i.width(),l=parseInt(i.attr("data-index")),n=t.length,o=n*i.width();a.width(d*n),t.width(100/n+"%"),a.css({left:-r*l,width:o})})})}(jQuery);
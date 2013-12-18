/*
 * Plugin Name: Resize Image to Parent Container
 *
 * Author: Christian Varga
 * Author URI: http://christianvarga.com
 *
 */
(function(a){a.fn.resizeToParent=function(b){var c={parent:"div"};var b=a.extend(c,b);function d(l){l.css({width:"",height:"","margin-left":"","margin-top":""});var i=l.parents(b.parent).width();var h=l.parents(b.parent).height();var f=l.width();var e=l.height();var k=f/i;if((e/k)<h){l.css({width:"auto",height:h});f=f/(e/h);e=h}else{l.css({height:"auto",width:i});f=i;e=e/k}var j=(f-i)/-2;var g=(e-h)/-2;l.css({"margin-left":j,"margin-top":g})}return this.each(function(){var e=a(this);e.attr("src",e.attr("src"));e.load(function(){d(e)});if(this.complete){d(e)}a(window).on("resize",function(){d(e)})})}})(jQuery);
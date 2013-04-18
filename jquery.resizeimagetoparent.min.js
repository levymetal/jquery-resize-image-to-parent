/*
 * Plugin Name: Resize Image to Parent Container
 *
 * Author: Christian Varga
 * Author URI: http://christianvarga.com
 *
 */
jQuery.fn.resizeToParent=function(a){var b={parent:"div"};var a=jQuery.extend(b,a);return this.each(function(){var d=a;var c=jQuery(this);c.load(function(){var i=c.parents(d.parent).width();var h=c.parents(d.parent).height();var f=c.width();var e=c.height();var k=f/i;if((e/k)<h){c.css({width:"auto",height:h});f=f/(e/h);e=h}else{c.css({height:"auto",width:i});f=i;e=e/k}var j=(f-i)/-2;var g=(e-h)/-2;c.css({"margin-left":j,"margin-top":g})});if(this.complete){c.trigger("load")}})};
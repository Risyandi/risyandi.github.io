/*
 * Copyright (c) 2017 
 */
// -----------------------------------------------------
// --------------------  FUNCTIONS  --------------------
// -----------------------------------------------------
// -----------------------------------------------------
// ---------------    GET YEAR FOOTER   ----------------
// -----------------------------------------------------
function edina_getyear_footer(){"use strict";var e=new Date;jQuery(".year-footer").text(e.getFullYear())}
// -----------------------------------------------------
// ---------------    IMAGE TO SVG    ------------------
// -----------------------------------------------------
function edina_tm_imgtosvg(){"use strict";jQuery("img.svg").each(function(){var e=jQuery(this),t=e.attr("class"),i=e.attr("src");jQuery.get(i,function(i){
// Get the SVG tag, ignore the rest
var n=jQuery(i).find("svg");
// Add replaced image's classes to the new SVG
void 0!==t&&(n=n.attr("class",t+" replaced-svg")),
// Remove any invalid XML tags as per http://validator.w3.org
n=n.removeAttr("xmlns:a"),
// Replace image with new SVG
e.replaceWith(n)},"xml")})}
// -----------------------------------------------------
// ---------------  HAMBURGER  -------------------------
// -----------------------------------------------------
function edina_tm_hamburger(){"use strict";var e=jQuery(".hamburger"),t=jQuery(".edina_tm_mobile_menu_wrap");e.on("click",function(){var e=jQuery(this);return e.hasClass("is-active")?(e.removeClass("is-active"),t.slideUp()):(e.addClass("is-active"),t.slideDown()),!1})}
// -----------------------------------------------------
// --------------    MAGNIFIC POPUP    -----------------
// -----------------------------------------------------
function edina_tm_magnific_popup(){"use strict";jQuery(".open-popup-link").magnificPopup({type:"inline",midClick:!0}),jQuery(".gallery").each(function(){// the containers for all your galleries
jQuery(this).magnificPopup({delegate:"a",// the selector for gallery item
type:"image",gallery:{enabled:!0}})}),jQuery(".gallery_zoom").each(function(){// the containers for all your galleries
jQuery(this).magnificPopup({delegate:"a.zoom",// the selector for gallery item
type:"image",gallery:{enabled:!0},removalDelay:300,mainClass:"mfp-fade"})}),jQuery(".popup-youtube").each(function(){// the containers for all your galleries
jQuery(this).magnificPopup({
//type: 'iframe',
disableOn:700,type:"iframe",mainClass:"mfp-fade",removalDelay:160,preloader:!1,fixedContentPos:!1})})}
// -----------------------------------------------------
// --------------------    JARALLAX    -----------------
// -----------------------------------------------------
function edina_tm_jarallax(){"use strict";jQuery(".jarallax").each(function(){var e=jQuery(this),t=e.data("speed");"undefined"!==t&&""!==t||(t=.5),e.jarallax({speed:t})})}
// -------------------------------------------------
// -----------------    PORTFOLIO    ---------------
// -------------------------------------------------
// filterable 
function edina_tm_portfolio(){"use strict";if(jQuery().isotope){
// Needed variables
var e=jQuery(".edina_tm_portfolio_list"),t=jQuery(".edina_tm_portfolio_filter");t.length&&(
// Isotope Filter 
t.find("a").on("click",function(){var t=jQuery(this).attr("data-filter");return e.isotope({filter:t,animationOptions:{duration:750,easing:"linear",queue:!1}}),!1}),
// Change active element class
t.find("a").on("click",function(){return t.find("a").removeClass("current"),jQuery(this).addClass("current"),!1}))}}function edina_tm_portfolio_animation(){"use strict";jQuery(".edina_tm_portfolio_list > li").each(function(){var e=jQuery(this),t=e.find(".list_inner"),i=e.find(".image_wrap"),n=e.find(".definition_portfolio"),a=e.find(".definition_portfolio").outerHeight();t.each(function(){jQuery(this).on("mouseenter",function(){i.css({top:-a/2}),n.css({marginTop:-a})}).on("mouseleave",function(){i.css({top:0}),n.css({marginTop:0})})})})}
// -----------------------------------------------------
// --------------------    TOTOP    --------------------
// -----------------------------------------------------
function edina_tm_totop(){"use strict";jQuery(".edina_tm_to_top_wrap").on("click",function(e){return e.preventDefault(),jQuery("html, body").animate({scrollTop:0},"slow"),!1})}function edina_tm_totop_myhide(){"use strict";var e=jQuery(".edina_tm_to_top_wrap");e.length&&(e.offset().top>1350?e.addClass("opened"):e.removeClass("opened"))}
// -----------------------------------------------------
// ------------    NAV BACKGROUND  SCROLL    -----------
// -----------------------------------------------------
function edina_tm_nav_bg_scroll(){"use strict";var e=jQuery(".edina_tm_header"),t=jQuery(window).scrollTop();jQuery(window).width()>1040&&jQuery(window).scroll(function(){t>="100"?e.addClass("scroll"):e.removeClass("scroll")})}
// -----------------------------------------------------
// ------------    ANCHOR NAVIGATION    ----------------
// -----------------------------------------------------
function edina_tm_anchor(){"use strict";jQuery(".anchor_nav").onePageNav();jQuery(".anchor a").on("click",function(e){return e.preventDefault(),jQuery("html,body").scrollTo(this.hash,this.hash,{gap:{y:-85},animation:{duration:1500,easing:"easeInOutExpo"}}),!1})}
// -----------------------------------------------------
// ----------------    BACKGROUND AUDIO    -------------
// -----------------------------------------------------
// ponytail: browsers block autoplay until first user interaction, so start playback on the first click/scroll/keypress
function edina_tm_bg_audio(){"use strict";var e=document.getElementById("bg_audio");if(e){var t=function(){e.play().catch(function(){}),document.removeEventListener("click",t),document.removeEventListener("scroll",t),document.removeEventListener("keydown",t)};document.addEventListener("click",t),document.addEventListener("scroll",t),document.addEventListener("keydown",t)}}
// -----------------------------------------------------
// --------------------    OWL CAROUSEL    -------------
// -----------------------------------------------------
function edina_tm_owl_carousel(){"use strict";jQuery(".edina_tm_testimonial_wrap .owl-carousel").owlCarousel({loop:!0,margin:70,autoplay:7e3,autoWidth:!1,nav:!1,items:3,smartSpeed:5e3,responsive:{0:{items:1},480:{items:2},768:{items:3},1040:{items:3},1600:{items:3},1920:{items:3}}}),jQuery(".edina_tm_partners_wrap .owl-carousel").owlCarousel({loop:!0,margin:40,autoplay:6e3,autoWidth:!1,nav:!1,items:4,smartSpeed:3e3,responsive:{0:{items:1,margin:0},480:{items:2},768:{items:3},1040:{items:4},1600:{items:4},1920:{items:4}}})}
// -----------------------------------------------------
// --------------------    WOW JS    -------------------
// -----------------------------------------------------
// -----------------------------------------------------
// ---------------    HERO TEXT ANIATION  --------------
// -----------------------------------------------------
function edina_tm_text_animation(){"use strict";var e=jQuery(window).height(),t=jQuery(".edina_tm_universal_box_wrap .hero_title"),i=e/2+t.outerHeight()/2-jQuery(".edina_tm_header").outerHeight();jQuery(window).on("scroll",function(){var e=jQuery(window).scrollTop();t.css({opacity:1-e/i,marginTop:e/i*200})})}
// -------------------------------------------------
// -------------   ANIMATE TEXT  -------------------
// -------------------------------------------------
function edina_tm_animate_text(){"use strict";var e=jQuery(".edina_tm_animation_text_word");if(e.length){
// Clear any existing typed instance by replacing the span element
if(e.data("typed")){var t=e.clone().empty();e.replaceWith(t),e=t}var i=["SOFTWARE ENGINEER","THE HAPPY CYCLIST","PHOTOGRAPHER","A DIGITAL NOMAD"];"id"===(localStorage.getItem("risyandi_lang")||"en")&&(i=["ENGINEER PERANGKAT LUNAK","PESEPEDA BAHAGIA","FOTOGRAFER","NOMADEN DIGITAL"]),e.typed({strings:i,loop:!0,showCursor:!1,startDelay:500,backDelay:2e3})}}
// -----------------------------------------------------
// -------------------    POPUP BLOG    ----------------
// -----------------------------------------------------
// function edina_tm_popup_blog(){
// 	"use strict";
// 	var li				= jQuery('.edina_tm_list_wrap.blog_list .inner_list');
// 	var popupBox		= jQuery('#edina_tm_popup_blog');
// 	var popupInner		= popupBox.find('.inner_popup');
// 	var closePopup		= popupBox.find('.close');
// 	li.each(function(){
// 		var element		= jQuery(this);
// 		var button		= element.find('.read_more a,.title_holder a,.link_news');
// 		var html		= element.html();
// 		var mainImage	= element.find('.news_image');
// 		var imgData		= mainImage.data('url');
// 		var title		= element.find('.title_holder h3');
// 		var titleHref	= element.find('.title_holder h3 a').html();
// 		mainImage.css({backgroundImage: 'url('+imgData+')'});
// 		button.on('click',function(){
// 			popupBox.addClass('opened');
// 			popupInner.html(html);
// 			mainImage = popupInner.find('.news_image');
// 			mainImage.css({backgroundImage: 'url('+imgData+')'});
// 			title = popupInner.find('.title_holder h3');
// 			title.html(titleHref);
// 			return false;
// 		});
// 	});
// 	closePopup.on('click',function(){
// 		popupBox.removeClass('opened');
// 		popupInner.html('');
// 		return false;
// 	});
// }
// -----------------------------------------------------
// -------------    BLOG MENU SCROLL -------------------
// -----------------------------------------------------
function edina_tm_popupscroll(){"use strict";var e=jQuery(window).height(),t=jQuery(".scrollable");jQuery(".edina_tm_popup_blog .inner_popup").css({height:e-100}),t.each(function(){var e=jQuery(this),t=jQuery(window).height();e.css({height:t-100}),e.niceScroll({touchbehavior:!1,cursorwidth:0,autohidemode:!0,cursorborder:"0px solid #fff"})})}
//  send message
function clickSend(){$(".send-message").on("click",function(){$("#send-message-yes").trigger("click")})}
// -----------------------------------------------------
// -------------    INSIGHTS LINK ROTATOR  --------------
// -----------------------------------------------------
function edina_tm_insights_link(){"use strict";var e=["https://insights.risyandi.com","https://risyandi.com/blogs"];jQuery("#see_more_insights").attr("href",e[Math.floor(Math.random()*e.length)])}
// owl carousel
function edina_carousel_news(){$(".owl-carousel-news").owlCarousel({loop:!0,center:!1,margin:0,responsiveClass:!0,nav:!0,autoplay:!0,autoplayTimeout:3e3,autoplayHoverPause:!0,responsive:{0:{items:1,nav:!1},600:{items:2,nav:!1},1e3:{items:3,nav:!0,loop:!0}}})}jQuery(document).ready(function(){"use strict";
// here all ready functions
edina_getyear_footer(),edina_tm_hamburger(),edina_tm_imgtosvg(),edina_tm_magnific_popup(),edina_tm_jarallax(),edina_tm_portfolio(),edina_tm_portfolio_animation(),edina_tm_totop(),edina_tm_totop_myhide(),edina_tm_nav_bg_scroll(),edina_tm_anchor(),edina_tm_bg_audio(),edina_tm_owl_carousel(),edina_tm_text_animation(),edina_tm_animate_text(),edina_tm_popupscroll(),edina_carousel_news(),
// edina_tm_popup_blog();
clickSend(),edina_tm_insights_link(),jQuery(window).on("scroll",function(){
//e.preventDefault();
edina_tm_totop_myhide(),edina_tm_nav_bg_scroll()})}),window.edina_getyear_footer=edina_getyear_footer,(new WOW).init(),window.edina_tm_animate_text=edina_tm_animate_text,$(".youtube-bg").mb_YTPlayer();
//<![CDATA[
// Popular Post Snippet
$(".popular-posts ul li .item-snippet").each(function(){var t=$(this).text().substr(0,60),s=t.lastIndexOf(" ");s>42&&$(this).text(t.substr(0,s).replace(/[?,!\.-:;]*$/,"..."))});
$("img.recent_thumb").each(function(){$(this).attr("src",$(this).attr("src").replace(/\/s[0-9]+(\-c)?\//,"/w80-h80-c/"))});
$(".avatar-image-container img").each(function(){$(this).attr("src",$(this).attr("src").replace(/\/s[0-9]+(\-c)?\//,"/w70-h70-c/"))});
$(".item-thumbnail img").each(function(){$(this).attr("src",$(this).attr("src").replace(/\/s[0-9]+(\-c)?\//,"/w72-h72-c/"))});
$("img.label_thumb").each(function(){$(this).attr("src",$(this).attr("src").replace(/\/s[0-9]+(\-c)?\//,"/w72-h72-c/"))});

jQuery(document).ready(function($){
	
	"use strict";

	// Attach + To Top Menu
	$('#top-nav .menu-item-has-children > a, #main-nav ul li ul .menu-item-has-children > a').append(' +');

	// Attach Arrow To Main Menu
	$('#main-nav .menu-item-has-children > a').append('<span class="menu-arrow"></span>');
	
	// Prepend Menu Icons
	$('#logo').after('<div id="menu-icon"></div>');

	$('#top-nav .wrapper').append('<div id="top-menu-icon"></div>');
	
	// Toggle Nav
	$('#menu-icon').on('click', function(){
		$('#main-nav').slideToggle(250);
		$(this).toggleClass('active');
	});
	
	$(window).resize(function(){  
		var w = $(window).width();
		var navDisplay = $('#main-nav');
		if(w > 1000 && navDisplay.is(':hidden')) {  
			navDisplay.removeAttr('style');
		}
	});

	$('#top-menu-icon').on('click', function(){
		$('#top-nav ul').slideToggle(250);
		$(this).toggleClass('active');
	});
	
	$(window).resize(function(){  
		var w = $(window).width();
		var navDisplay = $('#top-nav ul');
		if(w > 1000 && navDisplay.is(':hidden')) {  
			navDisplay.removeAttr('style');
		}
	});

	
});


//]]>

/* calcite-maps - v0.0.1 - 2016-05-04
*  https://github.com/alaframboise/calcite-maps#readme
*  Copyright (c) 2016 Environmental Systems Research Institute, Inc.
*  Apache 2.0 License */
!function($){"use strict";function isMobile(){return $(".navbar-toggle").is(":visible")}var _mobile=isMobile();$("#mainNav li > a").on("click",function(e){var panelBody,panels,panel=$(e.currentTarget.dataset.target);panel.hasClass("panel")&&(panelBody=panel.find(".panel-collapse"),panel.hasClass("in")||panel.collapse("show"),panelBody.hasClass("in")||panel.find(".panel-toggle").trigger("click"),_mobile&&(panels=$("#panelAccordion .panel.in").not(e.currentTarget.dataset.target),panels.collapse("hide")))}),$("#mainNav").on("show.bs.collapse",function(e){_mobile&&$("#mainNav .dropdown").addClass("open")}),$("#mainNav").on("shown.bs.collapse",function(e){_mobile&&$("#mainNav .dropdown").addClass("open")}),$("#mainNav .dropdown").on("hide.bs.dropdown",function(e){_mobile&&$("#mainNav").hasClass("in")&&$(e.target).hasClass("open")&&$("#mainNav").collapse("hide")}),$(".navbar-brand").on("click",function(){$("body").hasClass("nav-position-top-fixed")||$("body").hasClass("nav-position-bottom-fixed")||($("body").hasClass("is-minibar")?($("#mainNav ul.nav > li, .navbar-title, .navbar-toggle").removeClass("hidden"),$("body").removeClass("is-minibar")):($("#mainNav ul.nav > li, .navbar-title, .navbar-toggle").addClass("hidden"),$("body").addClass("is-minibar")))}),$(window).on("resize",function(){if(!_mobile&&isMobile()){var panel,panels=$("#panelAccordion .panel.in");panels.length>0&&(panel=panels.find(".panel-collapse.in"),panel.length>0?panels=$("#panelAccordion .panel.in:not(#"+panel.parent().attr("id")+")"):(panel=panels[0],panels=$("#panelAccordion .panel.in:not(#"+panel.id+")")),panels.collapse("hide"))}_mobile=isMobile()}),$(".map-container").on("touchmove",function(e){e.preventDefault()})}(jQuery);
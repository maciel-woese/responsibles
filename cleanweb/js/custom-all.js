/*
 * JS Settings For Site Templates by idea4theme.com
 * Copyright 2013 By IDEA4THEME.COM
 */
//For Menu Effect:
jQuery(document).ready(function ($) {

    function HoverOver() {
        $(this).addClass('rmhover') .find(".subMenu").stop().animate({height:'show'},200);
    }

    function HoverOut() {
         $(this).removeClass('rmhover').find(".subMenu").animate({height: 'hide'},200, function() {
		  $(this).hide(); 
	  });
    }
	
	function HoverOversub() {
      $(this).find(".level3").stop().animate({height: 'show'},200);
    	// SubMenu right align
			var sublevel = $(".level3", $(this));
			if(sublevel.length > 0){
				var offset = sublevel.offset();
				var rightEage = offset.left + sublevel.outerWidth();
				if(rightEage > $(window).width()){
					sublevel.css("left", -182 + "px");
					sublevel.find(".level4").css("left", -182 + "px");
					sublevel.find(".level3").css("left", -182 + "px");
					sublevel.find(".subarrow").css("background", "none");
				}
			}
		
		}

    function HoverOutsub() {
         $(this).find(".level3").stop().animate({height: 'hide'},200, function() {
		  $(this).hide(); 
	  });
    }

        var config = {
            sensitivity: 2,
            interval:100,
            over: HoverOver,
            timeout:100,
            out: HoverOut
        };
        var configsub = {
            sensitivity: 2,
            interval:100,
            over: HoverOversub,
            timeout:100,
            out: HoverOutsub
        };
        $("#standardMenu .rootMenu > li.haschild").hoverIntent(config);
		$("#standardMenu .subMenu li.haschild").hoverIntent(configsub);
	
	// SubMenu animation
    $('#standardMenu .subMenu li a span').hover(
        function(){ $(this).stop().animate({textIndent: 2}, 300); },
        function(){ $(this).stop().animate({textIndent: 0}, {duration: 300, complete: function(){}}); }
    );

   // For Win8 Tablet
   $('#standardMenu .haschild li').attr("aria-haspopup","false");
   $('#standardMenu .haschild li').attr("role","menu");
   $('#standardMenu .haschild').attr("aria-haspopup","true");
   $('#standardMenu .haschild').attr("role","menuitem");

});


//For Mobile Menu:
jQuery(document).ready(function(){
	  $(".menuclick").click(function(event) {
	    event.preventDefault();
	    $(".menu_box").slideToggle("fast");
			return false;
	  });
});


//For Color Picker:
jQuery(document).ready(function () {
    $('#custom-button').click(
    	function () {
    	    if ($('#custom_wrapper').css('left') != '0px') {
    	        $('#custom_wrapper').animate({ "left": "0px" }, { duration: 300 });
    	        $(this).animate({ "left": "150px" }, { duration: 300 });
    	    }
    	    else {
    	        $('#custom_wrapper').animate({ "left": "-155px" }, { duration: 300 });
    	        $('#custom-button').animate({ "left": "0px" }, { duration: 300 });
    	    }
    	}
    );
    $('#bg_color').ColorPicker({
        onShow: function(colpkr) {
            $(colpkr).fadeIn("fast");
            return false
        },
        onHide: function(colpkr) {
            $(colpkr).fadeOut("fast");
            return false
        },
        onChange: function(hsb, hex, rgb) {
            var color = hex;
            var defaultPattern = "url(/Portals/_default/Skins/CleanWeb-SteelBlue/images/bg_pattern/bg_grid_12.png)";
            $('#bg_color,.pre_defined_color, .skin_top_bg, .banner_style, .pagename_style, .rootMenu > li,  .icon_hover .service-bg,.buying_button a.button, .caroul_prev,.caroul_next, .footer_tag ul li a,.success_left img,.contact_page .input_button a,.standard_title img,.standard_content_border,.content_right_border .left_border,.blog_about_content .title_right_bottom a,.button1_style span, .button2_style span,.content_right_border .left_border, .project-pagination a:hover,.project-pagination li.current a,.container03_style > h3,.container04_style > h3,.container05_style > h3,.container06_style > h3,.container07_style > h3').css({
                backgroundColor: '#' + color
            });
			$('.subMenu li.current > a span,.tags_style p span,.project-pagination a,.container01_style > h3,.container02_style > h3').css({color: '#' + color});
			$('.container05_text_style,.container05_style > h3,.project-pagination li.current a,.container02_style > h3').css({borderColor: '#' + color});
            $.cookie("custom_bgimage", null);
            $.cookie("custom_color", color);
            $.cookie("custom_defaultBg", defaultPattern)
        },
        color: '#409dc1'
    });
	$('#bg_pattern a.pattern-box').each(function(i) {
        var a = $(this);
        var patternUrl = 'url(images/bg_pattern/' + a.attr('rel') + '.png)';
        a.css({
            backgroundImage: patternUrl
        })
    });
	var color = $.cookie("custom_color");
    var defaultPattern = $.cookie("custom_defaultBg");
    var pattern = $.cookie("custom_pattern");
    $('#bg_pattern a.pattern-box').click(function(e) {
        e.preventDefault();
        var patternUrl = 'url(images/bg_pattern/' + $(this).attr('rel') + '.png)';
        $('body, .skin_footer, .footer_bottom').css({
            backgroundImage: patternUrl,
            backgroundRepeat: "repeat"
        });
        $.cookie("custom_bgimage", null);
        $.cookie("custom_pattern", patternUrl)
    });
    var color = $.cookie("custom_color");
    var defaultPattern = $.cookie("custom_defaultBg");
    var background = $.cookie("custom_bgimage");
    if (color) {
        $.cookie("custom_bgimage", null);
         $('#bg_color,.pre_defined_color, .skin_top_bg, .banner_style, .pagename_style, .rootMenu > li,  .icon_hover .service-bg,.buying_button a.button, .caroul_prev,.caroul_next, .footer_tag ul li a,.success_left img,.contact_page .input_button a,.standard_title img,.standard_content_border,.content_right_border .left_border,.blog_about_content .title_right_bottom a,.button1_style span, .button2_style span,.content_right_border .left_border, .project-pagination a:hover,.project-pagination li.current a,.container03_style > h3,.container04_style > h3,.container05_style > h3,.container06_style > h3,.container07_style > h3').css({
            backgroundColor: '#' + color
        })
		$('.subMenu li.current > a span,.tags_style p span,.project-pagination a,.container01_style > h3,.container02_style > h3').css({color: '#' + color});
		$('.container05_text_style,.container05_style > h3,.project-pagination li.current a,.container02_style > h3').css({borderColor: '#' + color});
    }
    var pattern = $.cookie("custom_pattern");
    if (pattern) {
        $('body, .skin_footer, .footer_bottom').css({
            backgroundImage: pattern,
            backgroundRepeat: "repeat"
        })
    } else {
        if (background) {
            $('body, .skin_footer, .footer_bottom').css({
                backgroundImage: background,
                backgroundRepeat: "norepeat",
                backgroundPosition: "top center",
                backgroundAttachment: "fixed"
            })
        }
    };
	$('#bg_pattern a.bg-box').each(function(i) {
        var backgroundUrl = 'url(images/bg_pattern/' + $(this).attr('rel') + '.png)';
        var a = $(this);
        a.css({
            backgroundImage: backgroundUrl
        })
    });
	$('#bg_pattern a.bg-box').click(function(e) {
        e.preventDefault();
        var backgroundUrl = 'url(images/bg_pattern/' + $(this).attr('rel') + '.png)';
        $('body, .skin_footer, .footer_bottom').css({
            backgroundImage: backgroundUrl,
            backgroundRepeat: "norepeat",
            backgroundPosition: "top center",
            backgroundAttachment: "fixed"
        });
        $.cookie("custom_bgimage", backgroundUrl)
    });
    var background = $.cookie("custom_bgimage");
    if (background) {
        $('body, .skin_footer, .footer_bottom').css({
            backgroundImage: background,
            backgroundRepeat: "norepeat",
            backgroundPosition: "top center",
            backgroundAttachment: "fixed"
        })
    }
	$('#boxed_button').click(function () { 	
		location.reload();
		var boxedWidth = "980";
		setTimeout(function(){
		  $("#skin_wrapper").css("width","980");	
		},1000);
		$.cookie("boxed", boxedWidth);
		$.cookie("stretched", null);
	});
	var boxed = $.cookie("boxed");
	if (boxed) {
        $("#skin_wrapper").css("width","980");	
	}
	$('#stretched_button').click(function () {
		location.reload();
		var stretchedWidth = "100%";
		setTimeout(function(){
		  $("#skin_wrapper").css("width","100%");
		},1000);
		$.cookie("boxed", null);
		$.cookie("stretched", stretchedWidth);
	});
	var stretched =  $.cookie("stretched");
	if (stretched) {
        $("#skin_wrapper").css("width","100%");	
	}
	$('#custom-reset').click(function(event) {
        event.preventDefault();
        $.cookie("custom_bgimage", null);
        $.cookie("custom_pattern", null);
        $.cookie("custom_color", null);
        $.cookie("custom_defaultBg", defaultPattern)
		$.cookie("boxed", null);
        $.cookie("stretched", null)
        location.reload();
    });
});
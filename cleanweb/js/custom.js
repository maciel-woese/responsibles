/*
 * JS Settings For Site Templates by idea4theme.com
 * Copyright 2013 By IDEA4THEME.COM
 */
//For Fancy Lightbox Alternative:
jQuery(document).ready(function() {
	$(".fancybox").fancybox({
	    openEffect:'elastic',closeEffect:'fade',nextEffect:'fade', prevEffect:'fade'
	});
});


//For TB Slider:
jQuery(document).ready(function($) {
		$('.TB_Wrapper').TransBanner({
			responsive : true,
			responsive_limit_autoplay : '', 
			responsive_limit_caption : 480,
			responsive_limit_navigation : 480,
			responsive_limit_navigation_type : 2, 
			responsive_screen_based_limits : true,
			caption_bg_color: '#000',
			caption_bg_opacity: .2,
			slide_delaytime	: 9,
			slide_transition: 2,
			navigation_type: 3,
			button_size: 26,
			slide_transition_period	: 800,
			mouse_hover_pause: true,
		});
});	

//For Icon Hover:
jQuery(document).ready(function($) {
	$(".icon_hover").hover(function () {
		$(this).find('img').animate({ opacity: 0.5 }, 400, function() { $(this).animate({ opacity: 1 }, 400); });
	},
	function () {
	});					 							 
});

//For CarouFredSel Style:
jQuery(document).ready(function() {
	$("#carouFredSel").carouFredSel({
		responsive: true,
		width: "100%",
		prev: "#caroul_prev",
		next: "#caroul_next",
		mousewheel: true,
		scroll: 1,
		items: {
			width: 205,
			//	height: '30%',	//	optionally resize item-height
			visible: {
				min: 4,
				max: 4
			}
		}
	});
});

//For Quovolver Style:
jQuery(document).ready(function($) {
    $("#quovolver_style").quovolver({
        children: "li",
        transitionSpeed: 600,
        autoPlay: true,
        autoPlaySpeed: 5000,
        pauseOnHover: true,
        equalHeight: false,
        navPosition: "above",
        navNum: true
    })
});

//For Shake Style:
jQuery(function(){
    $(".shake img").each(function(k,img){
	  new JumpObj(img,10);
     $(img).hover(function(){this.parentNode.parentNode.className="hover"});
    })
});
/*
    MAIN SCRIPTS - Last updated: 00-00-00
*/
//-----------------------------------------------------------------
// Variables
//-----------------------------------------------------------------

var TOUCH_ENABLED = $(".touch").length;

//-----------------------------------------------------------------
// Document Ready
//-----------------------------------------------------------------

$(document).ready(function() {
    NProgress.start(); // Start preloader bar
    setupHero();
    setupWow();
});

$(window).load(function() {
    NProgress.done();
});

//-----------------------------------------------------------------
// Setup Wow
//-----------------------------------------------------------------

function setupWow() {
    // If NOT mobile or touch device, enhance with transition effects

        var wow = new WOW(
          {
            boxClass:     'wow',      // default
            animateClass: 'animated', // default
            offset:       0          // default
          }
        ).init();

}

//-----------------------------------------------------------------
// Setup Hero
//-----------------------------------------------------------------

function setupHero() {
    bxSlider1 = $('#lv-hero-carousel').bxSlider({
        auto: (TOUCH_ENABLED ? false : false),
        mode: 'horizontal',
        adaptiveHeight: true,
        responsive: true,
        touchEnabled: false,
        pause: 8000, // Slow timer
        slideMargin: 0,
        minSlides: 1,
        controls: false,
        infiniteLoop: true,
        pager: (TOUCH_ENABLED ? false : true),
        pagerSelector: '.lv-hero-carousel-bullets',
        onSliderLoad:  function(){  $('.lv-hero-caption').show().addClass('fadeInLeft');},
        onSlideBefore: function(){  $('.lv-hero-caption').hide().removeClass('fadeInLeft');},
        onSlideAfter:  function(){  $('.lv-hero-caption').show().addClass('fadeInLeft');}
    });

    // $('#testimonial-carousel').bxSlider({
    //   minSlides: 1,
    //   maxSlides: 3,
    //   slideWidth: 400,
    //   slideMargin: 20
    // });

$('#testimonial-slider').slick({
  autoplay: true,
  centerMode: true,
  slidesToShow: 3,
  variableWidth: true,
  slide: '.testimonial-block',
  arrow: true,
  speed: 800,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        variableWidth: true,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1,
        speed: 500,
      }
    },
    {
      breakpoint: 490,
      settings: {
        autoplay: false,
        arrows: false,
        centerMode: true,
        centerPadding: '0',
        slidesToShow: 1,
        speed: 500,
        variableWidth: false,
      }
    }
  ]
});

    // bxSlider2 = $('#testimonial-carousel').bxSlider({
    //     auto: (TOUCH_ENABLED ? false : false),
    //     mode: 'horizontal',
    //     adaptiveHeight: true,
    //     responsive: true,
    //     touchEnabled: false,
    //     pause: 8000, // Slow timer
    //     slideMargin: 0,
    //     minSlides: 3,
    //     controls: false,
    //     infiniteLoop: true,
    //     pager: (TOUCH_ENABLED ? false : true),
    //     pagerSelector: '.lv-hero-carousel-bullets2'
    // });
}
//-----------------------------------------------------------------
// Kickstart Foundation / Touch Conditionals
//-----------------------------------------------------------------

// var touchEvent = TOUCH_ENABLED ? "touchstart" : "click";

//Trigger hamburger by touch on mobile - this eliminates glitch with FastClick.js
// $(".hamburger").css({"visibility": "visible"}).bind(touchEvent, function() {
//     $("#off-canvas-menu").trigger("open.mm");
// });

if (TOUCH_ENABLED) {
    $(".hamburger").css({"visibility": "visible"}).bind("touchstart", function() {
        $("#off-canvas-menu").trigger("open.mm");
    });
} else {
    $(".hamburger").css({"visibility": "visible"}).bind("click", function() {
        $("#off-canvas-menu").trigger("open.mm");
    });
    // Make Accordion jump to the top of the heading on mobile
    // http://foundation.zurb.com/forum/posts/1316-accordion-jump-to-top-when-active
    /*$(document).foundation('accordion', {
        callback: function (el){
            var containerPos = $(el).parent().offset().top;
            $('html, body').animate({ scrollTop: containerPos }, 300);
        }
    });*/
}
//-----------------------------------------------------------------
// <= IE8 Caution Message
//-----------------------------------------------------------------

//$('.lv-alert .close-btn').click(function(){$(this).parent().hide();});

//-----------------------------------------------------------------
// +++ HELPERS +++
//-----------------------------------------------------------------
//==================================================
// Developer: COMMAND+S for screen width
//==================================================

$(document).keypress(function(event) {
    if (event.which == 115 && (event.ctrlKey||event.metaKey)||(event.which == 19)) {
        event.preventDefault();
        alert("(w) "+$(window).width()+" (h) "+$(window).height());
        return false;
    }
    return true;
});
//==================================================
//
//==================================================
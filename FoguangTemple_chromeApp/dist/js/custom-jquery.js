function animate() {
   $('.arrowpointer').fadeIn(300).delay(250).fadeOut(250);
    }
animate();
setInterval(animate, 1500);

//intro text rolling.
var lines = $('.intro-text').text().split("\n");
var bgm = document.getElementById('bgm1');

var timer,
    displayLine = function(){
        var nextLine = lines.shift();
        if(nextLine){
            var newLine = $('<li class="line">' + nextLine + '</li>');
            $('#result').append(newLine);
            newLine.animate({ 'margin-left':0 }, 1100);
            timer = setTimeout(displayLine,700);
        }
    }

timer = setTimeout(displayLine,400);

//timecard fade in on scroll animation
  /* Every time the window is scrolled ... */
  $(window).scroll( function(){
      /* Check the location of each desired element */
      $('.hideme').each( function(i){
          var right_of_object = $(this).offset().left + 100;
          var right_of_window = $(window).scrollLeft() + $(window).width();
          /* If the object is completely visible in the window, fade it it */
          if(right_of_object < right_of_window){
            $(this).animate({'opacity':'1'},500);
            setTimeout(function(){
             $(".delay-show").animate({'opacity':'0.9'},2000);
         }, 2000);

            setTimeout(
              function()
              {$('.timeline-img').fadeIn(500);
                //do something special
              }, 5000);
            //   Timeline nodes and lines positions

          }
          else if( right_of_window > right_of_object ){
              $(this).animate({'opacity':'1'},800);
          }
      });
  });

$( document ).ready(function() {
    $('html').fadeIn(700);
    // // $('.timeline-each').css('opacity','0.5');
    // // $("h1, h2, p").addClass("blue");
    //  $("div").css("border","3px solid red");


  $('body').on('mousewheel DOMMouseScroll', function(event){

          var delta = Math.max(-1, Math.min(1, (event.originalEvent.wheelDelta || -event.originalEvent.detail)));

          $(this).scrollLeft( $(this).scrollLeft() - ( delta * 40 ) );
          event.preventDefault();

      });

// });
});

/* ========================================================================
 * Bootstrap: carousel.js v3.3.6
 * http://getbootstrap.com/javascript/#carousel
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // CAROUSEL CLASS DEFINITION
  // =========================

  var Carousel = function (element, options) {
    this.$element    = $(element)
    this.$indicators = this.$element.find('.carousel-indicators')
    this.options     = options
    this.paused      = null
    this.sliding     = null
    this.interval    = null
    this.$active     = null
    this.$items      = null

    this.options.keyboard && this.$element.on('keydown.bs.carousel', $.proxy(this.keydown, this))

    this.options.pause == 'hover' && !('ontouchstart' in document.documentElement) && this.$element
      .on('mouseenter.bs.carousel', $.proxy(this.pause, this))
      .on('mouseleave.bs.carousel', $.proxy(this.cycle, this))
  }

  Carousel.VERSION  = '3.3.6'

  Carousel.TRANSITION_DURATION = 600

  Carousel.DEFAULTS = {
    interval: 5000,
    pause: 'hover',
    wrap: true,
    keyboard: true
  }

  Carousel.prototype.keydown = function (e) {
    if (/input|textarea/i.test(e.target.tagName)) return
    switch (e.which) {
      case 37: this.prev(); break
      case 39: this.next(); break
      default: return
    }

    e.preventDefault()
  }

  Carousel.prototype.cycle = function (e) {
    e || (this.paused = false)

    this.interval && clearInterval(this.interval)

    this.options.interval
      && !this.paused
      && (this.interval = setInterval($.proxy(this.next, this), this.options.interval))

    return this
  }

  Carousel.prototype.getItemIndex = function (item) {
    this.$items = item.parent().children('.item')
    return this.$items.index(item || this.$active)
  }

  Carousel.prototype.getItemForDirection = function (direction, active) {
    var activeIndex = this.getItemIndex(active)
    var willWrap = (direction == 'prev' && activeIndex === 0)
                || (direction == 'next' && activeIndex == (this.$items.length - 1))
    if (willWrap && !this.options.wrap) return active
    var delta = direction == 'prev' ? -1 : 1
    var itemIndex = (activeIndex + delta) % this.$items.length
    return this.$items.eq(itemIndex)
  }

  Carousel.prototype.to = function (pos) {
    var that        = this
    var activeIndex = this.getItemIndex(this.$active = this.$element.find('.item.active'))

    if (pos > (this.$items.length - 1) || pos < 0) return

    if (this.sliding)       return this.$element.one('slid.bs.carousel', function () { that.to(pos) }) // yes, "slid"
    if (activeIndex == pos) return this.pause().cycle()

    return this.slide(pos > activeIndex ? 'next' : 'prev', this.$items.eq(pos))
  }

  Carousel.prototype.pause = function (e) {
    e || (this.paused = true)

    if (this.$element.find('.next, .prev').length && $.support.transition) {
      this.$element.trigger($.support.transition.end)
      this.cycle(true)
    }

    this.interval = clearInterval(this.interval)

    return this
  }

  Carousel.prototype.next = function () {
    if (this.sliding) return
    return this.slide('next')
  }

  Carousel.prototype.prev = function () {
    if (this.sliding) return
    return this.slide('prev')
  }

  Carousel.prototype.slide = function (type, next) {
    var $active   = this.$element.find('.item.active')
    var $next     = next || this.getItemForDirection(type, $active)
    var isCycling = this.interval
    var direction = type == 'next' ? 'left' : 'right'
    var that      = this

    if ($next.hasClass('active')) return (this.sliding = false)

    var relatedTarget = $next[0]
    var slideEvent = $.Event('slide.bs.carousel', {
      relatedTarget: relatedTarget,
      direction: direction
    })
    this.$element.trigger(slideEvent)
    if (slideEvent.isDefaultPrevented()) return

    this.sliding = true

    isCycling && this.pause()

    if (this.$indicators.length) {
      this.$indicators.find('.active').removeClass('active')
      var $nextIndicator = $(this.$indicators.children()[this.getItemIndex($next)])
      $nextIndicator && $nextIndicator.addClass('active')
    }

    var slidEvent = $.Event('slid.bs.carousel', { relatedTarget: relatedTarget, direction: direction }) // yes, "slid"
    if ($.support.transition && this.$element.hasClass('slide')) {
      $next.addClass(type)
      $next[0].offsetWidth // force reflow
      $active.addClass(direction)
      $next.addClass(direction)
      $active
        .one('bsTransitionEnd', function () {
          $next.removeClass([type, direction].join(' ')).addClass('active')
          $active.removeClass(['active', direction].join(' '))
          that.sliding = false
          setTimeout(function () {
            that.$element.trigger(slidEvent)
          }, 0)
        })
        .emulateTransitionEnd(Carousel.TRANSITION_DURATION)
    } else {
      $active.removeClass('active')
      $next.addClass('active')
      this.sliding = false
      this.$element.trigger(slidEvent)
    }

    isCycling && this.cycle()

    return this
  }


  // CAROUSEL PLUGIN DEFINITION
  // ==========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.carousel')
      var options = $.extend({}, Carousel.DEFAULTS, $this.data(), typeof option == 'object' && option)
      var action  = typeof option == 'string' ? option : options.slide

      if (!data) $this.data('bs.carousel', (data = new Carousel(this, options)))
      if (typeof option == 'number') data.to(option)
      else if (action) data[action]()
      else if (options.interval) data.pause().cycle()
    })
  }

  var old = $.fn.carousel

  $.fn.carousel             = Plugin
  $.fn.carousel.Constructor = Carousel


  // CAROUSEL NO CONFLICT
  // ====================

  $.fn.carousel.noConflict = function () {
    $.fn.carousel = old
    return this
  }


  // CAROUSEL DATA-API
  // =================

  var clickHandler = function (e) {
    var href
    var $this   = $(this)
    var $target = $($this.attr('data-target') || (href = $this.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '')) // strip for ie7
    if (!$target.hasClass('carousel')) return
    var options = $.extend({}, $target.data(), $this.data())
    var slideIndex = $this.attr('data-slide-to')
    if (slideIndex) options.interval = false

    Plugin.call($target, options)

    if (slideIndex) {
      $target.data('bs.carousel').to(slideIndex)
    }

    e.preventDefault()
  }

  $(document)
    .on('click.bs.carousel.data-api', '[data-slide]', clickHandler)
    .on('click.bs.carousel.data-api', '[data-slide-to]', clickHandler)

  $(window).on('load', function () {
    $('[data-ride="carousel"]').each(function () {
      var $carousel = $(this)
      Plugin.call($carousel, $carousel.data())
    })
  })

}(jQuery);



$(document).ready(function() {
    $('.chap-title').hide();
});

// function click node to display content
function timelineActive(){
    var nodeactive = $('.timeline-node').css('border-width'),
        eachnode = $('.timeline-node'),
        thisnode = $('.timeline-node').index(this),
        nodetext = $('.node-title'),
        tcontent = $('.timeline-each'),
        tline = $('.timeline-line'),
        nodeline = $('.node-line'),
        part1 = $('.timeline-part1'),
        audio = $('audio'),
        thisaudio = $('audio').index(this);
        thiscontent = $('.timeline-each').index(this);
         $(startbutton).fadeOut();
// up and down animation for each nodes
    eachnode[thisnode] = $(this).toggleClass('activenode');
    $(eachnode ).not( thisnode ).removeClass('activenode');

// up and down animation for each timeline contents
    tcontent[thisnode] =$(tcontent[thisnode]).toggleClass('timeline-each-up active-timeline animated Fadein');
    $(tcontent ).not( thisnode ).removeClass('timeline-each-up active-timeline animated fadeOut');

// up and down animation for each nodes connect via contents
    nodeline[thisnode]=$(nodeline[thisnode]).toggleClass('opacity1 animated FadeinUp');
    $(nodeline).not(thisnode).removeClass('opacity1 animated FadeinUp');

// play the audio!!!!!
    audio[thisnode].play();
    // $("#chap1_start").addClass('SeeMore2').text('停止介绍');

    // timelinecontent toggle
    var activeNum = $('.activenode').length;
    if(activeNum >= 1) {
        tline= $(tline).removeClass('top-45');
        tline= $(tline).addClass('top-10');
        nodetext = $(nodetext).fadeOut('slow');
        part1 = $(part1).css('margin-top', '-11vh');
    }
    else if (activeNum < 1) {
        tline= $(tline).removeClass('top-10').addClass('top-45');
        nodetext = $(nodetext).show('slow');
        part1 = $(part1).css('margin-top', '-46vh');
        audio[thisnode].pause();
        // $("#chap1_start").removeClass('SeeMore2').text('开始介绍');
    }
};


// when clicked on the first iamge. scroll window to 550px to the right.
$('.achor-link1').click(function(event) {
    var pos = $(window).scrollLeft() + 550;
    $('html, body').animate({
              scrollLeft: 550
          }, 800);
});

// the temple icon animation at the begining image of the chapter
$("#templeicon").click(function() {
    $(".icon-east").fadeToggle("slow");
    $('.second-img').fadeToggle("slow");
    $('.third-img').addClass("animated bounceInRight");
});

$('.timeline-node').click(timelineActive);

// play one audio at a time
$(function(){
    $("audio").on("play", function() {
        $("audio").not(this).each(function(index, audio) {
            audio.pause();
        });
    });
});

new WOW().init();
var yellowtext = $(".yellow-text");
var redtext = $(".red-text");

$(yellowtext[0]).click(function() {
    $("#img37").addClass("animated FadeinLeft");
});

$(yellowtext[1]).click(function() {
    $("#mrLiang").addClass("animated FadeinRight");
});

$(redtext[0]).click(function() {
        $("#msling").fadeOut();
        $(".class").css("display", "block");
});

$(redtext[1]).click(function() {
    $("#red2").fadeIn();
    $(".audio9imgs").not("#red2").fadeOut();
});

$(redtext[2]).click(function() {
    $("#red4").fadeIn();
    $(".audio9imgs").not("#red4").fadeOut();
});

$(redtext[3]).click(function() {
    $("#red6").fadeIn();
    $(".audio9imgs").not("#red6").fadeOut();
});

$(redtext[4]).click(function() {
    $("#red1").fadeIn();
    $(".audio9imgs").not("#red1").fadeOut();
});

$(redtext[5]).click(function() {
    $("#red5").fadeIn();
    $(".audio9imgs").not("#red5").fadeOut();
});

$(redtext[6]).click(function() {
    $("#red3").fadeIn();
    $(".audio9imgs").not("#red3").fadeOut();
});

// $(".audio9imgs").click(function(){
//     $(".audio9imgs").fadeOut();
// })
// //// auto play audio //////


//////  resize images /////
// var sceneImg = $(".scene-img"),
//     containerW = $(".left-chapscroll").width(),
//     imageContainer = $(".scroll-img");
//     originWidth = $(imageContainer).find("img").width();
//     originHeight = $(imageContainer).find("img").height();
//
//     $.each(imageContainer, function(){
//         imageNum = $(this).find(".scene-img").size();
//         imageWidth = containerW / imageNum;
//         if(originWidth > originHeight ){
//         $(".scene-img").css({
//             "width": imageWidth,
//             "height":'auto',
//         });
//         $('.image-container ').css(
//             "width", imageWidth
//         );
//         }
//         else {
//             $(".scene-img").css({
//                 "width": imageWidth,
//                 "height":'auto',
//             });
//         }
//     });

$(".second-img").click(function() {
    $(this).fadeToggle("slow");
});
$(".first-img").click(function() {
    $(".second-img").fadeToggle("slow");
});

$(document).ready(function() {
    $('.chap-title').hide();
      $("#menu-toggle").click(function(e) {
          e.preventDefault();
          $("#wrapper").toggleClass("toggled");
          var sidebarLen = $('#sidebar-wrapper').width();
          var sidebar = $('#sidebar-wrapper');

          if(sidebarLen < 50){
            //  $(sidebar).css('border','3px solid red');
            $("#menu-toggle, #chap2_start").animate({
                left: "+=130"
            }, 400, function() {
                // Animation complete.
              });
             $(".chap-title").show();
            $("#sidebar-toggle").removeClass('sidebar-move');
          }
          if(sidebarLen > 50){
            $("#menu-toggle, #chap2_start").animate({
                left: "-=130"
            }, 400, function() {
                // Animation complete.
              });
            $(".chap-title").hide();
            $("#sidebar-toggle").addClass('sidebar-move');
          }
      });
});

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

//jquery mouse horizontal scroll
  (function() {
  function scrollHorizontally(e) {
      e = window.event || e;
      var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
      document.documentElement.scrollLeft -= (delta*20); // Multiplied by 40
      document.body.scrollLeft -= (delta*20); // Multiplied by 40
      e.preventDefault();
  }
  if (window.addEventListener) {
      // IE9, Chrome, Safari, Opera
      window.addEventListener("mousewheel", scrollHorizontally, false);
      // Firefox
      window.addEventListener("DOMMouseScroll", scrollHorizontally, false);
  } else {
      // IE 6/7/8
      window.attachEvent("onmousewheel", scrollHorizontally);
  }
  })();
});

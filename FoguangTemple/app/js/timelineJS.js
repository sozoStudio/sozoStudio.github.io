var count = 0;
var audios = document.getElementsByTagName('audio');

$(document).ready(function() {
    console.log("sdfsdf");
});

function playAudio(direction){
  console.log("play audio function called");
  if (direction>0) {
    if (count<audios.length) {
      count++;
      audios[count].load();audios[count].play();
    }else {
      count=0;
    }
  }else if (direction==0) {
    //init
    audios[0].load();audios[0].play();
  }
}

// function click node to display content
$('.timeline-node').click(function(){
    var nodeactive = $('.timeline-node').css('border-width'),
        eachnode = $('.timeline-node'),
        thisnode = $('.timeline-node').index(this),

        tcontent = $('.timeline-each'),
        thiscontent = $('.timeline-each').index(this);

    eachnode[thisnode] = $(this).toggleClass('activenode top-10');
    tcontent[thisnode] =$(tcontent[thisnode]).toggleClass('active-timeline');
});

$('.achor-link1').click(function(event) {
    var pos = $(window).scrollLeft() + 550;
    $('html, body').animate({
              scrollLeft: 550
          }, 800);
});


$("#templeicon").click(function() {
    $(this).fadeToggle("slow");
    $('.second-img').fadeToggle("slow");
    $('.third-img').addClass("animated bounceInRight");
});

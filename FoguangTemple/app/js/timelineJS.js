var count = 0;
var audios = document.getElementsByTagName('audio');

$(document).ready(function() {
    $('.chap-title').hide();
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
        nodetext = $('.node-title'),
        tcontent = $('.timeline-each'),
        tline = $('.timeline-line'),
        tindicator = $('.node-line'),
        thiscontent = $('.timeline-each').index(this);

    eachnode[thisnode] = $(this).toggleClass('activenode');
    tindicator[thisnode]= $(this).css('opacity','1');
    $(eachnode ).not( thisnode ).removeClass('activenode');
    tcontent[thisnode] =$(tcontent[thisnode]).toggleClass('timeline-each-up active-timeline');
    $(tcontent ).not( thisnode ).removeClass('timeline-each-up active-timeline');

        var activeNum = $('.activenode').length;
        if(activeNum >= 1) {
            tline= $(tline).removeClass('top-45');
            tline= $(tline).addClass('top-10');
            nodetext = $(nodetext).fadeOut('slow');
        }
        else if (activeNum < 1) {
            tline= $(tline).removeClass('top-10').addClass('top-45');
            nodetext = $(nodetext).show('slow');
        }
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

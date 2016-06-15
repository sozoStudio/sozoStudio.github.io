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
        nodeline = $('.node-line'),
        part1 = $('.timeline-part1'),
        thiscontent = $('.timeline-each').index(this);

// up and down animation for each nodes
    eachnode[thisnode] = $(this).toggleClass('activenode');
    $(eachnode ).not( thisnode ).removeClass('activenode');

// up and down animation for each timeline contents
    tcontent[thisnode] =$(tcontent[thisnode]).toggleClass('timeline-each-up active-timeline animated Fadein');
    $(tcontent ).not( thisnode ).removeClass('timeline-each-up active-timeline');

// up and down animation for each nodes connect via contents
    nodeline[thisnode]=$(nodeline[thisnode]).toggleClass('opacity1 animated FadeinUp');
    $(nodeline).not(thisnode).removeClass('opacity1 animated FadeinUp')

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
        }
});

$('.achor-link1').click(function(event) {
    var pos = $(window).scrollLeft() + 550;
    $('html, body').animate({
              scrollLeft: 550
          }, 800);
});


$("#templeicon").click(function() {
    $(".icon-east").fadeToggle("slow");
    $('.second-img').fadeToggle("slow");
    $('.third-img').addClass("animated bounceInRight");
});

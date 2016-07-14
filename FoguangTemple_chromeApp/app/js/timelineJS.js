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
};

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

$('.timeline-node').click(timelineActive);

$(function(){
    $("audio").on("play", function() {
        $("audio").not(this).each(function(index, audio) {
            audio.pause();
        });
    });
});

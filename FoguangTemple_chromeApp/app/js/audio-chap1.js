// auto play audios
var startbutton = $("#chap2_start, #chap1_start");
var count = 0;
var audios = document.getElementsByTagName('audio');
var getnode = $('.timeline-node');
var audios = [];
var currentAudio = document.getElementById('audio_0');
var preAudio;

//button change text
startbutton.text('开始介绍');

startbutton.click(function(){
    tline = $('.timeline-line'),
    nodetext = $('.node-title'),
    part1 = $('.timeline-part1'),
  $("audio")[0].play();
  $(".timeline-node, .timeline-each, .node-line").first().addClass("animated Fadein");
  $(".timeline-node").first().addClass('activenode');
  $(".timeline-each").first().addClass('timeline-each-up active-timeline');
  $(".node-line").first().addClass('opacity1');
  tline= $(tline).removeClass('top-45');
  tline= $(tline).addClass('top-10');
  nodetext = $(nodetext).fadeOut('slow');
  part1 = $(part1).css('margin-top', '-11vh');
  startbutton.fadeOut();
});

var count_JQ = $("audio").size();
$("audio").each(function(i){
  if (i < count_JQ - 1) {
    this.addEventListener("ended", function () {
        var nodeactive = $('.timeline-node').css('border-width'),
            eachnode = $('.timeline-node'),
            thisnode = $('.timeline-node').index(this),
            nodetext = $('.node-title'),
            tcontent = $('.timeline-each'),
            tline = $('.timeline-line'),
            nodeline = $('.node-line'),
            part1 = $('.timeline-part1'),
            thiscontent = $('.timeline-each').index(this);
     $("audio")[i+1].play();

    //  scripts for the timeline contents

    // up and down animation for each nodes
        eachnode[i+1] = $(eachnode[i+1]).toggleClass('activenode');
        $(eachnode).not(thisnode).removeClass('activenode');

    // up and down animation for each timeline contents
      tcontent[i+1] =$(tcontent[i+1]).toggleClass('timeline-each-up active-timeline animated Fadein');
      $(tcontent ).not( thisnode ).removeClass('timeline-each-up active-timeline');

      // up and down animation for each nodes connect via contents
      nodeline[i+1]=$(nodeline[i+1]).toggleClass('opacity1 animated FadeinUp');
      $(nodeline).not(thisnode).removeClass('opacity1 animated FadeinUp');
});
  }
});


// $(startbutton).click(function(){
//     // var $this = $(this);
//     // $this.toggleClass('SeeMore2');
//     // if($this.hasClass('SeeMore2')){
//     //     $this.text('停止介绍');
//         audios[0].play();
//         startbutton.fadeOut();
//     // } else {
//     //     $this.text('开始介绍');
//     //     audios[count].pause();
//     // }
// });

// auto play audios
var startbutton = $("#chap1_start").text('开始介绍');
var startbutton2 = $("#chap2_start");
var count = 0;
var audio = $("audio");
var getnode = $('.timeline-node');
var currentAudio = document.getElementById('audio_0');
var preAudio;
var initState = 0;

startbutton.click(function(){
    var tline = $('.timeline-line'),
    nodetext = $('.node-title'),
    part1 = $('.timeline-part1');

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

// function for the chapter 2 play audio pause audio button
startbutton2.text('开始介绍');

$(startbutton2).click(function(){
  if (initState == 0) {
    audio[0].play();
    startbutton2.text('停止介绍');
    initState++;
  }else {
    for (i =0; i <count_JQ; i ++){
        if (!audio[i].paused && audio[i].currentTime) {
            console.log(audio[i] + "is playing");
            audio[i].pause();
            startbutton2.text('开始介绍');
        } else if (audio[i].paused && audio[i].currentTime && $(audio[i]).visible()) {
            audio[i].play();
            startbutton2.text('停止介绍');
        }
      }
  }
});


// auto position the audio to the center of window
        var eachLI = $('.scroll-list > li');
        for (var i = 0; i < eachLI.length; ++i){
                     audio[i].onplay = function(e){
                     setTimeout(function(){
                        window.scrollTo(
                            e.target.parentNode.offsetLeft - (window.innerWidth - e.target.offsetWidth) / 2, 0);
                        }, 400);
                        console.log("center");
                     }; }

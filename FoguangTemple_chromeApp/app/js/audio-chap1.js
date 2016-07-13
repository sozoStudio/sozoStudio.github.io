// auto play audios
var startbutton = $("#chap2_start, #chap1_start");
var count = 0;
var audios = document.getElementsByTagName('audio');
var getnode = $('.timeline-node');
var currentAudio = document.getElementById('audio_');
function playAudio(direction){
  // console.log("start playing audio");
  var nodeactive = $('.timeline-node').css('border-width'),
      eachnode = $('.timeline-node'),
      thisnode = $('.timeline-node').index(this),
      nodetext = $('.node-title'),
      tcontent = $('.timeline-each'),
      tline = $('.timeline-line'),
      nodeline = $('.node-line'),
      part1 = $('.timeline-part1'),
      thiscontent = $('.timeline-each').index(this);
       //$(startbutton).fadeOut();
  // $(startbutton).click(function(){
  //     var $this = $(this);
  //     audios[0].play();
  //       $(startbutton).toggleClass('SeeMore2');
  //     if($this.hasClass('SeeMore2')){
  //         $this.text('停止介绍');
  //         audios[count].play();
  //         console.log('stop');
  //         tline= $(tline).addClass('top-10').removeClass('top-45');
  //         nodetext = $(nodetext).fadeOut('slow');
  //         part1 = $(part1).css('margin-top', '-11vh');
  //     } else {
  //         $this.text('开始介绍');
  //         audios[count].pause();
  //         console.log('start');
  //         tline= $(tline).removeClass('top-10').addClass('top-45');
  //         nodetext = $(nodetext).show('slow');
  //         part1 = $(part1).css('margin-top', '-46vh');
  //     }
  // });
  if (direction>0) {
    if (count<audios.length) {
      count++;
      audios[count].load();audios[count].play();
      console.log("the audio currently playing is" + count);
      currentAudio=audios[count];
    //  scripts for the timeline contents
    // up and down animation for each nodes
        eachnode[count] = $(eachnode[count]).toggleClass('activenode');
        $(eachnode ).not(thisnode).removeClass('activenode');

    // up and down animation for each timeline contents
      tcontent[count] =$(tcontent[count]).toggleClass('timeline-each-up active-timeline animated Fadein');
      $(tcontent ).not( thisnode ).removeClass('timeline-each-up active-timeline');

      // up and down animation for each nodes connect via contents
      nodeline[count]=$(nodeline[count]).toggleClass('opacity1 animated FadeinUp');
      $(nodeline).not(thisnode).removeClass('opacity1 animated FadeinUp');

    }else {
      count=0;
    }

  }else if (direction==0) {
    //init
    audios[0].load();audios[0].play();
    console.log("playing first audio");
    currentAudio = audios[0];
    //  scripts for the timeline contents
    // up and down animation for each nodes
        eachnode[count] = $(eachnode[count]).toggleClass('activenode');
        $(eachnode ).not(count).removeClass('activenode');
    // up and down animation for each timeline contents
      tcontent[count] =$(tcontent[count]).toggleClass('timeline-each-up active-timeline animated Fadein');
      $(tcontent ).not( thisnode ).removeClass('timeline-each-up active-timeline');

      // up and down animation for each nodes connect via contents
      nodeline[count]=$(nodeline[count]).toggleClass('opacity1 animated FadeinUp');
      $(nodeline).not(thisnode).removeClass('opacity1 animated FadeinUp');

      tline= $(tline).addClass('top-10');
      nodetext = $(nodetext).fadeOut('slow');
      part1 = $(part1).css('margin-top', '-11vh');
  }
}

//button change text
startbutton.text('开始介绍');

startbutton.click(function(){

  // audios = document.getElementsByTagName("audio");
  // for (var i = 0; i < audios.length; i++) {
  //   // console.log("audio " + i + " id is " + audios[i].id);
  //   //audios[i]
  // };

  playAudio(0);
  count = 0;
  console.log("start button clicked");

});

    currentAudio.onended = function(){
      console.log("audio " + count + " ended");
      var nextaudio = count + 1;
      // console.log("next audio " + nextaudio + " play");
      playAudio(nextaudio);
    };



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

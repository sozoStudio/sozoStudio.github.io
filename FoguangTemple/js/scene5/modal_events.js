//this script handles all the audio/img events!

var bgm = document.getElementById('bgm1');

$(document).ready(function(){
  //var audio = document.getElementById('bgm1');
  bgm.play();


});

//------------------------------------
//buttons-------------------

$('button#setting-toggle').click(function(){
  toggleSetting();
});





$('#modal4').on('shown.bs.modal', function(e){
  var audio = document.getElementById('audio4');
  var m4bgm = document.getElementById('m4_bgm');
  audio.load();
  audio.play();
  bgm.pause();
  m4bgm.play();


});

$('#modal4').on('hide.bs.modal', function(e){
  var audio = document.getElementById('audio4');
  var m4bgm = document.getElementById('m4_bgm');
  audio.pause();
  m4bgm.pause();
  if (bgm1Statues == 1) {
    bgm.play();
  }

});

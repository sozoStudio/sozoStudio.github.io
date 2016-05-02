//this script handles all the audio/img events!

var bgm = document.getElementById('bgm1');
var m4_count = 0;
var m4_pre = document.getElementById('m4_pre');
var m4_next = document.getElementById('m4_next');
var m1_count = 0;
$(document).ready(function(){
  //var audio = document.getElementById('bgm1');
  //bgm.play();


});


function m4_update(direction){
  if((m4_count == 0) && (direction == 1)){
    //status 1
    var video = document.getElementById('m4_vid');
    $('video#m4_vid').attr("onended","test()");
    video.src="media/3a.mp4";
    $('div#m4_text_holder').html("<p>幢身上有八角形宝盖，每面悬璎珞一束，每角有带结垂下。宝盖上是八角矮柱，四正面各镌刻佛像一龛。</p>"+
    "<p>幢身镌刻的佛殿主宁公遇与大中十一年题刻与梁栿题记文字的对照，成为确定东大殿建成时间的依据。</p>");
    m4_next.hidden = true;
    m4_pre.hidden = false;
    m4_count++;
  }else if ((m4_count == 1) && (direction==-1)) {

    $('div#m4_text_holder').html("<p>唐大中经幢立于东大殿正前，青石质，高3.24米，权衡秀美。最下方为方形土衬石，其上为八角形幢座，座束腰镌刻壶门，内雕蹲狮，上承仰覆莲座，座上立八角形幢身，正面向西，刻题名：“奉为国及法界众生造佛顶陀罗尼幢”。内容刻《佛顶尊胜陀罗尼经》，以及立幢人和年代。</p>");
    m4_pre.hidden = true;
    m4_next.hidden = false;
    m4_count=0;
  }
}

function test(){
  console.log("test function called" + m4_count);
}

function m4_buttons_pre(){
  m4_update(-1);
}

function m4_buttons_next(){
  m4_update(1);
}

$('#modal4').on('shown.bs.modal', function(e){
  //init modal
  bgm.pause();
  $('div#m4_text_holder').html("<p>唐大中经幢立于东大殿正前，青石质，高3.24米，权衡秀美。最下方为方形土衬石，其上为八角形幢座，座束腰镌刻壶门，内雕蹲狮，上承仰覆莲座，座上立八角形幢身，正面向西，刻题名：“奉为国及法界众生造佛顶陀罗尼幢”。内容刻《佛顶尊胜陀罗尼经》，以及立幢人和年代。</p>");
  m4_count=0;
  var video = document.getElementById('m4_vid');
  video.onended = test();
});

$('#modal4').on('hide.bs.modal', function(e){
  bgm.play();

});

$('#modal3').on('shown.bs.modal', function(e){
  var video = document.getElementById('modal3_video');
  video.load();
  video.play();
  var audio = document.getElementById('m3_audio');
  audio.load();
  audio.play();
  var bgm3 = document.getElementById('m3_bgm');
  bgm3.load();
  bgm3.play();
  bgm.pause();

});

$('#modal3').on('hide.bs.modal', function(e){
  var video = document.getElementById('modal3_video');
  video.pause();
  var audio = document.getElementById('m3_audio');
  audio.pause();
  var bgm3 = document.getElementById('m3_bgm');
  bgm3.pause();
  bgm.play();

});

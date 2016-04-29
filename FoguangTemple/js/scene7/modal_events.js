//this script handles all the audio/img events!

var bgm = document.getElementById('bgm1');
var m4_count = 0;
var m4_pre = document.getElementById('m4_pre');
var m4_next = document.getElementById('m4_next');

$(document).ready(function(){
  //var audio = document.getElementById('bgm1');
  bgm.play();


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
  $('div#m4_text_holder').html("<p> 祖师塔位于东大殿左后方，为双层六角形砖塔，通高8米。形制较罕见，实物在国内为孤例，在敦煌壁画中有类似的塔型。推测为北朝时期所建。</p>"+
  "<p>塔下层内部做六角形小室，西面开一道券门，下层塔身平素无装饰，券门上做火焰型券面，塔身上部出叠涩，构成第一层檐部。一层檐顶部上做须弥座式的平座，以承托上层塔身。</p>");
  m4_count=0;
  //var video = document.getElementById('m4_vid');
  //video.onended = test();
});

$('#modal4').on('hide.bs.modal', function(e){


});

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

    $('div#m4_text_holder').html("<p>塔上层六个角都立倚柱，柱头、柱脚和柱中都用俯莲花捆束着。西面有圆券假门，用火焰形做券面装饰，西南、西北两面为假直棂窗。</p>"+
    "<p>塔身表面原有用土朱画出的结构作为装饰。券门上有门额的痕迹，额上画人字形补间铺作，就是法式彩画作中的：“影作”。</p>"+
    "<p>该塔上世纪50年代曾维修，与梁思成先生1937年所拍摄照片相比，外形略有改变，并且表面完全涂白，遮挡了表面的彩绘。</p>");
    m4_next.hidden = true;
    m4_pre.hidden = false;
    m4_count++;
  }else if ((m4_count == 1) && (direction==-1)) {

    $('div#m4_text_holder').html("<p>祖师塔位于东大殿左后方，为双层六角形砖塔，通高8米。形制较罕见，实物在国内为孤例，在敦煌壁画中有类似的塔型。推测为北朝时期所建。</p>"+
    "<p>塔下层内部做六角形小室，西面开一道券门，下层塔身平素无装饰，券门上做火焰型券面，塔身上部出叠涩，构成第一层檐部。一层檐顶部上做须弥座式的平座，以承托上层塔身。</p>");
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
  $('div#m4_text_holder').html("<p> 祖师塔位于东大殿左后方，为双层六角形砖塔，通高8米。形制较罕见，实物在国内为孤例，在敦煌壁画中有类似的塔型。推测为北朝时期所建。</p>"+
  "<p>塔下层内部做六角形小室，西面开一道券门，下层塔身平素无装饰，券门上做火焰型券面，塔身上部出叠涩，构成第一层檐部。一层檐顶部上做须弥座式的平座，以承托上层塔身。</p>");
  m4_count=0;
  //var video = document.getElementById('m4_vid');
  //video.onended = test();
  var bgm4 = document.getElementById("m4_bgm");
  bgm4.load();bgm4.play();
});

$('#modal4').on('hide.bs.modal', function(e){
  var bgm4 = document.getElementById("m4_bgm");
  bgm4.pause();
  bgm.play();
});

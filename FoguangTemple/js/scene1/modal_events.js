//this script handles all the audio/img events!

var bgm = document.getElementById('bgm1');
var n1 = document.getElementById('n1');
var n1_count = 0;
var n1_ended = false;
var m4_count = 0;

function m4_update(direction){
  var audio = document.getElementById('audio4');
  var isSupp0 = audio.canPlayType("audio/mpeg");
  var isSupp1 = audio.canPlayType("audio/wav");
  if ((m4_count == 0 && direction == 1)||(m4_count == 2 && direction == -1)) {
    //alert("m4_count is 0");
    //load second sound tracking

        audio.src="audio/4/m4_2.mp3";

    m4_count = m4_count + direction;
    audio.load();
    audio.play();
    $('div#modal4_img').attr({
      "class" : "gallery autoplay items-4 avatar"
    });
    $('div#modal4_img').html(
      '<div id="item-1" class="control-operator"></div>'+
      '<div id="item-2" class="control-operator"></div>'+
      '<div id="item-3" class="control-operator"></div>'+
      '<div id="item-4" class="control-operator"></div>'+
      '<figure class="item"><img src="img/4/details/wp/001.jpg" height="150px"></figure>'+
      '<figure class="item"><img src="img/4/details/wp/002.jpg" height="400px"></figure>'+
      '<figure class="item"><img src="img/4/details/wp/003.jpg" height="400px"></figure>'+
      '<figure class="item"><img src="img/4/details/wp/004.jpg" height="400px"></figure>'+
      '<div class="controls"><a href="#item-1" class="control-button">•</a>'+
      '<a href="#item-2" class="control-button">•</a><a href="#item-3" class="control-button">•</a><a href="#item-4" class="control-button">•</a></div>'
    );
    // $('div#m4_text_holder').attr({"class":"lzwavatar-dialogue"});
    $('div#m4_text_holder').html("<p><strong>罗哲文：</strong>一九六四年七月间，有机会再到五台佛光寺，适被雨阻于寺内数日，对寺内的唐代木构大殿又进行了比较仔细的观察。和山西省文物工作委员会孟繁兴同志一起，发现了多处唐、五代、金、以及明清题记多处，并且还发现了一幅唐代的壁画，可为这座唐代大殿补充一些新的资料。</p>");
    $( "#lzw" ).html("<img src='img/4/details/lzw.png' height='150px'>");
  }else if ((m4_count == 1 && direction == 1) || (m4_count == 3 && direction == -1)) {
    //load third sound tracking
    if (isSupp0 === "") {
      if (isSupp1 === "") {
        audio.src="audio/4/m4_3.ogg";
      }else {
        audio.src="audio/4/m4_3.wav";
      }
    }else {
      audio.src="audio/4/m4_3.mp3";
    }
    m4_count = m4_count + direction;
    audio.load();
    audio.play();

    $('div#m4_text_holder').html("<p><strong>罗哲文：</strong>这块壁画的位置在大殿正中一个佛座的须弥座束腰上。这殿的佛像、佛座已经重装油彩过许多次，最后一次是三十多年前油彩的。为什么这一块壁画没有被重新油彩呢？正是由于它所处的位置而决定的。佛座的背后紧靠扇面墙，中间距离甚狭，人只能侧身而进，这里面光线又暗，不为人所注意，因此多次重装都没有触及这块壁画。它的色彩，也是因处于佛座与扇面墙的夹缝之间，在过去很长一段时间内在佛座背后两侧还砌了土墙封闭起来，使这块壁画处在一个密闭情况之下，不通空气、不见阳光，因此，不惟至今保存完好，而且还是色彩如新。</p>");

  }else if ((m4_count == 2 && direction == 1) || (m4_count == 4 && direction == -1)) {
    //load third sound tracking

    audio.src="audio/4/m4_4.mp3";

    m4_count = m4_count + direction;
    audio.load();
    audio.play();

    $('div#m4_text_holder').html("<p><strong>罗哲文：</strong>壁画共高三十厘米，长约八十厘米。从画面上看，可分为左、中、右三部分。这三部分虽然是分离的，但彼此之间也有密切的联系。左端画的是一个手持宝剑的天王，天王的旁边有一女立像，头带花冠，右手掌心托一花朵，左手托一香盂，盂中燃香。正中画的是一个身穿翻领花甲胄的力士，手擒一个类似猿猴的动物，好像在作驯服之状。右端画的是一个手持长杆的力士，向左追赶，右上角还残存着三爪的龙腿和龙尾一段。壁画题材的内容尚待进一步的考证。</p>");

  }else if ((m4_count == 3 && direction == 1)) {
    //load third sound tracking

    audio.src="audio/4/m4_5.mp3";

    m4_count=m4_count + direction;
    audio.load();
    audio.play();

    $('div#m4_text_holder').html("<p><strong>罗哲文：</strong>壁画的年代问题，我认为是与大殿建筑同时的，理由是：第一，从壁画残破处的画地、灰皮、泥层等结构看，都是未经重装重绘过的。第二，从画的用色，笔法等风格看也与唐代相同。</p>");

  }
  else if((m4_count == 4 && direction == 1) || (m4_count == 1 && direction == -1)){
    //load the first sound track
    //reset status

    audio.src="audio/4/m4_1.mp3";


    m4_count = 0;
    if (direction == -1) {
      audio.load();audio.play();
    }else {
      audio.pause();
    }
    $('div#m4_text_holder').attr({"class":" "});
    $('div#m4_text_holder').html("<p>这幅位于主佛坛背后的束腰壁画是罗哲文罗老在1964年的那次佛光寺考察中发现的。</p>");
    $( "#lzw" ).html("");
    //int gallery
    $('div#modal4_img').attr({
      "class" : "gallery autoplay items-2 avatar"
    });
    $('div#modal4_img').html(
      '<div id="item-1" class="control-operator"></div>'+
      '<div id="item-2" class="control-operator"></div>'+
      '<figure class="item"><img src="img/4/details/wp/000.jpg" height="400px"></figure>'+
      '<figure class="item"><img src="img/4/details/wp/001.jpg" height="150px"></figure>'+
      '<div class="controls"><a href="#item-1" class="control-button">•</a>'+
      '<a href="#item-2" class="control-button">•</a></div>'
    );


  }
  //set button status
  if (m4_count == 0) {
    document.getElementById("m4_pre").hidden = true;
  }else {
    document.getElementById("m4_pre").hidden = false;
  }
  if (m4_count == 4) {
    document.getElementById("m4_next").hidden = true;
  }else {
    document.getElementById("m4_next").hidden = false;
  }
}

function m4_buttons_pre(){
  m4_update(-1);
}

function m4_buttons_next(){
  m4_update(1);
}

$(document).ready(function(){
  //var audio = document.getElementById('bgm1');
  bgm.play();
  n1.play();

});

n1.onended = function(){
  var isSupp0 = n1.canPlayType("audio/mpeg");
  var isSupp1 = n1.canPlayType("audio/wav");
  if (n1_count == 0 ) {
    //load second sound tracking

    n1.src="audio/4/n2.mp3";

    n1_count++;
    n1.load();
    n1.play();
  }else {
    //load the first sound track

    n1.src="audio/4/n1.mp3";

    n1_count = 0;
    n1.pause();
    n1_ended = true;
  }

};



$('#modal3').on('shown.bs.modal', function(e){
  var audio = document.getElementById('audio3');
  audio.load();
  audio.play();
  bgm.pause();
  n1.pause();
});

$('#modal3').on('hide.bs.modal', function(e){
  var audio = document.getElementById('audio3');
  audio.pause();
  if (bgm1Statues == 1) {
    bgm.play();
  }
  if (!n1_ended && (bgm1Statues == 1)) {
    n1.play();
  }
});

$('#modal4').on('shown.bs.modal', function(e){
  var audio = document.getElementById('audio4');
  var m4bgm = document.getElementById('m4_bgm');
  audio.load();
  audio.play();
  bgm.pause();
  n1.pause();
  m4bgm.play();

  if (m4_count==0) {
    $('div#m4_text_holder').html("<p>这幅位于主佛坛背后的束腰壁画是罗哲文罗老在1964年的那次佛光寺考察中发现的。</p>");

    //int gallery
    $('div#modal4_img').attr({
      "class" : "gallery autoplay items-2"
    });
    $('div#modal4_img').html(
      '<div id="item-1" class="control-operator"></div>'+
      '<div id="item-2" class="control-operator"></div>'+
      '<figure class="item"><img src="img/4/details/wp/000.jpg" height="400px"></figure>'+
      '<figure class="item"><img src="img/4/details/wp/001.jpg" height="150px"></figure>'+
      '<div class="controls"><a href="#item-1" class="control-button">•</a>'+
      '<a href="#item-2" class="control-button">•</a></div>'
    );
  }


  audio.onended = function(){
    console.log("audio ended");
    m4_update(1);
  };

});

$('#modal4').on('hide.bs.modal', function(e){
  var audio = document.getElementById('audio4');
  var m4bgm = document.getElementById('m4_bgm');
  audio.pause();
  m4bgm.pause();
  if (bgm1Statues == 1) {
    bgm.play();
  }
  if (!n1_ended && (bgm1Statues == 1)) {
    n1.play();
  }
});


//------------------------------------------------------------
//button fuctions
$('button#setting-toggle').click(function(){
  toggleSetting();
});

$('button#m4_pre').click(function(){
  m4_buttons_pre();
});

$('button#m4_next').click(function(){
  m4_buttons_next();
})

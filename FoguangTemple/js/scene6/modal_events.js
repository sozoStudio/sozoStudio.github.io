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

function m1_update(direction){
  var audio1 = document.getElementById('audio1');
  var isSupp0 = audio1.canPlayType("audio/mpeg");
  var isSupp1 = audio1.canPlayType("audio/wav");
  if ((m1_count == 0 && direction == 1) || (m1_count == 2 && direction == -1)) {
    //load second sound tracking
    // if (isSupp0 === "") {
    //   if (isSupp1 === "") {
    //     audio1.src="audio/3/2.ogg";
    //   }else {
    //     audio1.src="audio/3/2.wav";
    //   }
    // }else {
    //   audio1.src="audio/3/2.mp3";
    // }
    audio1.controls = false;
    audio1.pause();
    m1_count = m1_count + direction;
    // audio1.load();
    // audio1.play();
    $('div#modal1_img').attr({
      "class" : "gallery autoplay items-4"
    });
    $('div#modal1_img').html(
      '<div id="item-1" class="control-operator"></div>'+
      '<div id="item-2" class="control-operator"></div>'+
      '<div id="item-3" class="control-operator"></div>'+
      '<div id="item-4" class="control-operator"></div>'+
      '<figure class="item"><img src="img/scene3_1/001nanchan.jpg" height="400px"></figure>'+
      '<figure class="item"><img src="img/scene3_1/002tiantai.jpg" height="400px"></figure>'+
      '<figure class="item"><img src="img/scene3_1/003renwang.jpg" height="400px"></figure>'+
      '<figure class="item"><img src="img/scene3_1/004EH.jpg" height="400px"></figure>'+
      '<div class="controls"><a href="#item-1" class="control-button">•</a>'+
      '<a href="#item-2" class="control-button">•</a><a href="#item-3" class="control-button">•</a>'+
      '<a href="#item-4" class="control-button">•</a></div>'
    );
    $('div#m1_text_holder').html("<p> 东大殿是我国保存下来的最早的地面建筑遗存之一，中国国内现存较为公认的唐代木构建筑遗"+
    "存共有四座，都位于山西省，其余三座分别为唐建中三年（公元782年）的南禅寺大殿，唐天佑四年（公元907年）的平顺天台庵大殿和唐大"+
    "和六年（公元832年）的芮城广仁王庙正殿。佛光寺东大殿作为殿堂式建筑，形制等级标准最高，规模最大，建筑结构复杂、内容最为丰富。"+
    "价值远超其他三座唐代建筑。</p>");

  }else if ((m1_count == 1 && direction == 1)||(m1_count == 3 && direction == -1)) {
    //load third sound tracking
    // if (isSupp0 === "") {
    //   if (isSupp1 === "") {
    //     audio1.src="audio/3/3.ogg";
    //   }else {
    //     audio1.src="audio/3/3.wav";
    //   }
    // }else {
    //   audio1.src="audio/3/3.mp3";
    // }
    m1_count = m1_count + direction;
    // audio1.load();
    // audio1.play();
    $('div#modal1_img').attr({
      "class" : "gallery autoplay items-5"
    });


    $('div#modal1_img').html(
      '<div id="item-1" class="control-operator"></div>'+
      '<div id="item-2" class="control-operator"></div>'+
      '<div id="item-3" class="control-operator"></div>'+
      '<div id="item-4" class="control-operator"></div>'+
      '<div id="item-5" class="control-operator"></div>'+
      '<figure class="item"><img src="img/scene3_1/005yaoshi.jpg" height="400px"></figure>'+
      '<figure class="item"><img src="img/scene3_1/006dongdasi.jpg" height="400px"></figure>'+
      '<figure class="item"><img src="img/scene3_1/007falong.jpg" height="400px"></figure>'+
      '<figure class="item"><img src="img/scene3_1/008dongdasi.jpg" height="400px"></figure>'+
      '<figure class="item"><img src="img/scene3_1/009zhaodi.jpg" height="400px"></figure>'+
      '<div class="controls"><a href="#item-1" class="control-button">•</a>'+
      '<a href="#item-2" class="control-button">•</a><a href="#item-3" class="control-button">•</a>'+
      '<a href="#item-4" class="control-button">•</a><a href="#item-5" class="control-button">•</a></div>'
    );


    $('div#m1_text_holder').html("<p>中国在隋唐时代的无论城市建设还是单体建筑都取得了巨大成就，"+
    "其影响力远达朝鲜半岛和日本。日本现存的几处相当于唐代（日本飞鸟时代）的建筑有：奈良药师寺东塔，"+
    "东大寺转害门、法华堂，唐昭提寺金堂，法隆寺金堂、五重塔、梦殿。以上建筑虽然大部分构件做法保持了原有风格，"+
    "但由于日本在修缮时候有更换新构件的传统，故构件本身及细节做法后期都有很大改动。"+
    "从真实性和完整性上也不如佛光寺东大殿。</p>");

  }else if ((m1_count == 2 && direction == 1)) {
    $('div#modal1_img').attr({
      "class" : "gallery autoplay items-3"
    });

    $('div#modal1_img').html(
      '<div id="item-1" class="control-operator"></div>'+
      '<div id="item-2" class="control-operator"></div>'+
      '<div id="item-3" class="control-operator"></div>'+
      '<figure class="item"><img src="img/scene3_1/010.jpg" height="400px"></figure>'+
      '<figure class="item"><img src="img/scene3_1/011.jpg" height="400px"></figure>'+
      '<figure class="item"><img src="img/scene3_1/012.jpg" height="400px"></figure>'+
      '<div class="controls"><a href="#item-1" class="control-button">•</a>'+
      '<a href="#item-2" class="control-button">•</a><a href="#item-3" class="control-button">•</a>'+
      '</div>'
    );


    $('div#m1_text_holder').html("<p>佛光寺东大殿外表雄伟古朴，面宽七间，进深四间，八架椽，"+
    "单檐四阿顶。柱网布局由檐柱和内柱各围合一圈，呈“回”字形，略如宋《营造法式》中的“金箱斗底槽”做法。"+
    "佛殿被平闇分为“明栿”与“草栿”两大部分，其构件的加工斫割方式完全不同。“明栿”在“平闇”以下。"+
    "明栿各种梁栿搭置于内外柱头斗栱之上，前后槽乳栿、丁栿、四椽栿等，均为“月梁”式，制作规整，"+
    "外形秀美。“草栿”隐藏在平闇以上，所用结构粗大，做工较粗旷，各梁栿结点用墩木十字相交叠置垫托，"+
    "并且构件表面无彩画。</p>");

    m1_count = m1_count + direction;
  }
  else if( (m1_count == 3 && direction == 1)|| (m1_count == 1 && direction == -1)){
    //load the first sound track
    //reset status
    if (isSupp0 === "") {
      if (isSupp1 === "") {
        audio1.src="audio/scene3/s1/tm1_1.ogg";
      }else {
        audio1.src="audio/scene3/s1/tm1_1.wav";
      }
    }else {
      audio1.src="audio/scene3/s1/tm1_1.mp3";
    }

    audio1.controls = true;

    m1_count = 0;
    $('div#m1_text_holder').html("<p>佛光寺东大殿的建筑的绝大多数构件为唐代遗构，构件表面仍保留有唐代的丹粉"+
    "刷饰彩画，东大殿内还保存有与建筑同时期的塑像、壁画、题记，以及从唐代至"+
    "今一千多年，历次维修改造碑刻题记、重装补塑的塑像壁画，真实完整的显现出东大殿"+
    "在历史长河中的变迁。因此，佛光寺东大殿是东亚文化体系中，最具代表性的"+
    "木结构古建筑，在全世界都具有极高的文化价值与代表意义。</p>");

    //int gallery
    $('div#modal1_img').attr({
      "class" : "gallery autoplay items-4"
    });
    $('div#modal1_img').html(
      '<div id="item-1" class="control-operator"></div>'+
      '<div id="item-2" class="control-operator"></div>'+
      '<div id="item-3" class="control-operator"></div>'+
      '<div id="item-4" class="control-operator"></div>'+
      '<figure class="item"><img src="img/scene3_1/001nanchan.jpg" height="400px"></figure>'+
      '<figure class="item"><img src="img/scene3_1/002tiantai.jpg" height="400px"></figure>'+
      '<figure class="item"><img src="img/scene3_1/003renwang.jpg" height="400px"></figure>'+
      '<figure class="item"><img src="img/scene3_1/004EH.jpg" height="400px"></figure>'+
      '<div class="controls"><a href="#item-1" class="control-button">•</a>'+
      '<a href="#item-2" class="control-button">•</a><a href="#item-3" class="control-button">•</a>'+
      '<a href="#item-4" class="control-button">•</a></div>'
    );
    if (direction == -1) {
      audio1.load();
      audio1.play();
    }else {
      audio1.pause();
    }

  }
  if (m1_count == 0) {
    document.getElementById("m1_pre").hidden = true;
  }else {
    document.getElementById("m1_pre").hidden = false;
  }
  if (m1_count == 3) {
    document.getElementById("m1_next").hidden = true;
  }else {
    document.getElementById("m1_next").hidden = false;
  }
}

function m1_buttons_pre(){
    //m5_count = m5_count - 1;
    m1_update(-1);
}

function m1_button_next(){
  m1_update(1);
}


$('#modal1').on('shown.bs.modal', function(e){
  var audio1 = document.getElementById('audio1');
  var bgm4 = document.getElementById('m1_bgm');
  audio1.load();
  audio1.play();
  bgm4.load();
  bgm4.play();
  bgm.pause();


  audio1.onended = function(){
    m1_update(1);
  };

});

$('#modal1').on('hide.bs.modal', function(e){
  var audio1 = document.getElementById('audio1');
  var bgm4 = document.getElementById('m1_bgm');
  bgm4.pause();
  audio1.pause();
  bgm.play();
});

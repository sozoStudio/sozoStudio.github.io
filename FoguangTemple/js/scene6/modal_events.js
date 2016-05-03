//this script handles all the audio/img events!

var bgm = document.getElementById('bgm1');
var m4_count = 0;
var m4_pre = document.getElementById('m4_pre');
var m4_next = document.getElementById('m4_next');
var m1_count = 0;
var m2_count = 0;
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

function m2_update(direction){
  var audio1 = document.getElementById('audio2');
  var isSupp0 = audio1.canPlayType("audio/mpeg");
  var isSupp1 = audio1.canPlayType("audio/wav");
  if ((m2_count == 0 && direction == 1) || (m2_count == 2 && direction == -1)) {
    var vid;
    try {
      vid = document.getElementById("modal2_video");
      vid.pause();
    } catch (e) {

    }

    audio1.controls = false;
    audio1.pause();
    m2_count = m2_count + direction;
    // audio1.load();
    // audio1.play();
    $('div#modal2_img').attr({
      "class" : "single-img"
    });
    $('div#modal2_img').html(
      '<img src="img/scene3_1/015.jpg" height="450px">'
    );
    $('div#m2_text_holder').html("<p> 东大殿的外檐柱头铺作为：“七铺作双杪双下昂”，是直接承托东大殿出檐的斗栱，"+
    "承托整座铺作的为：栌斗，东大殿栌斗在与栱眼壁部分衔接部分向两侧突出，增加了与阑额的承接面积，这种做法被近年的研究学"+
    "者称为：栌斗泥道截直造。栌斗上承托两跳华栱和两跳下昂，华栱第二跳跳头上置瓜子栱和瓜子慢栱，承托罗汉枋。下昂第二跳上"+
    "安令栱，与翼形耍头相交，令栱上安替木，以承托撩檐槫。第一跳华栱与第一跳下昂上不设横向栱，这种做法被称为：“偷心造”。"+
    "东大殿斗栱设计完全是根据结构需要而作，完全没有后世繁复的装饰构件，所有构件造型都最为直接简单，如昂嘴使用最简单的斜角“批竹昂”做法。</p>");

  }else if ((m2_count == 1 && direction == 1)||(m2_count == 3 && direction == -1)) {
    //load third sound tracking
    audio1.pause();
    if (isSupp0 === "") {
      if (isSupp1 === "") {
        audio1.src="audio/scene3/s1/m2_2.ogg";
      }else {
        audio1.src="audio/scene3/s1/m2_2.wav";
      }
    }else {
      audio1.src="audio/scene3/s1/m2_2.mp3";
    }
    m2_count = m2_count + direction;
    audio1.load();
    audio1.play();
    audio1.controls = true;

    $('div#modal2_img').html(
      '<video id="modal2_video" controls="" width="100%" loop="" autoplay="">'+
      '<source src="media/scene3/m2_vid1.webm" type="video/webm">'+
      '</video>'

    );


    $('div#m2_text_holder').html("<p> 中国是世界上最早将模数制运用到建筑营造的国家，《营造法式》称：“凡构屋之制，皆以材为祖。”</p>"+
    "<p>近年的研究者基于三维激光扫描的精确测量数据，分析东大殿采用的材分º模数制，通过模数密码的解读，重现东大殿精妙而理性的设计建造过程。</p>");

  }else if ((m2_count == 2 && direction == 1) || (m2_count == 4 && direction == -1)) {
    var vid;
    try {
      vid = document.getElementById("modal2_video");
      vid.pause();
    } catch (e) { //do nothing
    }
    audio1.pause();

    audio1.controls = false;

    $('div#modal2_img').attr({
      "class" : "gallery autoplay items-3"
    });

    $('div#modal2_img').html(
      '<div id="item-1" class="control-operator"></div>'+
      '<div id="item-2" class="control-operator"></div>'+
      '<div id="item-3" class="control-operator"></div>'+
      '<figure class="item"><img src="img/scene3_1/016.jpg" height="400px"></figure>'+
      '<figure class="item"><img src="img/scene3_1/017.jpg" height="400px"></figure>'+
      '<figure class="item"><img src="img/scene3_1/018.jpg" height="400px"></figure>'+
      '<div class="controls"><a href="#item-1" class="control-button">•</a>'+
      '<a href="#item-2" class="control-button">•</a><a href="#item-3" class="control-button">•</a>'+
      '</div>'
    );


    $('div#m2_text_holder').html("<p>早在公元前十一世纪的周代的《周髀算经》，就记载了勾三股四弦五的勾股定理，"+
    "并根据发现者取名“商高定理”。中国古代工匠在建筑中常常灵活运用勾股定理，作为建筑屋架的设计。</p>"+
    "<p>东大殿基本模数为21毫米为1分º。铺作材厚10分º，足材21分º，昂制平出47分º，昂制斜长51.5分º。这个勾21、股47、弦51.5的直角三角形，就是东大殿从铺作到屋架的基准三角形。二分之一进深通槫距为基本昂制平出47分º的11倍，合计517分º，撩檐槫至脊槫为21分º的11倍，即231分º。整个东大殿屋架的勾股弦为昂制勾股弦的11倍。</p>");

    m2_count = m2_count + direction;
  }else if ((m2_count == 3 && direction == 1)) {
    $('div#modal2_img').attr({
      "class" : "gallery autoplay items-2"
    });

    $('div#modal2_img').html(
      '<div id="item-1" class="control-operator"></div>'+
      '<div id="item-2" class="control-operator"></div>'+
      '<figure class="item"><img src="img/scene3_1/020.jpg" height="400px"></figure>'+
      '<figure class="item"><img src="img/scene3_1/019.gif" height="400px"></figure>'+
      '<div class="controls"><a href="#item-1" class="control-button">•</a>'+
      '<a href="#item-2" class="control-button">•</a>'+
      '</div>'
    );

    $('div#m2_text_holder').html("<p>东大殿的平面进深及尽间开间为210分º，是10倍足材宽。大殿中五间各面阔240分º，"+
    "平柱高同样240分º，出现在次间外缝，其外侧柱高存在生起，内侧的明间柱高存在“负生起”。</p>"+
    "<p>唐代来自长安的高超工匠，使用了一个21毫米为基本模数的尺，和一个勾股直角三角形，精妙的设计"+
    "了东大殿整个大木构架。让我们得以窥见中国古代木结构建筑建造顶峰时代的光辉。</p>");

    m2_count = m2_count + direction;

  }
  else if( (m2_count == 4 && direction == 1)|| (m2_count == 1 && direction == -1)){
    //load the first sound track
    //reset status
    if (isSupp0 === "") {
      if (isSupp1 === "") {
        audio1.src="audio/scene3/s1/m2_1.ogg";
      }else {
        audio1.src="audio/scene3/s1/m2_1.wav";
      }
    }else {
      audio1.src="audio/scene3/s1/m2_1.mp3";
    }

    audio2.controls = true;

    m2_count = 0;
    $('div#m2_text_holder').html("<p>东大殿殿身所用斗栱壮大，屋顶曲线平缓，出檐深远，气势庞大豪迈。</p>"+
    "<p>斗栱是中国木结构古建筑最具代表性的构件，是柱梁与屋顶之间的承托构件。"+
    "科学的杠杆运用与精巧的榫卯设计结合，将木材的特性发挥到极致。"+
    "东大殿铺作设计简约、结构精巧、造型雄伟，是最具代表性的构件。</p>");

    //int gallery
    $('div#modal2_img').attr({
      "class" : "gallery autoplay items-2"
    });
    $('div#modal2_img').html(
      '<div id="item-1" class="control-operator"></div>'+
      '<div id="item-2" class="control-operator"></div>'+
      '<figure class="item"><img src="img/scene3_1/013.jpg" height="400px"></figure>'+
      '<figure class="item"><img src="img/scene3_1/014tiantai.jpg" height="400px"></figure>'+
      '<div class="controls"><a href="#item-1" class="control-button">•</a>'+
      '<a href="#item-2" class="control-button">•</a>'+
      '</div>'
    );
    if (direction == -1) {
      audio1.load();
      audio1.play();
    }else {
      audio1.pause();
    }

  }

  if (m2_count == 0) {
    document.getElementById("m2_pre").hidden = true;
  }else {
    document.getElementById("m2_pre").hidden = false;
  }
  if (m2_count == 4) {
    document.getElementById("m2_next").hidden = true;
  }else {
    document.getElementById("m2_next").hidden = false;
  }
}

function m2_buttons_pre(){
    //m5_count = m5_count - 1;
    m2_update(-1);
}

function m2_button_next(){
  m2_update(1);
}

$('#modal2').on('shown.bs.modal', function(e){
  var audio1 = document.getElementById('audio2');
  var bgm4 = document.getElementById('m2_bgm');
  audio1.load();
  audio1.play();
  bgm4.load();
  bgm4.play();
  bgm.pause();


  audio1.onended = function(){
    m2_update(1);
  };

});

$('#modal2').on('hide.bs.modal', function(e){
  var audio1 = document.getElementById('audio2');
  var bgm4 = document.getElementById('m2_bgm');
  bgm4.pause();
  audio1.pause();
  bgm.play();
});

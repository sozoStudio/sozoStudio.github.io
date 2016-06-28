//this script handles all the audio/img events!

var bgm = document.getElementById('bgm1');

var m2_count = 0;
var m4_count = 0;

function m2_update(direction){
  var audio = document.getElementById('m2_audio');
  var isSupp0 = audio.canPlayType("audio/mpeg");
  var isSupp1 = audio.canPlayType("audio/wav");
  if ((m2_count == 0 && direction == 1)) {
    $('div#m2_text').html('<p>壁画构图呈三组。中间主尊结跏趺坐于中央，头饰螺发，顶显高髻，大耳垂肩，面形方圆，' +
    '容颜开朗，体态丰满，眉间放出两道豪光，头后饰圆形头光，头光上刻画细密的火焰纹。上身着袒右肩袈裟，身后饰背光，' +
    '双手结印，但印契漫漶不清。主尊左侧侍立二菩萨，其一头戴宝冠，冠中置一化佛，头后饰圆形头光，项佩璎珞，' +
    '右手伸至肩前，左手持物，体态丰腴，向主尊微侧，立于莲花座上。另一菩萨，亦头戴天冠，圆形头光围饰，项佩璎珞，' +
    '身披袈裟，衣纹呈U 字形分布，如水波般优美自然，双手合十。其左侧绘二供养人。主尊右侧侍立二菩萨，一菩萨头戴宝冠，' +
    '头后饰圆形头光，飘带从宝冠自两肩垂下，双手持物，身披袈裟，衣纹宽大流畅，质感较强，体态健硕。另一菩萨，亦头戴天冠，' +
    '圆形头光围饰，遍身璎珞。菩萨身后立一比丘状侍者。佛坛前绘博山炉一尊，两侧绘手捧莲花的供养菩萨各一，呈半蹲式，头饰头光。</p>' +
    '<p>学术界对三组佛像说法不一。中间一组的主像有的认为是释迦，有的认为是阿弥陀佛。左右两组的主像有的认为是观音和大势至菩萨，有的认为是文殊和普贤菩萨。亟待下一步的研究及探讨。</p>');
    m2_count = m2_count + direction;
    $('#m2_audio').removeAttr("controls");
    audio.load();
    audio.pause();
  }else if (m2_count == 1) {
    //load first
    audio.load();
    if (direction==1) {
      audio.pause();
    }else {
      audio.play();
    }
    m2_count = 0;
    $('#m2_audio').attr({
      "controls" : "controls"
    });
    $('div#m2_text').html("<p>这幅唐代栱眼壁壁画位于东大殿内槽北次间栱眼壁外侧。柴泽俊先生将这幅图命名为弥陀说法图。整组造像布局严谨、主次分明，形象生动、风格雄健，实为我国现存唐代佛教壁画珍品。并且壁画造像布局与佛坛塑像布局严格对应，是壁画与塑像同为唐代建造的最好印证。</p>");

  }
  //set button status
  if (m2_count == 0) {
    document.getElementById("m2_pre").hidden = true;
  }else {
    document.getElementById("m2_pre").hidden = false;
  }
  if (m2_count == 1) {
    document.getElementById("m2_next").hidden = true;
  }else {
    document.getElementById("m2_next").hidden = false;
  }
}

function m2_buttons_pre(){
  m2_update(-1);
}

function m2_buttons_next(){
  m2_update(1);
}

function m4_update(direction){
  var audio = document.getElementById('audio4');
  var isSupp0 = audio.canPlayType("audio/mpeg");
  var isSupp1 = audio.canPlayType("audio/wav");
  if ((m4_count == 0 && direction == 1)||(m4_count == 2 && direction == -1)) {
    //alert("m4_count is 0");
    //load second sound tracking

    audio.src="audio/6/m4_002.mp3";

    m4_count = m4_count + direction;
    audio.load();
    audio.play();
    $('div#modal4_img').attr({
      "class" : "gallery autoplay items-5"
    });
    $('div#modal4_img').html(
      '<div id="item-1" class="control-operator"></div>'+
      '<div id="item-2" class="control-operator"></div>'+
      '<div id="item-3" class="control-operator"></div>'+
      '<div id="item-4" class="control-operator"></div>'+
      '<div id="item-5" class="control-operator"></div>'+
      '<figure class="item"><img src="img/6/details/m4_004.jpg" height="400px"></figure>'+
      '<figure class="item"><img src="img/6/details/m4_005.jpg" height="400px"></figure>'+
      '<figure class="item"><img src="img/6/details/m4_006.jpg" height="400px"></figure>'+
      '<figure class="item"><img src="img/6/details/m4_007.jpg" height="400px"></figure>'+
      '<figure class="item"><img src="img/6/details/m4_008.jpg" height="400px"></figure>'+
      '<div class="controls"><a href="#item-1" class="control-button">•</a>'+
      '<a href="#item-2" class="control-button">•</a><a href="#item-3" class="control-button">•</a>'+
      '<a href="#item-4" class="control-button">•</a><a href="#item-5" class="control-button">•</a></div>'
    );
    $('div#m4_text_holder').html("<p>1964年，罗哲文先生等在板门背后发现大量题记，最早时代为唐咸通七年（866年），仅为大殿始建年之后九年，故推断现存板门为唐代始建时的原物。</p>"+
    "<p>1970 年代日本建筑史学家関口欣也现场考察东大殿后也提出了类似陈明达先生的看法。柴泽俊先生在对东大殿勘察时也曾经发现前内槽柱脚部有榫眼，并据此推断现状前檐板门原来位于前内槽柱缝。</p>");

  }else if ((m4_count == 1 && direction == 1) || (m4_count == 3 && direction == -1)) {
    //load third sound tracking

    audio.src="audio/6/m4_003.mp3";


    $('div#modal4_img').attr({
      "class" : "gallery autoplay items-3"
    });
    $('div#modal4_img').html(
      '<div id="item-1" class="control-operator"></div>'+
      '<div id="item-2" class="control-operator"></div>'+
      '<div id="item-3" class="control-operator"></div>'+
      '<figure class="item"><img src="img/6/details/m4_009.jpg" height="400px"></figure>'+
      '<figure class="item"><img src="img/6/details/m4_010.jpg" height="400px"></figure>'+
      '<figure class="item"><img src="img/6/details/m4_011.jpg" height="400px"></figure>'+
      '<div class="controls"><a href="#item-1" class="control-button">•</a>'+
      '<a href="#item-2" class="control-button">•</a><a href="#item-3" class="control-button">•</a>'+
      '</div>'
    );
    m4_count = m4_count + direction;
    audio.load();
    audio.play();

    $('div#m4_text_holder').html("<p><strong>柴泽俊：</strong>东大殿前檐原状可能是敞廊，门窗可能是安装在今殿内前槽金柱上，柱身上下两侧原安装过门额、地袱的卯洞尚存。现状前檐柱础为覆盆莲瓣，应是廊柱柱础。现前槽金柱础石无覆盆，且素平无饰，不像是露明柱础的规制，应是为了安装地栿和立颊而有意设置的。</p>");

  }else if ((m4_count == 2 && direction == 1) || (m4_count == 4 && direction == -1)) {
    //load third sound tracking

    audio.src="audio/6/m4_004.mp3";


    $('div#modal4_img').attr({
      "class" : "gallery autoplay items-3"
    });
    $('div#modal4_img').html(
      '<div id="item-1" class="control-operator"></div>'+
      '<div id="item-2" class="control-operator"></div>'+
      '<div id="item-3" class="control-operator"></div>'+
      '<figure class="item"><img src="img/6/details/m4_012.jpg" height="400px"></figure>'+
      '<figure class="item"><img src="img/6/details/m4_013.jpg" height="400px"></figure>'+
      '<figure class="item"><img src="img/6/details/m4_014.jpg" height="400px"></figure>'+
      '<div class="controls"><a href="#item-1" class="control-button">•</a>'+
      '<a href="#item-2" class="control-button">•</a><a href="#item-3" class="control-button">•</a>'+
      '</div>'
    );
    m4_count = m4_count + direction;
    audio.load();
    audio.play();

    $('div#m4_text_holder').html("<p>外檐斗栱栌斗作节枳造，前檐内槽斗栱栌斗做法与外檐一致，并且前内槽两尽间乳栿底部中心有厚约150毫米无油饰涂刷痕迹，推测此处原本有栱眼壁。</p>");

  }else if ((m4_count == 3 && direction == 1) || (m4_count == 5 && direction == -1)) {
    //load third sound tracking

    audio.src="audio/6/m4_005.mp3";

    m4_count=m4_count + direction;
    audio.load();
    audio.play();
    $('div#modal4_img').attr({
      "class" : "gallery autoplay items-4"
    });
    $('div#modal4_img').html(
      '<div id="item-1" class="control-operator"></div>'+
      '<div id="item-2" class="control-operator"></div>'+
      '<div id="item-3" class="control-operator"></div>'+
      '<div id="item-4" class="control-operator"></div>'+
      '<figure class="item"><img src="img/6/details/m4_015.jpg" height="400px"></figure>'+
      '<figure class="item"><img src="img/6/details/m4_016.jpg" height="400px"></figure>'+
      '<figure class="item"><img src="img/6/details/m4_017.jpg" height="400px"></figure>'+
      '<figure class="item"><img src="img/6/details/m4_018.jpg" height="400px"></figure>'+
      '<div class="controls"><a href="#item-1" class="control-button">•</a>'+
      '<a href="#item-2" class="control-button">•</a><a href="#item-3" class="control-button">•</a>'+
      '<a href="#item-4" class="control-button">•</a></div>'
    );

    $('div#m4_text_holder').html("<p>佛光寺东大殿的外檐一跳华栱底燕尾彩画皆为白色，殿堂内及内槽燕尾彩画皆为红色，据观察西侧外槽的一跳华栱底燕尾彩画虽在室内却为白色，如若东大殿曾有前廊，则可解释这些燕尾原为前廊的室外彩画，故刷白色。</p>");

  }else if ((m4_count == 4 && direction == 1)){

    audio.src="audio/6/m4_006.mp3";

    m4_count=m4_count + direction;
    audio.load();
    audio.play();
    $('div#m4_text_holder').html('<p>根据以上几点证据，初步推断东大殿始建时，板门位于前内槽柱列明、次、稍间，而前檐柱应原为檐廊，南北尽间直棂窗及窗下墙原始位置很可能也位于前内槽柱列，但尚无法确定板门和窗外移时代。</p>');
  }
  else if((m4_count == 5 && direction == 1) || (m4_count == 1 && direction == -1)){
    //load the first sound track
    //reset status

    audio.src="audio/6/m4_001.mp3";
    

    m4_count = 0;
    if (direction == -1) {
      audio.load();audio.play();
    }else {
      audio.pause();
    }

    //int gallery
    $('div#m4_text_holder').html("<p>东大殿发现之时，梁思成先生初步判断板门为明以后之物。</p>"+
    "<p>1963年陈明达先生提出东大殿原设有前廊，板门是后来推出至檐柱间的观点。</p>");

    //int gallery
    $('div#modal4_img').attr({
      "class" : "gallery autoplay items-3"
    });
    $('div#modal4_img').html(
      '<div id="item-1" class="control-operator"></div>'+
      '<div id="item-2" class="control-operator"></div>'+
      '<div id="item-3" class="control-operator"></div>'+
      '<figure class="item"><img src="img/6/details/m4_001.jpg" height="250px"></figure>'+
      '<figure class="item"><img src="img/6/details/m4_002.jpg" height="400px"></figure>'+
      '<figure class="item"><img src="img/6/details/m4_003.jpg" height="400px"></figure>'+
      '<div class="controls"><a href="#item-1" class="control-button">•</a>'+
      '<a href="#item-2" class="control-button">•</a>'+
      '<a href="#item-3" class="control-button">•</a></div>'
    );
  }
  //set button status
  if (m4_count == 0) {
    document.getElementById("m4_pre").hidden = true;
  }else {
    document.getElementById("m4_pre").hidden = false;
  }
  if (m4_count == 5) {
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


});

$('#modal2').on('shown.bs.modal', function(e){
  var audio = document.getElementById('m2_audio');
  var m2bgm = document.getElementById('m2_bgm');
  audio.load();
  audio.play();
  bgm.pause();
  m2bgm.play();
  audio.onended = function(){
    m2_update(1);
  };

});

$('#modal2').on('hide.bs.modal', function(e){
  var audio = document.getElementById('m2_audio');
  var m2bgm = document.getElementById('m2_bgm');
  audio.pause();
  m2bgm.pause();
  if (bgm1Statues == 1) {
    bgm.play();
  }

});



$('#modal4').on('shown.bs.modal', function(e){
  var audio = document.getElementById('audio4');
  var m4bgm = document.getElementById('m4_bgm');
  audio.load();
  audio.play();
  bgm.pause();
  m4bgm.play();

  if (m4_count==0) {
    $('div#m4_text_holder').html("<p>东大殿发现之时，梁思成先生初步判断板门为明以后之物。</p>"+
    "<p>1963年陈明达先生提出东大殿原设有前廊，板门是后来推出至檐柱间的观点。</p>");

    //int gallery
    $('div#modal4_img').attr({
      "class" : "gallery autoplay items-3"
    });
    $('div#modal4_img').html(
      '<div id="item-1" class="control-operator"></div>'+
      '<div id="item-2" class="control-operator"></div>'+
      '<div id="item-3" class="control-operator"></div>'+
      '<figure class="item"><img src="img/6/details/m4_001.jpg" height="250px"></figure>'+
      '<figure class="item"><img src="img/6/details/m4_002.jpg" height="300px"></figure>'+
      '<figure class="item"><img src="img/6/details/m4_003.jpg" height="300px"></figure>'+
      '<div class="controls"><a href="#item-1" class="control-button">•</a>'+
      '<a href="#item-2" class="control-button">•</a>'+
      '<a href="#item-3" class="control-button">•</a></div>'
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

});

//------------------------------
// ------ buttons

$('button#setting-toggle').click(function(){
  toggleSetting();
});

$('button#m2_pre').click(function(){
  m2_buttons_pre();
});

$('button#m2_next').click(function(){
  m2_buttons_next();
});

$('button#m4_pre').click(function(){
  m4_buttons_pre();
});

$('button#m4_next').click(function(){
  m4_buttons_next();
});

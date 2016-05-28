//this script handles all the audio/img events!

var bgm = document.getElementById('bgm1');

var m1_count = 0;



$(document).ready(function(){
  //var audio = document.getElementById('bgm1');
  bgm.play();

});

function m4_update(direction){
  var audio1 = document.getElementById('audio1');
  var isSupp0 = audio1.canPlayType("audio/mpeg");
  var isSupp1 = audio1.canPlayType("audio/wav");
  if ((m1_count == 0 && direction == 1) || (m1_count == 2 && direction == -1)) {
    //load second sound tracking
    if (isSupp0 === "") {
      if (isSupp1 === "") {
        audio1.src="audio/3/2.ogg";
      }else {
        audio1.src="audio/3/2.wav";
      }
    }else {
      audio1.src="audio/3/2.mp3";
    }
    m1_count = m1_count + direction;
    audio1.load();
    audio1.play();
    $('div#modal4_img').attr({
      "class" : "gallery autoplay items-3 avatar"
    });
    $('div#modal4_img').html(
      '<div id="item-1" class="control-operator"></div>'+
      '<div id="item-2" class="control-operator"></div>'+
      '<div id="item-3" class="control-operator"></div>'+
      '<figure class="item"><img src="img/3/details/n3.jpg" height="400px"></figure>'+
      '<figure class="item"><img src="img/3/details/n4.jpg" height="400px"></figure>'+
      '<figure class="item"><img src="img/3/details/n5.jpg" height="400px"></figure>'+
      '<div class="controls"><a href="#item-1" class="control-button">•</a>'+
      '<a href="#item-2" class="control-button">•</a><a href="#item-3" class="control-button">•</a></div>'
    );
    $('div#m4_text_holder').html("<p><strong>林徽因：</strong> “功德主故右军中尉王”是其中最为显赫的一个角色。唐中叶以后，宦官专权。贞元年间，特置神策军护军中尉，由宦官充任，当时称为“两军中尉”。此后中尉就掌握了天下大权，皇帝的废立，都由他决定。这个“功德主”大概就是元和长庆年间的宦官王守澄。殿之建立，距王守澄之死三十年，故称“故”右军中尉。</p>");

  }else if ((m1_count == 1 && direction == 1)) {
    //load third sound tracking
    if (isSupp0 === "") {
      if (isSupp1 === "") {
        audio1.src="audio/3/3.ogg";
      }else {
        audio1.src="audio/3/3.wav";
      }
    }else {
      audio1.src="audio/3/3.mp3";
    }
    m1_count = m1_count + direction;
    audio1.load();
    audio1.play();


    $('div#m4_text_holder').html("<p><strong>林徽因：</strong> “功德主故右军中尉王”的题记与“女弟子宁公遇”在同一梁栿下，足见二人关系之密切。唐代的阉官多有妻室，宁公遇或许就是王守澄的“妻”或“养女”，至少也是深受王在世时的恩宠的。所谓“上都送供”则宁公遇本人身在上都长安，而将财资兴建此殿，并将像送此供养，本人曾否亲至佛光寺，就无从考证了。</p>");

  }
  else if((m1_count == 2 && direction == 1) || (m1_count == 1 && direction == -1)){
    //load the first sound track
    //reset status
    if (isSupp0 === "") {
      if (isSupp1 === "") {
        audio1.src="audio/3/1.ogg";
      }else {
        audio1.src="audio/3/1.wav";
      }
    }else {
      audio1.src="audio/3/1.mp3";
    }
    m1_count = 0;
    $('div#m4_text_holder').html("<p><strong>林徽因：</strong>佛殿梁下唐人题字，列举建殿时当地官长和施主的姓名，也是关于这座殿的重要史料。其中最令人注意的莫如“佛殿主上都送供女弟子宁公遇”，这应是出资建殿的施主了。佛坛南端天王的旁边有一座等身信女像，敦煌壁画或画卷里也常有供养者侍坐画隅的例子，因此我们推定这就是供养者“女弟子宁公遇”的塑像。</p>");

    //int gallery
    $('div#modal4_img').attr({
      "class" : "gallery autoplay items-2 avatar"
    });
    $('div#modal4_img').html(
      '<div id="item-1" class="control-operator"></div>'+
      '<div id="item-2" class="control-operator"></div>'+
      '<figure class="item"><img src="img/3/details/n1.jpg" height="400px"></figure>'+
      '<figure class="item"><img src="img/3/details/n2.jpg" height="400px"></figure>'+
      '<div class="controls"><a href="#item-1" class="control-button">•</a>'+
      '<a href="#item-2" class="control-button">•</a></div>'
    );
    if (direction == -1) {
      audio1.load();
      audio1.play();
    }else {
      audio1.pause();
    }

  }
  if (m1_count == 0) {
    document.getElementById("m4_buttons_pre").hidden = true;
  }else {
    document.getElementById("m4_buttons_pre").hidden = false;
  }
  if (m1_count == 2) {
    document.getElementById("m4_buttons_next").hidden = true;
  }else {
    document.getElementById("m4_buttons_next").hidden = false;
  }
}

function m4_pre(){
  m4_update(-1);
}

function m4_next(){
  m4_update(1);
}

// $('#modal1').on('shown.bs.modal', function(e){
// 	bgm.pause();
// });
//
// $('#modal1').on('hide.bs.modal', function(e){
// 	bgm.play();
// });

$('#modal3').on('shown.bs.modal', function(e){
  var video = document.getElementById('modal3_video');
  video.load();
  video.play();
  var audio = document.getElementById('m3_audio');
  audio.load();
  audio.play();
  bgm.pause();

});

$('#modal3').on('hide.bs.modal', function(e){
  var video = document.getElementById('modal3_video');
  video.pause();
  var audio = document.getElementById('m3_audio');
  audio.pause();
  if (bgm1Statues == 1) {
    bgm.play();
  }

});

$('#modal4').on('shown.bs.modal', function(e){
  var audio1 = document.getElementById('audio1');
  var bgm4 = document.getElementById('m4_bgm');
  audio1.load();
  audio1.play();
  bgm4.load();
  bgm4.play();
  bgm.pause();

  //init text area
  if (m1_count==0) {
    $('div#m4_text_holder').html("<p><strong>林徽因：</strong>佛殿梁下唐人题字，列举建殿时当地官长和施主的姓名，也是关于这座殿的重要史料。其中最令人注意的莫如“佛殿主上都送供女弟子宁公遇”，这应是出资建殿的施主了。佛坛南端天王的旁边有一座等身信女像，敦煌壁画或画卷里也常有供养者侍坐画隅的例子，因此我们推定这就是供养者“女弟子宁公遇”的塑像。</p>");

    //int gallery
    $('div#modal4_img').attr({
      "class" : "gallery autoplay items-2"
    });
    $('div#modal4_img').html(
      '<div id="item-1" class="control-operator"></div>'+
      '<div id="item-2" class="control-operator"></div>'+
      '<figure class="item"><img src="img/3/details/n1.jpg" height="400px"></figure>'+
      '<figure class="item"><img src="img/3/details/n2.jpg" height="400px"></figure>'+
      '<div class="controls"><a href="#item-1" class="control-button">•</a>'+
      '<a href="#item-2" class="control-button">•</a></div>'
    );
  }


  audio1.onended = function(){
    m4_update(1);
  };

});

$('#modal4').on('hide.bs.modal', function(e){
  var audio1 = document.getElementById('audio1');
  var bgm4 = document.getElementById('m4_bgm');
  bgm4.pause();
  audio1.pause();
  if (bgm1Statues == 1) {
    bgm.play();
  }
});

$('#modal5').on('shown.bs.modal', function(e){
  var audio = document.getElementById('audio5');
  audio.load();
  audio.play();
  bgm.pause();

});

$('#modal5').on('hide.bs.modal', function(e){
  var audio = document.getElementById('audio5');
  audio.pause();
  if (bgm1Statues == 1) {
    bgm.play();
  }

});

$('#modal6').on('shown.bs.modal', function(e){
  var audio = document.getElementById('audio6');
  audio.load();
  audio.play();
  bgm.pause();

});

$('#modal6').on('hide.bs.modal', function(e){
  var audio = document.getElementById('audio6');
  audio.pause();
  if (bgm1Statues == 1) {
    bgm.play();
  }

});

$('#modal7').on('shown.bs.modal', function(e){
  var audio = document.getElementById('audio7');
  audio.load();
  audio.play();
  bgm.pause();

});

$('#modal7').on('hide.bs.modal', function(e){
  var audio = document.getElementById('audio7');
  audio.pause();
  if (bgm1Statues == 1) {
    bgm.play();
  }

});

//----------------------------------------------------
// button functions
$('button#setting-toggle').click(function(){
  toggleSetting();
});

$('button#m4_buttons_pre').click(function(){
  m4_pre();
});

$('button#m4_buttons_next').click(function(){
  m4_next();
});

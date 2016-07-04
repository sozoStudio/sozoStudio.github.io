//this script handles all the audio/img events!

var bgm = document.getElementById('bgm1');

var m1_count = 0;
var m5_count = 0;
var canvas;
$(document).ready(function(){
  //var audio = document.getElementById('bgm1');
  bgm.play();

});


function m5_update(direction){
  var audio = document.getElementById('m5_audio');
  var isSupp0 = audio.canPlayType("audio/mpeg");
  var isSupp1 = audio.canPlayType("audio/wav");
  if(direction>0){
    if(m5_count == 0){

      audio.src="audio/5/m5_2.mp3";

      audio.controls=true;
      audio.load();
      audio.play();

      //load gallery
      $('div#modal5_img').attr({
        "class" : "gallery autoplay items-3"
      });
      $('div#modal5_img').html(
        '<div id="item-1" class="control-operator"></div>'+
        '<div id="item-2" class="control-operator"></div>'+
        '<figure class="item"><img src="img/5/details/m5_1.jpg" height="400px"></figure>'+
        '<figure class="item"><img src="img/5/details/m5_2.jpg" height="400px"></figure>'+
        '<div class="controls"><a href="#item-1" class="control-button">•</a>'+
        '<a href="#item-2" class="control-button">•</a></div>'
      );

      //load text
      $('div#m5_text').html('<p>当时梁林二位先生认为右梢间骑狮者花冠上有阿弥陀佛，'+
      '乃是观音菩萨最显著的特征，因此非文殊而是观音。'+
      '这个看法引发了此后众多学者的不断研究与反复争论，'+
      '最终根据敦煌220窟壁画确认，这种前有于阗王牵狮、菩萨宝冠中央有一化佛的形象为新样文殊。</p>');

      //set buttons


    }else if (m5_count == 1) {
      //reload first sound track

      audio.src="audio/5/m5.mp3";

      audio.load();
      audio.pause();
      audio.controls=false;

      $('div#m5_text').html('<p>“新样文殊”画面正中为文殊菩萨正面端坐于华盖之下，带圆形头光与身光，头戴覆钵形金属质宝冠，宝冠中央有一化佛，头侧有缯带、铃铛装饰。菩萨坐于青狮背上，一腿弯曲踏于青狮身侧的莲花之上，另一只腿隐藏于青狮头后。青狮做止步回首状，张口吐舌，双眼圆睁，与身侧的于阗王相视。于阗王细眉长目，留着短而卷曲的络腮胡，身着土红色圆领窄袖袍，腰系带，下穿皮靴，双手挽着缰绳。</p>'+
      '<p>“新样文殊”是一个比较固定的图像组合，它在中原地区形成，传播到四川、敦煌等地甚至远涉日本、西域。“新样文殊”删去了天龙八部、帝释天、诸菩萨等眷属，增添了善财童子，另一个显著的特征则是将牵狮子的御者由南海昆仑奴变成了于阗王。</p>'+
      '<p>这一改变并非偶然，其反映了唐人对于西域的部分认知以及番王来朝的盛世思想。并且于阗王和文殊菩萨的配置方式与《华严经》的流行及五台山的信仰有着密不可分的关系。但是这一于阗王的形象与真实的于阗王之间相去甚远，其显然借鉴了旅居于长安的商胡形象，这说明唐人依靠自己熟悉的人物塑造了“新样文殊”中的于阗王。</p>');

    }else {
      //load the first sound track
      //reset status

    //m5_count = 0;
    audio.controls=true;
    $('div#modal5_img').html();
    $('div#m5_text').html('<p>文殊菩萨头戴天冠，面向秀润，双目平视，专注凝思，身披璎珞衣着，雍容华贵。手持如意，一派智慧深邃者的神态。坐骑高大威猛，作狂吼状，四蹄爪地，各踏一莲。</p>');
    }
  }else if (direction<0) {
    if(m5_count == 2){

      audio.src="audio/5/m5_2.mp3";

      audio.load();
      audio.play();
      audio.controls=true;

      //load gallery
      $('div#modal5_img').attr({
        "class" : "gallery autoplay items-3"
      });
      $('div#modal5_img').html(
        '<div id="item-1" class="control-operator"></div>'+
        '<div id="item-2" class="control-operator"></div>'+
        '<figure class="item"><img src="img/5/details/m5_1.jpg" height="400px"></figure>'+
        '<figure class="item"><img src="img/5/details/m5_2.jpg" height="400px"></figure>'+
        '<div class="controls"><a href="#item-1" class="control-button">•</a>'+
        '<a href="#item-2" class="control-button">•</a></div>'
      );

      //load text
      $('div#m5_text').html('<p>当时梁林二位先生认为右梢间骑狮者花冠上有阿弥陀佛，'+
      '乃是观音菩萨最显著的特征，因此非文殊而是观音。'+
      '这个看法引发了此后众多学者的不断研究与反复争论，'+
      '最终根据敦煌220窟壁画确认，这种前有于阗王牵狮、菩萨宝冠中央有一化佛的形象为新样文殊。</p>');

      //set buttons


    }else if (m5_count == 1) {
      //load the first sound track
      //reset status

      audio.src="audio/5/m5.mp3";

      audio.controls=true;
      audio.load();
      audio.play();

      //m5_count = 0;

      $('div#modal5_img').attr({
        "class" : ""
      });
      $('div#modal5_img').html('<p></p>');
      $('div#m5_text').html('<p>文殊菩萨头戴天冠，面向秀润，双目平视，专注凝思，身披璎珞衣着，雍容华贵。手持如意，一派智慧深邃者的神态。坐骑高大威猛，作狂吼状，四蹄爪地，各踏一莲。</p>');
    }
  }



  if (direction!=0) {
    m5_count = m5_count + direction;
  } else {
    m5_count = 0;
  }
  if (m5_count == 0) {
    document.getElementById("m5_pre").hidden = true;
  }else {
    document.getElementById("m5_pre").hidden = false;
  }
  if (m5_count == 2) {
    document.getElementById("m5_next").hidden = true;
  }else {
    document.getElementById("m5_next").hidden = false;
  }
}

function m5_buttons_pre(){
    //m5_count = m5_count - 1;
    console.log("before updating count is " + m5_count);
    m5_update(-1);
    console.log("after updating count is " + m5_count);
}

function m5_button_next(){
  m5_update(1);
}



function m1_update(direction){
  console.log("m1_count is " + m1_count);
  var isSupp0 = audio1.canPlayType("audio/mpeg");
  var isSupp1 = audio1.canPlayType("audio/wav");
  var isBgmSupp0 = m1_bgm.canPlayType("audio/mpeg");
  var isBgmSupp1 = m1_bgm.canPlayType("audio/wav");
  if ((m1_count == 0 && direction == 1) || (m1_count == 2 && direction == -1) ) {
    //load second sound tracking

    audio1.src="audio/4/2.mp3";

    if (direction == -1) {
      if (isBgmSupp0 === "") {
        if (isBgmSupp1 === "") {
          m1_bgm.src="audio/3/m3_bgm_0.ogg";
        }else {
          m1_bgm.src="audio/3/m3_bgm_0.wav";
        }
      }else {
        m1_bgm.src="audio/3/m3_bgm_0.mp3";
      }
      m1_bgm.load();
      m1_bgm.play();
    }


    m1_count=m1_count + direction;
    audio1.load();
    audio1.play();


    $('div#modal1_img').attr({
      "class" : "gallery autoplay items-2"
    });
    $('div#modal1_img').html(
      '<div id="item-1" class="control-operator"></div>'+
      '<div id="item-2" class="control-operator"></div>'+
      '<figure class="item"><img src="img/4/details/m1_4.jpg" height="400px"></figure>'+
      '<figure class="item"><img src="img/4/details/m1_5.jpg" height="400px"></figure>'+
      '<div class="controls"><a href="#item-1" class="control-button">•</a>'+
      '<a href="#item-2" class="control-button">•</a></div>'
    );
    $('div#m1_text_holder').html("<p><strong>林徽因：</strong>幢上除有官职者外，果然也有“女弟子宁公遇”的字样，称为“佛殿主”，名列在诸尼之前，“佛殿主”之名即写在梁上，又刻在经幢上，则经幢的建造应当是与大殿同时的，即使不是同年兴建，经幢的建立也该是在大殿完工的时候。东大殿的年代因此就可以推出了。</p>");

  }else if ((m1_count == 1 && direction == 1) || (m1_count == 3 && direction == -1)) {
    //load third sound tracking

    audio1.src="audio/4/3.mp3";



    m1_bgm.src="audio/3/m3_bgm_1.mp3";

    m1_count=m1_count + direction;
    audio1.load();
    audio1.play();
    m1_bgm.load();
    m1_bgm.play();

    $('div#modal1_img').html('<div id="canvas"></div>');
    $('div#modal1_img').attr({"class":""});
    $('div#canvas').css("background", "url(img/4/details/bkgtitle1.jpg)");
    $('div#canvas').css("width","300px");$('div#canvas').css("height","400px");
    (function() {
      // Creates a new canvas element and appends it as a child
      // to the parent element, and returns the reference to
      // the newly created canvas element

        var canvasOffset=$("#canvas").offset();
        var offsetX=canvasOffset.left;
        var offsetY=canvasOffset.top;

        var position = $('#modal1_img').position();
        var position0;


        function createCanvas(parent, width, height) {
          var canvas = {};
          canvas.node = document.createElement('canvas');
          canvas.context = canvas.node.getContext('2d');
          canvas.node.width = width || 100;
          canvas.node.height = height || 100;
          parent.appendChild(canvas.node);
          return canvas;
        }

        function init(container, width, height, fillColor) {
          canvas = createCanvas(container, width, height);
          //canvas.id = "canvas001";
          var ctx = canvas.context;
          ctx.globalAlpha = 0.5;
          position0 = $('#modal1_img').offset();


          //add touch event
          canvas.node.addEventListener("touchstart", handleStart, false);
          canvas.node.addEventListener("touchend", handleEnd, false);
          canvas.node.addEventListener("touchcancel", handleCancel, false);
          canvas.node.addEventListener("touchmove", handleMove, false);
          var ongoingTouches = new Array();


          //console.log("left position is " + position.left + "px, top is " + position.top);
          //console.log("left offset is " + position0.left + "px, top offset is " + position0.top);
          //var canvas = document.getElementById("canvas");
          // define a custom fillCircle method
          //canvas.addEventListener("touchstart",ontouchstart, false);
          ctx.fillCircle = function(x, y, radius, fillColor) {
              this.fillStyle = fillColor;
              this.beginPath();
              this.moveTo(x, y);
              this.arc(x, y, radius, 0, Math.PI * 2, false);
              this.fill();
          };
          ctx.clearTo = function(fillColor) {
              ctx.fillStyle = fillColor;
              ctx.fillRect(0, 0, width, height);
          };
          ctx.clearTo(fillColor || "#ddd");

          // bind mouse events
          canvas.node.onmousemove = function(e) {
              if (!canvas.isDrawing) {
                 return;
              }
               //var x = e.pageX - this.offsetLeft*1.45;
               //var y = e.pageY - this.offsetTop*6;
              //  console.log(this.offsetLeft);
              //  console.log(this.offsetTop);
               var x = e.pageX - this.offsetLeft+position.left-position0.left;
               var y = e.pageY - this.offsetTop+position.top -position0.top;
              var radius = 20; // or whatever
              var fillColor = '#ff0000';
              ctx.globalCompositeOperation = 'destination-out';
              ctx.fillCircle(x, y, radius, fillColor);
          };

          canvas.node.onmousedown = function(e) {
              canvas.isDrawing = true;
          };
          canvas.node.onmouseup = function(e) {
              canvas.isDrawing = false;
          };


          function handleStart(evt){
            evt.preventDefault();
            canvas.isDrawing = true;
            //console.log("touch start");

          }

          function handleEnd(evt){
            evt.preventDefault();
            canvas.isDrawing = false;
            console.log("touch end");

          }

          function handleMove(evt){
            evt.preventDefault();


            //console.log("touch move");
            if (!canvas.isDrawing) {
               return;
            }

            var touches = evt.changedTouches;
            if (touches.length>=0) {
              var x = touches[0].pageX - this.offsetLeft+position.left-position0.left;
              var y = touches[0].pageY - this.offsetTop+position.top -position0.top;
              var radius = 10; // or whatever
              var fillColor = '#ff0000';
              ctx.globalCompositeOperation = 'destination-out';
              ctx.fillCircle(x, y, radius, fillColor);
            }

          }

          function handleCancel(evt){
            evt.preventDefault();
            console.log("touch cancel");

          }

        }

        var container = document.getElementById('canvas');
        init(container, 50, 400, '#230e06');

      })();
    $('div#m1_text_holder').html("<p><strong>林徽因：</strong>为求得题字的全文，我们当时就请寺僧入村去募工搭架，想将梁下的土朱洗脱，一看究竟。不料村僻人稀，和尚去了一整天，仅得老农二人，对这种工作完全没有经验，筹划了一天，才支起一架。我们已急不能待地把布单撕开浸水相互传递，但是也做了半天才洗出两道梁。土朱一着了水，墨迹就骤然显出，但是水干之后，墨色又淡下去，又隐约不可见了。费了三天时间，才读完题字原文。可喜的是字体宛然唐风，无可置疑。</p>");

  }
  else if((m1_count == 2 && direction == 1))
  {
    //show the content of the title
    //remove the canvas element

    $('#canvas').html('');
    $('#canvas').html('<p id="intro-text" style="display:none">功\n'+
    '德\n'+'主\n'+'故\n'+'右\n'+'軍\n'+'中\n'+'尉\n'+'王\n'+ ' \n' + ' \n' + ' \n'+ '佛\n' +
    '殿\n'+'主\n'+'上\n'+'都\n'+'送\n'+'供\n'+'女\n'+'弟\n'+'子\n'+'甯\n'+'公\n'+'遇\n</p>'+
    '<ul id="result"></ul>');
    //intro text rolling.
    var lines = $('#intro-text').text().split("\n");

    var timer,
        displayLine = function(){
            var nextLine = lines.shift();
            if(nextLine){
                var newLine = $('<li id="line">' + nextLine + '</li>');
                $('#result').append(newLine);
                newLine.animate({ 'margin-left':0 }, 1100);
                timer = setTimeout(displayLine,200);
            }
        }
    timer = setTimeout(displayLine,200);
    m1_count = m1_count+direction;
    console.log(m1_count);
   }
  else if((m1_count == 3 && direction == 1))
  {
    //load the first sound track
    //reset status


    m1_count = m1_count+direction;
    if (direction == -1) {
      $('div#m1_text_holder').html("<p><strong>林徽因：</strong>我们在东大殿工作了几天，才看见殿内梁底隐约有墨迹，且有字的左右共四梁，这个发现对我们大家有如电击一般，没有比写在梁柱上或刻在石头上的日期更让人喜欢的东西了。但字迹被土朱所掩盖，梁底离地两丈多高，光线又不足，各梁的文字颇难确辨，审视了许久，各人凭字迹的目力，揣拟再三，才认出官职一二，而不能辨别人名。我素来远视，独见“女弟子宁公遇”之名，深怕有误，又详细检查阶前经幢上的姓名。</p>");

      //int gallery
      $('div#modal1_img').attr({
        "class" : "gallery autoplay items-3"
      });
      $('div#modal1_img').html(
        '<div id="item-1" class="control-operator"></div>'+
        '<div id="item-2" class="control-operator"></div>'+
        '<div id="item-3" class="control-operator"></div>'+
        '<figure class="item"><img src="img/4/details/m1_1.jpg" height="400px"></figure>'+
        '<figure class="item"><img src="img/4/details/m1_2.jpg" height="400px"></figure>'+
        '<figure class="item"><img src="img/4/details/title1.jpg" height="400px"></figure>'+
        '<div class="controls"><a href="#item-1" class="control-button">•</a>'+
        '<a href="#item-2" class="control-button">•</a><a href="#item-3" class="control-button">•</a></div>'
      );
      audio1.load();
      audio1.play();
      //m1_bgm.load();
      // m1_bgm.play();
    }else {

      m1_bgm.src="audio/3/m3_bgm_0.mp3";

      audio1.pause();
      //m1_bgm.pause();
    }

  }

  if (m1_count == 0) {
    document.getElementById("m1_pre").hidden = true;
  }else {
    document.getElementById("m1_pre").hidden = false;
  }
  if (m1_count >= 3) {
    document.getElementById("m1_next").hidden = true;
  }else {
    document.getElementById("m1_next").hidden = false;
  }
}

function m1_buttons_pre(){
    //m5_count = m5_count - 1;
    console.log("before updating count is " + m1_count);
    m1_update(-1);
    console.log("after updating count is " + m1_count);
}

function m1_button_next(){
  m1_update(1);
}

$('#modal1').on('shown.bs.modal', function(e){
  var audio1 = document.getElementById('audio1');
  var m1_bgm = document.getElementById('m1_bgm');
  var isSupp0 = audio1.canPlayType("audio/mpeg");
  var isSupp1 = audio1.canPlayType("audio/wav");
  var isBgmSupp0 = m1_bgm.canPlayType("audio/mpeg");
  var isBgmSupp1 = m1_bgm.canPlayType("audio/wav");



  //init audio + bgm
  if (m1_count==0) {

    audio1.src="audio/4/1.mp3";


    if (isBgmSupp0 === "") {
      if (isBgmSupp1 === "") {
        m1_bgm.src="audio/3/m3_bgm_0.ogg";
      }else {
        m1_bgm.src="audio/3/m3_bgm_0.wav";
      }
    }else {
      m1_bgm.src="audio/3/m3_bgm_0.mp3";
    }


    $('div#m1_text_holder').html("<p><strong>林徽因：</strong>我们在东大殿工作了几天，才看见殿内梁底隐约有墨迹，且有字的左右共四梁，这个发现对我们大家有如电击一般，没有比写在梁柱上或刻在石头上的日期更让人喜欢的东西了。但字迹被土朱所掩盖，梁底离地两丈多高，光线又不足，各梁的文字颇难确辨，审视了许久，各人凭字迹的目力，揣拟再三，才认出官职一二，而不能辨别人名。我素来远视，独见“女弟子宁公遇”之名，深怕有误，又详细检查阶前经幢上的姓名。</p>");

    //int gallery
    $('div#modal1_img').attr({
      "class" : "gallery autoplay items-3"
    });
    $('div#modal1_img').html(
      '<div id="item-1" class="control-operator"></div>'+
      '<div id="item-2" class="control-operator"></div>'+
      '<div id="item-3" class="control-operator"></div>'+
      '<figure class="item"><img src="img/4/details/m1_1.jpg" height="400px"></figure>'+
      '<figure class="item"><img src="img/4/details/m1_2.jpg" height="400px"></figure>'+
      '<figure class="item"><img src="img/4/details/title1.jpg" height="400px"></figure>'+
      '<div class="controls"><a href="#item-1" class="control-button">•</a>'+
      '<a href="#item-2" class="control-button">•</a><a href="#item-3" class="control-button">•</a></div>'
    );
    document.getElementById("m1_pre").hidden = true;
    document.getElementById("m1_next").hidden = false;
  }

  audio1.load();
  audio1.play();
  m1_bgm.load();
  m1_bgm.play();
  bgm.pause();

  audio1.onended = function(){
    m1_update(1);
  };

});

$('#modal1').on('hide.bs.modal', function(e){
  var audio1 = document.getElementById('audio1');
  var m1_bgm = document.getElementById('m1_bgm');
  if (m1_count>=3) {
    m1_count=0;
  }
  m1_bgm.pause();
  audio1.pause();
  if (bgm1Statues == 1) {
    bgm.play();
  }


});

$('#modal3').on('shown.bs.modal', function(e){
  var audio = document.getElementById('audio3');
  audio.load();
  audio.play();
  //bgm.pause();
});

$('#modal3').on('hide.bs.modal', function(e){
  var audio = document.getElementById('audio3');
  audio.pause();
  if (bgm1Statues == 1) {
    bgm.play();
  }

});

$('#modal4').on('shown.bs.modal', function(e){
  var audio = document.getElementById('m4_audio');
  audio.load();
  audio.play();
  var video = document.getElementById('m4_video');
  video.load();
  video.play();
  //bgm.pause();
});

$('#modal4').on('hide.bs.modal', function(e){
  var audio = document.getElementById('m4_audio');
  audio.pause();
  var video = document.getElementById('m4_video');
  video.pause();
  if (bgm1Statues == 1) {
    bgm.play();
  }

});

$('#modal5').on('shown.bs.modal', function(e){
  var audio = document.getElementById('m5_audio');
  audio.load();
  audio.play();

  //bgm.pause();
  audio.onended = function(){m5_update(1);};
});

$('#modal5').on('hide.bs.modal', function(e){
  var audio = document.getElementById('m5_audio');
  audio.pause();

  if (bgm1Statues == 1) {
    bgm.play();
  }

});

$('#modal6').on('shown.bs.modal', function(e){
  var audio = document.getElementById('audio6');
  audio.load();
  audio.play();
  //bgm.pause();
});

$('#modal6').on('hide.bs.modal', function(e){
  var audio = document.getElementById('audio6');
  audio.pause();

  if (bgm1Statues == 1) {
    bgm.play();
  }

});
//------------------------------------------------------------
//button fuctions
$('#setting-toggle').click(function(){
  toggleSetting();
});

$('button#m1_pre').click(function(){
  m1_buttons_pre();
});

$('button#m1_next').click(function(){
  m1_button_next();
});

$('button#m5_pre').click(function(){
  m5_buttons_pre();
});

$('button#m5_next').click(function(){
  m5_button_next();
});

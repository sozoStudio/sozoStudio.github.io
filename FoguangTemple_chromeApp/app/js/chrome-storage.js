var audio = $("audio");
var count_JQ = $("audio").size();
var audio2_1 = document.getElementById("2audio_0");
var audio2_2 = document.getElementById("2audio_1");
var audio2_3 = document.getElementById("2audio_2");
var audio2_4 = document.getElementById("2audio_3");

var eachAudioCount = 0;
var newValue;

var chap2Count;
var currentCount;

// chapter 2 audios
var chap2Audio = $(".chap2Audio");

chap2Audio.each(function(i){
  if (i < count_JQ - 1) {
    this.addEventListener("ended", function () {
        if($(this).hasClass("counted")){
            newValue = newValue;
        }
        else {
        $(this).addClass("counted");
          newValue = eachAudioCount ++;
        //   console.log(typeof currentCount );
          console.log("chap2 count " + newValue);
      }
      });
    }
  });

  // chapter 1 audios
  var chap1Audio = $(".chap1Audio");
  chap1Audio.each(function(i){
    if (i < count_JQ - 1) {
        this.addEventListener("ended", function () {
            chap1Count ++;
        });
    }
    });


    $("audio").each(function(i){
      if (i < count_JQ - 1) {
        this.addEventListener("ended", function () {
            chrome.storage.sync.set({'audioEnd' : chap2Count}, function() {
            });

                chrome.storage.sync.get('audioEnd', function(data){
                    console.log("audiocount is " + data.audioEnd);
                });
            });
      }
    });


window.onload= function() {
    document.getElementById('save').onclick = function() {
        var value = document.getElementById("saveLine").value;

        chrome.storage.sync.set({'myLine' : value}, function() {
            console.log('success');
        });
    }

    document.getElementById('get').onclick = function() {
        chrome.storage.sync.get('audioEnd', function(data){
            console.log(data.audioEnd);
        });
    }
}

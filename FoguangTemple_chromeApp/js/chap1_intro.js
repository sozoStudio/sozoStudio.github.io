$("#sunrisebutton").click(function(){
    console.log("pause audio function called");
    var audio = document.getElementById("intro_narr");
    audio.load();audio.pause();
  });

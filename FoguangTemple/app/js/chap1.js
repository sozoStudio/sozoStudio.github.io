var timelineControllers = angular.module('timelineControllers', ['ui.bootstrap.dialog'])
.filter('trustUrl', function ($sce) {
  return function(url) {
    return $sce.trustAsResourceUrl(url);
  };
});

///////////////////////////
//chapter 1 timeline
///////////////////////////
timelineControllers.controller('timelineController', ['$scope', '$http', function($scope, $http) {
  $http.get('source/timeline_new.json').success(function(data) {
    $scope.events = data;
    $scope.letterLimit = 80;
    document.body.style.width = '5000px';
    $('#texture').css('width','5000px');

    var found = $.grep(data, function(audio) {
      return audio.id === 1;
    });
    $('audio').css('border',"solid");

    $scope.selectItem = function(selectedItem){
    	for(var i = 0; i < $scope.events.length; i++){
            var item = $scope.events[i];
            if(item.id == selectedItem.id){
                item.selected = !item.selected;
                document.body.style.width = '5000px';
                $scope.letterLimit = 1000;
            }else {
                item.selected = false;
                document.body.style.width = '3700px';
                $scope.letterLimit = 80;
            }
          }
	     }
  // var top = $node.position().top;
  // $('.scene-title-box').line(bottom + 20,140,200,400, {color:"red", style: "solid"});
  });
}]);

///////////////////////////
//chapter 2 scroll
///////////////////////////
timelineControllers.controller('Chap2Controller', ['$scope', '$http',function($scope, $http) {
  $http.get('source/chap2-scroll.json').success(function(data) {
    $scope.events = data;
    $scope.first = data[0];

    // $scope.whichartist=$state.params.aId;
    document.body.style.width = '8500px';
    $('#texture').css('width','8500px');

    var audio1 = document.getElementById("audio_0");
    $("#audio_0").bind("load",function(){
        console.log("Audio Loaded succesfully");
    });

    // when click on each item, expand the width
    $scope.selectItem = function(selectedItem){
        for(var i = 0; i < $scope.events.length; i++){
            var item = $scope.events[i];
            if(item.id == selectedItem.id){
                item.selected = !item.selected;
                document.body.style.width + 100;
                $scope.letterLimit = 1000;
            }else {
                item.selected = false;
                document.body.style.width;
                $scope.letterLimit = 100;
            }
          }
      }

    //only allow one audio at a time
//     $(".narration").on("play", function() {
//     $(".narration").not(this).each(function(index, audio) {
//         audio.pause();
//     });
//      });

    //auto play bgm
        var playbgm = document.getElementById('bgm1');
        playbgm.load();
        playbgm.play();

    //auto play audio
    var playaudio = (function(number){
        var currentAudio = document.getElementById('audio_' + number);
        currentAudio.load();
        currentAudio.play();
        console.log(number);
    });

        for(var i = 0; i < $scope.events.length; i++){
            playaudio(i);
        }


  });

  // alert when audio is finished playing
  $("#audio_0").on('ended',function(){
      alert('sdfsgdsg');
  });


}]);

///////////////////////////
//chapter 3 scroll
///////////////////////////
timelineControllers.controller('Chap3Controller', ['$scope', '$http',function($scope, $http) {
  $http.get('source/chap3-scroll.json').success(function(data) {
    $scope.events = data;
    // $scope.whichartist=$state.params.aId;
    document.body.style.width = '8500px';
    $('#texture').css('width','8500px');

    $scope.selectItem = function(selectedItem){
        for(var i = 0; i < $scope.events.length; i++){
            var item = $scope.events[i];
            if(item.id == selectedItem.id){
                item.selected = !item.selected;
                document.body.style.width + 100;
                $scope.letterLimit = 1000;
                $('body').addClass("black-bg");
            }else {
                item.selected = false;
                document.body.style.width;
                $scope.letterLimit = 100;
                $('body').removeClass("black-bg");
            }
          }
         }
  });
}]);

///////////////////////////
///////////////////////////

timelineControllers.controller('Ctrl', function($scope, $window,$dialog) {
            $scope.open = function() {
                var options = {
                    backdrop: true,
                    keyboard: true,
                    controller: 'DetailsController',
                    templateUrl: 'partials/test.html'
                };
                var dialog = $dialog.dialog(options);
                dialog.open().then(function(result) {
                    if (result === 0) {
                        $window.alert("Cancel pressed");
                    }
                    else if (result === 1) {
                        $window.alert("OK pressed");
                    }
                });
            };
        })
        .controller('DialogCtrl', function($scope, dialog) {
            $scope.close = function(result) {
                dialog.close(result);
            };
        });

///////////////////////////
//details controller
///////////////////////////
timelineControllers.controller('DetailsController', ['$scope', '$http', '$state',function($scope, $http, $state, dialog) {
    $http.get('source/chap2-scroll.json').success(function(data) {
        $scope.events = data;
        // $scope.whichItem = $routeParams.itemId;
        $scope.whichItem=$state.params.itemId;

    $scope.close = function(result) {
        dialog.close(result);
    };

  });
}]);

///////////////////////////
//tab controller
///////////////////////////
timelineControllers.controller('tabcontrol',function(){
  $('.chap-title').hide();
    $("#menu-toggle").click(function(e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
        var sidebarLen = $('#sidebar-wrapper').width();
        var sidebar = $('#sidebar-wrapper');
         console.log ($('#sidebar-wrapper').width());
        if(sidebarLen < 50){
          //  $(sidebar).css('border','3px solid red');
           $(".chap-title").show();
          $("#sidebar-toggle").removeClass('sidebar-move');
        }
        if(sidebarLen > 50){
          $(".chap-title").hide();
          $("#sidebar-toggle").addClass('sidebar-move');
        }
    });
});

var myApp = angular.module('myApp', [
  'ui.router',
  'timelineControllers'
]);

myApp.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/home');

  $stateProvider
  //tabs,dependent page
  .state('tab', {
    url: '/tab',
    // abstract: true,
    templateUrl: 'partials/tab.html',
    controller:'tabcontrol'
  })

  //main home page with video
  .state('home',{
    url:'/home',
    templateUrl:'partials/chap0_main.html'
  })

  //sunrise page
  .state('intro',{
    url:'/intro',
    templateUrl:'partials/chap1_intro.html'
  })

  //timeline page
  .state('tab.timeline', {
    url: '/timeline',
        templateUrl: 'partials/chap1_timeline.html',
        controller: 'timelineController'
  })

//chapter 2
  .state('tab.chap2', {
    url:'/chap2',
        templateUrl:'partials/chap2_scroll.html',
        controller:'Chap2Controller'

  })
  //chapter 3
    .state('tab.chap3', {
      url:'/chap3',
          templateUrl:'partials/chap3_scroll.html',
          controller:'Chap3Controller'

    })

  .state('tab.details', {
        url: '/list/:itemId',
            templateUrl: 'partials/details.html',
            controller:'DetailsController'
      })
});

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
  $http.get('source/timeline.json').success(function(data) {
    $scope.events = data;
    $scope.letterLimit = 80;
    document.body.style.width = '3500px';
    $('#texture').css('width','3500px');

    var found = $.grep(data, function(audio) {
      return audio.id === 1;
    });
    $('audio').css('border',"solid");

    $scope.selectItem = function(selectedItem){
    	for(var i = 0; i < $scope.events.length; i++){
            var item = $scope.events[i];
            if(item.id == selectedItem.id){
                item.selected = !item.selected;
                document.body.style.width = '4000px';
                $scope.letterLimit = 1000;
            }else {
                item.selected = false;
                document.body.style.width = '3500px';
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

/*-------------------------------------------------------------------------------------------------
  This plugin is based on the GAPJUMPER line example http://www.gapjumper.com/research/lines.html.
  Special thanks to its author!
  Author: Tiago do Bem 
  Date: March 2013
  URL: https://github.com/tbem/jquery.line
  The jQuery.line.js plugin is distributed under the GNU General Public License version 3 (GPLv3).
  -------------------------------------------------------------------------------------------------
*/ 

(function($) {

  var helpers = {
    createLine: function(x1, y1, x2, y2, options){
      
                  // Check if browser is Internet Exploder ;)
                  var isIE = navigator.userAgent.indexOf("MSIE") > -1;
                  if (x2 < x1){
                    var temp = x1;
                    x1 = x2;
                    x2 = temp;
                    temp = y1;
                    y1 = y2;
                    y2 = temp;
                  }
                  var line = document.createElement("div");
                  
                  // Formula for the distance between two points
                  // http://www.mathopenref.com/coorddist.html
                  var length = Math.sqrt((x1-x2)*(x1-x2) + (y1-y2)*(y1-y2));

                  line.style.width = length + "px";
                  line.style.borderBottom = options.stroke + "px " + options.style;
                  line.style.borderColor = options.color;
                  line.style.position = "absolute";
                  line.style.zIndex = options.zindex;

                  if(isIE){
                    line.style.top = (y2 > y1) ? y1 + "px" : y2 + "px";
                    line.style.left = x1 + "px";
                    var nCos = (x2-x1)/length;
                    var nSin = (y2-y1)/length;
                    line.style.filter = "progid:DXImageTransform.Microsoft.Matrix(sizingMethod='auto expand', M11=" + nCos + ", M12=" + -1*nSin + ", M21=" + nSin + ", M22=" + nCos + ")";
                  }else{
                    var angle = Math.atan((y2-y1)/(x2-x1));
                    line.style.top = y1 + 0.5*length*Math.sin(angle) + "px";
                    line.style.left = x1 - 0.5*length*(1 - Math.cos(angle)) + "px";
                    line.style.transform = line.style.MozTransform = line.style.WebkitTransform = line.style.msTransform = line.style.OTransform= "rotate(" + angle + "rad)";
                  }
                  return line;
                }
  }
  

  $.fn.line = function( x1, y1, x2, y2, options, callbacks) {
                return $(this).each(function(){
                  if($.isFunction(options)){
                      callback = options;
                      options = null;
                  }else{
                    callback = callbacks;
                  }
                  options = $.extend({}, $.fn.line.defaults, options);

                  $(this).append(helpers.createLine(x1,y1,x2,y2,options)).promise().done(function(){
                    if($.isFunction(callback)){
                      callback.call();
                    }
                  });

                
              });
  };
  $.fn.line.defaults = {  zindex : 10000,
                          color : '#000000',
                          stroke: "1",
                          style: "solid",
                        };
})(jQuery);


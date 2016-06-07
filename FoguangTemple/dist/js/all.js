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
  })

//chapter 2
  .state('tab.chap2', {
    url:'/chap2',
        templateUrl:'partials/chap2_second.html',
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


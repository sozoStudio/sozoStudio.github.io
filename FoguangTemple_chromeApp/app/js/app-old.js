var myApp = angular.module('myApp', [
  'ngRoute',
  'ui.router',
  'timelineControllers'
]);

myApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider.

 //index page
  when('/tab',{
    abstract:true,
    templateUrl:'partials/tab.html',
    controller: 'tabcontrol'
  }).

  when('/main', {
    templateUrl: 'partials/chap0_main.html'
  }).

  //chapter 1 Intro
  when('/intro', {
    templateUrl: 'partials/chap1_intro.html'
  }).

  //chapter 1 timeine page
  when('/timeline', {
    templateUrl: 'partials/chap1_timeline.html',
    controller: 'timelineController'
  }).

  //chapter 2 scroll
  when('/chap2', {
    templateUrl: 'partials/chap2_scroll.html',
    controller: 'Chap2Controller'
  }).

  //chapter 2 details
when('/details/:itemId',{
   templateUrl:'partials/details.html',
   controller:'DetailsController'
 }).

  //default page
  otherwise({
    redirectTo: '/main'
  });
}]);

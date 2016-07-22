var bgm1Statues = 1;
var n1Statues = 1;
// $('div#body-setting').html('<div class="main" ui-view></div>');
$("#menu-toggle").click(function(e) {
    e.preventDefault();
    $("#wrapper-p").toggleClass("toggled");
});
$('#narPlayPause').change(function() {
  console.log('Toggle: ' + $(this).prop('checked'));
  playPause('n1');
  n1Statues = -n1Statues;
});
$('#map_trigger').click(function(){
  $('#map-popup').modal('toggle');
});

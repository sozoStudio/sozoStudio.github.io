var bgm1Statues = 1;
var n1Statues = 1;

$("#menu-toggle").click(function(e) {
    e.preventDefault();
    $("#wrapper").toggleClass("toggled");
});
$('#narPlayPause').change(function() {
  console.log('Toggle: ' + $(this).prop('checked'));
  playPause('n1');
  n1Statues = -n1Statues;
});

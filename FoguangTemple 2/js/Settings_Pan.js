function toggleSetting(){
  $('#modal_S').modal('toggle');
}

$('#changeControls').change(function() {
  console.log('Toggle: ' + $(this).prop('checked'));
  toggleControls();
});

$('#hotspotButton').change(function() {
  console.log('Toggle: ' + $(this).prop('checked'));
  toggleHotspots();
});

$('#songPlayPause').change(function() {
  console.log('Toggle: ' + $(this).prop('checked'));
  playPause('bgm1');
  bgm1Statues = -bgm1Statues;
  console.log("bgm1Statues is " + bgm1Statues);
});

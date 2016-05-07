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
});

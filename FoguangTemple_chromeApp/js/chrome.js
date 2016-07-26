var bgm1Statues = 1;


$("#menu-toggle").click(function(e) {
    e.preventDefault();
    console.log("sidebar toggle");
    $("#wrapper-p").toggleClass("toggled");
});
$('#map_trigger').click(function(){
  $('#map-popup').modal('toggle');
});

$('#map-popup').on('shown.bs.modal', function(e){
  //function to load map elements
  $('#map_container').html('<img class="onMapIcon inside" id="on_map_icon_inside" src="img/UI/icons/map_icons-01.png">'+
  '<img class="onMapIcon outside" id="on_map_icon_outside" src="img/UI/icons/map_icons-02.png">'+
  '<img src="img/map.png" width="100%"></img>');

  var mapInside = $('#on_map_icon_inside');
  mapInside.click(function(){
    setTimeout(function(){chrome.app.window.current().close();}, 300);
    console.log("function called");
    chrome.app.window.create('pan_scene1.html',
        {
            type:       "panel",
            bounds: { width: 1280, height: 720},
            minWidth:800, minHeight: 450,
            focused: true
        });
  });

  var mapOutside = $('#on_map_icon_outside');
  mapOutside.click(function(){
    setTimeout(function(){chrome.app.window.current().close();}, 300);
    console.log("function called");
    chrome.app.window.create('pan_scene6.html',
        {
            type:       "panel",
            bounds: { width: 1280, height: 720},
            minWidth:800, minHeight: 450,
            focused: true
        });
  });

});

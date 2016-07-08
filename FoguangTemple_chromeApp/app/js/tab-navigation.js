$(document).ready(function() {
    $('.chap-title').hide();
      $("#menu-toggle").click(function(e) {
          e.preventDefault();
          $("#wrapper").toggleClass("toggled");
          var sidebarLen = $('#sidebar-wrapper').width();
          var sidebar = $('#sidebar-wrapper');

          if(sidebarLen < 50){
            //  $(sidebar).css('border','3px solid red');
            $("#menu-toggle, #chap2_start").animate({
                left: "+=130"
            }, 400, function() {
                // Animation complete.
              });
             $(".chap-title").show();
            $("#sidebar-toggle").removeClass('sidebar-move');
          }
          if(sidebarLen > 50){
            $("#menu-toggle, #chap2_start").animate({
                left: "-=130"
            }, 400, function() {
                // Animation complete.
              });
            $(".chap-title").hide();
            $("#sidebar-toggle").addClass('sidebar-move');
          }
      });
});

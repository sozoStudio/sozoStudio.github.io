$(document).ready(function() {
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

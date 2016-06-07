new WOW().init();
// //// auto play audio //////


//////  resize images /////
// var sceneImg = $(".scene-img"),
//     containerW = $(".left-chapscroll").width(),
//     imageContainer = $(".scroll-img");
//     originWidth = $(imageContainer).find("img").width();
//     originHeight = $(imageContainer).find("img").height();
//
//     $.each(imageContainer, function(){
//         imageNum = $(this).find(".scene-img").size();
//         imageWidth = containerW / imageNum;
//         if(originWidth > originHeight ){
//         $(".scene-img").css({
//             "width": imageWidth,
//             "height":'auto',
//         });
//         $('.image-container ').css(
//             "width", imageWidth
//         );
//         }
//         else {
//             $(".scene-img").css({
//                 "width": imageWidth,
//                 "height":'auto',
//             });
//         }
//     });

$(".second-img").click(function() {
    $(this).fadeToggle("slow");
});
$(".first-img").click(function() {
    $(".second-img").fadeToggle("slow");
});
$('#texture').css('width','11700px');

//button change text
var startbutton = $("#chap2_start");
startbutton.text('开始介绍');

$(startbutton).click(function(){
    var $this = $(this);
    $this.toggleClass('SeeMore2');
    if($this.hasClass('SeeMore2')){
        $this.text('停止介绍');
    } else {
        $this.text('开始介绍');
    }
});

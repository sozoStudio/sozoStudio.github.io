new WOW().init();
var yellowtext = $(".yellow-text");
var redtext = $(".red-text");

$(yellowtext[0]).click(function() {
    $("#img37").addClass("animated FadeinLeft");
});

$(yellowtext[1]).click(function() {
    $("#mrLiang").addClass("animated FadeinRight");
});

$(redtext[0]).click(function() {
        $("#msling").fadeOut();
        $(".class").css("display", "block");
});

$(redtext[1]).click(function() {
    $("#red2").fadeIn();
    $(".audio9imgs").not("#red2").fadeOut();
});

$(redtext[2]).click(function() {
    $("#red4").fadeIn();
    $(".audio9imgs").not("#red4").fadeOut();
});

$(redtext[3]).click(function() {
    $("#red6").fadeIn();
    $(".audio9imgs").not("#red6").fadeOut();
});

$(redtext[4]).click(function() {
    $("#red1").fadeIn();
    $(".audio9imgs").not("#red1").fadeOut();
});

$(redtext[5]).click(function() {
    $("#red5").fadeIn();
    $(".audio9imgs").not("#red5").fadeOut();
});

$(redtext[6]).click(function() {
    $("#red3").fadeIn();
    $(".audio9imgs").not("#red3").fadeOut();
});

// $(".audio9imgs").click(function(){
//     $(".audio9imgs").fadeOut();
// })
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

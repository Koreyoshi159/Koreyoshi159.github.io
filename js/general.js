$(document).ready(function () {
    console.log("ready!");
    fadeBackground()
});

function fadeBackground(){
    $(window).scroll(function() {
        $(".top").css("opacity", 1 - $(window).scrollTop() / 350);
      });
}
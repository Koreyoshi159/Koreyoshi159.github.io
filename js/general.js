$(document).ready(function () {
    console.log("ready!");
    fadeBackground();
    careerImageToggle();
});

function fadeBackground(){
    $(window).scroll(function() {
        $(".top").css("opacity", 1 - $(window).scrollTop() / 350);
      });
}

function careerImageToggle() {
    $("#showResultImageCareer").on("click", function() {
        $(".motivation-item-4").toggle();
    })
}
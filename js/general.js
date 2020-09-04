$(document).ready(function () {
    console.log("ready!");
    printTable();
    fadeBackground()
});

let course = [
    "Opleidings- en beroepsorientatie",
    "Computer Science Basics",
    "Programming basics",
    "Professional skills 1",
    "HZ personality 1",
    "Object-oriented programming",
    "Professional skills 2",
    "Professionele werkplek",
    "Framework development 1",
    "Framework project 1",
    "Professional skills 3",
    "IT personality 1",
    "Framework development 2",
    "Framework project 2"
];

let ec = [
    2.5,
    7.5,
    5,
    2.5,
    2.5,
    10,
    2.5,
    2.5,
    5,
    5,
    2.5,
    2.5,
    5,
    5
];

let grade = [
    "NULL",
    "NULL",
    "NULL",
    "NULL",
    "NULL",
    "NULL",
    "NULL",
    "NULL",
    "NULL",
    "NULL",
    "NULL",
    "NULL",
    "NULL",
    "NULL"
];

function printTable() {
    for (i = 0; i < course.length; ++i) {
        $("#grade").append(
            "<tr><td>" + course[i] + "</td><td>" + ec[i] + "</td><td>" + grade[i] + "</td></tr>"
        );
    };
};

function fadeBackground(){
    $(window).scroll(function() {
        $(".top").css("opacity", 1 - $(window).scrollTop() / 350);
      });
}
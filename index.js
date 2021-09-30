// JavaScript Document

$(function() {
    $("#ab").click(function() {
    $('html, body').animate({
        scrollTop: $("#about").offset().top
    }, 1200);
});

    $("#sk").click(function() {
    $('html, body').animate({
        scrollTop: $("#skills").offset().top
    }, 1200);
});

    $("#pr").click(function() {
    $('html, body').animate({
        scrollTop: $("#projects").offset().top
    }, 1200);
});

    $("#co").click(function() {
    $('html, body').animate({
        scrollTop: $("#contact").offset().top
    }, 1200);
});
});
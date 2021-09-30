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

    $("#ho").click(function() {
    $('html, body').animate({
        scrollTop: $("#hobbies").offset().top
    }, 1200);
    });

    $("#co").click(function() {
    $('html, body').animate({
        scrollTop: $("#contact").offset().top
    }, 1200);
    });
});




i = 1;

function SwapToRight()
{
    d1 = document.getElementById("hobbie-geocaching");
    d2 = document.getElementById("hobbie-whiskey");
    d3 = document.getElementById("hobbie-rc");
    d4 = document.getElementById("hobbie-computers");
    d5 = document.getElementById("hobbie-fortnite");
    d6 = document.getElementById("hobbie-trading");
    
    i = i + 1;   
       
    if( i == 1 ) {
      d1.style.display = "flex";
   }
    else if ( i == 2 ) {
      d1.style.display = "none";
      d2.style.display = "flex";
   }
    else if( i == 3 ) {
      d2.style.display = "none";
      d3.style.display = "flex";
   }
    else if ( i == 4 ) {
      d3.style.display = "none";
      d4.style.display = "flex";
   }
    else if( i == 5 ) {
      d4.style.display = "none";
      d5.style.display = "flex";
   }
    else if ( i == 6 ) {
      d5.style.display = "none";
      d6.style.display = "flex";
   }
    else  {
      i = 1;
      d1.style.display = "flex";
      d6.style.display = "none";      
   }
}


function SwapToLeft()
{
    d1 = document.getElementById("hobbie-geocaching");
    d2 = document.getElementById("hobbie-whiskey");
    d3 = document.getElementById("hobbie-rc");
    d4 = document.getElementById("hobbie-computers");
    d5 = document.getElementById("hobbie-fortnite");
    d6 = document.getElementById("hobbie-trading");
       
    i = i - 1;       
    
   if( i == 1 ) {
      d1.style.display = "flex";
      d2.style.display = "none";
   }
   else if ( i == 2 ) {
      d2.style.display = "flex";
      d3.style.display = "none";
   }
    else if( i == 3 ) {
      d3.style.display = "flex";
      d4.style.display = "none";
   }
   else if ( i == 4 ) {
      d4.style.display = "flex";
      d5.style.display = "none";
   }
    else if( i == 5 ) {
      d5.style.display = "flex";
      d6.style.display = "none";
   }
   else  {
      i = 6;
      d1.style.display = "none";
      d6.style.display = "flex";
   }
}
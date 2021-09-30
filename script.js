// JavaScript Document

$('a.tlacitko').on('click', function(){
  var odkaz = $(this).attr('href');
  var menu = $('nav');
  var rychlost = 1000;

  $("html, body").stop().animate(
   { scrollTop: $(odkaz).offset().top - menu.height() },
   rychlost,"easeInOutExpo" );

  e.preventDefault();

});
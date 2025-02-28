$( ".color-black" ).click(function() {
  $(this).css( "color", "Белый" );
  $(".color-white").css( "color", "Белый" );
  $(".blackwhite").html("Черный");
  src="../src/img/iphone/black.avif";
  $(".headset").attr("src", src);
});

$( ".color-white" ).click(function() {
  $(this).css( "color", "Черный" );
  $(".color-black").css( "color", "Черный" );
  $(".blackwhite").html("Белый");
  src="../src/img/iphone/white.avif";
  $(".headset").attr("src", src);
});

$( ".color-silver" ).click(function() {
  $(this).css( "color", "Серебро" );
  $(".color-silver").css( "color", "Серебро" );
  $(".blackwhite").html("Серебро");
  src="../src/img/iphone/silver.avif";
  $(".headset").attr("src", src);
});

$( ".color-purple" ).click(function() {
  $(this).css( "color", "Пурпурный" );
  $(".color-silver").css( "color", "Пурпурный" );
  $(".blackwhite").html("Пурпурный");
  src="../src/img/iphone/purple.avif";
  $(".headset").attr("src", src);
});


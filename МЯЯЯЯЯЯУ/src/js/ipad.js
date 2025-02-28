$( ".color-gray" ).click(function() {
    $(this).css( "color", "Бежевый" );
    $(".color-silver").css( "color", "Бежевый" );
    $(".blackwhite").html("Бежевый");
    src="../src/img/ipad/gray.webp";
    $(".headset").attr("src", src);
  });
  
  $( ".color-purple" ).click(function() {
    $(this).css( "color", "Пурпурный" );
    $(".color-silver").css( "color", "Пурпурный" );
    $(".blackwhite").html("Пурпурный");
    src="../src/img/ipad/purple.webp";
    $(".headset").attr("src", src);
  });
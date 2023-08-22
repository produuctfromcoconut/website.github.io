$(".menu-toggle").click(function(){
  $(".mob-abs").addClass("menu-active");
	  $("body").addClass("scroll-lock");
});

$(".mob-abs button").click(function(){
  $(".mob-abs").removeClass("menu-active");
	  $("body").removeClass("scroll-lock");
});
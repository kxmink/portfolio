$(function () {
  //gnb
  $(".gnb > li").hover(function () {
    $(this).find(".depth2").stop().slideToggle();
  });
  $(".gnb > li").mouseenter(function () {
    $(this).siblings().children("a").css("opacity", 0.5);
  });
  $(".gnb > li").mouseleave(function () {
    $(".gnb > li > a").css("opacity", 1);
  });

  //mgnb
  $(".mgnb_wrap").hide();
  $(".btn_ham").click(function () {
    $(".mgnb_wrap").fadeIn();
  })
  $(".mgnb_close").click(function () {
    $(".mgnb_wrap").fadeOut();
  })
});
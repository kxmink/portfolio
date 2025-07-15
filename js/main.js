function setHeaderState() {
  let winW = $(window).width();
  let pos = $(window).scrollTop();

  if (winW <= 1024) {
    $("nav").addClass("fold");
    $("h1").addClass("fold").stop(true, true).css({
      opacity: 1,
      transition: 'opacity 0.5s cubic-bezier(0.4,0,0.2,1)'
    }).show(); // h1에 fold 클래스 추가
  } else if (pos > 200) {
    $("nav").addClass("fold");
    $("h1").addClass("fold").stop(true, true).css({
      opacity: 0,
      transition: 'opacity 0.5s cubic-bezier(0.4,0,0.2,1)'
    }); // h1에 fold 클래스 추가
  } else {
    $("nav").removeClass("fold");
    $("h1").removeClass("fold").stop(true, true).css({
      opacity: 1,
      transition: 'opacity 0.5s cubic-bezier(0.4,0,0.2,1)'
    }).show(); // h1에서 fold 클래스 제거
  }
}

$(function () {
  setHeaderState();

  // 메뉴 바로 이동
  $("a[href^='#']").click(function (event) {
    event.preventDefault();
    let target = $(this.hash);
    if (target.length) {
      $('html, body').animate({ scrollTop: target.offset().top }, 1500);
    }
  });

  // 메뉴접기
  $(window).scroll(function () {
    let pos = $(this).scrollTop();
    let winW = $(window).width();

    if (winW <= 1024) {
      $("nav").addClass("fold");
      $("h1").addClass("fold").stop(true, true).css({
        opacity: 1,
        transition: 'opacity 0.5s cubic-bezier(0.4,0,0.2,1)'
      }).show(); // h1에 fold 클래스 추가
    } else if (pos > 200) {
      $("nav").addClass("fold");
      $("h1").addClass("fold").stop(true, true).css({
        opacity: 0,
        transition: 'opacity 0.5s cubic-bezier(0.4,0,0.2,1)'
      }); // h1에 fold 클래스 추가
    } else {
      $("nav").removeClass("fold");
      $("h1").removeClass("fold").stop(true, true).css({
        opacity: 1,
        transition: 'opacity 0.5s cubic-bezier(0.4,0,0.2,1)'
      }).show(); // h1에서 fold 클래스 제거
    }
  });

  // 창 크기 변경 시에도 fold/h1 상태 유지
  $(window).resize(function () {
    let winW = $(window).width();
    let pos = $(window).scrollTop();

    if (winW <= 1024) {
      $("nav").addClass("fold");
      $("h1").addClass("fold").stop(true, true).css({
        opacity: 1,
        transition: 'opacity 0.5s cubic-bezier(0.4,0,0.2,1)'
      }).show(); // h1에 fold 클래스 추가
    } else {
      // 스크롤 위치에 따라 상태 결정
      if (pos > 200) {
        $("nav").addClass("fold");
        $("h1").addClass("fold").stop(true, true).css({
          opacity: 0,
          transition: 'opacity 0.5s cubic-bezier(0.4,0,0.2,1)'
        }); // h1에 fold 클래스 추가
      } else {
        $("nav").removeClass("fold");
        $("h1").removeClass("fold").stop(true, true).css({
          opacity: 1,
          transition: 'opacity 0.5s cubic-bezier(0.4,0,0.2,1)'
        }).show(); // h1에서 fold 클래스 제거
      }
    }
  });

  // ham
  $(".btn_ham").click(function () {
    // 현재 회전 상태 확인
    let $btn = $(this);
    let isRotated = $btn.data('rotated') || false;
    let rotateTo = isRotated ? '0deg' : '180deg';
    $btn.css({
      'transition': 'transform 1s',
      'transform': 'rotate(' + rotateTo + ')'
    });
    $btn.data('rotated', !isRotated);
    $("nav").toggleClass("fold");
    $("h1").toggleClass("fold");
  });

  //graphic 슬라이드
  var graphic_list = new Swiper(".graphic_list", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      depth: 200, /* 수치가 높을수록 중앙 슬라이드와 양옆 슬라이드 간의 원근감 거리가 멀게 느껴짐 */
      modifier: 1, /* 효과배수, 슬라이드 넘어갈때 움직임이 커짐 */
      rotate: 5, /* 가운데 슬라이드 양옆 슬라이드 X축 각도 */
      scale: 1,
      slideShadows: false, /* 그림자 true, false */
      stretch: 0, /* 수치가 높을수록 많이 겹침 */
    },
    loop: true,
    speed: 1000, // 슬라이드 동작 속도
    autoplay: {
      delay: 5000, // 슬라이드가 머무르는 시간, 5000=5초
      disableOnInteraction: false, // 스와이프 후 자동 재생이 비활성화 되지 않음
    },
    /*     pagination: {
          el: ".swiper-pagination",
        }, */
  });

  //team 슬라이드
  var team_list = new Swiper(".team_list", {
    slidesPerView: 1.25,
    spaceBetween: 30,
    breakpoints: {
      1210: {
        slidesPerView: 3,
        spaceBetween: 30
      },
      1024: {
        slidesPerView: 2.5,
        spaceBetween: 30
      },
    }
  });

  // 탑버튼 조정
  $(".go_top").hide();
  $(window).scroll(function () {
    let pos = $(this).scrollTop();
    if (pos > 200) {
      $(".go_top").fadeIn();
    } else {
      $(".go_top").fadeOut();
    }
  });

  // 비디오 재생
  const video = document.getElementById('myVideo');

  video.addEventListener('mouseenter', () => {
    video.play();
  });

  video.addEventListener('mouseleave', () => {
    video.pause();
  });
});
$(function () {
  //room
  const bedroom_list = new Swiper(".bedroom_list", {
    navigation: {
      nextEl: '.swiper-button-next', // 다음 버튼
      prevEl: '.swiper-button-prev', // 이전 버튼
    },
    pagination: {
      el: ".swiper-pagination",
      type: "bullets", // 버튼 종류 설정 'bullets' | 'fraction' | 'progressbar'
      clickable: true, // 버튼 클릭 여부
    },
    effect: "fade", // 페이드 효과
    fadeEffect: {
      crossFade: true,
    },
    loop: true, // 슬라이드 반복 여부
  });

  const living_room_list = new Swiper(".living_room_list", {
    navigation: {
      nextEl: '.swiper-button-next', // 다음 버튼
      prevEl: '.swiper-button-prev', // 이전 버튼
    },
    pagination: {
      el: ".swiper-pagination",
      type: "bullets", // 버튼 종류 설정 'bullets' | 'fraction' | 'progressbar'
      clickable: true, // 버튼 클릭 여부
    },
    effect: "fade", // 페이드 효과
    fadeEffect: {
      crossFade: true,
    },
    loop: true, // 슬라이드 반복 여부
  });

  const spa_list = new Swiper(".spa_list", {
    navigation: {
      nextEl: '.swiper-button-next', // 다음 버튼
      prevEl: '.swiper-button-prev', // 이전 버튼
    },
    pagination: {
      el: ".swiper-pagination",
      type: "bullets", // 버튼 종류 설정 'bullets' | 'fraction' | 'progressbar'
      clickable: true, // 버튼 클릭 여부
    },
    effect: "fade", // 페이드 효과
    fadeEffect: {
      crossFade: true,
    },
    loop: true, // 슬라이드 반복 여부
  });

  const bbq_list = new Swiper(".bbq_list", {
    navigation: {
      nextEl: '.swiper-button-next', // 다음 버튼
      prevEl: '.swiper-button-prev', // 이전 버튼
    },
    pagination: {
      el: ".swiper-pagination",
      type: "bullets", // 버튼 종류 설정 'bullets' | 'fraction' | 'progressbar'
      clickable: true, // 버튼 클릭 여부
    },
    effect: "fade", // 페이드 효과
    fadeEffect: {
      crossFade: true,
    },
    loop: true, // 슬라이드 반복 여부
  });

  const tab_list = new Swiper(".tab_list", {
    observer: true, // 탭메뉴 슬라이드
    observeParents: true, // 탭메뉴 슬라이드
    slidesPerView: 3.5, // 한 슬라이드에 보여줄 갯수
    spaceBetween: 50, // 슬라이드 사이 여백
  });

  $(".tab_img .tab_list").hide();
  $(".tab_img .tab_list").eq(0).show();

  $(".tab_btn button").click(function () {
    $(this).addClass("active").siblings().removeClass("active");
    let idx = $(this).index();
    $(".tab_img .tab_list").eq(idx).fadeIn().siblings().hide();
  });

  //cs
  $(".faq_list li .question_box").click(function (e) {
    e.preventDefault(); // 기본 링크 동작 방지

    // 현재 클릭한 질문의 부모 li
    const currentLi = $(this).parent();

    // 이미 열려있는 다른 답변 닫기
    $(".faq_list li").not(currentLi).removeClass("active").find(".answer_box").slideUp();

    // 다른 모든 질문의 제목 색상 초기화
    $(".faq_list li .question").removeClass("active-text");
    $(".faq_list li .question_box").removeClass("active-arrow");

    // 현재 질문의 답변 토글하기
    if (currentLi.hasClass("active")) {
      // 이미 열려있으면 닫기
      currentLi.removeClass("active").find(".answer_box").slideUp();
      $(this).find(".question").removeClass("active-text"); // 질문 제목 색상 초기화
      $(this).removeClass("active-arrow"); // 화살표 색상 초기화
    } else {
      // 닫혀있으면 열기
      currentLi.addClass("active").find(".answer_box").slideDown();
      $(this).find(".question").addClass("active-text"); // 질문 제목 색상 변경
      $(this).addClass("active-arrow"); // 화살표 색상 변경
    }
  });
});
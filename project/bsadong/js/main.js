$(function () {

  // banner
  const banner_list = new Swiper(".banner_list", {
    autoplay: {
      delay: 4000, // 슬라이드가 머무르는 시간, 5000=5초
      disableOnInteraction: false, // 스와이프 후 자동 재생이 비활성화 되지 않음
    },
    speed: 2000, // 슬라이드 동작 속도
    loop: true, // 슬라이드 반복 여부
    pagination: {
      el: ".swiper-pagination",
      type: "bullets", // 버튼 종류 설정 'bullets' | 'fraction' | 'progressbar'
      clickable: true, // 버튼 클릭 여부
    },
    effect: "fade", // 페이드 효과
    fadeEffect: {
      crossFade: true,
    },
  });

  // quick
  $(".quick_menu li a").mouseenter(function () {
    $(this).addClass("active");
    $(this).siblings().removeClass("active");
  });
  $(".quick_menu li a").mouseleave(function () {
    $(this).removeClass("active");
  });

  // department
  const department_card_list = new Swiper(".department_card_list", {
    pagination: {
      el: ".card_pag",
      type: "progressbar", // 버튼 종류 설정 'bullets' | 'fraction' | 'progressbar'
      clickable: true, // 버튼 클릭 여부
    },
    navigation: {
      nextEl: '.card_next', // 다음 버튼
      prevEl: '.card_prev', // 이전 버튼
    },
    slidesPerView: 1.35,
    spaceBetween: 10,
    breakpoints: {
      550: {
        slidesPerView: 1.75,
      },
      650: {
        slidesPerView: 2.25,
      },
      784: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
      980: {
        slidesPerView: 4,
        spaceBetween: 50,
      },
      1200: {
        slidesPerView: 5,
        spaceBetween: 50,
      },
      1350: {
        slidesPerView: 5.5,
        spaceBetween: 50,
      },
    },
    watchSlidesProgress: true,
    slideToClickedSlide: true,
    loop: true,
  });

  const department_txt_list = new Swiper(".department_txt_list", {
    thumbs: {
      swiper: department_card_list,
      slideThumbActiveClass: 'swiper-slide-active',
    },
    autoplay: {
      delay: 3000, // 슬라이드가 머무르는 시간, 5000=5초
      disableOnInteraction: false, // 스와이프 후 자동 재생이 비활성화 되지 않음
    },
    navigation: {
      nextEl: '.card_next', // 다음 버튼
      prevEl: '.card_prev', // 이전 버튼
    },
    speed: 1000, // 슬라이드 동작 속도
    loop: true,
  });

  department_txt_list.controller.control = department_card_list

  // about
  const txt = ["01.전문의료진", "02. 아이 중심의 의료 환경", "03. 든든한 파트너"]
  const about_list = new Swiper(".about_list", {
    pagination: {
      el: ".swiper-pagination",
      type: "bullets", // 버튼 종류 설정 'bullets' | 'fraction' | 'progressbar'
      clickable: true, // 버튼 클릭 여부
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + txt[index] + "</span>";
      },
    },
    effect: "fade", // 페이드 효과
    fadeEffect: {
      crossFade: true,
    },
    speed: 1000,
  });

  // staff
  const staff_list = new Swiper(".staff_list", {
    navigation: {
      nextEl: '.swiper-button-next', // 다음 버튼
      prevEl: '.swiper-button-prev', // 이전 버튼
    },
    slidesPerView: 1,
    breakpoints: {
      1400: {
        slidesPerView: 1.5,
      },
    },
    centeredSlides: true,  // 첫번째 슬라이드 가운데 배치
    loop: true,
  });

  // facility
  const facility_list = new Swiper(".facility_list", {
    pagination: {
      el: ".swiper-pagination",
      type: "progressbar", // 버튼 종류 설정 'bullets' | 'fraction' | 'progressbar'
      clickable: true, // 버튼 클릭 여부
    },
  });

  // event
  const event_list = new Swiper(".event_list", {
    pagination: {
      el: ".swiper-pagination",
      type: "fraction", // 버튼 종류 설정 'bullets' | 'fraction' | 'progressbar'
      clickable: true, // 버튼 클릭 여부
    },
    navigation: {
      nextEl: '.swiper-button-next', // 다음 버튼
      prevEl: '.swiper-button-prev', // 이전 버튼
    },
  });

  // footer
});
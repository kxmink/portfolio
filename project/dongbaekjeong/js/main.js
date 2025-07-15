$(function () {
  //banner
  const banner_list = new Swiper(".banner_list", {
    pagination: {
      el: ".swiper-pagination",
      type: "bullets", // 버튼 종류 설정 'bullets' | 'fraction' | 'progressbar'
      clickable: true, // 버튼 클릭 여부
    },
    navigation: {
      nextEl: '.swiper-button-next', // 다음 버튼
      prevEl: '.swiper-button-prev', // 이전 버튼
    },
    autoplay: {
      delay: 3000, // 슬라이드가 머무르는 시간, 5000=5초
      disableOnInteraction: false, // 스와이프 후 자동 재생이 비활성화 되지 않음
    },
    speed: 1000, // 슬라이드 동작 속도
    loop: true, // 슬라이드 반복 여부
    effect: "fade", // 페이드 효과
    fadeEffect: {
      crossFade: true,
    },
  });

  // room_txt
  const room_txt_list = new Swiper(".room_txt_list", {
    effect: "fade", // 페이드 효과
    fadeEffect: {
      crossFade: true,
    },
    autoplay: {
      delay: 3000, // 슬라이드가 머무르는 시간, 5000=5초
      disableOnInteraction: false, // 스와이프 후 자동 재생이 비활성화 되지 않음
    },
    speed: 1000, // 슬라이드 동작 속도
  });

  // room_img
  const room_img_list = new Swiper(".room_img_list", {
    pagination: {
      el: ".swiper-pagination",
      type: "bullets", // 버튼 종류 설정 'bullets' | 'fraction' | 'progressbar'
      clickable: true, // 버튼 클릭 여부
    },
  });

  room_txt_list.controller.control = room_img_list
  room_img_list.controller.control = room_txt_list

  //event
  const event_list = new Swiper(".event_list", {
    autoplay: {
      delay: 3000, // 슬라이드가 머무르는 시간, 5000=5초
      disableOnInteraction: false, // 스와이프 후 자동 재생이 비활성화 되지 않음
    },
    navigation: {
      nextEl: '.swiper-button-next', // 다음 버튼
      prevEl: '.swiper-button-prev', // 이전 버튼
    },
    centeredSlides: true,  // 첫번째 슬라이드 가운데 배치
    loop: true, // 슬라이드 반복 여부
    speed: 1000, // 슬라이드 동작 속도
    breakpoints: {
      360: {
        slidesPerView: 1.25, // 한 슬라이드에 보여줄 갯수
        spaceBetween: 30, // 슬라이드 사이 여백
      },
      460: {
        slidesPerView: 1.35, // 한 슬라이드에 보여줄 갯수
        spaceBetween: 30, // 슬라이드 사이 여백
      },
      576: {
        slidesPerView: 1.5, // 한 슬라이드에 보여줄 갯수
        spaceBetween: 50, // 슬라이드 사이 여백
      },
      806: {
        slidesPerView: 1.5, // 한 슬라이드에 보여줄 갯수
        spaceBetween: 100, // 슬라이드 사이 여백
      },
      1024: {
        slidesPerView: 2.75,
        spaceBetween: 50,
      },
      1340: {
        slidesPerView: 2.35,
        spaceBetween: 200,
      },
      1500: {
        slidesPerView: 2.35,
        spaceBetween: 200,
      },

    },
  });
});
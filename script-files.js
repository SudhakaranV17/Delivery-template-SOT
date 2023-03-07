/* aos animation */
AOS.init();

/* pure counter */
new PureCounter();

/* slider script */
var swiper = new Swiper(".slides-1",{
    speed:600,
    loop:true,
    autoplay:{
      delay:5000,
      disableOnInteraction:false,
    },
    slidesPerView:'auto',
    navigation:{
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
  },
    pagination:{
      el: ".swiper-pagination",
      type:'bullets',
      clickable:true
  },
});

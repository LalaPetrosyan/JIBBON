var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });


  var swiper = new Swiper(".nextSwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {  
   
      425: {       
         slidesPerView: 1,
         spaceBetween: 8,     
      },  
      1024:{
        slidesPerView: 3,
        spaceBetween: 2,
      },     
      1440:{
        slidesPerView: 3,
        spaceBetween: 2,
      },
  }
  });

  var swiper = new Swiper(".instSwiper", {
    slidesPerView: 6,
    spaceBetween: 2,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {  
   
      425: {       
         slidesPerView: 1,
         spaceBetween: 8,     
      },  
      1024:{
        slidesPerView: 6,
        spaceBetween: 2,
      },     
      1440:{
        slidesPerView: 6,
        spaceBetween: 2,
      },
  }
  });
  // const swiper = new Swiper('.swiper', {
  //   // Default parameters
  //   slidesPerView: 1,
  //   spaceBetween: 10,
  //   // Responsive breakpoints
  //   breakpoints: {
  //     // when window width is >= 320px
  //     320: {
  //       slidesPerView: 2,
  //       spaceBetween: 20
  //     },
  //     // when window width is >= 480px
  //     480: {
  //       slidesPerView: 3,
  //       spaceBetween: 30
  //     },
  //     // when window width is >= 640px
  //     640: {
  //       slidesPerView: 4,
  //       spaceBetween: 40
  //     }
  //   }
  // })



  var swiper = new Swiper(".collectionSwiper", {
    slidesPerView: 4,
    spaceBetween: 0,
    slidesPerGroup: 3,
    loop: false,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

  });


  var swiper = new Swiper(".blackSwiper", {
    spaceBetween: 10,
    slidesPerView: 8,
    freeMode: true,
    watchSlidesProgress: true,
  });
  var swiper2 = new Swiper(".mySwiper2", {
    loop: true,
    spaceBetween: 10,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    thumbs: {
      swiper: swiper,
    },
  });

  var swiper = new Swiper(".richSwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
 

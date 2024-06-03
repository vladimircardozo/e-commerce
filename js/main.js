var swiper = new Swiper(".mySwiper-1", {
    slidesPerView:1,
    spaceBerween: 30,
    loop: true,
    pagination: {
        el:".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl:".swiper-button-next",
        prevEl:".swiper-button-prev"
    }
});

var swiper = new Swiper(".mySwiper-2", {
    slidesPerView:3,
    spaceBerween: 30,
    loop: true,
    loopFillGroupWithBlank: true,
    navigation: {
        nextEl:".swiper-button-next",
        prevEl:".swiper-button-prev"
    },
    breakpoints : {
       0: {
           slidesPerView:1,
       },
       520: {
        slidesPerView:2,
       },
       950: {
        slidesPerView:3,
       }  
    }
});

let tabInpunts = document.querySelectorAll(".tabInput");

tabInpunts.forEach(function(input) {
    input.addEventListener(`change`, function(){
        let id = input.ariaValueMax;
        let thisSwiper = document.getElementById(`swiper` + id);
        thisSwiper.swiper.update();
    })
});
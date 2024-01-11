// Initialize Swiper
var swiper = new Swiper(".mySwiper", {
    effect: "cards",
    grabCursor: true,
    loop: true,
    slidesPerView: 1,
    autoplay: {
        delay: 1000, // Autoplay delay in milliseconds
        disableOnInteraction: false, // Allow manual navigation while autoplay is active
        },
});
// Init popular swipper
var swiper = new Swiper(".popularSwipper", {
    slidesPerView: 2,
    spaceBetween: 30,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    loop: true,
    autoplay: {
        delay: 3000, // Autoplay delay in milliseconds
        disableOnInteraction: false, // Allow manual navigation while autoplay is active
        },
});

// Initialize Swiper 
var swiper = new Swiper(".productSwipper", {
    slidesPerView: 4,
    spaceBetween: 30,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    loop: true,
    autoplay: {
        delay: 1000, // Autoplay delay in milliseconds
        disableOnInteraction: false, // Allow manual navigation while autoplay is active
        },
});

// jqery start
$(document).ready(function(){
    $("#humberger").click(function(){
            $(".menubar").toggle("slide");
    });
});
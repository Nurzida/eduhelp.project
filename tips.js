// Swiper.js Configuration
const swiper = new Swiper('.swiper-container', {
    loop: true, // Enables infinite looping of slides
    navigation: {
        nextEl: '.swiper-button-next', // Selector for next button
        prevEl: '.swiper-button-prev', // Selector for prev button
    },
    pagination: {
        el: '.swiper-pagination', // Selector for pagination bullets
        clickable: true, // Makes pagination bullets clickable
    },
    slidesPerView: 1, // Number of slides visible at a time
    spaceBetween: 20, // Space between slides
    autoplay: {
        delay: 5000, // Auto-slide every 5 seconds
        disableOnInteraction: false, // Continue autoplay after manual navigation
    },
});
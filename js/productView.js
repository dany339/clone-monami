var swiper = new Swiper(".thum_wrap", {
  spaceBetween: 10,
  slidesPerView: 4.1,
  freeMode: true,
  watchSlidesProgress: true,
});
var swiper2 = new Swiper(".big", {
  spaceBetween: 10,
  navigation: {
    nextEl: ".tnext",
    prevEl: ".tprev",
  },
  thumbs: {
    swiper: swiper,
  },
  on: {
    slideChange: function () {
      const currentSlide = this.activeIndex + 1;
      const totalSlides = this.slides.length;
      const currentNumber =
        currentSlide < 10 ? `0${currentSlide}` : currentSlide;
      const totalNumber = totalSlides < 10 ? `0${totalSlides}` : totalSlides;
      document.querySelector(".numbering span:first-child").textContent =
        currentNumber;
      document.querySelector(".numbering span:last-child").textContent =
        totalNumber;
    },
  },
});

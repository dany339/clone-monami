const $faqBox = $(".faq_box");
const $answer = $(".answer");
const duration = 300;

$faqBox.on("click", function () {
  $(this).siblings().removeClass("on");
  $(this).toggleClass("on");
  $(this).siblings().find($answer).stop().slideUp(duration);
  $(this).find($answer).stop().slideToggle(duration);
});

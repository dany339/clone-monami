/* 탭메뉴 */
const $productTabMenu = $(".p_tabs > ul > li");
const $productTabCon = $(".p_lists");

productTabAction(0);

$productTabMenu.on("click", function (e) {
  e.preventDefault();

  const productTabIdx = $(this).index();
  console.log(productTabIdx);

  productTabAction(productTabIdx);
});

// 공통의 동작을 함수로 정의
function productTabAction(index) {
  // 탭메뉴 활성화
  $productTabMenu.removeClass("on");
  $productTabMenu.eq(index).addClass("on");

  // 인덱스에 해당하는 $tabCon 보이기
  $productTabCon.hide();
  $productTabCon.eq(index).show();
}

$(window).on("load", function () {
  $(".p_lists").each(function () {
    var $this = $(this); // .p_lists
    var $wrapper = $this.find(".wrapper_ul");
    var li = $this.find(".wrapper_ul li");
    var lilen = li.length;
    var liw = lilen * (li.width() + 18);

    $wrapper.width(liw);

    bindDragScroll($this.closest(".product"), $this);
  });
});

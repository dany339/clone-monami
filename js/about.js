/* 탭메뉴 */
const $introTabMenu = $(".m1 > li");
const $introTabCon = $(".tab_con");

introTabAction(0);

$introTabMenu.on("click", function (e) {
  e.preventDefault();

  const introTabIdx = $(this).index();
  console.log(introTabIdx);

  introTabAction(introTabIdx);
});

// 공통의 동작을 함수로 정의
function introTabAction(index) {
  // 탭메뉴 활성화
  $introTabMenu.removeClass("on");
  $introTabMenu.eq(index).addClass("on");

  // 인덱스에 해당하는 $tabCon 보이기
  $introTabCon.hide();
  $introTabCon.eq(index).show();
}

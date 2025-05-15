/* 탭메뉴 */
const $productListTabMenu = $(".subcate > li");
const $productListTabCon = $(".product_con");

productListTabAction(0);

$productListTabMenu.on("click", function (e) {
  e.preventDefault();

  const productListTabIdx = $(this).index();
  productListTabAction(productListTabIdx);
});

function productListTabAction(index) {
  $productListTabMenu.removeClass("on");
  $productListTabMenu.eq(index).addClass("on");

  $productListTabCon.hide();
  $productListTabCon.eq(index).show();

  /*  탭 변경 시 해당 탭의 페이징 초기화 */
  renderPagination(1, index);
}

function renderPagination(currentPage, tabIndex) {
  const itemsPerPage = 10;
  const $currentTab = $productListTabCon.eq(tabIndex);
  const totalItems = $currentTab.find(".product_list ul li").length;
  const totalPage = Math.ceil(totalItems / itemsPerPage);
  const pageGroup = Math.ceil(currentPage / 5);

  const last = pageGroup * 5;
  const first = last - 4 <= 0 ? 1 : last - 4;
  const next = last + 1;
  const prev = first - 1;

  const fragmentPage = document.createDocumentFragment();

  /* 페이지 번호 */
  for (let i = first; i <= Math.min(last, totalPage); i++) {
    const li = document.createElement("li");
    li.insertAdjacentHTML(
      "beforeend",
      `<a href="#" class="paging_num ${
        i === currentPage ? "active" : ""
      }" data-num="${i}">${i}</a>`
    );
    fragmentPage.appendChild(li);
  }

  /* 기존 페이징 제거 후 새로운 페이징 추가 */
  const paginationContainer = $currentTab.find("#js-pagination")[0];
  paginationContainer.innerHTML = "";
  paginationContainer.appendChild(fragmentPage);

  /* 아이템 표시/숨김 처리 */
  const items = $currentTab.find(".product_list ul li");
  items.each((index, item) => {
    if (
      index >= (currentPage - 1) * itemsPerPage &&
      index < currentPage * itemsPerPage
    ) {
      $(item).show();
    } else {
      $(item).hide();
    }
  });

  /* prev/next 버튼 활성화/비활성화 처리 */
  const prevBtn = $currentTab.find(".page_prev")[0];
  const nextBtn = $currentTab.find(".page_next")[0];

  if (prevBtn && nextBtn) {
    prevBtn.style.opacity = currentPage === 1 ? "0.5" : "1";
    nextBtn.style.opacity = currentPage === totalPage ? "0.5" : "1";
  }

  /* 이벤트 리스너 추가 */
  $currentTab.find("#js-pagination a").on("click", function (e) {
    e.preventDefault();
    const selectedPage = parseInt($(this).data("num"));
    if (selectedPage >= 1 && selectedPage <= totalPage) {
      renderPagination(selectedPage, tabIndex);
    }
  });

  /* prev/next 버튼 이벤트 리스너 */
  if (prevBtn) {
    prevBtn.onclick = function (e) {
      e.preventDefault();
      if (currentPage > 1) {
        renderPagination(currentPage - 1, tabIndex);
      }
    };
  }

  if (nextBtn) {
    nextBtn.onclick = function (e) {
      e.preventDefault();
      if (currentPage < totalPage) {
        renderPagination(currentPage + 1, tabIndex);
      }
    };
  }
}

/* 초기 페이징 렌더링 */
document.addEventListener("DOMContentLoaded", function () {
  renderPagination(1, 0);
});

/* product_view */

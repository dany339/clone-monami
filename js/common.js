$(function () {
  /* 언어 선택 */
  $(".lang").click(function () {
    $(this).toggleClass("on");
  });

  /* 헤더 검색 */
  //   $(".nav_search a").click(function(){})
  $("body").click(function (e) {
    lw = $(".nav_search input").css("width");
    if (lw == "0px") {
      $(".nav_search input").val("");
    } else {
      $(".nav_search").removeClass("on");
    }
  });

  /* 올메뉴 */
  //   햄버거 버튼
  btnmenu = 0;
  $(".btn_all").click(function () {
    if (btnmenu == 0) {
      $(this).addClass("openmenu");
      $(".allmenu").slideDown();
      btnmenu = 1;
    } else {
      $(this).removeClass("openmenu");
      $(".allmenu").slideUp();
      btnmenu = 0;
    }
  });

  const gnbEl = document.querySelector(".gnb .nav >ul");
  const headerEl = document.querySelector("#header");

  gnbEl.addEventListener("mouseover", () => {
    headerEl.classList.add("on");
  });

  gnbEl.addEventListener("mouseout", () => {
    headerEl.classList.remove("on");
  });

  function gnb_overEvt() {
    $(".head .gnb .nav>ul > li").bind("mouseover focus", function () {
      $(this).addClass("on");
    });
  }

  gnb_overEvt2();
  function gnb_overEvt2() {
    $(".head .gnb .nav > ul > li").bind("mouseout blur", function () {
      $(this).removeClass("on");
    });
  }

  /* top 버튼 */
  $(".btn_top a").click(function () {
    $("body, html").animate({ scrollTop: 0 }, 200);
  });

  $("#bgblack").click(function () {
    $("#bgblack").hide();
    $(".foot_pop").hide();
    $(".privacy").hide();
    $(".email").hide();
  });

  /* 메인페이지 푸터 패밀리사이트 */
  famchk = 0;
  $(".fam_site").click(function () {
    if (famchk == 0) {
      $(this).children().next("ul").slideDown();
      famchk = 1;
      $(this).addClass("on");
    } else {
      $(this).children().next("ul").slideUp();
      famchk = 0;
      $(this).removeClass("on");
    }
  });

  /* 개인정보 처리방침 팝업 */
  $(".privacy_pop").click(function () {
    dh = $(document).height();
    $("#bgblack").height(dh).show();
    $(".foot_pop").show();
    $(".foot_pop .privacy").show();
  });
  $(".email_pop").click(function () {
    dh = $(document).height();
    $("#bgblack").height(dh).show();
    $(".foot_pop").show();
    $(".foot_pop .email").show();
  });
  $(".btn_close").click(function () {
    $("#bgblack").hide();
    $(".foot_pop").hide();
    $(".privacy").hide();
    $(".email").hide();
  });
  $("#bgblack").click(function () {
    $("#bgblack").hide();
    $(".foot_pop").hide();
    $(".privacy").hide();
    $(".email").hide();
  });
  $("#bgblack").click(function () {
    $(".foot_pop").hide();
    $(".privacy").hide();
    $(".email").hide();
  });

  move_btnEvt();
  function move_btnEvt() {
    $(".company .info2 .subsidiary >div .txt .move_btn a").bind(
      "mouseover focus",
      function () {
        $(this).addClass("on");
      }
    );
  }

  move_btnEvt2();
  function move_btnEvt2() {
    $(
      ".company .info2 .subsidiary > div .txt .move_btn a ".bind(
        "mouseout blur",
        function () {
          $(this).removeClass("on");
        }
      )
    );
  }
});

var bluk = "10";

console.log("bluk: " + bluk);

if (bluk == "10") {
  $("#sel").val("대량구매문의");
  $("#textareaLabel").hide();
  $("#form6").val(
    "- 상품명 : \n- 구매 수량(납기) : \n- 희망 수령일(납기) : \n- 각인 신청 여부(프리미엄 펜 구매 시) :"
  );
}

if ($("select#sel").children("option:selected").val() == "") {
  $("select#sel").siblings("label").text("문의내용");
} else {
  $("select#sel")
    .siblings("label")
    .text($("select#sel").children("option:selected").text());
}

if ($("#form2").val() != "") {
  $("label").hide();
  $("label#country").show();
  $("label#attach_file").show();
  $("label#country").text($("select#sel").children("option:selected").text());
}

var select = $("select#sel");

select.change(function () {
  var select_name = $(this).children("option:selected").text();
  $(this).siblings("label").text(select_name);
  if (select_name == "대량구매문의") {
    $("#textareaLabel").hide();
    $("#form6").val(
      "- 상품명 : \n- 구매 수량(납기) : \n- 희망 수령일(납기) : \n- 각인 신청 여부(프리미엄 펜 구매 시) :"
    );
  } else {
    $("#form6").val("");
    $("#textareaLabel").show();
  }
});

var fileTarget = $(".filebox .upload-hidden");

fileTarget.on("change", function () {
  if (window.FileReader) {
    var filename = $(this)[0].files[0].name;
  } else {
    var filename = $(this).val().split("/").pop().split("\\").pop();
  }

  $(this).siblings(".ex_filename").html(filename);
});

$(".ie9_tit input, .ie9_tit textarea").focus(function () {
  if (!$(this).val()) {
    $(this).siblings("label").hide();
  }
});
$(".ie9_tit input, .ie9_tit textarea").focusout(function () {
  if (!$(this).val()) {
    $(this).siblings("label").show();
  } else {
  }
});

function request_chk() {
  if ($(".form1").val() == "") {
    alert("문의내용을 선택해 주세요.");
    $(".form1").focus();
    return;
  }

  if ($("#form2").val().trim() == "") {
    alert("이름을 입력해 주세요.");
    $("#form2").focus();
    return;
  }

  if ($("#form3").val().trim() == "") {
    alert("이메일을 입력해 주세요.");
    $("#form3").focus();
    return;
  }

  var email = $("#form3").val().trim();
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(email)) {
    alert("올바른 이메일 형식을 입력해 주세요.");
    $("#form3").focus();
    return;
  }

  if ($("#form5").val().trim() == "") {
    alert("제목을 입력해 주세요.");
    $("#form5").focus();
    return;
  }

  if ($("#form6").val().trim() == "") {
    alert("내용을 입력해 주세요.");
    $("#form6").focus();
    return;
  }

  if ($("#agree").is(":checked") == false) {
    alert("개인정보취급방침에 동의해 주세요.");
    $("#agree").focus();
    return;
  }
  document.request_frm.submit();
}

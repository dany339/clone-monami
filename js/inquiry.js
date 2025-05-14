function request_chk() {
  if ($answer(".form1").val() == "") {
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
}

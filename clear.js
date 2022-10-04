/* クリアページ用 */
window.onload = function () {
  setTimeout("clearChange()", 200);
};

$(function () {
  var item_num = $("div.item").length;
  var deg = 360.0 / item_num;
  var red = (deg * Math.PI) / 180.0;
  /* 半径 */
  var circle_r = $("div.item").width() * 4.5;
  $("div.item").each(function (i, elem) {
    var x = Math.cos(red * i - Math.PI) * circle_r + circle_r;
    var y = Math.sin(red * i - Math.PI) * circle_r + circle_r;
    $(elem).css("left", x);
    $(elem).css("top", y);
  });
});

function clearChange() {
  //以下画面切り替え
  setTimeout("clearChange1()", 100);
  setTimeout("clearChange2()", 200);
  setTimeout("clearChange3()", 300);
  setTimeout("clearChange4()", 400);
  setTimeout("clearChange5()", 500);
  setTimeout(() => {
    $(".itemN").addClass("redItem");
    $(".itemD").removeClass("redItem");
    $(".itemD").addClass("grayItem");
    $(".itemN").removeClass("grayItem");
  }, 1000);
  setTimeout("loadChange()", 1000);
  setTimeout(() => {
    $(".itemD").addClass("redItem");
    $(".itemN").removeClass("redItem");
    $(".itemN").addClass("grayItem");
    $(".itemD").removeClass("grayItem");
  }, 2400);
  setTimeout("loadChange()", 2400);
}
function loadChange() {
  setTimeout("loadChange1()", 200);
  setTimeout("loadChange2()", 400);
  setTimeout("loadChange3()", 600);
  setTimeout("loadChange4()", 800);
  setTimeout("loadChange5()", 1000);
  setTimeout("loadChange6()", 1200);
  setTimeout("loadChange7()", 1400);
  setTimeout(() => {
    $(".clearMessage div").addClass("blackItem");
    $(".itemD").removeClass("redItem");
    $(".itemD").addClass("grayItem");
    $(".item").removeClass("escape");
  }, 3000);
}

function clearChange1() {
  $(".C").addClass("blackItem");
  setTimeout(() => {
    $(".C").removeClass("blackItem");
  }, 900);
}
function clearChange2() {
  $(".L").addClass("blackItem");
  setTimeout(() => {
    $(".L").removeClass("blackItem");
  }, 700);
}
function clearChange3() {
  $(".E").addClass("redItem");
  setTimeout(() => {
    $(".E").removeClass("redItem");
  }, 500);
}
function clearChange4() {
  $(".A").addClass("blackItem");
  setTimeout(() => {
    $(".A").removeClass("blackItem");
  }, 300);
}
function clearChange5() {
  $(".R").addClass("blackItem");
  setTimeout(() => {
    $(".R").removeClass("blackItem");
  }, 100);
}
function loadChange1() {
  $("div.itemO").removeClass("escape");
}
function loadChange2() {
  $("div.itemO").addClass("escape");
  $("div.itemA").removeClass("escape");
}
function loadChange3() {
  $("div.itemA").addClass("escape");
  $("div.itemD").removeClass("escape");
}
function loadChange4() {
  $("div.itemD").addClass("escape");
  $("div.itemI").removeClass("escape");
}
function loadChange5() {
  $("div.itemI").addClass("escape");
  $("div.itemN").removeClass("escape");
}
function loadChange6() {
  $("div.itemN").addClass("escape");
  $("div.itemG").removeClass("escape");
}
function loadChange7() {
  $("div.itemG").addClass("escape");
}

/* 一旦コメントアウト */
/* 送信ボタンhover */
/* formSend.addEventListener("mouseover", function () {
  $(".form_send").css("color", "white");
  $(".form_send").css("background", "#333");
});

formSend.addEventListener("mouseleave", function () {
  $(".form_send").css("color", "black");
  $(".form_send").css("background", "lightgray");
});
 */

//解答時挙動
function allclear() {
  if (f.form_nazo1.value == "end" || f.form_nazo1.value == "END") {
    //正解なら
    correct();
  } else {
    //不正解なら
    incorrect();
  }
}

//正答時関数
function correct() {
  $(".formIn").val("ALLCLEAR!"); //正解が出る
  $(".formIn").css("background", "tomato");
  $(".formIn").css("color", "white");
  $(".tweet").removeClass("loaded");
}
function incorrect() {
  $(".formIn").val("INCORRECT!"); //不正解が出る
  $(".formIn").css("background", "#6699ff");
  $(".formIn").css("color", "white");
  setTimeout(formBack, 800);
}
function formBack() {
  $(".formIn").val(""); //正解表示削除
  $(".formIn").css("color", "black"); //解答欄文字色黒に戻す
  $(".formIn").css("background", "white"); //背景色白に戻す
}
$(".formIn").keydown(function (event) {
  if (event.keyCode == 13) {
    $("#formSend").click();
    return false;
  }
});

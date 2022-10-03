//プログレスバー-----------------
window.onload = function () {
  proc1();
  changeStart();
};

//謎1プログレスバー----------
function proc1() {
  let progNum = document.getElementById("progNum"); //変数定義
  let prog = document.getElementById("prog");
  let contents = document.getElementById("contents");
  const spinner = document.getElementById("prog_bar");
  spinner.classList.remove("loaded");
  if (prog.value == 39 || prog.value == 59 || prog.value == 89) {
    prog.value++; //数値に1加算
    progNum.innerHTML = prog.value; //HTMLに数値を表示
    setTimeout(proc1, 200); //200ミリ秒後にproc1関数を呼び出し
  } else if (prog.value == 100) {
    document.getElementById("prog").value = 0;
    progNum.innerHTML = prog.value;
    spinner.classList.add("loaded");
    contents.classList.remove("loaded");
    formBack(); //formを戻す
    formRe();
    formSend.addEventListener("click", answer1); //クリック時にanswer1発動
    hintDel();
    hint1.addEventListener("click", hint11);
    hint2.addEventListener("click", hint12);
    hint3.addEventListener("click", hint13);
  } else {
    prog.value++;
    progNum.innerHTML = prog.value;
    setTimeout(proc1, 20);
  }
}
//変数定義
let progNum = document.getElementById("progNum");
let prog = document.getElementById("prog");
let contents = document.getElementById("contents");
const spinner = document.getElementById("prog_bar");
//謎2プログレスバー----------
function proc2() {
  spinner.classList.remove("loaded");
  if (prog.value == 19 || prog.value == 39 || prog.value == 69) {
    prog.value++; //数値に1加算
    progNum.innerHTML = prog.value; //HTMLに数値を表示
    setTimeout(proc2, 200); //200ミリ秒後にproc2関数を呼び出し
  } else if (prog.value == 100) {
    document.getElementById("prog").value = 0;
    progNum.innerHTML = prog.value;
    spinner.classList.add("loaded"); //プログレスバー削除
    toEscape(); //謎1をescapeにする
    countdowns.classList.remove("escape"); //謎2表示
    formBack(); //formを戻す
    formRe();
    formSend.addEventListener("click", answer2); //クリック時にanswer2発動
    select2.addEventListener("click", skip2); //以下3行skip処理用
    select2.classList.add("clickon");
    select2.classList.remove("out");
    hintDel();
    hint1.addEventListener("click", hint21);
    hint2.addEventListener("click", hint22);
    hint3.addEventListener("click", hint23);
  } else {
    prog.value++;
    progNum.innerHTML = prog.value;
    setTimeout(proc2, 20);
  }
}
//謎3プログレスバー----------
function proc3() {
  spinner.classList.remove("loaded");
  if (prog.value == 9 || prog.value == 19) {
    prog.value++; //数値に1加算
    progNum.innerHTML = prog.value; //HTMLに数値を表示
    setTimeout(proc3, 200); //200ミリ秒後にproc3関数を呼び出し
  } else if (prog.value == 100) {
    document.getElementById("prog").value = 0;
    progNum.innerHTML = prog.value;
    spinner.classList.add("loaded"); //プログレスバー削除
    toEscape(); //謎1をescapeにする
    nazo3.classList.remove("escape"); //謎3表示
    formBack(); //formを戻す
    formRe();
    formSend.addEventListener("click", answer3); //クリック時にanswer3発動
    select3.addEventListener("click", skip3); //以下3行skip処理用
    select3.classList.add("clickon");
    select3.classList.remove("out");
    hintDel();
    hint1.addEventListener("click", hint31);
    hint2.addEventListener("click", hint32);
    hint3.addEventListener("click", hint33);
  } else {
    prog.value++;
    progNum.innerHTML = prog.value;
    setTimeout(proc3, 20);
  }
}
//謎4プログレスバー----------
function proc4() {
  spinner.classList.remove("loaded");
  if (
    prog.value == 39 ||
    prog.value == 79 ||
    prog.value == 89 ||
    prog.value == 99
  ) {
    prog.value++; //数値に1加算
    progNum.innerHTML = prog.value; //HTMLに数値を表示
    setTimeout(proc4, 200); //200ミリ秒後にproc4関数を呼び出し
  } else if (prog.value == 100) {
    document.getElementById("prog").value = 0;
    progNum.innerHTML = prog.value;
    spinner.classList.add("loaded"); //プログレスバー削除
    toEscape(); //謎1をescapeにする
    contents2.classList.remove("escape"); //謎4表示
    formBack(); //formを戻す
    formRe();
    formSend.addEventListener("click", answer4); //クリック時にanswer3発動
    select4.addEventListener("click", skip4); //以下3行skip処理用
    select4.classList.add("clickon");
    select4.classList.remove("out");
    hintDel();
    hint1.addEventListener("click", hint41);
    hint2.addEventListener("click", hint42);
    hint3.addEventListener("click", hint43);
  } else {
    prog.value++;
    progNum.innerHTML = prog.value;
    setTimeout(proc4, 20);
  }
}
//謎5プログレスバー----------
function proc5() {
  spinner.classList.remove("loaded");
  if (prog.value == 29 || prog.value == 79 || prog.value == 89) {
    prog.value++; //数値に1加算
    progNum.innerHTML = prog.value; //HTMLに数値を表示
    setTimeout(proc5, 200); //200ミリ秒後にproc5関数を呼び出し
  } else if (prog.value == 100) {
    document.getElementById("prog").value = 0;
    progNum.innerHTML = prog.value;
    spinner.classList.add("loaded"); //プログレスバー削除
    toEscape(); //謎1をescapeにする
    nazoL.classList.remove("escape"); //謎5表示
    formBack(); //formを戻す
    formRe();
    formSend.addEventListener("click", answer5); //クリック時にanswer3発動
    select5.addEventListener("click", skip5); //以下3行skip処理用
    select5.classList.add("clickon");
    select5.classList.remove("out");
    hintDel();
    hint1.addEventListener("click", hint51);
    hint2.addEventListener("click", hint52);
    hint3.addEventListener("click", hint53);
  } else {
    prog.value++;
    progNum.innerHTML = prog.value;
    setTimeout(proc5, 20);
  }
}
//ここまでプログレスバー-------------

function skip1() {
  del();
  proc1();
}
function skip2() {
  del();
  proc2();
}
function skip3() {
  del();
  proc3();
}
function skip4() {
  del();
  proc4();
}
function skip5() {
  del();
  proc5();
}

//読み込み中の背景削除関数
function del() {
  contents.classList.remove("escape");
  contents.classList.add("loaded");
  countdowns.classList.add("escape");
  nazo3.classList.add("escape");
  contents2.classList.add("escape");
  nazoL.classList.add("escape");
}

//謎1をloadedからescapeへ
function toEscape() {
  contents.classList.remove("loaded");
  contents.classList.add("escape");
}

//正答時関数
function correct() {
  $(".formIn").val("CORRECT!"); //正解が出る
  $(".formIn").css("background", "tomato");
  $(".formIn").css("color", "white");
  del();
}

//不正解時関数
function formBack() {
  $(".formIn").val(""); //正解表示削除
  $(".formIn").css("color", "black"); //解答欄文字色黒に戻す
  $(".formIn").css("background", "white"); //背景色白に戻す
}

//formリセット
function formRe() {
  formSend.onclick = "";
  formSend.removeEventListener("click", answer1);
  formSend.removeEventListener("click", answer2);
  formSend.removeEventListener("click", answer3);
  formSend.removeEventListener("click", answer4);
  formSend.removeEventListener("click", answer5);
}

function incorrect() {
  $(".formIn").val("INCORRECT!"); //不正解が出る
  $(".formIn").css("background", "#6699ff");
  $(".formIn").css("color", "white");
  setTimeout(formBack, 800);
}

//謎1解答時挙動
function answer1() {
  if (f.form_nazo1.value == "lan" || f.form_nazo1.value == "LAN") {
    //正解なら
    correct();
    proc2();
  } else {
    //不正解なら
    incorrect();
  }
}
//謎2解答時挙動
function answer2() {
  if (f.form_nazo1.value == "old" || f.form_nazo1.value == "OLD") {
    //正解なら
    correct();
    proc3();
  } else {
    //不正解なら
    incorrect();
  }
}
//謎3解答時挙動
function answer3() {
  if (f.form_nazo1.value == "no" || f.form_nazo1.value == "NO") {
    //正解なら
    correct();
    proc4();
  } else {
    //不正解なら
    incorrect();
  }
}
//謎4解答時挙動
function answer4() {
  if (f.form_nazo1.value == "ling" || f.form_nazo1.value == "LING") {
    //正解なら
    correct();
    proc5();
  } else {
    //不正解なら
    incorrect();
  }
}
//謎5解答時挙動
function answer5() {
  if (f.form_nazo1.value == "win" || f.form_nazo1.value == "WIN") {
    //正解なら
    correct();
    setTimeout(() => {
      window.location.href = "clear.html";
    }, 1000);
  } else {
    //不正解なら
    incorrect();
  }
}

//謎1用,謎4用--------------------
let ci1 = "L";
let ci2 = "E";
let ci3 = "D";
$(".conItem1").hover(
  function () {
    $(this).text(ci1);
  },
  function () {
    $(this).text("");
  }
);
$(".conItem2").hover(
  function () {
    $(this).text(ci2);
  },
  function () {
    $(this).text("");
  }
);
$(".conItem3").hover(
  function () {
    $(this).text(ci3);
  },
  function () {
    $(this).text("");
  }
);

function changeStart() {
  //以下5秒ごとに画面切り替え
  setTimeout("conChange1()", 5000);
  setTimeout("conChange2()", 10000);
  setTimeout("conChange3()", 15000);
  setTimeout("conChange4()", 20000);
  setTimeout("conChange5()", 25000);
  setTimeout("conChange6()", 30000);
}

function conChange1() {
  ci1 = "M";
  ci2 = "I";
  ci3 = "N";
  $(".contentsItem").addClass("item2");
  $(".contentsItem").removeClass("contentsRed");
  $(".contentsRight").addClass("contentsRed"); //右を赤にする
  $(".contentsLeft2").text("3").removeClass("contentsRed2");
  $(".contentsCenter2").text("4");
  $(".contentsRight2").text("1");
}
function conChange2() {
  ci1 = "F";
  ci2 = "U";
  ci3 = "N";
  $(".contentsItem").addClass("item3");
  $(".contentsItem").removeClass("contentsRed");
  $(".contentsLeft2").text("4");
  $(".contentsCenter2").text("5");
  $(".contentsRight2").text("3").addClass("contentsRed2");
}
function conChange3() {
  ci1 = "S";
  ci2 = "K";
  ci3 = "I";
  $(".contentsItem").addClass("item4");
  $(".contentsLeft2").text("6");
  $(".contentsCenter2").text("6");
  $(".contentsRight2").text("2");
}
function conChange4() {
  ci1 = "C";
  ci2 = "A";
  ci3 = "T";
  $(".contentsItem").addClass("item5");
  $(".contentsCenter").addClass("contentsRed"); //真ん中を赤にする
  $(".contentsLeft2").text("2");
  $(".contentsCenter2").text("1");
  $(".contentsRight2").text("5").removeClass("contentsRed2");
}
function conChange5() {
  ci1 = "D";
  ci2 = "O";
  ci3 = "G";
  $(".contentsItem").addClass("item6");
  $(".contentsItem").removeClass("contentsRed");
  $(".contentsLeft2").text("5");
  $(".contentsCenter2").text("2");
  $(".contentsRight2").text("4").addClass("contentsRed2");
}
function conChange6() {
  ci1 = "L";
  ci2 = "E";
  ci3 = "D";
  $(".contentsItem").addClass("item1");
  $(".contentsLeft").addClass("contentsRed"); //左を赤にする
  $(".contentsLeft2").text("1").addClass("contentsRed2");
  $(".contentsCenter2").text("3");
  $(".contentsRight2").text("6").removeClass("contentsRed2");
  changeStart();
}

//謎2用-------------------
function countdown() {
  for (let i = 0; i < 26; i++) {
    setTimeout(() => {
      countNum.textContent = 26 - i;
    }, i * 150);
    if (i == 25) {
      setTimeout(() => {
        countNum.textContent = 26;
      }, i * 170);
    }
  }
}

$("countNum").click(function () {
  countdown();
});

function colorchange() {
  if (
    countNum.textContent == 15 ||
    countNum.textContent == 12 ||
    countNum.textContent == 4
  ) {
    countNum.style.color = "tomato";
    setTimeout(colorchange, 150);
  } else if (countNum.textContent == 0) {
    countNum.style.color = "black";
  } else {
    countNum.style.color = "black";
    setTimeout(colorchange, 150);
  }
}

countNum.onclick = () => {
  countdown();
  colorchange();
};

/* 謎3用 */
nazo3Item.addEventListener("mouseover", function () {
  $(".form_send").css("color", "white");
  $(".form_send").css("background", "tomato");
  $(".form_send").attr("value", "NG");
});

nazo3Item.addEventListener("mouseleave", function () {
  $(".form_send").css("color", "black");
  $(".form_send").css("background", "lightgray");
  $(".form_send").attr("value", "OK");
});

/* 送信ボタンhover */
formSend.addEventListener("mouseover", function () {
  $(".form_send").css("color", "white");
  $(".form_send").css("background", "#333");
});

formSend.addEventListener("mouseleave", function () {
  $(".form_send").css("color", "black");
  $(".form_send").css("background", "lightgray");
});

/* モーダル */
$(function () {
  /* ヒント押した時 */
  $("#modalopen").click(function () {
    $("#modalArea").fadeIn();
    $("#hinttitle").text("ヒントを見ますか？");
    $("#hinttext").html(
      "下のボタンをクリックしてヒントを見ることができます。" +
        "<br />" +
        "右上の「×」をクリックすると、問題に戻ることができます。"
    );
    $("#hint1,#hint3").removeClass("loaded");
    $("#hint2").text("ヒント2");
  });
  /* 解説押した時 */
  $("#modalopen2").click(function () {
    $("#modalArea").fadeIn();
    $("#hinttitle").text("解説を見ますか？");
    $("#hinttext").html(
      "下のボタンをクリックして解説を見ることができます。" +
        "<br />" +
        "右上の「×」をクリックすると、問題に戻ることができます。"
    );
    $("#hint1,#hint3").addClass("loaded");
    $("#hint2").text("解説");
  });
  /* お問い合わせ押した時 */
  $("#modalopen3").click(function () {
    $("#modalArea").fadeIn();
    $("#hinttitle").text("お問い合わせ");
    $("#hinttext").html(
      "下のボタンからTwitterのDMまでお問い合わせください。" +
        "<br />" +
        "右上の「×」をクリックすると、問題に戻ることができます。"
    );
    $("#hint1,#hint3").addClass("loaded");
    $("#hint2").text("お問い合わせ");
    $("#hint2")
      .attr("href", "https://twitter.com/takuko0326")
      .attr("target", "_blank");
  });
  /* クローズした時 */
  $("#closeModal , #modalBg").click(function () {
    $("#modalArea").fadeOut();
    $("#hint2").attr("href", "#").attr("target", "");
  });
});

/* ヒントclass削除関数 */
function hintDel() {
  hint1.onclick = "";
  hint2.onclick = "";
  hint3.onclick = "";
  hint1.removeEventListener("click", hint11);
  hint1.removeEventListener("click", hint21);
  hint1.removeEventListener("click", hint31);
  hint1.removeEventListener("click", hint41);
  hint1.removeEventListener("click", hint51);
  hint2.removeEventListener("click", hint12);
  hint2.removeEventListener("click", hint22);
  hint2.removeEventListener("click", hint32);
  hint2.removeEventListener("click", hint42);
  hint2.removeEventListener("click", hint52);
  hint3.removeEventListener("click", hint13);
  hint3.removeEventListener("click", hint23);
  hint3.removeEventListener("click", hint33);
  hint3.removeEventListener("click", hint43);
  hint3.removeEventListener("click", hint53);
}

/* ヒント内容 */
/* ヒント1 */
function hint11() {
  $("#hinttitle").text("ヒント1");
  $("#hinttext").html(
    "3つの正方形の上にマウスをのせると" +
      "<br />" +
      "それぞれ文字が浮かび上がるようです。"
  );
}
function hint12() {
  if ($("#hint2").text() == "ヒント2") {
    $("#hinttitle").text("ヒント2");
    $("#hinttext").html(
      "少し手を止めて待ってみましょう。" +
        "<br />" +
        "ときどき正方形の色が変化しているようです。"
    );
  } else if ($("#hint2").text() == "解説") {
    $("#hinttitle").text("解説");
    $("#hinttext").html(
      "赤色の正方形にマウスをのせた時にあらわれる言葉を" +
        "<br />" +
        "左から順番に読むと、答えは「LAN」になります。"
    );
  }
}
function hint13() {
  $("#hinttitle").text("ヒント3");
  $("#hinttext").html(
    "正方形が赤色の時の文字を" + "<br />" + "左から順番に読んでみましょう。"
  );
}
/* ヒント2 */
function hint21() {
  $("#hinttitle").text("ヒント1");
  $("#hinttext").html(
    "表示されているのは数字の26のみ" +
      "<br />" +
      "クリックしてみると何か変化があるようです。"
  );
}
function hint22() {
  if ($("#hint2").text() == "ヒント2") {
    $("#hinttitle").text("ヒント2");
    $("#hinttext").html(
      "26をクリックするとカウントダウンがはじまります。" +
        "<br />" +
        "いくつかの数字が赤色になっているようです。"
    );
  } else if ($("#hint2").text() == "解説") {
    $("#hinttitle").text("解説");
    $("#hinttext").html(
      "赤色の数字「15」「12」「4」をアルファベットに当てはめて" +
        "<br />" +
        "表示された順番に読むと、答えは「OLD」になります。"
    );
  }
}
function hint23() {
  $("#hinttitle").text("ヒント3");
  $("#hinttext").html(
    "26といえば「アルファベット」ですね。" +
      "<br />" +
      "数字をアルファベットに変換して、赤文字を読んでみましょう。"
  );
}
/* ヒント3 */
function hint31() {
  $("#hinttitle").text("ヒント1");
  $("#hinttext").html(
    "「OFF」と書かれたボタンのようなものに" +
      "<br />" +
      "マウスをのせてみると何か変化があるようです。"
  );
}
function hint32() {
  if ($("#hint2").text() == "ヒント2") {
    $("#hinttitle").text("ヒント2");
    $("#hinttext").html(
      "「OFF」が変化すると同時に「OK」も変化しています。" +
        "<br />" +
        "何か法則はないでしょうか。"
    );
  } else if ($("#hint2").text() == "解説") {
    $("#hinttitle").text("解説");
    $("#hinttext").html(
      "「OFF」の反対の言葉は「ON」です。" +
        "<br />" +
        "「??」が逆さまになっているので、答えは「NO」になります。"
    );
  }
}
function hint33() {
  $("#hinttitle").text("ヒント3");
  $("#hinttext").html(
    "マウスをのせると反対の言葉になるようです。" +
      "<br />" +
      "「??」が逆さまになっていることにも気をつけてください。"
  );
}
/* ヒント4 */
function hint41() {
  $("#hinttitle").text("ヒント1");
  $("#hinttext").html(
    "正方形が3つ並んでいます。" +
      "<br />" +
      "どこかで目にしたことはないでしょうか。"
  );
}
function hint42() {
  if ($("#hint2").text() == "ヒント2") {
    $("#hinttitle").text("ヒント2");
    $("#hinttext").html(
      "Q1と照らし合わせて数字に対応する文字を考えましょう。" +
        "<br />" +
        "数字はそれぞれ1~6があるようです。「正方形」「1~6」といえば…"
    );
  } else if ($("#hint2").text() == "解説") {
    $("#hinttitle").text("解説");
    $("#hinttext").html(
      "Q1の「赤正方形」とQ4の「1」を対応させます。" +
        "<br />" +
        "Q4の赤字を1から4まで順番に読むと、答えは「LING」になります。"
    );
  }
}
function hint43() {
  $("#hinttitle").text("ヒント3");
  $("#hinttext").html(
    "サイコロを連想できそうです。" +
      "<br />" +
      "「数字」と「色」を使ってQ1と対応させられないでしょうか。"
  );
}
/* ヒント5 */
function hint51() {
  $("#hinttitle").text("ヒント1");
  $("#hinttext").html(
    "いくら待っても問題は読み込まれません。" +
      "<br />" +
      "エラーではありません、仕様です。"
  );
}
function hint52() {
  if ($("#hint2").text() == "ヒント2") {
    $("#hinttitle").text("ヒント2");
    $("#hinttext").html(
      "問題を見なくても解答を導ける方法はないでしょうか。" +
        "<br />" +
        "今まで解いた問題を見直してみるのも良いかもしれません。"
    );
  } else if ($("#hint2").text() == "解説") {
    $("#hinttitle").text("解説");
    $("#hinttext").html(
      "この問題に解説はありません。" +
        "<br />" +
        "諦めずに頑張ってみてください。"
    );
  }
}
function hint53() {
  $("#hinttitle").text("ヒント3");
  $("#hinttext").html(
    "全ての問題は表示される前に" + "<br />" + "何かが行われていますね。"
  );
}

$(".formIn").keydown(function (event) {
  if (event.keyCode == 13) {
    $("#formSend").click();
    return false;
  }
});

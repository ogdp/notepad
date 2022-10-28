function font__family__select(font) {
  var font__223 = document.getElementById("slect__font").value;
  let words__contents = document.getElementById("content-words");
  words__contents.style.fontFamily = font__223;
}
function size__font__select(size) {
  var size__2233 = document.getElementById("change__size__font").value;
  let words__contents = document.getElementById("content-words");
  words__contents.style.fontSize = size__2233 + "px";
}
function remove__content_words() {
  let words__contents = document.getElementById("content-words");
  words__contents.value = "";
}
function bold__words() {
  let words__contents = document.getElementById("content-words");
  words__contents.style.fontWeight = "bold";
}
function reset__words() {
  let words__contents = document.getElementById("content-words");
  words__contents.style.fontWeight = "400";
  words__contents.style.fontFamily = "Poppins, sans-serif";
  words__contents.style.fontSize = "18px";
}
function auto__save__value(noidung) {
  let words__contents = document.getElementById("content-words").value;
  localStorage.setItem("noidung", words__contents);
  let today = new Date();
  let date =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
  let time =
    today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  let thoigian = date + " | " + time;
  localStorage.setItem("Time", thoigian);
}
if (localStorage.getItem("noidung") == null) {
  let today = new Date();
  let date =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
  let time =
    today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  let thoigian = date + " | " + time;
  document.querySelector(".time__update").innerHTML = thoigian;
  localStorage.setItem("Time", thoigian);
} else {
  document.querySelector(".time__update").innerHTML =
    localStorage.getItem("Time");
  var value__local = localStorage.getItem("noidung");
  document.getElementById("content-words").innerHTML = value__local;
}
get__ip();
function get__ip() {
  let client__ip = document.getElementById("ip_client");
  fetch("https://api.ipify.org/?format=json")
    .then((results) => results.json())
    .then((data) => (client__ip.innerHTML = data.ip));
}

var click_more = document.querySelector("#notp__more--act");
click_more.onclick = function () {
  let cl__kij88s = document.querySelectorAll(".hu__k8w");
  let cc__ook = document.getElementsByClassName("hu__k8w active");
  // console.log(cl__kij88s);
  if (cc__ook.length == 0) {
    for (let i = 0; i < cl__kij88s.length; i++) {
      cl__kij88s.item(i).classList.add("active");
    }
    let ccc = document.getElementById("slect__font");
    ccc.style.display = "block";
  } else if (cc__ook.length != 0) {
    let ccc = document.getElementById("slect__font");
    ccc.style.display = "none";
    for (let i = 0; i < cl__kij88s.length; i++) {
      cl__kij88s.item(i).classList.remove("active");
    }
  }
};

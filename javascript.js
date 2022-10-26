
function font__family__select(font){
    var font__223 = document.getElementById("slect__font").value;
    let words__contents = document.getElementById("content-words");
    words__contents.style.fontFamily = font__223;
}
function size__font__select(size){
    var size__2233 = document.getElementById("change__size__font").value;
    let words__contents = document.getElementById("content-words");
    words__contents.style.fontSize = size__2233+"px";
} 
function remove__content_words(){
    let words__contents = document.getElementById("content-words");
    words__contents.value = "";
}
function bold__words(){
    let words__contents = document.getElementById("content-words");
    words__contents.style.fontWeight = "bold";
}
function reset__words(){
    let words__contents = document.getElementById("content-words");
    words__contents.style.fontWeight = "400";
    words__contents.style.fontFamily = "Poppins, sans-serif";
    words__contents.style.fontSize = "18px";
}
function auto__save__value(noidung){
    let words__contents = document.getElementById("content-words").value;
    localStorage.setItem('noidung',words__contents);
}
check__show__data();
function check__show__data(){
    localStorage.setItem('Client_checker', window.location);
    var value__local = localStorage.getItem('noidung');
    console.log(value__local);
    document.getElementById("content-words").innerHTML = value__local;
}
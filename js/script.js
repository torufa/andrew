document.cookie = "some text";
document.cookie = "some = text";
document.cookie = "hellow = hello"; //making another cookie

localStorage.setItem("red", JSON.stringify({a : "dress codes", b : "yet it's a joke"}));
let data = JSON.parse(localStorage.getItem("red"));
console.log(data);

//event bubbling - goes to its child too
let main = document.querySelector(".main");
let nav = document.querySelector(".nav");
// nav.addEventListener("click", function (e) {
//    alert("clicked");
// })

//event capturing - goes to its parents
let btn = document.querySelector("button");
btn.addEventListener("click", function (e){
   console.log("btn clicked");
});
nav.addEventListener("click", function (e){
   console.log("nav clicked");
});
main.addEventListener("click", function (e){
   console.log("main clicked");
})
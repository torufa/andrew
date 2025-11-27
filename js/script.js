let box = document.querySelector(".box");
window.addEventListener("mousemove", function (value) {
   box.style.top = value.clientY + "px";
   box.style.left = value.clientX + "px";
})
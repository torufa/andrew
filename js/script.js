let li = document.querySelectorAll("ul li:nth-child(2n)");
li.forEach(function (value) {
    value.classList.add("red")
})
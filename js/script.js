let text = document.querySelector("#form label");
let button = document.querySelector("#form button");
text.classList.toggle("text");
button.classList.toggle("text");
button.style.borderColor = "rgb(242, 79, 79)";
button.addEventListener("click", ()=>{button.style.borderColor = "white";});


let tYear = new Date().getFullYear();
let result = document.querySelector(".calc");

result.addEventListener("click",function(e) {
    e.preventDefault(); // Stop form reload

    let bYear = Number(document.querySelector("#bdate").value);

    let show = document.querySelector(".result");
    let final = tYear-bYear;

    show.innerHTML = `<i>Congratulations! You've experienced your ${final} years of life<i>`;
})

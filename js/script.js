let h2 = document.querySelector("h2");
h2.addEventListener("click", function(){
    h2.style.backgroundColor = "yellow";
})

let btn = document.querySelector("button");
btn.addEventListener("dblclick", function () {
    btn.style.backgroundColor = "red";
})

//to remove you've to make a particular function first or might take the function at the first senario
function dbl(){
    btn.style.backgroundColor = "red";
}
//btn.addEventListener("dblclick", dbl);
btn.removeEventListener("dblclick", dbl);

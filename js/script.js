let inp = document.querySelector("input");
let form = document.querySelector('form');

let check = document.querySelector(".check");
let hide = document.querySelector(".hide")



form.addEventListener("submit", function (dtls) {
    dtls.preventDefault();
   let inpCheck = inp.value.length;
   if(inpCheck <= 2){
    hide.style.display = "initial";
   }else{
    hide.style.display = "none";
   }
})

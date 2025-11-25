let inp = document.querySelector("form input:nth-child(2)");
inp.addEventListener("input", function(value){
    console.log(value.data);
})

//stoping the backspace null
let inpt = document.querySelector("input");
inpt.addEventListener("input", function (value){
    if(value.data !== null){
        console.log(value.data);
    }
})

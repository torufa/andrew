let main = document.querySelector("#main");
let extra = document.querySelector(".extra");

extra.addEventListener("click", function (value){
    main.click();
});
main.addEventListener("change", function(value){
    let fileName = value.target.files[0];
    if(fileName){
        extra.innerText = fileName.name;
    }
});
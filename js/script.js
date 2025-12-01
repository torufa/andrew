let bar = document.querySelector(".bar");
let progress = document.querySelector(".progress");
let btn = document.querySelector("button");

btn.addEventListener("click", (e)=> {
    e.preventDefault();


    let count = 0;
    let prog = setInterval(()=>{
        if(count <= 100) {
            count++;
            progress.style.width = `${count}%`;
        }else{
            clearInterval(prog);
        }
    },20)

})

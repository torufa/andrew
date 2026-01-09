let task = document.querySelector(".task");
let btn = document.querySelector('button');
let h2 = document.querySelector('h2');
let inp = document.querySelector('input');

btn.addEventListener('click', ()=>{
    task.style.display = 'inherit';
    h2.innerText = inp.value;
})
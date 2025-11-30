let bc = setInterval(() => {
    console.log("flower");
}, 2000);
clearInterval(bc);

let ab = setTimeout(() => {
    console.log("hello world");
}, 1000);


let count = 5;
let time = setInterval(() => {
    if(count >= 1){
    count--;
    console.log(count);
    }else{
        clearInterval(time);
    }
}, 1000);
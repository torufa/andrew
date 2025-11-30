let inps = document.querySelectorAll("input");
let form = document.querySelector("form");
let error = document.querySelector("error");
let nError = document.querySelector("#nameError");
let eError = document.querySelector("#emailError");
let pError = document.querySelector("#passwordError");
    let togglePass = document.querySelector("#togglePassword");
    togglePass.addEventListener("click", (e)=>{
        if(inps[2].type === "password"){
            inps[2].type = "text";
            togglePass.innerText = "hide";
        }else{
            inps[2].type = "password";
            togglePass.innerText = "show"
        }
    })

form.addEventListener("submit", (e)=>{
    e.preventDefault();
    let valid = true;

    //name
    let nlen = inps[0].value.length;
    if(nlen <= 2){
        nError.style.display = "initial";
        valid = false;
    }else{
        nError.style.display = "none";
    }

    //email
    let emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;
    if(!emailRegex.test(inps[1].value)){
        eError.style.display = "initial";
        valid = false;
    }else{
        eError.style.display = "none";
    }

    //password

    const passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{3,}$/;
    if(!passRegex.test(inps[2].value)){
        pError.style.display = "initial";
        valid = false;
    }else{
        pError.style.display = "none";
    }

    //success msg
    if(valid){
        alert("successfully submited");
    }
});
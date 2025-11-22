let a = document.querySelector("a");
//a.href = "https://www.google.com";
a.setAttribute("href", "https://www.google.com");

let img = document.querySelector("img");
img.setAttribute(
    "src",
    "https://images.unsplash.com/photo-1602922960044-d48ce791d3c0?q=80&w=1165&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");

console.log(img.getAttribute("src"));
a.removeAttribute("href");
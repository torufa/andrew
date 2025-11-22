let p = document.createElement("p");
p.textContent = "its a project";

document.querySelector("body").prepend(p);
// document.body.append(p);
document.body.appendChild(p);


// document.querySelector("a").remove();
let body = document.querySelector("body");
body.removeChild(document.querySelector("a"));

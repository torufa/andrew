let text = document.querySelectorAll("i");
console.log(text.length);

let heading = document.querySelector("h2");
heading.setAttribute("title", "Ooops! HI!")

console.log(heading.getAttribute("title"));
heading.removeAttribute("title");

document.body.removeChild(heading);
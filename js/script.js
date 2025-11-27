let form = document.querySelector("form");
let inpts = document.querySelectorAll("input");

let dtls = document.createElement('div');
dtls.classList.add('dtls');
form.appendChild(dtls);

form.addEventListener("submit", function (value) {
   value.preventDefault();
   

   let card = document.createElement("div");
   card.classList.add("card");

   let profile = document.createElement('div');
   profile.classList.add('img');
   let img = document.createElement('img');
   img.setAttribute("src", inpts[0].value);

   let h2 = document.createElement('h2');
   h2.textContent = inpts[1].value;
   let h3 = document.createElement('h3');
   h3.textContent = inpts[2].value;
   let p = document.createElement('p');
   p.textContent = inpts[3].value;

   profile.appendChild(img);
   card.appendChild(profile);
   card.appendChild(h2);
   card.appendChild(h3);
   card.appendChild(p);

   dtls.appendChild(card);

})

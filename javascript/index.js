
const yes = document.querySelector(".yes");
const no = document.querySelector(".no");


no.addEventListener("click", updateNo);
yes.addEventListener("click", updateYes);

function updateNo() {
    switch (no.textContent) {
        case "No":
            yes.style.fontSize = "30px";
            yes.style.padding = "25px";
            no.textContent = "You sure?";
        break;
        case "You sure?":
            yes.style.fontSize = "50px";
            yes.style.padding = "50px";
            no.textContent = "Are you sure?";
        break;
        case "Are you sure?":
            yes.style.fontSize = "100px";
            yes.style.padding = "50px";
            no.textContent = "Really sure?";
        break;
        case "Really sure?":
            yes.style.fontSize = "150px";
            yes.style.padding = "50px";
            no.textContent = "Are you certain?";
        break;
        case "Are you certain?":
            yes.style.fontSize = "200px";
            yes.style.padding = "50px";
            no.textContent = "Are you defenite?";
        break;
        case "Are you defenite?":
            yes.style.fontSize = "250px";
            yes.style.padding = "50px";
            no.textContent = "Are you decided?";
        break;
        case "Are you decided?":
            yes.style.fontSize = "300px";
            yes.style.padding = "50px";
            no.textContent = "Are you unhesitating?";
        break;
        case "Are you unhesitating?":
            yes.style.fontSize = "350px";
            yes.style.padding = "50px";
            no.textContent = "Are you unwavering?";
        break;
        case "Are you unwavering?":
            yes.style.fontSize = "400px";
            yes.style.padding = "50px";
            no.textContent = "Are you unfaltering?";
        break;
        case "Are you unfaltering?":
            yes.style.fontSize = "450px";
            yes.style.padding = "50px";
            no.textContent = "Are you unshaken?";
        break;
        case "Are you unshaken?":
            yes.style.fontSize = "500px";
            yes.style.padding = "50px";
            no.textContent = "Is that final?";
        break;
        case "Is that final?":
            no.style.display = "none"
            yes.style.fontSize = "750px";
        break;
    }
}

function updateYes() {
    no.style.display = "none";
}

const html = document.querySelector("html");

const x = window.matchMedia("(max-width: 320px)") 
    
if (x.matches) {
   
}

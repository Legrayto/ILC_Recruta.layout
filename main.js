"use strict"
// SIDEBAR
const iconMenu = document.querySelector(".menu__burger-icon");
const menuBody = document.querySelector(".menu__body");
iconMenu.addEventListener("click", function(e) {
    document.body.classList.toggle("_lock");
    iconMenu.classList.toggle("_active");
    menuBody.classList.toggle("_active");
});

// MODAL 
const LogInButton = document.querySelector(".header__button");
const iconLogIn = document.querySelector(".menu__form-icon");
const menuLogIn = document.querySelector(".menu__login");
const LogInClose = document.querySelector(".login__icon");

let setActive = function(button){
    button.addEventListener("click", function(e) {
        document.body.classList.toggle("_lock");
        menuLogIn.classList.toggle("_active");
    });
};

setActive(iconLogIn);
setActive(LogInButton);
setActive(LogInClose);

window.onclick = (e) => {
    if (e.target == menuLogIn) {
        document.body.classList.toggle("_lock");
        menuLogIn.classList.toggle("_active");
    }
};

//navbar toggle script

//variables
const nav__close = document.querySelector(".nav__expander.close");
const nav__open = document.querySelector(".nav__expander.open");
const navbar = document.querySelector(".nav");

//functions

const closeNav = () => {
    navbar.style.left = "-19rem";
    navbar.style.transition = "left 1s";
    nav__open.style.opacity = "1";
    nav__open.style.transition = "opacity 1.2s ease-in 1s";
};

const openNav = () => {
    navbar.style.left = "0px";
    navbar.style.transition = "left 1s";
    nav__open.style.opacity = "0";
    nav__open.style.transition = "opacity .1s";
};

//event listener
nav__close.addEventListener("click", () => {
  closeNav();
});

nav__open.addEventListener("click", () => {
  openNav();
});


//reservation button background fade 

//variables
const reservationBtn = document.querySelector(".reservation__container__button");

//functions
const reservationEffectIn = () => {
  reservationBtn.style.backgroundColor = "#746b65";
  reservationBtn.style.border = "solid #746b65 1px";
  reservationBtn.style.color = "white";
  reservationBtn.style.transition = "background-color 1s, color 1s";
}

const reservationEffectOut = () => {
  reservationBtn.style.backgroundColor = "transparent";
  reservationBtn.style.color = "inherit";
  reservationBtn.style.transition = "background-color 1s, color 1s";
}

//event listener

reservationBtn.addEventListener("mouseenter", () => {
  reservationEffectIn();
});

reservationBtn.addEventListener("mouseleave", () => {
  reservationEffectOut();
});
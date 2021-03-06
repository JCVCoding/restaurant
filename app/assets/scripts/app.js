//navbar toggle script

//variables
const nav__close = document.querySelector(".nav__expander.close");
const nav__open = document.querySelector(".nav__expander.open");
const nav__open__about = document.querySelector(".nav__expander.open.x");
const nav__open__about__i = document.querySelector(".fa.fa-chevron-right.fa-4x.x");
const navbar = document.querySelector(".nav");

//functions

const closeNav = () => {
    navbar.style.left = "-19rem";
    navbar.style.transition = "left 1s";
    nav__open.style.opacity = "1";
    nav__open.style.transition = "opacity 1.2s ease-in 1s";
    nav__open.style.visibility = "visible";
};

const openNav = () => {
    navbar.style.left = "0px";
    navbar.style.transition = "left 1s";
    nav__open.style.opacity = "0";
    nav__open.style.transition = "opacity .1s";
    nav__open.style.visibility = "hidden";
};

//for mobile view

const closeNavMobile = () => {
  navbar.style.left = "-14rem";
  navbar.style.transition = "left 1s";
  nav__open.style.opacity = "1";
  nav__open.style.transition = "opacity .8s ease-in .6s";
  nav__open.style.visibility = "visible";
};

const openNavMobile = () => {
  navbar.style.left = "0px";
  navbar.style.transition = "left 1s";
  nav__open.style.opacity = "0";
  nav__open.style.transition = "opacity .1s";
  nav__open.style.visibility = "hidden";
};

//event listener
nav__close.addEventListener("click", () => {
  if (window.matchMedia("(max-width: 420px)").matches) {
    closeNavMobile();
  } else {
    closeNav();
  }
});

nav__open.addEventListener("click", () => {
  if (window.matchMedia("(max-width: 420px)").matches) {
  openNavMobile();
  } else {
    openNav();
  }
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
  reservationBtn.style.backgroundColor = "black";
  reservationBtn.style.border = "solid white 1px";
  reservationBtn.style.color = "white";
  reservationBtn.style.transition = "background-color 1s, color 1s";
}

//event listener
if (window.matchMedia("(min-width: 421px)").matches) {
  reservationBtn.addEventListener("mouseenter", () => {
    reservationEffectIn();
  });

  reservationBtn.addEventListener("mouseleave", () => {
    reservationEffectOut();
  });
}

//about page minimize arrow
const minimize = () => {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    nav__open__about.style.left = "1%";
    nav__open__about__i.style.fontSize = "2.5em";
    nav__open__about.style.transition = "left .3s"
  } else {
    nav__open__about.style.left = "5%";
    nav__open__about__i.style.fontSize = "4em";
    nav__open__about.style.transition = "left .3s"
  }
}

//call function
window.onscroll = () => {
  minimize();
}
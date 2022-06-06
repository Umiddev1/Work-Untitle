let elBtn = document.querySelector('.header__menu');
let elNav = document.querySelector('.nav');
let elClose = document.querySelector('.nav__close');
let elMenuBtn = document.querySelector('.header__bottom-menu');
let elAside = document.querySelector('.header__aside');
let elAsideClose = document.querySelector(".header__aside-close");
let elResponseBtn = document.querySelector(".header__response-btn");
elClose.addEventListener("click", () => {
  elNav.classList.remove("show")
})
function handleNav() {
  elNav.classList.add("show");
}

elMenuBtn.addEventListener("click", () => {
  elAside.classList.add("aside-show");
})

elAsideClose.addEventListener("click", () => {
  elAside.classList.remove("aside-show")
})

elResponseBtn.addEventListener("click", () => {
  elAside.classList.add("aside-show")
})





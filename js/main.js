let elBtn = document.querySelector('.header__menu');
let elNav = document.querySelector('.nav');
let elClose = document.querySelector('.nav__close');
let elMenuBtn = document.querySelector('.header__bottom-menu');
let elAside = document.querySelector('.header__aside');
let elAsideClose = document.querySelector(".header__aside-close")
elBtn.addEventListener("click", handleNav);
elClose.addEventListener("click", () => {
  elNav.classList.remove("show")
})
function handleNav() {
  elNav.classList.add("show");
}

elMenuBtn.addEventListener("click", (e) => {
  elAside.classList.add("aside-show");
})

elAsideClose.addEventListener("click", () => {
  elAside.classList.remove("aside-show")
})



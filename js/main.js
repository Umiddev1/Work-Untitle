let elBtn = document.querySelector('.header__menu');
let elNav = document.querySelector('.nav');
let elClose = document.querySelector('.nav__close');
let elMenuBtn = document.querySelector('.header__bottom-menu');
let elResponseBtn =document.querySelector(".header__response-btn");
let elAside = document.querySelector('.header__aside');
let elAsideClose = document.querySelector(".header__aside-close");
let elInfo = document.querySelector(".info");
let elArmatura = document.querySelector(".armatura");
let elTr = document.querySelectorAll("tr");
let elPaymentBtn = document.querySelectorAll(".payment__btn");
let elPaymentDes = document.querySelectorAll(".payment__des");
let elTableCarts = document.querySelectorAll(".table__cart")
elClose.addEventListener("click", () => {
  elNav.classList.remove("show")
})
function handleNav() {
  elNav.classList.add("show");
}

elMenuBtn.addEventListener("click", () => {
  elAside.classList.add("aside-show");
}) 

elResponseBtn.addEventListener("click", () => {
  elAside.classList.add("aside-show");
});

elAsideClose.addEventListener("click", () => {
  elAside.classList.remove("aside-show");
})

elTr.forEach(items => {
  items.addEventListener("click", () => {
    elArmatura.style.display = "none";
    elInfo.style.display = "block";
  })
})

elPaymentBtn.forEach(items => {
  items.addEventListener("click", e => {
    let tabId = items.getAttribute("data-tab")
    let currentTab = document.querySelector(tabId)

    elPaymentBtn.forEach(btn => btn.classList.remove("btn-bg"));
    elPaymentDes.forEach(function(items) {
      items.classList.remove("des-block")
    })
    e.target.classList.add("btn-bg");
    currentTab.classList.add("des-block");
  })
})
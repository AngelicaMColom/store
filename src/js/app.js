const hamburger = document.querySelector(".menu-icon");
const menu = document.querySelector(".menu");
const menuList = document.querySelector(".menu__list");

function changeAnimation() {
  hamburger.classList.add("active");
   activeMenu();
}

function activeMenu() {
  console.log(menu);
  menu.classList.remove("no-active");
  menuList.classList.add("active");
}

function closeMenu() {
  menu.classList.add("no-active");
  menuList.classList.remove("active");
  hamburger.classList.remove("active");
}

hamburger.addEventListener("click", changeAnimation);
menu.addEventListener("click", closeMenu);

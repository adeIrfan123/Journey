// hamburger
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");
hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
    navMenu.classList.add("hidden");
    hamburger.classList.remove("hamburger-active");
  }
});

const btnNav = document.getElementById("btn-nav");
const footNav = document.getElementById("footer-menu");
btnNav.addEventListener("click", function () {
  footNav.classList.toggle("hidden");
});

document.addEventListener("click", function (e) {
  if (!btnNav.contains(e.target) && !footNav.contains(e.target)) {
    footNav.classList.add("hidden");
  }
});

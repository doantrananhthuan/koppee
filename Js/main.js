const menu = document.querySelector(".nav__links");

const menuButton = document.getElementById("mobile-menu");

menuButton.addEventListener("click", () => {
  menu.classList.toggle("nav__open");
});

const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
});

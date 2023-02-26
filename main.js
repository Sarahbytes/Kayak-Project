const navi = document.querySelector(".navi");
const navMenu = document.querySelector(".nav-menu");


navi.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});

const navItems = document.querySelectorAll(".nav-item");

navItems.forEach(n => n.addEventListener("click", () => {
    navMenu.classList.remove("active");
}));
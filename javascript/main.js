const navg = document.getElementById("navigation");
const menuButton = document.getElementById("menu-button");

menuButton.addEventListener("click", event => {
    navg.classList.toggle("open");
    event.stopPropagation();
});

document.addEventListener("click", () => {
    navg.classList.remove("open");
});
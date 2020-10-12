const navg = document.getElementById("navigation");
const menuButton = document.getElementById("menu-button");

const portfolioButton = document.getElementById("portfolio-dropdown");
const dropdown = document.getElementById("dropdown-content");

menuButton.addEventListener("click", event => {
    navg.classList.toggle("open");
    event.stopPropagation();
});

portfolioButton.addEventListener("click", event => {
    dropdown.classList.toggle("expand");
    event.stopPropagation();
});

document.addEventListener("click", () => {
    navg.classList.remove("open");
    dropdown.classList.remove("expand");
});
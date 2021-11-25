// NAVBAR MENU
const menuOpen = document.querySelector(".menu");
const menuClosed = document.querySelector(".close");
const navMenu = document.querySelector(".nav-menu");
const nav = document.querySelector(".nav");

menuOpen.addEventListener("click", () => {
  navMenu.classList.add("menu-down");
});

menuClosed.addEventListener("click", () => {
  navMenu.classList.remove("menu-down");
});

const menuGoAway = document.querySelector(".menu-down");
document.addEventListener('scroll', () => {
  navMenu.classList.remove("menu-down");
})





menuOpen.addEventListener('click', () => {
  nav.classList.add("nav-black")
});

menuClosed.addEventListener("click", () => {
  nav.classList.remove("nav-black");
});





// FOOTER DROPDOWN
const listItems = document.querySelectorAll(".footer-menu li");

listItems.forEach((listItem) => {
  const button = listItem.querySelector("button");
  const dropdown = listItem.querySelector(".dropdown");

  console.log(dropdown);
  console.log(button);

  button.addEventListener("click", () => {
    dropdown.classList.toggle("show-dropdown");
  });
});


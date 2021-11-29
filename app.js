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
// document.addEventListener("scroll", () => {
//   navMenu.classList.remove("menu-down");
// });
if (menu-down) {
  
}


menuOpen.addEventListener("click", () => {
  nav.classList.add("nav-black");
});

menuClosed.addEventListener("click", () => {
  nav.classList.remove("nav-black");
});

// CHOOSE LIGHT
const image = document.querySelector(".color .light");
const greenButton = document.querySelector(".green");
const lilacButton = document.querySelector(".lilac");
const pinkButton = document.querySelector(".pink");

greenButton.addEventListener("click", () => {
  image.src = "./images/sideviewGREEN.jpg";
  greenButton.classList.toggle("chosen");
  pinkButton.classList.remove("chosen");
  lilacButton.classList.remove("chosen");
});

lilacButton.addEventListener("click", () => {
  image.src = "./images/sideviewLILAC.jpg";
  lilacButton.classList.toggle("chosen");
  pinkButton.classList.remove("chosen");
  greenButton.classList.remove("chosen");
});

pinkButton.addEventListener("click", () => {
  image.src = "./images/sideviewPINK.jpg";
  pinkButton.classList.toggle("chosen");
  lilacButton.classList.remove("chosen");
  greenButton.classList.remove("chosen");
});

// CHOOSE LIGHT DESKTOP
const imageDesktop = document.querySelector(".color .light-desktop");
const greenButtonDesktop = document.querySelector(".green-desktop");
const lilacButtonDesktop = document.querySelector(".lilac-desktop");
const pinkButtonDesktop = document.querySelector(".pink-desktop");

greenButtonDesktop.addEventListener("click", () => {
  imageDesktop.src = "./images/sideviewGREEN.jpg";
  greenButtonDesktop.classList.toggle("chosen");
  pinkButtonDesktop.classList.remove("chosen");
  lilacButtonDesktop.classList.remove("chosen");
});

lilacButtonDesktop.addEventListener("click", () => {
  imageDesktop.src = "./images/sideviewLILAC.jpg";
  lilacButtonDesktop.classList.toggle("chosen");
  pinkButtonDesktop.classList.remove("chosen");
  greenButtonDesktop.classList.remove("chosen");
});

pinkButtonDesktop.addEventListener("click", () => {
  imageDesktop.src = "./images/sideviewPINK.jpg";
  pinkButtonDesktop.classList.toggle("chosen");
  lilacButtonDesktop.classList.remove("chosen");
  greenButtonDesktop.classList.remove("chosen");
});

// FOOTER DROPDOWN
const listItems = document.querySelectorAll(".footer-menu li");

listItems.forEach((listItem) => {
  const button = listItem.querySelector("button");
  const dropdown = listItem.querySelector(".dropdown");

  button.addEventListener("click", () => {
    dropdown.classList.toggle("show-dropdown");
  });
});

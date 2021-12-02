// NAVBAR MENU
const menuOpen = document.querySelector(".menu");
const menuClosed = document.querySelector(".close");
const navMenu = document.querySelector(".nav-menu");
const nav = document.querySelector(".nav");

menuOpen.addEventListener("click", () => {
  navMenu.classList.add("menu-down");
  document.body.style.position = "fixed";
});

menuClosed.addEventListener("click", () => {
  navMenu.classList.remove("menu-down");
  document.body.style.position = "";
});

// NEWSLETTER
const emailInput = document.querySelector(".newsletter input");
const submitButton = document.querySelector(".newsletter button");

submitButton.addEventListener("click", () => {
  emailInput.value = "";
});

// CHOOSE LIGHT
const image = document.querySelector(".color .light");
const greenButton = document.querySelector(".green");
const lilacButton = document.querySelector(".lilac");
const pinkButton = document.querySelector(".pink");

greenButton.addEventListener("click", () => {
  image.src = "./images/green960.jpg";
  greenButton.classList.toggle("chosen");
  pinkButton.classList.remove("chosen");
  lilacButton.classList.remove("chosen");
});

lilacButton.addEventListener("click", () => {
  image.src = "./images/lilac960.jpg";
  lilacButton.classList.toggle("chosen");
  pinkButton.classList.remove("chosen");
  greenButton.classList.remove("chosen");
});

pinkButton.addEventListener("click", () => {
  image.src = "./images/pink960.jpg";
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
  imageDesktop.src = "./images/green1920.jpg";
  greenButtonDesktop.classList.toggle("chosen");
  pinkButtonDesktop.classList.remove("chosen");
  lilacButtonDesktop.classList.remove("chosen");
});

lilacButtonDesktop.addEventListener("click", () => {
  imageDesktop.src = "./images/lilac1920.jpg";
  lilacButtonDesktop.classList.toggle("chosen");
  pinkButtonDesktop.classList.remove("chosen");
  greenButtonDesktop.classList.remove("chosen");
});

pinkButtonDesktop.addEventListener("click", () => {
  imageDesktop.src = "./images/pink1920.jpg";
  pinkButtonDesktop.classList.toggle("chosen");
  lilacButtonDesktop.classList.remove("chosen");
  greenButtonDesktop.classList.remove("chosen");
});

// CONTACT US
const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const emailInputFooter = document.querySelector(".footer-email");
const phone = document.getElementById("phone");
const message = document.querySelector("footer textarea");
const submitButtonFooter = document.querySelector("footer button");

submitButtonFooter.addEventListener("click", () => {
  firstName.value = "";
  lastName.value = "";
  emailInputFooter.value = "";
  phone.value = "";
  message.value = "";
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

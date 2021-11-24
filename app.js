// NAVBAR MENU
const menuOpen = document.querySelector(".menu");
const menuClosed = document.querySelector(".close");
const listBox = document.querySelector(".list-box");

menuOpen.addEventListener("click", () => {
  listBox.classList.add("menu-down");
});

menuClosed.addEventListener("click", () => {
  listBox.classList.remove("menu-down");
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

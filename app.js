const menuOpen = document.querySelector('.menu');
const menuClosed = document.querySelector('.close');
const listBox = document.querySelector('.list-box');

menuOpen.addEventListener('click', () => {
    listBox.classList.add('hej');
  });

  menuClosed.addEventListener('click', () => {
    listBox.classList.remove('hej');
  });




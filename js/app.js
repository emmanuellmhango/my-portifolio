const menu = document.getElementById('mobile-menu');
const menuModal = document.getElementById('myMenuModal');
const menuClose = document.getElementById('closeBtn');
const menuItems = document.getElementsByClassName('menu-links-item');

menuClose.addEventListener('click', () => {
  menuModal.style.display = 'none';
  menu.style.display = 'block';
});

menu.addEventListener('click', () => {
  menuModal.style.display = 'block';
  menu.style.display = 'none';
});

menuItems.addEventListener('click', () => {
  menu.style.display = 'none';
});

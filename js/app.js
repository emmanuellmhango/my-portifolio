const menu = document.getElementById('mobile-menu');
const menuModal = document.getElementById('myMenuModal');
const menuClose = document.getElementById('closeBtn');
const menuItemAbout = document.getElementById('menu-links-item-about');
const menuItemPortfolio = document.getElementById('menu-links-item-portfolio');
const menuItemContact = document.getElementById('menu-links-item-contact');
const menuBody = document.getElementById('mobile-menu-body');
const menuBlur = document.getElementById('mobile-menu-blur');
const menuHeaderTop = document.getElementById('menu-header-top');
const menuLogo = document.getElementById('menu-logo');

window.onresize = () => {
  window.onload = () => {
    if (window.matchMedia('(min-width: 768px)').matches) {
      menuModal.style.display = 'none';
      menu.style.display = 'block';
      menuBody.style.overflowY = 'visible';
      menuBlur.style.filter = 'blur(0)';
      menuLogo.style.filter = 'blur(0)';
    }
  };
};

menuClose.addEventListener('click', () => {
  menuModal.style.display = 'none';
  menu.style.display = 'block';
  menuBody.style.overflowY = 'visible';
  menuBlur.style.filter = 'blur(0)';
  menuLogo.style.filter = 'blur(0)';
  menuHeaderTop.style.display = 'flex';
});

menu.addEventListener('click', () => {
  menuModal.style.display = 'block';
  menu.style.display = 'none';
  menuBody.style.overflowY = 'hidden';
  menuBlur.style.filter = 'blur(5px)';
  menuLogo.style.filter = 'blur(5px)';
  menuHeaderTop.style.display = 'none';
});

menuItemAbout.addEventListener('click', () => {
  menuModal.style.display = 'none';
  menu.style.display = 'block';
  menuBody.style.overflowY = 'visible';
  menuBlur.style.filter = 'blur(0)';
  menuLogo.style.filter = 'blur(0)';
  menuHeaderTop.style.display = 'flex';
});

menuItemContact.addEventListener('click', () => {
  menuModal.style.display = 'none';
  menu.style.display = 'block';
  menuBody.style.overflowY = 'visible';
  menuBlur.style.filter = 'blur(0)';
  menuLogo.style.filter = 'blur(0)';
  menuHeaderTop.style.display = 'flex';
});

menuItemPortfolio.addEventListener('click', () => {
  menuModal.style.display = 'none';
  menu.style.display = 'block';
  menuBody.style.overflowY = 'visible';
  menuBlur.style.filter = 'blur(0)';
  menuLogo.style.filter = 'blur(0)';
  menuHeaderTop.style.display = 'flex';
});

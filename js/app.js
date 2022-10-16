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
const errorDiv = document.getElementById('error-output');
const form = document.getElementById('contact_form');

const myPortfolioData = [
  {
    id: 1,
    name: 'Tonic',
    title: 'CANOPY',
    technology: 'Back End Dev',
    description1: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    description2: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    description3: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    img1: 'images/tonic-project.png',
    img2: 'images/Snapshoot Portfolio.png',
    technologies: ['html', 'css', 'javascript', 'github', 'ruby', 'Bootstraps'],
    class1: 'my-works',
  },
  {
    id: 2,
    name: 'Multi-Post Stories',
    title: 'FACEBOOK',
    technology: 'Fullstack Dev',
    description1: 'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends',
    description2: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    description3: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    img1: 'images/multi-post-stories-project.jpg',
    img2: 'images/Snapshoot-Portfolio-3.png',
    technologies: ['html', 'css', 'javascript', 'github', 'ruby', 'Bootstraps'],
    class1: 'my-worksRev',
  },
  {
    id: 3,
    name: 'Tonic',
    title: 'FACEBOOK',
    technology: 'Back End Dev',
    description1: 'Exploring the future of media in Facebooks first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.',
    description2: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    description3: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    img1: 'images/tonic-2-project.jpg',
    img2: 'images/Snapshoot-Portfolio-2.png',
    technologies: ['html', 'css', 'javascript', 'github', 'ruby', 'Bootstraps'],
    class1: 'my-works',
  },
  {
    id: 4,
    name: 'Multi-Post Stories',
    title: 'CANOPY',
    technology: 'Back End Dev',
    description1: 'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
    description2: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    description3: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    img1: 'images/multi-post-stories-2-project.jpg',
    img2: 'images/Snapshoot-Portfolio-4.png',
    technologies: ['html', 'css', 'javascript', 'github', 'ruby', 'Bootstraps'],
    class1: 'my-worksRev',
  },
];

const portfolioProjects = document.getElementById('portfolio');

myPortfolioData.forEach((data) => {
  portfolioProjects.innerHTML += `
   <div class="${data.class1}">
      <figure class="img-wide-screen">
          <img src="${data.img1}" class="works-image small-screen-view " alt="Tonic App Screenshot" width="100%">
          <img src="${data.img2}" alt="Tonic project image Screenshot" class="wide-screen-view">
      </figure>
      <div class="wider-screen-project-definition">
          <div class="works-description">
              <h3 class="my-works-project-title small-screen-view-none">${data.name}</h3>
              <h3 class="my-works-project-title wide-screen-view-title">${data.name}</h3>
              <ul class="works-headers">
                  <li class="title-header">${data.title}</li>
                  <li><img src="images/works-dot.PNG" class="dot-separator" alt="Dot separator"></li>
                  <li class="title-header-general">${data.technology}</li>
                  <li><img src="images/works-dot.PNG" class="dot-separator" alt="Dot separator"></li>
                  <li class="title-header-general">2015</li>
              </ul>
              <p class="project-description">
                ${data.description1}
              </p>
          </div>
          <section class="project-languages">
              <ul class="my-work-languages">
                  <li class="coding-languages">${data.technologies[0]}</li>
                  <li class="coding-languages">${data.technologies[1]}</li>
                  <li class="coding-languages">${data.technologies[2]}</li>
              </ul>
          </section>
          <section class="project-more">
              <button class="works-see-more" type="button" name="${data.id}">See Project</button>
          </section>
      </div>
    </div>
  `;
});

portfolioProjects.innerHTML += '<div id="popUp" class="popUp hide"></div>';
const modalProject = document.querySelectorAll('.works-see-more');
const popUpModalDiv = document.getElementById('popUp');
modalProject.forEach((proj) => {
  proj.addEventListener('click', () => {
    const name = parseInt(proj.getAttribute('name'), 10);
    const card = myPortfolioData.filter((item) => {
      if (item.id === name) {
        return item;
      }
      return false;
    });

    popUpModalDiv.innerHTML = `
    <div class="popUp-content">
    
    <div class='tonic-project-content'>
        <div class='tonic-project-modal-header'>
            <h2 class='tonic-h2-modal'>${card[0].name}</h2>
            <span class='tonic-project-close' onclick="popUp.classList.toggle('hide')">&times;</span>
        </div>      
        <ul class='works-headers tonic-project-modal-header-techs'>
            <li class='title-header' style='margin-right: 50px;'>${card[0].title}</li>
            <li><img src='images/works-dot.PNG' style='margin-right: 10px;' class='dot-separator' alt='Dot separator'></li>
            <li class='title-header-general'  style='margin-right: 23px;'>${card[0].technology}</li>
            <li><img src='images/works-dot.PNG' style='margin-right: 13px;' class='dot-separator' alt='Dot separator'></li>
            <li class='title-header-general'>2015</li>
        </ul>
        <div class='tonic-project-modal-body'>
            <figure class='img-wide-screen-modal'>
                <img src='${card[0].img1}' class='works-image style-image small-screen-view' alt='Tonic App Screenshot'>
                <img src='${card[0].img2}' class='wide-screen-view modal-pic-full' alt='Tonic project image Screenshot'>
            </figure>
        </div>
        <section class='project-aside'>
            <div class='project-aside-description'>
                <p class='project-description-tonic small-screen-view-des'>
                 ${card[0].description3}
                </p>
                <p class='project-description-tonic full-screen-view-des'>
                 ${card[0].description2}
                </p>
            </div>
            <div class='project-aside-languages'>
                <section class='project-languages-tonic deskFlex'>
                    <ul class='my-work-languages-tonic' id='language-list'>
                      <li class='coding-languages'>${card[0].technologies[0]}</li>
                      <li class='coding-languages'>${card[0].technologies[1]}</li>
                      <li class='coding-languages'>${card[0].technologies[2]}</li>
                    </ul>
                    <ul class='my-work-languages-tonic' id='language-list'>
                      <li class='coding-languages desktop'>${card[0].technologies[3]}</li>
                      <li class='coding-languages desktop'>${card[0].technologies[4]}</li>
                      <li class='coding-languages desktop'>${card[0].technologies[5]}</li>
                    </ul>
                </section>
                <div class='tonic-project-modal-footer'>
                    <button class='tonic-see-live'><span class='tonic-see-live-text'>See live</span> <img class='tonic-see-live-img' src='./images/live.png' alt='See source on Github' srcset=''></button>
                    <button class='tonic-see-live'><span class='tonic-see-live-text'>See Source</span> <img class='tonic-see-live-img' src='./images/cat.png' alt='See source on Github' srcset=''></button>
                </div>
            </div>
          </section>
      </div>
    </div>`;

    popUpModalDiv.classList.toggle('hide');
  });
});

form.addEventListener('submit', (e) => {
  const email = document.getElementById('email').value;
  if (email !== email.toLowerCase()) {
    errorDiv.innerHTML = 'Oops! the email should be in lowercase';
    e.preventDefault();
  }
});

form.addEventListener('keyup', () => {
  const data = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    message: document.getElementById('message').value,
  };
  localStorage.setItem('data', JSON.stringify(data));
});

function getData() {
  const data = JSON.parse(localStorage.getItem('data'));

  if (data) {
    document.getElementById('name').value = data.name;
    document.getElementById('email').value = data.email;
    document.getElementById('message').value = data.message;
  }
}

getData();

window.addEventListener('resize', () => {
  if (window.matchMedia('(min-width: 768px)').matches) {
    menuModal.style.display = 'none';
    menu.style.display = 'block';
    menuBody.style.overflowY = 'visible';
    menuBlur.style.filter = 'blur(0)';
    menuLogo.style.filter = 'blur(0)';
  }
});

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

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
    name1: 'Car Rental App',
    name2: 'Car Rental App',
    title: 'Car Rental',
    technology: 'Full-Stack',
    description1:
      'The car rental app is a responsive application that displays a list of vehicles and lets people rent their favorite car. Built with React and Redux, styled through React basic styling, and used React testing library and jest snapshots to test all the components. The App fetches data from the back end which is built using Ruby on Rails.',
    description2:
      'The car rental app is a responsive application that displays a list of vehicles and lets people rent their favorite car. Built with React and Redux, styled through React basic styling, and used React testing library and jest snapshots to test all the components. The App fetches data from the back end which is built using Ruby on Rails',
    description3:
      'The car rental app is a responsive application that displays a list of vehicles and lets people rent their favorite car. Built with React and Redux, styled through React basic styling, and used React testing library and jest snapshots to test all the components. The App fetches data from the back end which is built using Ruby on Rails',
    img1: 'images/carrental.png',
    img2: 'images/carrentallarge.png',
    technologies: ['React', 'Ruby on Rails', 'JavaScript', 'GitHub', 'HTML5', 'CSS3'],
    class1: 'my-works',
    link: 'https://land-rover-e.netlify.app',
  },
  {
    id: 2,
    name1: 'Space Travel Hub',
    name2: 'Space Travel Hub',
    title: 'Space Hub',
    technology: 'Full-Stack',
    description1:
      'Space Travelers Hub is a single-page app (SPA) that displays a list of Rockets & Missions by fetching live data from SpaceX API. SpaceX is a company that provides commercial and scientific space travel services. The application allows users to reserve/cancel rockets and join/leave space missions. Built with React and Redux, styled through React basic styling, and used React testing library and jest snapshots to test all the components.',
    description2:
      'Space Travelers Hub is a single-page app (SPA) that displays a list of Rockets & Missions by fetching live data from SpaceX API. SpaceX is a company that provides commercial and scientific space travel services. The application allows users to reserve/cancel rockets and join/leave space missions. Built with React and Redux, styled through React basic styling, and used React testing library and jest snapshots to test all the components.',
    description3:
      'Space Travelers Hub is a single-page app (SPA) that displays a list of Rockets & Missions by fetching live data from SpaceX API. SpaceX is a company that provides commercial and scientific space travel services. The application allows users to reserve/cancel rockets and join/leave space missions. Built with React and Redux, styled through React basic styling, and used React testing library and jest snapshots to test all the components.',
    img1: 'images/space.png',
    img2: 'images/spacelarge.png',
    technologies: ['JavaScript', 'React', 'Redux','HTML5', 'CSS3', 'GitHub'],
    class1: 'my-works',
    link: 'https://jellywiz.github.io/space-travlers/',
  },
  {
    id: 3,
    name1: 'Claims Support',
    name2: 'Claims Support',
    title: 'TAGET App',
    technology: 'Full-Stack',
    description1:
      'The Claims support dashboard is an app that displays the data and provides analytics for the incidents recorded and tagged places brought to the attention of authorities. The super user can see the tagged places, and incidents recorded, and reject/forward them to the authorities responsible for handling that incident. The super user can also add/delete stakeholders of the project. The app is built using React',
    description2:
      'The Claims support dashboard is an app that displays the data and provides analytics for the incidents recorded and tagged places brought to the attention of authorities. The super user can see the tagged places, and incidents recorded, and reject/forward them to the authorities responsible for handling that incident. The super user can also add/delete stakeholders of the project. The app is built using React',
    description3:
      'The Claims support dashboard is an app that displays the data and provides analytics for the incidents recorded and tagged places brought to the attention of authorities. The super user can see the tagged places, and incidents recorded, and reject/forward them to the authorities responsible for handling that incident. The super user can also add/delete stakeholders of the project. The app is built using React',
    img1: 'images/claims.jpg',
    img2: 'images/claimslarge.jpg',
    technologies: ['JavaScript', 'React', 'Ruby on Rails', 'CSS', 'Redux', 'GitHub'],
    class1: 'my-works',
    link: 'https://claims-app.onrender.com/',
  },
  {
    id: 4,
    name1: 'Tagging App',
    name2: 'Tagging App',
    title: 'Mobile App',
    technology: 'Full-Stack',
    description1:
      'The TAGET Tagging app is an app that lets users notify their authorities about incidents in their cities. The incidents include fires, gas leaks, road accidents, infrastructure damage, etc. The user can take pictures, write the problem, and then submit it.The geo-location of place where the user takes the images from is tagged. The app is built using React',
    description2:
      'The TAGET Tagging app is an app that lets users notify their authorities about incidents in their cities. The incidents include fires, gas leaks, road accidents, infrastructure damage, etc. The user can take pictures, write the problem, and then submit it.The geo-location of place where the user takes the images from is tagged. The app is built using React',
    description3:
      'The TAGET Tagging app is an app that lets users notify their authorities about incidents in their cities. The incidents include fires, gas leaks, road accidents, infrastructure damage, etc. The user can take pictures, write the problem, and then submit it.The geo-location of place where the user takes the images from is tagged. The app is built using React',
    img1: 'images/tagetapp.png',
    img2: 'images/tagetapp.png',
    technologies: ['React Native', 'Redux', 'Expo', 'React', 'JavaScript', 'GitHub', 'CSS3'],
    class1: 'my-works',
    link: 'https://github.com/emmanuellmhango/taget-app',
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
              <h3 class="my-works-project-title small-screen-view-none">${data.name1}</h3>
              <h3 class="my-works-project-title wide-screen-view-title">${data.name2}</h3>
              <ul class="works-headers">
                <li class="title-header">${data.title}</li>
                <li><img src="images/works-dot.PNG" class="dot-separator" alt="Dot separator"></li>
                <li class="title-header">${data.technology}</li>
                <li><img src="images/works-dot.PNG" class="dot-separator" alt="Dot separator"></li>
                <li class="title-header">2023</li>
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
              <a>
                <button class="works-see-more" type="button" name="${data.id}">See Project</button>
              </a>
          </section>
      </div>
    </div>
  `;
});

portfolioProjects.innerHTML += '<div id="popUp" class="popUp hide"></div>';
const modalProject = document.querySelectorAll('.works-see-more');
const popUpModalDiv = document.getElementById('popUp');
const popUpModalDivBg = document.getElementById('mobile-menu-body');
modalProject.forEach((proj) => {
  proj.addEventListener('click', () => {
    const name = parseInt(proj.getAttribute('name'), 10);
    const card = myPortfolioData.filter((item) => {
      if (item.id === name) {
        return item;
      }
      return false;
    });
    popUpModalDivBg.style.overflowY = 'hidden';
    popUpModalDiv.innerHTML = `
    <div class="popUp-content">
    <div class='tonic-project-content'>
        <div class='tonic-project-modal-header'>
            <h2 class='tonic-h2-modal small-screen-view'>${card[0].name1}</h2>
            <h2 class='tonic-h2-modal wide-screen-views'>${card[0].name2}</h2>
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
                  <a href="${card[0].link}" target="_blank">
                    <button class="works-see-more" type="button" name="${card[0].id}">See Project</button>
                  </a>
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
